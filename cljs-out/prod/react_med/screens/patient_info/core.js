// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.patient_info.core');
goog.require('cljs.core');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('react_med.screens.components');
goog.require('react_med.screens.paciente_relatorio.bioimpedance');
goog.require('react_med.shell_components');
goog.require('react_med.util');
goog.require('reagent.core');
goog.require('testdouble.cljs.csv');
react_med.screens.patient_info.core.years_difference = (function react_med$screens$patient_info$core$years_difference(initial_date,final_date){
return Math.floor((((((((new Date(final_date)) - (new Date(initial_date))) / (1000)) / (60)) / (60)) / (24)) / (365)));
});
react_med.screens.patient_info.core.paciente_default = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(99999999999),new cljs.core.Keyword(null,"nome","nome",1100401122),"Paciente n\u00E3o encontrado",new cljs.core.Keyword(null,"nascimento","nascimento",646565528),"2000-10-01",new cljs.core.Keyword(null,"sexo","sexo",-629407757),"Masculino",new cljs.core.Keyword(null,"estatura","estatura",-685084760),176.8,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),cljs.core.PersistentVector.EMPTY], null);
react_med.screens.patient_info.core.selected_patient = (function react_med$screens$patient_info$core$selected_patient(app_state){
var paciente_id = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null));
var patient_info = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),paciente_id], null),react_med.screens.patient_info.core.paciente_default);
var idade = react_med.screens.patient_info.core.years_difference.call(null,patient_info.call(null,new cljs.core.Keyword(null,"nascimento","nascimento",646565528)),(new Date()));
return cljs.core.assoc.call(null,patient_info,new cljs.core.Keyword(null,"idade","idade",297389078),idade);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628),react_med.screens.patient_info.core.selected_patient);
react_med.screens.patient_info.core.share = (function react_med$screens$patient_info$core$share(data,filename,type){
console.log("sharing csv");

return navigator.share(({"files": [(new File([data],filename,({"type": type})))], "title": filename, "text": "Texto q acho q n\u00E3o vai aparecer."})).then((function (){
return console.log("Conseguiu compartilhar.");
})).catch((function (p1__19946_SHARP_){
return console.error("N\u00E3o conseguiu compartilhar.",p1__19946_SHARP_);
}));
});
react_med.screens.patient_info.core.download = (function react_med$screens$patient_info$core$download(data,filename,type){
console.log("downloading csv");

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
react_med.screens.patient_info.core.share_or_download = (function react_med$screens$patient_info$core$share_or_download(data,filename,type){
console.log("share-or-download csv");

console.log(".-canShare csv",navigator.canShare);

console.log(".canShare csv",navigator.canShare(({"files": [(new File([data],filename,({"type": type})))]})));

if(cljs.core.truth_((function (){var and__4120__auto__ = navigator.canShare;
if(cljs.core.truth_(and__4120__auto__)){
return navigator.canShare(({"files": [(new File([data],filename,({"type": type})))]}));
} else {
return and__4120__auto__;
}
})())){
return react_med.screens.patient_info.core.share.call(null,data,filename,type);
} else {
return react_med.screens.patient_info.core.download.call(null,data,filename,type);
}
});
react_med.screens.patient_info.core.replace_accents = (function react_med$screens$patient_info$core$replace_accents(s){
return clojure.string.replace.call(null,s,/[áéíóãçõ ]/,new cljs.core.PersistentArrayMap(null, 8, ["\u00E1","a","\u00E9","e","\u00ED","i","\u00F3","o","\u00E3","a","\u00E7","c","\u00F5","o"," ","-"], null));
});
react_med.screens.patient_info.core.dot__GT_comma = (function react_med$screens$patient_info$core$dot__GT_comma(n){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n).replace(".",",");
});
react_med.screens.patient_info.core.avaliacao__GT_csv_row = (function react_med$screens$patient_info$core$avaliacao__GT_csv_row(p__19949){
var map__19950 = p__19949;
var map__19950__$1 = (((((!((map__19950 == null))))?(((((map__19950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19950):map__19950);
var paciente_info = map__19950__$1;
var nascimento = cljs.core.get.call(null,map__19950__$1,new cljs.core.Keyword(null,"nascimento","nascimento",646565528));
return ((function (map__19950,map__19950__$1,paciente_info,nascimento){
return (function (p__19952){
var map__19953 = p__19952;
var map__19953__$1 = (((((!((map__19953 == null))))?(((((map__19953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19953):map__19953);
var aval = map__19953__$1;
var circunferencia_quadril = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"circunferencia-quadril","circunferencia-quadril",-1661092004));
var data = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var atividade_fisica = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455));
var reatancia = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
var estatura = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var circunferencia_braco = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626));
var circunferencia_cintura = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174));
var resistencia = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var circunferencia_perna = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"circunferencia-perna","circunferencia-perna",-1787719058));
var peso = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
try{var idade = react_med.screens.patient_info.core.years_difference.call(null,nascimento,data);
var formated_date = react_med.util.yyyy_mm_dd__GT_dd_mm_yyyy.call(null,data);
var avaliacao_info = cljs.core.merge.call(null,aval,paciente_info);
var format_num = ((function (idade,formated_date,avaliacao_info,map__19953,map__19953__$1,aval,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,map__19950,map__19950__$1,paciente_info,nascimento){
return (function (p1__19947_SHARP_){
var G__19956 = p1__19947_SHARP_;
var G__19956__$1 = (((G__19956 == null))?null:G__19956.toFixed((2)));
if((G__19956__$1 == null)){
return null;
} else {
return react_med.screens.patient_info.core.dot__GT_comma.call(null,G__19956__$1);
}
});})(idade,formated_date,avaliacao_info,map__19953,map__19953__$1,aval,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,map__19950,map__19950__$1,paciente_info,nascimento))
;
var em_relacao_peso = ((function (idade,formated_date,avaliacao_info,format_num,map__19953,map__19953__$1,aval,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,map__19950,map__19950__$1,paciente_info,nascimento){
return (function (p1__19948_SHARP_){
return parseFloat(((p1__19948_SHARP_ / new cljs.core.Keyword(null,"peso","peso",-5226095).cljs$core$IFn$_invoke$arity$1(avaliacao_info)) * (100)).toFixed((1)));
});})(idade,formated_date,avaliacao_info,format_num,map__19953,map__19953__$1,aval,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,map__19950,map__19950__$1,paciente_info,nascimento))
;
var gordura_corporal_absoluta = (new cljs.core.Keyword(null,"peso","peso",-5226095).cljs$core$IFn$_invoke$arity$1(avaliacao_info) - react_med.screens.paciente_relatorio.bioimpedance.massa_livre_de_gordura.call(null,avaliacao_info));
var gordura_corporal_relativa = em_relacao_peso.call(null,gordura_corporal_absoluta);
var massa_musculoesqueletica = parseFloat(((react_med.screens.paciente_relatorio.bioimpedance.massa_musculoesqueletica.call(null,avaliacao_info) / (new cljs.core.Keyword(null,"estatura","estatura",-685084760).cljs$core$IFn$_invoke$arity$1(avaliacao_info) * new cljs.core.Keyword(null,"estatura","estatura",-685084760).cljs$core$IFn$_invoke$arity$1(avaliacao_info))) * (10000)).toFixed((1)));
var agua_corporal_total = em_relacao_peso.call(null,react_med.screens.paciente_relatorio.bioimpedance.agua_corporal.call(null,avaliacao_info));
var agua_extracelular = em_relacao_peso.call(null,react_med.screens.paciente_relatorio.bioimpedance.agua_extracelular.call(null,avaliacao_info));
var agua_intracelular = em_relacao_peso.call(null,react_med.screens.paciente_relatorio.bioimpedance.agua_intracelular.call(null,avaliacao_info));
return (new cljs.core.PersistentArrayMap(null,(20),["Data da Avalia\u00E7\u00E3o",formated_date,"Idade",idade,"Peso",format_num.call(null,peso),"Estatura",format_num.call(null,estatura),"IMC",format_num.call(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,avaliacao_info)),"Circunfer\u00EAncia Cintura",format_num.call(null,circunferencia_cintura),"Circunfer\u00EAncia Quadril",format_num.call(null,circunferencia_quadril),"Circunfer\u00EAncia Bra\u00E7o",format_num.call(null,circunferencia_braco),"Circunfer\u00EAncia Perna",format_num.call(null,circunferencia_perna),"N\u00EDvel de Atividade F\u00EDsica",atividade_fisica,"Resist\u00EAncia",resistencia,"Reat\u00E2ncia",reatancia,"Imped\u00E2ncia",format_num.call(null,react_med.screens.paciente_relatorio.bioimpedance.impedancia.call(null,avaliacao_info)),"\u00C2ngulo",format_num.call(null,react_med.screens.paciente_relatorio.bioimpedance.angulo.call(null,avaliacao_info)),"Gordura Corporal Absoluta em Kg",format_num.call(null,gordura_corporal_absoluta),"Gordura Corporal Relativa em %",format_num.call(null,gordura_corporal_relativa),"Massa Musculoesquel\u00E9tica",format_num.call(null,massa_musculoesqueletica),"\u00C1gua Corporal Total",format_num.call(null,agua_corporal_total),"\u00C1gua Extracelular",format_num.call(null,agua_extracelular),"\u00C1gua Intracelular",format_num.call(null,agua_intracelular)],null));
}catch (e19955){if((e19955 instanceof Object)){
var e = e19955;
console.error("Erro ao computar os valores da bioimped\u00E2ncia.",e);

return (new cljs.core.PersistentArrayMap(null,(2),["Data da Avalia\u00E7\u00E3o",react_med.util.yyyy_mm_dd__GT_dd_mm_yyyy.call(null,data),"Idade","Dados de avalia\u00E7\u00E3o incorretos."],null));
} else {
throw e19955;

}
}});
;})(map__19950,map__19950__$1,paciente_info,nascimento))
});
react_med.screens.patient_info.core.app_state__GT_csv_data = (function react_med$screens$patient_info$core$app_state__GT_csv_data(app_state){
var map__19957 = react_med.screens.patient_info.core.selected_patient.call(null,app_state);
var map__19957__$1 = (((((!((map__19957 == null))))?(((((map__19957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19957):map__19957);
var paciente_info = map__19957__$1;
var nome = cljs.core.get.call(null,map__19957__$1,new cljs.core.Keyword(null,"nome","nome",1100401122));
var nascimento = cljs.core.get.call(null,map__19957__$1,new cljs.core.Keyword(null,"nascimento","nascimento",646565528));
var sexo = cljs.core.get.call(null,map__19957__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var estatura = cljs.core.get.call(null,map__19957__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var avaliacoes = cljs.core.get.call(null,map__19957__$1,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982));
var nome_without_accents = react_med.screens.patient_info.core.replace_accents.call(null,nome);
var paciente_head = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Nome",nome], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Data de Nascimento",react_med.util.yyyy_mm_dd__GT_dd_mm_yyyy.call(null,nascimento)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sexo",sexo], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Estatura",react_med.screens.patient_info.core.dot__GT_comma.call(null,estatura)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)], null);
var avals = cljs.core.filter.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),avaliacoes);
var avals__$1 = cljs.core.mapv.call(null,react_med.screens.patient_info.core.avaliacao__GT_csv_row.call(null,paciente_info),avals);
var avaliacoes__$1 = cljs.core.cons.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,avals__$1)),cljs.core.map.call(null,cljs.core.vals,avals__$1));
return testdouble.cljs.csv.write_csv.call(null,cljs.core.concat.call(null,paciente_head,avaliacoes__$1),new cljs.core.Keyword(null,"quote?","quote?",-1114029317),true);
});
react_med.screens.patient_info.core.export_to_csv = (function react_med$screens$patient_info$core$export_to_csv(app_state,p__19959){
var vec__19960 = p__19959;
var event = cljs.core.nth.call(null,vec__19960,(0),null);
if(cljs.core.truth_(react_med.util.pre_state_QMARK_.call(null,app_state,event))){
} else {
throw (new Error("Assert failed: (util/pre-state? app-state event)"));
}

var _PERCENT_ = (function (){
var map__19963_19965 = react_med.screens.patient_info.core.selected_patient.call(null,app_state);
var map__19963_19966__$1 = (((((!((map__19963_19965 == null))))?(((((map__19963_19965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19963_19965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19963_19965):map__19963_19965);
var nome_19967 = cljs.core.get.call(null,map__19963_19966__$1,new cljs.core.Keyword(null,"nome","nome",1100401122));
var nome_without_accents_19968 = react_med.screens.patient_info.core.replace_accents.call(null,nome_19967);
var csv_data_19969 = react_med.screens.patient_info.core.app_state__GT_csv_data.call(null,app_state);
console.log("export-to-csv csv-data",csv_data_19969);

react_med.screens.patient_info.core.share_or_download.call(null,csv_data_19969,["avaliacoes-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nome_without_accents_19968),".csv"].join(''),"text/csv");

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
react_med.screens.patient_info.core.change_patient_name = (function react_med$screens$patient_info$core$change_patient_name(app_state,p__19970){
var vec__19971 = p__19970;
var event = cljs.core.nth.call(null,vec__19971,(0),null);
var new_name = cljs.core.nth.call(null,vec__19971,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"nome","nome",1100401122)], null),new cljs.core.Symbol(null,"new-name","new-name",-1366080711,null))));

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
var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),new cljs.core.Keyword(null,"nome","nome",1100401122)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"nome","nome",1100401122)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new_name;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-name","new-name",-1366080711,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"nome","nome",1100401122)], null),new cljs.core.Symbol(null,"new-name","new-name",-1366080711,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"nome","nome",1100401122)], null),new cljs.core.Symbol(null,"new-name","new-name",-1366080711,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19974){var e = e19974;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_patient_name = (function react_med$screens$patient_info$core$change_patient_name(app_state,p__19975){
var vec__19976 = p__19975;
var event = cljs.core.nth.call(null,vec__19976,(0),null);
var new_name = cljs.core.nth.call(null,vec__19976,(1),null);
var paciente_id = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null));
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),paciente_id,new cljs.core.Keyword(null,"nome","nome",1100401122)], null),new_name);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","change-patient-name","react-med.screens.patient-info.core/change-patient-name",1868385065),react_med.screens.patient_info.core.change_patient_name);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.patient_info.core.change_birth_date = (function react_med$screens$patient_info$core$change_birth_date(app_state,p__19979){
var vec__19980 = p__19979;
var event = cljs.core.nth.call(null,vec__19980,(0),null);
var new_birth_date = cljs.core.nth.call(null,vec__19980,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"nascimento","nascimento",646565528)], null),new cljs.core.Symbol(null,"new-birth-date","new-birth-date",-1200594950,null))));

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
var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),new cljs.core.Keyword(null,"nascimento","nascimento",646565528)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"nascimento","nascimento",646565528)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new_birth_date;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-birth-date","new-birth-date",-1200594950,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"nascimento","nascimento",646565528)], null),new cljs.core.Symbol(null,"new-birth-date","new-birth-date",-1200594950,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"nascimento","nascimento",646565528)], null),new cljs.core.Symbol(null,"new-birth-date","new-birth-date",-1200594950,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19983){var e = e19983;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_birth_date = (function react_med$screens$patient_info$core$change_birth_date(app_state,p__19984){
var vec__19985 = p__19984;
var event = cljs.core.nth.call(null,vec__19985,(0),null);
var new_birth_date = cljs.core.nth.call(null,vec__19985,(1),null);
var paciente_id = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null));
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),paciente_id,new cljs.core.Keyword(null,"nascimento","nascimento",646565528)], null),new_birth_date);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","change-birth-date","react-med.screens.patient-info.core/change-birth-date",-352684070),react_med.screens.patient_info.core.change_birth_date);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.patient_info.core.toggle_sexo = (function react_med$screens$patient_info$core$toggle_sexo(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"sexo","sexo",-629407757)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),"Feminino"),"Masculino","Feminino")))));

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
var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.update_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),new cljs.core.Keyword(null,"sexo","sexo",-629407757)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"sexo","sexo",-629407757)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = ((function (opts__19139__auto____$2,opts__19139__auto____$1,paciente_id,opts__19139__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__19988_SHARP_){
var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (((function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core._EQ_.call(null,(function (){var opts__19139__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = p1__19988_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__19988#","p1__19988#",1203001841,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})(),"Feminino");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__19988#","p1__19988#",1203001841,null),"Feminino"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})())?"Masculino":"Feminino");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__19988#","p1__19988#",1203001841,null),"Feminino"),"Masculino","Feminino"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
});})(opts__19139__auto____$2,opts__19139__auto____$1,paciente_id,opts__19139__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19988#","p1__19988#",1203001841,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__19988#","p1__19988#",1203001841,null),"Feminino"),"Masculino","Feminino")),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"sexo","sexo",-629407757)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19988#","p1__19988#",1203001841,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__19988#","p1__19988#",1203001841,null),"Feminino"),"Masculino","Feminino"))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"sexo","sexo",-629407757)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19988#","p1__19988#",1203001841,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__19988#","p1__19988#",1203001841,null),"Feminino"),"Masculino","Feminino")))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19989){var e = e19989;
throw e;
}});
} else {
react_med.screens.patient_info.core.toggle_sexo = (function react_med$screens$patient_info$core$toggle_sexo(app_state){
var paciente_id = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null));
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),paciente_id,new cljs.core.Keyword(null,"sexo","sexo",-629407757)], null),((function (paciente_id){
return (function (p1__19988_SHARP_){
if(cljs.core._EQ_.call(null,p1__19988_SHARP_,"Feminino")){
return "Masculino";
} else {
return "Feminino";
}
});})(paciente_id))
);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","toggle-sexo","react-med.screens.patient-info.core/toggle-sexo",88237148),react_med.screens.patient_info.core.toggle_sexo);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.patient_info.core.change_height = (function react_med$screens$patient_info$core$change_height(app_state,p__19990){
var vec__19991 = p__19990;
var event = cljs.core.nth.call(null,vec__19991,(0),null);
var new_height = cljs.core.nth.call(null,vec__19991,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"estatura","estatura",-685084760)], null),cljs.core.list(new cljs.core.Symbol("js","parseFloat","js/parseFloat",1048015479,null),cljs.core.list(new cljs.core.Symbol(null,".replace",".replace",-1869576414,null),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),",",".")))));

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
var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),new cljs.core.Keyword(null,"estatura","estatura",-685084760)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"estatura","estatura",-685084760)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = parseFloat((function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new_height;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})().replace(",",".");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".replace",".replace",-1869576414,null),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),",","."),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","parseFloat","js/parseFloat",1048015479,null),cljs.core.list(new cljs.core.Symbol(null,".replace",".replace",-1869576414,null),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),",",".")),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"estatura","estatura",-685084760)], null),cljs.core.list(new cljs.core.Symbol("js","parseFloat","js/parseFloat",1048015479,null),cljs.core.list(new cljs.core.Symbol(null,".replace",".replace",-1869576414,null),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),",","."))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"estatura","estatura",-685084760)], null),cljs.core.list(new cljs.core.Symbol("js","parseFloat","js/parseFloat",1048015479,null),cljs.core.list(new cljs.core.Symbol(null,".replace",".replace",-1869576414,null),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),",",".")))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19994){var e = e19994;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_height = (function react_med$screens$patient_info$core$change_height(app_state,p__19995){
var vec__19996 = p__19995;
var event = cljs.core.nth.call(null,vec__19996,(0),null);
var new_height = cljs.core.nth.call(null,vec__19996,(1),null);
var paciente_id = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"paciente-selecionado","paciente-selecionado",863963374)], null));
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),paciente_id,new cljs.core.Keyword(null,"estatura","estatura",-685084760)], null),parseFloat(new_height.replace(",",".")));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","change-height","react-med.screens.patient-info.core/change-height",-1808838546),react_med.screens.patient_info.core.change_height);
react_med.screens.patient_info.core.date_picker_i18n_pt = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"formatTitle","formatTitle",-1529600544),new cljs.core.Keyword(null,"parseDate","parseDate",1985565313),new cljs.core.Keyword(null,"weekdays","weekdays",2061292258),new cljs.core.Keyword(null,"week","week",-1326473278),new cljs.core.Keyword(null,"weekdaysShort","weekdaysShort",1244560039),new cljs.core.Keyword(null,"today","today",945271563),new cljs.core.Keyword(null,"formatDate","formatDate",1674537616),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.Keyword(null,"firstDayOfWeek","firstDayOfWeek",-40389547),new cljs.core.Keyword(null,"cancel","cancel",-1964088360),new cljs.core.Keyword(null,"monthNames","monthNames",121720157),new cljs.core.Keyword(null,"clear","clear",1877104959)],[(function (month_name,full_year){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(month_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_year)].join('');
}),(function (text){
var vec__19999 = cljs.core.re_find.call(null,/(\d{1,2})\D(\d{1,2})\D(\d{4})/,text);
var _ = cljs.core.nth.call(null,vec__19999,(0),null);
var d = cljs.core.nth.call(null,vec__19999,(1),null);
var m = cljs.core.nth.call(null,vec__19999,(2),null);
var y = cljs.core.nth.call(null,vec__19999,(3),null);
return ({"day": parseInt(d), "month": (parseInt(m) - (1)), "year": parseInt(y)});
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Domingo","Segunda","Ter\u00E7a","Quarta","Quinta","Sexta","S\u00E1bado"], null),"Semana",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dom","Seg","Ter","Qua","Qui","Sex","S\u00E1b"], null),"Hoje",(function (date){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.day),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((date.month + (1))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.year)].join('');
}),"Calend\u00E1rio",(0),"Cancelar",new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Janeiro","Fevereiro","Mar\u00E7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"], null),"Limpar"]);
react_med.screens.patient_info.core.editing_patient_info_component = (function react_med$screens$patient_info$core$editing_patient_info_component(){
var map__20005 = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628)], null));
var map__20005__$1 = (((((!((map__20005 == null))))?(((((map__20005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20005):map__20005);
var nome = cljs.core.get.call(null,map__20005__$1,new cljs.core.Keyword(null,"nome","nome",1100401122));
var nascimento = cljs.core.get.call(null,map__20005__$1,new cljs.core.Keyword(null,"nascimento","nascimento",646565528));
var idade = cljs.core.get.call(null,map__20005__$1,new cljs.core.Keyword(null,"idade","idade",297389078));
var sexo = cljs.core.get.call(null,map__20005__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var estatura = cljs.core.get.call(null,map__20005__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var line_style = ({"display": "flex", "alignItems": "center", "whiteSpace": "pre", "height": (48)});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Nome: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#e5e9ed", "padding": "4px 15px", "borderRadius": "5px"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contentEditable","contentEditable",-823191689),"",new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (map__20005,map__20005__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (p1__20002_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","change-patient-name","react-med.screens.patient-info.core/change-patient-name",1868385065),p1__20002_SHARP_.target.innerText], null));
});})(map__20005,map__20005__$1,nome,nascimento,idade,sexo,estatura,line_style))
], null),nome], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,cljs.core.js__GT_clj.call(null,line_style),"whiteSpace"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Nascimento: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom-module#vaadin-style","dom-module#vaadin-style",877150704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme-for","theme-for",-1903003204),"vaadin-date-picker-overlay"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),"vaadin-date-picker-overlay{\n           z-index: 1200;\n         }"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.util.with_mount_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vaadin-date-picker","vaadin-date-picker",293781945),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),nascimento,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__20005,map__20005__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (this$){
reagent.core.dom_node.call(null,this$).i18n = cljs.core.clj__GT_js.call(null,react_med.screens.patient_info.core.date_picker_i18n_pt);

return reagent.core.dom_node.call(null,this$).onchange = ((function (map__20005,map__20005__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (p1__20003_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","change-birth-date","react-med.screens.patient-info.core/change-birth-date",-352684070),p1__20003_SHARP_.target.value], null));
});})(map__20005,map__20005__$1,nome,nascimento,idade,sexo,estatura,line_style))
;
});})(map__20005,map__20005__$1,nome,nascimento,idade,sexo,estatura,line_style))
], null)], null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,line_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(0, 0, 0, 0.4)"], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Idade: "], null),idade," anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Sexo: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__20005,map__20005__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","toggle-sexo","react-med.screens.patient-info.core/toggle-sexo",88237148)], null));
});})(map__20005,map__20005__$1,nome,nascimento,idade,sexo,estatura,line_style))
,new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#e5e9ed", "cursor": "pointer", "borderRadius": "30px", "padding": "7px 13px"})], null),sexo], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Estatura: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),estatura,new cljs.core.Keyword(null,"suffix","suffix",367373057)," cm",new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (map__20005,map__20005__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (p1__20004_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","change-height","react-med.screens.patient-info.core/change-height",-1808838546),p1__20004_SHARP_.target.value], null));
});})(map__20005,map__20005__$1,nome,nascimento,idade,sexo,estatura,line_style))
], null)], null)], null)], null);
});
react_med.screens.patient_info.core.patient_info_component = (function react_med$screens$patient_info$core$patient_info_component(){
var map__20007 = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628)], null));
var map__20007__$1 = (((((!((map__20007 == null))))?(((((map__20007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20007):map__20007);
var nome = cljs.core.get.call(null,map__20007__$1,new cljs.core.Keyword(null,"nome","nome",1100401122));
var nascimento = cljs.core.get.call(null,map__20007__$1,new cljs.core.Keyword(null,"nascimento","nascimento",646565528));
var idade = cljs.core.get.call(null,map__20007__$1,new cljs.core.Keyword(null,"idade","idade",297389078));
var sexo = cljs.core.get.call(null,map__20007__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var estatura = cljs.core.get.call(null,map__20007__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var nascimento_formatado = react_med.util.yyyy_mm_dd__GT_dd_mm_yyyy.call(null,nascimento);
var line_style = ({"display": "flex", "alignItems": "center", "whiteSpace": "pre", "height": (48)});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Nome: "], null),nome], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Nascimento: "], null),nascimento_formatado], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Idade: "], null),idade," anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Sexo: "], null),sexo], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Estatura: "], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(estatura).replace(".",",")," cm"], null)], null);
});
react_med.screens.patient_info.core.patient_info = (function react_med$screens$patient_info$core$patient_info(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_info_component], null)], null)], null);
});
react_med.screens.patient_info.core.editing_patient_info = (function react_med$screens$patient_info$core$editing_patient_info(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.editing_patient_info_component], null)], null)], null);
});

//# sourceMappingURL=core.js.map
