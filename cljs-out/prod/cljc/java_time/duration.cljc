(ns cljc.java-time.duration (:require [cljs.java-time.interop :as jti] #? (:cljs [java.time :refer [Duration]])) (:refer-clojure :exclude [get range format min max next name resolve]) #? (:clj (:import [java.time Duration])))
(def zero (. java.time.Duration -ZERO))
(clojure.core/defn minus-minutes {:arglists (quote (["java.time.Duration" "long"]))} (^java.time.Duration [^java.time.Duration this2797 ^long long2798] (.minusMinutes this2797 long2798)))
(clojure.core/defn to-nanos {:arglists (quote (["java.time.Duration"]))} (^long [^java.time.Duration this2799] (.toNanos this2799)))
(clojure.core/defn minus-millis {:arglists (quote (["java.time.Duration" "long"]))} (^java.time.Duration [^java.time.Duration this2800 ^long long2801] (.minusMillis this2800 long2801)))
(clojure.core/defn minus-hours {:arglists (quote (["java.time.Duration" "long"]))} (^java.time.Duration [^java.time.Duration this2802 ^long long2803] (.minusHours this2802 long2803)))
(clojure.core/defn of-days {:arglists (quote (["long"]))} (^java.time.Duration [^long long2804] (. java.time.Duration ofDays long2804)))
(clojure.core/defn is-negative {:arglists (quote (["java.time.Duration"]))} (^java.lang.Boolean [^java.time.Duration this2805] (.isNegative this2805)))
(clojure.core/defn of {:arglists (quote (["long" "java.time.temporal.TemporalUnit"]))} (^java.time.Duration [^long long2806 ^java.time.temporal.TemporalUnit java-time-temporal-TemporalUnit2807] (. java.time.Duration of long2806 java-time-temporal-TemporalUnit2807)))
(clojure.core/defn is-zero {:arglists (quote (["java.time.Duration"]))} (^java.lang.Boolean [^java.time.Duration this2808] (.isZero this2808)))
(clojure.core/defn multiplied-by {:arglists (quote (["java.time.Duration" "long"]))} (^java.time.Duration [^java.time.Duration this2809 ^long long2810] (.multipliedBy this2809 long2810)))
(clojure.core/defn with-nanos {:arglists (quote (["java.time.Duration" "int"]))} (^java.time.Duration [^java.time.Duration this2811 ^java.lang.Integer int2812] (.withNanos this2811 int2812)))
(clojure.core/defn get-units {:arglists (quote (["java.time.Duration"]))} (^java.util.List [^java.time.Duration this2813] (jti/getter units this2813)))
(clojure.core/defn get-nano {:arglists (quote (["java.time.Duration"]))} (^java.lang.Integer [^java.time.Duration this2814] (jti/getter nano this2814)))
(clojure.core/defn plus-millis {:arglists (quote (["java.time.Duration" "long"]))} (^java.time.Duration [^java.time.Duration this2815 ^long long2816] (.plusMillis this2815 long2816)))
(clojure.core/defn to-minutes {:arglists (quote (["java.time.Duration"]))} (^long [^java.time.Duration this2817] (.toMinutes this2817)))
(clojure.core/defn minus-seconds {:arglists (quote (["java.time.Duration" "long"]))} (^java.time.Duration [^java.time.Duration this2818 ^long long2819] (.minusSeconds this2818 long2819)))
(clojure.core/defn plus-nanos {:arglists (quote (["java.time.Duration" "long"]))} (^java.time.Duration [^java.time.Duration this2820 ^long long2821] (.plusNanos this2820 long2821)))
(clojure.core/defn plus {:arglists (quote (["java.time.Duration" "java.time.Duration"] ["java.time.Duration" "long" "java.time.temporal.TemporalUnit"]))} (^java.time.Duration [^java.time.Duration this2822 ^java.time.Duration java-time-Duration2823] (.plus this2822 java-time-Duration2823)) (^java.time.Duration [^java.time.Duration this2824 ^long long2825 ^java.time.temporal.TemporalUnit java-time-temporal-TemporalUnit2826] (.plus this2824 long2825 java-time-temporal-TemporalUnit2826)))
(clojure.core/defn divided-by {:arglists (quote (["java.time.Duration" "long"]))} (^java.time.Duration [^java.time.Duration this2827 ^long long2828] (.dividedBy this2827 long2828)))
(clojure.core/defn plus-minutes {:arglists (quote (["java.time.Duration" "long"]))} (^java.time.Duration [^java.time.Duration this2829 ^long long2830] (.plusMinutes this2829 long2830)))
(clojure.core/defn to-string {:arglists (quote (["java.time.Duration"]))} (^java.lang.String [^java.time.Duration this2831] (.toString this2831)))
(clojure.core/defn minus {:arglists (quote (["java.time.Duration" "java.time.Duration"] ["java.time.Duration" "long" "java.time.temporal.TemporalUnit"]))} (^java.time.Duration [^java.time.Duration this2832 ^java.time.Duration java-time-Duration2833] (.minus this2832 java-time-Duration2833)) (^java.time.Duration [^java.time.Duration this2834 ^long long2835 ^java.time.temporal.TemporalUnit java-time-temporal-TemporalUnit2836] (.minus this2834 long2835 java-time-temporal-TemporalUnit2836)))
(clojure.core/defn add-to {:arglists (quote (["java.time.Duration" "java.time.temporal.Temporal"]))} (^java.time.temporal.Temporal [^java.time.Duration this2837 ^java.time.temporal.Temporal java-time-temporal-Temporal2838] (.addTo this2837 java-time-temporal-Temporal2838)))
(clojure.core/defn plus-hours {:arglists (quote (["java.time.Duration" "long"]))} (^java.time.Duration [^java.time.Duration this2839 ^long long2840] (.plusHours this2839 long2840)))
(clojure.core/defn plus-days {:arglists (quote (["java.time.Duration" "long"]))} (^java.time.Duration [^java.time.Duration this2841 ^long long2842] (.plusDays this2841 long2842)))
(clojure.core/defn of-hours {:arglists (quote (["long"]))} (^java.time.Duration [^long long2843] (. java.time.Duration ofHours long2843)))
(clojure.core/defn to-millis {:arglists (quote (["java.time.Duration"]))} (^long [^java.time.Duration this2844] (.toMillis this2844)))
(clojure.core/defn to-hours {:arglists (quote (["java.time.Duration"]))} (^long [^java.time.Duration this2845] (.toHours this2845)))
(clojure.core/defn of-nanos {:arglists (quote (["long"]))} (^java.time.Duration [^long long2846] (. java.time.Duration ofNanos long2846)))
(clojure.core/defn of-millis {:arglists (quote (["long"]))} (^java.time.Duration [^long long2847] (. java.time.Duration ofMillis long2847)))
(clojure.core/defn negated {:arglists (quote (["java.time.Duration"]))} (^java.time.Duration [^java.time.Duration this2848] (.negated this2848)))
(clojure.core/defn abs {:arglists (quote (["java.time.Duration"]))} (^java.time.Duration [^java.time.Duration this2849] (.abs this2849)))
(clojure.core/defn between {:arglists (quote (["java.time.temporal.Temporal" "java.time.temporal.Temporal"]))} (^java.time.Duration [^java.time.temporal.Temporal java-time-temporal-Temporal2850 ^java.time.temporal.Temporal java-time-temporal-Temporal2851] (. java.time.Duration between java-time-temporal-Temporal2850 java-time-temporal-Temporal2851)))
(clojure.core/defn get-seconds {:arglists (quote (["java.time.Duration"]))} (^long [^java.time.Duration this2852] (jti/getter seconds this2852)))
(clojure.core/defn from {:arglists (quote (["java.time.temporal.TemporalAmount"]))} (^java.time.Duration [^java.time.temporal.TemporalAmount java-time-temporal-TemporalAmount2853] (. java.time.Duration from java-time-temporal-TemporalAmount2853)))
(clojure.core/defn minus-nanos {:arglists (quote (["java.time.Duration" "long"]))} (^java.time.Duration [^java.time.Duration this2854 ^long long2855] (.minusNanos this2854 long2855)))
(clojure.core/defn parse {:arglists (quote (["java.lang.CharSequence"]))} (^java.time.Duration [^java.lang.CharSequence java-lang-CharSequence2856] (. java.time.Duration parse java-lang-CharSequence2856)))
(clojure.core/defn hash-code {:arglists (quote (["java.time.Duration"]))} (^java.lang.Integer [^java.time.Duration this2857] (.hashCode this2857)))
(clojure.core/defn with-seconds {:arglists (quote (["java.time.Duration" "long"]))} (^java.time.Duration [^java.time.Duration this2858 ^long long2859] (.withSeconds this2858 long2859)))
(clojure.core/defn of-minutes {:arglists (quote (["long"]))} (^java.time.Duration [^long long2860] (. java.time.Duration ofMinutes long2860)))
(clojure.core/defn subtract-from {:arglists (quote (["java.time.Duration" "java.time.temporal.Temporal"]))} (^java.time.temporal.Temporal [^java.time.Duration this2861 ^java.time.temporal.Temporal java-time-temporal-Temporal2862] (.subtractFrom this2861 java-time-temporal-Temporal2862)))
(clojure.core/defn compare-to {:arglists (quote (["java.time.Duration" "java.lang.Object"] ["java.time.Duration" "java.time.Duration"]))} (^java.lang.Integer [this2863 G__2864] #? (:cljs (.compareTo ^java.time.Duration this2863 G__2864) :clj (clojure.core/cond (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.lang.Object") G__2864)) (clojure.core/let [G__2864 ^"java.lang.Object" G__2864] (.compareTo ^java.time.Duration this2863 G__2864)) (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.Duration") G__2864)) (clojure.core/let [G__2864 ^"java.time.Duration" G__2864] (.compareTo ^java.time.Duration this2863 G__2864)) :else (throw (java.lang.IllegalArgumentException. "no corresponding java.time method with these args"))))))
(clojure.core/defn plus-seconds {:arglists (quote (["java.time.Duration" "long"]))} (^java.time.Duration [^java.time.Duration this2865 ^long long2866] (.plusSeconds this2865 long2866)))
(clojure.core/defn get {:arglists (quote (["java.time.Duration" "java.time.temporal.TemporalUnit"]))} (^long [^java.time.Duration this2867 ^java.time.temporal.TemporalUnit java-time-temporal-TemporalUnit2868] (.get this2867 java-time-temporal-TemporalUnit2868)))
(clojure.core/defn equals {:arglists (quote (["java.time.Duration" "java.lang.Object"]))} (^java.lang.Boolean [^java.time.Duration this2869 ^java.lang.Object java-lang-Object2870] (.equals this2869 java-lang-Object2870)))
(clojure.core/defn of-seconds {:arglists (quote (["long"] ["long" "long"]))} (^java.time.Duration [^long long2871] (. java.time.Duration ofSeconds long2871)) (^java.time.Duration [^long long2872 ^long long2873] (. java.time.Duration ofSeconds long2872 long2873)))
(clojure.core/defn minus-days {:arglists (quote (["java.time.Duration" "long"]))} (^java.time.Duration [^java.time.Duration this2874 ^long long2875] (.minusDays this2874 long2875)))
(clojure.core/defn to-days {:arglists (quote (["java.time.Duration"]))} (^long [^java.time.Duration this2876] (.toDays this2876)))
