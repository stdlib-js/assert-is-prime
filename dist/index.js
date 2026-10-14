"use strict";var e=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(q){throw (i=0, q)}};};var s=e(function(R,n){
var f=require('@stdlib/assert-is-number/dist').isPrimitive,o=require('@stdlib/math-base-assert-is-prime/dist');function P(r){return f(r)?o(r):!1}n.exports=P
});var t=e(function(g,a){
var b=require('@stdlib/assert-is-number/dist').isObject,p=require('@stdlib/math-base-assert-is-prime/dist');function O(r){return b(r)?p(r.valueOf()):!1}a.exports=O
});var v=e(function(h,m){
var j=s(),x=t();function N(r){return j(r)||x(r)}m.exports=N
});var c=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=v(),d=s(),l=t();c(u,"isPrimitive",d);c(u,"isObject",l);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
