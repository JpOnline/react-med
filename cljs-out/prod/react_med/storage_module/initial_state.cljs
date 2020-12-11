(ns react-med.storage-module.initial-state)

(def domain-initial-state
    {:domain
     {:patients
      {0 {:id 0
          :nome "Exemplo de Paciente"
          :nascimento "1991-12-06"
          :sexo "Masculino"
          :estatura 183.5
          :avaliacoes {0 {:id 0
                          :data "2021-02-01"
                          :peso 83.5
                          :resistencia 649
                          :reatancia 80
                          :circunferencia-braco 28
                          :circunferencia-cintura 90
                          :circunferencia-panturrilha 31
                          :atividade-fisica "Ativo"}}}}} })

(def ui-initial-state
  {:ui {:actions-menu {:opened? true}
        :drawer-menu {:opened? false}
        :state "pacientes"}})
