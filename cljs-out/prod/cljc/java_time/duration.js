// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljc.java_time.duration');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.duration.zero = java.time.Duration.ZERO;
cljc.java_time.duration.minus_minutes = (function cljc$java_time$duration$minus_minutes(this2797,long2798){
return this2797.minusMinutes(long2798);
});
cljc.java_time.duration.to_nanos = (function cljc$java_time$duration$to_nanos(this2799){
return this2799.toNanos();
});
cljc.java_time.duration.minus_millis = (function cljc$java_time$duration$minus_millis(this2800,long2801){
return this2800.minusMillis(long2801);
});
cljc.java_time.duration.minus_hours = (function cljc$java_time$duration$minus_hours(this2802,long2803){
return this2802.minusHours(long2803);
});
cljc.java_time.duration.of_days = (function cljc$java_time$duration$of_days(long2804){
return java.time.Duration.ofDays(long2804);
});
cljc.java_time.duration.is_negative = (function cljc$java_time$duration$is_negative(this2805){
return this2805.isNegative();
});
cljc.java_time.duration.of = (function cljc$java_time$duration$of(long2806,java_time_temporal_TemporalUnit2807){
return java.time.Duration.of(long2806,java_time_temporal_TemporalUnit2807);
});
cljc.java_time.duration.is_zero = (function cljc$java_time$duration$is_zero(this2808){
return this2808.isZero();
});
cljc.java_time.duration.multiplied_by = (function cljc$java_time$duration$multiplied_by(this2809,long2810){
return this2809.multipliedBy(long2810);
});
cljc.java_time.duration.with_nanos = (function cljc$java_time$duration$with_nanos(this2811,int2812){
return this2811.withNanos(int2812);
});
cljc.java_time.duration.get_units = (function cljc$java_time$duration$get_units(this2813){
return this2813.units();
});
cljc.java_time.duration.get_nano = (function cljc$java_time$duration$get_nano(this2814){
return this2814.nano();
});
cljc.java_time.duration.plus_millis = (function cljc$java_time$duration$plus_millis(this2815,long2816){
return this2815.plusMillis(long2816);
});
cljc.java_time.duration.to_minutes = (function cljc$java_time$duration$to_minutes(this2817){
return this2817.toMinutes();
});
cljc.java_time.duration.minus_seconds = (function cljc$java_time$duration$minus_seconds(this2818,long2819){
return this2818.minusSeconds(long2819);
});
cljc.java_time.duration.plus_nanos = (function cljc$java_time$duration$plus_nanos(this2820,long2821){
return this2820.plusNanos(long2821);
});
cljc.java_time.duration.plus = (function cljc$java_time$duration$plus(var_args){
var G__20599 = arguments.length;
switch (G__20599) {
case 2:
return cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$2 = (function (this2822,java_time_Duration2823){
return this2822.plus(java_time_Duration2823);
});

cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$3 = (function (this2824,long2825,java_time_temporal_TemporalUnit2826){
return this2824.plus(long2825,java_time_temporal_TemporalUnit2826);
});

cljc.java_time.duration.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.duration.divided_by = (function cljc$java_time$duration$divided_by(this2827,long2828){
return this2827.dividedBy(long2828);
});
cljc.java_time.duration.plus_minutes = (function cljc$java_time$duration$plus_minutes(this2829,long2830){
return this2829.plusMinutes(long2830);
});
cljc.java_time.duration.to_string = (function cljc$java_time$duration$to_string(this2831){
return this2831.toString();
});
cljc.java_time.duration.minus = (function cljc$java_time$duration$minus(var_args){
var G__20602 = arguments.length;
switch (G__20602) {
case 2:
return cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$2 = (function (this2832,java_time_Duration2833){
return this2832.minus(java_time_Duration2833);
});

cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$3 = (function (this2834,long2835,java_time_temporal_TemporalUnit2836){
return this2834.minus(long2835,java_time_temporal_TemporalUnit2836);
});

cljc.java_time.duration.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.duration.add_to = (function cljc$java_time$duration$add_to(this2837,java_time_temporal_Temporal2838){
return this2837.addTo(java_time_temporal_Temporal2838);
});
cljc.java_time.duration.plus_hours = (function cljc$java_time$duration$plus_hours(this2839,long2840){
return this2839.plusHours(long2840);
});
cljc.java_time.duration.plus_days = (function cljc$java_time$duration$plus_days(this2841,long2842){
return this2841.plusDays(long2842);
});
cljc.java_time.duration.of_hours = (function cljc$java_time$duration$of_hours(long2843){
return java.time.Duration.ofHours(long2843);
});
cljc.java_time.duration.to_millis = (function cljc$java_time$duration$to_millis(this2844){
return this2844.toMillis();
});
cljc.java_time.duration.to_hours = (function cljc$java_time$duration$to_hours(this2845){
return this2845.toHours();
});
cljc.java_time.duration.of_nanos = (function cljc$java_time$duration$of_nanos(long2846){
return java.time.Duration.ofNanos(long2846);
});
cljc.java_time.duration.of_millis = (function cljc$java_time$duration$of_millis(long2847){
return java.time.Duration.ofMillis(long2847);
});
cljc.java_time.duration.negated = (function cljc$java_time$duration$negated(this2848){
return this2848.negated();
});
cljc.java_time.duration.abs = (function cljc$java_time$duration$abs(this2849){
return this2849.abs();
});
cljc.java_time.duration.between = (function cljc$java_time$duration$between(java_time_temporal_Temporal2850,java_time_temporal_Temporal2851){
return java.time.Duration.between(java_time_temporal_Temporal2850,java_time_temporal_Temporal2851);
});
cljc.java_time.duration.get_seconds = (function cljc$java_time$duration$get_seconds(this2852){
return this2852.seconds();
});
cljc.java_time.duration.from = (function cljc$java_time$duration$from(java_time_temporal_TemporalAmount2853){
return java.time.Duration.from(java_time_temporal_TemporalAmount2853);
});
cljc.java_time.duration.minus_nanos = (function cljc$java_time$duration$minus_nanos(this2854,long2855){
return this2854.minusNanos(long2855);
});
cljc.java_time.duration.parse = (function cljc$java_time$duration$parse(java_lang_CharSequence2856){
return java.time.Duration.parse(java_lang_CharSequence2856);
});
cljc.java_time.duration.hash_code = (function cljc$java_time$duration$hash_code(this2857){
return this2857.hashCode();
});
cljc.java_time.duration.with_seconds = (function cljc$java_time$duration$with_seconds(this2858,long2859){
return this2858.withSeconds(long2859);
});
cljc.java_time.duration.of_minutes = (function cljc$java_time$duration$of_minutes(long2860){
return java.time.Duration.ofMinutes(long2860);
});
cljc.java_time.duration.subtract_from = (function cljc$java_time$duration$subtract_from(this2861,java_time_temporal_Temporal2862){
return this2861.subtractFrom(java_time_temporal_Temporal2862);
});
cljc.java_time.duration.compare_to = (function cljc$java_time$duration$compare_to(this2863,G__2864){
return this2863.compareTo(G__2864);
});
cljc.java_time.duration.plus_seconds = (function cljc$java_time$duration$plus_seconds(this2865,long2866){
return this2865.plusSeconds(long2866);
});
cljc.java_time.duration.get = (function cljc$java_time$duration$get(this2867,java_time_temporal_TemporalUnit2868){
return this2867.get(java_time_temporal_TemporalUnit2868);
});
cljc.java_time.duration.equals = (function cljc$java_time$duration$equals(this2869,java_lang_Object2870){
return this2869.equals(java_lang_Object2870);
});
cljc.java_time.duration.of_seconds = (function cljc$java_time$duration$of_seconds(var_args){
var G__20605 = arguments.length;
switch (G__20605) {
case 1:
return cljc.java_time.duration.of_seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.duration.of_seconds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.duration.of_seconds.cljs$core$IFn$_invoke$arity$1 = (function (long2871){
return java.time.Duration.ofSeconds(long2871);
});

cljc.java_time.duration.of_seconds.cljs$core$IFn$_invoke$arity$2 = (function (long2872,long2873){
return java.time.Duration.ofSeconds(long2872,long2873);
});

cljc.java_time.duration.of_seconds.cljs$lang$maxFixedArity = 2;

cljc.java_time.duration.minus_days = (function cljc$java_time$duration$minus_days(this2874,long2875){
return this2874.minusDays(long2875);
});
cljc.java_time.duration.to_days = (function cljc$java_time$duration$to_days(this2876){
return this2876.toDays();
});
