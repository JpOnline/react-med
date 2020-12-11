// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13819){
var map__13820 = p__13819;
var map__13820__$1 = (((((!((map__13820 == null))))?(((((map__13820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13820):map__13820);
var m = map__13820__$1;
var n = cljs.core.get.call(null,map__13820__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13820__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13822_13854 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13823_13855 = null;
var count__13824_13856 = (0);
var i__13825_13857 = (0);
while(true){
if((i__13825_13857 < count__13824_13856)){
var f_13858 = cljs.core._nth.call(null,chunk__13823_13855,i__13825_13857);
cljs.core.println.call(null,"  ",f_13858);


var G__13859 = seq__13822_13854;
var G__13860 = chunk__13823_13855;
var G__13861 = count__13824_13856;
var G__13862 = (i__13825_13857 + (1));
seq__13822_13854 = G__13859;
chunk__13823_13855 = G__13860;
count__13824_13856 = G__13861;
i__13825_13857 = G__13862;
continue;
} else {
var temp__5735__auto___13863 = cljs.core.seq.call(null,seq__13822_13854);
if(temp__5735__auto___13863){
var seq__13822_13864__$1 = temp__5735__auto___13863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13822_13864__$1)){
var c__4550__auto___13865 = cljs.core.chunk_first.call(null,seq__13822_13864__$1);
var G__13866 = cljs.core.chunk_rest.call(null,seq__13822_13864__$1);
var G__13867 = c__4550__auto___13865;
var G__13868 = cljs.core.count.call(null,c__4550__auto___13865);
var G__13869 = (0);
seq__13822_13854 = G__13866;
chunk__13823_13855 = G__13867;
count__13824_13856 = G__13868;
i__13825_13857 = G__13869;
continue;
} else {
var f_13870 = cljs.core.first.call(null,seq__13822_13864__$1);
cljs.core.println.call(null,"  ",f_13870);


var G__13871 = cljs.core.next.call(null,seq__13822_13864__$1);
var G__13872 = null;
var G__13873 = (0);
var G__13874 = (0);
seq__13822_13854 = G__13871;
chunk__13823_13855 = G__13872;
count__13824_13856 = G__13873;
i__13825_13857 = G__13874;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13875 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13875);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13875)))?cljs.core.second.call(null,arglists_13875):arglists_13875));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13826_13876 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13827_13877 = null;
var count__13828_13878 = (0);
var i__13829_13879 = (0);
while(true){
if((i__13829_13879 < count__13828_13878)){
var vec__13840_13880 = cljs.core._nth.call(null,chunk__13827_13877,i__13829_13879);
var name_13881 = cljs.core.nth.call(null,vec__13840_13880,(0),null);
var map__13843_13882 = cljs.core.nth.call(null,vec__13840_13880,(1),null);
var map__13843_13883__$1 = (((((!((map__13843_13882 == null))))?(((((map__13843_13882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13843_13882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13843_13882):map__13843_13882);
var doc_13884 = cljs.core.get.call(null,map__13843_13883__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13885 = cljs.core.get.call(null,map__13843_13883__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13881);

cljs.core.println.call(null," ",arglists_13885);

if(cljs.core.truth_(doc_13884)){
cljs.core.println.call(null," ",doc_13884);
} else {
}


var G__13886 = seq__13826_13876;
var G__13887 = chunk__13827_13877;
var G__13888 = count__13828_13878;
var G__13889 = (i__13829_13879 + (1));
seq__13826_13876 = G__13886;
chunk__13827_13877 = G__13887;
count__13828_13878 = G__13888;
i__13829_13879 = G__13889;
continue;
} else {
var temp__5735__auto___13890 = cljs.core.seq.call(null,seq__13826_13876);
if(temp__5735__auto___13890){
var seq__13826_13891__$1 = temp__5735__auto___13890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13826_13891__$1)){
var c__4550__auto___13892 = cljs.core.chunk_first.call(null,seq__13826_13891__$1);
var G__13893 = cljs.core.chunk_rest.call(null,seq__13826_13891__$1);
var G__13894 = c__4550__auto___13892;
var G__13895 = cljs.core.count.call(null,c__4550__auto___13892);
var G__13896 = (0);
seq__13826_13876 = G__13893;
chunk__13827_13877 = G__13894;
count__13828_13878 = G__13895;
i__13829_13879 = G__13896;
continue;
} else {
var vec__13845_13897 = cljs.core.first.call(null,seq__13826_13891__$1);
var name_13898 = cljs.core.nth.call(null,vec__13845_13897,(0),null);
var map__13848_13899 = cljs.core.nth.call(null,vec__13845_13897,(1),null);
var map__13848_13900__$1 = (((((!((map__13848_13899 == null))))?(((((map__13848_13899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13848_13899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13848_13899):map__13848_13899);
var doc_13901 = cljs.core.get.call(null,map__13848_13900__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13902 = cljs.core.get.call(null,map__13848_13900__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13898);

cljs.core.println.call(null," ",arglists_13902);

if(cljs.core.truth_(doc_13901)){
cljs.core.println.call(null," ",doc_13901);
} else {
}


var G__13903 = cljs.core.next.call(null,seq__13826_13891__$1);
var G__13904 = null;
var G__13905 = (0);
var G__13906 = (0);
seq__13826_13876 = G__13903;
chunk__13827_13877 = G__13904;
count__13828_13878 = G__13905;
i__13829_13879 = G__13906;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__13850 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13851 = null;
var count__13852 = (0);
var i__13853 = (0);
while(true){
if((i__13853 < count__13852)){
var role = cljs.core._nth.call(null,chunk__13851,i__13853);
var temp__5735__auto___13907__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___13907__$1)){
var spec_13908 = temp__5735__auto___13907__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13908));
} else {
}


var G__13909 = seq__13850;
var G__13910 = chunk__13851;
var G__13911 = count__13852;
var G__13912 = (i__13853 + (1));
seq__13850 = G__13909;
chunk__13851 = G__13910;
count__13852 = G__13911;
i__13853 = G__13912;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__13850);
if(temp__5735__auto____$1){
var seq__13850__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13850__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13850__$1);
var G__13913 = cljs.core.chunk_rest.call(null,seq__13850__$1);
var G__13914 = c__4550__auto__;
var G__13915 = cljs.core.count.call(null,c__4550__auto__);
var G__13916 = (0);
seq__13850 = G__13913;
chunk__13851 = G__13914;
count__13852 = G__13915;
i__13853 = G__13916;
continue;
} else {
var role = cljs.core.first.call(null,seq__13850__$1);
var temp__5735__auto___13917__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___13917__$2)){
var spec_13918 = temp__5735__auto___13917__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13918));
} else {
}


var G__13919 = cljs.core.next.call(null,seq__13850__$1);
var G__13920 = null;
var G__13921 = (0);
var G__13922 = (0);
seq__13850 = G__13919;
chunk__13851 = G__13920;
count__13852 = G__13921;
i__13853 = G__13922;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__13923 = cljs.core.conj.call(null,via,t);
var G__13924 = cljs.core.ex_cause.call(null,t);
via = G__13923;
t = G__13924;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
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
var map__13927 = datafied_throwable;
var map__13927__$1 = (((((!((map__13927 == null))))?(((((map__13927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13927):map__13927);
var via = cljs.core.get.call(null,map__13927__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__13927__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__13927__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__13928 = cljs.core.last.call(null,via);
var map__13928__$1 = (((((!((map__13928 == null))))?(((((map__13928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13928):map__13928);
var type = cljs.core.get.call(null,map__13928__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__13928__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__13928__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__13929 = data;
var map__13929__$1 = (((((!((map__13929 == null))))?(((((map__13929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13929):map__13929);
var problems = cljs.core.get.call(null,map__13929__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__13929__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__13929__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__13930 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__13930__$1 = (((((!((map__13930 == null))))?(((((map__13930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13930):map__13930);
var top_data = map__13930__$1;
var source = cljs.core.get.call(null,map__13930__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__13935 = phase;
var G__13935__$1 = (((G__13935 instanceof cljs.core.Keyword))?G__13935.fqn:null);
switch (G__13935__$1) {
case "read-source":
var map__13936 = data;
var map__13936__$1 = (((((!((map__13936 == null))))?(((((map__13936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13936):map__13936);
var line = cljs.core.get.call(null,map__13936__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__13936__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__13938 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__13938__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__13938,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__13938);
var G__13938__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__13938__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__13938__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__13938__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__13938__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__13939 = top_data;
var G__13939__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__13939,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__13939);
var G__13939__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__13939__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__13939__$1);
var G__13939__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__13939__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__13939__$2);
var G__13939__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__13939__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__13939__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__13939__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__13939__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__13940 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__13940,(0),null);
var method = cljs.core.nth.call(null,vec__13940,(1),null);
var file = cljs.core.nth.call(null,vec__13940,(2),null);
var line = cljs.core.nth.call(null,vec__13940,(3),null);
var G__13943 = top_data;
var G__13943__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__13943,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__13943);
var G__13943__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__13943__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__13943__$1);
var G__13943__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__13943__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__13943__$2);
var G__13943__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__13943__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__13943__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__13943__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__13943__$4;
}

break;
case "execution":
var vec__13944 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__13944,(0),null);
var method = cljs.core.nth.call(null,vec__13944,(1),null);
var file = cljs.core.nth.call(null,vec__13944,(2),null);
var line = cljs.core.nth.call(null,vec__13944,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__13944,source__$1,method,file,line,G__13935,G__13935__$1,map__13927,map__13927__$1,via,trace,phase,map__13928,map__13928__$1,type,message,data,map__13929,map__13929__$1,problems,fn,caller,map__13930,map__13930__$1,top_data,source){
return (function (p1__13926_SHARP_){
var or__4131__auto__ = (p1__13926_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__13926_SHARP_);
}
});})(vec__13944,source__$1,method,file,line,G__13935,G__13935__$1,map__13927,map__13927__$1,via,trace,phase,map__13928,map__13928__$1,type,message,data,map__13929,map__13929__$1,problems,fn,caller,map__13930,map__13930__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__13947 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__13947__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__13947,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__13947);
var G__13947__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__13947__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__13947__$1);
var G__13947__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__13947__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__13947__$2);
var G__13947__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__13947__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__13947__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__13947__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__13947__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13935__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__13951){
var map__13952 = p__13951;
var map__13952__$1 = (((((!((map__13952 == null))))?(((((map__13952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13952):map__13952);
var triage_data = map__13952__$1;
var phase = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__13954 = phase;
var G__13954__$1 = (((G__13954 instanceof cljs.core.Keyword))?G__13954.fqn:null);
switch (G__13954__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13955_13964 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13956_13965 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13957_13966 = true;
var _STAR_print_fn_STAR__temp_val__13958_13967 = ((function (_STAR_print_newline_STAR__orig_val__13955_13964,_STAR_print_fn_STAR__orig_val__13956_13965,_STAR_print_newline_STAR__temp_val__13957_13966,sb__4661__auto__,G__13954,G__13954__$1,loc,class_name,simple_class,cause_type,format,map__13952,map__13952__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__13955_13964,_STAR_print_fn_STAR__orig_val__13956_13965,_STAR_print_newline_STAR__temp_val__13957_13966,sb__4661__auto__,G__13954,G__13954__$1,loc,class_name,simple_class,cause_type,format,map__13952,map__13952__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13957_13966;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13958_13967;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__13955_13964,_STAR_print_fn_STAR__orig_val__13956_13965,_STAR_print_newline_STAR__temp_val__13957_13966,_STAR_print_fn_STAR__temp_val__13958_13967,sb__4661__auto__,G__13954,G__13954__$1,loc,class_name,simple_class,cause_type,format,map__13952,map__13952__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__13955_13964,_STAR_print_fn_STAR__orig_val__13956_13965,_STAR_print_newline_STAR__temp_val__13957_13966,_STAR_print_fn_STAR__temp_val__13958_13967,sb__4661__auto__,G__13954,G__13954__$1,loc,class_name,simple_class,cause_type,format,map__13952,map__13952__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__13949_SHARP_){
return cljs.core.dissoc.call(null,p1__13949_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__13955_13964,_STAR_print_fn_STAR__orig_val__13956_13965,_STAR_print_newline_STAR__temp_val__13957_13966,_STAR_print_fn_STAR__temp_val__13958_13967,sb__4661__auto__,G__13954,G__13954__$1,loc,class_name,simple_class,cause_type,format,map__13952,map__13952__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__13955_13964,_STAR_print_fn_STAR__orig_val__13956_13965,_STAR_print_newline_STAR__temp_val__13957_13966,_STAR_print_fn_STAR__temp_val__13958_13967,sb__4661__auto__,G__13954,G__13954__$1,loc,class_name,simple_class,cause_type,format,map__13952,map__13952__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13956_13965;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13955_13964;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13959_13968 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13960_13969 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13961_13970 = true;
var _STAR_print_fn_STAR__temp_val__13962_13971 = ((function (_STAR_print_newline_STAR__orig_val__13959_13968,_STAR_print_fn_STAR__orig_val__13960_13969,_STAR_print_newline_STAR__temp_val__13961_13970,sb__4661__auto__,G__13954,G__13954__$1,loc,class_name,simple_class,cause_type,format,map__13952,map__13952__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__13959_13968,_STAR_print_fn_STAR__orig_val__13960_13969,_STAR_print_newline_STAR__temp_val__13961_13970,sb__4661__auto__,G__13954,G__13954__$1,loc,class_name,simple_class,cause_type,format,map__13952,map__13952__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13961_13970;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13962_13971;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__13959_13968,_STAR_print_fn_STAR__orig_val__13960_13969,_STAR_print_newline_STAR__temp_val__13961_13970,_STAR_print_fn_STAR__temp_val__13962_13971,sb__4661__auto__,G__13954,G__13954__$1,loc,class_name,simple_class,cause_type,format,map__13952,map__13952__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__13959_13968,_STAR_print_fn_STAR__orig_val__13960_13969,_STAR_print_newline_STAR__temp_val__13961_13970,_STAR_print_fn_STAR__temp_val__13962_13971,sb__4661__auto__,G__13954,G__13954__$1,loc,class_name,simple_class,cause_type,format,map__13952,map__13952__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__13950_SHARP_){
return cljs.core.dissoc.call(null,p1__13950_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__13959_13968,_STAR_print_fn_STAR__orig_val__13960_13969,_STAR_print_newline_STAR__temp_val__13961_13970,_STAR_print_fn_STAR__temp_val__13962_13971,sb__4661__auto__,G__13954,G__13954__$1,loc,class_name,simple_class,cause_type,format,map__13952,map__13952__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__13959_13968,_STAR_print_fn_STAR__orig_val__13960_13969,_STAR_print_newline_STAR__temp_val__13961_13970,_STAR_print_fn_STAR__temp_val__13962_13971,sb__4661__auto__,G__13954,G__13954__$1,loc,class_name,simple_class,cause_type,format,map__13952,map__13952__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13960_13969;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13959_13968;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13954__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
