(ns react-med.screens.lista-pacientes
  (:require
    [react-med.util :as util :refer [<sub >evt]]
    [react-med.shell-components :as shell]
    [menu-list :as material-menu-list]
    [menu-item :as material-menu-item]
    [re-frame.core :as re-frame]
    ))

(defn pacientes
  [app-state]
    (get-in app-state [:domain :patients]))
(re-frame/reg-sub ::pacientes pacientes)

(defn component []
  (let [pacientes (<sub [::pacientes])]
    [:> material-menu-list
     [:> material-menu-item
      {:onClick #(>evt [:react-med.routes/set-route "info"])}
      (:nome (first pacientes))]]))

(defn view []
  (let [menu-structure (<sub [:react-med.routes/side-menu])
        actions (<sub [:react-med.routes/actions])
        tabs (<sub [:react-med.routes/tabs])
        title (<sub [:react-med.routes/title])]
    [shell/main-panel
     [shell/header
      [shell/top-bar
       [shell/left-icon
        {:variation ""}]
       [shell/screen-title
        title]]
      (when tabs
        [shell/tabs-menu
         {:menu-options tabs}])]
     [shell/main-content
      [component]]
     [shell/drawer-menu
      {:menu-structure menu-structure}]
     [shell/actions-menu
      {:actions actions}]
     [shell/bottom-bar]]))

