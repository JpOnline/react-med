// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.offset_date_time');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.offset_date_time.min = java.time.OffsetDateTime.MIN;
cljc.java_time.offset_date_time.max = java.time.OffsetDateTime.MAX;
cljc.java_time.offset_date_time.minus_minutes = (function cljc$java_time$offset_date_time$minus_minutes(this2424,long2425){
return this2424.minusMinutes(long2425);
});
cljc.java_time.offset_date_time.truncated_to = (function cljc$java_time$offset_date_time$truncated_to(this2426,java_time_temporal_TemporalUnit2427){
return this2426.truncatedTo(java_time_temporal_TemporalUnit2427);
});
cljc.java_time.offset_date_time.minus_weeks = (function cljc$java_time$offset_date_time$minus_weeks(this2428,long2429){
return this2428.minusWeeks(long2429);
});
cljc.java_time.offset_date_time.to_instant = (function cljc$java_time$offset_date_time$to_instant(this2430){
return this2430.toInstant();
});
cljc.java_time.offset_date_time.plus_weeks = (function cljc$java_time$offset_date_time$plus_weeks(this2431,long2432){
return this2431.plusWeeks(long2432);
});
cljc.java_time.offset_date_time.range = (function cljc$java_time$offset_date_time$range(this2433,java_time_temporal_TemporalField2434){
return this2433.range(java_time_temporal_TemporalField2434);
});
cljc.java_time.offset_date_time.get_hour = (function cljc$java_time$offset_date_time$get_hour(this2435){
return this2435.hour();
});
cljc.java_time.offset_date_time.at_zone_same_instant = (function cljc$java_time$offset_date_time$at_zone_same_instant(this2436,java_time_ZoneId2437){
return this2436.atZoneSameInstant(java_time_ZoneId2437);
});
cljc.java_time.offset_date_time.minus_hours = (function cljc$java_time$offset_date_time$minus_hours(this2438,long2439){
return this2438.minusHours(long2439);
});
cljc.java_time.offset_date_time.of = (function cljc$java_time$offset_date_time$of(var_args){
var G__15933 = arguments.length;
switch (G__15933) {
case 2:
return cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 8:
return cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 3:
return cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$2 = (function (java_time_LocalDateTime2440,java_time_ZoneOffset2441){
return java.time.OffsetDateTime.of(java_time_LocalDateTime2440,java_time_ZoneOffset2441);
});

cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$8 = (function (int2442,int2443,int2444,int2445,int2446,int2447,int2448,java_time_ZoneOffset2449){
return java.time.OffsetDateTime.of(int2442,int2443,int2444,int2445,int2446,int2447,int2448,java_time_ZoneOffset2449);
});

cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$3 = (function (java_time_LocalDate2450,java_time_LocalTime2451,java_time_ZoneOffset2452){
return java.time.OffsetDateTime.of(java_time_LocalDate2450,java_time_LocalTime2451,java_time_ZoneOffset2452);
});

cljc.java_time.offset_date_time.of.cljs$lang$maxFixedArity = 8;

cljc.java_time.offset_date_time.with_month = (function cljc$java_time$offset_date_time$with_month(this2453,int2454){
return this2453.withMonth(int2454);
});
cljc.java_time.offset_date_time.is_equal = (function cljc$java_time$offset_date_time$is_equal(this2455,java_time_OffsetDateTime2456){
return this2455.isEqual(java_time_OffsetDateTime2456);
});
cljc.java_time.offset_date_time.get_nano = (function cljc$java_time$offset_date_time$get_nano(this2457){
return this2457.nano();
});
cljc.java_time.offset_date_time.to_offset_time = (function cljc$java_time$offset_date_time$to_offset_time(this2458){
return this2458.toOffsetTime();
});
cljc.java_time.offset_date_time.at_zone_similar_local = (function cljc$java_time$offset_date_time$at_zone_similar_local(this2459,java_time_ZoneId2460){
return this2459.atZoneSimilarLocal(java_time_ZoneId2460);
});
cljc.java_time.offset_date_time.get_year = (function cljc$java_time$offset_date_time$get_year(this2461){
return this2461.year();
});
cljc.java_time.offset_date_time.minus_seconds = (function cljc$java_time$offset_date_time$minus_seconds(this2462,long2463){
return this2462.minusSeconds(long2463);
});
cljc.java_time.offset_date_time.get_second = (function cljc$java_time$offset_date_time$get_second(this2464){
return this2464.second();
});
cljc.java_time.offset_date_time.plus_nanos = (function cljc$java_time$offset_date_time$plus_nanos(this2465,long2466){
return this2465.plusNanos(long2466);
});
cljc.java_time.offset_date_time.get_day_of_year = (function cljc$java_time$offset_date_time$get_day_of_year(this2467){
return this2467.dayOfYear();
});
cljc.java_time.offset_date_time.plus = (function cljc$java_time$offset_date_time$plus(var_args){
var G__15936 = arguments.length;
switch (G__15936) {
case 2:
return cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this2468,G__2469){
return this2468.plus(G__2469);
});

cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this2470,G__2471,G__2472){
return this2470.plus(G__2471,G__2472);
});

cljc.java_time.offset_date_time.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.offset_date_time.time_line_order = (function cljc$java_time$offset_date_time$time_line_order(){
return java.time.OffsetDateTime.timeLineOrder();
});
cljc.java_time.offset_date_time.with_hour = (function cljc$java_time$offset_date_time$with_hour(this2473,int2474){
return this2473.withHour(int2474);
});
cljc.java_time.offset_date_time.with_minute = (function cljc$java_time$offset_date_time$with_minute(this2475,int2476){
return this2475.withMinute(int2476);
});
cljc.java_time.offset_date_time.plus_minutes = (function cljc$java_time$offset_date_time$plus_minutes(this2477,long2478){
return this2477.plusMinutes(long2478);
});
cljc.java_time.offset_date_time.query = (function cljc$java_time$offset_date_time$query(this2479,java_time_temporal_TemporalQuery2480){
return this2479.query(java_time_temporal_TemporalQuery2480);
});
cljc.java_time.offset_date_time.with_offset_same_instant = (function cljc$java_time$offset_date_time$with_offset_same_instant(this2481,java_time_ZoneOffset2482){
return this2481.withOffsetSameInstant(java_time_ZoneOffset2482);
});
cljc.java_time.offset_date_time.get_day_of_week = (function cljc$java_time$offset_date_time$get_day_of_week(this2483){
return this2483.dayOfWeek();
});
cljc.java_time.offset_date_time.to_string = (function cljc$java_time$offset_date_time$to_string(this2484){
return this2484.toString();
});
cljc.java_time.offset_date_time.plus_months = (function cljc$java_time$offset_date_time$plus_months(this2485,long2486){
return this2485.plusMonths(long2486);
});
cljc.java_time.offset_date_time.is_before = (function cljc$java_time$offset_date_time$is_before(this2487,java_time_OffsetDateTime2488){
return this2487.isBefore(java_time_OffsetDateTime2488);
});
cljc.java_time.offset_date_time.minus_months = (function cljc$java_time$offset_date_time$minus_months(this2489,long2490){
return this2489.minusMonths(long2490);
});
cljc.java_time.offset_date_time.minus = (function cljc$java_time$offset_date_time$minus(var_args){
var G__15939 = arguments.length;
switch (G__15939) {
case 2:
return cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this2491,G__2492){
return this2491.minus(G__2492);
});

cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this2493,G__2494,G__2495){
return this2493.minus(G__2494,G__2495);
});

cljc.java_time.offset_date_time.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.offset_date_time.plus_hours = (function cljc$java_time$offset_date_time$plus_hours(this2496,long2497){
return this2496.plusHours(long2497);
});
cljc.java_time.offset_date_time.plus_days = (function cljc$java_time$offset_date_time$plus_days(this2498,long2499){
return this2498.plusDays(long2499);
});
cljc.java_time.offset_date_time.to_local_time = (function cljc$java_time$offset_date_time$to_local_time(this2500){
return this2500.toLocalTime();
});
cljc.java_time.offset_date_time.get_long = (function cljc$java_time$offset_date_time$get_long(this2501,java_time_temporal_TemporalField2502){
return this2501.getLong(java_time_temporal_TemporalField2502);
});
cljc.java_time.offset_date_time.get_offset = (function cljc$java_time$offset_date_time$get_offset(this2503){
return this2503.offset();
});
cljc.java_time.offset_date_time.to_zoned_date_time = (function cljc$java_time$offset_date_time$to_zoned_date_time(this2504){
return this2504.toZonedDateTime();
});
cljc.java_time.offset_date_time.with_year = (function cljc$java_time$offset_date_time$with_year(this2505,int2506){
return this2505.withYear(int2506);
});
cljc.java_time.offset_date_time.with_nano = (function cljc$java_time$offset_date_time$with_nano(this2507,int2508){
return this2507.withNano(int2508);
});
cljc.java_time.offset_date_time.to_epoch_second = (function cljc$java_time$offset_date_time$to_epoch_second(this2509){
return this2509.toEpochSecond();
});
cljc.java_time.offset_date_time.until = (function cljc$java_time$offset_date_time$until(this2510,java_time_temporal_Temporal2511,java_time_temporal_TemporalUnit2512){
return this2510.until(java_time_temporal_Temporal2511,java_time_temporal_TemporalUnit2512);
});
cljc.java_time.offset_date_time.with_offset_same_local = (function cljc$java_time$offset_date_time$with_offset_same_local(this2513,java_time_ZoneOffset2514){
return this2513.withOffsetSameLocal(java_time_ZoneOffset2514);
});
cljc.java_time.offset_date_time.with_day_of_month = (function cljc$java_time$offset_date_time$with_day_of_month(this2515,int2516){
return this2515.withDayOfMonth(int2516);
});
cljc.java_time.offset_date_time.get_day_of_month = (function cljc$java_time$offset_date_time$get_day_of_month(this2517){
return this2517.dayOfMonth();
});
cljc.java_time.offset_date_time.from = (function cljc$java_time$offset_date_time$from(java_time_temporal_TemporalAccessor2518){
return java.time.OffsetDateTime.from(java_time_temporal_TemporalAccessor2518);
});
cljc.java_time.offset_date_time.is_after = (function cljc$java_time$offset_date_time$is_after(this2519,java_time_OffsetDateTime2520){
return this2519.isAfter(java_time_OffsetDateTime2520);
});
cljc.java_time.offset_date_time.minus_nanos = (function cljc$java_time$offset_date_time$minus_nanos(this2521,long2522){
return this2521.minusNanos(long2522);
});
cljc.java_time.offset_date_time.is_supported = (function cljc$java_time$offset_date_time$is_supported(this2523,G__2524){
return this2523.isSupported(G__2524);
});
cljc.java_time.offset_date_time.minus_years = (function cljc$java_time$offset_date_time$minus_years(this2525,long2526){
return this2525.minusYears(long2526);
});
cljc.java_time.offset_date_time.parse = (function cljc$java_time$offset_date_time$parse(var_args){
var G__15942 = arguments.length;
switch (G__15942) {
case 1:
return cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence2527){
return java.time.OffsetDateTime.parse(java_lang_CharSequence2527);
});

cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence2528,java_time_format_DateTimeFormatter2529){
return java.time.OffsetDateTime.parse(java_lang_CharSequence2528,java_time_format_DateTimeFormatter2529);
});

cljc.java_time.offset_date_time.parse.cljs$lang$maxFixedArity = 2;

cljc.java_time.offset_date_time.with_second = (function cljc$java_time$offset_date_time$with_second(this2530,int2531){
return this2530.withSecond(int2531);
});
cljc.java_time.offset_date_time.to_local_date = (function cljc$java_time$offset_date_time$to_local_date(this2532){
return this2532.toLocalDate();
});
cljc.java_time.offset_date_time.get_minute = (function cljc$java_time$offset_date_time$get_minute(this2533){
return this2533.minute();
});
cljc.java_time.offset_date_time.hash_code = (function cljc$java_time$offset_date_time$hash_code(this2534){
return this2534.hashCode();
});
cljc.java_time.offset_date_time.adjust_into = (function cljc$java_time$offset_date_time$adjust_into(this2535,java_time_temporal_Temporal2536){
return this2535.adjustInto(java_time_temporal_Temporal2536);
});
cljc.java_time.offset_date_time.with$ = (function cljc$java_time$offset_date_time$with(var_args){
var G__15945 = arguments.length;
switch (G__15945) {
case 2:
return cljc.java_time.offset_date_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.offset_date_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.offset_date_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this2537,G__2538){
return this2537.with(G__2538);
});

cljc.java_time.offset_date_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this2539,G__2540,G__2541){
return this2539.with(G__2540,G__2541);
});

cljc.java_time.offset_date_time.with$.cljs$lang$maxFixedArity = 3;

cljc.java_time.offset_date_time.now = (function cljc$java_time$offset_date_time$now(var_args){
var G__15948 = arguments.length;
switch (G__15948) {
case 1:
return cljc.java_time.offset_date_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return cljc.java_time.offset_date_time.now.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.offset_date_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__2543){
return java.time.OffsetDateTime.now(G__2543);
});

cljc.java_time.offset_date_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.OffsetDateTime.now();
});

cljc.java_time.offset_date_time.now.cljs$lang$maxFixedArity = 1;

cljc.java_time.offset_date_time.to_local_date_time = (function cljc$java_time$offset_date_time$to_local_date_time(this2544){
return this2544.toLocalDateTime();
});
cljc.java_time.offset_date_time.get_month_value = (function cljc$java_time$offset_date_time$get_month_value(this2545){
return this2545.monthValue();
});
cljc.java_time.offset_date_time.with_day_of_year = (function cljc$java_time$offset_date_time$with_day_of_year(this2546,int2547){
return this2546.withDayOfYear(int2547);
});
cljc.java_time.offset_date_time.compare_to = (function cljc$java_time$offset_date_time$compare_to(this2548,G__2549){
return this2548.compareTo(G__2549);
});
cljc.java_time.offset_date_time.get_month = (function cljc$java_time$offset_date_time$get_month(this2550){
return this2550.month();
});
cljc.java_time.offset_date_time.of_instant = (function cljc$java_time$offset_date_time$of_instant(java_time_Instant2551,java_time_ZoneId2552){
return java.time.OffsetDateTime.ofInstant(java_time_Instant2551,java_time_ZoneId2552);
});
cljc.java_time.offset_date_time.plus_seconds = (function cljc$java_time$offset_date_time$plus_seconds(this2553,long2554){
return this2553.plusSeconds(long2554);
});
cljc.java_time.offset_date_time.get = (function cljc$java_time$offset_date_time$get(this2555,java_time_temporal_TemporalField2556){
return this2555.get(java_time_temporal_TemporalField2556);
});
cljc.java_time.offset_date_time.equals = (function cljc$java_time$offset_date_time$equals(this2557,java_lang_Object2558){
return this2557.equals(java_lang_Object2558);
});
cljc.java_time.offset_date_time.format = (function cljc$java_time$offset_date_time$format(this2559,java_time_format_DateTimeFormatter2560){
return this2559.format(java_time_format_DateTimeFormatter2560);
});
cljc.java_time.offset_date_time.plus_years = (function cljc$java_time$offset_date_time$plus_years(this2561,long2562){
return this2561.plusYears(long2562);
});
cljc.java_time.offset_date_time.minus_days = (function cljc$java_time$offset_date_time$minus_days(this2563,long2564){
return this2563.minusDays(long2564);
});

//# sourceMappingURL=offset_date_time.js.map
