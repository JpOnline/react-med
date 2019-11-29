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
var _STAR_current_trace_STAR__orig_val__14973 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14974 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14974;

try{try{var seq__14975 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__14976 = null;
var count__14977 = (0);
var i__14978 = (0);
while(true){
if((i__14978 < count__14977)){
var vec__14985 = chunk__14976.cljs$core$IIndexed$_nth$arity$2(null,i__14978);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14985,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14985,(1),null);
var temp__5733__auto___15007 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___15007)){
var effect_fn_15008 = temp__5733__auto___15007;
(effect_fn_15008.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15008.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15008.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15009 = seq__14975;
var G__15010 = chunk__14976;
var G__15011 = count__14977;
var G__15012 = (i__14978 + (1));
seq__14975 = G__15009;
chunk__14976 = G__15010;
count__14977 = G__15011;
i__14978 = G__15012;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14975);
if(temp__5735__auto__){
var seq__14975__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14975__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__14975__$1);
var G__15013 = cljs.core.chunk_rest(seq__14975__$1);
var G__15014 = c__4550__auto__;
var G__15015 = cljs.core.count(c__4550__auto__);
var G__15016 = (0);
seq__14975 = G__15013;
chunk__14976 = G__15014;
count__14977 = G__15015;
i__14978 = G__15016;
continue;
} else {
var vec__14988 = cljs.core.first(seq__14975__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14988,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14988,(1),null);
var temp__5733__auto___15017 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___15017)){
var effect_fn_15018 = temp__5733__auto___15017;
(effect_fn_15018.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15018.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15018.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15019 = cljs.core.next(seq__14975__$1);
var G__15020 = null;
var G__15021 = (0);
var G__15022 = (0);
seq__14975 = G__15019;
chunk__14976 = G__15020;
count__14977 = G__15021;
i__14978 = G__15022;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14786__auto___15023 = re_frame.interop.now();
var duration__14787__auto___15024 = (end__14786__auto___15023 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14787__auto___15024,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__14786__auto___15023);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14973;
}} else {
var seq__14991 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__14992 = null;
var count__14993 = (0);
var i__14994 = (0);
while(true){
if((i__14994 < count__14993)){
var vec__15001 = chunk__14992.cljs$core$IIndexed$_nth$arity$2(null,i__14994);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15001,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15001,(1),null);
var temp__5733__auto___15025 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___15025)){
var effect_fn_15026 = temp__5733__auto___15025;
(effect_fn_15026.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15026.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15026.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15027 = seq__14991;
var G__15028 = chunk__14992;
var G__15029 = count__14993;
var G__15030 = (i__14994 + (1));
seq__14991 = G__15027;
chunk__14992 = G__15028;
count__14993 = G__15029;
i__14994 = G__15030;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14991);
if(temp__5735__auto__){
var seq__14991__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14991__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__14991__$1);
var G__15031 = cljs.core.chunk_rest(seq__14991__$1);
var G__15032 = c__4550__auto__;
var G__15033 = cljs.core.count(c__4550__auto__);
var G__15034 = (0);
seq__14991 = G__15031;
chunk__14992 = G__15032;
count__14993 = G__15033;
i__14994 = G__15034;
continue;
} else {
var vec__15004 = cljs.core.first(seq__14991__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15004,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15004,(1),null);
var temp__5733__auto___15035 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___15035)){
var effect_fn_15036 = temp__5733__auto___15035;
(effect_fn_15036.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15036.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15036.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15037 = cljs.core.next(seq__14991__$1);
var G__15038 = null;
var G__15039 = (0);
var G__15040 = (0);
seq__14991 = G__15037;
chunk__14992 = G__15038;
count__14993 = G__15039;
i__14994 = G__15040;
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
var seq__15041 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__15042 = null;
var count__15043 = (0);
var i__15044 = (0);
while(true){
if((i__15044 < count__15043)){
var map__15049 = chunk__15042.cljs$core$IIndexed$_nth$arity$2(null,i__15044);
var map__15049__$1 = (((((!((map__15049 == null))))?(((((map__15049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15049):map__15049);
var effect = map__15049__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15049__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15049__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__15041,chunk__15042,count__15043,i__15044,map__15049,map__15049__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__15041,chunk__15042,count__15043,i__15044,map__15049,map__15049__$1,effect,ms,dispatch))
,ms);
}


var G__15053 = seq__15041;
var G__15054 = chunk__15042;
var G__15055 = count__15043;
var G__15056 = (i__15044 + (1));
seq__15041 = G__15053;
chunk__15042 = G__15054;
count__15043 = G__15055;
i__15044 = G__15056;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15041);
if(temp__5735__auto__){
var seq__15041__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15041__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__15041__$1);
var G__15057 = cljs.core.chunk_rest(seq__15041__$1);
var G__15058 = c__4550__auto__;
var G__15059 = cljs.core.count(c__4550__auto__);
var G__15060 = (0);
seq__15041 = G__15057;
chunk__15042 = G__15058;
count__15043 = G__15059;
i__15044 = G__15060;
continue;
} else {
var map__15051 = cljs.core.first(seq__15041__$1);
var map__15051__$1 = (((((!((map__15051 == null))))?(((((map__15051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15051):map__15051);
var effect = map__15051__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15051__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15051__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__15041,chunk__15042,count__15043,i__15044,map__15051,map__15051__$1,effect,ms,dispatch,seq__15041__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__15041,chunk__15042,count__15043,i__15044,map__15051,map__15051__$1,effect,ms,dispatch,seq__15041__$1,temp__5735__auto__))
,ms);
}


var G__15061 = cljs.core.next(seq__15041__$1);
var G__15062 = null;
var G__15063 = (0);
var G__15064 = (0);
seq__15041 = G__15061;
chunk__15042 = G__15062;
count__15043 = G__15063;
i__15044 = G__15064;
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
var seq__15065 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__15066 = null;
var count__15067 = (0);
var i__15068 = (0);
while(true){
if((i__15068 < count__15067)){
var event = chunk__15066.cljs$core$IIndexed$_nth$arity$2(null,i__15068);
re_frame.router.dispatch(event);


var G__15069 = seq__15065;
var G__15070 = chunk__15066;
var G__15071 = count__15067;
var G__15072 = (i__15068 + (1));
seq__15065 = G__15069;
chunk__15066 = G__15070;
count__15067 = G__15071;
i__15068 = G__15072;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15065);
if(temp__5735__auto__){
var seq__15065__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15065__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__15065__$1);
var G__15073 = cljs.core.chunk_rest(seq__15065__$1);
var G__15074 = c__4550__auto__;
var G__15075 = cljs.core.count(c__4550__auto__);
var G__15076 = (0);
seq__15065 = G__15073;
chunk__15066 = G__15074;
count__15067 = G__15075;
i__15068 = G__15076;
continue;
} else {
var event = cljs.core.first(seq__15065__$1);
re_frame.router.dispatch(event);


var G__15077 = cljs.core.next(seq__15065__$1);
var G__15078 = null;
var G__15079 = (0);
var G__15080 = (0);
seq__15065 = G__15077;
chunk__15066 = G__15078;
count__15067 = G__15079;
i__15068 = G__15080;
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
var seq__15081 = cljs.core.seq(value);
var chunk__15082 = null;
var count__15083 = (0);
var i__15084 = (0);
while(true){
if((i__15084 < count__15083)){
var event = chunk__15082.cljs$core$IIndexed$_nth$arity$2(null,i__15084);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__15085 = seq__15081;
var G__15086 = chunk__15082;
var G__15087 = count__15083;
var G__15088 = (i__15084 + (1));
seq__15081 = G__15085;
chunk__15082 = G__15086;
count__15083 = G__15087;
i__15084 = G__15088;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15081);
if(temp__5735__auto__){
var seq__15081__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15081__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__15081__$1);
var G__15089 = cljs.core.chunk_rest(seq__15081__$1);
var G__15090 = c__4550__auto__;
var G__15091 = cljs.core.count(c__4550__auto__);
var G__15092 = (0);
seq__15081 = G__15089;
chunk__15082 = G__15090;
count__15083 = G__15091;
i__15084 = G__15092;
continue;
} else {
var event = cljs.core.first(seq__15081__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__15093 = cljs.core.next(seq__15081__$1);
var G__15094 = null;
var G__15095 = (0);
var G__15096 = (0);
seq__15081 = G__15093;
chunk__15082 = G__15094;
count__15083 = G__15095;
i__15084 = G__15096;
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
