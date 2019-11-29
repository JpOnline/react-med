// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.util');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('cljs.spec.alpha');
react_med.util._LT_sub = cljs.core.comp.call(null,cljs.core.deref,re_frame.core.subscribe);
react_med.util._GT_evt = re_frame.core.dispatch;
react_med.util.primary_color = "#71838e";
react_med.util.secondary_color = "#c9c92d";
/**
 * Wrap component in the create-class fn so the react component-did-mount
 *   hook can be used.
 */
react_med.util.with_mount_fn = (function react_med$util$with_mount_fn(p__10584){
var vec__10585 = p__10584;
var n = cljs.core.nth.call(null,vec__10585,(0),null);
var map__10588 = cljs.core.nth.call(null,vec__10585,(1),null);
var map__10588__$1 = (((((!((map__10588 == null))))?(((((map__10588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10588):map__10588);
var component_did_mount = cljs.core.get.call(null,map__10588__$1,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518));
var to_render = vec__10585;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (vec__10585,n,map__10588,map__10588__$1,component_did_mount,to_render){
return (function (){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.update_in.call(null,to_render,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518)));
});})(vec__10585,n,map__10588,map__10588__$1,component_did_mount,to_render))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),component_did_mount], null));
});
react_med.util.validate = (function react_med$util$validate(spec,input,message){

var or__4131__auto__ = cljs.spec.alpha.valid_QMARK_.call(null,spec,input);
if(or__4131__auto__){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,message,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec-input","spec-input",1673692123),input,new cljs.core.Keyword(null,"spec-data","spec-data",-335955080),cljs.spec.alpha.explain_data.call(null,spec,input)], null));
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
var len__4730__auto___10596 = arguments.length;
var i__4731__auto___10597 = (0);
while(true){
if((i__4731__auto___10597 < len__4730__auto___10596)){
args__4736__auto__.push((arguments[i__4731__auto___10597]));

var G__10598 = (i__4731__auto___10597 + (1));
i__4731__auto___10597 = G__10598;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_med.util.round_to_precision.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_med.util.round_to_precision.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__10592){
var vec__10593 = p__10592;
var precision = cljs.core.nth.call(null,vec__10593,(0),null);
var temp = (n + (cljs.core.truth_(precision)?(precision / (2)):0.5));
return (temp - cljs.core.mod.call(null,temp,(function (){var or__4131__auto__ = precision;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()));
});

react_med.util.round_to_precision.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_med.util.round_to_precision.cljs$lang$applyTo = (function (seq10590){
var G__10591 = cljs.core.first.call(null,seq10590);
var seq10590__$1 = cljs.core.next.call(null,seq10590);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10591,seq10590__$1);
});


//# sourceMappingURL=util.js.map
