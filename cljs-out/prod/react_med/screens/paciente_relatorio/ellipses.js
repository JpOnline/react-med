// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.paciente_relatorio.ellipses');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('react_med.screens.paciente_relatorio.bioimpedance');
goog.require('react_med.screens.paciente_relatorio.ellipses_config');
goog.require('react_med.screens.paciente_relatorio.tollerance_ellipse_component');
goog.require('react_med.shell_components');
goog.require('react_med.util');
react_med.screens.paciente_relatorio.ellipses.population_data_for_ellipse = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"population","population",-1209901867),"women-21-49-buffa",new cljs.core.Keyword(null,"size","size",1098693007),(754),new cljs.core.Keyword(null,"rsp-mean","rsp-mean",733542564),(492),new cljs.core.Keyword(null,"rsp-sd","rsp-sd",1061002629),95.9,new cljs.core.Keyword(null,"xcsp-mean","xcsp-mean",-1168783083),55.4,new cljs.core.Keyword(null,"xcsp-sd","xcsp-sd",633266882),12.3,new cljs.core.Keyword(null,"correlation-r","correlation-r",2086447628),0.88], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"population","population",-1209901867),"men-21-49-buffa",new cljs.core.Keyword(null,"size","size",1098693007),(836),new cljs.core.Keyword(null,"rsp-mean","rsp-mean",733542564),402.4,new cljs.core.Keyword(null,"rsp-sd","rsp-sd",1061002629),62.9,new cljs.core.Keyword(null,"xcsp-mean","xcsp-mean",-1168783083),52.5,new cljs.core.Keyword(null,"xcsp-sd","xcsp-sd",633266882),9.5,new cljs.core.Keyword(null,"correlation-r","correlation-r",2086447628),0.84], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"population","population",-1209901867),"women-65-100-saragat",new cljs.core.Keyword(null,"size","size",1098693007),(295),new cljs.core.Keyword(null,"rsp-mean","rsp-mean",733542564),(462),new cljs.core.Keyword(null,"rsp-sd","rsp-sd",1061002629),80.1,new cljs.core.Keyword(null,"xcsp-mean","xcsp-mean",-1168783083),47.9,new cljs.core.Keyword(null,"xcsp-sd","xcsp-sd",633266882),11.2,new cljs.core.Keyword(null,"correlation-r","correlation-r",2086447628),0.75], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"population","population",-1209901867),"men-65-100-saragat",new cljs.core.Keyword(null,"size","size",1098693007),(265),new cljs.core.Keyword(null,"rsp-mean","rsp-mean",733542564),391.8,new cljs.core.Keyword(null,"rsp-sd","rsp-sd",1061002629),57.9,new cljs.core.Keyword(null,"xcsp-mean","xcsp-mean",-1168783083),42.6,new cljs.core.Keyword(null,"xcsp-sd","xcsp-sd",633266882),9.9,new cljs.core.Keyword(null,"correlation-r","correlation-r",2086447628),0.6], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"population","population",-1209901867),"women-18-30-ibanez",new cljs.core.Keyword(null,"size","size",1098693007),(213),new cljs.core.Keyword(null,"rsp-mean","rsp-mean",733542564),332.7,new cljs.core.Keyword(null,"rsp-sd","rsp-sd",1061002629),41.7,new cljs.core.Keyword(null,"xcsp-mean","xcsp-mean",-1168783083),44.4,new cljs.core.Keyword(null,"xcsp-sd","xcsp-sd",633266882),6.8,new cljs.core.Keyword(null,"correlation-r","correlation-r",2086447628),0.77], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"population","population",-1209901867),"men-18-30-ibanez",new cljs.core.Keyword(null,"size","size",1098693007),(227),new cljs.core.Keyword(null,"rsp-mean","rsp-mean",733542564),388.6,new cljs.core.Keyword(null,"rsp-sd","rsp-sd",1061002629),(60),new cljs.core.Keyword(null,"xcsp-mean","xcsp-mean",-1168783083),43.7,new cljs.core.Keyword(null,"xcsp-sd","xcsp-sd",633266882),7.5,new cljs.core.Keyword(null,"correlation-r","correlation-r",2086447628),0.79], null)], null);
react_med.screens.paciente_relatorio.ellipses.tollerance_ellipses_series = (function react_med$screens$paciente_relatorio$ellipses$tollerance_ellipses_series(chosen_population){
var map__20478 = react_med.util.get_pred.call(null,(function (p1__20477_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"population","population",-1209901867).cljs$core$IFn$_invoke$arity$1(p1__20477_SHARP_),chosen_population);
}),react_med.screens.paciente_relatorio.ellipses.population_data_for_ellipse);
var map__20478__$1 = (((((!((map__20478 == null))))?(((((map__20478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20478):map__20478);
var rsp_mean = cljs.core.get.call(null,map__20478__$1,new cljs.core.Keyword(null,"rsp-mean","rsp-mean",733542564));
var xcsp_mean = cljs.core.get.call(null,map__20478__$1,new cljs.core.Keyword(null,"xcsp-mean","xcsp-mean",-1168783083));
var rsp_sd = cljs.core.get.call(null,map__20478__$1,new cljs.core.Keyword(null,"rsp-sd","rsp-sd",1061002629));
var xcsp_sd = cljs.core.get.call(null,map__20478__$1,new cljs.core.Keyword(null,"xcsp-sd","xcsp-sd",633266882));
var correlation_r = cljs.core.get.call(null,map__20478__$1,new cljs.core.Keyword(null,"correlation-r","correlation-r",2086447628));
var vec__20479 = react_med.screens.paciente_relatorio.tollerance_ellipse_component.tolerance_ellipses_params.call(null,rsp_sd,xcsp_sd,correlation_r);
var vec__20482 = cljs.core.nth.call(null,vec__20479,(0),null);
var tol_50_x = cljs.core.nth.call(null,vec__20482,(0),null);
var tol_75_x = cljs.core.nth.call(null,vec__20482,(1),null);
var tol_95_x = cljs.core.nth.call(null,vec__20482,(2),null);
var vec__20485 = cljs.core.nth.call(null,vec__20479,(1),null);
var tol_50_y = cljs.core.nth.call(null,vec__20485,(0),null);
var tol_75_y = cljs.core.nth.call(null,vec__20485,(1),null);
var tol_95_y = cljs.core.nth.call(null,vec__20485,(2),null);
var rotation = cljs.core.nth.call(null,vec__20479,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse.call(null,"95% Toler\u00E2ncia",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rsp_mean,xcsp_mean], null),tol_95_x,tol_95_y,rotation),react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse.call(null,"75% Toler\u00E2ncia",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rsp_mean,xcsp_mean], null),tol_75_x,tol_75_y,rotation),react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse.call(null,"50% Toler\u00E2ncia",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rsp_mean,xcsp_mean], null),tol_50_x,tol_50_y,rotation)], null);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses","tollerance-ellipses-series","react-med.screens.paciente-relatorio.ellipses/tollerance-ellipses-series",321830151),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses-config","chosen-population","react-med.screens.paciente-relatorio.ellipses-config/chosen-population",-970669786)], null),react_med.screens.paciente_relatorio.ellipses.tollerance_ellipses_series);
react_med.screens.paciente_relatorio.ellipses.filter_selected = (function react_med$screens$paciente_relatorio$ellipses$filter_selected(avals,avals_checked){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091),cljs.core.map.call(null,(function (p__20489){
var map__20490 = p__20489;
var map__20490__$1 = (((((!((map__20490 == null))))?(((((map__20490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20490):map__20490);
var avaliacao_info = map__20490__$1;
var id = cljs.core.get.call(null,map__20490__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data = cljs.core.get.call(null,map__20490__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var deleted_QMARK_ = cljs.core.get.call(null,map__20490__$1,new cljs.core.Keyword(null,"deleted?","deleted?",-486602771));
if(cljs.core.not.call(null,deleted_QMARK_)){
return cljs.core.merge.call(null,avaliacao_info,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),react_med.util.yyyy_mm_dd__GT_dd_mm_yyyy.call(null,data),new cljs.core.Keyword(null,"checked?","checked?",2024809091),cljs.core.get.call(null,avals_checked,id)], null));
} else {
return null;
}
}),avals));
});
/**
 * Returns points in the chart like [paciente-name [p1x p1y] [p2x p2y]]
 */
react_med.screens.paciente_relatorio.ellipses.pacientes_avaliacoes_pontos = (function react_med$screens$paciente_relatorio$ellipses$pacientes_avaliacoes_pontos(p__20496){
var vec__20497 = p__20496;
var pacientes = cljs.core.nth.call(null,vec__20497,(0),null);
var avals_checked = cljs.core.nth.call(null,vec__20497,(1),null);
return cljs.core.map.call(null,((function (vec__20497,pacientes,avals_checked){
return (function (p__20500){
var map__20501 = p__20500;
var map__20501__$1 = (((((!((map__20501 == null))))?(((((map__20501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20501):map__20501);
var nome = cljs.core.get.call(null,map__20501__$1,new cljs.core.Keyword(null,"nome","nome",1100401122));
var avaliacoes = cljs.core.get.call(null,map__20501__$1,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982));
return cljs.core.apply.call(null,cljs.core.concat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nome], null),cljs.core.mapv.call(null,((function (map__20501,map__20501__$1,nome,avaliacoes,vec__20497,pacientes,avals_checked){
return (function (avaliacao_info){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.bioimpedance.rsp.call(null,avaliacao_info),react_med.screens.paciente_relatorio.bioimpedance.xcsp.call(null,avaliacao_info)], null);
});})(map__20501,map__20501__$1,nome,avaliacoes,vec__20497,pacientes,avals_checked))
,avaliacoes)], null));
});})(vec__20497,pacientes,avals_checked))
,cljs.core.filter.call(null,((function (vec__20497,pacientes,avals_checked){
return (function (p1__20495_SHARP_){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982).cljs$core$IFn$_invoke$arity$1(p1__20495_SHARP_));
});})(vec__20497,pacientes,avals_checked))
,cljs.core.map.call(null,((function (vec__20497,pacientes,avals_checked){
return (function (p1__20494_SHARP_){
return cljs.core.update_in.call(null,p1__20494_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null),react_med.screens.paciente_relatorio.ellipses.filter_selected,cljs.core.get_in.call(null,avals_checked,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20494_SHARP_),new cljs.core.Keyword(null,"avals","avals",659695120)], null)));
});})(vec__20497,pacientes,avals_checked))
,cljs.core.map.call(null,((function (vec__20497,pacientes,avals_checked){
return (function (p1__20493_SHARP_){
return cljs.core.update.call(null,p1__20493_SHARP_,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),cljs.core.vals);
});})(vec__20497,pacientes,avals_checked))
,cljs.core.map.call(null,((function (vec__20497,pacientes,avals_checked){
return (function (p1__20492_SHARP_){
return cljs.core.select_keys.call(null,p1__20492_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"nome","nome",1100401122),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null));
});})(vec__20497,pacientes,avals_checked))
,pacientes)))));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses","pacientes-avaliacoes-pontos","react-med.screens.paciente-relatorio.ellipses/pacientes-avaliacoes-pontos",705507049),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.lista-pacientes","pacientes","react-med.screens.lista-pacientes/pacientes",-1185597765)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses-config","avals-checked","react-med.screens.paciente-relatorio.ellipses-config/avals-checked",-1303395027)], null),react_med.screens.paciente_relatorio.ellipses.pacientes_avaliacoes_pontos);
react_med.screens.paciente_relatorio.ellipses.ellipses_graph_series = (function react_med$screens$paciente_relatorio$ellipses$ellipses_graph_series(p__20503){
var vec__20504 = p__20503;
var ellipses = cljs.core.nth.call(null,vec__20504,(0),null);
var pacientes_pontos = cljs.core.nth.call(null,vec__20504,(1),null);
return cljs.core.concat.call(null,ellipses,pacientes_pontos);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses","ellipses-graph-series","react-med.screens.paciente-relatorio.ellipses/ellipses-graph-series",-536028230),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses","tollerance-ellipses-series","react-med.screens.paciente-relatorio.ellipses/tollerance-ellipses-series",321830151)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses","pacientes-avaliacoes-pontos","react-med.screens.paciente-relatorio.ellipses/pacientes-avaliacoes-pontos",705507049)], null),react_med.screens.paciente_relatorio.ellipses.ellipses_graph_series);
react_med.screens.paciente_relatorio.ellipses.series_options = ({"0": ({"enableInteractivity": false, "lineWidth": (2), "pointSize": (0)}), "1": ({"enableInteractivity": false, "lineWidth": (2), "pointSize": (0)}), "2": ({"enableInteractivity": false, "lineWidth": (2), "pointSize": (0)}), "3": ({"pointShape": "triangle", "pointSize": (14)}), "4": ({"pointShape": "square", "pointSize": (14)}), "5": ({"pointShape": "diamond", "pointSize": (14)}), "6": ({"pointShape": "star", "pointSize": (14)}), "7": ({"pointShape": "polygon", "pointSize": (14)})});
react_med.screens.paciente_relatorio.ellipses.desktop_ellipses_chart = (function react_med$screens$paciente_relatorio$ellipses$desktop_ellipses_chart(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse_chart_component2,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"height": "100%", "width": "100%"}),new cljs.core.Keyword(null,"series","series",600710694),react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses","ellipses-graph-series","react-med.screens.paciente-relatorio.ellipses/ellipses-graph-series",-536028230)], null)),new cljs.core.Keyword(null,"options","options",99638489),({"hAxis": ({"textPosition": "in", "viewWindowMode": "maximized", "title": "Resist\u00EAncia Espec\u00EDfica (RSP)"}), "vAxis": ({"textPosition": "in", "viewWindowMode": "maximized", "title": "Reat\u00E2ncia Espec\u00EDfica (XcSP)"}), "series": react_med.screens.paciente_relatorio.ellipses.series_options})], null)], null);
});
react_med.screens.paciente_relatorio.ellipses.mobile_ellipses_chart = (function react_med$screens$paciente_relatorio$ellipses$mobile_ellipses_chart(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse_chart_component2,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"height": "100%", "width": "100%"}),new cljs.core.Keyword(null,"series","series",600710694),react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses","ellipses-graph-series","react-med.screens.paciente-relatorio.ellipses/ellipses-graph-series",-536028230)], null)),new cljs.core.Keyword(null,"options","options",99638489),({"chartArea": ({"top": (0), "width": "100%", "height": "92.5%"}), "axisTitlesPosition": "in", "legend": ({"position": "bottom"}), "hAxis": ({"textPosition": "in", "title": "Resist\u00EAncia Espec\u00EDfica (RSP)", "viewWindowMode": "maximized"}), "vAxis": ({"textPosition": "in", "title": "Reat\u00E2ncia Espec\u00EDfica (XcSP)", "viewWindowMode": "maximized"}), "series": react_med.screens.paciente_relatorio.ellipses.series_options})], null)], null);
});
react_med.screens.paciente_relatorio.ellipses.desktop_view = (function react_med$screens$paciente_relatorio$ellipses$desktop_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.desktop_ellipses_chart], null)], null);
});
react_med.screens.paciente_relatorio.ellipses.top_bar = (function react_med$screens$paciente_relatorio$ellipses$top_bar(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20510 = arguments.length;
var i__4731__auto___20511 = (0);
while(true){
if((i__4731__auto___20511 < len__4730__auto___20510)){
args__4736__auto__.push((arguments[i__4731__auto___20511]));

var G__20512 = (i__4731__auto___20511 + (1));
i__4731__auto___20511 = G__20512;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.screens.paciente_relatorio.ellipses.top_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.screens.paciente_relatorio.ellipses.top_bar.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-bar","div.top-bar",-1606146455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"minHeight": (48), "padding": "0 24px", "display": "flex", "alignItems": "center"})], null),cljs.core.map_indexed.call(null,(function (p1__20508_SHARP_,p2__20507_SHARP_){
return cljs.core.with_meta.call(null,p2__20507_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__20508_SHARP_], null));
}),children)], null);
});

react_med.screens.paciente_relatorio.ellipses.top_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.screens.paciente_relatorio.ellipses.top_bar.cljs$lang$applyTo = (function (seq20509){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20509));
});

react_med.screens.paciente_relatorio.ellipses.mobile_view = (function react_med$screens$paciente_relatorio$ellipses$mobile_view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variation","variation",-450640146),react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","top-bar-icon","react-med.routes/top-bar-icon",-1492414179)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.tabs_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-options","menu-options",-1774050123),react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","tabs","react-med.routes/tabs",1784816700)], null))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"erro"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.mobile_ellipses_chart], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.drawer_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-structure","menu-structure",-627499224),react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","side-menu","react-med.routes/side-menu",909029319)], null))], null)], null)], null);
});
react_med.screens.paciente_relatorio.ellipses.view = (function react_med$screens$paciente_relatorio$ellipses$view(){
if(cljs.core._EQ_.call(null,"landscape",react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.orientation","orientation","react-med.orientation/orientation",1608760171)], null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.mobile_view], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses.desktop_view], null);
}
});

//# sourceMappingURL=ellipses.js.map
