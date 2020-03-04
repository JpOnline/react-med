(ns react-med.storage-module.initial-state)

(def domain-initial-state
    {:domain
     {:patients
      [{:id 0
        :nome "Paciente Exemplo"
        :nascimento "1991-12-06"
        :sexo "Masculino"
        :estatura 183.5
        :avaliacoes [{:id 0
                      :data "2020-02-17"
                      :peso 83.5
                      :resistencia 471
                      :reatancia 49
                      :atividade-fisica "Ativo"}]}]} })

(def ui-initial-state
  {:ui {:actions-menu {:opened? true}
        :drawer-menu {:opened? false}
        :state "pacientes"}})

