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
react_med.util.with_mount_fn = (function react_med$util$with_mount_fn(p__15487){
var vec__15488 = p__15487;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15488,(0),null);
var map__15491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15488,(1),null);
var map__15491__$1 = (((((!((map__15491 == null))))?(((((map__15491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15491):map__15491);
var component_did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15491__$1,cljs.core.cst$kw$component_DASH_did_DASH_mount);
var to_render = vec__15488;
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,((function (vec__15488,n,map__15491,map__15491__$1,component_did_mount,to_render){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(to_render,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.dissoc,cljs.core.cst$kw$component_DASH_did_DASH_mount));
});})(vec__15488,n,map__15491,map__15491__$1,component_did_mount,to_render))
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
cljs.spec.alpha.def_impl(cljs.core.cst$kw$react_DASH_med$util_SLASH_valid_DASH_app_DASH_state,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$util_SLASH_ui,cljs.core.cst$kw$react_DASH_med$util_SLASH_domain], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$util_SLASH_ui,cljs.core.cst$kw$react_DASH_med$util_SLASH_domain], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__15493){
return cljs.core.map_QMARK_(G__15493);
}),(function (G__15493){
return cljs.core.contains_QMARK_(G__15493,cljs.core.cst$kw$ui);
}),(function (G__15493){
return cljs.core.contains_QMARK_(G__15493,cljs.core.cst$kw$domain);
})], null),(function (G__15493){
return ((cljs.core.map_QMARK_(G__15493)) && (cljs.core.contains_QMARK_(G__15493,cljs.core.cst$kw$ui)) && (cljs.core.contains_QMARK_(G__15493,cljs.core.cst$kw$domain)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$util_SLASH_ui,cljs.core.cst$kw$react_DASH_med$util_SLASH_domain], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$domain], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$ui)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$domain))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$react_DASH_med$util_SLASH_ui,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$react_DASH_med$util_SLASH_domain,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_);
react_med.util.is_state_QMARK_ = (function react_med$util$is_state_QMARK_(message){
return (function() {
var G__15494 = null;
var G__15494__1 = (function (app_state){
return react_med.util.validate(cljs.core.cst$kw$react_DASH_med$util_SLASH_valid_DASH_app_DASH_state,app_state,message);
});
var G__15494__2 = (function (app_state,event){
return react_med.util.validate(cljs.core.cst$kw$react_DASH_med$util_SLASH_valid_DASH_app_DASH_state,app_state,["Erro no evento ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join(''));
});
G__15494 = function(app_state,event){
switch(arguments.length){
case 1:
return G__15494__1.call(this,app_state);
case 2:
return G__15494__2.call(this,app_state,event);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15494.cljs$core$IFn$_invoke$arity$1 = G__15494__1;
G__15494.cljs$core$IFn$_invoke$arity$2 = G__15494__2;
return G__15494;
})()
});
react_med.util.pre_state_QMARK_ = react_med.util.is_state_QMARK_("Input of an invalid app-state.");
react_med.util.post_state_QMARK_ = react_med.util.is_state_QMARK_("Returned an invalid app-state.");
/**
 * it takes an argument for which number to round,
 *   the same as the classic round had the implicit
 *   argument of 1 (e.g. (round 2.3) is the same as
 *   (round-to-precision 2.3 1)
 */
react_med.util.round_to_precision = (function react_med$util$round_to_precision(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15501 = arguments.length;
var i__4731__auto___15502 = (0);
while(true){
if((i__4731__auto___15502 < len__4730__auto___15501)){
args__4736__auto__.push((arguments[i__4731__auto___15502]));

var G__15503 = (i__4731__auto___15502 + (1));
i__4731__auto___15502 = G__15503;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_med.util.round_to_precision.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_med.util.round_to_precision.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__15497){
var vec__15498 = p__15497;
var precision = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15498,(0),null);
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
react_med.util.round_to_precision.cljs$lang$applyTo = (function (seq15495){
var G__15496 = cljs.core.first(seq15495);
var seq15495__$1 = cljs.core.next(seq15495);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15496,seq15495__$1);
});

/**
 * Repeat element as the length of n. Not lazy. Good to use in maps with
 *   multiple collections but when they have different length.
 */
react_med.util.repeat_as = (function react_med$util$repeat_as(n,element){
return cljs.core.vec(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(n),element)));
});
/**
 * The goal here is to make possible for components to receive optional attribu-
 *   tes as style that will overwrite what's defined in the component. So I used to
 *   define components like this:
 * 
 * (defn some-component [& children]
 *   [:div
 * {:style #js {:padding 12}}
 * (map-indexed #(with-meta %2 {:key %1}) children)])
 * 
 *   But it doesn't receive optional attributes that would overwrite that style.
 *   There are some options to solve the problem, including using macros, but with
 *   the functions replace-if-some and replace-if-none I can write the same compo-
 *   nent without changing the syntax very much, like this:
 * 
 * (defn some-component [attrs & children]
 *   (replace-if-some
 *  attrs
 *  [:div
 *   {:style #js {:padding 12}}
 *   (map-indexed #(with-meta %2 {:key %1}) (replace-if-none attrs children))]))
 */
react_med.util.replace_if_some = (function react_med$util$replace_if_some(attrs,element){
if(cljs.core.map_QMARK_(attrs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,(1),attrs);
} else {
return element;
}
});
/**
 * To be used with replace-if-some. The thing is that if attrs is not a map, it
 *   is actually the first child.
 */
react_med.util.replace_if_none = (function react_med$util$replace_if_none(attrs,children){
if(cljs.core.map_QMARK_(attrs)){
return children;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,attrs);
}
});
/**
 * A component that executes a side effect depending on the change of a subscrip-
 *   tion.
 */
react_med.util.side_effect_component = (function react_med$util$side_effect_component(p__15504){
var map__15505 = p__15504;
var map__15505__$1 = (((((!((map__15505 == null))))?(((((map__15505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15505):map__15505);
var side_effect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15505__$1,cljs.core.cst$kw$side_DASH_effect);
var subscription = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15505__$1,cljs.core.cst$kw$subscription);
console.log("A side effect was triggered by the subscription",subscription,"with value",(function (){var G__15507 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [subscription], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__15507) : react_med.util._LT_sub.call(null,G__15507));
})());

(side_effect.cljs$core$IFn$_invoke$arity$0 ? side_effect.cljs$core$IFn$_invoke$arity$0() : side_effect.call(null));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$no_DASH_ui$only_DASH_for_DASH_side_DASH_effect], null);
});
/**
 * Returns the first element of coll that satisfy the predicate f.
 */
react_med.util.get_pred = (function react_med$util$get_pred(f,coll){
return cljs.core.some((function (p1__15508_SHARP_){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__15508_SHARP_) : f.call(null,p1__15508_SHARP_)))){
return p1__15508_SHARP_;
} else {
return null;
}
}),coll);
});
react_med.util.yyyy_mm_dd__GT_dd_mm_yyyy = (function react_med$util$yyyy_mm_dd__GT_dd_mm_yyyy(date){
var vec__15509 = cljs.core.re_find(/(\d{4})\D(\d{1,2})\D(\d{1,2})/,date);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15509,(0),null);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15509,(1),null);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15509,(2),null);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15509,(3),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
});
