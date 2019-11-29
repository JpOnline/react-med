// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.screens.lista_avaliacoes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_med.shell_components');
goog.require('react_med.util');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('reagent.core');
react_med.screens.lista_avaliacoes.global$module$menu_list = goog.global["MenuList"];
react_med.screens.lista_avaliacoes.global$module$menu_item = goog.global["MenuItem"];
react_med.screens.lista_avaliacoes.screen_shell = (function react_med$screens$lista_avaliacoes$screen_shell(p__20224,content_view){
var map__20225 = p__20224;
var map__20225__$1 = (((((!((map__20225 == null))))?(((((map__20225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20225):map__20225);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20225__$1,cljs.core.cst$kw$actions);
var menu_structure = (function (){var G__20227 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_side_DASH_menu], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20227) : react_med.util._LT_sub.call(null,G__20227));
})();
var title = (function (){var G__20228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_title], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20228) : react_med.util._LT_sub.call(null,G__20228));
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variation,"<-"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.screen_title,title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.tabs_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$menu_DASH_options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Informa\u00E7\u00F5es Pessoais",cljs.core.cst$kw$state,"info"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Avalia\u00E7\u00F5es",cljs.core.cst$kw$state,"avaliacoes"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,cljs.core.with_meta(content_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(1)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.drawer_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$menu_DASH_structure,menu_structure], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.actions_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$actions,actions], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.bottom_bar], null)], null);
});
react_med.screens.lista_avaliacoes.component = (function react_med$screens$lista_avaliacoes$component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_avaliacoes.global$module$menu_list,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_avaliacoes.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,(function (){
var G__20229 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_set_DASH_route,"coleta"], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20229) : react_med.util._GT_evt.call(null,G__20229));
})], null),"10/10/2019 (Quinta-feira)"], null)], null);
});
react_med.screens.lista_avaliacoes.actions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Voltar",cljs.core.cst$kw$event,cljs.core.cst$kw$back], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Nova Avalia\u00E7\u00E3o",cljs.core.cst$kw$event,cljs.core.cst$kw$nova_DASH_avaliacao], null)], null);
react_med.screens.lista_avaliacoes.view = (function react_med$screens$lista_avaliacoes$view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_avaliacoes.screen_shell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$actions,react_med.screens.lista_avaliacoes.actions], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_avaliacoes.component], null)], null);
});
