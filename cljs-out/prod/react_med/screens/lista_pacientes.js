// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.screens.lista_pacientes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_med.util');
goog.require('react_med.shell_components');
goog.require('re_frame.core');
react_med.screens.lista_pacientes.global$module$menu_list = goog.global["MenuList"];
react_med.screens.lista_pacientes.global$module$menu_item = goog.global["MenuItem"];
react_med.screens.lista_pacientes.pacientes = (function react_med$screens$lista_pacientes$pacientes(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null));
});
var G__19906_19908 = cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_pacientes;
var G__19907_19909 = react_med.screens.lista_pacientes.pacientes;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19906_19908,G__19907_19909) : re_frame.core.reg_sub.call(null,G__19906_19908,G__19907_19909));
react_med.screens.lista_pacientes.component = (function react_med$screens$lista_pacientes$component(){
var pacientes = (function (){var G__19910 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_pacientes], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__19910) : react_med.util._LT_sub.call(null,G__19910));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_pacientes.global$module$menu_list,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_pacientes.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,((function (pacientes){
return (function (){
var G__19911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_set_DASH_route,"info"], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__19911) : react_med.util._GT_evt.call(null,G__19911));
});})(pacientes))
], null),cljs.core.cst$kw$nome.cljs$core$IFn$_invoke$arity$1(cljs.core.first(pacientes))], null)], null);
});
react_med.screens.lista_pacientes.view = (function react_med$screens$lista_pacientes$view(){
var menu_structure = (function (){var G__19912 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_side_DASH_menu], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__19912) : react_med.util._LT_sub.call(null,G__19912));
})();
var actions = (function (){var G__19913 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_actions], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__19913) : react_med.util._LT_sub.call(null,G__19913));
})();
var tabs = (function (){var G__19914 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_tabs], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__19914) : react_med.util._LT_sub.call(null,G__19914));
})();
var title = (function (){var G__19915 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_title], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__19915) : react_med.util._LT_sub.call(null,G__19915));
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variation,""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.screen_title,title], null)], null),(cljs.core.truth_(tabs)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.tabs_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$menu_DASH_options,tabs], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_pacientes.component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.drawer_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$menu_DASH_structure,menu_structure], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.actions_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$actions,actions], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.bottom_bar], null)], null);
});
