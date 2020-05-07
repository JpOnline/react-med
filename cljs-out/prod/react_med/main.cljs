(ns ^:figwheel-hooks react-med.main
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [goog.dom :as gdom]
    [re-frame.core :as re-frame]
    [react-med.orientation :as orientation]
    [react-med.pwa-install-component :as pwa-install]
    [react-med.routes :as routes]
    [react-med.storage-module.components :as storage-components]
    [react-med.storage-module.local-storage :as local-storage]
    [reagent.core :as reagent]
    ))

(defn mount-app-element []
  (when-let [el (gdom/getElement "app")]
    (reagent/render-component [:<>
                               [routes/selected-view]
                               ;; Save what's in app-state's :domain to the
                               ;; local-storage and firebase every time it's
                               ;; changed.
                               [storage-components/save-element]
                               ;; Set if the display is on landscape or portrait
                               ;; [orientation/set-landscape-or-portrait]
                               ] el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(defonce startup
  (do
    (.addEventListener js/window "load" #(some-> js/navigator
                                                 .-serviceWorker
                                                 (.register "/sw.js")))

    (pwa-install/add-before-install-prompt-event-listener)

    (re-frame/clear-subscription-cache!)

    (re-frame/dispatch-sync [::local-storage/load-domain-from-local-storage])
    ;; ;; Uncomment this to avoid the Local Storage and Firebase and comment the
    ;; ;; line above.
    ;; (re-frame/dispatch-sync [::initialize-app-state (merge domain-initial-state
    ;;                                                        ui-initial-state)])

    (mount-app-element)))

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(defn reset-state!
  "Used to set tests initial state."
  [state]
  (re-frame/dispatch-sync [::initialize-app-state
                           (js->clj state :keywordize-keys true)]))

(re-frame/reg-event-db ::initialize-app-state
  (fn-traced [_ [event application-state]]
             application-state))

(comment
  ;; Reset app-state
  (react-med.main/reset-state! {:domain
                                {:patients
                                 [{:id 0
                                   :nome "Charles"
                                   :nascimento "1999-10-01"
                                   :sexo "Masculino"
                                   :estatura 176.8
                                   :avaliacoes [{:id 0
                                                 :data "2020-01-10"
                                                 :peso 55.4
                                                 :circunferencia-cintura 73
                                                 :circunferencia-braco 28.2
                                                 :circunferencia-perna 35.2
                                                 :estatura 176.8
                                                 :resistencia 678
                                                 :reatancia 54
                                                 :atividade-fisica "Não Ativo"}
                                                {:id 1
                                                 :data "2019-12-10"
                                                 :peso 55.4
                                                 :circunferencia-cintura 73
                                                 :circunferencia-braco 28.2
                                                 :circunferencia-perna 35.2
                                                 :estatura 176.8
                                                 :resistencia 628
                                                 :reatancia 74
                                                 :atividade-fisica "Não Ativo"}]}
                                  {:id 1
                                   :nome "Dani"
                                   :nascimento "2001-10-01"
                                   :sexo "Masculino"
                                   :estatura 166.8
                                   :avaliacoes [{:id 0
                                                 :data "2019-10-10"
                                                 :peso 45.4
                                                 :circunferencia-cintura 63
                                                 :circunferencia-braco 23.2
                                                 :circunferencia-perna 30.2
                                                 :estatura 166.8
                                                 :resistencia 598
                                                 :reatancia 59
                                                 :atividade-fisica "Ativo"}]}
                                  {:id 2
                                   :nome "Jp"
                                   :nascimento "1991-12-06"
                                   :sexo "Masculino"
                                   :estatura 183.5
                                   :avaliacoes [{:id 0
                                                 :data "2020-02-17"
                                                 :peso 83.5
                                                 :resistencia 471
                                                 :reatancia 49
                                                 :atividade-fisica "Ativo"}]}]}
                                :ui {:paciente-selecionado 0
                                     :avaliacao-selecionada 0
                                     :actions-menu {:opened? false}
                                     :drawer-menu {:opened? false}
                                     :state "relatorio"}})
  (react-med.main/reset-state! react-med.main/default-state)
  (react-med.main/reset-state! avaliacoes-test-state)

  (def deleted-test-state
    {:domain
     {:patients
      [{:id 0
        :nome "Charles"
        :nascimento "1999-10-01"
        :sexo "Masculino"
        :estatura 176.8}
       {}
       {:id 2
        :nome "Dani"
        :nascimento "2001-10-01"
        :sexo "Masculino"
        :estatura 166.8}]}
     :ui {:checkboxed-patients [false false true]
          :actions-menu {:opened? false}
          :drawer-menu {:opened? false}
          :state "selecionando-pacientes"}})

  (def checkboxed-test-state
    {:domain
     {:patients
      [{:id 0
        :nome "Charles"
        :nascimento "1999-10-01"
        :sexo "Masculino"
        :estatura 176.8}
       {:id 1
        :nome "Dani"
        :nascimento "2001-10-01"
        :sexo "Masculino"
        :estatura 166.8}]}
     :ui {:checkboxed-patients [false true]
          :actions-menu {:opened? false}
          :drawer-menu {:opened? false}
          :state "selecionando-pacientes"}})

  ;; TODO: delete
  (def test-state
    {:domain
     {:patients
      [{:id 0
        :nome "Novo Paciente"
        :nascimento "1900-01-01"}]}
     :ui {:paciente-selecionado 0
          :actions-menu {:opened? false}
          :drawer-menu {:opened? false}
          :state "info"}})

  (def avaliacoes-test-state
    {:domain
     {:patients
      [{:id 0
        :nome "Novo Paciente"
        :nascimento "1900-01-01"}]}
     :ui {:actions-menu {:opened? false}
          :drawer-menu {:opened? false}
          :state "info"}}
    )

  (def test-delete-avaliacao-state
    {:domain
     {:patients
      [{:id 0
        :nome "Charles"
        :nascimento "1999-10-01"
        :sexo "Masculino"
        :estatura 176.8
        :avaliacoes [{:id 0
                      :data "2020-01-10"
                      :peso 55.4
                      :circunferencia-cintura 73
                      :circunferencia-braco 28.2
                      :circunferencia-perna 35.2
                      :estatura 176.8
                      :resistencia 658
                      :reatancia 64
                      :atividade-fisica "Não Ativo"}
                     {}]}]}
     :ui {:paciente-selecionado 0
          :actions-menu {:opened? true}
          :drawer-menu {:opened? false}
          :state "avaliacoes"}})

  (def default-state
    {:domain
     {:patients
      [{:id 0
        :nome "Charles"
        :nascimento "1999-10-01"
        :sexo "Masculino"
        :estatura 176.8
        :avaliacoes [{:id 0
                      :data "2020-01-10"
                      :peso 55.4
                      :circunferencia-cintura 73
                      :circunferencia-braco 28.2
                      :circunferencia-perna 35.2
                      :estatura 176.8
                      :resistencia 658
                      :reatancia 64
                      :atividade-fisica "Não Ativo"}
                     {:id 1
                      :data "2019-12-10"
                      :peso 55.4
                      :circunferencia-cintura 73
                      :circunferencia-braco 28.2
                      :circunferencia-perna 35.2
                      :estatura 176.8
                      :resistencia 658
                      :reatancia 64
                      :atividade-fisica "Não Ativo"}]}
       {:id 1
        :nome "Dani"
        :nascimento "2001-10-01"
        :sexo "Masculino"
        :estatura 166.8
        :avaliacoes [{:id 0
                      :data "2019-10-10"
                      :peso 45.4
                      :circunferencia-cintura 63
                      :circunferencia-braco 23.2
                      :circunferencia-perna 30.2
                      :estatura 166.8
                      :resistencia 648
                      :reatancia 59
                      :atividade-fisica "Ativo"}]}
       {:id 2
        :nome "Jp"
        :nascimento "1991-12-06"
        :sexo "Masculino"
        :estatura 183.5
        :avaliacoes [{:id 0
                      :data "2020-02-17"
                      :peso 83.5
                      :resistencia 471
                      :reatancia 49
                      :atividade-fisica "Ativo"}]}]}
     :ui {:paciente-selecionado 0
          :actions-menu {:opened? true}
          :drawer-menu {:opened? false}
          :state "avaliacoes"}})

)
