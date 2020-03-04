// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__14343__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__14343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14344__i = 0, G__14344__a = new Array(arguments.length -  0);
while (G__14344__i < G__14344__a.length) {G__14344__a[G__14344__i] = arguments[G__14344__i + 0]; ++G__14344__i;}
  args = new cljs.core.IndexedSeq(G__14344__a,0,null);
} 
return G__14343__delegate.call(this,args);};
G__14343.cljs$lang$maxFixedArity = 0;
G__14343.cljs$lang$applyTo = (function (arglist__14345){
var args = cljs.core.seq(arglist__14345);
return G__14343__delegate(args);
});
G__14343.cljs$core$IFn$_invoke$arity$variadic = G__14343__delegate;
return G__14343;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__14346__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__14346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14347__i = 0, G__14347__a = new Array(arguments.length -  0);
while (G__14347__i < G__14347__a.length) {G__14347__a[G__14347__i] = arguments[G__14347__i + 0]; ++G__14347__i;}
  args = new cljs.core.IndexedSeq(G__14347__a,0,null);
} 
return G__14346__delegate.call(this,args);};
G__14346.cljs$lang$maxFixedArity = 0;
G__14346.cljs$lang$applyTo = (function (arglist__14348){
var args = cljs.core.seq(arglist__14348);
return G__14346__delegate(args);
});
G__14346.cljs$core$IFn$_invoke$arity$variadic = G__14346__delegate;
return G__14346;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
