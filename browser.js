// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,i=Object.prototype,n=i.toString,a=i.__defineGetter__,o=i.__defineSetter__,c=i.__lookupGetter__,s=i.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,u,p,f;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(c.call(e,r)||s.call(e,r)?(l=e.__proto__,e.__proto__=i,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),p="get"in t,f="set"in t,u&&(p||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,r,t.get),f&&o&&o.call(e,r,t.set),e};var l=e;function u(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(e){return"string"==typeof e}var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return f&&"symbol"==typeof Symbol.toStringTag}var d,h=Object.prototype.toString,b=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol.toStringTag:"";d=g()?function(e){var r,t,i,n,a;if(null==e)return h.call(e);t=e[v],a=v,r=null!=(n=e)&&b.call(n,a);try{e[v]=void 0}catch(r){return h.call(e)}return i=h.call(e),r?e[v]=t:delete e[v],i}:function(e){return h.call(e)};var y=d,w=String.prototype.valueOf,m=g();function _(e){return"object"==typeof e&&(e instanceof String||(m?function(e){try{return w.call(e),!0}catch(e){return!1}}(e):"[object String]"===y(e)))}function S(e){return p(e)||_(e)}function E(e){return"number"==typeof e}function x(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function k(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+x(n):x(n)+e,i&&(e="-"+e)),e}u(S,"isPrimitive",p),u(S,"isObject",_);var T=String.prototype.toLowerCase,I=String.prototype.toUpperCase;function j(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!E(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=k(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=k(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===I.call(e.specifier)?I.call(t):T.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function V(e){return"string"==typeof e}var N=Math.abs,F=String.prototype.toLowerCase,O=String.prototype.toUpperCase,$=String.prototype.replace,A=/e\+(\d)$/,P=/e-(\d)$/,C=/^(\d+)$/,R=/^(\d+)e/,G=/\.0$/,Z=/\.0*e/,W=/(\..*[^0])0*e/;function L(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!E(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":N(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=$.call(t,W,"$1e"),t=$.call(t,Z,"e"),t=$.call(t,G,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=$.call(t,A,"e+0$1"),t=$.call(t,P,"e-0$1"),e.alternate&&(t=$.call(t,C,"$1."),t=$.call(t,R,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===O.call(e.specifier)?O.call(t):F.call(t)}function M(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function U(e,r,t){var i=r-e.length;return i<0?e:e=t?e+M(i):M(i)+e}var X=String.fromCharCode,Y=isNaN,z=Array.isArray;function D(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function q(e){var r,t,i,n,a,o,c,s,l;if(!z(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(V(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=D(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Y(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Y(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=j(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Y(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Y(a)?String(i.arg):X(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=L(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=k(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=U(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function H(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function J(e){var r,t,i,n;for(t=[],n=0,i=B.exec(e);i;)(r=e.slice(n,B.lastIndex-i[0].length)).length&&t.push(r),t.push(H(i)),n=B.lastIndex,i=B.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function K(e){return"string"==typeof e}function Q(e){var r,t,i;if(!K(e))throw new TypeError(Q("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=J(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return q.apply(null,t)}var ee=Number.POSITIVE_INFINITY;function re(e){return 0===e&&1/e===ee}function te(e){return e!=e}var ie=Number.NEGATIVE_INFINITY;function ne(e){return 0===e&&1/e===ie}function ae(e,r){var t,i,n,a;if(2===(t=arguments.length))return te(e)||te(r)?NaN:e===ie||r===ie?ie:e===r&&0===e?ne(e)?e:r:e<r?e:r;for(i=ee,a=0;a<t;a++){if(te(n=arguments[a])||n===ie)return n;(n<i||n===i&&0===n&&ne(n))&&(i=n)}return i}var oe,ce={};return oe=function(e,r){var t,i,n,a,o,c,s;if(!p(e))throw new TypeError(Q("invalid argument. Must provide a string. Value: `%s`.",e));if(!p(r))throw new TypeError(Q("invalid argument. Must provide a string. Value: `%s`.",r));if(o=e.length,a=r.length,i=[],0===o||0===a)return function(e,r){var t,i,n,a;if(2===(t=arguments.length))return te(e)||te(r)?NaN:e===ee||r===ee?ee:e===r&&0===e?re(e)?e:r:e>r?e:r;for(i=ie,a=0;a<t;a++){if(te(n=arguments[a])||n===ee)return n;(n>i||n===i&&0===n&&re(n))&&(i=n)}return i}(a,o);for(c=0;c<=a;c++)i[c]=c;for(c=0;c<=o-1;c++)for(n=i[0],i[0]=c+1,s=0;s<=a-1;s++)t=i[s+1],e[c]===r[s]?i[s+1]=n:i[s+1]=ae(n,ae(i[s],i[s+1]))+1,n=t;return i[a]},l(ce,"levenshteinDistance",{configurable:!1,enumerable:!0,writable:!1,value:oe}),ce},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).distances=r();
//# sourceMappingURL=browser.js.map
