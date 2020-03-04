// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.screens.lista_pacientes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('react_med.shell_components');
goog.require('react_med.util');
react_med.screens.lista_pacientes.global$module$checkbox = goog.global["Checkbox"];
react_med.screens.lista_pacientes.global$module$menu_item = goog.global["MenuItem"];
react_med.screens.lista_pacientes.global$module$menu_list = goog.global["MenuList"];
react_med.screens.lista_pacientes.pacientes = (function react_med$screens$lista_pacientes$pacientes(app_state){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null)));
});
var G__20245_20247 = cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_pacientes;
var G__20246_20248 = react_med.screens.lista_pacientes.pacientes;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20245_20247,G__20246_20248) : re_frame.core.reg_sub.call(null,G__20245_20247,G__20246_20248));
react_med.screens.lista_pacientes.checkboxed_patients = (function react_med$screens$lista_pacientes$checkboxed_patients(app_state){
var patients = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null));
var checks = (function (){var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return react_med.util.repeat_as(patients,false);
}
})();
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (patients,checks){
return (function (p,c){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,cljs.core.cst$kw$checked_QMARK_,c);
});})(patients,checks))
,patients,checks));
});
var G__20249_20251 = cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_checkboxed_DASH_patients;
var G__20250_20252 = react_med.screens.lista_pacientes.checkboxed_patients;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20249_20251,G__20250_20252) : re_frame.core.reg_sub.call(null,G__20249_20251,G__20250_20252));
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.lista_pacientes.seleciona_paciente = (function react_med$screens$lista_pacientes$seleciona_paciente(app_state,p__20253){
var vec__20254 = p__20253;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20254,(0),null);
var paciente_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20254,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"info"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null),cljs.core.cst$sym$paciente_DASH_id)));

return debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(app_state,cljs.core.cst$sym$app_DASH_state,(2)),(function (){var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),"info"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"info"),(1)),(function (){var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})()),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null),cljs.core.cst$sym$paciente_DASH_id),(0));
}catch (e20257){var e = e20257;
throw e;
}});
} else {
/**
 * Entrar na tela de detalhes do paciente selecionado.
 */
react_med.screens.lista_pacientes.seleciona_paciente = (function react_med$screens$lista_pacientes$seleciona_paciente(app_state,p__20258){
var vec__20259 = p__20258;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20259,(0),null);
var paciente_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20259,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"info"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null),paciente_id);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_seleciona_DASH_paciente,react_med.screens.lista_pacientes.seleciona_paciente);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.lista_pacientes.novo_paciente = (function react_med$screens$lista_pacientes$novo_paciente(app_state,p__20262){
var vec__20263 = p__20262;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20263,(0),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$new_DASH_id,cljs.core.list(cljs.core.cst$sym$count,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null)))], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$new_DASH_id], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$sym$new_DASH_id,cljs.core.cst$kw$nome,"Novo Paciente",cljs.core.cst$kw$nascimento,"1900-01-01"], null)),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"edit-info"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null),cljs.core.cst$sym$new_DASH_id))));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var new_id = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.count((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$count,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null))),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
return debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(app_state,cljs.core.cst$sym$app_DASH_state,(4)),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$new_DASH_id,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$new_DASH_id], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,new_id,cljs.core.cst$kw$nome,"Novo Paciente",cljs.core.cst$kw$nascimento,"1900-01-01"], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$sym$new_DASH_id,cljs.core.cst$kw$nome,"Novo Paciente",cljs.core.cst$kw$nascimento,"1900-01-01"], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})()),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$new_DASH_id], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$sym$new_DASH_id,cljs.core.cst$kw$nome,"Novo Paciente",cljs.core.cst$kw$nascimento,"1900-01-01"], null)),(3)),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),"edit-info"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"edit-info"),(2)),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$new_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})()),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null),cljs.core.cst$sym$new_DASH_id),(1));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$new_DASH_id,cljs.core.list(cljs.core.cst$sym$count,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null)))], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null),cljs.core.cst$sym$new_DASH_id))),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20266){var e = e20266;
throw e;
}});
} else {
react_med.screens.lista_pacientes.novo_paciente = (function react_med$screens$lista_pacientes$novo_paciente(app_state,p__20267){
var vec__20268 = p__20267;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20268,(0),null);
var new_id = cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null)));
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,new_id], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,new_id,cljs.core.cst$kw$nome,"Novo Paciente",cljs.core.cst$kw$nascimento,"1900-01-01"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"edit-info"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null),new_id);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_novo_DASH_paciente,react_med.screens.lista_pacientes.novo_paciente);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.lista_pacientes.selecionar_pacientes = (function react_med$screens$lista_pacientes$selecionar_pacientes(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$patients,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null))], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"selecionando-pacientes"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$patients,false)))));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var patients = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
return debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(app_state,cljs.core.cst$sym$app_DASH_state,(3)),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),"selecionando-pacientes"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"selecionando-pacientes"),(2)),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = react_med.util.repeat_as((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = patients;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$patients,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$patients,false),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})()),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$patients,false)),(1));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$patients,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null))], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$patients,false)))),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20271){var e = e20271;
throw e;
}});
} else {
/**
 * Mostrar checkboxes ao lado dos nomes dos pacientes.
 */
react_med.screens.lista_pacientes.selecionar_pacientes = (function react_med$screens$lista_pacientes$selecionar_pacientes(app_state){
var patients = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null));
return cljs.core.assoc_in(cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"selecionando-pacientes"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null),react_med.util.repeat_as(patients,false));
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_selecionar_DASH_pacientes,react_med.screens.lista_pacientes.selecionar_pacientes);
react_med.screens.lista_pacientes.list_actions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Novo",cljs.core.cst$kw$event,cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_novo_DASH_paciente], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Selecionar",cljs.core.cst$kw$event,cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_selecionar_DASH_pacientes], null)], null);
react_med.screens.lista_pacientes.list_component = (function react_med$screens$lista_pacientes$list_component(){
var pacientes = (function (){var G__20272 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_pacientes], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20272) : react_med.util._LT_sub.call(null,G__20272));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_pacientes.global$module$menu_list,((cljs.core.empty_QMARK_(pacientes))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_pacientes.global$module$menu_item,"Nenhum paciente cadastrado ainda."], null):cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pacientes){
return (function (paciente){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_pacientes.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,((function (pacientes){
return (function (){
var G__20273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_seleciona_DASH_paciente,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(paciente)], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20273) : react_med.util._GT_evt.call(null,G__20273));
});})(pacientes))
], null),cljs.core.cst$kw$nome.cljs$core$IFn$_invoke$arity$1(paciente)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$nome.cljs$core$IFn$_invoke$arity$1(paciente)], null));
});})(pacientes))
,pacientes))], null);
});
react_med.screens.lista_pacientes.view = (function react_med$screens$lista_pacientes$view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_pacientes.list_component], null)], null)], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.lista_pacientes.check_paciente = (function react_med$screens$lista_pacientes$check_paciente(app_state,p__20274){
var vec__20275 = p__20274;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20275,(0),null);
var paciente_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20275,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$patients,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null)),cljs.core.cst$sym$checks,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null))], null),cljs.core.list(cljs.core.cst$sym$as_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$patients),cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checks)),cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$patients,false))),cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients,cljs.core.cst$sym$paciente_DASH_id], null),cljs.core.cst$sym$not))));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var patients = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var checks = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var $ = (function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var $__$1 = (function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.count((function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = patients;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$patients,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$patients),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.count((function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = checks;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$checks,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checks),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$patients),cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checks)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})())?(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = $;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$$,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})():(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.assoc_in((function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = $;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$$,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = react_med.util.repeat_as((function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = patients;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$patients,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$patients,false),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$patients,false)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$patients),cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checks)),cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$patients,false))),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = $__$1;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$$,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients,(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients,cljs.core.cst$sym$paciente_DASH_id], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.not;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$not,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients,cljs.core.cst$sym$paciente_DASH_id], null),cljs.core.cst$sym$not),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$as_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$patients),cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checks)),cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$patients,false))),cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients,cljs.core.cst$sym$paciente_DASH_id], null),cljs.core.cst$sym$not)),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$patients,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null)),cljs.core.cst$sym$checks,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null))], null),cljs.core.list(cljs.core.cst$sym$as_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$patients),cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checks)),cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$patients,false))),cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients,cljs.core.cst$sym$paciente_DASH_id], null),cljs.core.cst$sym$not))),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20278){var e = e20278;
throw e;
}});
} else {
react_med.screens.lista_pacientes.check_paciente = (function react_med$screens$lista_pacientes$check_paciente(app_state,p__20279){
var vec__20280 = p__20279;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20280,(0),null);
var paciente_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20280,(1),null);
var patients = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null));
var checks = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null));
var $ = app_state;
var $__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(patients),cljs.core.count(checks)))?$:cljs.core.assoc_in($,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null),react_med.util.repeat_as(patients,false)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients,paciente_id], null),cljs.core.not);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_check_DASH_paciente,react_med.screens.lista_pacientes.check_paciente);
react_med.screens.lista_pacientes.selecionando_component = (function react_med$screens$lista_pacientes$selecionando_component(){
var pacientes = (function (){var G__20283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_checkboxed_DASH_patients], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20283) : react_med.util._LT_sub.call(null,G__20283));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_pacientes.global$module$menu_list,((cljs.core.empty_QMARK_(pacientes))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_pacientes.global$module$menu_item,"Nenhum paciente cadastrado ainda."], null):cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pacientes){
return (function (p__20284){
var map__20285 = p__20284;
var map__20285__$1 = (((((!((map__20285 == null))))?(((((map__20285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20285):map__20285);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20285__$1,cljs.core.cst$kw$id);
var nome = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20285__$1,cljs.core.cst$kw$nome);
var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20285__$1,cljs.core.cst$kw$checked_QMARK_);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_pacientes.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,((function (map__20285,map__20285__$1,id,nome,checked_QMARK_,pacientes){
return (function (){
var G__20287 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_check_DASH_paciente,id], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20287) : react_med.util._GT_evt.call(null,G__20287));
});})(map__20285,map__20285__$1,id,nome,checked_QMARK_,pacientes))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_pacientes.global$module$checkbox,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$checked,checked_QMARK_,cljs.core.cst$kw$tabIndex,(-1)], null)], null),nome], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,nome], null));
});})(pacientes))
,pacientes))], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.lista_pacientes.delete_patients = (function react_med$screens$lista_pacientes$delete_patients(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pats,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null)),cljs.core.cst$sym$checks,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null)),cljs.core.cst$sym$patients,cljs.core.list(cljs.core.cst$sym$map,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$p,cljs.core.cst$kw$checked_QMARK_,cljs.core.cst$sym$c)),cljs.core.cst$sym$pats,cljs.core.cst$sym$checks),cljs.core.cst$sym$checked_DASH_patients,cljs.core.list(cljs.core.cst$sym$filter,cljs.core.cst$kw$checked_QMARK_,cljs.core.cst$sym$patients),cljs.core.cst$sym$confirm_DASH_text,cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checked_DASH_patients),(0),"Nenhum paciente selecionado.",(1),"Tem certeza que quer excluir esse paciente?","Tem certeza que quer excluir os seguintes pacientes?"),cljs.core.cst$sym$names,cljs.core.list(cljs.core.cst$sym$reduce,cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$map,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_1], null),cljs.core.list(cljs.core.cst$sym$str,"\n- ",cljs.core.cst$sym$_PERCENT_1)),cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$nome,cljs.core.cst$sym$checked_DASH_patients))),cljs.core.cst$sym$ids,cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$id,cljs.core.cst$sym$checked_DASH_patients)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$js_SLASH_confirm,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$confirm_DASH_text,cljs.core.cst$sym$names))),cljs.core.cst$sym$app_DASH_state,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.list(cljs.core.cst$sym$reduce,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_1,cljs.core.cst$sym$_PERCENT_2], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$_PERCENT_1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$_PERCENT_2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delete_QMARK_,true], null))),cljs.core.cst$sym$app_DASH_state,cljs.core.cst$sym$ids),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"pacientes"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),false),cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui], null),cljs.core.cst$sym$dissoc,cljs.core.cst$kw$checkboxed_DASH_patients)))));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var pats = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var checks = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var patients = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = ((function (opts__19887__auto____$2,opts__19887__auto____$1,pats,checks,opts__19887__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p,c){
var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = p;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$p,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$checked_QMARK_,(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = c;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$c,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$p,cljs.core.cst$kw$checked_QMARK_,cljs.core.cst$sym$c),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
});})(opts__19887__auto____$2,opts__19887__auto____$1,pats,checks,opts__19887__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$p,cljs.core.cst$kw$checked_QMARK_,cljs.core.cst$sym$c)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = pats;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$pats,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = checks;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$checks,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$map,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$p,cljs.core.cst$kw$checked_QMARK_,cljs.core.cst$sym$c)),cljs.core.cst$sym$pats,cljs.core.cst$sym$checks),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var checked_patients = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$checked_QMARK_,(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = patients;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$patients,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$filter,cljs.core.cst$kw$checked_QMARK_,cljs.core.cst$sym$patients),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var confirm_text = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var G__20292 = (function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.count((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = checked_patients;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$checked_DASH_patients,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checked_DASH_patients),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})();
switch (G__20292) {
case (0):
return "Nenhum paciente selecionado.";

break;
case (1):
return "Tem certeza que quer excluir esse paciente?";

break;
default:
return "Tem certeza que quer excluir os seguintes pacientes?";

}
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checked_DASH_patients),(0),"Nenhum paciente selecionado.",(1),"Tem certeza que quer excluir esse paciente?","Tem certeza que quer excluir os seguintes pacientes?"),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var names = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.str;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$str,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = ((function (opts__19887__auto____$3,opts__19887__auto____$2,opts__19887__auto____$1,pats,checks,patients,checked_patients,confirm_text,opts__19887__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__20288_SHARP_){
var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = ["\n- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = p1__20288_SHARP_;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$p1__20288_SHARP_,cljs.core.cst$kw$indent_DASH_level,(6)], null));

return result__19888__auto__;
})())].join('');
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$str,"\n- ",cljs.core.cst$sym$p1__20288_SHARP_),cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
});})(opts__19887__auto____$3,opts__19887__auto____$2,opts__19887__auto____$1,pats,checks,patients,checked_patients,confirm_text,opts__19887__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__20288_SHARP_], null),cljs.core.list(cljs.core.cst$sym$str,"\n- ",cljs.core.cst$sym$p1__20288_SHARP_)),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nome,(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = checked_patients;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$checked_DASH_patients,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$nome,cljs.core.cst$sym$checked_DASH_patients),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$map,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__20288_SHARP_], null),cljs.core.list(cljs.core.cst$sym$str,"\n- ",cljs.core.cst$sym$p1__20288_SHARP_)),cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$nome,cljs.core.cst$sym$checked_DASH_patients)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$reduce,cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$map,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__20288_SHARP_], null),cljs.core.list(cljs.core.cst$sym$str,"\n- ",cljs.core.cst$sym$p1__20288_SHARP_)),cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$nome,cljs.core.cst$sym$checked_DASH_patients))),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var ids = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = checked_patients;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$checked_DASH_patients,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$id,cljs.core.cst$sym$checked_DASH_patients),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.not((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = confirm((function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = confirm_text;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$confirm_DASH_text,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = names;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$names,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})())].join('');
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$confirm_DASH_text,cljs.core.cst$sym$names),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$js_SLASH_confirm,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$confirm_DASH_text,cljs.core.cst$sym$names)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$js_SLASH_confirm,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$confirm_DASH_text,cljs.core.cst$sym$names))),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})())?(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})():debux.common.util.spy_first(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = ((function (opts__19887__auto____$2,opts__19887__auto____$1,pats,checks,patients,checked_patients,confirm_text,names,ids,opts__19887__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__20289_SHARP_,p2__20290_SHARP_){
var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.assoc_in((function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = p1__20289_SHARP_;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$p1__20289_SHARP_,cljs.core.cst$kw$indent_DASH_level,(8)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = p2__20290_SHARP_;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$p2__20290_SHARP_,cljs.core.cst$kw$indent_DASH_level,(9)], null));

return result__19888__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$p2__20290_SHARP_], null),cljs.core.cst$kw$indent_DASH_level,(8)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delete_QMARK_,true], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delete_QMARK_,true], null),cljs.core.cst$kw$indent_DASH_level,(8)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$p1__20289_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$p2__20290_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delete_QMARK_,true], null)),cljs.core.cst$kw$indent_DASH_level,(7)], null));

return result__19888__auto__;
});})(opts__19887__auto____$2,opts__19887__auto____$1,pats,checks,patients,checked_patients,confirm_text,names,ids,opts__19887__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__20289_SHARP_,cljs.core.cst$sym$p2__20290_SHARP_], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$p1__20289_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$p2__20290_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delete_QMARK_,true], null))),cljs.core.cst$kw$indent_DASH_level,(6)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(6)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = ids;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$ids,cljs.core.cst$kw$indent_DASH_level,(6)], null));

return result__19888__auto__;
})()),cljs.core.list(cljs.core.cst$sym$reduce,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__20289_SHARP_,cljs.core.cst$sym$p2__20290_SHARP_], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$p1__20289_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$p2__20290_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delete_QMARK_,true], null))),cljs.core.cst$sym$app_DASH_state,cljs.core.cst$sym$ids),(5)),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})(),"pacientes"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"pacientes"),(4)),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),false),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),false),(3)),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$dissoc,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$checkboxed_DASH_patients),cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui], null),cljs.core.cst$sym$dissoc,cljs.core.cst$kw$checkboxed_DASH_patients),(2)));
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$js_SLASH_confirm,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$confirm_DASH_text,cljs.core.cst$sym$names))),cljs.core.cst$sym$app_DASH_state,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui], null),cljs.core.cst$sym$dissoc,cljs.core.cst$kw$checkboxed_DASH_patients))),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pats,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null)),cljs.core.cst$sym$checks,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null)),cljs.core.cst$sym$patients,cljs.core.list(cljs.core.cst$sym$map,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$p,cljs.core.cst$kw$checked_QMARK_,cljs.core.cst$sym$c)),cljs.core.cst$sym$pats,cljs.core.cst$sym$checks),cljs.core.cst$sym$checked_DASH_patients,cljs.core.list(cljs.core.cst$sym$filter,cljs.core.cst$kw$checked_QMARK_,cljs.core.cst$sym$patients),cljs.core.cst$sym$confirm_DASH_text,cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checked_DASH_patients),(0),"Nenhum paciente selecionado.",(1),"Tem certeza que quer excluir esse paciente?","Tem certeza que quer excluir os seguintes pacientes?"),cljs.core.cst$sym$names,cljs.core.list(cljs.core.cst$sym$reduce,cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$map,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__20288_SHARP_], null),cljs.core.list(cljs.core.cst$sym$str,"\n- ",cljs.core.cst$sym$p1__20288_SHARP_)),cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$nome,cljs.core.cst$sym$checked_DASH_patients))),cljs.core.cst$sym$ids,cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$id,cljs.core.cst$sym$checked_DASH_patients)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$js_SLASH_confirm,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$confirm_DASH_text,cljs.core.cst$sym$names))),cljs.core.cst$sym$app_DASH_state,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui], null),cljs.core.cst$sym$dissoc,cljs.core.cst$kw$checkboxed_DASH_patients)))),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20291){var e = e20291;
throw e;
}});
} else {
react_med.screens.lista_pacientes.delete_patients = (function react_med$screens$lista_pacientes$delete_patients(app_state){
var pats = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients], null));
var checks = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_patients], null));
var patients = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (pats,checks){
return (function (p,c){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,cljs.core.cst$kw$checked_QMARK_,c);
});})(pats,checks))
,pats,checks);
var checked_patients = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$checked_QMARK_,patients);
var confirm_text = (function (){var G__20293 = cljs.core.count(checked_patients);
switch (G__20293) {
case (0):
return "Nenhum paciente selecionado.";

break;
case (1):
return "Tem certeza que quer excluir esse paciente?";

break;
default:
return "Tem certeza que quer excluir os seguintes pacientes?";

}
})();
var names = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pats,checks,patients,checked_patients,confirm_text){
return (function (p1__20288_SHARP_){
return ["\n- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20288_SHARP_)].join('');
});})(pats,checks,patients,checked_patients,confirm_text))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nome,checked_patients)));
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,checked_patients);
if(cljs.core.not(confirm([cljs.core.str.cljs$core$IFn$_invoke$arity$1(confirm_text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(names)].join('')))){
return app_state;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pats,checks,patients,checked_patients,confirm_text,names,ids){
return (function (p1__20289_SHARP_,p2__20290_SHARP_){
return cljs.core.assoc_in(p1__20289_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,p2__20290_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delete_QMARK_,true], null));
});})(pats,checks,patients,checked_patients,confirm_text,names,ids))
,app_state,ids),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"pacientes"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui], null),cljs.core.dissoc,cljs.core.cst$kw$checkboxed_DASH_patients);
}
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_delete_DASH_patients,react_med.screens.lista_pacientes.delete_patients);
react_med.screens.lista_pacientes.selecting_actions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Ok",cljs.core.cst$kw$event,cljs.core.cst$kw$ok], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Excluir",cljs.core.cst$kw$event,cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_delete_DASH_patients], null)], null);
react_med.screens.lista_pacientes.selecting_view = (function react_med$screens$lista_pacientes$selecting_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_pacientes.selecionando_component], null)], null)], null);
});
