// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19178){
var map__19179 = p__19178;
var map__19179__$1 = (((((!((map__19179 == null))))?(((((map__19179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19179):map__19179);
var m = map__19179__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19179__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19179__$1,cljs.core.cst$kw$name);
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
var seq__19181_19213 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__19182_19214 = null;
var count__19183_19215 = (0);
var i__19184_19216 = (0);
while(true){
if((i__19184_19216 < count__19183_19215)){
var f_19217 = chunk__19182_19214.cljs$core$IIndexed$_nth$arity$2(null,i__19184_19216);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19217], 0));


var G__19218 = seq__19181_19213;
var G__19219 = chunk__19182_19214;
var G__19220 = count__19183_19215;
var G__19221 = (i__19184_19216 + (1));
seq__19181_19213 = G__19218;
chunk__19182_19214 = G__19219;
count__19183_19215 = G__19220;
i__19184_19216 = G__19221;
continue;
} else {
var temp__5735__auto___19222 = cljs.core.seq(seq__19181_19213);
if(temp__5735__auto___19222){
var seq__19181_19223__$1 = temp__5735__auto___19222;
if(cljs.core.chunked_seq_QMARK_(seq__19181_19223__$1)){
var c__4550__auto___19224 = cljs.core.chunk_first(seq__19181_19223__$1);
var G__19225 = cljs.core.chunk_rest(seq__19181_19223__$1);
var G__19226 = c__4550__auto___19224;
var G__19227 = cljs.core.count(c__4550__auto___19224);
var G__19228 = (0);
seq__19181_19213 = G__19225;
chunk__19182_19214 = G__19226;
count__19183_19215 = G__19227;
i__19184_19216 = G__19228;
continue;
} else {
var f_19229 = cljs.core.first(seq__19181_19223__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19229], 0));


var G__19230 = cljs.core.next(seq__19181_19223__$1);
var G__19231 = null;
var G__19232 = (0);
var G__19233 = (0);
seq__19181_19213 = G__19230;
chunk__19182_19214 = G__19231;
count__19183_19215 = G__19232;
i__19184_19216 = G__19233;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19234 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19234], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_19234)))?cljs.core.second(arglists_19234):arglists_19234)], 0));
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
var seq__19185_19235 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__19186_19236 = null;
var count__19187_19237 = (0);
var i__19188_19238 = (0);
while(true){
if((i__19188_19238 < count__19187_19237)){
var vec__19199_19239 = chunk__19186_19236.cljs$core$IIndexed$_nth$arity$2(null,i__19188_19238);
var name_19240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19199_19239,(0),null);
var map__19202_19241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19199_19239,(1),null);
var map__19202_19242__$1 = (((((!((map__19202_19241 == null))))?(((((map__19202_19241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19202_19241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19202_19241):map__19202_19241);
var doc_19243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19202_19242__$1,cljs.core.cst$kw$doc);
var arglists_19244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19202_19242__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19240], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19244], 0));

if(cljs.core.truth_(doc_19243)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19243], 0));
} else {
}


var G__19245 = seq__19185_19235;
var G__19246 = chunk__19186_19236;
var G__19247 = count__19187_19237;
var G__19248 = (i__19188_19238 + (1));
seq__19185_19235 = G__19245;
chunk__19186_19236 = G__19246;
count__19187_19237 = G__19247;
i__19188_19238 = G__19248;
continue;
} else {
var temp__5735__auto___19249 = cljs.core.seq(seq__19185_19235);
if(temp__5735__auto___19249){
var seq__19185_19250__$1 = temp__5735__auto___19249;
if(cljs.core.chunked_seq_QMARK_(seq__19185_19250__$1)){
var c__4550__auto___19251 = cljs.core.chunk_first(seq__19185_19250__$1);
var G__19252 = cljs.core.chunk_rest(seq__19185_19250__$1);
var G__19253 = c__4550__auto___19251;
var G__19254 = cljs.core.count(c__4550__auto___19251);
var G__19255 = (0);
seq__19185_19235 = G__19252;
chunk__19186_19236 = G__19253;
count__19187_19237 = G__19254;
i__19188_19238 = G__19255;
continue;
} else {
var vec__19204_19256 = cljs.core.first(seq__19185_19250__$1);
var name_19257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19204_19256,(0),null);
var map__19207_19258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19204_19256,(1),null);
var map__19207_19259__$1 = (((((!((map__19207_19258 == null))))?(((((map__19207_19258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19207_19258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19207_19258):map__19207_19258);
var doc_19260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19207_19259__$1,cljs.core.cst$kw$doc);
var arglists_19261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19207_19259__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19257], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19261], 0));

if(cljs.core.truth_(doc_19260)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19260], 0));
} else {
}


var G__19262 = cljs.core.next(seq__19185_19250__$1);
var G__19263 = null;
var G__19264 = (0);
var G__19265 = (0);
seq__19185_19235 = G__19262;
chunk__19186_19236 = G__19263;
count__19187_19237 = G__19264;
i__19188_19238 = G__19265;
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

var seq__19209 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__19210 = null;
var count__19211 = (0);
var i__19212 = (0);
while(true){
if((i__19212 < count__19211)){
var role = chunk__19210.cljs$core$IIndexed$_nth$arity$2(null,i__19212);
var temp__5735__auto___19266__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___19266__$1)){
var spec_19267 = temp__5735__auto___19266__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19267)], 0));
} else {
}


var G__19268 = seq__19209;
var G__19269 = chunk__19210;
var G__19270 = count__19211;
var G__19271 = (i__19212 + (1));
seq__19209 = G__19268;
chunk__19210 = G__19269;
count__19211 = G__19270;
i__19212 = G__19271;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__19209);
if(temp__5735__auto____$1){
var seq__19209__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19209__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__19209__$1);
var G__19272 = cljs.core.chunk_rest(seq__19209__$1);
var G__19273 = c__4550__auto__;
var G__19274 = cljs.core.count(c__4550__auto__);
var G__19275 = (0);
seq__19209 = G__19272;
chunk__19210 = G__19273;
count__19211 = G__19274;
i__19212 = G__19275;
continue;
} else {
var role = cljs.core.first(seq__19209__$1);
var temp__5735__auto___19276__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___19276__$2)){
var spec_19277 = temp__5735__auto___19276__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19277)], 0));
} else {
}


var G__19278 = cljs.core.next(seq__19209__$1);
var G__19279 = null;
var G__19280 = (0);
var G__19281 = (0);
seq__19209 = G__19278;
chunk__19210 = G__19279;
count__19211 = G__19280;
i__19212 = G__19281;
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
var G__19282 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19283 = cljs.core.ex_cause(t);
via = G__19282;
t = G__19283;
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
var map__19286 = datafied_throwable;
var map__19286__$1 = (((((!((map__19286 == null))))?(((((map__19286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19286):map__19286);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19286__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19286__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19286__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__19287 = cljs.core.last(via);
var map__19287__$1 = (((((!((map__19287 == null))))?(((((map__19287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19287):map__19287);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19287__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19287__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19287__$1,cljs.core.cst$kw$data);
var map__19288 = data;
var map__19288__$1 = (((((!((map__19288 == null))))?(((((map__19288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19288):map__19288);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19288__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19288__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19288__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__19289 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19289__$1 = (((((!((map__19289 == null))))?(((((map__19289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19289):map__19289);
var top_data = map__19289__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19289__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19294 = phase;
var G__19294__$1 = (((G__19294 instanceof cljs.core.Keyword))?G__19294.fqn:null);
switch (G__19294__$1) {
case "read-source":
var map__19295 = data;
var map__19295__$1 = (((((!((map__19295 == null))))?(((((map__19295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19295):map__19295);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19295__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19295__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__19297 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19297__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19297,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__19297);
var G__19297__$2 = (cljs.core.truth_((function (){var fexpr__19298 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19298.cljs$core$IFn$_invoke$arity$1 ? fexpr__19298.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19298.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19297__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__19297__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19297__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__19297__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19299 = top_data;
var G__19299__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19299,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__19299);
var G__19299__$2 = (cljs.core.truth_((function (){var fexpr__19300 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19300.cljs$core$IFn$_invoke$arity$1 ? fexpr__19300.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19300.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19299__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__19299__$1);
var G__19299__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19299__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__19299__$2);
var G__19299__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19299__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__19299__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19299__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__19299__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19301 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19301,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19301,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19301,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19301,(3),null);
var G__19304 = top_data;
var G__19304__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19304,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__19304);
var G__19304__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19304__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__19304__$1);
var G__19304__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19304__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19304__$2);
var G__19304__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19304__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__19304__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19304__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__19304__$4;
}

break;
case "execution":
var vec__19305 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19305,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19305,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19305,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19305,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__19305,source__$1,method,file,line,G__19294,G__19294__$1,map__19286,map__19286__$1,via,trace,phase,map__19287,map__19287__$1,type,message,data,map__19288,map__19288__$1,problems,fn,caller,map__19289,map__19289__$1,top_data,source){
return (function (p1__19285_SHARP_){
var or__4131__auto__ = (p1__19285_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__19309 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19309.cljs$core$IFn$_invoke$arity$1 ? fexpr__19309.cljs$core$IFn$_invoke$arity$1(p1__19285_SHARP_) : fexpr__19309.call(null,p1__19285_SHARP_));
}
});})(vec__19305,source__$1,method,file,line,G__19294,G__19294__$1,map__19286,map__19286__$1,via,trace,phase,map__19287,map__19287__$1,type,message,data,map__19288,map__19288__$1,problems,fn,caller,map__19289,map__19289__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__19310 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__19310__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19310,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__19310);
var G__19310__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19310__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__19310__$1);
var G__19310__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19310__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19310__$2);
var G__19310__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19310__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__19310__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19310__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__19310__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19294__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19314){
var map__19315 = p__19314;
var map__19315__$1 = (((((!((map__19315 == null))))?(((((map__19315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19315):map__19315);
var triage_data = map__19315__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19315__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19315__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19315__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19315__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19315__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19315__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19315__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19315__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
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
var G__19317 = phase;
var G__19317__$1 = (((G__19317 instanceof cljs.core.Keyword))?G__19317.fqn:null);
switch (G__19317__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19318 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19319 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19320 = loc;
var G__19321 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19322_19355 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19323_19356 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19324_19357 = true;
var _STAR_print_fn_STAR__temp_val__19325_19358 = ((function (_STAR_print_newline_STAR__orig_val__19322_19355,_STAR_print_fn_STAR__orig_val__19323_19356,_STAR_print_newline_STAR__temp_val__19324_19357,sb__4661__auto__,G__19318,G__19319,G__19320,G__19317,G__19317__$1,loc,class_name,simple_class,cause_type,format,map__19315,map__19315__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__19322_19355,_STAR_print_fn_STAR__orig_val__19323_19356,_STAR_print_newline_STAR__temp_val__19324_19357,sb__4661__auto__,G__19318,G__19319,G__19320,G__19317,G__19317__$1,loc,class_name,simple_class,cause_type,format,map__19315,map__19315__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19324_19357;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19325_19358;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,((function (_STAR_print_newline_STAR__orig_val__19322_19355,_STAR_print_fn_STAR__orig_val__19323_19356,_STAR_print_newline_STAR__temp_val__19324_19357,_STAR_print_fn_STAR__temp_val__19325_19358,sb__4661__auto__,G__19318,G__19319,G__19320,G__19317,G__19317__$1,loc,class_name,simple_class,cause_type,format,map__19315,map__19315__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__19322_19355,_STAR_print_fn_STAR__orig_val__19323_19356,_STAR_print_newline_STAR__temp_val__19324_19357,_STAR_print_fn_STAR__temp_val__19325_19358,sb__4661__auto__,G__19318,G__19319,G__19320,G__19317,G__19317__$1,loc,class_name,simple_class,cause_type,format,map__19315,map__19315__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__19312_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19312_SHARP_,cljs.core.cst$kw$in);
});})(_STAR_print_newline_STAR__orig_val__19322_19355,_STAR_print_fn_STAR__orig_val__19323_19356,_STAR_print_newline_STAR__temp_val__19324_19357,_STAR_print_fn_STAR__temp_val__19325_19358,sb__4661__auto__,G__19318,G__19319,G__19320,G__19317,G__19317__$1,loc,class_name,simple_class,cause_type,format,map__19315,map__19315__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__19322_19355,_STAR_print_fn_STAR__orig_val__19323_19356,_STAR_print_newline_STAR__temp_val__19324_19357,_STAR_print_fn_STAR__temp_val__19325_19358,sb__4661__auto__,G__19318,G__19319,G__19320,G__19317,G__19317__$1,loc,class_name,simple_class,cause_type,format,map__19315,map__19315__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19323_19356;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19322_19355;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19318,G__19319,G__19320,G__19321) : format.call(null,G__19318,G__19319,G__19320,G__19321));

break;
case "macroexpansion":
var G__19326 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19327 = cause_type;
var G__19328 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19329 = loc;
var G__19330 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19326,G__19327,G__19328,G__19329,G__19330) : format.call(null,G__19326,G__19327,G__19328,G__19329,G__19330));

break;
case "compile-syntax-check":
var G__19331 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19332 = cause_type;
var G__19333 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19334 = loc;
var G__19335 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19331,G__19332,G__19333,G__19334,G__19335) : format.call(null,G__19331,G__19332,G__19333,G__19334,G__19335));

break;
case "compilation":
var G__19336 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19337 = cause_type;
var G__19338 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19339 = loc;
var G__19340 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19336,G__19337,G__19338,G__19339,G__19340) : format.call(null,G__19336,G__19337,G__19338,G__19339,G__19340));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19341 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19342 = symbol;
var G__19343 = loc;
var G__19344 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19345_19359 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19346_19360 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19347_19361 = true;
var _STAR_print_fn_STAR__temp_val__19348_19362 = ((function (_STAR_print_newline_STAR__orig_val__19345_19359,_STAR_print_fn_STAR__orig_val__19346_19360,_STAR_print_newline_STAR__temp_val__19347_19361,sb__4661__auto__,G__19341,G__19342,G__19343,G__19317,G__19317__$1,loc,class_name,simple_class,cause_type,format,map__19315,map__19315__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__19345_19359,_STAR_print_fn_STAR__orig_val__19346_19360,_STAR_print_newline_STAR__temp_val__19347_19361,sb__4661__auto__,G__19341,G__19342,G__19343,G__19317,G__19317__$1,loc,class_name,simple_class,cause_type,format,map__19315,map__19315__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19347_19361;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19348_19362;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,((function (_STAR_print_newline_STAR__orig_val__19345_19359,_STAR_print_fn_STAR__orig_val__19346_19360,_STAR_print_newline_STAR__temp_val__19347_19361,_STAR_print_fn_STAR__temp_val__19348_19362,sb__4661__auto__,G__19341,G__19342,G__19343,G__19317,G__19317__$1,loc,class_name,simple_class,cause_type,format,map__19315,map__19315__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__19345_19359,_STAR_print_fn_STAR__orig_val__19346_19360,_STAR_print_newline_STAR__temp_val__19347_19361,_STAR_print_fn_STAR__temp_val__19348_19362,sb__4661__auto__,G__19341,G__19342,G__19343,G__19317,G__19317__$1,loc,class_name,simple_class,cause_type,format,map__19315,map__19315__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__19313_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19313_SHARP_,cljs.core.cst$kw$in);
});})(_STAR_print_newline_STAR__orig_val__19345_19359,_STAR_print_fn_STAR__orig_val__19346_19360,_STAR_print_newline_STAR__temp_val__19347_19361,_STAR_print_fn_STAR__temp_val__19348_19362,sb__4661__auto__,G__19341,G__19342,G__19343,G__19317,G__19317__$1,loc,class_name,simple_class,cause_type,format,map__19315,map__19315__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__19345_19359,_STAR_print_fn_STAR__orig_val__19346_19360,_STAR_print_newline_STAR__temp_val__19347_19361,_STAR_print_fn_STAR__temp_val__19348_19362,sb__4661__auto__,G__19341,G__19342,G__19343,G__19317,G__19317__$1,loc,class_name,simple_class,cause_type,format,map__19315,map__19315__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19346_19360;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19345_19359;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19341,G__19342,G__19343,G__19344) : format.call(null,G__19341,G__19342,G__19343,G__19344));
} else {
var G__19349 = "Execution error%s at %s(%s).\n%s\n";
var G__19350 = cause_type;
var G__19351 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19352 = loc;
var G__19353 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19349,G__19350,G__19351,G__19352,G__19353) : format.call(null,G__19349,G__19350,G__19351,G__19352,G__19353));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19317__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
