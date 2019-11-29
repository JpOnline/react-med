// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.shell_components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_med.util');
goog.require('re_frame.core');
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
var len__4730__auto___19821 = arguments.length;
var i__4731__auto___19822 = (0);
while(true){
if((i__4731__auto___19822 < len__4730__auto___19821)){
args__4736__auto__.push((arguments[i__4731__auto___19822]));

var G__19823 = (i__4731__auto___19822 + (1));
i__4731__auto___19822 = G__19823;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.header.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"color": "white", "backgroundColor": react_med.util.primary_color, "width": "100%", "display": "flex", "flexDirection": "column", "zIndex": (1100), "boxShadow": "0px 2px 4px -1px #0003,\n                            0px 4px 5px 0px #00000024,\n                            0px 1px 10px 0px #0000001f"})], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__19819_SHARP_,p2__19818_SHARP_){
return cljs.core.with_meta(p2__19818_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__19819_SHARP_], null));
}),children)], null);
});

react_med.shell_components.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.header.cljs$lang$applyTo = (function (seq19820){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19820));
});

react_med.shell_components.top_bar = (function react_med$shell_components$top_bar(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19827 = arguments.length;
var i__4731__auto___19828 = (0);
while(true){
if((i__4731__auto___19828 < len__4730__auto___19827)){
args__4736__auto__.push((arguments[i__4731__auto___19828]));

var G__19829 = (i__4731__auto___19828 + (1));
i__4731__auto___19828 = G__19829;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.top_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.top_bar.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$top_DASH_bar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"minHeight": (64), "padding": "0 24px", "display": "flex", "alignItems": "center"})], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__19825_SHARP_,p2__19824_SHARP_){
return cljs.core.with_meta(p2__19824_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__19825_SHARP_], null));
}),children)], null);
});

react_med.shell_components.top_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.top_bar.cljs$lang$applyTo = (function (seq19826){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19826));
});

react_med.shell_components.left_icon = (function react_med$shell_components$left_icon(p__19830){
var map__19831 = p__19830;
var map__19831__$1 = (((((!((map__19831 == null))))?(((((map__19831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19831):map__19831);
var variation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19831__$1,cljs.core.cst$kw$variation);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variation,"<-")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$onClick,((function (map__19831,map__19831__$1,variation){
return (function (){
var G__19833 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$back], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__19833) : react_med.util._GT_evt.call(null,G__19833));
});})(map__19831,map__19831__$1,variation))
,cljs.core.cst$kw$style,({"marginLeft": (-12), "marginRight": (20)})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$arrow_back], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$arrow_DASH_back_DASH_placeholder,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"width": "56px"})], null)], null);
}
});
react_med.shell_components.screen_title = (function react_med$shell_components$screen_title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19835 = arguments.length;
var i__4731__auto___19836 = (0);
while(true){
if((i__4731__auto___19836 < len__4730__auto___19835)){
args__4736__auto__.push((arguments[i__4731__auto___19836]));

var G__19837 = (i__4731__auto___19836 + (1));
i__4731__auto___19836 = G__19837;
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
react_med.shell_components.screen_title.cljs$lang$applyTo = (function (seq19834){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19834));
});

react_med.shell_components.tabs_menu = (function react_med$shell_components$tabs_menu(p__19841){
var map__19842 = p__19841;
var map__19842__$1 = (((((!((map__19842 == null))))?(((((map__19842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19842):map__19842);
var menu_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19842__$1,cljs.core.cst$kw$menu_DASH_options);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$tabs,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$value,(function (){var G__19844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_state], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__19844) : react_med.util._LT_sub.call(null,G__19844));
})(),cljs.core.cst$kw$TabIndicatorProps,({"style": ({"backgroundColor": react_med.util.secondary_color})}),cljs.core.cst$kw$variant,"scrollable",cljs.core.cst$kw$scrollButtons,(((cljs.core.count(menu_options) > (3)))?"on":"off"),cljs.core.cst$kw$onChange,((function (map__19842,map__19842__$1,menu_options){
return (function (p1__19839_SHARP_,p2__19838_SHARP_){
var G__19845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_set_DASH_route,p2__19838_SHARP_], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__19845) : react_med.util._GT_evt.call(null,G__19845));
});})(map__19842,map__19842__$1,menu_options))
,cljs.core.cst$kw$style,({"overflowX": "hidden"})], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__19842,map__19842__$1,menu_options){
return (function (p1__19840_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$tab,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(p1__19840_SHARP_),cljs.core.cst$kw$value,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(p1__19840_SHARP_),cljs.core.cst$kw$style,({"flexGrow": (1)})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__19840_SHARP_], null));
});})(map__19842,map__19842__$1,menu_options))
,menu_options)], null);
});
react_med.shell_components.bottom_bar = (function react_med$shell_components$bottom_bar(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19849 = arguments.length;
var i__4731__auto___19850 = (0);
while(true){
if((i__4731__auto___19850 < len__4730__auto___19849)){
args__4736__auto__.push((arguments[i__4731__auto___19850]));

var G__19851 = (i__4731__auto___19850 + (1));
i__4731__auto___19850 = G__19851;
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
var G__19847 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_toggle_DASH_drawer_DASH_menu], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__19847) : react_med.util._GT_evt.call(null,G__19847));
}),cljs.core.cst$kw$color,"inherit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$menu_icon], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$onClick,(function (){
var G__19848 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_open_DASH_actions_DASH_menu], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__19848) : react_med.util._GT_evt.call(null,G__19848));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$more_vert], null)], null)], null);
});

react_med.shell_components.bottom_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.bottom_bar.cljs$lang$applyTo = (function (seq19846){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19846));
});

if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.shell_components.open_actions_menu = (function react_med$shell_components$open_actions_menu(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),true));

var opts__19692__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core.assoc_in((function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),true);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),true),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19693__auto__;
}catch (e19852){var e = e19852;
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

var opts__19692__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core.assoc_in((function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),false),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19693__auto__;
}catch (e19853){var e = e19853;
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
var G__19854_19856 = cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_actions_DASH_opened_QMARK_;
var G__19855_19857 = react_med.shell_components.actions_opened_QMARK_;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19854_19856,G__19855_19857) : re_frame.core.reg_sub.call(null,G__19854_19856,G__19855_19857));
react_med.shell_components.actions_menu = (function react_med$shell_components$actions_menu(p__19858){
var map__19859 = p__19858;
var map__19859__$1 = (((((!((map__19859 == null))))?(((((map__19859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19859):map__19859);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19859__$1,cljs.core.cst$kw$actions);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(cljs.core.truth_((function (){var G__19861 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_actions_DASH_opened_QMARK_], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__19861) : react_med.util._LT_sub.call(null,G__19861));
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$close_DASH_menu_DASH_invisible_DASH_layer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,({"position": "absolute", "width": "100%", "height": "100%", "zIndex": (1199), "backgroundColor": "#0000000d"}),cljs.core.cst$kw$onClick,((function (map__19859,map__19859__$1,actions){
return (function (){
var G__19862 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_close_DASH_actions_DASH_menu], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__19862) : react_med.util._GT_evt.call(null,G__19862));
});})(map__19859,map__19859__$1,actions))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$paper,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$elevation,(8),cljs.core.cst$kw$style,({"backgroundColor": "white", "position": "absolute", "right": "12px", "bottom": "20px", "zIndex": (1200)})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$menu_list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__19859,map__19859__$1,actions){
return (function (action){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,((function (map__19859,map__19859__$1,actions){
return (function (){
var G__19863 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19864 = cljs.core.cst$kw$event;
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(G__19864) : action.call(null,G__19864));
})()], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__19863) : react_med.util._GT_evt.call(null,G__19863));
});})(map__19859,map__19859__$1,actions))
], null),(function (){var G__19865 = cljs.core.cst$kw$name;
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(G__19865) : action.call(null,G__19865));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(function (){var G__19866 = cljs.core.cst$kw$name;
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(G__19866) : action.call(null,G__19866));
})()], null));
});})(map__19859,map__19859__$1,actions))
,actions)], null)], null)], null):null)], null);
});
react_med.shell_components.drawer_menu = (function react_med$shell_components$drawer_menu(p__19867){
var map__19868 = p__19867;
var map__19868__$1 = (((((!((map__19868 == null))))?(((((map__19868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19868):map__19868);
var menu_structure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19868__$1,cljs.core.cst$kw$menu_DASH_structure);
var structure__GT_menu_item = ((function (map__19868,map__19868__$1,menu_structure){
return (function() {
var react_med$shell_components$drawer_menu_$_s__GT_mi = null;
var react_med$shell_components$drawer_menu_$_s__GT_mi__1 = (function (structure){
return react_med$shell_components$drawer_menu_$_s__GT_mi.cljs$core$IFn$_invoke$arity$2(structure,(0));
});
var react_med$shell_components$drawer_menu_$_s__GT_mi__2 = (function (p__19870,padding){
var map__19871 = p__19870;
var map__19871__$1 = (((((!((map__19871 == null))))?(((((map__19871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19871):map__19871);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19871__$1,cljs.core.cst$kw$label);
var sub_menus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19871__$1,cljs.core.cst$kw$sub_DASH_menus);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19871__$1,cljs.core.cst$kw$selected);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19871__$1,cljs.core.cst$kw$state);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,((function (map__19871,map__19871__$1,label,sub_menus,selected,state,map__19868,map__19868__$1,menu_structure){
return (function (){
var G__19873 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_set_DASH_route,state], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__19873) : react_med.util._GT_evt.call(null,G__19873));
});})(map__19871,map__19871__$1,label,sub_menus,selected,state,map__19868,map__19868__$1,menu_structure))
,cljs.core.cst$kw$style,cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(selected)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"lightgray"], null):null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$paddingLeft,((20) + ((8) * padding))], null)], 0)))], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,label], null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(react_med$shell_components$drawer_menu_$_s__GT_mi,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_menus,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((padding + (1)))], 0)));
});
react_med$shell_components$drawer_menu_$_s__GT_mi = function(p__19870,padding){
switch(arguments.length){
case 1:
return react_med$shell_components$drawer_menu_$_s__GT_mi__1.call(this,p__19870);
case 2:
return react_med$shell_components$drawer_menu_$_s__GT_mi__2.call(this,p__19870,padding);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
react_med$shell_components$drawer_menu_$_s__GT_mi.cljs$core$IFn$_invoke$arity$1 = react_med$shell_components$drawer_menu_$_s__GT_mi__1;
react_med$shell_components$drawer_menu_$_s__GT_mi.cljs$core$IFn$_invoke$arity$2 = react_med$shell_components$drawer_menu_$_s__GT_mi__2;
return react_med$shell_components$drawer_menu_$_s__GT_mi;
})()
;})(map__19868,map__19868__$1,menu_structure))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,(cljs.core.truth_((function (){var G__19874 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_drawer_DASH_opened_QMARK_], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__19874) : react_med.util._LT_sub.call(null,G__19874));
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$close_DASH_menu_DASH_invisible_DASH_layer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,({"position": "absolute", "width": "100%", "height": "100%", "zIndex": (1199), "backgroundColor": "#0000000d"}),cljs.core.cst$kw$onClick,((function (structure__GT_menu_item,map__19868,map__19868__$1,menu_structure){
return (function (){
var G__19875 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_toggle_DASH_drawer_DASH_menu], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__19875) : react_med.util._GT_evt.call(null,G__19875));
});})(structure__GT_menu_item,map__19868,map__19868__$1,menu_structure))
], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$paper,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$elevation,(8),cljs.core.cst$kw$style,({"maxWidth": "100vw", "borderRadius": "0px", "width": "256px", "flexDirection": "column", "zIndex": (1200), "display": "flex", "position": "absolute", "backgroundColor": "white", "height": "100%"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$drawer_DASH_header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"height": "64px", "backgroundColor": "white", "display": "flex", "alignItems": "center", "justifyContent": "center"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"images/LogoReactmed.png",cljs.core.cst$kw$width,(150)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"margin": (0)})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$menu_list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"flexGrow": (1), "paddingTop": "0px"})], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(structure__GT_menu_item,menu_structure)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$drawer_DASH_footer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"height": "64px", "display": "flex", "alignItems": "center"})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$icon_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$onClick,((function (structure__GT_menu_item,map__19868,map__19868__$1,menu_structure){
return (function (){
var G__19876 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_toggle_DASH_drawer_DASH_menu], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__19876) : react_med.util._GT_evt.call(null,G__19876));
});})(structure__GT_menu_item,map__19868,map__19868__$1,menu_structure))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.shell_components.global$module$close_icon], null)], null)], null)], null)], null):null)], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.shell_components.toggle_drawer_menu = (function react_med$shell_components$toggle_drawer_menu(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drawer_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),cljs.core.cst$sym$not));

var opts__19692__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drawer_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drawer_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core.not;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$not,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drawer_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),cljs.core.cst$sym$not),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19693__auto__;
}catch (e19877){var e = e19877;
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
var G__19878_19880 = cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_drawer_DASH_opened_QMARK_;
var G__19879_19881 = react_med.shell_components.drawer_opened_QMARK_;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19878_19880,G__19879_19881) : re_frame.core.reg_sub.call(null,G__19878_19880,G__19879_19881));
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
var G__19887__delegate = function (p__19884,children){
var map__19885 = p__19884;
var map__19885__$1 = (((((!((map__19885 == null))))?(((((map__19885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19885):map__19885);
var if_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19885__$1,cljs.core.cst$kw$if_DASH_error);
if(cljs.core.truth_(cljs.core.deref(error))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [if_error], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__19885,map__19885__$1,if_error,error){
return (function (p1__19883_SHARP_,p2__19882_SHARP_){
return cljs.core.with_meta(p2__19882_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__19883_SHARP_], null));
});})(map__19885,map__19885__$1,if_error,error))
,children)], null);
}
};
var G__19887 = function (p__19884,var_args){
var children = null;
if (arguments.length > 1) {
var G__19888__i = 0, G__19888__a = new Array(arguments.length -  1);
while (G__19888__i < G__19888__a.length) {G__19888__a[G__19888__i] = arguments[G__19888__i + 1]; ++G__19888__i;}
  children = new cljs.core.IndexedSeq(G__19888__a,0,null);
} 
return G__19887__delegate.call(this,p__19884,children);};
G__19887.cljs$lang$maxFixedArity = 1;
G__19887.cljs$lang$applyTo = (function (arglist__19889){
var p__19884 = cljs.core.first(arglist__19889);
var children = cljs.core.rest(arglist__19889);
return G__19887__delegate(p__19884,children);
});
G__19887.cljs$core$IFn$_invoke$arity$variadic = G__19887__delegate;
return G__19887;
})()
;})(error))
], null));
});
react_med.shell_components.error_view = (function react_med$shell_components$error_view(){
var map__19890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(react_med.motivation_sentences.sentences,cljs.core.rand_int(cljs.core.count(react_med.motivation_sentences.sentences)));
var map__19890__$1 = (((((!((map__19890 == null))))?(((((map__19890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19890):map__19890);
var sentence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19890__$1,cljs.core.cst$kw$sentence);
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19890__$1,cljs.core.cst$kw$author);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"textAlign": "center", "paddingBottom": "50px"})], null),"Desculpa, aconteceu algum erro. \uD83D\uDE1E"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"maxWidth": "600px", "margin": "auto"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"textAlign": "center"})], null),sentence], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"textAlign": "right"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,author], null)], null)], null)], null);
});
react_med.shell_components.main_content = (function react_med$shell_components$main_content(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19895 = arguments.length;
var i__4731__auto___19896 = (0);
while(true){
if((i__4731__auto___19896 < len__4730__auto___19895)){
args__4736__auto__.push((arguments[i__4731__auto___19896]));

var G__19897 = (i__4731__auto___19896 + (1));
i__4731__auto___19896 = G__19897;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.main_content.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.main_content.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"flexGrow": (1), "padding": (12), "overflow": "auto"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$if_DASH_error,react_med.shell_components.error_view], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__19893_SHARP_,p2__19892_SHARP_){
return cljs.core.with_meta(p2__19892_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__19893_SHARP_], null));
}),children)], null)], null);
});

react_med.shell_components.main_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.main_content.cljs$lang$applyTo = (function (seq19894){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19894));
});

react_med.shell_components.main_error_view = (function react_med$shell_components$main_error_view(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variation,""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.screen_title,"Erro"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_view], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.drawer_menu], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.bottom_bar], null)], null);
});
react_med.shell_components.main_panel = (function react_med$shell_components$main_panel(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19901 = arguments.length;
var i__4731__auto___19902 = (0);
while(true){
if((i__4731__auto___19902 < len__4730__auto___19901)){
args__4736__auto__.push((arguments[i__4731__auto___19902]));

var G__19903 = (i__4731__auto___19902 + (1));
i__4731__auto___19902 = G__19903;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.shell_components.main_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.shell_components.main_panel.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main_DASH_panel,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"display": "flex", "position": "relative", "justifyContent": "space-between", "flexDirection": "column", "height": "inherit", "width": "inherit"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$if_DASH_error,react_med.shell_components.main_error_view], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__19899_SHARP_,p2__19898_SHARP_){
return cljs.core.with_meta(p2__19898_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__19899_SHARP_], null));
}),children)], null)], null);
});

react_med.shell_components.main_panel.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.shell_components.main_panel.cljs$lang$applyTo = (function (seq19900){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19900));
});

