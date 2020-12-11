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
return clojure.string.join.call(null,separator,(function (){var G__20499 = data;
var G__20499__$1 = cljs.core.map.call(null,cljs.core.str,G__20499)
;
if(cljs.core.truth_(quote_QMARK_)){
return cljs.core.map.call(null,testdouble.cljs.csv.wrap_in_quotes,G__20499__$1);
} else {
return G__20499__$1;
}
})());
});
testdouble.cljs.csv.write_data = (function testdouble$cljs$csv$write_data(data,separator,newline,quote_QMARK_){
return clojure.string.join.call(null,newline,cljs.core.map.call(null,(function (p1__20500_SHARP_){
return testdouble.cljs.csv.separate.call(null,p1__20500_SHARP_,separator,quote_QMARK_);
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
var len__4730__auto___20505 = arguments.length;
var i__4731__auto___20506 = (0);
while(true){
if((i__4731__auto___20506 < len__4730__auto___20505)){
args__4736__auto__.push((arguments[i__4731__auto___20506]));

var G__20507 = (i__4731__auto___20506 + (1));
i__4731__auto___20506 = G__20507;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__20503 = options;
var map__20503__$1 = (((((!((map__20503 == null))))?(((((map__20503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20503):map__20503);
var separator = cljs.core.get.call(null,map__20503__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.call(null,map__20503__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
var quote_QMARK_ = cljs.core.get.call(null,map__20503__$1,new cljs.core.Keyword(null,"quote?","quote?",-1114029317),false);
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
testdouble.cljs.csv.write_csv.cljs$lang$applyTo = (function (seq20501){
var G__20502 = cljs.core.first.call(null,seq20501);
var seq20501__$1 = cljs.core.next.call(null,seq20501);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20502,seq20501__$1);
});

/**
 * Reads data from String in CSV-format.
 */
testdouble.cljs.csv.read_csv = (function testdouble$cljs$csv$read_csv(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20528 = arguments.length;
var i__4731__auto___20529 = (0);
while(true){
if((i__4731__auto___20529 < len__4730__auto___20528)){
args__4736__auto__.push((arguments[i__4731__auto___20529]));

var G__20530 = (i__4731__auto___20529 + (1));
i__4731__auto___20529 = G__20530;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__20510 = options;
var map__20510__$1 = (((((!((map__20510 == null))))?(((((map__20510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20510):map__20510);
var separator = cljs.core.get.call(null,map__20510__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.call(null,map__20510__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
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
var G__20520 = state;
var G__20520__$1 = (((G__20520 instanceof cljs.core.Keyword))?G__20520.fqn:null);
switch (G__20520__$1) {
case "in-field":
var pred__20521 = cljs.core._EQ_;
var expr__20522 = str_char;
if(cljs.core.truth_(pred__20521.call(null,"\"",expr__20522))){
if(in_quoted_field){
if(cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_char),"\"")){
var G__20532 = (index + (2));
var G__20533 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20534 = true;
var G__20535 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__20536 = rows;
index = G__20532;
state = G__20533;
in_quoted_field = G__20534;
field_buffer = G__20535;
rows = G__20536;
continue;
} else {
var G__20537 = (index + (1));
var G__20538 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20539 = false;
var G__20540 = field_buffer;
var G__20541 = rows;
index = G__20537;
state = G__20538;
in_quoted_field = G__20539;
field_buffer = G__20540;
rows = G__20541;
continue;
}
} else {
var G__20542 = (index + (1));
var G__20543 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20544 = true;
var G__20545 = field_buffer;
var G__20546 = (((cljs.core.count.call(null,rows) > (0)))?rows:cljs.core.conj.call(null,rows,cljs.core.PersistentVector.EMPTY));
index = G__20542;
state = G__20543;
in_quoted_field = G__20544;
field_buffer = G__20545;
rows = G__20546;
continue;
}
} else {
if(cljs.core.truth_(pred__20521.call(null,separator,expr__20522))){
if(in_quoted_field){
var G__20547 = (index + (1));
var G__20548 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20549 = in_quoted_field;
var G__20550 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__20551 = rows;
index = G__20547;
state = G__20548;
in_quoted_field = G__20549;
field_buffer = G__20550;
rows = G__20551;
continue;
} else {
var G__20552 = (index + (1));
var G__20553 = new cljs.core.Keyword(null,"end-field","end-field",-163102047);
var G__20554 = in_quoted_field;
var G__20555 = "";
var G__20556 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__20552;
state = G__20553;
in_quoted_field = G__20554;
field_buffer = G__20555;
rows = G__20556;
continue;
}
} else {
if(cljs.core.truth_(pred__20521.call(null,"\r",expr__20522))){
if(((cljs.core._EQ_.call(null,newline,new cljs.core.Keyword(null,"cr+lf","cr+lf",486534798))) && ((!(in_quoted_field))))){
var G__20557 = (index + (1));
var G__20558 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20559 = in_quoted_field;
var G__20560 = field_buffer;
var G__20561 = rows;
index = G__20557;
state = G__20558;
in_quoted_field = G__20559;
field_buffer = G__20560;
rows = G__20561;
continue;
} else {
var G__20562 = (index + (1));
var G__20563 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20564 = in_quoted_field;
var G__20565 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__20566 = rows;
index = G__20562;
state = G__20563;
in_quoted_field = G__20564;
field_buffer = G__20565;
rows = G__20566;
continue;
}
} else {
if(cljs.core.truth_(pred__20521.call(null,"\n",expr__20522))){
if(in_quoted_field){
var G__20567 = (index + (1));
var G__20568 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20569 = in_quoted_field;
var G__20570 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__20571 = rows;
index = G__20567;
state = G__20568;
in_quoted_field = G__20569;
field_buffer = G__20570;
rows = G__20571;
continue;
} else {
var G__20572 = (index + (1));
var G__20573 = new cljs.core.Keyword(null,"end-line","end-line",1837326455);
var G__20574 = in_quoted_field;
var G__20575 = "";
var G__20576 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__20572;
state = G__20573;
in_quoted_field = G__20574;
field_buffer = G__20575;
rows = G__20576;
continue;
}
} else {
var G__20577 = (index + (1));
var G__20578 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20579 = in_quoted_field;
var G__20580 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__20581 = (((cljs.core.count.call(null,rows) > (0)))?rows:cljs.core.conj.call(null,rows,cljs.core.PersistentVector.EMPTY));
index = G__20577;
state = G__20578;
in_quoted_field = G__20579;
field_buffer = G__20580;
rows = G__20581;
continue;
}
}
}
}

break;
case "end-field":
var pred__20524 = cljs.core._EQ_;
var expr__20525 = str_char;
if(cljs.core.truth_(pred__20524.call(null,"\"",expr__20525))){
var G__20582 = (index + (1));
var G__20583 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20584 = true;
var G__20585 = field_buffer;
var G__20586 = rows;
index = G__20582;
state = G__20583;
in_quoted_field = G__20584;
field_buffer = G__20585;
rows = G__20586;
continue;
} else {
if(cljs.core.truth_(pred__20524.call(null,separator,expr__20525))){
var G__20587 = (index + (1));
var G__20588 = new cljs.core.Keyword(null,"end-field","end-field",-163102047);
var G__20589 = in_quoted_field;
var G__20590 = "";
var G__20591 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,"");
index = G__20587;
state = G__20588;
in_quoted_field = G__20589;
field_buffer = G__20590;
rows = G__20591;
continue;
} else {
if(cljs.core.truth_(pred__20524.call(null,"\n",expr__20525))){
var G__20592 = (index + (1));
var G__20593 = new cljs.core.Keyword(null,"end-line","end-line",1837326455);
var G__20594 = in_quoted_field;
var G__20595 = "";
var G__20596 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__20592;
state = G__20593;
in_quoted_field = G__20594;
field_buffer = G__20595;
rows = G__20596;
continue;
} else {
var G__20597 = (index + (1));
var G__20598 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20599 = in_quoted_field;
var G__20600 = str_char;
var G__20601 = rows;
index = G__20597;
state = G__20598;
in_quoted_field = G__20599;
field_buffer = G__20600;
rows = G__20601;
continue;
}
}
}

break;
case "end-line":
var G__20527 = str_char;
switch (G__20527) {
case "\"":
var G__20603 = (index + (1));
var G__20604 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20605 = true;
var G__20606 = field_buffer;
var G__20607 = cljs.core.conj.call(null,(function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY);
index = G__20603;
state = G__20604;
in_quoted_field = G__20605;
field_buffer = G__20606;
rows = G__20607;
continue;

break;
default:
var G__20608 = (index + (1));
var G__20609 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20610 = in_quoted_field;
var G__20611 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__20612 = cljs.core.conj.call(null,(function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY);
index = G__20608;
state = G__20609;
in_quoted_field = G__20610;
field_buffer = G__20611;
rows = G__20612;
continue;

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20520__$1)].join('')));

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
testdouble.cljs.csv.read_csv.cljs$lang$applyTo = (function (seq20508){
var G__20509 = cljs.core.first.call(null,seq20508);
var seq20508__$1 = cljs.core.next.call(null,seq20508);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20509,seq20508__$1);
});


//# sourceMappingURL=csv.js.map
