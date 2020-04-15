(ns react-med.screens.paciente-relatorio.paciente-relatorio
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [re-frame.core :as re-frame]
    [react-med.screens.paciente-relatorio.bioimpedance :as bioimpedance]
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    [slider :as material-slider]
    ))

(defn-traced imprimir-relatorio
  [app-state]
  (.print js/window)
  app-state)
(re-frame/reg-event-db ::imprimir-relatorio imprimir-relatorio)

;; TODO: Ter versão pra impressão e versão que não é de impressão é ruim, pouca
;; coisa muda entre essas versões, basicamente só styles. Seria interessante
;; criar customElements pra encapsular os styles, talvez possa ser feito usando
;; js/Reflect como mostrado em
;; https://clojureverse.org/t/how-to-create-custom-elements-web-components-with-clojurescript/4332/4
;; and https://stackoverflow.com/questions/50295703/create-custom-elements-v1-in-es5-not-es6
;; e então eu talvez consiga definir algo como
;; (define-custom-element "my-elem"
;;   [:template ;; Talvez isso seria interno
;;    [:style
;;     "p {
;;       color: white;
;;     }"]
;;    [:p "My paragraph"]])
;; Baseado em https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots

(defn relatorio-style []
  [:style
   (str
     ".relatorio-div {
       display: flex;
       padding: 0 35px;
       flex-direction: column;
       align-items: center;
     }
     .relatorio-div-print {
       max-width: 400px;
     }
     .relatorio-div-no-print {
       max-width: inherit;
     }

     .measure-title-no-print {
       display: flex;
       align-items: center;
       height: 48px;
       white-space: pre;
       place-content: center;
     }
     .measure-title-print {
       display: flex;
       align-items: center;
       justify-content: center;
       height: 0px;
       padding: 26px 0px 8px 0px;
       white-space: pre;
       width: 280px;
       font-size: larger;
     }

     .slider-root-no-print{
       background: linear-gradient(90deg, rgba(183,141,130,0.3) 0%,
                                          rgba(25,252,3,0) 25%,
                                          rgba(25,252,3,0) 75%,
                                          rgba(183,141,130,0.3) 100%);
       height: 30px;
       border-radius: 6px;
       color: mediumseagreen;
       margin: 20px 0;
       padding: 0;
     }
     .slider-root-print {
        background: linear-gradient(90deg, rgba(183,141,130,0.3) 0%,
                                           rgba(255,255,255,1) 30%,
                                           rgba(255,255,255,1) 70%,
                                           rgba(183,141,130,0.3) 100%);
        height: 20px;
        border-radius: 6px;
        padding: 0;
        margin: 15px 0;
     }
     .slider-thumb{
       color: white;
       border: 1px solid mediumseagreen;
     }
     .slider-track {
       height: 0px;
     }
     .slider-rail {
       height: 1px;
     }
     .slider-mark {
       width: 0;
     }
     .slider-markLabel-no-print{
       color: black;
       top: 15%;
     }
     .slider-markLabel-print {
       color: black;
       top: -40%;
     }
     .slider-markLabelActive-no-print{
       top: -100%;
       font-size: 1.1em;
       font-weith: bold;
     }
     .slider-markLabelActive-print {
       top: 35%;
       font-size: medium;
       font-weith: bold;
     }
     .label-red{
       color: red;
     }
     .label-yellow{
       color: #d0c215;
     }
     .label-green{
       color: #15d015;
     }")])

(defn hide-print-style []
  [:style
   (str
     ".show-only-on-printing {
       display: none;
     }
     @media print {
       .show-only-on-printing {
         display: block;
       }
       .show-only-on-printing ~ * {" ;; Selects every element after the show-only...
         "display: none !important;
       }
     }")])

(defn point-in-a-scale [{:keys [min max value suffix style-mode]}]
  (let [class-sufix (clojure.string/replace (str min max value) "." "")
        value-percentage (/ (- value min) (- max min))
        value-color (cond
                      (< value-percentage 0.15) "label-red"
                      (< value-percentage 0.25) "label-yellow"
                      (< value-percentage 0.75) "label-green"
                      (< value-percentage 0.85) "label-yellow"
                      (< value-percentage 1) "label-red"
                      :else "label-green")]
    [:> material-slider
     {:min (js/parseInt min)
      :max (js/parseInt max)
      :disabled true
      :value [value value]
      :marks [{:value min :label (clojure.string/replace (str min suffix) "." ",")}
              {:value value :label (clojure.string/replace (str value suffix) "." ",")}
              {:value max :label (clojure.string/replace (str max suffix) "." ",")}]
      :classes {:thumb "slider-thumb"
                :track "slider-track"
                :valueLabel "slider-valueLabel"
                :mark "slider-mark"
                :markLabel (str "slider-markLabel"style-mode)
                :markLabelActive (str "slider-markLabelActive"style-mode" "value-color)
                :root (str "slider-root"style-mode)}}]))

(defn avaliacao-info
  [[selected-patient selected-avaliacao]]
  (merge selected-avaliacao (dissoc selected-patient :avaliacoes)))
(re-frame/reg-sub
  ::avaliacao-info
  :<- [:react-med.screens.paciente-avaliacao/selected-avaliacao]
  :<- [:react-med.screens.patient-info.core/selected-patient]
  avaliacao-info)

(defn dados-para-relatorio
  [[avaliacao-info equacao-massa-livre-de-gordura equacao-agua-corporal-total]]
  (when (util/valid? ::bioimpedance/avaliacao-info avaliacao-info)
    (let [em-relacao-peso #(-> %
                               (/ (:peso avaliacao-info))
                               (* 100)
                               (.toFixed 1)
                               (js/parseFloat))
          massa-livre-de-gordura (bioimpedance/massa-livre-de-gordura equacao-massa-livre-de-gordura avaliacao-info)
          gordura-corporal-absoluta (- (:peso avaliacao-info)
                                       massa-livre-de-gordura)
          gordura-corporal-relativa (em-relacao-peso gordura-corporal-absoluta)
          massa-musculoesqueletica (-> (bioimpedance/massa-musculoesqueletica avaliacao-info)
                                       (/ (* (:estatura avaliacao-info) (:estatura avaliacao-info)))
                                       (* 10000)
                                       (.toFixed 1)
                                       (js/parseFloat))
          act (bioimpedance/agua-corporal equacao-agua-corporal-total avaliacao-info)
          agua-corporal-total (em-relacao-peso act)
          ae (bioimpedance/agua-extracelular avaliacao-info)
          agua-extracelular (em-relacao-peso ae)
          agua-intracelular (em-relacao-peso (- act ae))
          imc (bioimpedance/imc avaliacao-info)
          ;; t (bioimpedance/t avaliacao-info)
          ]
      [{:title "Massa Livre de Gordura"
        :min (-> (:peso avaliacao-info) (* 0.62) (.toFixed 0))
        :max (-> (:peso avaliacao-info) (* 0.96) (.toFixed 0))
        :suffix "Kg"
        :value (js/parseFloat (.toFixed massa-livre-de-gordura 1))}
       {:title "Gordura Corporal Absoluta"
        :min (-> (:peso avaliacao-info) (* 0.04) (.toFixed 0))
        :max (-> (:peso avaliacao-info) (* 0.38) (.toFixed 0))
        :suffix "Kg"
        :value (js/parseFloat (.toFixed gordura-corporal-absoluta 1))}
       {:title "Gordura Corporal Relativa"
        :min 4
        :max 38
        :suffix "%"
        :value gordura-corporal-relativa}
       {:title "Índice de Massa Muscular"
        :min 5
        :max 30
        :suffix " Kg․m²"
        :value massa-musculoesqueletica}
       {:title "Água Corporal Total"
        :min 50
        :max 80
        :suffix "%"
        :value agua-corporal-total}
       {:title "Água Extracelular"
        :min 10
        :max 40
        :suffix "%"
        :value agua-extracelular}
       {:title "Água Intracelular"
        :min 30
        :max 60
        :suffix "%"
        :value agua-intracelular}
       {:title "IMC"
        :min 12
        :max 36
        :suffix " Kg․m²"
        :value imc}])))
(re-frame/reg-sub
  ::dados-para-relatorio
  :<- [::avaliacao-info]
  :<- [:react-med.screens.paciente-relatorio.config/equacao-massa-livre-de-gordura]
  :<- [:react-med.screens.paciente-relatorio.config/equacao-agua-corporal-total]
  dados-para-relatorio)

(defn measurement-no-print-view [{:keys [title min max suffix value]}]
  [:<>
   [:div.measure-title-no-print
    [:b title]]
   [point-in-a-scale
    {:min min
     :max max
     :suffix suffix
     :style-mode "-no-print"
     :value value}]])

(defn measurement-print-view [{:keys [title min max suffix value]}]
  [:<>
   [:div.measure-title-print
    [:b title]]
   [point-in-a-scale
    {:min min
     :max max
     :suffix suffix
     :style-mode "-print"
     :value value}]])

(defn measurement-print-view-2 [{:keys [title min max suffix value]}]
  [:<>
   [:div
    {:style {:display "flex"
             :alignItems "center"
             :height 58
             :width "420px"
             :fontSize "larger"
             :whiteSpace "pre"}}
    [:b {:style {:paddingRight "30px"}} title]
    [point-in-a-scale
     {:min min
      :max max
      :suffix suffix
      :style-mode "-print"
      :value value}]]])

(defn with-key [f chosen-key]
  (fn [data]
    (with-meta (f data) {:key (chosen-key data)})))

(defn invalid-avaliacao-error []
  [:h3
   {:style #js {:textAlign "center"
                :paddingBottom "50px"}}
   "😕 Dados de coleta da avalição inválidos."])

(defn a4-grid []
  [:<>
   (map (fn [top]
          ^{:key top}
          [:div
           {:style {:top (str top "0mm")
                    :position "absolute"
                    :width "210mm"
                    :height "1px"
                    :backgroundColor "gray"
                    }}])
        (range 3 29 3))
   (map (fn [left]
          ^{:key left}
          [:div
           {:style {:left (str left "0mm")
                    :position "absolute"
                    :width "1px"
                    :height "297mm"
                    :backgroundColor "gray"
                    }}])
        (range 2 21 2))])

(def some-green "#629e98")
(def some-light-green "#cbeae7")
(def some-yellow "#c9c92d")

(defn format-num [unit value]
  (if (and value (not (js/isNaN value)))
    (.replace (str value unit) "." ",")
    ""))

(defn populacao-refencia [populacao-items]
  (as-> populacao-items $
       (util/get-pred #(true? (:checked? %)) $)
       (:label $)
       (clojure.string/split $ #"\s\[")
       (#(do (js/console.log "populcao-ref" %) %) $)
       ))
(re-frame/reg-sub
  ::populacao-refencia
  :<- [:react-med.screens.paciente-relatorio.ellipses-config/population-radio-items-checked]
  populacao-refencia)

(defn print-version-data
  [[selected-patient selected-avaliacao populacao-referencia]]
  (-> selected-patient
      (merge selected-avaliacao)
      (assoc :estatura (or (:estatura selected-avaliacao)
                           (:estatura selected-patient)))
      (update :estatura (partial format-num " cm"))
      (update :data util/yyyy-mm-dd->dd-mm-yyyy)
      (update :peso (partial format-num " Kg"))
      (update :resistencia (partial format-num " Ohms/m"))
      (update :reatancia (partial format-num " Ohms/m"))
      (update :circunferencia-cintura (partial format-num " cm"))
      (update :circunferencia-quadril (partial format-num " cm"))
      (update :circunferencia-braco (partial format-num " cm"))
      (update :circunferencia-perna (partial format-num " cm"))
      (assoc :populacao-referencia-first-line (first populacao-referencia))
      (assoc :populacao-referencia-second-line (str "["(second populacao-referencia)"]"))
      (assoc :pontos-rxc-chart (cons (:nome selected-patient)
                                     (mapv (fn [{:keys [resistencia reatancia]}]
                                             [resistencia reatancia])
                                           (:avaliacoes selected-patient))))))
(re-frame/reg-sub
  ::print-version-data
  :<- [:react-med.screens.patient-info.core/selected-patient]
  :<- [:react-med.screens.paciente-avaliacao/selected-avaliacao]
  :<- [::populacao-refencia]
  print-version-data)

(defn printing-view []
  (let [additional-margin-for-text-boxes 3
        {:keys [nome estatura idade data peso resistencia reatancia
                atividade-fisica circunferencia-cintura pontos-rxc-chart
                circunferencia-quadril circunferencia-braco
                circunferencia-perna populacao-referencia-first-line
                populacao-referencia-second-line]} (<sub [::print-version-data])]
    [:div.show-only-on-printing
     {:style {:position "relative"
              "WebkitPrintColorAdjust" "exact"}}
     ;; [a4-grid]
     [:img
      {:src "images/LogoReactmed.png"
       :style {:position "absolute"
               :width "80mm"
               :left "5mm"
               :top "11mm"}}]
     [:a
      {:style {:position "absolute"
               :color "#4b565c"
               :fontSize "12pt"
               :left "21mm"
               :top "37mm"
               :textDecoration "none"}
       :href "https://reactmed.com.br"}
      "https://reactmed.com.br"]
     [:div.horizontal-line
      {:style {:position "absolute"
               :backgroundColor some-green
               :height "2mm"
               :width "212mm"
               :top "46mm"}}]
     [:div.horizontal-line
      {:style {:position "absolute"
               :backgroundColor some-green
               :height "2px"
               :width "212mm"
               :top "51mm"}}]
     [:div
      {:style {:position "absolute"
               :backgroundColor some-green
               :height "17.3mm"
               :width "2px"
               :top "6.3mm"
               :left "93.6mm"}}]
     [:span
      {:style {:position "absolute"
               :left (str (+ additional-margin-for-text-boxes 94.9)"mm")
               :top (str (+ additional-margin-for-text-boxes 4.2)"mm")}}
      "Nome"]
     [:span
      {:style {:position "absolute"
               :left (str (+ additional-margin-for-text-boxes 97.4)"mm")
               :top (str (+ additional-margin-for-text-boxes 13.3)"mm")}}
      nome]
     [:div
      {:style {:position "absolute"
               :backgroundColor some-green
               :height "17.3mm"
               :width "2px"
               :top "27.5mm"
               :left "93.6mm"}}]
     [:span
      {:style {:position "absolute"
               :left (str (+ additional-margin-for-text-boxes 94.9)"mm")
               :top (str (+ additional-margin-for-text-boxes 25.4)"mm")}}
      "Estatura"]
     [:span
      {:style {:position "absolute"
               :left (str (+ additional-margin-for-text-boxes 97.4)"mm")
               :top (str (+ additional-margin-for-text-boxes 34.5)"mm")}}
      estatura]
     [:div
      {:style {:position "absolute"
               :backgroundColor some-green
               :height "17.3mm"
               :width "2px"
               :top "27.5mm"
               :left "123.2mm"}}]
     [:span
      {:style {:position "absolute"
               :left (str (+ additional-margin-for-text-boxes 126.7)"mm")
               :top (str (+ additional-margin-for-text-boxes 25.4)"mm")}}
      "Idade"]
     [:span
      {:style {:position "absolute"
               :left (str (+ additional-margin-for-text-boxes 129.1)"mm")
               :top (str (+ additional-margin-for-text-boxes 34.5)"mm")}}
      idade]
     [:div
      {:style {:position "absolute"
               :backgroundColor some-green
               :height "17.3mm"
               :width "2px"
               :top "27.5mm"
               :left "148.6mm"}}]
     [:span
      {:style {:position "absolute"
               :left (str (+ additional-margin-for-text-boxes 151.8)"mm")
               :top (str (+ additional-margin-for-text-boxes 25.4)"mm")}}
      "Data da Avaliação"]
     [:span
      {:style {:position "absolute"
               :left (str (+ additional-margin-for-text-boxes 154.3)"mm")
               :top (str (+ additional-margin-for-text-boxes 34.5)"mm")}}
      data]
     [:span
      {:style {:position "absolute"
               :fontSize "22pt"
               :color some-yellow
               :left (str (+ additional-margin-for-text-boxes 20)"mm")
               :top (str (+ additional-margin-for-text-boxes 53.2)"mm")}}
      "Medidas Coletadas"]
(let [some-gray "#f3f3f3"
      table-top 70
      line-distance 13.5
      gray-background-top (+ table-top (/ line-distance -2) 2.5)]
  [:<>
   [:span
    {:style {:position "absolute"
             :fontWeight "bold"
             :left "10mm"
             :top (str (+ table-top (* 0 line-distance))"mm")}}
    "Peso"]
   [:span
    {:style {:position "absolute"
             :textAlign "center"
             :width "40mm"
             :left "76.5mm"
             :top (str (+ table-top (* 0 line-distance))"mm")}}
    peso]
   [:span.gray-background
    {:style {:position "absolute"
             :backgroundColor some-gray
             :height "13.5mm"
             :width "107mm"
             :left "9.5mm"
             :top (str (+ gray-background-top (* 1 line-distance))"mm")}}]
   [:span
    {:style {:position "absolute"
             :fontWeight "bold"
             :left "10mm"
             :top (str (+ table-top (* 1 line-distance))"mm")}}
    "Resistência"]
   [:span
    {:style {:position "absolute"
             :textAlign "center"
             :width "40mm"
             :left "76.5mm"
             :top (str (+ table-top (* 1 line-distance))"mm")}}
    resistencia]
   [:span
    {:style {:position "absolute"
             :fontWeight "bold"
             :left "10mm"
             :top (str (+ table-top (* 2 line-distance))"mm")}}
    "Reatância"]
   [:span
    {:style {:position "absolute"
             :textAlign "center"
             :width "40mm"
             :left "76.5mm"
             :top (str (+ table-top (* 2 line-distance))"mm")}}
    reatancia]
   [:span.gray-background
    {:style {:position "absolute"
             :backgroundColor some-gray
             :height "13.5mm"
             :width "107mm"
             :left "9.5mm"
             :top (str (+ gray-background-top (* 3 line-distance))"mm")}}]
   [:span
    {:style {:position "absolute"
             :fontWeight "bold"
             :left "10mm"
             :top (str (+ table-top (* 3 line-distance))"mm")}}
    "Nível de Atividade Física"]
   [:span
    {:style {:position "absolute"
             :textAlign "center"
             :width "40mm"
             :left "76.5mm"
             :top (str (+ table-top (* 3 line-distance))"mm")}}
    atividade-fisica]
   [:span
    {:style {:position "absolute"
             :fontWeight "bold"
             :left "10mm"
             :top (str (+ table-top (* 4 line-distance))"mm")}}
    "Circunferência de Cintura"]
   [:span
    {:style {:position "absolute"
             :textAlign "center"
             :width "40mm"
             :left "76.5mm"
             :top (str (+ table-top (* 4 line-distance))"mm")}}
    circunferencia-cintura]
   [:span.gray-background
    {:style {:position "absolute"
             :backgroundColor some-gray
             :height "13.5mm"
             :width "107mm"
             :left "9.5mm"
             :top (str (+ gray-background-top (* 5 line-distance))"mm")}}]
   [:span
    {:style {:position "absolute"
             :fontWeight "bold"
             :left "10mm"
             :top (str (+ table-top (* 5 line-distance))"mm")}}
    "Circunferência de Quadril"]
   [:span
    {:style {:position "absolute"
             :textAlign "center"
             :width "40mm"
             :left "76.5mm"
             :top (str (+ table-top (* 5 line-distance))"mm")}}
    circunferencia-quadril]
   [:span
    {:style {:position "absolute"
             :fontWeight "bold"
             :left "10mm"
             :top (str (+ table-top (* 6 line-distance))"mm")}}
    "Circunferência de Braço"]
   [:span
    {:style {:position "absolute"
             :textAlign "center"
             :width "40mm"
             :left "76.5mm"
             :top (str (+ table-top (* 6 line-distance))"mm")}}
    circunferencia-braco]
   [:span.gray-background
    {:style {:position "absolute"
             :backgroundColor some-gray
             :height "13.5mm"
             :width "107mm"
             :left "9.5mm"
             :top (str (+ gray-background-top (* 7 line-distance))"mm")}}]
   [:span
    {:style {:position "absolute"
             :fontWeight "bold"
             :left "10mm"
             :top (str (+ table-top (* 7 line-distance))"mm")}}
    "Circunferência de Perna"]
   [:span
    {:style {:position "absolute"
             :textAlign "center"
             :width "40mm"
             :left "76.5mm"
             :top (str (+ table-top (* 7 line-distance))"mm")}}
    circunferencia-perna]])
     [:div.vertical-line
      {:style {:position "absolute"
               :backgroundColor some-light-green
               :height "218mm"
               :width "1px"
               :top "62.8mm"
               :left "121.1mm"}}]
    [:span
     {:style {:position "absolute"
              :fontSize "22pt"
              :color some-yellow
              :textAlign "center"
              :width "95.3mm"
              :height "25.4mm"
              :left "114.7mm"
              :top "53.2mm"
              :marginTop (str additional-margin-for-text-boxes"mm")}}
     [:p {:style {:margin 0}} "Análise de"]
     [:p {:style {:margin 0}} "Composição Corporal"]]
    [:span
     {:style {:position "absolute"
              :left "119mm"
              :top "76mm"}}
     [:div.relatorio-div.relatorio-div-print
      (map (with-key measurement-print-view :title)
           (<sub [::dados-para-relatorio]))]]
    [:div.horizontal-line
      {:style {:position "absolute"
               :backgroundColor some-light-green
               :height "1px"
               :width "109.6mm"
               :top "180mm"
               :left "6mm"}}]
    [:span
      {:style {:position "absolute"
               :fontSize "22pt"
               :color some-yellow
               :left "37mm"
               :top (str (+ additional-margin-for-text-boxes 180)"mm")}}
      "Gráfico RXc"]
    [:span
     {:style {:position "absolute"
              :height "71mm"
              :width "115.4mm"
              :top "194mm"
              :left "4mm"}}
     [react-med.screens.paciente-relatorio.tollerance-ellipse-component/ellipse-chart-component2
      {:style {:height "100%" :width "100%"}
       :series (concat (<sub [:react-med.screens.paciente-relatorio.ellipses/tollerance-ellipses-series]) [pontos-rxc-chart])
       :options #js {:chartArea #js {:top 0 :left 20
                                     :width "65%" :height "92%"}
                  :hAxis #js {:textPosition "in"
                              :title "Resistência"
                              :viewWindowMode "maximized"}
                  :vAxis #js {:textPosition "in"
                              :title "Reatância"
                              :viewWindowMode "maximized"}
                  :series #js {"0" #js {:enableInteractivity false
                                        :lineWidth 2 :pointSize 0}
                               "1" #js {:enableInteractivity false
                                        :lineWidth 2 :pointSize 0}
                               "2" #js {:enableInteractivity false
                                        :lineWidth 2 :pointSize 0}
                               "3" #js {:pointShape "triangle" ;; One of 'circle', 'triangle', 'square', 'diamond', 'star', or 'polygon'.
                                        :pointSize 14}
                               "4" #js {:pointShape "square" ;; One of 'circle', 'triangle', 'square', 'diamond', 'star', or 'polygon'.
                                        :pointSize 14}
                               "5" #js {:pointShape "diamond" ;; One of 'circle', 'triangle', 'square', 'diamond', 'star', or 'polygon'.
                                        :pointSize 14}
                               "6" #js {:pointShape "star" ;; One of 'circle', 'triangle', 'square', 'diamond', 'star', or 'polygon'.
                                        :pointSize 14}
                               "7" #js {:pointShape "polygon" ;; One of 'circle', 'triangle', 'square', 'diamond', 'star', or 'polygon'.
                                        :pointSize 14}}}}]]
    [:span
     {:style {:position "absolute"
              :fontWeight "bolder"
              :fontSize "11pt"
              :textAlign "center"
              :width "110mm"
              :left "5mm"
              :top "268mm"}}
     "População de Referência"]
    [:span
     {:style {:position "absolute"
              :fontSize "10pt"
              :textAlign "center"
              :width "110mm"
              :left "5mm"
              :top "273mm"}}
     populacao-referencia-first-line]
    [:span
     {:style {:position "absolute"
              :fontSize "10pt"
              :textAlign "center"
              :width "110mm"
              :left "5mm"
              :top "278mm"}}
     populacao-referencia-second-line]
    [:div.horizontal-line
      {:style {:position "absolute"
               :backgroundColor some-green
               :height "9px"
               :width "211mm"
               :top "294mm"}}]
     ]))

(defn view []
  (let [paciente-selectionado (<sub [:react-med.screens.patient-info.core/selected-patient])
        menu-structure (<sub [:react-med.routes/side-menu])
        actions (<sub [:react-med.routes/actions])
        tabs (<sub [:react-med.routes/tabs])
        title (<sub [:react-med.routes/title])]
    [:<>
     [relatorio-style]
     [hide-print-style]
     [printing-view]
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
       [shell/error-boundary
        {:if-error [invalid-avaliacao-error]}
        [:div.relatorio-div.relatorio-div-no-print
         (map (with-key measurement-no-print-view :title)
              (<sub [::dados-para-relatorio]))]]]
      [shell/drawer-menu
       {:menu-structure menu-structure}]
      [shell/actions-menu
       {:actions actions}]
      [shell/bottom-bar]]]))
