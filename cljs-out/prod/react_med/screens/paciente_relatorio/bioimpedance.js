// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.paciente_relatorio.bioimpedance');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('react_med.util');
/**
 * (0.734*(estatura^2/resistencia))+(0.116*peso)+(0.096*reatancia)+(0.878*sexo)-4.03
 *   Ref: Lukaski e Bolonchuk
 */
react_med.screens.paciente_relatorio.bioimpedance.eq1_high_pa_fitness_and_athletestes = (function react_med$screens$paciente_relatorio$bioimpedance$eq1_high_pa_fitness_and_athletestes(p__14627){
var map__14628 = p__14627;
var map__14628__$1 = (((((!((map__14628 == null))))?(((((map__14628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14628):map__14628);
var estatura = cljs.core.get.call(null,map__14628__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14628__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14628__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__14628__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
var sexo = cljs.core.get.call(null,map__14628__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var male_portion = ((cljs.core._EQ_.call(null,sexo,"Masculino"))?0.878:(0));
return (((((0.734 * ((estatura * estatura) / resistencia)) + (0.116 * peso)) + (0.096 * reatancia)) + male_portion) + -4.03);
});
/**
 * (0.62*(estatura^2/resistencia))+(0.21*peso)+(0.1*reatancia)+4.2
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq2_male_and_female_children_from_8_15_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq2_male_and_female_children_from_8_15_years(p__14630){
var map__14631 = p__14630;
var map__14631__$1 = (((((!((map__14631 == null))))?(((((map__14631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14631):map__14631);
var estatura = cljs.core.get.call(null,map__14631__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14631__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14631__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__14631__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.62 * ((estatura * estatura) / resistencia)) + (0.21 * peso)) + (0.1 * reatancia)) + 4.2);
});
/**
 * (0.476*((estatura^2)/resistencia))+(0.295*peso)+5.49
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq3_females_18_30_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq3_females_18_30_years(p__14633){
var map__14634 = p__14633;
var map__14634__$1 = (((((!((map__14634 == null))))?(((((map__14634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14634):map__14634);
var estatura = cljs.core.get.call(null,map__14634__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14634__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14634__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
return (((0.476 * ((estatura * estatura) / resistencia)) + (0.295 * peso)) + 5.49);
});
/**
 * (0.666*((estatura^2)/resistencia))+(0.164*peso)+(0.217*reatancia)-8.78
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq4_females_active_18_35_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq4_females_active_18_35_years(p__14636){
var map__14637 = p__14636;
var map__14637__$1 = (((((!((map__14637 == null))))?(((((map__14637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14637):map__14637);
var estatura = cljs.core.get.call(null,map__14637__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14637__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14637__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__14637__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.666 * ((estatura * estatura) / resistencia)) + (0.164 * peso)) + (0.217 * reatancia)) + -8.78);
});
/**
 * (0.536*((estatura^2)/resistencia))+(0.155*peso)+(0.075*reatancia)+2.87
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq5_females_30_50_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq5_females_30_50_years(p__14639){
var map__14640 = p__14639;
var map__14640__$1 = (((((!((map__14640 == null))))?(((((map__14640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14640):map__14640);
var estatura = cljs.core.get.call(null,map__14640__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14640__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14640__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__14640__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.536 * ((estatura * estatura) / resistencia)) + (0.155 * peso)) + (0.075 * reatancia)) + 2.87);
});
/**
 * (0.47*((estatura^2)/resistencia))+(0.17*peso)+(0.03*reatancia)+5.7
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq6_females_50_70_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq6_females_50_70_years(p__14642){
var map__14643 = p__14642;
var map__14643__$1 = (((((!((map__14643 == null))))?(((((map__14643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14643):map__14643);
var estatura = cljs.core.get.call(null,map__14643__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14643__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14643__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__14643__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return ((((0.47 * ((estatura * estatura) / resistencia)) + (0.17 * peso)) + (0.03 * reatancia)) + 5.7);
});
/**
 * (0.485*((estatura^2)/resistencia))+(0.338*peso)+5.32
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq7_males_18_30_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq7_males_18_30_years(p__14645){
var map__14646 = p__14645;
var map__14646__$1 = (((((!((map__14646 == null))))?(((((map__14646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14646):map__14646);
var estatura = cljs.core.get.call(null,map__14646__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14646__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14646__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.485 * ((estatura * estatura) / resistencia));
var peso_portion = (0.338 * peso);
var constant = 5.32;
return ((estatura_resistencia_portion + peso_portion) + constant);
});
/**
 * (0.549*((estatura^2)/resistencia))+(0.163*peso)+(0.092*reatancia)+4.51
 *   Ref: Lohman
 */
react_med.screens.paciente_relatorio.bioimpedance.eq8_males_30_50_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq8_males_30_50_years(p__14648){
var map__14649 = p__14648;
var map__14649__$1 = (((((!((map__14649 == null))))?(((((map__14649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14649):map__14649);
var estatura = cljs.core.get.call(null,map__14649__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14649__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14649__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__14649__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
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
react_med.screens.paciente_relatorio.bioimpedance.eq9_males_50_70_years = (function react_med$screens$paciente_relatorio$bioimpedance$eq9_males_50_70_years(p__14651){
var map__14652 = p__14651;
var map__14652__$1 = (((((!((map__14652 == null))))?(((((map__14652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14652):map__14652);
var estatura = cljs.core.get.call(null,map__14652__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14652__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14652__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__14652__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
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
react_med.screens.paciente_relatorio.bioimpedance.eq10_men = (function react_med$screens$paciente_relatorio$bioimpedance$eq10_men(p__14654){
var map__14655 = p__14654;
var map__14655__$1 = (((((!((map__14655 == null))))?(((((map__14655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14655):map__14655);
var estatura = cljs.core.get.call(null,map__14655__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14655__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14655__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
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
react_med.screens.paciente_relatorio.bioimpedance.eq11_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq11_women(p__14657){
var map__14658 = p__14657;
var map__14658__$1 = (((((!((map__14658 == null))))?(((((map__14658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14658):map__14658);
var estatura = cljs.core.get.call(null,map__14658__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14658__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14658__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
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
react_med.screens.paciente_relatorio.bioimpedance.eq12_male_and_female_athletes = (function react_med$screens$paciente_relatorio$bioimpedance$eq12_male_and_female_athletes(p__14660){
var map__14661 = p__14660;
var map__14661__$1 = (((((!((map__14661 == null))))?(((((map__14661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14661):map__14661);
var estatura = cljs.core.get.call(null,map__14661__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14661__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14661__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__14661__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
var sexo = cljs.core.get.call(null,map__14661__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var estatura_resistencia_portion = (0.518 * ((estatura * estatura) / resistencia));
var peso_portion = (0.231 * peso);
var reatancia_portion = (0.13 * reatancia);
var sexo_portion = ((cljs.core._EQ_.call(null,sexo,"Masculino"))?4.23:(0));
var constant = -4.104;
return ((((estatura_resistencia_portion + peso_portion) + reatancia_portion) + sexo_portion) + constant);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14663#","p1__14663#",446804803,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-matches","cljs.core/re-matches",2013608485,null),/\d{4}-\d{2}-\d{2}/,new cljs.core.Symbol(null,"p1__14663#","p1__14663#",446804803,null)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-matches","cljs.core/re-matches",2013608485,null),/\d{4}-\d{2}-\d{2}/,new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__14663_SHARP_){
return cljs.core.re_matches.call(null,/\d{4}-\d{2}-\d{2}/,p1__14663_SHARP_);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Feminino","null","Masculino","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Feminino",null,"Masculino",null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","nascimento","react-med.screens.paciente-relatorio.bioimpedance/nascimento",892303912),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","data","react-med.screens.paciente-relatorio.bioimpedance/data",42462095),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","date-string","react-med.screens.paciente-relatorio.bioimpedance/date-string",-1741172683));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["N\u00E3o Ativo","null","Ativo","null","Atleta","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["N\u00E3o Ativo",null,"Ativo",null,"Atleta",null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","avaliacao-info","react-med.screens.paciente-relatorio.bioimpedance/avaliacao-info",325326502),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","idade","react-med.screens.paciente-relatorio.bioimpedance/idade",221243814),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","sexo","react-med.screens.paciente-relatorio.bioimpedance/sexo",-917877757),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","idade","react-med.screens.paciente-relatorio.bioimpedance/idade",221243814),new cljs.core.Keyword("react-med.screens.paciente-relatorio.bioimpedance","atividade-fisica","react-med.screens.paciente-relatorio.bioimpedance/atividade-fisica",-13529999)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__14664){
return cljs.core.map_QMARK_.call(null,G__14664);
}),(function (G__14664){
return cljs.core.contains_QMARK_.call(null,G__14664,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
}),(function (G__14664){
return cljs.core.contains_QMARK_.call(null,G__14664,new cljs.core.Keyword(null,"idade","idade",297389078));
}),(function (G__14664){
return cljs.core.contains_QMARK_.call(null,G__14664,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455));
})], null),(function (G__14664){
return ((cljs.core.map_QMARK_.call(null,G__14664)) && (cljs.core.contains_QMARK_.call(null,G__14664,new cljs.core.Keyword(null,"sexo","sexo",-629407757))) && (cljs.core.contains_QMARK_.call(null,G__14664,new cljs.core.Keyword(null,"idade","idade",297389078))) && (cljs.core.contains_QMARK_.call(null,G__14664,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455))));
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
react_med.screens.paciente_relatorio.bioimpedance.massa_livre_de_gordura = (function react_med$screens$paciente_relatorio$bioimpedance$massa_livre_de_gordura(p__14665){
var map__14666 = p__14665;
var map__14666__$1 = (((((!((map__14666 == null))))?(((((map__14666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14666):map__14666);
var avaliacao_info = map__14666__$1;
var sexo = cljs.core.get.call(null,map__14666__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var nascimento = cljs.core.get.call(null,map__14666__$1,new cljs.core.Keyword(null,"nascimento","nascimento",646565528));
var data = cljs.core.get.call(null,map__14666__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var atividade_fisica = cljs.core.get.call(null,map__14666__$1,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455));
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
react_med.screens.paciente_relatorio.bioimpedance.eq13_tbw_male_and_female_athletes = (function react_med$screens$paciente_relatorio$bioimpedance$eq13_tbw_male_and_female_athletes(p__14668){
var map__14669 = p__14668;
var map__14669__$1 = (((((!((map__14669 == null))))?(((((map__14669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14669):map__14669);
var estatura = cljs.core.get.call(null,map__14669__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14669__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14669__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var sexo = cljs.core.get.call(null,map__14669__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
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
react_med.screens.paciente_relatorio.bioimpedance.eq14_tbw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq14_tbw_male_and_female(p__14671){
var map__14672 = p__14671;
var map__14672__$1 = (((((!((map__14672 == null))))?(((((map__14672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14672):map__14672);
var estatura = cljs.core.get.call(null,map__14672__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14672__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14672__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.5561 * ((estatura * estatura) / resistencia));
var peso_portion = (0.0955 * peso);
var constant = 1.726;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
/**
 * (0.446*((estatura^2)/resistencia))+(0.126*peso)+5.82
 *   Ref: Hannan et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq15_tbw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq15_tbw_male_and_female(p__14674){
var map__14675 = p__14674;
var map__14675__$1 = (((((!((map__14675 == null))))?(((((map__14675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14675):map__14675);
var estatura = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.446 * ((estatura * estatura) / resistencia));
var peso_portion = (0.126 * peso);
var constant = 5.82;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
/**
 * (0.45*((estatura^2)/resistencia))+(0.18*peso)+1.2
 *   Ref: Sun et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq16_tbw_men = (function react_med$screens$paciente_relatorio$bioimpedance$eq16_tbw_men(p__14677){
var map__14678 = p__14677;
var map__14678__$1 = (((((!((map__14678 == null))))?(((((map__14678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14678):map__14678);
var estatura = cljs.core.get.call(null,map__14678__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14678__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14678__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.45 * ((estatura * estatura) / resistencia));
var peso_portion = (0.18 * peso);
var constant = 1.2;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
/**
 * (0.45*((estatura^2)/resistencia))+(0.11*peso)+3.75
 *   Ref: Sun et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq17_tbw_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq17_tbw_women(p__14680){
var map__14681 = p__14680;
var map__14681__$1 = (((((!((map__14681 == null))))?(((((map__14681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14681):map__14681);
var estatura = cljs.core.get.call(null,map__14681__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14681__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14681__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var estatura_resistencia_portion = (0.45 * ((estatura * estatura) / resistencia));
var peso_portion = (0.11 * peso);
var constant = 3.75;
return ((constant + estatura_resistencia_portion) + peso_portion);
});
react_med.screens.paciente_relatorio.bioimpedance.agua_corporal = (function react_med$screens$paciente_relatorio$bioimpedance$agua_corporal(p__14683){
var map__14684 = p__14683;
var map__14684__$1 = (((((!((map__14684 == null))))?(((((map__14684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14684):map__14684);
var avaliacao_info = map__14684__$1;
var data = cljs.core.get.call(null,map__14684__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var nascimento = cljs.core.get.call(null,map__14684__$1,new cljs.core.Keyword(null,"nascimento","nascimento",646565528));
var sexo = cljs.core.get.call(null,map__14684__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var atividade_fisica = cljs.core.get.call(null,map__14684__$1,new cljs.core.Keyword(null,"atividade-fisica","atividade-fisica",-1420271455));
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
react_med.screens.paciente_relatorio.bioimpedance.eq18_ecw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq18_ecw_male_and_female(p__14686){
var map__14687 = p__14686;
var map__14687__$1 = (((((!((map__14687 == null))))?(((((map__14687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14687):map__14687);
var resistencia = cljs.core.get.call(null,map__14687__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14687__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__14687__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
var peso_resistencia_portion = (0.123 * ((peso * peso) / resistencia));
var peso_reatancia_portion = (0.0119 * ((peso * peso) / reatancia));
var constant = 6.15;
return ((peso_resistencia_portion + peso_reatancia_portion) + constant);
});
/**
 * -3.32+(0.2*((estatura^2)/resistencia))+(0.005*((estatura^2)/reatancia))+(0.08*peso)
 *   Ref: Sergi et al.
 */
react_med.screens.paciente_relatorio.bioimpedance.eq20_ecw_male_and_female = (function react_med$screens$paciente_relatorio$bioimpedance$eq20_ecw_male_and_female(p__14689){
var map__14690 = p__14689;
var map__14690__$1 = (((((!((map__14690 == null))))?(((((map__14690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14690):map__14690);
var estatura = cljs.core.get.call(null,map__14690__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14690__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var peso = cljs.core.get.call(null,map__14690__$1,new cljs.core.Keyword(null,"peso","peso",-5226095));
var reatancia = cljs.core.get.call(null,map__14690__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
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
react_med.screens.paciente_relatorio.bioimpedance.eq22_smm_adult_men_and_women = (function react_med$screens$paciente_relatorio$bioimpedance$eq22_smm_adult_men_and_women(p__14692){
var map__14693 = p__14692;
var map__14693__$1 = (((((!((map__14693 == null))))?(((((map__14693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14693):map__14693);
var estatura = cljs.core.get.call(null,map__14693__$1,new cljs.core.Keyword(null,"estatura","estatura",-685084760));
var resistencia = cljs.core.get.call(null,map__14693__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var sexo = cljs.core.get.call(null,map__14693__$1,new cljs.core.Keyword(null,"sexo","sexo",-629407757));
var idade = cljs.core.get.call(null,map__14693__$1,new cljs.core.Keyword(null,"idade","idade",297389078));
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
react_med.screens.paciente_relatorio.bioimpedance.impedancia = (function react_med$screens$paciente_relatorio$bioimpedance$impedancia(p__14695){
var map__14696 = p__14695;
var map__14696__$1 = (((((!((map__14696 == null))))?(((((map__14696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14696):map__14696);
var avaliacao_info = map__14696__$1;
var resistencia = cljs.core.get.call(null,map__14696__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var reatancia = cljs.core.get.call(null,map__14696__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
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
