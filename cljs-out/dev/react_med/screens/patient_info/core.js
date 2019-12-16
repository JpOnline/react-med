// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.patient_info.core');
goog.require('cljs.core');
goog.require('react_med.shell_components');
goog.require('react_med.util');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('reagent.core');
goog.require('react_med.screens.components');
goog.require('testdouble.cljs.csv');
react_med.screens.patient_info.core.selected_patient = (function react_med$screens$patient_info$core$selected_patient(app_state){
var patient_info = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0)], null));
var idade = Math.floor((((((((new Date()) - (new Date(patient_info.call(null,new cljs.core.Keyword(null,"nascimento","nascimento",646565528))))) / (1000)) / (60)) / (60)) / (24)) / (365)));
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,patient_info,new cljs.core.Keyword(null,"idade","idade",297389078),idade),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628),react_med.screens.patient_info.core.selected_patient);
react_med.screens.patient_info.core.share = (function react_med$screens$patient_info$core$share(data,filename,type){
return navigator.share(({"files": [(new File([data],"Avaliacao.csv"))], "title": "Avalia\u00E7\u00E3o da Dani", "text": "Texto q acho q n\u00E3o vai aparecer."})).then((function (){
return console.log("Conseguiu compartilhar.");
})).catch((function (p1__35621_SHARP_){
return console.log("N\u00E3o conseguiu compartilhar.",p1__35621_SHARP_);
}));
});
react_med.screens.patient_info.core.download = (function react_med$screens$patient_info$core$download(data,filename,type){
var file = (new Blob([data],({"type": type})));
var url = URL.createObjectURL(file);
var anchor = document.createElement("a");
anchor.setAttribute("href",url);

anchor.setAttribute("download",filename);

document.body.appendChild(anchor);

anchor.click();

return setTimeout(((function (file,url,anchor){
return (function (){
document.body.removeChild(anchor);

return window.URL.revokeObjectURL(url);
});})(file,url,anchor))
,(0));
});
react_med.screens.patient_info.core.yyyy_mm_dd__GT_dd_mm_yyyy = (function react_med$screens$patient_info$core$yyyy_mm_dd__GT_dd_mm_yyyy(date){
var vec__35622 = cljs.core.re_find.call(null,/(\d{4})\D(\d{1,2})\D(\d{1,2})/,date);
var _ = cljs.core.nth.call(null,vec__35622,(0),null);
var year = cljs.core.nth.call(null,vec__35622,(1),null);
var month = cljs.core.nth.call(null,vec__35622,(2),null);
var day = cljs.core.nth.call(null,vec__35622,(3),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
});
react_med.screens.patient_info.core.export_to_csv = (function react_med$screens$patient_info$core$export_to_csv(app_state,p__35625){
var vec__35626 = p__35625;
var event = cljs.core.nth.call(null,vec__35626,(0),null);
if(cljs.core.truth_(react_med.util.pre_state_QMARK_.call(null,app_state,event))){
} else {
throw (new Error("Assert failed: (util/pre-state? app-state event)"));
}

var _PERCENT_ = (function (){
var map__35629_35631 = react_med.screens.patient_info.core.selected_patient.call(null,app_state);
var map__35629_35632__$1 = (((((!((map__35629_35631 == null))))?(((((map__35629_35631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35629_35631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35629_35631):map__35629_35631);
var nome_35633 = cljs.core.get.call(null,map__35629_35632__$1,new cljs.core.Keyword(null,"nome","nome",1100401122));
var nascimento_35634 = cljs.core.get.call(null,map__35629_35632__$1,new cljs.core.Keyword(null,"nascimento","nascimento",646565528));
var sexo_35635 = cljs.core.get.call(null,map__35629_35632__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var estatura_35636 = cljs.core.get.call(null,map__35629_35632__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var csv_data_35637 = testdouble.cljs.csv.write_csv.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Nome",nome_35633], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Data de Nascimento",react_med.screens.patient_info.core.yyyy_mm_dd__GT_dd_mm_yyyy.call(null,nascimento_35634)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sexo",sexo_35635], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Estatura",cljs.core.str.cljs$core$IFn$_invoke$arity$1(estatura_35636).replace(".",",")], null)], null),new cljs.core.Keyword(null,"quote?","quote?",-1114029317),true);
console.log("csv\n",csv_data_35637);

react_med.screens.patient_info.core.share.call(null,csv_data_35637,"teste.csv","text/csv");

return app_state;
})()
;
if(cljs.core.truth_(react_med.util.post_state_QMARK_.call(null,_PERCENT_))){
} else {
throw (new Error("Assert failed: (util/post-state? %)"));
}

return _PERCENT_;
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"export-to-csv","export-to-csv",-305760776),react_med.screens.patient_info.core.export_to_csv);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.patient_info.core.change_patient_name = (function react_med$screens$patient_info$core$change_patient_name(app_state,p__35638){
var vec__35639 = p__35638;
var event = cljs.core.nth.call(null,vec__35639,(0),null);
var new_name = cljs.core.nth.call(null,vec__35639,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nome","nome",1100401122)], null),new cljs.core.Symbol(null,"new-name","new-name",-1366080711,null)));

var opts__14244__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nome","nome",1100401122)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nome","nome",1100401122)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = new_name;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-name","new-name",-1366080711,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nome","nome",1100401122)], null),new cljs.core.Symbol(null,"new-name","new-name",-1366080711,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14245__auto__;
}catch (e35642){var e = e35642;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_patient_name = (function react_med$screens$patient_info$core$change_patient_name(app_state,p__35643){
var vec__35644 = p__35643;
var event = cljs.core.nth.call(null,vec__35644,(0),null);
var new_name = cljs.core.nth.call(null,vec__35644,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nome","nome",1100401122)], null),new_name);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","change-patient-name","react-med.screens.patient-info.core/change-patient-name",1868385065),react_med.screens.patient_info.core.change_patient_name);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.patient_info.core.change_birth_date = (function react_med$screens$patient_info$core$change_birth_date(app_state,p__35647){
var vec__35648 = p__35647;
var event = cljs.core.nth.call(null,vec__35648,(0),null);
var new_birth_date = cljs.core.nth.call(null,vec__35648,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nascimento","nascimento",646565528)], null),new cljs.core.Symbol(null,"new-birth-date","new-birth-date",-1200594950,null)));

var opts__14244__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nascimento","nascimento",646565528)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nascimento","nascimento",646565528)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = new_birth_date;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-birth-date","new-birth-date",-1200594950,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nascimento","nascimento",646565528)], null),new cljs.core.Symbol(null,"new-birth-date","new-birth-date",-1200594950,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14245__auto__;
}catch (e35651){var e = e35651;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_birth_date = (function react_med$screens$patient_info$core$change_birth_date(app_state,p__35652){
var vec__35653 = p__35652;
var event = cljs.core.nth.call(null,vec__35653,(0),null);
var new_birth_date = cljs.core.nth.call(null,vec__35653,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"nascimento","nascimento",646565528)], null),new_birth_date);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","change-birth-date","react-med.screens.patient-info.core/change-birth-date",-352684070),react_med.screens.patient_info.core.change_birth_date);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.patient_info.core.toggle_sexo = (function react_med$screens$patient_info$core$toggle_sexo(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"sexo","sexo",-629407757)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),"Feminino"),"Masculino","Feminino"))));

var opts__14244__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = cljs.core.update_in.call(null,(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"sexo","sexo",-629407757)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"sexo","sexo",-629407757)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = ((function (opts__14244__auto____$1,opts__14244__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__35656_SHARP_){
var opts__14244__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = (((function (){var opts__14244__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = cljs.core._EQ_.call(null,(function (){var opts__14244__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = p1__35656_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__35656#","p1__35656#",1837798369,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14245__auto__;
})(),"Feminino");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__35656#","p1__35656#",1837798369,null),"Feminino"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14245__auto__;
})())?"Masculino":"Feminino");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__35656#","p1__35656#",1837798369,null),"Feminino"),"Masculino","Feminino"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14245__auto__;
});})(opts__14244__auto____$1,opts__14244__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__35656#","p1__35656#",1837798369,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__35656#","p1__35656#",1837798369,null),"Feminino"),"Masculino","Feminino")),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"sexo","sexo",-629407757)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__35656#","p1__35656#",1837798369,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__35656#","p1__35656#",1837798369,null),"Feminino"),"Masculino","Feminino"))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14245__auto__;
}catch (e35657){var e = e35657;
throw e;
}});
} else {
react_med.screens.patient_info.core.toggle_sexo = (function react_med$screens$patient_info$core$toggle_sexo(app_state){
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"sexo","sexo",-629407757)], null),(function (p1__35656_SHARP_){
if(cljs.core._EQ_.call(null,p1__35656_SHARP_,"Feminino")){
return "Masculino";
} else {
return "Feminino";
}
}));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","toggle-sexo","react-med.screens.patient-info.core/toggle-sexo",88237148),react_med.screens.patient_info.core.toggle_sexo);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.patient_info.core.change_height = (function react_med$screens$patient_info$core$change_height(app_state,p__35658){
var vec__35659 = p__35658;
var event = cljs.core.nth.call(null,vec__35659,(0),null);
var new_height = cljs.core.nth.call(null,vec__35659,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"estatura","estatura",-685084760)], null),cljs.core.list(new cljs.core.Symbol("js","parseFloat","js/parseFloat",1048015479,null),cljs.core.list(new cljs.core.Symbol(null,".replace",".replace",-1869576414,null),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),",","."))));

var opts__14244__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"estatura","estatura",-685084760)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"estatura","estatura",-685084760)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})(),(function (){var opts__14244__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = parseFloat((function (){var opts__14244__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = (function (){var opts__14244__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = new_height;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14245__auto__;
})().replace(",",".");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".replace",".replace",-1869576414,null),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),",","."),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14245__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","parseFloat","js/parseFloat",1048015479,null),cljs.core.list(new cljs.core.Symbol(null,".replace",".replace",-1869576414,null),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),",",".")),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14245__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"estatura","estatura",-685084760)], null),cljs.core.list(new cljs.core.Symbol("js","parseFloat","js/parseFloat",1048015479,null),cljs.core.list(new cljs.core.Symbol(null,".replace",".replace",-1869576414,null),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),",","."))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14245__auto__;
}catch (e35662){var e = e35662;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_height = (function react_med$screens$patient_info$core$change_height(app_state,p__35663){
var vec__35664 = p__35663;
var event = cljs.core.nth.call(null,vec__35664,(0),null);
var new_height = cljs.core.nth.call(null,vec__35664,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"estatura","estatura",-685084760)], null),parseFloat(new_height.replace(",",".")));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","change-height","react-med.screens.patient-info.core/change-height",-1808838546),react_med.screens.patient_info.core.change_height);
react_med.screens.patient_info.core.date_picker_i18n_pt = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"formatTitle","formatTitle",-1529600544),new cljs.core.Keyword(null,"parseDate","parseDate",1985565313),new cljs.core.Keyword(null,"weekdays","weekdays",2061292258),new cljs.core.Keyword(null,"week","week",-1326473278),new cljs.core.Keyword(null,"weekdaysShort","weekdaysShort",1244560039),new cljs.core.Keyword(null,"today","today",945271563),new cljs.core.Keyword(null,"formatDate","formatDate",1674537616),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.Keyword(null,"firstDayOfWeek","firstDayOfWeek",-40389547),new cljs.core.Keyword(null,"cancel","cancel",-1964088360),new cljs.core.Keyword(null,"monthNames","monthNames",121720157),new cljs.core.Keyword(null,"clear","clear",1877104959)],[(function (month_name,full_year){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(month_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_year)].join('');
}),(function (text){
var vec__35667 = cljs.core.re_find.call(null,/(\d{1,2})\D(\d{1,2})\D(\d{4})/,text);
var _ = cljs.core.nth.call(null,vec__35667,(0),null);
var d = cljs.core.nth.call(null,vec__35667,(1),null);
var m = cljs.core.nth.call(null,vec__35667,(2),null);
var y = cljs.core.nth.call(null,vec__35667,(3),null);
return ({"day": parseInt(d), "month": (parseInt(m) - (1)), "year": parseInt(y)});
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Domingo","Segunda","Ter\u00E7a","Quarta","Quinta","Sexta","S\u00E1bado"], null),"Semana",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dom","Seg","Ter","Qua","Qui","Sex","S\u00E1b"], null),"Hoje",(function (date){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.day),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((date.month + (1))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.year)].join('');
}),"Calend\u00E1rio",(0),"Cancelar",new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Janeiro","Fevereiro","Mar\u00E7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"], null),"Limpar"]);
react_med.screens.patient_info.core.editing_patient_info_component = (function react_med$screens$patient_info$core$editing_patient_info_component(){
var map__35673 = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628)], null));
var map__35673__$1 = (((((!((map__35673 == null))))?(((((map__35673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35673):map__35673);
var nome = cljs.core.get.call(null,map__35673__$1,new cljs.core.Keyword(null,"nome","nome",1100401122));
var nascimento = cljs.core.get.call(null,map__35673__$1,new cljs.core.Keyword(null,"nascimento","nascimento",646565528));
var idade = cljs.core.get.call(null,map__35673__$1,new cljs.core.Keyword(null,"idade","idade",297389078));
var sexo = cljs.core.get.call(null,map__35673__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var estatura = cljs.core.get.call(null,map__35673__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var line_style = ({"display": "flex", "alignItems": "center", "whiteSpace": "pre", "height": (48)});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Nome: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#e5e9ed", "padding": "4px 15px", "borderRadius": "5px"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contentEditable","contentEditable",-823191689),"",new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (map__35673,map__35673__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (p1__35670_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","change-patient-name","react-med.screens.patient-info.core/change-patient-name",1868385065),p1__35670_SHARP_.target.innerText], null));
});})(map__35673,map__35673__$1,nome,nascimento,idade,sexo,estatura,line_style))
], null),nome], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,cljs.core.js__GT_clj.call(null,line_style),"whiteSpace"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Nascimento: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom-module#vaadin-style","dom-module#vaadin-style",877150704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme-for","theme-for",-1903003204),"vaadin-date-picker-overlay"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),"vaadin-date-picker-overlay{\n           z-index: 1200;\n         }"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.util.with_mount_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vaadin-date-picker","vaadin-date-picker",293781945),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),nascimento,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__35673,map__35673__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (this$){
reagent.core.dom_node.call(null,this$).i18n = cljs.core.clj__GT_js.call(null,react_med.screens.patient_info.core.date_picker_i18n_pt);

return reagent.core.dom_node.call(null,this$).onchange = ((function (map__35673,map__35673__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (p1__35671_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","change-birth-date","react-med.screens.patient-info.core/change-birth-date",-352684070),p1__35671_SHARP_.target.value], null));
});})(map__35673,map__35673__$1,nome,nascimento,idade,sexo,estatura,line_style))
;
});})(map__35673,map__35673__$1,nome,nascimento,idade,sexo,estatura,line_style))
], null)], null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,line_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(0, 0, 0, 0.4)"], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Idade: "], null),idade," anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Sexo: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35673,map__35673__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","toggle-sexo","react-med.screens.patient-info.core/toggle-sexo",88237148)], null));
});})(map__35673,map__35673__$1,nome,nascimento,idade,sexo,estatura,line_style))
,new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#e5e9ed", "cursor": "pointer", "borderRadius": "30px", "padding": "7px 13px"})], null),sexo], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Estatura: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),estatura,new cljs.core.Keyword(null,"suffix","suffix",367373057)," cm",new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (map__35673,map__35673__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (p1__35672_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","change-height","react-med.screens.patient-info.core/change-height",-1808838546),p1__35672_SHARP_.target.value], null));
});})(map__35673,map__35673__$1,nome,nascimento,idade,sexo,estatura,line_style))
], null)], null)], null)], null);
});
react_med.screens.patient_info.core.patient_info_component = (function react_med$screens$patient_info$core$patient_info_component(){
var map__35675 = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628)], null));
var map__35675__$1 = (((((!((map__35675 == null))))?(((((map__35675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35675):map__35675);
var nome = cljs.core.get.call(null,map__35675__$1,new cljs.core.Keyword(null,"nome","nome",1100401122));
var nascimento = cljs.core.get.call(null,map__35675__$1,new cljs.core.Keyword(null,"nascimento","nascimento",646565528));
var idade = cljs.core.get.call(null,map__35675__$1,new cljs.core.Keyword(null,"idade","idade",297389078));
var sexo = cljs.core.get.call(null,map__35675__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var estatura = cljs.core.get.call(null,map__35675__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var nascimento_formatado = react_med.screens.patient_info.core.yyyy_mm_dd__GT_dd_mm_yyyy.call(null,nascimento);
var line_style = ({"display": "flex", "alignItems": "center", "whiteSpace": "pre", "height": (48)});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Nome: "], null),nome], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Nascimento: "], null),nascimento_formatado], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Idade: "], null),idade," anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Sexo: "], null),sexo], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Estatura: "], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(estatura).replace(".",",")," cm"], null)], null);
});
react_med.screens.patient_info.core.patient_detail = (function react_med$screens$patient_info$core$patient_detail(p__35677,content_view){
var map__35678 = p__35677;
var map__35678__$1 = (((((!((map__35678 == null))))?(((((map__35678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35678):map__35678);
var actions = cljs.core.get.call(null,map__35678__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var menu_structure = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","side-menu","react-med.routes/side-menu",909029319)], null));
var title = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","title","react-med.routes/title",1582209313)], null));
var actions__$1 = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","actions","react-med.routes/actions",-1858990120)], null));
var tabs = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","tabs","react-med.routes/tabs",1784816700)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variation","variation",-450640146),"<-"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.screen_title,title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.tabs_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-options","menu-options",-1774050123),tabs], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,cljs.core.with_meta.call(null,content_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.drawer_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-structure","menu-structure",-627499224),menu_structure], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.actions_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),actions__$1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.bottom_bar], null)], null);
});
react_med.screens.patient_info.core.patient_info = (function react_med$screens$patient_info$core$patient_info(){
var actions = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","actions","react-med.routes/actions",-1858990120)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_detail,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_info_component], null)], null);
});
react_med.screens.patient_info.core.editing_patient_info = (function react_med$screens$patient_info$core$editing_patient_info(){
var actions = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","actions","react-med.routes/actions",-1858990120)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_detail,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.editing_patient_info_component], null)], null);
});

//# sourceMappingURL=core.js.map
