// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.month');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.month.may = java.time.Month.MAY;
cljc.java_time.month.december = java.time.Month.DECEMBER;
cljc.java_time.month.june = java.time.Month.JUNE;
cljc.java_time.month.september = java.time.Month.SEPTEMBER;
cljc.java_time.month.february = java.time.Month.FEBRUARY;
cljc.java_time.month.january = java.time.Month.JANUARY;
cljc.java_time.month.november = java.time.Month.NOVEMBER;
cljc.java_time.month.august = java.time.Month.AUGUST;
cljc.java_time.month.july = java.time.Month.JULY;
cljc.java_time.month.march = java.time.Month.MARCH;
cljc.java_time.month.october = java.time.Month.OCTOBER;
cljc.java_time.month.april = java.time.Month.APRIL;
cljc.java_time.month.range = (function cljc$java_time$month$range(this2710,java_time_temporal_TemporalField2711){
return this2710.range(java_time_temporal_TemporalField2711);
});
cljc.java_time.month.values = (function cljc$java_time$month$values(){
return java.time.Month.values();
});
cljc.java_time.month.value_of = (function cljc$java_time$month$value_of(var_args){
var G__15887 = arguments.length;
switch (G__15887) {
case 1:
return cljc.java_time.month.value_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.month.value_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.month.value_of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String2712){
return java.time.Month.valueOf(java_lang_String2712);
});

cljc.java_time.month.value_of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_Class2713,java_lang_String2714){
return java.time.Month.valueOf(java_lang_Class2713,java_lang_String2714);
});

cljc.java_time.month.value_of.cljs$lang$maxFixedArity = 2;

cljc.java_time.month.of = (function cljc$java_time$month$of(int2715){
return java.time.Month.of(int2715);
});
cljc.java_time.month.ordinal = (function cljc$java_time$month$ordinal(this2716){
return this2716.ordinal();
});
cljc.java_time.month.first_month_of_quarter = (function cljc$java_time$month$first_month_of_quarter(this2717){
return this2717.firstMonthOfQuarter();
});
cljc.java_time.month.min_length = (function cljc$java_time$month$min_length(this2718){
return this2718.minLength();
});
cljc.java_time.month.plus = (function cljc$java_time$month$plus(this2719,long2720){
return this2719.plus(long2720);
});
cljc.java_time.month.query = (function cljc$java_time$month$query(this2721,java_time_temporal_TemporalQuery2722){
return this2721.query(java_time_temporal_TemporalQuery2722);
});
cljc.java_time.month.to_string = (function cljc$java_time$month$to_string(this2723){
return this2723.toString();
});
cljc.java_time.month.first_day_of_year = (function cljc$java_time$month$first_day_of_year(this2724,boolean2725){
return this2724.firstDayOfYear(boolean2725);
});
cljc.java_time.month.minus = (function cljc$java_time$month$minus(this2726,long2727){
return this2726.minus(long2727);
});
cljc.java_time.month.get_display_name = (function cljc$java_time$month$get_display_name(this2728,java_time_format_TextStyle2729,java_util_Locale2730){
return this2728.displayName(java_time_format_TextStyle2729,java_util_Locale2730);
});
cljc.java_time.month.get_value = (function cljc$java_time$month$get_value(this2731){
return this2731.value();
});
cljc.java_time.month.max_length = (function cljc$java_time$month$max_length(this2732){
return this2732.maxLength();
});
cljc.java_time.month.name = (function cljc$java_time$month$name(this2733){
return this2733.name();
});
cljc.java_time.month.get_long = (function cljc$java_time$month$get_long(this2734,java_time_temporal_TemporalField2735){
return this2734.getLong(java_time_temporal_TemporalField2735);
});
cljc.java_time.month.length = (function cljc$java_time$month$length(this2736,boolean2737){
return this2736.length(boolean2737);
});
cljc.java_time.month.get_declaring_class = (function cljc$java_time$month$get_declaring_class(this2738){
return this2738.declaringClass();
});
cljc.java_time.month.from = (function cljc$java_time$month$from(java_time_temporal_TemporalAccessor2739){
return java.time.Month.from(java_time_temporal_TemporalAccessor2739);
});
cljc.java_time.month.is_supported = (function cljc$java_time$month$is_supported(this2740,java_time_temporal_TemporalField2741){
return this2740.isSupported(java_time_temporal_TemporalField2741);
});
cljc.java_time.month.hash_code = (function cljc$java_time$month$hash_code(this2742){
return this2742.hashCode();
});
cljc.java_time.month.adjust_into = (function cljc$java_time$month$adjust_into(this2743,java_time_temporal_Temporal2744){
return this2743.adjustInto(java_time_temporal_Temporal2744);
});
cljc.java_time.month.compare_to = (function cljc$java_time$month$compare_to(this2745,G__2746){
return this2745.compareTo(G__2746);
});
cljc.java_time.month.get = (function cljc$java_time$month$get(this2747,java_time_temporal_TemporalField2748){
return this2747.get(java_time_temporal_TemporalField2748);
});
cljc.java_time.month.equals = (function cljc$java_time$month$equals(this2749,java_lang_Object2750){
return this2749.equals(java_lang_Object2750);
});

//# sourceMappingURL=month.js.map
