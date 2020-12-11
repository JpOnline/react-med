// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.instant');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.instant.min = java.time.Instant.MIN;
cljc.java_time.instant.epoch = java.time.Instant.EPOCH;
cljc.java_time.instant.max = java.time.Instant.MAX;
cljc.java_time.instant.truncated_to = (function cljc$java_time$instant$truncated_to(this2356,java_time_temporal_TemporalUnit2357){
return this2356.truncatedTo(java_time_temporal_TemporalUnit2357);
});
cljc.java_time.instant.range = (function cljc$java_time$instant$range(this2358,java_time_temporal_TemporalField2359){
return this2358.range(java_time_temporal_TemporalField2359);
});
cljc.java_time.instant.of_epoch_second = (function cljc$java_time$instant$of_epoch_second(var_args){
var G__14861 = arguments.length;
switch (G__14861) {
case 2:
return cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$2 = (function (long2360,long2361){
return java.time.Instant.ofEpochSecond(long2360,long2361);
});

cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$1 = (function (long2362){
return java.time.Instant.ofEpochSecond(long2362);
});

cljc.java_time.instant.of_epoch_second.cljs$lang$maxFixedArity = 2;

cljc.java_time.instant.at_offset = (function cljc$java_time$instant$at_offset(this2363,java_time_ZoneOffset2364){
return this2363.atOffset(java_time_ZoneOffset2364);
});
cljc.java_time.instant.minus_millis = (function cljc$java_time$instant$minus_millis(this2365,long2366){
return this2365.minusMillis(long2366);
});
cljc.java_time.instant.get_nano = (function cljc$java_time$instant$get_nano(this2367){
return this2367.nano();
});
cljc.java_time.instant.plus_millis = (function cljc$java_time$instant$plus_millis(this2368,long2369){
return this2368.plusMillis(long2369);
});
cljc.java_time.instant.minus_seconds = (function cljc$java_time$instant$minus_seconds(this2370,long2371){
return this2370.minusSeconds(long2371);
});
cljc.java_time.instant.plus_nanos = (function cljc$java_time$instant$plus_nanos(this2372,long2373){
return this2372.plusNanos(long2373);
});
cljc.java_time.instant.plus = (function cljc$java_time$instant$plus(var_args){
var G__14864 = arguments.length;
switch (G__14864) {
case 3:
return cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$3 = (function (this2374,G__2375,G__2376){
return this2374.plus(G__2375,G__2376);
});

cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$2 = (function (this2377,G__2378){
return this2377.plus(G__2378);
});

cljc.java_time.instant.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.instant.query = (function cljc$java_time$instant$query(this2379,java_time_temporal_TemporalQuery2380){
return this2379.query(java_time_temporal_TemporalQuery2380);
});
cljc.java_time.instant.to_string = (function cljc$java_time$instant$to_string(this2381){
return this2381.toString();
});
cljc.java_time.instant.is_before = (function cljc$java_time$instant$is_before(this2382,java_time_Instant2383){
return this2382.isBefore(java_time_Instant2383);
});
cljc.java_time.instant.minus = (function cljc$java_time$instant$minus(var_args){
var G__14867 = arguments.length;
switch (G__14867) {
case 3:
return cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$3 = (function (this2384,G__2385,G__2386){
return this2384.minus(G__2385,G__2386);
});

cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$2 = (function (this2387,G__2388){
return this2387.minus(G__2388);
});

cljc.java_time.instant.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.instant.at_zone = (function cljc$java_time$instant$at_zone(this2389,java_time_ZoneId2390){
return this2389.atZone(java_time_ZoneId2390);
});
cljc.java_time.instant.of_epoch_milli = (function cljc$java_time$instant$of_epoch_milli(long2391){
return java.time.Instant.ofEpochMilli(long2391);
});
cljc.java_time.instant.get_long = (function cljc$java_time$instant$get_long(this2392,java_time_temporal_TemporalField2393){
return this2392.getLong(java_time_temporal_TemporalField2393);
});
cljc.java_time.instant.until = (function cljc$java_time$instant$until(this2394,java_time_temporal_Temporal2395,java_time_temporal_TemporalUnit2396){
return this2394.until(java_time_temporal_Temporal2395,java_time_temporal_TemporalUnit2396);
});
cljc.java_time.instant.from = (function cljc$java_time$instant$from(java_time_temporal_TemporalAccessor2397){
return java.time.Instant.from(java_time_temporal_TemporalAccessor2397);
});
cljc.java_time.instant.is_after = (function cljc$java_time$instant$is_after(this2398,java_time_Instant2399){
return this2398.isAfter(java_time_Instant2399);
});
cljc.java_time.instant.minus_nanos = (function cljc$java_time$instant$minus_nanos(this2400,long2401){
return this2400.minusNanos(long2401);
});
cljc.java_time.instant.is_supported = (function cljc$java_time$instant$is_supported(this2402,G__2403){
return this2402.isSupported(G__2403);
});
cljc.java_time.instant.parse = (function cljc$java_time$instant$parse(java_lang_CharSequence2404){
return java.time.Instant.parse(java_lang_CharSequence2404);
});
cljc.java_time.instant.hash_code = (function cljc$java_time$instant$hash_code(this2405){
return this2405.hashCode();
});
cljc.java_time.instant.adjust_into = (function cljc$java_time$instant$adjust_into(this2406,java_time_temporal_Temporal2407){
return this2406.adjustInto(java_time_temporal_Temporal2407);
});
cljc.java_time.instant.with$ = (function cljc$java_time$instant$with(var_args){
var G__14870 = arguments.length;
switch (G__14870) {
case 2:
return cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$2 = (function (this2408,G__2409){
return this2408.with(G__2409);
});

cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$3 = (function (this2410,G__2411,G__2412){
return this2410.with(G__2411,G__2412);
});

cljc.java_time.instant.with$.cljs$lang$maxFixedArity = 3;

cljc.java_time.instant.now = (function cljc$java_time$instant$now(var_args){
var G__14873 = arguments.length;
switch (G__14873) {
case 0:
return cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.Instant.now();
});

cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$1 = (function (java_time_Clock2413){
return java.time.Instant.now(java_time_Clock2413);
});

cljc.java_time.instant.now.cljs$lang$maxFixedArity = 1;

cljc.java_time.instant.to_epoch_milli = (function cljc$java_time$instant$to_epoch_milli(this2414){
return this2414.toEpochMilli();
});
cljc.java_time.instant.get_epoch_second = (function cljc$java_time$instant$get_epoch_second(this2415){
return this2415.epochSecond();
});
cljc.java_time.instant.compare_to = (function cljc$java_time$instant$compare_to(this2416,G__2417){
return this2416.compareTo(G__2417);
});
cljc.java_time.instant.plus_seconds = (function cljc$java_time$instant$plus_seconds(this2418,long2419){
return this2418.plusSeconds(long2419);
});
cljc.java_time.instant.get = (function cljc$java_time$instant$get(this2420,java_time_temporal_TemporalField2421){
return this2420.get(java_time_temporal_TemporalField2421);
});
cljc.java_time.instant.equals = (function cljc$java_time$instant$equals(this2422,java_lang_Object2423){
return this2422.equals(java_lang_Object2423);
});

//# sourceMappingURL=instant.js.map
