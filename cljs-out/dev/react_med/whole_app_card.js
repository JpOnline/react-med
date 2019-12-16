// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.whole_app_card');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('reagent.core');
goog.require('button');
goog.require('expand_more');
goog.require('expand_less');
goog.require('re_frame.core');
goog.require('react_med.routes');
goog.require('react_med.screens.patient_info.card');
goog.require('react_med.main');
goog.require('day8.re_frame.tracing');
goog.require('react_med.screens.paciente_avaliacao');
goog.require('react_med.screens.patient_info.core');
goog.require('react_med.screens.paciente_relatorio.paciente_relatorio');
goog.require('react_med.shell_components');
goog.require('react_med.screens.lista_pacientes');
goog.require('react_med.util');
react_med.whole_app_card.global$module$button = goog.global["Button"];
react_med.whole_app_card.global$module$expand_more = goog.global["ExpandMore"];
react_med.whole_app_card.global$module$expand_less = goog.global["ExpandLess"];
devcards.core.start_devcard_ui_BANG__STAR_.call(null);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.whole-app-card","init-app-state","react-med.whole-app-card/init-app-state",898209122),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol("react-med.main","initial-state","react-med.main/initial-state",871291016,null));

var opts__14244__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14245__auto__ = react_med.main.initial_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14245__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("react-med.main","initial-state","react-med.main/initial-state",871291016,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14245__auto__;
}catch (e35788){var e = e35788;
throw e;
}}):(function (_,___$1){
return react_med.main.initial_state;
})));
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.init_app_state !== 'undefined')){
} else {
react_med.whole_app_card.init_app_state = (function (){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.whole-app-card","init-app-state","react-med.whole-app-card/init-app-state",898209122)], null));
})()
;
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),"# React Med. Hello World!",new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null)))], null));
})], null));
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.devcards_hidden !== 'undefined')){
} else {
react_med.whole_app_card.devcards_hidden = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"hidding-cards","hidding-cards",-932317179)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"hidding-cards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35789 = (function (meta35790){
this.meta35790 = meta35790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35791,meta35790__$1){
var self__ = this;
var _35791__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35789(meta35790__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35791){
var self__ = this;
var _35791__$1 = this;
return self__.meta35790;
});

react_med.whole_app_card.t_react_med$whole_app_card35789.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35789.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = (function (){var card_container_style = ({"display": "flex", "justifyContent": "space-evenly", "padding": "20px 0"});
return ((function (card_container_style,this__21007__auto____$1){
return (function (devcard_data,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),card_container_style], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"hide-all",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (card_container_style,this__21007__auto____$1){
return (function (){
var seq__35792 = cljs.core.seq.call(null,cljs.core.deref.call(null,react_med.whole_app_card.devcards_hidden));
var chunk__35793 = null;
var count__35794 = (0);
var i__35795 = (0);
while(true){
if((i__35795 < count__35794)){
var hidden_atom = cljs.core._nth.call(null,chunk__35793,i__35795);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__35800 = seq__35792;
var G__35801 = chunk__35793;
var G__35802 = count__35794;
var G__35803 = (i__35795 + (1));
seq__35792 = G__35800;
chunk__35793 = G__35801;
count__35794 = G__35802;
i__35795 = G__35803;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35792);
if(temp__5735__auto__){
var seq__35792__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35792__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35792__$1);
var G__35804 = cljs.core.chunk_rest.call(null,seq__35792__$1);
var G__35805 = c__4550__auto__;
var G__35806 = cljs.core.count.call(null,c__4550__auto__);
var G__35807 = (0);
seq__35792 = G__35804;
chunk__35793 = G__35805;
count__35794 = G__35806;
i__35795 = G__35807;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__35792__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__35808 = cljs.core.next.call(null,seq__35792__$1);
var G__35809 = null;
var G__35810 = (0);
var G__35811 = (0);
seq__35792 = G__35808;
chunk__35793 = G__35809;
count__35794 = G__35810;
i__35795 = G__35811;
continue;
}
} else {
return null;
}
}
break;
}
});})(card_container_style,this__21007__auto____$1))
], null),"hide all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"show-all",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (card_container_style,this__21007__auto____$1){
return (function (){
var seq__35796 = cljs.core.seq.call(null,cljs.core.deref.call(null,react_med.whole_app_card.devcards_hidden));
var chunk__35797 = null;
var count__35798 = (0);
var i__35799 = (0);
while(true){
if((i__35799 < count__35798)){
var hidden_atom = cljs.core._nth.call(null,chunk__35797,i__35799);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__35812 = seq__35796;
var G__35813 = chunk__35797;
var G__35814 = count__35798;
var G__35815 = (i__35799 + (1));
seq__35796 = G__35812;
chunk__35797 = G__35813;
count__35798 = G__35814;
i__35799 = G__35815;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35796);
if(temp__5735__auto__){
var seq__35796__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35796__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35796__$1);
var G__35816 = cljs.core.chunk_rest.call(null,seq__35796__$1);
var G__35817 = c__4550__auto__;
var G__35818 = cljs.core.count.call(null,c__4550__auto__);
var G__35819 = (0);
seq__35796 = G__35816;
chunk__35797 = G__35817;
count__35798 = G__35818;
i__35799 = G__35819;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__35796__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__35820 = cljs.core.next.call(null,seq__35796__$1);
var G__35821 = null;
var G__35822 = (0);
var G__35823 = (0);
seq__35796 = G__35820;
chunk__35797 = G__35821;
count__35798 = G__35822;
i__35799 = G__35823;
continue;
}
} else {
return null;
}
}
break;
}
});})(card_container_style,this__21007__auto____$1))
], null),"show all"], null)], null);
});
;})(card_container_style,this__21007__auto____$1))
})();
if(cljs.core.fn_QMARK_.call(null,v__21026__auto__)){
return ((function (v__21026__auto__,this__21007__auto____$1){
return (function (data_atom__21027__auto__,owner__21028__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__21026__auto__,data_atom__21027__auto__,owner__21028__auto__], null));
});
;})(v__21026__auto__,this__21007__auto____$1))
} else {
return reagent.core.as_element.call(null,v__21026__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__21008__auto__))));
});

react_med.whole_app_card.t_react_med$whole_app_card35789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35790","meta35790",1121172415,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35789.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35789.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35789";

react_med.whole_app_card.t_react_med$whole_app_card35789.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35789");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35789.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35789 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35789(meta35790){
return (new react_med.whole_app_card.t_react_med$whole_app_card35789(meta35790));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35789(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"mobile-view","mobile-view",-1958626148)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"mobile-view",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35824 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35824 = (function (meta35825){
this.meta35825 = meta35825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35826,meta35825__$1){
var self__ = this;
var _35826__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35824(meta35825__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35826){
var self__ = this;
var _35826__$1 = this;
return self__.meta35825;
});

react_med.whole_app_card.t_react_med$whole_app_card35824.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35824.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35827 = cljs.core.deref.call(null,devcard_data);
var map__35827__$1 = (((((!((map__35827 == null))))?(((((map__35827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35827):map__35827);
var hidden_QMARK_ = cljs.core.get.call(null,map__35827__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35827,map__35827__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35827,map__35827__$1,hidden_QMARK_,this__21007__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$expand_more], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$expand_less], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "paddingBottom": (20)})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),react_med.shell_components.error_view], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_),new cljs.core.Keyword(null,"style","style",-496642736),({"width": (360), "height": (640), "border": "1px solid #00000038"})], null),react_med.routes.selected_view.call(null)], null)], null)], null)], null);
});})(this__21007__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__21026__auto__)){
return ((function (v__21026__auto__,this__21007__auto____$1){
return (function (data_atom__21027__auto__,owner__21028__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__21026__auto__,data_atom__21027__auto__,owner__21028__auto__], null));
});
;})(v__21026__auto__,this__21007__auto____$1))
} else {
return reagent.core.as_element.call(null,v__21026__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__21008__auto__))));
});

react_med.whole_app_card.t_react_med$whole_app_card35824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35825","meta35825",-2000200174,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35824.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35824.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35824";

react_med.whole_app_card.t_react_med$whole_app_card35824.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35824");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35824.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35824 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35824(meta35825){
return (new react_med.whole_app_card.t_react_med$whole_app_card35824(meta35825));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35824(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"desktop-view","desktop-view",1259160665)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"desktop-view",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35829 = (function (meta35830){
this.meta35830 = meta35830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35831,meta35830__$1){
var self__ = this;
var _35831__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35829(meta35830__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35831){
var self__ = this;
var _35831__$1 = this;
return self__.meta35830;
});

react_med.whole_app_card.t_react_med$whole_app_card35829.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35829.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35832 = cljs.core.deref.call(null,devcard_data);
var map__35832__$1 = (((((!((map__35832 == null))))?(((((map__35832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35832):map__35832);
var hidden_QMARK_ = cljs.core.get.call(null,map__35832__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "justifyContent": "space-evenly", "padding": "15px 0"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog",new cljs.core.Keyword(null,"style","style",-496642736),({"width": "90vw"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"style","style",-496642736),({"color": "#666"})], null),"desktop-view"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35832,map__35832__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35832,map__35832__$1,hidden_QMARK_,this__21007__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$expand_more], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$expand_less], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "justifyContent": "space-evenly"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"width": "96vw"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),react_med.shell_components.error_view], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_),new cljs.core.Keyword(null,"style","style",-496642736),({"width": "96vw", "height": "90vh", "border": "1px solid #00000038"})], null),react_med.routes.selected_view.call(null)], null)], null)], null)], null)], null)], null);
});})(this__21007__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__21026__auto__)){
return ((function (v__21026__auto__,this__21007__auto____$1){
return (function (data_atom__21027__auto__,owner__21028__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__21026__auto__,data_atom__21027__auto__,owner__21028__auto__], null));
});
;})(v__21026__auto__,this__21007__auto____$1))
} else {
return reagent.core.as_element.call(null,v__21026__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__21008__auto__))));
});

react_med.whole_app_card.t_react_med$whole_app_card35829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35830","meta35830",-774947342,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35829.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35829.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35829";

react_med.whole_app_card.t_react_med$whole_app_card35829.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35829");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35829.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35829 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35829(meta35830){
return (new react_med.whole_app_card.t_react_med$whole_app_card35829(meta35830));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35829(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"lista-pacientes-card","lista-pacientes-card",1451339517)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"lista-pacientes-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35834 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35834 = (function (meta35835){
this.meta35835 = meta35835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35836,meta35835__$1){
var self__ = this;
var _35836__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35834(meta35835__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35836){
var self__ = this;
var _35836__$1 = this;
return self__.meta35835;
});

react_med.whole_app_card.t_react_med$whole_app_card35834.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35834.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35837 = cljs.core.deref.call(null,devcard_data);
var map__35837__$1 = (((((!((map__35837 == null))))?(((((map__35837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35837):map__35837);
var hidden_QMARK_ = cljs.core.get.call(null,map__35837__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35837,map__35837__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35837,map__35837__$1,hidden_QMARK_,this__21007__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$expand_more], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$expand_less], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),react_med.shell_components.error_view], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_pacientes.component], null)], null)], null)], null)], null);
});})(this__21007__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__21026__auto__)){
return ((function (v__21026__auto__,this__21007__auto____$1){
return (function (data_atom__21027__auto__,owner__21028__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__21026__auto__,data_atom__21027__auto__,owner__21028__auto__], null));
});
;})(v__21026__auto__,this__21007__auto____$1))
} else {
return reagent.core.as_element.call(null,v__21026__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__21008__auto__))));
});

react_med.whole_app_card.t_react_med$whole_app_card35834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35835","meta35835",-2134990379,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35834.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35834.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35834";

react_med.whole_app_card.t_react_med$whole_app_card35834.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35834");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35834.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35834 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35834(meta35835){
return (new react_med.whole_app_card.t_react_med$whole_app_card35834(meta35835));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35834(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"paciente-relatorio-card","paciente-relatorio-card",998238229)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"paciente-relatorio-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35839 = (function (meta35840){
this.meta35840 = meta35840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35841,meta35840__$1){
var self__ = this;
var _35841__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35839(meta35840__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35841){
var self__ = this;
var _35841__$1 = this;
return self__.meta35840;
});

react_med.whole_app_card.t_react_med$whole_app_card35839.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35839.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35842 = cljs.core.deref.call(null,devcard_data);
var map__35842__$1 = (((((!((map__35842 == null))))?(((((map__35842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35842):map__35842);
var hidden_QMARK_ = cljs.core.get.call(null,map__35842__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35842,map__35842__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35842,map__35842__$1,hidden_QMARK_,this__21007__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$expand_more], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$expand_less], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),react_med.shell_components.error_view], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.relatorio_component], null)], null)], null)], null)], null);
});})(this__21007__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__21026__auto__)){
return ((function (v__21026__auto__,this__21007__auto____$1){
return (function (data_atom__21027__auto__,owner__21028__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__21026__auto__,data_atom__21027__auto__,owner__21028__auto__], null));
});
;})(v__21026__auto__,this__21007__auto____$1))
} else {
return reagent.core.as_element.call(null,v__21026__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__21008__auto__))));
});

react_med.whole_app_card.t_react_med$whole_app_card35839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35840","meta35840",474738350,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35839.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35839.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35839";

react_med.whole_app_card.t_react_med$whole_app_card35839.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35839");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35839.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35839 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35839(meta35840){
return (new react_med.whole_app_card.t_react_med$whole_app_card35839(meta35840));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35839(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"paciente-avaliacao-view-card","paciente-avaliacao-view-card",749006396)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"paciente-avaliacao-view-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35844 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35844 = (function (meta35845){
this.meta35845 = meta35845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35846,meta35845__$1){
var self__ = this;
var _35846__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35844(meta35845__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35846){
var self__ = this;
var _35846__$1 = this;
return self__.meta35845;
});

react_med.whole_app_card.t_react_med$whole_app_card35844.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35844.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35847 = cljs.core.deref.call(null,devcard_data);
var map__35847__$1 = (((((!((map__35847 == null))))?(((((map__35847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35847):map__35847);
var hidden_QMARK_ = cljs.core.get.call(null,map__35847__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35847,map__35847__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35847,map__35847__$1,hidden_QMARK_,this__21007__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$expand_more], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$expand_less], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),react_med.shell_components.error_view], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_avaliacao.details_component], null)], null)], null)], null)], null);
});})(this__21007__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__21026__auto__)){
return ((function (v__21026__auto__,this__21007__auto____$1){
return (function (data_atom__21027__auto__,owner__21028__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__21026__auto__,data_atom__21027__auto__,owner__21028__auto__], null));
});
;})(v__21026__auto__,this__21007__auto____$1))
} else {
return reagent.core.as_element.call(null,v__21026__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__21008__auto__))));
});

react_med.whole_app_card.t_react_med$whole_app_card35844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35845","meta35845",-488638947,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35844.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35844.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35844";

react_med.whole_app_card.t_react_med$whole_app_card35844.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35844");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35844.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35844 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35844(meta35845){
return (new react_med.whole_app_card.t_react_med$whole_app_card35844(meta35845));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35844(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,true)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"editing-paciente-avaliacao-view-card","editing-paciente-avaliacao-view-card",1822126692)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"editing-paciente-avaliacao-view-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35849 = (function (meta35850){
this.meta35850 = meta35850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35851,meta35850__$1){
var self__ = this;
var _35851__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35849(meta35850__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35851){
var self__ = this;
var _35851__$1 = this;
return self__.meta35850;
});

react_med.whole_app_card.t_react_med$whole_app_card35849.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35849.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35852 = cljs.core.deref.call(null,devcard_data);
var map__35852__$1 = (((((!((map__35852 == null))))?(((((map__35852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35852):map__35852);
var hidden_QMARK_ = cljs.core.get.call(null,map__35852__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35852,map__35852__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35852,map__35852__$1,hidden_QMARK_,this__21007__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$expand_more], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$expand_less], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),react_med.shell_components.error_view], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_avaliacao.editing_component], null)], null)], null)], null)], null);
});})(this__21007__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__21026__auto__)){
return ((function (v__21026__auto__,this__21007__auto____$1){
return (function (data_atom__21027__auto__,owner__21028__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__21026__auto__,data_atom__21027__auto__,owner__21028__auto__], null));
});
;})(v__21026__auto__,this__21007__auto____$1))
} else {
return reagent.core.as_element.call(null,v__21026__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__21008__auto__))));
});

react_med.whole_app_card.t_react_med$whole_app_card35849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35850","meta35850",1639756641,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35849.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35849.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35849";

react_med.whole_app_card.t_react_med$whole_app_card35849.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35849");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35849.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35849 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35849(meta35850){
return (new react_med.whole_app_card.t_react_med$whole_app_card35849(meta35850));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35849(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,true)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"patient-info-card","patient-info-card",525747125)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"patient-info-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35854 = (function (meta35855){
this.meta35855 = meta35855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35856,meta35855__$1){
var self__ = this;
var _35856__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35854(meta35855__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35856){
var self__ = this;
var _35856__$1 = this;
return self__.meta35855;
});

react_med.whole_app_card.t_react_med$whole_app_card35854.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35854.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35857 = cljs.core.deref.call(null,devcard_data);
var map__35857__$1 = (((((!((map__35857 == null))))?(((((map__35857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35857):map__35857);
var hidden_QMARK_ = cljs.core.get.call(null,map__35857__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35857,map__35857__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35857,map__35857__$1,hidden_QMARK_,this__21007__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$expand_more], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$expand_less], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),react_med.shell_components.error_view], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_info_component], null)], null)], null)], null)], null);
});})(this__21007__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__21026__auto__)){
return ((function (v__21026__auto__,this__21007__auto____$1){
return (function (data_atom__21027__auto__,owner__21028__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__21026__auto__,data_atom__21027__auto__,owner__21028__auto__], null));
});
;})(v__21026__auto__,this__21007__auto____$1))
} else {
return reagent.core.as_element.call(null,v__21026__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__21008__auto__))));
});

react_med.whole_app_card.t_react_med$whole_app_card35854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35855","meta35855",642296656,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35854.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35854.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35854";

react_med.whole_app_card.t_react_med$whole_app_card35854.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35854");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35854.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35854 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35854(meta35855){
return (new react_med.whole_app_card.t_react_med$whole_app_card35854(meta35855));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35854(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,true)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"editing-patient-info-card","editing-patient-info-card",-528044406)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"editing-patient-info-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35859 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35859 = (function (meta35860){
this.meta35860 = meta35860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35861,meta35860__$1){
var self__ = this;
var _35861__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35859(meta35860__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35861){
var self__ = this;
var _35861__$1 = this;
return self__.meta35860;
});

react_med.whole_app_card.t_react_med$whole_app_card35859.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35859.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35862 = cljs.core.deref.call(null,devcard_data);
var map__35862__$1 = (((((!((map__35862 == null))))?(((((map__35862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35862):map__35862);
var hidden_QMARK_ = cljs.core.get.call(null,map__35862__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35862,map__35862__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35862,map__35862__$1,hidden_QMARK_,this__21007__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$expand_more], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$expand_less], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),react_med.shell_components.error_view], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.editing_patient_info_component], null)], null)], null)], null)], null);
});})(this__21007__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__21026__auto__)){
return ((function (v__21026__auto__,this__21007__auto____$1){
return (function (data_atom__21027__auto__,owner__21028__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__21026__auto__,data_atom__21027__auto__,owner__21028__auto__], null));
});
;})(v__21026__auto__,this__21007__auto____$1))
} else {
return reagent.core.as_element.call(null,v__21026__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__21008__auto__))));
});

react_med.whole_app_card.t_react_med$whole_app_card35859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35860","meta35860",791113844,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35859.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35859.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35859";

react_med.whole_app_card.t_react_med$whole_app_card35859.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35859");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35859.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35859 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35859(meta35860){
return (new react_med.whole_app_card.t_react_med$whole_app_card35859(meta35860));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35859(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,true)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=whole_app_card.js.map
