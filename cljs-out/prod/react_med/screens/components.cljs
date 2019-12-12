(ns react-med.screens.components
  (:require
    [number-format]
    ))

(defn gray-input
  [props]
  [:span
   {:style #js {:backgroundColor "#e5e9ed"
                :padding "4px 8px"
                :borderRadius "5px"}}
   [:> number-format
    (merge {:style #js {:textDecoration "underline"
                        :width "70px"
                        :backgroundColor "#e5e9ed"
                        :WebkitAppearance "meter"}
            :decimalSeparator ","
            :decimalScale 2
            :min 0
            :max 500}
           props)]])
