parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IqTo":[function(require,module,exports) {
"use strict";var r=this&&this.__spreadArrays||function(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;var n=Array(r),o=0;for(t=0;t<e;t++)for(var a=arguments[t],f=0,i=a.length;f<i;f++,o++)n[o]=a[f];return n};Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t]}};exports.logger=function(e){var n=t(e);return function(t){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];var a=JSON.parse(JSON.stringify(e.filter(function(r){return void 0!==r})));n.apply(void 0,r(["%c"+t,"font-weight: bold"],a))}};
},{}],"fEF5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./logger");exports.log=e.logger("🌗 night mode");var r="night-mode";exports.getActiveTheme=function(){var e=JSON.parse(localStorage.getItem(r)),t=matchMedia("(prefers-color-scheme: dark)").matches,o="boolean"==typeof e?e:t;return exports.log("getActiveTheme",{isDarkMode:e,returnValue:o,mediaQueryValue:t}),o},exports.saveTheme=function(e){exports.log("saveTheme",{KEY:r,value:e}),localStorage.setItem(r,JSON.stringify(e))};
},{"./logger":"IqTo"}],"qyfc":[function(require,module,exports) {
"use strict";var e=this&&this.__spreadArrays||function(){for(var e=0,n=0,o=arguments.length;n<o;n++)e+=arguments[n].length;var r=Array(e),t=0;for(n=0;n<o;n++)for(var a=arguments[n],i=0,d=a.length;i<d;i++,t++)r[t]=a[i];return r};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./utils/nightModeStorage");window.onerror=function(e){return console.trace("onerror",e)},window.onunhandledrejection=function(e){return console.error("onunhandledrejection",e.reason,e)},window.alert=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return console.warn.apply(console,e(["alert"],n))},window.addEventListener("DOMContentLoaded",function(){var e=n.getActiveTheme(),o=document.documentElement;o.classList.add(e?"night-mode-on":"night-mode-off"),o.classList.remove(e?"night-mode-off":"night-mode-on"),n.saveTheme(e)});
},{"./utils/nightModeStorage":"fEF5"}]},{},["qyfc"], null)
//# sourceMappingURL=/head.inject.baedb670.js.map