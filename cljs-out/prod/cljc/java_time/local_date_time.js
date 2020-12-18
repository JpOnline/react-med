// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.local_date_time');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.local_date_time.max = java.time.LocalDateTime.MAX;
cljc.java_time.local_date_time.min = java.time.LocalDateTime.MIN;
cljc.java_time.local_date_time.minus_minutes = (function cljc$java_time$local_date_time$minus_minutes(this1962,long1963){
return this1962.minusMinutes(long1963);
});
cljc.java_time.local_date_time.truncated_to = (function cljc$java_time$local_date_time$truncated_to(this1964,java_time_temporal_TemporalUnit1965){
return this1964.truncatedTo(java_time_temporal_TemporalUnit1965);
});
cljc.java_time.local_date_time.minus_weeks = (function cljc$java_time$local_date_time$minus_weeks(this1966,long1967){
return this1966.minusWeeks(long1967);
});
cljc.java_time.local_date_time.to_instant = (function cljc$java_time$local_date_time$to_instant(this1968,java_time_ZoneOffset1969){
return this1968.toInstant(java_time_ZoneOffset1969);
});
cljc.java_time.local_date_time.plus_weeks = (function cljc$java_time$local_date_time$plus_weeks(this1970,long1971){
return this1970.plusWeeks(long1971);
});
cljc.java_time.local_date_time.range = (function cljc$java_time$local_date_time$range(this1972,java_time_temporal_TemporalField1973){
return this1972.range(java_time_temporal_TemporalField1973);
});
cljc.java_time.local_date_time.of_epoch_second = (function cljc$java_time$local_date_time$of_epoch_second(long1974,int1975,java_time_ZoneOffset1976){
return java.time.LocalDateTime.ofEpochSecond(long1974,int1975,java_time_ZoneOffset1976);
});
cljc.java_time.local_date_time.get_hour = (function cljc$java_time$local_date_time$get_hour(this1977){
return this1977.hour();
});
cljc.java_time.local_date_time.at_offset = (function cljc$java_time$local_date_time$at_offset(this1978,java_time_ZoneOffset1979){
return this1978.atOffset(java_time_ZoneOffset1979);
});
cljc.java_time.local_date_time.minus_hours = (function cljc$java_time$local_date_time$minus_hours(this1980,long1981){
return this1980.minusHours(long1981);
});
cljc.java_time.local_date_time.of = (function cljc$java_time$local_date_time$of(var_args){
var G__15913 = arguments.length;
switch (G__15913) {
case 6:
return cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 2:
return cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$6 = (function (G__1983,G__1984,G__1985,G__1986,G__1987,G__1988){
return java.time.LocalDateTime.of(G__1983,G__1984,G__1985,G__1986,G__1987,G__1988);
});

cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$5 = (function (G__1990,G__1991,G__1992,G__1993,G__1994){
return java.time.LocalDateTime.of(G__1990,G__1991,G__1992,G__1993,G__1994);
});

cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$7 = (function (G__1996,G__1997,G__1998,G__1999,G__2000,G__2001,G__2002){
return java.time.LocalDateTime.of(G__1996,G__1997,G__1998,G__1999,G__2000,G__2001,G__2002);
});

cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$2 = (function (java_time_LocalDate2003,java_time_LocalTime2004){
return java.time.LocalDateTime.of(java_time_LocalDate2003,java_time_LocalTime2004);
});

cljc.java_time.local_date_time.of.cljs$lang$maxFixedArity = 7;

cljc.java_time.local_date_time.with_month = (function cljc$java_time$local_date_time$with_month(this2005,int2006){
return this2005.withMonth(int2006);
});
cljc.java_time.local_date_time.is_equal = (function cljc$java_time$local_date_time$is_equal(this2007,java_time_chrono_ChronoLocalDateTime2008){
return this2007.isEqual(java_time_chrono_ChronoLocalDateTime2008);
});
cljc.java_time.local_date_time.get_nano = (function cljc$java_time$local_date_time$get_nano(this2009){
return this2009.nano();
});
cljc.java_time.local_date_time.get_year = (function cljc$java_time$local_date_time$get_year(this2010){
return this2010.year();
});
cljc.java_time.local_date_time.minus_seconds = (function cljc$java_time$local_date_time$minus_seconds(this2011,long2012){
return this2011.minusSeconds(long2012);
});
cljc.java_time.local_date_time.get_second = (function cljc$java_time$local_date_time$get_second(this2013){
return this2013.second();
});
cljc.java_time.local_date_time.plus_nanos = (function cljc$java_time$local_date_time$plus_nanos(this2014,long2015){
return this2014.plusNanos(long2015);
});
cljc.java_time.local_date_time.get_day_of_year = (function cljc$java_time$local_date_time$get_day_of_year(this2016){
return this2016.dayOfYear();
});
cljc.java_time.local_date_time.plus = (function cljc$java_time$local_date_time$plus(var_args){
var G__15916 = arguments.length;
switch (G__15916) {
case 3:
return cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this2017,G__2018,G__2019){
return this2017.plus(G__2018,G__2019);
});

cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this2020,G__2021){
return this2020.plus(G__2021);
});

cljc.java_time.local_date_time.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_date_time.with_hour = (function cljc$java_time$local_date_time$with_hour(this2022,int2023){
return this2022.withHour(int2023);
});
cljc.java_time.local_date_time.with_minute = (function cljc$java_time$local_date_time$with_minute(this2024,int2025){
return this2024.withMinute(int2025);
});
cljc.java_time.local_date_time.plus_minutes = (function cljc$java_time$local_date_time$plus_minutes(this2026,long2027){
return this2026.plusMinutes(long2027);
});
cljc.java_time.local_date_time.query = (function cljc$java_time$local_date_time$query(this2028,java_time_temporal_TemporalQuery2029){
return this2028.query(java_time_temporal_TemporalQuery2029);
});
cljc.java_time.local_date_time.get_day_of_week = (function cljc$java_time$local_date_time$get_day_of_week(this2030){
return this2030.dayOfWeek();
});
cljc.java_time.local_date_time.to_string = (function cljc$java_time$local_date_time$to_string(this2031){
return this2031.toString();
});
cljc.java_time.local_date_time.plus_months = (function cljc$java_time$local_date_time$plus_months(this2032,long2033){
return this2032.plusMonths(long2033);
});
cljc.java_time.local_date_time.is_before = (function cljc$java_time$local_date_time$is_before(this2034,java_time_chrono_ChronoLocalDateTime2035){
return this2034.isBefore(java_time_chrono_ChronoLocalDateTime2035);
});
cljc.java_time.local_date_time.minus_months = (function cljc$java_time$local_date_time$minus_months(this2036,long2037){
return this2036.minusMonths(long2037);
});
cljc.java_time.local_date_time.minus = (function cljc$java_time$local_date_time$minus(var_args){
var G__15919 = arguments.length;
switch (G__15919) {
case 3:
return cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this2038,G__2039,G__2040){
return this2038.minus(G__2039,G__2040);
});

cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this2041,G__2042){
return this2041.minus(G__2042);
});

cljc.java_time.local_date_time.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_date_time.at_zone = (function cljc$java_time$local_date_time$at_zone(this2043,G__2044){
return this2043.atZone(G__2044);
});
cljc.java_time.local_date_time.plus_hours = (function cljc$java_time$local_date_time$plus_hours(this2045,long2046){
return this2045.plusHours(long2046);
});
cljc.java_time.local_date_time.plus_days = (function cljc$java_time$local_date_time$plus_days(this2047,long2048){
return this2047.plusDays(long2048);
});
cljc.java_time.local_date_time.to_local_time = (function cljc$java_time$local_date_time$to_local_time(this2049){
return this2049.toLocalTime();
});
cljc.java_time.local_date_time.get_long = (function cljc$java_time$local_date_time$get_long(this2050,java_time_temporal_TemporalField2051){
return this2050.getLong(java_time_temporal_TemporalField2051);
});
cljc.java_time.local_date_time.with_year = (function cljc$java_time$local_date_time$with_year(this2052,int2053){
return this2052.withYear(int2053);
});
cljc.java_time.local_date_time.with_nano = (function cljc$java_time$local_date_time$with_nano(this2054,int2055){
return this2054.withNano(int2055);
});
cljc.java_time.local_date_time.to_epoch_second = (function cljc$java_time$local_date_time$to_epoch_second(this2056,java_time_ZoneOffset2057){
return this2056.toEpochSecond(java_time_ZoneOffset2057);
});
cljc.java_time.local_date_time.until = (function cljc$java_time$local_date_time$until(this2058,java_time_temporal_Temporal2059,java_time_temporal_TemporalUnit2060){
return this2058.until(java_time_temporal_Temporal2059,java_time_temporal_TemporalUnit2060);
});
cljc.java_time.local_date_time.with_day_of_month = (function cljc$java_time$local_date_time$with_day_of_month(this2061,int2062){
return this2061.withDayOfMonth(int2062);
});
cljc.java_time.local_date_time.get_day_of_month = (function cljc$java_time$local_date_time$get_day_of_month(this2063){
return this2063.dayOfMonth();
});
cljc.java_time.local_date_time.from = (function cljc$java_time$local_date_time$from(java_time_temporal_TemporalAccessor2064){
return java.time.LocalDateTime.from(java_time_temporal_TemporalAccessor2064);
});
cljc.java_time.local_date_time.is_after = (function cljc$java_time$local_date_time$is_after(this2065,java_time_chrono_ChronoLocalDateTime2066){
return this2065.isAfter(java_time_chrono_ChronoLocalDateTime2066);
});
cljc.java_time.local_date_time.minus_nanos = (function cljc$java_time$local_date_time$minus_nanos(this2067,long2068){
return this2067.minusNanos(long2068);
});
cljc.java_time.local_date_time.is_supported = (function cljc$java_time$local_date_time$is_supported(this2069,G__2070){
return this2069.isSupported(G__2070);
});
cljc.java_time.local_date_time.minus_years = (function cljc$java_time$local_date_time$minus_years(this2071,long2072){
return this2071.minusYears(long2072);
});
cljc.java_time.local_date_time.get_chronology = (function cljc$java_time$local_date_time$get_chronology(this2073){
return this2073.chronology();
});
cljc.java_time.local_date_time.parse = (function cljc$java_time$local_date_time$parse(var_args){
var G__15922 = arguments.length;
switch (G__15922) {
case 2:
return cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence2074,java_time_format_DateTimeFormatter2075){
return java.time.LocalDateTime.parse(java_lang_CharSequence2074,java_time_format_DateTimeFormatter2075);
});

cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence2076){
return java.time.LocalDateTime.parse(java_lang_CharSequence2076);
});

cljc.java_time.local_date_time.parse.cljs$lang$maxFixedArity = 2;

cljc.java_time.local_date_time.with_second = (function cljc$java_time$local_date_time$with_second(this2077,int2078){
return this2077.withSecond(int2078);
});
cljc.java_time.local_date_time.to_local_date = (function cljc$java_time$local_date_time$to_local_date(this2079){
return this2079.toLocalDate();
});
cljc.java_time.local_date_time.get_minute = (function cljc$java_time$local_date_time$get_minute(this2080){
return this2080.minute();
});
cljc.java_time.local_date_time.hash_code = (function cljc$java_time$local_date_time$hash_code(this2081){
return this2081.hashCode();
});
cljc.java_time.local_date_time.adjust_into = (function cljc$java_time$local_date_time$adjust_into(this2082,java_time_temporal_Temporal2083){
return this2082.adjustInto(java_time_temporal_Temporal2083);
});
cljc.java_time.local_date_time.with$ = (function cljc$java_time$local_date_time$with(var_args){
var G__15925 = arguments.length;
switch (G__15925) {
case 2:
return cljc.java_time.local_date_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_date_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this2084,G__2085){
return this2084.with(G__2085);
});

cljc.java_time.local_date_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this2086,G__2087,G__2088){
return this2086.with(G__2087,G__2088);
});

cljc.java_time.local_date_time.with$.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_date_time.now = (function cljc$java_time$local_date_time$now(var_args){
var G__15928 = arguments.length;
switch (G__15928) {
case 0:
return cljc.java_time.local_date_time.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.local_date_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.LocalDateTime.now();
});

cljc.java_time.local_date_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__2090){
return java.time.LocalDateTime.now(G__2090);
});

cljc.java_time.local_date_time.now.cljs$lang$maxFixedArity = 1;

cljc.java_time.local_date_time.get_month_value = (function cljc$java_time$local_date_time$get_month_value(this2091){
return this2091.monthValue();
});
cljc.java_time.local_date_time.with_day_of_year = (function cljc$java_time$local_date_time$with_day_of_year(this2092,int2093){
return this2092.withDayOfYear(int2093);
});
cljc.java_time.local_date_time.compare_to = (function cljc$java_time$local_date_time$compare_to(this2094,G__2095){
return this2094.compareTo(G__2095);
});
cljc.java_time.local_date_time.get_month = (function cljc$java_time$local_date_time$get_month(this2096){
return this2096.month();
});
cljc.java_time.local_date_time.of_instant = (function cljc$java_time$local_date_time$of_instant(java_time_Instant2097,java_time_ZoneId2098){
return java.time.LocalDateTime.ofInstant(java_time_Instant2097,java_time_ZoneId2098);
});
cljc.java_time.local_date_time.plus_seconds = (function cljc$java_time$local_date_time$plus_seconds(this2099,long2100){
return this2099.plusSeconds(long2100);
});
cljc.java_time.local_date_time.get = (function cljc$java_time$local_date_time$get(this2101,java_time_temporal_TemporalField2102){
return this2101.get(java_time_temporal_TemporalField2102);
});
cljc.java_time.local_date_time.equals = (function cljc$java_time$local_date_time$equals(this2103,java_lang_Object2104){
return this2103.equals(java_lang_Object2104);
});
cljc.java_time.local_date_time.format = (function cljc$java_time$local_date_time$format(this2105,java_time_format_DateTimeFormatter2106){
return this2105.format(java_time_format_DateTimeFormatter2106);
});
cljc.java_time.local_date_time.plus_years = (function cljc$java_time$local_date_time$plus_years(this2107,long2108){
return this2107.plusYears(long2108);
});
cljc.java_time.local_date_time.minus_days = (function cljc$java_time$local_date_time$minus_days(this2109,long2110){
return this2109.minusDays(long2110);
});

//# sourceMappingURL=local_date_time.js.map
