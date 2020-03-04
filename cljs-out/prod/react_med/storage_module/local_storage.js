// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.storage_module.local_storage');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('akiroz.re_frame.storage');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('react_med.storage_module.firebase');
goog.require('react_med.storage_module.initial_state');
akiroz.re_frame.storage.reg_co_fx_BANG_(cljs.core.cst$kw$react_DASH_med_DASH_app_DASH_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fx,cljs.core.cst$kw$store,cljs.core.cst$kw$cofx,cljs.core.cst$kw$store], null));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$react_DASH_med$storage_DASH_module$local_DASH_storage_SLASH_save_DASH_domain_DASH_to_DASH_local_DASH_storage,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20063 = cljs.core.cst$kw$store;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__20063) : re_frame.core.inject_cofx.call(null,G__20063));
})()], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__20064,_){
var map__20065 = p__20064;
var map__20065__$1 = (((((!((map__20065 == null))))?(((((map__20065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20065):map__20065);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20065__$1,cljs.core.cst$kw$db);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20065__$1,cljs.core.cst$kw$store);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$kw$domain,cljs.core.cst$sym$store),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$store,cljs.core.cst$kw$domain,cljs.core.list(cljs.core.cst$kw$domain,cljs.core.cst$sym$db)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_save_DASH_to_DASH_firebase,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$store,cljs.core.cst$kw$domain,cljs.core.list(cljs.core.cst$kw$domain,cljs.core.cst$sym$db))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase], null)], null)));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (cljs.core.truth_((function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.cst$kw$domain.cljs$core$IFn$_invoke$arity$1((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = store;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$store,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$kw$domain,cljs.core.cst$sym$store),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})())?(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(store,cljs.core.cst$kw$domain,cljs.core.cst$kw$domain.cljs$core$IFn$_invoke$arity$1(db)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_save_DASH_to_DASH_firebase,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(store,cljs.core.cst$kw$domain,cljs.core.cst$kw$domain.cljs$core$IFn$_invoke$arity$1(db))], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$store,cljs.core.cst$kw$domain,cljs.core.list(cljs.core.cst$kw$domain,cljs.core.cst$sym$db)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_save_DASH_to_DASH_firebase,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$store,cljs.core.cst$kw$domain,cljs.core.list(cljs.core.cst$kw$domain,cljs.core.cst$sym$db))], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})():(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$kw$domain,cljs.core.cst$sym$store),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$store,cljs.core.cst$kw$domain,cljs.core.list(cljs.core.cst$kw$domain,cljs.core.cst$sym$db)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_save_DASH_to_DASH_firebase,cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$store,cljs.core.cst$kw$domain,cljs.core.list(cljs.core.cst$kw$domain,cljs.core.cst$sym$db))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase], null)], null)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20067){var e = e20067;
throw e;
}}):(function (p__20068,_){
var map__20069 = p__20068;
var map__20069__$1 = (((((!((map__20069 == null))))?(((((map__20069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20069):map__20069);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20069__$1,cljs.core.cst$kw$db);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20069__$1,cljs.core.cst$kw$store);
if(cljs.core.truth_(cljs.core.cst$kw$domain.cljs$core$IFn$_invoke$arity$1(store))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(store,cljs.core.cst$kw$domain,cljs.core.cst$kw$domain.cljs$core$IFn$_invoke$arity$1(db)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_save_DASH_to_DASH_firebase,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(store,cljs.core.cst$kw$domain,cljs.core.cst$kw$domain.cljs$core$IFn$_invoke$arity$1(db))], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase], null)], null);
}
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$react_DASH_med$storage_DASH_module$local_DASH_storage_SLASH_load_DASH_domain_DASH_from_DASH_local_DASH_storage,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20071 = cljs.core.cst$kw$store;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__20071) : re_frame.core.inject_cofx.call(null,G__20071));
})()], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__20072,_){
var map__20073 = p__20072;
var map__20073__$1 = (((((!((map__20073 == null))))?(((((map__20073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20073):map__20073);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20073__$1,cljs.core.cst$kw$db);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20073__$1,cljs.core.cst$kw$store);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$kw$domain,cljs.core.cst$sym$store),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$store,cljs.core.cst$sym$initial_DASH_state_SLASH_ui_DASH_initial_DASH_state)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase], null)], null)));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (cljs.core.truth_((function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.cst$kw$domain.cljs$core$IFn$_invoke$arity$1((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = store;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$store,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$kw$domain,cljs.core.cst$sym$store),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})())?(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([store,react_med.storage_module.initial_state.ui_initial_state], 0))], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$store,cljs.core.cst$sym$initial_DASH_state_SLASH_ui_DASH_initial_DASH_state)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})():(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$kw$domain,cljs.core.cst$sym$store),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$store,cljs.core.cst$sym$initial_DASH_state_SLASH_ui_DASH_initial_DASH_state)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase], null)], null)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20075){var e = e20075;
throw e;
}}):(function (p__20076,_){
var map__20077 = p__20076;
var map__20077__$1 = (((((!((map__20077 == null))))?(((((map__20077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20077):map__20077);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20077__$1,cljs.core.cst$kw$db);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20077__$1,cljs.core.cst$kw$store);
if(cljs.core.truth_(cljs.core.cst$kw$domain.cljs$core$IFn$_invoke$arity$1(store))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([store,react_med.storage_module.initial_state.ui_initial_state], 0))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase], null)], null);
}
})));
