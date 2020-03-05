(ns cljc.java-time.zone-offset (:require [cljs.java-time.interop :as jti] #? (:cljs [java.time :refer [ZoneOffset]])) (:refer-clojure :exclude [get range format min max next name resolve]) #? (:clj (:import [java.time ZoneOffset])))
(def max (. java.time.ZoneOffset -MAX))
(def min (. java.time.ZoneOffset -MIN))
(def utc (. java.time.ZoneOffset -UTC))
(clojure.core/defn get-available-zone-ids {:arglists (quote ([]))} (^java.util.Set [] (. java.time.ZoneOffset getAvailableZoneIds)))
(clojure.core/defn range {:arglists (quote (["java.time.ZoneOffset" "java.time.temporal.TemporalField"]))} (^java.time.temporal.ValueRange [^java.time.ZoneOffset this3031 ^java.time.temporal.TemporalField java-time-temporal-TemporalField3032] (.range this3031 java-time-temporal-TemporalField3032)))
(clojure.core/defn of-total-seconds {:arglists (quote (["int"]))} (^java.time.ZoneOffset [^java.lang.Integer int3033] (. java.time.ZoneOffset ofTotalSeconds int3033)))
(clojure.core/defn of {:arglists (quote (["java.lang.String"] ["java.lang.String"] ["java.lang.String" "java.util.Map"]))} (^java.lang.Object [G__3035] #? (:cljs (. java.time.ZoneOffset of G__3035) :clj (clojure.core/cond (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.lang.String") G__3035)) (clojure.core/let [G__3035 ^"java.lang.String" G__3035] (. java.time.ZoneOffset of G__3035)) (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.lang.String") G__3035)) (clojure.core/let [G__3035 ^"java.lang.String" G__3035] (. java.time.ZoneOffset of G__3035)) :else (throw (java.lang.IllegalArgumentException. "no corresponding java.time method with these args"))))) (^java.time.ZoneId [^java.lang.String java-lang-String3036 ^java.util.Map java-util-Map3037] (. java.time.ZoneOffset of java-lang-String3036 java-util-Map3037)))
(clojure.core/defn of-offset {:arglists (quote (["java.lang.String" "java.time.ZoneOffset"]))} (^java.time.ZoneId [^java.lang.String java-lang-String3038 ^java.time.ZoneOffset java-time-ZoneOffset3039] (. java.time.ZoneOffset ofOffset java-lang-String3038 java-time-ZoneOffset3039)))
(clojure.core/defn query {:arglists (quote (["java.time.ZoneOffset" "java.time.temporal.TemporalQuery"]))} (^java.lang.Object [^java.time.ZoneOffset this3040 ^java.time.temporal.TemporalQuery java-time-temporal-TemporalQuery3041] (.query this3040 java-time-temporal-TemporalQuery3041)))
(clojure.core/defn to-string {:arglists (quote (["java.time.ZoneOffset"]))} (^java.lang.String [^java.time.ZoneOffset this3042] (.toString this3042)))
(clojure.core/defn get-display-name {:arglists (quote (["java.time.ZoneOffset" "java.time.format.TextStyle" "java.util.Locale"]))} (^java.lang.String [^java.time.ZoneOffset this3043 ^java.time.format.TextStyle java-time-format-TextStyle3044 ^java.util.Locale java-util-Locale3045] (jti/getter displayName this3043 java-time-format-TextStyle3044 java-util-Locale3045)))
(clojure.core/defn get-long {:arglists (quote (["java.time.ZoneOffset" "java.time.temporal.TemporalField"]))} (^long [^java.time.ZoneOffset this3046 ^java.time.temporal.TemporalField java-time-temporal-TemporalField3047] (.getLong this3046 java-time-temporal-TemporalField3047)))
(clojure.core/defn get-rules {:arglists (quote (["java.time.ZoneOffset"]))} (^java.time.zone.ZoneRules [^java.time.ZoneOffset this3048] (jti/getter rules this3048)))
(clojure.core/defn of-hours {:arglists (quote (["int"]))} (^java.time.ZoneOffset [^java.lang.Integer int3049] (. java.time.ZoneOffset ofHours int3049)))
(clojure.core/defn get-id {:arglists (quote (["java.time.ZoneOffset"]))} (^java.lang.String [^java.time.ZoneOffset this3050] (jti/getter id this3050)))
(clojure.core/defn normalized {:arglists (quote (["java.time.ZoneOffset"]))} (^java.time.ZoneId [^java.time.ZoneOffset this3051] (.normalized this3051)))
(clojure.core/defn system-default {:arglists (quote ([]))} (^java.time.ZoneId [] (. java.time.ZoneOffset systemDefault)))
(clojure.core/defn from {:arglists (quote (["java.time.temporal.TemporalAccessor"] ["java.time.temporal.TemporalAccessor"]))} (^java.lang.Object [G__3053] #? (:cljs (. java.time.ZoneOffset from G__3053) :clj (clojure.core/cond (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.temporal.TemporalAccessor") G__3053)) (clojure.core/let [G__3053 ^"java.time.temporal.TemporalAccessor" G__3053] (. java.time.ZoneOffset from G__3053)) (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.temporal.TemporalAccessor") G__3053)) (clojure.core/let [G__3053 ^"java.time.temporal.TemporalAccessor" G__3053] (. java.time.ZoneOffset from G__3053)) :else (throw (java.lang.IllegalArgumentException. "no corresponding java.time method with these args"))))))
(clojure.core/defn of-hours-minutes-seconds {:arglists (quote (["int" "int" "int"]))} (^java.time.ZoneOffset [^java.lang.Integer int3054 ^java.lang.Integer int3055 ^java.lang.Integer int3056] (. java.time.ZoneOffset ofHoursMinutesSeconds int3054 int3055 int3056)))
(clojure.core/defn is-supported {:arglists (quote (["java.time.ZoneOffset" "java.time.temporal.TemporalField"]))} (^java.lang.Boolean [^java.time.ZoneOffset this3057 ^java.time.temporal.TemporalField java-time-temporal-TemporalField3058] (.isSupported this3057 java-time-temporal-TemporalField3058)))
(clojure.core/defn hash-code {:arglists (quote (["java.time.ZoneOffset"]))} (^java.lang.Integer [^java.time.ZoneOffset this3059] (.hashCode this3059)))
(clojure.core/defn get-total-seconds {:arglists (quote (["java.time.ZoneOffset"]))} (^java.lang.Integer [^java.time.ZoneOffset this3060] (jti/getter totalSeconds this3060)))
(clojure.core/defn adjust-into {:arglists (quote (["java.time.ZoneOffset" "java.time.temporal.Temporal"]))} (^java.time.temporal.Temporal [^java.time.ZoneOffset this3061 ^java.time.temporal.Temporal java-time-temporal-Temporal3062] (.adjustInto this3061 java-time-temporal-Temporal3062)))
(clojure.core/defn of-hours-minutes {:arglists (quote (["int" "int"]))} (^java.time.ZoneOffset [^java.lang.Integer int3063 ^java.lang.Integer int3064] (. java.time.ZoneOffset ofHoursMinutes int3063 int3064)))
(clojure.core/defn compare-to {:arglists (quote (["java.time.ZoneOffset" "java.time.ZoneOffset"] ["java.time.ZoneOffset" "java.lang.Object"]))} (^java.lang.Integer [this3065 G__3066] #? (:cljs (.compareTo ^java.time.ZoneOffset this3065 G__3066) :clj (clojure.core/cond (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.ZoneOffset") G__3066)) (clojure.core/let [G__3066 ^"java.time.ZoneOffset" G__3066] (.compareTo ^java.time.ZoneOffset this3065 G__3066)) (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.lang.Object") G__3066)) (clojure.core/let [G__3066 ^"java.lang.Object" G__3066] (.compareTo ^java.time.ZoneOffset this3065 G__3066)) :else (throw (java.lang.IllegalArgumentException. "no corresponding java.time method with these args"))))))
(clojure.core/defn get {:arglists (quote (["java.time.ZoneOffset" "java.time.temporal.TemporalField"]))} (^java.lang.Integer [^java.time.ZoneOffset this3067 ^java.time.temporal.TemporalField java-time-temporal-TemporalField3068] (.get this3067 java-time-temporal-TemporalField3068)))
(clojure.core/defn equals {:arglists (quote (["java.time.ZoneOffset" "java.lang.Object"]))} (^java.lang.Boolean [^java.time.ZoneOffset this3069 ^java.lang.Object java-lang-Object3070] (.equals this3069 java-lang-Object3070)))