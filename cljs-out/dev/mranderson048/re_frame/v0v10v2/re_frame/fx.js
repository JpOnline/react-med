// Compiled by ClojureScript 1.10.520 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
mranderson048.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson048$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__25104 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__25105 = null;
var count__25106 = (0);
var i__25107 = (0);
while(true){
if((i__25107 < count__25106)){
var vec__25114 = cljs.core._nth.call(null,chunk__25105,i__25107);
var effect_key = cljs.core.nth.call(null,vec__25114,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25114,(1),null);
var temp__5733__auto___25120 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___25120)){
var effect_fn_25121 = temp__5733__auto___25120;
effect_fn_25121.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__25122 = seq__25104;
var G__25123 = chunk__25105;
var G__25124 = count__25106;
var G__25125 = (i__25107 + (1));
seq__25104 = G__25122;
chunk__25105 = G__25123;
count__25106 = G__25124;
i__25107 = G__25125;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25104);
if(temp__5735__auto__){
var seq__25104__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25104__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25104__$1);
var G__25126 = cljs.core.chunk_rest.call(null,seq__25104__$1);
var G__25127 = c__4550__auto__;
var G__25128 = cljs.core.count.call(null,c__4550__auto__);
var G__25129 = (0);
seq__25104 = G__25126;
chunk__25105 = G__25127;
count__25106 = G__25128;
i__25107 = G__25129;
continue;
} else {
var vec__25117 = cljs.core.first.call(null,seq__25104__$1);
var effect_key = cljs.core.nth.call(null,vec__25117,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25117,(1),null);
var temp__5733__auto___25130 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___25130)){
var effect_fn_25131 = temp__5733__auto___25130;
effect_fn_25131.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__25132 = cljs.core.next.call(null,seq__25104__$1);
var G__25133 = null;
var G__25134 = (0);
var G__25135 = (0);
seq__25104 = G__25132;
chunk__25105 = G__25133;
count__25106 = G__25134;
i__25107 = G__25135;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__25136 = cljs.core.seq.call(null,value);
var chunk__25137 = null;
var count__25138 = (0);
var i__25139 = (0);
while(true){
if((i__25139 < count__25138)){
var map__25144 = cljs.core._nth.call(null,chunk__25137,i__25139);
var map__25144__$1 = (((((!((map__25144 == null))))?(((((map__25144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25144):map__25144);
var effect = map__25144__$1;
var ms = cljs.core.get.call(null,map__25144__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25144__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25136,chunk__25137,count__25138,i__25139,map__25144,map__25144__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__25136,chunk__25137,count__25138,i__25139,map__25144,map__25144__$1,effect,ms,dispatch))
,ms);
}


var G__25148 = seq__25136;
var G__25149 = chunk__25137;
var G__25150 = count__25138;
var G__25151 = (i__25139 + (1));
seq__25136 = G__25148;
chunk__25137 = G__25149;
count__25138 = G__25150;
i__25139 = G__25151;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25136);
if(temp__5735__auto__){
var seq__25136__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25136__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25136__$1);
var G__25152 = cljs.core.chunk_rest.call(null,seq__25136__$1);
var G__25153 = c__4550__auto__;
var G__25154 = cljs.core.count.call(null,c__4550__auto__);
var G__25155 = (0);
seq__25136 = G__25152;
chunk__25137 = G__25153;
count__25138 = G__25154;
i__25139 = G__25155;
continue;
} else {
var map__25146 = cljs.core.first.call(null,seq__25136__$1);
var map__25146__$1 = (((((!((map__25146 == null))))?(((((map__25146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25146):map__25146);
var effect = map__25146__$1;
var ms = cljs.core.get.call(null,map__25146__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25146__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25136,chunk__25137,count__25138,i__25139,map__25146,map__25146__$1,effect,ms,dispatch,seq__25136__$1,temp__5735__auto__){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__25136,chunk__25137,count__25138,i__25139,map__25146,map__25146__$1,effect,ms,dispatch,seq__25136__$1,temp__5735__auto__))
,ms);
}


var G__25156 = cljs.core.next.call(null,seq__25136__$1);
var G__25157 = null;
var G__25158 = (0);
var G__25159 = (0);
seq__25136 = G__25156;
chunk__25137 = G__25157;
count__25138 = G__25158;
i__25139 = G__25159;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,value);
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__25160 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__25161 = null;
var count__25162 = (0);
var i__25163 = (0);
while(true){
if((i__25163 < count__25162)){
var event = cljs.core._nth.call(null,chunk__25161,i__25163);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__25164 = seq__25160;
var G__25165 = chunk__25161;
var G__25166 = count__25162;
var G__25167 = (i__25163 + (1));
seq__25160 = G__25164;
chunk__25161 = G__25165;
count__25162 = G__25166;
i__25163 = G__25167;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25160);
if(temp__5735__auto__){
var seq__25160__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25160__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25160__$1);
var G__25168 = cljs.core.chunk_rest.call(null,seq__25160__$1);
var G__25169 = c__4550__auto__;
var G__25170 = cljs.core.count.call(null,c__4550__auto__);
var G__25171 = (0);
seq__25160 = G__25168;
chunk__25161 = G__25169;
count__25162 = G__25170;
i__25163 = G__25171;
continue;
} else {
var event = cljs.core.first.call(null,seq__25160__$1);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__25172 = cljs.core.next.call(null,seq__25160__$1);
var G__25173 = null;
var G__25174 = (0);
var G__25175 = (0);
seq__25160 = G__25172;
chunk__25161 = G__25173;
count__25162 = G__25174;
i__25163 = G__25175;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__25176 = cljs.core.seq.call(null,value);
var chunk__25177 = null;
var count__25178 = (0);
var i__25179 = (0);
while(true){
if((i__25179 < count__25178)){
var event = cljs.core._nth.call(null,chunk__25177,i__25179);
clear_event.call(null,event);


var G__25180 = seq__25176;
var G__25181 = chunk__25177;
var G__25182 = count__25178;
var G__25183 = (i__25179 + (1));
seq__25176 = G__25180;
chunk__25177 = G__25181;
count__25178 = G__25182;
i__25179 = G__25183;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25176);
if(temp__5735__auto__){
var seq__25176__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25176__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25176__$1);
var G__25184 = cljs.core.chunk_rest.call(null,seq__25176__$1);
var G__25185 = c__4550__auto__;
var G__25186 = cljs.core.count.call(null,c__4550__auto__);
var G__25187 = (0);
seq__25176 = G__25184;
chunk__25177 = G__25185;
count__25178 = G__25186;
i__25179 = G__25187;
continue;
} else {
var event = cljs.core.first.call(null,seq__25176__$1);
clear_event.call(null,event);


var G__25188 = cljs.core.next.call(null,seq__25176__$1);
var G__25189 = null;
var G__25190 = (0);
var G__25191 = (0);
seq__25176 = G__25188;
chunk__25177 = G__25189;
count__25178 = G__25190;
i__25179 = G__25191;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
