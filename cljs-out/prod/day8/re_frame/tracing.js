// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame.tracing');
goog.require('cljs.core');
goog.require('debux.common.util');
goog.require('debux.common.macro_specs');
goog.require('cljs.spec.alpha');
cljs.core.enable_console_print_BANG_.call(null);

/** @define {boolean} */
goog.define("day8.re_frame.tracing.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame.tracing.is_trace_enabled_QMARK_ = (function day8$re_frame$tracing$is_trace_enabled_QMARK_(){
return day8.re_frame.tracing.trace_enabled_QMARK_;
});
day8.re_frame.tracing.reset_indent_level_BANG_ = debux.common.util.reset_indent_level_BANG_;
day8.re_frame.tracing.set_print_seq_length_BANG_ = debux.common.util.set_print_seq_length_BANG_;
var ret__4776__auto___19171 = (function (){
day8.re_frame.tracing.dbgn = (function day8$re_frame$tracing$dbgn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19172 = arguments.length;
var i__4731__auto___19173 = (0);
while(true){
if((i__4731__auto___19173 < len__4730__auto___19172)){
args__4736__auto__.push((arguments[i__4731__auto___19173]));

var G__19174 = (i__4731__auto___19173 + (1));
i__4731__auto___19173 = G__19174;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return day8.re_frame.tracing.dbgn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

day8.re_frame.tracing.dbgn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,opts){
var opts_SINGLEQUOTE_ = debux.common.util.parse_opts.call(null,opts);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("debux.dbgn","dbgn","debux.dbgn/dbgn",1247043830,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,opts_SINGLEQUOTE_,null,(1),null)))));
});

day8.re_frame.tracing.dbgn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
day8.re_frame.tracing.dbgn.cljs$lang$applyTo = (function (seq19167){
var G__19168 = cljs.core.first.call(null,seq19167);
var seq19167__$1 = cljs.core.next.call(null,seq19167);
var G__19169 = cljs.core.first.call(null,seq19167__$1);
var seq19167__$2 = cljs.core.next.call(null,seq19167__$1);
var G__19170 = cljs.core.first.call(null,seq19167__$2);
var seq19167__$3 = cljs.core.next.call(null,seq19167__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19168,G__19169,G__19170,seq19167__$3);
});

return null;
})()
;
day8.re_frame.tracing.dbgn.cljs$lang$macro = true;

var ret__4776__auto___19175 = day8.re_frame.tracing.register_macros_BANG_ = (function day8$re_frame$tracing$register_macros_BANG_(_AMPERSAND_form,_AMPERSAND_env,macro_type,symbols){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("debux.cs.macro-types","register-macros!","debux.cs.macro-types/register-macros!",1232819383,null),null,(1),null)),(new cljs.core.List(null,macro_type,null,(1),null)),(new cljs.core.List(null,symbols,null,(1),null)))));
});
day8.re_frame.tracing.register_macros_BANG_.cljs$lang$macro = true;

var ret__4776__auto___19178 = (function (){
day8.re_frame.tracing.show_macros = (function day8$re_frame$tracing$show_macros(var_args){
var G__19177 = arguments.length;
switch (G__19177) {
case 2:
return day8.re_frame.tracing.show_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame.tracing.show_macros.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

day8.re_frame.tracing.show_macros.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("debux.cs.macro-types","show-macros","debux.cs.macro-types/show-macros",-155390333,null),null,(1),null)))));
});

day8.re_frame.tracing.show_macros.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,macro_type){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("debux.cs.macro-types","show-macros","debux.cs.macro-types/show-macros",-155390333,null),null,(1),null)),(new cljs.core.List(null,macro_type,null,(1),null)))));
});

day8.re_frame.tracing.show_macros.cljs$lang$maxFixedArity = 3;

return null;
})()
;
day8.re_frame.tracing.show_macros.cljs$lang$macro = true;

day8.re_frame.tracing.fn_body = (function day8$re_frame$tracing$fn_body(args_PLUS_body){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.nth.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(0)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(args_PLUS_body));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),null,(1),null)),cljs.core.map.call(null,(function (body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.tracing","dbgn","day8.re-frame.tracing/dbgn",-1452462212,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null)))));
}),cljs.core.nth.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(1))))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(args_PLUS_body));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"prepost","prepost",1251610712).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(1))),null,(1),null)),cljs.core.map.call(null,(function (body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.tracing","dbgn","day8.re-frame.tracing/dbgn",-1452462212,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null)))));
}),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(1)))))));
}
});
var ret__4776__auto___19183 = (function (){
day8.re_frame.tracing.defn_traced_STAR_ = (function day8$re_frame$tracing$defn_traced_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19184 = arguments.length;
var i__4731__auto___19185 = (0);
while(true){
if((i__4731__auto___19185 < len__4730__auto___19184)){
args__4736__auto__.push((arguments[i__4731__auto___19185]));

var G__19186 = (i__4731__auto___19185 + (1));
i__4731__auto___19185 = G__19186;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.defn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame.tracing.defn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
var conformed = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("debux.common.macro-specs","defn-args","debux.common.macro-specs/defn-args",-1822705793),definition);
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(conformed);
var bs = new cljs.core.Keyword(null,"bs","bs",1748393559).cljs$core$IFn$_invoke$arity$1(conformed);
var arity_1_QMARK_ = cljs.core._EQ_.call(null,cljs.core.nth.call(null,bs,(0)),new cljs.core.Keyword(null,"arity-1","arity-1",105892478));
var args_PLUS_body = cljs.core.nth.call(null,bs,(1));
if(arity_1_QMARK_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),day8.re_frame.tracing.fn_body.call(null,args_PLUS_body))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.map.call(null,day8.re_frame.tracing.fn_body,new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(args_PLUS_body)))));
}
});

day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$applyTo = (function (seq19180){
var G__19181 = cljs.core.first.call(null,seq19180);
var seq19180__$1 = cljs.core.next.call(null,seq19180);
var G__19182 = cljs.core.first.call(null,seq19180__$1);
var seq19180__$2 = cljs.core.next.call(null,seq19180__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19181,G__19182,seq19180__$2);
});

return null;
})()
;
day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$macro = true;

var ret__4776__auto___19190 = (function (){
/**
 * Traced defn
 */
day8.re_frame.tracing.defn_traced = (function day8$re_frame$tracing$defn_traced(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19191 = arguments.length;
var i__4731__auto___19192 = (0);
while(true){
if((i__4731__auto___19192 < len__4730__auto___19191)){
args__4736__auto__.push((arguments[i__4731__auto___19192]));

var G__19193 = (i__4731__auto___19192 + (1));
i__4731__auto___19192 = G__19193;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.defn_traced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame.tracing.defn_traced.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.tracing","is-trace-enabled?","day8.re-frame.tracing/is-trace-enabled?",-975964058,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.tracing","defn-traced*","day8.re-frame.tracing/defn-traced*",-1958619923,null),null,(1),null)),definition))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),definition))),null,(1),null)))));
});

day8.re_frame.tracing.defn_traced.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.tracing.defn_traced.cljs$lang$applyTo = (function (seq19187){
var G__19188 = cljs.core.first.call(null,seq19187);
var seq19187__$1 = cljs.core.next.call(null,seq19187);
var G__19189 = cljs.core.first.call(null,seq19187__$1);
var seq19187__$2 = cljs.core.next.call(null,seq19187__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19188,G__19189,seq19187__$2);
});

return null;
})()
;
day8.re_frame.tracing.defn_traced.cljs$lang$macro = true;

var ret__4776__auto___19197 = (function (){
/**
 * Traced form of fn. Prefer fn-traced to compile out under advanced optimizations.
 */
day8.re_frame.tracing.fn_traced_STAR_ = (function day8$re_frame$tracing$fn_traced_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19198 = arguments.length;
var i__4731__auto___19199 = (0);
while(true){
if((i__4731__auto___19199 < len__4730__auto___19198)){
args__4736__auto__.push((arguments[i__4731__auto___19199]));

var G__19200 = (i__4731__auto___19199 + (1));
i__4731__auto___19199 = G__19200;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.fn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame.tracing.fn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
var conformed = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("debux.common.macro-specs","fn-args","debux.common.macro-specs/fn-args",-527912458),definition);
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(conformed);
var bs = new cljs.core.Keyword(null,"bs","bs",1748393559).cljs$core$IFn$_invoke$arity$1(conformed);
var arity_1_QMARK_ = cljs.core._EQ_.call(null,cljs.core.nth.call(null,bs,(0)),new cljs.core.Keyword(null,"arity-1","arity-1",105892478));
var args_PLUS_body = cljs.core.nth.call(null,bs,(1));
if(arity_1_QMARK_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null):null),day8.re_frame.tracing.fn_body.call(null,args_PLUS_body))));
} else {
var bodies = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(args_PLUS_body);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null):null),cljs.core.map.call(null,day8.re_frame.tracing.fn_body,bodies))));
}
});

day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$applyTo = (function (seq19194){
var G__19195 = cljs.core.first.call(null,seq19194);
var seq19194__$1 = cljs.core.next.call(null,seq19194);
var G__19196 = cljs.core.first.call(null,seq19194__$1);
var seq19194__$2 = cljs.core.next.call(null,seq19194__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19195,G__19196,seq19194__$2);
});

return null;
})()
;
day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$macro = true;

var ret__4776__auto___19204 = (function (){
/**
 * Defines a traced fn
 */
day8.re_frame.tracing.fn_traced = (function day8$re_frame$tracing$fn_traced(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19205 = arguments.length;
var i__4731__auto___19206 = (0);
while(true){
if((i__4731__auto___19206 < len__4730__auto___19205)){
args__4736__auto__.push((arguments[i__4731__auto___19206]));

var G__19207 = (i__4731__auto___19206 + (1));
i__4731__auto___19206 = G__19207;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.fn_traced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame.tracing.fn_traced.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.tracing","is-trace-enabled?","day8.re-frame.tracing/is-trace-enabled?",-975964058,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.tracing","fn-traced*","day8.re-frame.tracing/fn-traced*",-656662851,null),null,(1),null)),definition))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),definition))),null,(1),null)))));
});

day8.re_frame.tracing.fn_traced.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.tracing.fn_traced.cljs$lang$applyTo = (function (seq19201){
var G__19202 = cljs.core.first.call(null,seq19201);
var seq19201__$1 = cljs.core.next.call(null,seq19201);
var G__19203 = cljs.core.first.call(null,seq19201__$1);
var seq19201__$2 = cljs.core.next.call(null,seq19201__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19202,G__19203,seq19201__$2);
});

return null;
})()
;
day8.re_frame.tracing.fn_traced.cljs$lang$macro = true;


//# sourceMappingURL=tracing.js.map
