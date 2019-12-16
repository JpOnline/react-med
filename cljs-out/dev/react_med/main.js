// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.main');
goog.require('cljs.core');
goog.require('react_med.routes');
goog.require('goog.dom');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('reagent.core');
react_med.main.mount_app_element = (function react_med$main$mount_app_element(){
var temp__5735__auto__ = goog.dom.getElement("app");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.routes.selected_view], null),el);
} else {
return null;
}
});
react_med.main.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"nome","nome",1100401122),"Dani",new cljs.core.Keyword(null,"nascimento","nascimento",646565528),"2001-10-01",new cljs.core.Keyword(null,"sexo","sexo",-629407757),"Masculino",new cljs.core.Keyword(null,"estatura","estatura",-685084760),166.8,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),new cljs.core.Keyword(null,"estatura","estatura",-685084760),new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Keyword(null,"circunferencia-perna","circunferencia-perna",-1787719058),new cljs.core.Keyword(null,"peso","peso",-5226095),new cljs.core.Keyword(null,"data","data",-232669377)],["Ativo",(59),166.8,(648),23.2,(63),30.2,45.4,"2019-10-10"])], null)], null)], null)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),false], null),new cljs.core.Keyword(null,"drawer-menu","drawer-menu",266025613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),false], null),new cljs.core.Keyword(null,"state","state",-1988618099),"pacientes"], null)], null);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.main","init-app-state","react-med.main/init-app-state",1938955791),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol(null,"initial-state","initial-state",-381085279,null));

var opts__14244__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = react_med.main.initial_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"initial-state","initial-state",-381085279,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14245__auto__;
}catch (e36234){var e = e36234;
throw e;
}}):(function (_,___$1){
return react_med.main.initial_state;
})));
if((typeof react_med !== 'undefined') && (typeof react_med.main !== 'undefined') && (typeof react_med.main.startup !== 'undefined')){
} else {
react_med.main.startup = (function (){
re_frame.core.clear_subscription_cache_BANG_.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.main","init-app-state","react-med.main/init-app-state",1938955791)], null));

return react_med.main.mount_app_element.call(null);
})()
;
}
react_med.main.on_reload = (function react_med$main$on_reload(){
return react_med.main.mount_app_element.call(null);
});

//# sourceMappingURL=main.js.map
