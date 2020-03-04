// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.storage_module.firebase');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('react_med.storage_module.initial_state');
react_med.storage_module.firebase.global$module$firebase = goog.global["firebase"];
react_med.storage_module.firebase.firebase_config = ({"apiKey": "AIzaSyBUX289bdtzi-V6w6rsk0GlYOIkYmTmm6o", "authDomain": "react-med.firebaseapp.com", "databaseURL": "https://react-med.firebaseio.com", "projectId": "react-med", "storageBucket": "react-med.appspot.com", "messagingSenderId": "734281716491", "appId": "1:734281716491:web:06b9f356d360f6fcfcc80e", "measurementId": "G-6HQBPS294N"});
react_med.storage_module.firebase.firebase_db = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),react_med.storage_module.firebase.global$module$firebase.apps.length)){
react_med.storage_module.firebase.global$module$firebase.initializeApp(react_med.storage_module.firebase.firebase_config);
} else {
}

return react_med.storage_module.firebase.global$module$firebase.database();
})()
;
react_med.storage_module.firebase.firebase_save = (function react_med$storage_module$firebase$firebase_save(db_map){
var json = cljs.core.clj__GT_js(db_map);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db_map,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)))){
} else {
throw (new Error(["Assert failed: ","The given map is different if converted back from JSON.","\n","(= db-map (js->clj json :keywordize-keys true))"].join('')));
}

var temp__5735__auto__ = react_med.storage_module.firebase.global$module$firebase.auth().currentUser;
if(cljs.core.truth_(temp__5735__auto__)){
var user = temp__5735__auto__;
var user_email = user.email;
var name_in_email = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(user_email,"@"));
var user_fb_uid = user.uid;
return react_med.storage_module.firebase.firebase_db.ref(["users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_in_email),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_fb_uid)].join('')).set(cljs.core.clj__GT_js(db_map));
} else {
return null;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_save_DASH_to_DASH_firebase,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (app_state,p__20011){
var vec__20012 = p__20011;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20012,(0),null);
var to_save = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20012,(1),null);
var _PLUS_debux_dbg_opts_PLUS__20021 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$firebase_DASH_save,cljs.core.cst$sym$to_DASH_save));

var opts__19887__auto___20022 = _PLUS_debux_dbg_opts_PLUS__20021;
var result__19888__auto___20023 = react_med.storage_module.firebase.firebase_save((function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS__20021;
var result__19888__auto__ = to_save;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$to_DASH_save,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto___20023,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$firebase_DASH_save,cljs.core.cst$sym$to_DASH_save),cljs.core.cst$kw$indent_DASH_level,(0)], null));

}catch (e20015){var e_20024 = e20015;
throw e_20024;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.cst$sym$app_DASH_state);

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20016){var e = e20016;
throw e;
}}):(function (app_state,p__20017){
var vec__20018 = p__20017;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20018,(0),null);
var to_save = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20018,(1),null);
react_med.storage_module.firebase.firebase_save(to_save);

return app_state;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_test2,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__20025){
var vec__20026 = p__20025;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20026,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20026,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$js_SLASH_console$log,cljs.core.cst$sym$snapshot));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = console.log((function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = snapshot;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$snapshot,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$js_SLASH_console$log,cljs.core.cst$sym$snapshot),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20029){var e = e20029;
throw e;
}}):(function (_,p__20030){
var vec__20031 = p__20030;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20031,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20031,(1),null);
return console.log(snapshot);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$test_DASH_fb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20034 = cljs.core.cst$kw$store;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__20034) : re_frame.core.inject_cofx.call(null,G__20034));
})()], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.PersistentArrayMap.EMPTY);

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20035){var e = e20035;
throw e;
}}):(function (_,___$1){
return cljs.core.PersistentArrayMap.EMPTY;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (app_state,_){
var _PLUS_debux_dbg_opts_PLUS__20040 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$user,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$fb,cljs.core.cst$sym$$auth,cljs.core.cst$sym$$_DASH_currentUser),cljs.core.cst$sym$user_DASH_email,cljs.core.list(cljs.core.cst$sym$$_DASH_email,cljs.core.cst$sym$user),cljs.core.cst$sym$name_DASH_in_DASH_email,cljs.core.list(cljs.core.cst$sym$first,cljs.core.list(cljs.core.cst$sym$clojure$string_SLASH_split,cljs.core.cst$sym$user_DASH_email,"@")),cljs.core.cst$sym$user_DASH_fb_DASH_uid,cljs.core.list(cljs.core.cst$sym$$_DASH_uid,cljs.core.cst$sym$user)], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$firebase_DASH_db,cljs.core.list(cljs.core.cst$sym$$ref,cljs.core.list(cljs.core.cst$sym$str,"users/",cljs.core.cst$sym$name_DASH_in_DASH_email,"-",cljs.core.cst$sym$user_DASH_fb_DASH_uid)),cljs.core.list(cljs.core.cst$sym$$once,"value",cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$snapshot], null),cljs.core.list(cljs.core.cst$sym$re_DASH_frame_SLASH_dispatch_DASH_sync,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase_DASH_callback,cljs.core.cst$sym$snapshot], null)))))));

var opts__19887__auto___20041 = _PLUS_debux_dbg_opts_PLUS__20040;
var result__19888__auto___20042 = (function (){var user = debux.common.util.spy_first(debux.common.util.spy_first(debux.common.util.spy_first(react_med.storage_module.firebase.global$module$firebase,cljs.core.cst$sym$fb,(4)).auth(),cljs.core.cst$sym$$auth,(3)).currentUser,cljs.core.cst$sym$$_DASH_currentUser,(2));
var user_email = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS__20040;
var result__19888__auto__ = (function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS__20040;
var result__19888__auto__ = user;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$user,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})().email;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$$_DASH_email,cljs.core.cst$sym$user),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var name_in_email = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS__20040;
var result__19888__auto__ = cljs.core.first((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS__20040;
var result__19888__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS__20040;
var result__19888__auto__ = user_email;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$user_DASH_email,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})(),"@");
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$clojure$string_SLASH_split,cljs.core.cst$sym$user_DASH_email,"@"),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$first,cljs.core.list(cljs.core.cst$sym$clojure$string_SLASH_split,cljs.core.cst$sym$user_DASH_email,"@")),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var user_fb_uid = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS__20040;
var result__19888__auto__ = (function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS__20040;
var result__19888__auto__ = user;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$user,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})().uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$$_DASH_uid,cljs.core.cst$sym$user),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
return debux.common.util.spy_first(debux.common.util.spy_first(debux.common.util.spy_first(react_med.storage_module.firebase.firebase_db,cljs.core.cst$sym$firebase_DASH_db,(3)).ref((function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS__20040;
var result__19888__auto__ = ["users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS__20040;
var result__19888__auto__ = name_in_email;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$name_DASH_in_DASH_email,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS__20040;
var result__19888__auto__ = user_fb_uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$user_DASH_fb_DASH_uid,cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})())].join('');
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$str,"users/",cljs.core.cst$sym$name_DASH_in_DASH_email,"-",cljs.core.cst$sym$user_DASH_fb_DASH_uid),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})()),cljs.core.list(cljs.core.cst$sym$$ref,cljs.core.list(cljs.core.cst$sym$str,"users/",cljs.core.cst$sym$name_DASH_in_DASH_email,"-",cljs.core.cst$sym$user_DASH_fb_DASH_uid)),(2)).once("value",(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS__20040;
var result__19888__auto__ = ((function (opts__19887__auto____$1,user,user_email,name_in_email,user_fb_uid,opts__19887__auto___20041,_PLUS_debux_dbg_opts_PLUS__20040){
return (function (snapshot){
var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS__20040;
var result__19888__auto__ = (function (){var G__20037 = (function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS__20040;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase_DASH_callback,(function (){var opts__19887__auto____$4 = _PLUS_debux_dbg_opts_PLUS__20040;
var result__19888__auto__ = snapshot;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$snapshot,cljs.core.cst$kw$indent_DASH_level,(5)], null));

return result__19888__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase_DASH_callback,cljs.core.cst$sym$snapshot], null),cljs.core.cst$kw$indent_DASH_level,(4)], null));

return result__19888__auto__;
})();
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__20037) : re_frame.core.dispatch_sync.call(null,G__20037));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$re_DASH_frame_SLASH_dispatch_DASH_sync,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase_DASH_callback,cljs.core.cst$sym$snapshot], null)),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
});})(opts__19887__auto____$1,user,user_email,name_in_email,user_fb_uid,opts__19887__auto___20041,_PLUS_debux_dbg_opts_PLUS__20040))
;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$snapshot], null),cljs.core.list(cljs.core.cst$sym$re_DASH_frame_SLASH_dispatch_DASH_sync,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase_DASH_callback,cljs.core.cst$sym$snapshot], null))),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})()),cljs.core.list(cljs.core.cst$sym$$once,"value",cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$snapshot], null),cljs.core.list(cljs.core.cst$sym$re_DASH_frame_SLASH_dispatch_DASH_sync,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase_DASH_callback,cljs.core.cst$sym$snapshot], null)))),(1));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto___20042,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$user,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$$_DASH_currentUser),cljs.core.cst$sym$user_DASH_email,cljs.core.list(cljs.core.cst$sym$$_DASH_email,cljs.core.cst$sym$user),cljs.core.cst$sym$name_DASH_in_DASH_email,cljs.core.list(cljs.core.cst$sym$first,cljs.core.list(cljs.core.cst$sym$clojure$string_SLASH_split,cljs.core.cst$sym$user_DASH_email,"@")),cljs.core.cst$sym$user_DASH_fb_DASH_uid,cljs.core.list(cljs.core.cst$sym$$_DASH_uid,cljs.core.cst$sym$user)], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$$once,"value",cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$snapshot], null),cljs.core.list(cljs.core.cst$sym$re_DASH_frame_SLASH_dispatch_DASH_sync,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase_DASH_callback,cljs.core.cst$sym$snapshot], null)))))),cljs.core.cst$kw$indent_DASH_level,(0)], null));

}catch (e20036){var e_20043 = e20036;
throw e_20043;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"loading"));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.assoc_in((function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = app_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$app_DASH_state,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),"loading");
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$app_DASH_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"loading"),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20038){var e = e20038;
throw e;
}}):(function (app_state,_){
var user_20044 = react_med.storage_module.firebase.global$module$firebase.auth().currentUser;
var user_email_20045 = user_20044.email;
var name_in_email_20046 = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(user_email_20045,"@"));
var user_fb_uid_20047 = user_20044.uid;
react_med.storage_module.firebase.firebase_db.ref(["users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_in_email_20046),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_fb_uid_20047)].join('')).once("value",((function (user_20044,user_email_20045,name_in_email_20046,user_fb_uid_20047){
return (function (snapshot){
var G__20039 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase_DASH_callback,snapshot], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__20039) : re_frame.core.dispatch_sync.call(null,G__20039));
});})(user_20044,user_email_20045,name_in_email_20046,user_fb_uid_20047))
);

return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"loading");
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase_DASH_callback,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__20048){
var vec__20049 = p__20048;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20049,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20049,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$restored_DASH_from_DASH_firebase,cljs.core.list(cljs.core.cst$sym$some_DASH__GT_,cljs.core.cst$sym$snapshot,cljs.core.list(cljs.core.cst$sym$$val),cljs.core.list(cljs.core.cst$sym$js_DASH__GT_clj,cljs.core.cst$kw$keywordize_DASH_keys,true)),cljs.core.cst$sym$restored_DASH_state,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$restored_DASH_from_DASH_firebase,cljs.core.cst$sym$initial_DASH_state_SLASH_ui_DASH_initial_DASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$authentication,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user_DASH_email,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$fb,cljs.core.cst$sym$$auth,cljs.core.cst$sym$$_DASH_currentUser,cljs.core.cst$sym$$_DASH_email)], null)], null)),cljs.core.cst$sym$default_DASH_state,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$initial_DASH_state_SLASH_domain_DASH_initial_DASH_state,cljs.core.cst$sym$initial_DASH_state_SLASH_ui_DASH_initial_DASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$authentication,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user_DASH_email,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$fb,cljs.core.cst$sym$$auth,cljs.core.cst$sym$$_DASH_currentUser,cljs.core.cst$sym$$_DASH_email)], null)], null))], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$restored_DASH_from_DASH_firebase,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$restored_DASH_state,cljs.core.cst$kw$store,cljs.core.cst$sym$restored_DASH_state], null),cljs.core.list(cljs.core.cst$sym$do,cljs.core.list(cljs.core.cst$sym$js_SLASH_console$log,"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$default_DASH_state,cljs.core.cst$kw$store,cljs.core.cst$sym$default_DASH_state], null)))));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){var restored_from_firebase = (function (){var G__20052 = debux.common.util.spy_first(snapshot,cljs.core.cst$sym$snapshot,(4));
var G__20052__$1 = (((G__20052 == null))?null:debux.common.util.spy_first(G__20052.val(),cljs.core.list(cljs.core.cst$sym$$val),(5)));
var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (((G__20052__$1 == null))?null:debux.common.util.spy_first(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__20052__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)),cljs.core.list(cljs.core.cst$sym$js_DASH__GT_clj,cljs.core.cst$kw$keywordize_DASH_keys,true),(4)));
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_nil_QMARK_,cljs.core.cst$sym$G__20052),null,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$js_DASH__GT_clj,cljs.core.cst$kw$keywordize_DASH_keys,true))),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})();
var restored_state = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = restored_from_firebase;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$restored_DASH_from_DASH_firebase,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = react_med.storage_module.initial_state.ui_initial_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$initial_DASH_state_SLASH_ui_DASH_initial_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$authentication,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user_DASH_email,react_med.storage_module.firebase.global$module$firebase.auth().currentUser.email], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$authentication,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user_DASH_email,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$fb,cljs.core.cst$sym$$auth,cljs.core.cst$sym$$_DASH_currentUser,cljs.core.cst$sym$$_DASH_email)], null)], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})()], 0));
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$restored_DASH_from_DASH_firebase,cljs.core.cst$sym$initial_DASH_state_SLASH_ui_DASH_initial_DASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$authentication,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user_DASH_email,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$fb,cljs.core.cst$sym$$auth,cljs.core.cst$sym$$_DASH_currentUser,cljs.core.cst$sym$$_DASH_email)], null)], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var default_state = (function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = react_med.storage_module.initial_state.domain_initial_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$initial_DASH_state_SLASH_domain_DASH_initial_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = react_med.storage_module.initial_state.ui_initial_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$initial_DASH_state_SLASH_ui_DASH_initial_DASH_state,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$authentication,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user_DASH_email,react_med.storage_module.firebase.global$module$firebase.auth().currentUser.email], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$authentication,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user_DASH_email,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$fb,cljs.core.cst$sym$$auth,cljs.core.cst$sym$$_DASH_currentUser,cljs.core.cst$sym$$_DASH_email)], null)], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})()], 0));
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$initial_DASH_state_SLASH_domain_DASH_initial_DASH_state,cljs.core.cst$sym$initial_DASH_state_SLASH_ui_DASH_initial_DASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$authentication,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user_DASH_email,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$fb,cljs.core.cst$sym$$auth,cljs.core.cst$sym$$_DASH_currentUser,cljs.core.cst$sym$$_DASH_email)], null)], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})();
var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (cljs.core.truth_((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = restored_from_firebase;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$restored_DASH_from_DASH_firebase,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})())?(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,restored_state,cljs.core.cst$kw$store,restored_state], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$restored_DASH_state,cljs.core.cst$kw$store,cljs.core.cst$sym$restored_DASH_state], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})():(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (function (){
var opts__19887__auto___20059__$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto___20060 = console.log("Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado.");
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto___20060,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$js_SLASH_console$log,"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),cljs.core.cst$kw$indent_DASH_level,(3)], null));


var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,default_state,cljs.core.cst$kw$store,default_state], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$default_DASH_state,cljs.core.cst$kw$store,cljs.core.cst$sym$default_DASH_state], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})()
;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$do,cljs.core.list(cljs.core.cst$sym$js_SLASH_console$log,"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$default_DASH_state,cljs.core.cst$kw$store,cljs.core.cst$sym$default_DASH_state], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$restored_DASH_from_DASH_firebase,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$restored_DASH_state,cljs.core.cst$kw$store,cljs.core.cst$sym$restored_DASH_state], null),cljs.core.list(cljs.core.cst$sym$do,cljs.core.list(cljs.core.cst$sym$js_SLASH_console$log,"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$default_DASH_state,cljs.core.cst$kw$store,cljs.core.cst$sym$default_DASH_state], null))),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$restored_DASH_from_DASH_firebase,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_let,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$G__20052,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$snapshot),cljs.core.cst$sym$G__20052,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_nil_QMARK_,cljs.core.cst$sym$G__20052),null,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$$val)))], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_nil_QMARK_,cljs.core.cst$sym$G__20052),null,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$js_DASH__GT_clj,cljs.core.cst$kw$keywordize_DASH_keys,true)))),cljs.core.cst$sym$restored_DASH_state,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$restored_DASH_from_DASH_firebase,cljs.core.cst$sym$initial_DASH_state_SLASH_ui_DASH_initial_DASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$authentication,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user_DASH_email,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$fb,cljs.core.cst$sym$$auth,cljs.core.cst$sym$$_DASH_currentUser,cljs.core.cst$sym$$_DASH_email)], null)], null)),cljs.core.cst$sym$default_DASH_state,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$initial_DASH_state_SLASH_domain_DASH_initial_DASH_state,cljs.core.cst$sym$initial_DASH_state_SLASH_ui_DASH_initial_DASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$authentication,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user_DASH_email,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$fb,cljs.core.cst$sym$$auth,cljs.core.cst$sym$$_DASH_currentUser,cljs.core.cst$sym$$_DASH_email)], null)], null))], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$restored_DASH_from_DASH_firebase,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$restored_DASH_state,cljs.core.cst$kw$store,cljs.core.cst$sym$restored_DASH_state], null),cljs.core.list(cljs.core.cst$sym$do,cljs.core.list(cljs.core.cst$sym$js_SLASH_console$log,"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.cst$sym$default_DASH_state,cljs.core.cst$kw$store,cljs.core.cst$sym$default_DASH_state], null)))),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20053){var e = e20053;
throw e;
}}):(function (_,p__20054){
var vec__20055 = p__20054;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20055,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20055,(1),null);
var restored_from_firebase = (function (){var G__20058 = snapshot;
var G__20058__$1 = (((G__20058 == null))?null:G__20058.val());
if((G__20058__$1 == null)){
return null;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__20058__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
}
})();
var restored_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restored_from_firebase,react_med.storage_module.initial_state.ui_initial_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$authentication,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user_DASH_email,react_med.storage_module.firebase.global$module$firebase.auth().currentUser.email], null)], null)], 0));
var default_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_med.storage_module.initial_state.domain_initial_state,react_med.storage_module.initial_state.ui_initial_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$authentication,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user_DASH_email,react_med.storage_module.firebase.global$module$firebase.auth().currentUser.email], null)], null)], 0));
if(cljs.core.truth_(restored_from_firebase)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,restored_state,cljs.core.cst$kw$store,restored_state], null);
} else {
console.log("Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado.");

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,default_state,cljs.core.cst$kw$store,default_state], null);
}
})));
