(ns react-med.screens.lista-avaliacoes
  (:require
    [checkbox :as material-checkbox]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [menu-item :as material-menu-item]
    [menu-list :as material-menu-list]
    [re-frame.core :as re-frame]
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    [reagent.core :as reagent]
    [tick.alpha.api :as tick]
    ))

(defn avaliacoes
  [app-state]
  (let [paciente-id (get-in app-state [:ui :paciente-selecionado])
        avaliacoes (vals (get-in app-state [:domain :patients paciente-id :avaliacoes]))]
    (filter :id avaliacoes)))
(re-frame/reg-sub ::avaliacoes avaliacoes)

(defn-traced show-avaliacoes-checkbox
  [app-state [event]]
  (let [paciente-id (get-in app-state [:ui :paciente-selecionado])
        avaliacoes (get-in app-state [:domain :patients paciente-id :avaliacoes])
        ]
    (-> app-state
        (assoc-in [:ui :state] "selecionando-avaliacoes")
        (assoc-in [:ui :checkboxed-avaliacoes] (util/repeat-as avaliacoes false)))))
(re-frame/reg-event-db ::show-avaliacoes-checkbox show-avaliacoes-checkbox)


(defn-traced nova-avaliacao
  [app-state [event]]
  (let [paciente-id (get-in app-state [:ui :paciente-selecionado])
        new-id (count (get-in app-state [:domain :patients paciente-id :avaliacoes]))]
    (-> app-state
        (assoc-in [:domain :patients paciente-id :avaliacoes new-id]
                  {:id new-id
                   :data (str (tick/date))})
        (assoc-in [:ui :state] "edit-coleta")
        (assoc-in [:ui :avaliacao-selecionada] new-id))))
(re-frame/reg-event-db ::nova-avaliacao nova-avaliacao)

(defn date-str [date]
  (let [pad #(if (= (count (str %)) 1) (str "0" %) %)
        dd (pad (tick/day-of-month date))
        MM (pad (tick/int (tick/month date)))
        yyyy (tick/int (tick/year date))
        day (tick/day-of-week date)
        pt-week {tick/MONDAY "Segunda-feira"
                 tick/TUESDAY "Terça-feira"
                 tick/WEDNESDAY "Quarta-feira"
                 tick/THURSDAY "Quinta-feira"
                 tick/FRIDAY "Sexta-feira"
                 tick/SATURDAY "Sábado"
                 tick/SUNDAY "Domingo"}]
    (str dd"/"MM"/"yyyy" ("(pt-week day)")")))

(defn-traced seleciona-avaliacao
  "Entrar na tela de detalhes do paciente selecionado."
  [app-state [event avaliacao-id]]
  (-> app-state
      (assoc-in [:ui :state] "coleta")
      (assoc-in [:ui :avaliacao-selecionada] avaliacao-id)))
(re-frame/reg-event-db ::seleciona-avaliacao seleciona-avaliacao)

(defn list-component []
  (let [paciente-selecionado (<sub [:react-med.screens.patient-info.core/selected-patient])
        avaliacoes (<sub [::avaliacoes])]
    [:> material-menu-list
     (cond
       (= "Paciente não encontrado" (:nome paciente-selecionado))
         [:> material-menu-item "Nenhum paciente selecionado"]
       (empty? avaliacoes)
         [:> material-menu-item "Nenhuma avaliação cadastrada."]
       :else
         (map (fn [{:keys [data id]}]
              ^{:key id}
              [:> material-menu-item
               {:onClick #(>evt [::seleciona-avaliacao id])}
               (date-str data)])
            avaliacoes))]))

(defn error-wrapper [component]
  [shell/error-boundary
   {:if-error [:h3 "😢 Erro ao mostrar lista de avaliações."]}
   [:<> component]])

(defn view []
  [shell/default
   [error-wrapper [list-component]]])

(defn-traced delete-avaliacoes
  [app-state]
  (let [paciente-id (get-in app-state [:ui :paciente-selecionado])
        avals (vals (get-in app-state [:domain :patients paciente-id :avaliacoes]))
        checks (get-in app-state [:ui :checkboxed-avaliacoes])
        avaliacoes (map (fn [p c] (assoc p :checked? c)) avals checks)
        checked-avaliacoes (filter :checked? avaliacoes)
        confirm-text (case (count checked-avaliacoes)
                       0 "Nenhuma avaliação selecionada."
                       1 "Tem certeza que quer excluir essa avaliação?"
                       "Tem certeza que quer excluir as seguintes avaliações?")
        names (reduce str (map #(str "\n- " %)
                               (map :data checked-avaliacoes)))
        ids (map :id checked-avaliacoes)]
    (if (not (js/confirm (str confirm-text names)))
      app-state
      (-> (reduce #(assoc-in %1 [:domain
                                 :patients
                                 paciente-id
                                 :avaliacoes
                                 %2]
                             {:deleted? true}) app-state ids)
          (assoc-in [:ui :state] "avaliacoes")
          (assoc-in [:ui :actions-menu :opened?] false)
          (update-in [:ui] dissoc :checkboxed-avaliacoes)))))
(re-frame/reg-event-db ::delete-avaliacoes delete-avaliacoes)

(defn checkboxed-avaliacoes
  [app-state]
  (let [paciente-id (get-in app-state [:ui :paciente-selecionado])
        avaliacoes (vals (get-in app-state [:domain :patients paciente-id :avaliacoes]))
        checks (-> (get-in app-state [:ui :checkboxed-avaliacoes])
                   (or (util/repeat-as avaliacoes false)))]
    (->> (map (fn [p c]
                (assoc p :checked? c))
              avaliacoes checks)
         (filter :id))))
(re-frame/reg-sub ::checkboxed-avaliacoes checkboxed-avaliacoes)

(defn-traced check-avaliacao
  [app-state [event avaliacao-id]]
  (let [paciente-id (get-in app-state [:ui :paciente-selecionado])
        avaliacoes (vals (get-in app-state [:domain :patients paciente-id :avaliacoes]))
        checks (get-in app-state [:ui :checkboxed-avaliacoes])]
    (as-> app-state $
      ;; Arruma a estrutura de checkboxes caso tenha sido adicionado ou
      ;; retirado uma avaliacao
      (if (= (count avaliacoes) (count checks))
        $
        (assoc-in $ [:ui :checkboxed-avaliacoes] (util/repeat-as avaliacoes false)))
      (update-in $ [:ui :checkboxed-avaliacoes avaliacao-id] not))))
(re-frame/reg-event-db ::check-avaliacao check-avaliacao)

(defn selecting-component []
  (let [paciente-selecionado (<sub [:react-med.screens.patient-info.core/selected-patient])
        avaliacoes (<sub [::checkboxed-avaliacoes])]
    [:> material-menu-list
     (cond
       (= "Paciente não encontrado" (:nome paciente-selecionado))
         [:> material-menu-item "Nenhum paciente selecionado"]
       (empty? avaliacoes)
         [:> material-menu-item "Nenhuma avaliação cadastrada ainda."]
       :else
         (map (fn [{:keys [id data checked?]}]
                ^{:key id}
                [:> material-menu-item
                 {:onClick #(>evt [::check-avaliacao id])}
                 [:> material-checkbox
                  {:checked checked?
                   :tabIndex -1}]
                 data])
              avaliacoes))]))

(defn selecting-view []
  [shell/default
   [selecting-component]])
