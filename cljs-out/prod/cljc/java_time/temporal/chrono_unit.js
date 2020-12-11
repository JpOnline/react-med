// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.temporal.chrono_unit');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time.temporal');
cljc.java_time.temporal.chrono_unit.millis = java.time.temporal.ChronoUnit.MILLIS;
cljc.java_time.temporal.chrono_unit.minutes = java.time.temporal.ChronoUnit.MINUTES;
cljc.java_time.temporal.chrono_unit.micros = java.time.temporal.ChronoUnit.MICROS;
cljc.java_time.temporal.chrono_unit.half_days = java.time.temporal.ChronoUnit.HALF_DAYS;
cljc.java_time.temporal.chrono_unit.millennia = java.time.temporal.ChronoUnit.MILLENNIA;
cljc.java_time.temporal.chrono_unit.years = java.time.temporal.ChronoUnit.YEARS;
cljc.java_time.temporal.chrono_unit.decades = java.time.temporal.ChronoUnit.DECADES;
cljc.java_time.temporal.chrono_unit.days = java.time.temporal.ChronoUnit.DAYS;
cljc.java_time.temporal.chrono_unit.centuries = java.time.temporal.ChronoUnit.CENTURIES;
cljc.java_time.temporal.chrono_unit.weeks = java.time.temporal.ChronoUnit.WEEKS;
cljc.java_time.temporal.chrono_unit.hours = java.time.temporal.ChronoUnit.HOURS;
cljc.java_time.temporal.chrono_unit.eras = java.time.temporal.ChronoUnit.ERAS;
cljc.java_time.temporal.chrono_unit.seconds = java.time.temporal.ChronoUnit.SECONDS;
cljc.java_time.temporal.chrono_unit.months = java.time.temporal.ChronoUnit.MONTHS;
cljc.java_time.temporal.chrono_unit.nanos = java.time.temporal.ChronoUnit.NANOS;
cljc.java_time.temporal.chrono_unit.forever = java.time.temporal.ChronoUnit.FOREVER;
cljc.java_time.temporal.chrono_unit.values = (function cljc$java_time$temporal$chrono_unit$values(){
return java.time.temporal.ChronoUnit.values();
});
cljc.java_time.temporal.chrono_unit.value_of = (function cljc$java_time$temporal$chrono_unit$value_of(var_args){
var G__15743 = arguments.length;
switch (G__15743) {
case 1:
return cljc.java_time.temporal.chrono_unit.value_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.temporal.chrono_unit.value_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.temporal.chrono_unit.value_of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String3115){
return java.time.temporal.ChronoUnit.valueOf(java_lang_String3115);
});

cljc.java_time.temporal.chrono_unit.value_of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_Class3116,java_lang_String3117){
return java.time.temporal.ChronoUnit.valueOf(java_lang_Class3116,java_lang_String3117);
});

cljc.java_time.temporal.chrono_unit.value_of.cljs$lang$maxFixedArity = 2;

cljc.java_time.temporal.chrono_unit.ordinal = (function cljc$java_time$temporal$chrono_unit$ordinal(this3118){
return this3118.ordinal();
});
cljc.java_time.temporal.chrono_unit.is_duration_estimated = (function cljc$java_time$temporal$chrono_unit$is_duration_estimated(this3119){
return this3119.isDurationEstimated();
});
cljc.java_time.temporal.chrono_unit.to_string = (function cljc$java_time$temporal$chrono_unit$to_string(this3120){
return this3120.toString();
});
cljc.java_time.temporal.chrono_unit.is_date_based = (function cljc$java_time$temporal$chrono_unit$is_date_based(this3121){
return this3121.isDateBased();
});
cljc.java_time.temporal.chrono_unit.add_to = (function cljc$java_time$temporal$chrono_unit$add_to(this3122,java_time_temporal_Temporal3123,long3124){
return this3122.addTo(java_time_temporal_Temporal3123,long3124);
});
cljc.java_time.temporal.chrono_unit.name = (function cljc$java_time$temporal$chrono_unit$name(this3125){
return this3125.name();
});
cljc.java_time.temporal.chrono_unit.is_supported_by = (function cljc$java_time$temporal$chrono_unit$is_supported_by(this3126,java_time_temporal_Temporal3127){
return this3126.isSupportedBy(java_time_temporal_Temporal3127);
});
cljc.java_time.temporal.chrono_unit.get_declaring_class = (function cljc$java_time$temporal$chrono_unit$get_declaring_class(this3128){
return this3128.declaringClass();
});
cljc.java_time.temporal.chrono_unit.between = (function cljc$java_time$temporal$chrono_unit$between(this3129,java_time_temporal_Temporal3130,java_time_temporal_Temporal3131){
return this3129.between(java_time_temporal_Temporal3130,java_time_temporal_Temporal3131);
});
cljc.java_time.temporal.chrono_unit.hash_code = (function cljc$java_time$temporal$chrono_unit$hash_code(this3132){
return this3132.hashCode();
});
cljc.java_time.temporal.chrono_unit.compare_to = (function cljc$java_time$temporal$chrono_unit$compare_to(this3133,G__3134){
return this3133.compareTo(G__3134);
});
cljc.java_time.temporal.chrono_unit.get_duration = (function cljc$java_time$temporal$chrono_unit$get_duration(this3135){
return this3135.duration();
});
cljc.java_time.temporal.chrono_unit.equals = (function cljc$java_time$temporal$chrono_unit$equals(this3136,java_lang_Object3137){
return this3136.equals(java_lang_Object3137);
});
cljc.java_time.temporal.chrono_unit.is_time_based = (function cljc$java_time$temporal$chrono_unit$is_time_based(this3138){
return this3138.isTimeBased();
});

//# sourceMappingURL=chrono_unit.js.map
