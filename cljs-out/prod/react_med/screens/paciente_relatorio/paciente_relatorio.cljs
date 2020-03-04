(ns react-med.screens.paciente-relatorio.paciente-relatorio
  (:require
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    [re-frame.core :as re-frame]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [slider :as material-slider]
    [react-med.screens.paciente-relatorio.bioimpedance :as bioimpedance]
    ))

(defn two-line [first-content second-content]
  [:div
   {:style #js {:display "flex"
                :flexDirection "column"
                :alignItems "center"
                :height 48
                :padding "20px 5px"}}
   [:b first-content]
   [:span
    {:style #js {:fontSize "x-large"}}
    second-content]])

(defn point-in-a-scale [{:keys [min max value suffix]}]
  (let [class-sufix (clojure.string/replace (str min max value) "." "")
        value-percentage (/ (- value min) (- max min))
        value-color (cond
                      (< value-percentage 0.15) "red"
                      (< value-percentage 0.25) "#d0c215" ;; yellow
                      (< value-percentage 0.75) "#15d015" ;; green
                      (< value-percentage 0.85) "#d0c215" ;; yellow
                      (< value-percentage 1) "red"
                      :else "#15d015")] ;; green
    [:<>
     [:style
      (str
        ".slider-root{
        background: linear-gradient(90deg, rgba(183,141,130,0.3) 0%, rgba(25,252,3,0) 25%, rgba(25,252,3,0) 75%, rgba(183,141,130,0.3) 100%);
        height: 30px;
        border-radius: 6px;
        color: mediumseagreen;
        padding: 0;
        margin: 20px 0;
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
        .slider-markLabel-" class-sufix "{
        color: black;
        top: 15%;
        }
        .slider-markLabelActive-" class-sufix "{
        color: " value-color ";
        top: -100%;
        font-size: 1.1em;
        font-weith: bold;
        }
        ")]
     [:> material-slider
      {:min min
       :max max
       :disabled true
       :value [value value]
       :marks [{:value min :label (clojure.string/replace (str min suffix) "." ",")}
               {:value value :label (clojure.string/replace (str value suffix) "." ",")}
               {:value max :label (clojure.string/replace (str max suffix) "." ",")}]
       :classes {:thumb "slider-thumb"
                 :track "slider-track"
                 :valueLabel "slider-valueLabel"
                 :mark "slider-mark"
                 :markLabel (str "slider-markLabel-" class-sufix)
                 :markLabelActive (str "slider-markLabelActive-" class-sufix)
                 :root "slider-root"}}]]))

(defn avaliacao-info
  [[selected-patient selected-avaliacao]]
  (merge selected-avaliacao (dissoc selected-patient :avaliacoes)))
(re-frame/reg-sub
  ::avaliacao-info
  :<- [:react-med.screens.paciente-avaliacao/selected-avaliacao]
  :<- [:react-med.screens.patient-info.core/selected-patient]
  avaliacao-info)

(defn relatorio-component []
  (let [avaliacao-info (<sub [::avaliacao-info])
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
        agua-intracelular (em-relacao-peso (bioimpedance/agua-intracelular avaliacao-info))
        imc (bioimpedance/imc avaliacao-info)
        ;; t (bioimpedance/t avaliacao-info)
        line-style #js {:display "flex"
                        :alignItems "center"
                        :height 48
                        :whiteSpace "pre"}]
    [:div
     {:style #js {:display "flex"
                  :padding "0 35px"
                  :maxWidth "400px"
                  :flexDirection "column"
                  :alignItems "center"}}
     [:div
      {:style line-style}
      [:b "Gordura Corporal Absoluta"]]
     [point-in-a-scale
      {:min (-> (:peso avaliacao-info) (* 0.04) (.toFixed 0))
       :max (-> (:peso avaliacao-info) (* 0.38) (.toFixed 0))
       :suffix "Kg"
       :value (js/parseFloat (.toFixed gordura-corporal-absoluta 1))}]
     [:div
      {:style line-style}
      [:b "Gordura Corporal Relativa"]]
     [point-in-a-scale
      {:min 4
       :max 38
       :suffix "%"
       :value gordura-corporal-relativa}]
     [:div
      {:style line-style}
      [:b "Massa Musculoesquelética"]]
     [point-in-a-scale
      {:min 5
       :max 30
       :value massa-musculoesqueletica}]
     [:div
      {:style line-style}
      [:b "Água Corporal Total"]]
     [point-in-a-scale
      {:min 50
       :max 80
       :suffix "%"
       :value 65.9}]
     [:div
      {:style line-style}
      [:b "Água Extracelular"]]
     [point-in-a-scale
      {:min 10
       :max 40
       :suffix "%"
       :value agua-extracelular}]
     [:div
      {:style line-style}
      [:b "Água Intracelular"]]
     [point-in-a-scale
      {:min 30
       :max 60
       :suffix "%"
       :value agua-intracelular}]
     [:div
      {:style line-style}
      [:b "IMC"]]
     [point-in-a-scale
      {:min 12
       :max 36
       :value imc}]
     [two-line
      "Impedância"
      (Math/round (bioimpedance/impedancia avaliacao-info))]]))

(defn invalid-avaliacao-error []
  [:h3
   {:style #js {:textAlign "center"
                :paddingBottom "50px"}}
   "😕 Dados de coleta da avalição inválidos."])

(defn view []
  (let [paciente-selectionado (<sub [:react-med.screens.patient-info.core/selected-patient])
        menu-structure (<sub [:react-med.routes/side-menu])
        actions (<sub [:react-med.routes/actions])
        tabs (<sub [:react-med.routes/tabs])
        title (<sub [:react-med.routes/title])]
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
       [relatorio-component]]]
     [shell/drawer-menu
      {:menu-structure menu-structure}]
     [shell/actions-menu
      {:actions actions}]
     [shell/bottom-bar]]))
