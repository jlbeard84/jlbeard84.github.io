let t;function e(t,e){return Object.keys(e).forEach(function(i){"default"===i||"__esModule"===i||Object.prototype.hasOwnProperty.call(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[i]}})}),t}function i(t,e,i,o){Object.defineProperty(t,e,{get:i,set:o,enumerable:!0,configurable:!0})}var o,r,s=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),u=t=>{throw TypeError(t)},f=(t,e,i)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,m=(t,e)=>{for(var i in e||(e={}))c.call(e,i)&&f(t,i,e[i]);if(d)for(var i of d(e))h.call(e,i)&&f(t,i,e[i]);return t},b=(t,e)=>a(t,n(e)),g=(t,e,i,o)=>{for(var r,a=o>1?void 0:o?l(e,i):e,n=t.length-1;n>=0;n--)(r=t[n])&&(a=(o?r(e,i,a):r(a))||a);return o&&a&&s(e,i,a),a},v=(t,e,i)=>e.has(t)||u("Cannot "+i),y=function(t,e){this[0]=t,this[1]=e},w=new WeakMap,_=new WeakMap,x=new WeakMap,k=new WeakSet,C=new WeakMap,$=class{constructor(t,e){this.handleFormData=t=>{let e=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),r="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!e&&!r&&"string"==typeof i&&i.length>0&&void 0!==o&&(Array.isArray(o)?o.forEach(e=>{t.formData.append(i,e.toString())}):t.formData.append(i,o.toString()))},this.handleFormSubmit=t=>{var e;let i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=w.get(this.form))||e.forEach(t=>{this.setUserInteracted(t,!0)})),!this.form||this.form.noValidate||i||o(this.host)||(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),C.set(this.host,[])},this.handleInteraction=t=>{let e=C.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let t of this.form.querySelectorAll("*"))if("function"==typeof t.checkValidity&&!t.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let t of this.form.querySelectorAll("*"))if("function"==typeof t.reportValidity&&!t.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=m({form:t=>{let e=t.form;if(e){let i=t.getRootNode().querySelector(`#${e}`);if(i)return i}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e)}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),C.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),C.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,w.has(this.form)?w.get(this.form).add(this.host):w.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),_.has(this.form)||(_.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),x.has(this.form)||(x.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let t=w.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),_.has(this.form)&&(this.form.reportValidity=_.get(this.form),_.delete(this.form)),x.has(this.form)&&(this.form.checkValidity=x.get(this.form),x.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?k.add(t):k.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){let i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(t=>{e.hasAttribute(t)&&i.setAttribute(t,e.getAttribute(t))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let e=this.host,i=!!k.has(e),o=!!e.required;e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}},z=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),S=Object.freeze(b(m({},z),{valid:!1,valueMissing:!0})),A=Object.freeze(b(m({},z),{valid:!1,customError:!0}));const E=globalThis,T=E.ShadowRoot&&(void 0===E.ShadyCSS||E.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),L=new WeakMap;class I{constructor(t,e,i){if(this._$cssResult$=!0,i!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(T&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=L.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&L.set(e,t))}return t}toString(){return this.cssText}}const O=(t,...e)=>new I(1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]),t,D),M=T?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e,i="";for(let e of t.cssRules)i+=e.cssText;return new I("string"==typeof(e=i)?e:e+"",void 0,D)})(t):t,{is:P,defineProperty:F,getOwnPropertyDescriptor:V,getOwnPropertyNames:R,getOwnPropertySymbols:B,getPrototypeOf:H}=Object,N=globalThis,U=N.trustedTypes,q=U?U.emptyScript:"",j=N.reactiveElementPolyfillSupport,W={toAttribute(t,e){switch(e){case Boolean:t=t?q:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},K=(t,e)=>!P(t,e),X={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:K};Symbol.metadata??=Symbol("metadata"),N.litPropertyMetadata??=new WeakMap;class Y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=X){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&F(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){let{get:o,set:r}=V(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){let s=o?.call(this);r?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??X}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let t=H(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let t=this.properties;for(let e of[...R(t),...B(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(M(i));else void 0!==t&&e.push(M(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(T)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let i of e){let e=document.createElement("style"),o=E.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){let r=(void 0!==i.converter?.toAttribute?i.converter:W).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){let t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:W;this._$Em=o;let s=r.fromAttribute(e,t.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){let o=this.constructor,r=this[t];if(!(((i??=o.getPropertyOptions(t)).hasChanged??K)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:r},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==r||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t){let{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y.elementProperties=new Map,Y.finalized=new Map,j?.({ReactiveElement:Y}),(N.reactiveElementVersions??=[]).push("2.1.1");const G=globalThis,Q=G.trustedTypes,Z=Q?Q.createPolicy("lit-html",{createHTML:t=>t}):void 0,J="$lit$",tt=`lit$${Math.random().toFixed(9).slice(2)}$`,te="?"+tt,ti=`<${te}>`,to=document,tr=()=>to.createComment(""),ts=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ta=Array.isArray,tl=t=>ta(t)||"function"==typeof t?.[Symbol.iterator],tn="[ 	\n\f\r]",td=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tc=/-->/g,th=/>/g,tp=RegExp(`>|${tn}(?:([^\\s"'>=/]+)(${tn}*=${tn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tu=/'/g,tf=/"/g,tm=/^(?:script|style|textarea|title)$/i,tb=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),tg=tb(1),tv=tb(2),ty=tb(3),tw=Symbol.for("lit-noChange"),t_=Symbol.for("lit-nothing"),tx=new WeakMap,tk=to.createTreeWalker(to,129);function tC(t,e){if(!ta(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Z?Z.createHTML(e):e}const t$=(t,e)=>{let i=t.length-1,o=[],r,s=2===e?"<svg>":3===e?"<math>":"",a=td;for(let e=0;e<i;e++){let i=t[e],l,n,d=-1,c=0;for(;c<i.length&&(a.lastIndex=c,null!==(n=a.exec(i)));)c=a.lastIndex,a===td?"!--"===n[1]?a=tc:void 0!==n[1]?a=th:void 0!==n[2]?(tm.test(n[2])&&(r=RegExp("</"+n[2],"g")),a=tp):void 0!==n[3]&&(a=tp):a===tp?">"===n[0]?(a=r??td,d=-1):void 0===n[1]?d=-2:(d=a.lastIndex-n[2].length,l=n[1],a=void 0===n[3]?tp:'"'===n[3]?tf:tu):a===tf||a===tu?a=tp:a===tc||a===th?a=td:(a=tp,r=void 0);let h=a===tp&&t[e+1].startsWith("/>")?" ":"";s+=a===td?i+ti:d>=0?(o.push(l),i.slice(0,d)+J+i.slice(d)+tt+h):i+tt+(-2===d?e:h)}return[tC(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class tz{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,s=0,a=t.length-1,l=this.parts,[n,d]=t$(t,e);if(this.el=tz.createElement(n,i),tk.currentNode=this.el.content,2===e||3===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=tk.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(let t of o.getAttributeNames())if(t.endsWith(J)){let e=d[s++],i=o.getAttribute(t).split(tt),a=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?tD:"?"===a[1]?tL:"@"===a[1]?tI:tT}),o.removeAttribute(t)}else t.startsWith(tt)&&(l.push({type:6,index:r}),o.removeAttribute(t));if(tm.test(o.tagName)){let t=o.textContent.split(tt),e=t.length-1;if(e>0){o.textContent=Q?Q.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],tr()),tk.nextNode(),l.push({type:2,index:++r});o.append(t[e],tr())}}}else if(8===o.nodeType)if(o.data===te)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(tt,t+1));)l.push({type:7,index:r}),t+=tt.length-1}r++}}static createElement(t,e){let i=to.createElement("template");return i.innerHTML=t,i}}function tS(t,e,i=t,o){if(e===tw)return e;let r=void 0!==o?i._$Co?.[o]:i._$Cl,s=ts(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(t))._$AT(t,i,o),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(e=tS(t,r._$AS(t,e.values),r,o)),e}class tA{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??to).importNode(e,!0);tk.currentNode=o;let r=tk.nextNode(),s=0,a=0,l=i[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new tE(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new tO(r,this,t)),this._$AV.push(e),l=i[++a]}s!==l?.index&&(r=tk.nextNode(),s++)}return tk.currentNode=to,o}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tE{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=t_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){ts(t=tS(this,t,e))?t===t_||null==t||""===t?(this._$AH!==t_&&this._$AR(),this._$AH=t_):t!==this._$AH&&t!==tw&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):tl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==t_&&ts(this._$AH)?this._$AA.nextSibling.data=t:this.T(to.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=tz.createElement(tC(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{let t=new tA(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=tx.get(t.strings);return void 0===e&&tx.set(t.strings,e=new tz(t)),e}k(t){ta(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let r of t)o===e.length?e.push(i=new tE(this.O(tr()),this.O(tr()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tT{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,r){this.type=1,this._$AH=t_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=t_}_$AI(t,e=this,i,o){let r=this.strings,s=!1;if(void 0===r)(s=!ts(t=tS(this,t,e,0))||t!==this._$AH&&t!==tw)&&(this._$AH=t);else{let o,a,l=t;for(t=r[0],o=0;o<r.length-1;o++)(a=tS(this,l[i+o],e,o))===tw&&(a=this._$AH[o]),s||=!ts(a)||a!==this._$AH[o],a===t_?t=t_:t!==t_&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}s&&!o&&this.j(t)}j(t){t===t_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tD extends tT{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===t_?void 0:t}}class tL extends tT{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==t_)}}class tI extends tT{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){if((t=tS(this,t,e,0)??t_)===tw)return;let i=this._$AH,o=t===t_&&i!==t_||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==t_&&(i===t_||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class tO{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tS(this,t)}}const tM=G.litHtmlPolyfillSupport;tM?.(tz,tE),(G.litHtmlVersions??=[]).push("3.3.1");const tP=globalThis;class tF extends Y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{let o=i?.renderBefore??e,r=o._$litPart$;if(void 0===r){let t=i?.renderBefore??null;o._$litPart$=r=new tE(e.insertBefore(tr(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tw}}tF._$litElement$=!0,tF.finalized=!0,tP.litElementHydrateSupport?.({LitElement:tF});const tV=tP.litElementPolyfillSupport;tV?.({LitElement:tF}),(tP.litElementVersions??=[]).push("4.2.1");var tR=O`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,tB=O`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,tH=(t="value")=>(e,i)=>{let o=e.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(e,s,a){var l;let n=o.getPropertyOptions(t);if(e===("string"==typeof n.attribute?n.attribute:t)){let e=n.converter||W,o=("function"==typeof e?e:null!=(l=null==e?void 0:e.fromAttribute)?l:W.fromAttribute)(a,n.type);this[t]!==o&&(this[i]=o)}r.call(this,e,s,a)}},tN=O`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,tU=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{let e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},tq="",tj={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},tW=[{name:"default",resolver:t=>(function(t=""){if(!tq){let t=[...document.getElementsByTagName("script")],e=t.find(t=>t.hasAttribute("data-shoelace"));if(e)tq=e.getAttribute("data-shoelace");else{let e=t.find(t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src)),i="";e&&(i=e.getAttribute("src")),tq=i.split("/").slice(0,-1).join("/")}}return tq.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")})(`assets/icons/${t}.svg`)},{name:"system",resolver:t=>t in tj?`data:image/svg+xml,${encodeURIComponent(tj[t])}`:""}],tK=[];function tX(t){return tW.find(e=>e.name===t)}var tY=O`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function tG(t,e){let i=m({waitUntilFirstUpdate:!1},e);return(e,o)=>{let{update:r}=e,s=Array.isArray(t)?t:[t];e.update=function(t){s.forEach(e=>{if(t.has(e)){let r=t.get(e),s=this[e];r!==s&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](r,s)}}),r.call(this,t)}}}var tQ=O`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;const tZ={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:K};function tJ(t){return(e,i)=>"object"==typeof i?((t=tZ,e,i)=>{let{kind:o,metadata:r}=i,s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===o){let{name:o}=i;return{set(i){let r=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,r,t)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){let{name:o}=i;return function(i){let r=this[o];e.call(this,i),this.requestUpdate(o,r,t)}}throw Error("Unsupported decorator location: "+o)})(t,e,i):((t,e,i)=>{let o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function t0(t){return tJ({...t,state:!0,attribute:!1})}function t1(t){return(e,i)=>{Object.assign("function"==typeof e?e:e[i],t)}}const t2=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function t5(t,e){return(i,o,r)=>{let s=e=>e.renderRoot?.querySelector(t)??null;if(e){let{get:t,set:e}="object"==typeof o?i:r??(()=>{let t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return t2(i,o,{get(){let i=t.call(this);return void 0===i&&(null!==(i=s(this))||this.hasUpdated)&&e.call(this,i),i}})}return t2(i,o,{get(){return s(this)}})}}var t3=class extends tF{constructor(){let t;super(),(t=o).has(this)?u("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(this):t.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let i=new CustomEvent(t,m({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){let o=customElements.get(t);if(!o){try{customElements.define(t,e,i)}catch(o){customElements.define(t,class extends e{},i)}return}let r=" (unknown version)",s=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in o&&o.version&&(s=" v"+o.version),r&&s&&r===s||console.warn(`Attempted to register <${t}>${r}, but <${t}>${s} has already been registered.`)}attributeChangedCallback(t,e,i){let r,s;if(v(this,r=o,"read from private field"),s?!s.call(this):!r.get(this)){let t,e;this.constructor.elementProperties.forEach((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])}),v(this,t=o,"write to private field"),e?e.call(this,!0):t.set(this,!0)}super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&null==this[i]&&(this[i]=e)})}};o=new WeakMap,t3.version="2.20.1",t3.dependencies={},g([tJ()],t3.prototype,"dir",2),g([tJ()],t3.prototype,"lang",2);const{I:t6}={M:J,P:tt,A:te,C:1,L:t$,R:tA,D:tl,V:tS,I:tE,H:tT,N:tL,U:tI,B:tD,F:tO},t4={};var t7=Symbol(),t8=Symbol(),t9=new Map,et=class extends t3{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let o;if(null==e?void 0:e.spriteSheet)return this.svg=tg`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(!(o=await fetch(t,{mode:"cors"})).ok)return 410===o.status?t7:t8}catch(t){return t8}try{let t=document.createElement("div");t.innerHTML=await o.text();let e=t.firstElementChild;if((null==(i=null==e?void 0:e.tagName)?void 0:i.toLowerCase())!=="svg")return t7;r||(r=new DOMParser);let s=r.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");if(!s)return t7;return s.part.add("svg"),document.adoptNode(s)}catch(t){return t7}}connectedCallback(){super.connectedCallback(),tK.push(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,tK=tK.filter(e=>e!==t)}getIconSource(){let t=tX(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;let{url:e,fromLibrary:i}=this.getIconSource(),o=i?tX(this.library):void 0;if(!e){this.svg=null;return}let r=t9.get(e);if(r||(r=this.resolveIcon(e,o),t9.set(e,r)),!this.initialRender)return;let s=await r;if(s===t8&&t9.delete(e),e===this.getIconSource().url){let e;if(void 0===e?void 0!==s?._$litType$:s?._$litType$===e){if(this.svg=s,o){await this.updateComplete;let t=this.shadowRoot.querySelector("[part='svg']");"function"==typeof o.mutator&&t&&o.mutator(t)}return}switch(s){case t8:case t7:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),null==(t=null==o?void 0:o.mutator)||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};et.styles=[tQ,tY],g([t0()],et.prototype,"svg",2),g([tJ({reflect:!0})],et.prototype,"name",2),g([tJ()],et.prototype,"src",2),g([tJ()],et.prototype,"label",2),g([tJ({reflect:!0})],et.prototype,"library",2),g([tG("label")],et.prototype,"handleLabelChange",1),g([tG(["name","src","library"])],et.prototype,"setIcon",1);const ee=t=>(...e)=>({_$litDirective$:t,values:e});class ei{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const eo=ee(class extends ei{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let i=t.element.classList;for(let t of this.st)t in e||(i.remove(t),this.st.delete(t));for(let t in e){let o=!!e[t];o===this.st.has(t)||this.nt?.has(t)||(o?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return tw}}),er=ee(class extends ei{constructor(t){if(super(t),3!==t.type&&1!==t.type&&4!==t.type)throw Error("The `live` directive is not allowed on child or event bindings");if(void 0!==t.strings)throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===tw||e===t_)return e;let i=t.element,o=t.name;if(3===t.type){if(e===i[o])return tw}else if(4===t.type){if(!!e===i.hasAttribute(o))return tw}else if(1===t.type&&i.getAttribute(o)===e+"")return tw;return((t,e=t4)=>t._$AH=e)(t),e}});var es=class extends t3{constructor(){super(...arguments),this.formControlController=new $(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new tU(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return tg`
      <div
        class=${eo({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${eo({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${this.value??t_}
            .indeterminate=${er(this.indeterminate)}
            .checked=${er(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?tg`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?tg`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};es.styles=[tQ,tN,tB],es.dependencies={"sl-icon":et},g([t5('input[type="checkbox"]')],es.prototype,"input",2),g([t0()],es.prototype,"hasFocus",2),g([tJ()],es.prototype,"title",2),g([tJ()],es.prototype,"name",2),g([tJ()],es.prototype,"value",2),g([tJ({reflect:!0})],es.prototype,"size",2),g([tJ({type:Boolean,reflect:!0})],es.prototype,"disabled",2),g([tJ({type:Boolean,reflect:!0})],es.prototype,"checked",2),g([tJ({type:Boolean,reflect:!0})],es.prototype,"indeterminate",2),g([tH("checked")],es.prototype,"defaultChecked",2),g([tJ({reflect:!0})],es.prototype,"form",2),g([tJ({type:Boolean,reflect:!0})],es.prototype,"required",2),g([tJ({attribute:"help-text"})],es.prototype,"helpText",2),g([tG("disabled",{waitUntilFirstUpdate:!0})],es.prototype,"handleDisabledChange",1),g([tG(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],es.prototype,"handleStateChange",1);var ea=O`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const el=new Set,en=new Map;let ed="ltr",ec="en";const eh="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(eh){let t=new MutationObserver(eu);ed=document.documentElement.dir||"ltr",ec=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ep(...e){e.map(e=>{let i=e.$code.toLowerCase();en.has(i)?en.set(i,Object.assign(Object.assign({},en.get(i)),e)):en.set(i,e),t||(t=e)}),eu()}function eu(){eh&&(ed=document.documentElement.dir||"ltr",ec=document.documentElement.lang||navigator.language),[...el.keys()].map(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})}class ef{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){el.add(this.host)}hostDisconnected(){el.delete(this.host)}dir(){return`${this.host.dir||ed}`.toLowerCase()}lang(){return`${this.host.lang||ec}`.toLowerCase()}getTranslationData(t){var e,i;let o=new Intl.Locale(t.replace(/_/g,"-")),r=null==o?void 0:o.language.toLowerCase(),s=null!=(i=null==(e=null==o?void 0:o.region)?void 0:e.toLowerCase())?i:"",a=en.get(`${r}-${s}`),l=en.get(r);return{locale:o,language:r,region:s,primary:a,secondary:l}}exists(e,i){var o;let{primary:r,secondary:s}=this.getTranslationData(null!=(o=i.lang)?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!r&&!!r[e]||!!s&&!!s[e]||!!i.includeFallback&&!!t&&!!t[e]}term(e,...i){let o,{primary:r,secondary:s}=this.getTranslationData(this.lang());if(r&&r[e])o=r[e];else if(s&&s[e])o=s[e];else{if(!t||!t[e])return console.error(`No translation found for: ${String(e)}`),String(e);o=t[e]}return"function"==typeof o?o(...i):o}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return isNaN(t=Number(t))?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}}var em={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};ep(em);var eb=class extends ef{};ep(em);var eg=class extends t3{constructor(){super(...arguments),this.localize=new eb(this)}render(){return tg`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};eg.styles=[tQ,ea];var ev=new Map,ey=new WeakMap;function ew(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function e_(t,e){ev.set(t,null!=e?e:{keyframes:[],options:{duration:0}})}function ex(t,e,i){let o=ey.get(t);if(null==o?void 0:o[e])return ew(o[e],i.dir);let r=ev.get(e);return r?ew(r,i.dir):{keyframes:[],options:{duration:0}}}function ek(t,e,i){return new Promise(o=>{if((null==i?void 0:i.duration)===1/0)throw Error("Promise-based animations must be finite.");let r=t.animate(e,b(m({},i),{duration:e$()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function eC(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function e$(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ez(t){return Promise.all(t.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}function eS(t,e){return t.map(t=>b(m({},t),{height:"auto"===t.height?`${e}px`:t.height}))}var eA=class t extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&"treeitem"===t.getAttribute("role")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&0===this.getChildrenItems().length,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await ez(this.childrenContainer);let{keyframes:t,options:e}=ex(this,"tree-item.collapse",{dir:this.localize.dir()});await ek(this.childrenContainer,eS(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){let e=this.parentElement;return!!e&&t.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&0===this.getChildrenItems().length}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await ez(this.childrenContainer),this.childrenContainer.hidden=!1;let{keyframes:t,options:e}=ex(this,"tree-item.expand",{dir:this.localize.dir()});await ek(this.childrenContainer,eS(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(i=>t.isTreeItem(i)&&(e||!i.disabled)):[]}render(){var t,e,i,o;let r="rtl"===this.localize.dir(),s=!this.loading&&(!this.isLeaf||this.lazy);return tg`
      <div
        part="base"
        class="${eo({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":s,"tree-item--rtl":"rtl"===this.localize.dir()})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${eo({"tree-item__expand-button":!0,"tree-item__expand-button--visible":s})}
            aria-hidden="true"
          >
            ${t=this.loading,e=()=>tg` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `,t?e(t):void 0}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${r?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${r?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${i=this.selectable,o=()=>tg`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${er(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `,i?o(i):void 0}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};eA.styles=[tQ,tR],eA.dependencies={"sl-checkbox":es,"sl-icon":et,"sl-spinner":eg},g([t0()],eA.prototype,"indeterminate",2),g([t0()],eA.prototype,"isLeaf",2),g([t0()],eA.prototype,"loading",2),g([t0()],eA.prototype,"selectable",2),g([tJ({type:Boolean,reflect:!0})],eA.prototype,"expanded",2),g([tJ({type:Boolean,reflect:!0})],eA.prototype,"selected",2),g([tJ({type:Boolean,reflect:!0})],eA.prototype,"disabled",2),g([tJ({type:Boolean,reflect:!0})],eA.prototype,"lazy",2),g([t5("slot:not([name])")],eA.prototype,"defaultSlot",2),g([t5("slot[name=children]")],eA.prototype,"childrenSlot",2),g([t5(".tree-item__item")],eA.prototype,"itemElement",2),g([t5(".tree-item__children")],eA.prototype,"childrenContainer",2),g([t5(".tree-item__expand-button slot")],eA.prototype,"expandButtonSlot",2),g([tG("loading",{waitUntilFirstUpdate:!0})],eA.prototype,"handleLoadingChange",1),g([tG("disabled")],eA.prototype,"handleDisabledChange",1),g([tG("selected")],eA.prototype,"handleSelectedChange",1),g([tG("expanded",{waitUntilFirstUpdate:!0})],eA.prototype,"handleExpandedChange",1),g([tG("expanded",{waitUntilFirstUpdate:!0})],eA.prototype,"handleExpandAnimation",1),g([tG("lazy",{waitUntilFirstUpdate:!0})],eA.prototype,"handleLazyChange",1),e_("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),e_("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),eA.define("sl-tree-item");var eE=O`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,eT=O`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const eD=Math.min,eL=Math.max,eI=Math.round,eO=Math.floor,eM=t=>({x:t,y:t}),eP={left:"right",right:"left",bottom:"top",top:"bottom"},eF={start:"end",end:"start"};function eV(t,e){return"function"==typeof t?t(e):t}function eR(t){return t.split("-")[0]}function eB(t){return t.split("-")[1]}function eH(t){return"x"===t?"y":"x"}function eN(t){return"y"===t?"height":"width"}const eU=new Set(["top","bottom"]);function eq(t){return eU.has(eR(t))?"y":"x"}function ej(t){return t.replace(/start|end/g,t=>eF[t])}const eW=["left","right"],eK=["right","left"],eX=["top","bottom"],eY=["bottom","top"];function eG(t){return t.replace(/left|right|bottom|top/g,t=>eP[t])}function eQ(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function eZ(t){let{x:e,y:i,width:o,height:r}=t;return{width:o,height:r,top:i,left:e,right:e+o,bottom:i+r,x:e,y:i}}function eJ(t,e,i){let o,{reference:r,floating:s}=t,a=eq(e),l=eH(eq(e)),n=eN(l),d=eR(e),c="y"===a,h=r.x+r.width/2-s.width/2,p=r.y+r.height/2-s.height/2,u=r[n]/2-s[n]/2;switch(d){case"top":o={x:h,y:r.y-s.height};break;case"bottom":o={x:h,y:r.y+r.height};break;case"right":o={x:r.x+r.width,y:p};break;case"left":o={x:r.x-s.width,y:p};break;default:o={x:r.x,y:r.y}}switch(eB(e)){case"start":o[l]-=u*(i&&c?-1:1);break;case"end":o[l]+=u*(i&&c?-1:1)}return o}const e0=async(t,e,i)=>{let{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:a}=i,l=s.filter(Boolean),n=await (null==a.isRTL?void 0:a.isRTL(e)),d=await a.getElementRects({reference:t,floating:e,strategy:r}),{x:c,y:h}=eJ(d,o,n),p=o,u={},f=0;for(let i=0;i<l.length;i++){let{name:s,fn:m}=l[i],{x:b,y:g,data:v,reset:y}=await m({x:c,y:h,initialPlacement:o,placement:p,strategy:r,middlewareData:u,rects:d,platform:a,elements:{reference:t,floating:e}});c=null!=b?b:c,h=null!=g?g:h,u={...u,[s]:{...u[s],...v}},y&&f<=50&&(f++,"object"==typeof y&&(y.placement&&(p=y.placement),y.rects&&(d=!0===y.rects?await a.getElementRects({reference:t,floating:e,strategy:r}):y.rects),{x:c,y:h}=eJ(d,p,n)),i=-1)}return{x:c,y:h,placement:p,strategy:r,middlewareData:u}};async function e1(t,e){var i;void 0===e&&(e={});let{x:o,y:r,platform:s,rects:a,elements:l,strategy:n}=t,{boundary:d="clippingAncestors",rootBoundary:c="viewport",elementContext:h="floating",altBoundary:p=!1,padding:u=0}=eV(e,t),f=eQ(u),m=l[p?"floating"===h?"reference":"floating":h],b=eZ(await s.getClippingRect({element:null==(i=await (null==s.isElement?void 0:s.isElement(m)))||i?m:m.contextElement||await (null==s.getDocumentElement?void 0:s.getDocumentElement(l.floating)),boundary:d,rootBoundary:c,strategy:n})),g="floating"===h?{x:o,y:r,width:a.floating.width,height:a.floating.height}:a.reference,v=await (null==s.getOffsetParent?void 0:s.getOffsetParent(l.floating)),y=await (null==s.isElement?void 0:s.isElement(v))&&await (null==s.getScale?void 0:s.getScale(v))||{x:1,y:1},w=eZ(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:g,offsetParent:v,strategy:n}):g);return{top:(b.top-w.top+f.top)/y.y,bottom:(w.bottom-b.bottom+f.bottom)/y.y,left:(b.left-w.left+f.left)/y.x,right:(w.right-b.right+f.right)/y.x}}const e2=new Set(["left","top"]);async function e5(t,e){let{placement:i,platform:o,elements:r}=t,s=await (null==o.isRTL?void 0:o.isRTL(r.floating)),a=eR(i),l=eB(i),n="y"===eq(i),d=e2.has(a)?-1:1,c=s&&n?-1:1,h=eV(e,t),{mainAxis:p,crossAxis:u,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return l&&"number"==typeof f&&(u="end"===l?-1*f:f),n?{x:u*c,y:p*d}:{x:p*d,y:u*c}}function e3(){return"undefined"!=typeof window}function e6(t){return e8(t)?(t.nodeName||"").toLowerCase():"#document"}function e4(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function e7(t){var e;return null==(e=(e8(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function e8(t){return!!e3()&&(t instanceof Node||t instanceof e4(t).Node)}function e9(t){return!!e3()&&(t instanceof Element||t instanceof e4(t).Element)}function it(t){return!!e3()&&(t instanceof HTMLElement||t instanceof e4(t).HTMLElement)}function ie(t){return!!e3()&&"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof e4(t).ShadowRoot)}const ii=new Set(["inline","contents"]);function io(t){let{overflow:e,overflowX:i,overflowY:o,display:r}=ib(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!ii.has(r)}const ir=new Set(["table","td","th"]),is=[":popover-open",":modal"];function ia(t){return is.some(e=>{try{return t.matches(e)}catch(t){return!1}})}const il=["transform","translate","scale","rotate","perspective"],id=["transform","translate","scale","rotate","perspective","filter"],ic=["paint","layout","strict","content"];function ih(t){let e=ip(),i=e9(t)?ib(t):t;return il.some(t=>!!i[t]&&"none"!==i[t])||!!i.containerType&&"normal"!==i.containerType||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||id.some(t=>(i.willChange||"").includes(t))||ic.some(t=>(i.contain||"").includes(t))}function ip(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}const iu=new Set(["html","body","#document"]);function im(t){return iu.has(e6(t))}function ib(t){return e4(t).getComputedStyle(t)}function ig(t){return e9(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function iv(t){if("html"===e6(t))return t;let e=t.assignedSlot||t.parentNode||ie(t)&&t.host||e7(t);return ie(e)?e.host:e}function iy(t,e,i){var o;void 0===e&&(e=[]),void 0===i&&(i=!0);let r=function t(e){let i=iv(e);return im(i)?e.ownerDocument?e.ownerDocument.body:e.body:it(i)&&io(i)?i:t(i)}(t),s=r===(null==(o=t.ownerDocument)?void 0:o.body),a=e4(r);if(s){let t=iw(a);return e.concat(a,a.visualViewport||[],io(r)?r:[],t&&i?iy(t):[])}return e.concat(r,iy(r,[],i))}function iw(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function i_(t){let e=ib(t),i=parseFloat(e.width)||0,o=parseFloat(e.height)||0,r=it(t),s=r?t.offsetWidth:i,a=r?t.offsetHeight:o,l=eI(i)!==s||eI(o)!==a;return l&&(i=s,o=a),{width:i,height:o,$:l}}function ix(t){return e9(t)?t:t.contextElement}function ik(t){let e=ix(t);if(!it(e))return eM(1);let i=e.getBoundingClientRect(),{width:o,height:r,$:s}=i_(e),a=(s?eI(i.width):i.width)/o,l=(s?eI(i.height):i.height)/r;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const iC=eM(0);function i$(t){let e=e4(t);return ip()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:iC}function iz(t,e,i,o){var r;void 0===e&&(e=!1),void 0===i&&(i=!1);let s=t.getBoundingClientRect(),a=ix(t),l=eM(1);e&&(o?e9(o)&&(l=ik(o)):l=ik(t));let n=(void 0===(r=i)&&(r=!1),o&&(!r||o===e4(a))&&r)?i$(a):eM(0),d=(s.left+n.x)/l.x,c=(s.top+n.y)/l.y,h=s.width/l.x,p=s.height/l.y;if(a){let t=e4(a),e=o&&e9(o)?e4(o):o,i=t,r=iw(i);for(;r&&o&&e!==i;){let t=ik(r),e=r.getBoundingClientRect(),o=ib(r),s=e.left+(r.clientLeft+parseFloat(o.paddingLeft))*t.x,a=e.top+(r.clientTop+parseFloat(o.paddingTop))*t.y;d*=t.x,c*=t.y,h*=t.x,p*=t.y,d+=s,c+=a,r=iw(i=e4(r))}}return eZ({width:h,height:p,x:d,y:c})}function iS(t,e){let i=ig(t).scrollLeft;return e?e.left+i:iz(e7(t)).left+i}function iA(t,e,i){void 0===i&&(i=!1);let o=t.getBoundingClientRect();return{x:o.left+e.scrollLeft-(i?0:iS(t,o)),y:o.top+e.scrollTop}}const iE=new Set(["absolute","fixed"]);function iT(t,e,i){let o;if("viewport"===e)o=function(t,e){let i=e4(t),o=e7(t),r=i.visualViewport,s=o.clientWidth,a=o.clientHeight,l=0,n=0;if(r){s=r.width,a=r.height;let t=ip();(!t||t&&"fixed"===e)&&(l=r.offsetLeft,n=r.offsetTop)}return{width:s,height:a,x:l,y:n}}(t,i);else if("document"===e)o=function(t){let e=e7(t),i=ig(t),o=t.ownerDocument.body,r=eL(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=eL(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight),a=-i.scrollLeft+iS(t),l=-i.scrollTop;return"rtl"===ib(o).direction&&(a+=eL(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:a,y:l}}(e7(t));else if(e9(e))o=function(t,e){let i=iz(t,!0,"fixed"===e),o=i.top+t.clientTop,r=i.left+t.clientLeft,s=it(t)?ik(t):eM(1),a=t.clientWidth*s.x,l=t.clientHeight*s.y;return{width:a,height:l,x:r*s.x,y:o*s.y}}(e,i);else{let i=i$(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return eZ(o)}function iD(t){return"static"===ib(t).position}function iL(t,e){if(!it(t)||"fixed"===ib(t).position)return null;if(e)return e(t);let i=t.offsetParent;return e7(t)===i&&(i=i.ownerDocument.body),i}function iI(t,e){var i;let o=e4(t);if(ia(t))return o;if(!it(t)){let e=iv(t);for(;e&&!im(e);){if(e9(e)&&!iD(e))return e;e=iv(e)}return o}let r=iL(t,e);for(;r&&(i=r,ir.has(e6(i)))&&iD(r);)r=iL(r,e);return r&&im(r)&&iD(r)&&!ih(r)?o:r||function(t){let e=iv(t);for(;it(e)&&!im(e);){if(ih(e))return e;if(ia(e))break;e=iv(e)}return null}(t)||o}const iO=async function(t){let e=this.getOffsetParent||iI,i=this.getDimensions,o=await i(t.floating);return{reference:function(t,e,i){let o=it(e),r=e7(e),s="fixed"===i,a=iz(t,!0,s,e),l={scrollLeft:0,scrollTop:0},n=eM(0);if(o||!o&&!s)if(("body"!==e6(e)||io(r))&&(l=ig(e)),o){let t=iz(e,!0,s,e);n.x=t.x+e.clientLeft,n.y=t.y+e.clientTop}else r&&(n.x=iS(r));s&&!o&&r&&(n.x=iS(r));let d=!r||o||s?eM(0):iA(r,l);return{x:a.left+l.scrollLeft-n.x-d.x,y:a.top+l.scrollTop-n.y-d.y,width:a.width,height:a.height}}(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},iM={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:i,offsetParent:o,strategy:r}=t,s="fixed"===r,a=e7(o),l=!!e&&ia(e.floating);if(o===a||l&&s)return i;let n={scrollLeft:0,scrollTop:0},d=eM(1),c=eM(0),h=it(o);if((h||!h&&!s)&&(("body"!==e6(o)||io(a))&&(n=ig(o)),it(o))){let t=iz(o);d=ik(o),c.x=t.x+o.clientLeft,c.y=t.y+o.clientTop}let p=!a||h||s?eM(0):iA(a,n,!0);return{width:i.width*d.x,height:i.height*d.y,x:i.x*d.x-n.scrollLeft*d.x+c.x+p.x,y:i.y*d.y-n.scrollTop*d.y+c.y+p.y}},getDocumentElement:e7,getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:o,strategy:r}=t,s=[..."clippingAncestors"===i?ia(e)?[]:function(t,e){let i=e.get(t);if(i)return i;let o=iy(t,[],!1).filter(t=>e9(t)&&"body"!==e6(t)),r=null,s="fixed"===ib(t).position,a=s?iv(t):t;for(;e9(a)&&!im(a);){let e=ib(a),i=ih(a);i||"fixed"!==e.position||(r=null),(s?!i&&!r:!i&&"static"===e.position&&!!r&&iE.has(r.position)||io(a)&&!i&&function t(e,i){let o=iv(e);return!(o===i||!e9(o)||im(o))&&("fixed"===ib(o).position||t(o,i))}(t,a))?o=o.filter(t=>t!==a):r=e,a=iv(a)}return e.set(t,o),o}(e,this._c):[].concat(i),o],a=s[0],l=s.reduce((t,i)=>{let o=iT(e,i,r);return t.top=eL(o.top,t.top),t.right=eD(o.right,t.right),t.bottom=eD(o.bottom,t.bottom),t.left=eL(o.left,t.left),t},iT(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:iI,getElementRects:iO,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:e,height:i}=i_(t);return{width:e,height:i}},getScale:ik,isElement:e9,isRTL:function(t){return"rtl"===ib(t).direction}};function iP(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}const iF=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var i,o;let r,s,{placement:a,rects:l,platform:n,elements:d}=e,{apply:c=()=>{},...h}=eV(t,e),p=await e1(e,h),u=eR(a),f=eB(a),m="y"===eq(a),{width:b,height:g}=l.floating;"top"===u||"bottom"===u?(r=u,s=f===(await (null==n.isRTL?void 0:n.isRTL(d.floating))?"start":"end")?"left":"right"):(s=u,r="end"===f?"top":"bottom");let v=g-p.top-p.bottom,y=b-p.left-p.right,w=eD(g-p[r],v),_=eD(b-p[s],y),x=!e.middlewareData.shift,k=w,C=_;if(null!=(i=e.middlewareData.shift)&&i.enabled.x&&(C=y),null!=(o=e.middlewareData.shift)&&o.enabled.y&&(k=v),x&&!f){let t=eL(p.left,0),e=eL(p.right,0),i=eL(p.top,0),o=eL(p.bottom,0);m?C=b-2*(0!==t||0!==e?t+e:eL(p.left,p.right)):k=g-2*(0!==i||0!==o?i+o:eL(p.top,p.bottom))}await c({...e,availableWidth:C,availableHeight:k});let $=await n.getDimensions(d.floating);return b!==$.width||g!==$.height?{reset:{rects:!0}}:{}}}};function iV(t){var e=t;for(let t=e;t;t=iR(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=iR(e);t;t=iR(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if("contents"!==e.display&&("static"!==e.position||ih(e)||"BODY"===t.tagName))return t}return null}function iR(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var iB=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom"),o=0,r=0,s=0,a=0,l=0,n=0,d=0,c=0;i?t.top<e.top?(o=t.left,r=t.bottom,s=t.right,a=t.bottom,l=e.left,n=e.top,d=e.right,c=e.top):(o=e.left,r=e.bottom,s=e.right,a=e.bottom,l=t.left,n=t.top,d=t.right,c=t.top):t.left<e.left?(o=t.right,r=t.top,s=e.left,a=e.top,l=t.right,n=t.bottom,d=e.left,c=e.bottom):(o=e.right,r=e.top,s=t.left,a=t.top,l=e.right,n=e.bottom,d=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else{var t;this.anchor instanceof Element||null!==(t=this.anchor)&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(t,e,i,o){let r;void 0===o&&(o={});let{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:n="function"==typeof IntersectionObserver,animationFrame:d=!1}=o,c=ix(t),h=s||a?[...c?iy(c):[],...iy(e)]:[];h.forEach(t=>{s&&t.addEventListener("scroll",i,{passive:!0}),a&&t.addEventListener("resize",i)});let p=c&&n?function(t,e){let i,o=null,r=e7(t);function s(){var t;clearTimeout(i),null==(t=o)||t.disconnect(),o=null}return!function a(l,n){void 0===l&&(l=!1),void 0===n&&(n=1),s();let d=t.getBoundingClientRect(),{left:c,top:h,width:p,height:u}=d;if(l||e(),!p||!u)return;let f=eO(h),m=eO(r.clientWidth-(c+p)),b={rootMargin:-f+"px "+-m+"px "+-eO(r.clientHeight-(h+u))+"px "+-eO(c)+"px",threshold:eL(0,eD(1,n))||1},g=!0;function v(e){let o=e[0].intersectionRatio;if(o!==n){if(!g)return a();o?a(!1,o):i=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==o||iP(d,t.getBoundingClientRect())||a(),g=!1}try{o=new IntersectionObserver(v,{...b,root:r.ownerDocument})}catch(t){o=new IntersectionObserver(v,b)}o.observe(t)}(!0),s}(c,i):null,u=-1,f=null;l&&(f=new ResizeObserver(t=>{let[o]=t;o&&o.target===c&&f&&(f.unobserve(e),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var t;null==(t=f)||t.observe(e)})),i()}),c&&!d&&f.observe(c),f.observe(e));let m=d?iz(t):null;return d&&function e(){let o=iz(t);m&&!iP(m,o)&&i(),m=o,r=requestAnimationFrame(e)}(),i(),()=>{var t;h.forEach(t=>{s&&t.removeEventListener("scroll",i),a&&t.removeEventListener("resize",i)}),null==p||p(),null==(t=f)||t.disconnect(),f=null,d&&cancelAnimationFrame(r)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){var t,e,i;let o;if(!this.active||!this.anchorEl)return;let r=[{name:"offset",options:t={mainAxis:this.distance,crossAxis:this.skidding},async fn(e){var i,o;let{x:r,y:s,placement:a,middlewareData:l}=e,n=await e5(e,t);return a===(null==(i=l.offset)?void 0:i.placement)&&null!=(o=l.arrow)&&o.alignmentOffset?{}:{x:r+n.x,y:s+n.y,data:{...n,placement:a}}}}];this.sync?r.push(iF({apply:({rects:t})=>{let e="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=i?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&r.push({name:"flip",options:e={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(t){var i,o,r,s,a;let{placement:l,middlewareData:n,rects:d,initialPlacement:c,platform:h,elements:p}=t,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...y}=eV(e,t);if(null!=(i=n.arrow)&&i.alignmentOffset)return{};let w=eR(l),_=eq(c),x=eR(c)===c,k=await (null==h.isRTL?void 0:h.isRTL(p.floating)),C=m||(x||!v?[eG(c)]:function(t){let e=eG(t);return[ej(t),e,ej(e)]}(c)),$="none"!==g;!m&&$&&C.push(...function(t,e,i,o){let r=eB(t),s=function(t,e,i){switch(t){case"top":case"bottom":if(i)return e?eK:eW;return e?eW:eK;case"left":case"right":return e?eX:eY;default:return[]}}(eR(t),"start"===i,o);return r&&(s=s.map(t=>t+"-"+r),e&&(s=s.concat(s.map(ej)))),s}(c,v,g,k));let z=[c,...C],S=await e1(t,y),A=[],E=(null==(o=n.flip)?void 0:o.overflows)||[];if(u&&A.push(S[w]),f){let t=function(t,e,i){void 0===i&&(i=!1);let o=eB(t),r=eH(eq(t)),s=eN(r),a="x"===r?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[s]>e.floating[s]&&(a=eG(a)),[a,eG(a)]}(l,d,k);A.push(S[t[0]],S[t[1]])}if(E=[...E,{placement:l,overflows:A}],!A.every(t=>t<=0)){let t=((null==(r=n.flip)?void 0:r.index)||0)+1,e=z[t];if(e&&("alignment"!==f||_===eq(e)||E.every(t=>eq(t.placement)!==_||t.overflows[0]>0)))return{data:{index:t,overflows:E},reset:{placement:e}};let i=null==(s=E.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:s.placement;if(!i)switch(b){case"bestFit":{let t=null==(a=E.filter(t=>{if($){let e=eq(t.placement);return e===_||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:a[0];t&&(i=t);break}case"initialPlacement":i=c}if(l!==i)return{reset:{placement:i}}}return{}}}),this.shift&&r.push({name:"shift",options:i={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(t){let{x:e,y:o,placement:r}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...n}=eV(i,t),d={x:e,y:o},c=await e1(t,n),h=eq(eR(r)),p=eH(h),u=d[p],f=d[h];if(s){let t="y"===p?"top":"left",e="y"===p?"bottom":"right",i=u+c[t],o=u-c[e];u=eL(i,eD(u,o))}if(a){let t="y"===h?"top":"left",e="y"===h?"bottom":"right",i=f+c[t],o=f-c[e];f=eL(i,eD(f,o))}let m=l.fn({...t,[p]:u,[h]:f});return{...m,data:{x:m.x-e,y:m.y-o,enabled:{[p]:s,[h]:a}}}}}),this.autoSize?r.push(iF({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&r.push({name:"arrow",options:o={element:this.arrowEl,padding:this.arrowPadding},async fn(t){let{x:e,y:i,placement:r,rects:s,platform:a,elements:l,middlewareData:n}=t,{element:d,padding:c=0}=eV(o,t)||{};if(null==d)return{};let h=eQ(c),p={x:e,y:i},u=eH(eq(r)),f=eN(u),m=await a.getDimensions(d),b="y"===u,g=b?"clientHeight":"clientWidth",v=s.reference[f]+s.reference[u]-p[u]-s.floating[f],y=p[u]-s.reference[u],w=await (null==a.getOffsetParent?void 0:a.getOffsetParent(d)),_=w?w[g]:0;_&&await (null==a.isElement?void 0:a.isElement(w))||(_=l.floating[g]||s.floating[f]);let x=_/2-m[f]/2-1,k=eD(h[b?"top":"left"],x),C=eD(h[b?"bottom":"right"],x),$=_-m[f]-C,z=_/2-m[f]/2+(v/2-y/2),S=eL(k,eD(z,$)),A=!n.arrow&&null!=eB(r)&&z!==S&&s.reference[f]/2-(z<k?k:C)-m[f]/2<0,E=A?z<k?z-k:z-$:0;return{[u]:p[u]+E,data:{[u]:S,centerOffset:z-S-E,...A&&{alignmentOffset:E}},reset:A}}});let s="absolute"===this.strategy?t=>iM.getOffsetParent(t,iV):iM.getOffsetParent;((t,e,i)=>{let o=new Map,r={platform:iM,...i},s={...r.platform,_c:o};return e0(t,e,{...r,platform:s})})(this.anchorEl,this.popup,{placement:this.placement,middleware:r,strategy:this.strategy,platform:b(m({},iM),{getOffsetParent:s})}).then(({x:t,y:e,middlewareData:i,placement:o})=>{let r="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){let t=i.arrow.x,e=i.arrow.y,o="",a="",l="",n="";if("start"===this.arrowPlacement){let i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=r?i:"",n=r?"":i}else if("end"===this.arrowPlacement){let i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=r?"":i,n=r?i:"",l="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(n="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(n="number"==typeof t?`${t}px`:"",o="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:l,left:n,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return tg`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${eo({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${eo({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?tg`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function iH(t,e){return new Promise(i=>{t.addEventListener(e,function o(r){r.target===t&&(t.removeEventListener(e,o),i())})})}iB.styles=[tQ,eT],g([t5(".popup")],iB.prototype,"popup",2),g([t5(".popup__arrow")],iB.prototype,"arrowEl",2),g([tJ()],iB.prototype,"anchor",2),g([tJ({type:Boolean,reflect:!0})],iB.prototype,"active",2),g([tJ({reflect:!0})],iB.prototype,"placement",2),g([tJ({reflect:!0})],iB.prototype,"strategy",2),g([tJ({type:Number})],iB.prototype,"distance",2),g([tJ({type:Number})],iB.prototype,"skidding",2),g([tJ({type:Boolean})],iB.prototype,"arrow",2),g([tJ({attribute:"arrow-placement"})],iB.prototype,"arrowPlacement",2),g([tJ({attribute:"arrow-padding",type:Number})],iB.prototype,"arrowPadding",2),g([tJ({type:Boolean})],iB.prototype,"flip",2),g([tJ({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(t=>t.trim()).filter(t=>""!==t),toAttribute:t=>t.join(" ")}})],iB.prototype,"flipFallbackPlacements",2),g([tJ({attribute:"flip-fallback-strategy"})],iB.prototype,"flipFallbackStrategy",2),g([tJ({type:Object})],iB.prototype,"flipBoundary",2),g([tJ({attribute:"flip-padding",type:Number})],iB.prototype,"flipPadding",2),g([tJ({type:Boolean})],iB.prototype,"shift",2),g([tJ({type:Object})],iB.prototype,"shiftBoundary",2),g([tJ({attribute:"shift-padding",type:Number})],iB.prototype,"shiftPadding",2),g([tJ({attribute:"auto-size"})],iB.prototype,"autoSize",2),g([tJ()],iB.prototype,"sync",2),g([tJ({type:Object})],iB.prototype,"autoSizeBoundary",2),g([tJ({attribute:"auto-size-padding",type:Number})],iB.prototype,"autoSizePadding",2),g([tJ({attribute:"hover-bridge",type:Boolean})],iB.prototype,"hoverBridge",2);var iN=class extends t3{constructor(){super(),this.localize=new eb(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let t=eC(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let t=eC(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ez(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:e,options:i}=ex(this,"tooltip.show",{dir:this.localize.dir()});await ek(this.popup.popup,e,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ez(this.body);let{keyframes:t,options:i}=ex(this,"tooltip.hide",{dir:this.localize.dir()});await ek(this.popup.popup,t,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,iH(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,iH(this,"sl-after-hide")}render(){return tg`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${eo({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};iN.styles=[tQ,eE],iN.dependencies={"sl-popup":iB},g([t5("slot:not([name])")],iN.prototype,"defaultSlot",2),g([t5(".tooltip__body")],iN.prototype,"body",2),g([t5("sl-popup")],iN.prototype,"popup",2),g([tJ()],iN.prototype,"content",2),g([tJ()],iN.prototype,"placement",2),g([tJ({type:Boolean,reflect:!0})],iN.prototype,"disabled",2),g([tJ({type:Number})],iN.prototype,"distance",2),g([tJ({type:Boolean,reflect:!0})],iN.prototype,"open",2),g([tJ({type:Number})],iN.prototype,"skidding",2),g([tJ()],iN.prototype,"trigger",2),g([tJ({type:Boolean})],iN.prototype,"hoist",2),g([tG("open",{waitUntilFirstUpdate:!0})],iN.prototype,"handleOpenChange",1),g([tG(["content","distance","hoist","placement","skidding"])],iN.prototype,"handleOptionsChange",1),g([tG("disabled")],iN.prototype,"handleDisabledChange",1),e_("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),e_("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),iN.define("sl-tooltip");var iU=O`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function iq(t,e,i){let o=t=>Object.is(t,-0)?0:t;return o(t<e?e:t>i?i:t)}function ij(t,e=!1){function i(t){let e=t.getChildrenItems({includeDisabled:!1});if(e.length){let i=e.every(t=>t.selected),o=e.every(t=>!t.selected&&!t.indeterminate);t.selected=i,t.indeterminate=!i&&!o}}!function t(o){for(let i of o.getChildrenItems())i.selected=e?o.selected||i.selected:!i.disabled&&o.selected,t(i);e&&i(o)}(t),function t(e){let o=e.parentElement;eA.isTreeItem(o)&&(i(o),t(o))}(t)}var iW=class extends t3{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new eb(this),this.initTreeItem=t=>{t.selectable="multiple"===this.selection,["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(e=>{let i=t.querySelector(`[slot="${e}-icon"]`),o=this.getExpandButtonIcon(e);o&&(null===i?t.append(o):i.hasAttribute("data-default")&&i.replaceWith(o))})},this.handleTreeChanged=t=>{for(let e of t){let t=[...e.addedNodes].filter(eA.isTreeItem),i=[...e.removedNodes].filter(eA.isTreeItem);t.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{let e=t.relatedTarget;e&&this.contains(e)||(this.tabIndex=0)},this.handleFocusIn=t=>{let e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),eA.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect()}getExpandButtonIcon(t){let e=("expand"===t?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(e){let i=e.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(t=>t.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){let e=[...this.selectedItems];if("multiple"===this.selection)t.selected=!t.selected,t.lazy&&(t.expanded=!0),ij(t);else if("single"===this.selection||t.isLeaf)for(let e of this.getAllTreeItems())e.selected=e===t;else"leaf"===this.selection&&(t.expanded=!t.expanded);let i=this.selectedItems;(e.length!==i.length||i.some(t=>!e.includes(t)))&&Promise.all(i.map(t=>t.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){null==t||t.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(t=>{var e;return["input","textarea"].includes(null==(e=null==t?void 0:t.tagName)?void 0:e.toLowerCase())}))return;let e=this.getFocusableItems(),i="ltr"===this.localize.dir(),o="rtl"===this.localize.dir();if(e.length>0){t.preventDefault();let r=e.findIndex(t=>t.matches(":focus")),s=e[r],a=t=>{let i=e[iq(t,0,e.length-1)];this.focusItem(i)},l=t=>{s.expanded=t};"ArrowDown"===t.key?a(r+1):"ArrowUp"===t.key?a(r-1):i&&"ArrowRight"===t.key||o&&"ArrowLeft"===t.key?!s||s.disabled||s.expanded||s.isLeaf&&!s.lazy?a(r+1):l(!0):i&&"ArrowLeft"===t.key||o&&"ArrowRight"===t.key?!s||s.disabled||s.isLeaf||!s.expanded?a(r-1):l(!1):"Home"===t.key?a(0):"End"===t.key?a(e.length-1):"Enter"!==t.key&&" "!==t.key||s.disabled||this.selectItem(s)}}handleClick(t){let e=t.target,i=e.closest("sl-tree-item"),o=t.composedPath().some(t=>{var e;return null==(e=null==t?void 0:t.classList)?void 0:e.contains("tree-item__expand-button")});i&&!i.disabled&&e===this.clickTarget&&(o?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){let t="multiple"===this.selection,e=this.getAllTreeItems();for(let i of(this.setAttribute("aria-multiselectable",t?"true":"false"),e))i.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(t=>ij(t,!0)))}get selectedItems(){return this.getAllTreeItems().filter(t=>t.selected)}getFocusableItems(){let t=this.getAllTreeItems(),e=new Set;return t.filter(t=>{var i;if(t.disabled)return!1;let o=null==(i=t.parentElement)?void 0:i.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(t),!e.has(t)})}render(){return tg`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};iW.styles=[tQ,iU],g([t5("slot:not([name])")],iW.prototype,"defaultSlot",2),g([t5("slot[name=expand-icon]")],iW.prototype,"expandedIconSlot",2),g([t5("slot[name=collapse-icon]")],iW.prototype,"collapsedIconSlot",2),g([tJ()],iW.prototype,"selection",2),g([tG("selection")],iW.prototype,"handleSelectionChange",1),iW.define("sl-tree");var iK=O`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,iX=class extends t3{render(){return tg` <slot></slot> `}};iX.styles=[tQ,iK],iX.define("sl-visually-hidden");var iY=O`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,iG=0,iQ=class extends t3{constructor(){super(...arguments),this.attrId=++iG,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return tg`
      <slot
        part="base"
        class=${eo({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};iQ.styles=[tQ,iY],g([tJ({reflect:!0})],iQ.prototype,"name",2),g([tJ({type:Boolean,reflect:!0})],iQ.prototype,"active",2),g([tG("active")],iQ.prototype,"handleActiveChange",1),iQ.define("sl-tab-panel");var iZ=O`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,iJ=O`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;const i0=Symbol.for(""),i1=t=>{if(t?.r===i0)return t?._$litStatic$},i2=(t,...e)=>({_$litStatic$:e.reduce((e,i,o)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[o+1],t[0]),r:i0}),i5=new Map,i3=t=>(e,...i)=>{let o,r,s=i.length,a=[],l=[],n,d=0,c=!1;for(;d<s;){for(n=e[d];d<s&&void 0!==(o=i1(r=i[d]));)n+=o+e[++d],c=!0;d!==s&&l.push(r),a.push(n),d++}if(d===s&&a.push(e[s]),c){let t=a.join("$$lit$$");void 0===(e=i5.get(t))&&(a.raw=a,i5.set(t,e=a)),i=l}return t(e,...i)},i6=i3(tg);i3(tv),i3(ty);var i4=class extends t3{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,e=t?i2`a`:i2`button`;return i6`
      <${e}
        part="base"
        class=${eo({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${(t?void 0:this.disabled)??t_}
        type=${(t?void 0:"button")??t_}
        href=${(t?this.href:void 0)??t_}
        target=${(t?this.target:void 0)??t_}
        download=${(t?this.download:void 0)??t_}
        rel=${(t&&this.target?"noreferrer noopener":void 0)??t_}
        role=${(t?void 0:"button")??t_}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${this.name??t_}
          library=${this.library??t_}
          src=${this.src??t_}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};i4.styles=[tQ,iJ],i4.dependencies={"sl-icon":et},g([t5(".icon-button")],i4.prototype,"button",2),g([t0()],i4.prototype,"hasFocus",2),g([tJ()],i4.prototype,"name",2),g([tJ()],i4.prototype,"library",2),g([tJ()],i4.prototype,"src",2),g([tJ()],i4.prototype,"href",2),g([tJ()],i4.prototype,"target",2),g([tJ()],i4.prototype,"download",2),g([tJ()],i4.prototype,"label",2),g([tJ({type:Boolean,reflect:!0})],i4.prototype,"disabled",2);var i7=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return tg`
      <span
        part="base"
        class=${eo({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?tg`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};i7.styles=[tQ,iZ],i7.dependencies={"sl-icon-button":i4},g([tJ({reflect:!0})],i7.prototype,"variant",2),g([tJ({reflect:!0})],i7.prototype,"size",2),g([tJ({type:Boolean,reflect:!0})],i7.prototype,"pill",2),g([tJ({type:Boolean})],i7.prototype,"removable",2),i7.define("sl-tag");var i8=O`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,i9=class extends t3{constructor(){super(...arguments),this.formControlController=new $(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new tU(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&(null==(t=this.resizeObserver)||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){"auto"===this.resize?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){"number"==typeof t.top&&(this.input.scrollTop=t.top),"number"==typeof t.left&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){let r=null!=e?e:this.input.selectionStart,s=null!=i?i:this.input.selectionEnd;this.input.setRangeText(t,r,s,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e;return tg`
      <div
        part="form-control"
        class=${eo({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${eo({textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${this.name??t_}
              .value=${er(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${this.placeholder??t_}
              rows=${this.rows??t_}
              minlength=${this.minlength??t_}
              maxlength=${this.maxlength??t_}
              autocapitalize=${this.autocapitalize??t_}
              autocorrect=${this.autocorrect??t_}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck??t_}
              enterkeyhint=${this.enterkeyhint??t_}
              inputmode=${this.inputmode??t_}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${"auto"!==this.resize}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};i9.styles=[tQ,tN,i8],g([t5(".textarea__control")],i9.prototype,"input",2),g([t5(".textarea__size-adjuster")],i9.prototype,"sizeAdjuster",2),g([t0()],i9.prototype,"hasFocus",2),g([tJ()],i9.prototype,"title",2),g([tJ()],i9.prototype,"name",2),g([tJ()],i9.prototype,"value",2),g([tJ({reflect:!0})],i9.prototype,"size",2),g([tJ({type:Boolean,reflect:!0})],i9.prototype,"filled",2),g([tJ()],i9.prototype,"label",2),g([tJ({attribute:"help-text"})],i9.prototype,"helpText",2),g([tJ()],i9.prototype,"placeholder",2),g([tJ({type:Number})],i9.prototype,"rows",2),g([tJ()],i9.prototype,"resize",2),g([tJ({type:Boolean,reflect:!0})],i9.prototype,"disabled",2),g([tJ({type:Boolean,reflect:!0})],i9.prototype,"readonly",2),g([tJ({reflect:!0})],i9.prototype,"form",2),g([tJ({type:Boolean,reflect:!0})],i9.prototype,"required",2),g([tJ({type:Number})],i9.prototype,"minlength",2),g([tJ({type:Number})],i9.prototype,"maxlength",2),g([tJ()],i9.prototype,"autocapitalize",2),g([tJ()],i9.prototype,"autocorrect",2),g([tJ()],i9.prototype,"autocomplete",2),g([tJ({type:Boolean})],i9.prototype,"autofocus",2),g([tJ()],i9.prototype,"enterkeyhint",2),g([tJ({type:Boolean,converter:{fromAttribute:t=>!!t&&"false"!==t,toAttribute:t=>t?"true":"false"}})],i9.prototype,"spellcheck",2),g([tJ()],i9.prototype,"inputmode",2),g([tH()],i9.prototype,"defaultValue",2),g([tG("disabled",{waitUntilFirstUpdate:!0})],i9.prototype,"handleDisabledChange",1),g([tG("rows",{waitUntilFirstUpdate:!0})],i9.prototype,"handleRowsChange",1),g([tG("value",{waitUntilFirstUpdate:!0})],i9.prototype,"handleValueChange",1),i9.define("sl-textarea");var ot=O`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,oe=0,oi=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.attrId=++oe,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,tg`
      <div
        part="base"
        class=${eo({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?tg`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};oi.styles=[tQ,ot],oi.dependencies={"sl-icon-button":i4},g([t5(".tab")],oi.prototype,"tab",2),g([tJ({reflect:!0})],oi.prototype,"panel",2),g([tJ({type:Boolean,reflect:!0})],oi.prototype,"active",2),g([tJ({type:Boolean,reflect:!0})],oi.prototype,"closable",2),g([tJ({type:Boolean,reflect:!0})],oi.prototype,"disabled",2),g([tJ({type:Number,reflect:!0})],oi.prototype,"tabIndex",2),g([tG("active")],oi.prototype,"handleActiveChange",1),g([tG("disabled")],oi.prototype,"handleDisabledChange",1),oi.define("sl-tab");var oo=O`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,or=O`
  :host {
    display: contents;
  }
`,os=class extends t3{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let t=this.shadowRoot.querySelector("slot");if(null!==t){let e=t.assignedElements({flatten:!0});this.observedElements.forEach(t=>this.resizeObserver.unobserve(t)),this.observedElements=[],e.forEach(t=>{this.resizeObserver.observe(t),this.observedElements.push(t)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return tg` <slot @slotchange=${this.handleSlotChange}></slot> `}};os.styles=[tQ,or],g([tJ({type:Boolean,reflect:!0})],os.prototype,"disabled",2),g([tG("disabled",{waitUntilFirstUpdate:!0})],os.prototype,"handleDisabledChange",1);var oa=new Set;function ol(t){if(oa.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){let t=function(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}()+function(){let t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}(),e=getComputedStyle(document.documentElement).scrollbarGutter;e&&"auto"!==e||(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function on(t){oa.delete(t),0===oa.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function od(t,e,i="vertical",o="smooth"){let r={top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)},s=r.top+e.scrollTop,a=r.left+e.scrollLeft,l=e.scrollLeft,n=e.scrollLeft+e.offsetWidth,d=e.scrollTop,c=e.scrollTop+e.offsetHeight;("horizontal"===i||"both"===i)&&(a<l?e.scrollTo({left:a,behavior:o}):a+t.clientWidth>n&&e.scrollTo({left:a-e.offsetWidth+t.clientWidth,behavior:o})),("vertical"===i||"both"===i)&&(s<d?e.scrollTo({top:s,behavior:o}):s+t.clientHeight>c&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:o}))}var oc=class extends t3{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new eb(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){let t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{let e=t.filter(({target:t})=>{if(t===this)return!0;if(t.closest("sl-tab-group")!==this)return!1;let e=t.tagName.toLowerCase();return"sl-tab"===e||"sl-tab-panel"===e});if(0!==e.length){if(e.some(t=>!["aria-labelledby","aria-controls"].includes(t.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(t=>"disabled"===t.attributeName))this.syncTabsAndPanels();else if(e.some(t=>"active"===t.attributeName)){let t=e.filter(t=>"active"===t.attributeName&&"sl-tab"===t.target.tagName.toLowerCase()).map(t=>t.target).find(t=>t.active);t&&this.setActiveTab(t)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((t,e)=>{var i;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(null!=(i=this.getActiveTab())?i:this.tabs[0],{emitEvents:!1}),e.unobserve(t[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect(),this.nav&&(null==(e=this.resizeObserver)||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>"sl-tab-panel"===t.tagName.toLowerCase())}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){let e=t.target.closest("sl-tab");(null==e?void 0:e.closest("sl-tab-group"))===this&&null!==e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){let e=t.target.closest("sl-tab");if((null==e?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&null!==e&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){let e=this.tabs.find(t=>t.matches(":focus")),i="rtl"===this.localize.dir(),o=null;if((null==e?void 0:e.tagName.toLowerCase())==="sl-tab"){if("Home"===t.key)o=this.focusableTabs[0];else if("End"===t.key)o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&"ArrowUp"===t.key){let t=this.tabs.findIndex(t=>t===e);o=this.findNextFocusableTab(t,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&"ArrowDown"===t.key){let t=this.tabs.findIndex(t=>t===e);o=this.findNextFocusableTab(t,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),"auto"===this.activation?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach(t=>{t.tabIndex=t===o?0:-1}),["top","bottom"].includes(this.placement)&&od(o,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=m({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){let i=this.activeTab;this.activeTab=t,this.tabs.forEach(t=>{t.active=t===this.activeTab,t.tabIndex=t===this.activeTab?0:-1}),this.panels.forEach(t=>{var e;return t.active=t.name===(null==(e=this.activeTab)?void 0:e.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&od(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{let e=this.panels.find(e=>e.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){let t=this.getActiveTab();if(!t)return;let e=t.clientWidth,i=t.clientHeight,o="rtl"===this.localize.dir(),r=this.getAllTabs(),s=r.slice(0,r.indexOf(t)).reduce((t,e)=>({left:t.left+e.clientWidth,top:t.top+e.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=o?`${-1*s.left}px`:`${s.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${s.top}px`}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let i=null,o="forward"===e?1:-1,r=t+o;for(;t<this.tabs.length;){if(null===(i=this.tabs[r]||null)){i="forward"===e?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;r+=o}return i}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return"rtl"===this.localize.dir()?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){let e=this.tabs.find(e=>e.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){let t="rtl"===this.localize.dir();return tg`
      <div
        part="base"
        class=${eo({"tab-group":!0,"tab-group--top":"top"===this.placement,"tab-group--bottom":"bottom"===this.placement,"tab-group--start":"start"===this.placement,"tab-group--end":"end"===this.placement,"tab-group--rtl":"rtl"===this.localize.dir(),"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?tg`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${eo({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?tg`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${eo({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};oc.styles=[tQ,oo],oc.dependencies={"sl-icon-button":i4,"sl-resize-observer":os},g([t5(".tab-group")],oc.prototype,"tabGroup",2),g([t5(".tab-group__body")],oc.prototype,"body",2),g([t5(".tab-group__nav")],oc.prototype,"nav",2),g([t5(".tab-group__indicator")],oc.prototype,"indicator",2),g([t0()],oc.prototype,"hasScrollControls",2),g([t0()],oc.prototype,"shouldHideScrollStartButton",2),g([t0()],oc.prototype,"shouldHideScrollEndButton",2),g([tJ()],oc.prototype,"placement",2),g([tJ()],oc.prototype,"activation",2),g([tJ({attribute:"no-scroll-controls",type:Boolean})],oc.prototype,"noScrollControls",2),g([tJ({attribute:"fixed-scroll-controls",type:Boolean})],oc.prototype,"fixedScrollControls",2),g([t1({passive:!0})],oc.prototype,"updateScrollButtons",1),g([tG("noScrollControls",{waitUntilFirstUpdate:!0})],oc.prototype,"updateScrollControls",1),g([tG("placement",{waitUntilFirstUpdate:!0})],oc.prototype,"syncIndicator",1),oc.define("sl-tab-group");var oh=O`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,op=class extends t3{constructor(){super(...arguments),this.effect="none"}render(){return tg`
      <div
        part="base"
        class=${eo({skeleton:!0,"skeleton--pulse":"pulse"===this.effect,"skeleton--sheen":"sheen"===this.effect})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};op.styles=[tQ,oh],g([tJ()],op.prototype,"effect",2),op.define("sl-skeleton");var ou=O`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function of(t,e){function i(i){let o=t.getBoundingClientRect(),r=t.ownerDocument.defaultView,s=o.left+r.scrollX,a=o.top+r.scrollY,l=i.pageX-s,n=i.pageY-a;(null==e?void 0:e.onMove)&&e.onMove(l,n)}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",function t(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",t),(null==e?void 0:e.onStop)&&e.onStop()}),(null==e?void 0:e.initialEvent)instanceof PointerEvent&&i(e.initialEvent)}var om=()=>null,ob=class extends t3{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new eb(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=om,this.snapThreshold=12}toSnapFunction(t){let e=t.split(" ");return({pos:i,size:o,snapThreshold:r,isRtl:s,vertical:a})=>{let l=i,n=1/0;return e.forEach(e=>{let d;if(e.startsWith("repeat(")){let e=t.substring(7,t.length-1),r=e.endsWith("%"),l=Number.parseFloat(e),n=r?l/100*o:l;d=Math.round((s&&!a?o-i:i)/n)*n}else d=e.endsWith("%")?o*(Number.parseFloat(e)/100):Number.parseFloat(e);s&&!a&&(d=o-d);let c=Math.abs(i-d);c<=r&&c<n&&(l=d,n=c)}),l}}set snap(t){this.snapValue=null!=t?t:"",t?this.snapFunction="string"==typeof t?this.toSnapFunction(t):t:this.snapFunction=om}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.resizeObserver)||t.unobserve(this)}detectSize(){let{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){let e="rtl"===this.localize.dir();this.disabled||(t.cancelable&&t.preventDefault(),of(this,{onMove:(t,i)=>{var o;let r=this.vertical?i:t;"end"===this.primary&&(r=this.size-r),r=null!=(o=this.snapFunction({pos:r,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))?o:r,this.position=iq(this.pixelsToPercentage(r),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position,i=(t.shiftKey?10:1)*("end"===this.primary?-1:1);if(t.preventDefault(),("ArrowLeft"===t.key&&!this.vertical||"ArrowUp"===t.key&&this.vertical)&&(e-=i),("ArrowRight"===t.key&&!this.vertical||"ArrowDown"===t.key&&this.vertical)&&(e+=i),"Home"===t.key&&(e=100*("end"===this.primary)),"End"===t.key&&(e=100*("end"!==this.primary)),"Enter"===t.key)if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{let t=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=t})}this.position=iq(e,0,100)}}handleResize(t){let{width:e,height:i}=t[0].contentRect;this.size=this.vertical?i:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){let t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",i="rtl"===this.localize.dir(),o=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return"end"===this.primary?i&&!this.vertical?this.style[t]=`${o} var(--divider-width) ${r}`:this.style[t]=`${r} var(--divider-width) ${o}`:i&&!this.vertical?this.style[t]=`${r} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${r}`,this.style[e]="",tg`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${(this.disabled?void 0:"0")??t_}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};ob.styles=[tQ,ou],g([t5(".divider")],ob.prototype,"divider",2),g([tJ({type:Number,reflect:!0})],ob.prototype,"position",2),g([tJ({attribute:"position-in-pixels",type:Number})],ob.prototype,"positionInPixels",2),g([tJ({type:Boolean,reflect:!0})],ob.prototype,"vertical",2),g([tJ({type:Boolean,reflect:!0})],ob.prototype,"disabled",2),g([tJ()],ob.prototype,"primary",2),g([tJ({reflect:!0})],ob.prototype,"snap",1),g([tJ({type:Number,attribute:"snap-threshold"})],ob.prototype,"snapThreshold",2),g([tG("position")],ob.prototype,"handlePositionChange",1),g([tG("positionInPixels")],ob.prototype,"handlePositionInPixelsChange",1),g([tG("vertical")],ob.prototype,"handleVerticalChange",1),ob.define("sl-split-panel");var og=O`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,ov=class extends t3{constructor(){super(...arguments),this.formControlController=new $(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new tU(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return tg`
      <div
        class=${eo({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${eo({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":"small"===this.size,"switch--medium":"medium"===this.size,"switch--large":"large"===this.size})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${this.value??t_}
            .checked=${er(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ov.styles=[tQ,tN,og],g([t5('input[type="checkbox"]')],ov.prototype,"input",2),g([t0()],ov.prototype,"hasFocus",2),g([tJ()],ov.prototype,"title",2),g([tJ()],ov.prototype,"name",2),g([tJ()],ov.prototype,"value",2),g([tJ({reflect:!0})],ov.prototype,"size",2),g([tJ({type:Boolean,reflect:!0})],ov.prototype,"disabled",2),g([tJ({type:Boolean,reflect:!0})],ov.prototype,"checked",2),g([tH("checked")],ov.prototype,"defaultChecked",2),g([tJ({reflect:!0})],ov.prototype,"form",2),g([tJ({type:Boolean,reflect:!0})],ov.prototype,"required",2),g([tJ({attribute:"help-text"})],ov.prototype,"helpText",2),g([tG("checked",{waitUntilFirstUpdate:!0})],ov.prototype,"handleCheckedChange",1),g([tG("disabled",{waitUntilFirstUpdate:!0})],ov.prototype,"handleDisabledChange",1),ov.define("sl-switch"),os.define("sl-resize-observer");var oy=O`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;class ow extends ei{constructor(t){if(super(t),this.it=t_,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===t_||null==t)return this._t=void 0,this.it=t;if(t===tw)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ow.directiveName="unsafeHTML",ow.resultType=1;const o_=ee(ow);var ox=class extends t3{constructor(){super(...arguments),this.formControlController=new $(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new tU(this,"help-text","label"),this.localize=new eb(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>tg`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{let e=t.target,i=null!==e.closest(".select__clear"),o=null!==e.closest("sl-icon-button");if(!i&&!o){if("Escape"===t.key&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===t.key||" "===t.key&&""===this.typeToSelectString)return(t.preventDefault(),t.stopImmediatePropagation(),this.open)?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=this.getAllOptions(),i=e.indexOf(this.currentOption),o=Math.max(0,i);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===t.key?(o=i+1)>e.length-1&&(o=0):"ArrowUp"===t.key?(o=i-1)<0&&(o=e.length-1):"Home"===t.key?o=0:"End"===t.key&&(o=e.length-1),this.setCurrentOption(e[o])}if(t.key&&1===t.key.length||"Backspace"===t.key){let e=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if("Backspace"===t.key)return;this.show()}for(let i of(t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),"Backspace"===t.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase(),e))if(i.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(i);break}}}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){t=this.multiple?Array.isArray(t)?t:t.split(" "):Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(t=this.closeWatcher)||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){let e=t.composedPath().some(t=>t instanceof Element&&"sl-icon-button"===t.tagName.toLowerCase());this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){"Tab"!==t.key&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){let e=t.target.closest("sl-option"),i=this.value;e&&!e.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());let t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(e)?e:[e],o=[];t.forEach(t=>o.push(t.value)),this.setSelectedOptions(t.filter(t=>i.includes(t.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(t=>{t.current=!1,t.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){let e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(t=>t.selected=!1),i.length&&i.forEach(t=>t.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){!0===e||!1===e?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i;let o=this.getAllOptions();this.selectedOptions=o.filter(t=>t.selected);let r=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(t=>t.value),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{let o=this.selectedOptions[0];this.value=null!=(t=null==o?void 0:o.value)?t:"",this.displayLabel=null!=(i=null==(e=null==o?void 0:o.getTextLabel)?void 0:e.call(o))?i:""}this.valueHasChanged=r,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){let i=this.getTag(t,e);return tg`<div @sl-remove=${e=>this.handleTagRemove(e,t)}>
          ${"string"==typeof i?o_(i):i}
        </div>`}return e===this.maxOptionsVisible?tg`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`:tg``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"value"===t){let t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}}handleValueChange(){if(!this.valueHasChanged){let t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}let t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(t=>e.includes(t.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ez(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:t,options:e}=ex(this,"select.show",{dir:this.localize.dir()});await ek(this.popup.popup,t,e),this.currentOption&&od(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ez(this);let{keyframes:t,options:e}=ex(this,"select.hide",{dir:this.localize.dir()});await ek(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,iH(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,iH(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e,r=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&this.value&&this.value.length<=0;return tg`
      <div
        part="form-control"
        class=${eo({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${eo({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":s,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?tg`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${r?tg`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ox.styles=[tQ,tN,oy],ox.dependencies={"sl-icon":et,"sl-popup":iB,"sl-tag":i7},g([t5(".select")],ox.prototype,"popup",2),g([t5(".select__combobox")],ox.prototype,"combobox",2),g([t5(".select__display-input")],ox.prototype,"displayInput",2),g([t5(".select__value-input")],ox.prototype,"valueInput",2),g([t5(".select__listbox")],ox.prototype,"listbox",2),g([t0()],ox.prototype,"hasFocus",2),g([t0()],ox.prototype,"displayLabel",2),g([t0()],ox.prototype,"currentOption",2),g([t0()],ox.prototype,"selectedOptions",2),g([t0()],ox.prototype,"valueHasChanged",2),g([tJ()],ox.prototype,"name",2),g([t0()],ox.prototype,"value",1),g([tJ({attribute:"value"})],ox.prototype,"defaultValue",2),g([tJ({reflect:!0})],ox.prototype,"size",2),g([tJ()],ox.prototype,"placeholder",2),g([tJ({type:Boolean,reflect:!0})],ox.prototype,"multiple",2),g([tJ({attribute:"max-options-visible",type:Number})],ox.prototype,"maxOptionsVisible",2),g([tJ({type:Boolean,reflect:!0})],ox.prototype,"disabled",2),g([tJ({type:Boolean})],ox.prototype,"clearable",2),g([tJ({type:Boolean,reflect:!0})],ox.prototype,"open",2),g([tJ({type:Boolean})],ox.prototype,"hoist",2),g([tJ({type:Boolean,reflect:!0})],ox.prototype,"filled",2),g([tJ({type:Boolean,reflect:!0})],ox.prototype,"pill",2),g([tJ()],ox.prototype,"label",2),g([tJ({reflect:!0})],ox.prototype,"placement",2),g([tJ({attribute:"help-text"})],ox.prototype,"helpText",2),g([tJ({reflect:!0})],ox.prototype,"form",2),g([tJ({type:Boolean,reflect:!0})],ox.prototype,"required",2),g([tJ()],ox.prototype,"getTag",2),g([tG("disabled",{waitUntilFirstUpdate:!0})],ox.prototype,"handleDisabledChange",1),g([tG(["defaultValue","value"],{waitUntilFirstUpdate:!0})],ox.prototype,"handleValueChange",1),g([tG("open",{waitUntilFirstUpdate:!0})],ox.prototype,"handleOpenChange",1),e_("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),e_("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),ox.define("sl-select"),eg.define("sl-spinner");var ok=O`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,oC=class extends t3{constructor(){super(...arguments),this.formControlController=new $(this),this.hasSlotController=new tU(this,"help-text","label"),this.localize=new eb(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.resizeObserver)||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${100*t}%`)}syncTooltip(t){if(null!==this.output){let e=this.input.offsetWidth,i=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r="rtl"===this.localize.dir(),s=e*t;if(r){let r=`${e-s}px + ${t} * ${o}`;this.output.style.translate=`calc((${r} - ${i/2}px - ${o} / 2))`}else{let e=`${s}px - ${t} * ${o}`;this.output.style.translate=`calc(${e} - ${i/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){let t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),"none"!==this.tooltip&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e;return tg`
      <div
        part="form-control"
        class=${eo({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${eo({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":"rtl"===this.localize.dir(),"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${this.name??t_}
              ?disabled=${this.disabled}
              min=${this.min??t_}
              max=${this.max??t_}
              step=${this.step??t_}
              .value=${er(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${"none"!==this.tooltip&&!this.disabled?tg`
                  <output part="tooltip" class="range__tooltip">
                    ${"function"==typeof this.tooltipFormatter?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};oC.styles=[tQ,tN,ok],g([t5(".range__control")],oC.prototype,"input",2),g([t5(".range__tooltip")],oC.prototype,"output",2),g([t0()],oC.prototype,"hasFocus",2),g([t0()],oC.prototype,"hasTooltip",2),g([tJ()],oC.prototype,"title",2),g([tJ()],oC.prototype,"name",2),g([tJ({type:Number})],oC.prototype,"value",2),g([tJ()],oC.prototype,"label",2),g([tJ({attribute:"help-text"})],oC.prototype,"helpText",2),g([tJ({type:Boolean,reflect:!0})],oC.prototype,"disabled",2),g([tJ({type:Number})],oC.prototype,"min",2),g([tJ({type:Number})],oC.prototype,"max",2),g([tJ({type:Number})],oC.prototype,"step",2),g([tJ()],oC.prototype,"tooltip",2),g([tJ({attribute:!1})],oC.prototype,"tooltipFormatter",2),g([tJ({reflect:!0})],oC.prototype,"form",2),g([tH()],oC.prototype,"defaultValue",2),g([t1({passive:!0})],oC.prototype,"handleThumbDragStart",1),g([tG("value",{waitUntilFirstUpdate:!0})],oC.prototype,"handleValueChange",1),g([tG("disabled",{waitUntilFirstUpdate:!0})],oC.prototype,"handleDisabledChange",1),g([tG("hasTooltip",{waitUntilFirstUpdate:!0})],oC.prototype,"syncRange",1),oC.define("sl-range");var o$=O`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;const oz="important",oS=" !"+oz,oA=ee(class extends ei{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{let o=t[i];return null==o?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){let{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(let t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(let t in e){let o=e[t];if(null!=o){this.ft.add(t);let e="string"==typeof o&&o.endsWith(oS);t.includes("-")||e?i.setProperty(t,e?o.slice(0,-11):o,e?oz:""):i[t]=o}}return tw}});var oE=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){let e="rtl"===this.localize.dir(),{left:i,right:o,width:r}=this.rating.getBoundingClientRect();return iq(e?this.roundToPrecision((o-t)/r*this.max,this.precision):this.roundToPrecision((t-i)/r*this.max,this.precision),0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){let e="ltr"===this.localize.dir(),i="rtl"===this.localize.dir(),o=this.value;if(!this.disabled&&!this.readonly){if("ArrowDown"===t.key||e&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key){let e=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-e),t.preventDefault()}if("ArrowUp"===t.key||e&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key){let e=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+e),t.preventDefault()}"Home"===t.key&&(this.value=0,t.preventDefault()),"End"===t.key&&(this.value=this.max,t.preventDefault()),this.value!==o&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){let i=1/e;return Math.ceil(t*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){let t="rtl"===this.localize.dir(),e=Array.from(Array(this.max).keys()),i=0;return i=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,tg`
      <div
        part="base"
        class=${eo({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map(e=>i>e&&i<e+1?tg`
                <span
                  class=${eo({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===e+1})}
                  role="presentation"
                >
                  <div
                    style=${oA({clipPath:t?`inset(0 ${(i-e)*100}% 0 0)`:`inset(0 0 0 ${(i-e)*100}%)`})}
                  >
                    ${o_(this.getSymbol(e+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${oA({clipPath:t?`inset(0 0 0 ${100-(i-e)*100}%)`:`inset(0 ${100-(i-e)*100}% 0 0)`})}
                  >
                    ${o_(this.getSymbol(e+1))}
                  </div>
                </span>
              `:tg`
              <span
                class=${eo({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===e+1,"rating__symbol--active":i>=e+1})}
                role="presentation"
              >
                ${o_(this.getSymbol(e+1))}
              </span>
            `)}
        </span>
      </div>
    `}};oE.styles=[tQ,o$],oE.dependencies={"sl-icon":et},g([t5(".rating")],oE.prototype,"rating",2),g([t0()],oE.prototype,"hoverValue",2),g([t0()],oE.prototype,"isHovering",2),g([tJ()],oE.prototype,"label",2),g([tJ({type:Number})],oE.prototype,"value",2),g([tJ({type:Number})],oE.prototype,"max",2),g([tJ({type:Number})],oE.prototype,"precision",2),g([tJ({type:Boolean,reflect:!0})],oE.prototype,"readonly",2),g([tJ({type:Boolean,reflect:!0})],oE.prototype,"disabled",2),g([tJ()],oE.prototype,"getSymbol",2),g([t1({passive:!0})],oE.prototype,"handleTouchMove",1),g([tG("hoverValue")],oE.prototype,"handleHoverValueChange",1),g([tG("isHovering")],oE.prototype,"handleIsHoveringChange",1),oE.define("sl-rating");var oT=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],oD=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){let t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";let i=e.getTime()-t.getTime(),{unit:o,value:r}=oT.find(t=>Math.abs(i)<t.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/r),o,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let t;t="minute"===o?oL("second"):"hour"===o?oL("minute"):"day"===o?oL("hour"):oL("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),t)}return tg` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};function oL(t){let e={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return e-Date.now()%e}g([t0()],oD.prototype,"isoTime",2),g([t0()],oD.prototype,"relativeTime",2),g([tJ()],oD.prototype,"date",2),g([tJ()],oD.prototype,"format",2),g([tJ()],oD.prototype,"numeric",2),g([tJ({type:Boolean})],oD.prototype,"sync",2),oD.define("sl-relative-time");var oI=O`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,oO=O`
  ${oI}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,oM=class extends t3{constructor(){super(...arguments),this.hasSlotController=new tU(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return i6`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${eo({button:!0,"button--default":!0,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${this.value??t_}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};oM.styles=[tQ,oO],g([t5(".button")],oM.prototype,"input",2),g([t5(".hidden-input")],oM.prototype,"hiddenInput",2),g([t0()],oM.prototype,"hasFocus",2),g([tJ({type:Boolean,reflect:!0})],oM.prototype,"checked",2),g([tJ()],oM.prototype,"value",2),g([tJ({type:Boolean,reflect:!0})],oM.prototype,"disabled",2),g([tJ({reflect:!0})],oM.prototype,"size",2),g([tJ({type:Boolean,reflect:!0})],oM.prototype,"pill",2),g([tG("disabled",{waitUntilFirstUpdate:!0})],oM.prototype,"handleDisabledChange",1),oM.define("sl-radio-button");var oP=O`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,oF=O`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,oV=class extends t3{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){let e=oR(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){let e=oR(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){let e=oR(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){let e=oR(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{let i=t.indexOf(e),o=oR(e);o&&(o.toggleAttribute("data-sl-button-group__button",!0),o.toggleAttribute("data-sl-button-group__button--first",0===i),o.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<t.length-1),o.toggleAttribute("data-sl-button-group__button--last",i===t.length-1),o.toggleAttribute("data-sl-button-group__button--radio","sl-radio-button"===o.tagName.toLowerCase()))})}render(){return tg`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};function oR(t){var e;let i="sl-button, sl-radio-button";return null!=(e=t.closest(i))?e:t.querySelector(i)}oV.styles=[tQ,oF],g([t5("slot")],oV.prototype,"defaultSlot",2),g([t0()],oV.prototype,"disableRole",2),g([tJ()],oV.prototype,"label",2);var oB=class extends t3{constructor(){super(...arguments),this.formControlController=new $(this),this.hasSlotController=new tU(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){let t=this.required&&!this.value;return""!==this.customValidityMessage?A:t?S:z}get validationMessage(){let t=this.required&&!this.value;return""!==this.customValidityMessage?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){let e=t.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),o=this.value;e&&!e.disabled&&(this.value=e.value,i.forEach(t=>t.checked=t===e),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;let i=this.getAllRadios().filter(t=>!t.disabled),o=null!=(e=i.find(t=>t.checked))?e:i[0],r=" "===t.key?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,s=this.value,a=i.indexOf(o)+r;a<0&&(a=i.length-1),a>i.length-1&&(a=0),this.getAllRadios().forEach(t=>{t.checked=!1,this.hasButtonGroup||t.setAttribute("tabindex","-1")}),this.value=i[a].value,i[a].checked=!0,this.hasButtonGroup?i[a].shadowRoot.querySelector("button").focus():(i[a].setAttribute("tabindex","0"),i[a].focus()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;let i=this.getAllRadios();if(await Promise.all(i.map(async t=>{await t.updateComplete,t.checked=t.value===this.value,t.size=this.size})),this.hasButtonGroup=i.some(t=>"sl-radio-button"===t.tagName.toLowerCase()),i.length>0&&!i.some(t=>t.checked))if(this.hasButtonGroup){let e=null==(t=i[0].shadowRoot)?void 0:t.querySelector("button");e&&e.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){let t=null==(e=this.shadowRoot)?void 0:e.querySelector("sl-button-group");t&&(t.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button"))return void this.syncRadioElements();customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let t=this.required&&!this.value,e=""!==this.customValidityMessage;return!t&&!e||(this.formControlController.emitInvalidEvent(),!1)}getForm(){return this.formControlController.getForm()}reportValidity(){let t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){let e=this.getAllRadios(),i=e.find(t=>t.checked),o=e.find(t=>!t.disabled),r=i||o;r&&r.focus(t)}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e,r=tg`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return tg`
      <fieldset
        part="form-control"
        class=${eo({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?tg`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${r}
                </sl-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};oB.styles=[tQ,tN,oP],oB.dependencies={"sl-button-group":oV},g([t5("slot:not([name])")],oB.prototype,"defaultSlot",2),g([t5(".radio-group__validation-input")],oB.prototype,"validationInput",2),g([t0()],oB.prototype,"hasButtonGroup",2),g([t0()],oB.prototype,"errorMessage",2),g([t0()],oB.prototype,"defaultValue",2),g([tJ()],oB.prototype,"label",2),g([tJ({attribute:"help-text"})],oB.prototype,"helpText",2),g([tJ()],oB.prototype,"name",2),g([tJ({reflect:!0})],oB.prototype,"value",2),g([tJ({reflect:!0})],oB.prototype,"size",2),g([tJ({reflect:!0})],oB.prototype,"form",2),g([tJ({type:Boolean,reflect:!0})],oB.prototype,"required",2),g([tG("size",{waitUntilFirstUpdate:!0})],oB.prototype,"handleSizeChange",1),g([tG("value")],oB.prototype,"handleValueChange",1),oB.define("sl-radio-group");var oH=O`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,oN=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){let t=2*Math.PI*parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),e=t-this.value/100*t;this.indicatorOffset=`${e}px`}}render(){return tg`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};oN.styles=[tQ,oH],g([t5(".progress-ring__indicator")],oN.prototype,"indicator",2),g([t0()],oN.prototype,"indicatorOffset",2),g([tJ({type:Number,reflect:!0})],oN.prototype,"value",2),g([tJ()],oN.prototype,"label",2),oN.define("sl-progress-ring");var oU=O`
  :host {
    display: inline-block;
  }
`;let oq=null;class oj{}oj.render=function(t,e){oq(t,e)},self.QrCreator=oj;var oW=function(){function t(i,s){function l(t,e){for(var i=-1;7>=i;i+=1)if(!(-1>=t+i||h<=t+i))for(var o=-1;7>=o;o+=1)-1>=e+o||h<=e+o||(c[t+i][e+o]=0<=i&&6>=i&&(0==o||6==o)||0<=o&&6>=o&&(0==i||6==i)||2<=i&&4>=i&&2<=o&&4>=o)}function n(t,o){for(var s=h=4*i+17,n=Array(s),f=0;f<s;f+=1){n[f]=Array(s);for(var m=0;m<s;m+=1)n[f][m]=null}for(c=n,l(0,0),l(h-7,0),l(0,h-7),s=r.G(i),n=0;n<s.length;n+=1)for(f=0;f<s.length;f+=1){m=s[n];var b=s[f];if(null==c[m][b])for(var g=-2;2>=g;g+=1)for(var v=-2;2>=v;v+=1)c[m+g][b+v]=-2==g||2==g||-2==v||2==v||0==g&&0==v}for(s=8;s<h-8;s+=1)null==c[s][6]&&(c[s][6]=0==s%2);for(s=8;s<h-8;s+=1)null==c[6][s]&&(c[6][s]=0==s%2);for(n=0,s=r.w(d<<3|o);15>n;n+=1)f=!t&&1==(s>>n&1),c[6>n?n:8>n?n+1:h-15+n][8]=f,c[8][8>n?h-n-1:9>n?15-n:14-n]=f;if(c[h-8][8]=!t,7<=i){for(n=0,s=r.A(i);18>n;n+=1)f=!t&&1==(s>>n&1),c[Math.floor(n/3)][n%3+h-8-3]=f;for(n=0;18>n;n+=1)f=!t&&1==(s>>n&1),c[n%3+h-8-3][Math.floor(n/3)]=f}if(null==p){for(t=a.I(i,d),y=[],w=0,s=_={B:function(){return y},c:function(t){return 1==(y[Math.floor(t/8)]>>>7-t%8&1)},put:function(t,e){for(var i=0;i<e;i+=1)_.m(1==(t>>>e-i-1&1))},f:function(){return w},m:function(t){var e=Math.floor(w/8);y.length<=e&&y.push(0),t&&(y[e]|=128>>>w%8),w+=1}},n=0;n<u.length;n+=1)f=u[n],s.put(4,4),s.put(f.b(),r.f(4,i)),f.write(s);for(n=f=0;n<t.length;n+=1)f+=t[n].j;if(s.f()>8*f)throw Error("code length overflow. ("+s.f()+">"+8*f+")");for(s.f()+4<=8*f&&s.put(0,4);0!=s.f()%8;)s.m(!1);for(;!(s.f()>=8*f)&&(s.put(236,8),!(s.f()>=8*f));)s.put(17,8);var y,w,_,x=0;for(g=0,f=n=0,m=Array(t.length),b=Array(t.length);g<t.length;g+=1){var k=t[g].j,C=t[g].o-k;for(v=0,n=Math.max(n,k),f=Math.max(f,C),m[g]=Array(k);v<m[g].length;v+=1)m[g][v]=255&s.B()[v+x];for(x+=k,v=r.C(C),k=e(m[g],v.b()-1).l(v),b[g]=Array(v.b()-1),v=0;v<b[g].length;v+=1)C=v+k.b()-b[g].length,b[g][v]=0<=C?k.c(C):0}for(v=s=0;v<t.length;v+=1)s+=t[v].o;for(s=Array(s),v=x=0;v<n;v+=1)for(g=0;g<t.length;g+=1)v<m[g].length&&(s[x]=m[g][v],x+=1);for(v=0;v<f;v+=1)for(g=0;g<t.length;g+=1)v<b[g].length&&(s[x]=b[g][v],x+=1);p=s}for(t=p,s=-1,n=h-1,f=7,m=0,o=r.F(o),b=h-1;0<b;b-=2)for(6==b&&--b;;){for(g=0;2>g;g+=1)null==c[n][b-g]&&(v=!1,m<t.length&&(v=1==(t[m]>>>f&1)),o(n,b-g)&&(v=!v),c[n][b-g]=v,-1==--f&&(m+=1,f=7));if(0>(n+=s)||h<=n){n-=s,s=-s;break}}}var d=o[s],c=null,h=0,p=null,u=[],f={u:function(e){var i,o;i=e,o=t.s(i),e={S:function(){return 4},b:function(){return o.length},write:function(t){for(var e=0;e<o.length;e+=1)t.put(o[e],8)}},u.push(e),p=null},a:function(t,e){if(0>t||h<=t||0>e||h<=e)throw Error(t+","+e);return c[t][e]},h:function(){return h},J:function(){for(var t=0,e=0,i=0;8>i;i+=1){n(!0,i);var o=r.D(f);(0==i||t>o)&&(t=o,e=i)}n(!1,e)}};return f}function e(t,i){if(void 0===t.length)throw Error(t.length+"/"+i);var o=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var o=Array(t.length-e+i),r=0;r<t.length-e;r+=1)o[r]=t[r+e];return o}(),r={c:function(t){return o[t]},b:function(){return o.length},multiply:function(t){for(var i=Array(r.b()+t.b()-1),o=0;o<r.b();o+=1)for(var a=0;a<t.b();a+=1)i[o+a]^=s.i(s.g(r.c(o))+s.g(t.c(a)));return e(i,0)},l:function(t){if(0>r.b()-t.b())return r;for(var i=s.g(r.c(0))-s.g(t.c(0)),o=Array(r.b()),a=0;a<r.b();a+=1)o[a]=r.c(a);for(a=0;a<t.b();a+=1)o[a]^=s.i(s.g(t.c(a))+i);return e(o,0).l(t)}};return r}t.s=function(t){for(var e=[],i=0;i<t.length;i++){var o=t.charCodeAt(i);128>o?e.push(o):2048>o?e.push(192|o>>6,128|63&o):55296>o||57344<=o?e.push(224|o>>12,128|o>>6&63,128|63&o):(i++,o=65536+((1023&o)<<10|1023&t.charCodeAt(i)),e.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|63&o))}return e};var i,o={L:1,M:0,Q:3,H:2},r=function(){function t(t){for(var e=0;0!=t;)e+=1,t>>>=1;return e}var i=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]];return{w:function(e){for(var i=e<<10;0<=t(i)-t(1335);)i^=1335<<t(i)-t(1335);return(e<<10|i)^21522},A:function(e){for(var i=e<<12;0<=t(i)-t(7973);)i^=7973<<t(i)-t(7973);return e<<12|i},G:function(t){return i[t-1]},F:function(t){switch(t){case 0:return function(t,e){return 0==(t+e)%2};case 1:return function(t){return 0==t%2};case 2:return function(t,e){return 0==e%3};case 3:return function(t,e){return 0==(t+e)%3};case 4:return function(t,e){return 0==(Math.floor(t/2)+Math.floor(e/3))%2};case 5:return function(t,e){return 0==t*e%2+t*e%3};case 6:return function(t,e){return 0==(t*e%2+t*e%3)%2};case 7:return function(t,e){return 0==(t*e%3+(t+e)%2)%2};default:throw Error("bad maskPattern:"+t)}},C:function(t){for(var i=e([1],0),o=0;o<t;o+=1)i=i.multiply(e([1,s.i(o)],0));return i},f:function(t,e){if(4!=t||1>e||40<e)throw Error("mode: "+t+"; type: "+e);return 10>e?8:16},D:function(t){for(var e=t.h(),i=0,o=0;o<e;o+=1)for(var r=0;r<e;r+=1){for(var s=0,a=t.a(o,r),l=-1;1>=l;l+=1)if(!(0>o+l||e<=o+l))for(var n=-1;1>=n;n+=1)0>r+n||e<=r+n||(0!=l||0!=n)&&a==t.a(o+l,r+n)&&(s+=1);5<s&&(i+=3+s-5)}for(o=0;o<e-1;o+=1)for(r=0;r<e-1;r+=1)s=0,t.a(o,r)&&(s+=1),t.a(o+1,r)&&(s+=1),t.a(o,r+1)&&(s+=1),t.a(o+1,r+1)&&(s+=1),(0==s||4==s)&&(i+=3);for(o=0;o<e;o+=1)for(r=0;r<e-6;r+=1)t.a(o,r)&&!t.a(o,r+1)&&t.a(o,r+2)&&t.a(o,r+3)&&t.a(o,r+4)&&!t.a(o,r+5)&&t.a(o,r+6)&&(i+=40);for(r=0;r<e;r+=1)for(o=0;o<e-6;o+=1)t.a(o,r)&&!t.a(o+1,r)&&t.a(o+2,r)&&t.a(o+3,r)&&t.a(o+4,r)&&!t.a(o+5,r)&&t.a(o+6,r)&&(i+=40);for(r=s=0;r<e;r+=1)for(o=0;o<e;o+=1)t.a(o,r)&&(s+=1);return i+Math.abs(100*s/e/e-50)/5*10}}}(),s=function(){for(var t=Array(256),e=Array(256),i=0;8>i;i+=1)t[i]=1<<i;for(i=8;256>i;i+=1)t[i]=t[i-4]^t[i-5]^t[i-6]^t[i-8];for(i=0;255>i;i+=1)e[t[i]]=i;return{g:function(t){if(1>t)throw Error("glog("+t+")");return e[t]},i:function(e){for(;0>e;)e+=255;for(;256<=e;)e-=255;return t[e]}}}(),a=(i=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],{I:function(t,e){var r=function(t,e){switch(e){case o.L:return i[4*(t-1)];case o.M:return i[4*(t-1)+1];case o.Q:return i[4*(t-1)+2];case o.H:return i[4*(t-1)+3]}}(t,e);if(void 0===r)throw Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);t=r.length/3,e=[];for(var s=0;s<t;s+=1)for(var a=r[3*s],l=r[3*s+1],n=r[3*s+2],d=0;d<a;d+=1){var c={};c.o=l,c.j=n,e.push(c)}return e}});return t}();function oK(t,e){t:{var i=e.text,o=e.v,r=e.N,s=e.K,a=e.P;for(r=Math.max(1,r||1),s=Math.min(40,s||40);r<=s;r+=1)try{var l=function(t,e,i,o){var r={},s=oW(i,e);s.u(t),s.J(),o=o||0;var a=s.h(),l=s.h()+2*o;return r.text=t,r.level=e,r.version=i,r.O=l,r.a=function(t,e){return t-=o,e-=o,!(0>t)&&!(t>=a)&&!(0>e)&&!(e>=a)&&s.a(t,e)},r}(i,o,r,a);break t}catch(t){}l=void 0}if(!l)return null;for(i=t.getContext("2d"),e.background&&(i.fillStyle=e.background,i.fillRect(e.left,e.top,e.size,e.size)),o=l.O,s=e.size/o,i.beginPath(),a=0;a<o;a+=1)for(r=0;r<o;r+=1){var n=i,d=e.left+r*s,c=e.top+a*s,h=a,p=r,u=l.a,f=d+s,m=c+s,b=h-1,g=h+1,v=p-1,y=p+1,w=Math.floor(Math.min(.5,Math.max(0,e.R))*s),_=u(h,p),x=u(b,v),k=u(b,p);b=u(b,y);var C=u(h,y);y=u(g,y),p=u(g,p),g=u(g,v),h=u(h,v),d=Math.round(d),c=Math.round(c),f=Math.round(f),m=Math.round(m),_?function(t,e,i,o,r,s,a,l,n,d){function c(e,i,o,r,a,l,n){e?(t.lineTo(i+l,o+n),t.arcTo(i,o,r,a,s)):t.lineTo(i,o)}a?t.moveTo(e+s,i):t.moveTo(e,i),c(l,o,i,o,r,-s,0),c(n,o,r,e,r,0,-s),c(d,e,r,e,i,s,0),c(a,e,i,o,i,0,s)}(n,d,c,f,m,w,!k&&!h,!k&&!C,!p&&!C,!p&&!h):function(t,e,i,o,r,s,a,l,n,d){function c(e,i,o,r){t.moveTo(e+o,i),t.lineTo(e,i),t.lineTo(e,i+r),t.arcTo(e,i,e+o,i,s)}a&&c(e,i,s,s),l&&c(o,i,-s,s),n&&c(o,r,-s,-s),d&&c(e,r,s,-s)}(n,d,c,f,m,w,k&&h&&x,k&&C&&b,p&&C&&y,p&&h&&g)}var $=i,z=e.fill;if("string"==typeof z)$.fillStyle=z;else{var S=z.type,A=z.colorStops;if(z=z.position.map(t=>Math.round(t*e.size)),"linear-gradient"===S)var E=$.createLinearGradient.apply($,z);else if("radial-gradient"===S)E=$.createRadialGradient.apply($,z);else throw Error("Unsupported fill");A.forEach(([t,e])=>{E.addColorStop(t,e)}),$.fillStyle=E}return i.fill(),t}var oX={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};oq=function(t,e){var i={};Object.assign(i,oX,t),i.N=i.minVersion,i.K=i.maxVersion,i.v=i.ecLevel,i.left=i.left,i.top=i.top,i.size=i.size,i.fill=i.fill,i.background=i.background,i.text=i.text,i.R=i.radius,i.P=i.quiet,e instanceof HTMLCanvasElement?((e.width!==i.size||e.height!==i.size)&&(e.width=i.size,e.height=i.size),e.getContext("2d").clearRect(0,0,e.width,e.height),oK(e,i)):((t=document.createElement("canvas")).width=i.size,t.height=i.size,i=oK(t,i),e.appendChild(i))};var oY=QrCreator,oG=class extends t3{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&oY.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:2*this.size},this.canvas)}render(){var t;return tg`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${(null==(t=this.label)?void 0:t.length)>0?this.label:this.value}
        style=${oA({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};oG.styles=[tQ,oU],g([t5("canvas")],oG.prototype,"canvas",2),g([tJ()],oG.prototype,"value",2),g([tJ()],oG.prototype,"label",2),g([tJ({type:Number})],oG.prototype,"size",2),g([tJ()],oG.prototype,"fill",2),g([tJ()],oG.prototype,"background",2),g([tJ({type:Number})],oG.prototype,"radius",2),g([tJ({attribute:"error-correction"})],oG.prototype,"errorCorrection",2),g([tG(["background","errorCorrection","fill","radius","size","value"])],oG.prototype,"generate",1),oG.define("sl-qr-code");var oQ=O`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,oZ=class extends t3{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return tg`
      <span
        part="base"
        class=${eo({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":"small"===this.size,"radio--medium":"medium"===this.size,"radio--large":"large"===this.size})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?tg` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};oZ.styles=[tQ,oQ],oZ.dependencies={"sl-icon":et},g([t0()],oZ.prototype,"checked",2),g([t0()],oZ.prototype,"hasFocus",2),g([tJ()],oZ.prototype,"value",2),g([tJ({reflect:!0})],oZ.prototype,"size",2),g([tJ({type:Boolean,reflect:!0})],oZ.prototype,"disabled",2),g([tG("checked")],oZ.prototype,"handleCheckedChange",1),g([tG("disabled",{waitUntilFirstUpdate:!0})],oZ.prototype,"handleDisabledChange",1),oZ.define("sl-radio");var oJ=O`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,o0=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{let t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){let t=this.childNodes,e="";return[...t].forEach(t=>{t.nodeType!==Node.ELEMENT_NODE||t.hasAttribute("slot")||(e+=t.textContent),t.nodeType===Node.TEXT_NODE&&(e+=t.textContent)}),e.trim()}render(){return tg`
      <div
        part="base"
        class=${eo({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};o0.styles=[tQ,oJ],o0.dependencies={"sl-icon":et},g([t5(".option__label")],o0.prototype,"defaultSlot",2),g([t0()],o0.prototype,"current",2),g([t0()],o0.prototype,"selected",2),g([t0()],o0.prototype,"hasHover",2),g([tJ({reflect:!0})],o0.prototype,"value",2),g([tJ({type:Boolean,reflect:!0})],o0.prototype,"disabled",2),g([tG("disabled")],o0.prototype,"handleDisabledChange",1),g([tG("selected")],o0.prototype,"handleSelectedChange",1),g([tG("value")],o0.prototype,"handleValueChange",1),o0.define("sl-option"),iB.define("sl-popup");var o1=O`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,o2=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return tg`
      <div
        part="base"
        class=${eo({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":"rtl"===this.localize.dir()})}
        role="progressbar"
        title=${this.title??t_}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${oA({width:`${this.value}%`})}>
          ${!this.indeterminate?tg` <slot part="label" class="progress-bar__label"></slot> `:""}
        </div>
      </div>
    `}};o2.styles=[tQ,o1],g([tJ({type:Number,reflect:!0})],o2.prototype,"value",2),g([tJ({type:Boolean,reflect:!0})],o2.prototype,"indeterminate",2),g([tJ()],o2.prototype,"label",2),o2.define("sl-progress-bar");var o5=O`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,o3=class extends t3{render(){return tg` <slot part="base" class="menu-label"></slot> `}};o3.styles=[tQ,o5],o3.define("sl-menu-label");var o6=O`
  :host {
    display: contents;
  }
`,o4=class extends t3{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){let t="string"==typeof this.attr&&this.attr.length>0,e=t&&"*"!==this.attr?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch(t){}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return tg` <slot></slot> `}};o4.styles=[tQ,o6],g([tJ({reflect:!0})],o4.prototype,"attr",2),g([tJ({attribute:"attr-old-value",type:Boolean,reflect:!0})],o4.prototype,"attrOldValue",2),g([tJ({attribute:"char-data",type:Boolean,reflect:!0})],o4.prototype,"charData",2),g([tJ({attribute:"char-data-old-value",type:Boolean,reflect:!0})],o4.prototype,"charDataOldValue",2),g([tJ({attribute:"child-list",type:Boolean,reflect:!0})],o4.prototype,"childList",2),g([tJ({type:Boolean,reflect:!0})],o4.prototype,"disabled",2),g([tG("disabled")],o4.prototype,"handleDisabledChange",1),g([tG("attr",{waitUntilFirstUpdate:!0}),tG("attr-old-value",{waitUntilFirstUpdate:!0}),tG("char-data",{waitUntilFirstUpdate:!0}),tG("char-data-old-value",{waitUntilFirstUpdate:!0}),tG("childList",{waitUntilFirstUpdate:!0})],o4.prototype,"handleChange",1),o4.define("sl-mutation-observer");var o7=O`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,o8=class extends t3{constructor(){super(...arguments),this.formControlController=new $(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new tU(this,"help-text","label"),this.localize=new eb(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),""!==this.value&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout(()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){let r=null!=e?e:this.input.selectionStart,s=null!=i?i:this.input.selectionEnd;this.input.setRangeText(t,r,s,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e,r=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return tg`
      <div
        part="form-control"
        class=${eo({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${eo({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${this.name??t_}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${this.placeholder??t_}
              minlength=${this.minlength??t_}
              maxlength=${this.maxlength??t_}
              min=${this.min??t_}
              max=${this.max??t_}
              step=${this.step??t_}
              .value=${er(this.value)}
              autocapitalize=${this.autocapitalize??t_}
              autocomplete=${this.autocomplete??t_}
              autocorrect=${this.autocorrect??t_}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${this.pattern??t_}
              enterkeyhint=${this.enterkeyhint??t_}
              inputmode=${this.inputmode??t_}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?tg`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?tg`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?tg`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:tg`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};o8.styles=[tQ,tN,o7],o8.dependencies={"sl-icon":et},g([t5(".input__control")],o8.prototype,"input",2),g([t0()],o8.prototype,"hasFocus",2),g([tJ()],o8.prototype,"title",2),g([tJ({reflect:!0})],o8.prototype,"type",2),g([tJ()],o8.prototype,"name",2),g([tJ()],o8.prototype,"value",2),g([tH()],o8.prototype,"defaultValue",2),g([tJ({reflect:!0})],o8.prototype,"size",2),g([tJ({type:Boolean,reflect:!0})],o8.prototype,"filled",2),g([tJ({type:Boolean,reflect:!0})],o8.prototype,"pill",2),g([tJ()],o8.prototype,"label",2),g([tJ({attribute:"help-text"})],o8.prototype,"helpText",2),g([tJ({type:Boolean})],o8.prototype,"clearable",2),g([tJ({type:Boolean,reflect:!0})],o8.prototype,"disabled",2),g([tJ()],o8.prototype,"placeholder",2),g([tJ({type:Boolean,reflect:!0})],o8.prototype,"readonly",2),g([tJ({attribute:"password-toggle",type:Boolean})],o8.prototype,"passwordToggle",2),g([tJ({attribute:"password-visible",type:Boolean})],o8.prototype,"passwordVisible",2),g([tJ({attribute:"no-spin-buttons",type:Boolean})],o8.prototype,"noSpinButtons",2),g([tJ({reflect:!0})],o8.prototype,"form",2),g([tJ({type:Boolean,reflect:!0})],o8.prototype,"required",2),g([tJ()],o8.prototype,"pattern",2),g([tJ({type:Number})],o8.prototype,"minlength",2),g([tJ({type:Number})],o8.prototype,"maxlength",2),g([tJ()],o8.prototype,"min",2),g([tJ()],o8.prototype,"max",2),g([tJ()],o8.prototype,"step",2),g([tJ()],o8.prototype,"autocapitalize",2),g([tJ()],o8.prototype,"autocorrect",2),g([tJ()],o8.prototype,"autocomplete",2),g([tJ({type:Boolean})],o8.prototype,"autofocus",2),g([tJ()],o8.prototype,"enterkeyhint",2),g([tJ({type:Boolean,converter:{fromAttribute:t=>!!t&&"false"!==t,toAttribute:t=>t?"true":"false"}})],o8.prototype,"spellcheck",2),g([tJ()],o8.prototype,"inputmode",2),g([tG("disabled",{waitUntilFirstUpdate:!0})],o8.prototype,"handleDisabledChange",1),g([tG("step",{waitUntilFirstUpdate:!0})],o8.prototype,"handleStepChange",1),g([tG("value",{waitUntilFirstUpdate:!0})],o8.prototype,"handleValueChange",1),o8.define("sl-input");var o9=O`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,rt=class extends t3{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){let e=["menuitem","menuitemcheckbox"],i=t.composedPath(),o=i.find(t=>{var i;return e.includes((null==(i=null==t?void 0:t.getAttribute)?void 0:i.call(t,"role"))||"")});if(o)i.find(t=>{var e;return(null==(e=null==t?void 0:t.getAttribute)?void 0:e.call(t,"role"))==="menu"})===this&&("checkbox"===o.type&&(o.checked=!o.checked),this.emit("sl-select",{detail:{item:o}}))}handleKeyDown(t){if("Enter"===t.key||" "===t.key){let e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),null==e||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){let e=this.getAllItems(),i=this.getCurrentItem(),o=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),"ArrowDown"===t.key?o++:"ArrowUp"===t.key?o--:"Home"===t.key?o=0:"End"===t.key&&(o=e.length-1),o<0&&(o=e.length-1),o>e.length-1&&(o=0),this.setCurrentItem(e[o]),e[o].focus())}}handleMouseDown(t){let e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){let t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return"sl-menu-item"===t.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(e=t.getAttribute("role"))?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!t.inert&&!!this.isMenuItem(t))}getCurrentItem(){return this.getAllItems().find(t=>"0"===t.getAttribute("tabindex"))}setCurrentItem(t){this.getAllItems().forEach(e=>{e.setAttribute("tabindex",e===t?"0":"-1")})}render(){return tg`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};rt.styles=[tQ,o9],g([t5("slot")],rt.prototype,"defaultSlot",2),rt.define("sl-menu");var re=O`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;const ri=(t,e)=>{let i=t._$AN;if(void 0===i)return!1;for(let t of i)t._$AO?.(e,!1),ri(t,e);return!0},ro=t=>{let e,i;do{if(void 0===(e=t._$AM))break;(i=e._$AN).delete(t),t=e}while(0===i?.size)},rr=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),rl(e)}};function rs(t){void 0!==this._$AN?(ro(this),this._$AM=t,rr(this)):this._$AM=t}function ra(t,e=!1,i=0){let o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(o))for(let t=i;t<o.length;t++)ri(o[t],!1),ro(o[t]);else null!=o&&(ri(o,!1),ro(o));else ri(this,t)}const rl=t=>{2==t.type&&(t._$AP??=ra,t._$AQ??=rs)};class rn extends ei{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),rr(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(ri(this,t),ro(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class rd{}const rc=new WeakMap,rh=ee(class extends rn{render(t){return t_}update(t,[e]){let i=e!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),t_}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){let e=this.ht??globalThis,i=rc.get(e);void 0===i&&(i=new WeakMap,rc.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?rc.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var rp=class{constructor(t,e){this.popupRef=new rd,this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t)}},this.handleClick=t=>{var e;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&("sl-menu-item"===t.target.tagName||(null==(e=t.target.role)?void 0:e.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{let t=this.host.renderRoot.querySelector("slot[name='submenu']"),e=null==t?void 0:t.assignedElements({flatten:!0}).filter(t=>"sl-menu"===t.localName)[0],i="rtl"===getComputedStyle(this.host).direction;if(!e)return;let{left:o,top:r,width:s,height:a}=e.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?o+s:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?o+s:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${r+a}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),!this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){let e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let i=null;for(let t of e.assignedElements())if(0!==(i=t.querySelectorAll("sl-menu-item, [role^='menuitem']")).length)break;if(i&&0!==i.length){i[0].setAttribute("tabindex","0");for(let t=1;t!==i.length;++t)i[t].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!(null==(t=this.host.parentElement)?void 0:t.computedStyleMap))return;let e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((t,i)=>{var o;let r=null!=(o=e.get(i))?o:new CSSUnitValue(0,"px");return t-(r instanceof CSSUnitValue?r:new CSSUnitValue(0,"px")).to("px").value},0);this.skidding=i}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){let t="rtl"===getComputedStyle(this.host).direction;return this.isConnected?tg`
      <sl-popup
        ${rh(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:tg` <slot name="submenu" hidden></slot> `}},ru=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new tU(this,"submenu"),this.submenuController=new rp(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(void 0===this.cachedTextLabel){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){var t=this.defaultSlot;if(!t)return"";let e=t.assignedNodes({flatten:!0}),i="";return[...e].forEach(t=>{t.nodeType===Node.TEXT_NODE&&(i+=t.textContent)}),i}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t="rtl"===this.localize.dir(),e=this.submenuController.isExpanded();return tg`
      <div
        id="anchor"
        part="base"
        class=${eo({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?tg` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};ru.styles=[tQ,re],ru.dependencies={"sl-icon":et,"sl-popup":iB,"sl-spinner":eg},g([t5("slot:not([name])")],ru.prototype,"defaultSlot",2),g([t5(".menu-item")],ru.prototype,"menuItem",2),g([tJ()],ru.prototype,"type",2),g([tJ({type:Boolean,reflect:!0})],ru.prototype,"checked",2),g([tJ()],ru.prototype,"value",2),g([tJ({type:Boolean,reflect:!0})],ru.prototype,"loading",2),g([tJ({type:Boolean,reflect:!0})],ru.prototype,"disabled",2),g([tG("checked")],ru.prototype,"handleCheckedChange",1),g([tG("disabled")],ru.prototype,"handleDisabledChange",1),g([tG("type")],ru.prototype,"handleTypeChange",1),ru.define("sl-menu-item");var rf=O`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,rm=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.position=50}handleDrag(t){let{width:e}=this.base.getBoundingClientRect(),i="rtl"===this.localize.dir();t.preventDefault(),of(this.base,{onMove:t=>{this.position=parseFloat(iq(t/e*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){let e="ltr"===this.localize.dir(),i="rtl"===this.localize.dir();if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){let o=t.shiftKey?10:1,r=this.position;t.preventDefault(),(e&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key)&&(r-=o),(e&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key)&&(r+=o),"Home"===t.key&&(r=0),"End"===t.key&&(r=100),r=iq(r,0,100),this.position=r}}handlePositionChange(){this.emit("sl-change")}render(){let t="rtl"===this.localize.dir();return tg`
      <div
        part="base"
        id="image-comparer"
        class=${eo({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${oA({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${oA({left:t?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};rm.styles=[tQ,rf],rm.scopedElement={"sl-icon":et},g([t5(".image-comparer")],rm.prototype,"base",2),g([t5(".image-comparer__handle")],rm.prototype,"handle",2),g([tJ({type:Number,reflect:!0})],rm.prototype,"position",2),g([tG("position",{waitUntilFirstUpdate:!0})],rm.prototype,"handlePositionChange",1),rm.define("sl-image-comparer");var rb=O`
  :host {
    display: block;
  }
`,rg=new Map,rv=class extends t3{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){let e=document.createElement("script");[...t.attributes].forEach(t=>e.setAttribute(t.name,t.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{let t=this.src,e=await function(t,e="cors"){let i=rg.get(t);if(void 0!==i)return Promise.resolve(i);let o=fetch(t,{mode:e}).then(async e=>{let i={ok:e.ok,status:e.status,html:await e.text()};return rg.set(t,i),i});return rg.set(t,o),o}(t,this.mode);if(t!==this.src)return;if(!e.ok)return void this.emit("sl-error",{detail:{status:e.status}});this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(t=>this.executeScript(t)),this.emit("sl-load")}catch(t){this.emit("sl-error",{detail:{status:-1}})}}render(){return tg`<slot></slot>`}};rv.styles=[tQ,rb],g([tJ()],rv.prototype,"src",2),g([tJ()],rv.prototype,"mode",2),g([tJ({attribute:"allow-scripts",type:Boolean})],rv.prototype,"allowScripts",2),g([tG("src")],rv.prototype,"handleSrcChange",1),rv.define("sl-include"),et.define("sl-icon"),i4.define("sl-icon-button");var ry=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";let t="bit"===this.unit?["","kilo","mega","giga","tera"]:["","kilo","mega","giga","tera","peta"],e=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),t.length-1)),i=t[e]+this.unit,o=parseFloat((this.value/Math.pow(1e3,e)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:i,unitDisplay:this.display})}};g([tJ({type:Number})],ry.prototype,"value",2),g([tJ()],ry.prototype,"unit",2),g([tJ()],ry.prototype,"display",2),ry.define("sl-format-bytes");var rw=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.date=new Date,this.hourFormat="auto"}render(){let t=new Date(this.date),e="auto"===this.hourFormat?void 0:"12"===this.hourFormat;if(!isNaN(t.getMilliseconds()))return tg`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};g([tJ()],rw.prototype,"date",2),g([tJ()],rw.prototype,"weekday",2),g([tJ()],rw.prototype,"era",2),g([tJ()],rw.prototype,"year",2),g([tJ()],rw.prototype,"month",2),g([tJ()],rw.prototype,"day",2),g([tJ()],rw.prototype,"hour",2),g([tJ()],rw.prototype,"minute",2),g([tJ()],rw.prototype,"second",2),g([tJ({attribute:"time-zone-name"})],rw.prototype,"timeZoneName",2),g([tJ({attribute:"time-zone"})],rw.prototype,"timeZone",2),g([tJ({attribute:"hour-format"})],rw.prototype,"hourFormat",2),rw.define("sl-format-date");var r_=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};g([tJ({type:Number})],r_.prototype,"value",2),g([tJ()],r_.prototype,"type",2),g([tJ({attribute:"no-grouping",type:Boolean})],r_.prototype,"noGrouping",2),g([tJ()],r_.prototype,"currency",2),g([tJ({attribute:"currency-display"})],r_.prototype,"currencyDisplay",2),g([tJ({attribute:"minimum-integer-digits",type:Number})],r_.prototype,"minimumIntegerDigits",2),g([tJ({attribute:"minimum-fraction-digits",type:Number})],r_.prototype,"minimumFractionDigits",2),g([tJ({attribute:"maximum-fraction-digits",type:Number})],r_.prototype,"maximumFractionDigits",2),g([tJ({attribute:"minimum-significant-digits",type:Number})],r_.prototype,"minimumSignificantDigits",2),g([tJ({attribute:"maximum-significant-digits",type:Number})],r_.prototype,"maximumSignificantDigits",2),r_.define("sl-format-number");var rx=O`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,rk=class extends t3{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};rk.styles=[tQ,rx],g([tJ({type:Boolean,reflect:!0})],rk.prototype,"vertical",2),g([tG("vertical")],rk.prototype,"handleVerticalChange",1),rk.define("sl-divider");var rC=O`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*r$(t=document.activeElement){if(null!=t){var e,i,o,r,s;yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*(o=(e=r$(t.shadowRoot.activeElement))[p("asyncIterator")],r=!1,s={},null==o?(o=e[p("iterator")](),i=t=>s[t]=e=>o[t](e)):(o=o.call(e),i=t=>s[t]=e=>{if(r){if(r=!1,"throw"===t)throw e;return e}return r=!0,{done:!1,value:new y(new Promise(i=>{var r=o[t](e);r instanceof Object||u("Object expected"),i(r)}),1)}}),s[p("iterator")]=()=>s,i("next"),"throw"in o?i("throw"):s.throw=t=>{throw t},"return"in o&&i("return"),s))}}function rz(){return[...r$()].pop()}var rS=new WeakMap;function rA(t){let e=rS.get(t);return e||(e=window.getComputedStyle(t,null),rS.set(t,e)),e}function rE(t){let e=new WeakMap,i=[];return!function o(r){if(r instanceof Element){var s;if(r.hasAttribute("inert")||r.closest("[inert]")||e.has(r))return;e.set(r,!0),!i.includes(r)&&function(t){let e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if("input"===e&&"radio"===t.getAttribute("type")){let e=t.getRootNode(),i=`input[type='radio'][name="${t.getAttribute("name")}"]`,o=e.querySelector(`${i}:checked`);return o?o===t:e.querySelector(i)===t}if(!function(t){if("function"==typeof t.checkVisibility)return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let e=rA(t);return"hidden"!==e.visibility&&"none"!==e.display}(t))return!1;if(("audio"===e||"video"===e)&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&"false"!==t.getAttribute("contenteditable")||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e))return!0;let{overflowY:o,overflowX:r}=rA(t);return"scroll"===o||"scroll"===r||"auto"===o&&"auto"===r&&(!!(t.scrollHeight>t.clientHeight)&&"auto"===o||!!(t.scrollWidth>t.clientWidth)&&"auto"===r)}(r)&&i.push(r),r instanceof HTMLSlotElement&&(null==(s=r.getRootNode({composed:!0}))?void 0:s.host)!==t&&r.assignedElements({flatten:!0}).forEach(t=>{o(t)}),null!==r.shadowRoot&&"open"===r.shadowRoot.mode&&o(r.shadowRoot)}for(let t of r.children)o(t)}(t),i.sort((t,e)=>{let i=Number(t.getAttribute("tabindex"))||0;return(Number(e.getAttribute("tabindex"))||0)-i})}var rT=[],rD=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var e;if("Tab"!==t.key||this.isExternalActivated||!this.isActive())return;let i=rz();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";let o=rE(this.element),r=o.findIndex(t=>t===i);this.previousFocus=this.currentFocus;let s="forward"===this.tabDirection?1:-1;for(;;){r+s>=o.length?r=0:r+s<0?r=o.length-1:r+=s,this.previousFocus=this.currentFocus;let i=o[r];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||i&&this.possiblyHasTabbableChildren(i))return;t.preventDefault(),this.currentFocus=i,null==(e=this.currentFocus)||e.focus({preventScroll:!1});let a=[...r$()];if(a.includes(this.currentFocus)||!a.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){rT.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){rT=rT.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return rT[rT.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let t=rE(this.element);if(!this.element.matches(":focus-within")){let e=t[0],i=t[t.length-1],o="forward"===this.tabDirection?e:i;"function"==typeof(null==o?void 0:o.focus)&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},rL=t=>{var e;let{activeElement:i}=document;i&&t.contains(i)&&(null==(e=document.activeElement)||e.blur())};function rI(t){return t.charAt(0).toUpperCase()+t.slice(1)}var rO=class extends t3{constructor(){super(...arguments),this.hasSlotController=new tU(this,"footer"),this.localize=new eb(this),this.modal=new rD(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{!this.contained&&"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),ol(this)))}disconnectedCallback(){super.disconnectedCallback(),on(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let t=ex(this,"drawer.denyClose",{dir:this.localize.dir()});ek(this.panel,t.keyframes,t.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),ol(this));let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ez(this.drawer),ez(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=ex(this,`drawer.show${rI(this.placement)}`,{dir:this.localize.dir()}),i=ex(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([ek(this.panel,e.keyframes,e.options),ek(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{rL(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),on(this)),await Promise.all([ez(this.drawer),ez(this.overlay)]);let t=ex(this,`drawer.hide${rI(this.placement)}`,{dir:this.localize.dir()}),e=ex(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([ek(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),ek(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),ol(this)),this.open&&this.contained&&(this.modal.deactivate(),on(this))}async show(){if(!this.open)return this.open=!0,iH(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,iH(this,"sl-after-hide")}render(){return tg`
      <div
        part="base"
        class=${eo({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${(this.noHeader?this.label:void 0)??t_}
          aria-labelledby=${(!this.noHeader?"title":void 0)??t_}
          tabindex="0"
        >
          ${!this.noHeader?tg`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `:""}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};rO.styles=[tQ,rC],rO.dependencies={"sl-icon-button":i4},g([t5(".drawer")],rO.prototype,"drawer",2),g([t5(".drawer__panel")],rO.prototype,"panel",2),g([t5(".drawer__overlay")],rO.prototype,"overlay",2),g([tJ({type:Boolean,reflect:!0})],rO.prototype,"open",2),g([tJ({reflect:!0})],rO.prototype,"label",2),g([tJ({reflect:!0})],rO.prototype,"placement",2),g([tJ({type:Boolean,reflect:!0})],rO.prototype,"contained",2),g([tJ({attribute:"no-header",type:Boolean,reflect:!0})],rO.prototype,"noHeader",2),g([tG("open",{waitUntilFirstUpdate:!0})],rO.prototype,"handleOpenChange",1),g([tG("contained",{waitUntilFirstUpdate:!0})],rO.prototype,"handleNoModalChange",1),e_("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),e_("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),e_("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),e_("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),e_("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),e_("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),e_("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),e_("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),e_("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),e_("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),e_("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),rO.define("sl-drawer");var rM=O`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,rP=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if("Escape"===t.key&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if("Tab"===t.key){if(this.open&&(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}let i=(t,e)=>{if(!t)return null;let o=t.closest(e);if(o)return o;let r=t.getRootNode();return r instanceof ShadowRoot?i(r.host,e):null};setTimeout(()=>{var t;let e=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?rz():document.activeElement;this.containingElement&&i(e,this.containingElement.tagName.toLowerCase())===this.containingElement||this.hide()})}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{let e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let t=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>"sl-menu"===t.tagName.toLowerCase())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}let e=this.getMenu();if(e){let i=e.getAllItems(),o=i[0],r=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{("ArrowDown"===t.key||"Home"===t.key)&&(e.setCurrentItem(o),o.focus()),("ArrowUp"===t.key||"End"===t.key)&&(e.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let t,e=this.trigger.assignedElements({flatten:!0}).find(t=>(function(t){var e,i;let o=rE(t);return{start:null!=(e=o[0])?e:null,end:null!=(i=o[o.length-1])?i:null}})(t).start);if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":t=e.button;break;default:t=e}t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,iH(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,iH(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ez(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:t,options:e}=ex(this,"dropdown.show",{dir:this.localize.dir()});await ek(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ez(this);let{keyframes:t,options:e}=ex(this,"dropdown.hide",{dir:this.localize.dir()});await ek(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return tg`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${(this.sync?this.sync:void 0)??t_}
        class=${eo({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};rP.styles=[tQ,rM],rP.dependencies={"sl-popup":iB},g([t5(".dropdown")],rP.prototype,"popup",2),g([t5(".dropdown__trigger")],rP.prototype,"trigger",2),g([t5(".dropdown__panel")],rP.prototype,"panel",2),g([tJ({type:Boolean,reflect:!0})],rP.prototype,"open",2),g([tJ({reflect:!0})],rP.prototype,"placement",2),g([tJ({type:Boolean,reflect:!0})],rP.prototype,"disabled",2),g([tJ({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],rP.prototype,"stayOpenOnSelect",2),g([tJ({attribute:!1})],rP.prototype,"containingElement",2),g([tJ({type:Number})],rP.prototype,"distance",2),g([tJ({type:Number})],rP.prototype,"skidding",2),g([tJ({type:Boolean})],rP.prototype,"hoist",2),g([tJ({reflect:!0})],rP.prototype,"sync",2),g([tG("open",{waitUntilFirstUpdate:!0})],rP.prototype,"handleOpenChange",1),e_("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),e_("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),rP.define("sl-dropdown");var rF=O`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,rV=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){let e=this.getRootNode(),i=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]"),r=this.from,s="";i?[r,s]=this.from.trim().split("."):o&&([r,s]=this.from.trim().replace(/\]$/,"").split("["));let a="getElementById"in e?e.getElementById(r):null;a?t=o?a.getAttribute(s)||"":i?a[s]||"":a.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(t)try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch(t){this.showStatus("error"),this.emit("sl-error")}else this.showStatus("error"),this.emit("sl-error")}async showStatus(t){let e=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),o=this.errorLabel||this.localize.term("error"),r="success"===t?this.successIcon:this.errorIcon,s=ex(this,"copy.in",{dir:"ltr"}),a=ex(this,"copy.out",{dir:"ltr"});this.tooltip.content="success"===t?i:o,await this.copyIcon.animate(a.keyframes,a.options).finished,this.copyIcon.hidden=!0,this.status=t,r.hidden=!1,await r.animate(s.keyframes,s.options).finished,setTimeout(async()=>{await r.animate(a.keyframes,a.options).finished,r.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(s.keyframes,s.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){let t=this.copyLabel||this.localize.term("copy");return tg`
      <sl-tooltip
        class=${eo({"copy-button":!0,"copy-button--success":"success"===this.status,"copy-button--error":"error"===this.status})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};rV.styles=[tQ,rF],rV.dependencies={"sl-icon":et,"sl-tooltip":iN},g([t5('slot[name="copy-icon"]')],rV.prototype,"copyIcon",2),g([t5('slot[name="success-icon"]')],rV.prototype,"successIcon",2),g([t5('slot[name="error-icon"]')],rV.prototype,"errorIcon",2),g([t5("sl-tooltip")],rV.prototype,"tooltip",2),g([t0()],rV.prototype,"isCopying",2),g([t0()],rV.prototype,"status",2),g([tJ()],rV.prototype,"value",2),g([tJ()],rV.prototype,"from",2),g([tJ({type:Boolean,reflect:!0})],rV.prototype,"disabled",2),g([tJ({attribute:"copy-label"})],rV.prototype,"copyLabel",2),g([tJ({attribute:"success-label"})],rV.prototype,"successLabel",2),g([tJ({attribute:"error-label"})],rV.prototype,"errorLabel",2),g([tJ({attribute:"feedback-duration",type:Number})],rV.prototype,"feedbackDuration",2),g([tJ({attribute:"tooltip-placement"})],rV.prototype,"tooltipPlacement",2),g([tJ({type:Boolean})],rV.prototype,"hoist",2),e_("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}}),e_("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}}),rV.define("sl-copy-button");var rR=O`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,rB=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(let e of t)"attributes"===e.type&&"open"===e.attributeName&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.detailsObserver)||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){("Enter"===t.key||" "===t.key)&&(t.preventDefault(),this.open?this.hide():this.show()),("ArrowUp"===t.key||"ArrowLeft"===t.key)&&(t.preventDefault(),this.hide()),("ArrowDown"===t.key||"ArrowRight"===t.key)&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await ez(this.body);let{keyframes:t,options:e}=ex(this,"details.show",{dir:this.localize.dir()});await ek(this.body,eS(t,this.body.scrollHeight),e),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await ez(this.body);let{keyframes:t,options:e}=ex(this,"details.hide",{dir:this.localize.dir()});await ek(this.body,eS(t,this.body.scrollHeight),e),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,iH(this,"sl-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,iH(this,"sl-after-hide")}render(){let t="rtl"===this.localize.dir();return tg`
      <details
        part="base"
        class=${eo({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};rB.styles=[tQ,rR],rB.dependencies={"sl-icon":et},g([t5(".details")],rB.prototype,"details",2),g([t5(".details__header")],rB.prototype,"header",2),g([t5(".details__body")],rB.prototype,"body",2),g([t5(".details__expand-icon-slot")],rB.prototype,"expandIconSlot",2),g([tJ({type:Boolean,reflect:!0})],rB.prototype,"open",2),g([tJ()],rB.prototype,"summary",2),g([tJ({type:Boolean,reflect:!0})],rB.prototype,"disabled",2),g([tG("open",{waitUntilFirstUpdate:!0})],rB.prototype,"handleOpenChange",1),e_("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),e_("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}}),rB.define("sl-details");var rH=O`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,rN=class extends t3{constructor(){super(...arguments),this.hasSlotController=new tU(this,"footer"),this.localize=new eb(this),this.modal=new rD(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ol(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),on(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let t=ex(this,"dialog.denyClose",{dir:this.localize.dir()});ek(this.panel,t.keyframes,t.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ol(this);let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ez(this.dialog),ez(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=ex(this,"dialog.show",{dir:this.localize.dir()}),i=ex(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([ek(this.panel,e.keyframes,e.options),ek(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{rL(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ez(this.dialog),ez(this.overlay)]);let t=ex(this,"dialog.hide",{dir:this.localize.dir()}),e=ex(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([ek(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),ek(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,on(this);let i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,iH(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,iH(this,"sl-after-hide")}render(){return tg`
      <div
        part="base"
        class=${eo({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${(this.noHeader?this.label:void 0)??t_}
          aria-labelledby=${(!this.noHeader?"title":void 0)??t_}
          tabindex="-1"
        >
          ${!this.noHeader?tg`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `:""}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};rN.styles=[tQ,rH],rN.dependencies={"sl-icon-button":i4},g([t5(".dialog")],rN.prototype,"dialog",2),g([t5(".dialog__panel")],rN.prototype,"panel",2),g([t5(".dialog__overlay")],rN.prototype,"overlay",2),g([tJ({type:Boolean,reflect:!0})],rN.prototype,"open",2),g([tJ({reflect:!0})],rN.prototype,"label",2),g([tJ({attribute:"no-header",type:Boolean,reflect:!0})],rN.prototype,"noHeader",2),g([tG("open",{waitUntilFirstUpdate:!0})],rN.prototype,"handleOpenChange",1),e_("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),e_("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),e_("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),e_("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),e_("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),rN.define("sl-dialog"),es.define("sl-checkbox");var rU=O`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,rq=class extends t3{constructor(){super(...arguments),this.formControlController=new $(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new tU(this,"[default]","prefix","suffix"),this.localize=new eb(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:z}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),e=t?i2`a`:i2`button`;return i6`
      <${e}
        part="base"
        class=${eo({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${(t?void 0:this.disabled)??t_}
        type=${(t?void 0:this.type)??t_}
        title=${this.title}
        name=${(t?void 0:this.name)??t_}
        value=${(t?void 0:this.value)??t_}
        href=${(t&&!this.disabled?this.href:void 0)??t_}
        target=${(t?this.target:void 0)??t_}
        download=${(t?this.download:void 0)??t_}
        rel=${(t?this.rel:void 0)??t_}
        role=${(t?void 0:"button")??t_}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?i6` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?i6`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};function rj(t,e){var i,o;"string"==typeof(i=t)&&-1!==i.indexOf(".")&&1===parseFloat(i)&&(t="100%");let r="string"==typeof(o=t)&&-1!==o.indexOf("%");return(t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),1e-6>Math.abs(t-e))?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function rW(t){return Math.min(1,Math.max(0,t))}function rK(t){return(isNaN(t=parseFloat(t))||t<0||t>1)&&(t=1),t}function rX(t){return 1>=Number(t)?`${100*Number(t)}%`:t}function rY(t){return 1===t.length?"0"+t:String(t)}function rG(t,e,i){t=rj(t,255);let o=Math.max(t,e=rj(e,255),i=rj(i,255)),r=Math.min(t,e,i),s=0,a=0,l=(o+r)/2;if(o===r)a=0,s=0;else{let n=o-r;switch(a=l>.5?n/(2-o-r):n/(o+r),o){case t:s=(e-i)/n+6*(e<i);break;case e:s=(i-t)/n+2;break;case i:s=(t-e)/n+4}s/=6}return{h:s,s:a,l:l}}function rQ(t,e,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?t+6*i*(e-t):i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function rZ(t,e,i){t=rj(t,255);let o=Math.max(t,e=rj(e,255),i=rj(i,255)),r=Math.min(t,e,i),s=0,a=o-r;if(o===r)s=0;else{switch(o){case t:s=(e-i)/a+6*(e<i);break;case e:s=(i-t)/a+2;break;case i:s=(t-e)/a+4}s/=6}return{h:s,s:0===o?0:a/o,v:o}}function rJ(t,e,i,o){let r=[rY(Math.round(t).toString(16)),rY(Math.round(e).toString(16)),rY(Math.round(i).toString(16))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function r0(t,e,i){let o=1-t/255,r=1-e/255,s=1-i/255,a=Math.min(o,r,s);return 1===a?(o=0,r=0,s=0):(o=(o-a)/(1-a)*100,r=(r-a)/(1-a)*100,s=(s-a)/(1-a)*100),{c:Math.round(o),m:Math.round(r),y:Math.round(s),k:Math.round(a*=100)}}rq.styles=[tQ,oI],rq.dependencies={"sl-icon":et,"sl-spinner":eg},g([t5(".button")],rq.prototype,"button",2),g([t0()],rq.prototype,"hasFocus",2),g([t0()],rq.prototype,"invalid",2),g([tJ()],rq.prototype,"title",2),g([tJ({reflect:!0})],rq.prototype,"variant",2),g([tJ({reflect:!0})],rq.prototype,"size",2),g([tJ({type:Boolean,reflect:!0})],rq.prototype,"caret",2),g([tJ({type:Boolean,reflect:!0})],rq.prototype,"disabled",2),g([tJ({type:Boolean,reflect:!0})],rq.prototype,"loading",2),g([tJ({type:Boolean,reflect:!0})],rq.prototype,"outline",2),g([tJ({type:Boolean,reflect:!0})],rq.prototype,"pill",2),g([tJ({type:Boolean,reflect:!0})],rq.prototype,"circle",2),g([tJ()],rq.prototype,"type",2),g([tJ()],rq.prototype,"name",2),g([tJ()],rq.prototype,"value",2),g([tJ()],rq.prototype,"href",2),g([tJ()],rq.prototype,"target",2),g([tJ()],rq.prototype,"rel",2),g([tJ()],rq.prototype,"download",2),g([tJ()],rq.prototype,"form",2),g([tJ({attribute:"formaction"})],rq.prototype,"formAction",2),g([tJ({attribute:"formenctype"})],rq.prototype,"formEnctype",2),g([tJ({attribute:"formmethod"})],rq.prototype,"formMethod",2),g([tJ({attribute:"formnovalidate",type:Boolean})],rq.prototype,"formNoValidate",2),g([tJ({attribute:"formtarget"})],rq.prototype,"formTarget",2),g([tG("disabled",{waitUntilFirstUpdate:!0})],rq.prototype,"handleDisabledChange",1);function r1(t){return parseInt(t,16)}const r2={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},r5="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",r3="[\\s|\\(]+("+r5+")[,|\\s]+("+r5+")[,|\\s]+("+r5+")\\s*\\)?",r6="[\\s|\\(]+("+r5+")[,|\\s]+("+r5+")[,|\\s]+("+r5+")[,|\\s]+("+r5+")\\s*\\)?",r4={CSS_UNIT:new RegExp(r5),rgb:RegExp("rgb"+r3),rgba:RegExp("rgba"+r6),hsl:RegExp("hsl"+r3),hsla:RegExp("hsla"+r6),hsv:RegExp("hsv"+r3),hsva:RegExp("hsva"+r6),cmyk:RegExp("cmyk"+r6),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function r7(t){return"number"==typeof t?!Number.isNaN(t):r4.CSS_UNIT.test(t)}class r8{constructor(t="",e={}){var i;if(t instanceof r8)return t;"number"==typeof t&&(t={r:(i=t)>>16,g:(65280&i)>>8,b:255&i}),this.originalInput=t;let o=function(t){let e={r:0,g:0,b:0},i=1,o=null,r=null,s=null,a=!1,l=!1;if("string"==typeof t&&(t=function(t){if(0===(t=t.trim().toLowerCase()).length)return!1;let e=!1;if(r2[t])t=r2[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};let i=r4.rgb.exec(t);return i?{r:i[1],g:i[2],b:i[3]}:(i=r4.rgba.exec(t))?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=r4.hsl.exec(t))?{h:i[1],s:i[2],l:i[3]}:(i=r4.hsla.exec(t))?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=r4.hsv.exec(t))?{h:i[1],s:i[2],v:i[3]}:(i=r4.hsva.exec(t))?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=r4.cmyk.exec(t))?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=r4.hex8.exec(t))?{r:r1(i[1]),g:r1(i[2]),b:r1(i[3]),a:r1(i[4])/255,format:e?"name":"hex8"}:(i=r4.hex6.exec(t))?{r:r1(i[1]),g:r1(i[2]),b:r1(i[3]),format:e?"name":"hex"}:(i=r4.hex4.exec(t))?{r:r1(i[1]+i[1]),g:r1(i[2]+i[2]),b:r1(i[3]+i[3]),a:r1(i[4]+i[4])/255,format:e?"name":"hex8"}:!!(i=r4.hex3.exec(t))&&{r:r1(i[1]+i[1]),g:r1(i[2]+i[2]),b:r1(i[3]+i[3]),format:e?"name":"hex"}}(t)),"object"==typeof t){if(r7(t.r)&&r7(t.g)&&r7(t.b)){var n,d,c;n=t.r,d=t.g,c=t.b,e={r:255*rj(n,255),g:255*rj(d,255),b:255*rj(c,255)},a=!0,l="%"===String(t.r).substr(-1)?"prgb":"rgb"}else r7(t.h)&&r7(t.s)&&r7(t.v)?(o=rX(t.s),r=rX(t.v),e=function(t,e,i){t=6*rj(t,360),e=rj(e,100),i=rj(i,100);let o=Math.floor(t),r=t-o,s=i*(1-e),a=i*(1-r*e),l=i*(1-(1-r)*e),n=o%6;return{r:255*[i,a,s,s,l,i][n],g:255*[l,i,i,a,s,s][n],b:255*[s,s,l,i,i,a][n]}}(t.h,o,r),a=!0,l="hsv"):r7(t.h)&&r7(t.s)&&r7(t.l)?(o=rX(t.s),s=rX(t.l),e=function(t,e,i){let o,r,s;if(t=rj(t,360),e=rj(e,100),i=rj(i,100),0===e)r=i,s=i,o=i;else{let a=i<.5?i*(1+e):i+e-i*e,l=2*i-a;o=rQ(l,a,t+1/3),r=rQ(l,a,t),s=rQ(l,a,t-1/3)}return{r:255*o,g:255*r,b:255*s}}(t.h,o,s),a=!0,l="hsl"):r7(t.c)&&r7(t.m)&&r7(t.y)&&r7(t.k)&&(e=function(t,e,i,o){let r=o/100;return{r:255*(1-t/100)*(1-r),g:255*(1-e/100)*(1-r),b:255*(1-i/100)*(1-r)}}(t.c,t.m,t.y,t.k),a=!0,l="cmyk");Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)}return i=rK(i),{ok:a,format:t.format||l,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}(t);this.originalInput=t,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format??o.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}isDark(){return 128>this.getBrightness()}isLight(){return!this.isDark()}getBrightness(){let t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3}getLuminance(){let t=this.toRgb(),e=t.r/255,i=t.g/255,o=t.b/255;return .2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))}getAlpha(){return this.a}setAlpha(t){return this.a=rK(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:t}=this.toHsl();return 0===t}toHsv(){let t=rZ(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}}toHsvString(){let t=rZ(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),o=Math.round(100*t.v);return 1===this.a?`hsv(${e}, ${i}%, ${o}%)`:`hsva(${e}, ${i}%, ${o}%, ${this.roundA})`}toHsl(){let t=rG(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}}toHslString(){let t=rG(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),o=Math.round(100*t.l);return 1===this.a?`hsl(${e}, ${i}%, ${o}%)`:`hsla(${e}, ${i}%, ${o}%, ${this.roundA})`}toHex(t=!1){return rJ(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return function(t,e,i,o,r){let s=[rY(Math.round(t).toString(16)),rY(Math.round(e).toString(16)),rY(Math.round(i).toString(16)),rY(Math.round(255*parseFloat(o)).toString(16))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return 1===this.a?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return 1===this.a?`rgb(${t}, ${e}, ${i})`:`rgba(${t}, ${e}, ${i}, ${this.roundA})`}toPercentageRgb(){let t=t=>`${Math.round(100*rj(t,255))}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){let t=t=>Math.round(100*rj(t,255));return 1===this.a?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...r0(this.r,this.g,this.b)}}toCmykString(){let{c:t,m:e,y:i,k:o}=r0(this.r,this.g,this.b);return`cmyk(${t}, ${e}, ${i}, ${o})`}toName(){if(0===this.a)return"transparent";if(this.a<1)return!1;let t="#"+rJ(this.r,this.g,this.b,!1);for(let[e,i]of Object.entries(r2))if(t===i)return e;return!1}toString(t){let e=!!t;t=t??this.format;let i=!1,o=this.a<1&&this.a>=0;return!e&&o&&(t.startsWith("hex")||"name"===t)?"name"===t&&0===this.a?this.toName():this.toRgbString():("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),("hex"===t||"hex6"===t)&&(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(!0)),"hex4"===t&&(i=this.toHex8String(!0)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),"cmyk"===t&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new r8(this.toString())}lighten(t=10){let e=this.toHsl();return e.l+=t/100,e.l=rW(e.l),new r8(e)}brighten(t=10){let e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-(t/100*255)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-(t/100*255)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-(t/100*255)))),new r8(e)}darken(t=10){let e=this.toHsl();return e.l-=t/100,e.l=rW(e.l),new r8(e)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){let e=this.toHsl();return e.s-=t/100,e.s=rW(e.s),new r8(e)}saturate(t=10){let e=this.toHsl();return e.s+=t/100,e.s=rW(e.s),new r8(e)}greyscale(){return this.desaturate(100)}spin(t){let e=this.toHsl(),i=(e.h+t)%360;return e.h=i<0?360+i:i,new r8(e)}mix(t,e=50){let i=this.toRgb(),o=new r8(t).toRgb(),r=e/100;return new r8({r:(o.r-i.r)*r+i.r,g:(o.g-i.g)*r+i.g,b:(o.b-i.b)*r+i.b,a:(o.a-i.a)*r+i.a})}analogous(t=6,e=30){let i=this.toHsl(),o=360/e,r=[this];for(i.h=(i.h-(o*t>>1)+720)%360;--t;)i.h=(i.h+o)%360,r.push(new r8(i));return r}complement(){let t=this.toHsl();return t.h=(t.h+180)%360,new r8(t)}monochromatic(t=6){let e=this.toHsv(),{h:i}=e,{s:o}=e,{v:r}=e,s=[],a=1/t;for(;t--;)s.push(new r8({h:i,s:o,v:r})),r=(r+a)%1;return s}splitcomplement(){let t=this.toHsl(),{h:e}=t;return[this,new r8({h:(e+72)%360,s:t.s,l:t.l}),new r8({h:(e+216)%360,s:t.s,l:t.l})]}onBackground(t){let e=this.toRgb(),i=new r8(t).toRgb(),o=e.a+i.a*(1-e.a);return new r8({r:(e.r*e.a+i.r*i.a*(1-e.a))/o,g:(e.g*e.a+i.g*i.a*(1-e.a))/o,b:(e.b*e.a+i.b*i.a*(1-e.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){let e=this.toHsl(),{h:i}=e,o=[this],r=360/t;for(let s=1;s<t;s++)o.push(new r8({h:(i+s*r)%360,s:e.s,l:e.l}));return o}equals(t){let e=new r8(t);return"cmyk"===this.format||"cmyk"===e.format?this.toCmykString()===e.toCmykString():this.toRgbString()===e.toRgbString()}}var r9="EyeDropper"in window,st=class extends t3{constructor(){super(),this.formControlController=new $(this),this.isSafeValue=!1,this.localize=new eb(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){let t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){let e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=e.querySelector(".color-picker__slider-handle"),{width:o}=e.getBoundingClientRect(),r=this.value,s=this.value;i.focus(),t.preventDefault(),of(e,{onMove:t=>{this.alpha=iq(t/o*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){let e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=e.querySelector(".color-picker__slider-handle"),{width:o}=e.getBoundingClientRect(),r=this.value,s=this.value;i.focus(),t.preventDefault(),of(e,{onMove:t=>{this.hue=iq(t/o*360,0,360),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){let e=this.shadowRoot.querySelector(".color-picker__grid"),i=e.querySelector(".color-picker__grid-handle"),{width:o,height:r}=e.getBoundingClientRect(),s=this.value,a=this.value;i.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,of(e,{onMove:(t,e)=>{this.saturation=iq(t/o*100,0,100),this.brightness=iq(100-e/r*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){let e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.alpha=iq(this.alpha-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.alpha=iq(this.alpha+e,0,100),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.alpha=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){let e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.hue=iq(this.hue-e,0,360),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.hue=iq(this.hue+e,0,360),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.hue=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){let e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.saturation=iq(this.saturation-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.saturation=iq(this.saturation+e,0,100),this.syncValues()),"ArrowUp"===t.key&&(t.preventDefault(),this.brightness=iq(this.brightness+e,0,100),this.syncValues()),"ArrowDown"===t.key&&(t.preventDefault(),this.brightness=iq(this.brightness-e,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){let e=t.target,i=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if("Enter"===t.key){let t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){let e=new r8(t);if(!e.isValid)return null;let i=e.toHsl(),o={h:i.h,s:100*i.s,l:100*i.l,a:i.a},r=e.toRgb(),s=e.toHexString(),a=e.toHex8String(),l=e.toHsv(),n={h:l.h,s:100*l.s,v:100*l.v,a:l.a};return{hsl:{h:o.h,s:o.s,l:o.l,string:this.setLetterCase(`hsl(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%)`)},hsla:{h:o.h,s:o.s,l:o.l,a:o.a,string:this.setLetterCase(`hsla(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%, ${o.a.toFixed(2).toString()})`)},hsv:{h:n.h,s:n.s,v:n.v,string:this.setLetterCase(`hsv(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.v)}%)`)},hsva:{h:n.h,s:n.s,v:n.v,a:n.a,string:this.setLetterCase(`hsva(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.v)}%, ${n.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${r.a.toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(a)}}setColor(t){let e=this.parseColor(t);return null!==e&&(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?100*e.hsva.a:100,this.syncValues(),!0)}setLetterCase(t){return"string"!=typeof t?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);null!==t&&("hsl"===this.format?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:"rgb"===this.format?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:"hsv"===this.format?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){r9&&new EyeDropper().open().then(t=>{let e=this.value;this.setColor(t.sRGBHex),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){let e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,i,o=100){let r=new r8(`hsva(${t}, ${e}%, ${i}%, ${o/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let i=this.parseColor(e);null!==i?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=100*i.hsva.a,this.syncValues()):this.inputValue=null!=t?t:""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;let e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(null==(t=this.dropdown)?void 0:t.open)&&this.dropdown.hide()}getFormattedValue(t="hex"){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(null===e)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.inline||this.validity.valid?this.input.reportValidity():(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1)}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.saturation,e=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(t=>""!==t.trim()),o=tg`
      <div
        part="base"
        class=${eo({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?tg`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${oA({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${eo({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${oA({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${(this.disabled?void 0:"0")??t_}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${oA({left:`${0===this.hue?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${(this.disabled?void 0:"0")??t_}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?tg`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${oA({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${oA({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${(this.disabled?void 0:"0")??t_}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${oA({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${!this.noFormatToggle?tg`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `:""}
            ${r9?tg`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${i.length>0?tg`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(t=>{let e=this.parseColor(t);return e?tg`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${(this.disabled?void 0:"0")??t_}
                      role="button"
                      aria-label=${t}
                      @click=${()=>this.selectSwatch(t)}
                      @keydown=${t=>!this.disabled&&"Enter"===t.key&&this.setColor(e.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${oA({backgroundColor:e.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${t}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?o:tg`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${eo({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":"small"===this.size,"color-dropdown__trigger--medium":"medium"===this.size,"color-dropdown__trigger--large":"large"===this.size,"color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${oA({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${o}
      </sl-dropdown>
    `}};st.styles=[tQ,rU],st.dependencies={"sl-button-group":oV,"sl-button":rq,"sl-dropdown":rP,"sl-icon":et,"sl-input":o8,"sl-visually-hidden":iX},g([t5('[part~="base"]')],st.prototype,"base",2),g([t5('[part~="input"]')],st.prototype,"input",2),g([t5(".color-dropdown")],st.prototype,"dropdown",2),g([t5('[part~="preview"]')],st.prototype,"previewButton",2),g([t5('[part~="trigger"]')],st.prototype,"trigger",2),g([t0()],st.prototype,"hasFocus",2),g([t0()],st.prototype,"isDraggingGridHandle",2),g([t0()],st.prototype,"isEmpty",2),g([t0()],st.prototype,"inputValue",2),g([t0()],st.prototype,"hue",2),g([t0()],st.prototype,"saturation",2),g([t0()],st.prototype,"brightness",2),g([t0()],st.prototype,"alpha",2),g([tJ()],st.prototype,"value",2),g([tH()],st.prototype,"defaultValue",2),g([tJ()],st.prototype,"label",2),g([tJ()],st.prototype,"format",2),g([tJ({type:Boolean,reflect:!0})],st.prototype,"inline",2),g([tJ({reflect:!0})],st.prototype,"size",2),g([tJ({attribute:"no-format-toggle",type:Boolean})],st.prototype,"noFormatToggle",2),g([tJ()],st.prototype,"name",2),g([tJ({type:Boolean,reflect:!0})],st.prototype,"disabled",2),g([tJ({type:Boolean})],st.prototype,"hoist",2),g([tJ({type:Boolean})],st.prototype,"opacity",2),g([tJ({type:Boolean})],st.prototype,"uppercase",2),g([tJ()],st.prototype,"swatches",2),g([tJ({reflect:!0})],st.prototype,"form",2),g([tJ({type:Boolean,reflect:!0})],st.prototype,"required",2),g([t1({passive:!1})],st.prototype,"handleTouchMove",1),g([tG("format",{waitUntilFirstUpdate:!0})],st.prototype,"handleFormatChange",1),g([tG("opacity",{waitUntilFirstUpdate:!0})],st.prototype,"handleOpacityChange",1),g([tG("value")],st.prototype,"handleValueChange",1),st.define("sl-color-picker");var se=O`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,si=class extends t3{constructor(){super(...arguments),this.hasSlotController=new tU(this,"footer","header","image")}render(){return tg`
      <div
        part="base"
        class=${eo({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};si.styles=[tQ,se],si.define("sl-card");var so=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},sr=O`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,ss=class extends t3{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new so(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new eb(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{let t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});let e=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");let o=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==o||i!==r)&&(t.scrollTo({left:o,top:r,behavior:e$()?"auto":"smooth"}),await iH(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(t=>[...t.addedNodes,...t.removedNodes].some(t=>this.isCarouselItem(t)&&!t.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){let t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:i,loop:o}=this;return Math.ceil(o?t/i:(t-e)/i+1)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){let e=Math.abs(this.dragStartPosition[0]-t.clientX),i=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+i*i)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=t.target,i="rtl"===this.localize.dir(),o=null!==e.closest('[part~="pagination-item"]'),r="ArrowDown"===t.key||!i&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key,s="ArrowUp"===t.key||!i&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key;t.preventDefault(),s&&this.previous(),r&&this.next(),"Home"===t.key&&this.goToSlide(0),"End"===t.key&&this.goToSlide(this.getSlides().length-1),o&&this.updateComplete.then(()=>{var t;let e=null==(t=this.shadowRoot)?void 0:t.querySelector('[part~="pagination-item--active"]');e&&e.focus()})}}handleMouseDragStart(t){this.mouseDragging&&0===t.button&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){let t=new IntersectionObserver(e=>{for(let i of(t.disconnect(),e)){let t=i.target;t.toggleAttribute("inert",!i.isIntersecting),t.classList.toggle("--in-view",i.isIntersecting),t.setAttribute("aria-hidden",i.isIntersecting?"false":"true")}let i=e.find(t=>t.isIntersecting);if(!i)return;let o=this.getSlides({excludeClones:!1}),r=this.getSlides().length,s=o.indexOf(i.target),a=this.loop?s-this.slidesPerPage:s;if(this.activeSlide=(Math.ceil(a/this.slidesPerMove)*this.slidesPerMove+r)%r,!this.scrolling&&this.loop&&i.target.hasAttribute("data-clone")){let t=Number(i.target.getAttribute("data-clone"));this.goToSlide(t,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){this.scrolling&&!this.dragging&&(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&"sl-carousel-item"===t.tagName.toLowerCase()}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("role","group"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),this.pagination&&(t.setAttribute("id",`slide-${e+1}`),t.setAttribute("role","tabpanel"),t.removeAttribute("aria-label"),t.setAttribute("aria-labelledby",`tab-${e+1}`)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){let t=this.getSlides(),e=this.slidesPerPage,i=t.slice(-e),o=t.slice(0,e);i.reverse().forEach((e,i)=>{let o=e.cloneNode(!0);o.setAttribute("data-clone",String(t.length-i-1)),this.prepend(o)}),o.forEach((t,e)=>{let i=t.cloneNode(!0);i.setAttribute("data-clone",String(e)),this.append(i)})}handleSlideChange(){let t=this.getSlides();t.forEach((t,e)=>{t.classList.toggle("--is-active",e===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){let t=this.getSlides(),e=this.slidesPerMove;t.forEach((t,i)=>{(i+e)%e==0?t.style.removeProperty("scroll-snap-align"):t.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){let{slidesPerPage:i,loop:o}=this,r=this.getSlides(),s=this.getSlides({excludeClones:!1});if(!r.length)return;let a=o?(t+r.length)%r.length:iq(t,0,r.length-i);this.activeSlide=a;let l=iq(t+(o?i:0)+("rtl"===this.localize.dir()?i-1:0),0,s.length-1),n=s[l];this.scrollToSlide(n,e$()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;let i=this.scrollContainer,o=i.getBoundingClientRect(),r=t.getBoundingClientRect(),s=r.left-o.left,a=r.top-o.top;s||a?(this.pendingSlideChange=!0,i.scrollTo({left:s+i.scrollLeft,top:a+i.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){let{slidesPerMove:t,scrolling:e}=this,i=this.getPageCount(),o=this.getCurrentPage(),r=this.canScrollPrev(),s=this.canScrollNext(),a="ltr"===this.localize.dir();return tg`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${eo({carousel__slides:!0,"carousel__slides--horizontal":"horizontal"===this.orientation,"carousel__slides--vertical":"vertical"===this.orientation,"carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?tg`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${eo({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!r})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${a?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${eo({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!s})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${a?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?tg`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${function*(t,e){if(void 0!==t){let i=0;for(let o of t)yield e(o,i++)}}(function*(t,e,i=1){let o=void 0===e?0:t;e??=t;for(let t=o;i>0?t<e:e<t;t+=i)yield t}(i),e=>{let r=e===o;return tg`
                    <button
                      part="pagination-item ${r?"pagination-item--active":""}"
                      class="${eo({"carousel__pagination-item":!0,"carousel__pagination-item--active":r})}"
                      role="tab"
                      id="tab-${e+1}"
                      aria-controls="slide-${e+1}"
                      aria-selected="${r?"true":"false"}"
                      aria-label="${r?this.localize.term("slideNum",e+1):this.localize.term("goToSlide",e+1,i)}"
                      tabindex=${r?"0":"-1"}
                      @click=${()=>this.goToSlide(e*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};ss.styles=[tQ,sr],ss.dependencies={"sl-icon":et},g([tJ({type:Boolean,reflect:!0})],ss.prototype,"loop",2),g([tJ({type:Boolean,reflect:!0})],ss.prototype,"navigation",2),g([tJ({type:Boolean,reflect:!0})],ss.prototype,"pagination",2),g([tJ({type:Boolean,reflect:!0})],ss.prototype,"autoplay",2),g([tJ({type:Number,attribute:"autoplay-interval"})],ss.prototype,"autoplayInterval",2),g([tJ({type:Number,attribute:"slides-per-page"})],ss.prototype,"slidesPerPage",2),g([tJ({type:Number,attribute:"slides-per-move"})],ss.prototype,"slidesPerMove",2),g([tJ()],ss.prototype,"orientation",2),g([tJ({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ss.prototype,"mouseDragging",2),g([t5(".carousel__slides")],ss.prototype,"scrollContainer",2),g([t5(".carousel__pagination")],ss.prototype,"paginationContainer",2),g([t0()],ss.prototype,"activeSlide",2),g([t0()],ss.prototype,"scrolling",2),g([t0()],ss.prototype,"dragging",2),g([t1({passive:!0})],ss.prototype,"handleScroll",1),g([tG("loop",{waitUntilFirstUpdate:!0}),tG("slidesPerPage",{waitUntilFirstUpdate:!0})],ss.prototype,"initializeSlides",1),g([tG("activeSlide")],ss.prototype,"handleSlideChange",1),g([tG("slidesPerMove")],ss.prototype,"updateSlidesSnap",1),g([tG("autoplay")],ss.prototype,"handleAutoplayChange",1),ss.define("sl-carousel");var sa=(t,e,i)=>{let o=t[e];t[e]=function(...t){o.call(this,...t),i.call(this,o,...t)}};if("undefined"!=typeof window&&!("onscrollend"in window)){let t=new Set,e=new WeakMap,i=e=>{for(let i of e.changedTouches)t.delete(i.identifier)};document.addEventListener("touchstart",e=>{for(let i of e.changedTouches)t.add(i.identifier)},!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),sa(EventTarget.prototype,"addEventListener",function(i,o){var r;let s;if("scrollend"!==o)return;let a=(r=()=>{t.size?a():this.dispatchEvent(new Event("scrollend"))},s=0,function(...t){window.clearTimeout(s),s=window.setTimeout(()=>{r.call(this,...t)},100)});i.call(this,"scroll",a,{passive:!0}),e.set(this,a)}),sa(EventTarget.prototype,"removeEventListener",function(t,i){if("scrollend"!==i)return;let o=e.get(this);o&&t.call(this,"scroll",o,{passive:!0})})}var sl=O`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,sn=class extends t3{connectedCallback(){super.connectedCallback()}render(){return tg` <slot></slot> `}};sn.styles=[tQ,sl],sn.define("sl-carousel-item");var sd=O`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,sc=class extends t3{constructor(){super(...arguments),this.hasSlotController=new tU(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){let t=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>"sl-dropdown"===t.tagName.toLowerCase()).length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return tg`
      <div
        part="base"
        class=${eo({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${"link"===this.renderType?tg`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${(this.target?this.target:void 0)??t_}"
                rel=${(this.target?this.rel:void 0)??t_}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${"button"===this.renderType?tg`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${"dropdown"===this.renderType?tg`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};sc.styles=[tQ,sd],g([t5("slot:not([name])")],sc.prototype,"defaultSlot",2),g([t0()],sc.prototype,"renderType",2),g([tJ()],sc.prototype,"href",2),g([tJ()],sc.prototype,"target",2),g([tJ()],sc.prototype,"rel",2),g([tG("href",{waitUntilFirstUpdate:!0})],sc.prototype,"hrefChanged",1),sc.define("sl-breadcrumb-item"),oV.define("sl-button-group");var sh=O`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,sp=class extends t3{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){let t=tg`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `,e=tg``;return e=this.initials?tg`<div part="initials" class="avatar__initials">${this.initials}</div>`:tg`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,tg`
      <div
        part="base"
        class=${eo({avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};sp.styles=[tQ,sh],sp.dependencies={"sl-icon":et},g([t0()],sp.prototype,"hasError",2),g([tJ()],sp.prototype,"image",2),g([tJ()],sp.prototype,"label",2),g([tJ()],sp.prototype,"initials",2),g([tJ()],sp.prototype,"loading",2),g([tJ({reflect:!0})],sp.prototype,"shape",2),g([tG("image")],sp.prototype,"handleImageChange",1),sp.define("sl-avatar");var su=O`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,sf=class extends t3{constructor(){super(...arguments),this.localize=new eb(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){let t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(t=>t.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>"sl-breadcrumb-item"===t.tagName.toLowerCase());t.forEach((e,i)=>{let o=e.querySelector('[slot="separator"]');null===o?e.append(this.getSeparator()):o.hasAttribute("data-default")&&o.replaceWith(this.getSeparator()),i===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),tg`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${"rtl"===this.localize.dir()?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};sf.styles=[tQ,su],sf.dependencies={"sl-icon":et},g([t5("slot")],sf.prototype,"defaultSlot",2),g([t5('slot[name="separator"]')],sf.prototype,"separatorSlot",2),g([tJ()],sf.prototype,"label",2),sf.define("sl-breadcrumb"),rq.define("sl-button");var sm=O`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,sb=class extends t3{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){let t=document.createElement("canvas"),{width:e,height:i}=this.animatedImage;t.width=e,t.height=i,t.getContext("2d").drawImage(this.animatedImage,0,0,e,i),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return tg`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?tg`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};sb.styles=[tQ,sm],sb.dependencies={"sl-icon":et},g([t5(".animated-image__animated")],sb.prototype,"animatedImage",2),g([t0()],sb.prototype,"frozenFrame",2),g([t0()],sb.prototype,"isLoaded",2),g([tJ()],sb.prototype,"src",2),g([tJ()],sb.prototype,"alt",2),g([tJ({type:Boolean,reflect:!0})],sb.prototype,"play",2),g([tG("play",{waitUntilFirstUpdate:!0})],sb.prototype,"handlePlayChange",1),g([tG("src")],sb.prototype,"handleSrcChange",1),sb.define("sl-animated-image");var sg=O`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,sv=class extends t3{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return tg`
      <span
        part="base"
        class=${eo({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};sv.styles=[tQ,sg],g([tJ({reflect:!0})],sv.prototype,"variant",2),g([tJ({type:Boolean,reflect:!0})],sv.prototype,"pill",2),g([tJ({type:Boolean,reflect:!0})],sv.prototype,"pulse",2),sv.define("sl-badge");var sy=O`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,sw=class t extends t3{constructor(){super(...arguments),this.hasSlotController=new tU(this,"icon","suffix"),this.localize=new eb(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;null==(t=this.countdownAnimation)||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),null==(t=this.countdownAnimation)||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:t}=this;this.countdownAnimation=t.animate([{width:"100%"},{width:"0"}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ez(this.base),this.base.hidden=!1;let{keyframes:t,options:e}=ex(this,"alert.show",{dir:this.localize.dir()});await ek(this.base,t,e),this.emit("sl-after-show")}else{rL(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await ez(this.base);let{keyframes:t,options:e}=ex(this,"alert.hide",{dir:this.localize.dir()});await ek(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,iH(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,iH(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),null===t.toastStack.parentElement&&document.body.append(t.toastStack),t.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{t.toastStack.removeChild(this),e(),null===t.toastStack.querySelector("sl-alert")&&t.toastStack.remove()},{once:!0})})}render(){return tg`
      <div
        part="base"
        class=${eo({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?tg`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?tg`
              <div
                class=${eo({alert__countdown:!0,"alert__countdown--ltr":"ltr"===this.countdown})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};sw.styles=[tQ,sy],sw.dependencies={"sl-icon-button":i4},g([t5('[part~="base"]')],sw.prototype,"base",2),g([t5(".alert__countdown-elapsed")],sw.prototype,"countdownElement",2),g([tJ({type:Boolean,reflect:!0})],sw.prototype,"open",2),g([tJ({type:Boolean,reflect:!0})],sw.prototype,"closable",2),g([tJ({reflect:!0})],sw.prototype,"variant",2),g([tJ({type:Number})],sw.prototype,"duration",2),g([tJ({type:String,reflect:!0})],sw.prototype,"countdown",2),g([t0()],sw.prototype,"remainingTime",2),g([tG("open",{waitUntilFirstUpdate:!0})],sw.prototype,"handleOpenChange",1),g([tG("duration")],sw.prototype,"handleDurationChange",1),e_("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),e_("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),sw.define("sl-alert");var s_={};i(s_,"easings",()=>nz);var sx={};i(sx,"bounce",()=>sk);const sk=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}];var sC={};i(sC,"flash",()=>s$);const s$=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}];var sz={};i(sz,"headShake",()=>sS);const sS=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}];var sA={};i(sA,"heartBeat",()=>sE);const sE=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}];var sT={};i(sT,"jello",()=>sD);const sD=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var sL={};i(sL,"pulse",()=>sI);const sI=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var sO={};i(sO,"rubberBand",()=>sM);const sM=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var sP={};i(sP,"shake",()=>sF);const sF=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var sV={};i(sV,"shakeX",()=>sR);const sR=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var sB={};i(sB,"shakeY",()=>sH);const sH=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var sN={};i(sN,"swing",()=>sU);const sU=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}];var sq={};i(sq,"tada",()=>sj);const sj=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var sW={};i(sW,"wobble",()=>sK);const sK=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var sX={};i(sX,"backInDown",()=>sY);const sY=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var sG={};i(sG,"backInLeft",()=>sQ);const sQ=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var sZ={};i(sZ,"backInRight",()=>sJ);const sJ=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var s0={};i(s0,"backInUp",()=>s1);const s1=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var s2={};i(s2,"backOutDown",()=>s5);const s5=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}];var s3={};i(s3,"backOutLeft",()=>s6);const s6=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}];var s4={};i(s4,"backOutRight",()=>s7);const s7=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}];var s8={};i(s8,"backOutUp",()=>s9);const s9=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}];var at={};i(at,"bounceIn",()=>ae);const ae=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var ai={};i(ai,"bounceInDown",()=>ao);const ao=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var ar={};i(ar,"bounceInLeft",()=>as);const as=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var aa={};i(aa,"bounceInRight",()=>al);const al=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var an={};i(an,"bounceInUp",()=>ad);const ad=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var ac={};i(ac,"bounceOut",()=>ah);const ah=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}];var ap={};i(ap,"bounceOutDown",()=>au);const au=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}];var af={};i(af,"bounceOutLeft",()=>am);const am=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}];var ab={};i(ab,"bounceOutRight",()=>ag);const ag=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}];var av={};i(av,"bounceOutUp",()=>ay);const ay=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}];var aw={};i(aw,"fadeIn",()=>a_);const a_=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}];var ax={};i(ax,"fadeInBottomLeft",()=>ak);const ak=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var aC={};i(aC,"fadeInBottomRight",()=>a$);const a$=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var az={};i(az,"fadeInDown",()=>aS);const aS=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var aA={};i(aA,"fadeInDownBig",()=>aE);const aE=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var aT={};i(aT,"fadeInLeft",()=>aD);const aD=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var aL={};i(aL,"fadeInLeftBig",()=>aI);const aI=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var aO={};i(aO,"fadeInRight",()=>aM);const aM=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var aP={};i(aP,"fadeInRightBig",()=>aF);const aF=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var aV={};i(aV,"fadeInTopLeft",()=>aR);const aR=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var aB={};i(aB,"fadeInTopRight",()=>aH);const aH=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var aN={};i(aN,"fadeInUp",()=>aU);const aU=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var aq={};i(aq,"fadeInUpBig",()=>aj);const aj=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var aW={};i(aW,"fadeOut",()=>aK);const aK=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}];var aX={};i(aX,"fadeOutBottomLeft",()=>aY);const aY=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}];var aG={};i(aG,"fadeOutBottomRight",()=>aQ);const aQ=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}];var aZ={};i(aZ,"fadeOutDown",()=>aJ);const aJ=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}];var a0={};i(a0,"fadeOutDownBig",()=>a1);const a1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}];var a2={};i(a2,"fadeOutLeft",()=>a5);const a5=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}];var a3={};i(a3,"fadeOutLeftBig",()=>a6);const a6=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}];var a4={};i(a4,"fadeOutRight",()=>a7);const a7=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}];var a8={};i(a8,"fadeOutRightBig",()=>a9);const a9=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}];var lt={};i(lt,"fadeOutTopLeft",()=>le);const le=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}];var li={};i(li,"fadeOutTopRight",()=>lo);const lo=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}];var lr={};i(lr,"fadeOutUp",()=>ls);const ls=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}];var la={};i(la,"fadeOutUpBig",()=>ll);const ll=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}];var ln={};i(ln,"flip",()=>ld);const ld=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)",easing:"ease-out"},{offset:.5,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)",easing:"ease-in"},{offset:.8,transform:"perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)",easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}];var lc={};i(lc,"flipInX",()=>lh);const lh=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var lp={};i(lp,"flipInY",()=>lu);const lu=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var lf={};i(lf,"flipOutX",()=>lm);const lm=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}];var lb={};i(lb,"flipOutY",()=>lg);const lg=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}];var lv={};i(lv,"lightSpeedInLeft",()=>ly);const ly=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var lw={};i(lw,"lightSpeedInRight",()=>l_);const l_=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var lx={};i(lx,"lightSpeedOutLeft",()=>lk);const lk=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}];var lC={};i(lC,"lightSpeedOutRight",()=>l$);const l$=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}];var lz={};i(lz,"rotateIn",()=>lS);const lS=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var lA={};i(lA,"rotateInDownLeft",()=>lE);const lE=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var lT={};i(lT,"rotateInDownRight",()=>lD);const lD=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var lL={};i(lL,"rotateInUpLeft",()=>lI);const lI=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var lO={};i(lO,"rotateInUpRight",()=>lM);const lM=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var lP={};i(lP,"rotateOut",()=>lF);const lF=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}];var lV={};i(lV,"rotateOutDownLeft",()=>lR);const lR=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}];var lB={};i(lB,"rotateOutDownRight",()=>lH);const lH=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var lN={};i(lN,"rotateOutUpLeft",()=>lU);const lU=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var lq={};i(lq,"rotateOutUpRight",()=>lj);const lj=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}];var lW={};i(lW,"slideInDown",()=>lK);const lK=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var lX={};i(lX,"slideInLeft",()=>lY);const lY=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var lG={};i(lG,"slideInRight",()=>lQ);const lQ=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var lZ={};i(lZ,"slideInUp",()=>lJ);const lJ=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var l0={};i(l0,"slideOutDown",()=>l1);const l1=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}];var l2={};i(l2,"slideOutLeft",()=>l5);const l5=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}];var l3={};i(l3,"slideOutRight",()=>l6);const l6=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}];var l4={};i(l4,"slideOutUp",()=>l7);const l7=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}];var l8={};i(l8,"hinge",()=>l9);const l9=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}];var nt={};i(nt,"jackInTheBox",()=>ne);const ne=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}];var ni={};i(ni,"rollIn",()=>no);const no=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var nr={};i(nr,"rollOut",()=>ns);const ns=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}];var na={};i(na,"zoomIn",()=>nl);const nl=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}];var nn={};i(nn,"zoomInDown",()=>nd);const nd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var nc={};i(nc,"zoomInLeft",()=>nh);const nh=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var np={};i(np,"zoomInRight",()=>nu);const nu=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var nf={};i(nf,"zoomInUp",()=>nm);const nm=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var nb={};i(nb,"zoomOut",()=>ng);const ng=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}];var nv={};i(nv,"zoomOutDown",()=>ny);const ny=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var nw={};i(nw,"zoomOutLeft",()=>n_);const n_=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}];var nx={};i(nx,"zoomOutRight",()=>nk);const nk=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}];var nC={};i(nC,"zoomOutUp",()=>n$);const n$=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],nz={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};e(s_,sx),e(s_,sC),e(s_,sz),e(s_,sA),e(s_,sT),e(s_,sL),e(s_,sO),e(s_,sP),e(s_,sV),e(s_,sB),e(s_,sN),e(s_,sq),e(s_,sW),e(s_,sX),e(s_,sG),e(s_,sZ),e(s_,s0),e(s_,s2),e(s_,s3),e(s_,s4),e(s_,s8),e(s_,at),e(s_,ai),e(s_,ar),e(s_,aa),e(s_,an),e(s_,ac),e(s_,ap),e(s_,af),e(s_,ab),e(s_,av),e(s_,aw),e(s_,ax),e(s_,aC),e(s_,az),e(s_,aA),e(s_,aT),e(s_,aL),e(s_,aO),e(s_,aP),e(s_,aV),e(s_,aB),e(s_,aN),e(s_,aq),e(s_,aW),e(s_,aX),e(s_,aG),e(s_,aZ),e(s_,a0),e(s_,a2),e(s_,a3),e(s_,a4),e(s_,a8),e(s_,lt),e(s_,li),e(s_,lr),e(s_,la),e(s_,ln),e(s_,lc),e(s_,lp),e(s_,lf),e(s_,lb),e(s_,lv),e(s_,lw),e(s_,lx),e(s_,lC),e(s_,lz),e(s_,lA),e(s_,lT),e(s_,lL),e(s_,lO),e(s_,lP),e(s_,lV),e(s_,lB),e(s_,lN),e(s_,lq),e(s_,lW),e(s_,lX),e(s_,lG),e(s_,lZ),e(s_,l0),e(s_,l2),e(s_,l3),e(s_,l4),e(s_,l8),e(s_,nt),e(s_,ni),e(s_,nr),e(s_,na),e(s_,nn),e(s_,nc),e(s_,np),e(s_,nf),e(s_,nb),e(s_,nv),e(s_,nw),e(s_,nx),e(s_,nC);var nS=O`
  :host {
    display: contents;
  }
`,nA=class extends t3{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return null!=(e=null==(t=this.animation)?void 0:t.currentTime)?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;let i=null!=(t=s_.easings[this.easing])?t:this.easing,o=null!=(e=this.keyframes)?e:s_[this.name],r=(await this.defaultSlot).assignedElements()[0];return!!r&&!!o&&(this.destroyAnimation(),this.animation=r.animate(o,{delay:this.delay,direction:this.direction,duration:this.duration,easing:i,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return!!this.animation&&(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0)}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;null==(t=this.animation)||t.cancel()}finish(){var t;null==(t=this.animation)||t.finish()}render(){return tg` <slot @slotchange=${this.handleSlotChange}></slot> `}};nA.styles=[tQ,nS],g([(t,e)=>t2(t,e,{async get(){return await this.updateComplete,this.renderRoot?.querySelector("slot")??null}})],nA.prototype,"defaultSlot",2),g([tJ()],nA.prototype,"name",2),g([tJ({type:Boolean,reflect:!0})],nA.prototype,"play",2),g([tJ({type:Number})],nA.prototype,"delay",2),g([tJ()],nA.prototype,"direction",2),g([tJ({type:Number})],nA.prototype,"duration",2),g([tJ()],nA.prototype,"easing",2),g([tJ({attribute:"end-delay",type:Number})],nA.prototype,"endDelay",2),g([tJ()],nA.prototype,"fill",2),g([tJ({type:Number})],nA.prototype,"iterations",2),g([tJ({attribute:"iteration-start",type:Number})],nA.prototype,"iterationStart",2),g([tJ({attribute:!1})],nA.prototype,"keyframes",2),g([tJ({attribute:"playback-rate",type:Number})],nA.prototype,"playbackRate",2),g([tG(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],nA.prototype,"handleAnimationChange",1),g([tG("play")],nA.prototype,"handlePlayChange",1),g([tG("playbackRate")],nA.prototype,"handlePlaybackRateChange",1),nA.define("sl-animation");const nE=`
    
    <div class="nav-icons">
        <div class="icon-container">
            
            <a href="https://github.com/jlbeard84" aria-label="Github">
                <i class="fab fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/joshua-beard-3087ab31/" aria-label="LinkedIn">
                <i class="fab fa-linkedin"></i>
            </a>
        </div>
    </div>
    
`;class nT extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML=nE}}customElements.define("header-component",nT);
//# sourceMappingURL=jlbeard-www.09358735.js.map
