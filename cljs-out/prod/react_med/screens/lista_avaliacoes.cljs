(ns react-med.screens.lista-avaliacoes
  (:require
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    [re-frame.core :as re-frame]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [reagent.core :as reagent]
    [menu-list :as material-menu-list]
    [menu-item :as material-menu-item]
    ))

(defn component []
  [:> material-menu-list
   [:> material-menu-item
    {:onClick #(>evt [:react-med.routes/set-route "coleta"])}
    "10/10/2019 (Quinta-feira)"]])

(defn view []
  (let [menu-structure (<sub [:react-med.routes/side-menu])
        actions (<sub [:react-med.routes/actions])
        title (<sub [:react-med.routes/title])]
    [shell/main-panel
     [shell/header
      [shell/top-bar
       [shell/left-icon
        {:variation "<-"}]
       [shell/screen-title
        title]]
      [shell/tabs-menu
       {:menu-options
        [{:label "Informações Pessoais"
          :state "info"}
         {:label "Avaliações"
          :state "avaliacoes"}]}]]
     [shell/main-content
      [component]]
     [shell/drawer-menu
      {:menu-structure menu-structure}]
     [shell/actions-menu
      {:actions actions}]
     [shell/bottom-bar]])
  )

