// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.patient_info.card');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('reagent.core');
goog.require('button');
goog.require('react_med.screens.patient_info.core');
goog.require('expand_more');
goog.require('expand_less');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('react_med.shell_components');
react_med.screens.patient_info.card.global$module$button = goog.global["Button"];
react_med.screens.patient_info.card.global$module$expand_more = goog.global["ExpandMore"];
react_med.screens.patient_info.card.global$module$expand_less = goog.global["ExpandLess"];
if((typeof react_med !== 'undefined') && (typeof react_med.screens !== 'undefined') && (typeof react_med.screens.patient_info !== 'undefined') && (typeof react_med.screens.patient_info.card !== 'undefined') && (typeof react_med.screens.patient_info.card.devcards_hidden !== 'undefined')){
} else {
react_med.screens.patient_info.card.devcards_hidden = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.screens.patient_info.card","react_med.screens.patient_info.card",-722609824),new cljs.core.Keyword(null,"hidding-cards","hidding-cards",-932317179)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"hidding-cards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.screens !== 'undefined') && (typeof react_med.screens.patient_info !== 'undefined') && (typeof react_med.screens.patient_info.card !== 'undefined') && (typeof react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35251 = (function (meta35252){
this.meta35252 = meta35252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35253,meta35252__$1){
var self__ = this;
var _35253__$1 = this;
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35251(meta35252__$1));
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35253){
var self__ = this;
var _35253__$1 = this;
return self__.meta35252;
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35251.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35251.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = (function (){var card_container_style = ({"display": "flex", "justifyContent": "space-evenly", "padding": "20px 0"});
return ((function (card_container_style,this__21007__auto____$1){
return (function (devcard_data,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),card_container_style], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.patient_info.card.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"hide-all",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (card_container_style,this__21007__auto____$1){
return (function (){
var seq__35254 = cljs.core.seq.call(null,cljs.core.deref.call(null,react_med.screens.patient_info.card.devcards_hidden));
var chunk__35255 = null;
var count__35256 = (0);
var i__35257 = (0);
while(true){
if((i__35257 < count__35256)){
var hidden_atom = cljs.core._nth.call(null,chunk__35255,i__35257);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__35262 = seq__35254;
var G__35263 = chunk__35255;
var G__35264 = count__35256;
var G__35265 = (i__35257 + (1));
seq__35254 = G__35262;
chunk__35255 = G__35263;
count__35256 = G__35264;
i__35257 = G__35265;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35254);
if(temp__5735__auto__){
var seq__35254__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35254__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35254__$1);
var G__35266 = cljs.core.chunk_rest.call(null,seq__35254__$1);
var G__35267 = c__4550__auto__;
var G__35268 = cljs.core.count.call(null,c__4550__auto__);
var G__35269 = (0);
seq__35254 = G__35266;
chunk__35255 = G__35267;
count__35256 = G__35268;
i__35257 = G__35269;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__35254__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__35270 = cljs.core.next.call(null,seq__35254__$1);
var G__35271 = null;
var G__35272 = (0);
var G__35273 = (0);
seq__35254 = G__35270;
chunk__35255 = G__35271;
count__35256 = G__35272;
i__35257 = G__35273;
continue;
}
} else {
return null;
}
}
break;
}
});})(card_container_style,this__21007__auto____$1))
], null),"hide all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.patient_info.card.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"show-all",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (card_container_style,this__21007__auto____$1){
return (function (){
var seq__35258 = cljs.core.seq.call(null,cljs.core.deref.call(null,react_med.screens.patient_info.card.devcards_hidden));
var chunk__35259 = null;
var count__35260 = (0);
var i__35261 = (0);
while(true){
if((i__35261 < count__35260)){
var hidden_atom = cljs.core._nth.call(null,chunk__35259,i__35261);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__35274 = seq__35258;
var G__35275 = chunk__35259;
var G__35276 = count__35260;
var G__35277 = (i__35261 + (1));
seq__35258 = G__35274;
chunk__35259 = G__35275;
count__35260 = G__35276;
i__35261 = G__35277;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35258);
if(temp__5735__auto__){
var seq__35258__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35258__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35258__$1);
var G__35278 = cljs.core.chunk_rest.call(null,seq__35258__$1);
var G__35279 = c__4550__auto__;
var G__35280 = cljs.core.count.call(null,c__4550__auto__);
var G__35281 = (0);
seq__35258 = G__35278;
chunk__35259 = G__35279;
count__35260 = G__35280;
i__35261 = G__35281;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__35258__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__35282 = cljs.core.next.call(null,seq__35258__$1);
var G__35283 = null;
var G__35284 = (0);
var G__35285 = (0);
seq__35258 = G__35282;
chunk__35259 = G__35283;
count__35260 = G__35284;
i__35261 = G__35285;
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

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35252","meta35252",1682826009,null)], null);
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35251.cljs$lang$type = true;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35251.cljs$lang$ctorStr = "react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35251";

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35251.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35251");
});

/**
 * Positional factory function for react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35251.
 */
react_med.screens.patient_info.card.__GT_t_react_med$screens$patient_info$card35251 = (function react_med$screens$patient_info$card$__GT_t_react_med$screens$patient_info$card35251(meta35252){
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35251(meta35252));
});

}

return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35251(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.screens.patient_info.card","react_med.screens.patient_info.card",-722609824),new cljs.core.Keyword(null,"patient-info-component","patient-info-component",81488317)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"patient-info-component",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.screens !== 'undefined') && (typeof react_med.screens.patient_info !== 'undefined') && (typeof react_med.screens.patient_info.card !== 'undefined') && (typeof react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35286 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35286 = (function (meta35287){
this.meta35287 = meta35287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35288,meta35287__$1){
var self__ = this;
var _35288__$1 = this;
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35286(meta35287__$1));
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35288){
var self__ = this;
var _35288__$1 = this;
return self__.meta35287;
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35286.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35286.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35289 = cljs.core.deref.call(null,devcard_data);
var map__35289__$1 = (((((!((map__35289 == null))))?(((((map__35289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35289):map__35289);
var hidden_QMARK_ = cljs.core.get.call(null,map__35289__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.screens.patient_info.card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35289,map__35289__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35289,map__35289__$1,hidden_QMARK_,this__21007__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.patient_info.card.global$module$expand_more], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.patient_info.card.global$module$expand_less], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),react_med.shell_components.error_view], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_info_component], null)], null)], null)], null)], null);
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

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35287","meta35287",666144647,null)], null);
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35286.cljs$lang$type = true;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35286.cljs$lang$ctorStr = "react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35286";

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35286.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35286");
});

/**
 * Positional factory function for react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35286.
 */
react_med.screens.patient_info.card.__GT_t_react_med$screens$patient_info$card35286 = (function react_med$screens$patient_info$card$__GT_t_react_med$screens$patient_info$card35286(meta35287){
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35286(meta35287));
});

}

return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35286(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.screens.patient_info.card","react_med.screens.patient_info.card",-722609824),new cljs.core.Keyword(null,"editing-patient-info-component","editing-patient-info-component",816516127)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"editing-patient-info-component",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.screens !== 'undefined') && (typeof react_med.screens.patient_info !== 'undefined') && (typeof react_med.screens.patient_info.card !== 'undefined') && (typeof react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35291 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35291 = (function (meta35292){
this.meta35292 = meta35292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35293,meta35292__$1){
var self__ = this;
var _35293__$1 = this;
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35291(meta35292__$1));
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35293){
var self__ = this;
var _35293__$1 = this;
return self__.meta35292;
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35291.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35291.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35294 = cljs.core.deref.call(null,devcard_data);
var map__35294__$1 = (((((!((map__35294 == null))))?(((((map__35294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35294):map__35294);
var hidden_QMARK_ = cljs.core.get.call(null,map__35294__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.screens.patient_info.card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35294,map__35294__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35294,map__35294__$1,hidden_QMARK_,this__21007__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.patient_info.card.global$module$expand_more], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.patient_info.card.global$module$expand_less], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),react_med.shell_components.error_view], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.editing_patient_info_component], null)], null)], null)], null)], null);
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

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35292","meta35292",1070282968,null)], null);
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35291.cljs$lang$type = true;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35291.cljs$lang$ctorStr = "react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35291";

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35291.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35291");
});

/**
 * Positional factory function for react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35291.
 */
react_med.screens.patient_info.card.__GT_t_react_med$screens$patient_info$card35291 = (function react_med$screens$patient_info$card$__GT_t_react_med$screens$patient_info$card35291(meta35292){
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35291(meta35292));
});

}

return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35291(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=card.js.map
