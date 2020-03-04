// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('tick.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
time_literals.read_write.print_time_literals_clj_BANG_();

time_literals.read_write.print_time_literals_cljs_BANG_();
tick.core._STAR_clock_STAR_ = null;
tick.core.now = (function tick$core$now(){
if(cljs.core.truth_(tick.core._STAR_clock_STAR_)){
return cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$1(tick.core._STAR_clock_STAR_);
} else {
return cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$0();
}
});
tick.core.today = (function tick$core$today(){
if(cljs.core.truth_(tick.core._STAR_clock_STAR_)){
return cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$1(tick.core._STAR_clock_STAR_);
} else {
return cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$0();
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(time,date) : m__4434__auto__.call(null,time,date));
} else {
var m__4431__auto__ = (tick.core.on["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(time,date) : m__4431__auto__.call(null,time,date));
} else {
throw cljs.core.missing_protocol("ITimeReify.on",time);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(date,time) : m__4434__auto__.call(null,date,time));
} else {
var m__4431__auto__ = (tick.core.at["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(date,time) : m__4431__auto__.call(null,date,time));
} else {
throw cljs.core.missing_protocol("ITimeReify.at",date);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(dt,zone) : m__4434__auto__.call(null,dt,zone));
} else {
var m__4431__auto__ = (tick.core.in$["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(dt,zone) : m__4431__auto__.call(null,dt,zone));
} else {
throw cljs.core.missing_protocol("ITimeReify.in",dt);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(dt,amount) : m__4434__auto__.call(null,dt,amount));
} else {
var m__4431__auto__ = (tick.core.offset_by["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(dt,amount) : m__4431__auto__.call(null,dt,amount));
} else {
throw cljs.core.missing_protocol("ITimeReify.offset-by",dt);
}
}
}
});

tick.core.midnight = (function tick$core$midnight(var_args){
var G__20761 = arguments.length;
switch (G__20761) {
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
return tick.core.at(date,cljc.java_time.local_time.midnight);
});

tick.core.midnight.cljs$lang$maxFixedArity = 1;

tick.core.noon = (function tick$core$noon(var_args){
var G__20764 = arguments.length;
switch (G__20764) {
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
return tick.core.at(date,cljc.java_time.local_time.noon);
});

tick.core.noon.cljs$lang$maxFixedArity = 1;

cljs.spec.alpha.def_impl(cljs.core.cst$kw$tick$core_SLASH_instant,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_,cljs.core.cst$sym$java$time_SLASH_Instant,cljs.core.cst$sym$_PERCENT_)),(function (p1__20766_SHARP_){
return (p1__20766_SHARP_ instanceof java.time.Instant);
}));
tick.core.parse_day = (function tick$core$parse_day(input){
var pred__20767 = cljs.core.re_matches;
var expr__20768 = clojure.string.lower_case(input);
if(cljs.core.truth_((function (){var G__20770 = /^(mon)(day)?$/;
var G__20771 = expr__20768;
return (pred__20767.cljs$core$IFn$_invoke$arity$2 ? pred__20767.cljs$core$IFn$_invoke$arity$2(G__20770,G__20771) : pred__20767.call(null,G__20770,G__20771));
})())){
return cljc.java_time.day_of_week.monday;
} else {
if(cljs.core.truth_((function (){var G__20772 = /^(tue)(s|sday)?$/;
var G__20773 = expr__20768;
return (pred__20767.cljs$core$IFn$_invoke$arity$2 ? pred__20767.cljs$core$IFn$_invoke$arity$2(G__20772,G__20773) : pred__20767.call(null,G__20772,G__20773));
})())){
return cljc.java_time.day_of_week.tuesday;
} else {
if(cljs.core.truth_((function (){var G__20774 = /^(wed)(s|nesday)?$/;
var G__20775 = expr__20768;
return (pred__20767.cljs$core$IFn$_invoke$arity$2 ? pred__20767.cljs$core$IFn$_invoke$arity$2(G__20774,G__20775) : pred__20767.call(null,G__20774,G__20775));
})())){
return cljc.java_time.day_of_week.wednesday;
} else {
if(cljs.core.truth_((function (){var G__20776 = /^(thur)(s|sday)?$/;
var G__20777 = expr__20768;
return (pred__20767.cljs$core$IFn$_invoke$arity$2 ? pred__20767.cljs$core$IFn$_invoke$arity$2(G__20776,G__20777) : pred__20767.call(null,G__20776,G__20777));
})())){
return cljc.java_time.day_of_week.thursday;
} else {
if(cljs.core.truth_((function (){var G__20778 = /^(fri)(day)?$/;
var G__20779 = expr__20768;
return (pred__20767.cljs$core$IFn$_invoke$arity$2 ? pred__20767.cljs$core$IFn$_invoke$arity$2(G__20778,G__20779) : pred__20767.call(null,G__20778,G__20779));
})())){
return cljc.java_time.day_of_week.friday;
} else {
if(cljs.core.truth_((function (){var G__20780 = /^(sat)(urday)?$/;
var G__20781 = expr__20768;
return (pred__20767.cljs$core$IFn$_invoke$arity$2 ? pred__20767.cljs$core$IFn$_invoke$arity$2(G__20780,G__20781) : pred__20767.call(null,G__20780,G__20781));
})())){
return cljc.java_time.day_of_week.saturday;
} else {
if(cljs.core.truth_((function (){var G__20782 = /^(sun)(day)?$/;
var G__20783 = expr__20768;
return (pred__20767.cljs$core$IFn$_invoke$arity$2 ? pred__20767.cljs$core$IFn$_invoke$arity$2(G__20782,G__20783) : pred__20767.call(null,G__20782,G__20783));
})())){
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
var pred__20784 = cljs.core.re_matches;
var expr__20785 = clojure.string.lower_case(input);
if(cljs.core.truth_((function (){var G__20787 = /^(jan)(uary)?$/;
var G__20788 = expr__20785;
return (pred__20784.cljs$core$IFn$_invoke$arity$2 ? pred__20784.cljs$core$IFn$_invoke$arity$2(G__20787,G__20788) : pred__20784.call(null,G__20787,G__20788));
})())){
return cljc.java_time.month.january;
} else {
if(cljs.core.truth_((function (){var G__20789 = /^(feb)(ruary)?$/;
var G__20790 = expr__20785;
return (pred__20784.cljs$core$IFn$_invoke$arity$2 ? pred__20784.cljs$core$IFn$_invoke$arity$2(G__20789,G__20790) : pred__20784.call(null,G__20789,G__20790));
})())){
return cljc.java_time.month.february;
} else {
if(cljs.core.truth_((function (){var G__20791 = /^(mar)(ch)?$/;
var G__20792 = expr__20785;
return (pred__20784.cljs$core$IFn$_invoke$arity$2 ? pred__20784.cljs$core$IFn$_invoke$arity$2(G__20791,G__20792) : pred__20784.call(null,G__20791,G__20792));
})())){
return cljc.java_time.month.march;
} else {
if(cljs.core.truth_((function (){var G__20793 = /^(apr)(il)?$/;
var G__20794 = expr__20785;
return (pred__20784.cljs$core$IFn$_invoke$arity$2 ? pred__20784.cljs$core$IFn$_invoke$arity$2(G__20793,G__20794) : pred__20784.call(null,G__20793,G__20794));
})())){
return cljc.java_time.month.april;
} else {
if(cljs.core.truth_((function (){var G__20795 = /^may$/;
var G__20796 = expr__20785;
return (pred__20784.cljs$core$IFn$_invoke$arity$2 ? pred__20784.cljs$core$IFn$_invoke$arity$2(G__20795,G__20796) : pred__20784.call(null,G__20795,G__20796));
})())){
return cljc.java_time.month.may;
} else {
if(cljs.core.truth_((function (){var G__20797 = /^(jun)(e)?$/;
var G__20798 = expr__20785;
return (pred__20784.cljs$core$IFn$_invoke$arity$2 ? pred__20784.cljs$core$IFn$_invoke$arity$2(G__20797,G__20798) : pred__20784.call(null,G__20797,G__20798));
})())){
return cljc.java_time.month.june;
} else {
if(cljs.core.truth_((function (){var G__20799 = /^(jul)(y)?$/;
var G__20800 = expr__20785;
return (pred__20784.cljs$core$IFn$_invoke$arity$2 ? pred__20784.cljs$core$IFn$_invoke$arity$2(G__20799,G__20800) : pred__20784.call(null,G__20799,G__20800));
})())){
return cljc.java_time.month.july;
} else {
if(cljs.core.truth_((function (){var G__20801 = /^(aug)(ust)?$/;
var G__20802 = expr__20785;
return (pred__20784.cljs$core$IFn$_invoke$arity$2 ? pred__20784.cljs$core$IFn$_invoke$arity$2(G__20801,G__20802) : pred__20784.call(null,G__20801,G__20802));
})())){
return cljc.java_time.month.august;
} else {
if(cljs.core.truth_((function (){var G__20803 = /^(sep)(tember)?$/;
var G__20804 = expr__20785;
return (pred__20784.cljs$core$IFn$_invoke$arity$2 ? pred__20784.cljs$core$IFn$_invoke$arity$2(G__20803,G__20804) : pred__20784.call(null,G__20803,G__20804));
})())){
return cljc.java_time.month.september;
} else {
if(cljs.core.truth_((function (){var G__20805 = /^(oct)(ober)?$/;
var G__20806 = expr__20785;
return (pred__20784.cljs$core$IFn$_invoke$arity$2 ? pred__20784.cljs$core$IFn$_invoke$arity$2(G__20805,G__20806) : pred__20784.call(null,G__20805,G__20806));
})())){
return cljc.java_time.month.october;
} else {
if(cljs.core.truth_((function (){var G__20807 = /^(nov)(ember)?$/;
var G__20808 = expr__20785;
return (pred__20784.cljs$core$IFn$_invoke$arity$2 ? pred__20784.cljs$core$IFn$_invoke$arity$2(G__20807,G__20808) : pred__20784.call(null,G__20807,G__20808));
})())){
return cljc.java_time.month.november;
} else {
if(cljs.core.truth_((function (){var G__20809 = /^(dec)(ember)?$/;
var G__20810 = expr__20785;
return (pred__20784.cljs$core$IFn$_invoke$arity$2 ? pred__20784.cljs$core$IFn$_invoke$arity$2(G__20809,G__20810) : pred__20784.call(null,G__20809,G__20810));
})())){
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.parse["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IParseable.parse",_);
}
}
}
});

tick.core.parse_int = (function tick$core$parse_int(x){
return Number(x);
});
goog.object.set(tick.core.IParseable,"string",true);

var G__20811_20876 = tick.core.parse;
var G__20812_20877 = "string";
var G__20813_20878 = ((function (G__20811_20876,G__20812_20877){
return (function (s){
var pred__20814 = cljs.core.re_matches;
var expr__20815 = s;
var temp__5733__auto__ = (function (){var G__20817 = /(\d{1,2})\s*(am|pm)/;
var G__20818 = expr__20815;
return (pred__20814.cljs$core$IFn$_invoke$arity$2 ? pred__20814.cljs$core$IFn$_invoke$arity$2(G__20817,G__20818) : pred__20814.call(null,G__20817,G__20818));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var p__4485__auto__ = temp__5733__auto__;
var fexpr__20824 = ((function (p__4485__auto__,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877){
return (function (p__20825){
var vec__20826 = p__20825;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20826,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20826,(1),null);
var ap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20826,(2),null);
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2((function (){var G__20829 = tick.core.parse_int(h);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("pm",ap)){
return (G__20829 + (12));
} else {
return G__20829;
}
})(),(0));
});})(p__4485__auto__,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877))
;
return fexpr__20824(p__4485__auto__);
} else {
var temp__5733__auto____$1 = (function (){var G__20830 = /(\d{1,2})/;
var G__20831 = expr__20815;
return (pred__20814.cljs$core$IFn$_invoke$arity$2 ? pred__20814.cljs$core$IFn$_invoke$arity$2(G__20830,G__20831) : pred__20814.call(null,G__20830,G__20831));
})();
if(cljs.core.truth_(temp__5733__auto____$1)){
var p__4485__auto__ = temp__5733__auto____$1;
var fexpr__20836 = ((function (p__4485__auto__,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877){
return (function (p__20837){
var vec__20838 = p__20837;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20838,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20838,(1),null);
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2(tick.core.parse_int(h),(0));
});})(p__4485__auto__,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877))
;
return fexpr__20836(p__4485__auto__);
} else {
var temp__5733__auto____$2 = (function (){var G__20841 = /\d{2}:\d{2}\S*/;
var G__20842 = expr__20815;
return (pred__20814.cljs$core$IFn$_invoke$arity$2 ? pred__20814.cljs$core$IFn$_invoke$arity$2(G__20841,G__20842) : pred__20814.call(null,G__20841,G__20842));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var p__4485__auto__ = temp__5733__auto____$2;
var fexpr__20843 = ((function (p__4485__auto__,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877){
return (function (s__$1){
return cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
});})(p__4485__auto__,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877))
;
return fexpr__20843(p__4485__auto__);
} else {
var temp__5733__auto____$3 = (function (){var G__20844 = /(\d{1,2}):(\d{2})/;
var G__20845 = expr__20815;
return (pred__20814.cljs$core$IFn$_invoke$arity$2 ? pred__20814.cljs$core$IFn$_invoke$arity$2(G__20844,G__20845) : pred__20814.call(null,G__20844,G__20845));
})();
if(cljs.core.truth_(temp__5733__auto____$3)){
var p__4485__auto__ = temp__5733__auto____$3;
var fexpr__20850 = ((function (p__4485__auto__,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877){
return (function (p__20851){
var vec__20852 = p__20851;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20852,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20852,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20852,(2),null);
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2(tick.core.parse_int(h),tick.core.parse_int(m));
});})(p__4485__auto__,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877))
;
return fexpr__20850(p__4485__auto__);
} else {
var temp__5733__auto____$4 = (function (){var G__20855 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?Z/;
var G__20856 = expr__20815;
return (pred__20814.cljs$core$IFn$_invoke$arity$2 ? pred__20814.cljs$core$IFn$_invoke$arity$2(G__20855,G__20856) : pred__20814.call(null,G__20855,G__20856));
})();
if(cljs.core.truth_(temp__5733__auto____$4)){
var p__4485__auto__ = temp__5733__auto____$4;
var fexpr__20857 = ((function (p__4485__auto__,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877){
return (function (s__$1){
return cljc.java_time.instant.parse(s__$1);
});})(p__4485__auto__,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877))
;
return fexpr__20857(p__4485__auto__);
} else {
var temp__5733__auto____$5 = (function (){var G__20858 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?[+-]\d{2}:\d{2}/;
var G__20859 = expr__20815;
return (pred__20814.cljs$core$IFn$_invoke$arity$2 ? pred__20814.cljs$core$IFn$_invoke$arity$2(G__20858,G__20859) : pred__20814.call(null,G__20858,G__20859));
})();
if(cljs.core.truth_(temp__5733__auto____$5)){
var p__4485__auto__ = temp__5733__auto____$5;
var fexpr__20860 = ((function (p__4485__auto__,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877){
return (function (s__$1){
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
});})(p__4485__auto__,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877))
;
return fexpr__20860(p__4485__auto__);
} else {
var temp__5733__auto____$6 = (function (){var G__20861 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?[+-]\d{2}:\d{2}\[\w+\/\w+\]/;
var G__20862 = expr__20815;
return (pred__20814.cljs$core$IFn$_invoke$arity$2 ? pred__20814.cljs$core$IFn$_invoke$arity$2(G__20861,G__20862) : pred__20814.call(null,G__20861,G__20862));
})();
if(cljs.core.truth_(temp__5733__auto____$6)){
var p__4485__auto__ = temp__5733__auto____$6;
var fexpr__20863 = ((function (p__4485__auto__,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877){
return (function (s__$1){
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
});})(p__4485__auto__,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877))
;
return fexpr__20863(p__4485__auto__);
} else {
var temp__5733__auto____$7 = (function (){var G__20864 = /\d{4}-\d{2}-\d{2}T\S*/;
var G__20865 = expr__20815;
return (pred__20814.cljs$core$IFn$_invoke$arity$2 ? pred__20814.cljs$core$IFn$_invoke$arity$2(G__20864,G__20865) : pred__20814.call(null,G__20864,G__20865));
})();
if(cljs.core.truth_(temp__5733__auto____$7)){
var p__4485__auto__ = temp__5733__auto____$7;
var fexpr__20866 = ((function (p__4485__auto__,temp__5733__auto____$7,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877){
return (function (s__$1){
return cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
});})(p__4485__auto__,temp__5733__auto____$7,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877))
;
return fexpr__20866(p__4485__auto__);
} else {
var temp__5733__auto____$8 = (function (){var G__20867 = /\d{4}-\d{2}-\d{2}/;
var G__20868 = expr__20815;
return (pred__20814.cljs$core$IFn$_invoke$arity$2 ? pred__20814.cljs$core$IFn$_invoke$arity$2(G__20867,G__20868) : pred__20814.call(null,G__20867,G__20868));
})();
if(cljs.core.truth_(temp__5733__auto____$8)){
var p__4485__auto__ = temp__5733__auto____$8;
var fexpr__20869 = ((function (p__4485__auto__,temp__5733__auto____$8,temp__5733__auto____$7,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877){
return (function (s__$1){
return cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
});})(p__4485__auto__,temp__5733__auto____$8,temp__5733__auto____$7,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877))
;
return fexpr__20869(p__4485__auto__);
} else {
var temp__5733__auto____$9 = (function (){var G__20870 = /\d{4}-\d{2}/;
var G__20871 = expr__20815;
return (pred__20814.cljs$core$IFn$_invoke$arity$2 ? pred__20814.cljs$core$IFn$_invoke$arity$2(G__20870,G__20871) : pred__20814.call(null,G__20870,G__20871));
})();
if(cljs.core.truth_(temp__5733__auto____$9)){
var p__4485__auto__ = temp__5733__auto____$9;
var fexpr__20872 = ((function (p__4485__auto__,temp__5733__auto____$9,temp__5733__auto____$8,temp__5733__auto____$7,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877){
return (function (s__$1){
return cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
});})(p__4485__auto__,temp__5733__auto____$9,temp__5733__auto____$8,temp__5733__auto____$7,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877))
;
return fexpr__20872(p__4485__auto__);
} else {
var temp__5733__auto____$10 = (function (){var G__20873 = /\d{4}/;
var G__20874 = expr__20815;
return (pred__20814.cljs$core$IFn$_invoke$arity$2 ? pred__20814.cljs$core$IFn$_invoke$arity$2(G__20873,G__20874) : pred__20814.call(null,G__20873,G__20874));
})();
if(cljs.core.truth_(temp__5733__auto____$10)){
var p__4485__auto__ = temp__5733__auto____$10;
var fexpr__20875 = ((function (p__4485__auto__,temp__5733__auto____$10,temp__5733__auto____$9,temp__5733__auto____$8,temp__5733__auto____$7,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877){
return (function (s__$1){
return cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
});})(p__4485__auto__,temp__5733__auto____$10,temp__5733__auto____$9,temp__5733__auto____$8,temp__5733__auto____$7,temp__5733__auto____$6,temp__5733__auto____$5,temp__5733__auto____$4,temp__5733__auto____$3,temp__5733__auto____$2,temp__5733__auto____$1,temp__5733__auto__,pred__20814,expr__20815,G__20811_20876,G__20812_20877))
;
return fexpr__20875(p__4485__auto__);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unparseable time string",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input,s], null));
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
});})(G__20811_20876,G__20812_20877))
;
goog.object.set(G__20811_20876,G__20812_20877,G__20813_20878);

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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.inst["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConversion.inst",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.instant["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConversion.instant",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.offset_date_time["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConversion.offset-date-time",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.zoned_date_time["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConversion.zoned-date-time",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.time["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.time",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.date["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.date",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.date_time["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.date-time",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.nanosecond["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.nanosecond",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.microsecond["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.microsecond",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.millisecond["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.millisecond",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.second["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.second",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.minute["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.minute",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.hour["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.hour",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.day_of_week["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.day-of-week",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.day_of_month["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.day-of-month",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.int$["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.int",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.long$["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.long",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.month["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.month",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.year["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.year",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.year_month["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.year-month",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.zone["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.zone",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.zone_offset["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.zone-offset",_);
}
}
}
});

tick.core.new_time = (function tick$core$new_time(var_args){
var G__20880 = arguments.length;
switch (G__20880) {
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
return tick.core.time(tick.core.now());
});

tick.core.new_time.cljs$core$IFn$_invoke$arity$2 = (function (hour,minute){
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2(hour,minute);
});

tick.core.new_time.cljs$core$IFn$_invoke$arity$3 = (function (hour,minute,second){
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$3(hour,minute,second);
});

tick.core.new_time.cljs$core$IFn$_invoke$arity$4 = (function (hour,minute,second,nano){
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$4(hour,minute,second,nano);
});

tick.core.new_time.cljs$lang$maxFixedArity = 4;

tick.core.new_date = (function tick$core$new_date(var_args){
var G__20883 = arguments.length;
switch (G__20883) {
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
return tick.core.today();
});

tick.core.new_date.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day_of_month){
return cljc.java_time.local_date.of(year,month,day_of_month);
});

tick.core.new_date.cljs$core$IFn$_invoke$arity$2 = (function (year,day_of_year){
return cljc.java_time.local_date.of_year_day(year,day_of_year);
});

tick.core.new_date.cljs$core$IFn$_invoke$arity$1 = (function (epoch_day){
return cljc.java_time.local_date.of_epoch_day(epoch_day);
});

tick.core.new_date.cljs$lang$maxFixedArity = 3;

/**
 * Return the current zone, which can be overridden by the *clock* dynamic var
 */
tick.core.current_zone = (function tick$core$current_zone(){
var temp__5733__auto__ = tick.core._STAR_clock_STAR_;
if(cljs.core.truth_(temp__5733__auto__)){
var clk = temp__5733__auto__;
return cljc.java_time.clock.get_zone(clk);
} else {
return cljc.java_time.zone_id.system_default();
}
});
goog.object.set(tick.core.IConversion,"function",true);

var G__20885_20912 = tick.core.inst;
var G__20886_20913 = "function";
var G__20887_20914 = ((function (G__20885_20912,G__20886_20913){
return (function (f){
return tick.core.inst((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__20885_20912,G__20886_20913))
;
goog.object.set(G__20885_20912,G__20886_20913,G__20887_20914);

var G__20888_20915 = tick.core.instant;
var G__20889_20916 = "function";
var G__20890_20917 = ((function (G__20888_20915,G__20889_20916){
return (function (f){
return tick.core.instant((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__20888_20915,G__20889_20916))
;
goog.object.set(G__20888_20915,G__20889_20916,G__20890_20917);

var G__20891_20918 = tick.core.offset_date_time;
var G__20892_20919 = "function";
var G__20893_20920 = ((function (G__20891_20918,G__20892_20919){
return (function (f){
return tick.core.offset_date_time((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__20891_20918,G__20892_20919))
;
goog.object.set(G__20891_20918,G__20892_20919,G__20893_20920);

var G__20894_20921 = tick.core.zoned_date_time;
var G__20895_20922 = "function";
var G__20896_20923 = ((function (G__20894_20921,G__20895_20922){
return (function (f){
return tick.core.zoned_date_time((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__20894_20921,G__20895_20922))
;
goog.object.set(G__20894_20921,G__20895_20922,G__20896_20923);

java.time.Instant.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$IConversion$inst$arity$1 = (function (i){
var i__$1 = this;
return (new Date(cljc.java_time.instant.to_epoch_milli(i__$1)));
});

java.time.Instant.prototype.tick$core$IConversion$instant$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
});

java.time.Instant.prototype.tick$core$IConversion$offset_date_time$arity$1 = (function (i){
var i__$1 = this;
return tick.core.zoned_date_time(i__$1);
});

java.time.Instant.prototype.tick$core$IConversion$zoned_date_time$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$2(i__$1,tick.core.current_zone());
});

goog.object.set(tick.core.IConversion,"string",true);

var G__20897_20924 = tick.core.inst;
var G__20898_20925 = "string";
var G__20899_20926 = ((function (G__20897_20924,G__20898_20925){
return (function (s){
return tick.core.inst(tick.core.instant(s));
});})(G__20897_20924,G__20898_20925))
;
goog.object.set(G__20897_20924,G__20898_20925,G__20899_20926);

var G__20900_20927 = tick.core.instant;
var G__20901_20928 = "string";
var G__20902_20929 = ((function (G__20900_20927,G__20901_20928){
return (function (s){
return tick.core.instant(tick.core.parse(s));
});})(G__20900_20927,G__20901_20928))
;
goog.object.set(G__20900_20927,G__20901_20928,G__20902_20929);

var G__20903_20930 = tick.core.offset_date_time;
var G__20904_20931 = "string";
var G__20905_20932 = ((function (G__20903_20930,G__20904_20931){
return (function (s){
return tick.core.zoned_date_time(s);
});})(G__20903_20930,G__20904_20931))
;
goog.object.set(G__20903_20930,G__20904_20931,G__20905_20932);

var G__20906_20933 = tick.core.zoned_date_time;
var G__20907_20934 = "string";
var G__20908_20935 = ((function (G__20906_20933,G__20907_20934){
return (function (s){
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$1(s);
});})(G__20906_20933,G__20907_20934))
;
goog.object.set(G__20906_20933,G__20907_20934,G__20908_20935);

goog.object.set(tick.core.IConversion,"number",true);

var G__20909_20936 = tick.core.instant;
var G__20910_20937 = "number";
var G__20911_20938 = ((function (G__20909_20936,G__20910_20937){
return (function (n){
return cljc.java_time.instant.of_epoch_milli(n);
});})(G__20909_20936,G__20910_20937))
;
goog.object.set(G__20909_20936,G__20910_20937,G__20911_20938);

java.time.LocalDateTime.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$core$IConversion$inst$arity$1 = (function (ldt){
var ldt__$1 = this;
return tick.core.inst(tick.core.zoned_date_time(ldt__$1));
});

java.time.LocalDateTime.prototype.tick$core$IConversion$instant$arity$1 = (function (ldt){
var ldt__$1 = this;
return tick.core.instant(tick.core.zoned_date_time(ldt__$1));
});

java.time.LocalDateTime.prototype.tick$core$IConversion$offset_date_time$arity$1 = (function (ldt){
var ldt__$1 = this;
return tick.core.zoned_date_time(ldt__$1);
});

java.time.LocalDateTime.prototype.tick$core$IConversion$zoned_date_time$arity$1 = (function (ldt){
var ldt__$1 = this;
return cljc.java_time.local_date_time.at_zone(ldt__$1,tick.core.current_zone());
});

Date.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tick$core$IConversion$inst$arity$1 = (function (d){
var d__$1 = this;
return d__$1;
});

Date.prototype.tick$core$IConversion$instant$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.instant.of_epoch_milli(d__$1.getTime());
});

Date.prototype.tick$core$IConversion$zoned_date_time$arity$1 = (function (d){
var d__$1 = this;
return tick.core.zoned_date_time(tick.core.instant(d__$1));
});

Date.prototype.tick$core$IConversion$offset_date_time$arity$1 = (function (d){
var d__$1 = this;
return tick.core.offset_date_time(tick.core.instant(d__$1));
});

java.time.OffsetDateTime.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL;

java.time.OffsetDateTime.prototype.tick$core$IConversion$inst$arity$1 = (function (odt){
var odt__$1 = this;
return tick.core.inst(tick.core.instant(odt__$1));
});

java.time.OffsetDateTime.prototype.tick$core$IConversion$instant$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_instant(odt__$1);
});

java.time.OffsetDateTime.prototype.tick$core$IConversion$offset_date_time$arity$1 = (function (odt){
var odt__$1 = this;
return odt__$1;
});

java.time.OffsetDateTime.prototype.tick$core$IConversion$zoned_date_time$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_zoned_date_time(odt__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.tick$core$IConversion$inst$arity$1 = (function (zdt){
var zdt__$1 = this;
return tick.core.inst(tick.core.instant(zdt__$1));
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
return cljc.java_time.year_month.get_month(ym__$1);
});

java.time.YearMonth.prototype.tick$core$IExtraction$year$arity$1 = (function (ym){
var ym__$1 = this;
return tick.core.year(cljc.java_time.year_month.get_year(ym__$1));
});

java.time.Year.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.tick$core$IExtraction$year$arity$1 = (function (y){
var y__$1 = this;
return y__$1;
});

java.time.Year.prototype.tick$core$IExtraction$int$arity$1 = (function (y){
var y__$1 = this;
return cljc.java_time.year.get_value(y__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.tick$core$IExtraction$time$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.to_local_time(zdt__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$date$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.to_local_date(zdt__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$date_time$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.to_local_date_time(zdt__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$nanosecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get(t__$1,cljc.java_time.temporal.chrono_field.nano_of_second);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$microsecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get(t__$1,cljc.java_time.temporal.chrono_field.micro_of_second);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$millisecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get(t__$1,cljc.java_time.temporal.chrono_field.milli_of_second);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_second(t__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_minute(t__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_hour(t__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$day_of_week$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_day_of_week(t__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$day_of_month$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_day_of_month(t__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$month$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.get_month(zdt__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$year$arity$1 = (function (zdt){
var zdt__$1 = this;
return tick.core.year(cljc.java_time.zoned_date_time.get_year(zdt__$1));
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$zone$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.get_zone(zdt__$1);
});

java.time.ZonedDateTime.prototype.tick$core$IExtraction$zone_offset$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.get_offset(zdt__$1);
});

java.time.Instant.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$IExtraction$time$arity$1 = (function (i){
var i__$1 = this;
return tick.core.time(tick.core.zoned_date_time(i__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$date$arity$1 = (function (i){
var i__$1 = this;
return tick.core.date(tick.core.zoned_date_time(i__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$date_time$arity$1 = (function (i){
var i__$1 = this;
return tick.core.date_time(tick.core.zoned_date_time(i__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$nanosecond$arity$1 = (function (t){
var t__$1 = this;
return tick.core.nanosecond(tick.core.zoned_date_time(t__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$microsecond$arity$1 = (function (t){
var t__$1 = this;
return tick.core.microsecond(tick.core.zoned_date_time(t__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$millisecond$arity$1 = (function (t){
var t__$1 = this;
return tick.core.millisecond(tick.core.zoned_date_time(t__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return tick.core.second(tick.core.zoned_date_time(t__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return tick.core.minute(tick.core.zoned_date_time(t__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return tick.core.hour(tick.core.zoned_date_time(t__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$day_of_week$arity$1 = (function (i){
var i__$1 = this;
return tick.core.day_of_week(tick.core.date(i__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$day_of_month$arity$1 = (function (i){
var i__$1 = this;
return tick.core.day_of_month(tick.core.date(i__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$int$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.instant.get_nano(i__$1);
});

java.time.Instant.prototype.tick$core$IExtraction$long$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.instant.get_epoch_second(i__$1);
});

java.time.Instant.prototype.tick$core$IExtraction$month$arity$1 = (function (i){
var i__$1 = this;
return tick.core.month(tick.core.date(i__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$year$arity$1 = (function (i){
var i__$1 = this;
return tick.core.year(tick.core.date(i__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$year_month$arity$1 = (function (i){
var i__$1 = this;
return tick.core.year_month(tick.core.date(i__$1));
});

java.time.Instant.prototype.tick$core$IExtraction$zone$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$1("UTC");
});

java.time.Instant.prototype.tick$core$IExtraction$zone_offset$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.zone_offset.utc;
});

goog.object.set(tick.core.IExtraction,"object",true);

var G__20939_21047 = tick.core.int$;
var G__20940_21048 = "object";
var G__20941_21049 = ((function (G__20939_21047,G__20940_21048){
return (function (v){
return tick.core.parse_int(v);
});})(G__20939_21047,G__20940_21048))
;
goog.object.set(G__20939_21047,G__20940_21048,G__20941_21049);

var G__20942_21050 = tick.core.long$;
var G__20943_21051 = "object";
var G__20944_21052 = ((function (G__20942_21050,G__20943_21051){
return (function (v){
return tick.core.parse_int(v);
});})(G__20942_21050,G__20943_21051))
;
goog.object.set(G__20942_21050,G__20943_21051,G__20944_21052);

Date.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tick$core$IExtraction$date$arity$1 = (function (d){
var d__$1 = this;
return tick.core.date(tick.core.zoned_date_time(tick.core.instant(d__$1)));
});

Date.prototype.tick$core$IExtraction$date_time$arity$1 = (function (d){
var d__$1 = this;
return tick.core.date_time(tick.core.instant(d__$1));
});

Date.prototype.tick$core$IExtraction$year_month$arity$1 = (function (d){
var d__$1 = this;
return tick.core.year_month(tick.core.date(d__$1));
});

Date.prototype.tick$core$IExtraction$year$arity$1 = (function (d){
var d__$1 = this;
return tick.core.year(tick.core.date(d__$1));
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
return cljc.java_time.local_date.get_day_of_week(d__$1);
});

java.time.LocalDate.prototype.tick$core$IExtraction$day_of_month$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.local_date.get_day_of_month(d__$1);
});

java.time.LocalDate.prototype.tick$core$IExtraction$month$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.month.from(d__$1);
});

java.time.LocalDate.prototype.tick$core$IExtraction$year_month$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.year_month.of(cljc.java_time.local_date.get_year(d__$1),cljc.java_time.local_date.get_month_value(d__$1));
});

java.time.LocalDate.prototype.tick$core$IExtraction$year$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.year.of(cljc.java_time.local_date.get_year(d__$1));
});

goog.object.set(tick.core.IExtraction,"number",true);

var G__20945_21053 = tick.core.day_of_week;
var G__20946_21054 = "number";
var G__20947_21055 = ((function (G__20945_21053,G__20946_21054){
return (function (n){
return cljc.java_time.day_of_week.of(n);
});})(G__20945_21053,G__20946_21054))
;
goog.object.set(G__20945_21053,G__20946_21054,G__20947_21055);

var G__20948_21056 = tick.core.month;
var G__20949_21057 = "number";
var G__20950_21058 = ((function (G__20948_21056,G__20949_21057){
return (function (n){
return cljc.java_time.month.of(n);
});})(G__20948_21056,G__20949_21057))
;
goog.object.set(G__20948_21056,G__20949_21057,G__20950_21058);

var G__20951_21059 = tick.core.year;
var G__20952_21060 = "number";
var G__20953_21061 = ((function (G__20951_21059,G__20952_21060){
return (function (n){
return cljc.java_time.year.of(n);
});})(G__20951_21059,G__20952_21060))
;
goog.object.set(G__20951_21059,G__20952_21060,G__20953_21061);

var G__20954_21062 = tick.core.zone_offset;
var G__20955_21063 = "number";
var G__20956_21064 = ((function (G__20954_21062,G__20955_21063){
return (function (s){
return cljc.java_time.zone_offset.of_hours(s);
});})(G__20954_21062,G__20955_21063))
;
goog.object.set(G__20954_21062,G__20955_21063,G__20956_21064);

java.time.ZoneOffset.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZoneOffset.prototype.tick$core$IExtraction$zone_offset$arity$1 = (function (z){
var z__$1 = this;
return z__$1;
});

goog.object.set(tick.core.IExtraction,"string",true);

var G__20957_21065 = tick.core.time;
var G__20958_21066 = "string";
var G__20959_21067 = ((function (G__20957_21065,G__20958_21066){
return (function (s){
return tick.core.time(tick.core.parse(s));
});})(G__20957_21065,G__20958_21066))
;
goog.object.set(G__20957_21065,G__20958_21066,G__20959_21067);

var G__20960_21068 = tick.core.date;
var G__20961_21069 = "string";
var G__20962_21070 = ((function (G__20960_21068,G__20961_21069){
return (function (s){
return tick.core.date(tick.core.parse(s));
});})(G__20960_21068,G__20961_21069))
;
goog.object.set(G__20960_21068,G__20961_21069,G__20962_21070);

var G__20963_21071 = tick.core.date_time;
var G__20964_21072 = "string";
var G__20965_21073 = ((function (G__20963_21071,G__20964_21072){
return (function (s){
return cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$1(s);
});})(G__20963_21071,G__20964_21072))
;
goog.object.set(G__20963_21071,G__20964_21072,G__20965_21073);

var G__20966_21074 = tick.core.day_of_week;
var G__20967_21075 = "string";
var G__20968_21076 = ((function (G__20966_21074,G__20967_21075){
return (function (s){
var or__4131__auto__ = tick.core.parse_day(s);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return tick.core.day_of_week(tick.core.date(s));
}
});})(G__20966_21074,G__20967_21075))
;
goog.object.set(G__20966_21074,G__20967_21075,G__20968_21076);

var G__20969_21077 = tick.core.day_of_month;
var G__20970_21078 = "string";
var G__20971_21079 = ((function (G__20969_21077,G__20970_21078){
return (function (s){
return tick.core.day_of_month(tick.core.date(s));
});})(G__20969_21077,G__20970_21078))
;
goog.object.set(G__20969_21077,G__20970_21078,G__20971_21079);

var G__20972_21080 = tick.core.month;
var G__20973_21081 = "string";
var G__20974_21082 = ((function (G__20972_21080,G__20973_21081){
return (function (s){
var or__4131__auto__ = tick.core.parse_month(s);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return tick.core.month(tick.core.date(s));
}
});})(G__20972_21080,G__20973_21081))
;
goog.object.set(G__20972_21080,G__20973_21081,G__20974_21082);

var G__20975_21083 = tick.core.year;
var G__20976_21084 = "string";
var G__20977_21085 = ((function (G__20975_21083,G__20976_21084){
return (function (s){
return tick.core.year(tick.core.parse(s));
});})(G__20975_21083,G__20976_21084))
;
goog.object.set(G__20975_21083,G__20976_21084,G__20977_21085);

var G__20978_21086 = tick.core.year_month;
var G__20979_21087 = "string";
var G__20980_21088 = ((function (G__20978_21086,G__20979_21087){
return (function (s){
return tick.core.year_month(tick.core.parse(s));
});})(G__20978_21086,G__20979_21087))
;
goog.object.set(G__20978_21086,G__20979_21087,G__20980_21088);

var G__20981_21089 = tick.core.zone;
var G__20982_21090 = "string";
var G__20983_21091 = ((function (G__20981_21089,G__20982_21090){
return (function (s){
return cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$1(s);
});})(G__20981_21089,G__20982_21090))
;
goog.object.set(G__20981_21089,G__20982_21090,G__20983_21091);

var G__20984_21092 = tick.core.zone_offset;
var G__20985_21093 = "string";
var G__20986_21094 = ((function (G__20984_21092,G__20985_21093){
return (function (s){
return cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$1(s);
});})(G__20984_21092,G__20985_21093))
;
goog.object.set(G__20984_21092,G__20985_21093,G__20986_21094);

var G__20987_21095 = tick.core.int$;
var G__20988_21096 = "string";
var G__20989_21097 = ((function (G__20987_21095,G__20988_21096){
return (function (s){
return cljc.java_time.instant.get_nano(tick.core.instant(s));
});})(G__20987_21095,G__20988_21096))
;
goog.object.set(G__20987_21095,G__20988_21096,G__20989_21097);

var G__20990_21098 = tick.core.long$;
var G__20991_21099 = "string";
var G__20992_21100 = ((function (G__20990_21098,G__20991_21099){
return (function (s){
return cljc.java_time.instant.get_epoch_second(tick.core.instant(s));
});})(G__20990_21098,G__20991_21099))
;
goog.object.set(G__20990_21098,G__20991_21099,G__20992_21100);

goog.object.set(tick.core.IExtraction,"function",true);

var G__20993_21101 = tick.core.time;
var G__20994_21102 = "function";
var G__20995_21103 = ((function (G__20993_21101,G__20994_21102){
return (function (f){
return tick.core.time((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__20993_21101,G__20994_21102))
;
goog.object.set(G__20993_21101,G__20994_21102,G__20995_21103);

var G__20996_21104 = tick.core.date;
var G__20997_21105 = "function";
var G__20998_21106 = ((function (G__20996_21104,G__20997_21105){
return (function (f){
return tick.core.date((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__20996_21104,G__20997_21105))
;
goog.object.set(G__20996_21104,G__20997_21105,G__20998_21106);

var G__20999_21107 = tick.core.date_time;
var G__21000_21108 = "function";
var G__21001_21109 = ((function (G__20999_21107,G__21000_21108){
return (function (f){
return tick.core.date_time((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__20999_21107,G__21000_21108))
;
goog.object.set(G__20999_21107,G__21000_21108,G__21001_21109);

var G__21002_21110 = tick.core.nanosecond;
var G__21003_21111 = "function";
var G__21004_21112 = ((function (G__21002_21110,G__21003_21111){
return (function (f){
return tick.core.nanosecond((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21002_21110,G__21003_21111))
;
goog.object.set(G__21002_21110,G__21003_21111,G__21004_21112);

var G__21005_21113 = tick.core.microsecond;
var G__21006_21114 = "function";
var G__21007_21115 = ((function (G__21005_21113,G__21006_21114){
return (function (f){
return tick.core.microsecond((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21005_21113,G__21006_21114))
;
goog.object.set(G__21005_21113,G__21006_21114,G__21007_21115);

var G__21008_21116 = tick.core.millisecond;
var G__21009_21117 = "function";
var G__21010_21118 = ((function (G__21008_21116,G__21009_21117){
return (function (f){
return tick.core.millisecond((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21008_21116,G__21009_21117))
;
goog.object.set(G__21008_21116,G__21009_21117,G__21010_21118);

var G__21011_21119 = tick.core.second;
var G__21012_21120 = "function";
var G__21013_21121 = ((function (G__21011_21119,G__21012_21120){
return (function (f){
return tick.core.second((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21011_21119,G__21012_21120))
;
goog.object.set(G__21011_21119,G__21012_21120,G__21013_21121);

var G__21014_21122 = tick.core.minute;
var G__21015_21123 = "function";
var G__21016_21124 = ((function (G__21014_21122,G__21015_21123){
return (function (f){
return tick.core.minute((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21014_21122,G__21015_21123))
;
goog.object.set(G__21014_21122,G__21015_21123,G__21016_21124);

var G__21017_21125 = tick.core.hour;
var G__21018_21126 = "function";
var G__21019_21127 = ((function (G__21017_21125,G__21018_21126){
return (function (f){
return tick.core.hour((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21017_21125,G__21018_21126))
;
goog.object.set(G__21017_21125,G__21018_21126,G__21019_21127);

var G__21020_21128 = tick.core.day_of_week;
var G__21021_21129 = "function";
var G__21022_21130 = ((function (G__21020_21128,G__21021_21129){
return (function (f){
return tick.core.day_of_week((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21020_21128,G__21021_21129))
;
goog.object.set(G__21020_21128,G__21021_21129,G__21022_21130);

var G__21023_21131 = tick.core.day_of_month;
var G__21024_21132 = "function";
var G__21025_21133 = ((function (G__21023_21131,G__21024_21132){
return (function (f){
return tick.core.day_of_month((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21023_21131,G__21024_21132))
;
goog.object.set(G__21023_21131,G__21024_21132,G__21025_21133);

var G__21026_21134 = tick.core.int$;
var G__21027_21135 = "function";
var G__21028_21136 = ((function (G__21026_21134,G__21027_21135){
return (function (f){
return tick.core.int$((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21026_21134,G__21027_21135))
;
goog.object.set(G__21026_21134,G__21027_21135,G__21028_21136);

var G__21029_21137 = tick.core.long$;
var G__21030_21138 = "function";
var G__21031_21139 = ((function (G__21029_21137,G__21030_21138){
return (function (f){
return tick.core.long$((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21029_21137,G__21030_21138))
;
goog.object.set(G__21029_21137,G__21030_21138,G__21031_21139);

var G__21032_21140 = tick.core.month;
var G__21033_21141 = "function";
var G__21034_21142 = ((function (G__21032_21140,G__21033_21141){
return (function (f){
return tick.core.month((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21032_21140,G__21033_21141))
;
goog.object.set(G__21032_21140,G__21033_21141,G__21034_21142);

var G__21035_21143 = tick.core.year;
var G__21036_21144 = "function";
var G__21037_21145 = ((function (G__21035_21143,G__21036_21144){
return (function (f){
return tick.core.year((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21035_21143,G__21036_21144))
;
goog.object.set(G__21035_21143,G__21036_21144,G__21037_21145);

var G__21038_21146 = tick.core.year_month;
var G__21039_21147 = "function";
var G__21040_21148 = ((function (G__21038_21146,G__21039_21147){
return (function (f){
return tick.core.year_month((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21038_21146,G__21039_21147))
;
goog.object.set(G__21038_21146,G__21039_21147,G__21040_21148);

var G__21041_21149 = tick.core.zone;
var G__21042_21150 = "function";
var G__21043_21151 = ((function (G__21041_21149,G__21042_21150){
return (function (f){
return tick.core.zone((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21041_21149,G__21042_21150))
;
goog.object.set(G__21041_21149,G__21042_21150,G__21043_21151);

var G__21044_21152 = tick.core.zone_offset;
var G__21045_21153 = "function";
var G__21046_21154 = ((function (G__21044_21152,G__21045_21153){
return (function (f){
return tick.core.zone_offset((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21044_21152,G__21045_21153))
;
goog.object.set(G__21044_21152,G__21045_21153,G__21046_21154);

java.time.LocalTime.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalTime.prototype.tick$core$IExtraction$time$arity$1 = (function (t){
var t__$1 = this;
return t__$1;
});

java.time.LocalTime.prototype.tick$core$IExtraction$nanosecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get(t__$1,cljc.java_time.temporal.chrono_field.nano_of_second);
});

java.time.LocalTime.prototype.tick$core$IExtraction$microsecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get(t__$1,cljc.java_time.temporal.chrono_field.micro_of_second);
});

java.time.LocalTime.prototype.tick$core$IExtraction$millisecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get(t__$1,cljc.java_time.temporal.chrono_field.milli_of_second);
});

java.time.LocalTime.prototype.tick$core$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get_second(t__$1);
});

java.time.LocalTime.prototype.tick$core$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get_minute(t__$1);
});

java.time.LocalTime.prototype.tick$core$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get_hour(t__$1);
});

java.time.OffsetDateTime.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.OffsetDateTime.prototype.tick$core$IExtraction$time$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_local_time(odt__$1);
});

java.time.OffsetDateTime.prototype.tick$core$IExtraction$date$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_local_date(odt__$1);
});

java.time.OffsetDateTime.prototype.tick$core$IExtraction$date_time$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_local_date_time(odt__$1);
});

java.time.OffsetDateTime.prototype.tick$core$IExtraction$year$arity$1 = (function (odt){
var odt__$1 = this;
return tick.core.year(cljc.java_time.offset_date_time.get_year(odt__$1));
});

java.time.OffsetDateTime.prototype.tick$core$IExtraction$zone_offset$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.get_offset(odt__$1);
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$core$IExtraction$time$arity$1 = (function (dt){
var dt__$1 = this;
return cljc.java_time.local_date_time.to_local_time(dt__$1);
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$date$arity$1 = (function (dt){
var dt__$1 = this;
return cljc.java_time.local_date_time.to_local_date(dt__$1);
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$date_time$arity$1 = (function (ldt){
var ldt__$1 = this;
return ldt__$1;
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_date_time.get_second(t__$1);
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_date_time.get_minute(t__$1);
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_date_time.get_hour(t__$1);
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$day_of_week$arity$1 = (function (dt){
var dt__$1 = this;
return tick.core.day_of_week(tick.core.date(dt__$1));
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$day_of_month$arity$1 = (function (dt){
var dt__$1 = this;
return tick.core.day_of_month(tick.core.date(dt__$1));
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$year_month$arity$1 = (function (dt){
var dt__$1 = this;
return tick.core.year_month(tick.core.date(dt__$1));
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$month$arity$1 = (function (dt){
var dt__$1 = this;
return cljc.java_time.local_date_time.get_month(dt__$1);
});

java.time.LocalDateTime.prototype.tick$core$IExtraction$year$arity$1 = (function (dt){
var dt__$1 = this;
return tick.core.year(tick.core.date(dt__$1));
});

java.time.Month.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Month.prototype.tick$core$IExtraction$int$arity$1 = (function (m){
var m__$1 = this;
return cljc.java_time.month.get_value(m__$1);
});

java.time.DayOfWeek.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.DayOfWeek.prototype.tick$core$IExtraction$int$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.day_of_week.get_value(d__$1);
});
tick.core.field_map = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$proleptic_DASH_month,cljs.core.cst$kw$aligned_DASH_week_DASH_of_DASH_month,cljs.core.cst$kw$clock_DASH_hour_DASH_of_DASH_ampm,cljs.core.cst$kw$epoch_DASH_day,cljs.core.cst$kw$nano_DASH_of_DASH_second,cljs.core.cst$kw$aligned_DASH_week_DASH_of_DASH_year,cljs.core.cst$kw$era,cljs.core.cst$kw$offset_DASH_seconds,cljs.core.cst$kw$micro_DASH_of_DASH_day,cljs.core.cst$kw$minute_DASH_of_DASH_day,cljs.core.cst$kw$day_DASH_of_DASH_week,cljs.core.cst$kw$ampm_DASH_of_DASH_day,cljs.core.cst$kw$clock_DASH_hour_DASH_of_DASH_day,cljs.core.cst$kw$hour_DASH_of_DASH_day,cljs.core.cst$kw$month_DASH_of_DASH_year,cljs.core.cst$kw$milli_DASH_of_DASH_second,cljs.core.cst$kw$instant_DASH_seconds,cljs.core.cst$kw$micro_DASH_of_DASH_second,cljs.core.cst$kw$aligned_DASH_day_DASH_of_DASH_week_DASH_in_DASH_month,cljs.core.cst$kw$day_DASH_of_DASH_month,cljs.core.cst$kw$year,cljs.core.cst$kw$day_DASH_of_DASH_year,cljs.core.cst$kw$year_DASH_of_DASH_era,cljs.core.cst$kw$nano_DASH_of_DASH_day,cljs.core.cst$kw$hour_DASH_of_DASH_ampm,cljs.core.cst$kw$second_DASH_of_DASH_minute,cljs.core.cst$kw$aligned_DASH_day_DASH_of_DASH_week_DASH_in_DASH_year,cljs.core.cst$kw$second_DASH_of_DASH_day,cljs.core.cst$kw$milli_DASH_of_DASH_day,cljs.core.cst$kw$minute_DASH_of_DASH_hour],[cljc.java_time.temporal.chrono_field.proleptic_month,cljc.java_time.temporal.chrono_field.aligned_week_of_month,cljc.java_time.temporal.chrono_field.clock_hour_of_ampm,cljc.java_time.temporal.chrono_field.epoch_day,cljc.java_time.temporal.chrono_field.nano_of_second,cljc.java_time.temporal.chrono_field.aligned_week_of_year,cljc.java_time.temporal.chrono_field.era,cljc.java_time.temporal.chrono_field.offset_seconds,cljc.java_time.temporal.chrono_field.micro_of_day,cljc.java_time.temporal.chrono_field.minute_of_day,cljc.java_time.temporal.chrono_field.day_of_week,cljc.java_time.temporal.chrono_field.ampm_of_day,cljc.java_time.temporal.chrono_field.clock_hour_of_day,cljc.java_time.temporal.chrono_field.hour_of_day,cljc.java_time.temporal.chrono_field.month_of_year,cljc.java_time.temporal.chrono_field.milli_of_second,cljc.java_time.temporal.chrono_field.instant_seconds,cljc.java_time.temporal.chrono_field.micro_of_second,cljc.java_time.temporal.chrono_field.aligned_day_of_week_in_month,cljc.java_time.temporal.chrono_field.day_of_month,cljc.java_time.temporal.chrono_field.year,cljc.java_time.temporal.chrono_field.day_of_year,cljc.java_time.temporal.chrono_field.year_of_era,cljc.java_time.temporal.chrono_field.nano_of_day,cljc.java_time.temporal.chrono_field.hour_of_ampm,cljc.java_time.temporal.chrono_field.second_of_minute,cljc.java_time.temporal.chrono_field.aligned_day_of_week_in_year,cljc.java_time.temporal.chrono_field.second_of_day,cljc.java_time.temporal.chrono_field.milli_of_day,cljc.java_time.temporal.chrono_field.minute_of_hour]);

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
return cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p__21155){
var vec__21156 = p__21155;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21156,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21156,(1),null);
var cf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.field_map,k);
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
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.field_map,fld);
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
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.field_map,fld);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
try{return self__.t.getLong(f);
}catch (e21159){if((e21159 instanceof Error)){
var e = e21159;
return notfound;
} else {
throw e21159;

}
}} else {
return notfound;
}
});

tick.core.FieldsLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$t], null);
});

tick.core.FieldsLookup.cljs$lang$type = true;

tick.core.FieldsLookup.cljs$lang$ctorStr = "tick.core/FieldsLookup";

tick.core.FieldsLookup.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"tick.core/FieldsLookup");
});

/**
 * Positional factory function for tick.core/FieldsLookup.
 */
tick.core.__GT_FieldsLookup = (function tick$core$__GT_FieldsLookup(t){
return (new tick.core.FieldsLookup(t));
});

tick.core.fields = (function tick$core$fields(t){
return tick.core.__GT_FieldsLookup(t);
});
/**
 * Adjust a temporal with an adjuster or field
 */
tick.core.with$ = (function tick$core$with(var_args){
var G__21161 = arguments.length;
switch (G__21161) {
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
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.field_map,fld);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return t.with(f,new_value);
} else {
return null;
}
});

tick.core.with$.cljs$lang$maxFixedArity = 3;

tick.core.day_of_week_in_month = (function tick$core$day_of_week_in_month(var_args){
var G__21164 = arguments.length;
switch (G__21164) {
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
return cljc.java_time.temporal.temporal_adjusters.day_of_week_in_month(ordinal,tick.core.day_of_week(dow));
});

tick.core.day_of_week_in_month.cljs$core$IFn$_invoke$arity$3 = (function (t,ordinal,dow){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.day_of_week_in_month.cljs$core$IFn$_invoke$arity$2(ordinal,dow));
});

tick.core.day_of_week_in_month.cljs$lang$maxFixedArity = 3;

tick.core.first_day_of_month = (function tick$core$first_day_of_month(var_args){
var G__21167 = arguments.length;
switch (G__21167) {
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
return cljc.java_time.temporal.temporal_adjusters.first_day_of_month();
});

tick.core.first_day_of_month.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.first_day_of_month.cljs$core$IFn$_invoke$arity$0());
});

tick.core.first_day_of_month.cljs$lang$maxFixedArity = 1;

tick.core.first_day_of_next_month = (function tick$core$first_day_of_next_month(var_args){
var G__21170 = arguments.length;
switch (G__21170) {
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
return cljc.java_time.temporal.temporal_adjusters.first_day_of_next_month();
});

tick.core.first_day_of_next_month.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.first_day_of_next_month.cljs$core$IFn$_invoke$arity$0());
});

tick.core.first_day_of_next_month.cljs$lang$maxFixedArity = 1;

tick.core.first_day_of_next_year = (function tick$core$first_day_of_next_year(var_args){
var G__21173 = arguments.length;
switch (G__21173) {
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
return cljc.java_time.temporal.temporal_adjusters.first_day_of_next_year();
});

tick.core.first_day_of_next_year.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.first_day_of_next_year.cljs$core$IFn$_invoke$arity$0());
});

tick.core.first_day_of_next_year.cljs$lang$maxFixedArity = 1;

tick.core.first_day_of_year = (function tick$core$first_day_of_year(var_args){
var G__21176 = arguments.length;
switch (G__21176) {
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
return cljc.java_time.temporal.temporal_adjusters.first_day_of_year();
});

tick.core.first_day_of_year.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.first_day_of_year.cljs$core$IFn$_invoke$arity$0());
});

tick.core.first_day_of_year.cljs$lang$maxFixedArity = 1;

tick.core.first_in_month = (function tick$core$first_in_month(var_args){
var G__21179 = arguments.length;
switch (G__21179) {
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
return cljc.java_time.temporal.temporal_adjusters.first_in_month(tick.core.day_of_week(dow));
});

tick.core.first_in_month.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.first_in_month.cljs$core$IFn$_invoke$arity$1(dow));
});

tick.core.first_in_month.cljs$lang$maxFixedArity = 2;

tick.core.last_day_of_month = (function tick$core$last_day_of_month(var_args){
var G__21182 = arguments.length;
switch (G__21182) {
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
return cljc.java_time.temporal.temporal_adjusters.last_day_of_month();
});

tick.core.last_day_of_month.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.last_day_of_month.cljs$core$IFn$_invoke$arity$0());
});

tick.core.last_day_of_month.cljs$lang$maxFixedArity = 1;

tick.core.last_day_of_year = (function tick$core$last_day_of_year(var_args){
var G__21185 = arguments.length;
switch (G__21185) {
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
return cljc.java_time.temporal.temporal_adjusters.last_day_of_year();
});

tick.core.last_day_of_year.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.last_day_of_year.cljs$core$IFn$_invoke$arity$0());
});

tick.core.last_day_of_year.cljs$lang$maxFixedArity = 1;

tick.core.last_in_month = (function tick$core$last_in_month(var_args){
var G__21188 = arguments.length;
switch (G__21188) {
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
return cljc.java_time.temporal.temporal_adjusters.last_in_month(tick.core.day_of_week(dow));
});

tick.core.last_in_month.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.last_in_month.cljs$core$IFn$_invoke$arity$1(dow));
});

tick.core.last_in_month.cljs$lang$maxFixedArity = 2;

tick.core.next = (function tick$core$next(var_args){
var G__21191 = arguments.length;
switch (G__21191) {
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
return cljc.java_time.temporal.temporal_adjusters.next(tick.core.day_of_week(dow));
});

tick.core.next.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.next.cljs$core$IFn$_invoke$arity$1(dow));
});

tick.core.next.cljs$lang$maxFixedArity = 2;

tick.core.next_or_same = (function tick$core$next_or_same(var_args){
var G__21194 = arguments.length;
switch (G__21194) {
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
return cljc.java_time.temporal.temporal_adjusters.next_or_same(tick.core.day_of_week(dow));
});

tick.core.next_or_same.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.next_or_same.cljs$core$IFn$_invoke$arity$1(dow));
});

tick.core.next_or_same.cljs$lang$maxFixedArity = 2;

tick.core.previous = (function tick$core$previous(var_args){
var G__21197 = arguments.length;
switch (G__21197) {
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
return cljc.java_time.temporal.temporal_adjusters.previous(tick.core.day_of_week(dow));
});

tick.core.previous.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.previous.cljs$core$IFn$_invoke$arity$1(dow));
});

tick.core.previous.cljs$lang$maxFixedArity = 2;

tick.core.previous_or_same = (function tick$core$previous_or_same(var_args){
var G__21200 = arguments.length;
switch (G__21200) {
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
return cljc.java_time.temporal.temporal_adjusters.previous_or_same(tick.core.day_of_week(dow));
});

tick.core.previous_or_same.cljs$core$IFn$_invoke$arity$2 = (function (t,dow){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.previous_or_same.cljs$core$IFn$_invoke$arity$1(dow));
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4434__auto__.call(null,x,y));
} else {
var m__4431__auto__ = (tick.core._LT_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4431__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.<",x);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4434__auto__.call(null,x,y));
} else {
var m__4431__auto__ = (tick.core._LT__EQ_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4431__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.<=",x);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4434__auto__.call(null,x,y));
} else {
var m__4431__auto__ = (tick.core._GT_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4431__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.>",x);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4434__auto__.call(null,x,y));
} else {
var m__4431__auto__ = (tick.core._GT__EQ_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4431__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.>=",x);
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
return cljs.core.not(x__$1.isAfter(y));
});

java.time.YearMonth.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
});

java.time.YearMonth.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isBefore(y));
});

java.time.Year.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
});

java.time.Year.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isAfter(y));
});

java.time.Year.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
});

java.time.Year.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isBefore(y));
});

java.time.ZonedDateTime.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
});

java.time.ZonedDateTime.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isAfter(y));
});

java.time.ZonedDateTime.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
});

java.time.ZonedDateTime.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isBefore(y));
});

java.time.Instant.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
});

java.time.Instant.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isAfter(y));
});

java.time.Instant.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
});

java.time.Instant.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isBefore(y));
});

Date.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return (cljs.core.compare(x__$1,y) < (0));
});

Date.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return (!((cljs.core.compare(x__$1,y) > (0))));
});

Date.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return (cljs.core.compare(x__$1,y) > (0));
});

Date.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return (!((cljs.core.compare(x__$1,y) < (0))));
});

java.time.LocalDate.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
});

java.time.LocalDate.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isAfter(y));
});

java.time.LocalDate.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
});

java.time.LocalDate.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isBefore(y));
});

java.time.LocalTime.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalTime.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
});

java.time.LocalTime.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isAfter(y));
});

java.time.LocalTime.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
});

java.time.LocalTime.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isBefore(y));
});

java.time.OffsetDateTime.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.OffsetDateTime.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
});

java.time.OffsetDateTime.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isAfter(y));
});

java.time.OffsetDateTime.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
});

java.time.OffsetDateTime.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isBefore(y));
});

java.time.LocalDateTime.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isBefore(y);
});

java.time.LocalDateTime.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isAfter(y));
});

java.time.LocalDateTime.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return x__$1.isAfter(y);
});

java.time.LocalDateTime.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(x__$1.isBefore(y));
});

java.time.Duration.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Duration.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return (x__$1.compareTo(y) < (0));
});

java.time.Duration.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y);
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
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)) || ((x__$1.compareTo(y) > (0))));
});
tick.core.unit_map = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$nanos,cljs.core.cst$kw$forever,cljs.core.cst$kw$months,cljs.core.cst$kw$days,cljs.core.cst$kw$half_DASH_days,cljs.core.cst$kw$micros,cljs.core.cst$kw$seconds,cljs.core.cst$kw$centuries,cljs.core.cst$kw$decades,cljs.core.cst$kw$hours,cljs.core.cst$kw$years,cljs.core.cst$kw$minutes,cljs.core.cst$kw$eras,cljs.core.cst$kw$millennia,cljs.core.cst$kw$weeks,cljs.core.cst$kw$millis],[cljc.java_time.temporal.chrono_unit.nanos,cljc.java_time.temporal.chrono_unit.forever,cljc.java_time.temporal.chrono_unit.months,cljc.java_time.temporal.chrono_unit.days,cljc.java_time.temporal.chrono_unit.half_days,cljc.java_time.temporal.chrono_unit.micros,cljc.java_time.temporal.chrono_unit.seconds,cljc.java_time.temporal.chrono_unit.centuries,cljc.java_time.temporal.chrono_unit.decades,cljc.java_time.temporal.chrono_unit.hours,cljc.java_time.temporal.chrono_unit.years,cljc.java_time.temporal.chrono_unit.minutes,cljc.java_time.temporal.chrono_unit.eras,cljc.java_time.temporal.chrono_unit.millennia,cljc.java_time.temporal.chrono_unit.weeks,cljc.java_time.temporal.chrono_unit.millis]);
tick.core.reverse_unit_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,tick.core.unit_map)));
tick.core.units = (function tick$core$units(x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function tick$core$units_$_iter__21202(s__21203){
return (new cljs.core.LazySeq(null,(function (){
var s__21203__$1 = s__21203;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__21203__$1);
if(temp__5735__auto__){
var s__21203__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21203__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__21203__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__21205 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__21204 = (0);
while(true){
if((i__21204 < size__4522__auto__)){
var tu = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__21204);
var k = (tick.core.reverse_unit_map.cljs$core$IFn$_invoke$arity$1 ? tick.core.reverse_unit_map.cljs$core$IFn$_invoke$arity$1(tu) : tick.core.reverse_unit_map.call(null,tu));
if(cljs.core.truth_(k)){
cljs.core.chunk_append(b__21205,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,x.get(tu)], null));

var G__21206 = (i__21204 + (1));
i__21204 = G__21206;
continue;
} else {
var G__21207 = (i__21204 + (1));
i__21204 = G__21207;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21205),tick$core$units_$_iter__21202(cljs.core.chunk_rest(s__21203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21205),null);
}
} else {
var tu = cljs.core.first(s__21203__$2);
var k = (tick.core.reverse_unit_map.cljs$core$IFn$_invoke$arity$1 ? tick.core.reverse_unit_map.cljs$core$IFn$_invoke$arity$1(tu) : tick.core.reverse_unit_map.call(null,tu));
if(cljs.core.truth_(k)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,x.get(tu)], null),tick$core$units_$_iter__21202(cljs.core.rest(s__21203__$2)));
} else {
var G__21208 = cljs.core.rest(s__21203__$2);
s__21203__$1 = G__21208;
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
return iter__4523__auto__(cljc.java_time.temporal.temporal_amount.get_units(x));
})());
});
tick.core.truncate = (function tick$core$truncate(x,u){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.unit_map,u);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.nanos["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.nanos",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.micros["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.micros",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.millis["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.millis",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.seconds["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.seconds",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.minutes["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.minutes",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.hours["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.hours",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.days["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.days",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.months["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.months",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.years["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.years",_);
}
}
}
});

java.time.Duration.prototype.tick$core$IConversion$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Duration.prototype.tick$core$IConversion$instant$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.instant.of_epoch_milli(tick.core.millis(d__$1));
});

java.time.Duration.prototype.tick$core$IConversion$inst$arity$1 = (function (d){
var d__$1 = this;
return tick.core.inst(tick.core.instant(d__$1));
});
java.time.Duration.prototype.tick$core$ITimeLength$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Duration.prototype.tick$core$ITimeLength$nanos$arity$1 = (function (d){
var d__$1 = this;
return d__$1.toNanos();
});

java.time.Duration.prototype.tick$core$ITimeLength$micros$arity$1 = (function (d){
var d__$1 = this;
return (tick.core.nanos(d__$1) / (1000));
});

java.time.Duration.prototype.tick$core$ITimeLength$millis$arity$1 = (function (d){
var d__$1 = this;
return d__$1.toMillis();
});

java.time.Duration.prototype.tick$core$ITimeLength$seconds$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.duration.get_seconds(d__$1);
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
return cljc.java_time.period.get_days(p__$1);
});

java.time.Period.prototype.tick$core$ITimeLength$months$arity$1 = (function (p){
var p__$1 = this;
return cljc.java_time.period.get_months(p__$1);
});

java.time.Period.prototype.tick$core$ITimeLength$years$arity$1 = (function (p){
var p__$1 = this;
return cljc.java_time.period.get_years(p__$1);
});
tick.core.new_duration = (function tick$core$new_duration(n,u){
var unit = (tick.core.unit_map.cljs$core$IFn$_invoke$arity$1 ? tick.core.unit_map.cljs$core$IFn$_invoke$arity$1(u) : tick.core.unit_map.call(null,u));
if(cljs.core.truth_(unit)){
} else {
throw (new Error(["Assert failed: ",["Not a unit: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(u)].join(''),"\n","unit"].join('')));
}

return cljc.java_time.duration.of(n,unit);
});
tick.core.new_period = (function tick$core$new_period(n,u){
var G__21209 = u;
var G__21209__$1 = (((G__21209 instanceof cljs.core.Keyword))?G__21209.fqn:null);
switch (G__21209__$1) {
case "days":
return cljc.java_time.period.of_days(n);

break;
case "weeks":
return cljc.java_time.period.of_weeks(n);

break;
case "months":
return cljc.java_time.period.of_months(n);

break;
case "years":
return cljc.java_time.period.of_years(n);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21209__$1)].join('')));

}
});
java.time.Duration.prototype.tick$core$IExtraction$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Duration.prototype.tick$core$IExtraction$zone_offset$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.zone_offset.of_total_seconds(tick.core.new_duration((1),cljs.core.cst$kw$seconds));
});
tick.core.current_clock = (function tick$core$current_clock(){
var or__4131__auto__ = tick.core._STAR_clock_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljc.java_time.clock.system_default_zone();
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.clock["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IClock.clock",_);
}
}
}
});

java.time.Instant.prototype.tick$core$IClock$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$IClock$clock$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.clock.fixed(i__$1,tick.core.current_zone());
});

java.time.ZonedDateTime.prototype.tick$core$IClock$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.tick$core$IClock$clock$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.clock.fixed(zdt__$1.toInstant(),cljc.java_time.zoned_date_time.get_zone(zdt__$1));
});

goog.object.set(tick.core.IClock,"object",true);

var G__21211_21217 = tick.core.clock;
var G__21212_21218 = "object";
var G__21213_21219 = ((function (G__21211_21217,G__21212_21218){
return (function (o){
return tick.core.clock(tick.core.zoned_date_time(o));
});})(G__21211_21217,G__21212_21218))
;
goog.object.set(G__21211_21217,G__21212_21218,G__21213_21219);

java.time.Clock.prototype.tick$core$IClock$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Clock.prototype.tick$core$IClock$clock$arity$1 = (function (clk){
var clk__$1 = this;
return clk__$1;
});

java.time.ZoneId.prototype.tick$core$IClock$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZoneId.prototype.tick$core$IClock$clock$arity$1 = (function (z){
var z__$1 = this;
return cljc.java_time.clock.system(z__$1);
});

goog.object.set(tick.core.IClock,"string",true);

var G__21214_21220 = tick.core.clock;
var G__21215_21221 = "string";
var G__21216_21222 = ((function (G__21214_21220,G__21215_21221){
return (function (s){
return tick.core.clock(tick.core.parse(s));
});})(G__21214_21220,G__21215_21221))
;
goog.object.set(G__21214_21220,G__21215_21221,G__21216_21222);
tick.core.advance = (function tick$core$advance(var_args){
var G__21224 = arguments.length;
switch (G__21224) {
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
return tick.core.advance.cljs$core$IFn$_invoke$arity$2(clk,tick.core.new_duration((1),cljs.core.cst$kw$seconds));
});

tick.core.advance.cljs$core$IFn$_invoke$arity$2 = (function (clk,dur){
return cljc.java_time.clock.tick(clk,dur);
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
return cljc.java_time.clock.get_zone(clk__$1);
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

tick.core.AtomicClock.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k21227,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__21231 = k21227;
var G__21231__$1 = (((G__21231 instanceof cljs.core.Keyword))?G__21231.fqn:null);
switch (G__21231__$1) {
case "*clock":
return self__._STAR_clock;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21227,else__4388__auto__);

}
});

tick.core.AtomicClock.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__21232){
var vec__21233 = p__21232;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21233,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21233,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

tick.core.AtomicClock.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#tick.core.AtomicClock{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_STAR_clock,self__._STAR_clock],null))], null),self__.__extmap));
});

tick.core.AtomicClock.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21226){
var self__ = this;
var G__21226__$1 = this;
return (new cljs.core.RecordIter((0),G__21226__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_STAR_clock], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (1 + cljs.core.count(self__.__extmap));
});

tick.core.AtomicClock.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__21236 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1122898333 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__21236(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

tick.core.AtomicClock.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21228,other21229){
var self__ = this;
var this21228__$1 = this;
return (((!((other21229 == null)))) && ((this21228__$1.constructor === other21229.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21228__$1._STAR_clock,other21229._STAR_clock)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21228__$1.__extmap,other21229.__extmap)));
});

tick.core.AtomicClock.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_clock,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new tick.core.AtomicClock(self__._STAR_clock,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

tick.core.AtomicClock.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__21226){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__21237 = cljs.core.keyword_identical_QMARK_;
var expr__21238 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__21240 = cljs.core.cst$kw$_STAR_clock;
var G__21241 = expr__21238;
return (pred__21237.cljs$core$IFn$_invoke$arity$2 ? pred__21237.cljs$core$IFn$_invoke$arity$2(G__21240,G__21241) : pred__21237.call(null,G__21240,G__21241));
})())){
return (new tick.core.AtomicClock(G__21226,self__.__meta,self__.__extmap,null));
} else {
return (new tick.core.AtomicClock(self__._STAR_clock,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__21226),null));
}
});

tick.core.AtomicClock.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$_STAR_clock,self__._STAR_clock,null))], null),self__.__extmap));
});

tick.core.AtomicClock.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__21226){
var self__ = this;
var this__4384__auto____$1 = this;
return (new tick.core.AtomicClock(self__._STAR_clock,G__21226,self__.__extmap,self__.__hash));
});

tick.core.AtomicClock.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

tick.core.AtomicClock.prototype.tick$core$IClock$ = cljs.core.PROTOCOL_SENTINEL;

tick.core.AtomicClock.prototype.tick$core$IClock$clock$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__._STAR_clock);
});

tick.core.AtomicClock.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return tick.core.instant(cljs.core.deref(self__._STAR_clock));
});

tick.core.AtomicClock.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_clock], null);
});

tick.core.AtomicClock.cljs$lang$type = true;

tick.core.AtomicClock.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"tick.core/AtomicClock",null,(1),null));
});

tick.core.AtomicClock.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"tick.core/AtomicClock");
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
tick.core.map__GT_AtomicClock = (function tick$core$map__GT_AtomicClock(G__21230){
var extmap__4424__auto__ = (function (){var G__21242 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21230,cljs.core.cst$kw$_STAR_clock);
if(cljs.core.record_QMARK_(G__21230)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21242);
} else {
return G__21242;
}
})();
return (new tick.core.AtomicClock(cljs.core.cst$kw$_STAR_clock.cljs$core$IFn$_invoke$arity$1(G__21230),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

tick.core.atom = (function tick$core$atom(var_args){
var G__21245 = arguments.length;
switch (G__21245) {
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
return tick.core.__GT_AtomicClock(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(clk));
});

tick.core.atom.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.atom.cljs$core$IFn$_invoke$arity$1(tick.core.current_clock());
});

tick.core.atom.cljs$lang$maxFixedArity = 1;

tick.core.swap_BANG_ = (function tick$core$swap_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21250 = arguments.length;
var i__4731__auto___21251 = (0);
while(true){
if((i__4731__auto___21251 < len__4730__auto___21250)){
args__4736__auto__.push((arguments[i__4731__auto___21251]));

var G__21252 = (i__4731__auto___21251 + (1));
i__4731__auto___21251 = G__21252;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return tick.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

tick.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (at,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljs.core.cst$kw$_STAR_clock.cljs$core$IFn$_invoke$arity$1(at),f,args);
});

tick.core.swap_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
tick.core.swap_BANG_.cljs$lang$applyTo = (function (seq21247){
var G__21248 = cljs.core.first(seq21247);
var seq21247__$1 = cljs.core.next(seq21247);
var G__21249 = cljs.core.first(seq21247__$1);
var seq21247__$2 = cljs.core.next(seq21247__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21248,G__21249,seq21247__$2);
});

tick.core.swap_vals_BANG_ = (function tick$core$swap_vals_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21256 = arguments.length;
var i__4731__auto___21257 = (0);
while(true){
if((i__4731__auto___21257 < len__4730__auto___21256)){
args__4736__auto__.push((arguments[i__4731__auto___21257]));

var G__21258 = (i__4731__auto___21257 + (1));
i__4731__auto___21257 = G__21258;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return tick.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

tick.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (at,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_vals_BANG_,cljs.core.cst$kw$_STAR_clock.cljs$core$IFn$_invoke$arity$1(at),f,args);
});

tick.core.swap_vals_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
tick.core.swap_vals_BANG_.cljs$lang$applyTo = (function (seq21253){
var G__21254 = cljs.core.first(seq21253);
var seq21253__$1 = cljs.core.next(seq21253);
var G__21255 = cljs.core.first(seq21253__$1);
var seq21253__$2 = cljs.core.next(seq21253__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21254,G__21255,seq21253__$2);
});

tick.core.compare_and_set_BANG_ = (function tick$core$compare_and_set_BANG_(at,oldval,newval){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.compare_and_set_BANG_,cljs.core.cst$kw$_STAR_clock.cljs$core$IFn$_invoke$arity$1(at),oldval,newval);
});
tick.core.reset_BANG_ = (function tick$core$reset_BANG_(at,newval){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.reset_BANG_,cljs.core.cst$kw$_STAR_clock.cljs$core$IFn$_invoke$arity$1(at),newval);
});
tick.core.reset_vals_BANG_ = (function tick$core$reset_vals_BANG_(at,newval){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.reset_vals_BANG_,cljs.core.cst$kw$_STAR_clock.cljs$core$IFn$_invoke$arity$1(at),newval);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(t,d) : m__4434__auto__.call(null,t,d));
} else {
var m__4431__auto__ = (tick.core._PLUS_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(t,d) : m__4431__auto__.call(null,t,d));
} else {
throw cljs.core.missing_protocol("ITimeArithmetic.+",t);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(t,d) : m__4434__auto__.call(null,t,d));
} else {
var m__4431__auto__ = (tick.core._["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(t,d) : m__4431__auto__.call(null,t,d));
} else {
throw cljs.core.missing_protocol("ITimeArithmetic.-",t);
}
}
}
});

tick.core.minus_ = (function tick$core$minus_(var_args){
var G__21260 = arguments.length;
switch (G__21260) {
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

var G__21262_21268 = tick.core._PLUS_;
var G__21263_21269 = "object";
var G__21264_21270 = ((function (G__21262_21268,G__21263_21269){
return (function (t,d){
return t.plus(d);
});})(G__21262_21268,G__21263_21269))
;
goog.object.set(G__21262_21268,G__21263_21269,G__21264_21270);

var G__21265_21271 = tick.core._;
var G__21266_21272 = "object";
var G__21267_21273 = ((function (G__21265_21271,G__21266_21272){
return (function (t,d){
return t.minus(d);
});})(G__21265_21271,G__21266_21272))
;
goog.object.set(G__21265_21271,G__21266_21272,G__21267_21273);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__4434__auto__.call(null,_,n));
} else {
var m__4431__auto__ = (tick.core.forward_number["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__4431__auto__.call(null,_,n));
} else {
throw cljs.core.missing_protocol("ITimeShift.forward-number",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(_,d) : m__4434__auto__.call(null,_,d));
} else {
var m__4431__auto__ = (tick.core.forward_duration["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(_,d) : m__4431__auto__.call(null,_,d));
} else {
throw cljs.core.missing_protocol("ITimeShift.forward-duration",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__4434__auto__.call(null,_,n));
} else {
var m__4431__auto__ = (tick.core.backward_number["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__4431__auto__.call(null,_,n));
} else {
throw cljs.core.missing_protocol("ITimeShift.backward-number",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(_,d) : m__4434__auto__.call(null,_,d));
} else {
var m__4431__auto__ = (tick.core.backward_duration["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(_,d) : m__4431__auto__.call(null,_,d));
} else {
throw cljs.core.missing_protocol("ITimeShift.backward-duration",_);
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
return tick.core.instant(t__$1).plus(d);
});

Date.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return tick.core.instant(t__$1).minus(d);
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
return cljc.java_time.clock.offset(clk__$1,d);
});

java.time.Clock.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (clk,d){
var clk__$1 = this;
return cljc.java_time.clock.offset(clk__$1,tick.core.negated(d));
});
tick.core._GT__GT_ = (function tick$core$_GT__GT_(t,n_or_d){
if(typeof n_or_d === 'number'){
return tick.core.forward_number(t,n_or_d);
} else {
return tick.core.forward_duration(t,n_or_d);
}
});
tick.core._LT__LT_ = (function tick$core$_LT__LT_(t,n_or_d){
if(typeof n_or_d === 'number'){
return tick.core.backward_number(t,n_or_d);
} else {
return tick.core.backward_duration(t,n_or_d);
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
var G__21275 = arguments.length;
switch (G__21275) {
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(from) : m__4434__auto__.call(null,from));
} else {
var m__4431__auto__ = (tick.core.range["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(from) : m__4431__auto__.call(null,from));
} else {
throw cljs.core.missing_protocol("ITimeRangeable.range",from);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(from,to) : m__4434__auto__.call(null,from,to));
} else {
var m__4431__auto__ = (tick.core.range["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(from,to) : m__4431__auto__.call(null,from,to));
} else {
throw cljs.core.missing_protocol("ITimeRangeable.range",from);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(from,to,step) : m__4434__auto__.call(null,from,to,step));
} else {
var m__4431__auto__ = (tick.core.range["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(from,to,step) : m__4431__auto__.call(null,from,to,step));
} else {
throw cljs.core.missing_protocol("ITimeRangeable.range",from);
}
}
}
});

tick.core.range.cljs$lang$maxFixedArity = 3;


tick.core.greater = (function tick$core$greater(x,y){
if((cljs.core.compare(x,y) < (0))){
return y;
} else {
return x;
}
});
tick.core.max = (function tick$core$max(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21281 = arguments.length;
var i__4731__auto___21282 = (0);
while(true){
if((i__4731__auto___21282 < len__4730__auto___21281)){
args__4736__auto__.push((arguments[i__4731__auto___21282]));

var G__21283 = (i__4731__auto___21282 + (1));
i__4731__auto___21282 = G__21283;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tick.core.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tick.core.max.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21277_SHARP_,p2__21278_SHARP_){
return tick.core.greater(p1__21277_SHARP_,p2__21278_SHARP_);
}),arg,args);
});

tick.core.max.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tick.core.max.cljs$lang$applyTo = (function (seq21279){
var G__21280 = cljs.core.first(seq21279);
var seq21279__$1 = cljs.core.next(seq21279);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21280,seq21279__$1);
});

tick.core.lesser = (function tick$core$lesser(x,y){
if((cljs.core.compare(x,y) < (0))){
return x;
} else {
return y;
}
});
tick.core.min = (function tick$core$min(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21288 = arguments.length;
var i__4731__auto___21289 = (0);
while(true){
if((i__4731__auto___21289 < len__4730__auto___21288)){
args__4736__auto__.push((arguments[i__4731__auto___21289]));

var G__21290 = (i__4731__auto___21289 + (1));
i__4731__auto___21289 = G__21290;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tick.core.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tick.core.min.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21284_SHARP_,p2__21285_SHARP_){
return tick.core.lesser(p1__21284_SHARP_,p2__21285_SHARP_);
}),arg,args);
});

tick.core.min.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tick.core.min.cljs$lang$applyTo = (function (seq21286){
var G__21287 = cljs.core.first(seq21286);
var seq21286__$1 = cljs.core.next(seq21286);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21287,seq21286__$1);
});

java.time.Instant.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate(((function (from__$1){
return (function (p1__21291_SHARP_){
return p1__21291_SHARP_.plusSeconds((1));
});})(from__$1))
,from__$1);
});

java.time.Instant.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__21296 = cljs.core.iterate(((function (from__$1){
return (function (p1__21292_SHARP_){
return p1__21292_SHARP_.plusSeconds((1));
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (G__21296,from__$1){
return (function (p1__21293_SHARP_){
return tick.core._LT_(p1__21293_SHARP_,to);
});})(G__21296,from__$1))
,G__21296);
} else {
return G__21296;
}
});

java.time.Instant.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__21297 = cljs.core.iterate(((function (from__$1){
return (function (p1__21294_SHARP_){
return p1__21294_SHARP_.plus(step);
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (G__21297,from__$1){
return (function (p1__21295_SHARP_){
return tick.core._LT_(p1__21295_SHARP_,to);
});})(G__21297,from__$1))
,G__21297);
} else {
return G__21297;
}
});
java.time.ZonedDateTime.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate(((function (from__$1){
return (function (p1__21298_SHARP_){
return p1__21298_SHARP_.plusSeconds((1));
});})(from__$1))
,from__$1);
});

java.time.ZonedDateTime.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__21303 = cljs.core.iterate(((function (from__$1){
return (function (p1__21299_SHARP_){
return p1__21299_SHARP_.plusSeconds((1));
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (G__21303,from__$1){
return (function (p1__21300_SHARP_){
return tick.core._LT_(p1__21300_SHARP_,to);
});})(G__21303,from__$1))
,G__21303);
} else {
return G__21303;
}
});

java.time.ZonedDateTime.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__21304 = cljs.core.iterate(((function (from__$1){
return (function (p1__21301_SHARP_){
return p1__21301_SHARP_.plus(step);
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (G__21304,from__$1){
return (function (p1__21302_SHARP_){
return tick.core._LT_(p1__21302_SHARP_,to);
});})(G__21304,from__$1))
,G__21304);
} else {
return G__21304;
}
});
java.time.LocalDate.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate(((function (from__$1){
return (function (p1__21305_SHARP_){
return p1__21305_SHARP_.plusDays((1));
});})(from__$1))
,from__$1);
});

java.time.LocalDate.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__21310 = cljs.core.iterate(((function (from__$1){
return (function (p1__21306_SHARP_){
return p1__21306_SHARP_.plusDays((1));
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (G__21310,from__$1){
return (function (p1__21307_SHARP_){
return tick.core._LT_(p1__21307_SHARP_,to);
});})(G__21310,from__$1))
,G__21310);
} else {
return G__21310;
}
});

java.time.LocalDate.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__21311 = cljs.core.iterate(((function (from__$1){
return (function (p1__21308_SHARP_){
return p1__21308_SHARP_.plusDays(step);
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (G__21311,from__$1){
return (function (p1__21309_SHARP_){
return tick.core._LT_(p1__21309_SHARP_,to);
});})(G__21311,from__$1))
,G__21311);
} else {
return G__21311;
}
});
tick.core.inc = (function tick$core$inc(t){
return tick.core.forward_number(t,(1));
});
tick.core.dec = (function tick$core$dec(t){
return tick.core.backward_number(t,(1));
});
tick.core.tomorrow = (function tick$core$tomorrow(){
return tick.core.forward_number(tick.core.today(),(1));
});
tick.core.yesterday = (function tick$core$yesterday(){
return tick.core.backward_number(tick.core.today(),(1));
});
java.time.LocalDateTime.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate(((function (from__$1){
return (function (p1__21312_SHARP_){
return p1__21312_SHARP_.plusSeconds((1));
});})(from__$1))
,from__$1);
});

java.time.LocalDateTime.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__21317 = cljs.core.iterate(((function (from__$1){
return (function (p1__21313_SHARP_){
return p1__21313_SHARP_.plusSeconds((1));
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (G__21317,from__$1){
return (function (p1__21314_SHARP_){
return tick.core._LT_(p1__21314_SHARP_,to);
});})(G__21317,from__$1))
,G__21317);
} else {
return G__21317;
}
});

java.time.LocalDateTime.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__21318 = cljs.core.iterate(((function (from__$1){
return (function (p1__21315_SHARP_){
return p1__21315_SHARP_.plus(step);
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (G__21318,from__$1){
return (function (p1__21316_SHARP_){
return tick.core._LT_(p1__21316_SHARP_,to);
});})(G__21318,from__$1))
,G__21318);
} else {
return G__21318;
}
});
java.time.YearMonth.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.YearMonth.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate(((function (from__$1){
return (function (p1__21319_SHARP_){
return p1__21319_SHARP_.plusMonths((1));
});})(from__$1))
,from__$1);
});

java.time.YearMonth.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__21324 = cljs.core.iterate(((function (from__$1){
return (function (p1__21320_SHARP_){
return p1__21320_SHARP_.plusMonths((1));
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (G__21324,from__$1){
return (function (p1__21321_SHARP_){
return tick.core._LT_(p1__21321_SHARP_,to);
});})(G__21324,from__$1))
,G__21324);
} else {
return G__21324;
}
});

java.time.YearMonth.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__21325 = cljs.core.iterate(((function (from__$1){
return (function (p1__21322_SHARP_){
return p1__21322_SHARP_.plus(step);
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (G__21325,from__$1){
return (function (p1__21323_SHARP_){
return tick.core._LT_(p1__21323_SHARP_,to);
});})(G__21325,from__$1))
,G__21325);
} else {
return G__21325;
}
});
java.time.Year.prototype.tick$core$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.tick$core$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate(((function (from__$1){
return (function (p1__21326_SHARP_){
return p1__21326_SHARP_.plusYears((1));
});})(from__$1))
,from__$1);
});

java.time.Year.prototype.tick$core$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__21331 = cljs.core.iterate(((function (from__$1){
return (function (p1__21327_SHARP_){
return p1__21327_SHARP_.plusYears((1));
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (G__21331,from__$1){
return (function (p1__21328_SHARP_){
return tick.core._LT_(p1__21328_SHARP_,to);
});})(G__21331,from__$1))
,G__21331);
} else {
return G__21331;
}
});

java.time.Year.prototype.tick$core$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__21332 = cljs.core.iterate(((function (from__$1){
return (function (p1__21329_SHARP_){
return p1__21329_SHARP_.plus(step);
});})(from__$1))
,from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (G__21332,from__$1){
return (function (p1__21330_SHARP_){
return tick.core._LT_(p1__21330_SHARP_,to);
});})(G__21332,from__$1))
,G__21332);
} else {
return G__21332;
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(t,divisor) : m__4434__auto__.call(null,t,divisor));
} else {
var m__4431__auto__ = (tick.core.divide["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(t,divisor) : m__4431__auto__.call(null,t,divisor));
} else {
throw cljs.core.missing_protocol("IDivisible.divide",t);
}
}
}
});

goog.object.set(tick.core.IDivisible,"string",true);

var G__21333_21336 = tick.core.divide;
var G__21334_21337 = "string";
var G__21335_21338 = ((function (G__21333_21336,G__21334_21337){
return (function (s,d){
return tick.core.divide(tick.core.parse(s),d);
});})(G__21333_21336,G__21334_21337))
;
goog.object.set(G__21333_21336,G__21334_21337,G__21335_21338);

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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(divisor,duration) : m__4434__auto__.call(null,divisor,duration));
} else {
var m__4431__auto__ = (tick.core.divide_duration["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(divisor,duration) : m__4431__auto__.call(null,divisor,duration));
} else {
throw cljs.core.missing_protocol("IDivisibleDuration.divide-duration",divisor);
}
}
}
});

goog.object.set(tick.core.IDivisibleDuration,"number",true);

var G__21339_21342 = tick.core.divide_duration;
var G__21340_21343 = "number";
var G__21341_21344 = ((function (G__21339_21342,G__21340_21343){
return (function (n,duration){
return duration.dividedBy(n);
});})(G__21339_21342,G__21340_21343))
;
goog.object.set(G__21339_21342,G__21340_21343,G__21341_21344);

java.time.Duration.prototype.tick$core$IDivisibleDuration$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Duration.prototype.tick$core$IDivisibleDuration$divide_duration$arity$2 = (function (divisor,duration){
var divisor__$1 = this;
return (cljc.java_time.duration.get_seconds(duration) / cljc.java_time.duration.get_seconds(divisor__$1));
});
java.time.Duration.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Duration.prototype.tick$core$IDivisible$divide$arity$2 = (function (d,x){
var d__$1 = this;
return tick.core.divide_duration(x,d__$1);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.beginning["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeSpan.beginning",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.end["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeSpan.end",_);
}
}
}
});

tick.core.duration = (function tick$core$duration(x){
return cljc.java_time.duration.between(tick.core.beginning(x),tick.core.end(x));
});
tick.core.beginning_composite = (function tick$core$beginning_composite(m){
var map__21345 = m;
var map__21345__$1 = (((((!((map__21345 == null))))?(((((map__21345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21345):map__21345);
var beginning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21345__$1,cljs.core.cst$kw$tick_SLASH_beginning);
var intervals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21345__$1,cljs.core.cst$kw$tick_SLASH_intervals);
if(cljs.core.truth_(intervals)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_SLASH_beginning,intervals));
} else {
return beginning;
}
});
tick.core.end_composite = (function tick$core$end_composite(m){
var map__21347 = m;
var map__21347__$1 = (((((!((map__21347 == null))))?(((((map__21347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21347):map__21347);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21347__$1,cljs.core.cst$kw$tick_SLASH_end);
var intervals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21347__$1,cljs.core.cst$kw$tick_SLASH_intervals);
if(cljs.core.truth_(intervals)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_SLASH_end,intervals));
} else {
return end;
}
});
cljs.core.PersistentArrayMap.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (m){
var m__$1 = this;
return tick.core.beginning_composite(m__$1);
});

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeSpan$end$arity$1 = (function (m){
var m__$1 = this;
return tick.core.end_composite(m__$1);
});
cljs.core.PersistentHashMap.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (m){
var m__$1 = this;
return tick.core.beginning_composite(m__$1);
});

cljs.core.PersistentHashMap.prototype.tick$core$ITimeSpan$end$arity$1 = (function (m){
var m__$1 = this;
return tick.core.end_composite(m__$1);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(v1,v2) : m__4434__auto__.call(null,v1,v2));
} else {
var m__4431__auto__ = (tick.core.between["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(v1,v2) : m__4431__auto__.call(null,v1,v2));
} else {
throw cljs.core.missing_protocol("IBetween.between",v1);
}
}
}
});

java.time.LocalDate.prototype.tick$core$IBetween$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$core$IBetween$between$arity$2 = (function (v1,v2){
var v1__$1 = this;
return cljc.java_time.period.between(v1__$1,tick.core.date(v2));
});

java.time.LocalDateTime.prototype.tick$core$IBetween$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$core$IBetween$between$arity$2 = (function (v1,v2){
var v1__$1 = this;
return cljc.java_time.duration.between(v1__$1,tick.core.date_time(v2));
});

java.time.Instant.prototype.tick$core$IBetween$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$IBetween$between$arity$2 = (function (v1,v2){
var v1__$1 = this;
return cljc.java_time.duration.between(v1__$1,tick.core.instant(v2));
});

goog.object.set(tick.core.IBetween,"string",true);

var G__21349_21352 = tick.core.between;
var G__21350_21353 = "string";
var G__21351_21354 = ((function (G__21349_21352,G__21350_21353){
return (function (v1,v2){
return tick.core.between(tick.core.parse(v1),tick.core.parse(v2));
});})(G__21349_21352,G__21350_21353))
;
goog.object.set(G__21349_21352,G__21350_21353,G__21351_21354);

Date.prototype.tick$core$IBetween$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tick$core$IBetween$between$arity$2 = (function (x,y){
var x__$1 = this;
return tick.core.between(tick.core.instant(x__$1),tick.core.instant(y));
});
/**
 * Does the span of time contain the given event? If the given event
 *   is itself a span, then t must wholly contain the beginning and end
 *   of the event.
 */
tick.core.coincident_QMARK_ = (function tick$core$coincident_QMARK_(t,event){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.compare(tick.core.beginning(t),tick.core.beginning(event)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.compare(tick.core.end(event),tick.core.end(t)))));
});
goog.object.set(tick.core.ITimeSpan,"null",true);

var G__21355_21373 = tick.core.beginning;
var G__21356_21374 = "null";
var G__21357_21375 = ((function (G__21355_21373,G__21356_21374){
return (function (_){
return null;
});})(G__21355_21373,G__21356_21374))
;
goog.object.set(G__21355_21373,G__21356_21374,G__21357_21375);

var G__21358_21376 = tick.core.end;
var G__21359_21377 = "null";
var G__21360_21378 = ((function (G__21358_21376,G__21359_21377){
return (function (_){
return null;
});})(G__21358_21376,G__21359_21377))
;
goog.object.set(G__21358_21376,G__21359_21377,G__21360_21378);

java.time.YearMonth.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL;

java.time.YearMonth.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (ym){
var ym__$1 = this;
return tick.core.beginning(ym__$1.atDay((1)));
});

java.time.YearMonth.prototype.tick$core$ITimeSpan$end$arity$1 = (function (ym){
var ym__$1 = this;
return tick.core.end(ym__$1.atEndOfMonth());
});

java.time.Year.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (year){
var year__$1 = this;
return tick.core.beginning(year__$1.atMonth((1)));
});

java.time.Year.prototype.tick$core$ITimeSpan$end$arity$1 = (function (year){
var year__$1 = this;
return tick.core.end(year__$1.atMonth((12)));
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
return tick.core.instant(i__$1);
});

Date.prototype.tick$core$ITimeSpan$end$arity$1 = (function (i){
var i__$1 = this;
return tick.core.instant(i__$1);
});

java.time.LocalDate.prototype.tick$core$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$core$ITimeSpan$beginning$arity$1 = (function (date){
var date__$1 = this;
return date__$1.atStartOfDay();
});

java.time.LocalDate.prototype.tick$core$ITimeSpan$end$arity$1 = (function (date){
var date__$1 = this;
return tick.core.inc(date__$1).atStartOfDay();
});

goog.object.set(tick.core.ITimeSpan,"number",true);

var G__21361_21379 = tick.core.beginning;
var G__21362_21380 = "number";
var G__21363_21381 = ((function (G__21361_21379,G__21362_21380){
return (function (n){
return tick.core.beginning(tick.core.time(n));
});})(G__21361_21379,G__21362_21380))
;
goog.object.set(G__21361_21379,G__21362_21380,G__21363_21381);

var G__21364_21382 = tick.core.end;
var G__21365_21383 = "number";
var G__21366_21384 = ((function (G__21364_21382,G__21365_21383){
return (function (n){
return tick.core.end(tick.core.time(n));
});})(G__21364_21382,G__21365_21383))
;
goog.object.set(G__21364_21382,G__21365_21383,G__21366_21384);

goog.object.set(tick.core.ITimeSpan,"string",true);

var G__21367_21385 = tick.core.beginning;
var G__21368_21386 = "string";
var G__21369_21387 = ((function (G__21367_21385,G__21368_21386){
return (function (s){
return tick.core.beginning(tick.core.parse(s));
});})(G__21367_21385,G__21368_21386))
;
goog.object.set(G__21367_21385,G__21368_21386,G__21369_21387);

var G__21370_21388 = tick.core.end;
var G__21371_21389 = "string";
var G__21372_21390 = ((function (G__21370_21388,G__21371_21389){
return (function (s){
return tick.core.end(tick.core.parse(s));
});})(G__21370_21388,G__21371_21389))
;
goog.object.set(G__21370_21388,G__21371_21389,G__21372_21390);

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
return date__$1.atTime(tick.core.time(t));
});

java.time.LocalDateTime.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$core$ITimeReify$in$arity$2 = (function (ldt,z){
var ldt__$1 = this;
return ldt__$1.atZone(z);
});

java.time.LocalDateTime.prototype.tick$core$ITimeReify$offset_by$arity$2 = (function (ldt,offset){
var ldt__$1 = this;
return ldt__$1.atZone(tick.core.zone_offset(offset));
});

java.time.Instant.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$core$ITimeReify$in$arity$2 = (function (t,z){
var t__$1 = this;
return cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$2(t__$1,z);
});

java.time.Instant.prototype.tick$core$ITimeReify$offset_by$arity$2 = (function (t,offset){
var t__$1 = this;
return cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$2(t__$1,tick.core.zone_offset(offset));
});

java.time.ZonedDateTime.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.tick$core$ITimeReify$in$arity$2 = (function (t,z){
var t__$1 = this;
return t__$1.withZoneSameInstant(tick.core.zone(z));
});

Date.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tick$core$ITimeReify$in$arity$2 = (function (t,z){
var t__$1 = this;
return tick.core.in$(tick.core.instant(t__$1),tick.core.zone(z));
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(t) : m__4434__auto__.call(null,t));
} else {
var m__4431__auto__ = (tick.core.local_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(t) : m__4431__auto__.call(null,t));
} else {
throw cljs.core.missing_protocol("ILocalTime.local?",t);
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

var G__21391_21394 = tick.core.local_QMARK_;
var G__21392_21395 = "null";
var G__21393_21396 = ((function (G__21391_21394,G__21392_21395){
return (function (_){
return null;
});})(G__21391_21394,G__21392_21395))
;
goog.object.set(G__21391_21394,G__21392_21395,G__21393_21396);

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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.min_of_type["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("MinMax.min-of-type",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.core.max_of_type["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("MinMax.max-of-type",_);
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

var G__21397_21403 = tick.core.min_of_type;
var G__21398_21404 = "null";
var G__21399_21405 = ((function (G__21397_21403,G__21398_21404){
return (function (_){
return cljc.java_time.instant.min;
});})(G__21397_21403,G__21398_21404))
;
goog.object.set(G__21397_21403,G__21398_21404,G__21399_21405);

var G__21400_21406 = tick.core.max_of_type;
var G__21401_21407 = "null";
var G__21402_21408 = ((function (G__21400_21406,G__21401_21407){
return (function (_){
return cljc.java_time.instant.max;
});})(G__21400_21406,G__21401_21407))
;
goog.object.set(G__21400_21406,G__21401_21407,G__21402_21408);
tick.core.ago = (function tick$core$ago(dur){
return tick.core.backward_duration(tick.core.now(),dur);
});
tick.core.hence = (function tick$core$hence(dur){
return tick.core.forward_duration(tick.core.now(),dur);
});
tick.core.midnight_QMARK_ = (function tick$core$midnight_QMARK_(t){
return cljc.java_time.duration.between(t,tick.core.beginning(tick.core.date(t))).isZero();
});
