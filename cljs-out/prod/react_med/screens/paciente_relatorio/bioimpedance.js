// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.screens.paciente_relatorio.bioimpedance');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('react_med.util');
react_med.screens.paciente_relatorio.bioimpedance.imc = (function react_med$screens$paciente_relatorio$bioimpedance$imc(p__25639){
var map__25640 = p__25639;
var map__25640__$1 = (((((!((map__25640 == null))))?(((((map__25640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25640):map__25640);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25640__$1,cljs.core.cst$kw$peso);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25640__$1,cljs.core.cst$kw$estatura);
var $ = ((estatura * estatura) * 1.0E-4);
var $__$1 = (peso / $);
var $__$2 = $__$1.toFixed((1));
return parseFloat($__$2);
});
/**
 * (0.734*(estatura^2/resistencia))+(0.116*peso)+(0.096*reatancia)+(0.878*sexo)-4.03
 *   Ref: Lukaski e Bolonchuk
 */
react_med.screens.paciente_relatorio.bioimpedance.eq1_high_pa_fitness_and_athletestes = (function react_med$screens$paciente_relatorio$bioimpedance$eq1_high_pa_fitness_and_athletestes(p__25642){
var map__25643 = p__25642;
var map__25643__$1 = (((((!((map__25643 == null))))?(((((map__25643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25643):map__25643);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25643__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25643__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25643__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25643__$1,cljs.core.cst$kw$reatancia);
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25643__$1,cljs.core.cst$kw$sexo);
var male_portion = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Masculino"))?0.878:(0));
return (((((0.734 * ((estatura * estatura) / resistencia)) + (0.116 * peso)) + (0.096 * reatancia)) + male_portion) + -4.03);
});
/**
 * (0.62*(estatura^2/resistencia))+(0.21*peso)+(0.1*reatancia)+4.2
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq2_male_and_female_children_from_8_15_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq2_male_and_female_children_from_8_15_years(p__25645){
var map__25646 = p__25645;
var map__25646__$1 = (((((!((map__25646 == null))))?(((((map__25646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25646):map__25646);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25646__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25646__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25646__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25646__$1,cljs.core.cst$kw$reatancia);
return ((((0.62 * ((estatura * estatura) / resistencia)) + (0.21 * peso)) + (0.1 * reatancia)) + 4.2);
});
/**
 * (0.476*((estatura^2)/resistencia))+(0.295*peso)+5.49
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq3_females_18_30_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq3_females_18_30_years(p__25648){
var map__25649 = p__25648;
var map__25649__$1 = (((((!((map__25649 == null))))?(((((map__25649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25649):map__25649);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25649__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25649__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25649__$1,cljs.core.cst$kw$peso);
return (((0.476 * ((estatura * estatura) / resistencia)) + (0.295 * peso)) + 5.49);
});
/**
 * (0.666*((estatura^2)/resistencia))+(0.164*peso)+(0.217*reatancia)-8.78
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq4_females_active_18_35_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq4_females_active_18_35_years(p__25651){
var map__25652 = p__25651;
var map__25652__$1 = (((((!((map__25652 == null))))?(((((map__25652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25652):map__25652);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25652__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25652__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25652__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25652__$1,cljs.core.cst$kw$reatancia);
return ((((0.666 * ((estatura * estatura) / resistencia)) + (0.164 * peso)) + (0.217 * reatancia)) + -8.78);
});
/**
 * (0.536*((estatura^2)/resistencia))+(0.155*peso)+(0.075*reatancia)+2.87
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq5_females_30_50_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq5_females_30_50_years(p__25654){
var map__25655 = p__25654;
var map__25655__$1 = (((((!((map__25655 == null))))?(((((map__25655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25655):map__25655);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25655__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25655__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25655__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25655__$1,cljs.core.cst$kw$reatancia);
return ((((0.536 * ((estatura * estatura) / resistencia)) + (0.155 * peso)) + (0.075 * reatancia)) + 2.87);
});
/**
 * (0.47*((estatura^2)/resistencia))+(0.17*peso)+(0.03*reatancia)+5.7
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq6_females_50_70_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq6_females_50_70_years(p__25657){
var map__25658 = p__25657;
var map__25658__$1 = (((((!((map__25658 == null))))?(((((map__25658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25658):map__25658);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25658__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25658__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25658__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25658__$1,cljs.core.cst$kw$reatancia);
return ((((0.47 * ((estatura * estatura) / resistencia)) + (0.17 * peso)) + (0.03 * reatancia)) + 5.7);
});
/**
 * (0.485*((estatura^2)/resistencia))+(0.338*peso)+5.32
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq7_males_18_30_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq7_males_18_30_years(p__25660){
var map__25661 = p__25660;
var map__25661__$1 = (((((!((map__25661 == null))))?(((((map__25661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25661):map__25661);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25661__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25661__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25661__$1,cljs.core.cst$kw$peso);
var estatura_resistencia_portion = (0.485 * ((estatura * estatura) / resistencia));
var peso_portion = (0.338 * peso);
var constant = 5.32;
return ((estatura_resistencia_portion + peso_portion) + constant);
});
/**
 * (0.549*((estatura^2)/resistencia))+(0.163*peso)+(0.092*reatancia)+4.51
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq8_males_30_50_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq8_males_30_50_years(p__25663){
var map__25664 = p__25663;
var map__25664__$1 = (((((!((map__25664 == null))))?(((((map__25664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25664):map__25664);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25664__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25664__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25664__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25664__$1,cljs.core.cst$kw$reatancia);
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
react_med.screens.paciente_relatorio.bioimpedance.eq9_males_50_70_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq9_males_50_70_years(p__25666){
var map__25667 = p__25666;
var map__25667__$1 = (((((!((map__25667 == null))))?(((((map__25667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25667):map__25667);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25667__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25667__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25667__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25667__$1,cljs.core.cst$kw$reatancia);
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
react_med.screens.paciente_relatorio.bioimpedance.eq10_men = (function react_med$screens$paciente_relatorio$bioimpedance$eq10_men(p__25669){
var map__25670 = p__25669;
var map__25670__$1 = (((((!((map__25670 == null))))?(((((map__25670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25670):map__25670);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25670__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25670__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25670__$1,cljs.core.cst$kw$peso);
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
react_med.screens.paciente_relatorio.bioimpedance.eq11_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq11_women(p__25672){
var map__25673 = p__25672;
var map__25673__$1 = (((((!((map__25673 == null))))?(((((map__25673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25673):map__25673);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25673__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25673__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25673__$1,cljs.core.cst$kw$peso);
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
react_med.screens.paciente_relatorio.bioimpedance.eq12_male_and_female_athletes = (function react_med$screens$paciente_relatorio$bioimpedance$eq12_male_and_female_athletes(p__25675){
var map__25676 = p__25675;
var map__25676__$1 = (((((!((map__25676 == null))))?(((((map__25676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25676):map__25676);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25676__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25676__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25676__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25676__$1,cljs.core.cst$kw$reatancia);
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25676__$1,cljs.core.cst$kw$sexo);
var estatura_resistencia_portion = (0.518 * ((estatura * estatura) / resistencia));
var peso_portion = (0.231 * peso);
var reatancia_portion = (0.13 * reatancia);
var sexo_portion = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Masculino"))?4.23:(0));
var constant = -4.104;
return ((((estatura_resistencia_portion + peso_portion) + reatancia_portion) + sexo_portion) + constant);
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_date_DASH_string,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25678_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_re_DASH_matches,/\d{4}-\d{2}-\d{2}/,cljs.core.cst$sym$p1__25678_SHARP_))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_re_DASH_matches,/\d{4}-\d{2}-\d{2}/,cljs.core.cst$sym$_PERCENT_))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__25678_SHARP_){
return cljs.core.re_matches(/\d{4}-\d{2}-\d{2}/,p1__25678_SHARP_);
})], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_sexo,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Feminino","null","Masculino","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Feminino",null,"Masculino",null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_nascimento,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_date_DASH_string,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_date_DASH_string);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_data,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_date_DASH_string,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_date_DASH_string);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_atividade_DASH_fisica,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["N\u00E3o Ativo","null","Ativo","null","Atleta","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["N\u00E3o Ativo",null,"Ativo",null,"Atleta",null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_avaliacao_DASH_info,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_sexo,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_idade,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_atividade_DASH_fisica], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_sexo,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_idade,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_atividade_DASH_fisica], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__25679){
return cljs.core.map_QMARK_(G__25679);
}),(function (G__25679){
return cljs.core.contains_QMARK_(G__25679,cljs.core.cst$kw$sexo);
}),(function (G__25679){
return cljs.core.contains_QMARK_(G__25679,cljs.core.cst$kw$idade);
}),(function (G__25679){
return cljs.core.contains_QMARK_(G__25679,cljs.core.cst$kw$atividade_DASH_fisica);
})], null),(function (G__25679){
return ((cljs.core.map_QMARK_(G__25679)) && (cljs.core.contains_QMARK_(G__25679,cljs.core.cst$kw$sexo)) && (cljs.core.contains_QMARK_(G__25679,cljs.core.cst$kw$idade)) && (cljs.core.contains_QMARK_(G__25679,cljs.core.cst$kw$atividade_DASH_fisica)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_sexo,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_idade,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_atividade_DASH_fisica], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sexo,cljs.core.cst$kw$idade,cljs.core.cst$kw$atividade_DASH_fisica], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$sexo)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$idade)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$atividade_DASH_fisica))], null),null])));
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
react_med.screens.paciente_relatorio.bioimpedance.massa_livre_de_gordura = (function react_med$screens$paciente_relatorio$bioimpedance$massa_livre_de_gordura(p__25680){
var map__25681 = p__25680;
var map__25681__$1 = (((((!((map__25681 == null))))?(((((map__25681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25681):map__25681);
var avaliacao_info = map__25681__$1;
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25681__$1,cljs.core.cst$kw$sexo);
var nascimento = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25681__$1,cljs.core.cst$kw$nascimento);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25681__$1,cljs.core.cst$kw$data);
var atividade_fisica = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25681__$1,cljs.core.cst$kw$atividade_DASH_fisica);
if(react_med.util.validate(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_avaliacao_DASH_info,avaliacao_info,"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.")){
} else {
throw (new Error("Assert failed: (util/validate :react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info avaliacao-info \"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.\")"));
}

var _PERCENT_ = (function (){var idade = Math.floor((((((((new Date(data)) - (new Date(nascimento))) / (1000)) / (60)) / (60)) / (24)) / 365.25));
if(((((8) <= idade)) && ((idade <= (14))))){
return react_med.screens.paciente_relatorio.bioimpedance.eq2_male_and_female_children_from_8_15_years(avaliacao_info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(atividade_fisica,"Atleta")){
return react_med.screens.paciente_relatorio.bioimpedance.eq12_male_and_female_athletes(avaliacao_info);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Feminino")) && (((((15) <= idade)) && ((idade <= (34))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(atividade_fisica,"Ativo")))){
return react_med.screens.paciente_relatorio.bioimpedance.eq4_females_active_18_35_years(avaliacao_info);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Feminino")) && (((((15) <= idade)) && ((idade <= (29))))))){
return react_med.screens.paciente_relatorio.bioimpedance.eq3_females_18_30_years(avaliacao_info);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Feminino")) && (((((30) <= idade)) && ((idade <= (49))))))){
return react_med.screens.paciente_relatorio.bioimpedance.eq5_females_30_50_years(avaliacao_info);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Feminino")) && (((((50) <= idade)) && ((idade <= (69))))))){
return react_med.screens.paciente_relatorio.bioimpedance.eq6_females_50_70_years(avaliacao_info);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Masculino")) && (((((15) <= idade)) && ((idade <= (29))))))){
return react_med.screens.paciente_relatorio.bioimpedance.eq7_males_18_30_years(avaliacao_info);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Masculino")) && (((((30) <= idade)) && ((idade <= (49))))))){
return react_med.screens.paciente_relatorio.bioimpedance.eq8_males_30_50_years(avaliacao_info);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Masculino")) && (((((50) <= idade)) && ((idade <= (69))))))){
return react_med.screens.paciente_relatorio.bioimpedance.eq9_males_50_70_years(avaliacao_info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Masculino")){
return react_med.screens.paciente_relatorio.bioimpedance.eq10_men(avaliacao_info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Feminino")){
return react_med.screens.paciente_relatorio.bioimpedance.eq11_women(avaliacao_info);
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
if(react_med.util.validate(cljs.core.pos_QMARK_,_PERCENT_,"funcao massa-livre-de-gordura nao retornou um n\u00FAmero positivo.")){
} else {
throw (new Error("Assert failed: (util/validate pos? % \"funcao massa-livre-de-gordura nao retornou um n\u00FAmero positivo.\")"));
}

return _PERCENT_;
});
/**
 * 0.286+(0.195*((estatura^2)/resistencia))+(0.385*peso)+(5.086*sexo)
 *   Ref: Matias et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes = (function react_med$screens$paciente_relatorio$bioimpedance$eq13_tbw_male_and_female_athletes(p__25683){
var map__25684 = p__25683;
var map__25684__$1 = (((((!((map__25684 == null))))?(((((map__25684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25684):map__25684);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25684__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25684__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25684__$1,cljs.core.cst$kw$peso);
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25684__$1,cljs.core.cst$kw$sexo);
var constant = 0.286;
var estatura_resistencia_portion = (0.195 * ((estatura * estatura) / resistencia));
var peso_portion = (0.385 * peso);
var sexo_portion = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Masculino"))?5.086:(0));
return (((constant + estatura_resistencia_portion) + peso_portion) + sexo_portion);
});
/**
 * (0.5561*((estatura^2)/resistencia))+(0.0955*peso)+1.726
 *   Ref: Kushner and Schoeller
 */
react_med.screens.paciente_relatorio.bioimpedance.eq14_tbw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq14_tbw_male_and_female(p__25686){
var map__25687 = p__25686;
var map__25687__$1 = (((((!((map__25687 == null))))?(((((map__25687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25687):map__25687);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25687__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25687__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25687__$1,cljs.core.cst$kw$peso);
var estatura_resistencia_portion = (0.5561 * ((estatura * estatura) / resistencia));
var peso_portion = (0.0955 * peso);
var constant = 1.726;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
/**
 * (0.446*((estatura^2)/resistencia))+(0.126*peso)+5.82
 *   Ref: Hannan et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq15_tbw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq15_tbw_male_and_female(p__25689){
var map__25690 = p__25689;
var map__25690__$1 = (((((!((map__25690 == null))))?(((((map__25690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25690):map__25690);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25690__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25690__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25690__$1,cljs.core.cst$kw$peso);
var estatura_resistencia_portion = (0.446 * ((estatura * estatura) / resistencia));
var peso_portion = (0.126 * peso);
var constant = 5.82;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
/**
 * (0.45*((estatura^2)/resistencia))+(0.18*peso)+1.2
 *   Ref: Sun et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq16_tbw_men = (function react_med$screens$paciente_relatorio$bioimpedance$eq16_tbw_men(p__25692){
var map__25693 = p__25692;
var map__25693__$1 = (((((!((map__25693 == null))))?(((((map__25693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25693):map__25693);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25693__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25693__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25693__$1,cljs.core.cst$kw$peso);
var estatura_resistencia_portion = (0.45 * ((estatura * estatura) / resistencia));
var peso_portion = (0.18 * peso);
var constant = 1.2;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
/**
 * (0.45*((estatura^2)/resistencia))+(0.11*peso)+3.75
 *   Ref: Sun et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq17_tbw_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq17_tbw_women(p__25695){
var map__25696 = p__25695;
var map__25696__$1 = (((((!((map__25696 == null))))?(((((map__25696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25696):map__25696);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25696__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25696__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25696__$1,cljs.core.cst$kw$peso);
var estatura_resistencia_portion = (0.45 * ((estatura * estatura) / resistencia));
var peso_portion = (0.11 * peso);
var constant = 3.75;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
react_med.screens.paciente_relatorio.bioimpedance.agua_corporal = (function react_med$screens$paciente_relatorio$bioimpedance$agua_corporal(p__25698){
var map__25699 = p__25698;
var map__25699__$1 = (((((!((map__25699 == null))))?(((((map__25699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25699):map__25699);
var avaliacao_info = map__25699__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25699__$1,cljs.core.cst$kw$data);
var nascimento = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25699__$1,cljs.core.cst$kw$nascimento);
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25699__$1,cljs.core.cst$kw$sexo);
var atividade_fisica = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25699__$1,cljs.core.cst$kw$atividade_DASH_fisica);
if(react_med.util.validate(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_avaliacao_DASH_info,avaliacao_info,"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.")){
} else {
throw (new Error("Assert failed: (util/validate :react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info avaliacao-info \"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.\")"));
}

var _PERCENT_ = (function (){var idade = Math.floor((((((((new Date(data)) - (new Date(nascimento))) / (1000)) / (60)) / (60)) / (24)) / 365.25));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(atividade_fisica,"Atleta")){
return react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes(avaliacao_info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Masculino")){
return react_med.screens.paciente_relatorio.bioimpedance.eq16_tbw_men(avaliacao_info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Feminino")){
return react_med.screens.paciente_relatorio.bioimpedance.eq17_tbw_women(avaliacao_info);
} else {
return null;
}
}
}
})();
if(react_med.util.validate(cljs.core.pos_QMARK_,_PERCENT_,"funcao agua-corporal nao retornou um n\u00FAmero positivo.")){
} else {
throw (new Error("Assert failed: (util/validate pos? % \"funcao agua-corporal nao retornou um n\u00FAmero positivo.\")"));
}

return _PERCENT_;
});
/**
 * (0.123*((peso^2)/resistencia))+(0.0119*((peso^2)/reatancia))+6.15
 *   Ref: Sun et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq18_ecw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq18_ecw_male_and_female(p__25701){
var map__25702 = p__25701;
var map__25702__$1 = (((((!((map__25702 == null))))?(((((map__25702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25702):map__25702);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25702__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25702__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25702__$1,cljs.core.cst$kw$reatancia);
var peso_resistencia_portion = (0.123 * ((peso * peso) / resistencia));
var peso_reatancia_portion = (0.0119 * ((peso * peso) / reatancia));
var constant = 6.15;
return ((peso_resistencia_portion + peso_reatancia_portion) + constant);
});
/**
 * -3.32+(0.2*((estatura^2)/resistencia))+(0.005*((estatura^2)/reatancia))+(0.08*peso)
 *   Ref: Sergi et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq20_ecw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq20_ecw_male_and_female(p__25704){
var map__25705 = p__25704;
var map__25705__$1 = (((((!((map__25705 == null))))?(((((map__25705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25705):map__25705);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25705__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25705__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25705__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25705__$1,cljs.core.cst$kw$reatancia);
var constant = -3.32;
var estatura_resistencia_portion = (0.2 * ((estatura * estatura) / resistencia));
var estatura_reatancia_portion = (0.005 * ((estatura * estatura) / reatancia));
var peso_portion = (0.08 * peso);
return (((constant + estatura_resistencia_portion) + estatura_reatancia_portion) + peso_portion);
});
react_med.screens.paciente_relatorio.bioimpedance.agua_extracelular = (function react_med$screens$paciente_relatorio$bioimpedance$agua_extracelular(avaliacao_info){
if(react_med.util.validate(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_avaliacao_DASH_info,avaliacao_info,"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.")){
} else {
throw (new Error("Assert failed: (util/validate :react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info avaliacao-info \"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.\")"));
}

var _PERCENT_ = react_med.screens.paciente_relatorio.bioimpedance.eq20_ecw_male_and_female(avaliacao_info);
if(react_med.util.validate(cljs.core.pos_QMARK_,_PERCENT_,"Funcao agua-extracelular n\u00E3o retornou um n\u00FAmero positivo.")){
} else {
throw (new Error("Assert failed: (util/validate pos? % \"Funcao agua-extracelular n\u00E3o retornou um n\u00FAmero positivo.\")"));
}

return _PERCENT_;
});
/**
 * TBW-ECW
 */
react_med.screens.paciente_relatorio.bioimpedance.eq19 = (function react_med$screens$paciente_relatorio$bioimpedance$eq19(avaliacao_info){
return (react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes(avaliacao_info) - react_med.screens.paciente_relatorio.bioimpedance.eq18_ecw_male_and_female(avaliacao_info));
});
/**
 * TBW-ECW
 */
react_med.screens.paciente_relatorio.bioimpedance.eq21 = (function react_med$screens$paciente_relatorio$bioimpedance$eq21(avaliacao_info){
return (react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes(avaliacao_info) - react_med.screens.paciente_relatorio.bioimpedance.eq20_ecw_male_and_female(avaliacao_info));
});
react_med.screens.paciente_relatorio.bioimpedance.agua_intracelular = (function react_med$screens$paciente_relatorio$bioimpedance$agua_intracelular(avaliacao_info){
return (react_med.screens.paciente_relatorio.bioimpedance.agua_corporal(avaliacao_info) - react_med.screens.paciente_relatorio.bioimpedance.agua_extracelular(avaliacao_info));
});
/**
 * (0.401*((estatura^2)/resistencia))+(3.825*sexo)-(0.071*idade)+5.102
 *   Ref: Janssen et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq22_smm_adult_men_and_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq22_smm_adult_men_and_women(p__25707){
var map__25708 = p__25707;
var map__25708__$1 = (((((!((map__25708 == null))))?(((((map__25708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25708):map__25708);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25708__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25708__$1,cljs.core.cst$kw$resistencia);
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25708__$1,cljs.core.cst$kw$sexo);
var idade = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25708__$1,cljs.core.cst$kw$idade);
var estatura_resistencia_portion = (0.401 * ((estatura * estatura) / resistencia));
var sexo_portion = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Masculino"))?3.825:(0));
var idade_portion = (-0.071 * idade);
var constant = 5.102;
return (((estatura_resistencia_portion + sexo_portion) + idade_portion) + constant);
});
react_med.screens.paciente_relatorio.bioimpedance.massa_musculoesqueletica = (function react_med$screens$paciente_relatorio$bioimpedance$massa_musculoesqueletica(avaliacao_info){
if(react_med.util.validate(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_avaliacao_DASH_info,avaliacao_info,"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.")){
} else {
throw (new Error("Assert failed: (util/validate :react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info avaliacao-info \"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.\")"));
}

var _PERCENT_ = react_med.screens.paciente_relatorio.bioimpedance.eq22_smm_adult_men_and_women(avaliacao_info);
if(react_med.util.validate(cljs.core.pos_QMARK_,_PERCENT_,"Fun\u00E7\u00E3o massa-musculoesqueletica n\u00E3o retornou um n\u00FAmero positivo.")){
} else {
throw (new Error("Assert failed: (util/validate pos? % \"Fun\u00E7\u00E3o massa-musculoesqueletica n\u00E3o retornou um n\u00FAmero positivo.\")"));
}

return _PERCENT_;
});
react_med.screens.paciente_relatorio.bioimpedance.impedancia = (function react_med$screens$paciente_relatorio$bioimpedance$impedancia(p__25710){
var map__25711 = p__25710;
var map__25711__$1 = (((((!((map__25711 == null))))?(((((map__25711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25711):map__25711);
var avaliacao_info = map__25711__$1;
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25711__$1,cljs.core.cst$kw$resistencia);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25711__$1,cljs.core.cst$kw$reatancia);
if(react_med.util.validate(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_avaliacao_DASH_info,avaliacao_info,"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.")){
} else {
throw (new Error("Assert failed: (util/validate :react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info avaliacao-info \"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.\")"));
}

var _PERCENT_ = (function (){var G__25713 = ((resistencia * resistencia) + (reatancia * reatancia));
return Math.sqrt(G__25713);
})();
if(react_med.util.validate(cljs.core.pos_QMARK_,_PERCENT_,"Fun\u00E7\u00E3o impedancia n\u00E3o retornou um n\u00FAmero positivo.")){
} else {
throw (new Error("Assert failed: (util/validate pos? % \"Fun\u00E7\u00E3o impedancia n\u00E3o retornou um n\u00FAmero positivo.\")"));
}

return _PERCENT_;
});
react_med.screens.paciente_relatorio.bioimpedance.angulo = (function react_med$screens$paciente_relatorio$bioimpedance$angulo(p__25714){
var map__25715 = p__25714;
var map__25715__$1 = (((((!((map__25715 == null))))?(((((map__25715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25715):map__25715);
var avaliacao_info = map__25715__$1;
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25715__$1,cljs.core.cst$kw$resistencia);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25715__$1,cljs.core.cst$kw$reatancia);
return ((function (){var G__25717 = (reatancia / resistencia);
return Math.atan(G__25717);
})() * ((180) / Math.PI));
});
react_med.screens.paciente_relatorio.bioimpedance.t = (function react_med$screens$paciente_relatorio$bioimpedance$t(avaliacao_info){
console.log("eq1-high-pa-fitness-and-athletestes",react_med.screens.paciente_relatorio.bioimpedance.eq1_high_pa_fitness_and_athletestes(avaliacao_info));

console.log("eq2-male-and-female-children-from-8-15-years",react_med.screens.paciente_relatorio.bioimpedance.eq2_male_and_female_children_from_8_15_years(avaliacao_info));

console.log("eq3-females-18-30-years",react_med.screens.paciente_relatorio.bioimpedance.eq3_females_18_30_years(avaliacao_info));

console.log("eq4-females-active-18-35-years",react_med.screens.paciente_relatorio.bioimpedance.eq4_females_active_18_35_years(avaliacao_info));

console.log("eq5-females-30-50-years",react_med.screens.paciente_relatorio.bioimpedance.eq5_females_30_50_years(avaliacao_info));

console.log("eq6-females-50-70-years",react_med.screens.paciente_relatorio.bioimpedance.eq6_females_50_70_years(avaliacao_info));

console.log("eq7-males-18-30-years",react_med.screens.paciente_relatorio.bioimpedance.eq7_males_18_30_years(avaliacao_info));

console.log("eq8-males-30-50-years",react_med.screens.paciente_relatorio.bioimpedance.eq8_males_30_50_years(avaliacao_info));

console.log("eq9-males-50-70-years",react_med.screens.paciente_relatorio.bioimpedance.eq9_males_50_70_years(avaliacao_info));

console.log("eq10-men",react_med.screens.paciente_relatorio.bioimpedance.eq10_men(avaliacao_info));

console.log("eq11-women",react_med.screens.paciente_relatorio.bioimpedance.eq11_women(avaliacao_info));

console.log("eq12-male-and-female-athletes",react_med.screens.paciente_relatorio.bioimpedance.eq12_male_and_female_athletes(avaliacao_info));

console.log("eq13-tbw-male-and-female-athletes",react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes(avaliacao_info));

console.log("eq14-tbw-male-and-female",react_med.screens.paciente_relatorio.bioimpedance.eq14_tbw_male_and_female(avaliacao_info));

console.log("eq15-tbw-male-and-female",react_med.screens.paciente_relatorio.bioimpedance.eq15_tbw_male_and_female(avaliacao_info));

console.log("eq16-tbw-men",react_med.screens.paciente_relatorio.bioimpedance.eq16_tbw_men(avaliacao_info));

console.log("eq17-tbw-women",react_med.screens.paciente_relatorio.bioimpedance.eq17_tbw_women(avaliacao_info));

console.log("eq18-ecw-male-and-female",react_med.screens.paciente_relatorio.bioimpedance.eq18_ecw_male_and_female(avaliacao_info));

console.log("eq19",react_med.screens.paciente_relatorio.bioimpedance.eq19(avaliacao_info));

console.log("eq19",react_med.screens.paciente_relatorio.bioimpedance.eq19(avaliacao_info));

console.log("eq20-ecw-male-and-female",react_med.screens.paciente_relatorio.bioimpedance.eq20_ecw_male_and_female(avaliacao_info));

console.log("eq21",react_med.screens.paciente_relatorio.bioimpedance.eq21(avaliacao_info));

console.log("eq22-smm-adult-men-and-women",react_med.screens.paciente_relatorio.bioimpedance.eq22_smm_adult_men_and_women(avaliacao_info));

return console.log("agua + musculoesqueletico + gordura, relativo ao peso",(((react_med.screens.paciente_relatorio.bioimpedance.agua_corporal(avaliacao_info) + react_med.screens.paciente_relatorio.bioimpedance.massa_musculoesqueletica(avaliacao_info)) + (cljs.core.cst$kw$peso.cljs$core$IFn$_invoke$arity$1(avaliacao_info) - react_med.screens.paciente_relatorio.bioimpedance.massa_livre_de_gordura(avaliacao_info))) / cljs.core.cst$kw$peso.cljs$core$IFn$_invoke$arity$1(avaliacao_info)));
});
