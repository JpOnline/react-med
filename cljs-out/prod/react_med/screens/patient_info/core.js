// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.patient_info.core');
goog.require('cljs.core');
goog.require('react_med.shell_components');
goog.require('react_med.util');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('reagent.core');
goog.require('react_med.screens.components');
react_med.screens.patient_info.core.selected_patient = (function react_med$screens$patient_info$core$selected_patient(app_state){
var patient_info = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0)], null));
var idade = Math.floor((((((((new Date()) - (new Date(patient_info.call(null,new cljs.core.Keyword(null,"nascimento","nascimento",646565528))))) / (1000)) / (60)) / (60)) / (24)) / (365)));
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,patient_info,new cljs.core.Keyword(null,"idade","idade",297389078),idade),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628),react_med.screens.patient_info.core.selected_patient);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.patient_info.core.change_patient_name = (function react_med$screens$patient_info$core$change_patient_name(app_state,p__14770){
var vec__14771 = p__14770;
var event = cljs.core.nth.call(null,vec__14771,(0),null);
var new_name = cljs.core.nth.call(null,vec__14771,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nome","nome",1100401122)], null),new cljs.core.Symbol(null,"new-name","new-name",-1366080711,null)));

var opts__14242__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})(),(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nome","nome",1100401122)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nome","nome",1100401122)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})(),(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = new_name;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-name","new-name",-1366080711,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nome","nome",1100401122)], null),new cljs.core.Symbol(null,"new-name","new-name",-1366080711,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14243__auto__;
}catch (e14774){var e = e14774;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_patient_name = (function react_med$screens$patient_info$core$change_patient_name(app_state,p__14775){
var vec__14776 = p__14775;
var event = cljs.core.nth.call(null,vec__14776,(0),null);
var new_name = cljs.core.nth.call(null,vec__14776,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nome","nome",1100401122)], null),new_name);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","change-patient-name","react-med.screens.patient-info.core/change-patient-name",1868385065),react_med.screens.patient_info.core.change_patient_name);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.patient_info.core.change_birth_date = (function react_med$screens$patient_info$core$change_birth_date(app_state,p__14779){
var vec__14780 = p__14779;
var event = cljs.core.nth.call(null,vec__14780,(0),null);
var new_birth_date = cljs.core.nth.call(null,vec__14780,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nascimento","nascimento",646565528)], null),new cljs.core.Symbol(null,"new-birth-date","new-birth-date",-1200594950,null)));

var opts__14242__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})(),(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nascimento","nascimento",646565528)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nascimento","nascimento",646565528)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})(),(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = new_birth_date;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-birth-date","new-birth-date",-1200594950,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nascimento","nascimento",646565528)], null),new cljs.core.Symbol(null,"new-birth-date","new-birth-date",-1200594950,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14243__auto__;
}catch (e14783){var e = e14783;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_birth_date = (function react_med$screens$patient_info$core$change_birth_date(app_state,p__14784){
var vec__14785 = p__14784;
var event = cljs.core.nth.call(null,vec__14785,(0),null);
var new_birth_date = cljs.core.nth.call(null,vec__14785,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nascimento","nascimento",646565528)], null),new_birth_date);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","change-birth-date","react-med.screens.patient-info.core/change-birth-date",-352684070),react_med.screens.patient_info.core.change_birth_date);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.patient_info.core.toggle_sexo = (function react_med$screens$patient_info$core$toggle_sexo(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"sexo","sexo",-629407757)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),"Feminino"),"Masculino","Feminino"))));

var opts__14242__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = cljs.core.update_in.call(null,(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})(),(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"sexo","sexo",-629407757)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"sexo","sexo",-629407757)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})(),(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = ((function (opts__14242__auto____$1,opts__14242__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__14788_SHARP_){
var opts__14242__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = (((function (){var opts__14242__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = cljs.core._EQ_.call(null,(function (){var opts__14242__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = p1__14788_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__14788#","p1__14788#",1787471877,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14243__auto__;
})(),"Feminino");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__14788#","p1__14788#",1787471877,null),"Feminino"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14243__auto__;
})())?"Masculino":"Feminino");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__14788#","p1__14788#",1787471877,null),"Feminino"),"Masculino","Feminino"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14243__auto__;
});})(opts__14242__auto____$1,opts__14242__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14788#","p1__14788#",1787471877,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__14788#","p1__14788#",1787471877,null),"Feminino"),"Masculino","Feminino")),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"sexo","sexo",-629407757)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14788#","p1__14788#",1787471877,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__14788#","p1__14788#",1787471877,null),"Feminino"),"Masculino","Feminino"))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14243__auto__;
}catch (e14789){var e = e14789;
throw e;
}});
} else {
react_med.screens.patient_info.core.toggle_sexo = (function react_med$screens$patient_info$core$toggle_sexo(app_state){
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"sexo","sexo",-629407757)], null),(function (p1__14788_SHARP_){
if(cljs.core._EQ_.call(null,p1__14788_SHARP_,"Feminino")){
return "Masculino";
} else {
return "Feminino";
}
}));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","toggle-sexo","react-med.screens.patient-info.core/toggle-sexo",88237148),react_med.screens.patient_info.core.toggle_sexo);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.patient_info.core.change_height = (function react_med$screens$patient_info$core$change_height(app_state,p__14790){
var vec__14791 = p__14790;
var event = cljs.core.nth.call(null,vec__14791,(0),null);
var new_height = cljs.core.nth.call(null,vec__14791,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"estatura","estatura",-685084760)], null),cljs.core.list(new cljs.core.Symbol("js","parseFloat","js/parseFloat",1048015479,null),cljs.core.list(new cljs.core.Symbol(null,".replace",".replace",-1869576414,null),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),",","."))));

var opts__14242__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})(),(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"estatura","estatura",-685084760)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"estatura","estatura",-685084760)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})(),(function (){var opts__14242__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = parseFloat((function (){var opts__14242__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = (function (){var opts__14242__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14243__auto__ = new_height;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14243__auto__;
})().replace(",",".");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".replace",".replace",-1869576414,null),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),",","."),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14243__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","parseFloat","js/parseFloat",1048015479,null),cljs.core.list(new cljs.core.Symbol(null,".replace",".replace",-1869576414,null),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),",",".")),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14243__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14243__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"estatura","estatura",-685084760)], null),cljs.core.list(new cljs.core.Symbol("js","parseFloat","js/parseFloat",1048015479,null),cljs.core.list(new cljs.core.Symbol(null,".replace",".replace",-1869576414,null),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),",","."))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14243__auto__;
}catch (e14794){var e = e14794;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_height = (function react_med$screens$patient_info$core$change_height(app_state,p__14795){
var vec__14796 = p__14795;
var event = cljs.core.nth.call(null,vec__14796,(0),null);
var new_height = cljs.core.nth.call(null,vec__14796,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"estatura","estatura",-685084760)], null),parseFloat(new_height.replace(",",".")));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","change-height","react-med.screens.patient-info.core/change-height",-1808838546),react_med.screens.patient_info.core.change_height);
react_med.screens.patient_info.core.date_picker_i18n_pt = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"formatTitle","formatTitle",-1529600544),new cljs.core.Keyword(null,"parseDate","parseDate",1985565313),new cljs.core.Keyword(null,"weekdays","weekdays",2061292258),new cljs.core.Keyword(null,"week","week",-1326473278),new cljs.core.Keyword(null,"weekdaysShort","weekdaysShort",1244560039),new cljs.core.Keyword(null,"today","today",945271563),new cljs.core.Keyword(null,"formatDate","formatDate",1674537616),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.Keyword(null,"firstDayOfWeek","firstDayOfWeek",-40389547),new cljs.core.Keyword(null,"cancel","cancel",-1964088360),new cljs.core.Keyword(null,"monthNames","monthNames",121720157),new cljs.core.Keyword(null,"clear","clear",1877104959)],[(function (month_name,full_year){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(month_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_year)].join('');
}),(function (text){
var vec__14799 = cljs.core.re_find.call(null,/(\d{1,2})\D(\d{1,2})\D(\d{4})/,text);
var _ = cljs.core.nth.call(null,vec__14799,(0),null);
var d = cljs.core.nth.call(null,vec__14799,(1),null);
var m = cljs.core.nth.call(null,vec__14799,(2),null);
var y = cljs.core.nth.call(null,vec__14799,(3),null);
return ({"day": parseInt(d), "month": (parseInt(m) - (1)), "year": parseInt(y)});
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Domingo","Segunda","Ter\u00E7a","Quarta","Quinta","Sexta","S\u00E1bado"], null),"Semana",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dom","Seg","Ter","Qua","Qui","Sex","S\u00E1b"], null),"Hoje",(function (date){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.day),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((date.month + (1))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.year)].join('');
}),"Calend\u00E1rio",(0),"Cancelar",new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Janeiro","Fevereiro","Mar\u00E7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"], null),"Limpar"]);
react_med.screens.patient_info.core.editing_patient_info_component = (function react_med$screens$patient_info$core$editing_patient_info_component(){
var map__14805 = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628)], null));
var map__14805__$1 = (((((!((map__14805 == null))))?(((((map__14805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14805):map__14805);
var nome = cljs.core.get.call(null,map__14805__$1,new cljs.core.Keyword(null,"nome","nome",1100401122));
var nascimento = cljs.core.get.call(null,map__14805__$1,new cljs.core.Keyword(null,"nascimento","nascimento",646565528));
var idade = cljs.core.get.call(null,map__14805__$1,new cljs.core.Keyword(null,"idade","idade",297389078));
var sexo = cljs.core.get.call(null,map__14805__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var estatura = cljs.core.get.call(null,map__14805__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var line_style = ({"display": "flex", "alignItems": "center", "whiteSpace": "pre", "height": (48)});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Nome: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#e5e9ed", "padding": "4px 15px", "borderRadius": "5px"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contentEditable","contentEditable",-823191689),"",new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (map__14805,map__14805__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (p1__14802_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","change-patient-name","react-med.screens.patient-info.core/change-patient-name",1868385065),p1__14802_SHARP_.target.innerText], null));
});})(map__14805,map__14805__$1,nome,nascimento,idade,sexo,estatura,line_style))
], null),nome], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,cljs.core.js__GT_clj.call(null,line_style),"whiteSpace"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Nascimento: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom-module#vaadin-style","dom-module#vaadin-style",877150704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme-for","theme-for",-1903003204),"vaadin-date-picker-overlay"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),"vaadin-date-picker-overlay{\n           z-index: 1200;\n         }"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.util.with_mount_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vaadin-date-picker","vaadin-date-picker",293781945),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),nascimento,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__14805,map__14805__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (this$){
reagent.core.dom_node.call(null,this$).i18n = cljs.core.clj__GT_js.call(null,react_med.screens.patient_info.core.date_picker_i18n_pt);

return reagent.core.dom_node.call(null,this$).onchange = ((function (map__14805,map__14805__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (p1__14803_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","change-birth-date","react-med.screens.patient-info.core/change-birth-date",-352684070),p1__14803_SHARP_.target.value], null));
});})(map__14805,map__14805__$1,nome,nascimento,idade,sexo,estatura,line_style))
;
});})(map__14805,map__14805__$1,nome,nascimento,idade,sexo,estatura,line_style))
], null)], null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,line_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(0, 0, 0, 0.4)"], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Idade: "], null),idade," anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Sexo: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__14805,map__14805__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","toggle-sexo","react-med.screens.patient-info.core/toggle-sexo",88237148)], null));
});})(map__14805,map__14805__$1,nome,nascimento,idade,sexo,estatura,line_style))
,new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#e5e9ed", "cursor": "pointer", "borderRadius": "30px", "padding": "7px 13px"})], null),sexo], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Estatura: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),estatura,new cljs.core.Keyword(null,"suffix","suffix",367373057)," cm",new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (map__14805,map__14805__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (p1__14804_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","change-height","react-med.screens.patient-info.core/change-height",-1808838546),p1__14804_SHARP_.target.value], null));
});})(map__14805,map__14805__$1,nome,nascimento,idade,sexo,estatura,line_style))
], null)], null)], null)], null);
});
react_med.screens.patient_info.core.patient_info_component = (function react_med$screens$patient_info$core$patient_info_component(){
var map__14807 = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628)], null));
var map__14807__$1 = (((((!((map__14807 == null))))?(((((map__14807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14807):map__14807);
var nome = cljs.core.get.call(null,map__14807__$1,new cljs.core.Keyword(null,"nome","nome",1100401122));
var nascimento = cljs.core.get.call(null,map__14807__$1,new cljs.core.Keyword(null,"nascimento","nascimento",646565528));
var idade = cljs.core.get.call(null,map__14807__$1,new cljs.core.Keyword(null,"idade","idade",297389078));
var sexo = cljs.core.get.call(null,map__14807__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var estatura = cljs.core.get.call(null,map__14807__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var vec__14808 = cljs.core.re_find.call(null,/(\d{4})\D(\d{1,2})\D(\d{1,2})/,nascimento);
var _ = cljs.core.nth.call(null,vec__14808,(0),null);
var birth_year = cljs.core.nth.call(null,vec__14808,(1),null);
var birth_month = cljs.core.nth.call(null,vec__14808,(2),null);
var birth_day = cljs.core.nth.call(null,vec__14808,(3),null);
var line_style = ({"display": "flex", "alignItems": "center", "whiteSpace": "pre", "height": (48)});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Nome: "], null),nome], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Nascimento: "], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(birth_day),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(birth_month),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(birth_year)].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Idade: "], null),idade," anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Sexo: "], null),sexo], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Estatura: "], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(estatura).replace(".",",")," cm"], null)], null);
});
react_med.screens.patient_info.core.patient_detail = (function react_med$screens$patient_info$core$patient_detail(p__14812,content_view){
var map__14813 = p__14812;
var map__14813__$1 = (((((!((map__14813 == null))))?(((((map__14813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14813):map__14813);
var actions = cljs.core.get.call(null,map__14813__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var menu_structure = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","side-menu","react-med.routes/side-menu",909029319)], null));
var title = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","title","react-med.routes/title",1582209313)], null));
var tabs = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","tabs","react-med.routes/tabs",1784816700)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variation","variation",-450640146),"<-"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.screen_title,title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.tabs_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-options","menu-options",-1774050123),tabs], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,cljs.core.with_meta.call(null,content_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.drawer_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-structure","menu-structure",-627499224),menu_structure], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.actions_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.bottom_bar], null)], null);
});
react_med.screens.patient_info.core.patient_info_actions = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Editar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"edit","edit",-1641834166)], null)], null);
react_med.screens.patient_info.core.patient_info = (function react_med$screens$patient_info$core$patient_info(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_detail,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),react_med.screens.patient_info.core.patient_info_actions], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_info_component], null)], null);
});
react_med.screens.patient_info.core.editing_patient_info_actions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Pronto",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"ok","ok",967785236)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Cancelar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"cancel","cancel",-1964088360)], null)], null);
react_med.screens.patient_info.core.editing_patient_info = (function react_med$screens$patient_info$core$editing_patient_info(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_detail,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),react_med.screens.patient_info.core.editing_patient_info_actions], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.editing_patient_info_component], null)], null);
});

//# sourceMappingURL=core.js.map
