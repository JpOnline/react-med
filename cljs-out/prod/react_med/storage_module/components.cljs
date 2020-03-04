(ns react-med.storage-module.components
  (:require
    [re-frame.core :as re-frame]
    [react-med.storage-module.firebase :as fb-module]
    [react-med.storage-module.local-storage :as local-storage]
    [react-med.util :as util :refer [<sub >evt]]
    ))

;; This will be triggered every time something in the :domain change
(re-frame/reg-sub ::domain (fn [app-state]
                             (get app-state :domain)))

(defn save-element []
  [util/side-effect-component
   {:subscription ::domain
    :side-effect #(>evt [::local-storage/save-domain-to-local-storage])}])
