// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.routes.set_route = (function react_med$routes$set_route(app_state,p__20437){
var vec__20438 = p__20437;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20438,(0),null);
var ui_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20438,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),cljs.core.cst$sym$ui_DASH_route));

var opts__19692__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core.assoc_in((function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = ui_route;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$ui_DASH_route,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),cljs.core.cst$sym$ui_DASH_route),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19693__auto__;
}catch (e20441){var e = e20441;
throw e;
}});
} else {
react_med.routes.set_route = (function react_med$routes$set_route(app_state,p__20442){
var vec__20443 = p__20442;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20443,(0),null);
var ui_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20443,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),ui_route);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$routes_SLASH_set_DASH_route,react_med.routes.set_route);
react_med.routes.current__GT_next_state = (function react_med$routes$current__GT_next_state(state_machine,current_state,transition){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_machine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_state,transition], null));
});
react_med.routes.next_state_handler = (function react_med$routes$next_state_handler(db,p__20446){
var vec__20447 = p__20446;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20447,(0),null);
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

var opts__19692__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = react_med.routes.next_state_handler((function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = event;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$event,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$next_DASH_state_DASH_handler,cljs.core.cst$sym$db,cljs.core.cst$sym$event),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19693__auto__;
}catch (e20450){var e = e20450;
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

var opts__19692__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = (function (){var domain_snapshot = (function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var opts__19692__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19693__auto__;
})(),cljs.core.cst$kw$domain);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$domain),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19693__auto__;
})();
var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core.assoc_in((function (){var opts__19692__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = domain_snapshot;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$domain_DASH_snapshot,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19693__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null),cljs.core.cst$sym$domain_DASH_snapshot),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$domain_DASH_snapshot,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$domain)], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null),cljs.core.cst$sym$domain_DASH_snapshot)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19693__auto__;
}catch (e20451){var e = e20451;
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

var opts__19692__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = (function (){var temp__5733__auto__ = (function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19692__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19693__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19693__auto__;
})();
if(cljs.core.truth_(temp__5733__auto__)){
var old_domain = temp__5733__auto__;
return debux.common.util.spy_first(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(debux.common.util.spy_first(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(debux.common.util.spy_first(app_state,cljs.core.cst$sym$app_DASH_state,(3)),cljs.core.cst$kw$domain,(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = old_domain;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$old_DASH_domain,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19693__auto__;
})()),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$kw$domain,cljs.core.cst$sym$old_DASH_domain),(2)),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19693__auto__;
})(),cljs.core.cst$kw$backup),cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null),cljs.core.cst$sym$dissoc,cljs.core.cst$kw$backup),(1));
} else {
var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
}
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$old_DASH_domain,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$backup], null))], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null),cljs.core.cst$sym$dissoc,cljs.core.cst$kw$backup)),cljs.core.cst$sym$app_DASH_state),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19693__auto__;
}catch (e20452){var e = e20452;
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

var opts__19692__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),cljs.core.cst$kw$backup);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null),cljs.core.cst$sym$dissoc,cljs.core.cst$kw$backup),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19693__auto__;
}catch (e20453){var e = e20453;
throw e;
}});
} else {
react_med.routes.discard_backup = (function react_med$routes$discard_backup(app_state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain], null),cljs.core.dissoc,cljs.core.cst$kw$backup);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$routes_SLASH_discard_DASH_backup,react_med.routes.discard_backup);
react_med.routes.next_state_then = (function react_med$routes$next_state_then(events){
return (function (p__20454,p__20455){
var map__20456 = p__20454;
var map__20456__$1 = (((((!((map__20456 == null))))?(((((map__20456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20456):map__20456);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20456__$1,cljs.core.cst$kw$db);
var vec__20457 = p__20455;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20457,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20457,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,react_med.routes.next_state_handler(app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null)),cljs.core.cst$kw$dispatch_DASH_n,events], null);
});
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$edit,react_med.routes.next_state_then(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_backup_DASH_domain], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_close_DASH_actions_DASH_menu], null)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cancel,react_med.routes.next_state_then(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_restore_DASH_domain], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_close_DASH_actions_DASH_menu], null)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ok,react_med.routes.next_state_then(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_discard_DASH_backup], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$shell_DASH_components_SLASH_close_DASH_actions_DASH_menu], null)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$back,react_med.routes.next_state_then(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_restore_DASH_domain], null)], null)));
var G__20461_20463 = cljs.core.cst$kw$react_DASH_med$routes_SLASH_state;
var G__20462_20464 = ((function (G__20461_20463){
return (function (app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null));
});})(G__20461_20463))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20461_20463,G__20462_20464) : re_frame.core.reg_sub.call(null,G__20461_20463,G__20462_20464));
react_med.routes.state_machine = new cljs.core.PersistentArrayMap(null, 8, [null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$init,"info"], null),"pacientes",cljs.core.PersistentArrayMap.EMPTY,"info",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$edit,"edit-info",cljs.core.cst$kw$back,"pacientes"], null),"edit-info",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ok,"info",cljs.core.cst$kw$cancel,"info"], null),"avaliacoes",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$back,"pacientes"], null),"coleta",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$back,"info",cljs.core.cst$kw$edit,"edit-avaliacao"], null),"edit-coleta",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ok,"coleta",cljs.core.cst$kw$cancel,"coleta"], null),"relatorio",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$back,"info"], null)], null);
react_med.routes.title = (function react_med$routes$title(p__20465){
var vec__20466 = p__20465;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20466,(0),null);
var selected_patient = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20466,(1),null);
var patient_name = cljs.core.cst$kw$nome.cljs$core$IFn$_invoke$arity$1(selected_patient);
var preposição = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sexo.cljs$core$IFn$_invoke$arity$1(selected_patient),"Feminino"))?" da ":" do ");
var G__20469 = state;
switch (G__20469) {
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
var G__20471_20477 = cljs.core.cst$kw$react_DASH_med$routes_SLASH_title;
var G__20472_20478 = cljs.core.cst$kw$_LT__DASH_;
var G__20473_20479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_state], null);
var G__20474_20480 = cljs.core.cst$kw$_LT__DASH_;
var G__20475_20481 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_selected_DASH_patient], null);
var G__20476_20482 = react_med.routes.title;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__20471_20477,G__20472_20478,G__20473_20479,G__20474_20480,G__20475_20481,G__20476_20482) : re_frame.core.reg_sub.call(null,G__20471_20477,G__20472_20478,G__20473_20479,G__20474_20480,G__20475_20481,G__20476_20482));
react_med.routes.tab_title = (function react_med$routes$tab_title(screen){
var G__20483 = screen;
switch (G__20483) {
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
var state__GT_tab = (function (p1__20485_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,react_med.routes.tab_title(p1__20485_SHARP_),cljs.core.cst$kw$state,p1__20485_SHARP_], null));
});
var G__20486 = state;
switch (G__20486) {
case "info":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__GT_tab("info"),state__GT_tab("avaliacoes")], null);

break;
case "edit-info":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__GT_tab("info"),state__GT_tab("avaliacoes")], null);

break;
case "relatorio":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__GT_tab("coleta"),state__GT_tab("relatorio")], null);

break;
default:
return null;

}
});
var G__20488_20492 = cljs.core.cst$kw$react_DASH_med$routes_SLASH_tabs;
var G__20489_20493 = cljs.core.cst$kw$_LT__DASH_;
var G__20490_20494 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_state], null);
var G__20491_20495 = react_med.routes.tabs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__20488_20492,G__20489_20493,G__20490_20494,G__20491_20495) : re_frame.core.reg_sub.call(null,G__20488_20492,G__20489_20493,G__20490_20494,G__20491_20495));
react_med.routes.side_menu = (function react_med$routes$side_menu(p__20498){
var vec__20499 = p__20498;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20499,(0),null);
var selected_patient = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20499,(1),null);
var selected_avaliacao = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20499,(2),null);
var vec__20502 = cljs.core.re_find(/\d+-(\d+)-(\d+)/,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(selected_avaliacao));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20502,(0),null);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20502,(1),null);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20502,(2),null);
var model__GT_menu = ((function (vec__20502,_,month,day,vec__20499,state,selected_patient,selected_avaliacao){
return (function react_med$routes$side_menu_$_m__GT_m(p__20505){
var map__20506 = p__20505;
var map__20506__$1 = (((((!((map__20506 == null))))?(((((map__20506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20506):map__20506);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20506__$1,cljs.core.cst$kw$s);
var sub_menus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20506__$1,cljs.core.cst$kw$sub_DASH_menus);
var extra_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20506__$1,cljs.core.cst$kw$extra_DASH_label);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$label,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(react_med.routes.tab_title(s)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_label)].join(''),cljs.core.cst$kw$state,s,cljs.core.cst$kw$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,s),cljs.core.cst$kw$sub_DASH_menus,cljs.core.map.cljs$core$IFn$_invoke$arity$2(react_med$routes$side_menu_$_m__GT_m,sub_menus)], null);
});})(vec__20502,_,month,day,vec__20499,state,selected_patient,selected_avaliacao))
;
var menu_model = (function (){var pred__20508 = ((function (vec__20502,_,month,day,model__GT_menu,vec__20499,state,selected_patient,selected_avaliacao){
return (function (p1__20496_SHARP_,p2__20497_SHARP_){
return (p1__20496_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20496_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__20497_SHARP_) : p1__20496_SHARP_.call(null,p2__20497_SHARP_));
});})(vec__20502,_,month,day,model__GT_menu,vec__20499,state,selected_patient,selected_avaliacao))
;
var expr__20509 = state;
if(cljs.core.truth_(pred__20508(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["pacientes",null], null), null),expr__20509))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"pacientes"], null)], null);
} else {
if(cljs.core.truth_(pred__20508(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["info",null,"avaliacoes",null,"edit-info",null], null), null),expr__20509))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$s,"pacientes",cljs.core.cst$kw$extra_DASH_label,(cljs.core.truth_(selected_patient)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$nome.cljs$core$IFn$_invoke$arity$1(selected_patient)),")"].join(''):null),cljs.core.cst$kw$sub_DASH_menus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"info"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$s,"avaliacoes",cljs.core.cst$kw$extra_DASH_label,(cljs.core.truth_(selected_avaliacao)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),")"].join(''):null)], null)], null)], null)], null);
} else {
if(cljs.core.truth_(pred__20508(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["coleta",null,"relatorio",null,"edit-coleta",null], null), null),expr__20509))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$s,"pacientes",cljs.core.cst$kw$extra_DASH_label,(cljs.core.truth_(selected_patient)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$nome.cljs$core$IFn$_invoke$arity$1(selected_patient)),")"].join(''):null),cljs.core.cst$kw$sub_DASH_menus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"info"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$s,"avaliacoes",cljs.core.cst$kw$extra_DASH_label,(cljs.core.truth_(selected_avaliacao)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),")"].join(''):null),cljs.core.cst$kw$sub_DASH_menus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"coleta"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"relatorio"], null)], null)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,"pacientes"], null)], null);
}
}
}
})();
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(model__GT_menu,menu_model);
});
var G__20511_20519 = cljs.core.cst$kw$react_DASH_med$routes_SLASH_side_DASH_menu;
var G__20512_20520 = cljs.core.cst$kw$_LT__DASH_;
var G__20513_20521 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_state], null);
var G__20514_20522 = cljs.core.cst$kw$_LT__DASH_;
var G__20515_20523 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_selected_DASH_patient], null);
var G__20516_20524 = cljs.core.cst$kw$_LT__DASH_;
var G__20517_20525 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_selected_DASH_avaliacao], null);
var G__20518_20526 = react_med.routes.side_menu;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__20511_20519,G__20512_20520,G__20513_20521,G__20514_20522,G__20515_20523,G__20516_20524,G__20517_20525,G__20518_20526) : re_frame.core.reg_sub.call(null,G__20511_20519,G__20512_20520,G__20513_20521,G__20514_20522,G__20515_20523,G__20516_20524,G__20517_20525,G__20518_20526));
react_med.routes.actions = (function react_med$routes$actions(state){
var G__20527 = state;
switch (G__20527) {
case "relatorio":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Voltar",cljs.core.cst$kw$event,cljs.core.cst$kw$back], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Sem a\u00E7\u00F5es pra essa tela"], null)], null);

}
});
var G__20529_20533 = cljs.core.cst$kw$react_DASH_med$routes_SLASH_actions;
var G__20530_20534 = cljs.core.cst$kw$_LT__DASH_;
var G__20531_20535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_state], null);
var G__20532_20536 = react_med.routes.actions;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__20529_20533,G__20530_20534,G__20531_20535,G__20532_20536) : re_frame.core.reg_sub.call(null,G__20529_20533,G__20530_20534,G__20531_20535,G__20532_20536));
react_med.routes.selected_view = (function react_med$routes$selected_view(){
var G__20537 = (function (){var G__20538 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_state], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20538) : react_med.util._LT_sub.call(null,G__20538));
})();
switch (G__20537) {
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
