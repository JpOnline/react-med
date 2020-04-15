(ns react-med.screens.lista-pacientes
  (:require
    [checkbox :as material-checkbox]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [menu-item :as material-menu-item]
    [menu-list :as material-menu-list]
    [re-frame.core :as re-frame]
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    ))

(defn pacientes
  [app-state]
  (filter :id (get-in app-state [:domain :patients])))
(re-frame/reg-sub ::pacientes pacientes)

(defn checkboxed-patients
  [app-state]
  (let [patients (get-in app-state [:domain :patients])
        checks (-> (get-in app-state [:ui :checkboxed-patients])
                   (or (util/repeat-as patients false)))]
    (->> (map (fn [p c] (assoc p :checked? c)) patients checks)
         (filter :id))))
(re-frame/reg-sub ::checkboxed-patients checkboxed-patients)

(defn-traced seleciona-paciente
  "Entrar na tela de detalhes do paciente selecionado."
  [app-state [event paciente-id]]
  (-> app-state
      (assoc-in [:ui :state] "info")
      (assoc-in [:ui :paciente-selecionado] paciente-id)))
(re-frame/reg-event-db ::seleciona-paciente seleciona-paciente)

(defn-traced novo-paciente
  [app-state [event]]
  (let [new-id (count (get-in app-state [:domain :patients]))]
    (-> app-state
        (assoc-in [:domain :patients new-id] {:id new-id
                                              :nome "Novo Paciente"
                                              :nascimento "1900-01-01"})
        (assoc-in [:ui :state] "edit-info")
        (assoc-in [:ui :paciente-selecionado] new-id))))
(re-frame/reg-event-db ::novo-paciente novo-paciente)

(defn-traced selecionar-pacientes
  "Mostrar checkboxes ao lado dos nomes dos pacientes."
  [app-state]
  (let [patients (get-in app-state [:domain :patients])]
    (-> app-state
        (assoc-in [:ui :state] "selecionando-pacientes")
        (assoc-in [:ui :checkboxed-patients] (util/repeat-as patients false)))))
(re-frame/reg-event-db ::selecionar-pacientes selecionar-pacientes)

(def list-actions
  [{:name "Novo" :event ::novo-paciente}
   {:name "Selecionar" :event ::selecionar-pacientes}])

(defn list-component []
  (let [pacientes (<sub [::pacientes])]
    [:> material-menu-list
     (if (empty? pacientes)
       [:> material-menu-item "Nenhum paciente cadastrado ainda."]
       (map (fn [paciente]
              ^{:key (:nome paciente)}
              [:> material-menu-item
               {:onClick #(>evt [::seleciona-paciente (:id paciente)])}
               (:nome paciente)])
            pacientes))]))

(defn view []
  [shell/default
   [list-component]])

(defn-traced check-paciente
  [app-state [event paciente-id]]
  (let [patients (get-in app-state [:domain :patients])
        checks (get-in app-state [:ui :checkboxed-patients])]
    (as-> app-state $
      ;; Arruma a estrutura de checkboxes caso tenha sido adicionado ou
      ;; retirado um paciente.
      (if (= (count patients) (count checks))
        $
        (assoc-in $ [:ui :checkboxed-patients] (util/repeat-as patients false)))
      (update-in $ [:ui :checkboxed-patients paciente-id] not))))
(re-frame/reg-event-db ::check-paciente check-paciente)

(defn selecionando-component []
  (let [pacientes (<sub [::checkboxed-patients])]
    [:> material-menu-list
     (if (empty? pacientes)
       [:> material-menu-item "Nenhum paciente cadastrado ainda."]
       (map (fn [{:keys [id nome checked?]}]
              ^{:key nome}
              [:> material-menu-item
               {:onClick #(>evt [::check-paciente id])}
               [:> material-checkbox
                {:checked checked?
                 :tabIndex -1}]
               nome])
            pacientes))]))

(defn-traced delete-patients
  [app-state]
  (let [pats (get-in app-state [:domain :patients])
        checks (get-in app-state [:ui :checkboxed-patients])
        patients (map (fn [p c] (assoc p :checked? c)) pats checks)
        checked-patients (filter :checked? patients)
        confirm-text (case (count checked-patients)
                       0 "Nenhum paciente selecionado."
                       1 "Tem certeza que quer excluir esse paciente?"
                       "Tem certeza que quer excluir os seguintes pacientes?")
        names (reduce str (map #(str "\n- " %) (map :nome checked-patients)))
        ids (map :id checked-patients)]
    (if (not (js/confirm (str confirm-text names)))
      app-state
      (-> (reduce #(assoc-in %1 [:domain :patients %2] {:delete? true}) app-state ids)
          (assoc-in [:ui :state] "pacientes")
          (assoc-in [:ui :actions-menu :opened?] false)
          (update-in [:ui] dissoc :checkboxed-patients)))))
(re-frame/reg-event-db ::delete-patients delete-patients)

(def selecting-actions
  [{:name "Ok" :event :ok}
   {:name "Excluir" :event ::delete-patients}])

;; - Uma outra possibilidade é usar só uma view, mas criar outros reg-subs
;; para as actions e para o estado dos checkbox, isso iria descentralizar
;; a tomada de decisão em relação a sobre quais opções mostrar na lista
;; de ações.
;; - Talvez faça mais sentido mandar os dois casos pra mesma view e fazer
;; novas reg-subs internamente.
(defn selecting-view []
  [shell/default
   [selecionando-component]])
