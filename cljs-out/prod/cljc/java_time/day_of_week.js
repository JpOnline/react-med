// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.day_of_week');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.day_of_week.saturday = java.time.DayOfWeek.SATURDAY;
cljc.java_time.day_of_week.thursday = java.time.DayOfWeek.THURSDAY;
cljc.java_time.day_of_week.friday = java.time.DayOfWeek.FRIDAY;
cljc.java_time.day_of_week.wednesday = java.time.DayOfWeek.WEDNESDAY;
cljc.java_time.day_of_week.sunday = java.time.DayOfWeek.SUNDAY;
cljc.java_time.day_of_week.monday = java.time.DayOfWeek.MONDAY;
cljc.java_time.day_of_week.tuesday = java.time.DayOfWeek.TUESDAY;
cljc.java_time.day_of_week.range = (function cljc$java_time$day_of_week$range(this2581,java_time_temporal_TemporalField2582){
return this2581.range(java_time_temporal_TemporalField2582);
});
cljc.java_time.day_of_week.values = (function cljc$java_time$day_of_week$values(){
return java.time.DayOfWeek.values();
});
cljc.java_time.day_of_week.value_of = (function cljc$java_time$day_of_week$value_of(var_args){
var G__15817 = arguments.length;
switch (G__15817) {
case 1:
return cljc.java_time.day_of_week.value_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.day_of_week.value_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.day_of_week.value_of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String2583){
return java.time.DayOfWeek.valueOf(java_lang_String2583);
});

cljc.java_time.day_of_week.value_of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_Class2584,java_lang_String2585){
return java.time.DayOfWeek.valueOf(java_lang_Class2584,java_lang_String2585);
});

cljc.java_time.day_of_week.value_of.cljs$lang$maxFixedArity = 2;

cljc.java_time.day_of_week.of = (function cljc$java_time$day_of_week$of(int2586){
return java.time.DayOfWeek.of(int2586);
});
cljc.java_time.day_of_week.ordinal = (function cljc$java_time$day_of_week$ordinal(this2587){
return this2587.ordinal();
});
cljc.java_time.day_of_week.plus = (function cljc$java_time$day_of_week$plus(this2588,long2589){
return this2588.plus(long2589);
});
cljc.java_time.day_of_week.query = (function cljc$java_time$day_of_week$query(this2590,java_time_temporal_TemporalQuery2591){
return this2590.query(java_time_temporal_TemporalQuery2591);
});
cljc.java_time.day_of_week.to_string = (function cljc$java_time$day_of_week$to_string(this2592){
return this2592.toString();
});
cljc.java_time.day_of_week.minus = (function cljc$java_time$day_of_week$minus(this2593,long2594){
return this2593.minus(long2594);
});
cljc.java_time.day_of_week.get_display_name = (function cljc$java_time$day_of_week$get_display_name(this2595,java_time_format_TextStyle2596,java_util_Locale2597){
return this2595.displayName(java_time_format_TextStyle2596,java_util_Locale2597);
});
cljc.java_time.day_of_week.get_value = (function cljc$java_time$day_of_week$get_value(this2598){
return this2598.value();
});
cljc.java_time.day_of_week.name = (function cljc$java_time$day_of_week$name(this2599){
return this2599.name();
});
cljc.java_time.day_of_week.get_long = (function cljc$java_time$day_of_week$get_long(this2600,java_time_temporal_TemporalField2601){
return this2600.getLong(java_time_temporal_TemporalField2601);
});
cljc.java_time.day_of_week.get_declaring_class = (function cljc$java_time$day_of_week$get_declaring_class(this2602){
return this2602.declaringClass();
});
cljc.java_time.day_of_week.from = (function cljc$java_time$day_of_week$from(java_time_temporal_TemporalAccessor2603){
return java.time.DayOfWeek.from(java_time_temporal_TemporalAccessor2603);
});
cljc.java_time.day_of_week.is_supported = (function cljc$java_time$day_of_week$is_supported(this2604,java_time_temporal_TemporalField2605){
return this2604.isSupported(java_time_temporal_TemporalField2605);
});
cljc.java_time.day_of_week.hash_code = (function cljc$java_time$day_of_week$hash_code(this2606){
return this2606.hashCode();
});
cljc.java_time.day_of_week.adjust_into = (function cljc$java_time$day_of_week$adjust_into(this2607,java_time_temporal_Temporal2608){
return this2607.adjustInto(java_time_temporal_Temporal2608);
});
cljc.java_time.day_of_week.compare_to = (function cljc$java_time$day_of_week$compare_to(this2609,G__2610){
return this2609.compareTo(G__2610);
});
cljc.java_time.day_of_week.get = (function cljc$java_time$day_of_week$get(this2611,java_time_temporal_TemporalField2612){
return this2611.get(java_time_temporal_TemporalField2612);
});
cljc.java_time.day_of_week.equals = (function cljc$java_time$day_of_week$equals(this2613,java_lang_Object2614){
return this2613.equals(java_lang_Object2614);
});

//# sourceMappingURL=day_of_week.js.map
