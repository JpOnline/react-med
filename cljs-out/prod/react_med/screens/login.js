// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.login');
goog.require('cljs.core');
goog.require('button');
goog.require('card');
goog.require('card_content');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('react_med.authentication.authentication');
goog.require('react_med.shell_components');
goog.require('react_med.util');
react_med.screens.login.global$module$button = goog.global["Button"];
react_med.screens.login.global$module$card = goog.global["Card"];
react_med.screens.login.global$module$card_content = goog.global["CardContent"];
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.login.set_login_property = (function react_med$screens$login$set_login_property(app_state,p__14891){
var vec__14892 = p__14891;
var event = cljs.core.nth.call(null,vec__14892,(0),null);
var property = cljs.core.nth.call(null,vec__14892,(1),null);
var value = cljs.core.nth.call(null,vec__14892,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"value","value",1946509744,null)),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Symbol(null,"property","property",526253295,null)], null),new cljs.core.Symbol(null,"value","value",1946509744,null))));

var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = (((function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.empty_QMARK_.call(null,(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = value;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"value","value",1946509744,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})())?(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})():(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = property;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"property","property",526253295,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Symbol(null,"property","property",526253295,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = value;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Symbol(null,"property","property",526253295,null)], null),new cljs.core.Symbol(null,"value","value",1946509744,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"value","value",1946509744,null)),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Symbol(null,"property","property",526253295,null)], null),new cljs.core.Symbol(null,"value","value",1946509744,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14483__auto__;
}catch (e14895){var e = e14895;
throw e;
}});
} else {
/**
 * Altera propriedades relacionadas à tela de login no app-state.
 */
react_med.screens.login.set_login_property = (function react_med$screens$login$set_login_property(app_state,p__14896){
var vec__14897 = p__14896;
var event = cljs.core.nth.call(null,vec__14897,(0),null);
var property = cljs.core.nth.call(null,vec__14897,(1),null);
var value = cljs.core.nth.call(null,vec__14897,(2),null);
if(cljs.core.empty_QMARK_.call(null,value)){
return app_state;
} else {
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),property], null),value);
}
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.login","set-login-property","react-med.screens.login/set-login-property",-2145751329),react_med.screens.login.set_login_property);
react_med.screens.login.email = (function react_med$screens$login$email(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.login","email","react-med.screens.login/email",-1991830816),react_med.screens.login.email);
react_med.screens.login.email_error = (function react_med$screens$login$email_error(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email-error","email-error",1024363999)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.login","email-error","react-med.screens.login/email-error",-231845183),react_med.screens.login.email_error);
react_med.screens.login.password = (function react_med$screens$login$password(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"password","password",417022471)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.login","password","react-med.screens.login/password",1476033617),react_med.screens.login.password);
react_med.screens.login.password_error = (function react_med$screens$login$password_error(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"password-error","password-error",-1023100972)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.login","password-error","react-med.screens.login/password-error",2010770150),react_med.screens.login.password_error);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.login.clear_errors = (function react_med$screens$login$clear_errors(app_state,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"password-error","password-error",-1023100972)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"email-error","email-error",1024363999))));

return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(2)),(function (){var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})(),new cljs.core.Keyword(null,"password-error","password-error",-1023100972)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"password-error","password-error",-1023100972)),(1)),(function (){var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})(),new cljs.core.Keyword(null,"email-error","email-error",1024363999)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"email-error","email-error",1024363999)),(0));
}catch (e14900){var e = e14900;
throw e;
}});
} else {
react_med.screens.login.clear_errors = (function react_med$screens$login$clear_errors(app_state,_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"password-error","password-error",-1023100972)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"login","login",55217519)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"email-error","email-error",1024363999));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.login","clear-errors","react-med.screens.login/clear-errors",-2009140007),react_med.screens.login.clear_errors);
react_med.screens.login.component = (function react_med$screens$login$component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.login.global$module$card,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(5),new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "white", "maxWidth": (450), "border": (10), "margin": "max((100% - 450px) / 30, 0px) auto", "zIndex": (1200)})], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.login.global$module$card_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "flexDirection": "column", "alignItems": "center"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"margin": "15px"}),new cljs.core.Keyword(null,"src","src",-1651076051),"images/LogoReactmed.png",new cljs.core.Keyword(null,"width","width",-384071477),(250)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-input","paper-input",982725932),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"style","style",-496642736),({"width": "100%"}),new cljs.core.Keyword(null,"label","label",1718410804),"Email",new cljs.core.Keyword(null,"onFocus","onFocus",1152444958),(function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.login","clear-errors","react-med.screens.login/clear-errors",-2009140007)], null));
}),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(function (p1__14901_SHARP_){
console.log("keydown",p1__14901_SHARP_);

if(cljs.core._EQ_.call(null,(13),p1__14901_SHARP_.keyCode)){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","email-and-password-login","react-med.authentication.authentication/email-and-password-login",-2072915654)], null));
} else {
return null;
}
}),(cljs.core.truth_(react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.login","email-error","react-med.screens.login/email-error",-231845183)], null)))?new cljs.core.Keyword(null,"invalid","invalid",412869516):null),(cljs.core.truth_(react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.login","email-error","react-med.screens.login/email-error",-231845183)], null)))?true:null),"error-message",react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.login","email-error","react-med.screens.login/email-error",-231845183)], null)),new cljs.core.Keyword(null,"value","value",305978217),react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.login","email","react-med.screens.login/email",-1991830816)], null)),new cljs.core.Keyword(null,"onBlur","onBlur",229342509),(function (p1__14902_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.login","set-login-property","react-med.screens.login/set-login-property",-2145751329),new cljs.core.Keyword(null,"email","email",1415816706),p1__14902_SHARP_.target.value], null));
})])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper-input","paper-input",982725932),cljs.core.PersistentHashMap.fromArrays([(cljs.core.truth_(react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.login","password-error","react-med.screens.login/password-error",2010770150)], null)))?new cljs.core.Keyword(null,"invalid","invalid",412869516):null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),"error-message",new cljs.core.Keyword(null,"onBlur","onBlur",229342509),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),new cljs.core.Keyword(null,"onFocus","onFocus",1152444958)],[(cljs.core.truth_(react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.login","password-error","react-med.screens.login/password-error",2010770150)], null)))?true:null),react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.login","password","react-med.screens.login/password",1476033617)], null)),"password",react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.login","password-error","react-med.screens.login/password-error",2010770150)], null)),(function (p1__14904_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.login","set-login-property","react-med.screens.login/set-login-property",-2145751329),new cljs.core.Keyword(null,"password","password",417022471),p1__14904_SHARP_.target.value], null));
}),({"width": "100%"}),"Senha",(function (p1__14903_SHARP_){
if(cljs.core._EQ_.call(null,(13),p1__14903_SHARP_.keyCode)){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","email-and-password-login","react-med.authentication.authentication/email-and-password-login",-2072915654)], null));
} else {
return null;
}
}),(function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.login","clear-errors","react-med.screens.login/clear-errors",-2009140007)], null));
})])], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.login.global$module$button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#caca30", "margin": "15px", "color": "white"}),new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","email-and-password-login","react-med.authentication.authentication/email-and-password-login",-2072915654)], null));
})], null),"Entrar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"color": "#caca30", "cursor": "pointer"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.authentication.authentication","reset-password","react-med.authentication.authentication/reset-password",854137685)], null));
})], null),"Esqueci minha senha"], null)], null)], null);
});
react_med.screens.login.view = (function react_med$screens$login$view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"position": "absolute", "width": "100%", "height": "100%", "zIndex": (1199), "backgroundColor": "#eeeeee"})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.login.component], null)], null)], null);
});

//# sourceMappingURL=login.js.map
