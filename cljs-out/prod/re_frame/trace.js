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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__10083){
var map__10084 = p__10083;
var map__10084__$1 = (((((!((map__10084 == null))))?(((((map__10084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10084):map__10084);
var operation = cljs.core.get.call(null,map__10084__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__10084__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__10084__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__10084__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__10086_10106 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__10087_10107 = null;
var count__10088_10108 = (0);
var i__10089_10109 = (0);
while(true){
if((i__10089_10109 < count__10088_10108)){
var vec__10098_10110 = cljs.core._nth.call(null,chunk__10087_10107,i__10089_10109);
var k_10111 = cljs.core.nth.call(null,vec__10098_10110,(0),null);
var cb_10112 = cljs.core.nth.call(null,vec__10098_10110,(1),null);
try{cb_10112.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e10101){var e_10113 = e10101;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_10111,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_10113);
}

var G__10114 = seq__10086_10106;
var G__10115 = chunk__10087_10107;
var G__10116 = count__10088_10108;
var G__10117 = (i__10089_10109 + (1));
seq__10086_10106 = G__10114;
chunk__10087_10107 = G__10115;
count__10088_10108 = G__10116;
i__10089_10109 = G__10117;
continue;
} else {
var temp__5735__auto___10118 = cljs.core.seq.call(null,seq__10086_10106);
if(temp__5735__auto___10118){
var seq__10086_10119__$1 = temp__5735__auto___10118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10086_10119__$1)){
var c__4550__auto___10120 = cljs.core.chunk_first.call(null,seq__10086_10119__$1);
var G__10121 = cljs.core.chunk_rest.call(null,seq__10086_10119__$1);
var G__10122 = c__4550__auto___10120;
var G__10123 = cljs.core.count.call(null,c__4550__auto___10120);
var G__10124 = (0);
seq__10086_10106 = G__10121;
chunk__10087_10107 = G__10122;
count__10088_10108 = G__10123;
i__10089_10109 = G__10124;
continue;
} else {
var vec__10102_10125 = cljs.core.first.call(null,seq__10086_10119__$1);
var k_10126 = cljs.core.nth.call(null,vec__10102_10125,(0),null);
var cb_10127 = cljs.core.nth.call(null,vec__10102_10125,(1),null);
try{cb_10127.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e10105){var e_10128 = e10105;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_10126,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_10128);
}

var G__10129 = cljs.core.next.call(null,seq__10086_10119__$1);
var G__10130 = null;
var G__10131 = (0);
var G__10132 = (0);
seq__10086_10106 = G__10129;
chunk__10087_10107 = G__10130;
count__10088_10108 = G__10131;
i__10089_10109 = G__10132;
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
