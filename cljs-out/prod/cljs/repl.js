// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18477){
var map__18478 = p__18477;
var map__18478__$1 = (((((!((map__18478 == null))))?(((((map__18478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18478):map__18478);
var m = map__18478__$1;
var n = cljs.core.get.call(null,map__18478__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18478__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18480_18512 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18481_18513 = null;
var count__18482_18514 = (0);
var i__18483_18515 = (0);
while(true){
if((i__18483_18515 < count__18482_18514)){
var f_18516 = cljs.core._nth.call(null,chunk__18481_18513,i__18483_18515);
cljs.core.println.call(null,"  ",f_18516);


var G__18517 = seq__18480_18512;
var G__18518 = chunk__18481_18513;
var G__18519 = count__18482_18514;
var G__18520 = (i__18483_18515 + (1));
seq__18480_18512 = G__18517;
chunk__18481_18513 = G__18518;
count__18482_18514 = G__18519;
i__18483_18515 = G__18520;
continue;
} else {
var temp__5735__auto___18521 = cljs.core.seq.call(null,seq__18480_18512);
if(temp__5735__auto___18521){
var seq__18480_18522__$1 = temp__5735__auto___18521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18480_18522__$1)){
var c__4550__auto___18523 = cljs.core.chunk_first.call(null,seq__18480_18522__$1);
var G__18524 = cljs.core.chunk_rest.call(null,seq__18480_18522__$1);
var G__18525 = c__4550__auto___18523;
var G__18526 = cljs.core.count.call(null,c__4550__auto___18523);
var G__18527 = (0);
seq__18480_18512 = G__18524;
chunk__18481_18513 = G__18525;
count__18482_18514 = G__18526;
i__18483_18515 = G__18527;
continue;
} else {
var f_18528 = cljs.core.first.call(null,seq__18480_18522__$1);
cljs.core.println.call(null,"  ",f_18528);


var G__18529 = cljs.core.next.call(null,seq__18480_18522__$1);
var G__18530 = null;
var G__18531 = (0);
var G__18532 = (0);
seq__18480_18512 = G__18529;
chunk__18481_18513 = G__18530;
count__18482_18514 = G__18531;
i__18483_18515 = G__18532;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18533 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18533);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18533)))?cljs.core.second.call(null,arglists_18533):arglists_18533));
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
var seq__18484_18534 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18485_18535 = null;
var count__18486_18536 = (0);
var i__18487_18537 = (0);
while(true){
if((i__18487_18537 < count__18486_18536)){
var vec__18498_18538 = cljs.core._nth.call(null,chunk__18485_18535,i__18487_18537);
var name_18539 = cljs.core.nth.call(null,vec__18498_18538,(0),null);
var map__18501_18540 = cljs.core.nth.call(null,vec__18498_18538,(1),null);
var map__18501_18541__$1 = (((((!((map__18501_18540 == null))))?(((((map__18501_18540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18501_18540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18501_18540):map__18501_18540);
var doc_18542 = cljs.core.get.call(null,map__18501_18541__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18543 = cljs.core.get.call(null,map__18501_18541__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18539);

cljs.core.println.call(null," ",arglists_18543);

if(cljs.core.truth_(doc_18542)){
cljs.core.println.call(null," ",doc_18542);
} else {
}


var G__18544 = seq__18484_18534;
var G__18545 = chunk__18485_18535;
var G__18546 = count__18486_18536;
var G__18547 = (i__18487_18537 + (1));
seq__18484_18534 = G__18544;
chunk__18485_18535 = G__18545;
count__18486_18536 = G__18546;
i__18487_18537 = G__18547;
continue;
} else {
var temp__5735__auto___18548 = cljs.core.seq.call(null,seq__18484_18534);
if(temp__5735__auto___18548){
var seq__18484_18549__$1 = temp__5735__auto___18548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18484_18549__$1)){
var c__4550__auto___18550 = cljs.core.chunk_first.call(null,seq__18484_18549__$1);
var G__18551 = cljs.core.chunk_rest.call(null,seq__18484_18549__$1);
var G__18552 = c__4550__auto___18550;
var G__18553 = cljs.core.count.call(null,c__4550__auto___18550);
var G__18554 = (0);
seq__18484_18534 = G__18551;
chunk__18485_18535 = G__18552;
count__18486_18536 = G__18553;
i__18487_18537 = G__18554;
continue;
} else {
var vec__18503_18555 = cljs.core.first.call(null,seq__18484_18549__$1);
var name_18556 = cljs.core.nth.call(null,vec__18503_18555,(0),null);
var map__18506_18557 = cljs.core.nth.call(null,vec__18503_18555,(1),null);
var map__18506_18558__$1 = (((((!((map__18506_18557 == null))))?(((((map__18506_18557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18506_18557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18506_18557):map__18506_18557);
var doc_18559 = cljs.core.get.call(null,map__18506_18558__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18560 = cljs.core.get.call(null,map__18506_18558__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18556);

cljs.core.println.call(null," ",arglists_18560);

if(cljs.core.truth_(doc_18559)){
cljs.core.println.call(null," ",doc_18559);
} else {
}


var G__18561 = cljs.core.next.call(null,seq__18484_18549__$1);
var G__18562 = null;
var G__18563 = (0);
var G__18564 = (0);
seq__18484_18534 = G__18561;
chunk__18485_18535 = G__18562;
count__18486_18536 = G__18563;
i__18487_18537 = G__18564;
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

var seq__18508 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18509 = null;
var count__18510 = (0);
var i__18511 = (0);
while(true){
if((i__18511 < count__18510)){
var role = cljs.core._nth.call(null,chunk__18509,i__18511);
var temp__5735__auto___18565__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___18565__$1)){
var spec_18566 = temp__5735__auto___18565__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18566));
} else {
}


var G__18567 = seq__18508;
var G__18568 = chunk__18509;
var G__18569 = count__18510;
var G__18570 = (i__18511 + (1));
seq__18508 = G__18567;
chunk__18509 = G__18568;
count__18510 = G__18569;
i__18511 = G__18570;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__18508);
if(temp__5735__auto____$1){
var seq__18508__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18508__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18508__$1);
var G__18571 = cljs.core.chunk_rest.call(null,seq__18508__$1);
var G__18572 = c__4550__auto__;
var G__18573 = cljs.core.count.call(null,c__4550__auto__);
var G__18574 = (0);
seq__18508 = G__18571;
chunk__18509 = G__18572;
count__18510 = G__18573;
i__18511 = G__18574;
continue;
} else {
var role = cljs.core.first.call(null,seq__18508__$1);
var temp__5735__auto___18575__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___18575__$2)){
var spec_18576 = temp__5735__auto___18575__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18576));
} else {
}


var G__18577 = cljs.core.next.call(null,seq__18508__$1);
var G__18578 = null;
var G__18579 = (0);
var G__18580 = (0);
seq__18508 = G__18577;
chunk__18509 = G__18578;
count__18510 = G__18579;
i__18511 = G__18580;
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
var G__18581 = cljs.core.conj.call(null,via,t);
var G__18582 = cljs.core.ex_cause.call(null,t);
via = G__18581;
t = G__18582;
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
var map__18585 = datafied_throwable;
var map__18585__$1 = (((((!((map__18585 == null))))?(((((map__18585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18585):map__18585);
var via = cljs.core.get.call(null,map__18585__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__18585__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__18585__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18586 = cljs.core.last.call(null,via);
var map__18586__$1 = (((((!((map__18586 == null))))?(((((map__18586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18586):map__18586);
var type = cljs.core.get.call(null,map__18586__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__18586__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__18586__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18587 = data;
var map__18587__$1 = (((((!((map__18587 == null))))?(((((map__18587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18587):map__18587);
var problems = cljs.core.get.call(null,map__18587__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__18587__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__18587__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18588 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__18588__$1 = (((((!((map__18588 == null))))?(((((map__18588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18588):map__18588);
var top_data = map__18588__$1;
var source = cljs.core.get.call(null,map__18588__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__18593 = phase;
var G__18593__$1 = (((G__18593 instanceof cljs.core.Keyword))?G__18593.fqn:null);
switch (G__18593__$1) {
case "read-source":
var map__18594 = data;
var map__18594__$1 = (((((!((map__18594 == null))))?(((((map__18594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18594):map__18594);
var line = cljs.core.get.call(null,map__18594__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18594__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18596 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__18596__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18596,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18596);
var G__18596__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18596__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18596__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18596__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18596__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18597 = top_data;
var G__18597__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18597,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18597);
var G__18597__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18597__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18597__$1);
var G__18597__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18597__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18597__$2);
var G__18597__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18597__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18597__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18597__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18597__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18598 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18598,(0),null);
var method = cljs.core.nth.call(null,vec__18598,(1),null);
var file = cljs.core.nth.call(null,vec__18598,(2),null);
var line = cljs.core.nth.call(null,vec__18598,(3),null);
var G__18601 = top_data;
var G__18601__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__18601,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18601);
var G__18601__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__18601__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18601__$1);
var G__18601__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__18601__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18601__$2);
var G__18601__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18601__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18601__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18601__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18601__$4;
}

break;
case "execution":
var vec__18602 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18602,(0),null);
var method = cljs.core.nth.call(null,vec__18602,(1),null);
var file = cljs.core.nth.call(null,vec__18602,(2),null);
var line = cljs.core.nth.call(null,vec__18602,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__18602,source__$1,method,file,line,G__18593,G__18593__$1,map__18585,map__18585__$1,via,trace,phase,map__18586,map__18586__$1,type,message,data,map__18587,map__18587__$1,problems,fn,caller,map__18588,map__18588__$1,top_data,source){
return (function (p1__18584_SHARP_){
var or__4131__auto__ = (p1__18584_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__18584_SHARP_);
}
});})(vec__18602,source__$1,method,file,line,G__18593,G__18593__$1,map__18585,map__18585__$1,via,trace,phase,map__18586,map__18586__$1,type,message,data,map__18587,map__18587__$1,problems,fn,caller,map__18588,map__18588__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__18605 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18605__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__18605,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18605);
var G__18605__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18605__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18605__$1);
var G__18605__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__18605__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18605__$2);
var G__18605__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__18605__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18605__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18605__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18605__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18593__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18609){
var map__18610 = p__18609;
var map__18610__$1 = (((((!((map__18610 == null))))?(((((map__18610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18610):map__18610);
var triage_data = map__18610__$1;
var phase = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__18612 = phase;
var G__18612__$1 = (((G__18612 instanceof cljs.core.Keyword))?G__18612.fqn:null);
switch (G__18612__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18613_18622 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18614_18623 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18615_18624 = true;
var _STAR_print_fn_STAR__temp_val__18616_18625 = ((function (_STAR_print_newline_STAR__orig_val__18613_18622,_STAR_print_fn_STAR__orig_val__18614_18623,_STAR_print_newline_STAR__temp_val__18615_18624,sb__4661__auto__,G__18612,G__18612__$1,loc,class_name,simple_class,cause_type,format,map__18610,map__18610__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18613_18622,_STAR_print_fn_STAR__orig_val__18614_18623,_STAR_print_newline_STAR__temp_val__18615_18624,sb__4661__auto__,G__18612,G__18612__$1,loc,class_name,simple_class,cause_type,format,map__18610,map__18610__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18615_18624;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18616_18625;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__18613_18622,_STAR_print_fn_STAR__orig_val__18614_18623,_STAR_print_newline_STAR__temp_val__18615_18624,_STAR_print_fn_STAR__temp_val__18616_18625,sb__4661__auto__,G__18612,G__18612__$1,loc,class_name,simple_class,cause_type,format,map__18610,map__18610__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__18613_18622,_STAR_print_fn_STAR__orig_val__18614_18623,_STAR_print_newline_STAR__temp_val__18615_18624,_STAR_print_fn_STAR__temp_val__18616_18625,sb__4661__auto__,G__18612,G__18612__$1,loc,class_name,simple_class,cause_type,format,map__18610,map__18610__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__18607_SHARP_){
return cljs.core.dissoc.call(null,p1__18607_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__18613_18622,_STAR_print_fn_STAR__orig_val__18614_18623,_STAR_print_newline_STAR__temp_val__18615_18624,_STAR_print_fn_STAR__temp_val__18616_18625,sb__4661__auto__,G__18612,G__18612__$1,loc,class_name,simple_class,cause_type,format,map__18610,map__18610__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__18613_18622,_STAR_print_fn_STAR__orig_val__18614_18623,_STAR_print_newline_STAR__temp_val__18615_18624,_STAR_print_fn_STAR__temp_val__18616_18625,sb__4661__auto__,G__18612,G__18612__$1,loc,class_name,simple_class,cause_type,format,map__18610,map__18610__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18614_18623;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18613_18622;
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
var _STAR_print_newline_STAR__orig_val__18617_18626 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18618_18627 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18619_18628 = true;
var _STAR_print_fn_STAR__temp_val__18620_18629 = ((function (_STAR_print_newline_STAR__orig_val__18617_18626,_STAR_print_fn_STAR__orig_val__18618_18627,_STAR_print_newline_STAR__temp_val__18619_18628,sb__4661__auto__,G__18612,G__18612__$1,loc,class_name,simple_class,cause_type,format,map__18610,map__18610__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18617_18626,_STAR_print_fn_STAR__orig_val__18618_18627,_STAR_print_newline_STAR__temp_val__18619_18628,sb__4661__auto__,G__18612,G__18612__$1,loc,class_name,simple_class,cause_type,format,map__18610,map__18610__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18619_18628;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18620_18629;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__18617_18626,_STAR_print_fn_STAR__orig_val__18618_18627,_STAR_print_newline_STAR__temp_val__18619_18628,_STAR_print_fn_STAR__temp_val__18620_18629,sb__4661__auto__,G__18612,G__18612__$1,loc,class_name,simple_class,cause_type,format,map__18610,map__18610__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__18617_18626,_STAR_print_fn_STAR__orig_val__18618_18627,_STAR_print_newline_STAR__temp_val__18619_18628,_STAR_print_fn_STAR__temp_val__18620_18629,sb__4661__auto__,G__18612,G__18612__$1,loc,class_name,simple_class,cause_type,format,map__18610,map__18610__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__18608_SHARP_){
return cljs.core.dissoc.call(null,p1__18608_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__18617_18626,_STAR_print_fn_STAR__orig_val__18618_18627,_STAR_print_newline_STAR__temp_val__18619_18628,_STAR_print_fn_STAR__temp_val__18620_18629,sb__4661__auto__,G__18612,G__18612__$1,loc,class_name,simple_class,cause_type,format,map__18610,map__18610__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__18617_18626,_STAR_print_fn_STAR__orig_val__18618_18627,_STAR_print_newline_STAR__temp_val__18619_18628,_STAR_print_fn_STAR__temp_val__18620_18629,sb__4661__auto__,G__18612,G__18612__$1,loc,class_name,simple_class,cause_type,format,map__18610,map__18610__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18618_18627;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18617_18626;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18612__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
