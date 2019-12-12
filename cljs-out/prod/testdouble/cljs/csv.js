// Compiled by ClojureScript 1.10.520 {}
goog.provide('testdouble.cljs.csv');
goog.require('cljs.core');
goog.require('clojure.string');
testdouble.cljs.csv.escape_quotes = (function testdouble$cljs$csv$escape_quotes(s){
return clojure.string.replace.call(null,s,"\"","\"\"");
});
testdouble.cljs.csv.wrap_in_quotes = (function testdouble$cljs$csv$wrap_in_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(testdouble.cljs.csv.escape_quotes.call(null,s)),"\""].join('');
});
testdouble.cljs.csv.separate = (function testdouble$cljs$csv$separate(data,separator,quote_QMARK_){
return clojure.string.join.call(null,separator,(function (){var G__14769 = data;
var G__14769__$1 = cljs.core.map.call(null,cljs.core.str,G__14769)
;
if(cljs.core.truth_(quote_QMARK_)){
return cljs.core.map.call(null,testdouble.cljs.csv.wrap_in_quotes,G__14769__$1);
} else {
return G__14769__$1;
}
})());
});
testdouble.cljs.csv.write_data = (function testdouble$cljs$csv$write_data(data,separator,newline,quote_QMARK_){
return clojure.string.join.call(null,newline,cljs.core.map.call(null,(function (p1__14770_SHARP_){
return testdouble.cljs.csv.separate.call(null,p1__14770_SHARP_,separator,quote_QMARK_);
}),data));
});
testdouble.cljs.csv.conj_in = (function testdouble$cljs$csv$conj_in(coll,index,x){
return cljs.core.assoc.call(null,coll,index,cljs.core.conj.call(null,cljs.core.nth.call(null,coll,index),x));
});
testdouble.cljs.csv.newlines = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lf","lf",1923784290),"\n",new cljs.core.Keyword(null,"cr+lf","cr+lf",486534798),"\r\n"], null);
testdouble.cljs.csv.newline_error_message = [":newline must be one of [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",cljs.core.keys.call(null,testdouble.cljs.csv.newlines))),"]"].join('');
/**
 * Writes data to String in CSV-format.
 *   Accepts the following options:
 *   :separator - field separator
 *             (default ,)
 *   :newline   - line separator
 *             (accepts :lf or :cr+lf)
 *             (default :lf)
 *   :quote?    - wrap in quotes
 *             (default false)
 */
testdouble.cljs.csv.write_csv = (function testdouble$cljs$csv$write_csv(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14775 = arguments.length;
var i__4731__auto___14776 = (0);
while(true){
if((i__4731__auto___14776 < len__4730__auto___14775)){
args__4736__auto__.push((arguments[i__4731__auto___14776]));

var G__14777 = (i__4731__auto___14776 + (1));
i__4731__auto___14776 = G__14777;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__14773 = options;
var map__14773__$1 = (((((!((map__14773 == null))))?(((((map__14773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14773):map__14773);
var separator = cljs.core.get.call(null,map__14773__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.call(null,map__14773__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
var quote_QMARK_ = cljs.core.get.call(null,map__14773__$1,new cljs.core.Keyword(null,"quote?","quote?",-1114029317),false);
var temp__5733__auto__ = cljs.core.get.call(null,testdouble.cljs.csv.newlines,newline);
if(cljs.core.truth_(temp__5733__auto__)){
var newline_char = temp__5733__auto__;
return testdouble.cljs.csv.write_data.call(null,data,separator,newline_char,quote_QMARK_);
} else {
throw (new Error(testdouble.cljs.csv.newline_error_message));
}
});

testdouble.cljs.csv.write_csv.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
testdouble.cljs.csv.write_csv.cljs$lang$applyTo = (function (seq14771){
var G__14772 = cljs.core.first.call(null,seq14771);
var seq14771__$1 = cljs.core.next.call(null,seq14771);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14772,seq14771__$1);
});

/**
 * Reads data from String in CSV-format.
 */
testdouble.cljs.csv.read_csv = (function testdouble$cljs$csv$read_csv(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14798 = arguments.length;
var i__4731__auto___14799 = (0);
while(true){
if((i__4731__auto___14799 < len__4730__auto___14798)){
args__4736__auto__.push((arguments[i__4731__auto___14799]));

var G__14800 = (i__4731__auto___14799 + (1));
i__4731__auto___14799 = G__14800;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__14780 = options;
var map__14780__$1 = (((((!((map__14780 == null))))?(((((map__14780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14780):map__14780);
var separator = cljs.core.get.call(null,map__14780__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.call(null,map__14780__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
var temp__5733__auto__ = cljs.core.get.call(null,testdouble.cljs.csv.newlines,newline);
if(cljs.core.truth_(temp__5733__auto__)){
var newline_char = temp__5733__auto__;
var data_length = cljs.core.count.call(null,data);
var index = (0);
var state = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var in_quoted_field = false;
var field_buffer = null;
var rows = cljs.core.PersistentVector.EMPTY;
while(true){
var last_row_index = (cljs.core.count.call(null,rows) - (1));
if((index < data_length)){
var char$ = cljs.core.nth.call(null,data,index);
var next_char = (((index < (data_length - (1))))?cljs.core.nth.call(null,data,(index + (1))):null);
var str_char = cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$);
var G__14790 = state;
var G__14790__$1 = (((G__14790 instanceof cljs.core.Keyword))?G__14790.fqn:null);
switch (G__14790__$1) {
case "in-field":
var pred__14791 = cljs.core._EQ_;
var expr__14792 = str_char;
if(cljs.core.truth_(pred__14791.call(null,"\"",expr__14792))){
if(in_quoted_field){
if(cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_char),"\"")){
var G__14802 = (index + (2));
var G__14803 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__14804 = true;
var G__14805 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__14806 = rows;
index = G__14802;
state = G__14803;
in_quoted_field = G__14804;
field_buffer = G__14805;
rows = G__14806;
continue;
} else {
var G__14807 = (index + (1));
var G__14808 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__14809 = false;
var G__14810 = field_buffer;
var G__14811 = rows;
index = G__14807;
state = G__14808;
in_quoted_field = G__14809;
field_buffer = G__14810;
rows = G__14811;
continue;
}
} else {
var G__14812 = (index + (1));
var G__14813 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__14814 = true;
var G__14815 = field_buffer;
var G__14816 = (((cljs.core.count.call(null,rows) > (0)))?rows:cljs.core.conj.call(null,rows,cljs.core.PersistentVector.EMPTY));
index = G__14812;
state = G__14813;
in_quoted_field = G__14814;
field_buffer = G__14815;
rows = G__14816;
continue;
}
} else {
if(cljs.core.truth_(pred__14791.call(null,separator,expr__14792))){
if(in_quoted_field){
var G__14817 = (index + (1));
var G__14818 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__14819 = in_quoted_field;
var G__14820 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__14821 = rows;
index = G__14817;
state = G__14818;
in_quoted_field = G__14819;
field_buffer = G__14820;
rows = G__14821;
continue;
} else {
var G__14822 = (index + (1));
var G__14823 = new cljs.core.Keyword(null,"end-field","end-field",-163102047);
var G__14824 = in_quoted_field;
var G__14825 = "";
var G__14826 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__14822;
state = G__14823;
in_quoted_field = G__14824;
field_buffer = G__14825;
rows = G__14826;
continue;
}
} else {
if(cljs.core.truth_(pred__14791.call(null,"\r",expr__14792))){
if(((cljs.core._EQ_.call(null,newline,new cljs.core.Keyword(null,"cr+lf","cr+lf",486534798))) && ((!(in_quoted_field))))){
var G__14827 = (index + (1));
var G__14828 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__14829 = in_quoted_field;
var G__14830 = field_buffer;
var G__14831 = rows;
index = G__14827;
state = G__14828;
in_quoted_field = G__14829;
field_buffer = G__14830;
rows = G__14831;
continue;
} else {
var G__14832 = (index + (1));
var G__14833 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__14834 = in_quoted_field;
var G__14835 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__14836 = rows;
index = G__14832;
state = G__14833;
in_quoted_field = G__14834;
field_buffer = G__14835;
rows = G__14836;
continue;
}
} else {
if(cljs.core.truth_(pred__14791.call(null,"\n",expr__14792))){
if(in_quoted_field){
var G__14837 = (index + (1));
var G__14838 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__14839 = in_quoted_field;
var G__14840 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__14841 = rows;
index = G__14837;
state = G__14838;
in_quoted_field = G__14839;
field_buffer = G__14840;
rows = G__14841;
continue;
} else {
var G__14842 = (index + (1));
var G__14843 = new cljs.core.Keyword(null,"end-line","end-line",1837326455);
var G__14844 = in_quoted_field;
var G__14845 = "";
var G__14846 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__14842;
state = G__14843;
in_quoted_field = G__14844;
field_buffer = G__14845;
rows = G__14846;
continue;
}
} else {
var G__14847 = (index + (1));
var G__14848 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__14849 = in_quoted_field;
var G__14850 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__14851 = (((cljs.core.count.call(null,rows) > (0)))?rows:cljs.core.conj.call(null,rows,cljs.core.PersistentVector.EMPTY));
index = G__14847;
state = G__14848;
in_quoted_field = G__14849;
field_buffer = G__14850;
rows = G__14851;
continue;
}
}
}
}

break;
case "end-field":
var pred__14794 = cljs.core._EQ_;
var expr__14795 = str_char;
if(cljs.core.truth_(pred__14794.call(null,"\"",expr__14795))){
var G__14852 = (index + (1));
var G__14853 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__14854 = true;
var G__14855 = field_buffer;
var G__14856 = rows;
index = G__14852;
state = G__14853;
in_quoted_field = G__14854;
field_buffer = G__14855;
rows = G__14856;
continue;
} else {
if(cljs.core.truth_(pred__14794.call(null,separator,expr__14795))){
var G__14857 = (index + (1));
var G__14858 = new cljs.core.Keyword(null,"end-field","end-field",-163102047);
var G__14859 = in_quoted_field;
var G__14860 = "";
var G__14861 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,"");
index = G__14857;
state = G__14858;
in_quoted_field = G__14859;
field_buffer = G__14860;
rows = G__14861;
continue;
} else {
if(cljs.core.truth_(pred__14794.call(null,"\n",expr__14795))){
var G__14862 = (index + (1));
var G__14863 = new cljs.core.Keyword(null,"end-line","end-line",1837326455);
var G__14864 = in_quoted_field;
var G__14865 = "";
var G__14866 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__14862;
state = G__14863;
in_quoted_field = G__14864;
field_buffer = G__14865;
rows = G__14866;
continue;
} else {
var G__14867 = (index + (1));
var G__14868 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__14869 = in_quoted_field;
var G__14870 = str_char;
var G__14871 = rows;
index = G__14867;
state = G__14868;
in_quoted_field = G__14869;
field_buffer = G__14870;
rows = G__14871;
continue;
}
}
}

break;
case "end-line":
var G__14797 = str_char;
switch (G__14797) {
case "\"":
var G__14873 = (index + (1));
var G__14874 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__14875 = true;
var G__14876 = field_buffer;
var G__14877 = cljs.core.conj.call(null,(function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY);
index = G__14873;
state = G__14874;
in_quoted_field = G__14875;
field_buffer = G__14876;
rows = G__14877;
continue;

break;
default:
var G__14878 = (index + (1));
var G__14879 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__14880 = in_quoted_field;
var G__14881 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__14882 = cljs.core.conj.call(null,(function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY);
index = G__14878;
state = G__14879;
in_quoted_field = G__14880;
field_buffer = G__14881;
rows = G__14882;
continue;

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14790__$1)].join('')));

}
} else {
return testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
}
break;
}
} else {
throw (new Error(testdouble.cljs.csv.newline_error_message));
}
});

testdouble.cljs.csv.read_csv.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
testdouble.cljs.csv.read_csv.cljs$lang$applyTo = (function (seq14778){
var G__14779 = cljs.core.first.call(null,seq14778);
var seq14778__$1 = cljs.core.next.call(null,seq14778);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14779,seq14778__$1);
});


//# sourceMappingURL=csv.js.map
