(ns react-med.util
  (:require
    [re-frame.core :as re-frame]
    [reagent.core :as reagent]
    [clojure.spec.alpha :as spec]
    ))

;; Redef re-frame subscribe and dispatch for brevity
(def <sub (comp deref re-frame.core/subscribe))
(def >evt re-frame.core/dispatch)

(def primary-color "#71838e")
(def secondary-color "#c9c92d")

(defn with-mount-fn
  "Wrap component in the create-class fn so the react component-did-mount
  hook can be used."
  [[n {:keys [component-did-mount]} :as to-render]]
  (reagent/create-class
    {:reagent-render #(into [] (update-in to-render [1]
                                          dissoc :component-did-mount))
     :component-did-mount component-did-mount}))

(defn validate [spec input message]
  "Throw a message when the input don't conform to the spec."
  (or (spec/valid? spec input)
      (throw (ex-info message {:spec-input input
                               :spec-data (spec/explain-data spec input)}))))

(spec/def ::valid-app-state
  (spec/keys :req-un [::ui ::domain]))

(spec/def ::ui map?)
(spec/def ::domain map?)

(defn is-state? [message]
  (fn
    ([app-state ] (validate ::valid-app-state app-state message))
    ([app-state event]
     (validate ::valid-app-state app-state (str "Erro no evento "event". "message)))))

(def pre-state? (is-state? "Input of an invalid app-state."))
(def post-state? (is-state? "Returned an invalid app-state."))

(defn round-to-precision
  "it takes an argument for which number to round,
  the same as the classic round had the implicit
  argument of 1 (e.g. (round 2.3) is the same as
  (round-to-precision 2.3 1)"
  [n & [precision]]
  (let [temp (+ n (if precision (/ precision 2) 0.5))]
    (- temp (mod temp (or precision 1)))))

