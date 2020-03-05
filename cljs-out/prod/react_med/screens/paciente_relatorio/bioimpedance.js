// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.paciente_relatorio.bioimpedance');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('react_med.util');
react_med.screens.paciente_relatorio.bioimpedance.imc = (function react_med$screens$paciente_relatorio$bioimpedance$imc(p__19605){
var map__19606 = p__19605;
var map__19606__$1 = (((((!((map__19606 == null))))?(((((map__19606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19606):map__19606);
var peso = cljs.core.get.call(null,map__19606__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura = cljs.core.get.call(null,map__19606__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var $ = ((estatura * estatura) * 1.0E-4);
var $__$1 = (peso / $);
var $__$2 = $__$1.toFixed((1));
return parseFloat($__$2);
});
/**
 * (0.734*(estatura^2/resistencia))+(0.116*peso)+(0.096*reatancia)+(0.878*sexo)-4.03
 *   Ref: Lukaski e Bolonchuk
 */
react_med.screens.paciente_relatorio.bioimpedance.eq1_high_pa_fitness_and_athletestes = (function react_med$screens$paciente_relatorio$bioimpedance$eq1_high_pa_fitness_and_athletestes(p__19608){
var map__19609 = p__19608;
var map__19609__$1 = (((((!((map__19609 == null))))?(((((map__19609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19609):map__19609);
var estatura = cljs.core.get.call(null,map__19609__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19609__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19609__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19609__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
var sexo = cljs.core.get.call(null,map__19609__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var male_portion = ((cljs.core._EQ_.call(null,sexo,"Masculino"))?0.878:(0));
return (((((0.734 * ((estatura * estatura) / resistencia)) + (0.116 * peso)) + (0.096 * reatancia)) + male_portion) + -4.03);
});
/**
 * (0.62*(estatura^2/resistencia))+(0.21*peso)+(0.1*reatancia)+4.2
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq2_male_and_female_children_from_8_15_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq2_male_and_female_children_from_8_15_years(p__19611){
var map__19612 = p__19611;
var map__19612__$1 = (((((!((map__19612 == null))))?(((((map__19612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19612):map__19612);
var estatura = cljs.core.get.call(null,map__19612__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19612__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19612__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19612__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.62 * ((estatura * estatura) / resistencia)) + (0.21 * peso)) + (0.1 * reatancia)) + 4.2);
});
/**
 * (0.476*((estatura^2)/resistencia))+(0.295*peso)+5.49
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq3_females_18_30_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq3_females_18_30_years(p__19614){
var map__19615 = p__19614;
var map__19615__$1 = (((((!((map__19615 == null))))?(((((map__19615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19615):map__19615);
var estatura = cljs.core.get.call(null,map__19615__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19615__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19615__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
return (((0.476 * ((estatura * estatura) / resistencia)) + (0.295 * peso)) + 5.49);
});
/**
 * (0.666*((estatura^2)/resistencia))+(0.164*peso)+(0.217*reatancia)-8.78
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq4_females_active_18_35_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq4_females_active_18_35_years(p__19617){
var map__19618 = p__19617;
var map__19618__$1 = (((((!((map__19618 == null))))?(((((map__19618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19618):map__19618);
var estatura = cljs.core.get.call(null,map__19618__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19618__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19618__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19618__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.666 * ((estatura * estatura) / resistencia)) + (0.164 * peso)) + (0.217 * reatancia)) + -8.78);
});
/**
 * (0.536*((estatura^2)/resistencia))+(0.155*peso)+(0.075*reatancia)+2.87
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq5_females_30_50_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq5_females_30_50_years(p__19620){
var map__19621 = p__19620;
var map__19621__$1 = (((((!((map__19621 == null))))?(((((map__19621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19621):map__19621);
var estatura = cljs.core.get.call(null,map__19621__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19621__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19621__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19621__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.536 * ((estatura * estatura) / resistencia)) + (0.155 * peso)) + (0.075 * reatancia)) + 2.87);
});
/**
 * (0.47*((estatura^2)/resistencia))+(0.17*peso)+(0.03*reatancia)+5.7
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq6_females_50_70_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq6_females_50_70_years(p__19623){
var map__19624 = p__19623;
var map__19624__$1 = (((((!((map__19624 == null))))?(((((map__19624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19624):map__19624);
var estatura = cljs.core.get.call(null,map__19624__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19624__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19624__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19624__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.47 * ((estatura * estatura) / resistencia)) + (0.17 * peso)) + (0.03 * reatancia)) + 5.7);
});
/**
 * (0.485*((estatura^2)/resistencia))+(0.338*peso)+5.32
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq7_males_18_30_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq7_males_18_30_years(p__19626){
var map__19627 = p__19626;
var map__19627__$1 = (((((!((map__19627 == null))))?(((((map__19627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19627):map__19627);
var estatura = cljs.core.get.call(null,map__19627__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19627__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19627__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.485 * ((estatura * estatura) / resistencia));
var peso_portion = (0.338 * peso);
var constant = 5.32;
return ((estatura_resistencia_portion + peso_portion) + constant);
});
/**
 * (0.549*((estatura^2)/resistencia))+(0.163*peso)+(0.092*reatancia)+4.51
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq8_males_30_50_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq8_males_30_50_years(p__19629){
var map__19630 = p__19629;
var map__19630__$1 = (((((!((map__19630 == null))))?(((((map__19630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19630):map__19630);
var estatura = cljs.core.get.call(null,map__19630__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19630__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19630__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19630__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
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
react_med.screens.paciente_relatorio.bioimpedance.eq9_males_50_70_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq9_males_50_70_years(p__19632){
var map__19633 = p__19632;
var map__19633__$1 = (((((!((map__19633 == null))))?(((((map__19633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19633):map__19633);
var estatura = cljs.core.get.call(null,map__19633__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19633__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19633__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19633__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
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
react_med.screens.paciente_relatorio.bioimpedance.eq10_men = (function react_med$screens$paciente_relatorio$bioimpedance$eq10_men(p__19635){
var map__19636 = p__19635;
var map__19636__$1 = (((((!((map__19636 == null))))?(((((map__19636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19636):map__19636);
var estatura = cljs.core.get.call(null,map__19636__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19636__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19636__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
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
react_med.screens.paciente_relatorio.bioimpedance.eq11_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq11_women(p__19638){
var map__19639 = p__19638;
var map__19639__$1 = (((((!((map__19639 == null))))?(((((map__19639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19639):map__19639);
var estatura = cljs.core.get.call(null,map__19639__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19639__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19639__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.69 * ((estatura * estatura) / resistencia));
var peso_portion = (0.18 * peso);
var resistencia_portion = (0.02 * resistencia);
var constant = -9.53;
return (((estatura_resistencia_portion + peso_portion) + resistencia_portion) + constant);
});
/**
 * -4.104+(0.518*((estatura^2)/resistencia))+(0.13*reatancia)+(0.231*peso)+(4.23*sexo)
 *   Ref: Kyle et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq12_male_and_female_athletes = (function react_med$screens$paciente_relatorio$bioimpedance$eq12_male_and_female_athletes(p__19641){
var map__19642 = p__19641;
var map__19642__$1 = (((((!((map__19642 == null))))?(((((map__19642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19642):map__19642);
var estatura = cljs.core.get.call(null,map__19642__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19642__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19642__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19642__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
var sexo = cljs.core.get.call(null,map__19642__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var estatura_resistencia_portion = (0.518 * ((estatura * estatura) / resistencia));
var peso_portion = (0.231 * peso);
var reatancia_portion = (0.13 * reatancia);
var sexo_portion = ((cljs.core._EQ_.call(null,sexo,"Masculino"))?4.23:(0));
var constant = -4.104;
return ((((estatura_resistencia_portion + peso_portion) + reatancia_portion) + sexo_portion) + constant);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__19644#","p1__19644#",1799477460,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-matches","cljs.core/re-matches",2013608485,null),/\d{4}-\d{2}-\d{2}/,new cljs.core.Symbol(null,"p1__19644#","p1__19644#",1799477460,null)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-matches","cljs.core/re-matches",2013608485,null),/\d{4}-\d{2}-\d{2}/,new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__19644_SHARP_){
return cljs.core.re_matches.call(null,/\d{4}-\d{2}-\d{2}/,p1__19644_SHARP_);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Feminino","null","Masculino","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Feminino",null,"Masculino",null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","nascimento","react-med.screens.paciente-relatorio.bioimpedance/nascimento",892303912),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","data","react-med.screens.paciente-relatorio.bioimpedance/data",42462095),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["N\u00E3o Ativo","null","Ativo","null","Atleta","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["N\u00E3o Ativo",null,"Ativo",null,"Atleta",null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","avaliacao-info","react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info",325326502),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","idade","react-med.screens.paciente-relatorio.bioimpedance/idade",221243814),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","idade","react-med.screens.paciente-relatorio.bioimpedance/idade",221243814),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__19645){
return cljs.core.map_QMARK_.call(null,G__19645);
}),(function (G__19645){
return cljs.core.contains_QMARK_.call(null,G__19645,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
}),(function (G__19645){
return cljs.core.contains_QMARK_.call(null,G__19645,new cljs.core.Keyword(null,"idade","idade",297389078));
}),(function (G__19645){
return cljs.core.contains_QMARK_.call(null,G__19645,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455));
})], null),(function (G__19645){
return ((cljs.core.map_QMARK_.call(null,G__19645)) && (cljs.core.contains_QMARK_.call(null,G__19645,new cljs.core.Keyword(null,"sexo","sexo",-629407757))) && (cljs.core.contains_QMARK_.call(null,G__19645,new cljs.core.Keyword(null,"idade","idade",297389078))) && (cljs.core.contains_QMARK_.call(null,G__19645,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","idade","react-med.screens.paciente-relatorio.bioimpedance/idade",221243814),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sexo","sexo",-629407757),new cljs.core.Keyword(null,"idade","idade",297389078),new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"sexo","sexo",-629407757))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"idade","idade",297389078))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455)))], null),null])));
/**
 * [sex age activity]
 * [_ 8-15 _] 2
 * [_ _ ath] 12 ou 1?
 * [f 15-35 ati] 4
 * [f 15-30 _] 3
 * [f 30-50 _] 5
 * [f 50-70 _] 6
 * [m 15-30 _] 7
 * [m 30-50 _] 8
 * [m 50-70 _] 9
 * [m _ _] 10
 * [f _ _] 11
 */
react_med.screens.paciente_relatorio.bioimpedance.massa_livre_de_gordura = (function react_med$screens$paciente_relatorio$bioimpedance$massa_livre_de_gordura(p__19646){
var map__19647 = p__19646;
var map__19647__$1 = (((((!((map__19647 == null))))?(((((map__19647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19647):map__19647);
var avaliacao_info = map__19647__$1;
var sexo = cljs.core.get.call(null,map__19647__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var nascimento = cljs.core.get.call(null,map__19647__$1,new cljs.core.Keyword(null,"nascimento","nascimento",646565528));
var data = cljs.core.get.call(null,map__19647__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var atividade_fisica = cljs.core.get.call(null,map__19647__$1,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455));
if(react_med.util.validate.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","avaliacao-info","react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info",325326502),avaliacao_info,"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.")){
} else {
throw (new Error("Assert failed: (util/validate :react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info avaliacao-info \"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.\")"));
}

var _PERCENT_ = (function (){var idade = Math.floor((((((((new Date(data)) - (new Date(nascimento))) / (1000)) / (60)) / (60)) / (24)) / 365.25));
if(((((8) <= idade)) && ((idade <= (14))))){
return react_med.screens.paciente_relatorio.bioimpedance.eq2_male_and_female_children_from_8_15_years.call(null,avaliacao_info);
} else {
if(cljs.core._EQ_.call(null,atividade_fisica,"Atleta")){
return react_med.screens.paciente_relatorio.bioimpedance.eq12_male_and_female_athletes.call(null,avaliacao_info);
} else {
if(((cljs.core._EQ_.call(null,sexo,"Feminino")) && (((((15) <= idade)) && ((idade <= (34))))) && (cljs.core._EQ_.call(null,atividade_fisica,"Ativo")))){
return react_med.screens.paciente_relatorio.bioimpedance.eq4_females_active_18_35_years.call(null,avaliacao_info);
} else {
if(((cljs.core._EQ_.call(null,sexo,"Feminino")) && (((((15) <= idade)) && ((idade <= (29))))))){
return react_med.screens.paciente_relatorio.bioimpedance.eq3_females_18_30_years.call(null,avaliacao_info);
} else {
if(((cljs.core._EQ_.call(null,sexo,"Feminino")) && (((((30) <= idade)) && ((idade <= (49))))))){
return react_med.screens.paciente_relatorio.bioimpedance.eq5_females_30_50_years.call(null,avaliacao_info);
} else {
if(((cljs.core._EQ_.call(null,sexo,"Feminino")) && (((((50) <= idade)) && ((idade <= (69))))))){
return react_med.screens.paciente_relatorio.bioimpedance.eq6_females_50_70_years.call(null,avaliacao_info);
} else {
if(((cljs.core._EQ_.call(null,sexo,"Masculino")) && (((((15) <= idade)) && ((idade <= (29))))))){
return react_med.screens.paciente_relatorio.bioimpedance.eq7_males_18_30_years.call(null,avaliacao_info);
} else {
if(((cljs.core._EQ_.call(null,sexo,"Masculino")) && (((((30) <= idade)) && ((idade <= (49))))))){
return react_med.screens.paciente_relatorio.bioimpedance.eq8_males_30_50_years.call(null,avaliacao_info);
} else {
if(((cljs.core._EQ_.call(null,sexo,"Masculino")) && (((((50) <= idade)) && ((idade <= (69))))))){
return react_med.screens.paciente_relatorio.bioimpedance.eq9_males_50_70_years.call(null,avaliacao_info);
} else {
if(cljs.core._EQ_.call(null,sexo,"Masculino")){
return react_med.screens.paciente_relatorio.bioimpedance.eq10_men.call(null,avaliacao_info);
} else {
if(cljs.core._EQ_.call(null,sexo,"Feminino")){
return react_med.screens.paciente_relatorio.bioimpedance.eq11_women.call(null,avaliacao_info);
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
react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes = (function react_med$screens$paciente_relatorio$bioimpedance$eq13_tbw_male_and_female_athletes(p__19649){
var map__19650 = p__19649;
var map__19650__$1 = (((((!((map__19650 == null))))?(((((map__19650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19650):map__19650);
var estatura = cljs.core.get.call(null,map__19650__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19650__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19650__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var sexo = cljs.core.get.call(null,map__19650__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var constant = 0.286;
var estatura_resistencia_portion = (0.195 * ((estatura * estatura) / resistencia));
var peso_portion = (0.385 * peso);
var sexo_portion = ((cljs.core._EQ_.call(null,sexo,"Masculino"))?5.086:(0));
return (((constant + estatura_resistencia_portion) + peso_portion) + sexo_portion);
});
/**
 * (0.5561*((estatura^2)/resistencia))+(0.0955*peso)+1.726
 *   Ref: Kushner and Schoeller
 */
react_med.screens.paciente_relatorio.bioimpedance.eq14_tbw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq14_tbw_male_and_female(p__19652){
var map__19653 = p__19652;
var map__19653__$1 = (((((!((map__19653 == null))))?(((((map__19653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19653):map__19653);
var estatura = cljs.core.get.call(null,map__19653__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19653__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19653__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.5561 * ((estatura * estatura) / resistencia));
var peso_portion = (0.0955 * peso);
var constant = 1.726;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
/**
 * (0.446*((estatura^2)/resistencia))+(0.126*peso)+5.82
 *   Ref: Hannan et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq15_tbw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq15_tbw_male_and_female(p__19655){
var map__19656 = p__19655;
var map__19656__$1 = (((((!((map__19656 == null))))?(((((map__19656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19656):map__19656);
var estatura = cljs.core.get.call(null,map__19656__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19656__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19656__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.446 * ((estatura * estatura) / resistencia));
var peso_portion = (0.126 * peso);
var constant = 5.82;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
/**
 * (0.45*((estatura^2)/resistencia))+(0.18*peso)+1.2
 *   Ref: Sun et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq16_tbw_men = (function react_med$screens$paciente_relatorio$bioimpedance$eq16_tbw_men(p__19658){
var map__19659 = p__19658;
var map__19659__$1 = (((((!((map__19659 == null))))?(((((map__19659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19659):map__19659);
var estatura = cljs.core.get.call(null,map__19659__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19659__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19659__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.45 * ((estatura * estatura) / resistencia));
var peso_portion = (0.18 * peso);
var constant = 1.2;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
/**
 * (0.45*((estatura^2)/resistencia))+(0.11*peso)+3.75
 *   Ref: Sun et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq17_tbw_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq17_tbw_women(p__19661){
var map__19662 = p__19661;
var map__19662__$1 = (((((!((map__19662 == null))))?(((((map__19662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19662):map__19662);
var estatura = cljs.core.get.call(null,map__19662__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19662__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19662__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.45 * ((estatura * estatura) / resistencia));
var peso_portion = (0.11 * peso);
var constant = 3.75;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
react_med.screens.paciente_relatorio.bioimpedance.agua_corporal = (function react_med$screens$paciente_relatorio$bioimpedance$agua_corporal(p__19664){
var map__19665 = p__19664;
var map__19665__$1 = (((((!((map__19665 == null))))?(((((map__19665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19665):map__19665);
var avaliacao_info = map__19665__$1;
var data = cljs.core.get.call(null,map__19665__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var nascimento = cljs.core.get.call(null,map__19665__$1,new cljs.core.Keyword(null,"nascimento","nascimento",646565528));
var sexo = cljs.core.get.call(null,map__19665__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var atividade_fisica = cljs.core.get.call(null,map__19665__$1,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455));
if(react_med.util.validate.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","avaliacao-info","react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info",325326502),avaliacao_info,"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.")){
} else {
throw (new Error("Assert failed: (util/validate :react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info avaliacao-info \"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.\")"));
}

var _PERCENT_ = (function (){var idade = Math.floor((((((((new Date(data)) - (new Date(nascimento))) / (1000)) / (60)) / (60)) / (24)) / 365.25));
if(cljs.core._EQ_.call(null,atividade_fisica,"Atleta")){
return react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes.call(null,avaliacao_info);
} else {
if(cljs.core._EQ_.call(null,sexo,"Masculino")){
return react_med.screens.paciente_relatorio.bioimpedance.eq16_tbw_men.call(null,avaliacao_info);
} else {
if(cljs.core._EQ_.call(null,sexo,"Feminino")){
return react_med.screens.paciente_relatorio.bioimpedance.eq17_tbw_women.call(null,avaliacao_info);
} else {
return null;
}
}
}
})();
if(react_med.util.validate.call(null,cljs.core.pos_QMARK_,_PERCENT_,"funcao agua-corporal nao retornou um n\u00FAmero positivo.")){
} else {
throw (new Error("Assert failed: (util/validate pos? % \"funcao agua-corporal nao retornou um n\u00FAmero positivo.\")"));
}

return _PERCENT_;
});
/**
 * (0.123*((peso^2)/resistencia))+(0.0119*((peso^2)/reatancia))+6.15
 *   Ref: Sun et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq18_ecw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq18_ecw_male_and_female(p__19667){
var map__19668 = p__19667;
var map__19668__$1 = (((((!((map__19668 == null))))?(((((map__19668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19668):map__19668);
var resistencia = cljs.core.get.call(null,map__19668__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19668__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19668__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
var peso_resistencia_portion = (0.123 * ((peso * peso) / resistencia));
var peso_reatancia_portion = (0.0119 * ((peso * peso) / reatancia));
var constant = 6.15;
return ((peso_resistencia_portion + peso_reatancia_portion) + constant);
});
/**
 * -3.32+(0.2*((estatura^2)/resistencia))+(0.005*((estatura^2)/reatancia))+(0.08*peso)
 *   Ref: Sergi et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq20_ecw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq20_ecw_male_and_female(p__19670){
var map__19671 = p__19670;
var map__19671__$1 = (((((!((map__19671 == null))))?(((((map__19671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19671):map__19671);
var estatura = cljs.core.get.call(null,map__19671__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19671__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__19671__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__19671__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
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
 * TBW-ECW
 */
react_med.screens.paciente_relatorio.bioimpedance.eq19 = (function react_med$screens$paciente_relatorio$bioimpedance$eq19(avaliacao_info){
return (react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes.call(null,avaliacao_info) - react_med.screens.paciente_relatorio.bioimpedance.eq18_ecw_male_and_female.call(null,avaliacao_info));
});
/**
 * TBW-ECW
 */
react_med.screens.paciente_relatorio.bioimpedance.eq21 = (function react_med$screens$paciente_relatorio$bioimpedance$eq21(avaliacao_info){
return (react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes.call(null,avaliacao_info) - react_med.screens.paciente_relatorio.bioimpedance.eq20_ecw_male_and_female.call(null,avaliacao_info));
});
react_med.screens.paciente_relatorio.bioimpedance.agua_intracelular = (function react_med$screens$paciente_relatorio$bioimpedance$agua_intracelular(avaliacao_info){
return (react_med.screens.paciente_relatorio.bioimpedance.agua_corporal.call(null,avaliacao_info) - react_med.screens.paciente_relatorio.bioimpedance.agua_extracelular.call(null,avaliacao_info));
});
/**
 * (0.401*((estatura^2)/resistencia))+(3.825*sexo)-(0.071*idade)+5.102
 *   Ref: Janssen et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq22_smm_adult_men_and_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq22_smm_adult_men_and_women(p__19673){
var map__19674 = p__19673;
var map__19674__$1 = (((((!((map__19674 == null))))?(((((map__19674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19674):map__19674);
var estatura = cljs.core.get.call(null,map__19674__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__19674__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var sexo = cljs.core.get.call(null,map__19674__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var idade = cljs.core.get.call(null,map__19674__$1,new cljs.core.Keyword(null,"idade","idade",297389078));
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
react_med.screens.paciente_relatorio.bioimpedance.impedancia = (function react_med$screens$paciente_relatorio$bioimpedance$impedancia(p__19676){
var map__19677 = p__19676;
var map__19677__$1 = (((((!((map__19677 == null))))?(((((map__19677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19677):map__19677);
var avaliacao_info = map__19677__$1;
var resistencia = cljs.core.get.call(null,map__19677__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var reatancia = cljs.core.get.call(null,map__19677__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
if(react_med.util.validate.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","avaliacao-info","react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info",325326502),avaliacao_info,"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.")){
} else {
throw (new Error("Assert failed: (util/validate :react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info avaliacao-info \"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.\")"));
}

var _PERCENT_ = Math.sqrt(((resistencia * resistencia) + (reatancia * reatancia)));
if(react_med.util.validate.call(null,cljs.core.pos_QMARK_,_PERCENT_,"Fun\u00E7\u00E3o impedancia n\u00E3o retornou um n\u00FAmero positivo.")){
} else {
throw (new Error("Assert failed: (util/validate pos? % \"Fun\u00E7\u00E3o impedancia n\u00E3o retornou um n\u00FAmero positivo.\")"));
}

return _PERCENT_;
});
react_med.screens.paciente_relatorio.bioimpedance.angulo = (function react_med$screens$paciente_relatorio$bioimpedance$angulo(p__19679){
var map__19680 = p__19679;
var map__19680__$1 = (((((!((map__19680 == null))))?(((((map__19680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19680):map__19680);
var avaliacao_info = map__19680__$1;
var resistencia = cljs.core.get.call(null,map__19680__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var reatancia = cljs.core.get.call(null,map__19680__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return (Math.atan((reatancia / resistencia)) * ((180) / Math.PI));
});
react_med.screens.paciente_relatorio.bioimpedance.t = (function react_med$screens$paciente_relatorio$bioimpedance$t(avaliacao_info){
console.log("eq1-high-pa-fitness-and-athletestes",react_med.screens.paciente_relatorio.bioimpedance.eq1_high_pa_fitness_and_athletestes.call(null,avaliacao_info));

console.log("eq2-male-and-female-children-from-8-15-years",react_med.screens.paciente_relatorio.bioimpedance.eq2_male_and_female_children_from_8_15_years.call(null,avaliacao_info));

console.log("eq3-females-18-30-years",react_med.screens.paciente_relatorio.bioimpedance.eq3_females_18_30_years.call(null,avaliacao_info));

console.log("eq4-females-active-18-35-years",react_med.screens.paciente_relatorio.bioimpedance.eq4_females_active_18_35_years.call(null,avaliacao_info));

console.log("eq5-females-30-50-years",react_med.screens.paciente_relatorio.bioimpedance.eq5_females_30_50_years.call(null,avaliacao_info));

console.log("eq6-females-50-70-years",react_med.screens.paciente_relatorio.bioimpedance.eq6_females_50_70_years.call(null,avaliacao_info));

console.log("eq7-males-18-30-years",react_med.screens.paciente_relatorio.bioimpedance.eq7_males_18_30_years.call(null,avaliacao_info));

console.log("eq8-males-30-50-years",react_med.screens.paciente_relatorio.bioimpedance.eq8_males_30_50_years.call(null,avaliacao_info));

console.log("eq9-males-50-70-years",react_med.screens.paciente_relatorio.bioimpedance.eq9_males_50_70_years.call(null,avaliacao_info));

console.log("eq10-men",react_med.screens.paciente_relatorio.bioimpedance.eq10_men.call(null,avaliacao_info));

console.log("eq11-women",react_med.screens.paciente_relatorio.bioimpedance.eq11_women.call(null,avaliacao_info));

console.log("eq12-male-and-female-athletes",react_med.screens.paciente_relatorio.bioimpedance.eq12_male_and_female_athletes.call(null,avaliacao_info));

console.log("eq13-tbw-male-and-female-athletes",react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes.call(null,avaliacao_info));

console.log("eq14-tbw-male-and-female",react_med.screens.paciente_relatorio.bioimpedance.eq14_tbw_male_and_female.call(null,avaliacao_info));

console.log("eq15-tbw-male-and-female",react_med.screens.paciente_relatorio.bioimpedance.eq15_tbw_male_and_female.call(null,avaliacao_info));

console.log("eq16-tbw-men",react_med.screens.paciente_relatorio.bioimpedance.eq16_tbw_men.call(null,avaliacao_info));

console.log("eq17-tbw-women",react_med.screens.paciente_relatorio.bioimpedance.eq17_tbw_women.call(null,avaliacao_info));

console.log("eq18-ecw-male-and-female",react_med.screens.paciente_relatorio.bioimpedance.eq18_ecw_male_and_female.call(null,avaliacao_info));

console.log("eq19",react_med.screens.paciente_relatorio.bioimpedance.eq19.call(null,avaliacao_info));

console.log("eq19",react_med.screens.paciente_relatorio.bioimpedance.eq19.call(null,avaliacao_info));

console.log("eq20-ecw-male-and-female",react_med.screens.paciente_relatorio.bioimpedance.eq20_ecw_male_and_female.call(null,avaliacao_info));

console.log("eq21",react_med.screens.paciente_relatorio.bioimpedance.eq21.call(null,avaliacao_info));

console.log("eq22-smm-adult-men-and-women",react_med.screens.paciente_relatorio.bioimpedance.eq22_smm_adult_men_and_women.call(null,avaliacao_info));

return console.log("agua + musculoesqueletico + gordura, relativo ao peso",(((react_med.screens.paciente_relatorio.bioimpedance.agua_corporal.call(null,avaliacao_info) + react_med.screens.paciente_relatorio.bioimpedance.massa_musculoesqueletica.call(null,avaliacao_info)) + (new cljs.core.Keyword(null,"peso","peso",-5226095).cljs$core$IFn$_invoke$arity$1(avaliacao_info) - react_med.screens.paciente_relatorio.bioimpedance.massa_livre_de_gordura.call(null,avaliacao_info))) / new cljs.core.Keyword(null,"peso","peso",-5226095).cljs$core$IFn$_invoke$arity$1(avaliacao_info)));
});

//# sourceMappingURL=bioimpedance.js.map
