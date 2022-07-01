// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__;var c=e,f=function(r,t,e){var c,f,p,b;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(a.call(r,t)||l.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),p="get"in e,b="set"in e,f&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,t,e.get),b&&u&&u.call(r,t,e.set),r},p=t()?c:f;var b=function(r,t,e){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})};var y=function(r){return"number"==typeof r};var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return v&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,m=s;var j=function(r){return m.call(r)},d=Object.prototype.hasOwnProperty;var g=function(r,t){return null!=r&&d.call(r,t)},S="function"==typeof Symbol?Symbol.toStringTag:"",O=g,h=S,w=s;var P=j,T=function(r){var t,e,n;if(null==r)return w.call(r);e=r[h],t=O(r,h);try{r[h]=void 0}catch(t){return w.call(r)}return n=w.call(r),t?r[h]=e:delete r[h],n},E=_()?T:P,k=Number,x=k.prototype.toString;var A=E,G=k,M=function(r){try{return x.call(r),!0}catch(r){return!1}},N=_();var V=function(r){return"object"==typeof r&&(r instanceof G||(N?M(r):"[object Number]"===A(r)))},q=y,C=V;var F=b,z=function(r){return q(r)||C(r)},B=y,D=V;F(z,"isPrimitive",B),F(z,"isObject",D);var H=Math.sqrt,I=Math.floor,J=H,K=I,L={11:!0,13:!0,17:!0,19:!0,23:!0,29:!0,31:!0,37:!0,41:!0,43:!0,47:!0,53:!0,59:!0,61:!0,67:!0,71:!0,73:!0,79:!0,83:!0,89:!0,97:!0,101:!0,103:!0,107:!0,109:!0,113:!0,127:!0,131:!0,137:!0,139:!0,149:!0,151:!0,157:!0,163:!0,167:!0,173:!0,179:!0,181:!0,191:!0,193:!0,197:!0,199:!0,211:!0};var Q=function(r){var t,e;if(K(r)!==r)return!1;if(r<=3)return r>1;if(r>9007199254740991||r%2==0)return!1;if(r<9)return!0;if(r%3==0)return!1;if(r%5==0)return!1;if(r%7==0)return!1;if(L[r])return!0;for(t=K(J(r)),e=11;e<=t;e+=210)if(r%e==0||r%(e+2)==0||r%(e+6)==0||r%(e+8)==0||r%(e+12)==0||r%(e+18)==0||r%(e+20)==0||r%(e+26)==0||r%(e+30)==0||r%(e+32)==0||r%(e+36)==0||r%(e+42)==0||r%(e+48)==0||r%(e+50)==0||r%(e+56)==0||r%(e+60)==0||r%(e+62)==0||r%(e+68)==0||r%(e+72)==0||r%(e+78)==0||r%(e+86)==0||r%(e+90)==0||r%(e+92)==0||r%(e+96)==0||r%(e+98)==0||r%(e+102)==0||r%(e+110)==0||r%(e+116)==0||r%(e+120)==0||r%(e+126)==0||r%(e+128)==0||r%(e+132)==0||r%(e+138)==0||r%(e+140)==0||r%(e+146)==0||r%(e+152)==0||r%(e+156)==0||r%(e+158)==0||r%(e+162)==0||r%(e+168)==0||r%(e+170)==0||r%(e+176)==0||r%(e+180)==0||r%(e+182)==0||r%(e+186)==0||r%(e+188)==0||r%(e+198)==0||r%(e+200)==0)return!1;return!0};function R(r){return!!B(r)&&Q(r)}function U(r){return!!D(r)&&Q(r.valueOf())}function W(r){return R(r)||U(r)}b(W,"isPrimitive",R),b(W,"isObject",U);export{W as default,U as isObject,R as isPrimitive};
//# sourceMappingURL=mod.js.map
