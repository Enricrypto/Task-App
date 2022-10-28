(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();function Z6(c,a){const e=Object.create(null),s=c.split(",");for(let r=0;r<s.length;r++)e[s[r]]=!0;return a?r=>!!e[r.toLowerCase()]:r=>!!e[r]}const ut="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vt=Z6(ut);function Q5(c){return!!c||c===""}function T4(c){if(q(c)){const a={};for(let e=0;e<c.length;e++){const s=c[e],r=d2(s)?ht(s):T4(s);if(r)for(const n in r)a[n]=r[n]}return a}else{if(d2(c))return c;if(o2(c))return c}}const Ht=/;(?![^(]*\))/g,zt=/:(.+)/;function ht(c){const a={};return c.split(Ht).forEach(e=>{if(e){const s=e.split(zt);s.length>1&&(a[s[0].trim()]=s[1].trim())}}),a}function b3(c){let a="";if(d2(c))a=c;else if(q(c))for(let e=0;e<c.length;e++){const s=b3(c[e]);s&&(a+=s+" ")}else if(o2(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const pt=c=>d2(c)?c:c==null?"":q(c)||o2(c)&&(c.toString===a7||!W(c.toString))?JSON.stringify(c,J5,2):String(c),J5=(c,a)=>a&&a.__v_isRef?J5(c,a.value):j1(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[s,r])=>(e[`${s} =>`]=r,e),{})}:Z5(a)?{[`Set(${a.size})`]:[...a.values()]}:o2(a)&&!q(a)&&!e7(a)?String(a):a,s2={},G1=[],I2=()=>{},Vt=()=>!1,Mt=/^on[^a-z]/,S3=c=>Mt.test(c),c8=c=>c.startsWith("onUpdate:"),x2=Object.assign,a8=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},dt=Object.prototype.hasOwnProperty,Y=(c,a)=>dt.call(c,a),q=Array.isArray,j1=c=>N3(c)==="[object Map]",Z5=c=>N3(c)==="[object Set]",W=c=>typeof c=="function",d2=c=>typeof c=="string",e8=c=>typeof c=="symbol",o2=c=>c!==null&&typeof c=="object",c7=c=>o2(c)&&W(c.then)&&W(c.catch),a7=Object.prototype.toString,N3=c=>a7.call(c),Ct=c=>N3(c).slice(8,-1),e7=c=>N3(c)==="[object Object]",s8=c=>d2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,r3=Z6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),w3=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},Lt=/-(\w)/g,Z2=w3(c=>c.replace(Lt,(a,e)=>e?e.toUpperCase():"")),gt=/\B([A-Z])/g,s4=w3(c=>c.replace(gt,"-$1").toLowerCase()),y3=w3(c=>c.charAt(0).toUpperCase()+c.slice(1)),l6=w3(c=>c?`on${y3(c)}`:""),d4=(c,a)=>!Object.is(c,a),n3=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},v3=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},C6=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let y0;const xt=()=>y0||(y0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let $2;class s7{constructor(a=!1){this.detached=a,this.active=!0,this.effects=[],this.cleanups=[],this.parent=$2,!a&&$2&&(this.index=($2.scopes||($2.scopes=[])).push(this)-1)}run(a){if(this.active){const e=$2;try{return $2=this,a()}finally{$2=e}}}on(){$2=this}off(){$2=this.parent}stop(a){if(this.active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function r7(c){return new s7(c)}function bt(c,a=$2){a&&a.active&&a.effects.push(c)}const r8=c=>{const a=new Set(c);return a.w=0,a.n=0,a},n7=c=>(c.w&M1)>0,i7=c=>(c.n&M1)>0,St=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=M1},Nt=c=>{const{deps:a}=c;if(a.length){let e=0;for(let s=0;s<a.length;s++){const r=a[s];n7(r)&&!i7(r)?r.delete(c):a[e++]=r,r.w&=~M1,r.n&=~M1}a.length=e}},L6=new WeakMap;let m4=0,M1=1;const g6=30;let E2;const P1=Symbol(""),x6=Symbol("");class n8{constructor(a,e=null,s){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,bt(this,s)}run(){if(!this.active)return this.fn();let a=E2,e=h1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=E2,E2=this,h1=!0,M1=1<<++m4,m4<=g6?St(this):k0(this),this.fn()}finally{m4<=g6&&Nt(this),M1=1<<--m4,E2=this.parent,h1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){E2===this?this.deferStop=!0:this.active&&(k0(this),this.onStop&&this.onStop(),this.active=!1)}}function k0(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let h1=!0;const t7=[];function r4(){t7.push(h1),h1=!1}function n4(){const c=t7.pop();h1=c===void 0?!0:c}function A2(c,a,e){if(h1&&E2){let s=L6.get(c);s||L6.set(c,s=new Map);let r=s.get(e);r||s.set(e,r=r8()),l7(r)}}function l7(c,a){let e=!1;m4<=g6?i7(c)||(c.n|=M1,e=!n7(c)):e=!c.has(E2),e&&(c.add(E2),E2.deps.push(c))}function s1(c,a,e,s,r,n){const i=L6.get(c);if(!i)return;let t=[];if(a==="clear")t=[...i.values()];else if(e==="length"&&q(c))i.forEach((l,o)=>{(o==="length"||o>=s)&&t.push(l)});else switch(e!==void 0&&t.push(i.get(e)),a){case"add":q(c)?s8(e)&&t.push(i.get("length")):(t.push(i.get(P1)),j1(c)&&t.push(i.get(x6)));break;case"delete":q(c)||(t.push(i.get(P1)),j1(c)&&t.push(i.get(x6)));break;case"set":j1(c)&&t.push(i.get(P1));break}if(t.length===1)t[0]&&b6(t[0]);else{const l=[];for(const o of t)o&&l.push(...o);b6(r8(l))}}function b6(c,a){const e=q(c)?c:[...c];for(const s of e)s.computed&&A0(s);for(const s of e)s.computed||A0(s)}function A0(c,a){(c!==E2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const wt=Z6("__proto__,__v_isRef,__isVue"),f7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(e8)),yt=i8(),kt=i8(!1,!0),At=i8(!0),P0=Pt();function Pt(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const s=Q(this);for(let n=0,i=this.length;n<i;n++)A2(s,"get",n+"");const r=s[a](...e);return r===-1||r===!1?s[a](...e.map(Q)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){r4();const s=Q(this)[a].apply(this,e);return n4(),s}}),c}function i8(c=!1,a=!1){return function(s,r,n){if(r==="__v_isReactive")return!c;if(r==="__v_isReadonly")return c;if(r==="__v_isShallow")return a;if(r==="__v_raw"&&n===(c?a?Kt:H7:a?v7:u7).get(s))return s;const i=q(s);if(!c&&i&&Y(P0,r))return Reflect.get(P0,r,n);const t=Reflect.get(s,r,n);return(e8(r)?f7.has(r):wt(r))||(c||A2(s,"get",r),a)?t:v2(t)?i&&s8(r)?t:t.value:o2(t)?c?z7(t):i4(t):t}}const Tt=o7(),Rt=o7(!0);function o7(c=!1){return function(e,s,r,n){let i=e[s];if(X1(i)&&v2(i)&&!v2(r))return!1;if(!c&&(!H3(r)&&!X1(r)&&(i=Q(i),r=Q(r)),!q(e)&&v2(i)&&!v2(r)))return i.value=r,!0;const t=q(e)&&s8(s)?Number(s)<e.length:Y(e,s),l=Reflect.set(e,s,r,n);return e===Q(n)&&(t?d4(r,i)&&s1(e,"set",s,r):s1(e,"add",s,r)),l}}function Bt(c,a){const e=Y(c,a);c[a];const s=Reflect.deleteProperty(c,a);return s&&e&&s1(c,"delete",a,void 0),s}function Ft(c,a){const e=Reflect.has(c,a);return(!e8(a)||!f7.has(a))&&A2(c,"has",a),e}function _t(c){return A2(c,"iterate",q(c)?"length":P1),Reflect.ownKeys(c)}const m7={get:yt,set:Tt,deleteProperty:Bt,has:Ft,ownKeys:_t},Et={get:At,set(c,a){return!0},deleteProperty(c,a){return!0}},Dt=x2({},m7,{get:kt,set:Rt}),t8=c=>c,k3=c=>Reflect.getPrototypeOf(c);function W4(c,a,e=!1,s=!1){c=c.__v_raw;const r=Q(c),n=Q(a);e||(a!==n&&A2(r,"get",a),A2(r,"get",n));const{has:i}=k3(r),t=s?t8:e?o8:C4;if(i.call(r,a))return t(c.get(a));if(i.call(r,n))return t(c.get(n));c!==r&&c.get(a)}function G4(c,a=!1){const e=this.__v_raw,s=Q(e),r=Q(c);return a||(c!==r&&A2(s,"has",c),A2(s,"has",r)),c===r?e.has(c):e.has(c)||e.has(r)}function j4(c,a=!1){return c=c.__v_raw,!a&&A2(Q(c),"iterate",P1),Reflect.get(c,"size",c)}function T0(c){c=Q(c);const a=Q(this);return k3(a).has.call(a,c)||(a.add(c),s1(a,"add",c,c)),this}function R0(c,a){a=Q(a);const e=Q(this),{has:s,get:r}=k3(e);let n=s.call(e,c);n||(c=Q(c),n=s.call(e,c));const i=r.call(e,c);return e.set(c,a),n?d4(a,i)&&s1(e,"set",c,a):s1(e,"add",c,a),this}function B0(c){const a=Q(this),{has:e,get:s}=k3(a);let r=e.call(a,c);r||(c=Q(c),r=e.call(a,c)),s&&s.call(a,c);const n=a.delete(c);return r&&s1(a,"delete",c,void 0),n}function F0(){const c=Q(this),a=c.size!==0,e=c.clear();return a&&s1(c,"clear",void 0,void 0),e}function $4(c,a){return function(s,r){const n=this,i=n.__v_raw,t=Q(i),l=a?t8:c?o8:C4;return!c&&A2(t,"iterate",P1),i.forEach((o,f)=>s.call(r,l(o),l(f),n))}}function K4(c,a,e){return function(...s){const r=this.__v_raw,n=Q(r),i=j1(n),t=c==="entries"||c===Symbol.iterator&&i,l=c==="keys"&&i,o=r[c](...s),f=e?t8:a?o8:C4;return!a&&A2(n,"iterate",l?x6:P1),{next(){const{value:u,done:H}=o.next();return H?{value:u,done:H}:{value:t?[f(u[0]),f(u[1])]:f(u),done:H}},[Symbol.iterator](){return this}}}}function o1(c){return function(...a){return c==="delete"?!1:this}}function Ot(){const c={get(n){return W4(this,n)},get size(){return j4(this)},has:G4,add:T0,set:R0,delete:B0,clear:F0,forEach:$4(!1,!1)},a={get(n){return W4(this,n,!1,!0)},get size(){return j4(this)},has:G4,add:T0,set:R0,delete:B0,clear:F0,forEach:$4(!1,!0)},e={get(n){return W4(this,n,!0)},get size(){return j4(this,!0)},has(n){return G4.call(this,n,!0)},add:o1("add"),set:o1("set"),delete:o1("delete"),clear:o1("clear"),forEach:$4(!0,!1)},s={get(n){return W4(this,n,!0,!0)},get size(){return j4(this,!0)},has(n){return G4.call(this,n,!0)},add:o1("add"),set:o1("set"),delete:o1("delete"),clear:o1("clear"),forEach:$4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{c[n]=K4(n,!1,!1),e[n]=K4(n,!0,!1),a[n]=K4(n,!1,!0),s[n]=K4(n,!0,!0)}),[c,e,a,s]}const[Ut,It,qt,Wt]=Ot();function l8(c,a){const e=a?c?Wt:qt:c?It:Ut;return(s,r,n)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?s:Reflect.get(Y(e,r)&&r in s?e:s,r,n)}const Gt={get:l8(!1,!1)},jt={get:l8(!1,!0)},$t={get:l8(!0,!1)},u7=new WeakMap,v7=new WeakMap,H7=new WeakMap,Kt=new WeakMap;function Yt(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xt(c){return c.__v_skip||!Object.isExtensible(c)?0:Yt(Ct(c))}function i4(c){return X1(c)?c:f8(c,!1,m7,Gt,u7)}function Qt(c){return f8(c,!1,Dt,jt,v7)}function z7(c){return f8(c,!0,Et,$t,H7)}function f8(c,a,e,s,r){if(!o2(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const n=r.get(c);if(n)return n;const i=Xt(c);if(i===0)return c;const t=new Proxy(c,i===2?s:e);return r.set(c,t),t}function p1(c){return X1(c)?p1(c.__v_raw):!!(c&&c.__v_isReactive)}function X1(c){return!!(c&&c.__v_isReadonly)}function H3(c){return!!(c&&c.__v_isShallow)}function h7(c){return p1(c)||X1(c)}function Q(c){const a=c&&c.__v_raw;return a?Q(a):c}function Q1(c){return v3(c,"__v_skip",!0),c}const C4=c=>o2(c)?i4(c):c,o8=c=>o2(c)?z7(c):c;function p7(c){h1&&E2&&(c=Q(c),l7(c.dep||(c.dep=r8())))}function V7(c,a){c=Q(c),c.dep&&b6(c.dep)}function v2(c){return!!(c&&c.__v_isRef===!0)}function A3(c){return M7(c,!1)}function Jt(c){return M7(c,!0)}function M7(c,a){return v2(c)?c:new Zt(c,a)}class Zt{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:Q(a),this._value=e?a:C4(a)}get value(){return p7(this),this._value}set value(a){const e=this.__v_isShallow||H3(a)||X1(a);a=e?a:Q(a),d4(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:C4(a),V7(this))}}function g2(c){return v2(c)?c.value:c}const cl={get:(c,a,e)=>g2(Reflect.get(c,a,e)),set:(c,a,e,s)=>{const r=c[a];return v2(r)&&!v2(e)?(r.value=e,!0):Reflect.set(c,a,e,s)}};function d7(c){return p1(c)?c:new Proxy(c,cl)}function al(c){const a=q(c)?new Array(c.length):{};for(const e in c)a[e]=sl(c,e);return a}class el{constructor(a,e,s){this._object=a,this._key=e,this._defaultValue=s,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}}function sl(c,a,e){const s=c[a];return v2(s)?s:new el(c,a,e)}var C7;class rl{constructor(a,e,s,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[C7]=!1,this._dirty=!0,this.effect=new n8(a,()=>{this._dirty||(this._dirty=!0,V7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const a=Q(this);return p7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}C7="__v_isReadonly";function nl(c,a,e=!1){let s,r;const n=W(c);return n?(s=c,r=I2):(s=c.get,r=c.set),new rl(s,r,n||!r,e)}function V1(c,a,e,s){let r;try{r=s?c(...s):c()}catch(n){P3(n,a,e)}return r}function q2(c,a,e,s){if(W(c)){const n=V1(c,a,e,s);return n&&c7(n)&&n.catch(i=>{P3(i,a,e)}),n}const r=[];for(let n=0;n<c.length;n++)r.push(q2(c[n],a,e,s));return r}function P3(c,a,e,s=!0){const r=a?a.vnode:null;if(a){let n=a.parent;const i=a.proxy,t=e;for(;n;){const o=n.ec;if(o){for(let f=0;f<o.length;f++)if(o[f](c,i,t)===!1)return}n=n.parent}const l=a.appContext.config.errorHandler;if(l){V1(l,null,10,[c,i,t]);return}}il(c,e,r,s)}function il(c,a,e,s=!0){console.error(c)}let L4=!1,S6=!1;const C2=[];let X2=0;const $1=[];let e1=null,N1=0;const L7=Promise.resolve();let m8=null;function u8(c){const a=m8||L7;return c?a.then(this?c.bind(this):c):a}function tl(c){let a=X2+1,e=C2.length;for(;a<e;){const s=a+e>>>1;g4(C2[s])<c?a=s+1:e=s}return a}function v8(c){(!C2.length||!C2.includes(c,L4&&c.allowRecurse?X2+1:X2))&&(c.id==null?C2.push(c):C2.splice(tl(c.id),0,c),g7())}function g7(){!L4&&!S6&&(S6=!0,m8=L7.then(b7))}function ll(c){const a=C2.indexOf(c);a>X2&&C2.splice(a,1)}function fl(c){q(c)?$1.push(...c):(!e1||!e1.includes(c,c.allowRecurse?N1+1:N1))&&$1.push(c),g7()}function _0(c,a=L4?X2+1:0){for(;a<C2.length;a++){const e=C2[a];e&&e.pre&&(C2.splice(a,1),a--,e())}}function x7(c){if($1.length){const a=[...new Set($1)];if($1.length=0,e1){e1.push(...a);return}for(e1=a,e1.sort((e,s)=>g4(e)-g4(s)),N1=0;N1<e1.length;N1++)e1[N1]();e1=null,N1=0}}const g4=c=>c.id==null?1/0:c.id,ol=(c,a)=>{const e=g4(c)-g4(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function b7(c){S6=!1,L4=!0,C2.sort(ol);const a=I2;try{for(X2=0;X2<C2.length;X2++){const e=C2[X2];e&&e.active!==!1&&V1(e,null,14)}}finally{X2=0,C2.length=0,x7(),L4=!1,m8=null,(C2.length||$1.length)&&b7()}}function ml(c,a,...e){if(c.isUnmounted)return;const s=c.vnode.props||s2;let r=e;const n=a.startsWith("update:"),i=n&&a.slice(7);if(i&&i in s){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:H}=s[f]||s2;H&&(r=e.map(z=>z.trim())),u&&(r=e.map(C6))}let t,l=s[t=l6(a)]||s[t=l6(Z2(a))];!l&&n&&(l=s[t=l6(s4(a))]),l&&q2(l,c,6,r);const o=s[t+"Once"];if(o){if(!c.emitted)c.emitted={};else if(c.emitted[t])return;c.emitted[t]=!0,q2(o,c,6,r)}}function S7(c,a,e=!1){const s=a.emitsCache,r=s.get(c);if(r!==void 0)return r;const n=c.emits;let i={},t=!1;if(!W(c)){const l=o=>{const f=S7(o,a,!0);f&&(t=!0,x2(i,f))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!n&&!t?(o2(c)&&s.set(c,null),null):(q(n)?n.forEach(l=>i[l]=null):x2(i,n),o2(c)&&s.set(c,i),i)}function T3(c,a){return!c||!S3(a)?!1:(a=a.slice(2).replace(/Once$/,""),Y(c,a[0].toLowerCase()+a.slice(1))||Y(c,s4(a))||Y(c,a))}let R2=null,R3=null;function z3(c){const a=R2;return R2=c,R3=c&&c.type.__scopeId||null,a}function ul(c){R3=c}function vl(){R3=null}function a1(c,a=R2,e){if(!a||c._n)return c;const s=(...r)=>{s._d&&$0(-1);const n=z3(a);let i;try{i=c(...r)}finally{z3(n),s._d&&$0(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function f6(c){const{type:a,vnode:e,proxy:s,withProxy:r,props:n,propsOptions:[i],slots:t,attrs:l,emit:o,render:f,renderCache:u,data:H,setupState:z,ctx:g,inheritAttrs:w}=c;let P,p;const C=z3(c);try{if(e.shapeFlag&4){const D=r||s;P=Y2(f.call(D,D,u,n,z,H,g)),p=l}else{const D=a;P=Y2(D.length>1?D(n,{attrs:l,slots:t,emit:o}):D(n,null)),p=a.props?l:Hl(l)}}catch(D){v4.length=0,P3(D,c,1),P=Z(x4)}let T=P;if(p&&w!==!1){const D=Object.keys(p),{shapeFlag:O}=T;D.length&&O&7&&(i&&D.some(c8)&&(p=zl(p,i)),T=J1(T,p))}return e.dirs&&(T=J1(T),T.dirs=T.dirs?T.dirs.concat(e.dirs):e.dirs),e.transition&&(T.transition=e.transition),P=T,z3(C),P}const Hl=c=>{let a;for(const e in c)(e==="class"||e==="style"||S3(e))&&((a||(a={}))[e]=c[e]);return a},zl=(c,a)=>{const e={};for(const s in c)(!c8(s)||!(s.slice(9)in a))&&(e[s]=c[s]);return e};function hl(c,a,e){const{props:s,children:r,component:n}=c,{props:i,children:t,patchFlag:l}=a,o=n.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return s?E0(s,i,o):!!i;if(l&8){const f=a.dynamicProps;for(let u=0;u<f.length;u++){const H=f[u];if(i[H]!==s[H]&&!T3(o,H))return!0}}}else return(r||t)&&(!t||!t.$stable)?!0:s===i?!1:s?i?E0(s,i,o):!0:!!i;return!1}function E0(c,a,e){const s=Object.keys(a);if(s.length!==Object.keys(c).length)return!0;for(let r=0;r<s.length;r++){const n=s[r];if(a[n]!==c[n]&&!T3(e,n))return!0}return!1}function pl({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const Vl=c=>c.__isSuspense;function Ml(c,a){a&&a.pendingBranch?q(c)?a.effects.push(...c):a.effects.push(c):fl(c)}function i3(c,a){if(M2){let e=M2.provides;const s=M2.parent&&M2.parent.provides;s===e&&(e=M2.provides=Object.create(s)),e[c]=a}}function J2(c,a,e=!1){const s=M2||R2;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&c in r)return r[c];if(arguments.length>1)return e&&W(a)?a.call(s.proxy):a}}const D0={};function K1(c,a,e){return N7(c,a,e)}function N7(c,a,{immediate:e,deep:s,flush:r,onTrack:n,onTrigger:i}=s2){const t=M2;let l,o=!1,f=!1;if(v2(c)?(l=()=>c.value,o=H3(c)):p1(c)?(l=()=>c,s=!0):q(c)?(f=!0,o=c.some(p=>p1(p)||H3(p)),l=()=>c.map(p=>{if(v2(p))return p.value;if(p1(p))return y1(p);if(W(p))return V1(p,t,2)})):W(c)?a?l=()=>V1(c,t,2):l=()=>{if(!(t&&t.isUnmounted))return u&&u(),q2(c,t,3,[H])}:l=I2,a&&s){const p=l;l=()=>y1(p())}let u,H=p=>{u=P.onStop=()=>{V1(p,t,4)}};if(S4)return H=I2,a?e&&q2(a,t,3,[l(),f?[]:void 0,H]):l(),I2;let z=f?[]:D0;const g=()=>{if(!!P.active)if(a){const p=P.run();(s||o||(f?p.some((C,T)=>d4(C,z[T])):d4(p,z)))&&(u&&u(),q2(a,t,3,[p,z===D0?void 0:z,H]),z=p)}else P.run()};g.allowRecurse=!!a;let w;r==="sync"?w=g:r==="post"?w=()=>w2(g,t&&t.suspense):(g.pre=!0,t&&(g.id=t.uid),w=()=>v8(g));const P=new n8(l,w);return a?e?g():z=P.run():r==="post"?w2(P.run.bind(P),t&&t.suspense):P.run(),()=>{P.stop(),t&&t.scope&&a8(t.scope.effects,P)}}function dl(c,a,e){const s=this.proxy,r=d2(c)?c.includes(".")?w7(s,c):()=>s[c]:c.bind(s,s);let n;W(a)?n=a:(n=a.handler,e=a);const i=M2;Z1(this);const t=N7(r,n.bind(s),e);return i?Z1(i):T1(),t}function w7(c,a){const e=a.split(".");return()=>{let s=c;for(let r=0;r<e.length&&s;r++)s=s[e[r]];return s}}function y1(c,a){if(!o2(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),v2(c))y1(c.value,a);else if(q(c))for(let e=0;e<c.length;e++)y1(c[e],a);else if(Z5(c)||j1(c))c.forEach(e=>{y1(e,a)});else if(e7(c))for(const e in c)y1(c[e],a);return c}function R4(c){return W(c)?{setup:c,name:c.name}:c}const t3=c=>!!c.type.__asyncLoader,y7=c=>c.type.__isKeepAlive;function Cl(c,a){k7(c,"a",a)}function Ll(c,a){k7(c,"da",a)}function k7(c,a,e=M2){const s=c.__wdc||(c.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(B3(a,s,e),e){let r=e.parent;for(;r&&r.parent;)y7(r.parent.vnode)&&gl(s,a,e,r),r=r.parent}}function gl(c,a,e,s){const r=B3(a,c,s,!0);H8(()=>{a8(s[a],r)},e)}function B3(c,a,e=M2,s=!1){if(e){const r=e[c]||(e[c]=[]),n=a.__weh||(a.__weh=(...i)=>{if(e.isUnmounted)return;r4(),Z1(e);const t=q2(a,e,c,i);return T1(),n4(),t});return s?r.unshift(n):r.push(n),n}}const t1=c=>(a,e=M2)=>(!S4||c==="sp")&&B3(c,(...s)=>a(...s),e),xl=t1("bm"),A7=t1("m"),bl=t1("bu"),Sl=t1("u"),Nl=t1("bum"),H8=t1("um"),wl=t1("sp"),yl=t1("rtg"),kl=t1("rtc");function Al(c,a=M2){B3("ec",c,a)}function ZO(c,a){const e=R2;if(e===null)return c;const s=_3(e)||e.proxy,r=c.dirs||(c.dirs=[]);for(let n=0;n<a.length;n++){let[i,t,l,o=s2]=a[n];W(i)&&(i={mounted:i,updated:i}),i.deep&&y1(t),r.push({dir:i,instance:s,value:t,oldValue:void 0,arg:l,modifiers:o})}return c}function x1(c,a,e,s){const r=c.dirs,n=a&&a.dirs;for(let i=0;i<r.length;i++){const t=r[i];n&&(t.oldValue=n[i].value);let l=t.dir[s];l&&(r4(),q2(l,e,8,[c.el,t,c,a]),n4())}}const P7="components";function N6(c,a){return Tl(P7,c,!0,a)||c}const Pl=Symbol();function Tl(c,a,e=!0,s=!1){const r=R2||M2;if(r){const n=r.type;if(c===P7){const t=of(n,!1);if(t&&(t===a||t===Z2(a)||t===y3(Z2(a))))return n}const i=O0(r[c]||n[c],a)||O0(r.appContext[c],a);return!i&&s?n:i}}function O0(c,a){return c&&(c[a]||c[Z2(a)]||c[y3(Z2(a))])}function cU(c,a,e,s){let r;const n=e&&e[s];if(q(c)||d2(c)){r=new Array(c.length);for(let i=0,t=c.length;i<t;i++)r[i]=a(c[i],i,void 0,n&&n[i])}else if(typeof c=="number"){r=new Array(c);for(let i=0;i<c;i++)r[i]=a(i+1,i,void 0,n&&n[i])}else if(o2(c))if(c[Symbol.iterator])r=Array.from(c,(i,t)=>a(i,t,void 0,n&&n[t]));else{const i=Object.keys(c);r=new Array(i.length);for(let t=0,l=i.length;t<l;t++){const o=i[t];r[t]=a(c[o],o,t,n&&n[t])}}else r=[];return e&&(e[s]=r),r}const w6=c=>c?W7(c)?_3(c)||c.proxy:w6(c.parent):null,h3=x2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>w6(c.parent),$root:c=>w6(c.root),$emit:c=>c.emit,$options:c=>z8(c),$forceUpdate:c=>c.f||(c.f=()=>v8(c.update)),$nextTick:c=>c.n||(c.n=u8.bind(c.proxy)),$watch:c=>dl.bind(c)}),Rl={get({_:c},a){const{ctx:e,setupState:s,data:r,props:n,accessCache:i,type:t,appContext:l}=c;let o;if(a[0]!=="$"){const z=i[a];if(z!==void 0)switch(z){case 1:return s[a];case 2:return r[a];case 4:return e[a];case 3:return n[a]}else{if(s!==s2&&Y(s,a))return i[a]=1,s[a];if(r!==s2&&Y(r,a))return i[a]=2,r[a];if((o=c.propsOptions[0])&&Y(o,a))return i[a]=3,n[a];if(e!==s2&&Y(e,a))return i[a]=4,e[a];y6&&(i[a]=0)}}const f=h3[a];let u,H;if(f)return a==="$attrs"&&A2(c,"get",a),f(c);if((u=t.__cssModules)&&(u=u[a]))return u;if(e!==s2&&Y(e,a))return i[a]=4,e[a];if(H=l.config.globalProperties,Y(H,a))return H[a]},set({_:c},a,e){const{data:s,setupState:r,ctx:n}=c;return r!==s2&&Y(r,a)?(r[a]=e,!0):s!==s2&&Y(s,a)?(s[a]=e,!0):Y(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(n[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:s,appContext:r,propsOptions:n}},i){let t;return!!e[i]||c!==s2&&Y(c,i)||a!==s2&&Y(a,i)||(t=n[0])&&Y(t,i)||Y(s,i)||Y(h3,i)||Y(r.config.globalProperties,i)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:Y(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};let y6=!0;function Bl(c){const a=z8(c),e=c.proxy,s=c.ctx;y6=!1,a.beforeCreate&&U0(a.beforeCreate,c,"bc");const{data:r,computed:n,methods:i,watch:t,provide:l,inject:o,created:f,beforeMount:u,mounted:H,beforeUpdate:z,updated:g,activated:w,deactivated:P,beforeDestroy:p,beforeUnmount:C,destroyed:T,unmounted:D,render:O,renderTracked:J,renderTriggered:U,errorCaptured:j,serverPrefetch:f2,expose:p2,inheritAttrs:b2,components:T2,directives:f1,filters:y2}=a;if(o&&Fl(o,s,null,c.appContext.config.unwrapInjectedRef),i)for(const r2 in i){const a2=i[r2];W(a2)&&(s[r2]=a2.bind(e))}if(r){const r2=r.call(e,e);o2(r2)&&(c.data=i4(r2))}if(y6=!0,n)for(const r2 in n){const a2=n[r2],B2=W(a2)?a2.bind(e,e):W(a2.get)?a2.get.bind(e,e):I2,g1=!W(a2)&&W(a2.set)?a2.set.bind(e):I2,F2=t2({get:B2,set:g1});Object.defineProperty(s,r2,{enumerable:!0,configurable:!0,get:()=>F2.value,set:S2=>F2.value=S2})}if(t)for(const r2 in t)T7(t[r2],s,e,r2);if(l){const r2=W(l)?l.call(e):l;Reflect.ownKeys(r2).forEach(a2=>{i3(a2,r2[a2])})}f&&U0(f,c,"c");function H2(r2,a2){q(a2)?a2.forEach(B2=>r2(B2.bind(e))):a2&&r2(a2.bind(e))}if(H2(xl,u),H2(A7,H),H2(bl,z),H2(Sl,g),H2(Cl,w),H2(Ll,P),H2(Al,j),H2(kl,J),H2(yl,U),H2(Nl,C),H2(H8,D),H2(wl,f2),q(p2))if(p2.length){const r2=c.exposed||(c.exposed={});p2.forEach(a2=>{Object.defineProperty(r2,a2,{get:()=>e[a2],set:B2=>e[a2]=B2})})}else c.exposed||(c.exposed={});O&&c.render===I2&&(c.render=O),b2!=null&&(c.inheritAttrs=b2),T2&&(c.components=T2),f1&&(c.directives=f1)}function Fl(c,a,e=I2,s=!1){q(c)&&(c=k6(c));for(const r in c){const n=c[r];let i;o2(n)?"default"in n?i=J2(n.from||r,n.default,!0):i=J2(n.from||r):i=J2(n),v2(i)&&s?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:t=>i.value=t}):a[r]=i}}function U0(c,a,e){q2(q(c)?c.map(s=>s.bind(a.proxy)):c.bind(a.proxy),a,e)}function T7(c,a,e,s){const r=s.includes(".")?w7(e,s):()=>e[s];if(d2(c)){const n=a[c];W(n)&&K1(r,n)}else if(W(c))K1(r,c.bind(e));else if(o2(c))if(q(c))c.forEach(n=>T7(n,a,e,s));else{const n=W(c.handler)?c.handler.bind(e):a[c.handler];W(n)&&K1(r,n,c)}}function z8(c){const a=c.type,{mixins:e,extends:s}=a,{mixins:r,optionsCache:n,config:{optionMergeStrategies:i}}=c.appContext,t=n.get(a);let l;return t?l=t:!r.length&&!e&&!s?l=a:(l={},r.length&&r.forEach(o=>p3(l,o,i,!0)),p3(l,a,i)),o2(a)&&n.set(a,l),l}function p3(c,a,e,s=!1){const{mixins:r,extends:n}=a;n&&p3(c,n,e,!0),r&&r.forEach(i=>p3(c,i,e,!0));for(const i in a)if(!(s&&i==="expose")){const t=_l[i]||e&&e[i];c[i]=t?t(c[i],a[i]):a[i]}return c}const _l={data:I0,props:S1,emits:S1,methods:S1,computed:S1,beforeCreate:L2,created:L2,beforeMount:L2,mounted:L2,beforeUpdate:L2,updated:L2,beforeDestroy:L2,beforeUnmount:L2,destroyed:L2,unmounted:L2,activated:L2,deactivated:L2,errorCaptured:L2,serverPrefetch:L2,components:S1,directives:S1,watch:Dl,provide:I0,inject:El};function I0(c,a){return a?c?function(){return x2(W(c)?c.call(this,this):c,W(a)?a.call(this,this):a)}:a:c}function El(c,a){return S1(k6(c),k6(a))}function k6(c){if(q(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function L2(c,a){return c?[...new Set([].concat(c,a))]:a}function S1(c,a){return c?x2(x2(Object.create(null),c),a):a}function Dl(c,a){if(!c)return a;if(!a)return c;const e=x2(Object.create(null),c);for(const s in a)e[s]=L2(c[s],a[s]);return e}function Ol(c,a,e,s=!1){const r={},n={};v3(n,F3,1),c.propsDefaults=Object.create(null),R7(c,a,r,n);for(const i in c.propsOptions[0])i in r||(r[i]=void 0);e?c.props=s?r:Qt(r):c.type.props?c.props=r:c.props=n,c.attrs=n}function Ul(c,a,e,s){const{props:r,attrs:n,vnode:{patchFlag:i}}=c,t=Q(r),[l]=c.propsOptions;let o=!1;if((s||i>0)&&!(i&16)){if(i&8){const f=c.vnode.dynamicProps;for(let u=0;u<f.length;u++){let H=f[u];if(T3(c.emitsOptions,H))continue;const z=a[H];if(l)if(Y(n,H))z!==n[H]&&(n[H]=z,o=!0);else{const g=Z2(H);r[g]=A6(l,t,g,z,c,!1)}else z!==n[H]&&(n[H]=z,o=!0)}}}else{R7(c,a,r,n)&&(o=!0);let f;for(const u in t)(!a||!Y(a,u)&&((f=s4(u))===u||!Y(a,f)))&&(l?e&&(e[u]!==void 0||e[f]!==void 0)&&(r[u]=A6(l,t,u,void 0,c,!0)):delete r[u]);if(n!==t)for(const u in n)(!a||!Y(a,u)&&!0)&&(delete n[u],o=!0)}o&&s1(c,"set","$attrs")}function R7(c,a,e,s){const[r,n]=c.propsOptions;let i=!1,t;if(a)for(let l in a){if(r3(l))continue;const o=a[l];let f;r&&Y(r,f=Z2(l))?!n||!n.includes(f)?e[f]=o:(t||(t={}))[f]=o:T3(c.emitsOptions,l)||(!(l in s)||o!==s[l])&&(s[l]=o,i=!0)}if(n){const l=Q(e),o=t||s2;for(let f=0;f<n.length;f++){const u=n[f];e[u]=A6(r,l,u,o[u],c,!Y(o,u))}}return i}function A6(c,a,e,s,r,n){const i=c[e];if(i!=null){const t=Y(i,"default");if(t&&s===void 0){const l=i.default;if(i.type!==Function&&W(l)){const{propsDefaults:o}=r;e in o?s=o[e]:(Z1(r),s=o[e]=l.call(null,a),T1())}else s=l}i[0]&&(n&&!t?s=!1:i[1]&&(s===""||s===s4(e))&&(s=!0))}return s}function B7(c,a,e=!1){const s=a.propsCache,r=s.get(c);if(r)return r;const n=c.props,i={},t=[];let l=!1;if(!W(c)){const f=u=>{l=!0;const[H,z]=B7(u,a,!0);x2(i,H),z&&t.push(...z)};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}if(!n&&!l)return o2(c)&&s.set(c,G1),G1;if(q(n))for(let f=0;f<n.length;f++){const u=Z2(n[f]);q0(u)&&(i[u]=s2)}else if(n)for(const f in n){const u=Z2(f);if(q0(u)){const H=n[f],z=i[u]=q(H)||W(H)?{type:H}:H;if(z){const g=j0(Boolean,z.type),w=j0(String,z.type);z[0]=g>-1,z[1]=w<0||g<w,(g>-1||Y(z,"default"))&&t.push(u)}}}const o=[i,t];return o2(c)&&s.set(c,o),o}function q0(c){return c[0]!=="$"}function W0(c){const a=c&&c.toString().match(/^\s*function (\w+)/);return a?a[1]:c===null?"null":""}function G0(c,a){return W0(c)===W0(a)}function j0(c,a){return q(a)?a.findIndex(e=>G0(e,c)):W(a)&&G0(a,c)?0:-1}const F7=c=>c[0]==="_"||c==="$stable",h8=c=>q(c)?c.map(Y2):[Y2(c)],Il=(c,a,e)=>{if(a._n)return a;const s=a1((...r)=>h8(a(...r)),e);return s._c=!1,s},_7=(c,a,e)=>{const s=c._ctx;for(const r in c){if(F7(r))continue;const n=c[r];if(W(n))a[r]=Il(r,n,s);else if(n!=null){const i=h8(n);a[r]=()=>i}}},E7=(c,a)=>{const e=h8(a);c.slots.default=()=>e},ql=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=Q(a),v3(a,"_",e)):_7(a,c.slots={})}else c.slots={},a&&E7(c,a);v3(c.slots,F3,1)},Wl=(c,a,e)=>{const{vnode:s,slots:r}=c;let n=!0,i=s2;if(s.shapeFlag&32){const t=a._;t?e&&t===1?n=!1:(x2(r,a),!e&&t===1&&delete r._):(n=!a.$stable,_7(a,r)),i=a}else a&&(E7(c,a),i={default:1});if(n)for(const t in r)!F7(t)&&!(t in i)&&delete r[t]};function D7(){return{app:null,config:{isNativeTag:Vt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gl=0;function jl(c,a){return function(s,r=null){W(s)||(s=Object.assign({},s)),r!=null&&!o2(r)&&(r=null);const n=D7(),i=new Set;let t=!1;const l=n.app={_uid:Gl++,_component:s,_props:r,_container:null,_context:n,_instance:null,version:uf,get config(){return n.config},set config(o){},use(o,...f){return i.has(o)||(o&&W(o.install)?(i.add(o),o.install(l,...f)):W(o)&&(i.add(o),o(l,...f))),l},mixin(o){return n.mixins.includes(o)||n.mixins.push(o),l},component(o,f){return f?(n.components[o]=f,l):n.components[o]},directive(o,f){return f?(n.directives[o]=f,l):n.directives[o]},mount(o,f,u){if(!t){const H=Z(s,r);return H.appContext=n,f&&a?a(H,o):c(H,o,u),t=!0,l._container=o,o.__vue_app__=l,_3(H.component)||H.component.proxy}},unmount(){t&&(c(null,l._container),delete l._container.__vue_app__)},provide(o,f){return n.provides[o]=f,l}};return l}}function P6(c,a,e,s,r=!1){if(q(c)){c.forEach((H,z)=>P6(H,a&&(q(a)?a[z]:a),e,s,r));return}if(t3(s)&&!r)return;const n=s.shapeFlag&4?_3(s.component)||s.component.proxy:s.el,i=r?null:n,{i:t,r:l}=c,o=a&&a.r,f=t.refs===s2?t.refs={}:t.refs,u=t.setupState;if(o!=null&&o!==l&&(d2(o)?(f[o]=null,Y(u,o)&&(u[o]=null)):v2(o)&&(o.value=null)),W(l))V1(l,t,12,[i,f]);else{const H=d2(l),z=v2(l);if(H||z){const g=()=>{if(c.f){const w=H?Y(u,l)?u[l]:f[l]:l.value;r?q(w)&&a8(w,n):q(w)?w.includes(n)||w.push(n):H?(f[l]=[n],Y(u,l)&&(u[l]=f[l])):(l.value=[n],c.k&&(f[c.k]=l.value))}else H?(f[l]=i,Y(u,l)&&(u[l]=i)):z&&(l.value=i,c.k&&(f[c.k]=i))};i?(g.id=-1,w2(g,e)):g()}}}const w2=Ml;function $l(c){return Kl(c)}function Kl(c,a){const e=xt();e.__VUE__=!0;const{insert:s,remove:r,patchProp:n,createElement:i,createText:t,createComment:l,setText:o,setElementText:f,parentNode:u,nextSibling:H,setScopeId:z=I2,insertStaticContent:g}=c,w=(m,v,h,V=null,d=null,b=null,y=!1,x=null,S=!!v.dynamicChildren)=>{if(m===v)return;m&&!f4(m,v)&&(V=N(m),S2(m,d,b,!0),m=null),v.patchFlag===-2&&(S=!1,v.dynamicChildren=null);const{type:L,ref:_,shapeFlag:R}=v;switch(L){case p8:P(m,v,h,V);break;case x4:p(m,v,h,V);break;case o6:m==null&&C(v,h,V,y);break;case K2:T2(m,v,h,V,d,b,y,x,S);break;default:R&1?O(m,v,h,V,d,b,y,x,S):R&6?f1(m,v,h,V,d,b,y,x,S):(R&64||R&128)&&L.process(m,v,h,V,d,b,y,x,S,X)}_!=null&&d&&P6(_,m&&m.ref,b,v||m,!v)},P=(m,v,h,V)=>{if(m==null)s(v.el=t(v.children),h,V);else{const d=v.el=m.el;v.children!==m.children&&o(d,v.children)}},p=(m,v,h,V)=>{m==null?s(v.el=l(v.children||""),h,V):v.el=m.el},C=(m,v,h,V)=>{[m.el,m.anchor]=g(m.children,v,h,V,m.el,m.anchor)},T=({el:m,anchor:v},h,V)=>{let d;for(;m&&m!==v;)d=H(m),s(m,h,V),m=d;s(v,h,V)},D=({el:m,anchor:v})=>{let h;for(;m&&m!==v;)h=H(m),r(m),m=h;r(v)},O=(m,v,h,V,d,b,y,x,S)=>{y=y||v.type==="svg",m==null?J(v,h,V,d,b,y,x,S):f2(m,v,d,b,y,x,S)},J=(m,v,h,V,d,b,y,x)=>{let S,L;const{type:_,props:R,shapeFlag:E,transition:I,dirs:$}=m;if(S=m.el=i(m.type,b,R&&R.is,R),E&8?f(S,m.children):E&16&&j(m.children,S,null,V,d,b&&_!=="foreignObject",y,x),$&&x1(m,null,V,"created"),R){for(const e2 in R)e2!=="value"&&!r3(e2)&&n(S,e2,null,R[e2],b,m.children,V,d,k);"value"in R&&n(S,"value",null,R.value),(L=R.onVnodeBeforeMount)&&j2(L,V,m)}U(S,m,m.scopeId,y,V),$&&x1(m,null,V,"beforeMount");const n2=(!d||d&&!d.pendingBranch)&&I&&!I.persisted;n2&&I.beforeEnter(S),s(S,v,h),((L=R&&R.onVnodeMounted)||n2||$)&&w2(()=>{L&&j2(L,V,m),n2&&I.enter(S),$&&x1(m,null,V,"mounted")},d)},U=(m,v,h,V,d)=>{if(h&&z(m,h),V)for(let b=0;b<V.length;b++)z(m,V[b]);if(d){let b=d.subTree;if(v===b){const y=d.vnode;U(m,y,y.scopeId,y.slotScopeIds,d.parent)}}},j=(m,v,h,V,d,b,y,x,S=0)=>{for(let L=S;L<m.length;L++){const _=m[L]=x?v1(m[L]):Y2(m[L]);w(null,_,v,h,V,d,b,y,x)}},f2=(m,v,h,V,d,b,y)=>{const x=v.el=m.el;let{patchFlag:S,dynamicChildren:L,dirs:_}=v;S|=m.patchFlag&16;const R=m.props||s2,E=v.props||s2;let I;h&&b1(h,!1),(I=E.onVnodeBeforeUpdate)&&j2(I,h,v,m),_&&x1(v,m,h,"beforeUpdate"),h&&b1(h,!0);const $=d&&v.type!=="foreignObject";if(L?p2(m.dynamicChildren,L,x,h,V,$,b):y||a2(m,v,x,null,h,V,$,b,!1),S>0){if(S&16)b2(x,v,R,E,h,V,d);else if(S&2&&R.class!==E.class&&n(x,"class",null,E.class,d),S&4&&n(x,"style",R.style,E.style,d),S&8){const n2=v.dynamicProps;for(let e2=0;e2<n2.length;e2++){const z2=n2[e2],_2=R[z2],E1=E[z2];(E1!==_2||z2==="value")&&n(x,z2,_2,E1,d,m.children,h,V,k)}}S&1&&m.children!==v.children&&f(x,v.children)}else!y&&L==null&&b2(x,v,R,E,h,V,d);((I=E.onVnodeUpdated)||_)&&w2(()=>{I&&j2(I,h,v,m),_&&x1(v,m,h,"updated")},V)},p2=(m,v,h,V,d,b,y)=>{for(let x=0;x<v.length;x++){const S=m[x],L=v[x],_=S.el&&(S.type===K2||!f4(S,L)||S.shapeFlag&70)?u(S.el):h;w(S,L,_,null,V,d,b,y,!0)}},b2=(m,v,h,V,d,b,y)=>{if(h!==V){if(h!==s2)for(const x in h)!r3(x)&&!(x in V)&&n(m,x,h[x],null,y,v.children,d,b,k);for(const x in V){if(r3(x))continue;const S=V[x],L=h[x];S!==L&&x!=="value"&&n(m,x,L,S,y,v.children,d,b,k)}"value"in V&&n(m,"value",h.value,V.value)}},T2=(m,v,h,V,d,b,y,x,S)=>{const L=v.el=m?m.el:t(""),_=v.anchor=m?m.anchor:t("");let{patchFlag:R,dynamicChildren:E,slotScopeIds:I}=v;I&&(x=x?x.concat(I):I),m==null?(s(L,h,V),s(_,h,V),j(v.children,h,_,d,b,y,x,S)):R>0&&R&64&&E&&m.dynamicChildren?(p2(m.dynamicChildren,E,h,d,b,y,x),(v.key!=null||d&&v===d.subTree)&&O7(m,v,!0)):a2(m,v,h,_,d,b,y,x,S)},f1=(m,v,h,V,d,b,y,x,S)=>{v.slotScopeIds=x,m==null?v.shapeFlag&512?d.ctx.activate(v,h,V,y,S):y2(v,h,V,d,b,y,S):V2(m,v,S)},y2=(m,v,h,V,d,b,y)=>{const x=m.component=rf(m,V,d);if(y7(m)&&(x.ctx.renderer=X),nf(x),x.asyncDep){if(d&&d.registerDep(x,H2),!m.el){const S=x.subTree=Z(x4);p(null,S,v,h)}return}H2(x,m,v,h,d,b,y)},V2=(m,v,h)=>{const V=v.component=m.component;if(hl(m,v,h))if(V.asyncDep&&!V.asyncResolved){r2(V,v,h);return}else V.next=v,ll(V.update),V.update();else v.el=m.el,V.vnode=v},H2=(m,v,h,V,d,b,y)=>{const x=()=>{if(m.isMounted){let{next:_,bu:R,u:E,parent:I,vnode:$}=m,n2=_,e2;b1(m,!1),_?(_.el=$.el,r2(m,_,y)):_=$,R&&n3(R),(e2=_.props&&_.props.onVnodeBeforeUpdate)&&j2(e2,I,_,$),b1(m,!0);const z2=f6(m),_2=m.subTree;m.subTree=z2,w(_2,z2,u(_2.el),N(_2),m,d,b),_.el=z2.el,n2===null&&pl(m,z2.el),E&&w2(E,d),(e2=_.props&&_.props.onVnodeUpdated)&&w2(()=>j2(e2,I,_,$),d)}else{let _;const{el:R,props:E}=v,{bm:I,m:$,parent:n2}=m,e2=t3(v);if(b1(m,!1),I&&n3(I),!e2&&(_=E&&E.onVnodeBeforeMount)&&j2(_,n2,v),b1(m,!0),R&&G){const z2=()=>{m.subTree=f6(m),G(R,m.subTree,m,d,null)};e2?v.type.__asyncLoader().then(()=>!m.isUnmounted&&z2()):z2()}else{const z2=m.subTree=f6(m);w(null,z2,h,V,m,d,b),v.el=z2.el}if($&&w2($,d),!e2&&(_=E&&E.onVnodeMounted)){const z2=v;w2(()=>j2(_,n2,z2),d)}(v.shapeFlag&256||n2&&t3(n2.vnode)&&n2.vnode.shapeFlag&256)&&m.a&&w2(m.a,d),m.isMounted=!0,v=h=V=null}},S=m.effect=new n8(x,()=>v8(L),m.scope),L=m.update=()=>S.run();L.id=m.uid,b1(m,!0),L()},r2=(m,v,h)=>{v.component=m;const V=m.vnode.props;m.vnode=v,m.next=null,Ul(m,v.props,V,h),Wl(m,v.children,h),r4(),_0(),n4()},a2=(m,v,h,V,d,b,y,x,S=!1)=>{const L=m&&m.children,_=m?m.shapeFlag:0,R=v.children,{patchFlag:E,shapeFlag:I}=v;if(E>0){if(E&128){g1(L,R,h,V,d,b,y,x,S);return}else if(E&256){B2(L,R,h,V,d,b,y,x,S);return}}I&8?(_&16&&k(L,d,b),R!==L&&f(h,R)):_&16?I&16?g1(L,R,h,V,d,b,y,x,S):k(L,d,b,!0):(_&8&&f(h,""),I&16&&j(R,h,V,d,b,y,x,S))},B2=(m,v,h,V,d,b,y,x,S)=>{m=m||G1,v=v||G1;const L=m.length,_=v.length,R=Math.min(L,_);let E;for(E=0;E<R;E++){const I=v[E]=S?v1(v[E]):Y2(v[E]);w(m[E],I,h,null,d,b,y,x,S)}L>_?k(m,d,b,!0,!1,R):j(v,h,V,d,b,y,x,S,R)},g1=(m,v,h,V,d,b,y,x,S)=>{let L=0;const _=v.length;let R=m.length-1,E=_-1;for(;L<=R&&L<=E;){const I=m[L],$=v[L]=S?v1(v[L]):Y2(v[L]);if(f4(I,$))w(I,$,h,null,d,b,y,x,S);else break;L++}for(;L<=R&&L<=E;){const I=m[R],$=v[E]=S?v1(v[E]):Y2(v[E]);if(f4(I,$))w(I,$,h,null,d,b,y,x,S);else break;R--,E--}if(L>R){if(L<=E){const I=E+1,$=I<_?v[I].el:V;for(;L<=E;)w(null,v[L]=S?v1(v[L]):Y2(v[L]),h,$,d,b,y,x,S),L++}}else if(L>E)for(;L<=R;)S2(m[L],d,b,!0),L++;else{const I=L,$=L,n2=new Map;for(L=$;L<=E;L++){const k2=v[L]=S?v1(v[L]):Y2(v[L]);k2.key!=null&&n2.set(k2.key,L)}let e2,z2=0;const _2=E-$+1;let E1=!1,S0=0;const l4=new Array(_2);for(L=0;L<_2;L++)l4[L]=0;for(L=I;L<=R;L++){const k2=m[L];if(z2>=_2){S2(k2,d,b,!0);continue}let G2;if(k2.key!=null)G2=n2.get(k2.key);else for(e2=$;e2<=E;e2++)if(l4[e2-$]===0&&f4(k2,v[e2])){G2=e2;break}G2===void 0?S2(k2,d,b,!0):(l4[G2-$]=L+1,G2>=S0?S0=G2:E1=!0,w(k2,v[G2],h,null,d,b,y,x,S),z2++)}const N0=E1?Yl(l4):G1;for(e2=N0.length-1,L=_2-1;L>=0;L--){const k2=$+L,G2=v[k2],w0=k2+1<_?v[k2+1].el:V;l4[L]===0?w(null,G2,h,w0,d,b,y,x,S):E1&&(e2<0||L!==N0[e2]?F2(G2,h,w0,2):e2--)}}},F2=(m,v,h,V,d=null)=>{const{el:b,type:y,transition:x,children:S,shapeFlag:L}=m;if(L&6){F2(m.component.subTree,v,h,V);return}if(L&128){m.suspense.move(v,h,V);return}if(L&64){y.move(m,v,h,X);return}if(y===K2){s(b,v,h);for(let R=0;R<S.length;R++)F2(S[R],v,h,V);s(m.anchor,v,h);return}if(y===o6){T(m,v,h);return}if(V!==2&&L&1&&x)if(V===0)x.beforeEnter(b),s(b,v,h),w2(()=>x.enter(b),d);else{const{leave:R,delayLeave:E,afterLeave:I}=x,$=()=>s(b,v,h),n2=()=>{R(b,()=>{$(),I&&I()})};E?E(b,$,n2):n2()}else s(b,v,h)},S2=(m,v,h,V=!1,d=!1)=>{const{type:b,props:y,ref:x,children:S,dynamicChildren:L,shapeFlag:_,patchFlag:R,dirs:E}=m;if(x!=null&&P6(x,null,h,m,!0),_&256){v.ctx.deactivate(m);return}const I=_&1&&E,$=!t3(m);let n2;if($&&(n2=y&&y.onVnodeBeforeUnmount)&&j2(n2,v,m),_&6)M(m.component,h,V);else{if(_&128){m.suspense.unmount(h,V);return}I&&x1(m,null,v,"beforeUnmount"),_&64?m.type.remove(m,v,h,d,X,V):L&&(b!==K2||R>0&&R&64)?k(L,v,h,!1,!0):(b===K2&&R&384||!d&&_&16)&&k(S,v,h),V&&_1(m)}($&&(n2=y&&y.onVnodeUnmounted)||I)&&w2(()=>{n2&&j2(n2,v,m),I&&x1(m,null,v,"unmounted")},h)},_1=m=>{const{type:v,el:h,anchor:V,transition:d}=m;if(v===K2){q4(h,V);return}if(v===o6){D(m);return}const b=()=>{r(h),d&&!d.persisted&&d.afterLeave&&d.afterLeave()};if(m.shapeFlag&1&&d&&!d.persisted){const{leave:y,delayLeave:x}=d,S=()=>y(h,b);x?x(m.el,b,S):S()}else b()},q4=(m,v)=>{let h;for(;m!==v;)h=H(m),r(m),m=h;r(v)},M=(m,v,h)=>{const{bum:V,scope:d,update:b,subTree:y,um:x}=m;V&&n3(V),d.stop(),b&&(b.active=!1,S2(y,m,v,h)),x&&w2(x,v),w2(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},k=(m,v,h,V=!1,d=!1,b=0)=>{for(let y=b;y<m.length;y++)S2(m[y],v,h,V,d)},N=m=>m.shapeFlag&6?N(m.component.subTree):m.shapeFlag&128?m.suspense.next():H(m.anchor||m.el),F=(m,v,h)=>{m==null?v._vnode&&S2(v._vnode,null,null,!0):w(v._vnode||null,m,v,null,null,null,h),_0(),x7(),v._vnode=m},X={p:w,um:S2,m:F2,r:_1,mt:y2,mc:j,pc:a2,pbc:p2,n:N,o:c};let m2,G;return a&&([m2,G]=a(X)),{render:F,hydrate:m2,createApp:jl(F,m2)}}function b1({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function O7(c,a,e=!1){const s=c.children,r=a.children;if(q(s)&&q(r))for(let n=0;n<s.length;n++){const i=s[n];let t=r[n];t.shapeFlag&1&&!t.dynamicChildren&&((t.patchFlag<=0||t.patchFlag===32)&&(t=r[n]=v1(r[n]),t.el=i.el),e||O7(i,t))}}function Yl(c){const a=c.slice(),e=[0];let s,r,n,i,t;const l=c.length;for(s=0;s<l;s++){const o=c[s];if(o!==0){if(r=e[e.length-1],c[r]<o){a[s]=r,e.push(s);continue}for(n=0,i=e.length-1;n<i;)t=n+i>>1,c[e[t]]<o?n=t+1:i=t;o<c[e[n]]&&(n>0&&(a[s]=e[n-1]),e[n]=s)}}for(n=e.length,i=e[n-1];n-- >0;)e[n]=i,i=a[i];return e}const Xl=c=>c.__isTeleport,K2=Symbol(void 0),p8=Symbol(void 0),x4=Symbol(void 0),o6=Symbol(void 0),v4=[];let O2=null;function l3(c=!1){v4.push(O2=c?null:[])}function Ql(){v4.pop(),O2=v4[v4.length-1]||null}let b4=1;function $0(c){b4+=c}function Jl(c){return c.dynamicChildren=b4>0?O2||G1:null,Ql(),b4>0&&O2&&O2.push(c),c}function f3(c,a,e,s,r,n){return Jl(K(c,a,e,s,r,n,!0))}function T6(c){return c?c.__v_isVNode===!0:!1}function f4(c,a){return c.type===a.type&&c.key===a.key}const F3="__vInternal",U7=({key:c})=>c!=null?c:null,o3=({ref:c,ref_key:a,ref_for:e})=>c!=null?d2(c)||v2(c)||W(c)?{i:R2,r:c,k:a,f:!!e}:c:null;function K(c,a=null,e=null,s=0,r=null,n=c===K2?0:1,i=!1,t=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&U7(a),ref:a&&o3(a),scopeId:R3,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return t?(V8(l,e),n&128&&c.normalize(l)):e&&(l.shapeFlag|=d2(e)?8:16),b4>0&&!i&&O2&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&O2.push(l),l}const Z=Zl;function Zl(c,a=null,e=null,s=0,r=null,n=!1){if((!c||c===Pl)&&(c=x4),T6(c)){const t=J1(c,a,!0);return e&&V8(t,e),b4>0&&!n&&O2&&(t.shapeFlag&6?O2[O2.indexOf(c)]=t:O2.push(t)),t.patchFlag|=-2,t}if(mf(c)&&(c=c.__vccOpts),a){a=cf(a);let{class:t,style:l}=a;t&&!d2(t)&&(a.class=b3(t)),o2(l)&&(h7(l)&&!q(l)&&(l=x2({},l)),a.style=T4(l))}const i=d2(c)?1:Vl(c)?128:Xl(c)?64:o2(c)?4:W(c)?2:0;return K(c,a,e,s,r,i,n,!0)}function cf(c){return c?h7(c)||F3 in c?x2({},c):c:null}function J1(c,a,e=!1){const{props:s,ref:r,patchFlag:n,children:i}=c,t=a?af(s||{},a):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:t,key:t&&U7(t),ref:a&&a.ref?e&&r?q(r)?r.concat(o3(a)):[r,o3(a)]:o3(a):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==K2?n===-1?16:n|16:n,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&J1(c.ssContent),ssFallback:c.ssFallback&&J1(c.ssFallback),el:c.el,anchor:c.anchor}}function I7(c=" ",a=0){return Z(p8,null,c,a)}function Y2(c){return c==null||typeof c=="boolean"?Z(x4):q(c)?Z(K2,null,c.slice()):typeof c=="object"?v1(c):Z(p8,null,String(c))}function v1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:J1(c)}function V8(c,a){let e=0;const{shapeFlag:s}=c;if(a==null)a=null;else if(q(a))e=16;else if(typeof a=="object")if(s&65){const r=a.default;r&&(r._c&&(r._d=!1),V8(c,r()),r._c&&(r._d=!0));return}else{e=32;const r=a._;!r&&!(F3 in a)?a._ctx=R2:r===3&&R2&&(R2.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else W(a)?(a={default:a,_ctx:R2},e=32):(a=String(a),s&64?(e=16,a=[I7(a)]):e=8);c.children=a,c.shapeFlag|=e}function af(...c){const a={};for(let e=0;e<c.length;e++){const s=c[e];for(const r in s)if(r==="class")a.class!==s.class&&(a.class=b3([a.class,s.class]));else if(r==="style")a.style=T4([a.style,s.style]);else if(S3(r)){const n=a[r],i=s[r];i&&n!==i&&!(q(n)&&n.includes(i))&&(a[r]=n?[].concat(n,i):i)}else r!==""&&(a[r]=s[r])}return a}function j2(c,a,e,s=null){q2(c,a,7,[e,s])}const ef=D7();let sf=0;function rf(c,a,e){const s=c.type,r=(a?a.appContext:c.appContext)||ef,n={uid:sf++,vnode:c,type:s,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new s7(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:B7(s,r),emitsOptions:S7(s,r),emit:null,emitted:null,propsDefaults:s2,inheritAttrs:s.inheritAttrs,ctx:s2,data:s2,props:s2,attrs:s2,slots:s2,refs:s2,setupState:s2,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=a?a.root:n,n.emit=ml.bind(null,n),c.ce&&c.ce(n),n}let M2=null;const q7=()=>M2||R2,Z1=c=>{M2=c,c.scope.on()},T1=()=>{M2&&M2.scope.off(),M2=null};function W7(c){return c.vnode.shapeFlag&4}let S4=!1;function nf(c,a=!1){S4=a;const{props:e,children:s}=c.vnode,r=W7(c);Ol(c,e,r,a),ql(c,s);const n=r?tf(c,a):void 0;return S4=!1,n}function tf(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=Q1(new Proxy(c.ctx,Rl));const{setup:s}=e;if(s){const r=c.setupContext=s.length>1?ff(c):null;Z1(c),r4();const n=V1(s,c,0,[c.props,r]);if(n4(),T1(),c7(n)){if(n.then(T1,T1),a)return n.then(i=>{K0(c,i,a)}).catch(i=>{P3(i,c,0)});c.asyncDep=n}else K0(c,n,a)}else G7(c,a)}function K0(c,a,e){W(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:o2(a)&&(c.setupState=d7(a)),G7(c,e)}let Y0;function G7(c,a,e){const s=c.type;if(!c.render){if(!a&&Y0&&!s.render){const r=s.template||z8(c).template;if(r){const{isCustomElement:n,compilerOptions:i}=c.appContext.config,{delimiters:t,compilerOptions:l}=s,o=x2(x2({isCustomElement:n,delimiters:t},i),l);s.render=Y0(r,o)}}c.render=s.render||I2}Z1(c),r4(),Bl(c),n4(),T1()}function lf(c){return new Proxy(c.attrs,{get(a,e){return A2(c,"get","$attrs"),a[e]}})}function ff(c){const a=s=>{c.exposed=s||{}};let e;return{get attrs(){return e||(e=lf(c))},slots:c.slots,emit:c.emit,expose:a}}function _3(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(d7(Q1(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in h3)return h3[e](c)}}))}function of(c,a=!0){return W(c)?c.displayName||c.name:c.name||a&&c.__name}function mf(c){return W(c)&&"__vccOpts"in c}const t2=(c,a)=>nl(c,a,S4);function E3(c,a,e){const s=arguments.length;return s===2?o2(a)&&!q(a)?T6(a)?Z(c,null,[a]):Z(c,a):Z(c,null,a):(s>3?e=Array.prototype.slice.call(arguments,2):s===3&&T6(e)&&(e=[e]),Z(c,a,e))}const uf="3.2.41",vf="http://www.w3.org/2000/svg",w1=typeof document<"u"?document:null,X0=w1&&w1.createElement("template"),Hf={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,s)=>{const r=a?w1.createElementNS(vf,c):w1.createElement(c,e?{is:e}:void 0);return c==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:c=>w1.createTextNode(c),createComment:c=>w1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>w1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,s,r,n){const i=e?e.previousSibling:a.lastChild;if(r&&(r===n||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),e),!(r===n||!(r=r.nextSibling)););else{X0.innerHTML=s?`<svg>${c}</svg>`:c;const t=X0.content;if(s){const l=t.firstChild;for(;l.firstChild;)t.appendChild(l.firstChild);t.removeChild(l)}a.insertBefore(t,e)}return[i?i.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function zf(c,a,e){const s=c._vtc;s&&(a=(a?[a,...s]:[...s]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function hf(c,a,e){const s=c.style,r=d2(e);if(e&&!r){for(const n in e)R6(s,n,e[n]);if(a&&!d2(a))for(const n in a)e[n]==null&&R6(s,n,"")}else{const n=s.display;r?a!==e&&(s.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(s.display=n)}}const Q0=/\s*!important$/;function R6(c,a,e){if(q(e))e.forEach(s=>R6(c,a,s));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const s=pf(c,a);Q0.test(e)?c.setProperty(s4(s),e.replace(Q0,""),"important"):c[s]=e}}const J0=["Webkit","Moz","ms"],m6={};function pf(c,a){const e=m6[a];if(e)return e;let s=Z2(a);if(s!=="filter"&&s in c)return m6[a]=s;s=y3(s);for(let r=0;r<J0.length;r++){const n=J0[r]+s;if(n in c)return m6[a]=n}return a}const Z0="http://www.w3.org/1999/xlink";function Vf(c,a,e,s,r){if(s&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(Z0,a.slice(6,a.length)):c.setAttributeNS(Z0,a,e);else{const n=vt(a);e==null||n&&!Q5(e)?c.removeAttribute(a):c.setAttribute(a,n?"":e)}}function Mf(c,a,e,s,r,n,i){if(a==="innerHTML"||a==="textContent"){s&&i(s,r,n),c[a]=e==null?"":e;return}if(a==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=e;const l=e==null?"":e;(c.value!==l||c.tagName==="OPTION")&&(c.value=l),e==null&&c.removeAttribute(a);return}let t=!1;if(e===""||e==null){const l=typeof c[a];l==="boolean"?e=Q5(e):e==null&&l==="string"?(e="",t=!0):l==="number"&&(e=0,t=!0)}try{c[a]=e}catch{}t&&c.removeAttribute(a)}function U1(c,a,e,s){c.addEventListener(a,e,s)}function df(c,a,e,s){c.removeEventListener(a,e,s)}function Cf(c,a,e,s,r=null){const n=c._vei||(c._vei={}),i=n[a];if(s&&i)i.value=s;else{const[t,l]=Lf(a);if(s){const o=n[a]=bf(s,r);U1(c,t,o,l)}else i&&(df(c,t,i,l),n[a]=void 0)}}const c5=/(?:Once|Passive|Capture)$/;function Lf(c){let a;if(c5.test(c)){a={};let s;for(;s=c.match(c5);)c=c.slice(0,c.length-s[0].length),a[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):s4(c.slice(2)),a]}let u6=0;const gf=Promise.resolve(),xf=()=>u6||(gf.then(()=>u6=0),u6=Date.now());function bf(c,a){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;q2(Sf(s,e.value),a,5,[s])};return e.value=c,e.attached=xf(),e}function Sf(c,a){if(q(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(s=>r=>!r._stopped&&s&&s(r))}else return a}const a5=/^on[a-z]/,Nf=(c,a,e,s,r=!1,n,i,t,l)=>{a==="class"?zf(c,s,r):a==="style"?hf(c,e,s):S3(a)?c8(a)||Cf(c,a,e,s,i):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):wf(c,a,s,r))?Mf(c,a,s,n,i,t,l):(a==="true-value"?c._trueValue=s:a==="false-value"&&(c._falseValue=s),Vf(c,a,s,r))};function wf(c,a,e,s){return s?!!(a==="innerHTML"||a==="textContent"||a in c&&a5.test(a)&&W(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||a5.test(a)&&d2(e)?!1:a in c}const e5=c=>{const a=c.props["onUpdate:modelValue"]||!1;return q(a)?e=>n3(a,e):a};function yf(c){c.target.composing=!0}function s5(c){const a=c.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const aU={created(c,{modifiers:{lazy:a,trim:e,number:s}},r){c._assign=e5(r);const n=s||r.props&&r.props.type==="number";U1(c,a?"change":"input",i=>{if(i.target.composing)return;let t=c.value;e&&(t=t.trim()),n&&(t=C6(t)),c._assign(t)}),e&&U1(c,"change",()=>{c.value=c.value.trim()}),a||(U1(c,"compositionstart",yf),U1(c,"compositionend",s5),U1(c,"change",s5))},mounted(c,{value:a}){c.value=a==null?"":a},beforeUpdate(c,{value:a,modifiers:{lazy:e,trim:s,number:r}},n){if(c._assign=e5(n),c.composing||document.activeElement===c&&c.type!=="range"&&(e||s&&c.value.trim()===a||(r||c.type==="number")&&C6(c.value)===a))return;const i=a==null?"":a;c.value!==i&&(c.value=i)}},kf=["ctrl","shift","alt","meta"],Af={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,a)=>kf.some(e=>c[`${e}Key`]&&!a.includes(e))},eU=(c,a)=>(e,...s)=>{for(let r=0;r<a.length;r++){const n=Af[a[r]];if(n&&n(e,a))return}return c(e,...s)},Pf=x2({patchProp:Nf},Hf);let r5;function Tf(){return r5||(r5=$l(Pf))}const Rf=(...c)=>{const a=Tf().createApp(...c),{mount:e}=a;return a.mount=s=>{const r=Bf(s);if(!r)return;const n=a._component;!W(n)&&!n.render&&!n.template&&(n.template=r.innerHTML),r.innerHTML="";const i=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},a};function Bf(c){return d2(c)?document.querySelector(c):c}var Ff=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let j7;const D3=c=>j7=c,$7=Symbol();function B6(c){return c&&typeof c=="object"&&Object.prototype.toString.call(c)==="[object Object]"&&typeof c.toJSON!="function"}var H4;(function(c){c.direct="direct",c.patchObject="patch object",c.patchFunction="patch function"})(H4||(H4={}));function _f(){const c=r7(!0),a=c.run(()=>A3({}));let e=[],s=[];const r=Q1({install(n){D3(r),r._a=n,n.provide($7,r),n.config.globalProperties.$pinia=r,s.forEach(i=>e.push(i)),s=[]},use(n){return!this._a&&!Ff?s.push(n):e.push(n),this},_p:e,_a:null,_e:c,_s:new Map,state:a});return r}const K7=()=>{};function n5(c,a,e,s=K7){c.push(a);const r=()=>{const n=c.indexOf(a);n>-1&&(c.splice(n,1),s())};return!e&&q7()&&H8(r),r}function D1(c,...a){c.slice().forEach(e=>{e(...a)})}function F6(c,a){c instanceof Map&&a instanceof Map&&a.forEach((e,s)=>c.set(s,e)),c instanceof Set&&a instanceof Set&&a.forEach(c.add,c);for(const e in a){if(!a.hasOwnProperty(e))continue;const s=a[e],r=c[e];B6(r)&&B6(s)&&c.hasOwnProperty(e)&&!v2(s)&&!p1(s)?c[e]=F6(r,s):c[e]=s}return c}const Ef=Symbol();function Df(c){return!B6(c)||!c.hasOwnProperty(Ef)}const{assign:H1}=Object;function Of(c){return!!(v2(c)&&c.effect)}function Uf(c,a,e,s){const{state:r,actions:n,getters:i}=a,t=e.state.value[c];let l;function o(){t||(e.state.value[c]=r?r():{});const f=al(e.state.value[c]);return H1(f,n,Object.keys(i||{}).reduce((u,H)=>(u[H]=Q1(t2(()=>{D3(e);const z=e._s.get(c);return i[H].call(z,z)})),u),{}))}return l=Y7(c,o,a,e,s,!0),l.$reset=function(){const u=r?r():{};this.$patch(H=>{H1(H,u)})},l}function Y7(c,a,e={},s,r,n){let i;const t=H1({actions:{}},e),l={deep:!0};let o,f,u=Q1([]),H=Q1([]),z;const g=s.state.value[c];!n&&!g&&(s.state.value[c]={}),A3({});let w;function P(U){let j;o=f=!1,typeof U=="function"?(U(s.state.value[c]),j={type:H4.patchFunction,storeId:c,events:z}):(F6(s.state.value[c],U),j={type:H4.patchObject,payload:U,storeId:c,events:z});const f2=w=Symbol();u8().then(()=>{w===f2&&(o=!0)}),f=!0,D1(u,j,s.state.value[c])}const p=K7;function C(){i.stop(),u=[],H=[],s._s.delete(c)}function T(U,j){return function(){D3(s);const f2=Array.from(arguments),p2=[],b2=[];function T2(V2){p2.push(V2)}function f1(V2){b2.push(V2)}D1(H,{args:f2,name:U,store:O,after:T2,onError:f1});let y2;try{y2=j.apply(this&&this.$id===c?this:O,f2)}catch(V2){throw D1(b2,V2),V2}return y2 instanceof Promise?y2.then(V2=>(D1(p2,V2),V2)).catch(V2=>(D1(b2,V2),Promise.reject(V2))):(D1(p2,y2),y2)}}const D={_p:s,$id:c,$onAction:n5.bind(null,H),$patch:P,$reset:p,$subscribe(U,j={}){const f2=n5(u,U,j.detached,()=>p2()),p2=i.run(()=>K1(()=>s.state.value[c],b2=>{(j.flush==="sync"?f:o)&&U({storeId:c,type:H4.direct,events:z},b2)},H1({},l,j)));return f2},$dispose:C},O=i4(D);s._s.set(c,O);const J=s._e.run(()=>(i=r7(),i.run(()=>a())));for(const U in J){const j=J[U];if(v2(j)&&!Of(j)||p1(j))n||(g&&Df(j)&&(v2(j)?j.value=g[U]:F6(j,g[U])),s.state.value[c][U]=j);else if(typeof j=="function"){const f2=T(U,j);J[U]=f2,t.actions[U]=j}}return H1(O,J),H1(Q(O),J),Object.defineProperty(O,"$state",{get:()=>s.state.value[c],set:U=>{P(j=>{H1(j,U)})}}),s._p.forEach(U=>{H1(O,i.run(()=>U({store:O,app:s._a,pinia:s,options:t})))}),g&&n&&e.hydrate&&e.hydrate(O.$state,g),o=!0,f=!0,O}function If(c,a,e){let s,r;const n=typeof a=="function";typeof c=="string"?(s=c,r=n?e:a):(r=c,s=c.id);function i(t,l){const o=q7();return t=t||o&&J2($7),t&&D3(t),t=j7,t._s.has(s)||(n?Y7(s,a,r,t):Uf(s,r,t)),t._s.get(s)}return i.$id=s,i}const X7=If("auth",{state:()=>({isAuth:!1,id:void 0,user:{name:void 0,email:void 0}}),actions:{login(c,a,e,s){this.id=e,this.isAuth=!0,this.user.email=c,this.user.password=a},logout(){this.isAuth=!1,this.user.email="",this.user.password=""}},persist:{enabled:!0,strategies:[{key:"auth",storage:localStorage}]}}),V3=A3(!1),qf=()=>V3.value=!V3.value,Wf=180,Gf=38,Q7=t2(()=>`${V3.value?Gf:Wf}px`);const jf=(c,a)=>{const e=c.__vccOpts||c;for(const[s,r]of a)e[s]=r;return e},F1=c=>(ul("data-v-db0dff3b"),c=c(),vl(),c),$f={key:0},Kf={class:"top-icons"},Yf={class:"icon-top"},Xf={class:"navbar-item"},Qf={class:"navbar-item"},Jf={class:"navbar-item"},Zf={key:1},co={class:"open-sidebar"},ao={class:"top-sidebar"},eo={class:"logo"},so={class:"icon-pen"},ro=F1(()=>K("div",{class:"logo-title"},[K("h1",null,"Noted")],-1)),no={class:"sidebar-menu"},io=F1(()=>K("li",{class:"navbar-item"},"Home",-1)),to=F1(()=>K("li",{class:"navbar-item"},"Login",-1)),lo=F1(()=>K("li",{class:"navbar-item"},"Signup",-1)),fo=F1(()=>K("li",{class:"navbar-item"},"Logout",-1)),oo={class:"bottom-sidebar"},mo={class:"footer-icons"},uo={class:"icon"},vo={class:"icon"},Ho={class:"icon"},zo=F1(()=>K("div",null,[K("h1",null,"2022 \xA9 All Rights Reserved")],-1)),ho=F1(()=>K("i",{class:"fas fa-angle-double-left"},null,-1)),po=[ho],Vo={__name:"Sidebar",setup(c){const a=X7(),e=V3,s=qf,r=Q7;return(n,i)=>{const t=N6("fa"),l=N6("router-link");return l3(),f3("div",{class:"sidebar",style:T4({width:g2(r)})},[K("h1",null,[g2(e)?(l3(),f3("span",$f,[K("div",Kf,[K("div",Yf,[Z(l,{to:{name:"home"}},{default:a1(()=>[K("div",Xf,[Z(t,{icon:"house"})])]),_:1})]),K("div",null,[Z(l,{to:{name:"login"}},{default:a1(()=>[K("div",Qf,[Z(t,{icon:"right-to-bracket"})])]),_:1})]),K("div",null,[Z(l,{to:{name:"signup"}},{default:a1(()=>[K("div",Jf,[Z(t,{icon:"user-plus"})])]),_:1})]),K("div",null,[Z(l,{class:"logged-in",to:{name:"home"}},{default:a1(()=>[K("div",{class:"navbar-item",onClick:i[0]||(i[0]=o=>g2(a).logout())},[Z(t,{icon:"fa-right-from-bracket"})])]),_:1})])])])):(l3(),f3("span",Zf,[K("div",co,[K("div",ao,[K("div",eo,[K("div",so,[Z(t,{icon:"fa-pen-nib"})]),ro]),K("div",no,[K("ul",null,[Z(l,{to:{name:"home"}},{default:a1(()=>[io]),_:1}),Z(l,{to:{name:"login"}},{default:a1(()=>[to]),_:1}),Z(l,{to:{name:"signup"}},{default:a1(()=>[lo]),_:1})]),Z(l,{class:"logged-in",to:{name:"home"}},{default:a1(()=>[K("div",{class:"logged-user",onClick:i[1]||(i[1]=o=>g2(a).logout())},[I7(pt(g2(a).user.email)+" ",1),fo])]),_:1})])]),K("div",oo,[K("ul",mo,[K("li",uo,[Z(t,{icon:["fab","facebook"]})]),K("li",vo,[Z(t,{icon:["fab","instagram"]})]),K("li",Ho,[Z(t,{icon:["fab","twitter"]})])]),zo])])]))]),K("span",{class:b3(["collapse-icon",{"rotate-180":g2(e)}]),onClick:i[2]||(i[2]=(...o)=>g2(s)&&g2(s)(...o))},po,2)],4)}}},Mo=jf(Vo,[["__scopeId","data-v-db0dff3b"]]),Co={__name:"App",setup(c){const a=Q7;return X7(),A7(async()=>{}),(e,s)=>{const r=N6("router-view");return l3(),f3(K2,null,[Z(Mo),K("div",{style:T4({"margin-left":g2(a)})},[Z(r)],4)],64)}}},Lo="modulepreload",go=function(c){return"/Task-App/"+c},i5={},v6=function(a,e,s){return!e||e.length===0?a():Promise.all(e.map(r=>{if(r=go(r),r in i5)return;i5[r]=!0;const n=r.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const t=document.createElement("link");if(t.rel=n?"stylesheet":Lo,n||(t.as="script",t.crossOrigin=""),t.href=r,document.head.appendChild(t),n)return new Promise((l,o)=>{t.addEventListener("load",l),t.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>a())};/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const I1=typeof window<"u";function xo(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const c2=Object.assign;function H6(c,a){const e={};for(const s in a){const r=a[s];e[s]=W2(r)?r.map(c):c(r)}return e}const z4=()=>{},W2=Array.isArray,bo=/\/$/,So=c=>c.replace(bo,"");function z6(c,a,e="/"){let s,r={},n="",i="";const t=a.indexOf("#");let l=a.indexOf("?");return t<l&&t>=0&&(l=-1),l>-1&&(s=a.slice(0,l),n=a.slice(l+1,t>-1?t:a.length),r=c(n)),t>-1&&(s=s||a.slice(0,t),i=a.slice(t,a.length)),s=ko(s!=null?s:a,e),{fullPath:s+(n&&"?")+n+i,path:s,query:r,hash:i}}function No(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function t5(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function wo(c,a,e){const s=a.matched.length-1,r=e.matched.length-1;return s>-1&&s===r&&c4(a.matched[s],e.matched[r])&&J7(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function c4(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function J7(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!yo(c[e],a[e]))return!1;return!0}function yo(c,a){return W2(c)?l5(c,a):W2(a)?l5(a,c):c===a}function l5(c,a){return W2(a)?c.length===a.length&&c.every((e,s)=>e===a[s]):c.length===1&&c[0]===a}function ko(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),s=c.split("/");let r=e.length-1,n,i;for(n=0;n<s.length;n++)if(i=s[n],i!==".")if(i==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+s.slice(n-(n===s.length?1:0)).join("/")}var N4;(function(c){c.pop="pop",c.push="push"})(N4||(N4={}));var h4;(function(c){c.back="back",c.forward="forward",c.unknown=""})(h4||(h4={}));function Ao(c){if(!c)if(I1){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),So(c)}const Po=/^[^#]+#/;function To(c,a){return c.replace(Po,"#")+a}function Ro(c,a){const e=document.documentElement.getBoundingClientRect(),s=c.getBoundingClientRect();return{behavior:a.behavior,left:s.left-e.left-(a.left||0),top:s.top-e.top-(a.top||0)}}const O3=()=>({left:window.pageXOffset,top:window.pageYOffset});function Bo(c){let a;if("el"in c){const e=c.el,s=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?s?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;a=Ro(r,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function f5(c,a){return(history.state?history.state.position-a:-1)+c}const _6=new Map;function Fo(c,a){_6.set(c,a)}function _o(c){const a=_6.get(c);return _6.delete(c),a}let Eo=()=>location.protocol+"//"+location.host;function Z7(c,a){const{pathname:e,search:s,hash:r}=a,n=c.indexOf("#");if(n>-1){let t=r.includes(c.slice(n))?c.slice(n).length:1,l=r.slice(t);return l[0]!=="/"&&(l="/"+l),t5(l,"")}return t5(e,c)+s+r}function Do(c,a,e,s){let r=[],n=[],i=null;const t=({state:H})=>{const z=Z7(c,location),g=e.value,w=a.value;let P=0;if(H){if(e.value=z,a.value=H,i&&i===g){i=null;return}P=w?H.position-w.position:0}else s(z);r.forEach(p=>{p(e.value,g,{delta:P,type:N4.pop,direction:P?P>0?h4.forward:h4.back:h4.unknown})})};function l(){i=e.value}function o(H){r.push(H);const z=()=>{const g=r.indexOf(H);g>-1&&r.splice(g,1)};return n.push(z),z}function f(){const{history:H}=window;!H.state||H.replaceState(c2({},H.state,{scroll:O3()}),"")}function u(){for(const H of n)H();n=[],window.removeEventListener("popstate",t),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",t),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:o,destroy:u}}function o5(c,a,e,s=!1,r=!1){return{back:c,current:a,forward:e,replaced:s,position:window.history.length,scroll:r?O3():null}}function Oo(c){const{history:a,location:e}=window,s={value:Z7(c,e)},r={value:a.state};r.value||n(s.value,{back:null,current:s.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function n(l,o,f){const u=c.indexOf("#"),H=u>-1?(e.host&&document.querySelector("base")?c:c.slice(u))+l:Eo()+c+l;try{a[f?"replaceState":"pushState"](o,"",H),r.value=o}catch(z){console.error(z),e[f?"replace":"assign"](H)}}function i(l,o){const f=c2({},a.state,o5(r.value.back,l,r.value.forward,!0),o,{position:r.value.position});n(l,f,!0),s.value=l}function t(l,o){const f=c2({},r.value,a.state,{forward:l,scroll:O3()});n(f.current,f,!0);const u=c2({},o5(s.value,l,null),{position:f.position+1},o);n(l,u,!1),s.value=l}return{location:s,state:r,push:t,replace:i}}function Uo(c){c=Ao(c);const a=Oo(c),e=Do(c,a.state,a.location,a.replace);function s(n,i=!0){i||e.pauseListeners(),history.go(n)}const r=c2({location:"",base:c,go:s,createHref:To.bind(null,c)},a,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function Io(c){return c=location.host?c||location.pathname+location.search:"",c.includes("#")||(c+="#"),Uo(c)}function qo(c){return typeof c=="string"||c&&typeof c=="object"}function cc(c){return typeof c=="string"||typeof c=="symbol"}const m1={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ac=Symbol("");var m5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(m5||(m5={}));function a4(c,a){return c2(new Error,{type:c,[ac]:!0},a)}function c1(c,a){return c instanceof Error&&ac in c&&(a==null||!!(c.type&a))}const u5="[^/]+?",Wo={sensitive:!1,strict:!1,start:!0,end:!0},Go=/[.+*?^${}()[\]/\\]/g;function jo(c,a){const e=c2({},Wo,a),s=[];let r=e.start?"^":"";const n=[];for(const o of c){const f=o.length?[]:[90];e.strict&&!o.length&&(r+="/");for(let u=0;u<o.length;u++){const H=o[u];let z=40+(e.sensitive?.25:0);if(H.type===0)u||(r+="/"),r+=H.value.replace(Go,"\\$&"),z+=40;else if(H.type===1){const{value:g,repeatable:w,optional:P,regexp:p}=H;n.push({name:g,repeatable:w,optional:P});const C=p||u5;if(C!==u5){z+=10;try{new RegExp(`(${C})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${g}" (${C}): `+D.message)}}let T=w?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;u||(T=P&&o.length<2?`(?:/${T})`:"/"+T),P&&(T+="?"),r+=T,z+=20,P&&(z+=-8),w&&(z+=-20),C===".*"&&(z+=-50)}f.push(z)}s.push(f)}if(e.strict&&e.end){const o=s.length-1;s[o][s[o].length-1]+=.7000000000000001}e.strict||(r+="/?"),e.end?r+="$":e.strict&&(r+="(?:/|$)");const i=new RegExp(r,e.sensitive?"":"i");function t(o){const f=o.match(i),u={};if(!f)return null;for(let H=1;H<f.length;H++){const z=f[H]||"",g=n[H-1];u[g.name]=z&&g.repeatable?z.split("/"):z}return u}function l(o){let f="",u=!1;for(const H of c){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const z of H)if(z.type===0)f+=z.value;else if(z.type===1){const{value:g,repeatable:w,optional:P}=z,p=g in o?o[g]:"";if(W2(p)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const C=W2(p)?p.join("/"):p;if(!C)if(P)H.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${g}"`);f+=C}}return f||"/"}return{re:i,score:s,keys:n,parse:t,stringify:l}}function $o(c,a){let e=0;for(;e<c.length&&e<a.length;){const s=a[e]-c[e];if(s)return s;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function Ko(c,a){let e=0;const s=c.score,r=a.score;for(;e<s.length&&e<r.length;){const n=$o(s[e],r[e]);if(n)return n;e++}if(Math.abs(r.length-s.length)===1){if(v5(s))return 1;if(v5(r))return-1}return r.length-s.length}function v5(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const Yo={type:0,value:""},Xo=/[a-zA-Z0-9_]/;function Qo(c){if(!c)return[[]];if(c==="/")return[[Yo]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(z){throw new Error(`ERR (${e})/"${o}": ${z}`)}let e=0,s=e;const r=[];let n;function i(){n&&r.push(n),n=[]}let t=0,l,o="",f="";function u(){!o||(e===0?n.push({type:0,value:o}):e===1||e===2||e===3?(n.length>1&&(l==="*"||l==="+")&&a(`A repeatable param (${o}) must be alone in its segment. eg: '/:ids+.`),n.push({type:1,value:o,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):a("Invalid state to consume buffer"),o="")}function H(){o+=l}for(;t<c.length;){if(l=c[t++],l==="\\"&&e!==2){s=e,e=4;continue}switch(e){case 0:l==="/"?(o&&u(),i()):l===":"?(u(),e=1):H();break;case 4:H(),e=s;break;case 1:l==="("?e=2:Xo.test(l)?H():(u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&t--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:e=3:f+=l;break;case 3:u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&t--,f="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${o}"`),u(),i(),r}function Jo(c,a,e){const s=jo(Qo(c.path),e),r=c2(s,{record:c,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function Zo(c,a){const e=[],s=new Map;a=h5({strict:!1,end:!0,sensitive:!1},a);function r(f){return s.get(f)}function n(f,u,H){const z=!H,g=cm(f);g.aliasOf=H&&H.record;const w=h5(a,f),P=[g];if("alias"in f){const T=typeof f.alias=="string"?[f.alias]:f.alias;for(const D of T)P.push(c2({},g,{components:H?H.record.components:g.components,path:D,aliasOf:H?H.record:g}))}let p,C;for(const T of P){const{path:D}=T;if(u&&D[0]!=="/"){const O=u.record.path,J=O[O.length-1]==="/"?"":"/";T.path=u.record.path+(D&&J+D)}if(p=Jo(T,u,w),H?H.alias.push(p):(C=C||p,C!==p&&C.alias.push(p),z&&f.name&&!z5(p)&&i(f.name)),g.children){const O=g.children;for(let J=0;J<O.length;J++)n(O[J],p,H&&H.children[J])}H=H||p,l(p)}return C?()=>{i(C)}:z4}function i(f){if(cc(f)){const u=s.get(f);u&&(s.delete(f),e.splice(e.indexOf(u),1),u.children.forEach(i),u.alias.forEach(i))}else{const u=e.indexOf(f);u>-1&&(e.splice(u,1),f.record.name&&s.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function t(){return e}function l(f){let u=0;for(;u<e.length&&Ko(f,e[u])>=0&&(f.record.path!==e[u].record.path||!ec(f,e[u]));)u++;e.splice(u,0,f),f.record.name&&!z5(f)&&s.set(f.record.name,f)}function o(f,u){let H,z={},g,w;if("name"in f&&f.name){if(H=s.get(f.name),!H)throw a4(1,{location:f});w=H.record.name,z=c2(H5(u.params,H.keys.filter(C=>!C.optional).map(C=>C.name)),f.params&&H5(f.params,H.keys.map(C=>C.name))),g=H.stringify(z)}else if("path"in f)g=f.path,H=e.find(C=>C.re.test(g)),H&&(z=H.parse(g),w=H.record.name);else{if(H=u.name?s.get(u.name):e.find(C=>C.re.test(u.path)),!H)throw a4(1,{location:f,currentLocation:u});w=H.record.name,z=c2({},u.params,f.params),g=H.stringify(z)}const P=[];let p=H;for(;p;)P.unshift(p.record),p=p.parent;return{name:w,path:g,params:z,matched:P,meta:em(P)}}return c.forEach(f=>n(f)),{addRoute:n,resolve:o,removeRoute:i,getRoutes:t,getRecordMatcher:r}}function H5(c,a){const e={};for(const s of a)s in c&&(e[s]=c[s]);return e}function cm(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:am(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function am(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const s in c.components)a[s]=typeof e=="boolean"?e:e[s];return a}function z5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function em(c){return c.reduce((a,e)=>c2(a,e.meta),{})}function h5(c,a){const e={};for(const s in c)e[s]=s in a?a[s]:c[s];return e}function ec(c,a){return a.children.some(e=>e===c||ec(c,e))}const sc=/#/g,sm=/&/g,rm=/\//g,nm=/=/g,im=/\?/g,rc=/\+/g,tm=/%5B/g,lm=/%5D/g,nc=/%5E/g,fm=/%60/g,ic=/%7B/g,om=/%7C/g,tc=/%7D/g,mm=/%20/g;function M8(c){return encodeURI(""+c).replace(om,"|").replace(tm,"[").replace(lm,"]")}function um(c){return M8(c).replace(ic,"{").replace(tc,"}").replace(nc,"^")}function E6(c){return M8(c).replace(rc,"%2B").replace(mm,"+").replace(sc,"%23").replace(sm,"%26").replace(fm,"`").replace(ic,"{").replace(tc,"}").replace(nc,"^")}function vm(c){return E6(c).replace(nm,"%3D")}function Hm(c){return M8(c).replace(sc,"%23").replace(im,"%3F")}function zm(c){return c==null?"":Hm(c).replace(rm,"%2F")}function M3(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function hm(c){const a={};if(c===""||c==="?")return a;const s=(c[0]==="?"?c.slice(1):c).split("&");for(let r=0;r<s.length;++r){const n=s[r].replace(rc," "),i=n.indexOf("="),t=M3(i<0?n:n.slice(0,i)),l=i<0?null:M3(n.slice(i+1));if(t in a){let o=a[t];W2(o)||(o=a[t]=[o]),o.push(l)}else a[t]=l}return a}function p5(c){let a="";for(let e in c){const s=c[e];if(e=vm(e),s==null){s!==void 0&&(a+=(a.length?"&":"")+e);continue}(W2(s)?s.map(n=>n&&E6(n)):[s&&E6(s)]).forEach(n=>{n!==void 0&&(a+=(a.length?"&":"")+e,n!=null&&(a+="="+n))})}return a}function pm(c){const a={};for(const e in c){const s=c[e];s!==void 0&&(a[e]=W2(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return a}const Vm=Symbol(""),V5=Symbol(""),U3=Symbol(""),lc=Symbol(""),D6=Symbol("");function o4(){let c=[];function a(s){return c.push(s),()=>{const r=c.indexOf(s);r>-1&&c.splice(r,1)}}function e(){c=[]}return{add:a,list:()=>c,reset:e}}function z1(c,a,e,s,r){const n=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((i,t)=>{const l=u=>{u===!1?t(a4(4,{from:e,to:a})):u instanceof Error?t(u):qo(u)?t(a4(2,{from:a,to:u})):(n&&s.enterCallbacks[r]===n&&typeof u=="function"&&n.push(u),i())},o=c.call(s&&s.instances[r],a,e,l);let f=Promise.resolve(o);c.length<3&&(f=f.then(l)),f.catch(u=>t(u))})}function h6(c,a,e,s){const r=[];for(const n of c)for(const i in n.components){let t=n.components[i];if(!(a!=="beforeRouteEnter"&&!n.instances[i]))if(Mm(t)){const o=(t.__vccOpts||t)[a];o&&r.push(z1(o,e,s,n,i))}else{let l=t();r.push(()=>l.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${n.path}"`));const f=xo(o)?o.default:o;n.components[i]=f;const H=(f.__vccOpts||f)[a];return H&&z1(H,e,s,n,i)()}))}}return r}function Mm(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function M5(c){const a=J2(U3),e=J2(lc),s=t2(()=>a.resolve(g2(c.to))),r=t2(()=>{const{matched:l}=s.value,{length:o}=l,f=l[o-1],u=e.matched;if(!f||!u.length)return-1;const H=u.findIndex(c4.bind(null,f));if(H>-1)return H;const z=d5(l[o-2]);return o>1&&d5(f)===z&&u[u.length-1].path!==z?u.findIndex(c4.bind(null,l[o-2])):H}),n=t2(()=>r.value>-1&&gm(e.params,s.value.params)),i=t2(()=>r.value>-1&&r.value===e.matched.length-1&&J7(e.params,s.value.params));function t(l={}){return Lm(l)?a[g2(c.replace)?"replace":"push"](g2(c.to)).catch(z4):Promise.resolve()}return{route:s,href:t2(()=>s.value.href),isActive:n,isExactActive:i,navigate:t}}const dm=R4({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:M5,setup(c,{slots:a}){const e=i4(M5(c)),{options:s}=J2(U3),r=t2(()=>({[C5(c.activeClass,s.linkActiveClass,"router-link-active")]:e.isActive,[C5(c.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const n=a.default&&a.default(e);return c.custom?n:E3("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},n)}}}),Cm=dm;function Lm(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function gm(c,a){for(const e in a){const s=a[e],r=c[e];if(typeof s=="string"){if(s!==r)return!1}else if(!W2(r)||r.length!==s.length||s.some((n,i)=>n!==r[i]))return!1}return!0}function d5(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const C5=(c,a,e)=>c!=null?c:a!=null?a:e,xm=R4({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const s=J2(D6),r=t2(()=>c.route||s.value),n=J2(V5,0),i=t2(()=>{let o=g2(n);const{matched:f}=r.value;let u;for(;(u=f[o])&&!u.components;)o++;return o}),t=t2(()=>r.value.matched[i.value]);i3(V5,t2(()=>i.value+1)),i3(Vm,t),i3(D6,r);const l=A3();return K1(()=>[l.value,t.value,c.name],([o,f,u],[H,z,g])=>{f&&(f.instances[u]=o,z&&z!==f&&o&&o===H&&(f.leaveGuards.size||(f.leaveGuards=z.leaveGuards),f.updateGuards.size||(f.updateGuards=z.updateGuards))),o&&f&&(!z||!c4(f,z)||!H)&&(f.enterCallbacks[u]||[]).forEach(w=>w(o))},{flush:"post"}),()=>{const o=r.value,f=c.name,u=t.value,H=u&&u.components[f];if(!H)return L5(e.default,{Component:H,route:o});const z=u.props[f],g=z?z===!0?o.params:typeof z=="function"?z(o):z:null,P=E3(H,c2({},g,a,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(u.instances[f]=null)},ref:l}));return L5(e.default,{Component:P,route:o})||P}}});function L5(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const bm=xm;function Sm(c){const a=Zo(c.routes,c),e=c.parseQuery||hm,s=c.stringifyQuery||p5,r=c.history,n=o4(),i=o4(),t=o4(),l=Jt(m1);let o=m1;I1&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=H6.bind(null,M=>""+M),u=H6.bind(null,zm),H=H6.bind(null,M3);function z(M,k){let N,F;return cc(M)?(N=a.getRecordMatcher(M),F=k):F=M,a.addRoute(F,N)}function g(M){const k=a.getRecordMatcher(M);k&&a.removeRoute(k)}function w(){return a.getRoutes().map(M=>M.record)}function P(M){return!!a.getRecordMatcher(M)}function p(M,k){if(k=c2({},k||l.value),typeof M=="string"){const m=z6(e,M,k.path),v=a.resolve({path:m.path},k),h=r.createHref(m.fullPath);return c2(m,v,{params:H(v.params),hash:M3(m.hash),redirectedFrom:void 0,href:h})}let N;if("path"in M)N=c2({},M,{path:z6(e,M.path,k.path).path});else{const m=c2({},M.params);for(const v in m)m[v]==null&&delete m[v];N=c2({},M,{params:u(M.params)}),k.params=u(k.params)}const F=a.resolve(N,k),X=M.hash||"";F.params=f(H(F.params));const m2=No(s,c2({},M,{hash:um(X),path:F.path})),G=r.createHref(m2);return c2({fullPath:m2,hash:X,query:s===p5?pm(M.query):M.query||{}},F,{redirectedFrom:void 0,href:G})}function C(M){return typeof M=="string"?z6(e,M,l.value.path):c2({},M)}function T(M,k){if(o!==M)return a4(8,{from:k,to:M})}function D(M){return U(M)}function O(M){return D(c2(C(M),{replace:!0}))}function J(M){const k=M.matched[M.matched.length-1];if(k&&k.redirect){const{redirect:N}=k;let F=typeof N=="function"?N(M):N;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=C(F):{path:F},F.params={}),c2({query:M.query,hash:M.hash,params:"path"in F?{}:M.params},F)}}function U(M,k){const N=o=p(M),F=l.value,X=M.state,m2=M.force,G=M.replace===!0,m=J(N);if(m)return U(c2(C(m),{state:typeof m=="object"?c2({},X,m.state):X,force:m2,replace:G}),k||N);const v=N;v.redirectedFrom=k;let h;return!m2&&wo(s,F,N)&&(h=a4(16,{to:v,from:F}),g1(F,F,!0,!1)),(h?Promise.resolve(h):f2(v,F)).catch(V=>c1(V)?c1(V,2)?V:B2(V):r2(V,v,F)).then(V=>{if(V){if(c1(V,2))return U(c2({replace:G},C(V.to),{state:typeof V.to=="object"?c2({},X,V.to.state):X,force:m2}),k||v)}else V=b2(v,F,!0,G,X);return p2(v,F,V),V})}function j(M,k){const N=T(M,k);return N?Promise.reject(N):Promise.resolve()}function f2(M,k){let N;const[F,X,m2]=Nm(M,k);N=h6(F.reverse(),"beforeRouteLeave",M,k);for(const m of F)m.leaveGuards.forEach(v=>{N.push(z1(v,M,k))});const G=j.bind(null,M,k);return N.push(G),O1(N).then(()=>{N=[];for(const m of n.list())N.push(z1(m,M,k));return N.push(G),O1(N)}).then(()=>{N=h6(X,"beforeRouteUpdate",M,k);for(const m of X)m.updateGuards.forEach(v=>{N.push(z1(v,M,k))});return N.push(G),O1(N)}).then(()=>{N=[];for(const m of M.matched)if(m.beforeEnter&&!k.matched.includes(m))if(W2(m.beforeEnter))for(const v of m.beforeEnter)N.push(z1(v,M,k));else N.push(z1(m.beforeEnter,M,k));return N.push(G),O1(N)}).then(()=>(M.matched.forEach(m=>m.enterCallbacks={}),N=h6(m2,"beforeRouteEnter",M,k),N.push(G),O1(N))).then(()=>{N=[];for(const m of i.list())N.push(z1(m,M,k));return N.push(G),O1(N)}).catch(m=>c1(m,8)?m:Promise.reject(m))}function p2(M,k,N){for(const F of t.list())F(M,k,N)}function b2(M,k,N,F,X){const m2=T(M,k);if(m2)return m2;const G=k===m1,m=I1?history.state:{};N&&(F||G?r.replace(M.fullPath,c2({scroll:G&&m&&m.scroll},X)):r.push(M.fullPath,X)),l.value=M,g1(M,k,N,G),B2()}let T2;function f1(){T2||(T2=r.listen((M,k,N)=>{if(!q4.listening)return;const F=p(M),X=J(F);if(X){U(c2(X,{replace:!0}),F).catch(z4);return}o=F;const m2=l.value;I1&&Fo(f5(m2.fullPath,N.delta),O3()),f2(F,m2).catch(G=>c1(G,12)?G:c1(G,2)?(U(G.to,F).then(m=>{c1(m,20)&&!N.delta&&N.type===N4.pop&&r.go(-1,!1)}).catch(z4),Promise.reject()):(N.delta&&r.go(-N.delta,!1),r2(G,F,m2))).then(G=>{G=G||b2(F,m2,!1),G&&(N.delta&&!c1(G,8)?r.go(-N.delta,!1):N.type===N4.pop&&c1(G,20)&&r.go(-1,!1)),p2(F,m2,G)}).catch(z4)}))}let y2=o4(),V2=o4(),H2;function r2(M,k,N){B2(M);const F=V2.list();return F.length?F.forEach(X=>X(M,k,N)):console.error(M),Promise.reject(M)}function a2(){return H2&&l.value!==m1?Promise.resolve():new Promise((M,k)=>{y2.add([M,k])})}function B2(M){return H2||(H2=!M,f1(),y2.list().forEach(([k,N])=>M?N(M):k()),y2.reset()),M}function g1(M,k,N,F){const{scrollBehavior:X}=c;if(!I1||!X)return Promise.resolve();const m2=!N&&_o(f5(M.fullPath,0))||(F||!N)&&history.state&&history.state.scroll||null;return u8().then(()=>X(M,k,m2)).then(G=>G&&Bo(G)).catch(G=>r2(G,M,k))}const F2=M=>r.go(M);let S2;const _1=new Set,q4={currentRoute:l,listening:!0,addRoute:z,removeRoute:g,hasRoute:P,getRoutes:w,resolve:p,options:c,push:D,replace:O,go:F2,back:()=>F2(-1),forward:()=>F2(1),beforeEach:n.add,beforeResolve:i.add,afterEach:t.add,onError:V2.add,isReady:a2,install(M){const k=this;M.component("RouterLink",Cm),M.component("RouterView",bm),M.config.globalProperties.$router=k,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>g2(l)}),I1&&!S2&&l.value===m1&&(S2=!0,D(r.location).catch(X=>{}));const N={};for(const X in m1)N[X]=t2(()=>l.value[X]);M.provide(U3,k),M.provide(lc,i4(N)),M.provide(D6,l);const F=M.unmount;_1.add(M),M.unmount=function(){_1.delete(M),_1.size<1&&(o=m1,T2&&T2(),T2=null,l.value=m1,S2=!1,H2=!1),F()}}};return q4}function O1(c){return c.reduce((a,e)=>a.then(()=>e()),Promise.resolve())}function Nm(c,a){const e=[],s=[],r=[],n=Math.max(a.matched.length,c.matched.length);for(let i=0;i<n;i++){const t=a.matched[i];t&&(c.matched.find(o=>c4(o,t))?s.push(t):e.push(t));const l=c.matched[i];l&&(a.matched.find(o=>c4(o,l))||r.push(l))}return[e,s,r]}function sU(){return J2(U3)}const wm=[{path:"/",name:"home",component:()=>v6(()=>import("./file_Home.b3a04263.js"),["assets/file_Home.b3a04263.js","assets/file_Home.a5886a54.css","assets/file_index.800a97d0.js"])},{path:"/login",name:"login",component:()=>v6(()=>import("./file_Login.6dd43ba0.js"),["assets/file_Login.6dd43ba0.js","assets/file_Login.9a71c938.css","assets/file_index.800a97d0.js"])},{path:"/signup",name:"signup",component:()=>v6(()=>import("./file_SignUp.736e4b56.js"),["assets/file_SignUp.736e4b56.js","assets/file_SignUp.d440ed10.css","assets/file_index.800a97d0.js"])}],ym=Sm({history:Io("/Task-App/"),routes:wm}),g5=(c,a)=>{const e=c.storage||sessionStorage,s=c.key||a.$id;if(c.paths){const r=c.paths.reduce((n,i)=>(n[i]=a.$state[i],n),{});e.setItem(s,JSON.stringify(r))}else e.setItem(s,JSON.stringify(a.$state))};var km=({options:c,store:a})=>{var e,s,r,n;if((e=c.persist)!=null&&e.enabled){const i=[{key:a.$id,storage:sessionStorage}],t=(r=(s=c.persist)==null?void 0:s.strategies)!=null&&r.length?(n=c.persist)==null?void 0:n.strategies:i;t.forEach(l=>{const o=l.storage||sessionStorage,f=l.key||a.$id,u=o.getItem(f);u&&(a.$patch(JSON.parse(u)),g5(l,a))}),a.$subscribe(()=>{t.forEach(l=>{g5(l,a)})})}};function x5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function A(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?x5(Object(e),!0).forEach(function(s){h2(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):x5(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function d3(c){return d3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},d3(c)}function Am(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function b5(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function Pm(c,a,e){return a&&b5(c.prototype,a),e&&b5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function h2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function d8(c,a){return Rm(c)||Fm(c,a)||fc(c,a)||Em()}function B4(c){return Tm(c)||Bm(c)||fc(c)||_m()}function Tm(c){if(Array.isArray(c))return O6(c)}function Rm(c){if(Array.isArray(c))return c}function Bm(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Fm(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,n=!1,i,t;try{for(e=e.call(c);!(r=(i=e.next()).done)&&(s.push(i.value),!(a&&s.length===a));r=!0);}catch(l){n=!0,t=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(n)throw t}}return s}}function fc(c,a){if(!!c){if(typeof c=="string")return O6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return O6(c,a)}}function O6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function _m(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Em(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var S5=function(){},C8={},oc={},mc=null,uc={mark:S5,measure:S5};try{typeof window<"u"&&(C8=window),typeof document<"u"&&(oc=document),typeof MutationObserver<"u"&&(mc=MutationObserver),typeof performance<"u"&&(uc=performance)}catch{}var Dm=C8.navigator||{},N5=Dm.userAgent,w5=N5===void 0?"":N5,d1=C8,l2=oc,y5=mc,Y4=uc;d1.document;var l1=!!l2.documentElement&&!!l2.head&&typeof l2.addEventListener=="function"&&typeof l2.createElement=="function",vc=~w5.indexOf("MSIE")||~w5.indexOf("Trident/"),X4,Q4,J4,Z4,c3,r1="___FONT_AWESOME___",U6=16,Hc="fa",zc="svg-inline--fa",R1="data-fa-i2svg",I6="data-fa-pseudo-element",Om="data-fa-pseudo-element-pending",L8="data-prefix",g8="data-icon",k5="fontawesome-i2svg",Um="async",Im=["HTML","HEAD","STYLE","SCRIPT"],hc=function(){try{return!0}catch{return!1}}(),i2="classic",u2="sharp",x8=[i2,u2];function F4(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[i2]}})}var w4=F4((X4={},h2(X4,i2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),h2(X4,u2,{fa:"solid",fass:"solid","fa-solid":"solid"}),X4)),y4=F4((Q4={},h2(Q4,i2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),h2(Q4,u2,{solid:"fass"}),Q4)),k4=F4((J4={},h2(J4,i2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),h2(J4,u2,{fass:"fa-solid"}),J4)),qm=F4((Z4={},h2(Z4,i2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),h2(Z4,u2,{"fa-solid":"fass"}),Z4)),Wm=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,pc="fa-layers-text",Gm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,jm=F4((c3={},h2(c3,i2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),h2(c3,u2,{900:"fass"}),c3)),Vc=[1,2,3,4,5,6,7,8,9,10],$m=Vc.concat([11,12,13,14,15,16,17,18,19,20]),Km=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],k1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},A4=new Set;Object.keys(y4[i2]).map(A4.add.bind(A4));Object.keys(y4[u2]).map(A4.add.bind(A4));var Ym=[].concat(x8,B4(A4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",k1.GROUP,k1.SWAP_OPACITY,k1.PRIMARY,k1.SECONDARY]).concat(Vc.map(function(c){return"".concat(c,"x")})).concat($m.map(function(c){return"w-".concat(c)})),p4=d1.FontAwesomeConfig||{};function Xm(c){var a=l2.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Qm(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(l2&&typeof l2.querySelector=="function"){var Jm=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Jm.forEach(function(c){var a=d8(c,2),e=a[0],s=a[1],r=Qm(Xm(e));r!=null&&(p4[s]=r)})}var Mc={styleDefault:"solid",familyDefault:"classic",cssPrefix:Hc,replacementClass:zc,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};p4.familyPrefix&&(p4.cssPrefix=p4.familyPrefix);var e4=A(A({},Mc),p4);e4.autoReplaceSvg||(e4.observeMutations=!1);var B={};Object.keys(Mc).forEach(function(c){Object.defineProperty(B,c,{enumerable:!0,set:function(e){e4[c]=e,V4.forEach(function(s){return s(B)})},get:function(){return e4[c]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(a){e4.cssPrefix=a,V4.forEach(function(e){return e(B)})},get:function(){return e4.cssPrefix}});d1.FontAwesomeConfig=B;var V4=[];function Zm(c){return V4.push(c),function(){V4.splice(V4.indexOf(c),1)}}var u1=U6,Q2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cu(c){if(!(!c||!l1)){var a=l2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=l2.head.childNodes,s=null,r=e.length-1;r>-1;r--){var n=e[r],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(s=n)}return l2.head.insertBefore(a,s),c}}var au="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function P4(){for(var c=12,a="";c-- >0;)a+=au[Math.random()*62|0];return a}function t4(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function b8(c){return c.classList?t4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function dc(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function eu(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(dc(c[e]),'" ')},"").trim()}function I3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function S8(c){return c.size!==Q2.size||c.x!==Q2.x||c.y!==Q2.y||c.rotate!==Q2.rotate||c.flipX||c.flipY}function su(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(n," ").concat(i," ").concat(t)},o={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:l,path:o}}function ru(c){var a=c.transform,e=c.width,s=e===void 0?U6:e,r=c.height,n=r===void 0?U6:r,i=c.startCentered,t=i===void 0?!1:i,l="";return t&&vc?l+="translate(".concat(a.x/u1-s/2,"em, ").concat(a.y/u1-n/2,"em) "):t?l+="translate(calc(-50% + ".concat(a.x/u1,"em), calc(-50% + ").concat(a.y/u1,"em)) "):l+="translate(".concat(a.x/u1,"em, ").concat(a.y/u1,"em) "),l+="scale(".concat(a.size/u1*(a.flipX?-1:1),", ").concat(a.size/u1*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var nu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Cc(){var c=Hc,a=zc,e=B.cssPrefix,s=B.replacementClass,r=nu;if(e!==c||s!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");r=r.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(t,".".concat(s))}return r}var A5=!1;function p6(){B.autoAddCss&&!A5&&(cu(Cc()),A5=!0)}var iu={mixout:function(){return{dom:{css:Cc,insertCss:p6}}},hooks:function(){return{beforeDOMElementCreation:function(){p6()},beforeI2svg:function(){p6()}}}},n1=d1||{};n1[r1]||(n1[r1]={});n1[r1].styles||(n1[r1].styles={});n1[r1].hooks||(n1[r1].hooks={});n1[r1].shims||(n1[r1].shims=[]);var U2=n1[r1],Lc=[],tu=function c(){l2.removeEventListener("DOMContentLoaded",c),C3=1,Lc.map(function(a){return a()})},C3=!1;l1&&(C3=(l2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(l2.readyState),C3||l2.addEventListener("DOMContentLoaded",tu));function lu(c){!l1||(C3?setTimeout(c,0):Lc.push(c))}function _4(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,n=r===void 0?[]:r;return typeof c=="string"?dc(c):"<".concat(a," ").concat(eu(s),">").concat(n.map(_4).join(""),"</").concat(a,">")}function P5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var fu=function(a,e){return function(s,r,n,i){return a.call(e,s,r,n,i)}},V6=function(a,e,s,r){var n=Object.keys(a),i=n.length,t=r!==void 0?fu(e,r):e,l,o,f;for(s===void 0?(l=1,f=a[n[0]]):(l=0,f=s);l<i;l++)o=n[l],f=t(f,a[o],o,a);return f};function ou(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((r&1023)<<10)+(n&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function q6(c){var a=ou(c);return a.length===1?a[0].toString(16):null}function mu(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function T5(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function W6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,n=T5(a);typeof U2.hooks.addPack=="function"&&!r?U2.hooks.addPack(c,T5(a)):U2.styles[c]=A(A({},U2.styles[c]||{}),n),c==="fas"&&W6("fa",a)}var a3,e3,s3,q1=U2.styles,uu=U2.shims,vu=(a3={},h2(a3,i2,Object.values(k4[i2])),h2(a3,u2,Object.values(k4[u2])),a3),N8=null,gc={},xc={},bc={},Sc={},Nc={},Hu=(e3={},h2(e3,i2,Object.keys(w4[i2])),h2(e3,u2,Object.keys(w4[u2])),e3);function zu(c){return~Ym.indexOf(c)}function hu(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!zu(r)?r:null}var wc=function(){var a=function(n){return V6(q1,function(i,t,l){return i[l]=V6(t,n,{}),i},{})};gc=a(function(r,n,i){if(n[3]&&(r[n[3]]=i),n[2]){var t=n[2].filter(function(l){return typeof l=="number"});t.forEach(function(l){r[l.toString(16)]=i})}return r}),xc=a(function(r,n,i){if(r[i]=i,n[2]){var t=n[2].filter(function(l){return typeof l=="string"});t.forEach(function(l){r[l]=i})}return r}),Nc=a(function(r,n,i){var t=n[2];return r[i]=i,t.forEach(function(l){r[l]=i}),r});var e="far"in q1||B.autoFetchSvg,s=V6(uu,function(r,n){var i=n[0],t=n[1],l=n[2];return t==="far"&&!e&&(t="fas"),typeof i=="string"&&(r.names[i]={prefix:t,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:t,iconName:l}),r},{names:{},unicodes:{}});bc=s.names,Sc=s.unicodes,N8=q3(B.styleDefault,{family:B.familyDefault})};Zm(function(c){N8=q3(c.styleDefault,{family:B.familyDefault})});wc();function w8(c,a){return(gc[c]||{})[a]}function pu(c,a){return(xc[c]||{})[a]}function A1(c,a){return(Nc[c]||{})[a]}function yc(c){return bc[c]||{prefix:null,iconName:null}}function Vu(c){var a=Sc[c],e=w8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function C1(){return N8}var y8=function(){return{prefix:null,iconName:null,rest:[]}};function q3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?i2:e,r=w4[s][c],n=y4[s][c]||y4[s][r],i=c in U2.styles?c:null;return n||i||null}var R5=(s3={},h2(s3,i2,Object.keys(k4[i2])),h2(s3,u2,Object.keys(k4[u2])),s3);function W3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,n=(a={},h2(a,i2,"".concat(B.cssPrefix,"-").concat(i2)),h2(a,u2,"".concat(B.cssPrefix,"-").concat(u2)),a),i=null,t=i2;(c.includes(n[i2])||c.some(function(o){return R5[i2].includes(o)}))&&(t=i2),(c.includes(n[u2])||c.some(function(o){return R5[u2].includes(o)}))&&(t=u2);var l=c.reduce(function(o,f){var u=hu(B.cssPrefix,f);if(q1[f]?(f=vu[t].includes(f)?qm[t][f]:f,i=f,o.prefix=f):Hu[t].indexOf(f)>-1?(i=f,o.prefix=q3(f,{family:t})):u?o.iconName=u:f!==B.replacementClass&&f!==n[i2]&&f!==n[u2]&&o.rest.push(f),!r&&o.prefix&&o.iconName){var H=i==="fa"?yc(o.iconName):{},z=A1(o.prefix,o.iconName);H.prefix&&(i=null),o.iconName=H.iconName||z||o.iconName,o.prefix=H.prefix||o.prefix,o.prefix==="far"&&!q1.far&&q1.fas&&!B.autoFetchSvg&&(o.prefix="fas")}return o},y8());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&t===u2&&(q1.fass||B.autoFetchSvg)&&(l.prefix="fass",l.iconName=A1(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=C1()||"fas"),l}var Mu=function(){function c(){Am(this,c),this.definitions={}}return Pm(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(t){e.definitions[t]=A(A({},e.definitions[t]||{}),i[t]),W6(t,i[t]);var l=k4[i2][t];l&&W6(l,i[t]),wc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(n){var i=r[n],t=i.prefix,l=i.iconName,o=i.icon,f=o[2];e[t]||(e[t]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(e[t][u]=o)}),e[t][l]=o}),e}}]),c}(),B5=[],W1={},Y1={},du=Object.keys(Y1);function Cu(c,a){var e=a.mixoutsTo;return B5=c,W1={},Object.keys(Y1).forEach(function(s){du.indexOf(s)===-1&&delete Y1[s]}),B5.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),d3(r[i])==="object"&&Object.keys(r[i]).forEach(function(t){e[i]||(e[i]={}),e[i][t]=r[i][t]})}),s.hooks){var n=s.hooks();Object.keys(n).forEach(function(i){W1[i]||(W1[i]=[]),W1[i].push(n[i])})}s.provides&&s.provides(Y1)}),e}function G6(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var n=W1[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(s))}),a}function B1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=W1[c]||[];r.forEach(function(n){n.apply(null,e)})}function i1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Y1[c]?Y1[c].apply(null,a):void 0}function j6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||C1();if(!!a)return a=A1(e,a)||a,P5(kc.definitions,e,a)||P5(U2.styles,e,a)}var kc=new Mu,Lu=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,B1("noAuto")},gu={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return l1?(B1("beforeI2svg",a),i1("pseudoElements2svg",a),i1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,lu(function(){bu({autoReplaceSvgRoot:e}),B1("watch",a)})}},xu={icon:function(a){if(a===null)return null;if(d3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:A1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=q3(a[0]);return{prefix:s,iconName:A1(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(B.cssPrefix,"-"))>-1||a.match(Wm))){var r=W3(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||C1(),iconName:A1(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var n=C1();return{prefix:n,iconName:A1(n,a)||a}}}},P2={noAuto:Lu,config:B,dom:gu,parse:xu,library:kc,findIconDefinition:j6,toHtml:_4},bu=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?l2:e;(Object.keys(U2.styles).length>0||B.autoFetchSvg)&&l1&&B.autoReplaceSvg&&P2.dom.i2svg({node:s})};function G3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return _4(s)})}}),Object.defineProperty(c,"node",{get:function(){if(!!l1){var s=l2.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function Su(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,n=c.styles,i=c.transform;if(S8(i)&&e.found&&!s.found){var t=e.width,l=e.height,o={x:t/l/2,y:.5};r.style=I3(A(A({},n),{},{"transform-origin":"".concat(o.x+i.x/16,"em ").concat(o.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function Nu(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(B.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},r),{},{id:i}),children:s}]}]}function k8(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,n=c.iconName,i=c.transform,t=c.symbol,l=c.title,o=c.maskId,f=c.titleId,u=c.extra,H=c.watchable,z=H===void 0?!1:H,g=s.found?s:e,w=g.width,P=g.height,p=r==="fak",C=[B.replacementClass,n?"".concat(B.cssPrefix,"-").concat(n):""].filter(function(f2){return u.classes.indexOf(f2)===-1}).filter(function(f2){return f2!==""||!!f2}).concat(u.classes).join(" "),T={children:[],attributes:A(A({},u.attributes),{},{"data-prefix":r,"data-icon":n,class:C,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(P)})},D=p&&!~u.classes.indexOf("fa-fw")?{width:"".concat(w/P*16*.0625,"em")}:{};z&&(T.attributes[R1]=""),l&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(f||P4())},children:[l]}),delete T.attributes.title);var O=A(A({},T),{},{prefix:r,iconName:n,main:e,mask:s,maskId:o,transform:i,symbol:t,styles:A(A({},D),u.styles)}),J=s.found&&e.found?i1("generateAbstractMask",O)||{children:[],attributes:{}}:i1("generateAbstractIcon",O)||{children:[],attributes:{}},U=J.children,j=J.attributes;return O.children=U,O.attributes=j,t?Nu(O):Su(O)}function F5(c){var a=c.content,e=c.width,s=c.height,r=c.transform,n=c.title,i=c.extra,t=c.watchable,l=t===void 0?!1:t,o=A(A(A({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});l&&(o[R1]="");var f=A({},i.styles);S8(r)&&(f.transform=ru({transform:r,startCentered:!0,width:e,height:s}),f["-webkit-transform"]=f.transform);var u=I3(f);u.length>0&&(o.style=u);var H=[];return H.push({tag:"span",attributes:o,children:[a]}),n&&H.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),H}function wu(c){var a=c.content,e=c.title,s=c.extra,r=A(A(A({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),n=I3(s.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var M6=U2.styles;function $6(c){var a=c[0],e=c[1],s=c.slice(4),r=d8(s,1),n=r[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(k1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(k1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(k1.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var yu={found:!1,width:512,height:512};function ku(c,a){!hc&&!B.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function K6(c,a){var e=a;return a==="fa"&&B.styleDefault!==null&&(a=C1()),new Promise(function(s,r){if(i1("missingIconAbstract"),e==="fa"){var n=yc(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&M6[a]&&M6[a][c]){var i=M6[a][c];return s($6(i))}ku(c,a),s(A(A({},yu),{},{icon:B.showMissingIcons&&c?i1("missingIconAbstract")||{}:{}}))})}var _5=function(){},Y6=B.measurePerformance&&Y4&&Y4.mark&&Y4.measure?Y4:{mark:_5,measure:_5},u4='FA "6.2.0"',Au=function(a){return Y6.mark("".concat(u4," ").concat(a," begins")),function(){return Ac(a)}},Ac=function(a){Y6.mark("".concat(u4," ").concat(a," ends")),Y6.measure("".concat(u4," ").concat(a),"".concat(u4," ").concat(a," begins"),"".concat(u4," ").concat(a," ends"))},A8={begin:Au,end:Ac},m3=function(){};function E5(c){var a=c.getAttribute?c.getAttribute(R1):null;return typeof a=="string"}function Pu(c){var a=c.getAttribute?c.getAttribute(L8):null,e=c.getAttribute?c.getAttribute(g8):null;return a&&e}function Tu(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(B.replacementClass)}function Ru(){if(B.autoReplaceSvg===!0)return u3.replace;var c=u3[B.autoReplaceSvg];return c||u3.replace}function Bu(c){return l2.createElementNS("http://www.w3.org/2000/svg",c)}function Fu(c){return l2.createElement(c)}function Pc(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?Bu:Fu:e;if(typeof c=="string")return l2.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){r.appendChild(Pc(i,{ceFn:s}))}),r}function _u(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var u3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(Pc(r),e)}),e.getAttribute(R1)===null&&B.keepOriginalSource){var s=l2.createComment(_u(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~b8(e).indexOf(B.replacementClass))return u3.replace(a);var r=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var n=s[0].attributes.class.split(" ").reduce(function(t,l){return l===B.replacementClass||l.match(r)?t.toSvg.push(l):t.toNode.push(l),t},{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=s.map(function(t){return _4(t)}).join(`
`);e.setAttribute(R1,""),e.innerHTML=i}};function D5(c){c()}function Tc(c,a){var e=typeof a=="function"?a:m3;if(c.length===0)e();else{var s=D5;B.mutateApproach===Um&&(s=d1.requestAnimationFrame||D5),s(function(){var r=Ru(),n=A8.begin("mutate");c.map(r),n(),e()})}}var P8=!1;function Rc(){P8=!0}function X6(){P8=!1}var L3=null;function O5(c){if(!!y5&&!!B.observeMutations){var a=c.treeCallback,e=a===void 0?m3:a,s=c.nodeCallback,r=s===void 0?m3:s,n=c.pseudoElementsCallback,i=n===void 0?m3:n,t=c.observeMutationsRoot,l=t===void 0?l2:t;L3=new y5(function(o){if(!P8){var f=C1();t4(o).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!E5(u.addedNodes[0])&&(B.searchPseudoElements&&i(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&B.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&E5(u.target)&&~Km.indexOf(u.attributeName))if(u.attributeName==="class"&&Pu(u.target)){var H=W3(b8(u.target)),z=H.prefix,g=H.iconName;u.target.setAttribute(L8,z||f),g&&u.target.setAttribute(g8,g)}else Tu(u.target)&&r(u.target)})}}),l1&&L3.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Eu(){!L3||L3.disconnect()}function Du(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var n=r.split(":"),i=n[0],t=n.slice(1);return i&&t.length>0&&(s[i]=t.join(":").trim()),s},{})),e}function Ou(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=W3(b8(c));return r.prefix||(r.prefix=C1()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=pu(r.prefix,c.innerText)||w8(r.prefix,q6(c.innerText))),!r.iconName&&B.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function Uu(c){var a=t4(c.attributes).reduce(function(r,n){return r.name!=="class"&&r.name!=="style"&&(r[n.name]=n.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return B.autoA11y&&(e?a["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(s||P4()):(a["aria-hidden"]="true",a.focusable="false")),a}function Iu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Q2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function U5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Ou(c),s=e.iconName,r=e.prefix,n=e.rest,i=Uu(c),t=G6("parseNodeAttributes",{},c),l=a.styleParser?Du(c):[];return A({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:Q2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:l,attributes:i}},t)}var qu=U2.styles;function Bc(c){var a=B.autoReplaceSvg==="nest"?U5(c,{styleParser:!1}):U5(c);return~a.extra.classes.indexOf(pc)?i1("generateLayersText",c,a):i1("generateSvgReplacementMutation",c,a)}var L1=new Set;x8.map(function(c){L1.add("fa-".concat(c))});Object.keys(w4[i2]).map(L1.add.bind(L1));Object.keys(w4[u2]).map(L1.add.bind(L1));L1=B4(L1);function I5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!l1)return Promise.resolve();var e=l2.documentElement.classList,s=function(u){return e.add("".concat(k5,"-").concat(u))},r=function(u){return e.remove("".concat(k5,"-").concat(u))},n=B.autoFetchSvg?L1:x8.map(function(f){return"fa-".concat(f)}).concat(Object.keys(qu));n.includes("fa")||n.push("fa");var i=[".".concat(pc,":not([").concat(R1,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat(R1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var t=[];try{t=t4(c.querySelectorAll(i))}catch{}if(t.length>0)s("pending"),r("complete");else return Promise.resolve();var l=A8.begin("onTree"),o=t.reduce(function(f,u){try{var H=Bc(u);H&&f.push(H)}catch(z){hc||z.name==="MissingIcon"&&console.error(z)}return f},[]);return new Promise(function(f,u){Promise.all(o).then(function(H){Tc(H,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),l(),f()})}).catch(function(H){l(),u(H)})})}function Wu(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bc(c).then(function(e){e&&Tc([e],a)})}function Gu(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:j6(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:j6(r||{})),c(s,A(A({},e),{},{mask:r}))}}var ju=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?Q2:s,n=e.symbol,i=n===void 0?!1:n,t=e.mask,l=t===void 0?null:t,o=e.maskId,f=o===void 0?null:o,u=e.title,H=u===void 0?null:u,z=e.titleId,g=z===void 0?null:z,w=e.classes,P=w===void 0?[]:w,p=e.attributes,C=p===void 0?{}:p,T=e.styles,D=T===void 0?{}:T;if(!!a){var O=a.prefix,J=a.iconName,U=a.icon;return G3(A({type:"icon"},a),function(){return B1("beforeDOMElementCreation",{iconDefinition:a,params:e}),B.autoA11y&&(H?C["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(g||P4()):(C["aria-hidden"]="true",C.focusable="false")),k8({icons:{main:$6(U),mask:l?$6(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:J,transform:A(A({},Q2),r),symbol:i,title:H,maskId:f,titleId:g,extra:{attributes:C,styles:D,classes:P}})})}},$u={mixout:function(){return{icon:Gu(ju)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=I5,e.nodeCallback=Wu,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?l2:s,n=e.callback,i=n===void 0?function(){}:n;return I5(r,i)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,n=s.title,i=s.titleId,t=s.prefix,l=s.transform,o=s.symbol,f=s.mask,u=s.maskId,H=s.extra;return new Promise(function(z,g){Promise.all([K6(r,t),f.iconName?K6(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var P=d8(w,2),p=P[0],C=P[1];z([e,k8({icons:{main:p,mask:C},prefix:t,iconName:r,transform:l,symbol:o,maskId:u,title:n,titleId:i,extra:H,watchable:!0})])}).catch(g)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,n=e.main,i=e.transform,t=e.styles,l=I3(t);l.length>0&&(r.style=l);var o;return S8(i)&&(o=i1("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),s.push(o||n.icon),{children:s,attributes:r}}}},Ku={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,n=r===void 0?[]:r;return G3({type:"layer"},function(){B1("beforeDOMElementCreation",{assembler:e,params:s});var i=[];return e(function(t){Array.isArray(t)?t.map(function(l){i=i.concat(l.abstract)}):i=i.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(B4(n)).join(" ")},children:i}]})}}}},Yu={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,n=r===void 0?null:r,i=s.classes,t=i===void 0?[]:i,l=s.attributes,o=l===void 0?{}:l,f=s.styles,u=f===void 0?{}:f;return G3({type:"counter",content:e},function(){return B1("beforeDOMElementCreation",{content:e,params:s}),wu({content:e.toString(),title:n,extra:{attributes:o,styles:u,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(B4(t))}})})}}}},Xu={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,n=r===void 0?Q2:r,i=s.title,t=i===void 0?null:i,l=s.classes,o=l===void 0?[]:l,f=s.attributes,u=f===void 0?{}:f,H=s.styles,z=H===void 0?{}:H;return G3({type:"text",content:e},function(){return B1("beforeDOMElementCreation",{content:e,params:s}),F5({content:e,transform:A(A({},Q2),n),title:t,extra:{attributes:u,styles:z,classes:["".concat(B.cssPrefix,"-layers-text")].concat(B4(o))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,n=s.transform,i=s.extra,t=null,l=null;if(vc){var o=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();t=f.width/o,l=f.height/o}return B.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,F5({content:e.innerHTML,width:t,height:l,transform:n,title:r,extra:i,watchable:!0})])}}},Qu=new RegExp('"',"ug"),q5=[1105920,1112319];function Ju(c){var a=c.replace(Qu,""),e=mu(a,0),s=e>=q5[0]&&e<=q5[1],r=a.length===2?a[0]===a[1]:!1;return{value:q6(r?a[0]:a),isSecondary:s||r}}function W5(c,a){var e="".concat(Om).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var n=t4(c.children),i=n.filter(function(U){return U.getAttribute(I6)===a})[0],t=d1.getComputedStyle(c,a),l=t.getPropertyValue("font-family").match(Gm),o=t.getPropertyValue("font-weight"),f=t.getPropertyValue("content");if(i&&!l)return c.removeChild(i),s();if(l&&f!=="none"&&f!==""){var u=t.getPropertyValue("content"),H=~["Sharp"].indexOf(l[2])?u2:i2,z=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?y4[H][l[2].toLowerCase()]:jm[H][o],g=Ju(u),w=g.value,P=g.isSecondary,p=l[0].startsWith("FontAwesome"),C=w8(z,w),T=C;if(p){var D=Vu(w);D.iconName&&D.prefix&&(C=D.iconName,z=D.prefix)}if(C&&!P&&(!i||i.getAttribute(L8)!==z||i.getAttribute(g8)!==T)){c.setAttribute(e,T),i&&c.removeChild(i);var O=Iu(),J=O.extra;J.attributes[I6]=a,K6(C,z).then(function(U){var j=k8(A(A({},O),{},{icons:{main:U,mask:y8()},prefix:z,iconName:T,extra:J,watchable:!0})),f2=l2.createElement("svg");a==="::before"?c.insertBefore(f2,c.firstChild):c.appendChild(f2),f2.outerHTML=j.map(function(p2){return _4(p2)}).join(`
`),c.removeAttribute(e),s()}).catch(r)}else s()}else s()})}function Zu(c){return Promise.all([W5(c,"::before"),W5(c,"::after")])}function cv(c){return c.parentNode!==document.head&&!~Im.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(I6)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function G5(c){if(!!l1)return new Promise(function(a,e){var s=t4(c.querySelectorAll("*")).filter(cv).map(Zu),r=A8.begin("searchPseudoElements");Rc(),Promise.all(s).then(function(){r(),X6(),a()}).catch(function(){r(),X6(),e()})})}var av={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=G5,e}}},provides:function(a){a.pseudoElements2svg=function(e){var s=e.node,r=s===void 0?l2:s;B.searchPseudoElements&&G5(r)}}},j5=!1,ev={mixout:function(){return{dom:{unwatch:function(){Rc(),j5=!0}}}},hooks:function(){return{bootstrap:function(){O5(G6("mutationObserverCallbacks",{}))},noAuto:function(){Eu()},watch:function(e){var s=e.observeMutationsRoot;j5?X6():O5(G6("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},$5=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(s,r){var n=r.toLowerCase().split("-"),i=n[0],t=n.slice(1).join("-");if(i&&t==="h")return s.flipX=!0,s;if(i&&t==="v")return s.flipY=!0,s;if(t=parseFloat(t),isNaN(t))return s;switch(i){case"grow":s.size=s.size+t;break;case"shrink":s.size=s.size-t;break;case"left":s.x=s.x-t;break;case"right":s.x=s.x+t;break;case"up":s.y=s.y-t;break;case"down":s.y=s.y+t;break;case"rotate":s.rotate=s.rotate+t;break}return s},e)},sv={mixout:function(){return{parse:{transform:function(e){return $5(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-transform");return r&&(e.transform=$5(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var s=e.main,r=e.transform,n=e.containerWidth,i=e.iconWidth,t={transform:"translate(".concat(n/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),o="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(l," ").concat(o," ").concat(f)},H={transform:"translate(".concat(i/2*-1," -256)")},z={outer:t,inner:u,path:H};return{tag:"g",attributes:A({},z.outer),children:[{tag:"g",attributes:A({},z.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:A(A({},s.icon.attributes),z.path)}]}]}}}},d6={x:0,y:0,width:"100%",height:"100%"};function K5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function rv(c){return c.tag==="g"?c.children:[c]}var nv={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-mask"),n=r?W3(r.split(" ").map(function(i){return i.trim()})):y8();return n.prefix||(n.prefix=C1()),e.mask=n,e.maskId=s.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var s=e.children,r=e.attributes,n=e.main,i=e.mask,t=e.maskId,l=e.transform,o=n.width,f=n.icon,u=i.width,H=i.icon,z=su({transform:l,containerWidth:u,iconWidth:o}),g={tag:"rect",attributes:A(A({},d6),{},{fill:"white"})},w=f.children?{children:f.children.map(K5)}:{},P={tag:"g",attributes:A({},z.inner),children:[K5(A({tag:f.tag,attributes:A(A({},f.attributes),z.path)},w))]},p={tag:"g",attributes:A({},z.outer),children:[P]},C="mask-".concat(t||P4()),T="clip-".concat(t||P4()),D={tag:"mask",attributes:A(A({},d6),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,p]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:rv(H)},D]};return s.push(O,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(C,")")},d6)}),{children:s,attributes:r}}}},iv={provides:function(a){var e=!1;d1.matchMedia&&(e=d1.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var s=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:A(A({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=A(A({},n),{},{attributeName:"opacity"}),t={tag:"circle",attributes:A(A({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||t.children.push({tag:"animate",attributes:A(A({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},i),{},{values:"1;0;1;1;0;1;"})}),s.push(t),s.push({tag:"path",attributes:A(A({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:A(A({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||s.push({tag:"path",attributes:A(A({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},tv={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-symbol"),n=r===null?!1:r===""?!0:r;return e.symbol=n,e}}}},lv=[iu,$u,Ku,Yu,Xu,av,ev,sv,nv,iv,tv];Cu(lv,{mixoutsTo:P2});P2.noAuto;var Fc=P2.config,fv=P2.library;P2.dom;var g3=P2.parse;P2.findIconDefinition;P2.toHtml;var ov=P2.icon;P2.layer;var mv=P2.text;P2.counter;function Y5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function D2(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?Y5(Object(e),!0).forEach(function(s){N2(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):Y5(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function x3(c){return x3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},x3(c)}function N2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function uv(c,a){if(c==null)return{};var e={},s=Object.keys(c),r,n;for(n=0;n<s.length;n++)r=s[n],!(a.indexOf(r)>=0)&&(e[r]=c[r]);return e}function vv(c,a){if(c==null)return{};var e=uv(c,a),s,r;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(c);for(r=0;r<n.length;r++)s=n[r],!(a.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,s)||(e[s]=c[s]))}return e}function Q6(c){return Hv(c)||zv(c)||hv(c)||pv()}function Hv(c){if(Array.isArray(c))return J6(c)}function zv(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function hv(c,a){if(!!c){if(typeof c=="string")return J6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return J6(c,a)}}function J6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function pv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.