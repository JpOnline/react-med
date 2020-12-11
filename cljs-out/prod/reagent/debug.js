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
var G__8447__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8448__i = 0, G__8448__a = new Array(arguments.length -  0);
while (G__8448__i < G__8448__a.length) {G__8448__a[G__8448__i] = arguments[G__8448__i + 0]; ++G__8448__i;}
  args = new cljs.core.IndexedSeq(G__8448__a,0,null);
} 
return G__8447__delegate.call(this,args);};
G__8447.cljs$lang$maxFixedArity = 0;
G__8447.cljs$lang$applyTo = (function (arglist__8449){
var args = cljs.core.seq(arglist__8449);
return G__8447__delegate(args);
});
G__8447.cljs$core$IFn$_invoke$arity$variadic = G__8447__delegate;
return G__8447;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8450__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8451__i = 0, G__8451__a = new Array(arguments.length -  0);
while (G__8451__i < G__8451__a.length) {G__8451__a[G__8451__i] = arguments[G__8451__i + 0]; ++G__8451__i;}
  args = new cljs.core.IndexedSeq(G__8451__a,0,null);
} 
return G__8450__delegate.call(this,args);};
G__8450.cljs$lang$maxFixedArity = 0;
G__8450.cljs$lang$applyTo = (function (arglist__8452){
var args = cljs.core.seq(arglist__8452);
return G__8450__delegate(args);
});
G__8450.cljs$core$IFn$_invoke$arity$variadic = G__8450__delegate;
return G__8450;
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
