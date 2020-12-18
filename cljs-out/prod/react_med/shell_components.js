// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.shell_components');
goog.require('cljs.core');
goog.require('arrow_back');
goog.require('button');
goog.require('close_icon');
goog.require('day8.re_frame.tracing');
goog.require('icon_button');
goog.require('menu_icon');
goog.require('menu_item');
goog.require('menu_list');
goog.require('more_vert');
goog.require('paper');
goog.require('re_frame.core');
goog.require('react_med.authentication.authentication');
goog.require('react_med.motivation_sentences');
goog.require('react_med.pwa_install_component');
goog.require('react_med.util');
goog.require('reagent.core');
goog.require('tab');
goog.require('tabs');
react_med.shell_components.global$module$arrow_back = goog.global["ArrowBack"];
react_med.shell_components.global$module$button = goog.global["Button"];
react_med.shell_components.global$module$close_icon = goog.global["CloseIcon"];
react_med.shell_components.global$module$icon_button = goog.global["IconButton"];
react_med.shell_components.global$module$menu_icon = goog.global["MenuIcon"];
react_med.shell_components.global$module$menu_item = goog.global["MenuItem"];
react_med.shell_components.global$module$menu_list = goog.global["MenuList"];
react_med.shell_components.global$module$more_vert = goog.global["MoreVert"];
react_med.shell_components.global$module$paper = goog.global["Paper"];
react_med.shell_components.global$module$tab = goog.global["Tab"];
react_med.shell_components.global$module$tabs = goog.global["Tabs"];
react_med.shell_components.header = (function react_med$shell_components$header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14741 = arguments.length;
var i__4731__auto___14742 = (0);
while(true){
if((i__4731__auto___14742 < len__4730__auto___14741)){
args__4736__auto__.push((arguments[i__4731__auto___14742]));

var G__14743 = (i__4731__auto___14742 + (1));
i__4731__auto___14742 = G__14743;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.header.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"color": "white", "backgroundColor": react_med.util.primary_color, "width": "100%", "zIndex": (1100), "boxShadow": "0px 2px 4px -1px #0003,\n                            0px 4px 5px 0px #00000024,\n                            0px 1px 10px 0px #0000001f"})], null),cljs.core.map_indexed.call(null,(function (p1__14739_SHARP_,p2__14738_SHARP_){
return cljs.core.with_meta.call(null,p2__14738_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__14739_SHARP_], null));
}),children)], null);
});

react_med.shell_components.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.header.cljs$lang$applyTo = (function (seq14740){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14740));
});

react_med.shell_components.top_bar = (function react_med$shell_components$top_bar(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14747 = arguments.length;
var i__4731__auto___14748 = (0);
while(true){
if((i__4731__auto___14748 < len__4730__auto___14747)){
args__4736__auto__.push((arguments[i__4731__auto___14748]));

var G__14749 = (i__4731__auto___14748 + (1));
i__4731__auto___14748 = G__14749;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.top_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.top_bar.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-bar","div.top-bar",-1606146455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"height": "64px", "padding": "0 24px", "display": "flex", "alignItems": "center"})], null),cljs.core.map_indexed.call(null,(function (p1__14745_SHARP_,p2__14744_SHARP_){
return cljs.core.with_meta.call(null,p2__14744_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__14745_SHARP_], null));
}),children)], null);
});

react_med.shell_components.top_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.top_bar.cljs$lang$applyTo = (function (seq14746){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14746));
});

react_med.shell_components.left_icon = (function react_med$shell_components$left_icon(p__14750){
var map__14751 = p__14750;
var map__14751__$1 = (((((!((map__14751 == null))))?(((((map__14751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14751):map__14751);
var variation = cljs.core.get.call(null,map__14751__$1,new cljs.core.Keyword(null,"variation","variation",-450640146));
var G__14753 = variation;
switch (G__14753) {
case "<-":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__14753,map__14751,map__14751__$1,variation){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"back","back",-417520012)], null));
});})(G__14753,map__14751,map__14751__$1,variation))
,new cljs.core.Keyword(null,"style","style",-496642736),({"marginLeft": (-12), "marginRight": (20)})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$arrow_back], null)], null);

break;
case "X":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__14753,map__14751,map__14751__$1,variation){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel","cancel",-1964088360)], null));
});})(G__14753,map__14751,map__14751__$1,variation))
,new cljs.core.Keyword(null,"style","style",-496642736),({"marginLeft": (-12), "marginRight": (20)})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$close_icon], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.arrow-back-placeholder","div.arrow-back-placeholder",-957738956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"width": "56px"})], null)], null);

}
});
react_med.shell_components.screen_title = (function react_med$shell_components$screen_title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14756 = arguments.length;
var i__4731__auto___14757 = (0);
while(true){
if((i__4731__auto___14757 < len__4730__auto___14756)){
args__4736__auto__.push((arguments[i__4731__auto___14757]));

var G__14758 = (i__4731__auto___14757 + (1));
i__4731__auto___14757 = G__14758;
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
react_med.shell_components.screen_title.cljs$lang$applyTo = (function (seq14755){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14755));
});

react_med.shell_components.tabs_menu = (function react_med$shell_components$tabs_menu(p__14762){
var map__14763 = p__14762;
var map__14763__$1 = (((((!((map__14763 == null))))?(((((map__14763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14763):map__14763);
var menu_options = cljs.core.get.call(null,map__14763__$1,new cljs.core.Keyword(null,"menu-options","menu-options",-1774050123));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$tabs,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239)], null)),new cljs.core.Keyword(null,"TabIndicatorProps","TabIndicatorProps",-1668293323),({"style": ({"backgroundColor": react_med.util.secondary_color})}),new cljs.core.Keyword(null,"variant","variant",-424354234),"scrollable",new cljs.core.Keyword(null,"scrollButtons","scrollButtons",-954109284),(((cljs.core.count.call(null,menu_options) > (3)))?"on":"off"),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__14763,map__14763__$1,menu_options){
return (function (p1__14760_SHARP_,p2__14759_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","set-route","react-med.routes/set-route",-701732541),p2__14759_SHARP_], null));
});})(map__14763,map__14763__$1,menu_options))
,new cljs.core.Keyword(null,"style","style",-496642736),({"overflowX": "hidden", "height": "48px"})], null),cljs.core.map.call(null,((function (map__14763,map__14763__$1,menu_options){
return (function (p1__14761_SHARP_){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$tab,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__14761_SHARP_),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(p1__14761_SHARP_),new cljs.core.Keyword(null,"style","style",-496642736),({"flexGrow": (1)})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__14761_SHARP_], null));
});})(map__14763,map__14763__$1,menu_options))
,menu_options)], null);
});
react_med.shell_components.bottom_bar = (function react_med$shell_components$bottom_bar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bottom-bar","div.bottom-bar",-1120608513),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"color": "white", "width": "100%", "justifyContent": "space-between", "zIndex": (1100), "display": "flex", "boxShadow": "0px -2px 4px -1px #0003,\n                           0px -4px 5px 0px #00000024,\n                           0px -1px 10px 0px #0000001f", "backgroundColor": react_med.util.primary_color, "minHeight": (64), "alignItems": "center"})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","toggle-drawer-menu","react-med.shell-components/toggle-drawer-menu",-203315410)], null));
}),new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$menu_icon], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","open-actions-menu","react-med.shell-components/open-actions-menu",1464706104)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$more_vert], null)], null)], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.shell_components.open_actions_menu = (function react_med$shell_components$open_actions_menu(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),true));

var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})(),true);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14483__auto__;
}catch (e14765){var e = e14765;
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

var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})(),false);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14483__auto__;
}catch (e14766){var e = e14766;
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
react_med.shell_components.actions_menu = (function react_med$shell_components$actions_menu(p__14767){
var map__14768 = p__14767;
var map__14768__$1 = (((((!((map__14768 == null))))?(((((map__14768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14768):map__14768);
var actions = cljs.core.get.call(null,map__14768__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","actions-opened?","react-med.shell-components/actions-opened?",1028017071)], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.close-menu-invisible-layer","div.close-menu-invisible-layer",-287020188),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"position": "absolute", "width": "100%", "height": "100%", "zIndex": (1199), "backgroundColor": "#0000000d"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__14768,map__14768__$1,actions){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","close-actions-menu","react-med.shell-components/close-actions-menu",-628250487)], null));
});})(map__14768,map__14768__$1,actions))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$paper,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(8),new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "white", "position": "absolute", "right": "12px", "bottom": "20px", "zIndex": (1200)})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$menu_list,cljs.core.map.call(null,((function (map__14768,map__14768__$1,actions){
return (function (action){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__14768,map__14768__$1,actions){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action.call(null,new cljs.core.Keyword(null,"event","event",301435442))], null));
});})(map__14768,map__14768__$1,actions))
], null),action.call(null,new cljs.core.Keyword(null,"name","name",1843675177))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),action.call(null,new cljs.core.Keyword(null,"name","name",1843675177))], null));
});})(map__14768,map__14768__$1,actions))
,actions)], null)], null)], null):null)], null);
});
react_med.shell_components.drawer_menu = (function react_med$shell_components$drawer_menu(p__14770){
var map__14771 = p__14770;
var map__14771__$1 = (((((!((map__14771 == null))))?(((((map__14771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14771):map__14771);
var menu_structure = cljs.core.get.call(null,map__14771__$1,new cljs.core.Keyword(null,"menu-structure","menu-structure",-627499224));
var structure__GT_menu_item = ((function (map__14771,map__14771__$1,menu_structure){
return (function() {
var react_med$shell_components$drawer_menu_$_s__GT_mi = null;
var react_med$shell_components$drawer_menu_$_s__GT_mi__1 = (function (structure){
return react_med$shell_components$drawer_menu_$_s__GT_mi.call(null,structure,(0));
});
var react_med$shell_components$drawer_menu_$_s__GT_mi__2 = (function (p__14773,padding){
var map__14774 = p__14773;
var map__14774__$1 = (((((!((map__14774 == null))))?(((((map__14774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14774):map__14774);
var label = cljs.core.get.call(null,map__14774__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var sub_menus = cljs.core.get.call(null,map__14774__$1,new cljs.core.Keyword(null,"sub-menus","sub-menus",-230507979));
var selected = cljs.core.get.call(null,map__14774__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var state = cljs.core.get.call(null,map__14774__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__14774,map__14774__$1,label,sub_menus,selected,state,map__14771,map__14771__$1,menu_structure){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","set-route","react-med.routes/set-route",-701732541),state], null));
});})(map__14774,map__14774__$1,label,sub_menus,selected,state,map__14771,map__14771__$1,menu_structure))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,(cljs.core.truth_(selected)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"lightgray"], null):null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),((20) + ((8) * padding))], null)))], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null)),cljs.core.mapcat.call(null,react_med$shell_components$drawer_menu_$_s__GT_mi,sub_menus,cljs.core.repeat.call(null,(padding + (1)))));
});
react_med$shell_components$drawer_menu_$_s__GT_mi = function(p__14773,padding){
switch(arguments.length){
case 1:
return react_med$shell_components$drawer_menu_$_s__GT_mi__1.call(this,p__14773);
case 2:
return react_med$shell_components$drawer_menu_$_s__GT_mi__2.call(this,p__14773,padding);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
react_med$shell_components$drawer_menu_$_s__GT_mi.cljs$core$IFn$_invoke$arity$1 = react_med$shell_components$drawer_menu_$_s__GT_mi__1;
react_med$shell_components$drawer_menu_$_s__GT_mi.cljs$core$IFn$_invoke$arity$2 = react_med$shell_components$drawer_menu_$_s__GT_mi__2;
return react_med$shell_components$drawer_menu_$_s__GT_mi;
})()
;})(map__14771,map__14771__$1,menu_structure))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","drawer-opened?","react-med.shell-components/drawer-opened?",1735188713)], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.close-menu-invisible-layer","div.close-menu-invisible-layer",-287020188),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"position": "absolute", "width": "100%", "height": "100%", "zIndex": (1199), "backgroundColor": "#0000000d"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (structure__GT_menu_item,map__14771,map__14771__$1,menu_structure){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","toggle-drawer-menu","react-med.shell-components/toggle-drawer-menu",-203315410)], null));
});})(structure__GT_menu_item,map__14771,map__14771__$1,menu_structure))
], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$paper,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(8),new cljs.core.Keyword(null,"style","style",-496642736),({"maxWidth": "100vw", "borderRadius": "0px", "width": "256px", "flexDirection": "column", "zIndex": (1200), "display": "flex", "position": "absolute", "backgroundColor": "white", "height": "100%"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drawer-header","div.drawer-header",-722685402),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"height": "64px", "backgroundColor": "white", "display": "flex", "alignItems": "center", "justifyContent": "center"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/LogoReactmed.png",new cljs.core.Keyword(null,"width","width",-384071477),(220)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"margin": (0)})], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$menu_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"flexGrow": (1), "paddingTop": "0px", "display": "flex", "flexDirection": "column"})], null),cljs.core.map.call(null,structure__GT_menu_item,menu_structure),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"margin": "50px 15px 10px 15px", "color": "#caca30"}),new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (structure__GT_menu_item,map__14771,map__14771__$1,menu_structure){
return (function (){
return react_med.authentication.authentication.logout.call(null);
});})(structure__GT_menu_item,map__14771,map__14771__$1,menu_structure))
], null),"Logout"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.pwa_install_component.button], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drawer-footer","div.drawer-footer",1216793129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"height": "64px", "display": "flex", "alignItems": "center"})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (structure__GT_menu_item,map__14771,map__14771__$1,menu_structure){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","toggle-drawer-menu","react-med.shell-components/toggle-drawer-menu",-203315410)], null));
});})(structure__GT_menu_item,map__14771,map__14771__$1,menu_structure))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.shell_components.global$module$close_icon], null)], null)], null)], null)], null):null)], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.shell_components.toggle_drawer_menu = (function react_med$shell_components$toggle_drawer_menu(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drawer-menu","drawer-menu",266025613),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),new cljs.core.Symbol(null,"not","not",1044554643,null)));

var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.update_in.call(null,(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drawer-menu","drawer-menu",266025613),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drawer-menu","drawer-menu",266025613),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.not;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drawer-menu","drawer-menu",266025613),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14483__auto__;
}catch (e14776){var e = e14776;
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
var G__14782__delegate = function (p__14779,children){
var map__14780 = p__14779;
var map__14780__$1 = (((((!((map__14780 == null))))?(((((map__14780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14780):map__14780);
var if_error = cljs.core.get.call(null,map__14780__$1,new cljs.core.Keyword(null,"if-error","if-error",-1992288515));
if(cljs.core.truth_(cljs.core.deref.call(null,error))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),if_error], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.map_indexed.call(null,((function (map__14780,map__14780__$1,if_error,error){
return (function (p1__14778_SHARP_,p2__14777_SHARP_){
return cljs.core.with_meta.call(null,p2__14777_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__14778_SHARP_], null));
});})(map__14780,map__14780__$1,if_error,error))
,children)], null);
}
};
var G__14782 = function (p__14779,var_args){
var children = null;
if (arguments.length > 1) {
var G__14783__i = 0, G__14783__a = new Array(arguments.length -  1);
while (G__14783__i < G__14783__a.length) {G__14783__a[G__14783__i] = arguments[G__14783__i + 1]; ++G__14783__i;}
  children = new cljs.core.IndexedSeq(G__14783__a,0,null);
} 
return G__14782__delegate.call(this,p__14779,children);};
G__14782.cljs$lang$maxFixedArity = 1;
G__14782.cljs$lang$applyTo = (function (arglist__14784){
var p__14779 = cljs.core.first(arglist__14784);
var children = cljs.core.rest(arglist__14784);
return G__14782__delegate(p__14779,children);
});
G__14782.cljs$core$IFn$_invoke$arity$variadic = G__14782__delegate;
return G__14782;
})()
;})(error))
], null));
});
react_med.shell_components.error_view = (function react_med$shell_components$error_view(){
var map__14785 = cljs.core.get.call(null,react_med.motivation_sentences.sentences,cljs.core.rand_int.call(null,cljs.core.count.call(null,react_med.motivation_sentences.sentences)));
var map__14785__$1 = (((((!((map__14785 == null))))?(((((map__14785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14785):map__14785);
var sentence = cljs.core.get.call(null,map__14785__$1,new cljs.core.Keyword(null,"sentence","sentence",2033657256));
var author = cljs.core.get.call(null,map__14785__$1,new cljs.core.Keyword(null,"author","author",2111686192));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center", "paddingBottom": "50px"})], null),"Desculpa, aconteceu algum erro. \uD83D\uDE1E"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"maxWidth": "600px", "margin": "auto"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),sentence], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "right"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),author], null)], null)], null)], null);
});
react_med.shell_components.main_content = (function react_med$shell_components$main_content(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14791 = arguments.length;
var i__4731__auto___14792 = (0);
while(true){
if((i__4731__auto___14792 < len__4730__auto___14791)){
args__4736__auto__.push((arguments[i__4731__auto___14792]));

var G__14793 = (i__4731__auto___14792 + (1));
i__4731__auto___14792 = G__14793;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_med.shell_components.main_content.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_med.shell_components.main_content.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return react_med.util.replace_if_some.call(null,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"flex": (1), "padding": (12), "overflow": "auto"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_view], null)], null),cljs.core.map_indexed.call(null,(function (p1__14788_SHARP_,p2__14787_SHARP_){
return cljs.core.with_meta.call(null,p2__14787_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__14788_SHARP_], null));
}),react_med.util.replace_if_none.call(null,attrs,children))], null)], null));
});

react_med.shell_components.main_content.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_med.shell_components.main_content.cljs$lang$applyTo = (function (seq14789){
var G__14790 = cljs.core.first.call(null,seq14789);
var seq14789__$1 = cljs.core.next.call(null,seq14789);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14790,seq14789__$1);
});

react_med.shell_components.main_error_view = (function react_med$shell_components$main_error_view(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variation","variation",-450640146),""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.screen_title,"Erro"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_view], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.drawer_menu], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.bottom_bar], null)], null);
});
react_med.shell_components.main_panel = (function react_med$shell_components$main_panel(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14797 = arguments.length;
var i__4731__auto___14798 = (0);
while(true){
if((i__4731__auto___14798 < len__4730__auto___14797)){
args__4736__auto__.push((arguments[i__4731__auto___14798]));

var G__14799 = (i__4731__auto___14798 + (1));
i__4731__auto___14798 = G__14799;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.main_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.main_panel.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-panel","div.main-panel",-705688759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "position": "relative", "justifyContent": "space-between", "flexDirection": "column", "height": "inherit", "width": "inherit"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_error_view], null)], null),cljs.core.map_indexed.call(null,(function (p1__14795_SHARP_,p2__14794_SHARP_){
return cljs.core.with_meta.call(null,p2__14794_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__14795_SHARP_], null));
}),children)], null)], null);
});

react_med.shell_components.main_panel.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.main_panel.cljs$lang$applyTo = (function (seq14796){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14796));
});

react_med.shell_components.default$ = (function react_med$shell_components$default(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14803 = arguments.length;
var i__4731__auto___14804 = (0);
while(true){
if((i__4731__auto___14804 < len__4730__auto___14803)){
args__4736__auto__.push((arguments[i__4731__auto___14804]));

var G__14805 = (i__4731__auto___14804 + (1));
i__4731__auto___14804 = G__14805;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.default$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.default$.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var menu_structure = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","side-menu","react-med.routes/side-menu",909029319)], null));
var tabs = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","tabs","react-med.routes/tabs",1784816700)], null));
var title = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","title","react-med.routes/title",1582209313)], null));
var actions = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","actions","react-med.routes/actions",-1858990120)], null));
var top_bar_icon = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","top-bar-icon","react-med.routes/top-bar-icon",-1492414179)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variation","variation",-450640146),top_bar_icon], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.screen_title,title], null)], null),(cljs.core.truth_(tabs)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.tabs_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-options","menu-options",-1774050123),tabs], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,cljs.core.map_indexed.call(null,((function (menu_structure,tabs,title,actions,top_bar_icon){
return (function (p1__14801_SHARP_,p2__14800_SHARP_){
return cljs.core.with_meta.call(null,p2__14800_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__14801_SHARP_], null));
});})(menu_structure,tabs,title,actions,top_bar_icon))
,children)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.drawer_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-structure","menu-structure",-627499224),menu_structure], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.actions_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.bottom_bar], null)], null);
});

react_med.shell_components.default$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.default$.cljs$lang$applyTo = (function (seq14802){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14802));
});


//# sourceMappingURL=shell_components.js.map
