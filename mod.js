// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var s=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function w(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=u.call(i,y,"$1e"),i=u.call(i,v,"e"),i=u.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=u.call(i,f,"e+0$1"),i=u.call(i,g,"e-0$1"),e.alternate&&(i=u.call(i,d,"$1."),i=u.call(i,h,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===p.call(e.specifier)?p.call(i):l.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,S=isNaN,k=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function E(e){var r,t,i,a,o,s,l,p,u,f,g,d,h;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,p=0;p<e.length;p++)if(i=e[p],"string"==typeof i)s+=i;else{if(r=void 0!==i.precision,!(i=x(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(a=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,S(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),s+=i.arg||"",l+=1}return s}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,i,n;for(t=[],n=0,i=j.exec(e);i;)(r=e.slice(n,j.lastIndex-i[0].length)).length&&t.push(r),t.push(O(i)),n=j.lastIndex,i=j.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function T(e){var r,t;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return E.apply(null,r)}var $=Object.prototype,F=$.toString,P=$.__defineGetter__,I=$.__defineSetter__,A=$.__lookupGetter__,C=$.__lookupSetter__;var R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(A.call(e,r)||C.call(e,r)?(i=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&I&&I.call(e,r,t.set),e};function Z(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){return"number"==typeof e}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return N&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;var U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U?U.toStringTag:"";var q=W()?function(e){var r,t,i,n,a;if(null==e)return L.call(e);t=e[X],a=X,r=null!=(n=e)&&M.call(n,a);try{e[X]=void 0}catch(r){return L.call(e)}return i=L.call(e),r?e[X]=t:delete e[X],i}:function(e){return L.call(e)},z=Number,B=z.prototype.toString;var D=W();function H(e){return"object"==typeof e&&(e instanceof z||(D?function(e){try{return B.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function J(e){return G(e)||H(e)}Z(J,"isPrimitive",G),Z(J,"isObject",H);var K=Math.sqrt,Q=Math.floor,Y=9007199254740991,ee={11:!0,13:!0,17:!0,19:!0,23:!0,29:!0,31:!0,37:!0,41:!0,43:!0,47:!0,53:!0,59:!0,61:!0,67:!0,71:!0,73:!0,79:!0,83:!0,89:!0,97:!0,101:!0,103:!0,107:!0,109:!0,113:!0,127:!0,131:!0,137:!0,139:!0,149:!0,151:!0,157:!0,163:!0,167:!0,173:!0,179:!0,181:!0,191:!0,193:!0,197:!0,199:!0,211:!0};function re(e){var r,t;if(Q(e)!==e)return!1;if(e<=3)return e>1;if(e>Y||e%2==0)return!1;if(e<9)return!0;if(e%3==0)return!1;if(e%5==0)return!1;if(e%7==0)return!1;if(ee[e])return!0;for(r=Q(K(e)),t=11;t<=r;t+=210)if(e%t==0||e%(t+2)==0||e%(t+6)==0||e%(t+8)==0||e%(t+12)==0||e%(t+18)==0||e%(t+20)==0||e%(t+26)==0||e%(t+30)==0||e%(t+32)==0||e%(t+36)==0||e%(t+42)==0||e%(t+48)==0||e%(t+50)==0||e%(t+56)==0||e%(t+60)==0||e%(t+62)==0||e%(t+68)==0||e%(t+72)==0||e%(t+78)==0||e%(t+86)==0||e%(t+90)==0||e%(t+92)==0||e%(t+96)==0||e%(t+98)==0||e%(t+102)==0||e%(t+110)==0||e%(t+116)==0||e%(t+120)==0||e%(t+126)==0||e%(t+128)==0||e%(t+132)==0||e%(t+138)==0||e%(t+140)==0||e%(t+146)==0||e%(t+152)==0||e%(t+156)==0||e%(t+158)==0||e%(t+162)==0||e%(t+168)==0||e%(t+170)==0||e%(t+176)==0||e%(t+180)==0||e%(t+182)==0||e%(t+186)==0||e%(t+188)==0||e%(t+198)==0||e%(t+200)==0)return!1;return!0}function te(e){return!!G(e)&&re(e)}function ie(e){return!!H(e)&&re(e.valueOf())}function ne(e){return te(e)||ie(e)}Z(ne,"isPrimitive",te),Z(ne,"isObject",ie);export{ne as default,ie as isObject,te as isPrimitive};
//# sourceMappingURL=mod.js.map
