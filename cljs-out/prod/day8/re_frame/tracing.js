// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('day8.re_frame.tracing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('debux.common.util');
goog.require('debux.common.macro_specs');
goog.require('cljs.spec.alpha');
cljs.core.enable_console_print_BANG_();

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
var ret__4776__auto___19919 = (function (){
day8.re_frame.tracing.dbgn = (function day8$re_frame$tracing$dbgn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19920 = arguments.length;
var i__4731__auto___19921 = (0);
while(true){
if((i__4731__auto___19921 < len__4730__auto___19920)){
args__4736__auto__.push((arguments[i__4731__auto___19921]));

var G__19922 = (i__4731__auto___19921 + (1));
i__4731__auto___19921 = G__19922;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return day8.re_frame.tracing.dbgn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

day8.re_frame.tracing.dbgn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,opts){
var opts_SINGLEQUOTE_ = debux.common.util.parse_opts(opts);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$debux$dbgn_SLASH_dbgn,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,opts_SINGLEQUOTE_,null,(1),null))], 0))));
});

day8.re_frame.tracing.dbgn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
day8.re_frame.tracing.dbgn.cljs$lang$applyTo = (function (seq19915){
var G__19916 = cljs.core.first(seq19915);
var seq19915__$1 = cljs.core.next(seq19915);
var G__19917 = cljs.core.first(seq19915__$1);
var seq19915__$2 = cljs.core.next(seq19915__$1);
var G__19918 = cljs.core.first(seq19915__$2);
var seq19915__$3 = cljs.core.next(seq19915__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19916,G__19917,G__19918,seq19915__$3);
});

return null;
})()
;
day8.re_frame.tracing.dbgn.cljs$lang$macro = true;

var ret__4776__auto___19923 = day8.re_frame.tracing.register_macros_BANG_ = (function day8$re_frame$tracing$register_macros_BANG_(_AMPERSAND_form,_AMPERSAND_env,macro_type,symbols){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$debux$cs$macro_DASH_types_SLASH_register_DASH_macros_BANG_,null,(1),null)),(new cljs.core.List(null,macro_type,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,symbols,null,(1),null))], 0))));
});
day8.re_frame.tracing.register_macros_BANG_.cljs$lang$macro = true;

var ret__4776__auto___19926 = (function (){
day8.re_frame.tracing.show_macros = (function day8$re_frame$tracing$show_macros(var_args){
var G__19925 = arguments.length;
switch (G__19925) {
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$debux$cs$macro_DASH_types_SLASH_show_DASH_macros,null,(1),null)))));
});

day8.re_frame.tracing.show_macros.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,macro_type){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$debux$cs$macro_DASH_types_SLASH_show_DASH_macros,null,(1),null)),(new cljs.core.List(null,macro_type,null,(1),null)))));
});

day8.re_frame.tracing.show_macros.cljs$lang$maxFixedArity = 3;

return null;
})()
;
day8.re_frame.tracing.show_macros.cljs$lang$macro = true;

day8.re_frame.tracing.fn_body = (function day8$re_frame$tracing$fn_body(args_PLUS_body){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$body,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(0)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(function (){var or__4131__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(args_PLUS_body));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$tracing_SLASH_dbgn,null,(1),null)),(new cljs.core.List(null,body,null,(1),null)))));
}),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(1))))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,(function (){var or__4131__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(args_PLUS_body));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$prepost.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(1))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$tracing_SLASH_dbgn,null,(1),null)),(new cljs.core.List(null,body,null,(1),null)))));
}),cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(1))))], 0))));
}
});
var ret__4776__auto___19931 = (function (){
day8.re_frame.tracing.defn_traced_STAR_ = (function day8$re_frame$tracing$defn_traced_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19932 = arguments.length;
var i__4731__auto___19933 = (0);
while(true){
if((i__4731__auto___19933 < len__4730__auto___19932)){
args__4736__auto__.push((arguments[i__4731__auto___19933]));

var G__19934 = (i__4731__auto___19933 + (1));
i__4731__auto___19933 = G__19934;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.defn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame.tracing.defn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
var conformed = cljs.spec.alpha.conform(cljs.core.cst$kw$debux$common$macro_DASH_specs_SLASH_defn_DASH_args,definition);
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(conformed);
var bs = cljs.core.cst$kw$bs.cljs$core$IFn$_invoke$arity$1(conformed);
var arity_1_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bs,(0)),cljs.core.cst$kw$arity_DASH_1);
var args_PLUS_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bs,(1));
if(arity_1_QMARK_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame.tracing.fn_body(args_PLUS_body)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame.tracing.fn_body,cljs.core.cst$kw$bodies.cljs$core$IFn$_invoke$arity$1(args_PLUS_body))], 0))));
}
});

day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$applyTo = (function (seq19928){
var G__19929 = cljs.core.first(seq19928);
var seq19928__$1 = cljs.core.next(seq19928);
var G__19930 = cljs.core.first(seq19928__$1);
var seq19928__$2 = cljs.core.next(seq19928__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19929,G__19930,seq19928__$2);
});

return null;
})()
;
day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$macro = true;

var ret__4776__auto___19938 = (function (){
/**
 * Traced defn
 */
day8.re_frame.tracing.defn_traced = (function day8$re_frame$tracing$defn_traced(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19939 = arguments.length;
var i__4731__auto___19940 = (0);
while(true){
if((i__4731__auto___19940 < len__4730__auto___19939)){
args__4736__auto__.push((arguments[i__4731__auto___19940]));

var G__19941 = (i__4731__auto___19940 + (1));
i__4731__auto___19940 = G__19941;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.defn_traced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame.tracing.defn_traced.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$tracing_SLASH_is_DASH_trace_DASH_enabled_QMARK_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$tracing_SLASH_defn_DASH_traced_STAR_,null,(1),null)),definition))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),definition))),null,(1),null))], 0))));
});

day8.re_frame.tracing.defn_traced.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.tracing.defn_traced.cljs$lang$applyTo = (function (seq19935){
var G__19936 = cljs.core.first(seq19935);
var seq19935__$1 = cljs.core.next(seq19935);
var G__19937 = cljs.core.first(seq19935__$1);
var seq19935__$2 = cljs.core.next(seq19935__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19936,G__19937,seq19935__$2);
});

return null;
})()
;
day8.re_frame.tracing.defn_traced.cljs$lang$macro = true;

var ret__4776__auto___19945 = (function (){
/**
 * Traced form of fn. Prefer fn-traced to compile out under advanced optimizations.
 */
day8.re_frame.tracing.fn_traced_STAR_ = (function day8$re_frame$tracing$fn_traced_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19946 = arguments.length;
var i__4731__auto___19947 = (0);
while(true){
if((i__4731__auto___19947 < len__4730__auto___19946)){
args__4736__auto__.push((arguments[i__4731__auto___19947]));

var G__19948 = (i__4731__auto___19947 + (1));
i__4731__auto___19947 = G__19948;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.fn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame.tracing.fn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
var conformed = cljs.spec.alpha.conform(cljs.core.cst$kw$debux$common$macro_DASH_specs_SLASH_fn_DASH_args,definition);
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(conformed);
var bs = cljs.core.cst$kw$bs.cljs$core$IFn$_invoke$arity$1(conformed);
var arity_1_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bs,(0)),cljs.core.cst$kw$arity_DASH_1);
var args_PLUS_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bs,(1));
if(arity_1_QMARK_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame.tracing.fn_body(args_PLUS_body)], 0))));
} else {
var bodies = cljs.core.cst$kw$bodies.cljs$core$IFn$_invoke$arity$1(args_PLUS_body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame.tracing.fn_body,bodies)], 0))));
}
});

day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$applyTo = (function (seq19942){
var G__19943 = cljs.core.first(seq19942);
var seq19942__$1 = cljs.core.next(seq19942);
var G__19944 = cljs.core.first(seq19942__$1);
var seq19942__$2 = cljs.core.next(seq19942__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19943,G__19944,seq19942__$2);
});

return null;
})()
;
day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$macro = true;

var ret__4776__auto___19952 = (function (){
/**
 * Defines a traced fn
 */
day8.re_frame.tracing.fn_traced = (function day8$re_frame$tracing$fn_traced(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19953 = arguments.length;
var i__4731__auto___19954 = (0);
while(true){
if((i__4731__auto___19954 < len__4730__auto___19953)){
args__4736__auto__.push((arguments[i__4731__auto___19954]));

var G__19955 = (i__4731__auto___19954 + (1));
i__4731__auto___19954 = G__19955;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.fn_traced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame.tracing.fn_traced.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$tracing_SLASH_is_DASH_trace_DASH_enabled_QMARK_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$tracing_SLASH_fn_DASH_traced_STAR_,null,(1),null)),definition))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),definition))),null,(1),null))], 0))));
});

day8.re_frame.tracing.fn_traced.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.tracing.fn_traced.cljs$lang$applyTo = (function (seq19949){
var G__19950 = cljs.core.first(seq19949);
var seq19949__$1 = cljs.core.next(seq19949);
var G__19951 = cljs.core.first(seq19949__$1);
var seq19949__$2 = cljs.core.next(seq19949__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19950,G__19951,seq19949__$2);
});

return null;
})()
;
day8.re_frame.tracing.fn_traced.cljs$lang$macro = true;

