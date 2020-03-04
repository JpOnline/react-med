// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('tick.interval');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('tick.core');
goog.require('cljc.java_time.duration');
goog.require('java.time');
goog.require('java.time.temporal');
goog.require('cljs.java_time.extend_eq_and_compare');
tick.interval.make_interval = (function tick$interval$make_interval(beginning,end){
if(cljs.core.truth_(tick.core._LT_(beginning,end))){
} else {
throw (new Error("Assert failed: (t/< beginning end)"));
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tick_SLASH_beginning,beginning,cljs.core.cst$kw$tick_SLASH_end,end], null);
});
tick.interval.temporal_QMARK_ = (function tick$interval$temporal_QMARK_(o){
return java.time.temporal.Temporal.isPrototypeOf(cljs.core.type(o));
});
tick.interval.temporal_amount_QMARK_ = (function tick$interval$temporal_amount_QMARK_(o){
return java.time.temporal.TemporalAmount.isPrototypeOf(cljs.core.type(o));
});

/**
 * @interface
 */
tick.interval.ITimeSpanable = function(){};

/**
 * Return a value of a type that satisfies t/ITimeSpan
 */
tick.interval.temporal_value = (function tick$interval$temporal_value(_){
if((((!((_ == null)))) && ((!((_.tick$interval$ITimeSpanable$temporal_value$arity$1 == null)))))){
return _.tick$interval$ITimeSpanable$temporal_value$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.interval.temporal_value[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (tick.interval.temporal_value["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeSpanable.temporal-value",_);
}
}
}
});

java.time.YearMonth.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.YearMonth.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (ym){
var ym__$1 = this;
return ym__$1;
});

java.time.Year.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (y){
var y__$1 = this;
return y__$1;
});

java.time.ZonedDateTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (zdt){
var zdt__$1 = this;
return zdt__$1;
});

java.time.Instant.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
});

Date.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (d){
var d__$1 = this;
return tick.core.instant(d__$1);
});

java.time.LocalDate.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (d){
var d__$1 = this;
return d__$1;
});

goog.object.set(tick.interval.ITimeSpanable,"string",true);

var G__21411_21417 = tick.interval.temporal_value;
var G__21412_21418 = "string";
var G__21413_21419 = ((function (G__21411_21417,G__21412_21418){
return (function (s){
return tick.interval.temporal_value(tick.core.parse(s));
});})(G__21411_21417,G__21412_21418))
;
goog.object.set(G__21411_21417,G__21412_21418,G__21413_21419);

goog.object.set(tick.interval.ITimeSpanable,"function",true);

var G__21414_21420 = tick.interval.temporal_value;
var G__21415_21421 = "function";
var G__21416_21422 = ((function (G__21414_21420,G__21415_21421){
return (function (f){
return tick.interval.temporal_value((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21414_21420,G__21415_21421))
;
goog.object.set(G__21414_21420,G__21415_21421,G__21416_21422);

java.time.LocalTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (t){
var t__$1 = this;
return t__$1;
});

java.time.OffsetDateTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.OffsetDateTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (odt){
var odt__$1 = this;
return odt__$1;
});

java.time.LocalDateTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (ldt){
var ldt__$1 = this;
return ldt__$1;
});
tick.interval.new_interval = (function tick$interval$new_interval(v1,v2){
var t1 = tick.core.beginning(tick.interval.temporal_value(v1));
var t2 = tick.core.end(tick.interval.temporal_value(v2));
if(cljs.core.truth_(tick.core._LT_(t1,t2))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tick_SLASH_beginning,t1,cljs.core.cst$kw$tick_SLASH_end,t2], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Interval must span between two times, the first must be before the second",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tick_SLASH_beginning,v1,cljs.core.cst$kw$tick_SLASH_end,v2], null));
}
});
tick.interval.extend = (function tick$interval$extend(ival,dur){
return tick.interval.make_interval(tick.core.beginning(ival),tick.core.forward_duration(tick.core.end(ival),dur));
});
tick.interval.scale = (function tick$interval$scale(ival,factor){
return tick.interval.make_interval(tick.core.beginning(ival),tick.core.forward_duration(tick.core.beginning(ival),cljc.java_time.duration.multiplied_by(tick.core.duration(ival),factor)));
});
cljs.core.PersistentArrayMap.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (ival,d){
var ival__$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ival__$1,cljs.core.cst$kw$tick_SLASH_beginning,((function (ival__$1){
return (function (p1__21423_SHARP_){
return tick.core.forward_duration(p1__21423_SHARP_,d);
});})(ival__$1))
),cljs.core.cst$kw$tick_SLASH_end,((function (ival__$1){
return (function (p1__21424_SHARP_){
return tick.core.forward_duration(p1__21424_SHARP_,d);
});})(ival__$1))
);
});

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (ival,d){
var ival__$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ival__$1,cljs.core.cst$kw$tick_SLASH_beginning,((function (ival__$1){
return (function (p1__21425_SHARP_){
return tick.core.backward_duration(p1__21425_SHARP_,d);
});})(ival__$1))
),cljs.core.cst$kw$tick_SLASH_end,((function (ival__$1){
return (function (p1__21426_SHARP_){
return tick.core.backward_duration(p1__21426_SHARP_,d);
});})(ival__$1))
);
});
cljs.core.PersistentArrayMap.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeReify$on$arity$2 = (function (i,date){
var i__$1 = this;
return tick.interval.new_interval(tick.core.on(tick.core.beginning(i__$1),date),tick.core.on(tick.core.end(i__$1),date));
});

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeReify$in$arity$2 = (function (i,zone){
var i__$1 = this;
return tick.interval.new_interval(tick.core.in$(tick.core.beginning(i__$1),zone),tick.core.in$(tick.core.end(i__$1),zone));
});
tick.interval.bounds = (function tick$interval$bounds(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21428 = arguments.length;
var i__4731__auto___21429 = (0);
while(true){
if((i__4731__auto___21429 < len__4730__auto___21428)){
args__4736__auto__.push((arguments[i__4731__auto___21429]));

var G__21430 = (i__4731__auto___21429 + (1));
i__4731__auto___21429 = G__21430;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick.interval.bounds.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick.interval.bounds.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return tick.interval.make_interval(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tick.core.beginning,args)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tick.core.end,args)));
});

tick.interval.bounds.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick.interval.bounds.cljs$lang$applyTo = (function (seq21427){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21427));
});

tick.interval.am = (function tick$interval$am(date){
return tick.interval.new_interval(tick.core.beginning(date),tick.core.noon.cljs$core$IFn$_invoke$arity$1(date));
});
tick.interval.pm = (function tick$interval$pm(date){
return tick.interval.new_interval(tick.core.noon.cljs$core$IFn$_invoke$arity$1(date),tick.core.end(date));
});
tick.interval.precedes_QMARK_ = (function tick$interval$precedes_QMARK_(x,y){
return tick.core._LT_(tick.core.end(x),tick.core.beginning(y));
});
tick.interval.equals_QMARK_ = (function tick$interval$equals_QMARK_(x,y){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.beginning(x),tick.core.beginning(y))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.end(x),tick.core.end(y))));
});
tick.interval.meets_QMARK_ = (function tick$interval$meets_QMARK_(x,y){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.end(x),tick.core.beginning(y));
});
tick.interval.overlaps_QMARK_ = (function tick$interval$overlaps_QMARK_(x,y){
var and__4120__auto__ = tick.core._LT_(tick.core.beginning(x),tick.core.beginning(y));
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = tick.core._GT_(tick.core.end(x),tick.core.beginning(y));
if(cljs.core.truth_(and__4120__auto____$1)){
return tick.core._LT_(tick.core.end(x),tick.core.end(y));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
tick.interval.during_QMARK_ = (function tick$interval$during_QMARK_(x,y){
var and__4120__auto__ = tick.core._GT_(tick.core.beginning(x),tick.core.beginning(y));
if(cljs.core.truth_(and__4120__auto__)){
return tick.core._LT_(tick.core.end(x),tick.core.end(y));
} else {
return and__4120__auto__;
}
});
tick.interval.starts_QMARK_ = (function tick$interval$starts_QMARK_(x,y){
var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.beginning(x),tick.core.beginning(y));
if(and__4120__auto__){
return tick.core._LT_(tick.core.end(x),tick.core.end(y));
} else {
return and__4120__auto__;
}
});
tick.interval.finishes_QMARK_ = (function tick$interval$finishes_QMARK_(x,y){
var and__4120__auto__ = tick.core._GT_(tick.core.beginning(x),tick.core.beginning(y));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.end(x),tick.core.end(y));
} else {
return and__4120__auto__;
}
});
/**
 * The converse of a basic relation.
 */
tick.interval.conv = (function tick$interval$conv(f){
return (function (x,y){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(y,x) : f.call(null,y,x));
});
});
tick.interval.preceded_by_QMARK_ = (function tick$interval$preceded_by_QMARK_(x,y){
var fexpr__21431 = tick.interval.conv(tick.interval.precedes_QMARK_);
return (fexpr__21431.cljs$core$IFn$_invoke$arity$2 ? fexpr__21431.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__21431.call(null,x,y));
});
tick.interval.met_by_QMARK_ = (function tick$interval$met_by_QMARK_(x,y){
var fexpr__21432 = tick.interval.conv(tick.interval.meets_QMARK_);
return (fexpr__21432.cljs$core$IFn$_invoke$arity$2 ? fexpr__21432.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__21432.call(null,x,y));
});
tick.interval.overlapped_by_QMARK_ = (function tick$interval$overlapped_by_QMARK_(x,y){
var fexpr__21433 = tick.interval.conv(tick.interval.overlaps_QMARK_);
return (fexpr__21433.cljs$core$IFn$_invoke$arity$2 ? fexpr__21433.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__21433.call(null,x,y));
});
tick.interval.finished_by_QMARK_ = (function tick$interval$finished_by_QMARK_(x,y){
var fexpr__21434 = tick.interval.conv(tick.interval.finishes_QMARK_);
return (fexpr__21434.cljs$core$IFn$_invoke$arity$2 ? fexpr__21434.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__21434.call(null,x,y));
});
tick.interval.contains_QMARK_ = (function tick$interval$contains_QMARK_(x,y){
var fexpr__21435 = tick.interval.conv(tick.interval.during_QMARK_);
return (fexpr__21435.cljs$core$IFn$_invoke$arity$2 ? fexpr__21435.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__21435.call(null,x,y));
});
tick.interval.started_by_QMARK_ = (function tick$interval$started_by_QMARK_(x,y){
var fexpr__21436 = tick.interval.conv(tick.interval.starts_QMARK_);
return (fexpr__21436.cljs$core$IFn$_invoke$arity$2 ? fexpr__21436.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__21436.call(null,x,y));
});
tick.interval.relation__GT_kw = cljs.core.PersistentHashMap.fromArrays([tick.interval.contains_QMARK_,tick.interval.starts_QMARK_,tick.interval.started_by_QMARK_,tick.interval.overlaps_QMARK_,tick.interval.equals_QMARK_,tick.interval.meets_QMARK_,tick.interval.met_by_QMARK_,tick.interval.finished_by_QMARK_,tick.interval.preceded_by_QMARK_,tick.interval.precedes_QMARK_,tick.interval.during_QMARK_,tick.interval.overlapped_by_QMARK_,tick.interval.finishes_QMARK_],[cljs.core.cst$kw$contains,cljs.core.cst$kw$starts,cljs.core.cst$kw$started_DASH_by,cljs.core.cst$kw$overlaps,cljs.core.cst$kw$equals,cljs.core.cst$kw$meets,cljs.core.cst$kw$met_DASH_by,cljs.core.cst$kw$finished_DASH_by,cljs.core.cst$kw$preceded_DASH_by,cljs.core.cst$kw$precedes,cljs.core.cst$kw$during,cljs.core.cst$kw$overlapped_DASH_by,cljs.core.cst$kw$finishes]);
tick.interval.basic_relations = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.precedes_QMARK_,tick.interval.meets_QMARK_,tick.interval.overlaps_QMARK_,tick.interval.finished_by_QMARK_,tick.interval.contains_QMARK_,tick.interval.starts_QMARK_,tick.interval.equals_QMARK_,tick.interval.started_by_QMARK_,tick.interval.during_QMARK_,tick.interval.finishes_QMARK_,tick.interval.overlapped_by_QMARK_,tick.interval.met_by_QMARK_,tick.interval.preceded_by_QMARK_], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tick.interval.GeneralRelation = (function (relations,__meta,__extmap,__hash){
this.relations = relations;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
tick.interval.GeneralRelation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

tick.interval.GeneralRelation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k21438,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__21443 = k21438;
var G__21443__$1 = (((G__21443 instanceof cljs.core.Keyword))?G__21443.fqn:null);
switch (G__21443__$1) {
case "relations":
return self__.relations;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21438,else__4388__auto__);

}
});

tick.interval.GeneralRelation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__21444){
var vec__21445 = p__21444;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21445,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21445,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

tick.interval.GeneralRelation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#tick.interval.GeneralRelation{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relations,self__.relations],null))], null),self__.__extmap));
});

tick.interval.GeneralRelation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21437){
var self__ = this;
var G__21437__$1 = this;
return (new cljs.core.RecordIter((0),G__21437__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$relations], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

tick.interval.GeneralRelation.prototype.call = (function (self__,x,y){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core.some(((function (_,self____$1){
return (function (f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y)))){
return f;
} else {
return null;
}
});})(_,self____$1))
,self__.relations);
});

tick.interval.GeneralRelation.prototype.apply = (function (self__,args21442){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21442)));
});

tick.interval.GeneralRelation.prototype.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var self__ = this;
var _ = this;
return cljs.core.some(((function (_){
return (function (f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y)))){
return f;
} else {
return null;
}
});})(_))
,self__.relations);
});

tick.interval.GeneralRelation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

tick.interval.GeneralRelation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new tick.interval.GeneralRelation(self__.relations,self__.__meta,self__.__extmap,self__.__hash));
});

tick.interval.GeneralRelation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

tick.interval.GeneralRelation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__21448 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-248703908 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__21448(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

tick.interval.GeneralRelation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21439,other21440){
var self__ = this;
var this21439__$1 = this;
return (((!((other21440 == null)))) && ((this21439__$1.constructor === other21440.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21439__$1.relations,other21440.relations)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21439__$1.__extmap,other21440.__extmap)));
});

tick.interval.GeneralRelation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$relations,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new tick.interval.GeneralRelation(self__.relations,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

tick.interval.GeneralRelation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__21437){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__21449 = cljs.core.keyword_identical_QMARK_;
var expr__21450 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__21452 = cljs.core.cst$kw$relations;
var G__21453 = expr__21450;
return (pred__21449.cljs$core$IFn$_invoke$arity$2 ? pred__21449.cljs$core$IFn$_invoke$arity$2(G__21452,G__21453) : pred__21449.call(null,G__21452,G__21453));
})())){
return (new tick.interval.GeneralRelation(G__21437,self__.__meta,self__.__extmap,null));
} else {
return (new tick.interval.GeneralRelation(self__.relations,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__21437),null));
}
});

tick.interval.GeneralRelation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$relations,self__.relations,null))], null),self__.__extmap));
});

tick.interval.GeneralRelation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__21437){
var self__ = this;
var this__4384__auto____$1 = this;
return (new tick.interval.GeneralRelation(self__.relations,G__21437,self__.__extmap,self__.__hash));
});

tick.interval.GeneralRelation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

tick.interval.GeneralRelation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$relations], null);
});

tick.interval.GeneralRelation.cljs$lang$type = true;

tick.interval.GeneralRelation.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"tick.interval/GeneralRelation",null,(1),null));
});

tick.interval.GeneralRelation.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"tick.interval/GeneralRelation");
});

/**
 * Positional factory function for tick.interval/GeneralRelation.
 */
tick.interval.__GT_GeneralRelation = (function tick$interval$__GT_GeneralRelation(relations){
return (new tick.interval.GeneralRelation(relations,null,null,null));
});

/**
 * Factory function for tick.interval/GeneralRelation, taking a map of keywords to field values.
 */
tick.interval.map__GT_GeneralRelation = (function tick$interval$map__GT_GeneralRelation(G__21441){
var extmap__4424__auto__ = (function (){var G__21454 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21441,cljs.core.cst$kw$relations);
if(cljs.core.record_QMARK_(G__21441)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21454);
} else {
return G__21454;
}
})();
return (new tick.interval.GeneralRelation(cljs.core.cst$kw$relations.cljs$core$IFn$_invoke$arity$1(G__21441),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

tick.interval.new_relation = (function tick$interval$new_relation(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21457 = arguments.length;
var i__4731__auto___21458 = (0);
while(true){
if((i__4731__auto___21458 < len__4730__auto___21457)){
args__4736__auto__.push((arguments[i__4731__auto___21458]));

var G__21459 = (i__4731__auto___21458 + (1));
i__4731__auto___21458 = G__21459;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic = (function (basic_relations){
return tick.interval.__GT_GeneralRelation(basic_relations);
});

tick.interval.new_relation.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick.interval.new_relation.cljs$lang$applyTo = (function (seq21456){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21456));
});

/**
 * A function to determine the (basic) relation between two intervals.
 */
tick.interval.basic_relation = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.interval.new_relation,tick.interval.basic_relations);
tick.interval.relation = (function tick$interval$relation(x,y){
var G__21460 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x,y) : tick.interval.basic_relation.call(null,x,y));
return (tick.interval.relation__GT_kw.cljs$core$IFn$_invoke$arity$1 ? tick.interval.relation__GT_kw.cljs$core$IFn$_invoke$arity$1(G__21460) : tick.interval.relation__GT_kw.call(null,G__21460));
});
/**
 * Return the complement of the general relation. The complement ~r of
 *   a relation r is the relation consisting of all basic relations not
 *   in r.
 */
tick.interval.complement_r = (function tick$interval$complement_r(r){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,cljs.core.cst$kw$relations,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.cst$kw$relations.cljs$core$IFn$_invoke$arity$1(r)),tick.interval.basic_relations));
});
tick.interval.not_yet_implemented = (function tick$interval$not_yet_implemented(){
return (new Error("Not yet implemented"));
});
/**
 * Return the composition of r and s
 */
tick.interval.compose_r = (function tick$interval$compose_r(r,s){
throw tick.interval.not_yet_implemented();
});
/**
 * Return the converse of the given general relation. The converse !r
 *   of a relation r is the relation consisting of the converses of all
 *   basic relations in r.
 */
tick.interval.converse_r = (function tick$interval$converse_r(r){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,cljs.core.cst$kw$relations,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tick.interval.conv,cljs.core.cst$kw$relations.cljs$core$IFn$_invoke$arity$1(r)));
});
/**
 * Return the intersection of the r with s
 */
tick.interval.intersection_r = (function tick$interval$intersection_r(r,s){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_runtime_DASH_asserts_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$alpha,cljs.core.cst$sym$_STAR_runtime_DASH_asserts_STAR_,"target/public/cljs-out/prod/cljs/spec/alpha.cljs",20,1,true,1477,1479,cljs.core.List.EMPTY,null,((cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(r,(function (p1__21461_SHARP_){
return (p1__21461_SHARP_ instanceof tick.interval.GeneralRelation);
}));
} else {
}
} else {
}

tick.interval.__GT_GeneralRelation(clojure.set.intersection.cljs$core$IFn$_invoke$arity$1(cljs.core.set(cljs.core.cst$kw$relations.cljs$core$IFn$_invoke$arity$1(r))));

throw tick.interval.not_yet_implemented();
});
tick.interval.disjoint_QMARK_ = tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.interval.precedes_QMARK_,tick.interval.preceded_by_QMARK_,tick.interval.meets_QMARK_,tick.interval.met_by_QMARK_], 0));
tick.interval.concur_QMARK_ = tick.interval.complement_r(tick.interval.disjoint_QMARK_);
tick.interval.precedes_or_meets_QMARK_ = tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.interval.precedes_QMARK_,tick.interval.meets_QMARK_], 0));

/**
 * @interface
 */
tick.interval.IIntervalOps = function(){};

/**
 * Fit the interval between beginning and end, slicing off one or both ends as necessary
 */
tick.interval.slice = (function tick$interval$slice(this$,beginning,end){
if((((!((this$ == null)))) && ((!((this$.tick$interval$IIntervalOps$slice$arity$3 == null)))))){
return this$.tick$interval$IIntervalOps$slice$arity$3(this$,beginning,end);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (tick.interval.slice[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,beginning,end) : m__4434__auto__.call(null,this$,beginning,end));
} else {
var m__4431__auto__ = (tick.interval.slice["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,beginning,end) : m__4431__auto__.call(null,this$,beginning,end));
} else {
throw cljs.core.missing_protocol("IIntervalOps.slice",this$);
}
}
}
});

/**
 * Splice another interval on to this one
 */
tick.interval.splice = (function tick$interval$splice(this$,ival){
if((((!((this$ == null)))) && ((!((this$.tick$interval$IIntervalOps$splice$arity$2 == null)))))){
return this$.tick$interval$IIntervalOps$splice$arity$2(this$,ival);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (tick.interval.splice[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,ival) : m__4434__auto__.call(null,this$,ival));
} else {
var m__4431__auto__ = (tick.interval.splice["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,ival) : m__4431__auto__.call(null,this$,ival));
} else {
throw cljs.core.missing_protocol("IIntervalOps.splice",this$);
}
}
}
});

/**
 * Split ival into 2 intervals at t, returned as a 2-element vector
 */
tick.interval.split = (function tick$interval$split(this$,t){
if((((!((this$ == null)))) && ((!((this$.tick$interval$IIntervalOps$split$arity$2 == null)))))){
return this$.tick$interval$IIntervalOps$split$arity$2(this$,t);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (tick.interval.split[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,t) : m__4434__auto__.call(null,this$,t));
} else {
var m__4431__auto__ = (tick.interval.split["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,t) : m__4431__auto__.call(null,this$,t));
} else {
throw cljs.core.missing_protocol("IIntervalOps.split",this$);
}
}
}
});

tick.interval.split_with_assert = (function tick$interval$split_with_assert(ival,t){
if(cljs.core.truth_((function (){var and__4120__auto__ = tick.core._LT_(tick.core.beginning(ival),t);
if(cljs.core.truth_(and__4120__auto__)){
return tick.core._LT_(t,tick.core.end(ival));
} else {
return and__4120__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (t/< (t/beginning ival) t) (t/< t (t/end ival)))"));
}

return tick.interval.split(ival,t);
});
tick.interval.slice_interval = (function tick$interval$slice_interval(ival,beginning,end){
var beginning__$1 = tick.core.max.cljs$core$IFn$_invoke$arity$variadic(tick.core.beginning(ival),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([beginning], 0));
var end__$1 = tick.core.min.cljs$core$IFn$_invoke$arity$variadic(tick.core.end(ival),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([end], 0));
if(cljs.core.truth_(tick.core._LT_(beginning__$1,end__$1))){
if(cljs.core.associative_QMARK_(ival)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ival,cljs.core.cst$kw$tick_SLASH_beginning,beginning__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tick_SLASH_end,end__$1], 0));
} else {
return tick.interval.make_interval(beginning__$1,end__$1);
}
} else {
return null;
}
});
tick.interval.split_interval = (function tick$interval$split_interval(ival,t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.slice_interval(ival,tick.core.beginning(ival),t),tick.interval.slice_interval(ival,t,tick.core.end(ival))], null);
});
tick.interval.flatten = (function tick$interval$flatten(s){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
var temp__5733__auto__ = cljs.core.cst$kw$tick_SLASH_intervals.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5733__auto__)){
var ivals = temp__5733__auto__;
return ivals;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
});
cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
var temp__5733__auto__ = cljs.core.cst$kw$tick_SLASH_intervals.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var intervals = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$tick_SLASH_intervals,cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (intervals,temp__5733__auto__,this$__$1){
return (function (p1__21462_SHARP_){
return tick.interval.slice(p1__21462_SHARP_,beginning,end);
});})(intervals,temp__5733__auto__,this$__$1))
,intervals)));
} else {
return tick.interval.slice_interval(this$__$1,beginning,end);
}
});

cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,other){
var this$__$1 = this;
var this_intervals = cljs.core.cst$kw$tick_SLASH_intervals.cljs$core$IFn$_invoke$arity$1(this$__$1);
var other_intervals = cljs.core.cst$kw$tick_SLASH_intervals.cljs$core$IFn$_invoke$arity$1(other);
if(cljs.core.truth_((function (){var and__4120__auto__ = this_intervals;
if(cljs.core.truth_(and__4120__auto__)){
return other_intervals;
} else {
return and__4120__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,cljs.core.cst$kw$tick_SLASH_intervals,cljs.core.concat,other_intervals);
} else {
if(cljs.core.truth_(this_intervals)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,cljs.core.cst$kw$tick_SLASH_intervals,cljs.core.conj,other);
} else {
if(cljs.core.truth_(other_intervals)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(other,cljs.core.cst$kw$tick_SLASH_intervals,cljs.core.conj,this$__$1);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tick_SLASH_intervals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1,other], null)], null);

}
}
}
});

cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
var temp__5733__auto__ = cljs.core.cst$kw$tick_SLASH_intervals.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var intervals = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$tick_SLASH_intervals,cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (intervals,temp__5733__auto__,this$__$1){
return (function (p1__21463_SHARP_){
return tick.interval.slice(p1__21463_SHARP_,tick.core.beginning(this$__$1),t);
});})(intervals,temp__5733__auto__,this$__$1))
,intervals))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$tick_SLASH_intervals,cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (intervals,temp__5733__auto__,this$__$1){
return (function (p1__21464_SHARP_){
return tick.interval.slice(p1__21464_SHARP_,t,tick.core.end(this$__$1));
});})(intervals,temp__5733__auto__,this$__$1))
,intervals)))], null);
} else {
return tick.interval.split_interval(this$__$1,t);
}
});

java.time.LocalDate.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.interval.slice_interval(this$__$1,beginning,end);
});

java.time.LocalDate.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$this,this$__$1,cljs.core.cst$kw$interval,ival], null));
});

java.time.LocalDate.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.interval.split_interval(this$__$1,t);
});

java.time.YearMonth.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL;

java.time.YearMonth.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.interval.slice_interval(this$__$1,beginning,end);
});

java.time.YearMonth.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$this,this$__$1,cljs.core.cst$kw$interval,ival], null));
});

java.time.YearMonth.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.interval.split_interval(this$__$1,t);
});

java.time.Year.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.interval.slice_interval(this$__$1,beginning,end);
});

java.time.Year.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$this,this$__$1,cljs.core.cst$kw$interval,ival], null));
});

java.time.Year.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.interval.split_interval(this$__$1,t);
});
/**
 * Return the interval representing the interval, if there is one,
 *   representing the interval of time the given intervals are
 *   concurrent.
 */
tick.interval.concur = (function tick$interval$concur(x,y){
var G__21465 = tick.interval.relation(x,y);
var G__21465__$1 = (((G__21465 instanceof cljs.core.Keyword))?G__21465.fqn:null);
switch (G__21465__$1) {
case "overlaps":
return tick.interval.slice(x,tick.core.beginning(y),tick.core.end(x));

break;
case "overlapped-by":
return tick.interval.slice(x,tick.core.beginning(x),tick.core.end(y));

break;
case "starts":
case "finishes":
case "during":
case "equals":
return x;

break;
case "started-by":
case "finished-by":
case "contains":
return tick.interval.slice(x,tick.core.beginning(y),tick.core.end(y));

break;
default:
return null;

}
});
/**
 * Return a sequence of occurances where intervals coincide (having
 *   non-nil concur intervals).
 */
tick.interval.concurrencies = (function tick$interval$concurrencies(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21474 = arguments.length;
var i__4731__auto___21475 = (0);
while(true){
if((i__4731__auto___21475 < len__4730__auto___21474)){
args__4736__auto__.push((arguments[i__4731__auto___21475]));

var G__21476 = (i__4731__auto___21475 + (1));
i__4731__auto___21475 = G__21476;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick.interval.concurrencies.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick.interval.concurrencies.cljs$core$IFn$_invoke$arity$variadic = (function (intervals){
var intervals__$1 = cljs.core.vec(intervals);
var iter__4523__auto__ = ((function (intervals__$1){
return (function tick$interval$iter__21468(s__21469){
return (new cljs.core.LazySeq(null,((function (intervals__$1){
return (function (){
var s__21469__$1 = s__21469;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__21469__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var xi = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__21469__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1){
return (function tick$interval$iter__21468_$_iter__21470(s__21471){
return (new cljs.core.LazySeq(null,((function (s__21469__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1){
return (function (){
var s__21471__$1 = s__21471;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__21471__$1);
if(temp__5735__auto____$1){
var s__21471__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21471__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__21471__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__21473 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__21472 = (0);
while(true){
if((i__21472 < size__4522__auto__)){
var yi = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__21472);
if((xi < yi)){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,xi);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,yi);
var conc = tick.interval.concur(x,y);
if(cljs.core.truth_(conc)){
cljs.core.chunk_append(b__21473,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$relation,tick.interval.relation(x,y),cljs.core.cst$kw$concur,conc], null));

var G__21477 = (i__21472 + (1));
i__21472 = G__21477;
continue;
} else {
var G__21478 = (i__21472 + (1));
i__21472 = G__21478;
continue;
}
} else {
var G__21479 = (i__21472 + (1));
i__21472 = G__21479;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21473),tick$interval$iter__21468_$_iter__21470(cljs.core.chunk_rest(s__21471__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21473),null);
}
} else {
var yi = cljs.core.first(s__21471__$2);
if((xi < yi)){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,xi);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,yi);
var conc = tick.interval.concur(x,y);
if(cljs.core.truth_(conc)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$relation,tick.interval.relation(x,y),cljs.core.cst$kw$concur,conc], null),tick$interval$iter__21468_$_iter__21470(cljs.core.rest(s__21471__$2)));
} else {
var G__21480 = cljs.core.rest(s__21471__$2);
s__21471__$1 = G__21480;
continue;
}
} else {
var G__21481 = cljs.core.rest(s__21471__$2);
s__21471__$1 = G__21481;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__21469__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1))
,null,null));
});})(s__21469__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(intervals__$1))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tick$interval$iter__21468(cljs.core.rest(s__21469__$1)));
} else {
var G__21482 = cljs.core.rest(s__21469__$1);
s__21469__$1 = G__21482;
continue;
}
} else {
return null;
}
break;
}
});})(intervals__$1))
,null,null));
});})(intervals__$1))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(intervals__$1)));
});

tick.interval.concurrencies.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick.interval.concurrencies.cljs$lang$applyTo = (function (seq21467){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21467));
});

tick.interval.interval = (function tick$interval$interval(t){
return tick.interval.new_interval(tick.core.beginning(t),tick.core.end(t));
});
cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
var G__21484 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.interval.basic_relation.call(null,x__$1,y));
var fexpr__21483 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.meets_QMARK_,tick.interval.precedes_QMARK_]);
return (fexpr__21483.cljs$core$IFn$_invoke$arity$1 ? fexpr__21483.cljs$core$IFn$_invoke$arity$1(G__21484) : fexpr__21483.call(null,G__21484));
});

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
var G__21486 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.interval.basic_relation.call(null,x__$1,y));
var fexpr__21485 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.starts_QMARK_,tick.interval.overlaps_QMARK_,tick.interval.equals_QMARK_,tick.interval.meets_QMARK_,tick.interval.finished_by_QMARK_,tick.interval.precedes_QMARK_]);
return (fexpr__21485.cljs$core$IFn$_invoke$arity$1 ? fexpr__21485.cljs$core$IFn$_invoke$arity$1(G__21486) : fexpr__21485.call(null,G__21486));
});

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
var G__21488 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.interval.basic_relation.call(null,x__$1,y));
var fexpr__21487 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.met_by_QMARK_,tick.interval.preceded_by_QMARK_]);
return (fexpr__21487.cljs$core$IFn$_invoke$arity$1 ? fexpr__21487.cljs$core$IFn$_invoke$arity$1(G__21488) : fexpr__21487.call(null,G__21488));
});

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
var G__21490 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.interval.basic_relation.call(null,x__$1,y));
var fexpr__21489 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.started_by_QMARK_,tick.interval.equals_QMARK_,tick.interval.met_by_QMARK_,tick.interval.preceded_by_QMARK_,tick.interval.overlapped_by_QMARK_,tick.interval.finishes_QMARK_]);
return (fexpr__21489.cljs$core$IFn$_invoke$arity$1 ? fexpr__21489.cljs$core$IFn$_invoke$arity$1(G__21490) : fexpr__21489.call(null,G__21490));
});
/**
 * Are all the intervals in the given set time-ordered and
 *   disjoint? This is a useful property of a collection of
 *   intervals. The given collection must contain proper intervals (that
 *   is, intervals that have finite greater-than-zero durations).
 */
tick.interval.ordered_disjoint_intervals_QMARK_ = (function tick$interval$ordered_disjoint_intervals_QMARK_(s){
var rel = tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.interval.precedes_QMARK_,tick.interval.meets_QMARK_], 0));
return (!(((function (){var G__21494 = s;
var vec__21495 = G__21494;
var seq__21496 = cljs.core.seq(vec__21495);
var first__21497 = cljs.core.first(seq__21496);
var seq__21496__$1 = cljs.core.next(seq__21496);
var x = first__21497;
var xs = seq__21496__$1;
var G__21494__$1 = G__21494;
while(true){
var vec__21498 = G__21494__$1;
var seq__21499 = cljs.core.seq(vec__21498);
var first__21500 = cljs.core.first(seq__21499);
var seq__21499__$1 = cljs.core.next(seq__21499);
var x__$1 = first__21500;
var xs__$1 = seq__21499__$1;
if((((x__$1 == null)) || ((cljs.core.first(xs__$1) == null)))){
return true;
} else {
if(cljs.core.truth_((function (){var G__21501 = x__$1;
var G__21502 = cljs.core.first(xs__$1);
return (rel.cljs$core$IFn$_invoke$arity$2 ? rel.cljs$core$IFn$_invoke$arity$2(G__21501,G__21502) : rel.call(null,G__21501,G__21502));
})())){
var G__21503 = xs__$1;
G__21494__$1 = G__21503;
continue;
} else {
return null;
}
}
break;
}
})() == null)));
});
/**
 * Is the first interval in a sequence time-ordered and disjoint with
 *   respect to the second? Note, only compares first two in a
 *   sequence. Used by functions to ensure the head of the (possibly
 *   lazy) sequence satisfies this invariant.
 */
tick.interval.assert_proper_head = (function tick$interval$assert_proper_head(s){
var vec__21504 = s;
var initial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21504,(0),null);
var subsequent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21504,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = (initial == null);
if(and__4120__auto__){
return subsequent;
} else {
return and__4120__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected nil in sequence",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nil_DASH_before,subsequent], null));
} else {
}

if(cljs.core.truth_(subsequent)){
if(cljs.core.truth_((tick.interval.precedes_or_meets_QMARK_.cljs$core$IFn$_invoke$arity$2 ? tick.interval.precedes_or_meets_QMARK_.cljs$core$IFn$_invoke$arity$2(initial,subsequent) : tick.interval.precedes_or_meets_QMARK_.call(null,initial,subsequent)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Intervals in sequence violate requirement that intervals are time-ordered and disjoint",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$interval1,initial,cljs.core.cst$kw$interval2,subsequent], null));
}
} else {
}

return s;
});
/**
 * Unite concurrent intervals. Intervals must be ordered by beginning
 *   but not necessarily disjoint (the purpose of this function is to
 *   splice together intervals that are concurrent resulting in a
 *   time-ordered sequence of disjoint intervals that is returned.
 */
tick.interval.unite = (function tick$interval$unite(intervals){
var unite = (function tick$interval$unite_$_unite(intervals__$1){
return (new cljs.core.LazySeq(null,(function (){
var vec__21511 = intervals__$1;
var seq__21512 = cljs.core.seq(vec__21511);
var first__21513 = cljs.core.first(seq__21512);
var seq__21512__$1 = cljs.core.next(seq__21512);
var ival1 = first__21513;
var first__21513__$1 = cljs.core.first(seq__21512__$1);
var seq__21512__$2 = cljs.core.next(seq__21512__$1);
var ival2 = first__21513__$1;
var r = seq__21512__$2;
if((ival2 == null)){
if(cljs.core.truth_(ival1)){
return (new cljs.core.List(null,ival1,null,(1),null));
} else {
return cljs.core.List.EMPTY;
}
} else {
var G__21514 = tick.interval.relation(ival1,ival2);
var G__21514__$1 = (((G__21514 instanceof cljs.core.Keyword))?G__21514.fqn:null);
switch (G__21514__$1) {
case "precedes":
case "meets":
return cljs.core.cons(ival1,tick$interval$unite_$_unite(cljs.core.rest(intervals__$1)));

break;
case "overlaps":
case "contains":
case "starts":
case "started-by":
case "finished-by":
return tick$interval$unite_$_unite(cljs.core.cons(tick.interval.splice(ival1,ival2),r));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Intervals in sequence violate requirement that intervals are time-ordered",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$interval1,ival1,cljs.core.cst$kw$interval2,ival2,cljs.core.cst$kw$relation,tick.interval.relation(ival1,ival2)], null));

}

}
}),null,null));
});
return unite(intervals);
});
/**
 * Return an interval group. Interval groups are maps with
 *   a :tick/intervals entry that contain a time-ordered sequence of
 *   disjoint intervals.
 */
tick.interval.new_interval_group = (function tick$interval$new_interval_group(x){
if(cljs.core.truth_(cljs.core.cst$kw$tick_SLASH_intervals.cljs$core$IFn$_invoke$arity$1(x))){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tick_SLASH_intervals,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)], null);
}
});
/**
 * Within a time-ordered sequence of disjoint intervals, return a
 *   sequence of interval groups, splicing together meeting intervals.
 */
tick.interval.normalize = (function tick$interval$normalize(intervals){
var normalize = (function tick$interval$normalize_$_normalize(intervals__$1){
return (new cljs.core.LazySeq(null,(function (){
var vec__21520 = intervals__$1;
var seq__21521 = cljs.core.seq(vec__21520);
var first__21522 = cljs.core.first(seq__21521);
var seq__21521__$1 = cljs.core.next(seq__21521);
var ival1 = first__21522;
var first__21522__$1 = cljs.core.first(seq__21521__$1);
var seq__21521__$2 = cljs.core.next(seq__21521__$1);
var ival2 = first__21522__$1;
var r = seq__21521__$2;
if((ival2 == null)){
if(cljs.core.truth_(ival1)){
return (new cljs.core.List(null,tick.interval.new_interval_group(ival1),null,(1),null));
} else {
return cljs.core.List.EMPTY;
}
} else {
var G__21523 = tick.interval.relation(ival1,ival2);
var G__21523__$1 = (((G__21523 instanceof cljs.core.Keyword))?G__21523.fqn:null);
switch (G__21523__$1) {
case "meets":
return tick$interval$normalize_$_normalize(cljs.core.cons(tick.interval.splice(ival1,ival2),r));

break;
default:
return cljs.core.cons(tick.interval.new_interval_group(ival1),tick$interval$normalize_$_normalize(tick.interval.assert_proper_head(cljs.core.rest(intervals__$1))));

}
}
}),null,null));
});
return normalize(tick.interval.assert_proper_head(intervals));
});
/**
 * Merge multiple time-ordered sequences of disjoint intervals into a
 *   single sequence of time-ordered disjoint intervals.
 */
tick.interval.union = (function tick$interval$union(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21541 = arguments.length;
var i__4731__auto___21542 = (0);
while(true){
if((i__4731__auto___21542 < len__4730__auto___21541)){
args__4736__auto__.push((arguments[i__4731__auto___21542]));

var G__21543 = (i__4731__auto___21542 + (1));
i__4731__auto___21542 = G__21543;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick.interval.union.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick.interval.union.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
var union = (function tick$interval$union(colls__$1){
return (new cljs.core.LazySeq(null,(function (){
if((cljs.core.count(colls__$1) <= (1))){
return cljs.core.first(colls__$1);
} else {
var vec__21532 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__21525_SHARP_){
return tick.core.beginning(cljs.core.first(p1__21525_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,colls__$1));
var seq__21533 = cljs.core.seq(vec__21532);
var first__21534 = cljs.core.first(seq__21533);
var seq__21533__$1 = cljs.core.next(seq__21533);
var c1 = first__21534;
var first__21534__$1 = cljs.core.first(seq__21533__$1);
var seq__21533__$2 = cljs.core.next(seq__21533__$1);
var c2 = first__21534__$1;
var r = seq__21533__$2;
if((c2 == null)){
return c1;
} else {
if(cljs.core.truth_((function (){var G__21535 = cljs.core.first(c1);
var G__21536 = cljs.core.first(c2);
return (tick.interval.disjoint_QMARK_.cljs$core$IFn$_invoke$arity$2 ? tick.interval.disjoint_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21535,G__21536) : tick.interval.disjoint_QMARK_.call(null,G__21535,G__21536));
})())){
return cljs.core.cons(cljs.core.first(c1),tick$interval$union(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.list,cljs.core.next(c1),c2,r)));
} else {
return tick$interval$union(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.list,cljs.core.cons(tick.interval.splice(cljs.core.first(c1),cljs.core.first(c2)),cljs.core.next(c1)),cljs.core.next(c2),r));
}
}
}
}),null,null));
});
return union((function (){var iter__4523__auto__ = (function tick$interval$iter__21537(s__21538){
return (new cljs.core.LazySeq(null,(function (){
var s__21538__$1 = s__21538;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__21538__$1);
if(temp__5735__auto__){
var s__21538__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21538__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__21538__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__21540 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__21539 = (0);
while(true){
if((i__21539 < size__4522__auto__)){
var coll = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__21539);
if(cljs.core.truth_(coll)){
cljs.core.chunk_append(b__21540,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(tick.core.beginning,coll));

var G__21544 = (i__21539 + (1));
i__21539 = G__21544;
continue;
} else {
var G__21545 = (i__21539 + (1));
i__21539 = G__21545;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21540),tick$interval$iter__21537(cljs.core.chunk_rest(s__21538__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21540),null);
}
} else {
var coll = cljs.core.first(s__21538__$2);
if(cljs.core.truth_(coll)){
return cljs.core.cons(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(tick.core.beginning,coll),tick$interval$iter__21537(cljs.core.rest(s__21538__$2)));
} else {
var G__21546 = cljs.core.rest(s__21538__$2);
s__21538__$1 = G__21546;
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
return iter__4523__auto__(colls);
})());
});

tick.interval.union.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick.interval.union.cljs$lang$applyTo = (function (seq21526){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21526));
});

tick.interval.conj = (function tick$interval$conj(coll,interval){
return tick.interval.union.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interval], null)], 0));
});
/**
 * Return a time-ordered sequence of disjoint intervals where two or
 *   more intervals of the given sequences are concurrent. Arguments must
 *   be time-ordered sequences of disjoint intervals.
 */
tick.interval.intersection = (function tick$interval$intersection(var_args){
var G__21551 = arguments.length;
switch (G__21551) {
case 1:
return tick.interval.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.interval.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___21555 = arguments.length;
var i__4731__auto___21556 = (0);
while(true){
if((i__4731__auto___21556 < len__4730__auto___21555)){
args_arr__4751__auto__.push((arguments[i__4731__auto___21556]));

var G__21557 = (i__4731__auto___21556 + (1));
i__4731__auto___21556 = G__21557;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return tick.interval.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

tick.interval.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

tick.interval.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var intersection = (function tick$interval$intersection(xs,ys){
return (new cljs.core.LazySeq(null,(function (){
var x = cljs.core.first(xs);
var y = cljs.core.first(ys);
if(cljs.core.truth_((function (){var and__4120__auto__ = x;
if(cljs.core.truth_(and__4120__auto__)){
return y;
} else {
return and__4120__auto__;
}
})())){
var G__21553 = tick.interval.relation(x,y);
var G__21553__$1 = (((G__21553 instanceof cljs.core.Keyword))?G__21553.fqn:null);
switch (G__21553__$1) {
case "precedes":
case "meets":
return tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),ys);

break;
case "preceded-by":
case "met-by":
return tick$interval$intersection(xs,tick.interval.assert_proper_head(cljs.core.next(ys)));

break;
case "started-by":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(y),tick.core.end(y)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.end(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "finished-by":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(y),tick.core.end(y)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "overlaps":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(y),tick.core.end(x)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.beginning(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(y,tick.core.end(x),tick.core.end(y)),cljs.core.next(ys)))));

break;
case "overlapped-by":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(x),tick.core.end(y)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.end(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "contains":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(y),tick.core.end(y)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.end(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "during":
return cljs.core.cons(x,tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(y,tick.core.end(x),tick.core.end(y)),cljs.core.next(ys)))));

break;
case "equals":
return cljs.core.cons(x,tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "finishes":
return cljs.core.cons(x,tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "starts":
return cljs.core.cons(x,tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(y,tick.core.end(x),tick.core.end(y)),cljs.core.next(ys)))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21553__$1)].join('')));

}
} else {
return cljs.core.List.EMPTY;
}
}),null,null));
});
return intersection(tick.interval.assert_proper_head(s1),tick.interval.assert_proper_head(s2));
});

tick.interval.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.intersection,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
});

/** @this {Function} */
tick.interval.intersection.cljs$lang$applyTo = (function (seq21548){
var G__21549 = cljs.core.first(seq21548);
var seq21548__$1 = cljs.core.next(seq21548);
var G__21550 = cljs.core.first(seq21548__$1);
var seq21548__$2 = cljs.core.next(seq21548__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21549,G__21550,seq21548__$2);
});

tick.interval.intersection.cljs$lang$maxFixedArity = (2);

tick.interval.intersects_QMARK_ = (function tick$interval$intersects_QMARK_(ivals,interval){
return cljs.core.not_empty(tick.interval.intersection.cljs$core$IFn$_invoke$arity$2(ivals,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interval], null)));
});
/**
 * Return an interval set that is the first set without elements of
 *   the remaining sets.
 */
tick.interval.difference = (function tick$interval$difference(var_args){
var G__21563 = arguments.length;
switch (G__21563) {
case 1:
return tick.interval.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.interval.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___21579 = arguments.length;
var i__4731__auto___21580 = (0);
while(true){
if((i__4731__auto___21580 < len__4730__auto___21579)){
args_arr__4751__auto__.push((arguments[i__4731__auto___21580]));

var G__21581 = (i__4731__auto___21580 + (1));
i__4731__auto___21580 = G__21581;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return tick.interval.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

tick.interval.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

tick.interval.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var difference = (function tick$interval$difference(xs,ys){
var vec__21571 = xs;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21571,(0),null);
var vec__21574 = ys;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21574,(0),null);
if(cljs.core.truth_(x)){
if(cljs.core.truth_(y)){
return (new cljs.core.LazySeq(null,((function (vec__21571,x,vec__21574,y){
return (function (){
var G__21577 = tick.interval.relation(x,y);
var G__21577__$1 = (((G__21577 instanceof cljs.core.Keyword))?G__21577.fqn:null);
switch (G__21577__$1) {
case "precedes":
case "meets":
return cljs.core.cons(x,tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),ys));

break;
case "preceded-by":
case "met-by":
return tick$interval$difference(xs,tick.interval.assert_proper_head(cljs.core.next(ys)));

break;
case "finishes":
case "during":
case "equals":
return tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys)));

break;
case "starts":
return tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),ys);

break;
case "started-by":
case "overlapped-by":
return tick$interval$difference(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.end(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys)));

break;
case "finished-by":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(x),tick.core.beginning(y)),tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "overlaps":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(x),tick.core.beginning(y)),tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),ys));

break;
case "contains":
return cljs.core.cons(tick.interval.slice(x,tick.core.beginning(x),tick.core.beginning(y)),tick$interval$difference(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.core.end(y),tick.core.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21577__$1)].join('')));

}
});})(vec__21571,x,vec__21574,y))
,null,null));
} else {
return xs;
}
} else {
return cljs.core.List.EMPTY;
}
});
tick.interval.assert_proper_head(s1);

tick.interval.assert_proper_head(s2);

return difference(s1,s2);
});

tick.interval.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
});

/** @this {Function} */
tick.interval.difference.cljs$lang$applyTo = (function (seq21560){
var G__21561 = cljs.core.first(seq21560);
var seq21560__$1 = cljs.core.next(seq21560);
var G__21562 = cljs.core.first(seq21560__$1);
var seq21560__$2 = cljs.core.next(seq21560__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21561,G__21562,seq21560__$2);
});

tick.interval.difference.cljs$lang$maxFixedArity = (2);

tick.interval.complement = (function tick$interval$complement(coll){
if(cljs.core.empty_QMARK_(coll)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.new_interval(tick.core.min_of_type(tick.core.now()),tick.core.max_of_type(tick.core.now()))], null);
} else {
var r = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__21585){
var vec__21586 = p__21585;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21586,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21586,(1),null);
if(tick.interval.meets_QMARK_(x,y)){
return null;
} else {
return tick.interval.new_interval(tick.core.end(x),tick.core.beginning(y));
}
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),coll));
var G__21589 = r;
var G__21589__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.beginning(cljs.core.first(coll)),tick.core.min_of_type(tick.core.beginning(cljs.core.first(coll)))))?(function (){var fexpr__21590 = ((function (G__21589,r){
return (function (p1__21583_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.new_interval(tick.core.min_of_type(tick.core.beginning(cljs.core.first(coll))),tick.core.beginning(cljs.core.first(coll)))], null),p1__21583_SHARP_);
});})(G__21589,r))
;
return fexpr__21590(G__21589);
})():G__21589);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.end(cljs.core.last(coll)),tick.core.max_of_type(tick.core.end(cljs.core.last(coll))))){
var fexpr__21591 = ((function (G__21589,G__21589__$1,r){
return (function (p1__21584_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__21584_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.new_interval(tick.core.end(cljs.core.last(coll)),tick.core.max_of_type(tick.core.end(cljs.core.last(coll))))], null));
});})(G__21589,G__21589__$1,r))
;
return fexpr__21591(G__21589__$1);
} else {
return G__21589__$1;
}
}
});
/**
 * Split s1 across the grating defined by s2
 */
tick.interval.disjoin = (function tick$interval$disjoin(var_args){
var G__21596 = arguments.length;
switch (G__21596) {
case 1:
return tick.interval.disjoin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.interval.disjoin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___21600 = arguments.length;
var i__4731__auto___21601 = (0);
while(true){
if((i__4731__auto___21601 < len__4730__auto___21600)){
args_arr__4751__auto__.push((arguments[i__4731__auto___21601]));

var G__21602 = (i__4731__auto___21601 + (1));
i__4731__auto___21601 = G__21602;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return tick.interval.disjoin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

tick.interval.disjoin.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

tick.interval.disjoin.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var xs = s1;
var ys = s2;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cljs.core.not_empty(xs))){
if(cljs.core.truth_(cljs.core.not_empty(ys))){
var x = cljs.core.first(xs);
var y = cljs.core.first(ys);
var G__21598 = tick.interval.relation(x,y);
var G__21598__$1 = (((G__21598 instanceof cljs.core.Keyword))?G__21598.fqn:null);
switch (G__21598__$1) {
case "precedes":
case "meets":
var G__21604 = cljs.core.next(xs);
var G__21605 = ys;
var G__21606 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,x);
xs = G__21604;
ys = G__21605;
result = G__21606;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21598__$1)].join('')));

}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,result,xs);
}
} else {
return result;
}
break;
}
});

tick.interval.disjoin.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
});

/** @this {Function} */
tick.interval.disjoin.cljs$lang$applyTo = (function (seq21593){
var G__21594 = cljs.core.first(seq21593);
var seq21593__$1 = cljs.core.next(seq21593);
var G__21595 = cljs.core.first(seq21593__$1);
var seq21593__$2 = cljs.core.next(seq21593__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21594,G__21595,seq21593__$2);
});

tick.interval.disjoin.cljs$lang$maxFixedArity = (2);

/**
 * Return a lazy sequence of java.time.Temporal instances over the
 *   given (local) interval.
 */
tick.interval.divide_by_apply = (function tick$interval$divide_by_apply(ival,f){
var G__21607 = tick.core.range.cljs$core$IFn$_invoke$arity$2((function (){var G__21608 = tick.core.beginning(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21608) : f.call(null,G__21608));
})(),(function (){var G__21609 = tick.core.end(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21609) : f.call(null,G__21609));
})());
if(cljs.core.truth_(tick.interval.concur((function (){var G__21610 = tick.core.end(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21610) : f.call(null,G__21610));
})(),ival))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__21607,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21611 = tick.core.end(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21611) : f.call(null,G__21611));
})()], null));
} else {
return G__21607;
}
});
/**
 * Divide an interval by a duration, returning a sequence of
 *   intervals. If the interval cannot be wholly sub-divided by the
 *   duration divisor, the last interval will represent the 'remainder'
 *   of the division and not be as long as the other preceeding
 *   intervals.
 */
tick.interval.divide_by_duration = (function tick$interval$divide_by_duration(ival,dur){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (p1__21612_SHARP_){
return tick.core.min.cljs$core$IFn$_invoke$arity$variadic(tick.core.forward_duration(p1__21612_SHARP_,dur),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.core.end(ival)], 0));
})),tick.core.range.cljs$core$IFn$_invoke$arity$3(tick.core.beginning(ival),tick.core.end(ival),dur));
});
tick.interval.divide_by_period = (function tick$interval$divide_by_period(ival,period){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (p1__21613_SHARP_){
return tick.core.min.cljs$core$IFn$_invoke$arity$variadic(tick.core.forward_duration(p1__21613_SHARP_,period),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.core.end(ival)], 0));
})),tick.core.range.cljs$core$IFn$_invoke$arity$3(tick.core.beginning(ival),tick.core.end(ival),period));
});
tick.interval.divide_by_divisor = (function tick$interval$divide_by_divisor(ival,divisor){
return tick.interval.divide_by_duration(ival,cljc.java_time.duration.divided_by(tick.core.duration(ival),divisor));
});

/**
 * @interface
 */
tick.interval.IDivisibleInterval = function(){};

/**
 * Divide an interval by a given divisor
 */
tick.interval.divide_interval = (function tick$interval$divide_interval(divisor,ival){
if((((!((divisor == null)))) && ((!((divisor.tick$interval$IDivisibleInterval$divide_interval$arity$2 == null)))))){
return divisor.tick$interval$IDivisibleInterval$divide_interval$arity$2(divisor,ival);
} else {
var x__4433__auto__ = (((divisor == null))?null:divisor);
var m__4434__auto__ = (tick.interval.divide_interval[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(divisor,ival) : m__4434__auto__.call(null,divisor,ival));
} else {
var m__4431__auto__ = (tick.interval.divide_interval["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(divisor,ival) : m__4431__auto__.call(null,divisor,ival));
} else {
throw cljs.core.missing_protocol("IDivisibleInterval.divide-interval",divisor);
}
}
}
});

goog.object.set(tick.interval.IDivisibleInterval,"function",true);

var G__21614_21620 = tick.interval.divide_interval;
var G__21615_21621 = "function";
var G__21616_21622 = ((function (G__21614_21620,G__21615_21621){
return (function (f,ival){
return tick.interval.divide_by_apply(ival,f);
});})(G__21614_21620,G__21615_21621))
;
goog.object.set(G__21614_21620,G__21615_21621,G__21616_21622);

java.time.Duration.prototype.tick$interval$IDivisibleInterval$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Duration.prototype.tick$interval$IDivisibleInterval$divide_interval$arity$2 = (function (dur,ival){
var dur__$1 = this;
return tick.interval.divide_by_duration(ival,dur__$1);
});

java.time.Period.prototype.tick$interval$IDivisibleInterval$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Period.prototype.tick$interval$IDivisibleInterval$divide_interval$arity$2 = (function (period,ival){
var period__$1 = this;
return tick.interval.divide_by_period(ival,period__$1);
});

goog.object.set(tick.interval.IDivisibleInterval,"number",true);

var G__21617_21623 = tick.interval.divide_interval;
var G__21618_21624 = "number";
var G__21619_21625 = ((function (G__21617_21623,G__21618_21624){
return (function (divisor,ival){
return tick.interval.divide_by_divisor(ival,divisor);
});})(G__21617_21623,G__21618_21624))
;
goog.object.set(G__21617_21623,G__21618_21624,G__21619_21625);
java.time.LocalDate.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$core$IDivisible$divide$arity$2 = (function (ld,d){
var ld__$1 = this;
return tick.interval.divide_interval(d,ld__$1);
});

java.time.Year.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.tick$core$IDivisible$divide$arity$2 = (function (n,d){
var n__$1 = this;
return tick.interval.divide_interval(d,n__$1);
});

java.time.YearMonth.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL;

java.time.YearMonth.prototype.tick$core$IDivisible$divide$arity$2 = (function (n,d){
var n__$1 = this;
return tick.interval.divide_interval(d,n__$1);
});

cljs.core.PersistentArrayMap.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.tick$core$IDivisible$divide$arity$2 = (function (ival,o){
var ival__$1 = this;
return tick.interval.divide_interval(o,ival__$1);
});
/**
 * Divide intervals in s1 by (disjoint ordered) intervals in s2,
 *   splitting if necessary, grouping by s2. Complexity is O(n) rather
 *   than O(n^2)
 */
tick.interval.group_by_intervals = (function tick$interval$group_by_intervals(intervals_to_group_by,ivals){
if(tick.interval.ordered_disjoint_intervals_QMARK_(intervals_to_group_by)){
} else {
throw (new Error("Assert failed: (ordered-disjoint-intervals? intervals-to-group-by)"));
}

if(tick.interval.ordered_disjoint_intervals_QMARK_(ivals)){
} else {
throw (new Error("Assert failed: (ordered-disjoint-intervals? ivals)"));
}

var intervals = ivals;
var groups = intervals_to_group_by;
var result = cljs.core.PersistentArrayMap.EMPTY;
var current_intervals = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cljs.core.not_empty(intervals))){
if(cljs.core.truth_(cljs.core.not_empty(groups))){
var ival = cljs.core.first(intervals);
var group = cljs.core.first(groups);
var G__21638 = tick.interval.relation(ival,group);
var G__21638__$1 = (((G__21638 instanceof cljs.core.Keyword))?G__21638.fqn:null);
switch (G__21638__$1) {
case "precedes":
case "meets":
var G__21651 = cljs.core.next(intervals);
var G__21652 = groups;
var G__21653 = result;
var G__21654 = current_intervals;
intervals = G__21651;
groups = G__21652;
result = G__21653;
current_intervals = G__21654;
continue;

break;
case "preceded-by":
case "met-by":
var G__21655 = intervals;
var G__21656 = cljs.core.next(groups);
var G__21657 = (function (){var G__21639 = result;
if(cljs.core.truth_(cljs.core.not_empty(current_intervals))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21639,group,current_intervals);
} else {
return G__21639;
}
})();
var G__21658 = cljs.core.PersistentVector.EMPTY;
intervals = G__21655;
groups = G__21656;
result = G__21657;
current_intervals = G__21658;
continue;

break;
case "finishes":
var G__21659 = cljs.core.next(intervals);
var G__21660 = cljs.core.next(groups);
var G__21661 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,ival));
var G__21662 = cljs.core.PersistentVector.EMPTY;
intervals = G__21659;
groups = G__21660;
result = G__21661;
current_intervals = G__21662;
continue;

break;
case "equals":
var G__21663 = cljs.core.next(intervals);
var G__21664 = cljs.core.next(groups);
var G__21665 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,ival));
var G__21666 = cljs.core.PersistentVector.EMPTY;
intervals = G__21663;
groups = G__21664;
result = G__21665;
current_intervals = G__21666;
continue;

break;
case "finished-by":
var vec__21640 = tick.interval.split_with_assert(ival,tick.core.beginning(group));
var seg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21640,(0),null);
var seg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21640,(1),null);
var G__21667 = cljs.core.next(intervals);
var G__21668 = cljs.core.next(groups);
var G__21669 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,seg2));
var G__21670 = cljs.core.PersistentVector.EMPTY;
intervals = G__21667;
groups = G__21668;
result = G__21669;
current_intervals = G__21670;
continue;

break;
case "started-by":
var vec__21643 = tick.interval.split_with_assert(ival,tick.core.end(group));
var seg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21643,(0),null);
var seg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21643,(1),null);
var G__21671 = cljs.core.cons(seg2,cljs.core.next(intervals));
var G__21672 = cljs.core.next(groups);
var G__21673 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,seg1));
var G__21674 = cljs.core.PersistentVector.EMPTY;
intervals = G__21671;
groups = G__21672;
result = G__21673;
current_intervals = G__21674;
continue;

break;
case "overlapped-by":
var vec__21646 = tick.interval.split_with_assert(ival,tick.core.end(group));
var seg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21646,(0),null);
var seg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21646,(1),null);
var G__21675 = cljs.core.cons(seg2,cljs.core.next(intervals));
var G__21676 = cljs.core.next(groups);
var G__21677 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,seg1));
var G__21678 = cljs.core.PersistentVector.EMPTY;
intervals = G__21675;
groups = G__21676;
result = G__21677;
current_intervals = G__21678;
continue;

break;
case "starts":
case "during":
var G__21679 = cljs.core.next(intervals);
var G__21680 = groups;
var G__21681 = result;
var G__21682 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,ival);
intervals = G__21679;
groups = G__21680;
result = G__21681;
current_intervals = G__21682;
continue;

break;
case "contains":
var G__21683 = cljs.core.next(intervals);
var G__21684 = cljs.core.next(groups);
var G__21685 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.slice(ival,tick.core.beginning(group),tick.core.end(group))], null));
var G__21686 = cljs.core.PersistentVector.EMPTY;
intervals = G__21683;
groups = G__21684;
result = G__21685;
current_intervals = G__21686;
continue;

break;
case "overlaps":
var G__21687 = cljs.core.next(intervals);
var G__21688 = groups;
var G__21689 = result;
var G__21690 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,tick.interval.slice(ival,tick.core.beginning(group),tick.core.end(ival)));
intervals = G__21687;
groups = G__21688;
result = G__21689;
current_intervals = G__21690;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21638__$1)].join('')));

}
} else {
return result;
}
} else {
var G__21649 = result;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.first(groups);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_empty(current_intervals);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21649,cljs.core.first(groups),current_intervals);
} else {
return G__21649;
}
}
break;
}
});

/**
 * @interface
 */
tick.interval.IGroupable = function(){};

tick.interval.group_by = (function tick$interval$group_by(grouping,ivals){
if((((!((grouping == null)))) && ((!((grouping.tick$interval$IGroupable$group_by$arity$2 == null)))))){
return grouping.tick$interval$IGroupable$group_by$arity$2(grouping,ivals);
} else {
var x__4433__auto__ = (((grouping == null))?null:grouping);
var m__4434__auto__ = (tick.interval.group_by[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(grouping,ivals) : m__4434__auto__.call(null,grouping,ivals));
} else {
var m__4431__auto__ = (tick.interval.group_by["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(grouping,ivals) : m__4431__auto__.call(null,grouping,ivals));
} else {
throw cljs.core.missing_protocol("IGroupable.group-by",grouping);
}
}
}
});

goog.object.set(tick.interval.IGroupable,"function",true);

var G__21691_21696 = tick.interval.group_by;
var G__21692_21697 = "function";
var G__21693_21698 = ((function (G__21691_21696,G__21692_21697){
return (function (f,ivals){
if(cljs.core.empty_QMARK_(ivals)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.interval.bounds,ivals);
var b = (function (){var G__21694 = tick.core.beginning(r);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21694) : f.call(null,G__21694));
})();
var e = (function (){var G__21695 = tick.core.end(r);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21695) : f.call(null,G__21695));
})();
var groups = tick.core.range.cljs$core$IFn$_invoke$arity$2(b,tick.core.inc(e));
return tick.interval.group_by(groups,ivals);
}
});})(G__21691_21696,G__21692_21697))
;
goog.object.set(G__21691_21696,G__21692_21697,G__21693_21698);

cljs.core.LazySeq.prototype.tick$interval$IGroupable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.tick$interval$IGroupable$group_by$arity$2 = (function (groups,ivals){
var groups__$1 = this;
return tick.interval.group_by_intervals(groups__$1,ivals);
});

cljs.core.PersistentVector.prototype.tick$interval$IGroupable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.tick$interval$IGroupable$group_by$arity$2 = (function (groups,ivals){
var groups__$1 = this;
return tick.interval.group_by_intervals(groups__$1,ivals);
});
