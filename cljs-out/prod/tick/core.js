// Compiled by ClojureScript 1.10.520 {}
goog.provide('tick.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('time_literals.read_write');
goog.require('cljc.java_time.local_date');
goog.require('cljc.java_time.local_date_time');
goog.require('cljc.java_time.local_time');
goog.require('cljc.java_time.clock');
goog.require('cljc.java_time.instant');
goog.require('cljc.java_time.zone_id');
goog.require('cljc.java_time.zone_offset');
goog.require('cljc.java_time.zoned_date_time');
goog.require('cljc.java_time.offset_date_time');
goog.require('cljc.java_time.duration');
goog.require('cljc.java_time.year_month');
goog.require('cljc.java_time.month');
goog.require('cljc.java_time.year');
goog.require('cljc.java_time.day_of_week');
goog.require('cljc.java_time.period');
goog.require('cljc.java_time.temporal.temporal_amount');
goog.require('cljc.java_time.temporal.temporal_adjusters');
goog.require('cljc.java_time.temporal.chrono_field');
goog.require('cljc.java_time.temporal.chrono_unit');
goog.require('java.time');
goog.require('java.time.temporal');
goog.require('cljs.java_time.extend_eq_and_compare');
time_literals.read_write.print_time_literals_clj_BANG_.call(null);

time_literals.read_write.print_time_literals_cljs_BANG_.call(null);
tick.core._STAR_clock_STAR_ = null;
tick.core.now = (function tick$core$now(){
if(cljs.core.truth_(tick.core._STAR_clock_STAR_)){
return cljc.java_time.instant.now.call(null,tick.core._STAR_clock_STAR_);
} else {
return cljc.java_time.instant.now.call(null);
}
});
tick.core.today = (function tick$core$today(){
if(cljs.core.truth_(tick.core._STAR_clock_STAR_)){
return cljc.java_time.local_date.now.call(null,tick.core._STAR_clock_STAR_);
} else {
return cljc.java_time.local_date.now.call(null);
}
});
tick.core.epoch = (function tick$core$epoch(){
return cljc.java_time.instant.epoch;
});

/**
 * @interface
 */
tick.core.ITimeReify = function(){};

/**
 * Set time be ON a date
 */
tick.core.on = (function tick$core$on(time,date){
if((((!((time == null)))) && ((!((time.tick$core$ITimeReify$on$arity$2 == null)))))){
return time.tick$core$ITimeReify$on$arity$2(time,date);
} else {
var x__4433__auto__ = (((time == null))?null:time);
var m__4434__auto__ = (tick.core.on[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,time,date);
} else {
var m__4431__auto__ = (tick.core.on["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,time,date);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeReify.on",time);
}
}
}
});

/**
 * Set date to be AT a time
 */
tick.core.at = (function tick$core$at(date,time){
if((((!((date == null)))) && ((!((date.tick$core$ITimeReify$at$arity$2 == null)))))){
return date.tick$core$ITimeReify$at$arity$2(date,time);
} else {
var x__4433__auto__ = (((date == null))?null:date);
var m__4434__auto__ = (tick.core.at[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,date,time);
} else {
var m__4431__auto__ = (tick.core.at["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,date,time);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeReify.at",date);
}
}
}
});

/**
 * Set a date-time to be in a time-zone
 */
tick.core.in$ = (function tick$core$in(dt,zone){
if((((!((dt == null)))) && ((!((dt.tick$core$ITimeReify$in$arity$2 == null)))))){
return dt.tick$core$ITimeReify$in$arity$2(dt,zone);
} else {
var x__4433__auto__ = (((dt == null))?null:dt);
var m__4434__auto__ = (tick.core.in$[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,dt,zone);
} else {
var m__4431__auto__ = (tick.core.in$["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,dt,zone);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeReify.in",dt);
}
}
}
});

/**
 * Set a date-time to be offset by an amount
 */
tick.core.offset_by = (function tick$core$offset_by(dt,amount){
if((((!((dt == null)))) && ((!((dt.tick$core$ITimeReify$offset_by$arity$2 == null)))))){
return dt.tick$core$ITimeReify$offset_by$arity$2(dt,amount);
} else {
var x__4433__auto__ = (((dt == null))?null:dt);
var m__4434__auto__ = (tick.core.offset_by[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,dt,amount);
} else {
var m__4431__auto__ = (tick.core.offset_by["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,dt,amount);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeReify.offset-by",dt);
}
}
}
});

tick.core.midnight = (function tick$core$midnight(var_args){
var G__16115 = arguments.length;
switch (G__16115) {
case 0:
return tick.core.midnight.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.midnight.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.local_time.midnight;
});

tick.core.midnight.cljs$core$IFn$_invoke$arity$1 = (function (date){
return tick.core.at.call(null,date,cljc.java_time.local_time.midnight);
});

tick.core.midnight.cljs$lang$maxFixedArity = 1;

tick.core.noon = (function tick$core$noon(var_args){
var G__16118 = arguments.length;
switch (G__16118) {
case 0:
return tick.core.noon.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.noon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.noon.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.local_time.noon;
});

tick.core.noon.cljs$core$IFn$_invoke$arity$1 = (function (date){
return tick.core.at.call(null,date,cljc.java_time.local_time.noon);
});

tick.core.noon.cljs$lang$maxFixedArity = 1;

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("tick.core","instant","tick.core/instant",767438198),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("java.time","Instant","java.time/Instant",2105934508,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__16120_SHARP_){
return (p1__16120_SHARP_ instanceof java.time.Instant);
}));
tick.core.parse_day = (function tick$core$parse_day(input){
var pred__16121 = cljs.core.re_matches;
var expr__16122 = clojure.string.lower_case.call(null,input);
if(cljs.core.truth_(pred__16121.call(null,/^(mon)(day)?$/,expr__16122))){
return cljc.java_time.day_of_week.monday;
} else {
if(cljs.core.truth_(pred__16121.call(null,/^(tue)(s|sday)?$/,expr__16122))){
return cljc.java_time.day_of_week.tuesday;
} else {
if(cljs.core.truth_(pred__16121.call(null,/^(wed)(s|nesday)?$/,expr__16122))){
return cljc.java_time.day_of_week.wednesday;
} else {
if(cljs.core.truth_(pred__16121.call(null,/^(thur)(s|sday)?$/,expr__16122))){
return cljc.java_time.day_of_week.thursday;
} else {
if(cljs.core.truth_(pred__16121.call(null,/^(fri)(day)?$/,expr__16122))){
return cljc.java_time.day_of_week.friday;
} else {
if(cljs.core.truth_(pred__16121.call(null,/^(sat)(urday)?$/,expr__16122))){
return cljc.java_time.day_of_week.saturday;
} else {
if(cljs.core.truth_(pred__16121.call(null,/^(sun)(day)?$/,expr__16122))){
return cljc.java_time.day_of_week.sunday;
} else {
return null;
}
}
}
}
}
}
}
});
tick.core.parse_month = (function tick$core$parse_month(input){
var pred__16124 = cljs.core.re_matches;
var expr__16125 = clojure.string.lower_case.call(null,input);
if(cljs.core.truth_(pred__16124.call(null,/^(jan)(uary)?$/,expr__16125))){
return cljc.java_time.month.january;
} else {
if(cljs.core.truth_(pred__16124.call(null,/^(feb)(ruary)?$/,expr__16125))){
return cljc.java_time.month.february;
} else {
if(cljs.core.truth_(pred__16124.call(null,/^(mar)(ch)?$/,expr__16125))){
return cljc.java_time.month.march;
} else {
if(cljs.core.truth_(pred__16124.call(null,/^(apr)(il)?$/,expr__16125))){
return cljc.java_time.month.april;
} else {
if(cljs.core.truth_(pred__16124.call(null,/^may$/,expr__16125))){
return cljc.java_time.month.may;
} else {
if(cljs.core.truth_(pred__16124.call(null,/^(jun)(e)?$/,expr__16125))){
return cljc.java_time.month.june;
} else {
if(cljs.core.truth_(pred__16124.call(null,/^(jul)(y)?$/,expr__16125))){
return cljc.java_time.month.july;
} else {
if(cljs.core.truth_(pred__16124.call(null,/^(aug)(ust)?$/,expr__16125))){
return cljc.java_time.month.august;
} else {
if(cljs.core.truth_(pred__16124.call(null,/^(sep)(tember)?$/,expr__16125))){
return cljc.java_time.month.september;
} else {
if(cljs.core.truth_(pred__16124.call(null,/^(oct)(ober)?$/,expr__16125))){
return cljc.java_time.month.october;
} else {
if(cljs.core.truth_(pred__16124.call(null,/^(nov)(ember)?$/,expr__16125))){
return cljc.java_time.month.november;
} else {
if(cljs.core.truth_(pred__16124.call(null,/^(dec)(ember)?$/,expr__16125))){
return cljc.java_time.month.december;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});

/**
 * @interface
 */
tick.core.IParseable = function(){};

/**
 * Parse to most applicable instance.
 */
tick.core.parse = (function tick$core$parse(_){
if((((!((_ == null)))) && ((!((_.tick$core$IParseable$parse$arity$1 == null)))))){
return _.tick$core$IParseable$parse$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.parse[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.parse["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IParseable.parse",_);
}
}
}
});

tick.core.parse_int = (function tick$core$parse_int(x){
return Number(x);
});
goog.object.set(tick.core.IParseable,"string",true);

goog.object.set(tick.core.parse,"string",(function (s){
var pred__16127 = cljs.core.re_matches;
var expr__16128 = s;
var temp__5733__auto__ = pred__16127.call(null,/(\d{1,2})\s*(am|pm)/,expr__16128);
if(cljs.core.truth_(temp__5733__auto__)){
var p__4485__auto__ = temp__5733__auto__;
return ((function (p__4485__auto__,temp__5733__auto__,pred__16127,expr__16128){
return (function (p__16130){
var vec__16131 = p__16130;
var _ = cljs.core.nth.call(null,vec__16131,(0),null);
var h = cljs.core.nth.call(null,vec__16131,(1),null);
var ap = cljs.core.nth.call(null,vec__16131,(2),null);
return cljc.java_time.local_time.of.call(null,(function (){var G__16134 = tick.core.parse_int.call(null,h);
if(cljs.core._EQ_.call(null,"pm",ap)){
return (G__16134 + (12));
} else {
return G__16134;
}
})(),(0));
});})(p__4485__auto__,temp__5733__auto__,pred__16127,expr__16128))
.call(null,p__4485__auto__);
} else {
var temp__5733__auto____$1 = pred__16127.call(null,/(\d{1,2})/,expr__16128);
if(cljs.core.truth_(temp__5733__auto____$1)){
var p__4485__auto__ = temp__5733__auto____$1;
return ((function (p__4485__auto__,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128){
return (function (p__16135){
var vec__16136 = p__16135;
var _ = cljs.core.nth.call(null,vec__16136,(0),null);
var h = cljs.core.nth.call(null,vec__16136,(1),null);
return cljc.java_time.local_time.of.call(null,tick.core.parse_int.call(null,h),(0));
});})(p__4485__auto__,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128))
.call(null,p__4485__auto__);
} else {
var temp__5733__auto____$2 = pred__16127.call(null,/\d{2}:\d{2}\S*/,expr__16128);
if(cljs.core.truth_(temp__5733__auto____$2)){
var p__4485__auto__ = temp__5733__auto____$2;
return ((function (p__4485__auto__,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128){
return (function (s__$1){
return cljc.java_time.local_time.parse.call(null,s__$1);
});})(p__4485__auto__,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128))
.call(null,p__4485__auto__);
} else {
var temp__5733__auto____$3 = pred__16127.call(null,/(\d{1,2}):(\d{2})/,expr__16128);
if(cljs.core.truth_(temp__5733__auto____$3)){
var p__4485__auto__ = temp__5733__auto____$3;
return ((function (p__4485__auto__,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128){
return (function (p__16139){
var vec__16140 = p__16139;
var _ = cljs.core.nth.call(null,vec__16140,(0),null);
var h = cljs.core.nth.call(null,vec__16140,(1),null);
var m = cljs.core.nth.call(null,vec__16140,(2),null);
return cljc.java_time.local_time.of.call(null,tick.core.parse_int.call(null,h),tick.core.parse_int.call(null,m));
});})(p__4485__auto__,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128))
.call(null,p__4485__auto__);
} else {
var temp__5733__auto____$4 = pred__16127.call(null,/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?Z/,expr__16128);
if(cljs.core.truth_(temp__5733__auto____$4)){
var p__4485__auto__ = temp__5733__auto____$4;
return ((function (p__4485__auto__,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128){
return (function (s__$1){
return cljc.java_time.instant.parse.call(null,s__$1);
});})(p__4485__auto__,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128))
.call(null,p__4485__auto__);
} else {
var temp__5733__auto____$5 = pred__16127.call(null,/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?[+-]\d{2}:\d{2}/,expr__16128);
if(cljs.core.truth_(temp__5733__auto____$5)){
var p__4485__auto__ = temp__5733__auto____$5;
return ((function (p__4485__auto__,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128){
return (function (s__$1){
return cljc.java_time.zoned_date_time.parse.call(null,s__$1);
});})(p__4485__auto__,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128))
.call(null,p__4485__auto__);
} else {
var temp__5733__auto____$6 = pred__16127.call(null,/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?[+-]\d{2}:\d{2}\[\w+\/\w+\]/,expr__16128);
if(cljs.core.truth_(temp__5733__auto____$6)){
var p__4485__auto__ = temp__5733__auto____$6;
return ((function (p__4485__auto__,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128){
return (function (s__$1){
return cljc.java_time.zoned_date_time.parse.call(null,s__$1);
});})(p__4485__auto__,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128))
.call(null,p__4485__auto__);
} else {
var temp__5733__auto____$7 = pred__16127.call(null,/\d{4}-\d{2}-\d{2}T\S*/,expr__16128);
if(cljs.core.truth_(temp__5733__auto____$7)){
var p__4485__auto__ = temp__5733__auto____$7;
return ((function (p__4485__auto__,temp__5733__auto____$7,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128){
return (function (s__$1){
return cljc.java_time.local_date_time.parse.call(null,s__$1);
});})(p__4485__auto__,temp__5733__auto____$7,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128))
.call(null,p__4485__auto__);
} else {
var temp__5733__auto____$8 = pred__16127.call(null,/\d{4}-\d{2}-\d{2}/,expr__16128);
if(cljs.core.truth_(temp__5733__auto____$8)){
var p__4485__auto__ = temp__5733__auto____$8;
return ((function (p__4485__auto__,temp__5733__auto____$8,temp__5733__auto____$7,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128){
return (function (s__$1){
return cljc.java_time.local_date.parse.call(null,s__$1);
});})(p__4485__auto__,temp__5733__auto____$8,temp__5733__auto____$7,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128))
.call(null,p__4485__auto__);
} else {
var temp__5733__auto____$9 = pred__16127.call(null,/\d{4}-\d{2}/,expr__16128);
if(cljs.core.truth_(temp__5733__auto____$9)){
var p__4485__auto__ = temp__5733__auto____$9;
return ((function (p__4485__auto__,temp__5733__auto____$9,temp__5733__auto____$8,temp__5733__auto____$7,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128){
return (function (s__$1){
return cljc.java_time.year_month.parse.call(null,s__$1);
});})(p__4485__auto__,temp__5733__auto____$9,temp__5733__auto____$8,temp__5733__auto____$7,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128))
.call(null,p__4485__auto__);
} else {
var temp__5733__auto____$10 = pred__16127.call(null,/\d{4}/,expr__16128);
if(cljs.core.truth_(temp__5733__auto____$10)){
var p__4485__auto__ = temp__5733__auto____$10;
return ((function (p__4485__auto__,temp__5733__auto____$10,temp__5733__auto____$9,temp__5733__auto____$8,temp__5733__auto____$7,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128){
return (function (s__$1){
return cljc.java_time.year.parse.call(null,s__$1);
});})(p__4485__auto__,temp__5733__auto____$10,temp__5733__auto____$9,temp__5733__auto____$8,temp__5733__auto____$7,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__16127,expr__16128))
.call(null,p__4485__auto__);
} else {
throw cljs.core.ex_info.call(null,"Unparseable time string",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),s], null));
}
}
}
}
}
}
}
}
}
}
}
}));

/**
 * @interface
 */
tick.core.IConversion = function(){};

/**
 * Make a java.util.Date instance.
 */
tick.core.inst = (function tick$core$inst(_){
if((((!((_ == null)))) && ((!((_.tick$core$IConversion$inst$arity$1 == null)))))){
return _.tick$core$IConversion$inst$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.inst[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.inst["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IConversion.inst",_);
}
}
}
});

/**
 * Make a java.time.Instant instance.
 */
tick.core.instant = (function tick$core$instant(_){
if((((!((_ == null)))) && ((!((_.tick$core$IConversion$instant$arity$1 == null)))))){
return _.tick$core$IConversion$instant$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.instant[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.instant["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IConversion.instant",_);
}
}
}
});

/**
 * Make a java.time.OffsetDateTime instance.
 */
tick.core.offset_date_time = (function tick$core$offset_date_time(_){
if((((!((_ == null)))) && ((!((_.tick$core$IConversion$offset_date_time$arity$1 == null)))))){
return _.tick$core$IConversion$offset_date_time$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.offset_date_time[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.offset_date_time["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IConversion.offset-date-time",_);
}
}
}
});

/**
 * Make a java.time.ZonedDateTime instance.
 */
tick.core.zoned_date_time = (function tick$core$zoned_date_time(_){
if((((!((_ == null)))) && ((!((_.tick$core$IConversion$zoned_date_time$arity$1 == null)))))){
return _.tick$core$IConversion$zoned_date_time$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.zoned_date_time[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.zoned_date_time["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IConversion.zoned-date-time",_);
}
}
}
});


/**
 * @interface
 */
tick.core.IExtraction = function(){};

/**
 * Make a java.time.LocalTime instance.
 */
tick.core.time = (function tick$core$time(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$time$arity$1 == null)))))){
return _.tick$core$IExtraction$time$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.time[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.time["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.time",_);
}
}
}
});

/**
 * Make a java.time.LocalDate instance.
 */
tick.core.date = (function tick$core$date(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$date$arity$1 == null)))))){
return _.tick$core$IExtraction$date$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.date[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.date["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.date",_);
}
}
}
});

/**
 * Make a java.time.LocalDateTime instance.
 */
tick.core.date_time = (function tick$core$date_time(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$date_time$arity$1 == null)))))){
return _.tick$core$IExtraction$date_time$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.date_time[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.date_time["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.date-time",_);
}
}
}
});

/**
 * Return the millisecond field of the given time
 */
tick.core.nanosecond = (function tick$core$nanosecond(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$nanosecond$arity$1 == null)))))){
return _.tick$core$IExtraction$nanosecond$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.nanosecond[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.nanosecond["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.nanosecond",_);
}
}
}
});

/**
 * Return the millisecond field of the given time
 */
tick.core.microsecond = (function tick$core$microsecond(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$microsecond$arity$1 == null)))))){
return _.tick$core$IExtraction$microsecond$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.microsecond[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.microsecond["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.microsecond",_);
}
}
}
});

/**
 * Return the millisecond field of the given time
 */
tick.core.millisecond = (function tick$core$millisecond(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$millisecond$arity$1 == null)))))){
return _.tick$core$IExtraction$millisecond$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.millisecond[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.millisecond["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.millisecond",_);
}
}
}
});

/**
 * Return the second field of the given time
 */
tick.core.second = (function tick$core$second(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$second$arity$1 == null)))))){
return _.tick$core$IExtraction$second$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.second[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.second["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.second",_);
}
}
}
});

/**
 * Return the minute field of the given time
 */
tick.core.minute = (function tick$core$minute(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$minute$arity$1 == null)))))){
return _.tick$core$IExtraction$minute$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.minute[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.minute["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.minute",_);
}
}
}
});

/**
 * Return the hour field of the given time
 */
tick.core.hour = (function tick$core$hour(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$hour$arity$1 == null)))))){
return _.tick$core$IExtraction$hour$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.hour[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.hour["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.hour",_);
}
}
}
});

/**
 * Make a java.time.DayOfWeek instance.
 */
tick.core.day_of_week = (function tick$core$day_of_week(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$day_of_week$arity$1 == null)))))){
return _.tick$core$IExtraction$day_of_week$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.day_of_week[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.day_of_week["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.day-of-week",_);
}
}
}
});

/**
 * Return value of the day in the month as an integer.
 */
tick.core.day_of_month = (function tick$core$day_of_month(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$day_of_month$arity$1 == null)))))){
return _.tick$core$IExtraction$day_of_month$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.day_of_month[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.day_of_month["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.day-of-month",_);
}
}
}
});

/**
 * Return value as integer
 */
tick.core.int$ = (function tick$core$int(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$int$arity$1 == null)))))){
return _.tick$core$IExtraction$int$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.int$[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.int$["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.int",_);
}
}
}
});

/**
 * Return value as long
 */
tick.core.long$ = (function tick$core$long(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$long$arity$1 == null)))))){
return _.tick$core$IExtraction$long$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.long$[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.long$["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.long",_);
}
}
}
});

/**
 * Make a java.time.Month instance.
 */
tick.core.month = (function tick$core$month(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$month$arity$1 == null)))))){
return _.tick$core$IExtraction$month$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.month[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.month["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.month",_);
}
}
}
});

/**
 * Make a java.time.Year instance.
 */
tick.core.year = (function tick$core$year(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$year$arity$1 == null)))))){
return _.tick$core$IExtraction$year$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.year[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.year["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.year",_);
}
}
}
});

/**
 * Make a java.time.YearMonth instance.
 */
tick.core.year_month = (function tick$core$year_month(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$year_month$arity$1 == null)))))){
return _.tick$core$IExtraction$year_month$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.year_month[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.year_month["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.year-month",_);
}
}
}
});

/**
 * Make a java.time.ZoneId instance.
 */
tick.core.zone = (function tick$core$zone(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$zone$arity$1 == null)))))){
return _.tick$core$IExtraction$zone$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.zone[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.zone["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.zone",_);
}
}
}
});

/**
 * Make a java.time.ZoneOffset instance.
 */
tick.core.zone_offset = (function tick$core$zone_offset(_){
if((((!((_ == null)))) && ((!((_.tick$core$IExtraction$zone_offset$arity$1 == null)))))){
return _.tick$core$IExtraction$zone_offset$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.zone_offset[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.zone_offset["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IExtraction.zone-offset",_);
}
}
}
});

tick.core.new_time = (function tick$core$new_time(var_args){
var G__16144 = arguments.length;
switch (G__16144) {
case 0:
return tick.core.new_time.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return tick.core.new_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.core.new_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tick.core.new_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.new_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.time.call(null,tick.core.now.call(null));
});

tick.core.new_time.cljs$core$IFn$_invoke$arity$2 = (function (hour,minute){
return cljc.java_time.local_time.of.call(null,hour,minute);
});

tick.core.new_time.cljs$core$IFn$_invoke$arity$3 = (function (hour,minute,second){
return cljc.java_time.local_time.of.call(null,hour,minute,second);
});

tick.core.new_time.cljs$core$IFn$_invoke$arity$4 = (function (hour,minute,second,nano){
return cljc.java_time.local_time.of.call(null,hour,minute,second,nano);
});

tick.core.new_time.cljs$lang$maxFixedArity = 4;

tick.core.new_date = (function tick$core$new_date(var_args){
var G__16147 = arguments.length;
switch (G__16147) {
case 0:
return tick.core.new_date.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return tick.core.new_date.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return tick.core.new_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return tick.core.new_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.new_date.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.today.call(null);
});

tick.core.new_date.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day_of_month){
return cljc.java_time.local_date.of.call(null,year,month,day_of_month);
});

tick.core.new_date.cljs$core$IFn$_invoke$arity$2 = (function (year,day_of_year){
return cljc.java_time.local_date.of_year_day.call(null,year,day_of_year);
});

tick.core.new_date.cljs$core$IFn$_invoke$arity$1 = (function (epoch_day){
return cljc.java_time.local_date.of_epoch_day.call(null,epoch_day);
});

tick.core.new_date.cljs$lang$maxFixedArity = 3;

/**
 * Return the current zone, which can be overridden by the *clock* dynamic var
 */
tick.core.current_zone = (function tick$core$current_zone(){
var temp__5733__auto__ = tick.core._STAR_clock_STAR_;
if(cljs.core.truth_(temp__5733__auto__)){
var clk = temp__5733__auto__;
return cljc.java_time.clock.get_zone.call(null,clk);
} else {
return cljc.java_time.zone_id.system_default.call(null);
}
});
goog.object.set(tick.core.IConversion,"function",true);

goog.object.set(tick.core.inst,"function",(function (f){
return tick.core.inst.call(null,f.call(null));
}));

goog.object.set(tick.core.instant,"function",(function (f){
return tick.core.instant.call(null,f.call(null));
}));

goog.object.set(tick.core.offset_date_time,"function",(function (f){
return tick.core.offset_date_time.call(null,f.call(null));
}));

goog.object.set(tick.core.zoned_date_time,"function",(function (f){
return tick.core.zoned_date_time.call(null,f.call(null));
}));

java.time.Instant.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$IConversion$inst$arity$1 = (function (i){
var i__$1 = this;
return (new Date(cljc.java_time.instant.to_epoch_milli.call(null,i__$1)));
});

java.time.Instant.prototype.tick$core$IConversion$instant$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
});

java.time.Instant.prototype.tick$core$IConversion$offset_date_time$arity$1 = (function (i){
var i__$1 = this;
return tick.core.zoned_date_time.call(null,i__$1);
});

java.time.Instant.prototype.tick$core$IConversion$zoned_date_time$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.zoned_date_time.of_instant.call(null,i__$1,tick.core.current_zone.call(null));
});

goog.object.set(tick.core.IConversion,"string",true);

goog.object.set(tick.core.inst,"string",(function (s){
return tick.core.inst.call(null,tick.core.instant.call(null,s));
}));

goog.object.set(tick.core.instant,"string",(function (s){
return tick.core.instant.call(null,tick.core.parse.call(null,s));
}));

goog.object.set(tick.core.offset_date_time,"string",(function (s){
return tick.core.zoned_date_time.call(null,s);
}));

goog.object.set(tick.core.zoned_date_time,"string",(function (s){
return cljc.java_time.zoned_date_time.parse.call(null,s);
}));

goog.object.set(tick.core.IConversion,"number",true);

goog.object.set(tick.core.instant,"number",(function (n){
return cljc.java_time.instant.of_epoch_milli.call(null,n);
}));

java.time.LocalDateTime.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$core$IConversion$inst$arity$1 = (function (ldt){
var ldt__$1 = this;
return tick.core.inst.call(null,tick.core.zoned_date_time.call(null,ldt__$1));
});

java.time.LocalDateTime.prototype.tick$core$IConversion$instant$arity$1 = (function (ldt){
var ldt__$1 = this;
return tick.core.instant.call(null,tick.core.zoned_date_time.call(null,ldt__$1));
});

java.time.LocalDateTime.prototype.tick$core$IConversion$offset_date_time$arity$1 = (function (ldt){
var ldt__$1 = this;
return tick.core.zoned_date_time.call(null,ldt__$1);
});

java.time.LocalDateTime.prototype.tick$core$IConversion$zoned_date_time$arity$1 = (function (ldt){
var ldt__$1 = this;
return cljc.java_time.local_date_time.at_zone.call(null,ldt__$1,tick.core.current_zone.call(null));
});

Date.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tick$core$IConversion$inst$arity$1 = (function (d){
var d__$1 = this;
return d__$1;
});

Date.prototype.tick$core$IConversion$instant$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.instant.of_epoch_milli.call(null,d__$1.getTime());
});

Date.prototype.tick$core$IConversion$zoned_date_time$arity$1 = (function (d){
var d__$1 = this;
return tick.core.zoned_date_time.call(null,tick.core.instant.call(null,d__$1));
});

Date.prototype.tick$core$IConversion$offset_date_time$arity$1 = (function (d){
var d__$1 = this;
return tick.core.offset_date_time.call(null,tick.core.instant.call(null,d__$1));
});

java.time.OffsetDateTime.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL;

java.time.OffsetDateTime.prototype.tick$core$IConversion$inst$arity$1 = (function (odt){
var odt__$1 = this;
return tick.core.inst.call(null,tick.core.instant.call(null,odt__$1));
});

java.time.OffsetDateTime.prototype.tick$core$IConversion$instant$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_instant.call(null,odt__$1);
});

java.time.OffsetDateTime.prototype.tick$core$IConversion$offset_date_time$arity$1 = (function (odt){
var odt__$1 = this;
return odt__$1;
});

java.time.OffsetDateTime.prototype.tick$core$IConversion$zoned_date_time$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_zoned_date_time.call(null,odt__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.tick$core$IConversion$inst$arity$1 = (function (zdt){
var zdt__$1 = this;
return tick.core.inst.call(null,tick.core.instant.call(null,zdt__$1));
});

java.time.ZonedDateTime.prototype.tick$core$IConversion$instant$arity$1 = (function (zdt){
var zdt__$1 = this;
return zdt__$1.toInstant();
});

java.time.ZonedDateTime.prototype.tick$core$IConversion$offset_date_time$arity$1 = (function (zdt){
var zdt__$1 = this;
return zdt__$1;
});

java.time.ZonedDateTime.prototype.tick$core$IConversion$zoned_date_time$arity$1 = (function (zdt){
var zdt__$1 = this;
return zdt__$1;
});
java.time.YearMonth.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.YearMonth.prototype.tick$core$IExtraction$year_month$arity$1 = (function (ym){
var ym__$1 = this;
return ym__$1;
});

java.time.YearMonth.prototype.tick$core$IExtraction$month$arity$1 = (function (ym){
var ym__$1 = this;
return cljc.java_time.year_month.get_month.call(null,ym__$1);
});

java.time.YearMonth.prototype.tick$core$IExtraction$year$arity$1 = (function (ym){
var ym__$1 = this;
return tick.core.year.call(null,cljc.java_time.year_month.get_year.call(null,ym__$1));
});

java.time.Year.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.tick$core$IExtraction$year$arity$1 = (function (y){
var y__$1 = this;
return y__$1;
});

java.time.Year.prototype.tick$core$IExtraction$int$arity$1 = (function (y){
var y__$1 = this;
return cljc.java_time.year.get_value.call(null,y__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.tick$core$IExtraction$time$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.to_local_time.call(null,zdt__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$date$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.to_local_date.call(null,zdt__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$date_time$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.to_local_date_time.call(null,zdt__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$nanosecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get.call(null,t__$1,cljc.java_time.temporal.chrono_field.nano_of_second);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$microsecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get.call(null,t__$1,cljc.java_time.temporal.chrono_field.micro_of_second);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$millisecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get.call(null,t__$1,cljc.java_time.temporal.chrono_field.milli_of_second);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_second.call(null,t__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_minute.call(null,t__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_hour.call(null,t__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$day_of_week$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_day_of_week.call(null,t__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$day_of_month$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_day_of_month.call(null,t__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$month$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.get_month.call(null,zdt__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$year$arity$1 = (function (zdt){
var zdt__$1 = this;
return tick.core.year.call(null,cljc.java_time.zoned_date_time.get_year.call(null,zdt__$1));
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$zone$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.get_zone.call(null,zdt__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$zone_offset$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.get_offset.call(null,zdt__$1);
});

java.time.Instant.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$IExtraction$time$arity$1 = (function (i){
var i__$1 = this;
return tick.core.time.call(null,tick.core.zoned_date_time.call(null,i__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$date$arity$1 = (function (i){
var i__$1 = this;
return tick.core.date.call(null,tick.core.zoned_date_time.call(null,i__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$date_time$arity$1 = (function (i){
var i__$1 = this;
return tick.core.date_time.call(null,tick.core.zoned_date_time.call(null,i__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$nanosecond$arity$1 = (function (t){
var t__$1 = this;
return tick.core.nanosecond.call(null,tick.core.zoned_date_time.call(null,t__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$microsecond$arity$1 = (function (t){
var t__$1 = this;
return tick.core.microsecond.call(null,tick.core.zoned_date_time.call(null,t__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$millisecond$arity$1 = (function (t){
var t__$1 = this;
return tick.core.millisecond.call(null,tick.core.zoned_date_time.call(null,t__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return tick.core.second.call(null,tick.core.zoned_date_time.call(null,t__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return tick.core.minute.call(null,tick.core.zoned_date_time.call(null,t__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return tick.core.hour.call(null,tick.core.zoned_date_time.call(null,t__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$day_of_week$arity$1 = (function (i){
var i__$1 = this;
return tick.core.day_of_week.call(null,tick.core.date.call(null,i__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$day_of_month$arity$1 = (function (i){
var i__$1 = this;
return tick.core.day_of_month.call(null,tick.core.date.call(null,i__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$int$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.instant.get_nano.call(null,i__$1);
});

java.time.Instant.prototype.tick$core$IExtraction$long$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.instant.get_epoch_second.call(null,i__$1);
});

java.time.Instant.prototype.tick$core$IExtraction$month$arity$1 = (function (i){
var i__$1 = this;
return tick.core.month.call(null,tick.core.date.call(null,i__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$year$arity$1 = (function (i){
var i__$1 = this;
return tick.core.year.call(null,tick.core.date.call(null,i__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$year_month$arity$1 = (function (i){
var i__$1 = this;
return tick.core.year_month.call(null,tick.core.date.call(null,i__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$zone$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.zone_id.of.call(null,"UTC");
});

java.time.Instant.prototype.tick$core$IExtraction$zone_offset$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.zone_offset.utc;
});

goog.object.set(tick.core.IExtraction,"object",true);

goog.object.set(tick.core.int$,"object",(function (v){
return tick.core.parse_int.call(null,v);
}));

goog.object.set(tick.core.long$,"object",(function (v){
return tick.core.parse_int.call(null,v);
}));

Date.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tick$core$IExtraction$date$arity$1 = (function (d){
var d__$1 = this;
return tick.core.date.call(null,tick.core.zoned_date_time.call(null,tick.core.instant.call(null,d__$1)));
});

Date.prototype.tick$core$IExtraction$date_time$arity$1 = (function (d){
var d__$1 = this;
return tick.core.date_time.call(null,tick.core.instant.call(null,d__$1));
});

Date.prototype.tick$core$IExtraction$year_month$arity$1 = (function (d){
var d__$1 = this;
return tick.core.year_month.call(null,tick.core.date.call(null,d__$1));
});

Date.prototype.tick$core$IExtraction$year$arity$1 = (function (d){
var d__$1 = this;
return tick.core.year.call(null,tick.core.date.call(null,d__$1));
});

java.time.ZoneId.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZoneId.prototype.tick$core$IExtraction$zone$arity$1 = (function (z){
var z__$1 = this;
return z__$1;
});

java.time.LocalDate.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$core$IExtraction$date$arity$1 = (function (d){
var d__$1 = this;
return d__$1;
});

java.time.LocalDate.prototype.tick$core$IExtraction$day_of_week$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.local_date.get_day_of_week.call(null,d__$1);
});

java.time.LocalDate.prototype.tick$core$IExtraction$day_of_month$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.local_date.get_day_of_month.call(null,d__$1);
});

java.time.LocalDate.prototype.tick$core$IExtraction$month$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.month.from.call(null,d__$1);
});

java.time.LocalDate.prototype.tick$core$IExtraction$year_month$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.year_month.of.call(null,cljc.java_time.local_date.get_year.call(null,d__$1),cljc.java_time.local_date.get_month_value.call(null,d__$1));
});

java.time.LocalDate.prototype.tick$core$IExtraction$year$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.year.of.call(null,cljc.java_time.local_date.get_year.call(null,d__$1));
});

goog.object.set(tick.core.IExtraction,"number",true);

goog.object.set(tick.core.day_of_week,"number",(function (n){
return cljc.java_time.day_of_week.of.call(null,n);
}));

goog.object.set(tick.core.month,"number",(function (n){
return cljc.java_time.month.of.call(null,n);
}));

goog.object.set(tick.core.year,"number",(function (n){
return cljc.java_time.year.of.call(null,n);
}));

goog.object.set(tick.core.zone_offset,"number",(function (s){
return cljc.java_time.zone_offset.of_hours.call(null,s);
}));

java.time.ZoneOffset.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZoneOffset.prototype.tick$core$IExtraction$zone_offset$arity$1 = (function (z){
var z__$1 = this;
return z__$1;
});

goog.object.set(tick.core.IExtraction,"string",true);

goog.object.set(tick.core.time,"string",(function (s){
return tick.core.time.call(null,tick.core.parse.call(null,s));
}));

goog.object.set(tick.core.date,"string",(function (s){
return tick.core.date.call(null,tick.core.parse.call(null,s));
}));

goog.object.set(tick.core.date_time,"string",(function (s){
return cljc.java_time.local_date_time.parse.call(null,s);
}));

goog.object.set(tick.core.day_of_week,"string",(function (s){
var or__4131__auto__ = tick.core.parse_day.call(null,s);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return tick.core.day_of_week.call(null,tick.core.date.call(null,s));
}
}));

goog.object.set(tick.core.day_of_month,"string",(function (s){
return tick.core.day_of_month.call(null,tick.core.date.call(null,s));
}));

goog.object.set(tick.core.month,"string",(function (s){
var or__4131__auto__ = tick.core.parse_month.call(null,s);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return tick.core.month.call(null,tick.core.date.call(null,s));
}
}));

goog.object.set(tick.core.year,"string",(function (s){
return tick.core.year.call(null,tick.core.parse.call(null,s));
}));

goog.object.set(tick.core.year_month,"string",(function (s){
return tick.core.year_month.call(null,tick.core.parse.call(null,s));
}));

goog.object.set(tick.core.zone,"string",(function (s){
return cljc.java_time.zone_id.of.call(null,s);
}));

goog.object.set(tick.core.zone_offset,"string",(function (s){
return cljc.java_time.zone_offset.of.call(null,s);
}));

goog.object.set(tick.core.int$,"string",(function (s){
return cljc.java_time.instant.get_nano.call(null,tick.core.instant.call(null,s));
}));

goog.object.set(tick.core.long$,"string",(function (s){
return cljc.java_time.instant.get_epoch_second.call(null,tick.core.instant.call(null,s));
}));

goog.object.set(tick.core.IExtraction,"function",true);

goog.object.set(tick.core.time,"function",(function (f){
return tick.core.time.call(null,f.call(null));
}));

goog.object.set(tick.core.date,"function",(function (f){
return tick.core.date.call(null,f.call(null));
}));

goog.object.set(tick.core.date_time,"function",(function (f){
return tick.core.date_time.call(null,f.call(null));
}));

goog.object.set(tick.core.nanosecond,"function",(function (f){
return tick.core.nanosecond.call(null,f.call(null));
}));

goog.object.set(tick.core.microsecond,"function",(function (f){
return tick.core.microsecond.call(null,f.call(null));
}));

goog.object.set(tick.core.millisecond,"function",(function (f){
return tick.core.millisecond.call(null,f.call(null));
}));

goog.object.set(tick.core.second,"function",(function (f){
return tick.core.second.call(null,f.call(null));
}));

goog.object.set(tick.core.minute,"function",(function (f){
return tick.core.minute.call(null,f.call(null));
}));

goog.object.set(tick.core.hour,"function",(function (f){
return tick.core.hour.call(null,f.call(null));
}));

goog.object.set(tick.core.day_of_week,"function",(function (f){
return tick.core.day_of_week.call(null,f.call(null));
}));

goog.object.set(tick.core.day_of_month,"function",(function (f){
return tick.core.day_of_month.call(null,f.call(null));
}));

goog.object.set(tick.core.int$,"function",(function (f){
return tick.core.int$.call(null,f.call(null));
}));

goog.object.set(tick.core.long$,"function",(function (f){
return tick.core.long$.call(null,f.call(null));
}));

goog.object.set(tick.core.month,"function",(function (f){
return tick.core.month.call(null,f.call(null));
}));

goog.object.set(tick.core.year,"function",(function (f){
return tick.core.year.call(null,f.call(null));
}));

goog.object.set(tick.core.year_month,"function",(function (f){
return tick.core.year_month.call(null,f.call(null));
}));

goog.object.set(tick.core.zone,"function",(function (f){
return tick.core.zone.call(null,f.call(null));
}));

goog.object.set(tick.core.zone_offset,"function",(function (f){
return tick.core.zone_offset.call(null,f.call(null));
}));

java.time.LocalTime.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalTime.prototype.tick$core$IExtraction$time$arity$1 = (function (t){
var t__$1 = this;
return t__$1;
});

java.time.LocalTime.prototype.tick$core$IExtraction$nanosecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get.call(null,t__$1,cljc.java_time.temporal.chrono_field.nano_of_second);
});

java.time.LocalTime.prototype.tick$core$IExtraction$microsecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get.call(null,t__$1,cljc.java_time.temporal.chrono_field.micro_of_second);
});

java.time.LocalTime.prototype.tick$core$IExtraction$millisecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get.call(null,t__$1,cljc.java_time.temporal.chrono_field.milli_of_second);
});

java.time.LocalTime.prototype.tick$core$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get_second.call(null,t__$1);
});

java.time.LocalTime.prototype.tick$core$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get_minute.call(null,t__$1);
});

java.time.LocalTime.prototype.tick$core$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get_hour.call(null,t__$1);
});

java.time.OffsetDateTime.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.OffsetDateTime.prototype.tick$core$IExtraction$time$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_local_time.call(null,odt__$1);
});

java.time.OffsetDateTime.prototype.tick$core$IExtraction$date$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_local_date.call(null,odt__$1);
});

java.time.OffsetDateTime.prototype.tick$core$IExtraction$date_time$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_local_date_time.call(null,odt__$1);
});

java.time.OffsetDateTime.prototype.tick$core$IExtraction$year$arity$1 = (function (odt){
var odt__$1 = this;
return tick.core.year.call(null,cljc.java_time.offset_date_time.get_year.call(null,odt__$1));
});

java.time.OffsetDateTime.prototype.tick$core$IExtraction$zone_offset$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.get_offset.call(null,odt__$1);
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$core$IExtraction$time$arity$1 = (function (dt){
var dt__$1 = this;
return cljc.java_time.local_date_time.to_local_time.call(null,dt__$1);
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$date$arity$1 = (function (dt){
var dt__$1 = this;
return cljc.java_time.local_date_time.to_local_date.call(null,dt__$1);
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$date_time$arity$1 = (function (ldt){
var ldt__$1 = this;
return ldt__$1;
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_date_time.get_second.call(null,t__$1);
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_date_time.get_minute.call(null,t__$1);
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_date_time.get_hour.call(null,t__$1);
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$day_of_week$arity$1 = (function (dt){
var dt__$1 = this;
return tick.core.day_of_week.call(null,tick.core.date.call(null,dt__$1));
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$day_of_month$arity$1 = (function (dt){
var dt__$1 = this;
return tick.core.day_of_month.call(null,tick.core.date.call(null,dt__$1));
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$year_month$arity$1 = (function (dt){
var dt__$1 = this;
return tick.core.year_month.call(null,tick.core.date.call(null,dt__$1));
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$month$arity$1 = (function (dt){
var dt__$1 = this;
return cljc.java_time.local_date_time.get_month.call(null,dt__$1);
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$year$arity$1 = (function (dt){
var dt__$1 = this;
return tick.core.year.call(null,tick.core.date.call(null,dt__$1));
});

java.time.Month.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Month.prototype.tick$core$IExtraction$int$arity$1 = (function (m){
var m__$1 = this;
return cljc.java_time.month.get_value.call(null,m__$1);
});

java.time.DayOfWeek.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.DayOfWeek.prototype.tick$core$IExtraction$int$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.day_of_week.get_value.call(null,d__$1);
});
tick.core.field_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"proleptic-month","proleptic-month",-746961920),new cljs.core.Keyword(null,"aligned-week-of-month","aligned-week-of-month",-1988230912),new cljs.core.Keyword(null,"clock-hour-of-ampm","clock-hour-of-ampm",-268394751),new cljs.core.Keyword(null,"epoch-day","epoch-day",-1151217791),new cljs.core.Keyword(null,"nano-of-second","nano-of-second",-1642935645),new cljs.core.Keyword(null,"aligned-week-of-year","aligned-week-of-year",70378276),new cljs.core.Keyword(null,"era","era",1165135812),new cljs.core.Keyword(null,"offset-seconds","offset-seconds",-695890139),new cljs.core.Keyword(null,"micro-of-day","micro-of-day",-1255932121),new cljs.core.Keyword(null,"minute-of-day","minute-of-day",558111464),new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),new cljs.core.Keyword(null,"ampm-of-day","ampm-of-day",-284051414),new cljs.core.Keyword(null,"clock-hour-of-day","clock-hour-of-day",370314698),new cljs.core.Keyword(null,"hour-of-day","hour-of-day",2086777099),new cljs.core.Keyword(null,"month-of-year","month-of-year",760756492),new cljs.core.Keyword(null,"milli-of-second","milli-of-second",-1422144788),new cljs.core.Keyword(null,"instant-seconds","instant-seconds",1032794797),new cljs.core.Keyword(null,"micro-of-second","micro-of-second",1805992110),new cljs.core.Keyword(null,"aligned-day-of-week-in-month","aligned-day-of-week-in-month",-452127505),new cljs.core.Keyword(null,"day-of-month","day-of-month",-1096650288),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"day-of-year","day-of-year",478600113),new cljs.core.Keyword(null,"year-of-era","year-of-era",682445876),new cljs.core.Keyword(null,"nano-of-day","nano-of-day",525361845),new cljs.core.Keyword(null,"hour-of-ampm","hour-of-ampm",1171096469),new cljs.core.Keyword(null,"second-of-minute","second-of-minute",222734326),new cljs.core.Keyword(null,"aligned-day-of-week-in-year","aligned-day-of-week-in-year",-931066377),new cljs.core.Keyword(null,"second-of-day","second-of-day",806277913),new cljs.core.Keyword(null,"milli-of-day","milli-of-day",-2024730021),new cljs.core.Keyword(null,"minute-of-hour","minute-of-hour",1903220478)],[cljc.java_time.temporal.chrono_field.proleptic_month,cljc.java_time.temporal.chrono_field.aligned_week_of_month,cljc.java_time.temporal.chrono_field.clock_hour_of_ampm,cljc.java_time.temporal.chrono_field.epoch_day,cljc.java_time.temporal.chrono_field.nano_of_second,cljc.java_time.temporal.chrono_field.aligned_week_of_year,cljc.java_time.temporal.chrono_field.era,cljc.java_time.temporal.chrono_field.offset_seconds,cljc.java_time.temporal.chrono_field.micro_of_day,cljc.java_time.temporal.chrono_field.minute_of_day,cljc.java_time.temporal.chrono_field.day_of_week,cljc.java_time.temporal.chrono_field.ampm_of_day,cljc.java_time.temporal.chrono_field.clock_hour_of_day,cljc.java_time.temporal.chrono_field.hour_of_day,cljc.java_time.temporal.chrono_field.month_of_year,cljc.java_time.temporal.chrono_field.milli_of_second,cljc.java_time.temporal.chrono_field.instant_seconds,cljc.java_time.temporal.chrono_field.micro_of_second,cljc.java_time.temporal.chrono_field.aligned_day_of_week_in_month,cljc.java_time.temporal.chrono_field.day_of_month,cljc.java_time.temporal.chrono_field.year,cljc.java_time.temporal.chrono_field.day_of_year,cljc.java_time.temporal.chrono_field.year_of_era,cljc.java_time.temporal.chrono_field.nano_of_day,cljc.java_time.temporal.chrono_field.hour_of_ampm,cljc.java_time.temporal.chrono_field.second_of_minute,cljc.java_time.temporal.chrono_field.aligned_day_of_week_in_year,cljc.java_time.temporal.chrono_field.second_of_day,cljc.java_time.temporal.chrono_field.milli_of_day,cljc.java_time.temporal.chrono_field.minute_of_hour]);

/**
* @constructor
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.ILookup}
*/
tick.core.FieldsLookup = (function (t){
this.t = t;
this.cljs$lang$protocol_mask$partition0$ = 8388864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
tick.core.FieldsLookup.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,((function (___$1){
return (function (p__16149){
var vec__16150 = p__16149;
var k = cljs.core.nth.call(null,vec__16150,(0),null);
var v = cljs.core.nth.call(null,vec__16150,(1),null);
var cf = cljs.core.get.call(null,tick.core.field_map,k);
if(cljs.core.truth_(self__.t.isSupported(cf))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,self__.t.getLong(cf)], null);
} else {
return null;
}
});})(___$1))
,tick.core.field_map)));
});

tick.core.FieldsLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,fld){
var self__ = this;
var ___$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,tick.core.field_map,fld);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return self__.t.getLong(f);
} else {
return null;
}
});

tick.core.FieldsLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,fld,notfound){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = cljs.core.get.call(null,tick.core.field_map,fld);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
try{return self__.t.getLong(f);
}catch (e16153){if((e16153 instanceof Error)){
var e = e16153;
return notfound;
} else {
throw e16153;

}
}} else {
return notfound;
}
});

tick.core.FieldsLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null)], null);
});

tick.core.FieldsLookup.cljs$lang$type = true;

tick.core.FieldsLookup.cljs$lang$ctorStr = "tick.core/FieldsLookup";

tick.core.FieldsLookup.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"tick.core/FieldsLookup");
});

/**
 * Positional factory function for tick.core/FieldsLookup.
 */
tick.core.__GT_FieldsLookup = (function tick$core$__GT_FieldsLookup(t){
return (new tick.core.FieldsLookup(t));
});

tick.core.fields = (function tick$core$fields(t){
return tick.core.__GT_FieldsLookup.call(null,t);
});
/**
 * Adjust a temporal with an adjuster or field
 */
tick.core.with$ = (function tick$core$with(var_args){
var G__16155 = arguments.length;
switch (G__16155) {
case 2:
return tick.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (t,adj){
return t.with(adj);
});

tick.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (t,fld,new_value){
var temp__5735__auto__ = cljs.core.get.call(null,tick.core.field_map,fld);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return t.with(f,new_value);
} else {
return null;
}
});

tick.core.with$.cljs$lang$maxFixedArity = 3;

tick.core.day_of_week_in_month = (function tick$core$day_of_week_in_month(var_args){
var G__16158 = arguments.length;
switch (G__16158) {
case 2:
return tick.core.day_of_week_in_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.core.day_of_week_in_month.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.day_of_week_in_month.cljs$core$IFn$_invoke$arity$2 = (function (ordinal,dow){
return cljc.java_time.temporal.temporal_adjusters.day_of_week_in_month.call(null,ordinal,tick.core.day_of_week.call(null,dow));
});

tick.core.day_of_week_in_month.cljs$core$IFn$_invoke$arity$3 = (function (t,ordinal,dow){
return tick.core.with$.call(null,t,tick.core.day_of_week_in_month.call(null,ordinal,dow));
});

tick.core.day_of_week_in_month.cljs$lang$maxFixedArity = 3;

tick.core.first_day_of_month = (function tick$core$first_day_of_month(var_args){
var G__16161 = arguments.length;
switch (G__16161) {
case 0:
return tick.core.first_day_of_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.first_day_of_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.first_day_of_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.first_day_of_month.call(null);
});

tick.core.first_day_of_month.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.call(null,t,tick.core.first_day_of_month.call(null));
});

tick.core.first_day_of_month.cljs$lang$maxFixedArity = 1;

tick.core.first_day_of_next_month = (function tick$core$first_day_of_next_month(var_args){
var G__16164 = arguments.length;
switch (G__16164) {
case 0:
return tick.core.first_day_of_next_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.first_day_of_next_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.first_day_of_next_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.first_day_of_next_month.call(null);
});

tick.core.first_day_of_next_month.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.call(null,t,tick.core.first_day_of_next_month.call(null));
});

tick.core.first_day_of_next_month.cljs$lang$maxFixedArity = 1;

tick.core.first_day_of_next_year = (function tick$core$first_day_of_next_year(var_args){
var G__16167 = arguments.length;
switch (G__16167) {
case 0:
return tick.core.first_day_of_next_year.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.first_day_of_next_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.first_day_of_next_year.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.first_day_of_next_year.call(null);
});

tick.core.first_day_of_next_year.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.call(null,t,tick.core.first_day_of_next_year.call(null));
});

tick.core.first_day_of_next_year.cljs$lang$maxFixedArity = 1;

tick.core.first_day_of_year = (function tick$core$first_day_of_year(var_args){
var G__16170 = arguments.length;
switch (G__16170) {
case 0:
return tick.core.first_day_of_year.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.first_day_of_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.first_day_of_year.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.first_day_of_year.call(null);
});

tick.core.first_day_of_year.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.call(null,t,tick.core.first_day_of_year.call(null));
});

tick.core.first_day_of_year.cljs$lang$maxFixedArity = 1;

tick.core.first_in_month = (function tick$core$first_in_month(var_args){
var G__16173 = arguments.length;
switch (G__16173) {
case 1:
return tick.core.first_in_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.first_in_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.first_in_month.cljs$core$IFn$_invoke$arity$1 = (function (dow){
return cljc.java_time.temporal.temporal_adjusters.first_in_month.call(null,tick.core.day_of_week.call(null,dow));
});

tick.core.first_in_month.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.call(null,t,tick.core.first_in_month.call(null,dow));
});

tick.core.first_in_month.cljs$lang$maxFixedArity = 2;

tick.core.last_day_of_month = (function tick$core$last_day_of_month(var_args){
var G__16176 = arguments.length;
switch (G__16176) {
case 0:
return tick.core.last_day_of_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.last_day_of_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.last_day_of_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.last_day_of_month.call(null);
});

tick.core.last_day_of_month.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.call(null,t,tick.core.last_day_of_month.call(null));
});

tick.core.last_day_of_month.cljs$lang$maxFixedArity = 1;

tick.core.last_day_of_year = (function tick$core$last_day_of_year(var_args){
var G__16179 = arguments.length;
switch (G__16179) {
case 0:
return tick.core.last_day_of_year.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.last_day_of_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.last_day_of_year.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.last_day_of_year.call(null);
});

tick.core.last_day_of_year.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.call(null,t,tick.core.last_day_of_year.call(null));
});

tick.core.last_day_of_year.cljs$lang$maxFixedArity = 1;

tick.core.last_in_month = (function tick$core$last_in_month(var_args){
var G__16182 = arguments.length;
switch (G__16182) {
case 1:
return tick.core.last_in_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.last_in_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.last_in_month.cljs$core$IFn$_invoke$arity$1 = (function (dow){
return cljc.java_time.temporal.temporal_adjusters.last_in_month.call(null,tick.core.day_of_week.call(null,dow));
});

tick.core.last_in_month.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.call(null,t,tick.core.last_in_month.call(null,dow));
});

tick.core.last_in_month.cljs$lang$maxFixedArity = 2;

tick.core.next = (function tick$core$next(var_args){
var G__16185 = arguments.length;
switch (G__16185) {
case 1:
return tick.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.next.cljs$core$IFn$_invoke$arity$1 = (function (dow){
return cljc.java_time.temporal.temporal_adjusters.next.call(null,tick.core.day_of_week.call(null,dow));
});

tick.core.next.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.call(null,t,tick.core.next.call(null,dow));
});

tick.core.next.cljs$lang$maxFixedArity = 2;

tick.core.next_or_same = (function tick$core$next_or_same(var_args){
var G__16188 = arguments.length;
switch (G__16188) {
case 1:
return tick.core.next_or_same.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.next_or_same.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.next_or_same.cljs$core$IFn$_invoke$arity$1 = (function (dow){
return cljc.java_time.temporal.temporal_adjusters.next_or_same.call(null,tick.core.day_of_week.call(null,dow));
});

tick.core.next_or_same.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.call(null,t,tick.core.next_or_same.call(null,dow));
});

tick.core.next_or_same.cljs$lang$maxFixedArity = 2;

tick.core.previous = (function tick$core$previous(var_args){
var G__16191 = arguments.length;
switch (G__16191) {
case 1:
return tick.core.previous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.previous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.previous.cljs$core$IFn$_invoke$arity$1 = (function (dow){
return cljc.java_time.temporal.temporal_adjusters.previous.call(null,tick.core.day_of_week.call(null,dow));
});

tick.core.previous.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.call(null,t,tick.core.previous.call(null,dow));
});

tick.core.previous.cljs$lang$maxFixedArity = 2;

tick.core.previous_or_same = (function tick$core$previous_or_same(var_args){
var G__16194 = arguments.length;
switch (G__16194) {
case 1:
return tick.core.previous_or_same.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.previous_or_same.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.previous_or_same.cljs$core$IFn$_invoke$arity$1 = (function (dow){
return cljc.java_time.temporal.temporal_adjusters.previous_or_same.call(null,tick.core.day_of_week.call(null,dow));
});

tick.core.previous_or_same.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.call(null,t,tick.core.previous_or_same.call(null,dow));
});

tick.core.previous_or_same.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
tick.core.ITimeComparison = function(){};

/**
 * Is x before y?
 */
tick.core._LT_ = (function tick$core$_LT_(x,y){
if((((!((x == null)))) && ((!((x.tick$core$ITimeComparison$_LT_$arity$2 == null)))))){
return x.tick$core$ITimeComparison$_LT_$arity$2(x,y);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (tick.core._LT_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,x,y);
} else {
var m__4431__auto__ = (tick.core._LT_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeComparison.<",x);
}
}
}
});

/**
 * Is x before or at the same time as y?
 */
tick.core._LT__EQ_ = (function tick$core$_LT__EQ_(x,y){
if((((!((x == null)))) && ((!((x.tick$core$ITimeComparison$_LT__EQ_$arity$2 == null)))))){
return x.tick$core$ITimeComparison$_LT__EQ_$arity$2(x,y);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (tick.core._LT__EQ_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,x,y);
} else {
var m__4431__auto__ = (tick.core._LT__EQ_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeComparison.<=",x);
}
}
}
});

/**
 * Is x after y?
 */
tick.core._GT_ = (function tick$core$_GT_(x,y){
if((((!((x == null)))) && ((!((x.tick$core$ITimeComparison$_GT_$arity$2 == null)))))){
return x.tick$core$ITimeComparison$_GT_$arity$2(x,y);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (tick.core._GT_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,x,y);
} else {
var m__4431__auto__ = (tick.core._GT_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeComparison.>",x);
}
}
}
});

/**
 * Is x after or at the same time as y?
 */
tick.core._GT__EQ_ = (function tick$core$_GT__EQ_(x,y){
if((((!((x == null)))) && ((!((x.tick$core$ITimeComparison$_GT__EQ_$arity$2 == null)))))){
return x.tick$core$ITimeComparison$_GT__EQ_$arity$2(x,y);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (tick.core._GT__EQ_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,x,y);
} else {
var m__4431__auto__ = (tick.core._GT__EQ_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeComparison.>=",x);
}
}
}
});

java.time.YearMonth.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.YearMonth.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
});

java.time.YearMonth.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not.call(null,x__$1.isAfter(y));
});

java.time.YearMonth.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
});

java.time.YearMonth.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not.call(null,x__$1.isBefore(y));
});

java.time.Year.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
});

java.time.Year.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not.call(null,x__$1.isAfter(y));
});

java.time.Year.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
});

java.time.Year.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not.call(null,x__$1.isBefore(y));
});

java.time.ZonedDateTime.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
});

java.time.ZonedDateTime.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not.call(null,x__$1.isAfter(y));
});

java.time.ZonedDateTime.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
});

java.time.ZonedDateTime.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not.call(null,x__$1.isBefore(y));
});

java.time.Instant.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
});

java.time.Instant.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not.call(null,x__$1.isAfter(y));
});

java.time.Instant.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
});

java.time.Instant.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not.call(null,x__$1.isBefore(y));
});

Date.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return (cljs.core.compare.call(null,x__$1,y) < (0));
});

Date.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return (!((cljs.core.compare.call(null,x__$1,y) > (0))));
});

Date.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return (cljs.core.compare.call(null,x__$1,y) > (0));
});

Date.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return (!((cljs.core.compare.call(null,x__$1,y) < (0))));
});

java.time.LocalDate.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
});

java.time.LocalDate.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not.call(null,x__$1.isAfter(y));
});

java.time.LocalDate.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
});

java.time.LocalDate.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not.call(null,x__$1.isBefore(y));
});

java.time.LocalTime.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalTime.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
});

java.time.LocalTime.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not.call(null,x__$1.isAfter(y));
});

java.time.LocalTime.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
});

java.time.LocalTime.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not.call(null,x__$1.isBefore(y));
});

java.time.OffsetDateTime.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.OffsetDateTime.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
});

java.time.OffsetDateTime.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not.call(null,x__$1.isAfter(y));
});

java.time.OffsetDateTime.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
});

java.time.OffsetDateTime.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not.call(null,x__$1.isBefore(y));
});

java.time.LocalDateTime.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
});

java.time.LocalDateTime.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not.call(null,x__$1.isAfter(y));
});

java.time.LocalDateTime.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
});

java.time.LocalDateTime.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not.call(null,x__$1.isBefore(y));
});

java.time.Duration.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Duration.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return (x__$1.compareTo(y) < (0));
});

java.time.Duration.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
var or__4131__auto__ = cljs.core._EQ_.call(null,x__$1,y);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return x__$1.compareTo(y);
}
});

java.time.Duration.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return (x__$1.compareTo(y) > (0));
});

java.time.Duration.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return ((cljs.core._EQ_.call(null,x__$1,y)) || ((x__$1.compareTo(y) > (0))));
});
tick.core.unit_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"nanos","nanos",-1777059258),new cljs.core.Keyword(null,"forever","forever",2103455015),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"half-days","half-days",-534088147),new cljs.core.Keyword(null,"micros","micros",420024622),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"centuries","centuries",-306410384),new cljs.core.Keyword(null,"decades","decades",-2105076367),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"eras","eras",1406613306),new cljs.core.Keyword(null,"millennia","millennia",2120675355),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"millis","millis",-1338288387)],[cljc.java_time.temporal.chrono_unit.nanos,cljc.java_time.temporal.chrono_unit.forever,cljc.java_time.temporal.chrono_unit.months,cljc.java_time.temporal.chrono_unit.days,cljc.java_time.temporal.chrono_unit.half_days,cljc.java_time.temporal.chrono_unit.micros,cljc.java_time.temporal.chrono_unit.seconds,cljc.java_time.temporal.chrono_unit.centuries,cljc.java_time.temporal.chrono_unit.decades,cljc.java_time.temporal.chrono_unit.hours,cljc.java_time.temporal.chrono_unit.years,cljc.java_time.temporal.chrono_unit.minutes,cljc.java_time.temporal.chrono_unit.eras,cljc.java_time.temporal.chrono_unit.millennia,cljc.java_time.temporal.chrono_unit.weeks,cljc.java_time.temporal.chrono_unit.millis]);
tick.core.reverse_unit_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.map.call(null,cljs.core.reverse,tick.core.unit_map)));
tick.core.units = (function tick$core$units(x){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function tick$core$units_$_iter__16196(s__16197){
return (new cljs.core.LazySeq(null,(function (){
var s__16197__$1 = s__16197;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__16197__$1);
if(temp__5735__auto__){
var s__16197__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16197__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16197__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16199 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16198 = (0);
while(true){
if((i__16198 < size__4522__auto__)){
var tu = cljs.core._nth.call(null,c__4521__auto__,i__16198);
var k = tick.core.reverse_unit_map.call(null,tu);
if(cljs.core.truth_(k)){
cljs.core.chunk_append.call(null,b__16199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,x.get(tu)], null));

var G__16200 = (i__16198 + (1));
i__16198 = G__16200;
continue;
} else {
var G__16201 = (i__16198 + (1));
i__16198 = G__16201;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16199),tick$core$units_$_iter__16196.call(null,cljs.core.chunk_rest.call(null,s__16197__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16199),null);
}
} else {
var tu = cljs.core.first.call(null,s__16197__$2);
var k = tick.core.reverse_unit_map.call(null,tu);
if(cljs.core.truth_(k)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,x.get(tu)], null),tick$core$units_$_iter__16196.call(null,cljs.core.rest.call(null,s__16197__$2)));
} else {
var G__16202 = cljs.core.rest.call(null,s__16197__$2);
s__16197__$1 = G__16202;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljc.java_time.temporal.temporal_amount.get_units.call(null,x));
})());
});
tick.core.truncate = (function tick$core$truncate(x,u){
var temp__5735__auto__ = cljs.core.get.call(null,tick.core.unit_map,u);
if(cljs.core.truth_(temp__5735__auto__)){
var u__$1 = temp__5735__auto__;
return x.truncatedTo(u__$1);
} else {
return null;
}
});

/**
 * @interface
 */
tick.core.ITimeLength = function(){};

/**
 * Return the given quantity in nanoseconds.
 */
tick.core.nanos = (function tick$core$nanos(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$nanos$arity$1 == null)))))){
return _.tick$core$ITimeLength$nanos$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.nanos[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.nanos["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeLength.nanos",_);
}
}
}
});

/**
 * Return the given quantity in microseconds.
 */
tick.core.micros = (function tick$core$micros(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$micros$arity$1 == null)))))){
return _.tick$core$ITimeLength$micros$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.micros[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.micros["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeLength.micros",_);
}
}
}
});

/**
 * Return the given quantity in milliseconds.
 */
tick.core.millis = (function tick$core$millis(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$millis$arity$1 == null)))))){
return _.tick$core$ITimeLength$millis$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.millis[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.millis["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeLength.millis",_);
}
}
}
});

/**
 * Return the given quantity in seconds.
 */
tick.core.seconds = (function tick$core$seconds(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$seconds$arity$1 == null)))))){
return _.tick$core$ITimeLength$seconds$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.seconds[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.seconds["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeLength.seconds",_);
}
}
}
});

/**
 * Return the given quantity in minutes.
 */
tick.core.minutes = (function tick$core$minutes(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$minutes$arity$1 == null)))))){
return _.tick$core$ITimeLength$minutes$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.minutes[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.minutes["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeLength.minutes",_);
}
}
}
});

/**
 * Return the given quantity in hours.
 */
tick.core.hours = (function tick$core$hours(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$hours$arity$1 == null)))))){
return _.tick$core$ITimeLength$hours$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.hours[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.hours["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeLength.hours",_);
}
}
}
});

/**
 * Return the given quantity in days.
 */
tick.core.days = (function tick$core$days(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$days$arity$1 == null)))))){
return _.tick$core$ITimeLength$days$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.days[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.days["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeLength.days",_);
}
}
}
});

/**
 * Return the given quantity in months.
 */
tick.core.months = (function tick$core$months(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$months$arity$1 == null)))))){
return _.tick$core$ITimeLength$months$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.months[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.months["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeLength.months",_);
}
}
}
});

/**
 * Return the given quantity in years.
 */
tick.core.years = (function tick$core$years(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeLength$years$arity$1 == null)))))){
return _.tick$core$ITimeLength$years$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.years[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.years["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeLength.years",_);
}
}
}
});

java.time.Duration.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Duration.prototype.tick$core$IConversion$instant$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.instant.of_epoch_milli.call(null,tick.core.millis.call(null,d__$1));
});

java.time.Duration.prototype.tick$core$IConversion$inst$arity$1 = (function (d){
var d__$1 = this;
return tick.core.inst.call(null,tick.core.instant.call(null,d__$1));
});
java.time.Duration.prototype.tick$core$ITimeLength$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Duration.prototype.tick$core$ITimeLength$nanos$arity$1 = (function (d){
var d__$1 = this;
return d__$1.toNanos();
});

java.time.Duration.prototype.tick$core$ITimeLength$micros$arity$1 = (function (d){
var d__$1 = this;
return (tick.core.nanos.call(null,d__$1) / (1000));
});

java.time.Duration.prototype.tick$core$ITimeLength$millis$arity$1 = (function (d){
var d__$1 = this;
return d__$1.toMillis();
});

java.time.Duration.prototype.tick$core$ITimeLength$seconds$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.duration.get_seconds.call(null,d__$1);
});

java.time.Duration.prototype.tick$core$ITimeLength$minutes$arity$1 = (function (d){
var d__$1 = this;
return d__$1.toMinutes();
});

java.time.Duration.prototype.tick$core$ITimeLength$hours$arity$1 = (function (d){
var d__$1 = this;
return d__$1.toHours();
});

java.time.Duration.prototype.tick$core$ITimeLength$days$arity$1 = (function (d){
var d__$1 = this;
return d__$1.toDays();
});

java.time.Period.prototype.tick$core$ITimeLength$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Period.prototype.tick$core$ITimeLength$days$arity$1 = (function (p){
var p__$1 = this;
return cljc.java_time.period.get_days.call(null,p__$1);
});

java.time.Period.prototype.tick$core$ITimeLength$months$arity$1 = (function (p){
var p__$1 = this;
return cljc.java_time.period.get_months.call(null,p__$1);
});

java.time.Period.prototype.tick$core$ITimeLength$years$arity$1 = (function (p){
var p__$1 = this;
return cljc.java_time.period.get_years.call(null,p__$1);
});
tick.core.new_duration = (function tick$core$new_duration(n,u){
var unit = tick.core.unit_map.call(null,u);
if(cljs.core.truth_(unit)){
} else {
throw (new Error(["Assert failed: ",["Not a unit: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(u)].join(''),"\n","unit"].join('')));
}

return cljc.java_time.duration.of.call(null,n,unit);
});
tick.core.new_period = (function tick$core$new_period(n,u){
var G__16203 = u;
var G__16203__$1 = (((G__16203 instanceof cljs.core.Keyword))?G__16203.fqn:null);
switch (G__16203__$1) {
case "days":
return cljc.java_time.period.of_days.call(null,n);

break;
case "weeks":
return cljc.java_time.period.of_weeks.call(null,n);

break;
case "months":
return cljc.java_time.period.of_months.call(null,n);

break;
case "years":
return cljc.java_time.period.of_years.call(null,n);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16203__$1)].join('')));

}
});
java.time.Duration.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Duration.prototype.tick$core$IExtraction$zone_offset$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.zone_offset.of_total_seconds.call(null,tick.core.new_duration.call(null,(1),new cljs.core.Keyword(null,"seconds","seconds",-445266194)));
});
tick.core.current_clock = (function tick$core$current_clock(){
var or__4131__auto__ = tick.core._STAR_clock_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljc.java_time.clock.system_default_zone.call(null);
}
});

/**
 * @interface
 */
tick.core.IClock = function(){};

/**
 * Make a clock
 */
tick.core.clock = (function tick$core$clock(_){
if((((!((_ == null)))) && ((!((_.tick$core$IClock$clock$arity$1 == null)))))){
return _.tick$core$IClock$clock$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.clock[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.clock["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IClock.clock",_);
}
}
}
});

java.time.Instant.prototype.tick$core$IClock$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$IClock$clock$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.clock.fixed.call(null,i__$1,tick.core.current_zone.call(null));
});

java.time.ZonedDateTime.prototype.tick$core$IClock$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.tick$core$IClock$clock$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.clock.fixed.call(null,zdt__$1.toInstant(),cljc.java_time.zoned_date_time.get_zone.call(null,zdt__$1));
});

goog.object.set(tick.core.IClock,"object",true);

goog.object.set(tick.core.clock,"object",(function (o){
return tick.core.clock.call(null,tick.core.zoned_date_time.call(null,o));
}));

java.time.Clock.prototype.tick$core$IClock$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Clock.prototype.tick$core$IClock$clock$arity$1 = (function (clk){
var clk__$1 = this;
return clk__$1;
});

java.time.ZoneId.prototype.tick$core$IClock$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZoneId.prototype.tick$core$IClock$clock$arity$1 = (function (z){
var z__$1 = this;
return cljc.java_time.clock.system.call(null,z__$1);
});

goog.object.set(tick.core.IClock,"string",true);

goog.object.set(tick.core.clock,"string",(function (s){
return tick.core.clock.call(null,tick.core.parse.call(null,s));
}));
tick.core.advance = (function tick$core$advance(var_args){
var G__16206 = arguments.length;
switch (G__16206) {
case 1:
return tick.core.advance.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.advance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.advance.cljs$core$IFn$_invoke$arity$1 = (function (clk){
return tick.core.advance.call(null,clk,tick.core.new_duration.call(null,(1),new cljs.core.Keyword(null,"seconds","seconds",-445266194)));
});

tick.core.advance.cljs$core$IFn$_invoke$arity$2 = (function (clk,dur){
return cljc.java_time.clock.tick.call(null,clk,dur);
});

tick.core.advance.cljs$lang$maxFixedArity = 2;

java.time.Clock.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Clock.prototype.tick$core$IConversion$instant$arity$1 = (function (clk){
var clk__$1 = this;
return clk__$1.instant();
});
java.time.Clock.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Clock.prototype.tick$core$IExtraction$zone$arity$1 = (function (clk){
var clk__$1 = this;
return cljc.java_time.clock.get_zone.call(null,clk__$1);
});
java.time.Clock.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Clock.prototype.tick$core$ITimeReify$in$arity$2 = (function (clk,zone){
var clk__$1 = this;
return clk__$1.withZone(zone);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {tick.core.IClock}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tick.core.AtomicClock = (function (_STAR_clock,__meta,__extmap,__hash){
this._STAR_clock = _STAR_clock;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
tick.core.AtomicClock.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

tick.core.AtomicClock.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k16209,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__16213 = k16209;
var G__16213__$1 = (((G__16213 instanceof cljs.core.Keyword))?G__16213.fqn:null);
switch (G__16213__$1) {
case "*clock":
return self__._STAR_clock;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16209,else__4388__auto__);

}
});

tick.core.AtomicClock.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__16214){
var vec__16215 = p__16214;
var k__4408__auto__ = cljs.core.nth.call(null,vec__16215,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__16215,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

tick.core.AtomicClock.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#tick.core.AtomicClock{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*clock","*clock",-1520020371),self__._STAR_clock],null))], null),self__.__extmap));
});

tick.core.AtomicClock.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16208){
var self__ = this;
var G__16208__$1 = this;
return (new cljs.core.RecordIter((0),G__16208__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*clock","*clock",-1520020371)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

tick.core.AtomicClock.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

tick.core.AtomicClock.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new tick.core.AtomicClock(self__._STAR_clock,self__.__meta,self__.__extmap,self__.__hash));
});

tick.core.AtomicClock.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

tick.core.AtomicClock.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1122898333 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

tick.core.AtomicClock.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16210,other16211){
var self__ = this;
var this16210__$1 = this;
return (((!((other16211 == null)))) && ((this16210__$1.constructor === other16211.constructor)) && (cljs.core._EQ_.call(null,this16210__$1._STAR_clock,other16211._STAR_clock)) && (cljs.core._EQ_.call(null,this16210__$1.__extmap,other16211.__extmap)));
});

tick.core.AtomicClock.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*clock","*clock",-1520020371),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new tick.core.AtomicClock(self__._STAR_clock,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

tick.core.AtomicClock.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__16208){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__16218 = cljs.core.keyword_identical_QMARK_;
var expr__16219 = k__4393__auto__;
if(cljs.core.truth_(pred__16218.call(null,new cljs.core.Keyword(null,"*clock","*clock",-1520020371),expr__16219))){
return (new tick.core.AtomicClock(G__16208,self__.__meta,self__.__extmap,null));
} else {
return (new tick.core.AtomicClock(self__._STAR_clock,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__16208),null));
}
});

tick.core.AtomicClock.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*clock","*clock",-1520020371),self__._STAR_clock,null))], null),self__.__extmap));
});

tick.core.AtomicClock.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__16208){
var self__ = this;
var this__4384__auto____$1 = this;
return (new tick.core.AtomicClock(self__._STAR_clock,G__16208,self__.__extmap,self__.__hash));
});

tick.core.AtomicClock.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

tick.core.AtomicClock.prototype.tick$core$IClock$ = cljs.core.PROTOCOL_SENTINEL;

tick.core.AtomicClock.prototype.tick$core$IClock$clock$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__._STAR_clock);
});

tick.core.AtomicClock.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return tick.core.instant.call(null,cljs.core.deref.call(null,self__._STAR_clock));
});

tick.core.AtomicClock.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*clock","*clock",120511156,null)], null);
});

tick.core.AtomicClock.cljs$lang$type = true;

tick.core.AtomicClock.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"tick.core/AtomicClock",null,(1),null));
});

tick.core.AtomicClock.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"tick.core/AtomicClock");
});

/**
 * Positional factory function for tick.core/AtomicClock.
 */
tick.core.__GT_AtomicClock = (function tick$core$__GT_AtomicClock(_STAR_clock){
return (new tick.core.AtomicClock(_STAR_clock,null,null,null));
});

/**
 * Factory function for tick.core/AtomicClock, taking a map of keywords to field values.
 */
tick.core.map__GT_AtomicClock = (function tick$core$map__GT_AtomicClock(G__16212){
var extmap__4424__auto__ = (function (){var G__16221 = cljs.core.dissoc.call(null,G__16212,new cljs.core.Keyword(null,"*clock","*clock",-1520020371));
if(cljs.core.record_QMARK_.call(null,G__16212)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__16221);
} else {
return G__16221;
}
})();
return (new tick.core.AtomicClock(new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(G__16212),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

tick.core.atom = (function tick$core$atom(var_args){
var G__16224 = arguments.length;
switch (G__16224) {
case 1:
return tick.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return tick.core.atom.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (clk){
return tick.core.__GT_AtomicClock.call(null,cljs.core.atom.call(null,clk));
});

tick.core.atom.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.atom.call(null,tick.core.current_clock.call(null));
});

tick.core.atom.cljs$lang$maxFixedArity = 1;

tick.core.swap_BANG_ = (function tick$core$swap_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16229 = arguments.length;
var i__4731__auto___16230 = (0);
while(true){
if((i__4731__auto___16230 < len__4730__auto___16229)){
args__4736__auto__.push((arguments[i__4731__auto___16230]));

var G__16231 = (i__4731__auto___16230 + (1));
i__4731__auto___16230 = G__16231;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return tick.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

tick.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (at,f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(at),f,args);
});

tick.core.swap_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
tick.core.swap_BANG_.cljs$lang$applyTo = (function (seq16226){
var G__16227 = cljs.core.first.call(null,seq16226);
var seq16226__$1 = cljs.core.next.call(null,seq16226);
var G__16228 = cljs.core.first.call(null,seq16226__$1);
var seq16226__$2 = cljs.core.next.call(null,seq16226__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16227,G__16228,seq16226__$2);
});

tick.core.swap_vals_BANG_ = (function tick$core$swap_vals_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16235 = arguments.length;
var i__4731__auto___16236 = (0);
while(true){
if((i__4731__auto___16236 < len__4730__auto___16235)){
args__4736__auto__.push((arguments[i__4731__auto___16236]));

var G__16237 = (i__4731__auto___16236 + (1));
i__4731__auto___16236 = G__16237;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return tick.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

tick.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (at,f,args){
return cljs.core.apply.call(null,cljs.core.swap_vals_BANG_,new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(at),f,args);
});

tick.core.swap_vals_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
tick.core.swap_vals_BANG_.cljs$lang$applyTo = (function (seq16232){
var G__16233 = cljs.core.first.call(null,seq16232);
var seq16232__$1 = cljs.core.next.call(null,seq16232);
var G__16234 = cljs.core.first.call(null,seq16232__$1);
var seq16232__$2 = cljs.core.next.call(null,seq16232__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16233,G__16234,seq16232__$2);
});

tick.core.compare_and_set_BANG_ = (function tick$core$compare_and_set_BANG_(at,oldval,newval){
return cljs.core.apply.call(null,cljs.core.compare_and_set_BANG_,new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(at),oldval,newval);
});
tick.core.reset_BANG_ = (function tick$core$reset_BANG_(at,newval){
return cljs.core.apply.call(null,cljs.core.reset_BANG_,new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(at),newval);
});
tick.core.reset_vals_BANG_ = (function tick$core$reset_vals_BANG_(at,newval){
return cljs.core.apply.call(null,cljs.core.reset_vals_BANG_,new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(at),newval);
});

/**
 * @interface
 */
tick.core.ITimeArithmetic = function(){};

/**
 * Add to time
 */
tick.core._PLUS_ = (function tick$core$_PLUS_(t,d){
if((((!((t == null)))) && ((!((t.tick$core$ITimeArithmetic$_PLUS_$arity$2 == null)))))){
return t.tick$core$ITimeArithmetic$_PLUS_$arity$2(t,d);
} else {
var x__4433__auto__ = (((t == null))?null:t);
var m__4434__auto__ = (tick.core._PLUS_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,t,d);
} else {
var m__4431__auto__ = (tick.core._PLUS_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,t,d);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeArithmetic.+",t);
}
}
}
});

/**
 * Subtract from time, or negate
 */
tick.core._ = (function tick$core$_(t,d){
if((((!((t == null)))) && ((!((t.tick$core$ITimeArithmetic$_$arity$2 == null)))))){
return t.tick$core$ITimeArithmetic$_$arity$2(t,d);
} else {
var x__4433__auto__ = (((t == null))?null:t);
var m__4434__auto__ = (tick.core._[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,t,d);
} else {
var m__4431__auto__ = (tick.core._["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,t,d);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeArithmetic.-",t);
}
}
}
});

tick.core.minus_ = (function tick$core$minus_(var_args){
var G__16239 = arguments.length;
switch (G__16239) {
case 1:
return tick.core.minus_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.minus_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.minus_.cljs$core$IFn$_invoke$arity$1 = (function (d){
return d.negated();
});

tick.core.minus_.cljs$core$IFn$_invoke$arity$2 = (function (t,d){
return t.minus(d);
});

tick.core.minus_.cljs$lang$maxFixedArity = 2;

goog.object.set(tick.core.ITimeArithmetic,"object",true);

goog.object.set(tick.core._PLUS_,"object",(function (t,d){
return t.plus(d);
}));

goog.object.set(tick.core._,"object",(function (t,d){
return t.minus(d);
}));
/**
 * Return the duration as a negative duration
 */
tick.core.negated = (function tick$core$negated(d){
return d.negated();
});

/**
 * @interface
 */
tick.core.ITimeShift = function(){};

/**
 * Increment time
 */
tick.core.forward_number = (function tick$core$forward_number(_,n){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeShift$forward_number$arity$2 == null)))))){
return _.tick$core$ITimeShift$forward_number$arity$2(_,n);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.forward_number[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,n);
} else {
var m__4431__auto__ = (tick.core.forward_number["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,n);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeShift.forward-number",_);
}
}
}
});

/**
 * Increment time
 */
tick.core.forward_duration = (function tick$core$forward_duration(_,d){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeShift$forward_duration$arity$2 == null)))))){
return _.tick$core$ITimeShift$forward_duration$arity$2(_,d);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.forward_duration[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,d);
} else {
var m__4431__auto__ = (tick.core.forward_duration["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,d);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeShift.forward-duration",_);
}
}
}
});

/**
 * Decrement time
 */
tick.core.backward_number = (function tick$core$backward_number(_,n){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeShift$backward_number$arity$2 == null)))))){
return _.tick$core$ITimeShift$backward_number$arity$2(_,n);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.backward_number[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,n);
} else {
var m__4431__auto__ = (tick.core.backward_number["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,n);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeShift.backward-number",_);
}
}
}
});

/**
 * Decrement time
 */
tick.core.backward_duration = (function tick$core$backward_duration(_,d){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeShift$backward_duration$arity$2 == null)))))){
return _.tick$core$ITimeShift$backward_duration$arity$2(_,d);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.backward_duration[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,d);
} else {
var m__4431__auto__ = (tick.core.backward_duration["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,d);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeShift.backward-duration",_);
}
}
}
});

java.time.YearMonth.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL;

java.time.YearMonth.prototype.tick$core$ITimeShift$forward_number$arity$2 = (function (t,n){
var t__$1 = this;
return t__$1.plusMonths(n);
});

java.time.YearMonth.prototype.tick$core$ITimeShift$backward_number$arity$2 = (function (t,n){
var t__$1 = this;
return t__$1.minusMonths(n);
});

java.time.YearMonth.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.plus(d);
});

java.time.YearMonth.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.minus(d);
});

java.time.Year.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.tick$core$ITimeShift$forward_number$arity$2 = (function (t,n){
var t__$1 = this;
return t__$1.plusYears(n);
});

java.time.Year.prototype.tick$core$ITimeShift$backward_number$arity$2 = (function (t,n){
var t__$1 = this;
return t__$1.minusYears(n);
});

java.time.ZonedDateTime.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.plus(d);
});

java.time.ZonedDateTime.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.minus(d);
});

java.time.Instant.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.plus(d);
});

java.time.Instant.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.minus(d);
});

Date.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return tick.core.instant.call(null,t__$1).plus(d);
});

Date.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return tick.core.instant.call(null,t__$1).minus(d);
});

java.time.LocalDate.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$core$ITimeShift$forward_number$arity$2 = (function (t,n){
var t__$1 = this;
return t__$1.plusDays(n);
});

java.time.LocalDate.prototype.tick$core$ITimeShift$backward_number$arity$2 = (function (t,n){
var t__$1 = this;
return t__$1.minusDays(n);
});

java.time.LocalDate.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.plus(d);
});

java.time.LocalDate.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.minus(d);
});

java.time.LocalTime.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalTime.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.plus(d);
});

java.time.LocalTime.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.minus(d);
});

java.time.OffsetDateTime.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL;

java.time.OffsetDateTime.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.plus(d);
});

java.time.OffsetDateTime.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.minus(d);
});

java.time.LocalDateTime.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.plus(d);
});

java.time.LocalDateTime.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return t__$1.minus(d);
});

java.time.Clock.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Clock.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (clk,d){
var clk__$1 = this;
return cljc.java_time.clock.offset.call(null,clk__$1,d);
});

java.time.Clock.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (clk,d){
var clk__$1 = this;
return cljc.java_time.clock.offset.call(null,clk__$1,tick.core.negated.call(null,d));
});
tick.core._GT__GT_ = (function tick$core$_GT__GT_(t,n_or_d){
if(typeof n_or_d === 'number'){
return tick.core.forward_number.call(null,t,n_or_d);
} else {
return tick.core.forward_duration.call(null,t,n_or_d);
}
});
tick.core._LT__LT_ = (function tick$core$_LT__LT_(t,n_or_d){
if(typeof n_or_d === 'number'){
return tick.core.backward_number.call(null,t,n_or_d);
} else {
return tick.core.backward_duration.call(null,t,n_or_d);
}
});

/**
 * @interface
 */
tick.core.ITimeRangeable = function(){};

/**
 * Returns a lazy seq of times from start (inclusive) to end (exclusive, nil means forever), by step, where start defaults to 0, step to 1, and end to infinity.
 */
tick.core.range = (function tick$core$range(var_args){
var G__16242 = arguments.length;
switch (G__16242) {
case 1:
return tick.core.range.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.range.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.core.range.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.core.range.cljs$core$IFn$_invoke$arity$1 = (function (from){
if((((!((from == null)))) && ((!((from.tick$core$ITimeRangeable$range$arity$1 == null)))))){
return from.tick$core$ITimeRangeable$range$arity$1(from);
} else {
var x__4433__auto__ = (((from == null))?null:from);
var m__4434__auto__ = (tick.core.range[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,from);
} else {
var m__4431__auto__ = (tick.core.range["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,from);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeRangeable.range",from);
}
}
}
});

tick.core.range.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
if((((!((from == null)))) && ((!((from.tick$core$ITimeRangeable$range$arity$2 == null)))))){
return from.tick$core$ITimeRangeable$range$arity$2(from,to);
} else {
var x__4433__auto__ = (((from == null))?null:from);
var m__4434__auto__ = (tick.core.range[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,from,to);
} else {
var m__4431__auto__ = (tick.core.range["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,from,to);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeRangeable.range",from);
}
}
}
});

tick.core.range.cljs$core$IFn$_invoke$arity$3 = (function (from,to,step){
if((((!((from == null)))) && ((!((from.tick$core$ITimeRangeable$range$arity$3 == null)))))){
return from.tick$core$ITimeRangeable$range$arity$3(from,to,step);
} else {
var x__4433__auto__ = (((from == null))?null:from);
var m__4434__auto__ = (tick.core.range[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,from,to,step);
} else {
var m__4431__auto__ = (tick.core.range["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,from,to,step);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeRangeable.range",from);
}
}
}
});

tick.core.range.cljs$lang$maxFixedArity = 3;


tick.core.greater = (function tick$core$greater(x,y){
if((cljs.core.compare.call(null,x,y) < (0))){
return y;
} else {
return x;
}
});
tick.core.max = (function tick$core$max(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16248 = arguments.length;
var i__4731__auto___16249 = (0);
while(true){
if((i__4731__auto___16249 < len__4730__auto___16248)){
args__4736__auto__.push((arguments[i__4731__auto___16249]));

var G__16250 = (i__4731__auto___16249 + (1));
i__4731__auto___16249 = G__16250;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tick.core.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tick.core.max.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.call(null,(function (p1__16244_SHARP_,p2__16245_SHARP_){
return tick.core.greater.call(null,p1__16244_SHARP_,p2__16245_SHARP_);
}),arg,args);
});

tick.core.max.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tick.core.max.cljs$lang$applyTo = (function (seq16246){
var G__16247 = cljs.core.first.call(null,seq16246);
var seq16246__$1 = cljs.core.next.call(null,seq16246);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16247,seq16246__$1);
});

tick.core.lesser = (function tick$core$lesser(x,y){
if((cljs.core.compare.call(null,x,y) < (0))){
return x;
} else {
return y;
}
});
tick.core.min = (function tick$core$min(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16255 = arguments.length;
var i__4731__auto___16256 = (0);
while(true){
if((i__4731__auto___16256 < len__4730__auto___16255)){
args__4736__auto__.push((arguments[i__4731__auto___16256]));

var G__16257 = (i__4731__auto___16256 + (1));
i__4731__auto___16256 = G__16257;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tick.core.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tick.core.min.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.call(null,(function (p1__16251_SHARP_,p2__16252_SHARP_){
return tick.core.lesser.call(null,p1__16251_SHARP_,p2__16252_SHARP_);
}),arg,args);
});

tick.core.min.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tick.core.min.cljs$lang$applyTo = (function (seq16253){
var G__16254 = cljs.core.first.call(null,seq16253);
var seq16253__$1 = cljs.core.next.call(null,seq16253);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16254,seq16253__$1);
});

java.time.Instant.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16258_SHARP_){
return p1__16258_SHARP_.plusSeconds((1));
});})(from__$1))
,from__$1);
});

java.time.Instant.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__16263 = cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16259_SHARP_){
return p1__16259_SHARP_.plusSeconds((1));
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.call(null,((function (G__16263,from__$1){
return (function (p1__16260_SHARP_){
return tick.core._LT_.call(null,p1__16260_SHARP_,to);
});})(G__16263,from__$1))
,G__16263);
} else {
return G__16263;
}
});

java.time.Instant.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__16264 = cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16261_SHARP_){
return p1__16261_SHARP_.plus(step);
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.call(null,((function (G__16264,from__$1){
return (function (p1__16262_SHARP_){
return tick.core._LT_.call(null,p1__16262_SHARP_,to);
});})(G__16264,from__$1))
,G__16264);
} else {
return G__16264;
}
});
java.time.ZonedDateTime.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16265_SHARP_){
return p1__16265_SHARP_.plusSeconds((1));
});})(from__$1))
,from__$1);
});

java.time.ZonedDateTime.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__16270 = cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16266_SHARP_){
return p1__16266_SHARP_.plusSeconds((1));
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.call(null,((function (G__16270,from__$1){
return (function (p1__16267_SHARP_){
return tick.core._LT_.call(null,p1__16267_SHARP_,to);
});})(G__16270,from__$1))
,G__16270);
} else {
return G__16270;
}
});

java.time.ZonedDateTime.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__16271 = cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16268_SHARP_){
return p1__16268_SHARP_.plus(step);
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.call(null,((function (G__16271,from__$1){
return (function (p1__16269_SHARP_){
return tick.core._LT_.call(null,p1__16269_SHARP_,to);
});})(G__16271,from__$1))
,G__16271);
} else {
return G__16271;
}
});
java.time.LocalDate.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16272_SHARP_){
return p1__16272_SHARP_.plusDays((1));
});})(from__$1))
,from__$1);
});

java.time.LocalDate.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__16277 = cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16273_SHARP_){
return p1__16273_SHARP_.plusDays((1));
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.call(null,((function (G__16277,from__$1){
return (function (p1__16274_SHARP_){
return tick.core._LT_.call(null,p1__16274_SHARP_,to);
});})(G__16277,from__$1))
,G__16277);
} else {
return G__16277;
}
});

java.time.LocalDate.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__16278 = cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16275_SHARP_){
return p1__16275_SHARP_.plusDays(step);
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.call(null,((function (G__16278,from__$1){
return (function (p1__16276_SHARP_){
return tick.core._LT_.call(null,p1__16276_SHARP_,to);
});})(G__16278,from__$1))
,G__16278);
} else {
return G__16278;
}
});
tick.core.inc = (function tick$core$inc(t){
return tick.core.forward_number.call(null,t,(1));
});
tick.core.dec = (function tick$core$dec(t){
return tick.core.backward_number.call(null,t,(1));
});
tick.core.tomorrow = (function tick$core$tomorrow(){
return tick.core.forward_number.call(null,tick.core.today.call(null),(1));
});
tick.core.yesterday = (function tick$core$yesterday(){
return tick.core.backward_number.call(null,tick.core.today.call(null),(1));
});
java.time.LocalDateTime.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16279_SHARP_){
return p1__16279_SHARP_.plusSeconds((1));
});})(from__$1))
,from__$1);
});

java.time.LocalDateTime.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__16284 = cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16280_SHARP_){
return p1__16280_SHARP_.plusSeconds((1));
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.call(null,((function (G__16284,from__$1){
return (function (p1__16281_SHARP_){
return tick.core._LT_.call(null,p1__16281_SHARP_,to);
});})(G__16284,from__$1))
,G__16284);
} else {
return G__16284;
}
});

java.time.LocalDateTime.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__16285 = cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16282_SHARP_){
return p1__16282_SHARP_.plus(step);
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.call(null,((function (G__16285,from__$1){
return (function (p1__16283_SHARP_){
return tick.core._LT_.call(null,p1__16283_SHARP_,to);
});})(G__16285,from__$1))
,G__16285);
} else {
return G__16285;
}
});
java.time.YearMonth.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.YearMonth.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16286_SHARP_){
return p1__16286_SHARP_.plusMonths((1));
});})(from__$1))
,from__$1);
});

java.time.YearMonth.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__16291 = cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16287_SHARP_){
return p1__16287_SHARP_.plusMonths((1));
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.call(null,((function (G__16291,from__$1){
return (function (p1__16288_SHARP_){
return tick.core._LT_.call(null,p1__16288_SHARP_,to);
});})(G__16291,from__$1))
,G__16291);
} else {
return G__16291;
}
});

java.time.YearMonth.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__16292 = cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16289_SHARP_){
return p1__16289_SHARP_.plus(step);
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.call(null,((function (G__16292,from__$1){
return (function (p1__16290_SHARP_){
return tick.core._LT_.call(null,p1__16290_SHARP_,to);
});})(G__16292,from__$1))
,G__16292);
} else {
return G__16292;
}
});
java.time.Year.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16293_SHARP_){
return p1__16293_SHARP_.plusYears((1));
});})(from__$1))
,from__$1);
});

java.time.Year.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__16298 = cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16294_SHARP_){
return p1__16294_SHARP_.plusYears((1));
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.call(null,((function (G__16298,from__$1){
return (function (p1__16295_SHARP_){
return tick.core._LT_.call(null,p1__16295_SHARP_,to);
});})(G__16298,from__$1))
,G__16298);
} else {
return G__16298;
}
});

java.time.Year.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__16299 = cljs.core.iterate.call(null,((function (from__$1){
return (function (p1__16296_SHARP_){
return p1__16296_SHARP_.plus(step);
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.call(null,((function (G__16299,from__$1){
return (function (p1__16297_SHARP_){
return tick.core._LT_.call(null,p1__16297_SHARP_,to);
});})(G__16299,from__$1))
,G__16299);
} else {
return G__16299;
}
});

/**
 * @interface
 */
tick.core.IDivisible = function(){};

/**
 * Divide time
 */
tick.core.divide = (function tick$core$divide(t,divisor){
if((((!((t == null)))) && ((!((t.tick$core$IDivisible$divide$arity$2 == null)))))){
return t.tick$core$IDivisible$divide$arity$2(t,divisor);
} else {
var x__4433__auto__ = (((t == null))?null:t);
var m__4434__auto__ = (tick.core.divide[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,t,divisor);
} else {
var m__4431__auto__ = (tick.core.divide["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,t,divisor);
} else {
throw cljs.core.missing_protocol.call(null,"IDivisible.divide",t);
}
}
}
});

goog.object.set(tick.core.IDivisible,"string",true);

goog.object.set(tick.core.divide,"string",(function (s,d){
return tick.core.divide.call(null,tick.core.parse.call(null,s),d);
}));

/**
 * @interface
 */
tick.core.IDivisibleDuration = function(){};

/**
 * Divide a duration
 */
tick.core.divide_duration = (function tick$core$divide_duration(divisor,duration){
if((((!((divisor == null)))) && ((!((divisor.tick$core$IDivisibleDuration$divide_duration$arity$2 == null)))))){
return divisor.tick$core$IDivisibleDuration$divide_duration$arity$2(divisor,duration);
} else {
var x__4433__auto__ = (((divisor == null))?null:divisor);
var m__4434__auto__ = (tick.core.divide_duration[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,divisor,duration);
} else {
var m__4431__auto__ = (tick.core.divide_duration["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,divisor,duration);
} else {
throw cljs.core.missing_protocol.call(null,"IDivisibleDuration.divide-duration",divisor);
}
}
}
});

goog.object.set(tick.core.IDivisibleDuration,"number",true);

goog.object.set(tick.core.divide_duration,"number",(function (n,duration){
return duration.dividedBy(n);
}));

java.time.Duration.prototype.tick$core$IDivisibleDuration$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Duration.prototype.tick$core$IDivisibleDuration$divide_duration$arity$2 = (function (divisor,duration){
var divisor__$1 = this;
return (cljc.java_time.duration.get_seconds.call(null,duration) / cljc.java_time.duration.get_seconds.call(null,divisor__$1));
});
java.time.Duration.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Duration.prototype.tick$core$IDivisible$divide$arity$2 = (function (d,x){
var d__$1 = this;
return tick.core.divide_duration.call(null,x,d__$1);
});

/**
 * @interface
 */
tick.core.ITimeSpan = function(){};

/**
 * Return the beginning of a span of time
 */
tick.core.beginning = (function tick$core$beginning(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeSpan$beginning$arity$1 == null)))))){
return _.tick$core$ITimeSpan$beginning$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.beginning[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.beginning["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeSpan.beginning",_);
}
}
}
});

/**
 * Return the end of a span of time
 */
tick.core.end = (function tick$core$end(_){
if((((!((_ == null)))) && ((!((_.tick$core$ITimeSpan$end$arity$1 == null)))))){
return _.tick$core$ITimeSpan$end$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.end[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.end["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeSpan.end",_);
}
}
}
});

tick.core.duration = (function tick$core$duration(x){
return cljc.java_time.duration.between.call(null,tick.core.beginning.call(null,x),tick.core.end.call(null,x));
});
tick.core.beginning_composite = (function tick$core$beginning_composite(m){
var map__16300 = m;
var map__16300__$1 = (((((!((map__16300 == null))))?(((((map__16300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16300):map__16300);
var beginning = cljs.core.get.call(null,map__16300__$1,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968));
var intervals = cljs.core.get.call(null,map__16300__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314));
if(cljs.core.truth_(intervals)){
return cljs.core.apply.call(null,tick.core.min,cljs.core.map.call(null,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),intervals));
} else {
return beginning;
}
});
tick.core.end_composite = (function tick$core$end_composite(m){
var map__16302 = m;
var map__16302__$1 = (((((!((map__16302 == null))))?(((((map__16302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16302):map__16302);
var end = cljs.core.get.call(null,map__16302__$1,new cljs.core.Keyword("tick","end","tick/end",-269896517));
var intervals = cljs.core.get.call(null,map__16302__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314));
if(cljs.core.truth_(intervals)){
return cljs.core.apply.call(null,tick.core.max,cljs.core.map.call(null,new cljs.core.Keyword("tick","end","tick/end",-269896517),intervals));
} else {
return end;
}
});
cljs.core.PersistentArrayMap.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (m){
var m__$1 = this;
return tick.core.beginning_composite.call(null,m__$1);
});

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeSpan$end$arity$1 = (function (m){
var m__$1 = this;
return tick.core.end_composite.call(null,m__$1);
});
cljs.core.PersistentHashMap.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (m){
var m__$1 = this;
return tick.core.beginning_composite.call(null,m__$1);
});

cljs.core.PersistentHashMap.prototype.tick$core$ITimeSpan$end$arity$1 = (function (m){
var m__$1 = this;
return tick.core.end_composite.call(null,m__$1);
});

/**
 * @interface
 */
tick.core.IBetween = function(){};

/**
 * Return the duration (or period) between two times
 */
tick.core.between = (function tick$core$between(v1,v2){
if((((!((v1 == null)))) && ((!((v1.tick$core$IBetween$between$arity$2 == null)))))){
return v1.tick$core$IBetween$between$arity$2(v1,v2);
} else {
var x__4433__auto__ = (((v1 == null))?null:v1);
var m__4434__auto__ = (tick.core.between[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,v1,v2);
} else {
var m__4431__auto__ = (tick.core.between["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,v1,v2);
} else {
throw cljs.core.missing_protocol.call(null,"IBetween.between",v1);
}
}
}
});

java.time.LocalDate.prototype.tick$core$IBetween$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$core$IBetween$between$arity$2 = (function (v1,v2){
var v1__$1 = this;
return cljc.java_time.period.between.call(null,v1__$1,tick.core.date.call(null,v2));
});

java.time.LocalDateTime.prototype.tick$core$IBetween$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$core$IBetween$between$arity$2 = (function (v1,v2){
var v1__$1 = this;
return cljc.java_time.duration.between.call(null,v1__$1,tick.core.date_time.call(null,v2));
});

java.time.Instant.prototype.tick$core$IBetween$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$IBetween$between$arity$2 = (function (v1,v2){
var v1__$1 = this;
return cljc.java_time.duration.between.call(null,v1__$1,tick.core.instant.call(null,v2));
});

goog.object.set(tick.core.IBetween,"string",true);

goog.object.set(tick.core.between,"string",(function (v1,v2){
return tick.core.between.call(null,tick.core.parse.call(null,v1),tick.core.parse.call(null,v2));
}));

Date.prototype.tick$core$IBetween$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tick$core$IBetween$between$arity$2 = (function (x,y){
var x__$1 = this;
return tick.core.between.call(null,tick.core.instant.call(null,x__$1),tick.core.instant.call(null,y));
});
/**
 * Does the span of time contain the given event? If the given event
 *   is itself a span, then t must wholly contain the beginning and end
 *   of the event.
 */
tick.core.coincident_QMARK_ = (function tick$core$coincident_QMARK_(t,event){
return ((cljs.core.not_EQ_.call(null,(1),cljs.core.compare.call(null,tick.core.beginning.call(null,t),tick.core.beginning.call(null,event)))) && (cljs.core.not_EQ_.call(null,(1),cljs.core.compare.call(null,tick.core.end.call(null,event),tick.core.end.call(null,t)))));
});
goog.object.set(tick.core.ITimeSpan,"null",true);

goog.object.set(tick.core.beginning,"null",(function (_){
return null;
}));

goog.object.set(tick.core.end,"null",(function (_){
return null;
}));

java.time.YearMonth.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL;

java.time.YearMonth.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (ym){
var ym__$1 = this;
return tick.core.beginning.call(null,ym__$1.atDay((1)));
});

java.time.YearMonth.prototype.tick$core$ITimeSpan$end$arity$1 = (function (ym){
var ym__$1 = this;
return tick.core.end.call(null,ym__$1.atEndOfMonth());
});

java.time.Year.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (year){
var year__$1 = this;
return tick.core.beginning.call(null,year__$1.atMonth((1)));
});

java.time.Year.prototype.tick$core$ITimeSpan$end$arity$1 = (function (year){
var year__$1 = this;
return tick.core.end.call(null,year__$1.atMonth((12)));
});

java.time.ZonedDateTime.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
});

java.time.ZonedDateTime.prototype.tick$core$ITimeSpan$end$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
});

java.time.Instant.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
});

java.time.Instant.prototype.tick$core$ITimeSpan$end$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
});

Date.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (i){
var i__$1 = this;
return tick.core.instant.call(null,i__$1);
});

Date.prototype.tick$core$ITimeSpan$end$arity$1 = (function (i){
var i__$1 = this;
return tick.core.instant.call(null,i__$1);
});

java.time.LocalDate.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (date){
var date__$1 = this;
return date__$1.atStartOfDay();
});

java.time.LocalDate.prototype.tick$core$ITimeSpan$end$arity$1 = (function (date){
var date__$1 = this;
return tick.core.inc.call(null,date__$1).atStartOfDay();
});

goog.object.set(tick.core.ITimeSpan,"number",true);

goog.object.set(tick.core.beginning,"number",(function (n){
return tick.core.beginning.call(null,tick.core.time.call(null,n));
}));

goog.object.set(tick.core.end,"number",(function (n){
return tick.core.end.call(null,tick.core.time.call(null,n));
}));

goog.object.set(tick.core.ITimeSpan,"string",true);

goog.object.set(tick.core.beginning,"string",(function (s){
return tick.core.beginning.call(null,tick.core.parse.call(null,s));
}));

goog.object.set(tick.core.end,"string",(function (s){
return tick.core.end.call(null,tick.core.parse.call(null,s));
}));

java.time.LocalTime.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalTime.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
});

java.time.LocalTime.prototype.tick$core$ITimeSpan$end$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
});

java.time.OffsetDateTime.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL;

java.time.OffsetDateTime.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
});

java.time.OffsetDateTime.prototype.tick$core$ITimeSpan$end$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
});

java.time.LocalDateTime.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
});

java.time.LocalDateTime.prototype.tick$core$ITimeSpan$end$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
});
java.time.LocalTime.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalTime.prototype.tick$core$ITimeReify$on$arity$2 = (function (t,date){
var t__$1 = this;
return date.atTime(t__$1);
});

java.time.OffsetTime.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL;

java.time.OffsetTime.prototype.tick$core$ITimeReify$on$arity$2 = (function (t,date){
var t__$1 = this;
return date.atTime(t__$1);
});

java.time.LocalDate.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$core$ITimeReify$at$arity$2 = (function (date,t){
var date__$1 = this;
return date__$1.atTime(tick.core.time.call(null,t));
});

java.time.LocalDateTime.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$core$ITimeReify$in$arity$2 = (function (ldt,z){
var ldt__$1 = this;
return ldt__$1.atZone(z);
});

java.time.LocalDateTime.prototype.tick$core$ITimeReify$offset_by$arity$2 = (function (ldt,offset){
var ldt__$1 = this;
return ldt__$1.atZone(tick.core.zone_offset.call(null,offset));
});

java.time.Instant.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$ITimeReify$in$arity$2 = (function (t,z){
var t__$1 = this;
return cljc.java_time.zoned_date_time.of_instant.call(null,t__$1,z);
});

java.time.Instant.prototype.tick$core$ITimeReify$offset_by$arity$2 = (function (t,offset){
var t__$1 = this;
return cljc.java_time.zoned_date_time.of_instant.call(null,t__$1,tick.core.zone_offset.call(null,offset));
});

java.time.ZonedDateTime.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.tick$core$ITimeReify$in$arity$2 = (function (t,z){
var t__$1 = this;
return t__$1.withZoneSameInstant(tick.core.zone.call(null,z));
});

Date.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tick$core$ITimeReify$in$arity$2 = (function (t,z){
var t__$1 = this;
return tick.core.in$.call(null,tick.core.instant.call(null,t__$1),tick.core.zone.call(null,z));
});

/**
 * @interface
 */
tick.core.ILocalTime = function(){};

/**
 * Is the time a java.time.LocalTime or java.time.LocalDateTime?
 */
tick.core.local_QMARK_ = (function tick$core$local_QMARK_(t){
if((((!((t == null)))) && ((!((t.tick$core$ILocalTime$local_QMARK_$arity$1 == null)))))){
return t.tick$core$ILocalTime$local_QMARK_$arity$1(t);
} else {
var x__4433__auto__ = (((t == null))?null:t);
var m__4434__auto__ = (tick.core.local_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,t);
} else {
var m__4431__auto__ = (tick.core.local_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,t);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalTime.local?",t);
}
}
}
});

Date.prototype.tick$core$ILocalTime$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tick$core$ILocalTime$local_QMARK_$arity$1 = (function (d){
var d__$1 = this;
return false;
});

java.time.Instant.prototype.tick$core$ILocalTime$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$ILocalTime$local_QMARK_$arity$1 = (function (i){
var i__$1 = this;
return false;
});

java.time.LocalDateTime.prototype.tick$core$ILocalTime$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$core$ILocalTime$local_QMARK_$arity$1 = (function (i){
var i__$1 = this;
return true;
});

java.time.LocalTime.prototype.tick$core$ILocalTime$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalTime.prototype.tick$core$ILocalTime$local_QMARK_$arity$1 = (function (i){
var i__$1 = this;
return true;
});

goog.object.set(tick.core.ILocalTime,"null",true);

goog.object.set(tick.core.local_QMARK_,"null",(function (_){
return null;
}));

/**
 * @interface
 */
tick.core.MinMax = function(){};

/**
 * Return the min
 */
tick.core.min_of_type = (function tick$core$min_of_type(_){
if((((!((_ == null)))) && ((!((_.tick$core$MinMax$min_of_type$arity$1 == null)))))){
return _.tick$core$MinMax$min_of_type$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.min_of_type[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.min_of_type["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"MinMax.min-of-type",_);
}
}
}
});

/**
 * Return the max
 */
tick.core.max_of_type = (function tick$core$max_of_type(_){
if((((!((_ == null)))) && ((!((_.tick$core$MinMax$max_of_type$arity$1 == null)))))){
return _.tick$core$MinMax$max_of_type$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.core.max_of_type[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.core.max_of_type["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"MinMax.max-of-type",_);
}
}
}
});

java.time.LocalTime.prototype.tick$core$MinMax$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalTime.prototype.tick$core$MinMax$min_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.local_time.min;
});

java.time.LocalTime.prototype.tick$core$MinMax$max_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.local_time.max;
});

java.time.LocalDateTime.prototype.tick$core$MinMax$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$core$MinMax$min_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.local_date_time.min;
});

java.time.LocalDateTime.prototype.tick$core$MinMax$max_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.local_date_time.max;
});

java.time.Instant.prototype.tick$core$MinMax$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$MinMax$min_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.instant.min;
});

java.time.Instant.prototype.tick$core$MinMax$max_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.instant.max;
});

goog.object.set(tick.core.MinMax,"null",true);

goog.object.set(tick.core.min_of_type,"null",(function (_){
return cljc.java_time.instant.min;
}));

goog.object.set(tick.core.max_of_type,"null",(function (_){
return cljc.java_time.instant.max;
}));
tick.core.ago = (function tick$core$ago(dur){
return tick.core.backward_duration.call(null,tick.core.now.call(null),dur);
});
tick.core.hence = (function tick$core$hence(dur){
return tick.core.forward_duration.call(null,tick.core.now.call(null),dur);
});
tick.core.midnight_QMARK_ = (function tick$core$midnight_QMARK_(t){
return cljc.java_time.duration.between.call(null,t,tick.core.beginning.call(null,tick.core.date.call(null,t))).isZero();
});

//# sourceMappingURL=core.js.map
