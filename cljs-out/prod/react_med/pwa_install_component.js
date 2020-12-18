// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.pwa_install_component');
goog.require('cljs.core');
goog.require('day8.re_frame.tracing');
goog.require('button');
goog.require('re_frame.core');
goog.require('react_med.util');
react_med.pwa_install_component.global$module$button = goog.global["Button"];
react_med.pwa_install_component.deferred_install_prompt = cljs.core.atom.call(null,null);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.pwa_install_component.show_install_prompt = (function react_med$pwa_install_component$show_install_prompt(app_state){
var _PLUS_debux_dbg_opts_PLUS__14724 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,".prompt",".prompt",-1247223586,null),cljs.core.list(new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"deferred-install-prompt","deferred-install-prompt",1331487076,null))));

var opts__14482__auto___14725 = _PLUS_debux_dbg_opts_PLUS__14724;
var result__14483__auto___14726 = (function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS__14724;
var result__14483__auto__ = cljs.core.deref.call(null,(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS__14724;
var result__14483__auto__ = react_med.pwa_install_component.deferred_install_prompt;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"deferred-install-prompt","deferred-install-prompt",1331487076,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"deferred-install-prompt","deferred-install-prompt",1331487076,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})().prompt();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto___14726,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".prompt",".prompt",-1247223586,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"deferred-install-prompt","deferred-install-prompt",1331487076,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e14722){var e_14727 = e14722;
throw e_14727;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"deferred-install-prompt","deferred-install-prompt",1331487076,null)),new cljs.core.Symbol(null,".-userChoice",".-userChoice",1070353827,null),cljs.core.list(new cljs.core.Symbol(null,".then",".then",224668574,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"choice-result","choice-result",-1029988964,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"accepted",cljs.core.list(new cljs.core.Symbol(null,".-outcome",".-outcome",-1884449703,null),new cljs.core.Symbol(null,"choice-result","choice-result",-1029988964,null))),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"User accepted the install prompt."),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),false)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"User dismissed the install prompt."),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),true)))))));

return debux.common.util.spy_first.call(null,debux.common.util.spy_first.call(null,debux.common.util.spy_first.call(null,cljs.core.deref.call(null,(function (){var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = react_med.pwa_install_component.deferred_install_prompt;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"deferred-install-prompt","deferred-install-prompt",1331487076,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})()),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"deferred-install-prompt","deferred-install-prompt",1331487076,null)),(2)).userChoice,new cljs.core.Symbol(null,".-userChoice",".-userChoice",1070353827,null),(1)).then((function (){var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = ((function (opts__14482__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (choice_result){
var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = (((function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core._EQ_.call(null,"accepted",(function (){var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = (function (){var opts__14482__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = choice_result;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"choice-result","choice-result",-1029988964,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})().outcome;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".-outcome",".-outcome",-1884449703,null),new cljs.core.Symbol(null,"choice-result","choice-result",-1029988964,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"accepted",cljs.core.list(new cljs.core.Symbol(null,".-outcome",".-outcome",-1884449703,null),new cljs.core.Symbol(null,"choice-result","choice-result",-1029988964,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})())?(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = (function (){
var opts__14482__auto___14728__$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto___14729 = console.log("User accepted the install prompt.");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto___14729,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"User accepted the install prompt."),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));


var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14482__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})(),false);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})()
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"User accepted the install prompt."),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),false)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})():(function (){var opts__14482__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = (function (){
var opts__14482__auto___14730__$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto___14731 = console.log("User dismissed the install prompt.");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto___14731,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"User dismissed the install prompt."),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));


var opts__14482__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14482__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__14483__auto__;
})(),true);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14483__auto__;
})()
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"User dismissed the install prompt."),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),true)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14483__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"accepted",cljs.core.list(new cljs.core.Symbol(null,".-outcome",".-outcome",-1884449703,null),new cljs.core.Symbol(null,"choice-result","choice-result",-1029988964,null))),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"User accepted the install prompt."),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),false)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"User dismissed the install prompt."),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),true))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14483__auto__;
});})(opts__14482__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"choice-result","choice-result",-1029988964,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"accepted",cljs.core.list(new cljs.core.Symbol(null,".-outcome",".-outcome",-1884449703,null),new cljs.core.Symbol(null,"choice-result","choice-result",-1029988964,null))),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"User accepted the install prompt."),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),false)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"User dismissed the install prompt."),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),true)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,".then",".then",224668574,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"choice-result","choice-result",-1029988964,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"accepted",cljs.core.list(new cljs.core.Symbol(null,".-outcome",".-outcome",-1884449703,null),new cljs.core.Symbol(null,"choice-result","choice-result",-1029988964,null))),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"User accepted the install prompt."),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),false)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),"User dismissed the install prompt."),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),true))))),(0));
}catch (e14723){var e = e14723;
throw e;
}});
} else {
react_med.pwa_install_component.show_install_prompt = (function react_med$pwa_install_component$show_install_prompt(app_state){
cljs.core.deref.call(null,react_med.pwa_install_component.deferred_install_prompt).prompt();

return cljs.core.deref.call(null,react_med.pwa_install_component.deferred_install_prompt).userChoice.then((function (choice_result){
if(cljs.core._EQ_.call(null,"accepted",choice_result.outcome)){
console.log("User accepted the install prompt.");

return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),false);
} else {
console.log("User dismissed the install prompt.");

return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),true);
}
}));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.pwa-install-component","show-install-prompt","react-med.pwa-install-component/show-install-prompt",888094115),react_med.pwa_install_component.show_install_prompt);
react_med.pwa_install_component.show_install_button_QMARK_ = (function react_med$pwa_install_component$show_install_button_QMARK_(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),false);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.pwa-install-component","show-install-button?","react-med.pwa-install-component/show-install-button?",1397816295),react_med.pwa_install_component.show_install_button_QMARK_);
react_med.pwa_install_component.button = (function react_med$pwa_install_component$button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.pwa-install-component","show-install-button?","react-med.pwa-install-component/show-install-button?",1397816295)], null)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.pwa_install_component.global$module$button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#caca30", "margin": "10px 15px", "color": "white"}),new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.pwa-install-component","show-install-prompt","react-med.pwa-install-component/show-install-prompt",888094115)], null));
})], null),"Instalar"], null):null)], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.pwa_install_component.show_install_button = (function react_med$pwa_install_component$show_install_button(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),true));

var opts__14482__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})(),(function (){var opts__14482__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14483__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14483__auto__;
})(),true);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14483__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14483__auto__;
}catch (e14732){var e = e14732;
throw e;
}});
} else {
react_med.pwa_install_component.show_install_button = (function react_med$pwa_install_component$show_install_button(app_state){
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-pwa-install-button?","show-pwa-install-button?",-5206341)], null),true);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.pwa-install-component","show-install-button","react-med.pwa-install-component/show-install-button",2124430632),react_med.pwa_install_component.show_install_button);
react_med.pwa_install_component.add_before_install_prompt_event_listener = (function react_med$pwa_install_component$add_before_install_prompt_event_listener(){
return window.addEventListener("beforeinstallprompt",(function (p1__14733_SHARP_){
console.log("beforeinstallprompt triggered");

cljs.core.reset_BANG_.call(null,react_med.pwa_install_component.deferred_install_prompt,p1__14733_SHARP_);

return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.pwa-install-component","show-install-button","react-med.pwa-install-component/show-install-button",2124430632)], null));
}));
});

//# sourceMappingURL=pwa_install_component.js.map
