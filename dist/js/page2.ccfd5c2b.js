(function(e){function t(t){for(var r,a,c=t[0],u=t[1],l=t[2],f=0,p=[];f<c.length;f++)a=c[f],i[a]&&p.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={page2:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;o.push([1,"chunk-vendors"]),n()})({1:function(e,t,n){e.exports=n("cd76")},c790:function(e,t,n){"use strict";n("ac6a"),n("f3e2");var r=n("e814"),i=n.n(r),o=n("59ad"),a=n.n(o);n("4917");(function(e,t){var n=e.document,r=n.documentElement,o=n.querySelector('meta[name="viewport"]'),c=0,u=0,l=null,d=t.flexible||(t.flexible={});if(o){var f=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);f&&(u=a()(f[1]),c=i()(1/u))}if(!c&&!u){e.navigator.appVersion.match(/android/gi);var p=e.navigator.appVersion.match(/iphone/gi),s=Math.floor(e.devicePixelRatio)||1;c=p?s>=3&&(!c||c>=3)?3:s>=2&&(!c||c>=2)?2:1:1,u=1/c}if(!o)if(o=n.createElement("meta"),o.setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+u+", maximum-scale="+u+", minimum-scale="+u+",user-scalable=no"),r.firstElementChild)r.firstElementChild.appendChild(o);else{var m=n.createElement("div");m.appendChild(o),n.write(m.innerHTML)}r.setAttribute("data-dpr",c);var h=function(){var t=r.getBoundingClientRect().width||innerWidth,n=t/10;n=Math.max(n,32),n>75&&(n=75),r.style.fontSize=n+"px",d.width=t,d.rem=e.rem=n};["resize","orientationchange"].forEach(function(t){e.addEventListener(t,function(e){clearTimeout(l),l=setTimeout(h,0)},!1)}),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(l),l=setTimeout(h,0))},!1),"complete"===n.readyState?n.body.style.fontSize=12*c+"px":n.addEventListener("DOMContentLoaded",function(e){n.body.style.fontSize=12*c+"px"},!1),h(),d.dpr=e.dpr=c,d.setFontSize=h,d.rem2px=function(e){var t=a()(e)*this.rem;return"string"===typeof e&&e.match(/rem$/)&&(t+="px"),t},d.px2rem=function(e){var t=a()(e)/this.rem;return"string"===typeof e&&e.match(/px$/)&&(t+="rem"),t}})(window,window["tcf"]||(window["tcf"]={}))},cd76:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),i=n("fe3c"),o=n.n(i),a=(n("f5df"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h3",[e._v("page2")]),n("md-button",{on:{click:e.handleClick}},[e._v("回到page1")])],1)}),c=[],u=n("bd86"),l=(n("7f7f"),n("8730")),d=n.n(l),f={components:Object(u["a"])({},d.a.name,d.a),methods:{handleClick:function(){location.href="page1.html"}}},p=f,s=n("2877"),m=Object(s["a"])(p,a,c,!1,null,null,null),h=m.exports;n("c790"),n("e008");"addEventListener"in document&&"ontouchstart"in window&&(o.a.prototype.focus=function(e){e.focus()},document.addEventListener("DOMContentLoaded",function(){o.a.attach(document.body)},!1)),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(h)}}).$mount("#app")},e008:function(e,t,n){}});