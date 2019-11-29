// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.screens.paciente_relatorio.bioimpedance');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('react_med.util');
/**
 * (0.734*(estatura^2/resistencia))+(0.116*peso)+(0.096*reatancia)+(0.878*sexo)-4.03
 *   Ref: Lukaski e Bolonchuk
 */
react_med.screens.paciente_relatorio.bioimpedance.eq1_high_pa_fitness_and_athletestes = (function react_med$screens$paciente_relatorio$bioimpedance$eq1_high_pa_fitness_and_athletestes(p__15453){
var map__15454 = p__15453;
var map__15454__$1 = (((((!((map__15454 == null))))?(((((map__15454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15454):map__15454);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15454__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15454__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15454__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15454__$1,cljs.core.cst$kw$reatancia);
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15454__$1,cljs.core.cst$kw$sexo);
var male_portion = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Masculino"))?0.878:(0));
return (((((0.734 * ((estatura * estatura) / resistencia)) + (0.116 * peso)) + (0.096 * reatancia)) + male_portion) + -4.03);
});
/**
 * (0.62*(estatura^2/resistencia))+(0.21*peso)+(0.1*reatancia)+4.2
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq2_male_and_female_children_from_8_15_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq2_male_and_female_children_from_8_15_years(p__15456){
var map__15457 = p__15456;
var map__15457__$1 = (((((!((map__15457 == null))))?(((((map__15457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15457):map__15457);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15457__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15457__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15457__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15457__$1,cljs.core.cst$kw$reatancia);
return ((((0.62 * ((estatura * estatura) / resistencia)) + (0.21 * peso)) + (0.1 * reatancia)) + 4.2);
});
/**
 * (0.476*((estatura^2)/resistencia))+(0.295*peso)+5.49
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq3_females_18_30_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq3_females_18_30_years(p__15459){
var map__15460 = p__15459;
var map__15460__$1 = (((((!((map__15460 == null))))?(((((map__15460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15460):map__15460);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15460__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15460__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15460__$1,cljs.core.cst$kw$peso);
return (((0.476 * ((estatura * estatura) / resistencia)) + (0.295 * peso)) + 5.49);
});
/**
 * (0.666*((estatura^2)/resistencia))+(0.164*peso)+(0.217*reatancia)-8.78
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq4_females_active_18_35_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq4_females_active_18_35_years(p__15462){
var map__15463 = p__15462;
var map__15463__$1 = (((((!((map__15463 == null))))?(((((map__15463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15463):map__15463);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15463__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15463__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15463__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15463__$1,cljs.core.cst$kw$reatancia);
return ((((0.666 * ((estatura * estatura) / resistencia)) + (0.164 * peso)) + (0.217 * reatancia)) + -8.78);
});
/**
 * (0.536*((estatura^2)/resistencia))+(0.155*peso)+(0.075*reatancia)+2.87
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq5_females_30_50_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq5_females_30_50_years(p__15465){
var map__15466 = p__15465;
var map__15466__$1 = (((((!((map__15466 == null))))?(((((map__15466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15466):map__15466);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15466__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15466__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15466__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15466__$1,cljs.core.cst$kw$reatancia);
return ((((0.536 * ((estatura * estatura) / resistencia)) + (0.155 * peso)) + (0.075 * reatancia)) + 2.87);
});
/**
 * (0.47*((estatura^2)/resistencia))+(0.17*peso)+(0.03*reatancia)+5.7
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq6_females_50_70_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq6_females_50_70_years(p__15468){
var map__15469 = p__15468;
var map__15469__$1 = (((((!((map__15469 == null))))?(((((map__15469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15469):map__15469);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15469__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15469__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15469__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15469__$1,cljs.core.cst$kw$reatancia);
return ((((0.47 * ((estatura * estatura) / resistencia)) + (0.17 * peso)) + (0.03 * reatancia)) + 5.7);
});
/**
 * (0.485*((estatura^2)/resistencia))+(0.338*peso)+5.32
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq7_males_18_30_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq7_males_18_30_years(p__15471){
var map__15472 = p__15471;
var map__15472__$1 = (((((!((map__15472 == null))))?(((((map__15472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15472):map__15472);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15472__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15472__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15472__$1,cljs.core.cst$kw$peso);
var estatura_resistencia_portion = (0.485 * ((estatura * estatura) / resistencia));
var peso_portion = (0.338 * peso);
var constant = 5.32;
return ((estatura_resistencia_portion + peso_portion) + constant);
});
/**
 * (0.549*((estatura^2)/resistencia))+(0.163*peso)+(0.092*reatancia)+4.51
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq8_males_30_50_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq8_males_30_50_years(p__15474){
var map__15475 = p__15474;
var map__15475__$1 = (((((!((map__15475 == null))))?(((((map__15475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15475):map__15475);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15475__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15475__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15475__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15475__$1,cljs.core.cst$kw$reatancia);
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
react_med.screens.paciente_relatorio.bioimpedance.eq9_males_50_70_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq9_males_50_70_years(p__15477){
var map__15478 = p__15477;
var map__15478__$1 = (((((!((map__15478 == null))))?(((((map__15478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15478):map__15478);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15478__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15478__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15478__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15478__$1,cljs.core.cst$kw$reatancia);
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
react_med.screens.paciente_relatorio.bioimpedance.eq10_men = (function react_med$screens$paciente_relatorio$bioimpedance$eq10_men(p__15480){
var map__15481 = p__15480;
var map__15481__$1 = (((((!((map__15481 == null))))?(((((map__15481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15481):map__15481);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15481__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15481__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15481__$1,cljs.core.cst$kw$peso);
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
react_med.screens.paciente_relatorio.bioimpedance.eq11_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq11_women(p__15483){
var map__15484 = p__15483;
var map__15484__$1 = (((((!((map__15484 == null))))?(((((map__15484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15484):map__15484);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15484__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15484__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15484__$1,cljs.core.cst$kw$peso);
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
react_med.screens.paciente_relatorio.bioimpedance.eq12_male_and_female_athletes = (function react_med$screens$paciente_relatorio$bioimpedance$eq12_male_and_female_athletes(p__15486){
var map__15487 = p__15486;
var map__15487__$1 = (((((!((map__15487 == null))))?(((((map__15487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15487):map__15487);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15487__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15487__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15487__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15487__$1,cljs.core.cst$kw$reatancia);
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15487__$1,cljs.core.cst$kw$sexo);
var estatura_resistencia_portion = (0.518 * ((estatura * estatura) / resistencia));
var peso_portion = (0.231 * peso);
var reatancia_portion = (0.13 * reatancia);
var sexo_portion = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sexo,"Masculino"))?4.23:(0));
var constant = -4.104;
return ((((estatura_resistencia_portion + peso_portion) + reatancia_portion) + sexo_portion) + constant);
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_date_DASH_string,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15489_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_re_DASH_matches,/\d{4}-\d{2}-\d{2}/,cljs.core.cst$sym$p1__15489_SHARP_))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_re_DASH_matches,/\d{4}-\d{2}-\d{2}/,cljs.core.cst$sym$_PERCENT_))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__15489_SHARP_){
return cljs.core.re_matches(/\d{4}-\d{2}-\d{2}/,p1__15489_SHARP_);
})], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_sexo,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Feminino","null","Masculino","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Feminino",null,"Masculino",null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_nascimento,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_date_DASH_string,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_date_DASH_string);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_data,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_date_DASH_string,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_date_DASH_string);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_atividade_DASH_fisica,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["N\u00E3o Ativo","null","Ativo","null","Atleta","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["N\u00E3o Ativo",null,"Ativo",null,"Atleta",null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_avaliacao_DASH_info,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_sexo,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_idade,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_atividade_DASH_fisica], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_sexo,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_idade,cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_atividade_DASH_fisica], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__15490){
return cljs.core.map_QMARK_(G__15490);
}),(function (G__15490){
return cljs.core.contains_QMARK_(G__15490,cljs.core.cst$kw$sexo);
}),(function (G__15490){
return cljs.core.contains_QMARK_(G__15490,cljs.core.cst$kw$idade);
}),(function (G__15490){
return cljs.core.contains_QMARK_(G__15490,cljs.core.cst$kw$atividade_DASH_fisica);
})], null),(function (G__15490){
return ((cljs.core.map_QMARK_(G__15490)) && (cljs.core.contains_QMARK_(G__15490,cljs.core.cst$kw$sexo)) && (cljs.core.contains_QMARK_(G__15490,cljs.core.cst$kw$idade)) && (cljs.core.contains_QMARK_(G__15490,cljs.core.cst$kw$atividade_DASH_fisica)));
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
react_med.screens.paciente_relatorio.bioimpedance.massa_livre_de_gordura = (function react_med$screens$paciente_relatorio$bioimpedance$massa_livre_de_gordura(p__15491){
var map__15492 = p__15491;
var map__15492__$1 = (((((!((map__15492 == null))))?(((((map__15492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15492):map__15492);
var avaliacao_info = map__15492__$1;
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15492__$1,cljs.core.cst$kw$sexo);
var nascimento = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15492__$1,cljs.core.cst$kw$nascimento);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15492__$1,cljs.core.cst$kw$data);
var atividade_fisica = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15492__$1,cljs.core.cst$kw$atividade_DASH_fisica);
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
react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes = (function react_med$screens$paciente_relatorio$bioimpedance$eq13_tbw_male_and_female_athletes(p__15494){
var map__15495 = p__15494;
var map__15495__$1 = (((((!((map__15495 == null))))?(((((map__15495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15495):map__15495);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15495__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15495__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15495__$1,cljs.core.cst$kw$peso);
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15495__$1,cljs.core.cst$kw$sexo);
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
react_med.screens.paciente_relatorio.bioimpedance.eq14_tbw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq14_tbw_male_and_female(p__15497){
var map__15498 = p__15497;
var map__15498__$1 = (((((!((map__15498 == null))))?(((((map__15498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15498):map__15498);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15498__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15498__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15498__$1,cljs.core.cst$kw$peso);
var estatura_resistencia_portion = (0.5561 * ((estatura * estatura) / resistencia));
var peso_portion = (0.0955 * peso);
var constant = 1.726;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
/**
 * (0.446*((estatura^2)/resistencia))+(0.126*peso)+5.82
 *   Ref: Hannan et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq15_tbw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq15_tbw_male_and_female(p__15500){
var map__15501 = p__15500;
var map__15501__$1 = (((((!((map__15501 == null))))?(((((map__15501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15501):map__15501);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15501__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15501__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15501__$1,cljs.core.cst$kw$peso);
var estatura_resistencia_portion = (0.446 * ((estatura * estatura) / resistencia));
var peso_portion = (0.126 * peso);
var constant = 5.82;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
/**
 * (0.45*((estatura^2)/resistencia))+(0.18*peso)+1.2
 *   Ref: Sun et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq16_tbw_men = (function react_med$screens$paciente_relatorio$bioimpedance$eq16_tbw_men(p__15503){
var map__15504 = p__15503;
var map__15504__$1 = (((((!((map__15504 == null))))?(((((map__15504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15504):map__15504);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15504__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15504__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15504__$1,cljs.core.cst$kw$peso);
var estatura_resistencia_portion = (0.45 * ((estatura * estatura) / resistencia));
var peso_portion = (0.18 * peso);
var constant = 1.2;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
/**
 * (0.45*((estatura^2)/resistencia))+(0.11*peso)+3.75
 *   Ref: Sun et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq17_tbw_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq17_tbw_women(p__15506){
var map__15507 = p__15506;
var map__15507__$1 = (((((!((map__15507 == null))))?(((((map__15507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15507):map__15507);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15507__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15507__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15507__$1,cljs.core.cst$kw$peso);
var estatura_resistencia_portion = (0.45 * ((estatura * estatura) / resistencia));
var peso_portion = (0.11 * peso);
var constant = 3.75;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
react_med.screens.paciente_relatorio.bioimpedance.agua_corporal = (function react_med$screens$paciente_relatorio$bioimpedance$agua_corporal(p__15509){
var map__15510 = p__15509;
var map__15510__$1 = (((((!((map__15510 == null))))?(((((map__15510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15510):map__15510);
var avaliacao_info = map__15510__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15510__$1,cljs.core.cst$kw$data);
var nascimento = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15510__$1,cljs.core.cst$kw$nascimento);
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15510__$1,cljs.core.cst$kw$sexo);
var atividade_fisica = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15510__$1,cljs.core.cst$kw$atividade_DASH_fisica);
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
react_med.screens.paciente_relatorio.bioimpedance.eq18_ecw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq18_ecw_male_and_female(p__15512){
var map__15513 = p__15512;
var map__15513__$1 = (((((!((map__15513 == null))))?(((((map__15513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15513):map__15513);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15513__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15513__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15513__$1,cljs.core.cst$kw$reatancia);
var peso_resistencia_portion = (0.123 * ((peso * peso) / resistencia));
var peso_reatancia_portion = (0.0119 * ((peso * peso) / reatancia));
var constant = 6.15;
return ((peso_resistencia_portion + peso_reatancia_portion) + constant);
});
/**
 * -3.32+(0.2*((estatura^2)/resistencia))+(0.005*((estatura^2)/reatancia))+(0.08*peso)
 *   Ref: Sergi et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq20_ecw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq20_ecw_male_and_female(p__15515){
var map__15516 = p__15515;
var map__15516__$1 = (((((!((map__15516 == null))))?(((((map__15516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15516):map__15516);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15516__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15516__$1,cljs.core.cst$kw$resistencia);
var peso = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15516__$1,cljs.core.cst$kw$peso);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15516__$1,cljs.core.cst$kw$reatancia);
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
react_med.screens.paciente_relatorio.bioimpedance.eq22_smm_adult_men_and_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq22_smm_adult_men_and_women(p__15518){
var map__15519 = p__15518;
var map__15519__$1 = (((((!((map__15519 == null))))?(((((map__15519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15519):map__15519);
var estatura = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15519__$1,cljs.core.cst$kw$estatura);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15519__$1,cljs.core.cst$kw$resistencia);
var sexo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15519__$1,cljs.core.cst$kw$sexo);
var idade = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15519__$1,cljs.core.cst$kw$idade);
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
react_med.screens.paciente_relatorio.bioimpedance.impedancia = (function react_med$screens$paciente_relatorio$bioimpedance$impedancia(p__15521){
var map__15522 = p__15521;
var map__15522__$1 = (((((!((map__15522 == null))))?(((((map__15522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15522):map__15522);
var avaliacao_info = map__15522__$1;
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15522__$1,cljs.core.cst$kw$resistencia);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15522__$1,cljs.core.cst$kw$reatancia);
if(react_med.util.validate(cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$bioimpedance_SLASH_avaliacao_DASH_info,avaliacao_info,"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.")){
} else {
throw (new Error("Assert failed: (util/validate :react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info avaliacao-info \"Informa\u00E7\u00F5es de avalia\u00E7\u00E3o inv\u00E1lidas.\")"));
}

var _PERCENT_ = (function (){var G__15524 = ((resistencia * resistencia) + (reatancia * reatancia));
return Math.sqrt(G__15524);
})();
if(react_med.util.validate(cljs.core.pos_QMARK_,_PERCENT_,"Fun\u00E7\u00E3o impedancia n\u00E3o retornou um n\u00FAmero positivo.")){
} else {
throw (new Error("Assert failed: (util/validate pos? % \"Fun\u00E7\u00E3o impedancia n\u00E3o retornou um n\u00FAmero positivo.\")"));
}

return _PERCENT_;
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
