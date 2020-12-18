// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.paciente_relatorio.bioimpedance');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('react_med.util');
goog.require('cljs.test');
react_med.screens.paciente_relatorio.bioimpedance.imc = (function react_med$screens$paciente_relatorio$bioimpedance$imc(p__15192){
var map__15193 = p__15192;
var map__15193__$1 = (((((!((map__15193 == null))))?(((((map__15193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15193):map__15193);
var peso = cljs.core.get.call(null,map__15193__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura = cljs.core.get.call(null,map__15193__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var $ = ((estatura * estatura) * 1.0E-4);
var $__$1 = (peso / $);
var $__$2 = $__$1.toFixed((1));
return parseFloat($__$2);
});
/**
 * (0.734*(estatura^2/resistencia))+(0.116*peso)+(0.096*reatancia)+(0.878*sexo)-4.03
 *   Ref: Lukaski e Bolonchuk
 */
react_med.screens.paciente_relatorio.bioimpedance.eq1_high_pa_fitness_and_athletestes = (function react_med$screens$paciente_relatorio$bioimpedance$eq1_high_pa_fitness_and_athletestes(p__15195){
var map__15196 = p__15195;
var map__15196__$1 = (((((!((map__15196 == null))))?(((((map__15196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15196):map__15196);
var estatura = cljs.core.get.call(null,map__15196__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15196__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15196__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__15196__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
var sexo = cljs.core.get.call(null,map__15196__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var male_portion = ((cljs.core._EQ_.call(null,sexo,"Masculino"))?0.878:(0));
return (((((0.734 * ((estatura * estatura) / resistencia)) + (0.116 * peso)) + (0.096 * reatancia)) + male_portion) + -4.03);
});
/**
 * (0.62*(estatura^2/resistencia))+(0.21*peso)+(0.1*reatancia)+4.2
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq2_male_and_female_children_from_8_15_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq2_male_and_female_children_from_8_15_years(p__15198){
var map__15199 = p__15198;
var map__15199__$1 = (((((!((map__15199 == null))))?(((((map__15199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15199):map__15199);
var estatura = cljs.core.get.call(null,map__15199__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15199__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15199__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__15199__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.62 * ((estatura * estatura) / resistencia)) + (0.21 * peso)) + (0.1 * reatancia)) + 4.2);
});
/**
 * (0.476*((estatura^2)/resistencia))+(0.295*peso)+5.49
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq3_females_18_30_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq3_females_18_30_years(p__15201){
var map__15202 = p__15201;
var map__15202__$1 = (((((!((map__15202 == null))))?(((((map__15202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15202):map__15202);
var estatura = cljs.core.get.call(null,map__15202__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15202__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15202__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
return (((0.476 * ((estatura * estatura) / resistencia)) + (0.295 * peso)) + 5.49);
});
/**
 * (0.536*((estatura^2)/resistencia))+(0.155*peso)+(0.075*reatancia)+2.87
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq5_females_30_50_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq5_females_30_50_years(p__15204){
var map__15205 = p__15204;
var map__15205__$1 = (((((!((map__15205 == null))))?(((((map__15205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15205):map__15205);
var estatura = cljs.core.get.call(null,map__15205__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15205__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15205__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__15205__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.536 * ((estatura * estatura) / resistencia)) + (0.155 * peso)) + (0.075 * reatancia)) + 2.87);
});
/**
 * (0.47*((estatura^2)/resistencia))+(0.17*peso)+(0.03*reatancia)+5.7
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq6_females_50_70_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq6_females_50_70_years(p__15207){
var map__15208 = p__15207;
var map__15208__$1 = (((((!((map__15208 == null))))?(((((map__15208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15208):map__15208);
var estatura = cljs.core.get.call(null,map__15208__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15208__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15208__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__15208__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.47 * ((estatura * estatura) / resistencia)) + (0.17 * peso)) + (0.03 * reatancia)) + 5.7);
});
/**
 * (0.485*((estatura^2)/resistencia))+(0.338*peso)+5.32
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq7_males_18_30_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq7_males_18_30_years(p__15210){
var map__15211 = p__15210;
var map__15211__$1 = (((((!((map__15211 == null))))?(((((map__15211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15211):map__15211);
var estatura = cljs.core.get.call(null,map__15211__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15211__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15211__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.485 * ((estatura * estatura) / resistencia));
var peso_portion = (0.338 * peso);
var constant = 5.32;
return ((estatura_resistencia_portion + peso_portion) + constant);
});
/**
 * (0.549*((estatura^2)/resistencia))+(0.163*peso)+(0.092*reatancia)+4.51
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq8_males_30_50_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq8_males_30_50_years(p__15213){
var map__15214 = p__15213;
var map__15214__$1 = (((((!((map__15214 == null))))?(((((map__15214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15214):map__15214);
var estatura = cljs.core.get.call(null,map__15214__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15214__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15214__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__15214__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
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
react_med.screens.paciente_relatorio.bioimpedance.eq9_males_50_70_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq9_males_50_70_years(p__15216){
var map__15217 = p__15216;
var map__15217__$1 = (((((!((map__15217 == null))))?(((((map__15217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15217):map__15217);
var estatura = cljs.core.get.call(null,map__15217__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15217__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15217__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__15217__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
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
react_med.screens.paciente_relatorio.bioimpedance.eq10_men = (function react_med$screens$paciente_relatorio$bioimpedance$eq10_men(p__15219){
var map__15220 = p__15219;
var map__15220__$1 = (((((!((map__15220 == null))))?(((((map__15220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15220):map__15220);
var estatura = cljs.core.get.call(null,map__15220__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15220__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15220__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
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
react_med.screens.paciente_relatorio.bioimpedance.eq11_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq11_women(p__15222){
var map__15223 = p__15222;
var map__15223__$1 = (((((!((map__15223 == null))))?(((((map__15223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15223):map__15223);
var estatura = cljs.core.get.call(null,map__15223__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15223__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15223__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.69 * ((estatura * estatura) / resistencia));
var peso_portion = (0.18 * peso);
var resistencia_portion = (0.02 * resistencia);
var constant = -9.53;
return (((estatura_resistencia_portion + peso_portion) + resistencia_portion) + constant);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__15225#","p1__15225#",-1605946431,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-matches","cljs.core/re-matches",2013608485,null),/\d{4}-\d{2}-\d{2}/,new cljs.core.Symbol(null,"p1__15225#","p1__15225#",-1605946431,null)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-matches","cljs.core/re-matches",2013608485,null),/\d{4}-\d{2}-\d{2}/,new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__15225_SHARP_){
return cljs.core.re_matches.call(null,/\d{4}-\d{2}-\d{2}/,p1__15225_SHARP_);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Feminino","null","Masculino","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Feminino",null,"Masculino",null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","nascimento","react-med.screens.paciente-relatorio.bioimpedance/nascimento",892303912),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","data","react-med.screens.paciente-relatorio.bioimpedance/data",42462095),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["N\u00E3o Ativo","null","Ativo","null","Atleta","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["N\u00E3o Ativo",null,"Ativo",null,"Atleta",null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","avaliacao-info","react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info",325326502),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","idade","react-med.screens.paciente-relatorio.bioimpedance/idade",221243814),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","idade","react-med.screens.paciente-relatorio.bioimpedance/idade",221243814),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__15226){
return cljs.core.map_QMARK_.call(null,G__15226);
}),(function (G__15226){
return cljs.core.contains_QMARK_.call(null,G__15226,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
}),(function (G__15226){
return cljs.core.contains_QMARK_.call(null,G__15226,new cljs.core.Keyword(null,"idade","idade",297389078));
}),(function (G__15226){
return cljs.core.contains_QMARK_.call(null,G__15226,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455));
})], null),(function (G__15226){
return ((cljs.core.map_QMARK_.call(null,G__15226)) && (cljs.core.contains_QMARK_.call(null,G__15226,new cljs.core.Keyword(null,"sexo","sexo",-629407757))) && (cljs.core.contains_QMARK_.call(null,G__15226,new cljs.core.Keyword(null,"idade","idade",297389078))) && (cljs.core.contains_QMARK_.call(null,G__15226,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455))));
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
react_med.screens.paciente_relatorio.bioimpedance.default_massa_livre_de_gordura = (function react_med$screens$paciente_relatorio$bioimpedance$default_massa_livre_de_gordura(p__15227){
var map__15228 = p__15227;
var map__15228__$1 = (((((!((map__15228 == null))))?(((((map__15228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15228):map__15228);
var avaliacao_info = map__15228__$1;
var sexo = cljs.core.get.call(null,map__15228__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var nascimento = cljs.core.get.call(null,map__15228__$1,new cljs.core.Keyword(null,"nascimento","nascimento",646565528));
var data = cljs.core.get.call(null,map__15228__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var atividade_fisica = cljs.core.get.call(null,map__15228__$1,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455));
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

var _PERCENT_ = (function (){var G__15230 = equacao_para_usar;
switch (G__15230) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15230)].join('')));

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
react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes = (function react_med$screens$paciente_relatorio$bioimpedance$eq13_tbw_male_and_female_athletes(p__15232){
var map__15233 = p__15232;
var map__15233__$1 = (((((!((map__15233 == null))))?(((((map__15233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15233):map__15233);
var estatura = cljs.core.get.call(null,map__15233__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15233__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15233__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var sexo = cljs.core.get.call(null,map__15233__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
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
react_med.screens.paciente_relatorio.bioimpedance.eq16_tbw_men = (function react_med$screens$paciente_relatorio$bioimpedance$eq16_tbw_men(p__15235){
var map__15236 = p__15235;
var map__15236__$1 = (((((!((map__15236 == null))))?(((((map__15236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15236):map__15236);
var estatura = cljs.core.get.call(null,map__15236__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15236__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15236__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.45 * ((estatura * estatura) / resistencia));
var peso_portion = (0.18 * peso);
var constant = 1.2;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
/**
 * (0.45*((estatura^2)/resistencia))+(0.11*peso)+3.75
 *   Ref: Sun et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq17_tbw_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq17_tbw_women(p__15238){
var map__15239 = p__15238;
var map__15239__$1 = (((((!((map__15239 == null))))?(((((map__15239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15239):map__15239);
var estatura = cljs.core.get.call(null,map__15239__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15239__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15239__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.45 * ((estatura * estatura) / resistencia));
var peso_portion = (0.11 * peso);
var constant = 3.75;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
react_med.screens.paciente_relatorio.bioimpedance.default_agua_corporal = (function react_med$screens$paciente_relatorio$bioimpedance$default_agua_corporal(p__15241){
var map__15242 = p__15241;
var map__15242__$1 = (((((!((map__15242 == null))))?(((((map__15242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15242):map__15242);
var avaliacao_info = map__15242__$1;
var sexo = cljs.core.get.call(null,map__15242__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var atividade_fisica = cljs.core.get.call(null,map__15242__$1,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455));
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

var _PERCENT_ = (function (){var G__15244 = equacao_para_usar;
switch (G__15244) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15244)].join('')));

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
react_med.screens.paciente_relatorio.bioimpedance.eq20_ecw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq20_ecw_male_and_female(p__15246){
var map__15247 = p__15246;
var map__15247__$1 = (((((!((map__15247 == null))))?(((((map__15247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15247):map__15247);
var estatura = cljs.core.get.call(null,map__15247__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15247__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__15247__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__15247__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
var sexo = cljs.core.get.call(null,map__15247__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
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
react_med.screens.paciente_relatorio.bioimpedance.eq22_smm_adult_men_and_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq22_smm_adult_men_and_women(p__15249){
var map__15250 = p__15249;
var map__15250__$1 = (((((!((map__15250 == null))))?(((((map__15250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15250):map__15250);
var estatura = cljs.core.get.call(null,map__15250__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__15250__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var sexo = cljs.core.get.call(null,map__15250__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var idade = cljs.core.get.call(null,map__15250__$1,new cljs.core.Keyword(null,"idade","idade",297389078));
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
react_med.screens.paciente_relatorio.bioimpedance.impedancia = (function react_med$screens$paciente_relatorio$bioimpedance$impedancia(p__15252){
var map__15253 = p__15252;
var map__15253__$1 = (((((!((map__15253 == null))))?(((((map__15253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15253):map__15253);
var resistencia = cljs.core.get.call(null,map__15253__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var reatancia = cljs.core.get.call(null,map__15253__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return Math.sqrt(((resistencia * resistencia) + (reatancia * reatancia)));
});
react_med.screens.paciente_relatorio.bioimpedance.angulo = (function react_med$screens$paciente_relatorio$bioimpedance$angulo(p__15255){
var map__15256 = p__15255;
var map__15256__$1 = (((((!((map__15256 == null))))?(((((map__15256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15256):map__15256);
var avaliacao_info = map__15256__$1;
var resistencia = cljs.core.get.call(null,map__15256__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var reatancia = cljs.core.get.call(null,map__15256__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return (Math.atan((reatancia / resistencia)) * ((180) / Math.PI));
});
react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia = (function react_med$screens$paciente_relatorio$bioimpedance$area_circunferencia(var_args){
var G__15259 = arguments.length;
switch (G__15259) {
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
var G__15263 = arguments.length;
switch (G__15263) {
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
var a = (function (p1__15261_SHARP_){
return react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,p1__15261_SHARP_.call(null,avaliacao_info));
});
return (((0.45 * a.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626))) + (0.1 * a.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174)))) + (0.45 * a.call(null,new cljs.core.Keyword(null,"circunferencia-panturrilha","circunferencia-panturrilha",1288541640))));
});

react_med.screens.paciente_relatorio.bioimpedance.area_med.cljs$lang$maxFixedArity = 2;

react_med.screens.paciente_relatorio.bioimpedance.rsp = (function react_med$screens$paciente_relatorio$bioimpedance$rsp(var_args){
var G__15266 = arguments.length;
switch (G__15266) {
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
var G__15269 = arguments.length;
switch (G__15269) {
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

try{try{var values__14947__auto___15361 = (new cljs.core.List(null,23.9,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_1),null,(1),null)),(2),null));
var result__14948__auto___15362 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15361);
if(cljs.core.truth_(result__14948__auto___15362)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.9,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15361),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.9,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15361),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15271){var t__14992__auto___15363 = e15271;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.9,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15363,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15364 = (new cljs.core.List(null,19.6,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_2),null,(1),null)),(2),null));
var result__14948__auto___15365 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15364);
if(cljs.core.truth_(result__14948__auto___15365)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),19.6,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15364),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),19.6,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15364),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15272){var t__14992__auto___15366 = e15272;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),19.6,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15366,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15367 = (new cljs.core.List(null,24.1,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_3),null,(1),null)),(2),null));
var result__14948__auto___15368 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15367);
if(cljs.core.truth_(result__14948__auto___15368)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),24.1,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15367),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),24.1,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15367),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15273){var t__14992__auto___15369 = e15273;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),24.1,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15369,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15370 = (new cljs.core.List(null,21.7,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_4),null,(1),null)),(2),null));
var result__14948__auto___15371 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15370);
if(cljs.core.truth_(result__14948__auto___15371)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.7,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15370),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.7,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15370),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15274){var t__14992__auto___15372 = e15274;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.7,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15372,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15373 = (new cljs.core.List(null,20.5,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_5),null,(1),null)),(2),null));
var result__14948__auto___15374 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15373);
if(cljs.core.truth_(result__14948__auto___15374)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),20.5,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15373),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),20.5,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15373),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15275){var t__14992__auto___15375 = e15275;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),20.5,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15375,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15376 = (new cljs.core.List(null,23.2,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_6),null,(1),null)),(2),null));
var result__14948__auto___15377 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15376);
if(cljs.core.truth_(result__14948__auto___15377)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15376),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15376),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15276){var t__14992__auto___15378 = e15276;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15378,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15379 = (new cljs.core.List(null,21.8,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_7),null,(1),null)),(2),null));
var result__14948__auto___15380 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15379);
if(cljs.core.truth_(result__14948__auto___15380)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.8,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15379),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.8,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15379),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15277){var t__14992__auto___15381 = e15277;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.8,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15381,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15382 = (new cljs.core.List(null,26.8,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_8),null,(1),null)),(2),null));
var result__14948__auto___15383 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15382);
if(cljs.core.truth_(result__14948__auto___15383)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),26.8,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15382),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),26.8,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15382),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15278){var t__14992__auto___15384 = e15278;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),26.8,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15384,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15385 = (new cljs.core.List(null,31.0,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_9),null,(1),null)),(2),null));
var result__14948__auto___15386 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15385);
if(cljs.core.truth_(result__14948__auto___15386)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),31.0,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15385),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),31.0,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15385),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15279){var t__14992__auto___15387 = e15279;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),31.0,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15387,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15388 = (new cljs.core.List(null,21.2,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_10),null,(1),null)),(2),null));
var result__14948__auto___15389 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15388);
if(cljs.core.truth_(result__14948__auto___15389)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15388),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15388),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15280){var t__14992__auto___15390 = e15280;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15390,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15391 = (new cljs.core.List(null,19.2,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_11),null,(1),null)),(2),null));
var result__14948__auto___15392 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15391);
if(cljs.core.truth_(result__14948__auto___15392)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),19.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15391),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),19.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15391),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15281){var t__14992__auto___15393 = e15281;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),19.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15393,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15394 = (new cljs.core.List(null,22.3,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_12),null,(1),null)),(2),null));
var result__14948__auto___15395 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15394);
if(cljs.core.truth_(result__14948__auto___15395)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),22.3,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15394),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),22.3,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15394),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15282){var t__14992__auto___15396 = e15282;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),22.3,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15396,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15397 = (new cljs.core.List(null,21.2,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_13),null,(1),null)),(2),null));
var result__14948__auto___15398 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15397);
if(cljs.core.truth_(result__14948__auto___15398)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15397),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15397),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15283){var t__14992__auto___15399 = e15283;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),21.2,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15399,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15400 = (new cljs.core.List(null,20.9,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_14),null,(1),null)),(2),null));
var result__14948__auto___15401 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15400);
if(cljs.core.truth_(result__14948__auto___15401)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),20.9,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15400),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),20.9,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15400),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15284){var t__14992__auto___15402 = e15284;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),20.9,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15402,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15403 = (new cljs.core.List(null,23.0,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.imc.call(null,paciente_exemplo_15),null,(1),null)),(2),null));
var result__14948__auto___15404 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15403);
if(cljs.core.truth_(result__14948__auto___15404)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.0,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15403),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.0,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15403),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15285){var t__14992__auto___15405 = e15285;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),23.0,cljs.core.list(new cljs.core.Symbol(null,"imc","imc",-1075541028,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15405,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Area Braco");

try{try{var values__14947__auto___15406 = (new cljs.core.List(null,0.0058,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_1),(4)),null,(1),null)),(2),null));
var result__14948__auto___15407 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15406);
if(cljs.core.truth_(result__14948__auto___15407)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0058,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15406),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0058,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15406),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15286){var t__14992__auto___15408 = e15286;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0058,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15408,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15409 = (new cljs.core.List(null,0.004434,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_2),(6)),null,(1),null)),(2),null));
var result__14948__auto___15410 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15409);
if(cljs.core.truth_(result__14948__auto___15410)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.004434,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15409),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.004434,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15409),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15287){var t__14992__auto___15411 = e15287;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.004434,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15411,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15412 = (new cljs.core.List(null,0.0051,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_3),(5)),null,(1),null)),(2),null));
var result__14948__auto___15413 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15412);
if(cljs.core.truth_(result__14948__auto___15413)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0051,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15412),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0051,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15412),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15288){var t__14992__auto___15414 = e15288;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0051,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15414,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15415 = (new cljs.core.List(null,0.0048,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_4),(4)),null,(1),null)),(2),null));
var result__14948__auto___15416 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15415);
if(cljs.core.truth_(result__14948__auto___15416)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0048,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15415),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0048,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15415),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15289){var t__14992__auto___15417 = e15289;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0048,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15417,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15418 = (new cljs.core.List(null,0.005,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_5),(3)),null,(1),null)),(2),null));
var result__14948__auto___15419 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15418);
if(cljs.core.truth_(result__14948__auto___15419)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.005,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15418),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.005,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15418),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15290){var t__14992__auto___15420 = e15290;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.005,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15420,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15421 = (new cljs.core.List(null,0.01,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_6),(2)),null,(1),null)),(2),null));
var result__14948__auto___15422 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15421);
if(cljs.core.truth_(result__14948__auto___15422)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null)),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15421),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null)),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15421),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15291){var t__14992__auto___15423 = e15291;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null)),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15423,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15424 = (new cljs.core.List(null,0.004,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_7),(4)),null,(1),null)),(2),null));
var result__14948__auto___15425 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15424);
if(cljs.core.truth_(result__14948__auto___15425)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.004,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15424),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.004,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15424),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15292){var t__14992__auto___15426 = e15292;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.004,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15426,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15427 = (new cljs.core.List(null,0.0072,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_8),(4)),null,(1),null)),(2),null));
var result__14948__auto___15428 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15427);
if(cljs.core.truth_(result__14948__auto___15428)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0072,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15427),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0072,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15427),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15293){var t__14992__auto___15429 = e15293;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0072,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15429,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15430 = (new cljs.core.List(null,0.0082,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_9),(4)),null,(1),null)),(2),null));
var result__14948__auto___15431 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15430);
if(cljs.core.truth_(result__14948__auto___15431)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0082,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15430),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0082,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15430),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15294){var t__14992__auto___15432 = e15294;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0082,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15432,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15433 = (new cljs.core.List(null,0.0065,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_10),(4)),null,(1),null)),(2),null));
var result__14948__auto___15434 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15433);
if(cljs.core.truth_(result__14948__auto___15434)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0065,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15433),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0065,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15433),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15295){var t__14992__auto___15435 = e15295;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0065,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15435,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15436 = (new cljs.core.List(null,0.0045,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_11),(4)),null,(1),null)),(2),null));
var result__14948__auto___15437 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15436);
if(cljs.core.truth_(result__14948__auto___15437)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0045,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15436),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0045,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15436),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15296){var t__14992__auto___15438 = e15296;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0045,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15438,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15439 = (new cljs.core.List(null,0.0044,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_12),(4)),null,(1),null)),(2),null));
var result__14948__auto___15440 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15439);
if(cljs.core.truth_(result__14948__auto___15440)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0044,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15439),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0044,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15439),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15297){var t__14992__auto___15441 = e15297;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0044,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15441,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15442 = (new cljs.core.List(null,0.0053,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_13),(4)),null,(1),null)),(2),null));
var result__14948__auto___15443 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15442);
if(cljs.core.truth_(result__14948__auto___15443)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0053,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15442),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0053,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15442),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15298){var t__14992__auto___15444 = e15298;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0053,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15444,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15445 = (new cljs.core.List(null,0.0058,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_14),(4)),null,(1),null)),(2),null));
var result__14948__auto___15446 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15445);
if(cljs.core.truth_(result__14948__auto___15446)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0058,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15445),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0058,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15445),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15299){var t__14992__auto___15447 = e15299;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0058,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15447,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15448 = (new cljs.core.List(null,0.0056,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_15),(4)),null,(1),null)),(2),null));
var result__14948__auto___15449 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15448);
if(cljs.core.truth_(result__14948__auto___15449)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0056,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15448),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0056,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15448),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15300){var t__14992__auto___15450 = e15300;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0056,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-braco","circunferencia-braco",246663626),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15450,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"area tronco");

try{try{var values__14947__auto___15451 = (new cljs.core.List(null,0.045384,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_1),(6)),null,(1),null)),(2),null));
var result__14948__auto___15452 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15451);
if(cljs.core.truth_(result__14948__auto___15452)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.045384,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15451),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.045384,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15451),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15301){var t__14992__auto___15453 = e15301;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.045384,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15453,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15454 = (new cljs.core.List(null,0.0582,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_2),(5)),null,(1),null)),(2),null));
var result__14948__auto___15455 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15454);
if(cljs.core.truth_(result__14948__auto___15455)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0582,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15454),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0582,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15454),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15302){var t__14992__auto___15456 = e15302;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0582,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15456,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15457 = (new cljs.core.List(null,0.0371,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_3),(4)),null,(1),null)),(2),null));
var result__14948__auto___15458 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15457);
if(cljs.core.truth_(result__14948__auto___15458)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0371,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15457),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0371,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15457),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15303){var t__14992__auto___15459 = e15303;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0371,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15459,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15460 = (new cljs.core.List(null,0.04,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_4),(3)),null,(1),null)),(2),null));
var result__14948__auto___15461 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15460);
if(cljs.core.truth_(result__14948__auto___15461)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.04,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15460),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.04,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15460),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15304){var t__14992__auto___15462 = e15304;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.04,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15462,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15463 = (new cljs.core.List(null,0.04,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_5),(2)),null,(1),null)),(2),null));
var result__14948__auto___15464 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15463);
if(cljs.core.truth_(result__14948__auto___15464)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.04,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null)),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15463),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.04,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null)),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15463),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15305){var t__14992__auto___15465 = e15305;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.04,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null)),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15465,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15466 = (new cljs.core.List(null,0.046,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_6),(3)),null,(1),null)),(2),null));
var result__14948__auto___15467 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15466);
if(cljs.core.truth_(result__14948__auto___15467)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.046,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15466),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.046,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15466),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15306){var t__14992__auto___15468 = e15306;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.046,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null)),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15468,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15469 = (new cljs.core.List(null,0.036,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_7),(4)),null,(1),null)),(2),null));
var result__14948__auto___15470 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15469);
if(cljs.core.truth_(result__14948__auto___15470)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.036,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15469),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.036,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15469),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15307){var t__14992__auto___15471 = e15307;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.036,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null)),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15471,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15472 = (new cljs.core.List(null,0.05618,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_8),(5)),null,(1),null)),(2),null));
var result__14948__auto___15473 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15472);
if(cljs.core.truth_(result__14948__auto___15473)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.05618,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15472),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.05618,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15472),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15308){var t__14992__auto___15474 = e15308;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.05618,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null)),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15474,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15475 = (new cljs.core.List(null,0.053535,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_9),(6)),null,(1),null)),(2),null));
var result__14948__auto___15476 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15475);
if(cljs.core.truth_(result__14948__auto___15476)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.053535,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15475),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.053535,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15475),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15309){var t__14992__auto___15477 = e15309;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.053535,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15477,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15478 = (new cljs.core.List(null,0.05032,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_10),(6)),null,(1),null)),(2),null));
var result__14948__auto___15479 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15478);
if(cljs.core.truth_(result__14948__auto___15479)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.05032,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15478),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.05032,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15478),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15310){var t__14992__auto___15480 = e15310;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.05032,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15480,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15481 = (new cljs.core.List(null,0.036815,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_11),(6)),null,(1),null)),(2),null));
var result__14948__auto___15482 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15481);
if(cljs.core.truth_(result__14948__auto___15482)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.036815,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15481),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.036815,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15481),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15311){var t__14992__auto___15483 = e15311;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.036815,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15483,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15484 = (new cljs.core.List(null,0.040135,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_12),(6)),null,(1),null)),(2),null));
var result__14948__auto___15485 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15484);
if(cljs.core.truth_(result__14948__auto___15485)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.040135,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15484),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.040135,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15484),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15312){var t__14992__auto___15486 = e15312;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.040135,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15486,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15487 = (new cljs.core.List(null,0.046594,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_13),(6)),null,(1),null)),(2),null));
var result__14948__auto___15488 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15487);
if(cljs.core.truth_(result__14948__auto___15488)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.046594,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15487),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.046594,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15487),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15313){var t__14992__auto___15489 = e15313;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.046594,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15489,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15490 = (new cljs.core.List(null,0.037687,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_14),(6)),null,(1),null)),(2),null));
var result__14948__auto___15491 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15490);
if(cljs.core.truth_(result__14948__auto___15491)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.037687,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15490),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.037687,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15490),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15314){var t__14992__auto___15492 = e15314;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.037687,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15492,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15493 = (new cljs.core.List(null,0.043012,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_circunferencia.call(null,new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174).cljs$core$IFn$_invoke$arity$1(paciente_exemplo_15),(6)),null,(1),null)),(2),null));
var result__14948__auto___15494 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15493);
if(cljs.core.truth_(result__14948__auto___15494)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.043012,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15493),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.043012,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15493),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15315){var t__14992__auto___15495 = e15315;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.043012,cljs.core.list(new cljs.core.Symbol(null,"area-circunferencia","area-circunferencia",1717141257,null),cljs.core.list(new cljs.core.Keyword(null,"circunferencia-cintura","circunferencia-cintura",-1010545174),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null)),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15495,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"area med");

try{try{var values__14947__auto___15496 = (new cljs.core.List(null,0.012,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_1,(3)),null,(1),null)),(2),null));
var result__14948__auto___15497 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15496);
if(cljs.core.truth_(result__14948__auto___15497)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.012,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15496),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.012,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15496),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15316){var t__14992__auto___15498 = e15316;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.012,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15498,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15499 = (new cljs.core.List(null,0.0118,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_2,(4)),null,(1),null)),(2),null));
var result__14948__auto___15500 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15499);
if(cljs.core.truth_(result__14948__auto___15500)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0118,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15499),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0118,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15499),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15317){var t__14992__auto___15501 = e15317;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0118,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15501,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15502 = (new cljs.core.List(null,0.01107,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_3,(5)),null,(1),null)),(2),null));
var result__14948__auto___15503 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15502);
if(cljs.core.truth_(result__14948__auto___15503)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01107,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15502),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01107,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15502),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15318){var t__14992__auto___15504 = e15318;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01107,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15504,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15505 = (new cljs.core.List(null,0.010019,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_4,(6)),null,(1),null)),(2),null));
var result__14948__auto___15506 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15505);
if(cljs.core.truth_(result__14948__auto___15506)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010019,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15505),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010019,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15505),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15319){var t__14992__auto___15507 = e15319;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010019,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15507,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15508 = (new cljs.core.List(null,0.0104,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_5,(5)),null,(1),null)),(2),null));
var result__14948__auto___15509 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15508);
if(cljs.core.truth_(result__14948__auto___15509)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0104,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15508),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0104,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15508),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15320){var t__14992__auto___15510 = e15320;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0104,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15510,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15511 = (new cljs.core.List(null,0.0111,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_6,(4)),null,(1),null)),(2),null));
var result__14948__auto___15512 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15511);
if(cljs.core.truth_(result__14948__auto___15512)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0111,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15511),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0111,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15511),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15321){var t__14992__auto___15513 = e15321;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0111,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15513,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15514 = (new cljs.core.List(null,0.01,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_7,(3)),null,(1),null)),(2),null));
var result__14948__auto___15515 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15514);
if(cljs.core.truth_(result__14948__auto___15515)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15514),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15514),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15322){var t__14992__auto___15516 = e15322;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15516,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15517 = (new cljs.core.List(null,0.01,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_8,(2)),null,(1),null)),(2),null));
var result__14948__auto___15518 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15517);
if(cljs.core.truth_(result__14948__auto___15518)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15517),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15517),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15323){var t__14992__auto___15519 = e15323;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.01,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15519,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15520 = (new cljs.core.List(null,0.015,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_9,(3)),null,(1),null)),(2),null));
var result__14948__auto___15521 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15520);
if(cljs.core.truth_(result__14948__auto___15521)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.015,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15520),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.015,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15520),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15324){var t__14992__auto___15522 = e15324;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.015,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15522,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15523 = (new cljs.core.List(null,0.0133,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_10,(4)),null,(1),null)),(2),null));
var result__14948__auto___15524 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15523);
if(cljs.core.truth_(result__14948__auto___15524)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0133,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15523),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0133,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15523),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15325){var t__14992__auto___15525 = e15325;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0133,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15525,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15526 = (new cljs.core.List(null,0.00985,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_11,(5)),null,(1),null)),(2),null));
var result__14948__auto___15527 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15526);
if(cljs.core.truth_(result__14948__auto___15527)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.00985,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15526),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.00985,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15526),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15326){var t__14992__auto___15528 = e15326;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.00985,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15528,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15529 = (new cljs.core.List(null,0.011166,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_12,(6)),null,(1),null)),(2),null));
var result__14948__auto___15530 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15529);
if(cljs.core.truth_(result__14948__auto___15530)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.011166,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15529),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.011166,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15529),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15327){var t__14992__auto___15531 = e15327;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.011166,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15531,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15532 = (new cljs.core.List(null,0.010928,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_13,(6)),null,(1),null)),(2),null));
var result__14948__auto___15533 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15532);
if(cljs.core.truth_(result__14948__auto___15533)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010928,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15532),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010928,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15532),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15328){var t__14992__auto___15534 = e15328;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010928,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15534,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15535 = (new cljs.core.List(null,0.010645,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_14,(6)),null,(1),null)),(2),null));
var result__14948__auto___15536 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15535);
if(cljs.core.truth_(result__14948__auto___15536)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010645,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15535),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010645,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15535),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15329){var t__14992__auto___15537 = e15329;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010645,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15537,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15538 = (new cljs.core.List(null,0.010838,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.area_med.call(null,paciente_exemplo_15,(6)),null,(1),null)),(2),null));
var result__14948__auto___15539 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15538);
if(cljs.core.truth_(result__14948__auto___15539)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010838,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15538),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010838,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15538),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15330){var t__14992__auto___15540 = e15330;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.010838,cljs.core.list(new cljs.core.Symbol(null,"area-med","area-med",-968191064,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15540,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"RSP");

try{try{var values__14947__auto___15541 = (new cljs.core.List(null,417.347707,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_1,(6)),null,(1),null)),(2),null));
var result__14948__auto___15542 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15541);
if(cljs.core.truth_(result__14948__auto___15542)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),417.347707,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15541),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),417.347707,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15541),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15331){var t__14992__auto___15543 = e15331;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),417.347707,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15543,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15544 = (new cljs.core.List(null,441.970442,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_2,(6)),null,(1),null)),(2),null));
var result__14948__auto___15545 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15544);
if(cljs.core.truth_(result__14948__auto___15545)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),441.970442,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15544),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),441.970442,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15544),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15332){var t__14992__auto___15546 = e15332;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),441.970442,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15546,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15547 = (new cljs.core.List(null,369.087447,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_3,(6)),null,(1),null)),(2),null));
var result__14948__auto___15548 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15547);
if(cljs.core.truth_(result__14948__auto___15548)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),369.087447,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15547),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),369.087447,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15547),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15333){var t__14992__auto___15549 = e15333;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),369.087447,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15549,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15550 = (new cljs.core.List(null,407.161257,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_4,(6)),null,(1),null)),(2),null));
var result__14948__auto___15551 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15550);
if(cljs.core.truth_(result__14948__auto___15551)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),407.161257,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15550),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),407.161257,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15550),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15334){var t__14992__auto___15552 = e15334;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),407.161257,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15552,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15553 = (new cljs.core.List(null,418.187271,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_5,(6)),null,(1),null)),(2),null));
var result__14948__auto___15554 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15553);
if(cljs.core.truth_(result__14948__auto___15554)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),418.187271,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15553),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),418.187271,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15553),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15335){var t__14992__auto___15555 = e15335;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),418.187271,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15555,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15556 = (new cljs.core.List(null,454.431096,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_6,(6)),null,(1),null)),(2),null));
var result__14948__auto___15557 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15556);
if(cljs.core.truth_(result__14948__auto___15557)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),454.431096,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15556),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),454.431096,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15556),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15336){var t__14992__auto___15558 = e15336;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),454.431096,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15558,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15559 = (new cljs.core.List(null,415.00285,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_7,(6)),null,(1),null)),(2),null));
var result__14948__auto___15560 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15559);
if(cljs.core.truth_(result__14948__auto___15560)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),415.00285,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15559),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),415.00285,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15559),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15337){var t__14992__auto___15561 = e15337;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),415.00285,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15561,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15562 = (new cljs.core.List(null,362.646744,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_8,(6)),null,(1),null)),(2),null));
var result__14948__auto___15563 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15562);
if(cljs.core.truth_(result__14948__auto___15563)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),362.646744,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15562),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),362.646744,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15562),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15338){var t__14992__auto___15564 = e15338;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),362.646744,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15564,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15565 = (new cljs.core.List(null,451.703187,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_9,(6)),null,(1),null)),(2),null));
var result__14948__auto___15566 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15565);
if(cljs.core.truth_(result__14948__auto___15566)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),451.703187,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15565),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),451.703187,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15565),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15339){var t__14992__auto___15567 = e15339;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),451.703187,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15567,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15568 = (new cljs.core.List(null,395.779311,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_10,(6)),null,(1),null)),(2),null));
var result__14948__auto___15569 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15568);
if(cljs.core.truth_(result__14948__auto___15569)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),395.779311,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15568),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),395.779311,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15568),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15340){var t__14992__auto___15570 = e15340;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),395.779311,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15570,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15571 = (new cljs.core.List(null,298.206894,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_11,(6)),null,(1),null)),(2),null));
var result__14948__auto___15572 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15571);
if(cljs.core.truth_(result__14948__auto___15572)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),298.206894,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15571),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),298.206894,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15571),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15341){var t__14992__auto___15573 = e15341;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),298.206894,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15573,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15574 = (new cljs.core.List(null,333.342023,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_12,(6)),null,(1),null)),(2),null));
var result__14948__auto___15575 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15574);
if(cljs.core.truth_(result__14948__auto___15575)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),333.342023,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15574),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),333.342023,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15574),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15342){var t__14992__auto___15576 = e15342;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),333.342023,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15576,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15577 = (new cljs.core.List(null,408.619457,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_13,(6)),null,(1),null)),(2),null));
var result__14948__auto___15578 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15577);
if(cljs.core.truth_(result__14948__auto___15578)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),408.619457,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15577),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),408.619457,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15577),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15343){var t__14992__auto___15579 = e15343;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),408.619457,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15579,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15580 = (new cljs.core.List(null,371.050365,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_14,(6)),null,(1),null)),(2),null));
var result__14948__auto___15581 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15580);
if(cljs.core.truth_(result__14948__auto___15581)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),371.050365,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15580),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),371.050365,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15580),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15344){var t__14992__auto___15582 = e15344;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),371.050365,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15582,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15583 = (new cljs.core.List(null,421.72335,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,paciente_exemplo_15,(6)),null,(1),null)),(2),null));
var result__14948__auto___15584 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15583);
if(cljs.core.truth_(result__14948__auto___15584)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),421.72335,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15583),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),421.72335,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15583),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15345){var t__14992__auto___15585 = e15345;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),421.72335,cljs.core.list(new cljs.core.Symbol(null,"rsp","rsp",1544443173,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15585,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"XCSP");

try{try{var values__14947__auto___15586 = (new cljs.core.List(null,32.656315,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_1,(6)),null,(1),null)),(2),null));
var result__14948__auto___15587 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15586);
if(cljs.core.truth_(result__14948__auto___15587)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),32.656315,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15586),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),32.656315,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15586),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15346){var t__14992__auto___15588 = e15346;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),32.656315,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-1","paciente-exemplo-1",1392318615,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15588,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15589 = (new cljs.core.List(null,43.874438,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_2,(6)),null,(1),null)),(2),null));
var result__14948__auto___15590 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15589);
if(cljs.core.truth_(result__14948__auto___15590)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),43.874438,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15589),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),43.874438,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15589),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15347){var t__14992__auto___15591 = e15347;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),43.874438,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-2","paciente-exemplo-2",-767338364,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15591,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15592 = (new cljs.core.List(null,32.310686,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_3,(6)),null,(1),null)),(2),null));
var result__14948__auto___15593 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15592);
if(cljs.core.truth_(result__14948__auto___15593)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),32.310686,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15592),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),32.310686,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15592),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15348){var t__14992__auto___15594 = e15348;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),32.310686,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-3","paciente-exemplo-3",739851988,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15594,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15595 = (new cljs.core.List(null,29.163065,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_4,(6)),null,(1),null)),(2),null));
var result__14948__auto___15596 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15595);
if(cljs.core.truth_(result__14948__auto___15596)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),29.163065,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15595),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),29.163065,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15595),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15349){var t__14992__auto___15597 = e15349;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),29.163065,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-4","paciente-exemplo-4",-287985720,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15597,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15598 = (new cljs.core.List(null,38.601902,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_5,(6)),null,(1),null)),(2),null));
var result__14948__auto___15599 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15598);
if(cljs.core.truth_(result__14948__auto___15599)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),38.601902,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15598),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),38.601902,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15598),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15350){var t__14992__auto___15600 = e15350;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),38.601902,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-5","paciente-exemplo-5",132986511,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15600,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15601 = (new cljs.core.List(null,43.707658,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_6,(6)),null,(1),null)),(2),null));
var result__14948__auto___15602 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15601);
if(cljs.core.truth_(result__14948__auto___15602)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),43.707658,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15601),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),43.707658,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15601),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15351){var t__14992__auto___15603 = e15351;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),43.707658,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-6","paciente-exemplo-6",1264828682,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15603,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15604 = (new cljs.core.List(null,35.062568,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_7,(6)),null,(1),null)),(2),null));
var result__14948__auto___15605 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15604);
if(cljs.core.truth_(result__14948__auto___15605)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),35.062568,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15604),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),35.062568,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15604),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15352){var t__14992__auto___15606 = e15352;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),35.062568,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-7","paciente-exemplo-7",1105504919,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15606,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15607 = (new cljs.core.List(null,45.243836,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_8,(6)),null,(1),null)),(2),null));
var result__14948__auto___15608 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15607);
if(cljs.core.truth_(result__14948__auto___15608)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),45.243836,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15607),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),45.243836,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15607),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15353){var t__14992__auto___15609 = e15353;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),45.243836,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-8","paciente-exemplo-8",628568621,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15609,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15610 = (new cljs.core.List(null,48.181673,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_9,(6)),null,(1),null)),(2),null));
var result__14948__auto___15611 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15610);
if(cljs.core.truth_(result__14948__auto___15611)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),48.181673,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15610),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),48.181673,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15610),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15354){var t__14992__auto___15612 = e15354;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),48.181673,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-9","paciente-exemplo-9",655906864,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15612,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15613 = (new cljs.core.List(null,34.194168,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_10,(6)),null,(1),null)),(2),null));
var result__14948__auto___15614 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15613);
if(cljs.core.truth_(result__14948__auto___15614)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),34.194168,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15613),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),34.194168,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15613),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15355){var t__14992__auto___15615 = e15355;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),34.194168,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-10","paciente-exemplo-10",-1933684906,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15615,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15616 = (new cljs.core.List(null,25.34489,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_11,(6)),null,(1),null)),(2),null));
var result__14948__auto___15617 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15616);
if(cljs.core.truth_(result__14948__auto___15617)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),25.34489,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15616),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),25.34489,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15616),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15356){var t__14992__auto___15618 = e15356;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),25.34489,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-11","paciente-exemplo-11",1946154969,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15618,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15619 = (new cljs.core.List(null,31.329138,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_12,(6)),null,(1),null)),(2),null));
var result__14948__auto___15620 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15619);
if(cljs.core.truth_(result__14948__auto___15620)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),31.329138,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15619),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),31.329138,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15619),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15357){var t__14992__auto___15621 = e15357;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),31.329138,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-12","paciente-exemplo-12",-1630852491,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15621,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15622 = (new cljs.core.List(null,33.643818,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_13,(6)),null,(1),null)),(2),null));
var result__14948__auto___15623 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15622);
if(cljs.core.truth_(result__14948__auto___15623)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),33.643818,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15622),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),33.643818,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15622),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15358){var t__14992__auto___15624 = e15358;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),33.643818,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-13","paciente-exemplo-13",1084707717,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15624,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto___15625 = (new cljs.core.List(null,37.703505,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_14,(6)),null,(1),null)),(2),null));
var result__14948__auto___15626 = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto___15625);
if(cljs.core.truth_(result__14948__auto___15626)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),37.703505,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto___15625),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),37.703505,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto___15625),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15359){var t__14992__auto___15627 = e15359;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),37.703505,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-14","paciente-exemplo-14",1960811824,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto___15627,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__14947__auto__ = (new cljs.core.List(null,45.608599,(new cljs.core.List(null,react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,paciente_exemplo_15,(6)),null,(1),null)),(2),null));
var result__14948__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__14947__auto__);
if(cljs.core.truth_(result__14948__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),45.608599,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14947__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),45.608599,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14947__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__14948__auto__;
}catch (e15360){var t__14992__auto__ = e15360;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),45.608599,cljs.core.list(new cljs.core.Symbol(null,"xcsp","xcsp",1668228143,null),new cljs.core.Symbol(null,"paciente-exemplo-15","paciente-exemplo-15",348844192,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14992__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

react_med.screens.paciente_relatorio.bioimpedance.bioimpedance_tests.cljs$lang$var = new cljs.core.Var(function(){return react_med.screens.paciente_relatorio.bioimpedance.bioimpedance_tests;},new cljs.core.Symbol("react-med.screens.paciente-relatorio.bioimpedance","bioimpedance-tests","react-med.screens.paciente-relatorio.bioimpedance/bioimpedance-tests",260212273,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"react-med.screens.paciente-relatorio.bioimpedance","react-med.screens.paciente-relatorio.bioimpedance",-796907509,null),new cljs.core.Symbol(null,"bioimpedance-tests","bioimpedance-tests",2094619265,null),"/home/jp/projects/react-med/src/react_med/screens/paciente_relatorio/bioimpedance.cljs",28,1,396,396,cljs.core.List.EMPTY,null,(cljs.core.truth_(react_med.screens.paciente_relatorio.bioimpedance.bioimpedance_tests)?react_med.screens.paciente_relatorio.bioimpedance.bioimpedance_tests.cljs$lang$test:null)]));

//# sourceMappingURL=bioimpedance.js.map
