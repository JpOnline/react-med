// Compiled by ClojureScript 1.10.520 {}
goog.provide('zprint.zutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
zprint.zutil.down_STAR_ = clojure.zip.down;
zprint.zutil.up_STAR_ = clojure.zip.up;
zprint.zutil.right_STAR_ = clojure.zip.right;
zprint.zutil.left_STAR_ = clojure.zip.left;
zprint.zutil.next_STAR_ = clojure.zip.next;
zprint.zutil.prev_STAR_ = clojure.zip.prev;
zprint.zutil.replace_STAR_ = clojure.zip.replace;
zprint.zutil.edn_STAR_ = rewrite_clj.zip.base.edn_STAR_;
zprint.zutil.sexpr = rewrite_clj.zip.base.sexpr;
zprint.zutil.string = rewrite_clj.zip.base.string;
zprint.zutil.tag = rewrite_clj.zip.base.tag;
zprint.zutil.skip = rewrite_clj.zip.whitespace.skip;
zprint.zutil.skip_whitespace = rewrite_clj.zip.whitespace.skip_whitespace;
zprint.zutil.whitespace_QMARK_ = rewrite_clj.zip.whitespace.whitespace_QMARK_;
zprint.zutil.whitespace_or_comment_QMARK_ = rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_;
zprint.zutil.length = rewrite_clj.zip.base.length;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__25884 = zprint.zutil.find_root_and_path.call(null,zloc);
var _ = cljs.core.nth.call(null,vec__25884,(0),null);
var zpath = cljs.core.nth.call(null,vec__25884,(1),null);
return cljs.core._EQ_.call(null,zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:((zprint.zutil.zfocus.call(null,zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return rewrite_clj.zip.seq_QMARK_.call(null,zloc);
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return zprint.zutil.tag.call(null,zloc);
});
/**
 * Turn an uneval zloc with #_ starting it into a zipper.
 */
zprint.zutil.zparseuneval = (function zprint$zutil$zparseuneval(zloc){
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,clojure.string.triml.call(null,clojure.string.replace_first.call(null,zprint.zutil.string.call(null,zloc),/#_/,""))));
});
/**
 * Turn a zloc into an #_ uneval zipper.
 */
zprint.zutil.zcreateuneval = (function zprint$zutil$zcreateuneval(zloc){
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,clojure.string.triml.call(null,["#_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zutil.string.call(null,zloc))].join(''))));
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return zprint.zutil.string.call(null,zloc);
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the first non-whitespace and non-comment zloc inside of this zloc.
 */
zprint.zutil.zfirst_no_comment = (function zprint$zutil$zfirst_no_comment(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5733__auto__ = zprint.zutil.zfirst.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var first_loc = temp__5733__auto__;
var temp__5733__auto____$1 = zprint.zutil.right_STAR_.call(null,first_loc);
if(cljs.core.truth_(temp__5733__auto____$1)){
var nloc = temp__5733__auto____$1;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__25887 = zprint.zutil.zfirst.call(null,zloc);
var G__25887__$1 = (((G__25887 == null))?null:zprint.zutil.right_STAR_.call(null,G__25887));
var G__25887__$2 = (((G__25887__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__25887__$1));
var G__25887__$3 = (((G__25887__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__25887__$2));
if((G__25887__$3 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__25887__$3);
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__25888 = zprint.zutil.zfirst.call(null,zloc);
var G__25888__$1 = (((G__25888 == null))?null:zprint.zutil.right_STAR_.call(null,G__25888));
var G__25888__$2 = (((G__25888__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__25888__$1));
var G__25888__$3 = (((G__25888__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__25888__$2));
var G__25888__$4 = (((G__25888__$3 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__25888__$3));
var G__25888__$5 = (((G__25888__$4 == null))?null:zprint.zutil.right_STAR_.call(null,G__25888__$4));
if((G__25888__$5 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__25888__$5);
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5733__auto__ = zprint.zutil.right_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__25889 = zprint.zutil.zrightnws.call(null,nloc);
var G__25890 = nloc;
nloc = G__25889;
ploc = G__25890;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5733__auto__ = zprint.zutil.left_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__25891 = zprint.zutil.zleftnws.call(null,nloc);
var G__25892 = nloc;
nloc = G__25891;
ploc = G__25892;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.znextnws = (function zprint$zutil$znextnws(zloc){
if(cljs.core.truth_(rewrite_clj.zip.end_QMARK_.call(null,zloc))){
return zloc;
} else {
var temp__5733__auto__ = zprint.zutil.next_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.next_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5733__auto__ = zprint.zutil.prev_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var ploc = temp__5733__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc);
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = zprint.zutil.skip_whitespace.call(null,zprint.zutil.down_STAR_.call(null,zloc));
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.call(null,i,(0))))){
return nloc;
} else {
var G__25893 = zprint.zutil.zrightnws.call(null,nloc);
var G__25894 = (i - (1));
nloc = G__25893;
i = G__25894;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = zprint.zutil.skip_whitespace.call(null,zprint.zutil.down_STAR_.call(null,zloc));
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_(zthing_QMARK_.call(null,nloc))){
return i;
} else {
var G__25895 = zprint.zutil.zrightnws.call(null,nloc);
var G__25896 = (i + (1));
nloc = G__25895;
i = G__25896;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__25897 = zprint.zutil.right_STAR_.call(null,nloc);
var G__25898 = (function (){var temp__5733__auto__ = ((cljs.core.not.call(null,(function (){var and__4120__auto__ = zprint.zutil.whitespace_QMARK_.call(null,nloc);
if(cljs.core.truth_(and__4120__auto__)){
return (!(cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"newline","newline",1790071323))));
} else {
return and__4120__auto__;
}
})()))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__25897;
out = G__25898;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__25899 = zprint.zutil.right_STAR_.call(null,nloc);
var G__25900 = (function (){var temp__5733__auto__ = ((cljs.core.not.call(null,zprint.zutil.whitespace_QMARK_.call(null,nloc)))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__25899;
out = G__25900;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__25901 = zprint.zutil.right_STAR_.call(null,nloc);
var G__25902 = cljs.core.conj.call(null,out,zfn.call(null,nloc));
nloc = G__25901;
out = G__25902;
continue;
}
break;
}
});
/**
 * Apply a function to every non-whitespace zloc to right of zloc.
 */
zprint.zutil.zmap_right = (function zprint$zutil$zmap_right(zfn,zloc){
var nloc = zprint.zutil.right_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__25903 = zprint.zutil.right_STAR_.call(null,nloc);
var G__25904 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,nloc))?out:cljs.core.conj.call(null,out,zfn.call(null,nloc)));
nloc = G__25903;
out = G__25904;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap.call(null,cljs.core.identity,zloc);
});
/**
 * How many non-whitespace children does zloc have?
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
return cljs.core.count.call(null,zprint.zutil.zseqnws.call(null,zloc));
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,zprint.zutil.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,zprint.zutil.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__25905 = zprint.zutil.up_STAR_.call(null,nloc);
var G__25906 = (0);
var G__25907 = cljs.core.cons.call(null,left,out);
nloc = G__25905;
left = G__25906;
out = G__25907;
continue;
}
} else {
var G__25908 = zprint.zutil.left_STAR_.call(null,nloc);
var G__25909 = (left + (1));
var G__25910 = out;
nloc = G__25908;
left = G__25909;
out = G__25910;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,zprint.zutil.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,zprint.zutil.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__25911 = zprint.zutil.up_STAR_.call(null,nloc);
var G__25912 = (0);
var G__25913 = cljs.core.cons.call(null,left,out);
nloc = G__25911;
left = G__25912;
out = G__25913;
continue;
}
} else {
var G__25914 = zprint.zutil.left_STAR_.call(null,nloc);
var G__25915 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,nloc))?left:(left + (1)));
var G__25916 = out;
nloc = G__25914;
left = G__25915;
out = G__25916;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not.call(null,rewrite_clj.zip.up.call(null,nloc))){
return nloc;
} else {
var G__25917 = rewrite_clj.zip.up.call(null,nloc);
nloc = G__25917;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__25918 = zprint.zutil.right_STAR_.call(null,nloc);
var G__25919 = (remaining_right - (1));
nloc = G__25918;
remaining_right = G__25919;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.call(null,zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost.call(null,nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),zprint.zutil.tag.call(null,zloc))) && (cljs.core.not.call(null,rewrite_clj.node.printable_only_QMARK_.call(null,rewrite_clj.zip.node.call(null,zloc)))));
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,zloc),":");
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return (zprint.zutil.sexpr.call(null,zloc) instanceof cljs.core.Symbol);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return (rewrite_clj.zip.sexpr.call(null,zloc) == null);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.zsymbol_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.z_coll_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,"..."));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = rewrite_clj.zip.tag.call(null,zloc);
if(((cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))){
return zprint.zutil.zconstant_QMARK_.call(null,zprint.zutil.zfirst.call(null,zloc));
} else {
var and__4120__auto__ = cljs.core.not.call(null,zprint.zutil.z_coll_QMARK_.call(null,zloc));
if(and__4120__auto__){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.truth_(zprint.zutil.zsexpr_QMARK_.call(null,zloc))){
var sexpr = zprint.zutil.sexpr.call(null,zloc);
return ((typeof sexpr === 'string') || (typeof sexpr === 'number'));
} else {
return null;
}
}
} else {
return and__4120__auto__;
}
}
});
/**
 * If this is an inline comment, returns the amount of space that
 *   was between this and the previous element.  That means that if
 *   we go left, we get something other than whitespace before a
 *   newline.  Assumes zloc is a comment.
 */
zprint.zutil.zinlinecomment_QMARK_ = (function zprint$zutil$zinlinecomment_QMARK_(zloc){
var nloc = zprint.zutil.left_STAR_.call(null,zloc);
var spaces = (0);
while(true){
var tnloc = zprint.zutil.tag.call(null,nloc);
if((tnloc == null)){
return null;
} else {
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"newline","newline",1790071323))){
return null;
} else {
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"comment","comment",532206069))){
return null;
} else {
if(cljs.core.not_EQ_.call(null,tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
return spaces;
} else {
var G__25920 = zprint.zutil.left_STAR_.call(null,nloc);
var G__25921 = (zprint.zutil.length.call(null,nloc) + spaces);
nloc = G__25920;
spaces = G__25921;
continue;

}
}
}
}
break;
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = rewrite_clj.zip.down.call(null,zloc);
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__4120__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,nloc);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,nloc),":doc");
} else {
return and__4120__auto__;
}
})())){
if(typeof zprint.zutil.sexpr.call(null,rewrite_clj.zip.right.call(null,nloc)) === 'string'){
return rewrite_clj.zip.right.call(null,nloc);
} else {
return null;
}
} else {
var G__25922 = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,nloc));
nloc = G__25922;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = rewrite_clj.zip.string.call(null,rewrite_clj.zip.down.call(null,zloc));
if(((cljs.core._EQ_.call(null,fn_name,"defn")) || (cljs.core._EQ_.call(null,fn_name,"defmacro")))){
var docloc = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(typeof zprint.zutil.sexpr.call(null,docloc) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,fn_name,"def")){
var maploc = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(cljs.core.truth_(rewrite_clj.zip.map_QMARK_.call(null,maploc))){
return zprint.zutil.find_doc_in_map.call(null,maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5733__auto__ = zprint.zutil.find_docstring.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var doc_zloc = temp__5733__auto__;
var new_doc_zloc = zprint.zutil.replace_STAR_.call(null,doc_zloc,rewrite_clj.zip.node.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zutil.sexpr.call(null,doc_zloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join('')))));
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.zip.root.call(null,new_doc_zloc));
} else {
return zloc;
}
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(pair_seq){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,null,cljs.core.name.call(null,named));
} else {
return cljs.core.keyword.call(null,null,cljs.core.name.call(null,named));
}
});
var ns = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__25926 = cljs.core.first.call(null,pair_seq__$1);
var seq__25927 = cljs.core.seq.call(null,vec__25926);
var first__25928 = cljs.core.first.call(null,seq__25927);
var seq__25927__$1 = cljs.core.next.call(null,seq__25927);
var k = first__25928;
var rest_of_pair = seq__25927__$1;
var pair = vec__25926;
var current_ns = (cljs.core.truth_((function (){var and__4120__auto__ = rest_of_pair;
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not_EQ_.call(null,cljs.core.subs.call(null,rewrite_clj.zip.string.call(null,k),(0),(2)),"::");
if(and__4120__auto____$1){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_.call(null,k);
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?cljs.core.namespace.call(null,rewrite_clj.zip.sexpr.call(null,k)):null);
if(cljs.core.not.call(null,k)){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns)){
if(cljs.core._EQ_.call(null,ns,current_ns)){
var G__25929 = ns;
var G__25930 = cljs.core.next.call(null,pair_seq__$1);
var G__25931 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns = G__25929;
pair_seq__$1 = G__25930;
out = G__25931;
continue;
} else {
return null;
}
} else {
var G__25932 = current_ns;
var G__25933 = cljs.core.next.call(null,pair_seq__$1);
var G__25934 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns = G__25932;
pair_seq__$1 = G__25933;
out = G__25934;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__25935 = ns;
var G__25936 = cljs.core.next.call(null,pair_seq__$1);
var G__25937 = cljs.core.conj.call(null,out,pair);
ns = G__25935;
pair_seq__$1 = G__25936;
out = G__25937;
continue;
} else {
return null;
}
}
}
break;
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring_orig_val__25938 = zprint.zfns.zstring;
var znumstr_orig_val__25939 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__25940 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__25941 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__25942 = zprint.zfns.zsexpr;
var zseqnws_orig_val__25943 = zprint.zfns.zseqnws;
var zmap_right_orig_val__25944 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__25945 = zprint.zfns.zfocus_style;
var zfirst_orig_val__25946 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__25947 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__25948 = zprint.zfns.zsecond;
var zthird_orig_val__25949 = zprint.zfns.zthird;
var zfourth_orig_val__25950 = zprint.zfns.zfourth;
var znthnext_orig_val__25951 = zprint.zfns.znthnext;
var zcount_orig_val__25952 = zprint.zfns.zcount;
var zmap_orig_val__25953 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__25954 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__25955 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__25956 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__25957 = zprint.zfns.zfocus;
var zfind_path_orig_val__25958 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__25959 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__25960 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__25961 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__25962 = zprint.zfns.zmap_QMARK_;
var zset_QMARK__orig_val__25963 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__25964 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__25965 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__25966 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__25967 = zprint.zfns.ztag;
var zparseuneval_orig_val__25968 = zprint.zfns.zparseuneval;
var zlast_orig_val__25969 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__25970 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__25971 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__25972 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__25973 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__25974 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__25975 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__25976 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__25977 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__25978 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__25979 = zprint.zfns.zmap_all;
var zpromise_QMARK__orig_val__25980 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__25981 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__25982 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__25983 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__25984 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__25985 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__25986 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__25987 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__25988 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__25989 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__25990 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__25991 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__25992 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__25993 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__25994 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__25995 = zprint.zfns.zfind;
var zstring_temp_val__25996 = rewrite_clj.zip.string;
var znumstr_temp_val__25997 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__25998 = cljs.core.constantly.call(null,false);
var zcomment_QMARK__temp_val__25999 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__26000 = zprint.zutil.sexpr;
var zseqnws_temp_val__26001 = zprint.zutil.zseqnws;
var zmap_right_temp_val__26002 = zprint.zutil.zmap_right;
var zfocus_style_temp_val__26003 = zprint.zutil.zfocus_style;
var zfirst_temp_val__26004 = zprint.zutil.zfirst;
var zfirst_no_comment_temp_val__26005 = zprint.zutil.zfirst_no_comment;
var zsecond_temp_val__26006 = zprint.zutil.zsecond;
var zthird_temp_val__26007 = zprint.zutil.zthird;
var zfourth_temp_val__26008 = zprint.zutil.zfourth;
var znthnext_temp_val__26009 = zprint.zutil.znthnext;
var zcount_temp_val__26010 = zprint.zutil.zcount;
var zmap_temp_val__26011 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__26012 = zprint.zutil.zmap_w_nl;
var zanonfn_QMARK__temp_val__26013 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__26014 = cljs.core.constantly.call(null,false);
var zfocus_temp_val__26015 = zprint.zutil.zfocus;
var zfind_path_temp_val__26016 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__26017 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__26018 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__26019 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__26020 = rewrite_clj.zip.map_QMARK_;
var zset_QMARK__temp_val__26021 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__26022 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__26023 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__26024 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__26025 = zprint.zutil.ztag;
var zparseuneval_temp_val__26026 = zprint.zutil.zparseuneval;
var zlast_temp_val__26027 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__26028 = cljs.core.constantly.call(null,false);
var zatom_QMARK__temp_val__26029 = cljs.core.constantly.call(null,false);
var zderef_temp_val__26030 = cljs.core.constantly.call(null,false);
var zrecord_QMARK__temp_val__26031 = cljs.core.constantly.call(null,false);
var zns_QMARK__temp_val__26032 = cljs.core.constantly.call(null,false);
var zobj_to_vec_temp_val__26033 = cljs.core.constantly.call(null,null);
var zexpandarray_temp_val__26034 = cljs.core.constantly.call(null,null);
var znewline_QMARK__temp_val__26035 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__26036 = zprint.zutil.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__26037 = zprint.zutil.zmap_all;
var zpromise_QMARK__temp_val__26038 = cljs.core.constantly.call(null,false);
var zfuture_QMARK__temp_val__26039 = cljs.core.constantly.call(null,false);
var zdelay_QMARK__temp_val__26040 = cljs.core.constantly.call(null,false);
var zkeyword_QMARK__temp_val__26041 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__26042 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__26043 = cljs.core.constantly.call(null,false);
var zreader_macro_QMARK__temp_val__26044 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__26045 = cljs.core.constantly.call(null,null);
var zdotdotdot_temp_val__26046 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__26047 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__26048 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__26049 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__26050 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__26051 = zprint.zutil.zlift_ns;
var zinlinecomment_QMARK__temp_val__26052 = zprint.zutil.zinlinecomment_QMARK_;
var zfind_temp_val__26053 = zprint.zutil.zfind;
zprint.zfns.zstring = zstring_temp_val__25996;

zprint.zfns.znumstr = znumstr_temp_val__25997;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__25998;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__25999;

zprint.zfns.zsexpr = zsexpr_temp_val__26000;

zprint.zfns.zseqnws = zseqnws_temp_val__26001;

zprint.zfns.zmap_right = zmap_right_temp_val__26002;

zprint.zfns.zfocus_style = zfocus_style_temp_val__26003;

zprint.zfns.zfirst = zfirst_temp_val__26004;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__26005;

zprint.zfns.zsecond = zsecond_temp_val__26006;

zprint.zfns.zthird = zthird_temp_val__26007;

zprint.zfns.zfourth = zfourth_temp_val__26008;

zprint.zfns.znthnext = znthnext_temp_val__26009;

zprint.zfns.zcount = zcount_temp_val__26010;

zprint.zfns.zmap = zmap_temp_val__26011;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__26012;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__26013;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__26014;

zprint.zfns.zfocus = zfocus_temp_val__26015;

zprint.zfns.zfind_path = zfind_path_temp_val__26016;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__26017;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__26018;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__26019;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__26020;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__26021;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__26022;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__26023;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__26024;

zprint.zfns.ztag = ztag_temp_val__26025;

zprint.zfns.zparseuneval = zparseuneval_temp_val__26026;

zprint.zfns.zlast = zlast_temp_val__26027;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__26028;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__26029;

zprint.zfns.zderef = zderef_temp_val__26030;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__26031;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__26032;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__26033;

zprint.zfns.zexpandarray = zexpandarray_temp_val__26034;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__26035;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__26036;

zprint.zfns.zmap_all = zmap_all_temp_val__26037;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__26038;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__26039;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__26040;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__26041;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__26042;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__26043;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__26044;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__26045;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__26046;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__26047;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__26048;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__26049;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__26050;

zprint.zfns.zlift_ns = zlift_ns_temp_val__26051;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__26052;

zprint.zfns.zfind = zfind_temp_val__26053;

try{return body_fn.call(null);
}finally {zprint.zfns.zfind = zfind_orig_val__25995;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__25994;

zprint.zfns.zlift_ns = zlift_ns_orig_val__25993;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__25992;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__25991;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__25990;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__25989;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__25988;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__25987;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__25986;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__25985;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__25984;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__25983;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__25982;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__25981;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__25980;

zprint.zfns.zmap_all = zmap_all_orig_val__25979;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__25978;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__25977;

zprint.zfns.zexpandarray = zexpandarray_orig_val__25976;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__25975;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__25974;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__25973;

zprint.zfns.zderef = zderef_orig_val__25972;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__25971;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__25970;

zprint.zfns.zlast = zlast_orig_val__25969;

zprint.zfns.zparseuneval = zparseuneval_orig_val__25968;

zprint.zfns.ztag = ztag_orig_val__25967;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__25966;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__25965;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__25964;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__25963;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__25962;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__25961;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__25960;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__25959;

zprint.zfns.zfind_path = zfind_path_orig_val__25958;

zprint.zfns.zfocus = zfocus_orig_val__25957;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__25956;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__25955;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__25954;

zprint.zfns.zmap = zmap_orig_val__25953;

zprint.zfns.zcount = zcount_orig_val__25952;

zprint.zfns.znthnext = znthnext_orig_val__25951;

zprint.zfns.zfourth = zfourth_orig_val__25950;

zprint.zfns.zthird = zthird_orig_val__25949;

zprint.zfns.zsecond = zsecond_orig_val__25948;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__25947;

zprint.zfns.zfirst = zfirst_orig_val__25946;

zprint.zfns.zfocus_style = zfocus_style_orig_val__25945;

zprint.zfns.zmap_right = zmap_right_orig_val__25944;

zprint.zfns.zseqnws = zseqnws_orig_val__25943;

zprint.zfns.zsexpr = zsexpr_orig_val__25942;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__25941;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__25940;

zprint.zfns.znumstr = znumstr_orig_val__25939;

zprint.zfns.zstring = zstring_orig_val__25938;
}});

//# sourceMappingURL=zutil.js.map
