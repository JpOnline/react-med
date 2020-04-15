(ns react-med.pwa-install-component
  "The buttom ui component and all the functions and events necessary to set
  the possibility to install the PWA in the user's mobile."
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [button :as material-button]
    [re-frame.core :as re-frame]
    [react-med.util :as util :refer [<sub >evt]]))

(def deferred-install-prompt (atom nil))

(defn-traced show-install-prompt
  [app-state]
  ;; Show the install prompt
  (.prompt @deferred-install-prompt)
  ;; Wait for the user to respond to the prompt
  (-> @deferred-install-prompt
      .-userChoice
      (.then (fn [choice-result]
               (if (= "accepted" (.-outcome choice-result))
                 (do
                   (js/console.log "User accepted the install prompt.")
                   (assoc-in app-state [:ui :show-pwa-install-button?] false))
                 (do
                   (js/console.log "User dismissed the install prompt.")
                   (assoc-in app-state [:ui :show-pwa-install-button?] true)))))))
(re-frame/reg-event-db ::show-install-prompt show-install-prompt)

(defn show-install-button?
  [app-state]
  (get-in app-state [:ui :show-pwa-install-button?] false))
(re-frame/reg-sub ::show-install-button? show-install-button?)

(defn button []
  [:<> ;; Needed because can accept a possible nil
   (when (<sub [::show-install-button?])
     [:> material-button
      {:style #js {:backgroundColor "#caca30"
                   :margin "10px 15px"
                   :color "white"}
       :variant "contained"
       :onClick #(>evt [::show-install-prompt])}
      "Instalar"])])

(defn-traced show-install-button
  [app-state]
  (assoc-in app-state [:ui :show-pwa-install-button?] true))
(re-frame/reg-event-db ::show-install-button show-install-button)

(defn add-before-install-prompt-event-listener []
  (.addEventListener js/window
                     "beforeinstallprompt"
                     #(do
                        (js/console.log "beforeinstallprompt triggered")
                        ;; Prevent the mini-infobar from appearing on mobile
                        ;; (.preventDefault %)

                        ;; Stash the event so it can be triggered later.
                        (reset! deferred-install-prompt %)

                        ;; Update UI notify the user they can install the PWA
                        (>evt [::show-install-button]))))
