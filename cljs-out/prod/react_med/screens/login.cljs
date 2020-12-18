(ns react-med.screens.login
  (:require
    [button :as material-button]
    [card :as material-card]
    [card-content :as material-card-content]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [re-frame.core :as re-frame]
    [react-med.authentication.authentication :as auth]
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    ))

(defn-traced set-login-property
  "Altera propriedades relacionadas à tela de login no app-state."
  [app-state [event property value]]
  (if (empty? value)
    app-state
    (assoc-in app-state [:ui :login property] value)))
(re-frame/reg-event-db ::set-login-property set-login-property)

(defn email
  [app-state]
  (get-in app-state [:ui :login :email]))
(re-frame/reg-sub ::email email)

(defn email-error
  [app-state]
  (get-in app-state [:ui :login :email-error]))
(re-frame/reg-sub ::email-error email-error)

(defn password
  [app-state]
  (get-in app-state [:ui :login :password]))
(re-frame/reg-sub ::password password)

(defn password-error
  [app-state]
  (get-in app-state [:ui :login :password-error]))
(re-frame/reg-sub ::password-error password-error)

(defn-traced clear-errors
  [app-state _]
  (-> app-state
      (update-in [:ui :login] dissoc :password-error)
      (update-in [:ui :login] dissoc :email-error)))
(re-frame/reg-event-db ::clear-errors clear-errors)

(defn component []
  [:> material-card
   {:elevation 5
    :style #js {:backgroundColor "white"
                :maxWidth 450
                :border 10
                :margin "max((100% - 450px) / 30, 0px) auto"
                :zIndex 1200}}
    [:> material-card-content
     {:style #js {:display "flex"
                  :flexDirection "column"
                  :alignItems "center"}}
     [:img
      {:style #js {:margin "15px"}
       :src "images/LogoReactmed.png"
       :width 250}]
     [:paper-input
      {:style #js {:width "100%"}
       :label "Email"
       :onFocus #(>evt [::clear-errors])
       :onKeyDown #(do (js/console.log "keydown" %) (if (= 13 (.-keyCode %)) (>evt [::auth/email-and-password-login])))
       (when (<sub [::email-error])
         :invalid)
       (when (<sub [::email-error])
         true)
       "error-message" (<sub [::email-error])
       :value (<sub [::email])
       :onBlur #(>evt [::set-login-property :email (-> % .-target .-value)])
       }]
     [:paper-input
      {:label "Senha"
       :style #js {:width "100%"}
       :value (<sub [::password])
       :onFocus #(>evt [::clear-errors])
       :onKeyDown #(if (= 13 (.-keyCode %)) (>evt [::auth/email-and-password-login]))
       (when (<sub [::password-error])
         :invalid)
       (when (<sub [::password-error])
         true)
       "error-message" (<sub [::password-error])
       :onBlur #(>evt [::set-login-property :password (-> % .-target .-value)])
       :type "password"}]
     [:> material-button
      {:style #js {:backgroundColor "#caca30"
                   :margin "15px"
                   :color "white"}
       :variant "contained"
       :onClick #(>evt [::auth/email-and-password-login])}
      "Entrar"]
     [:p
      {:style #js {:color "#caca30"
                   :cursor "pointer"}
       :onClick #(>evt [::auth/reset-password])}
      "Esqueci minha senha"]]])

(defn view []
  [shell/main-panel
   [:div
    {:style #js {:position "absolute"
                 :width "100%"
                 :height "100%"
                 :zIndex 1199
                 :backgroundColor "#eeeeee"}}
    [component]]])
