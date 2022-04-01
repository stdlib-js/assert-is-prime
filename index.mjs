// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-prime@esm/index.mjs";var s=t.isPrimitive,i=r;var n=function(e){return!!s(e)&&i(e)},m=t.isObject,d=r;var a=function(e){return!!m(e)&&d(e.valueOf())},o=n,j=a;var l=e,u=function(e){return o(e)||j(e)},v=n,p=a;l(u,"isPrimitive",v),l(u,"isObject",p);var f=u;export{f as default,p as isObject,v as isPrimitive};
//# sourceMappingURL=index.mjs.map
