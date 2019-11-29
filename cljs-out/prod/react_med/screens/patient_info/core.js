// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.screens.patient_info.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_med.shell_components');
goog.require('react_med.util');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('reagent.core');
goog.require('react_med.screens.components');
react_med.screens.patient_info.core.selected_patient = (function react_med$screens$patient_info$core$selected_patient(app_state){
var patient_info = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0)], null));
var idade = Math.floor((((((((new Date()) - (new Date((function (){var G__20376 = cljs.core.cst$kw$nascimento;
return (patient_info.cljs$core$IFn$_invoke$arity$1 ? patient_info.cljs$core$IFn$_invoke$arity$1(G__20376) : patient_info.call(null,G__20376));
})()))) / (1000)) / (60)) / (60)) / (24)) / (365)));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(patient_info,cljs.core.cst$kw$idade,idade),cljs.core.cst$kw$avaliacoes);
});
var G__20377_20379 = cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_selected_DASH_patient;
var G__20378_20380 = react_med.screens.patient_info.core.selected_patient;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20377_20379,G__20378_20380) : re_frame.core.reg_sub.call(null,G__20377_20379,G__20378_20380));
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.patient_info.core.change_patient_name = (function react_med$screens$patient_info$core$change_patient_name(app_state,p__20381){
var vec__20382 = p__20381;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20382,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20382,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$nome], null),cljs.core.cst$sym$new_DASH_name));

var opts__19692__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core.assoc_in((function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$nome], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$nome], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new_name;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$new_DASH_name,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$nome], null),cljs.core.cst$sym$new_DASH_name),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19693__auto__;
}catch (e20385){var e = e20385;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_patient_name = (function react_med$screens$patient_info$core$change_patient_name(app_state,p__20386){
var vec__20387 = p__20386;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20387,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20387,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$nome], null),new_name);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_change_DASH_patient_DASH_name,react_med.screens.patient_info.core.change_patient_name);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.patient_info.core.change_birth_date = (function react_med$screens$patient_info$core$change_birth_date(app_state,p__20390){
var vec__20391 = p__20390;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20391,(0),null);
var new_birth_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20391,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$nascimento], null),cljs.core.cst$sym$new_DASH_birth_DASH_date));

var opts__19692__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core.assoc_in((function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$nascimento], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$nascimento], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new_birth_date;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$new_DASH_birth_DASH_date,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$nascimento], null),cljs.core.cst$sym$new_DASH_birth_DASH_date),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19693__auto__;
}catch (e20394){var e = e20394;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_birth_date = (function react_med$screens$patient_info$core$change_birth_date(app_state,p__20395){
var vec__20396 = p__20395;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20396,(0),null);
var new_birth_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20396,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$nascimento], null),new_birth_date);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_change_DASH_birth_DASH_date,react_med.screens.patient_info.core.change_birth_date);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.patient_info.core.toggle_sexo = (function react_med$screens$patient_info$core$toggle_sexo(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$sexo], null),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_1], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$_PERCENT_1,"Feminino"),"Masculino","Feminino"))));

var opts__19692__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$sexo], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$sexo], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = ((function (opts__19692__auto____$1,opts__19692__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__20399_SHARP_){
var opts__19692__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = (((function (){var opts__19692__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__19692__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = p1__20399_SHARP_;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$p1__20399_SHARP_,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19693__auto__;
})(),"Feminino");
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$p1__20399_SHARP_,"Feminino"),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19693__auto__;
})())?"Masculino":"Feminino");
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$p1__20399_SHARP_,"Feminino"),"Masculino","Feminino"),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19693__auto__;
});})(opts__19692__auto____$1,opts__19692__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__20399_SHARP_], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$p1__20399_SHARP_,"Feminino"),"Masculino","Feminino")),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$sexo], null),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__20399_SHARP_], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$p1__20399_SHARP_,"Feminino"),"Masculino","Feminino"))),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19693__auto__;
}catch (e20400){var e = e20400;
throw e;
}});
} else {
react_med.screens.patient_info.core.toggle_sexo = (function react_med$screens$patient_info$core$toggle_sexo(app_state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$sexo], null),(function (p1__20399_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20399_SHARP_,"Feminino")){
return "Masculino";
} else {
return "Feminino";
}
}));
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_toggle_DASH_sexo,react_med.screens.patient_info.core.toggle_sexo);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.patient_info.core.change_height = (function react_med$screens$patient_info$core$change_height(app_state,p__20401){
var vec__20402 = p__20401;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20402,(0),null);
var new_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20402,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$estatura], null),cljs.core.list(cljs.core.cst$sym$js_SLASH_parseFloat,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_height,",","."))));

var opts__19692__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core.assoc_in((function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$estatura], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$estatura], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = parseFloat((function (){var opts__19692__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = (function (){var opts__19692__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new_height;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$new_DASH_height,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19693__auto__;
})().replace(",",".");
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_height,",","."),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19693__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$js_SLASH_parseFloat,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_height,",",".")),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$estatura], null),cljs.core.list(cljs.core.cst$sym$js_SLASH_parseFloat,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_height,",","."))),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19693__auto__;
}catch (e20405){var e = e20405;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_height = (function react_med$screens$patient_info$core$change_height(app_state,p__20406){
var vec__20407 = p__20406;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20407,(0),null);
var new_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20407,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$estatura], null),parseFloat(new_height.replace(",",".")));
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_change_DASH_height,react_med.screens.patient_info.core.change_height);
react_med.screens.patient_info.core.date_picker_i18n_pt = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$formatTitle,cljs.core.cst$kw$parseDate,cljs.core.cst$kw$weekdays,cljs.core.cst$kw$week,cljs.core.cst$kw$weekdaysShort,cljs.core.cst$kw$today,cljs.core.cst$kw$formatDate,cljs.core.cst$kw$calendar,cljs.core.cst$kw$firstDayOfWeek,cljs.core.cst$kw$cancel,cljs.core.cst$kw$monthNames,cljs.core.cst$kw$clear],[(function (month_name,full_year){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(month_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_year)].join('');
}),(function (text){
var vec__20410 = cljs.core.re_find(/(\d{1,2})\D(\d{1,2})\D(\d{4})/,text);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20410,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20410,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20410,(2),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20410,(3),null);
return ({"day": parseInt(d), "month": (parseInt(m) - (1)), "year": parseInt(y)});
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Domingo","Segunda","Ter\u00E7a","Quarta","Quinta","Sexta","S\u00E1bado"], null),"Semana",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dom","Seg","Ter","Qua","Qui","Sex","S\u00E1b"], null),"Hoje",(function (date){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.day),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((date.month + (1))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.year)].join('');
}),"Calend\u00E1rio",(0),"Cancelar",new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Janeiro","Fevereiro","Mar\u00E7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"], null),"Limpar"]);
react_med.screens.patient_info.core.editing_patient_info_component = (function react_med$screens$patient_info$core$editing_patient_info_component(){
var map__20416 = (function (){var G__20417 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_selected_DASH_patient], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20417) : react_med.util._LT_sub.call(null,G__20417));
})();
var map__20416__$1 = (((((!((map__20416 == null))))?(((((map__20416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20416):map__20416);
var nome = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20416__$1,cljs.core.cst$kw$nome);
var nascimento = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20416__$1,cljs.core.cst$kw$nascimento);
var idade = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20416__$1,cljs.core.cst$kw$idade);
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20416__$1,cljs.core.cst$kw$sexo);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20416__$1,cljs.core.cst$kw$estatura);
var line_style = ({"display": "flex", "alignItems": "center", "whiteSpace": "pre", "height": (48)});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Nome: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"backgroundColor": "#e5e9ed", "padding": "4px 15px", "borderRadius": "5px"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$u,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$contentEditable,"",cljs.core.cst$kw$onBlur,((function (map__20416,map__20416__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (p1__20413_SHARP_){
var G__20419 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_change_DASH_patient_DASH_name,p1__20413_SHARP_.target.innerText], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20419) : react_med.util._GT_evt.call(null,G__20419));
});})(map__20416,map__20416__$1,nome,nascimento,idade,sexo,estatura,line_style))
], null),nome], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(line_style),"whiteSpace"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Nascimento: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dom_DASH_module_SHARP_vaadin_DASH_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$theme_DASH_for,"vaadin-date-picker-overlay"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$template,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style,"vaadin-date-picker-overlay{\n           z-index: 1200;\n         }"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.util.with_mount_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vaadin_DASH_date_DASH_picker,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,nascimento,cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (map__20416,map__20416__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (this$){
reagent.core.dom_node(this$).i18n = cljs.core.clj__GT_js(react_med.screens.patient_info.core.date_picker_i18n_pt);

return reagent.core.dom_node(this$).onchange = ((function (map__20416,map__20416__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (p1__20414_SHARP_){
var G__20420 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_change_DASH_birth_DASH_date,p1__20414_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20420) : react_med.util._GT_evt.call(null,G__20420));
});})(map__20416,map__20416__$1,nome,nascimento,idade,sexo,estatura,line_style))
;
});})(map__20416,map__20416__$1,nome,nascimento,idade,sexo,estatura,line_style))
], null)], null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(line_style),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"rgba(0, 0, 0, 0.4)"], null)], 0)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Idade: "], null),idade," anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Sexo: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,((function (map__20416,map__20416__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (){
var G__20421 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_toggle_DASH_sexo], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20421) : react_med.util._GT_evt.call(null,G__20421));
});})(map__20416,map__20416__$1,nome,nascimento,idade,sexo,estatura,line_style))
,cljs.core.cst$kw$style,({"backgroundColor": "#e5e9ed", "cursor": "pointer", "borderRadius": "30px", "padding": "7px 13px"})], null),sexo], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Estatura: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,estatura,cljs.core.cst$kw$suffix," cm",cljs.core.cst$kw$onBlur,((function (map__20416,map__20416__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (p1__20415_SHARP_){
var G__20422 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_change_DASH_height,p1__20415_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20422) : react_med.util._GT_evt.call(null,G__20422));
});})(map__20416,map__20416__$1,nome,nascimento,idade,sexo,estatura,line_style))
], null)], null)], null)], null);
});
react_med.screens.patient_info.core.patient_info_component = (function react_med$screens$patient_info$core$patient_info_component(){
var map__20423 = (function (){var G__20427 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_selected_DASH_patient], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20427) : react_med.util._LT_sub.call(null,G__20427));
})();
var map__20423__$1 = (((((!((map__20423 == null))))?(((((map__20423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20423):map__20423);
var nome = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20423__$1,cljs.core.cst$kw$nome);
var nascimento = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20423__$1,cljs.core.cst$kw$nascimento);
var idade = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20423__$1,cljs.core.cst$kw$idade);
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20423__$1,cljs.core.cst$kw$sexo);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20423__$1,cljs.core.cst$kw$estatura);
var vec__20424 = cljs.core.re_find(/(\d{4})\D(\d{1,2})\D(\d{1,2})/,nascimento);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20424,(0),null);
var birth_year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20424,(1),null);
var birth_month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20424,(2),null);
var birth_day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20424,(3),null);
var line_style = ({"display": "flex", "alignItems": "center", "whiteSpace": "pre", "height": (48)});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Nome: "], null),nome], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Nascimento: "], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(birth_day),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(birth_month),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(birth_year)].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Idade: "], null),idade," anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Sexo: "], null),sexo], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Estatura: "], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(estatura).replace(".",",")," cm"], null)], null);
});
react_med.screens.patient_info.core.patient_detail = (function react_med$screens$patient_info$core$patient_detail(p__20429,content_view){
var map__20430 = p__20429;
var map__20430__$1 = (((((!((map__20430 == null))))?(((((map__20430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20430):map__20430);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20430__$1,cljs.core.cst$kw$actions);
var menu_structure = (function (){var G__20432 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_side_DASH_menu], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20432) : react_med.util._LT_sub.call(null,G__20432));
})();
var title = (function (){var G__20433 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_title], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20433) : react_med.util._LT_sub.call(null,G__20433));
})();
var tabs = (function (){var G__20434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_tabs], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20434) : react_med.util._LT_sub.call(null,G__20434));
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variation,"<-"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.screen_title,title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.tabs_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$menu_DASH_options,tabs], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,cljs.core.with_meta(content_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(1)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.drawer_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$menu_DASH_structure,menu_structure], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.actions_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$actions,actions], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.bottom_bar], null)], null);
});
react_med.screens.patient_info.core.patient_info_actions = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Editar",cljs.core.cst$kw$event,cljs.core.cst$kw$edit], null)], null);
react_med.screens.patient_info.core.patient_info = (function react_med$screens$patient_info$core$patient_info(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_detail,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$actions,react_med.screens.patient_info.core.patient_info_actions], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_info_component], null)], null);
});
react_med.screens.patient_info.core.editing_patient_info_actions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Pronto",cljs.core.cst$kw$event,cljs.core.cst$kw$ok], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Cancelar",cljs.core.cst$kw$event,cljs.core.cst$kw$cancel], null)], null);
react_med.screens.patient_info.core.editing_patient_info = (function react_med$screens$patient_info$core$editing_patient_info(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_detail,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$actions,react_med.screens.patient_info.core.editing_patient_info_actions], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.editing_patient_info_component], null)], null);
});
