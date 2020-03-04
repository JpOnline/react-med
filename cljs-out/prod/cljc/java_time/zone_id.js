// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.zone_id');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.zone_id.short_ids = java.time.ZoneId.SHORT_IDS;
cljc.java_time.zone_id.get_available_zone_ids = (function cljc$java_time$zone_id$get_available_zone_ids(){
return java.time.ZoneId.getAvailableZoneIds();
});
cljc.java_time.zone_id.of = (function cljc$java_time$zone_id$of(var_args){
var G__8433 = arguments.length;
switch (G__8433) {
case 1:
return cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String2565){
return java.time.ZoneId.of(java_lang_String2565);
});

cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_String2566,java_util_Map2567){
return java.time.ZoneId.of(java_lang_String2566,java_util_Map2567);
});

cljc.java_time.zone_id.of.cljs$lang$maxFixedArity = 2;

cljc.java_time.zone_id.of_offset = (function cljc$java_time$zone_id$of_offset(java_lang_String2568,java_time_ZoneOffset2569){
return java.time.ZoneId.ofOffset(java_lang_String2568,java_time_ZoneOffset2569);
});
cljc.java_time.zone_id.to_string = (function cljc$java_time$zone_id$to_string(this2570){
return this2570.toString();
});
cljc.java_time.zone_id.get_display_name = (function cljc$java_time$zone_id$get_display_name(this2571,java_time_format_TextStyle2572,java_util_Locale2573){
return this2571.displayName(java_time_format_TextStyle2572,java_util_Locale2573);
});
cljc.java_time.zone_id.get_rules = (function cljc$java_time$zone_id$get_rules(this2574){
return this2574.rules();
});
cljc.java_time.zone_id.get_id = (function cljc$java_time$zone_id$get_id(this2575){
return this2575.id();
});
cljc.java_time.zone_id.normalized = (function cljc$java_time$zone_id$normalized(this2576){
return this2576.normalized();
});
cljc.java_time.zone_id.system_default = (function cljc$java_time$zone_id$system_default(){
return java.time.ZoneId.systemDefault();
});
cljc.java_time.zone_id.from = (function cljc$java_time$zone_id$from(java_time_temporal_TemporalAccessor2577){
return java.time.ZoneId.from(java_time_temporal_TemporalAccessor2577);
});
cljc.java_time.zone_id.hash_code = (function cljc$java_time$zone_id$hash_code(this2578){
return this2578.hashCode();
});
cljc.java_time.zone_id.equals = (function cljc$java_time$zone_id$equals(this2579,java_lang_Object2580){
return this2579.equals(java_lang_Object2580);
});

//# sourceMappingURL=zone_id.js.map
