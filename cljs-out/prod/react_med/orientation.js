// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.orientation');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('react_med.util');
react_med.orientation.is_the_screen_small_QMARK_ = (function react_med$orientation$is_the_screen_small_QMARK_(){
return cljs.core.not.call(null,window.matchMedia("(min-width:800px)").matches);
});
react_med.orientation.orientation = (function react_med$orientation$orientation(state){
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ellipses",null,"ellipses-config",null], null), null).call(null,state);
if(cljs.core.truth_(and__4120__auto__)){
return react_med.orientation.is_the_screen_small_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return "landscape";
} else {
return "portrait";
}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.orientation","orientation","react-med.orientation/orientation",1608760171),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239)], null),react_med.orientation.orientation);
react_med.orientation.set_landscape_or_portrait = (function react_med$orientation$set_landscape_or_portrait(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.util.side_effect_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"subscription","subscription",1949009182),new cljs.core.Keyword("react-med.orientation","orientation","react-med.orientation/orientation",1608760171),new cljs.core.Keyword(null,"side-effect","side-effect",-949778885),(function (){
if(cljs.core._EQ_.call(null,"landscape",react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.orientation","orientation","react-med.orientation/orientation",1608760171)], null)))){
return screen.orientation.lock("landscape");
} else {
return screen.orientation.lock("portrait");
}
})], null)], null);
});

//# sourceMappingURL=orientation.js.map
