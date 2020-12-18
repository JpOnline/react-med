// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.year_month');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.year_month.length_of_year = (function cljc$java_time$year_month$length_of_year(this2940){
return this2940.lengthOfYear();
});
cljc.java_time.year_month.range = (function cljc$java_time$year_month$range(this2941,java_time_temporal_TemporalField2942){
return this2941.range(java_time_temporal_TemporalField2942);
});
cljc.java_time.year_month.is_valid_day = (function cljc$java_time$year_month$is_valid_day(this2943,int2944){
return this2943.isValidDay(int2944);
});
cljc.java_time.year_month.of = (function cljc$java_time$year_month$of(G__2946,G__2947){
return java.time.YearMonth.of(G__2946,G__2947);
});
cljc.java_time.year_month.with_month = (function cljc$java_time$year_month$with_month(this2948,int2949){
return this2948.withMonth(int2949);
});
cljc.java_time.year_month.at_day = (function cljc$java_time$year_month$at_day(this2950,int2951){
return this2950.atDay(int2951);
});
cljc.java_time.year_month.get_year = (function cljc$java_time$year_month$get_year(this2952){
return this2952.year();
});
cljc.java_time.year_month.plus = (function cljc$java_time$year_month$plus(var_args){
var G__15796 = arguments.length;
switch (G__15796) {
case 2:
return cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$2 = (function (this2953,G__2954){
return this2953.plus(G__2954);
});

cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$3 = (function (this2955,G__2956,G__2957){
return this2955.plus(G__2956,G__2957);
});

cljc.java_time.year_month.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.year_month.is_leap_year = (function cljc$java_time$year_month$is_leap_year(this2958){
return this2958.isLeapYear();
});
cljc.java_time.year_month.query = (function cljc$java_time$year_month$query(this2959,java_time_temporal_TemporalQuery2960){
return this2959.query(java_time_temporal_TemporalQuery2960);
});
cljc.java_time.year_month.to_string = (function cljc$java_time$year_month$to_string(this2961){
return this2961.toString();
});
cljc.java_time.year_month.plus_months = (function cljc$java_time$year_month$plus_months(this2962,long2963){
return this2962.plusMonths(long2963);
});
cljc.java_time.year_month.is_before = (function cljc$java_time$year_month$is_before(this2964,java_time_YearMonth2965){
return this2964.isBefore(java_time_YearMonth2965);
});
cljc.java_time.year_month.minus_months = (function cljc$java_time$year_month$minus_months(this2966,long2967){
return this2966.minusMonths(long2967);
});
cljc.java_time.year_month.minus = (function cljc$java_time$year_month$minus(var_args){
var G__15799 = arguments.length;
switch (G__15799) {
case 2:
return cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$2 = (function (this2968,G__2969){
return this2968.minus(G__2969);
});

cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$3 = (function (this2970,G__2971,G__2972){
return this2970.minus(G__2971,G__2972);
});

cljc.java_time.year_month.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.year_month.get_long = (function cljc$java_time$year_month$get_long(this2973,java_time_temporal_TemporalField2974){
return this2973.getLong(java_time_temporal_TemporalField2974);
});
cljc.java_time.year_month.with_year = (function cljc$java_time$year_month$with_year(this2975,int2976){
return this2975.withYear(int2976);
});
cljc.java_time.year_month.at_end_of_month = (function cljc$java_time$year_month$at_end_of_month(this2977){
return this2977.atEndOfMonth();
});
cljc.java_time.year_month.length_of_month = (function cljc$java_time$year_month$length_of_month(this2978){
return this2978.lengthOfMonth();
});
cljc.java_time.year_month.until = (function cljc$java_time$year_month$until(this2979,java_time_temporal_Temporal2980,java_time_temporal_TemporalUnit2981){
return this2979.until(java_time_temporal_Temporal2980,java_time_temporal_TemporalUnit2981);
});
cljc.java_time.year_month.from = (function cljc$java_time$year_month$from(java_time_temporal_TemporalAccessor2982){
return java.time.YearMonth.from(java_time_temporal_TemporalAccessor2982);
});
cljc.java_time.year_month.is_after = (function cljc$java_time$year_month$is_after(this2983,java_time_YearMonth2984){
return this2983.isAfter(java_time_YearMonth2984);
});
cljc.java_time.year_month.is_supported = (function cljc$java_time$year_month$is_supported(this2985,G__2986){
return this2985.isSupported(G__2986);
});
cljc.java_time.year_month.minus_years = (function cljc$java_time$year_month$minus_years(this2987,long2988){
return this2987.minusYears(long2988);
});
cljc.java_time.year_month.parse = (function cljc$java_time$year_month$parse(var_args){
var G__15802 = arguments.length;
switch (G__15802) {
case 1:
return cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence2989){
return java.time.YearMonth.parse(java_lang_CharSequence2989);
});

cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence2990,java_time_format_DateTimeFormatter2991){
return java.time.YearMonth.parse(java_lang_CharSequence2990,java_time_format_DateTimeFormatter2991);
});

cljc.java_time.year_month.parse.cljs$lang$maxFixedArity = 2;

cljc.java_time.year_month.hash_code = (function cljc$java_time$year_month$hash_code(this2992){
return this2992.hashCode();
});
cljc.java_time.year_month.adjust_into = (function cljc$java_time$year_month$adjust_into(this2993,java_time_temporal_Temporal2994){
return this2993.adjustInto(java_time_temporal_Temporal2994);
});
cljc.java_time.year_month.with$ = (function cljc$java_time$year_month$with(var_args){
var G__15805 = arguments.length;
switch (G__15805) {
case 2:
return cljc.java_time.year_month.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.year_month.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year_month.with$.cljs$core$IFn$_invoke$arity$2 = (function (this2995,G__2996){
return this2995.with(G__2996);
});

cljc.java_time.year_month.with$.cljs$core$IFn$_invoke$arity$3 = (function (this2997,G__2998,G__2999){
return this2997.with(G__2998,G__2999);
});

cljc.java_time.year_month.with$.cljs$lang$maxFixedArity = 3;

cljc.java_time.year_month.now = (function cljc$java_time$year_month$now(var_args){
var G__15808 = arguments.length;
switch (G__15808) {
case 0:
return cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.YearMonth.now();
});

cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$1 = (function (G__3001){
return java.time.YearMonth.now(G__3001);
});

cljc.java_time.year_month.now.cljs$lang$maxFixedArity = 1;

cljc.java_time.year_month.get_month_value = (function cljc$java_time$year_month$get_month_value(this3002){
return this3002.monthValue();
});
cljc.java_time.year_month.compare_to = (function cljc$java_time$year_month$compare_to(this3003,G__3004){
return this3003.compareTo(G__3004);
});
cljc.java_time.year_month.get_month = (function cljc$java_time$year_month$get_month(this3005){
return this3005.month();
});
cljc.java_time.year_month.get = (function cljc$java_time$year_month$get(this3006,java_time_temporal_TemporalField3007){
return this3006.get(java_time_temporal_TemporalField3007);
});
cljc.java_time.year_month.equals = (function cljc$java_time$year_month$equals(this3008,java_lang_Object3009){
return this3008.equals(java_lang_Object3009);
});
cljc.java_time.year_month.format = (function cljc$java_time$year_month$format(this3010,java_time_format_DateTimeFormatter3011){
return this3010.format(java_time_format_DateTimeFormatter3011);
});
cljc.java_time.year_month.plus_years = (function cljc$java_time$year_month$plus_years(this3012,long3013){
return this3012.plusYears(long3013);
});

//# sourceMappingURL=year_month.js.map
