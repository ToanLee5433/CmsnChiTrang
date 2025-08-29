const __vite__fileDeps=["assets/dotlottie-state-machine-manager-2E7RUGJG-NTQ25VSR-BzjuGSZ_.js","assets/react-BXn1aEkb.js","assets/dotlottie-audio-75C54RUV-C4ThZgkY.js","assets/chunk-HDDX7F4A-DsTJlkT1.js","assets/lottie_worker-Q23FJ6ZR-YP5OKMTN-Dl7j5H7l.js","assets/lottie_light-KMJEUZFY-TNG7ODX7-Cz6KFPKl.js","assets/lottie_svg-MJGYILXD-NRTSROOT-Ci_7qTj4.js","assets/lottie_light_canvas-B5UTTNXA-PRI6IBWW-CV9yTcpO.js","assets/lottie_canvas-CDSUBMCL-MZNYH5VV-iWywsrJi.js","assets/lottie_light_html-SLCECTRT-SYWXEBDN-Bl2Og0kV.js","assets/lottie_html-X3TYKVQI-L6774NQS-DBjbmfli.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var no=Object.defineProperty;var ro=(t,e,i)=>e in t?no(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var y=(t,e,i)=>(ro(t,typeof e!="symbol"?e+"":e,i),i);import{r as q,a as so,R as bt}from"./react-BXn1aEkb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();var wi={exports:{}},le={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ao=q,lo=Symbol.for("react.element"),ho=Symbol.for("react.fragment"),uo=Object.prototype.hasOwnProperty,co=ao.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,po={key:!0,ref:!0,__self:!0,__source:!0};function Ci(t,e,i){var o,n={},r=null,s=null;i!==void 0&&(r=""+i),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(s=e.ref);for(o in e)uo.call(e,o)&&!po.hasOwnProperty(o)&&(n[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)n[o]===void 0&&(n[o]=e[o]);return{$$typeof:lo,type:t,key:r,ref:s,props:n,_owner:co.current}}le.Fragment=ho;le.jsx=Ci;le.jsxs=Ci;wi.exports=le;var A=wi.exports,fo={exports:{}};(function(t){var e=function(i){var o=Object.prototype,n=o.hasOwnProperty,r=Object.defineProperty||function(f,p,m){f[p]=m.value},s,l=typeof Symbol=="function"?Symbol:{},a=l.iterator||"@@iterator",h=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function d(f,p,m){return Object.defineProperty(f,p,{value:m,enumerable:!0,configurable:!0,writable:!0}),f[p]}try{d({},"")}catch{d=function(p,m,k){return p[m]=k}}function c(f,p,m,k){var b=p&&p.prototype instanceof L?p:L,$=Object.create(b.prototype),F=new rt(k||[]);return r($,"_invoke",{value:H(f,m,F)}),$}i.wrap=c;function v(f,p,m){try{return{type:"normal",arg:f.call(p,m)}}catch(k){return{type:"throw",arg:k}}}var _="suspendedStart",g="suspendedYield",S="executing",w="completed",C={};function L(){}function N(){}function M(){}var D={};d(D,a,function(){return this});var T=Object.getPrototypeOf,P=T&&T(T(st([])));P&&P!==o&&n.call(P,a)&&(D=P);var z=M.prototype=L.prototype=Object.create(D);N.prototype=M,r(z,"constructor",{value:M,configurable:!0}),r(M,"constructor",{value:N,configurable:!0}),N.displayName=d(M,u,"GeneratorFunction");function tt(f){["next","throw","return"].forEach(function(p){d(f,p,function(m){return this._invoke(p,m)})})}i.isGeneratorFunction=function(f){var p=typeof f=="function"&&f.constructor;return p?p===N||(p.displayName||p.name)==="GeneratorFunction":!1},i.mark=function(f){return Object.setPrototypeOf?Object.setPrototypeOf(f,M):(f.__proto__=M,d(f,u,"GeneratorFunction")),f.prototype=Object.create(z),f},i.awrap=function(f){return{__await:f}};function U(f,p){function m($,F,Z,Q){var K=v(f[$],f,F);if(K.type==="throw")Q(K.arg);else{var Ot=K.arg,Ct=Ot.value;return Ct&&typeof Ct=="object"&&n.call(Ct,"__await")?p.resolve(Ct.__await).then(function(pt){m("next",pt,Z,Q)},function(pt){m("throw",pt,Z,Q)}):p.resolve(Ct).then(function(pt){Ot.value=pt,Z(Ot)},function(pt){return m("throw",pt,Z,Q)})}}var k;function b($,F){function Z(){return new p(function(Q,K){m($,F,Q,K)})}return k=k?k.then(Z,Z):Z()}r(this,"_invoke",{value:b})}tt(U.prototype),d(U.prototype,h,function(){return this}),i.AsyncIterator=U,i.async=function(f,p,m,k,b){b===void 0&&(b=Promise);var $=new U(c(f,p,m,k),b);return i.isGeneratorFunction(p)?$:$.next().then(function(F){return F.done?F.value:$.next()})};function H(f,p,m){var k=_;return function($,F){if(k===S)throw new Error("Generator is already running");if(k===w){if($==="throw")throw F;return Rt()}for(m.method=$,m.arg=F;;){var Z=m.delegate;if(Z){var Q=W(Z,m);if(Q){if(Q===C)continue;return Q}}if(m.method==="next")m.sent=m._sent=m.arg;else if(m.method==="throw"){if(k===_)throw k=w,m.arg;m.dispatchException(m.arg)}else m.method==="return"&&m.abrupt("return",m.arg);k=S;var K=v(f,p,m);if(K.type==="normal"){if(k=m.done?w:g,K.arg===C)continue;return{value:K.arg,done:m.done}}else K.type==="throw"&&(k=w,m.method="throw",m.arg=K.arg)}}}function W(f,p){var m=p.method,k=f.iterator[m];if(k===s)return p.delegate=null,m==="throw"&&f.iterator.return&&(p.method="return",p.arg=s,W(f,p),p.method==="throw")||m!=="return"&&(p.method="throw",p.arg=new TypeError("The iterator does not provide a '"+m+"' method")),C;var b=v(k,f.iterator,p.arg);if(b.type==="throw")return p.method="throw",p.arg=b.arg,p.delegate=null,C;var $=b.arg;if(!$)return p.method="throw",p.arg=new TypeError("iterator result is not an object"),p.delegate=null,C;if($.done)p[f.resultName]=$.value,p.next=f.nextLoc,p.method!=="return"&&(p.method="next",p.arg=s);else return $;return p.delegate=null,C}tt(z),d(z,u,"Generator"),d(z,a,function(){return this}),d(z,"toString",function(){return"[object Generator]"});function ot(f){var p={tryLoc:f[0]};1 in f&&(p.catchLoc=f[1]),2 in f&&(p.finallyLoc=f[2],p.afterLoc=f[3]),this.tryEntries.push(p)}function B(f){var p=f.completion||{};p.type="normal",delete p.arg,f.completion=p}function rt(f){this.tryEntries=[{tryLoc:"root"}],f.forEach(ot,this),this.reset(!0)}i.keys=function(f){var p=Object(f),m=[];for(var k in p)m.push(k);return m.reverse(),function b(){for(;m.length;){var $=m.pop();if($ in p)return b.value=$,b.done=!1,b}return b.done=!0,b}};function st(f){if(f!=null){var p=f[a];if(p)return p.call(f);if(typeof f.next=="function")return f;if(!isNaN(f.length)){var m=-1,k=function b(){for(;++m<f.length;)if(n.call(f,m))return b.value=f[m],b.done=!1,b;return b.value=s,b.done=!0,b};return k.next=k}}throw new TypeError(typeof f+" is not iterable")}i.values=st;function Rt(){return{value:s,done:!0}}return rt.prototype={constructor:rt,reset:function(f){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(B),!f)for(var p in this)p.charAt(0)==="t"&&n.call(this,p)&&!isNaN(+p.slice(1))&&(this[p]=s)},stop:function(){this.done=!0;var f=this.tryEntries[0],p=f.completion;if(p.type==="throw")throw p.arg;return this.rval},dispatchException:function(f){if(this.done)throw f;var p=this;function m(Q,K){return $.type="throw",$.arg=f,p.next=Q,K&&(p.method="next",p.arg=s),!!K}for(var k=this.tryEntries.length-1;k>=0;--k){var b=this.tryEntries[k],$=b.completion;if(b.tryLoc==="root")return m("end");if(b.tryLoc<=this.prev){var F=n.call(b,"catchLoc"),Z=n.call(b,"finallyLoc");if(F&&Z){if(this.prev<b.catchLoc)return m(b.catchLoc,!0);if(this.prev<b.finallyLoc)return m(b.finallyLoc)}else if(F){if(this.prev<b.catchLoc)return m(b.catchLoc,!0)}else if(Z){if(this.prev<b.finallyLoc)return m(b.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(f,p){for(var m=this.tryEntries.length-1;m>=0;--m){var k=this.tryEntries[m];if(k.tryLoc<=this.prev&&n.call(k,"finallyLoc")&&this.prev<k.finallyLoc){var b=k;break}}b&&(f==="break"||f==="continue")&&b.tryLoc<=p&&p<=b.finallyLoc&&(b=null);var $=b?b.completion:{};return $.type=f,$.arg=p,b?(this.method="next",this.next=b.finallyLoc,C):this.complete($)},complete:function(f,p){if(f.type==="throw")throw f.arg;return f.type==="break"||f.type==="continue"?this.next=f.arg:f.type==="return"?(this.rval=this.arg=f.arg,this.method="return",this.next="end"):f.type==="normal"&&p&&(this.next=p),C},finish:function(f){for(var p=this.tryEntries.length-1;p>=0;--p){var m=this.tryEntries[p];if(m.finallyLoc===f)return this.complete(m.completion,m.afterLoc),B(m),C}},catch:function(f){for(var p=this.tryEntries.length-1;p>=0;--p){var m=this.tryEntries[p];if(m.tryLoc===f){var k=m.completion;if(k.type==="throw"){var b=k.arg;B(m)}return b}}throw new Error("illegal catch attempt")},delegateYield:function(f,p,m){return this.delegate={iterator:st(f),resultName:p,nextLoc:m},this.method==="next"&&(this.arg=s),C}},i}(t.exports);try{regeneratorRuntime=e}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}})(fo);var Ce={},Je=so;Ce.createRoot=Je.createRoot,Ce.hydrateRoot=Je.hydrateRoot;var Xt=window,Te=Xt.ShadowRoot&&(Xt.ShadyCSS===void 0||Xt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,je=Symbol(),Ge=new WeakMap,Si=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Te&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Ge.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ge.set(e,t))}return t}toString(){return this.cssText}},vo=t=>new Si(typeof t=="string"?t:t+"",void 0,je),mo=(t,...e)=>{let i=t.length===1?t[0]:e.reduce((o,n,r)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[r+1],t[0]);return new Si(i,t,je)},yo=(t,e)=>{Te?t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):e.forEach(i=>{let o=document.createElement("style"),n=Xt.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=i.cssText,t.appendChild(o)})},Ke=Te?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(let o of e.cssRules)i+=o.cssText;return vo(i)})(t):t,ce,ee=window,Ye=ee.trustedTypes,go=Ye?Ye.emptyScript:"",Xe=ee.reactiveElementPolyfillSupport,Se={toAttribute(t,e){switch(e){case Boolean:t=t?go:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Li=(t,e)=>e!==t&&(e==e||t==t),pe={attribute:!0,type:String,converter:Se,reflect:!1,hasChanged:Li},Le="finalized",Pt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=pe){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){let n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||pe}static finalize(){if(this.hasOwnProperty(Le))return!1;this[Le]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let o of i)e.unshift(Ke(o))}else t!==void 0&&e.push(Ke(t));return e}static _$Ep(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return yo(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=pe){var o;let n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){let r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Se).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;let o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){let r=o.getPropertyOptions(n),s=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Se;this._$El=n,this[n]=s.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Li)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Pt[Le]=!0,Pt.elementProperties=new Map,Pt.elementStyles=[],Pt.shadowRootOptions={mode:"open"},Xe==null||Xe({ReactiveElement:Pt}),((ce=ee.reactiveElementVersions)!==null&&ce!==void 0?ce:ee.reactiveElementVersions=[]).push("1.6.3");var fe,ie=window,jt=ie.trustedTypes,Qe=jt?jt.createPolicy("lit-html",{createHTML:t=>t}):void 0,ke="$lit$",_t=`lit$${(Math.random()+"").slice(9)}$`,ki="?"+_t,_o=`<${ki}>`,xt=document,qt=()=>xt.createComment(""),Ht=t=>t===null||typeof t!="object"&&typeof t!="function",xi=Array.isArray,bo=t=>xi(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ve=`[ 	
\f\r]`,Dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ti=/-->/g,ei=/>/g,St=RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ii=/'/g,oi=/"/g,Ai=/^(?:script|style|textarea|title)$/i,wo=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),x=wo(1),Nt=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),ni=new WeakMap,Lt=xt.createTreeWalker(xt,129,null,!1);function $i(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qe!==void 0?Qe.createHTML(e):e}var Co=(t,e)=>{let i=t.length-1,o=[],n,r=e===2?"<svg>":"",s=Dt;for(let l=0;l<i;l++){let a=t[l],h,u,d=-1,c=0;for(;c<a.length&&(s.lastIndex=c,u=s.exec(a),u!==null);)c=s.lastIndex,s===Dt?u[1]==="!--"?s=ti:u[1]!==void 0?s=ei:u[2]!==void 0?(Ai.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=St):u[3]!==void 0&&(s=St):s===St?u[0]===">"?(s=n??Dt,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,h=u[1],s=u[3]===void 0?St:u[3]==='"'?oi:ii):s===oi||s===ii?s=St:s===ti||s===ei?s=Dt:(s=St,n=void 0);let v=s===St&&t[l+1].startsWith("/>")?" ":"";r+=s===Dt?a+_o:d>=0?(o.push(h),a.slice(0,d)+ke+a.slice(d)+_t+v):a+_t+(d===-2?(o.push(void 0),l):v)}return[$i(t,r+(t[i]||"<?>")+(e===2?"</svg>":"")),o]},xe=class Oi{constructor({strings:e,_$litType$:i},o){let n;this.parts=[];let r=0,s=0,l=e.length-1,a=this.parts,[h,u]=Co(e,i);if(this.el=Oi.createElement(h,o),Lt.currentNode=this.el.content,i===2){let d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(n=Lt.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes()){let d=[];for(let c of n.getAttributeNames())if(c.endsWith(ke)||c.startsWith(_t)){let v=u[s++];if(d.push(c),v!==void 0){let _=n.getAttribute(v.toLowerCase()+ke).split(_t),g=/([.?@])?(.*)/.exec(v);a.push({type:1,index:r,name:g[2],strings:_,ctor:g[1]==="."?Lo:g[1]==="?"?xo:g[1]==="@"?Ao:he})}else a.push({type:6,index:r})}for(let c of d)n.removeAttribute(c)}if(Ai.test(n.tagName)){let d=n.textContent.split(_t),c=d.length-1;if(c>0){n.textContent=jt?jt.emptyScript:"";for(let v=0;v<c;v++)n.append(d[v],qt()),Lt.nextNode(),a.push({type:2,index:++r});n.append(d[c],qt())}}}else if(n.nodeType===8)if(n.data===ki)a.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(_t,d+1))!==-1;)a.push({type:7,index:r}),d+=_t.length-1}r++}}static createElement(e,i){let o=xt.createElement("template");return o.innerHTML=e,o}};function zt(t,e,i=t,o){var n,r,s,l;if(e===Nt)return e;let a=o!==void 0?(n=i._$Co)===null||n===void 0?void 0:n[o]:i._$Cl,h=Ht(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==h&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),h===void 0?a=void 0:(a=new h(t),a._$AT(t,i,o)),o!==void 0?((s=(l=i)._$Co)!==null&&s!==void 0?s:l._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(e=zt(t,a._$AS(t,e.values),a,o)),e}var So=class{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var i;let{el:{content:o},parts:n}=this._$AD,r=((i=e==null?void 0:e.creationScope)!==null&&i!==void 0?i:xt).importNode(o,!0);Lt.currentNode=r;let s=Lt.nextNode(),l=0,a=0,h=n[0];for(;h!==void 0;){if(l===h.index){let u;h.type===2?u=new Ne(s,s.nextSibling,this,e):h.type===1?u=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(u=new $o(s,this,e)),this._$AV.push(u),h=n[++a]}l!==(h==null?void 0:h.index)&&(s=Lt.nextNode(),l++)}return Lt.currentNode=xt,r}v(e){let i=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}},Ne=class Ei{constructor(e,i,o,n){var r;this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=o,this.options=n,this._$Cp=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var e,i;return(i=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&i!==void 0?i:this._$Cp}get parentNode(){let e=this._$AA.parentNode,i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=zt(this,e,i),Ht(e)?e===G||e==null||e===""?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==Nt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):bo(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==G&&Ht(this._$AH)?this._$AA.nextSibling.data=e:this.$(xt.createTextNode(e)),this._$AH=e}g(e){var i;let{values:o,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=xe.createElement($i(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===r)this._$AH.v(o);else{let s=new So(r,this),l=s.u(this.options);s.v(o),this.$(l),this._$AH=s}}_$AC(e){let i=ni.get(e.strings);return i===void 0&&ni.set(e.strings,i=new xe(e)),i}T(e){xi(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,o,n=0;for(let r of e)n===i.length?i.push(o=new Ei(this.k(qt()),this.k(qt()),this,this.options)):o=i[n],o._$AI(r),n++;n<i.length&&(this._$AR(o&&o._$AB.nextSibling,n),i.length=n)}_$AR(e=this._$AA.nextSibling,i){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,i);e&&e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){var i;this._$AM===void 0&&(this._$Cp=e,(i=this._$AP)===null||i===void 0||i.call(this,e))}},he=class{constructor(t,e,i,o,n){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){let n=this.strings,r=!1;if(n===void 0)t=zt(this,t,e,0),r=!Ht(t)||t!==this._$AH&&t!==Nt,r&&(this._$AH=t);else{let s=t,l,a;for(t=n[0],l=0;l<n.length-1;l++)a=zt(this,s[i+l],e,l),a===Nt&&(a=this._$AH[l]),r||(r=!Ht(a)||a!==this._$AH[l]),a===G?t=G:t!==G&&(t+=(a??"")+n[l+1]),this._$AH[l]=a}r&&!o&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Lo=class extends he{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}},ko=jt?jt.emptyScript:"",xo=class extends he{constructor(){super(...arguments),this.type=4}j(e){e&&e!==G?this.element.setAttribute(this.name,ko):this.element.removeAttribute(this.name)}},Ao=class extends he{constructor(e,i,o,n,r){super(e,i,o,n,r),this.type=5}_$AI(e,i=this){var o;if((e=(o=zt(this,e,i,0))!==null&&o!==void 0?o:G)===Nt)return;let n=this._$AH,r=e===G&&n!==G||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==G&&(n===G||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i,o;typeof this._$AH=="function"?this._$AH.call((o=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},$o=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){zt(this,t)}},ri=ie.litHtmlPolyfillSupport;ri==null||ri(xe,Ne),((fe=ie.litHtmlVersions)!==null&&fe!==void 0?fe:ie.litHtmlVersions=[]).push("2.8.0");var Oo=(t,e,i)=>{var o,n;let r=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:e,s=r._$litPart$;if(s===void 0){let l=(n=i==null?void 0:i.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=s=new Ne(e.insertBefore(qt(),l),l,void 0,i??{})}return s._$AI(t),s},me,ye,Bt=class extends Pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,i;let o=super.createRenderRoot();return(e=(i=this.renderOptions).renderBefore)!==null&&e!==void 0||(i.renderBefore=o.firstChild),o}update(e){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oo(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Nt}};Bt.finalized=!0,Bt._$litElement$=!0,(me=globalThis.litElementHydrateSupport)===null||me===void 0||me.call(globalThis,{LitElement:Bt});var si=globalThis.litElementPolyfillSupport;si==null||si({LitElement:Bt});((ye=globalThis.litElementVersions)!==null&&ye!==void 0?ye:globalThis.litElementVersions=[]).push("3.3.3");var Eo=mo`
  @font-face {
    font-family: 'Karla';
    font-weight: regular;
    src: url('./fonts/Karla-regular.woff') format('woff');
  }

  :host {
    --lottie-player-toolbar-height: 35px;
    --lottie-player-toolbar-background-color: transparent;
    --lottie-player-toolbar-hover-background-color: #f3f6f8;
    --lottie-player-toolbar-icon-color: #20272c;
    --lottie-player-toolbar-icon-hover-color: #f3f6f8;
    --lottie-player-toolbar-icon-active-color: #00ddb3;
    --lottie-player-seeker-track-color: #00ddb3;
    --lottie-player-seeker-accent-color: #00c1a2;
    --lottie-player-seeker-thumb-color: #00c1a2;
    --lottie-player-options-separator: #d9e0e6;

    display: block;
    width: 100%;
    height: 100%;

    font-family: 'Karla', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host * {
    box-sizing: border-box;
  }

  .active {
    color: var(--lottie-player-toolbar-icon-active-color) !important;
  }

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .animation {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .animation.controls {
    height: calc(100% - var(--lottie-player-toolbar-height));
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: var(--lottie-player-toolbar-background-color);
    margin: 0 8px;
    height: var(--lottie-player-toolbar-height);
  }

  .btn-spacing-left {
    margin-right: 4px;
    margin-left: 8px;
  }

  .btn-spacing-center {
    margin-right: 4px;
    margin-left: 4px;
  }

  .btn-spacing-right {
    margin-right: 8px;
    margin-left: 4px;
  }

  .toolbar button {
    color: #20272c;
    cursor: pointer;
    fill: var(--lottie-player-toolbar-icon-color);
    display: flex;
    background: none;
    border: 0px;
    border-radius: 4px;
    padding: 4px;
    outline: none;
    width: 24px;
    height: 24px;
    align-items: center;
  }

  .toolbar button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
    border-style: solid;
    border-radius: 2px;
  }

  .toolbar button.active {
    fill: var(--lottie-player-toolbar-icon-active-color);
  }

  .toolbar button.active:hover {
    fill: var(--lottie-player-toolbar-icon-hover-color);
    border-radius: 4px;
  }

  .toolbar button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .toolbar button svg {
    width: 16px;
    height: 16px;
  }

  .toolbar button.disabled svg {
    display: none;
  }

  .popover {
    position: absolute;
    bottom: 40px;
    left: calc(100% - 239px);
    width: 224px;
    min-height: 84px;
    max-height: 300px;
    background-color: #ffffff;
    box-shadow: 0px 8px 48px 0px rgba(243, 246, 248, 0.15), 0px 8px 16px 0px rgba(61, 72, 83, 0.16),
      0px 0px 1px 0px rgba(61, 72, 83, 0.36);
    border-radius: 8px;
    padding: 8px;
    z-index: 100;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .popover:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover::-webkit-scrollbar {
    width: 0px;
  }

  .popover-button {
    background: none;
    border: none;
    font-family: inherit;
    width: 100%;
    flex-direction: row;
    cursor: pointer;
    height: 32px;
    color: #20272c;
    justify-content: space-between;
    display: flex;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 4px;
  }

  .popover-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }

  .popover-button-text {
    display: flex;
    color: #20272c;
    flex-direction: column;
    align-self: stretch;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
  }

  .reset-btn {
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #63727e;
    padding: 0;
    width: 31px;
    height: 18px;
  }
  .reset-btn:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }
  .reset-btn:hover {
    color: #20272c;
  }

  .option-title-button {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 32px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--lottie-player-toolbar-icon-color);
    border: none;
    background: none;
    padding: 4px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }
  .option-title-button.themes {
    width: auto;
    padding: 0;
  }
  .option-title-button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-themes-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }
  .option-title-themes-row:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-title-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }

  .option-title-separator {
    margin: 8px -8px;
    border-bottom: 1px solid var(--lottie-player-options-separator);
  }

  .option-title-chevron {
    display: flex;
    padding: 4px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .option-row {
    display: flex;
    flex-direction: column;
  }
  .option-row > ul {
    padding: 0;
    margin: 0;
  }

  .option-button {
    width: 100%;
    background: none;
    border: none;
    font-family: inherit;
    display: flex;
    padding: 4px 8px;
    color: #20272c;
    overflow: hidden;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    cursor: pointer;
    height: 32px;
    font-family: inherit;
    font-size: 14px;
    border-radius: 4px;
  }
  .option-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }
  .option-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-tick {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: flex-start;
    gap: 8px;
  }

  .seeker {
    height: 4px;
    width: 95%;
    outline: none;
    -webkit-appearance: none;
    -moz-apperance: none;
    border-radius: 9999px;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      rgb(0, 221, 179) calc(var(--seeker) * 1%),
      rgb(217, 224, 230) calc(var(--seeker) * 1%)
    );
  }
  .seeker.to-left {
    background-image: linear-gradient(
      to right,
      rgb(217, 224, 230) calc(var(--seeker) * 1%),
      rgb(0, 221, 179) calc(var(--seeker) * 1%)
    );
  }
  .seeker::-webkit-slider-runnable-track:focus-visible {
    color: #f07167;
    accent-color: #00ddb3;
  }

  .seeker::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  .seeker::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
  }
  .seeker:focus-visible::-webkit-slider-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }
  .seeker::-webkit-slider-thumb:hover {
    background: #019d91;
  }
  .seeker::-moz-range-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
    border-color: transparent;
  }
  .seeker:focus-visible::-moz-range-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }

  .error {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 100%;
    align-items: center;
  }
`;/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/const Po="modulepreload",Io=function(t){return"/CmsnChiTrang/"+t},ai={},yt=function(e,i,o){let n=Promise.resolve();if(i&&i.length>0){const r=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.all(i.map(a=>{if(a=Io(a),a in ai)return;ai[a]=!0;const h=a.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!o)for(let v=r.length-1;v>=0;v--){const _=r[v];if(_.href===a&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${u}`))return;const c=document.createElement("link");if(c.rel=h?"stylesheet":Po,h||(c.as="script",c.crossOrigin=""),c.href=a,l&&c.setAttribute("nonce",l),document.head.appendChild(c),h)return new Promise((v,_)=>{c.addEventListener("load",v),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${a}`)))})}))}return n.then(()=>e()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})};var li={},Mo=function(t,e,i,o,n){var r=new Worker(li[e]||(li[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return r.onmessage=function(s){var l=s.data,a=l.$e$;if(a){var h=new Error(a[0]);h.code=a[1],h.stack=a[2],n(h,null)}else n(null,l)},r.postMessage(i,o),r},it=Uint8Array,kt=Uint16Array,Pi=Int32Array,ze=new it([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ue=new it([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ii=new it([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Mi=function(t,e){for(var i=new kt(31),o=0;o<31;++o)i[o]=e+=1<<t[o-1];for(var n=new Pi(i[30]),o=1;o<30;++o)for(var r=i[o];r<i[o+1];++r)n[r]=r-i[o]<<5|o;return{b:i,r:n}},Ti=Mi(ze,2),Re=Ti.b,To=Ti.r;Re[28]=258,To[258]=28;var jo=Mi(Ue,0),ji=jo.b,oe=new kt(32768);for(E=0;E<32768;++E)mt=(E&43690)>>1|(E&21845)<<1,mt=(mt&52428)>>2|(mt&13107)<<2,mt=(mt&61680)>>4|(mt&3855)<<4,oe[E]=((mt&65280)>>8|(mt&255)<<8)>>1;var mt,E,Mt=function(t,e,i){for(var o=t.length,n=0,r=new kt(e);n<o;++n)t[n]&&++r[t[n]-1];var s=new kt(e);for(n=1;n<e;++n)s[n]=s[n-1]+r[n-1]<<1;var l;if(i){l=new kt(1<<e);var a=15-e;for(n=0;n<o;++n)if(t[n])for(var h=n<<4|t[n],u=e-t[n],d=s[t[n]-1]++<<u,c=d|(1<<u)-1;d<=c;++d)l[oe[d]>>a]=h}else for(l=new kt(o),n=0;n<o;++n)t[n]&&(l[n]=oe[s[t[n]-1]++]>>15-t[n]);return l},Wt=new it(288);for(E=0;E<144;++E)Wt[E]=8;var E;for(E=144;E<256;++E)Wt[E]=9;var E;for(E=256;E<280;++E)Wt[E]=7;var E;for(E=280;E<288;++E)Wt[E]=8;var E,Ni=new it(32);for(E=0;E<32;++E)Ni[E]=5;var E,zi=Mt(Wt,9,1),Ui=Mt(Ni,5,1),Qt=function(t){for(var e=t[0],i=1;i<t.length;++i)t[i]>e&&(e=t[i]);return e},lt=function(t,e,i){var o=e/8|0;return(t[o]|t[o+1]<<8)>>(e&7)&i},te=function(t,e){var i=e/8|0;return(t[i]|t[i+1]<<8|t[i+2]<<16)>>(e&7)},Ri=function(t){return(t+7)/8|0},de=function(t,e,i){return(e==null||e<0)&&(e=0),(i==null||i>t.length)&&(i=t.length),new it(t.subarray(e,i))},Di=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],et=function(t,e,i){var o=new Error(e||Di[t]);if(o.code=t,Error.captureStackTrace&&Error.captureStackTrace(o,et),!i)throw o;return o},Bi=function(t,e,i,o){var n=t.length,r=o?o.length:0;if(!n||e.f&&!e.l)return i||new it(0);var s=!i,l=s||e.i!=2,a=e.i;s&&(i=new it(n*3));var h=function(pt){var We=i.length;if(pt>We){var Ze=new it(Math.max(We*2,pt));Ze.set(i),i=Ze}},u=e.f||0,d=e.p||0,c=e.b||0,v=e.l,_=e.d,g=e.m,S=e.n,w=n*8;do{if(!v){u=lt(t,d,1);var C=lt(t,d+1,3);if(d+=3,C)if(C==1)v=zi,_=Ui,g=9,S=5;else if(C==2){var L=lt(t,d,31)+257,N=lt(t,d+10,15)+4,M=L+lt(t,d+5,31)+1;d+=14;for(var D=new it(M),T=new it(19),P=0;P<N;++P)T[Ii[P]]=lt(t,d+P*3,7);d+=N*3;for(var z=Qt(T),tt=(1<<z)-1,U=Mt(T,z,1),P=0;P<M;){var H=U[lt(t,d,tt)];d+=H&15;var W=H>>4;if(W<16)D[P++]=W;else{var ot=0,B=0;for(W==16?(B=3+lt(t,d,3),d+=2,ot=D[P-1]):W==17?(B=3+lt(t,d,7),d+=3):W==18&&(B=11+lt(t,d,127),d+=7);B--;)D[P++]=ot}}var rt=D.subarray(0,L),st=D.subarray(L);g=Qt(rt),S=Qt(st),v=Mt(rt,g,1),_=Mt(st,S,1)}else et(1);else{var W=Ri(d)+4,Rt=t[W-4]|t[W-3]<<8,f=W+Rt;if(f>n){a&&et(0);break}l&&h(c+Rt),i.set(t.subarray(W,f),c),e.b=c+=Rt,e.p=d=f*8,e.f=u;continue}if(d>w){a&&et(0);break}}l&&h(c+131072);for(var p=(1<<g)-1,m=(1<<S)-1,k=d;;k=d){var ot=v[te(t,d)&p],b=ot>>4;if(d+=ot&15,d>w){a&&et(0);break}if(ot||et(2),b<256)i[c++]=b;else if(b==256){k=d,v=null;break}else{var $=b-254;if(b>264){var P=b-257,F=ze[P];$=lt(t,d,(1<<F)-1)+Re[P],d+=F}var Z=_[te(t,d)&m],Q=Z>>4;Z||et(3),d+=Z&15;var st=ji[Q];if(Q>3){var F=Ue[Q];st+=te(t,d)&(1<<F)-1,d+=F}if(d>w){a&&et(0);break}l&&h(c+131072);var K=c+$;if(c<st){var Ot=r-st,Ct=Math.min(st,K);for(Ot+c<0&&et(3);c<Ct;++c)i[c]=o[Ot+c]}for(;c<K;++c)i[c]=i[c-st]}}e.l=v,e.p=k,e.b=c,e.f=u,v&&(u=1,e.m=g,e.d=_,e.n=S)}while(!u);return c!=i.length&&s?de(i,0,c):i.subarray(0,c)},No=new it(0),zo=function(t,e){var i={};for(var o in t)i[o]=t[o];for(var o in e)i[o]=e[o];return i},hi=function(t,e,i){for(var o=t(),n=t.toString(),r=n.slice(n.indexOf("[")+1,n.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<o.length;++s){var l=o[s],a=r[s];if(typeof l=="function"){e+=";"+a+"=";var h=l.toString();if(l.prototype)if(h.indexOf("[native code]")!=-1){var u=h.indexOf(" ",8)+1;e+=h.slice(u,h.indexOf("(",u))}else{e+=h;for(var d in l.prototype)e+=";"+a+".prototype."+d+"="+l.prototype[d].toString()}else e+=h}else i[a]=l}return e},Yt=[],Uo=function(t){var e=[];for(var i in t)t[i].buffer&&e.push((t[i]=new t[i].constructor(t[i])).buffer);return e},Ro=function(t,e,i,o){if(!Yt[i]){for(var n="",r={},s=t.length-1,l=0;l<s;++l)n=hi(t[l],n,r);Yt[i]={c:hi(t[s],n,r),e:r}}var a=zo({},Yt[i].e);return Mo(Yt[i].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",i,a,Uo(a),o)},Do=function(){return[it,kt,Pi,ze,Ue,Ii,Re,ji,zi,Ui,oe,Di,Mt,Qt,lt,te,Ri,de,et,Bi,De,Fi,Vi]},Fi=function(t){return postMessage(t,[t.buffer])},Vi=function(t){return t&&{out:t.size&&new it(t.size),dictionary:t.dictionary}},Bo=function(t,e,i,o,n,r){var s=Ro(i,o,n,function(l,a){s.terminate(),r(l,a)});return s.postMessage([t,e],e.consume?[t.buffer]:[]),function(){s.terminate()}},ft=function(t,e){return t[e]|t[e+1]<<8},dt=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},ge=function(t,e){return dt(t,e)+dt(t,e+4)*4294967296};function Fo(t,e,i){return i||(i=e,e={}),typeof i!="function"&&et(7),Bo(t,e,[Do],function(o){return Fi(De(o.data[0],Vi(o.data[1])))},1,i)}function De(t,e){return Bi(t,{i:2},e&&e.out,e&&e.dictionary)}var Ae=typeof TextDecoder<"u"&&new TextDecoder,Vo=0;try{Ae.decode(No,{stream:!0}),Vo=1}catch{}var qo=function(t){for(var e="",i=0;;){var o=t[i++],n=(o>127)+(o>223)+(o>239);if(i+n>t.length)return{s:e,r:de(t,i-1)};n?n==3?(o=((o&15)<<18|(t[i++]&63)<<12|(t[i++]&63)<<6|t[i++]&63)-65536,e+=String.fromCharCode(55296|o>>10,56320|o&1023)):n&1?e+=String.fromCharCode((o&31)<<6|t[i++]&63):e+=String.fromCharCode((o&15)<<12|(t[i++]&63)<<6|t[i++]&63):e+=String.fromCharCode(o)}};function Ut(t,e){if(e){for(var i="",o=0;o<t.length;o+=16384)i+=String.fromCharCode.apply(null,t.subarray(o,o+16384));return i}else{if(Ae)return Ae.decode(t);var n=qo(t),r=n.s,i=n.r;return i.length&&et(8),r}}var Ho=function(t,e){return e+30+ft(t,e+26)+ft(t,e+28)},Wo=function(t,e,i){var o=ft(t,e+28),n=Ut(t.subarray(e+46,e+46+o),!(ft(t,e+8)&2048)),r=e+46+o,s=dt(t,e+20),l=i&&s==4294967295?Zo(t,r):[s,dt(t,e+24),dt(t,e+42)],a=l[0],h=l[1],u=l[2];return[ft(t,e+10),a,h,n,r+ft(t,e+30)+ft(t,e+32),u]},Zo=function(t,e){for(;ft(t,e)!=1;e+=4+ft(t,e+2));return[ge(t,e+12),ge(t,e+4),ge(t,e+20)]},di=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(t){t()};function Jo(t,e,i){i||(i=e,e={}),typeof i!="function"&&et(7);var o=[],n=function(){for(var S=0;S<o.length;++S)o[S]()},r={},s=function(S,w){di(function(){i(S,w)})};di(function(){s=i});for(var l=t.length-22;dt(t,l)!=101010256;--l)if(!l||t.length-l>65558)return s(et(13,0,1),null),n;var a=ft(t,l+8);if(a){var h=a,u=dt(t,l+16),d=u==4294967295||h==65535;if(d){var c=dt(t,l-12);d=dt(t,c)==101075792,d&&(h=a=dt(t,c+32),u=dt(t,c+48))}for(var v=e&&e.filter,_=function(S){var w=Wo(t,u,d),C=w[0],L=w[1],N=w[2],M=w[3],D=w[4],T=w[5],P=Ho(t,T);u=D;var z=function(U,H){U?(n(),s(U,null)):(H&&(r[M]=H),--a||s(null,r))};if(!v||v({name:M,size:L,originalSize:N,compression:C}))if(!C)z(null,de(t,P,P+L));else if(C==8){var tt=t.subarray(P,P+L);if(L<32e4)try{z(null,De(tt,{out:new it(N)}))}catch(U){z(U,null)}else o.push(Fo(tt,{size:N},z))}else z(et(14,"unknown compression type "+C,1),null);else z(null,null)},g=0;g<h;++g)_(g)}else s(null,{});return n}function Go(t){return(Array.isArray(t)?t:t.issues).reduce((e,i)=>{if(i.path){let o=i.path.map(({key:n})=>n).join(".");e.nested[o]=[...e.nested[o]||[],i.message]}else e.root=[...e.root||[],i.message];return e},{nested:{}})}var Ko=class extends Error{constructor(e){super(e[0].message);y(this,"issues");this.name="ValiError",this.issues=e}};function Yo(t,e){return{reason:t==null?void 0:t.reason,validation:e.validation,origin:(t==null?void 0:t.origin)||"value",message:e.message,input:e.input,abortEarly:t==null?void 0:t.abortEarly,abortPipeEarly:t==null?void 0:t.abortPipeEarly}}function Xo(t,e){return{reason:e,origin:t==null?void 0:t.origin,abortEarly:t==null?void 0:t.abortEarly,abortPipeEarly:t==null?void 0:t.abortPipeEarly}}function wt(t,e,i,o){if(!e||!e.length)return{output:t};let n,r,s=t;for(let l of e){let a=l(s);if(a.issue){n=n||Xo(i,o);let h=Yo(n,a.issue);if(r?r.push(h):r=[h],n.abortEarly||n.abortPipeEarly)break}else s=a.output}return r?{issues:r}:{output:s}}function ct(t,e){return!t||typeof t=="string"?[t,e]:[void 0,t]}function vt(t,e,i,o,n,r){return{issues:[{reason:e,validation:i,origin:(t==null?void 0:t.origin)||"value",message:o,input:n,issues:r,abortEarly:t==null?void 0:t.abortEarly,abortPipeEarly:t==null?void 0:t.abortPipeEarly}]}}function Qo(t=[]){return{schema:"any",async:!1,_parse(e,i){return wt(e,t,i,"any")}}}function Ft(t,e,i){let[o,n]=ct(e,i);return{schema:"array",array:{item:t},async:!1,_parse(r,s){if(!Array.isArray(r))return vt(s,"type","array",o||"Invalid type",r);let l,a=[];for(let h=0;h<r.length;h++){let u=r[h],d=t._parse(u,s);if(d.issues){let c={schema:"array",input:r,key:h,value:u};for(let v of d.issues)v.path?v.path.unshift(c):v.path=[c],l==null||l.push(v);if(l||(l=d.issues),s!=null&&s.abortEarly)break}else a.push(d.output)}return l?{issues:l}:wt(a,n,s,"array")}}}function _e(t,e){let[i,o]=ct(t,e);return{schema:"boolean",async:!1,_parse(n,r){return typeof n!="boolean"?vt(r,"type","boolean",i||"Invalid type",n):wt(n,o,r,"boolean")}}}function ui(t,e){return{schema:"literal",literal:t,async:!1,_parse(i,o){return i!==t?vt(o,"type","literal",e||"Invalid type",i):{output:i}}}}function tn(t,e){return{schema:"native_enum",nativeEnum:t,async:!1,_parse(i,o){return Object.values(t).includes(i)?{output:i}:vt(o,"type","native_enum",e||"Invalid type",i)}}}function ut(t,e){let[i,o]=ct(t,e);return{schema:"number",async:!1,_parse(n,r){return typeof n!="number"?vt(r,"type","number",i||"Invalid type",n):wt(n,o,r,"number")}}}function ht(t,e,i){let[o,n]=ct(e,i),r;return{schema:"object",object:t,async:!1,_parse(s,l){if(!s||typeof s!="object")return vt(l,"type","object",o||"Invalid type",s);r=r||Object.entries(t);let a,h={};for(let[u,d]of r){let c=s[u],v=d._parse(c,l);if(v.issues){let _={schema:"object",input:s,key:u,value:c};for(let g of v.issues)g.path?g.path.unshift(_):g.path=[_],a==null||a.push(g);if(a||(a=v.issues),l!=null&&l.abortEarly)break}else h[u]=v.output}return a?{issues:a}:wt(h,n,l,"object")}}}function I(t){return{schema:"optional",wrapped:t,async:!1,_parse(e,i){return e===void 0?{output:e}:t._parse(e,i)}}}function X(t,e){let[i,o]=ct(t,e);return{schema:"string",async:!1,_parse(n,r){return typeof n!="string"?vt(r,"type","string",i||"Invalid type",n):wt(n,o,r,"string")}}}function en(t,e,i,o){if(typeof e=="object"&&!Array.isArray(e)){let[s,l]=ct(i,o);return[t,e,s,l]}let[n,r]=ct(e,i);return[X(),t,n,r]}var on=["__proto__","prototype","constructor"];function nn(t,e,i,o){let[n,r,s,l]=en(t,e,i,o);return{schema:"record",record:{key:n,value:r},async:!1,_parse(a,h){if(!a||typeof a!="object")return vt(h,"type","record",s||"Invalid type",a);let u,d={};for(let[c,v]of Object.entries(a))if(!on.includes(c)){let _,g=n._parse(c,{origin:"key",abortEarly:h==null?void 0:h.abortEarly,abortPipeEarly:h==null?void 0:h.abortPipeEarly});if(g.issues){_={schema:"record",input:a,key:c,value:v};for(let w of g.issues)w.path=[_],u==null||u.push(w);if(u||(u=g.issues),h!=null&&h.abortEarly)break}let S=r._parse(v,h);if(S.issues){_=_||{schema:"record",input:a,key:c,value:v};for(let w of S.issues)w.path?w.path.unshift(_):w.path=[_],u==null||u.push(w);if(u||(u=S.issues),h!=null&&h.abortEarly)break}!g.issues&&!S.issues&&(d[g.output]=S.output)}return u?{issues:u}:wt(d,l,h,"record")}}}function rn(t,e,i){if(typeof t=="object"&&!Array.isArray(t)){let[r,s]=ct(e,i);return[t,r,s]}let[o,n]=ct(t,e);return[void 0,o,n]}function ci(t,e,i,o){let[n,r,s]=rn(e,i,o);return{schema:"tuple",tuple:{items:t,rest:n},async:!1,_parse(l,a){if(!Array.isArray(l)||!n&&t.length!==l.length||n&&t.length>l.length)return vt(a,"type","tuple",r||"Invalid type",l);let h,u=[];for(let d=0;d<t.length;d++){let c=l[d],v=t[d]._parse(c,a);if(v.issues){let _={schema:"tuple",input:l,key:d,value:c};for(let g of v.issues)g.path?g.path.unshift(_):g.path=[_],h==null||h.push(g);if(h||(h=v.issues),a!=null&&a.abortEarly)break}else u[d]=v.output}if(n)for(let d=t.length;d<l.length;d++){let c=l[d],v=n._parse(c,a);if(v.issues){let _={schema:"tuple",input:l,key:d,value:c};for(let g of v.issues)g.path?g.path.unshift(_):g.path=[_],h==null||h.push(g);if(h||(h=v.issues),a!=null&&a.abortEarly)break}else u[d]=v.output}return h?{issues:h}:wt(u,s,a,"tuple")}}}function $e(t,e){return{schema:"union",union:t,async:!1,_parse(i,o){let n,r;for(let s of t){let l=s._parse(i,o);if(l.issues)if(n)for(let a of l.issues)n.push(a);else n=l.issues;else{r=[l.output];break}}return r?{output:r[0]}:vt(o,"type","union",e||"Invalid type",i,n)}}}function Zt(t,e,i){let[o,n]=ct(e,i);return ht(t.reduce((r,s)=>({...r,...s.object}),{}),o,n)}function sn(t,e,i,o){let[n,r]=ct(i,o);return ht(Object.entries(t.object).reduce((s,[l,a])=>e.includes(l)?s:{...s,[l]:a},{}),n,r)}function an(t,e,i){let o=t._parse(e,i);return o.issues?{success:!1,error:new Ko(o.issues),issues:o.issues}:{success:!0,data:o.output,output:o.output}}function Oe(t,e){return i=>i>t?{issue:{validation:"max_value",message:e||"Invalid value",input:i}}:{output:i}}function Ee(t,e){return i=>i<t?{issue:{validation:"min_value",message:e||"Invalid value",input:i}}:{output:i}}var ln=Object.create,Be=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,qi=Object.getOwnPropertyNames,dn=Object.getPrototypeOf,un=Object.prototype.hasOwnProperty,cn=(t,e,i)=>e in t?Be(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Jt=(t,e)=>function(){return e||(0,t[qi(t)[0]])((e={exports:{}}).exports,e),e.exports},pn=(t,e,i,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of qi(e))!un.call(t,n)&&n!==i&&Be(t,n,{get:()=>e[n],enumerable:!(o=hn(e,n))||o.enumerable});return t},fn=(t,e,i)=>(i=t!=null?ln(dn(t)):{},pn(e||!t||!t.__esModule?Be(i,"default",{value:t,enumerable:!0}):i,t)),vn=(t,e,i)=>(cn(t,typeof e!="symbol"?e+"":e,i),i),mn=Jt({"../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.copy=void 0;var e=(i,o,n=0,r=0,s=i.width-n,l=i.height-r,a=0,h=0)=>{if(n=n|0,r=r|0,s=s|0,l=l|0,a=a|0,h=h|0,s<=0||l<=0)return;let u=new Uint32Array(i.data.buffer),d=new Uint32Array(o.data.buffer);for(let c=0;c<l;c++){let v=r+c;if(v<0||v>=i.height)continue;let _=h+c;if(!(_<0||_>=o.height))for(let g=0;g<s;g++){let S=n+g;if(S<0||S>=i.width)continue;let w=a+g;if(w<0||w>=o.width)continue;let C=v*i.width+S,L=_*o.width+w;d[L]=u[C]}}};t.copy=e}}),yn=Jt({"../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.CreateImageFactory=(e=[0,0,0,0],i=4)=>{if(i=Math.floor(i),isNaN(i)||i<1)throw TypeError("channels should be a positive non-zero number");if(!("length"in e)||e.length<i)throw TypeError(`fill should be iterable with at least ${i} members`);e=new Uint8ClampedArray(e).slice(0,i);let o=e.every(n=>n===0);return(n,r,s)=>{if(n===void 0||r===void 0)throw TypeError("Not enough arguments");if(n=Math.floor(n),r=Math.floor(r),isNaN(n)||n<1||isNaN(r)||r<1)throw TypeError("Index or size is negative or greater than the allowed amount");let l=n*r*i;if(s===void 0&&(s=new Uint8ClampedArray(l)),s instanceof Uint8ClampedArray){if(s.length!==l)throw TypeError("Index or size is negative or greater than the allowed amount");if(!o)for(let a=0;a<r;a++)for(let h=0;h<n;h++){let u=(a*n+h)*i;for(let d=0;d<i;d++)s[u+d]=e[d]}return{get width(){return n},get height(){return r},get data(){return s}}}throw TypeError("Expected data to be Uint8ClampedArray or undefined")}},t.createImage=t.CreateImageFactory()}}),gn=Jt({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.filters=void 0;var e=14,i=(r,s)=>{if(r<=-s||r>=s||r==0)return 0;let l=r*Math.PI;return Math.sin(l)/l*Math.sin(l/s)/(l/s)},o=r=>Math.round(r*((1<<e)-1)),n=(r,s,l,a,h)=>{let u=h?2:3,d=1/l,c=Math.min(1,l),v=u/c,_=Math.floor((v+1)*2),g=new Int16Array((_+2)*s),S=0;for(let w=0;w<s;w++){let C=(w+.5)*d+a,L=Math.max(0,Math.floor(C-v)),N=Math.min(r-1,Math.ceil(C+v)),M=N-L+1,D=new Float32Array(M),T=new Int16Array(M),P=0,z=0;for(let B=L;B<=N;B++){let rt=i((B+.5-C)*c,u);P+=rt,D[z]=rt,z++}let tt=0;for(let B=0;B<D.length;B++){let rt=D[B]/P;tt+=rt,T[B]=o(rt)}T[s>>1]+=o(1-tt);let U=0;for(;U<T.length&&T[U]===0;)U++;let H=T.length-1;for(;H>0&&T[H]===0;)H--;let W=L+U,ot=H-U+1;g[S++]=W,g[S++]=ot,g.set(T.subarray(U,H+1),S),S+=ot}return g};t.filters=n}}),_n=Jt({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.convolve=void 0;var e=14,i=(o,n,r,s,l,a)=>{let h=0,u=0;for(let d=0;d<s;d++){let c=0;for(let v=0;v<l;v++){let _=a[c++],g=h+_*4|0,S=0,w=0,C=0,L=0;for(let N=a[c++];N>0;N--){let M=a[c++];S=S+M*o[g]|0,w=w+M*o[g+1]|0,C=C+M*o[g+2]|0,L=L+M*o[g+3]|0,g=g+4|0}n[u]=S+8192>>e,n[u+1]=w+8192>>e,n[u+2]=C+8192>>e,n[u+3]=L+8192>>e,u=u+s*4|0}u=(d+1)*4|0,h=(d+1)*r*4|0}};t.convolve=i}}),bn=Jt({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.lanczos2=t.lanczos=void 0;var e=mn(),i=yn(),o=gn(),n=_n(),r=(a,h,u=!1)=>{let d=h.width/a.width,c=h.height/a.height,v=o.filters(a.width,h.width,d,0,u),_=o.filters(a.height,h.height,c,0,u),g=new Uint8ClampedArray(h.width*a.height*4);n.convolve(a.data,g,a.width,a.height,h.width,v),n.convolve(g,h.data,a.height,h.width,h.height,_)},s=(a,h,u=0,d=0,c=a.width-u,v=a.height-d,_=0,g=0,S=h.width-_,w=h.height-g)=>{if(u=u|0,d=d|0,c=c|0,v=v|0,_=_|0,g=g|0,S=S|0,w=w|0,c<=0||v<=0||S<=0||w<=0)return;if(u===0&&d===0&&c===a.width&&v===a.height&&_===0&&g===0&&S===h.width&&w===h.height){r(a,h);return}let C=i.createImage(c,v),L=i.createImage(S,w);e.copy(a,C,u,d),r(C,L),e.copy(L,h,0,0,L.width,L.height,_,g)};t.lanczos=s;var l=(a,h,u=0,d=0,c=a.width-u,v=a.height-d,_=0,g=0,S=h.width-_,w=h.height-g)=>{if(u=u|0,d=d|0,c=c|0,v=v|0,_=_|0,g=g|0,S=S|0,w=w|0,c<=0||v<=0||S<=0||w<=0)return;if(u===0&&d===0&&c===a.width&&v===a.height&&_===0&&g===0&&S===h.width&&w===h.height){r(a,h,!0);return}let C=i.createImage(c,v),L=i.createImage(S,w);e.copy(a,C,u,d),r(C,L,!0),e.copy(L,h,0,0,L.width,L.height,_,g)};t.lanczos2=l}}),Hi=(t=>(t.Bounce="bounce",t.Normal="normal",t))(Hi||{}),wn=tn(Hi),Wi=ht({autoplay:I(_e()),defaultTheme:I(X()),direction:I($e([ui(1),ui(-1)])),hover:I(_e()),id:X(),intermission:I(ut()),loop:I($e([_e(),ut()])),playMode:I(wn),speed:I(ut()),themeColor:I(X())}),Cn=ht({animations:Ft(X()),id:X()}),Sn=ht({activeAnimationId:I(X()),animations:Ft(Wi),author:I(X()),custom:I(nn(X(),Qo())),description:I(X()),generator:I(X()),keywords:I(X()),revision:I(ut()),themes:I(Ft(Cn)),states:I(Ft(X())),version:I(X())}),Zi=sn(Wi,["id"]),At=ht({state:X()}),Ln=At,kn=Zt([At,ht({ms:ut()})]),xn=Zt([At,ht({count:ut()})]),An=At,$n=At,On=At,En=Zt([At,ht({threshold:I(Ft(ut([Ee(0),Oe(1)])))})]),Pn=ht({onAfter:I(kn),onClick:I(Ln),onComplete:I(On),onEnter:I(xn),onMouseEnter:I(An),onMouseLeave:I($n),onShow:I(En)}),In=Zt([Zi,ht({playOnScroll:I(ci([ut([Ee(0),Oe(1)]),ut([Ee(0),Oe(1)])])),segments:I($e([ci([ut(),ut()]),X()]))})]);Zt([Pn,ht({animationId:I(X()),playbackSettings:In})]);var Mn={jpeg:"image/jpeg",png:"image/png",gif:"image/gif",bmp:"image/bmp",svg:"image/svg+xml",webp:"image/webp",mpeg:"audio/mpeg",mp3:"audio/mp3"},pi={jpeg:[255,216,255],png:[137,80,78,71,13,10,26,10],gif:[71,73,70],bmp:[66,77],webp:[82,73,70,70,87,69,66,80],svg:[60,63,120],mp3:[73,68,51,3,0,0,0,0],mpeg:[73,68,51,3,0,0,0,0]},Tn=t=>{let e=null,i=[];if(!t)return null;let o=t.substring(t.indexOf(",")+1);typeof window>"u"?e=Buffer.from(o,"base64").toString("binary"):e=atob(o);let n=new Uint8Array(e.length);for(let r=0;r<e.length;r+=1)n[r]=e.charCodeAt(r);i=Array.from(n.subarray(0,8));for(let r in pi){let s=pi[r];if(s&&i.every((l,a)=>l===s[a]))return Mn[r]}return null},Fe=class extends Error{constructor(t,e){super(t),vn(this,"code"),this.name="[dotlottie-js]",this.code=e}};function Ji(t){let e;if(typeof window>"u")e=Buffer.from(t).toString("base64");else{let i=Array.prototype.map.call(t,o=>String.fromCharCode(o)).join("");e=window.btoa(i)}return`data:${Tn(e)};base64,${e}`}function fi(t){return"w"in t&&"h"in t&&!("xt"in t)&&"p"in t}function Pe(t){return!("h"in t)&&!("w"in t)&&"p"in t&&"e"in t&&"u"in t&&"id"in t}async function Gt(t,e=()=>!0){if(!(t instanceof Uint8Array))throw new Fe("DotLottie not found","INVALID_DOTLOTTIE");return await new Promise((i,o)=>{Jo(t,{filter:e},(n,r)=>{n&&o(n),i(r)})})}async function Ve(t,e,i){if(!(t instanceof Uint8Array))throw new Fe("DotLottie not found","INVALID_DOTLOTTIE");return(await Gt(t,o=>o.name===e&&(!i||i(o))))[e]}async function Ie(t){let e="manifest.json",i=(await Gt(t,o=>o.name===e))[e];if(!(typeof i>"u"))return JSON.parse(Ut(i,!1))}async function jn(t){if(!(t instanceof Uint8Array))return{success:!1,error:"DotLottie not found"};let e=await Ie(t);if(typeof e>"u")return{success:!1,error:"Invalid .lottie file, manifest.json is missing"};let i=an(Sn,e);return i.success?{success:!0}:{success:!1,error:`Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify(Go(i.error).nested,null,2)}`}}async function vi(t){let e=new Uint8Array(t),i=await jn(e);if(i.error)throw new Fe(i.error,"INVALID_DOTLOTTIE");return e}async function Nn(t,e){let i=await Gt(t,n=>{let r=n.name.replace("audio/","");return n.name.startsWith("audio/")&&(!e||e({...n,name:r}))}),o={};for(let n in i){let r=i[n];if(r instanceof Uint8Array){let s=n.replace("audio/","");o[s]=Ji(r)}}return o}async function zn(t,e){var i;let o=new Map;for(let[r,s]of Object.entries(e))for(let l of s.assets||[])if(Pe(l)){let a=l.p;o.has(a)||o.set(a,new Set),(i=o.get(a))==null||i.add(r)}let n=await Nn(t,r=>o.has(r.name));for(let[r,s]of o){let l=n[r];if(l)for(let a of s){let h=e[a];for(let u of(h==null?void 0:h.assets)||[])Pe(u)&&u.p===r&&(u.p=l,u.u="",u.e=1)}}}async function Un(t,e){let i=await Gt(t,n=>{let r=n.name.replace("images/","");return n.name.startsWith("images/")&&(!e||e({...n,name:r}))}),o={};for(let n in i){let r=i[n];if(r instanceof Uint8Array){let s=n.replace("images/","");o[s]=Ji(r)}}return o}async function Rn(t,e){var i;let o=new Map;for(let[r,s]of Object.entries(e))for(let l of s.assets||[])if(fi(l)){let a=l.p;o.has(a)||o.set(a,new Set),(i=o.get(a))==null||i.add(r)}let n=await Un(t,r=>o.has(r.name));for(let[r,s]of o){let l=n[r];if(l)for(let a of s){let h=e[a];for(let u of(h==null?void 0:h.assets)||[])fi(u)&&u.p===r&&(u.p=l,u.u="",u.e=1)}}}async function Dn(t,e,{inlineAssets:i}={},o){let n=`animations/${e}.json`,r=await Ve(t,n,o);if(typeof r>"u")return;let s=JSON.parse(Ut(r,!1));if(!i)return s;let l={[e]:s};return await Rn(t,l),await zn(t,l),s}async function Bn(t,e,i){let o=`themes/${e}.json`,n=await Ve(t,o,i);if(!(typeof n>"u"))return JSON.parse(Ut(n,!1))}async function Fn(t,e){let i={},o=await Gt(t,n=>{let r=n.name.replace("states/","").replace(".json","");return n.name.startsWith("states/")&&(!e||e({...n,name:r}))});for(let n in o){let r=o[n];if(r instanceof Uint8Array){let s=n.replace("states/","").replace(".json","");i[s]=Ut(r,!1)}}return i}async function Vn(t,e,i){let o=`states/${e}.json`,n=await Ve(t,o,i);return typeof n>"u"?void 0:JSON.parse(Ut(n,!1))}fn(bn());function O(t,e="dotLottie-common"){return new Error(`[${e}]: ${t}`)}function Et(t,e="dotLottie-common",...i){console.error(`[${e}]:`,t,...i)}function j(t,e="dotLottie-common",...i){console.warn(`[${e}]:`,t,...i)}function qn(t=""){let e=t.trim(),i=e.lastIndexOf("/"),o=e.substring(i+1),n=o.indexOf(".");return n!==-1?o.substring(0,n):o}function ne(t){return["v","ip","op","layers","fr","w","h"].every(e=>Object.prototype.hasOwnProperty.call(t,e))}function Hn(t){let e=t.assets;return e?e.some(i=>Pe(i)):!1}function Wn(t){try{let e=JSON.parse(t);return ne(e)}catch{return!1}}function $r(t,e){let i=Object.keys(t).find(o=>t[o]===e);if(i===void 0)throw new Error("Value not found in the object.");return i}function be(t){return JSON.parse(JSON.stringify(t))}var Zn=class{constructor(){y(this,"_dotLottie");y(this,"_animationsMap",new Map);y(this,"_themeMap",new Map);y(this,"_stateMachinesMap",new Map);y(this,"_manifest")}get dotLottie(){return this._dotLottie}get animationsMap(){return this._animationsMap}get themeMap(){return this._themeMap}get stateMachinesMap(){return this._stateMachinesMap}get manifest(){return this._manifest}async loadFromUrl(t){let e=await fetch(t,{method:"GET",mode:"cors"});if(!e.ok)throw new Error(`Failed to load dotLottie from ${t} with status ${e.status}`);let i=e.headers.get("content-type");if(i!=null&&i.includes("application/json")){let o=await e.json();if(!ne(o))throw new Error(`Invalid lottie JSON at ${t}`);let n=qn(t);this._animationsMap.set(n,o);let r={activeAnimationId:n,animations:[{id:n}]};this._manifest=r}else{this._dotLottie=await vi(await e.arrayBuffer());let o=await Ie(this._dotLottie);if(!o)throw new Error("Manifest not found");this._manifest=o}}loadFromLottieJSON(t){if(!ne(t))throw new Error("Invalid lottie JSON");let e="my-animation";this._animationsMap.set(e,t);let i={activeAnimationId:e,animations:[{id:e}]};this._manifest=i}async loadFromArrayBuffer(t){this._dotLottie=await vi(t);let e=await Ie(this._dotLottie);if(!e)throw new Error("Manifest not found");this._manifest=e}async getAnimation(t){if(this._animationsMap.get(t))return this._animationsMap.get(t);if(!this._dotLottie)return;let e=await Dn(this._dotLottie,t,{inlineAssets:!0});return e&&this._animationsMap.set(t,e),e}async getTheme(t){if(this._themeMap.get(t))return this._themeMap.get(t);if(!this._dotLottie)return;let e=await Bn(this._dotLottie,t);return e&&this._themeMap.set(t,e),e}async getStateMachines(){if(!this._dotLottie)return;let t=await Fn(this._dotLottie);for(let e in t)if(e){let i=t[e];if(i){let o=JSON.parse(i);if(o){let n=o.descriptor.id;this._stateMachinesMap.get(n)||this._stateMachinesMap.set(n,o)}}}return Array.from(this._stateMachinesMap.values())}async getStateMachine(t){if(this._stateMachinesMap.get(t))return this._stateMachinesMap.get(t);if(!this._dotLottie)return;let e=await Vn(this._dotLottie,t);return e&&this._stateMachinesMap.set(e.descriptor.id,e),e}};function ue(){throw new Error("Cycle detected")}function qe(){if(Tt>1)Tt--;else{for(var t,e=!1;Vt!==void 0;){var i=Vt;for(Vt=void 0,Me++;i!==void 0;){var o=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&Ki(i))try{i.c()}catch(n){e||(t=n,e=!0)}i=o}}if(Me=0,Tt--,e)throw t}}var R=void 0,Vt=void 0,Tt=0,Me=0,re=0;function Gi(t){if(R!==void 0){var e=t.n;if(e===void 0||e.t!==R)return e={i:0,S:t,p:R.s,n:void 0,t:R,e:void 0,x:void 0,r:e},R.s!==void 0&&(R.s.n=e),R.s=e,t.n=e,32&R.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=R.s,e.n=void 0,R.s.n=e,R.s=e),e}}function nt(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}nt.prototype.h=function(){return!0};nt.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};nt.prototype.U=function(t){if(this.t!==void 0){var e=t.e,i=t.x;e!==void 0&&(e.x=i,t.e=void 0),i!==void 0&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i)}};nt.prototype.subscribe=function(t){var e=this;return Kn(function(){var i=e.value,o=32&this.f;this.f&=-33;try{t(i)}finally{this.f|=o}})};nt.prototype.valueOf=function(){return this.value};nt.prototype.toString=function(){return this.value+""};nt.prototype.toJSON=function(){return this.value};nt.prototype.peek=function(){return this.v};Object.defineProperty(nt.prototype,"value",{get:function(){var t=Gi(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(R instanceof $t&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){Me>100&&ue(),this.v=t,this.i++,re++,Tt++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{qe()}}}});function Jn(t){return new nt(t)}function Ki(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Yi(t){for(var e=t.s;e!==void 0;e=e.n){var i=e.S.n;if(i!==void 0&&(e.r=i),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function Xi(t){for(var e=t.s,i=void 0;e!==void 0;){var o=e.p;e.i===-1?(e.S.U(e),o!==void 0&&(o.n=e.n),e.n!==void 0&&(e.n.p=o)):i=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=o}t.s=i}function $t(t){nt.call(this,void 0),this.x=t,this.s=void 0,this.g=re-1,this.f=4}($t.prototype=new nt).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===re))return!0;if(this.g=re,this.f|=1,this.i>0&&!Ki(this))return this.f&=-2,!0;var t=R;try{Yi(this),R=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return R=t,Xi(this),this.f&=-2,!0};$t.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}nt.prototype.S.call(this,t)};$t.prototype.U=function(t){if(this.t!==void 0&&(nt.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};$t.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};$t.prototype.peek=function(){if(this.h()||ue(),16&this.f)throw this.v;return this.v};Object.defineProperty($t.prototype,"value",{get:function(){1&this.f&&ue();var t=Gi(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function Qi(t){var e=t.u;if(t.u=void 0,typeof e=="function"){Tt++;var i=R;R=void 0;try{e()}catch(o){throw t.f&=-2,t.f|=8,He(t),o}finally{R=i,qe()}}}function He(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,Qi(t)}function Gn(t){if(R!==this)throw new Error("Out-of-order effect");Xi(this),R=t,this.f&=-2,8&this.f&&He(this),qe()}function Kt(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}Kt.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};Kt.prototype.S=function(){1&this.f&&ue(),this.f|=1,this.f&=-9,Qi(this),Yi(this),Tt++;var t=R;return R=this,Gn.bind(this,t)};Kt.prototype.N=function(){2&this.f||(this.f|=2,this.o=Vt,Vt=this)};Kt.prototype.d=function(){this.f|=8,1&this.f||He(this)};function Kn(t){var e=new Kt(t);try{e.c()}catch(i){throw e.d(),i}return e.d.bind(e)}var Yn=class{constructor(t){y(this,"_state");y(this,"_prevState");this._prevState=t,this._state=Jn(t)}setState(t){this._prevState=this._state.value,this._state.value=t}subscribe(t){return this._state.subscribe(e=>t(e,this._prevState))}};async function Xn(t,e){let[{DotLottieStateMachineManager:i}]=await Promise.all([yt(()=>import("./dotlottie-state-machine-manager-2E7RUGJG-NTQ25VSR-BzjuGSZ_.js"),__vite__mapDeps([0,1]))]);if(!t.length)throw O("No state machines available inside this .lottie!");return new i(t,e)}var Qn={name:"@dotlottie/common",version:"0.7.11",type:"module",description:"",author:"Afsal <afsal@lottiefiles.com>, Sam Osborne <sam@lottiefiles.com>",license:"MIT",engines:{node:">18.0.0"},module:"dist/index.js",main:"dist/index.js",types:"dist/index.d.ts",files:["dist"],keywords:[],scripts:{build:"tsup",dev:"tsup --watch",lint:"eslint .","type-check":"tsc --noEmit"},dependencies:{"@dotlottie/dotlottie-js":"^0.7.0","@preact/signals-core":"^1.2.3",howler:"^2.2.3","lottie-web":"^5.12.2",xstate:"^4.38.1"},devDependencies:{"@lottiefiles/lottie-types":"^1.2.0","@types/howler":"^2.2.8",tsup:"^7.2.0",typescript:"^4.7.4"},publishConfig:{access:"public"}},gt=(t=>(t.Complete="complete",t.DataFail="data_fail",t.DataReady="data_ready",t.Error="error",t.Frame="frame",t.Freeze="freeze",t.LoopComplete="loopComplete",t.Pause="pause",t.Play="play",t.Ready="ready",t.Stop="stop",t.VisibilityChange="visibilityChange",t))(gt||{}),It=(t=>(t.Completed="completed",t.Error="error",t.Fetching="fetching",t.Frozen="frozen",t.Initial="initial",t.Loading="loading",t.Paused="paused",t.Playing="playing",t.Ready="ready",t.Stopped="stopped",t))(It||{}),to=(t=>(t.Bounce="bounce",t.Normal="normal",t))(to||{}),at={autoplay:!1,direction:1,hover:!1,intermission:0,loop:!1,playMode:"normal",speed:1,defaultTheme:""},eo={activeStateId:"",autoplay:!1,currentState:"initial",frame:0,seeker:0,direction:1,hover:!1,loop:!1,playMode:"normal",speed:1,background:"transparent",intermission:0,currentAnimationId:void 0,visibilityPercentage:0},mi=class{constructor(t,e,i){y(this,"_lottie");y(this,"_src");y(this,"_animationConfig");y(this,"_prevUserPlaybackOptions",{});y(this,"_userPlaybackOptions");y(this,"_hover",!1);y(this,"_loop",!1);y(this,"_counter",0);y(this,"_intermission",0);y(this,"_counterInterval",null);y(this,"_container",null);y(this,"_name");y(this,"_mode","normal");y(this,"_background","transparent");y(this,"_animation");y(this,"_defaultTheme");y(this,"_activeAnimationId");y(this,"_currentAnimationId");y(this,"_testId");y(this,"_listeners",new Map);y(this,"_currentState","initial");y(this,"_stateBeforeFreeze","initial");y(this,"state",new Yn(eo));y(this,"_light",!1);y(this,"_worker",!1);y(this,"_dotLottieLoader",new Zn);y(this,"_activeStateId");y(this,"_inInteractiveMode",!1);y(this,"_scrollTicking",!1);y(this,"_scrollCallback");y(this,"_onShowIntersectionObserver");y(this,"_visibilityPercentage",0);y(this,"_audios",[]);y(this,"_stateMachineManager");typeof t=="string"?this._src=t:this._src=be(t),i!=null&&i.testId&&(this._testId=i.testId),this._defaultTheme=(i==null?void 0:i.defaultTheme)||"",this._userPlaybackOptions=this._validatePlaybackOptions(i||{}),typeof(i==null?void 0:i.activeAnimationId)=="string"&&(this._activeAnimationId=i.activeAnimationId),this._container=e||null,typeof(i==null?void 0:i.background)=="string"&&this.setBackground(i.background),typeof(i==null?void 0:i.activeStateId)<"u"&&(this._activeStateId=i.activeStateId);let{rendererSettings:o,...n}=i||{};this._animationConfig={loop:!1,autoplay:!1,renderer:"svg",rendererSettings:{clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0,filterSize:{width:"200%",height:"200%",x:"-50%",y:"-50%"},...o},...n},i!=null&&i.light&&(this._light=i.light),i!=null&&i.worker&&(this._worker=i.worker),this._listenToHover(),this._listenToVisibilityChange()}_listenToHover(){var t,e,i,o;let n=()=>{this._hover&&this.currentState!=="playing"&&this.play()},r=()=>{this._hover&&this.currentState==="playing"&&this.stop()};(t=this._container)==null||t.removeEventListener("mouseenter",n),(e=this._container)==null||e.removeEventListener("mouseleave",r),(i=this._container)==null||i.addEventListener("mouseleave",r),(o=this._container)==null||o.addEventListener("mouseenter",n)}_onVisibilityChange(){!this._lottie||typeof document>"u"||(document.hidden&&this.currentState==="playing"?this.freeze():this.currentState==="frozen"&&this.unfreeze())}_listenToVisibilityChange(){typeof document<"u"&&typeof document.hidden<"u"&&document.addEventListener("visibilitychange",()=>this._onVisibilityChange())}_getOption(t){var e;if(typeof this._userPlaybackOptions[t]<"u")return this._userPlaybackOptions[t];let i=(e=this._dotLottieLoader.manifest)==null?void 0:e.animations.find(o=>o.id===this._currentAnimationId);return i&&typeof i[t]<"u"?i[t]:at[t]}_getPlaybackOptions(){let t={};for(let e in at)typeof at[e]<"u"&&(t[e]=this._getOption(e));return t}_setPlayerState(t){var e,i,o;let n=t(this._getPlaybackOptions());try{Zi._parse(n)}catch{j(`Invalid PlaybackOptions, ${JSON.stringify(n,null,2)}`);return}typeof n.defaultTheme<"u"&&(this._defaultTheme=n.defaultTheme),typeof n.playMode<"u"&&(this._mode=n.playMode),typeof n.intermission<"u"&&(this._intermission=n.intermission),typeof n.hover<"u"&&(this._hover=n.hover),typeof n.loop<"u"&&(this.clearCountTimer(),this._loop=n.loop,this._counter=0,(e=this._lottie)==null||e.setLoop(typeof n.loop=="number"?!0:n.loop)),typeof n.speed<"u"&&((i=this._lottie)==null||i.setSpeed(n.speed)),typeof n.autoplay<"u"&&this._lottie&&(this._lottie.autoplay=n.autoplay),typeof n.direction<"u"&&((o=this._lottie)==null||o.setDirection(n.direction))}_getOptionsFromAnimation(t){let{id:e,...i}=t;return{...at,...i}}_updateTestData(){!this._testId||!this._lottie||(window.dotLottiePlayer||(window.dotLottiePlayer={[this._testId]:{}}),window.dotLottiePlayer[this._testId]={direction:this._lottie.playDirection,currentState:this._currentState,loop:this.loop,mode:this._mode,speed:this._lottie.playSpeed})}setContainer(t){t!==this._container&&(this._container=t,this.setBackground(this._background),this._listenToHover())}get currentState(){return this._currentState}clearCountTimer(){this._counterInterval&&clearInterval(this._counterInterval)}setCurrentState(t){this._currentState=t,this._notify(),this._updateTestData()}static isPathJSON(t){var e;return((e=t.split(".").pop())==null?void 0:e.toLowerCase())==="json"}get src(){return this._src}updateSrc(t){this._src!==t&&(typeof t=="string"?this._src=t:this._src=be(t),this._activeAnimationId=void 0,this._currentAnimationId=void 0,this.load())}get intermission(){return this._intermission}get hover(){return this._hover}setHover(t){typeof t=="boolean"&&(this._hover=t,this._userPlaybackOptions.hover=t,this._notify())}setIntermission(t){this._intermission=t,this._userPlaybackOptions.intermission=t,this._notify()}get mode(){return this._mode}get animations(){return this._dotLottieLoader.animationsMap}get themes(){return this._dotLottieLoader.themeMap}setMode(t){typeof t=="string"&&(this._mode=t,this._userPlaybackOptions.playMode=t,this._setPlayerState(()=>({playMode:t})),this._notify(),this._updateTestData())}get container(){if(this._container)return this._container}goToAndPlay(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){j("goToAndPlay() Can't use whilst loading.");return}this._lottie.goToAndPlay(t,e,i),this.setCurrentState("playing")}goToAndStop(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){j("goToAndStop() Can't use whilst loading.");return}this._lottie.goToAndStop(t,e,i),this.setCurrentState("stopped")}seek(t){if(!this._lottie||["loading"].includes(this._currentState)){j("seek() Can't use whilst loading.");return}let e=t;typeof e=="number"&&(e=Math.round(e));let i=/^(\d+)(%?)$/u.exec(e.toString());if(!i)return;let o=i[2]==="%"?this.totalFrames*Number(i[1])/100:i[1];o!==void 0&&(this._lottie.goToAndPlay(o,!0),this.currentState==="playing"?this.play():this.currentState==="frozen"?this.freeze():this.pause())}_areNumbersInRange(t,e){return t>=0&&t<=1&&e>=0&&e<=1}_updatePosition(t,e,i){let[o,n]=t??[0,this.totalFrames-1],[r,s]=e??[0,1];if(!this._areNumbersInRange(r,s)){Et("threshold values must be between 0 and 1");return}if(this.container){let{height:l,top:a}=this.container.getBoundingClientRect(),h=window.innerHeight-a,u=window.innerHeight+l,d=h/u,c=o+Math.round((d-r)/(s-r)*(n-o));i&&i(d),this.goToAndStop(c,!0),(c>=n||d>=s)&&this._handleAnimationComplete()}this._scrollTicking=!1}_requestTick(t,e,i){this._scrollTicking||(requestAnimationFrame(()=>this._updatePosition(t,e,i)),this._scrollTicking=!0)}playOnScroll(t){this.stop(),this._scrollCallback&&this.stopPlayOnScroll(),this._scrollCallback=()=>this._requestTick(t==null?void 0:t.segments,t==null?void 0:t.threshold,t==null?void 0:t.positionCallback),window.addEventListener("scroll",this._scrollCallback)}stopPlayOnScroll(){this._scrollCallback&&(window.removeEventListener("scroll",this._scrollCallback),this._scrollCallback=void 0)}stopPlayOnShow(){this._onShowIntersectionObserver&&(this._onShowIntersectionObserver.disconnect(),this._onShowIntersectionObserver=void 0)}addIntersectionObserver(t){if(!this.container)throw O("Can't play on show, player container element not available.");let e={root:null,rootMargin:"0px",threshold:t!=null&&t.threshold?t.threshold:[0,1]},i=o=>{o.forEach(n=>{var r,s;this._visibilityPercentage=n.intersectionRatio*100,n.isIntersecting?(t!=null&&t.callbackOnIntersect&&t.callbackOnIntersect(this._visibilityPercentage),(r=this._container)==null||r.dispatchEvent(new Event("visibilityChange"))):t!=null&&t.callbackOnIntersect&&(t.callbackOnIntersect(0),(s=this._container)==null||s.dispatchEvent(new Event("visibilityChange")))})};this._onShowIntersectionObserver=new IntersectionObserver(i,e),this._onShowIntersectionObserver.observe(this.container)}playOnShow(t){var e;if(this.stop(),!this.container)throw O("Can't play on show, player container element not available.");this._onShowIntersectionObserver&&this.stopPlayOnShow(),this.addIntersectionObserver({threshold:(e=t==null?void 0:t.threshold)!=null?e:[],callbackOnIntersect:i=>{i===0?this.pause():this.play()}})}_validatePlaybackOptions(t){if(!t)return{};let e={};for(let[i,o]of Object.entries(t))switch(i){case"autoplay":typeof o=="boolean"&&(e.autoplay=o);break;case"direction":typeof o=="number"&&[1,-1].includes(o)&&(e.direction=o);break;case"loop":(typeof o=="boolean"||typeof o=="number")&&(e.loop=o);break;case"playMode":typeof o=="string"&&["normal","bounce"].includes(o)&&(e.playMode=o);break;case"speed":typeof o=="number"&&(e.speed=o);break;case"themeColor":typeof o=="string"&&(e.themeColor=o);break;case"hover":typeof o=="boolean"&&(e.hover=o);break;case"intermission":typeof o=="number"&&(e.intermission=o);break;case"defaultTheme":typeof o=="string"&&(e.defaultTheme=o);break}return this._requireValidPlaybackOptions(e),e}_requireAnimationsInTheManifest(){var t;if(!((t=this._dotLottieLoader.manifest)!=null&&t.animations.length))throw O("No animations found in manifest.")}_requireAnimationsToBeLoaded(){if(this._dotLottieLoader.animationsMap.size===0)throw O("No animations have been loaded.")}async play(t,e){var i,o;if(["initial","loading"].includes(this._currentState)){j("Player unable to play whilst loading.");return}if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),this._lottie&&!t){this._lottie.playDirection===-1&&this._lottie.currentFrame===0?this._lottie.goToAndPlay(this._lottie.totalFrames,!0):this._lottie.play(),this.setCurrentState("playing");return}if(typeof t=="number"){let n=(i=this._dotLottieLoader.manifest)==null?void 0:i.animations[t];if(!n)throw O("animation not found.");typeof e=="function"?await this.render({id:n.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(n))}):await this.render({id:n.id})}if(typeof t=="string"){let n=(o=this._dotLottieLoader.manifest)==null?void 0:o.animations.find(r=>r.id===t);if(!n)throw O("animation not found.");typeof e=="function"?await this.render({id:n.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(n))}):await this.render({id:n.id})}}playSegments(t,e){if(!this._lottie||["loading"].includes(this._currentState)){j("playSegments() Can't use whilst loading.");return}this._lottie.playSegments(t,e),this.setCurrentState("playing")}resetSegments(t){if(!this._lottie||["loading"].includes(this._currentState)){j("resetSegments() Can't use whilst loading.");return}this._lottie.resetSegments(t)}togglePlay(){this.currentState==="playing"?this.pause():this.play()}_getAnimationByIdOrIndex(t){var e,i;if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),typeof t=="number"){let o=(e=this._dotLottieLoader.manifest)==null?void 0:e.animations[t];if(!o)throw O("animation not found.");return o}if(typeof t=="string"){let o=(i=this._dotLottieLoader.manifest)==null?void 0:i.animations.find(n=>n.id===t);if(!o)throw O("animation not found.");return o}throw O("first param must be a number or string")}get activeAnimationId(){return this._getActiveAnimationId()}get currentAnimationId(){return this._currentAnimationId}get activeStateId(){return this._activeStateId}async _startInteractivity(t){if(!this._inInteractiveMode){Et("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");return}if(this._dotLottieLoader.stateMachinesMap.size===0&&await this._dotLottieLoader.getStateMachines(),this._dotLottieLoader.stateMachinesMap.size===0)throw O("No interactivity states are available.");if(t==="undefined")throw O("stateId is not specified.");this._stateMachineManager||(this._stateMachineManager=await Xn(Array.from(this._dotLottieLoader.stateMachinesMap.values()),this)),this._stateMachineManager.start(t)}enterInteractiveMode(t){var e;if(t)this._inInteractiveMode||(this._prevUserPlaybackOptions={...this._userPlaybackOptions}),this._inInteractiveMode&&((e=this._stateMachineManager)==null||e.stop()),this._activeStateId=t,this._inInteractiveMode=!0,this._startInteractivity(t);else throw O("stateId must be a non-empty string.")}exitInteractiveMode(){var t;this._inInteractiveMode&&(this._inInteractiveMode=!1,this._activeStateId="",(t=this._stateMachineManager)==null||t.stop(),this._userPlaybackOptions={},this._userPlaybackOptions={...this._prevUserPlaybackOptions},this._prevUserPlaybackOptions={},this.reset())}reset(){var t;let e=this._getActiveAnimationId(),i=(t=this._dotLottieLoader.manifest)==null?void 0:t.animations.find(o=>o.id===e);if(this._inInteractiveMode&&this.exitInteractiveMode(),!i)throw O("animation not found.");this.play(e)}previous(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw O("manifest not found.");if(this._inInteractiveMode){j("previous() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(o=>o.id===this._currentAnimationId);if(e===-1)throw O("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e-1+this._dotLottieLoader.manifest.animations.length)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw O("animation not found.");typeof t=="function"?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}next(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw O("manifest not found.");if(this._inInteractiveMode){j("next() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(o=>o.id===this._currentAnimationId);if(e===-1)throw O("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e+1)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw O("animation not found.");typeof t=="function"?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}getManifest(){return this._dotLottieLoader.manifest}resize(){if(!this._lottie||["loading"].includes(this._currentState)){j("resize() Can't use whilst loading.");return}this._lottie.resize()}stop(){if(!this._lottie||["loading"].includes(this._currentState)){j("stop() Can't use whilst loading.");return}this.clearCountTimer(),this._counter=0,this._setPlayerState(()=>({direction:this._getOption("direction")})),this._lottie.stop(),this.setCurrentState("stopped")}pause(){if(!this._lottie||["loading"].includes(this._currentState)){j("pause() Can't use whilst loading.");return}this.clearCountTimer(),this._lottie.pause(),this.setCurrentState("paused")}freeze(){if(!this._lottie||["loading"].includes(this._currentState)){j("freeze() Can't use whilst loading.");return}this.currentState!=="frozen"&&(this._stateBeforeFreeze=this.currentState),this._lottie.pause(),this.setCurrentState("frozen")}unfreeze(){if(!this._lottie||["loading"].includes(this._currentState)){j("unfreeze() Can't use whilst loading.");return}this._stateBeforeFreeze==="playing"?this.play():this.pause()}destroy(){var t,e;(t=this._container)!=null&&t.__lottie&&(this._container.__lottie.destroy(),this._container.__lottie=null),this._audios.length&&(this._audios.forEach(i=>{i.unload()}),this._audios=[]),this.clearCountTimer(),typeof document<"u"&&document.removeEventListener("visibilitychange",()=>this._onVisibilityChange()),this._counter=0,(e=this._lottie)==null||e.destroy(),this._lottie=void 0}getAnimationInstance(){return this._lottie}static getLottieWebVersion(){return`${Qn.dependencies["lottie-web"]}`}addEventListener(t,e){var i,o,n;this._listeners.has(t)||this._listeners.set(t,new Set),(i=this._listeners.get(t))==null||i.add(e);try{t==="complete"?(o=this._container)==null||o.addEventListener(t,e):(n=this._lottie)==null||n.addEventListener(t,e)}catch(r){Et(`addEventListener ${r}`)}}getState(){var t,e,i,o,n,r,s;return{autoplay:(e=(t=this._lottie)==null?void 0:t.autoplay)!=null?e:!1,currentState:this._currentState,frame:this._frame,visibilityPercentage:this._visibilityPercentage,seeker:this._seeker,direction:(o=(i=this._lottie)==null?void 0:i.playDirection)!=null?o:1,hover:this._hover,loop:this._loop||!1,playMode:this._mode,speed:(r=(n=this._lottie)==null?void 0:n.playSpeed)!=null?r:1,background:this._background,intermission:this._intermission,defaultTheme:this._defaultTheme,currentAnimationId:this._currentAnimationId,activeStateId:(s=this._activeStateId)!=null?s:""}}_notify(){this.state.setState(this.getState())}get totalFrames(){var t;return((t=this._lottie)==null?void 0:t.totalFrames)||0}get direction(){return this._lottie?this._lottie.playDirection:1}setDirection(t){this._requireValidDirection(t),this._setPlayerState(()=>({direction:t})),this._userPlaybackOptions.direction=t}get speed(){var t;return((t=this._lottie)==null?void 0:t.playSpeed)||1}setSpeed(t){this._requireValidSpeed(t),this._setPlayerState(()=>({speed:t})),this._userPlaybackOptions.speed=t}get autoplay(){var t,e;return(e=(t=this._lottie)==null?void 0:t.autoplay)!=null?e:!1}setAutoplay(t){if(this._requireValidAutoplay(t),!this._lottie||["loading"].includes(this._currentState)){j("setAutoplay() Can't use whilst loading.");return}this._setPlayerState(()=>({autoplay:t})),this._userPlaybackOptions.autoplay=t}toggleAutoplay(){if(!this._lottie||["loading"].includes(this._currentState)){j("toggleAutoplay() Can't use whilst loading.");return}this.setAutoplay(!this._lottie.autoplay)}get defaultTheme(){return this._defaultTheme}setDefaultTheme(t){this._setPlayerState(()=>({defaultTheme:t})),this._userPlaybackOptions.defaultTheme=t,this._animation&&this.render()}get loop(){return this._loop}setLoop(t){this._requireValidLoop(t),this._setPlayerState(()=>({loop:t})),this._userPlaybackOptions.loop=t}toggleLoop(){if(!this._lottie||["loading"].includes(this._currentState)){j("toggleLoop() Can't use whilst loading.");return}this.setLoop(!this._loop)}get background(){return this._background}setBackground(t){this._requireValidBackground(t),this._background=t,this._container&&(this._container.style.backgroundColor=t)}get _frame(){return this._lottie?this.currentState==="completed"?this.direction===-1?0:this._lottie.totalFrames:this._lottie.currentFrame:0}get _seeker(){return this._lottie?this._frame/this._lottie.totalFrames*100:0}async revertToManifestValues(t){var e;let i;!Array.isArray(t)||t.length===0?i=["autoplay","defaultTheme","direction","hover","intermission","loop","playMode","speed","activeAnimationId"]:i=t;let o=!1;if(i.includes("activeAnimationId")){let n=(e=this._dotLottieLoader.manifest)==null?void 0:e.activeAnimationId,r=this._getAnimationByIdOrIndex(n||0);this._activeAnimationId=n,await this._setCurrentAnimation(r.id),o=!0}i.forEach(n=>{switch(n){case"autoplay":delete this._userPlaybackOptions.autoplay,this.setAutoplay(this._getOption("autoplay"));break;case"defaultTheme":delete this._userPlaybackOptions.defaultTheme,this.setDefaultTheme(this._getOption("defaultTheme"));break;case"direction":delete this._userPlaybackOptions.direction,this.setDirection(this._getOption("direction"));break;case"hover":delete this._userPlaybackOptions.hover,this.setHover(this._getOption("hover"));break;case"intermission":delete this._userPlaybackOptions.intermission,this.setIntermission(this._getOption("intermission"));break;case"loop":delete this._userPlaybackOptions.loop,this.setLoop(this._getOption("loop"));break;case"playMode":delete this._userPlaybackOptions.playMode,this.setMode(this._getOption("playMode")),this.setDirection(this._getOption("direction"));break;case"speed":delete this._userPlaybackOptions.speed,this.setSpeed(this._getOption("speed"));break}}),o&&this.render()}removeEventListener(t,e){var i,o,n;try{t==="complete"?(i=this._container)==null||i.removeEventListener(t,e):(o=this._lottie)==null||o.removeEventListener(t,e),(n=this._listeners.get(t))==null||n.delete(e)}catch(r){Et("removeEventListener",r)}}_handleAnimationComplete(){var t;typeof this._loop=="number"&&this.stop();let e=this.direction===-1?0:this.totalFrames-1;this.goToAndStop(e,!0),this._counter=0,this.clearCountTimer(),this.setCurrentState("completed"),(t=this._container)==null||t.dispatchEvent(new Event("complete"))}addEventListeners(){var t;if(!this._lottie||["loading"].includes(this._currentState)){j("addEventListeners() Can't use whilst loading.");return}this._lottie.addEventListener("enterFrame",()=>{var e;if(!this._lottie){j("enterFrame event : Lottie is undefined.");return}Math.floor(this._lottie.currentFrame)===0&&this.direction===-1&&((e=this._container)==null||e.dispatchEvent(new Event("complete")),this.loop||this.setCurrentState("completed")),this._notify()}),this._lottie.addEventListener("loopComplete",()=>{var e;if(!this._lottie){j("loopComplete event : Lottie is undefined.");return}(e=this._container)==null||e.dispatchEvent(new Event("loopComplete")),this.intermission>0&&this.pause();let i=this._lottie.playDirection;if(typeof this._loop=="number"&&this._loop>0&&(this._counter+=this._mode==="bounce"?.5:1,this._counter>=this._loop)){this._handleAnimationComplete();return}this._mode==="bounce"&&typeof i=="number"&&(i=Number(i)*-1);let o=i===-1?this._lottie.totalFrames-1:0;this.intermission?(this.goToAndPlay(o,!0),this.pause(),this._counterInterval=window.setTimeout(()=>{this._lottie&&(this._setPlayerState(()=>({direction:i})),this.goToAndPlay(o,!0))},this._intermission)):(this._setPlayerState(()=>({direction:i})),this.goToAndPlay(i===-1?this.totalFrames-1:0,!0))}),this._lottie.addEventListener("complete",()=>{if(this._lottie&&this._loop===!1&&this._mode==="bounce"){if(this._counter+=.5,this._counter>=1){this._handleAnimationComplete();return}this._counterInterval=window.setTimeout(()=>{if(!this._lottie)return;let e=this._lottie.playDirection;this._mode==="bounce"&&typeof e=="number"&&(e=Number(e)*-1);let i=e===-1?this.totalFrames-1:0;this._setPlayerState(()=>({direction:e})),this.goToAndPlay(i,!0)},this._intermission)}else this._handleAnimationComplete()});for(let[e,i]of this._listeners)if(e==="complete")for(let o of i)(t=this._container)==null||t.addEventListener(e,o);else for(let o of i)this._lottie.addEventListener(e,o)}async _setCurrentAnimation(t){this._currentState="loading";let e=await this._dotLottieLoader.getAnimation(t);this._currentAnimationId=t,this._animation=e,this._currentState="ready"}async _getAudioFactory(){if(this._animation&&Hn(this._animation)){let{DotLottieAudio:t}=await yt(()=>import("./dotlottie-audio-75C54RUV-C4ThZgkY.js"),__vite__mapDeps([2,3]));return e=>{let i=new t({src:[e]});return this._audios.push(i),i}}return null}async render(t){var e,i,o,n,r,s,l,a,h,u,d,c,v,_,g,S,w,C;if(t!=null&&t.id)await this._setCurrentAnimation(t.id);else if(!this._animation)throw O("no animation selected");let L=(e=at.loop)!=null?e:!1,N=(i=at.autoplay)!=null?i:!1,M=(o=at.playMode)!=null?o:"normal",D=(n=at.intermission)!=null?n:0,T=(r=at.hover)!=null?r:!1,P=(s=at.direction)!=null?s:1,z=(l=at.speed)!=null?l:1,tt=(a=at.defaultTheme)!=null?a:"";L=(h=t==null?void 0:t.loop)!=null?h:this._getOption("loop"),N=(u=t==null?void 0:t.autoplay)!=null?u:this._getOption("autoplay"),M=(d=t==null?void 0:t.playMode)!=null?d:this._getOption("playMode"),D=(c=t==null?void 0:t.intermission)!=null?c:this._getOption("intermission"),T=(v=t==null?void 0:t.hover)!=null?v:this._getOption("hover"),P=(_=t==null?void 0:t.direction)!=null?_:this._getOption("direction"),z=(g=t==null?void 0:t.speed)!=null?g:this._getOption("speed"),tt=(S=t==null?void 0:t.defaultTheme)!=null?S:this._getOption("defaultTheme");let U={...this._animationConfig,autoplay:T?!1:N,loop:typeof L=="number"?!0:L,renderer:this._worker?"svg":(w=this._animationConfig.renderer)!=null?w:"svg"},[H,W,ot]=await Promise.all([this._dotLottieLoader.getTheme(tt),this._getLottiePlayerInstance(),this._getAudioFactory()]);if(H&&this._animation?(this._animation=be(this._animation),this._animation.slots=H):this._animation=await this._dotLottieLoader.getAnimation((C=this._currentAnimationId)!=null?C:""),this._activeStateId&&!this._inInteractiveMode){this.enterInteractiveMode(this._activeStateId);return}this.destroy(),this._setPlayerState(()=>({defaultTheme:tt,playMode:M,intermission:D,hover:T,loop:L})),ot?this._lottie=W.loadAnimation({...U,container:this._container,animationData:this._animation,audioFactory:ot}):this._lottie=W.loadAnimation({...U,container:this._container,animationData:this._animation}),typeof this._lottie.resetSegments>"u"&&(this._lottie.resetSegments=()=>{var B;(B=this._lottie)==null||B.playSegments([0,this._lottie.totalFrames],!0)}),this.addEventListeners(),this._container&&(this._container.__lottie=this._lottie),this._setPlayerState(()=>({direction:P,speed:z})),N&&!T&&(L===!1&&P===-1?this.play():this.setCurrentState("playing")),this._updateTestData()}async _getLottiePlayerInstance(){var t;let e=(t=this._animationConfig.renderer)!=null?t:"svg",i;if(this._worker)return e!=="svg"&&j("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."),i=await yt(()=>import("./lottie_worker-Q23FJ6ZR-YP5OKMTN-Dl7j5H7l.js"),__vite__mapDeps([4,3])),i.default;switch(e){case"svg":{this._light?i=await yt(()=>import("./lottie_light-KMJEUZFY-TNG7ODX7-Cz6KFPKl.js"),__vite__mapDeps([5,3])):i=await yt(()=>import("./lottie_svg-MJGYILXD-NRTSROOT-Ci_7qTj4.js"),__vite__mapDeps([6,3]));break}case"canvas":{this._light?i=await yt(()=>import("./lottie_light_canvas-B5UTTNXA-PRI6IBWW-CV9yTcpO.js"),__vite__mapDeps([7,3])):i=await yt(()=>import("./lottie_canvas-CDSUBMCL-MZNYH5VV-iWywsrJi.js"),__vite__mapDeps([8,3]));break}case"html":{this._light?i=await yt(()=>import("./lottie_light_html-SLCECTRT-SYWXEBDN-Bl2Og0kV.js"),__vite__mapDeps([9,3])):i=await yt(()=>import("./lottie_html-X3TYKVQI-L6774NQS-DBjbmfli.js"),__vite__mapDeps([10,3]));break}default:throw new Error(`Invalid renderer: ${e}`)}return i.default}_getActiveAnimationId(){var t,e,i,o;let n=this._dotLottieLoader.manifest;return(o=(i=(t=this._activeAnimationId)!=null?t:n==null?void 0:n.activeAnimationId)!=null?i:(e=n==null?void 0:n.animations[0])==null?void 0:e.id)!=null?o:void 0}async load(t){if(this._currentState==="loading"){j("Loading in progress..");return}try{if(this.setCurrentState("loading"),typeof this._src=="string")if(Wn(this._src)){let i=JSON.parse(this._src);this._dotLottieLoader.loadFromLottieJSON(i)}else{let i=new URL(this._src,window.location.href);await this._dotLottieLoader.loadFromUrl(i.toString())}else if(typeof this._src=="object"&&ne(this._src))this._dotLottieLoader.loadFromLottieJSON(this._src);else throw O("Invalid src provided");if(!this._dotLottieLoader.manifest)throw O("No manifest found");let e=this._getActiveAnimationId();if(!e)throw O("No active animation found");await this._setCurrentAnimation(e),await this.render(t)}catch(e){this.setCurrentState("error"),e instanceof Error&&Et(`Error loading animation: ${e.message}`)}}setErrorState(t){this.setCurrentState("error"),Et(t)}_requireValidDirection(t){if(t!==-1&&t!==1)throw O("Direction can only be -1 (backwards) or 1 (forwards)")}_requireValidIntermission(t){if(t<0||!Number.isInteger(t))throw O("intermission must be a positive number")}_requireValidLoop(t){if(typeof t=="number"&&(!Number.isInteger(t)||t<0))throw O("loop must be a positive number or boolean")}_requireValidSpeed(t){if(typeof t!="number")throw O("speed must be a number")}_requireValidBackground(t){if(typeof t!="string")throw O("background must be a string")}_requireValidAutoplay(t){if(typeof t!="boolean")throw O("autoplay must be a boolean")}_requireValidPlaybackOptions(t){t.direction&&this._requireValidDirection(t.direction),t.intermission&&this._requireValidIntermission(t.intermission),t.loop&&this._requireValidLoop(t.loop),t.speed&&this._requireValidSpeed(t.speed)}},tr=Object.defineProperty,er=Object.getOwnPropertyDescriptor,J=(t,e,i,o)=>{for(var n=o>1?void 0:o?er(e,i):e,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(o?s(e,i,n):s(n))||n);return o&&n&&tr(e,i,n),n},ir=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},or=(t,e,i)=>{e.constructor.createProperty(i,t)};function Y(t){return(e,i)=>i!==void 0?or(t,e,i):ir(t,e)}function nr(t){return Y({...t,state:!0})}var rr=({finisher:t,descriptor:e})=>(i,o)=>{var n;if(o===void 0){let r=(n=i.originalKey)!==null&&n!==void 0?n:i.key,s=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return t!=null&&(s.finisher=function(l){t(l,r)}),s}{let r=i.constructor;e!==void 0&&Object.defineProperty(i,o,e(o)),t==null||t(r,o)}};function sr(t,e){return rr({descriptor:i=>{let o={get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(t))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){let n=typeof i=="symbol"?Symbol():"__"+i;o.get=function(){var r,s;return this[n]===void 0&&(this[n]=(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&s!==void 0?s:null),this[n]}}return o}})}var we;((we=window.HTMLSlotElement)===null||we===void 0?void 0:we.prototype.assignedElements)!=null;var ar={name:"@dotlottie/player-component",version:"2.7.12",description:"dotLottie animation player web component.",repository:"https://github.com/dotlottie/player-component.git",homepage:"https://dotlottie.io/players",bugs:"https://github.com/dotlottie/player-component/issues",author:"Jawish Hameed <jawish@lottiefiles.com>",license:"MIT",main:"dist/dotlottie-player.js",module:"dist/dotlottie-player.mjs",types:"dist/dotlottie-player.d.ts",files:["dist"],keywords:["dotlottie","animation","web component","component","lit-element","player"],scripts:{build:"tsup","cypress:open":"cypress open --component",dev:"tsup --watch",lint:"eslint .","lint:fix":"eslint --fix",test:"cypress run --component","type-check":"tsc --noEmit"},dependencies:{"@dotlottie/common":"workspace:*",lit:"^2.7.5"},devDependencies:{"@vitejs/plugin-legacy":"^4.1.0","axe-core":"^4.7.2",cypress:"^12.11.0","cypress-axe":"^1.4.0","cypress-ct-lit":"^0.3.2","lottie-web":"^5.12.2",terser:"^5.19.0",tsup:"^7.2.0",typescript:"^4.7.4",vite:"^4.3.9"},publishConfig:{access:"public"},browserslist:["> 3%"]},yi="dotlottie-player",V=class extends Bt{constructor(){super(...arguments);y(this,"defaultTheme","");y(this,"container");y(this,"playMode",to.Normal);y(this,"autoplay",!1);y(this,"background","transparent");y(this,"controls",!1);y(this,"direction",1);y(this,"hover",!1);y(this,"loop");y(this,"renderer","svg");y(this,"speed",1);y(this,"src");y(this,"intermission",0);y(this,"activeAnimationId",null);y(this,"light",!1);y(this,"worker",!1);y(this,"activeStateId");y(this,"_seeker",0);y(this,"_dotLottieCommonPlayer");y(this,"_io");y(this,"_loop");y(this,"_renderer","svg");y(this,"_unsubscribeListeners");y(this,"_hasMultipleAnimations",!1);y(this,"_hasMultipleThemes",!1);y(this,"_hasMultipleStates",!1);y(this,"_popoverIsOpen",!1);y(this,"_animationsTabIsOpen",!1);y(this,"_statesTabIsOpen",!1);y(this,"_styleTabIsOpen",!1);y(this,"_themesForCurrentAnimation",[]);y(this,"_statesForCurrentAnimation",[])}_parseLoop(e){let i=parseInt(e,10);return Number.isInteger(i)&&i>0?(this._loop=i,i):typeof e=="string"&&["true","false"].includes(e)?(this._loop=e==="true",this._loop):(j("loop must be a positive integer or a boolean"),!1)}_handleSeekChange(e){let i=e.currentTarget;try{let o=parseInt(i.value,10);if(!this._dotLottieCommonPlayer)return;let n=o/100*this._dotLottieCommonPlayer.totalFrames;this.seek(n)}catch{throw O("Error while seeking animation")}}_initListeners(){let e=this._dotLottieCommonPlayer;if(e===void 0){j("player not initialized - cannot add event listeners","dotlottie-player-component");return}this._unsubscribeListeners=e.state.subscribe((i,o)=>{this._seeker=i.seeker,this.requestUpdate(),o.currentState!==i.currentState&&this.dispatchEvent(new CustomEvent(i.currentState)),this.dispatchEvent(new CustomEvent(gt.Frame,{detail:{frame:i.frame,seeker:i.seeker}})),this.dispatchEvent(new CustomEvent(gt.VisibilityChange,{detail:{visibilityPercentage:i.visibilityPercentage}}))}),e.addEventListener("complete",()=>{this.dispatchEvent(new CustomEvent(gt.Complete))}),e.addEventListener("loopComplete",()=>{this.dispatchEvent(new CustomEvent(gt.LoopComplete))}),e.addEventListener("DOMLoaded",()=>{let i=this.getManifest();i&&i.themes&&(this._themesForCurrentAnimation=i.themes.filter(o=>o.animations.includes(this.getCurrentAnimationId()||""))),i&&i.states&&(this._hasMultipleStates=i.states.length>0,this._statesForCurrentAnimation=[],i.states.forEach(o=>{this._statesForCurrentAnimation.push(o)})),this.dispatchEvent(new CustomEvent(gt.Ready))}),e.addEventListener("data_ready",()=>{this.dispatchEvent(new CustomEvent(gt.DataReady))}),e.addEventListener("data_failed",()=>{this.dispatchEvent(new CustomEvent(gt.DataFail))}),window&&window.addEventListener("click",i=>this._clickOutListener(i))}async load(e,i,o){if(!this.shadowRoot)return;this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.destroy(),this._dotLottieCommonPlayer=new mi(e,this.container,{rendererSettings:i??{scaleMode:"noScale",clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0},hover:this.hasAttribute("hover")?this.hover:void 0,renderer:this.hasAttribute("renderer")?this._renderer:void 0,loop:this.hasAttribute("loop")?this._loop:void 0,direction:this.hasAttribute("direction")?this.direction===1?1:-1:void 0,speed:this.hasAttribute("speed")?this.speed:void 0,intermission:this.hasAttribute("intermission")?Number(this.intermission):void 0,playMode:this.hasAttribute("playMode")?this.playMode:void 0,autoplay:this.hasAttribute("autoplay")?this.autoplay:void 0,activeAnimationId:this.hasAttribute("activeAnimationId")?this.activeAnimationId:void 0,defaultTheme:this.hasAttribute("defaultTheme")?this.defaultTheme:void 0,light:this.light,worker:this.worker,activeStateId:this.hasAttribute("activeStateId")?this.activeStateId:void 0}),await this._dotLottieCommonPlayer.load(o);let n=this.getManifest();this._hasMultipleAnimations=this.animationCount()>1,n&&(n.themes&&(this._themesForCurrentAnimation=n.themes.filter(r=>r.animations.includes(this.getCurrentAnimationId()||"")),this._hasMultipleThemes=n.themes.length>0),n.states&&(this._hasMultipleStates=n.states.length>0,this._statesForCurrentAnimation=[],n.states.forEach(r=>{this._statesForCurrentAnimation.push(r)}))),this._initListeners()}getCurrentAnimationId(){var e;return(e=this._dotLottieCommonPlayer)==null?void 0:e.currentAnimationId}animationCount(){var e;return this._dotLottieCommonPlayer&&((e=this._dotLottieCommonPlayer.getManifest())==null?void 0:e.animations.length)||0}animations(){if(!this._dotLottieCommonPlayer)return[];let e=this._dotLottieCommonPlayer.getManifest();return(e==null?void 0:e.animations.map(i=>i.id))||[]}currentAnimation(){return!this._dotLottieCommonPlayer||!this._dotLottieCommonPlayer.currentAnimationId?"":this._dotLottieCommonPlayer.currentAnimationId}getState(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.getState():eo}getManifest(){var e;return(e=this._dotLottieCommonPlayer)==null?void 0:e.getManifest()}getLottie(){var e;return(e=this._dotLottieCommonPlayer)==null?void 0:e.getAnimationInstance()}getVersions(){return{lottieWebVersion:mi.getLottieWebVersion(),dotLottiePlayerVersion:`${ar.version}`}}previous(e){var i;(i=this._dotLottieCommonPlayer)==null||i.previous(e)}next(e){var i;(i=this._dotLottieCommonPlayer)==null||i.next(e)}reset(){var e;(e=this._dotLottieCommonPlayer)==null||e.reset()}play(e,i){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.play(e,i)}pause(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.pause()}stop(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stop()}playOnShow(e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnShow(e)}stopPlayOnShow(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnShow()}playOnScroll(e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnScroll(e)}stopPlayOnScroll(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnScroll()}seek(e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.seek(e)}snapshot(e=!0){if(!this.shadowRoot)return"";let i=this.shadowRoot.querySelector(".animation svg"),o=new XMLSerializer().serializeToString(i);if(e){let n=document.createElement("a");n.href=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(o)}`,n.download=`download_${this._seeker}.svg`,document.body.appendChild(n),n.click(),document.body.removeChild(n)}return o}setTheme(e){var i;(i=this._dotLottieCommonPlayer)==null||i.setDefaultTheme(e)}themes(){var e;if(!this._dotLottieCommonPlayer)return[];let i=this._dotLottieCommonPlayer.getManifest();return((e=i==null?void 0:i.themes)==null?void 0:e.map(o=>o.id))||[]}getDefaultTheme(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.defaultTheme:""}getActiveStateMachine(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.activeStateId:""}_freeze(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.freeze()}setSpeed(e=1){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setSpeed(e)}setDirection(e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setDirection(e)}setLooping(e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setLoop(e)}isLooping(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.loop:!1}togglePlay(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.togglePlay()}toggleLooping(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.toggleLoop()}setPlayMode(e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setMode(e)}enterInteractiveMode(e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.enterInteractiveMode(e)}exitInteractiveMode(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.exitInteractiveMode()}revertToManifestValues(e){var i;(i=this._dotLottieCommonPlayer)==null||i.revertToManifestValues(e)}static get styles(){return Eo}async firstUpdated(){var e;this.container=(e=this.shadowRoot)==null?void 0:e.querySelector("#animation"),"IntersectionObserver"in window&&(this._io=new IntersectionObserver(i=>{var o,n;i[0]!==void 0&&i[0].isIntersecting?((o=this._dotLottieCommonPlayer)==null?void 0:o.currentState)===It.Frozen&&this.play():((n=this._dotLottieCommonPlayer)==null?void 0:n.currentState)===It.Playing&&this._freeze()}),this._io.observe(this.container)),this.loop?this._parseLoop(this.loop):this.hasAttribute("loop")&&this._parseLoop("true"),this.renderer==="svg"?this._renderer="svg":this.renderer==="canvas"?this._renderer="canvas":this.renderer==="html"&&(this._renderer="html"),this.src&&await this.load(this.src)}disconnectedCallback(){var e,i;this._io&&(this._io.disconnect(),this._io=void 0),(e=this._dotLottieCommonPlayer)==null||e.destroy(),(i=this._unsubscribeListeners)==null||i.call(this),window&&window.removeEventListener("click",o=>this._clickOutListener(o))}_clickOutListener(e){!e.composedPath().some(i=>i instanceof HTMLElement?i.classList.contains("popover")||i.id==="lottie-animation-options":!1)&&this._popoverIsOpen&&(this._popoverIsOpen=!1,this.requestUpdate())}renderControls(){var e,i,o,n,r;let s=((e=this._dotLottieCommonPlayer)==null?void 0:e.currentState)===It.Playing,l=((i=this._dotLottieCommonPlayer)==null?void 0:i.currentState)===It.Paused;return x`
      <div id="lottie-controls" aria-label="lottie-animation-controls" class="toolbar">
        ${this._hasMultipleAnimations?x`
              <button @click=${()=>this.previous()} aria-label="Previous animation" class="btn-spacing-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:x``}
        <button
          id="lottie-play-button"
          @click=${()=>{this.togglePlay()}}
          class=${s||l?`active ${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`:`${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`}
          aria-label="play / pause animation"
        >
          ${s?x`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z"
                    fill="#20272C"
                  />
                  <path
                    d="M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z"
                    fill="#20272C"
                  />
                </svg>
              `:x`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z"
                    fill="#20272C"
                  />
                </svg>
              `}
        </button>
        ${this._hasMultipleAnimations?x`
              <button @click=${()=>this.next()} aria-label="Next animation" class="btn-spacing-right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:x``}
        <input
          id="lottie-seeker-input"
          class="seeker ${((o=this._dotLottieCommonPlayer)==null?void 0:o.direction)===-1?"to-left":""}"
          type="range"
          min="0"
          step="1"
          max="100"
          .value=${this._seeker}
          @input=${a=>this._handleSeekChange(a)}
          @mousedown=${()=>{this._freeze()}}
          @mouseup=${()=>{var a;(a=this._dotLottieCommonPlayer)==null||a.unfreeze()}}
          aria-valuemin="1"
          aria-valuemax="100"
          role="slider"
          aria-valuenow=${this._seeker}
          aria-label="lottie-seek-input"
          style=${`--seeker: ${this._seeker}`}
        />
        <button
          id="lottie-loop-toggle"
          @click=${()=>this.toggleLooping()}
          class=${(n=this._dotLottieCommonPlayer)!=null&&n.loop?"active btn-spacing-left":"btn-spacing-left"}
          aria-label="loop-toggle"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8654 2.31319C11.0607 2.11793 11.3772 2.11793 11.5725 2.31319L13.4581 4.19881C13.6534 4.39407 13.6534 4.71066 13.4581 4.90592L11.5725 6.79154C11.3772 6.9868 11.0607 6.9868 10.8654 6.79154C10.6701 6.59628 10.6701 6.27969 10.8654 6.08443L11.6162 5.33362H4V6.66695C4 7.03514 3.70152 7.33362 3.33333 7.33362C2.96514 7.33362 2.66666 7.03514 2.66666 6.66695L2.66666 4.66695C2.66666 4.29876 2.96514 4.00028 3.33333 4.00028H11.8454L10.8654 3.0203C10.6701 2.82504 10.6701 2.50846 10.8654 2.31319Z"
              fill="currentColor"
            />
            <path
              d="M12.4375 11.9999C12.8057 11.9999 13.1042 11.7014 13.1042 11.3332V9.33321C13.1042 8.96502 12.8057 8.66655 12.4375 8.66655C12.0693 8.66655 11.7708 8.96502 11.7708 9.33321V10.6665H4.15462L4.90543 9.91573C5.10069 9.72047 5.10069 9.40389 4.90543 9.20862C4.71017 9.01336 4.39359 9.01336 4.19832 9.20862L2.31271 11.0942C2.11744 11.2895 2.11744 11.6061 2.31271 11.8013L4.19832 13.687C4.39359 13.8822 4.71017 13.8822 4.90543 13.687C5.10069 13.4917 5.10069 13.1751 4.90543 12.9799L3.92545 11.9999H12.4375Z"
              fill="currentColor"
            />
          </svg>
        </button>
        ${this._hasMultipleAnimations||this._hasMultipleThemes||this._hasMultipleStates?x`
              <button
                id="lottie-animation-options"
                @click=${()=>{this._popoverIsOpen=!this._popoverIsOpen,this.requestUpdate()}}
                aria-label="options"
                class="btn-spacing-right"
                style=${`background-color: ${this._popoverIsOpen?"var(--lottie-player-toolbar-icon-hover-color)":""}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33337 11.6666C7.78109 11.6666 7.33337 12.1143 7.33337 12.6666C7.33337 13.2189 7.78109 13.6666 8.33337 13.6666C8.88566 13.6666 9.33337 13.2189 9.33337 12.6666C9.33337 12.1143 8.88566 11.6666 8.33337 11.6666Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 7.99992C7.33337 7.44763 7.78109 6.99992 8.33337 6.99992C8.88566 6.99992 9.33338 7.44763 9.33338 7.99992C9.33338 8.5522 8.88566 8.99992 8.33337 8.99992C7.78109 8.99992 7.33337 8.5522 7.33337 7.99992Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 3.33325C7.33337 2.78097 7.78109 2.33325 8.33337 2.33325C8.88566 2.33325 9.33338 2.78097 9.33338 3.33325C9.33338 3.88554 8.88566 4.33325 8.33337 4.33325C7.78109 4.33325 7.33337 3.88554 7.33337 3.33325Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:x``}
      </div>
      ${this._popoverIsOpen?x`
            <div
              id="popover"
              class="popover"
              tabindex="0"
              aria-label="lottie animations themes popover"
              style="min-height: ${this.themes().length>0?"84px":"auto"}"
            >
              ${!this._animationsTabIsOpen&&!this._styleTabIsOpen&&!this._statesTabIsOpen?x`
                    <button
                      class="popover-button"
                      tabindex="0"
                      aria-label="animations"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                      @keydown=${a=>{(a.code==="Space"||a.code==="Enter")&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate())}}
                    >
                      <div class="popover-button-text">Animations</div>
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                            fill="#4C5863"
                          />
                        </svg>
                      </div>
                    </button>
                  `:x``}
              ${this._hasMultipleThemes&&!this._styleTabIsOpen&&!this._animationsTabIsOpen&&!this._statesTabIsOpen?x` <button
                    class="popover-button"
                    aria-label="Themes"
                    @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                    @keydown=${a=>{(a.code==="Space"||a.code==="Enter")&&(this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">Themes</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`:""}
              ${this._hasMultipleStates&&!this._styleTabIsOpen&&!this._animationsTabIsOpen&&!this._statesTabIsOpen?x` <button
                    class="popover-button"
                    aria-label="States"
                    @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                    @keydown=${a=>{(a.code==="Space"||a.code==="Enter")&&(this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">States</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`:""}
              ${this._animationsTabIsOpen?x`<button
                      class="option-title-button"
                      aria-label="Back to main popover menu"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                    >
                      <div class="option-title-chevron">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                            fill="#20272C"
                          />
                        </svg>
                      </div>
                      <div>Animations</div>
                    </button>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this.animations().map(a=>x`
                            <li>
                              <button
                                class="option-button"
                                aria-label=${`${a}`}
                                @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(a),this.requestUpdate()}}
                                @keydown=${h=>{(h.code==="Space"||h.code==="Enter")&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(a),this.requestUpdate())}}
                              >
                                <div class="option-tick">
                                  ${this.currentAnimation()===a?x`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:x`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${a}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div> `:x``}
              ${this._styleTabIsOpen?x`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">Themes</div>
                        ${((r=this._dotLottieCommonPlayer)==null?void 0:r.defaultTheme)===""?x``:x`
                              <button
                                class="reset-btn"
                                @click=${()=>{this.setTheme(""),this.requestUpdate()}}
                              >
                                Reset
                              </button>
                            `}
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._themesForCurrentAnimation.map(a=>x`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${a.id}"
                                @click=${()=>{this.setTheme(a.id)}}
                                @keydown=${h=>{(h.code==="Space"||h.code==="Enter")&&this.setTheme(a.id)}}
                              >
                                <div class="option-tick">
                                  ${this.getDefaultTheme()===a.id?x`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:x`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${a.id}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:x``}
              ${this._statesTabIsOpen?x`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">States</div>
                        <button
                          class="reset-btn"
                          @click=${()=>{this.exitInteractiveMode(),this.requestUpdate()}}
                        >
                          Reset
                        </button>
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._statesForCurrentAnimation.map(a=>x`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${a}"
                                @click=${()=>{this.enterInteractiveMode(a)}}
                                @keydown=${h=>{(h.code==="Space"||h.code==="Enter")&&this.enterInteractiveMode(a)}}
                              >
                                <div class="option-tick">
                                  ${this.getActiveStateMachine()===a?x`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:x`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${a}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:x``}
            </div>
          `:x``}
    `}render(){var e;let i=this.controls?"main controls":"main",o=this.controls?"animation controls":"animation";return x`
      <div id="animation-container" class=${i} lang="en" role="img" aria-label="lottie-animation-container">
        <div id="animation" class=${o} style="background:${this.background};">
          ${((e=this._dotLottieCommonPlayer)==null?void 0:e.currentState)===It.Error?x` <div class="error">⚠️</div> `:void 0}
        </div>
        ${this.controls?this.renderControls():void 0}
      </div>
    `}};J([Y({type:String})],V.prototype,"defaultTheme",2),J([sr("#animation")],V.prototype,"container",2),J([Y()],V.prototype,"playMode",2),J([Y({type:Boolean})],V.prototype,"autoplay",2),J([Y({type:String})],V.prototype,"background",2),J([Y({type:Boolean})],V.prototype,"controls",2),J([Y({type:Number})],V.prototype,"direction",2),J([Y({type:Boolean})],V.prototype,"hover",2),J([Y({type:String})],V.prototype,"loop",2),J([Y({type:String})],V.prototype,"renderer",2),J([Y({type:Number})],V.prototype,"speed",2),J([Y({type:String})],V.prototype,"src",2),J([Y()],V.prototype,"intermission",2),J([Y({type:String})],V.prototype,"activeAnimationId",2),J([Y({type:Boolean})],V.prototype,"light",2),J([Y({type:Boolean})],V.prototype,"worker",2),J([Y({type:String})],V.prototype,"activeStateId",2),J([nr()],V.prototype,"_seeker",2);customElements.get(yi)||customElements.define(yi,V);/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/const lr=({candleVisible:t})=>A.jsxs("div",{className:"cake",children:[A.jsx("div",{className:"plate"}),A.jsx("div",{className:"layer layer-bottom"}),A.jsx("div",{className:"layer layer-middle"}),A.jsx("div",{className:"layer layer-top"}),A.jsx("div",{className:"icing"}),A.jsx("div",{className:"drip drip1"}),A.jsx("div",{className:"drip drip2"}),A.jsx("div",{className:"drip drip3"}),A.jsx("div",{id:"candle",className:"candle",children:t?A.jsx("div",{className:"flame"}):null})]});var io={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gi=bt.createContext&&bt.createContext(io),hr=["attr","size","title"];function dr(t,e){if(t==null)return{};var i=ur(t,e),o,n;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function ur(t,e){if(t==null)return{};var i={},o=Object.keys(t),n,r;for(r=0;r<o.length;r++)n=o[r],!(e.indexOf(n)>=0)&&(i[n]=t[n]);return i}function se(){return se=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},se.apply(this,arguments)}function _i(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,o)}return i}function ae(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?_i(Object(i),!0).forEach(function(o){cr(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):_i(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function cr(t,e,i){return e=pr(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function pr(t){var e=fr(t,"string");return typeof e=="symbol"?e:String(e)}function fr(t,e){if(typeof t!="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function oo(t){return t&&t.map((e,i)=>bt.createElement(e.tag,ae({key:i},e.attr),oo(e.child)))}function vr(t){return e=>bt.createElement(mr,se({attr:ae({},t.attr)},e),oo(t.child))}function mr(t){var e=i=>{var{attr:o,size:n,title:r}=t,s=dr(t,hr),l=n||i.size||"1em",a;return i.className&&(a=i.className),t.className&&(a=(a?a+" ":"")+t.className),bt.createElement("svg",se({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,o,s,{className:a,style:ae(ae({color:t.color||i.color},i.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),r&&bt.createElement("title",null,r),t.children)};return gi!==void 0?bt.createElement(gi.Consumer,null,i=>e(i)):e(io)}function yr(t){return vr({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},child:[]},{tag:"path",attr:{d:"M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"},child:[]}]})(t)}const gr={color:"#ffffff",opacity:.9,borderWidth:0,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#FF6B35",width:"60px",height:"60px",borderRadius:"50%",fontSize:"2rem",boxShadow:"0 4px 8px rgba(0,0,0,0.3)",cursor:"pointer",transition:"all 0.3s ease"},_r=({start:t,candleVisible:e})=>{const i=q.useCallback(()=>A.jsx(A.Fragment,{children:e?null:A.jsxs("div",{style:{textAlign:"center"},children:[A.jsx("button",{id:"start",style:gr,onClick:t,children:A.jsx(yr,{})}),A.jsx("div",{style:{color:"#ffffff",marginTop:"8px",fontSize:"14px",textShadow:"1px 1px 2px rgba(0,0,0,0.8)"},children:"Thắp nến"})]})}),[e,t]);return A.jsx("div",{style:{display:"flex",gap:"10px"},children:i()})},bi=new URL("./assets/hbd2.mp3",import.meta.url).href;function br(){const[t,e]=q.useState(!1),i=q.useRef(new Audio(bi)),o=q.useRef(void 0),[n,r]=q.useState(!1),[s,l]=q.useState(!1),[a,h]=q.useState(!1),[u,d]=q.useState(!0),[c]=q.useState("CMSN CHỊ TRANG");q.useEffect(()=>{console.log("🎵 Playing state changed:",n)},[n]),q.useEffect(()=>{console.log("🖼️ ShowBackground state changed:",a)},[a]),q.useEffect(()=>{n?document.body.classList.add("with-background"):document.body.classList.remove("with-background")},[n]);const v=q.useCallback(()=>e(!0),[]),_=q.useCallback(()=>{console.log("🎵 Starting audio and showing background image"),console.log("🖼️ Setting showBackground to true"),r(!0),h(!0),d(!1),i.current&&(i.current.load(),i.current.play().catch(C=>{console.error("Error playing audio:",C)}))},[]),g=q.useCallback(()=>{v()},[v]),S=q.useCallback(async C=>{try{o.current=C;const L=new AudioContext,N=L.createMediaStreamSource(C),M=L.createAnalyser();N.connect(M),M.fftSize=2048;const D=M.frequencyBinCount,T=new Uint8Array(D);setInterval(()=>{M.getByteFrequencyData(T),T.reduce((U,H)=>U+H,0)/D>43&&t&&(e(!1),s||(l(!0),_()))},100)}catch(L){console.error("Error accessing microphone:",L)}},[s,_,t]),w=q.useCallback(()=>{},[]);return q.useEffect(()=>((async()=>{try{const C=await navigator.mediaDevices.getUserMedia({audio:!0});C&&S(C)}catch(C){console.error("Error accessing microphone:",C)}})(),()=>{o.current&&o.current.getTracks().forEach(C=>C.stop())}),[S]),A.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100dvh",justifyContent:"space-between"},children:[a&&A.jsx("img",{src:"./assets/background.jpg",alt:"Main Image",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",objectFit:"contain",transition:"opacity 1s ease-in-out",zIndex:-1},onLoad:()=>console.log("🖼️ Background image loaded successfully!"),onError:C=>console.error("❌ Error loading background image:",C)}),A.jsx("audio",{src:bi,ref:i,preload:"auto",onEnded:w}),A.jsxs("div",{children:[A.jsx("div",{style:{position:"absolute",top:"30%",left:"50%",transform:"translate(-50%, -50%)",zIndex:40,fontSize:"2rem",color:"#FFD700",textShadow:"2px 2px 4px rgba(0,0,0,0.8)",fontWeight:"bold",textAlign:"center",visibility:a?"visible":"hidden"},children:c}),t&&!a&&A.jsx("div",{style:{position:"absolute",top:"10%",left:"50%",transform:"translate(-50%, -50%)",zIndex:50,fontSize:"1.5rem",color:"#FF6B35",textShadow:"2px 2px 4px rgba(0,0,0,0.8)",fontWeight:"bold",textAlign:"center",animation:"pulse 2s infinite"},children:"Chị hãy thổi nến đi"}),u&&A.jsx(lr,{candleVisible:t})]}),A.jsx("div",{style:{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)"},children:A.jsx("dotlottie-player",{src:"./assets/hbd.lottie",autoplay:!0,loop:!0,style:{zIndex:100,visibility:a?"visible":"hidden",width:400}})}),A.jsx("div",{style:{position:"absolute",top:"-20%",left:"50%",transform:"translateX(-50%)"},children:A.jsx("dotlottie-player",{src:"./assets/confetti.lottie",autoplay:!0,loop:!0,style:{zIndex:90,visibility:a?"visible":"hidden",width:400}})}),A.jsx("div",{style:{position:"absolute",bottom:"1.25%",left:"50%",transform:"translateX(-50%)",visibility:a?"hidden":"visible"},children:A.jsx(_r,{start:g,candleVisible:t})})]})}Ce.createRoot(document.getElementById("root")).render(A.jsx(bt.StrictMode,{children:A.jsx(br,{})}));export{Et as e,O as g,at as q,$r as r};
