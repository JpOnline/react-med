(ns react-med.screens.paciente-relatorio.tollerance-ellipse-component
  (:require
    [circular-progress :as material-circular-progress]
    [google-charts]
    [react-med.util :as util :refer [<sub >evt]]
    ))

(defn draw-chart [element-id data-array options]
  (fn []
    (let [g-charts-instance (new google-charts)
          el (-> js/document (.getElementById element-id))
          data (fn [] (-> g-charts-instance .-api .-visualization
                          (.arrayToDataTable data-array)))
          chart (fn []
                  (new (-> g-charts-instance .-api
                           .-visualization .-ScatterChart) el))
          draw-fn (fn [] (-> (chart) (.draw (data) options)))]
      (-> g-charts-instance (.load draw-fn)))))

(defn series-points->data-array
  "Receive head and points like ['y' [1 2] [3 4]]
  Output the data array expected by the chart lib like [['category-name' 'y'] [1 2] [3 4]]
  Or when multiple series sent, it fill points with nil like
  In (series-points->data-array 'category-name' ['y' [1 2] [3 4]] ['z' [5 6] [7 8]])
  Out [[category-name y z] [1 2 nil] [3 4 nil] [5 nil 6] [7 nil 8]]"
  [category-name & series]
  (let [amount-of-series (count series)
        no-head-series (map rest series)
        merge-points (fn [idx serie]
                       (map (fn [[x y]]
                              (concat [x]
                                      (repeat idx nil)
                                      [y]
                                      (repeat (- (dec amount-of-series) idx) nil)))
                            serie))
        header (cons category-name (map first series))]
    (->> no-head-series
         (map-indexed merge-points)
         (apply concat)
         (cons header)
         (map clj->js)
         (clj->js))))

(defn ellipse
  [name [cx cy] radius-x radius-y rotation]
  (let [t (if (zero? rotation) 0 (/ Math/PI (/ 180 rotation)))]
    (->> (range 0 6.32 0.1)
         (map #(into [(+ cx (* (Math/cos %) radius-x))
                      (+ cy (* (Math/sin %) radius-y))]))
         (map #(map - % [cx cy])) ;; Put ellipse in the center
         (map (fn [[x y]]
                [(- (* x (Math/cos t)) (* y (Math/sin t)))
                 (+ (* x (Math/sin t)) (* y (Math/cos t)))]))
         (map #(map + % [cx cy])) ;; Move ellipse back to its position
         (cons name))))

(defn eigen-val
  "Calculate the eigenvalues for a 2x2 matrix.
  Receives a 2x2 matrix in the format [[a b] [c d]]
  Returns the tuple of eigenvalues, e.g. [val1 val2]"
  [[[a b] [c d]]]
  (let [trace (+ a d)
        determinant (- (* a d) (* b c))
        val1 (/ (+ trace (Math/sqrt (- (* trace trace) (* 4 determinant)))) 2)
        val2 (/ (- trace (Math/sqrt (- (* trace trace) (* 4 determinant)))) 2)]
    (if (> val1 val2)
      [val1 val2]
      [val2 val1])))

(defn eigen-vec
  "Calculate the eigenvectors for a 2x2 matrix.
  Receives a 2x2 matrix in the format [[a b] [c d]]
  Returns a matrix representing 2 vectors in its columns, as [[v1-x v2-x]
                                                              [v1-y v2-y]]"
  [matrix-2x2]
  (let [[val1 val2] (eigen-val matrix-2x2)
        [[a b] [c d]] matrix-2x2]
    (cond
      (and (zero? c) (zero? b)) [[1 0] [0 1]]
      (not (zero? c)) [[(- val1 d) (- val2 d)] [c c]]
      ;; if b is not zero
      :else [[b b] [(- val1 a) (- val2 a)]])))

(defn tolerance-ellipses-params
  "Receives the standard deviation of a dataset in x-axis, the standard
  deviation in y-axis and the Pearson Correlation Coeficient r.
  Returns the parameters necessary to draw the tollerance ellipses: a
  vector of the x semi axis with values for 50%, 75% and 95% tolerances; a
  vector of the y semi axis with values for 50%, 75% and 95% tolerances and
  the slope, i.e. the ellipse rotation in degrees.
  For further explanation see https://stats.stackexchange.com/questions/447694/ellipse-region-shape-from-standard-deviations/449226#449226"
  [standard-deviation-x standard-deviation-y pearson-r]
  (let [covxy (* standard-deviation-x standard-deviation-y pearson-r)
        covyx covxy
        covxx (* standard-deviation-x standard-deviation-x)
        covyy (* standard-deviation-y standard-deviation-y)
        covariance-matrix [[covxx covxy]
                           [covyx covyy]]
        [[eigen-vec-1-x eigen-vec-2-x]
         [eigen-vec-1-y eigen-vec-2-y]] (eigen-vec covariance-matrix)
        [eigen-val-x eigen-val-y]       (eigen-val covariance-matrix)
        chi-squared {0.5 1.386294361 0.75 2.772588722 0.95 5.991464547} ;; with df=2
        tolerances (map chi-squared [0.5 0.75 0.95])
        x-semi-axes (map #(Math/sqrt (* % eigen-val-x)) tolerances)
        y-semi-axes (map #(Math/sqrt (* % eigen-val-y)) tolerances)
        slope (if (> standard-deviation-x standard-deviation-y)
                (Math/atan2 eigen-vec-1-y eigen-vec-1-x)
                (Math/atan2 eigen-vec-1-x eigen-vec-1-y))
        slope-in-degree (/ (* 180 slope) Math/PI)]
    [x-semi-axes y-semi-axes slope-in-degree]))

(defn ellipse-chart-component [{:keys [width height series options]}]
  (let [id (str "ellipse-chart" (random-uuid))
        data-array (apply series-points->data-array "x definido em ellipse-chart-comp" series)]
    [(util/with-mount-fn
       [:div
        {:id id
         :style #js {:height height :width width}
         :component-did-mount (draw-chart id data-array options)}
        [:> material-circular-progress]])]))

(defn ellipse-chart-component2 [{:keys [style height series options]}]
  (let [id (str "ellipse-chart" (random-uuid))
        data-array (apply series-points->data-array "x definido em ellipse-chart-comp" series)]
    [(util/with-mount-fn
       [:div
        {:id id
         :style style
         :component-did-mount (draw-chart id data-array options)}
        [:> material-circular-progress]])]))
