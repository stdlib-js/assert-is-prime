// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as s,isObject as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-prime@v0.1.1-esm/index.mjs";function r(e){return!!s(e)&&i(e)}function n(e){return!!t(e)&&i(e.valueOf())}function m(e){return r(e)||n(e)}e(m,"isPrimitive",r),e(m,"isObject",n);export{m as default,n as isObject,r as isPrimitive};
//# sourceMappingURL=index.mjs.map
