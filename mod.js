// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=t?e+i(n):i(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=a(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=a(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):n.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":l(a)<1e-4?((r=e.precision)>0&&(r-=1),i=a.toExponential(r)):i=a.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):p.call(i)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var S=String.fromCharCode,k=isNaN,x=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,i,n,o,l,p,u,f;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(s(i=e[u]))l+=i;else{if(r=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,k(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=E(i.arg,i.width,i.padRight)),l+=i.arg||"",p+=1}return l}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,i,a;for(t=[],a=0,i=T.exec(e);i;)(r=e.slice(a,T.lastIndex-i[0].length)).length&&t.push(r),t.push(F(i)),a=T.lastIndex,i=T.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function I(e){return"string"==typeof e}function O(e){var r,t;if(!I(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return V.apply(null,r)}var A=Object.prototype,C=A.toString,P=A.__defineGetter__,R=A.__defineSetter__,Z=A.__lookupGetter__,G=A.__lookupSetter__;var N=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(Z.call(e,r)||G.call(e,r)?(i=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&P&&P.call(e,r,t.get),o&&R&&R.call(e,r,t.set),e};function W(e,r,t){N(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var L="function"==typeof Object.defineProperty?Object.defineProperty:null;var U=Object.defineProperty;function X(e){return"number"==typeof e}function z(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function M(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+z(a):z(a)+e,i&&(e="-"+e)),e}var D=String.prototype.toLowerCase,Y=String.prototype.toUpperCase;function q(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!X(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=M(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=M(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Y.call(e.specifier)?Y.call(t):D.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function B(e){return"string"==typeof e}var H=Math.abs,J=String.prototype.toLowerCase,K=String.prototype.toUpperCase,Q=String.prototype.replace,ee=/e\+(\d)$/,re=/e-(\d)$/,te=/^(\d+)$/,ie=/^(\d+)e/,ae=/\.0$/,ne=/\.0*e/,oe=/(\..*[^0])0*e/;function ce(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!X(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":H(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Q.call(t,oe,"$1e"),t=Q.call(t,ne,"e"),t=Q.call(t,ae,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Q.call(t,ee,"e+0$1"),t=Q.call(t,re,"e-0$1"),e.alternate&&(t=Q.call(t,te,"$1."),t=Q.call(t,ie,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===K.call(e.specifier)?K.call(t):J.call(t)}function se(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function le(e,r,t){var i=r-e.length;return i<0?e:e=t?e+se(i):se(i)+e}var pe=String.fromCharCode,ue=isNaN,fe=Array.isArray;function ge(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function de(e){var r,t,i,a,n,o,c,s,l;if(!fe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(B(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=ge(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,ue(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,ue(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=q(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!ue(i.arg)){if((n=parseInt(i.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ue(n)?String(i.arg):pe(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=ce(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=M(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=le(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var he=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function we(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function be(e){var r,t,i,a;for(t=[],a=0,i=he.exec(e);i;)(r=e.slice(a,he.lastIndex-i[0].length)).length&&t.push(r),t.push(we(i)),a=he.lastIndex,i=he.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function ve(e){return"string"==typeof e}function ye(e){var r,t;if(!ve(e))throw new TypeError(ye("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[be(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return de.apply(null,r)}var me=Object.prototype,_e=me.toString,Ee=me.__defineGetter__,Se=me.__defineSetter__,ke=me.__lookupGetter__,xe=me.__lookupSetter__;var je=function(){try{return L({},"x",{}),!0}catch(e){return!1}}()?U:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===_e.call(e))throw new TypeError(ye("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===_e.call(t))throw new TypeError(ye("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(ke.call(e,r)||xe.call(e,r)?(i=e.__proto__,e.__proto__=me,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&Ee&&Ee.call(e,r,t.get),o&&Se&&Se.call(e,r,t.set),e};function Ve(e,r,t){je(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Te(e){return"string"==typeof e}function Fe(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var $e=Fe();function Ie(){return $e&&"symbol"==typeof Symbol.toStringTag}var Oe=Object.prototype.toString;var Ae=Object.prototype.hasOwnProperty;function Ce(e,r){return null!=e&&Ae.call(e,r)}var Pe="function"==typeof Symbol?Symbol:void 0,Re="function"==typeof Pe?Pe.toStringTag:"";var Ze=Ie()?function(e){var r,t,i;if(null==e)return Oe.call(e);t=e[Re],r=Ce(e,Re);try{e[Re]=void 0}catch(r){return Oe.call(e)}return i=Oe.call(e),r?e[Re]=t:delete e[Re],i}:function(e){return Oe.call(e)},Ge=String.prototype.valueOf;var Ne=Ie();function We(e){return"object"==typeof e&&(e instanceof String||(Ne?function(e){try{return Ge.call(e),!0}catch(e){return!1}}(e):"[object String]"===Ze(e)))}function Le(e){return Te(e)||We(e)}function Ue(e,r){var t,i;if(!Te(e))throw new TypeError(ye("invalid argument. First argument must be a string. Value: `%s`.",e));if(!Te(r))throw new TypeError(ye("invalid argument. Second argument must be a string. Value: `%s`.",r));if(e.length!==r.length)return-1;for(t=0,i=0;i<e.length;i++)e[i]!==r[i]&&(t+=1);return t}Ve(Le,"isPrimitive",Te),Ve(Le,"isObject",We);var Xe="function"==typeof Object.defineProperty?Object.defineProperty:null;var ze=Object.defineProperty;function Me(e){return"number"==typeof e}function De(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Ye(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+De(a):De(a)+e,i&&(e="-"+e)),e}var qe=String.prototype.toLowerCase,Be=String.prototype.toUpperCase;function He(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Me(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Ye(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Ye(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Be.call(e.specifier)?Be.call(t):qe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Je(e){return"string"==typeof e}var Ke=Math.abs,Qe=String.prototype.toLowerCase,er=String.prototype.toUpperCase,rr=String.prototype.replace,tr=/e\+(\d)$/,ir=/e-(\d)$/,ar=/^(\d+)$/,nr=/^(\d+)e/,or=/\.0$/,cr=/\.0*e/,sr=/(\..*[^0])0*e/;function lr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Me(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Ke(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=rr.call(t,sr,"$1e"),t=rr.call(t,cr,"e"),t=rr.call(t,or,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=rr.call(t,tr,"e+0$1"),t=rr.call(t,ir,"e-0$1"),e.alternate&&(t=rr.call(t,ar,"$1."),t=rr.call(t,nr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===er.call(e.specifier)?er.call(t):Qe.call(t)}function pr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ur(e,r,t){var i=r-e.length;return i<0?e:e=t?e+pr(i):pr(i)+e}var fr=String.fromCharCode,gr=isNaN,dr=Array.isArray;function hr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function wr(e){var r,t,i,a,n,o,c,s,l;if(!dr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Je(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=hr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,gr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,gr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=He(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!gr(i.arg)){if((n=parseInt(i.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=gr(n)?String(i.arg):fr(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=lr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Ye(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ur(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var br=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function vr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function yr(e){var r,t,i,a;for(t=[],a=0,i=br.exec(e);i;)(r=e.slice(a,br.lastIndex-i[0].length)).length&&t.push(r),t.push(vr(i)),a=br.lastIndex,i=br.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function mr(e){return"string"==typeof e}function _r(e){var r,t;if(!mr(e))throw new TypeError(_r("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[yr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return wr.apply(null,r)}var Er=Object.prototype,Sr=Er.toString,kr=Er.__defineGetter__,xr=Er.__defineSetter__,jr=Er.__lookupGetter__,Vr=Er.__lookupSetter__;var Tr=function(){try{return Xe({},"x",{}),!0}catch(e){return!1}}()?ze:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===Sr.call(e))throw new TypeError(_r("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Sr.call(t))throw new TypeError(_r("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(jr.call(e,r)||Vr.call(e,r)?(i=e.__proto__,e.__proto__=Er,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&kr&&kr.call(e,r,t.get),o&&xr&&xr.call(e,r,t.set),e};function Fr(e,r,t){Tr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function $r(e){return"string"==typeof e}var Ir=Fe();function Or(){return Ir&&"symbol"==typeof Symbol.toStringTag}var Ar=Object.prototype.toString;var Cr="function"==typeof Symbol?Symbol:void 0,Pr="function"==typeof Cr?Cr.toStringTag:"";var Rr=Or()?function(e){var r,t,i;if(null==e)return Ar.call(e);t=e[Pr],r=Ce(e,Pr);try{e[Pr]=void 0}catch(r){return Ar.call(e)}return i=Ar.call(e),r?e[Pr]=t:delete e[Pr],i}:function(e){return Ar.call(e)},Zr=String.prototype.valueOf;var Gr=Or();function Nr(e){return"object"==typeof e&&(e instanceof String||(Gr?function(e){try{return Zr.call(e),!0}catch(e){return!1}}(e):"[object String]"===Rr(e)))}function Wr(e){return $r(e)||Nr(e)}Fr(Wr,"isPrimitive",$r),Fr(Wr,"isObject",Nr);var Lr=Number.NEGATIVE_INFINITY;function Ur(e){return e!=e}function Xr(e,r){return Ur(e)||Ur(r)?NaN:e===Lr||r===Lr?Lr:e===r&&0===e?function(e){return 0===e&&1/e===Lr}(e)?e:r:e<r?e:r}function zr(e,r){var t,i,a,n,o,c,s,l;if(!$r(e))throw new TypeError(_r("invalid argument. First argument must be a string. Value: `%s`.",e));if(!$r(r))throw new TypeError(_r("invalid argument. Second argument must be a string. Value: `%s`.",r));if(o=e.length,n=r.length,0===o)return n;if(0===n)return o;for(i=[],c=0;c<=n;c++)i.push(c);for(c=0;c<o;c++)for(a=i[0],i[0]=c+1,s=0;s<n;s++)t=i[l=s+1],e[c]===r[s]?i[l]=a:i[l]=Xr(a,Xr(i[s],i[l]))+1,a=t;return i[n]}var Mr={};W(Mr,"hammingDistance",Ue),W(Mr,"levenshteinDistance",zr);export{Mr as default,Ue as hammingDistance,zr as levenshteinDistance};
//# sourceMappingURL=mod.js.map
