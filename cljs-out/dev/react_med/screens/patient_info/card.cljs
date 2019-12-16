(ns react-med.screens.patient-info.card
  (:require
    [devcards.core :as devcards :refer-macros [defcard deftest defcard-rg]]
    [reagent.core :as reagent]
    [button :as material-button]
    [react-med.screens.patient-info.core :as pi]
    [expand-more :as material-icons-ExpandMore]
    [expand-less :as material-icons-ExpandLess]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [re-frame.core :as re-frame]
    [react-med.shell-components :as shell]
    ))

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

(defcard-rg patient-info-component
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
  {:hidden? (reagent/atom false)})

(defcard-rg editing-patient-info-component
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
  {:hidden? (reagent/atom false)})
