// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,f){var c,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((a="value"in f)&&(u.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=f.value,t.__proto__=c):t[e]=f.value),p="get"in f,y="set"in f,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,f.get),y&&i&&i.call(t,e,f.set),t};function c(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function a(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",d=y()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[_],i=_,e=null!=(o=t)&&s.call(o,i);try{t[_]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[_]=r:delete t[_],n}:function(t){return b.call(t)},m=Number,v=m.prototype.toString,j=y();function g(t){return"object"==typeof t&&(t instanceof m||(j?function(t){try{return v.call(t),!0}catch(t){return!1}}(t):"[object Number]"===d(t)))}function h(t){return a(t)||g(t)}c(h,"isPrimitive",a),c(h,"isObject",g);var S=Math.sqrt,O=Math.floor,w={11:!0,13:!0,17:!0,19:!0,23:!0,29:!0,31:!0,37:!0,41:!0,43:!0,47:!0,53:!0,59:!0,61:!0,67:!0,71:!0,73:!0,79:!0,83:!0,89:!0,97:!0,101:!0,103:!0,107:!0,109:!0,113:!0,127:!0,131:!0,137:!0,139:!0,149:!0,151:!0,157:!0,163:!0,167:!0,173:!0,179:!0,181:!0,191:!0,193:!0,197:!0,199:!0,211:!0};function P(t){var e,r;if(O(t)!==t)return!1;if(t<=3)return t>1;if(t>9007199254740991||t%2==0)return!1;if(t<9)return!0;if(t%3==0)return!1;if(t%5==0)return!1;if(t%7==0)return!1;if(w[t])return!0;for(e=O(S(t)),r=11;r<=e;r+=210)if(t%r==0||t%(r+2)==0||t%(r+6)==0||t%(r+8)==0||t%(r+12)==0||t%(r+18)==0||t%(r+20)==0||t%(r+26)==0||t%(r+30)==0||t%(r+32)==0||t%(r+36)==0||t%(r+42)==0||t%(r+48)==0||t%(r+50)==0||t%(r+56)==0||t%(r+60)==0||t%(r+62)==0||t%(r+68)==0||t%(r+72)==0||t%(r+78)==0||t%(r+86)==0||t%(r+90)==0||t%(r+92)==0||t%(r+96)==0||t%(r+98)==0||t%(r+102)==0||t%(r+110)==0||t%(r+116)==0||t%(r+120)==0||t%(r+126)==0||t%(r+128)==0||t%(r+132)==0||t%(r+138)==0||t%(r+140)==0||t%(r+146)==0||t%(r+152)==0||t%(r+156)==0||t%(r+158)==0||t%(r+162)==0||t%(r+168)==0||t%(r+170)==0||t%(r+176)==0||t%(r+180)==0||t%(r+182)==0||t%(r+186)==0||t%(r+188)==0||t%(r+198)==0||t%(r+200)==0)return!1;return!0}function T(t){return!!a(t)&&P(t)}function x(t){return!!g(t)&&P(t.valueOf())}function E(t){return T(t)||x(t)}return c(E,"isPrimitive",T),c(E,"isObject",x),E},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isPrime=e();
//# sourceMappingURL=browser.js.map
