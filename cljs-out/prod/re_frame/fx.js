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
var _STAR_current_trace_STAR__orig_val__15380 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__15381 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__15381;

try{try{var seq__15382 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__15383 = null;
var count__15384 = (0);
var i__15385 = (0);
while(true){
if((i__15385 < count__15384)){
var vec__15392 = cljs.core._nth.call(null,chunk__15383,i__15385);
var effect_key = cljs.core.nth.call(null,vec__15392,(0),null);
var effect_value = cljs.core.nth.call(null,vec__15392,(1),null);
var temp__5733__auto___15414 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___15414)){
var effect_fn_15415 = temp__5733__auto___15414;
effect_fn_15415.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__15416 = seq__15382;
var G__15417 = chunk__15383;
var G__15418 = count__15384;
var G__15419 = (i__15385 + (1));
seq__15382 = G__15416;
chunk__15383 = G__15417;
count__15384 = G__15418;
i__15385 = G__15419;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__15382);
if(temp__5735__auto__){
var seq__15382__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15382__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15382__$1);
var G__15420 = cljs.core.chunk_rest.call(null,seq__15382__$1);
var G__15421 = c__4550__auto__;
var G__15422 = cljs.core.count.call(null,c__4550__auto__);
var G__15423 = (0);
seq__15382 = G__15420;
chunk__15383 = G__15421;
count__15384 = G__15422;
i__15385 = G__15423;
continue;
} else {
var vec__15395 = cljs.core.first.call(null,seq__15382__$1);
var effect_key = cljs.core.nth.call(null,vec__15395,(0),null);
var effect_value = cljs.core.nth.call(null,vec__15395,(1),null);
var temp__5733__auto___15424 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___15424)){
var effect_fn_15425 = temp__5733__auto___15424;
effect_fn_15425.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__15426 = cljs.core.next.call(null,seq__15382__$1);
var G__15427 = null;
var G__15428 = (0);
var G__15429 = (0);
seq__15382 = G__15426;
chunk__15383 = G__15427;
count__15384 = G__15428;
i__15385 = G__15429;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__15202__auto___15430 = re_frame.interop.now.call(null);
var duration__15203__auto___15431 = (end__15202__auto___15430 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15203__auto___15431,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__15202__auto___15430);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__15380;
}} else {
var seq__15398 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__15399 = null;
var count__15400 = (0);
var i__15401 = (0);
while(true){
if((i__15401 < count__15400)){
var vec__15408 = cljs.core._nth.call(null,chunk__15399,i__15401);
var effect_key = cljs.core.nth.call(null,vec__15408,(0),null);
var effect_value = cljs.core.nth.call(null,vec__15408,(1),null);
var temp__5733__auto___15432 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___15432)){
var effect_fn_15433 = temp__5733__auto___15432;
effect_fn_15433.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__15434 = seq__15398;
var G__15435 = chunk__15399;
var G__15436 = count__15400;
var G__15437 = (i__15401 + (1));
seq__15398 = G__15434;
chunk__15399 = G__15435;
count__15400 = G__15436;
i__15401 = G__15437;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__15398);
if(temp__5735__auto__){
var seq__15398__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15398__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15398__$1);
var G__15438 = cljs.core.chunk_rest.call(null,seq__15398__$1);
var G__15439 = c__4550__auto__;
var G__15440 = cljs.core.count.call(null,c__4550__auto__);
var G__15441 = (0);
seq__15398 = G__15438;
chunk__15399 = G__15439;
count__15400 = G__15440;
i__15401 = G__15441;
continue;
} else {
var vec__15411 = cljs.core.first.call(null,seq__15398__$1);
var effect_key = cljs.core.nth.call(null,vec__15411,(0),null);
var effect_value = cljs.core.nth.call(null,vec__15411,(1),null);
var temp__5733__auto___15442 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___15442)){
var effect_fn_15443 = temp__5733__auto___15442;
effect_fn_15443.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__15444 = cljs.core.next.call(null,seq__15398__$1);
var G__15445 = null;
var G__15446 = (0);
var G__15447 = (0);
seq__15398 = G__15444;
chunk__15399 = G__15445;
count__15400 = G__15446;
i__15401 = G__15447;
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
var seq__15448 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__15449 = null;
var count__15450 = (0);
var i__15451 = (0);
while(true){
if((i__15451 < count__15450)){
var map__15456 = cljs.core._nth.call(null,chunk__15449,i__15451);
var map__15456__$1 = (((((!((map__15456 == null))))?(((((map__15456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15456):map__15456);
var effect = map__15456__$1;
var ms = cljs.core.get.call(null,map__15456__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__15456__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__15448,chunk__15449,count__15450,i__15451,map__15456,map__15456__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__15448,chunk__15449,count__15450,i__15451,map__15456,map__15456__$1,effect,ms,dispatch))
,ms);
}


var G__15460 = seq__15448;
var G__15461 = chunk__15449;
var G__15462 = count__15450;
var G__15463 = (i__15451 + (1));
seq__15448 = G__15460;
chunk__15449 = G__15461;
count__15450 = G__15462;
i__15451 = G__15463;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__15448);
if(temp__5735__auto__){
var seq__15448__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15448__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15448__$1);
var G__15464 = cljs.core.chunk_rest.call(null,seq__15448__$1);
var G__15465 = c__4550__auto__;
var G__15466 = cljs.core.count.call(null,c__4550__auto__);
var G__15467 = (0);
seq__15448 = G__15464;
chunk__15449 = G__15465;
count__15450 = G__15466;
i__15451 = G__15467;
continue;
} else {
var map__15458 = cljs.core.first.call(null,seq__15448__$1);
var map__15458__$1 = (((((!((map__15458 == null))))?(((((map__15458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15458):map__15458);
var effect = map__15458__$1;
var ms = cljs.core.get.call(null,map__15458__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__15458__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__15448,chunk__15449,count__15450,i__15451,map__15458,map__15458__$1,effect,ms,dispatch,seq__15448__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__15448,chunk__15449,count__15450,i__15451,map__15458,map__15458__$1,effect,ms,dispatch,seq__15448__$1,temp__5735__auto__))
,ms);
}


var G__15468 = cljs.core.next.call(null,seq__15448__$1);
var G__15469 = null;
var G__15470 = (0);
var G__15471 = (0);
seq__15448 = G__15468;
chunk__15449 = G__15469;
count__15450 = G__15470;
i__15451 = G__15471;
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
var seq__15472 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__15473 = null;
var count__15474 = (0);
var i__15475 = (0);
while(true){
if((i__15475 < count__15474)){
var event = cljs.core._nth.call(null,chunk__15473,i__15475);
re_frame.router.dispatch.call(null,event);


var G__15476 = seq__15472;
var G__15477 = chunk__15473;
var G__15478 = count__15474;
var G__15479 = (i__15475 + (1));
seq__15472 = G__15476;
chunk__15473 = G__15477;
count__15474 = G__15478;
i__15475 = G__15479;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__15472);
if(temp__5735__auto__){
var seq__15472__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15472__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15472__$1);
var G__15480 = cljs.core.chunk_rest.call(null,seq__15472__$1);
var G__15481 = c__4550__auto__;
var G__15482 = cljs.core.count.call(null,c__4550__auto__);
var G__15483 = (0);
seq__15472 = G__15480;
chunk__15473 = G__15481;
count__15474 = G__15482;
i__15475 = G__15483;
continue;
} else {
var event = cljs.core.first.call(null,seq__15472__$1);
re_frame.router.dispatch.call(null,event);


var G__15484 = cljs.core.next.call(null,seq__15472__$1);
var G__15485 = null;
var G__15486 = (0);
var G__15487 = (0);
seq__15472 = G__15484;
chunk__15473 = G__15485;
count__15474 = G__15486;
i__15475 = G__15487;
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
var seq__15488 = cljs.core.seq.call(null,value);
var chunk__15489 = null;
var count__15490 = (0);
var i__15491 = (0);
while(true){
if((i__15491 < count__15490)){
var event = cljs.core._nth.call(null,chunk__15489,i__15491);
clear_event.call(null,event);


var G__15492 = seq__15488;
var G__15493 = chunk__15489;
var G__15494 = count__15490;
var G__15495 = (i__15491 + (1));
seq__15488 = G__15492;
chunk__15489 = G__15493;
count__15490 = G__15494;
i__15491 = G__15495;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__15488);
if(temp__5735__auto__){
var seq__15488__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15488__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15488__$1);
var G__15496 = cljs.core.chunk_rest.call(null,seq__15488__$1);
var G__15497 = c__4550__auto__;
var G__15498 = cljs.core.count.call(null,c__4550__auto__);
var G__15499 = (0);
seq__15488 = G__15496;
chunk__15489 = G__15497;
count__15490 = G__15498;
i__15491 = G__15499;
continue;
} else {
var event = cljs.core.first.call(null,seq__15488__$1);
clear_event.call(null,event);


var G__15500 = cljs.core.next.call(null,seq__15488__$1);
var G__15501 = null;
var G__15502 = (0);
var G__15503 = (0);
seq__15488 = G__15500;
chunk__15489 = G__15501;
count__15490 = G__15502;
i__15491 = G__15503;
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
