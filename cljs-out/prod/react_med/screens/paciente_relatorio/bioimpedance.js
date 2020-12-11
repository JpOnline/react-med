// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.paciente_relatorio.bioimpedance');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('react_med.util');
goog.require('cljs.test');
react_med.screens.paciente_relatorio.bioimpedance.imc = (function react_med$screens$paciente_relatorio$bioimpedance$imc(p__15176){
var map__15177 = p__15176;
var map__15177__$1 = (((((!((map__15177 == null))))?(((((map__15177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15177):map__15177);
var peso = cljs.core.get.call(null,map__15177__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura = cljs.core.get.call(null,map__15177__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var $ = ((estatura * estatura) * 1.0E-4);
var $__$1 = (peso / $);
var $__$2 = $__$1.toFixed((1));
return parseFloat($__$2);
});
/**
 * (0.734*(estatura^2/resistencia))+(0.116*peso)+(0.096*reatancia)+(0.878*sexo)-4.03
 *   Ref: Lukaski e Bolonchuk
 */
react_med.screens.paciente_relatorio.bioimpedance.eq1_high_pa_fitness_and_athletestes = (function react_med$screens$paciente_relatorio$bioimpedance$eq1_high_pa_fitness_and_athletestes(p__15179){
var map__15180 = p__15179;
var map__15180__$1 = (((((!((map__15180 == null))))?(((((map__15180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15180):map__15180);
var estatura = cljs.core.get.call(null,map__15180__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15180__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15180__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__15180__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
var sexo = cljs.core.get.call(null,map__15180__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var male_portion = ((cljs.core._EQ_.call(null,sexo,"Masculino"))?0.878:(0));
return (((((0.734 * ((estatura * estatura) / resistencia)) + (0.116 * peso)) + (0.096 * reatancia)) + male_portion) + -4.03);
});
/**
 * (0.62*(estatura^2/resistencia))+(0.21*peso)+(0.1*reatancia)+4.2
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq2_male_and_female_children_from_8_15_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq2_male_and_female_children_from_8_15_years(p__15182){
var map__15183 = p__15182;
var map__15183__$1 = (((((!((map__15183 == null))))?(((((map__15183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15183):map__15183);
var estatura = cljs.core.get.call(null,map__15183__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15183__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15183__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__15183__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.62 * ((estatura * estatura) / resistencia)) + (0.21 * peso)) + (0.1 * reatancia)) + 4.2);
});
/**
 * (0.476*((estatura^2)/resistencia))+(0.295*peso)+5.49
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq3_females_18_30_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq3_females_18_30_years(p__15185){
var map__15186 = p__15185;
var map__15186__$1 = (((((!((map__15186 == null))))?(((((map__15186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15186):map__15186);
var estatura = cljs.core.get.call(null,map__15186__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15186__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15186__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
return (((0.476 * ((estatura * estatura) / resistencia)) + (0.295 * peso)) + 5.49);
});
/**
 * (0.536*((estatura^2)/resistencia))+(0.155*peso)+(0.075*reatancia)+2.87
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq5_females_30_50_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq5_females_30_50_years(p__15188){
var map__15189 = p__15188;
var map__15189__$1 = (((((!((map__15189 == null))))?(((((map__15189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15189):map__15189);
var estatura = cljs.core.get.call(null,map__15189__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15189__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15189__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__15189__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.536 * ((estatura * estatura) / resistencia)) + (0.155 * peso)) + (0.075 * reatancia)) + 2.87);
});
/**
 * (0.47*((estatura^2)/resistencia))+(0.17*peso)+(0.03*reatancia)+5.7
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq6_females_50_70_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq6_females_50_70_years(p__15191){
var map__15192 = p__15191;
var map__15192__$1 = (((((!((map__15192 == null))))?(((((map__15192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15192):map__15192);
var estatura = cljs.core.get.call(null,map__15192__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15192__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15192__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__15192__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.47 * ((estatura * estatura) / resistencia)) + (0.17 * peso)) + (0.03 * reatancia)) + 5.7);
});
/**
 * (0.485*((estatura^2)/resistencia))+(0.338*peso)+5.32
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq7_males_18_30_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq7_males_18_30_years(p__15194){
var map__15195 = p__15194;
var map__15195__$1 = (((((!((map__15195 == null))))?(((((map__15195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15195):map__15195);
var estatura = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.485 * ((estatura * estatura) / resistencia));
var peso_portion = (0.338 * peso);
var constant = 5.32;
return ((estatura_resistencia_portion + peso_portion) + constant);
});
/**
 * (0.549*((estatura^2)/resistencia))+(0.163*peso)+(0.092*reatancia)+4.51
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq8_males_30_50_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq8_males_30_50_years(p__15197){
var map__15198 = p__15197;
var map__15198__$1 = (((((!((map__15198 == null))))?(((((map__15198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15198):map__15198);
var estatura = cljs.core.get.call(null,map__15198__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15198__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15198__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__15198__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
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
react_med.screens.paciente_relatorio.bioimpedance.eq9_males_50_70_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq9_males_50_70_years(p__15200){
var map__15201 = p__15200;
var map__15201__$1 = (((((!((map__15201 == null))))?(((((map__15201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15201):map__15201);
var estatura = cljs.core.get.call(null,map__15201__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15201__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15201__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__15201__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
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
react_med.screens.paciente_relatorio.bioimpedance.eq10_men = (function react_med$screens$paciente_relatorio$bioimpedance$eq10_men(p__15203){
var map__15204 = p__15203;
var map__15204__$1 = (((((!((map__15204 == null))))?(((((map__15204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15204):map__15204);
var estatura = cljs.core.get.call(null,map__15204__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15204__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15204__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
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
react_med.screens.paciente_relatorio.bioimpedance.eq11_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq11_women(p__15206){
var map__15207 = p__15206;
var map__15207__$1 = (((((!((map__15207 == null))))?(((((map__15207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15207):map__15207);
var estatura = cljs.core.get.call(null,map__15207__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15207__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15207__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.69 * ((estatura * estatura) / resistencia));
var peso_portion = (0.18 * peso);
var resistencia_portion = (0.02 * resistencia);
var constant = -9.53;
return (((estatura_resistencia_portion + peso_portion) + resistencia_portion) + constant);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__15209#","p1__15209#",2141015900,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-matches","cljs.core/re-matches",2013608485,null),/\d{4}-\d{2}-\d{2}/,new cljs.core.Symbol(null,"p1__15209#","p1__15209#",2141015900,null)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-matches","cljs.core/re-matches",2013608485,null),/\d{4}-\d{2}-\d{2}/,new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__15209_SHARP_){
return cljs.core.re_matches.call(null,/\d{4}-\d{2}-\d{2}/,p1__15209_SHARP_);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Feminino","null","Masculino","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Feminino",null,"Masculino",null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","nascimento","react-med.screens.paciente-relatorio.bioimpedance/nascimento",892303912),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","data","react-med.screens.paciente-relatorio.bioimpedance/data",42462095),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["N\u00E3o Ativo","null","Ativo","null","Atleta","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["N\u00E3o Ativo",null,"Ativo",null,"Atleta",null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","avaliacao-info","react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info",325326502),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","idade","react-med.screens.paciente-relatorio.bioimpedance/idade",221243814),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","idade","react-med.screens.paciente-relatorio.bioimpedance/idade",221243814),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__15210){
return cljs.core.map_QMARK_.call(null,G__15210);
}),(function (G__15210){
return cljs.core.contains_QMARK_.call(null,G__15210,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
}),(function (G__15210){
return cljs.core.contains_QMARK_.call(null,G__15210,new cljs.core.Keyword(null,"idade","idade",297389078));
}),(function (G__15210){
return cljs.core.contains_QMARK_.call(null,G__15210,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455));
})], null),(function (G__15210){
return ((cljs.core.map_QMARK_.call(null,G__15210)) && (cljs.core.contains_QMARK_.call(null,G__15210,new cljs.core.Keyword(null,"sexo","sexo",-629407757))) && (cljs.core.contains_QMARK_.call(null,G__15210,new cljs.core.Keyword(null,"idade","idade",297389078))) && (cljs.core.contains_QMARK_.call(null,G__15210,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455))));
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
react_med.screens.paciente_relatorio.bioimpedance.default_massa_livre_de_gordura = (function react_med$screens$paciente_relatorio$bioimpedance$default_massa_livre_de_gordura(p__15211){
var map__15212 = p__15211;
var map__15212__$1 = (((((!((map__15212 == null))))?(((((map__15212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15212):map__15212);
var avaliacao_info = map__15212__$1;
var sexo = cljs.core.get.call(null,map__15212__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var nascimento = cljs.core.get.call(null,map__15212__$1,new cljs.core.Keyword(null,"nascimento","nascimento",646565528));
var data = cljs.core.get.call(null,map__15212__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var atividade_fisica = cljs.core.get.call(null,map__15212__$1,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455));
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

var _PERCENT_ = (function (){var G__15214 = equacao_para_usar;
switch (G__15214) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15214)].join('')));

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
react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes = (function react_med$screens$paciente_relatorio$bioimpedance$eq13_tbw_male_and_female_athletes(p__15216){
var map__15217 = p__15216;
var map__15217__$1 = (((((!((map__15217 == null))))?(((((map__15217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15217):map__15217);
var estatura = cljs.core.get.call(null,map__15217__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15217__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15217__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var sexo = cljs.core.get.call(null,map__15217__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
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
react_med.screens.paciente_relatorio.bioimpedance.eq16_tbw_men = (function react_med$screens$paciente_relatorio$bioimpedance$eq16_tbw_men(p__15219){
var map__15220 = p__15219;
var map__15220__$1 = (((((!((map__15220 == null))))?(((((map__15220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15220):map__15220);
var estatura = cljs.core.get.call(null,map__15220__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15220__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15220__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.45 * ((estatura * estatura) / resistencia));
var peso_portion = (0.18 * peso);
var constant = 1.2;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
/**
 * (0.45*((estatura^2)/resistencia))+(0.11*peso)+3.75
 *   Ref: Sun et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq17_tbw_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq17_tbw_women(p__15222){
var map__15223 = p__15222;
var map__15223__$1 = (((((!((map__15223 == null))))?(((((map__15223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15223):map__15223);
var estatura = cljs.core.get.call(null,map__15223__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15223__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15223__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.45 * ((estatura * estatura) / resistencia));
var peso_portion = (0.11 * peso);
var constant = 3.75;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
react_med.screens.paciente_relatorio.bioimpedance.default_agua_corporal = (function react_med$screens$paciente_relatorio$bioimpedance$default_agua_corporal(p__15225){
var map__15226 = p__15225;
var map__15226__$1 = (((((!((map__15226 == null))))?(((((map__15226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15226):map__15226);
var avaliacao_info = map__15226__$1;
var sexo = cljs.core.get.call(null,map__15226__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var atividade_fisica = cljs.core.get.call(null,map__15226__$1,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455));
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

var _PERCENT_ = (function (){var G__15228 = equacao_para_usar;
switch (G__15228) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15228)].join('')));

}
})();
if(react_med.util.validate.call(null,cljs.core.pos_QMARK_,_PERCENT_,"funcao agua-corporal nao retornou um n\u00FAmero positivo.")){
} else {
throw (new Error("Assert failed: (util/validate pos? % \"funcao agua-corporal nao retornou um n\u00FAmero positivo.\")"));
}

return _PERCENT_;
});
/**
 * 0.2*((estatura^2)/resistencia)+0.08*peso-0.005/reatancia+(1.86*(1-sexo))-3.32
 *   Ref: Sergi et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq20_ecw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq20_ecw_male_and_female(p__15230){
var map__15231 = p__15230;
var map__15231__$1 = (((((!((map__15231 == null))))?(((((map__15231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15231):map__15231);
var estatura = cljs.core.get.call(null,map__15231__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15231__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15231__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__15231__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
var sexo = cljs.core.get.call(null,map__15231__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var constant = -3.32;
var sexo_portion = ((cljs.core._EQ_.call(null,sexo,"Masculino"))?(0):1.86);
var estatura_resistencia_portion = (0.2 * ((estatura * estatura) / resistencia));
var reatancia_portion = (-0.005 / reatancia);
var peso_portion = (0.08 * peso);
return ((((constant + estatura_resistencia_portion) + reatancia_portion) + peso_portion) + sexo_portion);
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
react_med.screens.paciente_relatorio.bioimpedance.eq22_smm_adult_men_and_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq22_smm_adult_men_and_women(p__15233){
var map__15234 = p__15233;
var map__15234__$1 = (((((!((map__15234 == null))))?(((((map__15234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15234):map__15234);
var estatura = cljs.core.get.call(null,map__15234__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15234__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var sexo = cljs.core.get.call(null,map__15234__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var idade = cljs.core.get.call(null,map__15234__$1,new cljs.core.Keyword(null,"idade","idade",297389078));
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
react_med.screens.paciente_relatorio.bioimpedance.impedancia = (function react_med$screens$paciente_relatorio$bioimpedance$impedancia(p__15236){
var map__15237 = p__15236;
var map__15237__$1 = (((((!((map__15237 == null))))?(((((map__15237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15237):map__15237);
var resistencia = cljs.core.get.call(null,map__15237__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var reatancia = cljs.core.get.call(null,map__15237__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return Math.sqrt(((resistencia * resistencia) + (reatancia * reatancia)));
});
react_med.screens.paciente_relatorio.bioimpedance.angulo = (function react_med$screens$paciente_relatorio$bioimpedance$angulo(p__15239){
var map__15240 = p__15239;
var map__15240__$1 = (((((!((map__15240 == null))))?(((((map__15240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15240):map__15240);
var avaliacao_info = map__15240__$1;
var resistencia = cljs.core.get.call(null,map__15240__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var reatancia = cljs.core.get.call(null,map__15240__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return (Math.atan((reatancia / resistencia)) * ((180) / Math.PI));
});
react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia = (function react_med$screens$paciente_relatorio$bioimpedance$area_circunferencia(var_args){
var G__15243 = arguments.length;
switch (G__15243) {
case 1:
return react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.cljs$core$IFn$_invoke$arity$1 = (function (circunferencia){
var circ = (circunferencia / (100));
return ((circ * circ) / ((4) * 3.14));
});

react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.cljs$core$IFn$_invoke$arity$2 = (function (circunferencia,precision){
return parseFloat(react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,circunferencia).toFixed(precision));
});

react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.cljs$lang$maxFixedArity = 2;

react_med.screens.paciente_relatorio.bioimpedance.area_med = (function react_med$screens$paciente_relatorio$bioimpedance$area_med(var_args){
var G__15247 = arguments.length;
switch (G__15247) {
case 2:
return react_med.screens.paciente_relatorio.bioimpedance.area_med.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return react_med.screens.paciente_relatorio.bioimpedance.area_med.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

react_med.screens.paciente_relatorio.bioimpedance.area_med.cljs$core$IFn$_invoke$arity$2 = (function (avaliacao_info,precisao){
return parseFloat(react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,avaliacao_info).toFixed(precisao));
});

react_med.screens.paciente_relatorio.bioimpedance.area_med.cljs$core$IFn$_invoke$arity$1 = (function (avaliacao_info){
var a = (function (p1__15245_SHARP_){
return react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,p1__15245_SHARP_.call(null,avaliacao_info));
});
return (((0.45 * a.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626))) + (0.1 * a.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174)))) + (0.45 * a.call(null,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640))));
});

react_med.screens.paciente_relatorio.bioimpedance.area_med.cljs$lang$maxFixedArity = 2;

react_med.screens.paciente_relatorio.bioimpedance.rsp = (function react_med$screens$paciente_relatorio$bioimpedance$rsp(var_args){
var G__15250 = arguments.length;
switch (G__15250) {
case 2:
return react_med.screens.paciente_relatorio.bioimpedance.rsp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return react_med.screens.paciente_relatorio.bioimpedance.rsp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

react_med.screens.paciente_relatorio.bioimpedance.rsp.cljs$core$IFn$_invoke$arity$2 = (function (avaliacao_info,precisao){
return parseFloat(react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,avaliacao_info).toFixed(precisao));
});

react_med.screens.paciente_relatorio.bioimpedance.rsp.cljs$core$IFn$_invoke$arity$1 = (function (avaliacao_info){
return ((new cljs.core.Keyword(null,"resistencia","resistencia",1922766858).cljs$core$IFn$_invoke$arity$1(avaliacao_info) * (100)) * (react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,avaliacao_info) / (1.1 * (new cljs.core.Keyword(null,"estatura","estatura",-685084760).cljs$core$IFn$_invoke$arity$1(avaliacao_info) / (100)))));
});

react_med.screens.paciente_relatorio.bioimpedance.rsp.cljs$lang$maxFixedArity = 2;

react_med.screens.paciente_relatorio.bioimpedance.xcsp = (function react_med$screens$paciente_relatorio$bioimpedance$xcsp(var_args){
var G__15253 = arguments.length;
switch (G__15253) {
case 2:
return react_med.screens.paciente_relatorio.bioimpedance.xcsp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return react_med.screens.paciente_relatorio.bioimpedance.xcsp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

react_med.screens.paciente_relatorio.bioimpedance.xcsp.cljs$core$IFn$_invoke$arity$2 = (function (avaliacao_info,precisao){
return parseFloat(react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,avaliacao_info).toFixed(precisao));
});

react_med.screens.paciente_relatorio.bioimpedance.xcsp.cljs$core$IFn$_invoke$arity$1 = (function (avaliacao_info){
return ((100) * ((new cljs.core.Keyword(null,"reatancia","reatancia",1544866627).cljs$core$IFn$_invoke$arity$1(avaliacao_info) * react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,avaliacao_info)) / (1.1 * (new cljs.core.Keyword(null,"estatura","estatura",-685084760).cljs$core$IFn$_invoke$arity$1(avaliacao_info) / (100)))));
});

react_med.screens.paciente_relatorio.bioimpedance.xcsp.cljs$lang$maxFixedArity = 2;

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
react_med.screens.paciente_relatorio.bioimpedance.bioimpedance_tests = (function react_med$screens$paciente_relatorio$bioimpedance$bioimpedance_tests(){
return cljs.test.test_var.call(null,react_med.screens.paciente_relatorio.bioimpedance.bioimpedance_tests.cljs$lang$var);
});
react_med.screens.paciente_relatorio.bioimpedance.bioimpedance_tests.cljs$lang$test = (function (){
var paciente_exemplo_1 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nome","nome",1100401122),"paciente-exemplo-1",new cljs.core.Keyword(null,"peso","peso",-5226095),65.6,new cljs.core.Keyword(null,"estatura","estatura",-685084760),165.6,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),75.5,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),27.0,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640),36.4,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),(639),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),(50)], null);
var paciente_exemplo_2 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nome","nome",1100401122),"paciente-exemplo-2",new cljs.core.Keyword(null,"peso","peso",-5226095),54.1,new cljs.core.Keyword(null,"estatura","estatura",-685084760),166.1,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),85.5,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),23.6,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640),33.3,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),(685),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),(68)], null);
var paciente_exemplo_3 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nome","nome",1100401122),"paciente-exemplo-3",new cljs.core.Keyword(null,"peso","peso",-5226095),63.2,new cljs.core.Keyword(null,"estatura","estatura",-685084760),162.0,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),68.3,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),25.3,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640),37.6,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),(594),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),(52)], null);
var paciente_exemplo_4 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nome","nome",1100401122),"paciente-exemplo-4",new cljs.core.Keyword(null,"peso","peso",-5226095),57.3,new cljs.core.Keyword(null,"estatura","estatura",-685084760),162.4,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),71.0,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),24.5,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640),32.8,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),(726),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),(52)], null);
var paciente_exemplo_5 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nome","nome",1100401122),"paciente-exemplo-5",new cljs.core.Keyword(null,"peso","peso",-5226095),53.6,new cljs.core.Keyword(null,"estatura","estatura",-685084760),161.7,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),72.1,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),24.2,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640),34.1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),(715),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),(66)], null);
var paciente_exemplo_6 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nome","nome",1100401122),"paciente-exemplo-6",new cljs.core.Keyword(null,"peso","peso",-5226095),57.7,new cljs.core.Keyword(null,"estatura","estatura",-685084760),157.7,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),76.0,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),25.4,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640),34.4,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),(707),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),(68)], null);
var paciente_exemplo_7 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nome","nome",1100401122),"paciente-exemplo-7",new cljs.core.Keyword(null,"peso","peso",-5226095),55.4,new cljs.core.Keyword(null,"estatura","estatura",-685084760),159.3,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),67.2,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),22.3,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640),36.2,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),(722),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),(61)], null);
var paciente_exemplo_8 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nome","nome",1100401122),"paciente-exemplo-8",new cljs.core.Keyword(null,"peso","peso",-5226095),66.5,new cljs.core.Keyword(null,"estatura","estatura",-685084760),157.6,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),84.0,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),30.0,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640),30.0,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),(521),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),(65)], null);
var paciente_exemplo_9 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nome","nome",1100401122),"paciente-exemplo-9",new cljs.core.Keyword(null,"peso","peso",-5226095),75.4,new cljs.core.Keyword(null,"estatura","estatura",-685084760),155.9,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),82.0,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),32.0,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640),40.0,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),(525),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),(56)], null);
var paciente_exemplo_10 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nome","nome",1100401122),"paciente-exemplo-10",new cljs.core.Keyword(null,"peso","peso",-5226095),58.2,new cljs.core.Keyword(null,"estatura","estatura",-685084760),165.6,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),79.5,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),28.5,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640),38.5,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),(544),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),(47)], null);
var paciente_exemplo_11 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nome","nome",1100401122),"paciente-exemplo-11",new cljs.core.Keyword(null,"peso","peso",-5226095),53.1,new cljs.core.Keyword(null,"estatura","estatura",-685084760),166.1,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),68.0,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),23.8,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640),34.0,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),(553),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),(47)], null);
var paciente_exemplo_12 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nome","nome",1100401122),"paciente-exemplo-12",new cljs.core.Keyword(null,"peso","peso",-5226095),58.6,new cljs.core.Keyword(null,"estatura","estatura",-685084760),162.0,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),71.0,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),23.5,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640),38.0,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),(532),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),(50)], null);
var paciente_exemplo_13 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nome","nome",1100401122),"paciente-exemplo-13",new cljs.core.Keyword(null,"peso","peso",-5226095),55.8,new cljs.core.Keyword(null,"estatura","estatura",-685084760),162.4,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),76.5,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),25.7,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640),33.0,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),(668),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),(55)], null);
var paciente_exemplo_14 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nome","nome",1100401122),"paciente-exemplo-14",new cljs.core.Keyword(null,"peso","peso",-5226095),54.6,new cljs.core.Keyword(null,"estatura","estatura",-685084760),161.7,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),68.8,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),27.0,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640),34.5,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),(620),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),(63)], null);
var paciente_exemplo_15 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"nome","nome",1100401122),"paciente-exemplo-15",new cljs.core.Keyword(null,"peso","peso",-5226095),57.1,new cljs.core.Keyword(null,"estatura","estatura",-685084760),157.7,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),73.5,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),26.5,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640),33.5,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),(675),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),(73)], null);
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"IMC");

try{try{var values__14931__auto___15345 = (new cljs.core.List(null,23.9,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_1),null,(1),null)),(2),null));
var result__14932__auto___15346 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15345);
if(cljs.core.truth_(result__14932__auto___15346)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.9,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15345),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.9,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15345),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15255){var t__14976__auto___15347 = e15255;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.9,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15347,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15348 = (new cljs.core.List(null,19.6,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_2),null,(1),null)),(2),null));
var result__14932__auto___15349 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15348);
if(cljs.core.truth_(result__14932__auto___15349)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),19.6,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15348),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),19.6,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15348),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15256){var t__14976__auto___15350 = e15256;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),19.6,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15350,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15351 = (new cljs.core.List(null,24.1,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_3),null,(1),null)),(2),null));
var result__14932__auto___15352 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15351);
if(cljs.core.truth_(result__14932__auto___15352)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),24.1,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15351),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),24.1,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15351),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15257){var t__14976__auto___15353 = e15257;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),24.1,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15353,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15354 = (new cljs.core.List(null,21.7,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_4),null,(1),null)),(2),null));
var result__14932__auto___15355 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15354);
if(cljs.core.truth_(result__14932__auto___15355)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.7,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15354),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.7,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15354),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15258){var t__14976__auto___15356 = e15258;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.7,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15356,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15357 = (new cljs.core.List(null,20.5,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_5),null,(1),null)),(2),null));
var result__14932__auto___15358 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15357);
if(cljs.core.truth_(result__14932__auto___15358)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),20.5,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15357),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),20.5,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15357),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15259){var t__14976__auto___15359 = e15259;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),20.5,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15359,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15360 = (new cljs.core.List(null,23.2,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_6),null,(1),null)),(2),null));
var result__14932__auto___15361 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15360);
if(cljs.core.truth_(result__14932__auto___15361)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15360),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15360),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15260){var t__14976__auto___15362 = e15260;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15362,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15363 = (new cljs.core.List(null,21.8,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_7),null,(1),null)),(2),null));
var result__14932__auto___15364 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15363);
if(cljs.core.truth_(result__14932__auto___15364)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.8,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15363),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.8,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15363),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15261){var t__14976__auto___15365 = e15261;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.8,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15365,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15366 = (new cljs.core.List(null,26.8,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_8),null,(1),null)),(2),null));
var result__14932__auto___15367 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15366);
if(cljs.core.truth_(result__14932__auto___15367)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),26.8,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15366),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),26.8,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15366),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15262){var t__14976__auto___15368 = e15262;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),26.8,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15368,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15369 = (new cljs.core.List(null,31.0,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_9),null,(1),null)),(2),null));
var result__14932__auto___15370 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15369);
if(cljs.core.truth_(result__14932__auto___15370)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),31.0,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15369),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),31.0,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15369),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15263){var t__14976__auto___15371 = e15263;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),31.0,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15371,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15372 = (new cljs.core.List(null,21.2,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_10),null,(1),null)),(2),null));
var result__14932__auto___15373 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15372);
if(cljs.core.truth_(result__14932__auto___15373)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15372),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15372),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15264){var t__14976__auto___15374 = e15264;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15374,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15375 = (new cljs.core.List(null,19.2,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_11),null,(1),null)),(2),null));
var result__14932__auto___15376 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15375);
if(cljs.core.truth_(result__14932__auto___15376)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),19.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15375),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),19.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15375),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15265){var t__14976__auto___15377 = e15265;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),19.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15377,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15378 = (new cljs.core.List(null,22.3,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_12),null,(1),null)),(2),null));
var result__14932__auto___15379 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15378);
if(cljs.core.truth_(result__14932__auto___15379)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),22.3,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15378),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),22.3,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15378),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15266){var t__14976__auto___15380 = e15266;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),22.3,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15380,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15381 = (new cljs.core.List(null,21.2,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_13),null,(1),null)),(2),null));
var result__14932__auto___15382 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15381);
if(cljs.core.truth_(result__14932__auto___15382)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15381),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15381),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15267){var t__14976__auto___15383 = e15267;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15383,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15384 = (new cljs.core.List(null,20.9,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_14),null,(1),null)),(2),null));
var result__14932__auto___15385 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15384);
if(cljs.core.truth_(result__14932__auto___15385)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),20.9,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15384),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),20.9,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15384),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15268){var t__14976__auto___15386 = e15268;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),20.9,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15386,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15387 = (new cljs.core.List(null,23.0,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_15),null,(1),null)),(2),null));
var result__14932__auto___15388 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15387);
if(cljs.core.truth_(result__14932__auto___15388)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.0,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15387),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.0,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15387),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15269){var t__14976__auto___15389 = e15269;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.0,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15389,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Area Braco");

try{try{var values__14931__auto___15390 = (new cljs.core.List(null,0.0058,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_1),(4)),null,(1),null)),(2),null));
var result__14932__auto___15391 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15390);
if(cljs.core.truth_(result__14932__auto___15391)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0058,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15390),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0058,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15390),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15270){var t__14976__auto___15392 = e15270;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0058,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15392,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15393 = (new cljs.core.List(null,0.004434,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_2),(6)),null,(1),null)),(2),null));
var result__14932__auto___15394 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15393);
if(cljs.core.truth_(result__14932__auto___15394)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.004434,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15393),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.004434,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15393),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15271){var t__14976__auto___15395 = e15271;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.004434,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15395,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15396 = (new cljs.core.List(null,0.0051,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_3),(5)),null,(1),null)),(2),null));
var result__14932__auto___15397 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15396);
if(cljs.core.truth_(result__14932__auto___15397)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0051,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15396),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0051,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15396),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15272){var t__14976__auto___15398 = e15272;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0051,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15398,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15399 = (new cljs.core.List(null,0.0048,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_4),(4)),null,(1),null)),(2),null));
var result__14932__auto___15400 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15399);
if(cljs.core.truth_(result__14932__auto___15400)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0048,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15399),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0048,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15399),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15273){var t__14976__auto___15401 = e15273;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0048,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15401,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15402 = (new cljs.core.List(null,0.005,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_5),(3)),null,(1),null)),(2),null));
var result__14932__auto___15403 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15402);
if(cljs.core.truth_(result__14932__auto___15403)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.005,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15402),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.005,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15402),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15274){var t__14976__auto___15404 = e15274;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.005,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15404,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15405 = (new cljs.core.List(null,0.01,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_6),(2)),null,(1),null)),(2),null));
var result__14932__auto___15406 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15405);
if(cljs.core.truth_(result__14932__auto___15406)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null)),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15405),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null)),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15405),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15275){var t__14976__auto___15407 = e15275;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null)),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15407,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15408 = (new cljs.core.List(null,0.004,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_7),(4)),null,(1),null)),(2),null));
var result__14932__auto___15409 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15408);
if(cljs.core.truth_(result__14932__auto___15409)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.004,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15408),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.004,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15408),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15276){var t__14976__auto___15410 = e15276;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.004,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15410,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15411 = (new cljs.core.List(null,0.0072,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_8),(4)),null,(1),null)),(2),null));
var result__14932__auto___15412 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15411);
if(cljs.core.truth_(result__14932__auto___15412)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0072,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15411),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0072,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15411),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15277){var t__14976__auto___15413 = e15277;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0072,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15413,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15414 = (new cljs.core.List(null,0.0082,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_9),(4)),null,(1),null)),(2),null));
var result__14932__auto___15415 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15414);
if(cljs.core.truth_(result__14932__auto___15415)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0082,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15414),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0082,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15414),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15278){var t__14976__auto___15416 = e15278;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0082,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15416,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15417 = (new cljs.core.List(null,0.0065,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_10),(4)),null,(1),null)),(2),null));
var result__14932__auto___15418 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15417);
if(cljs.core.truth_(result__14932__auto___15418)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0065,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15417),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0065,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15417),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15279){var t__14976__auto___15419 = e15279;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0065,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15419,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15420 = (new cljs.core.List(null,0.0045,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_11),(4)),null,(1),null)),(2),null));
var result__14932__auto___15421 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15420);
if(cljs.core.truth_(result__14932__auto___15421)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0045,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15420),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0045,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15420),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15280){var t__14976__auto___15422 = e15280;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0045,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15422,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15423 = (new cljs.core.List(null,0.0044,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_12),(4)),null,(1),null)),(2),null));
var result__14932__auto___15424 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15423);
if(cljs.core.truth_(result__14932__auto___15424)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0044,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15423),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0044,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15423),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15281){var t__14976__auto___15425 = e15281;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0044,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15425,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15426 = (new cljs.core.List(null,0.0053,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_13),(4)),null,(1),null)),(2),null));
var result__14932__auto___15427 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15426);
if(cljs.core.truth_(result__14932__auto___15427)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0053,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15426),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0053,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15426),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15282){var t__14976__auto___15428 = e15282;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0053,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15428,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15429 = (new cljs.core.List(null,0.0058,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_14),(4)),null,(1),null)),(2),null));
var result__14932__auto___15430 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15429);
if(cljs.core.truth_(result__14932__auto___15430)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0058,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15429),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0058,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15429),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15283){var t__14976__auto___15431 = e15283;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0058,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15431,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15432 = (new cljs.core.List(null,0.0056,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_15),(4)),null,(1),null)),(2),null));
var result__14932__auto___15433 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15432);
if(cljs.core.truth_(result__14932__auto___15433)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0056,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15432),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0056,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15432),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15284){var t__14976__auto___15434 = e15284;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0056,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15434,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"area tronco");

try{try{var values__14931__auto___15435 = (new cljs.core.List(null,0.045384,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_1),(6)),null,(1),null)),(2),null));
var result__14932__auto___15436 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15435);
if(cljs.core.truth_(result__14932__auto___15436)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.045384,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15435),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.045384,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15435),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15285){var t__14976__auto___15437 = e15285;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.045384,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15437,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15438 = (new cljs.core.List(null,0.0582,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_2),(5)),null,(1),null)),(2),null));
var result__14932__auto___15439 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15438);
if(cljs.core.truth_(result__14932__auto___15439)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0582,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15438),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0582,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15438),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15286){var t__14976__auto___15440 = e15286;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0582,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15440,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15441 = (new cljs.core.List(null,0.0371,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_3),(4)),null,(1),null)),(2),null));
var result__14932__auto___15442 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15441);
if(cljs.core.truth_(result__14932__auto___15442)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0371,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15441),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0371,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15441),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15287){var t__14976__auto___15443 = e15287;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0371,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15443,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15444 = (new cljs.core.List(null,0.04,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_4),(3)),null,(1),null)),(2),null));
var result__14932__auto___15445 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15444);
if(cljs.core.truth_(result__14932__auto___15445)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.04,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15444),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.04,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15444),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15288){var t__14976__auto___15446 = e15288;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.04,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15446,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15447 = (new cljs.core.List(null,0.04,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_5),(2)),null,(1),null)),(2),null));
var result__14932__auto___15448 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15447);
if(cljs.core.truth_(result__14932__auto___15448)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.04,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null)),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15447),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.04,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null)),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15447),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15289){var t__14976__auto___15449 = e15289;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.04,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null)),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15449,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15450 = (new cljs.core.List(null,0.046,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_6),(3)),null,(1),null)),(2),null));
var result__14932__auto___15451 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15450);
if(cljs.core.truth_(result__14932__auto___15451)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.046,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15450),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.046,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15450),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15290){var t__14976__auto___15452 = e15290;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.046,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15452,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15453 = (new cljs.core.List(null,0.036,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_7),(4)),null,(1),null)),(2),null));
var result__14932__auto___15454 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15453);
if(cljs.core.truth_(result__14932__auto___15454)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.036,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15453),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.036,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15453),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15291){var t__14976__auto___15455 = e15291;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.036,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15455,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15456 = (new cljs.core.List(null,0.05618,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_8),(5)),null,(1),null)),(2),null));
var result__14932__auto___15457 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15456);
if(cljs.core.truth_(result__14932__auto___15457)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.05618,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15456),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.05618,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15456),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15292){var t__14976__auto___15458 = e15292;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.05618,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15458,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15459 = (new cljs.core.List(null,0.053535,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_9),(6)),null,(1),null)),(2),null));
var result__14932__auto___15460 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15459);
if(cljs.core.truth_(result__14932__auto___15460)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.053535,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15459),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.053535,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15459),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15293){var t__14976__auto___15461 = e15293;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.053535,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15461,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15462 = (new cljs.core.List(null,0.05032,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_10),(6)),null,(1),null)),(2),null));
var result__14932__auto___15463 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15462);
if(cljs.core.truth_(result__14932__auto___15463)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.05032,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15462),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.05032,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15462),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15294){var t__14976__auto___15464 = e15294;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.05032,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15464,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15465 = (new cljs.core.List(null,0.036815,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_11),(6)),null,(1),null)),(2),null));
var result__14932__auto___15466 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15465);
if(cljs.core.truth_(result__14932__auto___15466)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.036815,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15465),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.036815,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15465),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15295){var t__14976__auto___15467 = e15295;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.036815,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15467,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15468 = (new cljs.core.List(null,0.040135,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_12),(6)),null,(1),null)),(2),null));
var result__14932__auto___15469 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15468);
if(cljs.core.truth_(result__14932__auto___15469)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.040135,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15468),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.040135,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15468),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15296){var t__14976__auto___15470 = e15296;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.040135,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15470,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15471 = (new cljs.core.List(null,0.046594,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_13),(6)),null,(1),null)),(2),null));
var result__14932__auto___15472 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15471);
if(cljs.core.truth_(result__14932__auto___15472)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.046594,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15471),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.046594,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15471),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15297){var t__14976__auto___15473 = e15297;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.046594,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15473,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15474 = (new cljs.core.List(null,0.037687,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_14),(6)),null,(1),null)),(2),null));
var result__14932__auto___15475 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15474);
if(cljs.core.truth_(result__14932__auto___15475)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.037687,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15474),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.037687,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15474),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15298){var t__14976__auto___15476 = e15298;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.037687,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15476,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15477 = (new cljs.core.List(null,0.043012,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_15),(6)),null,(1),null)),(2),null));
var result__14932__auto___15478 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15477);
if(cljs.core.truth_(result__14932__auto___15478)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.043012,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15477),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.043012,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15477),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15299){var t__14976__auto___15479 = e15299;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.043012,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15479,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"area med");

try{try{var values__14931__auto___15480 = (new cljs.core.List(null,0.012,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_1,(3)),null,(1),null)),(2),null));
var result__14932__auto___15481 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15480);
if(cljs.core.truth_(result__14932__auto___15481)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.012,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15480),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.012,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15480),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15300){var t__14976__auto___15482 = e15300;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.012,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15482,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15483 = (new cljs.core.List(null,0.0118,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_2,(4)),null,(1),null)),(2),null));
var result__14932__auto___15484 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15483);
if(cljs.core.truth_(result__14932__auto___15484)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0118,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15483),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0118,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15483),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15301){var t__14976__auto___15485 = e15301;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0118,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15485,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15486 = (new cljs.core.List(null,0.01107,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_3,(5)),null,(1),null)),(2),null));
var result__14932__auto___15487 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15486);
if(cljs.core.truth_(result__14932__auto___15487)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01107,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15486),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01107,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15486),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15302){var t__14976__auto___15488 = e15302;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01107,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15488,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15489 = (new cljs.core.List(null,0.010019,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_4,(6)),null,(1),null)),(2),null));
var result__14932__auto___15490 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15489);
if(cljs.core.truth_(result__14932__auto___15490)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010019,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15489),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010019,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15489),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15303){var t__14976__auto___15491 = e15303;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010019,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15491,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15492 = (new cljs.core.List(null,0.0104,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_5,(5)),null,(1),null)),(2),null));
var result__14932__auto___15493 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15492);
if(cljs.core.truth_(result__14932__auto___15493)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0104,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15492),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0104,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15492),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15304){var t__14976__auto___15494 = e15304;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0104,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15494,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15495 = (new cljs.core.List(null,0.0111,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_6,(4)),null,(1),null)),(2),null));
var result__14932__auto___15496 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15495);
if(cljs.core.truth_(result__14932__auto___15496)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0111,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15495),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0111,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15495),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15305){var t__14976__auto___15497 = e15305;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0111,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15497,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15498 = (new cljs.core.List(null,0.01,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_7,(3)),null,(1),null)),(2),null));
var result__14932__auto___15499 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15498);
if(cljs.core.truth_(result__14932__auto___15499)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15498),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15498),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15306){var t__14976__auto___15500 = e15306;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15500,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15501 = (new cljs.core.List(null,0.01,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_8,(2)),null,(1),null)),(2),null));
var result__14932__auto___15502 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15501);
if(cljs.core.truth_(result__14932__auto___15502)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15501),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15501),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15307){var t__14976__auto___15503 = e15307;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15503,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15504 = (new cljs.core.List(null,0.015,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_9,(3)),null,(1),null)),(2),null));
var result__14932__auto___15505 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15504);
if(cljs.core.truth_(result__14932__auto___15505)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.015,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15504),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.015,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15504),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15308){var t__14976__auto___15506 = e15308;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.015,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15506,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15507 = (new cljs.core.List(null,0.0133,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_10,(4)),null,(1),null)),(2),null));
var result__14932__auto___15508 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15507);
if(cljs.core.truth_(result__14932__auto___15508)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0133,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15507),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0133,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15507),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15309){var t__14976__auto___15509 = e15309;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0133,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15509,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15510 = (new cljs.core.List(null,0.00985,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_11,(5)),null,(1),null)),(2),null));
var result__14932__auto___15511 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15510);
if(cljs.core.truth_(result__14932__auto___15511)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.00985,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15510),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.00985,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15510),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15310){var t__14976__auto___15512 = e15310;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.00985,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15512,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15513 = (new cljs.core.List(null,0.011166,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_12,(6)),null,(1),null)),(2),null));
var result__14932__auto___15514 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15513);
if(cljs.core.truth_(result__14932__auto___15514)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.011166,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15513),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.011166,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15513),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15311){var t__14976__auto___15515 = e15311;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.011166,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15515,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15516 = (new cljs.core.List(null,0.010928,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_13,(6)),null,(1),null)),(2),null));
var result__14932__auto___15517 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15516);
if(cljs.core.truth_(result__14932__auto___15517)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010928,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15516),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010928,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15516),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15312){var t__14976__auto___15518 = e15312;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010928,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15518,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15519 = (new cljs.core.List(null,0.010645,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_14,(6)),null,(1),null)),(2),null));
var result__14932__auto___15520 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15519);
if(cljs.core.truth_(result__14932__auto___15520)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010645,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15519),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010645,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15519),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15313){var t__14976__auto___15521 = e15313;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010645,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15521,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15522 = (new cljs.core.List(null,0.010838,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_15,(6)),null,(1),null)),(2),null));
var result__14932__auto___15523 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15522);
if(cljs.core.truth_(result__14932__auto___15523)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010838,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15522),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010838,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15522),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15314){var t__14976__auto___15524 = e15314;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010838,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15524,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"RSP");

try{try{var values__14931__auto___15525 = (new cljs.core.List(null,417.347707,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_1,(6)),null,(1),null)),(2),null));
var result__14932__auto___15526 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15525);
if(cljs.core.truth_(result__14932__auto___15526)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),417.347707,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15525),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),417.347707,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15525),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15315){var t__14976__auto___15527 = e15315;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),417.347707,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15527,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15528 = (new cljs.core.List(null,441.970442,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_2,(6)),null,(1),null)),(2),null));
var result__14932__auto___15529 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15528);
if(cljs.core.truth_(result__14932__auto___15529)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),441.970442,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15528),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),441.970442,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15528),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15316){var t__14976__auto___15530 = e15316;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),441.970442,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15530,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15531 = (new cljs.core.List(null,369.087447,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_3,(6)),null,(1),null)),(2),null));
var result__14932__auto___15532 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15531);
if(cljs.core.truth_(result__14932__auto___15532)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),369.087447,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15531),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),369.087447,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15531),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15317){var t__14976__auto___15533 = e15317;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),369.087447,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15533,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15534 = (new cljs.core.List(null,407.161257,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_4,(6)),null,(1),null)),(2),null));
var result__14932__auto___15535 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15534);
if(cljs.core.truth_(result__14932__auto___15535)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),407.161257,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15534),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),407.161257,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15534),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15318){var t__14976__auto___15536 = e15318;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),407.161257,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15536,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15537 = (new cljs.core.List(null,418.187271,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_5,(6)),null,(1),null)),(2),null));
var result__14932__auto___15538 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15537);
if(cljs.core.truth_(result__14932__auto___15538)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),418.187271,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15537),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),418.187271,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15537),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15319){var t__14976__auto___15539 = e15319;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),418.187271,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15539,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15540 = (new cljs.core.List(null,454.431096,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_6,(6)),null,(1),null)),(2),null));
var result__14932__auto___15541 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15540);
if(cljs.core.truth_(result__14932__auto___15541)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),454.431096,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15540),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),454.431096,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15540),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15320){var t__14976__auto___15542 = e15320;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),454.431096,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15542,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15543 = (new cljs.core.List(null,415.00285,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_7,(6)),null,(1),null)),(2),null));
var result__14932__auto___15544 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15543);
if(cljs.core.truth_(result__14932__auto___15544)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),415.00285,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15543),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),415.00285,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15543),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15321){var t__14976__auto___15545 = e15321;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),415.00285,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15545,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15546 = (new cljs.core.List(null,362.646744,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_8,(6)),null,(1),null)),(2),null));
var result__14932__auto___15547 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15546);
if(cljs.core.truth_(result__14932__auto___15547)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),362.646744,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15546),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),362.646744,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15546),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15322){var t__14976__auto___15548 = e15322;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),362.646744,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15548,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15549 = (new cljs.core.List(null,451.703187,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_9,(6)),null,(1),null)),(2),null));
var result__14932__auto___15550 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15549);
if(cljs.core.truth_(result__14932__auto___15550)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),451.703187,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15549),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),451.703187,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15549),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15323){var t__14976__auto___15551 = e15323;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),451.703187,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15551,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15552 = (new cljs.core.List(null,395.779311,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_10,(6)),null,(1),null)),(2),null));
var result__14932__auto___15553 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15552);
if(cljs.core.truth_(result__14932__auto___15553)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),395.779311,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15552),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),395.779311,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15552),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15324){var t__14976__auto___15554 = e15324;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),395.779311,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15554,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15555 = (new cljs.core.List(null,298.206894,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_11,(6)),null,(1),null)),(2),null));
var result__14932__auto___15556 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15555);
if(cljs.core.truth_(result__14932__auto___15556)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),298.206894,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15555),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),298.206894,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15555),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15325){var t__14976__auto___15557 = e15325;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),298.206894,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15557,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15558 = (new cljs.core.List(null,333.342023,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_12,(6)),null,(1),null)),(2),null));
var result__14932__auto___15559 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15558);
if(cljs.core.truth_(result__14932__auto___15559)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),333.342023,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15558),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),333.342023,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15558),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15326){var t__14976__auto___15560 = e15326;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),333.342023,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15560,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15561 = (new cljs.core.List(null,408.619457,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_13,(6)),null,(1),null)),(2),null));
var result__14932__auto___15562 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15561);
if(cljs.core.truth_(result__14932__auto___15562)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),408.619457,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15561),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),408.619457,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15561),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15327){var t__14976__auto___15563 = e15327;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),408.619457,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15563,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15564 = (new cljs.core.List(null,371.050365,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_14,(6)),null,(1),null)),(2),null));
var result__14932__auto___15565 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15564);
if(cljs.core.truth_(result__14932__auto___15565)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),371.050365,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15564),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),371.050365,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15564),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15328){var t__14976__auto___15566 = e15328;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),371.050365,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15566,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15567 = (new cljs.core.List(null,421.72335,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_15,(6)),null,(1),null)),(2),null));
var result__14932__auto___15568 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15567);
if(cljs.core.truth_(result__14932__auto___15568)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),421.72335,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15567),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),421.72335,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15567),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15329){var t__14976__auto___15569 = e15329;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),421.72335,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15569,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"XCSP");

try{try{var values__14931__auto___15570 = (new cljs.core.List(null,32.656315,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_1,(6)),null,(1),null)),(2),null));
var result__14932__auto___15571 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15570);
if(cljs.core.truth_(result__14932__auto___15571)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),32.656315,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15570),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),32.656315,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15570),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15330){var t__14976__auto___15572 = e15330;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),32.656315,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15572,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15573 = (new cljs.core.List(null,43.874438,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_2,(6)),null,(1),null)),(2),null));
var result__14932__auto___15574 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15573);
if(cljs.core.truth_(result__14932__auto___15574)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),43.874438,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15573),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),43.874438,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15573),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15331){var t__14976__auto___15575 = e15331;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),43.874438,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15575,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15576 = (new cljs.core.List(null,32.310686,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_3,(6)),null,(1),null)),(2),null));
var result__14932__auto___15577 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15576);
if(cljs.core.truth_(result__14932__auto___15577)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),32.310686,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15576),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),32.310686,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15576),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15332){var t__14976__auto___15578 = e15332;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),32.310686,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15578,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15579 = (new cljs.core.List(null,29.163065,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_4,(6)),null,(1),null)),(2),null));
var result__14932__auto___15580 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15579);
if(cljs.core.truth_(result__14932__auto___15580)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),29.163065,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15579),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),29.163065,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15579),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15333){var t__14976__auto___15581 = e15333;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),29.163065,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15581,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15582 = (new cljs.core.List(null,38.601902,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_5,(6)),null,(1),null)),(2),null));
var result__14932__auto___15583 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15582);
if(cljs.core.truth_(result__14932__auto___15583)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),38.601902,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15582),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),38.601902,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15582),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15334){var t__14976__auto___15584 = e15334;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),38.601902,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15584,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15585 = (new cljs.core.List(null,43.707658,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_6,(6)),null,(1),null)),(2),null));
var result__14932__auto___15586 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15585);
if(cljs.core.truth_(result__14932__auto___15586)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),43.707658,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15585),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),43.707658,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15585),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15335){var t__14976__auto___15587 = e15335;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),43.707658,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15587,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15588 = (new cljs.core.List(null,35.062568,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_7,(6)),null,(1),null)),(2),null));
var result__14932__auto___15589 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15588);
if(cljs.core.truth_(result__14932__auto___15589)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),35.062568,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15588),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),35.062568,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15588),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15336){var t__14976__auto___15590 = e15336;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),35.062568,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15590,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15591 = (new cljs.core.List(null,45.243836,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_8,(6)),null,(1),null)),(2),null));
var result__14932__auto___15592 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15591);
if(cljs.core.truth_(result__14932__auto___15592)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),45.243836,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15591),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),45.243836,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15591),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15337){var t__14976__auto___15593 = e15337;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),45.243836,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15593,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15594 = (new cljs.core.List(null,48.181673,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_9,(6)),null,(1),null)),(2),null));
var result__14932__auto___15595 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15594);
if(cljs.core.truth_(result__14932__auto___15595)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),48.181673,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15594),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),48.181673,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15594),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15338){var t__14976__auto___15596 = e15338;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),48.181673,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15596,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15597 = (new cljs.core.List(null,34.194168,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_10,(6)),null,(1),null)),(2),null));
var result__14932__auto___15598 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15597);
if(cljs.core.truth_(result__14932__auto___15598)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),34.194168,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15597),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),34.194168,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15597),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15339){var t__14976__auto___15599 = e15339;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),34.194168,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15599,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15600 = (new cljs.core.List(null,25.34489,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_11,(6)),null,(1),null)),(2),null));
var result__14932__auto___15601 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15600);
if(cljs.core.truth_(result__14932__auto___15601)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),25.34489,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15600),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),25.34489,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15600),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15340){var t__14976__auto___15602 = e15340;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),25.34489,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15602,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15603 = (new cljs.core.List(null,31.329138,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_12,(6)),null,(1),null)),(2),null));
var result__14932__auto___15604 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15603);
if(cljs.core.truth_(result__14932__auto___15604)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),31.329138,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15603),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),31.329138,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15603),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15341){var t__14976__auto___15605 = e15341;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),31.329138,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15605,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15606 = (new cljs.core.List(null,33.643818,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_13,(6)),null,(1),null)),(2),null));
var result__14932__auto___15607 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15606);
if(cljs.core.truth_(result__14932__auto___15607)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),33.643818,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15606),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),33.643818,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15606),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15342){var t__14976__auto___15608 = e15342;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),33.643818,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15608,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto___15609 = (new cljs.core.List(null,37.703505,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_14,(6)),null,(1),null)),(2),null));
var result__14932__auto___15610 = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto___15609);
if(cljs.core.truth_(result__14932__auto___15610)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),37.703505,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto___15609),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),37.703505,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto___15609),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15343){var t__14976__auto___15611 = e15343;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),37.703505,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto___15611,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14931__auto__ = (new cljs.core.List(null,45.608599,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_15,(6)),null,(1),null)),(2),null));
var result__14932__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__14931__auto__);
if(cljs.core.truth_(result__14932__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),45.608599,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14931__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),45.608599,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14931__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__14932__auto__;
}catch (e15344){var t__14976__auto__ = e15344;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),45.608599,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14976__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

react_med.screens.paciente_relatorio.bioimpedance.bioimpedance_tests.cljs$lang$var = new cljs.core.Var(function(){return react_med.screens.paciente_relatorio.bioimpedance.bioimpedance_tests;},new cljs.core.Symbol("react-med.screens.paciente-relatorio.bioimpedance","bioimpedance-tests","react-med.screens.paciente-relatorio.bioimpedance/bioimpedance-tests",260212273,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"react-med.screens.paciente-relatorio.bioimpedance","react-med.screens.paciente-relatorio.bioimpedance",-796907509,null),new cljs.core.Symbol(null,"bioimpedance-tests","bioimpedance-tests",2094619265,null),"/home/jp/projects/react-med/src/react_med/screens/paciente_relatorio/bioimpedance.cljs",28,1,396,396,cljs.core.List.EMPTY,null,(cljs.core.truth_(react_med.screens.paciente_relatorio.bioimpedance.bioimpedance_tests)?react_med.screens.paciente_relatorio.bioimpedance.bioimpedance_tests.cljs$lang$test:null)]));

//# sourceMappingURL=bioimpedance.js.map
