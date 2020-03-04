// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljc.java_time.clock');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.clock.tick = (function cljc$java_time$clock$tick(java_time_Clock3014,java_time_Duration3015){
return java.time.Clock.tick(java_time_Clock3014,java_time_Duration3015);
});
cljc.java_time.clock.offset = (function cljc$java_time$clock$offset(java_time_Clock3016,java_time_Duration3017){
return java.time.Clock.offset(java_time_Clock3016,java_time_Duration3017);
});
cljc.java_time.clock.system_utc = (function cljc$java_time$clock$system_utc(){
return java.time.Clock.systemUTC();
});
cljc.java_time.clock.system_default_zone = (function cljc$java_time$clock$system_default_zone(){
return java.time.Clock.systemDefaultZone();
});
cljc.java_time.clock.fixed = (function cljc$java_time$clock$fixed(java_time_Instant3018,java_time_ZoneId3019){
return java.time.Clock.fixed(java_time_Instant3018,java_time_ZoneId3019);
});
cljc.java_time.clock.tick_minutes = (function cljc$java_time$clock$tick_minutes(java_time_ZoneId3020){
return java.time.Clock.tickMinutes(java_time_ZoneId3020);
});
cljc.java_time.clock.tick_seconds = (function cljc$java_time$clock$tick_seconds(java_time_ZoneId3021){
return java.time.Clock.tickSeconds(java_time_ZoneId3021);
});
cljc.java_time.clock.millis = (function cljc$java_time$clock$millis(this3022){
return this3022.millis();
});
cljc.java_time.clock.with_zone = (function cljc$java_time$clock$with_zone(this3023,java_time_ZoneId3024){
return this3023.withZone(java_time_ZoneId3024);
});
cljc.java_time.clock.get_zone = (function cljc$java_time$clock$get_zone(this3025){
return this3025.zone();
});
cljc.java_time.clock.hash_code = (function cljc$java_time$clock$hash_code(this3026){
return this3026.hashCode();
});
cljc.java_time.clock.system = (function cljc$java_time$clock$system(java_time_ZoneId3027){
return java.time.Clock.system(java_time_ZoneId3027);
});
cljc.java_time.clock.instant = (function cljc$java_time$clock$instant(this3028){
return this3028.instant();
});
cljc.java_time.clock.equals = (function cljc$java_time$clock$equals(this3029,java_lang_Object3030){
return this3029.equals(java_lang_Object3030);
});
