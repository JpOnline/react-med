(ns react-med.screens.patient-info.core
  (:require
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    [re-frame.core :as re-frame]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [reagent.core :as reagent]
    [react-med.screens.components :as screens.components]
    [testdouble.cljs.csv :as csv]
    ))

(defn selected-patient
  [app-state]
  (let [patient-info (get-in app-state [:domain :patients 0])
        idade (-> (js/Date.)
                (- (js/Date. (patient-info :nascimento)))
                (/ 1000 60 60 24 365)
                (js/Math.floor))]
    (-> patient-info
        (assoc :idade idade)
        (dissoc :avaliacoes))))
(re-frame/reg-sub ::selected-patient selected-patient)

;; async function testWebShare() {
;;       if (navigator.share === undefined) {
;;         logError('Error: Unsupported feature: navigator.share()');
;;         return;
;;       }
;;
;;       const title_input = document.querySelector('#title');
;;       const text_input = document.querySelector('#text');
;;       const url_input = document.querySelector('#url');
;;       const file_input = document.querySelector('#files');
;;
;;       const title = title_input.disabled ? undefined : title_input.value;
;;       const text = text_input.disabled ? undefined : text_input.value;
;;       const url = url_input.disabled ? undefined : url_input.value;
;;       const files = file_input.disabled ? undefined : file_input.files;
;;
;;       if (files && files.length > 0) {
;;         if (!navigator.canShare || !navigator.canShare({files})) {
;;           logError('Error: Unsupported feature: navigator.canShare()');
;;           return;
;;         }
;;       }
;;
;;       try {
;;         await navigator.share({files, title, text, url});
;;         logText('Successfully sent share');
;;       } catch (error) {
;;         logError('Error sharing: ' + error);
;;       }
;;     }

(defn share [data filename type]
  (-> js/navigator
      (.share #js {#_#_"url" "https://web.dev"
                   "files" #js [(new js/Blob #js [data] "Avaliacao.csv")]
                   "title" "Avaliação da Dani"
                   "text" "Texto q acho q não vai aparecer."
                   })
      (.then #(js/console.log "Conseguiu compartilhar."))
      (.catch #(js/console.log "Não conseguiu compartilhar." %))))

(defn download [data filename type]
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

(defn yyyy-mm-dd->dd-mm-yyyy [date]
  (let [[_ year month day] (re-find #"(\d{4})\D(\d{1,2})\D(\d{1,2})" date)]
     (str day"/"month"/"year)))

(defn export-to-csv
  [app-state [event #_new-birth-date]]
  {:pre [(util/pre-state? app-state event)]
   :post [(util/post-state? %)]}
  (let [{:keys [nome nascimento sexo estatura]} (selected-patient app-state)
        csv-data (csv/write-csv [["Nome" nome]
                                 ["Data de Nascimento" (yyyy-mm-dd->dd-mm-yyyy nascimento)]
                                 ["Sexo" sexo]
                                 ["Estatura" (.replace (str estatura) "." ",")]
                                 ] :quote? true)]
    (js/console.log "csv\n" csv-data)
    (share csv-data "teste.csv" "text/csv"))
  app-state)
(re-frame/reg-event-db :export-to-csv export-to-csv)

(defn-traced change-patient-name
  [app-state [event new-name]]
  (assoc-in app-state [:domain :patients 0 :nome] new-name))
(re-frame/reg-event-db ::change-patient-name change-patient-name)

(defn-traced change-birth-date
  [app-state [event new-birth-date]]
  (assoc-in app-state [:domain :patients 0 :nascimento] new-birth-date))
(re-frame/reg-event-db ::change-birth-date change-birth-date)

(defn-traced toggle-sexo
  [app-state]
  (update-in app-state [:domain :patients 0 :sexo] #(if (= % "Feminino")
                                                        "Masculino"
                                                        "Feminino")))
(re-frame/reg-event-db ::toggle-sexo toggle-sexo)

(defn-traced change-height
  [app-state [event new-height]]
  (assoc-in app-state [:domain :patients 0 :estatura]
            (js/parseFloat (.replace  new-height "," "."))))
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
        nascimento-formatado (yyyy-mm-dd->dd-mm-yyyy nascimento)
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

(defn patient-detail [{:keys [actions]} content-view]
  (let [menu-structure (<sub [:react-med.routes/side-menu])
        title (<sub [:react-med.routes/title])
        actions (<sub [:react-med.routes/actions])
        tabs (<sub [:react-med.routes/tabs])]
    [shell/main-panel
     [shell/header
      [shell/top-bar
       [shell/left-icon
        {:variation "<-"}]
       [shell/screen-title
        title]]
      [shell/tabs-menu
       {:menu-options tabs}]]
     [shell/main-content
      (with-meta content-view {:key 1})]
     [shell/drawer-menu
      {:menu-structure menu-structure}]
     [shell/actions-menu
      {:actions actions}]
     [shell/bottom-bar]]))

(defn patient-info []
  (let [actions (<sub [:react-med.routes/actions])]
    [patient-detail
   {:actions actions}
   [patient-info-component]]))

(defn editing-patient-info []
  (let [actions (<sub [:react-med.routes/actions])]
    [patient-detail
     {:actions actions}
     [editing-patient-info-component]]))
