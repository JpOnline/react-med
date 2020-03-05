// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.storage_module.firebase');
goog.require('cljs.core');
goog.require('day8.re_frame.tracing');
goog.require('firebase');
goog.require('re_frame.core');
goog.require('react_med.storage_module.initial_state');
react_med.storage_module.firebase.global$module$firebase = goog.global["firebase"];
react_med.storage_module.firebase.firebase_config = ({"apiKey": "AIzaSyBUX289bdtzi-V6w6rsk0GlYOIkYmTmm6o", "authDomain": "react-med.firebaseapp.com", "databaseURL": "https://react-med.firebaseio.com", "projectId": "react-med", "storageBucket": "react-med.appspot.com", "messagingSenderId": "734281716491", "appId": "1:734281716491:web:06b9f356d360f6fcfcc80e", "measurementId": "G-6HQBPS294N"});
react_med.storage_module.firebase.firebase_db = (function (){
if(cljs.core._EQ_.call(null,(0),react_med.storage_module.firebase.global$module$firebase.apps.length)){
react_med.storage_module.firebase.global$module$firebase.initializeApp(react_med.storage_module.firebase.firebase_config);
} else {
}

return react_med.storage_module.firebase.global$module$firebase.database();
})()
;
react_med.storage_module.firebase.firebase_save = (function react_med$storage_module$firebase$firebase_save(db_map){
var json = cljs.core.clj__GT_js.call(null,db_map);
if(cljs.core._EQ_.call(null,db_map,cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))){
} else {
throw (new Error(["Assert failed: ","The given map is different if converted back from JSON.","\n","(= db-map (js->clj json :keywordize-keys true))"].join('')));
}

var temp__5735__auto__ = react_med.storage_module.firebase.global$module$firebase.auth().currentUser;
if(cljs.core.truth_(temp__5735__auto__)){
var user = temp__5735__auto__;
var user_email = user.email;
var name_in_email = cljs.core.first.call(null,clojure.string.split.call(null,user_email,"@"));
var user_fb_uid = user.uid;
return react_med.storage_module.firebase.firebase_db.ref(["users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_in_email),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_fb_uid)].join('')).set(cljs.core.clj__GT_js.call(null,db_map));
} else {
return null;
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.storage-module.firebase","save-to-firebase","react-med.storage-module.firebase/save-to-firebase",-1606458749),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (app_state,p__19263){
var vec__19264 = p__19263;
var event = cljs.core.nth.call(null,vec__19264,(0),null);
var to_save = cljs.core.nth.call(null,vec__19264,(1),null);
var _PLUS_debux_dbg_opts_PLUS__19273 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"firebase-save","firebase-save",1366427688,null),new cljs.core.Symbol(null,"to-save","to-save",-1314391657,null)));

var opts__19139__auto___19274 = _PLUS_debux_dbg_opts_PLUS__19273;
var result__19140__auto___19275 = react_med.storage_module.firebase.firebase_save.call(null,(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS__19273;
var result__19140__auto__ = to_save;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"to-save","to-save",-1314391657,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto___19275,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"firebase-save","firebase-save",1366427688,null),new cljs.core.Symbol(null,"to-save","to-save",-1314391657,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e19267){var e_19276 = e19267;
throw e_19276;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol(null,"app-state","app-state",130568249,null));

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19268){var e = e19268;
throw e;
}}):(function (app_state,p__19269){
var vec__19270 = p__19269;
var event = cljs.core.nth.call(null,vec__19270,(0),null);
var to_save = cljs.core.nth.call(null,vec__19270,(1),null);
react_med.storage_module.firebase.firebase_save.call(null,to_save);

return app_state;
})));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"test2","test2",1460100180),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (p__19277,p__19278){
var map__19279 = p__19277;
var map__19279__$1 = (((((!((map__19279 == null))))?(((((map__19279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19279):map__19279);
var db = cljs.core.get.call(null,map__19279__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__19280 = p__19278;
var _ = cljs.core.nth.call(null,vec__19280,(0),null);
var snapshot = cljs.core.nth.call(null,vec__19280,(1),null);
var _PLUS_debux_dbg_opts_PLUS__19293 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)));

var opts__19139__auto___19294 = _PLUS_debux_dbg_opts_PLUS__19293;
var result__19140__auto___19295 = console.log((function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS__19293;
var result__19140__auto__ = snapshot;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto___19295,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e19284){var e_19296 = e19284;
throw e_19296;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19285){var e = e19285;
throw e;
}}):(function (p__19286,p__19287){
var map__19288 = p__19286;
var map__19288__$1 = (((((!((map__19288 == null))))?(((((map__19288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19288):map__19288);
var db = cljs.core.get.call(null,map__19288__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__19289 = p__19287;
var _ = cljs.core.nth.call(null,vec__19289,(0),null);
var snapshot = cljs.core.nth.call(null,vec__19289,(1),null);
console.log(snapshot);

return cljs.core.PersistentArrayMap.EMPTY;
})));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"test-fb","test-fb",-1588712759),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"store","store",1512230022))], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19297){var e = e19297;
throw e;
}}):(function (_,___$1){
return cljs.core.PersistentArrayMap.EMPTY;
})));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (p__19298,_){
var map__19299 = p__19298;
var map__19299__$1 = (((((!((map__19299 == null))))?(((((map__19299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19299):map__19299);
var db = cljs.core.get.call(null,map__19299__$1,new cljs.core.Keyword(null,"db","db",993250759));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.list(new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null))], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),cljs.core.list(new cljs.core.Symbol(null,".-email",".-email",-1115762081,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),"@")),new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null),cljs.core.list(new cljs.core.Symbol(null,".-uid",".-uid",-1246213735,null),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"firebase-db","firebase-db",-35740166,null),cljs.core.list(new cljs.core.Symbol(null,".ref",".ref",1680043637,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"users/",new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),"-",new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null))),cljs.core.list(new cljs.core.Symbol(null,".once",".once",650777784,null),"value",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading")], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login")], null)));

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var temp__5733__auto__ = (function (){var G__19301 = debux.common.util.spy_first.call(null,react_med.storage_module.firebase.global$module$firebase,new cljs.core.Symbol(null,"fb","fb",308862205,null),(4));
var G__19301__$1 = (((G__19301 == null))?null:debux.common.util.spy_first.call(null,G__19301.auth(),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),(5)));
var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (((G__19301__$1 == null))?null:debux.common.util.spy_first.call(null,G__19301__$1.currentUser,new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),(4)));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),new cljs.core.Symbol(null,"G__19301","G__19301",1341437381,null)),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})();
if(cljs.core.truth_(temp__5733__auto__)){
var user = temp__5733__auto__;
var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var user_email = (function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = user;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})().email;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".-email",".-email",-1115762081,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})();
var name_in_email = (function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.first.call(null,(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = clojure.string.split.call(null,(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = user_email;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})(),"@");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),"@"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),"@")),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})();
var user_fb_uid = (function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = user;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})().uid;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".-uid",".-uid",-1246213735,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})();
debux.common.util.spy_first.call(null,debux.common.util.spy_first.call(null,debux.common.util.spy_first.call(null,react_med.storage_module.firebase.firebase_db,new cljs.core.Symbol(null,"firebase-db","firebase-db",-35740166,null),(4)).ref((function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = ["users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = name_in_email;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = user_fb_uid;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})())].join('');
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"users/",new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),"-",new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,".ref",".ref",1680043637,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"users/",new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),"-",new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null))),(3)).once("value",(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = ((function (opts__19139__auto____$2,user_email,name_in_email,user_fb_uid,opts__19139__auto____$1,user,temp__5733__auto__,opts__19139__auto__,_PLUS_debux_dbg_opts_PLUS_,map__19299,map__19299__$1,db){
return (function (snapshot){
var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = re_frame.core.dispatch_sync.call(null,(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),(function (){var opts__19139__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = snapshot;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__19140__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
});})(opts__19139__auto____$2,user_email,name_in_email,user_fb_uid,opts__19139__auto____$1,user,temp__5733__auto__,opts__19139__auto__,_PLUS_debux_dbg_opts_PLUS_,map__19299,map__19299__$1,db))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,".once",".once",650777784,null),"value",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null)))),(2));

var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading")], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading")], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),cljs.core.list(new cljs.core.Symbol(null,".-email",".-email",-1115762081,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),"@")),new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null),cljs.core.list(new cljs.core.Symbol(null,".-uid",".-uid",-1246213735,null),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,".once",".once",650777784,null),"value",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading")], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
} else {
var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login")], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login")], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
}
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.list(new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__19301","G__19301",1341437381,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"fb","fb",308862205,null)),new cljs.core.Symbol(null,"G__19301","G__19301",1341437381,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),new cljs.core.Symbol(null,"G__19301","G__19301",1341437381,null)),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),new cljs.core.Symbol(null,"G__19301","G__19301",1341437381,null)),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),cljs.core.list(new cljs.core.Symbol(null,".-email",".-email",-1115762081,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),"@")),new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null),cljs.core.list(new cljs.core.Symbol(null,".-uid",".-uid",-1246213735,null),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,".once",".once",650777784,null),"value",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading")], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login")], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19302){var e = e19302;
throw e;
}}):(function (p__19303,_){
var map__19304 = p__19303;
var map__19304__$1 = (((((!((map__19304 == null))))?(((((map__19304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19304):map__19304);
var db = cljs.core.get.call(null,map__19304__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5733__auto__ = (function (){var G__19306 = react_med.storage_module.firebase.global$module$firebase;
var G__19306__$1 = (((G__19306 == null))?null:G__19306.auth());
if((G__19306__$1 == null)){
return null;
} else {
return G__19306__$1.currentUser;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var user = temp__5733__auto__;
var user_email = user.email;
var name_in_email = cljs.core.first.call(null,clojure.string.split.call(null,user_email,"@"));
var user_fb_uid = user.uid;
react_med.storage_module.firebase.firebase_db.ref(["users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_in_email),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_fb_uid)].join('')).once("value",((function (user_email,name_in_email,user_fb_uid,user,temp__5733__auto__,map__19304,map__19304__$1,db){
return (function (snapshot){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),snapshot], null));
});})(user_email,name_in_email,user_fb_uid,user,temp__5733__auto__,map__19304,map__19304__$1,db))
);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading")], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login")], null);
}
})));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,p__19307){
var vec__19308 = p__19307;
var ___$1 = cljs.core.nth.call(null,vec__19308,(0),null);
var snapshot = cljs.core.nth.call(null,vec__19308,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),cljs.core.list(new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null),cljs.core.list(new cljs.core.Symbol(null,".val",".val",-571919620,null)),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null)),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol("initial-state","domain-initial-state","initial-state/domain-initial-state",223156794,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null)], null)))));

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var restored_from_firebase = (function (){var G__19311 = debux.common.util.spy_first.call(null,snapshot,new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null),(4));
var G__19311__$1 = (((G__19311 == null))?null:debux.common.util.spy_first.call(null,G__19311.val(),cljs.core.list(new cljs.core.Symbol(null,".val",".val",-571919620,null)),(5)));
var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (((G__19311__$1 == null))?null:debux.common.util.spy_first.call(null,cljs.core.js__GT_clj.call(null,G__19311__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),(4)));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),new cljs.core.Symbol(null,"G__19311","G__19311",890503345,null)),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})();
var restored_state = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.merge.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = restored_from_firebase;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = react_med.storage_module.initial_state.ui_initial_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),react_med.storage_module.firebase.global$module$firebase.auth().currentUser.email], null)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var default_state = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.merge.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = react_med.storage_module.initial_state.domain_initial_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("initial-state","domain-initial-state","initial-state/domain-initial-state",223156794,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = react_med.storage_module.initial_state.ui_initial_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),react_med.storage_module.firebase.global$module$firebase.auth().currentUser.email], null)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol("initial-state","domain-initial-state","initial-state/domain-initial-state",223156794,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (cljs.core.truth_((function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = restored_from_firebase;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})())?(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),restored_state,new cljs.core.Keyword(null,"store","store",1512230022),restored_state], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})():(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){
var opts__19139__auto___19318__$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto___19319 = console.log("Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado.");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto___19319,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));


var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),default_state,new cljs.core.Keyword(null,"store","store",1512230022),default_state], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})()
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),cljs.core.list(new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__19311","G__19311",890503345,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)),new cljs.core.Symbol(null,"G__19311","G__19311",890503345,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),new cljs.core.Symbol(null,"G__19311","G__19311",890503345,null)),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,".val",".val",-571919620,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),new cljs.core.Symbol(null,"G__19311","G__19311",890503345,null)),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)))),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null)),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol("initial-state","domain-initial-state","initial-state/domain-initial-state",223156794,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19312){var e = e19312;
throw e;
}}):(function (_,p__19313){
var vec__19314 = p__19313;
var ___$1 = cljs.core.nth.call(null,vec__19314,(0),null);
var snapshot = cljs.core.nth.call(null,vec__19314,(1),null);
var restored_from_firebase = (function (){var G__19317 = snapshot;
var G__19317__$1 = (((G__19317 == null))?null:G__19317.val());
if((G__19317__$1 == null)){
return null;
} else {
return cljs.core.js__GT_clj.call(null,G__19317__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
})();
var restored_state = cljs.core.merge.call(null,restored_from_firebase,react_med.storage_module.initial_state.ui_initial_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),react_med.storage_module.firebase.global$module$firebase.auth().currentUser.email], null)], null));
var default_state = cljs.core.merge.call(null,react_med.storage_module.initial_state.domain_initial_state,react_med.storage_module.initial_state.ui_initial_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),react_med.storage_module.firebase.global$module$firebase.auth().currentUser.email], null)], null));
if(cljs.core.truth_(restored_from_firebase)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),restored_state,new cljs.core.Keyword(null,"store","store",1512230022),restored_state], null);
} else {
console.log("Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado.");

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),default_state,new cljs.core.Keyword(null,"store","store",1512230022),default_state], null);
}
})));

//# sourceMappingURL=firebase.js.map
