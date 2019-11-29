// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18983){
var map__18984 = p__18983;
var map__18984__$1 = (((((!((map__18984 == null))))?(((((map__18984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18984):map__18984);
var m = map__18984__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18984__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18984__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__18986_19018 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18987_19019 = null;
var count__18988_19020 = (0);
var i__18989_19021 = (0);
while(true){
if((i__18989_19021 < count__18988_19020)){
var f_19022 = chunk__18987_19019.cljs$core$IIndexed$_nth$arity$2(null,i__18989_19021);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19022], 0));


var G__19023 = seq__18986_19018;
var G__19024 = chunk__18987_19019;
var G__19025 = count__18988_19020;
var G__19026 = (i__18989_19021 + (1));
seq__18986_19018 = G__19023;
chunk__18987_19019 = G__19024;
count__18988_19020 = G__19025;
i__18989_19021 = G__19026;
continue;
} else {
var temp__5735__auto___19027 = cljs.core.seq(seq__18986_19018);
if(temp__5735__auto___19027){
var seq__18986_19028__$1 = temp__5735__auto___19027;
if(cljs.core.chunked_seq_QMARK_(seq__18986_19028__$1)){
var c__4550__auto___19029 = cljs.core.chunk_first(seq__18986_19028__$1);
var G__19030 = cljs.core.chunk_rest(seq__18986_19028__$1);
var G__19031 = c__4550__auto___19029;
var G__19032 = cljs.core.count(c__4550__auto___19029);
var G__19033 = (0);
seq__18986_19018 = G__19030;
chunk__18987_19019 = G__19031;
count__18988_19020 = G__19032;
i__18989_19021 = G__19033;
continue;
} else {
var f_19034 = cljs.core.first(seq__18986_19028__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19034], 0));


var G__19035 = cljs.core.next(seq__18986_19028__$1);
var G__19036 = null;
var G__19037 = (0);
var G__19038 = (0);
seq__18986_19018 = G__19035;
chunk__18987_19019 = G__19036;
count__18988_19020 = G__19037;
i__18989_19021 = G__19038;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19039 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19039], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_19039)))?cljs.core.second(arglists_19039):arglists_19039)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__18990_19040 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18991_19041 = null;
var count__18992_19042 = (0);
var i__18993_19043 = (0);
while(true){
if((i__18993_19043 < count__18992_19042)){
var vec__19004_19044 = chunk__18991_19041.cljs$core$IIndexed$_nth$arity$2(null,i__18993_19043);
var name_19045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19004_19044,(0),null);
var map__19007_19046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19004_19044,(1),null);
var map__19007_19047__$1 = (((((!((map__19007_19046 == null))))?(((((map__19007_19046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19007_19046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19007_19046):map__19007_19046);
var doc_19048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19007_19047__$1,cljs.core.cst$kw$doc);
var arglists_19049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19007_19047__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19045], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19049], 0));

if(cljs.core.truth_(doc_19048)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19048], 0));
} else {
}


var G__19050 = seq__18990_19040;
var G__19051 = chunk__18991_19041;
var G__19052 = count__18992_19042;
var G__19053 = (i__18993_19043 + (1));
seq__18990_19040 = G__19050;
chunk__18991_19041 = G__19051;
count__18992_19042 = G__19052;
i__18993_19043 = G__19053;
continue;
} else {
var temp__5735__auto___19054 = cljs.core.seq(seq__18990_19040);
if(temp__5735__auto___19054){
var seq__18990_19055__$1 = temp__5735__auto___19054;
if(cljs.core.chunked_seq_QMARK_(seq__18990_19055__$1)){
var c__4550__auto___19056 = cljs.core.chunk_first(seq__18990_19055__$1);
var G__19057 = cljs.core.chunk_rest(seq__18990_19055__$1);
var G__19058 = c__4550__auto___19056;
var G__19059 = cljs.core.count(c__4550__auto___19056);
var G__19060 = (0);
seq__18990_19040 = G__19057;
chunk__18991_19041 = G__19058;
count__18992_19042 = G__19059;
i__18993_19043 = G__19060;
continue;
} else {
var vec__19009_19061 = cljs.core.first(seq__18990_19055__$1);
var name_19062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19009_19061,(0),null);
var map__19012_19063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19009_19061,(1),null);
var map__19012_19064__$1 = (((((!((map__19012_19063 == null))))?(((((map__19012_19063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19012_19063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19012_19063):map__19012_19063);
var doc_19065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19012_19064__$1,cljs.core.cst$kw$doc);
var arglists_19066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19012_19064__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19062], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19066], 0));

if(cljs.core.truth_(doc_19065)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19065], 0));
} else {
}


var G__19067 = cljs.core.next(seq__18990_19055__$1);
var G__19068 = null;
var G__19069 = (0);
var G__19070 = (0);
seq__18990_19040 = G__19067;
chunk__18991_19041 = G__19068;
count__18992_19042 = G__19069;
i__18993_19043 = G__19070;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19014 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__19015 = null;
var count__19016 = (0);
var i__19017 = (0);
while(true){
if((i__19017 < count__19016)){
var role = chunk__19015.cljs$core$IIndexed$_nth$arity$2(null,i__19017);
var temp__5735__auto___19071__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___19071__$1)){
var spec_19072 = temp__5735__auto___19071__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19072)], 0));
} else {
}


var G__19073 = seq__19014;
var G__19074 = chunk__19015;
var G__19075 = count__19016;
var G__19076 = (i__19017 + (1));
seq__19014 = G__19073;
chunk__19015 = G__19074;
count__19016 = G__19075;
i__19017 = G__19076;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__19014);
if(temp__5735__auto____$1){
var seq__19014__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19014__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__19014__$1);
var G__19077 = cljs.core.chunk_rest(seq__19014__$1);
var G__19078 = c__4550__auto__;
var G__19079 = cljs.core.count(c__4550__auto__);
var G__19080 = (0);
seq__19014 = G__19077;
chunk__19015 = G__19078;
count__19016 = G__19079;
i__19017 = G__19080;
continue;
} else {
var role = cljs.core.first(seq__19014__$1);
var temp__5735__auto___19081__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___19081__$2)){
var spec_19082 = temp__5735__auto___19081__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19082)], 0));
} else {
}


var G__19083 = cljs.core.next(seq__19014__$1);
var G__19084 = null;
var G__19085 = (0);
var G__19086 = (0);
seq__19014 = G__19083;
chunk__19015 = G__19084;
count__19016 = G__19085;
i__19017 = G__19086;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,(((t instanceof cljs.core.ExceptionInfo))?cljs.core.cst$sym$ExceptionInfo:(((t instanceof EvalError))?cljs.core.cst$sym$js_SLASH_EvalError:(((t instanceof RangeError))?cljs.core.cst$sym$js_SLASH_RangeError:(((t instanceof ReferenceError))?cljs.core.cst$sym$js_SLASH_ReferenceError:(((t instanceof SyntaxError))?cljs.core.cst$sym$js_SLASH_SyntaxError:(((t instanceof URIError))?cljs.core.cst$sym$js_SLASH_URIError:(((t instanceof Error))?cljs.core.cst$sym$js_SLASH_Error:null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19087 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19088 = cljs.core.ex_cause(t);
via = G__19087;
t = G__19088;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$via,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),cljs.core.cst$kw$trace,null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cause,root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.cst$kw$clojure$error_SLASH_phase.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phase,phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19091 = datafied_throwable;
var map__19091__$1 = (((((!((map__19091 == null))))?(((((map__19091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19091):map__19091);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19091__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19091__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19091__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__19092 = cljs.core.last(via);
var map__19092__$1 = (((((!((map__19092 == null))))?(((((map__19092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19092):map__19092);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,cljs.core.cst$kw$data);
var map__19093 = data;
var map__19093__$1 = (((((!((map__19093 == null))))?(((((map__19093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19093):map__19093);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19093__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19093__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19093__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__19094 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19094__$1 = (((((!((map__19094 == null))))?(((((map__19094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19094):map__19094);
var top_data = map__19094__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19094__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19099 = phase;
var G__19099__$1 = (((G__19099 instanceof cljs.core.Keyword))?G__19099.fqn:null);
switch (G__19099__$1) {
case "read-source":
var map__19100 = data;
var map__19100__$1 = (((((!((map__19100 == null))))?(((((map__19100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19100):map__19100);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__19102 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19102__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19102,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__19102);
var G__19102__$2 = (cljs.core.truth_((function (){var fexpr__19103 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19103.cljs$core$IFn$_invoke$arity$1 ? fexpr__19103.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19103.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19102__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__19102__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19102__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__19102__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19104 = top_data;
var G__19104__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19104,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__19104);
var G__19104__$2 = (cljs.core.truth_((function (){var fexpr__19105 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19105.cljs$core$IFn$_invoke$arity$1 ? fexpr__19105.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19105.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19104__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__19104__$1);
var G__19104__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19104__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__19104__$2);
var G__19104__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19104__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__19104__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19104__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__19104__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19106 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19106,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19106,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19106,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19106,(3),null);
var G__19109 = top_data;
var G__19109__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19109,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__19109);
var G__19109__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19109__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__19109__$1);
var G__19109__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19109__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19109__$2);
var G__19109__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19109__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__19109__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19109__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__19109__$4;
}

break;
case "execution":
var vec__19110 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19110,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19110,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19110,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19110,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__19110,source__$1,method,file,line,G__19099,G__19099__$1,map__19091,map__19091__$1,via,trace,phase,map__19092,map__19092__$1,type,message,data,map__19093,map__19093__$1,problems,fn,caller,map__19094,map__19094__$1,top_data,source){
return (function (p1__19090_SHARP_){
var or__4131__auto__ = (p1__19090_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__19114 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19114.cljs$core$IFn$_invoke$arity$1 ? fexpr__19114.cljs$core$IFn$_invoke$arity$1(p1__19090_SHARP_) : fexpr__19114.call(null,p1__19090_SHARP_));
}
});})(vec__19110,source__$1,method,file,line,G__19099,G__19099__$1,map__19091,map__19091__$1,via,trace,phase,map__19092,map__19092__$1,type,message,data,map__19093,map__19093__$1,problems,fn,caller,map__19094,map__19094__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__19115 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__19115__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19115,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__19115);
var G__19115__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19115__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__19115__$1);
var G__19115__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19115__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19115__$2);
var G__19115__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19115__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__19115__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19115__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__19115__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19099__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19119){
var map__19120 = p__19119;
var map__19120__$1 = (((((!((map__19120 == null))))?(((((map__19120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19120):map__19120);
var triage_data = map__19120__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19120__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19120__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19120__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19120__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19120__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19120__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19120__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19120__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19122 = phase;
var G__19122__$1 = (((G__19122 instanceof cljs.core.Keyword))?G__19122.fqn:null);
switch (G__19122__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19123 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19124 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19125 = loc;
var G__19126 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19127_19160 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19128_19161 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19129_19162 = true;
var _STAR_print_fn_STAR__temp_val__19130_19163 = ((function (_STAR_print_newline_STAR__orig_val__19127_19160,_STAR_print_fn_STAR__orig_val__19128_19161,_STAR_print_newline_STAR__temp_val__19129_19162,sb__4661__auto__,G__19123,G__19124,G__19125,G__19122,G__19122__$1,loc,class_name,simple_class,cause_type,format,map__19120,map__19120__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__19127_19160,_STAR_print_fn_STAR__orig_val__19128_19161,_STAR_print_newline_STAR__temp_val__19129_19162,sb__4661__auto__,G__19123,G__19124,G__19125,G__19122,G__19122__$1,loc,class_name,simple_class,cause_type,format,map__19120,map__19120__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19129_19162;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19130_19163;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,((function (_STAR_print_newline_STAR__orig_val__19127_19160,_STAR_print_fn_STAR__orig_val__19128_19161,_STAR_print_newline_STAR__temp_val__19129_19162,_STAR_print_fn_STAR__temp_val__19130_19163,sb__4661__auto__,G__19123,G__19124,G__19125,G__19122,G__19122__$1,loc,class_name,simple_class,cause_type,format,map__19120,map__19120__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__19127_19160,_STAR_print_fn_STAR__orig_val__19128_19161,_STAR_print_newline_STAR__temp_val__19129_19162,_STAR_print_fn_STAR__temp_val__19130_19163,sb__4661__auto__,G__19123,G__19124,G__19125,G__19122,G__19122__$1,loc,class_name,simple_class,cause_type,format,map__19120,map__19120__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__19117_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19117_SHARP_,cljs.core.cst$kw$in);
});})(_STAR_print_newline_STAR__orig_val__19127_19160,_STAR_print_fn_STAR__orig_val__19128_19161,_STAR_print_newline_STAR__temp_val__19129_19162,_STAR_print_fn_STAR__temp_val__19130_19163,sb__4661__auto__,G__19123,G__19124,G__19125,G__19122,G__19122__$1,loc,class_name,simple_class,cause_type,format,map__19120,map__19120__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__19127_19160,_STAR_print_fn_STAR__orig_val__19128_19161,_STAR_print_newline_STAR__temp_val__19129_19162,_STAR_print_fn_STAR__temp_val__19130_19163,sb__4661__auto__,G__19123,G__19124,G__19125,G__19122,G__19122__$1,loc,class_name,simple_class,cause_type,format,map__19120,map__19120__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19128_19161;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19127_19160;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19123,G__19124,G__19125,G__19126) : format.call(null,G__19123,G__19124,G__19125,G__19126));

break;
case "macroexpansion":
var G__19131 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19132 = cause_type;
var G__19133 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19134 = loc;
var G__19135 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19131,G__19132,G__19133,G__19134,G__19135) : format.call(null,G__19131,G__19132,G__19133,G__19134,G__19135));

break;
case "compile-syntax-check":
var G__19136 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19137 = cause_type;
var G__19138 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19139 = loc;
var G__19140 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19136,G__19137,G__19138,G__19139,G__19140) : format.call(null,G__19136,G__19137,G__19138,G__19139,G__19140));

break;
case "compilation":
var G__19141 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19142 = cause_type;
var G__19143 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19144 = loc;
var G__19145 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19141,G__19142,G__19143,G__19144,G__19145) : format.call(null,G__19141,G__19142,G__19143,G__19144,G__19145));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19146 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19147 = symbol;
var G__19148 = loc;
var G__19149 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19150_19164 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19151_19165 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19152_19166 = true;
var _STAR_print_fn_STAR__temp_val__19153_19167 = ((function (_STAR_print_newline_STAR__orig_val__19150_19164,_STAR_print_fn_STAR__orig_val__19151_19165,_STAR_print_newline_STAR__temp_val__19152_19166,sb__4661__auto__,G__19146,G__19147,G__19148,G__19122,G__19122__$1,loc,class_name,simple_class,cause_type,format,map__19120,map__19120__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__19150_19164,_STAR_print_fn_STAR__orig_val__19151_19165,_STAR_print_newline_STAR__temp_val__19152_19166,sb__4661__auto__,G__19146,G__19147,G__19148,G__19122,G__19122__$1,loc,class_name,simple_class,cause_type,format,map__19120,map__19120__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19152_19166;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19153_19167;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,((function (_STAR_print_newline_STAR__orig_val__19150_19164,_STAR_print_fn_STAR__orig_val__19151_19165,_STAR_print_newline_STAR__temp_val__19152_19166,_STAR_print_fn_STAR__temp_val__19153_19167,sb__4661__auto__,G__19146,G__19147,G__19148,G__19122,G__19122__$1,loc,class_name,simple_class,cause_type,format,map__19120,map__19120__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__19150_19164,_STAR_print_fn_STAR__orig_val__19151_19165,_STAR_print_newline_STAR__temp_val__19152_19166,_STAR_print_fn_STAR__temp_val__19153_19167,sb__4661__auto__,G__19146,G__19147,G__19148,G__19122,G__19122__$1,loc,class_name,simple_class,cause_type,format,map__19120,map__19120__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__19118_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19118_SHARP_,cljs.core.cst$kw$in);
});})(_STAR_print_newline_STAR__orig_val__19150_19164,_STAR_print_fn_STAR__orig_val__19151_19165,_STAR_print_newline_STAR__temp_val__19152_19166,_STAR_print_fn_STAR__temp_val__19153_19167,sb__4661__auto__,G__19146,G__19147,G__19148,G__19122,G__19122__$1,loc,class_name,simple_class,cause_type,format,map__19120,map__19120__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__19150_19164,_STAR_print_fn_STAR__orig_val__19151_19165,_STAR_print_newline_STAR__temp_val__19152_19166,_STAR_print_fn_STAR__temp_val__19153_19167,sb__4661__auto__,G__19146,G__19147,G__19148,G__19122,G__19122__$1,loc,class_name,simple_class,cause_type,format,map__19120,map__19120__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19151_19165;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19150_19164;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19146,G__19147,G__19148,G__19149) : format.call(null,G__19146,G__19147,G__19148,G__19149));
} else {
var G__19154 = "Execution error%s at %s(%s).\n%s\n";
var G__19155 = cause_type;
var G__19156 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19157 = loc;
var G__19158 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19154,G__19155,G__19156,G__19157,G__19158) : format.call(null,G__19154,G__19155,G__19156,G__19157,G__19158));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19122__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
