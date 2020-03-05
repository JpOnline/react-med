(ns react-med.authentication.authentication
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [firebase :as fb]
    [re-frame.core :as re-frame]
    [react-med.storage-module.firebase :as fb-module]
    [react-med.util :as util :refer [<sub >evt]]
    [react-med.storage-module.local-storage :as local-storage]
    ))

(defn-traced login-error
  [app-state [event attr message]]
  (-> app-state
      (assoc-in [:ui :state] "login")
      (assoc-in [:ui :login attr] message)))
(re-frame/reg-event-db ::login-error login-error)

;; (defn create-user-with-email-and-password [email password]
;;   (-> fb
;;       .auth
;;       (.createUserWithEmailAndPassword email password)
;;       (.catch (fn [error]
;;                 (js/console.error "😞 Não consegui criar um novo usuário."
;;                                   (.-code error)
;;                                   (.-message error))))))

(defn logout []
  (-> fb
      .auth
      .signOut
      (.then #(js/console.log "Usuário fez logout."))
      (.catch (fn [error]
                (js/console.error "😞 Erro ao fazer logout."
                                  (.-code error)
                                  (.-message error))))))

(defn sign-in-with-email-and-password [email password]
  (-> fb
      .auth
      (.signInWithEmailAndPassword email password)
      (.catch (fn [error]
                (case (.-code error)
                  "auth/invalid-email" (>evt [::login-error :email-error "Email inválido"])
                  "auth/invalid-password" (>evt [::login-error :password-error "Senha inválida"])
                  "auth/user-not-found" (>evt [::login-error :email-error "Usuário não encontrado"])
                  "auth/wrong-password" (>evt [::login-error :password-error "Senha errada ou inexistente"])
                  "auth/argument-error" (>evt [::login-error :email-error "Email inválido"])
                  "auth/network-request-failed" (>evt [::login-error :email-error "Problemas com a conexão. 😞"])
                  (do
                    (>evt [::login-error :email-error (.-message error)])
                    (>evt [::login-error :password-error (.-message error)])
                    (js/console.error "😞 Não consegui logar."
                                      (.-code error)
                                      (.-message error))))))))

(defn-traced email-and-password-login
  [{:keys [db store]} _]
  (js/console.log
    "Logando"
    (sign-in-with-email-and-password
      (get-in db [:ui :login :email])
      (get-in db [:ui :login :password])))
  ;; TODO: Fazer alguma outra indicação de loading, talvez uma que dê para ser reusado em outros componentes, como uma camada por cima com o circular loading que se sobrepõe ao componente, parecido com o layer invisível do actions menu.
  {:db (assoc-in db [:ui :state] "loading")})
(re-frame/reg-event-fx
  ::email-and-password-login
  [(re-frame/inject-cofx :store)]
  email-and-password-login)

(defn-traced user-logged-in
  [{:keys [db store]} [event email]]
  ;; Verifica se o email logado é o mesmo que tá no local-storage
  (if (not= email (get-in store [:authentication :user-email]))
    ;; Restaura os dados do firebase, sobreescrevendo o local-storage.
    {:db (assoc-in db [:ui :state] "loading")
     :store nil
     :dispatch [::fb-module/restore-domain-from-firebase]}
    ;; Carrega dados do local-storage
    {:db (assoc-in db [:ui :state] "loading")
     :dispatch [::local-storage/load-domain-from-local-storage]}))
(re-frame/reg-event-fx
  ::user-logged-in
  [(re-frame/inject-cofx :store)]
  user-logged-in)

(defn-traced user-logged-out
  [{:keys [db store]} _]
  {:store nil
   :db (-> db
           (assoc-in [:ui :state] "login")
           (dissoc :domain)
           (dissoc :authentication))})
(re-frame/reg-event-fx
  ::user-logged-out
  [(re-frame/inject-cofx :store)]
  user-logged-out)

;; Essa API do firebase também usa o padrão de publisher subscriber assim como o
;; reframe. Não tenho certeza quais os eventos podem dar acionar esse onAuthStateChanged
;; então ao invés de ter a informação de usuário no app-state é bom confiar no
;; firebase.auth().currentUser, ou seja, vou usar essa função no lugar de um reg-sub
;; ou ao invés pegar esse dado do app-state em algum evento.
(defonce on-auth-state-changed
  (-> fb
      .auth
      (.onAuthStateChanged
        (fn [user]
          (js/console.log "firebase onAuthStateChanged" user)
          (if user
            (>evt [::user-logged-in (.-email user)])
            (>evt [::user-logged-out]))))))
