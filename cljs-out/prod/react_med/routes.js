// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.routes');
goog.require('cljs.core');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('react_med.screens.lista_avaliacoes');
goog.require('react_med.screens.lista_pacientes');
goog.require('react_med.screens.loading');
goog.require('react_med.screens.login');
goog.require('react_med.screens.paciente_avaliacao');
goog.require('react_med.screens.paciente_relatorio.ellipses');
goog.require('react_med.screens.paciente_relatorio.ellipses_config');
goog.require('react_med.screens.paciente_relatorio.paciente_relatorio');
goog.require('react_med.screens.paciente_relatorio.config');
goog.require('react_med.screens.patient_info.core');
goog.require('react_med.shell_components');
goog.require('react_med.util');
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.routes.set_route = (function react_med$routes$set_route(app_state,p__20069){
var vec__20070 = p__20069;
var _ = cljs.core.nth.call(null,vec__20070,(0),null);
var ui_route = cljs.core.nth.call(null,vec__20070,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Symbol(null,"ui-route","ui-route",1828352800,null)));

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = ui_route;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"ui-route","ui-route",1828352800,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Symbol(null,"ui-route","ui-route",1828352800,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e20073){var e = e20073;
throw e;
}});
} else {
react_med.routes.set_route = (function react_med$routes$set_route(app_state,p__20074){
var vec__20075 = p__20074;
var _ = cljs.core.nth.call(null,vec__20075,(0),null);
var ui_route = cljs.core.nth.call(null,vec__20075,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),ui_route);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.routes","set-route","react-med.routes/set-route",-701732541),react_med.routes.set_route);
react_med.routes.current__GT_next_state = (function react_med$routes$current__GT_next_state(state_machine,current_state,transition){
return cljs.core.get_in.call(null,state_machine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_state,transition], null));
});
react_med.routes.next_state_handler = (function react_med$routes$next_state_handler(db,p__20078){
var vec__20079 = p__20078;
var event = cljs.core.nth.call(null,vec__20079,(0),null);
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

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = react_med.routes.next_state_handler.call(null,(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = event;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"event","event",1941966969,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"next-state-handler","next-state-handler",-503541646,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e20082){var e = e20082;
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

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var domain_snapshot = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),new cljs.core.Keyword(null,"domain","domain",1847214937));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"domain","domain",1847214937)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = domain_snapshot;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"domain-snapshot","domain-snapshot",-1672358085,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Symbol(null,"domain-snapshot","domain-snapshot",-1672358085,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"domain-snapshot","domain-snapshot",-1672358085,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"domain","domain",1847214937))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Symbol(null,"domain-snapshot","domain-snapshot",-1672358085,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e20083){var e = e20083;
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

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var temp__5733__auto__ = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
if(cljs.core.truth_(temp__5733__auto__)){
var old_domain = temp__5733__auto__;
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),new cljs.core.Keyword(null,"domain","domain",1847214937),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = old_domain;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"old-domain","old-domain",-177558496,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"old-domain","old-domain",-177558496,null)),(2)),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),new cljs.core.Keyword(null,"backup","backup",26347393)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"backup","backup",26347393)),(1));
} else {
var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
}
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-domain","old-domain",-177558496,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"backup","backup",26347393))),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e20084){var e = e20084;
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

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.update_in.call(null,(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})(),new cljs.core.Keyword(null,"backup","backup",26347393));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"backup","backup",26347393)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e20085){var e = e20085;
throw e;
}});
} else {
react_med.routes.discard_backup = (function react_med$routes$discard_backup(app_state){
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"backup","backup",26347393));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.routes","discard-backup","react-med.routes/discard-backup",-1883862736),react_med.routes.discard_backup);
react_med.routes.next_state_then = (function react_med$routes$next_state_then(events){
return (function (p__20086,p__20087){
var map__20088 = p__20086;
var map__20088__$1 = (((((!((map__20088 == null))))?(((((map__20088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20088):map__20088);
var app_state = cljs.core.get.call(null,map__20088__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__20089 = p__20087;
var event = cljs.core.nth.call(null,vec__20089,(0),null);
var _ = cljs.core.nth.call(null,vec__20089,(1),null);
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
react_med.routes.state_machine = cljs.core.PersistentHashMap.fromArrays([null,"selecionando-avaliacoes","info","coleta","selecionando-pacientes","ellipses","relatorio","edit-coleta","ellipses-config","avaliacoes","relatorio-config","edit-info","pacientes"],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),"info"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ok","ok",967785236),"avaliacoes",new cljs.core.Keyword(null,"cancel","cancel",-1964088360),"avaliacoes"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edit","edit",-1641834166),"edit-info",new cljs.core.Keyword(null,"back","back",-417520012),"pacientes"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"back","back",-417520012),"avaliacoes",new cljs.core.Keyword(null,"edit","edit",-1641834166),"edit-coleta"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ok","ok",967785236),"pacientes",new cljs.core.Keyword(null,"cancel","cancel",-1964088360),"pacientes"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"back","back",-417520012),"pacientes"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"back","back",-417520012),"info"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ok","ok",967785236),"coleta",new cljs.core.Keyword(null,"back","back",-417520012),"coleta",new cljs.core.Keyword(null,"cancel","cancel",-1964088360),"coleta"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"back","back",-417520012),"pacientes"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"back","back",-417520012),"pacientes"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"back","back",-417520012),"info"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ok","ok",967785236),"info",new cljs.core.Keyword(null,"back","back",-417520012),"info",new cljs.core.Keyword(null,"cancel","cancel",-1964088360),"info"], null),cljs.core.PersistentArrayMap.EMPTY]);
react_med.routes.title = (function react_med$routes$title(p__20093){
var vec__20094 = p__20093;
var state = cljs.core.nth.call(null,vec__20094,(0),null);
var selected_patient = cljs.core.nth.call(null,vec__20094,(1),null);
var patient_name = new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(selected_patient);
var preposição = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"sexo","sexo",-629407757).cljs$core$IFn$_invoke$arity$1(selected_patient),"Feminino"))?" da ":" do ");
var G__20097 = state;
switch (G__20097) {
case "pacientes":
return "Pacientes";

break;
case "selecionando-pacientes":
return "Pacientes";

break;
case "info":
return patient_name;

break;
case "edit-info":
return patient_name;

break;
case "avaliacoes":
return patient_name;

break;
case "selecionando-avaliacoes":
return patient_name;

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
case "relatorio-config":
return "Escolha de Equa\u00E7\u00F5es";

break;
case "ellipses":
return "Gr\u00E1fico RXc";

break;
case "ellipses-config":
return "Gr\u00E1fico RXc";

break;
default:
return "??";

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.routes","title","react-med.routes/title",1582209313),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628)], null),react_med.routes.title);
react_med.routes.top_bar_icon = (function react_med$routes$top_bar_icon(state){
var G__20099 = state;
switch (G__20099) {
case "pacientes":
return "";

break;
case "selecionando-pacientes":
return "X";

break;
case "info":
return "<-";

break;
case "edit-info":
return "X";

break;
case "avaliacoes":
return "<-";

break;
case "selecionando-avaliacoes":
return "X";

break;
case "coleta":
return "<-";

break;
case "edit-coleta":
return "X";

break;
case "relatorio":
return "<-";

break;
case "relatorio-config":
return "<-";

break;
case "ellipses":
return "<-";

break;
case "ellipses-config":
return "<-";

break;
default:
return "";

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.routes","top-bar-icon","react-med.routes/top-bar-icon",-1492414179),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239)], null),react_med.routes.top_bar_icon);
react_med.routes.tab_title = (function react_med$routes$tab_title(screen){
var G__20101 = screen;
switch (G__20101) {
case "pacientes":
return "Pacientes";

break;
case "selecionando-pacientes":
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
case "relatorio-config":
return "Configura\u00E7\u00E3o";

break;
case "ellipses":
return "Gr\u00E1fico RXc";

break;
case "ellipses-config":
return "Configura\u00E7\u00E3o";

break;
default:
return "???";

}
});
react_med.routes.tabs = (function react_med$routes$tabs(state){
var pred__20105 = (function (p1__20103_SHARP_,p2__20104_SHARP_){
return p1__20103_SHARP_.call(null,p2__20104_SHARP_);
});
var expr__20106 = state;
if(cljs.core.truth_(pred__20105.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["info",null,"avaliacoes",null], null), null),expr__20106))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),react_med.routes.tab_title.call(null,"info"),new cljs.core.Keyword(null,"state","state",-1988618099),"info"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),react_med.routes.tab_title.call(null,"avaliacoes"),new cljs.core.Keyword(null,"state","state",-1988618099),"avaliacoes"], null)], null);
} else {
if(cljs.core.truth_(pred__20105.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["edit-info",null], null), null),expr__20106))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),react_med.routes.tab_title.call(null,"info"),new cljs.core.Keyword(null,"state","state",-1988618099),"edit-info"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),react_med.routes.tab_title.call(null,"avaliacoes"),new cljs.core.Keyword(null,"state","state",-1988618099),"avaliacoes"], null)], null);
} else {
if(cljs.core.truth_(pred__20105.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["selecionando-avaliacoes",null], null), null),expr__20106))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),react_med.routes.tab_title.call(null,"info"),new cljs.core.Keyword(null,"state","state",-1988618099),"info"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),react_med.routes.tab_title.call(null,"avaliacoes"),new cljs.core.Keyword(null,"state","state",-1988618099),"selecionando-avaliacoes"], null)], null);
} else {
if(cljs.core.truth_(pred__20105.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["coleta",null,"relatorio",null,"relatorio-config",null], null), null),expr__20106))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),react_med.routes.tab_title.call(null,"coleta"),new cljs.core.Keyword(null,"state","state",-1988618099),"coleta"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),react_med.routes.tab_title.call(null,"relatorio"),new cljs.core.Keyword(null,"state","state",-1988618099),"relatorio"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),react_med.routes.tab_title.call(null,"relatorio-config"),new cljs.core.Keyword(null,"state","state",-1988618099),"relatorio-config"], null)], null);
} else {
if(cljs.core.truth_(pred__20105.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["edit-coleta",null], null), null),expr__20106))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),react_med.routes.tab_title.call(null,"coleta"),new cljs.core.Keyword(null,"state","state",-1988618099),"edit-coleta"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),react_med.routes.tab_title.call(null,"relatorio"),new cljs.core.Keyword(null,"state","state",-1988618099),"relatorio"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),react_med.routes.tab_title.call(null,"relatorio-config"),new cljs.core.Keyword(null,"state","state",-1988618099),"relatorio-config"], null)], null);
} else {
if(cljs.core.truth_(pred__20105.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ellipses",null,"ellipses-config",null], null), null),expr__20106))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Gr\u00E1fico",new cljs.core.Keyword(null,"state","state",-1988618099),"ellipses"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Configura\u00E7\u00E3o",new cljs.core.Keyword(null,"state","state",-1988618099),"ellipses-config"], null)], null);
} else {
return null;
}
}
}
}
}
}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.routes","tabs","react-med.routes/tabs",1784816700),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239)], null),react_med.routes.tabs);
react_med.routes.side_menu = (function react_med$routes$side_menu(p__20110){
var vec__20111 = p__20110;
var state = cljs.core.nth.call(null,vec__20111,(0),null);
var selected_patient = cljs.core.nth.call(null,vec__20111,(1),null);
var selected_avaliacao = cljs.core.nth.call(null,vec__20111,(2),null);
var vec__20114 = cljs.core.re_find.call(null,/\d+-(\d+)-(\d+)/,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(selected_avaliacao);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var _ = cljs.core.nth.call(null,vec__20114,(0),null);
var month = cljs.core.nth.call(null,vec__20114,(1),null);
var day = cljs.core.nth.call(null,vec__20114,(2),null);
var model__GT_menu = ((function (vec__20114,_,month,day,vec__20111,state,selected_patient,selected_avaliacao){
return (function react_med$routes$side_menu_$_m__GT_m(p__20117){
var map__20118 = p__20117;
var map__20118__$1 = (((((!((map__20118 == null))))?(((((map__20118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20118):map__20118);
var s = cljs.core.get.call(null,map__20118__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var sub_menus = cljs.core.get.call(null,map__20118__$1,new cljs.core.Keyword(null,"sub-menus","sub-menus",-230507979));
var extra_label = cljs.core.get.call(null,map__20118__$1,new cljs.core.Keyword(null,"extra-label","extra-label",1842953888));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(react_med.routes.tab_title.call(null,s)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_label)].join(''),new cljs.core.Keyword(null,"state","state",-1988618099),s,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,state,s),new cljs.core.Keyword(null,"sub-menus","sub-menus",-230507979),cljs.core.map.call(null,react_med$routes$side_menu_$_m__GT_m,sub_menus)], null);
});})(vec__20114,_,month,day,vec__20111,state,selected_patient,selected_avaliacao))
;
var menu_model = (function (){var pred__20120 = ((function (vec__20114,_,month,day,model__GT_menu,vec__20111,state,selected_patient,selected_avaliacao){
return (function (p1__20108_SHARP_,p2__20109_SHARP_){
return p1__20108_SHARP_.call(null,p2__20109_SHARP_);
});})(vec__20114,_,month,day,model__GT_menu,vec__20111,state,selected_patient,selected_avaliacao))
;
var expr__20121 = state;
if(cljs.core.truth_(pred__20120.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["pacientes",null], null), null),expr__20121))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"pacientes"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"ellipses"], null)], null);
} else {
if(cljs.core.truth_(pred__20120.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["info",null,"avaliacoes",null,"edit-info",null], null), null),expr__20121))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"s","s",1705939918),"pacientes",new cljs.core.Keyword(null,"extra-label","extra-label",1842953888),(cljs.core.truth_(selected_patient)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(selected_patient)),")"].join(''):null),new cljs.core.Keyword(null,"sub-menus","sub-menus",-230507979),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"info"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),"avaliacoes",new cljs.core.Keyword(null,"extra-label","extra-label",1842953888),(cljs.core.truth_(selected_avaliacao)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),")"].join(''):null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"ellipses"], null)], null);
} else {
if(cljs.core.truth_(pred__20120.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["coleta",null,"relatorio",null,"edit-coleta",null,"relatorio-config",null], null), null),expr__20121))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"s","s",1705939918),"pacientes",new cljs.core.Keyword(null,"extra-label","extra-label",1842953888),(cljs.core.truth_(selected_patient)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(selected_patient)),")"].join(''):null),new cljs.core.Keyword(null,"sub-menus","sub-menus",-230507979),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"info"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"s","s",1705939918),"avaliacoes",new cljs.core.Keyword(null,"extra-label","extra-label",1842953888),(cljs.core.truth_(selected_avaliacao)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),")"].join(''):null),new cljs.core.Keyword(null,"sub-menus","sub-menus",-230507979),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"coleta"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"relatorio"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"relatorio-config"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"ellipses"], null)], null);
} else {
if(cljs.core.truth_(pred__20120.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ellipses",null,"ellipses-config",null], null), null),expr__20121))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"pacientes"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),"ellipses",new cljs.core.Keyword(null,"sub-menus","sub-menus",-230507979),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"ellipses-config"], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),"pacientes"], null)], null);
}
}
}
}
})();
return cljs.core.map.call(null,model__GT_menu,menu_model);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.routes","side-menu","react-med.routes/side-menu",909029319),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-avaliacao","selected-avaliacao","react-med.screens.paciente-avaliacao/selected-avaliacao",1796286413)], null),react_med.routes.side_menu);
react_med.routes.actions = (function react_med$routes$actions(state){
var G__20123 = state;
switch (G__20123) {
case "pacientes":
return react_med.screens.lista_pacientes.list_actions;

break;
case "selecionando-pacientes":
return react_med.screens.lista_pacientes.selecting_actions;

break;
case "info":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Exportar para Excel",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"export-to-csv","export-to-csv",-305760776)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Voltar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"back","back",-417520012)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Editar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"edit","edit",-1641834166)], null)], null);

break;
case "edit-info":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Pronto",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"ok","ok",967785236)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Cancelar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"cancel","cancel",-1964088360)], null)], null);

break;
case "avaliacoes":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Exportar para Excel",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"export-to-csv","export-to-csv",-305760776)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Voltar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"back","back",-417520012)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Selecionar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("react-med.screens.lista-avaliacoes","show-avaliacoes-checkbox","react-med.screens.lista-avaliacoes/show-avaliacoes-checkbox",-1939337160)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Nova Avalia\u00E7\u00E3o",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("react-med.screens.lista-avaliacoes","nova-avaliacao","react-med.screens.lista-avaliacoes/nova-avaliacao",-2055913183)], null)], null);

break;
case "selecionando-avaliacoes":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ok",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"ok","ok",967785236)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Excluir",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("react-med.screens.lista-avaliacoes","delete-avaliacoes","react-med.screens.lista-avaliacoes/delete-avaliacoes",962268280)], null)], null);

break;
case "coleta":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Exportar para Excel",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"export-to-csv","export-to-csv",-305760776)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Voltar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"back","back",-417520012)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Editar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"edit","edit",-1641834166)], null)], null);

break;
case "edit-coleta":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Pronto",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"ok","ok",967785236)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Cancelar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"cancel","cancel",-1964088360)], null)], null);

break;
case "relatorio":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Vers\u00E3o em PDF",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("react-med.screens.paciente-relatorio.paciente-relatorio","imprimir-relatorio","react-med.screens.paciente-relatorio.paciente-relatorio/imprimir-relatorio",1385206017)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Voltar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"back","back",-417520012)], null)], null);

break;
case "relatorio-config":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Voltar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"back","back",-417520012)], null)], null);

break;
case "ellipses":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Voltar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"back","back",-417520012)], null)], null);

break;
case "ellipses-config":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Voltar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"back","back",-417520012)], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sem a\u00E7\u00F5es pra essa tela"], null)], null);

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.routes","actions","react-med.routes/actions",-1858990120),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239)], null),react_med.routes.actions);
react_med.routes.selected_view = (function react_med$routes$selected_view(){
var G__20125 = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239)], null));
switch (G__20125) {
case "pacientes":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_pacientes.view], null);

break;
case "selecionando-pacientes":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_pacientes.selecting_view], null);

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
case "selecionando-avaliacoes":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_avaliacoes.selecting_view], null);

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
case "relatorio-config":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.config.view], null);

break;
case "ellipses":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.view], null);

break;
case "ellipses-config":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses_config.view], null);

break;
case "loading":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.loading.view], null);

break;
case "login":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.login.view], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_info], null);

}
});

//# sourceMappingURL=routes.js.map
