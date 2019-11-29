// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('cljs.spec.alpha');
react_med.util._LT_sub = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,re_frame.core.subscribe);
react_med.util._GT_evt = re_frame.core.dispatch;
react_med.util.primary_color = "#71838e";
react_med.util.secondary_color = "#c9c92d";
/**
 * Wrap component in the create-class fn so the react component-did-mount
 *   hook can be used.
 */
react_med.util.with_mount_fn = (function react_med$util$with_mount_fn(p__15436){
var vec__15437 = p__15436;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15437,(0),null);
var map__15440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15437,(1),null);
var map__15440__$1 = (((((!((map__15440 == null))))?(((((map__15440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15440):map__15440);
var component_did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15440__$1,cljs.core.cst$kw$component_DASH_did_DASH_mount);
var to_render = vec__15437;
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (vec__15437,n,map__15440,map__15440__$1,component_did_mount,to_render){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(to_render,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.dissoc,cljs.core.cst$kw$component_DASH_did_DASH_mount));
});})(vec__15437,n,map__15440,map__15440__$1,component_did_mount,to_render))
,cljs.core.cst$kw$component_DASH_did_DASH_mount,component_did_mount], null));
});
react_med.util.validate = (function react_med$util$validate(spec,input,message){

var or__4131__auto__ = cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,input);
if(or__4131__auto__){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec_DASH_input,input,cljs.core.cst$kw$spec_DASH_data,cljs.spec.alpha.explain_data(spec,input)], null));
}
});
/**
 * it takes an argument for which number to round,
 *   the same as the classic round had the implicit
 *   argument of 1 (e.g. (round 2.3) is the same as
 *   (round-to-precision 2.3 1)
 */
react_med.util.round_to_precision = (function react_med$util$round_to_precision(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15448 = arguments.length;
var i__4731__auto___15449 = (0);
while(true){
if((i__4731__auto___15449 < len__4730__auto___15448)){
args__4736__auto__.push((arguments[i__4731__auto___15449]));

var G__15450 = (i__4731__auto___15449 + (1));
i__4731__auto___15449 = G__15450;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_med.util.round_to_precision.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_med.util.round_to_precision.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__15444){
var vec__15445 = p__15444;
var precision = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15445,(0),null);
var temp = (n + (cljs.core.truth_(precision)?(precision / (2)):0.5));
return (temp - cljs.core.mod(temp,(function (){var or__4131__auto__ = precision;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()));
});

react_med.util.round_to_precision.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_med.util.round_to_precision.cljs$lang$applyTo = (function (seq15442){
var G__15443 = cljs.core.first(seq15442);
var seq15442__$1 = cljs.core.next(seq15442);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15443,seq15442__$1);
});

