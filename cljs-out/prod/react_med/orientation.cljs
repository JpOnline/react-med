(ns react-med.orientation
  "Set if the display is on landscape or portrait."
  (:require
    [re-frame.core :as re-frame]
    [react-med.util :as util :refer [<sub >evt]]))

(defn is-the-screen-small? []
  (not (-> js/window (.matchMedia "(min-width:800px)") .-matches)))

(defn orientation
  [state]
  (if (and (#{"ellipses" "ellipses-config"} state) (is-the-screen-small?))
    "landscape"
    "portrait"))
(re-frame/reg-sub
  ::orientation
  :<- [:react-med.routes/state]
  orientation)

(defn set-landscape-or-portrait []
  [util/side-effect-component
   {:subscription ::orientation
    :side-effect #(if (= "landscape" (<sub [::orientation]))
                    ;; Force screen in landscape mode
                    (-> js/screen .-orientation (.lock "landscape"))
                    ;; Force screen in portrait mode
                    (-> js/screen .-orientation (.lock "portrait")))}])
