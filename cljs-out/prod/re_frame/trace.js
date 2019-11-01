// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__9351){
var map__9352 = p__9351;
var map__9352__$1 = (((((!((map__9352 == null))))?(((((map__9352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9352):map__9352);
var operation = cljs.core.get.call(null,map__9352__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__9352__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__9352__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__9352__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__9354_9374 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__9355_9375 = null;
var count__9356_9376 = (0);
var i__9357_9377 = (0);
while(true){
if((i__9357_9377 < count__9356_9376)){
var vec__9366_9378 = cljs.core._nth.call(null,chunk__9355_9375,i__9357_9377);
var k_9379 = cljs.core.nth.call(null,vec__9366_9378,(0),null);
var cb_9380 = cljs.core.nth.call(null,vec__9366_9378,(1),null);
try{cb_9380.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e9369){var e_9381 = e9369;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_9379,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_9381);
}

var G__9382 = seq__9354_9374;
var G__9383 = chunk__9355_9375;
var G__9384 = count__9356_9376;
var G__9385 = (i__9357_9377 + (1));
seq__9354_9374 = G__9382;
chunk__9355_9375 = G__9383;
count__9356_9376 = G__9384;
i__9357_9377 = G__9385;
continue;
} else {
var temp__5735__auto___9386 = cljs.core.seq.call(null,seq__9354_9374);
if(temp__5735__auto___9386){
var seq__9354_9387__$1 = temp__5735__auto___9386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9354_9387__$1)){
var c__4550__auto___9388 = cljs.core.chunk_first.call(null,seq__9354_9387__$1);
var G__9389 = cljs.core.chunk_rest.call(null,seq__9354_9387__$1);
var G__9390 = c__4550__auto___9388;
var G__9391 = cljs.core.count.call(null,c__4550__auto___9388);
var G__9392 = (0);
seq__9354_9374 = G__9389;
chunk__9355_9375 = G__9390;
count__9356_9376 = G__9391;
i__9357_9377 = G__9392;
continue;
} else {
var vec__9370_9393 = cljs.core.first.call(null,seq__9354_9387__$1);
var k_9394 = cljs.core.nth.call(null,vec__9370_9393,(0),null);
var cb_9395 = cljs.core.nth.call(null,vec__9370_9393,(1),null);
try{cb_9395.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e9373){var e_9396 = e9373;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_9394,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_9396);
}

var G__9397 = cljs.core.next.call(null,seq__9354_9387__$1);
var G__9398 = null;
var G__9399 = (0);
var G__9400 = (0);
seq__9354_9374 = G__9397;
chunk__9355_9375 = G__9398;
count__9356_9376 = G__9399;
i__9357_9377 = G__9400;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
