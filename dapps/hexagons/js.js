!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=React},function(t,e){t.exports=RChainTokenFiles},function(t,e){t.exports=ReactDOM},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(2),i=n.n(a),c=n(1);var s=Math.PI/3,u=[0,s,2*s,3*s,4*s,5*s];function l(t){return t[0]}function f(t){return t[1]}function p(){}var h=function(t){return null==t?p:function(){return this.querySelector(t)}};function d(){return[]}var m=function(t){return new Array(t.length)};function y(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}y.prototype={constructor:y,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function v(t,e,n,r,o,a){for(var i,c=0,s=e.length,u=a.length;c<u;++c)(i=e[c])?(i.__data__=a[c],r[c]=i):n[c]=new y(t,a[c]);for(;c<s;++c)(i=e[c])&&(o[c]=i)}function b(t,e,n,r,o,a,i){var c,s,u,l={},f=e.length,p=a.length,h=new Array(f);for(c=0;c<f;++c)(s=e[c])&&(h[c]=u="$"+i.call(s,s.__data__,c,e),u in l?o[c]=s:l[u]=s);for(c=0;c<p;++c)(s=l[u="$"+i.call(t,a[c],c,a)])?(r[c]=s,s.__data__=a[c],l[u]=null):n[c]=new y(t,a[c]);for(c=0;c<f;++c)(s=e[c])&&l[h[c]]===s&&(o[c]=s)}function g(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}var _="http://www.w3.org/1999/xhtml",w={svg:"http://www.w3.org/2000/svg",xhtml:_,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},E=function(t){var e=t+="",n=e.indexOf(":");return n>=0&&"xmlns"!==(e=t.slice(0,n))&&(t=t.slice(n+1)),w.hasOwnProperty(e)?{space:w[e],local:t}:t};function N(t){return function(){this.removeAttribute(t)}}function S(t){return function(){this.removeAttributeNS(t.space,t.local)}}function O(t,e){return function(){this.setAttribute(t,e)}}function x(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function C(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttribute(t):this.setAttribute(t,n)}}function R(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}var k=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView};function I(t){return function(){this.style.removeProperty(t)}}function A(t,e,n){return function(){this.style.setProperty(t,e,n)}}function P(t,e,n){return function(){var r=e.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,n)}}function j(t,e){return t.style.getPropertyValue(e)||k(t).getComputedStyle(t,null).getPropertyValue(e)}function T(t){return function(){delete this[t]}}function U(t,e){return function(){this[t]=e}}function M(t,e){return function(){var n=e.apply(this,arguments);null==n?delete this[t]:this[t]=n}}function D(t){return t.trim().split(/^|\s+/)}function B(t){return t.classList||new V(t)}function V(t){this._node=t,this._names=D(t.getAttribute("class")||"")}function q(t,e){for(var n=B(t),r=-1,o=e.length;++r<o;)n.add(e[r])}function L(t,e){for(var n=B(t),r=-1,o=e.length;++r<o;)n.remove(e[r])}function K(t){return function(){q(this,t)}}function J(t){return function(){L(this,t)}}function F(t,e){return function(){(e.apply(this,arguments)?q:L)(this,t)}}V.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function H(){this.textContent=""}function z(t){return function(){this.textContent=t}}function G(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function Y(){this.innerHTML=""}function $(t){return function(){this.innerHTML=t}}function X(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function W(){this.nextSibling&&this.parentNode.appendChild(this)}function Q(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Z(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===_&&e.documentElement.namespaceURI===_?e.createElement(t):e.createElementNS(n,t)}}function tt(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}var et=function(t){var e=E(t);return(e.local?tt:Z)(e)};function nt(){return null}function rt(){var t=this.parentNode;t&&t.removeChild(this)}function ot(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function at(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}var it={},ct=null;"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(it={mouseenter:"mouseover",mouseleave:"mouseout"}));function st(t,e,n){return t=ut(t,e,n),function(e){var n=e.relatedTarget;n&&(n===this||8&n.compareDocumentPosition(this))||t.call(this,e)}}function ut(t,e,n){return function(r){var o=ct;ct=r;try{t.call(this,this.__data__,e,n)}finally{ct=o}}}function lt(t){return t.trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}}))}function ft(t){return function(){var e=this.__on;if(e){for(var n,r=0,o=-1,a=e.length;r<a;++r)n=e[r],t.type&&n.type!==t.type||n.name!==t.name?e[++o]=n:this.removeEventListener(n.type,n.listener,n.capture);++o?e.length=o:delete this.__on}}}function pt(t,e,n){var r=it.hasOwnProperty(t.type)?st:ut;return function(o,a,i){var c,s=this.__on,u=r(e,a,i);if(s)for(var l=0,f=s.length;l<f;++l)if((c=s[l]).type===t.type&&c.name===t.name)return this.removeEventListener(c.type,c.listener,c.capture),this.addEventListener(c.type,c.listener=u,c.capture=n),void(c.value=e);this.addEventListener(t.type,u,n),c={type:t.type,name:t.name,value:e,listener:u,capture:n},s?s.push(c):this.__on=[c]}}function ht(t,e,n){var r=k(t),o=r.CustomEvent;"function"==typeof o?o=new o(e,n):(o=r.document.createEvent("Event"),n?(o.initEvent(e,n.bubbles,n.cancelable),o.detail=n.detail):o.initEvent(e,!1,!1)),t.dispatchEvent(o)}function dt(t,e){return function(){return ht(this,t,e)}}function mt(t,e){return function(){return ht(this,t,e.apply(this,arguments))}}var yt=[null];function vt(t,e){this._groups=t,this._parents=e}function bt(){return new vt([[document.documentElement]],yt)}vt.prototype=bt.prototype={constructor:vt,select:function(t){"function"!=typeof t&&(t=h(t));for(var e=this._groups,n=e.length,r=new Array(n),o=0;o<n;++o)for(var a,i,c=e[o],s=c.length,u=r[o]=new Array(s),l=0;l<s;++l)(a=c[l])&&(i=t.call(a,a.__data__,l,c))&&("__data__"in a&&(i.__data__=a.__data__),u[l]=i);return new vt(r,this._parents)},selectAll:function(t){var e;"function"!=typeof t&&(t=null==(e=t)?d:function(){return this.querySelectorAll(e)});for(var n=this._groups,r=n.length,o=[],a=[],i=0;i<r;++i)for(var c,s=n[i],u=s.length,l=0;l<u;++l)(c=s[l])&&(o.push(t.call(c,c.__data__,l,s)),a.push(c));return new vt(o,a)},filter:function(t){var e;"function"!=typeof t&&(e=t,t=function(){return this.matches(e)});for(var n=this._groups,r=n.length,o=new Array(r),a=0;a<r;++a)for(var i,c=n[a],s=c.length,u=o[a]=[],l=0;l<s;++l)(i=c[l])&&t.call(i,i.__data__,l,c)&&u.push(i);return new vt(o,this._parents)},data:function(t,e){if(!t)return d=new Array(this.size()),l=-1,this.each((function(t){d[++l]=t})),d;var n,r=e?b:v,o=this._parents,a=this._groups;"function"!=typeof t&&(n=t,t=function(){return n});for(var i=a.length,c=new Array(i),s=new Array(i),u=new Array(i),l=0;l<i;++l){var f=o[l],p=a[l],h=p.length,d=t.call(f,f&&f.__data__,l,o),m=d.length,y=s[l]=new Array(m),g=c[l]=new Array(m);r(f,p,y,g,u[l]=new Array(h),d,e);for(var _,w,E=0,N=0;E<m;++E)if(_=y[E]){for(E>=N&&(N=E+1);!(w=g[N])&&++N<m;);_._next=w||null}}return(c=new vt(c,o))._enter=s,c._exit=u,c},enter:function(){return new vt(this._enter||this._groups.map(m),this._parents)},exit:function(){return new vt(this._exit||this._groups.map(m),this._parents)},join:function(t,e,n){var r=this.enter(),o=this,a=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=e&&(o=e(o)),null==n?a.remove():n(a),r&&o?r.merge(o).order():o},merge:function(t){for(var e=this._groups,n=t._groups,r=e.length,o=n.length,a=Math.min(r,o),i=new Array(r),c=0;c<a;++c)for(var s,u=e[c],l=n[c],f=u.length,p=i[c]=new Array(f),h=0;h<f;++h)(s=u[h]||l[h])&&(p[h]=s);for(;c<r;++c)i[c]=e[c];return new vt(i,this._parents)},order:function(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var r,o=t[e],a=o.length-1,i=o[a];--a>=0;)(r=o[a])&&(i&&4^r.compareDocumentPosition(i)&&i.parentNode.insertBefore(r,i),i=r);return this},sort:function(t){function e(e,n){return e&&n?t(e.__data__,n.__data__):!e-!n}t||(t=g);for(var n=this._groups,r=n.length,o=new Array(r),a=0;a<r;++a){for(var i,c=n[a],s=c.length,u=o[a]=new Array(s),l=0;l<s;++l)(i=c[l])&&(u[l]=i);u.sort(e)}return new vt(o,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),e=-1;return this.each((function(){t[++e]=this})),t},node:function(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],o=0,a=r.length;o<a;++o){var i=r[o];if(i)return i}return null},size:function(){var t=0;return this.each((function(){++t})),t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,n=0,r=e.length;n<r;++n)for(var o,a=e[n],i=0,c=a.length;i<c;++i)(o=a[i])&&t.call(o,o.__data__,i,a);return this},attr:function(t,e){var n=E(t);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((null==e?n.local?S:N:"function"==typeof e?n.local?R:C:n.local?x:O)(n,e))},style:function(t,e,n){return arguments.length>1?this.each((null==e?I:"function"==typeof e?P:A)(t,e,null==n?"":n)):j(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?T:"function"==typeof e?M:U)(t,e)):this.node()[t]},classed:function(t,e){var n=D(t+"");if(arguments.length<2){for(var r=B(this.node()),o=-1,a=n.length;++o<a;)if(!r.contains(n[o]))return!1;return!0}return this.each(("function"==typeof e?F:e?K:J)(n,e))},text:function(t){return arguments.length?this.each(null==t?H:("function"==typeof t?G:z)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?Y:("function"==typeof t?X:$)(t)):this.node().innerHTML},raise:function(){return this.each(W)},lower:function(){return this.each(Q)},append:function(t){var e="function"==typeof t?t:et(t);return this.select((function(){return this.appendChild(e.apply(this,arguments))}))},insert:function(t,e){var n="function"==typeof t?t:et(t),r=null==e?nt:"function"==typeof e?e:h(e);return this.select((function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(rt)},clone:function(t){return this.select(t?at:ot)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,n){var r,o,a=lt(t+""),i=a.length;if(!(arguments.length<2)){for(c=e?pt:ft,null==n&&(n=!1),r=0;r<i;++r)this.each(c(a[r],e,n));return this}var c=this.node().__on;if(c)for(var s,u=0,l=c.length;u<l;++u)for(r=0,s=c[u];r<i;++r)if((o=a[r]).type===s.type&&o.name===s.name)return s.value},dispatch:function(t,e){return this.each(("function"==typeof e?mt:dt)(t,e))}};var gt=function(t,e,n,r,o){console.log("createCanvas",t,e),console.log(n),console.log(r);var a={};Object.keys(n).forEach((function(t){r[t]&&r[t].quantity>0&&(a[t]=decodeURI(n[t]))})),console.log("colorsIndexedByTokenId",a);for(var i=15,c=0,p=0,h=15,d=25*t+25,m=25*e+25,y=function(t,e){let n;if(void 0===e)for(const e of t)null!=e&&(n>e||void 0===n&&e>=e)&&(n=e);else{let r=-1;for(let o of t)null!=(o=e(o,++r,t))&&(n>o||void 0===n&&o>=o)&&(n=o)}return n}([d/((t+.5)*Math.sqrt(3)),m/(1.5*(e+1/3))]),v=[],b=0;b<e;b++)for(var g=0;g<t;g++){var _=y*g*Math.sqrt(3);b%2==1&&(_+=y*Math.sqrt(3)/2);var w=y*b*1.5;v.push([_,w])}var E,N=(E="#canvas","string"==typeof E?new vt([[document.querySelector(E)]],[document.documentElement]):new vt([[E]],yt)).append("svg").attr("width",d+h+c).attr("height",m+i+p).append("g").attr("transform","translate("+h+","+i+")"),S=function(){var t,e,n,r=0,o=0,a=1,i=1,c=l,p=f;function h(t){var r,o={},a=[],i=t.length;for(r=0;r<i;++r)if(!isNaN(u=+c.call(null,s=t[r],r,t))&&!isNaN(l=+p.call(null,s,r,t))){var s,u,l,f=Math.round(l/=n),h=Math.round(u=u/e-(1&f)/2),d=l-f;if(3*Math.abs(d)>1){var m=u-h,y=h+(u<h?-1:1)/2,v=f+(l<f?-1:1),b=u-y,g=l-v;m*m+d*d>b*b+g*g&&(h=y+(1&f?1:-1)/2,f=v)}var _=h+"-"+f,w=o[_];w?w.push(s):(a.push(w=o[_]=[s]),w.x=(h+(1&f)/2)*e,w.y=f*n)}return a}function d(t){var e=0,n=0;return u.map((function(r){var o=Math.sin(r)*t,a=-Math.cos(r)*t,i=o-e,c=a-n;return e=o,n=a,[i,c]}))}return h.hexagon=function(e){return"m"+d(null==e?t:+e).join("l")+"z"},h.centers=function(){for(var c=[],s=Math.round(o/n),u=Math.round(r/e),l=s*n;l<i+t;l+=n,++s)for(var f=u*e+(1&s)*e/2;f<a+e/2;f+=e)c.push([f,l]);return c},h.mesh=function(){var e=d(t).slice(0,4).join("l");return h.centers().map((function(t){return"M"+t+"m"+e})).join("")},h.x=function(t){return arguments.length?(c=t,h):c},h.y=function(t){return arguments.length?(p=t,h):p},h.radius=function(r){return arguments.length?(e=2*(t=+r)*Math.sin(s),n=1.5*t,h):t},h.size=function(t){return arguments.length?(r=o=0,a=+t[0],i=+t[1],h):[a-r,i-o]},h.extent=function(t){return arguments.length?(r=+t[0][0],o=+t[0][1],a=+t[1][0],i=+t[1][1],h):[[r,o],[a,i]]},h.radius(1)}().radius(y);N.append("g").selectAll(".hexagon").data(S(v)).enter().append("path").attr("class","hexagon").attr("d",(function(t){return"M"+t.x+","+t.y+S.hexagon()})).attr("n",(function(t,e){return e})).attr("stroke-width","1px").style("stroke",(function(t,e){var n="".concat(e+1);return a[n]&&/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(a[n]),"#111111"})).style("fill",(function(t,e){var n="".concat(e+1);return a[n]&&/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(a[n])?a[n]:"rgba(255,255,255,0.5)"})).on("click",o)},_t=new Intl.NumberFormat("en-US",{maximumFractionDigits:8});function wt(t){return(wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Et(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Nt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function St(t,e){return(St=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Ot(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Rt(t);if(e){var o=Rt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return xt(this,n)}}function xt(t,e){return!e||"object"!==wt(e)&&"function"!=typeof e?Ct(t):e}function Ct(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Rt(t){return(Rt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function kt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var It=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&St(t,e)}(i,t);var e,n,r,a=Ot(i);function i(){var t;Et(this,i);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return kt(Ct(t=a.call.apply(a,[this].concat(n))),"state",{price:1e8,columns:15,rows:15}),kt(Ct(t),"onCreateCanvas",(function(){var e=document.getElementById("canvas");e&&"number"==typeof t.state.columns&&"number"==typeof t.state.rows?(e.innerHTML="",gt(t.state.columns,t.state.rows,{},{},(function(){return null}))):e&&(e.innerHTML="")})),kt(Ct(t),"onChangeColumns",(function(e){t.setState({columns:parseInt(e.target.value)})})),kt(Ct(t),"onChangeRows",(function(e){t.setState({rows:parseInt(e.target.value)})})),t}return e=i,(n=[{key:"render",value:function(){var t=this;return console.log(this.state),this.onCreateCanvas(),o.a.createElement("div",{className:"genesis-form form"},o.a.createElement("div",{id:"canvas"}),o.a.createElement("p",null,"Hi ! The canvas is not created, you must define the number of rows, columns, and the price for purchasing one cell (and chosing its color).",o.a.createElement("br",null),o.a.createElement("br",null),"Once you have submitted this form, wait few minutes and reload the page to see the canvas.",o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("div",{class:"field"},o.a.createElement("label",{class:"label"},"Number of rows"),o.a.createElement("div",{class:"control"},o.a.createElement("input",{defaultValue:this.state.rows,onInput:this.onChangeRows,class:"input",type:"number",min:2,step:1,max:100}))),o.a.createElement("div",{class:"field"},o.a.createElement("label",{class:"label"},"Number of columns"),o.a.createElement("div",{class:"control"},o.a.createElement("input",{defaultValue:this.state.columns,onInput:this.onChangeColumns,class:"input",type:"number",min:2,step:1,max:100}))),o.a.createElement("div",{class:"field"},o.a.createElement("label",{class:"label"},"Price for one cell (dust)"),o.a.createElement("div",{class:"control"},o.a.createElement("input",{defaultValue:this.state.price,onChange:function(e){return t.setState({price:parseInt(e.target.value)})},class:"input",type:"number",min:1,step:1})),this.state&&this.state.price&&this.state.columns&&this.state.rows?o.a.createElement("p",null,"Total REV :"," ",_t.format(this.state.price*this.state.columns*this.state.rows/1e8)," ",o.a.createElement("br",null),"Total dust (1 dust is 1 REV divided by 100.000.000):"," ",_t.format(this.state.price*this.state.columns*this.state.rows)," "):void 0),o.a.createElement("div",{className:"field"},o.a.createElement("button",{className:"button is-light",disabled:!(this.state&&this.state.price&&this.state.columns&&this.state.rows),type:"button",onClick:function(e){t.state&&t.state.price&&t.state.columns&&t.state.rows&&t.props.onValuesChosen({price:t.state.price,rows:t.state.rows,columns:t.state.columns,nonce:t.props.nonce})}},"Create canvas")))}}])&&Nt(e.prototype,n),r&&Nt(e,r),i}(o.a.Component);function At(t){return(At="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Pt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function jt(t,e){return(jt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Tt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Dt(t);if(e){var o=Dt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Ut(this,n)}}function Ut(t,e){return!e||"object"!==At(e)&&"function"!=typeof e?Mt(t):e}function Mt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Dt(t){return(Dt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Bt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&jt(t,e)}(i,t);var e,n,r,a=Tt(i);function i(t){var e,n,r,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),e=a.call(this,t),n=Mt(e),c=function(t){t.pageX,e.el.current.getBoundingClientRect().left,t.pageY,e.el.current.getBoundingClientRect().top},(r="onClick")in n?Object.defineProperty(n,r,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[r]=c,e.el=o.a.createRef(),e.colorInputEl=o.a.createRef(),e.state={color:"#444466",n:void 0,notAvailable:void 0},e}return e=i,(n=[{key:"componentDidMount",value:function(){var t=this;gt(this.props.values.columns,this.props.values.rows,this.props.bagsData,this.props.bags,(function(e,n){var r=!1;Object.keys(t.props.bags).forEach((function(e){t.props.bags[e].n==="".concat(n+1)&&t.props.bags[e].price==t.props.values.price&&t.props.bags[e].quantity>0&&(console.log("found",n+1),r=!0,t.setState({tokenId:"".concat(n+1),notAvailable:void 0}))})),r||t.setState({notAvailable:"".concat(n+1),n:void 0})}))}},{key:"render",value:function(){var t=this,e=Object.keys(this.props.bagsData).length-2;return o.a.createElement("div",{className:"canvas-cont"},o.a.createElement("h2",{className:"title is-2"},"Fill the canvas !"),o.a.createElement("p",{className:"contributions"},e,1===e&&" contribution: ",1!==e&&" contributions: ",_t.format(e*this.props.values.price/1e8)," REV"),o.a.createElement("div",{id:"canvas",ref:this.el,className:"canvas"}),o.a.createElement("div",{className:"cell-form"},"string"==typeof this.state.notAvailable?o.a.createElement("p",{className:"has-text-danger"},"Cell ",this.state.notAvailable," is not available"):void 0,"string"==typeof this.state.tokenId?o.a.createElement("div",{className:"n-and-color"},o.a.createElement("div",null,o.a.createElement("span",{className:"cell"},"Cell"),o.a.createElement("span",{className:"cell-n"},this.state.tokenId),o.a.createElement("br",null),o.a.createElement("span",{className:"cell-available"},"Available"),o.a.createElement("br",null),o.a.createElement("span",{className:"cell-available"},"Price :"," ",o.a.createElement("b",null,_t.format(this.props.values.price/1e8)," REV"),o.a.createElement("br",null),_t.format(this.props.values.price)," dusts")),o.a.createElement("div",null,o.a.createElement("input",{ref:this.colorInputEl,type:"color",id:"body",name:"body",className:"color-input",defaultValue:"#444466",onChange:function(e){return t.setState({color:e.target.value})}}),o.a.createElement("div",{className:"color-box"},o.a.createElement("span",{className:"label"},"Color"),o.a.createElement("br",null),o.a.createElement("span",{style:{background:this.state.color||"#444466"},onClick:function(e){return t.colorInputEl.current.click()},className:"color-square"})),o.a.createElement("button",{className:"button is-white",disabled:!(this.state.color&&"string"==typeof this.state.tokenId),type:"button",onClick:function(e){if(t.state.color&&"string"==typeof t.state.tokenId){var n=Object.keys(t.props.bags).find((function(e){return t.props.bags[e].n===t.state.tokenId&&t.props.bags[e].quantity>0&&t.props.bags[e].price===t.props.values.price}));console.log({bagId:n,newBagId:"".concat((new Date).getTime()),color:t.state.color,price:t.props.values.price}),t.props.onPurchase({bagId:n,newBagId:"".concat((new Date).getTime()),color:t.state.color,price:t.props.values.price})}}},"Buy cell"))):void 0))}}])&&Pt(e.prototype,n),r&&Pt(e,r),i}(o.a.Component);function Vt(t){return(Vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function qt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Lt(t,e){return(Lt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Kt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Ht(t);if(e){var o=Ht(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Jt(this,n)}}function Jt(t,e){return!e||"object"!==Vt(e)&&"function"!=typeof e?Ft(t):e}function Ft(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ht(t){return(Ht=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function zt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Gt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Lt(t,e)}(i,t);var e,n,r,a=Kt(i);function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),zt(Ft(e=a.call(this,t)),"onValuesChosen",(function(t){if("undefined"!=typeof dappyRChain){for(var n={0:{n:"0",quantity:1,publicKey:e.props.publicKey,price:null,nonce:blockchainUtils.generateNonce()}},r={0:encodeURI(JSON.stringify({rows:t.rows,price:t.price,columns:t.columns}))},o=t.columns*t.rows,a=1;a<o+1;a+=1)n["".concat(a)]={n:"".concat(a),quantity:1,publicKey:e.props.publicKey,price:t.price,nonce:blockchainUtils.generateNonce()};var i=blockchainUtils.generateNonce(),s={bags:n,data:r,nonce:e.props.nonce,newNonce:i},u=blockchainUtils.toByteArray(s),l=Object(c.createTokensTerm)(e.props.registryUri.replace("rho:id:",""),s,"SIGN");console.log(l),dappyRChain.transaction({term:l,signatures:{SIGN:blockchainUtils.uInt8ArrayToHex(u)}}).then((function(t){e.setState({modal:"values-chosen"})}))}else console.warn("window.dappyRChain is undefined, cannot deploy ERC1155")})),zt(Ft(e),"onPurchase",(function(t){console.log(e.props.registryUri.replace("rho:id:","")),console.log({publicKey:e.props.publicKey,bagId:t.bagId,newBagId:t.newBagId,quantity:1,price:t.price,bagNonce:blockchainUtils.generateNonce(),data:encodeURI(t.color)});var n=Object(c.purchaseTokensTerm)(e.props.registryUri.replace("rho:id:",""),{publicKey:e.props.publicKey,bagId:t.bagId,newBagId:t.newBagId,quantity:1,price:t.price,bagNonce:blockchainUtils.generateNonce(),data:encodeURI(t.color)});dappyRChain.transaction({term:n,signatures:{}}).then((function(t){e.setState({modal:"purchase"})}))})),e.state={modal:void 0},e}return e=i,(n=[{key:"render",value:function(){var t=this;return"purchase"===this.state.modal?o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"modal-background"}),o.a.createElement("div",{className:"modal-card"},o.a.createElement("header",{className:"modal-card-head"},o.a.createElement("p",{className:"modal-card-title"},"Purchase successful"),o.a.createElement("button",{onClick:function(){return t.setState({modal:void 0})},className:"delete","aria-label":"close"})),o.a.createElement("section",{className:"modal-card-body"},"Transaction was successfully sent. Wait few minutes, reload, and you should see your cell with the color you chose. Thank you for your participation."),o.a.createElement("footer",{className:"modal-card-foot"},o.a.createElement("button",{onClick:function(){return t.setState({modal:void 0})},class:"button"},"Ok")))):"values-chosen"===this.state.modal?o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"modal-background"}),o.a.createElement("div",{className:"modal-card"},o.a.createElement("header",{className:"modal-card-head"},o.a.createElement("p",{className:"modal-card-title"},"Submit successful"),o.a.createElement("button",{onClick:function(){return t.setState({modal:void 0})},className:"delete","aria-label":"close"})),o.a.createElement("section",{className:"modal-card-body"},"Submit was successful, wait few minutes, reload, then the rchain-token contract should be initialized with one entry for each cell."),o.a.createElement("footer",{className:"modal-card-foot"},o.a.createElement("button",{onClick:function(){return t.setState({modal:void 0})},class:"button"},"Ok")))):this.props.values?o.a.createElement(Bt,{onPurchase:this.onPurchase,values:this.props.values,bagsData:this.props.bagsData,bags:this.props.bags}):o.a.createElement(It,{onValuesChosen:this.onValuesChosen,nonce:this.props.nonce})}}])&&qt(e.prototype,n),r&&qt(e,r),i}(o.a.Component),Yt=n(1),$t=Yt.readBagsTerm,Xt=Yt.read,Wt=Yt.readBagsOrTokensDataTerm;document.addEventListener("DOMContentLoaded",(function(){"undefined"!=typeof dappyRChain&&dappyRChain.exploreDeploys([Xt("REGISTRY_URI"),$t("REGISTRY_URI"),Wt("REGISTRY_URI","bags")]).then((function(t){var e=JSON.parse(t).results,n=blockchainUtils.rhoValToJs(JSON.parse(e[0].data).expr[0]),r=blockchainUtils.rhoValToJs(JSON.parse(e[1].data).expr[0]),a=blockchainUtils.rhoValToJs(JSON.parse(e[2].data).expr[0]);document.getElementById("root").setAttribute("class","loaded"),a[0]?i.a.render(o.a.createElement(Gt,{values:JSON.parse(decodeURI(a[0])),bags:r,bagsData:a,registryUri:n.registryUri,nonce:n.nonce,publicKey:n.publicKey}),document.getElementById("root")):dappyRChain.identify({publicKey:void 0}).then((function(t){t.identified?i.a.render(o.a.createElement(Gt,{nonce:n.nonce,publicKey:n.publicKey,registryUri:n.registryUri,values:void 0,bags:void 0,bagsData:void 0}),document.getElementById("root")):console.error("This dapp needs identification")})).catch((function(t){console.error("This dapp needs identification"),console.log(t)}))}))}))}]);