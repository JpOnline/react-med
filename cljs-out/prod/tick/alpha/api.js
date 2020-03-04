// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('tick.alpha.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return tick.core.now();
});
tick.alpha.api.today = (function tick$alpha$api$today(){
return tick.core.today();
});
tick.alpha.api.tomorrow = (function tick$alpha$api$tomorrow(){
return tick.core.tomorrow();
});
tick.alpha.api.yesterday = (function tick$alpha$api$yesterday(){
return tick.core.yesterday();
});
tick.alpha.api.time = (function tick$alpha$api$time(var_args){
var G__25372 = arguments.length;
switch (G__25372) {
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
return tick.core.time(tick.alpha.api.now());
});

tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.time(v);
});

tick.alpha.api.time.cljs$lang$maxFixedArity = 1;

tick.alpha.api.date = (function tick$alpha$api$date(var_args){
var G__25375 = arguments.length;
switch (G__25375) {
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
return tick.alpha.api.today();
});

tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.date(v);
});

tick.alpha.api.date.cljs$lang$maxFixedArity = 1;

tick.alpha.api.inst = (function tick$alpha$api$inst(var_args){
var G__25378 = arguments.length;
switch (G__25378) {
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
return tick.core.inst(tick.alpha.api.now());
});

tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.inst(v);
});

tick.alpha.api.inst.cljs$lang$maxFixedArity = 1;

tick.alpha.api.instant = (function tick$alpha$api$instant(var_args){
var G__25381 = arguments.length;
switch (G__25381) {
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
return tick.core.instant(tick.alpha.api.now());
});

tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.instant(v);
});

tick.alpha.api.instant.cljs$lang$maxFixedArity = 1;

tick.alpha.api.date_time = (function tick$alpha$api$date_time(var_args){
var G__25384 = arguments.length;
switch (G__25384) {
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
return tick.core.date_time(tick.alpha.api.now());
});

tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.date_time(v);
});

tick.alpha.api.date_time.cljs$lang$maxFixedArity = 1;

tick.alpha.api.offset_date_time = (function tick$alpha$api$offset_date_time(var_args){
var G__25387 = arguments.length;
switch (G__25387) {
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
return tick.core.offset_date_time(tick.alpha.api.now());
});

tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.offset_date_time(v);
});

tick.alpha.api.offset_date_time.cljs$lang$maxFixedArity = 1;

tick.alpha.api.zoned_date_time = (function tick$alpha$api$zoned_date_time(var_args){
var G__25390 = arguments.length;
switch (G__25390) {
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
return tick.core.zoned_date_time(tick.alpha.api.now());
});

tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.zoned_date_time(v);
});

tick.alpha.api.zoned_date_time.cljs$lang$maxFixedArity = 1;

tick.alpha.api.nanosecond = (function tick$alpha$api$nanosecond(t){
return tick.core.nanosecond(t);
});
tick.alpha.api.microsecond = (function tick$alpha$api$microsecond(t){
return tick.core.microsecond(t);
});
tick.alpha.api.millisecond = (function tick$alpha$api$millisecond(t){
return tick.core.millisecond(t);
});
tick.alpha.api.second = (function tick$alpha$api$second(t){
return tick.core.second(t);
});
tick.alpha.api.minute = (function tick$alpha$api$minute(t){
return tick.core.minute(t);
});
tick.alpha.api.hour = (function tick$alpha$api$hour(t){
return tick.core.hour(t);
});
tick.alpha.api.day_of_week = (function tick$alpha$api$day_of_week(var_args){
var G__25393 = arguments.length;
switch (G__25393) {
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
return tick.core.day_of_week(tick.alpha.api.today());
});

tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.day_of_week(v);
});

tick.alpha.api.day_of_week.cljs$lang$maxFixedArity = 1;

tick.alpha.api.day_of_month = (function tick$alpha$api$day_of_month(var_args){
var G__25396 = arguments.length;
switch (G__25396) {
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
return tick.core.day_of_month(tick.alpha.api.today());
});

tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.day_of_month(v);
});

tick.alpha.api.day_of_month.cljs$lang$maxFixedArity = 1;

tick.alpha.api.month = (function tick$alpha$api$month(var_args){
var G__25399 = arguments.length;
switch (G__25399) {
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
return tick.core.month(tick.alpha.api.today());
});

tick.alpha.api.month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.month(v);
});

tick.alpha.api.month.cljs$lang$maxFixedArity = 1;

tick.alpha.api.year = (function tick$alpha$api$year(var_args){
var G__25402 = arguments.length;
switch (G__25402) {
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
return tick.core.year(tick.alpha.api.today());
});

tick.alpha.api.year.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.year(v);
});

tick.alpha.api.year.cljs$lang$maxFixedArity = 1;

tick.alpha.api.year_month = (function tick$alpha$api$year_month(var_args){
var G__25405 = arguments.length;
switch (G__25405) {
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
return tick.core.year_month(tick.alpha.api.today());
});

tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.year_month(v);
});

tick.alpha.api.year_month.cljs$lang$maxFixedArity = 1;

tick.alpha.api.zone = (function tick$alpha$api$zone(var_args){
var G__25408 = arguments.length;
switch (G__25408) {
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
return tick.core.current_zone();
});

tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1 = (function (z){
return tick.core.zone(z);
});

tick.alpha.api.zone.cljs$lang$maxFixedArity = 1;

tick.alpha.api.zone_offset = (function tick$alpha$api$zone_offset(var_args){
var G__25411 = arguments.length;
switch (G__25411) {
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
return tick.core.zone_offset(offset);
});

tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return java.time.ZoneOffset.ofHoursMinutes(hours,minutes);
});

tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return java.time.ZoneOffset.ofHoursMinutesSeconds(hours,minutes,seconds);
});

tick.alpha.api.zone_offset.cljs$lang$maxFixedArity = 3;

tick.alpha.api.on = (function tick$alpha$api$on(t,d){
return tick.core.on(t,tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(d));
});
tick.alpha.api.at = (function tick$alpha$api$at(d,t){
return tick.core.at(d,tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1(t));
});
tick.alpha.api.in$ = (function tick$alpha$api$in(ldt,z){
return tick.core.in$(ldt,tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1(z));
});
tick.alpha.api.offset_by = (function tick$alpha$api$offset_by(ldt,offset){
return tick.core.offset_by(ldt,tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1(offset));
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
return tick.core.beginning(v);
});
tick.alpha.api.end = (function tick$alpha$api$end(v){
return tick.core.end(v);
});
tick.alpha.api.duration = (function tick$alpha$api$duration(v){
return tick.core.duration(v);
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
tick.alpha.api.UTC = tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1("UTC");
tick.alpha.api.parse = tick.core.parse;
tick.alpha.api._PLUS_ = (function tick$alpha$api$_PLUS_(var_args){
var G__25418 = arguments.length;
switch (G__25418) {
case 0:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___25420 = arguments.length;
var i__4731__auto___25421 = (0);
while(true){
if((i__4731__auto___25421 < len__4730__auto___25420)){
args_arr__4751__auto__.push((arguments[i__4731__auto___25421]));

var G__25422 = (i__4731__auto___25421 + (1));
i__4731__auto___25421 = G__25422;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__25413_SHARP_,p2__25414_SHARP_){
return tick.core._PLUS_(p1__25413_SHARP_,p2__25414_SHARP_);
}),arg,args);
});

/** @this {Function} */
tick.alpha.api._PLUS_.cljs$lang$applyTo = (function (seq25416){
var G__25417 = cljs.core.first(seq25416);
var seq25416__$1 = cljs.core.next(seq25416);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25417,seq25416__$1);
});

tick.alpha.api._PLUS_.cljs$lang$maxFixedArity = (1);

tick.alpha.api._ = (function tick$alpha$api$_(var_args){
var G__25428 = arguments.length;
switch (G__25428) {
case 0:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___25430 = arguments.length;
var i__4731__auto___25431 = (0);
while(true){
if((i__4731__auto___25431 < len__4730__auto___25430)){
args_arr__4751__auto__.push((arguments[i__4731__auto___25431]));

var G__25432 = (i__4731__auto___25431 + (1));
i__4731__auto___25431 = G__25432;
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
return tick.core.negated(arg);
});

tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__25423_SHARP_,p2__25424_SHARP_){
return tick.core._(p1__25423_SHARP_,p2__25424_SHARP_);
}),arg,args);
});

/** @this {Function} */
tick.alpha.api._.cljs$lang$applyTo = (function (seq25426){
var G__25427 = cljs.core.first(seq25426);
var seq25426__$1 = cljs.core.next(seq25426);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25427,seq25426__$1);
});

tick.alpha.api._.cljs$lang$maxFixedArity = (1);

tick.alpha.api.inc = (function tick$alpha$api$inc(t){
return tick.core.inc(t);
});
tick.alpha.api.dec = (function tick$alpha$api$dec(t){
return tick.core.dec(t);
});
tick.alpha.api._GT__GT_ = (function tick$alpha$api$_GT__GT_(t,amt){
return tick.core._GT__GT_(t,amt);
});
tick.alpha.api._LT__LT_ = (function tick$alpha$api$_LT__LT_(t,amt){
return tick.core._LT__LT_(t,amt);
});
tick.alpha.api.max = tick.core.max;
tick.alpha.api.min = tick.core.min;
tick.alpha.api.min_of_type = tick.core.min_of_type;
tick.alpha.api.max_of_type = tick.core.max_of_type;
tick.alpha.api.range = tick.core.range;
tick.alpha.api.int$ = (function tick$alpha$api$int(arg){
return tick.core.int$(arg);
});
tick.alpha.api.long$ = (function tick$alpha$api$long(arg){
return tick.core.long$(arg);
});
tick.alpha.api.nanos = (function tick$alpha$api$nanos(v){
return tick.core.nanos(v);
});
tick.alpha.api.micros = (function tick$alpha$api$micros(v){
return tick.core.micros(v);
});
tick.alpha.api.millis = (function tick$alpha$api$millis(v){
return tick.core.millis(v);
});
tick.alpha.api.seconds = (function tick$alpha$api$seconds(v){
return tick.core.seconds(v);
});
tick.alpha.api.minutes = (function tick$alpha$api$minutes(v){
return tick.core.minutes(v);
});
tick.alpha.api.hours = (function tick$alpha$api$hours(v){
return tick.core.hours(v);
});
tick.alpha.api.days = (function tick$alpha$api$days(v){
return tick.core.days(v);
});
tick.alpha.api.months = (function tick$alpha$api$months(v){
return tick.core.months(v);
});
tick.alpha.api.years = (function tick$alpha$api$years(v){
return tick.core.years(v);
});
tick.alpha.api.units = tick.core.units;
tick.alpha.api.truncate = tick.core.truncate;
tick.alpha.api._LT_ = (function tick$alpha$api$_LT_(var_args){
var G__25437 = arguments.length;
switch (G__25437) {
case 1:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___25439 = arguments.length;
var i__4731__auto___25440 = (0);
while(true){
if((i__4731__auto___25440 < len__4730__auto___25439)){
args_arr__4751__auto__.push((arguments[i__4731__auto___25440]));

var G__25441 = (i__4731__auto___25440 + (1));
i__4731__auto___25440 = G__25441;
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
return tick.core._LT_(x,y);
});

tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._LT_(x,y))){
if(cljs.core.next(more)){
var G__25442 = y;
var G__25443 = cljs.core.first(more);
var G__25444 = cljs.core.next(more);
x = G__25442;
y = G__25443;
more = G__25444;
continue;
} else {
return tick.core._LT_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
});

/** @this {Function} */
tick.alpha.api._LT_.cljs$lang$applyTo = (function (seq25434){
var G__25435 = cljs.core.first(seq25434);
var seq25434__$1 = cljs.core.next(seq25434);
var G__25436 = cljs.core.first(seq25434__$1);
var seq25434__$2 = cljs.core.next(seq25434__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25435,G__25436,seq25434__$2);
});

tick.alpha.api._LT_.cljs$lang$maxFixedArity = (2);

tick.alpha.api._LT__EQ_ = (function tick$alpha$api$_LT__EQ_(var_args){
var G__25449 = arguments.length;
switch (G__25449) {
case 1:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___25451 = arguments.length;
var i__4731__auto___25452 = (0);
while(true){
if((i__4731__auto___25452 < len__4730__auto___25451)){
args_arr__4751__auto__.push((arguments[i__4731__auto___25452]));

var G__25453 = (i__4731__auto___25452 + (1));
i__4731__auto___25452 = G__25453;
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
return tick.core._LT__EQ_(x,y);
});

tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._LT__EQ_(x,y))){
if(cljs.core.next(more)){
var G__25454 = y;
var G__25455 = cljs.core.first(more);
var G__25456 = cljs.core.next(more);
x = G__25454;
y = G__25455;
more = G__25456;
continue;
} else {
return tick.core._LT__EQ_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
});

/** @this {Function} */
tick.alpha.api._LT__EQ_.cljs$lang$applyTo = (function (seq25446){
var G__25447 = cljs.core.first(seq25446);
var seq25446__$1 = cljs.core.next(seq25446);
var G__25448 = cljs.core.first(seq25446__$1);
var seq25446__$2 = cljs.core.next(seq25446__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25447,G__25448,seq25446__$2);
});

tick.alpha.api._LT__EQ_.cljs$lang$maxFixedArity = (2);

tick.alpha.api._GT_ = (function tick$alpha$api$_GT_(var_args){
var G__25461 = arguments.length;
switch (G__25461) {
case 1:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___25463 = arguments.length;
var i__4731__auto___25464 = (0);
while(true){
if((i__4731__auto___25464 < len__4730__auto___25463)){
args_arr__4751__auto__.push((arguments[i__4731__auto___25464]));

var G__25465 = (i__4731__auto___25464 + (1));
i__4731__auto___25464 = G__25465;
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
return tick.core._GT_(x,y);
});

tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._GT_(x,y))){
if(cljs.core.next(more)){
var G__25466 = y;
var G__25467 = cljs.core.first(more);
var G__25468 = cljs.core.next(more);
x = G__25466;
y = G__25467;
more = G__25468;
continue;
} else {
return tick.core._GT_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
});

/** @this {Function} */
tick.alpha.api._GT_.cljs$lang$applyTo = (function (seq25458){
var G__25459 = cljs.core.first(seq25458);
var seq25458__$1 = cljs.core.next(seq25458);
var G__25460 = cljs.core.first(seq25458__$1);
var seq25458__$2 = cljs.core.next(seq25458__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25459,G__25460,seq25458__$2);
});

tick.alpha.api._GT_.cljs$lang$maxFixedArity = (2);

tick.alpha.api._GT__EQ_ = (function tick$alpha$api$_GT__EQ_(var_args){
var G__25473 = arguments.length;
switch (G__25473) {
case 1:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___25475 = arguments.length;
var i__4731__auto___25476 = (0);
while(true){
if((i__4731__auto___25476 < len__4730__auto___25475)){
args_arr__4751__auto__.push((arguments[i__4731__auto___25476]));

var G__25477 = (i__4731__auto___25476 + (1));
i__4731__auto___25476 = G__25477;
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
return tick.core._GT__EQ_(x,y);
});

tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._GT__EQ_(x,y))){
if(cljs.core.next(more)){
var G__25478 = y;
var G__25479 = cljs.core.first(more);
var G__25480 = cljs.core.next(more);
x = G__25478;
y = G__25479;
more = G__25480;
continue;
} else {
return tick.core._GT__EQ_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
});

/** @this {Function} */
tick.alpha.api._GT__EQ_.cljs$lang$applyTo = (function (seq25470){
var G__25471 = cljs.core.first(seq25470);
var seq25470__$1 = cljs.core.next(seq25470);
var G__25472 = cljs.core.first(seq25470__$1);
var seq25470__$2 = cljs.core.next(seq25470__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25471,G__25472,seq25470__$2);
});

tick.alpha.api._GT__EQ_.cljs$lang$maxFixedArity = (2);

tick.alpha.api.clock = (function tick$alpha$api$clock(var_args){
var G__25482 = arguments.length;
switch (G__25482) {
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
return tick.core.current_clock();
});

tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$1 = (function (i){
return tick.core.clock(i);
});

tick.alpha.api.clock.cljs$lang$maxFixedArity = 1;

var ret__4776__auto___25488 = (function (){
tick.alpha.api.with_clock = (function tick$alpha$api$with_clock(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25489 = arguments.length;
var i__4731__auto___25490 = (0);
while(true){
if((i__4731__auto___25490 < len__4730__auto___25489)){
args__4736__auto__.push((arguments[i__4731__auto___25490]));

var G__25491 = (i__4731__auto___25490 + (1));
i__4731__auto___25490 = G__25491;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return tick.alpha.api.with_clock.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

tick.alpha.api.with_clock.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clock,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tick$core_SLASH__STAR_clock_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tick$core_SLASH_clock,null,(1),null)),(new cljs.core.List(null,clock,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

tick.alpha.api.with_clock.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
tick.alpha.api.with_clock.cljs$lang$applyTo = (function (seq25484){
var G__25485 = cljs.core.first(seq25484);
var seq25484__$1 = cljs.core.next(seq25484);
var G__25486 = cljs.core.first(seq25484__$1);
var seq25484__$2 = cljs.core.next(seq25484__$1);
var G__25487 = cljs.core.first(seq25484__$2);
var seq25484__$3 = cljs.core.next(seq25484__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25485,G__25486,G__25487,seq25484__$3);
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
return tick.interval.new_interval(x,y);
});
tick.alpha.api.extend = (function tick$alpha$api$extend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25494 = arguments.length;
var i__4731__auto___25495 = (0);
while(true){
if((i__4731__auto___25495 < len__4730__auto___25494)){
args__4736__auto__.push((arguments[i__4731__auto___25495]));

var G__25496 = (i__4731__auto___25495 + (1));
i__4731__auto___25495 = G__25496;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tick.alpha.api.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tick.alpha.api.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ival,durations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.extend,ival,durations);
});

tick.alpha.api.extend.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tick.alpha.api.extend.cljs$lang$applyTo = (function (seq25492){
var G__25493 = cljs.core.first(seq25492);
var seq25492__$1 = cljs.core.next(seq25492);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25493,seq25492__$1);
});

tick.alpha.api.scale = (function tick$alpha$api$scale(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25499 = arguments.length;
var i__4731__auto___25500 = (0);
while(true){
if((i__4731__auto___25500 < len__4730__auto___25499)){
args__4736__auto__.push((arguments[i__4731__auto___25500]));

var G__25501 = (i__4731__auto___25500 + (1));
i__4731__auto___25500 = G__25501;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tick.alpha.api.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tick.alpha.api.scale.cljs$core$IFn$_invoke$arity$variadic = (function (ival,durations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.extend,ival,durations);
});

tick.alpha.api.scale.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tick.alpha.api.scale.cljs$lang$applyTo = (function (seq25497){
var G__25498 = cljs.core.first(seq25497);
var seq25497__$1 = cljs.core.next(seq25497);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25498,seq25497__$1);
});

/**
 * Return an interval which forms the bounding-box of the given arguments.
 */
tick.alpha.api.bounds = tick.interval.bounds;
tick.alpha.api.am = (function tick$alpha$api$am(date){
return tick.interval.am(date);
});
tick.alpha.api.pm = (function tick$alpha$api$pm(date){
return tick.interval.pm(date);
});
tick.alpha.api.relation = (function tick$alpha$api$relation(i1,i2){
return tick.interval.relation(i1,i2);
});
tick.alpha.api.new_duration = (function tick$alpha$api$new_duration(n,u){
return tick.core.new_duration(n,u);
});
tick.alpha.api.new_period = (function tick$alpha$api$new_period(n,u){
return tick.core.new_period(n,u);
});
tick.alpha.api.between = (function tick$alpha$api$between(v1,v2){
return tick.core.between(v1,v2);
});
tick.alpha.api.concur = (function tick$alpha$api$concur(var_args){
var G__25505 = arguments.length;
switch (G__25505) {
case 0:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___25507 = arguments.length;
var i__4731__auto___25508 = (0);
while(true){
if((i__4731__auto___25508 < len__4730__auto___25507)){
args_arr__4751__auto__.push((arguments[i__4731__auto___25508]));

var G__25509 = (i__4731__auto___25508 + (1));
i__4731__auto___25508 = G__25509;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.concur,x,args);
});

/** @this {Function} */
tick.alpha.api.concur.cljs$lang$applyTo = (function (seq25503){
var G__25504 = cljs.core.first(seq25503);
var seq25503__$1 = cljs.core.next(seq25503);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25504,seq25503__$1);
});

tick.alpha.api.concur.cljs$lang$maxFixedArity = (1);

tick.alpha.api.concurrencies = (function tick$alpha$api$concurrencies(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25511 = arguments.length;
var i__4731__auto___25512 = (0);
while(true){
if((i__4731__auto___25512 < len__4730__auto___25511)){
args__4736__auto__.push((arguments[i__4731__auto___25512]));

var G__25513 = (i__4731__auto___25512 + (1));
i__4731__auto___25512 = G__25513;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick.alpha.api.concurrencies.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick.alpha.api.concurrencies.cljs$core$IFn$_invoke$arity$variadic = (function (intervals){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.interval.concurrencies,intervals);
});

tick.alpha.api.concurrencies.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick.alpha.api.concurrencies.cljs$lang$applyTo = (function (seq25510){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25510));
});

tick.alpha.api.divide_by = (function tick$alpha$api$divide_by(divisor,t){
return tick.core.divide(t,divisor);
});
tick.alpha.api.divide = (function tick$alpha$api$divide(t,divisor){
return tick.core.divide(t,divisor);
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
var G__25515 = arguments.length;
switch (G__25515) {
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
return tick.format.format.cljs$core$IFn$_invoke$arity$1(o);
});

tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2 = (function (fmt,o){
return tick.format.format.cljs$core$IFn$_invoke$arity$2(fmt,o);
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
var G__25518 = arguments.length;
switch (G__25518) {
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
return tick.format.formatter.cljs$core$IFn$_invoke$arity$1(fmt);
});

tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmt,locale){
return tick.format.formatter.cljs$core$IFn$_invoke$arity$2(fmt,locale);
});

tick.alpha.api.formatter.cljs$lang$maxFixedArity = 2;

