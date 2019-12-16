// Compiled by ClojureScript 1.10.520 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__20193__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__20190 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__20191 = cljs.core.seq.call(null,vec__20190);
var first__20192 = cljs.core.first.call(null,seq__20191);
var seq__20191__$1 = cljs.core.next.call(null,seq__20191);
var tag = first__20192;
var body = seq__20191__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__20193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20194__i = 0, G__20194__a = new Array(arguments.length -  0);
while (G__20194__i < G__20194__a.length) {G__20194__a[G__20194__i] = arguments[G__20194__i + 0]; ++G__20194__i;}
  args = new cljs.core.IndexedSeq(G__20194__a,0,null);
} 
return G__20193__delegate.call(this,args);};
G__20193.cljs$lang$maxFixedArity = 0;
G__20193.cljs$lang$applyTo = (function (arglist__20195){
var args = cljs.core.seq(arglist__20195);
return G__20193__delegate(args);
});
G__20193.cljs$core$IFn$_invoke$arity$variadic = G__20193__delegate;
return G__20193;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4523__auto__ = (function sablono$core$update_arglists_$_iter__20196(s__20197){
return (new cljs.core.LazySeq(null,(function (){
var s__20197__$1 = s__20197;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__20197__$1);
if(temp__5735__auto__){
var s__20197__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20197__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20197__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20199 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20198 = (0);
while(true){
if((i__20198 < size__4522__auto__)){
var args = cljs.core._nth.call(null,c__4521__auto__,i__20198);
cljs.core.chunk_append.call(null,b__20199,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__20200 = (i__20198 + (1));
i__20198 = G__20200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20199),sablono$core$update_arglists_$_iter__20196.call(null,cljs.core.chunk_rest.call(null,s__20197__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20199),null);
}
} else {
var args = cljs.core.first.call(null,s__20197__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__20196.call(null,cljs.core.rest.call(null,s__20197__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20206 = arguments.length;
var i__4731__auto___20207 = (0);
while(true){
if((i__4731__auto___20207 < len__4730__auto___20206)){
args__4736__auto__.push((arguments[i__4731__auto___20207]));

var G__20208 = (i__4731__auto___20207 + (1));
i__4731__auto___20207 = G__20208;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4523__auto__ = (function sablono$core$iter__20202(s__20203){
return (new cljs.core.LazySeq(null,(function (){
var s__20203__$1 = s__20203;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__20203__$1);
if(temp__5735__auto__){
var s__20203__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20203__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20203__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20205 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20204 = (0);
while(true){
if((i__20204 < size__4522__auto__)){
var style = cljs.core._nth.call(null,c__4521__auto__,i__20204);
cljs.core.chunk_append.call(null,b__20205,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__20209 = (i__20204 + (1));
i__20204 = G__20209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20205),sablono$core$iter__20202.call(null,cljs.core.chunk_rest.call(null,s__20203__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20205),null);
}
} else {
var style = cljs.core.first.call(null,s__20203__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__20202.call(null,cljs.core.rest.call(null,s__20203__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq20201){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20201));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to20210 = (function sablono$core$link_to20210(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20213 = arguments.length;
var i__4731__auto___20214 = (0);
while(true){
if((i__4731__auto___20214 < len__4730__auto___20213)){
args__4736__auto__.push((arguments[i__4731__auto___20214]));

var G__20215 = (i__4731__auto___20214 + (1));
i__4731__auto___20214 = G__20215;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to20210.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.link_to20210.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to20210.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to20210.cljs$lang$applyTo = (function (seq20211){
var G__20212 = cljs.core.first.call(null,seq20211);
var seq20211__$1 = cljs.core.next.call(null,seq20211);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20212,seq20211__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to20210);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to20216 = (function sablono$core$mail_to20216(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20223 = arguments.length;
var i__4731__auto___20224 = (0);
while(true){
if((i__4731__auto___20224 < len__4730__auto___20223)){
args__4736__auto__.push((arguments[i__4731__auto___20224]));

var G__20225 = (i__4731__auto___20224 + (1));
i__4731__auto___20224 = G__20225;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to20216.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.mail_to20216.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__20219){
var vec__20220 = p__20219;
var content = cljs.core.nth.call(null,vec__20220,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4131__auto__ = content;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to20216.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to20216.cljs$lang$applyTo = (function (seq20217){
var G__20218 = cljs.core.first.call(null,seq20217);
var seq20217__$1 = cljs.core.next.call(null,seq20217);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20218,seq20217__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to20216);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list20226 = (function sablono$core$unordered_list20226(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function sablono$core$unordered_list20226_$_iter__20227(s__20228){
return (new cljs.core.LazySeq(null,(function (){
var s__20228__$1 = s__20228;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__20228__$1);
if(temp__5735__auto__){
var s__20228__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20228__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20228__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20230 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20229 = (0);
while(true){
if((i__20229 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__20229);
cljs.core.chunk_append.call(null,b__20230,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20231 = (i__20229 + (1));
i__20229 = G__20231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20230),sablono$core$unordered_list20226_$_iter__20227.call(null,cljs.core.chunk_rest.call(null,s__20228__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20230),null);
}
} else {
var x = cljs.core.first.call(null,s__20228__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list20226_$_iter__20227.call(null,cljs.core.rest.call(null,s__20228__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list20226);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list20232 = (function sablono$core$ordered_list20232(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function sablono$core$ordered_list20232_$_iter__20233(s__20234){
return (new cljs.core.LazySeq(null,(function (){
var s__20234__$1 = s__20234;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__20234__$1);
if(temp__5735__auto__){
var s__20234__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20234__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20234__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20236 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20235 = (0);
while(true){
if((i__20235 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__20235);
cljs.core.chunk_append.call(null,b__20236,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20237 = (i__20235 + (1));
i__20235 = G__20237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20236),sablono$core$ordered_list20232_$_iter__20233.call(null,cljs.core.chunk_rest.call(null,s__20234__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20236),null);
}
} else {
var x = cljs.core.first.call(null,s__20234__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list20232_$_iter__20233.call(null,cljs.core.rest.call(null,s__20234__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list20232);
/**
 * Create an image element.
 */
sablono.core.image20238 = (function sablono$core$image20238(var_args){
var G__20240 = arguments.length;
switch (G__20240) {
case 1:
return sablono.core.image20238.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image20238.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image20238.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image20238.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image20238.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image20238);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__20242_SHARP_,p2__20243_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20242_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__20243_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__20244_SHARP_,p2__20245_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20244_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__20245_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__20247 = arguments.length;
switch (G__20247) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field20249 = (function sablono$core$color_field20249(var_args){
var G__20251 = arguments.length;
switch (G__20251) {
case 1:
return sablono.core.color_field20249.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field20249.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field20249.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__20180__auto__);
});

sablono.core.color_field20249.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.color_field20249.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field20249);

/**
 * Creates a date input field.
 */
sablono.core.date_field20252 = (function sablono$core$date_field20252(var_args){
var G__20254 = arguments.length;
switch (G__20254) {
case 1:
return sablono.core.date_field20252.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field20252.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field20252.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__20180__auto__);
});

sablono.core.date_field20252.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.date_field20252.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field20252);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field20255 = (function sablono$core$datetime_field20255(var_args){
var G__20257 = arguments.length;
switch (G__20257) {
case 1:
return sablono.core.datetime_field20255.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field20255.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field20255.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__20180__auto__);
});

sablono.core.datetime_field20255.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.datetime_field20255.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field20255);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field20258 = (function sablono$core$datetime_local_field20258(var_args){
var G__20260 = arguments.length;
switch (G__20260) {
case 1:
return sablono.core.datetime_local_field20258.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field20258.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field20258.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__20180__auto__);
});

sablono.core.datetime_local_field20258.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.datetime_local_field20258.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field20258);

/**
 * Creates a email input field.
 */
sablono.core.email_field20261 = (function sablono$core$email_field20261(var_args){
var G__20263 = arguments.length;
switch (G__20263) {
case 1:
return sablono.core.email_field20261.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field20261.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field20261.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__20180__auto__);
});

sablono.core.email_field20261.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.email_field20261.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field20261);

/**
 * Creates a file input field.
 */
sablono.core.file_field20264 = (function sablono$core$file_field20264(var_args){
var G__20266 = arguments.length;
switch (G__20266) {
case 1:
return sablono.core.file_field20264.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field20264.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field20264.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__20180__auto__);
});

sablono.core.file_field20264.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.file_field20264.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field20264);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field20267 = (function sablono$core$hidden_field20267(var_args){
var G__20269 = arguments.length;
switch (G__20269) {
case 1:
return sablono.core.hidden_field20267.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field20267.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field20267.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__20180__auto__);
});

sablono.core.hidden_field20267.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.hidden_field20267.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field20267);

/**
 * Creates a month input field.
 */
sablono.core.month_field20270 = (function sablono$core$month_field20270(var_args){
var G__20272 = arguments.length;
switch (G__20272) {
case 1:
return sablono.core.month_field20270.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field20270.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field20270.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__20180__auto__);
});

sablono.core.month_field20270.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.month_field20270.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field20270);

/**
 * Creates a number input field.
 */
sablono.core.number_field20273 = (function sablono$core$number_field20273(var_args){
var G__20275 = arguments.length;
switch (G__20275) {
case 1:
return sablono.core.number_field20273.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field20273.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field20273.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__20180__auto__);
});

sablono.core.number_field20273.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.number_field20273.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field20273);

/**
 * Creates a password input field.
 */
sablono.core.password_field20276 = (function sablono$core$password_field20276(var_args){
var G__20278 = arguments.length;
switch (G__20278) {
case 1:
return sablono.core.password_field20276.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field20276.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field20276.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__20180__auto__);
});

sablono.core.password_field20276.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.password_field20276.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field20276);

/**
 * Creates a range input field.
 */
sablono.core.range_field20279 = (function sablono$core$range_field20279(var_args){
var G__20281 = arguments.length;
switch (G__20281) {
case 1:
return sablono.core.range_field20279.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field20279.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field20279.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__20180__auto__);
});

sablono.core.range_field20279.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.range_field20279.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field20279);

/**
 * Creates a search input field.
 */
sablono.core.search_field20282 = (function sablono$core$search_field20282(var_args){
var G__20284 = arguments.length;
switch (G__20284) {
case 1:
return sablono.core.search_field20282.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field20282.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field20282.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__20180__auto__);
});

sablono.core.search_field20282.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.search_field20282.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field20282);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field20285 = (function sablono$core$tel_field20285(var_args){
var G__20287 = arguments.length;
switch (G__20287) {
case 1:
return sablono.core.tel_field20285.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field20285.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field20285.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__20180__auto__);
});

sablono.core.tel_field20285.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.tel_field20285.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field20285);

/**
 * Creates a text input field.
 */
sablono.core.text_field20288 = (function sablono$core$text_field20288(var_args){
var G__20290 = arguments.length;
switch (G__20290) {
case 1:
return sablono.core.text_field20288.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field20288.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field20288.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__20180__auto__);
});

sablono.core.text_field20288.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.text_field20288.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field20288);

/**
 * Creates a time input field.
 */
sablono.core.time_field20291 = (function sablono$core$time_field20291(var_args){
var G__20293 = arguments.length;
switch (G__20293) {
case 1:
return sablono.core.time_field20291.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field20291.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field20291.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__20180__auto__);
});

sablono.core.time_field20291.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.time_field20291.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field20291);

/**
 * Creates a url input field.
 */
sablono.core.url_field20294 = (function sablono$core$url_field20294(var_args){
var G__20296 = arguments.length;
switch (G__20296) {
case 1:
return sablono.core.url_field20294.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field20294.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field20294.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__20180__auto__);
});

sablono.core.url_field20294.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.url_field20294.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field20294);

/**
 * Creates a week input field.
 */
sablono.core.week_field20297 = (function sablono$core$week_field20297(var_args){
var G__20299 = arguments.length;
switch (G__20299) {
case 1:
return sablono.core.week_field20297.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field20297.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field20297.cljs$core$IFn$_invoke$arity$1 = (function (name__20180__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__20180__auto__);
});

sablono.core.week_field20297.cljs$core$IFn$_invoke$arity$2 = (function (name__20180__auto__,value__20181__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__20180__auto__,value__20181__auto__);
});

sablono.core.week_field20297.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field20297);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box20317 = (function sablono$core$check_box20317(var_args){
var G__20319 = arguments.length;
switch (G__20319) {
case 1:
return sablono.core.check_box20317.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box20317.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box20317.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box20317.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box20317.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box20317.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box20317.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box20317);
/**
 * Creates a radio button.
 */
sablono.core.radio_button20321 = (function sablono$core$radio_button20321(var_args){
var G__20323 = arguments.length;
switch (G__20323) {
case 1:
return sablono.core.radio_button20321.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button20321.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button20321.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button20321.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button20321.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button20321.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button20321.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button20321);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options20325 = (function sablono$core$select_options20325(coll){
var iter__4523__auto__ = (function sablono$core$select_options20325_$_iter__20326(s__20327){
return (new cljs.core.LazySeq(null,(function (){
var s__20327__$1 = s__20327;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__20327__$1);
if(temp__5735__auto__){
var s__20327__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20327__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20327__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20329 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20328 = (0);
while(true){
if((i__20328 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__20328);
cljs.core.chunk_append.call(null,b__20329,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20330 = x;
var text = cljs.core.nth.call(null,vec__20330,(0),null);
var val = cljs.core.nth.call(null,vec__20330,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20330,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options20325.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__20336 = (i__20328 + (1));
i__20328 = G__20336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20329),sablono$core$select_options20325_$_iter__20326.call(null,cljs.core.chunk_rest.call(null,s__20327__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20329),null);
}
} else {
var x = cljs.core.first.call(null,s__20327__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20333 = x;
var text = cljs.core.nth.call(null,vec__20333,(0),null);
var val = cljs.core.nth.call(null,vec__20333,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20333,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options20325.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options20325_$_iter__20326.call(null,cljs.core.rest.call(null,s__20327__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options20325);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down20337 = (function sablono$core$drop_down20337(var_args){
var G__20339 = arguments.length;
switch (G__20339) {
case 2:
return sablono.core.drop_down20337.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down20337.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down20337.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down20337.call(null,name,options,null);
});

sablono.core.drop_down20337.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down20337.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down20337);
/**
 * Creates a text area element.
 */
sablono.core.text_area20341 = (function sablono$core$text_area20341(var_args){
var G__20343 = arguments.length;
switch (G__20343) {
case 1:
return sablono.core.text_area20341.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area20341.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area20341.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area20341.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area20341.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area20341);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label20345 = (function sablono$core$label20345(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label20345);
/**
 * Creates a submit button.
 */
sablono.core.submit_button20346 = (function sablono$core$submit_button20346(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button20346);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button20347 = (function sablono$core$reset_button20347(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button20347);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to20348 = (function sablono$core$form_to20348(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20355 = arguments.length;
var i__4731__auto___20356 = (0);
while(true){
if((i__4731__auto___20356 < len__4730__auto___20355)){
args__4736__auto__.push((arguments[i__4731__auto___20356]));

var G__20357 = (i__4731__auto___20356 + (1));
i__4731__auto___20356 = G__20357;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to20348.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.form_to20348.cljs$core$IFn$_invoke$arity$variadic = (function (p__20351,body){
var vec__20352 = p__20351;
var method = cljs.core.nth.call(null,vec__20352,(0),null);
var action = cljs.core.nth.call(null,vec__20352,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to20348.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to20348.cljs$lang$applyTo = (function (seq20349){
var G__20350 = cljs.core.first.call(null,seq20349);
var seq20349__$1 = cljs.core.next.call(null,seq20349);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20350,seq20349__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to20348);

//# sourceMappingURL=core.js.map
