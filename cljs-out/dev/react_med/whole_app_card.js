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
}catch (e35298){var e = e35298;
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
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35299 = (function (meta35300){
this.meta35300 = meta35300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35301,meta35300__$1){
var self__ = this;
var _35301__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35299(meta35300__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35301){
var self__ = this;
var _35301__$1 = this;
return self__.meta35300;
});

react_med.whole_app_card.t_react_med$whole_app_card35299.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35299.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = (function (){var card_container_style = ({"display": "flex", "justifyContent": "space-evenly", "padding": "20px 0"});
return ((function (card_container_style,this__21007__auto____$1){
return (function (devcard_data,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),card_container_style], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"hide-all",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (card_container_style,this__21007__auto____$1){
return (function (){
var seq__35302 = cljs.core.seq.call(null,cljs.core.deref.call(null,react_med.whole_app_card.devcards_hidden));
var chunk__35303 = null;
var count__35304 = (0);
var i__35305 = (0);
while(true){
if((i__35305 < count__35304)){
var hidden_atom = cljs.core._nth.call(null,chunk__35303,i__35305);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__35310 = seq__35302;
var G__35311 = chunk__35303;
var G__35312 = count__35304;
var G__35313 = (i__35305 + (1));
seq__35302 = G__35310;
chunk__35303 = G__35311;
count__35304 = G__35312;
i__35305 = G__35313;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35302);
if(temp__5735__auto__){
var seq__35302__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35302__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35302__$1);
var G__35314 = cljs.core.chunk_rest.call(null,seq__35302__$1);
var G__35315 = c__4550__auto__;
var G__35316 = cljs.core.count.call(null,c__4550__auto__);
var G__35317 = (0);
seq__35302 = G__35314;
chunk__35303 = G__35315;
count__35304 = G__35316;
i__35305 = G__35317;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__35302__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__35318 = cljs.core.next.call(null,seq__35302__$1);
var G__35319 = null;
var G__35320 = (0);
var G__35321 = (0);
seq__35302 = G__35318;
chunk__35303 = G__35319;
count__35304 = G__35320;
i__35305 = G__35321;
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
var seq__35306 = cljs.core.seq.call(null,cljs.core.deref.call(null,react_med.whole_app_card.devcards_hidden));
var chunk__35307 = null;
var count__35308 = (0);
var i__35309 = (0);
while(true){
if((i__35309 < count__35308)){
var hidden_atom = cljs.core._nth.call(null,chunk__35307,i__35309);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__35322 = seq__35306;
var G__35323 = chunk__35307;
var G__35324 = count__35308;
var G__35325 = (i__35309 + (1));
seq__35306 = G__35322;
chunk__35307 = G__35323;
count__35308 = G__35324;
i__35309 = G__35325;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35306);
if(temp__5735__auto__){
var seq__35306__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35306__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35306__$1);
var G__35326 = cljs.core.chunk_rest.call(null,seq__35306__$1);
var G__35327 = c__4550__auto__;
var G__35328 = cljs.core.count.call(null,c__4550__auto__);
var G__35329 = (0);
seq__35306 = G__35326;
chunk__35307 = G__35327;
count__35308 = G__35328;
i__35309 = G__35329;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__35306__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__35330 = cljs.core.next.call(null,seq__35306__$1);
var G__35331 = null;
var G__35332 = (0);
var G__35333 = (0);
seq__35306 = G__35330;
chunk__35307 = G__35331;
count__35308 = G__35332;
i__35309 = G__35333;
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

react_med.whole_app_card.t_react_med$whole_app_card35299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35300","meta35300",1688392038,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35299.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35299.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35299";

react_med.whole_app_card.t_react_med$whole_app_card35299.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35299");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35299.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35299 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35299(meta35300){
return (new react_med.whole_app_card.t_react_med$whole_app_card35299(meta35300));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35299(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"mobile-view","mobile-view",-1958626148)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"mobile-view",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35334 = (function (meta35335){
this.meta35335 = meta35335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35336,meta35335__$1){
var self__ = this;
var _35336__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35334(meta35335__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35336){
var self__ = this;
var _35336__$1 = this;
return self__.meta35335;
});

react_med.whole_app_card.t_react_med$whole_app_card35334.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35334.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35337 = cljs.core.deref.call(null,devcard_data);
var map__35337__$1 = (((((!((map__35337 == null))))?(((((map__35337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35337):map__35337);
var hidden_QMARK_ = cljs.core.get.call(null,map__35337__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35337,map__35337__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35337,map__35337__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.whole_app_card.t_react_med$whole_app_card35334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35335","meta35335",-894003309,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35334.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35334.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35334";

react_med.whole_app_card.t_react_med$whole_app_card35334.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35334");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35334.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35334 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35334(meta35335){
return (new react_med.whole_app_card.t_react_med$whole_app_card35334(meta35335));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35334(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"desktop-view","desktop-view",1259160665)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"desktop-view",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35339 = (function (meta35340){
this.meta35340 = meta35340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35341,meta35340__$1){
var self__ = this;
var _35341__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35339(meta35340__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35341){
var self__ = this;
var _35341__$1 = this;
return self__.meta35340;
});

react_med.whole_app_card.t_react_med$whole_app_card35339.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35339.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35342 = cljs.core.deref.call(null,devcard_data);
var map__35342__$1 = (((((!((map__35342 == null))))?(((((map__35342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35342):map__35342);
var hidden_QMARK_ = cljs.core.get.call(null,map__35342__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "justifyContent": "space-evenly", "padding": "15px 0"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog",new cljs.core.Keyword(null,"style","style",-496642736),({"width": "90vw"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"style","style",-496642736),({"color": "#666"})], null),"desktop-view"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35342,map__35342__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35342,map__35342__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.whole_app_card.t_react_med$whole_app_card35339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35340","meta35340",-1664040377,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35339.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35339.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35339";

react_med.whole_app_card.t_react_med$whole_app_card35339.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35339");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35339.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35339 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35339(meta35340){
return (new react_med.whole_app_card.t_react_med$whole_app_card35339(meta35340));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35339(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"lista-pacientes-card","lista-pacientes-card",1451339517)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"lista-pacientes-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35344 = (function (meta35345){
this.meta35345 = meta35345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35346,meta35345__$1){
var self__ = this;
var _35346__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35344(meta35345__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35346){
var self__ = this;
var _35346__$1 = this;
return self__.meta35345;
});

react_med.whole_app_card.t_react_med$whole_app_card35344.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35344.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35347 = cljs.core.deref.call(null,devcard_data);
var map__35347__$1 = (((((!((map__35347 == null))))?(((((map__35347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35347):map__35347);
var hidden_QMARK_ = cljs.core.get.call(null,map__35347__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35347,map__35347__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35347,map__35347__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.whole_app_card.t_react_med$whole_app_card35344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35345","meta35345",-1631841405,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35344.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35344.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35344";

react_med.whole_app_card.t_react_med$whole_app_card35344.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35344");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35344.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35344 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35344(meta35345){
return (new react_med.whole_app_card.t_react_med$whole_app_card35344(meta35345));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35344(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"paciente-relatorio-card","paciente-relatorio-card",998238229)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"paciente-relatorio-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35349 = (function (meta35350){
this.meta35350 = meta35350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35351,meta35350__$1){
var self__ = this;
var _35351__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35349(meta35350__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35351){
var self__ = this;
var _35351__$1 = this;
return self__.meta35350;
});

react_med.whole_app_card.t_react_med$whole_app_card35349.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35349.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35352 = cljs.core.deref.call(null,devcard_data);
var map__35352__$1 = (((((!((map__35352 == null))))?(((((map__35352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35352):map__35352);
var hidden_QMARK_ = cljs.core.get.call(null,map__35352__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35352,map__35352__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35352,map__35352__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.whole_app_card.t_react_med$whole_app_card35349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35350","meta35350",1784095861,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35349.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35349.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35349";

react_med.whole_app_card.t_react_med$whole_app_card35349.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35349");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35349.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35349 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35349(meta35350){
return (new react_med.whole_app_card.t_react_med$whole_app_card35349(meta35350));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35349(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"paciente-avaliacao-view-card","paciente-avaliacao-view-card",749006396)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"paciente-avaliacao-view-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35354 = (function (meta35355){
this.meta35355 = meta35355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35356,meta35355__$1){
var self__ = this;
var _35356__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35354(meta35355__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35356){
var self__ = this;
var _35356__$1 = this;
return self__.meta35355;
});

react_med.whole_app_card.t_react_med$whole_app_card35354.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35354.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35357 = cljs.core.deref.call(null,devcard_data);
var map__35357__$1 = (((((!((map__35357 == null))))?(((((map__35357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35357):map__35357);
var hidden_QMARK_ = cljs.core.get.call(null,map__35357__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35357,map__35357__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35357,map__35357__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.whole_app_card.t_react_med$whole_app_card35354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35355","meta35355",956734270,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35354.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35354.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35354";

react_med.whole_app_card.t_react_med$whole_app_card35354.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35354");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35354.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35354 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35354(meta35355){
return (new react_med.whole_app_card.t_react_med$whole_app_card35354(meta35355));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35354(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,true)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"editing-paciente-avaliacao-view-card","editing-paciente-avaliacao-view-card",1822126692)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"editing-paciente-avaliacao-view-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35359 = (function (meta35360){
this.meta35360 = meta35360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35361,meta35360__$1){
var self__ = this;
var _35361__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35359(meta35360__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35361){
var self__ = this;
var _35361__$1 = this;
return self__.meta35360;
});

react_med.whole_app_card.t_react_med$whole_app_card35359.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35359.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35362 = cljs.core.deref.call(null,devcard_data);
var map__35362__$1 = (((((!((map__35362 == null))))?(((((map__35362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35362):map__35362);
var hidden_QMARK_ = cljs.core.get.call(null,map__35362__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35362,map__35362__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35362,map__35362__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.whole_app_card.t_react_med$whole_app_card35359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35360","meta35360",-1916271834,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35359.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35359.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35359";

react_med.whole_app_card.t_react_med$whole_app_card35359.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35359");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35359.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35359 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35359(meta35360){
return (new react_med.whole_app_card.t_react_med$whole_app_card35359(meta35360));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35359(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,true)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"patient-info-card","patient-info-card",525747125)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"patient-info-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35364 = (function (meta35365){
this.meta35365 = meta35365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35366,meta35365__$1){
var self__ = this;
var _35366__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35364(meta35365__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35366){
var self__ = this;
var _35366__$1 = this;
return self__.meta35365;
});

react_med.whole_app_card.t_react_med$whole_app_card35364.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35364.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35367 = cljs.core.deref.call(null,devcard_data);
var map__35367__$1 = (((((!((map__35367 == null))))?(((((map__35367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35367):map__35367);
var hidden_QMARK_ = cljs.core.get.call(null,map__35367__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35367,map__35367__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35367,map__35367__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.whole_app_card.t_react_med$whole_app_card35364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35365","meta35365",2090337177,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35364.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35364.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35364";

react_med.whole_app_card.t_react_med$whole_app_card35364.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35364");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35364.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35364 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35364(meta35365){
return (new react_med.whole_app_card.t_react_med$whole_app_card35364(meta35365));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35364(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,true)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"editing-patient-info-card","editing-patient-info-card",-528044406)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"editing-patient-info-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card35369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card35369 = (function (meta35370){
this.meta35370 = meta35370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card35369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35371,meta35370__$1){
var self__ = this;
var _35371__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card35369(meta35370__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card35369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35371){
var self__ = this;
var _35371__$1 = this;
return self__.meta35370;
});

react_med.whole_app_card.t_react_med$whole_app_card35369.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card35369.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35372 = cljs.core.deref.call(null,devcard_data);
var map__35372__$1 = (((((!((map__35372 == null))))?(((((map__35372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35372):map__35372);
var hidden_QMARK_ = cljs.core.get.call(null,map__35372__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35372,map__35372__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35372,map__35372__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.whole_app_card.t_react_med$whole_app_card35369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35370","meta35370",-1077361373,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card35369.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card35369.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card35369";

react_med.whole_app_card.t_react_med$whole_app_card35369.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card35369");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card35369.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card35369 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card35369(meta35370){
return (new react_med.whole_app_card.t_react_med$whole_app_card35369(meta35370));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card35369(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,true)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=whole_app_card.js.map
