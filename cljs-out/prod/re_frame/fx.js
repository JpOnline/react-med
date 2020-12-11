// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
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
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__10290 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__10291 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__10291;

try{try{var seq__10292 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10293 = null;
var count__10294 = (0);
var i__10295 = (0);
while(true){
if((i__10295 < count__10294)){
var vec__10302 = cljs.core._nth.call(null,chunk__10293,i__10295);
var effect_key = cljs.core.nth.call(null,vec__10302,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10302,(1),null);
var temp__5733__auto___10324 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___10324)){
var effect_fn_10325 = temp__5733__auto___10324;
effect_fn_10325.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10326 = seq__10292;
var G__10327 = chunk__10293;
var G__10328 = count__10294;
var G__10329 = (i__10295 + (1));
seq__10292 = G__10326;
chunk__10293 = G__10327;
count__10294 = G__10328;
i__10295 = G__10329;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10292);
if(temp__5735__auto__){
var seq__10292__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10292__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10292__$1);
var G__10330 = cljs.core.chunk_rest.call(null,seq__10292__$1);
var G__10331 = c__4550__auto__;
var G__10332 = cljs.core.count.call(null,c__4550__auto__);
var G__10333 = (0);
seq__10292 = G__10330;
chunk__10293 = G__10331;
count__10294 = G__10332;
i__10295 = G__10333;
continue;
} else {
var vec__10305 = cljs.core.first.call(null,seq__10292__$1);
var effect_key = cljs.core.nth.call(null,vec__10305,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10305,(1),null);
var temp__5733__auto___10334 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___10334)){
var effect_fn_10335 = temp__5733__auto___10334;
effect_fn_10335.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10336 = cljs.core.next.call(null,seq__10292__$1);
var G__10337 = null;
var G__10338 = (0);
var G__10339 = (0);
seq__10292 = G__10336;
chunk__10293 = G__10337;
count__10294 = G__10338;
i__10295 = G__10339;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10112__auto___10340 = re_frame.interop.now.call(null);
var duration__10113__auto___10341 = (end__10112__auto___10340 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10113__auto___10341,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__10112__auto___10340);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__10290;
}} else {
var seq__10308 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10309 = null;
var count__10310 = (0);
var i__10311 = (0);
while(true){
if((i__10311 < count__10310)){
var vec__10318 = cljs.core._nth.call(null,chunk__10309,i__10311);
var effect_key = cljs.core.nth.call(null,vec__10318,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10318,(1),null);
var temp__5733__auto___10342 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___10342)){
var effect_fn_10343 = temp__5733__auto___10342;
effect_fn_10343.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10344 = seq__10308;
var G__10345 = chunk__10309;
var G__10346 = count__10310;
var G__10347 = (i__10311 + (1));
seq__10308 = G__10344;
chunk__10309 = G__10345;
count__10310 = G__10346;
i__10311 = G__10347;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10308);
if(temp__5735__auto__){
var seq__10308__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10308__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10308__$1);
var G__10348 = cljs.core.chunk_rest.call(null,seq__10308__$1);
var G__10349 = c__4550__auto__;
var G__10350 = cljs.core.count.call(null,c__4550__auto__);
var G__10351 = (0);
seq__10308 = G__10348;
chunk__10309 = G__10349;
count__10310 = G__10350;
i__10311 = G__10351;
continue;
} else {
var vec__10321 = cljs.core.first.call(null,seq__10308__$1);
var effect_key = cljs.core.nth.call(null,vec__10321,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10321,(1),null);
var temp__5733__auto___10352 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___10352)){
var effect_fn_10353 = temp__5733__auto___10352;
effect_fn_10353.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10354 = cljs.core.next.call(null,seq__10308__$1);
var G__10355 = null;
var G__10356 = (0);
var G__10357 = (0);
seq__10308 = G__10354;
chunk__10309 = G__10355;
count__10310 = G__10356;
i__10311 = G__10357;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__10358 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10359 = null;
var count__10360 = (0);
var i__10361 = (0);
while(true){
if((i__10361 < count__10360)){
var map__10366 = cljs.core._nth.call(null,chunk__10359,i__10361);
var map__10366__$1 = (((((!((map__10366 == null))))?(((((map__10366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10366):map__10366);
var effect = map__10366__$1;
var ms = cljs.core.get.call(null,map__10366__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10366__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10358,chunk__10359,count__10360,i__10361,map__10366,map__10366__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10358,chunk__10359,count__10360,i__10361,map__10366,map__10366__$1,effect,ms,dispatch))
,ms);
}


var G__10370 = seq__10358;
var G__10371 = chunk__10359;
var G__10372 = count__10360;
var G__10373 = (i__10361 + (1));
seq__10358 = G__10370;
chunk__10359 = G__10371;
count__10360 = G__10372;
i__10361 = G__10373;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10358);
if(temp__5735__auto__){
var seq__10358__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10358__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10358__$1);
var G__10374 = cljs.core.chunk_rest.call(null,seq__10358__$1);
var G__10375 = c__4550__auto__;
var G__10376 = cljs.core.count.call(null,c__4550__auto__);
var G__10377 = (0);
seq__10358 = G__10374;
chunk__10359 = G__10375;
count__10360 = G__10376;
i__10361 = G__10377;
continue;
} else {
var map__10368 = cljs.core.first.call(null,seq__10358__$1);
var map__10368__$1 = (((((!((map__10368 == null))))?(((((map__10368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10368):map__10368);
var effect = map__10368__$1;
var ms = cljs.core.get.call(null,map__10368__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10368__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10358,chunk__10359,count__10360,i__10361,map__10368,map__10368__$1,effect,ms,dispatch,seq__10358__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10358,chunk__10359,count__10360,i__10361,map__10368,map__10368__$1,effect,ms,dispatch,seq__10358__$1,temp__5735__auto__))
,ms);
}


var G__10378 = cljs.core.next.call(null,seq__10358__$1);
var G__10379 = null;
var G__10380 = (0);
var G__10381 = (0);
seq__10358 = G__10378;
chunk__10359 = G__10379;
count__10360 = G__10380;
i__10361 = G__10381;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__10382 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10383 = null;
var count__10384 = (0);
var i__10385 = (0);
while(true){
if((i__10385 < count__10384)){
var event = cljs.core._nth.call(null,chunk__10383,i__10385);
re_frame.router.dispatch.call(null,event);


var G__10386 = seq__10382;
var G__10387 = chunk__10383;
var G__10388 = count__10384;
var G__10389 = (i__10385 + (1));
seq__10382 = G__10386;
chunk__10383 = G__10387;
count__10384 = G__10388;
i__10385 = G__10389;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10382);
if(temp__5735__auto__){
var seq__10382__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10382__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10382__$1);
var G__10390 = cljs.core.chunk_rest.call(null,seq__10382__$1);
var G__10391 = c__4550__auto__;
var G__10392 = cljs.core.count.call(null,c__4550__auto__);
var G__10393 = (0);
seq__10382 = G__10390;
chunk__10383 = G__10391;
count__10384 = G__10392;
i__10385 = G__10393;
continue;
} else {
var event = cljs.core.first.call(null,seq__10382__$1);
re_frame.router.dispatch.call(null,event);


var G__10394 = cljs.core.next.call(null,seq__10382__$1);
var G__10395 = null;
var G__10396 = (0);
var G__10397 = (0);
seq__10382 = G__10394;
chunk__10383 = G__10395;
count__10384 = G__10396;
i__10385 = G__10397;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__10398 = cljs.core.seq.call(null,value);
var chunk__10399 = null;
var count__10400 = (0);
var i__10401 = (0);
while(true){
if((i__10401 < count__10400)){
var event = cljs.core._nth.call(null,chunk__10399,i__10401);
clear_event.call(null,event);


var G__10402 = seq__10398;
var G__10403 = chunk__10399;
var G__10404 = count__10400;
var G__10405 = (i__10401 + (1));
seq__10398 = G__10402;
chunk__10399 = G__10403;
count__10400 = G__10404;
i__10401 = G__10405;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10398);
if(temp__5735__auto__){
var seq__10398__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10398__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10398__$1);
var G__10406 = cljs.core.chunk_rest.call(null,seq__10398__$1);
var G__10407 = c__4550__auto__;
var G__10408 = cljs.core.count.call(null,c__4550__auto__);
var G__10409 = (0);
seq__10398 = G__10406;
chunk__10399 = G__10407;
count__10400 = G__10408;
i__10401 = G__10409;
continue;
} else {
var event = cljs.core.first.call(null,seq__10398__$1);
clear_event.call(null,event);


var G__10410 = cljs.core.next.call(null,seq__10398__$1);
var G__10411 = null;
var G__10412 = (0);
var G__10413 = (0);
seq__10398 = G__10410;
chunk__10399 = G__10411;
count__10400 = G__10412;
i__10401 = G__10413;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
