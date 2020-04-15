(ns react-med.screens.paciente-relatorio.config
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [menu-item :as material-menu-item]
    [re-frame.core :as re-frame]
    [react-med.screens.paciente-relatorio.bioimpedance :as bioimpedance]
    [react-med.screens.paciente-relatorio.paciente-relatorio :as paciente-relatorio]
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    [select :as material-select]
    ))

(defn-traced select-equation
  [app-state [event equation-to-update chosen-equation]]
  (let [paciente-id (get-in app-state [:ui :paciente-selecionado])
        avaliacao-id (get-in app-state [:ui :avaliacao-selecionada])]
    (assoc-in app-state [:domain :patients paciente-id :avaliacoes avaliacao-id
                         :equacoes-escolhidas equation-to-update] chosen-equation)))
(re-frame/reg-event-db ::select-equation select-equation)

(defn equacao-massa-livre-de-gordura
  [{{:keys [massa-livre-de-gordura]} :equacoes-escolhidas :as avaliacao-info}]
  (when (util/valid? ::bioimpedance/avaliacao-info avaliacao-info)
    (or massa-livre-de-gordura (bioimpedance/default-massa-livre-de-gordura avaliacao-info))))
(re-frame/reg-sub
  ::equacao-massa-livre-de-gordura
  :<- [::paciente-relatorio/avaliacao-info]
  equacao-massa-livre-de-gordura)

(defn equacao-agua-corporal-total
  [{{:keys [agua-corporal-total]} :equacoes-escolhidas :as avaliacao-info}]
  (when (util/valid? ::bioimpedance/avaliacao-info avaliacao-info)
    (or agua-corporal-total (bioimpedance/default-agua-corporal avaliacao-info))))
(re-frame/reg-sub
  ::equacao-agua-corporal-total
  :<- [::paciente-relatorio/avaliacao-info]
  equacao-agua-corporal-total)

(defn selecao-massa-livre-de-gordura []
  [:> material-select
   {:value (<sub [::equacao-massa-livre-de-gordura])
    :onChange #(>evt [::select-equation :massa-livre-de-gordura (-> % .-target .-value)])}
   [:> material-menu-item {:value "eq1-high-pa-fitness-and-athletestes"} "Alta aptidão física e atletas"]
   [:> material-menu-item {:value "eq2-male-and-female-children-from-8-15-years"} "Crianças e adolescentes entre 8 e 17 anos"]
   [:> material-menu-item {:value "eq3-females-18-30-years"} "Mulheres entre 18 e 29 anos"]
   [:> material-menu-item {:value "eq7-males-18-30-years"} "Homens entre 18 e 29 anos"]
   [:> material-menu-item {:value "eq5-females-30-50-years"} "Mulheres entre 30 e 49 anos"]
   [:> material-menu-item {:value "eq8-males-30-50-years"} "Homens entre 30 e 49 anos"]
   [:> material-menu-item {:value "eq6-females-50-70-years"} "Mulheres com mais de 50 anos"]
   [:> material-menu-item {:value "eq9-males-50-70-years"} "Homens com mais de 50 anos"]
   [:> material-menu-item {:value "eq10-men"} "Homens"]
   [:> material-menu-item {:value "eq11-women"} "Mulheres"]])

(defn selecao-agua-corporal []
  [:> material-select
   {:value (<sub [::equacao-agua-corporal-total])
    :onChange #(>evt [::select-equation :agua-corporal-total (-> % .-target .-value)])}
   [:> material-menu-item {:value "eq13-tbw-male-and-female-athletes"} "Atleta"]
   [:> material-menu-item {:value "eq16-tbw-men"} "Homens"]
   [:> material-menu-item {:value "eq17-tbw-women"} "Mulheres"]])

(defn component []
  (let [[massa-livre-de-gordura gordura-corporal-absoluta
        gordura-corporal-relativa índice-de-massa-muscular
        água-corporal-total água-extracelular água-intracelular]
        (<sub [::paciente-relatorio/dados-para-relatorio])]
    [:div
     {:style {:padding "0 35px"
              :display "flex"
              :flexDirection "column"
              :justifyContent "center"}}
     [paciente-relatorio/relatorio-style]
     [paciente-relatorio/measurement-no-print-view
      massa-livre-de-gordura]
     [paciente-relatorio/measurement-no-print-view
      gordura-corporal-absoluta]
     [paciente-relatorio/measurement-no-print-view
      gordura-corporal-relativa]
     [selecao-massa-livre-de-gordura]
     [:div {:style {:height "50px"}}]
     [paciente-relatorio/measurement-no-print-view
      água-extracelular]
     [paciente-relatorio/measurement-no-print-view
      água-corporal-total]
     [paciente-relatorio/measurement-no-print-view
      água-intracelular]
     [selecao-agua-corporal]]))

(defn view []
  [shell/default
   [component]])
