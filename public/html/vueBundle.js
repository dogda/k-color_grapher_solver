(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vueD3Network=e():t.vueD3Network=e()})(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=53)}([function(t,e,n){"use strict";e.a=function(t){return function(){return t}}},function(t,e,n){"use strict";function i(){}function r(t,e){var n=new i;if(t instanceof i)t.each(function(t,e){n.set(e,t)});else if(Array.isArray(t)){var r,s=-1,o=t.length;if(null==e)for(;++s<o;)n.set(s,t[s]);else for(;++s<o;)n.set(e(r=t[s],s,t),r)}else if(t)for(var a in t)n.set(a,t[a]);return n}n.d(e,"b",function(){return s});var s="$";i.prototype=r.prototype={constructor:i,has:function(t){return s+t in this},get:function(t){return this[s+t]},set:function(t,e){return this[s+t]=e,this},remove:function(t){var e=s+t;return e in this&&delete this[e]},clear:function(){for(var t in this)t[0]===s&&delete this[t]},keys:function(){var t=[];for(var e in this)e[0]===s&&t.push(e.slice(1));return t},values:function(){var t=[];for(var e in this)e[0]===s&&t.push(this[e]);return t},entries:function(){var t=[];for(var e in this)e[0]===s&&t.push({key:e.slice(1),value:this[e]});return t},size:function(){var t=0;for(var e in this)e[0]===s&&++t;return t},empty:function(){for(var t in this)if(t[0]===s)return!1;return!0},each:function(t){for(var e in this)e[0]===s&&t(this[e],e.slice(1),this)}},e.a=r},function(t,e,n){"use strict";e.a=function(){return 1e-6*(Math.random()-.5)}},function(t,e,n){"use strict";e.a=function(t,e,n,i,r){this.node=t,this.x0=e,this.y0=n,this.x1=i,this.y1=r}},function(t,e,n){"use strict";function i(){return x||(_(r),x=S.now()+w)}function r(){x=0}function s(){this._call=this._time=this._next=null}function o(t,e,n){var i=new s;return i.restart(t,e,n),i}function a(){i(),++v;for(var t,e=h;e;)(t=x-e._time)>=0&&e._call.call(null,t),e=e._next;--v}function l(){x=(m=S.now())+w,v=y=0;try{a()}finally{v=0,u(),x=0}}function c(){var t=S.now(),e=t-m;e>p&&(w-=e,m=t)}function u(){for(var t,e,n=h,i=1/0;n;)n._call?(i>n._time&&(i=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:h=e);d=t,f(i)}function f(t){if(!v){y&&(y=clearTimeout(y));var e=t-x;e>24?(t<1/0&&(y=setTimeout(l,e)),g&&(g=clearInterval(g))):(g||(m=x,g=setInterval(c,p)),v=1,_(l))}}e.c=i,e.b=s,e.a=o;var h,d,v=0,y=0,g=0,p=1e3,m=0,x=0,w=0,S="object"==typeof performance&&performance.now?performance:Date,_="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};s.prototype=o.prototype={constructor:s,restart:function(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?i():+n)+(null==e?0:+e),this._next||d===this||(d?d._next=this:h=this,d=this),this._call=t,this._time=n,f()},stop:function(){this._call&&(this._call=null,this._time=1/0,f())}}},function(t,e,n){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.a={NS:"http://www.w3.org/2000/svg",export:function(t,e){var n=null;if(this.isSvgData(t)){n=t.cloneNode(!0);var i=t.parentNode.querySelectorAll("*"),r={},s=this.getcssRules(),o=!0,a=!1,l=void 0;try{for(var c,u=i[Symbol.iterator]();!(o=(c=u.next()).done);o=!0)(function(){var t=c.value,n=s;e||(n=s.filter(function(e){return t.matches(e.selectorText)}));var i=!0,o=!1,a=void 0;try{for(var l,u=n[Symbol.iterator]();!(i=(l=u.next()).done);i=!0){var f=l.value;r[f.selectorText]=f.cssText}}catch(t){o=!0,a=t}finally{try{!i&&u.return&&u.return()}finally{if(o)throw a}}})()}catch(t){a=!0,l=t}finally{try{!o&&u.return&&u.return()}finally{if(a)throw l}}var f=Object.values(r).join("\n");if(f){var h=document.createElementNS(this.NS,"style");h.type="text/css",n.insertBefore(h,n.childNodes[0]),h.innerHTML=f,n.appendChild(h)}}return n},makeCanvas:function(t,e,n){var i=document.createElement("canvas");i.width=t,i.height=e;var r=i.getContext("2d");return r.fillStyle=n||"white",r.fillRect(0,0,i.width,i.height),i},serialize:function(t){return(new XMLSerializer).serializeToString(t)},svgToImg:function(t,e,n){var i=this.serialize(t),r=new Image,s=e.getContext("2d");r.onload=function(){s.drawImage(this,0,0);var t=e.toDataURL("image/png");n(null,t,s)},r.onerror=function(t){n(t)},r.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(i)))},save:function(t){return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(this.serialize(t))},getcssRules:function(){var t=[],e=!0,n=!1,i=void 0;try{for(var r,s=document.styleSheets[Symbol.iterator]();!(e=(r=s.next()).done);e=!0){var o=r.value,a=this.readRules(o),l=!0,c=!1,u=void 0;try{for(var f,h=a[Symbol.iterator]();!(l=(f=h.next()).done);l=!0){var d=f.value;d&&d.cssText&&t.push(d)}}catch(t){c=!0,u=t}finally{try{!l&&h.return&&h.return()}finally{if(c)throw u}}}}catch(t){n=!0,i=t}finally{try{!e&&s.return&&s.return()}finally{if(n)throw i}}return t},readRules:function(t){try{if(!t.cssRules)return t.rules||[]}catch(t){if("SecurityError"!==t.name)throw t;return[]}return t.cssRules},toDom:function(t){var e=document.createElement("div");return e.innerHTML=t,e.firstChild||null},toObject:function(t){if(t){var e={};if(t.attributes)for(var n=t.attributes.length;n>=0;n--){var i=t.attributes[n];i&&(e[i.name]=i.value)}var r=t.innerHTML;if(r)return{attrs:e,data:r};console.log("error parsing svg data")}return null},svgElFromString:function(t){var e=this.toDom(t);if(this.isSvgData(e))return e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e},svgDataToUrl:function(t,e){if("object"===(void 0===e?"undefined":i(e)))for(var n in e){var r=e[n]?e[n]:"";t.setAttribute(n,r)}var s=this.export(t);return s?this.svgToUrl(this.serialize(s)):null},isSvgData:function(t){return!!t.firstChild&&"svg"===t.firstChild.parentNode.nodeName},svgToUrl:function(t){var e=new Blob([t],{type:"image/svg+xml"});return URL.createObjectURL(e)}}},function(t,e){t.exports=function(t,e,n,i){var r,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,s=t.default);var a="function"==typeof s?s.options:s;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),i){var l=a.computed||(a.computed={});Object.keys(i).forEach(function(t){var e=i[t];l[t]=function(){return e}})}return{esModule:r,exports:s,options:a}}},function(t,e,n){"use strict";var i=(n(13),n(14),n(1));n.d(e,"a",function(){return i.a});n(12),n(15),n(11)},function(t,e,n){"use strict";function i(t){return t.x}function r(t){return t.y}e.b=i,e.c=r;var s=n(16),o=n(7),a=n(38),l=Math.PI*(3-Math.sqrt(5));e.a=function(t){function e(){i(),m.call("tick",u),f<h&&(p.stop(),m.call("end",u))}function i(){var e,n,i=t.length;for(f+=(v-f)*d,g.each(function(t){t(f)}),e=0;e<i;++e)n=t[e],null==n.fx?n.x+=n.vx*=y:(n.x=n.fx,n.vx=0),null==n.fy?n.y+=n.vy*=y:(n.y=n.fy,n.vy=0)}function r(){for(var e,n=0,i=t.length;n<i;++n){if(e=t[n],e.index=n,isNaN(e.x)||isNaN(e.y)){var r=10*Math.sqrt(n),s=n*l;e.x=r*Math.cos(s),e.y=r*Math.sin(s)}(isNaN(e.vx)||isNaN(e.vy))&&(e.vx=e.vy=0)}}function c(e){return e.initialize&&e.initialize(t),e}var u,f=1,h=.001,d=1-Math.pow(h,1/300),v=0,y=.6,g=n.i(o.a)(),p=n.i(a.a)(e),m=n.i(s.a)("tick","end");return null==t&&(t=[]),r(),u={tick:i,restart:function(){return p.restart(e),u},stop:function(){return p.stop(),u},nodes:function(e){return arguments.length?(t=e,r(),g.each(c),u):t},alpha:function(t){return arguments.length?(f=+t,u):f},alphaMin:function(t){return arguments.length?(h=+t,u):h},alphaDecay:function(t){return arguments.length?(d=+t,u):+d},alphaTarget:function(t){return arguments.length?(v=+t,u):v},velocityDecay:function(t){return arguments.length?(y=1-t,u):1-y},force:function(t,e){return arguments.length>1?(null==e?g.remove(t):g.set(t,c(e)),u):g.get(t)},find:function(e,n,i){var r,s,o,a,l,c=0,u=t.length;for(null==i?i=1/0:i*=i,c=0;c<u;++c)a=t[c],r=e-a.x,s=n-a.y,(o=r*r+s*s)<i&&(l=a,i=o);return l},on:function(t,e){return arguments.length>1?(m.on(t,e),u):m.on(t)}}}},function(t,e,n){"use strict";var i=n(30);n.d(e,"a",function(){return i.a})},function(t,e,n){n(47);var i=n(6)(n(43),null,null,null);t.exports=i.exports},function(t,e,n){"use strict"},function(t,e,n){"use strict"},function(t,e,n){"use strict";n(1)},function(t,e,n){"use strict";function i(){}function r(t,e){var n=new i;if(t instanceof i)t.each(function(t){n.add(t)});else if(t){var r=-1,s=t.length;if(null==e)for(;++r<s;)n.add(t[r]);else for(;++r<s;)n.add(e(t[r],r,t))}return n}var s=n(1),o=s.a.prototype;i.prototype=r.prototype={constructor:i,has:o.has,add:function(t){return t+="",this[s.b+t]=t,this},remove:o.remove,clear:o.clear,values:o.keys,size:o.size,empty:o.empty,each:o.each}},function(t,e,n){"use strict"},function(t,e,n){"use strict";var i=n(17);n.d(e,"a",function(){return i.a})},function(t,e,n){"use strict";function i(){for(var t,e=0,n=arguments.length,i={};e<n;++e){if(!(t=arguments[e]+"")||t in i)throw new Error("illegal type: "+t);i[t]=[]}return new r(i)}function r(t){this._=t}function s(t,e){return t.trim().split(/^|\s+/).map(function(t){var n="",i=t.indexOf(".");if(i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}})}function o(t,e){for(var n,i=0,r=t.length;i<r;++i)if((n=t[i]).name===e)return n.value}function a(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=l,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=n&&t.push({name:e,value:n}),t}var l={value:function(){}};r.prototype=i.prototype={constructor:r,on:function(t,e){var n,i=this._,r=s(t+"",i),l=-1,c=r.length;{if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++l<c;)if(n=(t=r[l]).type)i[n]=a(i[n],t.name,e);else if(null==e)for(n in i)i[n]=a(i[n],t.name,null);return this}for(;++l<c;)if((n=(t=r[l]).type)&&(n=o(i[n],t.name)))return n}},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new r(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var n,i,r=new Array(n),s=0;s<n;++s)r[s]=arguments[s+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(i=this._[t],s=0,n=i.length;s<n;++s)i[s].value.apply(e,r)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,s=i.length;r<s;++r)i[r].value.apply(e,n)}},e.a=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(19);n.d(e,"forceCenter",function(){return i.a});var r=n(20);n.d(e,"forceCollide",function(){return r.a});var s=n(21);n.d(e,"forceLink",function(){return s.a});var o=n(22);n.d(e,"forceManyBody",function(){return o.a});var a=n(8);n.d(e,"forceSimulation",function(){return a.a});var l=n(23);n.d(e,"forceX",function(){return l.a});var c=n(24);n.d(e,"forceY",function(){return c.a})},function(t,e,n){"use strict";e.a=function(t,e){function n(){var n,r,s=i.length,o=0,a=0;for(n=0;n<s;++n)r=i[n],o+=r.x,a+=r.y;for(o=o/s-t,a=a/s-e,n=0;n<s;++n)r=i[n],r.x-=o,r.y-=a}var i;return null==t&&(t=0),null==e&&(e=0),n.initialize=function(t){i=t},n.x=function(e){return arguments.length?(t=+e,n):t},n.y=function(t){return arguments.length?(e=+t,n):e},n}},function(t,e,n){"use strict";function i(t){return t.x+t.vx}function r(t){return t.y+t.vy}var s=n(0),o=n(2),a=n(9);e.a=function(t){function e(){function t(t,e,i,r,s){var a=t.data,l=t.r,u=g+l;{if(!a)return e>v+u||r<v-u||i>y+u||s<y-u;if(a.index>c.index){var f=v-a.x-a.vx,d=y-a.y-a.vy,m=f*f+d*d;m<u*u&&(0===f&&(f=n.i(o.a)(),m+=f*f),0===d&&(d=n.i(o.a)(),m+=d*d),m=(u-(m=Math.sqrt(m)))/m*h,c.vx+=(f*=m)*(u=(l*=l)/(p+l)),c.vy+=(d*=m)*u,a.vx-=f*(u=1-u),a.vy-=d*u)}}}for(var e,s,c,v,y,g,p,m=u.length,x=0;x<d;++x)for(s=n.i(a.a)(u,i,r).visitAfter(l),e=0;e<m;++e)c=u[e],g=f[c.index],p=g*g,v=c.x+c.vx,y=c.y+c.vy,s.visit(t)}function l(t){if(t.data)return t.r=f[t.data.index];for(var e=t.r=0;e<4;++e)t[e]&&t[e].r>t.r&&(t.r=t[e].r)}function c(){if(u){var e,n,i=u.length;for(f=new Array(i),e=0;e<i;++e)n=u[e],f[n.index]=+t(n,e,u)}}var u,f,h=1,d=1;return"function"!=typeof t&&(t=n.i(s.a)(null==t?1:+t)),e.initialize=function(t){u=t,c()},e.iterations=function(t){return arguments.length?(d=+t,e):d},e.strength=function(t){return arguments.length?(h=+t,e):h},e.radius=function(i){return arguments.length?(t="function"==typeof i?i:n.i(s.a)(+i),c(),e):t},e}},function(t,e,n){"use strict";function i(t){return t.index}function r(t,e){var n=t.get(e);if(!n)throw new Error("missing: "+e);return n}var s=n(0),o=n(2),a=n(7);e.a=function(t){function e(t){return 1/Math.min(y[t.source.index],y[t.target.index])}function l(e){for(var i=0,r=t.length;i<w;++i)for(var s,a,l,c,u,f,v,y=0;y<r;++y)s=t[y],a=s.source,l=s.target,c=l.x+l.vx-a.x-a.vx||n.i(o.a)(),u=l.y+l.vy-a.y-a.vy||n.i(o.a)(),f=Math.sqrt(c*c+u*u),f=(f-d[y])/f*e*h[y],c*=f,u*=f,l.vx-=c*(v=g[y]),l.vy-=u*v,a.vx+=c*(v=1-v),a.vy+=u*v}function c(){if(v){var e,i,s=v.length,o=t.length,l=n.i(a.a)(v,p);for(e=0,y=new Array(s);e<o;++e)i=t[e],i.index=e,"object"!=typeof i.source&&(i.source=r(l,i.source)),"object"!=typeof i.target&&(i.target=r(l,i.target)),y[i.source.index]=(y[i.source.index]||0)+1,y[i.target.index]=(y[i.target.index]||0)+1;for(e=0,g=new Array(o);e<o;++e)i=t[e],g[e]=y[i.source.index]/(y[i.source.index]+y[i.target.index]);h=new Array(o),u(),d=new Array(o),f()}}function u(){if(v)for(var e=0,n=t.length;e<n;++e)h[e]=+m(t[e],e,t)}function f(){if(v)for(var e=0,n=t.length;e<n;++e)d[e]=+x(t[e],e,t)}var h,d,v,y,g,p=i,m=e,x=n.i(s.a)(30),w=1;return null==t&&(t=[]),l.initialize=function(t){v=t,c()},l.links=function(e){return arguments.length?(t=e,c(),l):t},l.id=function(t){return arguments.length?(p=t,l):p},l.iterations=function(t){return arguments.length?(w=+t,l):w},l.strength=function(t){return arguments.length?(m="function"==typeof t?t:n.i(s.a)(+t),u(),l):m},l.distance=function(t){return arguments.length?(x="function"==typeof t?t:n.i(s.a)(+t),f(),l):x},l}},function(t,e,n){"use strict";var i=n(0),r=n(2),s=n(9),o=n(8);e.a=function(){function t(t){var e,i=c.length,r=n.i(s.a)(c,o.b,o.c).visitAfter(a);for(f=t,e=0;e<i;++e)u=c[e],r.visit(l)}function e(){if(c){var t,e,n=c.length;for(h=new Array(n),t=0;t<n;++t)e=c[t],h[e.index]=+d(e,t,c)}}function a(t){var e,n,i,r,s,o=0;if(t.length){for(i=r=s=0;s<4;++s)(e=t[s])&&(n=e.value)&&(o+=n,i+=n*e.x,r+=n*e.y);t.x=i/o,t.y=r/o}else{e=t,e.x=e.data.x,e.y=e.data.y;do{o+=h[e.data.index]}while(e=e.next)}t.value=o}function l(t,e,i,s){if(!t.value)return!0;var o=t.x-u.x,a=t.y-u.y,l=s-e,c=o*o+a*a;if(l*l/g<c)return c<y&&(0===o&&(o=n.i(r.a)(),c+=o*o),0===a&&(a=n.i(r.a)(),c+=a*a),c<v&&(c=Math.sqrt(v*c)),u.vx+=o*t.value*f/c,u.vy+=a*t.value*f/c),!0;if(!(t.length||c>=y)){(t.data!==u||t.next)&&(0===o&&(o=n.i(r.a)(),c+=o*o),0===a&&(a=n.i(r.a)(),c+=a*a),c<v&&(c=Math.sqrt(v*c)));do{t.data!==u&&(l=h[t.data.index]*f/c,u.vx+=o*l,u.vy+=a*l)}while(t=t.next)}}var c,u,f,h,d=n.i(i.a)(-30),v=1,y=1/0,g=.81;return t.initialize=function(t){c=t,e()},t.strength=function(r){return arguments.length?(d="function"==typeof r?r:n.i(i.a)(+r),e(),t):d},t.distanceMin=function(e){return arguments.length?(v=e*e,t):Math.sqrt(v)},t.distanceMax=function(e){return arguments.length?(y=e*e,t):Math.sqrt(y)},t.theta=function(e){return arguments.length?(g=e*e,t):Math.sqrt(g)},t}},function(t,e,n){"use strict";var i=n(0);e.a=function(t){function e(t){for(var e,n=0,i=s.length;n<i;++n)e=s[n],e.vx+=(a[n]-e.x)*o[n]*t}function r(){if(s){var e,n=s.length;for(o=new Array(n),a=new Array(n),e=0;e<n;++e)o[e]=isNaN(a[e]=+t(s[e],e,s))?0:+l(s[e],e,s)}}var s,o,a,l=n.i(i.a)(.1);return"function"!=typeof t&&(t=n.i(i.a)(null==t?0:+t)),e.initialize=function(t){s=t,r()},e.strength=function(t){return arguments.length?(l="function"==typeof t?t:n.i(i.a)(+t),r(),e):l},e.x=function(s){return arguments.length?(t="function"==typeof s?s:n.i(i.a)(+s),r(),e):t},e}},function(t,e,n){"use strict";var i=n(0);e.a=function(t){function e(t){for(var e,n=0,i=s.length;n<i;++n)e=s[n],e.vy+=(a[n]-e.y)*o[n]*t}function r(){if(s){var e,n=s.length;for(o=new Array(n),a=new Array(n),e=0;e<n;++e)o[e]=isNaN(a[e]=+t(s[e],e,s))?0:+l(s[e],e,s)}}var s,o,a,l=n.i(i.a)(.1);return"function"!=typeof t&&(t=n.i(i.a)(null==t?0:+t)),e.initialize=function(t){s=t,r()},e.strength=function(t){return arguments.length?(l="function"==typeof t?t:n.i(i.a)(+t),r(),e):l},e.y=function(s){return arguments.length?(t="function"==typeof s?s:n.i(i.a)(+s),r(),e):t},e}},function(t,e,n){"use strict";function i(t,e,n,i){if(isNaN(e)||isNaN(n))return t;var r,s,o,a,l,c,u,f,h,d=t._root,v={data:i},y=t._x0,g=t._y0,p=t._x1,m=t._y1;if(!d)return t._root=v,t;for(;d.length;)if((c=e>=(s=(y+p)/2))?y=s:p=s,(u=n>=(o=(g+m)/2))?g=o:m=o,r=d,!(d=d[f=u<<1|c]))return r[f]=v,t;if(a=+t._x.call(null,d.data),l=+t._y.call(null,d.data),e===a&&n===l)return v.next=d,r?r[f]=v:t._root=v,t;do{r=r?r[f]=new Array(4):t._root=new Array(4),(c=e>=(s=(y+p)/2))?y=s:p=s,(u=n>=(o=(g+m)/2))?g=o:m=o}while((f=u<<1|c)==(h=(l>=o)<<1|a>=s));return r[h]=d,r[f]=v,t}function r(t){var e,n,r,s,o=t.length,a=new Array(o),l=new Array(o),c=1/0,u=1/0,f=-1/0,h=-1/0;for(n=0;n<o;++n)isNaN(r=+this._x.call(null,e=t[n]))||isNaN(s=+this._y.call(null,e))||(a[n]=r,l[n]=s,r<c&&(c=r),r>f&&(f=r),s<u&&(u=s),s>h&&(h=s));for(f<c&&(c=this._x0,f=this._x1),h<u&&(u=this._y0,h=this._y1),this.cover(c,u).cover(f,h),n=0;n<o;++n)i(this,a[n],l[n],t[n]);return this}e.b=r,e.a=function(t){var e=+this._x.call(null,t),n=+this._y.call(null,t);return i(this.cover(e,n),e,n,t)}},function(t,e,n){"use strict";e.a=function(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,i=this._y0,r=this._x1,s=this._y1;if(isNaN(n))r=(n=Math.floor(t))+1,s=(i=Math.floor(e))+1;else{if(!(n>t||t>r||i>e||e>s))return this;var o,a,l=r-n,c=this._root;switch(a=(e<(i+s)/2)<<1|t<(n+r)/2){case 0:do{o=new Array(4),o[a]=c,c=o}while(l*=2,r=n+l,s=i+l,t>r||e>s);break;case 1:do{o=new Array(4),o[a]=c,c=o}while(l*=2,n=r-l,s=i+l,n>t||e>s);break;case 2:do{o=new Array(4),o[a]=c,c=o}while(l*=2,r=n+l,i=s-l,t>r||i>e);break;case 3:do{o=new Array(4),o[a]=c,c=o}while(l*=2,n=r-l,i=s-l,n>t||i>e)}this._root&&this._root.length&&(this._root=c)}return this._x0=n,this._y0=i,this._x1=r,this._y1=s,this}},function(t,e,n){"use strict";e.a=function(){var t=[];return this.visit(function(e){if(!e.length)do{t.push(e.data)}while(e=e.next)}),t}},function(t,e,n){"use strict";e.a=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}},function(t,e,n){"use strict";var i=n(3);e.a=function(t,e,n){var r,s,o,a,l,c,u,f=this._x0,h=this._y0,d=this._x1,v=this._y1,y=[],g=this._root;for(g&&y.push(new i.a(g,f,h,d,v)),null==n?n=1/0:(f=t-n,h=e-n,d=t+n,v=e+n,n*=n);c=y.pop();)if(!(!(g=c.node)||(s=c.x0)>d||(o=c.y0)>v||(a=c.x1)<f||(l=c.y1)<h))if(g.length){var p=(s+a)/2,m=(o+l)/2;y.push(new i.a(g[3],p,m,a,l),new i.a(g[2],s,m,p,l),new i.a(g[1],p,o,a,m),new i.a(g[0],s,o,p,m)),(u=(e>=m)<<1|t>=p)&&(c=y[y.length-1],y[y.length-1]=y[y.length-1-u],y[y.length-1-u]=c)}else{var x=t-+this._x.call(null,g.data),w=e-+this._y.call(null,g.data),S=x*x+w*w;if(S<n){var _=Math.sqrt(n=S);f=t-_,h=e-_,d=t+_,v=e+_,r=g.data}}return r}},function(t,e,n){"use strict";function i(t,e,n){var i=new r(null==e?g.a:e,null==n?p.a:n,NaN,NaN,NaN,NaN);return null==t?i:i.addAll(t)}function r(t,e,n,i,r,s){this._x=t,this._y=e,this._x0=n,this._y0=i,this._x1=r,this._y1=s,this._root=void 0}function s(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}e.a=i;var o=n(25),a=n(26),l=n(27),c=n(28),u=n(29),f=n(31),h=n(32),d=n(33),v=n(34),y=n(35),g=n(36),p=n(37),m=i.prototype=r.prototype;m.copy=function(){var t,e,n=new r(this._x,this._y,this._x0,this._y0,this._x1,this._y1),i=this._root;if(!i)return n;if(!i.length)return n._root=s(i),n;for(t=[{source:i,target:n._root=new Array(4)}];i=t.pop();)for(var o=0;o<4;++o)(e=i.source[o])&&(e.length?t.push({source:e,target:i.target[o]=new Array(4)}):i.target[o]=s(e));return n},m.add=o.a,m.addAll=o.b,m.cover=a.a,m.data=l.a,m.extent=c.a,m.find=u.a,m.remove=f.a,m.removeAll=f.b,m.root=h.a,m.size=d.a,m.visit=v.a,m.visitAfter=y.a,m.x=g.b,m.y=p.b},function(t,e,n){"use strict";function i(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}e.b=i,e.a=function(t){if(isNaN(s=+this._x.call(null,t))||isNaN(o=+this._y.call(null,t)))return this;var e,n,i,r,s,o,a,l,c,u,f,h,d=this._root,v=this._x0,y=this._y0,g=this._x1,p=this._y1;if(!d)return this;if(d.length)for(;;){if((c=s>=(a=(v+g)/2))?v=a:g=a,(u=o>=(l=(y+p)/2))?y=l:p=l,e=d,!(d=d[f=u<<1|c]))return this;if(!d.length)break;(e[f+1&3]||e[f+2&3]||e[f+3&3])&&(n=e,h=f)}for(;d.data!==t;)if(i=d,!(d=d.next))return this;return(r=d.next)&&delete d.next,i?(r?i.next=r:delete i.next,this):e?(r?e[f]=r:delete e[f],(d=e[0]||e[1]||e[2]||e[3])&&d===(e[3]||e[2]||e[1]||e[0])&&!d.length&&(n?n[h]=d:this._root=d),this):(this._root=r,this)}},function(t,e,n){"use strict";e.a=function(){return this._root}},function(t,e,n){"use strict";e.a=function(){var t=0;return this.visit(function(e){if(!e.length)do{++t}while(e=e.next)}),t}},function(t,e,n){"use strict";var i=n(3);e.a=function(t){var e,n,r,s,o,a,l=[],c=this._root;for(c&&l.push(new i.a(c,this._x0,this._y0,this._x1,this._y1));e=l.pop();)if(!t(c=e.node,r=e.x0,s=e.y0,o=e.x1,a=e.y1)&&c.length){var u=(r+o)/2,f=(s+a)/2;(n=c[3])&&l.push(new i.a(n,u,f,o,a)),(n=c[2])&&l.push(new i.a(n,r,f,u,a)),(n=c[1])&&l.push(new i.a(n,u,s,o,f)),(n=c[0])&&l.push(new i.a(n,r,s,u,f))}return this}},function(t,e,n){"use strict";var i=n(3);e.a=function(t){var e,n=[],r=[];for(this._root&&n.push(new i.a(this._root,this._x0,this._y0,this._x1,this._y1));e=n.pop();){var s=e.node;if(s.length){var o,a=e.x0,l=e.y0,c=e.x1,u=e.y1,f=(a+c)/2,h=(l+u)/2;(o=s[0])&&n.push(new i.a(o,a,l,f,h)),(o=s[1])&&n.push(new i.a(o,f,l,c,h)),(o=s[2])&&n.push(new i.a(o,a,h,f,u)),(o=s[3])&&n.push(new i.a(o,f,h,c,u))}r.push(e)}for(;e=r.pop();)t(e.node,e.x0,e.y0,e.x1,e.y1);return this}},function(t,e,n){"use strict";function i(t){return t[0]}e.a=i,e.b=function(t){return arguments.length?(this._x=t,this):this._x}},function(t,e,n){"use strict";function i(t){return t[1]}e.a=i,e.b=function(t){return arguments.length?(this._y=t,this):this._y}},function(t,e,n){"use strict";var i=n(4);n.d(e,"a",function(){return i.a});n(40),n(39)},function(t,e,n){"use strict";n(4)},function(t,e,n){"use strict";n(4)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(44),r=n(46),s=n(5);e.default={name:"canvas-renderer",props:["size","offset","padding","nodes","selected","linksSelected","links","nodeSize","fontSize","strLinks","linkWidth","nodeLabels","labelOffset","canvasStyles","nodeSym","noNodes"],data:function(){return{hitCanvas:null,shapes:{},drag:null,stylesReady:!1,CssStyles:!0,styles:i.a,sprites:{}}},computed:{nodeSvg:function(){return this.nodeSym},canvasStyle:function(){return{left:this.padding.x+"px",top:this.padding.y+"px"}}},directives:{renderCanvas:function(t,e,n){var i=e.value.nodes,r=e.value.links;n.context.draw(i,r,t)}},created:function(){if(this.canvasStyles)for(var t in this.canvasStyles)this.styles[t]=this.canvasStyles[t]},mounted:function(){var t=this;this.$nextTick(function(){t.hitCanvas.width=t.size.w,t.hitCanvas.height=t.size.h})},watch:{nodeSize:function(){this.resetSprites()},canvasStyles:function(){this.resetSprites()}},methods:{canvasScreenShot:function(t,e){var n=this.$refs.canvas,i=document.createElement("canvas");i.width=n.width,i.height=n.height;var r=this.styles.background;e&&(r=this.getCssColor(e));var s=i.getContext("2d");s=this.setCtx(s,r),s.fillRect(0,0,i.width,i.height),s.drawImage(n,0,0);var o=i.toDataURL("image/png");o?t(null,o):t("error generating canvas image")},emit:function(t,e){this.$emit("action",t,e)},canvasInit:function(){var t=document.createElement("canvas");t.width=this.size.w,t.height=this.size.h,t.top=this.offset.y,t.left=this.offset.x,t.id="hit-canvas",this.hitCanvas=t,this.resetSprites()},resetSprites:function(){this.sprites={};var t=["node","nodeSelected","nodePinned","nodeSelectedPinned"],e=!0,n=!1,i=void 0;try{for(var r,s=t[Symbol.iterator]();!(e=(r=s.next()).done);e=!0){var o=r.value;this.sprites[o]=this.nodeSprite(this.styles[o])}}catch(t){n=!0,i=t}finally{try{!e&&s.return&&s.return()}finally{if(n)throw i}}},canvasClick:function(t){var e=this.hitCanvas.getContext("2d"),n=t.touches?t.touches[0]||t.changedTouches[0]:t,i=document.body.scrollTop,r=document.body.scrollLeft,s=n.clientX+r-this.padding.x,o=n.clientY+i-this.padding.y,a=e.getImageData(s,o,1,1).data,l="rgb("+a[0]+","+a[1]+","+a[2]+")",c=this.shapes[l];if(c){var u=c.type+"s",f=this[u][c.index];f&&("mouseup"===t.type||"touchend"===t.type?(this.drag&&(this.drag=null,this.emit("dragEnd")),this.emit(c.type+"Click",[t,f])):"mousedown"!==t.type&&"touchstart"!==t.type||(this.drag=f,this.emit("dragStart",[t,f.index])))}},drawNode:function(t,e){t.beginPath(),t.arc(e.x,e.y,this.nodeSize/2,0,2*Math.PI,!1);var n=t.fillStyle,i=t.strokeStyle;e._color&&(t.fillStyle=e._color),e._borderColor&&(t.strokeStyle=e._borderColor),t.fill(),t.stroke(),t.closePath(),t.fillStyle=n,t.strokeStyle=i},drawLink:function(t,e){t.beginPath(),t.moveTo(e.source.x,e.source.y),t.lineTo(e.target.x,e.target.y),t.lineWidth=this.linkWidth,t.strokeStyle=e._color?e._color:e.color,t.stroke()},drawText:function(t,e,n,i){e=this.setCtx(e,n),this.fontSize&&(e.font=this.fontSize+"px "+n.fontFamily);var r=i?t[i]:t.name,s=t.x+this.labelOffset.x,o=t.y+this.labelOffset.y;e.fillText(r,s,o)},draw:function(t,e,n){this.hitCanvas||this.canvasInit();var i=n.getContext("2d"),r=this.hitCanvas.getContext("2d");!this.stylesReady&&this.CssStyles&&(this.getCssStyles(),this.resetSprites()),i.clearRect(0,0,this.size.w,this.size.h),i=this.setCtx(i,this.styles.link);var s=!0,o=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(s=(l=c.next()).done);s=!0){var u=l.value;this.linksSelected[u.id]||this.drawLink(i,u),this.mapShape(u,"link",this.drawLink,r)}}catch(t){o=!0,a=t}finally{try{!s&&c.return&&c.return()}finally{if(o)throw a}}i=this.setCtx(i,this.styles.linkSelected);for(var f in this.linksSelected){var h=this.linksSelected[f];this.isOnView(h.source)&&this.isOnView(h.target)&&this.drawLink(i,h)}i=this.setCtx(i,this.styles.node);var d=!0,v=!1,y=void 0;try{for(var g,p=t[Symbol.iterator]();!(d=(g=p.next()).done);d=!0){var m=g.value;if(this.isOnView(m)){if(!this.noNodes){var x=this.getNodeSprite(m);i.drawImage(x,m.x-x.width/2,m.y-x.height/2),this.mapShape(m,"node",this.drawNode,r)}this.nodeLabels&&(m.size=this.nodeSize,this.drawText(m,i,this.labelStyle(m)))}}}catch(t){v=!0,y=t}finally{try{!d&&p.return&&p.return()}finally{if(v)throw y}}i=this.setCtx(i,this.styles.nodeSelected);for(var w in this.selected){var S=this.selected[w];if(this.isOnView(S)){var _=this.getNodeSprite(S);i.drawImage(_,S.x-_.width/2,S.y-_.height/2)}}},getNodeSprite:function(t){var e=this.nodeSpriteName(t),n=this.sprites[e];if(!n){var i=this.loadNodeStyle(t);n=this.nodeSprite(i),this.sprites[e]=n}return n},nodeSpriteName:function(t){var e="node";return this.selected[t.id]&&(e+="Selected"),t.pinned&&(e+="Pinned"),t._cssClass&&(e+="-"+t._cssClass),t._color&&(e+="-"+r.a.compColor(t._color)),e},nodeSprite:function(t){var e=this.nodeSize+this.styles.node.lineWidth,n=this.nodeSvg?e:2*e,i=this.spriteCanvas(n),r=i.getContext("2d");if(this.nodeSvg){var o={width:e,height:e,class:t._cssClass||"",style:t._cssStyle||""},a=s.a.svgDataToUrl(this.nodeSvg,o);if(a){var l=new Image;l.onload=function(){r.drawImage(l,0,0),URL.revokeObjectURL(a)},l.onerror=function(t){console.log("error creating node image",t)},l.src=a}}else r=this.setCtx(r,t),this.drawNode(r,{x:e,y:e});return i},spriteCanvas:function(t){var e=document.createElement("canvas");return e.width=t,e.height=t,e},isOnView:function(t){return t.x>0&&t.y>0&&t.x<this.size.w&&t.y<this.size.h},mapShape:function(t,e,n,i){t.colorIndex||(t.colorIndex=this.newColorIndex());var r=Object.assign({},t);r.color=t.colorIndex.rgb,r.borderColor=t.colorIndex.rgb,r.type=e;var s=this.sprites[e];s?(s=this.cloneCanvas(s),s=this.fillCanvas(s,t.colorIndex),i.drawImage(s,t.x-s.width/2,t.y-s.height/2)):n(i,r),this.shapes[t.colorIndex.rgb]=r},fillCanvas:function(t,e){for(var n=t.getContext("2d"),i=n.getImageData(0,0,t.width,t.height),r=t.width*t.height*4,s=3;s<=r;s+=4)i.data[s]>0&&(i.data[s]=255,i.data[s-3]=e.r,i.data[s-2]=e.g,i.data[s-1]=e.b);return n.putImageData(i,0,0),t},newColorIndex:function(){for(;;){var t=this.randomColor();if(!this.shapes[t.rgb])return t}},randomColor:function(){var t=Math.round(255*Math.random()),e=Math.round(255*Math.random()),n=Math.round(255*Math.random());return{r:t,g:e,b:n,rgb:"rgb("+t+","+e+","+n+")"}},setCtx:function(t,e){for(var n in e)t[n]=e[n];return t},cloneCanvas:function(t){var e=document.createElement("canvas"),n=e.getContext("2d");return e.width=t.width,e.height=t.height,n.drawImage(t,0,0),e},Sprite:function(t,e){return this.sprites[t]||(this.sprites[t]=e()),this.sprites[t]},getCssStyles:function(){var t=r.a.create("svg","css-picker");for(var e in this.styles){var n=this.styles[e]||{};n=r.a.fillStyle(n,t)}document.body.removeChild(t),this.stylesReady=!0},loadNodeStyle:function(t){var e="node",n=this.selected[t.id];if(n&&(e="nodeSelected"),t.pinned&&(e="nodePinned"),n&&t.pinned&&(e="nodeSelectedPinned"),t._cssClass){var i=e+"-"+t._cssClass;if(!this.styles[i]){var r=Object.assign({},this.styles[e]||{});r._cssClass=r._cssClass||"",r._cssClass+=" "+t._cssClass,this.updateStyle(i,r)}e=i}var s=Object.assign({},this.styles[e]||this.updateStyle(e));return t._color&&(s.fillStyle=t._color,s._cssStyle="fill:"+t._color),t._cssClass&&(s._cssClass+=" "+t._cssClass),s},updateStyle:function(t,e){e=e||this.styles[t]||{};var n=r.a.create("svg","css-picker");return e=r.a.fillStyle(e,n),this.styles[t]=e,document.body.removeChild(n),e},getCssColor:function(t){var e=r.a.create("div","color-picker"),n=e.id;e.setAttribute("style","background-color:"+t);var i=r.a.mapStyle(n,{fillStyle:"background-color"},[]);return document.body.removeChild(e),i},labelStyle:function(t){var e=this.styles.labels,n=t._labelClass;if(n){var i="labels-"+n,r=this.styles[i];r||(r=Object.assign({},e),r._cssClass+=" "+n,r=this.updateStyle(i,r)),e=r}return e}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5);e.default={name:"svg-renderer",props:["size","nodes","noNodes","selected","linksSelected","links","nodeSize","padding","fontSize","strLinks","linkWidth","nodeLabels","linkLabels","labelOffset","nodeSym"],computed:{nodeSvg:function(){return this.nodeSym?i.a.toObject(this.nodeSym):null}},methods:{getNodeSize:function(t,e){var n=t._size||this.nodeSize;return e&&(n=t["_"+e]||n),n},svgIcon:function(t){return t.svgObj||this.nodeSvg},emit:function(t,e){this.$emit("action",t,e)},svgScreenShot:function(t,e,n,r){var s=i.a.export(this.$refs.svg,r);if(e)t(null,i.a.save(s));else{n||(n=this.searchBackground());var o=i.a.makeCanvas(this.size.w,this.size.h,n);i.a.svgToImg(s,o,function(e,n){e?t(e):t(null,n)})}},linkId:function(t){return"link-"+t.id},linkClass:function(t){var e="link ";return this.linksSelected.hasOwnProperty(t)&&(e+="selected"),e},linkPath:function(t){var e={M:[0|t.source.x,0|t.source.y],X:[0|t.target.x,0|t.target.y]};return this.strLinks?"M "+e.M.join(" ")+" L"+e.X.join(" "):(e.Q=[t.source.x,t.target.y],"M "+e.M+" Q "+e.Q.join(" ")+" "+e.X)},nodeStyle:function(t){return t._color?"fill: "+t._color:""},linkStyle:function(t){return t._color?"stroke: "+t._color:""},nodeClass:function(t){var e=t._cssClass||"";return e+=" node",this.selected[t.id]&&(e+=" selected"),(t.fx||t.fy)&&(e+=" pinned"),e},searchBackground:function(){for(var t=this;t.$parent;){var e=window.getComputedStyle(t.$el),n=e.getPropertyValue("background-color");if(n.replace(/[^\d,]/g,"").split(",").reduce(function(t,e){return parseInt(t)+parseInt(e)},0)>0)return n;t=t.$parent}return"white"},spriteSymbol:function(){var t=this.nodeSym;if(t)return i.a.toSymbol(t)}}}},function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(18),s=n(50),o=n.n(s),a=n(49),l=n.n(a),c=n(45),u=n(5),f=Object.assign({},r);e.default={name:"d3-network",components:{canvasRenderer:l.a,svgRenderer:o.a},props:{netNodes:{type:Array},netLinks:{type:Array},options:{type:Object},nodeSym:{type:String},nodeCb:{type:Function},linkCb:{type:Function},customForces:{type:Object},selection:{type:Object,default:function(){return{nodes:{},links:{}}}}},data:function(){return{canvas:!1,nodes:[],links:[],size:{w:500,h:500},offset:{x:0,y:0},clientOffset:{x:0,y:0},force:500,forces:{Center:!1,X:.5,Y:.5,ManyBody:!0,Link:!0},noNodes:!1,strLinks:!0,fontSize:10,dragging:!1,linkWidth:1,nodeLabels:!1,linkLabels:!1,nodeSize:5,mouseOfst:{x:0,y:0},padding:{x:0,y:0},simulation:null,nodeSvg:null,resizeListener:!0}},render:function(t){var e="svg",n={},i="svg-renderer",r=["size","nodes","links","selected","linksSelected","strLinks","linkWidth","nodeLabels","linkLabels","fontSize","labelOffset","offset","padding","nodeSize","noNodes"],s=!0,o=!1,a=void 0;try{for(var l,c=r[Symbol.iterator]();!(s=(l=c.next()).done);s=!0){var u=l.value;n[u]=this[u]}}catch(t){o=!0,a=t}finally{try{!s&&c.return&&c.return()}finally{if(o)throw a}}return n.nodeSym=this.nodeSvg,this.canvas&&(i="canvas-renderer",e="canvas",n.canvasStyles=this.options.canvasStyles),t("div",{attrs:{class:"net"},on:{mousemove:this.move,"&touchmove":this.move}},[t(i,{props:n,ref:e,on:{action:this.methodCall}})])},created:function(){this.updateOptions(this.options),this.buildNodes(this.netNodes),this.links=this.buildLinks(this.netLinks),this.updateNodeSvg()},mounted:function(){var t=this;this.onResize(),this.$nextTick(function(){t.animate()}),this.resizeListener&&window.addEventListener("resize",this.onResize)},beforeDestroy:function(){this.resizeListener&&window.removeEventListener("resize",this.onResize)},computed:{selected:function(){return this.selection.nodes},linksSelected:function(){return this.selection.links},center:function(){return{x:this.size.w/2+this.size.w/200+this.offset.x,y:this.size.h/2+this.size.h/200+this.offset.y}},labelOffset:function(){return{x:this.nodeSize/2+this.fontSize/2,y:this.fontSize/2}}},watch:{netNodes:function(t){this.buildNodes(t),this.reset()},netLinks:function(t,e){this.links=this.buildLinks(t),this.reset()},nodeSym:function(){this.updateNodeSvg()},options:function(t,e){this.updateOptions(t),e.size&&t.size&&(e.size.w===t.size.w&&e.size.h===t.size.h||this.onResize()),this.animate()}},methods:{updateNodeSvg:function(){var t=null;this.nodeSym&&(t=u.a.svgElFromString(this.nodeSym)),this.nodeSvg=t},methodCall:function(t,e){var n=this[t];n&&"function"==typeof n?e?n.apply(void 0,i(e)):n():console.error("Call to undefined method:",t)},onResize:function(){var t=this.options.size;t&&t.w||(this.size.w=this.$el.clientWidth),t&&t.h||(this.size.h=this.$el.clientHeight),this.padding.x=0,this.padding.y=0;for(var e=this;e.$parent;)this.padding.x+=e.$el.offsetLeft||0,this.padding.y+=e.$el.offsetTop||0,e=e.$parent;this.animate()},updateOptions:function(t){for(var e in t)this.hasOwnProperty(e)&&(this[e]=t[e])},buildNodes:function(t){var e=this,n=this;this.nodes=t.map(function(t,i){return t=e.itemCb(e.nodeCb,t),t.id||n.$set(t,"id",i),t.x||n.$set(t,"x",0),t.y||n.$set(t,"y",0),t.name||n.$set(t,"name","node "+t.id),t.svgSym&&(t.svgIcon=u.a.svgElFromString(t.svgSym),e.canvas||!t.svgIcon||t.svgObj||(t.svgObj=u.a.toObject(t.svgIcon))),t})},buildLinks:function(t){var e=this;return t.concat().map(function(t){return t=e.itemCb(e.linkCb,t),t.source=t.sid,t.target=t.tid,t})},itemCb:function(t,e){return t&&"function"==typeof t&&(e=t(e)),e},simulate:function(t,e){var n=this.forces,i=f.forceSimulation().stop().alpha(.5).nodes(t);return!1!==n.Center&&i.force("center",f.forceCenter(this.center.x,this.center.y)),!1!==n.X&&i.force("X",f.forceX(this.center.x).strength(n.X)),!1!==n.Y&&i.force("Y",f.forceY(this.center.y).strength(n.Y)),!1!==n.ManyBody&&i.force("charge",f.forceManyBody().strength(-this.force)),!1!==n.Link&&i.force("link",f.forceLink(e).id(function(t){return t.id})),i=this.setCustomForces(i)},setCustomForces:function(t){var e=this.customForces;if(e)for(var n in e){var r=this.getD3Func("force"+n);if(r){var s=e[n];t.force("custom"+n,r.apply(void 0,i(s)))}}return t},getD3Func:function(t){var e=f[t];return e&&"function"==typeof e?e:null},animate:function(){this.simulation&&this.simulation.stop(),!1!==this.forces.Link?this.simulation=this.simulate(this.nodes,this.links):this.simulation=this.simulate(this.nodes),this.simulation.restart()},reset:function(){this.animate(),this.nodes=this.simulation.nodes(),this.forces.links&&(this.links=this.simulation.force("link").links())},move:function(t){var e=this.clientPos(t);!1!==this.dragging&&this.nodes[this.dragging]&&(this.simulation.restart(),this.simulation.alpha(.5),this.nodes[this.dragging].fx=e.x-this.mouseOfst.x,this.nodes[this.dragging].fy=e.y-this.mouseOfst.y)},clientPos:function(t){var e=t.touches?t.touches[0].clientX:t.clientX,n=t.touches?t.touches[0].clientY:t.clientY;return e=e||0,n=n||0,{x:e,y:n}},dragStart:function(t,e){this.dragging=!1!==e&&e,this.setMouseOffset(t,this.nodes[e]),!1===this.dragging&&(this.simulation.alpha(.1),this.simulation.restart(),this.setMouseOffset())},dragEnd:function(){var t=this.nodes[this.dragging];t&&!t.pinned&&(t.fx=null,t.fy=null),this.dragStart(!1)},nodeClick:function(t,e){this.$emit("node-click",t,e)},linkClick:function(t,e){this.$emit("link-click",t,e)},setMouseOffset:function(t,e){var n=0,i=0;if(t&&e){var r=this.clientPos(t);n=r.x?r.x-e.x:e.x,i=r.y?r.y-e.y:e.y}this.mouseOfst={x:n,y:i}},screenShot:function(t,e,n,r){var s=this,o=void 0,a=[];this.canvas?(n=!1,o=this.$refs.canvas.canvasScreenShot,a=[e]):(o=this.$refs.svg.svgScreenShot,a=[n,e,r]),n&&(t=t||"export.svg"),o.apply(void 0,[function(e,i){e||(n?c.a.download(i,t):c.a.save(i,t)),s.$emit("screen-shot",e)}].concat(i(a)))}}}},function(t,e,n){"use strict";e.a={background:{_cssClass:"net-svg",fillStyle:"white"},node:{_cssClass:"node",fillStyle:"green",strokeStyle:"orange",lineWidth:2},link:{_cssClass:"link",strokeStyle:"blue",lineWidth:1},labels:{_cssClass:"node-label",_svgElement:"text",fillStyle:"black",fontFamily:"Arial"},nodeSelected:{_cssClass:"node selected",fillStyle:"red",strokeStyle:"orange",lineWidth:2},linkSelected:{_cssClass:"link selected",strokeStyle:"green",lineWidth:2},nodePinned:{_cssClass:"node pinned",fillStyle:"green",strokeStyle:"red"},nodeSelectedPinned:{_cssClass:"node selected pinned",fillStyle:"green",strokeStyle:"red"}}},function(t,e,n){"use strict";e.a={save:function(t,e){var n=this;t&&(t=this.dataURIToBlob(t,function(t){var i=URL.createObjectURL(t);n.download(i,e)}))},dataURIToBlob:function(t,e){for(var n=atob(t.split(",")[1]),i=n.length,r=new Uint8Array(i),s=0;s<i;s++)r[s]=n.charCodeAt(s);e(new Blob([r]))},download:function(t,e){e=e||"";var n=document.createElement("a");n.setAttribute("href",t),n.setAttribute("download",e);var i=document.body.appendChild(n);n.click(),document.body.removeChild(i)}}},function(t,e,n){"use strict";e.a={randomId:function(){return Math.random().toString(36).substring(7)},fillStyle:function(t,e){var n="picker-"+this.randomId(),i=this.canvasPicker(t,n);e.appendChild(i);var r={fillStyle:"fill",strokeStyle:"stroke",lineWidth:"stroke-width",fontFamily:"font-family"};return t=this.mapStyle(n,r,t,null),e.removeChild(i),t},mapStyle:function(t,e,n,i,r){var s=window.getComputedStyle(document.getElementById(t),i);r=r||["lineWidth"];for(var o in e){var a=s.getPropertyValue(e[o]);r.indexOf(o)>-1&&(a=parseInt(a,10)),a&&(n[o]=a)}return n},canvasPicker:function(t,e){var n=t._svgAttrs||{},i=t._svgElement||"circle";if(!t._svgAttrs)switch(i){case"text":n={x:10,y:10,fontSize:20};break;case"circle":n={cx:10,cy:10,r:10}}return n.class=t._cssClass,n.id=e,this.svgCreate(i,n)},compColor:function(t){var e=document.createElement("div");e.style.backgroundColor=t,document.body.appendChild(e);var n=window.getComputedStyle(e,null).getPropertyValue("background-color");return document.body.removeChild(e),n},svgCreate:function(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg",t);for(var i in e)n.setAttributeNS(null,i,e[i]);return n},create:function(t,e,n){n=n||"body";var i=document.createElement(t),r=e||"";return r+=this.randomId(),i.setAttribute("id",r),document[n].appendChild(i),i}}},function(t,e){},function(t,e){},function(t,e,n){n(48);var i=n(6)(n(41),n(52),null,null);t.exports=i.exports},function(t,e,n){var i=n(6)(n(42),n(51),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{ref:"svg",staticClass:"net-svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:t.size.w,height:t.size.h},on:{mouseup:function(e){t.emit("dragEnd",[e])},"&touchend":function(e){t.emit("dragEnd",[e])},"&touchstart":function(t){}}},[n("g",{staticClass:"links",attrs:{id:"l-links"}},t._l(t.links,function(e){return n("path",t._b({class:t.linkClass(e.id)+" curve",style:t.linkStyle(e),attrs:{d:t.linkPath(e),id:t.linkId(e),"stroke-width":t.linkWidth},on:{click:function(n){t.emit("linkClick",[n,e])},"&touchstart":function(n){t.emit("linkClick",[n,e])}}},"path",e._svgAttrs,!1))})),t.noNodes?t._e():n("g",{staticClass:"nodes",attrs:{id:"l-nodes"}},[t._l(t.nodes,function(e,i){return[t.svgIcon(e)?n("svg",t._b({key:i,class:"node-svg "+t.nodeClass(e),style:t.nodeStyle(e),attrs:{viewBox:t.svgIcon(e).attrs.viewBox,width:t.getNodeSize(e,"width"),height:t.getNodeSize(e,"height"),x:e.x-t.getNodeSize(e,"width")/2,y:e.y-t.getNodeSize(e,"height")/2,title:e.name},domProps:{innerHTML:t._s(t.svgIcon(e).data)},on:{click:function(n){t.emit("nodeClick",[n,e])},"&touchend":function(n){t.emit("nodeClick",[n,e])},mousedown:function(e){e.preventDefault(),t.emit("dragStart",[e,i])},"&touchstart":function(e){t.emit("dragStart",[e,i])}}},"svg",e._svgAttrs,!1)):n("circle",t._b({key:i,class:t.nodeClass(e),style:t.nodeStyle(e),attrs:{r:t.getNodeSize(e)/2,cx:e.x,cy:e.y,title:e.name},on:{click:function(n){t.emit("nodeClick",[n,e])},"&touchend":function(n){t.emit("nodeClick",[n,e])},mousedown:function(e){e.preventDefault(),t.emit("dragStart",[e,i])},"&touchstart":function(e){t.emit("dragStart",[e,i])}}},"circle",e._svgAttrs,!1))]})],2),t.linkLabels?n("g",{staticClass:"labels",attrs:{id:"link-labels"}},t._l(t.links,function(e){return n("text",{staticClass:"link-label"},[n("textPath",{attrs:{"xlink:href":"#"+t.linkId(e),startOffset:"50%"}},[t._v(t._s(e.name||e.id))])])})):t._e(),t.nodeLabels?n("g",{staticClass:"labels",attrs:{id:"node-labels"}},t._l(t.nodes,function(e){return n("text",{staticClass:"node-label",class:e._labelClass?e._labelClass:"",attrs:{x:e.x+t.getNodeSize(e)/2+t.fontSize/2,y:e.y+t.labelOffset.y,"font-size":t.fontSize,"stroke-width":t.fontSize/8}},[t._v(t._s(e.name))])})):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("canvas",{directives:[{name:"render-canvas",rawName:"v-render-canvas",value:{links:t.links,nodes:t.nodes},expression:"{links, nodes}"}],ref:"canvas",style:t.canvasStyle,attrs:{id:"canvas",width:t.size.w,height:t.size.h},on:{mouseup:function(e){e.preventDefault(),t.canvasClick(e)},mousedown:function(e){e.preventDefault(),t.canvasClick(e)},"&touchstart":function(e){t.canvasClick(e)},"&touchend":function(e){t.canvasClick(e)}}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(10)}])});

},{}],2:[function(require,module,exports){
module.exports = {
  CSP: CSP,
  Domain: Domain,
  Variable: Variable,
  DiffConstraint: DiffConstraint
}

function Variable (name, domain) {
  this.name = name

  this.originalDomain = domain
  this.currentDomain = this.originalDomain.clone()

  this.toString = function () {
    var result = 'Name: ' + this.name + ', Domain: '
    for (var i = 0; i < this.currentDomain.values.length; i++) {
      result = result + this.currentDomain.values[i]
      if (i !== this.currentDomain.values.length - 1) {
        result = result + ', '
      }
    }
    return result
  }
}

function Domain (name, values) {
  this.name = name
  this.values = values

  this.clone = function () {
    return new Domain(this.name, this.values)
  }

  this.remove = function (value) {
    var result = []
    var count = 0

    for (var i = 0; i < this.values.length; i++) {
      if (this.values[i] !== value) {
        result[count] = this.values[i]
        count++
      }
    }

    this.values = result
  }
}

// Theses are binary constraints
function DiffConstraint (name, scope) {
  this.name = name
  this.scope = scope

  this.inScope = function (variableName) {
    return (scope[0] === variableName || scope[1] === variableName)
  }

  this.toString = function () {
    return 'Name: ' + this.name + ', Scope: ' + this.scope[0] + ', ' + this.scope[1]
  }
}

function CSP (name, variables, constraints) {
  this.name = name
  this.variables = variables
  this.constraints = constraints

  this.getNeighbors = function (variable) {
    var result = []
    this.constraints.forEach(function (c) {
      if (c.scope[0] === variable.name) {
        result.push(c.scope[1])
      } else if (c.scope[1] === variable.name) {
        result.push(c.scope[0])
      }
    })
    return result
  }

  this.hasEdge = function (a, b) {
    var edge = this.constraints.find(function (e) {
      return (e.inScope(a.name) && e.inScope(b.name))
    })
    return typeof edge !== 'undefined'
  }

  this.getEdge = function (a, b) {
    var edge = this.constraints.find(function (e) {
      return (e.inScope(a.name) && e.inScope(b.name))
    })
    return edge
  }

  this.getNetwork = function () {
    var network = {}

    var nodes = []
    for (var i = 0; i < this.variables.length; i++) {
      nodes[i] = {
        id: this.variables[i].name
      }
    }
    var links = []
    for (i = 0; i < this.constraints.length; i++) {
      links[i] = {
        id: this.constraints[i].name,
        sid: this.constraints[i].scope[0],
        tid: this.constraints[i].scope[1]
      }
    }

    network.nodes = nodes
    network.links = links
    return network
  }
}

},{}],3:[function(require,module,exports){
module.exports = {
  cspToNetwork: cspToNetwork,
  networkToCsp: networkToCsp
}

var CSPUTILS = require('../code/csp.js')

/*
* Note: These functions assumes all variables have the same domain.
*/
function cspToNetwork (csp) {
  var network = {}
  var nodes = []
  var links = []

  for (var i = 0; i < csp.variables.length; i++) {
    nodes[i] = {
      id: csp.variables[i].name,
      _color: 'gray'
    }
  }

  for (i = 0; i < csp.constraints.length; i++) {
    links[i] = {
      id: csp.constraints[i].name,
      sid: csp.constraints[i].scope[0],
      tid: csp.constraints[i].scope[1],
      _color: 'slategray'
    }
  }

  network.domainValues = csp.variables[0].originalDomain.values
  network.name = csp.name
  network.nodes = nodes
  network.links = links

  return network
}

function networkToCsp (network) {
  var variables = []
  var constraints = []

  for (var i = 0; i < network.nodes.length; i++) {
    variables[i] = new CSPUTILS.Variable(network.nodes[i].id, new CSPUTILS.Domain('CSP Domain', network.domainValues))
  }

  for (i = 0; i < network.links.length; i++) {
    var link = network.links[i]
    constraints[i] = new CSPUTILS.DiffConstraint(link.id, [link.sid, link.tid])
  }

  var csp = new CSPUTILS.CSP(network.name, variables, constraints)

  return csp
}

},{"../code/csp.js":2}],4:[function(require,module,exports){
module.exports = {
  Backtrack: Backtrack
}

// const CSPUTILS = require('../code/csp.js')

var colors = {
  0: 'yellow',
  1: 'red',
  2: 'blue',
  3: 'green',
  4: 'purple'
}

function clone (obj) {
  var copy
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Array) {
    copy = []
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i])
    }
    return copy
  }

  if (obj instanceof Object) {
    copy = {}
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr])
    }
    return copy
  }
  throw new Error("This type isn't supported")
}

function Backtrack (csp, heuristic) {
  var _this = this
  _this.csp = csp
  _this.brelaz = false
  if (typeof heuristic === 'string') {
    _this.heuristic = heuristic
  } else {
    _this.heuristic = 'lex'
  }
  if (_this.heuristic === 'deg' || _this.heuristic === 'wDeg' || _this.heuristic === 'blz') {
    _this.csp.variables.sort(function (a, b) {
      if (_this.csp.getNeighbors(b).length - _this.csp.getNeighbors(a).length !== 0) {
        return _this.csp.getNeighbors(b).length - _this.csp.getNeighbors(a).length
      } else {
        // This compares variables lexiographically
        return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
      }
    })
  } else {
    _this.csp.variables.sort(function (a, b) {
      return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
    })
  }

  _this.reset = function () {
    _this.consistent = true
    _this.checking = false
    _this.status = 'unknown'
    _this.index = 1
    _this.variables = []
    _this.nodesVisited = 0
    _this.constraintsCompared = 0
    _this.backTracks = 0
    for (var i = 0; i < _this.csp.variables.length + 1; i++) {
      if (i !== 0) {
        _this.variables[i] = clone(_this.csp.variables[i - 1])
        _this.variables[i].weight = _this.csp.getNeighbors(_this.variables[i]).length
        _this.variables[i].neighborColors = new Set()
        _this.variables[i].neighbors = []
      } else {
        _this.variables[i] = undefined
      }
    }
    _this.path = new Array(_this.variables.length)
    for (i = 1; i < _this.variables.length; i++) {
      _this.csp.getNeighbors(_this.variables[i]).forEach(function (e) {
        _this.variables[i].neighbors.push(_this.variables.find(
          function (f) {
            if (typeof f !== 'undefined') {
              return f.name === e
            } else {
              return false
            }
          }
        ))
      })
    }
  }

  _this.unlabel = function (i) {
    _this.unlabelNeighbors(_this.variables[i], _this.path[i])
    var h = i - 1
    _this.path[i] = ''
    _this.variables[i].currentDomain = _this.variables[i].originalDomain.clone()
    if (h > 0) {
      _this.unlabelNeighbors(_this.variables[i], _this.path[i])
      _this.variables[h].currentDomain.remove(_this.path[h])
      _this.consistent = _this.variables[h].currentDomain.values.length !== 0
    }
    _this.backTracks++
    return h
  }

  _this.getNextVariable = function () {
    if (_this.heuristic === 'wDeg') {
      // This should split, sort, and recombine the list of variables according to weight
      var first = _this.variables.splice(_this.index + 1, (_this.variables.length - _this.index) - 1)
        .sort(function (a, b) {
          if (b.weight - a.weight !== 0) {
            return b.weight - a.weight
          } else {
            // This compares variables lexiographically
            return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
          }
        })

      var second = _this.variables.splice(0, _this.index + 2)

      _this.variables = second.concat(first)
    } else if (_this.heuristic === 'blz') {
      var firstBlz = _this.variables.splice(_this.index, (_this.variables.length - _this.index))
        .sort(function (a, b) {
          if (b.neighborColors.size - a.neighborColors.size !== 0) {
            return b.neighborColors.size - a.neighborColors.size
          } else if (b.neighbors.length - a.neighbors.length !== 0) {
            return b.neighbors.length - a.neighbors.length
          } else {
            // This compares variables lexiographically
            return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
          }
        })

      var secondBlz = _this.variables.splice(0, _this.index + 1)
      _this.variables = secondBlz.concat(firstBlz)
    }
  }

  _this.labelNeighbors = function (variable, value) {
    // console.log(this.variables)
    variable.neighbors.forEach(function (e) {
      e.neighborColors.add(value)
    })
  }

  _this.unlabelNeighbors = function (variable, value) {
    variable.neighbors.forEach(function (e) {
      e.neighborColors.delete(value)
    })
  }

  _this.check = function () {
    _this.consistent = true

    if (_this.path[_this.index] === '' || typeof _this.path[_this.index] === 'undefined') {
      _this.nodesVisited++
    }

    _this.path[_this.index] = _this.variables[_this.index].currentDomain.values[0]

    for (var h = 1; h < _this.index && _this.consistent; h++) {
      if (_this.csp.hasEdge(_this.variables[_this.index], _this.variables[h]) && _this.path[_this.index] === _this.path[h]) {
        _this.variables[_this.index].currentDomain.remove(_this.path[_this.index])
        _this.consistent = false
        if (_this.variables[_this.index].currentDomain.values.length === 0) {
          _this.variables[_this.index].weight++
          _this.variables[h].weight++
        }
      }
      _this.constraintsCompared++
    }

    if (_this.consistent) {
      _this.labelNeighbors(_this.variables[_this.index], _this.path[_this.index])
      _this.index = _this.index + 1
      _this.checking = false
    } else if (_this.variables[_this.index].currentDomain.values.length === 0) {
      _this.checking = false
    }
  }

  _this.next = function () {
    if (_this.status === 'unknown') {
      if (!_this.checking) {
        if (_this.index > _this.variables.length - 1) {
          _this.status = 'solved'
        } else if (_this.index === 0) {
          _this.status = 'impossible'
        } else {
          if (_this.consistent) {
            if (_this.variables[_this.index].currentDomain.length === _this.variables[_this.index].originalDomain.length) {
              _this.getNextVariable()
            }
            _this.checking = true
            _this.check()
          } else {
            _this.index = _this.unlabel(_this.index)
          }
        }
      } else {
        _this.check()
      }
    }
    // console.log(_this.path)
    // console.log(_this.variables)
  }

  _this.solve = function () {
    var m = 0
    while (_this.status === 'unknown' && m <= 3000000) {
      _this.next()
      m++
    }
  }

  _this.runPerformanceTest = function () {
    _this.reset()
    var t0 = new Date().getTime()
    _this.solve()
    var t1 = new Date().getTime()

    console.log('H: ' + _this.heuristic)
    console.log('time: ' + (t1 - t0) + ' milliseconds')
    console.log('CC: ' + _this.constraintsCompared)
    console.log('NV: ' + _this.nodesVisited)
    console.log('BT: ' + _this.backTracks)
    console.log('Status: ' + _this.status)
    _this.reset()
  }

  _this.runTestCSV = function () {
    _this.reset()
    var t0 = new Date().getTime()
    _this.solve()
    var t1 = new Date().getTime()

    console.log('' + _this.heuristic + ',' + (t1 - t0) + ',' + _this.constraintsCompared + ',' + _this.nodesVisited + ',' + _this.backTracks + ',' + _this.status)

    _this.reset()
  }

  _this.getColors = function () {
    var colorsResult = []
    for (var i = 0; i < _this.csp.variables.length; i++) {
      var index = _this.variables.findIndex(function (v) {
        if (typeof v !== 'undefined') {
          return v.name === _this.csp.variables[i].name
        } else {
          return false
        }
      })

      var variableColor = 'grey'

      if (typeof _this.path[index] !== 'undefined') {
        variableColor = colors[_this.path[index]]
      }

      colorsResult[i] = {
        id: _this.csp.variables[i].name,
        _color: variableColor
      }
    }
    return colorsResult
  }

  _this.reset()
}

},{}],5:[function(require,module,exports){
/**
 * Created by kgaar2 on 4/10/2018.
 */

var D3Network = require('vue-d3-network')
// var CSPUTILS = require('../code/csp.js')
var Search = require('../code/search.js')
var Network = require('../code/network.js')

var network =
{ domainValues: [ 1, 2, 3 ],
  name: 'ColAustralia-conflicts',
  nodes:
   [ { id: 'NSW', _color: 'gray' },
     { id: 'NT', _color: 'gray' },
     { id: 'Q', _color: 'gray' },
     { id: 'SA', _color: 'gray' },
     { id: 'T', _color: 'gray' },
     { id: 'V', _color: 'gray' },
     { id: 'WA', _color: 'gray' } ],
  links:
   [ { id: 'C0', sid: 'WA', tid: 'NT', _color: 'slategray' },
     { id: 'C1', sid: 'WA', tid: 'SA', _color: 'slategray' },
     { id: 'C2', sid: 'NT', tid: 'SA', _color: 'slategray' },
     { id: 'C3', sid: 'NT', tid: 'Q', _color: 'slategray' },
     { id: 'C4', sid: 'Q', tid: 'NSW', _color: 'slategray' },
     { id: 'C5', sid: 'Q', tid: 'SA', _color: 'slategray' },
     { id: 'C6', sid: 'NSW', tid: 'SA', _color: 'slategray' },
     { id: 'C7', sid: 'NSW', tid: 'V', _color: 'slategray' },
     { id: 'C8', sid: 'SA', tid: 'V', _color: 'slategray' } ] }

var network2 =
  { domainValues: [ 0, 1, 2 ],
    name: '?',
    nodes:
     [ { id: 'V0', _color: 'gray' },
       { id: 'V1', _color: 'gray' },
       { id: 'V2', _color: 'gray' },
       { id: 'V3', _color: 'gray' },
       { id: 'V4', _color: 'gray' },
       { id: 'V5', _color: 'gray' },
       { id: 'V6', _color: 'gray' },
       { id: 'V7', _color: 'gray' },
       { id: 'V8', _color: 'gray' },
       { id: 'V9', _color: 'gray' },
       { id: 'V10', _color: 'gray' } ],
    links:
     [ { id: 'C0', sid: 'V0', tid: 'V1', _color: 'slategray' },
       { id: 'C1', sid: 'V0', tid: 'V3', _color: 'slategray' },
       { id: 'C2', sid: 'V0', tid: 'V6', _color: 'slategray' },
       { id: 'C3', sid: 'V0', tid: 'V8', _color: 'slategray' },
       { id: 'C4', sid: 'V1', tid: 'V2', _color: 'slategray' },
       { id: 'C5', sid: 'V1', tid: 'V5', _color: 'slategray' },
       { id: 'C6', sid: 'V1', tid: 'V7', _color: 'slategray' },
       { id: 'C7', sid: 'V2', tid: 'V4', _color: 'slategray' },
       { id: 'C8', sid: 'V2', tid: 'V6', _color: 'slategray' },
       { id: 'C9', sid: 'V2', tid: 'V9', _color: 'slategray' },
       { id: 'C10', sid: 'V3', tid: 'V4', _color: 'slategray' },
       { id: 'C11', sid: 'V3', tid: 'V5', _color: 'slategray' },
       { id: 'C12', sid: 'V3', tid: 'V9', _color: 'slategray' },
       { id: 'C13', sid: 'V4', tid: 'V7', _color: 'slategray' },
       { id: 'C14', sid: 'V4', tid: 'V8', _color: 'slategray' },
       { id: 'C15', sid: 'V5', tid: 'V10', _color: 'slategray' },
       { id: 'C16', sid: 'V6', tid: 'V10', _color: 'slategray' },
       { id: 'C17', sid: 'V7', tid: 'V10', _color: 'slategray' },
       { id: 'C18', sid: 'V8', tid: 'V10', _color: 'slategray' },
       { id: 'C19', sid: 'V9', tid: 'V10', _color: 'slategray' } ] }

var network3 = {
  'domainValues':[0,1,2,3,4],
  'name': 'queens',
  'nodes':
    [
      {'id': 'V0', '_color': 'gray'},
      {'id': 'V1', '_color': 'gray'},
      {'id': 'V2', '_color': 'gray'},
      {'id': 'V3', '_color': 'gray'},
      {'id': 'V4', '_color': 'gray'},
      {'id': 'V5', '_color': 'gray'},
      {'id': 'V6', '_color': 'gray'},
      {'id': 'V7', '_color': 'gray'},
      {'id': 'V8', '_color': 'gray'},
      {'id': 'V9', '_color': 'gray'},
      {'id': 'V10', '_color': 'gray'},
      {'id': 'V11', '_color': 'gray'},
      {'id': 'V12', '_color': 'gray'},
      {'id': 'V13', '_color': 'gray'},
      {'id': 'V14', '_color': 'gray'},
      {'id': 'V15', '_color': 'gray'},
      {'id': 'V16', '_color': 'gray'},
      {'id': 'V17', '_color': 'gray'},
      {'id': 'V18', '_color': 'gray'},
      {'id': 'V19', '_color': 'gray'},
      {'id': 'V20', '_color': 'gray'},
      {'id': 'V21', '_color': 'gray'},
      {'id': 'V22', '_color': 'gray'},
      {'id': 'V23', '_color': 'gray'},
      {'id': 'V24', '_color': 'gray'}
    ],
  'links':
    [
      {'id': 'C0', 'sid': 'V0', 'tid': 'V1', '_color': 'slategray'},
      {'id': 'C1', 'sid': 'V0', 'tid': 'V2', '_color': 'slategray'},
      {'id': 'C2', 'sid': 'V0', 'tid': 'V3', '_color': 'slategray'},
      {'id': 'C3', 'sid': 'V0', 'tid': 'V4', '_color': 'slategray'},
      {'id': 'C4', 'sid': 'V0', 'tid': 'V5', '_color': 'slategray'},
      {'id': 'C5', 'sid': 'V0', 'tid': 'V6', '_color': 'slategray'},
      {'id': 'C6', 'sid': 'V0', 'tid': 'V10', '_color': 'slategray'},
      {'id': 'C7', 'sid': 'V0', 'tid': 'V12', '_color': 'slategray'},
      {'id': 'C8', 'sid': 'V0', 'tid': 'V15', '_color': 'slategray'},
      {'id': 'C9', 'sid': 'V0', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C10', 'sid': 'V0', 'tid': 'V20', '_color': 'slategray'},
      {'id': 'C11', 'sid': 'V0', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C12', 'sid': 'V1', 'tid': 'V2', '_color': 'slategray'},
      {'id': 'C13', 'sid': 'V1', 'tid': 'V3', '_color': 'slategray'},
      {'id': 'C14', 'sid': 'V1', 'tid': 'V4', '_color': 'slategray'},
      {'id': 'C15', 'sid': 'V1', 'tid': 'V5', '_color': 'slategray'},
      {'id': 'C16', 'sid': 'V1', 'tid': 'V6', '_color': 'slategray'},
      {'id': 'C17', 'sid': 'V1', 'tid': 'V7', '_color': 'slategray'},
      {'id': 'C18', 'sid': 'V1', 'tid': 'V11', '_color': 'slategray'},
      {'id': 'C19', 'sid': 'V1', 'tid': 'V13', '_color': 'slategray'},
      {'id': 'C20', 'sid': 'V1', 'tid': 'V16', '_color': 'slategray'},
      {'id': 'C21', 'sid': 'V1', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C22', 'sid': 'V1', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C23', 'sid': 'V2', 'tid': 'V3', '_color': 'slategray'},
      {'id': 'C24', 'sid': 'V2', 'tid': 'V4', '_color': 'slategray'},
      {'id': 'C25', 'sid': 'V2', 'tid': 'V6', '_color': 'slategray'},
      {'id': 'C26', 'sid': 'V2', 'tid': 'V7', '_color': 'slategray'},
      {'id': 'C27', 'sid': 'V2', 'tid': 'V8', '_color': 'slategray'},
      {'id': 'C28', 'sid': 'V2', 'tid': 'V10', '_color': 'slategray'},
      {'id': 'C29', 'sid': 'V2', 'tid': 'V12', '_color': 'slategray'},
      {'id': 'C30', 'sid': 'V2', 'tid': 'V14', '_color': 'slategray'},
      {'id': 'C31', 'sid': 'V2', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C32', 'sid': 'V2', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C33', 'sid': 'V3', 'tid': 'V4', '_color': 'slategray'},
      {'id': 'C34', 'sid': 'V3', 'tid': 'V7', '_color': 'slategray'},
      {'id': 'C35', 'sid': 'V3', 'tid': 'V8', '_color': 'slategray'},
      {'id': 'C36', 'sid': 'V3', 'tid': 'V9', '_color': 'slategray'},
      {'id': 'C37', 'sid': 'V3', 'tid': 'V11', '_color': 'slategray'},
      {'id': 'C38', 'sid': 'V3', 'tid': 'V13', '_color': 'slategray'},
      {'id': 'C39', 'sid': 'V3', 'tid': 'V15', '_color': 'slategray'},
      {'id': 'C40', 'sid': 'V3', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C41', 'sid': 'V3', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C42', 'sid': 'V4', 'tid': 'V8', '_color': 'slategray'},
      {'id': 'C43', 'sid': 'V4', 'tid': 'V9', '_color': 'slategray'},
      {'id': 'C44', 'sid': 'V4', 'tid': 'V12', '_color': 'slategray'},
      {'id': 'C45', 'sid': 'V4', 'tid': 'V14', '_color': 'slategray'},
      {'id': 'C46', 'sid': 'V4', 'tid': 'V16', '_color': 'slategray'},
      {'id': 'C47', 'sid': 'V4', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C48', 'sid': 'V4', 'tid': 'V20', '_color': 'slategray'},
      {'id': 'C49', 'sid': 'V4', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C50', 'sid': 'V5', 'tid': 'V6', '_color': 'slategray'},
      {'id': 'C51', 'sid': 'V5', 'tid': 'V7', '_color': 'slategray'},
      {'id': 'C52', 'sid': 'V5', 'tid': 'V8', '_color': 'slategray'},
      {'id': 'C53', 'sid': 'V5', 'tid': 'V9', '_color': 'slategray'},
      {'id': 'C54', 'sid': 'V5', 'tid': 'V10', '_color': 'slategray'},
      {'id': 'C55', 'sid': 'V5', 'tid': 'V11', '_color': 'slategray'},
      {'id': 'C56', 'sid': 'V5', 'tid': 'V15', '_color': 'slategray'},
      {'id': 'C57', 'sid': 'V5', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C58', 'sid': 'V5', 'tid': 'V20', '_color': 'slategray'},
      {'id': 'C59', 'sid': 'V5', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C60', 'sid': 'V6', 'tid': 'V7', '_color': 'slategray'},
      {'id': 'C61', 'sid': 'V6', 'tid': 'V8', '_color': 'slategray'},
      {'id': 'C62', 'sid': 'V6', 'tid': 'V9', '_color': 'slategray'},
      {'id': 'C63', 'sid': 'V6', 'tid': 'V10', '_color': 'slategray'},
      {'id': 'C64', 'sid': 'V6', 'tid': 'V11', '_color': 'slategray'},
      {'id': 'C65', 'sid': 'V6', 'tid': 'V12', '_color': 'slategray'},
      {'id': 'C66', 'sid': 'V6', 'tid': 'V16', '_color': 'slategray'},
      {'id': 'C67', 'sid': 'V6', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C68', 'sid': 'V6', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C69', 'sid': 'V6', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C70', 'sid': 'V7', 'tid': 'V8', '_color': 'slategray'},
      {'id': 'C71', 'sid': 'V7', 'tid': 'V9', '_color': 'slategray'},
      {'id': 'C72', 'sid': 'V7', 'tid': 'V11', '_color': 'slategray'},
      {'id': 'C73', 'sid': 'V7', 'tid': 'V12', '_color': 'slategray'},
      {'id': 'C74', 'sid': 'V7', 'tid': 'V13', '_color': 'slategray'},
      {'id': 'C75', 'sid': 'V7', 'tid': 'V15', '_color': 'slategray'},
      {'id': 'C76', 'sid': 'V7', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C77', 'sid': 'V7', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C78', 'sid': 'V7', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C79', 'sid': 'V8', 'tid': 'V9', '_color': 'slategray'},
      {'id': 'C80', 'sid': 'V8', 'tid': 'V12', '_color': 'slategray'},
      {'id': 'C81', 'sid': 'V8', 'tid': 'V13', '_color': 'slategray'},
      {'id': 'C82', 'sid': 'V8', 'tid': 'V14', '_color': 'slategray'},
      {'id': 'C83', 'sid': 'V8', 'tid': 'V16', '_color': 'slategray'},
      {'id': 'C84', 'sid': 'V8', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C85', 'sid': 'V8', 'tid': 'V20', '_color': 'slategray'},
      {'id': 'C86', 'sid': 'V8', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C87', 'sid': 'V9', 'tid': 'V13', '_color': 'slategray'},
      {'id': 'C88', 'sid': 'V9', 'tid': 'V14', '_color': 'slategray'},
      {'id': 'C89', 'sid': 'V9', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C90', 'sid': 'V9', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C91', 'sid': 'V9', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C92', 'sid': 'V9', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C93', 'sid': 'V10', 'tid': 'V11', '_color': 'slategray'},
      {'id': 'C94', 'sid': 'V10', 'tid': 'V12', '_color': 'slategray'},
      {'id': 'C95', 'sid': 'V10', 'tid': 'V13', '_color': 'slategray'},
      {'id': 'C96', 'sid': 'V10', 'tid': 'V14', '_color': 'slategray'},
      {'id': 'C97', 'sid': 'V10', 'tid': 'V15', '_color': 'slategray'},
      {'id': 'C98', 'sid': 'V10', 'tid': 'V16', '_color': 'slategray'},
      {'id': 'C99', 'sid': 'V10', 'tid': 'V20', '_color': 'slategray'},
      {'id': 'C100', 'sid': 'V10', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C101', 'sid': 'V11', 'tid': 'V12', '_color': 'slategray'},
      {'id': 'C102', 'sid': 'V11', 'tid': 'V13', '_color': 'slategray'},
      {'id': 'C103', 'sid': 'V11', 'tid': 'V14', '_color': 'slategray'},
      {'id': 'C104', 'sid': 'V11', 'tid': 'V15', '_color': 'slategray'},
      {'id': 'C105', 'sid': 'V11', 'tid': 'V16', '_color': 'slategray'},
      {'id': 'C106', 'sid': 'V11', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C107', 'sid': 'V11', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C108', 'sid': 'V11', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C109', 'sid': 'V12', 'tid': 'V13', '_color': 'slategray'},
      {'id': 'C110', 'sid': 'V12', 'tid': 'V14', '_color': 'slategray'},
      {'id': 'C111', 'sid': 'V12', 'tid': 'V16', '_color': 'slategray'},
      {'id': 'C112', 'sid': 'V12', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C113', 'sid': 'V12', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C114', 'sid': 'V12', 'tid': 'V20', '_color': 'slategray'},
      {'id': 'C115', 'sid': 'V12', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C116', 'sid': 'V12', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C117', 'sid': 'V13', 'tid': 'V14', '_color': 'slategray'},
      {'id': 'C118', 'sid': 'V13', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C119', 'sid': 'V13', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C120', 'sid': 'V13', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C121', 'sid': 'V13', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C122', 'sid': 'V13', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C123', 'sid': 'V14', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C124', 'sid': 'V14', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C125', 'sid': 'V14', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C126', 'sid': 'V14', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C127', 'sid': 'V15', 'tid': 'V16', '_color': 'slategray'},
      {'id': 'C128', 'sid': 'V15', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C129', 'sid': 'V15', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C130', 'sid': 'V15', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C131', 'sid': 'V15', 'tid': 'V20', '_color': 'slategray'},
      {'id': 'C132', 'sid': 'V15', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C133', 'sid': 'V16', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C134', 'sid': 'V16', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C135', 'sid': 'V16', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C136', 'sid': 'V16', 'tid': 'V20', '_color': 'slategray'},
      {'id': 'C137', 'sid': 'V16', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C138', 'sid': 'V16', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C139', 'sid': 'V17', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C140', 'sid': 'V17', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C141', 'sid': 'V17', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C142', 'sid': 'V17', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C143', 'sid': 'V17', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C144', 'sid': 'V18', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C145', 'sid': 'V18', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C146', 'sid': 'V18', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C147', 'sid': 'V18', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C148', 'sid': 'V19', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C149', 'sid': 'V19', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C150', 'sid': 'V20', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C151', 'sid': 'V20', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C152', 'sid': 'V20', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C153', 'sid': 'V20', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C154', 'sid': 'V21', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C155', 'sid': 'V21', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C156', 'sid': 'V21', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C157', 'sid': 'V22', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C158', 'sid': 'V22', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C159', 'sid': 'V23', 'tid': 'V24', '_color': 'slategray'}
    ]
}

var csp = Network.networkToCsp(network)

new Vue({
  el: '#app',
  components: {
    D3Network: D3Network
  },
  data: {
    graph: network,
    options: {
      force: 3000,
      nodeSize: 20,
      nodeLabels: true,
      linkWidth: 2

    },
    csp: csp,
    backTrack: new Search.Backtrack(csp, 'lex'),
    exampleNetworks: {
      0: network,
      1: network2,
      2: network3
    },
    networkName: 'aus'
  },
  methods: {
    nextOperation: function (event) {
      this.backTrack.next()
      this.changeColors(this.backTrack.getColors())
    },
    solve: function (event) {
      this.backTrack.solve()
      this.changeColors(this.backTrack.getColors())
    },
    reset: function (event) {
      this.backTrack.reset()
      this.changeColors(this.backTrack.getColors())
    },
    changeColors: function (colors) {
      this.graph.nodes.forEach(function (e) {
        var color = colors.find(function (element) {
          return element.id === e.id
        })
        e._color = color._color
      })

      var temp = this.graph.links.pop()
      this.graph.links.push(temp)
    },
    changeHeuristic: function (heuristic) {
      this.backTrack = new Search.Backtrack(this.csp, heuristic)
      this.changeColors(this.backTrack.getColors())
    },
    changeCSP: function (network, name) {
      this.networkName = name
      this.graph = network
      var csp = Network.networkToCsp(network)
      this.csp = csp
      this.backTrack = new Search.Backtrack(csp, this.backTrack.heuristic)

      this.changeColors(this.backTrack.getColors())
    }
  },
  computed: {
    currentVariableName: function () {
      if (this.backTrack.index === this.backTrack.variables.length) {
        return 'Solved'
      } else if (this.backTrack.index > 0) {
        return 'On node ' + this.backTrack.variables[this.backTrack.index].name
      } else {
        return 'No Solution'
      }
    },
    operationCounters: function () {
      var counters = {
        nodes: this.backTrack.nodesVisited,
        constraints: this.backTrack.constraintsCompared,
        backtracks: this.backTrack.backTracks,
        heuristic: this.backTrack.heuristic
      }
      return counters
    }
  }

})

},{"../code/network.js":3,"../code/search.js":4,"vue-d3-network":1}]},{},[5]);
