(ns react-med.screens.paciente-relatorio.ellipses
  (:require
    [re-frame.core :as re-frame]
    [react-med.screens.paciente-relatorio.bioimpedance :as bioimpedance]
    [react-med.screens.paciente-relatorio.ellipses-config :as ellipses-config]
    [react-med.screens.paciente-relatorio.tollerance-ellipse-component :as tollerance-ellipse-component]
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    ))

(def population-data-for-ellipse
  [{:population "women-21-49-buffa"
    :size 754
    :rsp-mean 492
    :rsp-sd 95.9
    :xcsp-mean 55.4
    :xcsp-sd 12.3
    :correlation-r 0.88}
   {:population "men-21-49-buffa"
    :size 836
    :rsp-mean 402.4
    :rsp-sd 62.9
    :xcsp-mean 52.5
    :xcsp-sd 9.5
    :correlation-r 0.84}
   {:population "women-65-100-saragat"
    :size 295
    :rsp-mean 462
    :rsp-sd 80.1
    :xcsp-mean 47.9
    :xcsp-sd 11.2
    :correlation-r 0.75}
   {:population "men-65-100-saragat"
    :size 265
    :rsp-mean 391.8
    :rsp-sd 57.9
    :xcsp-mean 42.6
    :xcsp-sd 9.9
    :correlation-r 0.6}
   {:population "women-18-30-ibanez"
    :size 213
    :rsp-mean 332.7
    :rsp-sd 41.7
    :xcsp-mean 44.4
    :xcsp-sd 6.8
    :correlation-r 0.77}
   {:population "men-18-30-ibanez"
    :size 227
    :rsp-mean 388.6
    :rsp-sd 60
    :xcsp-mean 43.7
    :xcsp-sd 7.5
    :correlation-r 0.79}])

(defn tollerance-ellipses-series
  [chosen-population]
  (let [{:keys [rsp-mean xcsp-mean
                rsp-sd xcsp-sd
                correlation-r]} (util/get-pred
                                  #(= (:population %) chosen-population)
                                  population-data-for-ellipse)
        [[tol-50-x tol-75-x tol-95-x]
         [tol-50-y tol-75-y tol-95-y]
         rotation] (tollerance-ellipse-component/tolerance-ellipses-params rsp-sd xcsp-sd correlation-r)]
    [(tollerance-ellipse-component/ellipse "95% Tolerância" [rsp-mean xcsp-mean] tol-95-x tol-95-y rotation)
     (tollerance-ellipse-component/ellipse "75% Tolerância" [rsp-mean xcsp-mean] tol-75-x tol-75-y rotation)
     (tollerance-ellipse-component/ellipse "50% Tolerância" [rsp-mean xcsp-mean] tol-50-x tol-50-y rotation)]))
(re-frame/reg-sub
  ::tollerance-ellipses-series
  :<- [::ellipses-config/chosen-population]
  tollerance-ellipses-series)

(defn filter-selected [avals avals-checked]
  (->> avals
       (map (fn [{:keys [id data deleted?] :as avaliacao-info}]
              (when (not deleted?)
                (merge avaliacao-info
                       {:data (util/yyyy-mm-dd->dd-mm-yyyy data)
                        :checked? (get avals-checked id)}))))
       (filter :checked?)))

(defn pacientes-avaliacoes-pontos
  "Returns points in the chart like [paciente-name [p1x p1y] [p2x p2y]]"
  [[pacientes avals-checked]]
  (->> pacientes
       (map #(select-keys % [:id :nome :avaliacoes]))
       (map #(update % :avaliacoes vals))
       (map #(update-in % [:avaliacoes] filter-selected (get-in avals-checked [(:id %) :avals])))
       ;; Filtra pacientes com avaliacoes.
       (filter #(seq (:avaliacoes %)))
       (map (fn [{:keys [nome avaliacoes]}]
              (apply concat [[nome] (mapv (fn [avaliacao-info]
                                            [(bioimpedance/rsp avaliacao-info) (bioimpedance/xcsp avaliacao-info)])
                                          avaliacoes)])))))
(re-frame/reg-sub
  ::pacientes-avaliacoes-pontos
  :<- [:react-med.screens.lista-pacientes/pacientes]
  :<- [::ellipses-config/avals-checked]
  pacientes-avaliacoes-pontos)

(defn ellipses-graph-series
  [[ellipses pacientes-pontos]]
  (concat ellipses pacientes-pontos))
(re-frame/reg-sub
  ::ellipses-graph-series
  :<- [::tollerance-ellipses-series]
  :<- [::pacientes-avaliacoes-pontos]
  ellipses-graph-series)

(def series-options
  #js {"0" #js {:enableInteractivity false
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
                :pointSize 14}})

(defn desktop-ellipses-chart []
  [tollerance-ellipse-component/ellipse-chart-component2
   {:style #js {:height "100%" :width "100%"}
    :series (<sub [::ellipses-graph-series])
    :options #js {:hAxis #js {:textPosition "in"
                              :viewWindowMode "maximized"
                              :title "Resistência Específica (RSP)"}
                  :vAxis #js {:textPosition "in"
                              :viewWindowMode "maximized"
                              :title "Reatância Específica (XcSP)"}
                  :series series-options}}])

(defn mobile-ellipses-chart []
  [tollerance-ellipse-component/ellipse-chart-component2
   {:style #js {:height "100%" :width "100%"}
    :series (<sub [::ellipses-graph-series])
    :options #js {:chartArea #js {:top 0 :width "100%" :height "92.5%"}
                  :axisTitlesPosition "in"
                  :legend #js {:position "bottom"
                               ;; :alignment "start"
                               }
                  :hAxis #js {:textPosition "in"
                              :title "Resistência Específica (RSP)"
                              :viewWindowMode "maximized"
                              ;; :maxValue 1000
                              ;; :minValue -100
                              }
                  :vAxis #js {:textPosition "in"
                              :title "Reatância Específica (XcSP)"
                              :viewWindowMode "maximized"
                              ;; :maxValue 100
                              ;; :minValue 0
                              }
                  :series series-options}}])

(defn desktop-view []
  [shell/default
   [desktop-ellipses-chart]])

(defn top-bar [& children]
  [:div.top-bar
   {:style #js {:minHeight 48
                :padding "0 24px"
                :display "flex"
                :alignItems "center"}}
   (map-indexed #(with-meta %2 {:key %1}) children)])

(defn mobile-view []
  [shell/main-panel
   [shell/header
    [top-bar
     [shell/left-icon
      {:variation (<sub [:react-med.routes/top-bar-icon])}]
     [shell/tabs-menu
      {:menu-options (<sub [:react-med.routes/tabs])}]]]
   [shell/main-content
    [shell/error-boundary
     {:if-error [:h4 "erro"]}
     [mobile-ellipses-chart]]]
   [shell/drawer-menu
    {:menu-structure (<sub [:react-med.routes/side-menu])}]])

(defn view []
  (if (= "landscape" (<sub [:react-med.orientation/orientation]))
    [mobile-view]
    [desktop-view]))
