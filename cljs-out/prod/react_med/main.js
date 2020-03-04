// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.main');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('day8.re_frame.tracing');
goog.require('goog.dom');
goog.require('re_frame.core');
goog.require('react_med.orientation');
goog.require('react_med.routes');
goog.require('react_med.storage_module.components');
goog.require('react_med.storage_module.local_storage');
goog.require('reagent.core');
react_med.main.mount_app_element = (function react_med$main$mount_app_element(){
var temp__5735__auto__ = goog.dom.getElement("app");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
var G__26292 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.routes.selected_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.storage_module.components.save_element], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.orientation.set_landscape_or_portrait], null)], null);
var G__26293 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__26292,G__26293) : reagent.core.render_component.call(null,G__26292,G__26293));
} else {
return null;
}
});
if((typeof react_med !== 'undefined') && (typeof react_med.main !== 'undefined') && (typeof react_med.main.startup !== 'undefined')){
} else {
react_med.main.startup = (function (){
window.addEventListener("load",(function (){
var G__26294 = navigator;
var G__26294__$1 = (((G__26294 == null))?null:G__26294.serviceWorker);
if((G__26294__$1 == null)){
return null;
} else {
return G__26294__$1.register("/sw.js");
}
}));

(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

var G__26295_26296 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$local_DASH_storage_SLASH_load_DASH_domain_DASH_from_DASH_local_DASH_storage], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__26295_26296) : re_frame.core.dispatch_sync.call(null,G__26295_26296));

return react_med.main.mount_app_element();
})()
;
}
react_med.main.on_reload = (function react_med$main$on_reload(){
return react_med.main.mount_app_element();
});
/**
 * Used to set tests initial state.
 */
react_med.main.reset_state_BANG_ = (function react_med$main$reset_state_BANG_(state){
var G__26297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$main_SLASH_initialize_DASH_app_DASH_state,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0))], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__26297) : re_frame.core.dispatch_sync.call(null,G__26297));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$main_SLASH_initialize_DASH_app_DASH_state,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__26298){
var vec__26299 = p__26298;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26299,(0),null);
var application_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26299,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.cst$sym$application_DASH_state);

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = application_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$application_DASH_state,cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e26302){var e = e26302;
throw e;
}}):(function (_,p__26303){
var vec__26304 = p__26303;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26304,(0),null);
var application_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26304,(1),null);
return application_state;
})));
