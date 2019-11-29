// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.main');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_med.routes');
goog.require('goog.dom');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('reagent.core');
react_med.main.mount_app_element = (function react_med$main$mount_app_element(){
var temp__5735__auto__ = goog.dom.getElement("app");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
var G__20542 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.routes.selected_view], null);
var G__20543 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__20542,G__20543) : reagent.core.render_component.call(null,G__20542,G__20543));
} else {
return null;
}
});
react_med.main.initial_state = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$domain,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$patients,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$nome,"Dani",cljs.core.cst$kw$nascimento,"2001-10-01",cljs.core.cst$kw$sexo,"Masculino",cljs.core.cst$kw$estatura,166.8,cljs.core.cst$kw$avaliacoes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$atividade_DASH_fisica,cljs.core.cst$kw$reatancia,cljs.core.cst$kw$estatura,cljs.core.cst$kw$resistencia,cljs.core.cst$kw$circunferencia_DASH_braco,cljs.core.cst$kw$circunferencia_DASH_cintura,cljs.core.cst$kw$circunferencia_DASH_perna,cljs.core.cst$kw$peso,cljs.core.cst$kw$data],["Ativo",(59),166.8,(648),23.2,(63),30.2,45.4,"2019-10-10"])], null)], null)], null)], null),cljs.core.cst$kw$ui,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$actions_DASH_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opened_QMARK_,false], null),cljs.core.cst$kw$drawer_DASH_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opened_QMARK_,false], null),cljs.core.cst$kw$state,"coleta"], null)], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$main_SLASH_init_DASH_app_DASH_state,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.cst$sym$initial_DASH_state);

var opts__19692__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = react_med.main.initial_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$initial_DASH_state,cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19693__auto__;
}catch (e20544){var e = e20544;
throw e;
}}):(function (_,___$1){
return react_med.main.initial_state;
})));
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

var G__20545_20546 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$main_SLASH_init_DASH_app_DASH_state], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__20545_20546) : re_frame.core.dispatch_sync.call(null,G__20545_20546));

react_med.main.mount_app_element();
react_med.main.on_reload = (function react_med$main$on_reload(){
return react_med.main.mount_app_element();
});
