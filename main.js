!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gameElement=t,this.scoreElement=t.querySelector(".results .score"),this.missElement=t.querySelector(".results .miss")}var t,n,i;return t=e,(n=[{key:"init",value:function(){var e=this;this.score=0,this.miss=0,this.gameElement.addEventListener("click",(function(t){var n=t.target.closest(".col");if(n){var r=n.querySelector(".head");r&&(e.hit(),r.remove())}}))}},{key:"hit",value:function(){this.score+=1,this.scoreElement.innerText=this.score}},{key:"missed",value:function(){this.miss+=1,this.missElement.innerText=this.miss}}])&&r(t.prototype,n),i&&r(t,i),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cells=t.querySelectorAll(".col"),this.goblinHead=t.querySelector(".head"),this.game=new i(t)}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.goblinHead.remove(),this.game.init(),this.rotate()}},{key:"rotate",value:function(){var e=this,t=0,n=0,r=setInterval((function(){for(;n===t;)n=Math.floor(Math.random()*(e.cells.length-1));e.cells[t].querySelector(".head")&&(e.game.missed(),5===e.game.miss&&(clearInterval(r),alert("You lose!"),e.init())),t=n,e.cells[n].appendChild(e.goblinHead)}),1e3)}}])&&o(t.prototype,n),r&&o(t,r),e}())(document.querySelector(".goblin")).init()}]);