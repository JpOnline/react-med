// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.shell_components');
goog.require('cljs.core');
goog.require('react_med.util');
goog.require('re_frame.core');
goog.require('icon_button');
goog.require('tabs');
goog.require('tab');
goog.require('paper');
goog.require('menu_list');
goog.require('menu_item');
goog.require('arrow_back');
goog.require('menu_icon');
goog.require('close_icon');
goog.require('more_vert');
goog.require('day8.re_frame.tracing');
goog.require('react_med.motivation_sentences');
goog.require('reagent.core');
react_med.shell_components.global$module$icon_button = goog.global["IconButton"];
react_med.shell_components.global$module$tabs = goog.global["Tabs"];
react_med.shell_components.global$module$tab = goog.global["Tab"];
react_med.shell_components.global$module$paper = goog.global["Paper"];
react_med.shell_components.global$module$menu_list = goog.global["MenuList"];
react_med.shell_components.global$module$menu_item = goog.global["MenuItem"];
react_med.shell_components.global$module$arrow_back = goog.global["ArrowBack"];
react_med.shell_components.global$module$menu_icon = goog.global["MenuIcon"];
react_med.shell_components.global$module$close_icon = goog.global["CloseIcon"];
react_med.shell_components.global$module$more_vert = goog.global["MoreVert"];
react_med.shell_components.header = (function react_med$shell_components$header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14371 = arguments.length;
var i__4731__auto___14372 = (0);
while(true){
if((i__4731__auto___14372 < len__4730__auto___14371)){
args__4736__auto__.push((arguments[i__4731__auto___14372]));

var G__14373 = (i__4731__auto___14372 + (1));
i__4731__auto___14372 = G__14373;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.header.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"color": "white", "backgroundColor": react_med.util.primary_color, "width": "100%", "display": "flex", "flexDirection": "column", "zIndex": (1100), "boxShadow": "0px 2px 4px -1px #0003,\n                            0px 4px 5px 0px #00000024,\n                            0px 1px 10px 0px #0000001f"})], null),cljs.core.map_indexed.call(null,(function (p1__14369_SHARP_,p2__14368_SHARP_){
return cljs.core.with_meta.call(null,p2__14368_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__14369_SHARP_], null));
}),children)], null);
});

react_med.shell_components.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.header.cljs$lang$applyTo = (function (seq14370){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14370));
});

react_med.shell_components.top_bar = (function react_med$shell_components$top_bar(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14377 = arguments.length;
var i__4731__auto___14378 = (0);
while(true){
if((i__4731__auto___14378 < len__4730__auto___14377)){
args__4736__auto__.push((arguments[i__4731__auto___14378]));

var G__14379 = (i__4731__auto___14378 + (1));
i__4731__auto___14378 = G__14379;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.top_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.top_bar.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-bar","div.top-bar",-1606146455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"minHeight": (64), "padding": "0 24px", "display": "flex", "alignItems": "center"})], null),cljs.core.map_indexed.call(null,(function (p1__14375_SHARP_,p2__14374_SHARP_){
return cljs.core.with_meta.call(null,p2__14374_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__14375_SHARP_], null));
}),children)], null);
});

react_med.shell_components.top_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.top_bar.cljs$lang$applyTo = (function (seq14376){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14376));
});

react_med.shell_components.left_icon = (function react_med$shell_components$left_icon(p__14380){
var map__14381 = p__14380;
var map__14381__$1 = (((((!((map__14381 == null))))?(((((map__14381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14381):map__14381);
var variation = cljs.core.get.call(null,map__14381__$1,new cljs.core.Keyword(null,"variation","variation",-450640146));
if(cljs.core._EQ_.call(null,variation,"<-")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__14381,map__14381__$1,variation){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"back","back",-417520012)], null));
});})(map__14381,map__14381__$1,variation))
,new cljs.core.Keyword(null,"style","style",-496642736),({"marginLeft": (-12), "marginRight": (20)})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$arrow_back], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.arrow-back-placeholder","div.arrow-back-placeholder",-957738956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"width": "56px"})], null)], null);
}
});
react_med.shell_components.screen_title = (function react_med$shell_components$screen_title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14384 = arguments.length;
var i__4731__auto___14385 = (0);
while(true){
if((i__4731__auto___14385 < len__4730__auto___14384)){
args__4736__auto__.push((arguments[i__4731__auto___14385]));

var G__14386 = (i__4731__auto___14385 + (1));
i__4731__auto___14385 = G__14386;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.screen_title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.screen_title.cljs$core$IFn$_invoke$arity$variadic = (function (title_strs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"fontSize": "1.25rem", "fontWeight": (500), "lineHeight": 1.6, "letterSpacing": "0.0075em", "margin": (0)})], null),title_strs], null);
});

react_med.shell_components.screen_title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.screen_title.cljs$lang$applyTo = (function (seq14383){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14383));
});

react_med.shell_components.tabs_menu = (function react_med$shell_components$tabs_menu(p__14390){
var map__14391 = p__14390;
var map__14391__$1 = (((((!((map__14391 == null))))?(((((map__14391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14391):map__14391);
var menu_options = cljs.core.get.call(null,map__14391__$1,new cljs.core.Keyword(null,"menu-options","menu-options",-1774050123));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$tabs,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239)], null)),new cljs.core.Keyword(null,"TabIndicatorProps","TabIndicatorProps",-1668293323),({"style": ({"backgroundColor": react_med.util.secondary_color})}),new cljs.core.Keyword(null,"variant","variant",-424354234),"scrollable",new cljs.core.Keyword(null,"scrollButtons","scrollButtons",-954109284),(((cljs.core.count.call(null,menu_options) > (3)))?"on":"off"),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__14391,map__14391__$1,menu_options){
return (function (p1__14388_SHARP_,p2__14387_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","set-route","react-med.routes/set-route",-701732541),p2__14387_SHARP_], null));
});})(map__14391,map__14391__$1,menu_options))
,new cljs.core.Keyword(null,"style","style",-496642736),({"overflowX": "hidden"})], null),cljs.core.map.call(null,((function (map__14391,map__14391__$1,menu_options){
return (function (p1__14389_SHARP_){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$tab,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__14389_SHARP_),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(p1__14389_SHARP_),new cljs.core.Keyword(null,"style","style",-496642736),({"flexGrow": (1)})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__14389_SHARP_], null));
});})(map__14391,map__14391__$1,menu_options))
,menu_options)], null);
});
react_med.shell_components.bottom_bar = (function react_med$shell_components$bottom_bar(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14394 = arguments.length;
var i__4731__auto___14395 = (0);
while(true){
if((i__4731__auto___14395 < len__4730__auto___14394)){
args__4736__auto__.push((arguments[i__4731__auto___14395]));

var G__14396 = (i__4731__auto___14395 + (1));
i__4731__auto___14395 = G__14396;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.bottom_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.bottom_bar.cljs$core$IFn$_invoke$arity$variadic = (function (actions){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bottom-bar","div.bottom-bar",-1120608513),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"color": "white", "width": "100%", "justifyContent": "space-between", "zIndex": (1100), "display": "flex", "boxShadow": "0px -2px 4px -1px #0003,\n                           0px -4px 5px 0px #00000024,\n                           0px -1px 10px 0px #0000001f", "backgroundColor": react_med.util.primary_color, "height": (64), "alignItems": "center"})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","toggle-drawer-menu","react-med.shell-components/toggle-drawer-menu",-203315410)], null));
}),new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$menu_icon], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","open-actions-menu","react-med.shell-components/open-actions-menu",1464706104)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$more_vert], null)], null)], null);
});

react_med.shell_components.bottom_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.bottom_bar.cljs$lang$applyTo = (function (seq14393){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14393));
});

if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.shell_components.open_actions_menu = (function react_med$shell_components$open_actions_menu(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),true));

var opts__14242__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})(),(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})(),true);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14243__auto__;
}catch (e14397){var e = e14397;
throw e;
}});
} else {
react_med.shell_components.open_actions_menu = (function react_med$shell_components$open_actions_menu(app_state){
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),true);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.shell-components","open-actions-menu","react-med.shell-components/open-actions-menu",1464706104),react_med.shell_components.open_actions_menu);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.shell_components.close_actions_menu = (function react_med$shell_components$close_actions_menu(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),false));

var opts__14242__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})(),(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})(),false);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14243__auto__;
}catch (e14398){var e = e14398;
throw e;
}});
} else {
react_med.shell_components.close_actions_menu = (function react_med$shell_components$close_actions_menu(app_state){
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),false);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.shell-components","close-actions-menu","react-med.shell-components/close-actions-menu",-628250487),react_med.shell_components.close_actions_menu);
react_med.shell_components.actions_opened_QMARK_ = (function react_med$shell_components$actions_opened_QMARK_(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.shell-components","actions-opened?","react-med.shell-components/actions-opened?",1028017071),react_med.shell_components.actions_opened_QMARK_);
react_med.shell_components.actions_menu = (function react_med$shell_components$actions_menu(p__14399){
var map__14400 = p__14399;
var map__14400__$1 = (((((!((map__14400 == null))))?(((((map__14400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14400):map__14400);
var actions = cljs.core.get.call(null,map__14400__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","actions-opened?","react-med.shell-components/actions-opened?",1028017071)], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.close-menu-invisible-layer","div.close-menu-invisible-layer",-287020188),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"position": "absolute", "width": "100%", "height": "100%", "zIndex": (1199), "backgroundColor": "#0000000d"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__14400,map__14400__$1,actions){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","close-actions-menu","react-med.shell-components/close-actions-menu",-628250487)], null));
});})(map__14400,map__14400__$1,actions))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$paper,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(8),new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "white", "position": "absolute", "right": "12px", "bottom": "20px", "zIndex": (1200)})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$menu_list,cljs.core.map.call(null,((function (map__14400,map__14400__$1,actions){
return (function (action){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__14400,map__14400__$1,actions){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action.call(null,new cljs.core.Keyword(null,"event","event",301435442))], null));
});})(map__14400,map__14400__$1,actions))
], null),action.call(null,new cljs.core.Keyword(null,"name","name",1843675177))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),action.call(null,new cljs.core.Keyword(null,"name","name",1843675177))], null));
});})(map__14400,map__14400__$1,actions))
,actions)], null)], null)], null):null)], null);
});
react_med.shell_components.drawer_menu = (function react_med$shell_components$drawer_menu(p__14402){
var map__14403 = p__14402;
var map__14403__$1 = (((((!((map__14403 == null))))?(((((map__14403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14403):map__14403);
var menu_structure = cljs.core.get.call(null,map__14403__$1,new cljs.core.Keyword(null,"menu-structure","menu-structure",-627499224));
var structure__GT_menu_item = ((function (map__14403,map__14403__$1,menu_structure){
return (function() {
var react_med$shell_components$drawer_menu_$_s__GT_mi = null;
var react_med$shell_components$drawer_menu_$_s__GT_mi__1 = (function (structure){
return react_med$shell_components$drawer_menu_$_s__GT_mi.call(null,structure,(0));
});
var react_med$shell_components$drawer_menu_$_s__GT_mi__2 = (function (p__14405,padding){
var map__14406 = p__14405;
var map__14406__$1 = (((((!((map__14406 == null))))?(((((map__14406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14406):map__14406);
var label = cljs.core.get.call(null,map__14406__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var sub_menus = cljs.core.get.call(null,map__14406__$1,new cljs.core.Keyword(null,"sub-menus","sub-menus",-230507979));
var selected = cljs.core.get.call(null,map__14406__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var state = cljs.core.get.call(null,map__14406__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__14406,map__14406__$1,label,sub_menus,selected,state,map__14403,map__14403__$1,menu_structure){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","set-route","react-med.routes/set-route",-701732541),state], null));
});})(map__14406,map__14406__$1,label,sub_menus,selected,state,map__14403,map__14403__$1,menu_structure))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,(cljs.core.truth_(selected)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"lightgray"], null):null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),((20) + ((8) * padding))], null)))], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null)),cljs.core.mapcat.call(null,react_med$shell_components$drawer_menu_$_s__GT_mi,sub_menus,cljs.core.repeat.call(null,(padding + (1)))));
});
react_med$shell_components$drawer_menu_$_s__GT_mi = function(p__14405,padding){
switch(arguments.length){
case 1:
return react_med$shell_components$drawer_menu_$_s__GT_mi__1.call(this,p__14405);
case 2:
return react_med$shell_components$drawer_menu_$_s__GT_mi__2.call(this,p__14405,padding);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
react_med$shell_components$drawer_menu_$_s__GT_mi.cljs$core$IFn$_invoke$arity$1 = react_med$shell_components$drawer_menu_$_s__GT_mi__1;
react_med$shell_components$drawer_menu_$_s__GT_mi.cljs$core$IFn$_invoke$arity$2 = react_med$shell_components$drawer_menu_$_s__GT_mi__2;
return react_med$shell_components$drawer_menu_$_s__GT_mi;
})()
;})(map__14403,map__14403__$1,menu_structure))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","drawer-opened?","react-med.shell-components/drawer-opened?",1735188713)], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.close-menu-invisible-layer","div.close-menu-invisible-layer",-287020188),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"position": "absolute", "width": "100%", "height": "100%", "zIndex": (1199), "backgroundColor": "#0000000d"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (structure__GT_menu_item,map__14403,map__14403__$1,menu_structure){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","toggle-drawer-menu","react-med.shell-components/toggle-drawer-menu",-203315410)], null));
});})(structure__GT_menu_item,map__14403,map__14403__$1,menu_structure))
], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$paper,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(8),new cljs.core.Keyword(null,"style","style",-496642736),({"maxWidth": "100vw", "borderRadius": "0px", "width": "256px", "flexDirection": "column", "zIndex": (1200), "display": "flex", "position": "absolute", "backgroundColor": "white", "height": "100%"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drawer-header","div.drawer-header",-722685402),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"height": "64px", "backgroundColor": "white", "display": "flex", "alignItems": "center", "justifyContent": "center"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/LogoReactmed.png",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"margin": (0)})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$menu_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"flexGrow": (1), "paddingTop": "0px"})], null),cljs.core.map.call(null,structure__GT_menu_item,menu_structure)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drawer-footer","div.drawer-footer",1216793129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"height": "64px", "display": "flex", "alignItems": "center"})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (structure__GT_menu_item,map__14403,map__14403__$1,menu_structure){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","toggle-drawer-menu","react-med.shell-components/toggle-drawer-menu",-203315410)], null));
});})(structure__GT_menu_item,map__14403,map__14403__$1,menu_structure))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$close_icon], null)], null)], null)], null)], null):null)], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.shell_components.toggle_drawer_menu = (function react_med$shell_components$toggle_drawer_menu(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drawer-menu","drawer-menu",266025613),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),new cljs.core.Symbol(null,"not","not",1044554643,null)));

var opts__14242__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = cljs.core.update_in.call(null,(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})(),(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drawer-menu","drawer-menu",266025613),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drawer-menu","drawer-menu",266025613),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})(),(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = cljs.core.not;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drawer-menu","drawer-menu",266025613),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14243__auto__;
}catch (e14408){var e = e14408;
throw e;
}});
} else {
react_med.shell_components.toggle_drawer_menu = (function react_med$shell_components$toggle_drawer_menu(app_state){
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drawer-menu","drawer-menu",266025613),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),cljs.core.not);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.shell-components","toggle-drawer-menu","react-med.shell-components/toggle-drawer-menu",-203315410),react_med.shell_components.toggle_drawer_menu);
react_med.shell_components.drawer_opened_QMARK_ = (function react_med$shell_components$drawer_opened_QMARK_(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drawer-menu","drawer-menu",266025613),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.shell-components","drawer-opened?","react-med.shell-components/drawer-opened?",1735188713),react_med.shell_components.drawer_opened_QMARK_);
react_med.shell_components.error_boundary = (function react_med$shell_components$error_boundary(){
var error = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),((function (error){
return (function (this$,e,info){
return null;
});})(error))
,new cljs.core.Keyword(null,"get-derived-state-from-error","get-derived-state-from-error",1473896468),((function (error){
return (function (e){
cljs.core.reset_BANG_.call(null,error,e);

return ({});
});})(error))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (error){
return (function() { 
var G__14414__delegate = function (p__14411,children){
var map__14412 = p__14411;
var map__14412__$1 = (((((!((map__14412 == null))))?(((((map__14412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14412):map__14412);
var if_error = cljs.core.get.call(null,map__14412__$1,new cljs.core.Keyword(null,"if-error","if-error",-1992288515));
if(cljs.core.truth_(cljs.core.deref.call(null,error))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [if_error], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.map_indexed.call(null,((function (map__14412,map__14412__$1,if_error,error){
return (function (p1__14410_SHARP_,p2__14409_SHARP_){
return cljs.core.with_meta.call(null,p2__14409_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__14410_SHARP_], null));
});})(map__14412,map__14412__$1,if_error,error))
,children)], null);
}
};
var G__14414 = function (p__14411,var_args){
var children = null;
if (arguments.length > 1) {
var G__14415__i = 0, G__14415__a = new Array(arguments.length -  1);
while (G__14415__i < G__14415__a.length) {G__14415__a[G__14415__i] = arguments[G__14415__i + 1]; ++G__14415__i;}
  children = new cljs.core.IndexedSeq(G__14415__a,0,null);
} 
return G__14414__delegate.call(this,p__14411,children);};
G__14414.cljs$lang$maxFixedArity = 1;
G__14414.cljs$lang$applyTo = (function (arglist__14416){
var p__14411 = cljs.core.first(arglist__14416);
var children = cljs.core.rest(arglist__14416);
return G__14414__delegate(p__14411,children);
});
G__14414.cljs$core$IFn$_invoke$arity$variadic = G__14414__delegate;
return G__14414;
})()
;})(error))
], null));
});
react_med.shell_components.error_view = (function react_med$shell_components$error_view(){
var map__14417 = cljs.core.get.call(null,react_med.motivation_sentences.sentences,cljs.core.rand_int.call(null,cljs.core.count.call(null,react_med.motivation_sentences.sentences)));
var map__14417__$1 = (((((!((map__14417 == null))))?(((((map__14417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14417):map__14417);
var sentence = cljs.core.get.call(null,map__14417__$1,new cljs.core.Keyword(null,"sentence","sentence",2033657256));
var author = cljs.core.get.call(null,map__14417__$1,new cljs.core.Keyword(null,"author","author",2111686192));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center", "paddingBottom": "50px"})], null),"Desculpa, aconteceu algum erro. \uD83D\uDE1E"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"maxWidth": "600px", "margin": "auto"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),sentence], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "right"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),author], null)], null)], null)], null);
});
react_med.shell_components.main_content = (function react_med$shell_components$main_content(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14422 = arguments.length;
var i__4731__auto___14423 = (0);
while(true){
if((i__4731__auto___14423 < len__4730__auto___14422)){
args__4736__auto__.push((arguments[i__4731__auto___14423]));

var G__14424 = (i__4731__auto___14423 + (1));
i__4731__auto___14423 = G__14424;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.main_content.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.main_content.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"flexGrow": (1), "padding": (12), "overflow": "auto"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),react_med.shell_components.error_view], null),cljs.core.map_indexed.call(null,(function (p1__14420_SHARP_,p2__14419_SHARP_){
return cljs.core.with_meta.call(null,p2__14419_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__14420_SHARP_], null));
}),children)], null)], null);
});

react_med.shell_components.main_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.main_content.cljs$lang$applyTo = (function (seq14421){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14421));
});

react_med.shell_components.main_error_view = (function react_med$shell_components$main_error_view(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variation","variation",-450640146),""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.screen_title,"Erro"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_view], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.drawer_menu], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.bottom_bar], null)], null);
});
react_med.shell_components.main_panel = (function react_med$shell_components$main_panel(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14428 = arguments.length;
var i__4731__auto___14429 = (0);
while(true){
if((i__4731__auto___14429 < len__4730__auto___14428)){
args__4736__auto__.push((arguments[i__4731__auto___14429]));

var G__14430 = (i__4731__auto___14429 + (1));
i__4731__auto___14429 = G__14430;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.main_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.main_panel.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-panel","div.main-panel",-705688759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "position": "relative", "justifyContent": "space-between", "flexDirection": "column", "height": "inherit", "width": "inherit"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),react_med.shell_components.main_error_view], null),cljs.core.map_indexed.call(null,(function (p1__14426_SHARP_,p2__14425_SHARP_){
return cljs.core.with_meta.call(null,p2__14425_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__14426_SHARP_], null));
}),children)], null)], null);
});

react_med.shell_components.main_panel.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.main_panel.cljs$lang$applyTo = (function (seq14427){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14427));
});


//# sourceMappingURL=shell_components.js.map
