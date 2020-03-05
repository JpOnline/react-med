(ns react-med.storage-module.firebase
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [firebase :as fb]
    [re-frame.core :as re-frame]
    [react-med.storage-module.initial-state :as initial-state]
    ))

(def firebase-config
  #js {:apiKey "AIzaSyBUX289bdtzi-V6w6rsk0GlYOIkYmTmm6o"
       :authDomain "react-med.firebaseapp.com"
       :databaseURL "https://react-med.firebaseio.com"
       :projectId "react-med"
       :storageBucket "react-med.appspot.com"
       :messagingSenderId "734281716491"
       :appId "1:734281716491:web:06b9f356d360f6fcfcc80e"
       :measurementId "G-6HQBPS294N"})

(def firebase-db
  (do
    (when (= 0 (-> fb .-apps .-length))
      (-> fb (.initializeApp firebase-config)))
    (-> fb (.database))))

(defn firebase-save [db-map]
  (let [json (clj->js db-map)]
    (assert
      (= db-map (js->clj json :keywordize-keys true))
      "The given map is different if converted back from JSON.")
    ;; TODO: Falta incluir a lógica dos casos em que o usuário foi bloqueado, ou
    ;; seja, não tem permissão para gravar.
    (when-let [user (-> fb .auth .-currentUser)]
      (let [user-email (.-email user)
            name-in-email (first (clojure.string/split user-email "@"))
            user-fb-uid (.-uid user)]
        (-> firebase-db
            (.ref (str "users/"name-in-email"-"user-fb-uid))
            (.set (clj->js db-map)))))))

(re-frame/reg-event-db
  ::save-to-firebase
  (fn-traced
    [app-state [event to-save]]
    (firebase-save to-save)
    app-state))

;; TODO: delete
(re-frame/reg-event-fx
  :test2
  (fn-traced
    [{:keys [db]} [_ snapshot]]
    (js/console.log snapshot)
    {}
    ))

;; TODO: delete
(re-frame/reg-event-fx
  :test-fb
  [(re-frame/inject-cofx :store)]
  (fn-traced
    [_ _]
    #_(-> firebase-db
        (.ref)
        (.once "value"
               (fn [snapshot]
                 (re-frame/dispatch-sync
                   [::test2 snapshot]))
               (fn [e]
                 (js/console.log "firebase erro" e))))
    {}))

(re-frame/reg-event-fx
  ::restore-domain-from-firebase
  (fn-traced
    [{:keys [db]} _]
    (when-let [user (some-> fb .auth .-currentUser)]
      (let [user-email (.-email user)
            name-in-email (first (clojure.string/split user-email "@"))
            user-fb-uid (.-uid user)]
        (-> firebase-db
            (.ref (str "users/"name-in-email"-"user-fb-uid))
            (.once "value"
                   (fn [snapshot]
                     (re-frame/dispatch-sync
                       [::restore-domain-from-firebase-callback snapshot]))))))
    {:db (assoc-in db [:ui :state] "loading")}))

(re-frame/reg-event-fx
  ::restore-domain-from-firebase-callback
  (fn-traced
    [_ [_ snapshot]]
    (let [restored-from-firebase (some-> snapshot
                                         (.val)
                                         (js->clj :keywordize-keys true))
          restored-state (merge restored-from-firebase
                                initial-state/ui-initial-state
                                {:authentication {:user-email (-> fb .auth .-currentUser .-email)}})
          default-state (merge initial-state/domain-initial-state
                               initial-state/ui-initial-state
                               {:authentication {:user-email (-> fb .auth .-currentUser .-email)}})]
      (if restored-from-firebase
        {:db restored-state
         :store restored-state}
        (do
          (js/console.log "Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado.")
          {:db default-state
           :store default-state})))))
