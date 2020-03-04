// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__14859){
var map__14860 = p__14859;
var map__14860__$1 = (((((!((map__14860 == null))))?(((((map__14860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14860):map__14860);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__14862_14886 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__14863_14887 = null;
var count__14864_14888 = (0);
var i__14865_14889 = (0);
while(true){
if((i__14865_14889 < count__14864_14888)){
var vec__14876_14890 = chunk__14863_14887.cljs$core$IIndexed$_nth$arity$2(null,i__14865_14889);
var k_14891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14876_14890,(0),null);
var cb_14892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14876_14890,(1),null);
try{var G__14880_14893 = cljs.core.deref(re_frame.trace.traces);
(cb_14892.cljs$core$IFn$_invoke$arity$1 ? cb_14892.cljs$core$IFn$_invoke$arity$1(G__14880_14893) : cb_14892.call(null,G__14880_14893));
}catch (e14879){var e_14894 = e14879;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_14891,"while storing",cljs.core.deref(re_frame.trace.traces),e_14894], 0));
}

var G__14895 = seq__14862_14886;
var G__14896 = chunk__14863_14887;
var G__14897 = count__14864_14888;
var G__14898 = (i__14865_14889 + (1));
seq__14862_14886 = G__14895;
chunk__14863_14887 = G__14896;
count__14864_14888 = G__14897;
i__14865_14889 = G__14898;
continue;
} else {
var temp__5735__auto___14899 = cljs.core.seq(seq__14862_14886);
if(temp__5735__auto___14899){
var seq__14862_14900__$1 = temp__5735__auto___14899;
if(cljs.core.chunked_seq_QMARK_(seq__14862_14900__$1)){
var c__4550__auto___14901 = cljs.core.chunk_first(seq__14862_14900__$1);
var G__14902 = cljs.core.chunk_rest(seq__14862_14900__$1);
var G__14903 = c__4550__auto___14901;
var G__14904 = cljs.core.count(c__4550__auto___14901);
var G__14905 = (0);
seq__14862_14886 = G__14902;
chunk__14863_14887 = G__14903;
count__14864_14888 = G__14904;
i__14865_14889 = G__14905;
continue;
} else {
var vec__14881_14906 = cljs.core.first(seq__14862_14900__$1);
var k_14907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14881_14906,(0),null);
var cb_14908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14881_14906,(1),null);
try{var G__14885_14909 = cljs.core.deref(re_frame.trace.traces);
(cb_14908.cljs$core$IFn$_invoke$arity$1 ? cb_14908.cljs$core$IFn$_invoke$arity$1(G__14885_14909) : cb_14908.call(null,G__14885_14909));
}catch (e14884){var e_14910 = e14884;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_14907,"while storing",cljs.core.deref(re_frame.trace.traces),e_14910], 0));
}

var G__14911 = cljs.core.next(seq__14862_14900__$1);
var G__14912 = null;
var G__14913 = (0);
var G__14914 = (0);
seq__14862_14886 = G__14911;
chunk__14863_14887 = G__14912;
count__14864_14888 = G__14913;
i__14865_14889 = G__14914;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
