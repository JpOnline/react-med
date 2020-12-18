// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.authentication.authentication');
goog.require('cljs.core');
goog.require('day8.re_frame.tracing');
goog.require('firebase');
goog.require('re_frame.core');
goog.require('react_med.storage_module.firebase');
goog.require('react_med.util');
goog.require('react_med.storage_module.local_storage');
react_med.authentication.authentication.global$module$firebase = goog.global["firebase"];
react_med.authentication.authentication.fb = react_med.authentication.authentication.global$module$firebase.firebase;
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.authentication.authentication.login_error = (function react_med$authentication$authentication$login_error(app_state,p__14661){
var vec__14662 = p__14661;
var event = cljs.core.nth.call(null,vec__14662,(0),null);
var attr = cljs.core.nth.call(null,vec__14662,(1),null);
var message = cljs.core.nth.call(null,vec__14662,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Symbol(null,"attr","attr",1036399174,null)], null),new cljs.core.Symbol(null,"message","message",1234475525,null))));

return debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(2)),(function (){var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})(),"login"),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login"),(1)),(function (){var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = attr;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Symbol(null,"attr","attr",1036399174,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = message;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"message","message",1234475525,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Symbol(null,"attr","attr",1036399174,null)], null),new cljs.core.Symbol(null,"message","message",1234475525,null)),(0));
}catch (e14665){var e = e14665;
throw e;
}});
} else {
react_med.authentication.authentication.login_error = (function react_med$authentication$authentication$login_error(app_state,p__14666){
var vec__14667 = p__14666;
var event = cljs.core.nth.call(null,vec__14667,(0),null);
var attr = cljs.core.nth.call(null,vec__14667,(1),null);
var message = cljs.core.nth.call(null,vec__14667,(2),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),attr], null),message);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),react_med.authentication.authentication.login_error);
react_med.authentication.authentication.logout = (function react_med$authentication$authentication$logout(){
return react_med.authentication.authentication.fb.auth().signOut().then((function (){
return console.log("Usu\u00E1rio fez logout.");
})).catch((function (error){
return console.error("\uD83D\uDE1E Erro ao fazer logout.",error.code,error.message);
}));
});
react_med.authentication.authentication.sign_in_with_email_and_password = (function react_med$authentication$authentication$sign_in_with_email_and_password(email,password){
return react_med.authentication.authentication.fb.auth().signInWithEmailAndPassword(email,password).catch((function (error){
var G__14670 = error.code;
switch (G__14670) {
case "auth/invalid-email":
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido"], null));

break;
case "auth/invalid-password":
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"password-error","password-error",-1023100972),"Senha inv\u00E1lida"], null));

break;
case "auth/user-not-found":
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Usu\u00E1rio n\u00E3o encontrado"], null));

break;
case "auth/wrong-password":
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"password-error","password-error",-1023100972),"Senha errada ou inexistente \uD83D\uDE1E"], null));

break;
case "auth/argument-error":
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido"], null));

break;
case "auth/network-request-failed":
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Problemas com a conex\u00E3o. \uD83D\uDE1E"], null));

break;
case "auth/user-disabled":
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Sua conta foi desabilitada. Contacte a equipe da BodyLines"], null));

break;
default:
react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),error.message], null));

react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"password-error","password-error",-1023100972),error.message], null));

return console.error("\uD83D\uDE1E N\u00E3o consegui logar.",error.code,error.message);

}
}));
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.authentication.authentication.email_and_password_login = (function react_med$authentication$authentication$email_and_password_login(p__14672,_){
var map__14673 = p__14672;
var map__14673__$1 = (((((!((map__14673 == null))))?(((((map__14673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14673):map__14673);
var db = cljs.core.get.call(null,map__14673__$1,new cljs.core.Keyword(null,"db","db",993250759));
var store = cljs.core.get.call(null,map__14673__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var _PLUS_debux_dbg_opts_PLUS__14680 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"Logando",cljs.core.list(new cljs.core.Symbol(null,"sign-in-with-email-and-password","sign-in-with-email-and-password",1447802044,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null)),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"password","password",417022471)], null)))));

var opts__14482__auto___14681 = _PLUS_debux_dbg_opts_PLUS__14680;
var result__14483__auto___14682 = console.log("Logando",(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS__14680;
var result__14483__auto__ = react_med.authentication.authentication.sign_in_with_email_and_password.call(null,(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS__14680;
var result__14483__auto__ = cljs.core.get_in.call(null,(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS__14680;
var result__14483__auto__ = db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS__14680;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS__14680;
var result__14483__auto__ = cljs.core.get_in.call(null,(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS__14680;
var result__14483__auto__ = db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS__14680;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"password","password",417022471)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"password","password",417022471)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"password","password",417022471)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"sign-in-with-email-and-password","sign-in-with-email-and-password",1447802044,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null)),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"password","password",417022471)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto___14682,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"Logando",cljs.core.list(new cljs.core.Symbol(null,"sign-in-with-email-and-password","sign-in-with-email-and-password",1447802044,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null)),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"password","password",417022471)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e14675){var e_14683 = e14675;
throw e_14683;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading")], null));

var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading")], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading")], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14483__auto__;
}catch (e14676){var e = e14676;
throw e;
}});
} else {
react_med.authentication.authentication.email_and_password_login = (function react_med$authentication$authentication$email_and_password_login(p__14677,_){
var map__14678 = p__14677;
var map__14678__$1 = (((((!((map__14678 == null))))?(((((map__14678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14678):map__14678);
var db = cljs.core.get.call(null,map__14678__$1,new cljs.core.Keyword(null,"db","db",993250759));
var store = cljs.core.get.call(null,map__14678__$1,new cljs.core.Keyword(null,"store","store",1512230022));
console.log("Logando",react_med.authentication.authentication.sign_in_with_email_and_password.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null)),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"password","password",417022471)], null))));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading")], null);
});
}
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("react-med.authentication.authentication","email-and-password-login","react-med.authentication.authentication/email-and-password-login",-2072915654),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"store","store",1512230022))], null),react_med.authentication.authentication.email_and_password_login);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.authentication.authentication.user_logged_in = (function react_med$authentication$authentication$user_logged_in(p__14684,p__14685){
var map__14686 = p__14684;
var map__14686__$1 = (((((!((map__14686 == null))))?(((((map__14686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14686):map__14686);
var db = cljs.core.get.call(null,map__14686__$1,new cljs.core.Keyword(null,"db","db",993250759));
var store = cljs.core.get.call(null,map__14686__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var vec__14687 = p__14685;
var event = cljs.core.nth.call(null,vec__14687,(0),null);
var email = cljs.core.nth.call(null,vec__14687,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"email","email",-1238619063,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.Keyword(null,"user-email","user-email",2126479881)], null))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"),new cljs.core.Keyword(null,"store","store",1512230022),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.local-storage","load-domain-from-local-storage","react-med.storage-module.local-storage/load-domain-from-local-storage",-1642872826)], null)], null)));

var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = (((function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.not_EQ_.call(null,(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = email;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"email","email",-1238619063,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.get_in.call(null,(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = store;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.Keyword(null,"user-email","user-email",2126479881)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.Keyword(null,"user-email","user-email",2126479881)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.Keyword(null,"user-email","user-email",2126479881)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"email","email",-1238619063,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.Keyword(null,"user-email","user-email",2126479881)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})())?(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"),new cljs.core.Keyword(null,"store","store",1512230022),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003)], null)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"),new cljs.core.Keyword(null,"store","store",1512230022),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})():(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.local-storage","load-domain-from-local-storage","react-med.storage-module.local-storage/load-domain-from-local-storage",-1642872826)], null)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.local-storage","load-domain-from-local-storage","react-med.storage-module.local-storage/load-domain-from-local-storage",-1642872826)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"email","email",-1238619063,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.Keyword(null,"user-email","user-email",2126479881)], null))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"),new cljs.core.Keyword(null,"store","store",1512230022),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.local-storage","load-domain-from-local-storage","react-med.storage-module.local-storage/load-domain-from-local-storage",-1642872826)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14483__auto__;
}catch (e14691){var e = e14691;
throw e;
}});
} else {
react_med.authentication.authentication.user_logged_in = (function react_med$authentication$authentication$user_logged_in(p__14692,p__14693){
var map__14694 = p__14692;
var map__14694__$1 = (((((!((map__14694 == null))))?(((((map__14694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14694):map__14694);
var db = cljs.core.get.call(null,map__14694__$1,new cljs.core.Keyword(null,"db","db",993250759));
var store = cljs.core.get.call(null,map__14694__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var vec__14695 = p__14693;
var event = cljs.core.nth.call(null,vec__14695,(0),null);
var email = cljs.core.nth.call(null,vec__14695,(1),null);
if(cljs.core.not_EQ_.call(null,email,cljs.core.get_in.call(null,store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.Keyword(null,"user-email","user-email",2126479881)], null)))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"),new cljs.core.Keyword(null,"store","store",1512230022),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.firebase","restore-domain-from-firebase","react-med.storage-module.firebase/restore-domain-from-firebase",558704003)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"loading"),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.storage-module.local-storage","load-domain-from-local-storage","react-med.storage-module.local-storage/load-domain-from-local-storage",-1642872826)], null)], null);
}
});
}
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("react-med.authentication.authentication","user-logged-in","react-med.authentication.authentication/user-logged-in",-1029399956),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"store","store",1512230022))], null),react_med.authentication.authentication.user_logged_in);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.authentication.authentication.user_logged_out = (function react_med$authentication$authentication$user_logged_out(p__14699,_){
var map__14700 = p__14699;
var map__14700__$1 = (((((!((map__14700 == null))))?(((((map__14700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14700):map__14700);
var db = cljs.core.get.call(null,map__14700__$1,new cljs.core.Keyword(null,"db","db",993250759));
var store = cljs.core.get.call(null,map__14700__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"store","store",1512230022),null,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login"),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"domain","domain",1847214937)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"authentication","authentication",1746273042)))], null));

var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"store","store",1512230022),null,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login"),new cljs.core.Keyword(null,"domain","domain",1847214937)),new cljs.core.Keyword(null,"authentication","authentication",1746273042))], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"store","store",1512230022),null,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login"),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"domain","domain",1847214937)),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"authentication","authentication",1746273042)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14483__auto__;
}catch (e14702){var e = e14702;
throw e;
}});
} else {
react_med.authentication.authentication.user_logged_out = (function react_med$authentication$authentication$user_logged_out(p__14703,_){
var map__14704 = p__14703;
var map__14704__$1 = (((((!((map__14704 == null))))?(((((map__14704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14704):map__14704);
var db = cljs.core.get.call(null,map__14704__$1,new cljs.core.Keyword(null,"db","db",993250759));
var store = cljs.core.get.call(null,map__14704__$1,new cljs.core.Keyword(null,"store","store",1512230022));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"store","store",1512230022),null,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"login"),new cljs.core.Keyword(null,"domain","domain",1847214937)),new cljs.core.Keyword(null,"authentication","authentication",1746273042))], null);
});
}
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("react-med.authentication.authentication","user-logged-out","react-med.authentication.authentication/user-logged-out",-1652599573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"store","store",1512230022))], null),react_med.authentication.authentication.user_logged_out);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.authentication.authentication.reset_password = (function react_med$authentication$authentication$reset_password(p__14706,_){
var map__14707 = p__14706;
var map__14707__$1 = (((((!((map__14707 == null))))?(((((map__14707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14707):map__14707);
var db = cljs.core.get.call(null,map__14707__$1,new cljs.core.Keyword(null,"db","db",993250759));
var store = cljs.core.get.call(null,map__14707__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var _PLUS_debux_dbg_opts_PLUS__14716 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"fb","fb",308862205,null),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),cljs.core.list(new cljs.core.Symbol(null,".sendPasswordResetEmail",".sendPasswordResetEmail",-205823877,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null))),cljs.core.list(new cljs.core.Symbol(null,".then",".then",224668574,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Email de redefini\u00E7\u00E3o de senha enviado para ",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null)))], null)))),cljs.core.list(new cljs.core.Symbol(null,".catch",".catch",-642269355,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,".-code",".-code",-54837687,null),new cljs.core.Symbol(null,"error","error",661562495,null)),"auth/invalid-email",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido. Insira seu email para redefini\u00E7\u00E3o de senha."], null)),"auth/user-not-found",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Usu\u00E1rio n\u00E3o encontrado. Caso n\u00E3o possua uma conta, contate-nos."], null)),"auth/argument-error",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido. Insira seu email para redefini\u00E7\u00E3o de senha."], null)),"auth/network-request-failed",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Problemas com a conex\u00E3o. \uD83D\uDE1E"], null)),"auth/user-disabled",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Sua conta foi desabilitada. Entre em contato conosco para reabilit\u00E1-la."], null)),cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"N\u00E3o consegui mandar email para redefinir a senha. ",cljs.core.list(new cljs.core.Symbol(null,".-message",".-message",-1827250821,null),new cljs.core.Symbol(null,"error","error",661562495,null)))], null)))))));

debux.common.util.spy_first.call(null,debux.common.util.spy_first.call(null,debux.common.util.spy_first.call(null,debux.common.util.spy_first.call(null,debux.common.util.spy_first.call(null,react_med.authentication.authentication.fb,new cljs.core.Symbol(null,"fb","fb",308862205,null),(4)).auth(),new cljs.core.Symbol(null,".auth",".auth",1249770054,null),(3)).sendPasswordResetEmail((function (){var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = cljs.core.get_in.call(null,(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,".sendPasswordResetEmail",".sendPasswordResetEmail",-205823877,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null))),(2)).then((function (){var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = ((function (opts__14482__auto__,_PLUS_debux_dbg_opts_PLUS__14716,map__14707,map__14707__$1,db,store){
return (function (){
var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = react_med.util._GT_evt.call(null,(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = ["Email de redefini\u00E7\u00E3o de senha enviado para ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__14482__auto____$4 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = cljs.core.get_in.call(null,(function (){var opts__14482__auto____$5 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$5 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__14483__auto__;
})())].join('');
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Email de redefini\u00E7\u00E3o de senha enviado para ",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Email de redefini\u00E7\u00E3o de senha enviado para ",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Email de redefini\u00E7\u00E3o de senha enviado para ",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null)))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
});})(opts__14482__auto__,_PLUS_debux_dbg_opts_PLUS__14716,map__14707,map__14707__$1,db,store))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Email de redefini\u00E7\u00E3o de senha enviado para ",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null)))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,".then",".then",224668574,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Email de redefini\u00E7\u00E3o de senha enviado para ",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null)))], null)))),(1)).catch((function (){var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = ((function (opts__14482__auto__,_PLUS_debux_dbg_opts_PLUS__14716,map__14707,map__14707__$1,db,store){
return (function (error){
var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = (function (){var G__14710 = (function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = (function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = error;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})().code;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".-code",".-code",-54837687,null),new cljs.core.Symbol(null,"error","error",661562495,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})();
switch (G__14710) {
case "auth/invalid-email":
var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = react_med.util._GT_evt.call(null,(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido. Insira seu email para redefini\u00E7\u00E3o de senha."], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido. Insira seu email para redefini\u00E7\u00E3o de senha."], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido. Insira seu email para redefini\u00E7\u00E3o de senha."], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;

break;
case "auth/user-not-found":
var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = react_med.util._GT_evt.call(null,(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Usu\u00E1rio n\u00E3o encontrado. Caso n\u00E3o possua uma conta, contate-nos."], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Usu\u00E1rio n\u00E3o encontrado. Caso n\u00E3o possua uma conta, contate-nos."], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Usu\u00E1rio n\u00E3o encontrado. Caso n\u00E3o possua uma conta, contate-nos."], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;

break;
case "auth/argument-error":
var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = react_med.util._GT_evt.call(null,(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido. Insira seu email para redefini\u00E7\u00E3o de senha."], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido. Insira seu email para redefini\u00E7\u00E3o de senha."], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido. Insira seu email para redefini\u00E7\u00E3o de senha."], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;

break;
case "auth/network-request-failed":
var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = react_med.util._GT_evt.call(null,(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Problemas com a conex\u00E3o. \uD83D\uDE1E"], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Problemas com a conex\u00E3o. \uD83D\uDE1E"], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Problemas com a conex\u00E3o. \uD83D\uDE1E"], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;

break;
case "auth/user-disabled":
var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = react_med.util._GT_evt.call(null,(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Sua conta foi desabilitada. Entre em contato conosco para reabilit\u00E1-la."], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Sua conta foi desabilitada. Entre em contato conosco para reabilit\u00E1-la."], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Sua conta foi desabilitada. Entre em contato conosco para reabilit\u00E1-la."], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;

break;
default:
var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = react_med.util._GT_evt.call(null,(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),(function (){var opts__14482__auto____$4 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = ["N\u00E3o consegui mandar email para redefinir a senha. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__14482__auto____$5 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = (function (){var opts__14482__auto____$6 = _PLUS_debux_dbg_opts_PLUS__14716;
var result__14483__auto__ = error;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__14483__auto__;
})().message;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".-message",".-message",-1827250821,null),new cljs.core.Symbol(null,"error","error",661562495,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__14483__auto__;
})())].join('');
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"N\u00E3o consegui mandar email para redefinir a senha. ",cljs.core.list(new cljs.core.Symbol(null,".-message",".-message",-1827250821,null),new cljs.core.Symbol(null,"error","error",661562495,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"N\u00E3o consegui mandar email para redefinir a senha. ",cljs.core.list(new cljs.core.Symbol(null,".-message",".-message",-1827250821,null),new cljs.core.Symbol(null,"error","error",661562495,null)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"N\u00E3o consegui mandar email para redefinir a senha. ",cljs.core.list(new cljs.core.Symbol(null,".-message",".-message",-1827250821,null),new cljs.core.Symbol(null,"error","error",661562495,null)))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;

}
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,".-code",".-code",-54837687,null),new cljs.core.Symbol(null,"error","error",661562495,null)),"auth/invalid-email",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido. Insira seu email para redefini\u00E7\u00E3o de senha."], null)),"auth/user-not-found",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Usu\u00E1rio n\u00E3o encontrado. Caso n\u00E3o possua uma conta, contate-nos."], null)),"auth/argument-error",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido. Insira seu email para redefini\u00E7\u00E3o de senha."], null)),"auth/network-request-failed",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Problemas com a conex\u00E3o. \uD83D\uDE1E"], null)),"auth/user-disabled",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Sua conta foi desabilitada. Entre em contato conosco para reabilit\u00E1-la."], null)),cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"N\u00E3o consegui mandar email para redefinir a senha. ",cljs.core.list(new cljs.core.Symbol(null,".-message",".-message",-1827250821,null),new cljs.core.Symbol(null,"error","error",661562495,null)))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
});})(opts__14482__auto__,_PLUS_debux_dbg_opts_PLUS__14716,map__14707,map__14707__$1,db,store))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,".-code",".-code",-54837687,null),new cljs.core.Symbol(null,"error","error",661562495,null)),"auth/invalid-email",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido. Insira seu email para redefini\u00E7\u00E3o de senha."], null)),"auth/user-not-found",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Usu\u00E1rio n\u00E3o encontrado. Caso n\u00E3o possua uma conta, contate-nos."], null)),"auth/argument-error",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido. Insira seu email para redefini\u00E7\u00E3o de senha."], null)),"auth/network-request-failed",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Problemas com a conex\u00E3o. \uD83D\uDE1E"], null)),"auth/user-disabled",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Sua conta foi desabilitada. Entre em contato conosco para reabilit\u00E1-la."], null)),cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"N\u00E3o consegui mandar email para redefinir a senha. ",cljs.core.list(new cljs.core.Symbol(null,".-message",".-message",-1827250821,null),new cljs.core.Symbol(null,"error","error",661562495,null)))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,".catch",".catch",-642269355,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,".-code",".-code",-54837687,null),new cljs.core.Symbol(null,"error","error",661562495,null)),"auth/invalid-email",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido. Insira seu email para redefini\u00E7\u00E3o de senha."], null)),"auth/user-not-found",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Usu\u00E1rio n\u00E3o encontrado. Caso n\u00E3o possua uma conta, contate-nos."], null)),"auth/argument-error",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido. Insira seu email para redefini\u00E7\u00E3o de senha."], null)),"auth/network-request-failed",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Problemas com a conex\u00E3o. \uD83D\uDE1E"], null)),"auth/user-disabled",cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Sua conta foi desabilitada. Entre em contato conosco para reabilit\u00E1-la."], null)),cljs.core.list(new cljs.core.Symbol(null,">evt",">evt",1449120237,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"N\u00E3o consegui mandar email para redefinir a senha. ",cljs.core.list(new cljs.core.Symbol(null,".-message",".-message",-1827250821,null),new cljs.core.Symbol(null,"error","error",661562495,null)))], null))))),(0));
}catch (e14709){var e_14718 = e14709;
throw e_14718;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"login-error","login-error",350266088,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","reset-password","react-med.authentication.authentication/reset-password",854137685),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Enviando email.."], null))], null));

var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),react_med.authentication.authentication.login_error.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","reset-password","react-med.authentication.authentication/reset-password",854137685),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Enviando email.."], null))], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"login-error","login-error",350266088,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","reset-password","react-med.authentication.authentication/reset-password",854137685),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Enviando email.."], null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14483__auto__;
}catch (e14711){var e = e14711;
throw e;
}});
} else {
react_med.authentication.authentication.reset_password = (function react_med$authentication$authentication$reset_password(p__14712,_){
var map__14713 = p__14712;
var map__14713__$1 = (((((!((map__14713 == null))))?(((((map__14713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14713):map__14713);
var db = cljs.core.get.call(null,map__14713__$1,new cljs.core.Keyword(null,"db","db",993250759));
var store = cljs.core.get.call(null,map__14713__$1,new cljs.core.Keyword(null,"store","store",1512230022));
react_med.authentication.authentication.fb.auth().sendPasswordResetEmail(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null))).then(((function (map__14713,map__14713__$1,db,store){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),["Email de redefini\u00E7\u00E3o de senha enviado para ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null)))].join('')], null));
});})(map__14713,map__14713__$1,db,store))
).catch(((function (map__14713,map__14713__$1,db,store){
return (function (error){
var G__14715 = error.code;
switch (G__14715) {
case "auth/invalid-email":
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido. Insira seu email para redefini\u00E7\u00E3o de senha."], null));

break;
case "auth/user-not-found":
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Usu\u00E1rio n\u00E3o encontrado. Caso n\u00E3o possua uma conta, contate-nos."], null));

break;
case "auth/argument-error":
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Email inv\u00E1lido. Insira seu email para redefini\u00E7\u00E3o de senha."], null));

break;
case "auth/network-request-failed":
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Problemas com a conex\u00E3o. \uD83D\uDE1E"], null));

break;
case "auth/user-disabled":
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Sua conta foi desabilitada. Entre em contato conosco para reabilit\u00E1-la."], null));

break;
default:
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","login-error","react-med.authentication.authentication/login-error",999966691),new cljs.core.Keyword(null,"email-error","email-error",1024363999),["N\u00E3o consegui mandar email para redefinir a senha. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join('')], null));

}
});})(map__14713,map__14713__$1,db,store))
);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),react_med.authentication.authentication.login_error.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","reset-password","react-med.authentication.authentication/reset-password",854137685),new cljs.core.Keyword(null,"email-error","email-error",1024363999),"Enviando email.."], null))], null);
});
}
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("react-med.authentication.authentication","reset-password","react-med.authentication.authentication/reset-password",854137685),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"store","store",1512230022))], null),react_med.authentication.authentication.reset_password);
if((typeof react_med !== 'undefined') && (typeof react_med.authentication !== 'undefined') && (typeof react_med.authentication.authentication !== 'undefined') && (typeof react_med.authentication.authentication.on_auth_state_changed !== 'undefined')){
} else {
react_med.authentication.authentication.on_auth_state_changed = react_med.authentication.authentication.fb.auth().onAuthStateChanged((function (user){
console.log("firebase onAuthStateChanged",user);

if(cljs.core.truth_(user)){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","user-logged-in","react-med.authentication.authentication/user-logged-in",-1029399956),user.email], null));
} else {
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","user-logged-out","react-med.authentication.authentication/user-logged-out",-1652599573)], null));
}
}));
}

//# sourceMappingURL=authentication.js.map
