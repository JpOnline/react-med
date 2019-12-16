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
var _STAR_current_trace_STAR__orig_val__10239 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__10240 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__10240;

try{try{var seq__10241 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10242 = null;
var count__10243 = (0);
var i__10244 = (0);
while(true){
if((i__10244 < count__10243)){
var vec__10251 = cljs.core._nth.call(null,chunk__10242,i__10244);
var effect_key = cljs.core.nth.call(null,vec__10251,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10251,(1),null);
var temp__5733__auto___10273 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___10273)){
var effect_fn_10274 = temp__5733__auto___10273;
effect_fn_10274.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10275 = seq__10241;
var G__10276 = chunk__10242;
var G__10277 = count__10243;
var G__10278 = (i__10244 + (1));
seq__10241 = G__10275;
chunk__10242 = G__10276;
count__10243 = G__10277;
i__10244 = G__10278;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10241);
if(temp__5735__auto__){
var seq__10241__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10241__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10241__$1);
var G__10279 = cljs.core.chunk_rest.call(null,seq__10241__$1);
var G__10280 = c__4550__auto__;
var G__10281 = cljs.core.count.call(null,c__4550__auto__);
var G__10282 = (0);
seq__10241 = G__10279;
chunk__10242 = G__10280;
count__10243 = G__10281;
i__10244 = G__10282;
continue;
} else {
var vec__10254 = cljs.core.first.call(null,seq__10241__$1);
var effect_key = cljs.core.nth.call(null,vec__10254,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10254,(1),null);
var temp__5733__auto___10283 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___10283)){
var effect_fn_10284 = temp__5733__auto___10283;
effect_fn_10284.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10285 = cljs.core.next.call(null,seq__10241__$1);
var G__10286 = null;
var G__10287 = (0);
var G__10288 = (0);
seq__10241 = G__10285;
chunk__10242 = G__10286;
count__10243 = G__10287;
i__10244 = G__10288;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10061__auto___10289 = re_frame.interop.now.call(null);
var duration__10062__auto___10290 = (end__10061__auto___10289 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10062__auto___10290,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__10061__auto___10289);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__10239;
}} else {
var seq__10257 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10258 = null;
var count__10259 = (0);
var i__10260 = (0);
while(true){
if((i__10260 < count__10259)){
var vec__10267 = cljs.core._nth.call(null,chunk__10258,i__10260);
var effect_key = cljs.core.nth.call(null,vec__10267,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10267,(1),null);
var temp__5733__auto___10291 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___10291)){
var effect_fn_10292 = temp__5733__auto___10291;
effect_fn_10292.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10293 = seq__10257;
var G__10294 = chunk__10258;
var G__10295 = count__10259;
var G__10296 = (i__10260 + (1));
seq__10257 = G__10293;
chunk__10258 = G__10294;
count__10259 = G__10295;
i__10260 = G__10296;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10257);
if(temp__5735__auto__){
var seq__10257__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10257__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10257__$1);
var G__10297 = cljs.core.chunk_rest.call(null,seq__10257__$1);
var G__10298 = c__4550__auto__;
var G__10299 = cljs.core.count.call(null,c__4550__auto__);
var G__10300 = (0);
seq__10257 = G__10297;
chunk__10258 = G__10298;
count__10259 = G__10299;
i__10260 = G__10300;
continue;
} else {
var vec__10270 = cljs.core.first.call(null,seq__10257__$1);
var effect_key = cljs.core.nth.call(null,vec__10270,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10270,(1),null);
var temp__5733__auto___10301 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___10301)){
var effect_fn_10302 = temp__5733__auto___10301;
effect_fn_10302.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10303 = cljs.core.next.call(null,seq__10257__$1);
var G__10304 = null;
var G__10305 = (0);
var G__10306 = (0);
seq__10257 = G__10303;
chunk__10258 = G__10304;
count__10259 = G__10305;
i__10260 = G__10306;
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
var seq__10307 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10308 = null;
var count__10309 = (0);
var i__10310 = (0);
while(true){
if((i__10310 < count__10309)){
var map__10315 = cljs.core._nth.call(null,chunk__10308,i__10310);
var map__10315__$1 = (((((!((map__10315 == null))))?(((((map__10315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10315):map__10315);
var effect = map__10315__$1;
var ms = cljs.core.get.call(null,map__10315__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10315__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10307,chunk__10308,count__10309,i__10310,map__10315,map__10315__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10307,chunk__10308,count__10309,i__10310,map__10315,map__10315__$1,effect,ms,dispatch))
,ms);
}


var G__10319 = seq__10307;
var G__10320 = chunk__10308;
var G__10321 = count__10309;
var G__10322 = (i__10310 + (1));
seq__10307 = G__10319;
chunk__10308 = G__10320;
count__10309 = G__10321;
i__10310 = G__10322;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10307);
if(temp__5735__auto__){
var seq__10307__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10307__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10307__$1);
var G__10323 = cljs.core.chunk_rest.call(null,seq__10307__$1);
var G__10324 = c__4550__auto__;
var G__10325 = cljs.core.count.call(null,c__4550__auto__);
var G__10326 = (0);
seq__10307 = G__10323;
chunk__10308 = G__10324;
count__10309 = G__10325;
i__10310 = G__10326;
continue;
} else {
var map__10317 = cljs.core.first.call(null,seq__10307__$1);
var map__10317__$1 = (((((!((map__10317 == null))))?(((((map__10317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10317):map__10317);
var effect = map__10317__$1;
var ms = cljs.core.get.call(null,map__10317__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10317__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10307,chunk__10308,count__10309,i__10310,map__10317,map__10317__$1,effect,ms,dispatch,seq__10307__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10307,chunk__10308,count__10309,i__10310,map__10317,map__10317__$1,effect,ms,dispatch,seq__10307__$1,temp__5735__auto__))
,ms);
}


var G__10327 = cljs.core.next.call(null,seq__10307__$1);
var G__10328 = null;
var G__10329 = (0);
var G__10330 = (0);
seq__10307 = G__10327;
chunk__10308 = G__10328;
count__10309 = G__10329;
i__10310 = G__10330;
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
var seq__10331 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10332 = null;
var count__10333 = (0);
var i__10334 = (0);
while(true){
if((i__10334 < count__10333)){
var event = cljs.core._nth.call(null,chunk__10332,i__10334);
re_frame.router.dispatch.call(null,event);


var G__10335 = seq__10331;
var G__10336 = chunk__10332;
var G__10337 = count__10333;
var G__10338 = (i__10334 + (1));
seq__10331 = G__10335;
chunk__10332 = G__10336;
count__10333 = G__10337;
i__10334 = G__10338;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10331);
if(temp__5735__auto__){
var seq__10331__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10331__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10331__$1);
var G__10339 = cljs.core.chunk_rest.call(null,seq__10331__$1);
var G__10340 = c__4550__auto__;
var G__10341 = cljs.core.count.call(null,c__4550__auto__);
var G__10342 = (0);
seq__10331 = G__10339;
chunk__10332 = G__10340;
count__10333 = G__10341;
i__10334 = G__10342;
continue;
} else {
var event = cljs.core.first.call(null,seq__10331__$1);
re_frame.router.dispatch.call(null,event);


var G__10343 = cljs.core.next.call(null,seq__10331__$1);
var G__10344 = null;
var G__10345 = (0);
var G__10346 = (0);
seq__10331 = G__10343;
chunk__10332 = G__10344;
count__10333 = G__10345;
i__10334 = G__10346;
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
var seq__10347 = cljs.core.seq.call(null,value);
var chunk__10348 = null;
var count__10349 = (0);
var i__10350 = (0);
while(true){
if((i__10350 < count__10349)){
var event = cljs.core._nth.call(null,chunk__10348,i__10350);
clear_event.call(null,event);


var G__10351 = seq__10347;
var G__10352 = chunk__10348;
var G__10353 = count__10349;
var G__10354 = (i__10350 + (1));
seq__10347 = G__10351;
chunk__10348 = G__10352;
count__10349 = G__10353;
i__10350 = G__10354;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10347);
if(temp__5735__auto__){
var seq__10347__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10347__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10347__$1);
var G__10355 = cljs.core.chunk_rest.call(null,seq__10347__$1);
var G__10356 = c__4550__auto__;
var G__10357 = cljs.core.count.call(null,c__4550__auto__);
var G__10358 = (0);
seq__10347 = G__10355;
chunk__10348 = G__10356;
count__10349 = G__10357;
i__10350 = G__10358;
continue;
} else {
var event = cljs.core.first.call(null,seq__10347__$1);
clear_event.call(null,event);


var G__10359 = cljs.core.next.call(null,seq__10347__$1);
var G__10360 = null;
var G__10361 = (0);
var G__10362 = (0);
seq__10347 = G__10359;
chunk__10348 = G__10360;
count__10349 = G__10361;
i__10350 = G__10362;
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
