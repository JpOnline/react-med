(ns react-med.shell-components
  "Components that are present in every screen, as drawer, header and footer."
  (:require
    [arrow-back :as arrow-back-icon]
    [button :as material-button]
    [close-icon :as material-close-icon]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [icon-button :as material-icon-button]
    [menu-icon :as material-menu-icon]
    [menu-item :as material-menu-item]
    [menu-list :as material-menu-list]
    [more-vert :as more-vert-icon]
    [paper :as material-paper]
    [re-frame.core :as re-frame]
    [react-med.authentication.authentication :as auth]
    [react-med.motivation-sentences]
    [react-med.pwa-install-component :as pwa-install]
    [react-med.util :as util :refer [<sub >evt]]
    [reagent.core :as reagent]
    [tab :as material-tab]
    [tabs :as material-tabs]
    ))

(defn header [& children]
  [:header
   {:style #js {:color "white"
                :backgroundColor util/primary-color
                :width "100%"
                :zIndex 1100
                :boxShadow "0px 2px 4px -1px #0003,
                            0px 4px 5px 0px #00000024,
                            0px 1px 10px 0px #0000001f"}}
   (map-indexed #(with-meta %2 {:key %1}) children)])

(defn top-bar [& children]
  [:div.top-bar
   {:style #js {:height "64px"
                :padding "0 24px"
                :display "flex"
                :alignItems "center"}}
   (map-indexed #(with-meta %2 {:key %1}) children)])

(defn left-icon [{:keys [variation]}]
  (case variation
    "<-" [:> material-icon-button
          {:color "inherit"
           :onClick #(>evt [:back])
           :style #js {:marginLeft -12 :marginRight 20}}
          [:> arrow-back-icon]]
    "X" [:> material-icon-button
         {:color "inherit"
          :onClick #(>evt [:cancel])
          :style #js {:marginLeft -12 :marginRight 20}}
         [:> material-close-icon]]
    [:div.arrow-back-placeholder
     {:style #js {:width "56px"}}]))

(defn screen-title [& title-strs]
  [:h6
   {:style #js {:fontSize "1.25rem"
                :fontWeight 500
                :lineHeight 1.6
                :letterSpacing "0.0075em"
                :margin 0}}
   title-strs])

(defn tabs-menu [{:keys [menu-options]}]
  [:> material-tabs
   {:value (<sub [:react-med.routes/state])
    :TabIndicatorProps #js {:style #js {:backgroundColor util/secondary-color}}
    :variant "scrollable"
    :scrollButtons (if (> (count menu-options) 3) "on" "off")
    :onChange #(>evt [:react-med.routes/set-route %2])
    :style #js {:overflowX "hidden"
                :height "48px"}}
   (map #(with-meta
           [:> material-tab
            {:label (:label %)
             :value (:state %)
             :style #js {:flexGrow 1}}]
           {:key %})
        menu-options)])

(defn bottom-bar []
  [:div.bottom-bar
   {:style #js {:color "white"
                :backgroundColor util/primary-color
                :width "100%"
                :minHeight 64
                :display "flex"
                :alignItems "center"
                :justifyContent "space-between"
                :zIndex 1100
                :boxShadow "0px -2px 4px -1px #0003,
                           0px -4px 5px 0px #00000024,
                           0px -1px 10px 0px #0000001f"}}
   [:> material-icon-button
    {:onClick #(>evt [::toggle-drawer-menu])
     :color "inherit"}
    [:> material-menu-icon]]
   [:> material-icon-button
    {:color "inherit"
     :onClick #(>evt [::open-actions-menu])}
    [:> more-vert-icon]]])

(defn-traced open-actions-menu
  [app-state]
  (assoc-in app-state [:ui :actions-menu :opened?] true))
(re-frame/reg-event-db ::open-actions-menu open-actions-menu)

(defn-traced close-actions-menu
  [app-state]
  (assoc-in app-state [:ui :actions-menu :opened?] false))
(re-frame/reg-event-db ::close-actions-menu close-actions-menu)

(defn actions-opened?
  [app-state]
  (get-in app-state [:ui :actions-menu :opened?]))
(re-frame/reg-sub ::actions-opened? actions-opened?)

(defn actions-menu [{:keys [actions]}]
  [:<> ;; Needed because can accept a possible nil
   (when (<sub [::actions-opened?])
     [:<>
      [:div.close-menu-invisible-layer
       {:style #js {:position "absolute"
                    :width "100%"
                    :height "100%"
                    :zIndex 1199
                    :backgroundColor "#0000000d"}
        :onClick #(>evt [::close-actions-menu])}]
      [:> material-paper
       {:elevation 8
        :style #js {:backgroundColor "white"
                    :position "absolute"
                    :right "12px"
                    :bottom "20px"
                    :zIndex 1200}}
       [:> material-menu-list
        (map (fn [action]
               ^{:key (action :name)}
               [:> material-menu-item
                {:onClick #(>evt [(action :event)])}
                (action :name)])
             actions)]]])])

(defn drawer-menu [{:keys [menu-structure]}]
  (let [structure->menu-item
        (fn s->mi
          ([structure]
           (s->mi structure 0))
          ([{:keys [label sub-menus selected state]} padding]
           (cons ^{:key label}
                 [:> material-menu-item
                  {:onClick #(>evt [:react-med.routes/set-route state])
                   :style (clj->js
                            (merge
                              (when selected {:backgroundColor "lightgray"})
                              {:paddingLeft (+ 20 (* 8 padding))}))}
                  (str label)]
                 (mapcat s->mi sub-menus (repeat (inc padding))))))]
  [:<> ;; Needed because can accept a possible nil
   (when (<sub [::drawer-opened?])
     [:<>
      [:div.close-menu-invisible-layer
       {:style #js {:position "absolute"
                    :width "100%"
                    :height "100%"
                    :zIndex 1199
                    :backgroundColor "#0000000d"}
        :onClick #(>evt [::toggle-drawer-menu])}]
      [:> material-paper
       {:elevation 8
        :style #js {:position "absolute"
                    :height "100%"
                    :width "256px"
                    :maxWidth "100vw"
                    :borderRadius "0px"
                    :backgroundColor "white"
                    :zIndex 1200
                    :display "flex"
                    :flexDirection "column"}}
       [:div.drawer-header
        {:style #js {:height "64px"
                     :backgroundColor "white"
                     :display "flex"
                     :alignItems "center"
                     :justifyContent "center"}}
        [:img
         {:src "images/LogoReactmed.png"
          :width 150}]]
       [:hr {:style #js {:margin 0}}]
       [:> material-menu-list
        {:style #js {:flexGrow 1
                     :paddingTop "0px"
                     :display "flex"
                     :flexDirection "column"}}
        (map structure->menu-item menu-structure)
        [:> material-button
         {:style #js {:margin "50px 15px 10px 15px"
                      :color "#caca30"}
          :variant "outlined"
          :onClick #(auth/logout)}
         "Logout"]
        [pwa-install/button]] ;; Show only when not installed.
       [:div.drawer-footer
        {:style #js {:height "64px"
                     :display "flex"
                     :alignItems "center"}}
        [:> material-icon-button
         {:color "inherit"
          :onClick #(>evt [::toggle-drawer-menu])}
         [:> material-close-icon]]]]])]))

(defn-traced toggle-drawer-menu
  [app-state]
  (update-in app-state [:ui :drawer-menu :opened?] not))
(re-frame/reg-event-db ::toggle-drawer-menu toggle-drawer-menu)

(defn drawer-opened?
  [app-state]
  (get-in app-state [:ui :drawer-menu :opened?]))
(re-frame/reg-sub ::drawer-opened? drawer-opened?)

(defn error-boundary []
  (let [error (reagent/atom nil)]
    (reagent/create-class
      {:component-did-catch (fn [this e info]) ;; For side effects, like logging the error.
       :get-derived-state-from-error (fn [e]
                                       (reset! error e)
                                       #js {})
       :reagent-render (fn [{:keys [if-error]} & children]
                         (if @error
                           [:<> if-error]
                           [:<> (map-indexed #(with-meta %2 {:key %1}) children)]))})))

(defn error-view []
  (let [{:keys [sentence author]} (get react-med.motivation-sentences/sentences
                                       (rand-int (count react-med.motivation-sentences/sentences)))]
    [:<>
     [:h3
      {:style #js {:textAlign "center"
                   :paddingBottom "50px"}}
      "Desculpa, aconteceu algum erro. 😞"]
     [:div
      {:style #js {:maxWidth "600px"
                   :margin "auto"}}
      [:p
       {:style #js {:textAlign "center"}}
       sentence]
      [:p
       {:style #js {:textAlign "right"}}
       [:i author]]]]))

(defn main-content [attrs & children]
  (util/replace-if-some attrs
    [:main
     ;; Default attributes, it's replaced if attrs is set.
     {:style #js {:flex 1
                  :padding 12
                  :overflow "auto"}}
     [error-boundary
      {:if-error [error-view]}
      (map-indexed #(with-meta %2 {:key %1})
                   (util/replace-if-none attrs children))]]))

(defn main-error-view []
  [:<>
   [header
    [top-bar
     [left-icon
      {:variation ""}]
     [screen-title
      "Erro"]]]
     [main-content
      [error-view]]
     [drawer-menu]
     #_[actions-menu
      {:actions actions}]
     [bottom-bar]])

(defn main-panel [& children]
  [:div.main-panel
   {:style #js {:display "flex"
                :position "relative" ;; So the childs can be positioned using absolute.
                :justifyContent "space-between"
                :flexDirection "column"
                :height "inherit"
                :width "inherit"}}
   [error-boundary
    {:if-error [main-error-view]}
    (map-indexed #(with-meta %2 {:key %1}) children)]])

(defn default [& children]
  (let [menu-structure (<sub [:react-med.routes/side-menu])
        tabs (<sub [:react-med.routes/tabs])
        title (<sub [:react-med.routes/title])
        actions (<sub [:react-med.routes/actions])
        top-bar-icon (<sub [:react-med.routes/top-bar-icon])]
    [main-panel
     [header
      [top-bar
       [left-icon
        {:variation top-bar-icon}]
       [screen-title
        title]]
      (when tabs
        [tabs-menu
         {:menu-options tabs}])]
     [main-content
      (map-indexed #(with-meta %2 {:key %1}) children)]
     [drawer-menu
      {:menu-structure menu-structure}]
     [actions-menu
      {:actions actions}]
     [bottom-bar]]))
