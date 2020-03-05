// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.lista_pacientes');
goog.require('cljs.core');
goog.require('checkbox');
goog.require('day8.re_frame.tracing');
goog.require('menu_item');
goog.require('menu_list');
goog.require('re_frame.core');
goog.require('react_med.shell_components');
goog.require('react_med.util');
react_med.screens.lista_pacientes.global$module$checkbox = goog.global["Checkbox"];
react_med.screens.lista_pacientes.global$module$menu_item = goog.global["MenuItem"];
react_med.screens.lista_pacientes.global$module$menu_list = goog.global["MenuList"];
react_med.screens.lista_pacientes.pacientes = (function react_med$screens$lista_pacientes$pacientes(app_state){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null)));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.lista-pacientes","pacientes","react-med.screens.lista-pacientes/pacientes",-1185597765),react_med.screens.lista_pacientes.pacientes);
react_med.screens.lista_pacientes.checkboxed_patients = (function react_med$screens$lista_pacientes$checkboxed_patients(app_state){
var patients = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null));
var checks = (function (){var or__4131__auto__ = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return react_med.util.repeat_as.call(null,patients,false);
}
})();
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.map.call(null,((function (patients,checks){
return (function (p,c){
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"checked?","checked?",2024809091),c);
});})(patients,checks))
,patients,checks));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.lista-pacientes","checkboxed-patients","react-med.screens.lista-pacientes/checkboxed-patients",1924366996),react_med.screens.lista_pacientes.checkboxed_patients);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.lista_pacientes.seleciona_paciente = (function react_med$screens$lista_pacientes$seleciona_paciente(app_state,p__19458){
var vec__19459 = p__19458;
var event = cljs.core.nth.call(null,vec__19459,(0),null);
var paciente_id = cljs.core.nth.call(null,vec__19459,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"info"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null))));

return debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(2)),(function (){var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),"info"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"info"),(1)),(function (){var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null)),(0));
}catch (e19462){var e = e19462;
throw e;
}});
} else {
/**
 * Entrar na tela de detalhes do paciente selecionado.
 */
react_med.screens.lista_pacientes.seleciona_paciente = (function react_med$screens$lista_pacientes$seleciona_paciente(app_state,p__19463){
var vec__19464 = p__19463;
var event = cljs.core.nth.call(null,vec__19464,(0),null);
var paciente_id = cljs.core.nth.call(null,vec__19464,(1),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"info"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null),paciente_id);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.lista-pacientes","seleciona-paciente","react-med.screens.lista-pacientes/seleciona-paciente",1586410180),react_med.screens.lista_pacientes.seleciona_paciente);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.lista_pacientes.novo_paciente = (function react_med$screens$lista_pacientes$novo_paciente(app_state,p__19467){
var vec__19468 = p__19467;
var event = cljs.core.nth.call(null,vec__19468,(0),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null),new cljs.core.Keyword(null,"nome","nome",1100401122),"Novo Paciente",new cljs.core.Keyword(null,"nascimento","nascimento",646565528),"1900-01-01"], null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"edit-info"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null)))));

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var new_id = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.count.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
return debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(4)),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"nome","nome",1100401122),"Novo Paciente",new cljs.core.Keyword(null,"nascimento","nascimento",646565528),"1900-01-01"], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null),new cljs.core.Keyword(null,"nome","nome",1100401122),"Novo Paciente",new cljs.core.Keyword(null,"nascimento","nascimento",646565528),"1900-01-01"], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null),new cljs.core.Keyword(null,"nome","nome",1100401122),"Novo Paciente",new cljs.core.Keyword(null,"nascimento","nascimento",646565528),"1900-01-01"], null)),(3)),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),"edit-info"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"edit-info"),(2)),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null)),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null),new cljs.core.Symbol(null,"new-id","new-id",-2015599257,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19471){var e = e19471;
throw e;
}});
} else {
react_med.screens.lista_pacientes.novo_paciente = (function react_med$screens$lista_pacientes$novo_paciente(app_state,p__19472){
var vec__19473 = p__19472;
var event = cljs.core.nth.call(null,vec__19473,(0),null);
var new_id = cljs.core.count.call(null,cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null)));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"nome","nome",1100401122),"Novo Paciente",new cljs.core.Keyword(null,"nascimento","nascimento",646565528),"1900-01-01"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"edit-info"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null),new_id);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.lista-pacientes","novo-paciente","react-med.screens.lista-pacientes/novo-paciente",595640836),react_med.screens.lista_pacientes.novo_paciente);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.lista_pacientes.selecionar_pacientes = (function react_med$screens$lista_pacientes$selecionar_pacientes(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"patients","patients",1774783602,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"selecionando-pacientes"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"patients","patients",1774783602,null),false)))));

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var patients = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
return debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),"selecionando-pacientes"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"selecionando-pacientes"),(2)),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = react_med.util.repeat_as.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = patients;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"patients","patients",1774783602,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),false);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"patients","patients",1774783602,null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"patients","patients",1774783602,null),false)),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"patients","patients",1774783602,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"patients","patients",1774783602,null),false)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19476){var e = e19476;
throw e;
}});
} else {
/**
 * Mostrar checkboxes ao lado dos nomes dos pacientes.
 */
react_med.screens.lista_pacientes.selecionar_pacientes = (function react_med$screens$lista_pacientes$selecionar_pacientes(app_state){
var patients = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"selecionando-pacientes"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null),react_med.util.repeat_as.call(null,patients,false));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.lista-pacientes","selecionar-pacientes","react-med.screens.lista-pacientes/selecionar-pacientes",-1648886353),react_med.screens.lista_pacientes.selecionar_pacientes);
react_med.screens.lista_pacientes.list_actions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Novo",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("react-med.screens.lista-pacientes","novo-paciente","react-med.screens.lista-pacientes/novo-paciente",595640836)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Selecionar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("react-med.screens.lista-pacientes","selecionar-pacientes","react-med.screens.lista-pacientes/selecionar-pacientes",-1648886353)], null)], null);
react_med.screens.lista_pacientes.list_component = (function react_med$screens$lista_pacientes$list_component(){
var pacientes = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.lista-pacientes","pacientes","react-med.screens.lista-pacientes/pacientes",-1185597765)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_pacientes.global$module$menu_list,((cljs.core.empty_QMARK_.call(null,pacientes))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_pacientes.global$module$menu_item,"Nenhum paciente cadastrado ainda."], null):cljs.core.map.call(null,((function (pacientes){
return (function (paciente){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_pacientes.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (pacientes){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.lista-pacientes","seleciona-paciente","react-med.screens.lista-pacientes/seleciona-paciente",1586410180),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(paciente)], null));
});})(pacientes))
], null),new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(paciente)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(paciente)], null));
});})(pacientes))
,pacientes))], null);
});
react_med.screens.lista_pacientes.view = (function react_med$screens$lista_pacientes$view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_pacientes.list_component], null)], null)], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.lista_pacientes.check_paciente = (function react_med$screens$lista_pacientes$check_paciente(app_state,p__19477){
var vec__19478 = p__19477;
var event = cljs.core.nth.call(null,vec__19478,(0),null);
var paciente_id = cljs.core.nth.call(null,vec__19478,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"patients","patients",1774783602,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null)),new cljs.core.Symbol(null,"checks","checks",-2128301132,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"patients","patients",1774783602,null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null))),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"patients","patients",1774783602,null),false))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null)], null),new cljs.core.Symbol(null,"not","not",1044554643,null)))));

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var patients = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var checks = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

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
var result__19140__auto__ = patients;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"patients","patients",1774783602,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"patients","patients",1774783602,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

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
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"patients","patients",1774783602,null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

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
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = react_med.util.repeat_as.call(null,(function (){var opts__19139__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = patients;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"patients","patients",1774783602,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})(),false);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"patients","patients",1774783602,null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"patients","patients",1774783602,null),false)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"patients","patients",1774783602,null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null))),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"patients","patients",1774783602,null),false))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.update_in.call(null,(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = $__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085),(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.not;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null)], null),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"patients","patients",1774783602,null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null))),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"patients","patients",1774783602,null),false))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null)], null),new cljs.core.Symbol(null,"not","not",1044554643,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"patients","patients",1774783602,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null)),new cljs.core.Symbol(null,"checks","checks",-2128301132,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"patients","patients",1774783602,null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null))),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null),cljs.core.list(new cljs.core.Symbol("util","repeat-as","util/repeat-as",1828691290,null),new cljs.core.Symbol(null,"patients","patients",1774783602,null),false))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null)], null),new cljs.core.Symbol(null,"not","not",1044554643,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19481){var e = e19481;
throw e;
}});
} else {
react_med.screens.lista_pacientes.check_paciente = (function react_med$screens$lista_pacientes$check_paciente(app_state,p__19482){
var vec__19483 = p__19482;
var event = cljs.core.nth.call(null,vec__19483,(0),null);
var paciente_id = cljs.core.nth.call(null,vec__19483,(1),null);
var patients = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null));
var checks = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null));
var $ = app_state;
var $__$1 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,patients),cljs.core.count.call(null,checks)))?$:cljs.core.assoc_in.call(null,$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null),react_med.util.repeat_as.call(null,patients,false)));
return cljs.core.update_in.call(null,$__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085),paciente_id], null),cljs.core.not);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.lista-pacientes","check-paciente","react-med.screens.lista-pacientes/check-paciente",-966991645),react_med.screens.lista_pacientes.check_paciente);
react_med.screens.lista_pacientes.selecionando_component = (function react_med$screens$lista_pacientes$selecionando_component(){
var pacientes = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.lista-pacientes","checkboxed-patients","react-med.screens.lista-pacientes/checkboxed-patients",1924366996)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_pacientes.global$module$menu_list,((cljs.core.empty_QMARK_.call(null,pacientes))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_pacientes.global$module$menu_item,"Nenhum paciente cadastrado ainda."], null):cljs.core.map.call(null,((function (pacientes){
return (function (p__19486){
var map__19487 = p__19486;
var map__19487__$1 = (((((!((map__19487 == null))))?(((((map__19487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19487):map__19487);
var id = cljs.core.get.call(null,map__19487__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var nome = cljs.core.get.call(null,map__19487__$1,new cljs.core.Keyword(null,"nome","nome",1100401122));
var checked_QMARK_ = cljs.core.get.call(null,map__19487__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_pacientes.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__19487,map__19487__$1,id,nome,checked_QMARK_,pacientes){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.lista-pacientes","check-paciente","react-med.screens.lista-pacientes/check-paciente",-966991645),id], null));
});})(map__19487,map__19487__$1,id,nome,checked_QMARK_,pacientes))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_pacientes.global$module$checkbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(-1)], null)], null),nome], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nome], null));
});})(pacientes))
,pacientes))], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.lista_pacientes.delete_patients = (function react_med$screens$lista_pacientes$delete_patients(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pats","pats",-1661804100,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null)),new cljs.core.Symbol(null,"checks","checks",-2128301132,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null)),new cljs.core.Symbol(null,"patients","patients",1774783602,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"c","c",-122660552,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Symbol(null,"c","c",-122660552,null))),new cljs.core.Symbol(null,"pats","pats",-1661804100,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null)),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Symbol(null,"patients","patients",1774783602,null)),new cljs.core.Symbol(null,"confirm-text","confirm-text",-198962504,null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null)),(0),"Nenhum paciente selecionado.",(1),"Tem certeza que quer excluir esse paciente?","Tem certeza que quer excluir os seguintes pacientes?"),new cljs.core.Symbol(null,"names","names",-302543131,null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\n- ",new cljs.core.Symbol(null,"%1","%1",1309450150,null))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"nome","nome",1100401122),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null)))),new cljs.core.Symbol(null,"ids","ids",641995731,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("js","confirm","js/confirm",-363466706,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"confirm-text","confirm-text",-198962504,null),new cljs.core.Symbol(null,"names","names",-302543131,null)))),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.Symbol(null,"%2","%2",1953183984,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"%2","%2",1953183984,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete?","delete?",789956376),true], null))),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"ids","ids",641995731,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"pacientes"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),false),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085))))));

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var pats = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var checks = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.get_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var patients = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.map.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = ((function (opts__19139__auto____$2,opts__19139__auto____$1,pats,checks,opts__19139__auto__,_PLUS_debux_dbg_opts_PLUS_){
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
});})(opts__19139__auto____$2,opts__19139__auto____$1,pats,checks,opts__19139__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"c","c",-122660552,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Symbol(null,"c","c",-122660552,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = pats;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"pats","pats",-1661804100,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = checks;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"checks","checks",-2128301132,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"c","c",-122660552,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Symbol(null,"c","c",-122660552,null))),new cljs.core.Symbol(null,"pats","pats",-1661804100,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var checked_patients = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.filter.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = patients;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"patients","patients",1774783602,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Symbol(null,"patients","patients",1774783602,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var confirm_text = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var G__19493 = (function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.count.call(null,(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = checked_patients;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})();
switch (G__19493) {
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
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null)),(0),"Nenhum paciente selecionado.",(1),"Tem certeza que quer excluir esse paciente?","Tem certeza que quer excluir os seguintes pacientes?"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var names = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.reduce.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.str;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.map.call(null,(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = ((function (opts__19139__auto____$3,opts__19139__auto____$2,opts__19139__auto____$1,pats,checks,patients,checked_patients,confirm_text,opts__19139__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__19489_SHARP_){
var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = ["\n- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__19139__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = p1__19489_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__19489#","p1__19489#",697369335,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__19140__auto__;
})())].join('');
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\n- ",new cljs.core.Symbol(null,"p1__19489#","p1__19489#",697369335,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
});})(opts__19139__auto____$3,opts__19139__auto____$2,opts__19139__auto____$1,pats,checks,patients,checked_patients,confirm_text,opts__19139__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19489#","p1__19489#",697369335,null)], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\n- ",new cljs.core.Symbol(null,"p1__19489#","p1__19489#",697369335,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.map.call(null,new cljs.core.Keyword(null,"nome","nome",1100401122),(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = checked_patients;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"nome","nome",1100401122),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19489#","p1__19489#",697369335,null)], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\n- ",new cljs.core.Symbol(null,"p1__19489#","p1__19489#",697369335,null))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"nome","nome",1100401122),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19489#","p1__19489#",697369335,null)], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\n- ",new cljs.core.Symbol(null,"p1__19489#","p1__19489#",697369335,null))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"nome","nome",1100401122),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var ids = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = checked_patients;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

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
var result__19140__auto__ = ((function (opts__19139__auto____$2,opts__19139__auto____$1,pats,checks,patients,checked_patients,confirm_text,names,ids,opts__19139__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__19490_SHARP_,p2__19491_SHARP_){
var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = p1__19490_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__19490#","p1__19490#",-2090586132,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(function (){var opts__19139__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = p2__19491_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p2__19491#","p2__19491#",-512848498,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(9)], null));

return result__19140__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"p2__19491#","p2__19491#",-512848498,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete?","delete?",789956376),true], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete?","delete?",789956376),true], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"p1__19490#","p1__19490#",-2090586132,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"p2__19491#","p2__19491#",-512848498,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete?","delete?",789956376),true], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__19140__auto__;
});})(opts__19139__auto____$2,opts__19139__auto____$1,pats,checks,patients,checked_patients,confirm_text,names,ids,opts__19139__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19490#","p1__19490#",-2090586132,null),new cljs.core.Symbol(null,"p2__19491#","p2__19491#",-512848498,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"p1__19490#","p1__19490#",-2090586132,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"p2__19491#","p2__19491#",-512848498,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete?","delete?",789956376),true], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = ids;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"ids","ids",641995731,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__19140__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19490#","p1__19490#",-2090586132,null),new cljs.core.Symbol(null,"p2__19491#","p2__19491#",-512848498,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"p1__19490#","p1__19490#",-2090586132,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"p2__19491#","p2__19491#",-512848498,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete?","delete?",789956376),true], null))),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"ids","ids",641995731,null)),(5)),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})(),"pacientes"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"pacientes"),(4)),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
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
})(),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)),(2)));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("js","confirm","js/confirm",-363466706,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"confirm-text","confirm-text",-198962504,null),new cljs.core.Symbol(null,"names","names",-302543131,null)))),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pats","pats",-1661804100,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null)),new cljs.core.Symbol(null,"checks","checks",-2128301132,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null)),new cljs.core.Symbol(null,"patients","patients",1774783602,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"c","c",-122660552,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Symbol(null,"c","c",-122660552,null))),new cljs.core.Symbol(null,"pats","pats",-1661804100,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null)),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Symbol(null,"patients","patients",1774783602,null)),new cljs.core.Symbol(null,"confirm-text","confirm-text",-198962504,null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null)),(0),"Nenhum paciente selecionado.",(1),"Tem certeza que quer excluir esse paciente?","Tem certeza que quer excluir os seguintes pacientes?"),new cljs.core.Symbol(null,"names","names",-302543131,null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19489#","p1__19489#",697369335,null)], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\n- ",new cljs.core.Symbol(null,"p1__19489#","p1__19489#",697369335,null))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"nome","nome",1100401122),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null)))),new cljs.core.Symbol(null,"ids","ids",641995731,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"checked-patients","checked-patients",-129340820,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("js","confirm","js/confirm",-363466706,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"confirm-text","confirm-text",-198962504,null),new cljs.core.Symbol(null,"names","names",-302543131,null)))),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19492){var e = e19492;
throw e;
}});
} else {
react_med.screens.lista_pacientes.delete_patients = (function react_med$screens$lista_pacientes$delete_patients(app_state){
var pats = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075)], null));
var checks = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085)], null));
var patients = cljs.core.map.call(null,((function (pats,checks){
return (function (p,c){
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"checked?","checked?",2024809091),c);
});})(pats,checks))
,pats,checks);
var checked_patients = cljs.core.filter.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091),patients);
var confirm_text = (function (){var G__19494 = cljs.core.count.call(null,checked_patients);
switch (G__19494) {
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
var names = cljs.core.reduce.call(null,cljs.core.str,cljs.core.map.call(null,((function (pats,checks,patients,checked_patients,confirm_text){
return (function (p1__19489_SHARP_){
return ["\n- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19489_SHARP_)].join('');
});})(pats,checks,patients,checked_patients,confirm_text))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"nome","nome",1100401122),checked_patients)));
var ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),checked_patients);
if(cljs.core.not.call(null,confirm([cljs.core.str.cljs$core$IFn$_invoke$arity$1(confirm_text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(names)].join('')))){
return app_state;
} else {
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.reduce.call(null,((function (pats,checks,patients,checked_patients,confirm_text,names,ids){
return (function (p1__19490_SHARP_,p2__19491_SHARP_){
return cljs.core.assoc_in.call(null,p1__19490_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),p2__19491_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete?","delete?",789956376),true], null));
});})(pats,checks,patients,checked_patients,confirm_text,names,ids))
,app_state,ids),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"pacientes"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"checkboxed-patients","checkboxed-patients",708069085));
}
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.lista-pacientes","delete-patients","react-med.screens.lista-pacientes/delete-patients",-101196487),react_med.screens.lista_pacientes.delete_patients);
react_med.screens.lista_pacientes.selecting_actions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ok",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"ok","ok",967785236)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Excluir",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("react-med.screens.lista-pacientes","delete-patients","react-med.screens.lista-pacientes/delete-patients",-101196487)], null)], null);
react_med.screens.lista_pacientes.selecting_view = (function react_med$screens$lista_pacientes$selecting_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_pacientes.selecionando_component], null)], null)], null);
});

//# sourceMappingURL=lista_pacientes.js.map
