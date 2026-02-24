import{g as ys,a as Xp}from"./sweetalert-CFUHsfvP.js";import{aN as $r,aO as vn,aP as ze,aQ as To,aR as bs,aS as qp,aT as xl,aU as Dn,aV as jp,aW as wl,aX as Kp,aY as hn,aZ as _l,a_ as Qu,a$ as $p,b0 as Yp,b1 as Jp,b2 as Qp,b3 as Zp,b4 as Ai,b5 as ed,b6 as td,b7 as nd}from"./index-BB7BcdYj.js";/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var El=function(n,t){return(El=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])})(n,t)};function Wt(n,t){function e(){this.constructor=n}El(n,t),n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function K(n,t,e,r){return new(e||(e=Promise))(function(o,i){function a(c){try{u(r.next(c))}catch(l){i(l)}}function s(c){try{u(r.throw(c))}catch(l){i(l)}}function u(c){c.done?o(c.value):new e(function(l){l(c.value)}).then(a,s)}u((r=r.apply(n,[])).next())})}function $(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){a=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(l[0]===6&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(n,a)}catch(f){l=[6,f],r=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var rd=function(){function n(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return n.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},n.prototype.registerFlag=function(t,e,r){if(this.flagRegistry[t]={evaluationFn:e,setHook:r},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},n.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},n.prototype.getNumber=function(t){return this.get(t)},n.prototype.getBool=function(t){return this.get(t)},n.prototype.getFlags=function(){return this.flags},Object.defineProperty(n.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),n.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},n.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},n.prototype.setFlags=function(t){this.flags=Object.assign({},t)},n.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},n.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,r,o=(e=this.global.location.search,r={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(i){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return od(r,a[0],a[1]),a.join("=")}),r);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(i){var a=i.split(":"),s=a[0],u=a[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},n}();function od(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function L(){return Cl}var Cl=null,ei=new Map,Xa=new Map;function Sl(n,t){var e=Rl(n,t);return ei.get(e)}function id(n){return Xa.get(n)}function Zu(n){for(var t=ei.entries(),e=[];;){var r=t.next(),o=r.done,i=r.value;if(o)break;var a=i[0],s=i[1];a.split("_")[0]===n&&e.push(s)}return e}function Il(n){var t=n.kernelName,e=n.backendName,r=Rl(t,e);if(ei.has(r))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");ei.set(r,n)}function ad(n){var t=n.kernelName;Xa.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),Xa.set(t,n)}function Rl(n,t){return t+"_"+n}function qa(n,t,e){return Math.max(n,Math.min(t,e))}function Tl(n){return n%2==0?n:n+1}function sd(n){for(var t=0,e=0;e<n.length;e++)t+=n[e];return t}function R(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function we(n,t,e){e===void 0&&(e=""),R(Ye(n,t),function(){return e+" Shapes "+n+" and "+t+" must match"})}function Ur(n){R(n!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function kr(n,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(n)||Yt(n)&&!e)for(var r=0;r<n.length;++r)kr(n[r],t,e);else t.push(n);return t}function Y(n){if(n.length===0)return 1;for(var t=n[0],e=1;e<n.length;e++)t*=n[e];return t}function Ye(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(var e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Le(n){return n%1==0}function ud(n){if(Math.tanh!=null)return Math.tanh(n);if(n===1/0)return 1;if(n===-1/0)return-1;var t=Math.exp(2*n);return(t-1)/(t+1)}function ja(n){var t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function _r(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function ec(n,t,e){return t===void 0&&(t=function(r){return 0}),new Promise(function(r,o){var i=0,a=function(){if(n())r();else{i++;var s=t(i);e!=null&&i>=e?o():setTimeout(a,s)}};a()})}function cd(n,t){for(var e=1,r=-1,o=0;o<n.length;++o)if(n[o]>=0)e*=n[o];else if(n[o]===-1){if(r!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+r+" and dim "+o);r=o}else if(n[o]<0)throw Error("Shapes can not be < 0. Found "+n[o]+" at dim "+o);if(r===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+n);return n}if(e===0)throw Error("Cannot infer the missing size in ["+n+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var i=n.slice();return i[r]=t/e,i}function je(n,t){var e=t.length;return R((n=n==null?t.map(function(r,o){return o}):[].concat(n)).every(function(r){return r>=-e&&r<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+n}),R(n.every(function(r){return Le(r)}),function(){return"All values in axis param must be integers but got axis "+n}),n.map(function(r){return r<0?e+r:r})}function jn(n,t){for(var e=[],r=[],o=t!=null&&Array.isArray(t)&&t.length===0,i=t==null||o?null:je(t,n).sort(),a=0,s=0;s<n.length;++s){if(i!=null){if(i[a]===s&&n[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+n[s]+"' is not 1");(i[a]==null||i[a]>s)&&n[s]===1&&(e.push(n[s]),r.push(s)),i[a]<=s&&a++}n[s]!==1&&(e.push(n[s]),r.push(s))}return{newShape:e,keptDims:r}}function Zr(n,t){var e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else{if(n!=="bool")throw new Error("Unknown data type "+n);e=new Uint8Array(t)}return e}function ti(n,t){var e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else{if(n!=="string")throw new Error("Unknown data type "+n);e=new Array(t)}return e}function ld(n,t){for(var e=0;e<n.length;e++){var r=n[e];if(isNaN(r)||!isFinite(r))throw Error("A tensor of type "+t+" being uploaded contains "+r+".")}}function fd(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function hd(n,t){return t!=="complex64"&&(t!=="float32"||n==="complex64")&&(t!=="int32"||n==="float32"||n==="complex64")&&(t!=="bool"||n!=="bool")}function Yt(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array}function Nl(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error("Unknown dtype "+n)}function pd(n){if(n==null)return 0;var t=0;return n.forEach(function(e){return t+=e.length}),t}function xs(n){return typeof n=="string"||n instanceof String}function dd(n){return typeof n=="boolean"}function vd(n){return typeof n=="number"}function ho(n){return Array.isArray(n)?ho(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array?"int32":vd(n)?"float32":xs(n)?"string":dd(n)?"bool":"float32"}function Ka(n){return!!(n&&n.constructor&&n.call&&n.apply)}function $a(n,t){for(var e=t;e<n;++e)if(n%e==0)return e;return n}function Jt(n){var t=n.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=n[t-1];for(var r=t-3;r>=0;--r)e[r]=e[r+1]*n[r+1];return e}function Al(n,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=kr(n)),e&&ld(n,t),function(i,a){return i instanceof Float32Array&&a==="float32"||i instanceof Int32Array&&a==="int32"||i instanceof Uint8Array&&a==="bool"}(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){for(var r=new Uint8Array(n.length),o=0;o<r.length;++o)Math.round(n[o])!==0&&(r[o]=1);return r}throw new Error("Unknown data type "+t)}function tc(n,t){if(n.length===0)return t[0];var e=n.reduce(function(r,o){return r*o});if(e===0)return[];if(e!==t.length)throw new Error("["+n+"] does not match the input size.");return function r(o,i,a){var s=new Array;if(i.length===1)for(var u=i[0],c=0;c<u;c++)s[c]=a[o+c];else{u=i[0];var l=i.slice(1),f=l.reduce(function(h,p){return h*p});for(c=0;c<u;c++)s[c]=r(o+c*f,l,a)}return s}(0,n,t)}function kl(n,t){for(var e=po(n,t),r=0;r<e.length;r++)e[r]=1;return e}function po(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error("Unknown data type "+t)}function qt(){return L().platform.now()}function Dl(n){n.forEach(function(t){R(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+n+"]."})})}function md(n,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",L().platform.encode(n,t)}function ni(n,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",L().platform.decode(n,t)}function nc(n,t,e){if(t===0)return 0;if(t===1)return n[0];for(var r=n[n.length-1],o=0;o<n.length-1;++o)r+=e[o]*n[o];return r}function gd(n,t,e){if(t===0)return[];if(t===1)return[n];for(var r=new Array(t),o=0;o<r.length-1;++o)r[o]=Math.floor(n/e[o]),n-=r[o]*e[o];return r[r.length-1]=n,r}var yd=function(){function n(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new bd)}return n.prototype.profileKernel=function(t,e,r){var o,i=this,a=this.backendTimer.time(function(){o=r()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,f){if(l!=="float32")return!1;for(var h=0;h<c.length;h++){var p=c[h];if(isNaN(p)||!isFinite(p))return console.warn("Found "+p+" in the result of '"+f+"'"),!0}})(u,s.dtype,t),a.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),i.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)})})}),o},n}(),bd=function(){function n(){}return n.prototype.logKernelProfile=function(t,e,r,o,i,a){var s=typeof o=="number"?_r(o+"ms",9):o.error,u=_r(t,25),c=e.rank,l=e.size,f=_r(e.shape.toString(),14),h="";for(var p in i){var d=i[p].shape||e.shape,v=d.length;h+=p+": "+v+"D "+(v>0?d:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+f+"	%c"+l+"	%c"+h+"	%c"+a,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},n}(),rc=20,Xr=3,va=7;function xd(n,t,e,r){var o=Jt(t),i=function(c,l,f,h){var p=Y(l),d=h[h.length-1],v=new Array(d).fill(0),m=l.length,g=f==="complex64"?jr(c):c;if(m>1)for(var y=0;y<p/d;y++)for(var x=y*d,b=0;b<d;b++)v[b]=Math.max(v[b],qr(g[x+b],0,f).length);return v}(n,t,e,o),a=t.length,s=function c(l,f,h,p,d,v){v===void 0&&(v=!0);var m=h==="complex64"?2:1,g=f[0],y=f.length;if(y===0)return h==="complex64"?[qr(jr(l)[0],0,h)]:h==="bool"?[Ol(l[0])]:[l[0].toString()];if(y===1){if(g>rc){var x=Xr*m,b=Array.from(l.slice(0,x)),w=Array.from(l.slice((g-Xr)*m,g*m));return h==="complex64"&&(b=jr(b),w=jr(w)),["["+b.map(function(M,V){return qr(M,d[V],h)}).join(", ")+", ..., "+w.map(function(M,V){return qr(M,d[g-Xr+V],h)}).join(", ")+"]"]}return["["+(h==="complex64"?jr(l):Array.from(l)).map(function(M,V){return qr(M,d[V],h)}).join(", ")+"]"]}var _=f.slice(1),T=p.slice(1),S=p[0]*m,E=[];if(g>rc){for(var I=0;I<Xr;I++){var A=(N=I*S)+S;E.push.apply(E,c(l.slice(N,A),_,h,T,d,!1))}for(E.push("..."),I=g-Xr;I<g;I++)A=(N=I*S)+S,E.push.apply(E,c(l.slice(N,A),_,h,T,d,I===g-1))}else for(I=0;I<g;I++){var N;A=(N=I*S)+S,E.push.apply(E,c(l.slice(N,A),_,h,T,d,I===g-1))}var O=y===2?",":"";for(E[0]="["+E[0]+O,I=1;I<E.length-1;I++)E[I]=" "+E[I]+O;var P=`,
`;for(I=2;I<y;I++)P+=`
`;return E[E.length-1]=" "+E[E.length-1]+"]"+(v?"":P),E}(n,t,e,o,i),u=["Tensor"];return r&&(u.push("  dtype: "+e),u.push("  rank: "+a),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function qr(n,t,e){return _r(Array.isArray(n)?parseFloat(n[0].toFixed(va))+" + "+parseFloat(n[1].toFixed(va))+"j":xs(n)?"'"+n+"'":e==="bool"?Ol(n):parseFloat(n.toFixed(va)).toString(),t)}function Ol(n){return n===0?"false":"true"}function jr(n){for(var t=[],e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}var eo=function(){function n(t,e,r){var o=this;if(this.dtype=e,this.shape=t.slice(),this.size=Y(t),r!=null){var i=r.length;R(i===this.size,function(){return"Length of values '"+i+"' does not match the size inferred by the shape '"+o.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||ti(e,this.size),this.strides=Jt(t)}return n.prototype.set=function(t){for(var e=this,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];r.length===0&&(r=[0]),R(r.length===this.rank,function(){return"The number of provided coordinates ("+r.length+") must match the rank ("+e.rank+")"});var i=this.locToIndex(r);this.values[i]=t},n.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var r=0,o=0,i=t;o<i.length;o++){var a=i[o];if(a<0||a>=this.shape[r]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}r++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},n.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],r=0;r<t.length-1;++r)e+=this.strides[r]*t[r];return e},n.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),r=0;r<e.length-1;++r)e[r]=Math.floor(t/this.strides[r]),t-=e[r]*this.strides[r];return e[e.length-1]=t,e},Object.defineProperty(n.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),n.prototype.toTensor=function(){return jt().makeTensor(this.values,this.shape,this.dtype)},n}(),jt=null,B=null,Pl=null,Ne=function(){function n(t,e,r,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=Y(t),this.strides=Jt(t),this.dataId=r,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return n.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},n.prototype.asScalar=function(){return this.throwIfDisposed(),R(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},n.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},n.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},n.prototype.as3D=function(t,e,r){return this.throwIfDisposed(),this.reshape([t,e,r])},n.prototype.as4D=function(t,e,r,o){return this.throwIfDisposed(),this.reshape([t,e,r,o])},n.prototype.as5D=function(t,e,r,o,i){return this.throwIfDisposed(),this.reshape([t,e,r,o,i])},n.prototype.asType=function(t){return this.throwIfDisposed(),B.cast(this,t)},Object.defineProperty(n.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),n.prototype.buffer=function(){return K(this,void 0,void 0,function(){var t;return $(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,B.buffer(this.shape,this.dtype,t)]}})})},n.prototype.bufferSync=function(){return B.buffer(this.shape,this.dtype,this.dataSync())},n.prototype.array=function(){return K(this,void 0,void 0,function(){var t;return $(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,tc(this.shape,t)]}})})},n.prototype.arraySync=function(){return tc(this.shape,this.dataSync())},n.prototype.data=function(){return K(this,void 0,void 0,function(){var t,e;return $(this,function(r){switch(r.label){case 0:return this.throwIfDisposed(),t=jt().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=r.sent();try{return[2,e.map(function(o){return ni(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}r.label=2;case 2:return[2,t]}})})},n.prototype.dataSync=function(){this.throwIfDisposed();var t=jt().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(e){return ni(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},n.prototype.bytes=function(){return K(this,void 0,void 0,function(){var t;return $(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,jt().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},n.prototype.dispose=function(){this.isDisposed||(jt().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(n.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),n.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},n.prototype.toFloat=function(){return this.asType("float32")},n.prototype.toInt=function(){return this.asType("int32")},n.prototype.toBool=function(){return this.asType("bool")},n.prototype.print=function(t){return t===void 0&&(t=!1),B.print(this,t)},n.prototype.reshape=function(t){return this.throwIfDisposed(),B.reshape(this,t)},n.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},n.prototype.expandDims=function(t){return t===void 0&&(t=0),B.expandDims(this,t)},n.prototype.cumsum=function(t,e,r){return t===void 0&&(t=0),e===void 0&&(e=!1),r===void 0&&(r=!1),B.cumsum(this,t,e,r)},n.prototype.squeeze=function(t){return this.throwIfDisposed(),B.squeeze(this,t)},n.prototype.clone=function(){return this.throwIfDisposed(),B.clone(this)},n.prototype.oneHot=function(t,e,r){return this.throwIfDisposed(),B.oneHot(this,t,e,r)},n.prototype.toString=function(t){return t===void 0&&(t=!1),xd(this.dataSync(),this.shape,this.dtype,t)},n.prototype.tile=function(t){return this.throwIfDisposed(),B.tile(this,t)},n.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),B.gather(this,t,e)},n.prototype.matMul=function(t,e,r){return e===void 0&&(e=!1),r===void 0&&(r=!1),this.throwIfDisposed(),B.matMul(this,t,e,r)},n.prototype.dot=function(t){return this.throwIfDisposed(),B.dot(this,t)},n.prototype.norm=function(t,e,r){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),r===void 0&&(r=!1),this.throwIfDisposed(),B.norm(this,t,e,r)},n.prototype.slice=function(t,e){return this.throwIfDisposed(),B.slice(this,t,e)},n.prototype.reverse=function(t){return this.throwIfDisposed(),B.reverse(this,t)},n.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof n&&(t=[t]),B.concat([this].concat(t),e)},n.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),B.split(this,t,e)},n.prototype.stack=function(t,e){return e===void 0&&(e=0),B.stack([this,t],e)},n.prototype.unstack=function(t){return t===void 0&&(t=0),B.unstack(this,t)},n.prototype.pad=function(t,e){return e===void 0&&(e=0),B.pad(this,t,e)},n.prototype.batchNormalization=function(t,e,r,o,i){return r===void 0&&(r=.001),Pl("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,i,o,r)},n.prototype.batchNorm=function(t,e,r,o,i){return i===void 0&&(i=.001),this.throwIfDisposed(),B.batchNorm(this,t,e,r,o,i)},n.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),B.all(this,t,e)},n.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),B.any(this,t,e)},n.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),B.logSumExp(this,t,e)},n.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),B.sum(this,t,e)},n.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),B.prod(this,t,e)},n.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),B.mean(this,t,e)},n.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),B.min(this,t,e)},n.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),B.max(this,t,e)},n.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),B.argMin(this,t)},n.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),B.argMax(this,t)},n.prototype.cast=function(t){return this.throwIfDisposed(),B.cast(this,t)},n.prototype.add=function(t){return this.throwIfDisposed(),B.add(this,t)},n.prototype.addStrict=function(t){return this.throwIfDisposed(),B.addStrict(this,t)},n.prototype.atan2=function(t){return this.throwIfDisposed(),B.atan2(this,t)},n.prototype.sub=function(t){return this.throwIfDisposed(),B.sub(this,t)},n.prototype.subStrict=function(t){return this.throwIfDisposed(),B.subStrict(this,t)},n.prototype.pow=function(t){return this.throwIfDisposed(),B.pow(this,t)},n.prototype.powStrict=function(t){return this.throwIfDisposed(),B.powStrict(this,t)},n.prototype.mul=function(t){return this.throwIfDisposed(),B.mul(this,t)},n.prototype.mulStrict=function(t){return this.throwIfDisposed(),B.mulStrict(this,t)},n.prototype.div=function(t){return this.throwIfDisposed(),B.div(this,t)},n.prototype.divNoNan=function(t){return this.throwIfDisposed(),B.divNoNan(this,t)},n.prototype.floorDiv=function(t){return this.throwIfDisposed(),B.floorDiv(this,t)},n.prototype.divStrict=function(t){return this.throwIfDisposed(),B.divStrict(this,t)},n.prototype.minimum=function(t){return this.throwIfDisposed(),B.minimum(this,t)},n.prototype.minimumStrict=function(t){return this.throwIfDisposed(),B.minimumStrict(this,t)},n.prototype.maximum=function(t){return this.throwIfDisposed(),B.maximum(this,t)},n.prototype.maximumStrict=function(t){return this.throwIfDisposed(),B.maximumStrict(this,t)},n.prototype.mod=function(t){return this.throwIfDisposed(),B.mod(this,t)},n.prototype.modStrict=function(t){return this.throwIfDisposed(),B.modStrict(this,t)},n.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),B.squaredDifferenceStrict(this,t)},n.prototype.transpose=function(t){return this.throwIfDisposed(),B.transpose(this,t)},n.prototype.notEqual=function(t){return this.throwIfDisposed(),B.notEqual(this,t)},n.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),B.notEqualStrict(this,t)},n.prototype.less=function(t){return this.throwIfDisposed(),B.less(this,t)},n.prototype.lessStrict=function(t){return this.throwIfDisposed(),B.lessStrict(this,t)},n.prototype.equal=function(t){return this.throwIfDisposed(),B.equal(this,t)},n.prototype.equalStrict=function(t){return this.throwIfDisposed(),B.equalStrict(this,t)},n.prototype.lessEqual=function(t){return this.throwIfDisposed(),B.lessEqual(this,t)},n.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),B.lessEqualStrict(this,t)},n.prototype.greater=function(t){return this.throwIfDisposed(),B.greater(this,t)},n.prototype.greaterStrict=function(t){return this.throwIfDisposed(),B.greaterStrict(this,t)},n.prototype.greaterEqual=function(t){return this.throwIfDisposed(),B.greaterEqual(this,t)},n.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),B.greaterEqualStrict(this,t)},n.prototype.logicalAnd=function(t){return this.throwIfDisposed(),B.logicalAnd(this,t)},n.prototype.logicalOr=function(t){return this.throwIfDisposed(),B.logicalOr(this,t)},n.prototype.logicalNot=function(){return this.throwIfDisposed(),B.logicalNot(this)},n.prototype.logicalXor=function(t){return this.throwIfDisposed(),B.logicalXor(this,t)},n.prototype.where=function(t,e){return this.throwIfDisposed(),B.where(t,this,e)},n.prototype.neg=function(){return this.throwIfDisposed(),B.neg(this)},n.prototype.ceil=function(){return this.throwIfDisposed(),B.ceil(this)},n.prototype.floor=function(){return this.throwIfDisposed(),B.floor(this)},n.prototype.sign=function(){return this.throwIfDisposed(),B.sign(this)},n.prototype.isNaN=function(){return this.throwIfDisposed(),B.isNaN(this)},n.prototype.isInf=function(){return this.throwIfDisposed(),B.isInf(this)},n.prototype.isFinite=function(){return this.throwIfDisposed(),B.isFinite(this)},n.prototype.exp=function(){return this.throwIfDisposed(),B.exp(this)},n.prototype.expm1=function(){return this.throwIfDisposed(),B.expm1(this)},n.prototype.log=function(){return this.throwIfDisposed(),B.log(this)},n.prototype.log1p=function(){return this.throwIfDisposed(),B.log1p(this)},n.prototype.sqrt=function(){return this.throwIfDisposed(),B.sqrt(this)},n.prototype.rsqrt=function(){return this.throwIfDisposed(),B.rsqrt(this)},n.prototype.square=function(){return this.throwIfDisposed(),B.square(this)},n.prototype.reciprocal=function(){return this.throwIfDisposed(),B.reciprocal(this)},n.prototype.abs=function(){return this.throwIfDisposed(),B.abs(this)},n.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),B.clipByValue(this,t,e)},n.prototype.relu=function(){return this.throwIfDisposed(),B.relu(this)},n.prototype.relu6=function(){return this.throwIfDisposed(),B.relu6(this)},n.prototype.elu=function(){return this.throwIfDisposed(),B.elu(this)},n.prototype.selu=function(){return this.throwIfDisposed(),B.selu(this)},n.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),B.leakyRelu(this,t)},n.prototype.prelu=function(t){return this.throwIfDisposed(),B.prelu(this,t)},n.prototype.sigmoid=function(){return this.throwIfDisposed(),B.sigmoid(this)},n.prototype.logSigmoid=function(){return this.throwIfDisposed(),B.logSigmoid(this)},n.prototype.softplus=function(){return this.throwIfDisposed(),B.softplus(this)},n.prototype.zerosLike=function(){return this.throwIfDisposed(),B.zerosLike(this)},n.prototype.onesLike=function(){return this.throwIfDisposed(),B.onesLike(this)},n.prototype.sin=function(){return this.throwIfDisposed(),B.sin(this)},n.prototype.cos=function(){return this.throwIfDisposed(),B.cos(this)},n.prototype.tan=function(){return this.throwIfDisposed(),B.tan(this)},n.prototype.asin=function(){return this.throwIfDisposed(),B.asin(this)},n.prototype.acos=function(){return this.throwIfDisposed(),B.acos(this)},n.prototype.atan=function(){return this.throwIfDisposed(),B.atan(this)},n.prototype.sinh=function(){return this.throwIfDisposed(),B.sinh(this)},n.prototype.cosh=function(){return this.throwIfDisposed(),B.cosh(this)},n.prototype.tanh=function(){return this.throwIfDisposed(),B.tanh(this)},n.prototype.asinh=function(){return this.throwIfDisposed(),B.asinh(this)},n.prototype.acosh=function(){return this.throwIfDisposed(),B.acosh(this)},n.prototype.atanh=function(){return this.throwIfDisposed(),B.atanh(this)},n.prototype.erf=function(){return this.throwIfDisposed(),B.erf(this)},n.prototype.round=function(){return this.throwIfDisposed(),B.round(this)},n.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),B.step(this,t)},n.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),B.softmax(this,t)},n.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),B.logSoftmax(this,t)},n.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),B.image.resizeBilinear(this,t,e)},n.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),B.image.resizeNearestNeighbor(this,t,e)},n.prototype.conv1d=function(t,e,r,o,i,a){return o===void 0&&(o="NWC"),i===void 0&&(i=1),this.throwIfDisposed(),B.conv1d(this,t,e,r,o,i,a)},n.prototype.conv2d=function(t,e,r,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),B.conv2d(this,t,e,r,o,i,a)},n.prototype.conv2dTranspose=function(t,e,r,o,i){return this.throwIfDisposed(),B.conv2dTranspose(this,t,e,r,o,i)},n.prototype.depthwiseConv2D=function(t,e,r,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),B.depthwiseConv2d(this,t,e,r,o,i,a)},n.prototype.separableConv2d=function(t,e,r,o,i,a){return i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC"),this.throwIfDisposed(),B.separableConv2d(this,t,e,r,o,i,a)},n.prototype.avgPool=function(t,e,r,o){return this.throwIfDisposed(),B.avgPool(this,t,e,r,o)},n.prototype.maxPool=function(t,e,r,o){return this.throwIfDisposed(),B.maxPool(this,t,e,r,o)},n.prototype.localResponseNormalization=function(t,e,r,o){return t===void 0&&(t=5),e===void 0&&(e=1),r===void 0&&(r=1),o===void 0&&(o=.5),B.localResponseNormalization(this,t,e,r,o)},n.prototype.pool=function(t,e,r,o,i){return this.throwIfDisposed(),B.pool(this,t,e,r,o,i)},n.prototype.variable=function(t,e,r){return t===void 0&&(t=!0),this.throwIfDisposed(),jt().makeVariable(this,t,e,r)},n.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),B.unsortedSegmentSum(this,t,e)},n.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),B.batchToSpaceND(this,t,e)},n.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),B.spaceToBatchND(this,t,e)},n.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),B.topk(this,t,e)},n.prototype.stridedSlice=function(t,e,r,o,i,a,s,u){return o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),B.stridedSlice(this,t,e,r,o,i,a,s,u)},n.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),B.depthToSpace(this,t,e)},n.prototype.fft=function(){return this.throwIfDisposed(),B.spectral.fft(this)},n.prototype.ifft=function(){return this.throwIfDisposed(),B.spectral.ifft(this)},n.prototype.rfft=function(){return this.throwIfDisposed(),B.spectral.rfft(this)},n.prototype.irfft=function(){return this.throwIfDisposed(),B.spectral.irfft(this)},n}();Object.defineProperty(Ne,Symbol.hasInstance,{value:function(n){return!!n&&n.dataId!=null&&n.shape!=null&&n.dtype!=null}});var oc,Ya,Ja,Qa,Za,Dr=function(n){function t(e,r,o,i){var a=n.call(this,e.shape,e.dtype,e.dataId,i)||this;return a.trainable=r,a.name=o,a}return Wt(t,n),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!Ye(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");jt().disposeTensor(this),this.dataId=e.dataId,jt().incRef(this,null)},t.prototype.dispose=function(){jt().disposeVariable(this),this.isDisposedInternal=!0},t}(Ne);Object.defineProperty(Dr,Symbol.hasInstance,{value:function(n){return n instanceof Ne&&n.assign!=null&&n.assign instanceof Function}}),function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"}(oc||(oc={})),function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"}(Ya||(Ya={})),function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"}(Ja||(Ja={})),function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"}(Qa||(Qa={})),function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"}(Za||(Za={}));var wd={float32:Qa,int32:Ya,bool:Ja,complex64:Za};function et(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error("Can not upcast "+n+" with "+t)}return wd[n][t]}function ma(n){return et(n,"int32")}function De(n,t){if(n.dtype===t.dtype)return[n,t];var e=et(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function _d(n,t){R(n.dtype===t.dtype,function(){return"The dtypes of the first("+n.dtype+") and second("+t.dtype+") input must match"})}function Ml(n){var t=[];return function e(r,o,i){if(r!=null){if(r instanceof Ne)return void o.push(r);if(a=r,!(!Array.isArray(a)&&typeof a!="object")){var a,s=r;for(var u in s){var c=s[u];i.has(c)||(i.add(c),e(c,o,i))}}}}(n,t,new Set),t}var ga,ic=function(){function n(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return n.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},n}(),Ed=function(){function n(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new ic}return n.prototype.ready=function(){return K(this,void 0,void 0,function(){var t,e,r;return $(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,o.label=1;case 1:return e<t.length?(r=t[e],[4,this.initializeBackend(r).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(r)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(n.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),n.prototype.backendNames=function(){return Object.keys(this.registryFactory)},n.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},n.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},n.prototype.registerBackend=function(t,e,r){return r===void 0&&(r=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:r},!0)},n.prototype.setBackend=function(t){return K(this,void 0,void 0,function(){var e,r,o;return $(this,function(i){switch(i.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),r=e.success,e.asyncInit?[4,r]:[3,2]);case 1:return o=i.sent(),[3,3];case 2:o=r,i.label=3;case 3:if(!o)return[2,!1];i.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new yd(this.backendInstance),[2,!0]}})})},n.prototype.setupRegisteredKernels=function(){var t=this;Zu(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)})},n.prototype.disposeRegisteredKernels=function(t){var e=this;Zu(t).forEach(function(r){r.disposeFunc!=null&&r.disposeFunc(e.registry[t])})},n.prototype.initializeBackend=function(t){var e=this,r=this.registryFactory[t];if(r==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=r.factory();if(Promise.resolve(o)===o){var i=++this.pendingBackendInitId,a=o.then(function(s){return!(i<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(i<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=a,{success:a,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},n.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},n.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,r){return t.registryFactory[r].priority-t.registryFactory[e].priority})},n.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var r=t[e],o=this.initializeBackend(r),i=o.success,a=o.asyncInit;if(a||i)return{name:r,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")},n.prototype.moveData=function(t,e){var r=this.state.tensorInfo.get(e),o=r.backend,i=this.readSync(e);o.disposeData(e),r.backend=t,t.move(e,i,r.shape,r.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},n.prototype.tidy=function(t,e){var r,o=this,i=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");i=t}return this.scopedRun(function(){return o.startScope(i)},function(){return o.endScope(r)},function(){return(r=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r})},n.prototype.scopedRun=function(t,e,r){t();try{var o=r();return e(),o}catch(i){throw e(),i}},n.prototype.nextTensorId=function(){return n.nextTensorId++},n.prototype.nextVariableId=function(){return n.nextVariableId++},n.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),r={x:t};return this.addTapeNode(this.state.activeScope.name,r,[e],function(o){return{x:function(){return o.toFloat()}}},[]),e},n.prototype.runKernel=function(t,e,r,o,i){return this.runKernelFunc(null,e,null,t,r,o,i)},n.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},n.prototype.checkKernelForMemLeak=function(t,e,r){var o=this.backend.numDataIds(),i=0;r.forEach(function(u){i+=u.dtype==="complex64"?3:1});var a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-i-a;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},n.prototype.runKernelFunc=function(t,e,r,o,i,a,s){var u,c=this;a===void 0&&(a=[]),s===void 0&&(s=[]);var l=[],f=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var h,p=function(y){f&&(l=y.map(function(x){return c.keep(c.clone(x))}))},d=this.state.numBytes,v=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var m,g=Sl(o,this.backendName);return h=g!=null?function(){var y=c.backend.numDataIds();m=g.kernelFunc({inputs:e,attrs:i,backend:c.backend});var x=Array.isArray(m)?m:[m];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,y,x);var b=x.map(function(_){var T=_.dataId,S=_.shape,E=_.dtype;return c.makeTensorFromDataId(T,S,E)}),w=b.filter(function(_,T){return s[T]});return p((a||[]).slice().concat(w)),b}:function(){var y=c.backend.numDataIds();m=c.tidy(function(){return t(c.backend,p)});var x=Array.isArray(m)?m:[m];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,y,x),x},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,function(){return h()}):h()}),f&&this.addTapeNode(o,e,u,r,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-d,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-v,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(y){return e[y].shape}),outputShapes:u.map(function(y){return y.shape})}),Array.isArray(m)?u:u[0]},n.prototype.makeTensor=function(t,e,r,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",o=o||this.backend;var i=t;r==="string"&&xs(t[0])&&(i=t.map(function(l){return md(l)}));var a=o.write(i,e,r),s=new Ne(e,r,a,this.nextTensorId());if(this.incRef(s,o),r==="string"){var u=this.state.tensorInfo.get(a),c=pd(i);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},n.prototype.makeTensorFromDataId=function(t,e,r,o){var i=new Ne(e,r=r||"float32",t,this.nextTensorId());return this.incRef(i,o),i},n.prototype.makeVariable=function(t,e,r,o){e===void 0&&(e=!0),r=r||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var i=new Dr(t,e,r,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error("Variable with name "+i.name+" was already registered");return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i},n.prototype.incRef=function(t,e){var r=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,r===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*Nl(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof Dr||this.track(t)},n.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},n.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},n.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},n.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},n.prototype.profile=function(t){return K(this,void 0,void 0,function(){var e,r;return $(this,function(o){return this.state.profiling=!0,e=this.state.numBytes,r=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(i){return i.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-r,[2,this.state.activeProfile]})})},n.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},n.prototype.addTapeNode=function(t,e,r,o,i){var a=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:r,saved:i},u=id(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,f){if(l==null){var h=r[f],p=po(h.size,h.dtype);return a.makeTensor(p,h.shape,h.dtype)}return l}),o(c.length>1?c:c[0],i)}),this.state.activeTape.push(s)},n.prototype.keep=function(t){return t.kept=!0,t},n.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},n.prototype.endTape=function(){this.state.gradientDepth--},n.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},n.prototype.endScope=function(t){for(var e=this,r=Ml(t),o=new Set(r.map(function(u){return u.id})),i=0;i<this.state.activeScope.track.length;i++){var a=this.state.activeScope.track[i];a.kept||o.has(a.id)||a.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],r.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},n.prototype.gradients=function(t,e,r,o){var i=this;if(o===void 0&&(o=!1),R(e.length>0,function(){return"gradients() received an empty list of xs."}),r!=null&&r.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+r.dtype+"'");var a=this.scopedRun(function(){return i.startTape()},function(){return i.endTape()},function(){return i.tidy("forward",t)});R(a instanceof Ne,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var f={},h={},p=0;p<c.length;p++)f[c[p].id]=!0;for(p=0;p<u.length;p++){var d=(_=u[p]).inputs;for(var v in d){for(var m=d[v],g=!1,y=0;y<c.length;y++)if(f[m.id]){_.outputs.forEach(function(I){return f[I.id]=!0}),g=!0,h[_.id]=!0;break}if(g)break}}var x={};x[l.id]=!0;var b={};for(p=u.length-1;p>=0;p--)for(d=(_=u[p]).inputs,y=0;y<_.outputs.length;y++)if(x[_.outputs[y].id]){for(var v in d)x[d[v].id]=!0,b[_.id]=!0;break}var w=[];for(p=0;p<u.length;p++){var _;if(h[(_=u[p]).id]&&b[_.id]){var T={};for(var v in _.inputs){var S=_.inputs[v];f[S.id]&&(T[v]=S)}var E=Object.assign({},_);E.inputs=T,E.outputs=_.outputs,w.push(E)}}return w}(this.state.activeTape,e,a);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[a.id]=r??(u=a.shape,c=kl(Y(u),"float32"),D.makeTensor(c,u,"float32")),function(h,p,d){for(var v=function(g){var y=p[g],x=[];if(y.outputs.forEach(function(T){var S=h[T.id];S!=null?x.push(S):x.push(null)}),y.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+y.kernelName+".");var b=y.gradient(x),w=function(T){if(!(T in b))throw new Error("Cannot backprop through input "+T+". Available gradients found: "+Object.keys(b)+".");var S=d(function(){return b[T]()});if(S.dtype!=="float32")throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input "+T+" must have 'float32' dtype, but has '"+S.dtype+"'");var E=y.inputs[T];if(!Ye(S.shape,E.shape))throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input '"+T+"' has shape '"+S.shape+"', which does not match the shape of the input '"+E.shape+"'");if(h[E.id]==null)h[E.id]=S;else{var I=h[E.id];h[E.id]=I.add(S),I.dispose()}};for(var _ in y.inputs)w(_)},m=p.length-1;m>=0;m--)v(m)}(l,s,function(h){return i.tidy(h)});var f=e.map(function(h){return l[h.id]});return i.state.gradientDepth===0&&(i.state.activeTape.forEach(function(h){for(var p=0,d=h.saved;p<d.length;p++)d[p].dispose()}),i.state.activeTape=null),{value:a,grads:f}})},n.prototype.customGrad=function(t){var e=this;return R(Ka(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var r,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];R(o.every(function(s){return s instanceof Ne}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var a={};return o.forEach(function(s,u){a[u]=s}),e.runKernelFunc(function(s,u){return R((r=t.apply(void 0,o.concat([u]))).value instanceof Ne,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),R(Ka(r.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),r.value},a,function(s,u){var c=r.gradFunc(s,u),l=Array.isArray(c)?c:[c];R(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),R(l.every(function(h){return h instanceof Ne}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var f={};return l.forEach(function(h,p){f[p]=function(){return h}}),f})}},n.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},n.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},n.prototype.time=function(t){return K(this,void 0,void 0,function(){var e,r;return $(this,function(o){switch(o.label){case 0:return e=qt(),[4,this.backend.time(t)];case 1:return(r=o.sent()).wallMs=qt()-e,[2,r]}})})},n.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(n.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),n.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new ic,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},n.nextTensorId=0,n.nextVariableId=0,n}(),D=function(){var n=function(){if(ga==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}ga=e}return ga}();if(n._tfengine==null){var t=new rd(n);n._tfengine=new Ed(t)}return function(e){Cl=e}(n._tfengine.ENV),jt=function(){return n._tfengine},n._tfengine}();function Fl(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var un=L();un.registerFlag("DEBUG",function(){return!1},function(n){n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),un.registerFlag("IS_BROWSER",function(){return Fl()}),un.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),un.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),un.registerFlag("PROD",function(){return!1}),un.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return un.getBool("DEBUG")}),un.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),un.registerFlag("IS_TEST",function(){return!1});var to,Ct,Et,Hn={},ya={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Cd(n,t){Hn[n]=t}function en(n){n in Hn||(Hn[n]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var r=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return r.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete Hn[e]},!1),e===1?r.getContext("webgl",ya)||r.getContext("experimental-webgl",ya):r.getContext("webgl2",ya)}(n));var t=Hn[n];return t.isContextLost()?(delete Hn[n],en(n)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),Hn[n])}function ki(n,t){return[t,n]}function Yr(n){var t=Y(n);return ja(Math.ceil(t/4))}function vo(n,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(n/2))]}function ws(n,t){var e,r,o,i,a,s,u,c,l,f=n;return L().getNumber("WEBGL_VERSION")===2?(e=f.R32F,r=f.R16F,o=f.RGBA16F,i=f.RGBA32F,a=f.RED,s=4,u=1,c=f.HALF_FLOAT,l=f.FLOAT):(e=n.RGBA,r=n.RGBA,o=n.RGBA,i=f.RGBA,a=n.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=n.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:n.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function J(n,t,e){var r=e();return t&&function(o){var i=o.getError();if(i!==o.NO_ERROR)throw new Error("WebGL Error: "+Td(o,i))}(n),r}(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(to||(to={})),function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"}(Ct||(Ct={})),function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(Et||(Et={}));var Sd=596e-10,Id=65504;function Rd(n){return!!(L().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||Sd<Math.abs(n)&&Math.abs(n)<Id)}function Td(n,t){switch(t){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function No(n,t,e){return yn(n,t,function(){return n.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function Nd(n,t,e){var r=yn(n,t,function(){return n.createShader(n.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(J(n,t,function(){return n.shaderSource(r,e)}),J(n,t,function(){return n.compileShader(r)}),n.getShaderParameter(r,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function Ad(n,t,e){var r=yn(n,t,function(){return n.createShader(n.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(J(n,t,function(){return n.shaderSource(r,e)}),J(n,t,function(){return n.compileShader(r)}),n.getShaderParameter(r,n.COMPILE_STATUS)===!1)throw function(o,i){var a=kd.exec(i);if(a==null)return console.log("Couldn't parse line number in error: "+i),void console.log(o);for(var s=+a[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(m,g){return _r((g+1).toString(),c)+m}),f=0,h=0;h<l.length;h++)f=Math.max(l[h].length,f);var p=l.slice(0,s-1),d=l.slice(s-1,s),v=l.slice(s);console.log(p.join(`
`)),console.log(i.split(`
`)[0]),console.log("%c "+_r(d[0],f),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(v.join(`
`))}(e,n.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}var ba,xa,kd=/ERROR: [0-9]+:([0-9]+):/g;function Dd(n,t){return yn(n,t,function(){return n.createProgram()},"Unable to create WebGLProgram.")}function Od(n,t,e){if(J(n,t,function(){return n.linkProgram(e)}),n.getProgramParameter(e,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function wa(n,t,e){if(J(n,t,function(){return n.validateProgram(e)}),n.getProgramParameter(e,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function Pd(n,t,e){var r=yn(n,t,function(){return n.createBuffer()},"Unable to create WebGLBuffer");return J(n,t,function(){return n.bindBuffer(n.ARRAY_BUFFER,r)}),J(n,t,function(){return n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW)}),r}function Md(n,t,e){var r=yn(n,t,function(){return n.createBuffer()},"Unable to create WebGLBuffer");return J(n,t,function(){return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r)}),J(n,t,function(){return n.bufferData(n.ELEMENT_ARRAY_BUFFER,e,n.STATIC_DRAW)}),r}function Fd(n,t){return yn(n,t,function(){return n.createTexture()},"Unable to create WebGLTexture.")}function Bd(n,t){var e=L().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||t<=0){var r="["+n+"x"+t+"]";throw new Error("Requested texture size "+r+" is invalid.")}if(n>e||t>e)throw r="["+n+"x"+t+"]",new Error("Requested texture size "+r+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function Ld(n,t){return yn(n,t,function(){return n.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function ac(n,t,e,r,o,i,a,s){var u=n.getAttribLocation(e,r);return u!==-1&&(J(n,t,function(){return n.bindBuffer(n.ARRAY_BUFFER,o)}),J(n,t,function(){return n.vertexAttribPointer(u,i,n.FLOAT,!1,a,s)}),J(n,t,function(){return n.enableVertexAttribArray(u)}),!0)}function Wd(n,t,e,r){Hd(n,r),J(n,t,function(){return n.activeTexture(n.TEXTURE0+r)}),J(n,t,function(){return n.bindTexture(n.TEXTURE_2D,e)})}function Vd(n,t,e,r){return yn(n,t,function(){return n.getUniformLocation(e,r)},'uniform "'+r+'" not present in program.')}function Ud(n,t,e){return n.getUniformLocation(t,e)}function zd(n,t,e,r,o,i){J(n,t,function(){return Wd(n,t,r,i)}),J(n,t,function(){return n.uniform1i(o,i)})}function _a(n,t,e,r){J(n,t,function(){return n.bindFramebuffer(n.FRAMEBUFFER,r)}),J(n,t,function(){return n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0)})}function sc(n,t,e){J(n,t,function(){return n.bindFramebuffer(n.FRAMEBUFFER,e)}),J(n,t,function(){return n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0)})}function Ao(n){var t=n.checkFramebufferStatus(n.FRAMEBUFFER);if(t!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+Gd(n,t))}function Gd(n,t){switch(t){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function yn(n,t,e,r){var o=J(n,t,function(){return e()});if(o==null)throw new Error(r);return o}function Hd(n,t){var e=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+n.TEXTURE0;if(r<n.TEXTURE0||r>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function ri(n,t){return t===void 0&&(t=2),Y(n.slice(0,n.length-t))}function oi(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function Ea(n){var t=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(t=[ri(n)].concat(oi(n))),t}function Xd(n,t){var e;t===void 0&&(t=!1);var r=L().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(r*=2,(n=n.map(function(c,l){return l>=n.length-2?Tl(n[l]):n[l]})).length===1&&(n=[2,n[0]])),n.length!==2){var o=jn(n);n=o.newShape}var i=Y(n);if(n.length<=1&&i<=r)return[1,i];if(n.length===2&&n[0]<=r&&n[1]<=r)return n;if(n.length===3&&n[0]*n[1]<=r&&n[2]<=r)return[n[0]*n[1],n[2]];if(n.length===3&&n[0]<=r&&n[1]*n[2]<=r)return[n[0],n[1]*n[2]];if(n.length===4&&n[0]*n[1]*n[2]<=r&&n[3]<=r)return[n[0]*n[1]*n[2],n[3]];if(n.length===4&&n[0]<=r&&n[1]*n[2]*n[3]<=r)return[n[0],n[1]*n[2]*n[3]];if(t){var a=ri(n),s=2,u=2;return n.length&&(s=(e=oi(n))[0],u=e[1]),ja(i=a*(s/2)*(u/2)).map(function(c){return 2*c})}return ja(i)}function ko(n){return n%2==0}function Do(n,t){if(Ye(n=n.slice(-2),t=t.slice(-2))||!n.length||!t.length||n[0]===0||n[1]===0||t[0]===0||t[1]===0)return!0;if(n.length!==t.length){var e=n.slice(-1)[0],r=t.slice(-1)[0];if(e===r||ko(e)&&ko(r)&&(n[0]===1||t[0]===1))return!0}return n[1]===t[1]&&ko(n[0])&&ko(t[0])}function qd(n){if(ba==null){var t=en(n);ba=t.getParameter(t.MAX_TEXTURE_SIZE)}return ba}function jd(n){if(xa==null){var t=en(n);xa=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,xa)}function Kd(n){if(n===0)return 0;var t=en(n);return kt(t,"EXT_disjoint_timer_query_webgl2")&&n===2?2:kt(t,"EXT_disjoint_timer_query")?1:0}function kt(n,t){return n.getExtension(t)!=null}function uc(n){try{if(en(n)!=null)return!0}catch{return!1}return!1}function $d(n){if(n===0)return!1;var t=en(n);if(n===1){if(!kt(t,"OES_texture_float"))return!1}else if(!kt(t,"EXT_color_buffer_float"))return!1;return es(t)}function Yd(n){if(n===0)return!1;var t=en(n);if(n!==1){if(kt(t,"EXT_color_buffer_float"))return es(t);if(kt(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return function(r,o){var i=ws(r,o),a=r.createTexture();r.bindTexture(r.TEXTURE_2D,a),r.texImage2D(r.TEXTURE_2D,0,i.internalFormatHalfFloat,1,1,0,i.textureFormatFloat,i.textureTypeHalfFloat,null);var s=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,s),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,a,0);var u=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(a),r.deleteFramebuffer(s),u}(t,e)}return!1}return!!kt(t,"OES_texture_float")&&!!kt(t,"WEBGL_color_buffer_float")&&es(t)}function es(n){var t=ws(n),e=n.createTexture();n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var r=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,r),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);var o=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(e),n.deleteFramebuffer(r),o}function Jd(n){return n===2&&en(n).fenceSync!=null}var ne=L();function Bl(n){L().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(n+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function j(n,t){return D.tidy(n,t)}function gt(n){Ml(n).forEach(function(t){return t.dispose()})}function Qd(n){return D.keep(n)}function ii(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];L().getBool("IS_TEST")||console.warn.apply(console,n)}function Vn(n,t){var e=n;if(Yt(n))return t==="string"?[]:[n.length];if(!Array.isArray(n))return[];for(var r=[];Array.isArray(e)||Yt(e)&&t!=="string";)r.push(e.length),e=e[0];return Array.isArray(n)&&L().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(i,a,s){if(s=s||[],!Array.isArray(i)&&!Yt(i))return void R(a.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+a[0]+" elements"});R(a.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+i.length+" elements"}),R(i.length===a[0],function(){return"Element arr["+s.join("][")+"] should have "+a[0]+" elements, but has "+i.length+" elements"});for(var u=a.slice(1),c=0;c<i.length;++c)o(i[c],u,s.concat(c))}(n,r,[]),r}function cc(n,t,e,r){if(n!=null&&(n!=="numeric"&&n!==t||n==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+r+"' must be "+n+" tensor, but got "+t+" tensor")}function C(n,t,e,r){if(r===void 0&&(r="numeric"),n instanceof Ne)return cc(r,n.dtype,t,e),n;var o=ho(n);if(o!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(o=r),cc(r,o,t,e),n==null||!Yt(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){var i=n==null?"null":n.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+i+"'")}var a=Vn(n,o);Yt(n)||Array.isArray(n)||(n=[n]);var s=o!=="string"?Al(n,o,L().getBool("DEBUG")):kr(n,[],!0);return D.makeTensor(s,a,o)}function ai(n,t,e,r){if(r===void 0&&(r="numeric"),!Array.isArray(n))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return n.map(function(o,i){return C(o,t+"["+i+"]",e)},r)}function Ll(n,t){for(var e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function Zd(n,t,e){for(var r=n.length+t.length,o=[],i=0,a=0,s=0;s<r;s++)e.indexOf(s)===-1?o.push(n[i++]):o.push(t[a++]);return o}function ot(n,t){for(var e=[],r=n.length,o=0;o<r;o++)t.indexOf(o)===-1&&e.push(n[o]);return[e,t.map(function(i){return n[i]})]}function yt(n,t){return Zd(n,t.map(function(e){return 1}),t)}function _t(n,t,e){R(Ll(t,e),function(){return n+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."})}function tn(n,t){if(Ll(n,t))return null;for(var e=[],r=0;r<t;++r)n.indexOf(r)===-1&&e.push(r);return n.forEach(function(o){return e.push(o)}),e}function _s(n){return n.map(function(t,e){return[e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function nn(n,t){for(var e=[],r=t-n;r<t;++r)e.push(r);return e}function ev(n,t){var e=n[0].length;n.forEach(function(o,i){R(o.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+i+"] must be the same as the rank of the rest ("+e+")"})}),R(t>=0&&t<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var r=n[0];n.forEach(function(o,i){for(var a=0;a<e;a++)R(a===t||o[a]===r[a],function(){return"Error in concat"+e+"D: Shape of tensors["+i+"] ("+o+") does not match the shape of the rest ("+r+") along the non-concatenated axis "+i+"."})})}function Or(n,t){for(var e=n[0].slice(),r=1;r<n.length;r++)e[t]+=n[r][t];return e}function k(n){var t=Object.keys(n);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],r=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];D.startScope(e);try{var s=r.apply(void 0,i);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),D.endScope(s),s}catch(u){throw D.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}ne.registerFlag("HAS_WEBGL",function(){return ne.getNumber("WEBGL_VERSION")>0}),ne.registerFlag("WEBGL_VERSION",function(){return uc(2)?2:uc(1)?1:0}),ne.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return ne.get("WEBGL_VERSION")===2}),ne.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),ne.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),ne.registerFlag("WEBGL_PACK",function(){return ne.getBool("HAS_WEBGL")}),ne.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_CLIP",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),ne.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_REDUCE",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_LAZILY_UNPACK",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_CONV_IM2COL",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return qd(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return jd(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var n=ne.getNumber("WEBGL_VERSION");return n===0?0:Kd(n)}),ne.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return ne.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(n=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0,4))));var n}),ne.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return $d(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!ne.getBool("WEBGL_FORCE_F16_TEXTURES")&&ne.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),ne.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return Yd(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return Jd(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return ne.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),Pl=Bl;var Ze=k({complex_:function(n,t){var e=C(n,"real","complex"),r=C(t,"imag","complex");return we(e.shape,r.shape,"real and imag shapes, "+e.shape+" and "+r.shape+", must match in call to tf.complex()."),D.runKernelFunc(function(o){return o.complex(e,r)},{$real:e,$imag:r})}}),At=k({real_:function(n){var t=C(n,"input","real");return D.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),Kt=k({imag_:function(n){var t=C(n,"input","imag");return D.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function tt(n,t,e){return Un(n,t,Vn(n,e),e)}function Un(n,t,e,r){if(r==null&&(r=ho(n)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Yt(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Dl(t);var o=Y(t),i=Y(e);R(o===i,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+i});for(var a=0;a<e.length;++a){var s=e[a],u=a!==e.length-1||s!==Y(t.slice(a));R(e[a]===t[a]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "})}}return Yt(n)||Array.isArray(n)||(n=[n]),t=t||e,n=r!=="string"?Al(n,r,L().getBool("DEBUG")):kr(n,[],!0),D.makeTensor(n,t,r)}function q(n,t){if((Yt(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Yt(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Un(n,[],[],t)}function Ve(n,t){Ur(n);var e=Vn(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Un(n,null,e,t)}function On(n,t,e){if(Ur(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var r=Vn(n,e);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Un(n,t,r,e)}function Es(n,t,e){if(Ur(n),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var r=Vn(n,e);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Un(n,t,r,e)}function dt(n,t,e){if(Ur(n),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var r=Vn(n,e);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Un(n,t,r,e)}function tv(n,t,e){if(Ur(n),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var r=Vn(n,e);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Un(n,t,r,e)}function nv(n,t,e){if(Ur(n),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var r=Vn(n,e);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return Un(n,t=t||r,r,e)}function rv(n,t,e,r){return t===void 0&&(t=!0),D.makeVariable(n,t,e,r)}function zr(n,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=zr(n,"float32"),r=Ce(n,"float32");return Ze(e,r)}var o=kl(Y(n),t);return D.makeTensor(o,n,t)}function Ce(n,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=Ce(n,"float32"),r=Ce(n,"float32");return Ze(e,r)}var o=po(Y(n),t);return D.makeTensor(o,n,t)}function Qt(n,t,e){return D.runKernelFunc(function(r){return r.fill(n,t,e)},{})}function ov(n,t,e){if(e<=0)throw new Error("The number of values should be positive.");return D.runKernelFunc(function(r){return r.linspace(n,t,e)},{})}function si(n,t,e,r){if(e===void 0&&(e=1),r===void 0&&(r="float32"),e===0)throw new Error("Cannot have a step of zero");if(n===t||n<t&&e<0||t<n&&e>1)return Ce([0],r);var o=po(Math.abs(Math.ceil((t-n)/e)),r);t<n&&e===1&&(e=-1),o[0]=n;for(var i=1;i<o.length;i++)o[i]=o[i-1]+e;return Ve(o,r)}var Wl=k({onesLike_:function(n){var t=C(n,"x","onesLike");if(t.dtype==="complex64"){var e=Wl(At(t)),r=ge(Kt(t));return Ze(e,r)}return D.runKernelFunc(function(o){return o.onesLike(t)},{$x:t},function(o,i){return{$x:function(){return ge(o)}}})}}),ge=k({zerosLike_:function(n){var t=C(n,"x","zerosLike");return D.runKernelFunc(function(e){return e.zerosLike(t)},{$x:t},function(e,r){return{$x:function(){return ge(e)}}})}}),Ge=k({concat_:function(n,t){t===void 0&&(t=0),R(n.length>=1,function(){return"Pass at least one tensor to concat"});var e=ai(n,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=je(t,e[0].shape)[0];var r=Or(e.map(function(s){return s.shape}),t);if(Y(r)===0)return tt([],r);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var o=e.map(function(s){return s.shape});ev(o,t);var i=e,a={axis:t};return D.runKernelFunc(function(s){return s.concat(e,t)},i,function(s){var u=o.map(function(c){return c[t]});return Cs(s,u,t).map(function(c){return function(){return c}})},"Concat",a)}}),iv=k({concat1d_:function(n){return Ge(n,0)}}),av=k({concat2d_:function(n,t){return Ge(n,t)}}),sv=k({concat3d_:function(n,t){return Ge(n,t)}}),uv=k({concat4d_:function(n,t){return Ge(n,t)}}),Cs=k({split_:function(n,t,e){e===void 0&&(e=0);var r,o=C(n,"x","split");return e=je(e,o.shape)[0],typeof t=="number"?(R(o.shape[e]%t==0,function(){return"Number of splits must evenly divide the axis."}),r=new Array(t).fill(o.shape[e]/t)):(R(o.shape[e]===t.reduce(function(i,a){return i+a}),function(){return"The sum of sizes must match the size of the axis dimension."}),r=t),D.runKernelFunc(function(i){return i.split(o,r,e)},{$x:o},function(i){return{$x:function(){return Ge(i,e)}}})}});function ir(n,t){return n(t={exports:{}},t.exports),t.exports}var cv=ir(function(n){(function(t,e,r){function o(s){var u,c=this,l=(u=4022871197,function(f){f=f.toString();for(var h=0;h<f.length;h++){var p=.02519603282416938*(u+=f.charCodeAt(h));p-=u=p>>>0,u=(p*=u)>>>0,u+=4294967296*(p-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var f=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=f-(c.c=0|f)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function i(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function a(s,u){var c=new o(s),l=u&&u.state,f=c.next;return f.int32=function(){return 4294967296*c.next()|0},f.double=function(){return f()+11102230246251565e-32*(2097152*f()|0)},f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.alea=a})(0,n)}),lv=ir(function(n){(function(t,e,r){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var f=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^f^f>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xor128=a})(0,n)}),fv=ir(function(n){(function(t,e,r){function o(s){var u=this,c="";u.next=function(){var f=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^f^f<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xorwow=a})(0,n)}),hv=ir(function(n){(function(t,e,r){function o(s){var u=this;u.next=function(){var c,l,f=u.x,h=u.i;return c=f[h],l=(c^=c>>>7)^c<<24,l^=(c=f[h+1&7])^c>>>10,l^=(c=f[h+3&7])^c>>>3,l^=(c=f[h+4&7])^c<<7,c=f[h+7&7],l^=(c^=c<<13)^c<<9,f[h]=l,u.i=h+1&7,l},function(c,l){var f,h=[];if(l===(0|l))h[0]=l;else for(l=""+l,f=0;f<l.length;++f)h[7&f]=h[7&f]<<15^l.charCodeAt(f)+h[f+1&7]<<13;for(;h.length<8;)h.push(0);for(f=0;f<8&&h[f]===0;++f);for(f==8?h[7]=-1:h[f],c.x=h,c.i=0,f=256;f>0;--f)c.next()}(u,s)}function i(s,u){return u.x=s.x.slice(),u.i=s.i,u}function a(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.x&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xorshift7=a})(0,n)}),pv=ir(function(n){(function(t,e,r){function o(s){var u=this;u.next=function(){var c,l,f=u.w,h=u.X,p=u.i;return u.w=f=f+1640531527|0,l=h[p+34&127],c=h[p=p+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=h[p]=l^c,u.i=p,l+(f^f>>>16)|0},function(c,l){var f,h,p,d,v,m=[],g=128;for(l===(0|l)?(h=l,l=null):(l+="\0",h=0,g=Math.max(g,l.length)),p=0,d=-32;d<g;++d)l&&(h^=l.charCodeAt((d+32)%l.length)),d===0&&(v=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,d>=0&&(v=v+1640531527|0,p=(f=m[127&d]^=h+v)==0?p+1:0);for(p>=128&&(m[127&(l&&l.length||0)]=-1),p=127,d=512;d>0;--d)h=m[p+34&127],f=m[p=p+1&127],h^=h<<13,f^=f<<17,h^=h>>>15,f^=f>>>12,m[p]=h^f;c.w=v,c.X=m,c.i=p}(u,s)}function i(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function a(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.X&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xor4096=a})(0,n)}),dv=ir(function(n){(function(t,e,r){function o(s){var u=this,c="";u.next=function(){var f=u.b,h=u.c,p=u.d,d=u.a;return f=f<<25^f>>>7^h,h=h-p|0,p=p<<24^p>>>8^d,d=d-f|0,u.b=f=f<<20^f>>>12^h,u.c=h=h-p|0,u.d=p<<16^h>>>16^d,u.a=d-f|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function i(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.tychei=a})(0,n)}),Xn=ir(function(n){(function(t,e){var r,o=this,i=256,a=6,s="random",u=e.pow(i,a),c=e.pow(2,52),l=2*c,f=i-1;function h(g,y,x){var b=[],w=v(function S(E,I){var A,N=[],O=typeof E;if(I&&O=="object")for(A in E)try{N.push(S(E[A],I-1))}catch{}return N.length?N:O=="string"?E:E+"\0"}((y=y==1?{entropy:!0}:y||{}).entropy?[g,m(t)]:g??function(){try{var S;return r&&(S=r.randomBytes)?S=S(i):(S=new Uint8Array(i),(o.crypto||o.msCrypto).getRandomValues(S)),m(S)}catch{var E=o.navigator,I=E&&E.plugins;return[+new Date,o,I,o.screen,m(t)]}}(),3),b),_=new p(b),T=function(){for(var S=_.g(a),E=u,I=0;S<c;)S=(S+I)*i,E*=i,I=_.g(1);for(;S>=l;)S/=2,E/=2,I>>>=1;return(S+I)/E};return T.int32=function(){return 0|_.g(4)},T.quick=function(){return _.g(4)/4294967296},T.double=T,v(m(_.S),t),(y.pass||x||function(S,E,I,A){return A&&(A.S&&d(A,_),S.state=function(){return d(_,{})}),I?(e[s]=S,E):S})(T,w,"global"in y?y.global:this==e,y.state)}function p(g){var y,x=g.length,b=this,w=0,_=b.i=b.j=0,T=b.S=[];for(x||(g=[x++]);w<i;)T[w]=w++;for(w=0;w<i;w++)T[w]=T[_=f&_+g[w%x]+(y=T[w])],T[_]=y;(b.g=function(S){for(var E,I=0,A=b.i,N=b.j,O=b.S;S--;)E=O[A=f&A+1],I=I*i+O[f&(O[A]=O[N=f&N+E])+(O[N]=E)];return b.i=A,b.j=N,I})(i)}function d(g,y){return y.i=g.i,y.j=g.j,y.S=g.S.slice(),y}function v(g,y){for(var x,b=g+"",w=0;w<b.length;)y[f&w]=f&(x^=19*y[f&w])+b.charCodeAt(w++);return m(y)}function m(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=h,v(e.random(),t),n.exports){n.exports=h;try{r=require("crypto")}catch{}}})([],Math)});Xn.alea=cv,Xn.xor128=lv,Xn.xorwow=fv,Xn.xorshift7=hv,Xn.xor4096=pv,Xn.tychei=dv;var Di=Xn.alea,Ss=function(){function n(t,e,r,o,i){this.mean=t,this.stdDev=e,this.dtype=r,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=i||Math.random();this.random=Di(a.toString())}return n.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,r,o=!1;!o;){var i=void 0,a=void 0,s=void 0;do s=(i=2*this.random()-1)*i+(a=2*this.random()-1)*a;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*i*u,r=this.mean+this.stdDev*a*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(r)||(this.nextVal=this.convertValue(r)),this.convertValue(e)},n.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},n.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},n}(),vv=function(){function n(t,e,r,o){this.alpha=t,this.beta=1/e,this.dtype=r;var i=o||Math.random();this.randu=Di(i.toString()),this.randn=new Ss(0,1,r,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return n.prototype.nextValue=function(){for(var t,e,r,o,i,a;;){do o=this.randn.nextValue(),a=1+this.c*o;while(a<=0);if(a*=a*a,e=1-.331*(t=o*o)*t,r=.5*t+this.d*(1-a+Math.log(a)),(i=this.randu())<e||Math.log(i)<r)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)},n.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},n}(),mv=function(){function n(t,e,r,o){var i=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return i.dtype==null||i.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=r,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=Di(o)}return n.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},n.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},n}();function ie(n,t,e){return t===void 0&&(t="float32"),t=t||"float32",Dl(n),new eo(n,t,e)}function gv(n,t){t===void 0&&(t=!1),console.log(n.toString(t))}var Vl=k({batchToSpaceND_:function(n,t,e){var r=C(n,"x","batchToSpaceND"),o=t.reduce(function(i,a){return i*a});return R(r.rank>=1+t.length,function(){return"input rank is "+r.rank+" but should be > than blockShape.length "+t.length}),R(e.length===t.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length}),R(r.shape[0]%o==0,function(){return"input tensor batch is "+r.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),D.runKernelFunc(function(i){return i.batchToSpaceND(r,t,e)},{$x:r},function(i){return{$x:function(){return i.spaceToBatchND(t,e)}}})}}),yv=k({broadcastTo_:function(n,t){var e=C(n,"broadcastTo","x"),r=e.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var o=e.shape.slice();o.length<t.length;)o.unshift(1);e=e.reshape(o)}for(var i=Array.from(t),a=t.length-1;a>=0;a--)if(e.shape[a]===t[a])i[a]=1;else if(e.shape[a]!==1)throw new Error("broadcastTo(): ["+r+"] cannot be broadcast to ["+t+"].");var s=i.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():D.runKernelFunc(function(u){return u.tile(e,i)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),bv=k({cast_:function(n,t){var e=C(n,"x","cast");if(!fd(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var r={dtype:t};return D.runKernelFunc(function(o){return o.cast(e,t)},{x:e},function(o){return{x:function(){return o.clone()}}},"Cast",r)}}),xv=k({clone_:function(n){var t=C(n,"x","clone",null);return D.runKernelFunc(function(){return D.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(e){return{$x:function(){return e.toFloat()}}})}}),wv=k({cumsum_:function(n,t,e,r){t===void 0&&(t=0),e===void 0&&(e=!1),r===void 0&&(r=!1);var o=C(n,"x","cumsum"),i=tn([t|=0],o.rank),a=o;i!=null&&(a=o.transpose(i));var s=nn(1,o.rank)[0],u=D.runKernelFunc(function(c){return c.cumsum(a,s,e,r)},{permutedX:a},function(c){return{permutedX:function(){return c.cumsum(t,e,!r)}}});return i!=null&&(u=u.transpose(i)),u}}),_v=k({depthToSpace_:function(n,t,e){e===void 0&&(e="NHWC");var r=C(n,"x","depthToSpace"),o=e==="NHWC"?r.shape[1]:r.shape[2],i=e==="NHWC"?r.shape[2]:r.shape[3],a=e==="NHWC"?r.shape[3]:r.shape[1];return R(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+r.shape}),R(i*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+i+" and "+t+` for depthToSpace with input shape
          `+r.shape}),R(a%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+a+" for depthToSpace with input shape "+r.shape}),D.runKernelFunc(function(s){return s.depthToSpace(r,t,e)},{$x:r})}}),Nt=k({expandDims_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","expandDims",null);R(t<=e.rank,function(){return"Axis must be <= rank of the tensor"});var r=e.shape.slice();return t<0&&(R(-(e.rank+1)<=t,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),t=e.rank+t+1),r.splice(t,0,1),Bt(e,r)}}),Ul=k({eye_:function(n,t,e,r){r===void 0&&(r="float32"),t==null&&(t=n);for(var o=ie([n,t],r),i=n<=t?n:t,a=0;a<i;++a)o.set(1,a,a);var s=o.toTensor().as2D(n,t);if(e==null)return s;if(e.length===1)return Er(Nt(s,0),[e[0],1,1]);if(e.length===2)return Er(Nt(Nt(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return Er(Nt(Nt(Nt(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),Ev=k({multinomial_:function(n,t,e,r){r===void 0&&(r=!1);var o=C(n,"logits","multinomial"),i=o.size,a=o.rank;if(i<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+i+".");if(a>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+a);e=e||Math.random();var s=a===1?o.as2D(1,-1):o,u=D.runKernelFunc(function(c){return c.multinomial(s,r,t,e)},{logits2D:s});return a===1?u.as1D():u}}),ts=k({oneHot_:function(n,t,e,r){if(e===void 0&&(e=1),r===void 0&&(r=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=C(n,"indices","oneHot","int32"),i=o.shape.concat([t]);return o=o.flatten(),D.runKernelFunc(function(a){return a.oneHot(o,t,e,r)},{$indices:o},function(a){return{$indices:function(){return Ce(o.shape,"float32")}}}).reshape(i)}}),ar=k({pad_:function(n,t,e){e===void 0&&(e=0);var r=C(n,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:e};return D.runKernelFunc(function(i){return i.pad(r,t,e)},{x:r},function(i){var a=t.map(function(s){return s[0]});return{x:function(){return i.slice(a,r.shape)}}},"PadV2",o)}}),Cv=k({pad1d_:function(n,t,e){return e===void 0&&(e=0),R(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),ar(n,[t],e)}}),Sv=k({pad2d_:function(n,t,e){return e===void 0&&(e=0),R(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),ar(n,t,e)}}),Iv=k({pad3d_:function(n,t,e){return e===void 0&&(e=0),R(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),ar(n,t,e)}}),Rv=k({pad4d_:function(n,t,e){return e===void 0&&(e=0),R(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),ar(n,t,e)}}),Tv=k({rand_:function(n,t,e){var r=Y(n),o=null;if(e==null||e==="float32")o=new Float32Array(r);else if(e==="int32")o=new Int32Array(r);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(r)}for(var i=0;i<r;i++)o[i]=t();return D.makeTensor(o,n,e)}}),Nv=k({randomNormal_:function(n,t,e,r,o){if(t===void 0&&(t=0),e===void 0&&(e=1),r!=null&&r==="bool")throw new Error("Unsupported data type "+r);for(var i=new Ss(t,e,r,!1,o),a=ie(n,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),Av=k({randomGamma_:function(n,t,e,r,o){if(e===void 0&&(e=1),r===void 0&&(r="float32"),e==null&&(e=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error("Unsupported data type "+r);for(var i=new vv(t,e,r,o),a=ie(n,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),zl=k({randomUniform_:function(n,t,e,r,o){t===void 0&&(t=0),e===void 0&&(e=1),r===void 0&&(r="float32");for(var i=ie(n,r),a=new mv(t,e,null,o),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Bt=k({reshape_:function(n,t){var e=C(n,"x","reshape",null);t=cd(t,e.size),R(e.size===Y(t),function(){return"new shape and old shape must have the same number of elements."});var r={shape:t};return D.runKernelFunc(function(o){return o.reshape(e,t)},{x:e},function(o){return{x:function(){return o.reshape(e.shape)}}},"Reshape",r)}}),Gl=k({spaceToBatchND_:function(n,t,e){var r=C(n,"x","spaceToBatchND");return R(r.rank>=1+t.length,function(){return"input rank "+r.rank+" should be > than [blockShape] "+t.length}),R(e.length===t.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length}),R(r.shape.reduce(function(o,i,a){return a>0&&a<=t.length?o&&(i+e[a-1][0]+e[a-1][1])%t[a-1]==0:o},!0),function(){return"input spatial dimensions "+r.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()}),D.runKernelFunc(function(o){return o.spaceToBatchND(r,t,e)},{$x:r},function(o){return{$x:function(){return o.batchToSpaceND(t,e)}}})}}),Hl=k({squeeze_:function(n,t){var e=C(n,"x","squeeze");return Bt(e,jn(e.shape,t).newShape)}}),Tt=k({stack_:function(n,t){t===void 0&&(t=0);var e=ai(n,"tensors","stack");if(R(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(t);var r=e[0].rank,o=e[0].shape,i=e[0].dtype;R(t<=r,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){we(o,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){R(i===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var a=e.map(function(s){return s.expandDims(t)});return Ge(a,t)}}),Er=k({tile_:function(n,t){var e=C(n,"x","tile",null);R(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."});var r=[e],o={reps:t};return D.runKernelFunc(function(i,a){var s=i.tile(e,t);return a([e]),s},{x:e},function(i,a){var s=a[0];return{x:function(){var u=ge(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(i.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(i.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var f=0;f<t[2];++f)u=u.add(i.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(f=0;f<t[2];++f)for(var h=0;h<t[3];++h)u=u.add(i.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2],h*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,r)}}),kv=k({truncatedNormal_:function(n,t,e,r,o){if(t===void 0&&(t=0),e===void 0&&(e=1),r!=null&&r==="bool")throw new Error("Unsupported data type "+r);for(var i=new Ss(t,e,r,!0,o),a=ie(n,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),He=k({unstack_:function(n,t){t===void 0&&(t=0),t=t||0;var e=C(n,"x","unstack");R(t>=-e.shape.length&&t<e.shape.length,function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),t<0&&(t+=e.shape.length);var r={axis:t};return D.runKernelFunc(function(o){return o.unstack(e,t)},{x:e},function(o){return{x:function(){return Tt(o,t)}}},"Unpack",r)}}),Dv=function(n,t){return K(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f;return $(this,function(h){switch(h.label){case 0:return e=C(n,"x","setdiff1d"),r=C(t,"y","setdiff1d"),R(e.dtype===r.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+r.dtype+")."}),R(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),R(r.rank===1,function(){return"y should be 1D tensor, but got y ("+r.shape+")."}),[4,e.data()];case 1:return o=h.sent(),[4,r.data()];case 2:for(i=h.sent(),a=new Set(i),s=0,l=0;l<o.length;l++)a.has(o[l])||s++;for(u=new eo([s],e.dtype),c=new eo([s],"int32"),l=0,f=0;l<o.length;l++)a.has(o[l])||(u.values[f]=o[l],c.values[f]=l,f++);return[2,[u.toTensor(),c.toTensor()]]}})})};function ui(n,t,e,r){r===void 0&&(r=!0);var o=[];if(r)(o=o.concat(t.slice(0))).push(n[0]/e),o=o.concat(n.slice(1));else{o=o.concat(n[0]);for(var i=t.length,a=0;a<i;++a)o=o.concat([n[a+1]/t[a],t[a]]);o=o.concat(n.slice(i+1))}return o}function ci(n,t,e){e===void 0&&(e=!0);var r=[];if(e){r.push(t);for(var o=t+1;o<n;++o)o<=2*t?(r.push(o),r.push(o-(t+1))):r.push(o)}else{var i=[],a=[];for(o=1;o<n;++o)o>=2*t+1||o%2==1?a.push(o):i.push(o);r.push.apply(r,i),r.push(0),r.push.apply(r,a)}return r}function li(n,t,e,r){r===void 0&&(r=!0);var o=[];r?o.push(n[0]/e):o.push(n[0]*e);for(var i=1;i<n.length;++i)i<=t.length?r?o.push(t[i-1]*n[i]):o.push(n[i]/t[i-1]):o.push(n[i]);return o}function Xl(n,t){for(var e=[0],r=0;r<t;++r)e.push(n[r][0]);return e}function ql(n,t,e){for(var r=n.slice(0,1),o=0;o<e;++o)r.push(n[o+1]-t[o][0]-t[o][1]);return r}function jl(n,t){if(n.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+n.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>n.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+n.rank);if(n.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+n.shape+".");for(var e=t.shape,r=e[e.length-1],o=1,i=0;i<e.length-1;++i)o*=e[i];var a=n.shape,s=e.slice();s.pop();var u=1;for(i=r;i<n.rank;++i)u*=a[i],s.push(a[i]);var c=Jt(n.shape).map(function(l){return l/u}).concat([1]).slice(0,r);return[s,o,u,c]}var Kl=30;function Ca(n){return n<=Kl?n:$a(n,Math.floor(Math.sqrt(n)))}function Ov(n,t,e){var r=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,i="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+n+", sliceDim: "+r+", and batchDim: "+o+".";if(e.rank<o)throw new Error(i+" update.rank < "+o+". ");if(n.length<r+(e.rank-o))throw new Error(i+" Output shape length < "+(r+(e.rank-o)));if(e.rank!==o+n.length-r)throw new Error(i+" update.rank != "+(o+n.length-r));for(var a=0;a<o;++a)if(e.shape[a]!==t.shape[a])throw new Error(i+" updates.shape["+a+"] ("+e.shape[a]+") != indices.shape["+a+"] ("+t.shape[a]+").");for(a=0;a<e.rank-o;++a)if(e.shape[a+o]!==n[a+r])throw new Error(i+" updates.shape["+(a+o)+"] ("+e.shape[a+o]+") != shape["+(a+o)+"] ("+n[a+o]+")")}function Pv(n,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(n.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+n.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(n.size===0)throw new Error("Updates specified for empty output. updates shape: "+n.shape)}Ov(e,t,n)}function fi(n,t,e){for(var r=t.shape.length,o=r>1?t.shape[r-1]:1,i=e.length,a=1,s=o;s<i;++s)a*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:Y(t.shape)/u,sliceSize:a,strides:Jt(e.slice(0,o)).concat([1]),outputSize:Y(e)}}function Mv(n,t,e){R(n.rank===t.length,function(){return"Error in slice"+n.rank+"D: Length of begin "+t+" must match the rank of the array ("+n.rank+")."}),R(n.rank===e.length,function(){return"Error in slice"+n.rank+"D: Length of size "+e+" must match the rank of the array ("+n.rank+")."});for(var r=function(i){R(t[i]+e[i]<=n.shape[i],function(){return"Error in slice"+n.rank+"D: begin["+i+"] + size["+i+"] ("+(t[i]+e[i])+") would overflow input.shape["+i+"] ("+n.shape[i]+")"})},o=0;o<n.rank;++o)r(o)}function lc(n){for(var t=[],e=0;n>0;)1&n&&t.push(e),n/=2,e++;return t}function Is(n,t,e){for(var r=[],o=0;o<n.length;o++)r[o]=Math.ceil((t[o]-n[o])/e[o]);return r}function Fv(n,t,e,r,o){var i=t[o],a=e[o]||1;(n&1<<o||i==null)&&(i=a>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=r[o];return i<0&&(i+=s),i=qa(0,i,s-1)}function Bv(n,t,e,r,o){var i=t[o],a=e[o]||1;(n&1<<o||i==null)&&(i=a>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=r[o];return i<0&&(i+=s),i=a>0?qa(0,i,s):qa(-1,i,s-1)}function $l(n,t,e){for(var r=e.length,o=0;o<e.length;o++)if(e[o]>1){r=o;break}for(o=r+1;o<e.length;o++)if(t[o]>0||e[o]!==n[o])return!1;return!0}function Yl(n,t){for(var e=n.length>0?n[n.length-1]:1,r=0;r<n.length-1;r++)e+=n[r]*t[r];return e}function Lv(n,t){R(Ka(n),function(){return"The f passed in variableGrads(f) must be a function"}),R(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof Dr}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=t!=null;if(!e)for(var r in t=[],D.registeredVariables)t.push(D.registeredVariables[r]);var o=e?t.filter(function(l){return!l.trainable}):null,i=t.length;R((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+i+" variables is trainable."});var a=D.gradients(n,t,null,!0),s=a.value,u=a.grads;R(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),R(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,f){u[f]!=null&&(c[l.name]=u[f])}),o?.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function Oi(n){return D.customGrad(n)}var bn=k({softmax_:function(n,t){t===void 0&&(t=-1);var e=C(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return D.runKernelFunc(function(r,o){var i=r.softmax(e,t);return o([i]),i},{logits:e},function(r,o){var i=o[0],a=r.mul(i);return{logits:function(){return a.sub(a.sum([t],!0).mul(i))}}},"Softmax",{dim:t},[],[!0])}}),Wv=k({logSoftmax_:function(n,t){t===void 0&&(t=-1);var e=C(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return Oi(function(r,o){var i=r.max(t,!0),a=r.sub(i),s=a.toFloat().sub(a.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(e)}}),Jl=function(){function n(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return n.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},n.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},n.prototype.has=function(t){return this.data.has(t)},n.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},n.prototype.numDataIds=function(){return this.dataIdsCount},n}(),Ql=function(){function n(){}return n.prototype.time=function(t){return F("time")},n.prototype.read=function(t){return F("read")},n.prototype.readSync=function(t){return F("readSync")},n.prototype.numDataIds=function(){return F("numDataIds")},n.prototype.disposeData=function(t){return F("disposeData")},n.prototype.write=function(t,e,r){return F("write")},n.prototype.move=function(t,e,r,o){return F("move")},n.prototype.memory=function(){return F("memory")},n.prototype.floatPrecision=function(){return F("floatPrecision")},n.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},n.prototype.batchMatMul=function(t,e,r,o){return F("batchMatMul")},n.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,F("fusedBatchMatMul")},n.prototype.slice=function(t,e,r){return F("slice")},n.prototype.stridedSlice=function(t,e,r,o){return F("stridedSlice")},n.prototype.unstack=function(t,e){return F("unstack")},n.prototype.reverse=function(t,e){return F("reverse")},n.prototype.concat=function(t,e){return F("concat")},n.prototype.neg=function(t){return F("neg")},n.prototype.add=function(t,e){return F("add")},n.prototype.addN=function(t){return F("addN")},n.prototype.subtract=function(t,e){return F("subtract")},n.prototype.multiply=function(t,e){return F("multiply")},n.prototype.realDivide=function(t,e){return F("realDivide")},n.prototype.floorDiv=function(t,e){return F("floorDiv")},n.prototype.sum=function(t,e){return F("sum")},n.prototype.prod=function(t,e){return F("prod")},n.prototype.unsortedSegmentSum=function(t,e,r){return F("unsortedSegmentSum")},n.prototype.argMin=function(t,e){return F("argMin")},n.prototype.argMax=function(t,e){return F("argMax")},n.prototype.equal=function(t,e){return F("equal")},n.prototype.notEqual=function(t,e){return F("notEqual")},n.prototype.less=function(t,e){return F("less")},n.prototype.lessEqual=function(t,e){return F("lessEqual")},n.prototype.greater=function(t,e){return F("greater")},n.prototype.greaterEqual=function(t,e){return F("greaterEqual")},n.prototype.logicalNot=function(t){return F("logicalNot")},n.prototype.logicalAnd=function(t,e){return F("logicalAnd")},n.prototype.logicalOr=function(t,e){return F("logicalOr")},n.prototype.where=function(t){return F("where")},n.prototype.select=function(t,e,r){return F("select")},n.prototype.topk=function(t,e,r){return F("topk")},n.prototype.min=function(t,e){return F("min")},n.prototype.minimum=function(t,e){return F("minimum")},n.prototype.mod=function(t,e){return F("mod")},n.prototype.max=function(t,e){return F("max")},n.prototype.maximum=function(t,e){return F("maximum")},n.prototype.all=function(t,e){return F("all")},n.prototype.any=function(t,e){return F("any")},n.prototype.squaredDifference=function(t,e){return F("squaredDifference")},n.prototype.ceil=function(t){return F("ceil")},n.prototype.floor=function(t){return F("floor")},n.prototype.round=function(t){return F("round")},n.prototype.sign=function(t){return F("sign")},n.prototype.isNaN=function(t){return F("isNaN")},n.prototype.isInf=function(t){return F("isInf")},n.prototype.isFinite=function(t){return F("isFinite")},n.prototype.pow=function(t,e){return F("pow")},n.prototype.exp=function(t){return F("exp")},n.prototype.expm1=function(t){return F("expm1")},n.prototype.softmax=function(t,e){return F("softmax")},n.prototype.log=function(t){return F("log")},n.prototype.log1p=function(t){return F("log1p")},n.prototype.sqrt=function(t){return F("sqrt")},n.prototype.rsqrt=function(t){return F("rsqrt")},n.prototype.square=function(t){return F("square")},n.prototype.reciprocal=function(t){return F("reciprocal")},n.prototype.relu=function(t){return F("relu")},n.prototype.relu6=function(t){return F("relu6")},n.prototype.prelu=function(t,e){return F("prelu")},n.prototype.elu=function(t){return F("elu")},n.prototype.eluDer=function(t,e){return F("eluDer")},n.prototype.selu=function(t){return F("selu")},n.prototype.int=function(t){return F("int")},n.prototype.clip=function(t,e,r){return F("clip")},n.prototype.abs=function(t){return F("abs")},n.prototype.complexAbs=function(t){return F("complexAbs")},n.prototype.sigmoid=function(t){return F("sigmoid")},n.prototype.softplus=function(t){return F("softplus")},n.prototype.sin=function(t){return F("sin")},n.prototype.cos=function(t){return F("cos")},n.prototype.tan=function(t){return F("tan")},n.prototype.asin=function(t){return F("asin")},n.prototype.acos=function(t){return F("acos")},n.prototype.atan=function(t){return F("atan")},n.prototype.atan2=function(t,e){return F("atan2")},n.prototype.sinh=function(t){return F("sinh")},n.prototype.cosh=function(t){return F("cosh")},n.prototype.tanh=function(t){return F("tanh")},n.prototype.asinh=function(t){return F("asinh")},n.prototype.acosh=function(t){return F("acosh")},n.prototype.atanh=function(t){return F("atanh")},n.prototype.erf=function(t){return F("erf")},n.prototype.step=function(t,e){return F("step")},n.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,F("fusedConv2d")},n.prototype.conv2d=function(t,e,r){return F("conv2d")},n.prototype.conv2dDerInput=function(t,e,r){return F("conv2dDerInput")},n.prototype.conv2dDerFilter=function(t,e,r){return F("conv2dDerFilter")},n.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,F("fusedDepthwiseConv2D")},n.prototype.depthwiseConv2D=function(t,e,r){return F("depthwiseConv2D")},n.prototype.depthwiseConv2DDerInput=function(t,e,r){return F("depthwiseConv2DDerInput")},n.prototype.depthwiseConv2DDerFilter=function(t,e,r){return F("depthwiseConv2DDerFilter")},n.prototype.conv3d=function(t,e,r){return F("conv3d")},n.prototype.conv3dDerInput=function(t,e,r){return F("conv3dDerInput")},n.prototype.conv3dDerFilter=function(t,e,r){return F("conv3dDerFilter")},n.prototype.maxPool=function(t,e){return F("maxPool")},n.prototype.maxPoolBackprop=function(t,e,r,o){return F("maxPoolBackprop")},n.prototype.avgPool=function(t,e){return F("avgPool")},n.prototype.avgPoolBackprop=function(t,e,r){return F("avgPoolBackprop")},n.prototype.avgPool3d=function(t,e){return F("avgPool3d")},n.prototype.avgPool3dBackprop=function(t,e,r){return F("avgPool3dBackprop")},n.prototype.maxPool3d=function(t,e){return F("maxPool3d")},n.prototype.maxPool3dBackprop=function(t,e,r,o){return F("maxPool3dBackprop")},n.prototype.reshape=function(t,e){return F("reshape")},n.prototype.cast=function(t,e){return F("cast")},n.prototype.tile=function(t,e){return F("tile")},n.prototype.pad=function(t,e,r){return F("pad")},n.prototype.transpose=function(t,e){return F("transpose")},n.prototype.gather=function(t,e,r){return F("gather")},n.prototype.gatherND=function(t,e){return F("gatherND")},n.prototype.scatterND=function(t,e,r){return F("scatterND")},n.prototype.batchToSpaceND=function(t,e,r){return F("batchToSpaceND")},n.prototype.spaceToBatchND=function(t,e,r){return F("spaceToBatchND")},n.prototype.resizeBilinear=function(t,e,r,o){return F("resizeBilinear")},n.prototype.resizeBilinearBackprop=function(t,e,r){return F("resizeBilinearBackprop")},n.prototype.resizeNearestNeighbor=function(t,e,r,o){return F("resizeNearestNeighbor")},n.prototype.resizeNearestNeighborBackprop=function(t,e,r){return F("resizeNearestNeighborBackprop")},n.prototype.batchNormalization=function(t,e,r,o,i,a){return F("batchNormalization")},n.prototype.localResponseNormalization4D=function(t,e,r,o,i){return F("localResponseNormalization4D")},n.prototype.LRNGrad=function(t,e,r,o,i,a,s){return F("LRNGrad")},n.prototype.multinomial=function(t,e,r,o){return F("multinomial")},n.prototype.oneHot=function(t,e,r,o){return F("oneHot")},n.prototype.cumsum=function(t,e,r,o){return F("cumsum")},n.prototype.nonMaxSuppression=function(t,e,r,o,i){return F("nonMaxSuppression")},n.prototype.fft=function(t){return F("fft")},n.prototype.ifft=function(t){return F("ifft")},n.prototype.complex=function(t,e){return F("complex")},n.prototype.real=function(t){return F("real")},n.prototype.imag=function(t){return F("imag")},n.prototype.cropAndResize=function(t,e,r,o,i,a){return F("cropAndResize")},n.prototype.depthToSpace=function(t,e,r){return F("depthToSpace")},n.prototype.split=function(t,e,r){return F("split")},n.prototype.sparseToDense=function(t,e,r,o){return F("sparseToDense")},n.prototype.diag=function(t){return F("diag")},n.prototype.fill=function(t,e,r){return F("fill")},n.prototype.onesLike=function(t){return F("onesLike")},n.prototype.zerosLike=function(t){return F("zerosLike")},n.prototype.linspace=function(t,e,r){return F("linspace")},n.prototype.dispose=function(){return F("dispose")},n}();function F(n){throw new Error("'"+n+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function Nn(n,t){for(var e=n.length,r=[],o=0;o<e;o++){var i=e-1-o,a=n[i]||1;(t[t.length-1-o]||1)>1&&a===1&&r.unshift(i)}return r}function Xe(n,t){for(var e=[],r=0;r<t.length;r++){var o=n[n.length-r-1],i=t.length-r-1,a=t[i];(o==null||o===1&&a>1)&&e.unshift(i)}return e}function fe(n,t){for(var e=[],r=Math.max(n.length,t.length),o=0;o<r;o++){var i=n[n.length-o-1];i==null&&(i=1);var a=t[t.length-o-1];if(a==null&&(a=1),i===1)e.unshift(a);else if(a===1)e.unshift(i);else{if(i!==a)throw Error("Operands could not be broadcast together with shapes "+n+" and "+t+".");e.unshift(i)}}return e}function no(n,t,e,r,o,i,a){a===void 0&&(a="channelsLast");var s,u=di(t),c=u[0],l=u[1];if(a==="channelsLast")s=[c,l,n[3],n[3]];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);s=[c,l,n[1],n[1]]}return sr(n,s,e,r,o,i,!1,a)}function hi(n,t,e,r,o,i,a){a===void 0&&(a="NDHWC");var s,u,c=ns(t),l=c[0],f=c[1],h=c[2];if(a==="NDHWC")u="channelsLast",s=[l,f,h,n[4],n[4]];else{if(a!=="NCDHW")throw new Error("Unknown dataFormat "+a);u="channelsFirst",s=[l,f,h,n[1],n[1]]}return pi(n,s,e,r,o,!1,u,i)}function sr(n,t,e,r,o,i,a,s){a===void 0&&(a=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3];if(s==="channelsLast")c=n[0],l=n[1],f=n[2],h=n[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=n[0],h=n[1],l=n[2],f=n[3]}var p,d=t[0],v=t[1],m=t[3],g=di(e),y=g[0],x=g[1],b=di(r),w=b[0],_=b[1],T=Cr(d,w),S=Cr(v,_),E=function(P,M,V,U,W,z,G,X){var ee,te,se;if(typeof P=="number"){ee={top:P,bottom:P,left:P,right:P,type:P===0?"VALID":"NUMBER"};var ue=function(pe,_e,ye,Oe,Re){Oe==null&&(Oe=Zl(pe,_e,ye));var Te=pe[0],Ut=pe[1],zt=Jr((Te-_e+2*Oe)/ye+1,Re);R(Le(zt),function(){return"The output # of rows ("+zt+") must be an integer. Change the stride and/or zero pad parameters"});var xt=Jr((Ut-_e+2*Oe)/ye+1,Re);return R(Le(xt),function(){return"The output # of columns ("+xt+") must be an integer. Change the stride and/or zero pad parameters"}),[zt,xt]}([M,V],z,U,P,X);te=ue[0],se=ue[1]}else if(P==="same"){te=Math.ceil(M/U),se=Math.ceil(V/W);var le=Math.max(0,(te-1)*U+z-M),de=Math.max(0,(se-1)*W+G-V),he=Math.floor(le/2),ve=le-he,Fe=Math.floor(de/2);ee={top:he,bottom:ve,left:Fe,right:de-Fe,type:"SAME"}}else{if(P!=="valid")throw Error("Unknown padding parameter: "+P);ee={top:0,bottom:0,left:0,right:0,type:"VALID"},te=Math.ceil((M-z+1)/U),se=Math.ceil((V-G+1)/W)}return{padInfo:ee,outHeight:te,outWidth:se}}(o,l,f,y,x,T,S,i),I=E.padInfo,A=E.outHeight,N=E.outWidth,O=a?m*h:m;return s==="channelsFirst"?p=[c,O,A,N]:s==="channelsLast"&&(p=[c,A,N,O]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:f,inChannels:h,outHeight:A,outWidth:N,outChannels:O,padInfo:I,strideHeight:y,strideWidth:x,filterHeight:d,filterWidth:v,effectiveFilterHeight:T,effectiveFilterWidth:S,dilationHeight:w,dilationWidth:_,inShape:n,outShape:p,filterShape:t}}function pi(n,t,e,r,o,i,a,s){i===void 0&&(i=!1),a===void 0&&(a="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3],p=u[4];if(a==="channelsLast")c=n[0],l=n[1],f=n[2],h=n[3],p=n[4];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);c=n[0],p=n[1],l=n[2],f=n[3],h=n[4]}var d,v=t[0],m=t[1],g=t[2],y=t[4],x=ns(e),b=x[0],w=x[1],_=x[2],T=ns(r),S=T[0],E=T[1],I=T[2],A=Cr(v,S),N=Cr(m,E),O=Cr(g,I),P=function(G,X,ee,te,se,ue,le,de,he,ve,Fe){var pe,_e,ye,Oe;if(typeof G=="number"){pe={top:G,bottom:G,left:G,right:G,front:G,back:G,type:G===0?"VALID":"NUMBER"};var Re=function(fr,sn,la,hr,Gt,fa){Gt==null&&(Gt=Zl(fr,sn,hr));var zp=fr[0],Gp=fr[1],Hp=fr[2],ha=Jr((zp-sn+2*Gt)/hr+1,fa);R(Le(ha),function(){return"The output # of depths ("+ha+") must be an integer. Change the stride and/or zero pad parameters"});var pa=Jr((Gp-sn+2*Gt)/hr+1,fa);R(Le(pa),function(){return"The output # of rows ("+pa+") must be an integer. Change the stride and/or zero pad parameters"});var da=Jr((Hp-sn+2*Gt)/hr+1,fa);return R(Le(da),function(){return"The output # of columns ("+da+") must be an integer. Change the stride and/or zero pad parameters"}),[ha,pa,da,la]}([X,ee,te,1],de,1,se,G,Fe);_e=Re[0],ye=Re[1],Oe=Re[2]}else if(G==="same"){_e=Math.ceil(X/se),ye=Math.ceil(ee/ue),Oe=Math.ceil(te/le);var Te=(_e-1)*se+de-X,Ut=(ye-1)*ue+he-ee,zt=(Oe-1)*le+ve-te,xt=Math.floor(Te/2),lr=Te-xt,on=Math.floor(Ut/2),Cn=Ut-on,an=Math.floor(zt/2);pe={top:on,bottom:Cn,left:an,right:zt-an,front:xt,back:lr,type:"SAME"}}else{if(G!=="valid")throw Error("Unknown padding parameter: "+G);pe={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},_e=Math.ceil((X-de+1)/se),ye=Math.ceil((ee-he+1)/ue),Oe=Math.ceil((te-ve+1)/le)}return{padInfo:pe,outDepth:_e,outHeight:ye,outWidth:Oe}}(o,l,f,h,b,w,_,A,N,O,s),M=P.padInfo,V=P.outDepth,U=P.outHeight,W=P.outWidth,z=i?y*p:y;return a==="channelsFirst"?d=[c,z,V,U,W]:a==="channelsLast"&&(d=[c,V,U,W,z]),{batchSize:c,dataFormat:a,inDepth:l,inHeight:f,inWidth:h,inChannels:p,outDepth:V,outHeight:U,outWidth:W,outChannels:z,padInfo:M,strideDepth:b,strideHeight:w,strideWidth:_,filterDepth:v,filterHeight:m,filterWidth:g,effectiveFilterDepth:A,effectiveFilterHeight:N,effectiveFilterWidth:O,dilationDepth:S,dilationHeight:E,dilationWidth:I,inShape:n,outShape:d,filterShape:t}}function Zl(n,t,e,r){r===void 0&&(r=1);var o=Cr(t,r);return Math.floor((n[0]*(e-1)-e+o)/2)}function di(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function ns(n){return typeof n=="number"?[n,n,n]:n}function Cr(n,t){return t<=1?n:n+(n-1)*(t-1)}function Jr(n,t){if(!t)return n;switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error("Unknown roundingMode "+t)}}function Pr(n){var t=di(n),e=t[0],r=t[1],o=t[2];return e===1&&r===1&&o===1}function bt(n,t){return Pr(n)||Pr(t)}function Rs(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+n)}function ef(n,t,e){if(t==="complex64"){if(n.dtype==="complex64")return n.clone();var r=Ce(n.shape),o=n.toFloat(),i=e.complex(o,r);return r.dispose(),o.dispose(),i}if(!hd(n.dtype,t))return D.makeTensorFromDataId(n.dataId,n.shape,t);if(n.dtype==="complex64"){var a=e.real(n);return i=a.cast(t),a.dispose(),i}if(t==="int32")return e.int(n);if(t==="bool"){var s=q(0,n.dtype);return i=e.notEqual(n,s),s.dispose(),i}throw new Error("Error in Cast: failed to cast "+n.dtype+" to "+t)}function rs(n,t){return D.makeTensorFromDataId(n.dataId,t,n.dtype)}function tf(n,t,e){var r=(t-n)/(e-1),o=po(e,"float32");o[0]=n;for(var i=1;i<o.length;i++)o[i]=o[i-1]+r;return Ve(o,"float32")}function os(n,t){if(n.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+n.length+", imag: "+t.length+".");for(var e=new Float32Array(2*n.length),r=0;r<e.length;r+=2)e[r]=n[r/2],e[r+1]=t[r/2];return e}function fc(n,t){return{real:n[2*t],imag:n[2*t+1]}}function Vv(n,t,e,r){n[2*r]=t,n[2*r+1]=e}function Uv(n,t,e){var r=(e?2:-2)*Math.PI*(n/t);return{real:Math.cos(r),imag:Math.sin(r)}}function zv(n,t,e){var r=function(i,a,s){return function(u,c,l){for(var f=0,h=u.length,p=0,d=!1;f<h;){var v=l(c,u[p=f+(h-f>>>1)]);v>0?f=p+1:(h=p,d=!v)}return d?f:-f-1}(i,a,s||Gv)}(n,t,e),o=r<0?-(r+1):r;n.splice(o,0,t)}function Gv(n,t){return n>t?1:n<t?-1:0}function Ts(n,t,e,r,o){return nf(n,t,e,r,o,0).selectedIndices}function Ns(n,t,e,r,o,i){var a=nf(n,t,e,r,o,i);return a.numValidOutputs.dispose(),{selectedIndices:a.selectedIndices,selectedScores:a.selectedScores}}function nf(n,t,e,r,o,i,a,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(b,w){return{score:b,boxIndex:w,suppressBeginIndex:0}}).filter(function(b){return b.score>o}).sort(hc),c=i>0?-.5/i:0,l=[],f=[];l.length<e&&u.length>0;){var h=u.pop(),p=h.score,d=h.boxIndex,v=h.suppressBeginIndex;if(p<o)break;for(var m=!1,g=l.length-1;g>=v;--g){var y=Hv(n,d,l[g]);if(y>=r){m=!0;break}if(h.score=h.score*Xv(r,c,y),h.score<=o)break}h.suppressBeginIndex=l.length,m||(h.score===p?(l.push(d),f.push(h.score)):h.score>o&&zv(u,h,hc))}var x=l.length;return s&&(l.fill(0,x),f.fill(0,x)),{selectedIndices:Ve(l,"int32"),selectedScores:Ve(f,"float32"),numValidOutputs:q(x,"int32")}}function Hv(n,t,e){var r=n.subarray(4*t,4*t+4),o=n.subarray(4*e,4*e+4),i=Math.min(r[0],r[2]),a=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),h=Math.max(o[1],o[3]),p=(s-i)*(u-a),d=(f-c)*(h-l);if(p<=0||d<=0)return 0;var v=Math.max(i,c),m=Math.max(a,l),g=Math.min(s,f),y=Math.min(u,h),x=Math.max(g-v,0)*Math.max(y-m,0);return x/(p+d-x)}function Xv(n,t,e){var r=Math.exp(t*e*e);return e<=n?r:0}function hc(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}function rf(n,t,e){var r=new Array(n.rank).fill(0),o=n.shape.slice();return t.map(function(i){o[e]=i;var a=n.slice(r,o);return r[e]+=i,a})}function of(n,t){for(var e=new Array(n.rank),r=0;r<e.length;r++)e[r]=n.shape[r]*t[r];var o=ie(e,n.dtype);for(r=0;r<o.values.length;++r){for(var i=o.indexToLoc(r),a=new Array(n.rank),s=0;s<a.length;s++)a[s]=i[s]%n.shape[s];var u=n.locToIndex(a);o.values[r]=n.values[u]}return o.toTensor()}function af(n,t,e,r,o){for(var i=t[t.length-1],a=[n.length/i,i],s=a[0],u=a[1],c=Zr(e,s*r),l=Zr("int32",s*r),f=0;f<s;f++){for(var h=f*u,p=n.subarray(h,h+u),d=[],v=0;v<p.length;v++)d.push({value:p[v],index:v});d.sort(function(b,w){return w.value-b.value});var m=f*r,g=c.subarray(m,m+r),y=l.subarray(m,m+r);for(v=0;v<r;v++)g[v]=d[v].value,y[v]=d[v].index}var x=t.slice();return x[x.length-1]=r,[tt(c,x,e),tt(l,x,"int32")]}function As(n,t){for(var e=[],r=0;r<t.length;r++)t[r]&&e.push(r);var o=ie(n,"int32"),i=ie([e.length,n.length],"int32");for(r=0;r<e.length;r++){var a=o.indexToLoc(e[r]),s=r*n.length;i.values.set(a,s)}return i.toTensor()}var qv=function(n,t){this.outputShape=[],this.outputShape=n,this.variableNames=t.map(function(o,i){return"T"+i});var e=[];this.variableNames.forEach(function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")});var r=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+r+`;
        setOutput(result);
      }
    `},jv=function(n,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.variableNames=t.map(function(o,i){return"T"+i});var e=[];this.variableNames.forEach(function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var r=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+r+`;
        setOutput(result);
      }
    `},Kv=function(n,t,e){this.variableNames=["A"];var r=n.windowSize,o=n.batchSize,i=n.inSize,a=Math.ceil(i/r);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,a];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+r+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+r+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function sf(n,t){return["x","y","z","w","u","v"].slice(0,t).map(function(e){return n+"."+e})}function vt(n,t){return t===1?[n]:sf(n,t)}function at(){var n,t,e,r,o,i,a,s,u,c;return L().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",t="in",e="out",r="in",o="texture",i="outputColor",a="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(n="",t="attribute",e="varying",r="varying",o="texture2D",i="gl_FragColor",a="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:n,attribute:t,varyingVs:e,varyingFs:r,texture2D:o,output:i,defineOutput:a,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function Kn(n,t,e){e===void 0&&(e="index");var r=Jt(t);return r.map(function(o,i){return"int "+n[i]+" = "+e+" / "+o+"; "+(i===r.length-1?"int "+n[i+1]+" = "+e+" - "+n[i]+" * "+o:"index -= "+n[i]+" * "+o)+";"}).join("")}function ks(n){var t=Jt(n).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var uf=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function $v(n,t,e,r){var o=[];n.forEach(function(p){var d=Y(p.shapeInfo.logicalShape);p.shapeInfo.isUniform?o.push("uniform float "+p.name+(d>1?"["+d+"]":"")+";"):(o.push("uniform sampler2D "+p.name+";"),o.push("uniform int offset"+p.name+";"))});var i,a,s=o.join(`
`),u=n.map(function(p){return function(d,v,m){m===void 0&&(m=!1);var g="";g+=m?cf(d):yr(d);var y=d.shapeInfo.logicalShape,x=v.logicalShape;return y.length<=x.length&&(g+=m?function(b,w){var _,T=b.name,S=T.charAt(0).toUpperCase()+T.slice(1),E="get"+S+"AtOutCoords",I=b.shapeInfo.logicalShape.length,A=w.logicalShape.length,N=Nn(b.shapeInfo.logicalShape,w.logicalShape),O=Ee(A),P=A-I,M=["x","y","z","w","u","v"];_=I===0?"":A<2&&N.length>=1?"coords = 0;":N.map(function(ee){return"coords."+M[ee+P]+" = 0;"}).join(`
`);var V="";V=A<2&&I>0?"coords":b.shapeInfo.logicalShape.map(function(ee,te){return"coords."+M[te+P]}).join(", ");var U="return outputValue;",W=Y(b.shapeInfo.logicalShape)===1,z=Y(w.logicalShape)===1;if(I!==1||W||z){if(W&&!z)U=A===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(N.length){var G=I-2,X=I-1;N.indexOf(G)>-1&&N.indexOf(X)>-1?U="return vec4(outputValue.x);":N.indexOf(G)>-1?U="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":N.indexOf(X)>-1&&(U="return vec4(outputValue.xx, outputValue.zz);")}}else U=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+E+`() {
      `+O+` coords = getOutputCoords();
      `+_+`
      vec4 outputValue = get`+S+"("+V+`);
      `+U+`
    }
  `}(d,v):function(b,w){var _=b.name,T=_.charAt(0).toUpperCase()+_.slice(1),S="get"+T+"AtOutCoords",E=w.texShape,I=b.shapeInfo.texShape,A=b.shapeInfo.logicalShape.length,N=w.logicalShape.length;if(!b.shapeInfo.isUniform&&A===N&&b.shapeInfo.flatOffset==null&&Ye(I,E))return`
      float `+S+`() {
        return sampleTexture(`+_+`, resultUV);
      }
    `;var O,P=Ee(N),M=Nn(b.shapeInfo.logicalShape,w.logicalShape),V=N-A,U=["x","y","z","w","u","v"];O=A===0?"":N<2&&M.length>=1?"coords = 0;":M.map(function(z){return"coords."+U[z+V]+" = 0;"}).join(`
`);var W="";return W=N<2&&A>0?"coords":b.shapeInfo.logicalShape.map(function(z,G){return"coords."+U[G+V]}).join(", "),`
    float `+S+`() {
      `+P+` coords = getOutputCoords();
      `+O+`
      return get`+T+"("+W+`);
    }
  `}(d,v)),g}(p,t,r)}).join(`
`),c=t.texShape,l=at(),f=function(p){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+p.texture2D+`(textureSampler, uv).r;
    }
  `}(l),h=function(p){return p.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+p.varyingFs+` vec2 resultUV;
    `+p.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+p.defineSpecialNaN+`
    `+p.defineSpecialInf+`
    `+p.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+Yv+`
    `+Jv+`
    `+Qv+`
  `}(l);return t.isPacked?(i=function(p,d){switch(p.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(b,w){var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return _[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+_[1]+`.0);
      }
    `:_[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+_[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      return 2 * (resTexRC.x * `+_[1]+` + resTexRC.y);
    }
  `}(0,d);case 2:return function(b,w){var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(Ye(b,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+_[0]+", "+_[1]+`));
      }
    `;var T=Math.ceil(b[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));

      int index = resTexRC.x * `+_[1]+` + resTexRC.y;
      int r = 2 * (index / `+T+`);
      int c = imod(index, `+T+`) * 2;

      return ivec2(r, c);
    }
  `}(p,d);case 3:return v=p,m=d,g=[Math.ceil(m[0]/2),Math.ceil(m[1]/2)],y=Math.ceil(v[2]/2),x=y*Math.ceil(v[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+x+`;
      index -= b * `+x+`;

      int r = 2 * (index / `+y+`);
      int c = imod(index, `+y+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(b,w){for(var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],T=Math.ceil(b[b.length-1]/2),S=T*Math.ceil(b[b.length-2]/2),E=S,I="",A="b, r, c",N=2;N<b.length-1;N++)E*=b[b.length-N-1],I=`
      int b`+N+" = index / "+E+`;
      index -= b`+N+" * "+E+`;
    `+I,A="b"+N+", "+A;return`
    ivec`+b.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      int index = resTexRC.x * `+_[1]+` + resTexRC.y;

      `+I+`

      int b = index / `+S+`;
      index -= b * `+S+`;

      int r = 2 * (index / `+T+`);
      int c = imod(index, `+T+`) * 2;

      return ivec`+b.length+"("+A+`);
    }
  `}(p,d)}var v,m,g,y,x}(t.logicalShape,c),a=function(p){return`
    void setOutput(vec4 val) {
      `+p.output+` = val;
    }
  `}(l)):(i=function(p,d){switch(p.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,y){return y[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+y[1]+`.0);
      }
    `:y[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+y[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      return resTexRC.x * `+y[1]+` + resTexRC.y;
    }
  `}(0,d);case 2:return function(g,y){return Ye(g,y)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+y[0]+", "+y[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(p,d);case 3:return v=d,m=Kn(["r","c","d"],p),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+v[0]+", "+v[1]+`));
      int index = resTexRC.x * `+v[1]+` + resTexRC.y;
      `+m+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,y){var x=Kn(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      `+x+`
      return ivec4(r, c, d, d2);
    }
  `}(p,d);case 5:return function(g,y){var x=Kn(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+y[0]+`,
                             `+y[1]+`));

      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+x+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(p,d);case 6:return function(g,y){var x=Kn(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+x+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(p,d);default:throw new Error(p.length+"-D output sampling is not yet supported")}var v,m}(t.logicalShape,c),a=function(p){return`
    void setOutput(float val) {
      `+p.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),r&&(h+=Zv),[h,f,a,s,i,u,e].join(`
`)}function yr(n){var t=n.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+r+";}";var i=e.shapeInfo.texShape,a=i[0],s=i[1];if(a===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],f=Gn(r);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+f+`);
      return sampleTexture(`+r+`, uv);
    }
  `}(n);case 1:return function(e){var r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+pr(e)+`
      }
    `;var i=e.shapeInfo.texShape,a=i[0],s=i[1];if(s===1&&a===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=Gn(r);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+a+`.0);
        return sampleTexture(`+r+`, uv);
      }
    `:a===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+r+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+a+", "+s+", index + "+u+`);
      return sampleTexture(`+r+`, uv);
    }
  `}(n);case 2:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=e.shapeInfo.texShape;if(a!=null&&Ye(r,a)){var s=a[0],u=a[1];return`
    float `+i+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=jn(r),l=c.newShape,f=c.keptDims,h=l;if(h.length<r.length){var p=br(e,h);return`
      `+yr(p)+`
      float `+i+`(int row, int col) {
        return `+i+"("+xr(["row","col"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+r[1]+`, 1)));
        `+pr(e)+`
      }
    `;var d=a[0],v=a[1],m=Gn(o);return v===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:d===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+v+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+i+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+r[1]+" + col + "+m+`;
    vec2 uv = uvFromFlat(`+d+", "+v+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(n);case 3:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[1]*r[2],s=r[2],u=jn(r),c=u.newShape,l=u.keptDims,f=c;if(f.length<r.length){var h=br(e,f);return`
        `+yr(h)+`
        float `+i+`(int row, int col, int depth) {
          return `+i+"("+xr(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+a+", "+s+`, 1)));
        `+pr(e)+`
      }
    `;var p=e.shapeInfo.texShape,d=p[0],v=p[1],m=e.shapeInfo.flatOffset;if(v===a&&m==null)return`
        float `+i+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+v+".0, "+d+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(v===s&&m==null)return`
    float `+i+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+r[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+v+".0, "+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=Gn(o);return`
      float `+i+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+a+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+d+", "+v+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(n);case 4:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[3],s=r[2]*a,u=r[1]*s,c=jn(r),l=c.newShape,f=c.keptDims;if(l.length<r.length){var h=br(e,l);return`
      `+yr(h)+`
      float `+i+`(int row, int col, int depth, int depth2) {
        return `+i+"("+xr(["row","col","depth","depth2"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+a+`, 1)));
        `+pr(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,v=d[0],m=d[1];if(m===u&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(m===a&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+r[1]*r[2]+", "+r[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=Gn(o);return`
    float `+i+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+a+` + depth2;
      vec2 uv = uvFromFlat(`+v+", "+m+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(n);case 5:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[4],s=r[3]*a,u=r[2]*s,c=r[1]*u,l=jn(r),f=l.newShape,h=l.keptDims;if(f.length<r.length){var p=br(e,f);return`
      `+yr(p)+`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        return `+i+"("+xr(["row","col","depth","depth2","depth3"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+a+`)) +
          depth3;
        `+pr(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,m=v[0],g=v[1];if(g===c&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===a&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]+`,
               `+r[2]*r[3]+", "+r[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var y=Gn(o);return`
    float `+i+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+a+" + depth3 + "+y+`;
      vec2 uv = uvFromFlat(`+m+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(n);case 6:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=jn(r),s=a.newShape,u=a.keptDims;if(s.length<r.length){var c=br(e,s);return`
      `+yr(c)+`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+i+"("+xr(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=r[5],f=r[4]*l,h=r[3]*f,p=r[2]*h,d=r[1]*p;if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+d+", "+p+", "+h+", "+f+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+pr(e)+`
      }
    `;var v=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,g=m[0],y=m[1];if(y===d&&v==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+p+", "+h+", "+f+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+y+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(y===l&&v==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]*r[4]+`,
               `+r[2]*r[3]*r[4]+`,
               `+r[3]*r[4]+`,
               `+r[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+y+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=Gn(o);return`
    float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+d+" + col * "+p+" + depth * "+h+` +
          depth2 * `+f+" + depth3 * "+l+" + depth4 + "+x+`;
      vec2 uv = uvFromFlat(`+g+", "+y+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(n);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function cf(n){var t,e,r;switch(n.shapeInfo.logicalShape.length){case 0:return t=n.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),r=at(),`
    vec4 `+e+`() {
      return `+r.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var i=o.name,a="get"+i.charAt(0).toUpperCase()+i.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=at();return`
    vec4 `+a+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+i+`, uv);
    }
  `}(n);case 2:return function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],f=at();if(u!=null&&Ye(i,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+f.texture2D+"("+a+`, uv);
      }
    `;var h=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],p=Math.ceil(i[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+p+", "+h[0]+", "+h[1]+`, row, col);
      return `+f.texture2D+"("+a+`, uv);
    }
  `}(n);case 3:return function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(i[0]===1){var l=i.slice(1),f=br(o,l);return`
        `+cf(f)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+xr(["b","row","col"],[1,2])+`);
        }
      `}var h=c[0],p=c[1],d=Math.ceil(i[2]/2),v=d*Math.ceil(i[1]/2),m=at();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+h+", "+p+", "+v+", "+d+`, b, row, col);
      return `+m.texture2D+"("+a+`, uv);
    }
  `}(n);default:return function(o){for(var i=o.shapeInfo.logicalShape,a=i.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],f=l[0],h=l[1],p=Math.ceil(i[a-1]/2),d=p*Math.ceil(i[a-2]/2),v="int b, int row, int col",m="b * "+d+" + (row / 2) * "+p+" + (col / 2)",g=2;g<a-1;g++)v="int b"+g+", "+v,d*=i[a-g-1],m="b"+g+" * "+d+" + "+m;var y=at();return`
    vec4 `+u+"("+v+`) {
      int index = `+m+`;
      int texR = index / `+h+`;
      int texC = index - texR * `+h+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+h+", "+f+`);
      return `+y.texture2D+"("+s+`, uv);
    }
  `}(n)}}var Yv=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Jv=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Qv=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Zv=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Gn(n){return"offset"+n}function pr(n){var t=n.name,e=Y(n.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function Ee(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error("GPU for rank "+n+" is not yet supported")}function br(n,t){var e=JSON.parse(JSON.stringify(n));return e.shapeInfo.logicalShape=t,e}function xr(n,t){return t.map(function(e){return n[e]}).join(", ")}var em=function(n,t,e,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,R(n.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var o=n[n.length-1],i=Math.ceil(o/t);this.outputShape=n.slice(0,-1),i>1&&this.outputShape.push(i),r||this.variableNames.push("bestIndicesA");var a,s,u=this.outputShape,c=u.length,l=Ee(c),f=vt("coords",c);if(i===1){var h=Ee(s=c+1);a=`
        `+h+" sourceLocR = "+h+"("+f.join()+`, 0);
        ++`+f[c-1]+`;
        `+h+" sourceLocG = "+h+"("+f.join()+`, 0);
        ++`+f[c-2]+`;
        `+h+" sourceLocA = "+h+"("+f.join()+`, 0);
        --`+f[c-1]+`;
        `+h+" sourceLocB = "+h+"("+f.join()+`, 0);
        --`+f[c-2]+";"}else s=c,a=`
        `+l+` sourceLocR = coords;
        ++`+f[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+f[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+f[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+f[c-2]+";";var p=["x","y","z","w","u","v"].slice(0,s),d="."+p[s-1],v=p.map(function(S){return"int "+S}),m=vt("sourceLocR",s-1).concat("inIdx.r"),g=vt("sourceLocG",s-1).concat("inIdx.g"),y=vt("sourceLocB",s-1).concat("inIdx.b"),x=vt("sourceLocA",s-1).concat("inIdx.a"),b=e==="max"?"greaterThan":"lessThan",w=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+m.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+y.join()+`),
                             getBestIndicesAChannel(`+x.join()+")));",_=`vec4(
            getAChannel(`+m.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+y.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+x.join()+") : 0.)",T=r?"":`
      float getBestIndicesAChannel(`+v.join()+`) {
        return getChannel(getBestIndicesA(`+p.join()+`),
                                          vec2(`+p.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+v.join()+`) {
        return getChannel(getA(`+p.join()+`),
                               vec2(`+p.slice(-2).join()+`));
      }
      `+T+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+f[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+f[c-2]+" < "+(u[c-2]-1)+`;
        `+a+`
        ivec4 srcIdx = ivec4(sourceLocR`+d+", sourceLocG"+d+`,
          sourceLocB`+d+", sourceLocA"+d+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+_+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+_+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+b+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},tm=function(n){this.variableNames=["dy"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,o=n.strideWidth,i=n.dilationHeight,a=n.dilationWidth,s=n.effectiveFilterHeight,u=n.effectiveFilterWidth,c=s-1-n.padInfo.top,l=u-1-n.padInfo.left,f=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+f+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+i+`) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+a+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},nm=function(n){this.variableNames=["dy"],this.outputShape=n.inShape;var t=n.filterDepth,e=n.filterHeight,r=n.filterWidth,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.effectiveFilterDepth,f=n.effectiveFilterHeight,h=n.effectiveFilterWidth,p=l-1-n.padInfo.front,d=f-1-n.padInfo.top,v=h-1-n.padInfo.left,m=1/(t*e*r);this.userCode=`
      const ivec3 pads = ivec3(`+p+", "+d+", "+v+`);
      const float avgMultiplier = float(`+m+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+n.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+f+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+h+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},rm=function(n,t,e,r,o,i){this.outputShape=[],this.variableNames=["x","mean","variance"],fe(n,t),fe(n,e);var a="0.0";r!=null&&(fe(n,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="1.0";o!=null&&(fe(n,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=n,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+a+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+i+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},om=function(n,t,e,r,o,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],fe(n,t),fe(n,e);var a="vec4(0.0)";r!=null&&(fe(n,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(fe(n,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=n,this.userCode=`
      void main() {
        vec4 offset = `+a+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+i+`));

        setOutput((x - mean) * inv + offset);
      }
    `},im="return areal * breal - aimag * bimag;",am="return areal * bimag + aimag * breal;",pc=function(n,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=fe(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+n+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Sa="return a + b;",Ia="return a - b;",dc="return a * b;",lf="return (a < 0.) ? b * a : a;",Pe=function(n,t,e){this.variableNames=["A","B"],this.outputShape=fe(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+n+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},ff=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,ln=function(n,t,e,r){r===void 0&&(r=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=fe(t,e);var o=this.outputShape.length,i="";if(r)if(o===0||Y(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          `+Ee(o)+` coords = getOutputCoords();
        `,o===1)i+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var a=vt("coords",o);i+=`
            bool nextRowOutOfBounds =
              (`+a[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+a[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+n+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+i+`

        setOutput(result);
      }
    `},sm=function(){function n(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return n.prototype.getCustomSetupFunc=function(t,e){var r=this;return function(o,i){r.minLoc==null&&(r.minLoc=o.getUniformLocationNoThrow(i,"minVal"),r.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(r.minLoc,t),o.gl.uniform1f(r.maxLoc,e)}},n}(),um=function(){function n(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return n.prototype.getCustomSetupFunc=function(t,e){var r=this;return function(o,i){r.minLoc==null&&(r.minLoc=o.getUniformLocationNoThrow(i,"minVal"),r.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(r.minLoc,t),o.gl.uniform1f(r.maxLoc,e)}},n}(),cm=function(n){this.variableNames=["real","imag"],this.outputShape=n,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},lm=function(n){this.outputShape=[],this.outputShape=Or(n,1),this.variableNames=n.map(function(s,u){return"T"+u});var t=new Array(n.length-1);t[0]=n[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+n[e][1];var r=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var o=t[e-1];r.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var i=t.length,a=t[t.length-1];r.push("else setOutput(getT"+i+"(yR, yC-"+a+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+r.join(`
        `)+`
      }
    `},fm=function(n,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Or(n,t);var e=this.outputShape,r=e.length,o=Ee(r),i=vt("coords",r),a=["x","y","z","w","u","v"].slice(0,r);this.variableNames=n.map(function(m,g){return"T"+g});var s=new Array(n.length-1);s[0]=n[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+n[u][t];var c=a[t],l=a.slice(-2),f=a.join(),h="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+f+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var p=s[u-1];h+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+Oo(a,c,p)+`),
            vec2(`+Oo(l,c,p)+`));
        }`}var d=s.length,v=s[s.length-1];h+=`
        return getChannel(
          getT`+d+"("+Oo(a,c,v)+`),
          vec2(`+Oo(l,c,v)+"));",this.userCode=`
      float getValue(`+a.map(function(m){return"int "+m})+`) {
        `+h+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+i+`), 0., 0., 0.);

        `+i[r-1]+" = "+i[r-1]+` + 1;
        if (`+i[r-1]+" < "+e[r-1]+`) {
          result.g = getValue(`+i+`);
        }

        `+i[r-2]+" = "+i[r-2]+` + 1;
        if (`+i[r-2]+" < "+e[r-2]+`) {
          result.a = getValue(`+i+`);
        }

        `+i[r-1]+" = "+i[r-1]+` - 1;
        if (`+i[r-2]+" < "+e[r-2]+` &&
            `+i[r-1]+" < "+e[r-1]+`) {
          result.b = getValue(`+i+`);
        }
        setOutput(result);
      }
    `};function Oo(n,t,e){var r=n.indexOf(t);return n.map(function(o,i){return i===r?o+" - "+e:o}).join()}var hm=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideHeight,e=n.strideWidth,r=n.padInfo.top,o=n.padInfo.left,i=n.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yR = 0; yR < `+n.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+r+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+n.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              if (`+i+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},pm=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,o=n.strideWidth,i=n.dataFormat==="channelsLast",a=t-1-n.padInfo.top,s=e-1-n.padInfo.left,u=i?1:2,c=i?2:3,l=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+n.outChannels+`; d2++) {

              if (`+i+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},dm=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideDepth,e=n.strideHeight,r=n.strideWidth,o=n.padInfo.front,i=n.padInfo.top,a=n.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yF = 0; yF < `+n.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+n.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+n.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+i+`;

              if (xR < 0 || xR >= `+n.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+n.outWidth+`; yC++) {
                int xC = wC + yC * `+r+" - "+a+`;

                if (xC < 0 || xC >= `+n.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},vm=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterDepth,e=n.filterHeight,r=n.filterWidth,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=t-1-n.padInfo.front,u=e-1-n.padInfo.top,c=r-1-n.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+n.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+r+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+r+` - 1 - wC;

              for (int d2 = 0; d2 < `+n.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},mm=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideHeight,e=n.strideWidth,r=n.padInfo.top,o=n.padInfo.left,i=n.outChannels/n.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+i+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yR = 0; yR < `+n.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+r+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+n.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},gm=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,o=n.strideWidth,i=t-1-n.padInfo.top,a=e-1-n.padInfo.left,s=n.outChannels/n.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},vc=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=n.outShape;var o=n.padInfo.top,i=n.padInfo.left,a=n.strideHeight,s=n.strideWidth,u=n.dilationHeight,c=n.dilationWidth,l=n.filterHeight,f=n.filterWidth,h=4*Math.floor(n.inChannels/4),p=n.inChannels%4,d=n.dataFormat==="channelsLast",v=d?1:2,m=d?2:3,g=d?3:1,y="",x="";e&&(y=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,x="result = activation(result);");var b=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+a+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+v+"], coords["+m+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+n.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+n.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+h+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+d+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(p===1)+`) {

              if (`+d+`) {
                dotProd +=
                    getX(batch, xR, xC, `+h+`) *
                    getW(wR, wC, `+h+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+h+`, xR, xC) *
                    getW(wR, wC, `+h+`, d2);
              }

            } else if (`+(p===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2)
              );

              if (`+d+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(p===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2),
                getW(wR, wC, `+h+` + 2, d2)
              );

              if (`+d+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1),
                  getX(batch, xR, xC, `+h+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC),
                  getX(batch, `+h+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+b+`
        `+x+`
        setOutput(result);
      }
    `},ym=function(n){this.variableNames=["x","W"],this.outputShape=n.outShape;var t=n.padInfo.front,e=n.padInfo.top,r=n.padInfo.left,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.filterDepth,f=n.filterHeight,h=n.filterWidth,p=4*Math.floor(n.inChannels/4),d=n.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+r+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+n.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+h+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+p+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(d===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+p+`) *
                  getW(wF, wR, wC, `+p+`, d2);
              } else if (`+(d===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(d===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1),
                  getX(batch, xF, xR, xC, `+p+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2),
                  getW(wF, wR, wC, `+p+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},mc=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=n.outShape;var o=n.inHeight,i=n.inWidth,a=n.padInfo.top,s=n.padInfo.left,u=n.strideHeight,c=n.strideWidth,l=n.dilationHeight,f=n.dilationWidth,h=n.filterHeight,p=n.filterWidth,d=n.outChannels/n.inChannels,v="",m="";e&&(v=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,m="result = activation(result);");var g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+v+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+d+`;
        int q = d2 - d1 * `+d+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+h+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+p+`; wC++) {
            int xC = xCCorner + wC * `+f+`;

            if (xC < 0 || xC >= `+i+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+m+`
        setOutput(result);
      }
    `},gc=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.outShape;for(var o=n.inHeight,i=n.inWidth,a=n.padInfo.top,s=n.padInfo.left,u=n.strideHeight,c=n.strideWidth,l=n.dilationHeight,f=n.dilationWidth,h=n.filterHeight,p=n.filterWidth,d=p,v="int xR; int xC; int xCOffset;",m=0;m<h;m++)for(var g=0;g<p;g++)v+=`
          vec4 xTexelR`+m+"C"+2*g+` = vec4(0.);
          vec4 wR`+m+"C"+g+` = vec4(0.);
          vec4 xR`+m+"C"+g+" = vec4(0.);";for(m=0;m<h;m++)for(var y=0;y<d;y++){if(v+=`
          xR = xRCorner + `+m*l+`;
          xC = xCCorner + `+(g=2*y)*f+`;
        `,c===1){if(g<p&&(v+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    xTexelR`+m+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+m+"C"+g+" = vec4(previous.zw, xTexelR"+m+"C"+g+`.xy);
                } else {
                  xR`+m+"C"+g+" = vec4(0, 0, xTexelR"+m+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xR`+m+"C"+g+" = xTexelR"+m+"C"+g+`;
              `,g+1<p)){var x=s%2==0?Tl(f):f;f%2==0&&s%2==1||f%2!=0&&s%2!=1?(v+=`
                  xCOffset = xC + `+s%2+" + "+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,f>1&&(v+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+i+`) {
                      xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+m+"C"+g+` = vec4(0.);
                    }
                  `),v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.xy);
                `):v+=`
                  xCOffset = xC + `+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+m+"C"+(g+1)+" = xTexelR"+m+"C"+(g+2)+`;
                `}}else g<p&&(v+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(v+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+i+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
              `,g+1<p&&(v+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+i+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+m+"C"+(g+1)+" = vec4(xTexelR"+m+"C"+(g+2)+`.xy, final.xy);
                `)):(v+=`
                if(xC >= 0 && xC < `+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".xy, xTexelR"+m+"C"+(g+2)+`.xy);
              `,g+1<p&&(v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
                `)),v+="}");g<p&&(v+=`
            vec4 wTexelR`+m+"C"+g+" = getW("+m+", "+g+`, d1, q);
            wR`+m+"C"+g+" = vec4(wTexelR"+m+"C"+g+".xz, wTexelR"+m+"C"+g+`.xz);
          `,g+1<p&&(v+=`
              vec4 wTexelR`+m+"C"+(g+1)+" = getW("+m+", "+(g+1)+`, d1, q);
              wR`+m+"C"+(g+1)+` =
                vec4(wTexelR`+m+"C"+(g+1)+".xz, wTexelR"+m+"C"+(g+1)+".xz);"))}for(m=0;m<h;m++)for(g=0;g<p;g++)v+="dotProd += xR"+m+"C"+g+" * wR"+m+"C"+g+";";var b="",w="";e&&(b=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var _=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+b+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+v+`

        vec4 result = dotProd;
        `+_+`
        `+w+`
        setOutput(result);
      }
    `},bm=function(n,t,e,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var i=n[0],a=n[1],s=n[2],u=n[3],c=t[0],l=e[0],f=e[1];this.outputShape=[c,l,f,u];var h=r==="bilinear"?1:0,p=[a-1+".0",s-1+".0"],d=p[0],v=p[1],m=l>1?[""+(a-1)/(l-1),"(y2-y1) * height_ratio","y1*"+d+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+d],g=m[0],y=m[1],x=m[2],b=f>1?[""+(s-1)/(f-1),"(x2-x1) * width_ratio","x1*"+v+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+v],w=b[0],_=b[1],T=b[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+i+`) {
          return;
        }

        float height_scale = `+y+`;
        float width_scale = `+_+`;

        float in_y = `+x+`;
        if( in_y < 0.0 || in_y > `+d+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+T+`;
        if( in_x < 0.0 || in_x > `+v+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+h+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},xm=function(n,t,e){this.variableNames=["x"],this.outputShape=n;var r=n.length,o=n[n.length-1],i=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+Ee(r)+` coords = getOutputCoords();
        int end = `+yc(r,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+i+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+yc(r,"coords")+` = idx;
          val += getX(`+function(a,s){if(a===1)return""+s;if(a===2)return s+".x, "+s+".y";if(a===3)return s+".x, "+s+".y, "+s+".z";if(a===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+a+" is not yet supported")}(r,"coords")+`);
        }
        setOutput(val);
      }
    `};function yc(n,t){if(n===1)return""+t;if(n===2)return t+".y";if(n===3)return t+".z";if(n===4)return t+".w";throw Error("Cumulative sum for rank "+n+" is not yet supported")}var wm=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=to.DENSE;var t=Yr(n),e=at();this.outputShape=n,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Kn(["r","c","d"],n)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},_m=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=to.DENSE;var t=Yr(n),e=at();this.outputShape=n,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Kn(["r","c","d"],n)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},Em=function(){function n(t,e,r){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=r,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return n.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},n.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},n.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},n.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},n.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},n}(),Cm=function(n){this.variableNames=["X"],this.outputShape=[n,n],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},Sm=function(n){this.variableNames=["A"],this.outTexUsage=Ct.DOWNLOAD;var t=at();this.outputShape=n,this.userCode=`
      `+uf+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},Im=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Ct.DOWNLOAD;var t=at();this.outputShape=n,this.userCode=`
      `+uf+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},Rm=function(n,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var r=at(),o=t[0],i=t[1];this.outputShape=n;var a="result";e&&(a="floor(result * 255. + 0.5)"),this.userCode=`
      `+ks(n)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+i+`;
        int c = imod(flatIndex, `+i+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
        vec4 values = `+r.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+r.output+" = vec4("+a+`, 0., 0., 0.);
      }
    `},Tm=function(n,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var r=at(),o=t[0],i=t[1];this.outputShape=n;var a="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;a+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+n[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+n[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+i+`;
              c = imod(flatIndex, `+i+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
              values = `+r.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+ks(n)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+a+`

        `+r.output+" = "+s+`;
      }
    `},Nm="return real * expR - imag * expI;",Am="return real * expI + imag * expR;",bc=function(n,t,e){this.variableNames=["real","imag"];var r=t[1];this.outputShape=t;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,i=e?r+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+n+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+r+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+r+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+i+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},km=function(){function n(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;return function(r,o){e.valueLoc==null&&(e.valueLoc=r.getUniformLocationNoThrow(o,"value")),r.gl.uniform1f(e.valueLoc,t)}},n}(),Dm=function(n,t,e){this.variableNames=["A","indices"];var r=n.slice();r[e]=t,this.outputShape=r,this.rank=r.length;var o=Ee(this.rank),i=function(a,s){var u=a.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],f=0;f<a.length;f++)f===s?l.push("int(getIndices("+c[f]+"))"):l.push(""+c[f]);return l.join()}(n,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},Om=function(n,t,e){this.sliceDim=n,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var r=Ee(t.length),o=Ee(e.length),i=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+r+" strides = "+r+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+i+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function Pm(n,t){var e=at();return Nd(n,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function Mm(n,t){return Pd(n,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Fm(n,t){return Md(n,t,new Uint16Array([0,1,2,2,1,3]))}function mo(n,t,e,r,o,i,a){Bd(e,r);var s=Fd(n,t),u=n.TEXTURE_2D;return J(n,t,function(){return n.bindTexture(u,s)}),J(n,t,function(){return n.texParameteri(u,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)}),J(n,t,function(){return n.texParameteri(u,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}),J(n,t,function(){return n.texParameteri(u,n.TEXTURE_MIN_FILTER,n.NEAREST)}),J(n,t,function(){return n.texParameteri(u,n.TEXTURE_MAG_FILTER,n.NEAREST)}),J(n,t,function(){return n.texImage2D(u,0,o,e,r,0,i,a,null)}),J(n,t,function(){return n.bindTexture(n.TEXTURE_2D,null)}),s}function Bm(n,t,e,r,o){var i=ki(e,r);return mo(n,t,i[0],i[1],o.internalFormatFloat,o.textureFormatFloat,n.FLOAT)}function Lm(n,t,e,r,o){var i=ki(e,r);return mo(n,t,i[0],i[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function Wm(n,t,e,r,o){var i=ki(e,r);return mo(n,t,i[0],i[1],n.RGBA,n.RGBA,n.UNSIGNED_BYTE)}function Vm(n,t,e,r,o){var i=vo(e,r);return mo(n,t,i[0],i[1],o.internalFormatPackedFloat,n.RGBA,n.FLOAT)}function Um(n,t,e,r,o){var i=vo(e,r);return mo(n,t,i[0],i[1],o.internalFormatPackedHalfFloat,n.RGBA,o.textureTypeHalfFloat)}function zm(n,t,e,r){return J(n,t,function(){return n.bindBuffer(n.ARRAY_BUFFER,r)}),ac(n,t,e,"clipSpacePos",r,3,20,0)&&ac(n,t,e,"uv",r,2,20,12)}function Gm(n,t,e,r,o,i,a){var s,u,c;J(n,t,function(){return n.bindTexture(n.TEXTURE_2D,e)}),i instanceof Uint8Array?(s=new Uint8Array(r*o*4),u=n.UNSIGNED_BYTE,c=n.RGBA):(s=new Float32Array(r*o*4),u=n.FLOAT,c=a.internalFormatPackedFloat),s.set(i),J(n,t,function(){return n.texImage2D(n.TEXTURE_2D,0,c,r,o,0,n.RGBA,u,s)}),J(n,t,function(){return n.bindTexture(n.TEXTURE_2D,null)})}function Hm(n,t,e,r){J(n,t,function(){return n.bindTexture(n.TEXTURE_2D,e)}),r.data instanceof Uint8Array?J(n,t,function(){return n.texImage2D(n.TEXTURE_2D,0,n.RGBA,r.width,r.height,0,n.RGBA,n.UNSIGNED_BYTE,r.data)}):J(n,t,function(){return n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,r)}),J(n,t,function(){return n.bindTexture(n.TEXTURE_2D,null)})}function Xm(n,t,e,r,o){var i=n.createBuffer();J(n,t,function(){return n.bindBuffer(n.PIXEL_PACK_BUFFER,i)});var a=16*e*r;return J(n,t,function(){return n.bufferData(n.PIXEL_PACK_BUFFER,a,n.STREAM_READ)}),J(n,t,function(){return n.readPixels(0,0,r,e,n.RGBA,n.FLOAT,0)}),J(n,t,function(){return n.bindBuffer(n.PIXEL_PACK_BUFFER,null)}),i}function qm(n,t,e){var r=n,o=new Float32Array(e);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,o),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),o}function jm(n,t,e,r,o){var i=ki(e,r),a=i[0],s=i[1],u=new Uint8Array(e*r*4);return J(n,t,function(){return n.readPixels(0,0,a,s,o.downloadTextureFormat,n.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function Km(n,t,e,r,o,i,a,s){var u=n,c=new Float32Array(function(l,f){var h=vo(l,f);return h[0]*h[1]*4}(i,a));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function $m(n,t,e,r){var o=new Float32Array(e*r*4);return J(n,t,function(){return n.readPixels(0,0,r,e,n.RGBA,n.FLOAT,o)}),o}var Ym=function(){function n(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=L().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,Cd(e,t)):this.gl=en(e);var r="WEBGL_color_buffer_float";if(L().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=No(this.gl,this.debug,"OES_texture_float"),kt(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=No(this.gl,this.debug,"OES_texture_half_float");else if(L().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(r),kt(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=No(this.gl,this.debug,"EXT_color_buffer_half_float");else if(L().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(r="EXT_color_buffer_float",kt(this.gl,r))this.colorBufferFloatExtension=this.gl.getExtension(r);else{if(!kt(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=Mm(this.gl,this.debug),this.indexBuffer=Fm(this.gl,this.debug),this.framebuffer=Ld(this.gl,this.debug),this.textureConfig=ws(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(n.prototype,"debug",{get:function(){return L().getBool("DEBUG")},enumerable:!0,configurable:!0}),n.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;J(e,this.debug,function(){return e.finish()}),J(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),J(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),J(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),J(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),J(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},n.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),Bm(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),Lm(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),Wm(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),Hm(this.gl,this.debug,t,e)},n.prototype.uploadDenseMatrixToTexture=function(t,e,r,o){this.throwIfDisposed(),Gm(this.gl,this.debug,t,e,r,o,this.textureConfig)},n.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Um(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Vm(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(sc(this.gl,this.debug,this.framebuffer),this.outputTexture=null),J(this.gl,this.debug,function(){return e.gl.deleteTexture(t)})},n.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,r){var o=this;return this.downloadMatrixDriver(t,function(){return jm(o.gl,o.debug,e,r,o.textureConfig)})},n.prototype.downloadPackedMatrixFromBuffer=function(t,e,r,o,i,a){return Km(this.gl,t,0,0,0,i,a,this.textureConfig)},n.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return qm(this.gl,t,e)},n.prototype.createBufferFromTexture=function(t,e,r){this.bindTextureToFrameBuffer(t);var o=Xm(this.gl,this.debug,e,r,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},n.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},n.prototype.createFence=function(t){var e,r,o=this;if(L().getBool("WEBGL_FENCE_API_ENABLED")){var i=t,a=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),r=function(){var s=i.clientWaitSync(a,0,0);return s===i.ALREADY_SIGNALED||s===i.CONDITION_SATISFIED},e=a}else L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),r=function(){return o.isQueryAvailable(e,L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):r=function(){return!0};return{query:e,isFencePassed:r}},n.prototype.downloadMatrixFromPackedTexture=function(t,e,r){var o=this;return this.downloadMatrixDriver(t,function(){return $m(o.gl,o.debug,e,r)})},n.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,r=Ad(e,this.debug,t),o=Pm(e,this.debug),i=Dd(e,this.debug);return J(e,this.debug,function(){return e.attachShader(i,o)}),J(e,this.debug,function(){return e.attachShader(i,r)}),Od(e,this.debug,i),this.debug&&wa(e,this.debug,i),this.vertexAttrsAreBound||(this.setProgram(i),this.vertexAttrsAreBound=zm(e,this.debug,this.program,this.vertexBuffer)),i},n.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&J(this.gl,this.debug,function(){return e.gl.deleteProgram(t)})},n.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&wa(this.gl,this.debug,this.program),J(this.gl,this.debug,function(){return e.gl.useProgram(t)})},n.prototype.getUniformLocation=function(t,e,r){return r===void 0&&(r=!0),this.throwIfDisposed(),r?Vd(this.gl,this.debug,t,e):Ud(this.gl,t,e)},n.prototype.getAttributeLocation=function(t,e){var r=this;return this.throwIfDisposed(),J(this.gl,this.debug,function(){return r.gl.getAttribLocation(t,e)})},n.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},n.prototype.setInputMatrixTexture=function(t,e,r){this.throwIfDisposed(),this.throwIfNoProgram(),zd(this.gl,this.debug,this.program,t,e,r)},n.prototype.setOutputMatrixTexture=function(t,e,r){this.setOutputMatrixTextureDriver(t,r,e)},n.prototype.setOutputPackedMatrixTexture=function(t,e,r){this.throwIfDisposed();var o=vo(e,r),i=o[0],a=o[1];this.setOutputMatrixTextureDriver(t,i,a)},n.prototype.setOutputMatrixWriteRegion=function(t,e,r,o){this.setOutputMatrixWriteRegionDriver(r,t,o,e)},n.prototype.setOutputPackedMatrixWriteRegion=function(t,e,r,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},n.prototype.debugValidate=function(){this.program!=null&&wa(this.gl,this.debug,this.program),Ao(this.gl)},n.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),J(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},n.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return t.gl.finish()})},n.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=No(this.gl,this.debug,L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},n.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},n.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},n.prototype.beginQuery=function(){if(L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),r=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,r),r}var o=this.getQueryTimerExtensionWebGL1(),i=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,i),i},n.prototype.endQuery=function(){if(L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,r=this.getQueryTimerExtensionWebGL2();e.endQuery(r.TIME_ELAPSED_EXT)}},n.prototype.waitForQueryAndGetTime=function(t){return K(this,void 0,void 0,function(){var e=this;return $(this,function(r){switch(r.label){case 0:return[4,ec(function(){return e.disposed||e.isQueryAvailable(t,L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return r.sent(),[2,this.getQueryTime(t,L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},n.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var r=this.gl;return r.getQueryParameter(t,r.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},n.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var r=this.gl,o=this.getQueryTimerExtensionWebGL2(),i=r.getQueryParameter(t,r.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint}return i=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint},n.prototype.pollFence=function(t){var e=this;return new Promise(function(r){e.addItemToPoll(function(){return t.isFencePassed()},function(){return r()})})},n.prototype.pollItems=function(){for(var t=function(r){for(var o=0;o<r.length&&r[o]();++o);return o-1}(this.itemsToPoll.map(function(r){return r.isDoneFn})),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},n.prototype.addItemToPoll=function(t,e){var r=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||ec(function(){return r.pollItems(),r.itemsToPoll.length===0})},n.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),_a(this.gl,this.debug,t,this.framebuffer),this.debug&&Ao(this.gl)},n.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(_a(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&Ao(this.gl)):sc(this.gl,this.debug,this.framebuffer)},n.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var r=e();return this.unbindTextureToFrameBuffer(),r},n.prototype.setOutputMatrixTextureDriver=function(t,e,r){this.throwIfDisposed();var o=this.gl;_a(o,this.debug,t,this.framebuffer),this.debug&&Ao(o),this.outputTexture=t,J(o,this.debug,function(){return o.viewport(0,0,e,r)}),J(o,this.debug,function(){return o.scissor(0,0,e,r)})},n.prototype.setOutputMatrixWriteRegionDriver=function(t,e,r,o){var i=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return i.gl.scissor(t,e,r,o)})},n.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},n.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},n}();function xc(n,t){if(n.length!==t.length)throw Error("Binary was compiled with "+n.length+" inputs, but was executed with "+t.length+" inputs");n.forEach(function(e,r){var o=e.logicalShape,i=t[r],a=i.shape;if(!Ye(o,a))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+a+" must match");if(!e.isUniform||!i.isUniform){var s=e.texShape,u=i.isUniform?null:i.texData.texShape;if(!Ye(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var Jm=function(n,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n;for(var r=e.filterWidth,o=e.inChannels,i=e.strideWidth,a=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,f=e.dataFormat,h=s.left,p=s.top,d=o*r,v=at(),m=f==="channelsLast",g=m?0:1,y=m?1:2,x="",b=0;b<=1;b++)for(var w=0;w<=1;w++)x+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+b+`;

          if(blockIndex < `+n[1]+" && pos < "+n[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+a+" - "+p+`;
            d0 = offsetY + `+l+" * (pos / "+d+`);

            if(d0 < `+t[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+i+". - "+h+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+d+".) / "+o+`.));

              if(d1 < `+t[y]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+m+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*b+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*b+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+x+`

        `+v.output+` = result;
      }
    `},Qm=function(n,t,e,r,o){this.variableNames=["x"],this.outputShape=[];var i,a=t,s=n[3]-1;this.outputShape=n;var u="float("+e+") + float("+r+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+a+"; j <= "+a+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+i+`;
        setOutput(val);
      }
    `},Zm=function(n,t,e,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=n,this.depth=n[3],this.depthRadius=t,this.bias=e,this.alpha=r,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+r+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+r+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},eg=function(n,t,e,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var i,a=t,s=n[3]-1;this.outputShape=n;var u="float("+e+") + float("+r+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+a+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+a+"; j <= "+a+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+i+`;
        setOutput(result);
      }
    `},tg=function(n){this.variableNames=["dy","maxPos"],this.outputShape=n.inShape;var t=n.strideHeight,e=n.strideWidth,r=n.dilationHeight,o=n.effectiveFilterHeight,i=n.effectiveFilterWidth,a=o-1-n.padInfo.top,s=i-1-n.padInfo.left,u=o*i-1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+r+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+i+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+i+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},ng=function(n){this.variableNames=["dy","maxPos"],this.outputShape=n.inShape;var t=n.strideDepth,e=n.strideHeight,r=n.strideWidth,o=n.dilationDepth,i=n.dilationHeight,a=n.dilationWidth,s=n.effectiveFilterDepth,u=n.effectiveFilterHeight,c=n.effectiveFilterWidth,l=s-1-n.padInfo.front,f=u-1-n.padInfo.top,h=c-1-n.padInfo.left,p=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+f+", "+h+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+n.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+a+`) {
              float dyC = float(dyCCorner + wC) / `+r+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+p+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ra=function(n,t,e,r,o,i,a){e===void 0&&(e=!1),r===void 0&&(r=!1),o===void 0&&(o=!1),i===void 0&&(i=null),a===void 0&&(a=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?n[1]:n[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=r?"rc.z, i * 2":"i * 2, rc.z",f=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],h=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],p="",d="";i&&(p=a?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+i+`
        }`:`vec4 activation(vec4 x) {
          `+i+`
        }`,d="result = activation(result);");var v=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+p+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+f[0]+" * "+h[0]+`);
          result += (`+f[1]+" * "+h[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+v+`

        `+d+`

        setOutput(result);
      }
    `},rg=function(){function n(t,e,r){this.variableNames=["probs"],this.outputShape=[t,r],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;return function(r,o){e.seedLoc==null&&(e.seedLoc=r.getUniformLocation(o,"seed")),r.gl.uniform1f(e.seedLoc,t)}},n}(),og=function(n,t,e,r){this.variableNames=["indices"],this.outputShape=[n,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+r+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},ig=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=n;var t=n.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=vt("rc",t),r=Ee(t),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",f=s-2;f<s;f++)l+=c[f]+" >= "+u[f],f<s-1&&(l+="||");return l}(t,n,e),i=function(s,u,c,l){if(s===1)return"";var f=l.slice(-2);return`
    int r = `+f[0]+`;
    int c = `+f[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,n[n.length-1],n[n.length-2],e),a=function(s,u){var c=s.length,l=function(f,h){for(var p=[],d=0;d<=1;d++)for(var v=0;v<=1;v++){for(var m=(d===0?"r":"rp1")+", "+(v===0?"c":"cp1"),g=2;g<f;g++)m=h[h.length-1-g]+","+m;p.push(m)}return p}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(n,e);this.userCode=`
        void main() {
          `+r+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+i+`

            setOutput(vec4(`+a+`));
          }
        }
      `}},ag=function(n,t,e){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+n[c]+u[1]});var r=n.length,o=Ee(r),i=t.map(function(u){return u[0]}).join(","),a=t.map(function(u,c){return u[0]+n[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=r!==1?`
      `+o+" start = "+o+"("+i+`);
      `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+i+`;
        int end = `+a+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},sg=function(n,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(m,g){return m[0]+n[g]+m[1]});for(var r=n.length,o=Ee(r),i=t.map(function(m){return m[0]}).join(","),a=t.map(function(m,g){return m[0]+n[g]}).join(","),s=vt("rc",r),u=vt("source",r),c=s[r-1]+" < "+this.outputShape[r-1],l=r===1?"source":"vec2("+u.slice(-2).join()+")",f=[o+" rc = outputLoc;",s[r-1]+` += 1;
       if(`+c+`) {
      `,r===1?"":`}
       rc = outputLoc;
       `+s[r-2]+` += 1;
       if(`+s[r-2]+" < "+this.outputShape[r-2]+") {",r===1?"":"  "+s[r-1]+` += 1;
         if(`+c+") {"],h=r===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",p="",d=0,v=r===1?2:4;d<v;d++)p+=`
        `+f[d]+`
        if (`+h+`) {
          result[`+d+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+d+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;p+=r===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+i+`);
      const `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+p+`
        setOutput(result);
      }
    `},Ta=function(n,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var r=n.filterWidth,o=n.strideHeight,i=n.strideWidth,a=n.dilationHeight,s=n.dilationWidth,u=n.effectiveFilterHeight,c=n.effectiveFilterWidth,l=n.padInfo.top,f=n.padInfo.left;this.outputShape=n.outShape;var h=t==="avg",p="0.0";if(h||(p="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+i+`);
        const ivec2 pads = ivec2(`+l+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var d=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(d="avgValue / count");var v=4*Math.floor(r/4),m=r%4,g=`
      if (`+h+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+i+`);
      const ivec2 pads = ivec2(`+l+", "+f+`);
      const float initializationValue = `+p+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+n.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+p+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+a+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+n.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+v+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+v+`;
          if (`+(m===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+d+`);
      }
    `}},Na=function(n,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var r=n.filterWidth,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.effectiveFilterDepth,f=n.effectiveFilterHeight,h=n.effectiveFilterWidth,p=n.padInfo.front,d=n.padInfo.top,v=n.padInfo.left;this.outputShape=n.outShape;var m=t==="avg",g="0.0";if(m||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+i+", "+a+`);
        const ivec3 pads = ivec3(`+p+", "+d+", "+v+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+n.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+n.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+h+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+n.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+f+" * "+h+` +
                      wR * `+h+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var y=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(y="avgValue / count");var x=4*Math.floor(r/4),b=r%4,w=`
      if (`+m+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+p+", "+d+", "+v+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+n.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+n.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+x+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+x+`;
            if (`+(b===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(b===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(b===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+y+`);
        }
      }
    `}},ug=function(n,t){this.variableNames=["x"];var e=n.windowSize,r=n.batchSize,o=n.inSize,i=Math.ceil(o/e);this.outputShape=[r,i];var a="0.0",s="";t==="prod"?a="1.0":t==="min"?(a="1.0 / 1e-20",s="min"):t==="max"&&(a="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,f=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,h="vec4";t==="all"?(a="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,h="bvec4"):t==="any"&&(a="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,h="bvec4");var p="";o%e>0&&(p=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+a+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+p+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+a+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+f+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===2)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===3)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+f+`
        }
        setOutput(`+u+`);
      }
    `},cg=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n;for(var e="",r=0;r<4;r++){var o="thisRC = rc;";r%2==1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(r>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+r+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(r>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+Kn(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+ks(n)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+n[1]+`;
        int cols = `+n[2]+`;

        `+e+`

        setOutput(result);
      }
    `},lg=function(n,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,o=r[1],i=r[2],a=n.shape,s=a[1],u=a[2],c=[e&&s>1?o-1:o,e&&u>1?i-1:i],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],p=1/f,d=1/h,v=2*Math.ceil(p)+2,m=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(i-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},fg=function(n,t,e,r){this.variableNames=["A"],this.outputShape=[];var o=n[0],i=n[1],a=n[2],s=n[3];this.outputShape=[o,t,e,s];var u=[r&&t>1?i-1:i,r&&e>1?a-1:a],c=[r&&t>1?t-1:t,r&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},hg=function(n,t,e,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=n[0],i=n[1],a=n[2],s=n[3];this.outputShape=[o,t,e,s];var u=[r&&t>1?i-1:i,r&&e>1?a-1:a],c=[r&&t>1?t-1:t,r&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+i+".0, "+a+`.0,
                                     `+a+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},pg=function(n,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,o=r[1],i=r[2],a=n.shape,s=a[1],u=a[2],c=[e&&s>1?o-1:o,e&&u>1?i-1:i],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],p=1/f,d=1/h,v=2*Math.ceil(p)+2,m=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+i+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},dg=function(n,t,e,r){this.variableNames=["A"],this.outputShape=[];var o=n[0],i=n[1],a=n[2],s=n[3];this.outputShape=[o,t,e,s];var u=[r&&t>1?i-1:i,r&&e>1?a-1:a],c=[r&&t>1?t-1:t,r&&e>1?e-1:e],l=r?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},vg=function(n,t){this.variableNames=["x"];var e=n.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=n,e!==1){var r=n.map(function(i,a){return function(s){return t.indexOf(s)!==-1&&n[s]!==1?n[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(a)}).join(","),o=Ee(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+r+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+n[0]+` - coord - 1));
        }
      `},mg=function(n,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=n.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=n;var r=vt("rc",e),o=r[e-1]+" + 1 < "+this.outputShape[e-1],i=r[e-2]+" + 1 < "+this.outputShape[e-2],a=Ee(e);function s(u){var c=n.map(function(l,f){return function(h,p){return t.indexOf(h)!==-1&&n[h]!==1?n[h]+" - "+p[h]+" - 1":""+p[h]}(f,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+n[0]+` - rc - 1),
            `+n[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+n[0]+` - (rc  + 1) - 1),
                `+n[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+a+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(r.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(r.slice())+`;
          }
          if(`+i+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(r.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(r.slice())+`;
            }
          }
          setOutput(result);
        }
    `},wc=function(n,t,e,r,o,i,a){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;var s=Ee(o.length),u=Ee(i.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",f="";r===1?f="i":r===2&&(f="i, coords[1]");var h="getUpdates("+f+")",p=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+n+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+p+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+h+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},gg=function(n,t){this.variableNames=["x","segmentIds"];var e=n.windowSize,r=n.batchSize,o=n.inSize,i=n.numSegments,a=i*Math.ceil(o/e);this.outputShape=[r,a];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var f="";o%e>0&&(f=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+f+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+i+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+i+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},yg=function(n,t,e){var r,o;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",r="resRC";else{for(var i=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[],s=[],u=0;u<t.length;u++)s.push(""+i[u]),u<n&&a.push(""+i[u]);r=a.join(),o=s.join()}var c=Ee(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+r+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},bg=function(){function n(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,r=Ee(this.rank),o="uniform int start["+this.rank+"];",i=function(a){if(a===1)return"sourceLoc";if(a<=6)return Aa.slice(0,a).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+a+" is not yet supported")}(this.rank);e=`
        `+r+` sourceLoc;
        `+r+` coords = getOutputCoords();
        `+t.map(function(a,s){return"sourceLoc."+Aa[s]+" = start["+s+"] + coords."+Aa[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+i+`));
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(r,o){e.startLoc==null&&(e.startLoc=r.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||r.gl.uniform1iv(e.startLoc,t)}},n}(),Aa=["x","y","z","w","u","v"],xg=function(){function n(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=Ee(this.rank),r=vt("coords",this.rank),o=vt("sourceLoc",this.rank),i=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",a="getChannel(getSource("+o.join()+"), "+i+")",s=`
      result.x = `+a+`;
      if (++`+r[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+a+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+r[this.rank-1]+`;
      if (++`+r[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+a+`;
        if (++`+r[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+a+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map(function(l,f){return"start["+f+"]"}).join()+");":t.map(function(l,f){return o[f]+" = "+r[f]+" + start["+f+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(r,o){e.startLoc==null&&(e.startLoc=r.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||r.gl.uniform1iv(e.startLoc,t)}},n}(),wg=function(n,t,e){this.variableNames=["x"],this.outputShape=e;var r=e.length,o=Ee(e.length),i=Ee(e.length),a="";if(r===1)a="coords * strides + begin";else{var s=0;a=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+n+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+i+` coords = getOutputCoords();
        setOutput(getX(`+a+`));
      }
    `},_g=function(){function n(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return n.prototype.acquireTexture=function(t,e,r){var o,i=_c(e,r),a=Ec(t,i,r);if(a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]),this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[a].shift();return this.usedTextures[a].push(s),s}return this.numUsedTextures++,this.log(),i===Et.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):i===Et.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):i===Et.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):i===Et.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):i===Et.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[a].push(o),o},n.prototype.releaseTexture=function(t,e,r,o){if(this.freeTextures!=null){var i=Ec(e,_c(r,o),o);i in this.freeTextures||(this.freeTextures[i]=[]),this.freeTextures[i].push(t),this.numFreeTextures++,this.numUsedTextures--;var a=this.usedTextures[i],s=a.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");a.splice(s,1),this.log()}},n.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},n.prototype.getNumUsedTextures=function(){return this.numUsedTextures},n.prototype.getNumFreeTextures=function(){return this.numFreeTextures},n.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(r){t.gpgpu.deleteMatrixTexture(r)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},n}();function _c(n,t){if(n===Ct.UPLOAD)return Et.PACKED_2X2_FLOAT32;if(n===Ct.RENDER||n==null)return function(e){return L().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?Et.PACKED_2X2_FLOAT32:Et.UNPACKED_FLOAT32:e?Et.PACKED_2X2_FLOAT16:Et.UNPACKED_FLOAT16}(t);if(n===Ct.DOWNLOAD||n===Ct.PIXELS)return Et.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+n)}function Ec(n,t,e){return n[0]+"_"+n[1]+"_"+t+"_"+e}var Eg=function(n,t){this.variableNames=["A"];for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[r]*t[r];this.outputShape=e,this.rank=e.length;var o=Ee(this.rank),i=function(a){var s=a.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+a[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<a.length;l++)c.push("imod("+u[l]+", "+a[l]+")");return c.join()}(n);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},Cg=function(n,t){this.variableNames=["A"];for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[t[r]];this.outputShape=e,this.rank=e.length;var o=Ee(this.rank),i=function(a){var s=a.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<a.length;l++)c[a[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+i+`));
    }
    `},Sg=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[t[r]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=Ee(this.rank),i=sf("rc",this.rank),a=new Array(this.rank);for(r=0;r<t.length;r++)a[t[r]]=i[r];var s="vec2("+a.slice(-2).join()+")",u="++"+i[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+a.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+i[this.rank-1]+`;
      if(++`+i[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},Ds=1.7580993408473768,Os=1.0507009873554805,ae=function(n,t){this.variableNames=["A"],this.outputShape=n,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},Vt="if (isnan(x)) return x;",Ig="return x;",Cc="return abs(x);",hf=Vt+`
  return (x < 0.0) ? 0.0 : x;
`,pf=Vt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,df="return (x >= 0.0) ? x : (exp(x) - 1.0);",Rg=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+Ds+`;
  float scale = `+Os+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,Sc="return -x;",Ic="return ceil(x);",Rc="return floor(x);",Tc="return exp(x);",Nc="return exp(x) - 1.0;",Tg=Vt+`
  return sin(x);
`,Ng=Vt+`
  return cos(x);
`,Ag=Vt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,kg=Vt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Dg=Vt+`
  return atan(x);
`,Og=Vt+"return log(x + sqrt(x * x + 1.0));",Pg=Vt+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,Mg=Vt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Po="return x;",Fg="return x;",vf=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,mf=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,gf=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Kr=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},Bg=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=n;var t=n.length,e=vt("rc",t),r=Ee(t),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,e),i=e.slice(-2),a=t<=1?"rc":"vec2("+i.join(",")+")";this.userCode=`
      void main() {
        `+r+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+a+`));
      }
    `},Mo={};function Fo(n,t){if(t===void 0&&(t=!1),n==="linear")return t?Fg:Ig;if(n==="relu")return t?vf:hf;if(n==="elu")return t?gf:df;if(n==="relu6")return t?mf:pf;if(n==="prelu")return t?ff:lf;throw new Error("Activation "+n+" has not been implemented for the WebGL backend.")}var Lg=600,Wg=function(n){function t(e){var r,o=n.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!L().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var i=en(L().getNumber("WEBGL_VERSION"));o.binaryCache=((r=L().getNumber("WEBGL_VERSION"))in Mo||(Mo[r]={}),Mo[r]),o.gpgpu=new Ym(i),o.canvas=i.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new _g(o.gpgpu),o.numMBBeforeWarning=L().global.screen==null?1024:L().global.screen.height*L().global.screen.width*window.devicePixelRatio*Lg/1024/1024,o.texData=new Jl(o,D),o}return Wt(t,n),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,r,o){if(L().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var i={};return this.texData.set(i,{shape:r,dtype:o,values:e,usage:Ct.UPLOAD}),i},t.prototype.move=function(e,r,o,i){if(L().getBool("DEBUG")&&this.checkNumericalProblems(r),i==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:i,values:r,usage:Ct.UPLOAD})},t.prototype.readSync=function(e){var r=this.texData.get(e),o=r.values,i=r.dtype,a=r.complexTensors,s=r.slice,u=r.shape,c=r.isPacked;if(s!=null){var l=void 0;l=c?new Kr(u,Po):new ae(u,Po);var f=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:i}],i),h=this.readSync(f.dataId);return this.disposeData(f.dataId),h}if(o!=null)return this.convertAndCacheOnCPU(e);if(i==="string")return o;var p,d,v=this.activeTimers!=null;return v&&(p=qt()),i==="complex64"?d=os(a.real.dataSync(),a.imag.dataSync()):d=this.getValuesFromTexture(e),v&&(this.downloadWaitMs+=qt()-p),this.convertAndCacheOnCPU(e,d)},t.prototype.read=function(e){return K(this,void 0,void 0,function(){var r,o,i,a,s,u,c,l,f,h,p,d,v,m,g,y,x,b,w,_,T,S;return $(this,function(E){switch(E.label){case 0:if(this.pendingRead.has(e))return r=this.pendingRead.get(e),[2,new Promise(function(I){return r.push(I)})];if(o=this.texData.get(e),i=o.values,a=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return f=void 0,f=l?new Kr(a,Po):new ae(a,Po),h=this.runWebGLProgram(f,[{dataId:e,shape:a,dtype:u}],u),p=this.read(h.dataId),this.disposeData(h.dataId),[2,p];if(i!=null)return[2,this.convertAndCacheOnCPU(e)];if(!L().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&L().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return d=null,u!=="complex64"&&L().get("WEBGL_BUFFER_SUPPORTED")&&(v=this.decode(e),m=this.texData.get(v.dataId),d=(S=this.gpgpu).createBufferFromTexture.apply(S,[m.texture].concat(Yr(a)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:E.sent(),E.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return y=E.sent(),x=y[0],b=y[1],g=os(x,b),[3,5];case 4:d==null?g=this.getValuesFromTexture(e):(w=Y(a),g=this.gpgpu.downloadFloat32MatrixFromBuffer(d,w)),E.label=5;case 5:return v!=null&&this.disposeData(v.dataId),_=this.convertAndCacheOnCPU(e,g),T=this.pendingRead.get(e),this.pendingRead.delete(e),T.forEach(function(I){return I(_)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,_]}})})},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var r=0;r<e.length;r++){var o=e[r];if(!Rd(o))throw L().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var r,o=this.texData.get(e),i=o.shape,a=o.dtype,s=o.isPacked,u=Y(i);if(L().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),f=(r=this.gpgpu).downloadMatrixFromPackedTexture.apply(r,[l.texture].concat(Yr(i))).subarray(0,u);return this.disposeData(c.dataId),f}var h=L().getBool("WEBGL_PACK")&&s===!0,p=h?Ea(i):i,d=h?new Im(p):new Sm(p),v=this.runWebGLProgram(d,[{shape:p,dtype:a,dataId:e}],"float32"),m=this.texData.get(v.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(m.texture,m.texShape[0],m.texShape[1]).subarray(0,u);return this.disposeData(v.dataId),g},t.prototype.time=function(e){return K(this,void 0,void 0,function(){var r,o,i,a,s,u,c;return $(this,function(l){switch(l.label){case 0:return r=this.activeTimers,o=[],i=!1,this.programTimersStack==null?(this.programTimersStack=o,i=!0):this.activeTimers.push(o),this.activeTimers=o,e(),a=kr(this.activeTimers.map(function(f){return f.query})).filter(function(f){return f!=null}),s=kr(this.activeTimers.map(function(f){return f.name})).filter(function(f){return f!=null}),this.activeTimers=r,i&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(a)]:[3,2];case 1:return c=l.sent(),u.kernelMs=sd(c),u.getExtraProfileInfo=function(){return c.map(function(f,h){return{name:s[h],ms:f}}).map(function(f){return f.name+": "+f.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:qt(),endMs:null}},t.prototype.endTimer=function(e){return L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=qt(),e)},t.prototype.getQueryTime=function(e){return K(this,void 0,void 0,function(){var r;return $(this,function(o){return L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(r=e).endMs-r.startMs]})})},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var r=this.texData.get(e).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var r=this.texData.get(e),o=r.texture,i=r.dtype,a=r.texShape,s=r.usage,u=r.isPacked,c=r.slice,l=c&&c.origDataId||e,f=this.dataRefCount.get(l);f>1?this.dataRefCount.set(l,f-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(a,i),this.textureManager.releaseTexture(o,a,s,u)));var h=this.texData.get(e);h.texture=null,h.texShape=null,h.isPacked=!1,h.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return L().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=D.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,r){var o=this;return r===void 0&&(r=128),this.getCPUBackend()!=null&&e.every(function(i){return o.texData.get(i.dataId).texture==null&&i.size<r})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,r){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:D.keep(e.clone()),imag:D.keep(r.clone())},o},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,r,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,r,o);if(Y(o)===0)return tt([],o,e.dtype);var i=this.texData.get(e.dataId).isPacked,a=$l(e.shape,r,o);if(i||!a){var s=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new xg(o):new bg(o),u=s.getCustomSetupFunc(r);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,r,o)},t.prototype.shallowSlice=function(e,r,o){var i=this.texData.get(e.dataId),a=this.makeOutput(o,e.dtype),s=this.texData.get(a.dataId);Object.assign(s,i),s.shape=o,s.dtype=e.dtype;var u=Yl(r,e.strides);i.slice&&(u+=i.slice.flatOffset),s.slice={flatOffset:u,origDataId:i.slice&&i.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),a},t.prototype.stridedSlice=function(e,r,o,i){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,r,o,i);var a=Is(r,o,i);if(a.some(function(u){return u===0}))return tt([],a);var s=new wg(r,i,a);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,r){var o=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new mg(e.shape,r):new vg(e.shape,r);return this.compileAndRun(o,[e])},t.prototype.concat=function(e,r){if(e[0].dtype==="complex64"){var o=e.map(function(p){return At(p)}),i=e.map(function(p){return Kt(p)});return Ze(this.concat(o,r),this.concat(i,r))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,r);if(e.length===1)return e[0];if(e.length>L().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var a=Math.floor(e.length/2),s=this.concat(e.slice(0,a),r),u=this.concat(e.slice(a),r);return this.concat([s,u],r)}if(L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new fm(e.map(function(p){return p.shape}),r);return this.compileAndRun(c,e)}var l=Or(e.map(function(p){return p.shape}),r),f=e.map(function(p){return p.as2D(-1,Y(p.shape.slice(r)))}),h=new lm(f.map(function(p){return p.shape}));return this.compileAndRun(h,f).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Sc,e.dtype);var r=new ae(e.shape,Sc);return this.compileAndRun(r,[e])},t.prototype.batchMatMul=function(e,r,o,i){var a=o?e.shape[2]:e.shape[1],s=i?r.shape[1]:r.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((a===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),i&&(r=r.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),f=s===1?2:1,h=s===1?r.as3D(c,1,u):r;return this.multiply(l,h).sum(f,!0)}var p=et(e.dtype,r.dtype),d=new Ra(e.shape,[c,a,s],o,i);return this.compileAndRun(d,[e,r],p)},t.prototype.fusedBatchMatMul=function(e){var r=e.a,o=e.b,i=e.transposeA,a=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=i?r.shape[2]:r.shape[1],f=a?o.shape[1]:o.shape[2],h=r.shape[0],p=et(r.dtype,o.dtype),d=s!=null,v=c!=null,m=u?Fo(u,!0):null,g=new Ra(r.shape,[h,l,f],i,a,d,m,v),y=[r,o];return s&&y.push(s),c&&y.push(c),this.compileAndRun(g,y,p)},t.prototype.multiply=function(e,r){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),i=this.texData.get(r.dataId),a=new pc(im,e.shape,r.shape),s=new pc(am,e.shape,r.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(r,i.complexTensors.real),this.makeComplexComponentTensorInfo(r,i.complexTensors.imag)],c=this.compileAndRun(a,u),l=this.compileAndRun(s,u),f=this.complex(c,l);return c.dispose(),l.dispose(),f}if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.multiply(e,r);if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,dc,e.dtype);var h=new Pe(dc,e.shape,r.shape);return this.compileAndRun(h,[e,r],e.dtype)},t.prototype.batchNormalization=function(e,r,o,i,a,s){var u=[e,r,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(a!=null&&(l=a.shape,u.push(a)),L().getBool("WEBGL_PACK_NORMALIZATION")){var f=new om(e.shape,r.shape,o.shape,c,l,i);return this.compileAndRun(f,u)}var h=new rm(e.shape,r.shape,o.shape,c,l,i);return this.compileAndRun(h,u)},t.prototype.localResponseNormalization4D=function(e,r,o,i,a){var s=L().getBool("WEBGL_PACK_NORMALIZATION")?new eg(e.shape,r,o,i,a):new Qm(e.shape,r,o,i,a);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,r,o,i,a,s,u){var c=new Zm(r.shape,i,a,s,u);return this.compileAndRun(c,[r,o,e])},t.prototype.tile=function(e,r){if(e.dtype==="string"){var o=this.readSync(e.dataId).map(function(a){return ni(a)});return of(ie(e.shape,e.dtype,o),r)}var i=new Eg(e.shape,r);return this.compileAndRun(i,[e])},t.prototype.pad=function(e,r,o){var i=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new sg(e.shape,r,o):new ag(e.shape,r,o);return this.compileAndRun(i,[e])},t.prototype.transpose=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,r);var o=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Sg(e.shape,r):new Cg(e.shape,r);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,r,o){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.gather(e,r,o);var i=new Dm(e.shape,r.size,o);return this.compileAndRun(i,[e,r])},t.prototype.batchToSpaceND=function(e,r,o){R(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var i=r.reduce(function(f,h){return f*h}),a=ui(e.shape,r,i),s=ci(a.length,r.length),u=li(e.shape,r,i),c=Xl(o,r.length),l=ql(u,o,r.length);return e.reshape(a).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,r,o){R(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var i=r.reduce(function(h,p){return h*p}),a=[[0,0]];a.push.apply(a,o);for(var s=1+r.length;s<e.shape.length;++s)a.push([0,0]);var u=e.pad(a),c=ui(u.shape,r,i,!1),l=ci(c.length,r.length,!1),f=li(u.shape,r,i,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.reduce=function(e,r,o){var i=e.shape[0],a=e.shape[1],s=Ca(a),u=new ug({windowSize:s,inSize:a,batchSize:i},r),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,r,o)},t.prototype.argReduce=function(e,r,o){o===void 0&&(o=null);var i=e.shape[0],a=e.shape[1];o!=null&&(i=o.shape[0],a=o.shape[1]);var s=Ca(a),u=new Kv({windowSize:s,inSize:a,batchSize:i},r,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,r,l)},t.prototype.argReducePacked=function(e,r,o){o===void 0&&(o=null);var i=o!=null?o.shape:e.shape,a=Ca(i[i.length-1]),s=new em(i,a,r,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,r,c):c},t.prototype.sum=function(e,r){_t("sum",r,e.rank);var o=ot(e.shape,r),i=o[0],a=Y(o[1]),s=e.as2D(-1,a),u=ma(e.dtype);return this.reduce(s,"sum",u).reshape(i)},t.prototype.prod=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,r);var o=ot(e.shape,r),i=o[0],a=Y(o[1]),s=e.as2D(-1,a),u=ma(e.dtype);return this.reduce(s,"prod",u).reshape(i)},t.prototype.unsortedSegmentSum=function(e,r,o){var i=0,a=tn([i],e.rank),s=e;a!=null&&(s=e.transpose(a),i=nn(1,e.rank)[0]);var u=function(p,d,v){for(var m=[],g=p.length,y=0;y<g;y++)y!==d?m.push(p[y]):m.push(v);return m}(s.shape,i,o),c=Y([s.shape[i]]),l=s.as2D(-1,c),f=ma(e.dtype),h=this.segOpCompute(l,"unsortedSegmentSum",r,f,o).reshape(u);return a!=null&&(h=h.transpose(_s(a))),h},t.prototype.segOpCompute=function(e,r,o,i,a){var s=e.shape[0],u=e.shape[1],c=function(h,p){var d,v=!1;for(h<=Kl?(d=h,v=!0):d=$a(h,Math.floor(Math.sqrt(h)));!v;)d>p||d===h?v=!0:d=$a(h,d+1);return d}(u,a),l=new gg({windowSize:c,inSize:u,batchSize:s,numSegments:a}),f=this.compileAndRun(l,[e,o],i);return f.shape[1]===a?f:(o=si(0,a).tile([u/c]),this.segOpCompute(f,r,o,i,a))},t.prototype.argMinMaxReduce=function(e,r,o){var i=[r];if(_t("arg"+o.charAt(0).toUpperCase()+o.slice(1),i,e.rank),!L().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var a=ot(e.shape,i),s=a[0],u=Y(a[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},t.prototype.argMin=function(e,r){return this.argMinMaxReduce(e,r,"min")},t.prototype.argMax=function(e,r){return this.argMinMaxReduce(e,r,"max")},t.prototype.cumsum=function(e,r,o,i){if(r!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+r);var a=new xm(e.shape,o,i);return this.compileAndRun(a,[e])},t.prototype.equal=function(e,r){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(equal(a, b));
`,"bool");var o=new Pe("return float(a == b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.notEqual=function(e,r){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Pe("return float(a != b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.less=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.less(e,r);if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Pe("return float(a < b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.lessEqual=function(e,r){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Pe("return float(a <= b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.greater=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.greater(e,r);if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Pe("return float(a > b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.greaterEqual=function(e,r){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Pe("return float(a >= b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.logicalNot=function(e){var r=new ae(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(r,[e])},t.prototype.logicalAnd=function(e,r){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Pe("return float(a >= 1.0 && b >= 1.0);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.logicalOr=function(e,r){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Pe("return float(a >= 1.0 || b >= 1.0);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.select=function(e,r,o){var i=new yg(e.rank,r.shape,r.rank);return this.compileAndRun(i,[e,r,o],et(r.dtype,o.dtype))},t.prototype.where=function(e){ii("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var r=e.dataSync();return As(e.shape,r)},t.prototype.topk=function(e,r,o){return af(e.dataSync(),e.shape,e.dtype,r)},t.prototype.min=function(e,r){_t("min",r,e.rank);var o=ot(e.shape,r),i=o[0],a=Y(o[1]),s=e.as2D(-1,a);return this.reduce(s,"min",s.dtype).reshape(i)},t.prototype.minimum=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.minimum(e,r);var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ln(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Pe(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.mod=function(e,r){var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ln(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Pe(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.max=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,r);_t("max",r,e.rank);var o=ot(e.shape,r),i=o[0],a=Y(o[1]),s=e.as2D(-1,a);return this.reduce(s,"max",s.dtype).reshape(i)},t.prototype.maximum=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.maximum(e,r);var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ln(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Pe(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.all=function(e,r){_t("all",r,e.rank);var o=ot(e.shape,r),i=o[0],a=Y(o[1]),s=e.as2D(-1,a);return this.reduce(s,"all",s.dtype).reshape(i)},t.prototype.any=function(e,r){_t("any",r,e.rank);var o=ot(e.shape,r),i=o[0],a=Y(o[1]),s=e.as2D(-1,a);return this.reduce(s,"any",s.dtype).reshape(i)},t.prototype.realDivide=function(e,r){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Pe(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,r.shape);return this.compileAndRun(o,[e,r],"float32")},t.prototype.floorDiv=function(e,r){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Pe(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,r.shape);return this.compileAndRun(o,[e,r],"int32")},t.prototype.add=function(e,r){if(e.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(e,r,Sa);if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.add(e,r);var o=et(e.dtype,r.dtype);if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,Sa,o);var i=new Pe(Sa,e.shape,r.shape);return this.compileAndRun(i,[e,r],o)},t.prototype.packedUnaryOp=function(e,r,o){var i=new Kr(e.shape,r);return this.compileAndRun(i,[e],o)},t.prototype.packedBinaryOp=function(e,r,o,i,a){a===void 0&&(a=!1);var s=new ln(o,e.shape,r.shape,a);return this.compileAndRun(s,[e,r],i)},t.prototype.complexSeparableBinaryOp=function(e,r,o){var i=this,a=this.texData.get(e.dataId),s=this.texData.get(r.dataId),u=[[a.complexTensors.real,s.complexTensors.real],[a.complexTensors.imag,s.complexTensors.imag]].map(function(h){var p=h[0],d=h[1],v=i.makeComplexComponentTensorInfo(e,p),m=i.makeComplexComponentTensorInfo(r,d),g=new Pe(o,e.shape,r.shape);return i.compileAndRun(g,[v,m],et(p.dtype,d.dtype))}),c=u[0],l=u[1],f=this.complex(c,l);return c.dispose(),l.dispose(),f},t.prototype.makeComplexComponentTensorInfo=function(e,r){return{dataId:r.dataId,dtype:r.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>L().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var r=Math.floor(e.length/2),o=this.addN(e.slice(0,r)),i=this.addN(e.slice(r));return this.addN([o,i])}var a=e.map(function(c){return c.dtype}).reduce(function(c,l){return et(c,l)}),s=e.map(function(c){return c.shape}),u=L().getBool("WEBGL_PACK")?new jv(e[0].shape,s):new qv(e[0].shape,s);return this.compileAndRun(u,e,a)},t.prototype.subtract=function(e,r){if(e.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(e,r,Ia);if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.subtract(e,r);var o=et(e.dtype,r.dtype);if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,Ia,e.dtype);var i=new Pe(Ia,e.shape,r.shape);return this.compileAndRun(i,[e,r],o)},t.prototype.pow=function(e,r){var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ln(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Pe(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,r.shape),i=et(e.dtype,r.dtype);return this.compileAndRun(o,[e,r],i)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Ic,e.dtype);var r=new ae(e.shape,Ic);return this.compileAndRun(r,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Rc,e.dtype);var r=new ae(e.shape,Rc);return this.compileAndRun(r,[e])},t.prototype.sign=function(e){var r=new ae(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(r,[e])},t.prototype.isNaN=function(e){var r=new ae(e.shape,"return float(isnan(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.isInf=function(e){var r=new ae(e.shape,"return float(isinf(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.isFinite=function(e){var r=new ae(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.round=function(e){var r=new ae(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(r,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Tc,e.dtype);var r=new ae(e.shape,Tc);return this.compileAndRun(r,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Nc,e.dtype);var r=new ae(e.shape,Nc);return this.compileAndRun(r,[e])},t.prototype.softmax=function(e,r){var o=je([r],e.shape),i=this.max(e,o),a=yt(i.shape,o),s=this.subtract(e,i.reshape(a)),u=this.exp(s),c=this.sum(u,o).reshape(a);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var r=new ae(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(r,[e])},t.prototype.log1p=function(e){var r=new ae(e.shape,"return log(1.0 + x);");return this.compileAndRun(r,[e])},t.prototype.sqrt=function(e){var r=new ae(e.shape,"return sqrt(x);");return this.compileAndRun(r,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var r=new ae(e.shape,"return inversesqrt(x);");return this.compileAndRun(r,[e])},t.prototype.reciprocal=function(e){var r=new ae(e.shape,"return 1.0 / x;");return this.compileAndRun(r,[e])},t.prototype.relu=function(e){var r;return r=L().getBool("WEBGL_PACK")?new Kr(e.shape,vf):new ae(e.shape,hf),this.compileAndRun(r,[e])},t.prototype.relu6=function(e){var r;return r=L().getBool("WEBGL_PACK")?new Kr(e.shape,mf):new ae(e.shape,pf),this.compileAndRun(r,[e])},t.prototype.prelu=function(e,r){var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ln(ff,e.shape,r.shape):new Pe(lf,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.elu=function(e){if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,gf,e.dtype);var r=new ae(e.shape,df);return this.compileAndRun(r,[e])},t.prototype.eluDer=function(e,r){var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ln(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,r.shape):new Pe("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.selu=function(e){var r=new ae(e.shape,Rg);return this.compileAndRun(r,[e])},t.prototype.int=function(e){var r=new ae(e.shape,"return float(int(x));");return this.compileAndRun(r,[e],"int32")},t.prototype.clip=function(e,r,o){var i,a=(i=L().getBool("WEBGL_PACK_CLIP")?new um(e.shape):new sm(e.shape)).getCustomSetupFunc(r,o);return this.compileAndRun(i,[e],null,a)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Cc,e.dtype);var r=new ae(e.shape,Cc);return this.compileAndRun(r,[e])},t.prototype.complexAbs=function(e){var r=this.texData.get(e.dataId),o=new cm(e.shape),i=[this.makeComplexComponentTensorInfo(e,r.complexTensors.real),this.makeComplexComponentTensorInfo(e,r.complexTensors.imag)];return this.compileAndRun(o,i)},t.prototype.sigmoid=function(e){var r=new ae(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(r,[e])},t.prototype.softplus=function(e){var r=new ae(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(r,[e])},t.prototype.sin=function(e){var r=new ae(e.shape,Tg);return this.compileAndRun(r,[e])},t.prototype.cos=function(e){var r=new ae(e.shape,Ng);return this.compileAndRun(r,[e])},t.prototype.tan=function(e){var r=new ae(e.shape,"return tan(x);");return this.compileAndRun(r,[e])},t.prototype.asin=function(e){var r=new ae(e.shape,Ag);return this.compileAndRun(r,[e])},t.prototype.acos=function(e){var r=new ae(e.shape,kg);return this.compileAndRun(r,[e])},t.prototype.atan=function(e){var r=new ae(e.shape,Dg);return this.compileAndRun(r,[e])},t.prototype.atan2=function(e,r){var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ln(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Pe(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.sinh=function(e){var r=new ae(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[e])},t.prototype.cosh=function(e){var r=new ae(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[e])},t.prototype.tanh=function(e){var r=new ae(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(r,[e])},t.prototype.asinh=function(e){var r=new ae(e.shape,Og);return this.compileAndRun(r,[e])},t.prototype.acosh=function(e){var r=new ae(e.shape,Pg);return this.compileAndRun(r,[e])},t.prototype.atanh=function(e){var r=new ae(e.shape,Mg);return this.compileAndRun(r,[e])},t.prototype.erf=function(e){var r=new ae(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(r,[e])},t.prototype.step=function(e,r){var o=new ae(e.shape,function(i){return i===void 0&&(i=0),Vt+`
    return x > 0.0 ? 1.0 : float(`+i+`);
  `}(r));return this.compileAndRun(o,[e])},t.prototype.conv2dByMatMul=function(e,r,o,i,a,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,f=u[0]*u[1]*u[2],h=o.outChannels,p=o.dataFormat==="channelsLast",d=(f===1||h===1)&&l>1e3,v=u[2]%2!=0&&!!c.isPacked;if(d||!L().getBool("WEBGL_LAZILY_UNPACK")||!L().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!v){var m=p?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,m,o.inChannels]),y=this.reshape(r,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:y,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),o.outShape)}var x=p?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),b={dataId:e.dataId,shape:[1,x,o.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,R(Do(c.shape,b.shape),function(){return"packed reshape "+c.shape+" to "+b.shape+" isn't free"});var _=this.reshape(r,[1,o.inChannels,o.outChannels]),T=this.fusedBatchMatMul({a:b,b:_,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),S=this.texData.get(T.dataId);return R(S.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,S.shape=o.outShape,D.makeTensorFromDataId(T.dataId,o.outShape,T.dtype)},t.prototype.conv2dWithIm2Row=function(e,r,o,i,a,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,f=o.outWidth,h=o.outHeight,p=o.dataFormat==="channelsLast",d=u*c*l,v=h*f,m=[d,v],g=e.squeeze([0]),y=r.reshape([1,d,-1]),x=new Jm(m,g.shape,o),b=this.compileAndRun(x,[g]).reshape([1,m[0],m[1]]),w=i!=null,_=s!=null,T=a?Fo(a,!0):null,S=new Ra(b.shape,[1,v,o.outChannels],!0,!1,w,T,_),E=[b,y];i&&E.push(i),_&&E.push(s);var I=this.compileAndRun(S,E);return p?I.reshape([1,h,f,o.outChannels]):I.reshape([1,o.outChannels,h,f])},t.prototype.fusedConv2d=function(e){var r=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights;if(i.filterHeight===1&&i.filterWidth===1&&i.dilationHeight===1&&i.dilationWidth===1&&i.strideHeight===1&&i.strideWidth===1&&(i.padInfo.type==="SAME"||i.padInfo.type==="VALID"))return this.conv2dByMatMul(r,o,i,a,s,u);if(L().getBool("WEBGL_CONV_IM2COL")&&r.shape[0]===1)return this.conv2dWithIm2Row(r,o,i,a,s,u);var c=a!=null,l=u!=null,f=s?Fo(s,!1):null,h=new vc(i,c,f,l),p=[r,o];return a&&p.push(a),u&&p.push(u),this.compileAndRun(h,p)},t.prototype.conv2d=function(e,r,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,r,o);if(L().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,r,o);var i=new vc(o);return this.compileAndRun(i,[e,r])},t.prototype.conv2dDerInput=function(e,r,o){var i=new pm(o);return this.compileAndRun(i,[e,r])},t.prototype.conv2dDerFilter=function(e,r,o){var i=new hm(o);return this.compileAndRun(i,[e,r])},t.prototype.fusedDepthwiseConv2D=function(e){var r,o=e.input,i=e.filter,a=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=L().getBool("WEBGL_PACK_DEPTHWISECONV")&&a.strideWidth<=2&&a.outChannels/a.inChannels==1,f=u?Fo(u,l):null,h=[o,i],p=s!=null,d=c!=null;return p&&h.push(s),d&&h.push(c),l?(r=new gc(a,p,f,d),this.compileAndRun(r,h)):(r=new mc(a,p,f,d),this.compileAndRun(r,h))},t.prototype.depthwiseConv2D=function(e,r,o){var i;return L().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(i=new gc(o),this.compileAndRun(i,[e,r])):(i=new mc(o),this.compileAndRun(i,[e,r]))},t.prototype.depthwiseConv2DDerInput=function(e,r,o){var i=new gm(o);return this.compileAndRun(i,[e,r])},t.prototype.depthwiseConv2DDerFilter=function(e,r,o){var i=new mm(o);return this.compileAndRun(i,[e,r])},t.prototype.conv3d=function(e,r,o){var i=new ym(o);return this.compileAndRun(i,[e,r])},t.prototype.conv3dDerInput=function(e,r,o){var i=new vm(o);return this.compileAndRun(i,[e,r])},t.prototype.conv3dDerFilter=function(e,r,o){var i=new dm(o);return this.compileAndRun(i,[e,r])},t.prototype.maxPool=function(e,r){var o=new Ta(r,"max",!1);return this.compileAndRun(o,[e])},t.prototype.avgPool=function(e,r){var o=new Ta(r,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPoolBackprop=function(e,r,o,i){var a=new Ta(i,"max",!0),s=this.compileAndRun(a,[r]),u=new tg(i),c=this.compileAndRun(u,[e,s],r.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,r,o){var i=new tm(o);return this.compileAndRun(i,[e],r.dtype)},t.prototype.cast=function(e,r){return ef(e,r,this)},t.prototype.unstack=function(e,r){for(var o=e.shape[r],i=new Array(e.rank-1),a=0,s=0;s<e.rank;s++)s!==r&&(i[a++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[r]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[r]=s,l[s]=this.slice(e,u,c).reshape(i);return l},t.prototype.avgPool3d=function(e,r){var o=new Na(r,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,r,o){var i=new nm(o);return this.compileAndRun(i,[e],r.dtype)},t.prototype.maxPool3d=function(e,r){var o=new Na(r,"max",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,r,o,i){var a=new Na(i,"max",!0),s=this.compileAndRun(a,[r]),u=new ng(i),c=this.compileAndRun(u,[e,s],r.dtype);return s.dispose(),c},t.prototype.reshape=function(e,r){var o=this.texData.get(e.dataId);if(o.isPacked&&!Do(e.shape,r)&&(o.texture===null||!Do(o.shape,r))){var i=this.packedReshape(e,r);return D.makeTensorFromDataId(i.dataId,i.shape,i.dtype)}return rs(e,r)},t.prototype.resizeBilinear=function(e,r,o,i){var a=L().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new hg(e.shape,r,o,i):new fg(e.shape,r,o,i);return this.compileAndRun(a,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,r,o){var i=new lg(e,r,o);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighbor=function(e,r,o,i){var a=new dg(e.shape,r,o,i);return this.compileAndRun(a,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,r,o){var i=new pg(e,r,o);return this.compileAndRun(i,[e])},t.prototype.multinomial=function(e,r,o,i){var a=r?e:bn(e),s=a.shape[0],u=a.shape[1],c=new rg(s,u,o),l=c.getCustomSetupFunc(i);return this.compileAndRun(c,[a],"int32",l)},t.prototype.oneHot=function(e,r,o,i){var a=new og(e.size,r,o,i);return this.compileAndRun(a,[e])},t.prototype.diag=function(e){var r=new Cm(e.size);return this.compileAndRun(r,[e])},t.prototype.nonMaxSuppression=function(e,r,o,i,a){return ii("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Ts(e.dataSync(),r.dataSync(),o,i,a)},t.prototype.cropAndResize=function(e,r,o,i,a,s){var u=new bm(e.shape,r.shape,i,a,s);return this.compileAndRun(u,[e,r,o],"float32")},t.prototype.depthToSpace=function(e,r,o){R(r>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+r});var i=e.shape[0],a=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=a*r,l=s*r,f=u/(r*r),h=new Em(o==="NHWC"?[i,c,l,f]:[i,f,c,l],r,o);return this.compileAndRun(h,[e])},t.prototype.split=function(e,r,o){return rf(e,r,o)},t.prototype.scatterND=function(e,r,o){var i=fi(0,e,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,c=i.strides,l=i.outputSize,f=[l/u,u],h=e.reshape([s,a]),p=r.reshape([s,u]);if(l===0)return rs(tt([]),o);var d=q(0),v=new wc(s,a,h.rank,p.rank,c,f);return this.compileAndRun(v,[p,h,d]).reshape(o)},t.prototype.sparseToDense=function(e,r,o,i){var a=fi(0,e,o),s=a.sliceRank,u=a.numUpdates,c=a.strides,l=a.outputSize,f=new wc(u,s,e.rank,r.rank,c,[l,1]);return this.compileAndRun(f,[r,e,i]).reshape(o)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,r){var o=this.texData.get(e.dataId),i=new bc(Nm,e.shape,r),a=new bc(Am,e.shape,r),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(i,s),c=this.compileAndRun(a,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,r){var o=r.shape,i=o[o.length-1],a=jl(e,r),s=a[0],u=a[1],c=a[2],l=a[3],f=r.reshape([u,i]),h=e.reshape([e.size/c,c]),p=new Om(i,l,[u,c]);return this.compileAndRun(p,[h,f]).reshape(s)},t.prototype.fill=function(e,r,o){if((o=o||ho(r))==="string"){var i=ti(o,Y(e));return i.fill(r),D.makeTensor(i,e,o,this)}var a=new km(e,r),s=a.getCustomSetupFunc(r);return this.compileAndRun(a,[],o,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,r,o){return tf(e,r,o)},t.prototype.makeTensorInfo=function(e,r){var o=this.write(null,e,r);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:r}},t.prototype.makeOutput=function(e,r){var o=this.makeTensorInfo(e,r).dataId;return D.makeTensorFromDataId(o,e,r,this)},t.prototype.unpackTensor=function(e){var r=new Bg(e.shape);return this.runWebGLProgram(r,[e],e.dtype)},t.prototype.packTensor=function(e){var r=new ig(e.shape);return this.runWebGLProgram(r,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,r){var o=[ri(e.shape)].concat(oi(e.shape)),i={dtype:e.dtype,shape:o,dataId:e.dataId},a=[ri(r)].concat(oi(r)),s=new cg(a,o),u=this.runWebGLProgram(s,[i],e.dtype,null,!0);return{dataId:u.dataId,shape:r,dtype:u.dtype}},t.prototype.decode=function(e){var r,o=this.texData.get(e),i=o.isPacked,a=o.shape,s=o.dtype,u=Ea(a);return r=i?new _m(u):new wm(u),{dtype:s,shape:a,dataId:this.runWebGLProgram(r,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,r,o,i,a){var s=this;a===void 0&&(a=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===to.DENSE){var l=Yr(e.outputShape);c.texShape=l.map(function(x){return 2*x})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),Y(u.shape)===0)return c.values=Zr(u.dtype,0),u;var f=[],h=r.map(function(x){if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var b=s.texData.get(x.dataId);if(b.texture==null){if(!e.packedInputs&&Y(x.shape)<=L().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};e.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}else if(!!b.isPacked!=!!e.packedInputs)x=b.isPacked?s.unpackTensor(x):s.packTensor(x),f.push(x),b=s.texData.get(x.dataId);else if(b.isPacked&&!Do(b.shape,x.shape)){var w=x,_=x.shape;x.shape=b.shape,x=s.packedReshape(x,_),f.push(x),b=s.texData.get(x.dataId),w.shape=_}return s.uploadToGPU(x.dataId),{shape:x.shape,texData:b,isUniform:!1}});this.uploadToGPU(u.dataId);var p,d={shape:u.shape,texData:c,isUniform:!1},v=function(x,b,w){var _="";b.concat(w).forEach(function(E){var I=E.texData!=null&&E.texData.slice!=null&&E.texData.slice.flatOffset>0,A=E.isUniform?"uniform":E.texData.texShape;_+=E.shape+"_"+A+"_"+I});var T=x.userCode,S=x.constructor.name;return S+="_"+_+"_"+T}(e,h,d),m=this.getAndSaveBinary(v,function(){return function(x,b,w,_){var T=b.userCode,S=w.map(function(W,z){var G={logicalShape:W.shape,texShape:W.isUniform?null:W.texData.texShape,isUniform:W.isUniform,isPacked:!W.isUniform&&W.texData.isPacked,flatOffset:null};return W.texData!=null&&W.texData.slice!=null&&W.texData.slice.flatOffset>0&&(G.flatOffset=W.texData.slice.flatOffset),{name:b.variableNames[z],shapeInfo:G}}),E=S.map(function(W){return W.shapeInfo}),I={logicalShape:_.shape,texShape:_.texData.texShape,isUniform:!1,isPacked:_.texData.isPacked,flatOffset:null},A=$v(S,I,T,b.packedInputs),N=x.createProgram(A),O=null,P=x.getUniformLocation(N,"NAN",!1);L().getNumber("WEBGL_VERSION")===1&&(O=x.getUniformLocation(N,"INFINITY",!1));for(var M={},V=0;V<b.variableNames.length;V++){var U=b.variableNames[V];M[U]=x.getUniformLocation(N,U,!1),M["offset"+U]=x.getUniformLocation(N,"offset"+U,!1)}return{program:b,source:A,webGLProgram:N,uniformLocations:M,inShapeInfos:E,outShapeInfo:I,infLoc:O,nanLoc:P}}(s.gpgpu,e,h,d)}),g=this.activeTimers!=null;if(g&&(p=this.startTimer()),function(x,b,w,_,T){xc(b.inShapeInfos,w),xc([b.outShapeInfo],[_]);var S=_.texData.texture,E=_.texData.texShape;_.texData.isPacked?x.setOutputPackedMatrixTexture(S,E[0],E[1]):x.setOutputMatrixTexture(S,E[0],E[1]),x.setProgram(b.webGLProgram),L().getNumber("WEBGL_VERSION")===1&&b.infLoc!==null&&x.gl.uniform1f(b.infLoc,1/0),b.nanLoc!==null&&x.gl.uniform1f(b.nanLoc,NaN),w.forEach(function(I,A){var N=b.program.variableNames[A],O=b.uniformLocations[N],P=b.uniformLocations["offset"+N];if(O!=null)if(I.isUniform)if(Y(I.shape)<2)x.gl.uniform1f(O,I.uniformValues[0]);else{var M=I.uniformValues;M instanceof Float32Array||(M=new Float32Array(M)),x.gl.uniform1fv(O,M)}else I.texData.slice!=null&&P!=null&&x.gl.uniform1i(P,I.texData.slice.flatOffset),x.setInputMatrixTexture(I.texData.texture,O,A)}),T?.(x,b.webGLProgram),x.executeProgram()}(this.gpgpu,m,h,d,i),f.forEach(function(x){return s.disposeData(x.dataId)}),g&&(p=this.endTimer(p),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(p)})),!L().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&a===!1){var y=this.unpackTensor(u);return this.disposeData(u.dataId),y}return u},t.prototype.compileAndRun=function(e,r,o,i,a){a===void 0&&(a=!1),o=o||r[0].dtype;var s=this.runWebGLProgram(e,r,o,i,a);return D.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,r){return e in this.binaryCache||(this.binaryCache[e]=r()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(L().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(r){e.gpgpu.deleteProgram(e.binaryCache[r].webGLProgram),delete e.binaryCache[r]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=j(function(){if(!L().get("WEBGL_RENDER_FLOAT32_ENABLED")){var r=L().getBool("DEBUG");L().set("DEBUG",!1);var o=e.abs(q(1e-8)).dataSync()[0];if(L().set("DEBUG",r),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var r,o=this.texData.get(e),i=o.shape,a=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var f,h=this.activeTimers!=null;h&&(f=qt());var p=o.texShape;if(p==null&&(p=Xd(i,l),o.texShape=p),s!=null){var d=Ea(i),v=void 0,m=p[1],g=p[0],y=s instanceof Uint8Array;l?(m=(r=vo(p[0],p[1]))[0],g=r[1],v=new Tm(d,[g,m],y)):v=new Rm(d,[g,m],y);var x=this.makeTensorInfo([g,m],a);this.texData.get(x.dataId).usage=y?Ct.PIXELS:Ct.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(x.dataId),m,g,s);var b=this.runWebGLProgram(v,[x],a,null,!0),w=this.texData.get(b.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(x.dataId),this.texData.delete(b.dataId),o.values=null,h&&(this.uploadWaitMs+=qt()-f)}else{var _=this.acquireTexture(p,c,a,l);o.texture=_}}},t.prototype.convertAndCacheOnCPU=function(e,r){var o=this.texData.get(e),i=o.dtype;return this.releaseGPUData(e),r!=null&&(o.values=function(a,s){if(s==="float32"||s==="complex64")return a;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(a.length):new Uint8Array(a.length),c=0;c<u.length;++c)u[c]=Math.round(a[c]);return u}throw new Error("Unknown dtype "+s)}(r,i)),o.values},t.prototype.acquireTexture=function(e,r,o,i){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var a=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+a+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,r,i)},t.prototype.computeBytes=function(e,r){return e[0]*e[1]*Nl(r)},t}(Ql);Fl()&&D.registerBackend("webgl",function(){return new Wg},2);var Vg=k({square_:function(n){var t=C(n,"x","square"),e=[t];return D.runKernelFunc(function(r,o){return o([t]),r.square(t)},{x:t},null,"Square",{},e,[])}}),ro="SquaredDifference",yf=k({squaredDifference_:function(n,t){var e,r=C(n,"a","squaredDifference"),o=C(t,"b","squaredDifference");e=De(r,o),r=e[0],o=e[1],fe(r.shape,o.shape);var i={a:r,b:o},a=[r,o];return D.runKernelFunc(function(s,u){var c=s.squaredDifference(r,o);return u([r,o]),c},i,function(s,u){var c=u[0],l=u[1],f=q(2);return{a:function(){return s.mul(c.sub(l).mul(f))},b:function(){return s.mul(l.sub(c).mul(f))}}},ro,{},a,[])}}),Ug=k({abs_:function(n){var t=C(n,"x","abs");return t.dtype==="complex64"?D.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):D.runKernelFunc(function(e,r){var o=e.abs(t);return r([t]),o},{x:t},function(e,r){var o=r[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}},"Abs")}}),zg=k({acos_:function(n){var t=C(n,"x","acos");return D.runKernelFunc(function(e,r){var o=e.acos(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.divStrict(q(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),Gg=k({acosh_:function(n){var t=C(n,"x","acosh");return D.runKernelFunc(function(e,r){var o=e.acosh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),Hg=k({asin_:function(n){var t=C(n,"x","asin");return D.runKernelFunc(function(e,r){var o=e.asin(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.divStrict(q(1).sub(o.toFloat().square()).sqrt())}}})}}),Xg=k({asinh_:function(n){var t=C(n,"x","asinh");return D.runKernelFunc(function(e,r){var o=e.asinh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.divStrict(q(1).add(o.toFloat().square()).sqrt())}}})}}),qg=k({atan_:function(n){var t=C(n,"x","atan");return D.runKernelFunc(function(e,r){var o=e.atan(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}})}}),jg=k({atanh_:function(n){var t=C(n,"x","atanh");return D.runKernelFunc(function(e,r){var o=e.atanh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(q(1).sub(o.toFloat().square()))}}})}}),Kg=k({ceil_:function(n){var t=C(n,"x","ceil");return D.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),Ps=k({clipByValue_:function(n,t,e){var r=C(n,"x","clipByValue");R(t<=e,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."});var o=[r],i={min:t,max:e};return D.runKernelFunc(function(a,s){var u=a.clip(r,t,e);return s([r]),u},{x:r},function(a,s){var u=s[0];return{x:function(){return a.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),ge(a))}}},"ClipByValue",i,o)}}),$g=k({cos_:function(n){var t=C(n,"x","cos"),e=[t];return D.runKernelFunc(function(r,o){var i=r.cos(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return i.toFloat().sin().neg().mul(r)}}},"Cos",{},e)}}),Yg=k({cosh_:function(n){var t=C(n,"x","cosh");return D.runKernelFunc(function(e,r){var o=e.cosh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}})}}),Jg=k({erf_:function(n){var t=C(n,"x","erf");return R(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),D.runKernelFunc(function(e,r){var o=e.erf(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),is=k({exp_:function(n){var t=C(n,"x","exp");return D.runKernelFunc(function(e,r){var o=e.exp(t);return r([o]),o},{x:t},function(e,r){return{x:function(){return e.mulStrict(r[0])}}},"Exp",{},[],[!0])}}),Qg=k({expm1_:function(n){var t=C(n,"x","expm1");return D.runKernelFunc(function(e,r){var o=e.expm1(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.mul(o.exp())}}})}}),Zg=k({floor_:function(n){var t=C(n,"x","floor");return D.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),ey=k({log_:function(n){var t=C(n,"x","log"),e=[t];return D.runKernelFunc(function(r,o){var i=r.log(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return r.div(i.toFloat())}}},"Log",{},e)}}),ty=k({log1p_:function(n){var t=C(n,"x","log1p");return D.runKernelFunc(function(e,r){var o=e.log1p(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.add(1))}}})}}),ny=k({logSigmoid_:function(n){var t=C(n,"x","logSigmoid");return D.runKernelFunc(function(e,r){var o=e.softplus(t.neg()).neg();return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}})}}),vi=k({neg_:function(n){var t=C(n,"x","neg"),e=[t];return D.runKernelFunc(function(r){return r.neg(t)},{x:t},function(r){return{x:function(){return r.neg()}}},"Neg",{},e)}}),ry=k({reciprocal_:function(n){var t=C(n,"x","reciprocal");return D.runKernelFunc(function(e,r){var o=e.reciprocal(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.square().neg())}}})}}),oy=k({round_:function(n){var t=C(n,"x","round");return D.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),bf=k({rsqrt_:function(n){var t=C(n,"x","rsqrt"),e=[t];return D.runKernelFunc(function(r,o){var i=r.rsqrt(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return r.div(i.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),xf=k({sigmoid_:function(n){var t=C(n,"x","sigmoid");return D.runKernelFunc(function(e,r){var o=e.sigmoid(t);return r([o]),o},{x:t},function(e,r){var o=r[0];return{x:function(){return e.mul(o.mul(q(1).sub(o)))}}},"Sigmoid")}}),iy=k({sign_:function(n){var t=C(n,"x","sign");return D.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),ay=k({isNaN_:function(n){var t=C(n,"x","isNaN");return D.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),sy=k({isInf_:function(n){var t=C(n,"x","isInf");return D.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),uy=k({isFinite_:function(n){var t=C(n,"x","isFinite");return D.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),cy=k({sin_:function(n){var t=C(n,"x","sin"),e=[t];return D.runKernelFunc(function(r,o){var i=r.sin(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return i.toFloat().cos().mul(r)}}},"Sin",{},e)}}),ly=k({sinh_:function(n){var t=C(n,"x","sinh");return D.runKernelFunc(function(e,r){var o=e.sinh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}})}}),fy=k({softplus_:function(n){var t=C(n,"x","softplus");return D.runKernelFunc(function(e,r){var o=e.softplus(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.mul(o.sigmoid())}}})}}),hy=k({sqrt_:function(n){var t=C(n,"x","sqrt");return D.runKernelFunc(function(e,r){var o=e.sqrt(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}})}}),py=k({step_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","step");return D.runKernelFunc(function(r){return r.step(e,t)},{$x:e},function(r){return{$x:function(){return ge(r)}}})}}),dy=k({tan_:function(n){var t=C(n,"x","tan");return D.runKernelFunc(function(e,r){var o=e.tan(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.cos().square())}}})}}),vy=k({tanh_:function(n){var t=C(n,"x","tanh");return D.runKernelFunc(function(e,r){var o=e.tanh(t);return r([o]),o},{x:t},function(e,r){var o=r[0];return{x:function(){return q(1).sub(o.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function wf(n,t,e,r,o,i){var a,s,u=C(n,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),R(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),R(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),R(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),a!=null&&R(a.rank===2||a.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+a.rank+"."}),s!=null&&R(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),go(u,c,l,s,a,i)}function _f(n,t,e,r,o,i){var a,s,u=C(n,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),R(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),R(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),R(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),a!=null&&R(a.rank===3||a.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+a.rank+"."}),s!=null&&R(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),go(u,c,l,s,a,i)}function Ef(n,t,e,r,o,i){var a,s,u=C(n,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),R(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),R(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),R(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),a!=null&&R(a.rank===4||a.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+a.rank+"."}),s!=null&&R(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),go(u,c,l,s,a,i)}function go(n,t,e,r,o,i){i==null&&(i=.001);var a,s,u,c=C(n,"x","batchNorm"),l=C(t,"mean","batchNorm"),f=C(e,"variance","batchNorm");o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),R(l.rank===f.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),R(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),R(a==null||l.rank===a.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var h=[c,l,f,a];return D.runKernelFunc(function(p,d){var v=p.batchNormalization(u,Bo(l),Bo(f),i,Bo(a),Bo(s));return d([c,l,f,a]),v},{x:c,mean:l,variance:f,scale:a,offset:s},function(p,d){var v=d,m=v[0],g=v[1],y=v[2],x=v[3],b=x??q(1),w=Xe(g.shape,u.shape),_=[];if(g.rank===1){for(var T=0;T<u.shape.length-1;++T)_.push(u.shape[T]);_.push(1)}var S=m.sub(g),E=p.mul(b),I=bf(y.add(q(i))),A=I.mul(I).mul(I).mul(q(-.5));return{x:function(){return g.rank===1?p.mul(Er(I.as4D(1,1,1,g.shape[0]),_)).mul(b).reshape(m.shape):p.mul(I).mul(b).reshape(m.shape)},mean:function(){var N=I.mul(q(-1)).mul(E);return g.rank===1&&(N=N.sum(w)),N.reshape(g.shape)},variance:function(){var N=A.mul(S).mul(E);return g.rank===1&&(N=N.sum(w)),N.reshape(g.shape)},scale:function(){var N=S.mul(I),O=p.mul(N);return g.rank===1&&(O=O.sum(w)),O.reshape(g.shape)},offset:function(){var N=p;return g.rank===1&&(N=N.sum(w)),N.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:i},h).reshape(c.shape)}function Bo(n){return n==null?null:n.rank===0?n.as1D():n.rank===1?n:n.rank===2?n.as4D(1,1,n.shape[0],n.shape[1]):n.rank===3?n.as4D(1,n.shape[0],n.shape[1],n.shape[2]):n}function Pi(){Bl("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var my=k({batchNormalization2d_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),Pi(),wf(n,t,e,i,o,r)}}),gy=k({batchNormalization3d_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),Pi(),_f(n,t,e,i,o,r)}}),yy=k({batchNormalization4d_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),Pi(),Ef(n,t,e,i,o,r)}}),by=k({batchNormalization_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),Pi(),go(n,t,e,i,o,r)}}),Cf=k({batchNorm_:go}),xy=k({batchNorm2d_:wf}),wy=k({batchNorm3d_:_f}),_y=k({batchNorm4d_:Ef}),Mi=k({logicalAnd_:function(n,t){var e=C(n,"a","logicalAnd","bool"),r=C(t,"b","logicalAnd","bool");return fe(e.shape,r.shape),D.runKernelFunc(function(o){return o.logicalAnd(e,r)},{a:e,b:r},null,"LogicalAnd")}}),Ey=k({logicalNot_:function(n){var t=C(n,"x","logicalNot","bool");return D.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),Sf=k({logicalOr_:function(n,t){var e=C(n,"a","logicalOr","bool"),r=C(t,"b","logicalOr","bool");return fe(e.shape,r.shape),D.runKernelFunc(function(o){return o.logicalOr(e,r)},{$a:e,$b:r})}}),Cy=k({logicalXor_:function(n,t){var e=C(n,"a","logicalXor","bool"),r=C(t,"b","logicalXor","bool");return fe(e.shape,r.shape),Sf(n,t).logicalAnd(Mi(n,t).logicalNot())}}),Zn=k({where_:function(n,t,e){var r=C(t,"a","where"),o=C(e,"b","where"),i=C(n,"condition","where","bool");return we(r.shape,o.shape,"Error in where: "),i.rank===1?R(i.shape[0]===r.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):we(i.shape,o.shape,"Error in where: "),D.runKernelFunc(function(a,s){var u=a.select(i,r,o);return s([i]),u},{$condition:i,$a:r,$b:o},function(a,s){var u=s[0];return{$condition:function(){return ge(u).toFloat()},$a:function(){return a.mul(u.cast(a.dtype))},$b:function(){return a.mul(u.logicalNot().cast(a.dtype))}}})}}),If=function(n){return K(this,void 0,void 0,function(){var t,e,r;return $(this,function(o){switch(o.label){case 0:return[4,(t=C(n,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),r=As(t.shape,e),n!==t&&t.dispose(),[2,r]}})})},ce=k({add_:function(n,t){var e,r=C(n,"a","add"),o=C(t,"b","add");e=De(r,o),r=e[0],o=e[1];var i=fe(r.shape,o.shape);return D.runKernelFunc(function(a){return a.add(r,o)},{a:r,b:o},function(a){return{a:function(){var s=a,u=Xe(r.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)},b:function(){var s=a,u=Xe(o.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),Sy=k({addN_:function(n){R(Array.isArray(n),function(){return"The argument passed to tf.addN() must be a list of tensors"}),R(n.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+n.length});var t=n.map(function(o,i){return C(o,"tensors"+i,"addN")}),e=t[0];t.forEach(function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!Ye(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var r=t;return D.runKernelFunc(function(o){return o.addN(t)},r,function(o){var i={};return t.forEach(function(a,s){i[s]=function(){return o.clone()}}),i},"AddN")}}),Iy=k({addStrict_:function(n,t){var e=C(n,"a","addStrict"),r=C(t,"b","addStrict");return we(e.shape,r.shape,"Error in addStrict: "),e.add(r)}}),Ry=k({atan2_:function(n,t){var e,r=C(n,"a","atan2"),o=C(t,"b","atan2");e=De(r,o),r=e[0],o=e[1];var i=fe(r.shape,o.shape);return D.runKernelFunc(function(a,s){var u=a.atan2(r,o);return s([r,o]),u},{$a:r,$b:o},function(a,s){var u=s[0],c=s[1];return{$a:function(){var l=ce(u.square(),c.square()),f=a.mul(c.div(l)),h=Xe(u.shape,i);return h.length>0&&(f=f.sum(h)),f.reshape(u.shape)},$b:function(){var l=ce(u.square(),c.square()),f=vi(a.mul(u.div(l))),h=Xe(c.shape,i);return h.length>0&&(f=f.sum(h)),f.reshape(c.shape)}}})}}),Ft=k({div_:function(n,t){var e,r=C(n,"a","div"),o=C(t,"b","div");if(e=De(r,o),r=e[0],o=e[1],r.dtype==="int32"&&o.dtype==="int32")return Rf(r,o);var i=fe(r.shape,o.shape);return D.runKernelFunc(function(a,s){var u=a.realDivide(r,o);return s([r,o]),u},{a:r,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.div(c.toFloat()),f=Xe(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=Xe(c.shape,i);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"Div")}}),Ty=k({divNoNan_:function(n,t){var e,r=C(n,"a","div"),o=C(t,"b","div");r=(e=De(r,o))[0],o=e[1];var i=Ft(r,o),a=ge(i),s=o.equal(a);return Zn(s,a,i)}}),Ny=k({divStrict_:function(n,t){var e=C(n,"a","div"),r=C(t,"b","div");return we(e.shape,r.shape,"Error in divideStrict: "),e.div(r)}}),Rf=k({floorDiv_:function(n,t){var e,r=C(n,"a","floorDiv"),o=C(t,"b","floorDiv");e=De(r,o),r=e[0],o=e[1];var i=fe(r.shape,o.shape);return D.runKernelFunc(function(a,s){var u=a.floorDiv(r,o);return s([r,o]),u},{a:r,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.div(c.toFloat()),f=Xe(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=Xe(c.shape,i);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"FloorDiv")}}),Ms=k({maximum_:function(n,t){var e,r=C(n,"a","maximum"),o=C(t,"b","maximum");return e=De(r,o),r=e[0],o=e[1],r.dtype==="bool"&&(r=r.toInt(),o=o.toInt()),fe(r.shape,o.shape),D.runKernelFunc(function(i,a){var s=i.maximum(r,o);return a([r,o]),s},{a:r,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.greaterEqual(u).toFloat())},b:function(){return i.mul(s.less(u).toFloat())}}},"Maximum")}}),Ay=k({maximumStrict_:function(n,t){var e=C(n,"a","maximumStrict"),r=C(t,"b","maximumStrict");return we(e.shape,r.shape,"Error in maximumStrict: "),e.maximum(r)}}),Tf=k({minimum_:function(n,t){var e,r=C(n,"a","minimum"),o=C(t,"b","minimum");return e=De(r,o),r=e[0],o=e[1],r.dtype==="bool"&&(r=r.toInt(),o=o.toInt()),fe(r.shape,o.shape),D.runKernelFunc(function(i,a){var s=i.minimum(r,o);return a([r,o]),s},{a:r,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.lessEqual(u).toFloat())},b:function(){return i.mul(s.greater(u).toFloat())}}},"Minimum")}}),ky=k({minimumStrict_:function(n,t){var e=C(n,"a","minimumStrict"),r=C(t,"b","minimumStrict");return we(e.shape,r.shape,"Error in minimumStrict: "),e.minimum(r)}}),Dy=k({mod_:function(n,t){var e,r=C(n,"a","mod"),o=C(t,"b","mod");e=De(r,o),r=e[0],o=e[1];var i=fe(r.shape,o.shape);return D.runKernelFunc(function(a,s){var u=a.mod(r,o);return s([r,o]),u},{$a:r,$b:o},function(a,s){var u=s[0],c=s[1];return{$a:function(){var l=Xe(u.shape,i);return l.length>0?a.sum(l).reshape(u.shape):a},$b:function(){var l=a.mul(u.div(c).floor().neg()),f=Xe(c.shape,i);return f.length>0?l.sum(f).reshape(c.shape):l}}})}}),Oy=k({modStrict_:function(n,t){var e=C(n,"a","modStrict"),r=C(t,"b","modStrict");return we(e.shape,r.shape,"Error in modStrict: "),e.mod(r)}}),ut=k({mul_:function(n,t){var e,r=C(n,"a","mul"),o=C(t,"b","mul");e=De(r,o),r=e[0],o=e[1];var i=fe(r.shape,o.shape);return D.runKernelFunc(function(a,s){var u=a.multiply(r,o);return s([r,o]),u},{a:r,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.mul(c.toFloat()),f=Xe(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=Xe(c.shape,i);return f.length>0?l.sum(f).reshape(c.shape):l}}},"Mul")}}),Py=k({mulStrict_:function(n,t){var e=C(n,"a","mul"),r=C(t,"b","mul");return we(e.shape,r.shape,"Error in multiplyStrict: "),e.mul(r)}}),mi=k({pow_:function(n,t){var e,r=C(n,"base","pow"),o=C(t,"exp","pow");e=De(r,o),r=e[0],o=e[1];var i=fe(r.shape,o.shape),a=[r,o];return D.runKernelFunc(function(s,u){var c=s.pow(r,o);return u([r,o,c]),c},{a:r,b:o},function(s,u){var c=u[0],l=u[1],f=u[2];return{a:function(){var h=l.toFloat(),p=s.mul(h.mul(c.pow(h.sub(q(1))))),d=Xe(c.shape,i);return d.length>0&&(p=p.sum(d)),p.reshape(c.shape)},b:function(){var h=c.greater(0),p=c.log().where(h,ge(c)),d=s.mul(f.mul(p)),v=Xe(l.shape,i);return v.length>0&&(d=d.sum(v)),d.reshape(l.shape)}}},"Pow",{},a,[!0])}}),My=k({powStrict_:function(n,t){return we(n.shape,t.shape,"Error in powStrict: "),n.pow(t)}}),Fy=k({squaredDifferenceStrict_:function(n,t){var e=C(n,"a","squaredDifferenceStrict"),r=C(t,"b","squaredDifferenceStrict");return we(e.shape,r.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(r)}}),qe=k({sub_:function(n,t){var e,r=C(n,"a","sub"),o=C(t,"b","sub");e=De(r,o),r=e[0],o=e[1];var i=fe(r.shape,o.shape);return D.runKernelFunc(function(a){return a.subtract(r,o)},{a:r,b:o},function(a){return{a:function(){var s=a,u=Xe(r.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)},b:function(){var s=a,u=Xe(o.shape,i);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),By=k({subStrict_:function(n,t){var e=C(n,"a","subStrict"),r=C(t,"b","subStrict");return we(e.shape,r.shape,"Error in subStrict: "),e.sub(r)}}),Nf=k({equal_:function(n,t){var e,r=C(n,"a","equal"),o=C(t,"b","equal");return e=De(r,o),r=e[0],o=e[1],fe(r.shape,o.shape),D.runKernelFunc(function(i){return i.equal(r,o)},{$a:r,$b:o})}}),Ly=k({equalStrict_:function(n,t){var e=C(n,"a","equalStrict"),r=C(t,"b","equalStrict");return we(e.shape,r.shape,"Error in equalStrict: "),e.equal(r)}}),Wy=k({greater_:function(n,t){var e,r=C(n,"a","greater"),o=C(t,"b","greater");return e=De(r,o),r=e[0],o=e[1],fe(r.shape,o.shape),D.runKernelFunc(function(i){return i.greater(r,o)},{a:r,b:o},null,"Greater")}}),Af=k({greaterEqual_:function(n,t){var e,r=C(n,"a","greaterEqual"),o=C(t,"b","greaterEqual");return e=De(r,o),r=e[0],o=e[1],fe(r.shape,o.shape),D.runKernelFunc(function(i,a){var s=i.greaterEqual(r,o);return a([r,o]),s},{a:r,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return ge(s)},b:function(){return ge(u)}}},"GreaterEqual")}}),Vy=k({greaterEqualStrict_:function(n,t){var e=C(n,"a","greaterEqualStrict"),r=C(t,"b","greaterEqualStrict");return we(e.shape,r.shape,"Error in greaterEqualStrict: "),e.greaterEqual(r)}}),Uy=k({greaterStrict_:function(n,t){var e=C(n,"a","greaterStrict"),r=C(t,"b","greaterStrict");return we(e.shape,r.shape,"Error in greaterStrict: "),e.greater(r)}}),zy=k({less_:function(n,t){var e,r=C(n,"a","less"),o=C(t,"b","less");return e=De(r,o),r=e[0],o=e[1],fe(r.shape,o.shape),D.runKernelFunc(function(i){return i.less(r,o)},{a:r,b:o},null,"Less")}}),Gy=k({lessEqual_:function(n,t){var e,r=C(n,"a","lessEqual"),o=C(t,"b","lessEqual");return e=De(r,o),r=e[0],o=e[1],fe(r.shape,o.shape),D.runKernelFunc(function(i,a){var s=i.lessEqual(r,o);return a([r,o]),s},{a:r,b:o},null,"LessEqual")}}),Hy=k({lessEqualStrict_:function(n,t){var e=C(n,"a","lessEqualStrict"),r=C(t,"b","lessEqualStrict");return we(e.shape,r.shape,"Error in lessEqualStrict: "),e.lessEqual(r)}}),Xy=k({lessStrict_:function(n,t){var e=C(n,"a","lessStrict"),r=C(t,"b","lessStrict");return we(e.shape,r.shape,"Error in lessStrict: "),e.less(r)}}),qy=k({notEqual_:function(n,t){var e,r=C(n,"a","notEqual"),o=C(t,"b","notEqual");return e=De(r,o),r=e[0],o=e[1],fe(r.shape,o.shape),D.runKernelFunc(function(i){return i.notEqual(r,o)},{a:r,b:o},null,"NotEqual")}}),jy=k({notEqualStrict_:function(n,t){var e=C(n,"a","notEqualStrict"),r=C(t,"b","notEqualStrict");return we(e.shape,r.shape,"Error in notEqualStrict: "),e.notEqual(r)}});function Ac(n,t){for(var e=[],r=n;r<t;++r)e.push(r);return e}function kc(n){for(var t=[],e=0;e<n.length;++e)for(var r=0;r<n[e].length;++r)t.push(n[e][r]);return t}var Fs=k({gather_:function(n,t,e){e===void 0&&(e=0);var r=C(n,"x","gather"),o=C(t,"indices","gather","int32");e=je(e,r.shape)[0];var i=function(a,s,u){for(var c=a.shape[u],l=[],f=1,h=1,p=0;p<u;p++)l.push(a.shape[p]),f*=a.shape[p];for(p=0;p<s.rank;p++)l.push(s.shape[p]);for(p=u+1;p<a.rank;p++)l.push(a.shape[p]),h*=a.shape[p];return{batchSize:f,sliceSize:h,dimSize:c,outputShape:l}}(r,o,e);return D.runKernelFunc(function(a,s){var u=a.gather(r,o.flatten(),e);return s([o]),u},{x:r,indices:o},function(a,s){var u=s[0];return{x:function(){var c=r.shape,l=u.size,f=c.slice(0,e),h=f.length,p=c.slice(e,c.length).slice(1),d=p.length,v=Ac(0,h),m=Ac(h+1,h+1+d),g=kc([f,[l],p]),y=a.reshape(g),x=u.reshape([l]),b=kc([[h],v,m]),w=y.transpose(b),_=kf(w,x,r.shape[e]),T=_s(b);return _=_.transpose(T)},indices:function(){return u}}},"Gather",{axis:e}).reshape(i.outputShape)}}),kf=k({unsortedSegmentSum_:function(n,t,e){var r=C(n,"x","unsortedSegmentSum"),o=C(t,"segmentIds","unsortedSegmentSum","int32");return R(Le(e),function(){return"numSegments must be of dtype int"}),D.runKernelFunc(function(i,a){var s=i.unsortedSegmentSum(r,o,e);return a([o]),s},{$x:r},function(i,a){var s=a[0];return{$x:function(){return function(u,c){for(var l=Ms(c,ge(c)),f=Fs(u,l),h=Af(c,q(0,"int32")),p=f.rank-h.rank,d=0;d<p;++d)h=Nt(h,d+1);h=Mi(h,zr(f.shape,"bool"));var v=ge(f);return Zn(h,f,v)}(i,s)}}})}}),Ky=function(n,t,e){return K(this,void 0,void 0,function(){var r,o,i,a,s,u,c,l,f,h,p,d,v;return $(this,function(m){switch(m.label){case 0:for(r=C(n,"tensor","boolMask"),o=C(t,"mask","boolMask","bool"),i=e??0,a=o.rank,s=r.shape,R(a>0,function(){return"mask cannot be scalar"}),we(s.slice(i,i+a),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=i;c<i+a;c++)u*=s[c];return l=s.slice(0,i).concat([u],s.slice(i+a)),f=r.reshape(l),h=o.reshape([-1]),[4,If(h)];case 1:return p=m.sent(),d=p.squeeze([1]),v=Fs(f,d,i),n!==r&&r.dispose(),t!==o&&o.dispose(),d.dispose(),f.dispose(),h.dispose(),p.dispose(),[2,v]}})})};function Df(n,t,e,r,o,i,a){i===void 0&&(i="NHWC"),R(n.length===t.rank,function(){return"Length of inShape ("+n.length+") and rank of dy ("+t.rank+") must match"});var s=n,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,n[0],n[1],n[2]]),R(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),R(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),R(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=i==="NHWC"?s[3]:s[1],f=i==="NHWC"?u.shape[3]:u.shape[1];R(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),R(f===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+f+") must match output depth for filter "+e.shape[3]+"."}),a!=null&&R(Le(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var h=Rs(i),p=sr(s,e.shape,r,1,o,a,!1,h),d=D.runKernelFunc(function(v,m){var g=v.conv2dDerInput(u,e,p);return m([e,u]),g},{dy4D:u,filter:e},function(v,m){var g=m[0],y=m[1];return{dy4D:function(){return Pt(v,g,r,o,i,1,a)},filter:function(){return Bs(v,y,g.shape,r,o,i,a)}}});return c?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}function ka(n){var t=function(i){return typeof i=="number"?[i,i,i]:i.length===2?[i[0],i[1],1]:i}(n),e=t[0],r=t[1],o=t[2];return e===1&&r===1&&o===1}function Of(n,t,e,r,o){R(n.length===t.rank,function(){return"Length of inShape ("+n.length+") and rank of dy ("+t.rank+") must match"});var i=n,a=t,s=!1;t.rank===4&&(s=!0,a=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),i=[1,n[0],n[1],n[2],n[3]]);var u=i[4],c=a.shape[4];R(i.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+i.length+"."}),R(a.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+a.rank}),R(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),R(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),R(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=pi(i,e.shape,r,1,o),f=D.runKernelFunc(function(h){return h.conv3dDerInput(a,e,l)},{dy5D:a});return s?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}var $y=k({conv1d_:function(n,t,e,r,o,i,a){o===void 0&&(o="NWC"),i===void 0&&(i=1);var s=C(n,"x","conv1d"),u=C(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),R(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),R(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),a!=null&&R(Le(r),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."}),R(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),R(bt(e,i),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+i+"'"}),R(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var f=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),h=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),p=Pt(h,f,[1,e],r,"NHWC",[1,i],a);return l?p.as2D(p.shape[2],p.shape[3]):p.as3D(p.shape[0],p.shape[2],p.shape[3])}}),Pt=k({conv2d_:function(n,t,e,r,o,i,a){o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]);var s=C(n,"x","conv2d"),u=C(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),R(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),R(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),a!=null&&R(Le(r),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."});var f=o==="NHWC"?c.shape[3]:c.shape[1];R(f===u.shape[2],function(){return"Error in conv2d: depth of input ("+f+") must match input depth for filter "+u.shape[2]+"."}),R(bt(e,i),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"});var h=Rs(o),p=sr(c.shape,u.shape,e,i,r,a,!1,h),d=[u,c],v=D.runKernelFunc(function(m,g){var y=m.conv2d(c,u,p);return g([u,c]),y},{x:c,filter:u},function(m,g){var y=g,x=y[0],b=y[1];return R(Pr(i),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"}),{x:function(){return Pf(b.shape,m,x,e,r,o)},filter:function(){return Bs(b,m,x.shape,e,r,o)}}},"Conv2D",p,d);return l?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),Yy=k({conv3d_:function(n,t,e,r,o,i){o===void 0&&(o="NDHWC"),i===void 0&&(i=[1,1,1]);var a=C(n,"x","conv3d"),s=C(t,"filter","conv3d"),u=a,c=!1;a.rank===4&&(c=!0,u=a.as5D(1,a.shape[0],a.shape[1],a.shape[2],a.shape[3])),R(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),R(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),R(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),R(function(h,p){return ka(h)||ka(p)}(e,i),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),R(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=pi(u.shape,s.shape,e,i,r),f=D.runKernelFunc(function(h,p){var d=h.conv3d(u,s,l);return p([u,s]),d},{x:u,$filter:s},function(h,p){R(ka(i),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"});var d=p[0],v=p[1];return{x:function(){return Of(d.shape,h,v,e,r)},$filter:function(){return function(m,g,y,x,b){var w=m;m.rank===4&&(w=m.as5D(1,m.shape[0],m.shape[1],m.shape[2],m.shape[3]));var _=g;_.rank===4&&(_=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),R(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),R(_.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+_.shape+"."}),R(y.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+y+"."}),R(w.shape[4]===y[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+y[3]+"."}),R(_.shape[4]===y[4],function(){return"Error in conv3dDerFilter: depth of dy ("+_.shape[4]+") must match output depth for filter ("+y[4]+")."});var T=pi(w.shape,y,x,1,b);return D.runKernelFunc(function(S){return S.conv3dDerFilter(w,_,T)},{x5D:w,dy5D:_})}(d,h,v.shape,e,r)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Bs=k({conv2dDerFilter_:function(n,t,e,r,o,i,a){i===void 0&&(i="NHWC");var s=n;n.rank===3&&(s=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),R(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),R(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),R(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=i==="NHWC"?s.shape[3]:s.shape[1],l=i==="NHWC"?u.shape[3]:u.shape[1];R(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),R(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),a!=null&&R(Le(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var f=Rs(i),h=sr(s.shape,e,r,1,o,a,!1,f);return D.runKernelFunc(function(p){return p.conv2dDerFilter(s,u,h)},{x4D:s,dy4D:u})}}),Pf=k({conv2dDerInput_:Df}),Fi=k({depthwiseConv2d_:function(n,t,e,r,o,i,a){i===void 0&&(i=[1,1]);var s=C(n,"x","depthwiseConv2d"),u=C(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),R(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),R(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),R(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),i==null&&(i=[1,1]),R(bt(e,i),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),a!=null&&R(Le(r),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."});var f=sr(c.shape,u.shape,e,i,r,a,!0),h=[c,u],p=D.runKernelFunc(function(d,v){var m=d.depthwiseConv2D(c,u,f);return v([c,u]),m},{x:c,filter:u},function(d,v){R(Pr(i),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+i+"'"});var m=v[0],g=v[1];return{x:function(){return Mf(m.shape,d,g,f)},filter:function(){return Ff(m,d,g.shape,f)}}},"DepthwiseConv2dNative",f,h);return l?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}}),Mf=k({depthwiseConv2dDerInput_:function(n,t,e,r){var o=t,i=!1;t.rank===3&&(i=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var a=D.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,e,r)},{dy4D:o});return i?a.as3D(a.shape[1],a.shape[2],a.shape[3]):a}}),Ff=k({depthwiseConv2dDerFilter_:function(n,t,e,r){var o=n;n.rank===3&&(o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t;return i.rank===3&&(i=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),D.runKernelFunc(function(a){return a.depthwiseConv2DDerFilter(o,i,r)},{x4D:o,dy4D:i})}}),Ls=k({separableConv2d_:function(n,t,e,r,o,i,a){i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC");var s=C(n,"x","separableConv2d"),u=C(t,"depthwiseFilter","separableConv2d"),c=C(e,"pointwiseFilter","separableConv2d"),l=s,f=!1;if(s.rank===3&&(f=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");R(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),R(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),R(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),R(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),R(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var h=u.shape[2],p=u.shape[3];R(c.shape[2]===h*p,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+h*p+", but got "+c.shape[2]+"."});var d=Fi(l,u,r,o,a,i),v=Pt(d,c,1,"valid",a);return f?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),Jy=k({conv2dTranspose_:function(n,t,e,r,o,i){return Df(e,C(n,"x","conv2dTranspose"),C(t,"filter","conv2dTranspose"),r,o,"NHWC",i)}}),Qy=k({conv3dTranspose_:function(n,t,e,r,o){return Of(e,C(n,"x","conv3dTranspose"),C(t,"filter","conv3dTranspose"),r,o)}}),Bi=k({matMul_:function(n,t,e,r){var o;e===void 0&&(e=!1),r===void 0&&(r=!1);var i=C(n,"a","matMul"),a=C(t,"b","matMul");o=De(i,a),i=o[0],a=o[1];var s=e?i.shape[i.rank-2]:i.shape[i.rank-1],u=r?a.shape[a.rank-1]:a.shape[a.rank-2],c=e?i.shape[i.rank-1]:i.shape[i.rank-2],l=r?a.shape[a.rank-2]:a.shape[a.rank-1],f=i.shape.slice(0,-2),h=a.shape.slice(0,-2),p=Y(f),d=Y(h);R(i.rank>=2&&a.rank>=2&&i.rank===a.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+i.rank+" and "+a.rank+"."}),R(Ye(f,h),function(){return"Error in matMul: outer dimensions ("+f+") and ("+h+") of Tensors with shapes "+i.shape+" and "+a.shape+" must match."}),R(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+i.shape+" and "+a.shape+" and transposeA="+e+" and transposeB="+r+" must match."});var v=i.shape.slice(0,-2).concat([c,l]),m=e?i.as3D(p,s,c):i.as3D(p,c,s),g=r?a.as3D(d,l,u):a.as3D(d,u,l),y={transposeA:e,transposeB:r};return D.runKernelFunc(function(x,b){var w=x.batchMatMul(m,g,e,r);return b([m,g]),w},{a:m,b:g},function(x,b){var w=b,_=w[0],T=w[1];return e||r?!e&&r?{a:function(){return x.matMul(T,!1,!1)},b:function(){return x.matMul(_,!0,!1)}}:e&&!r?{a:function(){return T.matMul(x,!1,!0)},b:function(){return _.matMul(x,!1,!1)}}:{a:function(){return T.matMul(x,!0,!0)},b:function(){return x.matMul(_,!0,!0)}}:{a:function(){return x.matMul(T,!1,!0)},b:function(){return _.matMul(x,!0,!1)}}},"BatchMatMul",y).reshape(v)}}),Zy=k({dot_:function(n,t){var e=C(n,"t1","dot"),r=C(t,"t2","dot");R(!(e.rank!==1&&e.rank!==2||r.rank!==1&&r.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+r.rank+"."});var o=e.rank===1?e.size:e.shape[1],i=r.rank===1?r.size:r.shape[0];return R(o===i,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+i+"."}),e.rank===1&&r.rank===1?e.as2D(1,-1).matMul(r.as2D(-1,1)).asScalar():e.rank===1&&r.rank===2?e.as2D(1,-1).matMul(r.as2D(r.shape[0],r.shape[1])).as1D():e.rank===2&&r.rank===1?e.matMul(r.as2D(-1,1)).as1D():e.matMul(r.as2D(r.shape[0],r.shape[1]))}}),e0=k({outerProduct_:function(n,t){var e=C(n,"v1","outerProduct"),r=C(t,"v2","outerProduct");return R(e.rank===1&&r.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+r.rank+"."}),e.as2D(-1,1).matMul(r.as2D(1,-1))}}),yo=k({reverse_:function(n,t){var e=C(n,"x","reverse");if(e.rank===0)return e.clone();var r=je(t,e.shape);return D.runKernelFunc(function(o){return o.reverse(e,r)},{$x:e},function(o){return{$x:function(){return o.reverse(r)}}}).reshapeAs(e)}}),t0=k({reverse1d_:function(n){var t=C(n,"x","reverse");return R(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),yo(t,0)}}),n0=k({reverse2d_:function(n,t){var e=C(n,"x","reverse");return R(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),yo(e,t)}}),r0=k({reverse3d_:function(n,t){var e=C(n,"x","reverse");return R(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),yo(e,t)}}),o0=k({reverse4d_:function(n,t){var e=C(n,"x","reverse");return R(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),yo(e,t)}});function Bf(n,t,e,r,o,i){var a=C(n,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),R(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),R(bt(e,r),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+r+"'"}),i!=null&&R(Le(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var c=no(s.shape,t,e,r,o,i);if(c.filterWidth===1&&c.filterHeight===1&&Ye(c.inShape,c.outShape))return a.clone();var l=[s],f=D.runKernelFunc(function(h,p){var d=h.maxPool(s,c);return p([s,d]),d},{x:s},function(h,p){var d=p[0],v=p[1];return{x:function(){return function(m,g,y,x,b,w,_,T){var S=C(m,"dy","maxPoolBackprop"),E=C(g,"input","maxPoolBackprop"),I=C(y,"output","maxPoolBackprop");R(E.rank===S.rank,function(){return"Rank of input ("+E.rank+") does not match rank of dy ("+S.rank+")"}),R(bt(b,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+b+" and dilations '"+w+"'"}),R(S.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+S.rank+"."}),R(E.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+E.rank+"."});var A=no(E.shape,x,b,w,_,T);return D.runKernelFunc(function(N){return N.maxPoolBackprop(S,E,I,A)},{$dy:S,$input:E})}(h,d,v,t,e,r,o)}}},"MaxPool",c,l);return u?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}function Lf(n,t,e,r,o,i){var a=C(n,"x","avgPool","float32");R(bt(e,r),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+r+"'"});var s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),R(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),i!=null&&R(Le(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var c=no(s.shape,t,e,r,o,i);if(c.filterWidth===1&&c.filterHeight===1&&Ye(c.inShape,c.outShape))return a.clone();var l=D.runKernelFunc(function(f){return f.avgPool(s,c)},{x:s},function(f){return{x:function(){return function(h,p,d,v,m,g){var y=C(h,"dy","avgPoolBackprop"),x=C(p,"input","avgPoolBackprop");R(x.rank===y.rank,function(){return"Rank of input ("+x.rank+") does not match rank of dy ("+y.rank+")"}),R(bt(v,m),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+m+"'"});var b=x,w=y,_=!1;x.rank===3&&(_=!0,b=x.as4D(1,x.shape[0],x.shape[1],x.shape[2]),w=y.as4D(1,y.shape[0],y.shape[1],y.shape[2])),R(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),R(b.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+b.rank+"."});var T=no(b.shape,d,v,m,g),S=D.runKernelFunc(function(E){return E.avgPoolBackprop(w,b,T)},{dy4D:w,input4D:b});return _?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}(f,s,t,e,r,o)}}},"AvgPool",c);return l=l.cast(a.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var $e=k({maxPool_:function(n,t,e,r,o){return Bf(n,t,e,1,r,o)}}),bo=k({avgPool_:function(n,t,e,r,o){return Lf(n,t,e,1,r,o)}}),i0=k({pool_:function(n,t,e,r,o,i){o==null&&(o=[1,1]),i==null&&(i=1),r===0&&(r="valid");var a=C(n,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),R(bt(i,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+i+" and dilations '"+o+"'"});var c,l=no(s.shape,t,i,o,r),f=[l.dilationHeight,l.dilationWidth];c=r==="same"?function(b,w){var _=b.map(function(E,I){return E+(E-1)*(w[I]-1)}).map(function(E){return E-1}),T=_.map(function(E){return Math.floor(E/2)}),S=_.map(function(E,I){return E-T[I]});return _.map(function(E,I){return[T[I],S[I]]})}([l.filterHeight,l.filterWidth],f):[[0,0],[0,0]];var h=f[0]===1&&f[1]===1,p=function(b,w,_){var T=_.map(function(P){return P[0]}),S=_.map(function(P){return P[1]}),E=b.concat(T,S),I=w.map(function(P,M){return(P-E[M]%P)%P}),A=S.map(function(P,M){return P+I[M]}),N=w.map(function(P,M){return[T[M],A[M]]}),O=w.map(function(P,M){return[0,I[M]]});return[N,O]}([l.inHeight,l.inWidth],f,c),d=p[0],v=p[1],m=h?r:"valid",g=h?s:Gl(s,f,d),y=(e==="avg"?function(){return Lf(g,t,i,1,m)}:function(){return Bf(g,t,i,1,m)})(),x=h?y:Vl(y,f,v);return u?x.as3D(x.shape[1],x.shape[2],x.shape[3]):x}}),a0=k({maxPool3d_:function(n,t,e,r,o,i,a){i===void 0&&(i="NDHWC");var s=C(n,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),R(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),R(i==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+i}),R(bt(e,a),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),o!=null&&R(Le(r),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."});var l=hi(u.shape,t,e,a,r,o,i),f=D.runKernelFunc(function(h,p){var d=h.maxPool3d(u,l);return p([u,d]),d},{x:u},function(h,p){var d=p[0],v=p[1];return{x:function(){return function(m,g,y,x,b,w,_,T){var S=C(m,"dy","maxPool3dBackprop"),E=C(g,"input","maxPool3dBackprop"),I=C(y,"output","maxPool3dBackprop"),A=S,N=E,O=I,P=!1;E.rank===4&&(P=!0,A=S.as5D(1,S.shape[0],S.shape[1],S.shape[2],S.shape[3]),N=E.as5D(1,E.shape[0],E.shape[1],E.shape[2],E.shape[3]),O=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3])),R(A.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+A.rank+"."}),R(N.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+N.rank+"."}),R(O.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+O.rank+"."}),w==null&&(w=[1,1,1]),R(bt(b,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+b+" and dilations '"+w+"'"}),T!=null&&R(Le(_),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+T+" but got pad "+_+"."});var M=hi(N.shape,x,b,w,_,T),V=D.runKernelFunc(function(U){return U.maxPool3dBackprop(A,N,O,M)},{dy5D:A,input5D:N});return P?V.as4D(V.shape[1],V.shape[2],V.shape[3],V.shape[4]):V}(h,d,v,t,e,a,r,o)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),s0=k({avgPool3d_:function(n,t,e,r,o,i,a){i===void 0&&(i="NDHWC");var s=C(n,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),R(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),R(i==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+i}),R(bt(e,a),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),o!=null&&R(Le(r),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."});var l=hi(u.shape,t,e,a,r,o,i),f=D.runKernelFunc(function(h){return h.avgPool3d(u,l)},{x:u},function(h){return{x:function(){return function(p,d,v,m,g,y,x){var b=C(p,"dy","avgPool3dBackprop"),w=C(d,"input","avgPool3dBackprop"),_=b,T=w,S=!1;w.rank===4&&(S=!0,_=b.as5D(1,b.shape[0],b.shape[1],b.shape[2],b.shape[3]),T=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),R(_.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+_.rank+"."}),R(T.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+T.rank+"."}),g==null&&(g=[1,1,1]),R(bt(m,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+g+"'"}),x!=null&&R(Le(y),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+x+" but got pad "+y+"."});var E=hi(T.shape,v,m,g,y,x),I=D.runKernelFunc(function(A){return A.avgPool3dBackprop(_,T,E)},{dy5D:_,input5D:T});return S?I.as4D(I.shape[1],I.shape[2],I.shape[3],I.shape[4]):I}(h,u,t,e,a,r,o)}}});return f=f.cast(u.dtype),c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Zt=k({slice_:function(n,t,e){var r,o,i=C(n,"x","slice");if(i.rank===0)throw new Error("Slicing scalar is not possible");(r=typeof t=="number"?[t].concat(new Array(i.rank-1).fill(0)):t.length<i.rank?t.concat(new Array(i.rank-t.length).fill(0)):t.slice()).forEach(function(u){R(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=e==null?new Array(i.rank).fill(-1):typeof e=="number"?[e].concat(new Array(i.rank-1).fill(-1)):e.length<i.rank?e.concat(new Array(i.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(R(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),i.shape[c]-r[c])}),Mv(i,r,o);var a=i.shape,s={begin:r,size:o};return D.runKernelFunc(function(u){return u.slice(i,r,o)},{x:i},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([r[l],a[l]-r[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),u0=k({slice1d_:function(n,t,e){var r=C(n,"x","slice1d");return R(r.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+r.rank+" tensor"}),Zt(r,[t],[e])}}),c0=k({slice2d_:function(n,t,e){var r=C(n,"x","slice2d");return R(r.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+r.rank+" tensor"}),Zt(r,t,e)}}),Wf=k({slice3d_:function(n,t,e){var r=C(n,"x","slice3d");return R(r.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+r.rank+" tensor"}),Zt(r,t,e)}}),l0=k({slice4d_:function(n,t,e){var r=C(n,"x","slice4d");return R(r.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+r.rank+" tensor"}),Zt(r,t,e)}});function Vf(n,t,e,r,o){return t.rank<e.rank&&(t=t.reshape(yt(t.shape,r))),n.rank<e.rank&&(n=n.reshape(yt(n.shape,r))),{x:function(){var i=n.mul(e.equal(t).cast(n.dtype));return o==null?i:i.transpose(o)}}}var f0=k({all_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","all","bool"),o=je(t,r.shape),i=o,a=tn(i,r.rank);a!=null&&(r=r.transpose(a),i=nn(i.length,r.rank));var s=D.runKernelFunc(function(c){return c.all(r,i)},{$x:r});if(e){var u=yt(s.shape,o);return s.reshape(u)}return s}}),h0=k({any_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","any","bool"),o=je(t,r.shape),i=o,a=tn(i,r.rank);a!=null&&(r=r.transpose(a),i=nn(i.length,r.rank));var s=D.runKernelFunc(function(c){return c.any(r,i)},{$x:r});if(e){var u=yt(s.shape,o);return s.reshape(u)}return s}}),p0=k({argMax_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","argMax");t==null&&(t=0);var r=je(t,e.shape),o=tn(r,e.rank);o!=null&&(e=e.transpose(o),r=nn(r.length,e.rank));var i={axis:r[0]},a=[e];return D.runKernelFunc(function(s,u){var c=s.argMax(e,r[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return ge(c)}}},"ArgMax",i,a)}}),d0=k({argMin_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","argMin");t==null&&(t=0);var r=je(t,e.shape),o=tn(r,e.rank);return o!=null&&(e=e.transpose(o),r=nn(r.length,e.rank)),D.runKernelFunc(function(i,a){var s=i.argMin(e,r[0]);return a([e]),s},{$x:e},function(i,a){var s=a[0];return{$x:function(){return ge(s)}}})}}),v0=k({logSumExp_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","logSumExp"),o=je(t,r.shape),i=r.max(o,!0),a=r.sub(i).exp().sum(o).log(),s=i.reshape(a.shape).add(a);if(e){var u=yt(s.shape,o);return s.reshape(u)}return s}}),Li=k({max_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","max"),o=r,i=je(t,r.shape),a=i,s=tn(a,r.rank);s!=null&&(r=r.transpose(s),a=nn(a.length,r.rank));var u=[r],c=D.runKernelFunc(function(f,h){var p=f.max(r,a);return h([o,p]),p},{x:r},function(f,h){return Vf(f,h[1],h[0],i,s)},"Max",{axes:a},u,[!0]);if(e){var l=yt(c.shape,i);c=c.reshape(l)}return c}}),m0=k({mean_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","mean"),o=je(t,r.shape),i=Y(ot(r.shape,o)[1]);return Oi(function(a){var s=q(i);return{value:(s.dtype===a.dtype?a:a.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=a.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(zr(a.shape,"float32")).div(i)}}})(r)}}),g0=k({min_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","min"),o=r,i=je(t,r.shape),a=i,s=tn(a,r.rank);s!=null&&(r=r.transpose(s),a=nn(a.length,r.rank));var u=[r],c=D.runKernelFunc(function(f,h){var p=f.min(r,a);return h([o,p]),p},{x:r},function(f,h){return Vf(f,h[1],h[0],i,s)},"Min",{axes:a},u,[!0]);if(e){var l=yt(c.shape,i);c=c.reshape(l)}return c}}),y0=k({moments_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=je(t,(n=C(n,"x","moments")).shape),o=n.mean(r,e),i=o.shape;e||(i=yt(o.shape,r));var a=n.toFloat().sub(o.reshape(i)).square();return{mean:o,variance:a.mean(r,e)}}}),Uf=k({sum_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","sum");r.dtype==="bool"&&(r=r.toInt());var o=je(t,r.shape);return Oi(function(i){var a=tn(o,i.rank),s=o,u=i;a!=null&&(u=i.transpose(a),s=nn(s.length,i.rank));var c=function(p){var d=i.shape.slice();return o.forEach(function(v){d[v]=1}),p.reshape(d).mul(zr(i.shape,"float32"))},l={axes:s},f=D.runKernelFunc(function(p){return p.sum(u,s)},{x:u},function(p){return{x:function(){return c(p)}}},"Sum",l);if(e){var h=yt(f.shape,o);f=f.reshape(h)}return{value:f,gradFunc:c}})(r)}}),b0=k({prod_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","prod");r.dtype==="bool"&&(r=r.toInt());var o=je(t,r.shape),i=tn(o,r.rank),a=o,s=r;i!=null&&(s=r.transpose(i),a=nn(a.length,r.rank));var u=D.runKernelFunc(function(l){return l.prod(s,a)},{permutedX:s});if(e){var c=yt(u.shape,o);u=u.reshape(c)}return u}}),zf=k({elu_:function(n){var t=C(n,"x","elu");return D.runKernelFunc(function(e,r){var o=e.elu(t);return r([o]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return D.runKernelFunc(function(i){return i.eluDer(e,o)},{dy:e,y:o})}}})}}),x0=k({leakyRelu_:function(n,t){t===void 0&&(t=.2);var e=C(n,"x","leakyRelu");return Ms(q(t).mul(e),e)}}),Gf=k({prelu_:function(n,t){var e=C(n,"x","prelu"),r=C(t,"alpha","prelu");return D.runKernelFunc(function(o,i){var a=o.prelu(e,r);return i([e,r]),a},{x:e,alpha:r},function(o,i){var a=i[0],s=i[1],u=a.greater(0);return{x:function(){return Zn(u,o,o.mul(s))},alpha:function(){var c=Zn(u,ge(o),o.mul(a)),l=Xe(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),Ae=k({relu_:function(n){var t=C(n,"x","relu");return t.dtype==="bool"?t.toInt():D.runKernelFunc(function(e,r){var o=e.relu(t);return r([t]),o},{x:t},function(e,r){var o=r[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}},"Relu")}}),Hf=k({relu6_:function(n){var t=C(n,"x","relu6");return t.dtype==="bool"?t.toInt():D.runKernelFunc(function(e,r){var o=e.relu6(t);return r([t]),o},{x:t},function(e,r){var o=r[0],i=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(i.toFloat())}}},"Relu6")}}),w0=k({selu_:function(n){var t=C(n,"x","selu");return D.runKernelFunc(function(e,r){var o=e.selu(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){var i=o.greater(q(0)),a=q(Ds),s=q(Os),u=e.mul(s),c=e.mul(a).mul(o.toFloat().exp());return Zn(i,u,c)}}})}}),Bn=k({transpose_:function(n,t){var e=C(n,"x","transpose");if(t==null&&(t=e.shape.map(function(o,i){return i}).reverse()),R(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."}),t.forEach(function(o){R(o>=0&&o<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t})}),e.rank<=1)return e.clone();var r={perm:t};return D.runKernelFunc(function(o){return o.transpose(e,t)},{x:e},function(o){var i=_s(t);return{x:function(){return o.transpose(i)}}},"Transpose",r)}}),_0=k({localResponseNormalization_:function(n,t,e,r,o){t===void 0&&(t=5),e===void 0&&(e=1),r===void 0&&(r=1),o===void 0&&(o=.5);var i=C(n,"x","localResponseNormalization");R(i.rank===4||i.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+i.rank+"."}),R(Le(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var a=i,s=!1;i.rank===3&&(s=!0,a=i.as4D(1,i.shape[0],i.shape[1],i.shape[2]));var u=D.runKernelFunc(function(c,l){var f=c.localResponseNormalization4D(a,t,e,r,o);return l([a,f]),f},{x4D:a},function(c,l){var f=l[0],h=l[1];return{x4D:function(){return D.runKernelFunc(function(p){return p.LRNGrad(c,f,h,t,e,r,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Xf=k({norm_:function(n,t,e,r){t===void 0&&(t="euclidean"),e===void 0&&(e=null),r===void 0&&(r=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(q(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(n=C(n,"x","norm"),t,e),i=o.shape;if(r){var a=je(e,n.shape);i=yt(o.shape,a)}return o.reshape(i)}}),E0=k({basicLSTMCell_:function(n,t,e,r,o,i){var a=C(n,"forgetBias","basicLSTMCell"),s=C(t,"lstmKernel","basicLSTMCell"),u=C(e,"lstmBias","basicLSTMCell"),c=C(r,"data","basicLSTMCell"),l=C(o,"c","basicLSTMCell"),f=C(i,"h","basicLSTMCell"),h=c.concat(f,1).matMul(s).add(u),p=h.shape[0],d=h.shape[1]/4,v=[p,d],m=h.slice([0,0],v),g=h.slice([0,d],v),y=h.slice([0,2*d],v),x=h.slice([0,3*d],v),b=m.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(a.add(y).sigmoid())),w=b.tanh().mulStrict(x.sigmoid());return[b,w]}}),C0=k({multiRNNCell_:function(n,t,e,r){for(var o=C(t,"data","multiRNNCell"),i=ai(e,"c","multiRNNCell"),a=ai(r,"h","multiRNNCell"),s=o,u=[],c=0;c<n.length;c++){var l=n[c](s,i[c],a[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var f=[],h=[];for(c=0;c<u.length;c+=2)f.push(u[c]),h.push(u[c+1]);return[f,h]}}),S0=k({movingAverage_:function(n,t,e,r,o){o===void 0&&(o=!0);var i=C(n,"v","movingAverage"),a=C(t,"x","movingAverage"),s=C(e,"decay","movingAverage");_d(i,a),R(Ye(i.shape,a.shape),function(){return"Shape mismatch in v and x"});var u=q(1),c=u.sub(s),l=a.sub(i).mul(c);if(o){R(r!=null,function(){return"When using zeroDebias: true, step is required."});var f=C(r,"step","movingAverage");l=l.div(u.sub(mi(s,f)))}return i.add(l)}}),I0=k({stridedSlice_:function(n,t,e,r,o,i,a,s,u){if(o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),r==null&&(r=new Array(t.length)),a!==0)throw new Error("ellipsis mask is not yet supported");var c=C(n,"x","stridedSlice"),l=lc(s),f=c.shape.slice();l.forEach(function(m){t[m]=0,e[m]=1,f.splice(m,0,1)}),c=c.reshape(f);for(var h=0;h<c.rank;h++)t[h]=Fv(o,t,r,c.shape,h),e[h]=Bv(i,e,r,c.shape,h),r[h]=r[h]||1;var p=lc(u);p.forEach(function(m){e[m]=t[m]+1,r[m]=1});var d=Is(t,e,r),v=d.filter(function(m,g){return p.indexOf(g)===-1});return r.every(function(m){return m===1})?Zt(c,t,d).reshape(v):D.runKernelFunc(function(m){return m.stridedSlice(c,t,e,r)},{$x:c}).reshape(v)}}),R0=k({topk_:function(n,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var r=C(n,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=r.shape[r.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var i=D.runKernelFunc(function(a){return a.topk(r,t,e)},{$x:r});return{values:i[0],indices:i[1]}}}),T0=k({scatterND_:function(n,t,e){var r=C(n,"indices","scatterND","int32"),o=C(t,"updates","scatterND");return Pv(o,r,e),D.runKernelFunc(function(i){return i.scatterND(r,o,e)},{indices:r,updates:o},null,"ScatterNd",{shape:e})}}),Ws=k({fft_:function(n){R(n.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+n.dtype+"."});var t=n.shape[n.shape.length-1],e=n.size/t,r=n.as2D(e,t);return D.runKernelFunc(function(o){return o.fft(r)},{input:n}).reshape(n.shape)}}),gi=k({ifft_:function(n){R(n.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+n.dtype+"."});var t=n.shape[n.shape.length-1],e=n.size/t,r=n.as2D(e,t);return D.runKernelFunc(function(o){return o.ifft(r)},{input:n}).reshape(n.shape)}}),Vs=k({rfft_:function(n,t){R(n.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+n.dtype});var e,r=n.shape[n.shape.length-1],o=n.size/r;if(t!=null&&t<r){var i=n.shape.map(function(g){return 0}),a=n.shape.map(function(g){return g});a[n.shape.length-1]=t,e=n.slice(i,a),r=t}else if(t!=null&&t>r){var s=n.shape.map(function(g){return g});s[n.shape.length-1]=t-r,e=n.concat(Ce(s),n.shape.length-1),r=t}else e=n;var u=e.zerosLike(),c=Ze(e,u).as2D(o,r),l=Ws(c),f=Math.floor(r/2)+1,h=At(l),p=Kt(l),d=h.split([f,r-f],h.shape.length-1),v=p.split([f,r-f],p.shape.length-1),m=e.shape.slice();return m[e.shape.length-1]=f,Ze(d[0],v[0]).reshape(m)}}),qf=k({irfft_:function(n){var t=n.shape[n.shape.length-1],e=n.size/t;if(t<=2){var r=n.as2D(e,t),o=gi(r);return At(o)}var i=[e,2*(t-1)],a=At(n).as2D(e,t),s=Kt(n).as2D(e,t),u=a.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(q(-1)),l=a.concat(u,1),f=s.concat(c,1);return r=Ze(l,f).as2D(i[0],i[1]),o=gi(r),At(o)}}),N0=Object.freeze({fft:Ws,ifft:gi,rfft:Vs,irfft:qf}),A0=k({sparseToDense_:function(n,t,e,r){r===void 0&&(r=0);var o=C(n,"sparseIndices","sparseToDense","int32"),i=C(t,"sparseValues","sparseToDense"),a=C(r,"defaultValue","sparseToDense",i.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var f=s.rank>0?s.shape[0]:1,h=s.rank>1?s.shape[1]:1;if(c.length!==h)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+h+".");var p=u.size;if(u.rank!==0&&(u.rank!==1||p!==f))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+f+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,i,e,a),D.runKernelFunc(function(s){return s.sparseToDense(o,i,e,a)},{$sparseIndices:o,$sparseValues:i,$defaultValue:a})}}),k0=k({gatherND_:function(n,t){var e=C(t,"indices","gatherND","int32"),r=C(n,"x","gatherND");return D.runKernelFunc(function(o){return o.gatherND(r,e)},{x:r,indices:e},null,"GatherNd")}}),D0=k({diag_:function(n){var t=C(n,"x","diag").flatten(),e=n.shape.concat(n.shape);return D.runKernelFunc(function(r){return r.diag(t)},{$x:t}).reshape(e)}}),O0=k({dropout_:function(n,t,e,r){var o=C(n,"x","dropout");if(R(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),R(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return n instanceof Ne?o.clone():o;var i=function(u,c){if(c==null)return u.shape.slice();if(Ye(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],f=0;f<u.shape.length;f++)c[f]==null&&u.shape[f]!=null?l.push(u.shape[f]):l.push(c[f]);return l}return c}(o,e),a=1-t,s=zl(i,0,1,"float32",r).add(a).floor().div(a);return o.mul(s)}});function jf(n,t,e){for(var r=1-n%2,o=new Float32Array(n),i=0;i<n;++i){var a=2*Math.PI*i/(n+r-1);o[i]=t-e*Math.cos(a)}return Ve(o,"float32")}var Us=k({hannWindow_:function(n){return jf(n,.5,.5)}}),Kf=k({hammingWindow_:function(n){return jf(n,.54,.46)}}),zs=k({frame_:function(n,t,e,r,o){r===void 0&&(r=!1),o===void 0&&(o=0);for(var i=0,a=[];i+t<=n.size;)a.push(Zt(n,i,t)),i+=e;if(r)for(;i<n.size;){var s=i+t-n.size,u=Ge([Zt(n,i,t-s),Qt([s],o)]);a.push(u),i+=e}return a.length===0?On([],[0,t]):Ge(a).as2D(a.length,t)}}),$f=k({stft_:function(n,t,e,r,o){var i;o===void 0&&(o=Us),r==null&&(i=t,r=Math.floor(Math.pow(2,Math.ceil(Math.log(i)/Math.log(2)))));for(var a=zs(n,t,e),s=ut(a,o(t)),u=[],c=0;c<a.shape[0];c++)u.push(Vs(s.slice([c,0],[1,t]),r));return Ge(u)}}),P0=Object.freeze({hannWindow:Us,hammingWindow:Kf,frame:zs,stft:$f}),st,M0=function(n,t,e){return e===void 0&&(e=1),K(this,void 0,void 0,function(){var r,o,i,a,s,u,c,l,f,h,p,d,v,m;return $(this,function(g){switch(g.label){case 0:return r=C(n,"predictions","inTopK"),o=C(t,"targets","inTopK"),R(r.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+r.rank}),R(r.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+r.rank+" and targets rank "+o.rank}),we(r.shape.slice(0,r.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),i=r.shape[r.shape.length-1],R(e>0&&e<=i,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+i+"), but got "+e}),[4,r.data()];case 1:return a=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[a.length/i,i],l=u[1],f=Zr("bool",c=u[0]),h=0;h<c;h++){for(p=h*l,d=a.subarray(p,p+l),v=[],m=0;m<d.length;m++)v.push({value:d[m],index:m});for(v.sort(function(y,x){return x.value-y.value}),f[h]=0,m=0;m<e;m++)if(v[m].index===s[h]){f[h]=1;break}}return n!==r&&r.dispose(),t!==o&&o.dispose(),[2,tt(f,o.shape,"bool")]}})})};(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(st||(st={}));var F0=k({absoluteDifference_:function(n,t,e,r){r===void 0&&(r=st.SUM_BY_NONZERO_WEIGHTS);var o=C(n,"labels","absoluteDifference"),i=C(t,"predictions","absoluteDifference"),a=null;e!=null&&(a=C(e,"weights","absoluteDifference")),we(o.shape,i.shape,"Error in absoluteDifference: ");var s=o.sub(i).abs();return xn(s,a,r)}}),xn=k({computeWeightedLoss_:function(n,t,e){e===void 0&&(e=st.SUM_BY_NONZERO_WEIGHTS);var r=C(n,"losses","computeWeightedLoss"),o=null;t!=null&&(o=C(t,"weights","computeWeightedLoss"));var i=o==null?r:r.mul(o);if(e===st.NONE)return i;if(e===st.SUM)return i.sum();if(e===st.MEAN){if(o==null)return i.mean();var a=r.size/o.size,s=i.sum().div(o.sum());return a>1?s.div(q(a)):s}if(e===st.SUM_BY_NONZERO_WEIGHTS){if(o==null)return i.sum().div(q(r.size));var u=o.mul(zr(r.shape)).notEqual(q(0)).sum().toFloat();return i.sum().div(u)}throw Error("Unknown reduction: "+e)}}),B0=k({cosineDistance_:function(n,t,e,r,o){o===void 0&&(o=st.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"labels","cosineDistance"),a=C(t,"predictions","cosineDistance"),s=null;r!=null&&(s=C(r,"weights","cosineDistance")),we(i.shape,a.shape,"Error in cosineDistance: ");var u=q(1).sub(i.mul(a).sum(e,!0));return xn(u,s,o)}}),L0=k({hingeLoss_:function(n,t,e,r){r===void 0&&(r=st.SUM_BY_NONZERO_WEIGHTS);var o=C(n,"labels","hingeLoss"),i=C(t,"predictions","hingeLoss"),a=null;e!=null&&(a=C(e,"weights","hingeLoss")),we(o.shape,i.shape,"Error in hingeLoss: ");var s=q(1);o=q(2).mul(o).sub(s);var u=s.sub(o.mul(i)).relu();return xn(u,a,r)}}),W0=k({huberLoss_:function(n,t,e,r,o){r===void 0&&(r=1),o===void 0&&(o=st.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"labels","huberLoss"),a=C(t,"predictions","huberLoss"),s=null;e!=null&&(s=C(e,"weights","huberLoss")),we(i.shape,a.shape,"Error in huberLoss: ");var u=q(r),c=a.sub(i).abs(),l=Tf(c,u),f=c.sub(l),h=q(.5).mul(l.square()).add(u.mul(f));return xn(h,s,o)}}),V0=k({logLoss_:function(n,t,e,r,o){r===void 0&&(r=1e-7),o===void 0&&(o=st.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"labels","logLoss"),a=C(t,"predictions","logLoss"),s=null;e!=null&&(s=C(e,"weights","logLoss")),we(i.shape,a.shape,"Error in logLoss: ");var u=q(1),c=q(r),l=i.mul(a.add(c).log()).neg().sub(u.sub(i).mul(u.sub(a).add(c).log()));return xn(l,s,o)}}),U0=k({meanSquaredError_:function(n,t,e,r){r===void 0&&(r=st.SUM_BY_NONZERO_WEIGHTS);var o=C(n,"labels","meanSquaredError"),i=C(t,"predictions","meanSquaredError"),a=null;e!=null&&(a=C(e,"weights","meanSquaredError")),we(o.shape,i.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(i);return xn(s,a,r)}}),z0=k({sigmoidCrossEntropy_:function(n,t,e,r,o){r===void 0&&(r=0),o===void 0&&(o=st.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"multiClassLabels","sigmoidCrossEntropy"),a=C(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","sigmoidCrossEntropy")),we(i.shape,a.shape,"Error in sigmoidCrossEntropy: "),r>0){var u=q(r),c=q(1),l=q(.5);i=i.mul(c.sub(u)).add(l.mul(u))}var f=function(h,p){var d=C(h,"labels","sigmoidCrossEntropyWithLogits"),v=C(p,"logits","sigmoidCrossEntropyWithLogits");we(d.shape,v.shape,"Error in sigmoidCrossEntropyWithLogits: ");var m=v.relu(),g=v.mul(d),y=v.abs().neg().exp().log1p();return m.sub(g).add(y)}(i,a);return xn(f,s,o)}}),G0=k({softmaxCrossEntropy_:function(n,t,e,r,o){r===void 0&&(r=0),o===void 0&&(o=st.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"onehotLabels","softmaxCrossEntropy"),a=C(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","softmaxCrossEntropy")),we(i.shape,a.shape,"Error in softmaxCrossEntropy: "),r>0){var u=q(r),c=q(1),l=q(i.shape[1]);i=i.mul(c.sub(u)).add(u.div(l))}var f=function(h,p,d){if(d===void 0&&(d=-1),d===-1&&(d=p.rank-1),d!==p.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+p.rank+" and dim was "+d);return Oi(function(v,m,g){var y=m.logSumExp([d],!0),x=m.toFloat().sub(y);return g([v,x]),{value:x.mul(v).neg().sum([d]),gradFunc:function(b,w){var _=w[0],T=w[1],S=yt(b.shape,[d]);return[b.reshape(S).mul(_.toFloat().sub(T.exp())),b.reshape(S).mul(T.exp().sub(_.toFloat()))]}}})(h,p)}(i,a);return xn(f,s,o)}}),H0=Object.freeze({get Reduction(){return st},absoluteDifference:F0,computeWeightedLoss:xn,cosineDistance:B0,hingeLoss:L0,huberLoss:W0,logLoss:V0,meanSquaredError:U0,sigmoidCrossEntropy:z0,softmaxCrossEntropy:G0});function Dc(n,t){return t===void 0&&(t=!1),D.tidy(function(){if(n.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+n.shape.length+"D Tensor.");for(var e=n.shape[0],r=n.shape[1],o=Ul(e),i=n.clone(),a=On([[1]],[1,1]),s=a.clone(),u=e>=r?r:e,c=function(f){var h,p=i,d=s,v=o;h=D.tidy(function(){var m=i.slice([f,f],[e-f,1]),g=m.norm(),y=i.slice([f,f],[1,1]),x=On([[-1]]).where(y.greater(0),On([[1]])),b=y.sub(x.mul(g)),w=m.div(b);s=w.shape[0]===1?a.clone():a.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var _=x.matMul(b).div(g).neg(),T=i.slice([f,0],[e-f,r]),S=_.mul(s);if(f===0)i=T.sub(S.matMul(s.transpose().matMul(T)));else{var E=T.sub(S.matMul(s.transpose().matMul(T)));i=i.slice([0,0],[f,r]).concat(E,0)}var I=o.slice([0,f],[e,o.shape[1]-f]);if(f===0)o=I.sub(I.matMul(s).matMul(S.transpose()));else{var A=I.sub(I.matMul(s).matMul(S.transpose()));o=o.slice([0,0],[e,f]).concat(A,1)}return[s,i,o]}),s=h[0],i=h[1],o=h[2],gt([p,d,v])},l=0;l<u;++l)c(l);return!t&&e>r&&(o=o.slice([0,0],[e,r]),i=i.slice([0,0],[r,r])),[o,i]})}var X0=k({bandPart_:function(n,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var r=C(n,"a","bandPart");if(r.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+r.rank+".");var o=r.shape,i=r.shape.slice(-2),a=i[0],s=i[1];if(!(t<=a))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+a+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=a),e<0&&(e=s);var u=si(0,a,1,"int32").reshape([-1,1]),c=si(0,s,1,"int32"),l=qe(u,c),f=Mi(l.lessEqual(q(+t,"int32")),l.greaterEqual(q(-e,"int32"))),h=Ce([a,s],r.dtype);return Tt(He(r.reshape([-1,a,s])).map(function(p){return Zn(f,p,h)})).reshape(o)}}),q0=k({gramSchmidt_:function(n){var t;if(Array.isArray(n)){t=!1,R(n!=null&&n.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=n[0].shape[0],r=function(u){R(n[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+n[u].shape[0]+" vs. "+e+")"})},o=1;o<n.length;++o)r(o)}else t=!0,n=Cs(n,n.shape[0],0).map(function(u){return Hl(u,[0])});R(n.length<=n[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+n.length+") exceeds number of dimensions ("+n[0].shape[0]+")."});var i=[],a=n,s=function(u){i.push(D.tidy(function(){var c=a[u];if(u>0)for(var l=0;l<u;++l){var f=Uf(i[l].mulStrict(c)).mul(i[l]);c=c.sub(f)}return c.div(Xf(c,"euclidean"))}))};for(o=0;o<n.length;++o)s(o);return t?Tt(i,0):i}}),j0=k({qr_:function(n,t){if(t===void 0&&(t=!1),n.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+n.rank);if(n.rank===2)return Dc(n,t);var e=n.shape.slice(0,n.shape.length-2).reduce(function(a,s){return a*s}),r=He(n.reshape([e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),o=[],i=[];return r.forEach(function(a){var s=Dc(a,t),u=s[0],c=s[1];o.push(u),i.push(c)}),[Tt(o,0).reshape(n.shape),Tt(i,0).reshape(n.shape)]}}),K0=Object.freeze({bandPart:X0,gramSchmidt:q0,qr:j0});function Wi(n,t,e,r,o,i){r==null&&(r=.5),o==null&&(o=Number.NEGATIVE_INFINITY),i==null&&(i=0);var a=n.shape[0];return e=Math.min(e,a),R(0<=r&&r<=1,function(){return"iouThreshold must be in [0, 1], but was '"+r+"'"}),R(n.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+n.rank+"'"}),R(n.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+n.shape[1]}),R(t.rank===1,function(){return"scores must be a 1D tensor"}),R(t.shape[0]===a,function(){return"scores has incompatible shape with boxes. Expected "+a+", but was "+t.shape[0]}),R(0<=i&&i<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+i+"'"}),{maxOutputSize:e,iouThreshold:r,scoreThreshold:o,softNmsSigma:i}}var $0=k({resizeBilinear_:function(n,t,e){e===void 0&&(e=!1);var r=C(n,"images","resizeBilinear");R(r.rank===3||r.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+r.rank+"."}),R(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=r,i=!1;r.rank===3&&(i=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t[0],s=t[1],u=D.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,a,s,e)},{x:o},function(c,l){return{x:function(){return D.runKernelFunc(function(f){return f.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:a,newWidth:s});return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Y0=k({resizeNearestNeighbor_:function(n,t,e){e===void 0&&(e=!1);var r=C(n,"images","resizeNearestNeighbor");R(r.rank===3||r.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+r.rank+"."}),R(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),R(r.dtype==="float32"||r.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=r,i=!1;r.rank===3&&(i=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t[0],s=t[1],u=D.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,a,s,e)},{batchImages:o},function(c,l){return{batchImages:function(){return D.runKernelFunc(function(f){return f.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),J0=k({nonMaxSuppression_:function(n,t,e,r,o){r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var i=C(n,"boxes","nonMaxSuppression"),a=C(t,"scores","nonMaxSuppression"),s=Wi(i,a,e,r,o);e=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:r,scoreThreshold:o};return D.runKernelFunc(function(c){return c.nonMaxSuppression(i,a,e,r,o)},{boxes:i,scores:a},null,"NonMaxSuppressionV3",u)}}),Q0=function(n,t,e,r,o){return r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),K(this,void 0,void 0,function(){var i,a,s,u,c,l,f;return $(this,function(h){switch(h.label){case 0:return i=C(n,"boxes","nonMaxSuppressionAsync"),a=C(t,"scores","nonMaxSuppressionAsync"),s=Wi(i,a,e,r,o),e=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([i.data(),a.data()])];case 1:return u=h.sent(),c=u[0],l=u[1],f=Ts(c,l,e,r,o),i!==n&&i.dispose(),a!==t&&a.dispose(),[2,f]}})})},Z0=k({nonMaxSuppressionWithScore_:function(n,t,e,r,o,i){r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0);var a=C(n,"boxes","nonMaxSuppression"),s=C(t,"scores","nonMaxSuppression"),u=Wi(a,s,e,r,o,i),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:i=u.softNmsSigma},l=D.runKernel("NonMaxSuppressionV5",{boxes:a,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),eb=function(n,t,e,r,o,i){return r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0),K(this,void 0,void 0,function(){var a,s,u,c,l,f,h;return $(this,function(p){switch(p.label){case 0:return a=C(n,"boxes","nonMaxSuppressionAsync"),s=C(t,"scores","nonMaxSuppressionAsync"),u=Wi(a,s,e,r,o,i),e=u.maxOutputSize,r=u.iouThreshold,o=u.scoreThreshold,i=u.softNmsSigma,[4,Promise.all([a.data(),s.data()])];case 1:return c=p.sent(),l=c[0],f=c[1],h=Ns(l,f,e,r,o,i),a!==n&&a.dispose(),s!==t&&s.dispose(),[2,h]}})})},tb=k({cropAndResize_:function(n,t,e,r,o,i){var a=C(n,"image","cropAndResize"),s=C(t,"boxes","cropAndResize","float32"),u=C(e,"boxInd","cropAndResize","int32");o=o||"bilinear",i=i||0;var c=s.shape[0];return R(a.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+a.rank+"."}),R(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),R(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),R(r.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+r.length+"."}),R(r[0]>=1&&r[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+r}),R(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),D.runKernelFunc(function(l,f){return l.cropAndResize(a,s,u,r,o,i)},{images:a,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:i,cropSize:r})}}),Gs=Object.freeze({resizeBilinear:$0,resizeNearestNeighbor:Y0,nonMaxSuppression:J0,nonMaxSuppressionAsync:Q0,nonMaxSuppressionWithScore:Z0,nonMaxSuppressionWithScoreAsync:eb,cropAndResize:tb}),Hs=function(n,t){return!(n>0)||t==="linear"},Xs=function(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return n.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},qs=function(n,t){var e=t,r=Xe(n.shape,t.shape);return r.length>0&&(e=e.sum(r)),e.reshape(n.shape)},js=function(n,t,e){if(t==="linear")return n;if(t==="relu")return Ae(n);if(t==="elu")return zf(n);if(t==="relu6")return Hf(n);if(t==="prelu")return Gf(n,e);throw new Error("Unknown fused activation "+t+".")},nb=k({fusedMatMul_:function(n){var t,e=n.a,r=n.b,o=n.transposeA,i=o!==void 0&&o,a=n.transposeB,s=a!==void 0&&a,u=n.bias,c=n.activation,l=c===void 0?"linear":c,f=n.preluActivationWeights;if(Hs(D.state.gradientDepth,l)===!1){var h=Bi(e,r,i,s);return u!=null&&(h=ce(h,u)),js(h,l,f)}var p=C(e,"a","fused matMul"),d=C(r,"b","fused matMul");t=De(p,d),p=t[0],d=t[1];var v=i?p.shape[p.rank-2]:p.shape[p.rank-1],m=s?d.shape[d.rank-1]:d.shape[d.rank-2],g=i?p.shape[p.rank-1]:p.shape[p.rank-2],y=s?d.shape[d.rank-2]:d.shape[d.rank-1],x=p.shape.slice(0,-2),b=d.shape.slice(0,-2),w=Y(x),_=Y(b);R(p.rank>=2&&d.rank>=2&&p.rank===d.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+p.rank+" and "+d.rank+"."}),R(Ye(x,b),function(){return"Error in fused matMul: outer dimensions ("+x+") and ("+b+") of Tensors with shapes "+p.shape+" and "+d.shape+" must match."}),R(v===m,function(){return"Error in fused matMul: inner shapes ("+v+") and ("+m+") of Tensors with shapes "+p.shape+" and "+d.shape+" and transposeA="+i+" and transposeB="+s+" must match."});var T,S,E=p.shape.slice(0,-2).concat([g,y]),I=i?p.as3D(w,v,g):p.as3D(w,g,v),A=s?d.as3D(_,y,m):d.as3D(_,m,y);u!=null&&fe(E,(T=De(T=C(u,"bias","fused matMul"),p)[0]).shape),f!=null&&(S=C(f,"prelu weights","fused matMul"));var N={a:I,b:A};u!=null&&(N.bias=T),f!=null&&(N.preluActivationWeights=S);var O=[I,A];return D.runKernelFunc(function(P,M){var V=P.fusedBatchMatMul({a:I,b:A,transposeA:i,transposeB:s,bias:T,activation:l,preluActivationWeights:S});return M([I,A,V]),V},N,function(P,M){var V=M[0],U=M[1],W=M[2],z=Xs(P,W,l),G={};return u!=null&&(G={bias:function(){return qs(T,z)}}),Object.assign(i||s?!i&&s?{a:function(){return z.matMul(U,!1,!1)},b:function(){return z.matMul(V,!0,!1)}}:i&&!s?{a:function(){return U.matMul(z,!1,!0)},b:function(){return V.matMul(z,!1,!1)}}:{a:function(){return U.matMul(z,!0,!0)},b:function(){return z.matMul(V,!0,!0)}}:{a:function(){return z.matMul(U,!1,!0)},b:function(){return V.matMul(z,!0,!1)}},G)},"_FusedMatMul",{transposeA:i,transposeB:s,activation:l},O,[!0]).reshape(E)}}),rb=k({fusedConv2d_:function(n){var t=n.x,e=n.filter,r=n.strides,o=n.pad,i=n.dataFormat,a=i===void 0?"NHWC":i,s=n.dilations,u=s===void 0?[1,1]:s,c=n.dimRoundingMode,l=n.bias,f=n.activation,h=f===void 0?"linear":f,p=n.preluActivationWeights;if(h=h||"linear",Hs(D.state.gradientDepth,h)===!1){var d=Pt(t,e,r,o,a,u,c);return l!=null&&(d=ce(d,l)),js(d,h,p)}var v=C(t,"x","conv2d"),m=C(e,"filter","conv2d"),g=v,y=!1;v.rank===3&&(y=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),R(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),R(m.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+m.rank+"."}),c!=null&&R(Le(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),R(g.shape[3]===m.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+m.shape[2]+"."}),R(bt(r,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"}),R(a==="NHWC",function(){return"Error in conv2d: got dataFormat of "+a+" but only NHWC is currently supported."});var x,b,w=sr(g.shape,m.shape,r,u,o,c);l!=null&&(x=De(x=C(l,"bias","fused conv2d"),v)[0],fe(w.outShape,x.shape)),p!=null&&(b=C(p,"prelu weights","fused conv2d"));var _={x:g,filter:m};l!=null&&(_.bias=x),p!=null&&(_.preluActivationWeights=b);var T=[m,g],S=D.runKernelFunc(function(E,I){var A=E.fusedConv2d({input:g,filter:m,convInfo:w,bias:x,activation:h,preluActivationWeights:b});return I([m,g,A]),A},_,function(E,I){var A=I,N=A[0],O=A[1],P=A[2],M=Xs(E,P,h);R(Pr(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var V={};return l!=null&&(V={bias:function(){return qs(x,M)}}),Object.assign({x:function(){return Pf(O.shape,M,N,r,o)},filter:function(){return Bs(O,M,N.shape,r,o)}},V)},"FusedConv2D",{convInfo:w,activation:h},T,[!0]);return y?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),ob=k({fusedDepthwiseConv2d_:function(n){var t=n.x,e=n.filter,r=n.strides,o=n.pad,i=n.dataFormat,a=i===void 0?"NHWC":i,s=n.dilations,u=s===void 0?[1,1]:s,c=n.dimRoundingMode,l=n.bias,f=n.activation,h=f===void 0?"linear":f,p=n.preluActivationWeights;if(Hs(D.state.gradientDepth,h)===!1){var d=Fi(t,e,r,o,a,u,c);return l!=null&&(d=ce(d,l)),js(d,h,p)}var v=C(t,"x","depthwiseConv2d"),m=C(e,"filter","depthwiseConv2d"),g=v,y=!1;v.rank===3&&(y=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),R(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),R(m.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+m.rank+"."}),R(g.shape[3]===m.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+m.shape[2]+"."}),u==null&&(u=[1,1]),R(bt(r,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"}),c!=null&&R(Le(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var x,b,w=sr(g.shape,m.shape,r,u,o,c,!0);l!=null&&(x=De(x=C(l,"bias","fused conv2d"),v)[0],fe(w.outShape,x.shape)),p!=null&&(b=C(p,"prelu weights","fused depthwiseConv2d"));var _={x:g,filter:m};l!=null&&(_.bias=x),p!=null&&(_.preluActivationWeights=b);var T=[m,g],S=D.runKernelFunc(function(E,I){var A=E.fusedDepthwiseConv2D({input:g,filter:m,convInfo:w,bias:x,activation:h,preluActivationWeights:b});return I([m,g,A]),A},_,function(E,I){R(Pr(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var A=I[0],N=I[1],O=I[2],P=Xs(E,O,h),M={};return l!=null&&(M={bias:function(){return qs(x,P)}}),Object.assign({x:function(){return Mf(N.shape,P,A,w)},filter:function(){return Ff(N,P,A.shape,w)}},M)},"FusedDepthwiseConv2D",{convInfo:w,activation:h},T,[!0]);return y?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),ib=Object.freeze({matMul:nb,conv2d:rb,depthwiseConv2d:ob}),ab=Object.freeze({image:Gs,linalg:K0,losses:H0,spectral:N0,fused:ib,signal:P0,square:Vg,squaredDifference:yf,conv1d:$y,conv2d:Pt,conv3d:Yy,depthwiseConv2d:Fi,separableConv2d:Ls,conv2dTranspose:Jy,conv3dTranspose:Qy,op:k,batchNormalization2d:my,batchNormalization3d:gy,batchNormalization4d:yy,batchNormalization:by,batchNorm:Cf,batchNorm2d:xy,batchNorm3d:wy,batchNorm4d:_y,booleanMaskAsync:Ky,complex:Ze,real:At,imag:Kt,concat:Ge,concat1d:iv,concat2d:av,concat3d:sv,concat4d:uv,split:Cs,matMul:Bi,dot:Zy,outerProduct:e0,reverse:yo,reverse1d:t0,reverse2d:n0,reverse3d:r0,reverse4d:o0,maxPool:$e,avgPool:bo,pool:i0,maxPool3d:a0,avgPool3d:s0,slice:Zt,slice1d:u0,slice2d:c0,slice3d:Wf,slice4d:l0,abs:Ug,acos:zg,acosh:Gg,asin:Hg,asinh:Xg,atan:qg,atanh:jg,ceil:Kg,clipByValue:Ps,cos:$g,cosh:Yg,erf:Jg,exp:is,expm1:Qg,floor:Zg,log:ey,log1p:ty,logSigmoid:ny,neg:vi,reciprocal:ry,round:oy,rsqrt:bf,sigmoid:xf,sign:iy,isNaN:ay,isInf:sy,isFinite:uy,sin:cy,sinh:ly,softplus:fy,sqrt:hy,step:py,tan:dy,tanh:vy,all:f0,any:h0,argMax:p0,argMin:d0,logSumExp:v0,max:Li,mean:m0,min:g0,moments:y0,sum:Uf,prod:b0,equal:Nf,equalStrict:Ly,greater:Wy,greaterEqual:Af,greaterEqualStrict:Vy,greaterStrict:Uy,less:zy,lessEqual:Gy,lessEqualStrict:Hy,lessStrict:Xy,notEqual:qy,notEqualStrict:jy,add:ce,addN:Sy,addStrict:Iy,atan2:Ry,div:Ft,divNoNan:Ty,divStrict:Ny,floorDiv:Rf,maximum:Ms,maximumStrict:Ay,minimum:Tf,minimumStrict:ky,mod:Dy,modStrict:Oy,mul:ut,mulStrict:Py,pow:mi,powStrict:My,squaredDifferenceStrict:Fy,sub:qe,subStrict:By,elu:zf,leakyRelu:x0,prelu:Gf,relu:Ae,relu6:Hf,selu:w0,logicalAnd:Mi,logicalNot:Ey,logicalOr:Sf,logicalXor:Cy,where:Zn,whereAsync:If,buffer:ie,print:gv,batchToSpaceND:Vl,broadcastTo:yv,cast:bv,clone:xv,cumsum:wv,depthToSpace:_v,expandDims:Nt,eye:Ul,multinomial:Ev,oneHot:ts,pad:ar,pad1d:Cv,pad2d:Sv,pad3d:Iv,pad4d:Rv,rand:Tv,randomNormal:Nv,randomGamma:Av,randomUniform:zl,reshape:Bt,spaceToBatchND:Gl,squeeze:Hl,stack:Tt,tile:Er,truncatedNormal:kv,unstack:He,setdiff1dAsync:Dv,fill:Qt,linspace:ov,ones:zr,range:si,scalar:q,tensor:tt,tensor1d:Ve,tensor2d:On,tensor3d:Es,tensor4d:dt,tensor5d:tv,tensor6d:nv,variable:rv,zeros:Ce,onesLike:Wl,zerosLike:ge,transpose:Bn,softmax:bn,logSoftmax:Wv,localResponseNormalization:_0,norm:Xf,gather:Fs,unsortedSegmentSum:kf,basicLSTMCell:E0,multiRNNCell:C0,movingAverage:S0,stridedSlice:I0,topk:R0,scatterND:T0,fft:Ws,ifft:gi,rfft:Vs,irfft:qf,sparseToDense:A0,gatherND:k0,diag:D0,dropout:O0,hannWindow:Us,hammingWindow:Kf,frame:zs,stft:$f,inTopKAsync:M0});function H(n,t){Array.isArray(n)||(n=[n]),n.forEach(function(e){e!=null&&R(e.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function Da(n,t,e,r){if(e==="linear")return n.linear(t);if(e==="relu")return n.relu(t);if(e==="elu")return n.elu(t);if(e==="relu6")return n.relu6(t);if(e==="prelu")return n.prelu(t,r);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var sb=function(n){function t(){var e=n.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new Jl(e,D),e}return Wt(t,n),t.prototype.write=function(e,r,o){this.firstUse&&(this.firstUse=!1,L().get("IS_NODE")&&ii(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var i={};return this.data.set(i,{values:e,dtype:o}),i},t.prototype.move=function(e,r,o,i){this.data.set(e,{values:r,dtype:i})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return K(this,void 0,void 0,function(){return $(this,function(r){return[2,this.readSync(e)]})})},t.prototype.readSync=function(e){var r=this.data.get(e),o=r.dtype,i=r.complexTensors;return o==="complex64"?os(this.readSync(i.real.dataId),this.readSync(i.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var r=this.readSync(e.dataId),o=r;if(e.dtype==="string")try{o=r.map(function(i){return ni(i)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return ie(e.shape,e.dtype,o)},t.prototype.makeOutput=function(e,r,o){var i=this.write(e,r,o);return D.makeTensorFromDataId(i,r,o,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var r=this.data.get(e).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return K(this,void 0,void 0,function(){var r;return $(this,function(o){return r=qt(),e(),[2,{kernelMs:qt()-r}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,r){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:D.keep(e.clone()),imag:D.keep(r.clone())},o},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,r,o){if(H(e,"slice"),$l(e.shape,r,o)){var i=Yl(r,e.strides),a=Y(o);return tt(this.readSync(e.dataId).subarray(i,i+a),o,e.dtype)}for(var s=ie(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(f,h){return f+r[h]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,r,o,i){H(e,"stridedSlice");var a=Is(r,o,i);if(a.some(function(p){return p===0}))return tt([],a);for(var s=ie(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),f=new Array(l.length),h=0;h<f.length;h++)f[h]=l[h]*i[h]+r[h];s.set.apply(s,[u.get.apply(u,f)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var r=this.readSync(e.dataId),o=ie([e.size,e.size],e.dtype),i=o.values,a=0;a<r.length;a++)i[a*e.size+a]=r[a];return o.toTensor()},t.prototype.unstack=function(e,r){for(var o=e.shape[r],i=new Array(e.rank-1),a=0,s=0;s<e.rank;s++)s!==r&&(i[a++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[r]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[r]=s,l[s]=this.slice(e,u,c).reshape(i);return l},t.prototype.reverse=function(e,r){H(e,"reverse");for(var o=ie(e.shape,e.dtype),i=this.bufferSync(e),a=function(u){var c=o.indexToLoc(u),l=c.slice();r.forEach(function(f){return l[f]=e.shape[f]-1-l[f]}),o.set.apply(o,[i.get.apply(i,l)].concat(c))},s=0;s<o.size;s++)a(s);return o.toTensor()},t.prototype.concat=function(e,r){var o=this;if(e[0].dtype==="complex64"){var i=e.map(function(p){return At(p)}),a=e.map(function(p){return Kt(p)});return Ze(this.concat(i,r),this.concat(a,r))}var s=e.map(function(p){var d=Y(p.shape.slice(r));return p.as2D(-1,d)}),u=Or(s.map(function(p){return p.shape}),1),c=ie(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(p){c.set(o.readSync(p.dataId),l),l+=p.size})}else{var f=0;s.forEach(function(p){for(var d=o.readSync(p.dataId),v=0,m=0;m<p.shape[0];++m)for(var g=m*u[1]+f,y=0;y<p.shape[1];++y)c[g+y]=d[v++];f+=p.shape[1]})}var h=Or(e.map(function(p){return p.shape}),r);return tt(c,h,e[0].dtype)},t.prototype.neg=function(e){return H(e,"neg"),this.multiply(q(-1),e)},t.prototype.add=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),function(o,i,a,s){return{real:o+a,imag:i+s}}):this.broadcastedBinaryOp(e,r,et(e.dtype,r.dtype),function(o,i){return o+i})},t.prototype.addN=function(e){var r=this;H(e,"addN");for(var o=e.map(function(l){return r.readSync(l.dataId)}),i=ie(e[0].shape,e[0].dtype),a=i.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<a.length;c++)a[c]+=u[c];return i.toTensor()},t.prototype.softmax=function(e,r){var o=je([r],e.shape),i=this.max(e,o),a=yt(i.shape,o),s=this.subtract(e,i.reshape(a)),u=this.exp(s),c=this.sum(u,o).reshape(a);return this.realDivide(u,c)},t.prototype.subtract=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),function(o,i,a,s){return{real:o-a,imag:i-s}}):this.broadcastedBinaryOp(e,r,et(e.dtype,r.dtype),function(o,i){return o-i})},t.prototype.pow=function(e,r){return H([e,r],"pow"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return Math.pow(o,i)})},t.prototype.batchMatMul=function(e,r,o,i){H([e,r],"matMul");for(var a=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=i?r.shape[1]:r.shape[2],c=e.shape[0],l=this.readSync(e.dataId),f=this.readSync(r.dataId),h=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],p=h[0],d=h[1],v=h[2],m=i?[1,r.strides[1],r.strides[0]]:[r.strides[1],1,r.strides[0]],g=m[0],y=m[1],x=m[2],b=s*u,w=ie([c,s,u],e.dtype),_=w.values,T=this.blockSize,S=0;S<c;S++)for(var E=0;E<s;E+=T)for(var I=0;I<u;I+=T)for(var A=0;A<a;A+=T)for(var N=Math.min(E+T,s),O=Math.min(I+T,u),P=Math.min(A+T,a),M=E;M<N;M++)for(var V=I;V<O;V++){for(var U=0,W=A;W<P;W++)U+=l[S*p+M*d+W*v]*f[W*g+V*y+S*x];_[S*b+(M*u+V)]+=U}return w.toTensor()},t.prototype.fusedBatchMatMul=function(e){var r=e.a,o=e.b,i=e.transposeA,a=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(r,o,i,a);return s&&(l=this.add(l,s)),u&&(l=Da(this,l,u,c)),l},t.prototype.multiply=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),function(o,i,a,s){return{real:o*a-i*s,imag:o*s+i*a}}):this.broadcastedBinaryOp(e,r,et(e.dtype,r.dtype),function(o,i){return o*i})},t.prototype.realDivide=function(e,r){return H([e,r],"realDivide"),this.broadcastedBinaryOp(e,r,"float32",function(o,i){return o/i})},t.prototype.floorDiv=function(e,r){return H([e,r],"floorDiv"),this.broadcastedBinaryOp(e,r,"int32",function(o,i){return Math.floor(o/i)})},t.prototype.sum=function(e,r){H(e,"sum"),_t("sum",r,e.rank);for(var o=ot(e.shape,r),i=o[0],a=o[1],s=Ce(i,et(e.dtype,"int32")),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,p=0,d=0;d<u;++d)p+=l[h+d];c[f]=p}return s},t.prototype.prod=function(e,r){H(e,"sum");for(var o=ot(e.shape,r),i=o[0],a=o[1],s=Ce(i,et(e.dtype,"int32")),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,p=1,d=0;d<u;++d)p*=l[h+d];c[f]=p}return s},t.prototype.unsortedSegmentSum=function(e,r,o){H(e,"unsortedSegmentSum");for(var i=[],a=e.rank-r.rank,s=0;s<a;++s)r=r.expandDims(s+1);for(s=0;s<o;++s){var u=q(s,"int32"),c=Nf(u,r).asType("float32").mul(e).sum(0);i.push(c)}return Tt(i)},t.prototype.argMin=function(e,r){H(e,"argMin");var o=[r];_t("argMin",o,e.rank);for(var i=ot(e.shape,o),a=i[0],s=i[1],u=Ce(a,"int32"),c=Y(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var p=h*c,d=f[p],v=0,m=0;m<c;++m){var g=f[p+m];g<d&&(d=g,v=m)}l[h]=v}return u},t.prototype.argMax=function(e,r){H(e,"argMax");var o=[r];_t("argMax",o,e.rank);for(var i=ot(e.shape,o),a=i[0],s=i[1],u=Ce(a,"int32"),c=Y(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var p=h*c,d=f[p],v=0,m=0;m<c;++m){var g=f[p+m];g>d&&(d=g,v=m)}l[h]=v}return u},t.prototype.cumsum=function(e,r,o,i){if(H(e,"cumsum"),r!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+r);for(var a=et(e.dtype,"int32"),s=Ce(e.shape,a),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],f=i?function(m,g){return m+l-g-1}:function(m,g){return m+g},h=0;h<c.length;h+=l)for(var p=0;p<l;p++){var d=f(h,p);if(p===0)u[d]=o?0:c[d];else{var v=f(h,p-1);u[d]=o?c[v]+u[v]:c[d]+u[v]}}return s},t.prototype.equal=function(e,r){return H([e,r],"equal"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o===i?1:0})},t.prototype.notEqual=function(e,r){return H([e,r],"notEqual"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o!==i?1:0})},t.prototype.less=function(e,r){return H([e,r],"less"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o<i?1:0})},t.prototype.lessEqual=function(e,r){return H([e,r],"lessEqual"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o<=i?1:0})},t.prototype.greater=function(e,r){return H([e,r],"greater"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o>i?1:0})},t.prototype.greaterEqual=function(e,r){return H([e,r],"greaterEqual"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o>=i?1:0})},t.prototype.logicalNot=function(e){H(e,"logicalNot");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)o[i]=r[i]?0:1;return this.makeOutput(o,e.shape,"bool")},t.prototype.logicalAnd=function(e,r){return H([e,r],"logicalAnd"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o&&i})},t.prototype.logicalOr=function(e,r){return H([e,r],"logicalOr"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o||i})},t.prototype.select=function(e,r,o){H([e,r,o],"select");for(var i=this.readSync(e.dataId),a=this.readSync(r.dataId),s=this.readSync(o.dataId),u=Ce(r.shape,et(r.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,f=e.rank===0||e.rank>1||r.rank===1?1:Y(r.shape.slice(1)),h=0;h<i.length;h++)for(var p=0;p<f;p++)i[h]===1?c[l++]=a[h]:c[l++]=s[h];return u},t.prototype.where=function(e){H([e],"where");var r=this.readSync(e.dataId);return As(e.shape,r)},t.prototype.topk=function(e,r,o){return H(e,"topk"),af(this.readSync(e.dataId),e.shape,e.dtype,r)},t.prototype.min=function(e,r){H(e,"min"),_t("min",r,e.rank);for(var o=ot(e.shape,r),i=o[0],a=o[1],s=Ce(i,e.dtype),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,p=l[h],d=0;d<u;++d){var v=l[h+d];v<p&&(p=v)}c[f]=p}return s},t.prototype.minimum=function(e,r){return H([e,r],"minimum"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return Math.min(o,i)})},t.prototype.mod=function(e,r){return H([e,r],"mod"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){var a=o%i;return o<0&&i<0||o>=0&&i>=0?a:(a+i)%i})},t.prototype.max=function(e,r){H(e,"max"),_t("max",r,e.rank);for(var o=ot(e.shape,r),i=o[0],a=o[1],s=Ce(i,e.dtype),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,p=l[h],d=0;d<u;++d){var v=l[h+d];v>p&&(p=v)}c[f]=p}return s},t.prototype.maximum=function(e,r){return H([e,r],"maximum"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return Math.max(o,i)})},t.prototype.all=function(e,r){H(e,"all"),_t("all",r,e.rank);for(var o=ot(e.shape,r),i=o[0],a=o[1],s=Ce(i,e.dtype),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,p=l[h],d=0;d<u;++d){var v=l[h+d];p=p&&v}c[f]=p}return s},t.prototype.any=function(e,r){H(e,"any"),_t("any",r,e.rank);for(var o=ot(e.shape,r),i=o[0],a=o[1],s=Ce(i,e.dtype),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,p=l[h],d=0;d<u;++d){var v=l[h+d];p=p||v}c[f]=p}return s},t.prototype.squaredDifference=function(e,r){return H([e,r],"squaredDifference"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){var a=o-i;return a*a})},t.prototype.ceil=function(e){H(e,"ceil");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.ceil(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.floor=function(e){H(e,"floor");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.floor(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.sign=function(e){H(e,"x");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)r[i]<0?o[i]=-1:r[i]>0?o[i]=1:o[i]=0;return this.makeOutput(o,e.shape,"float32")},t.prototype.isNaN=function(e){H(e,"x");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Number.isNaN(r[i])&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isInf=function(e){H(e,"x");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Math.abs(r[i])===1/0&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isFinite=function(e){H(e,"x");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Number.isFinite(r[i])&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.round=function(e){H(e,"round");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=Math.floor(r[i]);r[i]-a<.5?o[i]=Math.floor(r[i]):r[i]-a>.5?o[i]=Math.ceil(r[i]):o[i]=a%2==0?a:a+1}return this.makeOutput(o,e.shape,"float32")},t.prototype.exp=function(e){H(e,"exp");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.exp(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.expm1=function(e){H(e,"expm1");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.expm1(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.log=function(e){H(e,"log");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.log(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.log1p=function(e){H(e,"log1p");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.log1p(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.sqrt=function(e){H(e,"sqrt");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.sqrt(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.rsqrt=function(e){H(e,"rsqrt");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=1/Math.sqrt(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.reciprocal=function(e){H(e,"reciprocal");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=1/r[i];return this.makeOutput(o,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){H(e,"relu");for(var r=Ce(e.shape,e.dtype),o=this.readSync(r.dataId),i=this.readSync(e.dataId),a=0;a<i.length;++a)o[a]=Math.max(0,i[a]);return r},t.prototype.relu6=function(e){H(e,"relu");for(var r=Ce(e.shape,e.dtype),o=this.readSync(r.dataId),i=this.readSync(e.dataId),a=0;a<i.length;++a)o[a]=Math.min(Math.max(0,i[a]),6);return r},t.prototype.prelu=function(e,r){return H([e,r],"prelu"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return o<0?i*o:o})},t.prototype.elu=function(e){H(e,"elu");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var a=o[i];r[i]=a>=0?a:Math.exp(a)-1}return this.makeOutput(r,e.shape,"float32")},t.prototype.eluDer=function(e,r){H([e,r],"eluDer");for(var o=new Float32Array(r.size),i=this.readSync(r.dataId),a=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];o[s]=u>=1?a[s]:a[s]*(u+1)}return this.makeOutput(o,r.shape,"float32")},t.prototype.selu=function(e){H(e,"selu");for(var r=Ds,o=Os,i=new Float32Array(e.size),a=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>=0?o*u:r*(Math.exp(u)-1)}return this.makeOutput(i,e.shape,"float32")},t.prototype.clip=function(e,r,o){H(e,"clip");for(var i=new Float32Array(e.size),a=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>o?o:u<r?r:u}return this.makeOutput(i,e.shape,"float32")},t.prototype.abs=function(e){for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.abs(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<e.size;++i){var a=o[2*i],s=o[2*i+1];r[i]=Math.hypot(a,s)}return this.makeOutput(r,e.shape,"float32")},t.prototype.int=function(e){H(e,"int");for(var r=new Int32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=o[i];return this.makeOutput(r,e.shape,"int32")},t.prototype.sigmoid=function(e){H(e,"sigmoid");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=1/(1+Math.exp(-o[i]));return this.makeOutput(r,e.shape,"float32")},t.prototype.softplus=function(e){H(e,"softplus");for(var r=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var s=i[a]>-r,u=i[a]<r,c=Math.exp(i[a]),l=void 0;l=u?c:s?i[a]:Math.log(1+c),o[a]=l}return this.makeOutput(o,e.shape,"float32")},t.prototype.sin=function(e){H(e,"sin");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.sin(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.cos=function(e){H(e,"cos");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.cos(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.tan=function(e){H(e,"tan");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.tan(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.asin=function(e){H(e,"asin");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.asin(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.acos=function(e){H(e,"acos");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.acos(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atan=function(e){H(e,"atan");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.atan(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atan2=function(e,r){return H([e,r],"atan2"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return Math.atan2(o,i)})},t.prototype.sinh=function(e){H(e,"sinh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.sinh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.cosh=function(e){H(e,"cosh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.cosh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.tanh=function(e){H(e,"tanh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=ud(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.asinh=function(e){H(e,"asinh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.asinh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.acosh=function(e){H(e,"acosh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.acosh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atanh=function(e){H(e,"atanh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.atanh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.erf=function(e){H(e,"erf");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var a=Math.sign(o[i]),s=Math.abs(o[i]),u=1/(1+.3275911*s);r[i]=a*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(r,e.shape,"float32")},t.prototype.step=function(e,r){r===void 0&&(r=0),H(e,"step");for(var o=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var s=i[a];isNaN(s)?o[a]=NaN:o[a]=s>0?1:r}return this.makeOutput(o,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var r=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(r,o,i);return a&&(c=this.add(c,a)),s&&(c=Da(this,c,s,u)),c},t.prototype.conv2d=function(e,r,o){H([e,r],"conv2d");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.dataFormat==="channelsLast",h=ie(o.outShape,e.dtype),p=e.strides[0],d=f?e.strides[1]:e.strides[2],v=f?e.strides[2]:1,m=f?1:e.strides[1],g=h.strides[0],y=f?h.strides[1]:h.strides[2],x=f?h.strides[2]:1,b=f?1:h.strides[1],w=this.readSync(e.dataId),_=this.readSync(r.dataId),T=h.values,S=0;S<o.batchSize;++S)for(var E=S*p,I=S*g,A=0;A<o.outHeight;++A)for(var N=I+A*y,O=A*o.strideHeight-l,P=0;P<i;P++){var M=O+P*s;if(!(M<0||M>=o.inHeight))for(var V=P*r.strides[0],U=E+M*d,W=0;W<o.outWidth;++W)for(var z=N+W*x,G=W*o.strideWidth-c,X=0;X<a;X++){var ee=G+X*u;if(!(ee<0||ee>=o.inWidth))for(var te=U+ee*v,se=V+X*r.strides[1],ue=0;ue<o.inChannels;++ue){for(var le=w[te+ue*m],de=0;de<o.outChannels;++de)T[z+de*b]+=le*_[se+de];se+=o.outChannels}}}return h.toTensor()},t.prototype.conv3d=function(e,r,o){for(var i=o.filterDepth,a=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,f=o.padInfo.front,h=o.padInfo.left,p=o.padInfo.top,d=ie(o.outShape,e.dtype),v=this.readSync(e.dataId),m=this.readSync(r.dataId),g=d.values,y=0;y<o.batchSize;++y)for(var x=y*e.strides[0],b=y*d.strides[0],w=0;w<o.outDepth;++w)for(var _=b+w*d.strides[1],T=w*o.strideDepth-f,S=0;S<i;S++){var E=T+S*u;if(!(E<0||E>=o.inDepth))for(var I=S*r.strides[0],A=x+E*e.strides[1],N=0;N<o.outHeight;++N)for(var O=_+N*d.strides[2],P=N*o.strideHeight-p,M=0;M<a;M++){var V=P+M*c;if(!(V<0||V>=o.inHeight))for(var U=I+M*r.strides[1],W=A+V*e.strides[2],z=0;z<o.outWidth;++z)for(var G=O+z*o.outChannels,X=z*o.strideWidth-h,ee=0;ee<s;ee++){var te=X+ee*l;if(!(te<0||te>=o.inWidth))for(var se=U+ee*r.strides[2],ue=W+te*o.inChannels,le=se,de=0;de<o.inChannels;++de){for(var he=v[ue+de],ve=0;ve<o.outChannels;++ve)g[G+ve]+=he*m[le+ve];le+=o.outChannels}}}}return d.toTensor()},t.prototype.conv2dDerInput=function(e,r,o){H([e,r],"conv2dDerInput");for(var i=ie(o.inShape,"float32"),a=i.values,s=this.readSync(e.dataId),u=this.readSync(r.dataId),c=r.strides,l=c[0],f=c[1],h=c[2],p=o.batchSize,d=o.filterHeight,v=o.filterWidth,m=o.inChannels,g=o.inHeight,y=o.inWidth,x=o.outChannels,b=o.outHeight,w=o.outWidth,_=o.strideHeight,T=o.strideWidth,S=o.dataFormat,E=d-1-o.padInfo.top,I=v-1-o.padInfo.left,A=S==="channelsLast",N=i.strides[0],O=A?i.strides[1]:i.strides[2],P=A?i.strides[2]:1,M=A?1:i.strides[1],V=e.strides[0],U=A?e.strides[1]:e.strides[2],W=A?e.strides[2]:1,z=A?1:e.strides[1],G=0;G<p;++G)for(var X=0;X<m;++X)for(var ee=0;ee<g;++ee)for(var te=ee-E,se=Math.max(0,Math.ceil(te/_)),ue=Math.min(b,(d+te)/_),le=0;le<y;++le){for(var de=le-I,he=Math.max(0,Math.ceil(de/T)),ve=Math.min(w,(v+de)/T),Fe=0,pe=se;pe<ue;++pe)for(var _e=pe*_-te,ye=he;ye<ve;++ye)for(var Oe=V*G+U*pe+W*ye,Re=l*(d-1-_e)+f*(v-1-(ye*T-de))+h*X,Te=0;Te<x;++Te)Fe+=s[Oe+z*Te]*u[Re+Te];a[N*G+O*ee+P*le+M*X]=Fe}return i.toTensor()},t.prototype.conv3dDerInput=function(e,r,o){for(var i=ie(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],c=s[1],l=s[2],f=s[3],h=this.readSync(e.dataId),p=e.strides,d=p[0],v=p[1],m=p[2],g=p[3],y=this.readSync(r.dataId),x=r.strides,b=x[0],w=x[1],_=x[2],T=x[3],S=o.batchSize,E=o.filterDepth,I=o.filterHeight,A=o.filterWidth,N=o.inChannels,O=o.inDepth,P=o.inHeight,M=o.inWidth,V=o.outChannels,U=o.outDepth,W=o.outHeight,z=o.outWidth,G=o.strideDepth,X=o.strideHeight,ee=o.strideWidth,te=E-1-o.padInfo.front,se=I-1-o.padInfo.top,ue=A-1-o.padInfo.left,le=0;le<S;++le)for(var de=0;de<N;++de)for(var he=0;he<O;++he)for(var ve=he-te,Fe=Math.max(0,Math.ceil(ve/G)),pe=Math.min(U,(E+ve)/G),_e=0;_e<P;++_e)for(var ye=_e-se,Oe=Math.max(0,Math.ceil(ye/X)),Re=Math.min(W,(I+ye)/X),Te=0;Te<M;++Te){for(var Ut=Te-ue,zt=Math.max(0,Math.ceil(Ut/ee)),xt=Math.min(z,(A+Ut)/ee),lr=0,on=Fe;on<pe;++on)for(var Cn=on*G-ve,an=Oe;an<Re;++an)for(var fr=an*X-ye,sn=zt;sn<xt;++sn)for(var la=d*le+v*on+m*an+g*sn,hr=b*(E-1-Cn)+w*(I-1-fr)+_*(A-1-(sn*ee-Ut))+T*de,Gt=0;Gt<V;++Gt)lr+=h[la+Gt]*y[hr+Gt];a[u*le+c*he+l*_e+f*Te+de]=lr}return i.toTensor()},t.prototype.conv2dDerFilter=function(e,r,o){H([e,r],"conv2dDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=ie(o.filterShape,"float32"),f=o.padInfo.left,h=o.padInfo.top,p=this.bufferSync(e),d=this.bufferSync(r),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((h-v)/i)),g=Math.min(o.outHeight,(o.inHeight+h-v)/i),y=0;y<u;++y)for(var x=Math.max(0,Math.ceil((f-y)/a)),b=Math.min(o.outWidth,(o.inWidth+f-y)/a),w=0;w<o.inChannels;++w)for(var _=0;_<o.outChannels;++_){for(var T=0,S=0;S<o.batchSize;++S)for(var E=m;E<g;++E)for(var I=v+E*i-h,A=x;A<b;++A){var N=y+A*a-f;T+=c?p.get(S,I,N,w)*d.get(S,E,A,_):p.get(S,w,I,N)*d.get(S,_,E,A)}l.set(T,v,y,w,_)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,r,o){for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=ie(o.filterShape,"float32"),h=f.values,p=f.strides,d=p[0],v=p[1],m=p[2],g=p[3],y=this.readSync(r.dataId),x=r.strides,b=x[0],w=x[1],_=x[2],T=x[3],S=this.readSync(e.dataId),E=e.strides,I=E[0],A=E[1],N=E[2],O=E[3],P=o.padInfo.front,M=o.padInfo.left,V=o.padInfo.top,U=0;U<u;++U)for(var W=Math.max(0,Math.ceil((P-U)/i)),z=Math.min(o.outDepth,(o.inDepth+P-U)/i),G=U*d,X=0;X<c;++X)for(var ee=Math.max(0,Math.ceil((V-X)/a)),te=Math.min(o.outHeight,(o.inHeight+V-X)/a),se=X*v+G,ue=0;ue<l;++ue)for(var le=Math.max(0,Math.ceil((M-ue)/s)),de=Math.min(o.outWidth,(o.inWidth+M-ue)/s),he=ue*m+se,ve=0;ve<o.inChannels;++ve)for(var Fe=ve*g+he,pe=0;pe<o.outChannels;++pe){for(var _e=0,ye=0;ye<o.batchSize;++ye)for(var Oe=ye*I,Re=ye*b,Te=W;Te<z;++Te)for(var Ut=(U+Te*i-P)*A+Oe,zt=Te*w+Re,xt=ee;xt<te;++xt)for(var lr=(X+xt*a-V)*N+Ut,on=xt*_+zt,Cn=le;Cn<de;++Cn){var an=Cn*T+on;_e+=S[(ue+Cn*s-M)*O+lr+ve]*y[an+pe]}h[Fe+pe]=_e}return f.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var r=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(r,o,i);return a&&(c=this.add(c,a)),s&&(c=Da(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,r,o){H([e,r],"depthwiseConv2D");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.outChannels/o.inChannels,h=ie(o.outShape,e.dtype),p=this.readSync(e.dataId),d=this.readSync(r.dataId),v=h.values,m=0;m<o.batchSize;++m)for(var g=m*e.strides[0],y=m*h.strides[0],x=0;x<o.outHeight;++x)for(var b=y+x*h.strides[1],w=x*o.strideHeight-c,_=0;_<i;++_){var T=w+_*s;if(!(T<0||T>=o.inHeight))for(var S=_*r.strides[0],E=g+T*e.strides[1],I=0;I<o.outWidth;++I)for(var A=b+I*h.strides[2],N=I*o.strideWidth-l,O=0;O<a;++O){var P=N+O*u;if(!(P<0||P>=o.inWidth))for(var M=S+O*r.strides[1],V=E+P*o.inChannels,U=A,W=M,z=0;z<o.inChannels;++z){for(var G=p[V+z],X=0;X<f;++X)v[U+X]+=G*d[W+X];U+=f,W+=f}}}return h.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,r,o){H([e,r],"depthwiseConv2DDerInput");for(var i=ie(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],c=s[1],l=s[2],f=this.readSync(e.dataId),h=e.strides,p=h[0],d=h[1],v=h[2],m=this.readSync(r.dataId),g=r.strides,y=g[0],x=g[1],b=g[2],w=o.batchSize,_=o.filterHeight,T=o.filterWidth,S=o.inChannels,E=o.inHeight,I=o.inWidth,A=o.outChannels,N=o.outHeight,O=o.outWidth,P=o.strideHeight,M=o.strideWidth,V=_-1-o.padInfo.top,U=T-1-o.padInfo.left,W=A/S,z=0;z<w;++z)for(var G=0;G<S;++G)for(var X=0;X<E;++X)for(var ee=X-V,te=Math.max(0,Math.ceil(ee/P)),se=Math.min(N,(_+ee)/P),ue=0;ue<I;++ue){for(var le=ue-U,de=Math.max(0,Math.ceil(le/M)),he=Math.min(O,(T+le)/M),ve=0,Fe=te;Fe<se;++Fe)for(var pe=Fe*P-ee,_e=de;_e<he;++_e)for(var ye=p*z+d*Fe+v*_e,Oe=y*(_-1-pe)+x*(T-1-(_e*M-le))+b*G,Re=0;Re<W;++Re)ve+=f[ye+(G*W+Re)]*m[Oe+Re];a[u*z+c*X+l*ue+G]=ve}return i.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,r,o){H([e,r],"depthwiseConv2DDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=ie(o.filterShape,"float32"),l=o.padInfo.left,f=o.padInfo.top,h=o.outChannels/o.inChannels,p=this.bufferSync(e),d=this.bufferSync(r),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((f-v)/i)),g=Math.min(o.outHeight,(o.inHeight+f-v)/i),y=0;y<u;++y)for(var x=Math.max(0,Math.ceil((l-y)/a)),b=Math.min(o.outWidth,(o.inWidth+l-y)/a),w=0;w<o.outChannels;++w){for(var _=Math.trunc(w/h),T=w%h,S=0,E=0;E<o.batchSize;++E)for(var I=m;I<g;++I)for(var A=v+I*i-f,N=x;N<b;++N){var O=y+N*a-l;S+=p.get(E,A,O,_)*d.get(E,I,N,w)}c.set(S,v,y,_,T)}return c.toTensor()},t.prototype.tile=function(e,r){return H(e,"tile"),of(this.bufferSync(e),r)},t.prototype.pad=function(e,r,o){H(e,"pad");var i=r.map(function(h,p){return h[0]+e.shape[p]+h[1]}),a=r.map(function(h){return h[0]}),s=this.bufferSync(e),u=ie(i,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),f=l.map(function(h,p){return h+a[p]});u.set.apply(u,[s.get.apply(s,l)].concat(f))}return u.toTensor()},t.prototype.transpose=function(e,r){H(e,"transpose");for(var o=new Array(e.rank),i=0;i<o.length;i++)o[i]=e.shape[r[i]];var a=this.readSync(e.dataId),s=ie(o,e.dtype),u=this.bufferSync(e);for(i=0;i<e.size;++i){for(var c=u.indexToLoc(i),l=new Array(c.length),f=0;f<l.length;f++)l[f]=c[r[f]];var h=s.locToIndex(l);s.values[h]=a[i]}return s.toTensor()},t.prototype.gather=function(e,r,o){H([e,r],"gather");var i=e.shape.slice(),a=this.readSync(r.dataId);i[o]=a.length;for(var s=ie(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),f=l.slice();f[o]=a[l[o]];var h=u.locToIndex(f);s.values[c]=u.values[h]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,r,o){H([e],"batchToSpaceND");var i=r.reduce(function(f,h){return f*h}),a=ui(e.shape,r,i),s=ci(a.length,r.length),u=li(e.shape,r,i),c=Xl(o,r.length),l=ql(u,o,r.length);return e.reshape(a).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,r,o){H([e],"spaceToBatchND");var i=r.reduce(function(h,p){return h*p}),a=[[0,0]];a.push.apply(a,o);for(var s=1+r.length;s<e.shape.length;++s)a.push([0,0]);var u=e.pad(a),c=ui(u.shape,r,i,!1),l=ci(c.length,r.length,!1),f=li(u.shape,r,i,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.pool=function(e,r,o){H(e,"pool");for(var i=r.strideHeight,a=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,c=r.effectiveFilterHeight,l=r.effectiveFilterWidth,f=r.padInfo.top,h=r.padInfo.left,p=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,d=this.readSync(e.dataId),v=ie(r.outShape,e.dtype),m=v.values,g=r.outShape[1]*r.outShape[2]*r.outShape[3],y=r.outShape[2]*r.outShape[3],x=r.outShape[3],b=0;b<r.batchSize;++b)for(var w=b*g,_=b*e.strides[0],T=0;T<r.inChannels;++T)for(var S=0;S<r.outHeight;++S)for(var E=S*i-f,I=Math.max(0,E),A=Math.min(r.inHeight,c+E),N=w+S*y,O=0;O<r.outWidth;++O){for(var P=O*a-h,M=Math.max(0,P),V=Math.min(r.inWidth,l+P),U=p,W=0,z=0,G=I;G<A;G+=s){for(var X=_+G*e.strides[1],ee=M;ee<V;ee+=u){var te=d[X+ee*e.strides[2]+T];o==="max"&&te>U?U=te:o==="avg"&&(W+=te,z++)}if(isNaN(U))break}m[N+O*x+T]=o==="avg"?W/z:U}return v.toTensor()},t.prototype.maxPool=function(e,r){return this.pool(e,r,"max")},t.prototype.maxPoolPositions=function(e,r){for(var o=ie(r.outShape,"int32"),i=r.strideHeight,a=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,c=r.effectiveFilterHeight,l=r.effectiveFilterWidth,f=r.padInfo.top,h=r.padInfo.left,p=this.bufferSync(e),d=0;d<r.batchSize;++d)for(var v=0;v<r.inChannels;++v)for(var m=0;m<r.outHeight;++m){for(var g=m*i-f,y=g;y<0;)y+=s;for(var x=Math.min(r.inHeight,c+g),b=0;b<r.outWidth;++b){for(var w=b*a-h,_=w;_<0;)_+=u;for(var T=Math.min(r.inWidth,l+w),S=Number.NEGATIVE_INFINITY,E=-1,I=y;I<x;I+=s)for(var A=I-g,N=_;N<T;N+=u){var O=N-w,P=p.get(d,I,N,v);P>S&&(S=P,E=A*l+O)}o.set(E,d,m,b,v)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(e,r,o,i){H([r,o],"maxPoolBackprop");for(var a=this.maxPoolPositions(r,i),s=i.strideHeight,u=i.strideWidth,c=i.dilationHeight,l=i.dilationWidth,f=i.effectiveFilterHeight,h=i.effectiveFilterWidth,p=h-1-i.padInfo.left,d=f-1-i.padInfo.top,v=ie(r.shape,"float32"),m=this.bufferSync(a),g=this.bufferSync(e),y=0;y<i.batchSize;++y)for(var x=0;x<i.inChannels;++x)for(var b=0;b<i.inHeight;++b)for(var w=0;w<i.inWidth;++w){for(var _=b-d,T=w-p,S=0,E=0;E<f;E+=c){var I=(_+E)/s;if(!(I<0||I>=i.outHeight||Math.floor(I)!==I))for(var A=0;A<h;A+=l){var N=(T+A)/u;if(!(N<0||N>=i.outWidth||Math.floor(N)!==N)){var O=f*h-1-m.get(y,I,N,x)===E*h+A?1:0;O!==0&&(S+=g.get(y,I,N,x)*O)}}}v.set(S,y,b,w,x)}return v.toTensor()},t.prototype.avgPoolBackprop=function(e,r,o){H([e,r],"avgPoolBackprop");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,f=o.effectiveFilterHeight,h=o.effectiveFilterWidth,p=h-1-o.padInfo.left,d=f-1-o.padInfo.top,v=ie(r.shape,"float32"),m=1/(s*u),g=this.bufferSync(e),y=0;y<o.batchSize;++y)for(var x=0;x<o.inChannels;++x)for(var b=0;b<o.inHeight;++b)for(var w=0;w<o.inWidth;++w){for(var _=b-d,T=w-p,S=0,E=0;E<f;E+=c){var I=(_+E)/i;if(!(I<0||I>=o.outHeight||Math.floor(I)!==I))for(var A=0;A<h;A+=l){var N=(T+A)/a;N<0||N>=o.outWidth||Math.floor(N)!==N||(S+=g.get(y,I,N,x))}}v.set(S*m,y,b,w,x)}return v.toTensor()},t.prototype.pool3d=function(e,r,o){H(e,"pool3d");for(var i=r.strideDepth,a=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,f=r.effectiveFilterDepth,h=r.effectiveFilterHeight,p=r.effectiveFilterWidth,d=r.padInfo.front,v=r.padInfo.top,m=r.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,y=this.readSync(e.dataId),x=ie(r.outShape,e.dtype),b=x.values,w=r.outShape[1]*r.outShape[2]*r.outShape[3]*r.outShape[4],_=r.outShape[2]*r.outShape[3]*r.outShape[4],T=r.outShape[3]*r.outShape[4],S=r.outShape[4],E=0;E<r.batchSize;++E)for(var I=E*w,A=E*e.strides[0],N=0;N<r.inChannels;++N)for(var O=0;O<r.outDepth;++O){for(var P=O*i-d,M=P;M<0;)M+=u;for(var V=Math.min(r.inDepth,f+P),U=I+O*_,W=0;W<r.outHeight;++W){for(var z=W*a-v,G=z;G<0;)G+=c;for(var X=Math.min(r.inHeight,h+z),ee=U+W*T,te=0;te<r.outWidth;++te){for(var se=te*s-m,ue=se;ue<0;)ue+=l;for(var le=Math.min(r.inWidth,p+se),de=ee+te*S,he=g,ve=0,Fe=0,pe=M;pe<V;pe+=u){for(var _e=A+pe*e.strides[1],ye=G;ye<X;ye+=c){for(var Oe=_e+ye*e.strides[2],Re=ue;Re<le;Re+=l){var Te=y[Oe+Re*e.strides[3]+N];if(o==="max"&&Te>he?he=Te:o==="avg"&&(ve+=Te,Fe++),isNaN(he))break}if(isNaN(he))break}if(isNaN(he))break}b[de+N]=o==="avg"?ve/Fe:he}}}return x.toTensor()},t.prototype.avgPool3d=function(e,r){return H(e,"avgPool3d"),this.pool3d(e,r,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,r,o){H([e,r],"avgPool3dBackprop");for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=o.dilationDepth,h=o.dilationHeight,p=o.dilationWidth,d=o.effectiveFilterDepth,v=o.effectiveFilterHeight,m=o.effectiveFilterWidth,g=d-1-o.padInfo.front,y=m-1-o.padInfo.left,x=v-1-o.padInfo.top,b=ie(r.shape,"float32"),w=1/(u*c*l),_=this.bufferSync(e),T=0;T<o.batchSize;++T)for(var S=0;S<o.inChannels;++S)for(var E=0;E<o.inDepth;++E)for(var I=0;I<o.inHeight;++I)for(var A=0;A<o.inWidth;++A){for(var N=E-g,O=I-x,P=A-y,M=0,V=0;V<d;V+=f){var U=(N+V)/i;if(!(U<0||U>=o.outDepth||Math.floor(U)!==U))for(var W=0;W<v;W+=h){var z=(O+W)/a;if(!(z<0||z>=o.outHeight||Math.floor(z)!==z))for(var G=0;G<m;G+=p){var X=(P+G)/s;X<0||X>=o.outWidth||Math.floor(X)!==X||(M+=_.get(T,U,z,X,S))}}}b.set(M*w,T,E,I,A,S)}return b.toTensor()},t.prototype.maxPool3d=function(e,r){return H(e,"maxPool3d"),this.pool3d(e,r,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,r){for(var o=ie(r.outShape,"int32"),i=r.strideDepth,a=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,f=r.effectiveFilterDepth,h=r.effectiveFilterHeight,p=r.effectiveFilterWidth,d=r.padInfo.front,v=r.padInfo.top,m=r.padInfo.left,g=this.bufferSync(e),y=0;y<r.batchSize;++y)for(var x=0;x<r.inChannels;++x)for(var b=0;b<r.outDepth;++b){for(var w=b*i-d,_=w;_<0;)_+=u;for(var T=Math.min(r.inDepth,f+w),S=0;S<r.outHeight;++S){for(var E=S*a-v,I=E;I<0;)I+=c;for(var A=Math.min(r.inHeight,h+E),N=0;N<r.outWidth;++N){for(var O=N*s-m,P=O;P<0;)P+=l;for(var M=Math.min(r.inWidth,p+O),V=Number.NEGATIVE_INFINITY,U=-1,W=_;W<T;W+=u)for(var z=W-w,G=I;G<A;G+=c)for(var X=G-E,ee=P;ee<M;ee+=l){var te=ee-O,se=g.get(y,W,G,ee,x);se>=V&&(V=se,U=z*h*p+X*h+te)}o.set(U,y,b,S,N,x)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(e,r,o,i){H([r,o],"maxPool3dBackprop");for(var a=this.maxPool3dPositions(r,i),s=i.strideDepth,u=i.strideHeight,c=i.strideWidth,l=i.dilationDepth,f=i.dilationHeight,h=i.dilationWidth,p=i.effectiveFilterDepth,d=i.effectiveFilterHeight,v=i.effectiveFilterWidth,m=p-1-i.padInfo.front,g=v-1-i.padInfo.left,y=d-1-i.padInfo.top,x=ie(r.shape,"float32"),b=this.bufferSync(a),w=this.bufferSync(e),_=0;_<i.batchSize;++_)for(var T=0;T<i.inChannels;++T)for(var S=0;S<i.inDepth;++S)for(var E=0;E<i.inHeight;++E)for(var I=0;I<i.inWidth;++I){for(var A=S-m,N=E-y,O=I-g,P=0,M=0;M<p;M+=l){var V=(A+M)/s;if(!(V<0||V>=i.outDepth||Math.floor(V)!==V))for(var U=0;U<d;U+=f){var W=(N+U)/u;if(!(W<0||W>=i.outHeight||Math.floor(W)!==W))for(var z=0;z<v;z+=h){var G=(O+z)/c;if(!(G<0||G>=i.outWidth||Math.floor(G)!==G)){var X=p*d*v-1-b.get(_,V,W,G,T)===M*d*v+U*v+z?1:0;X!==0&&(P+=w.get(_,V,W,G,T)*X)}}}}x.set(P,_,S,E,I,T)}return x.toTensor()},t.prototype.cast=function(e,r){return ef(e,r,this)},t.prototype.reshape=function(e,r){return rs(e,r)},t.prototype.avgPool=function(e,r){return H(e,"avgPool"),this.pool(e,r,"avg").toFloat()},t.prototype.resizeBilinear=function(e,r,o,i){H(e,"resizeBilinear");for(var a=e.shape,s=a[0],u=a[1],c=a[2],l=a[3],f=this.readSync(e.dataId),h=new Float32Array(Y([s,r,o,l])),p=[i&&r>1?u-1:u,i&&o>1?c-1:c],d=[i&&r>1?r-1:r,i&&o>1?o-1:o],v=0,m=p[0]/d[0],g=p[1]/d[1],y=0;y<s;y++)for(var x=0;x<r;x++)for(var b=m*x,w=Math.floor(b),_=b-w,T=Math.min(u-1,Math.ceil(b)),S=y*e.strides[0]+w*e.strides[1],E=y*e.strides[0]+T*e.strides[1],I=0;I<o;I++)for(var A=g*I,N=Math.floor(A),O=A-N,P=Math.min(c-1,Math.ceil(A)),M=S+N*e.strides[2],V=E+N*e.strides[2],U=S+P*e.strides[2],W=E+P*e.strides[2],z=0;z<l;z++){var G=f[M+z],X=f[V+z],ee=G+(f[U+z]-G)*O,te=ee+(X+(f[W+z]-X)*O-ee)*_;h[v++]=te}return tt(h,[s,r,o,l])},t.prototype.resizeBilinearBackprop=function(e,r,o){H([e,r],"resizeBilinearBackprop");for(var i=r.shape,a=i[0],s=i[1],u=i[2],c=i[3],l=e.shape,f=l[1],h=l[2],p=new Float32Array(a*s*u*c),d=[o&&f>1?s-1:s,o&&h>1?u-1:u],v=[o&&f>1?f-1:f,o&&h>1?h-1:h],m=d[0]/v[0],g=d[1]/v[1],y=this.readSync(e.dataId),x=0,b=0;b<a;b++)for(var w=b*r.strides[0],_=0;_<f;_++)for(var T=_*m,S=Math.floor(T),E=Math.min(Math.ceil(T),s-1),I=w+S*r.strides[1],A=w+E*r.strides[1],N=T-S,O=1-N,P=0;P<h;P++)for(var M=P*g,V=Math.floor(M),U=Math.min(Math.ceil(M),u-1),W=M-V,z=1-W,G=I+V*r.strides[2],X=I+U*r.strides[2],ee=A+V*r.strides[2],te=A+U*r.strides[2],se=O*z,ue=O*W,le=N*z,de=N*W,he=0;he<c;he++){var ve=y[x++];p[G+he]+=ve*se,p[X+he]+=ve*ue,p[ee+he]+=ve*le,p[te+he]+=ve*de}return dt(p,[a,u,s,c],r.dtype)},t.prototype.resizeNearestNeighbor=function(e,r,o,i){H(e,"resizeNearestNeighbor");for(var a=e.shape,s=a[0],u=a[1],c=a[2],l=a[3],f=this.readSync(e.dataId),h=new Float32Array(s*r*o*l),p=[i&&r>1?u-1:u,i&&o>1?c-1:c],d=[i&&r>1?r-1:r,i&&o>1?o-1:o],v=p[0]/d[0],m=p[1]/d[1],g=0,y=0;y<s;y++)for(var x=y*e.strides[0],b=0;b<r;b++)for(var w=v*b,_=x+Math.min(u-1,i?Math.round(w):Math.floor(w))*e.strides[1],T=0;T<o;T++)for(var S=m*T,E=_+Math.min(c-1,i?Math.round(S):Math.floor(S))*e.strides[2],I=0;I<l;I++){var A=f[E+I];h[g++]=A}return tt(h,[s,r,o,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,r,o){H([e,r],"resizeNearestNeighborBackprop");for(var i=r.shape,a=i[0],s=i[1],u=i[2],c=i[3],l=e.shape,f=l[1],h=l[2],p=new Float32Array(a*s*u*c),d=this.readSync(e.dataId),v=[o&&f>1?s-1:s,o&&h>1?u-1:u],m=[o&&f>1?f-1:f,o&&h>1?h-1:h],g=v[0]/m[0],y=v[1]/m[1],x=1/g,b=1/y,w=2*Math.ceil(x)+2,_=2*Math.ceil(b)+2,T=0;T<a;T++)for(var S=T*r.strides[0],E=0;E<s;E++)for(var I=S+E*r.strides[1],A=Math.floor(E*x),N=Math.floor(A-w/2),O=0;O<u;O++)for(var P=I+O*r.strides[2],M=Math.floor(O*b),V=Math.floor(M-_/2),U=0;U<c;U++){for(var W=0,z=0;z<w;z++){var G=z+N;if(!(G<0||G>=f)){var X=S+G*e.strides[1],ee=G*g;if(E===Math.min(s-1,o?Math.round(ee):Math.floor(ee)))for(var te=0;te<_;te++){var se=te+V;if(!(se<0||se>=h)){var ue=X+se*e.strides[2],le=se*y;O===Math.min(u-1,o?Math.round(le):Math.floor(le))&&(W+=d[ue+U])}}}}p[P+U]=W}return dt(p,r.shape,r.dtype)},t.prototype.batchNormalization=function(e,r,o,i,a,s){H([e,r,o,a,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=this.readSync(o.dataId),f=a?this.readSync(a.dataId):new Float32Array([1]),h=s?this.readSync(s.dataId):new Float32Array([0]),p=new Float32Array(u.length),d=h.length,v=f.length,m=l.length,g=c.length,y=0,x=0,b=0,w=0,_=0;_<u.length;++_)p[_]=h[y++]+(u[_]-c[x++])*f[b++]/Math.sqrt(l[w++]+i),y>=d&&(y=0),x>=g&&(x=0),b>=v&&(b=0),w>=m&&(w=0);return dt(p,e.shape)},t.prototype.localResponseNormalization4D=function(e,r,o,i,a){H(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,f=new Float32Array(l);function h(m){for(var g=m%s,y=m-g+Math.max(0,g-r),x=m-g+Math.min(g+r,u),b=0;y<=x;y++){var w=c[y];b+=w*w}return b}for(var p=0;p<l;p++){var d=h(p),v=c[p]*Math.pow(o+i*d,-a);f[p]=v}return dt(f,e.shape)},t.prototype.LRNGrad=function(e,r,o,i,a,s,u){H(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),f=this.readSync(r.dataId),h=this.readSync(o.dataId),p=new Float32Array(e.size),d=e.size,v=0;v<d;v++){for(var m=v%c,g=v-m+Math.max(0,m-i),y=v-m+Math.min(c,m+i+1),x=0,b=g;b<y;b++)x+=Math.pow(f[b],2);for(x=s*x+a,b=g;b<y;b++){var w=-2*s*u*f[b]*h[v]/x;v===b&&(w+=Math.pow(x,-u)),w*=l[v],p[b]+=w}}return dt(p,e.shape)},t.prototype.multinomial=function(e,r,o,i){H(e,"multinomial");for(var a=r?e:bn(e),s=a.shape[0],u=a.shape[1],c=Ce([s,o],"int32"),l=this.readSync(c.dataId),f=this.readSync(a.dataId),h=0;h<s;++h){var p=h*u,d=new Float32Array(u-1);d[0]=f[p];for(var v=1;v<d.length;++v)d[v]=d[v-1]+f[p+v];for(var m=Di(i.toString()),g=h*o,y=0;y<o;++y){var x=m();l[g+y]=d.length;for(var b=0;b<d.length;b++)if(x<d[b]){l[g+y]=b;break}}}return c},t.prototype.oneHot=function(e,r,o,i){H(e,"oneHot");var a=new Float32Array(e.size*r);a.fill(i);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<r&&(a[u*r+s[u]]=o);return On(a,[e.size,r],"int32")},t.prototype.nonMaxSuppression=function(e,r,o,i,a){return H(e,"nonMaxSuppression"),Ts(this.readSync(e.dataId),this.readSync(r.dataId),o,i,a)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,r){for(var o=e.shape[0],i=e.shape[1],a=ie(e.shape,"float32"),s=ie(e.shape,"float32"),u=At(e).as2D(o,i),c=Kt(e).as2D(o,i),l=0;l<o;l++)for(var f=u.slice([l,0],[1,i]),h=c.slice([l,0],[1,i]),p=Ze(f,h),d=this.readSync(this.fftImpl(p,r).dataId),v=0;v<i;v++){var m=fc(d,v);a.values[l*i+v]=m.real,s.values[l*i+v]=m.imag}return Ze(a.toTensor(),s.toTensor()).as2D(o,i)},t.prototype.fftImpl=function(e,r){var o=e.as1D(),i=o.size;if(this.isExponentOf2(i)){var a=this.fftRadix2(o,i,r).as2D(e.shape[0],e.shape[1]);return r&&(a=Ze(At(a).div(q(i)),Kt(a).div(q(i)))),a}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),f=new Float32Array(c.length/2),h=0;h<c.length;h+=2)l[h/2]=c[h],f[h/2]=c[h+1];return{real:l,imag:f}}(this.fourierTransformByMatmul(s,i,r));return Ze(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,r,o){if(r===1)return e;var i=this.readSync(e.dataId),a=r/2,s=function(g){for(var y=Math.ceil(g.length/4),x=new Float32Array(y),b=new Float32Array(y),w=0;w<g.length;w+=4)x[Math.floor(w/4)]=g[w],b[Math.floor(w/4)]=g[w+1];return{real:x,imag:b}}(i),u=Ze(s.real,s.imag).as1D(),c=function(g){for(var y=Math.floor(g.length/4),x=new Float32Array(y),b=new Float32Array(y),w=2;w<g.length;w+=4)x[Math.floor(w/4)]=g[w],b[Math.floor(w/4)]=g[w+1];return{real:x,imag:b}}(i),l=Ze(c.real,c.imag).as1D();u=this.fftRadix2(u,a,o),l=this.fftRadix2(l,a,o);var f=function(g,y){for(var x=new Float32Array(g/2),b=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var _=(y?2:-2)*Math.PI*(w/g);x[w]=Math.cos(_),b[w]=Math.sin(_)}return{real:x,imag:b}}(r,o),h=Ze(f.real,f.imag).mul(l),p=u.add(h),d=u.sub(h),v=At(p).concat(At(d)),m=Kt(p).concat(Kt(d));return Ze(v,m).as1D()},t.prototype.fourierTransformByMatmul=function(e,r,o){for(var i=new Float32Array(2*r),a=0;a<r;a++){for(var s=0,u=0,c=0;c<r;c++){var l=Uv(a*c,r,o),f=fc(e,c);s+=f.real*l.real-f.imag*l.imag,u+=f.real*l.imag+f.imag*l.real}o&&(s/=r,u/=r),Vv(i,s,u,a)}return i},t.prototype.depthToSpace=function(e,r,o){R(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),R(r>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+r});for(var i=e.shape[0],a=e.shape[1],s=e.shape[2],u=e.shape[3],c=a*r,l=s*r,f=u/(r*r),h=this.readSync(e.dataId),p=new Float32Array(i*c*l*f),d=0,v=0;v<i;++v)for(var m=0;m<c;++m)for(var g=Math.floor(m/r),y=m%r,x=0;x<l;++x)for(var b=Math.floor(x/r),w=(y*r+x%r)*f,_=0;_<f;++_){var T=_+w+u*(b+s*(g+a*v));p[d++]=h[T]}return dt(p,[i,c,l,f])},t.prototype.broadcastedBinaryOp=function(e,r,o,i){var a=fe(e.shape,r.shape),s=ie(a,o),u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=Nn(e.shape,a),f=Nn(r.shape,a),h=s.values;if(l.length+f.length===0)for(var p=0;p<h.length;++p)h[p]=i(u[p%u.length],c[p%c.length]);else{var d=this.bufferSync(e),v=this.bufferSync(r),m=function(g){var y=s.indexToLoc(g),x=y.slice(-e.rank);l.forEach(function(T){return x[T]=0});var b=d.locToIndex(x),w=y.slice(-r.rank);f.forEach(function(T){return w[T]=0});var _=v.locToIndex(w);h[g]=i(u[b],c[_])};for(p=0;p<h.length;++p)m(p)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,r,o){var i=fe(e.shape,r.shape),a=ie(i,"float32"),s=ie(i,"float32"),u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=Nn(e.shape,i),f=Nn(r.shape,i),h=a.values,p=s.values;if(l.length+f.length===0)for(var d=0;d<h.length;d++){var v=d%u.length,m=d%c.length,g=o(u[2*v],u[2*v+1],c[2*m],c[2*m+1]);h[d]=g.real,p[d]=g.imag}else{var y=this.bufferSync(this.data.get(e.dataId).complexTensors.real),x=this.bufferSync(this.data.get(r.dataId).complexTensors.real),b=function(w){var _=a.indexToLoc(w),T=_.slice(-e.rank);l.forEach(function(N){return T[N]=0});var S=y.locToIndex(T),E=_.slice(-r.rank);f.forEach(function(N){return E[N]=0});var I=x.locToIndex(E),A=o(u[2*S],u[2*S+1],c[2*I],c[2*I+1]);h[w]=A.real,p[w]=A.imag};for(d=0;d<h.length;d++)b(d)}return this.complex(a.toTensor(),s.toTensor())},t.prototype.split=function(e,r,o){return rf(e,r,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,r,o,i,a,s){for(var u=e.shape,c=u[0],l=u[1],f=u[2],h=u[3],p=r.shape[0],d=i[0],v=i[1],m=ie([p,d,v,h],"float32"),g=this.readSync(r.dataId),y=this.readSync(o.dataId),x=this.readSync(e.dataId),b=e.strides,w=m.strides,_=0;_<p;_++){var T=4*_,S=g[T],E=g[T+1],I=g[T+2],A=g[T+3],N=y[_];if(!(N>=c))for(var O=d>1?(I-S)*(l-1)/(d-1):0,P=v>1?(A-E)*(f-1)/(v-1):0,M=0;M<d;M++){var V=d>1?S*(l-1)+M*O:.5*(S+I)*(l-1);if(V<0||V>l-1)for(var U=0;U<v;U++)for(var W=0;W<h;W++){var z=W+U*w[2]+M*w[1]+_*w[0];m.values[z]=s}else if(a==="bilinear"){var G=Math.floor(V),X=Math.ceil(V),ee=V-G;for(U=0;U<v;U++)if((pe=v>1?E*(f-1)+U*P:.5*(E+A)*(f-1))<0||pe>f-1)for(W=0;W<h;W++)z=W+U*w[2]+M*w[1]+_*w[0],m.values[z]=s;else{var te=Math.floor(pe),se=Math.ceil(pe),ue=pe-te;for(W=0;W<h;W++){var le=x[z=W+te*b[2]+G*b[1]+N*b[0]],de=x[z=W+se*b[2]+G*b[1]+N*b[0]],he=x[z=W+te*b[2]+X*b[1]+N*b[0]],ve=le+(de-le)*ue,Fe=he+(x[z=W+se*b[2]+X*b[1]+N*b[0]]-he)*ue;z=W+U*w[2]+M*w[1]+_*w[0],m.values[z]=ve+(Fe-ve)*ee}}}else for(U=0;U<v;++U){var pe;if((pe=v>1?E*(f-1)+U*P:.5*(E+A)*(f-1))<0||pe>f-1)for(W=0;W<h;W++)z=W+U*w[2]+M*w[1]+_*w[0],m.values[z]=s;else{var _e=Math.round(pe),ye=Math.round(V);for(W=0;W<h;W++){var Oe=W+_e*b[2]+ye*b[1]+N*b[0],Re=W+U*w[2]+M*w[1]+_*w[0];m.values[Re]=x[Oe]}}}}}return m.toTensor()},t.prototype.sparseToDense=function(e,r,o,i){var a=fi(0,e,o),s=a.sliceRank,u=a.numUpdates,c=a.sliceSize,l=a.strides,f=a.outputSize;return this.scatter(e,r,o,f,c,u,s,l,i,!1)},t.prototype.gatherND=function(e,r){var o=r.shape,i=o[o.length-1],a=jl(e,r),s=a[0],u=a[1],c=a[2],l=a[3];if(u===0)return tt([],s,e.dtype);for(var f=new eo([u,c],e.dtype),h=this.readSync(r.dataId),p=this.readSync(e.dataId),d=0;d<u;d++){for(var v=[],m=0,g=0;g<i;g++){var y=h[d*i+g];m+=y*l[g],v.push(y)}if(m<0||m>=e.size/c)throw new Error("Invalid indices: "+v+" does not index into "+e.shape);for(var x=0;x<c;x++)f.values[d*c+x]=p[m*c+x]}return f.toTensor().reshape(s)},t.prototype.scatterND=function(e,r,o){var i=fi(0,e,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,c=i.strides,l=i.outputSize,f=q(0);return this.scatter(e,r,o,l,u,s,a,c,f,!0)},t.prototype.fill=function(e,r,o){var i=ti(o=o||ho(r),Y(e));return i.fill(r),D.makeTensor(i,e,o,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var r=ti(e.dtype,Y(e.shape));return this.makeOutput(r,e.shape,e.dtype)},t.prototype.linspace=function(e,r,o){return tf(e,r,o)},t.prototype.scatter=function(e,r,o,i,a,s,u,c,l,f){var h=[i/a,a],p=this.readSync(e.dataId),d=this.readSync(r.dataId);if(i===0)return tt([],o,r.dtype);var v=new eo(h,r.dtype);v.values.fill(this.readSync(l.dataId)[0]);for(var m=0;m<s;m++){for(var g=[],y=0,x=0;x<u;x++){var b=p[m*u+x];g.push(b),y+=b*c[x]}if(y<0||y>=i/a)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var w=0;w<a;w++)f?v.values[y*a+w]+=d[m*a+w]:v.values[y*a+w]=r.rank===0?d[0]:d[m*a+w]}return v.toTensor().reshape(o)},t}(Ql);D.registerBackend("cpu",function(){return new sb},1);for(var Oa=0,Oc=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs,o=t,i=o.boxes,a=o.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e;H(i,"NonMaxSuppressionWithScore");var p=Ns(h.data.get(i.dataId).values,h.data.get(a.dataId).values,u,c,l,f);return[p.selectedIndices,p.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t.x,o=e;H(r,"square");for(var i=o.data.get(r.dataId).values,a=new Float32Array(i.length),s=0;s<i.length;++s){var u=i[s];a[s]=u*u}return{dataId:o.write(a,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},{kernelName:ro,backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t,o=r.a,i=r.b,a=e;H([o,i],ro);var s=a.data.get(o.dataId).values,u=a.data.get(i.dataId).values,c=function(h,p,d,v,m,g){var y=fe(h,p),x=y.length,b=Jt(y),w=Zr(m,Y(y)),_=h.length,T=p.length,S=Jt(h),E=Jt(p),I=Nn(h,y),A=Nn(p,y);if(I.length+A.length===0)for(var N=0;N<w.length;++N)w[N]=g(d[N%d.length],v[N%v.length]);else{var O=function(P){var M=gd(P,x,b),V=M.slice(-_);I.forEach(function(G){return V[G]=0});var U=nc(V,_,S),W=M.slice(-T);A.forEach(function(G){return W[G]=0});var z=nc(W,T,E);w[P]=g(d[U],v[z])};for(N=0;N<w.length;++N)O(N)}return[w,y]}(o.shape,i.shape,s,u,o.dtype,function(h,p){var d=h-p;return d*d}),l=c[0],f=c[1];return{dataId:a.write(l,f,o.dtype),shape:f,dtype:o.dtype}}}];Oa<Oc.length;Oa++)Il(Oc[Oa]);var dr,ub=function(n){this.variableNames=["A"];var t=at(),e=n[0],r=n[1];this.outputShape=n,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+r+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},cb=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=at(),e=n[0],r=n[1];this.outputShape=n,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+r+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var Pa=0,Pc=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs,o=t.pixels,i=r.numChannels,a=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=a?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],f=[l,c],h=[l,c,i];(s||a)&&(dr==null&&(dr=document.createElement("canvas").getContext("2d")),dr.canvas.width=c,dr.canvas.height=l,dr.drawImage(o,0,0,c,l),o=dr.canvas);var p=e.makeTensorInfo(f,"int32");e.texData.get(p.dataId).usage=Ct.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(p.dataId),o);var d=L().getBool("WEBGL_PACK")?new cb(h):new ub(h),v=e.runWebGLProgram(d,[p],"int32");return e.disposeData(p.dataId),v}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs;ii("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,i=o.boxes,a=o.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e,p=Ns(h.readSync(i.dataId),h.readSync(a.dataId),u,c,l,f);return[p.selectedIndices,p.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t.x,o=e,i=new ae(r.shape,"return x * x;");return o.runWebGLProgram(i,[r],r.dtype)}},{kernelName:ro,backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t,o=r.a,i=r.b,a=e,s=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ln("return (a - b) * (a - b);",o.shape,i.shape):new Pe("return (a - b) * (a - b);",o.shape,i.shape);return a.compileAndRun(s,[o,i])}}];Pa<Pc.length;Pa++)Il(Pc[Pa]);for(var Ma=0,Mc=[{kernelName:"Square",gradFunc:function(n,t){var e=t[0];return{x:function(){return n.mul(e.toFloat().mul(2))}}}},{kernelName:ro,gradFunc:function(n,t){var e=t[0],r=t[1],o=q(2);return{a:function(){return ut(n,ut(o,qe(e,r)))},b:function(){return ut(n,ut(o,qe(r,e)))}}}}];Ma<Mc.length;Ma++)ad(Mc[Ma]);var lb=function(){function n(){}return n.prototype.fetch=function(t,e){return fetch(t,e)},n.prototype.now=function(){return performance.now()},n.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},n.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},n}();L().get("IS_BROWSER")&&L().setPlatform("browser",new lb);var Fa,fb=function(){return require("node-fetch")},hb=function(){function n(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return n.prototype.fetch=function(t,e){return L().global.fetch!=null?L().global.fetch(t,e):(Fa==null&&(Fa=fb()),Fa(t,e))},n.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},n.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},n.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},n}();L().get("IS_NODE")&&L().setPlatform("node",new hb);var as={float32:4,int32:4,uint16:2,uint8:1,bool:1},yi=4;function Yf(n,t){for(var e={},r=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,f=Y(l),h=void 0;if("quantization"in s){var p=s.quantization;if(p.dtype!=="uint8"&&p.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+p.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var d=as[p.dtype],v=n.slice(r,r+f*d),m=p.dtype==="uint8"?new Uint8Array(v):new Uint16Array(v);if(c==="float32")h=Float32Array.from(m,function(_){return _*p.scale+p.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=Int32Array.from(m,function(_){return Math.round(_*p.scale+p.min)})}r+=f*d}else if(c==="string"){var g=Y(s.shape);h=[];for(var y=0;y<g;y++){var x=new Uint32Array(n.slice(r,r+yi))[0];r+=yi;var b=new Uint8Array(n.slice(r,r+x));h.push(b),r+=x}}else{var w=as[c];if(v=n.slice(r,r+f*w),c==="float32")h=new Float32Array(v);else if(c==="int32")h=new Int32Array(v);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=new Uint8Array(v)}r+=f*w}e[u]=tt(h,l,c)},i=0,a=t;i<a.length;i++)o(a[i]);return e}function pb(n){if(n===null)throw new Error("Invalid input value: "+JSON.stringify(n));var t=0,e=[];n.forEach(function(i){if(t+=i.byteLength,e.push(i.byteLength===i.buffer.byteLength?i:new i.constructor(i)),!(i instanceof Float32Array||i instanceof Int32Array||i instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+i.constructor.name)});var r=new Uint8Array(t),o=0;return e.forEach(function(i){r.set(new Uint8Array(i.buffer),o),o+=i.byteLength}),r.buffer}var ss=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Fc(n){return ss?Buffer.byteLength(n):new Blob([n]).size}function Ks(n){var t=0;n.forEach(function(o){t+=o.byteLength});var e=new Uint8Array(t),r=0;return n.forEach(function(o){e.set(new Uint8Array(o),r),r+=o.byteLength}),e.buffer}function Bc(n){for(n=n.trim();n.endsWith("/");)n=n.slice(0,n.length-1);var t=n.split("/");return t[t.length-1]}function xo(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Fc(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Fc(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:n.weightData.byteLength}}var St=function(){function n(){this.saveRouters=[],this.loadRouters=[]}return n.getInstance=function(){return n.instance==null&&(n.instance=new n),n.instance},n.registerSaveRouter=function(t){n.getInstance().saveRouters.push(t)},n.registerLoadRouter=function(t){n.getInstance().loadRouters.push(t)},n.getSaveHandlers=function(t){return n.getHandlers(t,"save")},n.getLoadHandlers=function(t,e){return n.getHandlers(t,"load",e)},n.getHandlers=function(t,e,r){var o=[];return(e==="load"?n.getInstance().loadRouters:n.getInstance().saveRouters).forEach(function(i){var a=i(t,r);a!==null&&o.push(a)}),o},n}(),Sr="://",Pn=function(){function n(){this.managers={}}return n.getInstance=function(){return n.instance==null&&(n.instance=new n),n.instance},n.registerManager=function(t,e){R(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(Sr)&&(t=t.slice(0,t.indexOf(Sr))),R(t.length>0,function(){return"scheme must not be an empty string."});var r=n.getInstance();R(r.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),r.managers[t]=e},n.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},n.getSchemes=function(){return Object.keys(this.getInstance().managers)},n}();function qo(n){if(n.indexOf(Sr)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+Pn.getSchemes().join(","));return{scheme:n.split(Sr)[0],path:n.split(Sr)[1]}}function Lc(n,t,e){return e===void 0&&(e=!1),K(this,void 0,void 0,function(){var r,o,i,a,s,u,c,l,f;return $(this,function(h){switch(h.label){case 0:return R(n!==t,function(){return"Old path and new path are the same: '"+n+"'"}),R((r=St.getLoadHandlers(n)).length>0,function(){return"Copying failed because no load handler is found for source URL "+n+"."}),R(r.length<2,function(){return"Copying failed because more than one ("+r.length+") load handlers for source URL "+n+"."}),o=r[0],R((i=St.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),R(i.length<2,function(){return"Copying failed because more than one ("+r.length+") save handlers for destination URL "+t+"."}),a=i[0],s=qo(n).scheme,u=qo(n).path,c=s===qo(n).scheme,[4,o.load()];case 1:return l=h.sent(),e&&c?[4,Pn.getManager(s).removeModel(u)]:[3,3];case 2:h.sent(),h.label=3;case 3:return[4,a.save(l)];case 4:return f=h.sent(),!e||c?[3,6]:[4,Pn.getManager(s).removeModel(u)];case 5:h.sent(),h.label=6;case 6:return[2,f.modelArtifactsInfo]}})})}var $n="models_store",An="model_info_store";function Jf(){if(!L().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var n=window||self,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function us(n){var t=n.result;t.createObjectStore($n,{keyPath:"modelPath"}),t.createObjectStore(An,{keyPath:"modelPath"})}var Ir=function(){function n(t){if(this.indexedDB=Jf(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return n.prototype.save=function(t){return K(this,void 0,void 0,function(){return $(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},n.prototype.load=function(){return K(this,void 0,void 0,function(){return $(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},n.prototype.databaseAction=function(t,e){var r=this;return new Promise(function(o,i){var a=r.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return us(a)},a.onsuccess=function(){var s=a.result;if(e==null){var u=s.transaction($n,"readonly"),c=u.objectStore($n).get(r.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),i(new Error("Cannot find model with path '"+r.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(v){return s.close(),i(c.error)},u.oncomplete=function(){return s.close()}}else{var l,f=xo(e),h=s.transaction(An,"readwrite"),p=h.objectStore(An),d=p.put({modelPath:r.modelPath,modelArtifactsInfo:f});d.onsuccess=function(){var v=(l=s.transaction($n,"readwrite")).objectStore($n).put({modelPath:r.modelPath,modelArtifacts:e,modelArtifactsInfo:f});v.onsuccess=function(){return o({modelArtifactsInfo:f})},v.onerror=function(m){var g=(p=h.objectStore(An)).delete(r.modelPath);g.onsuccess=function(){return s.close(),i(v.error)},g.onerror=function(y){return s.close(),i(v.error)}}},d.onerror=function(v){return s.close(),i(d.error)},h.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},a.onerror=function(s){return i(a.error)}})},n.URL_SCHEME="indexeddb://",n}(),Wc=function(n){return L().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Ir.URL_SCHEME)?(t=n.slice(Ir.URL_SCHEME.length),new Ir(t)):null;var t};St.registerSaveRouter(Wc),St.registerLoadRouter(Wc);var db=function(){function n(){this.indexedDB=Jf()}return n.prototype.listModels=function(){return K(this,void 0,void 0,function(){var t=this;return $(this,function(e){return[2,new Promise(function(r,o){var i=t.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return us(i)},i.onsuccess=function(){var a=i.result,s=a.transaction(An,"readonly"),u=s.objectStore(An).getAll();u.onsuccess=function(){for(var c={},l=0,f=u.result;l<f.length;l++){var h=f[l];c[h.modelPath]=h.modelArtifactsInfo}r(c)},u.onerror=function(c){return a.close(),o(u.error)},s.oncomplete=function(){return a.close()}},i.onerror=function(a){return o(i.error)}})]})})},n.prototype.removeModel=function(t){return K(this,void 0,void 0,function(){var e=this;return $(this,function(r){var o;return t=(o=t).startsWith(Ir.URL_SCHEME)?o.slice(Ir.URL_SCHEME.length):o,[2,new Promise(function(i,a){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return us(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(An,"readwrite"),f=l.objectStore(An),h=f.get(t);h.onsuccess=function(){if(h.result==null)return c.close(),a(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var p=f.delete(t),d=function(){var v=(u=c.transaction($n,"readwrite")).objectStore($n).delete(t);v.onsuccess=function(){return i(h.result.modelArtifactsInfo)},v.onerror=function(m){return a(h.error)}};p.onsuccess=d,p.onerror=function(v){return d(),c.close(),a(h.error)}},h.onerror=function(p){return c.close(),a(h.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return a(s.error)}})]})})},n}();if(L().getBool("IS_BROWSER"))try{Pn.registerManager(Ir.URL_SCHEME,new db)}catch{}var pn="/",wr="tensorflowjs_models",Qf="info",vb="model_topology",mb="weight_specs",gb="weight_data",yb="model_metadata";function Zf(n){return{info:[wr,n,Qf].join(pn),topology:[wr,n,vb].join(pn),weightSpecs:[wr,n,mb].join(pn),weightData:[wr,n,gb].join(pn),modelMetadata:[wr,n,yb].join(pn)}}function bb(n){var t=n.split(pn);if(t.length<3)throw new Error("Invalid key format: "+n);return t.slice(1,t.length-1).join(pn)}var Rr=function(){function n(t){if(!L().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Zf(this.modelPath)}return n.prototype.save=function(t){return K(this,void 0,void 0,function(){var e,r,o;return $(this,function(i){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),o=xo(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,function(a){if(ss)return Buffer.from(a).toString("base64");for(var s=new Uint8Array(a),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},n.prototype.load=function(){return K(this,void 0,void 0,function(){var t,e,r,o,i,a,s;return $(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(r=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=r,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(i=this.LS.getItem(this.keys.modelMetadata))!=null&&(a=JSON.parse(i),e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,e.userDefinedMetadata=a.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(ss){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var f=atob(c),h=new Uint8Array(f.length),p=0;p<f.length;++p)h.set([f.charCodeAt(p)],p);return h.buffer}(s),[2,e]})})},n.URL_SCHEME="localstorage://",n}(),Vc=function(n){return L().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Rr.URL_SCHEME)?(t=n.slice(Rr.URL_SCHEME.length),new Rr(t)):null;var t};St.registerSaveRouter(Vc),St.registerLoadRouter(Vc);var xb=function(){function n(){R(L().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),R(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return n.prototype.listModels=function(){return K(this,void 0,void 0,function(){var t,e,r,o,i,a;return $(this,function(s){for(t={},e=wr+pn,r=pn+Qf,o=0;o<this.LS.length;++o)(i=this.LS.key(o)).startsWith(e)&&i.endsWith(r)&&(a=bb(i),t[a]=JSON.parse(this.LS.getItem(i)));return[2,t]})})},n.prototype.removeModel=function(t){return K(this,void 0,void 0,function(){var e,r;return $(this,function(o){var i;if(t=(i=t).startsWith(Rr.URL_SCHEME)?i.slice(Rr.URL_SCHEME.length):i,e=Zf(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return r=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,r]})})},n}();if(L().getBool("IS_BROWSER"))try{Pn.registerManager(Rr.URL_SCHEME,new xb)}catch{}var wb="model",_b=".json",Eb=".weights.bin";function Uc(n){return new Promise(function(t){return setTimeout(t)}).then(n)}var Ba=function(){function n(t){if(!L().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(n.URL_SCHEME)&&(t=t.slice(n.URL_SCHEME.length)),t!=null&&t.length!==0||(t=wb),this.modelTopologyFileName=t+_b,this.weightDataFileName=t+Eb}return n.prototype.save=function(t){return K(this,void 0,void 0,function(){var e,r,o,i,a,s;return $(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:r},i=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(a=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,a.href=i,[4,Uc(function(){return a.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,Uc(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:xo(t)}]}})})},n.URL_SCHEME="downloads://",n}(),Cb=function(){function n(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return n.prototype.load=function(){return K(this,void 0,void 0,function(){var t,e,r=this;return $(this,function(o){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(i,a){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&i({modelTopology:l});var f=c.weightsManifest;if(f!=null){var h;try{h=r.checkManifestAndWeightFiles(f,e)}catch(m){return void a(m)}var p=[],d=[],v=[];f.forEach(function(m){m.paths.forEach(function(g){d.push(g),v.push(null)}),p.push.apply(p,m.weights)}),f.forEach(function(m){m.paths.forEach(function(g){var y=new FileReader;y.onload=function(x){var b=x.target.result,w=d.indexOf(g);v[w]=b,v.indexOf(null)===-1&&i({modelTopology:l,weightSpecs:p,weightData:Ks(v),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},y.onerror=function(x){return a("Failed to weights data from file of path '"+g+"'.")},y.readAsArrayBuffer(h[g])})})}else a(new Error("weightManifest field is missing from file "+t.name))}else a(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return a("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},n.prototype.checkManifestAndWeightFiles=function(t,e){for(var r=[],o=e.map(function(u){return Bc(u.name)}),i={},a=0,s=t;a<s.length;a++)s[a].paths.forEach(function(u){var c=Bc(u);if(r.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(r.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");i[u]=e[o.indexOf(c)]});if(r.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+r.length+") and the number of weight files provided ("+e.length+").");return i},n}();function zc(n,t,e,r){(function(i){R(i!=null&&Array.isArray(i)&&i.length>0,function(){return"promises must be a none empty array"})})(n),function(i,a){R(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+i}),R(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+a}),R(a>=i,function(){return"startFraction must be no more than endFraction, but got startFraction "+i+" and endFraction "+a})}(e=e??0,r=r??1);var o=0;return Promise.all(n.map(function(i){return i.then(function(a){var s=e+ ++o/n.length*(r-e);return t(s),a}),i}))}function eh(n,t){return K(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l;return $(this,function(f){switch(f.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?L().platform.fetch:t.fetchFunc,r=n.map(function(h){return e(h,t.requestInit,{isBinary:!0})}),o=0,i=.5,t.onProgress!=null?[3,2]:[4,Promise.all(r)];case 1:return a=f.sent(),[3,4];case 2:return[4,zc(r,t.onProgress,o,i)];case 3:a=f.sent(),f.label=4;case 4:return s=a.map(function(h){return h.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=f.sent(),[3,8];case 6:return[4,zc(s,t.onProgress,u,c)];case 7:l=f.sent(),f.label=8;case 8:return[2,l]}})})}function Gc(n){var t=this;return function(e,r,o){return r===void 0&&(r=""),K(t,void 0,void 0,function(){var i,a,s,u,c,l,f,h,p,d;return $(this,function(v){switch(v.label){case 0:if(i=e.map(function(){return!1}),a={},s=o!=null?o.map(function(){return!1}):[],u=[],e.forEach(function(m,g){var y=0;m.weights.forEach(function(x){var b="quantization"in x?x.quantization.dtype:x.dtype,w=as[b]*Y(x.shape),_=function(){i[g]=!0,a[g]==null&&(a[g]=[]),a[g].push({manifestEntry:x,groupOffset:y,sizeBytes:w})};o!=null?o.forEach(function(T,S){T===x.name&&(_(),s[S]=!0)}):_(),u.push(x.name),y+=w})}),!s.every(function(m){return m}))throw c=o.filter(function(m,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=i.reduce(function(m,g,y){return g&&m.push(y),m},[]),f=[],l.forEach(function(m){e[m].paths.forEach(function(g){var y=r+(r.endsWith("/")?"":"/")+g;f.push(y)})}),[4,n(f)];case 1:return h=v.sent(),p={},d=0,l.forEach(function(m){for(var g=e[m].paths.length,y=0,x=0;x<g;x++)y+=h[d+x].byteLength;for(var b=new ArrayBuffer(y),w=new Uint8Array(b),_=0,T=0;T<g;T++){var S=new Uint8Array(h[d+T]);w.set(S,_),_+=S.byteLength}a[m].forEach(function(E){var I=Yf(b.slice(E.groupOffset,E.groupOffset+E.sizeBytes),[E.manifestEntry]);for(var A in I)p[A]=I[A]}),d+=g}),[2,p]}})})}}St.registerSaveRouter(function(n){return L().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Ba.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new Ba(t)}(n.slice(Ba.URL_SCHEME.length)):null});var th=function(){function n(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(R(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=L().platform.fetch,R(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&R(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return n.prototype.save=function(t){return K(this,void 0,void 0,function(){var e,r,o,i;return $(this,function(a){switch(a.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:r},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((i=a.sent()).ok)return[2,{modelArtifactsInfo:xo(t),responses:[i]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+i.status+".")}})})},n.prototype.load=function(){return K(this,void 0,void 0,function(){var t,e,r,o,i,a,s,u,c,l,f,h;return $(this,function(p){switch(p.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=p.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");p.label=2;case 2:return p.trys.push([2,4,,5]),[4,t.json()];case 3:return e=p.sent(),[3,5];case 4:throw p.sent(),r="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?r+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":r+=" Please make sure the server is serving valid JSON for this request.",new Error(r);case 5:if(o=e.modelTopology,i=e.weightsManifest,a=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&i==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return i==null?[3,7]:[4,this.loadWeights(i)];case 6:h=p.sent(),l=h[0],f=h[1],p.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:f,userDefinedMetadata:c,generatedBy:a,convertedBy:s,format:u}]}})})},n.prototype.loadWeights=function(t){return K(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f,h;return $(this,function(p){switch(p.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,r=function(d){var v=d.lastIndexOf("/"),m=d.lastIndexOf("?"),g=d.substring(0,v),y=m>v?d.substring(m):"";return[g+"/",y]}(e),o=r[0],i=r[1],a=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return f=[],t.forEach(function(d){d.paths.forEach(function(v){f.push(a+v+i)})}),[4,eh(f,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return h=p.sent(),[2,[s,Ks(h)]]}})})},n.URL_SCHEME_REGEX=/^https?:\/\//,n}();function cs(n){return n.match(th.URL_SCHEME_REGEX)!=null}var Hc=function(n,t){return typeof fetch>"u"?null:(Array.isArray(n)?n.every(function(e){return cs(e)}):cs(n))?ls(n,{onProgress:t}):null};function ls(n,t){return new th(n,t)}St.registerSaveRouter(Hc),St.registerLoadRouter(Hc);var La=function(){function n(t){this.modelArtifacts=t}return n.prototype.load=function(){return K(this,void 0,void 0,function(){return $(this,function(t){return[2,this.modelArtifacts]})})},n}(),Sb=function(){function n(t){this.saveHandler=t}return n.prototype.save=function(t){return K(this,void 0,void 0,function(){return $(this,function(e){return[2,this.saveHandler(t)]})})},n}(),nh=Object.freeze({browserFiles:function(n){return new Cb(n)},browserHTTPRequest:function(n,t){return ls(n,t)},concatenateArrayBuffers:Ks,decodeWeights:Yf,encodeWeights:function(n,t){return K(this,void 0,void 0,function(){var e,r,o,i,a,s=this;return $(this,function(u){switch(u.label){case 0:for(e=[],r=[],o=Array.isArray(n)?n.map(function(c){return c.name}):Object.keys(n),i=function(c){var l=o[c],f=Array.isArray(n)?n[c].tensor:n[l];if(f.dtype!=="float32"&&f.dtype!=="int32"&&f.dtype!=="bool"&&f.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+f.dtype);var h={name:l,shape:f.shape,dtype:f.dtype};if(f.dtype==="string"){var p=new Promise(function(d){return K(s,void 0,void 0,function(){var v,m,g,y,x,b,w;return $(this,function(_){switch(_.label){case 0:return[4,f.bytes()];case 1:for(v=_.sent(),m=v.reduce(function(T,S){return T+S.length},0)+yi*v.length,g=new Uint8Array(m),y=0,x=0;x<v.length;x++)b=v[x],w=new Uint8Array(new Uint32Array([b.length]).buffer),g.set(w,y),y+=yi,g.set(b,y),y+=b.length;return d(g),[2]}})})});r.push(p)}else r.push(f.data());t!=null&&(h.group=t),e.push(h)},a=0;a<o.length;++a)i(a);return[4,Promise.all(r)];case 1:return[2,{data:pb(u.sent()),specs:e}]}})})},fromMemory:function(n,t,e,r){return arguments.length===1?n.modelTopology!=null||n.weightSpecs!=null?new La(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new La({modelTopology:n})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new La({modelTopology:n,weightSpecs:t,weightData:e,trainingConfig:r}))},getLoadHandlers:function(n,t){return St.getLoadHandlers(n,t)},getModelArtifactsInfoForJSON:xo,getSaveHandlers:function(n){return St.getSaveHandlers(n)},http:ls,isHTTPScheme:cs,loadWeights:function(n,t,e,r){return t===void 0&&(t=""),K(this,void 0,void 0,function(){return $(this,function(o){return[2,Gc(function(i){return eh(i,{requestInit:r})})(n,t,e)]})})},registerLoadRouter:function(n){return St.registerLoadRouter(n)},registerSaveRouter:function(n){return St.registerSaveRouter(n)},weightsLoaderFactory:Gc,withSaveHandler:function(n){return new Sb(n)},copyModel:function(n,t){return K(this,void 0,void 0,function(){return $(this,function(e){return[2,Lc(n,t,!1)]})})},listModels:function(){return K(this,void 0,void 0,function(){var n,t,e,r,o,i,a;return $(this,function(s){switch(s.label){case 0:n=Pn.getSchemes(),t={},e=0,r=n,s.label=1;case 1:return e<r.length?(o=r[e],[4,Pn.getManager(o).listModels()]):[3,4];case 2:for(a in i=s.sent())t[o+Sr+a]=i[a];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}})})},moveModel:function(n,t){return K(this,void 0,void 0,function(){return $(this,function(e){return[2,Lc(n,t,!0)]})})},removeModel:function(n){return K(this,void 0,void 0,function(){var t;return $(this,function(e){return t=qo(n),[2,Pn.getManager(t.scheme).removeModel(t.path)]})})}}),vr;k({confusionMatrix_:function(n,t,e){var r=C(n,"labels","confusionMatrix"),o=C(t,"predictions","confusionMatrix");R(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),R(r.rank===1,function(){return"Expected the rank of labels to be 1, but got "+r.rank}),R(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),R(r.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+r.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),R(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var i=ts(r.asType("int32"),e),a=ts(o.asType("int32"),e);return i.transpose().matMul(a).asType("int32")}});var Ib=k({fromPixels_:function(n,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(n==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,r=!1,o=!1,i=!1,a=!1;if(n.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&n instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement)i=!0;else{if(n.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+n.constructor.name);a=!0}if(o&&o&&n.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(Sl("FromPixels",D.backendName)!=null)return D.runKernel("FromPixels",{pixels:n},{numChannels:t});var s,u,c=o?[n.videoWidth,n.videoHeight]:[n.width,n.height],l=c[0],f=c[1];if(a?s=n.getContext("2d").getImageData(0,0,l,f).data:r||e?s=n.data:(i||o)&&(vr==null&&(vr=document.createElement("canvas").getContext("2d")),vr.canvas.width=l,vr.canvas.height=f,vr.drawImage(n,0,0,l,f),s=vr.getImageData(0,0,l,f).data),t===4)u=new Int32Array(s);else{var h=l*f;u=new Int32Array(h*t);for(var p=0;p<h;p++)for(var d=0;d<t;++d)u[p*t+d]=s[4*p+d]}return Es(u,[f,l,t],"int32")}}),$s=Object.freeze({toPixels:function(n,t){return K(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f,h,p,d,v,m,g,y,x,b,w,_,T,S;return $(this,function(E){switch(E.label){case 0:if(e=C(n,"img","toPixels"),n instanceof Ne||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(r=e.shape.slice(0,2),o=r[0],i=r[1],(a=e.rank===2?1:e.shape[2])>4||a===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+a);return[4,e.data()];case 1:return s=E.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=E.sent(),f=l[0],h=l[1],p=f[0],d=h[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(p<0||d>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+p+" - "+d+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(p<0||d>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+p+" - "+d+"].")}for(v=e.dtype==="float32"?255:1,m=new Uint8ClampedArray(i*o*4),g=0;g<o*i;++g)y=void 0,x=void 0,b=void 0,w=void 0,a===1?(y=s[g]*v,x=s[g]*v,b=s[g]*v,w=255):a===3?(y=s[3*g]*v,x=s[3*g+1]*v,b=s[3*g+2]*v,w=255):a===4&&(y=s[4*g]*v,x=s[4*g+1]*v,b=s[4*g+2]*v,w=s[4*g+3]*v),m[(_=4*g)+0]=Math.round(y),m[_+1]=Math.round(x),m[_+2]=Math.round(b),m[_+3]=Math.round(w);return t!=null&&(t.width=i,t.height=o,T=t.getContext("2d"),S=new ImageData(m,i,o),T.putImageData(S,0,0)),e!==n&&e.dispose(),[2,m]}})})},fromPixels:Ib}),Rb=function(){function n(){}return n.prototype.getClassName=function(){return this.constructor.className},n.fromConfig=function(t,e){return new t(e)},n}(),Tb=function(){function n(){this.classNameMap={}}return n.getMap=function(){return n.instance==null&&(n.instance=new n),n.instance},n.register=function(t){n.getMap().classNameMap[t.className]=[t,t.fromConfig]},n}();function ur(n){R(n.className!=null,function(){return"Class being registered does not have the static className property defined."}),R(typeof n.className=="string",function(){return"className is required to be a string, but got type "+typeof n.className}),R(n.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),Tb.register(n)}var cr=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return Wt(t,n),t.prototype.minimize=function(e,r,o){r===void 0&&(r=!1);var i=this.computeGradients(e,o),a=i.value,s=i.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return gt(s),r?a:(a.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,r){return Lv(e,r)},t.prototype.dispose=function(){this.iterations_!=null&&gt(this.iterations_)},t.prototype.saveIterations=function(){return K(this,void 0,void 0,function(){return $(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:q(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return $(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return $(this,function(r){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(e){return K(this,void 0,void 0,function(){var r;return $(this,function(o){switch(o.label){case 0:return r=this,[4,e[0].tensor.data()];case 1:return r.iterations_=o.sent()[0],[2,e.slice(1)]}})})},t}(Rb);Object.defineProperty(cr,Symbol.hasInstance,{value:function(n){return n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null}});var Nb=function(n){function t(e,r,o){o===void 0&&(o=null);var i=n.call(this)||this;return i.learningRate=e,i.rho=r,i.epsilon=o,i.accumulatedGrads=[],i.accumulatedUpdates=[],o==null&&(i.epsilon=D.backend.epsilon()),i}return Wt(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=D.registeredVariables[o];r.accumulatedGrads[i]==null&&(r.accumulatedGrads[i]={originalName:o+"/accum_grad",variable:j(function(){return ge(a).variable(!1)})}),r.accumulatedUpdates[i]==null&&(r.accumulatedUpdates[i]={originalName:o+"/accum_var",variable:j(function(){return ge(a).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=r.accumulatedGrads[i].variable,c=r.accumulatedUpdates[i].variable;j(function(){var l=u.mul(r.rho).add(s.square().mul(1-r.rho)),f=c.add(r.epsilon).sqrt().div(u.add(r.epsilon).sqrt()).mul(s),h=c.mul(r.rho).add(f.square().mul(1-r.rho));u.assign(l),c.assign(h);var p=f.mul(-r.learningRate).add(a);a.assign(p)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(gt(this.accumulatedGrads.map(function(e){return e.variable})),gt(this.accumulatedUpdates.map(function(e){return e.variable})))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var e;return $(this,function(r){switch(r.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){var r;return $(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),r=e.length/2,this.accumulatedGrads=e.slice(0,r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(r,2*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,r){return new e(r.learningRate,r.rho,r.epsilon)},t.className="Adadelta",t}(cr);ur(Nb);var Ab=function(n){function t(e,r){r===void 0&&(r=.1);var o=n.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=r,o.accumulatedGrads=[],o}return Wt(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=D.registeredVariables[o];r.accumulatedGrads[i]==null&&(r.accumulatedGrads[i]={originalName:o+"/accumulator",variable:j(function(){return Qt(a.shape,r.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=r.accumulatedGrads[i].variable;j(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(D.backend.epsilon()).sqrt()).mul(-r.learningRate).add(a);a.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&gt(this.accumulatedGrads.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return $(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(r){return{name:r.originalName,tensor:r.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return $(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return e=r.sent(),this.accumulatedGrads=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,r){return new e(r.learningRate,r.initialAccumulatorValue)},t.className="Adagrad",t}(cr);ur(Ab);var kb=function(n){function t(e,r,o,i){i===void 0&&(i=null);var a=n.call(this)||this;return a.learningRate=e,a.beta1=r,a.beta2=o,a.epsilon=i,a.accumulatedFirstMoment=[],a.accumulatedSecondMoment=[],j(function(){a.accBeta1=q(r).variable(),a.accBeta2=q(o).variable()}),i==null&&(a.epsilon=D.backend.epsilon()),a}return Wt(t,n),t.prototype.applyGradients=function(e){var r=this,o=Array.isArray(e)?e.map(function(i){return i.name}):Object.keys(e);j(function(){var i=qe(1,r.accBeta1),a=qe(1,r.accBeta2);o.forEach(function(s,u){var c=D.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:j(function(){return ge(c).variable(!1)})}),r.accumulatedSecondMoment[u]==null&&(r.accumulatedSecondMoment[u]={originalName:s+"/v",variable:j(function(){return ge(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=r.accumulatedFirstMoment[u].variable,h=r.accumulatedSecondMoment[u].variable,p=f.mul(r.beta1).add(l.mul(1-r.beta1)),d=h.mul(r.beta2).add(l.square().mul(1-r.beta2)),v=p.div(i),m=d.div(a);f.assign(p),h.assign(d);var g=v.div(m.sqrt().add(r.epsilon)).mul(-r.learningRate).add(c);c.assign(g)}}),r.accBeta1.assign(r.accBeta1.mul(r.beta1)),r.accBeta2.assign(r.accBeta2.mul(r.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&gt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&gt(this.accumulatedSecondMoment.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var e;return $(this,function(r){switch(r.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){var r,o=this;return $(this,function(i){switch(i.label){case 0:return[4,this.extractIterations(e)];case 1:return e=i.sent(),j(function(){o.accBeta1.assign(mi(o.beta1,o.iterations_+1)),o.accBeta2.assign(mi(o.beta2,o.iterations_+1))}),r=e.length/2,this.accumulatedFirstMoment=e.slice(0,r).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(r,2*r).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,r){return new e(r.learningRate,r.beta1,r.beta2,r.epsilon)},t.className="Adam",t}(cr);ur(kb);var Db=function(n){function t(e,r,o,i,a){i===void 0&&(i=null),a===void 0&&(a=0);var s=n.call(this)||this;return s.learningRate=e,s.beta1=r,s.beta2=o,s.epsilon=i,s.decay=a,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],j(function(){s.iteration=q(0).variable(),s.accBeta1=q(r).variable()}),i==null&&(s.epsilon=D.backend.epsilon()),s}return Wt(t,n),t.prototype.applyGradients=function(e){var r=this,o=Array.isArray(e)?e.map(function(i){return i.name}):Object.keys(e);j(function(){var i=qe(1,r.accBeta1),a=Ft(-r.learningRate,r.iteration.mul(r.decay).add(1));o.forEach(function(s,u){var c=D.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:ge(c).variable(!1)}),r.accumulatedWeightedInfNorm[u]==null&&(r.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:ge(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=r.accumulatedFirstMoment[u].variable,h=r.accumulatedWeightedInfNorm[u].variable,p=f.mul(r.beta1).add(l.mul(1-r.beta1)),d=h.mul(r.beta2),v=l.abs(),m=d.maximum(v);f.assign(p),h.assign(m);var g=a.div(i).mul(p.div(m.add(r.epsilon))).add(c);c.assign(g)}}),r.iteration.assign(r.iteration.add(1)),r.accBeta1.assign(r.accBeta1.mul(r.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&gt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&gt(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return $(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return $(this,function(r){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,r){return new e(r.learningRate,r.beta1,r.beta2,r.epsilon,r.decay)},t.className="Adamax",t}(cr);ur(Db);var rh=function(n){function t(e){var r=n.call(this)||this;return r.learningRate=e,r.setLearningRate(e),r}return Wt(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=Array.isArray(e)?e[i].tensor:e[o];if(a!=null){var s=D.registeredVariables[o];j(function(){var u=r.c.mul(a).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Qd(q(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return $(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return $(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=r.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,r){return new e(r.learningRate)},t.className="SGD",t}(cr);ur(rh);var Ob=function(n){function t(e,r,o){o===void 0&&(o=!1);var i=n.call(this,e)||this;return i.learningRate=e,i.momentum=r,i.useNesterov=o,i.accumulations=[],i.m=q(i.momentum),i}return Wt(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=D.registeredVariables[o];r.accumulations[i]==null&&(r.accumulations[i]={originalName:o+"/momentum",variable:j(function(){return ge(a).variable(!1)})});var s=r.accumulations[i].variable,u=Array.isArray(e)?e[i].tensor:e[o];u!=null&&j(function(){var c,l=r.m.mul(s).add(u);c=r.useNesterov?r.c.mul(u.add(l.mul(r.m))).add(a):r.c.mul(l).add(a),s.assign(l),a.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&gt(this.accumulations.map(function(e){return e.variable}))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return $(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(r){return{name:r.originalName,tensor:r.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return $(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return e=r.sent(),this.accumulations=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,r){return new e(r.learningRate,r.momentum,r.useNesterov)},t.className="Momentum",t}(rh);ur(Ob);var Pb=function(n){function t(e,r,o,i,a){r===void 0&&(r=.9),o===void 0&&(o=0),i===void 0&&(i=null),a===void 0&&(a=!1);var s=n.call(this)||this;if(s.learningRate=e,s.decay=r,s.momentum=o,s.epsilon=i,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=a,i==null&&(s.epsilon=D.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return Wt(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=D.registeredVariables[o];r.accumulatedMeanSquares[i]==null&&(r.accumulatedMeanSquares[i]={originalName:o+"/rms",variable:j(function(){return ge(a).variable(!1)})}),r.accumulatedMoments[i]==null&&(r.accumulatedMoments[i]={originalName:o+"/momentum",variable:j(function(){return ge(a).variable(!1)})}),r.accumulatedMeanGrads[i]==null&&r.centered&&(r.accumulatedMeanGrads[i]={originalName:o+"/mg",variable:j(function(){return ge(a).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=r.accumulatedMeanSquares[i].variable,c=r.accumulatedMoments[i].variable;j(function(){var l=u.mul(r.decay).add(s.square().mul(1-r.decay));if(r.centered){var f=r.accumulatedMeanGrads[i].variable,h=f.mul(r.decay).add(s.mul(1-r.decay)),p=c.mul(r.momentum).add(s.mul(r.learningRate).div(l.sub(h.square().add(r.epsilon)).sqrt()));u.assign(l),f.assign(h),c.assign(p);var d=a.sub(p);a.assign(d)}else{var v=u.mul(r.decay).add(s.square().mul(1-r.decay));p=c.mul(r.momentum).add(s.mul(r.learningRate).div(v.add(r.epsilon).sqrt())),u.assign(v),c.assign(p),d=a.sub(p),a.assign(d)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&gt(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&gt(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&gt(this.accumulatedMoments.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var e;return $(this,function(r){switch(r.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){var r;return $(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),r=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(r,2*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*r,3*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,r){return new e(r.learningRate,r.decay,r.momentum,r.epsilon,r.centered)},t.className="RMSProp",t}(cr);ur(Pb);Ne.prototype.squaredDifference=function(n){return yf(this,n)},B=ab;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var fs=function(n,t){return fs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])},fs(n,t)};function oe(n,t){fs(n,t);function e(){this.constructor=n}n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var it=function(){return it=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++){e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},it.apply(this,arguments)};function Q(n,t,e,r){function o(i){return i instanceof e?i:new e(function(a){a(i)})}return new(e||(e=Promise))(function(i,a){function s(l){try{c(r.next(l))}catch(f){a(f)}}function u(l){try{c(r.throw(l))}catch(f){a(f)}}function c(l){l.done?i(l.value):o(l.value).then(s,u)}c((r=r.apply(n,[])).next())})}function Z(n,t){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(l){return u([c,l])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;e;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){e.label=c[1];break}if(c[0]===6&&e.label<i[1]){e.label=i[1],i=c;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(c);break}i[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(n,e)}catch(l){c=[6,l],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Qr(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length;for(var r=Array(n),o=0,t=0;t<e;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}var Tr=function(){function n(t,e){if(!Jn(t)||!Jn(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(n.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),n.prototype.reverse=function(){return new n(1/this.width,1/this.height)},n}();function Vi(n,t){return n instanceof Ne&&n.shape.length===t}function Mb(n){return Vi(n,2)}function Ui(n){return Vi(n,3)}function Mn(n){return Vi(n,4)}function Fb(n){return n%1!==0}function Xc(n){return n%2===0}function Bb(n,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(n*e)/e}function qc(n){return n&&n.width&&n.height}function Lb(n,t){var e=n.width,r=n.height,o=t/Math.max(r,e);return new Tr(Math.round(e*o),Math.round(r*o))}function Ys(n){return n.reduce(function(t,e){return t.add(e)},new xe(0,0)).div(new xe(n.length,n.length))}function oo(n,t,e){return Array(n).fill(0).map(function(r,o){return t+o*e})}function Jn(n){return!!n&&n!==1/0&&n!==-1/0&&!isNaN(n)||n===0}function jc(n){return Jn(n)&&0<=n&&n<=1}var xe=function(){function n(t,e){this._x=t,this._y=e}return Object.defineProperty(n.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),n.prototype.add=function(t){return new n(this.x+t.x,this.y+t.y)},n.prototype.sub=function(t){return new n(this.x-t.x,this.y-t.y)},n.prototype.mul=function(t){return new n(this.x*t.x,this.y*t.y)},n.prototype.div=function(t){return new n(this.x/t.x,this.y/t.y)},n.prototype.abs=function(){return new n(Math.abs(this.x),Math.abs(this.y))},n.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},n.prototype.floor=function(){return new n(Math.floor(this.x),Math.floor(this.y))},n}(),Ln=function(){function n(t,e){e===void 0&&(e=!0);var r=t||{},o=[r.left,r.top,r.right,r.bottom].every(Jn),i=[r.x,r.y,r.width,r.height].every(Jn);if(!i&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(r));var a=i?[r.x,r.y,r.width,r.height]:[r.left,r.top,r.right-r.left,r.bottom-r.top],s=a[0],u=a[1],c=a[2],l=a[3];n.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return n.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(Jn)},n.assertIsValidBox=function(t,e,r){if(r===void 0&&(r=!1),!n.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!r&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(n.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"topLeft",{get:function(){return new xe(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"topRight",{get:function(){return new xe(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bottomLeft",{get:function(){return new xe(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bottomRight",{get:function(){return new xe(this.right,this.bottom)},enumerable:!0,configurable:!0}),n.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(a){return Math.round(a)}),e=t[0],r=t[1],o=t[2],i=t[3];return new n({x:e,y:r,width:o,height:i})},n.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(a){return Math.floor(a)}),e=t[0],r=t[1],o=t[2],i=t[3];return new n({x:e,y:r,width:o,height:i})},n.prototype.toSquare=function(){var t=this,e=t.x,r=t.y,o=t.width,i=t.height,a=Math.abs(o-i);return o<i&&(e-=a/2,o+=a),i<o&&(r-=a/2,i+=a),new n({x:e,y:r,width:o,height:i})},n.prototype.rescale=function(t){var e=qc(t)?t.width:t,r=qc(t)?t.height:t;return new n({x:this.x*e,y:this.y*r,width:this.width*e,height:this.height*r})},n.prototype.pad=function(t,e){var r=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],o=r[0],i=r[1],a=r[2],s=r[3];return new n({x:o,y:i,width:a,height:s})},n.prototype.clipAtImageBorders=function(t,e){var r=this,o=r.x,i=r.y,a=r.right,s=r.bottom,u=Math.max(o,0),c=Math.max(i,0),l=a-u,f=s-c,h=Math.min(l,t-u),p=Math.min(f,e-c);return new n({x:u,y:c,width:h,height:p}).floor()},n.prototype.shift=function(t,e){var r=this,o=r.width,i=r.height,a=this.x+t,s=this.y+e;return new n({x:a,y:s,width:o,height:i})},n.prototype.padAtBorders=function(t,e){var r=this.width+1,o=this.height+1,i=1,a=1,s=r,u=o,c=this.left,l=this.top,f=this.right,h=this.bottom;return f>e&&(s=-f+e+r,f=e),h>t&&(u=-h+t+o,h=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:a,edy:u,dx:i,edx:s,y:l,ey:h,x:c,ex:f,w:r,h:o}},n.prototype.calibrate=function(t){return new n({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},n}(),zi=function(n){oe(t,n);function t(e,r,o,i,a){return a===void 0&&(a=!1),n.call(this,{left:e,top:r,right:o,bottom:i},a)||this}return t}(Ln),oh=function(){function n(t,e,r,o,i){this._imageDims=new Tr(i.width,i.height),this._score=t,this._classScore=e,this._className=r,this._box=new Ln(o).rescale(this._imageDims)}return Object.defineProperty(n.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"relativeBox",{get:function(){return new Ln(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),n.prototype.forSize=function(t,e){return new n(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},n}(),rn=function(n){oe(t,n);function t(e,r,o){return n.call(this,e,e,"",r,o)||this}return t.prototype.forSize=function(e,r){var o=n.prototype.forSize.call(this,e,r),i=o.score,a=o.relativeBox,s=o.imageDims;return new t(i,a,s)},t}(oh);function Wb(n,t,e){e===void 0&&(e=!0);var r=Math.max(0,Math.min(n.right,t.right)-Math.max(n.left,t.left)),o=Math.max(0,Math.min(n.bottom,t.bottom)-Math.max(n.top,t.top)),i=r*o;return e?i/(n.area+t.area-i):i/Math.min(n.area,t.area)}function Vb(n){var t=n.map(function(s){return s.x}),e=n.map(function(s){return s.y}),r=t.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),i=t.reduce(function(s,u){return s<u?u:s},0),a=e.reduce(function(s,u){return s<u?u:s},0);return new zi(r,o,i,a)}function io(n,t,e,r){r===void 0&&(r=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),i=[],a=function(){var s=o.pop();i.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var f=u[l],h=n[s],p=n[f];c.push(Wb(h,p,r))}o=o.filter(function(d,v){return c[v]<=e})};o.length>0;)a();return i}function wo(n,t){return j(function(){var e=t[0],r=t[1],o=t[2],i=Qt(Qr(n.shape.slice(0,3),[1]),e),a=Qt(Qr(n.shape.slice(0,3),[1]),r),s=Qt(Qr(n.shape.slice(0,3),[1]),o),u=Ge([i,a,s],3);return qe(n,u)})}function Ub(n,t){return t===void 0&&(t=!1),j(function(){var e=n.shape.slice(1),r=e[0],o=e[1];if(r===o)return n;var i=Math.abs(r-o),a=Math.round(i*(t?.5:1)),s=r>o?2:1,u=function(p){var d=n.shape.slice();return d[s]=p,Qt(d,0)},c=u(a),l=i-c.shape[s],f=t&&l?u(l):null,h=[f,n,c].filter(function(p){return!!p}).map(function(p){return p.toFloat()});return Ge(h,s)})}function Wa(n){return 1/(1+Math.exp(-n))}var Js=function(n){oe(t,n);function t(e,r,o,i,a){return a===void 0&&(a=!1),n.call(this,{x:e,y:r,width:o,height:i},a)||this}return t}(Ln),zb=.5,Gb=.43,Hb=.45,bi=function(){function n(t,e,r){r===void 0&&(r=new xe(0,0));var o=e.width,i=e.height;this._imgDims=new Tr(o,i),this._shift=r,this._positions=t.map(function(a){return a.mul(new xe(o,i)).add(r)})}return Object.defineProperty(n.prototype,"shift",{get:function(){return new xe(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new xe(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),n.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},n.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new xe(t,e))},n.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},n.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var r=t instanceof rn?t.box.floor():new Ln(t);return this.shiftBy(r.x,r.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),i=o.useDlibAlignment,a=o.minBoxPadding;return i?this.alignDlib():this.alignMinBbox(a)},n.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],r=t[1],o=t[2],i=function(f){return o.sub(f).magnitude()},a=(i(e)+i(r))/2,s=Math.floor(a/Hb),u=Ys(t),c=Math.floor(Math.max(0,u.x-zb*s)),l=Math.floor(Math.max(0,u.y-Gb*s));return new Js(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},n.prototype.alignMinBbox=function(t){var e=Vb(this.positions);return e.pad(e.width*t,e.height*t)},n.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},n}(),Xb=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],Ys([e[3],e[4]])]},t}(bi),qb=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(Ys)},t}(bi),Kc=function(){function n(t,e){this._label=t,this._distance=e}return Object.defineProperty(n.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),n.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+Bb(this.distance)+")":"")},n}(),$c=function(n){oe(t,n);function t(e,r){var o=n.call(this,e)||this;return o._label=r,o}return t.assertIsValidLabeledBox=function(e,r){if(Ln.assertIsValidBox(e,r),!Jn(e.label))throw new Error(r+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(Ln),Lo=function(){function n(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(r){return!(r instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(n.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),n.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},n.fromJSON=function(t){var e=t.descriptors.map(function(r){return new Float32Array(r)});return new n(t.label,e)},n}();(function(n){oe(t,n);function t(e,r,o,i){var a=n.call(this,e,r)||this;return a._score=o,a._classScore=i,a}return t.assertIsValidPredictedBox=function(e,r){if($c.assertIsValidLabeledBox(e,r),!jc(e.score)||!jc(e.classScore))throw new Error(r+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})($c);function jb(n){return n.detection instanceof rn}function Qs(n,t){var e={detection:t};return Object.assign({},n,e)}function ih(){var n=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:n,readFile:t}}function ah(n){var t="";if(!n)try{n=require("fs")}catch(r){t=r.toString()}var e=n?function(r){return new Promise(function(o,i){n.readFile(r,function(a,s){return a?i(a):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function sh(){var n=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(n)return new n;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},r=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},i=ah();return it({Canvas:n||function(){function a(){}return a}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function a(){}return a}(),Image:t||function(){function a(){}return a}(),ImageData:global.ImageData||function(){function a(){}return a}(),Video:global.HTMLVideoElement||function(){function a(){}return a}(),createCanvasElement:e,createImageElement:r,fetch:o},i)}function uh(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function ch(){return typeof global=="object"&&typeof require=="function"&&typeof module<"u"&&typeof process<"u"&&!!process.version}var Ue;function Kb(){if(!Ue)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Ue}function hs(n){Ue=n}function Zs(){uh()&&hs(ih()),ch()&&hs(sh())}function $b(n){if(Ue||Zs(),!Ue)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=n.Canvas,e=t===void 0?Ue.Canvas:t,r=n.Image,o=r===void 0?Ue.Image:r;Ue.Canvas=e,Ue.Image=o,Ue.createCanvasElement=n.createCanvasElement||function(){return new e},Ue.createImageElement=n.createImageElement||function(){return new o},Ue.ImageData=n.ImageData||Ue.ImageData,Ue.Video=n.Video||Ue.Video,Ue.fetch=n.fetch||Ue.fetch,Ue.readFile=n.readFile||Ue.readFile}var lt={getEnv:Kb,setEnv:hs,initialize:Zs,createBrowserEnv:ih,createFileSystem:ah,createNodejsEnv:sh,monkeyPatch:$b,isBrowser:uh,isNodejs:ch};Zs();function lh(n){return!lt.isNodejs()&&typeof n=="string"?document.getElementById(n):n}function er(n){var t=lt.getEnv(),e=t.Canvas,r=t.CanvasRenderingContext2D;if(n instanceof r)return n;var o=lh(n);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var i=o.getContext("2d");if(!i)throw new Error("resolveContext2d - canvas 2d context is null");return i}var Yc;(function(n){n.TOP_LEFT="TOP_LEFT",n.TOP_RIGHT="TOP_RIGHT",n.BOTTOM_LEFT="BOTTOM_LEFT",n.BOTTOM_RIGHT="BOTTOM_RIGHT"})(Yc||(Yc={}));function fh(n){var t=lt.getEnv(),e=t.Image,r=t.Video;return n instanceof e&&n.complete||n instanceof r&&n.readyState>=3}function Yb(n){return new Promise(function(t,e){if(n instanceof lt.getEnv().Canvas||fh(n))return t();function r(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",r),i.currentTarget.removeEventListener("error",o),t(i))}function o(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",r),i.currentTarget.removeEventListener("error",o),e(i))}n.addEventListener("load",r),n.addEventListener("error",o)})}function hh(n){var t=lt.getEnv(),e=t.Image,r=t.Video;return n instanceof e?new Tr(n.naturalWidth,n.naturalHeight):n instanceof r?new Tr(n.videoWidth,n.videoHeight):new Tr(n.width,n.height)}function Gi(n){var t=n.width,e=n.height,r=lt.getEnv().createCanvasElement,o=r();return o.width=t,o.height=e,o}function eu(n,t){var e=lt.getEnv().ImageData;if(!(n instanceof e)&&!fh(n))throw new Error("createCanvasFromMedia - media has not finished loading yet");var r=hh(n),o=r.width,i=r.height,a=Gi({width:o,height:i});return n instanceof e?er(a).putImageData(n,0,0):er(a).drawImage(n,0,0,o,i),a}function Jb(n,t){return Q(this,void 0,void 0,function(){var e,r,o,i,a,s;return Z(this,function(u){switch(u.label){case 0:return e=lt.getEnv().createCanvasElement(),r=n.shape.slice(Mn(n)?1:0),o=r[0],i=r[1],a=r[2],s=j(function(){return n.as3D(o,i,a).toInt()}),[4,$s.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function Jc(n){var t=lt.getEnv(),e=t.Image,r=t.Canvas,o=t.Video;return n instanceof e||n instanceof r||n instanceof o}function Qb(n,t,e){e===void 0&&(e=!1);var r=lt.getEnv(),o=r.Image,i=r.Canvas;if(!(n instanceof o||n instanceof i))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var a=hh(n),s=t/Math.max(a.height,a.width),u=s*a.width,c=s*a.height,l=Gi({width:t,height:t}),f=n instanceof i?n:eu(n),h=Math.abs(u-c)/2,p=e&&u<c?h:0,d=e&&c<u?h:0;return er(l).drawImage(f,p,d,u,c),l}var xi=function(){function n(t,e){var r=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(o,i){if(Ui(o)){r._imageTensors[i]=o,r._inputDimensions[i]=o.shape;return}if(Mn(o)){var a=o.shape[0];if(a!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+a+" passed, but not supported in input array");r._imageTensors[i]=o,r._inputDimensions[i]=o.shape.slice(1);return}var s=o instanceof lt.getEnv().Canvas?o:eu(o);r._canvases[i]=s,r._inputDimensions[i]=[s.height,s.width,3]})}return Object.defineProperty(n.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"reshapedInputDimensions",{get:function(){var t=this;return oo(this.batchSize,0,1).map(function(e,r){return t.getReshapedInputDimensions(r)})},enumerable:!0,configurable:!0}),n.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},n.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},n.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},n.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},n.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),r=this.getInputHeight(t);return Lb({width:e,height:r},this.inputSize)},n.prototype.toBatchTensor=function(t,e){var r=this;return e===void 0&&(e=!0),this._inputSize=t,j(function(){var o=oo(r.batchSize,0,1).map(function(a){var s=r.getInput(a);if(s instanceof Ne){var u=Mn(s)?s:s.expandDims();return u=Ub(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=Gs.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof lt.getEnv().Canvas)return $s.fromPixels(Qb(s,t,e));throw new Error("toBatchTensor - at batchIdx "+a+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),i=Tt(o.map(function(a){return a.toFloat()})).as4D(r.batchSize,t,t,3);return i})},n}();function Je(n){return Q(this,void 0,void 0,function(){var t,e,r;return Z(this,function(o){switch(o.label){case 0:if(n instanceof xi)return[2,n];if(t=Array.isArray(n)?n:[n],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(i){return Array.isArray(n)?" at input index "+i+":":""},r=t.map(lh),r.forEach(function(i,a){if(!Jc(i)&&!Ui(i)&&!Mn(i))throw typeof t[a]=="string"?new Error("toNetInput -"+e(a)+" string passed, but could not resolve HTMLElement for element id "+t[a]):new Error("toNetInput -"+e(a)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(Mn(i)){var s=i.shape[0];if(s!==1)throw new Error("toNetInput -"+e(a)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(r.map(function(i){return Jc(i)&&Yb(i)}))];case 1:return o.sent(),[2,new xi(r,Array.isArray(n))]}})})}function tu(n,t){return Q(this,void 0,void 0,function(){var e,r,o,i,a,s,u;return Z(this,function(c){switch(c.label){case 0:return e=lt.getEnv().Canvas,r=n,n instanceof e?[3,5]:[4,Je(n)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return i=o.getInput(0),i instanceof e?(a=i,[3,4]):[3,2];case 2:return[4,Jb(i)];case 3:a=c.sent(),c.label=4;case 4:r=a,c.label=5;case 5:return s=er(r),u=t.map(function(l){return l instanceof rn?l.forSize(r.width,r.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(r.width,r.height)}),[2,u.map(function(l){var f=l.x,h=l.y,p=l.width,d=l.height,v=Gi({width:p,height:d});return er(v).putImageData(s.getImageData(f,h,p,d),0,0),v})]}})})}function nu(n,t){return Q(this,void 0,void 0,function(){return Z(this,function(e){if(!Ui(n)&&!Mn(n))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(Mn(n)&&n.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,j(function(){var r=n.shape.slice(Mn(n)?1:0),o=r[0],i=r[1],a=r[2],s=t.map(function(c){return c instanceof rn?c.forSize(i,o).box:c}).map(function(c){return c.clipAtImageBorders(i,o)}),u=s.map(function(c){var l=c.x,f=c.y,h=c.width,p=c.height;return Wf(n.as3D(o,i,a),[f,l,0],[p,h,a])});return u})]})})}function Zb(n,t){return Q(this,void 0,void 0,function(){var e,r;return Z(this,function(o){switch(o.label){case 0:return e=lt.getEnv().fetch,[4,e(n,t)];case 1:if(r=o.sent(),!(r.status<400))throw new Error("failed to fetch: ("+r.status+") "+r.statusText+", from url: "+r.url);return[2,r]}})})}function e1(n){return Q(this,void 0,void 0,function(){return Z(this,function(t){switch(t.label){case 0:return[4,Zb(n)];case 1:return[2,t.sent().json()]}})})}function ph(n,t){var e=t+"-weights_manifest.json";if(!n)return{modelBaseUri:"",manifestUri:e};if(n==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var r=n.startsWith("http://")?"http://":n.startsWith("https://")?"https://":"";n=n.replace(r,"");var o=n.split("/").filter(function(s){return s}),i=n.endsWith(".json")?o[o.length-1]:e,a=r+(n.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return a=n.startsWith("/")?"/"+a:a,{modelBaseUri:a,manifestUri:a==="/"?"/"+i:a+"/"+i}}function t1(n,t){return Q(this,void 0,void 0,function(){var e,r,o,i;return Z(this,function(a){switch(a.label){case 0:return e=ph(n,t),r=e.manifestUri,o=e.modelBaseUri,[4,e1(r)];case 1:return i=a.sent(),[2,nh.loadWeights(i,o)]}})})}var wn=function(){function n(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(n.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),n.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),r=e.obj,o=e.objProp;return r[o]},n.prototype.reassignParamFromPath=function(t,e){var r=this.traversePropertyPath(t),o=r.obj,i=r.objProp;o[i].dispose(),o[i]=e},n.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var r=e.paramPath;return{path:r,tensor:t.getParamFromPath(r)}})},n.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof Dr})},n.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof Dr)})},n.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var r=e.path,o=e.tensor;t.reassignParamFromPath(r,o.variable())})},n.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var r=e.path,o=e.tensor,i=tt(o.dataSync());o.dispose(),t.reassignParamFromPath(r,i)})},n.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},n.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},n.prototype.load=function(t){return Q(this,void 0,void 0,function(){return Z(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},n.prototype.loadFromUri=function(t){return Q(this,void 0,void 0,function(){var e;return Z(this,function(r){switch(r.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,t1(t,this.getDefaultModelName())];case 1:return e=r.sent(),this.loadFromWeightMap(e),[2]}})})},n.prototype.loadFromDisk=function(t){return Q(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f;return Z(this,function(h){switch(h.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=lt.getEnv().readFile,r=ph(t,this.getDefaultModelName()),o=r.manifestUri,i=r.modelBaseUri,a=function(p){return Promise.all(p.map(function(d){return e(d).then(function(v){return v.buffer})}))},s=nh.weightsLoaderFactory(a),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[h.sent().toString()]),[4,s(u,i)];case 2:return f=h.sent(),this.loadFromWeightMap(f),[2]}})})},n.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),r=e.paramMappings,o=e.params;this._paramMappings=r,this._params=o},n.prototype.extractWeights=function(t){var e=this.extractParams(t),r=e.paramMappings,o=e.params;this._paramMappings=r,this._params=o},n.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(i,a){if(!i.nextObj.hasOwnProperty(a))throw new Error("traversePropertyPath - object does not have property "+a+", for path "+t);return{obj:i.nextObj,objProp:a,nextObj:i.nextObj[a]}},{nextObj:this.params}),r=e.obj,o=e.objProp;if(!r||!o||!(r[o]instanceof Ne))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:r,objProp:o}},n}();function It(n,t,e){return j(function(){var r=Ls(n,t.depthwise_filter,t.pointwise_filter,e,"same");return r=ce(r,t.bias),r})}function Va(n,t,e){return e===void 0&&(e=!1),j(function(){var r=Ae(e?ce(Pt(n,t.conv0.filters,[2,2],"same"),t.conv0.bias):It(n,t.conv0,[2,2])),o=It(r,t.conv1,[1,1]),i=Ae(ce(r,o)),a=It(i,t.conv2,[1,1]);return Ae(ce(r,ce(o,a)))})}function Wo(n,t,e,r){return e===void 0&&(e=!1),r===void 0&&(r=!0),j(function(){var o=Ae(e?ce(Pt(n,t.conv0.filters,r?[2,2]:[1,1],"same"),t.conv0.bias):It(n,t.conv0,r?[2,2]:[1,1])),i=It(o,t.conv1,[1,1]),a=Ae(ce(o,i)),s=It(a,t.conv2,[1,1]),u=Ae(ce(o,ce(i,s))),c=It(u,t.conv3,[1,1]);return Ae(ce(o,ce(i,ce(s,c))))})}function Lt(n,t,e,r){return e===void 0&&(e="same"),r===void 0&&(r=!1),j(function(){var o=ce(Pt(n,t.filters,[1,1],e),t.bias);return r?Ae(o):o})}function _n(n,t){Object.keys(n).forEach(function(e){t.some(function(r){return r.originalPath===e})||n[e].dispose()})}function Hi(n,t){return function(e,r,o,i){var a=dt(n(e*r*o*o),[o,o,e,r]),s=Ve(n(r));return t.push({paramPath:i+"/filters"},{paramPath:i+"/bias"}),{filters:a,bias:s}}}function ru(n,t){return function(e,r,o){var i=On(n(e*r),[e,r]),a=Ve(n(r));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:i,bias:a}}}var dh=function(){function n(t,e,r){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=r}return n}();function ou(n,t){return function(e,r,o){var i=dt(n(9*e),[3,3,e,1]),a=dt(n(e*r),[1,1,e,r]),s=Ve(n(r));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new dh(i,a,s)}}function iu(n){return function(t){var e=n(t+"/depthwise_filter",4),r=n(t+"/pointwise_filter",4),o=n(t+"/bias",1);return new dh(e,r,o)}}function zn(n,t){return function(e,r,o){var i=n[e];if(!Vi(i,r))throw new Error("expected weightMap["+e+"] to be a Tensor"+r+"D, instead have "+i);return t.push({originalPath:e,paramPath:o||e}),i}}function En(n){var t=n;function e(o){var i=t.slice(0,o);return t=t.slice(o),i}function r(){return t}return{extractWeights:e,getRemainingWeights:r}}function vh(n,t){var e=Hi(n,t),r=ou(n,t);function o(a,s,u,c){c===void 0&&(c=!1);var l=c?e(a,s,3,u+"/conv0"):r(a,s,u+"/conv0"),f=r(s,s,u+"/conv1"),h=r(s,s,u+"/conv2");return{conv0:l,conv1:f,conv2:h}}function i(a,s,u,c){c===void 0&&(c=!1);var l=o(a,s,u,c),f=l.conv0,h=l.conv1,p=l.conv2,d=r(s,s,u+"/conv3");return{conv0:f,conv1:h,conv2:p,conv3:d}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:i}}function n1(n){var t=[],e=En(n),r=e.extractWeights,o=e.getRemainingWeights,i=vh(r,t).extractDenseBlock4Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2"),c=i(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:a,dense1:s,dense2:u,dense3:c}}}function mh(n){return function(t){var e=n(t+"/filters",4),r=n(t+"/bias",1);return{filters:e,bias:r}}}function gh(n,t){var e=zn(n,t),r=mh(e),o=iu(e);function i(s,u){u===void 0&&(u=!1);var c=u?r(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2");return{conv0:c,conv1:l,conv2:f}}function a(s,u){u===void 0&&(u=!1);var c=u?r(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2"),h=o(s+"/conv3");return{conv0:c,conv1:l,conv2:f,conv3:h}}return{extractDenseBlock3Params:i,extractDenseBlock4Params:a}}function r1(n){var t=[],e=gh(n,t).extractDenseBlock4Params,r={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return _n(n,t),{params:r,paramMappings:t}}var yh=function(n){oe(t,n);function t(){return n.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("FaceFeatureExtractor - load model before inference");return j(function(){var o=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=wo(o,i).div(q(255)),s=Wo(a,r.dense0,!0);return s=Wo(s,r.dense1),s=Wo(s,r.dense2),s=Wo(s,r.dense3),s=bo(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var r;return Z(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,Je(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return r1(e)},t.prototype.extractParams=function(e){return n1(e)},t}(wn);function $t(n,t){return j(function(){return ce(Bi(n,t.weights),t.bias)})}function o1(n,t,e){var r=[],o=En(n),i=o.extractWeights,a=o.getRemainingWeights,s=ru(i,r),u=s(t,e,"fc");if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:r,params:{fc:u}}}function i1(n){var t=[],e=zn(n,t);function r(i){var a=e(i+"/weights",2),s=e(i+"/bias",1);return{weights:a,bias:s}}var o={fc:r("fc")};return _n(n,t),{params:o,paramMappings:t}}function bh(n){var t={},e={};return Object.keys(n).forEach(function(r){var o=r.startsWith("fc")?e:t;o[r]=n[r]}),{featureExtractorMap:t,classifierMap:e}}var xh=function(n){oe(t,n);function t(e,r){var o=n.call(this,e)||this;return o._faceFeatureExtractor=r,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var r=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return j(function(){var i=e instanceof xi?r.faceFeatureExtractor.forwardInput(e):e;return $t(i.as2D(i.shape[0],-1),o.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),n.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var r=this.extractClassifierParams(e),o=r.params,i=r.paramMappings;this._params=o,this._paramMappings=i},t.prototype.extractClassifierParams=function(e){return o1(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var r=bh(e),o=r.featureExtractorMap,i=r.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),i1(i)},t.prototype.extractParams=function(e){var r=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),i=o*r+o,a=e.slice(0,e.length-i),s=e.slice(e.length-i);return this.faceFeatureExtractor.extractWeights(a),this.extractClassifierParams(s)},t}(wn),Qc=["neutral","happy","sad","angry","fearful","disgusted","surprised"],a1=function(){function n(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);Qc.forEach(function(r,o){e[r]=t[o]})}return n.prototype.asSortedArray=function(){var t=this;return Qc.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,r){return r.probability-e.probability})},n}(),s1=function(n){oe(t,n);function t(e){return e===void 0&&(e=new yh),n.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var r=this;return j(function(){return bn(r.runNet(e))})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var r;return Z(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,Je(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(e){return Q(this,void 0,void 0,function(){var r,o,i,a,s=this;return Z(this,function(u){switch(u.label){case 0:return[4,Je(e)];case 1:return r=u.sent(),[4,this.forwardInput(r)];case 2:return o=u.sent(),[4,Promise.all(He(o).map(function(c){return Q(s,void 0,void 0,function(){var l;return Z(this,function(f){switch(f.label){case 0:return[4,c.data()];case 1:return l=f.sent(),c.dispose(),[2,l]}})})}))];case 3:return i=u.sent(),o.dispose(),a=i.map(function(c){return new a1(c)}),[2,r.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(xh);function wh(n,t){var e={expressions:t};return Object.assign({},n,e)}function u1(n){return jb(n)&&n.landmarks instanceof bi&&n.unshiftedLandmarks instanceof bi&&n.alignedRect instanceof rn}function au(n,t){var e=n.detection.box,r=t.shiftBy(e.x,e.y),o=r.align(),i=n.detection.imageDims,a=new rn(n.detection.score,o.rescale(i.reverse()),i),s={landmarks:r,unshiftedLandmarks:t,alignedRect:a};return Object.assign({},n,s)}function c1(n,t){var e=Hi(n,t),r=ou(n,t);function o(a,s,u){var c=r(a,s,u+"/separable_conv0"),l=r(s,s,u+"/separable_conv1"),f=e(a,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:f}}function i(a,s){var u=r(a,a,s+"/separable_conv0"),c=r(a,a,s+"/separable_conv1"),l=r(a,a,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:r,extractReductionBlockParams:o,extractMainBlockParams:i}}function l1(n,t){var e=[],r=En(n),o=r.extractWeights,i=r.getRemainingWeights,a=c1(o,e),s=a.extractConvParams,u=a.extractSeparableConvParams,c=a.extractReductionBlockParams,l=a.extractMainBlockParams,f=s(3,32,3,"entry_flow/conv_in"),h=c(32,64,"entry_flow/reduction_block_0"),p=c(64,128,"entry_flow/reduction_block_1"),d={conv_in:f,reduction_block_0:h,reduction_block_1:p},v={};oo(t,0,1).forEach(function(x){v["main_block_"+x]=l(128,"middle_flow/main_block_"+x)});var m=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),y={reduction_block:m,separable_conv:g};if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:e,params:{entry_flow:d,middle_flow:v,exit_flow:y}}}function f1(n,t){var e=zn(n,t),r=mh(e),o=iu(e);function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=r(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:r,extractSeparableConvParams:o,extractReductionBlockParams:i,extractMainBlockParams:a}}function h1(n,t){var e=[],r=f1(n,e),o=r.extractConvParams,i=r.extractSeparableConvParams,a=r.extractReductionBlockParams,s=r.extractMainBlockParams,u=o("entry_flow/conv_in"),c=a("entry_flow/reduction_block_0"),l=a("entry_flow/reduction_block_1"),f={conv_in:u,reduction_block_0:c,reduction_block_1:l},h={};oo(t,0,1).forEach(function(m){h["main_block_"+m]=s("middle_flow/main_block_"+m)});var p=a("exit_flow/reduction_block"),d=i("exit_flow/separable_conv"),v={reduction_block:p,separable_conv:d};return _n(n,e),{params:{entry_flow:f,middle_flow:h,exit_flow:v},paramMappings:e}}function _h(n,t,e){return ce(Pt(n,t.filters,e,"same"),t.bias)}function Ua(n,t,e){e===void 0&&(e=!0);var r=e?Ae(n):n;return r=It(r,t.separable_conv0,[1,1]),r=It(Ae(r),t.separable_conv1,[1,1]),r=$e(r,[3,3],[2,2],"same"),r=ce(r,_h(n,t.expansion_conv,[2,2])),r}function p1(n,t){var e=It(Ae(n),t.separable_conv0,[1,1]);return e=It(Ae(e),t.separable_conv1,[1,1]),e=It(Ae(e),t.separable_conv2,[1,1]),e=ce(e,n),e}var d1=function(n){oe(t,n);function t(e){var r=n.call(this,"TinyXception")||this;return r._numMainBlocks=e,r}return t.prototype.forwardInput=function(e){var r=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return j(function(){var i=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],s=wo(i,a).div(q(256)),u=Ae(_h(s,o.entry_flow.conv_in,[2,2]));return u=Ua(u,o.entry_flow.reduction_block_0,!1),u=Ua(u,o.entry_flow.reduction_block_1),oo(r._numMainBlocks,0,1).forEach(function(c){u=p1(u,o.middle_flow["main_block_"+c])}),u=Ua(u,o.exit_flow.reduction_block),u=Ae(It(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var r;return Z(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,Je(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return h1(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return l1(e,this._numMainBlocks)},t}(wn);function v1(n){var t=[],e=En(n),r=e.extractWeights,o=e.getRemainingWeights,i=ru(r,t),a=i(512,1,"fc/age"),s=i(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:a,gender:s}}}}function m1(n){var t=[],e=zn(n,t);function r(i){var a=e(i+"/weights",2),s=e(i+"/bias",1);return{weights:a,bias:s}}var o={fc:{age:r("fc/age"),gender:r("fc/gender")}};return _n(n,t),{params:o,paramMappings:t}}var wi;(function(n){n.FEMALE="female",n.MALE="male"})(wi||(wi={}));var g1=function(n){oe(t,n);function t(e){e===void 0&&(e=new d1(2));var r=n.call(this,"AgeGenderNet")||this;return r._faceFeatureExtractor=e,r}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var r=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return j(function(){var i=e instanceof xi?r.faceFeatureExtractor.forwardInput(e):e,a=bo(i,[7,7],[2,2],"valid").as2D(i.shape[0],-1),s=$t(a,o.fc.age).as1D(),u=$t(a,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var r=this;return j(function(){var o=r.runNet(e),i=o.age,a=o.gender;return{age:i,gender:bn(a)}})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var r;return Z(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,Je(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return Q(this,void 0,void 0,function(){var r,o,i,a,s,u,c=this;return Z(this,function(l){switch(l.label){case 0:return[4,Je(e)];case 1:return r=l.sent(),[4,this.forwardInput(r)];case 2:return o=l.sent(),i=He(o.age),a=He(o.gender),s=i.map(function(f,h){return{ageTensor:f,genderTensor:a[h]}}),[4,Promise.all(s.map(function(f){var h=f.ageTensor,p=f.genderTensor;return Q(c,void 0,void 0,function(){var d,v,m,g,y;return Z(this,function(x){switch(x.label){case 0:return[4,h.data()];case 1:return d=x.sent()[0],[4,p.data()];case 2:return v=x.sent()[0],m=v>.5,g=m?wi.MALE:wi.FEMALE,y=m?v:1-v,h.dispose(),p.dispose(),[2,{age:d,gender:g,genderProbability:y}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,r.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),n.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var r=this.extractClassifierParams(e),o=r.params,i=r.paramMappings;this._params=o,this._paramMappings=i},t.prototype.extractClassifierParams=function(e){return v1(e)},t.prototype.extractParamsFromWeigthMap=function(e){var r=bh(e),o=r.featureExtractorMap,i=r.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),m1(i)},t.prototype.extractParams=function(e){var r=1539,o=e.slice(0,e.length-r),i=e.slice(e.length-r);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(i)},t}(wn),Eh=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.postProcess=function(e,r,o){var i=o.map(function(s){var u=s.width,c=s.height,l=r/Math.max(c,u);return{width:u*l,height:c*l}}),a=i.length;return j(function(){var s=function(h,p){return Tt([Qt([68],h),Qt([68],p)],1).as2D(1,136).as1D()},u=function(h,p){var d=i[h],v=d.width,m=d.height;return p(v,m)?Math.abs(v-m)/2:0},c=function(h){return u(h,function(p,d){return p<d})},l=function(h){return u(h,function(p,d){return d<p})},f=e.mul(Qt([a,136],r)).sub(Tt(Array.from(Array(a),function(h,p){return s(c(p),l(p))}))).div(Tt(Array.from(Array(a),function(h,p){return s(i[p].width,i[p].height)})));return f})},t.prototype.forwardInput=function(e){var r=this;return j(function(){var o=r.runNet(e);return r.postProcess(o,e.inputSize,e.inputDimensions.map(function(i){var a=i[0],s=i[1];return{height:a,width:s}}))})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var r;return Z(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,Je(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(e){return Q(this,void 0,void 0,function(){var r,o,i,a=this;return Z(this,function(s){switch(s.label){case 0:return[4,Je(e)];case 1:return r=s.sent(),o=j(function(){return He(a.forwardInput(r))}),[4,Promise.all(o.map(function(u,c){return Q(a,void 0,void 0,function(){var l,f,h,p,d;return Z(this,function(v){switch(v.label){case 0:return h=(f=Array).from,[4,u.data()];case 1:return l=h.apply(f,[v.sent()]),p=l.filter(function(m,g){return Xc(g)}),d=l.filter(function(m,g){return!Xc(g)}),[2,new qb(Array(68).fill(0).map(function(m,g){return new xe(p[g],d[g])}),{height:r.getInputHeight(c),width:r.getInputWidth(c)})]}})})}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,r.isBatchInput?i:i[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(xh),Ch=function(n){oe(t,n);function t(e){return e===void 0&&(e=new yh),n.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t}(Eh);function y1(n){var t=[],e=gh(n,t).extractDenseBlock3Params,r={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return _n(n,t),{params:r,paramMappings:t}}function b1(n){var t=[],e=En(n),r=e.extractWeights,o=e.getRemainingWeights,i=vh(r,t).extractDenseBlock3Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:a,dense1:s,dense2:u}}}var x1=function(n){oe(t,n);function t(){return n.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("TinyFaceFeatureExtractor - load model before inference");return j(function(){var o=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=wo(o,i).div(q(255)),s=Va(a,r.dense0,!0);return s=Va(s,r.dense1),s=Va(s,r.dense2),s=bo(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var r;return Z(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,Je(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return y1(e)},t.prototype.extractParams=function(e){return b1(e)},t}(wn),w1=function(n){oe(t,n);function t(e){return e===void 0&&(e=new x1),n.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t}(Eh);(function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t})(Ch);function _1(n,t){return ce(ut(n,t.weights),t.biases)}function su(n,t,e,r,o){o===void 0&&(o="same");var i=t.conv,a=i.filters,s=i.bias,u=Pt(n,a,e,o);return u=ce(u,s),u=_1(u,t.scale),r?Ae(u):u}function E1(n,t){return su(n,t,[1,1],!0)}function Sh(n,t){return su(n,t,[1,1],!1)}function Ih(n,t){return su(n,t,[2,2],!0,"valid")}function C1(n,t){function e(s,u,c){var l=n(s),f=l.length/(u*c*c);if(Fb(f))throw new Error("depth has to be an integer: "+f+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return j(function(){return Bn(dt(l,[u,f,c,c]),[2,3,1,0])})}function r(s,u,c,l){var f=e(s,u,c),h=Ve(n(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:f,bias:h}}function o(s,u){var c=Ve(n(s)),l=Ve(n(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function i(s,u,c,l){var f=r(s,u,c,l+"/conv"),h=o(u,l+"/scale");return{conv:f,scale:h}}function a(s,u,c,l,f){f===void 0&&(f=!1);var h=i((f?.5:1)*s,u,c,l+"/conv1"),p=i(s,u,c,l+"/conv2");return{conv1:h,conv2:p}}return{extractConvLayerParams:i,extractResidualLayerParams:a}}function S1(n){var t=En(n),e=t.extractWeights,r=t.getRemainingWeights,o=[],i=C1(e,o),a=i.extractConvLayerParams,s=i.extractResidualLayerParams,u=a(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),f=s(9216,32,3,"conv32_3"),h=s(36864,64,3,"conv64_down",!0),p=s(36864,64,3,"conv64_1"),d=s(36864,64,3,"conv64_2"),v=s(36864,64,3,"conv64_3"),m=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),y=s(147456,128,3,"conv128_2"),x=s(589824,256,3,"conv256_down",!0),b=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),_=s(589824,256,3,"conv256_down_out"),T=j(function(){return Bn(On(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),r().length!==0)throw new Error("weights remaing after extract: "+r().length);var S={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:f,conv64_down:h,conv64_1:p,conv64_2:d,conv64_3:v,conv128_down:m,conv128_1:g,conv128_2:y,conv256_down:x,conv256_1:b,conv256_2:w,conv256_down_out:_,fc:T};return{params:S,paramMappings:o}}function I1(n,t){var e=zn(n,t);function r(a){var s=e(a+"/scale/weights",1),u=e(a+"/scale/biases",1);return{weights:s,biases:u}}function o(a){var s=e(a+"/conv/filters",4),u=e(a+"/conv/bias",1),c=r(a);return{conv:{filters:s,bias:u},scale:c}}function i(a){return{conv1:o(a+"/conv1"),conv2:o(a+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:i}}function R1(n){var t=[],e=I1(n,t),r=e.extractConvLayerParams,o=e.extractResidualLayerParams,i=r("conv32_down"),a=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),f=o("conv64_2"),h=o("conv64_3"),p=o("conv128_down"),d=o("conv128_1"),v=o("conv128_2"),m=o("conv256_down"),g=o("conv256_1"),y=o("conv256_2"),x=o("conv256_down_out"),b=n.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!Mb(b))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+b);var w={conv32_down:i,conv32_1:a,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:f,conv64_3:h,conv128_down:p,conv128_1:d,conv128_2:v,conv256_down:m,conv256_1:g,conv256_2:y,conv256_down_out:x,fc:b};return _n(n,t),{params:w,paramMappings:t}}function Ht(n,t){var e=E1(n,t.conv1);return e=Sh(e,t.conv2),e=ce(e,n),e=Ae(e),e}function Vo(n,t){var e=Ih(n,t.conv1);e=Sh(e,t.conv2);var r=bo(n,2,2,"valid"),o=Ce(r.shape),i=r.shape[3]!==e.shape[3],a=r.shape[1]!==e.shape[1]||r.shape[2]!==e.shape[2];if(a){var s=Qr(e.shape);s[1]=1;var u=Ce(s);e=Ge([e,u],1);var c=Qr(e.shape);c[2]=1;var l=Ce(c);e=Ge([e,l],2)}return r=i?Ge([r,o],3):r,e=ce(r,e),e=Ae(e),e}var T1=function(n){oe(t,n);function t(){return n.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("FaceRecognitionNet - load model before inference");return j(function(){var o=e.toBatchTensor(150,!0).toFloat(),i=[122.782,117.001,104.298],a=wo(o,i).div(q(256)),s=Ih(a,r.conv32_down);s=$e(s,3,2,"valid"),s=Ht(s,r.conv32_1),s=Ht(s,r.conv32_2),s=Ht(s,r.conv32_3),s=Vo(s,r.conv64_down),s=Ht(s,r.conv64_1),s=Ht(s,r.conv64_2),s=Ht(s,r.conv64_3),s=Vo(s,r.conv128_down),s=Ht(s,r.conv128_1),s=Ht(s,r.conv128_2),s=Vo(s,r.conv256_down),s=Ht(s,r.conv256_1),s=Ht(s,r.conv256_2),s=Vo(s,r.conv256_down_out);var u=s.mean([1,2]),c=Bi(u,r.fc);return c})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var r;return Z(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,Je(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return Q(this,void 0,void 0,function(){var r,o,i,a=this;return Z(this,function(s){switch(s.label){case 0:return[4,Je(e)];case 1:return r=s.sent(),o=j(function(){return He(a.forwardInput(r))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,r.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return R1(e)},t.prototype.extractParams=function(e){return S1(e)},t}(wn);function Rh(n,t){var e={descriptor:t};return Object.assign({},n,e)}function Th(n,t){var e={age:t};return Object.assign({},n,e)}function Nh(n,t,e){var r={gender:t,genderProbability:e};return Object.assign({},n,r)}var Ah=function(){function n(t){var e=t===void 0?{}:t,r=e.minFaceSize,o=e.scaleFactor,i=e.maxNumScales,a=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=r||20,this._scaleFactor=o||.709,this._maxNumScales=i||10,this._scoreThresholds=a||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(n.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),n}();function N1(n,t){function e(u,c){var l=dt(n(9*u),[3,3,u,1]),f=Ve(n(u)),h=Ve(n(u)),p=Ve(n(u)),d=Ve(n(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:f,batch_norm_offset:h,batch_norm_mean:p,batch_norm_variance:d}}function r(u,c,l,f,h){var p=dt(n(u*c*l*l),[l,l,u,c]),d=Ve(n(c));return t.push({paramPath:f+"/filters"},{paramPath:f+"/"+(h?"batch_norm_offset":"bias")}),{filters:p,bias:d}}function o(u,c,l,f){var h=r(u,c,l,f,!0),p=h.filters,d=h.bias;return{filters:p,batch_norm_offset:d}}function i(u,c,l){var f=e(u,l+"/depthwise_conv"),h=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:f,pointwise_conv:h}}function a(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=i(32,64,"mobilenetv1/conv_1"),l=i(64,128,"mobilenetv1/conv_2"),f=i(128,128,"mobilenetv1/conv_3"),h=i(128,256,"mobilenetv1/conv_4"),p=i(256,256,"mobilenetv1/conv_5"),d=i(256,512,"mobilenetv1/conv_6"),v=i(512,512,"mobilenetv1/conv_7"),m=i(512,512,"mobilenetv1/conv_8"),g=i(512,512,"mobilenetv1/conv_9"),y=i(512,512,"mobilenetv1/conv_10"),x=i(512,512,"mobilenetv1/conv_11"),b=i(512,1024,"mobilenetv1/conv_12"),w=i(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:p,conv_6:d,conv_7:v,conv_8:m,conv_9:g,conv_10:y,conv_11:x,conv_12:b,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),f=o(128,256,3,"prediction_layer/conv_3"),h=o(256,128,1,"prediction_layer/conv_4"),p=o(128,256,3,"prediction_layer/conv_5"),d=o(256,64,1,"prediction_layer/conv_6"),v=o(64,128,3,"prediction_layer/conv_7"),m=r(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=r(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),y=r(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),x=r(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),b=r(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=r(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),_=r(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),T=r(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),S=r(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),E=r(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),I=r(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),A=r(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),N={box_encoding_predictor:m,class_predictor:g},O={box_encoding_predictor:y,class_predictor:x},P={box_encoding_predictor:b,class_predictor:w},M={box_encoding_predictor:_,class_predictor:T},V={box_encoding_predictor:S,class_predictor:E},U={box_encoding_predictor:I,class_predictor:A};return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:p,conv_6:d,conv_7:v,box_predictor_0:N,box_predictor_1:O,box_predictor_2:P,box_predictor_3:M,box_predictor_4:V,box_predictor_5:U}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:s}}function A1(n){var t=[],e=En(n),r=e.extractWeights,o=e.getRemainingWeights,i=N1(r,t),a=i.extractMobilenetV1Params,s=i.extractPredictionLayerParams,u=a(),c=s(),l=Es(r(5118*4),[1,5118,4]),f={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:f},paramMappings:t}}function k1(n,t){var e=zn(n,t);function r(c,l,f){var h=e(c+"/Conv2d_"+l+"_pointwise/weights",4,f+"/filters"),p=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,f+"/batch_norm_offset");return{filters:h,batch_norm_offset:p}}function o(c){var l="mobilenetv1/conv_"+c,f="MobilenetV1/Conv2d_"+c+"_depthwise",h=l+"/depthwise_conv",p=l+"/pointwise_conv",d=e(f+"/depthwise_weights",4,h+"/filters"),v=e(f+"/BatchNorm/gamma",1,h+"/batch_norm_scale"),m=e(f+"/BatchNorm/beta",1,h+"/batch_norm_offset"),g=e(f+"/BatchNorm/moving_mean",1,h+"/batch_norm_mean"),y=e(f+"/BatchNorm/moving_variance",1,h+"/batch_norm_variance");return{depthwise_conv:{filters:d,batch_norm_scale:v,batch_norm_offset:m,batch_norm_mean:g,batch_norm_variance:y},pointwise_conv:r("MobilenetV1",c,p)}}function i(){return{conv_0:r("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function a(c,l){var f=e(c+"/weights",4,l+"/filters"),h=e(c+"/biases",1,l+"/bias");return{filters:f,bias:h}}function s(c){var l=a("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),f=a("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:f}}function u(){return{conv_0:r("Prediction",0,"prediction_layer/conv_0"),conv_1:r("Prediction",1,"prediction_layer/conv_1"),conv_2:r("Prediction",2,"prediction_layer/conv_2"),conv_3:r("Prediction",3,"prediction_layer/conv_3"),conv_4:r("Prediction",4,"prediction_layer/conv_4"),conv_5:r("Prediction",5,"prediction_layer/conv_5"),conv_6:r("Prediction",6,"prediction_layer/conv_6"),conv_7:r("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:u}}function D1(n){var t=[],e=k1(n,t),r=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,i=n["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!Ui(i))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+i);var a={mobilenetv1:r(),prediction_layer:o(),output_layer:{extra_dim:i}};return _n(n,t),{params:a,paramMappings:t}}function Xt(n,t,e){return j(function(){var r=Pt(n,t.filters,e,"same");return r=ce(r,t.batch_norm_offset),Ps(r,0,6)})}var O1=.0010000000474974513;function P1(n,t,e){return j(function(){var r=Fi(n,t.filters,e,"same");return r=Cf(r,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,O1),Ps(r,0,6)})}function M1(n){return[2,4,6,12].some(function(t){return t===n})?[2,2]:[1,1]}function F1(n,t){return j(function(){var e=null,r=Xt(n,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(i,a){var s=a+1,u=M1(s);r=P1(r,i.depthwise_conv,u),r=Xt(r,i.pointwise_conv,[1,1]),s===11&&(e=r)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:r,conv11:e}})}function B1(n,t,e,r,o){var i=n.shape[0],a=Math.min(e,i),s=t.map(function(l,f){return{score:l,boxIndex:f}}).filter(function(l){return l.score>o}).sort(function(l,f){return f.score-l.score}),u=function(l){return l<=r?1:0},c=[];return s.forEach(function(l){if(!(c.length>=a)){for(var f=l.score,h=c.length-1;h>=0;--h){var p=L1(n,l.boxIndex,c[h]);if(p!==0&&(l.score*=u(p),l.score<=o))break}f===l.score&&c.push(l.boxIndex)}}),c}function L1(n,t,e){var r=n.arraySync(),o=Math.min(r[t][0],r[t][2]),i=Math.min(r[t][1],r[t][3]),a=Math.max(r[t][0],r[t][2]),s=Math.max(r[t][1],r[t][3]),u=Math.min(r[e][0],r[e][2]),c=Math.min(r[e][1],r[e][3]),l=Math.max(r[e][0],r[e][2]),f=Math.max(r[e][1],r[e][3]),h=(a-o)*(s-i),p=(l-u)*(f-c);if(h<=0||p<=0)return 0;var d=Math.max(o,u),v=Math.max(i,c),m=Math.min(a,l),g=Math.min(s,f),y=Math.max(m-d,0)*Math.max(g-v,0);return y/(h+p-y)}function W1(n){var t=He(Bn(n,[1,0])),e=[qe(t[2],t[0]),qe(t[3],t[1])],r=[ce(t[0],Ft(e[0],q(2))),ce(t[1],Ft(e[1],q(2)))];return{sizes:e,centers:r}}function V1(n,t){var e=W1(n),r=e.sizes,o=e.centers,i=He(Bn(t,[1,0])),a=Ft(ut(is(Ft(i[2],q(5))),r[0]),q(2)),s=ce(ut(Ft(i[0],q(10)),r[0]),o[0]),u=Ft(ut(is(Ft(i[3],q(5))),r[1]),q(2)),c=ce(ut(Ft(i[1],q(10)),r[1]),o[1]);return Bn(Tt([qe(s,a),qe(c,u),ce(s,a),ce(c,u)]),[1,0])}function U1(n,t,e){return j(function(){var r=n.shape[0],o=V1(Bt(Er(e.extra_dim,[r,1,1]),[-1,4]),Bt(n,[-1,4]));o=Bt(o,[r,o.shape[0]/r,4]);var i=xf(Zt(t,[0,0,1],[-1,-1,-1])),a=Zt(i,[0,0,0],[-1,-1,1]);a=Bt(a,[r,a.shape[1]]);var s=He(o),u=He(a);return{boxes:s,scores:u}})}function mr(n,t){return j(function(){var e=n.shape[0],r=Bt(Lt(n,t.box_encoding_predictor),[e,-1,1,4]),o=Bt(Lt(n,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:r,classPrediction:o}})}function z1(n,t,e){return j(function(){var r=Xt(n,e.conv_0,[1,1]),o=Xt(r,e.conv_1,[2,2]),i=Xt(o,e.conv_2,[1,1]),a=Xt(i,e.conv_3,[2,2]),s=Xt(a,e.conv_4,[1,1]),u=Xt(s,e.conv_5,[2,2]),c=Xt(u,e.conv_6,[1,1]),l=Xt(c,e.conv_7,[2,2]),f=mr(t,e.box_predictor_0),h=mr(n,e.box_predictor_1),p=mr(o,e.box_predictor_2),d=mr(a,e.box_predictor_3),v=mr(u,e.box_predictor_4),m=mr(l,e.box_predictor_5),g=Ge([f.boxPredictionEncoding,h.boxPredictionEncoding,p.boxPredictionEncoding,d.boxPredictionEncoding,v.boxPredictionEncoding,m.boxPredictionEncoding],1),y=Ge([f.classPrediction,h.classPrediction,p.classPrediction,d.classPrediction,v.classPrediction,m.classPrediction],1);return{boxPredictions:g,classPredictions:y}})}var Xi=function(){function n(t){var e=t===void 0?{}:t,r=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=r||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(n.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),n}(),kh=function(n){oe(t,n);function t(){return n.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("SsdMobilenetv1 - load model before inference");return j(function(){var o=e.toBatchTensor(512,!1).toFloat(),i=qe(ut(o,q(.007843137718737125)),q(1)),a=F1(i,r.mobilenetv1),s=z1(a.out,a.conv11,r.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return U1(u,c,r.output_layer)})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var r;return Z(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,Je(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(e,r){return r===void 0&&(r={}),Q(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,p,d,v,m,g,y,x,b,w,_,T,S;return Z(this,function(E){switch(E.label){case 0:return o=new Xi(r),i=o.maxResults,a=o.minConfidence,[4,Je(e)];case 1:for(s=E.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,f=c[0],h=l[0],p=1;p<c.length;p++)c[p].dispose(),l[p].dispose();return m=(v=Array).from,[4,h.data()];case 2:return d=m.apply(v,[E.sent()]),g=.5,y=B1(f,d,i,g,a),x=s.getReshapedInputDimensions(0),b=s.inputSize,w=b/x.width,_=b/x.height,T=f.arraySync(),S=y.map(function(I){var A=[Math.max(0,T[I][0]),Math.min(1,T[I][2])].map(function(U){return U*_}),N=A[0],O=A[1],P=[Math.max(0,T[I][1]),Math.min(1,T[I][3])].map(function(U){return U*w}),M=P[0],V=P[1];return new rn(d[I],new Js(M,N,V-M,O-N),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),f.dispose(),h.dispose(),[2,S]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return D1(e)},t.prototype.extractParams=function(e){return A1(e)},t}(wn);(function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t})(kh);var G1=.4,H1=[new xe(.738768,.874946),new xe(2.42204,2.65704),new xe(4.30971,7.04493),new xe(10.246,4.59428),new xe(12.6868,11.8741)],X1=[new xe(1.603231,2.094468),new xe(6.041143,7.080126),new xe(2.882459,3.518061),new xe(4.266906,5.178857),new xe(9.041765,10.66308)],q1=[117.001,114.697,97.404],j1="tiny_yolov2_model",K1="tiny_yolov2_separable_conv_model",Uo=function(n){return typeof n=="number"};function $1(n){if(!n)throw new Error("invalid config: "+n);if(typeof n.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+n.withSeparableConvs);if(!Uo(n.iouThreshold)||n.iouThreshold<0||n.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+n.iouThreshold);if(!Array.isArray(n.classes)||!n.classes.length||!n.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(n.classes));if(!Array.isArray(n.anchors)||!n.anchors.length||!n.anchors.map(function(t){return t||{}}).every(function(t){return Uo(t.x)&&Uo(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(n.anchors));if(n.meanRgb&&(!Array.isArray(n.meanRgb)||n.meanRgb.length!==3||!n.meanRgb.every(Uo)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(n.meanRgb))}function uu(n){return j(function(){var t=ut(n,q(.10000000149011612));return ce(Ae(qe(n,t)),t)})}function Sn(n,t){return j(function(){var e=ar(n,[[0,0],[1,1],[1,1],[0,0]]);return e=Pt(e,t.conv.filters,[1,1],"valid"),e=qe(e,t.bn.sub),e=ut(e,t.bn.truediv),e=ce(e,t.conv.bias),uu(e)})}function In(n,t){return j(function(){var e=ar(n,[[0,0],[1,1],[1,1],[0,0]]);return e=Ls(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=ce(e,t.bias),uu(e)})}function Y1(n,t){var e=Hi(n,t);function r(a,s){var u=Ve(n(a)),c=Ve(n(a));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(a,s,u){var c=e(a,s,3,u+"/conv"),l=r(s,u+"/bn");return{conv:c,bn:l}}var i=ou(n,t);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:i}}function J1(n,t,e,r){var o=En(n),i=o.extractWeights,a=o.getRemainingWeights,s=[],u=Y1(i,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,f=u.extractSeparableConvParams,h;if(t.withSeparableConvs){var p=r[0],d=r[1],v=r[2],m=r[3],g=r[4],y=r[5],x=r[6],b=r[7],w=r[8],_=t.isFirstLayerConv2d?c(p,d,3,"conv0"):f(p,d,"conv0"),T=f(d,v,"conv1"),S=f(v,m,"conv2"),E=f(m,g,"conv3"),I=f(g,y,"conv4"),A=f(y,x,"conv5"),N=b?f(x,b,"conv6"):void 0,O=w?f(b,w,"conv7"):void 0,P=c(w||b||x,5*e,1,"conv8");h={conv0:_,conv1:T,conv2:S,conv3:E,conv4:I,conv5:A,conv6:N,conv7:O,conv8:P}}else{var p=r[0],d=r[1],v=r[2],m=r[3],g=r[4],y=r[5],x=r[6],b=r[7],w=r[8],_=l(p,d,"conv0"),T=l(d,v,"conv1"),S=l(v,m,"conv2"),E=l(m,g,"conv3"),I=l(g,y,"conv4"),A=l(y,x,"conv5"),N=l(x,b,"conv6"),O=l(b,w,"conv7"),P=c(w,5*e,1,"conv8");h={conv0:_,conv1:T,conv2:S,conv3:E,conv4:I,conv5:A,conv6:N,conv7:O,conv8:P}}if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{params:h,paramMappings:s}}function Q1(n,t){var e=zn(n,t);function r(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function i(s){var u=o(s+"/conv"),c=r(s+"/bn");return{conv:u,bn:c}}var a=iu(e);return{extractConvParams:o,extractConvWithBatchNormParams:i,extractSeparableConvParams:a}}function Z1(n,t){var e=[],r=Q1(n,e),o=r.extractConvParams,i=r.extractConvWithBatchNormParams,a=r.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:u>7?a("conv6"):void 0,conv7:u>8?a("conv7"):void 0,conv8:o("conv8")}}else s={conv0:i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:i("conv6"),conv7:i("conv7"),conv8:o("conv8")};return _n(n,e),{params:s,paramMappings:e}}var Zc;(function(n){n[n.XS=224]="XS",n[n.SM=320]="SM",n[n.MD=416]="MD",n[n.LG=608]="LG"})(Zc||(Zc={}));var cu=function(){function n(t){var e=t===void 0?{}:t,r=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=r||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(n.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),n}(),Dh=function(n){oe(t,n);function t(e){var r=n.call(this,"TinyYolov2")||this;return $1(e),r._config=e,r}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,r){var o=Sn(e,r.conv0);return o=$e(o,[2,2],[2,2],"same"),o=Sn(o,r.conv1),o=$e(o,[2,2],[2,2],"same"),o=Sn(o,r.conv2),o=$e(o,[2,2],[2,2],"same"),o=Sn(o,r.conv3),o=$e(o,[2,2],[2,2],"same"),o=Sn(o,r.conv4),o=$e(o,[2,2],[2,2],"same"),o=Sn(o,r.conv5),o=$e(o,[2,2],[1,1],"same"),o=Sn(o,r.conv6),o=Sn(o,r.conv7),Lt(o,r.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,r){var o=this.config.isFirstLayerConv2d?uu(Lt(e,r.conv0,"valid",!1)):In(e,r.conv0);return o=$e(o,[2,2],[2,2],"same"),o=In(o,r.conv1),o=$e(o,[2,2],[2,2],"same"),o=In(o,r.conv2),o=$e(o,[2,2],[2,2],"same"),o=In(o,r.conv3),o=$e(o,[2,2],[2,2],"same"),o=In(o,r.conv4),o=$e(o,[2,2],[2,2],"same"),o=In(o,r.conv5),o=$e(o,[2,2],[1,1],"same"),o=r.conv6?In(o,r.conv6):o,o=r.conv7?In(o,r.conv7):o,Lt(o,r.conv8,"valid",!1)},t.prototype.forwardInput=function(e,r){var o=this,i=this.params;if(!i)throw new Error("TinyYolov2 - load model before inference");return j(function(){var a=e.toBatchTensor(r,!1).toFloat();return a=o.config.meanRgb?wo(a,o.config.meanRgb):a,a=a.div(q(256)),o.config.withSeparableConvs?o.runMobilenet(a,i):o.runTinyYolov2(a,i)})},t.prototype.forward=function(e,r){return Q(this,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,Je(e)];case 1:return[4,o.apply(this,[i.sent(),r])];case 2:return[2,i.sent()]}})})},t.prototype.detect=function(e,r){return r===void 0&&(r={}),Q(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,p,d,v,m,g,y=this;return Z(this,function(x){switch(x.label){case 0:return o=new cu(r),i=o.inputSize,a=o.scoreThreshold,[4,Je(e)];case 1:return s=x.sent(),[4,this.forwardInput(s,i)];case 2:return u=x.sent(),c=j(function(){return He(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),a)];case 3:return f=x.sent(),u.dispose(),c.dispose(),h=f.map(function(b){return b.box}),p=f.map(function(b){return b.score}),d=f.map(function(b){return b.classScore}),v=f.map(function(b){return y.config.classes[b.label]}),m=io(h.map(function(b){return b.rescale(i)}),p,this.config.iouThreshold,!0),g=m.map(function(b){return new oh(p[b],d[b],v[b],h[b],l)}),[2,g]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return Z1(e,this.config)},t.prototype.extractParams=function(e){var r=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=r?r.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return J1(e,this.config,this.boxEncodingSize,r)},t.prototype.extractBoxes=function(e,r,o){return Q(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,p,d,v,m,g,y,x,b,w,_,T,S,E,I,A,N,O,P,M,V,U,W=this;return Z(this,function(z){switch(z.label){case 0:return i=r.width,a=r.height,s=Math.max(i,a),u=s/i,c=s/a,l=e.shape[1],f=this.config.anchors.length,h=j(function(){var G=e.reshape([l,l,f,W.boxEncodingSize]),X=G.slice([0,0,0,0],[l,l,f,4]),ee=G.slice([0,0,0,4],[l,l,f,1]),te=W.withClassScores?bn(G.slice([0,0,0,5],[l,l,f,W.config.classes.length]),3):q(0);return[X,ee,te]}),p=h[0],d=h[1],v=h[2],m=[],[4,d.array()];case 1:return g=z.sent(),[4,p.array()];case 2:y=z.sent(),x=0,z.label=3;case 3:if(!(x<l))return[3,12];b=0,z.label=4;case 4:if(!(b<l))return[3,11];w=0,z.label=5;case 5:return w<f?(_=Wa(g[x][b][w][0]),!o||_>o?(T=(b+Wa(y[x][b][w][0]))/l*u,S=(x+Wa(y[x][b][w][1]))/l*c,E=Math.exp(y[x][b][w][2])*this.config.anchors[w].x/l*u,I=Math.exp(y[x][b][w][3])*this.config.anchors[w].y/l*c,A=T-E/2,N=S-I/2,O={row:x,col:b,anchor:w},this.withClassScores?[4,this.extractPredictedClass(v,O)]:[3,7]):[3,9]):[3,10];case 6:return U=z.sent(),[3,8];case 7:U={classScore:1,label:0},z.label=8;case 8:P=U,M=P.classScore,V=P.label,m.push(it({box:new zi(A,N,A+E,N+I),score:_,classScore:_*M,label:V},O)),z.label=9;case 9:return w++,[3,5];case 10:return b++,[3,4];case 11:return x++,[3,3];case 12:return p.dispose(),d.dispose(),v.dispose(),[2,m]}})})},t.prototype.extractPredictedClass=function(e,r){return Q(this,void 0,void 0,function(){var o,i,a,s;return Z(this,function(u){switch(u.label){case 0:return o=r.row,i=r.col,a=r.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][i][a][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}(wn),ex=function(n){oe(t,n);function t(e){e===void 0&&(e=!0);var r=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:G1,classes:["face"]},e?{anchors:X1,meanRgb:q1}:{anchors:H1,withClassScores:!0});return r=n.call(this,o)||this,r}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,r){return Q(this,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return[4,this.detect(e,r)];case 1:return o=i.sent(),[2,o.map(function(a){return new rn(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?K1:j1},t.prototype.extractParamsFromWeigthMap=function(e){return n.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Dh),tx=function(n){oe(t,n);function t(){var e=n!==null&&n.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t}(cu),_o=function(){function n(){}return n.prototype.then=function(t){return Q(this,void 0,void 0,function(){var e;return Z(this,function(r){switch(r.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[r.sent()])]}})})},n.prototype.run=function(){return Q(this,void 0,void 0,function(){return Z(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},n}();function qi(n,t,e,r,o){return o===void 0&&(o=function(i){var a=i.alignedRect;return a}),Q(this,void 0,void 0,function(){var i,a,s,u,c;return Z(this,function(l){switch(l.label){case 0:return i=n.map(function(f){return u1(f)?o(f):f.detection}),s=r,s?[3,5]:t instanceof Ne?[4,nu(t,i)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,tu(t,i)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return a=s,[4,e(a)];case 6:return c=l.sent(),a.forEach(function(f){return f instanceof Ne&&f.dispose()}),[2,c]}})})}function lu(n,t,e,r,o){return Q(this,void 0,void 0,function(){var i=this;return Z(this,function(a){return[2,qi([n],t,function(s){return Q(i,void 0,void 0,function(){return Z(this,function(u){return[2,e(s[0])]})})},r,o)]})})}function nx(n){return j(function(){return Tt(He(n,3).reverse(),3)})}var zo=2,_i=12;function rx(n,t){var e=Hi(n,t),r=ru(n,t);function o(c,l){var f=Ve(n(c));return t.push({paramPath:l}),f}function i(c,l,f){f===void 0&&(f=!1);var h=e(c[0],c[1],3,l+"/conv1"),p=o(c[1],l+"/prelu1_alpha"),d=e(c[1],c[2],3,l+"/conv2"),v=o(c[2],l+"/prelu2_alpha"),m=e(c[2],c[3],f?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:p,conv2:d,prelu2_alpha:v,conv3:m,prelu3_alpha:g}}function a(){var c=i([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),f=e(32,4,1,"pnet/conv4_2");return it(it({},c),{conv4_1:l,conv4_2:f})}function s(){var c=i([3,28,48,64],"rnet",!0),l=r(576,128,"rnet/fc1"),f=o(128,"rnet/prelu4_alpha"),h=r(128,2,"rnet/fc2_1"),p=r(128,4,"rnet/fc2_2");return it(it({},c),{fc1:l,prelu4_alpha:f,fc2_1:h,fc2_2:p})}function u(){var c=i([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),f=o(128,"onet/prelu4_alpha"),h=r(1152,256,"onet/fc1"),p=o(256,"onet/prelu5_alpha"),d=r(256,2,"onet/fc2_1"),v=r(256,4,"onet/fc2_2"),m=r(256,10,"onet/fc2_3");return it(it({},c),{conv4:l,prelu4_alpha:f,fc1:h,prelu5_alpha:p,fc2_1:d,fc2_2:v,fc2_3:m})}return{extractPNetParams:a,extractRNetParams:s,extractONetParams:u}}function ox(n){var t=En(n),e=t.extractWeights,r=t.getRemainingWeights,o=[],i=rx(e,o),a=i.extractPNetParams,s=i.extractRNetParams,u=i.extractONetParams,c=a(),l=s(),f=u();if(r().length!==0)throw new Error("weights remaing after extract: "+r().length);return{params:{pnet:c,rnet:l,onet:f},paramMappings:o}}function ix(n,t){var e=zn(n,t);function r(l){var f=e(l+"/weights",4,l+"/filters"),h=e(l+"/bias",1);return{filters:f,bias:h}}function o(l){var f=e(l+"/weights",2),h=e(l+"/bias",1);return{weights:f,bias:h}}function i(l){return e(l,1)}function a(l){var f=r(l+"/conv1"),h=i(l+"/prelu1_alpha"),p=r(l+"/conv2"),d=i(l+"/prelu2_alpha"),v=r(l+"/conv3"),m=i(l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:h,conv2:p,prelu2_alpha:d,conv3:v,prelu3_alpha:m}}function s(){var l=a("pnet"),f=r("pnet/conv4_1"),h=r("pnet/conv4_2");return it(it({},l),{conv4_1:f,conv4_2:h})}function u(){var l=a("rnet"),f=o("rnet/fc1"),h=i("rnet/prelu4_alpha"),p=o("rnet/fc2_1"),d=o("rnet/fc2_2");return it(it({},l),{fc1:f,prelu4_alpha:h,fc2_1:p,fc2_2:d})}function c(){var l=a("onet"),f=r("onet/conv4"),h=i("onet/prelu4_alpha"),p=o("onet/fc1"),d=i("onet/prelu5_alpha"),v=o("onet/fc2_1"),m=o("onet/fc2_2"),g=o("onet/fc2_3");return it(it({},l),{conv4:f,prelu4_alpha:h,fc1:p,prelu5_alpha:d,fc2_1:v,fc2_2:m,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function ax(n){var t=[],e=ix(n,t),r=e.extractPNetParams,o=e.extractRNetParams,i=e.extractONetParams,a=r(),s=o(),u=i();return _n(n,t),{params:{pnet:a,rnet:s,onet:u},paramMappings:t}}function ps(n,t){var e=t[0],r=t[1];return{height:Math.floor(e*n),width:Math.floor(r*n)}}function sx(n,t,e){for(var r=e[0],o=e[1],i=_i/n,a=[],s=Math.min(r,o)*i,u=0;s>=12;)a.push(i*Math.pow(t,u)),s=s*t,u+=1;return a}var fu=function(n){oe(t,n);function t(e,r,o,i){return n.call(this,{left:e,top:r,right:o,bottom:i},!0)||this}return t}(Ln);function Oh(n){return j(function(){return ut(qe(n,q(127.5)),q(.0078125))})}function Nr(n,t){return j(function(){return ce(Ae(n),ut(t,vi(Ae(vi(n)))))})}function hu(n,t,e){return e===void 0&&(e=!1),j(function(){var r=Lt(n,t.conv1,"valid");return r=Nr(r,t.prelu1_alpha),r=$e(r,e?[2,2]:[3,3],[2,2],"same"),r=Lt(r,t.conv2,"valid"),r=Nr(r,t.prelu2_alpha),r=e?r:$e(r,[3,3],[2,2],"valid"),r=Lt(r,t.conv3,"valid"),r=Nr(r,t.prelu3_alpha),r})}function ux(n,t){return j(function(){var e=hu(n,t,!0),r=Lt(e,t.conv4_1,"valid"),o=Nt(Li(r,3),3),i=bn(qe(r,o),3),a=Lt(e,t.conv4_2,"valid");return{prob:i,regions:a}})}function cx(n,t){return j(function(){var e=ps(t,n.shape.slice(1)),r=e.height,o=e.width,i=Gs.resizeBilinear(n,[r,o]),a=Oh(i);return Bn(a,[0,2,1,3])})}function lx(n,t,e,r){for(var o=[],i=n.arraySync(),a=0;a<n.shape[0];a++)for(var s=0;s<n.shape[1];s++)i[a][s]>=r&&o.push(new xe(s,a));var u=o.map(function(c){var l=new zi(Math.round((c.y*zo+1)/e),Math.round((c.x*zo+1)/e),Math.round((c.y*zo+_i)/e),Math.round((c.x*zo+_i)/e)),f=i[c.y][c.x],h=t.arraySync(),p=new fu(h[c.y][c.x][0],h[c.y][c.x][1],h[c.y][c.x][2],h[c.y][c.x][3]);return{cell:l,score:f,region:p}});return u}function fx(n,t,e,r,o){o.stage1=[];var i=t.map(function(h){return j(function(){var p={scale:h},d=cx(n,h),v=Date.now(),m=ux(d,r),g=m.prob,y=m.regions;p.pnet=Date.now()-v;var x=He(He(g,3)[1])[0],b=He(y)[0];return{scoresTensor:x,regionsTensor:b,scale:h,statsForScale:p}})}),a=i.map(function(h){var p=h.scoresTensor,d=h.regionsTensor,v=h.scale,m=h.statsForScale,g=lx(p,d,v,e);if(p.dispose(),d.dispose(),!g.length)return o.stage1.push(m),[];var y=Date.now(),x=io(g.map(function(b){return b.cell}),g.map(function(b){return b.score}),.5);return m.nms=Date.now()-y,m.numBoxes=x.length,o.stage1.push(m),x.map(function(b){return g[b]})}),s=a.reduce(function(h,p){return h.concat(p)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),f=io(s.map(function(h){return h.cell}),s.map(function(h){return h.score}),.7);o.stage1_nms=Date.now()-l,c=f.map(function(h){return s[h].score}),u=f.map(function(h){return s[h]}).map(function(h){var p=h.cell,d=h.region;return new zi(p.left+d.left*p.width,p.top+d.top*p.height,p.right+d.right*p.width,p.bottom+d.bottom*p.height).toSquare().round()})}return{boxes:u,scores:c}}function Ph(n,t,e){var r=e.width,o=e.height;return Q(this,void 0,void 0,function(){var i,a,s,u=this;return Z(this,function(c){switch(c.label){case 0:return i=er(n),[4,Promise.all(t.map(function(l){return Q(u,void 0,void 0,function(){var f,h,p,d,v,m,g,y;return Z(this,function(x){return f=l.padAtBorders(n.height,n.width),h=f.y,p=f.ey,d=f.x,v=f.ex,m=d-1,g=h-1,y=i.getImageData(m,g,v-m,p-g),[2,lt.isNodejs()?eu(y):createImageBitmap(y)]})})}))];case 1:return a=c.sent(),s=[],a.forEach(function(l){var f=Gi({width:r,height:o}),h=er(f);h.drawImage(l,0,0,r,o);for(var p=h.getImageData(0,0,r,o).data,d=[],v=0;v<p.length;v+=4)d.push(p[v+2]),d.push(p[v+1]),d.push(p[v]);s.push(d)}),[2,s.map(function(l){var f=j(function(){var h=Bn(dt(l,[1,r,o,3]),[0,2,1,3]).toFloat();return Oh(h)});return f})]}})})}function hx(n,t){return j(function(){var e=hu(n,t),r=Bt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=$t(r,t.fc1),i=Nr(o,t.prelu4_alpha),a=$t(i,t.fc2_1),s=Nt(Li(a,1),1),u=bn(qe(a,s),1),c=$t(i,t.fc2_2),l=He(u,1)[1];return{scores:l,regions:c}})}function px(n,t,e,r,o){return Q(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,p,d,v,m,g,y;return Z(this,function(x){switch(x.label){case 0:return i=Date.now(),[4,Ph(n,t,{width:24,height:24})];case 1:return a=x.sent(),o.stage2_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(b){var w=hx(b,r);return b.dispose(),w}),o.stage2_rnet=Date.now()-i,u=s.length>1?Ge(s.map(function(b){return b.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[x.sent()]),u.dispose(),h=c.map(function(b,w){return{score:b,idx:w}}).filter(function(b){return b.score>e}).map(function(b){var w=b.idx;return w}),p=h.map(function(b){return t[b]}),d=h.map(function(b){return c[b]}),v=[],m=[],p.length>0&&(i=Date.now(),g=io(p,d,.7),o.stage2_nms=Date.now()-i,y=g.map(function(b){var w=s[h[b]].regions.arraySync();return new fu(w[0][0],w[0][1],w[0][2],w[0][3])}),m=g.map(function(b){return d[b]}),v=g.map(function(b,w){return p[b].calibrate(y[w])})),s.forEach(function(b){b.regions.dispose(),b.scores.dispose()}),[2,{boxes:v,scores:m}]}})})}function dx(n,t){return j(function(){var e=hu(n,t);e=$e(e,[2,2],[2,2],"same"),e=Lt(e,t.conv4,"valid"),e=Nr(e,t.prelu4_alpha);var r=Bt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=$t(r,t.fc1),i=Nr(o,t.prelu5_alpha),a=$t(i,t.fc2_1),s=Nt(Li(a,1),1),u=bn(qe(a,s),1),c=$t(i,t.fc2_2),l=$t(i,t.fc2_3),f=He(u,1)[1];return{scores:f,regions:c,points:l}})}function vx(n,t,e,r,o){return Q(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,p,d,v,m,g,y,x;return Z(this,function(b){switch(b.label){case 0:return i=Date.now(),[4,Ph(n,t,{width:48,height:48})];case 1:return a=b.sent(),o.stage3_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(w){var _=dx(w,r);return w.dispose(),_}),o.stage3_onet=Date.now()-i,u=s.length>1?Ge(s.map(function(w){return w.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[b.sent()]),u.dispose(),h=c.map(function(w,_){return{score:w,idx:_}}).filter(function(w){return w.score>e}).map(function(w){var _=w.idx;return _}),p=h.map(function(w){var _=s[w].regions.arraySync();return new fu(_[0][0],_[0][1],_[0][2],_[0][3])}),d=h.map(function(w,_){return t[w].calibrate(p[_])}),v=h.map(function(w){return c[w]}),m=[],g=[],y=[],d.length>0&&(i=Date.now(),x=io(d,v,.7,!1),o.stage3_nms=Date.now()-i,m=x.map(function(w){return d[w]}),g=x.map(function(w){return v[w]}),y=x.map(function(w,_){return Array(5).fill(0).map(function(T,S){var E=s[w].points.arraySync();return new xe(E[0][S]*(m[_].width+1)+m[_].left,E[0][S+5]*(m[_].height+1)+m[_].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:m,scores:g,points:y}]}})})}var mx=function(n){oe(t,n);function t(){return n.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(r){return console.warn("mtcnn is deprecated and will be removed soon"),[2,n.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(r){return console.warn("mtcnn is deprecated and will be removed soon"),[2,n.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,r){return r===void 0&&(r={}),Q(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,p,d,v,m,g,y,x,b,w,_,T,S;return Z(this,function(E){switch(E.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(i=e.canvases[0],!i)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return a={},s=Date.now(),u=j(function(){return nx(Nt($s.fromPixels(i)).toFloat())}),c=function(I){return u.dispose(),a.total=Date.now()-s,I},l=u.shape.slice(1),f=l[0],h=l[1],p=new Ah(r),d=p.minFaceSize,v=p.scaleFactor,m=p.maxNumScales,g=p.scoreThresholds,y=p.scaleSteps,x=(y||sx(d,v,[f,h])).filter(function(I){var A=ps(I,[f,h]);return Math.min(A.width,A.height)>_i}).slice(0,m),a.scales=x,a.pyramid=x.map(function(I){return ps(I,[f,h])}),b=Date.now(),[4,fx(u,x,g[0],o.pnet,a)];case 1:return w=E.sent(),a.total_stage1=Date.now()-b,w.boxes.length?(a.stage2_numInputBoxes=w.boxes.length,b=Date.now(),[4,px(i,w.boxes,g[1],o.rnet,a)]):[2,c({results:[],stats:a})];case 2:return _=E.sent(),a.total_stage2=Date.now()-b,_.boxes.length?(a.stage3_numInputBoxes=_.boxes.length,b=Date.now(),[4,vx(i,_.boxes,g[2],o.onet,a)]):[2,c({results:[],stats:a})];case 3:return T=E.sent(),a.total_stage3=Date.now()-b,S=T.boxes.map(function(I,A){return au(Qs({},new rn(T.scores[A],new Js(I.left/h,I.top/f,I.width/h,I.height/f),{height:f,width:h})),new Xb(T.points[A].map(function(N){return N.sub(new xe(I.left,I.top)).div(new xe(I.width,I.height))}),{width:I.width,height:I.height}))}),[2,c({results:S,stats:a})]}})})},t.prototype.forward=function(e,r){return r===void 0&&(r={}),Q(this,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,Je(e)];case 1:return[4,o.apply(this,[i.sent(),r])];case 2:return[2,i.sent().results]}})})},t.prototype.forwardWithStats=function(e,r){return r===void 0&&(r={}),Q(this,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,Je(e)];case 1:return[2,o.apply(this,[i.sent(),r])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return ax(e)},t.prototype.extractParams=function(e){return ox(e)},t}(wn),gx=.4,yx=[new xe(1.603231,2.094468),new xe(6.041143,7.080126),new xe(2.882459,3.518061),new xe(4.266906,5.178857),new xe(9.041765,10.66308)],bx=[117.001,114.697,97.404],xx=function(n){oe(t,n);function t(){var e=this,r={withSeparableConvs:!0,iouThreshold:gx,classes:["face"],anchors:yx,meanRgb:bx,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=n.call(this,r)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,r){return Q(this,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return[4,this.detect(e,r)];case 1:return o=i.sent(),[2,o.map(function(a){return new rn(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return n.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Dh),Dt={ssdMobilenetv1:new kh,tinyFaceDetector:new xx,tinyYolov2:new ex,mtcnn:new mx,faceLandmark68Net:new Ch,faceLandmark68TinyNet:new w1,faceRecognitionNet:new T1,faceExpressionNet:new s1,ageGenderNet:new g1},Mh=function(n){oe(t,n);function t(e,r,o){var i=n.call(this)||this;return i.parentTask=e,i.input=r,i.extractedFaces=o,i}return t}(_o),pu=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,r,o=this;return Z(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return e=i.sent(),[4,qi(e,this.input,function(a){return Q(o,void 0,void 0,function(){return Z(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return Dt.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return r=i.sent(),[2,e.map(function(a,s){return wh(a,r[s])})]}})})},t.prototype.withAgeAndGender=function(){return new gu(this,this.input)},t}(Mh),du=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,r;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,lu(e,this.input,function(i){return Dt.faceExpressionNet.predictExpressions(i)},this.extractedFaces)]:[2];case 2:return r=o.sent(),[2,wh(e,r)]}})})},t.prototype.withAgeAndGender=function(){return new yu(this,this.input)},t}(Mh),vu=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new bu(this,this.input)},t.prototype.withFaceDescriptors=function(){return new wu(this,this.input)},t}(pu),mu=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new xu(this,this.input)},t.prototype.withFaceDescriptor=function(){return new _u(this,this.input)},t}(du),Fh=function(n){oe(t,n);function t(e,r,o){var i=n.call(this)||this;return i.parentTask=e,i.input=r,i.extractedFaces=o,i}return t}(_o),gu=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,r,o=this;return Z(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return e=i.sent(),[4,qi(e,this.input,function(a){return Q(o,void 0,void 0,function(){return Z(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return Dt.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return r=i.sent(),[2,e.map(function(a,s){var u=r[s],c=u.age,l=u.gender,f=u.genderProbability;return Th(Nh(a,l,f),c)})]}})})},t.prototype.withFaceExpressions=function(){return new pu(this,this.input)},t}(Fh),yu=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,r,o,i,a;return Z(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,lu(e,this.input,function(u){return Dt.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return r=s.sent(),o=r.age,i=r.gender,a=r.genderProbability,[2,Th(Nh(e,i,a),o)]}})})},t.prototype.withFaceExpressions=function(){return new du(this,this.input)},t}(Fh),bu=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new vu(this,this.input)},t.prototype.withFaceDescriptors=function(){return new wu(this,this.input)},t}(gu),xu=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new mu(this,this.input)},t.prototype.withFaceDescriptor=function(){return new _u(this,this.input)},t}(yu),Bh=function(n){oe(t,n);function t(e,r){var o=n.call(this)||this;return o.parentTask=e,o.input=r,o}return t}(_o),wu=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,r;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,qi(e,this.input,function(i){return Promise.all(i.map(function(a){return Dt.faceRecognitionNet.computeFaceDescriptor(a)}))},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return r=o.sent(),[2,r.map(function(i,a){return Rh(e[a],i)})]}})})},t.prototype.withFaceExpressions=function(){return new vu(this,this.input)},t.prototype.withAgeAndGender=function(){return new bu(this,this.input)},t}(Bh),_u=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,r;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,lu(e,this.input,function(i){return Dt.faceRecognitionNet.computeFaceDescriptor(i)},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return r=o.sent(),[2,Rh(e,r)]}})})},t.prototype.withFaceExpressions=function(){return new mu(this,this.input)},t.prototype.withAgeAndGender=function(){return new xu(this,this.input)},t}(Bh),Lh=function(n){oe(t,n);function t(e,r,o){var i=n.call(this)||this;return i.parentTask=e,i.input=r,i.useTinyLandmarkNet=o,i}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?Dt.faceLandmark68TinyNet:Dt.faceLandmark68Net},enumerable:!0,configurable:!0}),t}(_o),wx=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,r,o,i,a,s=this;return Z(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),r=e.map(function(c){return c.detection}),this.input instanceof Ne?[4,nu(this.input,r)]:[3,3];case 2:return i=u.sent(),[3,5];case 3:return[4,tu(this.input,r)];case 4:i=u.sent(),u.label=5;case 5:return o=i,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return a=u.sent(),o.forEach(function(c){return c instanceof Ne&&c.dispose()}),[2,e.map(function(c,l){return au(c,a[l])})]}})})},t.prototype.withFaceExpressions=function(){return new vu(this,this.input)},t.prototype.withAgeAndGender=function(){return new bu(this,this.input)},t.prototype.withFaceDescriptors=function(){return new wu(this,this.input)},t}(Lh),_x=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,r,o,i,a;return Z(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(r=e.detection,this.input instanceof Ne?[4,nu(this.input,[r])]:[3,3]):[2];case 2:return i=s.sent(),[3,5];case 3:return[4,tu(this.input,[r])];case 4:i=s.sent(),s.label=5;case 5:return o=i,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return a=s.sent(),o.forEach(function(u){return u instanceof Ne&&u.dispose()}),[2,au(e,a)]}})})},t.prototype.withFaceExpressions=function(){return new mu(this,this.input)},t.prototype.withAgeAndGender=function(){return new xu(this,this.input)},t.prototype.withFaceDescriptor=function(){return new _u(this,this.input)},t}(Lh),Wh=function(n){oe(t,n);function t(e,r){r===void 0&&(r=new Xi);var o=n.call(this)||this;return o.input=e,o.options=r,o}return t}(_o),Ex=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,r,o,i;return Z(this,function(a){switch(a.label){case 0:return e=this,r=e.input,o=e.options,o instanceof Ah?[4,Dt.mtcnn.forward(r,o)]:[3,2];case 1:return[2,a.sent().map(function(s){return s.detection})];case 2:if(i=o instanceof tx?function(s){return Dt.tinyFaceDetector.locateFaces(s,o)}:o instanceof Xi?function(s){return Dt.ssdMobilenetv1.locateFaces(s,o)}:o instanceof cu?function(s){return Dt.tinyYolov2.locateFaces(s,o)}:null,!i)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,i(r)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(r){return Q(e,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,r(o.map(function(a){return Qs({},a)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new wx(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new pu(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new gu(this.runAndExtendWithFaceDetections(),this.input)},t}(Wh),Cx=function(n){oe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,r;return Z(this,function(o){switch(o.label){case 0:return[4,new Ex(this.input,this.options)];case 1:return e=o.sent(),r=e[0],e.forEach(function(i){i.score>r.score&&(r=i)}),[2,r]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(r){return Q(e,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,r(o?Qs({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new _x(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new du(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new yu(this.runAndExtendWithFaceDetection(),this.input)},t}(Wh);function N2(n,t){return t===void 0&&(t=new Xi),new Cx(n,t)}function Sx(n,t){if(n.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(n),r=Array.from(t);return Math.sqrt(e.map(function(o,i){return o-r[i]}).reduce(function(o,i){return o+Math.pow(i,2)},0))}(function(){function n(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var r=Array.isArray(t)?t:[t];if(!r.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,i=function(){return"person "+o++};this._labeledDescriptors=r.map(function(a){if(a instanceof Lo)return a;if(a instanceof Float32Array)return new Lo(i(),[a]);if(a.descriptor&&a.descriptor instanceof Float32Array)return new Lo(i(),[a.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(n.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),n.prototype.computeMeanDistance=function(t,e){return e.map(function(r){return Sx(r,t)}).reduce(function(r,o){return r+o},0)/(e.length||1)},n.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(r){var o=r.descriptors,i=r.label;return new Kc(i,e.computeMeanDistance(t,o))}).reduce(function(r,o){return r.distance<o.distance?r:o})},n.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new Kc("unknown",e.distance)},n.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},n.fromJSON=function(t){var e=t.labeledDescriptors.map(function(r){return Lo.fromJSON(r)});return new n(e,t.distanceThreshold)},n})();var jo={exports:{}},za={exports:{}},Ga={};/**
* @vue/compiler-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Mr=Symbol(""),Ar=Symbol(""),ji=Symbol(""),ao=Symbol(""),Eu=Symbol(""),Wn=Symbol(""),Cu=Symbol(""),Su=Symbol(""),Ki=Symbol(""),$i=Symbol(""),Gr=Symbol(""),Yi=Symbol(""),Iu=Symbol(""),Ji=Symbol(""),Qi=Symbol(""),Zi=Symbol(""),ea=Symbol(""),ta=Symbol(""),na=Symbol(""),Ru=Symbol(""),Tu=Symbol(""),Eo=Symbol(""),so=Symbol(""),ra=Symbol(""),oa=Symbol(""),Fr=Symbol(""),Hr=Symbol(""),ia=Symbol(""),Ei=Symbol(""),Vh=Symbol(""),Ci=Symbol(""),uo=Symbol(""),Uh=Symbol(""),zh=Symbol(""),aa=Symbol(""),Gh=Symbol(""),Hh=Symbol(""),sa=Symbol(""),Nu=Symbol(""),tr={[Mr]:"Fragment",[Ar]:"Teleport",[ji]:"Suspense",[ao]:"KeepAlive",[Eu]:"BaseTransition",[Wn]:"openBlock",[Cu]:"createBlock",[Su]:"createElementBlock",[Ki]:"createVNode",[$i]:"createElementVNode",[Gr]:"createCommentVNode",[Yi]:"createTextVNode",[Iu]:"createStaticVNode",[Ji]:"resolveComponent",[Qi]:"resolveDynamicComponent",[Zi]:"resolveDirective",[ea]:"resolveFilter",[ta]:"withDirectives",[na]:"renderList",[Ru]:"renderSlot",[Tu]:"createSlots",[Eo]:"toDisplayString",[so]:"mergeProps",[ra]:"normalizeClass",[oa]:"normalizeStyle",[Fr]:"normalizeProps",[Hr]:"guardReactiveProps",[ia]:"toHandlers",[Ei]:"camelize",[Vh]:"capitalize",[Ci]:"toHandlerKey",[uo]:"setBlockTracking",[Uh]:"pushScopeId",[zh]:"popScopeId",[aa]:"withCtx",[Gh]:"unref",[Hh]:"isRef",[sa]:"withMemo",[Nu]:"isMemoSame"};function Xh(n){Object.getOwnPropertySymbols(n).forEach(t=>{tr[t]=n[t]})}const Ix={HTML:0,0:"HTML",SVG:1,1:"SVG",MATH_ML:2,2:"MATH_ML"},Rx={ROOT:0,0:"ROOT",ELEMENT:1,1:"ELEMENT",TEXT:2,2:"TEXT",COMMENT:3,3:"COMMENT",SIMPLE_EXPRESSION:4,4:"SIMPLE_EXPRESSION",INTERPOLATION:5,5:"INTERPOLATION",ATTRIBUTE:6,6:"ATTRIBUTE",DIRECTIVE:7,7:"DIRECTIVE",COMPOUND_EXPRESSION:8,8:"COMPOUND_EXPRESSION",IF:9,9:"IF",IF_BRANCH:10,10:"IF_BRANCH",FOR:11,11:"FOR",TEXT_CALL:12,12:"TEXT_CALL",VNODE_CALL:13,13:"VNODE_CALL",JS_CALL_EXPRESSION:14,14:"JS_CALL_EXPRESSION",JS_OBJECT_EXPRESSION:15,15:"JS_OBJECT_EXPRESSION",JS_PROPERTY:16,16:"JS_PROPERTY",JS_ARRAY_EXPRESSION:17,17:"JS_ARRAY_EXPRESSION",JS_FUNCTION_EXPRESSION:18,18:"JS_FUNCTION_EXPRESSION",JS_CONDITIONAL_EXPRESSION:19,19:"JS_CONDITIONAL_EXPRESSION",JS_CACHE_EXPRESSION:20,20:"JS_CACHE_EXPRESSION",JS_BLOCK_STATEMENT:21,21:"JS_BLOCK_STATEMENT",JS_TEMPLATE_LITERAL:22,22:"JS_TEMPLATE_LITERAL",JS_IF_STATEMENT:23,23:"JS_IF_STATEMENT",JS_ASSIGNMENT_EXPRESSION:24,24:"JS_ASSIGNMENT_EXPRESSION",JS_SEQUENCE_EXPRESSION:25,25:"JS_SEQUENCE_EXPRESSION",JS_RETURN_STATEMENT:26,26:"JS_RETURN_STATEMENT"},Tx={ELEMENT:0,0:"ELEMENT",COMPONENT:1,1:"COMPONENT",SLOT:2,2:"SLOT",TEMPLATE:3,3:"TEMPLATE"},Nx={NOT_CONSTANT:0,0:"NOT_CONSTANT",CAN_SKIP_PATCH:1,1:"CAN_SKIP_PATCH",CAN_CACHE:2,2:"CAN_CACHE",CAN_STRINGIFY:3,3:"CAN_STRINGIFY"},Ke={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function qh(n,t=""){return{type:0,source:t,children:n,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:[],temps:0,codegenNode:void 0,loc:Ke}}function Br(n,t,e,r,o,i,a,s=!1,u=!1,c=!1,l=Ke){return n&&(s?(n.helper(Wn),n.helper(or(n.inSSR,c))):n.helper(rr(n.inSSR,c)),a&&n.helper(ta)),{type:13,tag:t,props:e,children:r,patchFlag:o,dynamicProps:i,directives:a,isBlock:s,disableTracking:u,isComponent:c,loc:l}}function Fn(n,t=Ke){return{type:17,loc:t,elements:n}}function Rt(n,t=Ke){return{type:15,loc:t,properties:n}}function ke(n,t){return{type:16,loc:Ke,key:ze(n)?re(n,!0):n,value:t}}function re(n,t=!1,e=Ke,r=0){return{type:4,loc:e,content:n,isStatic:t,constType:t?3:r}}function Ax(n,t){return{type:5,loc:t,content:ze(n)?re(n,!1,t):n}}function Ot(n,t=Ke){return{type:8,loc:t,children:n}}function We(n,t=[],e=Ke){return{type:14,loc:e,callee:n,arguments:t}}function nr(n,t=void 0,e=!1,r=!1,o=Ke){return{type:18,params:n,returns:t,newline:e,isSlot:r,loc:o}}function Si(n,t,e,r=!0){return{type:19,test:n,consequent:t,alternate:e,newline:r,loc:Ke}}function jh(n,t,e=!1,r=!1){return{type:20,index:n,value:t,needPauseTracking:e,inVOnce:r,needArraySpread:!1,loc:Ke}}function Kh(n){return{type:21,body:n,loc:Ke}}function kx(n){return{type:22,elements:n,loc:Ke}}function Dx(n,t,e){return{type:23,test:n,consequent:t,alternate:e,loc:Ke}}function Ox(n,t){return{type:24,left:n,right:t,loc:Ke}}function Px(n){return{type:25,expressions:n,loc:Ke}}function Mx(n){return{type:26,returns:n,loc:Ke}}function rr(n,t){return n||t?Ki:$i}function or(n,t){return n||t?Cu:Su}function ua(n,{helper:t,removeHelper:e,inSSR:r}){n.isBlock||(n.isBlock=!0,e(rr(r,n.isComponent)),t(Wn),t(or(r,n.isComponent)))}const el=new Uint8Array([123,123]),tl=new Uint8Array([125,125]);function nl(n){return n>=97&&n<=122||n>=65&&n<=90}function wt(n){return n===32||n===10||n===9||n===12||n===13}function Rn(n){return n===47||n===62||wt(n)}function Ii(n){const t=new Uint8Array(n.length);for(let e=0;e<n.length;e++)t[e]=n.charCodeAt(e);return t}const nt={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class Fx{constructor(t,e){this.stack=t,this.cbs=e,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=el,this.delimiterClose=tl,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=el,this.delimiterClose=tl}getPos(t){let e=1,r=t+1;for(let o=this.newlines.length-1;o>=0;o--){const i=this.newlines[o];if(t>i){e=o+2,r=t-i;break}}return{column:r,line:e,offset:t}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(t){t===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&t===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(t))}stateInterpolationOpen(t){if(t===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const e=this.index+1-this.delimiterOpen.length;e>this.sectionStart&&this.cbs.ontext(this.sectionStart,e),this.state=3,this.sectionStart=e}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(t)):(this.state=1,this.stateText(t))}stateInterpolation(t){t===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(t))}stateInterpolationClose(t){t===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(t))}stateSpecialStartSequence(t){const e=this.sequenceIndex===this.currentSequence.length;if(!(e?Rn(t):(t|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!e){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(t)}stateInRCDATA(t){if(this.sequenceIndex===this.currentSequence.length){if(t===62||wt(t)){const e=this.index-this.currentSequence.length;if(this.sectionStart<e){const r=this.index;this.index=e,this.cbs.ontext(this.sectionStart,e),this.index=r}this.sectionStart=e+2,this.stateInClosingTagName(t),this.inRCDATA=!1;return}this.sequenceIndex=0}(t|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===nt.TitleEnd||this.currentSequence===nt.TextareaEnd&&!this.inSFCRoot?!this.inVPre&&t===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(t)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=+(t===60)}stateCDATASequence(t){t===nt.Cdata[this.sequenceIndex]?++this.sequenceIndex===nt.Cdata.length&&(this.state=28,this.currentSequence=nt.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(t))}fastForwardTo(t){for(;++this.index<this.buffer.length;){const e=this.buffer.charCodeAt(this.index);if(e===10&&this.newlines.push(this.index),e===t)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(t){t===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===nt.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):t!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(t,e){this.enterRCDATA(t,e),this.state=31}enterRCDATA(t,e){this.inRCDATA=!0,this.currentSequence=t,this.sequenceIndex=e}stateBeforeTagName(t){t===33?(this.state=22,this.sectionStart=this.index+1):t===63?(this.state=24,this.sectionStart=this.index+1):nl(t)?(this.sectionStart=this.index,this.mode===0?this.state=6:this.inSFCRoot?this.state=34:this.inXML?this.state=6:t===116?this.state=30:this.state=t===115?29:6):t===47?this.state=8:(this.state=1,this.stateText(t))}stateInTagName(t){Rn(t)&&this.handleTagName(t)}stateInSFCRootTagName(t){if(Rn(t)){const e=this.buffer.slice(this.sectionStart,this.index);e!=="template"&&this.enterRCDATA(Ii("</"+e),0),this.handleTagName(t)}}handleTagName(t){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(t)}stateBeforeClosingTagName(t){wt(t)||(t===62?(this.state=1,this.sectionStart=this.index+1):(this.state=nl(t)?9:27,this.sectionStart=this.index))}stateInClosingTagName(t){(t===62||wt(t))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(t))}stateAfterClosingTagName(t){t===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(t){t===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):t===47?this.state=7:t===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):wt(t)||this.handleAttrStart(t)}handleAttrStart(t){t===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):t===46||t===58||t===64||t===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(t){t===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):wt(t)||(this.state=11,this.stateBeforeAttrName(t))}stateInAttrName(t){(t===61||Rn(t))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(t))}stateInDirName(t){t===61||Rn(t)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):t===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(t){t===61||Rn(t)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===91?this.state=15:t===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(t){t===93?this.state=14:(t===61||Rn(t))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(t))}stateInDirModifier(t){t===61||Rn(t)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(t){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(t)}stateAfterAttrName(t){t===61?this.state=18:t===47||t===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(t)):wt(t)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(t))}stateBeforeAttrValue(t){t===34?(this.state=19,this.sectionStart=this.index+1):t===39?(this.state=20,this.sectionStart=this.index+1):wt(t)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(t))}handleInAttrValue(t,e){(t===e||this.fastForwardTo(e))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(e===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(t){this.handleInAttrValue(t,34)}stateInAttrValueSingleQuotes(t){this.handleInAttrValue(t,39)}stateInAttrValueNoQuotes(t){wt(t)||t===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(t)):(t===39||t===60||t===61||t===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(t){t===91?(this.state=26,this.sequenceIndex=0):this.state=t===45?25:23}stateInDeclaration(t){(t===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(t){(t===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(t){t===45?(this.state=28,this.currentSequence=nt.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(t){(t===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(t){t===nt.ScriptEnd[3]?this.startSpecial(nt.ScriptEnd,4):t===nt.StyleEnd[3]?this.startSpecial(nt.StyleEnd,4):(this.state=6,this.stateInTagName(t))}stateBeforeSpecialT(t){t===nt.TitleEnd[3]?this.startSpecial(nt.TitleEnd,4):t===nt.TextareaEnd[3]?this.startSpecial(nt.TextareaEnd,4):(this.state=6,this.stateInTagName(t))}startEntity(){}stateInEntity(){}parse(t){for(this.buffer=t;this.index<this.buffer.length;){const e=this.buffer.charCodeAt(this.index);switch(e===10&&this.newlines.push(this.index),this.state){case 1:{this.stateText(e);break}case 2:{this.stateInterpolationOpen(e);break}case 3:{this.stateInterpolation(e);break}case 4:{this.stateInterpolationClose(e);break}case 31:{this.stateSpecialStartSequence(e);break}case 32:{this.stateInRCDATA(e);break}case 26:{this.stateCDATASequence(e);break}case 19:{this.stateInAttrValueDoubleQuotes(e);break}case 12:{this.stateInAttrName(e);break}case 13:{this.stateInDirName(e);break}case 14:{this.stateInDirArg(e);break}case 15:{this.stateInDynamicDirArg(e);break}case 16:{this.stateInDirModifier(e);break}case 28:{this.stateInCommentLike(e);break}case 27:{this.stateInSpecialComment(e);break}case 11:{this.stateBeforeAttrName(e);break}case 6:{this.stateInTagName(e);break}case 34:{this.stateInSFCRootTagName(e);break}case 9:{this.stateInClosingTagName(e);break}case 5:{this.stateBeforeTagName(e);break}case 17:{this.stateAfterAttrName(e);break}case 20:{this.stateInAttrValueSingleQuotes(e);break}case 18:{this.stateBeforeAttrValue(e);break}case 8:{this.stateBeforeClosingTagName(e);break}case 10:{this.stateAfterClosingTagName(e);break}case 29:{this.stateBeforeSpecialS(e);break}case 30:{this.stateBeforeSpecialT(e);break}case 21:{this.stateInAttrValueNoQuotes(e);break}case 7:{this.stateInSelfClosingTag(e);break}case 23:{this.stateInDeclaration(e);break}case 22:{this.stateBeforeDeclaration(e);break}case 25:{this.stateBeforeComment(e);break}case 24:{this.stateInProcessingInstruction(e);break}case 33:{this.stateInEntity();break}}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){const t=this.buffer.length;this.sectionStart>=t||(this.state===28?this.currentSequence===nt.CdataEnd?this.cbs.oncdata(this.sectionStart,t):this.cbs.oncomment(this.sectionStart,t):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,t))}emitCodePoint(t,e){}}const Bx={COMPILER_IS_ON_ELEMENT:"COMPILER_IS_ON_ELEMENT",COMPILER_V_BIND_SYNC:"COMPILER_V_BIND_SYNC",COMPILER_V_BIND_OBJECT_ORDER:"COMPILER_V_BIND_OBJECT_ORDER",COMPILER_V_ON_NATIVE:"COMPILER_V_ON_NATIVE",COMPILER_V_IF_V_FOR_PRECEDENCE:"COMPILER_V_IF_V_FOR_PRECEDENCE",COMPILER_NATIVE_TEMPLATE:"COMPILER_NATIVE_TEMPLATE",COMPILER_INLINE_TEMPLATE:"COMPILER_INLINE_TEMPLATE",COMPILER_FILTERS:"COMPILER_FILTERS"},Lx={COMPILER_IS_ON_ELEMENT:{message:'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',link:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"},COMPILER_V_BIND_SYNC:{message:n=>`.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${n}.sync\` should be changed to \`v-model:${n}\`.`,link:"https://v3-migration.vuejs.org/breaking-changes/v-model.html"},COMPILER_V_BIND_OBJECT_ORDER:{message:'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',link:"https://v3-migration.vuejs.org/breaking-changes/v-bind.html"},COMPILER_V_ON_NATIVE:{message:".native modifier for v-on has been removed as is no longer necessary.",link:"https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"},COMPILER_V_IF_V_FOR_PRECEDENCE:{message:"v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",link:"https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"},COMPILER_NATIVE_TEMPLATE:{message:"<template> with no special directives will render as a native template element instead of its inner content in Vue 3."},COMPILER_INLINE_TEMPLATE:{message:'"inline-template" has been removed in Vue 3.',link:"https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"},COMPILER_FILTERS:{message:'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',link:"https://v3-migration.vuejs.org/breaking-changes/filters.html"}};function ds(n,{compatConfig:t}){const e=t&&t[n];return n==="MODE"?e||3:e}function Qn(n,t){const e=ds("MODE",t),r=ds(n,t);return e===3?r===!0:r!==!1}function Lr(n,t,e,...r){return Qn(n,t)}function Wx(n,t,e,...r){if(ds(n,t)==="suppress-warning")return;const{message:i,link:a}=Lx[n],s=`(deprecation ${n}) ${typeof i=="function"?i(...r):i}${a?`
  Details: ${a}`:""}`,u=new SyntaxError(s);u.code=n,e&&(u.loc=e),t.onWarn(u)}function Au(n){throw n}function $h(n){}function Se(n,t,e,r){const o=`https://vuejs.org/error-reference/#compiler-${n}`,i=new SyntaxError(String(o));return i.code=n,i.loc=t,i}const Vx={ABRUPT_CLOSING_OF_EMPTY_COMMENT:0,0:"ABRUPT_CLOSING_OF_EMPTY_COMMENT",CDATA_IN_HTML_CONTENT:1,1:"CDATA_IN_HTML_CONTENT",DUPLICATE_ATTRIBUTE:2,2:"DUPLICATE_ATTRIBUTE",END_TAG_WITH_ATTRIBUTES:3,3:"END_TAG_WITH_ATTRIBUTES",END_TAG_WITH_TRAILING_SOLIDUS:4,4:"END_TAG_WITH_TRAILING_SOLIDUS",EOF_BEFORE_TAG_NAME:5,5:"EOF_BEFORE_TAG_NAME",EOF_IN_CDATA:6,6:"EOF_IN_CDATA",EOF_IN_COMMENT:7,7:"EOF_IN_COMMENT",EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT:8,8:"EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT",EOF_IN_TAG:9,9:"EOF_IN_TAG",INCORRECTLY_CLOSED_COMMENT:10,10:"INCORRECTLY_CLOSED_COMMENT",INCORRECTLY_OPENED_COMMENT:11,11:"INCORRECTLY_OPENED_COMMENT",INVALID_FIRST_CHARACTER_OF_TAG_NAME:12,12:"INVALID_FIRST_CHARACTER_OF_TAG_NAME",MISSING_ATTRIBUTE_VALUE:13,13:"MISSING_ATTRIBUTE_VALUE",MISSING_END_TAG_NAME:14,14:"MISSING_END_TAG_NAME",MISSING_WHITESPACE_BETWEEN_ATTRIBUTES:15,15:"MISSING_WHITESPACE_BETWEEN_ATTRIBUTES",NESTED_COMMENT:16,16:"NESTED_COMMENT",UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME:17,17:"UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME",UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE:18,18:"UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE",UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME:19,19:"UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME",UNEXPECTED_NULL_CHARACTER:20,20:"UNEXPECTED_NULL_CHARACTER",UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME:21,21:"UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME",UNEXPECTED_SOLIDUS_IN_TAG:22,22:"UNEXPECTED_SOLIDUS_IN_TAG",X_INVALID_END_TAG:23,23:"X_INVALID_END_TAG",X_MISSING_END_TAG:24,24:"X_MISSING_END_TAG",X_MISSING_INTERPOLATION_END:25,25:"X_MISSING_INTERPOLATION_END",X_MISSING_DIRECTIVE_NAME:26,26:"X_MISSING_DIRECTIVE_NAME",X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END:27,27:"X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END",X_V_IF_NO_EXPRESSION:28,28:"X_V_IF_NO_EXPRESSION",X_V_IF_SAME_KEY:29,29:"X_V_IF_SAME_KEY",X_V_ELSE_NO_ADJACENT_IF:30,30:"X_V_ELSE_NO_ADJACENT_IF",X_V_FOR_NO_EXPRESSION:31,31:"X_V_FOR_NO_EXPRESSION",X_V_FOR_MALFORMED_EXPRESSION:32,32:"X_V_FOR_MALFORMED_EXPRESSION",X_V_FOR_TEMPLATE_KEY_PLACEMENT:33,33:"X_V_FOR_TEMPLATE_KEY_PLACEMENT",X_V_BIND_NO_EXPRESSION:34,34:"X_V_BIND_NO_EXPRESSION",X_V_ON_NO_EXPRESSION:35,35:"X_V_ON_NO_EXPRESSION",X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET:36,36:"X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET",X_V_SLOT_MIXED_SLOT_USAGE:37,37:"X_V_SLOT_MIXED_SLOT_USAGE",X_V_SLOT_DUPLICATE_SLOT_NAMES:38,38:"X_V_SLOT_DUPLICATE_SLOT_NAMES",X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN:39,39:"X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN",X_V_SLOT_MISPLACED:40,40:"X_V_SLOT_MISPLACED",X_V_MODEL_NO_EXPRESSION:41,41:"X_V_MODEL_NO_EXPRESSION",X_V_MODEL_MALFORMED_EXPRESSION:42,42:"X_V_MODEL_MALFORMED_EXPRESSION",X_V_MODEL_ON_SCOPE_VARIABLE:43,43:"X_V_MODEL_ON_SCOPE_VARIABLE",X_V_MODEL_ON_PROPS:44,44:"X_V_MODEL_ON_PROPS",X_INVALID_EXPRESSION:45,45:"X_INVALID_EXPRESSION",X_KEEP_ALIVE_INVALID_CHILDREN:46,46:"X_KEEP_ALIVE_INVALID_CHILDREN",X_PREFIX_ID_NOT_SUPPORTED:47,47:"X_PREFIX_ID_NOT_SUPPORTED",X_MODULE_MODE_NOT_SUPPORTED:48,48:"X_MODULE_MODE_NOT_SUPPORTED",X_CACHE_HANDLER_NOT_SUPPORTED:49,49:"X_CACHE_HANDLER_NOT_SUPPORTED",X_SCOPE_ID_NOT_SUPPORTED:50,50:"X_SCOPE_ID_NOT_SUPPORTED",X_VNODE_HOOKS:51,51:"X_VNODE_HOOKS",X_V_BIND_INVALID_SAME_NAME_ARGUMENT:52,52:"X_V_BIND_INVALID_SAME_NAME_ARGUMENT",__EXTEND_POINT__:53,53:"__EXTEND_POINT__"},Ux={0:"Illegal comment.",1:"CDATA section is allowed only in XML context.",2:"Duplicate attribute.",3:"End tag cannot have attributes.",4:"Illegal '/' in tags.",5:"Unexpected EOF in tag.",6:"Unexpected EOF in CDATA section.",7:"Unexpected EOF in comment.",8:"Unexpected EOF in script.",9:"Unexpected EOF in tag.",10:"Incorrectly closed comment.",11:"Incorrectly opened comment.",12:"Illegal tag name. Use '&lt;' to print '<'.",13:"Attribute value was expected.",14:"End tag name was expected.",15:"Whitespace was expected.",16:"Unexpected '<!--' in comment.",17:`Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,18:"Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",19:"Attribute name cannot start with '='.",21:"'<?' is allowed only in XML context.",20:"Unexpected null character.",22:"Illegal '/' in tags.",23:"Invalid end tag.",24:"Element is missing end tag.",25:"Interpolation end sign was not found.",27:"End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",26:"Legal directive name was expected.",28:"v-if/v-else-if is missing expression.",29:"v-if/else branches must use unique keys.",30:"v-else/v-else-if has no adjacent v-if or v-else-if.",31:"v-for is missing expression.",32:"v-for has invalid expression.",33:"<template v-for> key should be placed on the <template> tag.",34:"v-bind is missing expression.",52:"v-bind with same-name shorthand only allows static argument.",35:"v-on is missing expression.",36:"Unexpected custom directive on <slot> outlet.",37:"Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",38:"Duplicate slot names found. ",39:"Extraneous children found when component already has explicitly named default slot. These children will be ignored.",40:"v-slot can only be used on components or <template> tags.",41:"v-model is missing expression.",42:"v-model value must be a valid JavaScript member expression.",43:"v-model cannot be used on v-for or v-slot scope variables because they are not writable.",44:`v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,45:"Error parsing JavaScript expression: ",46:"<KeepAlive> expects exactly one child component.",51:"@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.",47:'"prefixIdentifiers" option is not supported in this build of compiler.',48:"ES module mode is not supported in this build of compiler.",49:'"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',50:'"scopeId" option is only supported in module mode.',53:""};function zx(n,t,e=!1,r=[],o=Object.create(null)){}function Gx(n,t,e){return!1}function Hx(n,t){if(n&&(n.type==="ObjectProperty"||n.type==="ArrayPattern")){let e=t.length;for(;e--;){const r=t[e];if(r.type==="AssignmentExpression")return!0;if(r.type!=="ObjectProperty"&&!r.type.endsWith("Pattern"))break}}return!1}function Xx(n){let t=n.length;for(;t--;){const e=n[t];if(e.type==="NewExpression")return!0;if(e.type!=="MemberExpression")break}return!1}function qx(n,t){for(const e of n.params)for(const r of dn(e))t(r)}function jx(n,t){for(const e of n.body)if(e.type==="VariableDeclaration"){if(e.declare)continue;for(const r of e.declarations)for(const o of dn(r.id))t(o)}else if(e.type==="FunctionDeclaration"||e.type==="ClassDeclaration"){if(e.declare||!e.id)continue;t(e.id)}else Kx(e)&&$x(e,!0,t)}function Kx(n){return n.type==="ForOfStatement"||n.type==="ForInStatement"||n.type==="ForStatement"}function $x(n,t,e){const r=n.type==="ForStatement"?n.init:n.left;if(r&&r.type==="VariableDeclaration"&&(r.kind==="var"&&t))for(const o of r.declarations)for(const i of dn(o.id))e(i)}function dn(n,t=[]){switch(n.type){case"Identifier":t.push(n);break;case"MemberExpression":let e=n;for(;e.type==="MemberExpression";)e=e.object;t.push(e);break;case"ObjectPattern":for(const r of n.properties)r.type==="RestElement"?dn(r.argument,t):dn(r.value,t);break;case"ArrayPattern":n.elements.forEach(r=>{r&&dn(r,t)});break;case"RestElement":dn(n.argument,t);break;case"AssignmentPattern":dn(n.left,t);break}return t}const Yx=n=>/Function(?:Expression|Declaration)$|Method$/.test(n.type),Yh=n=>n&&(n.type==="ObjectProperty"||n.type==="ObjectMethod")&&!n.computed,Jx=(n,t)=>Yh(t)&&t.key===n,Jh=["TSAsExpression","TSTypeAssertion","TSNonNullExpression","TSInstantiationExpression","TSSatisfiesExpression"];function Qh(n){return Jh.includes(n.type)?Qh(n.expression):n}const ht=n=>n.type===4&&n.isStatic;function ku(n){switch(n){case"Teleport":case"teleport":return Ar;case"Suspense":case"suspense":return ji;case"KeepAlive":case"keep-alive":return ao;case"BaseTransition":case"base-transition":return Eu}}const Qx=/^\d|[^\$\w\xA0-\uFFFF]/,Co=n=>!Qx.test(n),Zx=/[A-Za-z_$\xA0-\uFFFF]/,ew=/[\.\?\w$\xA0-\uFFFF]/,tw=/\s+[.[]\s*|\s*[.[]\s+/g,Zh=n=>n.type===4?n.content:n.loc.source,ep=n=>{const t=Zh(n).trim().replace(tw,s=>s.trim());let e=0,r=[],o=0,i=0,a=null;for(let s=0;s<t.length;s++){const u=t.charAt(s);switch(e){case 0:if(u==="[")r.push(e),e=1,o++;else if(u==="(")r.push(e),e=2,i++;else if(!(s===0?Zx:ew).test(u))return!1;break;case 1:u==="'"||u==='"'||u==="`"?(r.push(e),e=3,a=u):u==="["?o++:u==="]"&&(--o||(e=r.pop()));break;case 2:if(u==="'"||u==='"'||u==="`")r.push(e),e=3,a=u;else if(u==="(")i++;else if(u===")"){if(s===t.length-1)return!1;--i||(e=r.pop())}break;case 3:u===a&&(e=r.pop(),a=null);break}}return!o&&!i},nw=$r,Du=ep,rw=/^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,tp=n=>rw.test(Zh(n)),ow=$r,np=tp;function iw(n,t,e=t.length){return rp({offset:n.offset,line:n.line,column:n.column},t,e)}function rp(n,t,e=t.length){let r=0,o=-1;for(let i=0;i<e;i++)t.charCodeAt(i)===10&&(r++,o=i);return n.offset+=e,n.line+=r,n.column=o===-1?n.column+e:e-o,n}function aw(n,t){if(!n)throw new Error(t||"unexpected compiler condition")}function ft(n,t,e=!1){for(let r=0;r<n.props.length;r++){const o=n.props[r];if(o.type===7&&(e||o.exp)&&(ze(t)?o.name===t:t.test(o.name)))return o}}function So(n,t,e=!1,r=!1){for(let o=0;o<n.props.length;o++){const i=n.props[o];if(i.type===6){if(e)continue;if(i.name===t&&(i.value||r))return i}else if(i.name==="bind"&&(i.exp||r)&&kn(i.arg,t))return i}}function kn(n,t){return!!(n&&ht(n)&&n.content===t)}function op(n){return n.props.some(t=>t.type===7&&t.name==="bind"&&(!t.arg||t.arg.type!==4||!t.arg.isStatic))}function Ko(n){return n.type===5||n.type===2}function Ou(n){return n.type===7&&n.name==="slot"}function Wr(n){return n.type===1&&n.tagType===3}function co(n){return n.type===1&&n.tagType===2}const sw=new Set([Fr,Hr]);function ip(n,t=[]){if(n&&!ze(n)&&n.type===14){const e=n.callee;if(!ze(e)&&sw.has(e))return ip(n.arguments[0],t.concat(n))}return[n,t]}function lo(n,t,e){let r,o=n.type===13?n.props:n.arguments[2],i=[],a;if(o&&!ze(o)&&o.type===14){const s=ip(o);o=s[0],i=s[1],a=i[i.length-1]}if(o==null||ze(o))r=Rt([t]);else if(o.type===14){const s=o.arguments[0];!ze(s)&&s.type===15?rl(t,s)||s.properties.unshift(t):o.callee===ia?r=We(e.helper(so),[Rt([t]),o]):o.arguments.unshift(Rt([t])),!r&&(r=o)}else o.type===15?(rl(t,o)||o.properties.unshift(t),r=o):(r=We(e.helper(so),[Rt([t]),o]),a&&a.callee===Hr&&(a=i[i.length-2]));n.type===13?a?a.arguments[0]=r:n.props=r:a?a.arguments[0]=r:n.arguments[2]=r}function rl(n,t){let e=!1;if(n.key.type===4){const r=n.key.content;e=t.properties.some(o=>o.key.type===4&&o.key.content===r)}return e}function Vr(n,t){return`_${t}_${n.replace(/[^\w]/g,(e,r)=>e==="-"?"_":n.charCodeAt(r).toString())}`}function Mt(n,t){if(!n||Object.keys(t).length===0)return!1;switch(n.type){case 1:for(let e=0;e<n.props.length;e++){const r=n.props[e];if(r.type===7&&(Mt(r.arg,t)||Mt(r.exp,t)))return!0}return n.children.some(e=>Mt(e,t));case 11:return Mt(n.source,t)?!0:n.children.some(e=>Mt(e,t));case 9:return n.branches.some(e=>Mt(e,t));case 10:return Mt(n.condition,t)?!0:n.children.some(e=>Mt(e,t));case 4:return!n.isStatic&&Co(n.content)&&!!t[n.content];case 8:return n.children.some(e=>wl(e)&&Mt(e,t));case 5:case 12:return Mt(n.content,t);case 2:case 3:case 20:return!1;default:return!1}}function ap(n){return n.type===14&&n.callee===sa?n.arguments[1].returns:n}const sp=/([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/,up={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:To,isPreTag:To,isIgnoreNewlineTag:To,isCustomElement:To,onError:Au,onWarn:$h,comments:!1,prefixIdentifiers:!1};let be=up,fo=null,mn="",rt=null,me=null,pt="",fn=-1,qn=-1,Pu=0,Tn=!1,vs=null;const Ie=[],Me=new Fx(Ie,{onerr:cn,ontext(n,t){Go(Qe(n,t),n,t)},ontextentity(n,t,e){Go(n,t,e)},oninterpolation(n,t){if(Tn)return Go(Qe(n,t),n,t);let e=n+Me.delimiterOpen.length,r=t-Me.delimiterClose.length;for(;wt(mn.charCodeAt(e));)e++;for(;wt(mn.charCodeAt(r-1));)r--;let o=Qe(e,r);o.includes("&")&&(o=be.decodeEntities(o,!1)),ms({type:5,content:Yo(o,!1,Be(e,r)),loc:Be(n,t)})},onopentagname(n,t){const e=Qe(n,t);rt={type:1,tag:e,ns:be.getNamespace(e,Ie[0],be.ns),tagType:0,props:[],children:[],loc:Be(n-1,t),codegenNode:void 0}},onopentagend(n){il(n)},onclosetag(n,t){const e=Qe(n,t);if(!be.isVoidTag(e)){let r=!1;for(let o=0;o<Ie.length;o++)if(Ie[o].tag.toLowerCase()===e.toLowerCase()){r=!0,o>0&&cn(24,Ie[0].loc.start.offset);for(let a=0;a<=o;a++){const s=Ie.shift();$o(s,t,a<o)}break}r||cn(23,cp(n,60))}},onselfclosingtag(n){const t=rt.tag;rt.isSelfClosing=!0,il(n),Ie[0]&&Ie[0].tag===t&&$o(Ie.shift(),n)},onattribname(n,t){me={type:6,name:Qe(n,t),nameLoc:Be(n,t),value:void 0,loc:Be(n)}},ondirname(n,t){const e=Qe(n,t),r=e==="."||e===":"?"bind":e==="@"?"on":e==="#"?"slot":e.slice(2);if(!Tn&&r===""&&cn(26,n),Tn||r==="")me={type:6,name:e,nameLoc:Be(n,t),value:void 0,loc:Be(n)};else if(me={type:7,name:r,rawName:e,exp:void 0,arg:void 0,modifiers:e==="."?[re("prop")]:[],loc:Be(n)},r==="pre"){Tn=Me.inVPre=!0,vs=rt;const o=rt.props;for(let i=0;i<o.length;i++)o[i].type===7&&(o[i]=yw(o[i]))}},ondirarg(n,t){if(n===t)return;const e=Qe(n,t);if(Tn)me.name+=e,Yn(me.nameLoc,t);else{const r=e[0]!=="[";me.arg=Yo(r?e:e.slice(1,-1),r,Be(n,t),r?3:0)}},ondirmodifier(n,t){const e=Qe(n,t);if(Tn)me.name+="."+e,Yn(me.nameLoc,t);else if(me.name==="slot"){const r=me.arg;r&&(r.content+="."+e,Yn(r.loc,t))}else{const r=re(e,!0,Be(n,t));me.modifiers.push(r)}},onattribdata(n,t){pt+=Qe(n,t),fn<0&&(fn=n),qn=t},onattribentity(n,t,e){pt+=n,fn<0&&(fn=t),qn=e},onattribnameend(n){const t=me.loc.start.offset,e=Qe(t,n);me.type===7&&(me.rawName=e),rt.props.some(r=>(r.type===7?r.rawName:r.name)===e)&&cn(2,t)},onattribend(n,t){if(rt&&me){if(Yn(me.loc,t),n!==0)if(pt.includes("&")&&(pt=be.decodeEntities(pt,!0)),me.type===6)me.name==="class"&&(pt=fp(pt).trim()),n===1&&!pt&&cn(13,t),me.value={type:2,content:pt,loc:n===1?Be(fn,qn):Be(fn-1,qn+1)},Me.inSFCRoot&&rt.tag==="template"&&me.name==="lang"&&pt&&pt!=="html"&&Me.enterRCDATA(Ii("</template"),0);else{let e=0;me.exp=Yo(pt,!1,Be(fn,qn),0,e),me.name==="for"&&(me.forParseResult=cw(me.exp));let r=-1;me.name==="bind"&&(r=me.modifiers.findIndex(o=>o.content==="sync"))>-1&&Lr("COMPILER_V_BIND_SYNC",be,me.loc,me.arg.loc.source)&&(me.name="model",me.modifiers.splice(r,1))}(me.type!==7||me.name!=="pre")&&rt.props.push(me)}pt="",fn=qn=-1},oncomment(n,t){be.comments&&ms({type:3,content:Qe(n,t),loc:Be(n-4,t+3)})},onend(){const n=mn.length;for(let t=0;t<Ie.length;t++)$o(Ie[t],n-1),cn(24,Ie[t].loc.start.offset)},oncdata(n,t){Ie[0].ns!==0?Go(Qe(n,t),n,t):cn(1,n-9)},onprocessinginstruction(n){(Ie[0]?Ie[0].ns:be.ns)===0&&cn(21,n-1)}}),ol=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,uw=/^\(|\)$/g;function cw(n){const t=n.loc,e=n.content,r=e.match(sp);if(!r)return;const[,o,i]=r,a=(f,h,p=!1)=>{const d=t.start.offset+h,v=d+f.length;return Yo(f,!1,Be(d,v),0,p?1:0)},s={source:a(i.trim(),e.indexOf(i,o.length)),value:void 0,key:void 0,index:void 0,finalized:!1};let u=o.trim().replace(uw,"").trim();const c=o.indexOf(u),l=u.match(ol);if(l){u=u.replace(ol,"").trim();const f=l[1].trim();let h;if(f&&(h=e.indexOf(f,c+u.length),s.key=a(f,h,!0)),l[2]){const p=l[2].trim();p&&(s.index=a(p,e.indexOf(p,s.key?h+f.length:c+u.length),!0))}}return u&&(s.value=a(u,c,!0)),s}function Qe(n,t){return mn.slice(n,t)}function il(n){Me.inSFCRoot&&(rt.innerLoc=Be(n+1,n+1)),ms(rt);const{tag:t,ns:e}=rt;e===0&&be.isPreTag(t)&&Pu++,be.isVoidTag(t)?$o(rt,n):(Ie.unshift(rt),(e===1||e===2)&&(Me.inXML=!0)),rt=null}function Go(n,t,e){{const i=Ie[0]&&Ie[0].tag;i!=="script"&&i!=="style"&&n.includes("&")&&(n=be.decodeEntities(n,!1))}const r=Ie[0]||fo,o=r.children[r.children.length-1];o&&o.type===2?(o.content+=n,Yn(o.loc,e)):r.children.push({type:2,content:n,loc:Be(t,e)})}function $o(n,t,e=!1){e?Yn(n.loc,cp(t,60)):Yn(n.loc,lw(t,62)+1),Me.inSFCRoot&&(n.children.length?n.innerLoc.end=vn({},n.children[n.children.length-1].loc.end):n.innerLoc.end=vn({},n.innerLoc.start),n.innerLoc.source=Qe(n.innerLoc.start.offset,n.innerLoc.end.offset));const{tag:r,ns:o,children:i}=n;if(Tn||(r==="slot"?n.tagType=2:al(n)?n.tagType=3:hw(n)&&(n.tagType=1)),Me.inRCDATA||(n.children=lp(i)),o===0&&be.isIgnoreNewlineTag(r)){const a=i[0];a&&a.type===2&&(a.content=a.content.replace(/^\r?\n/,""))}o===0&&be.isPreTag(r)&&Pu--,vs===n&&(Tn=Me.inVPre=!1,vs=null),Me.inXML&&(Ie[0]?Ie[0].ns:be.ns)===0&&(Me.inXML=!1);{const a=n.props;if(!Me.inSFCRoot&&Qn("COMPILER_NATIVE_TEMPLATE",be)&&n.tag==="template"&&!al(n)){const u=Ie[0]||fo,c=u.children.indexOf(n);u.children.splice(c,1,...n.children)}const s=a.find(u=>u.type===6&&u.name==="inline-template");s&&Lr("COMPILER_INLINE_TEMPLATE",be,s.loc)&&n.children.length&&(s.value={type:2,content:Qe(n.children[0].loc.start.offset,n.children[n.children.length-1].loc.end.offset),loc:s.loc})}}function lw(n,t){let e=n;for(;mn.charCodeAt(e)!==t&&e<mn.length-1;)e++;return e}function cp(n,t){let e=n;for(;mn.charCodeAt(e)!==t&&e>=0;)e--;return e}const fw=new Set(["if","else","else-if","for","slot"]);function al({tag:n,props:t}){if(n==="template"){for(let e=0;e<t.length;e++)if(t[e].type===7&&fw.has(t[e].name))return!0}return!1}function hw({tag:n,props:t}){if(be.isCustomElement(n))return!1;if(n==="component"||pw(n.charCodeAt(0))||ku(n)||be.isBuiltInComponent&&be.isBuiltInComponent(n)||be.isNativeTag&&!be.isNativeTag(n))return!0;for(let e=0;e<t.length;e++){const r=t[e];if(r.type===6){if(r.name==="is"&&r.value){if(r.value.content.startsWith("vue:"))return!0;if(Lr("COMPILER_IS_ON_ELEMENT",be,r.loc))return!0}}else if(r.name==="bind"&&kn(r.arg,"is")&&Lr("COMPILER_IS_ON_ELEMENT",be,r.loc))return!0}return!1}function pw(n){return n>64&&n<91}const dw=/\r\n/g;function lp(n,t){const e=be.whitespace!=="preserve";let r=!1;for(let o=0;o<n.length;o++){const i=n[o];if(i.type===2)if(Pu)i.content=i.content.replace(dw,`
`);else if(vw(i.content)){const a=n[o-1]&&n[o-1].type,s=n[o+1]&&n[o+1].type;!a||!s||e&&(a===3&&(s===3||s===1)||a===1&&(s===3||s===1&&mw(i.content)))?(r=!0,n[o]=null):i.content=" "}else e&&(i.content=fp(i.content))}return r?n.filter(Boolean):n}function vw(n){for(let t=0;t<n.length;t++)if(!wt(n.charCodeAt(t)))return!1;return!0}function mw(n){for(let t=0;t<n.length;t++){const e=n.charCodeAt(t);if(e===10||e===13)return!0}return!1}function fp(n){let t="",e=!1;for(let r=0;r<n.length;r++)wt(n.charCodeAt(r))?e||(t+=" ",e=!0):(t+=n[r],e=!1);return t}function ms(n){(Ie[0]||fo).children.push(n)}function Be(n,t){return{start:Me.getPos(n),end:t==null?t:Me.getPos(t),source:t==null?t:Qe(n,t)}}function gw(n){return Be(n.start.offset,n.end.offset)}function Yn(n,t){n.end=Me.getPos(t),n.source=Qe(n.start.offset,t)}function yw(n){const t={type:6,name:n.rawName,nameLoc:Be(n.loc.start.offset,n.loc.start.offset+n.rawName.length),value:void 0,loc:n.loc};if(n.exp){const e=n.exp.loc;e.end.offset<n.loc.end.offset&&(e.start.offset--,e.start.column--,e.end.offset++,e.end.column++),t.value={type:2,content:n.exp.content,loc:e}}return t}function Yo(n,t=!1,e,r=0,o=0){return re(n,t,e,r)}function cn(n,t,e){be.onError(Se(n,Be(t,t)))}function bw(){Me.reset(),rt=null,me=null,pt="",fn=-1,qn=-1,Ie.length=0}function Mu(n,t){if(bw(),mn=n,be=vn({},up),t){let o;for(o in t)t[o]!=null&&(be[o]=t[o])}Me.mode=be.parseMode==="html"?1:be.parseMode==="sfc"?2:0,Me.inXML=be.ns===1||be.ns===2;const e=t&&t.delimiters;e&&(Me.delimiterOpen=Ii(e[0]),Me.delimiterClose=Ii(e[1]));const r=fo=qh([],n);return Me.parse(mn),r.loc=Be(0,n.length),r.children=lp(r.children),fo=null,r}function xw(n,t){Jo(n,void 0,t,hp(n,n.children[0]))}function hp(n,t){const{children:e}=n;return e.length===1&&t.type===1&&!co(t)}function Jo(n,t,e,r=!1,o=!1){const{children:i}=n,a=[];for(let f=0;f<i.length;f++){const h=i[f];if(h.type===1&&h.tagType===0){const p=r?0:mt(h,e);if(p>0){if(p>=2){h.codegenNode.patchFlag=-1,a.push(h);continue}}else{const d=h.codegenNode;if(d.type===13){const v=d.patchFlag;if((v===void 0||v===512||v===1)&&dp(h,e)>=2){const m=vp(h);m&&(d.props=e.hoist(m))}d.dynamicProps&&(d.dynamicProps=e.hoist(d.dynamicProps))}}}else if(h.type===12&&(r?0:mt(h,e))>=2){a.push(h);continue}if(h.type===1){const p=h.tagType===1;p&&e.scopes.vSlot++,Jo(h,n,e,!1,o),p&&e.scopes.vSlot--}else if(h.type===11)Jo(h,n,e,h.children.length===1,!0);else if(h.type===9)for(let p=0;p<h.branches.length;p++)Jo(h.branches[p],n,e,h.branches[p].children.length===1,o)}let s=!1;const u=[];if(a.length===i.length&&n.type===1){if(n.tagType===0&&n.codegenNode&&n.codegenNode.type===13&&hn(n.codegenNode.children))n.codegenNode.children=c(Fn(n.codegenNode.children)),s=!0;else if(n.tagType===1&&n.codegenNode&&n.codegenNode.type===13&&n.codegenNode.children&&!hn(n.codegenNode.children)&&n.codegenNode.children.type===15){const f=l(n.codegenNode,"default");f&&(u.push(e.cached.length),f.returns=c(Fn(f.returns)),s=!0)}else if(n.tagType===3&&t&&t.type===1&&t.tagType===1&&t.codegenNode&&t.codegenNode.type===13&&t.codegenNode.children&&!hn(t.codegenNode.children)&&t.codegenNode.children.type===15){const f=ft(n,"slot",!0),h=f&&f.arg&&l(t.codegenNode,f.arg);h&&(u.push(e.cached.length),h.returns=c(Fn(h.returns)),s=!0)}}if(!s)for(const f of a)u.push(e.cached.length),f.codegenNode=e.cache(f.codegenNode);u.length&&n.type===1&&n.tagType===1&&n.codegenNode&&n.codegenNode.type===13&&n.codegenNode.children&&!hn(n.codegenNode.children)&&n.codegenNode.children.type===15&&n.codegenNode.children.properties.push(ke("__",re(JSON.stringify(u),!1)));function c(f){const h=e.cache(f);return o&&e.hmr&&(h.needArraySpread=!0),h}function l(f,h){if(f.children&&!hn(f.children)&&f.children.type===15){const p=f.children.properties.find(d=>d.key===h||d.key.content===h);return p&&p.value}}a.length&&e.transformHoist&&e.transformHoist(i,e,n)}function mt(n,t){const{constantCache:e}=t;switch(n.type){case 1:if(n.tagType!==0)return 0;const r=e.get(n);if(r!==void 0)return r;const o=n.codegenNode;if(o.type!==13||o.isBlock&&n.tag!=="svg"&&n.tag!=="foreignObject"&&n.tag!=="math")return 0;if(o.patchFlag===void 0){let a=3;const s=dp(n,t);if(s===0)return e.set(n,0),0;s<a&&(a=s);for(let u=0;u<n.children.length;u++){const c=mt(n.children[u],t);if(c===0)return e.set(n,0),0;c<a&&(a=c)}if(a>1)for(let u=0;u<n.props.length;u++){const c=n.props[u];if(c.type===7&&c.name==="bind"&&c.exp){const l=mt(c.exp,t);if(l===0)return e.set(n,0),0;l<a&&(a=l)}}if(o.isBlock){for(let u=0;u<n.props.length;u++)if(n.props[u].type===7)return e.set(n,0),0;t.removeHelper(Wn),t.removeHelper(or(t.inSSR,o.isComponent)),o.isBlock=!1,t.helper(rr(t.inSSR,o.isComponent))}return e.set(n,a),a}else return e.set(n,0),0;case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return mt(n.content,t);case 4:return n.constType;case 8:let i=3;for(let a=0;a<n.children.length;a++){const s=n.children[a];if(ze(s)||bs(s))continue;const u=mt(s,t);if(u===0)return 0;u<i&&(i=u)}return i;case 20:return 2;default:return 0}}const ww=new Set([ra,oa,Fr,Hr]);function pp(n,t){if(n.type===14&&!ze(n.callee)&&ww.has(n.callee)){const e=n.arguments[0];if(e.type===4)return mt(e,t);if(e.type===14)return pp(e,t)}return 0}function dp(n,t){let e=3;const r=vp(n);if(r&&r.type===15){const{properties:o}=r;for(let i=0;i<o.length;i++){const{key:a,value:s}=o[i],u=mt(a,t);if(u===0)return u;u<e&&(e=u);let c;if(s.type===4?c=mt(s,t):s.type===14?c=pp(s,t):c=0,c===0)return c;c<e&&(e=c)}}return e}function vp(n){const t=n.codegenNode;if(t.type===13)return t.props}function mp(n,{filename:t="",prefixIdentifiers:e=!1,hoistStatic:r=!1,hmr:o=!1,cacheHandlers:i=!1,nodeTransforms:a=[],directiveTransforms:s={},transformHoist:u=null,isBuiltInComponent:c=$r,isCustomElement:l=$r,expressionPlugins:f=[],scopeId:h=null,slotted:p=!0,ssr:d=!1,inSSR:v=!1,ssrCssVars:m="",bindingMetadata:g=jp,inline:y=!1,isTS:x=!1,onError:b=Au,onWarn:w=$h,compatConfig:_}){const T=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),S={filename:t,selfName:T&&xl(Dn(T[1])),prefixIdentifiers:e,hoistStatic:r,hmr:o,cacheHandlers:i,nodeTransforms:a,directiveTransforms:s,transformHoist:u,isBuiltInComponent:c,isCustomElement:l,expressionPlugins:f,scopeId:h,slotted:p,ssr:d,inSSR:v,ssrCssVars:m,bindingMetadata:g,inline:y,isTS:x,onError:b,onWarn:w,compatConfig:_,root:n,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],cached:[],constantCache:new WeakMap,temps:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,grandParent:null,currentNode:n,childIndex:0,inVOnce:!1,helper(E){const I=S.helpers.get(E)||0;return S.helpers.set(E,I+1),E},removeHelper(E){const I=S.helpers.get(E);if(I){const A=I-1;A?S.helpers.set(E,A):S.helpers.delete(E)}},helperString(E){return`_${tr[S.helper(E)]}`},replaceNode(E){S.parent.children[S.childIndex]=S.currentNode=E},removeNode(E){const I=S.parent.children,A=E?I.indexOf(E):S.currentNode?S.childIndex:-1;!E||E===S.currentNode?(S.currentNode=null,S.onNodeRemoved()):S.childIndex>A&&(S.childIndex--,S.onNodeRemoved()),S.parent.children.splice(A,1)},onNodeRemoved:$r,addIdentifiers(E){},removeIdentifiers(E){},hoist(E){ze(E)&&(E=re(E)),S.hoists.push(E);const I=re(`_hoisted_${S.hoists.length}`,!1,E.loc,2);return I.hoisted=E,I},cache(E,I=!1,A=!1){const N=jh(S.cached.length,E,I,A);return S.cached.push(N),N}};return S.filters=new Set,S}function gp(n,t){const e=mp(n,t);Io(n,e),t.hoistStatic&&xw(n,e),t.ssr||_w(n,e),n.helpers=new Set([...e.helpers.keys()]),n.components=[...e.components],n.directives=[...e.directives],n.imports=e.imports,n.hoists=e.hoists,n.temps=e.temps,n.cached=e.cached,n.transformed=!0,n.filters=[...e.filters]}function _w(n,t){const{helper:e}=t,{children:r}=n;if(r.length===1){const o=r[0];if(hp(n,o)&&o.codegenNode){const i=o.codegenNode;i.type===13&&ua(i,t),n.codegenNode=i}else n.codegenNode=o}else if(r.length>1){let o=64;n.codegenNode=Br(t,e(Mr),void 0,n.children,o,void 0,void 0,!0,void 0,!1)}}function Ew(n,t){let e=0;const r=()=>{e--};for(;e<n.children.length;e++){const o=n.children[e];ze(o)||(t.grandParent=t.parent,t.parent=n,t.childIndex=e,t.onNodeRemoved=r,Io(o,t))}}function Io(n,t){t.currentNode=n;const{nodeTransforms:e}=t,r=[];for(let i=0;i<e.length;i++){const a=e[i](n,t);if(a&&(hn(a)?r.push(...a):r.push(a)),t.currentNode)n=t.currentNode;else return}switch(n.type){case 3:t.ssr||t.helper(Gr);break;case 5:t.ssr||t.helper(Eo);break;case 9:for(let i=0;i<n.branches.length;i++)Io(n.branches[i],t);break;case 10:case 11:case 1:case 0:Ew(n,t);break}t.currentNode=n;let o=r.length;for(;o--;)r[o]()}function Fu(n,t){const e=ze(n)?r=>r===n:r=>n.test(r);return(r,o)=>{if(r.type===1){const{props:i}=r;if(r.tagType===3&&i.some(Ou))return;const a=[];for(let s=0;s<i.length;s++){const u=i[s];if(u.type===7&&e(u.name)){i.splice(s,1),s--;const c=t(r,u,o);c&&a.push(c)}}return a}}}const ca="/*@__PURE__*/",yp=n=>`${tr[n]}: _${tr[n]}`;function Cw(n,{mode:t="function",prefixIdentifiers:e=t==="module",sourceMap:r=!1,filename:o="template.vue.html",scopeId:i=null,optimizeImports:a=!1,runtimeGlobalName:s="Vue",runtimeModuleName:u="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:l=!1,isTS:f=!1,inSSR:h=!1}){const p={mode:t,prefixIdentifiers:e,sourceMap:r,filename:o,scopeId:i,optimizeImports:a,runtimeGlobalName:s,runtimeModuleName:u,ssrRuntimeModuleName:c,ssr:l,isTS:f,inSSR:h,source:n.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(v){return`_${tr[v]}`},push(v,m=-2,g){p.code+=v},indent(){d(++p.indentLevel)},deindent(v=!1){v?--p.indentLevel:d(--p.indentLevel)},newline(){d(p.indentLevel)}};function d(v){p.push(`
`+"  ".repeat(v),0)}return p}function bp(n,t={}){const e=Cw(n,t);t.onContextCreated&&t.onContextCreated(e);const{mode:r,push:o,prefixIdentifiers:i,indent:a,deindent:s,newline:u,scopeId:c,ssr:l}=e,f=Array.from(n.helpers),h=f.length>0,p=!i&&r!=="module";Sw(n,e);const v=l?"ssrRender":"render",g=(l?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(o(`function ${v}(${g}) {`),a(),p&&(o("with (_ctx) {"),a(),h&&(o(`const { ${f.map(yp).join(", ")} } = _Vue
`,-1),u())),n.components.length&&(Ha(n.components,"component",e),(n.directives.length||n.temps>0)&&u()),n.directives.length&&(Ha(n.directives,"directive",e),n.temps>0&&u()),n.filters&&n.filters.length&&(u(),Ha(n.filters,"filter",e),u()),n.temps>0){o("let ");for(let y=0;y<n.temps;y++)o(`${y>0?", ":""}_temp${y}`)}return(n.components.length||n.directives.length||n.temps)&&(o(`
`,0),u()),l||o("return "),n.codegenNode?ct(n.codegenNode,e):o("null"),p&&(s(),o("}")),s(),o("}"),{ast:n,code:e.code,preamble:"",map:e.map?e.map.toJSON():void 0}}function Sw(n,t){const{ssr:e,prefixIdentifiers:r,push:o,newline:i,runtimeModuleName:a,runtimeGlobalName:s,ssrRuntimeModuleName:u}=t,c=s,l=Array.from(n.helpers);if(l.length>0&&(o(`const _Vue = ${c}
`,-1),n.hoists.length)){const f=[Ki,$i,Gr,Yi,Iu].filter(h=>l.includes(h)).map(yp).join(", ");o(`const { ${f} } = _Vue
`,-1)}Iw(n.hoists,t),i(),o("return ")}function Ha(n,t,{helper:e,push:r,newline:o,isTS:i}){const a=e(t==="filter"?ea:t==="component"?Ji:Zi);for(let s=0;s<n.length;s++){let u=n[s];const c=u.endsWith("__self");c&&(u=u.slice(0,-6)),r(`const ${Vr(u,t)} = ${a}(${JSON.stringify(u)}${c?", true":""})${i?"!":""}`),s<n.length-1&&o()}}function Iw(n,t){if(!n.length)return;t.pure=!0;const{push:e,newline:r}=t;r();for(let o=0;o<n.length;o++){const i=n[o];i&&(e(`const _hoisted_${o+1} = `),ct(i,t),r())}t.pure=!1}function Bu(n,t){const e=n.length>3||!1;t.push("["),e&&t.indent(),Ro(n,t,e),e&&t.deindent(),t.push("]")}function Ro(n,t,e=!1,r=!0){const{push:o,newline:i}=t;for(let a=0;a<n.length;a++){const s=n[a];ze(s)?o(s,-3):hn(s)?Bu(s,t):ct(s,t),a<n.length-1&&(e?(r&&o(","),i()):r&&o(", "))}}function ct(n,t){if(ze(n)){t.push(n,-3);return}if(bs(n)){t.push(t.helper(n));return}switch(n.type){case 1:case 9:case 11:ct(n.codegenNode,t);break;case 2:Rw(n,t);break;case 4:xp(n,t);break;case 5:Tw(n,t);break;case 12:ct(n.codegenNode,t);break;case 8:wp(n,t);break;case 3:Aw(n,t);break;case 13:kw(n,t);break;case 14:Ow(n,t);break;case 15:Pw(n,t);break;case 17:Mw(n,t);break;case 18:Fw(n,t);break;case 19:Bw(n,t);break;case 20:Lw(n,t);break;case 21:Ro(n.body,t,!0,!1);break}}function Rw(n,t){t.push(JSON.stringify(n.content),-3,n)}function xp(n,t){const{content:e,isStatic:r}=n;t.push(r?JSON.stringify(e):e,-3,n)}function Tw(n,t){const{push:e,helper:r,pure:o}=t;o&&e(ca),e(`${r(Eo)}(`),ct(n.content,t),e(")")}function wp(n,t){for(let e=0;e<n.children.length;e++){const r=n.children[e];ze(r)?t.push(r,-3):ct(r,t)}}function Nw(n,t){const{push:e}=t;if(n.type===8)e("["),wp(n,t),e("]");else if(n.isStatic){const r=Co(n.content)?n.content:JSON.stringify(n.content);e(r,-2,n)}else e(`[${n.content}]`,-3,n)}function Aw(n,t){const{push:e,helper:r,pure:o}=t;o&&e(ca),e(`${r(Gr)}(${JSON.stringify(n.content)})`,-3,n)}function kw(n,t){const{push:e,helper:r,pure:o}=t,{tag:i,props:a,children:s,patchFlag:u,dynamicProps:c,directives:l,isBlock:f,disableTracking:h,isComponent:p}=n;let d;u&&(d=String(u)),l&&e(r(ta)+"("),f&&e(`(${r(Wn)}(${h?"true":""}), `),o&&e(ca);const v=f?or(t.inSSR,p):rr(t.inSSR,p);e(r(v)+"(",-2,n),Ro(Dw([i,a,s,d,c]),t),e(")"),f&&e(")"),l&&(e(", "),ct(l,t),e(")"))}function Dw(n){let t=n.length;for(;t--&&n[t]==null;);return n.slice(0,t+1).map(e=>e||"null")}function Ow(n,t){const{push:e,helper:r,pure:o}=t,i=ze(n.callee)?n.callee:r(n.callee);o&&e(ca),e(i+"(",-2,n),Ro(n.arguments,t),e(")")}function Pw(n,t){const{push:e,indent:r,deindent:o,newline:i}=t,{properties:a}=n;if(!a.length){e("{}",-2,n);return}const s=a.length>1||!1;e(s?"{":"{ "),s&&r();for(let u=0;u<a.length;u++){const{key:c,value:l}=a[u];Nw(c,t),e(": "),ct(l,t),u<a.length-1&&(e(","),i())}s&&o(),e(s?"}":" }")}function Mw(n,t){Bu(n.elements,t)}function Fw(n,t){const{push:e,indent:r,deindent:o}=t,{params:i,returns:a,body:s,newline:u,isSlot:c}=n;c&&e(`_${tr[aa]}(`),e("(",-2,n),hn(i)?Ro(i,t):i&&ct(i,t),e(") => "),(u||s)&&(e("{"),r()),a?(u&&e("return "),hn(a)?Bu(a,t):ct(a,t)):s&&ct(s,t),(u||s)&&(o(),e("}")),c&&(n.isNonScopedSlot&&e(", undefined, true"),e(")"))}function Bw(n,t){const{test:e,consequent:r,alternate:o,newline:i}=n,{push:a,indent:s,deindent:u,newline:c}=t;if(e.type===4){const f=!Co(e.content);f&&a("("),xp(e,t),f&&a(")")}else a("("),ct(e,t),a(")");i&&s(),t.indentLevel++,i||a(" "),a("? "),ct(r,t),t.indentLevel--,i&&c(),i||a(" "),a(": ");const l=o.type===19;l||t.indentLevel++,ct(o,t),l||t.indentLevel--,i&&u(!0)}function Lw(n,t){const{push:e,helper:r,indent:o,deindent:i,newline:a}=t,{needPauseTracking:s,needArraySpread:u}=n;u&&e("[...("),e(`_cache[${n.index}] || (`),s&&(o(),e(`${r(uo)}(-1`),n.inVOnce&&e(", true"),e("),"),a(),e("(")),e(`_cache[${n.index}] = `),ct(n.value,t),s&&(e(`).cacheIndex = ${n.index},`),a(),e(`${r(uo)}(1),`),a(),e(`_cache[${n.index}]`),i()),e(")"),u&&e(")]")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const Ww=(n,t)=>{if(n.type===5)n.content=Qo(n.content,t);else if(n.type===1){const e=ft(n,"memo");for(let r=0;r<n.props.length;r++){const o=n.props[r];if(o.type===7&&o.name!=="for"){const i=o.exp,a=o.arg;i&&i.type===4&&!(o.name==="on"&&a)&&!(e&&a&&a.type===4&&a.content==="key")&&(o.exp=Qo(i,t,o.name==="slot")),a&&a.type===4&&!a.isStatic&&(o.arg=Qo(a,t))}}}};function Qo(n,t,e=!1,r=!1,o=Object.create(t.identifiers)){return n}function _p(n){return ze(n)?n:n.type===4?n.content:n.children.map(_p).join("")}const Vw=Fu(/^(if|else|else-if)$/,(n,t,e)=>Ep(n,t,e,(r,o,i)=>{const a=e.parent.children;let s=a.indexOf(r),u=0;for(;s-->=0;){const c=a[s];c&&c.type===9&&(u+=c.branches.length)}return()=>{if(i)r.codegenNode=ul(o,u,e);else{const c=Uw(r.codegenNode);c.alternate=ul(o,u+r.branches.length-1,e)}}}));function Ep(n,t,e,r){if(t.name!=="else"&&(!t.exp||!t.exp.content.trim())){const o=t.exp?t.exp.loc:n.loc;e.onError(Se(28,t.loc)),t.exp=re("true",!1,o)}if(t.name==="if"){const o=sl(n,t),i={type:9,loc:gw(n.loc),branches:[o]};if(e.replaceNode(i),r)return r(i,o,!0)}else{const o=e.parent.children;let i=o.indexOf(n);for(;i-->=-1;){const a=o[i];if(a&&a.type===3){e.removeNode(a);continue}if(a&&a.type===2&&!a.content.trim().length){e.removeNode(a);continue}if(a&&a.type===9){t.name==="else-if"&&a.branches[a.branches.length-1].condition===void 0&&e.onError(Se(30,n.loc)),e.removeNode();const s=sl(n,t);a.branches.push(s);const u=r&&r(a,s,!1);Io(s,e),u&&u(),e.currentNode=null}else e.onError(Se(30,n.loc));break}}}function sl(n,t){const e=n.tagType===3;return{type:10,loc:n.loc,condition:t.name==="else"?void 0:t.exp,children:e&&!ft(n,"for")?n.children:[n],userKey:So(n,"key"),isTemplateIf:e}}function ul(n,t,e){return n.condition?Si(n.condition,cl(n,t,e),We(e.helper(Gr),['""',"true"])):cl(n,t,e)}function cl(n,t,e){const{helper:r}=e,o=ke("key",re(`${t}`,!1,Ke,2)),{children:i}=n,a=i[0];if(i.length!==1||a.type!==1)if(i.length===1&&a.type===11){const u=a.codegenNode;return lo(u,o,e),u}else return Br(e,r(Mr),Rt([o]),i,64,void 0,void 0,!0,!1,!1,n.loc);else{const u=a.codegenNode,c=ap(u);return c.type===13&&ua(c,e),lo(c,o,e),u}}function Uw(n){for(;;)if(n.type===19)if(n.alternate.type===19)n=n.alternate;else return n;else n.type===20&&(n=n.value)}const Cp=(n,t,e)=>{const{modifiers:r,loc:o}=n,i=n.arg;let{exp:a}=n;if(a&&a.type===4&&!a.content.trim()&&(a=void 0),!a){if(i.type!==4||!i.isStatic)return e.onError(Se(52,i.loc)),{props:[ke(i,re("",!0,o))]};Sp(n),a=n.exp}return i.type!==4?(i.children.unshift("("),i.children.push(') || ""')):i.isStatic||(i.content=`${i.content} || ""`),r.some(s=>s.content==="camel")&&(i.type===4?i.isStatic?i.content=Dn(i.content):i.content=`${e.helperString(Ei)}(${i.content})`:(i.children.unshift(`${e.helperString(Ei)}(`),i.children.push(")"))),e.inSSR||(r.some(s=>s.content==="prop")&&ll(i,"."),r.some(s=>s.content==="attr")&&ll(i,"^")),{props:[ke(i,a)]}},Sp=(n,t)=>{const e=n.arg,r=Dn(e.content);n.exp=re(r,!1,e.loc)},ll=(n,t)=>{n.type===4?n.isStatic?n.content=t+n.content:n.content=`\`${t}\${${n.content}}\``:(n.children.unshift(`'${t}' + (`),n.children.push(")"))},zw=Fu("for",(n,t,e)=>{const{helper:r,removeHelper:o}=e;return Ip(n,t,e,i=>{const a=We(r(na),[i.source]),s=Wr(n),u=ft(n,"memo"),c=So(n,"key",!1,!0);c&&c.type===7&&!c.exp&&Sp(c);let f=c&&(c.type===6?c.value?re(c.value.content,!0):void 0:c.exp);const h=c&&f?ke("key",f):null,p=i.source.type===4&&i.source.constType>0,d=p?64:c?128:256;return i.codegenNode=Br(e,r(Mr),void 0,a,d,void 0,void 0,!0,!p,!1,n.loc),()=>{let v;const{children:m}=i,g=m.length!==1||m[0].type!==1,y=co(n)?n:s&&n.children.length===1&&co(n.children[0])?n.children[0]:null;if(y?(v=y.codegenNode,s&&h&&lo(v,h,e)):g?v=Br(e,r(Mr),h?Rt([h]):void 0,n.children,64,void 0,void 0,!0,void 0,!1):(v=m[0].codegenNode,s&&h&&lo(v,h,e),v.isBlock!==!p&&(v.isBlock?(o(Wn),o(or(e.inSSR,v.isComponent))):o(rr(e.inSSR,v.isComponent))),v.isBlock=!p,v.isBlock?(r(Wn),r(or(e.inSSR,v.isComponent))):r(rr(e.inSSR,v.isComponent))),u){const x=nr(Ri(i.parseResult,[re("_cached")]));x.body=Kh([Ot(["const _memo = (",u.exp,")"]),Ot(["if (_cached",...f?[" && _cached.key === ",f]:[],` && ${e.helperString(Nu)}(_cached, _memo)) return _cached`]),Ot(["const _item = ",v]),re("_item.memo = _memo"),re("return _item")]),a.arguments.push(x,re("_cache"),re(String(e.cached.length))),e.cached.push(null)}else a.arguments.push(nr(Ri(i.parseResult),v,!0))}})});function Ip(n,t,e,r){if(!t.exp){e.onError(Se(31,t.loc));return}const o=t.forParseResult;if(!o){e.onError(Se(32,t.loc));return}Lu(o);const{addIdentifiers:i,removeIdentifiers:a,scopes:s}=e,{source:u,value:c,key:l,index:f}=o,h={type:11,loc:t.loc,source:u,valueAlias:c,keyAlias:l,objectIndexAlias:f,parseResult:o,children:Wr(n)?n.children:[n]};e.replaceNode(h),s.vFor++;const p=r&&r(h);return()=>{s.vFor--,p&&p()}}function Lu(n,t){n.finalized||(n.finalized=!0)}function Ri({value:n,key:t,index:e},r=[]){return Gw([n,t,e,...r])}function Gw(n){let t=n.length;for(;t--&&!n[t];);return n.slice(0,t+1).map((e,r)=>e||re("_".repeat(r+1),!1))}const fl=re("undefined",!1),Rp=(n,t)=>{if(n.type===1&&(n.tagType===1||n.tagType===3)){const e=ft(n,"slot");if(e)return e.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},Hw=(n,t)=>{let e;if(Wr(n)&&n.props.some(Ou)&&(e=ft(n,"for"))){const r=e.forParseResult;if(r){Lu(r);const{value:o,key:i,index:a}=r,{addIdentifiers:s,removeIdentifiers:u}=t;return o&&s(o),i&&s(i),a&&s(a),()=>{o&&u(o),i&&u(i),a&&u(a)}}}},Xw=(n,t,e,r)=>nr(n,e,!1,!0,e.length?e[0].loc:r);function Tp(n,t,e=Xw){t.helper(aa);const{children:r,loc:o}=n,i=[],a=[];let s=t.scopes.vSlot>0||t.scopes.vFor>0;const u=ft(n,"slot",!0);if(u){const{arg:m,exp:g}=u;m&&!ht(m)&&(s=!0),i.push(ke(m||re("default",!0),e(g,void 0,r,o)))}let c=!1,l=!1;const f=[],h=new Set;let p=0;for(let m=0;m<r.length;m++){const g=r[m];let y;if(!Wr(g)||!(y=ft(g,"slot",!0))){g.type!==3&&f.push(g);continue}if(u){t.onError(Se(37,y.loc));break}c=!0;const{children:x,loc:b}=g,{arg:w=re("default",!0),exp:_,loc:T}=y;let S;ht(w)?S=w?w.content:"default":s=!0;const E=ft(g,"for"),I=e(_,E,x,b);let A,N;if(A=ft(g,"if"))s=!0,a.push(Si(A.exp,Ho(w,I,p++),fl));else if(N=ft(g,/^else(-if)?$/,!0)){let O=m,P;for(;O--&&(P=r[O],P.type===3););if(P&&Wr(P)&&ft(P,/^(else-)?if$/)){let M=a[a.length-1];for(;M.alternate.type===19;)M=M.alternate;M.alternate=N.exp?Si(N.exp,Ho(w,I,p++),fl):Ho(w,I,p++)}else t.onError(Se(30,N.loc))}else if(E){s=!0;const O=E.forParseResult;O?(Lu(O),a.push(We(t.helper(na),[O.source,nr(Ri(O),Ho(w,I),!0)]))):t.onError(Se(32,E.loc))}else{if(S){if(h.has(S)){t.onError(Se(38,T));continue}h.add(S),S==="default"&&(l=!0)}i.push(ke(w,I))}}if(!u){const m=(g,y)=>{const x=e(g,void 0,y,o);return t.compatConfig&&(x.isNonScopedSlot=!0),ke("default",x)};c?f.length&&f.some(g=>Np(g))&&(l?t.onError(Se(39,f[0].loc)):i.push(m(void 0,f))):i.push(m(void 0,r))}const d=s?2:Zo(n.children)?3:1;let v=Rt(i.concat(ke("_",re(d+"",!1))),o);return a.length&&(v=We(t.helper(Tu),[v,Fn(a)])),{slots:v,hasDynamicSlots:s}}function Ho(n,t,e){const r=[ke("name",n),ke("fn",t)];return e!=null&&r.push(ke("key",re(String(e),!0))),Rt(r)}function Zo(n){for(let t=0;t<n.length;t++){const e=n[t];switch(e.type){case 1:if(e.tagType===2||Zo(e.children))return!0;break;case 9:if(Zo(e.branches))return!0;break;case 10:case 11:if(Zo(e.children))return!0;break}}return!1}function Np(n){return n.type!==2&&n.type!==12?!0:n.type===2?!!n.content.trim():Np(n.content)}const Ap=new WeakMap,kp=(n,t)=>function(){if(n=t.currentNode,!(n.type===1&&(n.tagType===0||n.tagType===1)))return;const{tag:r,props:o}=n,i=n.tagType===1;let a=i?Dp(n,t):`"${r}"`;const s=wl(a)&&a.callee===Qi;let u,c,l=0,f,h,p,d=s||a===Ar||a===ji||!i&&(r==="svg"||r==="foreignObject"||r==="math");if(o.length>0){const v=Wu(n,t,void 0,i,s);u=v.props,l=v.patchFlag,h=v.dynamicPropNames;const m=v.directives;p=m&&m.length?Fn(m.map(g=>Op(g,t))):void 0,v.shouldUseBlock&&(d=!0)}if(n.children.length>0)if(a===ao&&(d=!0,l|=1024),i&&a!==Ar&&a!==ao){const{slots:m,hasDynamicSlots:g}=Tp(n,t);c=m,g&&(l|=1024)}else if(n.children.length===1&&a!==Ar){const m=n.children[0],g=m.type,y=g===5||g===8;y&&mt(m,t)===0&&(l|=1),y||g===2?c=m:c=n.children}else c=n.children;h&&h.length&&(f=jw(h)),n.codegenNode=Br(t,a,u,c,l===0?void 0:l,f,p,!!d,!1,i,n.loc)};function Dp(n,t,e=!1){let{tag:r}=n;const o=gs(r),i=So(n,"is",!1,!0);if(i)if(o||Qn("COMPILER_IS_ON_ELEMENT",t)){let s;if(i.type===6?s=i.value&&re(i.value.content,!0):(s=i.exp,s||(s=re("is",!1,i.arg.loc))),s)return We(t.helper(Qi),[s])}else i.type===6&&i.value.content.startsWith("vue:")&&(r=i.value.content.slice(4));const a=ku(r)||t.isBuiltInComponent(r);return a?(e||t.helper(a),a):(t.helper(Ji),t.components.add(r),Vr(r,"component"))}function Wu(n,t,e=n.props,r,o,i=!1){const{tag:a,loc:s,children:u}=n;let c=[];const l=[],f=[],h=u.length>0;let p=!1,d=0,v=!1,m=!1,g=!1,y=!1,x=!1,b=!1;const w=[],_=I=>{c.length&&(l.push(Rt(hl(c),s)),c=[]),I&&l.push(I)},T=()=>{t.scopes.vFor>0&&c.push(ke(re("ref_for",!0),re("true")))},S=({key:I,value:A})=>{if(ht(I)){const N=I.content,O=_l(N);if(O&&(!r||o)&&N.toLowerCase()!=="onclick"&&N!=="onUpdate:modelValue"&&!Qu(N)&&(y=!0),O&&Qu(N)&&(b=!0),O&&A.type===14&&(A=A.arguments[0]),A.type===20||(A.type===4||A.type===8)&&mt(A,t)>0)return;N==="ref"?v=!0:N==="class"?m=!0:N==="style"?g=!0:N!=="key"&&!w.includes(N)&&w.push(N),r&&(N==="class"||N==="style")&&!w.includes(N)&&w.push(N)}else x=!0};for(let I=0;I<e.length;I++){const A=e[I];if(A.type===6){const{loc:N,name:O,nameLoc:P,value:M}=A;let V=!0;if(O==="ref"&&(v=!0,T()),O==="is"&&(gs(a)||M&&M.content.startsWith("vue:")||Qn("COMPILER_IS_ON_ELEMENT",t)))continue;c.push(ke(re(O,!0,P),re(M?M.content:"",V,M?M.loc:N)))}else{const{name:N,arg:O,exp:P,loc:M,modifiers:V}=A,U=N==="bind",W=N==="on";if(N==="slot"){r||t.onError(Se(40,M));continue}if(N==="once"||N==="memo"||N==="is"||U&&kn(O,"is")&&(gs(a)||Qn("COMPILER_IS_ON_ELEMENT",t))||W&&i)continue;if((U&&kn(O,"key")||W&&h&&kn(O,"vue:before-update"))&&(p=!0),U&&kn(O,"ref")&&T(),!O&&(U||W)){if(x=!0,P)if(U){if(T(),_(),Qn("COMPILER_V_BIND_OBJECT_ORDER",t)){l.unshift(P);continue}l.push(P)}else _({type:14,loc:M,callee:t.helper(ia),arguments:r?[P]:[P,"true"]});else t.onError(Se(U?34:35,M));continue}U&&V.some(G=>G.content==="prop")&&(d|=32);const z=t.directiveTransforms[N];if(z){const{props:G,needRuntime:X}=z(A,n,t);!i&&G.forEach(S),W&&O&&!ht(O)?_(Rt(G,s)):c.push(...G),X&&(f.push(A),bs(X)&&Ap.set(A,X))}else qp(N)||(f.push(A),h&&(p=!0))}}let E;if(l.length?(_(),l.length>1?E=We(t.helper(so),l,s):E=l[0]):c.length&&(E=Rt(hl(c),s)),x?d|=16:(m&&!r&&(d|=2),g&&!r&&(d|=4),w.length&&(d|=8),y&&(d|=32)),!p&&(d===0||d===32)&&(v||b||f.length>0)&&(d|=512),!t.inSSR&&E)switch(E.type){case 15:let I=-1,A=-1,N=!1;for(let M=0;M<E.properties.length;M++){const V=E.properties[M].key;ht(V)?V.content==="class"?I=M:V.content==="style"&&(A=M):V.isHandlerKey||(N=!0)}const O=E.properties[I],P=E.properties[A];N?E=We(t.helper(Fr),[E]):(O&&!ht(O.value)&&(O.value=We(t.helper(ra),[O.value])),P&&(g||P.value.type===4&&P.value.content.trim()[0]==="["||P.value.type===17)&&(P.value=We(t.helper(oa),[P.value])));break;case 14:break;default:E=We(t.helper(Fr),[We(t.helper(Hr),[E])]);break}return{props:E,directives:f,patchFlag:d,dynamicPropNames:w,shouldUseBlock:p}}function hl(n){const t=new Map,e=[];for(let r=0;r<n.length;r++){const o=n[r];if(o.key.type===8||!o.key.isStatic){e.push(o);continue}const i=o.key.content,a=t.get(i);a?(i==="style"||i==="class"||_l(i))&&qw(a,o):(t.set(i,o),e.push(o))}return e}function qw(n,t){n.value.type===17?n.value.elements.push(t.value):n.value=Fn([n.value,t.value],n.loc)}function Op(n,t){const e=[],r=Ap.get(n);r?e.push(t.helperString(r)):(t.helper(Zi),t.directives.add(n.name),e.push(Vr(n.name,"directive")));const{loc:o}=n;if(n.exp&&e.push(n.exp),n.arg&&(n.exp||e.push("void 0"),e.push(n.arg)),Object.keys(n.modifiers).length){n.arg||(n.exp||e.push("void 0"),e.push("void 0"));const i=re("true",!1,o);e.push(Rt(n.modifiers.map(a=>ke(a,i)),o))}return Fn(e,n.loc)}function jw(n){let t="[";for(let e=0,r=n.length;e<r;e++)t+=JSON.stringify(n[e]),e<r-1&&(t+=", ");return t+"]"}function gs(n){return n==="component"||n==="Component"}const Kw=(n,t)=>{if(co(n)){const{children:e,loc:r}=n,{slotName:o,slotProps:i}=Pp(n,t),a=[t.prefixIdentifiers?"_ctx.$slots":"$slots",o,"{}","undefined","true"];let s=2;i&&(a[2]=i,s=3),e.length&&(a[3]=nr([],e,!1,!1,r),s=4),t.scopeId&&!t.slotted&&(s=5),a.splice(s),n.codegenNode=We(t.helper(Ru),a,r)}};function Pp(n,t){let e='"default"',r;const o=[];for(let i=0;i<n.props.length;i++){const a=n.props[i];if(a.type===6)a.value&&(a.name==="name"?e=JSON.stringify(a.value.content):(a.name=Dn(a.name),o.push(a)));else if(a.name==="bind"&&kn(a.arg,"name")){if(a.exp)e=a.exp;else if(a.arg&&a.arg.type===4){const s=Dn(a.arg.content);e=a.exp=re(s,!1,a.arg.loc)}}else a.name==="bind"&&a.arg&&ht(a.arg)&&(a.arg.content=Dn(a.arg.content)),o.push(a)}if(o.length>0){const{props:i,directives:a}=Wu(n,t,o,!1,!1);r=i,a.length&&t.onError(Se(36,a[0].loc))}return{slotName:e,slotProps:r}}const Vu=(n,t,e,r)=>{const{loc:o,modifiers:i,arg:a}=n;!n.exp&&!i.length&&e.onError(Se(35,o));let s;if(a.type===4)if(a.isStatic){let f=a.content;f.startsWith("vue:")&&(f=`vnode-${f.slice(4)}`);const h=t.tagType!==0||f.startsWith("vnode")||!/[A-Z]/.test(f)?Kp(Dn(f)):`on:${f}`;s=re(h,!0,a.loc)}else s=Ot([`${e.helperString(Ci)}(`,a,")"]);else s=a,s.children.unshift(`${e.helperString(Ci)}(`),s.children.push(")");let u=n.exp;u&&!u.content.trim()&&(u=void 0);let c=e.cacheHandlers&&!u&&!e.inVOnce;if(u){const f=Du(u),h=!(f||np(u)),p=u.content.includes(";");(h||c&&f)&&(u=Ot([`${h?"$event":"(...args)"} => ${p?"{":"("}`,u,p?"}":")"]))}let l={props:[ke(s,u||re("() => {}",!1,o))]};return r&&(l=r(l)),c&&(l.props[0].value=e.cache(l.props[0].value)),l.props.forEach(f=>f.key.isHandlerKey=!0),l},$w=(n,t)=>{if(n.type===0||n.type===1||n.type===11||n.type===10)return()=>{const e=n.children;let r,o=!1;for(let i=0;i<e.length;i++){const a=e[i];if(Ko(a)){o=!0;for(let s=i+1;s<e.length;s++){const u=e[s];if(Ko(u))r||(r=e[i]=Ot([a],a.loc)),r.children.push(" + ",u),e.splice(s,1),s--;else{r=void 0;break}}}}if(!(!o||e.length===1&&(n.type===0||n.type===1&&n.tagType===0&&!n.props.find(i=>i.type===7&&!t.directiveTransforms[i.name])&&n.tag!=="template")))for(let i=0;i<e.length;i++){const a=e[i];if(Ko(a)||a.type===8){const s=[];(a.type!==2||a.content!==" ")&&s.push(a),!t.ssr&&mt(a,t)===0&&s.push("1"),e[i]={type:12,content:a,loc:a.loc,codegenNode:We(t.helper(Yi),s)}}}}},pl=new WeakSet,Yw=(n,t)=>{if(n.type===1&&ft(n,"once",!0))return pl.has(n)||t.inVOnce||t.inSSR?void 0:(pl.add(n),t.inVOnce=!0,t.helper(uo),()=>{t.inVOnce=!1;const e=t.currentNode;e.codegenNode&&(e.codegenNode=t.cache(e.codegenNode,!0,!0))})},Uu=(n,t,e)=>{const{exp:r,arg:o}=n;if(!r)return e.onError(Se(41,n.loc)),Xo();const i=r.loc.source.trim(),a=r.type===4?r.content:i,s=e.bindingMetadata[i];if(s==="props"||s==="props-aliased")return e.onError(Se(44,r.loc)),Xo();if(!a.trim()||!Du(r))return e.onError(Se(42,r.loc)),Xo();const u=o||re("modelValue",!0),c=o?ht(o)?`onUpdate:${Dn(o.content)}`:Ot(['"onUpdate:" + ',o]):"onUpdate:modelValue";let l;const f=e.isTS?"($event: any)":"$event";l=Ot([`${f} => ((`,r,") = $event)"]);const h=[ke(u,n.exp),ke(c,l)];if(n.modifiers.length&&t.tagType===1){const p=n.modifiers.map(v=>v.content).map(v=>(Co(v)?v:JSON.stringify(v))+": true").join(", "),d=o?ht(o)?`${o.content}Modifiers`:Ot([o,' + "Modifiers"']):"modelModifiers";h.push(ke(d,re(`{ ${p} }`,!1,n.loc,2)))}return Xo(h)};function Xo(n=[]){return{props:n}}const Jw=/[\w).+\-_$\]]/,Qw=(n,t)=>{Qn("COMPILER_FILTERS",t)&&(n.type===5?Ti(n.content,t):n.type===1&&n.props.forEach(e=>{e.type===7&&e.name!=="for"&&e.exp&&Ti(e.exp,t)}))};function Ti(n,t){if(n.type===4)dl(n,t);else for(let e=0;e<n.children.length;e++){const r=n.children[e];typeof r=="object"&&(r.type===4?dl(r,t):r.type===8?Ti(n,t):r.type===5&&Ti(r.content,t))}}function dl(n,t){const e=n.content;let r=!1,o=!1,i=!1,a=!1,s=0,u=0,c=0,l=0,f,h,p,d,v=[];for(p=0;p<e.length;p++)if(h=f,f=e.charCodeAt(p),r)f===39&&h!==92&&(r=!1);else if(o)f===34&&h!==92&&(o=!1);else if(i)f===96&&h!==92&&(i=!1);else if(a)f===47&&h!==92&&(a=!1);else if(f===124&&e.charCodeAt(p+1)!==124&&e.charCodeAt(p-1)!==124&&!s&&!u&&!c)d===void 0?(l=p+1,d=e.slice(0,p).trim()):m();else{switch(f){case 34:o=!0;break;case 39:r=!0;break;case 96:i=!0;break;case 40:c++;break;case 41:c--;break;case 91:u++;break;case 93:u--;break;case 123:s++;break;case 125:s--;break}if(f===47){let g=p-1,y;for(;g>=0&&(y=e.charAt(g),y===" ");g--);(!y||!Jw.test(y))&&(a=!0)}}d===void 0?d=e.slice(0,p).trim():l!==0&&m();function m(){v.push(e.slice(l,p).trim()),l=p+1}if(v.length){for(p=0;p<v.length;p++)d=Zw(d,v[p],t);n.content=d,n.ast=void 0}}function Zw(n,t,e){e.helper(ea);const r=t.indexOf("(");if(r<0)return e.filters.add(t),`${Vr(t,"filter")}(${n})`;{const o=t.slice(0,r),i=t.slice(r+1);return e.filters.add(o),`${Vr(o,"filter")}(${n}${i!==")"?","+i:i}`}}const vl=new WeakSet,e2=(n,t)=>{if(n.type===1){const e=ft(n,"memo");return!e||vl.has(n)?void 0:(vl.add(n),()=>{const r=n.codegenNode||t.currentNode.codegenNode;r&&r.type===13&&(n.tagType!==1&&ua(r,t),n.codegenNode=We(t.helper(sa),[e.exp,nr(void 0,r),"_cache",String(t.cached.length)]),t.cached.push(null))})}};function Mp(n){return[[Yw,Vw,e2,zw,Qw,Kw,kp,Rp,$w],{on:Vu,bind:Cp,model:Uu}]}function Fp(n,t={}){const e=t.onError||Au,r=t.mode==="module";t.prefixIdentifiers===!0?e(Se(47)):r&&e(Se(48));const o=!1;t.cacheHandlers&&e(Se(49)),t.scopeId&&!r&&e(Se(50));const i=vn({},t,{prefixIdentifiers:o}),a=ze(n)?Mu(n,i):n,[s,u]=Mp();return gp(a,vn({},i,{nodeTransforms:[...s,...t.nodeTransforms||[]],directiveTransforms:vn({},u,t.directiveTransforms||{})})),bp(a,i)}const t2={DATA:"data",PROPS:"props",PROPS_ALIASED:"props-aliased",SETUP_LET:"setup-let",SETUP_CONST:"setup-const",SETUP_REACTIVE_CONST:"setup-reactive-const",SETUP_MAYBE_REF:"setup-maybe-ref",SETUP_REF:"setup-ref",OPTIONS:"options",LITERAL_CONST:"literal-const"},Bp=()=>({props:[]});/**
* @vue/compiler-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const zu=Symbol(""),Gu=Symbol(""),Hu=Symbol(""),Xu=Symbol(""),Ni=Symbol(""),qu=Symbol(""),ju=Symbol(""),Ku=Symbol(""),$u=Symbol(""),Yu=Symbol("");Xh({[zu]:"vModelRadio",[Gu]:"vModelCheckbox",[Hu]:"vModelText",[Xu]:"vModelSelect",[Ni]:"vModelDynamic",[qu]:"withModifiers",[ju]:"withKeys",[Ku]:"vShow",[$u]:"Transition",[Yu]:"TransitionGroup"});let gr;function n2(n,t=!1){return gr||(gr=document.createElement("div")),t?(gr.innerHTML=`<div foo="${n.replace(/"/g,"&quot;")}">`,gr.children[0].getAttribute("foo")):(gr.innerHTML=n,gr.textContent)}const Ju={parseMode:"html",isVoidTag:Qp,isNativeTag:n=>$p(n)||Yp(n)||Jp(n),isPreTag:n=>n==="pre",isIgnoreNewlineTag:n=>n==="pre"||n==="textarea",decodeEntities:n2,isBuiltInComponent:n=>{if(n==="Transition"||n==="transition")return $u;if(n==="TransitionGroup"||n==="transition-group")return Yu},getNamespace(n,t,e){let r=t?t.ns:e;if(t&&r===2)if(t.tag==="annotation-xml"){if(n==="svg")return 1;t.props.some(o=>o.type===6&&o.name==="encoding"&&o.value!=null&&(o.value.content==="text/html"||o.value.content==="application/xhtml+xml"))&&(r=0)}else/^m(?:[ions]|text)$/.test(t.tag)&&n!=="mglyph"&&n!=="malignmark"&&(r=0);else t&&r===1&&(t.tag==="foreignObject"||t.tag==="desc"||t.tag==="title")&&(r=0);if(r===0){if(n==="svg")return 1;if(n==="math")return 2}return r}},Lp=n=>{n.type===1&&n.props.forEach((t,e)=>{t.type===6&&t.name==="style"&&t.value&&(n.props[e]={type:7,name:"bind",arg:re("style",!0,t.loc),exp:r2(t.value.content,t.loc),modifiers:[],loc:t.loc})})},r2=(n,t)=>{const e=Zp(n);return re(JSON.stringify(e),!1,t,3)};function gn(n,t){return Se(n,t)}const o2={X_V_HTML_NO_EXPRESSION:53,53:"X_V_HTML_NO_EXPRESSION",X_V_HTML_WITH_CHILDREN:54,54:"X_V_HTML_WITH_CHILDREN",X_V_TEXT_NO_EXPRESSION:55,55:"X_V_TEXT_NO_EXPRESSION",X_V_TEXT_WITH_CHILDREN:56,56:"X_V_TEXT_WITH_CHILDREN",X_V_MODEL_ON_INVALID_ELEMENT:57,57:"X_V_MODEL_ON_INVALID_ELEMENT",X_V_MODEL_ARG_ON_ELEMENT:58,58:"X_V_MODEL_ARG_ON_ELEMENT",X_V_MODEL_ON_FILE_INPUT_ELEMENT:59,59:"X_V_MODEL_ON_FILE_INPUT_ELEMENT",X_V_MODEL_UNNECESSARY_VALUE:60,60:"X_V_MODEL_UNNECESSARY_VALUE",X_V_SHOW_NO_EXPRESSION:61,61:"X_V_SHOW_NO_EXPRESSION",X_TRANSITION_INVALID_CHILDREN:62,62:"X_TRANSITION_INVALID_CHILDREN",X_IGNORED_SIDE_EFFECT_TAG:63,63:"X_IGNORED_SIDE_EFFECT_TAG",__EXTEND_POINT__:64,64:"__EXTEND_POINT__"},i2={53:"v-html is missing expression.",54:"v-html will override element children.",55:"v-text is missing expression.",56:"v-text will override element children.",57:"v-model can only be used on <input>, <textarea> and <select> elements.",58:"v-model argument is not supported on plain elements.",59:"v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",60:"Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",61:"v-show is missing expression.",62:"<Transition> expects exactly one child element or component.",63:"Tags with side effect (<script> and <style>) are ignored in client component templates."},a2=(n,t,e)=>{const{exp:r,loc:o}=n;return r||e.onError(gn(53,o)),t.children.length&&(e.onError(gn(54,o)),t.children.length=0),{props:[ke(re("innerHTML",!0,o),r||re("",!0))]}},s2=(n,t,e)=>{const{exp:r,loc:o}=n;return r||e.onError(gn(55,o)),t.children.length&&(e.onError(gn(56,o)),t.children.length=0),{props:[ke(re("textContent",!0),r?mt(r,e)>0?r:We(e.helperString(Eo),[r],o):re("",!0))]}},u2=(n,t,e)=>{const r=Uu(n,t,e);if(!r.props.length||t.tagType===1)return r;n.arg&&e.onError(gn(58,n.arg.loc));const{tag:o}=t,i=e.isCustomElement(o);if(o==="input"||o==="textarea"||o==="select"||i){let a=Hu,s=!1;if(o==="input"||i){const u=So(t,"type");if(u){if(u.type===7)a=Ni;else if(u.value)switch(u.value.content){case"radio":a=zu;break;case"checkbox":a=Gu;break;case"file":s=!0,e.onError(gn(59,n.loc));break}}else op(t)&&(a=Ni)}else o==="select"&&(a=Xu);s||(r.needRuntime=e.helper(a))}else e.onError(gn(57,n.loc));return r.props=r.props.filter(a=>!(a.key.type===4&&a.key.content==="modelValue")),r},c2=Ai("passive,once,capture"),l2=Ai("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),f2=Ai("left,right"),Wp=Ai("onkeyup,onkeydown,onkeypress"),h2=(n,t,e,r)=>{const o=[],i=[],a=[];for(let s=0;s<t.length;s++){const u=t[s].content;u==="native"&&Lr("COMPILER_V_ON_NATIVE",e)||c2(u)?a.push(u):f2(u)?ht(n)?Wp(n.content.toLowerCase())?o.push(u):i.push(u):(o.push(u),i.push(u)):l2(u)?i.push(u):o.push(u)}return{keyModifiers:o,nonKeyModifiers:i,eventOptionModifiers:a}},ml=(n,t)=>ht(n)&&n.content.toLowerCase()==="onclick"?re(t,!0):n.type!==4?Ot(["(",n,`) === "onClick" ? "${t}" : (`,n,")"]):n,p2=(n,t,e)=>Vu(n,t,e,r=>{const{modifiers:o}=n;if(!o.length)return r;let{key:i,value:a}=r.props[0];const{keyModifiers:s,nonKeyModifiers:u,eventOptionModifiers:c}=h2(i,o,e,n.loc);if(u.includes("right")&&(i=ml(i,"onContextmenu")),u.includes("middle")&&(i=ml(i,"onMouseup")),u.length&&(a=We(e.helper(qu),[a,JSON.stringify(u)])),s.length&&(!ht(i)||Wp(i.content.toLowerCase()))&&(a=We(e.helper(ju),[a,JSON.stringify(s)])),c.length){const l=c.map(xl).join("");i=ht(i)?re(`${i.content}${l}`,!0):Ot(["(",i,`) + "${l}"`])}return{props:[ke(i,a)]}}),d2=(n,t,e)=>{const{exp:r,loc:o}=n;return r||e.onError(gn(61,o)),{props:[],needRuntime:e.helper(Ku)}},v2=(n,t)=>{n.type===1&&n.tagType===0&&(n.tag==="script"||n.tag==="style")&&t.removeNode()},Vp=[Lp],Up={cloak:Bp,html:a2,text:s2,model:u2,on:p2,show:d2};function m2(n,t={}){return Fp(n,vn({},Ju,t,{nodeTransforms:[v2,...Vp,...t.nodeTransforms||[]],directiveTransforms:vn({},Up,t.directiveTransforms||{}),transformHoist:null}))}function g2(n,t={}){return Mu(n,vn({},Ju,t))}const y2=Object.freeze(Object.defineProperty({__proto__:null,BASE_TRANSITION:Eu,BindingTypes:t2,CAMELIZE:Ei,CAPITALIZE:Vh,CREATE_BLOCK:Cu,CREATE_COMMENT:Gr,CREATE_ELEMENT_BLOCK:Su,CREATE_ELEMENT_VNODE:$i,CREATE_SLOTS:Tu,CREATE_STATIC:Iu,CREATE_TEXT:Yi,CREATE_VNODE:Ki,CompilerDeprecationTypes:Bx,ConstantTypes:Nx,DOMDirectiveTransforms:Up,DOMErrorCodes:o2,DOMErrorMessages:i2,DOMNodeTransforms:Vp,ElementTypes:Tx,ErrorCodes:Vx,FRAGMENT:Mr,GUARD_REACTIVE_PROPS:Hr,IS_MEMO_SAME:Nu,IS_REF:Hh,KEEP_ALIVE:ao,MERGE_PROPS:so,NORMALIZE_CLASS:ra,NORMALIZE_PROPS:Fr,NORMALIZE_STYLE:oa,Namespaces:Ix,NodeTypes:Rx,OPEN_BLOCK:Wn,POP_SCOPE_ID:zh,PUSH_SCOPE_ID:Uh,RENDER_LIST:na,RENDER_SLOT:Ru,RESOLVE_COMPONENT:Ji,RESOLVE_DIRECTIVE:Zi,RESOLVE_DYNAMIC_COMPONENT:Qi,RESOLVE_FILTER:ea,SET_BLOCK_TRACKING:uo,SUSPENSE:ji,TELEPORT:Ar,TO_DISPLAY_STRING:Eo,TO_HANDLERS:ia,TO_HANDLER_KEY:Ci,TRANSITION:$u,TRANSITION_GROUP:Yu,TS_NODE_TYPES:Jh,UNREF:Gh,V_MODEL_CHECKBOX:Gu,V_MODEL_DYNAMIC:Ni,V_MODEL_RADIO:zu,V_MODEL_SELECT:Xu,V_MODEL_TEXT:Hu,V_ON_WITH_KEYS:ju,V_ON_WITH_MODIFIERS:qu,V_SHOW:Ku,WITH_CTX:aa,WITH_DIRECTIVES:ta,WITH_MEMO:sa,advancePositionWithClone:iw,advancePositionWithMutation:rp,assert:aw,baseCompile:Fp,baseParse:Mu,buildDirectiveArgs:Op,buildProps:Wu,buildSlots:Tp,checkCompatEnabled:Lr,compile:m2,convertToBlock:ua,createArrayExpression:Fn,createAssignmentExpression:Ox,createBlockStatement:Kh,createCacheExpression:jh,createCallExpression:We,createCompilerError:Se,createCompoundExpression:Ot,createConditionalExpression:Si,createDOMCompilerError:gn,createForLoopParams:Ri,createFunctionExpression:nr,createIfStatement:Dx,createInterpolation:Ax,createObjectExpression:Rt,createObjectProperty:ke,createReturnStatement:Mx,createRoot:qh,createSequenceExpression:Px,createSimpleExpression:re,createStructuralDirectiveTransform:Fu,createTemplateLiteral:kx,createTransformContext:mp,createVNodeCall:Br,errorMessages:Ux,extractIdentifiers:dn,findDir:ft,findProp:So,forAliasRE:sp,generate:bp,generateCodeFrame:ed,getBaseTransformPreset:Mp,getConstantType:mt,getMemoedVNodeCall:ap,getVNodeBlockHelper:or,getVNodeHelper:rr,hasDynamicKeyVBind:op,hasScopeRef:Mt,helperNameMap:tr,injectProp:lo,isCoreComponent:ku,isFnExpression:np,isFnExpressionBrowser:tp,isFnExpressionNode:ow,isFunctionType:Yx,isInDestructureAssignment:Hx,isInNewExpression:Xx,isMemberExpression:Du,isMemberExpressionBrowser:ep,isMemberExpressionNode:nw,isReferencedIdentifier:Gx,isSimpleIdentifier:Co,isSlotOutlet:co,isStaticArgOf:kn,isStaticExp:ht,isStaticProperty:Yh,isStaticPropertyKey:Jx,isTemplateNode:Wr,isText:Ko,isVSlot:Ou,locStub:Ke,noopDirectiveTransform:Bp,parse:g2,parserOptions:Ju,processExpression:Qo,processFor:Ip,processIf:Ep,processSlotOutlet:Pp,registerRuntimeHelpers:Xh,resolveComponentType:Dp,stringifyExpression:_p,toValidAssetId:Vr,trackSlotScopes:Rp,trackVForSlotScopes:Hw,transform:gp,transformBind:Cp,transformElement:kp,transformExpression:Ww,transformModel:Uu,transformOn:Vu,transformStyle:Lp,traverseNode:Io,unwrapTSNode:Qh,walkBlockDeclarations:jx,walkFunctionParams:qx,walkIdentifiers:zx,warnDeprecation:Wx},Symbol.toStringTag,{value:"Module"})),b2=ys(y2),x2=ys(td),w2=ys(nd);/**
* vue v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/var gl;function _2(){return gl||(gl=1,function(n){Object.defineProperty(n,"__esModule",{value:!0});var t=b2,e=x2,r=w2;function o(u){var c=Object.create(null);if(u)for(var l in u)c[l]=u[l];return c.default=u,Object.freeze(c)}var i=o(e);const a=Object.create(null);function s(u,c){if(!r.isString(u))if(u.nodeType)u=u.innerHTML;else return r.NOOP;const l=r.genCacheKey(u,c),f=a[l];if(f)return f;if(u[0]==="#"){const v=document.querySelector(u);u=v?v.innerHTML:""}const h=r.extend({hoistStatic:!0,onError:void 0,onWarn:r.NOOP},c);!h.isCustomElement&&typeof customElements<"u"&&(h.isCustomElement=v=>!!customElements.get(v));const{code:p}=t.compile(u,h),d=new Function("Vue",p)(i);return d._rc=!0,a[l]=d}e.registerRuntimeCompiler(s),n.compile=s,Object.keys(e).forEach(function(u){u!=="default"&&!Object.prototype.hasOwnProperty.call(n,u)&&(n[u]=e[u])})}(Ga)),Ga}var yl;function E2(){return yl||(yl=1,za.exports=_2()),za.exports}var C2=jo.exports,bl;function S2(){return bl||(bl=1,function(n,t){(function(e,r){n.exports=r(E2())})(C2,function(e){/*! *****************************************************************************
		    Copyright (c) Microsoft Corporation.

		    Permission to use, copy, modify, and/or distribute this software for any
		    purpose with or without fee is hereby granted.

		    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
		    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
		    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
		    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
		    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
		    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
		    PERFORMANCE OF THIS SOFTWARE.
		    ***************************************************************************** */function r(p,d,v,m){function g(y){return y instanceof v?y:new v(function(x){x(y)})}return new(v||(v=Promise))(function(y,x){function b(T){try{_(m.next(T))}catch(S){x(S)}}function w(T){try{_(m.throw(T))}catch(S){x(S)}}function _(T){T.done?y(T.value):g(T.value).then(b,w)}_((m=m.apply(p,[])).next())})}function o(p,d){var v={label:0,sent:function(){if(y[0]&1)throw y[1];return y[1]},trys:[],ops:[]},m,g,y,x;return x={next:b(0),throw:b(1),return:b(2)},typeof Symbol=="function"&&(x[Symbol.iterator]=function(){return this}),x;function b(_){return function(T){return w([_,T])}}function w(_){if(m)throw new TypeError("Generator is already executing.");for(;v;)try{if(m=1,g&&(y=_[0]&2?g.return:_[0]?g.throw||((y=g.return)&&y.call(g),0):g.next)&&!(y=y.call(g,_[1])).done)return y;switch(g=0,y&&(_=[_[0]&2,y.value]),_[0]){case 0:case 1:y=_;break;case 4:return v.label++,{value:_[1],done:!1};case 5:v.label++,g=_[1],_=[0];continue;case 7:_=v.ops.pop(),v.trys.pop();continue;default:if(y=v.trys,!(y=y.length>0&&y[y.length-1])&&(_[0]===6||_[0]===2)){v=0;continue}if(_[0]===3&&(!y||_[1]>y[0]&&_[1]<y[3])){v.label=_[1];break}if(_[0]===6&&v.label<y[1]){v.label=y[1],y=_;break}if(y&&v.label<y[2]){v.label=y[2],v.ops.push(_);break}y[2]&&v.ops.pop(),v.trys.pop();continue}_=d.call(p,v)}catch(T){_=[6,T],g=0}finally{m=y=0}if(_[0]&5)throw _[1];return{value:_[0]?_[1]:void 0,done:!0}}}var i=e.defineComponent({name:"Camera",components:{},emits:["loading","started","stopped","paused","resumed","camera-change","snapshot","error"],props:{resolution:{type:Object,default:function(){return{width:1920,height:1080}}},facingMode:{type:String,default:"environment"},autoplay:{type:Boolean,default:!0},playsinline:{type:Boolean,default:!0},constraints:{type:Object,required:!1}},setup:function(p,d){var v=this,m=d.emit;e.onMounted(function(){if(!navigator.mediaDevices)throw new Error("Media devices not available");var O=document.getElementById("video");p.playsinline&&O&&O.setAttribute("playsinline",""),p.autoplay&&T()}),e.onUnmounted(function(){return N()});var g=e.ref(),y=e.ref(),x=e.ref(),b=p.constraints||{video:{width:p.resolution.width,height:p.resolution.height,facingMode:p.facingMode,deviceId:{}},audio:!1},w=function(O){return O===void 0&&(O=["audioinput","videoinput"]),r(v,void 0,void 0,function(){var P;return o(this,function(M){switch(M.label){case 0:return[4,navigator.mediaDevices.enumerateDevices()];case 1:return P=M.sent(),[2,P.filter(function(V){return O.includes(V.kind)})]}})})},_=function(){if(x.value){var O=x.value.getVideoTracks().map(function(P){return P.getSettings().deviceId});if(O.length>0)return O[0]}},T=function(){return r(v,void 0,void 0,function(){var O,P;return o(this,function(M){switch(M.label){case 0:m("loading"),M.label=1;case 1:return M.trys.push([1,3,,4]),O=x,[4,navigator.mediaDevices.getUserMedia(b)];case 2:if(O.value=M.sent(),!g.value)throw new Error("Video ref is null");return g.value.srcObject=x.value,m("started"),[3,4];case 3:return P=M.sent(),m("error",P),[3,4];case 4:return[2]}})})},S=function(O,P,M){var V;if(O===void 0&&(O=p.resolution),P===void 0&&(P="image/png"),!g.value)throw new Error("Video ref is null");if(!y.value)throw new Error("Canvas ref is null");var U=O.width,W=O.height;return y.value.width=U,y.value.height=W,(V=y.value.getContext("2d"))===null||V===void 0||V.drawImage(g.value,0,0,U,W),new Promise(function(z){var G;(G=y.value)===null||G===void 0||G.toBlob(function(X){m("snapshot",X),z(X)},P,M)})},E=function(O){return r(v,void 0,void 0,function(){return o(this,function(P){switch(P.label){case 0:return N(),b.video.deviceId.exact=O,[4,T()];case 1:return P.sent(),m("camera-change",O),[2]}})})},I=function(){var O;(O=g.value)===null||O===void 0||O.play(),m("resumed")},A=function(){var O;(O=g.value)===null||O===void 0||O.pause(),m("paused")},N=function(){var O;(O=x.value)===null||O===void 0||O.getTracks().forEach(function(P){return P.stop()}),m("stopped")};return{start:T,stop:N,video:g,snapshot:S,canvas:y,devices:w,currentDeviceID:_,pause:A,resume:I,changeCamera:E,stream:x}}});const a={id:"camera-container"},s={autoplay:"",ref:"video",id:"video"},u={id:"slot-container"},c={ref:"canvas",id:"canvas"};function l(p,d,v,m,g,y){return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("div",a,[e.createElementVNode("video",s,null,512),e.createElementVNode("div",u,[e.renderSlot(p.$slots,"default")])]),e.createElementVNode("canvas",c,null,512)],64)}function f(p,d){d===void 0&&(d={});var v=d.insertAt;if(!(typeof document>"u")){var m=document.head||document.getElementsByTagName("head")[0],g=document.createElement("style");g.type="text/css",v==="top"&&m.firstChild?m.insertBefore(g,m.firstChild):m.appendChild(g),g.styleSheet?g.styleSheet.cssText=p:g.appendChild(document.createTextNode(p))}}var h=`
#camera-container[data-v-74104ed5] {
    position: relative;
    width: 100%;
    height: 100%;
}
#slot-container[data-v-74104ed5] {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}
#video[data-v-74104ed5] {
    width: 100%;
    height: 100%;
}
#canvas[data-v-74104ed5] {
    display: none;
}
`;return f(h),i.render=l,i.__scopeId="data-v-74104ed5",i.__file="src/components/Camera.vue",i})}(jo)),jo.exports}var I2=S2();const A2=Xp(I2);export{A2 as S,N2 as d,Dt as n};
