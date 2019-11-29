// Compiled by ClojureScript 1.10.520 {}
goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__14710 = h;
G__14710.setUseFragment(false);

G__14710.setPathPrefix("");

G__14710.setEnabled(true);

return G__14710;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search)].join('');
});

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
});

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var G__14712 = arguments.length;
switch (G__14712) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.call(null,pushy.core.set_create_url_BANG_.call(null,pushy.core.set_retrieve_token_BANG_.call(null,(new goog.history.Html5History.TokenTransformer()))));
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_.call(null,(new goog.history.Html5History(window,transformer)));
});

pushy.core.new_history.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
pushy.core.IHistory = function(){};

pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var G__14715 = arguments.length;
switch (G__14715) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,token);
} else {
var m__4431__auto__ = (pushy.core.set_token_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,token,title);
} else {
var m__4431__auto__ = (pushy.core.set_token_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var G__14717 = arguments.length;
switch (G__14717) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,token);
} else {
var m__4431__auto__ = (pushy.core.replace_token_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,token,title);
} else {
var m__4431__auto__ = (pushy.core.replace_token_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.get_token = (function pushy$core$get_token(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$get_token$arity$1 == null)))))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.get_token[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (pushy.core.get_token["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.get-token",this$);
}
}
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (pushy.core.start_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.start!",this$);
}
}
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (pushy.core.stop_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.stop!",this$);
}
}
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (((!(clojure.string.blank_QMARK_.call(null,uri)))) && (((((cljs.core.not.call(null,uri.hasScheme())) && (cljs.core.not.call(null,uri.hasDomain())))) || ((!((cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*$"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)) == null)))))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
if(cljs.core.empty_QMARK_.call(null,query)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14734 = arguments.length;
var i__4731__auto___14735 = (0);
while(true){
if((i__4731__auto___14735 < len__4730__auto___14734)){
args__4736__auto__.push((arguments[i__4731__auto___14735]));

var G__14736 = (i__4731__auto___14735 + (1));
i__4731__auto___14735 = G__14736;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__14723){
var map__14724 = p__14723;
var map__14724__$1 = (((((!((map__14724 == null))))?(((((map__14724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14724):map__14724);
var processable_url_QMARK_ = cljs.core.get.call(null,map__14724__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.call(null,map__14724__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var prevent_default_when_no_match_QMARK_ = cljs.core.get.call(null,map__14724__$1,new cljs.core.Keyword(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",-358623618),cljs.core.constantly.call(null,false));
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if((typeof pushy !== 'undefined') && (typeof pushy.core !== 'undefined') && (typeof pushy.core.t_pushy$core14726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core14726 = (function (event_keys,identity_fn,prevent_default_when_no_match_QMARK_,dispatch_fn,map__14724,history,processable_url_QMARK_,p__14723,match_fn,meta14727){
this.event_keys = event_keys;
this.identity_fn = identity_fn;
this.prevent_default_when_no_match_QMARK_ = prevent_default_when_no_match_QMARK_;
this.dispatch_fn = dispatch_fn;
this.map__14724 = map__14724;
this.history = history;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.p__14723 = p__14723;
this.match_fn = match_fn;
this.meta14727 = meta14727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pushy.core.t_pushy$core14726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_14728,meta14727__$1){
var self__ = this;
var _14728__$1 = this;
return (new pushy.core.t_pushy$core14726(self__.event_keys,self__.identity_fn,self__.prevent_default_when_no_match_QMARK_,self__.dispatch_fn,self__.map__14724,self__.history,self__.processable_url_QMARK_,self__.p__14723,self__.match_fn,meta14727__$1));
});})(history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core14726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_14728){
var self__ = this;
var _14728__$1 = this;
return self__.meta14727;
});})(history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core14726.prototype.pushy$core$IHistory$ = cljs.core.PROTOCOL_SENTINEL;

pushy.core.t_pushy$core14726.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core14726.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core14726.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
});})(history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core14726.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
});})(history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core14726.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core14726.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (e){
var temp__5735__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__5735__auto__)){
var match = temp__5735__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
));

var temp__5735__auto___14737 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__5735__auto___14737)){
var match_14738 = temp__5735__auto___14737;
self__.dispatch_fn.call(null,match_14738);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (e){
var temp__5735__auto__ = (function (){var G__14729 = e;
var G__14729__$1 = (((G__14729 == null))?null:G__14729.target);
if((G__14729__$1 == null)){
return null;
} else {
return G__14729__$1.closest("a");
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__4120__auto__ = self__.processable_url_QMARK_.call(null,uri);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (cljs.core.not.call(null,cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["_self",null,"_blank",null], null), null),el.getAttribute("target")))) && (((cljs.core.not.call(null,el.hasAttribute("data-pushy-ignore"))) || (cljs.core._EQ_.call(null,el.getAttribute("data-pushy-ignore"),"false")))) && (cljs.core._EQ_.call(null,(0),e.button)));
} else {
return and__4120__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri.call(null,uri);
if(cljs.core.truth_(self__.identity_fn.call(null,self__.match_fn.call(null,next_token)))){
var temp__5733__auto___14739 = el.title;
if(cljs.core.truth_(temp__5733__auto___14739)){
var title_14740 = temp__5733__auto___14739;
pushy.core.set_token_BANG_.call(null,this$__$1,next_token,title_14740);
} else {
pushy.core.set_token_BANG_.call(null,this$__$1,next_token);
}

return e.preventDefault();
} else {
if(cljs.core.truth_(self__.prevent_default_when_no_match_QMARK_.call(null,next_token))){
return e.preventDefault();
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(this$__$1,history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
));

return null;
});})(history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core14726.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__14730_14741 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__14731_14742 = null;
var count__14732_14743 = (0);
var i__14733_14744 = (0);
while(true){
if((i__14733_14744 < count__14732_14743)){
var key_14745 = cljs.core._nth.call(null,chunk__14731_14742,i__14733_14744);
goog.events.unlistenByKey(key_14745);


var G__14746 = seq__14730_14741;
var G__14747 = chunk__14731_14742;
var G__14748 = count__14732_14743;
var G__14749 = (i__14733_14744 + (1));
seq__14730_14741 = G__14746;
chunk__14731_14742 = G__14747;
count__14732_14743 = G__14748;
i__14733_14744 = G__14749;
continue;
} else {
var temp__5735__auto___14750 = cljs.core.seq.call(null,seq__14730_14741);
if(temp__5735__auto___14750){
var seq__14730_14751__$1 = temp__5735__auto___14750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14730_14751__$1)){
var c__4550__auto___14752 = cljs.core.chunk_first.call(null,seq__14730_14751__$1);
var G__14753 = cljs.core.chunk_rest.call(null,seq__14730_14751__$1);
var G__14754 = c__4550__auto___14752;
var G__14755 = cljs.core.count.call(null,c__4550__auto___14752);
var G__14756 = (0);
seq__14730_14741 = G__14753;
chunk__14731_14742 = G__14754;
count__14732_14743 = G__14755;
i__14733_14744 = G__14756;
continue;
} else {
var key_14757 = cljs.core.first.call(null,seq__14730_14751__$1);
goog.events.unlistenByKey(key_14757);


var G__14758 = cljs.core.next.call(null,seq__14730_14751__$1);
var G__14759 = null;
var G__14760 = (0);
var G__14761 = (0);
seq__14730_14741 = G__14758;
chunk__14731_14742 = G__14759;
count__14732_14743 = G__14760;
i__14733_14744 = G__14761;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core14726.getBasis = ((function (history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",1281907909,null),new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"map__14724","map__14724",1985669996,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"p__14723","p__14723",1245163961,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"meta14727","meta14727",-437314059,null)], null);
});})(history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core14726.cljs$lang$type = true;

pushy.core.t_pushy$core14726.cljs$lang$ctorStr = "pushy.core/t_pushy$core14726";

pushy.core.t_pushy$core14726.cljs$lang$ctorPrWriter = ((function (history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pushy.core/t_pushy$core14726");
});})(history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

/**
 * Positional factory function for pushy.core/t_pushy$core14726.
 */
pushy.core.__GT_t_pushy$core14726 = ((function (history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function pushy$core$__GT_t_pushy$core14726(event_keys__$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,dispatch_fn__$1,map__14724__$2,history__$1,processable_url_QMARK___$1,p__14723__$1,match_fn__$1,meta14727){
return (new pushy.core.t_pushy$core14726(event_keys__$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,dispatch_fn__$1,map__14724__$2,history__$1,processable_url_QMARK___$1,p__14723__$1,match_fn__$1,meta14727));
});})(history,event_keys,map__14724,map__14724__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

}

return (new pushy.core.t_pushy$core14726(event_keys,identity_fn,prevent_default_when_no_match_QMARK_,dispatch_fn,map__14724__$1,history,processable_url_QMARK_,p__14723,match_fn,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
pushy.core.pushy.cljs$lang$applyTo = (function (seq14720){
var G__14721 = cljs.core.first.call(null,seq14720);
var seq14720__$1 = cljs.core.next.call(null,seq14720);
var G__14722 = cljs.core.first.call(null,seq14720__$1);
var seq14720__$2 = cljs.core.next.call(null,seq14720__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14721,G__14722,seq14720__$2);
});

/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var G__14763 = arguments.length;
switch (G__14763) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.call(null,window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;

pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var G__14766 = arguments.length;
switch (G__14766) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.call(null,dispatch_fn,match_fn,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),identity_fn);
pushy.core.start_BANG_.call(null,h);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map
