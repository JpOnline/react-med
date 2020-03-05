(ns react-med.screens.patient-info.core
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [re-frame.core :as re-frame]
    [react-med.screens.components :as screens.components]
    [react-med.screens.paciente-relatorio.bioimpedance :as bioimpedance]
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    [reagent.core :as reagent]
    [testdouble.cljs.csv :as csv]
    ))

(defn years-difference [initial-date final-date]
  (-> (js/Date. final-date)
      (- (js/Date. initial-date))
      (/ 1000 60 60 24 365)
      (js/Math.floor)))

(def paciente-default
  {:id 99999999999
   :nome "Paciente não encontrado"
   :nascimento "2000-10-01"
   :sexo "Masculino"
   :estatura 176.8
   :avaliacoes []})

(defn selected-patient
  [app-state]
  (let [paciente-id (get-in app-state [:ui :paciente-selecionado])
        patient-info (get-in app-state [:domain :patients paciente-id] paciente-default)
        idade (years-difference (patient-info :nascimento) (js/Date.))]
    (-> patient-info
        (assoc :idade idade))))
(re-frame/reg-sub ::selected-patient selected-patient)

(defn share [data filename type]
  (js/console.log "sharing csv")
  (-> js/navigator
      (.share #js {"files" #js [(new js/File #js [data] filename #js {"type" type})]
                   "title" filename
                   ;; TODO: Remover essa linha se realmente não aparece em nenhum lugar.
                   "text" "Texto q acho q não vai aparecer."
                   })
      (.then #(js/console.log "Conseguiu compartilhar."))
      (.catch #(js/console.error "Não conseguiu compartilhar." %))))

(defn download [data filename type]
  (js/console.log "downloading csv")
  (let [file (new js/Blob #js [data] #js {"type" type})
        url (.createObjectURL js/URL file)
        anchor (.createElement js/document "a")]
    (.setAttribute anchor "href" url)
    (.setAttribute anchor "download" filename)
    (-> js/document .-body (.appendChild anchor))
    (.click anchor)
    (js/setTimeout (fn []
                     (-> js/document .-body (.removeChild anchor))
                     (-> js/window .-URL (.revokeObjectURL url))
                     ) 0)))

(defn share-or-download [data filename type]
  (js/console.log "share-or-download csv")
  (js/console.log ".-canShare csv" (.-canShare js/navigator))
  (js/console.log ".canShare csv" (.canShare
                                     js/navigator
                                     #js {"files" #js [(new js/File #js [data]
                                                            filename #js
                                                            {"type" type})]}))
  (if (and (.-canShare js/navigator)
           (.canShare js/navigator #js {"files" #js [(new js/File #js [data]
                                                          filename #js
                                                          {"type" type})]}))
    (share data filename type)
    (download data filename type)))

(defn replace-accents [s]
  (clojure.string/replace s #"[áéíóãçõ ]" {"á" "a"
                                          "é" "e"
                                          "í" "i"
                                          "ó" "o"
                                          "ã" "a"
                                          "ç" "c"
                                          "õ" "o"
                                          " " "-"}))

(defn dot->comma [n]
  (.replace (str n) "." ","))

(defn avaliacao->csv-row [{:keys [nascimento] :as paciente-info}]
  (fn [{:keys [data peso estatura resistencia reatancia atividade-fisica
               circunferencia-cintura circunferencia-quadril
               circunferencia-braco circunferencia-perna]
        :as aval}]
    (try
      (let [idade (years-difference nascimento data)
          formated-date (util/yyyy-mm-dd->dd-mm-yyyy data)
          avaliacao-info (merge aval paciente-info)
          format-num #(some-> % (.toFixed 2) (dot->comma))
          em-relacao-peso #(-> %
                               (/ (:peso avaliacao-info))
                               (* 100)
                               (.toFixed 1)
                               (js/parseFloat))
          gordura-corporal-absoluta (->> avaliacao-info
                                         (bioimpedance/massa-livre-de-gordura)
                                         (- (:peso avaliacao-info)))
          gordura-corporal-relativa (em-relacao-peso gordura-corporal-absoluta)
          massa-musculoesqueletica (-> (bioimpedance/massa-musculoesqueletica avaliacao-info)
                                       (/ (* (:estatura avaliacao-info) (:estatura avaliacao-info)))
                                       (* 10000)
                                       (.toFixed 1)
                                       (js/parseFloat))
          agua-corporal-total (em-relacao-peso (bioimpedance/agua-corporal avaliacao-info))
          agua-extracelular (em-relacao-peso (bioimpedance/agua-extracelular avaliacao-info))
          agua-intracelular (em-relacao-peso (bioimpedance/agua-intracelular avaliacao-info))]
      (array-map ;; Array map is used to keep the order
        "Data da Avaliação" formated-date
        "Idade" idade
        "Peso" (format-num peso)
        "Estatura" (format-num estatura)
        "IMC" (format-num (bioimpedance/imc avaliacao-info))
        "Circunferência Cintura" (format-num circunferencia-cintura)
        "Circunferência Quadril" (format-num circunferencia-quadril)
        "Circunferência Braço" (format-num circunferencia-braco)
        "Circunferência Perna" (format-num circunferencia-perna)
        "Nível de Atividade Física" atividade-fisica
        "Resistência" resistencia
        "Reatância" reatancia
        "Impedância" (format-num (bioimpedance/impedancia avaliacao-info))
        "Ângulo" (format-num (bioimpedance/angulo avaliacao-info))
        "Gordura Corporal Absoluta em Kg" (format-num gordura-corporal-absoluta)
        "Gordura Corporal Relativa em %" (format-num gordura-corporal-relativa)
        "Massa Musculoesquelética" (format-num massa-musculoesqueletica)
        "Água Corporal Total" (format-num agua-corporal-total)
        "Água Extracelular" (format-num agua-extracelular)
        "Água Intracelular" (format-num agua-intracelular)))
      (catch js/Object e
        (js/console.error "Erro ao computar os valores da bioimpedância." e)
        (array-map ;; Array map is used to keep the order
          "Data da Avaliação" (util/yyyy-mm-dd->dd-mm-yyyy data)
          "Idade" "Dados de avaliação incorretos.")))))

(defn app-state->csv-data [app-state]
  (let [{:keys [nome nascimento sexo estatura avaliacoes]
         :as paciente-info} (selected-patient app-state)
        nome-without-accents (replace-accents nome)
        paciente-head [["Nome" nome]
                       ["Data de Nascimento" (util/yyyy-mm-dd->dd-mm-yyyy nascimento)]
                       ["Sexo" sexo]
                       ["Estatura" (dot->comma estatura)]
                       [""]]
        avals (filter :id avaliacoes)
        avals (mapv (avaliacao->csv-row paciente-info) avals)
        avaliacoes (cons (keys (first avals)) (map vals avals))]
    (csv/write-csv (concat paciente-head avaliacoes) :quote? true)))

(defn export-to-csv
  [app-state [event]]
  {:pre [(util/pre-state? app-state event)]
   :post [(util/post-state? %)]}
  (let [{:keys [nome]} (selected-patient app-state)
        nome-without-accents (replace-accents nome)
        csv-data (app-state->csv-data app-state)]
    (js/console.log "export-to-csv csv-data" csv-data)
    (share-or-download csv-data (str "avaliacoes-"nome-without-accents".csv") "text/csv"))
  app-state)
(re-frame/reg-event-db :export-to-csv export-to-csv)

(defn-traced change-patient-name
  [app-state [event new-name]]
  (let [paciente-id (get-in app-state [:ui :paciente-selecionado])]
    (assoc-in app-state [:domain :patients paciente-id :nome] new-name)))
(re-frame/reg-event-db ::change-patient-name change-patient-name)

(defn-traced change-birth-date
  [app-state [event new-birth-date]]
  (let [paciente-id (get-in app-state [:ui :paciente-selecionado])]
    (assoc-in app-state [:domain :patients paciente-id :nascimento] new-birth-date)))
(re-frame/reg-event-db ::change-birth-date change-birth-date)

(defn-traced toggle-sexo
  [app-state]
  (let [paciente-id (get-in app-state [:ui :paciente-selecionado])]
    (update-in app-state [:domain :patients paciente-id :sexo]
               #(if (= % "Feminino")
                  "Masculino"
                  "Feminino"))))
(re-frame/reg-event-db ::toggle-sexo toggle-sexo)

(defn-traced change-height
  [app-state [event new-height]]
  (let [paciente-id (get-in app-state [:ui :paciente-selecionado])]
    (assoc-in app-state [:domain :patients paciente-id :estatura]
              (js/parseFloat (.replace  new-height "," ".")))))
(re-frame/reg-event-db ::change-height change-height)

(def date-picker-i18n-pt
  {:monthNames ["Janeiro" "Fevereiro" "Março" "Abril" "Maio" "Junho" "Julho" "Agosto"
                "Setembro" "Outubro" "Novembro" "Dezembro"]
   :formatDate (fn [date] (str (.-day date)"/"(inc (.-month date))"/" (.-year date)))
   :formatTitle (fn [month-name full-year] (str month-name" "full-year))
   :parseDate (fn [text]
                (let [[_ d m y] (re-find #"(\d{1,2})\D(\d{1,2})\D(\d{4})" text)]
                  #js {:day (js/parseInt d)
                       :month (dec (js/parseInt m))
                       :year (js/parseInt y)}))
   :weekdays ["Domingo" "Segunda" "Terça" "Quarta" "Quinta" "Sexta" "Sábado"]
   :weekdaysShort ["Dom" "Seg" "Ter" "Qua" "Qui" "Sex" "Sáb"]
   :firstDayOfWeek 0
   :week "Semana"
   :calendar "Calendário"
   :clear "Limpar"
   :today "Hoje"
   :cancel "Cancelar"})

(defn editing-patient-info-component []
  (let [{:keys [nome nascimento idade sexo estatura]} (<sub [::selected-patient])
        line-style #js {:display "flex"
                        :alignItems "center"
                        :whiteSpace "pre"
                        :height 48}]
    [:<>
     [:div
      {:style line-style}
      [:b "Nome: "]
      [:span
       {:style #js {:backgroundColor "#e5e9ed"
                    :padding "4px 15px"
                    :borderRadius "5px"}}
       [:u
        {:contentEditable ""
         :onBlur #(>evt [::change-patient-name (-> % .-target .-innerText)])}
        nome]]]
     [:div
      {:style (clj->js (dissoc (js->clj line-style) "whiteSpace"))}
      [:b "Nascimento: "]
      [:dom-module#vaadin-style
       {:theme-for "vaadin-date-picker-overlay"}
       [:template
        [:style
         "vaadin-date-picker-overlay{
           z-index: 1200;
         }"]]]
      [(util/with-mount-fn
         [:vaadin-date-picker
          {:value nascimento
           :component-did-mount
           (fn [this]
             (set! (-> (reagent/dom-node this) .-i18n) (clj->js date-picker-i18n-pt))
             (set! (-> (reagent/dom-node this) .-onchange)
                   #(>evt [::change-birth-date (-> % .-target .-value)])))}])]]
     [:div
      {:style (clj->js
                (merge (js->clj line-style)
                       {:color "rgba(0, 0, 0, 0.4)"}))}
      [:b "Idade: "] idade " anos"]
     [:div
      {:style line-style}
      [:b "Sexo: "]
      [:span
       {:onClick #(>evt [::toggle-sexo])
        :style #js {:backgroundColor "#e5e9ed"
                    :cursor "pointer"
                    :borderRadius "30px"
                    :padding "7px 13px"}}
       sexo]]
     [:div
      {:style line-style}
      [:b "Estatura: "]
      [screens.components/gray-input
       {:defaultValue estatura
        :suffix " cm"
        :onBlur #(>evt [::change-height (-> % .-target .-value)])}]]]))

(defn patient-info-component []
  (let [{:keys [nome nascimento idade sexo estatura]} (<sub [::selected-patient])
        nascimento-formatado (util/yyyy-mm-dd->dd-mm-yyyy nascimento)
        line-style #js {:display "flex"
                        :alignItems "center"
                        :whiteSpace "pre"
                        :height 48}]
    [:<>
     [:div
      {:style line-style}
      [:b "Nome: "] nome]
     [:div
      {:style line-style}
      [:b "Nascimento: "] nascimento-formatado]
     [:div
      {:style line-style}
      [:b "Idade: "] idade " anos"]
     [:div
      {:style line-style}
      [:b "Sexo: "] sexo]
     [:div
      {:style line-style}
      [:b "Estatura: "] (.replace (str estatura) "." ",") " cm"]]))

(defn patient-info []
  [shell/default
   {:component [patient-info-component]}])

(defn editing-patient-info []
  [shell/default
   {:component [editing-patient-info-component]}])
