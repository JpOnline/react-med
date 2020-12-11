// Compiled by ClojureScript 1.10.520 {}
goog.provide('time_literals.read_write');
goog.require('cljs.core');
goog.require('java.time');
goog.require('cljs.reader');
time_literals.read_write.print_to_string = (function time_literals$read_write$print_to_string(t,o){
return ["#time/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)," \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),"\""].join('');
});
time_literals.read_write.print_period = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"period");
time_literals.read_write.print_date = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"date");
time_literals.read_write.print_date_time = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"date-time");
time_literals.read_write.print_zoned_date_time = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"zoned-date-time");
time_literals.read_write.print_offset_time = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"offset-time");
time_literals.read_write.print_instant = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"instant");
time_literals.read_write.print_offset_date_time = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"offset-date-time");
time_literals.read_write.print_zone = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"zone");
time_literals.read_write.print_day_of_week = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"day-of-week");
time_literals.read_write.print_time = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"time");
time_literals.read_write.print_month = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"month");
time_literals.read_write.print_month_day = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"month-day");
time_literals.read_write.print_duration = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"duration");
time_literals.read_write.print_year = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"year");
time_literals.read_write.print_year_month = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"year-month");
time_literals.read_write.print_time_literals_cljs_BANG_ = (function time_literals$read_write$print_time_literals_cljs_BANG_(){
java.time.MonthDay.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.MonthDay.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_month_day.call(null,d__$1));
});

java.time.YearMonth.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.YearMonth.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_year_month.call(null,d__$1));
});

java.time.Year.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_year.call(null,d__$1));
});

java.time.ZonedDateTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_zoned_date_time.call(null,d__$1));
});

java.time.OffsetTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.OffsetTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_offset_time.call(null,d__$1));
});

java.time.Instant.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_instant.call(null,d__$1));
});

java.time.ZoneId.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZoneId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_zone.call(null,d__$1));
});

java.time.LocalDate.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_date.call(null,d__$1));
});

java.time.LocalTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_time.call(null,d__$1));
});

java.time.LocalDateTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_date_time.call(null,d__$1));
});

java.time.Month.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Month.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_month.call(null,d__$1));
});

java.time.Period.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_period.call(null,d__$1));
});

java.time.DayOfWeek.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.DayOfWeek.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_day_of_week.call(null,d__$1));
});

java.time.Duration.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

return java.time.Duration.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_duration.call(null,d__$1));
});
});
time_literals.read_write.print_time_literals_clj_BANG_ = (function time_literals$read_write$print_time_literals_clj_BANG_(){
return null;
});
time_literals.read_write.tags = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol("time","instant","time/instant",-2013236992,null),new cljs.core.Symbol("time","duration","time/duration",-1273941668,null),new cljs.core.Symbol("time","offset-date-time","time/offset-date-time",-1254592482,null),new cljs.core.Symbol("time","day-of-week","time/day-of-week",-1018890461,null),new cljs.core.Symbol("time","time","time/time",-1246984162,null),new cljs.core.Symbol("time","year-month","time/year-month",-1840595535,null),new cljs.core.Symbol("time","offset-time","time/offset-time",-1026521346,null),new cljs.core.Symbol("time","period","time/period",1291634901,null),new cljs.core.Symbol("time","zoned-date-time","time/zoned-date-time",-2125640645,null),new cljs.core.Symbol("time","month","time/month",-324062169,null),new cljs.core.Symbol("time","date","time/date",179823674,null),new cljs.core.Symbol("time","year","time/year",1979222727,null),new cljs.core.Symbol("time","month-day","time/month-day",61138729,null),new cljs.core.Symbol("time","date-time","time/date-time",1814680468,null),new cljs.core.Symbol("time","zone","time/zone",-580695523,null)],[(function (t){
return java.time.Instant.parse(t);
}),(function (t){
return java.time.Duration.parse(t);
}),(function (t){
return java.time.OffsetDateTime.parse(t);
}),(function (t){
return java.time.DayOfWeek.valueOf(t);
}),(function (t){
return java.time.LocalTime.parse(t);
}),(function (t){
return java.time.YearMonth.parse(t);
}),(function (t){
return java.time.OffsetTime.parse(t);
}),(function (t){
return java.time.Period.parse(t);
}),(function (t){
return java.time.ZonedDateTime.parse(t);
}),(function (t){
return java.time.Month.valueOf(t);
}),(function (t){
return java.time.LocalDate.parse(t);
}),(function (t){
return java.time.Year.parse(t);
}),(function (t){
return java.time.MonthDay.parse(t);
}),(function (t){
return java.time.LocalDateTime.parse(t);
}),(function (t){
return java.time.ZoneId.of(t);
})]);
var seq__15843_15859 = cljs.core.seq.call(null,time_literals.read_write.tags);
var chunk__15844_15860 = null;
var count__15845_15861 = (0);
var i__15846_15862 = (0);
while(true){
if((i__15846_15862 < count__15845_15861)){
var vec__15853_15863 = cljs.core._nth.call(null,chunk__15844_15860,i__15846_15862);
var tag_15864 = cljs.core.nth.call(null,vec__15853_15863,(0),null);
var read_fn_15865 = cljs.core.nth.call(null,vec__15853_15863,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_15864,read_fn_15865);


var G__15866 = seq__15843_15859;
var G__15867 = chunk__15844_15860;
var G__15868 = count__15845_15861;
var G__15869 = (i__15846_15862 + (1));
seq__15843_15859 = G__15866;
chunk__15844_15860 = G__15867;
count__15845_15861 = G__15868;
i__15846_15862 = G__15869;
continue;
} else {
var temp__5735__auto___15870 = cljs.core.seq.call(null,seq__15843_15859);
if(temp__5735__auto___15870){
var seq__15843_15871__$1 = temp__5735__auto___15870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15843_15871__$1)){
var c__4550__auto___15872 = cljs.core.chunk_first.call(null,seq__15843_15871__$1);
var G__15873 = cljs.core.chunk_rest.call(null,seq__15843_15871__$1);
var G__15874 = c__4550__auto___15872;
var G__15875 = cljs.core.count.call(null,c__4550__auto___15872);
var G__15876 = (0);
seq__15843_15859 = G__15873;
chunk__15844_15860 = G__15874;
count__15845_15861 = G__15875;
i__15846_15862 = G__15876;
continue;
} else {
var vec__15856_15877 = cljs.core.first.call(null,seq__15843_15871__$1);
var tag_15878 = cljs.core.nth.call(null,vec__15856_15877,(0),null);
var read_fn_15879 = cljs.core.nth.call(null,vec__15856_15877,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_15878,read_fn_15879);


var G__15880 = cljs.core.next.call(null,seq__15843_15871__$1);
var G__15881 = null;
var G__15882 = (0);
var G__15883 = (0);
seq__15843_15859 = G__15880;
chunk__15844_15860 = G__15881;
count__15845_15861 = G__15882;
i__15846_15862 = G__15883;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=read_write.js.map
