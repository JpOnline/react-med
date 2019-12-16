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
if((typeof react_med !== 'undefined') && (typeof react_med.screens !== 'undefined') && (typeof react_med.screens.patient_info !== 'undefined') && (typeof react_med.screens.patient_info.card !== 'undefined') && (typeof react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36237 = (function (meta36238){
this.meta36238 = meta36238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36239,meta36238__$1){
var self__ = this;
var _36239__$1 = this;
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36237(meta36238__$1));
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36239){
var self__ = this;
var _36239__$1 = this;
return self__.meta36238;
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36237.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36237.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = (function (){var card_container_style = ({"display": "flex", "justifyContent": "space-evenly", "padding": "20px 0"});
return ((function (card_container_style,this__21007__auto____$1){
return (function (devcard_data,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),card_container_style], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.patient_info.card.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"hide-all",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (card_container_style,this__21007__auto____$1){
return (function (){
var seq__36240 = cljs.core.seq.call(null,cljs.core.deref.call(null,react_med.screens.patient_info.card.devcards_hidden));
var chunk__36241 = null;
var count__36242 = (0);
var i__36243 = (0);
while(true){
if((i__36243 < count__36242)){
var hidden_atom = cljs.core._nth.call(null,chunk__36241,i__36243);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__36248 = seq__36240;
var G__36249 = chunk__36241;
var G__36250 = count__36242;
var G__36251 = (i__36243 + (1));
seq__36240 = G__36248;
chunk__36241 = G__36249;
count__36242 = G__36250;
i__36243 = G__36251;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__36240);
if(temp__5735__auto__){
var seq__36240__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36240__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__36240__$1);
var G__36252 = cljs.core.chunk_rest.call(null,seq__36240__$1);
var G__36253 = c__4550__auto__;
var G__36254 = cljs.core.count.call(null,c__4550__auto__);
var G__36255 = (0);
seq__36240 = G__36252;
chunk__36241 = G__36253;
count__36242 = G__36254;
i__36243 = G__36255;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__36240__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__36256 = cljs.core.next.call(null,seq__36240__$1);
var G__36257 = null;
var G__36258 = (0);
var G__36259 = (0);
seq__36240 = G__36256;
chunk__36241 = G__36257;
count__36242 = G__36258;
i__36243 = G__36259;
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
var seq__36244 = cljs.core.seq.call(null,cljs.core.deref.call(null,react_med.screens.patient_info.card.devcards_hidden));
var chunk__36245 = null;
var count__36246 = (0);
var i__36247 = (0);
while(true){
if((i__36247 < count__36246)){
var hidden_atom = cljs.core._nth.call(null,chunk__36245,i__36247);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__36260 = seq__36244;
var G__36261 = chunk__36245;
var G__36262 = count__36246;
var G__36263 = (i__36247 + (1));
seq__36244 = G__36260;
chunk__36245 = G__36261;
count__36246 = G__36262;
i__36247 = G__36263;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__36244);
if(temp__5735__auto__){
var seq__36244__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36244__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__36244__$1);
var G__36264 = cljs.core.chunk_rest.call(null,seq__36244__$1);
var G__36265 = c__4550__auto__;
var G__36266 = cljs.core.count.call(null,c__4550__auto__);
var G__36267 = (0);
seq__36244 = G__36264;
chunk__36245 = G__36265;
count__36246 = G__36266;
i__36247 = G__36267;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__36244__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__36268 = cljs.core.next.call(null,seq__36244__$1);
var G__36269 = null;
var G__36270 = (0);
var G__36271 = (0);
seq__36244 = G__36268;
chunk__36245 = G__36269;
count__36246 = G__36270;
i__36247 = G__36271;
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

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36238","meta36238",-362485058,null)], null);
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36237.cljs$lang$type = true;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36237.cljs$lang$ctorStr = "react-med.screens.patient-info.card/t_react_med$screens$patient_info$card36237";

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36237.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.screens.patient-info.card/t_react_med$screens$patient_info$card36237");
});

/**
 * Positional factory function for react-med.screens.patient-info.card/t_react_med$screens$patient_info$card36237.
 */
react_med.screens.patient_info.card.__GT_t_react_med$screens$patient_info$card36237 = (function react_med$screens$patient_info$card$__GT_t_react_med$screens$patient_info$card36237(meta36238){
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36237(meta36238));
});

}

return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36237(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.screens.patient_info.card","react_med.screens.patient_info.card",-722609824),new cljs.core.Keyword(null,"patient-info-component","patient-info-component",81488317)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"patient-info-component",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.screens !== 'undefined') && (typeof react_med.screens.patient_info !== 'undefined') && (typeof react_med.screens.patient_info.card !== 'undefined') && (typeof react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36272 = (function (meta36273){
this.meta36273 = meta36273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36274,meta36273__$1){
var self__ = this;
var _36274__$1 = this;
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36272(meta36273__$1));
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36274){
var self__ = this;
var _36274__$1 = this;
return self__.meta36273;
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36272.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36272.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__36275 = cljs.core.deref.call(null,devcard_data);
var map__36275__$1 = (((((!((map__36275 == null))))?(((((map__36275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36275):map__36275);
var hidden_QMARK_ = cljs.core.get.call(null,map__36275__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.screens.patient_info.card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__36275,map__36275__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__36275,map__36275__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36273","meta36273",457884101,null)], null);
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36272.cljs$lang$type = true;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36272.cljs$lang$ctorStr = "react-med.screens.patient-info.card/t_react_med$screens$patient_info$card36272";

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36272.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.screens.patient-info.card/t_react_med$screens$patient_info$card36272");
});

/**
 * Positional factory function for react-med.screens.patient-info.card/t_react_med$screens$patient_info$card36272.
 */
react_med.screens.patient_info.card.__GT_t_react_med$screens$patient_info$card36272 = (function react_med$screens$patient_info$card$__GT_t_react_med$screens$patient_info$card36272(meta36273){
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36272(meta36273));
});

}

return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36272(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.screens.patient_info.card","react_med.screens.patient_info.card",-722609824),new cljs.core.Keyword(null,"editing-patient-info-component","editing-patient-info-component",816516127)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"editing-patient-info-component",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.screens !== 'undefined') && (typeof react_med.screens.patient_info !== 'undefined') && (typeof react_med.screens.patient_info.card !== 'undefined') && (typeof react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36277 = (function (meta36278){
this.meta36278 = meta36278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36279,meta36278__$1){
var self__ = this;
var _36279__$1 = this;
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36277(meta36278__$1));
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36279){
var self__ = this;
var _36279__$1 = this;
return self__.meta36278;
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36277.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36277.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__36280 = cljs.core.deref.call(null,devcard_data);
var map__36280__$1 = (((((!((map__36280 == null))))?(((((map__36280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36280):map__36280);
var hidden_QMARK_ = cljs.core.get.call(null,map__36280__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.screens.patient_info.card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__36280,map__36280__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__36280,map__36280__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36278","meta36278",1647724680,null)], null);
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36277.cljs$lang$type = true;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36277.cljs$lang$ctorStr = "react-med.screens.patient-info.card/t_react_med$screens$patient_info$card36277";

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36277.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.screens.patient-info.card/t_react_med$screens$patient_info$card36277");
});

/**
 * Positional factory function for react-med.screens.patient-info.card/t_react_med$screens$patient_info$card36277.
 */
react_med.screens.patient_info.card.__GT_t_react_med$screens$patient_info$card36277 = (function react_med$screens$patient_info$card$__GT_t_react_med$screens$patient_info$card36277(meta36278){
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36277(meta36278));
});

}

return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card36277(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=card.js.map
