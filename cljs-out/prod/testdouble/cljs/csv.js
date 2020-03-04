// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('testdouble.cljs.csv');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
testdouble.cljs.csv.escape_quotes = (function testdouble$cljs$csv$escape_quotes(s){
return clojure.string.replace(s,"\"","\"\"");
});
testdouble.cljs.csv.wrap_in_quotes = (function testdouble$cljs$csv$wrap_in_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(testdouble.cljs.csv.escape_quotes(s)),"\""].join('');
});
testdouble.cljs.csv.separate = (function testdouble$cljs$csv$separate(data,separator,quote_QMARK_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(separator,(function (){var G__25973 = data;
var G__25973__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,G__25973)
;
if(cljs.core.truth_(quote_QMARK_)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(testdouble.cljs.csv.wrap_in_quotes,G__25973__$1);
} else {
return G__25973__$1;
}
})());
});
testdouble.cljs.csv.write_data = (function testdouble$cljs$csv$write_data(data,separator,newline,quote_QMARK_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(newline,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25974_SHARP_){
return testdouble.cljs.csv.separate(p1__25974_SHARP_,separator,quote_QMARK_);
}),data));
});
testdouble.cljs.csv.conj_in = (function testdouble$cljs$csv$conj_in(coll,index,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll,index,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,index),x));
});
testdouble.cljs.csv.newlines = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lf,"\n",cljs.core.cst$kw$cr_PLUS_lf,"\r\n"], null);
testdouble.cljs.csv.newline_error_message = [":newline must be one of [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.keys(testdouble.cljs.csv.newlines))),"]"].join('');
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
var len__4730__auto___25979 = arguments.length;
var i__4731__auto___25980 = (0);
while(true){
if((i__4731__auto___25980 < len__4730__auto___25979)){
args__4736__auto__.push((arguments[i__4731__auto___25980]));

var G__25981 = (i__4731__auto___25980 + (1));
i__4731__auto___25980 = G__25981;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__25977 = options;
var map__25977__$1 = (((((!((map__25977 == null))))?(((((map__25977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25977):map__25977);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25977__$1,cljs.core.cst$kw$separator,",");
var newline = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25977__$1,cljs.core.cst$kw$newline,cljs.core.cst$kw$lf);
var quote_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25977__$1,cljs.core.cst$kw$quote_QMARK_,false);
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(testdouble.cljs.csv.newlines,newline);
if(cljs.core.truth_(temp__5733__auto__)){
var newline_char = temp__5733__auto__;
return testdouble.cljs.csv.write_data(data,separator,newline_char,quote_QMARK_);
} else {
throw (new Error(testdouble.cljs.csv.newline_error_message));
}
});

testdouble.cljs.csv.write_csv.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
testdouble.cljs.csv.write_csv.cljs$lang$applyTo = (function (seq25975){
var G__25976 = cljs.core.first(seq25975);
var seq25975__$1 = cljs.core.next(seq25975);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25976,seq25975__$1);
});

/**
 * Reads data from String in CSV-format.
 */
testdouble.cljs.csv.read_csv = (function testdouble$cljs$csv$read_csv(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26002 = arguments.length;
var i__4731__auto___26003 = (0);
while(true){
if((i__4731__auto___26003 < len__4730__auto___26002)){
args__4736__auto__.push((arguments[i__4731__auto___26003]));

var G__26004 = (i__4731__auto___26003 + (1));
i__4731__auto___26003 = G__26004;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__25984 = options;
var map__25984__$1 = (((((!((map__25984 == null))))?(((((map__25984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25984):map__25984);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25984__$1,cljs.core.cst$kw$separator,",");
var newline = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25984__$1,cljs.core.cst$kw$newline,cljs.core.cst$kw$lf);
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(testdouble.cljs.csv.newlines,newline);
if(cljs.core.truth_(temp__5733__auto__)){
var newline_char = temp__5733__auto__;
var data_length = cljs.core.count(data);
var index = (0);
var state = cljs.core.cst$kw$in_DASH_field;
var in_quoted_field = false;
var field_buffer = null;
var rows = cljs.core.PersistentVector.EMPTY;
while(true){
var last_row_index = (cljs.core.count(rows) - (1));
if((index < data_length)){
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,index);
var next_char = (((index < (data_length - (1))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(index + (1))):null);
var str_char = cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$);
var G__25994 = state;
var G__25994__$1 = (((G__25994 instanceof cljs.core.Keyword))?G__25994.fqn:null);
switch (G__25994__$1) {
case "in-field":
var pred__25995 = cljs.core._EQ_;
var expr__25996 = str_char;
if(cljs.core.truth_((pred__25995.cljs$core$IFn$_invoke$arity$2 ? pred__25995.cljs$core$IFn$_invoke$arity$2("\"",expr__25996) : pred__25995.call(null,"\"",expr__25996)))){
if(in_quoted_field){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_char),"\"")){
var G__26006 = (index + (2));
var G__26007 = cljs.core.cst$kw$in_DASH_field;
var G__26008 = true;
var G__26009 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__26010 = rows;
index = G__26006;
state = G__26007;
in_quoted_field = G__26008;
field_buffer = G__26009;
rows = G__26010;
continue;
} else {
var G__26011 = (index + (1));
var G__26012 = cljs.core.cst$kw$in_DASH_field;
var G__26013 = false;
var G__26014 = field_buffer;
var G__26015 = rows;
index = G__26011;
state = G__26012;
in_quoted_field = G__26013;
field_buffer = G__26014;
rows = G__26015;
continue;
}
} else {
var G__26016 = (index + (1));
var G__26017 = cljs.core.cst$kw$in_DASH_field;
var G__26018 = true;
var G__26019 = field_buffer;
var G__26020 = (((cljs.core.count(rows) > (0)))?rows:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rows,cljs.core.PersistentVector.EMPTY));
index = G__26016;
state = G__26017;
in_quoted_field = G__26018;
field_buffer = G__26019;
rows = G__26020;
continue;
}
} else {
if(cljs.core.truth_((pred__25995.cljs$core$IFn$_invoke$arity$2 ? pred__25995.cljs$core$IFn$_invoke$arity$2(separator,expr__25996) : pred__25995.call(null,separator,expr__25996)))){
if(in_quoted_field){
var G__26021 = (index + (1));
var G__26022 = cljs.core.cst$kw$in_DASH_field;
var G__26023 = in_quoted_field;
var G__26024 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__26025 = rows;
index = G__26021;
state = G__26022;
in_quoted_field = G__26023;
field_buffer = G__26024;
rows = G__26025;
continue;
} else {
var G__26026 = (index + (1));
var G__26027 = cljs.core.cst$kw$end_DASH_field;
var G__26028 = in_quoted_field;
var G__26029 = "";
var G__26030 = testdouble.cljs.csv.conj_in(rows,last_row_index,field_buffer);
index = G__26026;
state = G__26027;
in_quoted_field = G__26028;
field_buffer = G__26029;
rows = G__26030;
continue;
}
} else {
if(cljs.core.truth_((pred__25995.cljs$core$IFn$_invoke$arity$2 ? pred__25995.cljs$core$IFn$_invoke$arity$2("\r",expr__25996) : pred__25995.call(null,"\r",expr__25996)))){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newline,cljs.core.cst$kw$cr_PLUS_lf)) && ((!(in_quoted_field))))){
var G__26031 = (index + (1));
var G__26032 = cljs.core.cst$kw$in_DASH_field;
var G__26033 = in_quoted_field;
var G__26034 = field_buffer;
var G__26035 = rows;
index = G__26031;
state = G__26032;
in_quoted_field = G__26033;
field_buffer = G__26034;
rows = G__26035;
continue;
} else {
var G__26036 = (index + (1));
var G__26037 = cljs.core.cst$kw$in_DASH_field;
var G__26038 = in_quoted_field;
var G__26039 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__26040 = rows;
index = G__26036;
state = G__26037;
in_quoted_field = G__26038;
field_buffer = G__26039;
rows = G__26040;
continue;
}
} else {
if(cljs.core.truth_((pred__25995.cljs$core$IFn$_invoke$arity$2 ? pred__25995.cljs$core$IFn$_invoke$arity$2("\n",expr__25996) : pred__25995.call(null,"\n",expr__25996)))){
if(in_quoted_field){
var G__26041 = (index + (1));
var G__26042 = cljs.core.cst$kw$in_DASH_field;
var G__26043 = in_quoted_field;
var G__26044 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__26045 = rows;
index = G__26041;
state = G__26042;
in_quoted_field = G__26043;
field_buffer = G__26044;
rows = G__26045;
continue;
} else {
var G__26046 = (index + (1));
var G__26047 = cljs.core.cst$kw$end_DASH_line;
var G__26048 = in_quoted_field;
var G__26049 = "";
var G__26050 = testdouble.cljs.csv.conj_in(rows,last_row_index,field_buffer);
index = G__26046;
state = G__26047;
in_quoted_field = G__26048;
field_buffer = G__26049;
rows = G__26050;
continue;
}
} else {
var G__26051 = (index + (1));
var G__26052 = cljs.core.cst$kw$in_DASH_field;
var G__26053 = in_quoted_field;
var G__26054 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__26055 = (((cljs.core.count(rows) > (0)))?rows:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rows,cljs.core.PersistentVector.EMPTY));
index = G__26051;
state = G__26052;
in_quoted_field = G__26053;
field_buffer = G__26054;
rows = G__26055;
continue;
}
}
}
}

break;
case "end-field":
var pred__25998 = cljs.core._EQ_;
var expr__25999 = str_char;
if(cljs.core.truth_((pred__25998.cljs$core$IFn$_invoke$arity$2 ? pred__25998.cljs$core$IFn$_invoke$arity$2("\"",expr__25999) : pred__25998.call(null,"\"",expr__25999)))){
var G__26056 = (index + (1));
var G__26057 = cljs.core.cst$kw$in_DASH_field;
var G__26058 = true;
var G__26059 = field_buffer;
var G__26060 = rows;
index = G__26056;
state = G__26057;
in_quoted_field = G__26058;
field_buffer = G__26059;
rows = G__26060;
continue;
} else {
if(cljs.core.truth_((pred__25998.cljs$core$IFn$_invoke$arity$2 ? pred__25998.cljs$core$IFn$_invoke$arity$2(separator,expr__25999) : pred__25998.call(null,separator,expr__25999)))){
var G__26061 = (index + (1));
var G__26062 = cljs.core.cst$kw$end_DASH_field;
var G__26063 = in_quoted_field;
var G__26064 = "";
var G__26065 = testdouble.cljs.csv.conj_in(rows,last_row_index,"");
index = G__26061;
state = G__26062;
in_quoted_field = G__26063;
field_buffer = G__26064;
rows = G__26065;
continue;
} else {
if(cljs.core.truth_((pred__25998.cljs$core$IFn$_invoke$arity$2 ? pred__25998.cljs$core$IFn$_invoke$arity$2("\n",expr__25999) : pred__25998.call(null,"\n",expr__25999)))){
var G__26066 = (index + (1));
var G__26067 = cljs.core.cst$kw$end_DASH_line;
var G__26068 = in_quoted_field;
var G__26069 = "";
var G__26070 = testdouble.cljs.csv.conj_in(rows,last_row_index,field_buffer);
index = G__26066;
state = G__26067;
in_quoted_field = G__26068;
field_buffer = G__26069;
rows = G__26070;
continue;
} else {
var G__26071 = (index + (1));
var G__26072 = cljs.core.cst$kw$in_DASH_field;
var G__26073 = in_quoted_field;
var G__26074 = str_char;
var G__26075 = rows;
index = G__26071;
state = G__26072;
in_quoted_field = G__26073;
field_buffer = G__26074;
rows = G__26075;
continue;
}
}
}

break;
case "end-line":
var G__26001 = str_char;
switch (G__26001) {
case "\"":
var G__26077 = (index + (1));
var G__26078 = cljs.core.cst$kw$in_DASH_field;
var G__26079 = true;
var G__26080 = field_buffer;
var G__26081 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY);
index = G__26077;
state = G__26078;
in_quoted_field = G__26079;
field_buffer = G__26080;
rows = G__26081;
continue;

break;
default:
var G__26082 = (index + (1));
var G__26083 = cljs.core.cst$kw$in_DASH_field;
var G__26084 = in_quoted_field;
var G__26085 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__26086 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY);
index = G__26082;
state = G__26083;
in_quoted_field = G__26084;
field_buffer = G__26085;
rows = G__26086;
continue;

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25994__$1)].join('')));

}
} else {
return testdouble.cljs.csv.conj_in(rows,last_row_index,field_buffer);
}
break;
}
} else {
throw (new Error(testdouble.cljs.csv.newline_error_message));
}
});

testdouble.cljs.csv.read_csv.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
testdouble.cljs.csv.read_csv.cljs$lang$applyTo = (function (seq25982){
var G__25983 = cljs.core.first(seq25982);
var seq25982__$1 = cljs.core.next(seq25982);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25983,seq25982__$1);
});

