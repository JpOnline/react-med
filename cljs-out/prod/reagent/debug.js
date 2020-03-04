// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__12448__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12449__i = 0, G__12449__a = new Array(arguments.length -  0);
while (G__12449__i < G__12449__a.length) {G__12449__a[G__12449__i] = arguments[G__12449__i + 0]; ++G__12449__i;}
  args = new cljs.core.IndexedSeq(G__12449__a,0,null);
} 
return G__12448__delegate.call(this,args);};
G__12448.cljs$lang$maxFixedArity = 0;
G__12448.cljs$lang$applyTo = (function (arglist__12450){
var args = cljs.core.seq(arglist__12450);
return G__12448__delegate(args);
});
G__12448.cljs$core$IFn$_invoke$arity$variadic = G__12448__delegate;
return G__12448;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12451__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12452__i = 0, G__12452__a = new Array(arguments.length -  0);
while (G__12452__i < G__12452__a.length) {G__12452__a[G__12452__i] = arguments[G__12452__i + 0]; ++G__12452__i;}
  args = new cljs.core.IndexedSeq(G__12452__a,0,null);
} 
return G__12451__delegate.call(this,args);};
G__12451.cljs$lang$maxFixedArity = 0;
G__12451.cljs$lang$applyTo = (function (arglist__12453){
var args = cljs.core.seq(arglist__12453);
return G__12451__delegate(args);
});
G__12451.cljs$core$IFn$_invoke$arity$variadic = G__12451__delegate;
return G__12451;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
