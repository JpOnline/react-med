// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.lista_avaliacoes');
goog.require('cljs.core');
goog.require('checkbox');
goog.require('day8.re_frame.tracing');
goog.require('menu_item');
goog.require('menu_list');
goog.require('re_frame.core');
goog.require('react_med.shell_components');
goog.require('react_med.util');
goog.require('reagent.core');
goog.require('tick.alpha.api');
react_med.screens.lista_avaliacoes.global$module$checkbox = goog.global["Checkbox"];
react_med.screens.lista_avaliacoes.global$module$menu_item = goog.global["MenuItem"];
react_med.screens.lista_avaliacoes.global$module$menu_list = goog.global["MenuList"];
react_med.screens.lista_avaliacoes.avaliacoes = (function react_med$screens$lista_avaliacoes$avaliacoes(app_state){
var paciente_id = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null));
var avaliacoes = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),paciente_id,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null));
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),avaliacoes);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.lista-avaliacoes","avaliacoes","react-med.screens.lista-avaliacoes/avaliacoes",-1385146145),react_med.screens.lista_avaliacoes.avaliacoes);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.lista_avaliacoes.show_avaliacoes_checkbox = (function react_med$screens$lista_avaliacoes$show_avaliacoes_checkbox(app_state,p__19515){
var vec__19516 = p__19515;
var event = cljs.core.nth.call(null,vec__19516,(0),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null)),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"selecionando-avaliacoes"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),false)))));

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var paciente_id = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var avaliacoes = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})(),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
return debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),"selecionando-avaliacoes"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"selecionando-avaliacoes"),(2)),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = react_med.util.repeat_as.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = avaliacoes;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),false);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),false)),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null)),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),false)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19519){var e = e19519;
throw e;
}});
} else {
react_med.screens.lista_avaliacoes.show_avaliacoes_checkbox = (function react_med$screens$lista_avaliacoes$show_avaliacoes_checkbox(app_state,p__19520){
var vec__19521 = p__19520;
var event = cljs.core.nth.call(null,vec__19521,(0),null);
var paciente_id = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null));
var avaliacoes = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),paciente_id,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"selecionando-avaliacoes"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null),react_med.util.repeat_as.call(null,avaliacoes,false));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.lista-avaliacoes","show-avaliacoes-checkbox","react-med.screens.lista-avaliacoes/show-avaliacoes-checkbox",-1939337160),react_med.screens.lista_avaliacoes.show_avaliacoes_checkbox);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.lista_avaliacoes.nova_avaliacao = (function react_med$screens$lista_avaliacoes$nova_avaliacao(app_state,p__19524){
var vec__19525 = p__19524;
var event = cljs.core.nth.call(null,vec__19525,(0),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null)),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null)))], null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"edit-coleta"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null)))));

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var paciente_id = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var new_id = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.count.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})(),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
return debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(4)),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})(),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tick.alpha.api.date.call(null))], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null)))], null)),(3)),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),"edit-coleta"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"edit-coleta"),(2)),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null)),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null)),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19528){var e = e19528;
throw e;
}});
} else {
react_med.screens.lista_avaliacoes.nova_avaliacao = (function react_med$screens$lista_avaliacoes$nova_avaliacao(app_state,p__19529){
var vec__19530 = p__19529;
var event = cljs.core.nth.call(null,vec__19530,(0),null);
var paciente_id = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null));
var new_id = cljs.core.count.call(null,cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),paciente_id,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null)));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),paciente_id,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),new_id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tick.alpha.api.date.call(null))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"edit-coleta"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null),new_id);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.lista-avaliacoes","nova-avaliacao","react-med.screens.lista-avaliacoes/nova-avaliacao",-2055913183),react_med.screens.lista_avaliacoes.nova_avaliacao);
react_med.screens.lista_avaliacoes.date_str = (function react_med$screens$lista_avaliacoes$date_str(date){
var pad = (function (p1__19533_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19533_SHARP_)),(1))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19533_SHARP_)].join('');
} else {
return p1__19533_SHARP_;
}
});
var dd = pad.call(null,tick.alpha.api.day_of_month.call(null,date));
var MM = pad.call(null,tick.alpha.api.int$.call(null,tick.alpha.api.month.call(null,date)));
var yyyy = tick.alpha.api.int$.call(null,tick.alpha.api.year.call(null,date));
var day = tick.alpha.api.day_of_week.call(null,date);
var pt_week = cljs.core.PersistentArrayMap.createAsIfByAssoc([tick.alpha.api.MONDAY,"Segunda-feira",tick.alpha.api.TUESDAY,"Ter\u00E7a-feira",tick.alpha.api.WEDNESDAY,"Quarta-feira",tick.alpha.api.THURSDAY,"Quinta-feira",tick.alpha.api.FRIDAY,"Sexta-feira",tick.alpha.api.SATURDAY,"S\u00E1bado",tick.alpha.api.SUNDAY,"Domingo"]);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dd),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(MM),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(yyyy)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pt_week.call(null,day)),")"].join('');
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.lista_avaliacoes.seleciona_avaliacao = (function react_med$screens$lista_avaliacoes$seleciona_avaliacao(app_state,p__19534){
var vec__19535 = p__19534;
var event = cljs.core.nth.call(null,vec__19535,(0),null);
var avaliacao_id = cljs.core.nth.call(null,vec__19535,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"coleta"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null),new cljs.core.Symbol(null,"avaliacao-id","avaliacao-id",1663556238,null))));

return debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(2)),(function (){var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),"coleta"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"coleta"),(1)),(function (){var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = avaliacao_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"avaliacao-id","avaliacao-id",1663556238,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null),new cljs.core.Symbol(null,"avaliacao-id","avaliacao-id",1663556238,null)),(0));
}catch (e19538){var e = e19538;
throw e;
}});
} else {
/**
 * Entrar na tela de detalhes do paciente selecionado.
 */
react_med.screens.lista_avaliacoes.seleciona_avaliacao = (function react_med$screens$lista_avaliacoes$seleciona_avaliacao(app_state,p__19539){
var vec__19540 = p__19539;
var event = cljs.core.nth.call(null,vec__19540,(0),null);
var avaliacao_id = cljs.core.nth.call(null,vec__19540,(1),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"coleta"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"avaliacao-selecionada","avaliacao-selecionada",-1232285529)], null),avaliacao_id);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.lista-avaliacoes","seleciona-avaliacao","react-med.screens.lista-avaliacoes/seleciona-avaliacao",1437561340),react_med.screens.lista_avaliacoes.seleciona_avaliacao);
react_med.screens.lista_avaliacoes.list_component = (function react_med$screens$lista_avaliacoes$list_component(){
var paciente_selecionado = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628)], null));
var avaliacoes = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.lista-avaliacoes","avaliacoes","react-med.screens.lista-avaliacoes/avaliacoes",-1385146145)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_avaliacoes.global$module$menu_list,((cljs.core._EQ_.call(null,"Paciente n\u00E3o encontrado",new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(paciente_selecionado)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_avaliacoes.global$module$menu_item,"Nenhum paciente selecionado"], null):((cljs.core.empty_QMARK_.call(null,avaliacoes))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_avaliacoes.global$module$menu_item,"Nenhuma avalia\u00E7\u00E3o cadastrada."], null):cljs.core.map.call(null,((function (paciente_selecionado,avaliacoes){
return (function (p__19543){
var map__19544 = p__19543;
var map__19544__$1 = (((((!((map__19544 == null))))?(((((map__19544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19544):map__19544);
var data = cljs.core.get.call(null,map__19544__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var id = cljs.core.get.call(null,map__19544__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_avaliacoes.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__19544,map__19544__$1,data,id,paciente_selecionado,avaliacoes){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.lista-avaliacoes","seleciona-avaliacao","react-med.screens.lista-avaliacoes/seleciona-avaliacao",1437561340),id], null));
});})(map__19544,map__19544__$1,data,id,paciente_selecionado,avaliacoes))
], null),react_med.screens.lista_avaliacoes.date_str.call(null,data)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
});})(paciente_selecionado,avaliacoes))
,avaliacoes)
))], null);
});
react_med.screens.lista_avaliacoes.error_wrapper = (function react_med$screens$lista_avaliacoes$error_wrapper(component){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"\uD83D\uDE22 Erro ao mostrar lista de avalia\u00E7\u00F5es."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),component], null)], null);
});
react_med.screens.lista_avaliacoes.view = (function react_med$screens$lista_avaliacoes$view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_avaliacoes.error_wrapper,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_avaliacoes.list_component], null)], null)], null)], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.lista_avaliacoes.delete_avaliacoes = (function react_med$screens$lista_avaliacoes$delete_avaliacoes(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null)),new cljs.core.Symbol(null,"avals","avals",-1994740649,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null)),new cljs.core.Symbol(null,"checks","checks",-2128301132,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null)),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"c","c",-122660552,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Symbol(null,"c","c",-122660552,null))),new cljs.core.Symbol(null,"avals","avals",-1994740649,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null)),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null)),new cljs.core.Symbol(null,"confirm-text","confirm-text",-198962504,null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null)),(0),"Nenhuma avalia\u00E7\u00E3o selecionada.",(1),"Tem certeza que quer excluir essa avalia\u00E7\u00E3o?","Tem certeza que quer excluir as seguintes avalia\u00E7\u00F5es?"),new cljs.core.Symbol(null,"names","names",-302543131,null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\n- ",new cljs.core.Symbol(null,"%1","%1",1309450150,null))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null)))),new cljs.core.Symbol(null,"ids","ids",641995731,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("js","confirm","js/confirm",-363466706,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"confirm-text","confirm-text",-198962504,null),new cljs.core.Symbol(null,"names","names",-302543131,null)))),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.Symbol(null,"%2","%2",1953183984,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),new cljs.core.Symbol(null,"%2","%2",1953183984,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deleted?","deleted?",-486602771),true], null))),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"ids","ids",641995731,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"avaliacoes"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),false),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780))))));

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var paciente_id = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var avals = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})(),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var checks = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var avaliacoes = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.map.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = ((function (opts__19139__auto____$2,opts__19139__auto____$1,paciente_id,avals,checks,opts__19139__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p,c){
var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.assoc.call(null,(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = p;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})(),new cljs.core.Keyword(null,"checked?","checked?",2024809091),(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = c;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Symbol(null,"c","c",-122660552,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
});})(opts__19139__auto____$2,opts__19139__auto____$1,paciente_id,avals,checks,opts__19139__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"c","c",-122660552,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Symbol(null,"c","c",-122660552,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = avals;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"avals","avals",-1994740649,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = checks;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"checks","checks",-2128301132,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"c","c",-122660552,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Symbol(null,"c","c",-122660552,null))),new cljs.core.Symbol(null,"avals","avals",-1994740649,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var checked_avaliacoes = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.filter.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = avaliacoes;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var confirm_text = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var G__19550 = (function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.count.call(null,(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = checked_avaliacoes;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})();
switch (G__19550) {
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
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null)),(0),"Nenhuma avalia\u00E7\u00E3o selecionada.",(1),"Tem certeza que quer excluir essa avalia\u00E7\u00E3o?","Tem certeza que quer excluir as seguintes avalia\u00E7\u00F5es?"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var names = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.reduce.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.str;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.map.call(null,(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = ((function (opts__19139__auto____$3,opts__19139__auto____$2,opts__19139__auto____$1,paciente_id,avals,checks,avaliacoes,checked_avaliacoes,confirm_text,opts__19139__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__19546_SHARP_){
var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = ["\n- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__19139__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = p1__19546_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__19546#","p1__19546#",-1187165541,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__19140__auto__;
})())].join('');
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\n- ",new cljs.core.Symbol(null,"p1__19546#","p1__19546#",-1187165541,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
});})(opts__19139__auto____$3,opts__19139__auto____$2,opts__19139__auto____$1,paciente_id,avals,checks,avaliacoes,checked_avaliacoes,confirm_text,opts__19139__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19546#","p1__19546#",-1187165541,null)], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\n- ",new cljs.core.Symbol(null,"p1__19546#","p1__19546#",-1187165541,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.map.call(null,new cljs.core.Keyword(null,"data","data",-232669377),(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = checked_avaliacoes;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19546#","p1__19546#",-1187165541,null)], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\n- ",new cljs.core.Symbol(null,"p1__19546#","p1__19546#",-1187165541,null))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19546#","p1__19546#",-1187165541,null)], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\n- ",new cljs.core.Symbol(null,"p1__19546#","p1__19546#",-1187165541,null))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var ids = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = checked_avaliacoes;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (((function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.not.call(null,(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = confirm((function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__19139__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = confirm_text;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"confirm-text","confirm-text",-198962504,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__19139__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = names;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})())].join('');
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"confirm-text","confirm-text",-198962504,null),new cljs.core.Symbol(null,"names","names",-302543131,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","confirm","js/confirm",-363466706,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"confirm-text","confirm-text",-198962504,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("js","confirm","js/confirm",-363466706,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"confirm-text","confirm-text",-198962504,null),new cljs.core.Symbol(null,"names","names",-302543131,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})())?(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})():debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,cljs.core.reduce.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = ((function (opts__19139__auto____$2,opts__19139__auto____$1,paciente_id,avals,checks,avaliacoes,checked_avaliacoes,confirm_text,names,ids,opts__19139__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__19547_SHARP_,p2__19548_SHARP_){
var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = p1__19547_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__19547#","p1__19547#",-665649616,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(function (){var opts__19139__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(9)], null));

return result__19140__auto__;
})(),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),(function (){var opts__19139__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = p2__19548_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p2__19548#","p2__19548#",1231974898,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(9)], null));

return result__19140__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),new cljs.core.Symbol(null,"p2__19548#","p2__19548#",1231974898,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deleted?","deleted?",-486602771),true], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deleted?","deleted?",-486602771),true], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"p1__19547#","p1__19547#",-665649616,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),new cljs.core.Symbol(null,"p2__19548#","p2__19548#",1231974898,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deleted?","deleted?",-486602771),true], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__19140__auto__;
});})(opts__19139__auto____$2,opts__19139__auto____$1,paciente_id,avals,checks,avaliacoes,checked_avaliacoes,confirm_text,names,ids,opts__19139__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19547#","p1__19547#",-665649616,null),new cljs.core.Symbol(null,"p2__19548#","p2__19548#",1231974898,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"p1__19547#","p1__19547#",-665649616,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),new cljs.core.Symbol(null,"p2__19548#","p2__19548#",1231974898,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deleted?","deleted?",-486602771),true], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = ids;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"ids","ids",641995731,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__19140__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19547#","p1__19547#",-665649616,null),new cljs.core.Symbol(null,"p2__19548#","p2__19548#",1231974898,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"p1__19547#","p1__19547#",-665649616,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),new cljs.core.Symbol(null,"p2__19548#","p2__19548#",1231974898,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deleted?","deleted?",-486602771),true], null))),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"ids","ids",641995731,null)),(5)),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})(),"avaliacoes"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"avaliacoes"),(4)),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})(),false),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),false),(3)),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)),(2)));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("js","confirm","js/confirm",-363466706,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"confirm-text","confirm-text",-198962504,null),new cljs.core.Symbol(null,"names","names",-302543131,null)))),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null)),new cljs.core.Symbol(null,"avals","avals",-1994740649,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null)),new cljs.core.Symbol(null,"checks","checks",-2128301132,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null)),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"c","c",-122660552,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Symbol(null,"c","c",-122660552,null))),new cljs.core.Symbol(null,"avals","avals",-1994740649,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null)),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null)),new cljs.core.Symbol(null,"confirm-text","confirm-text",-198962504,null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null)),(0),"Nenhuma avalia\u00E7\u00E3o selecionada.",(1),"Tem certeza que quer excluir essa avalia\u00E7\u00E3o?","Tem certeza que quer excluir as seguintes avalia\u00E7\u00F5es?"),new cljs.core.Symbol(null,"names","names",-302543131,null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19546#","p1__19546#",-1187165541,null)], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\n- ",new cljs.core.Symbol(null,"p1__19546#","p1__19546#",-1187165541,null))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null)))),new cljs.core.Symbol(null,"ids","ids",641995731,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"checked-avaliacoes","checked-avaliacoes",1819305403,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("js","confirm","js/confirm",-363466706,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"confirm-text","confirm-text",-198962504,null),new cljs.core.Symbol(null,"names","names",-302543131,null)))),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19549){var e = e19549;
throw e;
}});
} else {
react_med.screens.lista_avaliacoes.delete_avaliacoes = (function react_med$screens$lista_avaliacoes$delete_avaliacoes(app_state){
var paciente_id = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null));
var avals = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),paciente_id,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null));
var checks = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null));
var avaliacoes = cljs.core.map.call(null,((function (paciente_id,avals,checks){
return (function (p,c){
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"checked?","checked?",2024809091),c);
});})(paciente_id,avals,checks))
,avals,checks);
var checked_avaliacoes = cljs.core.filter.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091),avaliacoes);
var confirm_text = (function (){var G__19551 = cljs.core.count.call(null,checked_avaliacoes);
switch (G__19551) {
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
var names = cljs.core.reduce.call(null,cljs.core.str,cljs.core.map.call(null,((function (paciente_id,avals,checks,avaliacoes,checked_avaliacoes,confirm_text){
return (function (p1__19546_SHARP_){
return ["\n- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19546_SHARP_)].join('');
});})(paciente_id,avals,checks,avaliacoes,checked_avaliacoes,confirm_text))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"data","data",-232669377),checked_avaliacoes)));
var ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),checked_avaliacoes);
if(cljs.core.not.call(null,confirm([cljs.core.str.cljs$core$IFn$_invoke$arity$1(confirm_text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(names)].join('')))){
return app_state;
} else {
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.reduce.call(null,((function (paciente_id,avals,checks,avaliacoes,checked_avaliacoes,confirm_text,names,ids){
return (function (p1__19547_SHARP_,p2__19548_SHARP_){
return cljs.core.assoc_in.call(null,p1__19547_SHARP_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),paciente_id,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),p2__19548_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deleted?","deleted?",-486602771),true], null));
});})(paciente_id,avals,checks,avaliacoes,checked_avaliacoes,confirm_text,names,ids))
,app_state,ids),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"avaliacoes"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780));
}
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.lista-avaliacoes","delete-avaliacoes","react-med.screens.lista-avaliacoes/delete-avaliacoes",962268280),react_med.screens.lista_avaliacoes.delete_avaliacoes);
react_med.screens.lista_avaliacoes.checkboxed_avaliacoes = (function react_med$screens$lista_avaliacoes$checkboxed_avaliacoes(app_state){
var paciente_id = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null));
var avaliacoes = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),paciente_id,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null));
var checks = (function (){var or__4131__auto__ = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return react_med.util.repeat_as.call(null,avaliacoes,false);
}
})();
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.map.call(null,((function (paciente_id,avaliacoes,checks){
return (function (p,c){
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"checked?","checked?",2024809091),c);
});})(paciente_id,avaliacoes,checks))
,avaliacoes,checks));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.lista-avaliacoes","checkboxed-avaliacoes","react-med.screens.lista-avaliacoes/checkboxed-avaliacoes",-271902777),react_med.screens.lista_avaliacoes.checkboxed_avaliacoes);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.lista_avaliacoes.check_avaliacao = (function react_med$screens$lista_avaliacoes$check_avaliacao(app_state,p__19554){
var vec__19555 = p__19554;
var event = cljs.core.nth.call(null,vec__19555,(0),null);
var avaliacao_id = cljs.core.nth.call(null,vec__19555,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null)),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null)),new cljs.core.Symbol(null,"checks","checks",-2128301132,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null))),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),false))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780),new cljs.core.Symbol(null,"avaliacao-id","avaliacao-id",1663556238,null)], null),new cljs.core.Symbol(null,"not","not",1044554643,null)))));

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var paciente_id = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var avaliacoes = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})(),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var checks = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var $ = (function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var $__$1 = (function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (((function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core._EQ_.call(null,(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.count.call(null,(function (){var opts__19139__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = avaliacoes;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.count.call(null,(function (){var opts__19139__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = checks;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"checks","checks",-2128301132,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})())?(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = $;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})():(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = $;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = react_med.util.repeat_as.call(null,(function (){var opts__19139__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = avaliacoes;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})(),false);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),false)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null))),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),false))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.update_in.call(null,(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = $__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780),(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = avaliacao_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"avaliacao-id","avaliacao-id",1663556238,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780),new cljs.core.Symbol(null,"avaliacao-id","avaliacao-id",1663556238,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.not;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780),new cljs.core.Symbol(null,"avaliacao-id","avaliacao-id",1663556238,null)], null),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null))),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),false))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780),new cljs.core.Symbol(null,"avaliacao-id","avaliacao-id",1663556238,null)], null),new cljs.core.Symbol(null,"not","not",1044554643,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null)),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null)),new cljs.core.Symbol(null,"checks","checks",-2128301132,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null))),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"avaliacoes","avaliacoes",151369545,null),false))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780),new cljs.core.Symbol(null,"avaliacao-id","avaliacao-id",1663556238,null)], null),new cljs.core.Symbol(null,"not","not",1044554643,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19558){var e = e19558;
throw e;
}});
} else {
react_med.screens.lista_avaliacoes.check_avaliacao = (function react_med$screens$lista_avaliacoes$check_avaliacao(app_state,p__19559){
var vec__19560 = p__19559;
var event = cljs.core.nth.call(null,vec__19560,(0),null);
var avaliacao_id = cljs.core.nth.call(null,vec__19560,(1),null);
var paciente_id = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null));
var avaliacoes = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),paciente_id,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null));
var checks = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null));
var $ = app_state;
var $__$1 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,avaliacoes),cljs.core.count.call(null,checks)))?$:cljs.core.assoc_in.call(null,$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780)], null),react_med.util.repeat_as.call(null,avaliacoes,false)));
return cljs.core.update_in.call(null,$__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-avaliacoes","checkboxed-avaliacoes",-369696780),avaliacao_id], null),cljs.core.not);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.lista-avaliacoes","check-avaliacao","react-med.screens.lista-avaliacoes/check-avaliacao",-957301770),react_med.screens.lista_avaliacoes.check_avaliacao);
react_med.screens.lista_avaliacoes.selecting_component = (function react_med$screens$lista_avaliacoes$selecting_component(){
var paciente_selecionado = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628)], null));
var avaliacoes = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.lista-avaliacoes","checkboxed-avaliacoes","react-med.screens.lista-avaliacoes/checkboxed-avaliacoes",-271902777)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_avaliacoes.global$module$menu_list,((cljs.core._EQ_.call(null,"Paciente n\u00E3o encontrado",new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(paciente_selecionado)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_avaliacoes.global$module$menu_item,"Nenhum paciente selecionado"], null):((cljs.core.empty_QMARK_.call(null,avaliacoes))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_avaliacoes.global$module$menu_item,"Nenhuma avalia\u00E7\u00E3o cadastrada ainda."], null):cljs.core.map.call(null,((function (paciente_selecionado,avaliacoes){
return (function (p__19563){
var map__19564 = p__19563;
var map__19564__$1 = (((((!((map__19564 == null))))?(((((map__19564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19564):map__19564);
var id = cljs.core.get.call(null,map__19564__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data = cljs.core.get.call(null,map__19564__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var checked_QMARK_ = cljs.core.get.call(null,map__19564__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_avaliacoes.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__19564,map__19564__$1,id,data,checked_QMARK_,paciente_selecionado,avaliacoes){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.lista-avaliacoes","check-avaliacao","react-med.screens.lista-avaliacoes/check-avaliacao",-957301770),id], null));
});})(map__19564,map__19564__$1,id,data,checked_QMARK_,paciente_selecionado,avaliacoes))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_avaliacoes.global$module$checkbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(-1)], null)], null),data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
});})(paciente_selecionado,avaliacoes))
,avaliacoes)
))], null);
});
react_med.screens.lista_avaliacoes.selecting_view = (function react_med$screens$lista_avaliacoes$selecting_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_avaliacoes.selecting_component], null)], null)], null);
});

//# sourceMappingURL=lista_avaliacoes.js.map
