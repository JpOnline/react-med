(ns cljc.java-time.temporal.temporal-adjusters (:require [cljs.java-time.interop :as jti] #? (:cljs [java.time.temporal :refer [TemporalAdjusters]])) (:refer-clojure :exclude [get range format min max next name resolve]) #? (:clj (:import [java.time.temporal TemporalAdjusters])))
(clojure.core/defn next {:arglists (quote (["java.time.DayOfWeek"]))} (^java.time.temporal.TemporalAdjuster [^java.time.DayOfWeek java-time-DayOfWeek3071] (. java.time.temporal.TemporalAdjusters next java-time-DayOfWeek3071)))
(clojure.core/defn next-or-same {:arglists (quote (["java.time.DayOfWeek"]))} (^java.time.temporal.TemporalAdjuster [^java.time.DayOfWeek java-time-DayOfWeek3072] (. java.time.temporal.TemporalAdjusters nextOrSame java-time-DayOfWeek3072)))
(clojure.core/defn first-day-of-next-month {:arglists (quote ([]))} (^java.time.temporal.TemporalAdjuster [] (. java.time.temporal.TemporalAdjusters firstDayOfNextMonth)))
(clojure.core/defn first-day-of-month {:arglists (quote ([]))} (^java.time.temporal.TemporalAdjuster [] (. java.time.temporal.TemporalAdjusters firstDayOfMonth)))
(clojure.core/defn first-day-of-year {:arglists (quote ([]))} (^java.time.temporal.TemporalAdjuster [] (. java.time.temporal.TemporalAdjusters firstDayOfYear)))
(clojure.core/defn of-date-adjuster {:arglists (quote (["java.util.function.UnaryOperator"]))} (^java.time.temporal.TemporalAdjuster [^java.util.function.UnaryOperator java-util-function-UnaryOperator3073] (. java.time.temporal.TemporalAdjusters ofDateAdjuster java-util-function-UnaryOperator3073)))
(clojure.core/defn last-day-of-year {:arglists (quote ([]))} (^java.time.temporal.TemporalAdjuster [] (. java.time.temporal.TemporalAdjusters lastDayOfYear)))
(clojure.core/defn first-in-month {:arglists (quote (["java.time.DayOfWeek"]))} (^java.time.temporal.TemporalAdjuster [^java.time.DayOfWeek java-time-DayOfWeek3074] (. java.time.temporal.TemporalAdjusters firstInMonth java-time-DayOfWeek3074)))
(clojure.core/defn previous-or-same {:arglists (quote (["java.time.DayOfWeek"]))} (^java.time.temporal.TemporalAdjuster [^java.time.DayOfWeek java-time-DayOfWeek3075] (. java.time.temporal.TemporalAdjusters previousOrSame java-time-DayOfWeek3075)))
(clojure.core/defn previous {:arglists (quote (["java.time.DayOfWeek"]))} (^java.time.temporal.TemporalAdjuster [^java.time.DayOfWeek java-time-DayOfWeek3076] (. java.time.temporal.TemporalAdjusters previous java-time-DayOfWeek3076)))
(clojure.core/defn last-day-of-month {:arglists (quote ([]))} (^java.time.temporal.TemporalAdjuster [] (. java.time.temporal.TemporalAdjusters lastDayOfMonth)))
(clojure.core/defn last-in-month {:arglists (quote (["java.time.DayOfWeek"]))} (^java.time.temporal.TemporalAdjuster [^java.time.DayOfWeek java-time-DayOfWeek3077] (. java.time.temporal.TemporalAdjusters lastInMonth java-time-DayOfWeek3077)))
(clojure.core/defn first-day-of-next-year {:arglists (quote ([]))} (^java.time.temporal.TemporalAdjuster [] (. java.time.temporal.TemporalAdjusters firstDayOfNextYear)))
(clojure.core/defn day-of-week-in-month {:arglists (quote (["int" "java.time.DayOfWeek"]))} (^java.time.temporal.TemporalAdjuster [^java.lang.Integer int3078 ^java.time.DayOfWeek java-time-DayOfWeek3079] (. java.time.temporal.TemporalAdjusters dayOfWeekInMonth int3078 java-time-DayOfWeek3079)))