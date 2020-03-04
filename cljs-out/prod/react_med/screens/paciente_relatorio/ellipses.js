// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.screens.paciente_relatorio.ellipses');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('react_med.shell_components');
goog.require('react_med.util');
goog.require('react_med.screens.paciente_relatorio.tollerance_ellipse_component');
goog.require('react_med.screens.paciente_relatorio.ellipses_config');
react_med.screens.paciente_relatorio.ellipses.population_data_for_ellipse = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$population,"women-21-49-buffa",cljs.core.cst$kw$size,(754),cljs.core.cst$kw$rsp_DASH_mean,(492),cljs.core.cst$kw$rsp_DASH_sd,95.9,cljs.core.cst$kw$xcsp_DASH_mean,55.4,cljs.core.cst$kw$xcsp_DASH_sd,12.3,cljs.core.cst$kw$correlation_DASH_r,0.88], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$population,"men-21-49-buffa",cljs.core.cst$kw$size,(836),cljs.core.cst$kw$rsp_DASH_mean,402.4,cljs.core.cst$kw$rsp_DASH_sd,62.9,cljs.core.cst$kw$xcsp_DASH_mean,52.5,cljs.core.cst$kw$xcsp_DASH_sd,9.5,cljs.core.cst$kw$correlation_DASH_r,0.84], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$population,"women-65-100-saragat",cljs.core.cst$kw$size,(295),cljs.core.cst$kw$rsp_DASH_mean,(462),cljs.core.cst$kw$rsp_DASH_sd,80.1,cljs.core.cst$kw$xcsp_DASH_mean,47.9,cljs.core.cst$kw$xcsp_DASH_sd,11.2,cljs.core.cst$kw$correlation_DASH_r,0.75], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$population,"men-65-100-saragat",cljs.core.cst$kw$size,(265),cljs.core.cst$kw$rsp_DASH_mean,391.8,cljs.core.cst$kw$rsp_DASH_sd,57.9,cljs.core.cst$kw$xcsp_DASH_mean,42.6,cljs.core.cst$kw$xcsp_DASH_sd,9.9,cljs.core.cst$kw$correlation_DASH_r,0.6], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$population,"women-18-30-ibanez",cljs.core.cst$kw$size,(213),cljs.core.cst$kw$rsp_DASH_mean,332.7,cljs.core.cst$kw$rsp_DASH_sd,41.7,cljs.core.cst$kw$xcsp_DASH_mean,44.4,cljs.core.cst$kw$xcsp_DASH_sd,6.8,cljs.core.cst$kw$correlation_DASH_r,0.77], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$population,"men-18-30-ibanez",cljs.core.cst$kw$size,(227),cljs.core.cst$kw$rsp_DASH_mean,388.6,cljs.core.cst$kw$rsp_DASH_sd,(60),cljs.core.cst$kw$xcsp_DASH_mean,43.7,cljs.core.cst$kw$xcsp_DASH_sd,7.5,cljs.core.cst$kw$correlation_DASH_r,0.79], null)], null);
react_med.screens.paciente_relatorio.ellipses.tollerance_ellipses_series = (function react_med$screens$paciente_relatorio$ellipses$tollerance_ellipses_series(chosen_population){
var map__25897 = react_med.util.get_pred((function (p1__25896_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$population.cljs$core$IFn$_invoke$arity$1(p1__25896_SHARP_),chosen_population);
}),react_med.screens.paciente_relatorio.ellipses.population_data_for_ellipse);
var map__25897__$1 = (((((!((map__25897 == null))))?(((((map__25897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25897):map__25897);
var rsp_mean = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25897__$1,cljs.core.cst$kw$rsp_DASH_mean);
var xcsp_mean = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25897__$1,cljs.core.cst$kw$xcsp_DASH_mean);
var rsp_sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25897__$1,cljs.core.cst$kw$rsp_DASH_sd);
var xcsp_sd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25897__$1,cljs.core.cst$kw$xcsp_DASH_sd);
var correlation_r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25897__$1,cljs.core.cst$kw$correlation_DASH_r);
var vec__25898 = react_med.screens.paciente_relatorio.tollerance_ellipse_component.tolerance_ellipses_params(rsp_sd,xcsp_sd,correlation_r);
var vec__25901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25898,(0),null);
var tol_50_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25901,(0),null);
var tol_75_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25901,(1),null);
var tol_95_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25901,(2),null);
var vec__25904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25898,(1),null);
var tol_50_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25904,(0),null);
var tol_75_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25904,(1),null);
var tol_95_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25904,(2),null);
var rotation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25898,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse("95% Toler\u00E2ncia",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rsp_mean,xcsp_mean], null),tol_95_x,tol_95_y,rotation),react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse("75% Toler\u00E2ncia",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rsp_mean,xcsp_mean], null),tol_75_x,tol_75_y,rotation),react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse("50% Toler\u00E2ncia",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rsp_mean,xcsp_mean], null),tol_50_x,tol_50_y,rotation)], null);
});
var G__25908_25912 = cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_SLASH_tollerance_DASH_ellipses_DASH_series;
var G__25909_25913 = cljs.core.cst$kw$_LT__DASH_;
var G__25910_25914 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_DASH_config_SLASH_chosen_DASH_population], null);
var G__25911_25915 = react_med.screens.paciente_relatorio.ellipses.tollerance_ellipses_series;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__25908_25912,G__25909_25913,G__25910_25914,G__25911_25915) : re_frame.core.reg_sub.call(null,G__25908_25912,G__25909_25913,G__25910_25914,G__25911_25915));
react_med.screens.paciente_relatorio.ellipses.filter_selected = (function react_med$screens$paciente_relatorio$ellipses$filter_selected(avals,avals_checked){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$checked_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25916){
var map__25917 = p__25916;
var map__25917__$1 = (((((!((map__25917 == null))))?(((((map__25917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25917):map__25917);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25917__$1,cljs.core.cst$kw$id);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25917__$1,cljs.core.cst$kw$reatancia);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25917__$1,cljs.core.cst$kw$resistencia);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25917__$1,cljs.core.cst$kw$data);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$data,react_med.util.yyyy_mm_dd__GT_dd_mm_yyyy(data),cljs.core.cst$kw$reatancia,reatancia,cljs.core.cst$kw$resistencia,resistencia,cljs.core.cst$kw$checked_QMARK_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(avals_checked,id)], null);
}),avals));
});
/**
 * Returns points in the chart like [paciente-name [p1x p1y] [p2x p2y]]
 */
react_med.screens.paciente_relatorio.ellipses.pacientes_avaliacoes_pontos = (function react_med$screens$paciente_relatorio$ellipses$pacientes_avaliacoes_pontos(p__25922){
var vec__25923 = p__25922;
var pacientes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25923,(0),null);
var avals_checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25923,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25923,pacientes,avals_checked){
return (function (p__25926){
var map__25927 = p__25926;
var map__25927__$1 = (((((!((map__25927 == null))))?(((((map__25927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25927):map__25927);
var nome = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25927__$1,cljs.core.cst$kw$nome);
var avaliacoes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25927__$1,cljs.core.cst$kw$avaliacoes);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nome], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__25927,map__25927__$1,nome,avaliacoes,vec__25923,pacientes,avals_checked){
return (function (p__25929){
var map__25930 = p__25929;
var map__25930__$1 = (((((!((map__25930 == null))))?(((((map__25930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25930):map__25930);
var resistencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25930__$1,cljs.core.cst$kw$resistencia);
var reatancia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25930__$1,cljs.core.cst$kw$reatancia);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resistencia,reatancia], null);
});})(map__25927,map__25927__$1,nome,avaliacoes,vec__25923,pacientes,avals_checked))
,avaliacoes)], null));
});})(vec__25923,pacientes,avals_checked))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__25923,pacientes,avals_checked){
return (function (p1__25921_SHARP_){
return cljs.core.seq(cljs.core.cst$kw$avaliacoes.cljs$core$IFn$_invoke$arity$1(p1__25921_SHARP_));
});})(vec__25923,pacientes,avals_checked))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25923,pacientes,avals_checked){
return (function (p1__25920_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__25920_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$avaliacoes], null),react_med.screens.paciente_relatorio.ellipses.filter_selected,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(avals_checked,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__25920_SHARP_),cljs.core.cst$kw$avals], null)));
});})(vec__25923,pacientes,avals_checked))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25923,pacientes,avals_checked){
return (function (p1__25919_SHARP_){
return cljs.core.select_keys(p1__25919_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$nome,cljs.core.cst$kw$avaliacoes], null));
});})(vec__25923,pacientes,avals_checked))
,pacientes))));
});
var G__25932_25938 = cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_SLASH_pacientes_DASH_avaliacoes_DASH_pontos;
var G__25933_25939 = cljs.core.cst$kw$_LT__DASH_;
var G__25934_25940 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$lista_DASH_pacientes_SLASH_pacientes], null);
var G__25935_25941 = cljs.core.cst$kw$_LT__DASH_;
var G__25936_25942 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_DASH_config_SLASH_avals_DASH_checked], null);
var G__25937_25943 = react_med.screens.paciente_relatorio.ellipses.pacientes_avaliacoes_pontos;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__25932_25938,G__25933_25939,G__25934_25940,G__25935_25941,G__25936_25942,G__25937_25943) : re_frame.core.reg_sub.call(null,G__25932_25938,G__25933_25939,G__25934_25940,G__25935_25941,G__25936_25942,G__25937_25943));
react_med.screens.paciente_relatorio.ellipses.ellipses_graph_series = (function react_med$screens$paciente_relatorio$ellipses$ellipses_graph_series(p__25944){
var vec__25945 = p__25944;
var ellipses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25945,(0),null);
var pacientes_pontos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25945,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ellipses,pacientes_pontos);
});
var G__25948_25954 = cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_SLASH_ellipses_DASH_graph_DASH_series;
var G__25949_25955 = cljs.core.cst$kw$_LT__DASH_;
var G__25950_25956 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_SLASH_tollerance_DASH_ellipses_DASH_series], null);
var G__25951_25957 = cljs.core.cst$kw$_LT__DASH_;
var G__25952_25958 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_SLASH_pacientes_DASH_avaliacoes_DASH_pontos], null);
var G__25953_25959 = react_med.screens.paciente_relatorio.ellipses.ellipses_graph_series;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__25948_25954,G__25949_25955,G__25950_25956,G__25951_25957,G__25952_25958,G__25953_25959) : re_frame.core.reg_sub.call(null,G__25948_25954,G__25949_25955,G__25950_25956,G__25951_25957,G__25952_25958,G__25953_25959));
react_med.screens.paciente_relatorio.ellipses.series_options = ({"0": ({"enableInteractivity": false, "lineWidth": (2), "pointSize": (0)}), "1": ({"enableInteractivity": false, "lineWidth": (2), "pointSize": (0)}), "2": ({"enableInteractivity": false, "lineWidth": (2), "pointSize": (0)}), "3": ({"pointShape": "triangle", "pointSize": (14)}), "4": ({"pointShape": "square", "pointSize": (14)}), "5": ({"pointShape": "diamond", "pointSize": (14)}), "6": ({"pointShape": "star", "pointSize": (14)}), "7": ({"pointShape": "polygon", "pointSize": (14)})});
react_med.screens.paciente_relatorio.ellipses.desktop_ellipses_chart = (function react_med$screens$paciente_relatorio$ellipses$desktop_ellipses_chart(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse_chart_component2,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,({"height": "100%", "width": "100%"}),cljs.core.cst$kw$series,(function (){var G__25960 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_SLASH_ellipses_DASH_graph_DASH_series], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__25960) : react_med.util._LT_sub.call(null,G__25960));
})(),cljs.core.cst$kw$options,({"hAxis": ({"textPosition": "in", "title": "Resist\u00EAncia"}), "vAxis": ({"textPosition": "in", "title": "Reat\u00E2ncia"}), "series": react_med.screens.paciente_relatorio.ellipses.series_options})], null)], null);
});
react_med.screens.paciente_relatorio.ellipses.mobile_ellipses_chart = (function react_med$screens$paciente_relatorio$ellipses$mobile_ellipses_chart(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse_chart_component2,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,({"height": "100%", "width": "100%"}),cljs.core.cst$kw$series,(function (){var G__25961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$screens$paciente_DASH_relatorio$ellipses_SLASH_ellipses_DASH_graph_DASH_series], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__25961) : react_med.util._LT_sub.call(null,G__25961));
})(),cljs.core.cst$kw$options,({"chartArea": ({"top": (0), "width": "100%", "height": "92.5%"}), "axisTitlesPosition": "in", "legend": ({"position": "bottom"}), "hAxis": ({"textPosition": "in", "title": "Resist\u00EAncia"}), "vAxis": ({"textPosition": "in", "title": "Reat\u00E2ncia"}), "series": react_med.screens.paciente_relatorio.ellipses.series_options})], null)], null);
});
react_med.screens.paciente_relatorio.ellipses.desktop_view = (function react_med$screens$paciente_relatorio$ellipses$desktop_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.desktop_ellipses_chart], null)], null)], null);
});
react_med.screens.paciente_relatorio.ellipses.top_bar = (function react_med$screens$paciente_relatorio$ellipses$top_bar(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25965 = arguments.length;
var i__4731__auto___25966 = (0);
while(true){
if((i__4731__auto___25966 < len__4730__auto___25965)){
args__4736__auto__.push((arguments[i__4731__auto___25966]));

var G__25967 = (i__4731__auto___25966 + (1));
i__4731__auto___25966 = G__25967;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.screens.paciente_relatorio.ellipses.top_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.screens.paciente_relatorio.ellipses.top_bar.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$top_DASH_bar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,({"minHeight": (48), "padding": "0 24px", "display": "flex", "alignItems": "center"})], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__25963_SHARP_,p2__25962_SHARP_){
return cljs.core.with_meta(p2__25962_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__25963_SHARP_], null));
}),children)], null);
});

react_med.screens.paciente_relatorio.ellipses.top_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.screens.paciente_relatorio.ellipses.top_bar.cljs$lang$applyTo = (function (seq25964){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25964));
});

react_med.screens.paciente_relatorio.ellipses.mobile_view = (function react_med$screens$paciente_relatorio$ellipses$mobile_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variation,(function (){var G__25968 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_top_DASH_bar_DASH_icon], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__25968) : react_med.util._LT_sub.call(null,G__25968));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.tabs_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$menu_DASH_options,(function (){var G__25969 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$routes_SLASH_tabs], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__25969) : react_med.util._LT_sub.call(null,G__25969));
})()], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$if_DASH_error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"erro"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.mobile_ellipses_chart], null)], null)], null)], null);
});
react_med.screens.paciente_relatorio.ellipses.view = (function react_med$screens$paciente_relatorio$ellipses$view(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("landscape",(function (){var G__25970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$orientation_SLASH_orientation], null);
return (react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1 ? react_med.util._LT_sub.cljs$core$IFn$_invoke$arity$1(G__25970) : react_med.util._LT_sub.call(null,G__25970));
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.mobile_view], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.desktop_view], null);
}
});
