(ns react-med.screens.paciente-avaliacao
  (:require
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    [re-frame.core :as re-frame]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [reagent.core :as reagent]
    [react-med.screens.components :as screens.components]
    [tick.alpha.api :as tick]
    ))

(defn selected-avaliacao
  [app-state]
  (let [paciente-id (get-in app-state [:ui :paciente-selecionado])
        avaliacao-id (get-in app-state [:ui :avaliacao-selecionada])
        avaliacao (get-in app-state [:domain :patients paciente-id :avaliacoes avaliacao-id])]
    avaliacao))
(re-frame/reg-sub ::selected-avaliacao selected-avaliacao)

(defn date->ddMMyyyy [date]
  (when date
    (let [pad #(if (= (count (str %)) 1) (str "0" %) %)
          dd (pad (tick/day-of-month date))
          MM (pad (tick/int (tick/month date)))
          yyyy (tick/int (tick/year date))
          day (tick/day-of-week date)]
      (str dd"/"MM"/"yyyy))))

(defn should-show? [el]
  (and el (not (js/isNaN el))))

(defn details-component []
  (let [{:keys [data peso circunferencia-cintura circunferencia-braco
                circunferencia-perna estatura resistencia reatancia
                atividade-fisica circunferencia-quadril]} (<sub [::selected-avaliacao])
        line-style #js {:display "flex"
                        :alignItems "center"
                        :height 48
                        :whiteSpace "pre"}]
    [:<>
     [:div
      {:style line-style}
      [:b "Data: "] (date->ddMMyyyy data)]
     [:div
      {:style line-style}
      [:b "Peso: "] (when (should-show? peso)
                      (.replace (str peso " Kg") "." ","))]
     [:div
      {:style line-style}
      [:b "Estatura: "] (when (should-show? estatura)
                          (.replace (str estatura " cm") "." ","))]
     [:div
      {:style line-style}
      [:b "Resistência: "] (when (should-show? resistencia)
                             (.replace (str resistencia) "." ","))]
     [:div
      {:style line-style}
      [:b "Reatância: "] (when (should-show? reatancia)
                           (.replace (str reatancia) "." ","))]
     [:div
      {:style line-style}
      [:b "Nível de Atividade Física: "] atividade-fisica]
     [:div
      {:style line-style}
      [:b "Circunferência da Cintura: "] (when (should-show? circunferencia-cintura)
                                           (.replace (str circunferencia-cintura " cm") "." ","))]
     [:div
      {:style line-style}
      [:b "Circunferência da Quadril "] (when (should-show? circunferencia-quadril)
                                          (.replace (str circunferencia-quadril " cm") "." ","))]
     [:div
      {:style line-style}
      [:b "Circunferência de Braço: "] (when (should-show? circunferencia-braco)
                                         (.replace (str circunferencia-braco " cm") "." ","))]
     [:div
      {:style line-style}
      [:b "Circunferência de Perna: "] (when (should-show? circunferencia-perna)
                                         (.replace (str circunferencia-perna " cm") "." ","))]]))

(defn-traced change-avaliacao
  [app-state [event attr new-value-input]]
  (let [paciente-id (get-in app-state [:ui :paciente-selecionado])
        avaliacao-id (get-in app-state [:ui :avaliacao-selecionada])
        new-value (if (#{:data :atividade-fisica} attr)
                    new-value-input
                    (js/parseFloat (.replace new-value-input "," ".")))]
    (assoc-in app-state [:domain :patients paciente-id :avaliacoes avaliacao-id attr] new-value)))
(re-frame/reg-event-db ::change-avaliacao change-avaliacao)

(defn editing-component []
  (let [{:keys [data peso circunferencia-cintura circunferencia-braco
                circunferencia-perna estatura resistencia reatancia
                atividade-fisica circunferencia-quadril]} (<sub [::selected-avaliacao])
        line-style #js {:display "flex"
                        :alignItems "center"
                        :height 48
                        :whiteSpace "pre"}
        innactive-round-button #js {:backgroundColor "#e5e9ed80"
                                    :color "#00000080"
                                    :cursor "pointer"
                                    :borderRadius "30px"
                                    :margin "0 5px"
                                    :padding "7px 13px"}
        round-button #js {:backgroundColor "#e5e9ed"
                          :cursor "pointer"
                          :borderRadius "30px"
                          :margin "0 5px"
                          :padding "7px 13px"}]
    [:<>
     [:div
      {:style #js {:display "flex"
                   :alignItems "center"
                   :height 48}}
      [:b {:style #js {:margin "0 5px 0 0"}} "Data: "]
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
      {:style #js {:display "flex"
                   :flexWrap "wrap"
                   :alignItems "center"
                   :margin "5px 0 15px 0"
                   :height 48}}
      [:b "Nível de Atividade Física: "]
      [:div
       {:style #js {:margin "5px 0 10px 0"}}
       [:span
        {:onClick #(>evt [::change-avaliacao :atividade-fisica "Não Ativo"])
         :style (if (= "Não Ativo" atividade-fisica) round-button innactive-round-button)}
        "Não Ativo"]
       [:span
        {:onClick #(>evt [::change-avaliacao :atividade-fisica "Ativo"])
         :style (if (= "Ativo" atividade-fisica) round-button innactive-round-button)}
        "Ativo"]
       [:span
        {:onClick #(>evt [::change-avaliacao :atividade-fisica "Atleta"])
         :style (if (= "Atleta" atividade-fisica) round-button innactive-round-button)}
        "Atleta"]]]
     [:div
      {:style line-style}
      [:b "Circunferência da Cintura: "]
      [screens.components/gray-input
       {:defaultValue circunferencia-cintura
        :onBlur #(>evt [::change-avaliacao :circunferencia-cintura (-> % .-target .-value)])
        :suffix " cm"}]]
     [:div
      {:style line-style}
      [:b "Circunferência da Quadril "]
      [screens.components/gray-input
       {:defaultValue circunferencia-quadril
        :onBlur #(>evt [::change-avaliacao :circunferencia-quadril (-> % .-target .-value)])
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
    [shell/default
     {:component [details-component]}]))

(defn editing-view []
  (let [actions (<sub [:react-med.routes/actions])]
    [shell/default
     {:component [editing-component]}]))
