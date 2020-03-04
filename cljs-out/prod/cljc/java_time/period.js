// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.period');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.period.zero = java.time.Period.ZERO;
cljc.java_time.period.get_months = (function cljc$java_time$period$get_months(this1795){
return this1795.months();
});
cljc.java_time.period.of_weeks = (function cljc$java_time$period$of_weeks(int1796){
return java.time.Period.ofWeeks(int1796);
});
cljc.java_time.period.of_days = (function cljc$java_time$period$of_days(int1797){
return java.time.Period.ofDays(int1797);
});
cljc.java_time.period.is_negative = (function cljc$java_time$period$is_negative(this1798){
return this1798.isNegative();
});
cljc.java_time.period.of = (function cljc$java_time$period$of(int1799,int1800,int1801){
return java.time.Period.of(int1799,int1800,int1801);
});
cljc.java_time.period.is_zero = (function cljc$java_time$period$is_zero(this1802){
return this1802.isZero();
});
cljc.java_time.period.multiplied_by = (function cljc$java_time$period$multiplied_by(this1803,G__1804){
return this1803.multipliedBy(G__1804);
});
cljc.java_time.period.get_units = (function cljc$java_time$period$get_units(this1805){
return this1805.units();
});
cljc.java_time.period.with_days = (function cljc$java_time$period$with_days(this1806,int1807){
return this1806.withDays(int1807);
});
cljc.java_time.period.plus = (function cljc$java_time$period$plus(this1808,G__1809){
return this1808.plus(G__1809);
});
cljc.java_time.period.of_months = (function cljc$java_time$period$of_months(int1810){
return java.time.Period.ofMonths(int1810);
});
cljc.java_time.period.to_string = (function cljc$java_time$period$to_string(this1811){
return this1811.toString();
});
cljc.java_time.period.plus_months = (function cljc$java_time$period$plus_months(this1812,long1813){
return this1812.plusMonths(long1813);
});
cljc.java_time.period.minus_months = (function cljc$java_time$period$minus_months(this1814,long1815){
return this1814.minusMonths(long1815);
});
cljc.java_time.period.minus = (function cljc$java_time$period$minus(this1816,G__1817){
return this1816.minus(G__1817);
});
cljc.java_time.period.add_to = (function cljc$java_time$period$add_to(this1818,java_time_temporal_Temporal1819){
return this1818.addTo(java_time_temporal_Temporal1819);
});
cljc.java_time.period.to_total_months = (function cljc$java_time$period$to_total_months(this1820){
return this1820.toTotalMonths();
});
cljc.java_time.period.plus_days = (function cljc$java_time$period$plus_days(this1821,long1822){
return this1821.plusDays(long1822);
});
cljc.java_time.period.of_years = (function cljc$java_time$period$of_years(int1823){
return java.time.Period.ofYears(int1823);
});
cljc.java_time.period.get_days = (function cljc$java_time$period$get_days(this1824){
return this1824.days();
});
cljc.java_time.period.negated = (function cljc$java_time$period$negated(this1825){
return this1825.negated();
});
cljc.java_time.period.get_years = (function cljc$java_time$period$get_years(this1826){
return this1826.years();
});
cljc.java_time.period.with_years = (function cljc$java_time$period$with_years(this1827,int1828){
return this1827.withYears(int1828);
});
cljc.java_time.period.normalized = (function cljc$java_time$period$normalized(this1829){
return this1829.normalized();
});
cljc.java_time.period.with_months = (function cljc$java_time$period$with_months(this1830,int1831){
return this1830.withMonths(int1831);
});
cljc.java_time.period.between = (function cljc$java_time$period$between(java_time_LocalDate1832,java_time_LocalDate1833){
return java.time.Period.between(java_time_LocalDate1832,java_time_LocalDate1833);
});
cljc.java_time.period.from = (function cljc$java_time$period$from(java_time_temporal_TemporalAmount1834){
return java.time.Period.from(java_time_temporal_TemporalAmount1834);
});
cljc.java_time.period.minus_years = (function cljc$java_time$period$minus_years(this1835,long1836){
return this1835.minusYears(long1836);
});
cljc.java_time.period.get_chronology = (function cljc$java_time$period$get_chronology(this1837){
return this1837.chronology();
});
cljc.java_time.period.parse = (function cljc$java_time$period$parse(java_lang_CharSequence1838){
return java.time.Period.parse(java_lang_CharSequence1838);
});
cljc.java_time.period.hash_code = (function cljc$java_time$period$hash_code(this1839){
return this1839.hashCode();
});
cljc.java_time.period.subtract_from = (function cljc$java_time$period$subtract_from(this1840,java_time_temporal_Temporal1841){
return this1840.subtractFrom(java_time_temporal_Temporal1841);
});
cljc.java_time.period.get = (function cljc$java_time$period$get(this1842,java_time_temporal_TemporalUnit1843){
return this1842.get(java_time_temporal_TemporalUnit1843);
});
cljc.java_time.period.equals = (function cljc$java_time$period$equals(this1844,java_lang_Object1845){
return this1844.equals(java_lang_Object1845);
});
cljc.java_time.period.plus_years = (function cljc$java_time$period$plus_years(this1846,long1847){
return this1846.plusYears(long1847);
});
cljc.java_time.period.minus_days = (function cljc$java_time$period$minus_days(this1848,long1849){
return this1848.minusDays(long1849);
});

//# sourceMappingURL=period.js.map
