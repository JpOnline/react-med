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
var ret__4776__auto___14417 = (function (){
day8.re_frame.tracing.dbgn = (function day8$re_frame$tracing$dbgn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14418 = arguments.length;
var i__4731__auto___14419 = (0);
while(true){
if((i__4731__auto___14419 < len__4730__auto___14418)){
args__4736__auto__.push((arguments[i__4731__auto___14419]));

var G__14420 = (i__4731__auto___14419 + (1));
i__4731__auto___14419 = G__14420;
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
day8.re_frame.tracing.dbgn.cljs$lang$applyTo = (function (seq14413){
var G__14414 = cljs.core.first.call(null,seq14413);
var seq14413__$1 = cljs.core.next.call(null,seq14413);
var G__14415 = cljs.core.first.call(null,seq14413__$1);
var seq14413__$2 = cljs.core.next.call(null,seq14413__$1);
var G__14416 = cljs.core.first.call(null,seq14413__$2);
var seq14413__$3 = cljs.core.next.call(null,seq14413__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14414,G__14415,G__14416,seq14413__$3);
});

return null;
})()
;
day8.re_frame.tracing.dbgn.cljs$lang$macro = true;

var ret__4776__auto___14421 = day8.re_frame.tracing.register_macros_BANG_ = (function day8$re_frame$tracing$register_macros_BANG_(_AMPERSAND_form,_AMPERSAND_env,macro_type,symbols){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("debux.cs.macro-types","register-macros!","debux.cs.macro-types/register-macros!",1232819383,null),null,(1),null)),(new cljs.core.List(null,macro_type,null,(1),null)),(new cljs.core.List(null,symbols,null,(1),null)))));
});
day8.re_frame.tracing.register_macros_BANG_.cljs$lang$macro = true;

var ret__4776__auto___14424 = (function (){
day8.re_frame.tracing.show_macros = (function day8$re_frame$tracing$show_macros(var_args){
var G__14423 = arguments.length;
switch (G__14423) {
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
var ret__4776__auto___14429 = (function (){
day8.re_frame.tracing.defn_traced_STAR_ = (function day8$re_frame$tracing$defn_traced_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14430 = arguments.length;
var i__4731__auto___14431 = (0);
while(true){
if((i__4731__auto___14431 < len__4730__auto___14430)){
args__4736__auto__.push((arguments[i__4731__auto___14431]));

var G__14432 = (i__4731__auto___14431 + (1));
i__4731__auto___14431 = G__14432;
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
day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$applyTo = (function (seq14426){
var G__14427 = cljs.core.first.call(null,seq14426);
var seq14426__$1 = cljs.core.next.call(null,seq14426);
var G__14428 = cljs.core.first.call(null,seq14426__$1);
var seq14426__$2 = cljs.core.next.call(null,seq14426__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14427,G__14428,seq14426__$2);
});

return null;
})()
;
day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$macro = true;

var ret__4776__auto___14436 = (function (){
/**
 * Traced defn
 */
day8.re_frame.tracing.defn_traced = (function day8$re_frame$tracing$defn_traced(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14437 = arguments.length;
var i__4731__auto___14438 = (0);
while(true){
if((i__4731__auto___14438 < len__4730__auto___14437)){
args__4736__auto__.push((arguments[i__4731__auto___14438]));

var G__14439 = (i__4731__auto___14438 + (1));
i__4731__auto___14438 = G__14439;
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
day8.re_frame.tracing.defn_traced.cljs$lang$applyTo = (function (seq14433){
var G__14434 = cljs.core.first.call(null,seq14433);
var seq14433__$1 = cljs.core.next.call(null,seq14433);
var G__14435 = cljs.core.first.call(null,seq14433__$1);
var seq14433__$2 = cljs.core.next.call(null,seq14433__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14434,G__14435,seq14433__$2);
});

return null;
})()
;
day8.re_frame.tracing.defn_traced.cljs$lang$macro = true;

var ret__4776__auto___14443 = (function (){
/**
 * Traced form of fn. Prefer fn-traced to compile out under advanced optimizations.
 */
day8.re_frame.tracing.fn_traced_STAR_ = (function day8$re_frame$tracing$fn_traced_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14444 = arguments.length;
var i__4731__auto___14445 = (0);
while(true){
if((i__4731__auto___14445 < len__4730__auto___14444)){
args__4736__auto__.push((arguments[i__4731__auto___14445]));

var G__14446 = (i__4731__auto___14445 + (1));
i__4731__auto___14445 = G__14446;
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
day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$applyTo = (function (seq14440){
var G__14441 = cljs.core.first.call(null,seq14440);
var seq14440__$1 = cljs.core.next.call(null,seq14440);
var G__14442 = cljs.core.first.call(null,seq14440__$1);
var seq14440__$2 = cljs.core.next.call(null,seq14440__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14441,G__14442,seq14440__$2);
});

return null;
})()
;
day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$macro = true;

var ret__4776__auto___14450 = (function (){
/**
 * Defines a traced fn
 */
day8.re_frame.tracing.fn_traced = (function day8$re_frame$tracing$fn_traced(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14451 = arguments.length;
var i__4731__auto___14452 = (0);
while(true){
if((i__4731__auto___14452 < len__4730__auto___14451)){
args__4736__auto__.push((arguments[i__4731__auto___14452]));

var G__14453 = (i__4731__auto___14452 + (1));
i__4731__auto___14452 = G__14453;
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
day8.re_frame.tracing.fn_traced.cljs$lang$applyTo = (function (seq14447){
var G__14448 = cljs.core.first.call(null,seq14447);
var seq14447__$1 = cljs.core.next.call(null,seq14447);
var G__14449 = cljs.core.first.call(null,seq14447__$1);
var seq14447__$2 = cljs.core.next.call(null,seq14447__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14448,G__14449,seq14447__$2);
});

return null;
})()
;
day8.re_frame.tracing.fn_traced.cljs$lang$macro = true;


//# sourceMappingURL=tracing.js.map
