(ns react-med.whole-app-card
  (:require
    [devcards.core :as devcards :refer-macros [defcard deftest defcard-rg]]
    [reagent.core :as reagent]
    [button :as material-button]
    [expand-more :as material-icons-ExpandMore]
    [expand-less :as material-icons-ExpandLess]
    [re-frame.core :as re-frame]
    [react-med.routes :as routes]
    [react-med.screens.patient-info.card]
    [react-med.main]
    ;; [react-med.external-storage :as ext-store]
    ;; [clojure.spec.alpha :as spec]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [react-med.screens.paciente-avaliacao :as pa]
    [react-med.screens.patient-info.core :as pi]
    [react-med.screens.paciente-relatorio.paciente-relatorio :as pr]
    [react-med.shell-components :as shell]
    [react-med.screens.lista-pacientes :as lista-pacientes]
    [react-med.util :as util :refer [<sub >evt]]

    ;; [clojure.spec.gen.alpha :as gen]
    ;; [clojure.test.check.generators]
    ))

;; Draw the devcards ui.
(devcards.core/start-devcard-ui!)

(re-frame/reg-event-db ::init-app-state
  (fn-traced [_ _]
    react-med.main/initial-state))

(defonce init-app-state
  (do
    ;; (routes/start!)
    (re-frame/clear-subscription-cache!)
    (re-frame/dispatch-sync [::init-app-state])
    ;; (ext-store/init-app-state "client-x")
    ))

(defcard
  (str "# React Med. Hello World!")
  {}
  {:frame false
   :heading false})

(defonce devcards-hidden (reagent/atom []))

(defcard-rg hidding-cards
  (let [card-container-style #js {:display "flex"
                                  :justifyContent "space-evenly"
                                  :padding "20px 0"}]
    (fn [devcard-data _]
      [:div.card-container
       {:style card-container-style}
       [:> material-button
        {:id "hide-all"
         :variant "outlined"
         :size "small"
         :color "secondary"
         :onClick #(doseq [hidden-atom @devcards-hidden]
                     (reset! hidden-atom true))}
        "hide all"]
       [:> material-button
        {:id "show-all"
         :variant "outlined"
         :size "small"
         :color "secondary"
         :onClick #(doseq [hidden-atom @devcards-hidden]
                     (reset! hidden-atom false))}
        "show all"]]))
  {}
  {:frame false})

(defcard-rg mobile-view
  (fn [devcard-data _]
    (let [{:keys [hidden?]} @devcard-data]
      (swap! devcards-hidden conj hidden?)
      [:<>
       [:div.card-expander
        {:onClick #(swap! hidden? not)
         :style #js {:textAlign "center"}}
        (if @hidden?
          [:> material-icons-ExpandMore]
          [:> material-icons-ExpandLess])]
       [:div.card-container
        {:style #js {:display "flex"
                     ;; :justifyContent "space-evenly"
                     :paddingBottom 20}}
        [shell/error-boundary
         {:if-error shell/error-view}
         [:div.component-container
          {:hidden @hidden?
           :style #js {:width 360 :height 640
                       :border "1px solid #00000038"}}
          (routes/selected-view)]]]]))
  {:hidden? (reagent/atom false)})

(defcard-rg desktop-view
  (fn [devcard-data _]
    (let [{:keys [hidden?]} @devcard-data]
      (swap! devcards-hidden conj hidden?)
      [:<>
       [:div
        {:style #js {:display "flex"
                     :justifyContent "space-evenly"
                     :padding "15px 0"}}
        [:div
         [:div
          {:class "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"
           :style #js {:width "90vw"}}
          [:a
           {:href "#"
            :style #js {:color "#666"}}
           "desktop-view"]]]]
       [:div.card-expander
        {:onClick #(swap! hidden? not)
         :style #js {:textAlign "center"}}
        (if @hidden?
          [:> material-icons-ExpandMore]
          [:> material-icons-ExpandLess])]
       [:div
        {:style #js {:display "flex"
                     :justifyContent "space-evenly"}}
        [:div
         [:div.card-container
          {:style #js {:width "96vw"}}
          [shell/error-boundary
           {:if-error shell/error-view}
           [:div.component-container
            {:hidden @hidden?
             :style #js {:width "96vw" :height "90vh"
                         :border "1px solid #00000038"}}
            (routes/selected-view)]]]]]]))
  {:hidden? (reagent/atom false)}
  {:frame false})

(defcard-rg lista-pacientes-card
  (fn [devcard-data _]
    (let [{:keys [hidden?]} @devcard-data]
      (swap! devcards-hidden conj hidden?)
      [:<>
       [:div.card-expander
        {:onClick #(swap! hidden? not)
         :style #js {:textAlign "center"}}
        (if @hidden?
          [:> material-icons-ExpandMore]
          [:> material-icons-ExpandLess])]
       [:div.card-container
        {:style #js {:display "flex"
                     ;; :justifyContent "space-evenly"
                     }}
        [shell/error-boundary
         {:if-error shell/error-view}
         [:div.component-container
          {:hidden @hidden?}
          [lista-pacientes/component]]]]]))
  {:hidden? (reagent/atom false)})

(defcard-rg paciente-relatorio-card
  (fn [devcard-data _]
    (let [{:keys [hidden?]} @devcard-data]
      (swap! devcards-hidden conj hidden?)
      [:<>
       [:div.card-expander
        {:onClick #(swap! hidden? not)
         :style #js {:textAlign "center"}}
        (if @hidden?
          [:> material-icons-ExpandMore]
          [:> material-icons-ExpandLess])]
       [:div.card-container
        {:style #js {:display "flex"
                     ;; :justifyContent "space-evenly"
                     }}
        [shell/error-boundary
         {:if-error shell/error-view}
         [:div.component-container
          {:hidden @hidden?}
          [pr/relatorio-component]]]]]))
  {:hidden? (reagent/atom false)})

(defcard-rg paciente-avaliacao-view-card
  (fn [devcard-data _]
    (let [{:keys [hidden?]} @devcard-data]
      (swap! devcards-hidden conj hidden?)
      [:<>
       [:div.card-expander
        {:onClick #(swap! hidden? not)
         :style #js {:textAlign "center"}}
        (if @hidden?
          [:> material-icons-ExpandMore]
          [:> material-icons-ExpandLess])]
       [:div.card-container
        {:style #js {:display "flex"
                     ;; :justifyContent "space-evenly"
                     }}
        [shell/error-boundary
         {:if-error shell/error-view}
         [:div.component-container
          {:hidden @hidden?}
          [pa/details-component]]]]]))
  {:hidden? (reagent/atom true)})

(defcard-rg editing-paciente-avaliacao-view-card
  (fn [devcard-data _]
    (let [{:keys [hidden?]} @devcard-data]
      (swap! devcards-hidden conj hidden?)
      [:<>
       [:div.card-expander
        {:onClick #(swap! hidden? not)
         :style #js {:textAlign "center"}}
        (if @hidden?
          [:> material-icons-ExpandMore]
          [:> material-icons-ExpandLess])]
       [:div.card-container
        {:style #js {:display "flex"
                     ;; :justifyContent "space-evenly"
                     }}
        [shell/error-boundary
         {:if-error shell/error-view}
         [:div.component-container
          {:hidden @hidden?}
          [pa/editing-component]]]]]))
  {:hidden? (reagent/atom true)})

(defcard-rg patient-info-card
  (fn [devcard-data _]
    (let [{:keys [hidden?]} @devcard-data]
      (swap! devcards-hidden conj hidden?)
      [:<>
       [:div.card-expander
        {:onClick #(swap! hidden? not)
         :style #js {:textAlign "center"}}
        (if @hidden?
          [:> material-icons-ExpandMore]
          [:> material-icons-ExpandLess])]
       [:div.card-container
        {:style #js {:display "flex"
                     ;; :justifyContent "space-evenly"
                     }}
        [shell/error-boundary
         {:if-error shell/error-view}
         [:div.component-container
          {:hidden @hidden?}
          [pi/patient-info-component]]]]]))
  {:hidden? (reagent/atom true)})

(defcard-rg editing-patient-info-card
  (fn [devcard-data _]
    (let [{:keys [hidden?]} @devcard-data]
      (swap! devcards-hidden conj hidden?)
      [:<>
       [:div.card-expander
        {:onClick #(swap! hidden? not)
         :style #js {:textAlign "center"}}
        (if @hidden?
          [:> material-icons-ExpandMore]
          [:> material-icons-ExpandLess])]
       [:div.card-container
        {:style #js {:display "flex"
                     ;; :justifyContent "space-evenly"
                     }}
        [shell/error-boundary
         {:if-error shell/error-view}
         [:div.component-container
          {:hidden @hidden?}
          [pi/editing-patient-info-component]]]]]))
  {:hidden? (reagent/atom true)})

(comment
  ;; Programatically change url
  (pushy/set-token! routes/history "/")
  )
