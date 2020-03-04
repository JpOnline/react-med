// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.screens.lista_avaliacoes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('react_med.shell_components');
goog.require('react_med.util');
goog.require('reagent.core');
goog.require('tick.alpha.api');
react_med.screens.lista_avaliacoes.global$module$checkbox = goog.global["Checkbox"];
react_med.screens.lista_avaliacoes.global$module$menu_item = goog.global["MenuItem"];
react_med.screens.lista_avaliacoes.global$module$menu_list = goog.global["MenuList"];
react_med.screens.lista_avaliacoes.avaliacoes = (function react_med$screens$lista_avaliacoes$avaliacoes(app_state){
var paciente_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null));
var avaliacoes = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,paciente_id,cljs.core.cst$kw$avaliacoes], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,avaliacoes);
});
var G__25522_25524 = cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_avaliacoes_SLASH_avaliacoes;
var G__25523_25525 = react_med.screens.lista_avaliacoes.avaliacoes;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25522_25524,G__25523_25525) : re_frame.core.reg_sub.call(null,G__25522_25524,G__25523_25525));
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.lista_avaliacoes.show_avaliacoes_checkbox = (function react_med$screens$lista_avaliacoes$show_avaliacoes_checkbox(app_state,p__25526){
var vec__25527 = p__25526;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25527,(0),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null)),cljs.core.cst$sym$avaliacoes,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null))], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"selecionando-avaliacoes"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$avaliacoes,false)))));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var paciente_id = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var avaliacoes = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$avaliacoes], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
return debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(app_state,cljs.core.cst$sym$app_DASH_state,(3)),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),"selecionando-avaliacoes"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"selecionando-avaliacoes"),(2)),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = react_med.util.repeat_as((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = avaliacoes;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$avaliacoes,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$avaliacoes,false),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})()),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$avaliacoes,false)),(1));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null)),cljs.core.cst$sym$avaliacoes,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null))], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$avaliacoes,false)))),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e25530){var e = e25530;
throw e;
}});
} else {
react_med.screens.lista_avaliacoes.show_avaliacoes_checkbox = (function react_med$screens$lista_avaliacoes$show_avaliacoes_checkbox(app_state,p__25531){
var vec__25532 = p__25531;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25532,(0),null);
var paciente_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null));
var avaliacoes = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,paciente_id,cljs.core.cst$kw$avaliacoes], null));
return cljs.core.assoc_in(cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"selecionando-avaliacoes"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null),react_med.util.repeat_as(avaliacoes,false));
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_avaliacoes_SLASH_show_DASH_avaliacoes_DASH_checkbox,react_med.screens.lista_avaliacoes.show_avaliacoes_checkbox);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.lista_avaliacoes.nova_avaliacao = (function react_med$screens$lista_avaliacoes$nova_avaliacao(app_state,p__25535){
var vec__25536 = p__25535;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25536,(0),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null)),cljs.core.cst$sym$new_DASH_id,cljs.core.list(cljs.core.cst$sym$count,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null)))], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes,cljs.core.cst$sym$new_DASH_id], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$sym$new_DASH_id,cljs.core.cst$kw$data,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$tick_SLASH_date))], null)),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"edit-coleta"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null),cljs.core.cst$sym$new_DASH_id))));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var paciente_id = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var new_id = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.count((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$avaliacoes], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$count,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null))),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
return debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(app_state,cljs.core.cst$sym$app_DASH_state,(4)),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$avaliacoes,(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$new_DASH_id,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes,cljs.core.cst$sym$new_DASH_id], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,new_id,cljs.core.cst$kw$data,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tick.alpha.api.date.cljs$core$IFn$_invoke$arity$0())], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$sym$new_DASH_id,cljs.core.cst$kw$data,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$tick_SLASH_date))], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})()),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes,cljs.core.cst$sym$new_DASH_id], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$sym$new_DASH_id,cljs.core.cst$kw$data,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$tick_SLASH_date))], null)),(3)),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),"edit-coleta"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"edit-coleta"),(2)),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$new_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})()),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null),cljs.core.cst$sym$new_DASH_id),(1));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null)),cljs.core.cst$sym$new_DASH_id,cljs.core.list(cljs.core.cst$sym$count,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null)))], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null),cljs.core.cst$sym$new_DASH_id))),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e25539){var e = e25539;
throw e;
}});
} else {
react_med.screens.lista_avaliacoes.nova_avaliacao = (function react_med$screens$lista_avaliacoes$nova_avaliacao(app_state,p__25540){
var vec__25541 = p__25540;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25541,(0),null);
var paciente_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null));
var new_id = cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,paciente_id,cljs.core.cst$kw$avaliacoes], null)));
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,paciente_id,cljs.core.cst$kw$avaliacoes,new_id], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,new_id,cljs.core.cst$kw$data,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tick.alpha.api.date.cljs$core$IFn$_invoke$arity$0())], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"edit-coleta"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null),new_id);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_avaliacoes_SLASH_nova_DASH_avaliacao,react_med.screens.lista_avaliacoes.nova_avaliacao);
react_med.screens.lista_avaliacoes.date_str = (function react_med$screens$lista_avaliacoes$date_str(date){
var pad = (function (p1__25544_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25544_SHARP_)),(1))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25544_SHARP_)].join('');
} else {
return p1__25544_SHARP_;
}
});
var dd = pad(tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$1(date));
var MM = pad(tick.alpha.api.int$(tick.alpha.api.month.cljs$core$IFn$_invoke$arity$1(date)));
var yyyy = tick.alpha.api.int$(tick.alpha.api.year.cljs$core$IFn$_invoke$arity$1(date));
var day = tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$1(date);
var pt_week = cljs.core.PersistentArrayMap.createAsIfByAssoc([tick.alpha.api.MONDAY,"Segunda-feira",tick.alpha.api.TUESDAY,"Ter\u00E7a-feira",tick.alpha.api.WEDNESDAY,"Quarta-feira",tick.alpha.api.THURSDAY,"Quinta-feira",tick.alpha.api.FRIDAY,"Sexta-feira",tick.alpha.api.SATURDAY,"S\u00E1bado",tick.alpha.api.SUNDAY,"Domingo"]);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dd),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(MM),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(yyyy)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1((pt_week.cljs$core$IFn$_invoke$arity$1 ? pt_week.cljs$core$IFn$_invoke$arity$1(day) : pt_week.call(null,day))),")"].join('');
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.lista_avaliacoes.seleciona_avaliacao = (function react_med$screens$lista_avaliacoes$seleciona_avaliacao(app_state,p__25545){
var vec__25546 = p__25545;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25546,(0),null);
var avaliacao_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25546,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"coleta"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null),cljs.core.cst$sym$avaliacao_DASH_id)));

return debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(app_state,cljs.core.cst$sym$app_DASH_state,(2)),(function (){var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),"coleta"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"coleta"),(1)),(function (){var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = avaliacao_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$avaliacao_DASH_id,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})()),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null),cljs.core.cst$sym$avaliacao_DASH_id),(0));
}catch (e25549){var e = e25549;
throw e;
}});
} else {
/**
 * Entrar na tela de detalhes do paciente selecionado.
 */
react_med.screens.lista_avaliacoes.seleciona_avaliacao = (function react_med$screens$lista_avaliacoes$seleciona_avaliacao(app_state,p__25550){
var vec__25551 = p__25550;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25551,(0),null);
var avaliacao_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25551,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"coleta"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null),avaliacao_id);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_avaliacoes_SLASH_seleciona_DASH_avaliacao,react_med.screens.lista_avaliacoes.seleciona_avaliacao);
react_med.screens.lista_avaliacoes.list_component = (function react_med$screens$lista_avaliacoes$list_component(){
var paciente_selecionado = (function (){var G__25554 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_selected_DASH_patient], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__25554) : react_med.util._LT_sub.call(null,G__25554));
})();
var avaliacoes = (function (){var G__25555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_avaliacoes_SLASH_avaliacoes], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__25555) : react_med.util._LT_sub.call(null,G__25555));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_avaliacoes.global$module$menu_list,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Paciente n\u00E3o encontrado",cljs.core.cst$kw$nome.cljs$core$IFn$_invoke$arity$1(paciente_selecionado)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_avaliacoes.global$module$menu_item,"Nenhum paciente selecionado"], null):((cljs.core.empty_QMARK_(avaliacoes))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_avaliacoes.global$module$menu_item,"Nenhuma avalia\u00E7\u00E3o cadastrada."], null):cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paciente_selecionado,avaliacoes){
return (function (p__25556){
var map__25557 = p__25556;
var map__25557__$1 = (((((!((map__25557 == null))))?(((((map__25557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25557):map__25557);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25557__$1,cljs.core.cst$kw$data);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25557__$1,cljs.core.cst$kw$id);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_avaliacoes.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,((function (map__25557,map__25557__$1,data,id,paciente_selecionado,avaliacoes){
return (function (){
var G__25559 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_avaliacoes_SLASH_seleciona_DASH_avaliacao,id], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__25559) : react_med.util._GT_evt.call(null,G__25559));
});})(map__25557,map__25557__$1,data,id,paciente_selecionado,avaliacoes))
], null),react_med.screens.lista_avaliacoes.date_str(data)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});})(paciente_selecionado,avaliacoes))
,avaliacoes)
))], null);
});
react_med.screens.lista_avaliacoes.error_wrapper = (function react_med$screens$lista_avaliacoes$error_wrapper(component){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$if_DASH_error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"\uD83D\uDE22 Erro ao mostrar lista de avalia\u00E7\u00F5es."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,component], null)], null);
});
react_med.screens.lista_avaliacoes.view = (function react_med$screens$lista_avaliacoes$view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_avaliacoes.error_wrapper,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_avaliacoes.list_component], null)], null)], null)], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.lista_avaliacoes.delete_avaliacoes = (function react_med$screens$lista_avaliacoes$delete_avaliacoes(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null)),cljs.core.cst$sym$avals,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null)),cljs.core.cst$sym$checks,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null)),cljs.core.cst$sym$avaliacoes,cljs.core.list(cljs.core.cst$sym$map,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$p,cljs.core.cst$kw$checked_QMARK_,cljs.core.cst$sym$c)),cljs.core.cst$sym$avals,cljs.core.cst$sym$checks),cljs.core.cst$sym$checked_DASH_avaliacoes,cljs.core.list(cljs.core.cst$sym$filter,cljs.core.cst$kw$checked_QMARK_,cljs.core.cst$sym$avaliacoes),cljs.core.cst$sym$confirm_DASH_text,cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checked_DASH_avaliacoes),(0),"Nenhuma avalia\u00E7\u00E3o selecionada.",(1),"Tem certeza que quer excluir essa avalia\u00E7\u00E3o?","Tem certeza que quer excluir as seguintes avalia\u00E7\u00F5es?"),cljs.core.cst$sym$names,cljs.core.list(cljs.core.cst$sym$reduce,cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$map,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_1], null),cljs.core.list(cljs.core.cst$sym$str,"\n- ",cljs.core.cst$sym$_PERCENT_1)),cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$data,cljs.core.cst$sym$checked_DASH_avaliacoes))),cljs.core.cst$sym$ids,cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$id,cljs.core.cst$sym$checked_DASH_avaliacoes)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$js_SLASH_confirm,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$confirm_DASH_text,cljs.core.cst$sym$names))),cljs.core.cst$sym$app_DASH_state,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.list(cljs.core.cst$sym$reduce,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_1,cljs.core.cst$sym$_PERCENT_2], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$_PERCENT_1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes,cljs.core.cst$sym$_PERCENT_2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$deleted_QMARK_,true], null))),cljs.core.cst$sym$app_DASH_state,cljs.core.cst$sym$ids),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"avaliacoes"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),false),cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui], null),cljs.core.cst$sym$dissoc,cljs.core.cst$kw$checkboxed_DASH_avaliacoes)))));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var paciente_id = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var avals = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$avaliacoes], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var checks = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var avaliacoes = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = ((function (opts__19887__auto____$2,opts__19887__auto____$1,paciente_id,avals,checks,opts__19887__auto__,_PLUS_debux_dbg_opts_PLUS_){
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
});})(opts__19887__auto____$2,opts__19887__auto____$1,paciente_id,avals,checks,opts__19887__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$p,cljs.core.cst$kw$checked_QMARK_,cljs.core.cst$sym$c)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = avals;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$avals,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = checks;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$checks,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$map,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$p,cljs.core.cst$kw$checked_QMARK_,cljs.core.cst$sym$c)),cljs.core.cst$sym$avals,cljs.core.cst$sym$checks),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var checked_avaliacoes = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$checked_QMARK_,(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = avaliacoes;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$avaliacoes,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$filter,cljs.core.cst$kw$checked_QMARK_,cljs.core.cst$sym$avaliacoes),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var confirm_text = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var G__25564 = (function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.count((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = checked_avaliacoes;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$checked_DASH_avaliacoes,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checked_DASH_avaliacoes),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})();
switch (G__25564) {
case (0):
return "Nenhuma avalia\u00E7\u00E3o selecionada.";

break;
case (1):
return "Tem certeza que quer excluir essa avalia\u00E7\u00E3o?";

break;
default:
return "Tem certeza que quer excluir as seguintes avalia\u00E7\u00F5es?";

}
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checked_DASH_avaliacoes),(0),"Nenhuma avalia\u00E7\u00E3o selecionada.",(1),"Tem certeza que quer excluir essa avalia\u00E7\u00E3o?","Tem certeza que quer excluir as seguintes avalia\u00E7\u00F5es?"),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var names = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.str;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$str,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = ((function (opts__19887__auto____$3,opts__19887__auto____$2,opts__19887__auto____$1,paciente_id,avals,checks,avaliacoes,checked_avaliacoes,confirm_text,opts__19887__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__25560_SHARP_){
var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = ["\n- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = p1__25560_SHARP_;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$p1__25560_SHARP_,cljs.core.cst$kw$indent_DASH_level,(6)], null));

return result__19888__auto__;
})())].join('');
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$str,"\n- ",cljs.core.cst$sym$p1__25560_SHARP_),cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
});})(opts__19887__auto____$3,opts__19887__auto____$2,opts__19887__auto____$1,paciente_id,avals,checks,avaliacoes,checked_avaliacoes,confirm_text,opts__19887__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25560_SHARP_], null),cljs.core.list(cljs.core.cst$sym$str,"\n- ",cljs.core.cst$sym$p1__25560_SHARP_)),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$data,(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = checked_avaliacoes;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$checked_DASH_avaliacoes,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$data,cljs.core.cst$sym$checked_DASH_avaliacoes),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$map,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25560_SHARP_], null),cljs.core.list(cljs.core.cst$sym$str,"\n- ",cljs.core.cst$sym$p1__25560_SHARP_)),cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$data,cljs.core.cst$sym$checked_DASH_avaliacoes)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$reduce,cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$map,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25560_SHARP_], null),cljs.core.list(cljs.core.cst$sym$str,"\n- ",cljs.core.cst$sym$p1__25560_SHARP_)),cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$data,cljs.core.cst$sym$checked_DASH_avaliacoes))),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var ids = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = checked_avaliacoes;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$checked_DASH_avaliacoes,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$id,cljs.core.cst$sym$checked_DASH_avaliacoes),cljs.core.cst$kw$indent_DASH_level,(2)], null));

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
var result__19888__auto__ = ((function (opts__19887__auto____$2,opts__19887__auto____$1,paciente_id,avals,checks,avaliacoes,checked_avaliacoes,confirm_text,names,ids,opts__19887__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__25561_SHARP_,p2__25562_SHARP_){
var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.assoc_in((function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = p1__25561_SHARP_;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$p1__25561_SHARP_,cljs.core.cst$kw$indent_DASH_level,(8)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(9)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$avaliacoes,(function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = p2__25562_SHARP_;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$p2__25562_SHARP_,cljs.core.cst$kw$indent_DASH_level,(9)], null));

return result__19888__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes,cljs.core.cst$sym$p2__25562_SHARP_], null),cljs.core.cst$kw$indent_DASH_level,(8)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$deleted_QMARK_,true], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$deleted_QMARK_,true], null),cljs.core.cst$kw$indent_DASH_level,(8)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$p1__25561_SHARP_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes,cljs.core.cst$sym$p2__25562_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$deleted_QMARK_,true], null)),cljs.core.cst$kw$indent_DASH_level,(7)], null));

return result__19888__auto__;
});})(opts__19887__auto____$2,opts__19887__auto____$1,paciente_id,avals,checks,avaliacoes,checked_avaliacoes,confirm_text,names,ids,opts__19887__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25561_SHARP_,cljs.core.cst$sym$p2__25562_SHARP_], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$p1__25561_SHARP_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes,cljs.core.cst$sym$p2__25562_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$deleted_QMARK_,true], null))),cljs.core.cst$kw$indent_DASH_level,(6)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(6)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = ids;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$ids,cljs.core.cst$kw$indent_DASH_level,(6)], null));

return result__19888__auto__;
})()),cljs.core.list(cljs.core.cst$sym$reduce,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25561_SHARP_,cljs.core.cst$sym$p2__25562_SHARP_], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$p1__25561_SHARP_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes,cljs.core.cst$sym$p2__25562_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$deleted_QMARK_,true], null))),cljs.core.cst$sym$app_DASH_state,cljs.core.cst$sym$ids),(5)),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})(),"avaliacoes"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"avaliacoes"),(4)),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
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
})(),cljs.core.cst$kw$checkboxed_DASH_avaliacoes),cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui], null),cljs.core.cst$sym$dissoc,cljs.core.cst$kw$checkboxed_DASH_avaliacoes),(2)));
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$js_SLASH_confirm,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$confirm_DASH_text,cljs.core.cst$sym$names))),cljs.core.cst$sym$app_DASH_state,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui], null),cljs.core.cst$sym$dissoc,cljs.core.cst$kw$checkboxed_DASH_avaliacoes))),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null)),cljs.core.cst$sym$avals,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null)),cljs.core.cst$sym$checks,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null)),cljs.core.cst$sym$avaliacoes,cljs.core.list(cljs.core.cst$sym$map,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$p,cljs.core.cst$kw$checked_QMARK_,cljs.core.cst$sym$c)),cljs.core.cst$sym$avals,cljs.core.cst$sym$checks),cljs.core.cst$sym$checked_DASH_avaliacoes,cljs.core.list(cljs.core.cst$sym$filter,cljs.core.cst$kw$checked_QMARK_,cljs.core.cst$sym$avaliacoes),cljs.core.cst$sym$confirm_DASH_text,cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checked_DASH_avaliacoes),(0),"Nenhuma avalia\u00E7\u00E3o selecionada.",(1),"Tem certeza que quer excluir essa avalia\u00E7\u00E3o?","Tem certeza que quer excluir as seguintes avalia\u00E7\u00F5es?"),cljs.core.cst$sym$names,cljs.core.list(cljs.core.cst$sym$reduce,cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$map,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25560_SHARP_], null),cljs.core.list(cljs.core.cst$sym$str,"\n- ",cljs.core.cst$sym$p1__25560_SHARP_)),cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$data,cljs.core.cst$sym$checked_DASH_avaliacoes))),cljs.core.cst$sym$ids,cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$id,cljs.core.cst$sym$checked_DASH_avaliacoes)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$js_SLASH_confirm,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$confirm_DASH_text,cljs.core.cst$sym$names))),cljs.core.cst$sym$app_DASH_state,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$update_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui], null),cljs.core.cst$sym$dissoc,cljs.core.cst$kw$checkboxed_DASH_avaliacoes)))),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e25563){var e = e25563;
throw e;
}});
} else {
react_med.screens.lista_avaliacoes.delete_avaliacoes = (function react_med$screens$lista_avaliacoes$delete_avaliacoes(app_state){
var paciente_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null));
var avals = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,paciente_id,cljs.core.cst$kw$avaliacoes], null));
var checks = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null));
var avaliacoes = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (paciente_id,avals,checks){
return (function (p,c){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,cljs.core.cst$kw$checked_QMARK_,c);
});})(paciente_id,avals,checks))
,avals,checks);
var checked_avaliacoes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$checked_QMARK_,avaliacoes);
var confirm_text = (function (){var G__25565 = cljs.core.count(checked_avaliacoes);
switch (G__25565) {
case (0):
return "Nenhuma avalia\u00E7\u00E3o selecionada.";

break;
case (1):
return "Tem certeza que quer excluir essa avalia\u00E7\u00E3o?";

break;
default:
return "Tem certeza que quer excluir as seguintes avalia\u00E7\u00F5es?";

}
})();
var names = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paciente_id,avals,checks,avaliacoes,checked_avaliacoes,confirm_text){
return (function (p1__25560_SHARP_){
return ["\n- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25560_SHARP_)].join('');
});})(paciente_id,avals,checks,avaliacoes,checked_avaliacoes,confirm_text))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$data,checked_avaliacoes)));
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,checked_avaliacoes);
if(cljs.core.not(confirm([cljs.core.str.cljs$core$IFn$_invoke$arity$1(confirm_text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(names)].join('')))){
return app_state;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (paciente_id,avals,checks,avaliacoes,checked_avaliacoes,confirm_text,names,ids){
return (function (p1__25561_SHARP_,p2__25562_SHARP_){
return cljs.core.assoc_in(p1__25561_SHARP_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,paciente_id,cljs.core.cst$kw$avaliacoes,p2__25562_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$deleted_QMARK_,true], null));
});})(paciente_id,avals,checks,avaliacoes,checked_avaliacoes,confirm_text,names,ids))
,app_state,ids),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"avaliacoes"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$actions_DASH_menu,cljs.core.cst$kw$opened_QMARK_], null),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui], null),cljs.core.dissoc,cljs.core.cst$kw$checkboxed_DASH_avaliacoes);
}
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_avaliacoes_SLASH_delete_DASH_avaliacoes,react_med.screens.lista_avaliacoes.delete_avaliacoes);
react_med.screens.lista_avaliacoes.checkboxed_avaliacoes = (function react_med$screens$lista_avaliacoes$checkboxed_avaliacoes(app_state){
var paciente_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null));
var avaliacoes = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,paciente_id,cljs.core.cst$kw$avaliacoes], null));
var checks = (function (){var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return react_med.util.repeat_as(avaliacoes,false);
}
})();
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (paciente_id,avaliacoes,checks){
return (function (p,c){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,cljs.core.cst$kw$checked_QMARK_,c);
});})(paciente_id,avaliacoes,checks))
,avaliacoes,checks));
});
var G__25568_25570 = cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_avaliacoes_SLASH_checkboxed_DASH_avaliacoes;
var G__25569_25571 = react_med.screens.lista_avaliacoes.checkboxed_avaliacoes;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25568_25570,G__25569_25571) : re_frame.core.reg_sub.call(null,G__25568_25570,G__25569_25571));
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.lista_avaliacoes.check_avaliacao = (function react_med$screens$lista_avaliacoes$check_avaliacao(app_state,p__25572){
var vec__25573 = p__25572;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25573,(0),null);
var avaliacao_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25573,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null)),cljs.core.cst$sym$avaliacoes,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null)),cljs.core.cst$sym$checks,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null))], null),cljs.core.list(cljs.core.cst$sym$as_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$avaliacoes),cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checks)),cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$avaliacoes,false))),cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes,cljs.core.cst$sym$avaliacao_DASH_id], null),cljs.core.cst$sym$not))));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var paciente_id = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var avaliacoes = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$avaliacoes], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var checks = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

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
var result__19888__auto__ = avaliacoes;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$avaliacoes,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$avaliacoes),cljs.core.cst$kw$indent_DASH_level,(4)], null));

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
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$avaliacoes),cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checks)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

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
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = react_med.util.repeat_as((function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = avaliacoes;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$avaliacoes,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$avaliacoes,false),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$avaliacoes,false)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$avaliacoes),cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checks)),cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$avaliacoes,false))),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = $__$1;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$$,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes,(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = avaliacao_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$avaliacao_DASH_id,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes,cljs.core.cst$sym$avaliacao_DASH_id], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.not;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$not,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes,cljs.core.cst$sym$avaliacao_DASH_id], null),cljs.core.cst$sym$not),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$as_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$avaliacoes),cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checks)),cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$avaliacoes,false))),cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes,cljs.core.cst$sym$avaliacao_DASH_id], null),cljs.core.cst$sym$not)),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null)),cljs.core.cst$sym$avaliacoes,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null)),cljs.core.cst$sym$checks,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null))], null),cljs.core.list(cljs.core.cst$sym$as_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$avaliacoes),cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$checks)),cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null),cljs.core.list(cljs.core.cst$sym$util_SLASH_repeat_DASH_as,cljs.core.cst$sym$avaliacoes,false))),cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes,cljs.core.cst$sym$avaliacao_DASH_id], null),cljs.core.cst$sym$not))),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e25576){var e = e25576;
throw e;
}});
} else {
react_med.screens.lista_avaliacoes.check_avaliacao = (function react_med$screens$lista_avaliacoes$check_avaliacao(app_state,p__25577){
var vec__25578 = p__25577;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25578,(0),null);
var avaliacao_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25578,(1),null);
var paciente_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null));
var avaliacoes = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,paciente_id,cljs.core.cst$kw$avaliacoes], null));
var checks = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null));
var $ = app_state;
var $__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(avaliacoes),cljs.core.count(checks)))?$:cljs.core.assoc_in($,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes], null),react_med.util.repeat_as(avaliacoes,false)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$checkboxed_DASH_avaliacoes,avaliacao_id], null),cljs.core.not);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_avaliacoes_SLASH_check_DASH_avaliacao,react_med.screens.lista_avaliacoes.check_avaliacao);
react_med.screens.lista_avaliacoes.selecting_component = (function react_med$screens$lista_avaliacoes$selecting_component(){
var paciente_selecionado = (function (){var G__25581 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_selected_DASH_patient], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__25581) : react_med.util._LT_sub.call(null,G__25581));
})();
var avaliacoes = (function (){var G__25582 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_avaliacoes_SLASH_checkboxed_DASH_avaliacoes], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__25582) : react_med.util._LT_sub.call(null,G__25582));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_avaliacoes.global$module$menu_list,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Paciente n\u00E3o encontrado",cljs.core.cst$kw$nome.cljs$core$IFn$_invoke$arity$1(paciente_selecionado)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_avaliacoes.global$module$menu_item,"Nenhum paciente selecionado"], null):((cljs.core.empty_QMARK_(avaliacoes))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_avaliacoes.global$module$menu_item,"Nenhuma avalia\u00E7\u00E3o cadastrada ainda."], null):cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paciente_selecionado,avaliacoes){
return (function (p__25583){
var map__25584 = p__25583;
var map__25584__$1 = (((((!((map__25584 == null))))?(((((map__25584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25584):map__25584);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25584__$1,cljs.core.cst$kw$id);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25584__$1,cljs.core.cst$kw$data);
var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25584__$1,cljs.core.cst$kw$checked_QMARK_);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_avaliacoes.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,((function (map__25584,map__25584__$1,id,data,checked_QMARK_,paciente_selecionado,avaliacoes){
return (function (){
var G__25586 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_avaliacoes_SLASH_check_DASH_avaliacao,id], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__25586) : react_med.util._GT_evt.call(null,G__25586));
});})(map__25584,map__25584__$1,id,data,checked_QMARK_,paciente_selecionado,avaliacoes))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.lista_avaliacoes.global$module$checkbox,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$checked,checked_QMARK_,cljs.core.cst$kw$tabIndex,(-1)], null)], null),data], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});})(paciente_selecionado,avaliacoes))
,avaliacoes)
))], null);
});
react_med.screens.lista_avaliacoes.selecting_view = (function react_med$screens$lista_avaliacoes$selecting_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_avaliacoes.selecting_component], null)], null)], null);
});
