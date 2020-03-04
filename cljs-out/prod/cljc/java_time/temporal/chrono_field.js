// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.temporal.chrono_field');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time.temporal');
cljc.java_time.temporal.chrono_field.milli_of_second = java.time.temporal.ChronoField.MILLI_OF_SECOND;
cljc.java_time.temporal.chrono_field.year_of_era = java.time.temporal.ChronoField.YEAR_OF_ERA;
cljc.java_time.temporal.chrono_field.clock_hour_of_day = java.time.temporal.ChronoField.CLOCK_HOUR_OF_DAY;
cljc.java_time.temporal.chrono_field.era = java.time.temporal.ChronoField.ERA;
cljc.java_time.temporal.chrono_field.instant_seconds = java.time.temporal.ChronoField.INSTANT_SECONDS;
cljc.java_time.temporal.chrono_field.ampm_of_day = java.time.temporal.ChronoField.AMPM_OF_DAY;
cljc.java_time.temporal.chrono_field.offset_seconds = java.time.temporal.ChronoField.OFFSET_SECONDS;
cljc.java_time.temporal.chrono_field.nano_of_second = java.time.temporal.ChronoField.NANO_OF_SECOND;
cljc.java_time.temporal.chrono_field.nano_of_day = java.time.temporal.ChronoField.NANO_OF_DAY;
cljc.java_time.temporal.chrono_field.aligned_day_of_week_in_month = java.time.temporal.ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH;
cljc.java_time.temporal.chrono_field.month_of_year = java.time.temporal.ChronoField.MONTH_OF_YEAR;
cljc.java_time.temporal.chrono_field.hour_of_ampm = java.time.temporal.ChronoField.HOUR_OF_AMPM;
cljc.java_time.temporal.chrono_field.year = java.time.temporal.ChronoField.YEAR;
cljc.java_time.temporal.chrono_field.micro_of_second = java.time.temporal.ChronoField.MICRO_OF_SECOND;
cljc.java_time.temporal.chrono_field.aligned_week_of_year = java.time.temporal.ChronoField.ALIGNED_WEEK_OF_YEAR;
cljc.java_time.temporal.chrono_field.proleptic_month = java.time.temporal.ChronoField.PROLEPTIC_MONTH;
cljc.java_time.temporal.chrono_field.day_of_month = java.time.temporal.ChronoField.DAY_OF_MONTH;
cljc.java_time.temporal.chrono_field.second_of_minute = java.time.temporal.ChronoField.SECOND_OF_MINUTE;
cljc.java_time.temporal.chrono_field.second_of_day = java.time.temporal.ChronoField.SECOND_OF_DAY;
cljc.java_time.temporal.chrono_field.epoch_day = java.time.temporal.ChronoField.EPOCH_DAY;
cljc.java_time.temporal.chrono_field.day_of_year = java.time.temporal.ChronoField.DAY_OF_YEAR;
cljc.java_time.temporal.chrono_field.aligned_week_of_month = java.time.temporal.ChronoField.ALIGNED_WEEK_OF_MONTH;
cljc.java_time.temporal.chrono_field.day_of_week = java.time.temporal.ChronoField.DAY_OF_WEEK;
cljc.java_time.temporal.chrono_field.clock_hour_of_ampm = java.time.temporal.ChronoField.CLOCK_HOUR_OF_AMPM;
cljc.java_time.temporal.chrono_field.minute_of_day = java.time.temporal.ChronoField.MINUTE_OF_DAY;
cljc.java_time.temporal.chrono_field.aligned_day_of_week_in_year = java.time.temporal.ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR;
cljc.java_time.temporal.chrono_field.minute_of_hour = java.time.temporal.ChronoField.MINUTE_OF_HOUR;
cljc.java_time.temporal.chrono_field.hour_of_day = java.time.temporal.ChronoField.HOUR_OF_DAY;
cljc.java_time.temporal.chrono_field.milli_of_day = java.time.temporal.ChronoField.MILLI_OF_DAY;
cljc.java_time.temporal.chrono_field.micro_of_day = java.time.temporal.ChronoField.MICRO_OF_DAY;
cljc.java_time.temporal.chrono_field.get_range_unit = (function cljc$java_time$temporal$chrono_field$get_range_unit(this3139){
return this3139.rangeUnit();
});
cljc.java_time.temporal.chrono_field.range = (function cljc$java_time$temporal$chrono_field$range(this3140){
return this3140.range();
});
cljc.java_time.temporal.chrono_field.values = (function cljc$java_time$temporal$chrono_field$values(){
return java.time.temporal.ChronoField.values();
});
cljc.java_time.temporal.chrono_field.value_of = (function cljc$java_time$temporal$chrono_field$value_of(var_args){
var G__8344 = arguments.length;
switch (G__8344) {
case 1:
return cljc.java_time.temporal.chrono_field.value_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.temporal.chrono_field.value_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.temporal.chrono_field.value_of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String3141){
return java.time.temporal.ChronoField.valueOf(java_lang_String3141);
});

cljc.java_time.temporal.chrono_field.value_of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_Class3142,java_lang_String3143){
return java.time.temporal.ChronoField.valueOf(java_lang_Class3142,java_lang_String3143);
});

cljc.java_time.temporal.chrono_field.value_of.cljs$lang$maxFixedArity = 2;

cljc.java_time.temporal.chrono_field.resolve = (function cljc$java_time$temporal$chrono_field$resolve(this3144,java_util_Map3145,java_time_temporal_TemporalAccessor3146,java_time_format_ResolverStyle3147){
return this3144.resolve(java_util_Map3145,java_time_temporal_TemporalAccessor3146,java_time_format_ResolverStyle3147);
});
cljc.java_time.temporal.chrono_field.ordinal = (function cljc$java_time$temporal$chrono_field$ordinal(this3148){
return this3148.ordinal();
});
cljc.java_time.temporal.chrono_field.check_valid_int_value = (function cljc$java_time$temporal$chrono_field$check_valid_int_value(this3149,long3150){
return this3149.checkValidIntValue(long3150);
});
cljc.java_time.temporal.chrono_field.get_base_unit = (function cljc$java_time$temporal$chrono_field$get_base_unit(this3151){
return this3151.baseUnit();
});
cljc.java_time.temporal.chrono_field.to_string = (function cljc$java_time$temporal$chrono_field$to_string(this3152){
return this3152.toString();
});
cljc.java_time.temporal.chrono_field.is_date_based = (function cljc$java_time$temporal$chrono_field$is_date_based(this3153){
return this3153.isDateBased();
});
cljc.java_time.temporal.chrono_field.get_display_name = (function cljc$java_time$temporal$chrono_field$get_display_name(this3154,java_util_Locale3155){
return this3154.displayName(java_util_Locale3155);
});
cljc.java_time.temporal.chrono_field.name = (function cljc$java_time$temporal$chrono_field$name(this3156){
return this3156.name();
});
cljc.java_time.temporal.chrono_field.is_supported_by = (function cljc$java_time$temporal$chrono_field$is_supported_by(this3157,java_time_temporal_TemporalAccessor3158){
return this3157.isSupportedBy(java_time_temporal_TemporalAccessor3158);
});
cljc.java_time.temporal.chrono_field.range_refined_by = (function cljc$java_time$temporal$chrono_field$range_refined_by(this3159,java_time_temporal_TemporalAccessor3160){
return this3159.rangeRefinedBy(java_time_temporal_TemporalAccessor3160);
});
cljc.java_time.temporal.chrono_field.get_declaring_class = (function cljc$java_time$temporal$chrono_field$get_declaring_class(this3161){
return this3161.declaringClass();
});
cljc.java_time.temporal.chrono_field.hash_code = (function cljc$java_time$temporal$chrono_field$hash_code(this3162){
return this3162.hashCode();
});
cljc.java_time.temporal.chrono_field.adjust_into = (function cljc$java_time$temporal$chrono_field$adjust_into(this3163,java_time_temporal_Temporal3164,long3165){
return this3163.adjustInto(java_time_temporal_Temporal3164,long3165);
});
cljc.java_time.temporal.chrono_field.get_from = (function cljc$java_time$temporal$chrono_field$get_from(this3166,java_time_temporal_TemporalAccessor3167){
return this3166.from(java_time_temporal_TemporalAccessor3167);
});
cljc.java_time.temporal.chrono_field.compare_to = (function cljc$java_time$temporal$chrono_field$compare_to(this3168,G__3169){
return this3168.compareTo(G__3169);
});
cljc.java_time.temporal.chrono_field.equals = (function cljc$java_time$temporal$chrono_field$equals(this3170,java_lang_Object3171){
return this3170.equals(java_lang_Object3171);
});
cljc.java_time.temporal.chrono_field.is_time_based = (function cljc$java_time$temporal$chrono_field$is_time_based(this3172){
return this3172.isTimeBased();
});
cljc.java_time.temporal.chrono_field.check_valid_value = (function cljc$java_time$temporal$chrono_field$check_valid_value(this3173,long3174){
return this3173.checkValidValue(long3174);
});

//# sourceMappingURL=chrono_field.js.map
