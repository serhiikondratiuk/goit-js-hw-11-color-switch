parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var t=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],n={body:document.querySelector("body"),startBtn:document.querySelector('[data-action="start"]'),stopBtn:document.querySelector('[data-action="stop"]'),clearBtn:document.querySelector('[data-action="clear"]')},e=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)};n.startBtn.addEventListener("click",o),n.stopBtn.addEventListener("click",r),n.clearBtn.addEventListener("click",c);var a=null;function o(){d(!0,!1),a=setInterval(l,1e3)}function r(){clearInterval(a),d(!1,!0)}function c(){n.body.style.backgroundColor="",clearInterval(a)}function l(){var a=e(0,t.length-1);n.body.style.backgroundColor=t[a]}function d(t,e){n.startBtn.disabled=t,n.stopBtn.disabled=e}
},{}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/goit-js-hw-11-color-switch.d8b77354.js.map