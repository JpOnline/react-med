// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.paciente_relatorio.ellipses');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('react_med.shell_components');
goog.require('react_med.util');
goog.require('react_med.screens.paciente_relatorio.tollerance_ellipse_component');
goog.require('react_med.screens.paciente_relatorio.ellipses_config');
react_med.screens.paciente_relatorio.ellipses.population_data_for_ellipse = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"population","population",-1209901867),"women-21-49-buffa",new cljs.core.Keyword(null,"size","size",1098693007),(754),new cljs.core.Keyword(null,"rsp-mean","rsp-mean",733542564),(492),new cljs.core.Keyword(null,"rsp-sd","rsp-sd",1061002629),95.9,new cljs.core.Keyword(null,"xcsp-mean","xcsp-mean",-1168783083),55.4,new cljs.core.Keyword(null,"xcsp-sd","xcsp-sd",633266882),12.3,new cljs.core.Keyword(null,"correlation-r","correlation-r",2086447628),0.88], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"population","population",-1209901867),"men-21-49-buffa",new cljs.core.Keyword(null,"size","size",1098693007),(836),new cljs.core.Keyword(null,"rsp-mean","rsp-mean",733542564),402.4,new cljs.core.Keyword(null,"rsp-sd","rsp-sd",1061002629),62.9,new cljs.core.Keyword(null,"xcsp-mean","xcsp-mean",-1168783083),52.5,new cljs.core.Keyword(null,"xcsp-sd","xcsp-sd",633266882),9.5,new cljs.core.Keyword(null,"correlation-r","correlation-r",2086447628),0.84], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"population","population",-1209901867),"women-65-100-saragat",new cljs.core.Keyword(null,"size","size",1098693007),(295),new cljs.core.Keyword(null,"rsp-mean","rsp-mean",733542564),(462),new cljs.core.Keyword(null,"rsp-sd","rsp-sd",1061002629),80.1,new cljs.core.Keyword(null,"xcsp-mean","xcsp-mean",-1168783083),47.9,new cljs.core.Keyword(null,"xcsp-sd","xcsp-sd",633266882),11.2,new cljs.core.Keyword(null,"correlation-r","correlation-r",2086447628),0.75], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"population","population",-1209901867),"men-65-100-saragat",new cljs.core.Keyword(null,"size","size",1098693007),(265),new cljs.core.Keyword(null,"rsp-mean","rsp-mean",733542564),391.8,new cljs.core.Keyword(null,"rsp-sd","rsp-sd",1061002629),57.9,new cljs.core.Keyword(null,"xcsp-mean","xcsp-mean",-1168783083),42.6,new cljs.core.Keyword(null,"xcsp-sd","xcsp-sd",633266882),9.9,new cljs.core.Keyword(null,"correlation-r","correlation-r",2086447628),0.6], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"population","population",-1209901867),"women-18-30-ibanez",new cljs.core.Keyword(null,"size","size",1098693007),(213),new cljs.core.Keyword(null,"rsp-mean","rsp-mean",733542564),332.7,new cljs.core.Keyword(null,"rsp-sd","rsp-sd",1061002629),41.7,new cljs.core.Keyword(null,"xcsp-mean","xcsp-mean",-1168783083),44.4,new cljs.core.Keyword(null,"xcsp-sd","xcsp-sd",633266882),6.8,new cljs.core.Keyword(null,"correlation-r","correlation-r",2086447628),0.77], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"population","population",-1209901867),"men-18-30-ibanez",new cljs.core.Keyword(null,"size","size",1098693007),(227),new cljs.core.Keyword(null,"rsp-mean","rsp-mean",733542564),388.6,new cljs.core.Keyword(null,"rsp-sd","rsp-sd",1061002629),(60),new cljs.core.Keyword(null,"xcsp-mean","xcsp-mean",-1168783083),43.7,new cljs.core.Keyword(null,"xcsp-sd","xcsp-sd",633266882),7.5,new cljs.core.Keyword(null,"correlation-r","correlation-r",2086447628),0.79], null)], null);
react_med.screens.paciente_relatorio.ellipses.tollerance_ellipses_series = (function react_med$screens$paciente_relatorio$ellipses$tollerance_ellipses_series(chosen_population){
var map__19849 = react_med.util.get_pred.call(null,(function (p1__19848_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"population","population",-1209901867).cljs$core$IFn$_invoke$arity$1(p1__19848_SHARP_),chosen_population);
}),react_med.screens.paciente_relatorio.ellipses.population_data_for_ellipse);
var map__19849__$1 = (((((!((map__19849 == null))))?(((((map__19849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19849):map__19849);
var rsp_mean = cljs.core.get.call(null,map__19849__$1,new cljs.core.Keyword(null,"rsp-mean","rsp-mean",733542564));
var xcsp_mean = cljs.core.get.call(null,map__19849__$1,new cljs.core.Keyword(null,"xcsp-mean","xcsp-mean",-1168783083));
var rsp_sd = cljs.core.get.call(null,map__19849__$1,new cljs.core.Keyword(null,"rsp-sd","rsp-sd",1061002629));
var xcsp_sd = cljs.core.get.call(null,map__19849__$1,new cljs.core.Keyword(null,"xcsp-sd","xcsp-sd",633266882));
var correlation_r = cljs.core.get.call(null,map__19849__$1,new cljs.core.Keyword(null,"correlation-r","correlation-r",2086447628));
var vec__19850 = react_med.screens.paciente_relatorio.tollerance_ellipse_component.tolerance_ellipses_params.call(null,rsp_sd,xcsp_sd,correlation_r);
var vec__19853 = cljs.core.nth.call(null,vec__19850,(0),null);
var tol_50_x = cljs.core.nth.call(null,vec__19853,(0),null);
var tol_75_x = cljs.core.nth.call(null,vec__19853,(1),null);
var tol_95_x = cljs.core.nth.call(null,vec__19853,(2),null);
var vec__19856 = cljs.core.nth.call(null,vec__19850,(1),null);
var tol_50_y = cljs.core.nth.call(null,vec__19856,(0),null);
var tol_75_y = cljs.core.nth.call(null,vec__19856,(1),null);
var tol_95_y = cljs.core.nth.call(null,vec__19856,(2),null);
var rotation = cljs.core.nth.call(null,vec__19850,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse.call(null,"95% Toler\u00E2ncia",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rsp_mean,xcsp_mean], null),tol_95_x,tol_95_y,rotation),react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse.call(null,"75% Toler\u00E2ncia",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rsp_mean,xcsp_mean], null),tol_75_x,tol_75_y,rotation),react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse.call(null,"50% Toler\u00E2ncia",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rsp_mean,xcsp_mean], null),tol_50_x,tol_50_y,rotation)], null);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses","tollerance-ellipses-series","react-med.screens.paciente-relatorio.ellipses/tollerance-ellipses-series",321830151),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses-config","chosen-population","react-med.screens.paciente-relatorio.ellipses-config/chosen-population",-970669786)], null),react_med.screens.paciente_relatorio.ellipses.tollerance_ellipses_series);
react_med.screens.paciente_relatorio.ellipses.filter_selected = (function react_med$screens$paciente_relatorio$ellipses$filter_selected(avals,avals_checked){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091),cljs.core.map.call(null,(function (p__19860){
var map__19861 = p__19860;
var map__19861__$1 = (((((!((map__19861 == null))))?(((((map__19861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19861):map__19861);
var id = cljs.core.get.call(null,map__19861__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var reatancia = cljs.core.get.call(null,map__19861__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
var resistencia = cljs.core.get.call(null,map__19861__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var data = cljs.core.get.call(null,map__19861__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"data","data",-232669377),react_med.util.yyyy_mm_dd__GT_dd_mm_yyyy.call(null,data),new cljs.core.Keyword(null,"reatancia","reatancia",1544866627),reatancia,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858),resistencia,new cljs.core.Keyword(null,"checked?","checked?",2024809091),cljs.core.get.call(null,avals_checked,id)], null);
}),avals));
});
/**
 * Returns points in the chart like [paciente-name [p1x p1y] [p2x p2y]]
 */
react_med.screens.paciente_relatorio.ellipses.pacientes_avaliacoes_pontos = (function react_med$screens$paciente_relatorio$ellipses$pacientes_avaliacoes_pontos(p__19866){
var vec__19867 = p__19866;
var pacientes = cljs.core.nth.call(null,vec__19867,(0),null);
var avals_checked = cljs.core.nth.call(null,vec__19867,(1),null);
return cljs.core.map.call(null,((function (vec__19867,pacientes,avals_checked){
return (function (p__19870){
var map__19871 = p__19870;
var map__19871__$1 = (((((!((map__19871 == null))))?(((((map__19871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19871):map__19871);
var nome = cljs.core.get.call(null,map__19871__$1,new cljs.core.Keyword(null,"nome","nome",1100401122));
var avaliacoes = cljs.core.get.call(null,map__19871__$1,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982));
return cljs.core.apply.call(null,cljs.core.concat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nome], null),cljs.core.mapv.call(null,((function (map__19871,map__19871__$1,nome,avaliacoes,vec__19867,pacientes,avals_checked){
return (function (p__19873){
var map__19874 = p__19873;
var map__19874__$1 = (((((!((map__19874 == null))))?(((((map__19874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19874):map__19874);
var resistencia = cljs.core.get.call(null,map__19874__$1,new cljs.core.Keyword(null,"resistencia","resistencia",1922766858));
var reatancia = cljs.core.get.call(null,map__19874__$1,new cljs.core.Keyword(null,"reatancia","reatancia",1544866627));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resistencia,reatancia], null);
});})(map__19871,map__19871__$1,nome,avaliacoes,vec__19867,pacientes,avals_checked))
,avaliacoes)], null));
});})(vec__19867,pacientes,avals_checked))
,cljs.core.filter.call(null,((function (vec__19867,pacientes,avals_checked){
return (function (p1__19865_SHARP_){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982).cljs$core$IFn$_invoke$arity$1(p1__19865_SHARP_));
});})(vec__19867,pacientes,avals_checked))
,cljs.core.map.call(null,((function (vec__19867,pacientes,avals_checked){
return (function (p1__19864_SHARP_){
return cljs.core.update_in.call(null,p1__19864_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null),react_med.screens.paciente_relatorio.ellipses.filter_selected,cljs.core.get_in.call(null,avals_checked,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__19864_SHARP_),new cljs.core.Keyword(null,"avals","avals",659695120)], null)));
});})(vec__19867,pacientes,avals_checked))
,cljs.core.map.call(null,((function (vec__19867,pacientes,avals_checked){
return (function (p1__19863_SHARP_){
return cljs.core.select_keys.call(null,p1__19863_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"nome","nome",1100401122),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null));
});})(vec__19867,pacientes,avals_checked))
,pacientes))));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses","pacientes-avaliacoes-pontos","react-med.screens.paciente-relatorio.ellipses/pacientes-avaliacoes-pontos",705507049),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.lista-pacientes","pacientes","react-med.screens.lista-pacientes/pacientes",-1185597765)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses-config","avals-checked","react-med.screens.paciente-relatorio.ellipses-config/avals-checked",-1303395027)], null),react_med.screens.paciente_relatorio.ellipses.pacientes_avaliacoes_pontos);
react_med.screens.paciente_relatorio.ellipses.ellipses_graph_series = (function react_med$screens$paciente_relatorio$ellipses$ellipses_graph_series(p__19876){
var vec__19877 = p__19876;
var ellipses = cljs.core.nth.call(null,vec__19877,(0),null);
var pacientes_pontos = cljs.core.nth.call(null,vec__19877,(1),null);
return cljs.core.concat.call(null,ellipses,pacientes_pontos);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses","ellipses-graph-series","react-med.screens.paciente-relatorio.ellipses/ellipses-graph-series",-536028230),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses","tollerance-ellipses-series","react-med.screens.paciente-relatorio.ellipses/tollerance-ellipses-series",321830151)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses","pacientes-avaliacoes-pontos","react-med.screens.paciente-relatorio.ellipses/pacientes-avaliacoes-pontos",705507049)], null),react_med.screens.paciente_relatorio.ellipses.ellipses_graph_series);
react_med.screens.paciente_relatorio.ellipses.series_options = ({"0": ({"enableInteractivity": false, "lineWidth": (2), "pointSize": (0)}), "1": ({"enableInteractivity": false, "lineWidth": (2), "pointSize": (0)}), "2": ({"enableInteractivity": false, "lineWidth": (2), "pointSize": (0)}), "3": ({"pointShape": "triangle", "pointSize": (14)}), "4": ({"pointShape": "square", "pointSize": (14)}), "5": ({"pointShape": "diamond", "pointSize": (14)}), "6": ({"pointShape": "star", "pointSize": (14)}), "7": ({"pointShape": "polygon", "pointSize": (14)})});
react_med.screens.paciente_relatorio.ellipses.desktop_ellipses_chart = (function react_med$screens$paciente_relatorio$ellipses$desktop_ellipses_chart(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse_chart_component2,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"height": "100%", "width": "100%"}),new cljs.core.Keyword(null,"series","series",600710694),react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses","ellipses-graph-series","react-med.screens.paciente-relatorio.ellipses/ellipses-graph-series",-536028230)], null)),new cljs.core.Keyword(null,"options","options",99638489),({"hAxis": ({"textPosition": "in", "viewWindowMode": "maximized", "title": "Resist\u00EAncia"}), "vAxis": ({"textPosition": "in", "viewWindowMode": "maximized", "title": "Reat\u00E2ncia"}), "series": react_med.screens.paciente_relatorio.ellipses.series_options})], null)], null);
});
react_med.screens.paciente_relatorio.ellipses.mobile_ellipses_chart = (function react_med$screens$paciente_relatorio$ellipses$mobile_ellipses_chart(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse_chart_component2,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"height": "100%", "width": "100%"}),new cljs.core.Keyword(null,"series","series",600710694),react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses","ellipses-graph-series","react-med.screens.paciente-relatorio.ellipses/ellipses-graph-series",-536028230)], null)),new cljs.core.Keyword(null,"options","options",99638489),({"chartArea": ({"top": (0), "width": "100%", "height": "92.5%"}), "axisTitlesPosition": "in", "legend": ({"position": "bottom"}), "hAxis": ({"textPosition": "in", "title": "Resist\u00EAncia", "viewWindowMode": "maximized"}), "vAxis": ({"textPosition": "in", "title": "Reat\u00E2ncia", "viewWindowMode": "maximized"}), "series": react_med.screens.paciente_relatorio.ellipses.series_options})], null)], null);
});
react_med.screens.paciente_relatorio.ellipses.desktop_view = (function react_med$screens$paciente_relatorio$ellipses$desktop_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.desktop_ellipses_chart], null)], null);
});
react_med.screens.paciente_relatorio.ellipses.top_bar = (function react_med$screens$paciente_relatorio$ellipses$top_bar(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19883 = arguments.length;
var i__4731__auto___19884 = (0);
while(true){
if((i__4731__auto___19884 < len__4730__auto___19883)){
args__4736__auto__.push((arguments[i__4731__auto___19884]));

var G__19885 = (i__4731__auto___19884 + (1));
i__4731__auto___19884 = G__19885;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.screens.paciente_relatorio.ellipses.top_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.screens.paciente_relatorio.ellipses.top_bar.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-bar","div.top-bar",-1606146455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"minHeight": (48), "padding": "0 24px", "display": "flex", "alignItems": "center"})], null),cljs.core.map_indexed.call(null,(function (p1__19881_SHARP_,p2__19880_SHARP_){
return cljs.core.with_meta.call(null,p2__19880_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__19881_SHARP_], null));
}),children)], null);
});

react_med.screens.paciente_relatorio.ellipses.top_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.screens.paciente_relatorio.ellipses.top_bar.cljs$lang$applyTo = (function (seq19882){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19882));
});

react_med.screens.paciente_relatorio.ellipses.mobile_view = (function react_med$screens$paciente_relatorio$ellipses$mobile_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variation","variation",-450640146),react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","top-bar-icon","react-med.routes/top-bar-icon",-1492414179)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.tabs_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-options","menu-options",-1774050123),react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","tabs","react-med.routes/tabs",1784816700)], null))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"erro"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.mobile_ellipses_chart], null)], null)], null)], null);
});
react_med.screens.paciente_relatorio.ellipses.view = (function react_med$screens$paciente_relatorio$ellipses$view(){
if(cljs.core._EQ_.call(null,"landscape",react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.orientation","orientation","react-med.orientation/orientation",1608760171)], null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.mobile_view], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.desktop_view], null);
}
});

//# sourceMappingURL=ellipses.js.map
