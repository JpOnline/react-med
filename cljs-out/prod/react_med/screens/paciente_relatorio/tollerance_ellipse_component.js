// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.screens.paciente_relatorio.tollerance_ellipse_component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_med.util');
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
return chart().draw(data(),options);
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
var len__4730__auto___25762 = arguments.length;
var i__4731__auto___25763 = (0);
while(true){
if((i__4731__auto___25763 < len__4730__auto___25762)){
args__4736__auto__.push((arguments[i__4731__auto___25763]));

var G__25764 = (i__4731__auto___25763 + (1));
i__4731__auto___25763 = G__25764;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_med.screens.paciente_relatorio.tollerance_ellipse_component.series_points__GT_data_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_med.screens.paciente_relatorio.tollerance_ellipse_component.series_points__GT_data_array.cljs$core$IFn$_invoke$arity$variadic = (function (category_name,series){
var amount_of_series = cljs.core.count(series);
var no_head_series = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,series);
var merge_points = ((function (amount_of_series,no_head_series){
return (function (idx,serie){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (amount_of_series,no_head_series){
return (function (p__25758){
var vec__25759 = p__25758;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25759,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25759,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(idx,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [y], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((amount_of_series - (1)) - idx),null)], 0));
});})(amount_of_series,no_head_series))
,serie);
});})(amount_of_series,no_head_series))
;
var header = cljs.core.cons(category_name,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,series));
return cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,cljs.core.cons(header,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(merge_points,no_head_series)))));
});

react_med.screens.paciente_relatorio.tollerance_ellipse_component.series_points__GT_data_array.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_med.screens.paciente_relatorio.tollerance_ellipse_component.series_points__GT_data_array.cljs$lang$applyTo = (function (seq25756){
var G__25757 = cljs.core.first(seq25756);
var seq25756__$1 = cljs.core.next(seq25756);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25757,seq25756__$1);
});

react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse = (function react_med$screens$paciente_relatorio$tollerance_ellipse_component$ellipse(name,p__25768,radius_x,radius_y,rotation){
var vec__25769 = p__25768;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25769,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25769,(1),null);
var t = (((rotation === (0)))?(0):(Math.PI / ((180) / rotation)));
return cljs.core.cons(name,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (t,vec__25769,cx,cy){
return (function (p1__25767_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,p1__25767_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
});})(t,vec__25769,cx,cy))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (t,vec__25769,cx,cy){
return (function (p__25772){
var vec__25773 = p__25772;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25773,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25773,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x * Math.cos(t)) - (y * Math.sin(t))),((x * Math.sin(t)) + (y * Math.cos(t)))], null);
});})(t,vec__25769,cx,cy))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (t,vec__25769,cx,cy){
return (function (p1__25766_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,p1__25766_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
});})(t,vec__25769,cx,cy))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (t,vec__25769,cx,cy){
return (function (p1__25765_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + (Math.cos(p1__25765_SHARP_) * radius_x)),(cy + (Math.sin(p1__25765_SHARP_) * radius_y))], null));
});})(t,vec__25769,cx,cy))
,cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),6.32,0.1))))));
});
/**
 * Calculate the eigenvalues for a 2x2 matrix.
 *   Receives a 2x2 matrix in the format [[a b] [c d]]
 *   Returns the tuple of eigenvalues, e.g. [val1 val2]
 */
react_med.screens.paciente_relatorio.tollerance_ellipse_component.eigen_val = (function react_med$screens$paciente_relatorio$tollerance_ellipse_component$eigen_val(p__25776){
var vec__25777 = p__25776;
var vec__25780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25777,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25780,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25780,(1),null);
var vec__25783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25777,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25783,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25783,(1),null);
var trace = (a + d);
var determinant = ((a * d) - (b * c));
var val1 = ((trace + (function (){var G__25786 = ((trace * trace) - ((4) * determinant));
return Math.sqrt(G__25786);
})()) / (2));
var val2 = ((trace - (function (){var G__25787 = ((trace * trace) - ((4) * determinant));
return Math.sqrt(G__25787);
})()) / (2));
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
var vec__25788 = react_med.screens.paciente_relatorio.tollerance_ellipse_component.eigen_val(matrix_2x2);
var val1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25788,(0),null);
var val2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25788,(1),null);
var vec__25791 = matrix_2x2;
var vec__25794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25791,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25794,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25794,(1),null);
var vec__25797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25791,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25797,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25797,(1),null);
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
var vec__25802 = react_med.screens.paciente_relatorio.tollerance_ellipse_component.eigen_vec(covariance_matrix);
var vec__25805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25802,(0),null);
var eigen_vec_1_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25805,(0),null);
var eigen_vec_2_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25805,(1),null);
var vec__25808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25802,(1),null);
var eigen_vec_1_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25808,(0),null);
var eigen_vec_2_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25808,(1),null);
var vec__25811 = react_med.screens.paciente_relatorio.tollerance_ellipse_component.eigen_val(covariance_matrix);
var eigen_val_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25811,(0),null);
var eigen_val_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25811,(1),null);
var chi_squared = new cljs.core.PersistentArrayMap(null, 3, [0.5,1.386294361,0.75,2.772588722,0.95,5.991464547], null);
var tolerances = cljs.core.map.cljs$core$IFn$_invoke$arity$2(chi_squared,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.75,0.95], null));
var x_semi_axes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (covxy,covyx,covxx,covyy,covariance_matrix,vec__25802,vec__25805,eigen_vec_1_x,eigen_vec_2_x,vec__25808,eigen_vec_1_y,eigen_vec_2_y,vec__25811,eigen_val_x,eigen_val_y,chi_squared,tolerances){
return (function (p1__25800_SHARP_){
var G__25814 = (p1__25800_SHARP_ * eigen_val_x);
return Math.sqrt(G__25814);
});})(covxy,covyx,covxx,covyy,covariance_matrix,vec__25802,vec__25805,eigen_vec_1_x,eigen_vec_2_x,vec__25808,eigen_vec_1_y,eigen_vec_2_y,vec__25811,eigen_val_x,eigen_val_y,chi_squared,tolerances))
,tolerances);
var y_semi_axes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (covxy,covyx,covxx,covyy,covariance_matrix,vec__25802,vec__25805,eigen_vec_1_x,eigen_vec_2_x,vec__25808,eigen_vec_1_y,eigen_vec_2_y,vec__25811,eigen_val_x,eigen_val_y,chi_squared,tolerances,x_semi_axes){
return (function (p1__25801_SHARP_){
var G__25815 = (p1__25801_SHARP_ * eigen_val_y);
return Math.sqrt(G__25815);
});})(covxy,covyx,covxx,covyy,covariance_matrix,vec__25802,vec__25805,eigen_vec_1_x,eigen_vec_2_x,vec__25808,eigen_vec_1_y,eigen_vec_2_y,vec__25811,eigen_val_x,eigen_val_y,chi_squared,tolerances,x_semi_axes))
,tolerances);
var slope = (((standard_deviation_x > standard_deviation_y))?Math.atan2(eigen_vec_1_y,eigen_vec_1_x):Math.atan2(eigen_vec_1_x,eigen_vec_1_y));
var slope_in_degree = (((180) * slope) / Math.PI);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_semi_axes,y_semi_axes,slope_in_degree], null);
});
react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse_chart_component = (function react_med$screens$paciente_relatorio$tollerance_ellipse_component$ellipse_chart_component(p__25816){
var map__25817 = p__25816;
var map__25817__$1 = (((((!((map__25817 == null))))?(((((map__25817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25817):map__25817);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25817__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25817__$1,cljs.core.cst$kw$height);
var series = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25817__$1,cljs.core.cst$kw$series);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25817__$1,cljs.core.cst$kw$options);
var id = ["ellipse-chart",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var data_array = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(react_med.screens.paciente_relatorio.tollerance_ellipse_component.series_points__GT_data_array,"x definido em ellipse-chart-comp",series);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.util.with_mount_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$style,({"height": height, "width": width}),cljs.core.cst$kw$component_DASH_did_DASH_mount,react_med.screens.paciente_relatorio.tollerance_ellipse_component.draw_chart(id,data_array,options)], null)], null))], null);
});
react_med.screens.paciente_relatorio.tollerance_ellipse_component.ellipse_chart_component2 = (function react_med$screens$paciente_relatorio$tollerance_ellipse_component$ellipse_chart_component2(p__25819){
var map__25820 = p__25819;
var map__25820__$1 = (((((!((map__25820 == null))))?(((((map__25820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25820):map__25820);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,cljs.core.cst$kw$style);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,cljs.core.cst$kw$height);
var series = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,cljs.core.cst$kw$series);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,cljs.core.cst$kw$options);
var id = ["ellipse-chart",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var data_array = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(react_med.screens.paciente_relatorio.tollerance_ellipse_component.series_points__GT_data_array,"x definido em ellipse-chart-comp",series);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.util.with_mount_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$style,style,cljs.core.cst$kw$component_DASH_did_DASH_mount,react_med.screens.paciente_relatorio.tollerance_ellipse_component.draw_chart(id,data_array,options)], null)], null))], null);
});
