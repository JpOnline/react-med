// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.year');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.year.min_value = java.time.Year.MIN_VALUE;
cljc.java_time.year.max_value = java.time.Year.MAX_VALUE;
cljc.java_time.year.range = (function cljc$java_time$year$range(this2877,java_time_temporal_TemporalField2878){
return this2877.range(java_time_temporal_TemporalField2878);
});
cljc.java_time.year.of = (function cljc$java_time$year$of(int2879){
return java.time.Year.of(int2879);
});
cljc.java_time.year.at_day = (function cljc$java_time$year$at_day(this2880,int2881){
return this2880.atDay(int2881);
});
cljc.java_time.year.plus = (function cljc$java_time$year$plus(var_args){
var G__8416 = arguments.length;
switch (G__8416) {
case 3:
return cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$3 = (function (this2882,G__2883,G__2884){
return this2882.plus(G__2883,G__2884);
});

cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$2 = (function (this2885,G__2886){
return this2885.plus(G__2886);
});

cljc.java_time.year.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.year.is_valid_month_day = (function cljc$java_time$year$is_valid_month_day(this2887,java_time_MonthDay2888){
return this2887.isValidMonthDay(java_time_MonthDay2888);
});
cljc.java_time.year.query = (function cljc$java_time$year$query(this2889,java_time_temporal_TemporalQuery2890){
return this2889.query(java_time_temporal_TemporalQuery2890);
});
cljc.java_time.year.is_leap = (function cljc$java_time$year$is_leap(long57050){
return java.time.Year.isLeap(long57050);
});
cljc.java_time.year.to_string = (function cljc$java_time$year$to_string(this2891){
return this2891.toString();
});
cljc.java_time.year.is_before = (function cljc$java_time$year$is_before(this2892,java_time_Year2893){
return this2892.isBefore(java_time_Year2893);
});
cljc.java_time.year.minus = (function cljc$java_time$year$minus(var_args){
var G__8419 = arguments.length;
switch (G__8419) {
case 3:
return cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$3 = (function (this2894,G__2895,G__2896){
return this2894.minus(G__2895,G__2896);
});

cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$2 = (function (this2897,G__2898){
return this2897.minus(G__2898);
});

cljc.java_time.year.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.year.at_month_day = (function cljc$java_time$year$at_month_day(this2899,java_time_MonthDay2900){
return this2899.atMonthDay(java_time_MonthDay2900);
});
cljc.java_time.year.get_value = (function cljc$java_time$year$get_value(this2901){
return this2901.value();
});
cljc.java_time.year.get_long = (function cljc$java_time$year$get_long(this2902,java_time_temporal_TemporalField2903){
return this2902.getLong(java_time_temporal_TemporalField2903);
});
cljc.java_time.year.at_month = (function cljc$java_time$year$at_month(this2904,G__2905){
return this2904.atMonth(G__2905);
});
cljc.java_time.year.until = (function cljc$java_time$year$until(this2906,java_time_temporal_Temporal2907,java_time_temporal_TemporalUnit2908){
return this2906.until(java_time_temporal_Temporal2907,java_time_temporal_TemporalUnit2908);
});
cljc.java_time.year.length = (function cljc$java_time$year$length(this2909){
return this2909.length();
});
cljc.java_time.year.from = (function cljc$java_time$year$from(java_time_temporal_TemporalAccessor2910){
return java.time.Year.from(java_time_temporal_TemporalAccessor2910);
});
cljc.java_time.year.is_after = (function cljc$java_time$year$is_after(this2911,java_time_Year2912){
return this2911.isAfter(java_time_Year2912);
});
cljc.java_time.year.is_supported = (function cljc$java_time$year$is_supported(this2913,G__2914){
return this2913.isSupported(G__2914);
});
cljc.java_time.year.minus_years = (function cljc$java_time$year$minus_years(this2915,long2916){
return this2915.minusYears(long2916);
});
cljc.java_time.year.parse = (function cljc$java_time$year$parse(var_args){
var G__8422 = arguments.length;
switch (G__8422) {
case 2:
return cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence2917,java_time_format_DateTimeFormatter2918){
return java.time.Year.parse(java_lang_CharSequence2917,java_time_format_DateTimeFormatter2918);
});

cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence2919){
return java.time.Year.parse(java_lang_CharSequence2919);
});

cljc.java_time.year.parse.cljs$lang$maxFixedArity = 2;

cljc.java_time.year.hash_code = (function cljc$java_time$year$hash_code(this2920){
return this2920.hashCode();
});
cljc.java_time.year.adjust_into = (function cljc$java_time$year$adjust_into(this2921,java_time_temporal_Temporal2922){
return this2921.adjustInto(java_time_temporal_Temporal2922);
});
cljc.java_time.year.with$ = (function cljc$java_time$year$with(var_args){
var G__8425 = arguments.length;
switch (G__8425) {
case 2:
return cljc.java_time.year.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.year.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year.with$.cljs$core$IFn$_invoke$arity$2 = (function (this2923,G__2924){
return this2923.with(G__2924);
});

cljc.java_time.year.with$.cljs$core$IFn$_invoke$arity$3 = (function (this2925,G__2926,G__2927){
return this2925.with(G__2926,G__2927);
});

cljc.java_time.year.with$.cljs$lang$maxFixedArity = 3;

cljc.java_time.year.now = (function cljc$java_time$year$now(var_args){
var G__8428 = arguments.length;
switch (G__8428) {
case 0:
return cljc.java_time.year.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.year.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.Year.now();
});

cljc.java_time.year.now.cljs$core$IFn$_invoke$arity$1 = (function (G__2929){
return java.time.Year.now(G__2929);
});

cljc.java_time.year.now.cljs$lang$maxFixedArity = 1;

cljc.java_time.year.compare_to = (function cljc$java_time$year$compare_to(this2930,G__2931){
return this2930.compareTo(G__2931);
});
cljc.java_time.year.get = (function cljc$java_time$year$get(this2932,java_time_temporal_TemporalField2933){
return this2932.get(java_time_temporal_TemporalField2933);
});
cljc.java_time.year.equals = (function cljc$java_time$year$equals(this2934,java_lang_Object2935){
return this2934.equals(java_lang_Object2935);
});
cljc.java_time.year.format = (function cljc$java_time$year$format(this2936,java_time_format_DateTimeFormatter2937){
return this2936.format(java_time_format_DateTimeFormatter2937);
});
cljc.java_time.year.plus_years = (function cljc$java_time$year$plus_years(this2938,long2939){
return this2938.plusYears(long2939);
});

//# sourceMappingURL=year.js.map
