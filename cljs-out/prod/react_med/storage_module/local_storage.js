// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.storage_module.local_storage');
goog.require('cljs.core');
goog.require('akiroz.re_frame.storage');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('react_med.storage_module.firebase');
goog.require('react_med.storage_module.initial_state');
akiroz.re_frame.storage.reg_co_fx_BANG_.call(null,new cljs.core.Keyword(null,"react-med-app-state","react-med-app-state",1516655683),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"cofx","cofx",2013202907),new cljs.core.Keyword(null,"store","store",1512230022)], null));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("react-med.storage-module.local-storage","save-domain-to-local-storage","react-med.storage-module.local-storage/save-domain-to-local-storage",-403399307),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"store","store",1512230022))], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (p__19303,_){
var map__19304 = p__19303;
var map__19304__$1 = (((((!((map__19304 == null))))?(((((map__19304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19304):map__19304);
var db = cljs.core.get.call(null,map__19304__$1,new cljs.core.Keyword(null,"db","db",993250759));
var store = cljs.core.get.call(null,map__19304__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"store","store",-1142205747,null)),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"store","store",1512230022),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","save-to-firebase","react-med.storage-module.firebase/save-to-firebase",-1606458749),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003)], null)], null)));

var opts__19140__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = (cljs.core.truth_((function (){var opts__19140__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = (function (){var and__4120__auto__ = (function (){var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1((function (){var opts__19140__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = store;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19141__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"store","store",-1142205747,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19141__auto__;
})();
if(cljs.core.truth_(and__4120__auto__)){
var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1((function (){var opts__19140__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19141__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19141__auto__;
} else {
return and__4120__auto__;
}
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"store","store",-1142205747,null)),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19141__auto__;
})())?(function (){var opts__19140__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"store","store",1512230022),cljs.core.assoc.call(null,store,new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","save-to-firebase","react-med.storage-module.firebase/save-to-firebase",-1606458749),cljs.core.assoc.call(null,store,new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(db))], null)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"store","store",1512230022),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","save-to-firebase","react-med.storage-module.firebase/save-to-firebase",-1606458749),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19141__auto__;
})():(function (){var opts__19140__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003)], null)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19141__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"store","store",-1142205747,null)),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"store","store",1512230022),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","save-to-firebase","react-med.storage-module.firebase/save-to-firebase",-1606458749),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19141__auto__;
}catch (e19306){var e = e19306;
throw e;
}}):(function (p__19307,_){
var map__19308 = p__19307;
var map__19308__$1 = (((((!((map__19308 == null))))?(((((map__19308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19308):map__19308);
var db = cljs.core.get.call(null,map__19308__$1,new cljs.core.Keyword(null,"db","db",993250759));
var store = cljs.core.get.call(null,map__19308__$1,new cljs.core.Keyword(null,"store","store",1512230022));
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(store);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(db);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"store","store",1512230022),cljs.core.assoc.call(null,store,new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","save-to-firebase","react-med.storage-module.firebase/save-to-firebase",-1606458749),cljs.core.assoc.call(null,store,new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(db))], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003)], null)], null);
}
})));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("react-med.storage-module.local-storage","load-domain-from-local-storage","react-med.storage-module.local-storage/load-domain-from-local-storage",-1642872826),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"store","store",1512230022))], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (p__19310,_){
var map__19311 = p__19310;
var map__19311__$1 = (((((!((map__19311 == null))))?(((((map__19311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19311):map__19311);
var db = cljs.core.get.call(null,map__19311__$1,new cljs.core.Keyword(null,"db","db",993250759));
var store = cljs.core.get.call(null,map__19311__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"store","store",-1142205747,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003)], null)], null)));

var opts__19140__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = (cljs.core.truth_((function (){var opts__19140__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1((function (){var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = store;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19141__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"store","store",-1142205747,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19141__auto__;
})())?(function (){var opts__19140__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,store,react_med.storage_module.initial_state.ui_initial_state)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19141__auto__;
})():(function (){var opts__19140__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003)], null)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19141__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"store","store",-1142205747,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19141__auto__;
}catch (e19313){var e = e19313;
throw e;
}}):(function (p__19314,_){
var map__19315 = p__19314;
var map__19315__$1 = (((((!((map__19315 == null))))?(((((map__19315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19315):map__19315);
var db = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword(null,"db","db",993250759));
var store = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword(null,"store","store",1512230022));
if(cljs.core.truth_(new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(store))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,store,react_med.storage_module.initial_state.ui_initial_state)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003)], null)], null);
}
})));

//# sourceMappingURL=local_storage.js.map
