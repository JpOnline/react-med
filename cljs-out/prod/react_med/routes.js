// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.routes');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('pushy.core');
goog.require('day8.re_frame.tracing');
goog.require('react_med.shell_components');
goog.require('react_med.screens.patient_info.core');
goog.require('react_med.util');
goog.require('react_med.screens.paciente_avaliacao');
goog.require('react_med.screens.lista_avaliacoes');
goog.require('react_med.screens.paciente_relatorio.paciente_relatorio');
goog.require('react_med.screens.lista_pacientes');
goog.require('re_frame.core');
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.routes.set_route = (function react_med$routes$set_route(app_state,p__14946){
var vec__14947 = p__14946;
var _ = cljs.core.nth.call(null,vec__14947,(0),null);
var ui_route = cljs.core.nth.call(null,vec__14947,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Symbol(null,"ui-route","ui-route",1828352800,null)));

var opts__14244__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = ui_route;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"ui-route","ui-route",1828352800,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Symbol(null,"ui-route","ui-route",1828352800,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14245__auto__;
}catch (e14950){var e = e14950;
throw e;
}});
} else {
react_med.routes.set_route = (function react_med$routes$set_route(app_state,p__14951){
var vec__14952 = p__14951;
var _ = cljs.core.nth.call(null,vec__14952,(0),null);
var ui_route = cljs.core.nth.call(null,vec__14952,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),ui_route);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.routes","set-route","react-med.routes/set-route",-701732541),react_med.routes.set_route);
react_med.routes.current__GT_next_state = (function react_med$routes$current__GT_next_state(state_machine,current_state,transition){
return cljs.core.get_in.call(null,state_machine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_state,transition], null));
});
react_med.routes.next_state_handler = (function react_med$routes$next_state_handler(db,p__14955){
var vec__14956 = p__14955;
var event = cljs.core.nth.call(null,vec__14956,(0),null);
var temp__5733__auto__ = react_med.routes.current__GT_next_state.call(null,react_med.routes.state_machine,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),event);
if(cljs.core.truth_(temp__5733__auto__)){
var new_state = temp__5733__auto__;
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new_state);
} else {
return db;
}
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.routes.next_state = (function react_med$routes$next_state(db,event){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"next-state-handler","next-state-handler",-503541646,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"event","event",1941966969,null)));

var opts__14244__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = react_med.routes.next_state_handler.call(null,(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = event;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"event","event",1941966969,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"next-state-handler","next-state-handler",-503541646,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14245__auto__;
}catch (e14959){var e = e14959;
throw e;
}});
} else {
react_med.routes.next_state = (function react_med$routes$next_state(db,event){
return react_med.routes.next_state_handler.call(null,db,event);
});
}
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.routes.backup_domain = (function react_med$routes$backup_domain(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"domain-snapshot","domain-snapshot",-1672358085,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"domain","domain",1847214937))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Symbol(null,"domain-snapshot","domain-snapshot",-1672358085,null))));

var opts__14244__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = (function (){var domain_snapshot = (function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = cljs.core.get.call(null,(function (){var opts__14244__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14245__auto__;
})(),new cljs.core.Keyword(null,"domain","domain",1847214937));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"domain","domain",1847214937)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14245__auto__;
})();
var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14244__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = domain_snapshot;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"domain-snapshot","domain-snapshot",-1672358085,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14245__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Symbol(null,"domain-snapshot","domain-snapshot",-1672358085,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"domain-snapshot","domain-snapshot",-1672358085,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"domain","domain",1847214937))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Symbol(null,"domain-snapshot","domain-snapshot",-1672358085,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14245__auto__;
}catch (e14960){var e = e14960;
throw e;
}});
} else {
react_med.routes.backup_domain = (function react_med$routes$backup_domain(app_state){
var domain_snapshot = cljs.core.get.call(null,app_state,new cljs.core.Keyword(null,"domain","domain",1847214937));
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),domain_snapshot);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.routes","backup-domain","react-med.routes/backup-domain",-1000428949),react_med.routes.backup_domain);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.routes.restore_domain = (function react_med$routes$restore_domain(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-domain","old-domain",-177558496,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"old-domain","old-domain",-177558496,null)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"backup","backup",26347393))),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)));

var opts__14244__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = (function (){var temp__5733__auto__ = (function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = cljs.core.get_in.call(null,(function (){var opts__14244__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14245__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14245__auto__;
})();
if(cljs.core.truth_(temp__5733__auto__)){
var old_domain = temp__5733__auto__;
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),new cljs.core.Keyword(null,"domain","domain",1847214937),(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = old_domain;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"old-domain","old-domain",-177558496,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14245__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"old-domain","old-domain",-177558496,null)),(2)),(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14245__auto__;
})(),new cljs.core.Keyword(null,"backup","backup",26347393)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"backup","backup",26347393)),(1));
} else {
var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
}
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-domain","old-domain",-177558496,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"backup","backup",26347393))),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14245__auto__;
}catch (e14961){var e = e14961;
throw e;
}});
} else {
react_med.routes.restore_domain = (function react_med$routes$restore_domain(app_state){
var temp__5733__auto__ = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null));
if(cljs.core.truth_(temp__5733__auto__)){
var old_domain = temp__5733__auto__;
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"domain","domain",1847214937),old_domain),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"backup","backup",26347393));
} else {
return app_state;
}
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.routes","restore-domain","react-med.routes/restore-domain",1200856465),react_med.routes.restore_domain);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.routes.discard_backup = (function react_med$routes$discard_backup(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"backup","backup",26347393)));

var opts__14244__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = cljs.core.update_in.call(null,(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})(),new cljs.core.Keyword(null,"backup","backup",26347393));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"backup","backup",26347393)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14245__auto__;
}catch (e14962){var e = e14962;
throw e;
}});
} else {
react_med.routes.discard_backup = (function react_med$routes$discard_backup(app_state){
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"backup","backup",26347393));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.routes","discard-backup","react-med.routes/discard-backup",-1883862736),react_med.routes.discard_backup);
react_med.routes.next_state_then = (function react_med$routes$next_state_then(events){
return (function (p__14963,p__14964){
var map__14965 = p__14963;
var map__14965__$1 = (((((!((map__14965 == null))))?(((((map__14965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14965):map__14965);
var app_state = cljs.core.get.call(null,map__14965__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14966 = p__14964;
var event = cljs.core.nth.call(null,vec__14966,(0),null);
var _ = cljs.core.nth.call(null,vec__14966,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),react_med.routes.next_state_handler.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),events], null);
});
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),react_med.routes.next_state_then.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","backup-domain","react-med.routes/backup-domain",-1000428949)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","close-actions-menu","react-med.shell-components/close-actions-menu",-628250487)], null)], null)));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),react_med.routes.next_state_then.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","restore-domain","react-med.routes/restore-domain",1200856465)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","close-actions-menu","react-med.shell-components/close-actions-menu",-628250487)], null)], null)));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),react_med.routes.next_state_then.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","discard-backup","react-med.routes/discard-backup",-1883862736)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","close-actions-menu","react-med.shell-components/close-actions-menu",-628250487)], null)], null)));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"back","back",-417520012),react_med.routes.next_state_then.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","restore-domain","react-med.routes/restore-domain",1200856465)], null)], null)));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239),(function (app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null));
}));
react_med.routes.state_machine = new cljs.core.PersistentArrayMap(null, 8, [null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),"info"], null),"pacientes",cljs.core.PersistentArrayMap.EMPTY,"info",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edit","edit",-1641834166),"edit-info",new cljs.core.Keyword(null,"back","back",-417520012),"pacientes"], null),"edit-info",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ok","ok",967785236),"info",new cljs.core.Keyword(null,"cancel","cancel",-1964088360),"info"], null),"avaliacoes",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"back","back",-417520012),"pacientes"], null),"coleta",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"back","back",-417520012),"info",new cljs.core.Keyword(null,"edit","edit",-1641834166),"edit-coleta"], null),"edit-coleta",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ok","ok",967785236),"coleta",new cljs.core.Keyword(null,"cancel","cancel",-1964088360),"coleta"], null),"relatorio",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"back","back",-417520012),"info"], null)], null);
react_med.routes.title = (function react_med$routes$title(p__14970){
var vec__14971 = p__14970;
var state = cljs.core.nth.call(null,vec__14971,(0),null);
var selected_patient = cljs.core.nth.call(null,vec__14971,(1),null);
var patient_name = new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(selected_patient);
var preposição = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"sexo","sexo",-629407757).cljs$core$IFn$_invoke$arity$1(selected_patient),"Feminino"))?" da ":" do ");
var G__14974 = state;
switch (G__14974) {
case "pacientes":
return "Pacientes";

break;
case "info":
return "Detalhes do Paciente";

break;
case "edit-info":
return "Detalhes do Paciente";

break;
case "avaliacoes":
return "Detalhes do Paciente";

break;
case "coleta":
return ["Avalia\u00E7\u00E3o",preposição,cljs.core.str.cljs$core$IFn$_invoke$arity$1(patient_name)].join('');

break;
case "edit-coleta":
return ["Avalia\u00E7\u00E3o",preposição,cljs.core.str.cljs$core$IFn$_invoke$arity$1(patient_name)].join('');

break;
case "relatorio":
return ["Avalia\u00E7\u00E3o",preposição,cljs.core.str.cljs$core$IFn$_invoke$arity$1(patient_name)].join('');

break;
default:
return "??";

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.routes","title","react-med.routes/title",1582209313),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628)], null),react_med.routes.title);
react_med.routes.tab_title = (function react_med$routes$tab_title(screen){
var G__14976 = screen;
switch (G__14976) {
case "pacientes":
return "Pacientes";

break;
case "info":
return "Informa\u00E7\u00F5es Pessoais";

break;
case "edit-info":
return "Informa\u00E7\u00F5es Pessoais";

break;
case "avaliacoes":
return "Avalia\u00E7\u00F5es";

break;
case "coleta":
return "Coleta";

break;
case "edit-coleta":
return "Coleta";

break;
case "relatorio":
return "Relat\u00F3rio";

break;
default:
return "??";

}
});
react_med.routes.tabs = (function react_med$routes$tabs(state){
var state__GT_tab = (function (p1__14978_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),react_med.routes.tab_title.call(null,p1__14978_SHARP_),new cljs.core.Keyword(null,"state","state",-1988618099),p1__14978_SHARP_], null));
});
var G__14979 = state;
switch (G__14979) {
case "info":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__GT_tab.call(null,"info"),state__GT_tab.call(null,"avaliacoes")], null);

break;
case "edit-info":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__GT_tab.call(null,"info"),state__GT_tab.call(null,"avaliacoes")], null);

break;
case "relatorio":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__GT_tab.call(null,"coleta"),state__GT_tab.call(null,"relatorio")], null);

break;
default:
return null;

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.routes","tabs","react-med.routes/tabs",1784816700),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239)], null),react_med.routes.tabs);
react_med.routes.side_menu = (function react_med$routes$side_menu(p__14983){
var vec__14984 = p__14983;
var state = cljs.core.nth.call(null,vec__14984,(0),null);
var selected_patient = cljs.core.nth.call(null,vec__14984,(1),null);
var selected_avaliacao = cljs.core.nth.call(null,vec__14984,(2),null);
var vec__14987 = cljs.core.re_find.call(null,/\d+-(\d+)-(\d+)/,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(selected_avaliacao));
var _ = cljs.core.nth.call(null,vec__14987,(0),null);
var month = cljs.core.nth.call(null,vec__14987,(1),null);
var day = cljs.core.nth.call(null,vec__14987,(2),null);
var model__GT_menu = ((function (vec__14987,_,month,day,vec__14984,state,selected_patient,selected_avaliacao){
return (function react_med$routes$side_menu_$_m__GT_m(p__14990){
var map__14991 = p__14990;
var map__14991__$1 = (((((!((map__14991 == null))))?(((((map__14991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14991):map__14991);
var s = cljs.core.get.call(null,map__14991__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var sub_menus = cljs.core.get.call(null,map__14991__$1,new cljs.core.Keyword(null,"sub-menus","sub-menus",-230507979));
var extra_label = cljs.core.get.call(null,map__14991__$1,new cljs.core.Keyword(null,"extra-label","extra-label",1842953888));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(react_med.routes.tab_title.call(null,s)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_label)].join(''),new cljs.core.Keyword(null,"state","state",-1988618099),s,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,state,s),new cljs.core.Keyword(null,"sub-menus","sub-menus",-230507979),cljs.core.map.call(null,react_med$routes$side_menu_$_m__GT_m,sub_menus)], null);
});})(vec__14987,_,month,day,vec__14984,state,selected_patient,selected_avaliacao))
;
var menu_model = (function (){var pred__14993 = ((function (vec__14987,_,month,day,model__GT_menu,vec__14984,state,selected_patient,selected_avaliacao){
return (function (p1__14981_SHARP_,p2__14982_SHARP_){
return p1__14981_SHARP_.call(null,p2__14982_SHARP_);
});})(vec__14987,_,month,day,model__GT_menu,vec__14984,state,selected_patient,selected_avaliacao))
;
var expr__14994 = state;
if(cljs.core.truth_(pred__14993.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["pacientes",null], null), null),expr__14994))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"pacientes"], null)], null);
} else {
if(cljs.core.truth_(pred__14993.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["info",null,"avaliacoes",null,"edit-info",null], null), null),expr__14994))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"s","s",1705939918),"pacientes",new cljs.core.Keyword(null,"extra-label","extra-label",1842953888),(cljs.core.truth_(selected_patient)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(selected_patient)),")"].join(''):null),new cljs.core.Keyword(null,"sub-menus","sub-menus",-230507979),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"info"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),"avaliacoes",new cljs.core.Keyword(null,"extra-label","extra-label",1842953888),(cljs.core.truth_(selected_avaliacao)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),")"].join(''):null)], null)], null)], null)], null);
} else {
if(cljs.core.truth_(pred__14993.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["coleta",null,"relatorio",null,"edit-coleta",null], null), null),expr__14994))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"s","s",1705939918),"pacientes",new cljs.core.Keyword(null,"extra-label","extra-label",1842953888),(cljs.core.truth_(selected_patient)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(selected_patient)),")"].join(''):null),new cljs.core.Keyword(null,"sub-menus","sub-menus",-230507979),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"info"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"s","s",1705939918),"avaliacoes",new cljs.core.Keyword(null,"extra-label","extra-label",1842953888),(cljs.core.truth_(selected_avaliacao)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),")"].join(''):null),new cljs.core.Keyword(null,"sub-menus","sub-menus",-230507979),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"coleta"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"relatorio"], null)], null)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"pacientes"], null)], null);
}
}
}
})();
return cljs.core.map.call(null,model__GT_menu,menu_model);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.routes","side-menu","react-med.routes/side-menu",909029319),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-avaliacao","selected-avaliacao","react-med.screens.paciente-avaliacao/selected-avaliacao",1796286413)], null),react_med.routes.side_menu);
react_med.routes.actions = (function react_med$routes$actions(state){
var G__14996 = state;
switch (G__14996) {
case "info":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Exportar para Excel",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"export-to-csv","export-to-csv",-305760776)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Voltar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"back","back",-417520012)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Editar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"edit","edit",-1641834166)], null)], null);

break;
case "edit-info":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Pronto",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"ok","ok",967785236)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Cancelar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"cancel","cancel",-1964088360)], null)], null);

break;
case "avaliacoes":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Exportar para Excel",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"export-to-csv","export-to-csv",-305760776)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Voltar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"back","back",-417520012)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Nova Avalia\u00E7\u00E3o",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"nova-avaliacao","nova-avaliacao",-1690822290)], null)], null);

break;
case "relatorio":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Voltar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"back","back",-417520012)], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sem a\u00E7\u00F5es pra essa tela"], null)], null);

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.routes","actions","react-med.routes/actions",-1858990120),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239)], null),react_med.routes.actions);
react_med.routes.selected_view = (function react_med$routes$selected_view(){
var G__14998 = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239)], null));
switch (G__14998) {
case "pacientes":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_pacientes.view], null);

break;
case "info":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_info], null);

break;
case "edit-info":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.editing_patient_info], null);

break;
case "avaliacoes":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_avaliacoes.view], null);

break;
case "coleta":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_avaliacao.detail_view], null);

break;
case "edit-coleta":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_avaliacao.editing_view], null);

break;
case "relatorio":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.view], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_info], null);

}
});

//# sourceMappingURL=routes.js.map
