// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('react_med.screens.lista_avaliacoes');
goog.require('react_med.screens.lista_pacientes');
goog.require('react_med.screens.loading');
goog.require('react_med.screens.login');
goog.require('react_med.screens.paciente_avaliacao');
goog.require('react_med.screens.paciente_relatorio.ellipses');
goog.require('react_med.screens.paciente_relatorio.paciente_relatorio');
goog.require('react_med.screens.patient_info.core');
goog.require('react_med.shell_components');
goog.require('react_med.util');
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.routes.set_route = (function react_med$routes$set_route(app_state,p__26165){
var vec__26166 = p__26165;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26166,(0),null);
var ui_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26166,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),cljs.core.cst$sym$ui_DASH_route));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.assoc_in((function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = ui_route;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$ui_DASH_route,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),cljs.core.cst$sym$ui_DASH_route),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e26169){var e = e26169;
throw e;
}});
} else {
react_med.routes.set_route = (function react_med$routes$set_route(app_state,p__26170){
var vec__26171 = p__26170;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26171,(0),null);
var ui_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26171,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),ui_route);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$routes_SLASH_set_DASH_route,react_med.routes.set_route);
react_med.routes.current__GT_next_state = (function react_med$routes$current__GT_next_state(state_machine,current_state,transition){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_machine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_state,transition], null));
});
react_med.routes.next_state_handler = (function react_med$routes$next_state_handler(db,p__26174){
var vec__26175 = p__26174;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26175,(0),null);
var temp__5733__auto__ = react_med.routes.current__GT_next_state(react_med.routes.state_machine,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null)),event);
if(cljs.core.truth_(temp__5733__auto__)){
var new_state = temp__5733__auto__;
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),new_state);
} else {
return db;
}
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.routes.next_state = (function react_med$routes$next_state(db,event){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$next_DASH_state_DASH_handler,cljs.core.cst$sym$db,cljs.core.cst$sym$event));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = react_med.routes.next_state_handler((function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = event;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$event,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$next_DASH_state_DASH_handler,cljs.core.cst$sym$db,cljs.core.cst$sym$event),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e26178){var e = e26178;
throw e;
}});
} else {
react_med.routes.next_state = (function react_med$routes$next_state(db,event){
return react_med.routes.next_state_handler(db,event);
});
}
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.routes.backup_domain = (function react_med$routes$backup_domain(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$domain_DASH_snapshot,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$domain)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null),cljs.core.cst$sym$domain_DASH_snapshot)));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var domain_snapshot = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$domain);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$domain),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.assoc_in((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = domain_snapshot;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$domain_DASH_snapshot,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null),cljs.core.cst$sym$domain_DASH_snapshot),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$domain_DASH_snapshot,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$domain)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null),cljs.core.cst$sym$domain_DASH_snapshot)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e26179){var e = e26179;
throw e;
}});
} else {
react_med.routes.backup_domain = (function react_med$routes$backup_domain(app_state){
var domain_snapshot = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_state,cljs.core.cst$kw$domain);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null),domain_snapshot);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$routes_SLASH_backup_DASH_domain,react_med.routes.backup_domain);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.routes.restore_domain = (function react_med$routes$restore_domain(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$if_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$old_DASH_domain,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null))], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$kw$domain,cljs.core.cst$sym$old_DASH_domain),cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null),cljs.core.cst$sym$dissoc,cljs.core.cst$kw$backup)),cljs.core.cst$sym$app_DASH_state));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var temp__5733__auto__ = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
if(cljs.core.truth_(temp__5733__auto__)){
var old_domain = temp__5733__auto__;
return debux.common.util.spy_first(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(debux.common.util.spy_first(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(debux.common.util.spy_first(app_state,cljs.core.cst$sym$app_DASH_state,(3)),cljs.core.cst$kw$domain,(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = old_domain;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$old_DASH_domain,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})()),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$kw$domain,cljs.core.cst$sym$old_DASH_domain),(2)),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$backup),cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null),cljs.core.cst$sym$dissoc,cljs.core.cst$kw$backup),(1));
} else {
var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
}
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$old_DASH_domain,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null))], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null),cljs.core.cst$sym$dissoc,cljs.core.cst$kw$backup)),cljs.core.cst$sym$app_DASH_state),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e26180){var e = e26180;
throw e;
}});
} else {
react_med.routes.restore_domain = (function react_med$routes$restore_domain(app_state){
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null));
if(cljs.core.truth_(temp__5733__auto__)){
var old_domain = temp__5733__auto__;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app_state,cljs.core.cst$kw$domain,old_domain),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null),cljs.core.dissoc,cljs.core.cst$kw$backup);
} else {
return app_state;
}
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$routes_SLASH_restore_DASH_domain,react_med.routes.restore_domain);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.routes.discard_backup = (function react_med$routes$discard_backup(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null),cljs.core.cst$sym$dissoc,cljs.core.cst$kw$backup));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$backup);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null),cljs.core.cst$sym$dissoc,cljs.core.cst$kw$backup),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e26181){var e = e26181;
throw e;
}});
} else {
react_med.routes.discard_backup = (function react_med$routes$discard_backup(app_state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null),cljs.core.dissoc,cljs.core.cst$kw$backup);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$routes_SLASH_discard_DASH_backup,react_med.routes.discard_backup);
react_med.routes.next_state_then = (function react_med$routes$next_state_then(events){
return (function (p__26182,p__26183){
var map__26184 = p__26182;
var map__26184__$1 = (((((!((map__26184 == null))))?(((((map__26184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26184):map__26184);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26184__$1,cljs.core.cst$kw$db);
var vec__26185 = p__26183;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26185,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26185,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,react_med.routes.next_state_handler(app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null)),cljs.core.cst$kw$dispatch_DASH_n,events], null);
});
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$edit,react_med.routes.next_state_then(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_backup_DASH_domain], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_close_DASH_actions_DASH_menu], null)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cancel,react_med.routes.next_state_then(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_restore_DASH_domain], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_close_DASH_actions_DASH_menu], null)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ok,react_med.routes.next_state_then(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_discard_DASH_backup], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_close_DASH_actions_DASH_menu], null)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$back,react_med.routes.next_state_then(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_restore_DASH_domain], null)], null)));
var G__26189_26191 = cljs.core.cst$kw$react_DASH_med$routes_SLASH_state;
var G__26190_26192 = ((function (G__26189_26191){
return (function (app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null));
});})(G__26189_26191))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26189_26191,G__26190_26192) : re_frame.core.reg_sub.call(null,G__26189_26191,G__26190_26192));
react_med.routes.state_machine = cljs.core.PersistentHashMap.fromArrays([null,"selecionando-avaliacoes","info","coleta","selecionando-pacientes","ellipses","relatorio","edit-coleta","ellipses-config","avaliacoes","edit-info","pacientes"],[new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$init,"info"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ok,"avaliacoes",cljs.core.cst$kw$cancel,"avaliacoes"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$edit,"edit-info",cljs.core.cst$kw$back,"pacientes"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$back,"avaliacoes",cljs.core.cst$kw$edit,"edit-coleta"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ok,"pacientes",cljs.core.cst$kw$cancel,"pacientes"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$back,"pacientes"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$back,"info"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ok,"coleta",cljs.core.cst$kw$back,"coleta",cljs.core.cst$kw$cancel,"coleta"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$back,"pacientes"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$back,"pacientes"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ok,"info",cljs.core.cst$kw$back,"info",cljs.core.cst$kw$cancel,"info"], null),cljs.core.PersistentArrayMap.EMPTY]);
react_med.routes.title = (function react_med$routes$title(p__26193){
var vec__26194 = p__26193;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26194,(0),null);
var selected_patient = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26194,(1),null);
var patient_name = cljs.core.cst$kw$nome.cljs$core$IFn$_invoke$arity$1(selected_patient);
var preposição = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sexo.cljs$core$IFn$_invoke$arity$1(selected_patient),"Feminino"))?" da ":" do ");
var G__26197 = state;
switch (G__26197) {
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
case "ellipses":
return "Gr\u00E1fico RXc";

break;
case "ellipses-config":
return "Gr\u00E1fico";

break;
default:
return "??";

}
});
var G__26199_26205 = cljs.core.cst$kw$react_DASH_med$routes_SLASH_title;
var G__26200_26206 = cljs.core.cst$kw$_LT__DASH_;
var G__26201_26207 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_state], null);
var G__26202_26208 = cljs.core.cst$kw$_LT__DASH_;
var G__26203_26209 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_selected_DASH_patient], null);
var G__26204_26210 = react_med.routes.title;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__26199_26205,G__26200_26206,G__26201_26207,G__26202_26208,G__26203_26209,G__26204_26210) : re_frame.core.reg_sub.call(null,G__26199_26205,G__26200_26206,G__26201_26207,G__26202_26208,G__26203_26209,G__26204_26210));
react_med.routes.top_bar_icon = (function react_med$routes$top_bar_icon(state){
var G__26211 = state;
switch (G__26211) {
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
var G__26213_26217 = cljs.core.cst$kw$react_DASH_med$routes_SLASH_top_DASH_bar_DASH_icon;
var G__26214_26218 = cljs.core.cst$kw$_LT__DASH_;
var G__26215_26219 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_state], null);
var G__26216_26220 = react_med.routes.top_bar_icon;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26213_26217,G__26214_26218,G__26215_26219,G__26216_26220) : re_frame.core.reg_sub.call(null,G__26213_26217,G__26214_26218,G__26215_26219,G__26216_26220));
react_med.routes.tab_title = (function react_med$routes$tab_title(screen){
var G__26221 = screen;
switch (G__26221) {
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
case "ellipses":
return "Gr\u00E1fico";

break;
case "ellipses-config":
return "Configura\u00E7\u00E3o";

break;
default:
return "???";

}
});
react_med.routes.tabs = (function react_med$routes$tabs(state){
var G__26223 = state;
switch (G__26223) {
case "info":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,react_med.routes.tab_title("info"),cljs.core.cst$kw$state,"info"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,react_med.routes.tab_title("avaliacoes"),cljs.core.cst$kw$state,"avaliacoes"], null)], null);

break;
case "edit-info":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,react_med.routes.tab_title("info"),cljs.core.cst$kw$state,"edit-info"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,react_med.routes.tab_title("avaliacoes"),cljs.core.cst$kw$state,"avaliacoes"], null)], null);

break;
case "avaliacoes":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,react_med.routes.tab_title("info"),cljs.core.cst$kw$state,"info"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,react_med.routes.tab_title("avaliacoes"),cljs.core.cst$kw$state,"avaliacoes"], null)], null);

break;
case "selecionando-avaliacoes":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,react_med.routes.tab_title("info"),cljs.core.cst$kw$state,"info"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,react_med.routes.tab_title("avaliacoes"),cljs.core.cst$kw$state,"selecionando-avaliacoes"], null)], null);

break;
case "coleta":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,react_med.routes.tab_title("coleta"),cljs.core.cst$kw$state,"coleta"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,react_med.routes.tab_title("relatorio"),cljs.core.cst$kw$state,"relatorio"], null)], null);

break;
case "edit-coleta":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,react_med.routes.tab_title("coleta"),cljs.core.cst$kw$state,"edit-coleta"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,react_med.routes.tab_title("relatorio"),cljs.core.cst$kw$state,"relatorio"], null)], null);

break;
case "relatorio":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,react_med.routes.tab_title("coleta"),cljs.core.cst$kw$state,"coleta"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,react_med.routes.tab_title("relatorio"),cljs.core.cst$kw$state,"relatorio"], null)], null);

break;
case "ellipses":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"gr\u00E1fico",cljs.core.cst$kw$state,"ellipses"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Configura\u00E7\u00E3o",cljs.core.cst$kw$state,"ellipses-config"], null)], null);

break;
case "ellipses-config":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Gr\u00E1fico",cljs.core.cst$kw$state,"ellipses"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Configura\u00E7\u00E3o",cljs.core.cst$kw$state,"ellipses-config"], null)], null);

break;
default:
return null;

}
});
var G__26225_26229 = cljs.core.cst$kw$react_DASH_med$routes_SLASH_tabs;
var G__26226_26230 = cljs.core.cst$kw$_LT__DASH_;
var G__26227_26231 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_state], null);
var G__26228_26232 = react_med.routes.tabs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26225_26229,G__26226_26230,G__26227_26231,G__26228_26232) : re_frame.core.reg_sub.call(null,G__26225_26229,G__26226_26230,G__26227_26231,G__26228_26232));
react_med.routes.side_menu = (function react_med$routes$side_menu(p__26235){
var vec__26236 = p__26235;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26236,(0),null);
var selected_patient = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26236,(1),null);
var selected_avaliacao = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26236,(2),null);
var vec__26239 = cljs.core.re_find(/\d+-(\d+)-(\d+)/,(function (){var or__4131__auto__ = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(selected_avaliacao);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26239,(0),null);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26239,(1),null);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26239,(2),null);
var model__GT_menu = ((function (vec__26239,_,month,day,vec__26236,state,selected_patient,selected_avaliacao){
return (function react_med$routes$side_menu_$_m__GT_m(p__26242){
var map__26243 = p__26242;
var map__26243__$1 = (((((!((map__26243 == null))))?(((((map__26243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26243):map__26243);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26243__$1,cljs.core.cst$kw$s);
var sub_menus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26243__$1,cljs.core.cst$kw$sub_DASH_menus);
var extra_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26243__$1,cljs.core.cst$kw$extra_DASH_label);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$label,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(react_med.routes.tab_title(s)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_label)].join(''),cljs.core.cst$kw$state,s,cljs.core.cst$kw$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,s),cljs.core.cst$kw$sub_DASH_menus,cljs.core.map.cljs$core$IFn$_invoke$arity$2(react_med$routes$side_menu_$_m__GT_m,sub_menus)], null);
});})(vec__26239,_,month,day,vec__26236,state,selected_patient,selected_avaliacao))
;
var menu_model = (function (){var pred__26245 = ((function (vec__26239,_,month,day,model__GT_menu,vec__26236,state,selected_patient,selected_avaliacao){
return (function (p1__26233_SHARP_,p2__26234_SHARP_){
return (p1__26233_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26233_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__26234_SHARP_) : p1__26233_SHARP_.call(null,p2__26234_SHARP_));
});})(vec__26239,_,month,day,model__GT_menu,vec__26236,state,selected_patient,selected_avaliacao))
;
var expr__26246 = state;
if(cljs.core.truth_(pred__26245(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["pacientes",null], null), null),expr__26246))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"pacientes"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"ellipses"], null)], null);
} else {
if(cljs.core.truth_(pred__26245(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["info",null,"avaliacoes",null,"edit-info",null], null), null),expr__26246))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$s,"pacientes",cljs.core.cst$kw$extra_DASH_label,(cljs.core.truth_(selected_patient)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$nome.cljs$core$IFn$_invoke$arity$1(selected_patient)),")"].join(''):null),cljs.core.cst$kw$sub_DASH_menus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"info"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$s,"avaliacoes",cljs.core.cst$kw$extra_DASH_label,(cljs.core.truth_(selected_avaliacao)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),")"].join(''):null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"ellipses"], null)], null);
} else {
if(cljs.core.truth_(pred__26245(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["coleta",null,"relatorio",null,"edit-coleta",null], null), null),expr__26246))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$s,"pacientes",cljs.core.cst$kw$extra_DASH_label,(cljs.core.truth_(selected_patient)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$nome.cljs$core$IFn$_invoke$arity$1(selected_patient)),")"].join(''):null),cljs.core.cst$kw$sub_DASH_menus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"info"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$s,"avaliacoes",cljs.core.cst$kw$extra_DASH_label,(cljs.core.truth_(selected_avaliacao)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),")"].join(''):null),cljs.core.cst$kw$sub_DASH_menus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"coleta"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"relatorio"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"ellipses"], null)], null);
} else {
if(cljs.core.truth_(pred__26245(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ellipses",null,"ellipses-config",null], null), null),expr__26246))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"pacientes"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$s,"ellipses",cljs.core.cst$kw$sub_DASH_menus,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"ellipses-config"], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"pacientes"], null)], null);
}
}
}
}
})();
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(model__GT_menu,menu_model);
});
var G__26248_26256 = cljs.core.cst$kw$react_DASH_med$routes_SLASH_side_DASH_menu;
var G__26249_26257 = cljs.core.cst$kw$_LT__DASH_;
var G__26250_26258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_state], null);
var G__26251_26259 = cljs.core.cst$kw$_LT__DASH_;
var G__26252_26260 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_selected_DASH_patient], null);
var G__26253_26261 = cljs.core.cst$kw$_LT__DASH_;
var G__26254_26262 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_selected_DASH_avaliacao], null);
var G__26255_26263 = react_med.routes.side_menu;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__26248_26256,G__26249_26257,G__26250_26258,G__26251_26259,G__26252_26260,G__26253_26261,G__26254_26262,G__26255_26263) : re_frame.core.reg_sub.call(null,G__26248_26256,G__26249_26257,G__26250_26258,G__26251_26259,G__26252_26260,G__26253_26261,G__26254_26262,G__26255_26263));
react_med.routes.actions = (function react_med$routes$actions(state){
var G__26264 = state;
switch (G__26264) {
case "pacientes":
return react_med.screens.lista_pacientes.list_actions;

break;
case "selecionando-pacientes":
return react_med.screens.lista_pacientes.selecting_actions;

break;
case "info":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Exportar para Excel",cljs.core.cst$kw$event,cljs.core.cst$kw$export_DASH_to_DASH_csv], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Voltar",cljs.core.cst$kw$event,cljs.core.cst$kw$back], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Editar",cljs.core.cst$kw$event,cljs.core.cst$kw$edit], null)], null);

break;
case "edit-info":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Pronto",cljs.core.cst$kw$event,cljs.core.cst$kw$ok], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Cancelar",cljs.core.cst$kw$event,cljs.core.cst$kw$cancel], null)], null);

break;
case "avaliacoes":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Exportar para Excel",cljs.core.cst$kw$event,cljs.core.cst$kw$export_DASH_to_DASH_csv], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Voltar",cljs.core.cst$kw$event,cljs.core.cst$kw$back], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Selecionar",cljs.core.cst$kw$event,cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_avaliacoes_SLASH_show_DASH_avaliacoes_DASH_checkbox], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Nova Avalia\u00E7\u00E3o",cljs.core.cst$kw$event,cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_avaliacoes_SLASH_nova_DASH_avaliacao], null)], null);

break;
case "selecionando-avaliacoes":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Ok",cljs.core.cst$kw$event,cljs.core.cst$kw$ok], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Excluir",cljs.core.cst$kw$event,cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_avaliacoes_SLASH_delete_DASH_avaliacoes], null)], null);

break;
case "coleta":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Exportar para Excel",cljs.core.cst$kw$event,cljs.core.cst$kw$export_DASH_to_DASH_csv], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Voltar",cljs.core.cst$kw$event,cljs.core.cst$kw$back], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Editar",cljs.core.cst$kw$event,cljs.core.cst$kw$edit], null)], null);

break;
case "edit-coleta":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Pronto",cljs.core.cst$kw$event,cljs.core.cst$kw$ok], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Cancelar",cljs.core.cst$kw$event,cljs.core.cst$kw$cancel], null)], null);

break;
case "relatorio":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Voltar",cljs.core.cst$kw$event,cljs.core.cst$kw$back], null)], null);

break;
case "ellipses":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Voltar",cljs.core.cst$kw$event,cljs.core.cst$kw$back], null)], null);

break;
case "ellipses-config":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Voltar",cljs.core.cst$kw$event,cljs.core.cst$kw$back], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Sem a\u00E7\u00F5es pra essa tela"], null)], null);

}
});
var G__26266_26270 = cljs.core.cst$kw$react_DASH_med$routes_SLASH_actions;
var G__26267_26271 = cljs.core.cst$kw$_LT__DASH_;
var G__26268_26272 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_state], null);
var G__26269_26273 = react_med.routes.actions;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26266_26270,G__26267_26271,G__26268_26272,G__26269_26273) : re_frame.core.reg_sub.call(null,G__26266_26270,G__26267_26271,G__26268_26272,G__26269_26273));
react_med.routes.selected_view = (function react_med$routes$selected_view(){
var G__26274 = (function (){var G__26275 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_state], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__26275) : react_med.util._LT_sub.call(null,G__26275));
})();
switch (G__26274) {
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
case "ellipses":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.view], null);

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
