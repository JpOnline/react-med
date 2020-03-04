// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.screens.paciente_relatorio.ellipses_config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('react_med.screens.paciente_relatorio.tollerance_ellipse_component');
goog.require('react_med.shell_components');
goog.require('react_med.util');
react_med.screens.paciente_relatorio.ellipses_config.global$module$checkbox = goog.global["Checkbox"];
react_med.screens.paciente_relatorio.ellipses_config.global$module$menu_item = goog.global["MenuItem"];
react_med.screens.paciente_relatorio.ellipses_config.global$module$menu_list = goog.global["MenuList"];
react_med.screens.paciente_relatorio.ellipses_config.item_style = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"1px 0"], null);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.paciente_relatorio.ellipses_config.check_aval = (function react_med$screens$paciente_relatorio$ellipses_config$check_aval(app_state,p__25824){
var vec__25825 = p__25824;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25825,(0),null);
var parent_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25825,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25825,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$parent_DASH_id,cljs.core.cst$sym$id),cljs.core.cst$sym$aval_DASH_id,cljs.core.list(cljs.core.cst$sym$when,cljs.core.cst$sym$parent_DASH_id,cljs.core.cst$sym$id),cljs.core.cst$sym$paciente_DASH_avals,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null)),cljs.core.cst$sym$paciente_DASH_previous_DASH_status,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null))], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$aval_DASH_id,cljs.core.list(cljs.core.cst$sym$as_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals,cljs.core.cst$sym$aval_DASH_id], null),cljs.core.cst$sym$not),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$every_QMARK_,cljs.core.cst$sym$true_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals], null))),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),true),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),false))),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),cljs.core.list(cljs.core.cst$sym$not,cljs.core.cst$sym$paciente_DASH_previous_DASH_status)),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals], null),cljs.core.list(cljs.core.cst$sym$vec,cljs.core.list(cljs.core.cst$sym$map_DASH_indexed,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$idx,cljs.core.cst$sym$x], null),cljs.core.list(cljs.core.cst$sym$not,cljs.core.cst$sym$paciente_DASH_previous_DASH_status)),cljs.core.cst$sym$paciente_DASH_avals)))))));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var paciente_id = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var or__4131__auto__ = (function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = parent_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$parent_DASH_id,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$id,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
}
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$parent_DASH_id,cljs.core.cst$sym$id),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var aval_id = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (cljs.core.truth_((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = parent_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$parent_DASH_id,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})())?(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$id,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})():null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$when,cljs.core.cst$sym$parent_DASH_id,cljs.core.cst$sym$id),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var paciente_avals = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
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
var paciente_previous_status = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$checked_QMARK_], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (cljs.core.truth_((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = aval_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$aval_DASH_id,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})())?(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var $ = (function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})();
var $__$1 = (function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = $;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$$,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,(function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$avals,(function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = aval_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$aval_DASH_id,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals,cljs.core.cst$sym$aval_DASH_id], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.not;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$not,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals,cljs.core.cst$sym$aval_DASH_id], null),cljs.core.cst$sym$not),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})();
var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (((function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.every_QMARK_((function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.true_QMARK_;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$true_QMARK_,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = $__$1;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$$,cljs.core.cst$kw$indent_DASH_level,(6)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,(function (){var opts__19887__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(7)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$avals], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals], null),cljs.core.cst$kw$indent_DASH_level,(6)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals], null)),cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$every_QMARK_,cljs.core.cst$sym$true_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals], null))),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})())?(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.assoc_in((function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = $__$1;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$$,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,(function (){var opts__19887__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(6)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$checked_QMARK_], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})(),true);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),true),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})():(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.assoc_in((function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = $__$1;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$$,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,(function (){var opts__19887__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(6)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$checked_QMARK_], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),false),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$every_QMARK_,cljs.core.cst$sym$true_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals], null))),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),true),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),false)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$as_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals,cljs.core.cst$sym$aval_DASH_id], null),cljs.core.cst$sym$not),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$every_QMARK_,cljs.core.cst$sym$true_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals], null))),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),true),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),false))),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})():debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(app_state,cljs.core.cst$sym$app_DASH_state,(4)),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$checked_QMARK_], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.not((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_previous_status;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_previous_DASH_status,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$not,cljs.core.cst$sym$paciente_DASH_previous_DASH_status),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})()),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),cljs.core.list(cljs.core.cst$sym$not,cljs.core.cst$sym$paciente_DASH_previous_DASH_status)),(3)),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$avals], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.vec((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = ((function (opts__19887__auto____$4,opts__19887__auto____$3,opts__19887__auto____$2,opts__19887__auto____$1,paciente_id,aval_id,paciente_avals,paciente_previous_status,opts__19887__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__25825,event,parent_id,id){
return (function (idx,x){
var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.not((function (){var opts__19887__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_previous_status;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_previous_DASH_status,cljs.core.cst$kw$indent_DASH_level,(7)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$not,cljs.core.cst$sym$paciente_DASH_previous_DASH_status),cljs.core.cst$kw$indent_DASH_level,(6)], null));

return result__19888__auto__;
});})(opts__19887__auto____$4,opts__19887__auto____$3,opts__19887__auto____$2,opts__19887__auto____$1,paciente_id,aval_id,paciente_avals,paciente_previous_status,opts__19887__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__25825,event,parent_id,id))
;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$idx,cljs.core.cst$sym$x], null),cljs.core.list(cljs.core.cst$sym$not,cljs.core.cst$sym$paciente_DASH_previous_DASH_status)),cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_avals;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_avals,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$map_DASH_indexed,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$idx,cljs.core.cst$sym$x], null),cljs.core.list(cljs.core.cst$sym$not,cljs.core.cst$sym$paciente_DASH_previous_DASH_status)),cljs.core.cst$sym$paciente_DASH_avals),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$vec,cljs.core.list(cljs.core.cst$sym$map_DASH_indexed,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$idx,cljs.core.cst$sym$x], null),cljs.core.list(cljs.core.cst$sym$not,cljs.core.cst$sym$paciente_DASH_previous_DASH_status)),cljs.core.cst$sym$paciente_DASH_avals)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})()),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals], null),cljs.core.list(cljs.core.cst$sym$vec,cljs.core.list(cljs.core.cst$sym$map_DASH_indexed,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$idx,cljs.core.cst$sym$x], null),cljs.core.list(cljs.core.cst$sym$not,cljs.core.cst$sym$paciente_DASH_previous_DASH_status)),cljs.core.cst$sym$paciente_DASH_avals))),(2)));
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$aval_DASH_id,cljs.core.list(cljs.core.cst$sym$as_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals,cljs.core.cst$sym$aval_DASH_id], null),cljs.core.cst$sym$not),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$every_QMARK_,cljs.core.cst$sym$true_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals], null))),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),true),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),false))),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals], null),cljs.core.list(cljs.core.cst$sym$vec,cljs.core.list(cljs.core.cst$sym$map_DASH_indexed,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$idx,cljs.core.cst$sym$x], null),cljs.core.list(cljs.core.cst$sym$not,cljs.core.cst$sym$paciente_DASH_previous_DASH_status)),cljs.core.cst$sym$paciente_DASH_avals))))),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$parent_DASH_id,cljs.core.cst$sym$id),cljs.core.cst$sym$aval_DASH_id,cljs.core.list(cljs.core.cst$sym$when,cljs.core.cst$sym$parent_DASH_id,cljs.core.cst$sym$id),cljs.core.cst$sym$paciente_DASH_avals,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes], null)),cljs.core.cst$sym$paciente_DASH_previous_DASH_status,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null))], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$aval_DASH_id,cljs.core.list(cljs.core.cst$sym$as_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$sym$$,cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals,cljs.core.cst$sym$aval_DASH_id], null),cljs.core.cst$sym$not),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$every_QMARK_,cljs.core.cst$sym$true_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals], null))),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),true),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$checked_QMARK_], null),false))),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avals], null),cljs.core.list(cljs.core.cst$sym$vec,cljs.core.list(cljs.core.cst$sym$map_DASH_indexed,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$idx,cljs.core.cst$sym$x], null),cljs.core.list(cljs.core.cst$sym$not,cljs.core.cst$sym$paciente_DASH_previous_DASH_status)),cljs.core.cst$sym$paciente_DASH_avals)))))),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e25828){var e = e25828;
throw e;
}});
} else {
react_med.screens.paciente_relatorio.ellipses_config.check_aval = (function react_med$screens$paciente_relatorio$ellipses_config$check_aval(app_state,p__25829){
var vec__25830 = p__25829;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25830,(0),null);
var parent_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25830,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25830,(2),null);
var paciente_id = (function (){var or__4131__auto__ = parent_id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return id;
}
})();
var aval_id = (cljs.core.truth_(parent_id)?id:null);
var paciente_avals = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,paciente_id,cljs.core.cst$kw$avaliacoes], null));
var paciente_previous_status = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,paciente_id,cljs.core.cst$kw$checked_QMARK_], null));
if(cljs.core.truth_(aval_id)){
var $ = app_state;
var $__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3($,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,paciente_id,cljs.core.cst$kw$avals,aval_id], null),cljs.core.not);
if(cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,paciente_id,cljs.core.cst$kw$avals], null)))){
return cljs.core.assoc_in($__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,paciente_id,cljs.core.cst$kw$checked_QMARK_], null),true);
} else {
return cljs.core.assoc_in($__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,paciente_id,cljs.core.cst$kw$checked_QMARK_], null),false);
}
} else {
return cljs.core.assoc_in(cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,paciente_id,cljs.core.cst$kw$checked_QMARK_], null),cljs.core.not(paciente_previous_status)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked,paciente_id,cljs.core.cst$kw$avals], null),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (paciente_id,aval_id,paciente_avals,paciente_previous_status,vec__25830,event,parent_id,id){
return (function (idx,x){
return cljs.core.not(paciente_previous_status);
});})(paciente_id,aval_id,paciente_avals,paciente_previous_status,vec__25830,event,parent_id,id))
,paciente_avals)));
}
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_DASH_config_SLASH_check_DASH_aval,react_med.screens.paciente_relatorio.ellipses_config.check_aval);
react_med.screens.paciente_relatorio.ellipses_config.avals_checked = (function react_med$screens$paciente_relatorio$ellipses_config$avals_checked(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$avals_DASH_checked], null));
});
var G__25833_25835 = cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_DASH_config_SLASH_avals_DASH_checked;
var G__25834_25836 = react_med.screens.paciente_relatorio.ellipses_config.avals_checked;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25833_25835,G__25834_25836) : re_frame.core.reg_sub.call(null,G__25833_25835,G__25834_25836));
react_med.screens.paciente_relatorio.ellipses_config.update_avaliacoes = (function react_med$screens$paciente_relatorio$ellipses_config$update_avaliacoes(avals,avals_checked){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25837){
var map__25838 = p__25837;
var map__25838__$1 = (((((!((map__25838 == null))))?(((((map__25838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25838):map__25838);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25838__$1,cljs.core.cst$kw$id);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25838__$1,cljs.core.cst$kw$data);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$label,react_med.util.yyyy_mm_dd__GT_dd_mm_yyyy(data),cljs.core.cst$kw$checked_QMARK_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(avals_checked,id)], null);
}),avals);
});
react_med.screens.paciente_relatorio.ellipses_config.pacientes_e_avals = (function react_med$screens$paciente_relatorio$ellipses_config$pacientes_e_avals(p__25844){
var vec__25845 = p__25844;
var pacientes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25845,(0),null);
var avals_checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25845,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25845,pacientes,avals_checked){
return (function (p1__25843_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__25843_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$avaliacoes], null),react_med.screens.paciente_relatorio.ellipses_config.update_avaliacoes,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(avals_checked,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__25843_SHARP_),cljs.core.cst$kw$avals], null)));
});})(vec__25845,pacientes,avals_checked))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25845,pacientes,avals_checked){
return (function (p1__25842_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25842_SHARP_,cljs.core.cst$kw$checked_QMARK_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(avals_checked,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__25842_SHARP_),cljs.core.cst$kw$checked_QMARK_], null)));
});})(vec__25845,pacientes,avals_checked))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25845,pacientes,avals_checked){
return (function (p1__25841_SHARP_){
return clojure.set.rename_keys(p1__25841_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nome,cljs.core.cst$kw$label], null));
});})(vec__25845,pacientes,avals_checked))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25845,pacientes,avals_checked){
return (function (p1__25840_SHARP_){
return cljs.core.select_keys(p1__25840_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$nome,cljs.core.cst$kw$avaliacoes], null));
});})(vec__25845,pacientes,avals_checked))
,pacientes))));
});
var G__25848_25854 = cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_DASH_config_SLASH_pacientes_DASH_e_DASH_avals;
var G__25849_25855 = cljs.core.cst$kw$_LT__DASH_;
var G__25850_25856 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_pacientes], null);
var G__25851_25857 = cljs.core.cst$kw$_LT__DASH_;
var G__25852_25858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_DASH_config_SLASH_avals_DASH_checked], null);
var G__25853_25859 = react_med.screens.paciente_relatorio.ellipses_config.pacientes_e_avals;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__25848_25854,G__25849_25855,G__25850_25856,G__25851_25857,G__25852_25858,G__25853_25859) : re_frame.core.reg_sub.call(null,G__25848_25854,G__25849_25855,G__25850_25856,G__25851_25857,G__25852_25858,G__25853_25859));
react_med.screens.paciente_relatorio.ellipses_config.points_selection_component = (function react_med$screens$paciente_relatorio$ellipses_config$points_selection_component(){
var structure__GT_checkboxes = (function() {
var react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb = null;
var react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb__1 = (function (structure){
return react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb.cljs$core$IFn$_invoke$arity$3(structure,(0),null);
});
var react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb__3 = (function (p__25860,padding,parent_id){
var map__25861 = p__25860;
var map__25861__$1 = (((((!((map__25861 == null))))?(((((map__25861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25861):map__25861);
var i = map__25861__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25861__$1,cljs.core.cst$kw$label);
var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25861__$1,cljs.core.cst$kw$checked_QMARK_);
var avaliacoes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25861__$1,cljs.core.cst$kw$avaliacoes);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25861__$1,cljs.core.cst$kw$id);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.paciente_relatorio.ellipses_config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_med.screens.paciente_relatorio.ellipses_config.item_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$paddingLeft,((10) * padding)], null)], 0)),cljs.core.cst$kw$onClick,((function (map__25861,map__25861__$1,i,label,checked_QMARK_,avaliacoes,id){
return (function (){
var G__25863 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_DASH_config_SLASH_check_DASH_aval,parent_id,id], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__25863) : react_med.util._GT_evt.call(null,G__25863));
});})(map__25861,map__25861__$1,i,label,checked_QMARK_,avaliacoes,id))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paper_DASH_checkbox,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, ["--paper-checkbox-margin","10px","--paper-checkbox-size","20px"], null),cljs.core.cst$kw$tabIndex,(-1),(cljs.core.truth_(checked_QMARK_)?cljs.core.cst$kw$checked:null),checked_QMARK_])], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null))], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([avaliacoes,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((padding + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(id)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$paciente_DASH_separator,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"5px"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),"-paciente-separator"].join('')], null))], null)], 0));
});
react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb = function(p__25860,padding,parent_id){
switch(arguments.length){
case 1:
return react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb__1.call(this,p__25860);
case 3:
return react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb__3.call(this,p__25860,padding,parent_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb.cljs$core$IFn$_invoke$arity$1 = react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb__1;
react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb.cljs$core$IFn$_invoke$arity$3 = react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb__3;
return react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb;
})()
;
var pacientes_e_avals = (function (){var G__25864 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_DASH_config_SLASH_pacientes_DASH_e_DASH_avals], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__25864) : react_med.util._LT_sub.call(null,G__25864));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"fontSize": "larger", "fontWeight": "bold", "marginTop": "15px"})], null),"Sele\u00E7\u00E3o de Pontos"], null),((cljs.core.empty_QMARK_(pacientes_e_avals))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.paciente_relatorio.ellipses_config.global$module$menu_item,"Nenhuma avalia\u00E7\u00E3o cadastrada ainda."], null):cljs.core.map.cljs$core$IFn$_invoke$arity$2(structure__GT_checkboxes,pacientes_e_avals))], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.paciente_relatorio.ellipses_config.selected_population = (function react_med$screens$paciente_relatorio$ellipses_config$selected_population(app_state,p__25865){
var vec__25866 = p__25865;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25866,(0),null);
var population = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25866,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$chosen_DASH_population], null),cljs.core.cst$sym$population));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.assoc_in((function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$chosen_DASH_population], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$chosen_DASH_population], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = population;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$population,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$chosen_DASH_population], null),cljs.core.cst$sym$population),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e25869){var e = e25869;
throw e;
}});
} else {
react_med.screens.paciente_relatorio.ellipses_config.selected_population = (function react_med$screens$paciente_relatorio$ellipses_config$selected_population(app_state,p__25870){
var vec__25871 = p__25870;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25871,(0),null);
var population = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25871,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$chosen_DASH_population], null),population);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_DASH_config_SLASH_selected_DASH_population,react_med.screens.paciente_relatorio.ellipses_config.selected_population);
react_med.screens.paciente_relatorio.ellipses_config.chosen_population = (function react_med$screens$paciente_relatorio$ellipses_config$chosen_population(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$ellipses_DASH_config,cljs.core.cst$kw$chosen_DASH_population], null),"women-21-49-buffa");
});
var G__25874_25876 = cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_DASH_config_SLASH_chosen_DASH_population;
var G__25875_25877 = react_med.screens.paciente_relatorio.ellipses_config.chosen_population;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25874_25876,G__25875_25877) : re_frame.core.reg_sub.call(null,G__25874_25876,G__25875_25877));
react_med.screens.paciente_relatorio.ellipses_config.population_radio_items = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$population,"women-21-49-buffa",cljs.core.cst$kw$label,"Mulheres 21-49 anos, adultos dos EUA [Buffa et al., PloS one, 8:e58533, 2013"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$population,"men-21-49-buffa",cljs.core.cst$kw$label,"Homens 21-49 anos, adultos dos EUA [Buffa et al., PloS one, 8:e58533, 2013"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$population,"women-65-100-saragat",cljs.core.cst$kw$label,"Mulheres 65-100 anos, Italianas [Saragat et al., Exp Gerontol, 50: 52-56, 2014]"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$population,"men-65-100-saragat",cljs.core.cst$kw$label,"Homens 65-100 anos, Italianos [Saragat et al., Exp Gerontol, 50: 52-56, 2014]"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$population,"women-18-30-ibanez",cljs.core.cst$kw$label,"Mulheres 18-30 anos, \u00CDtalo-hisp\u00E2nico [Ibanez et al., Am J Hum Biol. 27:871-876: 2015]"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$population,"men-18-30-ibanez",cljs.core.cst$kw$label,"Homens 18-30 anos, \u00CDtalo-hisp\u00E2nico [Ibanez et al., Am J Hum Biol. 27:871-876: 2015]"], null)], null);
react_med.screens.paciente_relatorio.ellipses_config.population_radio_items_checked = (function react_med$screens$paciente_relatorio$ellipses_config$population_radio_items_checked(chosen){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25878){
var map__25879 = p__25878;
var map__25879__$1 = (((((!((map__25879 == null))))?(((((map__25879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25879):map__25879);
var item = map__25879__$1;
var population = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25879__$1,cljs.core.cst$kw$population);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$checked_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(population,chosen));
}),react_med.screens.paciente_relatorio.ellipses_config.population_radio_items);
});
var G__25881_25885 = cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_DASH_config_SLASH_population_DASH_radio_DASH_items_DASH_checked;
var G__25882_25886 = cljs.core.cst$kw$_LT__DASH_;
var G__25883_25887 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_DASH_config_SLASH_chosen_DASH_population], null);
var G__25884_25888 = react_med.screens.paciente_relatorio.ellipses_config.population_radio_items_checked;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__25881_25885,G__25882_25886,G__25883_25887,G__25884_25888) : re_frame.core.reg_sub.call(null,G__25881_25885,G__25882_25886,G__25883_25887,G__25884_25888));
react_med.screens.paciente_relatorio.ellipses_config.population_selection_component = (function react_med$screens$paciente_relatorio$ellipses_config$population_selection_component(){
var items = (function (){var G__25889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_DASH_config_SLASH_population_DASH_radio_DASH_items_DASH_checked], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__25889) : react_med.util._LT_sub.call(null,G__25889));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"fontSize": "larger", "fontWeight": "bold"})], null),"Popula\u00E7\u00E3o de Refer\u00EAncia"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (items){
return (function (p__25890){
var map__25891 = p__25890;
var map__25891__$1 = (((((!((map__25891 == null))))?(((((map__25891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25891):map__25891);
var population = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25891__$1,cljs.core.cst$kw$population);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25891__$1,cljs.core.cst$kw$label);
var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25891__$1,cljs.core.cst$kw$checked_QMARK_);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.paciente_relatorio.ellipses_config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,((function (map__25891,map__25891__$1,population,label,checked_QMARK_,items){
return (function (){
var G__25893 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_DASH_config_SLASH_selected_DASH_population,population], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__25893) : react_med.util._GT_evt.call(null,G__25893));
});})(map__25891,map__25891__$1,population,label,checked_QMARK_,items))
,cljs.core.cst$kw$style,react_med.screens.paciente_relatorio.ellipses_config.item_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_med.screens.paciente_relatorio.ellipses_config.radio,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$checked,checked_QMARK_], null)], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,population], null));
});})(items))
,items)], null);
});
react_med.screens.paciente_relatorio.ellipses_config.component = (function react_med$screens$paciente_relatorio$ellipses_config$component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses_config.population_selection_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses_config.points_selection_component], null)], null);
});
react_med.screens.paciente_relatorio.ellipses_config.view = (function react_med$screens$paciente_relatorio$ellipses_config$view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"config"], null);
});
