// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.paciente_relatorio.ellipses_config');
goog.require('cljs.core');
goog.require('checkbox');
goog.require('day8.re_frame.tracing');
goog.require('menu_item');
goog.require('menu_list');
goog.require('radio');
goog.require('re_frame.core');
goog.require('react_med.screens.paciente_relatorio.tollerance_ellipse_component');
goog.require('react_med.shell_components');
goog.require('react_med.util');
react_med.screens.paciente_relatorio.ellipses_config.global$module$checkbox = goog.global["Checkbox"];
react_med.screens.paciente_relatorio.ellipses_config.global$module$menu_item = goog.global["MenuItem"];
react_med.screens.paciente_relatorio.ellipses_config.global$module$menu_list = goog.global["MenuList"];
react_med.screens.paciente_relatorio.ellipses_config.global$module$radio = goog.global["Radio"];
react_med.screens.paciente_relatorio.ellipses_config.item_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1px 0"], null);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.paciente_relatorio.ellipses_config.check_aval = (function react_med$screens$paciente_relatorio$ellipses_config$check_aval(app_state,p__20420){
var vec__20421 = p__20420;
var event = cljs.core.nth.call(null,vec__20421,(0),null);
var parent_id = cljs.core.nth.call(null,vec__20421,(1),null);
var id = cljs.core.nth.call(null,vec__20421,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"parent-id","parent-id",239802396,null),new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Symbol(null,"aval-id","aval-id",788740799,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"parent-id","parent-id",239802396,null),new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Symbol(null,"paciente-avals","paciente-avals",-955168534,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null)),new cljs.core.Symbol(null,"paciente-previous-status","paciente-previous-status",921403107,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"aval-id","aval-id",788740799,null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120),new cljs.core.Symbol(null,"aval-id","aval-id",788740799,null)], null),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120)], null))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),true),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),false))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"paciente-previous-status","paciente-previous-status",921403107,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120)], null),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),cljs.core.list(new cljs.core.Symbol(null,"map-indexed","map-indexed",-1391025435,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"paciente-previous-status","paciente-previous-status",921403107,null))),new cljs.core.Symbol(null,"paciente-avals","paciente-avals",-955168534,null))))))));

var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = (function (){var paciente_id = (function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = (function (){var or__4131__auto__ = (function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = parent_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"parent-id","parent-id",239802396,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
}
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"parent-id","parent-id",239802396,null),new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})();
var aval_id = (function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = (cljs.core.truth_((function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = parent_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"parent-id","parent-id",239802396,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})())?(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})():null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"parent-id","parent-id",239802396,null),new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})();
var paciente_avals = (function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.get_in.call(null,(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})(),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})();
var paciente_previous_status = (function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.get_in.call(null,(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})(),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})();
var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = (cljs.core.truth_((function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = aval_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"aval-id","aval-id",788740799,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})())?(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = (function (){var $ = (function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})();
var $__$1 = (function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.update_in.call(null,(function (){var opts__14482__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = $;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),(function (){var opts__14482__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})(),new cljs.core.Keyword(null,"avals","avals",659695120),(function (){var opts__14482__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = aval_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"aval-id","aval-id",788740799,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120),new cljs.core.Symbol(null,"aval-id","aval-id",788740799,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.not;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120),new cljs.core.Symbol(null,"aval-id","aval-id",788740799,null)], null),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})();
var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = (((function (){var opts__14482__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.every_QMARK_.call(null,(function (){var opts__14482__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.true_QMARK_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.get_in.call(null,(function (){var opts__14482__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = $__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),(function (){var opts__14482__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__14483__auto__;
})(),new cljs.core.Keyword(null,"avals","avals",659695120)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})())?(function (){var opts__14482__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14482__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = $__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),(function (){var opts__14482__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__14483__auto__;
})(),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})(),true);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})():(function (){var opts__14482__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14482__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = $__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),(function (){var opts__14482__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__14483__auto__;
})(),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})(),false);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120)], null))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),true),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),false)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120),new cljs.core.Symbol(null,"aval-id","aval-id",788740799,null)], null),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120)], null))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),true),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),false))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})():debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(4)),(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})(),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.not.call(null,(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = paciente_previous_status;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-previous-status","paciente-previous-status",921403107,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"paciente-previous-status","paciente-previous-status",921403107,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"paciente-previous-status","paciente-previous-status",921403107,null))),(3)),(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = paciente_id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})(),new cljs.core.Keyword(null,"avals","avals",659695120)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.vec.call(null,(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.map_indexed.call(null,(function (){var opts__14482__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = ((function (opts__14482__auto____$4,opts__14482__auto____$3,opts__14482__auto____$2,opts__14482__auto____$1,paciente_id,aval_id,paciente_avals,paciente_previous_status,opts__14482__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__20421,event,parent_id,id){
return (function (idx,x){
var opts__14482__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.not.call(null,(function (){var opts__14482__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = paciente_previous_status;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-previous-status","paciente-previous-status",921403107,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"paciente-previous-status","paciente-previous-status",921403107,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__14483__auto__;
});})(opts__14482__auto____$4,opts__14482__auto____$3,opts__14482__auto____$2,opts__14482__auto____$1,paciente_id,aval_id,paciente_avals,paciente_previous_status,opts__14482__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__20421,event,parent_id,id))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"paciente-previous-status","paciente-previous-status",921403107,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = paciente_avals;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"paciente-avals","paciente-avals",-955168534,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map-indexed","map-indexed",-1391025435,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"paciente-previous-status","paciente-previous-status",921403107,null))),new cljs.core.Symbol(null,"paciente-avals","paciente-avals",-955168534,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),cljs.core.list(new cljs.core.Symbol(null,"map-indexed","map-indexed",-1391025435,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"paciente-previous-status","paciente-previous-status",921403107,null))),new cljs.core.Symbol(null,"paciente-avals","paciente-avals",-955168534,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120)], null),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),cljs.core.list(new cljs.core.Symbol(null,"map-indexed","map-indexed",-1391025435,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"paciente-previous-status","paciente-previous-status",921403107,null))),new cljs.core.Symbol(null,"paciente-avals","paciente-avals",-955168534,null)))),(2)));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"aval-id","aval-id",788740799,null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120),new cljs.core.Symbol(null,"aval-id","aval-id",788740799,null)], null),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120)], null))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),true),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),false))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120)], null),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),cljs.core.list(new cljs.core.Symbol(null,"map-indexed","map-indexed",-1391025435,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"paciente-previous-status","paciente-previous-status",921403107,null))),new cljs.core.Symbol(null,"paciente-avals","paciente-avals",-955168534,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"parent-id","parent-id",239802396,null),new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Symbol(null,"aval-id","aval-id",788740799,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"parent-id","parent-id",239802396,null),new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Symbol(null,"paciente-avals","paciente-avals",-955168534,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null)),new cljs.core.Symbol(null,"paciente-previous-status","paciente-previous-status",921403107,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"aval-id","aval-id",788740799,null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120),new cljs.core.Symbol(null,"aval-id","aval-id",788740799,null)], null),new cljs.core.Symbol(null,"not","not",1044554643,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120)], null))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),true),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),false))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),new cljs.core.Symbol(null,"paciente-id","paciente-id",-1126589585,null),new cljs.core.Keyword(null,"avals","avals",659695120)], null),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),cljs.core.list(new cljs.core.Symbol(null,"map-indexed","map-indexed",-1391025435,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"paciente-previous-status","paciente-previous-status",921403107,null))),new cljs.core.Symbol(null,"paciente-avals","paciente-avals",-955168534,null))))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14483__auto__;
}catch (e20424){var e = e20424;
throw e;
}});
} else {
react_med.screens.paciente_relatorio.ellipses_config.check_aval = (function react_med$screens$paciente_relatorio$ellipses_config$check_aval(app_state,p__20425){
var vec__20426 = p__20425;
var event = cljs.core.nth.call(null,vec__20426,(0),null);
var parent_id = cljs.core.nth.call(null,vec__20426,(1),null);
var id = cljs.core.nth.call(null,vec__20426,(2),null);
var paciente_id = (function (){var or__4131__auto__ = parent_id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return id;
}
})();
var aval_id = (cljs.core.truth_(parent_id)?id:null);
var paciente_avals = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),paciente_id,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null));
var paciente_previous_status = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),paciente_id,new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null));
if(cljs.core.truth_(aval_id)){
var $ = app_state;
var $__$1 = cljs.core.update_in.call(null,$,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),paciente_id,new cljs.core.Keyword(null,"avals","avals",659695120),aval_id], null),cljs.core.not);
if(cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.get_in.call(null,$__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),paciente_id,new cljs.core.Keyword(null,"avals","avals",659695120)], null)))){
return cljs.core.assoc_in.call(null,$__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),paciente_id,new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),true);
} else {
return cljs.core.assoc_in.call(null,$__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),paciente_id,new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),false);
}
} else {
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),paciente_id,new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),cljs.core.not.call(null,paciente_previous_status)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841),paciente_id,new cljs.core.Keyword(null,"avals","avals",659695120)], null),cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (paciente_id,aval_id,paciente_avals,paciente_previous_status,vec__20426,event,parent_id,id){
return (function (idx,x){
return cljs.core.not.call(null,paciente_previous_status);
});})(paciente_id,aval_id,paciente_avals,paciente_previous_status,vec__20426,event,parent_id,id))
,paciente_avals)));
}
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses-config","check-aval","react-med.screens.paciente-relatorio.ellipses-config/check-aval",1364008223),react_med.screens.paciente_relatorio.ellipses_config.check_aval);
react_med.screens.paciente_relatorio.ellipses_config.avals_checked = (function react_med$screens$paciente_relatorio$ellipses_config$avals_checked(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"avals-checked","avals-checked",477041841)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses-config","avals-checked","react-med.screens.paciente-relatorio.ellipses-config/avals-checked",-1303395027),react_med.screens.paciente_relatorio.ellipses_config.avals_checked);
react_med.screens.paciente_relatorio.ellipses_config.update_avaliacoes = (function react_med$screens$paciente_relatorio$ellipses_config$update_avaliacoes(avals,avals_checked){
return cljs.core.map.call(null,(function (p__20429){
var map__20430 = p__20429;
var map__20430__$1 = (((((!((map__20430 == null))))?(((((map__20430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20430):map__20430);
var id = cljs.core.get.call(null,map__20430__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data = cljs.core.get.call(null,map__20430__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var deleted_QMARK_ = cljs.core.get.call(null,map__20430__$1,new cljs.core.Keyword(null,"deleted?","deleted?",-486602771));
if(cljs.core.not.call(null,deleted_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"label","label",1718410804),react_med.util.yyyy_mm_dd__GT_dd_mm_yyyy.call(null,data),new cljs.core.Keyword(null,"checked?","checked?",2024809091),cljs.core.get.call(null,avals_checked,id)], null);
} else {
return null;
}
}),avals);
});
react_med.screens.paciente_relatorio.ellipses_config.pacientes_e_avals = (function react_med$screens$paciente_relatorio$ellipses_config$pacientes_e_avals(p__20437){
var vec__20438 = p__20437;
var pacientes = cljs.core.nth.call(null,vec__20438,(0),null);
var avals_checked = cljs.core.nth.call(null,vec__20438,(1),null);
return cljs.core.map.call(null,((function (vec__20438,pacientes,avals_checked){
return (function (p1__20436_SHARP_){
return cljs.core.update_in.call(null,p1__20436_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null),react_med.screens.paciente_relatorio.ellipses_config.update_avaliacoes,cljs.core.get_in.call(null,avals_checked,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20436_SHARP_),new cljs.core.Keyword(null,"avals","avals",659695120)], null)));
});})(vec__20438,pacientes,avals_checked))
,cljs.core.map.call(null,((function (vec__20438,pacientes,avals_checked){
return (function (p1__20435_SHARP_){
return cljs.core.assoc.call(null,p1__20435_SHARP_,new cljs.core.Keyword(null,"checked?","checked?",2024809091),cljs.core.get_in.call(null,avals_checked,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20435_SHARP_),new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null)));
});})(vec__20438,pacientes,avals_checked))
,cljs.core.map.call(null,((function (vec__20438,pacientes,avals_checked){
return (function (p1__20434_SHARP_){
return clojure.set.rename_keys.call(null,p1__20434_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nome","nome",1100401122),new cljs.core.Keyword(null,"label","label",1718410804)], null));
});})(vec__20438,pacientes,avals_checked))
,cljs.core.map.call(null,((function (vec__20438,pacientes,avals_checked){
return (function (p1__20433_SHARP_){
return cljs.core.update.call(null,p1__20433_SHARP_,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.filter,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals));
});})(vec__20438,pacientes,avals_checked))
,cljs.core.map.call(null,((function (vec__20438,pacientes,avals_checked){
return (function (p1__20432_SHARP_){
return cljs.core.select_keys.call(null,p1__20432_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"nome","nome",1100401122),new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)], null));
});})(vec__20438,pacientes,avals_checked))
,pacientes)))));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses-config","pacientes-e-avals","react-med.screens.paciente-relatorio.ellipses-config/pacientes-e-avals",1635590202),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.lista-pacientes","pacientes","react-med.screens.lista-pacientes/pacientes",-1185597765)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses-config","avals-checked","react-med.screens.paciente-relatorio.ellipses-config/avals-checked",-1303395027)], null),react_med.screens.paciente_relatorio.ellipses_config.pacientes_e_avals);
react_med.screens.paciente_relatorio.ellipses_config.points_selection_component = (function react_med$screens$paciente_relatorio$ellipses_config$points_selection_component(){
var structure__GT_checkboxes = (function() {
var react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb = null;
var react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb__1 = (function (structure){
return react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb.call(null,structure,(0),null);
});
var react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb__3 = (function (p__20441,padding,parent_id){
var map__20442 = p__20441;
var map__20442__$1 = (((((!((map__20442 == null))))?(((((map__20442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20442):map__20442);
var i = map__20442__$1;
var label = cljs.core.get.call(null,map__20442__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var checked_QMARK_ = cljs.core.get.call(null,map__20442__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var avaliacoes = cljs.core.get.call(null,map__20442__$1,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982));
var id = cljs.core.get.call(null,map__20442__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.ellipses_config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,react_med.screens.paciente_relatorio.ellipses_config.item_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),((10) * padding)], null)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__20442,map__20442__$1,i,label,checked_QMARK_,avaliacoes,id){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses-config","check-aval","react-med.screens.paciente-relatorio.ellipses-config/check-aval",1364008223),parent_id,id], null));
});})(map__20442,map__20442__$1,i,label,checked_QMARK_,avaliacoes,id))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-checkbox","paper-checkbox",-1909263203),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["--paper-checkbox-margin","10px","--paper-checkbox-size","20px"], null),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(-1),(cljs.core.truth_(checked_QMARK_)?new cljs.core.Keyword(null,"checked","checked",-50955819):null),checked_QMARK_])], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null))], null),cljs.core.mapcat.call(null,react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb,avaliacoes,cljs.core.repeat.call(null,(padding + (1))),cljs.core.repeat.call(null,id)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.paciente-separator","div.paciente-separator",-1779387219),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"5px"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-paciente-separator"].join('')], null))], null));
});
react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb = function(p__20441,padding,parent_id){
switch(arguments.length){
case 1:
return react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb__1.call(this,p__20441);
case 3:
return react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb__3.call(this,p__20441,padding,parent_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb.cljs$core$IFn$_invoke$arity$1 = react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb__1;
react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb.cljs$core$IFn$_invoke$arity$3 = react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb__3;
return react_med$screens$paciente_relatorio$ellipses_config$points_selection_component_$_s__GT_cb;
})()
;
var pacientes_e_avals = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses-config","pacientes-e-avals","react-med.screens.paciente-relatorio.ellipses-config/pacientes-e-avals",1635590202)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"fontSize": "larger", "fontWeight": "bold", "marginTop": "15px"})], null),"Sele\u00E7\u00E3o de Pontos"], null),((cljs.core.empty_QMARK_.call(null,pacientes_e_avals))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.ellipses_config.global$module$menu_item,"Nenhuma avalia\u00E7\u00E3o cadastrada ainda."], null):cljs.core.map.call(null,structure__GT_checkboxes,pacientes_e_avals))], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.paciente_relatorio.ellipses_config.selected_population = (function react_med$screens$paciente_relatorio$ellipses_config$selected_population(app_state,p__20444){
var vec__20445 = p__20444;
var event = cljs.core.nth.call(null,vec__20445,(0),null);
var population = cljs.core.nth.call(null,vec__20445,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"chosen-population","chosen-population",1813213346)], null),new cljs.core.Symbol(null,"population","population",430629660,null)));

var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"chosen-population","chosen-population",1813213346)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"chosen-population","chosen-population",1813213346)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = population;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"population","population",430629660,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"chosen-population","chosen-population",1813213346)], null),new cljs.core.Symbol(null,"population","population",430629660,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14483__auto__;
}catch (e20448){var e = e20448;
throw e;
}});
} else {
react_med.screens.paciente_relatorio.ellipses_config.selected_population = (function react_med$screens$paciente_relatorio$ellipses_config$selected_population(app_state,p__20449){
var vec__20450 = p__20449;
var event = cljs.core.nth.call(null,vec__20450,(0),null);
var population = cljs.core.nth.call(null,vec__20450,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"chosen-population","chosen-population",1813213346)], null),population);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses-config","selected-population","react-med.screens.paciente-relatorio.ellipses-config/selected-population",41648430),react_med.screens.paciente_relatorio.ellipses_config.selected_population);
react_med.screens.paciente_relatorio.ellipses_config.chosen_population = (function react_med$screens$paciente_relatorio$ellipses_config$chosen_population(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ellipses-config","ellipses-config",-284667458),new cljs.core.Keyword(null,"chosen-population","chosen-population",1813213346)], null),"women-21-49-buffa");
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses-config","chosen-population","react-med.screens.paciente-relatorio.ellipses-config/chosen-population",-970669786),react_med.screens.paciente_relatorio.ellipses_config.chosen_population);
react_med.screens.paciente_relatorio.ellipses_config.population_radio_items = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"population","population",-1209901867),"women-21-49-buffa",new cljs.core.Keyword(null,"label","label",1718410804),"Mulheres 21-49 anos, adultos dos EUA [Buffa et al., PloS one, 8:e58533, 2013"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"population","population",-1209901867),"men-21-49-buffa",new cljs.core.Keyword(null,"label","label",1718410804),"Homens 21-49 anos, adultos dos EUA [Buffa et al., PloS one, 8:e58533, 2013"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"population","population",-1209901867),"women-65-100-saragat",new cljs.core.Keyword(null,"label","label",1718410804),"Mulheres 65-100 anos, Italianas [Saragat et al., Exp Gerontol, 50: 52-56, 2014]"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"population","population",-1209901867),"men-65-100-saragat",new cljs.core.Keyword(null,"label","label",1718410804),"Homens 65-100 anos, Italianos [Saragat et al., Exp Gerontol, 50: 52-56, 2014]"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"population","population",-1209901867),"women-18-30-ibanez",new cljs.core.Keyword(null,"label","label",1718410804),"Mulheres 18-30 anos, \u00CDtalo-hisp\u00E2nico [Ibanez et al., Am J Hum Biol. 27:871-876: 2015]"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"population","population",-1209901867),"men-18-30-ibanez",new cljs.core.Keyword(null,"label","label",1718410804),"Homens 18-30 anos, \u00CDtalo-hisp\u00E2nico [Ibanez et al., Am J Hum Biol. 27:871-876: 2015]"], null)], null);
react_med.screens.paciente_relatorio.ellipses_config.population_radio_items_checked = (function react_med$screens$paciente_relatorio$ellipses_config$population_radio_items_checked(chosen){
return cljs.core.map.call(null,(function (p__20453){
var map__20454 = p__20453;
var map__20454__$1 = (((((!((map__20454 == null))))?(((((map__20454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20454):map__20454);
var item = map__20454__$1;
var population = cljs.core.get.call(null,map__20454__$1,new cljs.core.Keyword(null,"population","population",-1209901867));
return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"checked?","checked?",2024809091),cljs.core._EQ_.call(null,population,chosen));
}),react_med.screens.paciente_relatorio.ellipses_config.population_radio_items);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses-config","population-radio-items-checked","react-med.screens.paciente-relatorio.ellipses-config/population-radio-items-checked",100103973),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses-config","chosen-population","react-med.screens.paciente-relatorio.ellipses-config/chosen-population",-970669786)], null),react_med.screens.paciente_relatorio.ellipses_config.population_radio_items_checked);
react_med.screens.paciente_relatorio.ellipses_config.population_selection_component = (function react_med$screens$paciente_relatorio$ellipses_config$population_selection_component(){
var items = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses-config","population-radio-items-checked","react-med.screens.paciente-relatorio.ellipses-config/population-radio-items-checked",100103973)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"fontSize": "larger", "fontWeight": "bold"})], null),"Popula\u00E7\u00E3o de Refer\u00EAncia"], null),cljs.core.map.call(null,((function (items){
return (function (p__20456){
var map__20457 = p__20456;
var map__20457__$1 = (((((!((map__20457 == null))))?(((((map__20457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20457):map__20457);
var population = cljs.core.get.call(null,map__20457__$1,new cljs.core.Keyword(null,"population","population",-1209901867));
var label = cljs.core.get.call(null,map__20457__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var checked_QMARK_ = cljs.core.get.call(null,map__20457__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.ellipses_config.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__20457,map__20457__$1,population,label,checked_QMARK_,items){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.ellipses-config","selected-population","react-med.screens.paciente-relatorio.ellipses-config/selected-population",41648430),population], null));
});})(map__20457,map__20457__$1,population,label,checked_QMARK_,items))
,new cljs.core.Keyword(null,"style","style",-496642736),react_med.screens.paciente_relatorio.ellipses_config.item_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.ellipses_config.global$module$radio,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),population], null));
});})(items))
,items)], null);
});
react_med.screens.paciente_relatorio.ellipses_config.component = (function react_med$screens$paciente_relatorio$ellipses_config$component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses_config.population_selection_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses_config.points_selection_component], null)], null);
});
react_med.screens.paciente_relatorio.ellipses_config.view = (function react_med$screens$paciente_relatorio$ellipses_config$view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.default$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.ellipses_config.component], null)], null);
});

//# sourceMappingURL=ellipses_config.js.map
