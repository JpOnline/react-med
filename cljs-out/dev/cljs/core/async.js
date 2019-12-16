// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16478 = arguments.length;
switch (G__16478) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16479 = (function (f,blockable,meta16480){
this.f = f;
this.blockable = blockable;
this.meta16480 = meta16480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16481,meta16480__$1){
var self__ = this;
var _16481__$1 = this;
return (new cljs.core.async.t_cljs$core$async16479(self__.f,self__.blockable,meta16480__$1));
});

cljs.core.async.t_cljs$core$async16479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16481){
var self__ = this;
var _16481__$1 = this;
return self__.meta16480;
});

cljs.core.async.t_cljs$core$async16479.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16479.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16480","meta16480",-1866488912,null)], null);
});

cljs.core.async.t_cljs$core$async16479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16479";

cljs.core.async.t_cljs$core$async16479.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16479");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16479.
 */
cljs.core.async.__GT_t_cljs$core$async16479 = (function cljs$core$async$__GT_t_cljs$core$async16479(f__$1,blockable__$1,meta16480){
return (new cljs.core.async.t_cljs$core$async16479(f__$1,blockable__$1,meta16480));
});

}

return (new cljs.core.async.t_cljs$core$async16479(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__16485 = arguments.length;
switch (G__16485) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__16488 = arguments.length;
switch (G__16488) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__16491 = arguments.length;
switch (G__16491) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_16493 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16493);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16493,ret){
return (function (){
return fn1.call(null,val_16493);
});})(val_16493,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16495 = arguments.length;
switch (G__16495) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___16497 = n;
var x_16498 = (0);
while(true){
if((x_16498 < n__4607__auto___16497)){
(a[x_16498] = (0));

var G__16499 = (x_16498 + (1));
x_16498 = G__16499;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__16500 = (i + (1));
i = G__16500;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16501 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16501 = (function (flag,meta16502){
this.flag = flag;
this.meta16502 = meta16502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16503,meta16502__$1){
var self__ = this;
var _16503__$1 = this;
return (new cljs.core.async.t_cljs$core$async16501(self__.flag,meta16502__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16501.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16503){
var self__ = this;
var _16503__$1 = this;
return self__.meta16502;
});})(flag))
;

cljs.core.async.t_cljs$core$async16501.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16501.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16501.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16501.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16501.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16502","meta16502",560211043,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16501.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16501";

cljs.core.async.t_cljs$core$async16501.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16501");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16501.
 */
cljs.core.async.__GT_t_cljs$core$async16501 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16501(flag__$1,meta16502){
return (new cljs.core.async.t_cljs$core$async16501(flag__$1,meta16502));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16501(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16504 = (function (flag,cb,meta16505){
this.flag = flag;
this.cb = cb;
this.meta16505 = meta16505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16506,meta16505__$1){
var self__ = this;
var _16506__$1 = this;
return (new cljs.core.async.t_cljs$core$async16504(self__.flag,self__.cb,meta16505__$1));
});

cljs.core.async.t_cljs$core$async16504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16506){
var self__ = this;
var _16506__$1 = this;
return self__.meta16505;
});

cljs.core.async.t_cljs$core$async16504.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16504.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async16504.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16504.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16505","meta16505",701688141,null)], null);
});

cljs.core.async.t_cljs$core$async16504.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16504";

cljs.core.async.t_cljs$core$async16504.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16504");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16504.
 */
cljs.core.async.__GT_t_cljs$core$async16504 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16504(flag__$1,cb__$1,meta16505){
return (new cljs.core.async.t_cljs$core$async16504(flag__$1,cb__$1,meta16505));
});

}

return (new cljs.core.async.t_cljs$core$async16504(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16507_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16507_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16508_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16508_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16509 = (i + (1));
i = G__16509;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16515 = arguments.length;
var i__4731__auto___16516 = (0);
while(true){
if((i__4731__auto___16516 < len__4730__auto___16515)){
args__4736__auto__.push((arguments[i__4731__auto___16516]));

var G__16517 = (i__4731__auto___16516 + (1));
i__4731__auto___16516 = G__16517;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16512){
var map__16513 = p__16512;
var map__16513__$1 = (((((!((map__16513 == null))))?(((((map__16513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16513):map__16513);
var opts = map__16513__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16510){
var G__16511 = cljs.core.first.call(null,seq16510);
var seq16510__$1 = cljs.core.next.call(null,seq16510);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16511,seq16510__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__16519 = arguments.length;
switch (G__16519) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16418__auto___16565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto___16565){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto___16565){
return (function (state_16543){
var state_val_16544 = (state_16543[(1)]);
if((state_val_16544 === (7))){
var inst_16539 = (state_16543[(2)]);
var state_16543__$1 = state_16543;
var statearr_16545_16566 = state_16543__$1;
(statearr_16545_16566[(2)] = inst_16539);

(statearr_16545_16566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16544 === (1))){
var state_16543__$1 = state_16543;
var statearr_16546_16567 = state_16543__$1;
(statearr_16546_16567[(2)] = null);

(statearr_16546_16567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16544 === (4))){
var inst_16522 = (state_16543[(7)]);
var inst_16522__$1 = (state_16543[(2)]);
var inst_16523 = (inst_16522__$1 == null);
var state_16543__$1 = (function (){var statearr_16547 = state_16543;
(statearr_16547[(7)] = inst_16522__$1);

return statearr_16547;
})();
if(cljs.core.truth_(inst_16523)){
var statearr_16548_16568 = state_16543__$1;
(statearr_16548_16568[(1)] = (5));

} else {
var statearr_16549_16569 = state_16543__$1;
(statearr_16549_16569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16544 === (13))){
var state_16543__$1 = state_16543;
var statearr_16550_16570 = state_16543__$1;
(statearr_16550_16570[(2)] = null);

(statearr_16550_16570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16544 === (6))){
var inst_16522 = (state_16543[(7)]);
var state_16543__$1 = state_16543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16543__$1,(11),to,inst_16522);
} else {
if((state_val_16544 === (3))){
var inst_16541 = (state_16543[(2)]);
var state_16543__$1 = state_16543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16543__$1,inst_16541);
} else {
if((state_val_16544 === (12))){
var state_16543__$1 = state_16543;
var statearr_16551_16571 = state_16543__$1;
(statearr_16551_16571[(2)] = null);

(statearr_16551_16571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16544 === (2))){
var state_16543__$1 = state_16543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16543__$1,(4),from);
} else {
if((state_val_16544 === (11))){
var inst_16532 = (state_16543[(2)]);
var state_16543__$1 = state_16543;
if(cljs.core.truth_(inst_16532)){
var statearr_16552_16572 = state_16543__$1;
(statearr_16552_16572[(1)] = (12));

} else {
var statearr_16553_16573 = state_16543__$1;
(statearr_16553_16573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16544 === (9))){
var state_16543__$1 = state_16543;
var statearr_16554_16574 = state_16543__$1;
(statearr_16554_16574[(2)] = null);

(statearr_16554_16574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16544 === (5))){
var state_16543__$1 = state_16543;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16555_16575 = state_16543__$1;
(statearr_16555_16575[(1)] = (8));

} else {
var statearr_16556_16576 = state_16543__$1;
(statearr_16556_16576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16544 === (14))){
var inst_16537 = (state_16543[(2)]);
var state_16543__$1 = state_16543;
var statearr_16557_16577 = state_16543__$1;
(statearr_16557_16577[(2)] = inst_16537);

(statearr_16557_16577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16544 === (10))){
var inst_16529 = (state_16543[(2)]);
var state_16543__$1 = state_16543;
var statearr_16558_16578 = state_16543__$1;
(statearr_16558_16578[(2)] = inst_16529);

(statearr_16558_16578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16544 === (8))){
var inst_16526 = cljs.core.async.close_BANG_.call(null,to);
var state_16543__$1 = state_16543;
var statearr_16559_16579 = state_16543__$1;
(statearr_16559_16579[(2)] = inst_16526);

(statearr_16559_16579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16418__auto___16565))
;
return ((function (switch__16323__auto__,c__16418__auto___16565){
return (function() {
var cljs$core$async$state_machine__16324__auto__ = null;
var cljs$core$async$state_machine__16324__auto____0 = (function (){
var statearr_16560 = [null,null,null,null,null,null,null,null];
(statearr_16560[(0)] = cljs$core$async$state_machine__16324__auto__);

(statearr_16560[(1)] = (1));

return statearr_16560;
});
var cljs$core$async$state_machine__16324__auto____1 = (function (state_16543){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_16543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e16561){if((e16561 instanceof Object)){
var ex__16327__auto__ = e16561;
var statearr_16562_16580 = state_16543;
(statearr_16562_16580[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16581 = state_16543;
state_16543 = G__16581;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$state_machine__16324__auto__ = function(state_16543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16324__auto____1.call(this,state_16543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16324__auto____0;
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16324__auto____1;
return cljs$core$async$state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto___16565))
})();
var state__16420__auto__ = (function (){var statearr_16563 = f__16419__auto__.call(null);
(statearr_16563[(6)] = c__16418__auto___16565);

return statearr_16563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto___16565))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__16582){
var vec__16583 = p__16582;
var v = cljs.core.nth.call(null,vec__16583,(0),null);
var p = cljs.core.nth.call(null,vec__16583,(1),null);
var job = vec__16583;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16418__auto___16754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto___16754,res,vec__16583,v,p,job,jobs,results){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto___16754,res,vec__16583,v,p,job,jobs,results){
return (function (state_16590){
var state_val_16591 = (state_16590[(1)]);
if((state_val_16591 === (1))){
var state_16590__$1 = state_16590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16590__$1,(2),res,v);
} else {
if((state_val_16591 === (2))){
var inst_16587 = (state_16590[(2)]);
var inst_16588 = cljs.core.async.close_BANG_.call(null,res);
var state_16590__$1 = (function (){var statearr_16592 = state_16590;
(statearr_16592[(7)] = inst_16587);

return statearr_16592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16590__$1,inst_16588);
} else {
return null;
}
}
});})(c__16418__auto___16754,res,vec__16583,v,p,job,jobs,results))
;
return ((function (switch__16323__auto__,c__16418__auto___16754,res,vec__16583,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____0 = (function (){
var statearr_16593 = [null,null,null,null,null,null,null,null];
(statearr_16593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__);

(statearr_16593[(1)] = (1));

return statearr_16593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____1 = (function (state_16590){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_16590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e16594){if((e16594 instanceof Object)){
var ex__16327__auto__ = e16594;
var statearr_16595_16755 = state_16590;
(statearr_16595_16755[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16756 = state_16590;
state_16590 = G__16756;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__ = function(state_16590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____1.call(this,state_16590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto___16754,res,vec__16583,v,p,job,jobs,results))
})();
var state__16420__auto__ = (function (){var statearr_16596 = f__16419__auto__.call(null);
(statearr_16596[(6)] = c__16418__auto___16754);

return statearr_16596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto___16754,res,vec__16583,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16597){
var vec__16598 = p__16597;
var v = cljs.core.nth.call(null,vec__16598,(0),null);
var p = cljs.core.nth.call(null,vec__16598,(1),null);
var job = vec__16598;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___16757 = n;
var __16758 = (0);
while(true){
if((__16758 < n__4607__auto___16757)){
var G__16601_16759 = type;
var G__16601_16760__$1 = (((G__16601_16759 instanceof cljs.core.Keyword))?G__16601_16759.fqn:null);
switch (G__16601_16760__$1) {
case "compute":
var c__16418__auto___16762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16758,c__16418__auto___16762,G__16601_16759,G__16601_16760__$1,n__4607__auto___16757,jobs,results,process,async){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (__16758,c__16418__auto___16762,G__16601_16759,G__16601_16760__$1,n__4607__auto___16757,jobs,results,process,async){
return (function (state_16614){
var state_val_16615 = (state_16614[(1)]);
if((state_val_16615 === (1))){
var state_16614__$1 = state_16614;
var statearr_16616_16763 = state_16614__$1;
(statearr_16616_16763[(2)] = null);

(statearr_16616_16763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16615 === (2))){
var state_16614__$1 = state_16614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16614__$1,(4),jobs);
} else {
if((state_val_16615 === (3))){
var inst_16612 = (state_16614[(2)]);
var state_16614__$1 = state_16614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16614__$1,inst_16612);
} else {
if((state_val_16615 === (4))){
var inst_16604 = (state_16614[(2)]);
var inst_16605 = process.call(null,inst_16604);
var state_16614__$1 = state_16614;
if(cljs.core.truth_(inst_16605)){
var statearr_16617_16764 = state_16614__$1;
(statearr_16617_16764[(1)] = (5));

} else {
var statearr_16618_16765 = state_16614__$1;
(statearr_16618_16765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16615 === (5))){
var state_16614__$1 = state_16614;
var statearr_16619_16766 = state_16614__$1;
(statearr_16619_16766[(2)] = null);

(statearr_16619_16766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16615 === (6))){
var state_16614__$1 = state_16614;
var statearr_16620_16767 = state_16614__$1;
(statearr_16620_16767[(2)] = null);

(statearr_16620_16767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16615 === (7))){
var inst_16610 = (state_16614[(2)]);
var state_16614__$1 = state_16614;
var statearr_16621_16768 = state_16614__$1;
(statearr_16621_16768[(2)] = inst_16610);

(statearr_16621_16768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16758,c__16418__auto___16762,G__16601_16759,G__16601_16760__$1,n__4607__auto___16757,jobs,results,process,async))
;
return ((function (__16758,switch__16323__auto__,c__16418__auto___16762,G__16601_16759,G__16601_16760__$1,n__4607__auto___16757,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____0 = (function (){
var statearr_16622 = [null,null,null,null,null,null,null];
(statearr_16622[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__);

(statearr_16622[(1)] = (1));

return statearr_16622;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____1 = (function (state_16614){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_16614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e16623){if((e16623 instanceof Object)){
var ex__16327__auto__ = e16623;
var statearr_16624_16769 = state_16614;
(statearr_16624_16769[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16770 = state_16614;
state_16614 = G__16770;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__ = function(state_16614){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____1.call(this,state_16614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__;
})()
;})(__16758,switch__16323__auto__,c__16418__auto___16762,G__16601_16759,G__16601_16760__$1,n__4607__auto___16757,jobs,results,process,async))
})();
var state__16420__auto__ = (function (){var statearr_16625 = f__16419__auto__.call(null);
(statearr_16625[(6)] = c__16418__auto___16762);

return statearr_16625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(__16758,c__16418__auto___16762,G__16601_16759,G__16601_16760__$1,n__4607__auto___16757,jobs,results,process,async))
);


break;
case "async":
var c__16418__auto___16771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16758,c__16418__auto___16771,G__16601_16759,G__16601_16760__$1,n__4607__auto___16757,jobs,results,process,async){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (__16758,c__16418__auto___16771,G__16601_16759,G__16601_16760__$1,n__4607__auto___16757,jobs,results,process,async){
return (function (state_16638){
var state_val_16639 = (state_16638[(1)]);
if((state_val_16639 === (1))){
var state_16638__$1 = state_16638;
var statearr_16640_16772 = state_16638__$1;
(statearr_16640_16772[(2)] = null);

(statearr_16640_16772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16639 === (2))){
var state_16638__$1 = state_16638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16638__$1,(4),jobs);
} else {
if((state_val_16639 === (3))){
var inst_16636 = (state_16638[(2)]);
var state_16638__$1 = state_16638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16638__$1,inst_16636);
} else {
if((state_val_16639 === (4))){
var inst_16628 = (state_16638[(2)]);
var inst_16629 = async.call(null,inst_16628);
var state_16638__$1 = state_16638;
if(cljs.core.truth_(inst_16629)){
var statearr_16641_16773 = state_16638__$1;
(statearr_16641_16773[(1)] = (5));

} else {
var statearr_16642_16774 = state_16638__$1;
(statearr_16642_16774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16639 === (5))){
var state_16638__$1 = state_16638;
var statearr_16643_16775 = state_16638__$1;
(statearr_16643_16775[(2)] = null);

(statearr_16643_16775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16639 === (6))){
var state_16638__$1 = state_16638;
var statearr_16644_16776 = state_16638__$1;
(statearr_16644_16776[(2)] = null);

(statearr_16644_16776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16639 === (7))){
var inst_16634 = (state_16638[(2)]);
var state_16638__$1 = state_16638;
var statearr_16645_16777 = state_16638__$1;
(statearr_16645_16777[(2)] = inst_16634);

(statearr_16645_16777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16758,c__16418__auto___16771,G__16601_16759,G__16601_16760__$1,n__4607__auto___16757,jobs,results,process,async))
;
return ((function (__16758,switch__16323__auto__,c__16418__auto___16771,G__16601_16759,G__16601_16760__$1,n__4607__auto___16757,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____0 = (function (){
var statearr_16646 = [null,null,null,null,null,null,null];
(statearr_16646[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__);

(statearr_16646[(1)] = (1));

return statearr_16646;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____1 = (function (state_16638){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_16638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e16647){if((e16647 instanceof Object)){
var ex__16327__auto__ = e16647;
var statearr_16648_16778 = state_16638;
(statearr_16648_16778[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16779 = state_16638;
state_16638 = G__16779;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__ = function(state_16638){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____1.call(this,state_16638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__;
})()
;})(__16758,switch__16323__auto__,c__16418__auto___16771,G__16601_16759,G__16601_16760__$1,n__4607__auto___16757,jobs,results,process,async))
})();
var state__16420__auto__ = (function (){var statearr_16649 = f__16419__auto__.call(null);
(statearr_16649[(6)] = c__16418__auto___16771);

return statearr_16649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(__16758,c__16418__auto___16771,G__16601_16759,G__16601_16760__$1,n__4607__auto___16757,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16601_16760__$1)].join('')));

}

var G__16780 = (__16758 + (1));
__16758 = G__16780;
continue;
} else {
}
break;
}

var c__16418__auto___16781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto___16781,jobs,results,process,async){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto___16781,jobs,results,process,async){
return (function (state_16671){
var state_val_16672 = (state_16671[(1)]);
if((state_val_16672 === (7))){
var inst_16667 = (state_16671[(2)]);
var state_16671__$1 = state_16671;
var statearr_16673_16782 = state_16671__$1;
(statearr_16673_16782[(2)] = inst_16667);

(statearr_16673_16782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16672 === (1))){
var state_16671__$1 = state_16671;
var statearr_16674_16783 = state_16671__$1;
(statearr_16674_16783[(2)] = null);

(statearr_16674_16783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16672 === (4))){
var inst_16652 = (state_16671[(7)]);
var inst_16652__$1 = (state_16671[(2)]);
var inst_16653 = (inst_16652__$1 == null);
var state_16671__$1 = (function (){var statearr_16675 = state_16671;
(statearr_16675[(7)] = inst_16652__$1);

return statearr_16675;
})();
if(cljs.core.truth_(inst_16653)){
var statearr_16676_16784 = state_16671__$1;
(statearr_16676_16784[(1)] = (5));

} else {
var statearr_16677_16785 = state_16671__$1;
(statearr_16677_16785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16672 === (6))){
var inst_16657 = (state_16671[(8)]);
var inst_16652 = (state_16671[(7)]);
var inst_16657__$1 = cljs.core.async.chan.call(null,(1));
var inst_16658 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16659 = [inst_16652,inst_16657__$1];
var inst_16660 = (new cljs.core.PersistentVector(null,2,(5),inst_16658,inst_16659,null));
var state_16671__$1 = (function (){var statearr_16678 = state_16671;
(statearr_16678[(8)] = inst_16657__$1);

return statearr_16678;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16671__$1,(8),jobs,inst_16660);
} else {
if((state_val_16672 === (3))){
var inst_16669 = (state_16671[(2)]);
var state_16671__$1 = state_16671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16671__$1,inst_16669);
} else {
if((state_val_16672 === (2))){
var state_16671__$1 = state_16671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16671__$1,(4),from);
} else {
if((state_val_16672 === (9))){
var inst_16664 = (state_16671[(2)]);
var state_16671__$1 = (function (){var statearr_16679 = state_16671;
(statearr_16679[(9)] = inst_16664);

return statearr_16679;
})();
var statearr_16680_16786 = state_16671__$1;
(statearr_16680_16786[(2)] = null);

(statearr_16680_16786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16672 === (5))){
var inst_16655 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16671__$1 = state_16671;
var statearr_16681_16787 = state_16671__$1;
(statearr_16681_16787[(2)] = inst_16655);

(statearr_16681_16787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16672 === (8))){
var inst_16657 = (state_16671[(8)]);
var inst_16662 = (state_16671[(2)]);
var state_16671__$1 = (function (){var statearr_16682 = state_16671;
(statearr_16682[(10)] = inst_16662);

return statearr_16682;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16671__$1,(9),results,inst_16657);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__16418__auto___16781,jobs,results,process,async))
;
return ((function (switch__16323__auto__,c__16418__auto___16781,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____0 = (function (){
var statearr_16683 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__);

(statearr_16683[(1)] = (1));

return statearr_16683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____1 = (function (state_16671){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_16671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e16684){if((e16684 instanceof Object)){
var ex__16327__auto__ = e16684;
var statearr_16685_16788 = state_16671;
(statearr_16685_16788[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16789 = state_16671;
state_16671 = G__16789;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__ = function(state_16671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____1.call(this,state_16671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto___16781,jobs,results,process,async))
})();
var state__16420__auto__ = (function (){var statearr_16686 = f__16419__auto__.call(null);
(statearr_16686[(6)] = c__16418__auto___16781);

return statearr_16686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto___16781,jobs,results,process,async))
);


var c__16418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto__,jobs,results,process,async){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto__,jobs,results,process,async){
return (function (state_16724){
var state_val_16725 = (state_16724[(1)]);
if((state_val_16725 === (7))){
var inst_16720 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16726_16790 = state_16724__$1;
(statearr_16726_16790[(2)] = inst_16720);

(statearr_16726_16790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (20))){
var state_16724__$1 = state_16724;
var statearr_16727_16791 = state_16724__$1;
(statearr_16727_16791[(2)] = null);

(statearr_16727_16791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (1))){
var state_16724__$1 = state_16724;
var statearr_16728_16792 = state_16724__$1;
(statearr_16728_16792[(2)] = null);

(statearr_16728_16792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (4))){
var inst_16689 = (state_16724[(7)]);
var inst_16689__$1 = (state_16724[(2)]);
var inst_16690 = (inst_16689__$1 == null);
var state_16724__$1 = (function (){var statearr_16729 = state_16724;
(statearr_16729[(7)] = inst_16689__$1);

return statearr_16729;
})();
if(cljs.core.truth_(inst_16690)){
var statearr_16730_16793 = state_16724__$1;
(statearr_16730_16793[(1)] = (5));

} else {
var statearr_16731_16794 = state_16724__$1;
(statearr_16731_16794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (15))){
var inst_16702 = (state_16724[(8)]);
var state_16724__$1 = state_16724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16724__$1,(18),to,inst_16702);
} else {
if((state_val_16725 === (21))){
var inst_16715 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16732_16795 = state_16724__$1;
(statearr_16732_16795[(2)] = inst_16715);

(statearr_16732_16795[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (13))){
var inst_16717 = (state_16724[(2)]);
var state_16724__$1 = (function (){var statearr_16733 = state_16724;
(statearr_16733[(9)] = inst_16717);

return statearr_16733;
})();
var statearr_16734_16796 = state_16724__$1;
(statearr_16734_16796[(2)] = null);

(statearr_16734_16796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (6))){
var inst_16689 = (state_16724[(7)]);
var state_16724__$1 = state_16724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16724__$1,(11),inst_16689);
} else {
if((state_val_16725 === (17))){
var inst_16710 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
if(cljs.core.truth_(inst_16710)){
var statearr_16735_16797 = state_16724__$1;
(statearr_16735_16797[(1)] = (19));

} else {
var statearr_16736_16798 = state_16724__$1;
(statearr_16736_16798[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (3))){
var inst_16722 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16724__$1,inst_16722);
} else {
if((state_val_16725 === (12))){
var inst_16699 = (state_16724[(10)]);
var state_16724__$1 = state_16724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16724__$1,(14),inst_16699);
} else {
if((state_val_16725 === (2))){
var state_16724__$1 = state_16724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16724__$1,(4),results);
} else {
if((state_val_16725 === (19))){
var state_16724__$1 = state_16724;
var statearr_16737_16799 = state_16724__$1;
(statearr_16737_16799[(2)] = null);

(statearr_16737_16799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (11))){
var inst_16699 = (state_16724[(2)]);
var state_16724__$1 = (function (){var statearr_16738 = state_16724;
(statearr_16738[(10)] = inst_16699);

return statearr_16738;
})();
var statearr_16739_16800 = state_16724__$1;
(statearr_16739_16800[(2)] = null);

(statearr_16739_16800[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (9))){
var state_16724__$1 = state_16724;
var statearr_16740_16801 = state_16724__$1;
(statearr_16740_16801[(2)] = null);

(statearr_16740_16801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (5))){
var state_16724__$1 = state_16724;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16741_16802 = state_16724__$1;
(statearr_16741_16802[(1)] = (8));

} else {
var statearr_16742_16803 = state_16724__$1;
(statearr_16742_16803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (14))){
var inst_16704 = (state_16724[(11)]);
var inst_16702 = (state_16724[(8)]);
var inst_16702__$1 = (state_16724[(2)]);
var inst_16703 = (inst_16702__$1 == null);
var inst_16704__$1 = cljs.core.not.call(null,inst_16703);
var state_16724__$1 = (function (){var statearr_16743 = state_16724;
(statearr_16743[(11)] = inst_16704__$1);

(statearr_16743[(8)] = inst_16702__$1);

return statearr_16743;
})();
if(inst_16704__$1){
var statearr_16744_16804 = state_16724__$1;
(statearr_16744_16804[(1)] = (15));

} else {
var statearr_16745_16805 = state_16724__$1;
(statearr_16745_16805[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (16))){
var inst_16704 = (state_16724[(11)]);
var state_16724__$1 = state_16724;
var statearr_16746_16806 = state_16724__$1;
(statearr_16746_16806[(2)] = inst_16704);

(statearr_16746_16806[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (10))){
var inst_16696 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16747_16807 = state_16724__$1;
(statearr_16747_16807[(2)] = inst_16696);

(statearr_16747_16807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (18))){
var inst_16707 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16748_16808 = state_16724__$1;
(statearr_16748_16808[(2)] = inst_16707);

(statearr_16748_16808[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (8))){
var inst_16693 = cljs.core.async.close_BANG_.call(null,to);
var state_16724__$1 = state_16724;
var statearr_16749_16809 = state_16724__$1;
(statearr_16749_16809[(2)] = inst_16693);

(statearr_16749_16809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16418__auto__,jobs,results,process,async))
;
return ((function (switch__16323__auto__,c__16418__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____0 = (function (){
var statearr_16750 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16750[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__);

(statearr_16750[(1)] = (1));

return statearr_16750;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____1 = (function (state_16724){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_16724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e16751){if((e16751 instanceof Object)){
var ex__16327__auto__ = e16751;
var statearr_16752_16810 = state_16724;
(statearr_16752_16810[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16811 = state_16724;
state_16724 = G__16811;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__ = function(state_16724){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____1.call(this,state_16724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto__,jobs,results,process,async))
})();
var state__16420__auto__ = (function (){var statearr_16753 = f__16419__auto__.call(null);
(statearr_16753[(6)] = c__16418__auto__);

return statearr_16753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto__,jobs,results,process,async))
);

return c__16418__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16813 = arguments.length;
switch (G__16813) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16816 = arguments.length;
switch (G__16816) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16819 = arguments.length;
switch (G__16819) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16418__auto___16868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto___16868,tc,fc){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto___16868,tc,fc){
return (function (state_16845){
var state_val_16846 = (state_16845[(1)]);
if((state_val_16846 === (7))){
var inst_16841 = (state_16845[(2)]);
var state_16845__$1 = state_16845;
var statearr_16847_16869 = state_16845__$1;
(statearr_16847_16869[(2)] = inst_16841);

(statearr_16847_16869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (1))){
var state_16845__$1 = state_16845;
var statearr_16848_16870 = state_16845__$1;
(statearr_16848_16870[(2)] = null);

(statearr_16848_16870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (4))){
var inst_16822 = (state_16845[(7)]);
var inst_16822__$1 = (state_16845[(2)]);
var inst_16823 = (inst_16822__$1 == null);
var state_16845__$1 = (function (){var statearr_16849 = state_16845;
(statearr_16849[(7)] = inst_16822__$1);

return statearr_16849;
})();
if(cljs.core.truth_(inst_16823)){
var statearr_16850_16871 = state_16845__$1;
(statearr_16850_16871[(1)] = (5));

} else {
var statearr_16851_16872 = state_16845__$1;
(statearr_16851_16872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (13))){
var state_16845__$1 = state_16845;
var statearr_16852_16873 = state_16845__$1;
(statearr_16852_16873[(2)] = null);

(statearr_16852_16873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (6))){
var inst_16822 = (state_16845[(7)]);
var inst_16828 = p.call(null,inst_16822);
var state_16845__$1 = state_16845;
if(cljs.core.truth_(inst_16828)){
var statearr_16853_16874 = state_16845__$1;
(statearr_16853_16874[(1)] = (9));

} else {
var statearr_16854_16875 = state_16845__$1;
(statearr_16854_16875[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (3))){
var inst_16843 = (state_16845[(2)]);
var state_16845__$1 = state_16845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16845__$1,inst_16843);
} else {
if((state_val_16846 === (12))){
var state_16845__$1 = state_16845;
var statearr_16855_16876 = state_16845__$1;
(statearr_16855_16876[(2)] = null);

(statearr_16855_16876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (2))){
var state_16845__$1 = state_16845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16845__$1,(4),ch);
} else {
if((state_val_16846 === (11))){
var inst_16822 = (state_16845[(7)]);
var inst_16832 = (state_16845[(2)]);
var state_16845__$1 = state_16845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16845__$1,(8),inst_16832,inst_16822);
} else {
if((state_val_16846 === (9))){
var state_16845__$1 = state_16845;
var statearr_16856_16877 = state_16845__$1;
(statearr_16856_16877[(2)] = tc);

(statearr_16856_16877[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (5))){
var inst_16825 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16826 = cljs.core.async.close_BANG_.call(null,fc);
var state_16845__$1 = (function (){var statearr_16857 = state_16845;
(statearr_16857[(8)] = inst_16825);

return statearr_16857;
})();
var statearr_16858_16878 = state_16845__$1;
(statearr_16858_16878[(2)] = inst_16826);

(statearr_16858_16878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (14))){
var inst_16839 = (state_16845[(2)]);
var state_16845__$1 = state_16845;
var statearr_16859_16879 = state_16845__$1;
(statearr_16859_16879[(2)] = inst_16839);

(statearr_16859_16879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (10))){
var state_16845__$1 = state_16845;
var statearr_16860_16880 = state_16845__$1;
(statearr_16860_16880[(2)] = fc);

(statearr_16860_16880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16846 === (8))){
var inst_16834 = (state_16845[(2)]);
var state_16845__$1 = state_16845;
if(cljs.core.truth_(inst_16834)){
var statearr_16861_16881 = state_16845__$1;
(statearr_16861_16881[(1)] = (12));

} else {
var statearr_16862_16882 = state_16845__$1;
(statearr_16862_16882[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16418__auto___16868,tc,fc))
;
return ((function (switch__16323__auto__,c__16418__auto___16868,tc,fc){
return (function() {
var cljs$core$async$state_machine__16324__auto__ = null;
var cljs$core$async$state_machine__16324__auto____0 = (function (){
var statearr_16863 = [null,null,null,null,null,null,null,null,null];
(statearr_16863[(0)] = cljs$core$async$state_machine__16324__auto__);

(statearr_16863[(1)] = (1));

return statearr_16863;
});
var cljs$core$async$state_machine__16324__auto____1 = (function (state_16845){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_16845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e16864){if((e16864 instanceof Object)){
var ex__16327__auto__ = e16864;
var statearr_16865_16883 = state_16845;
(statearr_16865_16883[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16884 = state_16845;
state_16845 = G__16884;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$state_machine__16324__auto__ = function(state_16845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16324__auto____1.call(this,state_16845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16324__auto____0;
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16324__auto____1;
return cljs$core$async$state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto___16868,tc,fc))
})();
var state__16420__auto__ = (function (){var statearr_16866 = f__16419__auto__.call(null);
(statearr_16866[(6)] = c__16418__auto___16868);

return statearr_16866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto___16868,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto__){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto__){
return (function (state_16905){
var state_val_16906 = (state_16905[(1)]);
if((state_val_16906 === (7))){
var inst_16901 = (state_16905[(2)]);
var state_16905__$1 = state_16905;
var statearr_16907_16925 = state_16905__$1;
(statearr_16907_16925[(2)] = inst_16901);

(statearr_16907_16925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16906 === (1))){
var inst_16885 = init;
var state_16905__$1 = (function (){var statearr_16908 = state_16905;
(statearr_16908[(7)] = inst_16885);

return statearr_16908;
})();
var statearr_16909_16926 = state_16905__$1;
(statearr_16909_16926[(2)] = null);

(statearr_16909_16926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16906 === (4))){
var inst_16888 = (state_16905[(8)]);
var inst_16888__$1 = (state_16905[(2)]);
var inst_16889 = (inst_16888__$1 == null);
var state_16905__$1 = (function (){var statearr_16910 = state_16905;
(statearr_16910[(8)] = inst_16888__$1);

return statearr_16910;
})();
if(cljs.core.truth_(inst_16889)){
var statearr_16911_16927 = state_16905__$1;
(statearr_16911_16927[(1)] = (5));

} else {
var statearr_16912_16928 = state_16905__$1;
(statearr_16912_16928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16906 === (6))){
var inst_16892 = (state_16905[(9)]);
var inst_16888 = (state_16905[(8)]);
var inst_16885 = (state_16905[(7)]);
var inst_16892__$1 = f.call(null,inst_16885,inst_16888);
var inst_16893 = cljs.core.reduced_QMARK_.call(null,inst_16892__$1);
var state_16905__$1 = (function (){var statearr_16913 = state_16905;
(statearr_16913[(9)] = inst_16892__$1);

return statearr_16913;
})();
if(inst_16893){
var statearr_16914_16929 = state_16905__$1;
(statearr_16914_16929[(1)] = (8));

} else {
var statearr_16915_16930 = state_16905__$1;
(statearr_16915_16930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16906 === (3))){
var inst_16903 = (state_16905[(2)]);
var state_16905__$1 = state_16905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16905__$1,inst_16903);
} else {
if((state_val_16906 === (2))){
var state_16905__$1 = state_16905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16905__$1,(4),ch);
} else {
if((state_val_16906 === (9))){
var inst_16892 = (state_16905[(9)]);
var inst_16885 = inst_16892;
var state_16905__$1 = (function (){var statearr_16916 = state_16905;
(statearr_16916[(7)] = inst_16885);

return statearr_16916;
})();
var statearr_16917_16931 = state_16905__$1;
(statearr_16917_16931[(2)] = null);

(statearr_16917_16931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16906 === (5))){
var inst_16885 = (state_16905[(7)]);
var state_16905__$1 = state_16905;
var statearr_16918_16932 = state_16905__$1;
(statearr_16918_16932[(2)] = inst_16885);

(statearr_16918_16932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16906 === (10))){
var inst_16899 = (state_16905[(2)]);
var state_16905__$1 = state_16905;
var statearr_16919_16933 = state_16905__$1;
(statearr_16919_16933[(2)] = inst_16899);

(statearr_16919_16933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16906 === (8))){
var inst_16892 = (state_16905[(9)]);
var inst_16895 = cljs.core.deref.call(null,inst_16892);
var state_16905__$1 = state_16905;
var statearr_16920_16934 = state_16905__$1;
(statearr_16920_16934[(2)] = inst_16895);

(statearr_16920_16934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__16418__auto__))
;
return ((function (switch__16323__auto__,c__16418__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16324__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16324__auto____0 = (function (){
var statearr_16921 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16921[(0)] = cljs$core$async$reduce_$_state_machine__16324__auto__);

(statearr_16921[(1)] = (1));

return statearr_16921;
});
var cljs$core$async$reduce_$_state_machine__16324__auto____1 = (function (state_16905){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_16905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e16922){if((e16922 instanceof Object)){
var ex__16327__auto__ = e16922;
var statearr_16923_16935 = state_16905;
(statearr_16923_16935[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16936 = state_16905;
state_16905 = G__16936;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16324__auto__ = function(state_16905){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16324__auto____1.call(this,state_16905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16324__auto____0;
cljs$core$async$reduce_$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16324__auto____1;
return cljs$core$async$reduce_$_state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto__))
})();
var state__16420__auto__ = (function (){var statearr_16924 = f__16419__auto__.call(null);
(statearr_16924[(6)] = c__16418__auto__);

return statearr_16924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto__))
);

return c__16418__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto__,f__$1){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto__,f__$1){
return (function (state_16942){
var state_val_16943 = (state_16942[(1)]);
if((state_val_16943 === (1))){
var inst_16937 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_16942__$1 = state_16942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16942__$1,(2),inst_16937);
} else {
if((state_val_16943 === (2))){
var inst_16939 = (state_16942[(2)]);
var inst_16940 = f__$1.call(null,inst_16939);
var state_16942__$1 = state_16942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16942__$1,inst_16940);
} else {
return null;
}
}
});})(c__16418__auto__,f__$1))
;
return ((function (switch__16323__auto__,c__16418__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16324__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16324__auto____0 = (function (){
var statearr_16944 = [null,null,null,null,null,null,null];
(statearr_16944[(0)] = cljs$core$async$transduce_$_state_machine__16324__auto__);

(statearr_16944[(1)] = (1));

return statearr_16944;
});
var cljs$core$async$transduce_$_state_machine__16324__auto____1 = (function (state_16942){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_16942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e16945){if((e16945 instanceof Object)){
var ex__16327__auto__ = e16945;
var statearr_16946_16948 = state_16942;
(statearr_16946_16948[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16949 = state_16942;
state_16942 = G__16949;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16324__auto__ = function(state_16942){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16324__auto____1.call(this,state_16942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16324__auto____0;
cljs$core$async$transduce_$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16324__auto____1;
return cljs$core$async$transduce_$_state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto__,f__$1))
})();
var state__16420__auto__ = (function (){var statearr_16947 = f__16419__auto__.call(null);
(statearr_16947[(6)] = c__16418__auto__);

return statearr_16947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto__,f__$1))
);

return c__16418__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16951 = arguments.length;
switch (G__16951) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto__){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto__){
return (function (state_16976){
var state_val_16977 = (state_16976[(1)]);
if((state_val_16977 === (7))){
var inst_16958 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
var statearr_16978_16999 = state_16976__$1;
(statearr_16978_16999[(2)] = inst_16958);

(statearr_16978_16999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (1))){
var inst_16952 = cljs.core.seq.call(null,coll);
var inst_16953 = inst_16952;
var state_16976__$1 = (function (){var statearr_16979 = state_16976;
(statearr_16979[(7)] = inst_16953);

return statearr_16979;
})();
var statearr_16980_17000 = state_16976__$1;
(statearr_16980_17000[(2)] = null);

(statearr_16980_17000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (4))){
var inst_16953 = (state_16976[(7)]);
var inst_16956 = cljs.core.first.call(null,inst_16953);
var state_16976__$1 = state_16976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16976__$1,(7),ch,inst_16956);
} else {
if((state_val_16977 === (13))){
var inst_16970 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
var statearr_16981_17001 = state_16976__$1;
(statearr_16981_17001[(2)] = inst_16970);

(statearr_16981_17001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (6))){
var inst_16961 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
if(cljs.core.truth_(inst_16961)){
var statearr_16982_17002 = state_16976__$1;
(statearr_16982_17002[(1)] = (8));

} else {
var statearr_16983_17003 = state_16976__$1;
(statearr_16983_17003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (3))){
var inst_16974 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16976__$1,inst_16974);
} else {
if((state_val_16977 === (12))){
var state_16976__$1 = state_16976;
var statearr_16984_17004 = state_16976__$1;
(statearr_16984_17004[(2)] = null);

(statearr_16984_17004[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (2))){
var inst_16953 = (state_16976[(7)]);
var state_16976__$1 = state_16976;
if(cljs.core.truth_(inst_16953)){
var statearr_16985_17005 = state_16976__$1;
(statearr_16985_17005[(1)] = (4));

} else {
var statearr_16986_17006 = state_16976__$1;
(statearr_16986_17006[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (11))){
var inst_16967 = cljs.core.async.close_BANG_.call(null,ch);
var state_16976__$1 = state_16976;
var statearr_16987_17007 = state_16976__$1;
(statearr_16987_17007[(2)] = inst_16967);

(statearr_16987_17007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (9))){
var state_16976__$1 = state_16976;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16988_17008 = state_16976__$1;
(statearr_16988_17008[(1)] = (11));

} else {
var statearr_16989_17009 = state_16976__$1;
(statearr_16989_17009[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (5))){
var inst_16953 = (state_16976[(7)]);
var state_16976__$1 = state_16976;
var statearr_16990_17010 = state_16976__$1;
(statearr_16990_17010[(2)] = inst_16953);

(statearr_16990_17010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (10))){
var inst_16972 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
var statearr_16991_17011 = state_16976__$1;
(statearr_16991_17011[(2)] = inst_16972);

(statearr_16991_17011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (8))){
var inst_16953 = (state_16976[(7)]);
var inst_16963 = cljs.core.next.call(null,inst_16953);
var inst_16953__$1 = inst_16963;
var state_16976__$1 = (function (){var statearr_16992 = state_16976;
(statearr_16992[(7)] = inst_16953__$1);

return statearr_16992;
})();
var statearr_16993_17012 = state_16976__$1;
(statearr_16993_17012[(2)] = null);

(statearr_16993_17012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16418__auto__))
;
return ((function (switch__16323__auto__,c__16418__auto__){
return (function() {
var cljs$core$async$state_machine__16324__auto__ = null;
var cljs$core$async$state_machine__16324__auto____0 = (function (){
var statearr_16994 = [null,null,null,null,null,null,null,null];
(statearr_16994[(0)] = cljs$core$async$state_machine__16324__auto__);

(statearr_16994[(1)] = (1));

return statearr_16994;
});
var cljs$core$async$state_machine__16324__auto____1 = (function (state_16976){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_16976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e16995){if((e16995 instanceof Object)){
var ex__16327__auto__ = e16995;
var statearr_16996_17013 = state_16976;
(statearr_16996_17013[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17014 = state_16976;
state_16976 = G__17014;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$state_machine__16324__auto__ = function(state_16976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16324__auto____1.call(this,state_16976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16324__auto____0;
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16324__auto____1;
return cljs$core$async$state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto__))
})();
var state__16420__auto__ = (function (){var statearr_16997 = f__16419__auto__.call(null);
(statearr_16997[(6)] = c__16418__auto__);

return statearr_16997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto__))
);

return c__16418__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17015 = (function (ch,cs,meta17016){
this.ch = ch;
this.cs = cs;
this.meta17016 = meta17016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17017,meta17016__$1){
var self__ = this;
var _17017__$1 = this;
return (new cljs.core.async.t_cljs$core$async17015(self__.ch,self__.cs,meta17016__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17017){
var self__ = this;
var _17017__$1 = this;
return self__.meta17016;
});})(cs))
;

cljs.core.async.t_cljs$core$async17015.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17015.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17015.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17015.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17015.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17015.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17016","meta17016",1050904706,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17015";

cljs.core.async.t_cljs$core$async17015.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17015");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17015.
 */
cljs.core.async.__GT_t_cljs$core$async17015 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17015(ch__$1,cs__$1,meta17016){
return (new cljs.core.async.t_cljs$core$async17015(ch__$1,cs__$1,meta17016));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17015(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16418__auto___17237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto___17237,cs,m,dchan,dctr,done){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto___17237,cs,m,dchan,dctr,done){
return (function (state_17152){
var state_val_17153 = (state_17152[(1)]);
if((state_val_17153 === (7))){
var inst_17148 = (state_17152[(2)]);
var state_17152__$1 = state_17152;
var statearr_17154_17238 = state_17152__$1;
(statearr_17154_17238[(2)] = inst_17148);

(statearr_17154_17238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (20))){
var inst_17051 = (state_17152[(7)]);
var inst_17063 = cljs.core.first.call(null,inst_17051);
var inst_17064 = cljs.core.nth.call(null,inst_17063,(0),null);
var inst_17065 = cljs.core.nth.call(null,inst_17063,(1),null);
var state_17152__$1 = (function (){var statearr_17155 = state_17152;
(statearr_17155[(8)] = inst_17064);

return statearr_17155;
})();
if(cljs.core.truth_(inst_17065)){
var statearr_17156_17239 = state_17152__$1;
(statearr_17156_17239[(1)] = (22));

} else {
var statearr_17157_17240 = state_17152__$1;
(statearr_17157_17240[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (27))){
var inst_17095 = (state_17152[(9)]);
var inst_17100 = (state_17152[(10)]);
var inst_17020 = (state_17152[(11)]);
var inst_17093 = (state_17152[(12)]);
var inst_17100__$1 = cljs.core._nth.call(null,inst_17093,inst_17095);
var inst_17101 = cljs.core.async.put_BANG_.call(null,inst_17100__$1,inst_17020,done);
var state_17152__$1 = (function (){var statearr_17158 = state_17152;
(statearr_17158[(10)] = inst_17100__$1);

return statearr_17158;
})();
if(cljs.core.truth_(inst_17101)){
var statearr_17159_17241 = state_17152__$1;
(statearr_17159_17241[(1)] = (30));

} else {
var statearr_17160_17242 = state_17152__$1;
(statearr_17160_17242[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (1))){
var state_17152__$1 = state_17152;
var statearr_17161_17243 = state_17152__$1;
(statearr_17161_17243[(2)] = null);

(statearr_17161_17243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (24))){
var inst_17051 = (state_17152[(7)]);
var inst_17070 = (state_17152[(2)]);
var inst_17071 = cljs.core.next.call(null,inst_17051);
var inst_17029 = inst_17071;
var inst_17030 = null;
var inst_17031 = (0);
var inst_17032 = (0);
var state_17152__$1 = (function (){var statearr_17162 = state_17152;
(statearr_17162[(13)] = inst_17032);

(statearr_17162[(14)] = inst_17031);

(statearr_17162[(15)] = inst_17030);

(statearr_17162[(16)] = inst_17029);

(statearr_17162[(17)] = inst_17070);

return statearr_17162;
})();
var statearr_17163_17244 = state_17152__$1;
(statearr_17163_17244[(2)] = null);

(statearr_17163_17244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (39))){
var state_17152__$1 = state_17152;
var statearr_17167_17245 = state_17152__$1;
(statearr_17167_17245[(2)] = null);

(statearr_17167_17245[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (4))){
var inst_17020 = (state_17152[(11)]);
var inst_17020__$1 = (state_17152[(2)]);
var inst_17021 = (inst_17020__$1 == null);
var state_17152__$1 = (function (){var statearr_17168 = state_17152;
(statearr_17168[(11)] = inst_17020__$1);

return statearr_17168;
})();
if(cljs.core.truth_(inst_17021)){
var statearr_17169_17246 = state_17152__$1;
(statearr_17169_17246[(1)] = (5));

} else {
var statearr_17170_17247 = state_17152__$1;
(statearr_17170_17247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (15))){
var inst_17032 = (state_17152[(13)]);
var inst_17031 = (state_17152[(14)]);
var inst_17030 = (state_17152[(15)]);
var inst_17029 = (state_17152[(16)]);
var inst_17047 = (state_17152[(2)]);
var inst_17048 = (inst_17032 + (1));
var tmp17164 = inst_17031;
var tmp17165 = inst_17030;
var tmp17166 = inst_17029;
var inst_17029__$1 = tmp17166;
var inst_17030__$1 = tmp17165;
var inst_17031__$1 = tmp17164;
var inst_17032__$1 = inst_17048;
var state_17152__$1 = (function (){var statearr_17171 = state_17152;
(statearr_17171[(13)] = inst_17032__$1);

(statearr_17171[(14)] = inst_17031__$1);

(statearr_17171[(15)] = inst_17030__$1);

(statearr_17171[(18)] = inst_17047);

(statearr_17171[(16)] = inst_17029__$1);

return statearr_17171;
})();
var statearr_17172_17248 = state_17152__$1;
(statearr_17172_17248[(2)] = null);

(statearr_17172_17248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (21))){
var inst_17074 = (state_17152[(2)]);
var state_17152__$1 = state_17152;
var statearr_17176_17249 = state_17152__$1;
(statearr_17176_17249[(2)] = inst_17074);

(statearr_17176_17249[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (31))){
var inst_17100 = (state_17152[(10)]);
var inst_17104 = done.call(null,null);
var inst_17105 = cljs.core.async.untap_STAR_.call(null,m,inst_17100);
var state_17152__$1 = (function (){var statearr_17177 = state_17152;
(statearr_17177[(19)] = inst_17104);

return statearr_17177;
})();
var statearr_17178_17250 = state_17152__$1;
(statearr_17178_17250[(2)] = inst_17105);

(statearr_17178_17250[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (32))){
var inst_17095 = (state_17152[(9)]);
var inst_17094 = (state_17152[(20)]);
var inst_17093 = (state_17152[(12)]);
var inst_17092 = (state_17152[(21)]);
var inst_17107 = (state_17152[(2)]);
var inst_17108 = (inst_17095 + (1));
var tmp17173 = inst_17094;
var tmp17174 = inst_17093;
var tmp17175 = inst_17092;
var inst_17092__$1 = tmp17175;
var inst_17093__$1 = tmp17174;
var inst_17094__$1 = tmp17173;
var inst_17095__$1 = inst_17108;
var state_17152__$1 = (function (){var statearr_17179 = state_17152;
(statearr_17179[(9)] = inst_17095__$1);

(statearr_17179[(20)] = inst_17094__$1);

(statearr_17179[(22)] = inst_17107);

(statearr_17179[(12)] = inst_17093__$1);

(statearr_17179[(21)] = inst_17092__$1);

return statearr_17179;
})();
var statearr_17180_17251 = state_17152__$1;
(statearr_17180_17251[(2)] = null);

(statearr_17180_17251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (40))){
var inst_17120 = (state_17152[(23)]);
var inst_17124 = done.call(null,null);
var inst_17125 = cljs.core.async.untap_STAR_.call(null,m,inst_17120);
var state_17152__$1 = (function (){var statearr_17181 = state_17152;
(statearr_17181[(24)] = inst_17124);

return statearr_17181;
})();
var statearr_17182_17252 = state_17152__$1;
(statearr_17182_17252[(2)] = inst_17125);

(statearr_17182_17252[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (33))){
var inst_17111 = (state_17152[(25)]);
var inst_17113 = cljs.core.chunked_seq_QMARK_.call(null,inst_17111);
var state_17152__$1 = state_17152;
if(inst_17113){
var statearr_17183_17253 = state_17152__$1;
(statearr_17183_17253[(1)] = (36));

} else {
var statearr_17184_17254 = state_17152__$1;
(statearr_17184_17254[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (13))){
var inst_17041 = (state_17152[(26)]);
var inst_17044 = cljs.core.async.close_BANG_.call(null,inst_17041);
var state_17152__$1 = state_17152;
var statearr_17185_17255 = state_17152__$1;
(statearr_17185_17255[(2)] = inst_17044);

(statearr_17185_17255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (22))){
var inst_17064 = (state_17152[(8)]);
var inst_17067 = cljs.core.async.close_BANG_.call(null,inst_17064);
var state_17152__$1 = state_17152;
var statearr_17186_17256 = state_17152__$1;
(statearr_17186_17256[(2)] = inst_17067);

(statearr_17186_17256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (36))){
var inst_17111 = (state_17152[(25)]);
var inst_17115 = cljs.core.chunk_first.call(null,inst_17111);
var inst_17116 = cljs.core.chunk_rest.call(null,inst_17111);
var inst_17117 = cljs.core.count.call(null,inst_17115);
var inst_17092 = inst_17116;
var inst_17093 = inst_17115;
var inst_17094 = inst_17117;
var inst_17095 = (0);
var state_17152__$1 = (function (){var statearr_17187 = state_17152;
(statearr_17187[(9)] = inst_17095);

(statearr_17187[(20)] = inst_17094);

(statearr_17187[(12)] = inst_17093);

(statearr_17187[(21)] = inst_17092);

return statearr_17187;
})();
var statearr_17188_17257 = state_17152__$1;
(statearr_17188_17257[(2)] = null);

(statearr_17188_17257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (41))){
var inst_17111 = (state_17152[(25)]);
var inst_17127 = (state_17152[(2)]);
var inst_17128 = cljs.core.next.call(null,inst_17111);
var inst_17092 = inst_17128;
var inst_17093 = null;
var inst_17094 = (0);
var inst_17095 = (0);
var state_17152__$1 = (function (){var statearr_17189 = state_17152;
(statearr_17189[(9)] = inst_17095);

(statearr_17189[(20)] = inst_17094);

(statearr_17189[(27)] = inst_17127);

(statearr_17189[(12)] = inst_17093);

(statearr_17189[(21)] = inst_17092);

return statearr_17189;
})();
var statearr_17190_17258 = state_17152__$1;
(statearr_17190_17258[(2)] = null);

(statearr_17190_17258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (43))){
var state_17152__$1 = state_17152;
var statearr_17191_17259 = state_17152__$1;
(statearr_17191_17259[(2)] = null);

(statearr_17191_17259[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (29))){
var inst_17136 = (state_17152[(2)]);
var state_17152__$1 = state_17152;
var statearr_17192_17260 = state_17152__$1;
(statearr_17192_17260[(2)] = inst_17136);

(statearr_17192_17260[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (44))){
var inst_17145 = (state_17152[(2)]);
var state_17152__$1 = (function (){var statearr_17193 = state_17152;
(statearr_17193[(28)] = inst_17145);

return statearr_17193;
})();
var statearr_17194_17261 = state_17152__$1;
(statearr_17194_17261[(2)] = null);

(statearr_17194_17261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (6))){
var inst_17084 = (state_17152[(29)]);
var inst_17083 = cljs.core.deref.call(null,cs);
var inst_17084__$1 = cljs.core.keys.call(null,inst_17083);
var inst_17085 = cljs.core.count.call(null,inst_17084__$1);
var inst_17086 = cljs.core.reset_BANG_.call(null,dctr,inst_17085);
var inst_17091 = cljs.core.seq.call(null,inst_17084__$1);
var inst_17092 = inst_17091;
var inst_17093 = null;
var inst_17094 = (0);
var inst_17095 = (0);
var state_17152__$1 = (function (){var statearr_17195 = state_17152;
(statearr_17195[(9)] = inst_17095);

(statearr_17195[(20)] = inst_17094);

(statearr_17195[(12)] = inst_17093);

(statearr_17195[(30)] = inst_17086);

(statearr_17195[(21)] = inst_17092);

(statearr_17195[(29)] = inst_17084__$1);

return statearr_17195;
})();
var statearr_17196_17262 = state_17152__$1;
(statearr_17196_17262[(2)] = null);

(statearr_17196_17262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (28))){
var inst_17111 = (state_17152[(25)]);
var inst_17092 = (state_17152[(21)]);
var inst_17111__$1 = cljs.core.seq.call(null,inst_17092);
var state_17152__$1 = (function (){var statearr_17197 = state_17152;
(statearr_17197[(25)] = inst_17111__$1);

return statearr_17197;
})();
if(inst_17111__$1){
var statearr_17198_17263 = state_17152__$1;
(statearr_17198_17263[(1)] = (33));

} else {
var statearr_17199_17264 = state_17152__$1;
(statearr_17199_17264[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (25))){
var inst_17095 = (state_17152[(9)]);
var inst_17094 = (state_17152[(20)]);
var inst_17097 = (inst_17095 < inst_17094);
var inst_17098 = inst_17097;
var state_17152__$1 = state_17152;
if(cljs.core.truth_(inst_17098)){
var statearr_17200_17265 = state_17152__$1;
(statearr_17200_17265[(1)] = (27));

} else {
var statearr_17201_17266 = state_17152__$1;
(statearr_17201_17266[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (34))){
var state_17152__$1 = state_17152;
var statearr_17202_17267 = state_17152__$1;
(statearr_17202_17267[(2)] = null);

(statearr_17202_17267[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (17))){
var state_17152__$1 = state_17152;
var statearr_17203_17268 = state_17152__$1;
(statearr_17203_17268[(2)] = null);

(statearr_17203_17268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (3))){
var inst_17150 = (state_17152[(2)]);
var state_17152__$1 = state_17152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17152__$1,inst_17150);
} else {
if((state_val_17153 === (12))){
var inst_17079 = (state_17152[(2)]);
var state_17152__$1 = state_17152;
var statearr_17204_17269 = state_17152__$1;
(statearr_17204_17269[(2)] = inst_17079);

(statearr_17204_17269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (2))){
var state_17152__$1 = state_17152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17152__$1,(4),ch);
} else {
if((state_val_17153 === (23))){
var state_17152__$1 = state_17152;
var statearr_17205_17270 = state_17152__$1;
(statearr_17205_17270[(2)] = null);

(statearr_17205_17270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (35))){
var inst_17134 = (state_17152[(2)]);
var state_17152__$1 = state_17152;
var statearr_17206_17271 = state_17152__$1;
(statearr_17206_17271[(2)] = inst_17134);

(statearr_17206_17271[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (19))){
var inst_17051 = (state_17152[(7)]);
var inst_17055 = cljs.core.chunk_first.call(null,inst_17051);
var inst_17056 = cljs.core.chunk_rest.call(null,inst_17051);
var inst_17057 = cljs.core.count.call(null,inst_17055);
var inst_17029 = inst_17056;
var inst_17030 = inst_17055;
var inst_17031 = inst_17057;
var inst_17032 = (0);
var state_17152__$1 = (function (){var statearr_17207 = state_17152;
(statearr_17207[(13)] = inst_17032);

(statearr_17207[(14)] = inst_17031);

(statearr_17207[(15)] = inst_17030);

(statearr_17207[(16)] = inst_17029);

return statearr_17207;
})();
var statearr_17208_17272 = state_17152__$1;
(statearr_17208_17272[(2)] = null);

(statearr_17208_17272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (11))){
var inst_17051 = (state_17152[(7)]);
var inst_17029 = (state_17152[(16)]);
var inst_17051__$1 = cljs.core.seq.call(null,inst_17029);
var state_17152__$1 = (function (){var statearr_17209 = state_17152;
(statearr_17209[(7)] = inst_17051__$1);

return statearr_17209;
})();
if(inst_17051__$1){
var statearr_17210_17273 = state_17152__$1;
(statearr_17210_17273[(1)] = (16));

} else {
var statearr_17211_17274 = state_17152__$1;
(statearr_17211_17274[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (9))){
var inst_17081 = (state_17152[(2)]);
var state_17152__$1 = state_17152;
var statearr_17212_17275 = state_17152__$1;
(statearr_17212_17275[(2)] = inst_17081);

(statearr_17212_17275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (5))){
var inst_17027 = cljs.core.deref.call(null,cs);
var inst_17028 = cljs.core.seq.call(null,inst_17027);
var inst_17029 = inst_17028;
var inst_17030 = null;
var inst_17031 = (0);
var inst_17032 = (0);
var state_17152__$1 = (function (){var statearr_17213 = state_17152;
(statearr_17213[(13)] = inst_17032);

(statearr_17213[(14)] = inst_17031);

(statearr_17213[(15)] = inst_17030);

(statearr_17213[(16)] = inst_17029);

return statearr_17213;
})();
var statearr_17214_17276 = state_17152__$1;
(statearr_17214_17276[(2)] = null);

(statearr_17214_17276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (14))){
var state_17152__$1 = state_17152;
var statearr_17215_17277 = state_17152__$1;
(statearr_17215_17277[(2)] = null);

(statearr_17215_17277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (45))){
var inst_17142 = (state_17152[(2)]);
var state_17152__$1 = state_17152;
var statearr_17216_17278 = state_17152__$1;
(statearr_17216_17278[(2)] = inst_17142);

(statearr_17216_17278[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (26))){
var inst_17084 = (state_17152[(29)]);
var inst_17138 = (state_17152[(2)]);
var inst_17139 = cljs.core.seq.call(null,inst_17084);
var state_17152__$1 = (function (){var statearr_17217 = state_17152;
(statearr_17217[(31)] = inst_17138);

return statearr_17217;
})();
if(inst_17139){
var statearr_17218_17279 = state_17152__$1;
(statearr_17218_17279[(1)] = (42));

} else {
var statearr_17219_17280 = state_17152__$1;
(statearr_17219_17280[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (16))){
var inst_17051 = (state_17152[(7)]);
var inst_17053 = cljs.core.chunked_seq_QMARK_.call(null,inst_17051);
var state_17152__$1 = state_17152;
if(inst_17053){
var statearr_17220_17281 = state_17152__$1;
(statearr_17220_17281[(1)] = (19));

} else {
var statearr_17221_17282 = state_17152__$1;
(statearr_17221_17282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (38))){
var inst_17131 = (state_17152[(2)]);
var state_17152__$1 = state_17152;
var statearr_17222_17283 = state_17152__$1;
(statearr_17222_17283[(2)] = inst_17131);

(statearr_17222_17283[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (30))){
var state_17152__$1 = state_17152;
var statearr_17223_17284 = state_17152__$1;
(statearr_17223_17284[(2)] = null);

(statearr_17223_17284[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (10))){
var inst_17032 = (state_17152[(13)]);
var inst_17030 = (state_17152[(15)]);
var inst_17040 = cljs.core._nth.call(null,inst_17030,inst_17032);
var inst_17041 = cljs.core.nth.call(null,inst_17040,(0),null);
var inst_17042 = cljs.core.nth.call(null,inst_17040,(1),null);
var state_17152__$1 = (function (){var statearr_17224 = state_17152;
(statearr_17224[(26)] = inst_17041);

return statearr_17224;
})();
if(cljs.core.truth_(inst_17042)){
var statearr_17225_17285 = state_17152__$1;
(statearr_17225_17285[(1)] = (13));

} else {
var statearr_17226_17286 = state_17152__$1;
(statearr_17226_17286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (18))){
var inst_17077 = (state_17152[(2)]);
var state_17152__$1 = state_17152;
var statearr_17227_17287 = state_17152__$1;
(statearr_17227_17287[(2)] = inst_17077);

(statearr_17227_17287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (42))){
var state_17152__$1 = state_17152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17152__$1,(45),dchan);
} else {
if((state_val_17153 === (37))){
var inst_17111 = (state_17152[(25)]);
var inst_17120 = (state_17152[(23)]);
var inst_17020 = (state_17152[(11)]);
var inst_17120__$1 = cljs.core.first.call(null,inst_17111);
var inst_17121 = cljs.core.async.put_BANG_.call(null,inst_17120__$1,inst_17020,done);
var state_17152__$1 = (function (){var statearr_17228 = state_17152;
(statearr_17228[(23)] = inst_17120__$1);

return statearr_17228;
})();
if(cljs.core.truth_(inst_17121)){
var statearr_17229_17288 = state_17152__$1;
(statearr_17229_17288[(1)] = (39));

} else {
var statearr_17230_17289 = state_17152__$1;
(statearr_17230_17289[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (8))){
var inst_17032 = (state_17152[(13)]);
var inst_17031 = (state_17152[(14)]);
var inst_17034 = (inst_17032 < inst_17031);
var inst_17035 = inst_17034;
var state_17152__$1 = state_17152;
if(cljs.core.truth_(inst_17035)){
var statearr_17231_17290 = state_17152__$1;
(statearr_17231_17290[(1)] = (10));

} else {
var statearr_17232_17291 = state_17152__$1;
(statearr_17232_17291[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16418__auto___17237,cs,m,dchan,dctr,done))
;
return ((function (switch__16323__auto__,c__16418__auto___17237,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16324__auto__ = null;
var cljs$core$async$mult_$_state_machine__16324__auto____0 = (function (){
var statearr_17233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17233[(0)] = cljs$core$async$mult_$_state_machine__16324__auto__);

(statearr_17233[(1)] = (1));

return statearr_17233;
});
var cljs$core$async$mult_$_state_machine__16324__auto____1 = (function (state_17152){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_17152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e17234){if((e17234 instanceof Object)){
var ex__16327__auto__ = e17234;
var statearr_17235_17292 = state_17152;
(statearr_17235_17292[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17293 = state_17152;
state_17152 = G__17293;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16324__auto__ = function(state_17152){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16324__auto____1.call(this,state_17152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16324__auto____0;
cljs$core$async$mult_$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16324__auto____1;
return cljs$core$async$mult_$_state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto___17237,cs,m,dchan,dctr,done))
})();
var state__16420__auto__ = (function (){var statearr_17236 = f__16419__auto__.call(null);
(statearr_17236[(6)] = c__16418__auto___17237);

return statearr_17236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto___17237,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17295 = arguments.length;
switch (G__17295) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17307 = arguments.length;
var i__4731__auto___17308 = (0);
while(true){
if((i__4731__auto___17308 < len__4730__auto___17307)){
args__4736__auto__.push((arguments[i__4731__auto___17308]));

var G__17309 = (i__4731__auto___17308 + (1));
i__4731__auto___17308 = G__17309;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17301){
var map__17302 = p__17301;
var map__17302__$1 = (((((!((map__17302 == null))))?(((((map__17302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17302):map__17302);
var opts = map__17302__$1;
var statearr_17304_17310 = state;
(statearr_17304_17310[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__17302,map__17302__$1,opts){
return (function (val){
var statearr_17305_17311 = state;
(statearr_17305_17311[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17302,map__17302__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_17306_17312 = state;
(statearr_17306_17312[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17297){
var G__17298 = cljs.core.first.call(null,seq17297);
var seq17297__$1 = cljs.core.next.call(null,seq17297);
var G__17299 = cljs.core.first.call(null,seq17297__$1);
var seq17297__$2 = cljs.core.next.call(null,seq17297__$1);
var G__17300 = cljs.core.first.call(null,seq17297__$2);
var seq17297__$3 = cljs.core.next.call(null,seq17297__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17298,G__17299,G__17300,seq17297__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17313 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17314){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17314 = meta17314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17315,meta17314__$1){
var self__ = this;
var _17315__$1 = this;
return (new cljs.core.async.t_cljs$core$async17313(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17314__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17315){
var self__ = this;
var _17315__$1 = this;
return self__.meta17314;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17313.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17314","meta17314",-13243640,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17313";

cljs.core.async.t_cljs$core$async17313.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17313");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17313.
 */
cljs.core.async.__GT_t_cljs$core$async17313 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17313(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17314){
return (new cljs.core.async.t_cljs$core$async17313(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17314));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17313(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16418__auto___17477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto___17477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto___17477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17417){
var state_val_17418 = (state_17417[(1)]);
if((state_val_17418 === (7))){
var inst_17332 = (state_17417[(2)]);
var state_17417__$1 = state_17417;
var statearr_17419_17478 = state_17417__$1;
(statearr_17419_17478[(2)] = inst_17332);

(statearr_17419_17478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (20))){
var inst_17344 = (state_17417[(7)]);
var state_17417__$1 = state_17417;
var statearr_17420_17479 = state_17417__$1;
(statearr_17420_17479[(2)] = inst_17344);

(statearr_17420_17479[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (27))){
var state_17417__$1 = state_17417;
var statearr_17421_17480 = state_17417__$1;
(statearr_17421_17480[(2)] = null);

(statearr_17421_17480[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (1))){
var inst_17319 = (state_17417[(8)]);
var inst_17319__$1 = calc_state.call(null);
var inst_17321 = (inst_17319__$1 == null);
var inst_17322 = cljs.core.not.call(null,inst_17321);
var state_17417__$1 = (function (){var statearr_17422 = state_17417;
(statearr_17422[(8)] = inst_17319__$1);

return statearr_17422;
})();
if(inst_17322){
var statearr_17423_17481 = state_17417__$1;
(statearr_17423_17481[(1)] = (2));

} else {
var statearr_17424_17482 = state_17417__$1;
(statearr_17424_17482[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (24))){
var inst_17377 = (state_17417[(9)]);
var inst_17368 = (state_17417[(10)]);
var inst_17391 = (state_17417[(11)]);
var inst_17391__$1 = inst_17368.call(null,inst_17377);
var state_17417__$1 = (function (){var statearr_17425 = state_17417;
(statearr_17425[(11)] = inst_17391__$1);

return statearr_17425;
})();
if(cljs.core.truth_(inst_17391__$1)){
var statearr_17426_17483 = state_17417__$1;
(statearr_17426_17483[(1)] = (29));

} else {
var statearr_17427_17484 = state_17417__$1;
(statearr_17427_17484[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (4))){
var inst_17335 = (state_17417[(2)]);
var state_17417__$1 = state_17417;
if(cljs.core.truth_(inst_17335)){
var statearr_17428_17485 = state_17417__$1;
(statearr_17428_17485[(1)] = (8));

} else {
var statearr_17429_17486 = state_17417__$1;
(statearr_17429_17486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (15))){
var inst_17362 = (state_17417[(2)]);
var state_17417__$1 = state_17417;
if(cljs.core.truth_(inst_17362)){
var statearr_17430_17487 = state_17417__$1;
(statearr_17430_17487[(1)] = (19));

} else {
var statearr_17431_17488 = state_17417__$1;
(statearr_17431_17488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (21))){
var inst_17367 = (state_17417[(12)]);
var inst_17367__$1 = (state_17417[(2)]);
var inst_17368 = cljs.core.get.call(null,inst_17367__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17369 = cljs.core.get.call(null,inst_17367__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17370 = cljs.core.get.call(null,inst_17367__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17417__$1 = (function (){var statearr_17432 = state_17417;
(statearr_17432[(13)] = inst_17369);

(statearr_17432[(10)] = inst_17368);

(statearr_17432[(12)] = inst_17367__$1);

return statearr_17432;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17417__$1,(22),inst_17370);
} else {
if((state_val_17418 === (31))){
var inst_17399 = (state_17417[(2)]);
var state_17417__$1 = state_17417;
if(cljs.core.truth_(inst_17399)){
var statearr_17433_17489 = state_17417__$1;
(statearr_17433_17489[(1)] = (32));

} else {
var statearr_17434_17490 = state_17417__$1;
(statearr_17434_17490[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (32))){
var inst_17376 = (state_17417[(14)]);
var state_17417__$1 = state_17417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17417__$1,(35),out,inst_17376);
} else {
if((state_val_17418 === (33))){
var inst_17367 = (state_17417[(12)]);
var inst_17344 = inst_17367;
var state_17417__$1 = (function (){var statearr_17435 = state_17417;
(statearr_17435[(7)] = inst_17344);

return statearr_17435;
})();
var statearr_17436_17491 = state_17417__$1;
(statearr_17436_17491[(2)] = null);

(statearr_17436_17491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (13))){
var inst_17344 = (state_17417[(7)]);
var inst_17351 = inst_17344.cljs$lang$protocol_mask$partition0$;
var inst_17352 = (inst_17351 & (64));
var inst_17353 = inst_17344.cljs$core$ISeq$;
var inst_17354 = (cljs.core.PROTOCOL_SENTINEL === inst_17353);
var inst_17355 = ((inst_17352) || (inst_17354));
var state_17417__$1 = state_17417;
if(cljs.core.truth_(inst_17355)){
var statearr_17437_17492 = state_17417__$1;
(statearr_17437_17492[(1)] = (16));

} else {
var statearr_17438_17493 = state_17417__$1;
(statearr_17438_17493[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (22))){
var inst_17377 = (state_17417[(9)]);
var inst_17376 = (state_17417[(14)]);
var inst_17375 = (state_17417[(2)]);
var inst_17376__$1 = cljs.core.nth.call(null,inst_17375,(0),null);
var inst_17377__$1 = cljs.core.nth.call(null,inst_17375,(1),null);
var inst_17378 = (inst_17376__$1 == null);
var inst_17379 = cljs.core._EQ_.call(null,inst_17377__$1,change);
var inst_17380 = ((inst_17378) || (inst_17379));
var state_17417__$1 = (function (){var statearr_17439 = state_17417;
(statearr_17439[(9)] = inst_17377__$1);

(statearr_17439[(14)] = inst_17376__$1);

return statearr_17439;
})();
if(cljs.core.truth_(inst_17380)){
var statearr_17440_17494 = state_17417__$1;
(statearr_17440_17494[(1)] = (23));

} else {
var statearr_17441_17495 = state_17417__$1;
(statearr_17441_17495[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (36))){
var inst_17367 = (state_17417[(12)]);
var inst_17344 = inst_17367;
var state_17417__$1 = (function (){var statearr_17442 = state_17417;
(statearr_17442[(7)] = inst_17344);

return statearr_17442;
})();
var statearr_17443_17496 = state_17417__$1;
(statearr_17443_17496[(2)] = null);

(statearr_17443_17496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (29))){
var inst_17391 = (state_17417[(11)]);
var state_17417__$1 = state_17417;
var statearr_17444_17497 = state_17417__$1;
(statearr_17444_17497[(2)] = inst_17391);

(statearr_17444_17497[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (6))){
var state_17417__$1 = state_17417;
var statearr_17445_17498 = state_17417__$1;
(statearr_17445_17498[(2)] = false);

(statearr_17445_17498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (28))){
var inst_17387 = (state_17417[(2)]);
var inst_17388 = calc_state.call(null);
var inst_17344 = inst_17388;
var state_17417__$1 = (function (){var statearr_17446 = state_17417;
(statearr_17446[(15)] = inst_17387);

(statearr_17446[(7)] = inst_17344);

return statearr_17446;
})();
var statearr_17447_17499 = state_17417__$1;
(statearr_17447_17499[(2)] = null);

(statearr_17447_17499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (25))){
var inst_17413 = (state_17417[(2)]);
var state_17417__$1 = state_17417;
var statearr_17448_17500 = state_17417__$1;
(statearr_17448_17500[(2)] = inst_17413);

(statearr_17448_17500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (34))){
var inst_17411 = (state_17417[(2)]);
var state_17417__$1 = state_17417;
var statearr_17449_17501 = state_17417__$1;
(statearr_17449_17501[(2)] = inst_17411);

(statearr_17449_17501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (17))){
var state_17417__$1 = state_17417;
var statearr_17450_17502 = state_17417__$1;
(statearr_17450_17502[(2)] = false);

(statearr_17450_17502[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (3))){
var state_17417__$1 = state_17417;
var statearr_17451_17503 = state_17417__$1;
(statearr_17451_17503[(2)] = false);

(statearr_17451_17503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (12))){
var inst_17415 = (state_17417[(2)]);
var state_17417__$1 = state_17417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17417__$1,inst_17415);
} else {
if((state_val_17418 === (2))){
var inst_17319 = (state_17417[(8)]);
var inst_17324 = inst_17319.cljs$lang$protocol_mask$partition0$;
var inst_17325 = (inst_17324 & (64));
var inst_17326 = inst_17319.cljs$core$ISeq$;
var inst_17327 = (cljs.core.PROTOCOL_SENTINEL === inst_17326);
var inst_17328 = ((inst_17325) || (inst_17327));
var state_17417__$1 = state_17417;
if(cljs.core.truth_(inst_17328)){
var statearr_17452_17504 = state_17417__$1;
(statearr_17452_17504[(1)] = (5));

} else {
var statearr_17453_17505 = state_17417__$1;
(statearr_17453_17505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (23))){
var inst_17376 = (state_17417[(14)]);
var inst_17382 = (inst_17376 == null);
var state_17417__$1 = state_17417;
if(cljs.core.truth_(inst_17382)){
var statearr_17454_17506 = state_17417__$1;
(statearr_17454_17506[(1)] = (26));

} else {
var statearr_17455_17507 = state_17417__$1;
(statearr_17455_17507[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (35))){
var inst_17402 = (state_17417[(2)]);
var state_17417__$1 = state_17417;
if(cljs.core.truth_(inst_17402)){
var statearr_17456_17508 = state_17417__$1;
(statearr_17456_17508[(1)] = (36));

} else {
var statearr_17457_17509 = state_17417__$1;
(statearr_17457_17509[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (19))){
var inst_17344 = (state_17417[(7)]);
var inst_17364 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17344);
var state_17417__$1 = state_17417;
var statearr_17458_17510 = state_17417__$1;
(statearr_17458_17510[(2)] = inst_17364);

(statearr_17458_17510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (11))){
var inst_17344 = (state_17417[(7)]);
var inst_17348 = (inst_17344 == null);
var inst_17349 = cljs.core.not.call(null,inst_17348);
var state_17417__$1 = state_17417;
if(inst_17349){
var statearr_17459_17511 = state_17417__$1;
(statearr_17459_17511[(1)] = (13));

} else {
var statearr_17460_17512 = state_17417__$1;
(statearr_17460_17512[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (9))){
var inst_17319 = (state_17417[(8)]);
var state_17417__$1 = state_17417;
var statearr_17461_17513 = state_17417__$1;
(statearr_17461_17513[(2)] = inst_17319);

(statearr_17461_17513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (5))){
var state_17417__$1 = state_17417;
var statearr_17462_17514 = state_17417__$1;
(statearr_17462_17514[(2)] = true);

(statearr_17462_17514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (14))){
var state_17417__$1 = state_17417;
var statearr_17463_17515 = state_17417__$1;
(statearr_17463_17515[(2)] = false);

(statearr_17463_17515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (26))){
var inst_17377 = (state_17417[(9)]);
var inst_17384 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17377);
var state_17417__$1 = state_17417;
var statearr_17464_17516 = state_17417__$1;
(statearr_17464_17516[(2)] = inst_17384);

(statearr_17464_17516[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (16))){
var state_17417__$1 = state_17417;
var statearr_17465_17517 = state_17417__$1;
(statearr_17465_17517[(2)] = true);

(statearr_17465_17517[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (38))){
var inst_17407 = (state_17417[(2)]);
var state_17417__$1 = state_17417;
var statearr_17466_17518 = state_17417__$1;
(statearr_17466_17518[(2)] = inst_17407);

(statearr_17466_17518[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (30))){
var inst_17377 = (state_17417[(9)]);
var inst_17369 = (state_17417[(13)]);
var inst_17368 = (state_17417[(10)]);
var inst_17394 = cljs.core.empty_QMARK_.call(null,inst_17368);
var inst_17395 = inst_17369.call(null,inst_17377);
var inst_17396 = cljs.core.not.call(null,inst_17395);
var inst_17397 = ((inst_17394) && (inst_17396));
var state_17417__$1 = state_17417;
var statearr_17467_17519 = state_17417__$1;
(statearr_17467_17519[(2)] = inst_17397);

(statearr_17467_17519[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (10))){
var inst_17319 = (state_17417[(8)]);
var inst_17340 = (state_17417[(2)]);
var inst_17341 = cljs.core.get.call(null,inst_17340,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17342 = cljs.core.get.call(null,inst_17340,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17343 = cljs.core.get.call(null,inst_17340,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17344 = inst_17319;
var state_17417__$1 = (function (){var statearr_17468 = state_17417;
(statearr_17468[(16)] = inst_17342);

(statearr_17468[(17)] = inst_17341);

(statearr_17468[(18)] = inst_17343);

(statearr_17468[(7)] = inst_17344);

return statearr_17468;
})();
var statearr_17469_17520 = state_17417__$1;
(statearr_17469_17520[(2)] = null);

(statearr_17469_17520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (18))){
var inst_17359 = (state_17417[(2)]);
var state_17417__$1 = state_17417;
var statearr_17470_17521 = state_17417__$1;
(statearr_17470_17521[(2)] = inst_17359);

(statearr_17470_17521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (37))){
var state_17417__$1 = state_17417;
var statearr_17471_17522 = state_17417__$1;
(statearr_17471_17522[(2)] = null);

(statearr_17471_17522[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17418 === (8))){
var inst_17319 = (state_17417[(8)]);
var inst_17337 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17319);
var state_17417__$1 = state_17417;
var statearr_17472_17523 = state_17417__$1;
(statearr_17472_17523[(2)] = inst_17337);

(statearr_17472_17523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16418__auto___17477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16323__auto__,c__16418__auto___17477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16324__auto__ = null;
var cljs$core$async$mix_$_state_machine__16324__auto____0 = (function (){
var statearr_17473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17473[(0)] = cljs$core$async$mix_$_state_machine__16324__auto__);

(statearr_17473[(1)] = (1));

return statearr_17473;
});
var cljs$core$async$mix_$_state_machine__16324__auto____1 = (function (state_17417){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_17417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e17474){if((e17474 instanceof Object)){
var ex__16327__auto__ = e17474;
var statearr_17475_17524 = state_17417;
(statearr_17475_17524[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17525 = state_17417;
state_17417 = G__17525;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16324__auto__ = function(state_17417){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16324__auto____1.call(this,state_17417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16324__auto____0;
cljs$core$async$mix_$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16324__auto____1;
return cljs$core$async$mix_$_state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto___17477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16420__auto__ = (function (){var statearr_17476 = f__16419__auto__.call(null);
(statearr_17476[(6)] = c__16418__auto___17477);

return statearr_17476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto___17477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17527 = arguments.length;
switch (G__17527) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17531 = arguments.length;
switch (G__17531) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__17529_SHARP_){
if(cljs.core.truth_(p1__17529_SHARP_.call(null,topic))){
return p1__17529_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17529_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17532 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17533){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17533 = meta17533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17534,meta17533__$1){
var self__ = this;
var _17534__$1 = this;
return (new cljs.core.async.t_cljs$core$async17532(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17533__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17534){
var self__ = this;
var _17534__$1 = this;
return self__.meta17533;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17532.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17532.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17532.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17532.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17532.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17532.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17532.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17532.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17533","meta17533",-2089238567,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17532";

cljs.core.async.t_cljs$core$async17532.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17532");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17532.
 */
cljs.core.async.__GT_t_cljs$core$async17532 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17532(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17533){
return (new cljs.core.async.t_cljs$core$async17532(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17533));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17532(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16418__auto___17652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto___17652,mults,ensure_mult,p){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto___17652,mults,ensure_mult,p){
return (function (state_17606){
var state_val_17607 = (state_17606[(1)]);
if((state_val_17607 === (7))){
var inst_17602 = (state_17606[(2)]);
var state_17606__$1 = state_17606;
var statearr_17608_17653 = state_17606__$1;
(statearr_17608_17653[(2)] = inst_17602);

(statearr_17608_17653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (20))){
var state_17606__$1 = state_17606;
var statearr_17609_17654 = state_17606__$1;
(statearr_17609_17654[(2)] = null);

(statearr_17609_17654[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (1))){
var state_17606__$1 = state_17606;
var statearr_17610_17655 = state_17606__$1;
(statearr_17610_17655[(2)] = null);

(statearr_17610_17655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (24))){
var inst_17585 = (state_17606[(7)]);
var inst_17594 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17585);
var state_17606__$1 = state_17606;
var statearr_17611_17656 = state_17606__$1;
(statearr_17611_17656[(2)] = inst_17594);

(statearr_17611_17656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (4))){
var inst_17537 = (state_17606[(8)]);
var inst_17537__$1 = (state_17606[(2)]);
var inst_17538 = (inst_17537__$1 == null);
var state_17606__$1 = (function (){var statearr_17612 = state_17606;
(statearr_17612[(8)] = inst_17537__$1);

return statearr_17612;
})();
if(cljs.core.truth_(inst_17538)){
var statearr_17613_17657 = state_17606__$1;
(statearr_17613_17657[(1)] = (5));

} else {
var statearr_17614_17658 = state_17606__$1;
(statearr_17614_17658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (15))){
var inst_17579 = (state_17606[(2)]);
var state_17606__$1 = state_17606;
var statearr_17615_17659 = state_17606__$1;
(statearr_17615_17659[(2)] = inst_17579);

(statearr_17615_17659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (21))){
var inst_17599 = (state_17606[(2)]);
var state_17606__$1 = (function (){var statearr_17616 = state_17606;
(statearr_17616[(9)] = inst_17599);

return statearr_17616;
})();
var statearr_17617_17660 = state_17606__$1;
(statearr_17617_17660[(2)] = null);

(statearr_17617_17660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (13))){
var inst_17561 = (state_17606[(10)]);
var inst_17563 = cljs.core.chunked_seq_QMARK_.call(null,inst_17561);
var state_17606__$1 = state_17606;
if(inst_17563){
var statearr_17618_17661 = state_17606__$1;
(statearr_17618_17661[(1)] = (16));

} else {
var statearr_17619_17662 = state_17606__$1;
(statearr_17619_17662[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (22))){
var inst_17591 = (state_17606[(2)]);
var state_17606__$1 = state_17606;
if(cljs.core.truth_(inst_17591)){
var statearr_17620_17663 = state_17606__$1;
(statearr_17620_17663[(1)] = (23));

} else {
var statearr_17621_17664 = state_17606__$1;
(statearr_17621_17664[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (6))){
var inst_17587 = (state_17606[(11)]);
var inst_17585 = (state_17606[(7)]);
var inst_17537 = (state_17606[(8)]);
var inst_17585__$1 = topic_fn.call(null,inst_17537);
var inst_17586 = cljs.core.deref.call(null,mults);
var inst_17587__$1 = cljs.core.get.call(null,inst_17586,inst_17585__$1);
var state_17606__$1 = (function (){var statearr_17622 = state_17606;
(statearr_17622[(11)] = inst_17587__$1);

(statearr_17622[(7)] = inst_17585__$1);

return statearr_17622;
})();
if(cljs.core.truth_(inst_17587__$1)){
var statearr_17623_17665 = state_17606__$1;
(statearr_17623_17665[(1)] = (19));

} else {
var statearr_17624_17666 = state_17606__$1;
(statearr_17624_17666[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (25))){
var inst_17596 = (state_17606[(2)]);
var state_17606__$1 = state_17606;
var statearr_17625_17667 = state_17606__$1;
(statearr_17625_17667[(2)] = inst_17596);

(statearr_17625_17667[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (17))){
var inst_17561 = (state_17606[(10)]);
var inst_17570 = cljs.core.first.call(null,inst_17561);
var inst_17571 = cljs.core.async.muxch_STAR_.call(null,inst_17570);
var inst_17572 = cljs.core.async.close_BANG_.call(null,inst_17571);
var inst_17573 = cljs.core.next.call(null,inst_17561);
var inst_17547 = inst_17573;
var inst_17548 = null;
var inst_17549 = (0);
var inst_17550 = (0);
var state_17606__$1 = (function (){var statearr_17626 = state_17606;
(statearr_17626[(12)] = inst_17550);

(statearr_17626[(13)] = inst_17549);

(statearr_17626[(14)] = inst_17572);

(statearr_17626[(15)] = inst_17548);

(statearr_17626[(16)] = inst_17547);

return statearr_17626;
})();
var statearr_17627_17668 = state_17606__$1;
(statearr_17627_17668[(2)] = null);

(statearr_17627_17668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (3))){
var inst_17604 = (state_17606[(2)]);
var state_17606__$1 = state_17606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17606__$1,inst_17604);
} else {
if((state_val_17607 === (12))){
var inst_17581 = (state_17606[(2)]);
var state_17606__$1 = state_17606;
var statearr_17628_17669 = state_17606__$1;
(statearr_17628_17669[(2)] = inst_17581);

(statearr_17628_17669[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (2))){
var state_17606__$1 = state_17606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17606__$1,(4),ch);
} else {
if((state_val_17607 === (23))){
var state_17606__$1 = state_17606;
var statearr_17629_17670 = state_17606__$1;
(statearr_17629_17670[(2)] = null);

(statearr_17629_17670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (19))){
var inst_17587 = (state_17606[(11)]);
var inst_17537 = (state_17606[(8)]);
var inst_17589 = cljs.core.async.muxch_STAR_.call(null,inst_17587);
var state_17606__$1 = state_17606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17606__$1,(22),inst_17589,inst_17537);
} else {
if((state_val_17607 === (11))){
var inst_17561 = (state_17606[(10)]);
var inst_17547 = (state_17606[(16)]);
var inst_17561__$1 = cljs.core.seq.call(null,inst_17547);
var state_17606__$1 = (function (){var statearr_17630 = state_17606;
(statearr_17630[(10)] = inst_17561__$1);

return statearr_17630;
})();
if(inst_17561__$1){
var statearr_17631_17671 = state_17606__$1;
(statearr_17631_17671[(1)] = (13));

} else {
var statearr_17632_17672 = state_17606__$1;
(statearr_17632_17672[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (9))){
var inst_17583 = (state_17606[(2)]);
var state_17606__$1 = state_17606;
var statearr_17633_17673 = state_17606__$1;
(statearr_17633_17673[(2)] = inst_17583);

(statearr_17633_17673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (5))){
var inst_17544 = cljs.core.deref.call(null,mults);
var inst_17545 = cljs.core.vals.call(null,inst_17544);
var inst_17546 = cljs.core.seq.call(null,inst_17545);
var inst_17547 = inst_17546;
var inst_17548 = null;
var inst_17549 = (0);
var inst_17550 = (0);
var state_17606__$1 = (function (){var statearr_17634 = state_17606;
(statearr_17634[(12)] = inst_17550);

(statearr_17634[(13)] = inst_17549);

(statearr_17634[(15)] = inst_17548);

(statearr_17634[(16)] = inst_17547);

return statearr_17634;
})();
var statearr_17635_17674 = state_17606__$1;
(statearr_17635_17674[(2)] = null);

(statearr_17635_17674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (14))){
var state_17606__$1 = state_17606;
var statearr_17639_17675 = state_17606__$1;
(statearr_17639_17675[(2)] = null);

(statearr_17639_17675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (16))){
var inst_17561 = (state_17606[(10)]);
var inst_17565 = cljs.core.chunk_first.call(null,inst_17561);
var inst_17566 = cljs.core.chunk_rest.call(null,inst_17561);
var inst_17567 = cljs.core.count.call(null,inst_17565);
var inst_17547 = inst_17566;
var inst_17548 = inst_17565;
var inst_17549 = inst_17567;
var inst_17550 = (0);
var state_17606__$1 = (function (){var statearr_17640 = state_17606;
(statearr_17640[(12)] = inst_17550);

(statearr_17640[(13)] = inst_17549);

(statearr_17640[(15)] = inst_17548);

(statearr_17640[(16)] = inst_17547);

return statearr_17640;
})();
var statearr_17641_17676 = state_17606__$1;
(statearr_17641_17676[(2)] = null);

(statearr_17641_17676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (10))){
var inst_17550 = (state_17606[(12)]);
var inst_17549 = (state_17606[(13)]);
var inst_17548 = (state_17606[(15)]);
var inst_17547 = (state_17606[(16)]);
var inst_17555 = cljs.core._nth.call(null,inst_17548,inst_17550);
var inst_17556 = cljs.core.async.muxch_STAR_.call(null,inst_17555);
var inst_17557 = cljs.core.async.close_BANG_.call(null,inst_17556);
var inst_17558 = (inst_17550 + (1));
var tmp17636 = inst_17549;
var tmp17637 = inst_17548;
var tmp17638 = inst_17547;
var inst_17547__$1 = tmp17638;
var inst_17548__$1 = tmp17637;
var inst_17549__$1 = tmp17636;
var inst_17550__$1 = inst_17558;
var state_17606__$1 = (function (){var statearr_17642 = state_17606;
(statearr_17642[(12)] = inst_17550__$1);

(statearr_17642[(13)] = inst_17549__$1);

(statearr_17642[(15)] = inst_17548__$1);

(statearr_17642[(17)] = inst_17557);

(statearr_17642[(16)] = inst_17547__$1);

return statearr_17642;
})();
var statearr_17643_17677 = state_17606__$1;
(statearr_17643_17677[(2)] = null);

(statearr_17643_17677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (18))){
var inst_17576 = (state_17606[(2)]);
var state_17606__$1 = state_17606;
var statearr_17644_17678 = state_17606__$1;
(statearr_17644_17678[(2)] = inst_17576);

(statearr_17644_17678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17607 === (8))){
var inst_17550 = (state_17606[(12)]);
var inst_17549 = (state_17606[(13)]);
var inst_17552 = (inst_17550 < inst_17549);
var inst_17553 = inst_17552;
var state_17606__$1 = state_17606;
if(cljs.core.truth_(inst_17553)){
var statearr_17645_17679 = state_17606__$1;
(statearr_17645_17679[(1)] = (10));

} else {
var statearr_17646_17680 = state_17606__$1;
(statearr_17646_17680[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16418__auto___17652,mults,ensure_mult,p))
;
return ((function (switch__16323__auto__,c__16418__auto___17652,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16324__auto__ = null;
var cljs$core$async$state_machine__16324__auto____0 = (function (){
var statearr_17647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17647[(0)] = cljs$core$async$state_machine__16324__auto__);

(statearr_17647[(1)] = (1));

return statearr_17647;
});
var cljs$core$async$state_machine__16324__auto____1 = (function (state_17606){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_17606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e17648){if((e17648 instanceof Object)){
var ex__16327__auto__ = e17648;
var statearr_17649_17681 = state_17606;
(statearr_17649_17681[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17682 = state_17606;
state_17606 = G__17682;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$state_machine__16324__auto__ = function(state_17606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16324__auto____1.call(this,state_17606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16324__auto____0;
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16324__auto____1;
return cljs$core$async$state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto___17652,mults,ensure_mult,p))
})();
var state__16420__auto__ = (function (){var statearr_17650 = f__16419__auto__.call(null);
(statearr_17650[(6)] = c__16418__auto___17652);

return statearr_17650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto___17652,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17684 = arguments.length;
switch (G__17684) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17687 = arguments.length;
switch (G__17687) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17690 = arguments.length;
switch (G__17690) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__16418__auto___17757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto___17757,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto___17757,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17729){
var state_val_17730 = (state_17729[(1)]);
if((state_val_17730 === (7))){
var state_17729__$1 = state_17729;
var statearr_17731_17758 = state_17729__$1;
(statearr_17731_17758[(2)] = null);

(statearr_17731_17758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (1))){
var state_17729__$1 = state_17729;
var statearr_17732_17759 = state_17729__$1;
(statearr_17732_17759[(2)] = null);

(statearr_17732_17759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (4))){
var inst_17693 = (state_17729[(7)]);
var inst_17695 = (inst_17693 < cnt);
var state_17729__$1 = state_17729;
if(cljs.core.truth_(inst_17695)){
var statearr_17733_17760 = state_17729__$1;
(statearr_17733_17760[(1)] = (6));

} else {
var statearr_17734_17761 = state_17729__$1;
(statearr_17734_17761[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (15))){
var inst_17725 = (state_17729[(2)]);
var state_17729__$1 = state_17729;
var statearr_17735_17762 = state_17729__$1;
(statearr_17735_17762[(2)] = inst_17725);

(statearr_17735_17762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (13))){
var inst_17718 = cljs.core.async.close_BANG_.call(null,out);
var state_17729__$1 = state_17729;
var statearr_17736_17763 = state_17729__$1;
(statearr_17736_17763[(2)] = inst_17718);

(statearr_17736_17763[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (6))){
var state_17729__$1 = state_17729;
var statearr_17737_17764 = state_17729__$1;
(statearr_17737_17764[(2)] = null);

(statearr_17737_17764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (3))){
var inst_17727 = (state_17729[(2)]);
var state_17729__$1 = state_17729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17729__$1,inst_17727);
} else {
if((state_val_17730 === (12))){
var inst_17715 = (state_17729[(8)]);
var inst_17715__$1 = (state_17729[(2)]);
var inst_17716 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17715__$1);
var state_17729__$1 = (function (){var statearr_17738 = state_17729;
(statearr_17738[(8)] = inst_17715__$1);

return statearr_17738;
})();
if(cljs.core.truth_(inst_17716)){
var statearr_17739_17765 = state_17729__$1;
(statearr_17739_17765[(1)] = (13));

} else {
var statearr_17740_17766 = state_17729__$1;
(statearr_17740_17766[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (2))){
var inst_17692 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17693 = (0);
var state_17729__$1 = (function (){var statearr_17741 = state_17729;
(statearr_17741[(9)] = inst_17692);

(statearr_17741[(7)] = inst_17693);

return statearr_17741;
})();
var statearr_17742_17767 = state_17729__$1;
(statearr_17742_17767[(2)] = null);

(statearr_17742_17767[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (11))){
var inst_17693 = (state_17729[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17729,(10),Object,null,(9));
var inst_17702 = chs__$1.call(null,inst_17693);
var inst_17703 = done.call(null,inst_17693);
var inst_17704 = cljs.core.async.take_BANG_.call(null,inst_17702,inst_17703);
var state_17729__$1 = state_17729;
var statearr_17743_17768 = state_17729__$1;
(statearr_17743_17768[(2)] = inst_17704);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17729__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (9))){
var inst_17693 = (state_17729[(7)]);
var inst_17706 = (state_17729[(2)]);
var inst_17707 = (inst_17693 + (1));
var inst_17693__$1 = inst_17707;
var state_17729__$1 = (function (){var statearr_17744 = state_17729;
(statearr_17744[(10)] = inst_17706);

(statearr_17744[(7)] = inst_17693__$1);

return statearr_17744;
})();
var statearr_17745_17769 = state_17729__$1;
(statearr_17745_17769[(2)] = null);

(statearr_17745_17769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (5))){
var inst_17713 = (state_17729[(2)]);
var state_17729__$1 = (function (){var statearr_17746 = state_17729;
(statearr_17746[(11)] = inst_17713);

return statearr_17746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17729__$1,(12),dchan);
} else {
if((state_val_17730 === (14))){
var inst_17715 = (state_17729[(8)]);
var inst_17720 = cljs.core.apply.call(null,f,inst_17715);
var state_17729__$1 = state_17729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17729__$1,(16),out,inst_17720);
} else {
if((state_val_17730 === (16))){
var inst_17722 = (state_17729[(2)]);
var state_17729__$1 = (function (){var statearr_17747 = state_17729;
(statearr_17747[(12)] = inst_17722);

return statearr_17747;
})();
var statearr_17748_17770 = state_17729__$1;
(statearr_17748_17770[(2)] = null);

(statearr_17748_17770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (10))){
var inst_17697 = (state_17729[(2)]);
var inst_17698 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17729__$1 = (function (){var statearr_17749 = state_17729;
(statearr_17749[(13)] = inst_17697);

return statearr_17749;
})();
var statearr_17750_17771 = state_17729__$1;
(statearr_17750_17771[(2)] = inst_17698);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17729__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (8))){
var inst_17711 = (state_17729[(2)]);
var state_17729__$1 = state_17729;
var statearr_17751_17772 = state_17729__$1;
(statearr_17751_17772[(2)] = inst_17711);

(statearr_17751_17772[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16418__auto___17757,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16323__auto__,c__16418__auto___17757,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16324__auto__ = null;
var cljs$core$async$state_machine__16324__auto____0 = (function (){
var statearr_17752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17752[(0)] = cljs$core$async$state_machine__16324__auto__);

(statearr_17752[(1)] = (1));

return statearr_17752;
});
var cljs$core$async$state_machine__16324__auto____1 = (function (state_17729){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_17729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e17753){if((e17753 instanceof Object)){
var ex__16327__auto__ = e17753;
var statearr_17754_17773 = state_17729;
(statearr_17754_17773[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17774 = state_17729;
state_17729 = G__17774;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$state_machine__16324__auto__ = function(state_17729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16324__auto____1.call(this,state_17729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16324__auto____0;
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16324__auto____1;
return cljs$core$async$state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto___17757,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16420__auto__ = (function (){var statearr_17755 = f__16419__auto__.call(null);
(statearr_17755[(6)] = c__16418__auto___17757);

return statearr_17755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto___17757,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17777 = arguments.length;
switch (G__17777) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16418__auto___17831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto___17831,out){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto___17831,out){
return (function (state_17809){
var state_val_17810 = (state_17809[(1)]);
if((state_val_17810 === (7))){
var inst_17788 = (state_17809[(7)]);
var inst_17789 = (state_17809[(8)]);
var inst_17788__$1 = (state_17809[(2)]);
var inst_17789__$1 = cljs.core.nth.call(null,inst_17788__$1,(0),null);
var inst_17790 = cljs.core.nth.call(null,inst_17788__$1,(1),null);
var inst_17791 = (inst_17789__$1 == null);
var state_17809__$1 = (function (){var statearr_17811 = state_17809;
(statearr_17811[(9)] = inst_17790);

(statearr_17811[(7)] = inst_17788__$1);

(statearr_17811[(8)] = inst_17789__$1);

return statearr_17811;
})();
if(cljs.core.truth_(inst_17791)){
var statearr_17812_17832 = state_17809__$1;
(statearr_17812_17832[(1)] = (8));

} else {
var statearr_17813_17833 = state_17809__$1;
(statearr_17813_17833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17810 === (1))){
var inst_17778 = cljs.core.vec.call(null,chs);
var inst_17779 = inst_17778;
var state_17809__$1 = (function (){var statearr_17814 = state_17809;
(statearr_17814[(10)] = inst_17779);

return statearr_17814;
})();
var statearr_17815_17834 = state_17809__$1;
(statearr_17815_17834[(2)] = null);

(statearr_17815_17834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17810 === (4))){
var inst_17779 = (state_17809[(10)]);
var state_17809__$1 = state_17809;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17809__$1,(7),inst_17779);
} else {
if((state_val_17810 === (6))){
var inst_17805 = (state_17809[(2)]);
var state_17809__$1 = state_17809;
var statearr_17816_17835 = state_17809__$1;
(statearr_17816_17835[(2)] = inst_17805);

(statearr_17816_17835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17810 === (3))){
var inst_17807 = (state_17809[(2)]);
var state_17809__$1 = state_17809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17809__$1,inst_17807);
} else {
if((state_val_17810 === (2))){
var inst_17779 = (state_17809[(10)]);
var inst_17781 = cljs.core.count.call(null,inst_17779);
var inst_17782 = (inst_17781 > (0));
var state_17809__$1 = state_17809;
if(cljs.core.truth_(inst_17782)){
var statearr_17818_17836 = state_17809__$1;
(statearr_17818_17836[(1)] = (4));

} else {
var statearr_17819_17837 = state_17809__$1;
(statearr_17819_17837[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17810 === (11))){
var inst_17779 = (state_17809[(10)]);
var inst_17798 = (state_17809[(2)]);
var tmp17817 = inst_17779;
var inst_17779__$1 = tmp17817;
var state_17809__$1 = (function (){var statearr_17820 = state_17809;
(statearr_17820[(11)] = inst_17798);

(statearr_17820[(10)] = inst_17779__$1);

return statearr_17820;
})();
var statearr_17821_17838 = state_17809__$1;
(statearr_17821_17838[(2)] = null);

(statearr_17821_17838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17810 === (9))){
var inst_17789 = (state_17809[(8)]);
var state_17809__$1 = state_17809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17809__$1,(11),out,inst_17789);
} else {
if((state_val_17810 === (5))){
var inst_17803 = cljs.core.async.close_BANG_.call(null,out);
var state_17809__$1 = state_17809;
var statearr_17822_17839 = state_17809__$1;
(statearr_17822_17839[(2)] = inst_17803);

(statearr_17822_17839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17810 === (10))){
var inst_17801 = (state_17809[(2)]);
var state_17809__$1 = state_17809;
var statearr_17823_17840 = state_17809__$1;
(statearr_17823_17840[(2)] = inst_17801);

(statearr_17823_17840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17810 === (8))){
var inst_17790 = (state_17809[(9)]);
var inst_17788 = (state_17809[(7)]);
var inst_17789 = (state_17809[(8)]);
var inst_17779 = (state_17809[(10)]);
var inst_17793 = (function (){var cs = inst_17779;
var vec__17784 = inst_17788;
var v = inst_17789;
var c = inst_17790;
return ((function (cs,vec__17784,v,c,inst_17790,inst_17788,inst_17789,inst_17779,state_val_17810,c__16418__auto___17831,out){
return (function (p1__17775_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17775_SHARP_);
});
;})(cs,vec__17784,v,c,inst_17790,inst_17788,inst_17789,inst_17779,state_val_17810,c__16418__auto___17831,out))
})();
var inst_17794 = cljs.core.filterv.call(null,inst_17793,inst_17779);
var inst_17779__$1 = inst_17794;
var state_17809__$1 = (function (){var statearr_17824 = state_17809;
(statearr_17824[(10)] = inst_17779__$1);

return statearr_17824;
})();
var statearr_17825_17841 = state_17809__$1;
(statearr_17825_17841[(2)] = null);

(statearr_17825_17841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16418__auto___17831,out))
;
return ((function (switch__16323__auto__,c__16418__auto___17831,out){
return (function() {
var cljs$core$async$state_machine__16324__auto__ = null;
var cljs$core$async$state_machine__16324__auto____0 = (function (){
var statearr_17826 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17826[(0)] = cljs$core$async$state_machine__16324__auto__);

(statearr_17826[(1)] = (1));

return statearr_17826;
});
var cljs$core$async$state_machine__16324__auto____1 = (function (state_17809){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_17809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e17827){if((e17827 instanceof Object)){
var ex__16327__auto__ = e17827;
var statearr_17828_17842 = state_17809;
(statearr_17828_17842[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17843 = state_17809;
state_17809 = G__17843;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$state_machine__16324__auto__ = function(state_17809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16324__auto____1.call(this,state_17809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16324__auto____0;
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16324__auto____1;
return cljs$core$async$state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto___17831,out))
})();
var state__16420__auto__ = (function (){var statearr_17829 = f__16419__auto__.call(null);
(statearr_17829[(6)] = c__16418__auto___17831);

return statearr_17829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto___17831,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17845 = arguments.length;
switch (G__17845) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16418__auto___17890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto___17890,out){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto___17890,out){
return (function (state_17869){
var state_val_17870 = (state_17869[(1)]);
if((state_val_17870 === (7))){
var inst_17851 = (state_17869[(7)]);
var inst_17851__$1 = (state_17869[(2)]);
var inst_17852 = (inst_17851__$1 == null);
var inst_17853 = cljs.core.not.call(null,inst_17852);
var state_17869__$1 = (function (){var statearr_17871 = state_17869;
(statearr_17871[(7)] = inst_17851__$1);

return statearr_17871;
})();
if(inst_17853){
var statearr_17872_17891 = state_17869__$1;
(statearr_17872_17891[(1)] = (8));

} else {
var statearr_17873_17892 = state_17869__$1;
(statearr_17873_17892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17870 === (1))){
var inst_17846 = (0);
var state_17869__$1 = (function (){var statearr_17874 = state_17869;
(statearr_17874[(8)] = inst_17846);

return statearr_17874;
})();
var statearr_17875_17893 = state_17869__$1;
(statearr_17875_17893[(2)] = null);

(statearr_17875_17893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17870 === (4))){
var state_17869__$1 = state_17869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17869__$1,(7),ch);
} else {
if((state_val_17870 === (6))){
var inst_17864 = (state_17869[(2)]);
var state_17869__$1 = state_17869;
var statearr_17876_17894 = state_17869__$1;
(statearr_17876_17894[(2)] = inst_17864);

(statearr_17876_17894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17870 === (3))){
var inst_17866 = (state_17869[(2)]);
var inst_17867 = cljs.core.async.close_BANG_.call(null,out);
var state_17869__$1 = (function (){var statearr_17877 = state_17869;
(statearr_17877[(9)] = inst_17866);

return statearr_17877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17869__$1,inst_17867);
} else {
if((state_val_17870 === (2))){
var inst_17846 = (state_17869[(8)]);
var inst_17848 = (inst_17846 < n);
var state_17869__$1 = state_17869;
if(cljs.core.truth_(inst_17848)){
var statearr_17878_17895 = state_17869__$1;
(statearr_17878_17895[(1)] = (4));

} else {
var statearr_17879_17896 = state_17869__$1;
(statearr_17879_17896[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17870 === (11))){
var inst_17846 = (state_17869[(8)]);
var inst_17856 = (state_17869[(2)]);
var inst_17857 = (inst_17846 + (1));
var inst_17846__$1 = inst_17857;
var state_17869__$1 = (function (){var statearr_17880 = state_17869;
(statearr_17880[(10)] = inst_17856);

(statearr_17880[(8)] = inst_17846__$1);

return statearr_17880;
})();
var statearr_17881_17897 = state_17869__$1;
(statearr_17881_17897[(2)] = null);

(statearr_17881_17897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17870 === (9))){
var state_17869__$1 = state_17869;
var statearr_17882_17898 = state_17869__$1;
(statearr_17882_17898[(2)] = null);

(statearr_17882_17898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17870 === (5))){
var state_17869__$1 = state_17869;
var statearr_17883_17899 = state_17869__$1;
(statearr_17883_17899[(2)] = null);

(statearr_17883_17899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17870 === (10))){
var inst_17861 = (state_17869[(2)]);
var state_17869__$1 = state_17869;
var statearr_17884_17900 = state_17869__$1;
(statearr_17884_17900[(2)] = inst_17861);

(statearr_17884_17900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17870 === (8))){
var inst_17851 = (state_17869[(7)]);
var state_17869__$1 = state_17869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17869__$1,(11),out,inst_17851);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16418__auto___17890,out))
;
return ((function (switch__16323__auto__,c__16418__auto___17890,out){
return (function() {
var cljs$core$async$state_machine__16324__auto__ = null;
var cljs$core$async$state_machine__16324__auto____0 = (function (){
var statearr_17885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17885[(0)] = cljs$core$async$state_machine__16324__auto__);

(statearr_17885[(1)] = (1));

return statearr_17885;
});
var cljs$core$async$state_machine__16324__auto____1 = (function (state_17869){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_17869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e17886){if((e17886 instanceof Object)){
var ex__16327__auto__ = e17886;
var statearr_17887_17901 = state_17869;
(statearr_17887_17901[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17902 = state_17869;
state_17869 = G__17902;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$state_machine__16324__auto__ = function(state_17869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16324__auto____1.call(this,state_17869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16324__auto____0;
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16324__auto____1;
return cljs$core$async$state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto___17890,out))
})();
var state__16420__auto__ = (function (){var statearr_17888 = f__16419__auto__.call(null);
(statearr_17888[(6)] = c__16418__auto___17890);

return statearr_17888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto___17890,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17904 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17904 = (function (f,ch,meta17905){
this.f = f;
this.ch = ch;
this.meta17905 = meta17905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17906,meta17905__$1){
var self__ = this;
var _17906__$1 = this;
return (new cljs.core.async.t_cljs$core$async17904(self__.f,self__.ch,meta17905__$1));
});

cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17906){
var self__ = this;
var _17906__$1 = this;
return self__.meta17905;
});

cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17907 = (function (f,ch,meta17905,_,fn1,meta17908){
this.f = f;
this.ch = ch;
this.meta17905 = meta17905;
this._ = _;
this.fn1 = fn1;
this.meta17908 = meta17908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17909,meta17908__$1){
var self__ = this;
var _17909__$1 = this;
return (new cljs.core.async.t_cljs$core$async17907(self__.f,self__.ch,self__.meta17905,self__._,self__.fn1,meta17908__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17909){
var self__ = this;
var _17909__$1 = this;
return self__.meta17908;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17907.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17907.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17907.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17907.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17903_SHARP_){
return f1.call(null,(((p1__17903_SHARP_ == null))?null:self__.f.call(null,p1__17903_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17907.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17905","meta17905",1580425967,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17904","cljs.core.async/t_cljs$core$async17904",-2114876902,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17908","meta17908",-792156618,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17907.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17907";

cljs.core.async.t_cljs$core$async17907.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17907");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17907.
 */
cljs.core.async.__GT_t_cljs$core$async17907 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17907(f__$1,ch__$1,meta17905__$1,___$2,fn1__$1,meta17908){
return (new cljs.core.async.t_cljs$core$async17907(f__$1,ch__$1,meta17905__$1,___$2,fn1__$1,meta17908));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17907(self__.f,self__.ch,self__.meta17905,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17905","meta17905",1580425967,null)], null);
});

cljs.core.async.t_cljs$core$async17904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17904";

cljs.core.async.t_cljs$core$async17904.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17904");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17904.
 */
cljs.core.async.__GT_t_cljs$core$async17904 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17904(f__$1,ch__$1,meta17905){
return (new cljs.core.async.t_cljs$core$async17904(f__$1,ch__$1,meta17905));
});

}

return (new cljs.core.async.t_cljs$core$async17904(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17910 = (function (f,ch,meta17911){
this.f = f;
this.ch = ch;
this.meta17911 = meta17911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17912,meta17911__$1){
var self__ = this;
var _17912__$1 = this;
return (new cljs.core.async.t_cljs$core$async17910(self__.f,self__.ch,meta17911__$1));
});

cljs.core.async.t_cljs$core$async17910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17912){
var self__ = this;
var _17912__$1 = this;
return self__.meta17911;
});

cljs.core.async.t_cljs$core$async17910.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17910.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17910.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17910.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17910.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17910.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async17910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17911","meta17911",-304149093,null)], null);
});

cljs.core.async.t_cljs$core$async17910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17910";

cljs.core.async.t_cljs$core$async17910.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17910");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17910.
 */
cljs.core.async.__GT_t_cljs$core$async17910 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17910(f__$1,ch__$1,meta17911){
return (new cljs.core.async.t_cljs$core$async17910(f__$1,ch__$1,meta17911));
});

}

return (new cljs.core.async.t_cljs$core$async17910(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17913 = (function (p,ch,meta17914){
this.p = p;
this.ch = ch;
this.meta17914 = meta17914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17915,meta17914__$1){
var self__ = this;
var _17915__$1 = this;
return (new cljs.core.async.t_cljs$core$async17913(self__.p,self__.ch,meta17914__$1));
});

cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17915){
var self__ = this;
var _17915__$1 = this;
return self__.meta17914;
});

cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17914","meta17914",-1144500511,null)], null);
});

cljs.core.async.t_cljs$core$async17913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17913";

cljs.core.async.t_cljs$core$async17913.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17913");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17913.
 */
cljs.core.async.__GT_t_cljs$core$async17913 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17913(p__$1,ch__$1,meta17914){
return (new cljs.core.async.t_cljs$core$async17913(p__$1,ch__$1,meta17914));
});

}

return (new cljs.core.async.t_cljs$core$async17913(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17917 = arguments.length;
switch (G__17917) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16418__auto___17957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto___17957,out){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto___17957,out){
return (function (state_17938){
var state_val_17939 = (state_17938[(1)]);
if((state_val_17939 === (7))){
var inst_17934 = (state_17938[(2)]);
var state_17938__$1 = state_17938;
var statearr_17940_17958 = state_17938__$1;
(statearr_17940_17958[(2)] = inst_17934);

(statearr_17940_17958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17939 === (1))){
var state_17938__$1 = state_17938;
var statearr_17941_17959 = state_17938__$1;
(statearr_17941_17959[(2)] = null);

(statearr_17941_17959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17939 === (4))){
var inst_17920 = (state_17938[(7)]);
var inst_17920__$1 = (state_17938[(2)]);
var inst_17921 = (inst_17920__$1 == null);
var state_17938__$1 = (function (){var statearr_17942 = state_17938;
(statearr_17942[(7)] = inst_17920__$1);

return statearr_17942;
})();
if(cljs.core.truth_(inst_17921)){
var statearr_17943_17960 = state_17938__$1;
(statearr_17943_17960[(1)] = (5));

} else {
var statearr_17944_17961 = state_17938__$1;
(statearr_17944_17961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17939 === (6))){
var inst_17920 = (state_17938[(7)]);
var inst_17925 = p.call(null,inst_17920);
var state_17938__$1 = state_17938;
if(cljs.core.truth_(inst_17925)){
var statearr_17945_17962 = state_17938__$1;
(statearr_17945_17962[(1)] = (8));

} else {
var statearr_17946_17963 = state_17938__$1;
(statearr_17946_17963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17939 === (3))){
var inst_17936 = (state_17938[(2)]);
var state_17938__$1 = state_17938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17938__$1,inst_17936);
} else {
if((state_val_17939 === (2))){
var state_17938__$1 = state_17938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17938__$1,(4),ch);
} else {
if((state_val_17939 === (11))){
var inst_17928 = (state_17938[(2)]);
var state_17938__$1 = state_17938;
var statearr_17947_17964 = state_17938__$1;
(statearr_17947_17964[(2)] = inst_17928);

(statearr_17947_17964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17939 === (9))){
var state_17938__$1 = state_17938;
var statearr_17948_17965 = state_17938__$1;
(statearr_17948_17965[(2)] = null);

(statearr_17948_17965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17939 === (5))){
var inst_17923 = cljs.core.async.close_BANG_.call(null,out);
var state_17938__$1 = state_17938;
var statearr_17949_17966 = state_17938__$1;
(statearr_17949_17966[(2)] = inst_17923);

(statearr_17949_17966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17939 === (10))){
var inst_17931 = (state_17938[(2)]);
var state_17938__$1 = (function (){var statearr_17950 = state_17938;
(statearr_17950[(8)] = inst_17931);

return statearr_17950;
})();
var statearr_17951_17967 = state_17938__$1;
(statearr_17951_17967[(2)] = null);

(statearr_17951_17967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17939 === (8))){
var inst_17920 = (state_17938[(7)]);
var state_17938__$1 = state_17938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17938__$1,(11),out,inst_17920);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16418__auto___17957,out))
;
return ((function (switch__16323__auto__,c__16418__auto___17957,out){
return (function() {
var cljs$core$async$state_machine__16324__auto__ = null;
var cljs$core$async$state_machine__16324__auto____0 = (function (){
var statearr_17952 = [null,null,null,null,null,null,null,null,null];
(statearr_17952[(0)] = cljs$core$async$state_machine__16324__auto__);

(statearr_17952[(1)] = (1));

return statearr_17952;
});
var cljs$core$async$state_machine__16324__auto____1 = (function (state_17938){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_17938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e17953){if((e17953 instanceof Object)){
var ex__16327__auto__ = e17953;
var statearr_17954_17968 = state_17938;
(statearr_17954_17968[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17969 = state_17938;
state_17938 = G__17969;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$state_machine__16324__auto__ = function(state_17938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16324__auto____1.call(this,state_17938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16324__auto____0;
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16324__auto____1;
return cljs$core$async$state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto___17957,out))
})();
var state__16420__auto__ = (function (){var statearr_17955 = f__16419__auto__.call(null);
(statearr_17955[(6)] = c__16418__auto___17957);

return statearr_17955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto___17957,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17971 = arguments.length;
switch (G__17971) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto__){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto__){
return (function (state_18034){
var state_val_18035 = (state_18034[(1)]);
if((state_val_18035 === (7))){
var inst_18030 = (state_18034[(2)]);
var state_18034__$1 = state_18034;
var statearr_18036_18074 = state_18034__$1;
(statearr_18036_18074[(2)] = inst_18030);

(statearr_18036_18074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (20))){
var inst_18000 = (state_18034[(7)]);
var inst_18011 = (state_18034[(2)]);
var inst_18012 = cljs.core.next.call(null,inst_18000);
var inst_17986 = inst_18012;
var inst_17987 = null;
var inst_17988 = (0);
var inst_17989 = (0);
var state_18034__$1 = (function (){var statearr_18037 = state_18034;
(statearr_18037[(8)] = inst_17986);

(statearr_18037[(9)] = inst_18011);

(statearr_18037[(10)] = inst_17988);

(statearr_18037[(11)] = inst_17987);

(statearr_18037[(12)] = inst_17989);

return statearr_18037;
})();
var statearr_18038_18075 = state_18034__$1;
(statearr_18038_18075[(2)] = null);

(statearr_18038_18075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (1))){
var state_18034__$1 = state_18034;
var statearr_18039_18076 = state_18034__$1;
(statearr_18039_18076[(2)] = null);

(statearr_18039_18076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (4))){
var inst_17975 = (state_18034[(13)]);
var inst_17975__$1 = (state_18034[(2)]);
var inst_17976 = (inst_17975__$1 == null);
var state_18034__$1 = (function (){var statearr_18040 = state_18034;
(statearr_18040[(13)] = inst_17975__$1);

return statearr_18040;
})();
if(cljs.core.truth_(inst_17976)){
var statearr_18041_18077 = state_18034__$1;
(statearr_18041_18077[(1)] = (5));

} else {
var statearr_18042_18078 = state_18034__$1;
(statearr_18042_18078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (15))){
var state_18034__$1 = state_18034;
var statearr_18046_18079 = state_18034__$1;
(statearr_18046_18079[(2)] = null);

(statearr_18046_18079[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (21))){
var state_18034__$1 = state_18034;
var statearr_18047_18080 = state_18034__$1;
(statearr_18047_18080[(2)] = null);

(statearr_18047_18080[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (13))){
var inst_17986 = (state_18034[(8)]);
var inst_17988 = (state_18034[(10)]);
var inst_17987 = (state_18034[(11)]);
var inst_17989 = (state_18034[(12)]);
var inst_17996 = (state_18034[(2)]);
var inst_17997 = (inst_17989 + (1));
var tmp18043 = inst_17986;
var tmp18044 = inst_17988;
var tmp18045 = inst_17987;
var inst_17986__$1 = tmp18043;
var inst_17987__$1 = tmp18045;
var inst_17988__$1 = tmp18044;
var inst_17989__$1 = inst_17997;
var state_18034__$1 = (function (){var statearr_18048 = state_18034;
(statearr_18048[(14)] = inst_17996);

(statearr_18048[(8)] = inst_17986__$1);

(statearr_18048[(10)] = inst_17988__$1);

(statearr_18048[(11)] = inst_17987__$1);

(statearr_18048[(12)] = inst_17989__$1);

return statearr_18048;
})();
var statearr_18049_18081 = state_18034__$1;
(statearr_18049_18081[(2)] = null);

(statearr_18049_18081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (22))){
var state_18034__$1 = state_18034;
var statearr_18050_18082 = state_18034__$1;
(statearr_18050_18082[(2)] = null);

(statearr_18050_18082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (6))){
var inst_17975 = (state_18034[(13)]);
var inst_17984 = f.call(null,inst_17975);
var inst_17985 = cljs.core.seq.call(null,inst_17984);
var inst_17986 = inst_17985;
var inst_17987 = null;
var inst_17988 = (0);
var inst_17989 = (0);
var state_18034__$1 = (function (){var statearr_18051 = state_18034;
(statearr_18051[(8)] = inst_17986);

(statearr_18051[(10)] = inst_17988);

(statearr_18051[(11)] = inst_17987);

(statearr_18051[(12)] = inst_17989);

return statearr_18051;
})();
var statearr_18052_18083 = state_18034__$1;
(statearr_18052_18083[(2)] = null);

(statearr_18052_18083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (17))){
var inst_18000 = (state_18034[(7)]);
var inst_18004 = cljs.core.chunk_first.call(null,inst_18000);
var inst_18005 = cljs.core.chunk_rest.call(null,inst_18000);
var inst_18006 = cljs.core.count.call(null,inst_18004);
var inst_17986 = inst_18005;
var inst_17987 = inst_18004;
var inst_17988 = inst_18006;
var inst_17989 = (0);
var state_18034__$1 = (function (){var statearr_18053 = state_18034;
(statearr_18053[(8)] = inst_17986);

(statearr_18053[(10)] = inst_17988);

(statearr_18053[(11)] = inst_17987);

(statearr_18053[(12)] = inst_17989);

return statearr_18053;
})();
var statearr_18054_18084 = state_18034__$1;
(statearr_18054_18084[(2)] = null);

(statearr_18054_18084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (3))){
var inst_18032 = (state_18034[(2)]);
var state_18034__$1 = state_18034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18034__$1,inst_18032);
} else {
if((state_val_18035 === (12))){
var inst_18020 = (state_18034[(2)]);
var state_18034__$1 = state_18034;
var statearr_18055_18085 = state_18034__$1;
(statearr_18055_18085[(2)] = inst_18020);

(statearr_18055_18085[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (2))){
var state_18034__$1 = state_18034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18034__$1,(4),in$);
} else {
if((state_val_18035 === (23))){
var inst_18028 = (state_18034[(2)]);
var state_18034__$1 = state_18034;
var statearr_18056_18086 = state_18034__$1;
(statearr_18056_18086[(2)] = inst_18028);

(statearr_18056_18086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (19))){
var inst_18015 = (state_18034[(2)]);
var state_18034__$1 = state_18034;
var statearr_18057_18087 = state_18034__$1;
(statearr_18057_18087[(2)] = inst_18015);

(statearr_18057_18087[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (11))){
var inst_17986 = (state_18034[(8)]);
var inst_18000 = (state_18034[(7)]);
var inst_18000__$1 = cljs.core.seq.call(null,inst_17986);
var state_18034__$1 = (function (){var statearr_18058 = state_18034;
(statearr_18058[(7)] = inst_18000__$1);

return statearr_18058;
})();
if(inst_18000__$1){
var statearr_18059_18088 = state_18034__$1;
(statearr_18059_18088[(1)] = (14));

} else {
var statearr_18060_18089 = state_18034__$1;
(statearr_18060_18089[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (9))){
var inst_18022 = (state_18034[(2)]);
var inst_18023 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18034__$1 = (function (){var statearr_18061 = state_18034;
(statearr_18061[(15)] = inst_18022);

return statearr_18061;
})();
if(cljs.core.truth_(inst_18023)){
var statearr_18062_18090 = state_18034__$1;
(statearr_18062_18090[(1)] = (21));

} else {
var statearr_18063_18091 = state_18034__$1;
(statearr_18063_18091[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (5))){
var inst_17978 = cljs.core.async.close_BANG_.call(null,out);
var state_18034__$1 = state_18034;
var statearr_18064_18092 = state_18034__$1;
(statearr_18064_18092[(2)] = inst_17978);

(statearr_18064_18092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (14))){
var inst_18000 = (state_18034[(7)]);
var inst_18002 = cljs.core.chunked_seq_QMARK_.call(null,inst_18000);
var state_18034__$1 = state_18034;
if(inst_18002){
var statearr_18065_18093 = state_18034__$1;
(statearr_18065_18093[(1)] = (17));

} else {
var statearr_18066_18094 = state_18034__$1;
(statearr_18066_18094[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (16))){
var inst_18018 = (state_18034[(2)]);
var state_18034__$1 = state_18034;
var statearr_18067_18095 = state_18034__$1;
(statearr_18067_18095[(2)] = inst_18018);

(statearr_18067_18095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (10))){
var inst_17987 = (state_18034[(11)]);
var inst_17989 = (state_18034[(12)]);
var inst_17994 = cljs.core._nth.call(null,inst_17987,inst_17989);
var state_18034__$1 = state_18034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18034__$1,(13),out,inst_17994);
} else {
if((state_val_18035 === (18))){
var inst_18000 = (state_18034[(7)]);
var inst_18009 = cljs.core.first.call(null,inst_18000);
var state_18034__$1 = state_18034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18034__$1,(20),out,inst_18009);
} else {
if((state_val_18035 === (8))){
var inst_17988 = (state_18034[(10)]);
var inst_17989 = (state_18034[(12)]);
var inst_17991 = (inst_17989 < inst_17988);
var inst_17992 = inst_17991;
var state_18034__$1 = state_18034;
if(cljs.core.truth_(inst_17992)){
var statearr_18068_18096 = state_18034__$1;
(statearr_18068_18096[(1)] = (10));

} else {
var statearr_18069_18097 = state_18034__$1;
(statearr_18069_18097[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16418__auto__))
;
return ((function (switch__16323__auto__,c__16418__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16324__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16324__auto____0 = (function (){
var statearr_18070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18070[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16324__auto__);

(statearr_18070[(1)] = (1));

return statearr_18070;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16324__auto____1 = (function (state_18034){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_18034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e18071){if((e18071 instanceof Object)){
var ex__16327__auto__ = e18071;
var statearr_18072_18098 = state_18034;
(statearr_18072_18098[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18099 = state_18034;
state_18034 = G__18099;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16324__auto__ = function(state_18034){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16324__auto____1.call(this,state_18034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16324__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16324__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto__))
})();
var state__16420__auto__ = (function (){var statearr_18073 = f__16419__auto__.call(null);
(statearr_18073[(6)] = c__16418__auto__);

return statearr_18073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto__))
);

return c__16418__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18101 = arguments.length;
switch (G__18101) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18104 = arguments.length;
switch (G__18104) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18107 = arguments.length;
switch (G__18107) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16418__auto___18154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto___18154,out){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto___18154,out){
return (function (state_18131){
var state_val_18132 = (state_18131[(1)]);
if((state_val_18132 === (7))){
var inst_18126 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
var statearr_18133_18155 = state_18131__$1;
(statearr_18133_18155[(2)] = inst_18126);

(statearr_18133_18155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (1))){
var inst_18108 = null;
var state_18131__$1 = (function (){var statearr_18134 = state_18131;
(statearr_18134[(7)] = inst_18108);

return statearr_18134;
})();
var statearr_18135_18156 = state_18131__$1;
(statearr_18135_18156[(2)] = null);

(statearr_18135_18156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (4))){
var inst_18111 = (state_18131[(8)]);
var inst_18111__$1 = (state_18131[(2)]);
var inst_18112 = (inst_18111__$1 == null);
var inst_18113 = cljs.core.not.call(null,inst_18112);
var state_18131__$1 = (function (){var statearr_18136 = state_18131;
(statearr_18136[(8)] = inst_18111__$1);

return statearr_18136;
})();
if(inst_18113){
var statearr_18137_18157 = state_18131__$1;
(statearr_18137_18157[(1)] = (5));

} else {
var statearr_18138_18158 = state_18131__$1;
(statearr_18138_18158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (6))){
var state_18131__$1 = state_18131;
var statearr_18139_18159 = state_18131__$1;
(statearr_18139_18159[(2)] = null);

(statearr_18139_18159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (3))){
var inst_18128 = (state_18131[(2)]);
var inst_18129 = cljs.core.async.close_BANG_.call(null,out);
var state_18131__$1 = (function (){var statearr_18140 = state_18131;
(statearr_18140[(9)] = inst_18128);

return statearr_18140;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18131__$1,inst_18129);
} else {
if((state_val_18132 === (2))){
var state_18131__$1 = state_18131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18131__$1,(4),ch);
} else {
if((state_val_18132 === (11))){
var inst_18111 = (state_18131[(8)]);
var inst_18120 = (state_18131[(2)]);
var inst_18108 = inst_18111;
var state_18131__$1 = (function (){var statearr_18141 = state_18131;
(statearr_18141[(7)] = inst_18108);

(statearr_18141[(10)] = inst_18120);

return statearr_18141;
})();
var statearr_18142_18160 = state_18131__$1;
(statearr_18142_18160[(2)] = null);

(statearr_18142_18160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (9))){
var inst_18111 = (state_18131[(8)]);
var state_18131__$1 = state_18131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18131__$1,(11),out,inst_18111);
} else {
if((state_val_18132 === (5))){
var inst_18108 = (state_18131[(7)]);
var inst_18111 = (state_18131[(8)]);
var inst_18115 = cljs.core._EQ_.call(null,inst_18111,inst_18108);
var state_18131__$1 = state_18131;
if(inst_18115){
var statearr_18144_18161 = state_18131__$1;
(statearr_18144_18161[(1)] = (8));

} else {
var statearr_18145_18162 = state_18131__$1;
(statearr_18145_18162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (10))){
var inst_18123 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
var statearr_18146_18163 = state_18131__$1;
(statearr_18146_18163[(2)] = inst_18123);

(statearr_18146_18163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (8))){
var inst_18108 = (state_18131[(7)]);
var tmp18143 = inst_18108;
var inst_18108__$1 = tmp18143;
var state_18131__$1 = (function (){var statearr_18147 = state_18131;
(statearr_18147[(7)] = inst_18108__$1);

return statearr_18147;
})();
var statearr_18148_18164 = state_18131__$1;
(statearr_18148_18164[(2)] = null);

(statearr_18148_18164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16418__auto___18154,out))
;
return ((function (switch__16323__auto__,c__16418__auto___18154,out){
return (function() {
var cljs$core$async$state_machine__16324__auto__ = null;
var cljs$core$async$state_machine__16324__auto____0 = (function (){
var statearr_18149 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18149[(0)] = cljs$core$async$state_machine__16324__auto__);

(statearr_18149[(1)] = (1));

return statearr_18149;
});
var cljs$core$async$state_machine__16324__auto____1 = (function (state_18131){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_18131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e18150){if((e18150 instanceof Object)){
var ex__16327__auto__ = e18150;
var statearr_18151_18165 = state_18131;
(statearr_18151_18165[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18166 = state_18131;
state_18131 = G__18166;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$state_machine__16324__auto__ = function(state_18131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16324__auto____1.call(this,state_18131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16324__auto____0;
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16324__auto____1;
return cljs$core$async$state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto___18154,out))
})();
var state__16420__auto__ = (function (){var statearr_18152 = f__16419__auto__.call(null);
(statearr_18152[(6)] = c__16418__auto___18154);

return statearr_18152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto___18154,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18168 = arguments.length;
switch (G__18168) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16418__auto___18234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto___18234,out){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto___18234,out){
return (function (state_18206){
var state_val_18207 = (state_18206[(1)]);
if((state_val_18207 === (7))){
var inst_18202 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
var statearr_18208_18235 = state_18206__$1;
(statearr_18208_18235[(2)] = inst_18202);

(statearr_18208_18235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (1))){
var inst_18169 = (new Array(n));
var inst_18170 = inst_18169;
var inst_18171 = (0);
var state_18206__$1 = (function (){var statearr_18209 = state_18206;
(statearr_18209[(7)] = inst_18171);

(statearr_18209[(8)] = inst_18170);

return statearr_18209;
})();
var statearr_18210_18236 = state_18206__$1;
(statearr_18210_18236[(2)] = null);

(statearr_18210_18236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (4))){
var inst_18174 = (state_18206[(9)]);
var inst_18174__$1 = (state_18206[(2)]);
var inst_18175 = (inst_18174__$1 == null);
var inst_18176 = cljs.core.not.call(null,inst_18175);
var state_18206__$1 = (function (){var statearr_18211 = state_18206;
(statearr_18211[(9)] = inst_18174__$1);

return statearr_18211;
})();
if(inst_18176){
var statearr_18212_18237 = state_18206__$1;
(statearr_18212_18237[(1)] = (5));

} else {
var statearr_18213_18238 = state_18206__$1;
(statearr_18213_18238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (15))){
var inst_18196 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
var statearr_18214_18239 = state_18206__$1;
(statearr_18214_18239[(2)] = inst_18196);

(statearr_18214_18239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (13))){
var state_18206__$1 = state_18206;
var statearr_18215_18240 = state_18206__$1;
(statearr_18215_18240[(2)] = null);

(statearr_18215_18240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (6))){
var inst_18171 = (state_18206[(7)]);
var inst_18192 = (inst_18171 > (0));
var state_18206__$1 = state_18206;
if(cljs.core.truth_(inst_18192)){
var statearr_18216_18241 = state_18206__$1;
(statearr_18216_18241[(1)] = (12));

} else {
var statearr_18217_18242 = state_18206__$1;
(statearr_18217_18242[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (3))){
var inst_18204 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18206__$1,inst_18204);
} else {
if((state_val_18207 === (12))){
var inst_18170 = (state_18206[(8)]);
var inst_18194 = cljs.core.vec.call(null,inst_18170);
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18206__$1,(15),out,inst_18194);
} else {
if((state_val_18207 === (2))){
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18206__$1,(4),ch);
} else {
if((state_val_18207 === (11))){
var inst_18186 = (state_18206[(2)]);
var inst_18187 = (new Array(n));
var inst_18170 = inst_18187;
var inst_18171 = (0);
var state_18206__$1 = (function (){var statearr_18218 = state_18206;
(statearr_18218[(7)] = inst_18171);

(statearr_18218[(8)] = inst_18170);

(statearr_18218[(10)] = inst_18186);

return statearr_18218;
})();
var statearr_18219_18243 = state_18206__$1;
(statearr_18219_18243[(2)] = null);

(statearr_18219_18243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (9))){
var inst_18170 = (state_18206[(8)]);
var inst_18184 = cljs.core.vec.call(null,inst_18170);
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18206__$1,(11),out,inst_18184);
} else {
if((state_val_18207 === (5))){
var inst_18171 = (state_18206[(7)]);
var inst_18170 = (state_18206[(8)]);
var inst_18179 = (state_18206[(11)]);
var inst_18174 = (state_18206[(9)]);
var inst_18178 = (inst_18170[inst_18171] = inst_18174);
var inst_18179__$1 = (inst_18171 + (1));
var inst_18180 = (inst_18179__$1 < n);
var state_18206__$1 = (function (){var statearr_18220 = state_18206;
(statearr_18220[(12)] = inst_18178);

(statearr_18220[(11)] = inst_18179__$1);

return statearr_18220;
})();
if(cljs.core.truth_(inst_18180)){
var statearr_18221_18244 = state_18206__$1;
(statearr_18221_18244[(1)] = (8));

} else {
var statearr_18222_18245 = state_18206__$1;
(statearr_18222_18245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (14))){
var inst_18199 = (state_18206[(2)]);
var inst_18200 = cljs.core.async.close_BANG_.call(null,out);
var state_18206__$1 = (function (){var statearr_18224 = state_18206;
(statearr_18224[(13)] = inst_18199);

return statearr_18224;
})();
var statearr_18225_18246 = state_18206__$1;
(statearr_18225_18246[(2)] = inst_18200);

(statearr_18225_18246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (10))){
var inst_18190 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
var statearr_18226_18247 = state_18206__$1;
(statearr_18226_18247[(2)] = inst_18190);

(statearr_18226_18247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (8))){
var inst_18170 = (state_18206[(8)]);
var inst_18179 = (state_18206[(11)]);
var tmp18223 = inst_18170;
var inst_18170__$1 = tmp18223;
var inst_18171 = inst_18179;
var state_18206__$1 = (function (){var statearr_18227 = state_18206;
(statearr_18227[(7)] = inst_18171);

(statearr_18227[(8)] = inst_18170__$1);

return statearr_18227;
})();
var statearr_18228_18248 = state_18206__$1;
(statearr_18228_18248[(2)] = null);

(statearr_18228_18248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16418__auto___18234,out))
;
return ((function (switch__16323__auto__,c__16418__auto___18234,out){
return (function() {
var cljs$core$async$state_machine__16324__auto__ = null;
var cljs$core$async$state_machine__16324__auto____0 = (function (){
var statearr_18229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18229[(0)] = cljs$core$async$state_machine__16324__auto__);

(statearr_18229[(1)] = (1));

return statearr_18229;
});
var cljs$core$async$state_machine__16324__auto____1 = (function (state_18206){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_18206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e18230){if((e18230 instanceof Object)){
var ex__16327__auto__ = e18230;
var statearr_18231_18249 = state_18206;
(statearr_18231_18249[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18250 = state_18206;
state_18206 = G__18250;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$state_machine__16324__auto__ = function(state_18206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16324__auto____1.call(this,state_18206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16324__auto____0;
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16324__auto____1;
return cljs$core$async$state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto___18234,out))
})();
var state__16420__auto__ = (function (){var statearr_18232 = f__16419__auto__.call(null);
(statearr_18232[(6)] = c__16418__auto___18234);

return statearr_18232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto___18234,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18252 = arguments.length;
switch (G__18252) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16418__auto___18322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16418__auto___18322,out){
return (function (){
var f__16419__auto__ = (function (){var switch__16323__auto__ = ((function (c__16418__auto___18322,out){
return (function (state_18294){
var state_val_18295 = (state_18294[(1)]);
if((state_val_18295 === (7))){
var inst_18290 = (state_18294[(2)]);
var state_18294__$1 = state_18294;
var statearr_18296_18323 = state_18294__$1;
(statearr_18296_18323[(2)] = inst_18290);

(statearr_18296_18323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18295 === (1))){
var inst_18253 = [];
var inst_18254 = inst_18253;
var inst_18255 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18294__$1 = (function (){var statearr_18297 = state_18294;
(statearr_18297[(7)] = inst_18255);

(statearr_18297[(8)] = inst_18254);

return statearr_18297;
})();
var statearr_18298_18324 = state_18294__$1;
(statearr_18298_18324[(2)] = null);

(statearr_18298_18324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18295 === (4))){
var inst_18258 = (state_18294[(9)]);
var inst_18258__$1 = (state_18294[(2)]);
var inst_18259 = (inst_18258__$1 == null);
var inst_18260 = cljs.core.not.call(null,inst_18259);
var state_18294__$1 = (function (){var statearr_18299 = state_18294;
(statearr_18299[(9)] = inst_18258__$1);

return statearr_18299;
})();
if(inst_18260){
var statearr_18300_18325 = state_18294__$1;
(statearr_18300_18325[(1)] = (5));

} else {
var statearr_18301_18326 = state_18294__$1;
(statearr_18301_18326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18295 === (15))){
var inst_18284 = (state_18294[(2)]);
var state_18294__$1 = state_18294;
var statearr_18302_18327 = state_18294__$1;
(statearr_18302_18327[(2)] = inst_18284);

(statearr_18302_18327[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18295 === (13))){
var state_18294__$1 = state_18294;
var statearr_18303_18328 = state_18294__$1;
(statearr_18303_18328[(2)] = null);

(statearr_18303_18328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18295 === (6))){
var inst_18254 = (state_18294[(8)]);
var inst_18279 = inst_18254.length;
var inst_18280 = (inst_18279 > (0));
var state_18294__$1 = state_18294;
if(cljs.core.truth_(inst_18280)){
var statearr_18304_18329 = state_18294__$1;
(statearr_18304_18329[(1)] = (12));

} else {
var statearr_18305_18330 = state_18294__$1;
(statearr_18305_18330[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18295 === (3))){
var inst_18292 = (state_18294[(2)]);
var state_18294__$1 = state_18294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18294__$1,inst_18292);
} else {
if((state_val_18295 === (12))){
var inst_18254 = (state_18294[(8)]);
var inst_18282 = cljs.core.vec.call(null,inst_18254);
var state_18294__$1 = state_18294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18294__$1,(15),out,inst_18282);
} else {
if((state_val_18295 === (2))){
var state_18294__$1 = state_18294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18294__$1,(4),ch);
} else {
if((state_val_18295 === (11))){
var inst_18262 = (state_18294[(10)]);
var inst_18258 = (state_18294[(9)]);
var inst_18272 = (state_18294[(2)]);
var inst_18273 = [];
var inst_18274 = inst_18273.push(inst_18258);
var inst_18254 = inst_18273;
var inst_18255 = inst_18262;
var state_18294__$1 = (function (){var statearr_18306 = state_18294;
(statearr_18306[(11)] = inst_18272);

(statearr_18306[(7)] = inst_18255);

(statearr_18306[(8)] = inst_18254);

(statearr_18306[(12)] = inst_18274);

return statearr_18306;
})();
var statearr_18307_18331 = state_18294__$1;
(statearr_18307_18331[(2)] = null);

(statearr_18307_18331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18295 === (9))){
var inst_18254 = (state_18294[(8)]);
var inst_18270 = cljs.core.vec.call(null,inst_18254);
var state_18294__$1 = state_18294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18294__$1,(11),out,inst_18270);
} else {
if((state_val_18295 === (5))){
var inst_18262 = (state_18294[(10)]);
var inst_18255 = (state_18294[(7)]);
var inst_18258 = (state_18294[(9)]);
var inst_18262__$1 = f.call(null,inst_18258);
var inst_18263 = cljs.core._EQ_.call(null,inst_18262__$1,inst_18255);
var inst_18264 = cljs.core.keyword_identical_QMARK_.call(null,inst_18255,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18265 = ((inst_18263) || (inst_18264));
var state_18294__$1 = (function (){var statearr_18308 = state_18294;
(statearr_18308[(10)] = inst_18262__$1);

return statearr_18308;
})();
if(cljs.core.truth_(inst_18265)){
var statearr_18309_18332 = state_18294__$1;
(statearr_18309_18332[(1)] = (8));

} else {
var statearr_18310_18333 = state_18294__$1;
(statearr_18310_18333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18295 === (14))){
var inst_18287 = (state_18294[(2)]);
var inst_18288 = cljs.core.async.close_BANG_.call(null,out);
var state_18294__$1 = (function (){var statearr_18312 = state_18294;
(statearr_18312[(13)] = inst_18287);

return statearr_18312;
})();
var statearr_18313_18334 = state_18294__$1;
(statearr_18313_18334[(2)] = inst_18288);

(statearr_18313_18334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18295 === (10))){
var inst_18277 = (state_18294[(2)]);
var state_18294__$1 = state_18294;
var statearr_18314_18335 = state_18294__$1;
(statearr_18314_18335[(2)] = inst_18277);

(statearr_18314_18335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18295 === (8))){
var inst_18262 = (state_18294[(10)]);
var inst_18254 = (state_18294[(8)]);
var inst_18258 = (state_18294[(9)]);
var inst_18267 = inst_18254.push(inst_18258);
var tmp18311 = inst_18254;
var inst_18254__$1 = tmp18311;
var inst_18255 = inst_18262;
var state_18294__$1 = (function (){var statearr_18315 = state_18294;
(statearr_18315[(7)] = inst_18255);

(statearr_18315[(8)] = inst_18254__$1);

(statearr_18315[(14)] = inst_18267);

return statearr_18315;
})();
var statearr_18316_18336 = state_18294__$1;
(statearr_18316_18336[(2)] = null);

(statearr_18316_18336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16418__auto___18322,out))
;
return ((function (switch__16323__auto__,c__16418__auto___18322,out){
return (function() {
var cljs$core$async$state_machine__16324__auto__ = null;
var cljs$core$async$state_machine__16324__auto____0 = (function (){
var statearr_18317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18317[(0)] = cljs$core$async$state_machine__16324__auto__);

(statearr_18317[(1)] = (1));

return statearr_18317;
});
var cljs$core$async$state_machine__16324__auto____1 = (function (state_18294){
while(true){
var ret_value__16325__auto__ = (function (){try{while(true){
var result__16326__auto__ = switch__16323__auto__.call(null,state_18294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16326__auto__;
}
break;
}
}catch (e18318){if((e18318 instanceof Object)){
var ex__16327__auto__ = e18318;
var statearr_18319_18337 = state_18294;
(statearr_18319_18337[(5)] = ex__16327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18338 = state_18294;
state_18294 = G__18338;
continue;
} else {
return ret_value__16325__auto__;
}
break;
}
});
cljs$core$async$state_machine__16324__auto__ = function(state_18294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16324__auto____1.call(this,state_18294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16324__auto____0;
cljs$core$async$state_machine__16324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16324__auto____1;
return cljs$core$async$state_machine__16324__auto__;
})()
;})(switch__16323__auto__,c__16418__auto___18322,out))
})();
var state__16420__auto__ = (function (){var statearr_18320 = f__16419__auto__.call(null);
(statearr_18320[(6)] = c__16418__auto___18322);

return statearr_18320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16420__auto__);
});})(c__16418__auto___18322,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
