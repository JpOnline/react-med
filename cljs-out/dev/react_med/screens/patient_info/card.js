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
if((typeof react_med !== 'undefined') && (typeof react_med.screens !== 'undefined') && (typeof react_med.screens.patient_info !== 'undefined') && (typeof react_med.screens.patient_info.card !== 'undefined') && (typeof react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35741 = (function (meta35742){
this.meta35742 = meta35742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35743,meta35742__$1){
var self__ = this;
var _35743__$1 = this;
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35741(meta35742__$1));
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35743){
var self__ = this;
var _35743__$1 = this;
return self__.meta35742;
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35741.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35741.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = (function (){var card_container_style = ({"display": "flex", "justifyContent": "space-evenly", "padding": "20px 0"});
return ((function (card_container_style,this__21007__auto____$1){
return (function (devcard_data,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),card_container_style], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.patient_info.card.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"hide-all",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (card_container_style,this__21007__auto____$1){
return (function (){
var seq__35744 = cljs.core.seq.call(null,cljs.core.deref.call(null,react_med.screens.patient_info.card.devcards_hidden));
var chunk__35745 = null;
var count__35746 = (0);
var i__35747 = (0);
while(true){
if((i__35747 < count__35746)){
var hidden_atom = cljs.core._nth.call(null,chunk__35745,i__35747);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__35752 = seq__35744;
var G__35753 = chunk__35745;
var G__35754 = count__35746;
var G__35755 = (i__35747 + (1));
seq__35744 = G__35752;
chunk__35745 = G__35753;
count__35746 = G__35754;
i__35747 = G__35755;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35744);
if(temp__5735__auto__){
var seq__35744__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35744__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35744__$1);
var G__35756 = cljs.core.chunk_rest.call(null,seq__35744__$1);
var G__35757 = c__4550__auto__;
var G__35758 = cljs.core.count.call(null,c__4550__auto__);
var G__35759 = (0);
seq__35744 = G__35756;
chunk__35745 = G__35757;
count__35746 = G__35758;
i__35747 = G__35759;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__35744__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__35760 = cljs.core.next.call(null,seq__35744__$1);
var G__35761 = null;
var G__35762 = (0);
var G__35763 = (0);
seq__35744 = G__35760;
chunk__35745 = G__35761;
count__35746 = G__35762;
i__35747 = G__35763;
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
var seq__35748 = cljs.core.seq.call(null,cljs.core.deref.call(null,react_med.screens.patient_info.card.devcards_hidden));
var chunk__35749 = null;
var count__35750 = (0);
var i__35751 = (0);
while(true){
if((i__35751 < count__35750)){
var hidden_atom = cljs.core._nth.call(null,chunk__35749,i__35751);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__35764 = seq__35748;
var G__35765 = chunk__35749;
var G__35766 = count__35750;
var G__35767 = (i__35751 + (1));
seq__35748 = G__35764;
chunk__35749 = G__35765;
count__35750 = G__35766;
i__35751 = G__35767;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35748);
if(temp__5735__auto__){
var seq__35748__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35748__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35748__$1);
var G__35768 = cljs.core.chunk_rest.call(null,seq__35748__$1);
var G__35769 = c__4550__auto__;
var G__35770 = cljs.core.count.call(null,c__4550__auto__);
var G__35771 = (0);
seq__35748 = G__35768;
chunk__35749 = G__35769;
count__35750 = G__35770;
i__35751 = G__35771;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__35748__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__35772 = cljs.core.next.call(null,seq__35748__$1);
var G__35773 = null;
var G__35774 = (0);
var G__35775 = (0);
seq__35748 = G__35772;
chunk__35749 = G__35773;
count__35750 = G__35774;
i__35751 = G__35775;
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

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35742","meta35742",-929981694,null)], null);
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35741.cljs$lang$type = true;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35741.cljs$lang$ctorStr = "react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35741";

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35741.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35741");
});

/**
 * Positional factory function for react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35741.
 */
react_med.screens.patient_info.card.__GT_t_react_med$screens$patient_info$card35741 = (function react_med$screens$patient_info$card$__GT_t_react_med$screens$patient_info$card35741(meta35742){
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35741(meta35742));
});

}

return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35741(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.screens.patient_info.card","react_med.screens.patient_info.card",-722609824),new cljs.core.Keyword(null,"patient-info-component","patient-info-component",81488317)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"patient-info-component",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.screens !== 'undefined') && (typeof react_med.screens.patient_info !== 'undefined') && (typeof react_med.screens.patient_info.card !== 'undefined') && (typeof react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35776 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35776 = (function (meta35777){
this.meta35777 = meta35777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35778,meta35777__$1){
var self__ = this;
var _35778__$1 = this;
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35776(meta35777__$1));
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35778){
var self__ = this;
var _35778__$1 = this;
return self__.meta35777;
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35776.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35776.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35779 = cljs.core.deref.call(null,devcard_data);
var map__35779__$1 = (((((!((map__35779 == null))))?(((((map__35779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35779):map__35779);
var hidden_QMARK_ = cljs.core.get.call(null,map__35779__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.screens.patient_info.card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35779,map__35779__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35779,map__35779__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35777","meta35777",1905094139,null)], null);
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35776.cljs$lang$type = true;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35776.cljs$lang$ctorStr = "react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35776";

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35776.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35776");
});

/**
 * Positional factory function for react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35776.
 */
react_med.screens.patient_info.card.__GT_t_react_med$screens$patient_info$card35776 = (function react_med$screens$patient_info$card$__GT_t_react_med$screens$patient_info$card35776(meta35777){
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35776(meta35777));
});

}

return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35776(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react_med.screens.patient_info.card","react_med.screens.patient_info.card",-722609824),new cljs.core.Keyword(null,"editing-patient-info-component","editing-patient-info-component",816516127)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"editing-patient-info-component",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof react_med !== 'undefined') && (typeof react_med.screens !== 'undefined') && (typeof react_med.screens.patient_info !== 'undefined') && (typeof react_med.screens.patient_info.card !== 'undefined') && (typeof react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35781 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35781 = (function (meta35782){
this.meta35782 = meta35782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35783,meta35782__$1){
var self__ = this;
var _35783__$1 = this;
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35781(meta35782__$1));
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35783){
var self__ = this;
var _35783__$1 = this;
return self__.meta35782;
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35781.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35781.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__21007__auto__,devcard_opts__21008__auto__){
var self__ = this;
var this__21007__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__21008__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__21026__auto__ = ((function (this__21007__auto____$1){
return (function (devcard_data,_){
var map__35784 = cljs.core.deref.call(null,devcard_data);
var map__35784__$1 = (((((!((map__35784 == null))))?(((((map__35784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35784):map__35784);
var hidden_QMARK_ = cljs.core.get.call(null,map__35784__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,react_med.screens.patient_info.card.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__35784,map__35784__$1,hidden_QMARK_,this__21007__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__35784,map__35784__$1,hidden_QMARK_,this__21007__auto____$1))
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

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35782","meta35782",-199545306,null)], null);
});

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35781.cljs$lang$type = true;

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35781.cljs$lang$ctorStr = "react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35781";

react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35781.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35781");
});

/**
 * Positional factory function for react-med.screens.patient-info.card/t_react_med$screens$patient_info$card35781.
 */
react_med.screens.patient_info.card.__GT_t_react_med$screens$patient_info$card35781 = (function react_med$screens$patient_info$card$__GT_t_react_med$screens$patient_info$card35781(meta35782){
return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35781(meta35782));
});

}

return (new react_med.screens.patient_info.card.t_react_med$screens$patient_info$card35781(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=card.js.map
