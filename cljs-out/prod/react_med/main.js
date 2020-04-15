// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.main');
goog.require('cljs.core');
goog.require('day8.re_frame.tracing');
goog.require('goog.dom');
goog.require('re_frame.core');
goog.require('react_med.orientation');
goog.require('react_med.pwa_install_component');
goog.require('react_med.routes');
goog.require('react_med.storage_module.components');
goog.require('react_med.storage_module.local_storage');
goog.require('reagent.core');
react_med.main.mount_app_element = (function react_med$main$mount_app_element(){
var temp__5735__auto__ = goog.dom.getElement("app");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.routes.selected_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.storage_module.components.save_element], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.orientation.set_landscape_or_portrait], null)], null),el);
} else {
return null;
}
});
if((typeof react_med !== 'undefined') && (typeof react_med.main !== 'undefined') && (typeof react_med.main.startup !== 'undefined')){
} else {
react_med.main.startup = (function (){
window.addEventListener("load",(function (){
var G__20131 = navigator;
var G__20131__$1 = (((G__20131 == null))?null:G__20131.serviceWorker);
if((G__20131__$1 == null)){
return null;
} else {
return G__20131__$1.register("/sw.js");
}
}));

react_med.pwa_install_component.add_before_install_prompt_event_listener.call(null);

re_frame.core.clear_subscription_cache_BANG_.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.local-storage","load-domain-from-local-storage","react-med.storage-module.local-storage/load-domain-from-local-storage",-1642872826)], null));

return react_med.main.mount_app_element.call(null);
})()
;
}
react_med.main.on_reload = (function react_med$main$on_reload(){
return react_med.main.mount_app_element.call(null);
});
/**
 * Used to set tests initial state.
 */
react_med.main.reset_state_BANG_ = (function react_med$main$reset_state_BANG_(state){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.main","initialize-app-state","react-med.main/initialize-app-state",286610468),cljs.core.js__GT_clj.call(null,state,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.main","initialize-app-state","react-med.main/initialize-app-state",286610468),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,p__20132){
var vec__20133 = p__20132;
var event = cljs.core.nth.call(null,vec__20133,(0),null);
var application_state = cljs.core.nth.call(null,vec__20133,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol(null,"application-state","application-state",-2060019929,null));

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = application_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"application-state","application-state",-2060019929,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e20136){var e = e20136;
throw e;
}}):(function (_,p__20137){
var vec__20138 = p__20137;
var event = cljs.core.nth.call(null,vec__20138,(0),null);
var application_state = cljs.core.nth.call(null,vec__20138,(1),null);
return application_state;
})));

//# sourceMappingURL=main.js.map
