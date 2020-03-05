(ns react-med.storage-module.local-storage
  (:require
    [akiroz.re-frame.storage :refer [reg-co-fx!]]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [re-frame.core :as re-frame]
    [react-med.storage-module.firebase :as fb-module]
    [react-med.storage-module.initial-state :as initial-state]
    ))

;; ------ The save ------

;; This is what tells inject-cofx what to do with :store
(reg-co-fx! :react-med-app-state  ;; local storage key
            {:fx :store           ;; re-frame fx ID
             :cofx :store})       ;; re-frame cofx ID

(re-frame/reg-event-fx
  ::save-domain-to-local-storage
  [(re-frame/inject-cofx :store)]
  (fn-traced [{:keys [db store]} _]
    ;; Only save data if there's already data in the local-storage,
    ;; otherwise restore from the firebase.
    (if (and (:domain store) (:domain db))
      {:store (assoc store :domain (:domain db))
       :dispatch [::fb-module/save-to-firebase (assoc store :domain (:domain db))]}
      {:dispatch [::fb-module/restore-domain-from-firebase]})))

;; ------ The load ------

;; This is done only when the app is initialized.
(re-frame/reg-event-fx
  ::load-domain-from-local-storage
  [(re-frame/inject-cofx :store)]
  (fn-traced [{:keys [db store]} _]
    ;; Restore from the firebase if there's nothing in the local-storage.
    (if (:domain store)
      {:db (merge store initial-state/ui-initial-state)}
      {:db (assoc-in db [:ui :state] "loading")
       :dispatch [::fb-module/restore-domain-from-firebase]})))

