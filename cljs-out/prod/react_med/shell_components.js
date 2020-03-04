// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.shell_components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('react_med.authentication.authentication');
goog.require('react_med.motivation_sentences');
goog.require('react_med.util');
goog.require('reagent.core');
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
var len__4730__auto___20148 = arguments.length;
var i__4731__auto___20149 = (0);
while(true){
if((i__4731__auto___20149 < len__4730__auto___20148)){
args__4736__auto__.push((arguments[i__4731__auto___20149]));

var G__20150 = (i__4731__auto___20149 + (1));
i__4731__auto___20149 = G__20150;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.header.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"color": "white", "backgroundColor": react_med.util.primary_color, "width": "100%", "display": "flex", "flexDirection": "column", "zIndex": (1100), "boxShadow": "0px 2px 4px -1px #0003,\n                            0px 4px 5px 0px #00000024,\n                            0px 1px 10px 0px #0000001f"})], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__20146_SHARP_,p2__20145_SHARP_){
return cljs.core.with_meta(p2__20145_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__20146_SHARP_], null));
}),children)], null);
});

react_med.shell_components.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.header.cljs$lang$applyTo = (function (seq20147){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20147));
});

react_med.shell_components.top_bar = (function react_med$shell_components$top_bar(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20154 = arguments.length;
var i__4731__auto___20155 = (0);
while(true){
if((i__4731__auto___20155 < len__4730__auto___20154)){
args__4736__auto__.push((arguments[i__4731__auto___20155]));

var G__20156 = (i__4731__auto___20155 + (1));
i__4731__auto___20155 = G__20156;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.top_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.top_bar.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$top_DASH_bar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"minHeight": (64), "padding": "0 24px", "display": "flex", "alignItems": "center"})], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__20152_SHARP_,p2__20151_SHARP_){
return cljs.core.with_meta(p2__20151_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__20152_SHARP_], null));
}),children)], null);
});

react_med.shell_components.top_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.top_bar.cljs$lang$applyTo = (function (seq20153){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20153));
});

react_med.shell_components.left_icon = (function react_med$shell_components$left_icon(p__20157){
var map__20158 = p__20157;
var map__20158__$1 = (((((!((map__20158 == null))))?(((((map__20158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20158):map__20158);
var variation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20158__$1,cljs.core.cst$kw$variation);
var G__20160 = variation;
switch (G__20160) {
case "<-":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$onClick,((function (G__20160,map__20158,map__20158__$1,variation){
return (function (){
var G__20161 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$back], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20161) : react_med.util._GT_evt.call(null,G__20161));
});})(G__20160,map__20158,map__20158__$1,variation))
,cljs.core.cst$kw$style,({"marginLeft": (-12), "marginRight": (20)})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$arrow_back], null)], null);

break;
case "X":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$onClick,((function (G__20160,map__20158,map__20158__$1,variation){
return (function (){
var G__20162 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cancel], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20162) : react_med.util._GT_evt.call(null,G__20162));
});})(G__20160,map__20158,map__20158__$1,variation))
,cljs.core.cst$kw$style,({"marginLeft": (-12), "marginRight": (20)})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$close_icon], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$arrow_DASH_back_DASH_placeholder,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"width": "56px"})], null)], null);

}
});
react_med.shell_components.screen_title = (function react_med$shell_components$screen_title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20165 = arguments.length;
var i__4731__auto___20166 = (0);
while(true){
if((i__4731__auto___20166 < len__4730__auto___20165)){
args__4736__auto__.push((arguments[i__4731__auto___20166]));

var G__20167 = (i__4731__auto___20166 + (1));
i__4731__auto___20166 = G__20167;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.screen_title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.screen_title.cljs$core$IFn$_invoke$arity$variadic = (function (title_strs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"fontSize": "1.25rem", "fontWeight": (500), "lineHeight": 1.6, "letterSpacing": "0.0075em", "margin": (0)})], null),title_strs], null);
});

react_med.shell_components.screen_title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.screen_title.cljs$lang$applyTo = (function (seq20164){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20164));
});

react_med.shell_components.tabs_menu = (function react_med$shell_components$tabs_menu(p__20171){
var map__20172 = p__20171;
var map__20172__$1 = (((((!((map__20172 == null))))?(((((map__20172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20172):map__20172);
var menu_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20172__$1,cljs.core.cst$kw$menu_DASH_options);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$tabs,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$value,(function (){var G__20174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_state], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20174) : react_med.util._LT_sub.call(null,G__20174));
})(),cljs.core.cst$kw$TabIndicatorProps,({"style": ({"backgroundColor": react_med.util.secondary_color})}),cljs.core.cst$kw$variant,"scrollable",cljs.core.cst$kw$scrollButtons,(((cljs.core.count(menu_options) > (3)))?"on":"off"),cljs.core.cst$kw$onChange,((function (map__20172,map__20172__$1,menu_options){
return (function (p1__20169_SHARP_,p2__20168_SHARP_){
var G__20175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_set_DASH_route,p2__20168_SHARP_], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20175) : react_med.util._GT_evt.call(null,G__20175));
});})(map__20172,map__20172__$1,menu_options))
,cljs.core.cst$kw$style,({"overflowX": "hidden"})], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__20172,map__20172__$1,menu_options){
return (function (p1__20170_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$tab,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(p1__20170_SHARP_),cljs.core.cst$kw$value,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(p1__20170_SHARP_),cljs.core.cst$kw$style,({"flexGrow": (1)})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__20170_SHARP_], null));
});})(map__20172,map__20172__$1,menu_options))
,menu_options)], null);
});
react_med.shell_components.bottom_bar = (function react_med$shell_components$bottom_bar(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20179 = arguments.length;
var i__4731__auto___20180 = (0);
while(true){
if((i__4731__auto___20180 < len__4730__auto___20179)){
args__4736__auto__.push((arguments[i__4731__auto___20180]));

var G__20181 = (i__4731__auto___20180 + (1));
i__4731__auto___20180 = G__20181;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.bottom_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.bottom_bar.cljs$core$IFn$_invoke$arity$variadic = (function (actions){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bottom_DASH_bar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"color": "white", "width": "100%", "justifyContent": "space-between", "zIndex": (1100), "display": "flex", "boxShadow": "0px -2px 4px -1px #0003,\n                           0px -4px 5px 0px #00000024,\n                           0px -1px 10px 0px #0000001f", "backgroundColor": react_med.util.primary_color, "height": (64), "alignItems": "center"})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,(function (){
var G__20177 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_toggle_DASH_drawer_DASH_menu], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20177) : react_med.util._GT_evt.call(null,G__20177));
}),cljs.core.cst$kw$color,"inherit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$menu_icon], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$onClick,(function (){
var G__20178 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_open_DASH_actions_DASH_menu], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20178) : react_med.util._GT_evt.call(null,G__20178));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$more_vert], null)], null)], null);
});

react_med.shell_components.bottom_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.bottom_bar.cljs$lang$applyTo = (function (seq20176){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20176));
});

if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.shell_components.open_actions_menu = (function react_med$shell_components$open_actions_menu(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),true));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.assoc_in((function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),true);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),true),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20182){var e = e20182;
throw e;
}});
} else {
react_med.shell_components.open_actions_menu = (function react_med$shell_components$open_actions_menu(app_state){
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),true);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_open_DASH_actions_DASH_menu,react_med.shell_components.open_actions_menu);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.shell_components.close_actions_menu = (function react_med$shell_components$close_actions_menu(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),false));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.assoc_in((function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),false),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20183){var e = e20183;
throw e;
}});
} else {
react_med.shell_components.close_actions_menu = (function react_med$shell_components$close_actions_menu(app_state){
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),false);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_close_DASH_actions_DASH_menu,react_med.shell_components.close_actions_menu);
react_med.shell_components.actions_opened_QMARK_ = (function react_med$shell_components$actions_opened_QMARK_(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null));
});
var G__20184_20186 = cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_actions_DASH_opened_QMARK_;
var G__20185_20187 = react_med.shell_components.actions_opened_QMARK_;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20184_20186,G__20185_20187) : re_frame.core.reg_sub.call(null,G__20184_20186,G__20185_20187));
react_med.shell_components.actions_menu = (function react_med$shell_components$actions_menu(p__20188){
var map__20189 = p__20188;
var map__20189__$1 = (((((!((map__20189 == null))))?(((((map__20189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20189):map__20189);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20189__$1,cljs.core.cst$kw$actions);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(cljs.core.truth_((function (){var G__20191 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_actions_DASH_opened_QMARK_], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20191) : react_med.util._LT_sub.call(null,G__20191));
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$close_DASH_menu_DASH_invisible_DASH_layer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,({"position": "absolute", "width": "100%", "height": "100%", "zIndex": (1199), "backgroundColor": "#0000000d"}),cljs.core.cst$kw$onClick,((function (map__20189,map__20189__$1,actions){
return (function (){
var G__20192 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_close_DASH_actions_DASH_menu], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20192) : react_med.util._GT_evt.call(null,G__20192));
});})(map__20189,map__20189__$1,actions))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$paper,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$elevation,(8),cljs.core.cst$kw$style,({"backgroundColor": "white", "position": "absolute", "right": "12px", "bottom": "20px", "zIndex": (1200)})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$menu_list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__20189,map__20189__$1,actions){
return (function (action){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,((function (map__20189,map__20189__$1,actions){
return (function (){
var G__20193 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20194 = cljs.core.cst$kw$event;
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(G__20194) : action.call(null,G__20194));
})()], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20193) : react_med.util._GT_evt.call(null,G__20193));
});})(map__20189,map__20189__$1,actions))
], null),(function (){var G__20195 = cljs.core.cst$kw$name;
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(G__20195) : action.call(null,G__20195));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(function (){var G__20196 = cljs.core.cst$kw$name;
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(G__20196) : action.call(null,G__20196));
})()], null));
});})(map__20189,map__20189__$1,actions))
,actions)], null)], null)], null):null)], null);
});
react_med.shell_components.drawer_menu = (function react_med$shell_components$drawer_menu(p__20197){
var map__20198 = p__20197;
var map__20198__$1 = (((((!((map__20198 == null))))?(((((map__20198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20198):map__20198);
var menu_structure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20198__$1,cljs.core.cst$kw$menu_DASH_structure);
var structure__GT_menu_item = ((function (map__20198,map__20198__$1,menu_structure){
return (function() {
var react_med$shell_components$drawer_menu_$_s__GT_mi = null;
var react_med$shell_components$drawer_menu_$_s__GT_mi__1 = (function (structure){
return react_med$shell_components$drawer_menu_$_s__GT_mi.cljs$core$IFn$_invoke$arity$2(structure,(0));
});
var react_med$shell_components$drawer_menu_$_s__GT_mi__2 = (function (p__20200,padding){
var map__20201 = p__20200;
var map__20201__$1 = (((((!((map__20201 == null))))?(((((map__20201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20201):map__20201);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20201__$1,cljs.core.cst$kw$label);
var sub_menus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20201__$1,cljs.core.cst$kw$sub_DASH_menus);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20201__$1,cljs.core.cst$kw$selected);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20201__$1,cljs.core.cst$kw$state);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,((function (map__20201,map__20201__$1,label,sub_menus,selected,state,map__20198,map__20198__$1,menu_structure){
return (function (){
var G__20203 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_set_DASH_route,state], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20203) : react_med.util._GT_evt.call(null,G__20203));
});})(map__20201,map__20201__$1,label,sub_menus,selected,state,map__20198,map__20198__$1,menu_structure))
,cljs.core.cst$kw$style,cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(selected)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"lightgray"], null):null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$paddingLeft,((20) + ((8) * padding))], null)], 0)))], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,label], null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(react_med$shell_components$drawer_menu_$_s__GT_mi,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_menus,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((padding + (1)))], 0)));
});
react_med$shell_components$drawer_menu_$_s__GT_mi = function(p__20200,padding){
switch(arguments.length){
case 1:
return react_med$shell_components$drawer_menu_$_s__GT_mi__1.call(this,p__20200);
case 2:
return react_med$shell_components$drawer_menu_$_s__GT_mi__2.call(this,p__20200,padding);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
react_med$shell_components$drawer_menu_$_s__GT_mi.cljs$core$IFn$_invoke$arity$1 = react_med$shell_components$drawer_menu_$_s__GT_mi__1;
react_med$shell_components$drawer_menu_$_s__GT_mi.cljs$core$IFn$_invoke$arity$2 = react_med$shell_components$drawer_menu_$_s__GT_mi__2;
return react_med$shell_components$drawer_menu_$_s__GT_mi;
})()
;})(map__20198,map__20198__$1,menu_structure))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(cljs.core.truth_((function (){var G__20204 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_drawer_DASH_opened_QMARK_], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20204) : react_med.util._LT_sub.call(null,G__20204));
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$close_DASH_menu_DASH_invisible_DASH_layer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,({"position": "absolute", "width": "100%", "height": "100%", "zIndex": (1199), "backgroundColor": "#0000000d"}),cljs.core.cst$kw$onClick,((function (structure__GT_menu_item,map__20198,map__20198__$1,menu_structure){
return (function (){
var G__20205 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_toggle_DASH_drawer_DASH_menu], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20205) : react_med.util._GT_evt.call(null,G__20205));
});})(structure__GT_menu_item,map__20198,map__20198__$1,menu_structure))
], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$paper,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$elevation,(8),cljs.core.cst$kw$style,({"maxWidth": "100vw", "borderRadius": "0px", "width": "256px", "flexDirection": "column", "zIndex": (1200), "display": "flex", "position": "absolute", "backgroundColor": "white", "height": "100%"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$drawer_DASH_header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"height": "64px", "backgroundColor": "white", "display": "flex", "alignItems": "center", "justifyContent": "center"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"images/LogoReactmed.png",cljs.core.cst$kw$width,(150)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"margin": (0)})], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$menu_list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"flexGrow": (1), "paddingTop": "0px", "display": "flex", "flexDirection": "column"})], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(structure__GT_menu_item,menu_structure),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,({"backgroundColor": "#caca30", "margin": "50px 15px 10px 15px", "color": "white"}),cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$onClick,((function (structure__GT_menu_item,map__20198,map__20198__$1,menu_structure){
return (function (){
return react_med.authentication.authentication.logout();
});})(structure__GT_menu_item,map__20198,map__20198__$1,menu_structure))
], null),"Logout"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$drawer_DASH_footer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"height": "64px", "display": "flex", "alignItems": "center"})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$onClick,((function (structure__GT_menu_item,map__20198,map__20198__$1,menu_structure){
return (function (){
var G__20206 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_toggle_DASH_drawer_DASH_menu], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20206) : react_med.util._GT_evt.call(null,G__20206));
});})(structure__GT_menu_item,map__20198,map__20198__$1,menu_structure))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$close_icon], null)], null)], null)], null)], null):null)], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.shell_components.toggle_drawer_menu = (function react_med$shell_components$toggle_drawer_menu(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drawer_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),cljs.core.cst$sym$not));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drawer_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drawer_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.not;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$not,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drawer_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),cljs.core.cst$sym$not),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20207){var e = e20207;
throw e;
}});
} else {
react_med.shell_components.toggle_drawer_menu = (function react_med$shell_components$toggle_drawer_menu(app_state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drawer_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),cljs.core.not);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_toggle_DASH_drawer_DASH_menu,react_med.shell_components.toggle_drawer_menu);
react_med.shell_components.drawer_opened_QMARK_ = (function react_med$shell_components$drawer_opened_QMARK_(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drawer_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null));
});
var G__20208_20210 = cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_drawer_DASH_opened_QMARK_;
var G__20209_20211 = react_med.shell_components.drawer_opened_QMARK_;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20208_20210,G__20209_20211) : re_frame.core.reg_sub.call(null,G__20208_20210,G__20209_20211));
react_med.shell_components.error_boundary = (function react_med$shell_components$error_boundary(){
var error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_catch,((function (error){
return (function (this$,e,info){
return null;
});})(error))
,cljs.core.cst$kw$get_DASH_derived_DASH_state_DASH_from_DASH_error,((function (error){
return (function (e){
cljs.core.reset_BANG_(error,e);

return ({});
});})(error))
,cljs.core.cst$kw$reagent_DASH_render,((function (error){
return (function() { 
var G__20217__delegate = function (p__20214,children){
var map__20215 = p__20214;
var map__20215__$1 = (((((!((map__20215 == null))))?(((((map__20215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20215):map__20215);
var if_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20215__$1,cljs.core.cst$kw$if_DASH_error);
if(cljs.core.truth_(cljs.core.deref(error))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,if_error], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__20215,map__20215__$1,if_error,error){
return (function (p1__20213_SHARP_,p2__20212_SHARP_){
return cljs.core.with_meta(p2__20212_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__20213_SHARP_], null));
});})(map__20215,map__20215__$1,if_error,error))
,children)], null);
}
};
var G__20217 = function (p__20214,var_args){
var children = null;
if (arguments.length > 1) {
var G__20218__i = 0, G__20218__a = new Array(arguments.length -  1);
while (G__20218__i < G__20218__a.length) {G__20218__a[G__20218__i] = arguments[G__20218__i + 1]; ++G__20218__i;}
  children = new cljs.core.IndexedSeq(G__20218__a,0,null);
} 
return G__20217__delegate.call(this,p__20214,children);};
G__20217.cljs$lang$maxFixedArity = 1;
G__20217.cljs$lang$applyTo = (function (arglist__20219){
var p__20214 = cljs.core.first(arglist__20219);
var children = cljs.core.rest(arglist__20219);
return G__20217__delegate(p__20214,children);
});
G__20217.cljs$core$IFn$_invoke$arity$variadic = G__20217__delegate;
return G__20217;
})()
;})(error))
], null));
});
react_med.shell_components.error_view = (function react_med$shell_components$error_view(){
var map__20220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(react_med.motivation_sentences.sentences,cljs.core.rand_int(cljs.core.count(react_med.motivation_sentences.sentences)));
var map__20220__$1 = (((((!((map__20220 == null))))?(((((map__20220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20220):map__20220);
var sentence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20220__$1,cljs.core.cst$kw$sentence);
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20220__$1,cljs.core.cst$kw$author);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"textAlign": "center", "paddingBottom": "50px"})], null),"Desculpa, aconteceu algum erro. \uD83D\uDE1E"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"maxWidth": "600px", "margin": "auto"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"textAlign": "center"})], null),sentence], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"textAlign": "right"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,author], null)], null)], null)], null);
});
react_med.shell_components.main_content = (function react_med$shell_components$main_content(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20226 = arguments.length;
var i__4731__auto___20227 = (0);
while(true){
if((i__4731__auto___20227 < len__4730__auto___20226)){
args__4736__auto__.push((arguments[i__4731__auto___20227]));

var G__20228 = (i__4731__auto___20227 + (1));
i__4731__auto___20227 = G__20228;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_med.shell_components.main_content.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_med.shell_components.main_content.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return react_med.util.replace_if_some(attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"flexGrow": (1), "padding": (12), "overflow": "auto"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$if_DASH_error,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_view], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__20223_SHARP_,p2__20222_SHARP_){
return cljs.core.with_meta(p2__20222_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__20223_SHARP_], null));
}),react_med.util.replace_if_none(attrs,children))], null)], null));
});

react_med.shell_components.main_content.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_med.shell_components.main_content.cljs$lang$applyTo = (function (seq20224){
var G__20225 = cljs.core.first(seq20224);
var seq20224__$1 = cljs.core.next(seq20224);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20225,seq20224__$1);
});

react_med.shell_components.main_error_view = (function react_med$shell_components$main_error_view(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variation,""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.screen_title,"Erro"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_view], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.drawer_menu], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.bottom_bar], null)], null);
});
react_med.shell_components.main_panel = (function react_med$shell_components$main_panel(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20232 = arguments.length;
var i__4731__auto___20233 = (0);
while(true){
if((i__4731__auto___20233 < len__4730__auto___20232)){
args__4736__auto__.push((arguments[i__4731__auto___20233]));

var G__20234 = (i__4731__auto___20233 + (1));
i__4731__auto___20233 = G__20234;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.main_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.main_panel.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main_DASH_panel,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"display": "flex", "position": "relative", "justifyContent": "space-between", "flexDirection": "column", "height": "inherit", "width": "inherit"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$if_DASH_error,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_error_view], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__20230_SHARP_,p2__20229_SHARP_){
return cljs.core.with_meta(p2__20229_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__20230_SHARP_], null));
}),children)], null)], null);
});

react_med.shell_components.main_panel.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.main_panel.cljs$lang$applyTo = (function (seq20231){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20231));
});

react_med.shell_components.default$ = (function react_med$shell_components$default(p__20235){
var map__20236 = p__20235;
var map__20236__$1 = (((((!((map__20236 == null))))?(((((map__20236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20236):map__20236);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20236__$1,cljs.core.cst$kw$component);
var menu_structure = (function (){var G__20238 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_side_DASH_menu], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20238) : react_med.util._LT_sub.call(null,G__20238));
})();
var tabs = (function (){var G__20239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_tabs], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20239) : react_med.util._LT_sub.call(null,G__20239));
})();
var title = (function (){var G__20240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_title], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20240) : react_med.util._LT_sub.call(null,G__20240));
})();
var actions = (function (){var G__20241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_actions], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20241) : react_med.util._LT_sub.call(null,G__20241));
})();
var top_bar_icon = (function (){var G__20242 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_top_DASH_bar_DASH_icon], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20242) : react_med.util._LT_sub.call(null,G__20242));
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variation,top_bar_icon], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.screen_title,title], null)], null),(cljs.core.truth_(tabs)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.tabs_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$menu_DASH_options,tabs], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.drawer_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$menu_DASH_structure,menu_structure], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.actions_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$actions,actions], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.bottom_bar], null)], null);
});
