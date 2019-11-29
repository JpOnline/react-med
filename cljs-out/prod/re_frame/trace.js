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
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__14808){
var map__14809 = p__14808;
var map__14809__$1 = (((((!((map__14809 == null))))?(((((map__14809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14809):map__14809);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14809__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14809__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14809__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14809__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__14811_14835 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__14812_14836 = null;
var count__14813_14837 = (0);
var i__14814_14838 = (0);
while(true){
if((i__14814_14838 < count__14813_14837)){
var vec__14825_14839 = chunk__14812_14836.cljs$core$IIndexed$_nth$arity$2(null,i__14814_14838);
var k_14840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14825_14839,(0),null);
var cb_14841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14825_14839,(1),null);
try{var G__14829_14842 = cljs.core.deref(re_frame.trace.traces);
(cb_14841.cljs$core$IFn$_invoke$arity$1 ? cb_14841.cljs$core$IFn$_invoke$arity$1(G__14829_14842) : cb_14841.call(null,G__14829_14842));
}catch (e14828){var e_14843 = e14828;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_14840,"while storing",cljs.core.deref(re_frame.trace.traces),e_14843], 0));
}

var G__14844 = seq__14811_14835;
var G__14845 = chunk__14812_14836;
var G__14846 = count__14813_14837;
var G__14847 = (i__14814_14838 + (1));
seq__14811_14835 = G__14844;
chunk__14812_14836 = G__14845;
count__14813_14837 = G__14846;
i__14814_14838 = G__14847;
continue;
} else {
var temp__5735__auto___14848 = cljs.core.seq(seq__14811_14835);
if(temp__5735__auto___14848){
var seq__14811_14849__$1 = temp__5735__auto___14848;
if(cljs.core.chunked_seq_QMARK_(seq__14811_14849__$1)){
var c__4550__auto___14850 = cljs.core.chunk_first(seq__14811_14849__$1);
var G__14851 = cljs.core.chunk_rest(seq__14811_14849__$1);
var G__14852 = c__4550__auto___14850;
var G__14853 = cljs.core.count(c__4550__auto___14850);
var G__14854 = (0);
seq__14811_14835 = G__14851;
chunk__14812_14836 = G__14852;
count__14813_14837 = G__14853;
i__14814_14838 = G__14854;
continue;
} else {
var vec__14830_14855 = cljs.core.first(seq__14811_14849__$1);
var k_14856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14830_14855,(0),null);
var cb_14857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14830_14855,(1),null);
try{var G__14834_14858 = cljs.core.deref(re_frame.trace.traces);
(cb_14857.cljs$core$IFn$_invoke$arity$1 ? cb_14857.cljs$core$IFn$_invoke$arity$1(G__14834_14858) : cb_14857.call(null,G__14834_14858));
}catch (e14833){var e_14859 = e14833;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_14856,"while storing",cljs.core.deref(re_frame.trace.traces),e_14859], 0));
}

var G__14860 = cljs.core.next(seq__14811_14849__$1);
var G__14861 = null;
var G__14862 = (0);
var G__14863 = (0);
seq__14811_14835 = G__14860;
chunk__14812_14836 = G__14861;
count__14813_14837 = G__14862;
i__14814_14838 = G__14863;
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
