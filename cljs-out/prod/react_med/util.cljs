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

(defn valid? [spec input]
  (spec/valid? spec input))

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

(defn repeat-as
  "Repeat element as the length of n. Not lazy. Good to use in maps with
  multiple collections but when they have different length."
  [n element]
  (vec (doall (repeat (count n) element))))

(defn replace-if-some
  "The goal here is to make possible for components to receive optional attribu-
  tes as style that will overwrite what's defined in the component. So I used to
  define components like this:

(defn some-component [& children]
  [:div
   {:style #js {:padding 12}}
   (map-indexed #(with-meta %2 {:key %1}) children)])

  But it doesn't receive optional attributes that would overwrite that style.
  There are some options to solve the problem, including using macros, but with
  the functions replace-if-some and replace-if-none I can write the same compo-
  nent without changing the syntax very much, like this:

(defn some-component [attrs & children]
  (replace-if-some
    attrs
    [:div
     {:style #js {:padding 12}}
     (map-indexed #(with-meta %2 {:key %1}) (replace-if-none attrs children))]))"
  [attrs element]
  (if (map? attrs)
    (assoc element 1 attrs)
    element))
(defn replace-if-none
  "To be used with replace-if-some. The thing is that if attrs is not a map, it
  is actually the first child."
  [attrs children]
  (if (map? attrs)
    children
    (conj children attrs)))

(defn side-effect-component
  "A component that executes a side effect depending on the change of a subscrip-
  tion."
  [{:keys [side-effect subscription]}]
  (js/console.log "A side effect was triggered by the subscription"
                  subscription
                  "with value"
                  (<sub [subscription]))
  (side-effect)
  [:div.no-ui.only-for-side-effect])

(defn get-pred
  "Returns the first element of coll that satisfy the predicate f."
  [f coll]
  (some #(if (f %) %) coll))

(defn yyyy-mm-dd->dd-mm-yyyy [date]
  (let [[_ year month day] (re-find #"(\d{4})\D(\d{1,2})\D(\d{1,2})" date)]
     (str day"/"month"/"year)))

(defn years-difference
  "Age calculator. Inputs should be in the format yyyy-mm-dd."
  [initial-date final-date]
  (-> (js/Date. final-date)
      (- (js/Date. initial-date))
      (/ 1000 60 60 24 365)
      (js/Math.floor)))

