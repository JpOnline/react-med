// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.local_date');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.local_date.max = java.time.LocalDate.MAX;
cljc.java_time.local_date.min = java.time.LocalDate.MIN;
cljc.java_time.local_date.minus_weeks = (function cljc$java_time$local_date$minus_weeks(this1850,long1851){
return this1850.minusWeeks(long1851);
});
cljc.java_time.local_date.plus_weeks = (function cljc$java_time$local_date$plus_weeks(this1852,long1853){
return this1852.plusWeeks(long1853);
});
cljc.java_time.local_date.length_of_year = (function cljc$java_time$local_date$length_of_year(this1854){
return this1854.lengthOfYear();
});
cljc.java_time.local_date.range = (function cljc$java_time$local_date$range(this1855,java_time_temporal_TemporalField1856){
return this1855.range(java_time_temporal_TemporalField1856);
});
cljc.java_time.local_date.get_era = (function cljc$java_time$local_date$get_era(this1857){
return this1857.era();
});
cljc.java_time.local_date.of = (function cljc$java_time$local_date$of(G__1859,G__1860,G__1861){
return java.time.LocalDate.of(G__1859,G__1860,G__1861);
});
cljc.java_time.local_date.with_month = (function cljc$java_time$local_date$with_month(this1862,int1863){
return this1862.withMonth(int1863);
});
cljc.java_time.local_date.is_equal = (function cljc$java_time$local_date$is_equal(this1864,java_time_chrono_ChronoLocalDate1865){
return this1864.isEqual(java_time_chrono_ChronoLocalDate1865);
});
cljc.java_time.local_date.get_year = (function cljc$java_time$local_date$get_year(this1866){
return this1866.year();
});
cljc.java_time.local_date.to_epoch_day = (function cljc$java_time$local_date$to_epoch_day(this1867){
return this1867.toEpochDay();
});
cljc.java_time.local_date.get_day_of_year = (function cljc$java_time$local_date$get_day_of_year(this1868){
return this1868.dayOfYear();
});
cljc.java_time.local_date.plus = (function cljc$java_time$local_date$plus(var_args){
var G__8311 = arguments.length;
switch (G__8311) {
case 3:
return cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$3 = (function (this1869,G__1870,G__1871){
return this1869.plus(G__1870,G__1871);
});

cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$2 = (function (this1872,G__1873){
return this1872.plus(G__1873);
});

cljc.java_time.local_date.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_date.is_leap_year = (function cljc$java_time$local_date$is_leap_year(this1874){
return this1874.isLeapYear();
});
cljc.java_time.local_date.query = (function cljc$java_time$local_date$query(this1875,java_time_temporal_TemporalQuery1876){
return this1875.query(java_time_temporal_TemporalQuery1876);
});
cljc.java_time.local_date.get_day_of_week = (function cljc$java_time$local_date$get_day_of_week(this1877){
return this1877.dayOfWeek();
});
cljc.java_time.local_date.to_string = (function cljc$java_time$local_date$to_string(this1878){
return this1878.toString();
});
cljc.java_time.local_date.plus_months = (function cljc$java_time$local_date$plus_months(this1879,long1880){
return this1879.plusMonths(long1880);
});
cljc.java_time.local_date.is_before = (function cljc$java_time$local_date$is_before(this1881,java_time_chrono_ChronoLocalDate1882){
return this1881.isBefore(java_time_chrono_ChronoLocalDate1882);
});
cljc.java_time.local_date.minus_months = (function cljc$java_time$local_date$minus_months(this1883,long1884){
return this1883.minusMonths(long1884);
});
cljc.java_time.local_date.minus = (function cljc$java_time$local_date$minus(var_args){
var G__8314 = arguments.length;
switch (G__8314) {
case 3:
return cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$3 = (function (this1885,G__1886,G__1887){
return this1885.minus(G__1886,G__1887);
});

cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$2 = (function (this1888,G__1889){
return this1888.minus(G__1889);
});

cljc.java_time.local_date.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_date.plus_days = (function cljc$java_time$local_date$plus_days(this1890,long1891){
return this1890.plusDays(long1891);
});
cljc.java_time.local_date.get_long = (function cljc$java_time$local_date$get_long(this1892,java_time_temporal_TemporalField1893){
return this1892.getLong(java_time_temporal_TemporalField1893);
});
cljc.java_time.local_date.with_year = (function cljc$java_time$local_date$with_year(this1894,int1895){
return this1894.withYear(int1895);
});
cljc.java_time.local_date.length_of_month = (function cljc$java_time$local_date$length_of_month(this1896){
return this1896.lengthOfMonth();
});
cljc.java_time.local_date.until = (function cljc$java_time$local_date$until(var_args){
var G__8317 = arguments.length;
switch (G__8317) {
case 2:
return cljc.java_time.local_date.until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_date.until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date.until.cljs$core$IFn$_invoke$arity$2 = (function (this1897,G__1898){
return this1897.until(G__1898);
});

cljc.java_time.local_date.until.cljs$core$IFn$_invoke$arity$3 = (function (this1899,java_time_temporal_Temporal1900,java_time_temporal_TemporalUnit1901){
return this1899.until(java_time_temporal_Temporal1900,java_time_temporal_TemporalUnit1901);
});

cljc.java_time.local_date.until.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_date.of_epoch_day = (function cljc$java_time$local_date$of_epoch_day(long1902){
return java.time.LocalDate.ofEpochDay(long1902);
});
cljc.java_time.local_date.with_day_of_month = (function cljc$java_time$local_date$with_day_of_month(this1903,int1904){
return this1903.withDayOfMonth(int1904);
});
cljc.java_time.local_date.get_day_of_month = (function cljc$java_time$local_date$get_day_of_month(this1905){
return this1905.dayOfMonth();
});
cljc.java_time.local_date.from = (function cljc$java_time$local_date$from(java_time_temporal_TemporalAccessor1906){
return java.time.LocalDate.from(java_time_temporal_TemporalAccessor1906);
});
cljc.java_time.local_date.is_after = (function cljc$java_time$local_date$is_after(this1907,java_time_chrono_ChronoLocalDate1908){
return this1907.isAfter(java_time_chrono_ChronoLocalDate1908);
});
cljc.java_time.local_date.is_supported = (function cljc$java_time$local_date$is_supported(this1909,G__1910){
return this1909.isSupported(G__1910);
});
cljc.java_time.local_date.minus_years = (function cljc$java_time$local_date$minus_years(this1911,long1912){
return this1911.minusYears(long1912);
});
cljc.java_time.local_date.get_chronology = (function cljc$java_time$local_date$get_chronology(this1913){
return this1913.chronology();
});
cljc.java_time.local_date.parse = (function cljc$java_time$local_date$parse(var_args){
var G__8320 = arguments.length;
switch (G__8320) {
case 2:
return cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence1914,java_time_format_DateTimeFormatter1915){
return java.time.LocalDate.parse(java_lang_CharSequence1914,java_time_format_DateTimeFormatter1915);
});

cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence1916){
return java.time.LocalDate.parse(java_lang_CharSequence1916);
});

cljc.java_time.local_date.parse.cljs$lang$maxFixedArity = 2;

cljc.java_time.local_date.hash_code = (function cljc$java_time$local_date$hash_code(this1917){
return this1917.hashCode();
});
cljc.java_time.local_date.adjust_into = (function cljc$java_time$local_date$adjust_into(this1918,java_time_temporal_Temporal1919){
return this1918.adjustInto(java_time_temporal_Temporal1919);
});
cljc.java_time.local_date.with$ = (function cljc$java_time$local_date$with(var_args){
var G__8323 = arguments.length;
switch (G__8323) {
case 3:
return cljc.java_time.local_date.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_date.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date.with$.cljs$core$IFn$_invoke$arity$3 = (function (this1920,G__1921,G__1922){
return this1920.with(G__1921,G__1922);
});

cljc.java_time.local_date.with$.cljs$core$IFn$_invoke$arity$2 = (function (this1923,G__1924){
return this1923.with(G__1924);
});

cljc.java_time.local_date.with$.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_date.now = (function cljc$java_time$local_date$now(var_args){
var G__8326 = arguments.length;
switch (G__8326) {
case 0:
return cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.LocalDate.now();
});

cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$1 = (function (G__1926){
return java.time.LocalDate.now(G__1926);
});

cljc.java_time.local_date.now.cljs$lang$maxFixedArity = 1;

cljc.java_time.local_date.at_start_of_day = (function cljc$java_time$local_date$at_start_of_day(var_args){
var G__8329 = arguments.length;
switch (G__8329) {
case 2:
return cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$2 = (function (this1927,java_time_ZoneId1928){
return this1927.atStartOfDay(java_time_ZoneId1928);
});

cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$1 = (function (this1929){
return this1929.atStartOfDay();
});

cljc.java_time.local_date.at_start_of_day.cljs$lang$maxFixedArity = 2;

cljc.java_time.local_date.get_month_value = (function cljc$java_time$local_date$get_month_value(this1930){
return this1930.monthValue();
});
cljc.java_time.local_date.with_day_of_year = (function cljc$java_time$local_date$with_day_of_year(this1931,int1932){
return this1931.withDayOfYear(int1932);
});
cljc.java_time.local_date.compare_to = (function cljc$java_time$local_date$compare_to(this1933,G__1934){
return this1933.compareTo(G__1934);
});
cljc.java_time.local_date.get_month = (function cljc$java_time$local_date$get_month(this1935){
return this1935.month();
});
cljc.java_time.local_date.of_year_day = (function cljc$java_time$local_date$of_year_day(int1936,int1937){
return java.time.LocalDate.ofYearDay(int1936,int1937);
});
cljc.java_time.local_date.get = (function cljc$java_time$local_date$get(this1938,java_time_temporal_TemporalField1939){
return this1938.get(java_time_temporal_TemporalField1939);
});
cljc.java_time.local_date.equals = (function cljc$java_time$local_date$equals(this1940,java_lang_Object1941){
return this1940.equals(java_lang_Object1941);
});
cljc.java_time.local_date.at_time = (function cljc$java_time$local_date$at_time(var_args){
var G__8332 = arguments.length;
switch (G__8332) {
case 5:
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 3:
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$5 = (function (this1942,int1943,int1944,int1945,int1946){
return this1942.atTime(int1943,int1944,int1945,int1946);
});

cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$3 = (function (this1947,int1948,int1949){
return this1947.atTime(int1948,int1949);
});

cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$4 = (function (this1950,int1951,int1952,int1953){
return this1950.atTime(int1951,int1952,int1953);
});

cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$2 = (function (this1954,G__1955){
return this1954.atTime(G__1955);
});

cljc.java_time.local_date.at_time.cljs$lang$maxFixedArity = 5;

cljc.java_time.local_date.format = (function cljc$java_time$local_date$format(this1956,java_time_format_DateTimeFormatter1957){
return this1956.format(java_time_format_DateTimeFormatter1957);
});
cljc.java_time.local_date.plus_years = (function cljc$java_time$local_date$plus_years(this1958,long1959){
return this1958.plusYears(long1959);
});
cljc.java_time.local_date.minus_days = (function cljc$java_time$local_date$minus_days(this1960,long1961){
return this1960.minusDays(long1961);
});

//# sourceMappingURL=local_date.js.map
