// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.orientation');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('react_med.util');
react_med.orientation.is_the_screen_small_QMARK_ = (function react_med$orientation$is_the_screen_small_QMARK_(){
return cljs.core.not(window.matchMedia("(min-width:800px)").matches);
});
react_med.orientation.orientation = (function react_med$orientation$orientation(state){
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var fexpr__26280 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ellipses",null,"ellipses-config",null], null), null);
return (fexpr__26280.cljs$core$IFn$_invoke$arity$1 ? fexpr__26280.cljs$core$IFn$_invoke$arity$1(state) : fexpr__26280.call(null,state));
})();
if(cljs.core.truth_(and__4120__auto__)){
return react_med.orientation.is_the_screen_small_QMARK_();
} else {
return and__4120__auto__;
}
})())){
return "landscape";
} else {
return "portrait";
}
});
var G__26281_26285 = cljs.core.cst$kw$react_DASH_med$orientation_SLASH_orientation;
var G__26282_26286 = cljs.core.cst$kw$_LT__DASH_;
var G__26283_26287 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_state], null);
var G__26284_26288 = react_med.orientation.orientation;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26281_26285,G__26282_26286,G__26283_26287,G__26284_26288) : re_frame.core.reg_sub.call(null,G__26281_26285,G__26282_26286,G__26283_26287,G__26284_26288));
react_med.orientation.set_landscape_or_portrait = (function react_med$orientation$set_landscape_or_portrait(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.util.side_effect_component,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$subscription,cljs.core.cst$kw$react_DASH_med$orientation_SLASH_orientation,cljs.core.cst$kw$side_DASH_effect,(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("landscape",(function (){var G__26289 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$orientation_SLASH_orientation], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__26289) : react_med.util._LT_sub.call(null,G__26289));
})())){
return screen.orientation.lock("landscape");
} else {
return screen.orientation.lock("portrait");
}
})], null)], null);
});
