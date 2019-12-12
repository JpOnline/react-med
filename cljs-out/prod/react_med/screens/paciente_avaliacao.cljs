(ns react-med.screens.paciente-avaliacao
  (:require
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    [re-frame.core :as re-frame]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [reagent.core :as reagent]
    [react-med.screens.components :as screens.components]
    ))

(defn paciente-avaliacao-shell [{:keys [actions]} content-view]
  (let [menu-structure (<sub [:react-med.routes/side-menu])]
    [shell/main-panel
     [shell/header
      [shell/top-bar
       [shell/left-icon
        {:variation "<-"}]
       [shell/screen-title
        (<sub [:react-med.routes/title])]]
      [shell/tabs-menu
       {:menu-options
        [{:label "Coleta"
          :state "coleta"}
         {:label "Relatório"
          :state "relatorio"}]}]]
     [shell/main-content
      (with-meta content-view {:key 1})]
     [shell/drawer-menu
      {:menu-structure menu-structure}]
     [shell/actions-menu
      {:actions actions}]
     [shell/bottom-bar]]))

(defn selected-avaliacao
  [app-state]
  (let [avaliacao (get-in app-state [:domain :patients 0 :avaliacoes 0])]
    avaliacao))
(re-frame/reg-sub ::selected-avaliacao selected-avaliacao)

(defn details-component []
  (let [{:keys [data peso circunferencia-cintura circunferencia-braco
                circunferencia-perna estatura resistencia reatancia
                atividade-fisica]} (<sub [::selected-avaliacao])
        line-style #js {:display "flex"
                        :alignItems "center"
                        :height 48
                        :whiteSpace "pre"}]
    [:<>
     [:div
      {:style line-style}
      [:b "Data: "] data]
     [:div
      {:style line-style}
      [:b "Peso: "] (.replace (str peso) "." ",") " Kg"]
     [:div
      {:style line-style}
      [:b "Estatura: "] (.replace (str estatura) "." ",") " cm"]
     [:div
      {:style line-style}
      [:b "Resistência: "] (.replace (str resistencia) "." ",")]
     [:div
      {:style line-style}
      [:b "Reatância: "] (.replace (str reatancia) "." ",")]
     [:div
      {:style line-style}
      [:b "Circunferência da Cintura: "] (.replace (str circunferencia-cintura) "." ",") " cm"]
     [:div
      {:style line-style}
      [:b "Circunferência de Braço: "] (.replace (str circunferencia-braco) "." ",") " cm"]
     [:div
      {:style line-style}
      [:b "Circunferência de Perna: "] (.replace (str circunferencia-perna) "." ",") " cm"]]))

(defn-traced change-avaliacao
  [app-state [event attr new-value-input]]
  (let [new-value (if (#{:data :atividade-fisica} attr)
                    new-value-input
                    (js/parseFloat (.replace new-value-input "," ".")))]
    (assoc-in app-state [:domain :patients 0 :avaliacoes 0 attr] new-value)))
(re-frame/reg-event-db ::change-avaliacao change-avaliacao)

(defn editing-component []
  (let [{:keys [data peso circunferencia-cintura circunferencia-braco
                circunferencia-perna estatura resistencia reatancia
                atividade-fisica]} (<sub [::selected-avaliacao])
        line-style #js {:display "flex"
                        :alignItems "center"
                        :height 48}]
    [:<>
     [:div
      {:style line-style}
      [:b "Data: "]
      [:dom-module#vaadin-style
       {:theme-for "vaadin-date-picker-overlay"}
       [:template
        [:style
         "vaadin-date-picker-overlay{
         z-index: 1200;
         }"]]]
      [(util/with-mount-fn
         [:vaadin-date-picker
          {:value data
           :component-did-mount
           (fn [this]
             (set! (-> (reagent/dom-node this) .-onchange)
                   #(>evt [::change-avaliacao :data (-> % .-target .-value)])))}])]]
     [:div
      {:style line-style}
      [:b "Peso: "]
      [screens.components/gray-input
       {:defaultValue peso
        :onBlur #(>evt [::change-avaliacao :peso (-> % .-target .-value)])
        :suffix " Kg"}]]
     [:div
      {:style line-style}
      [:b "Estatura: "]
      [screens.components/gray-input
       {:defaultValue estatura
        :onBlur #(>evt [::change-avaliacao :estatura (-> % .-target .-value)])
        :suffix " cm"}]]
     [:div
      {:style line-style}
      [:b "Resistência: "]
      [screens.components/gray-input
       {:defaultValue resistencia
        :onBlur #(>evt [::change-avaliacao :resistencia (-> % .-target .-value)])
        :max 20000}]]
     [:div
      {:style line-style}
      [:b "Reatância: "]
      [screens.components/gray-input
       {:defaultValue reatancia
        :onBlur #(>evt [::change-avaliacao :reatancia (-> % .-target .-value)])
        :max 20000}]]
     [:div
      {:style line-style}
      [:b "Circunferência da Cintura: "]
      [screens.components/gray-input
       {:defaultValue circunferencia-cintura
        :onBlur #(>evt [::change-avaliacao :circunferencia-cintura (-> % .-target .-value)])
        :suffix " cm"}]]
     [:div
      {:style line-style}
      [:b "Circunferência de Braço: "]
      [screens.components/gray-input
       {:defaultValue circunferencia-braco
        :onBlur #(>evt [::change-avaliacao :circunferencia-braco (-> % .-target .-value)])
        :suffix " cm"}]]
     [:div
      {:style line-style}
      [:b "Circunferência de Perna: "]
      [screens.components/gray-input
       {:defaultValue circunferencia-perna
        :onBlur #(>evt [::change-avaliacao :circunferencia-perna (-> % .-target .-value)])
        :suffix " cm"}]]]))

(defn detail-view []
  (let [actions (<sub [:react-med.routes/actions])]
    [paciente-avaliacao-shell
     {:actions actions}
     [details-component]]))

(defn editing-view []
  (let [actions (<sub [:react-med.routes/actions])]
    [paciente-avaliacao-shell
     {:actions actions}
     [editing-component]]))
