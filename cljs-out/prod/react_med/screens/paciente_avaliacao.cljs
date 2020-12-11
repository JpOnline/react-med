(ns react-med.screens.paciente-avaliacao
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [re-frame.core :as re-frame]
    [react-med.screens.components :as screens.components]
    [react-med.screens.paciente-relatorio.bioimpedance :as bioimpedance]
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    [reagent.core :as reagent]
    [tick.alpha.api :as tick]
    ))

(defn selected-avaliacao
  [app-state]
  (let [paciente-id (get-in app-state [:ui :paciente-selecionado])
        avaliacao-id (get-in app-state [:ui :avaliacao-selecionada])
        avaliacao (get-in app-state [:domain :patients paciente-id :avaliacoes avaliacao-id])
        paciente-nascimento (get-in app-state [:domain :patients paciente-id :nascimento] "1900-01-01")
        idade-quando-avaliado (util/years-difference paciente-nascimento (get avaliacao :data "1900-01-01"))]
    (assoc avaliacao :idade-quando-avaliado idade-quando-avaliado)))
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
                circunferencia-panturrilha estatura resistencia reatancia
                idade-quando-avaliado
                atividade-fisica]} (<sub [::selected-avaliacao])
        impedancia (Math/round (bioimpedance/impedancia {:resistencia resistencia :reatancia reatancia}))
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
      [:b "Idade: "] (when (should-show? idade-quando-avaliado)
                       (str idade-quando-avaliado " anos"))]
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
                             (.replace (str resistencia " Ohms/m") "." ","))]
     [:div
      {:style line-style}
      [:b "Reatância: "] (when (should-show? reatancia)
                           (.replace (str reatancia " Ohms/m") "." ","))]
     [:div
      {:style line-style}
      [:b "Impedância: "] (when (and (should-show? reatancia) (should-show? resistencia))
                            (str impedancia " Ohms/m"))]
     [:div
      {:style line-style}
      [:b "Nível de Atividade Física: "] atividade-fisica]
     [:div
      {:style line-style}
      [:b "Circunferência da Cintura: "] (when (should-show? circunferencia-cintura)
                                           (.replace (str circunferencia-cintura " cm") "." ","))]
     [:div
      {:style line-style}
      [:b "Circunferência de Braço: "] (when (should-show? circunferencia-braco)
                                         (.replace (str circunferencia-braco " cm") "." ","))]
     [:div
      {:style line-style}
      [:b "Circunferência de Panturrilha: "] (when (should-show? circunferencia-panturrilha)
                                         (.replace (str circunferencia-panturrilha " cm") "." ","))]]))

(defn-traced change-avaliacao
  [app-state [event attr new-value-input]]
  (let [paciente-id (get-in app-state [:ui :paciente-selecionado])
        avaliacao-id (get-in app-state [:ui :avaliacao-selecionada])
        new-value (cond
                    (#{:data :atividade-fisica} attr)
                    new-value-input

                    (empty? new-value-input)
                    nil

                    :else
                    (js/parseFloat (.replace new-value-input "," ".")))]
    (assoc-in app-state [:domain :patients paciente-id :avaliacoes avaliacao-id attr] new-value)))
(re-frame/reg-event-db ::change-avaliacao change-avaliacao)

(defn editing-component []
  (let [{:keys [data peso circunferencia-cintura circunferencia-braco
                circunferencia-panturrilha estatura resistencia reatancia
                idade-quando-avaliado
                atividade-fisica]} (<sub [::selected-avaliacao])
        impedancia (Math/round (bioimpedance/impedancia {:resistencia resistencia :reatancia reatancia}))
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
      {:style (clj->js
                (merge (js->clj line-style)
                       {:color "rgba(0, 0, 0, 0.4)"}))}
      [:b "Idade: "] idade-quando-avaliado " anos"]
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
        :suffix " Ohms/m"
        :max 20000}]]
     [:div
      {:style line-style}
      [:b "Reatância: "]
      [screens.components/gray-input
       {:defaultValue reatancia
        :onBlur #(>evt [::change-avaliacao :reatancia (-> % .-target .-value)])
        :suffix " Ohms/m"
        :max 20000}]]
     [:div
      {:style (clj->js
                (merge (js->clj line-style)
                       {:color "rgba(0, 0, 0, 0.4)"}))}
      [:b "Impedância: "] (when (and (should-show? reatancia) (should-show? resistencia))
                            (str impedancia " Ohms/m"))]
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
      [:b "Circunferência de Braço: "]
      [screens.components/gray-input
       {:defaultValue circunferencia-braco
        :onBlur #(>evt [::change-avaliacao :circunferencia-braco (-> % .-target .-value)])
        :suffix " cm"}]]
     [:div
      {:style line-style}
      [:b "Circunferência de Panturrilha: "]
      [screens.components/gray-input
       {:defaultValue circunferencia-panturrilha
        :onBlur #(>evt [::change-avaliacao :circunferencia-panturrilha (-> % .-target .-value)])
        :suffix " cm"}]]]))

(defn detail-view []
  (let [actions (<sub [:react-med.routes/actions])]
    [shell/default
     [details-component]]))

(defn editing-view []
  (let [actions (<sub [:react-med.routes/actions])]
    [shell/default
     [editing-component]]))
