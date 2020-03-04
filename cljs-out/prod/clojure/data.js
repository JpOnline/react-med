// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__15155){
var vec__15156 = p__15155;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15156,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15156,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__15159 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15159,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15159,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15159,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__15163 = arguments.length;
switch (G__15163) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__15165_15189 = clojure.data.equality_partition;
var G__15166_15190 = "null";
var G__15167_15191 = ((function (G__15165_15189,G__15166_15190){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__15165_15189,G__15166_15190))
;
goog.object.set(G__15165_15189,G__15166_15190,G__15167_15191);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__15168_15192 = clojure.data.equality_partition;
var G__15169_15193 = "string";
var G__15170_15194 = ((function (G__15168_15192,G__15169_15193){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__15168_15192,G__15169_15193))
;
goog.object.set(G__15168_15192,G__15169_15193,G__15170_15194);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__15171_15195 = clojure.data.equality_partition;
var G__15172_15196 = "number";
var G__15173_15197 = ((function (G__15171_15195,G__15172_15196){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__15171_15195,G__15172_15196))
;
goog.object.set(G__15171_15195,G__15172_15196,G__15173_15197);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__15174_15198 = clojure.data.equality_partition;
var G__15175_15199 = "array";
var G__15176_15200 = ((function (G__15174_15198,G__15175_15199){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__15174_15198,G__15175_15199))
;
goog.object.set(G__15174_15198,G__15175_15199,G__15176_15200);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__15177_15201 = clojure.data.equality_partition;
var G__15178_15202 = "function";
var G__15179_15203 = ((function (G__15177_15201,G__15178_15202){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__15177_15201,G__15178_15202))
;
goog.object.set(G__15177_15201,G__15178_15202,G__15179_15203);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__15180_15204 = clojure.data.equality_partition;
var G__15181_15205 = "boolean";
var G__15182_15206 = ((function (G__15180_15204,G__15181_15205){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__15180_15204,G__15181_15205))
;
goog.object.set(G__15180_15204,G__15181_15205,G__15182_15206);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__15183_15207 = clojure.data.equality_partition;
var G__15184_15208 = "_";
var G__15185_15209 = ((function (G__15183_15207,G__15184_15208){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__15183_15207,G__15184_15208))
;
goog.object.set(G__15183_15207,G__15184_15208,G__15185_15209);
goog.object.set(clojure.data.Diff,"null",true);

var G__15210_15234 = clojure.data.diff_similar;
var G__15211_15235 = "null";
var G__15212_15236 = ((function (G__15210_15234,G__15211_15235){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__15210_15234,G__15211_15235))
;
goog.object.set(G__15210_15234,G__15211_15235,G__15212_15236);

goog.object.set(clojure.data.Diff,"string",true);

var G__15213_15237 = clojure.data.diff_similar;
var G__15214_15238 = "string";
var G__15215_15239 = ((function (G__15213_15237,G__15214_15238){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__15213_15237,G__15214_15238))
;
goog.object.set(G__15213_15237,G__15214_15238,G__15215_15239);

goog.object.set(clojure.data.Diff,"number",true);

var G__15216_15240 = clojure.data.diff_similar;
var G__15217_15241 = "number";
var G__15218_15242 = ((function (G__15216_15240,G__15217_15241){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__15216_15240,G__15217_15241))
;
goog.object.set(G__15216_15240,G__15217_15241,G__15218_15242);

goog.object.set(clojure.data.Diff,"array",true);

var G__15219_15243 = clojure.data.diff_similar;
var G__15220_15244 = "array";
var G__15221_15245 = ((function (G__15219_15243,G__15220_15244){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__15219_15243,G__15220_15244))
;
goog.object.set(G__15219_15243,G__15220_15244,G__15221_15245);

goog.object.set(clojure.data.Diff,"function",true);

var G__15222_15246 = clojure.data.diff_similar;
var G__15223_15247 = "function";
var G__15224_15248 = ((function (G__15222_15246,G__15223_15247){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__15222_15246,G__15223_15247))
;
goog.object.set(G__15222_15246,G__15223_15247,G__15224_15248);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__15225_15249 = clojure.data.diff_similar;
var G__15226_15250 = "boolean";
var G__15227_15251 = ((function (G__15225_15249,G__15226_15250){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__15225_15249,G__15226_15250))
;
goog.object.set(G__15225_15249,G__15226_15250,G__15227_15251);

goog.object.set(clojure.data.Diff,"_",true);

var G__15228_15252 = clojure.data.diff_similar;
var G__15229_15253 = "_";
var G__15230_15254 = ((function (G__15228_15252,G__15229_15253){
return (function (a,b){
var fexpr__15232 = (function (){var G__15233 = clojure.data.equality_partition(a);
var G__15233__$1 = (((G__15233 instanceof cljs.core.Keyword))?G__15233.fqn:null);
switch (G__15233__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15233__$1)].join('')));

}
})();
return (fexpr__15232.cljs$core$IFn$_invoke$arity$2 ? fexpr__15232.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__15232.call(null,a,b));
});})(G__15228_15252,G__15229_15253))
;
goog.object.set(G__15228_15252,G__15229_15253,G__15230_15254);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
