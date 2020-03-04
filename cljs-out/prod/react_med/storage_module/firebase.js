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
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("react-med.storage-module.firebase","test2","react-med.storage-module.firebase/test2",1330039245),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,p__19277){
var vec__19278 = p__19277;
var ___$1 = cljs.core.nth.call(null,vec__19278,(0),null);
var snapshot = cljs.core.nth.call(null,vec__19278,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)));

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = console.log((function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = snapshot;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19281){var e = e19281;
throw e;
}}):(function (_,p__19282){
var vec__19283 = p__19282;
var ___$1 = cljs.core.nth.call(null,vec__19283,(0),null);
var snapshot = cljs.core.nth.call(null,vec__19283,(1),null);
return console.log(snapshot);
})));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"test-fb","test-fb",-1588712759),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"store","store",1512230022))], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19286){var e = e19286;
throw e;
}}):(function (_,___$1){
return cljs.core.PersistentArrayMap.EMPTY;
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (app_state,_){
var _PLUS_debux_dbg_opts_PLUS__19289 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null)),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),cljs.core.list(new cljs.core.Symbol(null,".-email",".-email",-1115762081,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),"@")),new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null),cljs.core.list(new cljs.core.Symbol(null,".-uid",".-uid",-1246213735,null),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"firebase-db","firebase-db",-35740166,null),cljs.core.list(new cljs.core.Symbol(null,".ref",".ref",1680043637,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"users/",new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),"-",new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null))),cljs.core.list(new cljs.core.Symbol(null,".once",".once",650777784,null),"value",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null)))))));

var opts__19139__auto___19290 = _PLUS_debux_dbg_opts_PLUS__19289;
var result__19140__auto___19291 = (function (){var user = debux.common.util.spy_first.call(null,debux.common.util.spy_first.call(null,debux.common.util.spy_first.call(null,react_med.storage_module.firebase.global$module$firebase,new cljs.core.Symbol(null,"fb","fb",308862205,null),(4)).auth(),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),(3)).currentUser,new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),(2));
var user_email = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS__19289;
var result__19140__auto__ = (function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS__19289;
var result__19140__auto__ = user;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})().email;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".-email",".-email",-1115762081,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var name_in_email = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS__19289;
var result__19140__auto__ = cljs.core.first.call(null,(function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS__19289;
var result__19140__auto__ = clojure.string.split.call(null,(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS__19289;
var result__19140__auto__ = user_email;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})(),"@");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),"@"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),"@")),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
var user_fb_uid = (function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS__19289;
var result__19140__auto__ = (function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS__19289;
var result__19140__auto__ = user;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})().uid;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".-uid",".-uid",-1246213735,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})();
return debux.common.util.spy_first.call(null,debux.common.util.spy_first.call(null,debux.common.util.spy_first.call(null,react_med.storage_module.firebase.firebase_db,new cljs.core.Symbol(null,"firebase-db","firebase-db",-35740166,null),(3)).ref((function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS__19289;
var result__19140__auto__ = ["users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS__19289;
var result__19140__auto__ = name_in_email;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS__19289;
var result__19140__auto__ = user_fb_uid;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})())].join('');
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"users/",new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),"-",new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,".ref",".ref",1680043637,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"users/",new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),"-",new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null))),(2)).once("value",(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS__19289;
var result__19140__auto__ = ((function (opts__19139__auto____$1,user,user_email,name_in_email,user_fb_uid,opts__19139__auto___19290,_PLUS_debux_dbg_opts_PLUS__19289){
return (function (snapshot){
var opts__19139__auto____$2 = _PLUS_debux_dbg_opts_PLUS__19289;
var result__19140__auto__ = re_frame.core.dispatch_sync.call(null,(function (){var opts__19139__auto____$3 = _PLUS_debux_dbg_opts_PLUS__19289;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),(function (){var opts__19139__auto____$4 = _PLUS_debux_dbg_opts_PLUS__19289;
var result__19140__auto__ = snapshot;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19140__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19140__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19140__auto__;
});})(opts__19139__auto____$1,user,user_email,name_in_email,user_fb_uid,opts__19139__auto___19290,_PLUS_debux_dbg_opts_PLUS__19289))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19140__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,".once",".once",650777784,null),"value",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null)))),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto___19291,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null)),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),cljs.core.list(new cljs.core.Symbol(null,".-email",".-email",-1115762081,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),"@")),new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null),cljs.core.list(new cljs.core.Symbol(null,".-uid",".-uid",-1246213735,null),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,".once",".once",650777784,null),"value",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e19287){var e_19292 = e19287;
throw e_19292;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"));

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})(),(function (){var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19140__auto__;
})(),"loading");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19288){var e = e19288;
throw e;
}}):(function (app_state,_){
var user_19293 = react_med.storage_module.firebase.global$module$firebase.auth().currentUser;
var user_email_19294 = user_19293.email;
var name_in_email_19295 = cljs.core.first.call(null,clojure.string.split.call(null,user_email_19294,"@"));
var user_fb_uid_19296 = user_19293.uid;
react_med.storage_module.firebase.firebase_db.ref(["users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_in_email_19295),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_fb_uid_19296)].join('')).once("value",((function (user_19293,user_email_19294,name_in_email_19295,user_fb_uid_19296){
return (function (snapshot){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),snapshot], null));
});})(user_19293,user_email_19294,name_in_email_19295,user_fb_uid_19296))
);

return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading");
})));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,p__19297){
var vec__19298 = p__19297;
var ___$1 = cljs.core.nth.call(null,vec__19298,(0),null);
var snapshot = cljs.core.nth.call(null,vec__19298,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),cljs.core.list(new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null),cljs.core.list(new cljs.core.Symbol(null,".val",".val",-571919620,null)),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null)),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol("initial-state","domain-initial-state","initial-state/domain-initial-state",223156794,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null)], null)))));

var opts__19139__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (function (){var restored_from_firebase = (function (){var G__19301 = debux.common.util.spy_first.call(null,snapshot,new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null),(4));
var G__19301__$1 = (((G__19301 == null))?null:debux.common.util.spy_first.call(null,G__19301.val(),cljs.core.list(new cljs.core.Symbol(null,".val",".val",-571919620,null)),(5)));
var opts__19139__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto__ = (((G__19301__$1 == null))?null:debux.common.util.spy_first.call(null,cljs.core.js__GT_clj.call(null,G__19301__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),(4)));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),new cljs.core.Symbol(null,"G__19301","G__19301",1341437381,null)),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

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
var opts__19139__auto___19308__$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19140__auto___19309 = console.log("Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado.");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto___19309,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));


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
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19140__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),cljs.core.list(new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__19301","G__19301",1341437381,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)),new cljs.core.Symbol(null,"G__19301","G__19301",1341437381,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),new cljs.core.Symbol(null,"G__19301","G__19301",1341437381,null)),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,".val",".val",-571919620,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),new cljs.core.Symbol(null,"G__19301","G__19301",1341437381,null)),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)))),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null)),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol("initial-state","domain-initial-state","initial-state/domain-initial-state",223156794,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19140__auto__;
}catch (e19302){var e = e19302;
throw e;
}}):(function (_,p__19303){
var vec__19304 = p__19303;
var ___$1 = cljs.core.nth.call(null,vec__19304,(0),null);
var snapshot = cljs.core.nth.call(null,vec__19304,(1),null);
var restored_from_firebase = (function (){var G__19307 = snapshot;
var G__19307__$1 = (((G__19307 == null))?null:G__19307.val());
if((G__19307__$1 == null)){
return null;
} else {
return cljs.core.js__GT_clj.call(null,G__19307__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
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
