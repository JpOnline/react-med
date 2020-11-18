// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.paciente_relatorio.bioimpedance');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('react_med.util');
react_med.screens.paciente_relatorio.bioimpedance.imc = (function react_med$screens$paciente_relatorio$bioimpedance$imc(p__19509){
var map__19510 = p__19509;
var map__19510__$1 = (((((!((map__19510 == null))))?(((((map__19510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19510):map__19510);
var peso = cljs.core.get.call(null,map__19510__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura = cljs.core.get.call(null,map__19510__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var $ = ((estatura * estatura) * 1.0E-4);
var $__$1 = (peso / $);
var $__$2 = $__$1.toFixed((1));
return parseFloat($__$2);
});
/**
 * (0.734*(estatura^2/resistencia))+(0.116*peso)+(0.096*reatancia)+(0.878*sexo)-4.03
 *   Ref: Lukaski e Bolonchuk
 */
react_med.screens.paciente_relatorio.bioimpedance.eq1_high_pa_fitness_and_athletestes = (function react_med$screens$paciente_relatorio$bioimpedance$eq1_high_pa_fitness_and_athletestes(p__19512){
var map__19513 = p__19512;
var map__19513__$1 = (((((!((map__19513 == null))))?(((((map__19513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19513):map__19513);
var estatura = cljs.core.get.call(null,map__19513__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19513__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19513__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19513__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
var sexo = cljs.core.get.call(null,map__19513__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var male_portion = ((cljs.core._EQ_.call(null,sexo,"Masculino"))?0.878:(0));
return (((((0.734 * ((estatura * estatura) / resistencia)) + (0.116 * peso)) + (0.096 * reatancia)) + male_portion) + -4.03);
});
/**
 * (0.62*(estatura^2/resistencia))+(0.21*peso)+(0.1*reatancia)+4.2
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq2_male_and_female_children_from_8_15_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq2_male_and_female_children_from_8_15_years(p__19515){
var map__19516 = p__19515;
var map__19516__$1 = (((((!((map__19516 == null))))?(((((map__19516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19516):map__19516);
var estatura = cljs.core.get.call(null,map__19516__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19516__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19516__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19516__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.62 * ((estatura * estatura) / resistencia)) + (0.21 * peso)) + (0.1 * reatancia)) + 4.2);
});
/**
 * (0.476*((estatura^2)/resistencia))+(0.295*peso)+5.49
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq3_females_18_30_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq3_females_18_30_years(p__19518){
var map__19519 = p__19518;
var map__19519__$1 = (((((!((map__19519 == null))))?(((((map__19519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19519):map__19519);
var estatura = cljs.core.get.call(null,map__19519__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19519__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19519__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
return (((0.476 * ((estatura * estatura) / resistencia)) + (0.295 * peso)) + 5.49);
});
/**
 * (0.536*((estatura^2)/resistencia))+(0.155*peso)+(0.075*reatancia)+2.87
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq5_females_30_50_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq5_females_30_50_years(p__19521){
var map__19522 = p__19521;
var map__19522__$1 = (((((!((map__19522 == null))))?(((((map__19522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19522):map__19522);
var estatura = cljs.core.get.call(null,map__19522__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19522__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19522__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19522__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.536 * ((estatura * estatura) / resistencia)) + (0.155 * peso)) + (0.075 * reatancia)) + 2.87);
});
/**
 * (0.47*((estatura^2)/resistencia))+(0.17*peso)+(0.03*reatancia)+5.7
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq6_females_50_70_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq6_females_50_70_years(p__19524){
var map__19525 = p__19524;
var map__19525__$1 = (((((!((map__19525 == null))))?(((((map__19525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19525):map__19525);
var estatura = cljs.core.get.call(null,map__19525__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19525__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19525__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19525__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.47 * ((estatura * estatura) / resistencia)) + (0.17 * peso)) + (0.03 * reatancia)) + 5.7);
});
/**
 * (0.485*((estatura^2)/resistencia))+(0.338*peso)+5.32
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq7_males_18_30_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq7_males_18_30_years(p__19527){
var map__19528 = p__19527;
var map__19528__$1 = (((((!((map__19528 == null))))?(((((map__19528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19528):map__19528);
var estatura = cljs.core.get.call(null,map__19528__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19528__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19528__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.485 * ((estatura * estatura) / resistencia));
var peso_portion = (0.338 * peso);
var constant = 5.32;
return ((estatura_resistencia_portion + peso_portion) + constant);
});
/**
 * (0.549*((estatura^2)/resistencia))+(0.163*peso)+(0.092*reatancia)+4.51
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq8_males_30_50_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq8_males_30_50_years(p__19530){
var map__19531 = p__19530;
var map__19531__$1 = (((((!((map__19531 == null))))?(((((map__19531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19531):map__19531);
var estatura = cljs.core.get.call(null,map__19531__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19531__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19531__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19531__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
var estatura_resistencia_portion = (0.549 * ((estatura * estatura) / resistencia));
var peso_portion = (0.163 * peso);
var reatancia_portion = (0.092 * reatancia);
var constant = 4.51;
return (((estatura_resistencia_portion + peso_portion) + reatancia_portion) + constant);
});
/**
 * (0.6*((estatura^2)/resistencia))+(0.186*peso)+(0.226*reatancia)-10.9451
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq9_males_50_70_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq9_males_50_70_years(p__19533){
var map__19534 = p__19533;
var map__19534__$1 = (((((!((map__19534 == null))))?(((((map__19534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19534):map__19534);
var estatura = cljs.core.get.call(null,map__19534__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19534__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19534__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19534__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
var estatura_resistencia_portion = (0.6 * ((estatura * estatura) / resistencia));
var peso_portion = (0.186 * peso);
var reatancia_portion = (0.226 * reatancia);
var constant = -10.9451;
return (((estatura_resistencia_portion + peso_portion) + reatancia_portion) + constant);
});
/**
 * -10.68+(0.65*((estatura^2)/resistencia))+(0.26*peso)+(0.02*resistencia)
 *   Ref: Sun et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq10_men = (function react_med$screens$paciente_relatorio$bioimpedance$eq10_men(p__19536){
var map__19537 = p__19536;
var map__19537__$1 = (((((!((map__19537 == null))))?(((((map__19537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19537):map__19537);
var estatura = cljs.core.get.call(null,map__19537__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19537__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19537__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.65 * ((estatura * estatura) / resistencia));
var peso_portion = (0.26 * peso);
var resistencia_portion = (0.02 * resistencia);
var constant = -10.68;
return (((estatura_resistencia_portion + peso_portion) + resistencia_portion) + constant);
});
/**
 * -9.53+(0.69*((estatura^2)/resistencia))+(0.18*peso)+(0.02*resistencia)
 *   Ref: Sun et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq11_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq11_women(p__19539){
var map__19540 = p__19539;
var map__19540__$1 = (((((!((map__19540 == null))))?(((((map__19540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19540):map__19540);
var estatura = cljs.core.get.call(null,map__19540__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19540__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19540__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.69 * ((estatura * estatura) / resistencia));
var peso_portion = (0.18 * peso);
var resistencia_portion = (0.02 * resistencia);
var constant = -9.53;
return (((estatura_resistencia_portion + peso_portion) + resistencia_portion) + constant);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19542#","p1__19542#",-376043951,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-matches","cljs.core/re-matches",2013608485,null),/\d{4}-\d{2}-\d{2}/,new cljs.core.Symbol(null,"p1__19542#","p1__19542#",-376043951,null)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-matches","cljs.core/re-matches",2013608485,null),/\d{4}-\d{2}-\d{2}/,new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__19542_SHARP_){
return cljs.core.re_matches.call(null,/\d{4}-\d{2}-\d{2}/,p1__19542_SHARP_);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Feminino","null","Masculino","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Feminino",null,"Masculino",null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","nascimento","react-med.screens.paciente-relatorio.bioimpedance/nascimento",892303912),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","data","react-med.screens.paciente-relatorio.bioimpedance/data",42462095),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["N\u00E3o Ativo","null","Ativo","null","Atleta","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["N\u00E3o Ativo",null,"Ativo",null,"Atleta",null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","avaliacao-info","react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info",325326502),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","idade","react-med.screens.paciente-relatorio.bioimpedance/idade",221243814),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","idade","react-med.screens.paciente-relatorio.bioimpedance/idade",221243814),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__19543){
return cljs.core.map_QMARK_.call(null,G__19543);
}),(function (G__19543){
return cljs.core.contains_QMARK_.call(null,G__19543,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
}),(function (G__19543){
return cljs.core.contains_QMARK_.call(null,G__19543,new cljs.core.Keyword(null,"idade","idade",297389078));
}),(function (G__19543){
return cljs.core.contains_QMARK_.call(null,G__19543,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455));
})], null),(function (G__19543){
return ((cljs.core.map_QMARK_.call(null,G__19543)) && (cljs.core.contains_QMARK_.call(null,G__19543,new cljs.core.Keyword(null,"sexo","sexo",-629407757))) && (cljs.core.contains_QMARK_.call(null,G__19543,new cljs.core.Keyword(null,"idade","idade",297389078))) && (cljs.core.contains_QMARK_.call(null,G__19543,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","idade","react-med.screens.paciente-relatorio.bioimpedance/idade",221243814),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sexo","sexo",-629407757),new cljs.core.Keyword(null,"idade","idade",297389078),new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"sexo","sexo",-629407757))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"idade","idade",297389078))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455)))], null),null])));
/**
 * [sex age activity]
 * [_ 8-17 _] 2
 * [_ _ ath] 1
 * [f 18-29 _] 3
 * [f 30-49 _] 5
 * [f 50-70 _] 6
 * [m 18-29 _] 7
 * [m 30-49 _] 8
 * [m 50-70 _] 9
 * [m _ _] 10
 * [f _ _] 11
 */
react_med.screens.paciente_relatorio.bioimpedance.default_massa_livre_de_gordura = (function react_med$screens$paciente_relatorio$bioimpedance$default_massa_livre_de_gordura(p__19544){
var map__19545 = p__19544;
var map__19545__$1 = (((((!((map__19545 == null))))?(((((map__19545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19545):map__19545);
var avaliacao_info = map__19545__$1;
var sexo = cljs.core.get.call(null,map__19545__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var nascimento = cljs.core.get.call(null,map__19545__$1,new cljs.core.Keyword(null,"nascimento","nascimento",646565528));
var data = cljs.core.get.call(null,map__19545__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var atividade_fisica = cljs.core.get.call(null,map__19545__$1,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455));
if(react_med.util.validate.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","avaliacao-info","react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info",325326502),avaliacao_info,"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.")){
} else {
throw (new Error("Assert failed: (util/validate :react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info avaliacao-info \"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.\")"));
}

var idade = Math.floor((((((((new Date(data)) - (new Date(nascimento))) / (1000)) / (60)) / (60)) / (24)) / 365.25));
if(((((8) <= idade)) && ((idade <= (17))))){
return "eq2-male-and-female-children-from-8-15-years";
} else {
if(cljs.core._EQ_.call(null,atividade_fisica,"Atleta")){
return "eq1-high-pa-fitness-and-athletestes";
} else {
if(((cljs.core._EQ_.call(null,sexo,"Feminino")) && (((((18) <= idade)) && ((idade <= (29))))))){
return "eq3-females-18-30-years";
} else {
if(((cljs.core._EQ_.call(null,sexo,"Feminino")) && (((((30) <= idade)) && ((idade <= (49))))))){
return "eq5-females-30-50-years";
} else {
if(((cljs.core._EQ_.call(null,sexo,"Feminino")) && (((((50) <= idade)) && ((idade <= (69))))))){
return "eq6-females-50-70-years";
} else {
if(((cljs.core._EQ_.call(null,sexo,"Masculino")) && (((((18) <= idade)) && ((idade <= (29))))))){
return "eq7-males-18-30-years";
} else {
if(((cljs.core._EQ_.call(null,sexo,"Masculino")) && (((((30) <= idade)) && ((idade <= (49))))))){
return "eq8-males-30-50-years";
} else {
if(((cljs.core._EQ_.call(null,sexo,"Masculino")) && (((((50) <= idade)) && ((idade <= (69))))))){
return "eq9-males-50-70-years";
} else {
if(cljs.core._EQ_.call(null,sexo,"Masculino")){
return "eq10-men";
} else {
if(cljs.core._EQ_.call(null,sexo,"Feminino")){
return "eq11-women";
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
react_med.screens.paciente_relatorio.bioimpedance.massa_livre_de_gordura = (function react_med$screens$paciente_relatorio$bioimpedance$massa_livre_de_gordura(equacao_para_usar,avaliacao_info){
if(react_med.util.validate.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","avaliacao-info","react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info",325326502),avaliacao_info,"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas na equa\u00E7\u00E3o Massa Livre de Gordura.")){
} else {
throw (new Error("Assert failed: (util/validate :react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info avaliacao-info \"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas na equa\u00E7\u00E3o Massa Livre de Gordura.\")"));
}

var _PERCENT_ = (function (){var G__19547 = equacao_para_usar;
switch (G__19547) {
case "eq1-high-pa-fitness-and-athletestes":
return react_med.screens.paciente_relatorio.bioimpedance.eq1_high_pa_fitness_and_athletestes.call(null,avaliacao_info);

break;
case "eq2-male-and-female-children-from-8-15-years":
return react_med.screens.paciente_relatorio.bioimpedance.eq2_male_and_female_children_from_8_15_years.call(null,avaliacao_info);

break;
case "eq3-females-18-30-years":
return react_med.screens.paciente_relatorio.bioimpedance.eq3_females_18_30_years.call(null,avaliacao_info);

break;
case "eq7-males-18-30-years":
return react_med.screens.paciente_relatorio.bioimpedance.eq7_males_18_30_years.call(null,avaliacao_info);

break;
case "eq5-females-30-50-years":
return react_med.screens.paciente_relatorio.bioimpedance.eq5_females_30_50_years.call(null,avaliacao_info);

break;
case "eq8-males-30-50-years":
return react_med.screens.paciente_relatorio.bioimpedance.eq8_males_30_50_years.call(null,avaliacao_info);

break;
case "eq6-females-50-70-years":
return react_med.screens.paciente_relatorio.bioimpedance.eq6_females_50_70_years.call(null,avaliacao_info);

break;
case "eq9-males-50-70-years":
return react_med.screens.paciente_relatorio.bioimpedance.eq9_males_50_70_years.call(null,avaliacao_info);

break;
case "eq10-men":
return react_med.screens.paciente_relatorio.bioimpedance.eq10_men.call(null,avaliacao_info);

break;
case "eq11-women":
return react_med.screens.paciente_relatorio.bioimpedance.eq11_women.call(null,avaliacao_info);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19547)].join('')));

}
})();
if(react_med.util.validate.call(null,cljs.core.pos_QMARK_,_PERCENT_,"funcao massa-livre-de-gordura nao retornou um n\u00FAmero positivo.")){
} else {
throw (new Error("Assert failed: (util/validate pos? % \"funcao massa-livre-de-gordura nao retornou um n\u00FAmero positivo.\")"));
}

return _PERCENT_;
});
/**
 * 0.286+(0.195*((estatura^2)/resistencia))+(0.385*peso)+(5.086*sexo)
 *   Ref: Matias et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes = (function react_med$screens$paciente_relatorio$bioimpedance$eq13_tbw_male_and_female_athletes(p__19549){
var map__19550 = p__19549;
var map__19550__$1 = (((((!((map__19550 == null))))?(((((map__19550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19550):map__19550);
var estatura = cljs.core.get.call(null,map__19550__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19550__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19550__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var sexo = cljs.core.get.call(null,map__19550__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var constant = 0.286;
var estatura_resistencia_portion = (0.195 * ((estatura * estatura) / resistencia));
var peso_portion = (0.385 * peso);
var sexo_portion = ((cljs.core._EQ_.call(null,sexo,"Masculino"))?5.086:(0));
return (((constant + estatura_resistencia_portion) + peso_portion) + sexo_portion);
});
/**
 * (0.45*((estatura^2)/resistencia))+(0.18*peso)+1.2
 *   Ref: Sun et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq16_tbw_men = (function react_med$screens$paciente_relatorio$bioimpedance$eq16_tbw_men(p__19552){
var map__19553 = p__19552;
var map__19553__$1 = (((((!((map__19553 == null))))?(((((map__19553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19553):map__19553);
var estatura = cljs.core.get.call(null,map__19553__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19553__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19553__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.45 * ((estatura * estatura) / resistencia));
var peso_portion = (0.18 * peso);
var constant = 1.2;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
/**
 * (0.45*((estatura^2)/resistencia))+(0.11*peso)+3.75
 *   Ref: Sun et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq17_tbw_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq17_tbw_women(p__19555){
var map__19556 = p__19555;
var map__19556__$1 = (((((!((map__19556 == null))))?(((((map__19556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19556):map__19556);
var estatura = cljs.core.get.call(null,map__19556__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19556__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19556__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.45 * ((estatura * estatura) / resistencia));
var peso_portion = (0.11 * peso);
var constant = 3.75;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
react_med.screens.paciente_relatorio.bioimpedance.default_agua_corporal = (function react_med$screens$paciente_relatorio$bioimpedance$default_agua_corporal(p__19558){
var map__19559 = p__19558;
var map__19559__$1 = (((((!((map__19559 == null))))?(((((map__19559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19559):map__19559);
var avaliacao_info = map__19559__$1;
var sexo = cljs.core.get.call(null,map__19559__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var atividade_fisica = cljs.core.get.call(null,map__19559__$1,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455));
if(react_med.util.validate.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","avaliacao-info","react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info",325326502),avaliacao_info,"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.")){
} else {
throw (new Error("Assert failed: (util/validate :react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info avaliacao-info \"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.\")"));
}

if(cljs.core._EQ_.call(null,atividade_fisica,"Atleta")){
return "eq13-tbw-male-and-female-athletes";
} else {
if(cljs.core._EQ_.call(null,sexo,"Masculino")){
return "eq16-tbw-men";
} else {
if(cljs.core._EQ_.call(null,sexo,"Feminino")){
return "eq17-tbw-women";
} else {
return null;
}
}
}
});
react_med.screens.paciente_relatorio.bioimpedance.agua_corporal = (function react_med$screens$paciente_relatorio$bioimpedance$agua_corporal(equacao_para_usar,avaliacao_info){
if(react_med.util.validate.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","avaliacao-info","react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info",325326502),avaliacao_info,"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.")){
} else {
throw (new Error("Assert failed: (util/validate :react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info avaliacao-info \"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.\")"));
}

var _PERCENT_ = (function (){var G__19561 = equacao_para_usar;
switch (G__19561) {
case "eq13-tbw-male-and-female-athletes":
return react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes.call(null,avaliacao_info);

break;
case "eq16-tbw-men":
return react_med.screens.paciente_relatorio.bioimpedance.eq16_tbw_men.call(null,avaliacao_info);

break;
case "eq17-tbw-women":
return react_med.screens.paciente_relatorio.bioimpedance.eq17_tbw_women.call(null,avaliacao_info);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19561)].join('')));

}
})();
if(react_med.util.validate.call(null,cljs.core.pos_QMARK_,_PERCENT_,"funcao agua-corporal nao retornou um n\u00FAmero positivo.")){
} else {
throw (new Error("Assert failed: (util/validate pos? % \"funcao agua-corporal nao retornou um n\u00FAmero positivo.\")"));
}

return _PERCENT_;
});
/**
 * -3.32+(0.2*((estatura^2)/resistencia))+(0.005*((estatura^2)/reatancia))+(0.08*peso)
 *   Ref: Sergi et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq20_ecw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq20_ecw_male_and_female(p__19563){
var map__19564 = p__19563;
var map__19564__$1 = (((((!((map__19564 == null))))?(((((map__19564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19564):map__19564);
var estatura = cljs.core.get.call(null,map__19564__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19564__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19564__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19564__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
var constant = -3.32;
var estatura_resistencia_portion = (0.2 * ((estatura * estatura) / resistencia));
var estatura_reatancia_portion = (0.005 * ((estatura * estatura) / reatancia));
var peso_portion = (0.08 * peso);
return (((constant + estatura_resistencia_portion) + estatura_reatancia_portion) + peso_portion);
});
react_med.screens.paciente_relatorio.bioimpedance.agua_extracelular = (function react_med$screens$paciente_relatorio$bioimpedance$agua_extracelular(avaliacao_info){
if(react_med.util.validate.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","avaliacao-info","react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info",325326502),avaliacao_info,"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.")){
} else {
throw (new Error("Assert failed: (util/validate :react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info avaliacao-info \"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.\")"));
}

var _PERCENT_ = react_med.screens.paciente_relatorio.bioimpedance.eq20_ecw_male_and_female.call(null,avaliacao_info);
if(react_med.util.validate.call(null,cljs.core.pos_QMARK_,_PERCENT_,"Funcao agua-extracelular n\u00E3o retornou um n\u00FAmero positivo.")){
} else {
throw (new Error("Assert failed: (util/validate pos? % \"Funcao agua-extracelular n\u00E3o retornou um n\u00FAmero positivo.\")"));
}

return _PERCENT_;
});
/**
 * (0.401*((estatura^2)/resistencia))+(3.825*sexo)-(0.071*idade)+5.102
 *   Ref: Janssen et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq22_smm_adult_men_and_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq22_smm_adult_men_and_women(p__19566){
var map__19567 = p__19566;
var map__19567__$1 = (((((!((map__19567 == null))))?(((((map__19567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19567):map__19567);
var estatura = cljs.core.get.call(null,map__19567__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19567__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var sexo = cljs.core.get.call(null,map__19567__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var idade = cljs.core.get.call(null,map__19567__$1,new cljs.core.Keyword(null,"idade","idade",297389078));
var estatura_resistencia_portion = (0.401 * ((estatura * estatura) / resistencia));
var sexo_portion = ((cljs.core._EQ_.call(null,sexo,"Masculino"))?3.825:(0));
var idade_portion = (-0.071 * idade);
var constant = 5.102;
return (((estatura_resistencia_portion + sexo_portion) + idade_portion) + constant);
});
react_med.screens.paciente_relatorio.bioimpedance.massa_musculoesqueletica = (function react_med$screens$paciente_relatorio$bioimpedance$massa_musculoesqueletica(avaliacao_info){
if(react_med.util.validate.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","avaliacao-info","react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info",325326502),avaliacao_info,"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.")){
} else {
throw (new Error("Assert failed: (util/validate :react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info avaliacao-info \"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.\")"));
}

var _PERCENT_ = react_med.screens.paciente_relatorio.bioimpedance.eq22_smm_adult_men_and_women.call(null,avaliacao_info);
if(react_med.util.validate.call(null,cljs.core.pos_QMARK_,_PERCENT_,"Fun\u00E7\u00E3o massa-musculoesqueletica n\u00E3o retornou um n\u00FAmero positivo.")){
} else {
throw (new Error("Assert failed: (util/validate pos? % \"Fun\u00E7\u00E3o massa-musculoesqueletica n\u00E3o retornou um n\u00FAmero positivo.\")"));
}

return _PERCENT_;
});
react_med.screens.paciente_relatorio.bioimpedance.impedancia = (function react_med$screens$paciente_relatorio$bioimpedance$impedancia(p__19569){
var map__19570 = p__19569;
var map__19570__$1 = (((((!((map__19570 == null))))?(((((map__19570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19570):map__19570);
var resistencia = cljs.core.get.call(null,map__19570__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var reatancia = cljs.core.get.call(null,map__19570__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return Math.sqrt(((resistencia * resistencia) + (reatancia * reatancia)));
});
react_med.screens.paciente_relatorio.bioimpedance.angulo = (function react_med$screens$paciente_relatorio$bioimpedance$angulo(p__19572){
var map__19573 = p__19572;
var map__19573__$1 = (((((!((map__19573 == null))))?(((((map__19573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19573):map__19573);
var avaliacao_info = map__19573__$1;
var resistencia = cljs.core.get.call(null,map__19573__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var reatancia = cljs.core.get.call(null,map__19573__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return (Math.atan((reatancia / resistencia)) * ((180) / Math.PI));
});
react_med.screens.paciente_relatorio.bioimpedance.t = (function react_med$screens$paciente_relatorio$bioimpedance$t(avaliacao_info){
console.log("eq1-high-pa-fitness-and-athletestes",react_med.screens.paciente_relatorio.bioimpedance.eq1_high_pa_fitness_and_athletestes.call(null,avaliacao_info));

console.log("eq2-male-and-female-children-from-8-15-years",react_med.screens.paciente_relatorio.bioimpedance.eq2_male_and_female_children_from_8_15_years.call(null,avaliacao_info));

console.log("eq3-females-18-30-years",react_med.screens.paciente_relatorio.bioimpedance.eq3_females_18_30_years.call(null,avaliacao_info));

console.log("eq5-females-30-50-years",react_med.screens.paciente_relatorio.bioimpedance.eq5_females_30_50_years.call(null,avaliacao_info));

console.log("eq6-females-50-70-years",react_med.screens.paciente_relatorio.bioimpedance.eq6_females_50_70_years.call(null,avaliacao_info));

console.log("eq7-males-18-30-years",react_med.screens.paciente_relatorio.bioimpedance.eq7_males_18_30_years.call(null,avaliacao_info));

console.log("eq8-males-30-50-years",react_med.screens.paciente_relatorio.bioimpedance.eq8_males_30_50_years.call(null,avaliacao_info));

console.log("eq9-males-50-70-years",react_med.screens.paciente_relatorio.bioimpedance.eq9_males_50_70_years.call(null,avaliacao_info));

console.log("eq10-men",react_med.screens.paciente_relatorio.bioimpedance.eq10_men.call(null,avaliacao_info));

console.log("eq11-women",react_med.screens.paciente_relatorio.bioimpedance.eq11_women.call(null,avaliacao_info));

console.log("eq13-tbw-male-and-female-athletes",react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes.call(null,avaliacao_info));

console.log("eq16-tbw-men",react_med.screens.paciente_relatorio.bioimpedance.eq16_tbw_men.call(null,avaliacao_info));

console.log("eq17-tbw-women",react_med.screens.paciente_relatorio.bioimpedance.eq17_tbw_women.call(null,avaliacao_info));

console.log("eq20-ecw-male-and-female",react_med.screens.paciente_relatorio.bioimpedance.eq20_ecw_male_and_female.call(null,avaliacao_info));

return console.log("eq22-smm-adult-men-and-women",react_med.screens.paciente_relatorio.bioimpedance.eq22_smm_adult_men_and_women.call(null,avaliacao_info));
});

//# sourceMappingURL=bioimpedance.js.map
