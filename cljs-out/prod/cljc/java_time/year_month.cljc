(ns cljc.java-time.year-month (:require [cljs.java-time.interop :as jti] #? (:cljs [java.time :refer [YearMonth]])) (:refer-clojure :exclude [get range format min max next name resolve]) #? (:clj (:import [java.time YearMonth])))
(clojure.core/defn length-of-year {:arglists (quote (["java.time.YearMonth"]))} (^java.lang.Integer [^java.time.YearMonth this2940] (.lengthOfYear this2940)))
(clojure.core/defn range {:arglists (quote (["java.time.YearMonth" "java.time.temporal.TemporalField"]))} (^java.time.temporal.ValueRange [^java.time.YearMonth this2941 ^java.time.temporal.TemporalField java-time-temporal-TemporalField2942] (.range this2941 java-time-temporal-TemporalField2942)))
(clojure.core/defn is-valid-day {:arglists (quote (["java.time.YearMonth" "int"]))} (^java.lang.Boolean [^java.time.YearMonth this2943 ^java.lang.Integer int2944] (.isValidDay this2943 int2944)))
(clojure.core/defn of {:arglists (quote (["int" "java.time.Month"] ["int" "int"]))} (^java.time.YearMonth [G__2946 G__2947] #? (:cljs (. java.time.YearMonth of G__2946 G__2947) :clj (clojure.core/cond (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.lang.Number") G__2946) (clojure.core/instance? (java.lang.Class/forName "java.time.Month") G__2947)) (clojure.core/let [G__2946 (clojure.core/int G__2946) G__2947 ^"java.time.Month" G__2947] (. java.time.YearMonth of G__2946 G__2947)) (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.lang.Number") G__2946) (clojure.core/instance? (java.lang.Class/forName "java.lang.Number") G__2947)) (clojure.core/let [G__2946 (clojure.core/int G__2946) G__2947 (clojure.core/int G__2947)] (. java.time.YearMonth of G__2946 G__2947)) :else (throw (java.lang.IllegalArgumentException. "no corresponding java.time method with these args"))))))
(clojure.core/defn with-month {:arglists (quote (["java.time.YearMonth" "int"]))} (^java.time.YearMonth [^java.time.YearMonth this2948 ^java.lang.Integer int2949] (.withMonth this2948 int2949)))
(clojure.core/defn at-day {:arglists (quote (["java.time.YearMonth" "int"]))} (^java.time.LocalDate [^java.time.YearMonth this2950 ^java.lang.Integer int2951] (.atDay this2950 int2951)))
(clojure.core/defn get-year {:arglists (quote (["java.time.YearMonth"]))} (^java.lang.Integer [^java.time.YearMonth this2952] (jti/getter year this2952)))
(clojure.core/defn plus {:arglists (quote (["java.time.YearMonth" "java.time.temporal.TemporalAmount"] ["java.time.YearMonth" "long" "java.time.temporal.TemporalUnit"] ["java.time.YearMonth" "java.time.temporal.TemporalAmount"] ["java.time.YearMonth" "long" "java.time.temporal.TemporalUnit"]))} (^java.lang.Object [this2953 G__2954] #? (:cljs (.plus ^java.time.YearMonth this2953 G__2954) :clj (clojure.core/cond (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.temporal.TemporalAmount") G__2954)) (clojure.core/let [G__2954 ^"java.time.temporal.TemporalAmount" G__2954] (.plus ^java.time.YearMonth this2953 G__2954)) (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.temporal.TemporalAmount") G__2954)) (clojure.core/let [G__2954 ^"java.time.temporal.TemporalAmount" G__2954] (.plus ^java.time.YearMonth this2953 G__2954)) :else (throw (java.lang.IllegalArgumentException. "no corresponding java.time method with these args"))))) (^java.lang.Object [this2955 G__2956 G__2957] #? (:cljs (.plus ^java.time.YearMonth this2955 G__2956 G__2957) :clj (clojure.core/cond (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.lang.Long") G__2956) (clojure.core/instance? (java.lang.Class/forName "java.time.temporal.TemporalUnit") G__2957)) (clojure.core/let [G__2956 (clojure.core/long G__2956) G__2957 ^"java.time.temporal.TemporalUnit" G__2957] (.plus ^java.time.YearMonth this2955 G__2956 G__2957)) (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.lang.Long") G__2956) (clojure.core/instance? (java.lang.Class/forName "java.time.temporal.TemporalUnit") G__2957)) (clojure.core/let [G__2956 (clojure.core/long G__2956) G__2957 ^"java.time.temporal.TemporalUnit" G__2957] (.plus ^java.time.YearMonth this2955 G__2956 G__2957)) :else (throw (java.lang.IllegalArgumentException. "no corresponding java.time method with these args"))))))
(clojure.core/defn is-leap-year {:arglists (quote (["java.time.YearMonth"]))} (^java.lang.Boolean [^java.time.YearMonth this2958] (.isLeapYear this2958)))
(clojure.core/defn query {:arglists (quote (["java.time.YearMonth" "java.time.temporal.TemporalQuery"]))} (^java.lang.Object [^java.time.YearMonth this2959 ^java.time.temporal.TemporalQuery java-time-temporal-TemporalQuery2960] (.query this2959 java-time-temporal-TemporalQuery2960)))
(clojure.core/defn to-string {:arglists (quote (["java.time.YearMonth"]))} (^java.lang.String [^java.time.YearMonth this2961] (.toString this2961)))
(clojure.core/defn plus-months {:arglists (quote (["java.time.YearMonth" "long"]))} (^java.time.YearMonth [^java.time.YearMonth this2962 ^long long2963] (.plusMonths this2962 long2963)))
(clojure.core/defn is-before {:arglists (quote (["java.time.YearMonth" "java.time.YearMonth"]))} (^java.lang.Boolean [^java.time.YearMonth this2964 ^java.time.YearMonth java-time-YearMonth2965] (.isBefore this2964 java-time-YearMonth2965)))
(clojure.core/defn minus-months {:arglists (quote (["java.time.YearMonth" "long"]))} (^java.time.YearMonth [^java.time.YearMonth this2966 ^long long2967] (.minusMonths this2966 long2967)))
(clojure.core/defn minus {:arglists (quote (["java.time.YearMonth" "java.time.temporal.TemporalAmount"] ["java.time.YearMonth" "long" "java.time.temporal.TemporalUnit"] ["java.time.YearMonth" "long" "java.time.temporal.TemporalUnit"] ["java.time.YearMonth" "java.time.temporal.TemporalAmount"]))} (^java.lang.Object [this2968 G__2969] #? (:cljs (.minus ^java.time.YearMonth this2968 G__2969) :clj (clojure.core/cond (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.temporal.TemporalAmount") G__2969)) (clojure.core/let [G__2969 ^"java.time.temporal.TemporalAmount" G__2969] (.minus ^java.time.YearMonth this2968 G__2969)) (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.temporal.TemporalAmount") G__2969)) (clojure.core/let [G__2969 ^"java.time.temporal.TemporalAmount" G__2969] (.minus ^java.time.YearMonth this2968 G__2969)) :else (throw (java.lang.IllegalArgumentException. "no corresponding java.time method with these args"))))) (^java.lang.Object [this2970 G__2971 G__2972] #? (:cljs (.minus ^java.time.YearMonth this2970 G__2971 G__2972) :clj (clojure.core/cond (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.lang.Long") G__2971) (clojure.core/instance? (java.lang.Class/forName "java.time.temporal.TemporalUnit") G__2972)) (clojure.core/let [G__2971 (clojure.core/long G__2971) G__2972 ^"java.time.temporal.TemporalUnit" G__2972] (.minus ^java.time.YearMonth this2970 G__2971 G__2972)) (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.lang.Long") G__2971) (clojure.core/instance? (java.lang.Class/forName "java.time.temporal.TemporalUnit") G__2972)) (clojure.core/let [G__2971 (clojure.core/long G__2971) G__2972 ^"java.time.temporal.TemporalUnit" G__2972] (.minus ^java.time.YearMonth this2970 G__2971 G__2972)) :else (throw (java.lang.IllegalArgumentException. "no corresponding java.time method with these args"))))))
(clojure.core/defn get-long {:arglists (quote (["java.time.YearMonth" "java.time.temporal.TemporalField"]))} (^long [^java.time.YearMonth this2973 ^java.time.temporal.TemporalField java-time-temporal-TemporalField2974] (.getLong this2973 java-time-temporal-TemporalField2974)))
(clojure.core/defn with-year {:arglists (quote (["java.time.YearMonth" "int"]))} (^java.time.YearMonth [^java.time.YearMonth this2975 ^java.lang.Integer int2976] (.withYear this2975 int2976)))
(clojure.core/defn at-end-of-month {:arglists (quote (["java.time.YearMonth"]))} (^java.time.LocalDate [^java.time.YearMonth this2977] (.atEndOfMonth this2977)))
(clojure.core/defn length-of-month {:arglists (quote (["java.time.YearMonth"]))} (^java.lang.Integer [^java.time.YearMonth this2978] (.lengthOfMonth this2978)))
(clojure.core/defn until {:arglists (quote (["java.time.YearMonth" "java.time.temporal.Temporal" "java.time.temporal.TemporalUnit"]))} (^long [^java.time.YearMonth this2979 ^java.time.temporal.Temporal java-time-temporal-Temporal2980 ^java.time.temporal.TemporalUnit java-time-temporal-TemporalUnit2981] (.until this2979 java-time-temporal-Temporal2980 java-time-temporal-TemporalUnit2981)))
(clojure.core/defn from {:arglists (quote (["java.time.temporal.TemporalAccessor"]))} (^java.time.YearMonth [^java.time.temporal.TemporalAccessor java-time-temporal-TemporalAccessor2982] (. java.time.YearMonth from java-time-temporal-TemporalAccessor2982)))
(clojure.core/defn is-after {:arglists (quote (["java.time.YearMonth" "java.time.YearMonth"]))} (^java.lang.Boolean [^java.time.YearMonth this2983 ^java.time.YearMonth java-time-YearMonth2984] (.isAfter this2983 java-time-YearMonth2984)))
(clojure.core/defn is-supported {:arglists (quote (["java.time.YearMonth" "java.time.temporal.TemporalUnit"] ["java.time.YearMonth" "java.time.temporal.TemporalField"]))} (^java.lang.Boolean [this2985 G__2986] #? (:cljs (.isSupported ^java.time.YearMonth this2985 G__2986) :clj (clojure.core/cond (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.temporal.TemporalUnit") G__2986)) (clojure.core/let [G__2986 ^"java.time.temporal.TemporalUnit" G__2986] (.isSupported ^java.time.YearMonth this2985 G__2986)) (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.temporal.TemporalField") G__2986)) (clojure.core/let [G__2986 ^"java.time.temporal.TemporalField" G__2986] (.isSupported ^java.time.YearMonth this2985 G__2986)) :else (throw (java.lang.IllegalArgumentException. "no corresponding java.time method with these args"))))))
(clojure.core/defn minus-years {:arglists (quote (["java.time.YearMonth" "long"]))} (^java.time.YearMonth [^java.time.YearMonth this2987 ^long long2988] (.minusYears this2987 long2988)))
(clojure.core/defn parse {:arglists (quote (["java.lang.CharSequence"] ["java.lang.CharSequence" "java.time.format.DateTimeFormatter"]))} (^java.time.YearMonth [^java.lang.CharSequence java-lang-CharSequence2989] (. java.time.YearMonth parse java-lang-CharSequence2989)) (^java.time.YearMonth [^java.lang.CharSequence java-lang-CharSequence2990 ^java.time.format.DateTimeFormatter java-time-format-DateTimeFormatter2991] (. java.time.YearMonth parse java-lang-CharSequence2990 java-time-format-DateTimeFormatter2991)))
(clojure.core/defn hash-code {:arglists (quote (["java.time.YearMonth"]))} (^java.lang.Integer [^java.time.YearMonth this2992] (.hashCode this2992)))
(clojure.core/defn adjust-into {:arglists (quote (["java.time.YearMonth" "java.time.temporal.Temporal"]))} (^java.time.temporal.Temporal [^java.time.YearMonth this2993 ^java.time.temporal.Temporal java-time-temporal-Temporal2994] (.adjustInto this2993 java-time-temporal-Temporal2994)))
(clojure.core/defn with {:arglists (quote (["java.time.YearMonth" "java.time.temporal.TemporalAdjuster"] ["java.time.YearMonth" "java.time.temporal.TemporalField" "long"] ["java.time.YearMonth" "java.time.temporal.TemporalAdjuster"] ["java.time.YearMonth" "java.time.temporal.TemporalField" "long"]))} (^java.lang.Object [this2995 G__2996] #? (:cljs (.with ^java.time.YearMonth this2995 G__2996) :clj (clojure.core/cond (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.temporal.TemporalAdjuster") G__2996)) (clojure.core/let [G__2996 ^"java.time.temporal.TemporalAdjuster" G__2996] (.with ^java.time.YearMonth this2995 G__2996)) (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.temporal.TemporalAdjuster") G__2996)) (clojure.core/let [G__2996 ^"java.time.temporal.TemporalAdjuster" G__2996] (.with ^java.time.YearMonth this2995 G__2996)) :else (throw (java.lang.IllegalArgumentException. "no corresponding java.time method with these args"))))) (^java.lang.Object [this2997 G__2998 G__2999] #? (:cljs (.with ^java.time.YearMonth this2997 G__2998 G__2999) :clj (clojure.core/cond (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.temporal.TemporalField") G__2998) (clojure.core/instance? (java.lang.Class/forName "java.lang.Long") G__2999)) (clojure.core/let [G__2998 ^"java.time.temporal.TemporalField" G__2998 G__2999 (clojure.core/long G__2999)] (.with ^java.time.YearMonth this2997 G__2998 G__2999)) (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.temporal.TemporalField") G__2998) (clojure.core/instance? (java.lang.Class/forName "java.lang.Long") G__2999)) (clojure.core/let [G__2998 ^"java.time.temporal.TemporalField" G__2998 G__2999 (clojure.core/long G__2999)] (.with ^java.time.YearMonth this2997 G__2998 G__2999)) :else (throw (java.lang.IllegalArgumentException. "no corresponding java.time method with these args"))))))
(clojure.core/defn now {:arglists (quote ([] ["java.time.ZoneId"] ["java.time.Clock"]))} (^java.time.YearMonth [] (. java.time.YearMonth now)) (^java.time.YearMonth [G__3001] #? (:cljs (. java.time.YearMonth now G__3001) :clj (clojure.core/cond (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.ZoneId") G__3001)) (clojure.core/let [G__3001 ^"java.time.ZoneId" G__3001] (. java.time.YearMonth now G__3001)) (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.Clock") G__3001)) (clojure.core/let [G__3001 ^"java.time.Clock" G__3001] (. java.time.YearMonth now G__3001)) :else (throw (java.lang.IllegalArgumentException. "no corresponding java.time method with these args"))))))
(clojure.core/defn get-month-value {:arglists (quote (["java.time.YearMonth"]))} (^java.lang.Integer [^java.time.YearMonth this3002] (jti/getter monthValue this3002)))
(clojure.core/defn compare-to {:arglists (quote (["java.time.YearMonth" "java.lang.Object"] ["java.time.YearMonth" "java.time.YearMonth"]))} (^java.lang.Integer [this3003 G__3004] #? (:cljs (.compareTo ^java.time.YearMonth this3003 G__3004) :clj (clojure.core/cond (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.lang.Object") G__3004)) (clojure.core/let [G__3004 ^"java.lang.Object" G__3004] (.compareTo ^java.time.YearMonth this3003 G__3004)) (clojure.core/and (clojure.core/instance? (java.lang.Class/forName "java.time.YearMonth") G__3004)) (clojure.core/let [G__3004 ^"java.time.YearMonth" G__3004] (.compareTo ^java.time.YearMonth this3003 G__3004)) :else (throw (java.lang.IllegalArgumentException. "no corresponding java.time method with these args"))))))
(clojure.core/defn get-month {:arglists (quote (["java.time.YearMonth"]))} (^java.time.Month [^java.time.YearMonth this3005] (jti/getter month this3005)))
(clojure.core/defn get {:arglists (quote (["java.time.YearMonth" "java.time.temporal.TemporalField"]))} (^java.lang.Integer [^java.time.YearMonth this3006 ^java.time.temporal.TemporalField java-time-temporal-TemporalField3007] (.get this3006 java-time-temporal-TemporalField3007)))
(clojure.core/defn equals {:arglists (quote (["java.time.YearMonth" "java.lang.Object"]))} (^java.lang.Boolean [^java.time.YearMonth this3008 ^java.lang.Object java-lang-Object3009] (.equals this3008 java-lang-Object3009)))
(clojure.core/defn format {:arglists (quote (["java.time.YearMonth" "java.time.format.DateTimeFormatter"]))} (^java.lang.String [^java.time.YearMonth this3010 ^java.time.format.DateTimeFormatter java-time-format-DateTimeFormatter3011] (.format this3010 java-time-format-DateTimeFormatter3011)))
(clojure.core/defn plus-years {:arglists (quote (["java.time.YearMonth" "long"]))} (^java.time.YearMonth [^java.time.YearMonth this3012 ^long long3013] (.plusYears this3012 long3013)))
