var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function i(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function l(e){return e&&i(e.destroy)?e.destroy:t}const u="undefined"!=typeof window;let f=u?()=>window.performance.now():()=>Date.now(),d=u?t=>requestAnimationFrame(t):t;const p=new Set;function h(t){p.forEach((e=>{e.c(t)||(p.delete(e),e.f())})),0!==p.size&&d(h)}function m(t){let e;return 0===p.size&&d(h),{promise:new Promise((n=>{p.add(e={c:t,f:n})})),abort(){p.delete(e)}}}function g(t,e){t.appendChild(e)}function $(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function y(t){const e=b("style");return function(t,e){g(t.head||t,e),e.sheet}($(t),e),e.sheet}function v(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function k(){return _(" ")}function x(){return _("")}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function S(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}function A(t,e){return new t(e)}const C=new Map;let j,L=0;function O(t,e,n,o,r,s,i,c=0){const a=16.666/o;let l="{\n";for(let t=0;t<=1;t+=a){const o=e+(n-e)*s(t);l+=100*t+`%{${i(o,1-o)}}\n`}const u=l+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,d=$(t),{stylesheet:p,rules:h}=C.get(d)||function(t,e){const n={stylesheet:y(e),rules:{}};return C.set(t,n),n}(d,t);h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,L+=1,f}function N(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),L-=r,L||d((()=>{L||(C.forEach((t=>{const{ownerNode:e}=t.stylesheet;e&&w(e)})),C.clear())})))}function R(t){j=t}function T(){if(!j)throw new Error("Function called outside component initialization");return j}function D(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const I=[],P=[],W=[],G=[],M=Promise.resolve();let q=!1;function z(){q||(q=!0,M.then(U))}function X(t){W.push(t)}const F=new Set;let H,Y=0;function U(){if(0!==Y)return;const t=j;do{try{for(;Y<I.length;){const t=I[Y];Y++,R(t),B(t.$$)}}catch(t){throw I.length=0,Y=0,t}for(R(null),I.length=0,Y=0;P.length;)P.pop()();for(let t=0;t<W.length;t+=1){const e=W[t];F.has(e)||(F.add(e),e())}W.length=0}while(I.length);for(;G.length;)G.pop()();q=!1,F.clear(),R(t)}function B(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function J(){return H||(H=Promise.resolve(),H.then((()=>{H=null}))),H}function K(t,e,n){t.dispatchEvent(S(`${e?"intro":"outro"}${n}`))}const Q=new Set;let V;function Z(){V={r:0,c:[],p:V}}function tt(){V.r||s(V.c),V=V.p}function et(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function nt(t,e,n,o){if(t&&t.o){if(Q.has(t))return;Q.add(t),V.c.push((()=>{Q.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}const ot={duration:0};function rt(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function st(t){return"object"==typeof t&&null!==t?t:{}}function it(t){t&&t.c()}function ct(t,e,n,r){const{fragment:c,after_update:a}=t.$$;c&&c.m(e,n),r||X((()=>{const e=t.$$.on_mount.map(o).filter(i);t.$$.on_destroy?t.$$.on_destroy.push(...e):s(e),t.$$.on_mount=[]})),a.forEach(X)}function at(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(e,n,o,i,c,a,l,u=[-1]){const f=j;R(e);const d=e.$$={fragment:null,ctx:[],props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let p=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&function(t,e){-1===t.$$.dirty[0]&&(I.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(w)}else d.fragment&&d.fragment.c();n.intro&&et(e.$$.fragment),ct(e,n.target,n.anchor,n.customElement),U()}R(f)}class ut{$destroy(){at(this,1),this.$destroy=t}$on(e,n){if(!i(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ft=[];function dt(t,e){return{subscribe:pt(t,e).subscribe}}function pt(e,n=t){let o;const r=new Set;function s(t){if(c(e,t)&&(e=t,o)){const t=!ft.length;for(const t of r)t[1](),ft.push(t,e);if(t){for(let t=0;t<ft.length;t+=2)ft[t][0](ft[t+1]);ft.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const a=[i,c];return r.add(a),1===r.size&&(o=n(s)||t),i(e),()=>{r.delete(a),0===r.size&&(o(),o=null)}}}}function ht(e,n,o){const r=!Array.isArray(e),c=r?[e]:e,a=n.length<2;return dt(o,(e=>{let o=!1;const l=[];let u=0,f=t;const d=()=>{if(u)return;f();const o=n(r?l[0]:l,e);a?e(o):f=i(o)?o:t},p=c.map(((e,n)=>function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(e,(t=>{l[n]=t,u&=~(1<<n),o&&d()}),(()=>{u|=1<<n}))));return o=!0,d(),function(){s(p),f()}}))}function mt(t){let e,o,r;const s=[t[2]];var i=t[0];function c(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=A(i,c()),e.$on("routeEvent",t[7])),{c(){e&&it(e.$$.fragment),o=x()},m(t,n){e&&ct(e,t,n),v(t,o,n),r=!0},p(t,n){const r=4&n?rt(s,[st(t[2])]):{};if(i!==(i=t[0])){if(e){Z();const t=e;nt(t.$$.fragment,1,0,(()=>{at(t,1)})),tt()}i?(e=A(i,c()),e.$on("routeEvent",t[7]),it(e.$$.fragment),et(e.$$.fragment,1),ct(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&et(e.$$.fragment,t),r=!0)},o(t){e&&nt(e.$$.fragment,t),r=!1},d(t){t&&w(o),e&&at(e,t)}}}function gt(t){let e,o,r;const s=[{params:t[1]},t[2]];var i=t[0];function c(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=A(i,c()),e.$on("routeEvent",t[6])),{c(){e&&it(e.$$.fragment),o=x()},m(t,n){e&&ct(e,t,n),v(t,o,n),r=!0},p(t,n){const r=6&n?rt(s,[2&n&&{params:t[1]},4&n&&st(t[2])]):{};if(i!==(i=t[0])){if(e){Z();const t=e;nt(t.$$.fragment,1,0,(()=>{at(t,1)})),tt()}i?(e=A(i,c()),e.$on("routeEvent",t[6]),it(e.$$.fragment),et(e.$$.fragment,1),ct(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&et(e.$$.fragment,t),r=!0)},o(t){e&&nt(e.$$.fragment,t),r=!1},d(t){t&&w(o),e&&at(e,t)}}}function $t(t){let e,n,o,r;const s=[gt,mt],i=[];function c(t,e){return t[1]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),o=x()},m(t,n){i[e].m(t,n),v(t,o,n),r=!0},p(t,[r]){let a=e;e=c(t),e===a?i[e].p(t,r):(Z(),nt(i[a],1,1,(()=>{i[a]=null})),tt(),n=i[e],n?n.p(t,r):(n=i[e]=s[e](t),n.c()),et(n,1),n.m(o.parentNode,o))},i(t){r||(et(n),r=!0)},o(t){nt(n),r=!1},d(t){i[e].d(t),t&&w(o)}}}function yt(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let o="";return n>-1&&(o=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:o}}const vt=dt(null,(function(t){t(yt());const e=()=>{t(yt())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));ht(vt,(t=>t.location)),ht(vt,(t=>t.querystring));const wt=pt(void 0);function bt(t,e){if(e=kt(e),!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return _t(t,e),{update(e){e=kt(e),_t(t,e)}}}function _t(t,e){let n=e.href||t.getAttribute("href");if(n&&"/"==n.charAt(0))n="#"+n;else if(!n||n.length<2||"#/"!=n.slice(0,2))throw Error('Invalid value for "href" attribute: '+n);t.setAttribute("href",n),t.addEventListener("click",(t=>{t.preventDefault(),e.disabled||function(t){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=t}(t.currentTarget.getAttribute("href"))}))}function kt(t){return t&&"string"==typeof t?{href:t}:t||{}}function xt(t,e,n){let{routes:o={}}=e,{prefix:r=""}=e,{restoreScrollState:s=!1}=e;class i{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:o}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,o,r,s,i=[],c="",a=t.split("/");for(a[0]||a.shift();r=a.shift();)"*"===(n=r[0])?(i.push("wild"),c+="/(.*)"):":"===n?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),c+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(c+=(~o?"?":"")+"\\"+r.substring(s))):c+="/"+r;return{keys:i,pattern:new RegExp("^"+c+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const e=t.match(r);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let o=0;for(;o<this._keys.length;){try{n[this._keys[o]]=decodeURIComponent(e[o+1]||"")||null}catch(t){n[this._keys[o]]=null}o++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const c=[];o instanceof Map?o.forEach(((t,e)=>{c.push(new i(e,t))})):Object.keys(o).forEach((t=>{c.push(new i(t,o[t]))}));let a=null,l=null,u={};const f=function(){const t=T();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=S(e,n,{cancelable:o});return r.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}();async function d(t,e){await(z(),M),f(t,e)}let p=null,h=null;var m;s&&(h=t=>{p=t.state&&(t.state.__svelte_spa_router_scrollY||t.state.__svelte_spa_router_scrollX)?t.state:null},window.addEventListener("popstate",h),m=()=>{var t;(t=p)?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)},T().$$.after_update.push(m));let g=null,$=null;const y=vt.subscribe((async t=>{g=t;let e=0;for(;e<c.length;){const o=c[e].match(t.location);if(!o){e++;continue}const r={route:c[e].path,location:t.location,querystring:t.querystring,userData:c[e].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await c[e].checkConditions(r))return n(0,a=null),$=null,void d("conditionsFailed",r);d("routeLoading",Object.assign({},r));const s=c[e].component;if($!=s){s.loading?(n(0,a=s.loading),$=s,n(1,l=s.loadingParams),n(2,u={}),d("routeLoaded",Object.assign({},r,{component:a,name:a.name,params:l}))):(n(0,a=null),$=null);const e=await s();if(t!=g)return;n(0,a=e&&e.default||e),$=s}return o&&"object"==typeof o&&Object.keys(o).length?n(1,l=o):n(1,l=null),n(2,u=c[e].props),void d("routeLoaded",Object.assign({},r,{component:a,name:a.name,params:l})).then((()=>{wt.set(l)}))}n(0,a=null),$=null,wt.set(void 0)}));return function(t){T().$$.on_destroy.push(t)}((()=>{y(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&n(3,o=t.routes),"prefix"in t&&n(4,r=t.prefix),"restoreScrollState"in t&&n(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[a,l,u,o,r,s,function(e){D.call(this,t,e)},function(e){D.call(this,t,e)}]}class Et extends ut{constructor(t){super(),lt(this,t,xt,$t,c,{routes:3,prefix:4,restoreScrollState:5})}}function St(e){let n,o,r,i,c,a;return{c(){n=b("header"),o=b("a"),o.textContent="Home",r=k(),i=b("a"),i.textContent="About",E(o,"href","/"),E(i,"href","/about"),E(n,"class","svelte-i5m516")},m(t,e){v(t,n,e),g(n,o),g(n,r),g(n,i),c||(a=[l(bt.call(null,o)),l(bt.call(null,i))],c=!0)},p:t,i:t,o:t,d(t){t&&w(n),c=!1,s(a)}}}class At extends ut{constructor(t){super(),lt(this,t,null,St,c,{})}}function Ct(t,{delay:n=0,duration:o=400,easing:r=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*s}}function jt(n){let o,r,c,a=n[1]&&Lt(n);return{c(){o=b("div"),a&&a.c(),E(o,"id","container"),E(o,"class","svelte-kvctun")},m(t,e){v(t,o,e),a&&a.m(o,null),c=!0},p(t,e){t[1]?a?2&e&&et(a,1):(a=Lt(t),a.c(),et(a,1),a.m(o,null)):a&&(a.d(1),a=null)},i(t){c||(et(a),r&&r.end(1),c=!0)},o(n){r=function(n,o,r){const c={direction:"out"};let a,l=o(n,r,c),u=!0;const d=V;function p(){const{delay:o=0,duration:r=300,easing:i=e,tick:c=t,css:p}=l||ot;p&&(a=O(n,1,0,r,o,i,p));const h=f()+o,g=h+r;X((()=>K(n,!1,"start"))),m((t=>{if(u){if(t>=g)return c(0,1),K(n,!1,"end"),--d.r||s(d.c),!1;if(t>=h){const e=i((t-h)/r);c(1-e,e)}}return u}))}return d.r+=1,i(l)?J().then((()=>{l=l(c),p()})):p(),{end(t){t&&l.tick&&l.tick(1,0),u&&(a&&N(n,a),u=!1)}}}(o,Ct,{duration:1e3}),c=!1},d(t){t&&w(o),a&&a.d(),t&&r&&r.end()}}}function Lt(n){let o,r,s,c,l;return{c(){var t,e;o=b("img"),s=k(),c=b("div"),c.innerHTML='<svg width="100mm" height="100mm" viewBox="0 0 100 100" version="1.1" id="spinner-svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="svelte-kvctun"><defs id="defs2"><linearGradient id="linearGradient2083"><stop style="stop-color:currentColor;stop-opacity:1;" offset="0" id="stop2079"></stop><stop style="stop-color:currentColor;stop-opacity:0;" offset="1" id="stop2081"></stop></linearGradient><linearGradient xlink:href="#linearGradient2083" id="linearGradient2085" x1="98.117805" y1="70.801521" x2="98.204498" y2="149.59045" gradientUnits="userSpaceOnUse"></linearGradient></defs><g id="spinner-arc"><path style="opacity:1;fill:none;stroke:url(#linearGradient2085);stroke-width:6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.502336;paint-order:stroke fill markers" transform="translate(-41.780995,-67.474064)" id="spinner-path" d="M 63.255444,145.99962 A 40.341225,40.341225 0 0 1 54.510567,102.03615 40.341225,40.341225 0 0 1 91.780998,77.132843"></path><animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0 50 50;360 50 50" dur="2s" repeatCount="indefinite"></animateTransform></g></svg>',E(o,"id","icon"),t=o.src,e=r="favicon.png",a||(a=document.createElement("a")),a.href=e,t!==a.href&&E(o,"src","favicon.png"),E(o,"alt",""),E(o,"class","svelte-kvctun"),E(c,"id","spinner"),E(c,"class","svelte-kvctun")},m(t,e){v(t,o,e),v(t,s,e),v(t,c,e)},p(t,e){n=t},i(o){l||X((()=>{l=function(n,o,r){const s={direction:"in"};let c,a,l=o(n,r,s),u=!1,d=0;function p(){c&&N(n,c)}function h(){const{delay:o=0,duration:r=300,easing:s=e,tick:i=t,css:h}=l||ot;h&&(c=O(n,0,1,r,o,s,h,d++)),i(0,1);const g=f()+o,$=g+r;a&&a.abort(),u=!0,X((()=>K(n,!0,"start"))),a=m((t=>{if(u){if(t>=$)return i(1,0),K(n,!0,"end"),p(),u=!1;if(t>=g){const e=s((t-g)/r);i(e,1-e)}}return u}))}let g=!1;return{start(){g||(g=!0,N(n),i(l)?(l=l(s),J().then(h)):h())},invalidate(){g=!1},end(){u&&(p(),u=!1)}}}(c,Ct,n[3]?{duration:0}:{duration:1e3,delay:200}),l.start()}))},o:t,d(t){t&&w(o),t&&w(s),t&&w(c)}}}function Ot(t){let e,n,o=t[0]&&Date.now()-t[2]>36e5,r=o&&jt(t);return{c(){r&&r.c(),e=x()},m(t,o){r&&r.m(t,o),v(t,e,o),n=!0},p(t,[n]){1&n&&(o=t[0]&&Date.now()-t[2]>36e5),o?r?(r.p(t,n),1&n&&et(r,1)):(r=jt(t),r.c(),et(r,1),r.m(e.parentNode,e)):r&&(Z(),nt(r,1,1,(()=>{r=null})),tt())},i(t){n||(et(r),n=!0)},o(t){nt(r),n=!1},d(t){r&&r.d(t),t&&w(e)}}}function Nt(t,e,n){var o;let r=!0,s=!1,i=parseInt(null!==(o=localStorage.getItem("sw:lastLoad"))&&void 0!==o?o:"0");localStorage.setItem("sw:lastLoad",""+Date.now());let c="true"===localStorage.getItem("sw:updated");var a;return localStorage.removeItem("sw:updated"),console.log("[Service Worker]: "+(c?"Reloaded page after update.":"Checking for updates...")),"serviceWorker"in navigator?window.addEventListener("load",(async()=>{if("/"===(location.pathname||"/"))try{const t=await navigator.serviceWorker.register("sw.js");let e=!1;t.addEventListener("updatefound",(()=>{console.log("[Service Worker]: update found!"),e=!0;const n=t.installing;null==n||n.addEventListener("statechange",(()=>{console.log(`[Service Worker]: { state: ${n.state} }`),"activated"===n.state&&(localStorage.setItem("sw:updated","true"),location.reload())}))})),await t.update(),setTimeout((()=>{e||(console.log("[Service Worker]: Ready!"),n(0,r=!1))}),100)}catch(t){console.warn("[Service Worker]: Failed to register..."),console.error(t),n(0,r=!1)}else n(0,r=!1)})):r=!1,a=()=>{n(1,s=!0)},T().$$.on_mount.push(a),[r,s,i,c]}class Rt extends ut{constructor(t){super(),lt(this,t,Nt,Ot,c,{})}}function Tt(e){let n,o,r;return{c(){n=b("h1"),n.textContent="About",o=k(),r=b("p"),r.textContent="A public static SPA template using svelte."},m(t,e){v(t,n,e),v(t,o,e),v(t,r,e)},p:t,i:t,o:t,d(t){t&&w(n),t&&w(o),t&&w(r)}}}function Dt(e){let n,o,r;return{c(){n=b("h1"),n.textContent="Home",o=k(),r=b("p"),r.innerHTML='Svelte Static SPA: <a href="https://github.com/trmid/svelte-static-spa">Public Template Repository</a>'},m(t,e){v(t,n,e),v(t,o,e),v(t,r,e)},p:t,i:t,o:t,d(t){t&&w(n),t&&w(o),t&&w(r)}}}function It(e){let n,o,r;return{c(){n=b("h1"),n.textContent="Whoops!",o=k(),r=b("p"),r.textContent="The page you are looking for doesn't seem to exist!"},m(t,e){v(t,n,e),v(t,o,e),v(t,r,e)},p:t,i:t,o:t,d(t){t&&w(n),t&&w(o),t&&w(r)}}}const Pt={"/":class extends ut{constructor(t){super(),lt(this,t,null,Dt,c,{})}},"/about":class extends ut{constructor(t){super(),lt(this,t,null,Tt,c,{})}},"*":class extends ut{constructor(t){super(),lt(this,t,null,It,c,{})}}};function Wt(e){let n,o,r,s,i,c,a;return n=new At({}),s=new Et({props:{routes:Pt}}),c=new Rt({}),{c(){it(n.$$.fragment),o=k(),r=b("main"),it(s.$$.fragment),i=k(),it(c.$$.fragment),E(r,"class","svelte-13x9i6o")},m(t,e){ct(n,t,e),v(t,o,e),v(t,r,e),ct(s,r,null),v(t,i,e),ct(c,t,e),a=!0},p:t,i(t){a||(et(n.$$.fragment,t),et(s.$$.fragment,t),et(c.$$.fragment,t),a=!0)},o(t){nt(n.$$.fragment,t),nt(s.$$.fragment,t),nt(c.$$.fragment,t),a=!1},d(t){at(n,t),t&&w(o),t&&w(r),at(s),t&&w(i),at(c,t)}}}return new class extends ut{constructor(t){super(),lt(this,t,null,Wt,c,{})}}({target:document.body,props:{}})}();
