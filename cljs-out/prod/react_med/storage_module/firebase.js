// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.storage_module.firebase');
goog.require('cljs.core');
goog.require('cognitect.transit');
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
var writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
var t_json = cognitect.transit.write.call(null,writer,db_map);
var temp__5735__auto__ = react_med.storage_module.firebase.global$module$firebase.auth().currentUser;
if(cljs.core.truth_(temp__5735__auto__)){
var user = temp__5735__auto__;
var user_email = user.email;
var name_in_email = cljs.core.first.call(null,clojure.string.split.call(null,user_email,"@"));
var user_fb_uid = user.uid;
return react_med.storage_module.firebase.firebase_db.ref(["users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_in_email),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_fb_uid)].join('')).set(t_json);
} else {
return null;
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.storage-module.firebase","save-to-firebase","react-med.storage-module.firebase/save-to-firebase",-1606458749),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (app_state,p__19264){
var vec__19265 = p__19264;
var event = cljs.core.nth.call(null,vec__19265,(0),null);
var to_save = cljs.core.nth.call(null,vec__19265,(1),null);
var _PLUS_debux_dbg_opts_PLUS__19274 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"firebase-save","firebase-save",1366427688,null),new cljs.core.Symbol(null,"to-save","to-save",-1314391657,null)));

var opts__19140__auto___19275 = _PLUS_debux_dbg_opts_PLUS__19274;
var result__19141__auto___19276 = react_med.storage_module.firebase.firebase_save.call(null,(function (){var opts__19140__auto____$1 = _PLUS_debux_dbg_opts_PLUS__19274;
var result__19141__auto__ = to_save;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"to-save","to-save",-1314391657,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19141__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto___19276,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"firebase-save","firebase-save",1366427688,null),new cljs.core.Symbol(null,"to-save","to-save",-1314391657,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e19268){var e_19277 = e19268;
throw e_19277;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol(null,"app-state","app-state",130568249,null));

var opts__19140__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19141__auto__;
}catch (e19269){var e = e19269;
throw e;
}}):(function (app_state,p__19270){
var vec__19271 = p__19270;
var event = cljs.core.nth.call(null,vec__19271,(0),null);
var to_save = cljs.core.nth.call(null,vec__19271,(1),null);
react_med.storage_module.firebase.firebase_save.call(null,to_save);

return app_state;
})));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (p__19278,_){
var map__19279 = p__19278;
var map__19279__$1 = (((((!((map__19279 == null))))?(((((map__19279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19279):map__19279);
var db = cljs.core.get.call(null,map__19279__$1,new cljs.core.Keyword(null,"db","db",993250759));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.list(new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null))], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),cljs.core.list(new cljs.core.Symbol(null,".-email",".-email",-1115762081,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),"@")),new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null),cljs.core.list(new cljs.core.Symbol(null,".-uid",".-uid",-1246213735,null),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"firebase-db","firebase-db",-35740166,null),cljs.core.list(new cljs.core.Symbol(null,".ref",".ref",1680043637,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"users/",new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),"-",new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null))),cljs.core.list(new cljs.core.Symbol(null,".once",".once",650777784,null),"value",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading")], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login")], null)));

var opts__19140__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = (function (){var temp__5733__auto__ = (function (){var G__19281 = debux.common.util.spy_first.call(null,react_med.storage_module.firebase.global$module$firebase,new cljs.core.Symbol(null,"fb","fb",308862205,null),(4));
var G__19281__$1 = (((G__19281 == null))?null:debux.common.util.spy_first.call(null,G__19281.auth(),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),(5)));
var opts__19140__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = (((G__19281__$1 == null))?null:debux.common.util.spy_first.call(null,G__19281__$1.currentUser,new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),(4)));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),new cljs.core.Symbol(null,"G__19281","G__19281",-2037803855,null)),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19141__auto__;
})();
if(cljs.core.truth_(temp__5733__auto__)){
var user = temp__5733__auto__;
var opts__19140__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = (function (){var user_email = (function (){var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = (function (){var opts__19140__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = user;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19141__auto__;
})().email;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".-email",".-email",-1115762081,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19141__auto__;
})();
var name_in_email = (function (){var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = cljs.core.first.call(null,(function (){var opts__19140__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = clojure.string.split.call(null,(function (){var opts__19140__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = user_email;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19141__auto__;
})(),"@");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),"@"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19141__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),"@")),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19141__auto__;
})();
var user_fb_uid = (function (){var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = (function (){var opts__19140__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = user;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19141__auto__;
})().uid;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".-uid",".-uid",-1246213735,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19141__auto__;
})();
debux.common.util.spy_first.call(null,debux.common.util.spy_first.call(null,debux.common.util.spy_first.call(null,react_med.storage_module.firebase.firebase_db,new cljs.core.Symbol(null,"firebase-db","firebase-db",-35740166,null),(4)).ref((function (){var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = ["users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__19140__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = name_in_email;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19141__auto__;
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__19140__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = user_fb_uid;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19141__auto__;
})())].join('');
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"users/",new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),"-",new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19141__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,".ref",".ref",1680043637,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"users/",new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),"-",new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null))),(3)).once("value",(function (){var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = ((function (opts__19140__auto____$2,user_email,name_in_email,user_fb_uid,opts__19140__auto____$1,user,temp__5733__auto__,opts__19140__auto__,_PLUS_debux_dbg_opts_PLUS_,map__19279,map__19279__$1,db){
return (function (snapshot){
var opts__19140__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = re_frame.core.dispatch_sync.call(null,(function (){var opts__19140__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),(function (){var opts__19140__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = snapshot;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__19141__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__19141__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__19141__auto__;
});})(opts__19140__auto____$2,user_email,name_in_email,user_fb_uid,opts__19140__auto____$1,user,temp__5733__auto__,opts__19140__auto__,_PLUS_debux_dbg_opts_PLUS_,map__19279,map__19279__$1,db))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19141__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,".once",".once",650777784,null),"value",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null)))),(2));

var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading")], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading")], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19141__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),cljs.core.list(new cljs.core.Symbol(null,".-email",".-email",-1115762081,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),"@")),new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null),cljs.core.list(new cljs.core.Symbol(null,".-uid",".-uid",-1246213735,null),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,".once",".once",650777784,null),"value",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading")], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19141__auto__;
} else {
var opts__19140__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login")], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login")], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19141__auto__;
}
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.list(new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__19281","G__19281",-2037803855,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"fb","fb",308862205,null)),new cljs.core.Symbol(null,"G__19281","G__19281",-2037803855,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),new cljs.core.Symbol(null,"G__19281","G__19281",-2037803855,null)),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),new cljs.core.Symbol(null,"G__19281","G__19281",-2037803855,null)),null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),cljs.core.list(new cljs.core.Symbol(null,".-email",".-email",-1115762081,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Symbol(null,"name-in-email","name-in-email",-1816302959,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"user-email","user-email",-527955888,null),"@")),new cljs.core.Symbol(null,"user-fb-uid","user-fb-uid",-647819293,null),cljs.core.list(new cljs.core.Symbol(null,".-uid",".-uid",-1246213735,null),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,".once",".once",650777784,null),"value",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","dispatch-sync","re-frame/dispatch-sync",1488372549,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null)], null))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading")], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login")], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19141__auto__;
}catch (e19282){var e = e19282;
throw e;
}}):(function (p__19283,_){
var map__19284 = p__19283;
var map__19284__$1 = (((((!((map__19284 == null))))?(((((map__19284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19284):map__19284);
var db = cljs.core.get.call(null,map__19284__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5733__auto__ = (function (){var G__19286 = react_med.storage_module.firebase.global$module$firebase;
var G__19286__$1 = (((G__19286 == null))?null:G__19286.auth());
if((G__19286__$1 == null)){
return null;
} else {
return G__19286__$1.currentUser;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var user = temp__5733__auto__;
var user_email = user.email;
var name_in_email = cljs.core.first.call(null,clojure.string.split.call(null,user_email,"@"));
var user_fb_uid = user.uid;
react_med.storage_module.firebase.firebase_db.ref(["users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_in_email),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_fb_uid)].join('')).once("value",((function (user_email,name_in_email,user_fb_uid,user,temp__5733__auto__,map__19284,map__19284__$1,db){
return (function (snapshot){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),snapshot], null));
});})(user_email,name_in_email,user_fb_uid,user,temp__5733__auto__,map__19284,map__19284__$1,db))
);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading")], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login")], null);
}
})));
react_med.storage_module.firebase.read_json = (function react_med$storage_module$firebase$read_json(json){
try{return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),json);
}catch (e19287){if((e19287 instanceof Object)){
var e = e19287;
return console.warn("Problema lendo com transit.",e);
} else {
throw e19287;

}
}});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase-callback","react-med.storage-module.firebase/restore-domain-from-firebase-callback",-789422975),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,p__19288){
var vec__19289 = p__19288;
var ___$1 = cljs.core.nth.call(null,vec__19289,(0),null);
var snapshot = cljs.core.nth.call(null,vec__19289,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),cljs.core.list(new cljs.core.Symbol(null,"some->>","some->>",-1499987794,null),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null),cljs.core.list(new cljs.core.Symbol(null,".val",".val",-571919620,null)),cljs.core.list(new cljs.core.Symbol(null,"read-json","read-json",-40297373,null))),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null)),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol("initial-state","domain-initial-state","initial-state/domain-initial-state",223156794,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null)], null)))));

var opts__19140__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = (function (){var restored_from_firebase = (function (){var G__19292 = debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null),(4),snapshot);
var G__19292__$1 = (((G__19292 == null))?null:debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,".val",".val",-571919620,null)),(5),G__19292.val()));
var opts__19140__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = (((G__19292__$1 == null))?null:debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,"read-json","read-json",-40297373,null)),(4),react_med.storage_module.firebase.read_json.call(null,G__19292__$1)));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),new cljs.core.Symbol(null,"G__19292","G__19292",-206041576,null)),null,cljs.core.list(new cljs.core.Symbol(null,"read-json","read-json",-40297373,null),new cljs.core.Symbol(null,"G__19292","G__19292",-206041576,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19141__auto__;
})();
var restored_state = (function (){var opts__19140__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = cljs.core.merge.call(null,(function (){var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = restored_from_firebase;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19141__auto__;
})(),(function (){var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = react_med.storage_module.initial_state.ui_initial_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19141__auto__;
})(),(function (){var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),react_med.storage_module.firebase.global$module$firebase.auth().currentUser.email], null)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19141__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19141__auto__;
})();
var default_state = (function (){var opts__19140__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = cljs.core.merge.call(null,(function (){var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = react_med.storage_module.initial_state.domain_initial_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("initial-state","domain-initial-state","initial-state/domain-initial-state",223156794,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19141__auto__;
})(),(function (){var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = react_med.storage_module.initial_state.ui_initial_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19141__auto__;
})(),(function (){var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),react_med.storage_module.firebase.global$module$firebase.auth().currentUser.email], null)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19141__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol("initial-state","domain-initial-state","initial-state/domain-initial-state",223156794,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19141__auto__;
})();
var opts__19140__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = (cljs.core.truth_((function (){var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = restored_from_firebase;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19141__auto__;
})())?(function (){var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),restored_state,new cljs.core.Keyword(null,"store","store",1512230022),restored_state], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19141__auto__;
})():(function (){var opts__19140__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = (function (){
var opts__19140__auto___19299__$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto___19300 = console.log("Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado.");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto___19300,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));


var opts__19140__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19141__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),default_state,new cljs.core.Keyword(null,"store","store",1512230022),default_state], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__19141__auto__;
})()
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__19141__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__19141__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__19141__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),cljs.core.list(new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__19292","G__19292",-206041576,null),new cljs.core.Symbol(null,"snapshot","snapshot",365745817,null),new cljs.core.Symbol(null,"G__19292","G__19292",-206041576,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),new cljs.core.Symbol(null,"G__19292","G__19292",-206041576,null)),null,cljs.core.list(new cljs.core.Symbol(null,".val",".val",-571919620,null),new cljs.core.Symbol(null,"G__19292","G__19292",-206041576,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),new cljs.core.Symbol(null,"G__19292","G__19292",-206041576,null)),null,cljs.core.list(new cljs.core.Symbol(null,"read-json","read-json",-40297373,null),new cljs.core.Symbol(null,"G__19292","G__19292",-206041576,null)))),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null)),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol("initial-state","domain-initial-state","initial-state/domain-initial-state",223156794,null),new cljs.core.Symbol("initial-state","ui-initial-state","initial-state/ui-initial-state",-542571818,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),new cljs.core.Symbol(null,".-currentUser",".-currentUser",1279883633,null),new cljs.core.Symbol(null,".-email",".-email",-1115762081,null))], null)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"restored-from-firebase","restored-from-firebase",-758989211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"restored-state","restored-state",-782809915,null)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"Nenhum dado encontrado no firebase. Portanto o app-state foi reiniciado."),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Symbol(null,"default-state","default-state",2120787388,null)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__19141__auto__;
}catch (e19293){var e = e19293;
throw e;
}}):(function (_,p__19294){
var vec__19295 = p__19294;
var ___$1 = cljs.core.nth.call(null,vec__19295,(0),null);
var snapshot = cljs.core.nth.call(null,vec__19295,(1),null);
var restored_from_firebase = (function (){var G__19298 = snapshot;
var G__19298__$1 = (((G__19298 == null))?null:G__19298.val());
if((G__19298__$1 == null)){
return null;
} else {
return react_med.storage_module.firebase.read_json.call(null,G__19298__$1);
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
