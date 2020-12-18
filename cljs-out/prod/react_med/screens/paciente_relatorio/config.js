// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.paciente_relatorio.config');
goog.require('cljs.core');
goog.require('day8.re_frame.tracing');
goog.require('menu_item');
goog.require('re_frame.core');
goog.require('react_med.screens.paciente_relatorio.bioimpedance');
goog.require('react_med.screens.paciente_relatorio.paciente_relatorio');
goog.require('react_med.shell_components');
goog.require('react_med.util');
goog.require('select');
react_med.screens.paciente_relatorio.config.global$module$menu_item = goog.global["MenuItem"];
react_med.screens.paciente_relatorio.config.global$module$select = goog.global["Select"];
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.paciente_relatorio.config.select_equation = (function react_med$screens$paciente_relatorio$config$select_equation(app_state,p__15732){
var vec__15733 = p__15732;
var event = cljs.core.nth.call(null,vec__15733,(0),null);
var equation_to_update = cljs.core.nth.call(null,vec__15733,(1),null);
var chosen_equation = cljs.core.nth.call(null,vec__15733,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null)),new cljs.core.Symbol(null,"avaliacao-id","avaliacao-id",1663556238,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),new cljs.core.Symbol(null,"avaliacao-id","avaliacao-id",1663556238,null),new cljs.core.Keyword(null,"equacoes-escolhidas","equacoes-escolhidas",-96891382),new cljs.core.Symbol(null,"equation-to-update","equation-to-update",1193810205,null)], null),new cljs.core.Symbol(null,"chosen-equation","chosen-equation",1877448688,null))));

var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = (function (){var paciente_id = (function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.get_in.call(null,(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})();
var avaliacao_id = (function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.get_in.call(null,(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})();
var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})(),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = avaliacao_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"avaliacao-id","avaliacao-id",1663556238,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})(),new cljs.core.Keyword(null,"equacoes-escolhidas","equacoes-escolhidas",-96891382),(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = equation_to_update;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"equation-to-update","equation-to-update",1193810205,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),new cljs.core.Symbol(null,"avaliacao-id","avaliacao-id",1663556238,null),new cljs.core.Keyword(null,"equacoes-escolhidas","equacoes-escolhidas",-96891382),new cljs.core.Symbol(null,"equation-to-update","equation-to-update",1193810205,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = chosen_equation;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"chosen-equation","chosen-equation",1877448688,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),new cljs.core.Symbol(null,"avaliacao-id","avaliacao-id",1663556238,null),new cljs.core.Keyword(null,"equacoes-escolhidas","equacoes-escolhidas",-96891382),new cljs.core.Symbol(null,"equation-to-update","equation-to-update",1193810205,null)], null),new cljs.core.Symbol(null,"chosen-equation","chosen-equation",1877448688,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null)),new cljs.core.Symbol(null,"avaliacao-id","avaliacao-id",1663556238,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),new cljs.core.Symbol(null,"avaliacao-id","avaliacao-id",1663556238,null),new cljs.core.Keyword(null,"equacoes-escolhidas","equacoes-escolhidas",-96891382),new cljs.core.Symbol(null,"equation-to-update","equation-to-update",1193810205,null)], null),new cljs.core.Symbol(null,"chosen-equation","chosen-equation",1877448688,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14483__auto__;
}catch (e15736){var e = e15736;
throw e;
}});
} else {
react_med.screens.paciente_relatorio.config.select_equation = (function react_med$screens$paciente_relatorio$config$select_equation(app_state,p__15737){
var vec__15738 = p__15737;
var event = cljs.core.nth.call(null,vec__15738,(0),null);
var equation_to_update = cljs.core.nth.call(null,vec__15738,(1),null);
var chosen_equation = cljs.core.nth.call(null,vec__15738,(2),null);
var paciente_id = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null));
var avaliacao_id = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null));
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),paciente_id,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),avaliacao_id,new cljs.core.Keyword(null,"equacoes-escolhidas","equacoes-escolhidas",-96891382),equation_to_update], null),chosen_equation);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.config","select-equation","react-med.screens.paciente-relatorio.config/select-equation",866445108),react_med.screens.paciente_relatorio.config.select_equation);
react_med.screens.paciente_relatorio.config.equacao_massa_livre_de_gordura = (function react_med$screens$paciente_relatorio$config$equacao_massa_livre_de_gordura(p__15741){
var map__15742 = p__15741;
var map__15742__$1 = (((((!((map__15742 == null))))?(((((map__15742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15742):map__15742);
var avaliacao_info = map__15742__$1;
var map__15743 = cljs.core.get.call(null,map__15742__$1,new cljs.core.Keyword(null,"equacoes-escolhidas","equacoes-escolhidas",-96891382));
var map__15743__$1 = (((((!((map__15743 == null))))?(((((map__15743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15743):map__15743);
var massa_livre_de_gordura = cljs.core.get.call(null,map__15743__$1,new cljs.core.Keyword(null,"massa-livre-de-gordura","massa-livre-de-gordura",-482384408));
if(react_med.util.valid_QMARK_.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","avaliacao-info","react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info",325326502),avaliacao_info)){
var or__4131__auto__ = massa_livre_de_gordura;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return react_med.screens.paciente_relatorio.bioimpedance.default_massa_livre_de_gordura.call(null,avaliacao_info);
}
} else {
return null;
}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.config","equacao-massa-livre-de-gordura","react-med.screens.paciente-relatorio.config/equacao-massa-livre-de-gordura",1776624730),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.paciente-relatorio","avaliacao-info","react-med.screens.paciente-relatorio.paciente-relatorio/avaliacao-info",39331421)], null),react_med.screens.paciente_relatorio.config.equacao_massa_livre_de_gordura);
react_med.screens.paciente_relatorio.config.equacao_agua_corporal_total = (function react_med$screens$paciente_relatorio$config$equacao_agua_corporal_total(p__15746){
var map__15747 = p__15746;
var map__15747__$1 = (((((!((map__15747 == null))))?(((((map__15747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15747):map__15747);
var avaliacao_info = map__15747__$1;
var map__15748 = cljs.core.get.call(null,map__15747__$1,new cljs.core.Keyword(null,"equacoes-escolhidas","equacoes-escolhidas",-96891382));
var map__15748__$1 = (((((!((map__15748 == null))))?(((((map__15748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15748):map__15748);
var agua_corporal_total = cljs.core.get.call(null,map__15748__$1,new cljs.core.Keyword(null,"agua-corporal-total","agua-corporal-total",-766245357));
if(react_med.util.valid_QMARK_.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","avaliacao-info","react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info",325326502),avaliacao_info)){
var or__4131__auto__ = agua_corporal_total;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return react_med.screens.paciente_relatorio.bioimpedance.default_agua_corporal.call(null,avaliacao_info);
}
} else {
return null;
}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.config","equacao-agua-corporal-total","react-med.screens.paciente-relatorio.config/equacao-agua-corporal-total",-445651380),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.paciente-relatorio","avaliacao-info","react-med.screens.paciente-relatorio.paciente-relatorio/avaliacao-info",39331421)], null),react_med.screens.paciente_relatorio.config.equacao_agua_corporal_total);
react_med.screens.paciente_relatorio.config.selecao_massa_livre_de_gordura = (function react_med$screens$paciente_relatorio$config$selecao_massa_livre_de_gordura(){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.config.global$module$select,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.config","equacao-massa-livre-de-gordura","react-med.screens.paciente-relatorio.config/equacao-massa-livre-de-gordura",1776624730)], null)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__15751_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.config","select-equation","react-med.screens.paciente-relatorio.config/select-equation",866445108),new cljs.core.Keyword(null,"massa-livre-de-gordura","massa-livre-de-gordura",-482384408),p1__15751_SHARP_.target.value], null));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"eq1-high-pa-fitness-and-athletestes"], null),"Alta aptid\u00E3o f\u00EDsica e atletas"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"eq2-male-and-female-children-from-8-15-years"], null),"Crian\u00E7as e adolescentes entre 8 e 17 anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"eq3-females-18-30-years"], null),"Mulheres entre 18 e 29 anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"eq7-males-18-30-years"], null),"Homens entre 18 e 29 anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"eq5-females-30-50-years"], null),"Mulheres entre 30 e 49 anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"eq8-males-30-50-years"], null),"Homens entre 30 e 49 anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"eq6-females-50-70-years"], null),"Mulheres com mais de 50 anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"eq9-males-50-70-years"], null),"Homens com mais de 50 anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"eq10-men"], null),"Homens"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"eq11-women"], null),"Mulheres"], null)], null);
});
react_med.screens.paciente_relatorio.config.selecao_agua_corporal = (function react_med$screens$paciente_relatorio$config$selecao_agua_corporal(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.config.global$module$select,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.config","equacao-agua-corporal-total","react-med.screens.paciente-relatorio.config/equacao-agua-corporal-total",-445651380)], null)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__15752_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.config","select-equation","react-med.screens.paciente-relatorio.config/select-equation",866445108),new cljs.core.Keyword(null,"agua-corporal-total","agua-corporal-total",-766245357),p1__15752_SHARP_.target.value], null));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"eq13-tbw-male-and-female-athletes"], null),"Atleta"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"eq16-tbw-men"], null),"Homens"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"eq17-tbw-women"], null),"Mulheres"], null)], null);
});
react_med.screens.paciente_relatorio.config.component = (function react_med$screens$paciente_relatorio$config$component(){
var vec__15753 = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.paciente-relatorio","dados-para-relatorio","react-med.screens.paciente-relatorio.paciente-relatorio/dados-para-relatorio",653151441)], null));
var massa_livre_de_gordura = cljs.core.nth.call(null,vec__15753,(0),null);
var gordura_corporal_absoluta = cljs.core.nth.call(null,vec__15753,(1),null);
var gordura_corporal_relativa = cljs.core.nth.call(null,vec__15753,(2),null);
var índice_de_massa_muscular = cljs.core.nth.call(null,vec__15753,(3),null);
var água_corporal_total = cljs.core.nth.call(null,vec__15753,(4),null);
var água_extracelular = cljs.core.nth.call(null,vec__15753,(5),null);
var água_intracelular = cljs.core.nth.call(null,vec__15753,(6),null);
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0 35px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.measurement_no_print_view,massa_livre_de_gordura], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.measurement_no_print_view,gordura_corporal_absoluta], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.measurement_no_print_view,gordura_corporal_relativa], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.config.selecao_massa_livre_de_gordura], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.measurement_no_print_view,água_extracelular], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.measurement_no_print_view,água_corporal_total], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.measurement_no_print_view,água_intracelular], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.config.selecao_agua_corporal], null)], null);
});
react_med.screens.paciente_relatorio.config.view = (function react_med$screens$paciente_relatorio$config$view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.relatorio_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.config.component], null)], null)], null);
});

//# sourceMappingURL=config.js.map
