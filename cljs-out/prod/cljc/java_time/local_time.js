// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljc.java_time.local_time');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.local_time.max = java.time.LocalTime.MAX;
cljc.java_time.local_time.noon = java.time.LocalTime.NOON;
cljc.java_time.local_time.midnight = java.time.LocalTime.MIDNIGHT;
cljc.java_time.local_time.min = java.time.LocalTime.MIN;
cljc.java_time.local_time.minus_minutes = (function cljc$java_time$local_time$minus_minutes(this2615,long2616){
return this2615.minusMinutes(long2616);
});
cljc.java_time.local_time.truncated_to = (function cljc$java_time$local_time$truncated_to(this2617,java_time_temporal_TemporalUnit2618){
return this2617.truncatedTo(java_time_temporal_TemporalUnit2618);
});
cljc.java_time.local_time.range = (function cljc$java_time$local_time$range(this2619,java_time_temporal_TemporalField2620){
return this2619.range(java_time_temporal_TemporalField2620);
});
cljc.java_time.local_time.get_hour = (function cljc$java_time$local_time$get_hour(this2621){
return this2621.hour();
});
cljc.java_time.local_time.at_offset = (function cljc$java_time$local_time$at_offset(this2622,java_time_ZoneOffset2623){
return this2622.atOffset(java_time_ZoneOffset2623);
});
cljc.java_time.local_time.minus_hours = (function cljc$java_time$local_time$minus_hours(this2624,long2625){
return this2624.minusHours(long2625);
});
cljc.java_time.local_time.of = (function cljc$java_time$local_time$of(var_args){
var G__20459 = arguments.length;
switch (G__20459) {
case 3:
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$3 = (function (int2626,int2627,int2628){
return java.time.LocalTime.of(int2626,int2627,int2628);
});

cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$4 = (function (int2629,int2630,int2631,int2632){
return java.time.LocalTime.of(int2629,int2630,int2631,int2632);
});

cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2 = (function (int2633,int2634){
return java.time.LocalTime.of(int2633,int2634);
});

cljc.java_time.local_time.of.cljs$lang$maxFixedArity = 4;

cljc.java_time.local_time.get_nano = (function cljc$java_time$local_time$get_nano(this2635){
return this2635.nano();
});
cljc.java_time.local_time.minus_seconds = (function cljc$java_time$local_time$minus_seconds(this2636,long2637){
return this2636.minusSeconds(long2637);
});
cljc.java_time.local_time.get_second = (function cljc$java_time$local_time$get_second(this2638){
return this2638.second();
});
cljc.java_time.local_time.plus_nanos = (function cljc$java_time$local_time$plus_nanos(this2639,long2640){
return this2639.plusNanos(long2640);
});
cljc.java_time.local_time.plus = (function cljc$java_time$local_time$plus(var_args){
var G__20462 = arguments.length;
switch (G__20462) {
case 2:
return cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this2641,G__2642){
return this2641.plus(G__2642);
});

cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this2643,G__2644,G__2645){
return this2643.plus(G__2644,G__2645);
});

cljc.java_time.local_time.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_time.with_hour = (function cljc$java_time$local_time$with_hour(this2646,int2647){
return this2646.withHour(int2647);
});
cljc.java_time.local_time.with_minute = (function cljc$java_time$local_time$with_minute(this2648,int2649){
return this2648.withMinute(int2649);
});
cljc.java_time.local_time.plus_minutes = (function cljc$java_time$local_time$plus_minutes(this2650,long2651){
return this2650.plusMinutes(long2651);
});
cljc.java_time.local_time.query = (function cljc$java_time$local_time$query(this2652,java_time_temporal_TemporalQuery2653){
return this2652.query(java_time_temporal_TemporalQuery2653);
});
cljc.java_time.local_time.at_date = (function cljc$java_time$local_time$at_date(this2654,java_time_LocalDate2655){
return this2654.atDate(java_time_LocalDate2655);
});
cljc.java_time.local_time.to_string = (function cljc$java_time$local_time$to_string(this2656){
return this2656.toString();
});
cljc.java_time.local_time.is_before = (function cljc$java_time$local_time$is_before(this2657,java_time_LocalTime2658){
return this2657.isBefore(java_time_LocalTime2658);
});
cljc.java_time.local_time.minus = (function cljc$java_time$local_time$minus(var_args){
var G__20465 = arguments.length;
switch (G__20465) {
case 2:
return cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this2659,G__2660){
return this2659.minus(G__2660);
});

cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this2661,G__2662,G__2663){
return this2661.minus(G__2662,G__2663);
});

cljc.java_time.local_time.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_time.plus_hours = (function cljc$java_time$local_time$plus_hours(this2664,long2665){
return this2664.plusHours(long2665);
});
cljc.java_time.local_time.to_second_of_day = (function cljc$java_time$local_time$to_second_of_day(this2666){
return this2666.toSecondOfDay();
});
cljc.java_time.local_time.get_long = (function cljc$java_time$local_time$get_long(this2667,java_time_temporal_TemporalField2668){
return this2667.getLong(java_time_temporal_TemporalField2668);
});
cljc.java_time.local_time.with_nano = (function cljc$java_time$local_time$with_nano(this2669,int2670){
return this2669.withNano(int2670);
});
cljc.java_time.local_time.until = (function cljc$java_time$local_time$until(this2671,java_time_temporal_Temporal2672,java_time_temporal_TemporalUnit2673){
return this2671.until(java_time_temporal_Temporal2672,java_time_temporal_TemporalUnit2673);
});
cljc.java_time.local_time.of_nano_of_day = (function cljc$java_time$local_time$of_nano_of_day(long2674){
return java.time.LocalTime.ofNanoOfDay(long2674);
});
cljc.java_time.local_time.from = (function cljc$java_time$local_time$from(java_time_temporal_TemporalAccessor2675){
return java.time.LocalTime.from(java_time_temporal_TemporalAccessor2675);
});
cljc.java_time.local_time.is_after = (function cljc$java_time$local_time$is_after(this2676,java_time_LocalTime2677){
return this2676.isAfter(java_time_LocalTime2677);
});
cljc.java_time.local_time.minus_nanos = (function cljc$java_time$local_time$minus_nanos(this2678,long2679){
return this2678.minusNanos(long2679);
});
cljc.java_time.local_time.is_supported = (function cljc$java_time$local_time$is_supported(this2680,G__2681){
return this2680.isSupported(G__2681);
});
cljc.java_time.local_time.parse = (function cljc$java_time$local_time$parse(var_args){
var G__20468 = arguments.length;
switch (G__20468) {
case 2:
return cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence2682,java_time_format_DateTimeFormatter2683){
return java.time.LocalTime.parse(java_lang_CharSequence2682,java_time_format_DateTimeFormatter2683);
});

cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence2684){
return java.time.LocalTime.parse(java_lang_CharSequence2684);
});

cljc.java_time.local_time.parse.cljs$lang$maxFixedArity = 2;

cljc.java_time.local_time.with_second = (function cljc$java_time$local_time$with_second(this2685,int2686){
return this2685.withSecond(int2686);
});
cljc.java_time.local_time.get_minute = (function cljc$java_time$local_time$get_minute(this2687){
return this2687.minute();
});
cljc.java_time.local_time.hash_code = (function cljc$java_time$local_time$hash_code(this2688){
return this2688.hashCode();
});
cljc.java_time.local_time.adjust_into = (function cljc$java_time$local_time$adjust_into(this2689,java_time_temporal_Temporal2690){
return this2689.adjustInto(java_time_temporal_Temporal2690);
});
cljc.java_time.local_time.with$ = (function cljc$java_time$local_time$with(var_args){
var G__20471 = arguments.length;
switch (G__20471) {
case 2:
return cljc.java_time.local_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this2691,G__2692){
return this2691.with(G__2692);
});

cljc.java_time.local_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this2693,G__2694,G__2695){
return this2693.with(G__2694,G__2695);
});

cljc.java_time.local_time.with$.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_time.now = (function cljc$java_time$local_time$now(var_args){
var G__20474 = arguments.length;
switch (G__20474) {
case 0:
return cljc.java_time.local_time.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.local_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.LocalTime.now();
});

cljc.java_time.local_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__2697){
return java.time.LocalTime.now(G__2697);
});

cljc.java_time.local_time.now.cljs$lang$maxFixedArity = 1;

cljc.java_time.local_time.compare_to = (function cljc$java_time$local_time$compare_to(this2698,G__2699){
return this2698.compareTo(G__2699);
});
cljc.java_time.local_time.to_nano_of_day = (function cljc$java_time$local_time$to_nano_of_day(this2700){
return this2700.toNanoOfDay();
});
cljc.java_time.local_time.plus_seconds = (function cljc$java_time$local_time$plus_seconds(this2701,long2702){
return this2701.plusSeconds(long2702);
});
cljc.java_time.local_time.get = (function cljc$java_time$local_time$get(this2703,java_time_temporal_TemporalField2704){
return this2703.get(java_time_temporal_TemporalField2704);
});
cljc.java_time.local_time.of_second_of_day = (function cljc$java_time$local_time$of_second_of_day(long2705){
return java.time.LocalTime.ofSecondOfDay(long2705);
});
cljc.java_time.local_time.equals = (function cljc$java_time$local_time$equals(this2706,java_lang_Object2707){
return this2706.equals(java_lang_Object2707);
});
cljc.java_time.local_time.format = (function cljc$java_time$local_time$format(this2708,java_time_format_DateTimeFormatter2709){
return this2708.format(java_time_format_DateTimeFormatter2709);
});
