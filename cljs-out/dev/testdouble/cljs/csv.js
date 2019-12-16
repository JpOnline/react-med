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
return clojure.string.join.call(null,separator,(function (){var G__21670 = data;
var G__21670__$1 = cljs.core.map.call(null,cljs.core.str,G__21670)
;
if(cljs.core.truth_(quote_QMARK_)){
return cljs.core.map.call(null,testdouble.cljs.csv.wrap_in_quotes,G__21670__$1);
} else {
return G__21670__$1;
}
})());
});
testdouble.cljs.csv.write_data = (function testdouble$cljs$csv$write_data(data,separator,newline,quote_QMARK_){
return clojure.string.join.call(null,newline,cljs.core.map.call(null,(function (p1__21671_SHARP_){
return testdouble.cljs.csv.separate.call(null,p1__21671_SHARP_,separator,quote_QMARK_);
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
var len__4730__auto___21676 = arguments.length;
var i__4731__auto___21677 = (0);
while(true){
if((i__4731__auto___21677 < len__4730__auto___21676)){
args__4736__auto__.push((arguments[i__4731__auto___21677]));

var G__21678 = (i__4731__auto___21677 + (1));
i__4731__auto___21677 = G__21678;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__21674 = options;
var map__21674__$1 = (((((!((map__21674 == null))))?(((((map__21674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21674):map__21674);
var separator = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
var quote_QMARK_ = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"quote?","quote?",-1114029317),false);
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
testdouble.cljs.csv.write_csv.cljs$lang$applyTo = (function (seq21672){
var G__21673 = cljs.core.first.call(null,seq21672);
var seq21672__$1 = cljs.core.next.call(null,seq21672);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21673,seq21672__$1);
});

/**
 * Reads data from String in CSV-format.
 */
testdouble.cljs.csv.read_csv = (function testdouble$cljs$csv$read_csv(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21699 = arguments.length;
var i__4731__auto___21700 = (0);
while(true){
if((i__4731__auto___21700 < len__4730__auto___21699)){
args__4736__auto__.push((arguments[i__4731__auto___21700]));

var G__21701 = (i__4731__auto___21700 + (1));
i__4731__auto___21700 = G__21701;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__21681 = options;
var map__21681__$1 = (((((!((map__21681 == null))))?(((((map__21681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21681):map__21681);
var separator = cljs.core.get.call(null,map__21681__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.call(null,map__21681__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
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
var G__21691 = state;
var G__21691__$1 = (((G__21691 instanceof cljs.core.Keyword))?G__21691.fqn:null);
switch (G__21691__$1) {
case "in-field":
var pred__21692 = cljs.core._EQ_;
var expr__21693 = str_char;
if(cljs.core.truth_(pred__21692.call(null,"\"",expr__21693))){
if(in_quoted_field){
if(cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_char),"\"")){
var G__21703 = (index + (2));
var G__21704 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__21705 = true;
var G__21706 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__21707 = rows;
index = G__21703;
state = G__21704;
in_quoted_field = G__21705;
field_buffer = G__21706;
rows = G__21707;
continue;
} else {
var G__21708 = (index + (1));
var G__21709 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__21710 = false;
var G__21711 = field_buffer;
var G__21712 = rows;
index = G__21708;
state = G__21709;
in_quoted_field = G__21710;
field_buffer = G__21711;
rows = G__21712;
continue;
}
} else {
var G__21713 = (index + (1));
var G__21714 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__21715 = true;
var G__21716 = field_buffer;
var G__21717 = (((cljs.core.count.call(null,rows) > (0)))?rows:cljs.core.conj.call(null,rows,cljs.core.PersistentVector.EMPTY));
index = G__21713;
state = G__21714;
in_quoted_field = G__21715;
field_buffer = G__21716;
rows = G__21717;
continue;
}
} else {
if(cljs.core.truth_(pred__21692.call(null,separator,expr__21693))){
if(in_quoted_field){
var G__21718 = (index + (1));
var G__21719 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__21720 = in_quoted_field;
var G__21721 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__21722 = rows;
index = G__21718;
state = G__21719;
in_quoted_field = G__21720;
field_buffer = G__21721;
rows = G__21722;
continue;
} else {
var G__21723 = (index + (1));
var G__21724 = new cljs.core.Keyword(null,"end-field","end-field",-163102047);
var G__21725 = in_quoted_field;
var G__21726 = "";
var G__21727 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__21723;
state = G__21724;
in_quoted_field = G__21725;
field_buffer = G__21726;
rows = G__21727;
continue;
}
} else {
if(cljs.core.truth_(pred__21692.call(null,"\r",expr__21693))){
if(((cljs.core._EQ_.call(null,newline,new cljs.core.Keyword(null,"cr+lf","cr+lf",486534798))) && ((!(in_quoted_field))))){
var G__21728 = (index + (1));
var G__21729 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__21730 = in_quoted_field;
var G__21731 = field_buffer;
var G__21732 = rows;
index = G__21728;
state = G__21729;
in_quoted_field = G__21730;
field_buffer = G__21731;
rows = G__21732;
continue;
} else {
var G__21733 = (index + (1));
var G__21734 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__21735 = in_quoted_field;
var G__21736 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__21737 = rows;
index = G__21733;
state = G__21734;
in_quoted_field = G__21735;
field_buffer = G__21736;
rows = G__21737;
continue;
}
} else {
if(cljs.core.truth_(pred__21692.call(null,"\n",expr__21693))){
if(in_quoted_field){
var G__21738 = (index + (1));
var G__21739 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__21740 = in_quoted_field;
var G__21741 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__21742 = rows;
index = G__21738;
state = G__21739;
in_quoted_field = G__21740;
field_buffer = G__21741;
rows = G__21742;
continue;
} else {
var G__21743 = (index + (1));
var G__21744 = new cljs.core.Keyword(null,"end-line","end-line",1837326455);
var G__21745 = in_quoted_field;
var G__21746 = "";
var G__21747 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__21743;
state = G__21744;
in_quoted_field = G__21745;
field_buffer = G__21746;
rows = G__21747;
continue;
}
} else {
var G__21748 = (index + (1));
var G__21749 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__21750 = in_quoted_field;
var G__21751 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__21752 = (((cljs.core.count.call(null,rows) > (0)))?rows:cljs.core.conj.call(null,rows,cljs.core.PersistentVector.EMPTY));
index = G__21748;
state = G__21749;
in_quoted_field = G__21750;
field_buffer = G__21751;
rows = G__21752;
continue;
}
}
}
}

break;
case "end-field":
var pred__21695 = cljs.core._EQ_;
var expr__21696 = str_char;
if(cljs.core.truth_(pred__21695.call(null,"\"",expr__21696))){
var G__21753 = (index + (1));
var G__21754 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__21755 = true;
var G__21756 = field_buffer;
var G__21757 = rows;
index = G__21753;
state = G__21754;
in_quoted_field = G__21755;
field_buffer = G__21756;
rows = G__21757;
continue;
} else {
if(cljs.core.truth_(pred__21695.call(null,separator,expr__21696))){
var G__21758 = (index + (1));
var G__21759 = new cljs.core.Keyword(null,"end-field","end-field",-163102047);
var G__21760 = in_quoted_field;
var G__21761 = "";
var G__21762 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,"");
index = G__21758;
state = G__21759;
in_quoted_field = G__21760;
field_buffer = G__21761;
rows = G__21762;
continue;
} else {
if(cljs.core.truth_(pred__21695.call(null,"\n",expr__21696))){
var G__21763 = (index + (1));
var G__21764 = new cljs.core.Keyword(null,"end-line","end-line",1837326455);
var G__21765 = in_quoted_field;
var G__21766 = "";
var G__21767 = testdouble.cljs.csv.conj_in.call(null,rows,last_row_index,field_buffer);
index = G__21763;
state = G__21764;
in_quoted_field = G__21765;
field_buffer = G__21766;
rows = G__21767;
continue;
} else {
var G__21768 = (index + (1));
var G__21769 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__21770 = in_quoted_field;
var G__21771 = str_char;
var G__21772 = rows;
index = G__21768;
state = G__21769;
in_quoted_field = G__21770;
field_buffer = G__21771;
rows = G__21772;
continue;
}
}
}

break;
case "end-line":
var G__21698 = str_char;
switch (G__21698) {
case "\"":
var G__21774 = (index + (1));
var G__21775 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__21776 = true;
var G__21777 = field_buffer;
var G__21778 = cljs.core.conj.call(null,(function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY);
index = G__21774;
state = G__21775;
in_quoted_field = G__21776;
field_buffer = G__21777;
rows = G__21778;
continue;

break;
default:
var G__21779 = (index + (1));
var G__21780 = new cljs.core.Keyword(null,"in-field","in-field",1894971643);
var G__21781 = in_quoted_field;
var G__21782 = [field_buffer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
var G__21783 = cljs.core.conj.call(null,(function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY);
index = G__21779;
state = G__21780;
in_quoted_field = G__21781;
field_buffer = G__21782;
rows = G__21783;
continue;

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21691__$1)].join('')));

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
testdouble.cljs.csv.read_csv.cljs$lang$applyTo = (function (seq21679){
var G__21680 = cljs.core.first.call(null,seq21679);
var seq21679__$1 = cljs.core.next.call(null,seq21679);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21680,seq21679__$1);
});


//# sourceMappingURL=csv.js.map
