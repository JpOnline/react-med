(ns react-med.screens.paciente-relatorio.ellipses-config
  (:require
    [checkbox :as material-checkbox]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [menu-item :as material-menu-item]
    [menu-list :as material-menu-list]
    [radio :as material-radio]
    [re-frame.core :as re-frame]
    [react-med.screens.paciente-relatorio.tollerance-ellipse-component :as tollerance-ellipse-component]
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    ))

(def item-style {:padding "1px 0"})

;; This is ugly, if you need to touch it I recommend to start over.
(defn-traced check-aval
  [app-state [event parent-id id]]
  (let [paciente-id (or parent-id id)
        aval-id (when parent-id id)
        paciente-avals (get-in app-state [:domain :patients paciente-id :avaliacoes])
        paciente-previous-status (get-in app-state [:ui :ellipses-config :avals-checked paciente-id :checked?])]
    (if aval-id
      (as-> app-state $
        (update-in $ [:ui :ellipses-config :avals-checked paciente-id :avals aval-id] not)
        (if (every? true? (get-in $ [:ui :ellipses-config :avals-checked paciente-id :avals]))
          (assoc-in $ [:ui :ellipses-config :avals-checked paciente-id :checked?] true)
          (assoc-in $ [:ui :ellipses-config :avals-checked paciente-id :checked?] false)))
      (-> app-state
          (assoc-in [:ui :ellipses-config :avals-checked paciente-id :checked?] (not paciente-previous-status))
          (assoc-in [:ui :ellipses-config :avals-checked
                     paciente-id :avals] (vec (map-indexed (fn [idx x] (not paciente-previous-status)) paciente-avals)))))))
(re-frame/reg-event-db ::check-aval check-aval)

(defn avals-checked
  [app-state]
  (get-in app-state [:ui :ellipses-config :avals-checked]))
(re-frame/reg-sub ::avals-checked avals-checked)

(defn update-avaliacoes [avals avals-checked]
  (->> avals
       (map (fn [{:keys [id data deleted?]}]
              (when (not deleted?)
                {:id id
                 :label (util/yyyy-mm-dd->dd-mm-yyyy data)
                 :checked? (get avals-checked id)})))))

(defn pacientes-e-avals
  [[pacientes avals-checked]]
  (->> pacientes
       (map #(select-keys % [:id :nome :avaliacoes]))
       (map #(update % :avaliacoes (comp (partial filter :id) vals)))
       (map #(clojure.set/rename-keys % {:nome :label}))
       (map #(assoc % :checked? (get-in avals-checked [(:id %) :checked?])))
       (map #(update-in % [:avaliacoes] update-avaliacoes (get-in avals-checked [(:id %) :avals])))))
(re-frame/reg-sub
  ::pacientes-e-avals
  :<- [:react-med.screens.lista-pacientes/pacientes]
  :<- [::avals-checked]
  pacientes-e-avals)

(defn points-selection-component []
  (let [structure->checkboxes
        (fn s->cb
          ([structure]
           (s->cb structure 0 nil))
          ([{:keys [label checked? avaliacoes id] :as i} padding parent-id]
           (concat [^{:key (str parent-id id)}
                    [:> material-menu-item
                     {:style (merge item-style
                                    {:paddingLeft (* 10 padding)})
                      :onClick #(>evt [::check-aval parent-id id])}
                     [:paper-checkbox
                      {:style {"--paper-checkbox-margin" "10px"
                               "--paper-checkbox-size" "20px"}
                       :tabIndex -1
                       (when checked? :checked) checked?
                       }]
                     label]]
                   (mapcat s->cb avaliacoes (repeat (inc padding)) (repeat id))
                   [^{:key (str parent-id id "-paciente-separator")}
                    [:div.paciente-separator {:style {:height "5px"}}]]
                   )))
        pacientes-e-avals (<sub [::pacientes-e-avals])]
    [:<>
     [:div
      {:style #js {:fontSize "larger"
                   :fontWeight "bold"
                   :marginTop "15px"}}
      "Seleção de Pontos"]
     (if (empty? pacientes-e-avals)
       [:> material-menu-item "Nenhuma avaliação cadastrada ainda."]
       (map structure->checkboxes pacientes-e-avals))]))

(defn-traced selected-population
  [app-state [event population]]
  (assoc-in app-state [:ui :ellipses-config :chosen-population] population))
(re-frame/reg-event-db ::selected-population selected-population)

(defn chosen-population
  [app-state]
  (get-in app-state [:ui :ellipses-config :chosen-population] "women-21-49-buffa"))
(re-frame/reg-sub ::chosen-population chosen-population)

(def population-radio-items
  [{:population "women-21-49-buffa"
    :label "Mulheres 21-49 anos, adultos dos EUA [Buffa et al., PloS one, 8:e58533, 2013"}
   {:population "men-21-49-buffa"
    :label "Homens 21-49 anos, adultos dos EUA [Buffa et al., PloS one, 8:e58533, 2013"}
   {:population "women-65-100-saragat"
    :label "Mulheres 65-100 anos, Italianas [Saragat et al., Exp Gerontol, 50: 52-56, 2014]"}
   {:population "men-65-100-saragat"
    :label "Homens 65-100 anos, Italianos [Saragat et al., Exp Gerontol, 50: 52-56, 2014]"}
   {:population "women-18-30-ibanez"
    :label "Mulheres 18-30 anos, Ítalo-hispânico [Ibanez et al., Am J Hum Biol. 27:871-876: 2015]"}
   {:population "men-18-30-ibanez"
    :label "Homens 18-30 anos, Ítalo-hispânico [Ibanez et al., Am J Hum Biol. 27:871-876: 2015]"}])

(defn population-radio-items-checked
  [chosen]
  (map (fn [{:keys [population] :as item}]
         (assoc item :checked? (= population chosen)))
       population-radio-items))
(re-frame/reg-sub
  ::population-radio-items-checked
  :<- [::chosen-population]
  population-radio-items-checked)

(defn population-selection-component []
  (let [items (<sub [::population-radio-items-checked])]
    [:<>
     [:div
      {:style #js {:fontSize "larger"
                   :fontWeight "bold"}}
      "População de Referência"]
     (map (fn [{:keys [population label checked?]}]
            ^{:key population}
            [:> material-menu-item
             {:onClick #(>evt [::selected-population population])
              :style item-style}
             [:> material-radio {:checked checked?}]
             label])
          items)]))

(defn component []
  [:<>
   [population-selection-component]
   [points-selection-component]])

(defn view []
  [shell/default
   [component]])
