// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.screens.paciente_avaliacao');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_med.shell_components');
goog.require('react_med.util');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('reagent.core');
goog.require('react_med.screens.components');
goog.require('tick.alpha.api');
react_med.screens.paciente_avaliacao.selected_avaliacao = (function react_med$screens$paciente_avaliacao$selected_avaliacao(app_state){
var paciente_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null));
var avaliacao_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null));
var avaliacao = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,paciente_id,cljs.core.cst$kw$avaliacoes,avaliacao_id], null));
return avaliacao;
});
var G__25591_25593 = cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_selected_DASH_avaliacao;
var G__25592_25594 = react_med.screens.paciente_avaliacao.selected_avaliacao;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25591_25593,G__25592_25594) : re_frame.core.reg_sub.call(null,G__25591_25593,G__25592_25594));
react_med.screens.paciente_avaliacao.date__GT_ddMMyyyy = (function react_med$screens$paciente_avaliacao$date__GT_ddMMyyyy(date){
if(cljs.core.truth_(date)){
var pad = (function (p1__25595_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25595_SHARP_)),(1))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25595_SHARP_)].join('');
} else {
return p1__25595_SHARP_;
}
});
var dd = pad(tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$1(date));
var MM = pad(tick.alpha.api.int$(tick.alpha.api.month.cljs$core$IFn$_invoke$arity$1(date)));
var yyyy = tick.alpha.api.int$(tick.alpha.api.year.cljs$core$IFn$_invoke$arity$1(date));
var day = tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$1(date);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dd),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(MM),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(yyyy)].join('');
} else {
return null;
}
});
react_med.screens.paciente_avaliacao.should_show_QMARK_ = (function react_med$screens$paciente_avaliacao$should_show_QMARK_(el){
var and__4120__auto__ = el;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(isNaN(el));
} else {
return and__4120__auto__;
}
});
react_med.screens.paciente_avaliacao.details_component = (function react_med$screens$paciente_avaliacao$details_component(){
var map__25596 = (function (){var G__25597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_selected_DASH_avaliacao], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__25597) : react_med.util._LT_sub.call(null,G__25597));
})();
var map__25596__$1 = (((((!((map__25596 == null))))?(((((map__25596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25596):map__25596);
var circunferencia_quadril = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25596__$1,cljs.core.cst$kw$circunferencia_DASH_quadril);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25596__$1,cljs.core.cst$kw$data);
var atividade_fisica = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25596__$1,cljs.core.cst$kw$atividade_DASH_fisica);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25596__$1,cljs.core.cst$kw$reatancia);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25596__$1,cljs.core.cst$kw$estatura);
var circunferencia_braco = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25596__$1,cljs.core.cst$kw$circunferencia_DASH_braco);
var circunferencia_cintura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25596__$1,cljs.core.cst$kw$circunferencia_DASH_cintura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25596__$1,cljs.core.cst$kw$resistencia);
var circunferencia_perna = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25596__$1,cljs.core.cst$kw$circunferencia_DASH_perna);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25596__$1,cljs.core.cst$kw$peso);
var line_style = ({"display": "flex", "alignItems": "center", "height": (48), "whiteSpace": "pre"});
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Data: "], null),react_med.screens.paciente_avaliacao.date__GT_ddMMyyyy(data)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Peso: "], null),(cljs.core.truth_(react_med.screens.paciente_avaliacao.should_show_QMARK_(peso))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(peso)," Kg"].join('').replace(".",","):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Estatura: "], null),(cljs.core.truth_(react_med.screens.paciente_avaliacao.should_show_QMARK_(estatura))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(estatura)," cm"].join('').replace(".",","):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Resist\u00EAncia: "], null),(cljs.core.truth_(react_med.screens.paciente_avaliacao.should_show_QMARK_(resistencia))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(resistencia).replace(".",","):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Reat\u00E2ncia: "], null),(cljs.core.truth_(react_med.screens.paciente_avaliacao.should_show_QMARK_(reatancia))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(reatancia).replace(".",","):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"N\u00EDvel de Atividade F\u00EDsica: "], null),atividade_fisica], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Circunfer\u00EAncia da Cintura: "], null),(cljs.core.truth_(react_med.screens.paciente_avaliacao.should_show_QMARK_(circunferencia_cintura))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(circunferencia_cintura)," cm"].join('').replace(".",","):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Circunfer\u00EAncia da Quadril "], null),(cljs.core.truth_(react_med.screens.paciente_avaliacao.should_show_QMARK_(circunferencia_quadril))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(circunferencia_quadril)," cm"].join('').replace(".",","):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Circunfer\u00EAncia de Bra\u00E7o: "], null),(cljs.core.truth_(react_med.screens.paciente_avaliacao.should_show_QMARK_(circunferencia_braco))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(circunferencia_braco)," cm"].join('').replace(".",","):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Circunfer\u00EAncia de Perna: "], null),(cljs.core.truth_(react_med.screens.paciente_avaliacao.should_show_QMARK_(circunferencia_perna))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(circunferencia_perna)," cm"].join('').replace(".",","):null)], null)], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.paciente_avaliacao.change_avaliacao = (function react_med$screens$paciente_avaliacao$change_avaliacao(app_state,p__25599){
var vec__25600 = p__25599;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25600,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25600,(1),null);
var new_value_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25600,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null)),cljs.core.cst$sym$avaliacao_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null)),cljs.core.cst$sym$new_DASH_value,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$atividade_DASH_fisica,"null",cljs.core.cst$kw$data,"null"], null), null),cljs.core.cst$sym$attr),cljs.core.cst$sym$new_DASH_value_DASH_input,cljs.core.list(cljs.core.cst$sym$js_SLASH_parseFloat,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_value_DASH_input,",",".")))], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes,cljs.core.cst$sym$avaliacao_DASH_id,cljs.core.cst$sym$attr], null),cljs.core.cst$sym$new_DASH_value)));

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
var avaliacao_id = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var new_value = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (cljs.core.truth_((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var G__25605 = (function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = attr;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$attr,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})();
var fexpr__25604 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$atividade_DASH_fisica,null,cljs.core.cst$kw$data,null], null), null);
return (fexpr__25604.cljs$core$IFn$_invoke$arity$1 ? fexpr__25604.cljs$core$IFn$_invoke$arity$1(G__25605) : fexpr__25604.call(null,G__25605));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$atividade_DASH_fisica,"null",cljs.core.cst$kw$data,"null"], null), null),cljs.core.cst$sym$attr),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})())?(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new_value_input;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$new_DASH_value_DASH_input,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})():(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = parseFloat((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new_value_input;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$new_DASH_value_DASH_input,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})().replace(",",".");
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_value_DASH_input,",","."),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$js_SLASH_parseFloat,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_value_DASH_input,",",".")),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$atividade_DASH_fisica,"null",cljs.core.cst$kw$data,"null"], null), null),cljs.core.cst$sym$attr),cljs.core.cst$sym$new_DASH_value_DASH_input,cljs.core.list(cljs.core.cst$sym$js_SLASH_parseFloat,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_value_DASH_input,",","."))),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.assoc_in((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$avaliacoes,(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = avaliacao_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$avaliacao_DASH_id,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = attr;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$attr,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes,cljs.core.cst$sym$avaliacao_DASH_id,cljs.core.cst$sym$attr], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new_value;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$new_DASH_value,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes,cljs.core.cst$sym$avaliacao_DASH_id,cljs.core.cst$sym$attr], null),cljs.core.cst$sym$new_DASH_value),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null)),cljs.core.cst$sym$avaliacao_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null)),cljs.core.cst$sym$new_DASH_value,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$atividade_DASH_fisica,"null",cljs.core.cst$kw$data,"null"], null), null),cljs.core.cst$sym$attr),cljs.core.cst$sym$new_DASH_value_DASH_input,cljs.core.list(cljs.core.cst$sym$js_SLASH_parseFloat,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_value_DASH_input,",",".")))], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$avaliacoes,cljs.core.cst$sym$avaliacao_DASH_id,cljs.core.cst$sym$attr], null),cljs.core.cst$sym$new_DASH_value)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e25603){var e = e25603;
throw e;
}});
} else {
react_med.screens.paciente_avaliacao.change_avaliacao = (function react_med$screens$paciente_avaliacao$change_avaliacao(app_state,p__25606){
var vec__25607 = p__25606;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25607,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25607,(1),null);
var new_value_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25607,(2),null);
var paciente_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null));
var avaliacao_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$avaliacao_DASH_selecionada], null));
var new_value = (cljs.core.truth_((function (){var fexpr__25610 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$atividade_DASH_fisica,null,cljs.core.cst$kw$data,null], null), null);
return (fexpr__25610.cljs$core$IFn$_invoke$arity$1 ? fexpr__25610.cljs$core$IFn$_invoke$arity$1(attr) : fexpr__25610.call(null,attr));
})())?new_value_input:parseFloat(new_value_input.replace(",",".")));
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,paciente_id,cljs.core.cst$kw$avaliacoes,avaliacao_id,attr], null),new_value);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,react_med.screens.paciente_avaliacao.change_avaliacao);
react_med.screens.paciente_avaliacao.editing_component = (function react_med$screens$paciente_avaliacao$editing_component(){
var map__25620 = (function (){var G__25621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_selected_DASH_avaliacao], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__25621) : react_med.util._LT_sub.call(null,G__25621));
})();
var map__25620__$1 = (((((!((map__25620 == null))))?(((((map__25620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25620):map__25620);
var circunferencia_quadril = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25620__$1,cljs.core.cst$kw$circunferencia_DASH_quadril);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25620__$1,cljs.core.cst$kw$data);
var atividade_fisica = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25620__$1,cljs.core.cst$kw$atividade_DASH_fisica);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25620__$1,cljs.core.cst$kw$reatancia);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25620__$1,cljs.core.cst$kw$estatura);
var circunferencia_braco = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25620__$1,cljs.core.cst$kw$circunferencia_DASH_braco);
var circunferencia_cintura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25620__$1,cljs.core.cst$kw$circunferencia_DASH_cintura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25620__$1,cljs.core.cst$kw$resistencia);
var circunferencia_perna = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25620__$1,cljs.core.cst$kw$circunferencia_DASH_perna);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25620__$1,cljs.core.cst$kw$peso);
var line_style = ({"display": "flex", "alignItems": "center", "height": (48), "whiteSpace": "pre"});
var innactive_round_button = ({"backgroundColor": "#e5e9ed80", "color": "#00000080", "cursor": "pointer", "borderRadius": "30px", "margin": "0 5px", "padding": "7px 13px"});
var round_button = ({"backgroundColor": "#e5e9ed", "cursor": "pointer", "borderRadius": "30px", "margin": "0 5px", "padding": "7px 13px"});
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"display": "flex", "alignItems": "center", "height": (48)})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"margin": "0 5px 0 0"})], null),"Data: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dom_DASH_module_SHARP_vaadin_DASH_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$theme_DASH_for,"vaadin-date-picker-overlay"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$template,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style,"vaadin-date-picker-overlay{\n         z-index: 1200;\n         }"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.util.with_mount_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vaadin_DASH_date_DASH_picker,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,data,cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button){
return (function (this$){
return reagent.core.dom_node(this$).onchange = ((function (map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button){
return (function (p1__25611_SHARP_){
var G__25623 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$data,p1__25611_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__25623) : react_med.util._GT_evt.call(null,G__25623));
});})(map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button))
;
});})(map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button))
], null)], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Peso: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,peso,cljs.core.cst$kw$onBlur,((function (map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button){
return (function (p1__25612_SHARP_){
var G__25624 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$peso,p1__25612_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__25624) : react_med.util._GT_evt.call(null,G__25624));
});})(map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button))
,cljs.core.cst$kw$suffix," Kg"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Estatura: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,estatura,cljs.core.cst$kw$onBlur,((function (map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button){
return (function (p1__25613_SHARP_){
var G__25625 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$estatura,p1__25613_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__25625) : react_med.util._GT_evt.call(null,G__25625));
});})(map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button))
,cljs.core.cst$kw$suffix," cm"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Resist\u00EAncia: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,resistencia,cljs.core.cst$kw$onBlur,((function (map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button){
return (function (p1__25614_SHARP_){
var G__25626 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$resistencia,p1__25614_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__25626) : react_med.util._GT_evt.call(null,G__25626));
});})(map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button))
,cljs.core.cst$kw$max,(20000)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Reat\u00E2ncia: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,reatancia,cljs.core.cst$kw$onBlur,((function (map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button){
return (function (p1__25615_SHARP_){
var G__25627 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$reatancia,p1__25615_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__25627) : react_med.util._GT_evt.call(null,G__25627));
});})(map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button))
,cljs.core.cst$kw$max,(20000)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "margin": "5px 0 15px 0", "height": (48)})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"N\u00EDvel de Atividade F\u00EDsica: "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"margin": "5px 0 10px 0"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,((function (map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button){
return (function (){
var G__25628 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$atividade_DASH_fisica,"N\u00E3o Ativo"], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__25628) : react_med.util._GT_evt.call(null,G__25628));
});})(map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button))
,cljs.core.cst$kw$style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("N\u00E3o Ativo",atividade_fisica))?round_button:innactive_round_button)], null),"N\u00E3o Ativo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,((function (map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button){
return (function (){
var G__25629 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$atividade_DASH_fisica,"Ativo"], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__25629) : react_med.util._GT_evt.call(null,G__25629));
});})(map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button))
,cljs.core.cst$kw$style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Ativo",atividade_fisica))?round_button:innactive_round_button)], null),"Ativo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,((function (map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button){
return (function (){
var G__25630 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$atividade_DASH_fisica,"Atleta"], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__25630) : react_med.util._GT_evt.call(null,G__25630));
});})(map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button))
,cljs.core.cst$kw$style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Atleta",atividade_fisica))?round_button:innactive_round_button)], null),"Atleta"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Circunfer\u00EAncia da Cintura: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,circunferencia_cintura,cljs.core.cst$kw$onBlur,((function (map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button){
return (function (p1__25616_SHARP_){
var G__25631 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$circunferencia_DASH_cintura,p1__25616_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__25631) : react_med.util._GT_evt.call(null,G__25631));
});})(map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button))
,cljs.core.cst$kw$suffix," cm"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Circunfer\u00EAncia da Quadril "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,circunferencia_quadril,cljs.core.cst$kw$onBlur,((function (map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button){
return (function (p1__25617_SHARP_){
var G__25632 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$circunferencia_DASH_quadril,p1__25617_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__25632) : react_med.util._GT_evt.call(null,G__25632));
});})(map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button))
,cljs.core.cst$kw$suffix," cm"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Circunfer\u00EAncia de Bra\u00E7o: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,circunferencia_braco,cljs.core.cst$kw$onBlur,((function (map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button){
return (function (p1__25618_SHARP_){
var G__25633 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$circunferencia_DASH_braco,p1__25618_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__25633) : react_med.util._GT_evt.call(null,G__25633));
});})(map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button))
,cljs.core.cst$kw$suffix," cm"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Circunfer\u00EAncia de Perna: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,circunferencia_perna,cljs.core.cst$kw$onBlur,((function (map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button){
return (function (p1__25619_SHARP_){
var G__25634 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$circunferencia_DASH_perna,p1__25619_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__25634) : react_med.util._GT_evt.call(null,G__25634));
});})(map__25620,map__25620__$1,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style,innactive_round_button,round_button))
,cljs.core.cst$kw$suffix," cm"], null)], null)], null)], null);
});
react_med.screens.paciente_avaliacao.detail_view = (function react_med$screens$paciente_avaliacao$detail_view(){
var actions = (function (){var G__25635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_actions], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__25635) : react_med.util._LT_sub.call(null,G__25635));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_avaliacao.details_component], null)], null)], null);
});
react_med.screens.paciente_avaliacao.editing_view = (function react_med$screens$paciente_avaliacao$editing_view(){
var actions = (function (){var G__25636 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_actions], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__25636) : react_med.util._LT_sub.call(null,G__25636));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_avaliacao.editing_component], null)], null)], null);
});
