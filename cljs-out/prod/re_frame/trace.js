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
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__15224){
var map__15225 = p__15224;
var map__15225__$1 = (((((!((map__15225 == null))))?(((((map__15225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15225):map__15225);
var operation = cljs.core.get.call(null,map__15225__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__15225__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__15225__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__15225__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__15227_15247 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__15228_15248 = null;
var count__15229_15249 = (0);
var i__15230_15250 = (0);
while(true){
if((i__15230_15250 < count__15229_15249)){
var vec__15239_15251 = cljs.core._nth.call(null,chunk__15228_15248,i__15230_15250);
var k_15252 = cljs.core.nth.call(null,vec__15239_15251,(0),null);
var cb_15253 = cljs.core.nth.call(null,vec__15239_15251,(1),null);
try{cb_15253.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e15242){var e_15254 = e15242;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_15252,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_15254);
}

var G__15255 = seq__15227_15247;
var G__15256 = chunk__15228_15248;
var G__15257 = count__15229_15249;
var G__15258 = (i__15230_15250 + (1));
seq__15227_15247 = G__15255;
chunk__15228_15248 = G__15256;
count__15229_15249 = G__15257;
i__15230_15250 = G__15258;
continue;
} else {
var temp__5735__auto___15259 = cljs.core.seq.call(null,seq__15227_15247);
if(temp__5735__auto___15259){
var seq__15227_15260__$1 = temp__5735__auto___15259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15227_15260__$1)){
var c__4550__auto___15261 = cljs.core.chunk_first.call(null,seq__15227_15260__$1);
var G__15262 = cljs.core.chunk_rest.call(null,seq__15227_15260__$1);
var G__15263 = c__4550__auto___15261;
var G__15264 = cljs.core.count.call(null,c__4550__auto___15261);
var G__15265 = (0);
seq__15227_15247 = G__15262;
chunk__15228_15248 = G__15263;
count__15229_15249 = G__15264;
i__15230_15250 = G__15265;
continue;
} else {
var vec__15243_15266 = cljs.core.first.call(null,seq__15227_15260__$1);
var k_15267 = cljs.core.nth.call(null,vec__15243_15266,(0),null);
var cb_15268 = cljs.core.nth.call(null,vec__15243_15266,(1),null);
try{cb_15268.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e15246){var e_15269 = e15246;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_15267,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_15269);
}

var G__15270 = cljs.core.next.call(null,seq__15227_15260__$1);
var G__15271 = null;
var G__15272 = (0);
var G__15273 = (0);
seq__15227_15247 = G__15270;
chunk__15228_15248 = G__15271;
count__15229_15249 = G__15272;
i__15230_15250 = G__15273;
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
