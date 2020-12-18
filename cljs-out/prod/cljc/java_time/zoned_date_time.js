// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.zoned_date_time');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.zoned_date_time.minus_minutes = (function cljc$java_time$zoned_date_time$minus_minutes(this2111,long2112){
return this2111.minusMinutes(long2112);
});
cljc.java_time.zoned_date_time.truncated_to = (function cljc$java_time$zoned_date_time$truncated_to(this2113,java_time_temporal_TemporalUnit2114){
return this2113.truncatedTo(java_time_temporal_TemporalUnit2114);
});
cljc.java_time.zoned_date_time.minus_weeks = (function cljc$java_time$zoned_date_time$minus_weeks(this2115,long2116){
return this2115.minusWeeks(long2116);
});
cljc.java_time.zoned_date_time.to_instant = (function cljc$java_time$zoned_date_time$to_instant(this2117){
return this2117.toInstant();
});
cljc.java_time.zoned_date_time.plus_weeks = (function cljc$java_time$zoned_date_time$plus_weeks(this2118,long2119){
return this2118.plusWeeks(long2119);
});
cljc.java_time.zoned_date_time.range = (function cljc$java_time$zoned_date_time$range(this2120,java_time_temporal_TemporalField2121){
return this2120.range(java_time_temporal_TemporalField2121);
});
cljc.java_time.zoned_date_time.with_earlier_offset_at_overlap = (function cljc$java_time$zoned_date_time$with_earlier_offset_at_overlap(this2122){
return this2122.withEarlierOffsetAtOverlap();
});
cljc.java_time.zoned_date_time.get_hour = (function cljc$java_time$zoned_date_time$get_hour(this2123){
return this2123.hour();
});
cljc.java_time.zoned_date_time.minus_hours = (function cljc$java_time$zoned_date_time$minus_hours(this2124,long2125){
return this2124.minusHours(long2125);
});
cljc.java_time.zoned_date_time.of = (function cljc$java_time$zoned_date_time$of(var_args){
var G__15773 = arguments.length;
switch (G__15773) {
case 3:
return cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 8:
return cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 2:
return cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$3 = (function (java_time_LocalDate2126,java_time_LocalTime2127,java_time_ZoneId2128){
return java.time.ZonedDateTime.of(java_time_LocalDate2126,java_time_LocalTime2127,java_time_ZoneId2128);
});

cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$8 = (function (int2129,int2130,int2131,int2132,int2133,int2134,int2135,java_time_ZoneId2136){
return java.time.ZonedDateTime.of(int2129,int2130,int2131,int2132,int2133,int2134,int2135,java_time_ZoneId2136);
});

cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$2 = (function (java_time_LocalDateTime2137,java_time_ZoneId2138){
return java.time.ZonedDateTime.of(java_time_LocalDateTime2137,java_time_ZoneId2138);
});

cljc.java_time.zoned_date_time.of.cljs$lang$maxFixedArity = 8;

cljc.java_time.zoned_date_time.with_month = (function cljc$java_time$zoned_date_time$with_month(this2139,int2140){
return this2139.withMonth(int2140);
});
cljc.java_time.zoned_date_time.is_equal = (function cljc$java_time$zoned_date_time$is_equal(this2141,java_time_chrono_ChronoZonedDateTime2142){
return this2141.isEqual(java_time_chrono_ChronoZonedDateTime2142);
});
cljc.java_time.zoned_date_time.get_nano = (function cljc$java_time$zoned_date_time$get_nano(this2143){
return this2143.nano();
});
cljc.java_time.zoned_date_time.of_local = (function cljc$java_time$zoned_date_time$of_local(java_time_LocalDateTime2144,java_time_ZoneId2145,java_time_ZoneOffset2146){
return java.time.ZonedDateTime.ofLocal(java_time_LocalDateTime2144,java_time_ZoneId2145,java_time_ZoneOffset2146);
});
cljc.java_time.zoned_date_time.get_year = (function cljc$java_time$zoned_date_time$get_year(this2147){
return this2147.year();
});
cljc.java_time.zoned_date_time.minus_seconds = (function cljc$java_time$zoned_date_time$minus_seconds(this2148,long2149){
return this2148.minusSeconds(long2149);
});
cljc.java_time.zoned_date_time.get_second = (function cljc$java_time$zoned_date_time$get_second(this2150){
return this2150.second();
});
cljc.java_time.zoned_date_time.plus_nanos = (function cljc$java_time$zoned_date_time$plus_nanos(this2151,long2152){
return this2151.plusNanos(long2152);
});
cljc.java_time.zoned_date_time.get_day_of_year = (function cljc$java_time$zoned_date_time$get_day_of_year(this2153){
return this2153.dayOfYear();
});
cljc.java_time.zoned_date_time.plus = (function cljc$java_time$zoned_date_time$plus(var_args){
var G__15776 = arguments.length;
switch (G__15776) {
case 2:
return cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this2154,G__2155){
return this2154.plus(G__2155);
});

cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this2156,G__2157,G__2158){
return this2156.plus(G__2157,G__2158);
});

cljc.java_time.zoned_date_time.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.zoned_date_time.with_hour = (function cljc$java_time$zoned_date_time$with_hour(this2159,int2160){
return this2159.withHour(int2160);
});
cljc.java_time.zoned_date_time.with_minute = (function cljc$java_time$zoned_date_time$with_minute(this2161,int2162){
return this2161.withMinute(int2162);
});
cljc.java_time.zoned_date_time.plus_minutes = (function cljc$java_time$zoned_date_time$plus_minutes(this2163,long2164){
return this2163.plusMinutes(long2164);
});
cljc.java_time.zoned_date_time.query = (function cljc$java_time$zoned_date_time$query(this2165,java_time_temporal_TemporalQuery2166){
return this2165.query(java_time_temporal_TemporalQuery2166);
});
cljc.java_time.zoned_date_time.get_day_of_week = (function cljc$java_time$zoned_date_time$get_day_of_week(this2167){
return this2167.dayOfWeek();
});
cljc.java_time.zoned_date_time.to_string = (function cljc$java_time$zoned_date_time$to_string(this2168){
return this2168.toString();
});
cljc.java_time.zoned_date_time.plus_months = (function cljc$java_time$zoned_date_time$plus_months(this2169,long2170){
return this2169.plusMonths(long2170);
});
cljc.java_time.zoned_date_time.is_before = (function cljc$java_time$zoned_date_time$is_before(this2171,java_time_chrono_ChronoZonedDateTime2172){
return this2171.isBefore(java_time_chrono_ChronoZonedDateTime2172);
});
cljc.java_time.zoned_date_time.minus_months = (function cljc$java_time$zoned_date_time$minus_months(this2173,long2174){
return this2173.minusMonths(long2174);
});
cljc.java_time.zoned_date_time.minus = (function cljc$java_time$zoned_date_time$minus(var_args){
var G__15779 = arguments.length;
switch (G__15779) {
case 3:
return cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this2175,G__2176,G__2177){
return this2175.minus(G__2176,G__2177);
});

cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this2178,G__2179){
return this2178.minus(G__2179);
});

cljc.java_time.zoned_date_time.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.zoned_date_time.with_fixed_offset_zone = (function cljc$java_time$zoned_date_time$with_fixed_offset_zone(this2180){
return this2180.withFixedOffsetZone();
});
cljc.java_time.zoned_date_time.plus_hours = (function cljc$java_time$zoned_date_time$plus_hours(this2181,long2182){
return this2181.plusHours(long2182);
});
cljc.java_time.zoned_date_time.with_zone_same_local = (function cljc$java_time$zoned_date_time$with_zone_same_local(this2183,G__2184){
return this2183.withZoneSameLocal(G__2184);
});
cljc.java_time.zoned_date_time.with_zone_same_instant = (function cljc$java_time$zoned_date_time$with_zone_same_instant(this2185,G__2186){
return this2185.withZoneSameInstant(G__2186);
});
cljc.java_time.zoned_date_time.plus_days = (function cljc$java_time$zoned_date_time$plus_days(this2187,long2188){
return this2187.plusDays(long2188);
});
cljc.java_time.zoned_date_time.to_local_time = (function cljc$java_time$zoned_date_time$to_local_time(this2189){
return this2189.toLocalTime();
});
cljc.java_time.zoned_date_time.get_long = (function cljc$java_time$zoned_date_time$get_long(this2190,java_time_temporal_TemporalField2191){
return this2190.getLong(java_time_temporal_TemporalField2191);
});
cljc.java_time.zoned_date_time.get_offset = (function cljc$java_time$zoned_date_time$get_offset(this2192){
return this2192.offset();
});
cljc.java_time.zoned_date_time.with_year = (function cljc$java_time$zoned_date_time$with_year(this2193,int2194){
return this2193.withYear(int2194);
});
cljc.java_time.zoned_date_time.with_nano = (function cljc$java_time$zoned_date_time$with_nano(this2195,int2196){
return this2195.withNano(int2196);
});
cljc.java_time.zoned_date_time.to_epoch_second = (function cljc$java_time$zoned_date_time$to_epoch_second(this2197){
return this2197.toEpochSecond();
});
cljc.java_time.zoned_date_time.to_offset_date_time = (function cljc$java_time$zoned_date_time$to_offset_date_time(this2198){
return this2198.toOffsetDateTime();
});
cljc.java_time.zoned_date_time.with_later_offset_at_overlap = (function cljc$java_time$zoned_date_time$with_later_offset_at_overlap(this2199){
return this2199.withLaterOffsetAtOverlap();
});
cljc.java_time.zoned_date_time.until = (function cljc$java_time$zoned_date_time$until(this2200,java_time_temporal_Temporal2201,java_time_temporal_TemporalUnit2202){
return this2200.until(java_time_temporal_Temporal2201,java_time_temporal_TemporalUnit2202);
});
cljc.java_time.zoned_date_time.get_zone = (function cljc$java_time$zoned_date_time$get_zone(this2203){
return this2203.zone();
});
cljc.java_time.zoned_date_time.with_day_of_month = (function cljc$java_time$zoned_date_time$with_day_of_month(this2204,int2205){
return this2204.withDayOfMonth(int2205);
});
cljc.java_time.zoned_date_time.get_day_of_month = (function cljc$java_time$zoned_date_time$get_day_of_month(this2206){
return this2206.dayOfMonth();
});
cljc.java_time.zoned_date_time.from = (function cljc$java_time$zoned_date_time$from(java_time_temporal_TemporalAccessor2207){
return java.time.ZonedDateTime.from(java_time_temporal_TemporalAccessor2207);
});
cljc.java_time.zoned_date_time.is_after = (function cljc$java_time$zoned_date_time$is_after(this2208,java_time_chrono_ChronoZonedDateTime2209){
return this2208.isAfter(java_time_chrono_ChronoZonedDateTime2209);
});
cljc.java_time.zoned_date_time.minus_nanos = (function cljc$java_time$zoned_date_time$minus_nanos(this2210,long2211){
return this2210.minusNanos(long2211);
});
cljc.java_time.zoned_date_time.is_supported = (function cljc$java_time$zoned_date_time$is_supported(this2212,G__2213){
return this2212.isSupported(G__2213);
});
cljc.java_time.zoned_date_time.minus_years = (function cljc$java_time$zoned_date_time$minus_years(this2214,long2215){
return this2214.minusYears(long2215);
});
cljc.java_time.zoned_date_time.get_chronology = (function cljc$java_time$zoned_date_time$get_chronology(this2216){
return this2216.chronology();
});
cljc.java_time.zoned_date_time.parse = (function cljc$java_time$zoned_date_time$parse(var_args){
var G__15782 = arguments.length;
switch (G__15782) {
case 2:
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence2217,java_time_format_DateTimeFormatter2218){
return java.time.ZonedDateTime.parse(java_lang_CharSequence2217,java_time_format_DateTimeFormatter2218);
});

cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence2219){
return java.time.ZonedDateTime.parse(java_lang_CharSequence2219);
});

cljc.java_time.zoned_date_time.parse.cljs$lang$maxFixedArity = 2;

cljc.java_time.zoned_date_time.with_second = (function cljc$java_time$zoned_date_time$with_second(this2220,int2221){
return this2220.withSecond(int2221);
});
cljc.java_time.zoned_date_time.to_local_date = (function cljc$java_time$zoned_date_time$to_local_date(this2222){
return this2222.toLocalDate();
});
cljc.java_time.zoned_date_time.get_minute = (function cljc$java_time$zoned_date_time$get_minute(this2223){
return this2223.minute();
});
cljc.java_time.zoned_date_time.hash_code = (function cljc$java_time$zoned_date_time$hash_code(this2224){
return this2224.hashCode();
});
cljc.java_time.zoned_date_time.with$ = (function cljc$java_time$zoned_date_time$with(var_args){
var G__15785 = arguments.length;
switch (G__15785) {
case 3:
return cljc.java_time.zoned_date_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.zoned_date_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zoned_date_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this2225,G__2226,G__2227){
return this2225.with(G__2226,G__2227);
});

cljc.java_time.zoned_date_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this2228,G__2229){
return this2228.with(G__2229);
});

cljc.java_time.zoned_date_time.with$.cljs$lang$maxFixedArity = 3;

cljc.java_time.zoned_date_time.now = (function cljc$java_time$zoned_date_time$now(var_args){
var G__15788 = arguments.length;
switch (G__15788) {
case 0:
return cljc.java_time.zoned_date_time.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.zoned_date_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zoned_date_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.ZonedDateTime.now();
});

cljc.java_time.zoned_date_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__2231){
return java.time.ZonedDateTime.now(G__2231);
});

cljc.java_time.zoned_date_time.now.cljs$lang$maxFixedArity = 1;

cljc.java_time.zoned_date_time.to_local_date_time = (function cljc$java_time$zoned_date_time$to_local_date_time(this2232){
return this2232.toLocalDateTime();
});
cljc.java_time.zoned_date_time.get_month_value = (function cljc$java_time$zoned_date_time$get_month_value(this2233){
return this2233.monthValue();
});
cljc.java_time.zoned_date_time.with_day_of_year = (function cljc$java_time$zoned_date_time$with_day_of_year(this2234,int2235){
return this2234.withDayOfYear(int2235);
});
cljc.java_time.zoned_date_time.compare_to = (function cljc$java_time$zoned_date_time$compare_to(this2236,G__2237){
return this2236.compareTo(G__2237);
});
cljc.java_time.zoned_date_time.of_strict = (function cljc$java_time$zoned_date_time$of_strict(java_time_LocalDateTime2238,java_time_ZoneOffset2239,java_time_ZoneId2240){
return java.time.ZonedDateTime.ofStrict(java_time_LocalDateTime2238,java_time_ZoneOffset2239,java_time_ZoneId2240);
});
cljc.java_time.zoned_date_time.get_month = (function cljc$java_time$zoned_date_time$get_month(this2241){
return this2241.month();
});
cljc.java_time.zoned_date_time.of_instant = (function cljc$java_time$zoned_date_time$of_instant(var_args){
var G__15791 = arguments.length;
switch (G__15791) {
case 2:
return cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$2 = (function (java_time_Instant2242,java_time_ZoneId2243){
return java.time.ZonedDateTime.ofInstant(java_time_Instant2242,java_time_ZoneId2243);
});

cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$3 = (function (java_time_LocalDateTime2244,java_time_ZoneOffset2245,java_time_ZoneId2246){
return java.time.ZonedDateTime.ofInstant(java_time_LocalDateTime2244,java_time_ZoneOffset2245,java_time_ZoneId2246);
});

cljc.java_time.zoned_date_time.of_instant.cljs$lang$maxFixedArity = 3;

cljc.java_time.zoned_date_time.plus_seconds = (function cljc$java_time$zoned_date_time$plus_seconds(this2247,long2248){
return this2247.plusSeconds(long2248);
});
cljc.java_time.zoned_date_time.get = (function cljc$java_time$zoned_date_time$get(this2249,java_time_temporal_TemporalField2250){
return this2249.get(java_time_temporal_TemporalField2250);
});
cljc.java_time.zoned_date_time.equals = (function cljc$java_time$zoned_date_time$equals(this2251,java_lang_Object2252){
return this2251.equals(java_lang_Object2252);
});
cljc.java_time.zoned_date_time.format = (function cljc$java_time$zoned_date_time$format(this2253,java_time_format_DateTimeFormatter2254){
return this2253.format(java_time_format_DateTimeFormatter2254);
});
cljc.java_time.zoned_date_time.plus_years = (function cljc$java_time$zoned_date_time$plus_years(this2255,long2256){
return this2255.plusYears(long2256);
});
cljc.java_time.zoned_date_time.minus_days = (function cljc$java_time$zoned_date_time$minus_days(this2257,long2258){
return this2257.minusDays(long2258);
});

//# sourceMappingURL=zoned_date_time.js.map
