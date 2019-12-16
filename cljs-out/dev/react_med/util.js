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
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.util","valid-app-state","react-med.util/valid-app-state",-1191726275),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.util","ui","react-med.util/ui",698372833),new cljs.core.Keyword("react-med.util","domain","react-med.util/domain",590896587)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.util","ui","react-med.util/ui",698372833),new cljs.core.Keyword("react-med.util","domain","react-med.util/domain",590896587)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__10590){
return cljs.core.map_QMARK_.call(null,G__10590);
}),(function (G__10590){
return cljs.core.contains_QMARK_.call(null,G__10590,new cljs.core.Keyword(null,"ui","ui",-469653645));
}),(function (G__10590){
return cljs.core.contains_QMARK_.call(null,G__10590,new cljs.core.Keyword(null,"domain","domain",1847214937));
})], null),(function (G__10590){
return ((cljs.core.map_QMARK_.call(null,G__10590)) && (cljs.core.contains_QMARK_.call(null,G__10590,new cljs.core.Keyword(null,"ui","ui",-469653645))) && (cljs.core.contains_QMARK_.call(null,G__10590,new cljs.core.Keyword(null,"domain","domain",1847214937))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.util","ui","react-med.util/ui",698372833),new cljs.core.Keyword("react-med.util","domain","react-med.util/domain",590896587)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"ui","ui",-469653645))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"domain","domain",1847214937)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.util","ui","react-med.util/ui",698372833),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.util","domain","react-med.util/domain",590896587),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
react_med.util.is_state_QMARK_ = (function react_med$util$is_state_QMARK_(message){
return (function() {
var G__10591 = null;
var G__10591__1 = (function (app_state){
return react_med.util.validate.call(null,new cljs.core.Keyword("react-med.util","valid-app-state","react-med.util/valid-app-state",-1191726275),app_state,message);
});
var G__10591__2 = (function (app_state,event){
return react_med.util.validate.call(null,new cljs.core.Keyword("react-med.util","valid-app-state","react-med.util/valid-app-state",-1191726275),app_state,["Erro no evento ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join(''));
});
G__10591 = function(app_state,event){
switch(arguments.length){
case 1:
return G__10591__1.call(this,app_state);
case 2:
return G__10591__2.call(this,app_state,event);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10591.cljs$core$IFn$_invoke$arity$1 = G__10591__1;
G__10591.cljs$core$IFn$_invoke$arity$2 = G__10591__2;
return G__10591;
})()
});
react_med.util.pre_state_QMARK_ = react_med.util.is_state_QMARK_.call(null,"Input of an invalid app-state.");
react_med.util.post_state_QMARK_ = react_med.util.is_state_QMARK_.call(null,"Returned an invalid app-state.");
/**
 * it takes an argument for which number to round,
 *   the same as the classic round had the implicit
 *   argument of 1 (e.g. (round 2.3) is the same as
 *   (round-to-precision 2.3 1)
 */
react_med.util.round_to_precision = (function react_med$util$round_to_precision(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10598 = arguments.length;
var i__4731__auto___10599 = (0);
while(true){
if((i__4731__auto___10599 < len__4730__auto___10598)){
args__4736__auto__.push((arguments[i__4731__auto___10599]));

var G__10600 = (i__4731__auto___10599 + (1));
i__4731__auto___10599 = G__10600;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_med.util.round_to_precision.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_med.util.round_to_precision.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__10594){
var vec__10595 = p__10594;
var precision = cljs.core.nth.call(null,vec__10595,(0),null);
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
react_med.util.round_to_precision.cljs$lang$applyTo = (function (seq10592){
var G__10593 = cljs.core.first.call(null,seq10592);
var seq10592__$1 = cljs.core.next.call(null,seq10592);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10593,seq10592__$1);
});


//# sourceMappingURL=util.js.map
