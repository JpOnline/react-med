// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.debug');
goog.require('clojure.string');
reagent.impl.util.is_client = (((typeof window !== 'undefined')) && ((!((window.document == null)))));
reagent.impl.util._STAR_non_reactive_STAR_ = false;
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mem),arg);
if((!((v == null)))){
return v;
} else {
var ret = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg) : f.call(null,arg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join('');
}
});
reagent.impl.util.dash_to_prop_name = (function reagent$impl$util$dash_to_prop_name(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__12489 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var seq__12490 = cljs.core.seq(vec__12489);
var first__12491 = cljs.core.first(seq__12490);
var seq__12490__$1 = cljs.core.next(seq__12490);
var start = first__12491;
var parts = seq__12490__$1;
if(cljs.core.truth_((reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(start) : reagent.impl.util.dont_camel_case.call(null,start)))){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
}
});
reagent.impl.util.dash_to_method_name = (function reagent$impl$util$dash_to_method_name(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var name_str__$1 = clojure.string.replace(name_str,/(unsafe|UNSAFE)[-_]/,"UNSAFE_");
var vec__12492 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str__$1,/-/);
var seq__12493 = cljs.core.seq(vec__12492);
var first__12494 = cljs.core.first(seq__12493);
var seq__12493__$1 = cljs.core.next(seq__12493);
var start = first__12494;
var parts = seq__12493__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
});
reagent.impl.util.fun_name = (function reagent$impl$util$fun_name(f){
var n = (function (){var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core.fn_QMARK_(f);
if(and__4120__auto__){
var or__4131__auto__ = f.displayName;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var n = f.name;
if(((typeof n === 'string') && (cljs.core.seq(n)))){
return n;
} else {
return null;
}
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var and__4120__auto__ = (((!((f == null))))?(((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs$core$INamed$))))?true:false):false);
if(and__4120__auto__){
return cljs.core.name(f);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var m = cljs.core.meta(f);
if(cljs.core.map_QMARK_(m)){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(n)){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"$",".");
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.Fn}
*/
reagent.impl.util.PartialFn = (function (pfn,f,args){
this.pfn = pfn;
this.f = f;
this.args = args;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reagent.impl.util.PartialFn.prototype.cljs$core$Fn$ = cljs.core.PROTOCOL_SENTINEL;

reagent.impl.util.PartialFn.prototype.call = (function() {
var G__12500 = null;
var G__12500__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$0 ? self__.pfn.cljs$core$IFn$_invoke$arity$0() : self__.pfn.call(null));
});
var G__12500__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$1 ? self__.pfn.cljs$core$IFn$_invoke$arity$1(a) : self__.pfn.call(null,a));
});
var G__12500__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$2 ? self__.pfn.cljs$core$IFn$_invoke$arity$2(a,b) : self__.pfn.call(null,a,b));
});
var G__12500__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$3 ? self__.pfn.cljs$core$IFn$_invoke$arity$3(a,b,c) : self__.pfn.call(null,a,b,c));
});
var G__12500__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$4 ? self__.pfn.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : self__.pfn.call(null,a,b,c,d));
});
var G__12500__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$5 ? self__.pfn.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : self__.pfn.call(null,a,b,c,d,e));
});
var G__12500__7 = (function (self__,a,b,c,d,e,f__$1){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$6 ? self__.pfn.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : self__.pfn.call(null,a,b,c,d,e,f__$1));
});
var G__12500__8 = (function (self__,a,b,c,d,e,f__$1,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$7 ? self__.pfn.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : self__.pfn.call(null,a,b,c,d,e,f__$1,g));
});
var G__12500__9 = (function (self__,a,b,c,d,e,f__$1,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$8 ? self__.pfn.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h));
});
var G__12500__10 = (function (self__,a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$9 ? self__.pfn.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i));
});
var G__12500__11 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$10 ? self__.pfn.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j));
});
var G__12500__12 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$11 ? self__.pfn.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
});
var G__12500__13 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$12 ? self__.pfn.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
});
var G__12500__14 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$13 ? self__.pfn.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
});
var G__12500__15 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$14 ? self__.pfn.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
});
var G__12500__16 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$15 ? self__.pfn.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
});
var G__12500__17 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$16 ? self__.pfn.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
});
var G__12500__18 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$17 ? self__.pfn.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
});
var G__12500__19 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$18 ? self__.pfn.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
});
var G__12500__20 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$19 ? self__.pfn.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
});
var G__12500__21 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$20 ? self__.pfn.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
});
var G__12500__22 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.pfn,a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__12500 = function(self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__12500__1.call(this,self__);
case 2:
return G__12500__2.call(this,self__,a);
case 3:
return G__12500__3.call(this,self__,a,b);
case 4:
return G__12500__4.call(this,self__,a,b,c);
case 5:
return G__12500__5.call(this,self__,a,b,c,d);
case 6:
return G__12500__6.call(this,self__,a,b,c,d,e);
case 7:
return G__12500__7.call(this,self__,a,b,c,d,e,f__$1);
case 8:
return G__12500__8.call(this,self__,a,b,c,d,e,f__$1,g);
case 9:
return G__12500__9.call(this,self__,a,b,c,d,e,f__$1,g,h);
case 10:
return G__12500__10.call(this,self__,a,b,c,d,e,f__$1,g,h,i);
case 11:
return G__12500__11.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j);
case 12:
return G__12500__12.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k);
case 13:
return G__12500__13.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l);
case 14:
return G__12500__14.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
case 15:
return G__12500__15.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
case 16:
return G__12500__16.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
case 17:
return G__12500__17.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__12500__18.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__12500__19.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__12500__20.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__12500__21.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__12500__22.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__12500.cljs$core$IFn$_invoke$arity$1 = G__12500__1;
G__12500.cljs$core$IFn$_invoke$arity$2 = G__12500__2;
G__12500.cljs$core$IFn$_invoke$arity$3 = G__12500__3;
G__12500.cljs$core$IFn$_invoke$arity$4 = G__12500__4;
G__12500.cljs$core$IFn$_invoke$arity$5 = G__12500__5;
G__12500.cljs$core$IFn$_invoke$arity$6 = G__12500__6;
G__12500.cljs$core$IFn$_invoke$arity$7 = G__12500__7;
G__12500.cljs$core$IFn$_invoke$arity$8 = G__12500__8;
G__12500.cljs$core$IFn$_invoke$arity$9 = G__12500__9;
G__12500.cljs$core$IFn$_invoke$arity$10 = G__12500__10;
G__12500.cljs$core$IFn$_invoke$arity$11 = G__12500__11;
G__12500.cljs$core$IFn$_invoke$arity$12 = G__12500__12;
G__12500.cljs$core$IFn$_invoke$arity$13 = G__12500__13;
G__12500.cljs$core$IFn$_invoke$arity$14 = G__12500__14;
G__12500.cljs$core$IFn$_invoke$arity$15 = G__12500__15;
G__12500.cljs$core$IFn$_invoke$arity$16 = G__12500__16;
G__12500.cljs$core$IFn$_invoke$arity$17 = G__12500__17;
G__12500.cljs$core$IFn$_invoke$arity$18 = G__12500__18;
G__12500.cljs$core$IFn$_invoke$arity$19 = G__12500__19;
G__12500.cljs$core$IFn$_invoke$arity$20 = G__12500__20;
G__12500.cljs$core$IFn$_invoke$arity$21 = G__12500__21;
G__12500.cljs$core$IFn$_invoke$arity$22 = G__12500__22;
return G__12500;
})()
;

reagent.impl.util.PartialFn.prototype.apply = (function (self__,args12499){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args12499)));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$0 ? self__.pfn.cljs$core$IFn$_invoke$arity$0() : self__.pfn.call(null));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$1 ? self__.pfn.cljs$core$IFn$_invoke$arity$1(a) : self__.pfn.call(null,a));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$2 ? self__.pfn.cljs$core$IFn$_invoke$arity$2(a,b) : self__.pfn.call(null,a,b));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$3 ? self__.pfn.cljs$core$IFn$_invoke$arity$3(a,b,c) : self__.pfn.call(null,a,b,c));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$4 ? self__.pfn.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : self__.pfn.call(null,a,b,c,d));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$5 ? self__.pfn.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : self__.pfn.call(null,a,b,c,d,e));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$6 ? self__.pfn.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : self__.pfn.call(null,a,b,c,d,e,f__$1));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$7 ? self__.pfn.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : self__.pfn.call(null,a,b,c,d,e,f__$1,g));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$8 ? self__.pfn.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$9 ? self__.pfn.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$10 ? self__.pfn.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$11 ? self__.pfn.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$12 ? self__.pfn.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$13 ? self__.pfn.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$14 ? self__.pfn.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$15 ? self__.pfn.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$16 ? self__.pfn.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$17 ? self__.pfn.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$18 ? self__.pfn.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$19 ? self__.pfn.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$20 ? self__.pfn.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.pfn,a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.impl.util.PartialFn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)));
});

reagent.impl.util.PartialFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.PartialFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pfn,cljs.core.cst$sym$f,cljs.core.cst$sym$args], null);
});

reagent.impl.util.PartialFn.cljs$lang$type = true;

reagent.impl.util.PartialFn.cljs$lang$ctorStr = "reagent.impl.util/PartialFn";

reagent.impl.util.PartialFn.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reagent.impl.util/PartialFn");
});

/**
 * Positional factory function for reagent.impl.util/PartialFn.
 */
reagent.impl.util.__GT_PartialFn = (function reagent$impl$util$__GT_PartialFn(pfn,f,args){
return (new reagent.impl.util.PartialFn(pfn,f,args));
});

reagent.impl.util.make_partial_fn = (function reagent$impl$util$make_partial_fn(f,args){
return reagent.impl.util.__GT_PartialFn(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,f,args),f,args);
});
reagent.impl.util.named_QMARK_ = (function reagent$impl$util$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
reagent.impl.util.class_names = (function reagent$impl$util$class_names(var_args){
var G__12505 = arguments.length;
switch (G__12505) {
case 0:
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___12507 = arguments.length;
var i__4731__auto___12508 = (0);
while(true){
if((i__4731__auto___12508 < len__4730__auto___12507)){
args_arr__4751__auto__.push((arguments[i__4731__auto___12508]));

var G__12509 = (i__4731__auto___12508 + (1));
i__4731__auto___12508 = G__12509;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
if(cljs.core.coll_QMARK_(class$)){
var classes = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (c){
if(cljs.core.truth_(c)){
if(reagent.impl.util.named_QMARK_(c)){
return cljs.core.name(c);
} else {
return c;
}
} else {
return null;
}
}),class$);
if(cljs.core.seq(classes)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes);
} else {
return null;
}
} else {
if(reagent.impl.util.named_QMARK_(class$)){
return cljs.core.name(class$);
} else {
return class$;
}
}
});

reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.truth_(a)){
if(cljs.core.truth_(b)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(a))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(b))].join('');
} else {
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(a);
}
} else {
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(b);
}
});

reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rst){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.class_names,reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(a,b),rst);
});

/** @this {Function} */
reagent.impl.util.class_names.cljs$lang$applyTo = (function (seq12502){
var G__12503 = cljs.core.first(seq12502);
var seq12502__$1 = cljs.core.next(seq12502);
var G__12504 = cljs.core.first(seq12502__$1);
var seq12502__$2 = cljs.core.next(seq12502__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12503,G__12504,seq12502__$2);
});

reagent.impl.util.class_names.cljs$lang$maxFixedArity = (2);

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.cst$kw$class,reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p1),cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p2)));
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__5735__auto__ = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__5735__auto__)){
var s1 = temp__5735__auto__;
var temp__5735__auto____$1 = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5735__auto____$1)){
var s2 = temp__5735__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s1,s2], 0));
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.cst$kw$style,style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(var_args){
var G__12514 = arguments.length;
switch (G__12514) {
case 0:
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___12516 = arguments.length;
var i__4731__auto___12517 = (0);
while(true){
if((i__4731__auto___12517 < len__4730__auto___12516)){
args_arr__4751__auto__.push((arguments[i__4731__auto___12517]));

var G__12518 = (i__4731__auto___12517 + (1));
i__4731__auto___12517 = G__12518;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (p){
var temp__5733__auto__ = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(temp__5733__auto__)){
var c = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,cljs.core.cst$kw$class,reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(c));
} else {
return p;
}
});

reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (p1,p2){
if((p1 == null)){
var temp__5733__auto__ = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5733__auto__)){
var c = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.cst$kw$class,reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(c));
} else {
return p2;
}
} else {
if(cljs.core.map_QMARK_(p1)){
} else {
throw (new Error(["Assert failed: ",["Property must be a map, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1], 0))].join(''),"\n","(map? p1)"].join('')));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,reagent.impl.util.merge_style(p1,reagent.impl.util.merge_class(p1,p2))], 0));
}
});

reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (p1,p2,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.merge_props,reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2(p1,p2),ps);
});

/** @this {Function} */
reagent.impl.util.merge_props.cljs$lang$applyTo = (function (seq12511){
var G__12512 = cljs.core.first(seq12511);
var seq12511__$1 = cljs.core.next(seq12511);
var G__12513 = cljs.core.first(seq12511__$1);
var seq12511__$2 = cljs.core.next(seq12511__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12512,G__12513,seq12511__$2);
});

reagent.impl.util.merge_props.cljs$lang$maxFixedArity = (2);

reagent.impl.util._STAR_always_update_STAR_ = false;
reagent.impl.util.force_update = (function reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR__orig_val__12519 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__12520 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__12520;

try{return comp.forceUpdate();
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__12519;
}} else {
return comp.forceUpdate();
}
});
