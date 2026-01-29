// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as s,isObject as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-prime@esm/index.mjs";function r(e){return!!s(e)&&i(e)}function n(e){return!!t(e)&&i(e.valueOf())}function m(e){return r(e)||n(e)}e(m,"isPrimitive",r),e(m,"isObject",n);export{m as default,n as isObject,r as isPrimitive};
//# sourceMappingURL=index.mjs.map
