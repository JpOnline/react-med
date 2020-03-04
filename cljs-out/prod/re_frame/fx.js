// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__15024 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__15025 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__15025;

try{try{var seq__15026 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__15027 = null;
var count__15028 = (0);
var i__15029 = (0);
while(true){
if((i__15029 < count__15028)){
var vec__15036 = chunk__15027.cljs$core$IIndexed$_nth$arity$2(null,i__15029);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15036,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15036,(1),null);
var temp__5733__auto___15058 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___15058)){
var effect_fn_15059 = temp__5733__auto___15058;
(effect_fn_15059.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15059.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15059.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15060 = seq__15026;
var G__15061 = chunk__15027;
var G__15062 = count__15028;
var G__15063 = (i__15029 + (1));
seq__15026 = G__15060;
chunk__15027 = G__15061;
count__15028 = G__15062;
i__15029 = G__15063;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15026);
if(temp__5735__auto__){
var seq__15026__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15026__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__15026__$1);
var G__15064 = cljs.core.chunk_rest(seq__15026__$1);
var G__15065 = c__4550__auto__;
var G__15066 = cljs.core.count(c__4550__auto__);
var G__15067 = (0);
seq__15026 = G__15064;
chunk__15027 = G__15065;
count__15028 = G__15066;
i__15029 = G__15067;
continue;
} else {
var vec__15039 = cljs.core.first(seq__15026__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15039,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15039,(1),null);
var temp__5733__auto___15068 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___15068)){
var effect_fn_15069 = temp__5733__auto___15068;
(effect_fn_15069.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15069.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15069.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15070 = cljs.core.next(seq__15026__$1);
var G__15071 = null;
var G__15072 = (0);
var G__15073 = (0);
seq__15026 = G__15070;
chunk__15027 = G__15071;
count__15028 = G__15072;
i__15029 = G__15073;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14837__auto___15074 = re_frame.interop.now();
var duration__14838__auto___15075 = (end__14837__auto___15074 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14838__auto___15075,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__14837__auto___15074);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__15024;
}} else {
var seq__15042 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__15043 = null;
var count__15044 = (0);
var i__15045 = (0);
while(true){
if((i__15045 < count__15044)){
var vec__15052 = chunk__15043.cljs$core$IIndexed$_nth$arity$2(null,i__15045);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15052,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15052,(1),null);
var temp__5733__auto___15076 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___15076)){
var effect_fn_15077 = temp__5733__auto___15076;
(effect_fn_15077.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15077.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15077.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15078 = seq__15042;
var G__15079 = chunk__15043;
var G__15080 = count__15044;
var G__15081 = (i__15045 + (1));
seq__15042 = G__15078;
chunk__15043 = G__15079;
count__15044 = G__15080;
i__15045 = G__15081;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15042);
if(temp__5735__auto__){
var seq__15042__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15042__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__15042__$1);
var G__15082 = cljs.core.chunk_rest(seq__15042__$1);
var G__15083 = c__4550__auto__;
var G__15084 = cljs.core.count(c__4550__auto__);
var G__15085 = (0);
seq__15042 = G__15082;
chunk__15043 = G__15083;
count__15044 = G__15084;
i__15045 = G__15085;
continue;
} else {
var vec__15055 = cljs.core.first(seq__15042__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15055,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15055,(1),null);
var temp__5733__auto___15086 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___15086)){
var effect_fn_15087 = temp__5733__auto___15086;
(effect_fn_15087.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15087.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15087.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15088 = cljs.core.next(seq__15042__$1);
var G__15089 = null;
var G__15090 = (0);
var G__15091 = (0);
seq__15042 = G__15088;
chunk__15043 = G__15089;
count__15044 = G__15090;
i__15045 = G__15091;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__15092 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__15093 = null;
var count__15094 = (0);
var i__15095 = (0);
while(true){
if((i__15095 < count__15094)){
var map__15100 = chunk__15093.cljs$core$IIndexed$_nth$arity$2(null,i__15095);
var map__15100__$1 = (((((!((map__15100 == null))))?(((((map__15100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15100):map__15100);
var effect = map__15100__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15100__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15100__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__15092,chunk__15093,count__15094,i__15095,map__15100,map__15100__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__15092,chunk__15093,count__15094,i__15095,map__15100,map__15100__$1,effect,ms,dispatch))
,ms);
}


var G__15104 = seq__15092;
var G__15105 = chunk__15093;
var G__15106 = count__15094;
var G__15107 = (i__15095 + (1));
seq__15092 = G__15104;
chunk__15093 = G__15105;
count__15094 = G__15106;
i__15095 = G__15107;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15092);
if(temp__5735__auto__){
var seq__15092__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15092__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__15092__$1);
var G__15108 = cljs.core.chunk_rest(seq__15092__$1);
var G__15109 = c__4550__auto__;
var G__15110 = cljs.core.count(c__4550__auto__);
var G__15111 = (0);
seq__15092 = G__15108;
chunk__15093 = G__15109;
count__15094 = G__15110;
i__15095 = G__15111;
continue;
} else {
var map__15102 = cljs.core.first(seq__15092__$1);
var map__15102__$1 = (((((!((map__15102 == null))))?(((((map__15102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15102):map__15102);
var effect = map__15102__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15102__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15102__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__15092,chunk__15093,count__15094,i__15095,map__15102,map__15102__$1,effect,ms,dispatch,seq__15092__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__15092,chunk__15093,count__15094,i__15095,map__15102,map__15102__$1,effect,ms,dispatch,seq__15092__$1,temp__5735__auto__))
,ms);
}


var G__15112 = cljs.core.next(seq__15092__$1);
var G__15113 = null;
var G__15114 = (0);
var G__15115 = (0);
seq__15092 = G__15112;
chunk__15093 = G__15113;
count__15094 = G__15114;
i__15095 = G__15115;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__15116 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__15117 = null;
var count__15118 = (0);
var i__15119 = (0);
while(true){
if((i__15119 < count__15118)){
var event = chunk__15117.cljs$core$IIndexed$_nth$arity$2(null,i__15119);
re_frame.router.dispatch(event);


var G__15120 = seq__15116;
var G__15121 = chunk__15117;
var G__15122 = count__15118;
var G__15123 = (i__15119 + (1));
seq__15116 = G__15120;
chunk__15117 = G__15121;
count__15118 = G__15122;
i__15119 = G__15123;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15116);
if(temp__5735__auto__){
var seq__15116__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15116__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__15116__$1);
var G__15124 = cljs.core.chunk_rest(seq__15116__$1);
var G__15125 = c__4550__auto__;
var G__15126 = cljs.core.count(c__4550__auto__);
var G__15127 = (0);
seq__15116 = G__15124;
chunk__15117 = G__15125;
count__15118 = G__15126;
i__15119 = G__15127;
continue;
} else {
var event = cljs.core.first(seq__15116__$1);
re_frame.router.dispatch(event);


var G__15128 = cljs.core.next(seq__15116__$1);
var G__15129 = null;
var G__15130 = (0);
var G__15131 = (0);
seq__15116 = G__15128;
chunk__15117 = G__15129;
count__15118 = G__15130;
i__15119 = G__15131;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__15132 = cljs.core.seq(value);
var chunk__15133 = null;
var count__15134 = (0);
var i__15135 = (0);
while(true){
if((i__15135 < count__15134)){
var event = chunk__15133.cljs$core$IIndexed$_nth$arity$2(null,i__15135);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__15136 = seq__15132;
var G__15137 = chunk__15133;
var G__15138 = count__15134;
var G__15139 = (i__15135 + (1));
seq__15132 = G__15136;
chunk__15133 = G__15137;
count__15134 = G__15138;
i__15135 = G__15139;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15132);
if(temp__5735__auto__){
var seq__15132__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15132__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__15132__$1);
var G__15140 = cljs.core.chunk_rest(seq__15132__$1);
var G__15141 = c__4550__auto__;
var G__15142 = cljs.core.count(c__4550__auto__);
var G__15143 = (0);
seq__15132 = G__15140;
chunk__15133 = G__15141;
count__15134 = G__15142;
i__15135 = G__15143;
continue;
} else {
var event = cljs.core.first(seq__15132__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__15144 = cljs.core.next(seq__15132__$1);
var G__15145 = null;
var G__15146 = (0);
var G__15147 = (0);
seq__15132 = G__15144;
chunk__15133 = G__15145;
count__15134 = G__15146;
i__15135 = G__15147;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
