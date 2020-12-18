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
return clojure.string.join.call(null,separator,(function (){var G__20515 = data;
var G__20515__$1 = cljs.core.map.call(null,cljs.core.str,G__20515)
;
if(cljs.core.truth_(quote_QMARK_)){
return cljs.core.map.call(null,testdouble.cljs.csv.wrap_in_quotes,G__20515__$1);
} else {
return G__20515__$1;
}
})());
});
testdouble.cljs.csv.write_data = (function testdouble$cljs$csv$write_data(data,separator,newline,quote_QMARK_){
return clojure.string.join.call(null,newline,cljs.core.map.call(null,(function (p1__20516_SHARP_){
return testdouble.cljs.csv.separate.call(null,p1__20516_SHARP_,separator,quote_QMARK_);
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
var len__4730__auto___20521 = arguments.length;
var i__4731__auto___20522 = (0);
while(true){
if((i__4731__auto___20522 < len__4730__auto___20521)){
args__4736__auto__.push((arguments[i__4731__auto___20522]));

var G__20523 = (i__4731__auto___20522 + (1));
i__4731__auto___20522 = G__20523;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__20519 = options;
var map__20519__$1 = (((((!((map__20519 == null))))?(((((map__20519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20519):map__20519);
var separator = cljs.core.get.call(null,map__20519__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.call(null,map__20519__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
var quote_QMARK_ = cljs.core.get.call(null,map__20519__$1,new cljs.core.Keyword(null,"quote?","quote?",-1114029317),false);
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
testdouble.cljs.csv.write_csv.cljs$lang$applyTo = (function (seq20517){
var G__20518 = cljs.core.first.call(null,seq20517);
var seq20517__$1 = cljs.core.next.call(null,seq20517);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20518,seq20517__$1);
});

/**
 * Reads data from String in CSV-format.
 */
testdouble.cljs.csv.read_csv = (function testdouble$cljs$csv$read_csv(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20544 = arguments.length;
var i__4731__auto___20545 = (0);
while(true){
if((i__4731__auto___20545 < len__4730__auto___20544)){
args__4736__auto__.push((arguments[i__4731__auto___20545]));

var G__20546 = (i__4731__auto___20545 + (1));
i__4731__auto___20545 = G__20546;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__20526 = options;
var map__20526__$1 = (((((!((map__20526 == null))))?(((((map__20526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20526):map__20526);
var separator = cljs.core.get.call(null,map__20526__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.call(null,map__20526__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
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
var G__20536 = state;
var G__20536__$1 = (((G__20536 instanceof cljs.core.Keyword))?G__20536.fqn:null);
switch (G__20536__$1) {
case "in-field":
var pred__20537 = cljs.core._EQ_;
var expr__20538 = str_char;
if(cljs.core.truth_(pred__20537.call(null,"\"",expr__20538))){
if(in_quoted_field){
if(cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_char),"\"")){
var G__20548 = (index + (2));
var G__20549 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20550 = true;
var G__20551 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__20552 = rows;
index = G__20548;
state = G__20549;
in_quoted_field = G__20550;
field_buffer = G__20551;
rows = G__20552;
continue;
} else {
var G__20553 = (index + (1));
var G__20554 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20555 = false;
var G__20556 = field_buffer;
var G__20557 = rows;
index = G__20553;
state = G__20554;
in_quoted_field = G__20555;
field_buffer = G__20556;
rows = G__20557;
continue;
}
} else {
var G__20558 = (index + (1));
var G__20559 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20560 = true;
var G__20561 = field_buffer;
var G__20562 = (((cljs.core.count.call(null,rows) > (0)))?rows:cljs.core.conj.call(null,rows,cljs.core.PersistentVector.EMPTY));
index = G__20558;
state = G__20559;
in_quoted_field = G__20560;
field_buffer = G__20561;
rows = G__20562;
continue;
}
} else {
if(cljs.core.truth_(pred__20537.call(null,separator,expr__20538))){
if(in_quoted_field){
var G__20563 = (index + (1));
var G__20564 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20565 = in_quoted_field;
var G__20566 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__20567 = rows;
index = G__20563;
state = G__20564;
in_quoted_field = G__20565;
field_buffer = G__20566;
rows = G__20567;
continue;
} else {
var G__20568 = (index + (1));
var G__20569 = new cljs.core.Keyword(null,"end-field","end-field",-163102047);
var G__20570 = in_quoted_field;
var G__20571 = "";
var G__20572 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__20568;
state = G__20569;
in_quoted_field = G__20570;
field_buffer = G__20571;
rows = G__20572;
continue;
}
} else {
if(cljs.core.truth_(pred__20537.call(null,"\r",expr__20538))){
if(((cljs.core._EQ_.call(null,newline,new cljs.core.Keyword(null,"cr+lf","cr+lf",486534798))) && ((!(in_quoted_field))))){
var G__20573 = (index + (1));
var G__20574 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20575 = in_quoted_field;
var G__20576 = field_buffer;
var G__20577 = rows;
index = G__20573;
state = G__20574;
in_quoted_field = G__20575;
field_buffer = G__20576;
rows = G__20577;
continue;
} else {
var G__20578 = (index + (1));
var G__20579 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20580 = in_quoted_field;
var G__20581 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__20582 = rows;
index = G__20578;
state = G__20579;
in_quoted_field = G__20580;
field_buffer = G__20581;
rows = G__20582;
continue;
}
} else {
if(cljs.core.truth_(pred__20537.call(null,"\n",expr__20538))){
if(in_quoted_field){
var G__20583 = (index + (1));
var G__20584 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20585 = in_quoted_field;
var G__20586 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__20587 = rows;
index = G__20583;
state = G__20584;
in_quoted_field = G__20585;
field_buffer = G__20586;
rows = G__20587;
continue;
} else {
var G__20588 = (index + (1));
var G__20589 = new cljs.core.Keyword(null,"end-line","end-line",1837326455);
var G__20590 = in_quoted_field;
var G__20591 = "";
var G__20592 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__20588;
state = G__20589;
in_quoted_field = G__20590;
field_buffer = G__20591;
rows = G__20592;
continue;
}
} else {
var G__20593 = (index + (1));
var G__20594 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20595 = in_quoted_field;
var G__20596 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__20597 = (((cljs.core.count.call(null,rows) > (0)))?rows:cljs.core.conj.call(null,rows,cljs.core.PersistentVector.EMPTY));
index = G__20593;
state = G__20594;
in_quoted_field = G__20595;
field_buffer = G__20596;
rows = G__20597;
continue;
}
}
}
}

break;
case "end-field":
var pred__20540 = cljs.core._EQ_;
var expr__20541 = str_char;
if(cljs.core.truth_(pred__20540.call(null,"\"",expr__20541))){
var G__20598 = (index + (1));
var G__20599 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20600 = true;
var G__20601 = field_buffer;
var G__20602 = rows;
index = G__20598;
state = G__20599;
in_quoted_field = G__20600;
field_buffer = G__20601;
rows = G__20602;
continue;
} else {
if(cljs.core.truth_(pred__20540.call(null,separator,expr__20541))){
var G__20603 = (index + (1));
var G__20604 = new cljs.core.Keyword(null,"end-field","end-field",-163102047);
var G__20605 = in_quoted_field;
var G__20606 = "";
var G__20607 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,"");
index = G__20603;
state = G__20604;
in_quoted_field = G__20605;
field_buffer = G__20606;
rows = G__20607;
continue;
} else {
if(cljs.core.truth_(pred__20540.call(null,"\n",expr__20541))){
var G__20608 = (index + (1));
var G__20609 = new cljs.core.Keyword(null,"end-line","end-line",1837326455);
var G__20610 = in_quoted_field;
var G__20611 = "";
var G__20612 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__20608;
state = G__20609;
in_quoted_field = G__20610;
field_buffer = G__20611;
rows = G__20612;
continue;
} else {
var G__20613 = (index + (1));
var G__20614 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20615 = in_quoted_field;
var G__20616 = str_char;
var G__20617 = rows;
index = G__20613;
state = G__20614;
in_quoted_field = G__20615;
field_buffer = G__20616;
rows = G__20617;
continue;
}
}
}

break;
case "end-line":
var G__20543 = str_char;
switch (G__20543) {
case "\"":
var G__20619 = (index + (1));
var G__20620 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20621 = true;
var G__20622 = field_buffer;
var G__20623 = cljs.core.conj.call(null,(function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY);
index = G__20619;
state = G__20620;
in_quoted_field = G__20621;
field_buffer = G__20622;
rows = G__20623;
continue;

break;
default:
var G__20624 = (index + (1));
var G__20625 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__20626 = in_quoted_field;
var G__20627 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__20628 = cljs.core.conj.call(null,(function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY);
index = G__20624;
state = G__20625;
in_quoted_field = G__20626;
field_buffer = G__20627;
rows = G__20628;
continue;

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20536__$1)].join('')));

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
testdouble.cljs.csv.read_csv.cljs$lang$applyTo = (function (seq20524){
var G__20525 = cljs.core.first.call(null,seq20524);
var seq20524__$1 = cljs.core.next.call(null,seq20524);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20525,seq20524__$1);
});


//# sourceMappingURL=csv.js.map
