// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljs.analyzer.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.env');
goog.require('cljs.analyzer');
/**
 * Creates an empty compilation state Atom<Map>.
 */
cljs.analyzer.api.empty_state = (function cljs$analyzer$api$empty_state(){
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
});
var ret__4776__auto___17483 = /**
 * Run the body with the given compilation state Atom<Map>.
 */
cljs.analyzer.api.with_state = (function cljs$analyzer$api$with_state(_AMPERSAND_form,_AMPERSAND_env,state,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$env_SLASH_with_DASH_compiler_DASH_env,null,(1),null)),(new cljs.core.List(null,state,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});
cljs.analyzer.api.with_state.cljs$lang$macro = true;

/**
 * Creates an empty analysis environment.
 */
cljs.analyzer.api.empty_env = (function cljs$analyzer$api$empty_env(){
return cljs.analyzer.empty_env();
});
var ret__4776__auto___17487 = (function (){
/**
 * Disable analyzer warnings for any analysis executed in body.
 */
cljs.analyzer.api.no_warn = (function cljs$analyzer$api$no_warn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17488 = arguments.length;
var i__4731__auto___17489 = (0);
while(true){
if((i__4731__auto___17489 < len__4730__auto___17488)){
args__4736__auto__.push((arguments[i__4731__auto___17489]));

var G__17490 = (i__4731__auto___17489 + (1));
i__4731__auto___17489 = G__17490;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
var no_warnings = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$analyzer_SLASH__STAR_cljs_DASH_warnings_STAR_,null,(1),null)),(new cljs.core.List(null,no_warnings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.analyzer.api.no_warn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.analyzer.api.no_warn.cljs$lang$applyTo = (function (seq17484){
var G__17485 = cljs.core.first(seq17484);
var seq17484__$1 = cljs.core.next(seq17484);
var G__17486 = cljs.core.first(seq17484__$1);
var seq17484__$2 = cljs.core.next(seq17484__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17485,G__17486,seq17484__$2);
});

return null;
})()
;
cljs.analyzer.api.no_warn.cljs$lang$macro = true;

/**
 * Test if the given warning-type is enabled.
 */
cljs.analyzer.api.warning_enabled_QMARK_ = (function cljs$analyzer$api$warning_enabled_QMARK_(warning_type){
return (cljs.analyzer._STAR_cljs_warnings_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer._STAR_cljs_warnings_STAR_.cljs$core$IFn$_invoke$arity$1(warning_type) : cljs.analyzer._STAR_cljs_warnings_STAR_.call(null,warning_type));
});
/**
 * The default warning handler.
 * 
 * Outputs the warning messages to *err*.
 */
cljs.analyzer.api.default_warning_handler = (function cljs$analyzer$api$default_warning_handler(warning_type,env,extra){
return cljs.analyzer.default_warning_handler(warning_type,env,extra);
});
/**
 * Return the compiler options from compiler state.
 */
cljs.analyzer.api.get_options = (function cljs$analyzer$api$get_options(var_args){
var G__17492 = arguments.length;
switch (G__17492) {
case 0:
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_);
});

cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$options);
});

cljs.analyzer.api.get_options.cljs$lang$maxFixedArity = 1;

/**
 * Return the currently computed Google Closure js dependency index from the
 *   compiler state.
 */
cljs.analyzer.api.get_js_index = (function cljs$analyzer$api$get_js_index(var_args){
var G__17495 = arguments.length;
switch (G__17495) {
case 0:
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_);
});

cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$js_DASH_dependency_DASH_index);
});

cljs.analyzer.api.get_js_index.cljs$lang$maxFixedArity = 1;

/**
 * Given an analysis environment resolve a var. Analogous to
 * clojure.core/resolve
 */
cljs.analyzer.api.resolve = (function cljs$analyzer$api$resolve(env,sym){
if(cljs.core.map_QMARK_(env)){
} else {
throw (new Error("Assert failed: (map? env)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

try{var _STAR_private_var_access_nowarn_STAR__orig_val__17498 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__17499 = true;
cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__17499;

try{return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
}finally {cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__17498;
}}catch (e17497){var e = e17497;
return cljs.analyzer.resolve_macro_var(env,sym);
}});
/**
 * Return all namespaces. Analagous to clojure.core/all-ns but
 *   returns symbols identifying namespaces not Namespace instances.
 */
cljs.analyzer.api.all_ns = (function cljs$analyzer$api$all_ns(var_args){
var G__17501 = arguments.length;
switch (G__17501) {
case 0:
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_);
});

cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces));
});

cljs.analyzer.api.all_ns.cljs$lang$maxFixedArity = 1;

/**
 * Given a namespace return the corresponding namespace analysis map. Analagous
 *   to clojure.core/find-ns.
 */
cljs.analyzer.api.find_ns = (function cljs$analyzer$api$find_ns(var_args){
var G__17504 = arguments.length;
switch (G__17504) {
case 1:
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,sym);
});

cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2 = (function (state,sym){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,sym], null));
});

cljs.analyzer.api.find_ns.cljs$lang$maxFixedArity = 2;

/**
 * Given a namespace return all the var analysis maps. Analagous to
 *   clojure.core/ns-interns but returns var analysis maps not vars.
 */
cljs.analyzer.api.ns_interns = (function cljs$analyzer$api$ns_interns(var_args){
var G__17507 = arguments.length;
switch (G__17507) {
case 1:
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,ns);
});

cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null))], 0));
});

cljs.analyzer.api.ns_interns.cljs$lang$maxFixedArity = 2;

/**
 * Given a namespace return all the public var analysis maps. Analagous to
 *   clojure.core/ns-publics but returns var analysis maps not vars.
 */
cljs.analyzer.api.ns_publics = (function cljs$analyzer$api$ns_publics(var_args){
var G__17510 = arguments.length;
switch (G__17510) {
case 1:
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,ns);
});

cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__17511){
var vec__17512 = p__17511;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17512,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17512,(1),null);
return cljs.core.cst$kw$private.cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null))], 0))));
});

cljs.analyzer.api.ns_publics.cljs$lang$maxFixedArity = 2;

/**
 * Given a namespace and a symbol return the corresponding var analysis map.
 *   Analagous to clojure.core/ns-resolve but returns var analysis map not Var.
 */
cljs.analyzer.api.ns_resolve = (function cljs$analyzer$api$ns_resolve(var_args){
var G__17517 = arguments.length;
switch (G__17517) {
case 2:
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2 = (function (ns,sym){
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3(cljs.env._STAR_compiler_STAR_,ns,sym);
});

cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3 = (function (state,ns,sym){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs,sym], null));
});

cljs.analyzer.api.ns_resolve.cljs$lang$maxFixedArity = 3;

/**
 * Removes the namespace named by the symbol.
 */
cljs.analyzer.api.remove_ns = (function cljs$analyzer$api$remove_ns(var_args){
var G__17520 = arguments.length;
switch (G__17520) {
case 1:
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,ns);
});

cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns], 0));
});

cljs.analyzer.api.remove_ns.cljs$lang$maxFixedArity = 2;

var ret__4776__auto___17526 = (function (){
/**
 * Binds cljs.analyzer/*cljs-ns* to 'cljs.user and uses the given compilation
 *   environment atom and runs body.
 */
cljs.analyzer.api.in_cljs_user = (function cljs$analyzer$api$in_cljs_user(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17527 = arguments.length;
var i__4731__auto___17528 = (0);
while(true){
if((i__4731__auto___17528 < len__4730__auto___17527)){
args__4736__auto__.push((arguments[i__4731__auto___17528]));

var G__17529 = (i__4731__auto___17528 + (1));
i__4731__auto___17528 = G__17529;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$analyzer_SLASH__STAR_cljs_DASH_ns_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$user,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$env_SLASH_with_DASH_compiler_DASH_env,null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
});

cljs.analyzer.api.in_cljs_user.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.analyzer.api.in_cljs_user.cljs$lang$applyTo = (function (seq17522){
var G__17523 = cljs.core.first(seq17522);
var seq17522__$1 = cljs.core.next(seq17522);
var G__17524 = cljs.core.first(seq17522__$1);
var seq17522__$2 = cljs.core.next(seq17522__$1);
var G__17525 = cljs.core.first(seq17522__$2);
var seq17522__$3 = cljs.core.next(seq17522__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17523,G__17524,G__17525,seq17522__$3);
});

return null;
})()
;
cljs.analyzer.api.in_cljs_user.cljs$lang$macro = true;

