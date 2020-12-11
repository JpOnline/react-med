(ns react-med.screens.paciente-relatorio.bioimpedance
  (:require
    [clojure.spec.alpha :as spec]
    [react-med.util :as util]

    [cljs.test :refer-macros [deftest testing is]]
    ))

(defn imc [{:keys [peso estatura]}]
  (as-> (* estatura estatura 0.0001) $
    (/ peso $)
    (.toFixed $ 1)
    (js/parseFloat $)))

(defn- eq1-high-pa-fitness-and-athletestes
  "(0.734*(estatura^2/resistencia))+(0.116*peso)+(0.096*reatancia)+(0.878*sexo)-4.03
  Ref: Lukaski e Bolonchuk"
  [{:keys [estatura resistencia peso reatancia sexo]}]
  (let [male-portion (if (= sexo "Masculino") 0.878 0)]
    (+ (* 0.734 (/ (* estatura estatura) resistencia)) (* 0.116 peso) (* 0.096 reatancia) male-portion -4.03)))

(defn- eq2-male-and-female-children-from-8-15-years
  "(0.62*(estatura^2/resistencia))+(0.21*peso)+(0.1*reatancia)+4.2
  Ref: Lohman"
  [{:keys [estatura resistencia peso reatancia]}]
  (+ (* 0.62 (/ (* estatura estatura) resistencia)) (* 0.21 peso) (* 0.1 reatancia) 4.2))

(defn- eq3-females-18-30-years
  "(0.476*((estatura^2)/resistencia))+(0.295*peso)+5.49
  Ref: Lohman"
  [{:keys [estatura resistencia peso]}]
  (+ (* 0.476 (/ (* estatura estatura) resistencia)) (* 0.295 peso) 5.49))

;; ;; Deprecated
;; (defn- eq4-females-active-18-35-years
;;   "(0.666*((estatura^2)/resistencia))+(0.164*peso)+(0.217*reatancia)-8.78
;;   Ref: Lohman"
;;   [{:keys [estatura resistencia peso reatancia]}]
;;   (+ (* 0.666 (/ (* estatura estatura) resistencia)) (* 0.164 peso) (* 0.217 reatancia) -8.78))

(defn- eq5-females-30-50-years
  "(0.536*((estatura^2)/resistencia))+(0.155*peso)+(0.075*reatancia)+2.87
  Ref: Lohman"
  [{:keys [estatura resistencia peso reatancia]}]
  (+ (* 0.536 (/ (* estatura estatura) resistencia)) (* 0.155 peso) (* 0.075 reatancia) 2.87))

(defn- eq6-females-50-70-years
  "(0.47*((estatura^2)/resistencia))+(0.17*peso)+(0.03*reatancia)+5.7
  Ref: Lohman"
  [{:keys [estatura resistencia peso reatancia]}]
  (+ (* 0.47 (/ (* estatura estatura) resistencia)) (* 0.17 peso) (* 0.03 reatancia) 5.7))

(defn- eq7-males-18-30-years
  "(0.485*((estatura^2)/resistencia))+(0.338*peso)+5.32
  Ref: Lohman"
  [{:keys [estatura resistencia peso]}]
  (let [estatura-resistencia-portion (* 0.485 (/ (* estatura estatura) resistencia))
        peso-portion (* 0.338 peso)
        constant 5.32]
    (+ estatura-resistencia-portion peso-portion constant)))

(defn- eq8-males-30-50-years
  "(0.549*((estatura^2)/resistencia))+(0.163*peso)+(0.092*reatancia)+4.51
  Ref: Lohman"
  [{:keys [estatura resistencia peso reatancia]}]
  (let [estatura-resistencia-portion (* 0.549 (/ (* estatura estatura) resistencia))
        peso-portion (* 0.163 peso)
        reatancia-portion (* 0.092 reatancia)
        constant 4.51]
    (+ estatura-resistencia-portion peso-portion reatancia-portion constant)))

(defn- eq9-males-50-70-years
  "(0.6*((estatura^2)/resistencia))+(0.186*peso)+(0.226*reatancia)-10.9451
  Ref: Lohman"
  [{:keys [estatura resistencia peso reatancia]}]
  (let [estatura-resistencia-portion (* 0.6 (/ (* estatura estatura) resistencia))
        peso-portion (* 0.186 peso)
        reatancia-portion (* 0.226 reatancia)
        constant -10.9451]
    (+ estatura-resistencia-portion peso-portion reatancia-portion constant)))

(defn- eq10-men
  "-10.68+(0.65*((estatura^2)/resistencia))+(0.26*peso)+(0.02*resistencia)
  Ref: Sun et al."
  [{:keys [estatura resistencia peso]}]
  (let [estatura-resistencia-portion (* 0.65 (/ (* estatura estatura) resistencia))
        peso-portion (* 0.26 peso)
        resistencia-portion (* 0.02 resistencia)
        constant -10.68]
    (+ estatura-resistencia-portion peso-portion resistencia-portion constant)))

(defn- eq11-women
  "-9.53+(0.69*((estatura^2)/resistencia))+(0.18*peso)+(0.02*resistencia)
  Ref: Sun et al."
  [{:keys [estatura resistencia peso]}]
  (let [estatura-resistencia-portion (* 0.69 (/ (* estatura estatura) resistencia))
        peso-portion (* 0.18 peso)
        resistencia-portion (* 0.02 resistencia)
        constant -9.53]
    (+ estatura-resistencia-portion peso-portion resistencia-portion constant)))

;; ;; Deprecated
;; (defn- eq12-male-and-female-athletes
;;   "-4.104+(0.518*((estatura^2)/resistencia))+(0.13*reatancia)+(0.231*peso)+(4.23*sexo)
;;   Ref: Kyle et al."
;;   [{:keys [estatura resistencia peso reatancia sexo]}]
;;   (let [estatura-resistencia-portion (* 0.518 (/ (* estatura estatura) resistencia))
;;         peso-portion (* 0.231 peso)
;;         reatancia-portion (* 0.13 reatancia)
;;         sexo-portion (if (= sexo "Masculino") 4.23 0)
;;         constant -4.104]
;;     (+ estatura-resistencia-portion peso-portion reatancia-portion sexo-portion constant)))

(spec/def ::date-string (spec/and string? #(re-matches #"\d{4}-\d{2}-\d{2}" %)))

(spec/def ::sexo #{"Masculino" "Feminino"})
(spec/def ::nascimento ::date-string)
(spec/def ::data ::date-string)
(spec/def ::atividade-fisica #{"Ativo" "Não Ativo" "Atleta"})
(spec/def ::avaliacao-info (spec/keys :req-un [::sexo ::idade ::atividade-fisica]))

(defn default-massa-livre-de-gordura
  "[sex age activity]
   [_ 8-17 _] 2
   [_ _ ath] 1
   [f 18-29 _] 3
   [f 30-49 _] 5
   [f 50-70 _] 6
   [m 18-29 _] 7
   [m 30-49 _] 8
   [m 50-70 _] 9
   [m _ _] 10
   [f _ _] 11"
  [{:keys [sexo nascimento data atividade-fisica] :as avaliacao-info}]
  {:pre [(util/validate
           ::avaliacao-info
           avaliacao-info
           "Informações de avaliação inválidas.")]}
  (let [idade (-> (js/Date. data)
                (- (js/Date. nascimento))
                (/ 1000 60 60 24 365.25)
                (js/Math.floor))]
    (cond
      (<= 8 idade 17) "eq2-male-and-female-children-from-8-15-years"
      (= atividade-fisica "Atleta") "eq1-high-pa-fitness-and-athletestes"
      (and (= sexo "Feminino")
           (<= 18 idade 29)) "eq3-females-18-30-years"
      (and (= sexo "Feminino")
           (<= 30 idade 49)) "eq5-females-30-50-years"
      (and (= sexo "Feminino")
           (<= 50 idade 69)) "eq6-females-50-70-years"
      (and (= sexo "Masculino")
           (<= 18 idade 29)) "eq7-males-18-30-years"
      (and (= sexo "Masculino")
           (<= 30 idade 49)) "eq8-males-30-50-years"
      (and (= sexo "Masculino")
           (<= 50 idade 69)) "eq9-males-50-70-years"
      (= sexo "Masculino") "eq10-men"
      (= sexo "Feminino") "eq11-women")))

(defn massa-livre-de-gordura [equacao-para-usar avaliacao-info]
  {:pre [(util/validate
           ::avaliacao-info
           avaliacao-info
           "Informações de avaliação inválidas na equação Massa Livre de Gordura.")]
   :post [(util/validate pos? % "funcao massa-livre-de-gordura nao retornou um número positivo.")]}
  (case equacao-para-usar
    "eq1-high-pa-fitness-and-athletestes" (eq1-high-pa-fitness-and-athletestes avaliacao-info)
    "eq2-male-and-female-children-from-8-15-years" (eq2-male-and-female-children-from-8-15-years avaliacao-info)
    "eq3-females-18-30-years" (eq3-females-18-30-years avaliacao-info)
    "eq7-males-18-30-years" (eq7-males-18-30-years avaliacao-info)
    "eq5-females-30-50-years" (eq5-females-30-50-years avaliacao-info)
    "eq8-males-30-50-years" (eq8-males-30-50-years avaliacao-info)
    "eq6-females-50-70-years" (eq6-females-50-70-years avaliacao-info)
    "eq9-males-50-70-years" (eq9-males-50-70-years avaliacao-info)
    "eq10-men" (eq10-men avaliacao-info)
    "eq11-women" (eq11-women avaliacao-info)))

;; Equação Água corporal total
(defn eq13-tbw-male-and-female-athletes
  "0.286+(0.195*((estatura^2)/resistencia))+(0.385*peso)+(5.086*sexo)
  Ref: Matias et al."
  [{:keys [estatura resistencia peso sexo]}]
  (let [constant 0.286
        estatura-resistencia-portion (* 0.195 (/ (* estatura estatura) resistencia))
        peso-portion (* 0.385 peso)
        sexo-portion (if (= sexo "Masculino") 5.086 0)]
    (+ constant estatura-resistencia-portion peso-portion sexo-portion)))

;; ;; Deprecated
;; (defn eq14-tbw-male-and-female
;;   "(0.5561*((estatura^2)/resistencia))+(0.0955*peso)+1.726
;;   Ref: Kushner and Schoeller"
;;   [{:keys [estatura resistencia peso]}]
;;   (let [estatura-resistencia-portion (* 0.5561 (/ (* estatura estatura) resistencia))
;;         peso-portion (* 0.0955 peso)
;;         constant 1.726]
;;     (+ constant estatura-resistencia-portion peso-portion)))

;; ;; Deprecated
;; (defn eq15-tbw-male-and-female
;;   "(0.446*((estatura^2)/resistencia))+(0.126*peso)+5.82
;;   Ref: Hannan et al."
;;   [{:keys [estatura resistencia peso]}]
;;   (let [estatura-resistencia-portion (* 0.446 (/ (* estatura estatura) resistencia))
;;         peso-portion (* 0.126 peso)
;;         constant 5.82]
;;     (+ constant estatura-resistencia-portion peso-portion)))

(defn eq16-tbw-men
  "(0.45*((estatura^2)/resistencia))+(0.18*peso)+1.2
  Ref: Sun et al."
  [{:keys [estatura resistencia peso]}]
  (let [estatura-resistencia-portion (* 0.45 (/ (* estatura estatura) resistencia))
        peso-portion (* 0.18 peso)
        constant 1.2]
    (+ constant estatura-resistencia-portion peso-portion)))

(defn eq17-tbw-women
  "(0.45*((estatura^2)/resistencia))+(0.11*peso)+3.75
  Ref: Sun et al."
  [{:keys [estatura resistencia peso]}]
  (let [estatura-resistencia-portion (* 0.45 (/ (* estatura estatura) resistencia))
        peso-portion (* 0.11 peso)
        constant 3.75]
    (+ constant estatura-resistencia-portion peso-portion)))

(defn default-agua-corporal
  [{:keys [sexo atividade-fisica] :as avaliacao-info}]
  {:pre [(util/validate
           ::avaliacao-info
           avaliacao-info
           "Informações de avaliação inválidas.")]}
  (cond
    (= atividade-fisica "Atleta") "eq13-tbw-male-and-female-athletes"
    (= sexo "Masculino")          "eq16-tbw-men"
    (= sexo "Feminino")           "eq17-tbw-women"))

(defn agua-corporal [equacao-para-usar avaliacao-info]
  {:pre [(util/validate
           ::avaliacao-info
           avaliacao-info
           "Informações de avaliação inválidas.")]
   :post [(util/validate pos? % "funcao agua-corporal nao retornou um número positivo.")]}
  (case equacao-para-usar
    "eq13-tbw-male-and-female-athletes" (eq13-tbw-male-and-female-athletes avaliacao-info)
    "eq16-tbw-men" (eq16-tbw-men avaliacao-info)
    "eq17-tbw-women" (eq17-tbw-women avaliacao-info)))

;; Equação Água Extracelular

;; ;; Deprecated
;; (defn eq18-ecw-male-and-female
;;   "(0.123*((peso^2)/resistencia))+(0.0119*((peso^2)/reatancia))+6.15
;;   Ref: Sun et al."
;;   [{:keys [resistencia peso reatancia]}]
;;   (let [peso-resistencia-portion (* 0.123 (/ (* peso peso) resistencia))
;;         peso-reatancia-portion (* 0.0119 (/ (* peso peso) reatancia))
;;         constant 6.15]
;;     (+ peso-resistencia-portion peso-reatancia-portion constant)))

(defn eq20-ecw-male-and-female
  "0.2*((estatura^2)/resistencia)+0.08*peso-0.005/reatancia+(1.86*(1-sexo))-3.32
  Ref: Sergi et al."
  [{:keys [estatura resistencia peso reatancia sexo]}]
  (let [constant -3.32
        sexo-portion (if (= sexo "Masculino") 0 1.86)
        estatura-resistencia-portion (* 0.2 (/ (* estatura estatura) resistencia))
        reatancia-portion (/ -0.005 reatancia)
        peso-portion (* 0.08 peso)]
    (+ constant estatura-resistencia-portion reatancia-portion peso-portion sexo-portion)))

(defn agua-extracelular
  [avaliacao-info]
  {:pre [(util/validate
           ::avaliacao-info
           avaliacao-info
           "Informações de avaliação inválidas.")]
   :post [(util/validate pos? % "Funcao agua-extracelular não retornou um número positivo.")]}
  (eq20-ecw-male-and-female avaliacao-info))

;; ;; eq13-eq20 ou eq16-eq20?
;; (defn eq19
;;   "TBW-ECW"
;;   [avaliacao-info]
;;   (- (eq13-tbw-male-and-female-athletes avaliacao-info)
;;      (eq20-ecw-male-and-female avaliacao-info)))

;; ;; eq13-eq20 ou eq16-eq20?
;; (defn eq21
;;   "TBW-ECW"
;;   [avaliacao-info]
;;   (- (eq13-tbw-male-and-female-athletes avaliacao-info)
;;      (eq20-ecw-male-and-female avaliacao-info)))

;; ;; Equação Água Intracelular
;; (defn agua-intracelular
;;   [avaliacao-info]
;;   (- (agua-corporal avaliacao-info)
;;      (agua-extracelular avaliacao-info)))

;; Equação Massa Musculoesquelética
(defn eq22-smm-adult-men-and-women
  "(0.401*((estatura^2)/resistencia))+(3.825*sexo)-(0.071*idade)+5.102
  Ref: Janssen et al."
  [{:keys [estatura resistencia sexo idade]}]
  (let [estatura-resistencia-portion (* 0.401 (/ (* estatura estatura) resistencia))
        sexo-portion (if (= sexo "Masculino") 3.825 0)
        idade-portion (* -0.071 idade)
        constant 5.102]
    (+ estatura-resistencia-portion sexo-portion idade-portion constant)))

(defn massa-musculoesqueletica
  [avaliacao-info]
  {:pre [(util/validate
           ::avaliacao-info
           avaliacao-info
           "Informações de avaliação inválidas.")]
   :post [(util/validate pos? % "Função massa-musculoesqueletica não retornou um número positivo.")]}
  (eq22-smm-adult-men-and-women avaliacao-info))

(defn impedancia
  [{:keys [resistencia reatancia]}]
  (Math/sqrt (+ (* resistencia resistencia) (* reatancia reatancia))))

(defn angulo
  [{:keys [resistencia reatancia] :as avaliacao-info}]
  (* (Math/atan (/ reatancia resistencia)) (/ 180 Math/PI)))

(defn area-circunferencia
  ([circunferencia]
   (let [circ (/ circunferencia 100)]
     (/ (* circ circ) (* 4 3.14))))
  ([circunferencia precision] (js/parseFloat (.toFixed (area-circunferencia circunferencia) precision))))

(defn area-med
  ([avaliacao-info precisao] (js/parseFloat (.toFixed (area-med avaliacao-info) precisao)))
  ([avaliacao-info]
   (let [a #(area-circunferencia (% avaliacao-info))]
     (+ (* 0.45 (a :circunferencia-braco)) (* 0.1 (a :circunferencia-cintura)) (* 0.45 (a :circunferencia-panturrilha))))))

(defn rsp
  ([avaliacao-info precisao] (js/parseFloat (.toFixed (rsp avaliacao-info) precisao)))
  ([avaliacao-info]
   (* (:resistencia avaliacao-info) 100 (/ (area-med avaliacao-info) (* 1.1 (/ (:estatura avaliacao-info) 100))))))

(defn xcsp
  ([avaliacao-info precisao] (js/parseFloat (.toFixed (xcsp avaliacao-info) precisao)))
  ([avaliacao-info]
   ;; =(M2*R2)/((H2/100)*1.1)*100
   #_(/ (* (:reatancia avaliacao-info) (area-med avaliacao-info)) (/ ))
   (* 100 (/ (* (:reatancia avaliacao-info) (area-med avaliacao-info)) (* 1.1 (/ (:estatura avaliacao-info) 100))))))

(defn t [avaliacao-info]
  (js/console.log "eq1-high-pa-fitness-and-athletestes" (eq1-high-pa-fitness-and-athletestes avaliacao-info))
  (js/console.log "eq2-male-and-female-children-from-8-15-years" (eq2-male-and-female-children-from-8-15-years avaliacao-info))
  (js/console.log "eq3-females-18-30-years" (eq3-females-18-30-years avaliacao-info))
  ;; (js/console.log "eq4-females-active-18-35-years" (eq4-females-active-18-35-years avaliacao-info))
  (js/console.log "eq5-females-30-50-years" (eq5-females-30-50-years avaliacao-info))
  (js/console.log "eq6-females-50-70-years" (eq6-females-50-70-years avaliacao-info))
  (js/console.log "eq7-males-18-30-years" (eq7-males-18-30-years avaliacao-info))
  (js/console.log "eq8-males-30-50-years" (eq8-males-30-50-years avaliacao-info))
  (js/console.log "eq9-males-50-70-years" (eq9-males-50-70-years avaliacao-info))
  (js/console.log "eq10-men" (eq10-men avaliacao-info))
  (js/console.log "eq11-women" (eq11-women avaliacao-info))
  ;; (js/console.log "eq12-male-and-female-athletes" (eq12-male-and-female-athletes avaliacao-info))
  (js/console.log "eq13-tbw-male-and-female-athletes" (eq13-tbw-male-and-female-athletes avaliacao-info))
  ;; (js/console.log "eq14-tbw-male-and-female" (eq14-tbw-male-and-female avaliacao-info))
  ;; (js/console.log "eq15-tbw-male-and-female" (eq15-tbw-male-and-female avaliacao-info))
  (js/console.log "eq16-tbw-men" (eq16-tbw-men avaliacao-info))
  (js/console.log "eq17-tbw-women" (eq17-tbw-women avaliacao-info))
  ;; (js/console.log "eq18-ecw-male-and-female" (eq18-ecw-male-and-female avaliacao-info))
  ;; (js/console.log "eq19" (eq19 avaliacao-info))
  (js/console.log "eq20-ecw-male-and-female" (eq20-ecw-male-and-female avaliacao-info))
  ;; (js/console.log "eq21" (eq21 avaliacao-info))
  (js/console.log "eq22-smm-adult-men-and-women" (eq22-smm-adult-men-and-women avaliacao-info))
  )

;; References
;; Lukaski HC, Bolonchuk WW (eds). Theory and Validation of the Tetrapolar Bioelectrical Impedance Method to Assess Human Body Composition. Institute of Physical Science and Medicine: London, 1987.
;; Lohman TG. Human Body Composition. Human Kinetics: Champaign, IL, 1996.
;; Sun SS, Chumlea WC, Heymsfield SB, et al. Development of bioelectrical impedance prediction equations from body composition with the use of a multicomponent model for use in epidemiologic surveys. Am J Clin Nutr 2003; 77:331–340.
;; Kyle UG, Bosaeus I, De Lorenzo AD, et al. Bioelectrical impedance analysispart II: utilization in clinical practice. Clin Nutr 2004; 23:1430–1453.
;; Matias CN, Santos DA, Judice PB et al. Estimation of total body water and extracellular water with bioimpedance in athletes: A need for athlete-specific prediction models. Clin Nutr. 2016;35(2):468-74.
;; Kushner RF, Schoeller DA. Estimation of total body water by bioelectrical impedance analysis. Am J Clin Nutr 1986; 44:417–424.
;; Hannan WJ, Cowen SJ, Fearon KC, et al. Evaluation of multifrequency bio-impedance analysis for the assessment of extracellular and total body water in surgical patients. Clin ci 1994; 86:479–485.
;; Sergi G, Bussolotto M, Perini P, et al. Accuracy of bioelectrical bioimpedance analysis for the assessment of extracellular space in healthy subjects and in fluid retention states. Ann Nutr Metab 1994; 38:158–165.
;; Janssen I, et al. Estimation of skeletal muscle mass by bioelectrical impedance analysis. J Appl Physiol 89: 465–471, 2000.

;; Acronyms
;; TBW = Total Body Water
;; ECW = Extracellular Body Water
;; PA = Physical Aptitude (e.g. active, athlete)
;; SMM = Skeletal Muscle Mass

(deftest bioimpedance-tests
  (let [paciente-exemplo-1 {:nome "paciente-exemplo-1":peso 65.6 :estatura 165.6 :circunferencia-cintura 75.5 :circunferencia-braco 27.0 :circunferencia-panturrilha 36.4 :resistencia 639 :reatancia 50}
        paciente-exemplo-2 {:nome "paciente-exemplo-2" :peso 54.1 :estatura 166.1 :circunferencia-cintura 85.5 :circunferencia-braco 23.6 :circunferencia-panturrilha 33.3 :resistencia 685 :reatancia 68}
        paciente-exemplo-3 {:nome "paciente-exemplo-3" :peso 63.2 :estatura 162.0 :circunferencia-cintura 68.3 :circunferencia-braco 25.3 :circunferencia-panturrilha 37.6 :resistencia 594 :reatancia 52}
        paciente-exemplo-4 {:nome "paciente-exemplo-4" :peso 57.3 :estatura 162.4 :circunferencia-cintura 71.0 :circunferencia-braco 24.5 :circunferencia-panturrilha 32.8 :resistencia 726 :reatancia 52}
        paciente-exemplo-5 {:nome "paciente-exemplo-5" :peso 53.6 :estatura 161.7 :circunferencia-cintura 72.1 :circunferencia-braco 24.2 :circunferencia-panturrilha 34.1 :resistencia 715 :reatancia 66}
        paciente-exemplo-6 {:nome "paciente-exemplo-6" :peso 57.7 :estatura 157.7 :circunferencia-cintura 76.0 :circunferencia-braco 25.4 :circunferencia-panturrilha 34.4 :resistencia 707 :reatancia 68}
        paciente-exemplo-7 {:nome "paciente-exemplo-7" :peso 55.4 :estatura 159.3 :circunferencia-cintura 67.2 :circunferencia-braco 22.3 :circunferencia-panturrilha 36.2 :resistencia 722 :reatancia 61}
        paciente-exemplo-8 {:nome "paciente-exemplo-8" :peso 66.5 :estatura 157.6 :circunferencia-cintura 84.0 :circunferencia-braco 30.0 :circunferencia-panturrilha 30.0 :resistencia 521 :reatancia 65}
        paciente-exemplo-9 {:nome "paciente-exemplo-9" :peso 75.4 :estatura 155.9 :circunferencia-cintura 82.0 :circunferencia-braco 32.0 :circunferencia-panturrilha 40.0 :resistencia 525 :reatancia 56}
        paciente-exemplo-10 {:nome "paciente-exemplo-10" :peso 58.2 :estatura 165.6 :circunferencia-cintura 79.5 :circunferencia-braco 28.5 :circunferencia-panturrilha 38.5 :resistencia 544 :reatancia 47}
        paciente-exemplo-11 {:nome "paciente-exemplo-11" :peso 53.1 :estatura 166.1 :circunferencia-cintura 68.0 :circunferencia-braco 23.8 :circunferencia-panturrilha 34.0 :resistencia 553 :reatancia 47}
        paciente-exemplo-12 {:nome "paciente-exemplo-12" :peso 58.6 :estatura 162.0 :circunferencia-cintura 71.0 :circunferencia-braco 23.5 :circunferencia-panturrilha 38.0 :resistencia 532 :reatancia 50}
        paciente-exemplo-13 {:nome "paciente-exemplo-13" :peso 55.8 :estatura 162.4 :circunferencia-cintura 76.5 :circunferencia-braco 25.7 :circunferencia-panturrilha 33.0 :resistencia 668 :reatancia 55}
        paciente-exemplo-14 {:nome "paciente-exemplo-14" :peso 54.6 :estatura 161.7 :circunferencia-cintura 68.8 :circunferencia-braco 27.0 :circunferencia-panturrilha 34.5 :resistencia 620 :reatancia 63}
        paciente-exemplo-15 {:nome "paciente-exemplo-15" :peso 57.1 :estatura 157.7 :circunferencia-cintura 73.5 :circunferencia-braco 26.5 :circunferencia-panturrilha 33.5 :resistencia 675 :reatancia 73}
        ]
    (testing "IMC"
      (is (= 23.9 (imc paciente-exemplo-1 )))
      (is (= 19.6 (imc paciente-exemplo-2 )))
      (is (= 24.1 (imc paciente-exemplo-3 )))
      (is (= 21.7 (imc paciente-exemplo-4 )))
      (is (= 20.5 (imc paciente-exemplo-5 )))
      (is (= 23.2 (imc paciente-exemplo-6 )))
      (is (= 21.8 (imc paciente-exemplo-7 )))
      (is (= 26.8 (imc paciente-exemplo-8 )))
      (is (= 31.0 (imc paciente-exemplo-9 )))
      (is (= 21.2 (imc paciente-exemplo-10 )))
      (is (= 19.2 (imc paciente-exemplo-11 )))
      (is (= 22.3 (imc paciente-exemplo-12 )))
      (is (= 21.2 (imc paciente-exemplo-13 )))
      (is (= 20.9 (imc paciente-exemplo-14 )))
      (is (= 23.0 (imc paciente-exemplo-15 )))
      )
    (testing "Area Braco"
      (is (= 0.0058 (area-circunferencia (:circunferencia-braco paciente-exemplo-1) 4)))
      (is (= 0.004434 (area-circunferencia (:circunferencia-braco paciente-exemplo-2 ) 6)))
      (is (= 0.00510 (area-circunferencia (:circunferencia-braco paciente-exemplo-3 ) 5)))
      (is (= 0.0048 (area-circunferencia (:circunferencia-braco paciente-exemplo-4 ) 4)))
      (is (= 0.005 (area-circunferencia (:circunferencia-braco paciente-exemplo-5 ) 3)))
      (is (= 0.01 (area-circunferencia (:circunferencia-braco paciente-exemplo-6 ) 2)))
      (is (= 0.0040 (area-circunferencia (:circunferencia-braco paciente-exemplo-7 ) 4)))
      (is (= 0.0072 (area-circunferencia (:circunferencia-braco paciente-exemplo-8 ) 4)))
      (is (= 0.0082 (area-circunferencia (:circunferencia-braco paciente-exemplo-9 ) 4)))
      (is (= 0.0065 (area-circunferencia (:circunferencia-braco paciente-exemplo-10 ) 4)))
      (is (= 0.0045 (area-circunferencia (:circunferencia-braco paciente-exemplo-11 ) 4)))
      (is (= 0.0044 (area-circunferencia (:circunferencia-braco paciente-exemplo-12 ) 4)))
      (is (= 0.0053 (area-circunferencia (:circunferencia-braco paciente-exemplo-13 ) 4)))
      (is (= 0.0058 (area-circunferencia (:circunferencia-braco paciente-exemplo-14 ) 4)))
      (is (= 0.0056 (area-circunferencia (:circunferencia-braco paciente-exemplo-15 ) 4)))
      )
    (testing "area tronco"
      (is (= 0.045384 (area-circunferencia (:circunferencia-cintura paciente-exemplo-1 ) 6)))
      (is (= 0.05820 (area-circunferencia (:circunferencia-cintura paciente-exemplo-2 ) 5)))
      (is (= 0.0371 (area-circunferencia (:circunferencia-cintura paciente-exemplo-3 ) 4)))
      (is (= 0.040 (area-circunferencia (:circunferencia-cintura paciente-exemplo-4 ) 3)))
      (is (= 0.04 (area-circunferencia (:circunferencia-cintura paciente-exemplo-5 ) 2)))
      (is (= 0.046 (area-circunferencia (:circunferencia-cintura paciente-exemplo-6 ) 3)))
      (is (= 0.0360 (area-circunferencia (:circunferencia-cintura paciente-exemplo-7 ) 4)))
      (is (= 0.05618 (area-circunferencia (:circunferencia-cintura paciente-exemplo-8 ) 5)))
      (is (= 0.053535 (area-circunferencia (:circunferencia-cintura paciente-exemplo-9 ) 6)))
      (is (= 0.050320 (area-circunferencia (:circunferencia-cintura paciente-exemplo-10 ) 6)))
      (is (= 0.036815 (area-circunferencia (:circunferencia-cintura paciente-exemplo-11 ) 6)))
      (is (= 0.040135 (area-circunferencia (:circunferencia-cintura paciente-exemplo-12 ) 6)))
      (is (= 0.046594 (area-circunferencia (:circunferencia-cintura paciente-exemplo-13 ) 6)))
      (is (= 0.037687 (area-circunferencia (:circunferencia-cintura paciente-exemplo-14 ) 6)))
      (is (= 0.043012 (area-circunferencia (:circunferencia-cintura paciente-exemplo-15 ) 6)))
      )
    (testing "area med"
      (is (= 0.012 (area-med paciente-exemplo-1 3)))
      (is (= 0.0118 (area-med paciente-exemplo-2 4)))
      (is (= 0.01107 (area-med paciente-exemplo-3 5)))
      (is (= 0.010019 (area-med paciente-exemplo-4 6)))
      (is (= 0.01040 (area-med paciente-exemplo-5 5)))
      (is (= 0.0111 (area-med paciente-exemplo-6 4)))
      (is (= 0.010 (area-med paciente-exemplo-7 3)))
      (is (= 0.01 (area-med paciente-exemplo-8 2)))
      (is (= 0.015 (area-med paciente-exemplo-9 3)))
      (is (= 0.0133 (area-med paciente-exemplo-10 4)))
      (is (= 0.00985 (area-med paciente-exemplo-11 5)))
      (is (= 0.011166 (area-med paciente-exemplo-12 6)))
      (is (= 0.010928 (area-med paciente-exemplo-13 6)))
      (is (= 0.010645 (area-med paciente-exemplo-14 6)))
      (is (= 0.010838 (area-med paciente-exemplo-15 6)))
      )
    (testing "RSP"
      (is (= 417.347707 (rsp paciente-exemplo-1 6)))
      (is (= 441.970442 (rsp paciente-exemplo-2 6)))
      (is (= 369.087447 (rsp paciente-exemplo-3 6)))
      (is (= 407.161257 (rsp paciente-exemplo-4 6)))
      (is (= 418.187271 (rsp paciente-exemplo-5 6)))
      (is (= 454.431096 (rsp paciente-exemplo-6 6)))
      (is (= 415.002850 (rsp paciente-exemplo-7 6)))
      (is (= 362.646744 (rsp paciente-exemplo-8 6)))
      (is (= 451.703187 (rsp paciente-exemplo-9 6)))
      (is (= 395.779311 (rsp paciente-exemplo-10 6)))
      (is (= 298.206894 (rsp paciente-exemplo-11 6)))
      (is (= 333.342023 (rsp paciente-exemplo-12 6)))
      (is (= 408.619457 (rsp paciente-exemplo-13 6)))
      (is (= 371.050365 (rsp paciente-exemplo-14 6)))
      (is (= 421.723350 (rsp paciente-exemplo-15 6))))
    (testing "XCSP"
      (is (= 32.656315 (xcsp paciente-exemplo-1 6)))
      (is (= 43.874438 (xcsp paciente-exemplo-2 6)))
      (is (= 32.310686 (xcsp paciente-exemplo-3 6)))
      (is (= 29.163065 (xcsp paciente-exemplo-4 6)))
      (is (= 38.601902 (xcsp paciente-exemplo-5 6)))
      (is (= 43.707658 (xcsp paciente-exemplo-6 6)))
      (is (= 35.062568 (xcsp paciente-exemplo-7 6)))
      (is (= 45.243836 (xcsp paciente-exemplo-8 6)))
      (is (= 48.181673 (xcsp paciente-exemplo-9 6)))
      (is (= 34.194168 (xcsp paciente-exemplo-10 6)))
      (is (= 25.344890 (xcsp paciente-exemplo-11 6)))
      (is (= 31.329138 (xcsp paciente-exemplo-12 6)))
      (is (= 33.643818 (xcsp paciente-exemplo-13 6)))
      (is (= 37.703505 (xcsp paciente-exemplo-14 6)))
      (is (= 45.608599 (xcsp paciente-exemplo-15 6))))))
