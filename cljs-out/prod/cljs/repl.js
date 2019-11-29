// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13579){
var map__13580 = p__13579;
var map__13580__$1 = (((((!((map__13580 == null))))?(((((map__13580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13580):map__13580);
var m = map__13580__$1;
var n = cljs.core.get.call(null,map__13580__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13580__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__13582_13614 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13583_13615 = null;
var count__13584_13616 = (0);
var i__13585_13617 = (0);
while(true){
if((i__13585_13617 < count__13584_13616)){
var f_13618 = cljs.core._nth.call(null,chunk__13583_13615,i__13585_13617);
cljs.core.println.call(null,"  ",f_13618);


var G__13619 = seq__13582_13614;
var G__13620 = chunk__13583_13615;
var G__13621 = count__13584_13616;
var G__13622 = (i__13585_13617 + (1));
seq__13582_13614 = G__13619;
chunk__13583_13615 = G__13620;
count__13584_13616 = G__13621;
i__13585_13617 = G__13622;
continue;
} else {
var temp__5735__auto___13623 = cljs.core.seq.call(null,seq__13582_13614);
if(temp__5735__auto___13623){
var seq__13582_13624__$1 = temp__5735__auto___13623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13582_13624__$1)){
var c__4550__auto___13625 = cljs.core.chunk_first.call(null,seq__13582_13624__$1);
var G__13626 = cljs.core.chunk_rest.call(null,seq__13582_13624__$1);
var G__13627 = c__4550__auto___13625;
var G__13628 = cljs.core.count.call(null,c__4550__auto___13625);
var G__13629 = (0);
seq__13582_13614 = G__13626;
chunk__13583_13615 = G__13627;
count__13584_13616 = G__13628;
i__13585_13617 = G__13629;
continue;
} else {
var f_13630 = cljs.core.first.call(null,seq__13582_13624__$1);
cljs.core.println.call(null,"  ",f_13630);


var G__13631 = cljs.core.next.call(null,seq__13582_13624__$1);
var G__13632 = null;
var G__13633 = (0);
var G__13634 = (0);
seq__13582_13614 = G__13631;
chunk__13583_13615 = G__13632;
count__13584_13616 = G__13633;
i__13585_13617 = G__13634;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13635 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13635);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13635)))?cljs.core.second.call(null,arglists_13635):arglists_13635));
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
var seq__13586_13636 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13587_13637 = null;
var count__13588_13638 = (0);
var i__13589_13639 = (0);
while(true){
if((i__13589_13639 < count__13588_13638)){
var vec__13600_13640 = cljs.core._nth.call(null,chunk__13587_13637,i__13589_13639);
var name_13641 = cljs.core.nth.call(null,vec__13600_13640,(0),null);
var map__13603_13642 = cljs.core.nth.call(null,vec__13600_13640,(1),null);
var map__13603_13643__$1 = (((((!((map__13603_13642 == null))))?(((((map__13603_13642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13603_13642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13603_13642):map__13603_13642);
var doc_13644 = cljs.core.get.call(null,map__13603_13643__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13645 = cljs.core.get.call(null,map__13603_13643__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13641);

cljs.core.println.call(null," ",arglists_13645);

if(cljs.core.truth_(doc_13644)){
cljs.core.println.call(null," ",doc_13644);
} else {
}


var G__13646 = seq__13586_13636;
var G__13647 = chunk__13587_13637;
var G__13648 = count__13588_13638;
var G__13649 = (i__13589_13639 + (1));
seq__13586_13636 = G__13646;
chunk__13587_13637 = G__13647;
count__13588_13638 = G__13648;
i__13589_13639 = G__13649;
continue;
} else {
var temp__5735__auto___13650 = cljs.core.seq.call(null,seq__13586_13636);
if(temp__5735__auto___13650){
var seq__13586_13651__$1 = temp__5735__auto___13650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13586_13651__$1)){
var c__4550__auto___13652 = cljs.core.chunk_first.call(null,seq__13586_13651__$1);
var G__13653 = cljs.core.chunk_rest.call(null,seq__13586_13651__$1);
var G__13654 = c__4550__auto___13652;
var G__13655 = cljs.core.count.call(null,c__4550__auto___13652);
var G__13656 = (0);
seq__13586_13636 = G__13653;
chunk__13587_13637 = G__13654;
count__13588_13638 = G__13655;
i__13589_13639 = G__13656;
continue;
} else {
var vec__13605_13657 = cljs.core.first.call(null,seq__13586_13651__$1);
var name_13658 = cljs.core.nth.call(null,vec__13605_13657,(0),null);
var map__13608_13659 = cljs.core.nth.call(null,vec__13605_13657,(1),null);
var map__13608_13660__$1 = (((((!((map__13608_13659 == null))))?(((((map__13608_13659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13608_13659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13608_13659):map__13608_13659);
var doc_13661 = cljs.core.get.call(null,map__13608_13660__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13662 = cljs.core.get.call(null,map__13608_13660__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13658);

cljs.core.println.call(null," ",arglists_13662);

if(cljs.core.truth_(doc_13661)){
cljs.core.println.call(null," ",doc_13661);
} else {
}


var G__13663 = cljs.core.next.call(null,seq__13586_13651__$1);
var G__13664 = null;
var G__13665 = (0);
var G__13666 = (0);
seq__13586_13636 = G__13663;
chunk__13587_13637 = G__13664;
count__13588_13638 = G__13665;
i__13589_13639 = G__13666;
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

var seq__13610 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13611 = null;
var count__13612 = (0);
var i__13613 = (0);
while(true){
if((i__13613 < count__13612)){
var role = cljs.core._nth.call(null,chunk__13611,i__13613);
var temp__5735__auto___13667__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___13667__$1)){
var spec_13668 = temp__5735__auto___13667__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13668));
} else {
}


var G__13669 = seq__13610;
var G__13670 = chunk__13611;
var G__13671 = count__13612;
var G__13672 = (i__13613 + (1));
seq__13610 = G__13669;
chunk__13611 = G__13670;
count__13612 = G__13671;
i__13613 = G__13672;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__13610);
if(temp__5735__auto____$1){
var seq__13610__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13610__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13610__$1);
var G__13673 = cljs.core.chunk_rest.call(null,seq__13610__$1);
var G__13674 = c__4550__auto__;
var G__13675 = cljs.core.count.call(null,c__4550__auto__);
var G__13676 = (0);
seq__13610 = G__13673;
chunk__13611 = G__13674;
count__13612 = G__13675;
i__13613 = G__13676;
continue;
} else {
var role = cljs.core.first.call(null,seq__13610__$1);
var temp__5735__auto___13677__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___13677__$2)){
var spec_13678 = temp__5735__auto___13677__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13678));
} else {
}


var G__13679 = cljs.core.next.call(null,seq__13610__$1);
var G__13680 = null;
var G__13681 = (0);
var G__13682 = (0);
seq__13610 = G__13679;
chunk__13611 = G__13680;
count__13612 = G__13681;
i__13613 = G__13682;
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
var G__13683 = cljs.core.conj.call(null,via,t);
var G__13684 = cljs.core.ex_cause.call(null,t);
via = G__13683;
t = G__13684;
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
var map__13687 = datafied_throwable;
var map__13687__$1 = (((((!((map__13687 == null))))?(((((map__13687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13687):map__13687);
var via = cljs.core.get.call(null,map__13687__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__13687__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__13687__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__13688 = cljs.core.last.call(null,via);
var map__13688__$1 = (((((!((map__13688 == null))))?(((((map__13688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13688):map__13688);
var type = cljs.core.get.call(null,map__13688__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__13688__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__13688__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__13689 = data;
var map__13689__$1 = (((((!((map__13689 == null))))?(((((map__13689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13689):map__13689);
var problems = cljs.core.get.call(null,map__13689__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__13689__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__13689__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__13690 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__13690__$1 = (((((!((map__13690 == null))))?(((((map__13690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13690):map__13690);
var top_data = map__13690__$1;
var source = cljs.core.get.call(null,map__13690__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__13695 = phase;
var G__13695__$1 = (((G__13695 instanceof cljs.core.Keyword))?G__13695.fqn:null);
switch (G__13695__$1) {
case "read-source":
var map__13696 = data;
var map__13696__$1 = (((((!((map__13696 == null))))?(((((map__13696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13696):map__13696);
var line = cljs.core.get.call(null,map__13696__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__13696__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__13698 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__13698__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__13698,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__13698);
var G__13698__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__13698__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__13698__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__13698__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__13698__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__13699 = top_data;
var G__13699__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__13699,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__13699);
var G__13699__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__13699__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__13699__$1);
var G__13699__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__13699__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__13699__$2);
var G__13699__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__13699__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__13699__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__13699__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__13699__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__13700 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__13700,(0),null);
var method = cljs.core.nth.call(null,vec__13700,(1),null);
var file = cljs.core.nth.call(null,vec__13700,(2),null);
var line = cljs.core.nth.call(null,vec__13700,(3),null);
var G__13703 = top_data;
var G__13703__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__13703,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__13703);
var G__13703__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__13703__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__13703__$1);
var G__13703__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__13703__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__13703__$2);
var G__13703__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__13703__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__13703__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__13703__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__13703__$4;
}

break;
case "execution":
var vec__13704 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__13704,(0),null);
var method = cljs.core.nth.call(null,vec__13704,(1),null);
var file = cljs.core.nth.call(null,vec__13704,(2),null);
var line = cljs.core.nth.call(null,vec__13704,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__13704,source__$1,method,file,line,G__13695,G__13695__$1,map__13687,map__13687__$1,via,trace,phase,map__13688,map__13688__$1,type,message,data,map__13689,map__13689__$1,problems,fn,caller,map__13690,map__13690__$1,top_data,source){
return (function (p1__13686_SHARP_){
var or__4131__auto__ = (p1__13686_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__13686_SHARP_);
}
});})(vec__13704,source__$1,method,file,line,G__13695,G__13695__$1,map__13687,map__13687__$1,via,trace,phase,map__13688,map__13688__$1,type,message,data,map__13689,map__13689__$1,problems,fn,caller,map__13690,map__13690__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__13707 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__13707__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__13707,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__13707);
var G__13707__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__13707__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__13707__$1);
var G__13707__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__13707__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__13707__$2);
var G__13707__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__13707__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__13707__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__13707__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__13707__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13695__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__13711){
var map__13712 = p__13711;
var map__13712__$1 = (((((!((map__13712 == null))))?(((((map__13712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13712):map__13712);
var triage_data = map__13712__$1;
var phase = cljs.core.get.call(null,map__13712__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__13712__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__13712__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__13712__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__13712__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__13712__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__13712__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__13712__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__13714 = phase;
var G__13714__$1 = (((G__13714 instanceof cljs.core.Keyword))?G__13714.fqn:null);
switch (G__13714__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13715_13724 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13716_13725 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13717_13726 = true;
var _STAR_print_fn_STAR__temp_val__13718_13727 = ((function (_STAR_print_newline_STAR__orig_val__13715_13724,_STAR_print_fn_STAR__orig_val__13716_13725,_STAR_print_newline_STAR__temp_val__13717_13726,sb__4661__auto__,G__13714,G__13714__$1,loc,class_name,simple_class,cause_type,format,map__13712,map__13712__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__13715_13724,_STAR_print_fn_STAR__orig_val__13716_13725,_STAR_print_newline_STAR__temp_val__13717_13726,sb__4661__auto__,G__13714,G__13714__$1,loc,class_name,simple_class,cause_type,format,map__13712,map__13712__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13717_13726;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13718_13727;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__13715_13724,_STAR_print_fn_STAR__orig_val__13716_13725,_STAR_print_newline_STAR__temp_val__13717_13726,_STAR_print_fn_STAR__temp_val__13718_13727,sb__4661__auto__,G__13714,G__13714__$1,loc,class_name,simple_class,cause_type,format,map__13712,map__13712__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__13715_13724,_STAR_print_fn_STAR__orig_val__13716_13725,_STAR_print_newline_STAR__temp_val__13717_13726,_STAR_print_fn_STAR__temp_val__13718_13727,sb__4661__auto__,G__13714,G__13714__$1,loc,class_name,simple_class,cause_type,format,map__13712,map__13712__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__13709_SHARP_){
return cljs.core.dissoc.call(null,p1__13709_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__13715_13724,_STAR_print_fn_STAR__orig_val__13716_13725,_STAR_print_newline_STAR__temp_val__13717_13726,_STAR_print_fn_STAR__temp_val__13718_13727,sb__4661__auto__,G__13714,G__13714__$1,loc,class_name,simple_class,cause_type,format,map__13712,map__13712__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__13715_13724,_STAR_print_fn_STAR__orig_val__13716_13725,_STAR_print_newline_STAR__temp_val__13717_13726,_STAR_print_fn_STAR__temp_val__13718_13727,sb__4661__auto__,G__13714,G__13714__$1,loc,class_name,simple_class,cause_type,format,map__13712,map__13712__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13716_13725;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13715_13724;
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
var _STAR_print_newline_STAR__orig_val__13719_13728 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13720_13729 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13721_13730 = true;
var _STAR_print_fn_STAR__temp_val__13722_13731 = ((function (_STAR_print_newline_STAR__orig_val__13719_13728,_STAR_print_fn_STAR__orig_val__13720_13729,_STAR_print_newline_STAR__temp_val__13721_13730,sb__4661__auto__,G__13714,G__13714__$1,loc,class_name,simple_class,cause_type,format,map__13712,map__13712__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__13719_13728,_STAR_print_fn_STAR__orig_val__13720_13729,_STAR_print_newline_STAR__temp_val__13721_13730,sb__4661__auto__,G__13714,G__13714__$1,loc,class_name,simple_class,cause_type,format,map__13712,map__13712__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13721_13730;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13722_13731;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__13719_13728,_STAR_print_fn_STAR__orig_val__13720_13729,_STAR_print_newline_STAR__temp_val__13721_13730,_STAR_print_fn_STAR__temp_val__13722_13731,sb__4661__auto__,G__13714,G__13714__$1,loc,class_name,simple_class,cause_type,format,map__13712,map__13712__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__13719_13728,_STAR_print_fn_STAR__orig_val__13720_13729,_STAR_print_newline_STAR__temp_val__13721_13730,_STAR_print_fn_STAR__temp_val__13722_13731,sb__4661__auto__,G__13714,G__13714__$1,loc,class_name,simple_class,cause_type,format,map__13712,map__13712__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__13710_SHARP_){
return cljs.core.dissoc.call(null,p1__13710_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__13719_13728,_STAR_print_fn_STAR__orig_val__13720_13729,_STAR_print_newline_STAR__temp_val__13721_13730,_STAR_print_fn_STAR__temp_val__13722_13731,sb__4661__auto__,G__13714,G__13714__$1,loc,class_name,simple_class,cause_type,format,map__13712,map__13712__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__13719_13728,_STAR_print_fn_STAR__orig_val__13720_13729,_STAR_print_newline_STAR__temp_val__13721_13730,_STAR_print_fn_STAR__temp_val__13722_13731,sb__4661__auto__,G__13714,G__13714__$1,loc,class_name,simple_class,cause_type,format,map__13712,map__13712__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13720_13729;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13719_13728;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13714__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
