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
}catch (e36284){var e = e36284;
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
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card36285 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card36285 = (function (meta36286){
this.meta36286 = meta36286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card36285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36287,meta36286__$1){
var self__ = this;
var _36287__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card36285(meta36286__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card36285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36287){
var self__ = this;
var _36287__$1 = this;
return self__.meta36286;
});

react_med.whole_app_card.t_react_med$whole_app_card36285.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card36285.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = (function (){var card_container_style = ({"display": "flex", "justifyContent": "space-evenly", "padding": "20px 0"});
return ((function (card_container_style,this__21007__auto____$1){
return (function (devcard_data,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),card_container_style], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.whole_app_card.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"hide-all",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (card_container_style,this__21007__auto____$1){
return (function (){
var seq__36288 = cljs.core.seq.call(null,cljs.core.deref.call(null,react_med.whole_app_card.devcards_hidden));
var chunk__36289 = null;
var count__36290 = (0);
var i__36291 = (0);
while(true){
if((i__36291 < count__36290)){
var hidden_atom = cljs.core._nth.call(null,chunk__36289,i__36291);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__36296 = seq__36288;
var G__36297 = chunk__36289;
var G__36298 = count__36290;
var G__36299 = (i__36291 + (1));
seq__36288 = G__36296;
chunk__36289 = G__36297;
count__36290 = G__36298;
i__36291 = G__36299;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__36288);
if(temp__5735__auto__){
var seq__36288__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36288__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__36288__$1);
var G__36300 = cljs.core.chunk_rest.call(null,seq__36288__$1);
var G__36301 = c__4550__auto__;
var G__36302 = cljs.core.count.call(null,c__4550__auto__);
var G__36303 = (0);
seq__36288 = G__36300;
chunk__36289 = G__36301;
count__36290 = G__36302;
i__36291 = G__36303;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__36288__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__36304 = cljs.core.next.call(null,seq__36288__$1);
var G__36305 = null;
var G__36306 = (0);
var G__36307 = (0);
seq__36288 = G__36304;
chunk__36289 = G__36305;
count__36290 = G__36306;
i__36291 = G__36307;
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
var seq__36292 = cljs.core.seq.call(null,cljs.core.deref.call(null,react_med.whole_app_card.devcards_hidden));
var chunk__36293 = null;
var count__36294 = (0);
var i__36295 = (0);
while(true){
if((i__36295 < count__36294)){
var hidden_atom = cljs.core._nth.call(null,chunk__36293,i__36295);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__36308 = seq__36292;
var G__36309 = chunk__36293;
var G__36310 = count__36294;
var G__36311 = (i__36295 + (1));
seq__36292 = G__36308;
chunk__36293 = G__36309;
count__36294 = G__36310;
i__36295 = G__36311;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__36292);
if(temp__5735__auto__){
var seq__36292__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36292__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__36292__$1);
var G__36312 = cljs.core.chunk_rest.call(null,seq__36292__$1);
var G__36313 = c__4550__auto__;
var G__36314 = cljs.core.count.call(null,c__4550__auto__);
var G__36315 = (0);
seq__36292 = G__36312;
chunk__36293 = G__36313;
count__36294 = G__36314;
i__36295 = G__36315;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__36292__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__36316 = cljs.core.next.call(null,seq__36292__$1);
var G__36317 = null;
var G__36318 = (0);
var G__36319 = (0);
seq__36292 = G__36316;
chunk__36293 = G__36317;
count__36294 = G__36318;
i__36295 = G__36319;
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

react_med.whole_app_card.t_react_med$whole_app_card36285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36286","meta36286",345273433,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card36285.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card36285.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card36285";

react_med.whole_app_card.t_react_med$whole_app_card36285.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card36285");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card36285.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card36285 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card36285(meta36286){
return (new react_med.whole_app_card.t_react_med$whole_app_card36285(meta36286));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card36285(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"mobile-view","mobile-view",-1958626148)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"mobile-view",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card36320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card36320 = (function (meta36321){
this.meta36321 = meta36321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card36320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36322,meta36321__$1){
var self__ = this;
var _36322__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card36320(meta36321__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card36320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36322){
var self__ = this;
var _36322__$1 = this;
return self__.meta36321;
});

react_med.whole_app_card.t_react_med$whole_app_card36320.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card36320.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__36323 = cljs.core.deref.call(null,devcard_data);
var map__36323__$1 = (((((!((map__36323 == null))))?(((((map__36323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36323):map__36323);
var hidden_QMARK_ = cljs.core.get.call(null,map__36323__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__36323,map__36323__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__36323,map__36323__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.whole_app_card.t_react_med$whole_app_card36320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36321","meta36321",931301641,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card36320.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card36320.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card36320";

react_med.whole_app_card.t_react_med$whole_app_card36320.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card36320");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card36320.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card36320 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card36320(meta36321){
return (new react_med.whole_app_card.t_react_med$whole_app_card36320(meta36321));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card36320(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"desktop-view","desktop-view",1259160665)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"desktop-view",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card36325 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card36325 = (function (meta36326){
this.meta36326 = meta36326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card36325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36327,meta36326__$1){
var self__ = this;
var _36327__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card36325(meta36326__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card36325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36327){
var self__ = this;
var _36327__$1 = this;
return self__.meta36326;
});

react_med.whole_app_card.t_react_med$whole_app_card36325.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card36325.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__36328 = cljs.core.deref.call(null,devcard_data);
var map__36328__$1 = (((((!((map__36328 == null))))?(((((map__36328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36328):map__36328);
var hidden_QMARK_ = cljs.core.get.call(null,map__36328__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "justifyContent": "space-evenly", "padding": "15px 0"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog",new cljs.core.Keyword(null,"style","style",-496642736),({"width": "90vw"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"style","style",-496642736),({"color": "#666"})], null),"desktop-view"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__36328,map__36328__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__36328,map__36328__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.whole_app_card.t_react_med$whole_app_card36325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36326","meta36326",7741424,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card36325.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card36325.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card36325";

react_med.whole_app_card.t_react_med$whole_app_card36325.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card36325");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card36325.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card36325 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card36325(meta36326){
return (new react_med.whole_app_card.t_react_med$whole_app_card36325(meta36326));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card36325(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"lista-pacientes-card","lista-pacientes-card",1451339517)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"lista-pacientes-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card36330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card36330 = (function (meta36331){
this.meta36331 = meta36331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card36330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36332,meta36331__$1){
var self__ = this;
var _36332__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card36330(meta36331__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card36330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36332){
var self__ = this;
var _36332__$1 = this;
return self__.meta36331;
});

react_med.whole_app_card.t_react_med$whole_app_card36330.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card36330.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__36333 = cljs.core.deref.call(null,devcard_data);
var map__36333__$1 = (((((!((map__36333 == null))))?(((((map__36333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36333):map__36333);
var hidden_QMARK_ = cljs.core.get.call(null,map__36333__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__36333,map__36333__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__36333,map__36333__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.whole_app_card.t_react_med$whole_app_card36330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36331","meta36331",758452791,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card36330.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card36330.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card36330";

react_med.whole_app_card.t_react_med$whole_app_card36330.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card36330");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card36330.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card36330 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card36330(meta36331){
return (new react_med.whole_app_card.t_react_med$whole_app_card36330(meta36331));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card36330(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"paciente-relatorio-card","paciente-relatorio-card",998238229)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"paciente-relatorio-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card36335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card36335 = (function (meta36336){
this.meta36336 = meta36336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card36335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36337,meta36336__$1){
var self__ = this;
var _36337__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card36335(meta36336__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card36335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36337){
var self__ = this;
var _36337__$1 = this;
return self__.meta36336;
});

react_med.whole_app_card.t_react_med$whole_app_card36335.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card36335.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__36338 = cljs.core.deref.call(null,devcard_data);
var map__36338__$1 = (((((!((map__36338 == null))))?(((((map__36338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36338):map__36338);
var hidden_QMARK_ = cljs.core.get.call(null,map__36338__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__36338,map__36338__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__36338,map__36338__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.whole_app_card.t_react_med$whole_app_card36335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36336","meta36336",-525227016,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card36335.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card36335.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card36335";

react_med.whole_app_card.t_react_med$whole_app_card36335.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card36335");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card36335.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card36335 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card36335(meta36336){
return (new react_med.whole_app_card.t_react_med$whole_app_card36335(meta36336));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card36335(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"paciente-avaliacao-view-card","paciente-avaliacao-view-card",749006396)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"paciente-avaliacao-view-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card36340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card36340 = (function (meta36341){
this.meta36341 = meta36341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card36340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36342,meta36341__$1){
var self__ = this;
var _36342__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card36340(meta36341__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card36340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36342){
var self__ = this;
var _36342__$1 = this;
return self__.meta36341;
});

react_med.whole_app_card.t_react_med$whole_app_card36340.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card36340.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__36343 = cljs.core.deref.call(null,devcard_data);
var map__36343__$1 = (((((!((map__36343 == null))))?(((((map__36343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36343):map__36343);
var hidden_QMARK_ = cljs.core.get.call(null,map__36343__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__36343,map__36343__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__36343,map__36343__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.whole_app_card.t_react_med$whole_app_card36340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36341","meta36341",-1745304593,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card36340.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card36340.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card36340";

react_med.whole_app_card.t_react_med$whole_app_card36340.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card36340");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card36340.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card36340 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card36340(meta36341){
return (new react_med.whole_app_card.t_react_med$whole_app_card36340(meta36341));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card36340(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,true)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"editing-paciente-avaliacao-view-card","editing-paciente-avaliacao-view-card",1822126692)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"editing-paciente-avaliacao-view-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card36345 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card36345 = (function (meta36346){
this.meta36346 = meta36346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card36345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36347,meta36346__$1){
var self__ = this;
var _36347__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card36345(meta36346__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card36345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36347){
var self__ = this;
var _36347__$1 = this;
return self__.meta36346;
});

react_med.whole_app_card.t_react_med$whole_app_card36345.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card36345.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__36348 = cljs.core.deref.call(null,devcard_data);
var map__36348__$1 = (((((!((map__36348 == null))))?(((((map__36348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36348):map__36348);
var hidden_QMARK_ = cljs.core.get.call(null,map__36348__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__36348,map__36348__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__36348,map__36348__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.whole_app_card.t_react_med$whole_app_card36345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36346","meta36346",-1865686014,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card36345.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card36345.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card36345";

react_med.whole_app_card.t_react_med$whole_app_card36345.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card36345");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card36345.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card36345 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card36345(meta36346){
return (new react_med.whole_app_card.t_react_med$whole_app_card36345(meta36346));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card36345(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,true)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"patient-info-card","patient-info-card",525747125)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"patient-info-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card36350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card36350 = (function (meta36351){
this.meta36351 = meta36351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card36350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36352,meta36351__$1){
var self__ = this;
var _36352__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card36350(meta36351__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card36350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36352){
var self__ = this;
var _36352__$1 = this;
return self__.meta36351;
});

react_med.whole_app_card.t_react_med$whole_app_card36350.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card36350.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__36353 = cljs.core.deref.call(null,devcard_data);
var map__36353__$1 = (((((!((map__36353 == null))))?(((((map__36353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36353):map__36353);
var hidden_QMARK_ = cljs.core.get.call(null,map__36353__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__36353,map__36353__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__36353,map__36353__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.whole_app_card.t_react_med$whole_app_card36350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36351","meta36351",-30894265,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card36350.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card36350.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card36350";

react_med.whole_app_card.t_react_med$whole_app_card36350.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card36350");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card36350.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card36350 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card36350(meta36351){
return (new react_med.whole_app_card.t_react_med$whole_app_card36350(meta36351));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card36350(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,true)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.whole_app_card","react_med.whole_app_card",1644081521),new cljs.core.Keyword(null,"editing-patient-info-card","editing-patient-info-card",-528044406)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"editing-patient-info-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.whole_app_card !== 'undefined') && (typeof react_med.whole_app_card.t_react_med$whole_app_card36355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.whole_app_card.t_react_med$whole_app_card36355 = (function (meta36356){
this.meta36356 = meta36356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.whole_app_card.t_react_med$whole_app_card36355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36357,meta36356__$1){
var self__ = this;
var _36357__$1 = this;
return (new react_med.whole_app_card.t_react_med$whole_app_card36355(meta36356__$1));
});

react_med.whole_app_card.t_react_med$whole_app_card36355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36357){
var self__ = this;
var _36357__$1 = this;
return self__.meta36356;
});

react_med.whole_app_card.t_react_med$whole_app_card36355.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.whole_app_card.t_react_med$whole_app_card36355.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__36358 = cljs.core.deref.call(null,devcard_data);
var map__36358__$1 = (((((!((map__36358 == null))))?(((((map__36358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36358):map__36358);
var hidden_QMARK_ = cljs.core.get.call(null,map__36358__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.whole_app_card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__36358,map__36358__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__36358,map__36358__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.whole_app_card.t_react_med$whole_app_card36355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36356","meta36356",869544725,null)], null);
});

react_med.whole_app_card.t_react_med$whole_app_card36355.cljs$lang$type = true;

react_med.whole_app_card.t_react_med$whole_app_card36355.cljs$lang$ctorStr = "react-med.whole-app-card/t_react_med$whole_app_card36355";

react_med.whole_app_card.t_react_med$whole_app_card36355.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.whole-app-card/t_react_med$whole_app_card36355");
});

/**
 * Positional factory function for react-med.whole-app-card/t_react_med$whole_app_card36355.
 */
react_med.whole_app_card.__GT_t_react_med$whole_app_card36355 = (function react_med$whole_app_card$__GT_t_react_med$whole_app_card36355(meta36356){
return (new react_med.whole_app_card.t_react_med$whole_app_card36355(meta36356));
});

}

return (new react_med.whole_app_card.t_react_med$whole_app_card36355(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,true)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=whole_app_card.js.map
