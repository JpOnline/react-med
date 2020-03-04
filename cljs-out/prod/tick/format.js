// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('tick.format');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('java.time.format');
tick.format.predefined_formatters = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$iso_DASH_zoned_DASH_date_DASH_time,java.time.format.DateTimeFormatter.ISO_ZONED_DATE_TIME,cljs.core.cst$kw$iso_DASH_offset_DASH_date_DASH_time,java.time.format.DateTimeFormatter.ISO_OFFSET_DATE_TIME,cljs.core.cst$kw$iso_DASH_local_DASH_time,java.time.format.DateTimeFormatter.ISO_LOCAL_TIME,cljs.core.cst$kw$iso_DASH_local_DASH_date_DASH_time,java.time.format.DateTimeFormatter.ISO_LOCAL_DATE_TIME,cljs.core.cst$kw$iso_DASH_local_DASH_date,java.time.format.DateTimeFormatter.ISO_LOCAL_DATE,cljs.core.cst$kw$iso_DASH_instant,java.time.format.DateTimeFormatter.ISO_INSTANT], null);
/**
 * Constructs a DateTimeFormatter out of either a
 * 
 *   * format string - "YYYY/mm/DD" "YYY HH:MM" etc.
 *   or
 *   * formatter name - :iso-instant :iso-local-date etc
 *   
 *   and a Locale, which is optional.
 */
tick.format.formatter = (function tick$format$formatter(var_args){
var G__20305 = arguments.length;
switch (G__20305) {
case 1:
return tick.format.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.format.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.format.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmt){
return tick.format.formatter.cljs$core$IFn$_invoke$arity$2(fmt,(function (){try{var G__20307 = goog.object.get(JSJodaLocale,"Locale");
if((G__20307 == null)){
return null;
} else {
return goog.object.get(G__20307,"US");
}
}catch (e20306){if((e20306 instanceof Error)){
var e = e20306;
return null;
} else {
throw e20306;

}
}})());
});

tick.format.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmt,locale){
var fmt__$1 = (((fmt instanceof java.time.format.DateTimeFormatter))?fmt:((typeof fmt === 'string')?(((locale == null))?(function(){throw (new Error("Locale is nil, try adding a require '[tick.locale-en-us]"))})():java.time.format.DateTimeFormatter.ofPattern(fmt).withLocale(locale)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.format.predefined_formatters,fmt)
));
return fmt__$1;
});

tick.format.formatter.cljs$lang$maxFixedArity = 2;

/**
 * Formats the given time entity as a string.
 *   Accepts something that can be converted to a `DateTimeFormatter` as a first
 *   argument. Given one argument uses the default format.
 */
tick.format.format = (function tick$format$format(var_args){
var G__20310 = arguments.length;
switch (G__20310) {
case 1:
return tick.format.format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.format.format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.format.format.cljs$core$IFn$_invoke$arity$1 = (function (o){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(o);
});

tick.format.format.cljs$core$IFn$_invoke$arity$2 = (function (fmt,o){
return tick.format.formatter.cljs$core$IFn$_invoke$arity$1(fmt).format(o);
});

tick.format.format.cljs$lang$maxFixedArity = 2;

