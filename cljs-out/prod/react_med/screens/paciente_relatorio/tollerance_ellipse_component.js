// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.paciente_relatorio.tollerance_ellipse_component');
goog.require('cljs.core');
goog.require('circular_progress');
goog.require('google_charts');
goog.require('react_med.util');
react_med.screens.paciente_relatorio.tollerance_ellipse_component.global$module$circular_progress = goog.global["CircularProgress"];
react_med.screens.paciente_relatorio.tollerance_ellipse_component.global$module$google_charts = goog.global["GoogleCharts"];
react_med.screens.paciente_relatorio.tollerance_ellipse_component.draw_chart = (function react_med$screens$paciente_relatorio$tollerance_ellipse_component$draw_chart(element_id,data_array,options){
return (function (){
var g_charts_instance = (new react_med.screens.paciente_relatorio.tollerance_ellipse_component.global$module$google_charts());
var el = document.getElementById(element_id);
var data = ((function (g_charts_instance,el){
return (function (){
return g_charts_instance.api.visualization.arrayToDataTable(data_array);
});})(g_charts_instance,el))
;
var chart = ((function (g_charts_instance,el,data){
return (function (){
return (new g_charts_instance.api.visualization.ScatterChart(el));
});})(g_charts_instance,el,data))
;
var draw_fn = ((function (g_charts_instance,el,data,chart){
return (function (){
return chart.call(null).draw(data.call(null),options);
});})(g_charts_instance,el,data,chart))
;
return g_charts_instance.load(draw_fn);
});
});
/**
 * Receive head and points like ['y' [1 2] [3 4]]
 *   Output the data array expected by the chart lib like [['category-name' 'y'] [1 2] [3 4]]
 *   Or when multiple series sent, it fill points with nil like
 *   In (series-points->data-array 'category-name' ['y' [1 2] [3 4]] ['z' [5 6] [7 8]])
 *   Out [[category-name y z] [1 2 nil] [3 4 nil] [5 nil 6] [7 nil 8]]
 */
react_med.screens.paciente_relatorio.tollerance_ellipse_component.series_points__GT_data_array = (function react_med$screens$paciente_relatorio$tollerance_ellipse_component$series_points__GT_data_array(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19692 = arguments.length;
var i__4731__auto___19693 = (0);
while(true){
if((i__4731__auto___19693 < len__4730__auto___19692)){
args__4736__auto__.push((arguments[i__4731__auto___19693]));

var G__19694 = (i__4731__auto___19693 + (1));
i__4731__auto___19693 = G__19694;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_med.screens.paciente_relatorio.tollerance_ellipse_component.series_points__GT_data_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_med.screens.paciente_relatorio.tollerance_ellipse_component.series_points__GT_data_array.cljs$core$IFn$_invoke$arity$variadic = (function (category_name,series){
var amount_of_series = cljs.core.count.call(null,series);
var no_head_series = cljs.core.map.call(null,cljs.core.rest,series);
var merge_points = ((function (amount_of_series,no_head_series){
return (function (idx,serie){
return cljs.core.map.call(null,((function (amount_of_series,no_head_series){
return (function (p__19688){
var vec__19689 = p__19688;
var x = cljs.core.nth.call(null,vec__19689,(0),null);
var y = cljs.core.nth.call(null,vec__19689,(1),null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.repeat.call(null,idx,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [y], null),cljs.core.repeat.call(null,((amount_of_series - (1)) - idx),null));
});})(amount_of_series,no_head_series))
,serie);
});})(amount_of_series,no_head_series))
;
var header = cljs.core.cons.call(null,category_name,cljs.core.map.call(null,cljs.core.first,series));
return cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cljs.core.clj__GT_js,cljs.core.cons.call(null,header,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,merge_points,no_head_series)))));
});

react_med.screens.paciente_relatorio.tollerance_ellipse_component.series_points__GT_data_array.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_med.screens.paciente_relatorio.tollerance_ellipse_component.series_points__GT_data_array.cljs$lang$applyTo = (function (seq19686){
var G__19687 = cljs.core.first.call(null,seq19686);
var seq19686__$1 = cljs.core.next.call(null,seq19686);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19687,seq19686__$1);
});

react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse = (function react_med$screens$paciente_relatorio$tollerance_ellipse_component$ellipse(name,p__19698,radius_x,radius_y,rotation){
var vec__19699 = p__19698;
var cx = cljs.core.nth.call(null,vec__19699,(0),null);
var cy = cljs.core.nth.call(null,vec__19699,(1),null);
var t = (((rotation === (0)))?(0):(Math.PI / ((180) / rotation)));
return cljs.core.cons.call(null,name,cljs.core.map.call(null,((function (t,vec__19699,cx,cy){
return (function (p1__19697_SHARP_){
return cljs.core.map.call(null,cljs.core._PLUS_,p1__19697_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
});})(t,vec__19699,cx,cy))
,cljs.core.map.call(null,((function (t,vec__19699,cx,cy){
return (function (p__19702){
var vec__19703 = p__19702;
var x = cljs.core.nth.call(null,vec__19703,(0),null);
var y = cljs.core.nth.call(null,vec__19703,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x * Math.cos(t)) - (y * Math.sin(t))),((x * Math.sin(t)) + (y * Math.cos(t)))], null);
});})(t,vec__19699,cx,cy))
,cljs.core.map.call(null,((function (t,vec__19699,cx,cy){
return (function (p1__19696_SHARP_){
return cljs.core.map.call(null,cljs.core._,p1__19696_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
});})(t,vec__19699,cx,cy))
,cljs.core.map.call(null,((function (t,vec__19699,cx,cy){
return (function (p1__19695_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + (Math.cos(p1__19695_SHARP_) * radius_x)),(cy + (Math.sin(p1__19695_SHARP_) * radius_y))], null));
});})(t,vec__19699,cx,cy))
,cljs.core.range.call(null,(0),6.32,0.1))))));
});
/**
 * Calculate the eigenvalues for a 2x2 matrix.
 *   Receives a 2x2 matrix in the format [[a b] [c d]]
 *   Returns the tuple of eigenvalues, e.g. [val1 val2]
 */
react_med.screens.paciente_relatorio.tollerance_ellipse_component.eigen_val = (function react_med$screens$paciente_relatorio$tollerance_ellipse_component$eigen_val(p__19706){
var vec__19707 = p__19706;
var vec__19710 = cljs.core.nth.call(null,vec__19707,(0),null);
var a = cljs.core.nth.call(null,vec__19710,(0),null);
var b = cljs.core.nth.call(null,vec__19710,(1),null);
var vec__19713 = cljs.core.nth.call(null,vec__19707,(1),null);
var c = cljs.core.nth.call(null,vec__19713,(0),null);
var d = cljs.core.nth.call(null,vec__19713,(1),null);
var trace = (a + d);
var determinant = ((a * d) - (b * c));
var val1 = ((trace + Math.sqrt(((trace * trace) - ((4) * determinant)))) / (2));
var val2 = ((trace - Math.sqrt(((trace * trace) - ((4) * determinant)))) / (2));
if((val1 > val2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val1,val2], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val2,val1], null);
}
});
/**
 * Calculate the eigenvectors for a 2x2 matrix.
 *   Receives a 2x2 matrix in the format [[a b] [c d]]
 *   Returns a matrix representing 2 vectors in its columns, as [[v1-x v2-x]
 *                                                            [v1-y v2-y]]
 */
react_med.screens.paciente_relatorio.tollerance_ellipse_component.eigen_vec = (function react_med$screens$paciente_relatorio$tollerance_ellipse_component$eigen_vec(matrix_2x2){
var vec__19716 = react_med.screens.paciente_relatorio.tollerance_ellipse_component.eigen_val.call(null,matrix_2x2);
var val1 = cljs.core.nth.call(null,vec__19716,(0),null);
var val2 = cljs.core.nth.call(null,vec__19716,(1),null);
var vec__19719 = matrix_2x2;
var vec__19722 = cljs.core.nth.call(null,vec__19719,(0),null);
var a = cljs.core.nth.call(null,vec__19722,(0),null);
var b = cljs.core.nth.call(null,vec__19722,(1),null);
var vec__19725 = cljs.core.nth.call(null,vec__19719,(1),null);
var c = cljs.core.nth.call(null,vec__19725,(0),null);
var d = cljs.core.nth.call(null,vec__19725,(1),null);
if((((c === (0))) && ((b === (0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null);
} else {
if((!((c === (0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(val1 - d),(val2 - d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,c], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(val1 - a),(val2 - a)], null)], null);

}
}
});
/**
 * Receives the standard deviation of a dataset in x-axis, the standard
 *   deviation in y-axis and the Pearson Correlation Coeficient r.
 *   Returns the parameters necessary to draw the tollerance ellipses: a
 *   vector of the x semi axis with values for 50%, 75% and 95% tolerances; a
 *   vector of the y semi axis with values for 50%, 75% and 95% tolerances and
 *   the slope, i.e. the ellipse rotation in degrees.
 *   For further explanation see https://stats.stackexchange.com/questions/447694/ellipse-region-shape-from-standard-deviations/449226#449226
 */
react_med.screens.paciente_relatorio.tollerance_ellipse_component.tolerance_ellipses_params = (function react_med$screens$paciente_relatorio$tollerance_ellipse_component$tolerance_ellipses_params(standard_deviation_x,standard_deviation_y,pearson_r){
var covxy = ((standard_deviation_x * standard_deviation_y) * pearson_r);
var covyx = covxy;
var covxx = (standard_deviation_x * standard_deviation_x);
var covyy = (standard_deviation_y * standard_deviation_y);
var covariance_matrix = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [covxx,covxy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [covyx,covyy], null)], null);
var vec__19730 = react_med.screens.paciente_relatorio.tollerance_ellipse_component.eigen_vec.call(null,covariance_matrix);
var vec__19733 = cljs.core.nth.call(null,vec__19730,(0),null);
var eigen_vec_1_x = cljs.core.nth.call(null,vec__19733,(0),null);
var eigen_vec_2_x = cljs.core.nth.call(null,vec__19733,(1),null);
var vec__19736 = cljs.core.nth.call(null,vec__19730,(1),null);
var eigen_vec_1_y = cljs.core.nth.call(null,vec__19736,(0),null);
var eigen_vec_2_y = cljs.core.nth.call(null,vec__19736,(1),null);
var vec__19739 = react_med.screens.paciente_relatorio.tollerance_ellipse_component.eigen_val.call(null,covariance_matrix);
var eigen_val_x = cljs.core.nth.call(null,vec__19739,(0),null);
var eigen_val_y = cljs.core.nth.call(null,vec__19739,(1),null);
var chi_squared = new cljs.core.PersistentArrayMap(null, 3, [0.5,1.386294361,0.75,2.772588722,0.95,5.991464547], null);
var tolerances = cljs.core.map.call(null,chi_squared,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.75,0.95], null));
var x_semi_axes = cljs.core.map.call(null,((function (covxy,covyx,covxx,covyy,covariance_matrix,vec__19730,vec__19733,eigen_vec_1_x,eigen_vec_2_x,vec__19736,eigen_vec_1_y,eigen_vec_2_y,vec__19739,eigen_val_x,eigen_val_y,chi_squared,tolerances){
return (function (p1__19728_SHARP_){
return Math.sqrt((p1__19728_SHARP_ * eigen_val_x));
});})(covxy,covyx,covxx,covyy,covariance_matrix,vec__19730,vec__19733,eigen_vec_1_x,eigen_vec_2_x,vec__19736,eigen_vec_1_y,eigen_vec_2_y,vec__19739,eigen_val_x,eigen_val_y,chi_squared,tolerances))
,tolerances);
var y_semi_axes = cljs.core.map.call(null,((function (covxy,covyx,covxx,covyy,covariance_matrix,vec__19730,vec__19733,eigen_vec_1_x,eigen_vec_2_x,vec__19736,eigen_vec_1_y,eigen_vec_2_y,vec__19739,eigen_val_x,eigen_val_y,chi_squared,tolerances,x_semi_axes){
return (function (p1__19729_SHARP_){
return Math.sqrt((p1__19729_SHARP_ * eigen_val_y));
});})(covxy,covyx,covxx,covyy,covariance_matrix,vec__19730,vec__19733,eigen_vec_1_x,eigen_vec_2_x,vec__19736,eigen_vec_1_y,eigen_vec_2_y,vec__19739,eigen_val_x,eigen_val_y,chi_squared,tolerances,x_semi_axes))
,tolerances);
var slope = (((standard_deviation_x > standard_deviation_y))?Math.atan2(eigen_vec_1_y,eigen_vec_1_x):Math.atan2(eigen_vec_1_x,eigen_vec_1_y));
var slope_in_degree = (((180) * slope) / Math.PI);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_semi_axes,y_semi_axes,slope_in_degree], null);
});
react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse_chart_component = (function react_med$screens$paciente_relatorio$tollerance_ellipse_component$ellipse_chart_component(p__19742){
var map__19743 = p__19742;
var map__19743__$1 = (((((!((map__19743 == null))))?(((((map__19743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19743):map__19743);
var width = cljs.core.get.call(null,map__19743__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__19743__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var series = cljs.core.get.call(null,map__19743__$1,new cljs.core.Keyword(null,"series","series",600710694));
var options = cljs.core.get.call(null,map__19743__$1,new cljs.core.Keyword(null,"options","options",99638489));
var id = ["ellipse-chart",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null))].join('');
var data_array = cljs.core.apply.call(null,react_med.screens.paciente_relatorio.tollerance_ellipse_component.series_points__GT_data_array,"x definido em ellipse-chart-comp",series);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.util.with_mount_fn.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),({"height": height, "width": width}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),react_med.screens.paciente_relatorio.tollerance_ellipse_component.draw_chart.call(null,id,data_array,options)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.tollerance_ellipse_component.global$module$circular_progress], null)], null))], null);
});
react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse_chart_component2 = (function react_med$screens$paciente_relatorio$tollerance_ellipse_component$ellipse_chart_component2(p__19745){
var map__19746 = p__19745;
var map__19746__$1 = (((((!((map__19746 == null))))?(((((map__19746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19746):map__19746);
var style = cljs.core.get.call(null,map__19746__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var height = cljs.core.get.call(null,map__19746__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var series = cljs.core.get.call(null,map__19746__$1,new cljs.core.Keyword(null,"series","series",600710694));
var options = cljs.core.get.call(null,map__19746__$1,new cljs.core.Keyword(null,"options","options",99638489));
var id = ["ellipse-chart",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null))].join('');
var data_array = cljs.core.apply.call(null,react_med.screens.paciente_relatorio.tollerance_ellipse_component.series_points__GT_data_array,"x definido em ellipse-chart-comp",series);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.util.with_mount_fn.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),react_med.screens.paciente_relatorio.tollerance_ellipse_component.draw_chart.call(null,id,data_array,options)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.tollerance_ellipse_component.global$module$circular_progress], null)], null))], null);
});

//# sourceMappingURL=tollerance_ellipse_component.js.map
