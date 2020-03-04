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
var seq__8900_8916 = cljs.core.seq.call(null,time_literals.read_write.tags);
var chunk__8901_8917 = null;
var count__8902_8918 = (0);
var i__8903_8919 = (0);
while(true){
if((i__8903_8919 < count__8902_8918)){
var vec__8910_8920 = cljs.core._nth.call(null,chunk__8901_8917,i__8903_8919);
var tag_8921 = cljs.core.nth.call(null,vec__8910_8920,(0),null);
var read_fn_8922 = cljs.core.nth.call(null,vec__8910_8920,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_8921,read_fn_8922);


var G__8923 = seq__8900_8916;
var G__8924 = chunk__8901_8917;
var G__8925 = count__8902_8918;
var G__8926 = (i__8903_8919 + (1));
seq__8900_8916 = G__8923;
chunk__8901_8917 = G__8924;
count__8902_8918 = G__8925;
i__8903_8919 = G__8926;
continue;
} else {
var temp__5735__auto___8927 = cljs.core.seq.call(null,seq__8900_8916);
if(temp__5735__auto___8927){
var seq__8900_8928__$1 = temp__5735__auto___8927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8900_8928__$1)){
var c__4550__auto___8929 = cljs.core.chunk_first.call(null,seq__8900_8928__$1);
var G__8930 = cljs.core.chunk_rest.call(null,seq__8900_8928__$1);
var G__8931 = c__4550__auto___8929;
var G__8932 = cljs.core.count.call(null,c__4550__auto___8929);
var G__8933 = (0);
seq__8900_8916 = G__8930;
chunk__8901_8917 = G__8931;
count__8902_8918 = G__8932;
i__8903_8919 = G__8933;
continue;
} else {
var vec__8913_8934 = cljs.core.first.call(null,seq__8900_8928__$1);
var tag_8935 = cljs.core.nth.call(null,vec__8913_8934,(0),null);
var read_fn_8936 = cljs.core.nth.call(null,vec__8913_8934,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_8935,read_fn_8936);


var G__8937 = cljs.core.next.call(null,seq__8900_8928__$1);
var G__8938 = null;
var G__8939 = (0);
var G__8940 = (0);
seq__8900_8916 = G__8937;
chunk__8901_8917 = G__8938;
count__8902_8918 = G__8939;
i__8903_8919 = G__8940;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=read_write.js.map
