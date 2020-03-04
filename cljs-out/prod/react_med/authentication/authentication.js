// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_med.authentication.authentication');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('react_med.storage_module.firebase');
goog.require('react_med.util');
goog.require('react_med.storage_module.local_storage');
react_med.authentication.authentication.global$module$firebase = goog.global["firebase"];
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.authentication.authentication.login_error = (function react_med$authentication$authentication$login_error(app_state,p__20081){
var vec__20082 = p__20081;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082,(1),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$app_DASH_state,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"login"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$sym$attr], null),cljs.core.cst$sym$message)));

return debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(app_state,cljs.core.cst$sym$app_DASH_state,(2)),(function (){var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),"login"),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"login"),(1)),(function (){var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = attr;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$attr,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$sym$attr], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = message;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$message,cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})()),cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$sym$attr], null),cljs.core.cst$sym$message),(0));
}catch (e20085){var e = e20085;
throw e;
}});
} else {
react_med.authentication.authentication.login_error = (function react_med$authentication$authentication$login_error(app_state,p__20086){
var vec__20087 = p__20086;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20087,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20087,(1),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20087,(2),null);
return cljs.core.assoc_in(cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"login"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,attr], null),message);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$react_DASH_med$authentication$authentication_SLASH_login_DASH_error,react_med.authentication.authentication.login_error);
react_med.authentication.authentication.logout = (function react_med$authentication$authentication$logout(){
return react_med.authentication.authentication.global$module$firebase.auth().signOut().then((function (){
return console.log("Usu\u00E1rio fez logout.");
})).catch((function (error){
return console.error("\uD83D\uDE1E Erro ao fazer logout.",error.code,error.message);
}));
});
react_med.authentication.authentication.sign_in_with_email_and_password = (function react_med$authentication$authentication$sign_in_with_email_and_password(email,password){
return react_med.authentication.authentication.global$module$firebase.auth().signInWithEmailAndPassword(email,password).catch((function (error){
var G__20090 = error.code;
switch (G__20090) {
case "auth/invalid-email":
var G__20091 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$authentication$authentication_SLASH_login_DASH_error,cljs.core.cst$kw$email_DASH_error,"Email inv\u00E1lido"], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20091) : react_med.util._GT_evt.call(null,G__20091));

break;
case "auth/invalid-password":
var G__20092 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$authentication$authentication_SLASH_login_DASH_error,cljs.core.cst$kw$password_DASH_error,"Senha inv\u00E1lida"], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20092) : react_med.util._GT_evt.call(null,G__20092));

break;
case "auth/user-not-found":
var G__20093 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$authentication$authentication_SLASH_login_DASH_error,cljs.core.cst$kw$email_DASH_error,"Usu\u00E1rio n\u00E3o encontrado"], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20093) : react_med.util._GT_evt.call(null,G__20093));

break;
case "auth/wrong-password":
var G__20094 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$authentication$authentication_SLASH_login_DASH_error,cljs.core.cst$kw$password_DASH_error,"Senha errada ou inexistente"], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20094) : react_med.util._GT_evt.call(null,G__20094));

break;
case "auth/argument-error":
var G__20095 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$authentication$authentication_SLASH_login_DASH_error,cljs.core.cst$kw$email_DASH_error,"Email inv\u00E1lido"], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20095) : react_med.util._GT_evt.call(null,G__20095));

break;
case "auth/network-request-failed":
var G__20096 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$authentication$authentication_SLASH_login_DASH_error,cljs.core.cst$kw$email_DASH_error,"Problemas com a conex\u00E3o. \uD83D\uDE1E"], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20096) : react_med.util._GT_evt.call(null,G__20096));

break;
default:
var G__20097_20100 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$authentication$authentication_SLASH_login_DASH_error,cljs.core.cst$kw$email_DASH_error,error.message], null);
(react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20097_20100) : react_med.util._GT_evt.call(null,G__20097_20100));

var G__20098_20101 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$authentication$authentication_SLASH_login_DASH_error,cljs.core.cst$kw$password_DASH_error,error.message], null);
(react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20098_20101) : react_med.util._GT_evt.call(null,G__20098_20101));

return console.error("\uD83D\uDE1E N\u00E3o consegui logar.",error.code,error.message);

}
}));
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.authentication.authentication.email_and_password_login = (function react_med$authentication$authentication$email_and_password_login(p__20102,_){
var map__20103 = p__20102;
var map__20103__$1 = (((((!((map__20103 == null))))?(((((map__20103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20103):map__20103);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20103__$1,cljs.core.cst$kw$db);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20103__$1,cljs.core.cst$kw$store);
var _PLUS_debux_dbg_opts_PLUS__20110 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$js_SLASH_console$log,"Logando",cljs.core.list(cljs.core.cst$sym$sign_DASH_in_DASH_with_DASH_email_DASH_and_DASH_password,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$kw$email], null)),cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$kw$password], null)))));

var opts__19887__auto___20111 = _PLUS_debux_dbg_opts_PLUS__20110;
var result__19888__auto___20112 = console.log("Logando",(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS__20110;
var result__19888__auto__ = react_med.authentication.authentication.sign_in_with_email_and_password((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS__20110;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS__20110;
var result__19888__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS__20110;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$kw$email], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$kw$email], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$kw$email], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS__20110;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS__20110;
var result__19888__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS__20110;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$kw$password], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$kw$password], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$kw$password], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$sign_DASH_in_DASH_with_DASH_email_DASH_and_DASH_password,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$kw$email], null)),cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$kw$password], null))),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto___20112,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$js_SLASH_console$log,"Logando",cljs.core.list(cljs.core.cst$sym$sign_DASH_in_DASH_with_DASH_email_DASH_and_DASH_password,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$kw$email], null)),cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$kw$password], null)))),cljs.core.cst$kw$indent_DASH_level,(0)], null));

}catch (e20105){var e_20113 = e20105;
throw e_20113;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"loading")], null));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"loading")], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,cljs.core.cst$sym$db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"loading")], null),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20106){var e = e20106;
throw e;
}});
} else {
react_med.authentication.authentication.email_and_password_login = (function react_med$authentication$authentication$email_and_password_login(p__20107,_){
var map__20108 = p__20107;
var map__20108__$1 = (((((!((map__20108 == null))))?(((((map__20108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20108):map__20108);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20108__$1,cljs.core.cst$kw$db);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20108__$1,cljs.core.cst$kw$store);
console.log("Logando",react_med.authentication.authentication.sign_in_with_email_and_password(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$kw$email], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$login,cljs.core.cst$kw$password], null))));

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"loading")], null);
});
}
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$react_DASH_med$authentication$authentication_SLASH_email_DASH_and_DASH_password_DASH_login,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20114 = cljs.core.cst$kw$store;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__20114) : re_frame.core.inject_cofx.call(null,G__20114));
})()], null),react_med.authentication.authentication.email_and_password_login);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.authentication.authentication.user_logged_in = (function react_med$authentication$authentication$user_logged_in(p__20115,p__20116){
var map__20117 = p__20115;
var map__20117__$1 = (((((!((map__20117 == null))))?(((((map__20117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20117):map__20117);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20117__$1,cljs.core.cst$kw$db);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20117__$1,cljs.core.cst$kw$store);
var vec__20118 = p__20116;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20118,(0),null);
var email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20118,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$not_EQ_,cljs.core.cst$sym$email,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$authentication,cljs.core.cst$kw$user_DASH_email], null))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$local_DASH_storage_SLASH_load_DASH_domain_DASH_from_DASH_local_DASH_storage], null)], null)));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = (((function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = email;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$email,cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = store;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$store,cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})(),(function (){var opts__19887__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$authentication,cljs.core.cst$kw$user_DASH_email], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$authentication,cljs.core.cst$kw$user_DASH_email], null),cljs.core.cst$kw$indent_DASH_level,(3)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$authentication,cljs.core.cst$kw$user_DASH_email], null)),cljs.core.cst$kw$indent_DASH_level,(2)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$not_EQ_,cljs.core.cst$sym$email,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$authentication,cljs.core.cst$kw$user_DASH_email], null))),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})())?(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})():(function (){var opts__19887__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$local_DASH_storage_SLASH_load_DASH_domain_DASH_from_DASH_local_DASH_storage], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$local_DASH_storage_SLASH_load_DASH_domain_DASH_from_DASH_local_DASH_storage], null)], null),cljs.core.cst$kw$indent_DASH_level,(1)], null));

return result__19888__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$not_EQ_,cljs.core.cst$sym$email,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$authentication,cljs.core.cst$kw$user_DASH_email], null))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$local_DASH_storage_SLASH_load_DASH_domain_DASH_from_DASH_local_DASH_storage], null)], null)),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20122){var e = e20122;
throw e;
}});
} else {
react_med.authentication.authentication.user_logged_in = (function react_med$authentication$authentication$user_logged_in(p__20123,p__20124){
var map__20125 = p__20123;
var map__20125__$1 = (((((!((map__20125 == null))))?(((((map__20125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20125):map__20125);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20125__$1,cljs.core.cst$kw$db);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20125__$1,cljs.core.cst$kw$store);
var vec__20126 = p__20124;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20126,(0),null);
var email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20126,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(email,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$authentication,cljs.core.cst$kw$user_DASH_email], null)))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store,null,cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$firebase_SLASH_restore_DASH_domain_DASH_from_DASH_firebase], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$storage_DASH_module$local_DASH_storage_SLASH_load_DASH_domain_DASH_from_DASH_local_DASH_storage], null)], null);
}
});
}
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$react_DASH_med$authentication$authentication_SLASH_user_DASH_logged_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20130 = cljs.core.cst$kw$store;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__20130) : re_frame.core.inject_cofx.call(null,G__20130));
})()], null),react_med.authentication.authentication.user_logged_in);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
react_med.authentication.authentication.user_logged_out = (function react_med$authentication$authentication$user_logged_out(p__20131,_){
var map__20132 = p__20131;
var map__20132__$1 = (((((!((map__20132 == null))))?(((((map__20132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20132):map__20132);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20132__$1,cljs.core.cst$kw$db);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20132__$1,cljs.core.cst$kw$store);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store,null,cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"login"),cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.cst$kw$domain))], null));

var opts__19887__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__19888__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store,null,cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"login"),cljs.core.cst$kw$domain)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__19888__auto__,cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store,null,cljs.core.cst$kw$db,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$db,cljs.core.list(cljs.core.cst$sym$assoc_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"login"),cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.cst$kw$domain))], null),cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__19888__auto__;
}catch (e20134){var e = e20134;
throw e;
}});
} else {
react_med.authentication.authentication.user_logged_out = (function react_med$authentication$authentication$user_logged_out(p__20135,_){
var map__20136 = p__20135;
var map__20136__$1 = (((((!((map__20136 == null))))?(((((map__20136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20136):map__20136);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20136__$1,cljs.core.cst$kw$db);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20136__$1,cljs.core.cst$kw$store);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$store,null,cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$state], null),"login"),cljs.core.cst$kw$domain)], null);
});
}
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$react_DASH_med$authentication$authentication_SLASH_user_DASH_logged_DASH_out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20138 = cljs.core.cst$kw$store;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__20138) : re_frame.core.inject_cofx.call(null,G__20138));
})()], null),react_med.authentication.authentication.user_logged_out);
if((typeof react_med !== 'undefined') && (typeof react_med.authentication !== 'undefined') && (typeof react_med.authentication.authentication !== 'undefined') && (typeof react_med.authentication.authentication.on_auth_state_changed !== 'undefined')){
} else {
react_med.authentication.authentication.on_auth_state_changed = react_med.authentication.authentication.global$module$firebase.auth().onAuthStateChanged((function (user){
console.log("firebase onAuthStateChanged",user);

if(cljs.core.truth_(user)){
var G__20139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$authentication$authentication_SLASH_user_DASH_logged_DASH_in,user.email], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20139) : react_med.util._GT_evt.call(null,G__20139));
} else {
var G__20140 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_med$authentication$authentication_SLASH_user_DASH_logged_DASH_out], null);
return (react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1 ? react_med.util._GT_evt.cljs$core$IFn$_invoke$arity$1(G__20140) : react_med.util._GT_evt.call(null,G__20140));
}
}));
}
