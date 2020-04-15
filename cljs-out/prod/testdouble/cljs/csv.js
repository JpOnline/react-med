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
return clojure.string.join.call(null,separator,(function (){var G__19888 = data;
var G__19888__$1 = cljs.core.map.call(null,cljs.core.str,G__19888)
;
if(cljs.core.truth_(quote_QMARK_)){
return cljs.core.map.call(null,testdouble.cljs.csv.wrap_in_quotes,G__19888__$1);
} else {
return G__19888__$1;
}
})());
});
testdouble.cljs.csv.write_data = (function testdouble$cljs$csv$write_data(data,separator,newline,quote_QMARK_){
return clojure.string.join.call(null,newline,cljs.core.map.call(null,(function (p1__19889_SHARP_){
return testdouble.cljs.csv.separate.call(null,p1__19889_SHARP_,separator,quote_QMARK_);
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
var len__4730__auto___19894 = arguments.length;
var i__4731__auto___19895 = (0);
while(true){
if((i__4731__auto___19895 < len__4730__auto___19894)){
args__4736__auto__.push((arguments[i__4731__auto___19895]));

var G__19896 = (i__4731__auto___19895 + (1));
i__4731__auto___19895 = G__19896;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__19892 = options;
var map__19892__$1 = (((((!((map__19892 == null))))?(((((map__19892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19892):map__19892);
var separator = cljs.core.get.call(null,map__19892__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.call(null,map__19892__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
var quote_QMARK_ = cljs.core.get.call(null,map__19892__$1,new cljs.core.Keyword(null,"quote?","quote?",-1114029317),false);
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
testdouble.cljs.csv.write_csv.cljs$lang$applyTo = (function (seq19890){
var G__19891 = cljs.core.first.call(null,seq19890);
var seq19890__$1 = cljs.core.next.call(null,seq19890);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19891,seq19890__$1);
});

/**
 * Reads data from String in CSV-format.
 */
testdouble.cljs.csv.read_csv = (function testdouble$cljs$csv$read_csv(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19917 = arguments.length;
var i__4731__auto___19918 = (0);
while(true){
if((i__4731__auto___19918 < len__4730__auto___19917)){
args__4736__auto__.push((arguments[i__4731__auto___19918]));

var G__19919 = (i__4731__auto___19918 + (1));
i__4731__auto___19918 = G__19919;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__19899 = options;
var map__19899__$1 = (((((!((map__19899 == null))))?(((((map__19899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19899):map__19899);
var separator = cljs.core.get.call(null,map__19899__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.call(null,map__19899__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
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
var G__19909 = state;
var G__19909__$1 = (((G__19909 instanceof cljs.core.Keyword))?G__19909.fqn:null);
switch (G__19909__$1) {
case "in-field":
var pred__19910 = cljs.core._EQ_;
var expr__19911 = str_char;
if(cljs.core.truth_(pred__19910.call(null,"\"",expr__19911))){
if(in_quoted_field){
if(cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_char),"\"")){
var G__19921 = (index + (2));
var G__19922 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19923 = true;
var G__19924 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19925 = rows;
index = G__19921;
state = G__19922;
in_quoted_field = G__19923;
field_buffer = G__19924;
rows = G__19925;
continue;
} else {
var G__19926 = (index + (1));
var G__19927 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19928 = false;
var G__19929 = field_buffer;
var G__19930 = rows;
index = G__19926;
state = G__19927;
in_quoted_field = G__19928;
field_buffer = G__19929;
rows = G__19930;
continue;
}
} else {
var G__19931 = (index + (1));
var G__19932 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19933 = true;
var G__19934 = field_buffer;
var G__19935 = (((cljs.core.count.call(null,rows) > (0)))?rows:cljs.core.conj.call(null,rows,cljs.core.PersistentVector.EMPTY));
index = G__19931;
state = G__19932;
in_quoted_field = G__19933;
field_buffer = G__19934;
rows = G__19935;
continue;
}
} else {
if(cljs.core.truth_(pred__19910.call(null,separator,expr__19911))){
if(in_quoted_field){
var G__19936 = (index + (1));
var G__19937 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19938 = in_quoted_field;
var G__19939 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19940 = rows;
index = G__19936;
state = G__19937;
in_quoted_field = G__19938;
field_buffer = G__19939;
rows = G__19940;
continue;
} else {
var G__19941 = (index + (1));
var G__19942 = new cljs.core.Keyword(null,"end-field","end-field",-163102047);
var G__19943 = in_quoted_field;
var G__19944 = "";
var G__19945 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__19941;
state = G__19942;
in_quoted_field = G__19943;
field_buffer = G__19944;
rows = G__19945;
continue;
}
} else {
if(cljs.core.truth_(pred__19910.call(null,"\r",expr__19911))){
if(((cljs.core._EQ_.call(null,newline,new cljs.core.Keyword(null,"cr+lf","cr+lf",486534798))) && ((!(in_quoted_field))))){
var G__19946 = (index + (1));
var G__19947 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19948 = in_quoted_field;
var G__19949 = field_buffer;
var G__19950 = rows;
index = G__19946;
state = G__19947;
in_quoted_field = G__19948;
field_buffer = G__19949;
rows = G__19950;
continue;
} else {
var G__19951 = (index + (1));
var G__19952 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19953 = in_quoted_field;
var G__19954 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19955 = rows;
index = G__19951;
state = G__19952;
in_quoted_field = G__19953;
field_buffer = G__19954;
rows = G__19955;
continue;
}
} else {
if(cljs.core.truth_(pred__19910.call(null,"\n",expr__19911))){
if(in_quoted_field){
var G__19956 = (index + (1));
var G__19957 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19958 = in_quoted_field;
var G__19959 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19960 = rows;
index = G__19956;
state = G__19957;
in_quoted_field = G__19958;
field_buffer = G__19959;
rows = G__19960;
continue;
} else {
var G__19961 = (index + (1));
var G__19962 = new cljs.core.Keyword(null,"end-line","end-line",1837326455);
var G__19963 = in_quoted_field;
var G__19964 = "";
var G__19965 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__19961;
state = G__19962;
in_quoted_field = G__19963;
field_buffer = G__19964;
rows = G__19965;
continue;
}
} else {
var G__19966 = (index + (1));
var G__19967 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19968 = in_quoted_field;
var G__19969 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19970 = (((cljs.core.count.call(null,rows) > (0)))?rows:cljs.core.conj.call(null,rows,cljs.core.PersistentVector.EMPTY));
index = G__19966;
state = G__19967;
in_quoted_field = G__19968;
field_buffer = G__19969;
rows = G__19970;
continue;
}
}
}
}

break;
case "end-field":
var pred__19913 = cljs.core._EQ_;
var expr__19914 = str_char;
if(cljs.core.truth_(pred__19913.call(null,"\"",expr__19914))){
var G__19971 = (index + (1));
var G__19972 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19973 = true;
var G__19974 = field_buffer;
var G__19975 = rows;
index = G__19971;
state = G__19972;
in_quoted_field = G__19973;
field_buffer = G__19974;
rows = G__19975;
continue;
} else {
if(cljs.core.truth_(pred__19913.call(null,separator,expr__19914))){
var G__19976 = (index + (1));
var G__19977 = new cljs.core.Keyword(null,"end-field","end-field",-163102047);
var G__19978 = in_quoted_field;
var G__19979 = "";
var G__19980 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,"");
index = G__19976;
state = G__19977;
in_quoted_field = G__19978;
field_buffer = G__19979;
rows = G__19980;
continue;
} else {
if(cljs.core.truth_(pred__19913.call(null,"\n",expr__19914))){
var G__19981 = (index + (1));
var G__19982 = new cljs.core.Keyword(null,"end-line","end-line",1837326455);
var G__19983 = in_quoted_field;
var G__19984 = "";
var G__19985 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__19981;
state = G__19982;
in_quoted_field = G__19983;
field_buffer = G__19984;
rows = G__19985;
continue;
} else {
var G__19986 = (index + (1));
var G__19987 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19988 = in_quoted_field;
var G__19989 = str_char;
var G__19990 = rows;
index = G__19986;
state = G__19987;
in_quoted_field = G__19988;
field_buffer = G__19989;
rows = G__19990;
continue;
}
}
}

break;
case "end-line":
var G__19916 = str_char;
switch (G__19916) {
case "\"":
var G__19992 = (index + (1));
var G__19993 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19994 = true;
var G__19995 = field_buffer;
var G__19996 = cljs.core.conj.call(null,(function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY);
index = G__19992;
state = G__19993;
in_quoted_field = G__19994;
field_buffer = G__19995;
rows = G__19996;
continue;

break;
default:
var G__19997 = (index + (1));
var G__19998 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19999 = in_quoted_field;
var G__20000 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__20001 = cljs.core.conj.call(null,(function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY);
index = G__19997;
state = G__19998;
in_quoted_field = G__19999;
field_buffer = G__20000;
rows = G__20001;
continue;

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19909__$1)].join('')));

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
testdouble.cljs.csv.read_csv.cljs$lang$applyTo = (function (seq19897){
var G__19898 = cljs.core.first.call(null,seq19897);
var seq19897__$1 = cljs.core.next.call(null,seq19897);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19898,seq19897__$1);
});


//# sourceMappingURL=csv.js.map
