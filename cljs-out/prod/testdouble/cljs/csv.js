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
return clojure.string.join.call(null,separator,(function (){var G__19830 = data;
var G__19830__$1 = cljs.core.map.call(null,cljs.core.str,G__19830)
;
if(cljs.core.truth_(quote_QMARK_)){
return cljs.core.map.call(null,testdouble.cljs.csv.wrap_in_quotes,G__19830__$1);
} else {
return G__19830__$1;
}
})());
});
testdouble.cljs.csv.write_data = (function testdouble$cljs$csv$write_data(data,separator,newline,quote_QMARK_){
return clojure.string.join.call(null,newline,cljs.core.map.call(null,(function (p1__19831_SHARP_){
return testdouble.cljs.csv.separate.call(null,p1__19831_SHARP_,separator,quote_QMARK_);
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
var len__4730__auto___19836 = arguments.length;
var i__4731__auto___19837 = (0);
while(true){
if((i__4731__auto___19837 < len__4730__auto___19836)){
args__4736__auto__.push((arguments[i__4731__auto___19837]));

var G__19838 = (i__4731__auto___19837 + (1));
i__4731__auto___19837 = G__19838;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__19834 = options;
var map__19834__$1 = (((((!((map__19834 == null))))?(((((map__19834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19834):map__19834);
var separator = cljs.core.get.call(null,map__19834__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.call(null,map__19834__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
var quote_QMARK_ = cljs.core.get.call(null,map__19834__$1,new cljs.core.Keyword(null,"quote?","quote?",-1114029317),false);
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
testdouble.cljs.csv.write_csv.cljs$lang$applyTo = (function (seq19832){
var G__19833 = cljs.core.first.call(null,seq19832);
var seq19832__$1 = cljs.core.next.call(null,seq19832);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19833,seq19832__$1);
});

/**
 * Reads data from String in CSV-format.
 */
testdouble.cljs.csv.read_csv = (function testdouble$cljs$csv$read_csv(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19859 = arguments.length;
var i__4731__auto___19860 = (0);
while(true){
if((i__4731__auto___19860 < len__4730__auto___19859)){
args__4736__auto__.push((arguments[i__4731__auto___19860]));

var G__19861 = (i__4731__auto___19860 + (1));
i__4731__auto___19860 = G__19861;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__19841 = options;
var map__19841__$1 = (((((!((map__19841 == null))))?(((((map__19841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19841):map__19841);
var separator = cljs.core.get.call(null,map__19841__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.call(null,map__19841__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
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
var G__19851 = state;
var G__19851__$1 = (((G__19851 instanceof cljs.core.Keyword))?G__19851.fqn:null);
switch (G__19851__$1) {
case "in-field":
var pred__19852 = cljs.core._EQ_;
var expr__19853 = str_char;
if(cljs.core.truth_(pred__19852.call(null,"\"",expr__19853))){
if(in_quoted_field){
if(cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_char),"\"")){
var G__19863 = (index + (2));
var G__19864 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19865 = true;
var G__19866 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19867 = rows;
index = G__19863;
state = G__19864;
in_quoted_field = G__19865;
field_buffer = G__19866;
rows = G__19867;
continue;
} else {
var G__19868 = (index + (1));
var G__19869 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19870 = false;
var G__19871 = field_buffer;
var G__19872 = rows;
index = G__19868;
state = G__19869;
in_quoted_field = G__19870;
field_buffer = G__19871;
rows = G__19872;
continue;
}
} else {
var G__19873 = (index + (1));
var G__19874 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19875 = true;
var G__19876 = field_buffer;
var G__19877 = (((cljs.core.count.call(null,rows) > (0)))?rows:cljs.core.conj.call(null,rows,cljs.core.PersistentVector.EMPTY));
index = G__19873;
state = G__19874;
in_quoted_field = G__19875;
field_buffer = G__19876;
rows = G__19877;
continue;
}
} else {
if(cljs.core.truth_(pred__19852.call(null,separator,expr__19853))){
if(in_quoted_field){
var G__19878 = (index + (1));
var G__19879 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19880 = in_quoted_field;
var G__19881 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19882 = rows;
index = G__19878;
state = G__19879;
in_quoted_field = G__19880;
field_buffer = G__19881;
rows = G__19882;
continue;
} else {
var G__19883 = (index + (1));
var G__19884 = new cljs.core.Keyword(null,"end-field","end-field",-163102047);
var G__19885 = in_quoted_field;
var G__19886 = "";
var G__19887 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__19883;
state = G__19884;
in_quoted_field = G__19885;
field_buffer = G__19886;
rows = G__19887;
continue;
}
} else {
if(cljs.core.truth_(pred__19852.call(null,"\r",expr__19853))){
if(((cljs.core._EQ_.call(null,newline,new cljs.core.Keyword(null,"cr+lf","cr+lf",486534798))) && ((!(in_quoted_field))))){
var G__19888 = (index + (1));
var G__19889 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19890 = in_quoted_field;
var G__19891 = field_buffer;
var G__19892 = rows;
index = G__19888;
state = G__19889;
in_quoted_field = G__19890;
field_buffer = G__19891;
rows = G__19892;
continue;
} else {
var G__19893 = (index + (1));
var G__19894 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19895 = in_quoted_field;
var G__19896 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19897 = rows;
index = G__19893;
state = G__19894;
in_quoted_field = G__19895;
field_buffer = G__19896;
rows = G__19897;
continue;
}
} else {
if(cljs.core.truth_(pred__19852.call(null,"\n",expr__19853))){
if(in_quoted_field){
var G__19898 = (index + (1));
var G__19899 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19900 = in_quoted_field;
var G__19901 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19902 = rows;
index = G__19898;
state = G__19899;
in_quoted_field = G__19900;
field_buffer = G__19901;
rows = G__19902;
continue;
} else {
var G__19903 = (index + (1));
var G__19904 = new cljs.core.Keyword(null,"end-line","end-line",1837326455);
var G__19905 = in_quoted_field;
var G__19906 = "";
var G__19907 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__19903;
state = G__19904;
in_quoted_field = G__19905;
field_buffer = G__19906;
rows = G__19907;
continue;
}
} else {
var G__19908 = (index + (1));
var G__19909 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19910 = in_quoted_field;
var G__19911 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19912 = (((cljs.core.count.call(null,rows) > (0)))?rows:cljs.core.conj.call(null,rows,cljs.core.PersistentVector.EMPTY));
index = G__19908;
state = G__19909;
in_quoted_field = G__19910;
field_buffer = G__19911;
rows = G__19912;
continue;
}
}
}
}

break;
case "end-field":
var pred__19855 = cljs.core._EQ_;
var expr__19856 = str_char;
if(cljs.core.truth_(pred__19855.call(null,"\"",expr__19856))){
var G__19913 = (index + (1));
var G__19914 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19915 = true;
var G__19916 = field_buffer;
var G__19917 = rows;
index = G__19913;
state = G__19914;
in_quoted_field = G__19915;
field_buffer = G__19916;
rows = G__19917;
continue;
} else {
if(cljs.core.truth_(pred__19855.call(null,separator,expr__19856))){
var G__19918 = (index + (1));
var G__19919 = new cljs.core.Keyword(null,"end-field","end-field",-163102047);
var G__19920 = in_quoted_field;
var G__19921 = "";
var G__19922 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,"");
index = G__19918;
state = G__19919;
in_quoted_field = G__19920;
field_buffer = G__19921;
rows = G__19922;
continue;
} else {
if(cljs.core.truth_(pred__19855.call(null,"\n",expr__19856))){
var G__19923 = (index + (1));
var G__19924 = new cljs.core.Keyword(null,"end-line","end-line",1837326455);
var G__19925 = in_quoted_field;
var G__19926 = "";
var G__19927 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__19923;
state = G__19924;
in_quoted_field = G__19925;
field_buffer = G__19926;
rows = G__19927;
continue;
} else {
var G__19928 = (index + (1));
var G__19929 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19930 = in_quoted_field;
var G__19931 = str_char;
var G__19932 = rows;
index = G__19928;
state = G__19929;
in_quoted_field = G__19930;
field_buffer = G__19931;
rows = G__19932;
continue;
}
}
}

break;
case "end-line":
var G__19858 = str_char;
switch (G__19858) {
case "\"":
var G__19934 = (index + (1));
var G__19935 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19936 = true;
var G__19937 = field_buffer;
var G__19938 = cljs.core.conj.call(null,(function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY);
index = G__19934;
state = G__19935;
in_quoted_field = G__19936;
field_buffer = G__19937;
rows = G__19938;
continue;

break;
default:
var G__19939 = (index + (1));
var G__19940 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__19941 = in_quoted_field;
var G__19942 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__19943 = cljs.core.conj.call(null,(function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY);
index = G__19939;
state = G__19940;
in_quoted_field = G__19941;
field_buffer = G__19942;
rows = G__19943;
continue;

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19851__$1)].join('')));

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
testdouble.cljs.csv.read_csv.cljs$lang$applyTo = (function (seq19839){
var G__19840 = cljs.core.first.call(null,seq19839);
var seq19839__$1 = cljs.core.next.call(null,seq19839);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19840,seq19839__$1);
});


//# sourceMappingURL=csv.js.map
