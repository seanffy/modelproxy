!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.modelproxy=e():t.modelproxy=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}},i=!0;try{t[r].call(o.exports,o,o.exports,n),i=!1}finally{i&&delete e[r]}return o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}([function(t,e,n){"use strict";n.r(e),n.d(e,"__extends",function(){return o}),n.d(e,"__assign",function(){return i}),n.d(e,"__rest",function(){return a}),n.d(e,"__decorate",function(){return u}),n.d(e,"__param",function(){return c}),n.d(e,"__metadata",function(){return s}),n.d(e,"__awaiter",function(){return f}),n.d(e,"__generator",function(){return l}),n.d(e,"__exportStar",function(){return h}),n.d(e,"__values",function(){return p}),n.d(e,"__read",function(){return d}),n.d(e,"__spread",function(){return y}),n.d(e,"__await",function(){return v}),n.d(e,"__asyncGenerator",function(){return g}),n.d(e,"__asyncDelegator",function(){return _}),n.d(e,"__asyncValues",function(){return m}),n.d(e,"__makeTemplateObject",function(){return w}),n.d(e,"__importStar",function(){return b}),n.d(e,"__importDefault",function(){return x});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t};function a(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n}function u(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a}function c(t,e){return function(n,r){e(n,r,t)}}function s(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function f(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})}function l(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function h(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function p(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function d(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function y(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(d(arguments[e]));return t}function v(t){return this instanceof v?(this.v=t,this):new v(t)}function g(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(t){o[t]&&(r[t]=function(e){return new Promise(function(n,r){i.push([t,e,n,r])>1||u(t,e)})})}function u(t,e){try{!function(t){t.value instanceof v?Promise.resolve(t.value.v).then(c,s):f(i[0][2],t)}(o[t](e))}catch(t){f(i[0][3],t)}}function c(t){u("next",t)}function s(t){u("throw",t)}function f(t,e){t(e),i.shift(),i.length&&u(i[0][0],i[0][1])}}function _(t){var e,n;return e={},r("next"),r("throw",function(t){throw t}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:v(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function m(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=p(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise(function(r,o){!function(t,e,n,r){Promise.resolve(r).then(function(e){t({value:e,done:n})},e)}(r,o,(e=t[n](e)).done,e.value)})}}}function w(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function b(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function x(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=function(){function t(){this.instances={}}return t.prototype.add=function(t,e,n){if(void 0===n&&(n=!1),n&&this.instances.hasOwnProperty(t))return console.error("已经存在name=【"+t+"】的engine！");this.instances[t]=e},t.prototype.remove=function(t){this.has(t)&&delete this.instances[t]},t.prototype.has=function(t){return!!this.get(t)},t.prototype.get=function(t){return this.instances.hasOwnProperty(t)?this.instances[t]:null},t.prototype.use=function(t){if(!t||!this.instances.hasOwnProperty(t)){var e=Object.keys(this.instances);throw new r.ModelProxyMissingError("不存在name=【"+t+"】的engine！当前engines：【"+e.join(",")+"】")}return this.instances[t]},t.prototype.forEach=function(t){if(t&&t.constructor===Function)for(var e in this.instances)this.instances.hasOwnProperty(e)&&t(e,this.instances[e])},t}();e.BaseFactory=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=function(){function t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.middlewares=t.slice()}return t.prototype.use=function(t){if("function"!=typeof t)throw new TypeError("middleware must be a function！");this.middlewares.push(t)},t.prototype.clear=function(){this.middlewares.length=0},t.prototype.compose=function(){var t=this;if(!Array.isArray(this.middlewares))throw new TypeError("Middleware stack must be an array!");for(var e=0,n=this.middlewares;e<n.length;e++)if("function"!=typeof n[e])throw new TypeError("Middleware must be composed of functions!");return function(e,n){return new Promise(function(o,i){var a=-1,u=function(c){return r.__awaiter(t,void 0,void 0,function(){var t,s,f=this;return r.__generator(this,function(l){switch(l.label){case 0:if(t=this.middlewares[c],c<=a)return[2,i(new Error("next() called multiple times"+c+"-"+a))];if(a=c,c===this.middlewares.length&&(t=n),!t)return[2,e];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,t(e,function(t){return r.__awaiter(f,void 0,void 0,function(){return r.__generator(this,function(n){switch(n.label){case 0:return"abort"===t?[2,o(e)]:[4,u(c+1)];case 1:return n.sent(),[2]}})})})];case 2:return l.sent(),[3,4];case 3:return s=l.sent(),i(s),[3,4];case 4:return[2]}})})};return u(0).then(o.bind(e))})}},t.prototype.getMiddlewares=function(){return this.middlewares.concat([])},t.prototype.merge=function(t){var e=this;return t.getMiddlewares().forEach(function(t){e.use(t)}),this},t.prototype.errorHandle=function(t,e){t.isError=!0,t.err=e},t.prototype.callback=function(t){var e=this,n=this.compose();return function(t){return r.__awaiter(e,void 0,void 0,function(){var e,o,i=this;return r.__generator(this,function(a){switch(a.label){case 0:e=Object.assign(t||{},{}),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,n(e,function(t,n){return r.__awaiter(i,void 0,void 0,function(){return r.__generator(this,function(t){switch(t.label){case 0:return[4,n()];case 1:if(t.sent(),e.isError)throw e.err;return[2]}})})})];case 2:return a.sent(),[3,4];case 3:return o=a.sent(),this.errorHandle(e,o),[3,4];case 4:return[2,e]}})})}},t}();e.Compose=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=function(t){this.name="",this.message=t||"",this.stack=(new Error).stack};e.BaseError=o;var i=function(t){function e(e){var n=t.call(this,e)||this;return n.name="ModelProxy.MissingError",n}return r.__extends(e,t),e}(o);e.ModelProxyMissingError=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(6);e.engineFactory=new r.BaseFactory,e.engineFactory.add("default",new o.DefaultEngine)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(11),i=n(9),a=n(2),u=n(3),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.validate=function(t,e){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(t){return[2,!0]})})},e.prototype.delay=function(t){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){return[2,new Promise(function(e,n){setTimeout(function(){e()},t)})]})})},e.prototype.proxy=function(t,e){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(n){return t.getPath(e.instance),[2,{}]})})},e.prototype.getStatePath=function(t){return t.states&&t.state&&t.states[t.state]||""},e.prototype.replacePath=function(t,e){var n=e.params,r=void 0===n?[]:n,i=e.data,a=void 0===i?{}:i,c=[];return o.parse(t.path).forEach(function(t){var e=t.name;if(e){if(!r[e]&&!a[e])throw new u.ModelProxyMissingError("缺少["+e+"]字段！");c.push("/"+(r[e]||a[e])),delete r[e]}else c.push(t)}),c.join("")},e.prototype.getFullPath=function(t,e){var n=[this.getStatePath(t),this.replacePath(t,e)],r=new i;if(e.params){Object.keys(e.params).forEach(function(t){r.append(t,e.params[t])});var o=r.toString();o&&n.push("?"+o)}return n.join("")},e}(a.Compose);e.BaseEngine=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(5),i=n(2),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.doProxy=function(t,e){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return r.__awaiter(this,void 0,void 0,function(){var o,a,u,c,s;return r.__generator(this,function(f){switch(f.label){case 0:return o=new i.Compose,a=e.before,u=e.after,c=e.error,a&&o.merge(a),o.merge(this),u&&o.merge(u),[4,o.callback()(r.__assign({executeInfo:e,instance:t},n))];case 1:return(s=f.sent()).isError?c?[4,c.callback()(s).catch(function(){})]:[3,3]:[3,4];case 2:f.sent(),f.label=3;case 3:throw s.err;case 4:return[2,s]}})})},e.prototype.proxy=function(t,e){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(r){return[2,this.doProxy.apply(this,[t,e].concat(n))]})})},e}(o.BaseEngine);e.DefaultEngine=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1);e.promiseFactory=new r.BaseFactory,e.cacheDec=function(t,n,r){var o=n.executeInfo,i=void 0===o?{}:o,a=n.instance,u=i.settings||{},c=u.cache,s=void 0!==c&&c,f=u.reload,l=void 0!==f&&f,h=u.expire,p=void 0===h?void 0:h,d=(a||{}).method,y=r+(void 0===d?"":d);if(!s)return t();l&&e.promiseFactory.remove(y);var v=e.promiseFactory.get(y)||{},g=v.promise,_=void 0===g?null:g,m=v.expire,w=void 0===m?null:m,b=v.cacheIn,x=void 0===b?0:b;if(w&&x&&x+w<Date.now()&&(e.promiseFactory.remove(y),_=null),_)return n.fromCache=!0,_;var E=t();return e.promiseFactory.add(y,{promise:E,expire:p,cacheIn:Date.now()}),E}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";(function(e){
/*!
Copyright (C) 2015-2017 Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
function n(t){var e,n,o,i,a,u,c=Object.create(null);if(this[s]=c,t)if("string"==typeof t)for("?"===t.charAt(0)&&(t=t.slice(1)),a=0,u=(i=t.split("&")).length;a<u;a++)-1<(e=(o=i[a]).indexOf("="))?f(c,l(o.slice(0,e)),l(o.slice(e+1))):o.length&&f(c,l(o),"");else if(r(t))for(a=0,u=t.length;a<u;a++)f(c,(o=t[a])[0],o[1]);else for(n in t)f(c,n,t[n])}var r=Array.isArray,o=n.prototype,i=/[!'\(\)~]|%20|%00/g,a=/\+/g,u={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},c=function(t){return u[t]},s="__URLSearchParams__:"+Math.random();function f(t,e,n){e in t?t[e].push(""+n):t[e]=r(n)?n:[""+n]}function l(t){return decodeURIComponent(t.replace(a," "))}function h(t){return encodeURIComponent(t).replace(i,c)}o.append=function(t,e){f(this[s],t,e)},o.delete=function(t){delete this[s][t]},o.get=function(t){var e=this[s];return t in e?e[t][0]:null},o.getAll=function(t){var e=this[s];return t in e?e[t].slice(0):[]},o.has=function(t){return t in this[s]},o.set=function(t,e){this[s][t]=[""+e]},o.forEach=function(t,e){var n=this[s];Object.getOwnPropertyNames(n).forEach(function(r){n[r].forEach(function(n){t.call(e,n,r,this)},this)},this)},o.toJSON=function(){return{}},o.toString=function(){var t,e,n,r,o=this[s],i=[];for(e in o)for(n=h(e),t=0,r=o[e];t<r.length;t++)i.push(n+"="+h(r[t]));return i.join("&")},function(t){var e=function(){try{return!!Symbol.iterator}catch(t){return!1}}();"forEach"in t||(t.forEach=function(t,e){var n=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach(function(r){!r.length||r in n||(n[r]=this.getAll(r)).forEach(function(n){t.call(e,n,r,this)},this)},this)}),"keys"in t||(t.keys=function(){var t=[];this.forEach(function(e,n){t.push(n)});var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e&&(n[Symbol.iterator]=function(){return n}),n}),"values"in t||(t.values=function(){var t=[];this.forEach(function(e){t.push(e)});var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e&&(n[Symbol.iterator]=function(){return n}),n}),"entries"in t||(t.entries=function(){var t=[];this.forEach(function(e,n){t.push([n,e])});var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e&&(n[Symbol.iterator]=function(){return n}),n}),!e||Symbol.iterator in t||(t[Symbol.iterator]=t.entries),"sort"in t||(t.sort=function(){for(var t,e,n,r=this.entries(),o=r.next(),i=o.done,a=[],u=Object.create(null);!i;)e=(n=o.value)[0],a.push(e),e in u||(u[e]=[]),u[e].push(n[1]),i=(o=r.next()).done;for(a.sort(),t=0;t<a.length;t++)this.delete(a[t]);for(t=0;t<a.length;t++)e=a[t],this.append(e,u[e].shift())})}((n=t.exports=e.URLSearchParams||n).prototype)}).call(this,n(8))},function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},function(t,e,n){var r=n(10);t.exports=function t(e,n,o){return r(n)||(o=n||o,n=[]),o=o||{},e instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(t,e)}(e,n):r(e)?function(e,n,r){for(var o=[],i=0;i<e.length;i++)o.push(t(e[i],n,r).source);return l(new RegExp("(?:"+o.join("|")+")",h(r)),n)}(e,n,o):function(t,e,n){return p(i(t,n),e,n)}(e,n,o)},t.exports.parse=i,t.exports.compile=function(t,e){return c(i(t,e))},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,e){for(var n,r=[],i=0,a=0,u="",c=e&&e.delimiter||"/";null!=(n=o.exec(t));){var l=n[0],h=n[1],p=n.index;if(u+=t.slice(a,p),a=p+l.length,h)u+=h[1];else{var d=t[a],y=n[2],v=n[3],g=n[4],_=n[5],m=n[6],w=n[7];u&&(r.push(u),u="");var b=null!=y&&null!=d&&d!==y,x="+"===m||"*"===m,E="?"===m||"*"===m,P=n[2]||c,O=g||_;r.push({name:v||i++,prefix:y||"",delimiter:P,optional:E,repeat:x,partial:b,asterisk:!!w,pattern:O?f(O):w?".*":"[^"+s(P)+"]+?"})}}return a<t.length&&(u+=t.substr(a)),u&&r.push(u),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function u(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function c(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,o){for(var i="",c=n||{},s=(o||{}).pretty?a:encodeURIComponent,f=0;f<t.length;f++){var l=t[f];if("string"!=typeof l){var h,p=c[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(h=s(p[d]),!e[f].test(h))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(h)+"`");i+=(0===d?l.prefix:l.delimiter)+h}}else{if(h=l.asterisk?u(p):s(p),!e[f].test(h))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+h+'"');i+=l.prefix+h}}else i+=l}return i}}function s(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function f(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function l(t,e){return t.keys=e,t}function h(t){return t.sensitive?"":"i"}function p(t,e,n){r(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",u=0;u<t.length;u++){var c=t[u];if("string"==typeof c)a+=s(c);else{var f=s(c.prefix),p="(?:"+c.pattern+")";e.push(c),c.repeat&&(p+="(?:"+f+p+")*"),a+=p=c.optional?c.partial?f+"("+p+")?":"(?:"+f+"("+p+"))?":f+"("+p+")"}}var d=s(n.delimiter||"/"),y=a.slice(-d.length)===d;return o||(a=(y?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&y?"":"(?="+d+"|$)",l(new RegExp("^"+a,h(n)),e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(1),i=n(4),a=function(t){function e(){return t.call(this)||this}return r.__extends(e,t),e.prototype.add=function(e,n,r){void 0===r&&(r=!1),t.prototype.add.call(this,e,Object.assign(n,{delete:this.custom.bind(this,n,"DELETE"),execute:this.execute.bind(this,n),get:this.custom.bind(this,n,"GET",null),getFullPath:this.getFullPath.bind(this,n),getOne:this.custom.bind(this,n,"GET"),getPath:this.getPath.bind(this,n),post:this.custom.bind(this,n,"POST",null),put:this.custom.bind(this,n,"PUT"),replacePath:this.replacePath.bind(this,n)}),r)},e.prototype.execute=function(t,e){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return r.__awaiter(this,void 0,void 0,function(){var o,a,u,c,s,f,l;return r.__generator(this,function(r){switch(r.label){case 0:if(u=e.instance,c=void 0===u?{}:u,a=this.megreInstance(t,c),s=a.engine,f=a.defaultExecuteInfo,l=void 0===f?{}:f,!i.engineFactory.has(s||""))throw new Error("没有发现engine["+s+"]");o=i.engineFactory.use(s||"default"),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,o.validate(a,e)];case 2:return r.sent(),[3,4];case 3:throw r.sent();case 4:return[2,o.proxy.apply(o,[a,Object.assign({},l,e)].concat(n))]}})})},e.prototype.custom=function(t,e,n,o){void 0===o&&(o={});for(var i=[],a=4;a<arguments.length;a++)i[a-4]=arguments[a];return r.__awaiter(this,void 0,void 0,function(){var a,u,c,s;return r.__generator(this,function(r){switch(r.label){case 0:return a=o.instance,u=void 0===a?{}:a,c=o.params,s=void 0===c?{}:c,u.method=e,n&&(u.path=(u.path||t.path)+"/:__id__",s.__id__=n),o.instance=u,o.params=s,[4,this.execute.apply(this,[t,o].concat(i))];case 1:return[2,r.sent()]}})})},e.prototype.megreInstance=function(t,e){return void 0===e&&(e={}),Object.assign({},t,e)},e.prototype.executeEngineMethod=function(t,e,n,r){var o,a,u;return void 0===e&&(e={}),void 0===r&&(r={}),u=this.megreInstance(t,e),(a=(o=i.engineFactory.use("default"))[n])?a.call(o,u,r):""},e.prototype.getPath=function(t,e){var n;return void 0===e&&(e={}),n=this.megreInstance(t,e),this.executeEngineMethod(t,e,"getStatePath")+n.path},e.prototype.getFullPath=function(t,e){return void 0===e&&(e={}),this.executeEngineMethod(t,e.instance,"getFullPath",e)},e.prototype.replacePath=function(t,e){var n;return void 0===e&&(e={}),n=this.megreInstance(t,e.instance),i.engineFactory.use("default").replacePath(n,e)},e}(o.BaseFactory);e.InterfaceFactory=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(12),i=n(4),a=n(2),u=n(3),c=n(1),s=function(t){function e(e){var n=t.call(this)||this;return n.defaultExecuteInfo=e,n.nsFactory=new c.BaseFactory,n.forEach=n.nsFactory.forEach.bind(n.nsFactory),n}return r.__extends(e,t),e.prototype.addEngines=function(t){for(var e in t)t.hasOwnProperty(e)&&i.engineFactory.add(e,t[e],!0);return this},e.prototype.loadConfig=function(t,e){var n=this.nsFactory.get(t.key);return n?(this.nsFactory.add(t.key,this.initInterfaces(n,t,e)),this):(this.nsFactory.add(t.key,this.initInterfaces(new o.InterfaceFactory,t,e)),this)},e.prototype.execute=function(t,e,n){void 0===n&&(n={});for(var o=[],i=3;i<arguments.length;i++)o[i-3]=arguments[i];return r.__awaiter(this,void 0,void 0,function(){var i,a;return r.__generator(this,function(r){if(i=this.getNs(t),!(a=i.get(e)))throw new u.ModelProxyMissingError("没有发现/"+t+"/"+e+"的接口方法！");return[2,a.execute.apply(a,[n].concat(o))]})})},e.prototype.executeAll=function(t){return r.__awaiter(this,void 0,void 0,function(){var e;return r.__generator(this,function(n){return e=[],t&&Object.keys(t).length?(Object.keys(t).forEach(function(n){e.push(t[n]().then(function(t){return(e={})[n]=t,e;var e}))}),[2,Promise.all(e).then(function(t){return t.reduce(function(t,e){return Object.assign({},t,e)})})]):[2,new Promise(function(t){t(null)})]})})},e.prototype.race=function(t){return r.__awaiter(this,void 0,void 0,function(){var e,n=this;return r.__generator(this,function(r){return e=t.map(function(t){if(t.then)return t;var e=t,r=e.ns,o=void 0===r?"":r,i=e.key,a=void 0===i?"":i,u=e.options,c=void 0===u?{}:u,s=e.otherOptions,f=void 0===s?[]:s;return n.execute.apply(n,[o,a,c].concat(f))}),[2,Promise.race(e)]})})},e.prototype.hasNs=function(t){return!!this.nsFactory.get(t)},e.prototype.getNs=function(t){if(!this.hasNs(t))throw new u.ModelProxyMissingError("没有找到"+t+"空间;");return this.nsFactory.use(t)},e.prototype.minix=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return this.mixin.apply(this,[t].concat(e))},e.prototype.mixin=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!e.length)throw new u.ModelProxyMissingError("必须制定至少一个Key！");var r=this.getNs(t),o=[],i=e.pop(),a=r.get(i);return a?(e.forEach(function(e){var n=r.get(e);if(!n)throw new u.ModelProxyMissingError(e+"不存在于空间"+t+"！");o.push(n)}),function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t.length!==o.length)throw new Error("传入的参数个数不正确！");var n=[];return o.forEach(function(e,r){var o;n.push(e.replacePath({instance:{path:e.path+"/:"+e.key},params:(o={},o[e.key]=t[r],o)}))}),a.path=n.concat([a.path]).join(""),a}):null},e.prototype.initInterfaces=function(t,e,n){var r=this;return void 0===n&&(n={}),e.interfaces.forEach(function(o){var i=Object.assign({},{engine:e.engine,mockDir:e.mockDir,ns:e.key,state:e.state,states:e.states,defaultExecuteInfo:r.defaultExecuteInfo},o,n||{});t.add(o.key,i,!0)}),t},e}(a.Compose);e.ModelProxy=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(13);e.ModelProxy=r.ModelProxy;var o=n(2);e.Compose=o.Compose;var i=n(4);e.engineFactory=i.engineFactory;var a=n(3);e.BaseError=a.BaseError,e.ModelProxyMissingError=a.ModelProxyMissingError;var u=n(5);e.BaseEngine=u.BaseEngine;var c=n(6);e.DefaultEngine=c.DefaultEngine;var s=n(1);e.BaseFactory=s.BaseFactory;var f=n(7);e.cacheDec=f.cacheDec,e.promiseFactory=f.promiseFactory}])});
//# sourceMappingURL=index.map