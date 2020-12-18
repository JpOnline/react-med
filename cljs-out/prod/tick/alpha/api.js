// Compiled by ClojureScript 1.10.520 {}
goog.provide('tick.alpha.api');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('tick.core');
goog.require('tick.format');
goog.require('tick.interval');
goog.require('clojure.set');
goog.require('java.time');
goog.require('java.time.format');
tick.alpha.api.new_time = tick.core.new_time;
tick.alpha.api.new_date = tick.core.new_date;
tick.alpha.api.unit_map = tick.core.unit_map;
tick.alpha.api.now = (function tick$alpha$api$now(){
return tick.core.now.call(null);
});
tick.alpha.api.today = (function tick$alpha$api$today(){
return tick.core.today.call(null);
});
tick.alpha.api.tomorrow = (function tick$alpha$api$tomorrow(){
return tick.core.tomorrow.call(null);
});
tick.alpha.api.yesterday = (function tick$alpha$api$yesterday(){
return tick.core.yesterday.call(null);
});
tick.alpha.api.time = (function tick$alpha$api$time(var_args){
var G__20205 = arguments.length;
switch (G__20205) {
case 0:
return tick.alpha.api.time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.time.call(null,tick.alpha.api.now.call(null));
});

tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.time.call(null,v);
});

tick.alpha.api.time.cljs$lang$maxFixedArity = 1;

tick.alpha.api.date = (function tick$alpha$api$date(var_args){
var G__20208 = arguments.length;
switch (G__20208) {
case 0:
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.date.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.alpha.api.today.call(null);
});

tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.date.call(null,v);
});

tick.alpha.api.date.cljs$lang$maxFixedArity = 1;

tick.alpha.api.inst = (function tick$alpha$api$inst(var_args){
var G__20211 = arguments.length;
switch (G__20211) {
case 0:
return tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.inst.call(null,tick.alpha.api.now.call(null));
});

tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.inst.call(null,v);
});

tick.alpha.api.inst.cljs$lang$maxFixedArity = 1;

tick.alpha.api.instant = (function tick$alpha$api$instant(var_args){
var G__20214 = arguments.length;
switch (G__20214) {
case 0:
return tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.instant.call(null,tick.alpha.api.now.call(null));
});

tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.instant.call(null,v);
});

tick.alpha.api.instant.cljs$lang$maxFixedArity = 1;

tick.alpha.api.date_time = (function tick$alpha$api$date_time(var_args){
var G__20217 = arguments.length;
switch (G__20217) {
case 0:
return tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.date_time.call(null,tick.alpha.api.now.call(null));
});

tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.date_time.call(null,v);
});

tick.alpha.api.date_time.cljs$lang$maxFixedArity = 1;

tick.alpha.api.offset_date_time = (function tick$alpha$api$offset_date_time(var_args){
var G__20220 = arguments.length;
switch (G__20220) {
case 0:
return tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.offset_date_time.call(null,tick.alpha.api.now.call(null));
});

tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.offset_date_time.call(null,v);
});

tick.alpha.api.offset_date_time.cljs$lang$maxFixedArity = 1;

tick.alpha.api.zoned_date_time = (function tick$alpha$api$zoned_date_time(var_args){
var G__20223 = arguments.length;
switch (G__20223) {
case 0:
return tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.zoned_date_time.call(null,tick.alpha.api.now.call(null));
});

tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.zoned_date_time.call(null,v);
});

tick.alpha.api.zoned_date_time.cljs$lang$maxFixedArity = 1;

tick.alpha.api.nanosecond = (function tick$alpha$api$nanosecond(t){
return tick.core.nanosecond.call(null,t);
});
tick.alpha.api.microsecond = (function tick$alpha$api$microsecond(t){
return tick.core.microsecond.call(null,t);
});
tick.alpha.api.millisecond = (function tick$alpha$api$millisecond(t){
return tick.core.millisecond.call(null,t);
});
tick.alpha.api.second = (function tick$alpha$api$second(t){
return tick.core.second.call(null,t);
});
tick.alpha.api.minute = (function tick$alpha$api$minute(t){
return tick.core.minute.call(null,t);
});
tick.alpha.api.hour = (function tick$alpha$api$hour(t){
return tick.core.hour.call(null,t);
});
tick.alpha.api.day_of_week = (function tick$alpha$api$day_of_week(var_args){
var G__20226 = arguments.length;
switch (G__20226) {
case 0:
return tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.day_of_week.call(null,tick.alpha.api.today.call(null));
});

tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.day_of_week.call(null,v);
});

tick.alpha.api.day_of_week.cljs$lang$maxFixedArity = 1;

tick.alpha.api.day_of_month = (function tick$alpha$api$day_of_month(var_args){
var G__20229 = arguments.length;
switch (G__20229) {
case 0:
return tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.day_of_month.call(null,tick.alpha.api.today.call(null));
});

tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.day_of_month.call(null,v);
});

tick.alpha.api.day_of_month.cljs$lang$maxFixedArity = 1;

tick.alpha.api.month = (function tick$alpha$api$month(var_args){
var G__20232 = arguments.length;
switch (G__20232) {
case 0:
return tick.alpha.api.month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.month.call(null,tick.alpha.api.today.call(null));
});

tick.alpha.api.month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.month.call(null,v);
});

tick.alpha.api.month.cljs$lang$maxFixedArity = 1;

tick.alpha.api.year = (function tick$alpha$api$year(var_args){
var G__20235 = arguments.length;
switch (G__20235) {
case 0:
return tick.alpha.api.year.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.year.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.year.call(null,tick.alpha.api.today.call(null));
});

tick.alpha.api.year.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.year.call(null,v);
});

tick.alpha.api.year.cljs$lang$maxFixedArity = 1;

tick.alpha.api.year_month = (function tick$alpha$api$year_month(var_args){
var G__20238 = arguments.length;
switch (G__20238) {
case 0:
return tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.year_month.call(null,tick.alpha.api.today.call(null));
});

tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.year_month.call(null,v);
});

tick.alpha.api.year_month.cljs$lang$maxFixedArity = 1;

tick.alpha.api.zone = (function tick$alpha$api$zone(var_args){
var G__20241 = arguments.length;
switch (G__20241) {
case 0:
return tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.current_zone.call(null);
});

tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1 = (function (z){
return tick.core.zone.call(null,z);
});

tick.alpha.api.zone.cljs$lang$maxFixedArity = 1;

tick.alpha.api.zone_offset = (function tick$alpha$api$zone_offset(var_args){
var G__20244 = arguments.length;
switch (G__20244) {
case 1:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1 = (function (offset){
return tick.core.zone_offset.call(null,offset);
});

tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return java.time.ZoneOffset.ofHoursMinutes(hours,minutes);
});

tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return java.time.ZoneOffset.ofHoursMinutesSeconds(hours,minutes,seconds);
});

tick.alpha.api.zone_offset.cljs$lang$maxFixedArity = 3;

tick.alpha.api.on = (function tick$alpha$api$on(t,d){
return tick.core.on.call(null,t,tick.alpha.api.date.call(null,d));
});
tick.alpha.api.at = (function tick$alpha$api$at(d,t){
return tick.core.at.call(null,d,tick.alpha.api.time.call(null,t));
});
tick.alpha.api.in$ = (function tick$alpha$api$in(ldt,z){
return tick.core.in$.call(null,ldt,tick.alpha.api.zone.call(null,z));
});
tick.alpha.api.offset_by = (function tick$alpha$api$offset_by(ldt,offset){
return tick.core.offset_by.call(null,ldt,tick.alpha.api.zone_offset.call(null,offset));
});
tick.alpha.api.MONDAY = java.time.DayOfWeek.MONDAY;
tick.alpha.api.TUESDAY = java.time.DayOfWeek.TUESDAY;
tick.alpha.api.WEDNESDAY = java.time.DayOfWeek.WEDNESDAY;
tick.alpha.api.THURSDAY = java.time.DayOfWeek.THURSDAY;
tick.alpha.api.FRIDAY = java.time.DayOfWeek.FRIDAY;
tick.alpha.api.SATURDAY = java.time.DayOfWeek.SATURDAY;
tick.alpha.api.SUNDAY = java.time.DayOfWeek.SUNDAY;
tick.alpha.api.JANUARY = java.time.Month.JANUARY;
tick.alpha.api.FEBRUARY = java.time.Month.FEBRUARY;
tick.alpha.api.MARCH = java.time.Month.MARCH;
tick.alpha.api.APRIL = java.time.Month.APRIL;
tick.alpha.api.MAY = java.time.Month.MAY;
tick.alpha.api.JUNE = java.time.Month.JUNE;
tick.alpha.api.JULY = java.time.Month.JULY;
tick.alpha.api.AUGUST = java.time.Month.AUGUST;
tick.alpha.api.SEPTEMBER = java.time.Month.SEPTEMBER;
tick.alpha.api.OCTOBER = java.time.Month.OCTOBER;
tick.alpha.api.NOVEMBER = java.time.Month.NOVEMBER;
tick.alpha.api.DECEMBER = java.time.Month.DECEMBER;
tick.alpha.api.beginning = (function tick$alpha$api$beginning(v){
return tick.core.beginning.call(null,v);
});
tick.alpha.api.end = (function tick$alpha$api$end(v){
return tick.core.end.call(null,v);
});
tick.alpha.api.duration = (function tick$alpha$api$duration(v){
return tick.core.duration.call(null,v);
});
tick.alpha.api.coincident_QMARK_ = tick.core.coincident_QMARK_;
tick.alpha.api.noon = tick.core.noon;
tick.alpha.api.midnight = tick.core.midnight;
tick.alpha.api.midnight_QMARK_ = tick.core.midnight_QMARK_;
tick.alpha.api.epoch = tick.core.epoch;
tick.alpha.api.fields = tick.core.fields;
tick.alpha.api.with$ = tick.core.with$;
tick.alpha.api.ago = tick.core.ago;
tick.alpha.api.hence = tick.core.hence;
tick.alpha.api.UTC = tick.alpha.api.zone.call(null,"UTC");
tick.alpha.api.parse = tick.core.parse;
tick.alpha.api._PLUS_ = (function tick$alpha$api$_PLUS_(var_args){
var G__20251 = arguments.length;
switch (G__20251) {
case 0:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___20253 = arguments.length;
var i__4731__auto___20254 = (0);
while(true){
if((i__4731__auto___20254 < len__4730__auto___20253)){
args_arr__4751__auto__.push((arguments[i__4731__auto___20254]));

var G__20255 = (i__4731__auto___20254 + (1));
i__4731__auto___20254 = G__20255;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.Duration.ZERO;
});

tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return arg;
});

tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.call(null,(function (p1__20246_SHARP_,p2__20247_SHARP_){
return tick.core._PLUS_.call(null,p1__20246_SHARP_,p2__20247_SHARP_);
}),arg,args);
});

/** @this {Function} */
tick.alpha.api._PLUS_.cljs$lang$applyTo = (function (seq20249){
var G__20250 = cljs.core.first.call(null,seq20249);
var seq20249__$1 = cljs.core.next.call(null,seq20249);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20250,seq20249__$1);
});

tick.alpha.api._PLUS_.cljs$lang$maxFixedArity = (1);

tick.alpha.api._ = (function tick$alpha$api$_(var_args){
var G__20261 = arguments.length;
switch (G__20261) {
case 0:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___20263 = arguments.length;
var i__4731__auto___20264 = (0);
while(true){
if((i__4731__auto___20264 < len__4730__auto___20263)){
args_arr__4751__auto__.push((arguments[i__4731__auto___20264]));

var G__20265 = (i__4731__auto___20264 + (1));
i__4731__auto___20264 = G__20265;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

tick.alpha.api._.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.Duration.ZERO;
});

tick.alpha.api._.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return tick.core.negated.call(null,arg);
});

tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.call(null,(function (p1__20256_SHARP_,p2__20257_SHARP_){
return tick.core._.call(null,p1__20256_SHARP_,p2__20257_SHARP_);
}),arg,args);
});

/** @this {Function} */
tick.alpha.api._.cljs$lang$applyTo = (function (seq20259){
var G__20260 = cljs.core.first.call(null,seq20259);
var seq20259__$1 = cljs.core.next.call(null,seq20259);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20260,seq20259__$1);
});

tick.alpha.api._.cljs$lang$maxFixedArity = (1);

tick.alpha.api.inc = (function tick$alpha$api$inc(t){
return tick.core.inc.call(null,t);
});
tick.alpha.api.dec = (function tick$alpha$api$dec(t){
return tick.core.dec.call(null,t);
});
tick.alpha.api._GT__GT_ = (function tick$alpha$api$_GT__GT_(t,amt){
return tick.core._GT__GT_.call(null,t,amt);
});
tick.alpha.api._LT__LT_ = (function tick$alpha$api$_LT__LT_(t,amt){
return tick.core._LT__LT_.call(null,t,amt);
});
tick.alpha.api.max = tick.core.max;
tick.alpha.api.min = tick.core.min;
tick.alpha.api.min_of_type = tick.core.min_of_type;
tick.alpha.api.max_of_type = tick.core.max_of_type;
tick.alpha.api.range = tick.core.range;
tick.alpha.api.int$ = (function tick$alpha$api$int(arg){
return tick.core.int$.call(null,arg);
});
tick.alpha.api.long$ = (function tick$alpha$api$long(arg){
return tick.core.long$.call(null,arg);
});
tick.alpha.api.nanos = (function tick$alpha$api$nanos(v){
return tick.core.nanos.call(null,v);
});
tick.alpha.api.micros = (function tick$alpha$api$micros(v){
return tick.core.micros.call(null,v);
});
tick.alpha.api.millis = (function tick$alpha$api$millis(v){
return tick.core.millis.call(null,v);
});
tick.alpha.api.seconds = (function tick$alpha$api$seconds(v){
return tick.core.seconds.call(null,v);
});
tick.alpha.api.minutes = (function tick$alpha$api$minutes(v){
return tick.core.minutes.call(null,v);
});
tick.alpha.api.hours = (function tick$alpha$api$hours(v){
return tick.core.hours.call(null,v);
});
tick.alpha.api.days = (function tick$alpha$api$days(v){
return tick.core.days.call(null,v);
});
tick.alpha.api.months = (function tick$alpha$api$months(v){
return tick.core.months.call(null,v);
});
tick.alpha.api.years = (function tick$alpha$api$years(v){
return tick.core.years.call(null,v);
});
tick.alpha.api.units = tick.core.units;
tick.alpha.api.truncate = tick.core.truncate;
tick.alpha.api._LT_ = (function tick$alpha$api$_LT_(var_args){
var G__20270 = arguments.length;
switch (G__20270) {
case 1:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___20272 = arguments.length;
var i__4731__auto___20273 = (0);
while(true){
if((i__4731__auto___20273 < len__4730__auto___20272)){
args_arr__4751__auto__.push((arguments[i__4731__auto___20273]));

var G__20274 = (i__4731__auto___20273 + (1));
i__4731__auto___20273 = G__20274;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
});

tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.core._LT_.call(null,x,y);
});

tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._LT_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__20275 = y;
var G__20276 = cljs.core.first.call(null,more);
var G__20277 = cljs.core.next.call(null,more);
x = G__20275;
y = G__20276;
more = G__20277;
continue;
} else {
return tick.core._LT_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

/** @this {Function} */
tick.alpha.api._LT_.cljs$lang$applyTo = (function (seq20267){
var G__20268 = cljs.core.first.call(null,seq20267);
var seq20267__$1 = cljs.core.next.call(null,seq20267);
var G__20269 = cljs.core.first.call(null,seq20267__$1);
var seq20267__$2 = cljs.core.next.call(null,seq20267__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20268,G__20269,seq20267__$2);
});

tick.alpha.api._LT_.cljs$lang$maxFixedArity = (2);

tick.alpha.api._LT__EQ_ = (function tick$alpha$api$_LT__EQ_(var_args){
var G__20282 = arguments.length;
switch (G__20282) {
case 1:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___20284 = arguments.length;
var i__4731__auto___20285 = (0);
while(true){
if((i__4731__auto___20285 < len__4730__auto___20284)){
args_arr__4751__auto__.push((arguments[i__4731__auto___20285]));

var G__20286 = (i__4731__auto___20285 + (1));
i__4731__auto___20285 = G__20286;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
});

tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.core._LT__EQ_.call(null,x,y);
});

tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._LT__EQ_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__20287 = y;
var G__20288 = cljs.core.first.call(null,more);
var G__20289 = cljs.core.next.call(null,more);
x = G__20287;
y = G__20288;
more = G__20289;
continue;
} else {
return tick.core._LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

/** @this {Function} */
tick.alpha.api._LT__EQ_.cljs$lang$applyTo = (function (seq20279){
var G__20280 = cljs.core.first.call(null,seq20279);
var seq20279__$1 = cljs.core.next.call(null,seq20279);
var G__20281 = cljs.core.first.call(null,seq20279__$1);
var seq20279__$2 = cljs.core.next.call(null,seq20279__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20280,G__20281,seq20279__$2);
});

tick.alpha.api._LT__EQ_.cljs$lang$maxFixedArity = (2);

tick.alpha.api._GT_ = (function tick$alpha$api$_GT_(var_args){
var G__20294 = arguments.length;
switch (G__20294) {
case 1:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___20296 = arguments.length;
var i__4731__auto___20297 = (0);
while(true){
if((i__4731__auto___20297 < len__4730__auto___20296)){
args_arr__4751__auto__.push((arguments[i__4731__auto___20297]));

var G__20298 = (i__4731__auto___20297 + (1));
i__4731__auto___20297 = G__20298;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
});

tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.core._GT_.call(null,x,y);
});

tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._GT_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__20299 = y;
var G__20300 = cljs.core.first.call(null,more);
var G__20301 = cljs.core.next.call(null,more);
x = G__20299;
y = G__20300;
more = G__20301;
continue;
} else {
return tick.core._GT_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

/** @this {Function} */
tick.alpha.api._GT_.cljs$lang$applyTo = (function (seq20291){
var G__20292 = cljs.core.first.call(null,seq20291);
var seq20291__$1 = cljs.core.next.call(null,seq20291);
var G__20293 = cljs.core.first.call(null,seq20291__$1);
var seq20291__$2 = cljs.core.next.call(null,seq20291__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20292,G__20293,seq20291__$2);
});

tick.alpha.api._GT_.cljs$lang$maxFixedArity = (2);

tick.alpha.api._GT__EQ_ = (function tick$alpha$api$_GT__EQ_(var_args){
var G__20306 = arguments.length;
switch (G__20306) {
case 1:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___20308 = arguments.length;
var i__4731__auto___20309 = (0);
while(true){
if((i__4731__auto___20309 < len__4730__auto___20308)){
args_arr__4751__auto__.push((arguments[i__4731__auto___20309]));

var G__20310 = (i__4731__auto___20309 + (1));
i__4731__auto___20309 = G__20310;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
});

tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.core._GT__EQ_.call(null,x,y);
});

tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._GT__EQ_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__20311 = y;
var G__20312 = cljs.core.first.call(null,more);
var G__20313 = cljs.core.next.call(null,more);
x = G__20311;
y = G__20312;
more = G__20313;
continue;
} else {
return tick.core._GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

/** @this {Function} */
tick.alpha.api._GT__EQ_.cljs$lang$applyTo = (function (seq20303){
var G__20304 = cljs.core.first.call(null,seq20303);
var seq20303__$1 = cljs.core.next.call(null,seq20303);
var G__20305 = cljs.core.first.call(null,seq20303__$1);
var seq20303__$2 = cljs.core.next.call(null,seq20303__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20304,G__20305,seq20303__$2);
});

tick.alpha.api._GT__EQ_.cljs$lang$maxFixedArity = (2);

tick.alpha.api.clock = (function tick$alpha$api$clock(var_args){
var G__20315 = arguments.length;
switch (G__20315) {
case 0:
return tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.current_clock.call(null);
});

tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$1 = (function (i){
return tick.core.clock.call(null,i);
});

tick.alpha.api.clock.cljs$lang$maxFixedArity = 1;

var ret__4776__auto___20321 = (function (){
tick.alpha.api.with_clock = (function tick$alpha$api$with_clock(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20322 = arguments.length;
var i__4731__auto___20323 = (0);
while(true){
if((i__4731__auto___20323 < len__4730__auto___20322)){
args__4736__auto__.push((arguments[i__4731__auto___20323]));

var G__20324 = (i__4731__auto___20323 + (1));
i__4731__auto___20323 = G__20324;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return tick.alpha.api.with_clock.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

tick.alpha.api.with_clock.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clock,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tick.core","*clock*","tick.core/*clock*",762077043,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tick.core","clock","tick.core/clock",634291280,null),null,(1),null)),(new cljs.core.List(null,clock,null,(1),null))))),null,(1),null)))))),null,(1),null)),body)));
});

tick.alpha.api.with_clock.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
tick.alpha.api.with_clock.cljs$lang$applyTo = (function (seq20317){
var G__20318 = cljs.core.first.call(null,seq20317);
var seq20317__$1 = cljs.core.next.call(null,seq20317);
var G__20319 = cljs.core.first.call(null,seq20317__$1);
var seq20317__$2 = cljs.core.next.call(null,seq20317__$1);
var G__20320 = cljs.core.first.call(null,seq20317__$2);
var seq20317__$3 = cljs.core.next.call(null,seq20317__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20318,G__20319,G__20320,seq20317__$3);
});

return null;
})()
;
tick.alpha.api.with_clock.cljs$lang$macro = true;

tick.alpha.api.atom = tick.core.atom;
tick.alpha.api.swap_BANG_ = tick.core.swap_BANG_;
tick.alpha.api.swap_vals_BANG_ = tick.core.swap_vals_BANG_;
tick.alpha.api.compare_and_set_BANG_ = tick.core.compare_and_set_BANG_;
tick.alpha.api.reset_BANG_ = tick.core.reset_BANG_;
tick.alpha.api.reset_vals_BANG_ = tick.core.reset_vals_BANG_;
tick.alpha.api.new_interval = (function tick$alpha$api$new_interval(x,y){
return tick.interval.new_interval.call(null,x,y);
});
tick.alpha.api.extend = (function tick$alpha$api$extend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20327 = arguments.length;
var i__4731__auto___20328 = (0);
while(true){
if((i__4731__auto___20328 < len__4730__auto___20327)){
args__4736__auto__.push((arguments[i__4731__auto___20328]));

var G__20329 = (i__4731__auto___20328 + (1));
i__4731__auto___20328 = G__20329;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tick.alpha.api.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tick.alpha.api.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ival,durations){
return cljs.core.reduce.call(null,tick.interval.extend,ival,durations);
});

tick.alpha.api.extend.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tick.alpha.api.extend.cljs$lang$applyTo = (function (seq20325){
var G__20326 = cljs.core.first.call(null,seq20325);
var seq20325__$1 = cljs.core.next.call(null,seq20325);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20326,seq20325__$1);
});

tick.alpha.api.scale = (function tick$alpha$api$scale(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20332 = arguments.length;
var i__4731__auto___20333 = (0);
while(true){
if((i__4731__auto___20333 < len__4730__auto___20332)){
args__4736__auto__.push((arguments[i__4731__auto___20333]));

var G__20334 = (i__4731__auto___20333 + (1));
i__4731__auto___20333 = G__20334;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tick.alpha.api.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tick.alpha.api.scale.cljs$core$IFn$_invoke$arity$variadic = (function (ival,durations){
return cljs.core.reduce.call(null,tick.interval.extend,ival,durations);
});

tick.alpha.api.scale.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tick.alpha.api.scale.cljs$lang$applyTo = (function (seq20330){
var G__20331 = cljs.core.first.call(null,seq20330);
var seq20330__$1 = cljs.core.next.call(null,seq20330);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20331,seq20330__$1);
});

/**
 * Return an interval which forms the bounding-box of the given arguments.
 */
tick.alpha.api.bounds = tick.interval.bounds;
tick.alpha.api.am = (function tick$alpha$api$am(date){
return tick.interval.am.call(null,date);
});
tick.alpha.api.pm = (function tick$alpha$api$pm(date){
return tick.interval.pm.call(null,date);
});
tick.alpha.api.relation = (function tick$alpha$api$relation(i1,i2){
return tick.interval.relation.call(null,i1,i2);
});
tick.alpha.api.new_duration = (function tick$alpha$api$new_duration(n,u){
return tick.core.new_duration.call(null,n,u);
});
tick.alpha.api.new_period = (function tick$alpha$api$new_period(n,u){
return tick.core.new_period.call(null,n,u);
});
tick.alpha.api.between = (function tick$alpha$api$between(v1,v2){
return tick.core.between.call(null,v1,v2);
});
tick.alpha.api.concur = (function tick$alpha$api$concur(var_args){
var G__20338 = arguments.length;
switch (G__20338) {
case 0:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___20340 = arguments.length;
var i__4731__auto___20341 = (0);
while(true){
if((i__4731__auto___20341 < len__4730__auto___20340)){
args_arr__4751__auto__.push((arguments[i__4731__auto___20341]));

var G__20342 = (i__4731__auto___20341 + (1));
i__4731__auto___20341 = G__20342;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$variadic = (function (x,args){
return cljs.core.reduce.call(null,tick.interval.concur,x,args);
});

/** @this {Function} */
tick.alpha.api.concur.cljs$lang$applyTo = (function (seq20336){
var G__20337 = cljs.core.first.call(null,seq20336);
var seq20336__$1 = cljs.core.next.call(null,seq20336);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20337,seq20336__$1);
});

tick.alpha.api.concur.cljs$lang$maxFixedArity = (1);

tick.alpha.api.concurrencies = (function tick$alpha$api$concurrencies(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20344 = arguments.length;
var i__4731__auto___20345 = (0);
while(true){
if((i__4731__auto___20345 < len__4730__auto___20344)){
args__4736__auto__.push((arguments[i__4731__auto___20345]));

var G__20346 = (i__4731__auto___20345 + (1));
i__4731__auto___20345 = G__20346;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick.alpha.api.concurrencies.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick.alpha.api.concurrencies.cljs$core$IFn$_invoke$arity$variadic = (function (intervals){
return cljs.core.apply.call(null,tick.interval.concurrencies,intervals);
});

tick.alpha.api.concurrencies.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick.alpha.api.concurrencies.cljs$lang$applyTo = (function (seq20343){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20343));
});

tick.alpha.api.divide_by = (function tick$alpha$api$divide_by(divisor,t){
return tick.core.divide.call(null,t,divisor);
});
tick.alpha.api.divide = (function tick$alpha$api$divide(t,divisor){
return tick.core.divide.call(null,t,divisor);
});
tick.alpha.api.ordered_disjoint_intervals_QMARK_ = tick.interval.ordered_disjoint_intervals_QMARK_;
tick.alpha.api.unite = tick.interval.unite;
tick.alpha.api.normalize = tick.interval.normalize;
tick.alpha.api.union = tick.interval.union;
tick.alpha.api.conj = tick.interval.conj;
tick.alpha.api.intersection = tick.interval.intersection;
tick.alpha.api.intersects_QMARK_ = tick.interval.intersects_QMARK_;
tick.alpha.api.difference = tick.interval.difference;
tick.alpha.api.complement = tick.interval.complement;
tick.alpha.api.group_by = tick.interval.group_by;
tick.alpha.api.format = (function tick$alpha$api$format(var_args){
var G__20348 = arguments.length;
switch (G__20348) {
case 1:
return tick.alpha.api.format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.format.cljs$core$IFn$_invoke$arity$1 = (function (o){
return tick.format.format.call(null,o);
});

tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2 = (function (fmt,o){
return tick.format.format.call(null,fmt,o);
});

tick.alpha.api.format.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a DateTimeFormatter out of either a
 * 
 *   * format string - "YYYY/mm/DD" "YYY HH:MM" etc.
 *   or
 *   * formatter name - :iso-instant :iso-date etc
 */
tick.alpha.api.formatter = (function tick$alpha$api$formatter(var_args){
var G__20351 = arguments.length;
switch (G__20351) {
case 1:
return tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmt){
return tick.format.formatter.call(null,fmt);
});

tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmt,locale){
return tick.format.formatter.call(null,fmt,locale);
});

tick.alpha.api.formatter.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=api.js.map
