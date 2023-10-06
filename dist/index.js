"use strict";var e=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var s=e(function(y,n){
var q=require('@stdlib/assert-is-number/dist').isPrimitive,f=require('@stdlib/math-base-assert-is-prime/dist');function o(r){return q(r)?f(r):!1}n.exports=o
});var t=e(function(R,a){
var P=require('@stdlib/assert-is-number/dist').isObject,b=require('@stdlib/math-base-assert-is-prime/dist');function p(r){return P(r)?b(r.valueOf()):!1}a.exports=p
});var v=e(function(g,m){
var O=s(),j=t();function x(r){return O(r)||j(r)}m.exports=x
});var c=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=v(),N=s(),d=t();c(u,"isPrimitive",N);c(u,"isObject",d);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
