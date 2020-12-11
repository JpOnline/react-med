// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.zone_offset');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.zone_offset.max = java.time.ZoneOffset.MAX;
cljc.java_time.zone_offset.min = java.time.ZoneOffset.MIN;
cljc.java_time.zone_offset.utc = java.time.ZoneOffset.UTC;
cljc.java_time.zone_offset.get_available_zone_ids = (function cljc$java_time$zone_offset$get_available_zone_ids(){
return java.time.ZoneOffset.getAvailableZoneIds();
});
cljc.java_time.zone_offset.range = (function cljc$java_time$zone_offset$range(this3031,java_time_temporal_TemporalField3032){
return this3031.range(java_time_temporal_TemporalField3032);
});
cljc.java_time.zone_offset.of_total_seconds = (function cljc$java_time$zone_offset$of_total_seconds(int3033){
return java.time.ZoneOffset.ofTotalSeconds(int3033);
});
cljc.java_time.zone_offset.of = (function cljc$java_time$zone_offset$of(var_args){
var G__15892 = arguments.length;
switch (G__15892) {
case 1:
return cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$1 = (function (G__3035){
return java.time.ZoneOffset.of(G__3035);
});

cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_String3036,java_util_Map3037){
return java.time.ZoneOffset.of(java_lang_String3036,java_util_Map3037);
});

cljc.java_time.zone_offset.of.cljs$lang$maxFixedArity = 2;

cljc.java_time.zone_offset.of_offset = (function cljc$java_time$zone_offset$of_offset(java_lang_String3038,java_time_ZoneOffset3039){
return java.time.ZoneOffset.ofOffset(java_lang_String3038,java_time_ZoneOffset3039);
});
cljc.java_time.zone_offset.query = (function cljc$java_time$zone_offset$query(this3040,java_time_temporal_TemporalQuery3041){
return this3040.query(java_time_temporal_TemporalQuery3041);
});
cljc.java_time.zone_offset.to_string = (function cljc$java_time$zone_offset$to_string(this3042){
return this3042.toString();
});
cljc.java_time.zone_offset.get_display_name = (function cljc$java_time$zone_offset$get_display_name(this3043,java_time_format_TextStyle3044,java_util_Locale3045){
return this3043.displayName(java_time_format_TextStyle3044,java_util_Locale3045);
});
cljc.java_time.zone_offset.get_long = (function cljc$java_time$zone_offset$get_long(this3046,java_time_temporal_TemporalField3047){
return this3046.getLong(java_time_temporal_TemporalField3047);
});
cljc.java_time.zone_offset.get_rules = (function cljc$java_time$zone_offset$get_rules(this3048){
return this3048.rules();
});
cljc.java_time.zone_offset.of_hours = (function cljc$java_time$zone_offset$of_hours(int3049){
return java.time.ZoneOffset.ofHours(int3049);
});
cljc.java_time.zone_offset.get_id = (function cljc$java_time$zone_offset$get_id(this3050){
return this3050.id();
});
cljc.java_time.zone_offset.normalized = (function cljc$java_time$zone_offset$normalized(this3051){
return this3051.normalized();
});
cljc.java_time.zone_offset.system_default = (function cljc$java_time$zone_offset$system_default(){
return java.time.ZoneOffset.systemDefault();
});
cljc.java_time.zone_offset.from = (function cljc$java_time$zone_offset$from(G__3053){
return java.time.ZoneOffset.from(G__3053);
});
cljc.java_time.zone_offset.of_hours_minutes_seconds = (function cljc$java_time$zone_offset$of_hours_minutes_seconds(int3054,int3055,int3056){
return java.time.ZoneOffset.ofHoursMinutesSeconds(int3054,int3055,int3056);
});
cljc.java_time.zone_offset.is_supported = (function cljc$java_time$zone_offset$is_supported(this3057,java_time_temporal_TemporalField3058){
return this3057.isSupported(java_time_temporal_TemporalField3058);
});
cljc.java_time.zone_offset.hash_code = (function cljc$java_time$zone_offset$hash_code(this3059){
return this3059.hashCode();
});
cljc.java_time.zone_offset.get_total_seconds = (function cljc$java_time$zone_offset$get_total_seconds(this3060){
return this3060.totalSeconds();
});
cljc.java_time.zone_offset.adjust_into = (function cljc$java_time$zone_offset$adjust_into(this3061,java_time_temporal_Temporal3062){
return this3061.adjustInto(java_time_temporal_Temporal3062);
});
cljc.java_time.zone_offset.of_hours_minutes = (function cljc$java_time$zone_offset$of_hours_minutes(int3063,int3064){
return java.time.ZoneOffset.ofHoursMinutes(int3063,int3064);
});
cljc.java_time.zone_offset.compare_to = (function cljc$java_time$zone_offset$compare_to(this3065,G__3066){
return this3065.compareTo(G__3066);
});
cljc.java_time.zone_offset.get = (function cljc$java_time$zone_offset$get(this3067,java_time_temporal_TemporalField3068){
return this3067.get(java_time_temporal_TemporalField3068);
});
cljc.java_time.zone_offset.equals = (function cljc$java_time$zone_offset$equals(this3069,java_lang_Object3070){
return this3069.equals(java_lang_Object3070);
});

//# sourceMappingURL=zone_offset.js.map
