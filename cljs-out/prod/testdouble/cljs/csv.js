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
return clojure.string.join.call(null,separator,(function (){var G__19871 = data;
var G__19871__$1 = cljs.core.map.call(null,cljs.core.str,G__19871)
;
if(cljs.core.truth_(quote_QMARK_)){
return cljs.core.map.call(null,testdouble.cljs.csv.wrap_in_quotes,G__19871__$1);
} else {
return G__19871__$1;
}
})());
});
testdouble.cljs.csv.write_data = (function testdouble$cljs$csv$write_data(data,separator,newline,quote_QMARK_){
return clojure.string.join.call(null,newline,cljs.core.map.call(null,(function (p1__19872_SHARP_){
return testdouble.cljs.csv.separate.call(null,p1__19872_SHARP_,separator,quote_QMARK_);
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
var len__4730__auto___19877 = arguments.length;
var i__4731__auto___19878 = (0);
while(true){
if((i__4731__auto___19878 < len__4730__auto___19877)){
args__4736__auto__.push((arguments[i__4731__auto___19878]));

var G__19879 = (i__4731__auto___19878 + (1));
i__4731__auto___19878 = G__19879;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__19875 = options;
var map__19875__$1 = (((((!((map__19875 == null))))?(((((map__19875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19875):map__19875);
var separator = cljs.core.get.call(null,map__19875__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.call(null,map__19875__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
var quote_QMARK_ = cljs.core.get.call(null,map__19875__$1,new cljs.core.Keyword(null,"quote?","quote?",-1114029317),false);
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
testdouble.cljs.csv.write_csv.cljs$lang$applyTo = (function (seq19873){
var G__19874 = cljs.core.first.call(null,seq19873);
var seq19873__$1 = cljs.core.next.call(null,seq19873);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19874,seq19873__$1);
});

/**
 * Reads data from String in CSV-format.
 */
testdouble.cljs.csv.read_csv = (function testdouble$cljs$csv$read_csv(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19900 = arguments.length;
var i__4731__auto___19901 = (0);
while(true){
if((i__4731__auto___19901 < len__4730__auto___19900)){
args__4736__auto__.push((arguments[i__4731__auto___19901]));

var G__19902 = (i__4731__auto___19901 + (1));
i__4731__auto___19901 = G__19902;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__19882 = options;
var map__19882__$1 = (((((!((map__19882 == null))))?(((((map__19882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19882):map__19882);
var separator = cljs.core.get.call(null,map__19882__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.call(null,map__19882__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
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
var G__19892 = state;
var G__19892__$1 = (((G__19892 instanceof cljs.core.Keyword))?G__19892.fqn:null);
switch (G__19892__$1) {
case "in-field":
var pred__19893 = cljs.core._EQ_;
var expr__19894 = str_char;
if(cljs.core.truth_(pred__19893.call(null,"\"",expr__19894))){
if(in_quoted_field){
if(cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_char),"\"")){
var G__19904 = (index + (2));
var G__19905 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19906 = true;
var G__19907 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19908 = rows;
index = G__19904;
state = G__19905;
in_quoted_field = G__19906;
field_buffer = G__19907;
rows = G__19908;
continue;
} else {
var G__19909 = (index + (1));
var G__19910 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19911 = false;
var G__19912 = field_buffer;
var G__19913 = rows;
index = G__19909;
state = G__19910;
in_quoted_field = G__19911;
field_buffer = G__19912;
rows = G__19913;
continue;
}
} else {
var G__19914 = (index + (1));
var G__19915 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19916 = true;
var G__19917 = field_buffer;
var G__19918 = (((cljs.core.count.call(null,rows) > (0)))?rows:cljs.core.conj.call(null,rows,cljs.core.PersistentVector.EMPTY));
index = G__19914;
state = G__19915;
in_quoted_field = G__19916;
field_buffer = G__19917;
rows = G__19918;
continue;
}
} else {
if(cljs.core.truth_(pred__19893.call(null,separator,expr__19894))){
if(in_quoted_field){
var G__19919 = (index + (1));
var G__19920 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19921 = in_quoted_field;
var G__19922 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19923 = rows;
index = G__19919;
state = G__19920;
in_quoted_field = G__19921;
field_buffer = G__19922;
rows = G__19923;
continue;
} else {
var G__19924 = (index + (1));
var G__19925 = new cljs.core.Keyword(null,"end-field","end-field",-163102047);
var G__19926 = in_quoted_field;
var G__19927 = "";
var G__19928 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__19924;
state = G__19925;
in_quoted_field = G__19926;
field_buffer = G__19927;
rows = G__19928;
continue;
}
} else {
if(cljs.core.truth_(pred__19893.call(null,"\r",expr__19894))){
if(((cljs.core._EQ_.call(null,newline,new cljs.core.Keyword(null,"cr+lf","cr+lf",486534798))) && ((!(in_quoted_field))))){
var G__19929 = (index + (1));
var G__19930 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19931 = in_quoted_field;
var G__19932 = field_buffer;
var G__19933 = rows;
index = G__19929;
state = G__19930;
in_quoted_field = G__19931;
field_buffer = G__19932;
rows = G__19933;
continue;
} else {
var G__19934 = (index + (1));
var G__19935 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19936 = in_quoted_field;
var G__19937 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19938 = rows;
index = G__19934;
state = G__19935;
in_quoted_field = G__19936;
field_buffer = G__19937;
rows = G__19938;
continue;
}
} else {
if(cljs.core.truth_(pred__19893.call(null,"\n",expr__19894))){
if(in_quoted_field){
var G__19939 = (index + (1));
var G__19940 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19941 = in_quoted_field;
var G__19942 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19943 = rows;
index = G__19939;
state = G__19940;
in_quoted_field = G__19941;
field_buffer = G__19942;
rows = G__19943;
continue;
} else {
var G__19944 = (index + (1));
var G__19945 = new cljs.core.Keyword(null,"end-line","end-line",1837326455);
var G__19946 = in_quoted_field;
var G__19947 = "";
var G__19948 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__19944;
state = G__19945;
in_quoted_field = G__19946;
field_buffer = G__19947;
rows = G__19948;
continue;
}
} else {
var G__19949 = (index + (1));
var G__19950 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19951 = in_quoted_field;
var G__19952 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19953 = (((cljs.core.count.call(null,rows) > (0)))?rows:cljs.core.conj.call(null,rows,cljs.core.PersistentVector.EMPTY));
index = G__19949;
state = G__19950;
in_quoted_field = G__19951;
field_buffer = G__19952;
rows = G__19953;
continue;
}
}
}
}

break;
case "end-field":
var pred__19896 = cljs.core._EQ_;
var expr__19897 = str_char;
if(cljs.core.truth_(pred__19896.call(null,"\"",expr__19897))){
var G__19954 = (index + (1));
var G__19955 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19956 = true;
var G__19957 = field_buffer;
var G__19958 = rows;
index = G__19954;
state = G__19955;
in_quoted_field = G__19956;
field_buffer = G__19957;
rows = G__19958;
continue;
} else {
if(cljs.core.truth_(pred__19896.call(null,separator,expr__19897))){
var G__19959 = (index + (1));
var G__19960 = new cljs.core.Keyword(null,"end-field","end-field",-163102047);
var G__19961 = in_quoted_field;
var G__19962 = "";
var G__19963 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,"");
index = G__19959;
state = G__19960;
in_quoted_field = G__19961;
field_buffer = G__19962;
rows = G__19963;
continue;
} else {
if(cljs.core.truth_(pred__19896.call(null,"\n",expr__19897))){
var G__19964 = (index + (1));
var G__19965 = new cljs.core.Keyword(null,"end-line","end-line",1837326455);
var G__19966 = in_quoted_field;
var G__19967 = "";
var G__19968 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__19964;
state = G__19965;
in_quoted_field = G__19966;
field_buffer = G__19967;
rows = G__19968;
continue;
} else {
var G__19969 = (index + (1));
var G__19970 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19971 = in_quoted_field;
var G__19972 = str_char;
var G__19973 = rows;
index = G__19969;
state = G__19970;
in_quoted_field = G__19971;
field_buffer = G__19972;
rows = G__19973;
continue;
}
}
}

break;
case "end-line":
var G__19899 = str_char;
switch (G__19899) {
case "\"":
var G__19975 = (index + (1));
var G__19976 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19977 = true;
var G__19978 = field_buffer;
var G__19979 = cljs.core.conj.call(null,(function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY);
index = G__19975;
state = G__19976;
in_quoted_field = G__19977;
field_buffer = G__19978;
rows = G__19979;
continue;

break;
default:
var G__19980 = (index + (1));
var G__19981 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19982 = in_quoted_field;
var G__19983 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19984 = cljs.core.conj.call(null,(function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY);
index = G__19980;
state = G__19981;
in_quoted_field = G__19982;
field_buffer = G__19983;
rows = G__19984;
continue;

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19892__$1)].join('')));

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
testdouble.cljs.csv.read_csv.cljs$lang$applyTo = (function (seq19880){
var G__19881 = cljs.core.first.call(null,seq19880);
var seq19880__$1 = cljs.core.next.call(null,seq19880);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19881,seq19880__$1);
});


//# sourceMappingURL=csv.js.map
