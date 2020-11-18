(ns react-med.routes
  (:require
    ;; [bidi.bidi :as bidi]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    ;; [pushy.core :as pushy]
    [re-frame.core :as re-frame]
    [react-med.screens.lista-avaliacoes :as lista-avaliacoes]
    [react-med.screens.lista-pacientes :as lista-pacientes]
    [react-med.screens.loading :as loading]
    [react-med.screens.login :as login]
    [react-med.screens.paciente-avaliacao :as paciente-avaliacao]
    [react-med.screens.paciente-relatorio.ellipses :as ellipses]
    [react-med.screens.paciente-relatorio.ellipses-config :as ellipses-config]
    [react-med.screens.paciente-relatorio.paciente-relatorio :as paciente-relatorio]
    [react-med.screens.paciente-relatorio.config :as relatorio-config]
    [react-med.screens.patient-info.core :as paciente-info]
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    ))

;; This is not being useful. Probably, somehow, I should derive the url from the
;; ui state and vice versa.

;; (def routes ["/" {""      :home
;;                   "about" :about
;;                   ;; true "any"
;;                   }])

;; (defn- parse-url [url]
;;   (bidi/match-route routes url))

;; (defn- dispatch-route [matched-route]
;;   (let [ui-state (:handler matched-route)]
;;     (re-frame/dispatch [::set-state ui-state])))

;; (def history
;;   (pushy/pushy dispatch-route parse-url))

;; (defn start! []
;;   (pushy/start! history))

;; (def url-for (partial bidi/path-for routes))

(defn-traced set-route
  [app-state [_ ui-route]]
  (assoc-in app-state [:ui :state] ui-route))
(re-frame/reg-event-db ::set-route set-route)

(declare state-machine)

(defn current->next-state
  [state-machine current-state transition]
  (get-in state-machine [current-state transition]))

(defn next-state-handler
  [db [event]]
  (if-let [new-state (current->next-state
                       state-machine
                       (get-in db [:ui :state])
                       event)]
    (assoc-in db [:ui :state] new-state)
    db))
(defn-traced next-state
  [db event]
  (next-state-handler db event))

(defn-traced backup-domain
  [app-state]
  (let [domain-snapshot (get app-state :domain)]
    (assoc-in app-state [:domain :backup] domain-snapshot)))
(re-frame/reg-event-db ::backup-domain backup-domain)

(defn-traced restore-domain
  [app-state]
  (if-let [old-domain (get-in app-state [:domain :backup])]
    (-> app-state
        (assoc :domain old-domain)
        (update-in [:domain] dissoc :backup))
    app-state))
(re-frame/reg-event-db ::restore-domain restore-domain)

(defn-traced discard-backup
  [app-state]
  (update-in app-state [:domain] dissoc :backup))
(re-frame/reg-event-db ::discard-backup discard-backup)

(defn next-state-then [events]
  (fn [{app-state :db} [event _]]
    {:db (next-state-handler app-state [event])
     :dispatch-n events}))

(re-frame/reg-event-fx :edit (next-state-then [[::backup-domain]
                                               [::shell/close-actions-menu]]))
(re-frame/reg-event-fx :cancel (next-state-then [[::restore-domain]
                                                 [::shell/close-actions-menu]]))
(re-frame/reg-event-fx :ok (next-state-then [[::discard-backup]
                                             [::shell/close-actions-menu]]))
(re-frame/reg-event-fx :back (next-state-then [[::restore-domain]]))

(re-frame/reg-sub
  ::state
  (fn [app-state] (get-in app-state [:ui :state])))

(def state-machine
  {nil {:init "info"}
   "pacientes" {}
   "selecionando-pacientes" {:ok "pacientes"
                             :cancel "pacientes"}
   "info" {:edit "edit-info"
           :back "pacientes"}
   "edit-info" {:ok "info"
                :back "info"
                :cancel "info"}
   "avaliacoes" {:back "pacientes"}
   "selecionando-avaliacoes" {:ok "avaliacoes"
                              :cancel "avaliacoes"}
   "coleta" {:back "avaliacoes"
             :edit "edit-coleta"}
   "edit-coleta" {:ok "coleta"
                  :back "coleta"
                  :cancel "coleta"}
   "relatorio" {:back "info"}
   "relatorio-config" {:back "info"}
   "ellipses" {:back "pacientes"}
   "ellipses-config" {:back "pacientes"}})

(defn title
  [[state selected-patient]]
  (let [patient-name (:nome selected-patient)
        preposição (if (= (:sexo selected-patient) "Feminino") " da " " do ")]
    (case state
      "pacientes" "Lista de Pacientes"
      "selecionando-pacientes" "Pacientes"
      "info" patient-name
      "edit-info" patient-name
      "avaliacoes" patient-name
      "selecionando-avaliacoes" patient-name
      "coleta" (str "Avaliação" preposição patient-name)
      "edit-coleta" (str "Avaliação" preposição patient-name)
      "relatorio" (str "Avaliação" preposição patient-name)
      "relatorio-config" "Escolha de Equações"
      "ellipses" "Gráfico RXc"
      "ellipses-config" "Gráfico RXc"
      "??")))
(re-frame/reg-sub
  ::title
  :<- [::state]
  :<- [::paciente-info/selected-patient]
  title)

(defn top-bar-icon
  [state]
  (case state
    "pacientes" ""
    "selecionando-pacientes" "X"
    "info" "<-"
    "edit-info" "X"
    "avaliacoes" "<-"
    "selecionando-avaliacoes" "X"
    "coleta" "<-"
    "edit-coleta" "X"
    "relatorio" "<-"
    "relatorio-config" "<-"
    "ellipses" "<-"
    "ellipses-config" "<-"
    ""))
(re-frame/reg-sub
  ::top-bar-icon
  :<- [::state]
  top-bar-icon)

(defn tab-title
  [screen]
  (case screen
    "pacientes" "Pacientes"
    "selecionando-pacientes" "Pacientes"
    "info" "Informações Pessoais"
    "edit-info" "Informações Pessoais"
    "avaliacoes" "Avaliações"
    "coleta" "Coleta"
    "edit-coleta" "Coleta"
    "relatorio" "Relatório"
    "relatorio-config" "Configuração"
    "ellipses" "Gráfico RXc"
    "ellipses-config" "Configuração"
    "???"))

(defn tabs
  [state]
  (condp #(%1 %2) state
    #{"info" "avaliacoes"} [{:label (tab-title "info")
                             :state "info"}
                            {:label (tab-title "avaliacoes")
                             :state "avaliacoes"}]
    #{"edit-info"} [{:label (tab-title "info")
                     :state "edit-info"}
                    {:label (tab-title "avaliacoes")
                     :state "avaliacoes"}]
    #{"selecionando-avaliacoes"} [{:label (tab-title "info")
                                   :state "info"}
                                  {:label (tab-title "avaliacoes")
                                   :state "selecionando-avaliacoes"}]
    #{"coleta"
      "relatorio"
      "relatorio-config"} [{:label (tab-title "coleta")
                            :state "coleta"}
                           {:label (tab-title "relatorio")
                            :state "relatorio"}
                           {:label (tab-title "relatorio-config")
                            :state "relatorio-config"}]
    #{"edit-coleta"} [{:label (tab-title "coleta")
                    :state "edit-coleta"}
                   {:label (tab-title "relatorio")
                    :state "relatorio"}
                   {:label (tab-title "relatorio-config")
                    :state "relatorio-config"}]
    #{"ellipses"
      "ellipses-config"} [{:label "Gráfico" :state "ellipses"}
                          {:label "Configuração" :state "ellipses-config"}]
    nil))
(re-frame/reg-sub
  ::tabs
  :<- [::state]
  tabs)

(defn side-menu
  [[state selected-patient selected-avaliacao]]
  (let [[_ month day] (when (:data selected-avaliacao) (re-find #"\d+-(\d+)-(\d+)" (:data selected-avaliacao)))
        model->menu (fn m->m [{:keys [s sub-menus extra-label]}]
                      {:label (str (tab-title s) extra-label)
                       :state s
                       :selected (= state s)
                       :sub-menus (map m->m sub-menus)})
        menu-model (condp #(%1 %2) state
                     #{"pacientes"} [#_ {:s "grupos"}
                                     {:s "pacientes"}
                                     {:s "ellipses"}]
                     #{"info"
                       "edit-info"
                       "avaliacoes"} [{:s "pacientes"
                                       :extra-label (when selected-patient
                                                      (str" ("(:nome selected-patient)")"))
                                       :sub-menus
                                       [{:s "info"}
                                        {:s "avaliacoes"}]}
                                      {:s "ellipses"}]
                     #{"coleta"
                       "edit-coleta"
                       "relatorio-config"
                       "relatorio"} [{:s "pacientes"
                                      :extra-label (when selected-patient
                                                     (str" ("(:nome selected-patient)")"))
                                      :sub-menus
                                      [{:s "info"}
                                       {:s "avaliacoes"
                                        :extra-label (when (and selected-avaliacao day month)
                                                       (str" ("day"/"month")"))
                                        :sub-menus
                                        [{:s "coleta"}
                                         {:s "relatorio"}
                                         {:s "relatorio-config"}]}]}
                                     {:s "ellipses"}]
                     #{"ellipses"
                       "ellipses-config"} [{:s "pacientes"}
                                           {:s "ellipses"
                                            :sub-menus [{:s "ellipses-config"}]}]
                     [#_{:s "grupos"} {:s "pacientes"}])]
    (map model->menu menu-model)))
(re-frame/reg-sub
  ::side-menu
  :<- [::state]
  :<- [::paciente-info/selected-patient]
  :<- [::paciente-avaliacao/selected-avaliacao]
  side-menu)

(defn actions
  [state]
  (case state
    "pacientes" lista-pacientes/list-actions
    "selecionando-pacientes" lista-pacientes/selecting-actions
    "info" [{:name "Exportar para Excel" :event :export-to-csv}
            {:name "Voltar" :event :back}
            {:name "Editar" :event :edit}]
    "edit-info" [{:name "Pronto" :event :ok}
                 {:name "Cancelar" :event :cancel}]
    "avaliacoes" [{:name "Exportar para Excel" :event :export-to-csv}
                  {:name "Voltar" :event :back}
                  {:name "Selecionar" :event ::lista-avaliacoes/show-avaliacoes-checkbox}
                  {:name "Nova Avaliação" :event ::lista-avaliacoes/nova-avaliacao}]
    "selecionando-avaliacoes" [{:name "Cancelar" :event :ok}
                               {:name "Excluir" :event ::lista-avaliacoes/delete-avaliacoes}]
    "coleta" [{:name "Exportar para Excel" :event :export-to-csv}
              {:name "Voltar" :event :back}
              {:name "Editar" :event :edit}]
    "edit-coleta" [{:name "Pronto" :event :ok}
                   {:name "Cancelar" :event :cancel}]
    "relatorio" [{:name "Versão em PDF" :event ::paciente-relatorio/imprimir-relatorio}
                 {:name "Voltar" :event :back}]
    "relatorio-config" [{:name "Voltar" :event :back}]
    "ellipses" [{:name "Voltar" :event :back}]
    "ellipses-config" [{:name "Voltar" :event :back}]
    [{:name "Sem ações pra essa tela"}]))
(re-frame/reg-sub
  ::actions
  :<- [::state]
  actions)

(defn selected-view []
  (case (<sub [::state])
    "pacientes" [lista-pacientes/view]
    "selecionando-pacientes" [lista-pacientes/selecting-view]
    "info" [paciente-info/patient-info]
    "edit-info" [paciente-info/editing-patient-info]
    "avaliacoes" [lista-avaliacoes/view]
    "selecionando-avaliacoes" [lista-avaliacoes/selecting-view]
    "coleta" [paciente-avaliacao/detail-view]
    "edit-coleta" [paciente-avaliacao/editing-view]
    "relatorio" [paciente-relatorio/view]
    "relatorio-config" [relatorio-config/view]
    "ellipses" [ellipses/view]
    "ellipses-config" [ellipses-config/view]
    "loading" [loading/view]
    "login" [login/view]
    [paciente-info/patient-info]))
