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
react_med.screens.paciente_avaliacao.paciente_avaliacao_shell = (function react_med$screens$paciente_avaliacao$paciente_avaliacao_shell(p__20234,content_view){
var map__20235 = p__20234;
var map__20235__$1 = (((((!((map__20235 == null))))?(((((map__20235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20235):map__20235);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20235__$1,cljs.core.cst$kw$actions);
var menu_structure = (function (){var G__20237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_side_DASH_menu], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20237) : react_med.util._LT_sub.call(null,G__20237));
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variation,"<-"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.screen_title,(function (){var G__20238 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_title], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20238) : react_med.util._LT_sub.call(null,G__20238));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.tabs_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$menu_DASH_options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Coleta",cljs.core.cst$kw$state,"coleta"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Relat\u00F3rio",cljs.core.cst$kw$state,"relatorio"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,cljs.core.with_meta(content_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(1)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.drawer_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$menu_DASH_structure,menu_structure], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.actions_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$actions,actions], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.bottom_bar], null)], null);
});
react_med.screens.paciente_avaliacao.selected_avaliacao = (function react_med$screens$paciente_avaliacao$selected_avaliacao(app_state){
var avaliacao = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$avaliacoes,(0)], null));
return avaliacao;
});
var G__20239_20241 = cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_selected_DASH_avaliacao;
var G__20240_20242 = react_med.screens.paciente_avaliacao.selected_avaliacao;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20239_20241,G__20240_20242) : re_frame.core.reg_sub.call(null,G__20239_20241,G__20240_20242));
react_med.screens.paciente_avaliacao.details_component = (function react_med$screens$paciente_avaliacao$details_component(){
var map__20243 = (function (){var G__20244 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_selected_DASH_avaliacao], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20244) : react_med.util._LT_sub.call(null,G__20244));
})();
var map__20243__$1 = (((((!((map__20243 == null))))?(((((map__20243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20243):map__20243);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,cljs.core.cst$kw$data);
var atividade_fisica = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,cljs.core.cst$kw$atividade_DASH_fisica);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,cljs.core.cst$kw$reatancia);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,cljs.core.cst$kw$estatura);
var circunferencia_braco = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,cljs.core.cst$kw$circunferencia_DASH_braco);
var circunferencia_cintura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,cljs.core.cst$kw$circunferencia_DASH_cintura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,cljs.core.cst$kw$resistencia);
var circunferencia_perna = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,cljs.core.cst$kw$circunferencia_DASH_perna);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,cljs.core.cst$kw$peso);
var line_style = ({"display": "flex", "alignItems": "center", "height": (48), "whiteSpace": "pre"});
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Data: "], null),data], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Peso: "], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(peso).replace(".",",")," Kg"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Estatura: "], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(estatura).replace(".",",")," cm"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Resist\u00EAncia: "], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(resistencia).replace(".",",")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Reat\u00E2ncia: "], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reatancia).replace(".",",")], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Circunfer\u00EAncia da Cintura: "], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(circunferencia_cintura).replace(".",",")," cm"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Circunfer\u00EAncia de Bra\u00E7o: "], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(circunferencia_braco).replace(".",",")," cm"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Circunfer\u00EAncia de Perna: "], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(circunferencia_perna).replace(".",",")," cm"], null)], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.paciente_avaliacao.change_avaliacao = (function react_med$screens$paciente_avaliacao$change_avaliacao(app_state,p__20246){
var vec__20247 = p__20246;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20247,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20247,(1),null);
var new_value_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20247,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$new_DASH_value,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$atividade_DASH_fisica,"null",cljs.core.cst$kw$data,"null"], null), null),cljs.core.cst$sym$attr),cljs.core.cst$sym$new_DASH_value_DASH_input,cljs.core.list(cljs.core.cst$sym$js_SLASH_parseFloat,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_value_DASH_input,",",".")))], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$avaliacoes,(0),cljs.core.cst$sym$attr], null),cljs.core.cst$sym$new_DASH_value)));

var opts__19692__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = (function (){var new_value = (function (){var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = (cljs.core.truth_((function (){var opts__19692__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = (function (){var G__20252 = (function (){var opts__19692__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = attr;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$attr,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19693__auto__;
})();
var fexpr__20251 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$atividade_DASH_fisica,null,cljs.core.cst$kw$data,null], null), null);
return (fexpr__20251.cljs$core$IFn$_invoke$arity$1 ? fexpr__20251.cljs$core$IFn$_invoke$arity$1(G__20252) : fexpr__20251.call(null,G__20252));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$atividade_DASH_fisica,"null",cljs.core.cst$kw$data,"null"], null), null),cljs.core.cst$sym$attr),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19693__auto__;
})())?(function (){var opts__19692__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new_value_input;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$new_DASH_value_DASH_input,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19693__auto__;
})():(function (){var opts__19692__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = parseFloat((function (){var opts__19692__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = (function (){var opts__19692__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new_value_input;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$new_DASH_value_DASH_input,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19693__auto__;
})().replace(",",".");
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_value_DASH_input,",","."),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19693__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$js_SLASH_parseFloat,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_value_DASH_input,",",".")),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19693__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$atividade_DASH_fisica,"null",cljs.core.cst$kw$data,"null"], null), null),cljs.core.cst$sym$attr),cljs.core.cst$sym$new_DASH_value_DASH_input,cljs.core.list(cljs.core.cst$sym$js_SLASH_parseFloat,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_value_DASH_input,",","."))),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19693__auto__;
})();
var opts__19692__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = cljs.core.assoc_in((function (){var opts__19692__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$avaliacoes,(0),(function (){var opts__19692__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = attr;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$attr,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19693__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$avaliacoes,(0),cljs.core.cst$sym$attr], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19693__auto__;
})(),(function (){var opts__19692__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19693__auto__ = new_value;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$new_DASH_value,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19693__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$avaliacoes,(0),cljs.core.cst$sym$attr], null),cljs.core.cst$sym$new_DASH_value),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19693__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19693__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$new_DASH_value,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$atividade_DASH_fisica,"null",cljs.core.cst$kw$data,"null"], null), null),cljs.core.cst$sym$attr),cljs.core.cst$sym$new_DASH_value_DASH_input,cljs.core.list(cljs.core.cst$sym$js_SLASH_parseFloat,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_value_DASH_input,",",".")))], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$avaliacoes,(0),cljs.core.cst$sym$attr], null),cljs.core.cst$sym$new_DASH_value)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19693__auto__;
}catch (e20250){var e = e20250;
throw e;
}});
} else {
react_med.screens.paciente_avaliacao.change_avaliacao = (function react_med$screens$paciente_avaliacao$change_avaliacao(app_state,p__20253){
var vec__20254 = p__20253;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20254,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20254,(1),null);
var new_value_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20254,(2),null);
var new_value = (cljs.core.truth_((function (){var fexpr__20257 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$atividade_DASH_fisica,null,cljs.core.cst$kw$data,null], null), null);
return (fexpr__20257.cljs$core$IFn$_invoke$arity$1 ? fexpr__20257.cljs$core$IFn$_invoke$arity$1(attr) : fexpr__20257.call(null,attr));
})())?new_value_input:parseFloat(new_value_input.replace(",",".")));
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(0),cljs.core.cst$kw$avaliacoes,(0),attr], null),new_value);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,react_med.screens.paciente_avaliacao.change_avaliacao);
react_med.screens.paciente_avaliacao.editing_component = (function react_med$screens$paciente_avaliacao$editing_component(){
var map__20266 = (function (){var G__20267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_selected_DASH_avaliacao], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__20267) : react_med.util._LT_sub.call(null,G__20267));
})();
var map__20266__$1 = (((((!((map__20266 == null))))?(((((map__20266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20266):map__20266);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20266__$1,cljs.core.cst$kw$data);
var atividade_fisica = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20266__$1,cljs.core.cst$kw$atividade_DASH_fisica);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20266__$1,cljs.core.cst$kw$reatancia);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20266__$1,cljs.core.cst$kw$estatura);
var circunferencia_braco = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20266__$1,cljs.core.cst$kw$circunferencia_DASH_braco);
var circunferencia_cintura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20266__$1,cljs.core.cst$kw$circunferencia_DASH_cintura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20266__$1,cljs.core.cst$kw$resistencia);
var circunferencia_perna = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20266__$1,cljs.core.cst$kw$circunferencia_DASH_perna);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20266__$1,cljs.core.cst$kw$peso);
var line_style = ({"display": "flex", "alignItems": "center", "height": (48)});
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Data: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dom_DASH_module_SHARP_vaadin_DASH_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$theme_DASH_for,"vaadin-date-picker-overlay"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$template,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style,"vaadin-date-picker-overlay{\n         z-index: 1200;\n         }"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.util.with_mount_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vaadin_DASH_date_DASH_picker,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,data,cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style){
return (function (this$){
return reagent.core.dom_node(this$).onchange = ((function (map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style){
return (function (p1__20258_SHARP_){
var G__20269 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$data,p1__20258_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20269) : react_med.util._GT_evt.call(null,G__20269));
});})(map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style))
;
});})(map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style))
], null)], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Peso: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,peso,cljs.core.cst$kw$onBlur,((function (map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style){
return (function (p1__20259_SHARP_){
var G__20270 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$peso,p1__20259_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20270) : react_med.util._GT_evt.call(null,G__20270));
});})(map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style))
,cljs.core.cst$kw$suffix," Kg"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Estatura: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,estatura,cljs.core.cst$kw$onBlur,((function (map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style){
return (function (p1__20260_SHARP_){
var G__20271 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$estatura,p1__20260_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20271) : react_med.util._GT_evt.call(null,G__20271));
});})(map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style))
,cljs.core.cst$kw$suffix," cm"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Resist\u00EAncia: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,resistencia,cljs.core.cst$kw$onBlur,((function (map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style){
return (function (p1__20261_SHARP_){
var G__20272 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$resistencia,p1__20261_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20272) : react_med.util._GT_evt.call(null,G__20272));
});})(map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style))
,cljs.core.cst$kw$max,(20000)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Reat\u00E2ncia: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,reatancia,cljs.core.cst$kw$onBlur,((function (map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style){
return (function (p1__20262_SHARP_){
var G__20273 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$reatancia,p1__20262_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20273) : react_med.util._GT_evt.call(null,G__20273));
});})(map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style))
,cljs.core.cst$kw$max,(20000)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Circunfer\u00EAncia da Cintura: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,circunferencia_cintura,cljs.core.cst$kw$onBlur,((function (map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style){
return (function (p1__20263_SHARP_){
var G__20274 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$circunferencia_DASH_cintura,p1__20263_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20274) : react_med.util._GT_evt.call(null,G__20274));
});})(map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style))
,cljs.core.cst$kw$suffix," cm"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Circunfer\u00EAncia de Bra\u00E7o: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,circunferencia_braco,cljs.core.cst$kw$onBlur,((function (map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style){
return (function (p1__20264_SHARP_){
var G__20275 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$circunferencia_DASH_braco,p1__20264_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20275) : react_med.util._GT_evt.call(null,G__20275));
});})(map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style))
,cljs.core.cst$kw$suffix," cm"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Circunfer\u00EAncia de Perna: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,circunferencia_perna,cljs.core.cst$kw$onBlur,((function (map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style){
return (function (p1__20265_SHARP_){
var G__20276 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_avaliacao_SLASH_change_DASH_avaliacao,cljs.core.cst$kw$circunferencia_DASH_perna,p1__20265_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20276) : react_med.util._GT_evt.call(null,G__20276));
});})(map__20266,map__20266__$1,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,line_style))
,cljs.core.cst$kw$suffix," cm"], null)], null)], null)], null);
});
react_med.screens.paciente_avaliacao.actions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Voltar",cljs.core.cst$kw$event,cljs.core.cst$kw$back], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Editar",cljs.core.cst$kw$event,cljs.core.cst$kw$edit], null)], null);
react_med.screens.paciente_avaliacao.detail_view = (function react_med$screens$paciente_avaliacao$detail_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_avaliacao.paciente_avaliacao_shell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$actions,react_med.screens.paciente_avaliacao.actions], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_avaliacao.details_component], null)], null);
});
react_med.screens.paciente_avaliacao.editing_actions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Pronto",cljs.core.cst$kw$event,cljs.core.cst$kw$ok], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Cancelar",cljs.core.cst$kw$event,cljs.core.cst$kw$cancel], null)], null);
react_med.screens.paciente_avaliacao.editing_view = (function react_med$screens$paciente_avaliacao$editing_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_avaliacao.paciente_avaliacao_shell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$actions,react_med.screens.paciente_avaliacao.editing_actions], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_avaliacao.editing_component], null)], null);
});
