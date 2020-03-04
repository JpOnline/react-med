(ns react-med.screens.loading
  (:require
    [react-med.shell-components :as shell]
    [circular-progress :as material-circular-progress]
    ))

(defn view []
  [shell/main-panel
   [shell/header
    [shell/top-bar
     [shell/left-icon
      {:variation ""}]
     [shell/screen-title
      "Carregando.."]]]
   [shell/main-content
    {:style #js {:flexGrow 1
                 :padding 65
                 :overflow "auto"
                 :alignSelf "center"}}
    [:> material-circular-progress]]])
