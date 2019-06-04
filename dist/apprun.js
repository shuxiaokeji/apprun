!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return s});class s{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){let n=this._events[t];n&&((n=n.filter(t=>t.fn!==e)).length?this._events[t]=n:delete this._events[t])}run(t,...e){let n=this._events[t];return console.assert(!!n,"No subscriber for event: "+t),n&&((n=n.filter(n=>{const{fn:s,options:o}=n;return o.delay?this.delay(t,s,e,o):s.apply(this,e),!n.options.once})).length?this._events[t]=n:delete this._events[t]),n?n.length:0}once(t,e,n={}){this.on(t,e,Object.assign({},n,{once:!0}))}delay(t,e,n,s){s._t&&clearTimeout(s._t),s._t=setTimeout(()=>{clearTimeout(s._t),e.apply(this,n)},s.delay)}}let o;const r="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t;r.app&&r._AppRunVersions?o=r.app:(o=new s,r.app=o,r._AppRunVersions="AppRun-2"),e.b=o}).call(this,n(3))},function(t,e,n){"use strict";n.r(e);var s=n(0),o=n(2);const r={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function i(t,e={}){return(n,s,o)=>{const i=t?t.toString():s;return r.defineMetadata(`apprun-update:${i}`,{name:i,key:s,options:e},n),o}}function a(t,e={}){return function(n,s){const o=t?t.toString():s;r.defineMetadata(`apprun-update:${o}`,{name:o,key:s,options:e},n)}}function c(t){return function(e){return app.webComponent(t,e),e}}const u=(t,e)=>e?t.state[e]:t.state,h=(t,e,n)=>{if(e){const s=Object.assign({},t.state);s[e]=n,t.setState(s)}else t.setState(n)};var l=(t,e,n,s)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=(e=>s.run(t,e));else if("string"==typeof n)e[t]=(t=>s.run(n,t));else if("function"==typeof n)e[t]=(t=>s.setState(n(s.state,t)));else if(Array.isArray(n)){const[o,...r]=n;e[t]=(t=>s.setState(o(s.state,...r,t)))}}else if("$bind"===t){const o=e.type||"text",r="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(o){case"checkbox":e.checked=u(s,r),e.onclick=(t=>h(s,r||t.target.name,t.target.checked));break;case"radio":e.checked=u(s,r)===e.value,e.onclick=(t=>h(s,r||t.target.name,t.target.value));break;case"number":case"range":e.value=u(s,r),e.oninput=(t=>h(s,r||t.target.name,Number(t.target.value)));break;default:e.value=u(s,r),e.oninput=(t=>h(s,r||t.target.name,t.target.value))}else"select"===n?(e.selectedIndex=u(s,r),e.onchange=(t=>{t.target.multiple||h(s,r||t.target.name,t.target.selectedIndex)})):"option"===n&&(e.selected=u(s,r),e.onclick=(t=>h(s,r||t.target.name,t.target.selected)))}else app.run("$",{key:t,tag:n,props:e,component:s})};const d={};s.b.on("get-components",t=>t.components=d);const p=t=>t;class f{constructor(t,e,n,o){this.state=t,this.view=e,this.update=n,this.options=o,this._app=new s.a,this._actions=[],this._history=[],this._history_idx=-1,this.start=((t=null,e={render:!0})=>this.mount(t,Object.assign({},e,{render:!0})))}render(t,e){s.b.render(t,e,this)}renderState(t){if(!this.view)return;const e=s.b.createElement;s.b.createElement=((t,n,...s)=>(n&&Object.keys(n).forEach(e=>{e.startsWith("$")&&(l(e,n,t,this),delete n[e])}),e(t,n,...s)));const n=this.view(t);if(s.b.createElement=e,s.b.run("debug",{component:this,state:t,vdom:n||"[vdom is null - no render]"}),"object"!=typeof document)return;const o="string"==typeof this.element?document.getElementById(this.element):this.element;if(o){const t="_c";if(this.unload){if(o._component!==this&&(this.tracking_id=(new Date).valueOf().toString(),o.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver)){const e=new MutationObserver(t=>{const{removedNodes:n,oldValue:s}=t[0];(s===this.tracking_id||Array.from(n).indexOf(o)>=0)&&(this.unload(),e.disconnect())});o.parentNode&&e.observe(o.parentNode,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]})}}else o.removeAttribute&&o.removeAttribute(t);o._component=this}this.render(o,n),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign({},this.options,e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history){const t=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},n=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1};this.on(e.history.prev||"history-prev",t),this.on(e.history.next||"history-next",n)}return this.add_actions(),void 0===this.state&&(this.state=null!=this.model?this.model:{}),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),d[t]=d[t]||[],d[t].push(this),this}is_global_event(t){return t&&(t.startsWith("#")||t.startsWith("/"))}add_action(t,e,n={}){e&&"function"==typeof e&&this.on(t,(...o)=>{const r=e(this.state,...o);s.b.run("debug",{component:this,event:t,e:o,state:this.state,newState:r,options:n}),this.setState(r,n)},n)}add_actions(){const t=this.update||{};r.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=r.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[n,s,o]=t;n.toString().split(",").forEach(t=>e[t.trim()]=[s,o])}):Object.keys(t).forEach(n=>{const s=t[n];("function"==typeof s||Array.isArray(s))&&n.split(",").forEach(t=>e[t.trim()]=s)}),e["."]||(e["."]=p),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.global_event||this.is_global_event(n)?s.b.run(n,...e):this._app.run(n,...e)}on(t,e,n){const o=t.toString();return this._actions.push({name:o,fn:e}),this.global_event||this.is_global_event(o)?s.b.on(o,e,n):this._app.on(o,e,n)}unmount(){this._actions.forEach(t=>{const{name:e,fn:n}=t;this.global_event||this.is_global_event(e)?s.b.off(e,n):this._app.off(e,n)})}}f.__isAppRunComponent=!0;const b=(t,e={})=>(class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return Object.assign({},e).observedAttributes}connectedCallback(){if(this.isConnected&&!this._component){const n=Object.assign({render:!0,shadow:!1},e);this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const s={};Array.from(this.attributes).forEach(t=>s[t.name]=t.value),this.children&&(s.children=Array.from(this.children),s.children.forEach(t=>t.parentElement.removeChild(t))),this._component=new t(s).mount(this._shadowRoot,n),this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component)}}disconnectedCallback(){this._component.unmount(),this._component=null}attributeChangedCallback(...t){this._component&&this._component.run("attributeChanged",...t)}});const m=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");s.b.run(e,...n)||s.b.run("///",e,...n),s.b.run("//",e,...n)}else if(t.startsWith("/")){const[e,n,...o]=t.split("/");s.b.run("/"+n,...o)||s.b.run("///","/"+n,...o),s.b.run("//","/"+n,...o)}else s.b.run(t)||s.b.run("///",t),s.b.run("//",t)};n.d(e,"app",function(){return s.b}),n.d(e,"Component",function(){return f}),n.d(e,"on",function(){return a}),n.d(e,"update",function(){return i}),n.d(e,"customElement",function(){return c}),n.d(e,"event",function(){return i}),n.d(e,"ROUTER_EVENT",function(){return"//"}),n.d(e,"ROUTER_404_EVENT",function(){return"///"}),s.b.createElement=o.b,s.b.render=function(t,e,n){Object(o.c)(t,e,n)},s.b.Fragment=o.a,s.b.webComponent=((t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,b(e,n))}),s.b.start=((t,e,n,s,o)=>{const r=Object.assign({},o,{render:!0,global_event:!0}),i=new f(e,n,s);return o&&o.rendered&&(i.rendered=o.rendered),i.mount(t,r),i});const y=t=>{};s.b.on("$",y),s.b.on("debug",t=>y),s.b.on("//",y),s.b.on("#",y),s.b.route=m,s.b.on("route",t=>s.b.route&&s.b.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{s.b.route===m&&(window.onpopstate=(()=>m(location.hash)),m(location.hash))});e.default=s.b;"object"==typeof window&&(window.Component=f,window.React=s.b)},function(t,e,n){"use strict";var s=n(0);let o=0;var r=function t(e,n,r=0){if(0===r&&(o=0),"string"==typeof e)return e;if(Array.isArray(e))return e.map(e=>t(e,n,o++));let i=e;return e&&"function"==typeof e.tag&&Object.getPrototypeOf(e.tag).__isAppRunComponent&&(i=function(t,e,n){const{tag:o,props:r,children:i}=t;let a=r&&r.id,c=`_${n}_`;a?c=`_${a}_`:a=`_${n}_`,e.__componentCache||(e.__componentCache={});let u=e.__componentCache[c];u||(u=e.__componentCache[c]=new o(Object.assign({},r,{children:i})).mount(a)),u.mounted&&u.mounted(r,i);const h=u.state;let l="";return h instanceof Promise||!u.view||(l=u.view(h,r),u.rendered&&setTimeout(()=>u.rendered(h,r))),s.b.createElement("section",Object.assign({},r,{id:a}),l)}(e,n,o++)),i&&i.children&&(i.children=i.children.map(e=>t(e,n,o++))),i};n.d(e,"b",function(){return c}),n.d(e,"c",function(){return h}),n.d(e,"a",function(){return m});const i="_props";function a(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}function c(t,e,...n){const s=a(n);return"string"==typeof t?{tag:t,props:e,children:s}:Array.isArray(t)?t:void 0===t&&n?s:Object.getPrototypeOf(t).__isAppRunComponent?{tag:t,props:e,children:s}:t(e,s)}const u={},h=function(t,e,n={}){if(null==e)return;if(e=r(e,n),!t)return;Array.isArray(e)?d(t,e):d(t,[e])};function l(t,e){console.assert(!!t),function(t,e){const n=t.nodeName,s=`${e.tag||""}`;return n.toUpperCase()===s.toUpperCase()}(t,e)?(d(t,e.children),b(t,e.props)):t.parentNode.replaceChild(f(e),t)}function d(t,e){const n=Math.min(t.childNodes.length,e.length);for(let s=0;s<n;s++){const n=e[s],o=t.childNodes[s];if("string"==typeof n)o.textContent!==n&&(3===o.nodeType?o.textContent=n:t.replaceChild(p(n),o));else{const e=n.props&&n.props.key;if(e)if(o.key===e)l(t.childNodes[s],n);else{const r=u[e];r?(t.insertBefore(r,o),t.appendChild(o),l(t.childNodes[s],n)):t.insertBefore(f(n),o)}else l(t.childNodes[s],n)}}let s=t.childNodes.length;for(;s>n;)t.removeChild(t.lastChild),s--;if(e.length>n){const s=document.createDocumentFragment();for(let t=n;t<e.length;t++)s.appendChild(f(e[t]));t.appendChild(s)}}function p(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function f(t,e=!1){if(console.assert(null!=t),"string"==typeof t)return p(t);if(!t.tag||"function"==typeof t.tag)return p(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return b(n,t.props),t.children&&t.children.forEach(t=>n.appendChild(f(t,e))),n}function b(t,e){console.assert(!!t),e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(t[i]||{},e||{}),t[i]=e;for(const n in e){const s=e[n];if("style"===n){t.style.cssText&&(t.style.cssText="");for(const e in s)t.style[e]!==s[e]&&(t.style[e]=s[e])}else if(n.startsWith("data-")){const e=n.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==s&&(s||""===s?t.dataset[e]=s:delete t.dataset[e])}else"class"===n||n.startsWith("role")||n.indexOf("-")>0||t instanceof SVGElement||t.tagName.indexOf("-")>0?t.getAttribute(n)!==s&&(s?t.setAttribute(n,s):t.removeAttribute(n)):t[n]!==s&&(t[n]=s);"key"===n&&s&&(u[s]=t)}}function m(t,...e){return a(e)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}])});
//# sourceMappingURL=apprun.js.map