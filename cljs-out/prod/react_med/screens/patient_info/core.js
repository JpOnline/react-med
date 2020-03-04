// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.screens.patient_info.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
react_med.screens.patient_info.core.paciente_default = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,(99999999999),cljs.core.cst$kw$nome,"Paciente n\u00E3o encontrado",cljs.core.cst$kw$nascimento,"2000-10-01",cljs.core.cst$kw$sexo,"Masculino",cljs.core.cst$kw$estatura,176.8,cljs.core.cst$kw$avaliacoes,cljs.core.PersistentVector.EMPTY], null);
react_med.screens.patient_info.core.selected_patient = (function react_med$screens$patient_info$core$selected_patient(app_state){
var paciente_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null));
var patient_info = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,paciente_id], null),react_med.screens.patient_info.core.paciente_default);
var idade = react_med.screens.patient_info.core.years_difference((function (){var G__26089 = cljs.core.cst$kw$nascimento;
return (patient_info.cljs$core$IFn$_invoke$arity$1 ? patient_info.cljs$core$IFn$_invoke$arity$1(G__26089) : patient_info.call(null,G__26089));
})(),(new Date()));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(patient_info,cljs.core.cst$kw$idade,idade);
});
var G__26090_26092 = cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_selected_DASH_patient;
var G__26091_26093 = react_med.screens.patient_info.core.selected_patient;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26090_26092,G__26091_26093) : re_frame.core.reg_sub.call(null,G__26090_26092,G__26091_26093));
react_med.screens.patient_info.core.share = (function react_med$screens$patient_info$core$share(data,filename,type){
return navigator.share(({"files": [(new File([data],filename,({"type": type})))], "title": filename, "text": "Texto q acho q n\u00E3o vai aparecer."})).then((function (){
return console.log("Conseguiu compartilhar.");
})).catch((function (p1__26094_SHARP_){
return console.error("N\u00E3o conseguiu compartilhar.",p1__26094_SHARP_);
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
react_med.screens.patient_info.core.share_or_download = (function react_med$screens$patient_info$core$share_or_download(data,filename,type){
if(cljs.core.truth_((function (){var and__4120__auto__ = navigator.canShare;
if(cljs.core.truth_(and__4120__auto__)){
return navigator.canShare(new cljs.core.PersistentArrayMap(null, 1, ["files",[(new File([data],filename,({"type": type})))]], null));
} else {
return and__4120__auto__;
}
})())){
return react_med.screens.patient_info.core.share(data,filename,type);
} else {
return react_med.screens.patient_info.core.download(data,filename,type);
}
});
react_med.screens.patient_info.core.replace_accents = (function react_med$screens$patient_info$core$replace_accents(s){
return clojure.string.replace(s,/[áéíóãçõ ]/,new cljs.core.PersistentArrayMap(null, 8, ["\u00E1","a","\u00E9","e","\u00ED","i","\u00F3","o","\u00E3","a","\u00E7","c","\u00F5","o"," ","-"], null));
});
react_med.screens.patient_info.core.dot__GT_comma = (function react_med$screens$patient_info$core$dot__GT_comma(n){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n).replace(".",",");
});
react_med.screens.patient_info.core.avaliacao__GT_csv_row = (function react_med$screens$patient_info$core$avaliacao__GT_csv_row(p__26097){
var map__26098 = p__26097;
var map__26098__$1 = (((((!((map__26098 == null))))?(((((map__26098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26098):map__26098);
var paciente_info = map__26098__$1;
var nascimento = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26098__$1,cljs.core.cst$kw$nascimento);
return ((function (map__26098,map__26098__$1,paciente_info,nascimento){
return (function (p__26100){
var map__26101 = p__26100;
var map__26101__$1 = (((((!((map__26101 == null))))?(((((map__26101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26101):map__26101);
var aval = map__26101__$1;
var circunferencia_quadril = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26101__$1,cljs.core.cst$kw$circunferencia_DASH_quadril);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26101__$1,cljs.core.cst$kw$data);
var atividade_fisica = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26101__$1,cljs.core.cst$kw$atividade_DASH_fisica);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26101__$1,cljs.core.cst$kw$reatancia);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26101__$1,cljs.core.cst$kw$estatura);
var circunferencia_braco = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26101__$1,cljs.core.cst$kw$circunferencia_DASH_braco);
var circunferencia_cintura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26101__$1,cljs.core.cst$kw$circunferencia_DASH_cintura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26101__$1,cljs.core.cst$kw$resistencia);
var circunferencia_perna = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26101__$1,cljs.core.cst$kw$circunferencia_DASH_perna);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26101__$1,cljs.core.cst$kw$peso);
try{var idade = react_med.screens.patient_info.core.years_difference(nascimento,data);
var formated_date = react_med.util.yyyy_mm_dd__GT_dd_mm_yyyy(data);
var avaliacao_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aval,paciente_info], 0));
var format_num = ((function (idade,formated_date,avaliacao_info,map__26101,map__26101__$1,aval,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,map__26098,map__26098__$1,paciente_info,nascimento){
return (function (p1__26095_SHARP_){
var G__26104 = p1__26095_SHARP_;
var G__26104__$1 = (((G__26104 == null))?null:G__26104.toFixed((2)));
if((G__26104__$1 == null)){
return null;
} else {
return react_med.screens.patient_info.core.dot__GT_comma(G__26104__$1);
}
});})(idade,formated_date,avaliacao_info,map__26101,map__26101__$1,aval,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,map__26098,map__26098__$1,paciente_info,nascimento))
;
var em_relacao_peso = ((function (idade,formated_date,avaliacao_info,format_num,map__26101,map__26101__$1,aval,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,map__26098,map__26098__$1,paciente_info,nascimento){
return (function (p1__26096_SHARP_){
return parseFloat(((p1__26096_SHARP_ / cljs.core.cst$kw$peso.cljs$core$IFn$_invoke$arity$1(avaliacao_info)) * (100)).toFixed((1)));
});})(idade,formated_date,avaliacao_info,format_num,map__26101,map__26101__$1,aval,circunferencia_quadril,data,atividade_fisica,reatancia,estatura,circunferencia_braco,circunferencia_cintura,resistencia,circunferencia_perna,peso,map__26098,map__26098__$1,paciente_info,nascimento))
;
var gordura_corporal_absoluta = (cljs.core.cst$kw$peso.cljs$core$IFn$_invoke$arity$1(avaliacao_info) - react_med.screens.paciente_relatorio.bioimpedance.massa_livre_de_gordura(avaliacao_info));
var gordura_corporal_relativa = em_relacao_peso(gordura_corporal_absoluta);
var massa_musculoesqueletica = parseFloat(((react_med.screens.paciente_relatorio.bioimpedance.massa_musculoesqueletica(avaliacao_info) / (cljs.core.cst$kw$estatura.cljs$core$IFn$_invoke$arity$1(avaliacao_info) * cljs.core.cst$kw$estatura.cljs$core$IFn$_invoke$arity$1(avaliacao_info))) * (10000)).toFixed((1)));
var agua_corporal_total = em_relacao_peso(react_med.screens.paciente_relatorio.bioimpedance.agua_corporal(avaliacao_info));
var agua_extracelular = em_relacao_peso(react_med.screens.paciente_relatorio.bioimpedance.agua_extracelular(avaliacao_info));
var agua_intracelular = em_relacao_peso(react_med.screens.paciente_relatorio.bioimpedance.agua_intracelular(avaliacao_info));
return (new cljs.core.PersistentArrayMap(null,(20),["Data da Avalia\u00E7\u00E3o",formated_date,"Idade",idade,"Peso",format_num(peso),"Estatura",format_num(estatura),"IMC",format_num(react_med.screens.paciente_relatorio.bioimpedance.imc(avaliacao_info)),"Circunfer\u00EAncia Cintura",format_num(circunferencia_cintura),"Circunfer\u00EAncia Quadril",format_num(circunferencia_quadril),"Circunfer\u00EAncia Bra\u00E7o",format_num(circunferencia_braco),"Circunfer\u00EAncia Perna",format_num(circunferencia_perna),"N\u00EDvel de Atividade F\u00EDsica",atividade_fisica,"Resist\u00EAncia",resistencia,"Reat\u00E2ncia",reatancia,"Imped\u00E2ncia",format_num(react_med.screens.paciente_relatorio.bioimpedance.impedancia(avaliacao_info)),"\u00C2ngulo",format_num(react_med.screens.paciente_relatorio.bioimpedance.angulo(avaliacao_info)),"Gordura Corporal Absoluta em Kg",format_num(gordura_corporal_absoluta),"Gordura Corporal Relativa em %",format_num(gordura_corporal_relativa),"Massa Musculoesquel\u00E9tica",format_num(massa_musculoesqueletica),"\u00C1gua Corporal Total",format_num(agua_corporal_total),"\u00C1gua Extracelular",format_num(agua_extracelular),"\u00C1gua Intracelular",format_num(agua_intracelular)],null));
}catch (e26103){if((e26103 instanceof Object)){
var e = e26103;
console.error("Erro ao computar os valores da bioimped\u00E2ncia.",e);

return (new cljs.core.PersistentArrayMap(null,(2),["Data da Avalia\u00E7\u00E3o",react_med.util.yyyy_mm_dd__GT_dd_mm_yyyy(data),"Idade","Dados de avalia\u00E7\u00E3o incorretos."],null));
} else {
throw e26103;

}
}});
;})(map__26098,map__26098__$1,paciente_info,nascimento))
});
react_med.screens.patient_info.core.app_state__GT_csv_data = (function react_med$screens$patient_info$core$app_state__GT_csv_data(app_state){
var map__26105 = react_med.screens.patient_info.core.selected_patient(app_state);
var map__26105__$1 = (((((!((map__26105 == null))))?(((((map__26105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26105):map__26105);
var paciente_info = map__26105__$1;
var nome = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26105__$1,cljs.core.cst$kw$nome);
var nascimento = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26105__$1,cljs.core.cst$kw$nascimento);
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26105__$1,cljs.core.cst$kw$sexo);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26105__$1,cljs.core.cst$kw$estatura);
var avaliacoes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26105__$1,cljs.core.cst$kw$avaliacoes);
var nome_without_accents = react_med.screens.patient_info.core.replace_accents(nome);
var paciente_head = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Nome",nome], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Data de Nascimento",react_med.util.yyyy_mm_dd__GT_dd_mm_yyyy(nascimento)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sexo",sexo], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Estatura",react_med.screens.patient_info.core.dot__GT_comma(estatura)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)], null);
var avals = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,avaliacoes);
var avals__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(react_med.screens.patient_info.core.avaliacao__GT_csv_row(paciente_info),avals);
var avaliacoes__$1 = cljs.core.cons(cljs.core.keys(cljs.core.first(avals__$1)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vals,avals__$1));
return testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(paciente_head,avaliacoes__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quote_QMARK_,true], 0));
});
react_med.screens.patient_info.core.export_to_csv = (function react_med$screens$patient_info$core$export_to_csv(app_state,p__26107){
var vec__26108 = p__26107;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26108,(0),null);
if(cljs.core.truth_((react_med.util.pre_state_QMARK_.cljs$core$IFn$_invoke$arity$2 ? react_med.util.pre_state_QMARK_.cljs$core$IFn$_invoke$arity$2(app_state,event) : react_med.util.pre_state_QMARK_.call(null,app_state,event)))){
} else {
throw (new Error("Assert failed: (util/pre-state? app-state event)"));
}

var _PERCENT_ = (function (){
var map__26111_26113 = react_med.screens.patient_info.core.selected_patient(app_state);
var map__26111_26114__$1 = (((((!((map__26111_26113 == null))))?(((((map__26111_26113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26111_26113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26111_26113):map__26111_26113);
var nome_26115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26111_26114__$1,cljs.core.cst$kw$nome);
var nome_without_accents_26116 = react_med.screens.patient_info.core.replace_accents(nome_26115);
var csv_data_26117 = react_med.screens.patient_info.core.app_state__GT_csv_data(app_state);
react_med.screens.patient_info.core.share_or_download(csv_data_26117,["avaliacoes-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nome_without_accents_26116),".csv"].join(''),"text/csv");

return app_state;
})()
;
if(cljs.core.truth_((react_med.util.post_state_QMARK_.cljs$core$IFn$_invoke$arity$1 ? react_med.util.post_state_QMARK_.cljs$core$IFn$_invoke$arity$1(_PERCENT_) : react_med.util.post_state_QMARK_.call(null,_PERCENT_)))){
} else {
throw (new Error("Assert failed: (util/post-state? %)"));
}

return _PERCENT_;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$export_DASH_to_DASH_csv,react_med.screens.patient_info.core.export_to_csv);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.patient_info.core.change_patient_name = (function react_med$screens$patient_info$core$change_patient_name(app_state,p__26118){
var vec__26119 = p__26118;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26119,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26119,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null))], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$nome], null),cljs.core.cst$sym$new_DASH_name)));

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
var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.assoc_in((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$nome], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$nome], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new_name;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$new_DASH_name,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$nome], null),cljs.core.cst$sym$new_DASH_name),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null))], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$nome], null),cljs.core.cst$sym$new_DASH_name)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e26122){var e = e26122;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_patient_name = (function react_med$screens$patient_info$core$change_patient_name(app_state,p__26123){
var vec__26124 = p__26123;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26124,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26124,(1),null);
var paciente_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null));
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,paciente_id,cljs.core.cst$kw$nome], null),new_name);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_change_DASH_patient_DASH_name,react_med.screens.patient_info.core.change_patient_name);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.patient_info.core.change_birth_date = (function react_med$screens$patient_info$core$change_birth_date(app_state,p__26127){
var vec__26128 = p__26127;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26128,(0),null);
var new_birth_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26128,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null))], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$nascimento], null),cljs.core.cst$sym$new_DASH_birth_DASH_date)));

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
var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.assoc_in((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$nascimento], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$nascimento], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new_birth_date;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$new_DASH_birth_DASH_date,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$nascimento], null),cljs.core.cst$sym$new_DASH_birth_DASH_date),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null))], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$nascimento], null),cljs.core.cst$sym$new_DASH_birth_DASH_date)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e26131){var e = e26131;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_birth_date = (function react_med$screens$patient_info$core$change_birth_date(app_state,p__26132){
var vec__26133 = p__26132;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26133,(0),null);
var new_birth_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26133,(1),null);
var paciente_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null));
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,paciente_id,cljs.core.cst$kw$nascimento], null),new_birth_date);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_change_DASH_birth_DASH_date,react_med.screens.patient_info.core.change_birth_date);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.patient_info.core.toggle_sexo = (function react_med$screens$patient_info$core$toggle_sexo(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null))], null),cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$sexo], null),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_1], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$_PERCENT_1,"Feminino"),"Masculino","Feminino")))));

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
var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$sexo], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$sexo], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = ((function (opts__19887__auto____$2,opts__19887__auto____$1,paciente_id,opts__19887__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__26136_SHARP_){
var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (((function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = p1__26136_SHARP_;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$p1__26136_SHARP_,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})(),"Feminino");
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$p1__26136_SHARP_,"Feminino"),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})())?"Masculino":"Feminino");
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$p1__26136_SHARP_,"Feminino"),"Masculino","Feminino"),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
});})(opts__19887__auto____$2,opts__19887__auto____$1,paciente_id,opts__19887__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__26136_SHARP_], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$p1__26136_SHARP_,"Feminino"),"Masculino","Feminino")),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$sexo], null),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__26136_SHARP_], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$p1__26136_SHARP_,"Feminino"),"Masculino","Feminino"))),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null))], null),cljs.core.list(cljs.core.cst$sym$update_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$sexo], null),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__26136_SHARP_], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$p1__26136_SHARP_,"Feminino"),"Masculino","Feminino")))),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e26137){var e = e26137;
throw e;
}});
} else {
react_med.screens.patient_info.core.toggle_sexo = (function react_med$screens$patient_info$core$toggle_sexo(app_state){
var paciente_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,paciente_id,cljs.core.cst$kw$sexo], null),((function (paciente_id){
return (function (p1__26136_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__26136_SHARP_,"Feminino")){
return "Masculino";
} else {
return "Feminino";
}
});})(paciente_id))
);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_toggle_DASH_sexo,react_med.screens.patient_info.core.toggle_sexo);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.screens.patient_info.core.change_height = (function react_med$screens$patient_info$core$change_height(app_state,p__26138){
var vec__26139 = p__26138;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26139,(0),null);
var new_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26139,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null))], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$estatura], null),cljs.core.list(cljs.core.cst$sym$js_SLASH_parseFloat,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_height,",",".")))));

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
var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.assoc_in((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = paciente_id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),cljs.core.cst$kw$estatura], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$estatura], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = parseFloat((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new_height;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$new_DASH_height,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})().replace(",",".");
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_height,",","."),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$js_SLASH_parseFloat,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_height,",",".")),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$estatura], null),cljs.core.list(cljs.core.cst$sym$js_SLASH_parseFloat,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_height,",","."))),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$paciente_DASH_id,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null))], null),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,cljs.core.cst$sym$paciente_DASH_id,cljs.core.cst$kw$estatura], null),cljs.core.list(cljs.core.cst$sym$js_SLASH_parseFloat,cljs.core.list(cljs.core.cst$sym$$replace,cljs.core.cst$sym$new_DASH_height,",",".")))),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e26142){var e = e26142;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_height = (function react_med$screens$patient_info$core$change_height(app_state,p__26143){
var vec__26144 = p__26143;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26144,(0),null);
var new_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26144,(1),null);
var paciente_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$paciente_DASH_selecionado], null));
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$domain,cljs.core.cst$kw$patients,paciente_id,cljs.core.cst$kw$estatura], null),parseFloat(new_height.replace(",",".")));
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_change_DASH_height,react_med.screens.patient_info.core.change_height);
react_med.screens.patient_info.core.date_picker_i18n_pt = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$formatTitle,cljs.core.cst$kw$parseDate,cljs.core.cst$kw$weekdays,cljs.core.cst$kw$week,cljs.core.cst$kw$weekdaysShort,cljs.core.cst$kw$today,cljs.core.cst$kw$formatDate,cljs.core.cst$kw$calendar,cljs.core.cst$kw$firstDayOfWeek,cljs.core.cst$kw$cancel,cljs.core.cst$kw$monthNames,cljs.core.cst$kw$clear],[(function (month_name,full_year){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(month_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_year)].join('');
}),(function (text){
var vec__26147 = cljs.core.re_find(/(\d{1,2})\D(\d{1,2})\D(\d{4})/,text);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26147,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26147,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26147,(2),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26147,(3),null);
return ({"day": parseInt(d), "month": (parseInt(m) - (1)), "year": parseInt(y)});
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Domingo","Segunda","Ter\u00E7a","Quarta","Quinta","Sexta","S\u00E1bado"], null),"Semana",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dom","Seg","Ter","Qua","Qui","Sex","S\u00E1b"], null),"Hoje",(function (date){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.day),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((date.month + (1))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.year)].join('');
}),"Calend\u00E1rio",(0),"Cancelar",new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Janeiro","Fevereiro","Mar\u00E7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"], null),"Limpar"]);
react_med.screens.patient_info.core.editing_patient_info_component = (function react_med$screens$patient_info$core$editing_patient_info_component(){
var map__26153 = (function (){var G__26154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_selected_DASH_patient], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__26154) : react_med.util._LT_sub.call(null,G__26154));
})();
var map__26153__$1 = (((((!((map__26153 == null))))?(((((map__26153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26153):map__26153);
var nome = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26153__$1,cljs.core.cst$kw$nome);
var nascimento = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26153__$1,cljs.core.cst$kw$nascimento);
var idade = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26153__$1,cljs.core.cst$kw$idade);
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26153__$1,cljs.core.cst$kw$sexo);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26153__$1,cljs.core.cst$kw$estatura);
var line_style = ({"display": "flex", "alignItems": "center", "whiteSpace": "pre", "height": (48)});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Nome: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"backgroundColor": "#e5e9ed", "padding": "4px 15px", "borderRadius": "5px"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$u,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$contentEditable,"",cljs.core.cst$kw$onBlur,((function (map__26153,map__26153__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (p1__26150_SHARP_){
var G__26156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_change_DASH_patient_DASH_name,p1__26150_SHARP_.target.innerText], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__26156) : react_med.util._GT_evt.call(null,G__26156));
});})(map__26153,map__26153__$1,nome,nascimento,idade,sexo,estatura,line_style))
], null),nome], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(line_style),"whiteSpace"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Nascimento: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dom_DASH_module_SHARP_vaadin_DASH_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$theme_DASH_for,"vaadin-date-picker-overlay"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$template,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style,"vaadin-date-picker-overlay{\n           z-index: 1200;\n         }"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.util.with_mount_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vaadin_DASH_date_DASH_picker,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,nascimento,cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (map__26153,map__26153__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (this$){
reagent.core.dom_node(this$).i18n = cljs.core.clj__GT_js(react_med.screens.patient_info.core.date_picker_i18n_pt);

return reagent.core.dom_node(this$).onchange = ((function (map__26153,map__26153__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (p1__26151_SHARP_){
var G__26157 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_change_DASH_birth_DASH_date,p1__26151_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__26157) : react_med.util._GT_evt.call(null,G__26157));
});})(map__26153,map__26153__$1,nome,nascimento,idade,sexo,estatura,line_style))
;
});})(map__26153,map__26153__$1,nome,nascimento,idade,sexo,estatura,line_style))
], null)], null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(line_style),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"rgba(0, 0, 0, 0.4)"], null)], 0)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Idade: "], null),idade," anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Sexo: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,((function (map__26153,map__26153__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (){
var G__26158 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_toggle_DASH_sexo], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__26158) : react_med.util._GT_evt.call(null,G__26158));
});})(map__26153,map__26153__$1,nome,nascimento,idade,sexo,estatura,line_style))
,cljs.core.cst$kw$style,({"backgroundColor": "#e5e9ed", "cursor": "pointer", "borderRadius": "30px", "padding": "7px 13px"})], null),sexo], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Estatura: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.components.gray_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$defaultValue,estatura,cljs.core.cst$kw$suffix," cm",cljs.core.cst$kw$onBlur,((function (map__26153,map__26153__$1,nome,nascimento,idade,sexo,estatura,line_style){
return (function (p1__26152_SHARP_){
var G__26159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_change_DASH_height,p1__26152_SHARP_.target.value], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__26159) : react_med.util._GT_evt.call(null,G__26159));
});})(map__26153,map__26153__$1,nome,nascimento,idade,sexo,estatura,line_style))
], null)], null)], null)], null);
});
react_med.screens.patient_info.core.patient_info_component = (function react_med$screens$patient_info$core$patient_info_component(){
var map__26160 = (function (){var G__26161 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$patient_DASH_info$core_SLASH_selected_DASH_patient], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__26161) : react_med.util._LT_sub.call(null,G__26161));
})();
var map__26160__$1 = (((((!((map__26160 == null))))?(((((map__26160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26160):map__26160);
var nome = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26160__$1,cljs.core.cst$kw$nome);
var nascimento = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26160__$1,cljs.core.cst$kw$nascimento);
var idade = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26160__$1,cljs.core.cst$kw$idade);
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26160__$1,cljs.core.cst$kw$sexo);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26160__$1,cljs.core.cst$kw$estatura);
var nascimento_formatado = react_med.util.yyyy_mm_dd__GT_dd_mm_yyyy(nascimento);
var line_style = ({"display": "flex", "alignItems": "center", "whiteSpace": "pre", "height": (48)});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Nome: "], null),nome], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Nascimento: "], null),nascimento_formatado], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Idade: "], null),idade," anos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Sexo: "], null),sexo], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Estatura: "], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(estatura).replace(".",",")," cm"], null)], null);
});
react_med.screens.patient_info.core.patient_info = (function react_med$screens$patient_info$core$patient_info(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_info_component], null)], null)], null);
});
react_med.screens.patient_info.core.editing_patient_info = (function react_med$screens$patient_info$core$editing_patient_info(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.editing_patient_info_component], null)], null)], null);
});
