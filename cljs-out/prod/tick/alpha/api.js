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
var G__14110 = arguments.length;
switch (G__14110) {
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
var G__14113 = arguments.length;
switch (G__14113) {
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
var G__14116 = arguments.length;
switch (G__14116) {
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
var G__14119 = arguments.length;
switch (G__14119) {
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
var G__14122 = arguments.length;
switch (G__14122) {
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
var G__14125 = arguments.length;
switch (G__14125) {
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
var G__14128 = arguments.length;
switch (G__14128) {
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
var G__14131 = arguments.length;
switch (G__14131) {
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
var G__14134 = arguments.length;
switch (G__14134) {
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
var G__14137 = arguments.length;
switch (G__14137) {
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
var G__14140 = arguments.length;
switch (G__14140) {
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
var G__14143 = arguments.length;
switch (G__14143) {
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
var G__14146 = arguments.length;
switch (G__14146) {
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
var G__14149 = arguments.length;
switch (G__14149) {
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
var G__14156 = arguments.length;
switch (G__14156) {
case 0:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14158 = arguments.length;
var i__4731__auto___14159 = (0);
while(true){
if((i__4731__auto___14159 < len__4730__auto___14158)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14159]));

var G__14160 = (i__4731__auto___14159 + (1));
i__4731__auto___14159 = G__14160;
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
return cljs.core.reduce.call(null,(function (p1__14151_SHARP_,p2__14152_SHARP_){
return tick.core._PLUS_.call(null,p1__14151_SHARP_,p2__14152_SHARP_);
}),arg,args);
});

/** @this {Function} */
tick.alpha.api._PLUS_.cljs$lang$applyTo = (function (seq14154){
var G__14155 = cljs.core.first.call(null,seq14154);
var seq14154__$1 = cljs.core.next.call(null,seq14154);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14155,seq14154__$1);
});

tick.alpha.api._PLUS_.cljs$lang$maxFixedArity = (1);

tick.alpha.api._ = (function tick$alpha$api$_(var_args){
var G__14166 = arguments.length;
switch (G__14166) {
case 0:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14168 = arguments.length;
var i__4731__auto___14169 = (0);
while(true){
if((i__4731__auto___14169 < len__4730__auto___14168)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14169]));

var G__14170 = (i__4731__auto___14169 + (1));
i__4731__auto___14169 = G__14170;
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
return cljs.core.reduce.call(null,(function (p1__14161_SHARP_,p2__14162_SHARP_){
return tick.core._.call(null,p1__14161_SHARP_,p2__14162_SHARP_);
}),arg,args);
});

/** @this {Function} */
tick.alpha.api._.cljs$lang$applyTo = (function (seq14164){
var G__14165 = cljs.core.first.call(null,seq14164);
var seq14164__$1 = cljs.core.next.call(null,seq14164);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14165,seq14164__$1);
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
var G__14175 = arguments.length;
switch (G__14175) {
case 1:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14177 = arguments.length;
var i__4731__auto___14178 = (0);
while(true){
if((i__4731__auto___14178 < len__4730__auto___14177)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14178]));

var G__14179 = (i__4731__auto___14178 + (1));
i__4731__auto___14178 = G__14179;
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
var G__14180 = y;
var G__14181 = cljs.core.first.call(null,more);
var G__14182 = cljs.core.next.call(null,more);
x = G__14180;
y = G__14181;
more = G__14182;
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
tick.alpha.api._LT_.cljs$lang$applyTo = (function (seq14172){
var G__14173 = cljs.core.first.call(null,seq14172);
var seq14172__$1 = cljs.core.next.call(null,seq14172);
var G__14174 = cljs.core.first.call(null,seq14172__$1);
var seq14172__$2 = cljs.core.next.call(null,seq14172__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14173,G__14174,seq14172__$2);
});

tick.alpha.api._LT_.cljs$lang$maxFixedArity = (2);

tick.alpha.api._LT__EQ_ = (function tick$alpha$api$_LT__EQ_(var_args){
var G__14187 = arguments.length;
switch (G__14187) {
case 1:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14189 = arguments.length;
var i__4731__auto___14190 = (0);
while(true){
if((i__4731__auto___14190 < len__4730__auto___14189)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14190]));

var G__14191 = (i__4731__auto___14190 + (1));
i__4731__auto___14190 = G__14191;
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
var G__14192 = y;
var G__14193 = cljs.core.first.call(null,more);
var G__14194 = cljs.core.next.call(null,more);
x = G__14192;
y = G__14193;
more = G__14194;
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
tick.alpha.api._LT__EQ_.cljs$lang$applyTo = (function (seq14184){
var G__14185 = cljs.core.first.call(null,seq14184);
var seq14184__$1 = cljs.core.next.call(null,seq14184);
var G__14186 = cljs.core.first.call(null,seq14184__$1);
var seq14184__$2 = cljs.core.next.call(null,seq14184__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14185,G__14186,seq14184__$2);
});

tick.alpha.api._LT__EQ_.cljs$lang$maxFixedArity = (2);

tick.alpha.api._GT_ = (function tick$alpha$api$_GT_(var_args){
var G__14199 = arguments.length;
switch (G__14199) {
case 1:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14201 = arguments.length;
var i__4731__auto___14202 = (0);
while(true){
if((i__4731__auto___14202 < len__4730__auto___14201)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14202]));

var G__14203 = (i__4731__auto___14202 + (1));
i__4731__auto___14202 = G__14203;
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
var G__14204 = y;
var G__14205 = cljs.core.first.call(null,more);
var G__14206 = cljs.core.next.call(null,more);
x = G__14204;
y = G__14205;
more = G__14206;
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
tick.alpha.api._GT_.cljs$lang$applyTo = (function (seq14196){
var G__14197 = cljs.core.first.call(null,seq14196);
var seq14196__$1 = cljs.core.next.call(null,seq14196);
var G__14198 = cljs.core.first.call(null,seq14196__$1);
var seq14196__$2 = cljs.core.next.call(null,seq14196__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14197,G__14198,seq14196__$2);
});

tick.alpha.api._GT_.cljs$lang$maxFixedArity = (2);

tick.alpha.api._GT__EQ_ = (function tick$alpha$api$_GT__EQ_(var_args){
var G__14211 = arguments.length;
switch (G__14211) {
case 1:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14213 = arguments.length;
var i__4731__auto___14214 = (0);
while(true){
if((i__4731__auto___14214 < len__4730__auto___14213)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14214]));

var G__14215 = (i__4731__auto___14214 + (1));
i__4731__auto___14214 = G__14215;
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
var G__14216 = y;
var G__14217 = cljs.core.first.call(null,more);
var G__14218 = cljs.core.next.call(null,more);
x = G__14216;
y = G__14217;
more = G__14218;
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
tick.alpha.api._GT__EQ_.cljs$lang$applyTo = (function (seq14208){
var G__14209 = cljs.core.first.call(null,seq14208);
var seq14208__$1 = cljs.core.next.call(null,seq14208);
var G__14210 = cljs.core.first.call(null,seq14208__$1);
var seq14208__$2 = cljs.core.next.call(null,seq14208__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14209,G__14210,seq14208__$2);
});

tick.alpha.api._GT__EQ_.cljs$lang$maxFixedArity = (2);

tick.alpha.api.clock = (function tick$alpha$api$clock(var_args){
var G__14220 = arguments.length;
switch (G__14220) {
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

var ret__4776__auto___14226 = (function (){
tick.alpha.api.with_clock = (function tick$alpha$api$with_clock(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14227 = arguments.length;
var i__4731__auto___14228 = (0);
while(true){
if((i__4731__auto___14228 < len__4730__auto___14227)){
args__4736__auto__.push((arguments[i__4731__auto___14228]));

var G__14229 = (i__4731__auto___14228 + (1));
i__4731__auto___14228 = G__14229;
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
tick.alpha.api.with_clock.cljs$lang$applyTo = (function (seq14222){
var G__14223 = cljs.core.first.call(null,seq14222);
var seq14222__$1 = cljs.core.next.call(null,seq14222);
var G__14224 = cljs.core.first.call(null,seq14222__$1);
var seq14222__$2 = cljs.core.next.call(null,seq14222__$1);
var G__14225 = cljs.core.first.call(null,seq14222__$2);
var seq14222__$3 = cljs.core.next.call(null,seq14222__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14223,G__14224,G__14225,seq14222__$3);
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
var len__4730__auto___14232 = arguments.length;
var i__4731__auto___14233 = (0);
while(true){
if((i__4731__auto___14233 < len__4730__auto___14232)){
args__4736__auto__.push((arguments[i__4731__auto___14233]));

var G__14234 = (i__4731__auto___14233 + (1));
i__4731__auto___14233 = G__14234;
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
tick.alpha.api.extend.cljs$lang$applyTo = (function (seq14230){
var G__14231 = cljs.core.first.call(null,seq14230);
var seq14230__$1 = cljs.core.next.call(null,seq14230);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14231,seq14230__$1);
});

tick.alpha.api.scale = (function tick$alpha$api$scale(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14237 = arguments.length;
var i__4731__auto___14238 = (0);
while(true){
if((i__4731__auto___14238 < len__4730__auto___14237)){
args__4736__auto__.push((arguments[i__4731__auto___14238]));

var G__14239 = (i__4731__auto___14238 + (1));
i__4731__auto___14238 = G__14239;
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
tick.alpha.api.scale.cljs$lang$applyTo = (function (seq14235){
var G__14236 = cljs.core.first.call(null,seq14235);
var seq14235__$1 = cljs.core.next.call(null,seq14235);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14236,seq14235__$1);
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
var G__14243 = arguments.length;
switch (G__14243) {
case 0:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14245 = arguments.length;
var i__4731__auto___14246 = (0);
while(true){
if((i__4731__auto___14246 < len__4730__auto___14245)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14246]));

var G__14247 = (i__4731__auto___14246 + (1));
i__4731__auto___14246 = G__14247;
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
tick.alpha.api.concur.cljs$lang$applyTo = (function (seq14241){
var G__14242 = cljs.core.first.call(null,seq14241);
var seq14241__$1 = cljs.core.next.call(null,seq14241);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14242,seq14241__$1);
});

tick.alpha.api.concur.cljs$lang$maxFixedArity = (1);

tick.alpha.api.concurrencies = (function tick$alpha$api$concurrencies(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14249 = arguments.length;
var i__4731__auto___14250 = (0);
while(true){
if((i__4731__auto___14250 < len__4730__auto___14249)){
args__4736__auto__.push((arguments[i__4731__auto___14250]));

var G__14251 = (i__4731__auto___14250 + (1));
i__4731__auto___14250 = G__14251;
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
tick.alpha.api.concurrencies.cljs$lang$applyTo = (function (seq14248){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14248));
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
var G__14253 = arguments.length;
switch (G__14253) {
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
var G__14256 = arguments.length;
switch (G__14256) {
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
