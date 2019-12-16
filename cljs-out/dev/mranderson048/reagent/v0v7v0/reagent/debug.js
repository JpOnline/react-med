// Compiled by ClojureScript 1.10.520 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.debug');
goog.require('cljs.core');
mranderson048.reagent.v0v7v0.reagent.debug.has_console = (typeof console !== 'undefined');
mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.debug.warnings !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.debug.track_console !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__24056__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24057__i = 0, G__24057__a = new Array(arguments.length -  0);
while (G__24057__i < G__24057__a.length) {G__24057__a[G__24057__i] = arguments[G__24057__i + 0]; ++G__24057__i;}
  args = new cljs.core.IndexedSeq(G__24057__a,0,null);
} 
return G__24056__delegate.call(this,args);};
G__24056.cljs$lang$maxFixedArity = 0;
G__24056.cljs$lang$applyTo = (function (arglist__24058){
var args = cljs.core.seq(arglist__24058);
return G__24056__delegate(args);
});
G__24056.cljs$core$IFn$_invoke$arity$variadic = G__24056__delegate;
return G__24056;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__24059__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24060__i = 0, G__24060__a = new Array(arguments.length -  0);
while (G__24060__i < G__24060__a.length) {G__24060__a[G__24060__i] = arguments[G__24060__i + 0]; ++G__24060__i;}
  args = new cljs.core.IndexedSeq(G__24060__a,0,null);
} 
return G__24059__delegate.call(this,args);};
G__24059.cljs$lang$maxFixedArity = 0;
G__24059.cljs$lang$applyTo = (function (arglist__24061){
var args = cljs.core.seq(arglist__24061);
return G__24059__delegate(args);
});
G__24059.cljs$core$IFn$_invoke$arity$variadic = G__24059__delegate;
return G__24059;
})()
;})(o))
;

return o;
})();
}
mranderson048.reagent.v0v7v0.reagent.debug.track_warnings = (function mranderson048$reagent$v0v7v0$reagent$debug$track_warnings(f){
mranderson048.reagent.v0v7v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
