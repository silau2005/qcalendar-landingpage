/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@midzer/tobii/dist/tobii.module.js":
/*!*********************************************************!*\
  !*** ./node_modules/@midzer/tobii/dist/tobii.module.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
class e{constructor(){this.figcaptionId=0,this.userSettings=null}init(e,t,i){this.userSettings=i;const r=document.createElement("figure"),n=document.createElement("figcaption"),a=document.createElement("img"),s=e.querySelector("img"),o=document.createElement("div");if(r.tabIndex=-1,r.setAttribute("role","group"),r.style.opacity="0",s&&(a.alt=s.alt||""),a.setAttribute("src",""),a.setAttribute("data-src",e.href),e.hasAttribute("data-srcset")&&a.setAttribute("data-srcset",e.getAttribute("data-srcset")),e.hasAttribute("data-sizes")&&a.setAttribute("data-sizes",e.getAttribute("data-sizes")),r.appendChild(a),this.userSettings.captions){let t;"function"==typeof this.userSettings.captionText?t=this.userSettings.captionText(e):"self"===this.userSettings.captionsSelector&&e.getAttribute(this.userSettings.captionAttribute)?t=e.getAttribute(this.userSettings.captionAttribute):"img"===this.userSettings.captionsSelector&&s&&s.getAttribute(this.userSettings.captionAttribute)&&(t=s.getAttribute(this.userSettings.captionAttribute)),this.userSettings.captionHTML?n.innerHTML=t:n.textContent=t,t&&(n.id=`tobii-figcaption-${this.figcaptionId}`,r.appendChild(n),a.setAttribute("aria-labelledby",n.id),r.setAttribute("aria-label",n.textContent),++this.figcaptionId)}t.appendChild(r),o.className="tobii__loader",o.setAttribute("role","progressbar"),o.setAttribute("aria-label",this.userSettings.loadingIndicatorLabel),t.appendChild(o),t.setAttribute("data-type","image"),t.classList.add("tobii-image")}onPreload(e){this.onLoad(e)}onLoad(e){const t=e.querySelector("img");if(!t.hasAttribute("data-src"))return;const i=e.querySelector("figure"),r=e.querySelector(".tobii__loader");t.addEventListener("load",()=>{e.removeChild(r),i.style.opacity="1"}),t.addEventListener("error",()=>{e.removeChild(r),i.style.opacity="1"}),t.hasAttribute("data-srcset")&&(t.setAttribute("srcset",t.getAttribute("data-srcset")),t.removeAttribute("data-srcset")),t.hasAttribute("data-sizes")&&(t.setAttribute("sizes",t.getAttribute("data-sizes")),t.removeAttribute("data-sizes")),t.setAttribute("src",t.getAttribute("data-src")),t.removeAttribute("data-src")}onLeave(e){}onCleanup(e){}onReset(){this.figcaptionId=0}}class t{constructor(){this.userSettings=null}init(e,t,i){this.userSettings=i;const r=e.hasAttribute("data-target")?e.getAttribute("data-target"):e.getAttribute("href");t.setAttribute("data-HREF",r),e.getAttribute("data-allow")&&t.setAttribute("data-allow",e.getAttribute("data-allow")),e.hasAttribute("data-width")&&t.setAttribute("data-width",`${e.getAttribute("data-width")}`),e.hasAttribute("data-height")&&t.setAttribute("data-height",`${e.getAttribute("data-height")}`),t.setAttribute("data-type","iframe"),t.classList.add("tobii-iframe")}onPreload(e){}onLoad(e){let t=e.querySelector("iframe");const i=document.createElement("div");if(i.className="tobii__loader",i.setAttribute("role","progressbar"),i.setAttribute("aria-label",this.userSettings.loadingIndicatorLabel),e.appendChild(i),null==t){t=document.createElement("iframe");const i=e.getAttribute("data-href");t.setAttribute("frameborder","0"),t.setAttribute("src",i),t.setAttribute("allowfullscreen",""),i.indexOf("youtube.com")>-1?t.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"):i.indexOf("vimeo.com")>-1?t.setAttribute("allow","autoplay; picture-in-picture"):e.hasAttribute("data-allow")&&t.setAttribute("allow",e.getAttribute("data-allow")),e.getAttribute("data-width")&&(t.style.maxWidth=`${e.getAttribute("data-width")}`),e.getAttribute("data-height")&&(t.style.maxHeight=`${e.getAttribute("data-height")}`),t.style.opacity="0",e.appendChild(t),t.addEventListener("load",()=>{t.style.opacity="1";const i=e.querySelector(".tobii__loader");i&&e.removeChild(i)}),t.addEventListener("error",()=>{t.style.opacity="1";const i=e.querySelector(".tobii__loader");i&&e.removeChild(i)})}else t.setAttribute("src",e.getAttribute("data-href"))}onLeave(e){}onCleanup(e){const t=e.querySelector("iframe");t.setAttribute("src",""),t.style.opacity="0"}onReset(){}}class i{constructor(){this.userSettings=null}init(e,t,i){this.userSettings=i;const r=e.hasAttribute("data-target")?e.getAttribute("data-target"):e.getAttribute("href"),n=document.querySelector(r).cloneNode(!0);if(!n)throw new Error(`Ups, I can't find the target ${r}.`);t.appendChild(n),t.setAttribute("data-type","html"),t.classList.add("tobii-html")}onPreload(e){}onLoad(e,t){const i=e.querySelector("video");i&&(i.hasAttribute("data-time")&&i.readyState>0&&(i.currentTime=i.getAttribute("data-time")),this.userSettings.autoplayVideo&&i.play());const r=e.querySelector("audio");r&&this.userSettings.autoplayAudio&&r.play(),e.classList.add("tobii-group-"+t)}onLeave(e){const t=e.querySelector("video");t&&(t.paused||t.pause(),t.readyState>0&&t.setAttribute("data-time",t.currentTime));const i=e.querySelector("audio");i&&(i.paused||i.pause())}onCleanup(e){const t=e.querySelector("video");if(t&&t.readyState>0&&t.readyState<3&&t.duration!==t.currentTime){const i=t.cloneNode(!0);this._removeSources(t),t.load(),t.parentNode.removeChild(t),e.appendChild(i)}}onReset(){}_removeSources(e){const t=e.querySelectorAll("src");t&&t.forEach(e=>{e.setAttribute("src","")})}}class r{constructor(){this.playerId=0,this.PLAYER=[],this.userSettings=null}init(e,t,i){this.userSettings=i;const r=document.createElement("div");t.appendChild(r),this.PLAYER[this.playerId]=new window.YT.Player(r,{host:"https://www.youtube-nocookie.com",height:e.getAttribute("data-height")||"360",width:e.getAttribute("data-width")||"640",videoId:e.getAttribute("data-id"),playerVars:{controls:e.getAttribute("data-controls")||1,rel:0,playsinline:1}}),t.setAttribute("data-player",this.playerId),t.setAttribute("data-type","youtube"),t.classList.add("tobii-youtube"),this.playerId++}onPreload(e){}onLoad(e){this.userSettings.autoplayVideo&&this.PLAYER[e.getAttribute("data-player")].playVideo()}onLeave(e){1===this.PLAYER[e.getAttribute("data-player")].getPlayerState()&&this.PLAYER[e.getAttribute("data-player")].pauseVideo()}onCleanup(e){1===this.PLAYER[e.getAttribute("data-player")].getPlayerState()&&this.PLAYER[e.getAttribute("data-player")].pauseVideo()}onReset(){}}function n(a){const s={image:new e,html:new i,iframe:new t,youtube:new r},o=['a[href]:not([tabindex^="-"]):not([inert])','area[href]:not([tabindex^="-"]):not([inert])',"input:not([disabled]):not([inert])","select:not([disabled]):not([inert])","textarea:not([disabled]):not([inert])","button:not([disabled]):not([inert])",'iframe:not([tabindex^="-"]):not([inert])','audio:not([tabindex^="-"]):not([inert])','video:not([tabindex^="-"]):not([inert])','[contenteditable]:not([tabindex^="-"]):not([inert])','[tabindex]:not([tabindex^="-"]):not([inert])'];let l={};const d=[],c={gallery:[],slider:null,sliderElements:[],elementsLength:0,currentIndex:0,x:0};let u=null,b=null,p=null,h=null,g=null,m=null,y=null,f=!1,w={},A=null,v=[],x=0;const E={element:null,originX:0,originY:0,translateX:0,translateY:0,scale:1},L={startX:0,startY:0,x:0,y:0,distance:0},_=e=>{if(null===document.querySelector('[data-type="youtube"]')||f)S(e);else{if(null===document.getElementById("iframe_api")){const e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.id="iframe_api",e.src="https://www.youtube.com/iframe_api",t.parentNode.insertBefore(e,t)}-1===d.indexOf(e)&&d.push(e),window.onYouTubePlayerAPIReady=()=>{d.forEach(e=>{S(e)}),f=!0}}},I=e=>e.hasAttribute("data-group")?e.getAttribute("data-group"):"default",S=e=>{const t=I(e);if(Object.prototype.hasOwnProperty.call(w,t)||(w[t]=JSON.parse(JSON.stringify(c)),w[t].slider=document.createElement("div"),w[t].slider.className="tobii__slider",w[t].slider.setAttribute("aria-hidden","true"),u.appendChild(w[t].slider)),-1!==w[t].gallery.indexOf(e))throw new Error("Ups, element already added.");{if(w[t].gallery.push(e),w[t].elementsLength++,l.zoom&&e.querySelector("img")&&"false"!==e.getAttribute("data-zoom")||"true"===e.getAttribute("data-zoom")){const t=document.createElement("div");t.className="tobii-zoom__icon",t.innerHTML=l.zoomText,e.classList.add("tobii-zoom"),e.appendChild(t)}e.addEventListener("click",U);const i=Y(e),r=document.createElement("div"),n=document.createElement("div");r.className="tobii__slide",r.style.position="absolute",r.style.left=100*w[t].x+"%",r.setAttribute("aria-hidden","true"),i.init(e,n,l),r.appendChild(n),w[t].slider.appendChild(r),w[t].sliderElements.push(r),++w[t].x,le()&&t===A&&(ae(),se())}},C=e=>{const t=I(e);if(-1===w[t].gallery.indexOf(e))throw new Error(`Ups, I can't find a slide for the element ${e}.`);{const i=w[t].gallery.indexOf(e),r=w[t].sliderElements[i];if(le()&&t===A&&i===w[t].currentIndex){if(1===w[t].elementsLength)throw X(),new Error("Ups, I've closed. There are no slides more to show.");0===w[t].currentIndex?N():M(),ae(),se()}if(w[t].gallery.splice(w[t].gallery.indexOf(e)),w[t].sliderElements.splice(w[t].gallery.indexOf(e)),w[t].elementsLength--,--w[t].x,l.zoom&&e.querySelector(".tobii-zoom__icon")){const t=e.querySelector(".tobii-zoom__icon");t.parentNode.classList.remove("tobii-zoom"),t.parentNode.removeChild(t)}e.removeEventListener("click",U),r.parentNode.removeChild(r)}},Y=e=>{const t=e.getAttribute("data-type");return void 0!==s[t]?s[t]:(e.hasAttribute("data-type")&&console.log("Unknown lightbox element type: "+t),s.image)},T=(e=0)=>{if(le())throw new Error("Ups, I'm aleady open.");if(-1===e||e>=w[A].elementsLength)throw new Error(`Ups, I can't find slide ${e}.`);document.documentElement.classList.add("tobii-is-open"),document.body.classList.add("tobii-is-open"),document.body.classList.add("tobii-is-open-"+A),ae(),l.close||(h.disabled=!1,h.setAttribute("aria-hidden","true")),m=document.activeElement;const t=window.location.href;window.history.pushState({tobii:"close"},"Image",t),w[A].currentIndex=e,re(),z(w[A].currentIndex),w[A].slider.setAttribute("aria-hidden","false"),u.setAttribute("aria-hidden","false"),se(),q(w[A].currentIndex+1),q(w[A].currentIndex-1),w[A].slider.classList.add("tobii__slider--animate");const i=new window.CustomEvent("open",{detail:{group:A}});u.dispatchEvent(i)},X=()=>{if(!le())throw new Error("Ups, I'm already closed.");document.documentElement.classList.remove("tobii-is-open"),document.body.classList.remove("tobii-is-open"),document.body.classList.remove("tobii-is-open-"+A),ne(),null!==window.history.state&&"close"===window.history.state.tobii&&window.history.back(),m.focus(),$(w[A].currentIndex),O(w[A].currentIndex),u.setAttribute("aria-hidden","true"),w[A].slider.setAttribute("aria-hidden","true"),w[A].currentIndex=0,w[A].slider.classList.remove("tobii__slider--animate");const e=new window.CustomEvent("close",{detail:{group:A}});u.dispatchEvent(e)},q=e=>{if(void 0===w[A].sliderElements[e])return;const t=w[A].sliderElements[e].querySelector("[data-type]");Y(t).onPreload(t)},z=e=>{if(void 0===w[A].sliderElements[e])return;const t=w[A].sliderElements[e].querySelector("[data-type]"),i=Y(t);w[A].sliderElements[e].classList.add("tobii__slide--is-active"),w[A].sliderElements[e].setAttribute("aria-hidden","false"),i.onLoad(t,A)},M=()=>{if(!le())throw new Error("Ups, I'm closed.");w[A].currentIndex>0&&($(w[A].currentIndex),z(--w[A].currentIndex),se("left"),O(w[A].currentIndex+1),q(w[A].currentIndex-1));const e=new window.CustomEvent("previous",{detail:{group:A}});u.dispatchEvent(e)},N=()=>{if(!le())throw new Error("Ups, I'm closed.");w[A].currentIndex<w[A].elementsLength-1&&($(w[A].currentIndex),z(++w[A].currentIndex),se("right"),O(w[A].currentIndex-1),q(w[A].currentIndex+1));const e=new window.CustomEvent("next",{detail:{group:A}});u.dispatchEvent(e)},P=e=>{if(le())throw new Error("Ups, I'm open.");if(!e)throw new Error("Ups, no group specified.");if(e&&!Object.prototype.hasOwnProperty.call(w,e))throw new Error(`Ups, I don't have a group called "${e}".`);A=e},$=e=>{if(void 0===w[A].sliderElements[e])return;const t=w[A].sliderElements[e].querySelector("[data-type]"),i=Y(t);w[A].sliderElements[e].classList.remove("tobii__slide--is-active"),w[A].sliderElements[e].setAttribute("aria-hidden","true"),i.onLeave(t)},O=e=>{if(void 0===w[A].sliderElements[e])return;const t=w[A].sliderElements[e].querySelector("[data-type]");Y(t).onCleanup(t),L.startX=0,L.startY=0,L.x=0,L.y=0,L.distance=0,x=0,F()&&ie(),E.element=null},k=()=>{y=-w[A].currentIndex*u.offsetWidth,w[A].slider.style.transform=`translate(${y}px, 0)`},R=()=>{k()},U=e=>{e.preventDefault(),A=I(e.currentTarget),T(w[A].gallery.indexOf(e.currentTarget))},H=e=>{e.target===b?M():e.target===p?N():(e.target===h||e.target.classList.contains("tobii__slide")&&l.docClose)&&X(),e.stopPropagation()},D=e=>{const t=Array.prototype.slice.call(u.querySelectorAll(`.tobii__btn:not([disabled]), .tobii__slide--is-active ${o.join(", .tobii__slide--is-active ")}`)).filter(e=>!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),i=t.indexOf(document.activeElement);9===e.keyCode||"Tab"===e.code?e.shiftKey&&0===i?(t[t.length-1].focus(),e.preventDefault()):e.shiftKey||i!==t.length-1&&-1!==i||(t[0].focus(),e.preventDefault()):27===e.keyCode||"Escape"===e.code?(e.preventDefault(),X()):37===e.keyCode||"ArrowLeft"===e.code?(e.preventDefault(),M()):39!==e.keyCode&&"ArrowRight"!==e.code||(e.preventDefault(),N())},B=()=>{v=[],k(),w[A].slider.classList.remove("tobii__slider--is-"+(F()?"moving":"dragging"))},V=e=>{if(!ce(e.target)&&(e.preventDefault(),e.stopPropagation(),L.startX=L.x=e.clientX,L.startY=L.y=e.clientY,L.distance=0,v.push(e),2===v.length)){const{x:e,y:t}=te(v[0].clientX,v[0].clientY,v[1].clientX,v[1].clientY);L.startX=L.x=e,L.startY=L.y=t,L.distance=ee(v[0].clientX-v[1].clientX,v[0].clientY-v[1].clientY)/E.scale}},j=e=>{if(!v.length)return;w[A].slider.classList.add("tobii__slider--is-"+(F()?"moving":"dragging"));const t=v.findIndex(t=>t.pointerId===e.pointerId);if(v[t]=e,2===v.length){const{x:e,y:t}=te(v[0].clientX,v[0].clientY,v[1].clientX,v[1].clientY),i=ee(v[0].clientX-v[1].clientX,v[0].clientY-v[1].clientY)/L.distance;return Z(K(i,1,4),e,t,e-L.x,t-L.y),L.x=e,void(L.y=t)}if(F()&&Q(e.clientX-L.x,e.clientY-L.y),L.x=e.clientX,L.y=e.clientY,!F()){const e=L.startX-L.x,t=L.startY-L.y;if(ee(e,t)<10)return;Math.abs(e)>Math.abs(t)&&w[A].elementsLength>1?w[A].slider.style.transform=`translate(${y-Math.round(e)}px, 0)`:l.swipeClose&&(w[A].slider.style.transform=`translate(${y}px, -${Math.round(t)}px)`)}},W=e=>{if(!v.length)return;w[A].slider.classList.remove("tobii__slider--is-"+(F()?"moving":"dragging"));const t=v.findIndex(t=>t.pointerId===e.pointerId);v.splice(t,1);const i=e.clientX,r=e.clientY,n=L.startX-i,a=L.startY-r,s=Math.abs(n),o=Math.abs(a);if(s||o)F()||(n<0&&s>l.threshold&&w[A].currentIndex>0?M():n>0&&s>l.threshold&&w[A].currentIndex!==w[A].elementsLength-1?N():a>0&&o>l.threshold&&l.swipeClose?X():k());else{const t=(new Date).getTime(),n=t-x;n<500&&n>100?(e.preventDefault(),x=0,F()?ie():Z(2,i,r,0,0)):(x=t,de()&&window.setTimeout(()=>{const{left:t,top:n,bottom:a,right:s,width:o}=e.target.getBoundingClientRect();r<n||r>a||!x||(i>t&&i<t+o/2?M():i<s&&i>s-o/2&&N())},500))}},G=e=>{const t=Math.sign(e.deltaY)>0?-1:1;(F()||t)&&(e.preventDefault(),Z(K(E.scale+t/(10/E.scale),1,4),e.clientX,e.clientY,0,0))},J=(e,t)=>{const{element:i,scale:r,originX:n,originY:a}=E,s="x"===e,o=s?n:a,l=s?"offsetWidth":"offsetHeight",d=i.parentNode[l],c=i[l],u=i.getBoundingClientRect(),b=(o-c/2)*(r-1),p=Math.max(0,Math.round(s?u.width:u.height)-d),h=Math.round(p/2);return K(t,0-h+b,h+b)},K=(e,t,i)=>Math.max(Math.min(e,i),t),F=()=>1!==E.scale,Q=(e,t)=>{0!==e&&(E.translateX=J("x",E.translateX+e)),0!==t&&(E.translateY=J("y",E.translateY+t));const{element:i,originX:r,originY:n,translateX:a,translateY:s,scale:o}=E;i.style.transformOrigin=`${r}px ${n}px`,i.style.transform=`translate(${a}px, ${s}px) scale(${o})`},Z=(e,t,i,r,n)=>{E.element||(E.element=u.querySelector(".tobii__slide--is-active img"));const{left:a,top:s}=E.element.getBoundingClientRect(),o=(i-s)/E.scale;E.originX=(t-a)/E.scale,E.originY=o,E.scale=e,Q(r,n)},ee=(e,t)=>Math.hypot(e,t),te=(e,t,i,r)=>({x:(e+i)/2,y:(t+r)/2}),ie=()=>{E.scale=1,E.originX=0,E.originY=0,E.translateX=0,E.translateY=0,Q(0,0)},re=()=>{l.keyboard&&window.addEventListener("keydown",D),window.addEventListener("resize",R),window.addEventListener("popstate",X),ue("click",H),l.draggable&&(ue("pointerdown",V),ue("pointermove",j),ue("pointerup",W),ue("pointercancel",B),ue("pointerout",B),ue("pointerleave",B),ue("contextmenu",B)),ue("wheel",G)},ne=()=>{l.keyboard&&window.removeEventListener("keydown",D),window.removeEventListener("resize",R),window.removeEventListener("popstate",X),be("click",H),l.draggable&&(be("pointerdown",V),be("pointermove",j),be("pointerup",W),be("pointercancel",B),be("pointerout",B),be("pointerleave",B),be("contextmenu",B)),be("wheel",G)},ae=()=>{l.draggable&&!w[A].slider.classList.contains("tobii__slider--is-draggable")&&w[A].slider.classList.add("tobii__slider--is-draggable"),!l.nav||1===w[A].elementsLength||"auto"===l.nav&&de()?(b.setAttribute("aria-hidden","true"),b.disabled=!0,p.setAttribute("aria-hidden","true"),p.disabled=!0):(b.setAttribute("aria-hidden","false"),b.disabled=!1,p.setAttribute("aria-hidden","false"),p.disabled=!1),g.setAttribute("aria-hidden",l.counter&&1!==w[A].elementsLength?"false":"true")},se=(e=null)=>{k(),g.textContent=`${w[A].currentIndex+1}/${w[A].elementsLength}`,(e=>{if((!0===l.nav||"auto"===l.nav)&&!de()&&w[A].elementsLength>1?(b.setAttribute("aria-hidden","true"),b.disabled=!0,p.setAttribute("aria-hidden","true"),p.disabled=!0,1===w[A].elementsLength?l.close&&h.focus():0===w[A].currentIndex?(p.setAttribute("aria-hidden","false"),p.disabled=!1,p.focus()):w[A].currentIndex===w[A].elementsLength-1?(b.setAttribute("aria-hidden","false"),b.disabled=!1,b.focus()):(b.setAttribute("aria-hidden","false"),b.disabled=!1,p.setAttribute("aria-hidden","false"),p.disabled=!1,"left"===e?b.focus():p.focus())):l.close&&h.focus(),w[A].elementsLength>1&&0!==w[A].currentIndex){const e=u.querySelector('.tobii__slide--is-active figure[tabindex="-1"]');e&&setTimeout(()=>{e.focus()},100)}})(e)},oe=()=>{le()&&X(),Object.entries(w).forEach(e=>{e[1].gallery.forEach(e=>{C(e)})}),w={},A=null;for(const e in s)s[e].onReset()},le=()=>"false"===u.getAttribute("aria-hidden"),de=()=>"ontouchstart"in window,ce=e=>-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.nodeName)||e===b||e===p||e===h,ue=(e,t)=>{u.addEventListener(e,t)},be=(e,t)=>{u.removeEventListener(e,t)};return(e=>{if(document.querySelector("div.tobii"))return void console.log("Multiple lightbox instances not supported.");l=(e=>({selector:".lightbox",captions:!0,captionsSelector:"img",captionAttribute:"alt",captionText:null,captionHTML:!1,nav:"auto",navText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="15 6 9 12 15 18" /></svg>','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="9 6 15 12 9 18" /></svg>'],navLabel:["Previous image","Next image"],close:!0,closeText:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>',closeLabel:"Close lightbox",loadingIndicatorLabel:"Image loading",counter:!0,download:!1,downloadText:"",downloadLabel:"Download image",keyboard:!0,zoom:!0,zoomText:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="16 4 20 4 20 8" /><line x1="14" y1="10" x2="20" y2="4" /><polyline points="8 20 4 20 4 16" /><line x1="4" y1="20" x2="10" y2="14" /><polyline points="16 20 20 20 20 16" /><line x1="14" y1="14" x2="20" y2="20" /><polyline points="8 4 4 4 4 8" /><line x1="4" y1="4" x2="10" y2="10" /></svg>',docClose:!0,swipeClose:!0,hideScrollbar:!0,draggable:!0,threshold:100,rtl:!1,loop:!1,autoplayVideo:!1,modal:!1,theme:"tobii--theme-default",...e}))(e),u||(u=document.createElement("div"),u.setAttribute("role","dialog"),u.setAttribute("aria-hidden","true"),u.setAttribute("aria-modal","true"),u.setAttribute("aria-label","Lightbox"),u.classList.add("tobii"),u.classList.add(l.theme),b=document.createElement("button"),b.className="tobii__btn tobii__btn--previous",b.setAttribute("type","button"),b.setAttribute("aria-label",l.navLabel[0]),b.innerHTML=l.navText[0],u.appendChild(b),p=document.createElement("button"),p.className="tobii__btn tobii__btn--next",p.setAttribute("type","button"),p.setAttribute("aria-label",l.navLabel[1]),p.innerHTML=l.navText[1],u.appendChild(p),h=document.createElement("button"),h.className="tobii__btn tobii__btn--close",h.setAttribute("type","button"),h.setAttribute("aria-label",l.closeLabel),h.innerHTML=l.closeText,u.appendChild(h),g=document.createElement("div"),g.className="tobii__counter",u.appendChild(g),document.body.appendChild(u));const t=document.querySelectorAll(l.selector);if(!t)throw new Error(`Ups, I can't find the selector ${l.selector} on this website.`);const i=[];t.forEach(e=>{const t=e.hasAttribute("data-group")?e.getAttribute("data-group"):"default";let r=e.href;e.hasAttribute("data-target")&&(r=e.getAttribute("data-target")),r+="__"+t,void 0!==i[r]?e.addEventListener("click",e=>{P(t),T(),e.preventDefault()}):(i[r]=1,_(e))})})(a),n.open=T,n.previous=M,n.next=N,n.close=X,n.add=_,n.remove=C,n.reset=oe,n.destroy=()=>{oe(),u.parentNode.removeChild(u)},n.isOpen=le,n.slidesIndex=()=>w[A].currentIndex,n.select=e=>{const t=w[A].currentIndex;if(!le())throw new Error("Ups, I'm closed.");if(le()){if(!e&&0!==e)throw new Error("Ups, no slide specified.");if(e===w[A].currentIndex)throw new Error(`Ups, slide ${e} is already selected.`);if(-1===e||e>=w[A].elementsLength)throw new Error(`Ups, I can't find slide ${e}.`)}w[A].currentIndex=e,$(t),z(e),e<t&&(se("left"),O(t),q(e-1)),e>t&&(se("right"),O(t),q(e+1))},n.slidesCount=()=>w[A].elementsLength,n.selectGroup=P,n.currentGroup=()=>A,n.on=ue,n.off=be,n}


/***/ }),

/***/ "./_src/index.js":
/*!***********************!*\
  !*** ./_src/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./_src/index.scss");
/* harmony import */ var _midzer_tobii__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @midzer/tobii */ "./node_modules/@midzer/tobii/dist/tobii.module.js");
/* harmony import */ var darkmode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! darkmode-js */ "./node_modules/darkmode-js/lib/darkmode-js.js");
/* harmony import */ var darkmode_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(darkmode_js__WEBPACK_IMPORTED_MODULE_2__);
// CSS and SASS files


var tobi = new _midzer_tobii__WEBPACK_IMPORTED_MODULE_1__["default"]();

// Remove the following lines to remove the darkmode js

function addDarkmodeWidget() {
  new (darkmode_js__WEBPACK_IMPORTED_MODULE_2___default())().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);

/***/ }),

/***/ "./node_modules/darkmode-js/lib/darkmode-js.js":
/*!*****************************************************!*\
  !*** ./node_modules/darkmode-js/lib/darkmode-js.js ***!
  \*****************************************************/
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_597__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_597__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_597__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_597__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_597__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_597__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_597__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_597__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_597__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_597__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_597__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_597__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_597__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_597__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_597__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_597__(__nested_webpack_require_597__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/darkmode.js":
/*!*************************!*\
  !*** ./src/darkmode.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IS_BROWSER = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var IS_BROWSER = typeof window !== 'undefined';
exports.IS_BROWSER = IS_BROWSER;

var Darkmode =
/*#__PURE__*/
function () {
  function Darkmode(options) {
    _classCallCheck(this, Darkmode);

    if (!IS_BROWSER) {
      return;
    }

    var defaultOptions = {
      bottom: '32px',
      right: '32px',
      left: 'unset',
      time: '0.3s',
      mixColor: '#fff',
      backgroundColor: '#fff',
      buttonColorDark: '#100f2c',
      buttonColorLight: '#fff',
      label: '',
      saveInCookies: true,
      autoMatchOsTheme: true
    };
    options = Object.assign({}, defaultOptions, options);
    var css = "\n      .darkmode-layer {\n        position: fixed;\n        pointer-events: none;\n        background: ".concat(options.mixColor, ";\n        transition: all ").concat(options.time, " ease;\n        mix-blend-mode: difference;\n      }\n\n      .darkmode-layer--button {\n        width: 2.9rem;\n        height: 2.9rem;\n        border-radius: 50%;\n        right: ").concat(options.right, ";\n        bottom: ").concat(options.bottom, ";\n        left: ").concat(options.left, ";\n      }\n\n      .darkmode-layer--simple {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        transform: scale(1) !important;\n      }\n\n      .darkmode-layer--expanded {\n        transform: scale(100);\n        border-radius: 0;\n      }\n\n      .darkmode-layer--no-transition {\n        transition: none;\n      }\n\n      .darkmode-toggle {\n        background: ").concat(options.buttonColorDark, ";\n        width: 3rem;\n        height: 3rem;\n        position: fixed;\n        border-radius: 50%;\n        border:none;\n        right: ").concat(options.right, ";\n        bottom: ").concat(options.bottom, ";\n        left: ").concat(options.left, ";\n        cursor: pointer;\n        transition: all 0.5s ease;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .darkmode-toggle--white {\n        background: ").concat(options.buttonColorLight, ";\n      }\n\n      .darkmode-toggle--inactive {\n        display: none;\n      }\n\n      .darkmode-background {\n        background: ").concat(options.backgroundColor, ";\n        position: fixed;\n        pointer-events: none;\n        z-index: -10;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n\n      img, .darkmode-ignore {\n        isolation: isolate;\n        display: inline-block;\n      }\n\n      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n        .darkmode-toggle {display: none !important}\n      }\n\n      @supports (-ms-ime-align:auto), (-ms-accelerator:true) {\n        .darkmode-toggle {display: none !important}\n      }\n    ");
    var layer = document.createElement('div');
    var button = document.createElement('button');
    var background = document.createElement('div');
    button.innerHTML = options.label;
    button.classList.add('darkmode-toggle--inactive');
    layer.classList.add('darkmode-layer');
    background.classList.add('darkmode-background');
    var darkmodeActivated = window.localStorage.getItem('darkmode') === 'true';
    var preferedThemeOs = options.autoMatchOsTheme && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var darkmodeNeverActivatedByAction = window.localStorage.getItem('darkmode') === null;

    if (darkmodeActivated === true && options.saveInCookies || darkmodeNeverActivatedByAction && preferedThemeOs) {
      layer.classList.add('darkmode-layer--expanded', 'darkmode-layer--simple', 'darkmode-layer--no-transition');
      button.classList.add('darkmode-toggle--white');
      document.body.classList.add('darkmode--activated');
    }

    document.body.insertBefore(button, document.body.firstChild);
    document.body.insertBefore(layer, document.body.firstChild);
    document.body.insertBefore(background, document.body.firstChild);
    this.addStyle(css);
    this.button = button;
    this.layer = layer;
    this.saveInCookies = options.saveInCookies;
    this.time = options.time;
  }

  _createClass(Darkmode, [{
    key: "addStyle",
    value: function addStyle(css) {
      var linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('type', 'text/css');
      linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(css));
      document.head.appendChild(linkElement);
    }
  }, {
    key: "showWidget",
    value: function showWidget() {
      var _this = this;

      if (!IS_BROWSER) {
        return;
      }

      var button = this.button;
      var layer = this.layer;
      var time = parseFloat(this.time) * 1000;
      button.classList.add('darkmode-toggle');
      button.classList.remove('darkmode-toggle--inactive');
      button.setAttribute("aria-label", "Activate dark mode");
      button.setAttribute("aria-checked", "false");
      button.setAttribute("role", "checkbox");
      layer.classList.add('darkmode-layer--button');
      button.addEventListener('click', function () {
        var isDarkmode = _this.isActivated();

        if (!isDarkmode) {
          layer.classList.add('darkmode-layer--expanded');
          button.setAttribute('disabled', true);
          setTimeout(function () {
            layer.classList.add('darkmode-layer--no-transition');
            layer.classList.add('darkmode-layer--simple');
            button.removeAttribute('disabled');
          }, time);
        } else {
          layer.classList.remove('darkmode-layer--simple');
          button.setAttribute('disabled', true);
          setTimeout(function () {
            layer.classList.remove('darkmode-layer--no-transition');
            layer.classList.remove('darkmode-layer--expanded');
            button.removeAttribute('disabled');
          }, 1);
        }

        button.classList.toggle('darkmode-toggle--white');
        document.body.classList.toggle('darkmode--activated');
        window.localStorage.setItem('darkmode', !isDarkmode);
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (!IS_BROWSER) {
        return;
      }

      var layer = this.layer;
      var isDarkmode = this.isActivated();
      var button = this.button;
      layer.classList.toggle('darkmode-layer--simple');
      document.body.classList.toggle('darkmode--activated');
      window.localStorage.setItem('darkmode', !isDarkmode);
      button.setAttribute("aria-label", "De-activate dark mode");
      button.setAttribute("aria-checked", "true");
    }
  }, {
    key: "isActivated",
    value: function isActivated() {
      if (!IS_BROWSER) {
        return null;
      }

      return document.body.classList.contains('darkmode--activated');
    }
  }]);

  return Darkmode;
}();

exports.default = Darkmode;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_12131__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _darkmode = _interopRequireWildcard(__nested_webpack_require_12131__(/*! ./darkmode */ "./src/darkmode.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = _darkmode.default;
/* eslint-disable */

exports.default = _default;

if (_darkmode.IS_BROWSER) {
  (function (window) {
    window.Darkmode = _darkmode.default;
  })(window);
}
/* eslint-enable */


module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXJrbW9kZS1qcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvZGFya21vZGUuanMiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiSVNfQlJPV1NFUiIsIndpbmRvdyIsIkRhcmttb2RlIiwib3B0aW9ucyIsImRlZmF1bHRPcHRpb25zIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0IiwidGltZSIsIm1peENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYnV0dG9uQ29sb3JEYXJrIiwiYnV0dG9uQ29sb3JMaWdodCIsImxhYmVsIiwic2F2ZUluQ29va2llcyIsImF1dG9NYXRjaE9zVGhlbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJjc3MiLCJsYXllciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsImJhY2tncm91bmQiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXJrbW9kZUFjdGl2YXRlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcmVmZXJlZFRoZW1lT3MiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYWRkU3R5bGUiLCJsaW5rRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcnNlRmxvYXQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiaXNEYXJrbW9kZSIsImlzQWN0aXZhdGVkIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsInRvZ2dsZSIsInNldEl0ZW0iLCJjb250YWlucyJdLCJtYXBwaW5n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OUIsY0FBUSxDQUFDYyxJQUFULENBQWNULFNBQWQsQ0FBd0J5QixNQUF4QixDQUErQixxQkFBL0I7QUFDQWpELFlBQU0sQ0FBQzJCLFlBQVAsQ0FBb0J1QixPQUFwQixDQUE0QixVQUE1QixFQUF3QyxDQUFDTCxVQUF6QztBQUNBeEIsWUFBTSxDQUFDaUIsWUFBUCxDQUFvQixZQUFwQixFQUFrQyx1QkFBbEM7QUFDQWpCLFlBQU0sQ0FBQ2lCLFlBQVAsQ0FBb0IsY0FBcEIsRUFBb0MsTUFBcEM7QUFFRDs7O2tDQUVhO0FBQ1osVUFBSSxDQUFDdkMsVUFBTCxFQUFpQjtBQUNmLGVBQU8sSUFBUDtBQUNEOztBQUNELGFBQU9vQixRQUFRLENBQUNjLElBQVQsQ0FBY1QsU0FBZCxDQUF3QjJCLFFBQXhCLENBQWlDLHFCQUFqQyxDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsT0g7Ozs7O0FBR0E7Ozs7QUFDQSwwQkFBZ0I7QUFDZCxHQUFDLFVBQVNuRCxNQUFULEVBQWlCO0FBQ2hCQSxVQUFNLENBQUNDLFFBQVA7QUFDRCxHQUZELEVBRUdELE1BRkg7QUFHRDtBQUNEIiwiZmlsZSI6ImRhcmttb2RlLWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkYXJrbW9kZS1qc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkYXJrbW9kZS1qc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkYXJrbW9kZS1qc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBJU19CUk9XU0VSID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhcmttb2RlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgYm90dG9tOiAnMzJweCcsXG4gICAgICByaWdodDogJzMycHgnLFxuICAgICAgbGVmdDogJ3Vuc2V0JyxcbiAgICAgIHRpbWU6ICcwLjNzJyxcbiAgICAgIG1peENvbG9yOiAnI2ZmZicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIGJ1dHRvbkNvbG9yRGFyazogJyMxMDBmMmMnLFxuICAgICAgYnV0dG9uQ29sb3JMaWdodDogJyNmZmYnLFxuICAgICAgbGFiZWw6ICcnLFxuICAgICAgc2F2ZUluQ29va2llczogdHJ1ZSxcbiAgICAgIGF1dG9NYXRjaE9zVGhlbWU6IHRydWVcbiAgICB9O1xuXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgIGNvbnN0IGNzcyA9IGBcbiAgICAgIC5kYXJrbW9kZS1sYXllciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7b3B0aW9ucy5taXhDb2xvcn07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAke29wdGlvbnMudGltZX0gZWFzZTtcbiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS1sYXllci0tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDIuOXJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjlyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcmlnaHQ6ICR7b3B0aW9ucy5yaWdodH07XG4gICAgICAgIGJvdHRvbTogJHtvcHRpb25zLmJvdHRvbX07XG4gICAgICAgIGxlZnQ6ICR7b3B0aW9ucy5sZWZ0fTtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLWxheWVyLS1zaW1wbGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLWxheWVyLS1leHBhbmRlZCB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uIHtcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLXRvZ2dsZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7b3B0aW9ucy5idXR0b25Db2xvckRhcmt9O1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIHJpZ2h0OiAke29wdGlvbnMucmlnaHR9O1xuICAgICAgICBib3R0b206ICR7b3B0aW9ucy5ib3R0b219O1xuICAgICAgICBsZWZ0OiAke29wdGlvbnMubGVmdH07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS10b2dnbGUtLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtvcHRpb25zLmJ1dHRvbkNvbG9yTGlnaHR9O1xuICAgICAgfVxuXG4gICAgICAuZGFya21vZGUtdG9nZ2xlLS1pbmFjdGl2ZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtvcHRpb25zLmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHotaW5kZXg6IC0xMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICBpbWcsIC5kYXJrbW9kZS1pZ25vcmUge1xuICAgICAgICBpc29sYXRpb246IGlzb2xhdGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgICAgICAgLmRhcmttb2RlLXRvZ2dsZSB7ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50fVxuICAgICAgfVxuXG4gICAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0byksICgtbXMtYWNjZWxlcmF0b3I6dHJ1ZSkge1xuICAgICAgICAuZGFya21vZGUtdG9nZ2xlIHtkaXNwbGF5OiBub25lICFpbXBvcnRhbnR9XG4gICAgICB9XG4gICAgYDtcblxuICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IG9wdGlvbnMubGFiZWw7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLXRvZ2dsZS0taW5hY3RpdmUnKTtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllcicpO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtYmFja2dyb3VuZCcpO1xuXG4gICAgY29uc3QgZGFya21vZGVBY3RpdmF0ZWQgPVxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrbW9kZScpID09PSAndHJ1ZSc7XG4gICAgY29uc3QgcHJlZmVyZWRUaGVtZU9zID1cbiAgICAgIG9wdGlvbnMuYXV0b01hdGNoT3NUaGVtZSAmJlxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xuICAgIGNvbnN0IGRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiA9XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rhcmttb2RlJykgPT09IG51bGw7XG5cbiAgICBpZiAoXG4gICAgICAoZGFya21vZGVBY3RpdmF0ZWQgPT09IHRydWUgJiYgb3B0aW9ucy5zYXZlSW5Db29raWVzKSB8fFxuICAgICAgKGRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiAmJiBwcmVmZXJlZFRoZW1lT3MpXG4gICAgKSB7XG4gICAgICBsYXllci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAnZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkJyxcbiAgICAgICAgJ2Rhcmttb2RlLWxheWVyLS1zaW1wbGUnLFxuICAgICAgICAnZGFya21vZGUtbGF5ZXItLW5vLXRyYW5zaXRpb24nXG4gICAgICApO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLXRvZ2dsZS0td2hpdGUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtLWFjdGl2YXRlZCcpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGJ1dHRvbiwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShsYXllciwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShiYWNrZ3JvdW5kLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuXG4gICAgdGhpcy5hZGRTdHlsZShjc3MpO1xuXG4gICAgdGhpcy5idXR0b24gPSBidXR0b247XG4gICAgdGhpcy5sYXllciA9IGxheWVyO1xuICAgIHRoaXMuc2F2ZUluQ29va2llcyA9IG9wdGlvbnMuc2F2ZUluQ29va2llcztcbiAgICB0aGlzLnRpbWUgPSBvcHRpb25zLnRpbWU7XG4gIH1cblxuICBhZGRTdHlsZShjc3MpIHtcbiAgICBjb25zdCBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAnaHJlZicsXG4gICAgICAnZGF0YTp0ZXh0L2NzcztjaGFyc2V0PVVURi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoY3NzKVxuICAgICk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XG4gIH1cblxuICBzaG93V2lkZ2V0KCkge1xuICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvbjtcbiAgICBjb25zdCBsYXllciA9IHRoaXMubGF5ZXI7XG4gICAgY29uc3QgdGltZSA9IHBhcnNlRmxvYXQodGhpcy50aW1lKSAqIDEwMDA7XG5cbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtdG9nZ2xlJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLXRvZ2dsZS0taW5hY3RpdmUnKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkFjdGl2YXRlIGRhcmsgbW9kZVwiKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIsIFwiZmFsc2VcIik7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllci0tYnV0dG9uJyk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpc0Rhcmttb2RlID0gdGhpcy5pc0FjdGl2YXRlZCgpO1xuXG4gICAgICBpZiAoIWlzRGFya21vZGUpIHtcbiAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtbGF5ZXItLXNpbXBsZScpO1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0sIHRpbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUtbGF5ZXItLXNpbXBsZScpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsYXllci5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrbW9kZS1sYXllci0tbm8tdHJhbnNpdGlvbicpO1xuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLWxheWVyLS1leHBhbmRlZCcpO1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0sIDEpO1xuICAgICAgfVxuXG4gICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUtdG9nZ2xlLS13aGl0ZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrbW9kZS0tYWN0aXZhdGVkJyk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rhcmttb2RlJywgIWlzRGFya21vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYXllciA9IHRoaXMubGF5ZXI7XG4gICAgY29uc3QgaXNEYXJrbW9kZSA9IHRoaXMuaXNBY3RpdmF0ZWQoKTtcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvbjtcblxuICAgIGxheWVyLmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLWxheWVyLS1zaW1wbGUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rhcmttb2RlJywgIWlzRGFya21vZGUpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiRGUtYWN0aXZhdGUgZGFyayBtb2RlXCIpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuXG4gIH1cblxuICBpc0FjdGl2YXRlZCgpIHtcbiAgICBpZiAoIUlTX0JST1dTRVIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcbiAgfVxufVxuIiwiaW1wb3J0IERhcmttb2RlLCB7IElTX0JST1dTRVIgfSBmcm9tICcuL2Rhcmttb2RlJztcclxuZXhwb3J0IGRlZmF1bHQgRGFya21vZGU7XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5pZiAoSVNfQlJPV1NFUikge1xyXG4gIChmdW5jdGlvbih3aW5kb3cpIHtcclxuICAgIHdpbmRvdy5EYXJrbW9kZSA9IERhcmttb2RlO1xyXG4gIH0pKHdpbmRvdyk7XHJcbn1cclxuLyogZXNsaW50LWVuYWJsZSAqL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint-env browser */
/*
  eslint-disable
  no-console,
  func-names
*/

/** @typedef {any} TODO */

var normalizeUrl = __webpack_require__(/*! ./normalize-url */ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js");
var srcByModuleId = Object.create(null);
var noDocument = typeof document === "undefined";
var forEach = Array.prototype.forEach;

/**
 * @param {function} fn
 * @param {number} time
 * @returns {(function(): void)|*}
 */
function debounce(fn, time) {
  var timeout = 0;
  return function () {
    // @ts-ignore
    var self = this;
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;
    var functionCall = function functionCall() {
      return fn.apply(self, args);
    };
    clearTimeout(timeout);

    // @ts-ignore
    timeout = setTimeout(functionCall, time);
  };
}
function noop() {}

/**
 * @param {TODO} moduleId
 * @returns {TODO}
 */
function getCurrentScriptUrl(moduleId) {
  var src = srcByModuleId[moduleId];
  if (!src) {
    if (document.currentScript) {
      src = ( /** @type {HTMLScriptElement} */document.currentScript).src;
    } else {
      var scripts = document.getElementsByTagName("script");
      var lastScriptTag = scripts[scripts.length - 1];
      if (lastScriptTag) {
        src = lastScriptTag.src;
      }
    }
    srcByModuleId[moduleId] = src;
  }

  /**
   * @param {string} fileMap
   * @returns {null | string[]}
   */
  return function (fileMap) {
    if (!src) {
      return null;
    }
    var splitResult = src.split(/([^\\/]+)\.js$/);
    var filename = splitResult && splitResult[1];
    if (!filename) {
      return [src.replace(".js", ".css")];
    }
    if (!fileMap) {
      return [src.replace(".js", ".css")];
    }
    return fileMap.split(",").map(function (mapRule) {
      var reg = new RegExp("".concat(filename, "\\.js$"), "g");
      return normalizeUrl(src.replace(reg, "".concat(mapRule.replace(/{fileName}/g, filename), ".css")));
    });
  };
}

/**
 * @param {TODO} el
 * @param {string} [url]
 */
function updateCss(el, url) {
  if (!url) {
    if (!el.href) {
      return;
    }

    // eslint-disable-next-line
    url = el.href.split("?")[0];
  }
  if (!isUrlRequest( /** @type {string} */url)) {
    return;
  }
  if (el.isLoaded === false) {
    // We seem to be about to replace a css link that hasn't loaded yet.
    // We're probably changing the same file more than once.
    return;
  }
  if (!url || !(url.indexOf(".css") > -1)) {
    return;
  }

  // eslint-disable-next-line no-param-reassign
  el.visited = true;
  var newEl = el.cloneNode();
  newEl.isLoaded = false;
  newEl.addEventListener("load", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.addEventListener("error", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.href = "".concat(url, "?").concat(Date.now());
  if (el.nextSibling) {
    el.parentNode.insertBefore(newEl, el.nextSibling);
  } else {
    el.parentNode.appendChild(newEl);
  }
}

/**
 * @param {string} href
 * @param {TODO} src
 * @returns {TODO}
 */
function getReloadUrl(href, src) {
  var ret;

  // eslint-disable-next-line no-param-reassign
  href = normalizeUrl(href);
  src.some(
  /**
   * @param {string} url
   */
  // eslint-disable-next-line array-callback-return
  function (url) {
    if (href.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}

/**
 * @param {string} [src]
 * @returns {boolean}
 */
function reloadStyle(src) {
  if (!src) {
    return false;
  }
  var elements = document.querySelectorAll("link");
  var loaded = false;
  forEach.call(elements, function (el) {
    if (!el.href) {
      return;
    }
    var url = getReloadUrl(el.href, src);
    if (!isUrlRequest(url)) {
      return;
    }
    if (el.visited === true) {
      return;
    }
    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });
  return loaded;
}
function reloadAll() {
  var elements = document.querySelectorAll("link");
  forEach.call(elements, function (el) {
    if (el.visited === true) {
      return;
    }
    updateCss(el);
  });
}

/**
 * @param {string} url
 * @returns {boolean}
 */
function isUrlRequest(url) {
  // An URL is not an request if

  // It is not http or https
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    return false;
  }
  return true;
}

/**
 * @param {TODO} moduleId
 * @param {TODO} options
 * @returns {TODO}
 */
module.exports = function (moduleId, options) {
  if (noDocument) {
    console.log("no window.document found, will not HMR CSS");
    return noop;
  }
  var getScriptSrc = getCurrentScriptUrl(moduleId);
  function update() {
    var src = getScriptSrc(options.filename);
    var reloaded = reloadStyle(src);
    if (options.locals) {
      console.log("[HMR] Detected local css modules. Reload all css");
      reloadAll();
      return;
    }
    if (reloaded) {
      console.log("[HMR] css reload %s", src.join(" "));
    } else {
      console.log("[HMR] Reload all css");
      reloadAll();
    }
  }
  return debounce(update, 50);
};

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


/* eslint-disable */

/**
 * @param {string[]} pathComponents
 * @returns {string}
 */
function normalizeUrl(pathComponents) {
  return pathComponents.reduce(function (accumulator, item) {
    switch (item) {
      case "..":
        accumulator.pop();
        break;
      case ".":
        break;
      default:
        accumulator.push(item);
    }
    return accumulator;
  }, /** @type {string[]} */[]).join("/");
}

/**
 * @param {string} urlString
 * @returns {string}
 */
module.exports = function (urlString) {
  urlString = urlString.trim();
  if (/^data:/i.test(urlString)) {
    return urlString;
  }
  var protocol = urlString.indexOf("//") !== -1 ? urlString.split("//")[0] + "//" : "";
  var components = urlString.replace(new RegExp(protocol, "i"), "").split("/");
  var host = components[0].toLowerCase().replace(/\.$/, "");
  components[0] = "";
  var path = normalizeUrl(components);
  return protocol + host + path;
};

/***/ }),

/***/ "./_src/index.scss":
/*!*************************!*\
  !*** ./_src/index.scss ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1737811152499
        var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("app." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("7f53e88f0f61c113a8b1")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "mobile-app-landingpage-template:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/assets/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			if (__webpack_require__.nc) {
/******/ 				linkTag.nonce = __webpack_require__.nc;
/******/ 			}
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatemobile_app_landingpage_template"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./_src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxtQkFBbUIsMkJBQTJCO1dBQzlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQixjQUFjO1dBQ2hDO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxjQUFjLE1BQU07V0FDcEI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsY0FBYyxhQUFhO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsaUJBQWlCLDRCQUE0QjtXQUM3QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQSxnQkFBZ0IsNEJBQTRCO1dBQzVDO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBLGdCQUFnQiw0QkFBNEI7V0FDNUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0JBQWtCLHVDQUF1QztXQUN6RDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLG1CQUFtQixpQ0FBaUM7V0FDcEQ7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNCQUFzQix1Q0FBdUM7V0FDN0Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0JBQXNCLHNCQUFzQjtXQUM1QztXQUNBO1dBQ0EsU0FBUztXQUNUO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxXQUFXO1dBQ1gsV0FBVztXQUNYO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsWUFBWTtXQUNaO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFVBQVU7V0FDVjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxXQUFXO1dBQ1g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQSxtQkFBbUIsd0NBQXdDO1dBQzNEO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxRQUFRO1dBQ1IsUUFBUTtXQUNSO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxPQUFPO1dBQ1A7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFFBQVE7V0FDUjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRSxJQUFJO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLHNDQUFzQztXQUN0QztXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBOztXQUVBOzs7OztVRTNmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vYmlsZS1hcHAtbGFuZGluZ3BhZ2UtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvQG1pZHplci90b2JpaS9kaXN0L3RvYmlpLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9tb2JpbGUtYXBwLWxhbmRpbmdwYWdlLXRlbXBsYXRlLy4vX3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tb2JpbGUtYXBwLWxhbmRpbmdwYWdlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Rhcmttb2RlLWpzL2xpYi9kYXJrbW9kZS1qcy5qcyIsIndlYnBhY2s6Ly9tb2JpbGUtYXBwLWxhbmRpbmdwYWdlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzIiwid2VicGFjazovL21vYmlsZS1hcHAtbGFuZGluZ3BhZ2UtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvbm9ybWFsaXplLXVybC5qcyIsIndlYnBhY2s6Ly9tb2JpbGUtYXBwLWxhbmRpbmdwYWdlLXRlbXBsYXRlLy4vX3NyYy9pbmRleC5zY3NzP2FlOTAiLCJ3ZWJwYWNrOi8vbW9iaWxlLWFwcC1sYW5kaW5ncGFnZS10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tb2JpbGUtYXBwLWxhbmRpbmdwYWdlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21vYmlsZS1hcHAtbGFuZGluZ3BhZ2UtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21vYmlsZS1hcHAtbGFuZGluZ3BhZ2UtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IHVwZGF0ZSBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9tb2JpbGUtYXBwLWxhbmRpbmdwYWdlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXQgbWluaS1jc3MgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vbW9iaWxlLWFwcC1sYW5kaW5ncGFnZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSIsIndlYnBhY2s6Ly9tb2JpbGUtYXBwLWxhbmRpbmdwYWdlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9tb2JpbGUtYXBwLWxhbmRpbmdwYWdlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbW9iaWxlLWFwcC1sYW5kaW5ncGFnZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vbW9iaWxlLWFwcC1sYW5kaW5ncGFnZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21vYmlsZS1hcHAtbGFuZGluZ3BhZ2UtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hvdCBtb2R1bGUgcmVwbGFjZW1lbnQiLCJ3ZWJwYWNrOi8vbW9iaWxlLWFwcC1sYW5kaW5ncGFnZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tb2JpbGUtYXBwLWxhbmRpbmdwYWdlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jc3MgbG9hZGluZyIsIndlYnBhY2s6Ly9tb2JpbGUtYXBwLWxhbmRpbmdwYWdlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL21vYmlsZS1hcHAtbGFuZGluZ3BhZ2UtdGVtcGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9tb2JpbGUtYXBwLWxhbmRpbmdwYWdlLXRlbXBsYXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9tb2JpbGUtYXBwLWxhbmRpbmdwYWdlLXRlbXBsYXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBle2NvbnN0cnVjdG9yKCl7dGhpcy5maWdjYXB0aW9uSWQ9MCx0aGlzLnVzZXJTZXR0aW5ncz1udWxsfWluaXQoZSx0LGkpe3RoaXMudXNlclNldHRpbmdzPWk7Y29uc3Qgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpLG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIiksYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLHM9ZS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihyLnRhYkluZGV4PS0xLHIuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwiZ3JvdXBcIiksci5zdHlsZS5vcGFjaXR5PVwiMFwiLHMmJihhLmFsdD1zLmFsdHx8XCJcIiksYS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcIlwiKSxhLnNldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIsZS5ocmVmKSxlLmhhc0F0dHJpYnV0ZShcImRhdGEtc3Jjc2V0XCIpJiZhLnNldEF0dHJpYnV0ZShcImRhdGEtc3Jjc2V0XCIsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY3NldFwiKSksZS5oYXNBdHRyaWJ1dGUoXCJkYXRhLXNpemVzXCIpJiZhLnNldEF0dHJpYnV0ZShcImRhdGEtc2l6ZXNcIixlLmdldEF0dHJpYnV0ZShcImRhdGEtc2l6ZXNcIikpLHIuYXBwZW5kQ2hpbGQoYSksdGhpcy51c2VyU2V0dGluZ3MuY2FwdGlvbnMpe2xldCB0O1wiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMudXNlclNldHRpbmdzLmNhcHRpb25UZXh0P3Q9dGhpcy51c2VyU2V0dGluZ3MuY2FwdGlvblRleHQoZSk6XCJzZWxmXCI9PT10aGlzLnVzZXJTZXR0aW5ncy5jYXB0aW9uc1NlbGVjdG9yJiZlLmdldEF0dHJpYnV0ZSh0aGlzLnVzZXJTZXR0aW5ncy5jYXB0aW9uQXR0cmlidXRlKT90PWUuZ2V0QXR0cmlidXRlKHRoaXMudXNlclNldHRpbmdzLmNhcHRpb25BdHRyaWJ1dGUpOlwiaW1nXCI9PT10aGlzLnVzZXJTZXR0aW5ncy5jYXB0aW9uc1NlbGVjdG9yJiZzJiZzLmdldEF0dHJpYnV0ZSh0aGlzLnVzZXJTZXR0aW5ncy5jYXB0aW9uQXR0cmlidXRlKSYmKHQ9cy5nZXRBdHRyaWJ1dGUodGhpcy51c2VyU2V0dGluZ3MuY2FwdGlvbkF0dHJpYnV0ZSkpLHRoaXMudXNlclNldHRpbmdzLmNhcHRpb25IVE1MP24uaW5uZXJIVE1MPXQ6bi50ZXh0Q29udGVudD10LHQmJihuLmlkPWB0b2JpaS1maWdjYXB0aW9uLSR7dGhpcy5maWdjYXB0aW9uSWR9YCxyLmFwcGVuZENoaWxkKG4pLGEuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsbi5pZCksci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsbi50ZXh0Q29udGVudCksKyt0aGlzLmZpZ2NhcHRpb25JZCl9dC5hcHBlbmRDaGlsZChyKSxvLmNsYXNzTmFtZT1cInRvYmlpX19sb2FkZXJcIixvLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInByb2dyZXNzYmFyXCIpLG8uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLHRoaXMudXNlclNldHRpbmdzLmxvYWRpbmdJbmRpY2F0b3JMYWJlbCksdC5hcHBlbmRDaGlsZChvKSx0LnNldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiLFwiaW1hZ2VcIiksdC5jbGFzc0xpc3QuYWRkKFwidG9iaWktaW1hZ2VcIil9b25QcmVsb2FkKGUpe3RoaXMub25Mb2FkKGUpfW9uTG9hZChlKXtjb25zdCB0PWUucXVlcnlTZWxlY3RvcihcImltZ1wiKTtpZighdC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKSlyZXR1cm47Y29uc3QgaT1lLnF1ZXJ5U2VsZWN0b3IoXCJmaWd1cmVcIikscj1lLnF1ZXJ5U2VsZWN0b3IoXCIudG9iaWlfX2xvYWRlclwiKTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PntlLnJlbW92ZUNoaWxkKHIpLGkuc3R5bGUub3BhY2l0eT1cIjFcIn0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9PntlLnJlbW92ZUNoaWxkKHIpLGkuc3R5bGUub3BhY2l0eT1cIjFcIn0pLHQuaGFzQXR0cmlidXRlKFwiZGF0YS1zcmNzZXRcIikmJih0LnNldEF0dHJpYnV0ZShcInNyY3NldFwiLHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNzZXRcIikpLHQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1zcmNzZXRcIikpLHQuaGFzQXR0cmlidXRlKFwiZGF0YS1zaXplc1wiKSYmKHQuc2V0QXR0cmlidXRlKFwic2l6ZXNcIix0LmdldEF0dHJpYnV0ZShcImRhdGEtc2l6ZXNcIikpLHQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1zaXplc1wiKSksdC5zZXRBdHRyaWJ1dGUoXCJzcmNcIix0LmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpKSx0LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc3JjXCIpfW9uTGVhdmUoZSl7fW9uQ2xlYW51cChlKXt9b25SZXNldCgpe3RoaXMuZmlnY2FwdGlvbklkPTB9fWNsYXNzIHR7Y29uc3RydWN0b3IoKXt0aGlzLnVzZXJTZXR0aW5ncz1udWxsfWluaXQoZSx0LGkpe3RoaXMudXNlclNldHRpbmdzPWk7Y29uc3Qgcj1lLmhhc0F0dHJpYnV0ZShcImRhdGEtdGFyZ2V0XCIpP2UuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXJnZXRcIik6ZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO3Quc2V0QXR0cmlidXRlKFwiZGF0YS1IUkVGXCIsciksZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFsbG93XCIpJiZ0LnNldEF0dHJpYnV0ZShcImRhdGEtYWxsb3dcIixlLmdldEF0dHJpYnV0ZShcImRhdGEtYWxsb3dcIikpLGUuaGFzQXR0cmlidXRlKFwiZGF0YS13aWR0aFwiKSYmdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdpZHRoXCIsYCR7ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdpZHRoXCIpfWApLGUuaGFzQXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIikmJnQuc2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIixgJHtlLmdldEF0dHJpYnV0ZShcImRhdGEtaGVpZ2h0XCIpfWApLHQuc2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIsXCJpZnJhbWVcIiksdC5jbGFzc0xpc3QuYWRkKFwidG9iaWktaWZyYW1lXCIpfW9uUHJlbG9hZChlKXt9b25Mb2FkKGUpe2xldCB0PWUucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKTtjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoaS5jbGFzc05hbWU9XCJ0b2JpaV9fbG9hZGVyXCIsaS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJwcm9ncmVzc2JhclwiKSxpLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIix0aGlzLnVzZXJTZXR0aW5ncy5sb2FkaW5nSW5kaWNhdG9yTGFiZWwpLGUuYXBwZW5kQ2hpbGQoaSksbnVsbD09dCl7dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO2NvbnN0IGk9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7dC5zZXRBdHRyaWJ1dGUoXCJmcmFtZWJvcmRlclwiLFwiMFwiKSx0LnNldEF0dHJpYnV0ZShcInNyY1wiLGkpLHQuc2V0QXR0cmlidXRlKFwiYWxsb3dmdWxsc2NyZWVuXCIsXCJcIiksaS5pbmRleE9mKFwieW91dHViZS5jb21cIik+LTE/dC5zZXRBdHRyaWJ1dGUoXCJhbGxvd1wiLFwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiKTppLmluZGV4T2YoXCJ2aW1lby5jb21cIik+LTE/dC5zZXRBdHRyaWJ1dGUoXCJhbGxvd1wiLFwiYXV0b3BsYXk7IHBpY3R1cmUtaW4tcGljdHVyZVwiKTplLmhhc0F0dHJpYnV0ZShcImRhdGEtYWxsb3dcIikmJnQuc2V0QXR0cmlidXRlKFwiYWxsb3dcIixlLmdldEF0dHJpYnV0ZShcImRhdGEtYWxsb3dcIikpLGUuZ2V0QXR0cmlidXRlKFwiZGF0YS13aWR0aFwiKSYmKHQuc3R5bGUubWF4V2lkdGg9YCR7ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdpZHRoXCIpfWApLGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIikmJih0LnN0eWxlLm1heEhlaWdodD1gJHtlLmdldEF0dHJpYnV0ZShcImRhdGEtaGVpZ2h0XCIpfWApLHQuc3R5bGUub3BhY2l0eT1cIjBcIixlLmFwcGVuZENoaWxkKHQpLHQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+e3Quc3R5bGUub3BhY2l0eT1cIjFcIjtjb25zdCBpPWUucXVlcnlTZWxlY3RvcihcIi50b2JpaV9fbG9hZGVyXCIpO2kmJmUucmVtb3ZlQ2hpbGQoaSl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT57dC5zdHlsZS5vcGFjaXR5PVwiMVwiO2NvbnN0IGk9ZS5xdWVyeVNlbGVjdG9yKFwiLnRvYmlpX19sb2FkZXJcIik7aSYmZS5yZW1vdmVDaGlsZChpKX0pfWVsc2UgdC5zZXRBdHRyaWJ1dGUoXCJzcmNcIixlLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKSl9b25MZWF2ZShlKXt9b25DbGVhbnVwKGUpe2NvbnN0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpO3Quc2V0QXR0cmlidXRlKFwic3JjXCIsXCJcIiksdC5zdHlsZS5vcGFjaXR5PVwiMFwifW9uUmVzZXQoKXt9fWNsYXNzIGl7Y29uc3RydWN0b3IoKXt0aGlzLnVzZXJTZXR0aW5ncz1udWxsfWluaXQoZSx0LGkpe3RoaXMudXNlclNldHRpbmdzPWk7Y29uc3Qgcj1lLmhhc0F0dHJpYnV0ZShcImRhdGEtdGFyZ2V0XCIpP2UuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXJnZXRcIik6ZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyKS5jbG9uZU5vZGUoITApO2lmKCFuKXRocm93IG5ldyBFcnJvcihgVXBzLCBJIGNhbid0IGZpbmQgdGhlIHRhcmdldCAke3J9LmApO3QuYXBwZW5kQ2hpbGQobiksdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIixcImh0bWxcIiksdC5jbGFzc0xpc3QuYWRkKFwidG9iaWktaHRtbFwiKX1vblByZWxvYWQoZSl7fW9uTG9hZChlLHQpe2NvbnN0IGk9ZS5xdWVyeVNlbGVjdG9yKFwidmlkZW9cIik7aSYmKGkuaGFzQXR0cmlidXRlKFwiZGF0YS10aW1lXCIpJiZpLnJlYWR5U3RhdGU+MCYmKGkuY3VycmVudFRpbWU9aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRpbWVcIikpLHRoaXMudXNlclNldHRpbmdzLmF1dG9wbGF5VmlkZW8mJmkucGxheSgpKTtjb25zdCByPWUucXVlcnlTZWxlY3RvcihcImF1ZGlvXCIpO3ImJnRoaXMudXNlclNldHRpbmdzLmF1dG9wbGF5QXVkaW8mJnIucGxheSgpLGUuY2xhc3NMaXN0LmFkZChcInRvYmlpLWdyb3VwLVwiK3QpfW9uTGVhdmUoZSl7Y29uc3QgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJ2aWRlb1wiKTt0JiYodC5wYXVzZWR8fHQucGF1c2UoKSx0LnJlYWR5U3RhdGU+MCYmdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRpbWVcIix0LmN1cnJlbnRUaW1lKSk7Y29uc3QgaT1lLnF1ZXJ5U2VsZWN0b3IoXCJhdWRpb1wiKTtpJiYoaS5wYXVzZWR8fGkucGF1c2UoKSl9b25DbGVhbnVwKGUpe2NvbnN0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwidmlkZW9cIik7aWYodCYmdC5yZWFkeVN0YXRlPjAmJnQucmVhZHlTdGF0ZTwzJiZ0LmR1cmF0aW9uIT09dC5jdXJyZW50VGltZSl7Y29uc3QgaT10LmNsb25lTm9kZSghMCk7dGhpcy5fcmVtb3ZlU291cmNlcyh0KSx0LmxvYWQoKSx0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCksZS5hcHBlbmRDaGlsZChpKX19b25SZXNldCgpe31fcmVtb3ZlU291cmNlcyhlKXtjb25zdCB0PWUucXVlcnlTZWxlY3RvckFsbChcInNyY1wiKTt0JiZ0LmZvckVhY2goZT0+e2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsXCJcIil9KX19Y2xhc3Mgcntjb25zdHJ1Y3Rvcigpe3RoaXMucGxheWVySWQ9MCx0aGlzLlBMQVlFUj1bXSx0aGlzLnVzZXJTZXR0aW5ncz1udWxsfWluaXQoZSx0LGkpe3RoaXMudXNlclNldHRpbmdzPWk7Y29uc3Qgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QuYXBwZW5kQ2hpbGQociksdGhpcy5QTEFZRVJbdGhpcy5wbGF5ZXJJZF09bmV3IHdpbmRvdy5ZVC5QbGF5ZXIocix7aG9zdDpcImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tXCIsaGVpZ2h0OmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIil8fFwiMzYwXCIsd2lkdGg6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdpZHRoXCIpfHxcIjY0MFwiLHZpZGVvSWQ6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpLHBsYXllclZhcnM6e2NvbnRyb2xzOmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb250cm9sc1wiKXx8MSxyZWw6MCxwbGF5c2lubGluZToxfX0pLHQuc2V0QXR0cmlidXRlKFwiZGF0YS1wbGF5ZXJcIix0aGlzLnBsYXllcklkKSx0LnNldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiLFwieW91dHViZVwiKSx0LmNsYXNzTGlzdC5hZGQoXCJ0b2JpaS15b3V0dWJlXCIpLHRoaXMucGxheWVySWQrK31vblByZWxvYWQoZSl7fW9uTG9hZChlKXt0aGlzLnVzZXJTZXR0aW5ncy5hdXRvcGxheVZpZGVvJiZ0aGlzLlBMQVlFUltlLmdldEF0dHJpYnV0ZShcImRhdGEtcGxheWVyXCIpXS5wbGF5VmlkZW8oKX1vbkxlYXZlKGUpezE9PT10aGlzLlBMQVlFUltlLmdldEF0dHJpYnV0ZShcImRhdGEtcGxheWVyXCIpXS5nZXRQbGF5ZXJTdGF0ZSgpJiZ0aGlzLlBMQVlFUltlLmdldEF0dHJpYnV0ZShcImRhdGEtcGxheWVyXCIpXS5wYXVzZVZpZGVvKCl9b25DbGVhbnVwKGUpezE9PT10aGlzLlBMQVlFUltlLmdldEF0dHJpYnV0ZShcImRhdGEtcGxheWVyXCIpXS5nZXRQbGF5ZXJTdGF0ZSgpJiZ0aGlzLlBMQVlFUltlLmdldEF0dHJpYnV0ZShcImRhdGEtcGxheWVyXCIpXS5wYXVzZVZpZGVvKCl9b25SZXNldCgpe319ZnVuY3Rpb24gbihhKXtjb25zdCBzPXtpbWFnZTpuZXcgZSxodG1sOm5ldyBpLGlmcmFtZTpuZXcgdCx5b3V0dWJlOm5ldyByfSxvPVsnYVtocmVmXTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pOm5vdChbaW5lcnRdKScsJ2FyZWFbaHJlZl06bm90KFt0YWJpbmRleF49XCItXCJdKTpub3QoW2luZXJ0XSknLFwiaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbaW5lcnRdKVwiLFwic2VsZWN0Om5vdChbZGlzYWJsZWRdKTpub3QoW2luZXJ0XSlcIixcInRleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW2luZXJ0XSlcIixcImJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KFtpbmVydF0pXCIsJ2lmcmFtZTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pOm5vdChbaW5lcnRdKScsJ2F1ZGlvOm5vdChbdGFiaW5kZXhePVwiLVwiXSk6bm90KFtpbmVydF0pJywndmlkZW86bm90KFt0YWJpbmRleF49XCItXCJdKTpub3QoW2luZXJ0XSknLCdbY29udGVudGVkaXRhYmxlXTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pOm5vdChbaW5lcnRdKScsJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleF49XCItXCJdKTpub3QoW2luZXJ0XSknXTtsZXQgbD17fTtjb25zdCBkPVtdLGM9e2dhbGxlcnk6W10sc2xpZGVyOm51bGwsc2xpZGVyRWxlbWVudHM6W10sZWxlbWVudHNMZW5ndGg6MCxjdXJyZW50SW5kZXg6MCx4OjB9O2xldCB1PW51bGwsYj1udWxsLHA9bnVsbCxoPW51bGwsZz1udWxsLG09bnVsbCx5PW51bGwsZj0hMSx3PXt9LEE9bnVsbCx2PVtdLHg9MDtjb25zdCBFPXtlbGVtZW50Om51bGwsb3JpZ2luWDowLG9yaWdpblk6MCx0cmFuc2xhdGVYOjAsdHJhbnNsYXRlWTowLHNjYWxlOjF9LEw9e3N0YXJ0WDowLHN0YXJ0WTowLHg6MCx5OjAsZGlzdGFuY2U6MH0sXz1lPT57aWYobnVsbD09PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXR5cGU9XCJ5b3V0dWJlXCJdJyl8fGYpUyhlKTtlbHNle2lmKG51bGw9PT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlmcmFtZV9hcGlcIikpe2NvbnN0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSx0PWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO2UuaWQ9XCJpZnJhbWVfYXBpXCIsZS5zcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpXCIsdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHQpfS0xPT09ZC5pbmRleE9mKGUpJiZkLnB1c2goZSksd2luZG93Lm9uWW91VHViZVBsYXllckFQSVJlYWR5PSgpPT57ZC5mb3JFYWNoKGU9PntTKGUpfSksZj0hMH19fSxJPWU9PmUuaGFzQXR0cmlidXRlKFwiZGF0YS1ncm91cFwiKT9lLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JvdXBcIik6XCJkZWZhdWx0XCIsUz1lPT57Y29uc3QgdD1JKGUpO2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh3LHQpfHwod1t0XT1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGMpKSx3W3RdLnNsaWRlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHdbdF0uc2xpZGVyLmNsYXNzTmFtZT1cInRvYmlpX19zbGlkZXJcIix3W3RdLnNsaWRlci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSx1LmFwcGVuZENoaWxkKHdbdF0uc2xpZGVyKSksLTEhPT13W3RdLmdhbGxlcnkuaW5kZXhPZihlKSl0aHJvdyBuZXcgRXJyb3IoXCJVcHMsIGVsZW1lbnQgYWxyZWFkeSBhZGRlZC5cIik7e2lmKHdbdF0uZ2FsbGVyeS5wdXNoKGUpLHdbdF0uZWxlbWVudHNMZW5ndGgrKyxsLnpvb20mJmUucXVlcnlTZWxlY3RvcihcImltZ1wiKSYmXCJmYWxzZVwiIT09ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXpvb21cIil8fFwidHJ1ZVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXpvb21cIikpe2NvbnN0IHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmNsYXNzTmFtZT1cInRvYmlpLXpvb21fX2ljb25cIix0LmlubmVySFRNTD1sLnpvb21UZXh0LGUuY2xhc3NMaXN0LmFkZChcInRvYmlpLXpvb21cIiksZS5hcHBlbmRDaGlsZCh0KX1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLFUpO2NvbnN0IGk9WShlKSxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3IuY2xhc3NOYW1lPVwidG9iaWlfX3NsaWRlXCIsci5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsci5zdHlsZS5sZWZ0PTEwMCp3W3RdLngrXCIlXCIsci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSxpLmluaXQoZSxuLGwpLHIuYXBwZW5kQ2hpbGQobiksd1t0XS5zbGlkZXIuYXBwZW5kQ2hpbGQociksd1t0XS5zbGlkZXJFbGVtZW50cy5wdXNoKHIpLCsrd1t0XS54LGxlKCkmJnQ9PT1BJiYoYWUoKSxzZSgpKX19LEM9ZT0+e2NvbnN0IHQ9SShlKTtpZigtMT09PXdbdF0uZ2FsbGVyeS5pbmRleE9mKGUpKXRocm93IG5ldyBFcnJvcihgVXBzLCBJIGNhbid0IGZpbmQgYSBzbGlkZSBmb3IgdGhlIGVsZW1lbnQgJHtlfS5gKTt7Y29uc3QgaT13W3RdLmdhbGxlcnkuaW5kZXhPZihlKSxyPXdbdF0uc2xpZGVyRWxlbWVudHNbaV07aWYobGUoKSYmdD09PUEmJmk9PT13W3RdLmN1cnJlbnRJbmRleCl7aWYoMT09PXdbdF0uZWxlbWVudHNMZW5ndGgpdGhyb3cgWCgpLG5ldyBFcnJvcihcIlVwcywgSSd2ZSBjbG9zZWQuIFRoZXJlIGFyZSBubyBzbGlkZXMgbW9yZSB0byBzaG93LlwiKTswPT09d1t0XS5jdXJyZW50SW5kZXg/TigpOk0oKSxhZSgpLHNlKCl9aWYod1t0XS5nYWxsZXJ5LnNwbGljZSh3W3RdLmdhbGxlcnkuaW5kZXhPZihlKSksd1t0XS5zbGlkZXJFbGVtZW50cy5zcGxpY2Uod1t0XS5nYWxsZXJ5LmluZGV4T2YoZSkpLHdbdF0uZWxlbWVudHNMZW5ndGgtLSwtLXdbdF0ueCxsLnpvb20mJmUucXVlcnlTZWxlY3RvcihcIi50b2JpaS16b29tX19pY29uXCIpKXtjb25zdCB0PWUucXVlcnlTZWxlY3RvcihcIi50b2JpaS16b29tX19pY29uXCIpO3QucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwidG9iaWktem9vbVwiKSx0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCl9ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixVKSxyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocil9fSxZPWU9Pntjb25zdCB0PWUuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpO3JldHVybiB2b2lkIDAhPT1zW3RdP3NbdF06KGUuaGFzQXR0cmlidXRlKFwiZGF0YS10eXBlXCIpJiZjb25zb2xlLmxvZyhcIlVua25vd24gbGlnaHRib3ggZWxlbWVudCB0eXBlOiBcIit0KSxzLmltYWdlKX0sVD0oZT0wKT0+e2lmKGxlKCkpdGhyb3cgbmV3IEVycm9yKFwiVXBzLCBJJ20gYWxlYWR5IG9wZW4uXCIpO2lmKC0xPT09ZXx8ZT49d1tBXS5lbGVtZW50c0xlbmd0aCl0aHJvdyBuZXcgRXJyb3IoYFVwcywgSSBjYW4ndCBmaW5kIHNsaWRlICR7ZX0uYCk7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0b2JpaS1pcy1vcGVuXCIpLGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInRvYmlpLWlzLW9wZW5cIiksZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwidG9iaWktaXMtb3Blbi1cIitBKSxhZSgpLGwuY2xvc2V8fChoLmRpc2FibGVkPSExLGguc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIikpLG09ZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtjb25zdCB0PXdpbmRvdy5sb2NhdGlvbi5ocmVmO3dpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7dG9iaWk6XCJjbG9zZVwifSxcIkltYWdlXCIsdCksd1tBXS5jdXJyZW50SW5kZXg9ZSxyZSgpLHood1tBXS5jdXJyZW50SW5kZXgpLHdbQV0uc2xpZGVyLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKSx1LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKSxzZSgpLHEod1tBXS5jdXJyZW50SW5kZXgrMSkscSh3W0FdLmN1cnJlbnRJbmRleC0xKSx3W0FdLnNsaWRlci5jbGFzc0xpc3QuYWRkKFwidG9iaWlfX3NsaWRlci0tYW5pbWF0ZVwiKTtjb25zdCBpPW5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoXCJvcGVuXCIse2RldGFpbDp7Z3JvdXA6QX19KTt1LmRpc3BhdGNoRXZlbnQoaSl9LFg9KCk9PntpZighbGUoKSl0aHJvdyBuZXcgRXJyb3IoXCJVcHMsIEknbSBhbHJlYWR5IGNsb3NlZC5cIik7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2JpaS1pcy1vcGVuXCIpLGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInRvYmlpLWlzLW9wZW5cIiksZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwidG9iaWktaXMtb3Blbi1cIitBKSxuZSgpLG51bGwhPT13aW5kb3cuaGlzdG9yeS5zdGF0ZSYmXCJjbG9zZVwiPT09d2luZG93Lmhpc3Rvcnkuc3RhdGUudG9iaWkmJndpbmRvdy5oaXN0b3J5LmJhY2soKSxtLmZvY3VzKCksJCh3W0FdLmN1cnJlbnRJbmRleCksTyh3W0FdLmN1cnJlbnRJbmRleCksdS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSx3W0FdLnNsaWRlci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSx3W0FdLmN1cnJlbnRJbmRleD0wLHdbQV0uc2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2JpaV9fc2xpZGVyLS1hbmltYXRlXCIpO2NvbnN0IGU9bmV3IHdpbmRvdy5DdXN0b21FdmVudChcImNsb3NlXCIse2RldGFpbDp7Z3JvdXA6QX19KTt1LmRpc3BhdGNoRXZlbnQoZSl9LHE9ZT0+e2lmKHZvaWQgMD09PXdbQV0uc2xpZGVyRWxlbWVudHNbZV0pcmV0dXJuO2NvbnN0IHQ9d1tBXS5zbGlkZXJFbGVtZW50c1tlXS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdHlwZV1cIik7WSh0KS5vblByZWxvYWQodCl9LHo9ZT0+e2lmKHZvaWQgMD09PXdbQV0uc2xpZGVyRWxlbWVudHNbZV0pcmV0dXJuO2NvbnN0IHQ9d1tBXS5zbGlkZXJFbGVtZW50c1tlXS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdHlwZV1cIiksaT1ZKHQpO3dbQV0uc2xpZGVyRWxlbWVudHNbZV0uY2xhc3NMaXN0LmFkZChcInRvYmlpX19zbGlkZS0taXMtYWN0aXZlXCIpLHdbQV0uc2xpZGVyRWxlbWVudHNbZV0uc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpLGkub25Mb2FkKHQsQSl9LE09KCk9PntpZighbGUoKSl0aHJvdyBuZXcgRXJyb3IoXCJVcHMsIEknbSBjbG9zZWQuXCIpO3dbQV0uY3VycmVudEluZGV4PjAmJigkKHdbQV0uY3VycmVudEluZGV4KSx6KC0td1tBXS5jdXJyZW50SW5kZXgpLHNlKFwibGVmdFwiKSxPKHdbQV0uY3VycmVudEluZGV4KzEpLHEod1tBXS5jdXJyZW50SW5kZXgtMSkpO2NvbnN0IGU9bmV3IHdpbmRvdy5DdXN0b21FdmVudChcInByZXZpb3VzXCIse2RldGFpbDp7Z3JvdXA6QX19KTt1LmRpc3BhdGNoRXZlbnQoZSl9LE49KCk9PntpZighbGUoKSl0aHJvdyBuZXcgRXJyb3IoXCJVcHMsIEknbSBjbG9zZWQuXCIpO3dbQV0uY3VycmVudEluZGV4PHdbQV0uZWxlbWVudHNMZW5ndGgtMSYmKCQod1tBXS5jdXJyZW50SW5kZXgpLHooKyt3W0FdLmN1cnJlbnRJbmRleCksc2UoXCJyaWdodFwiKSxPKHdbQV0uY3VycmVudEluZGV4LTEpLHEod1tBXS5jdXJyZW50SW5kZXgrMSkpO2NvbnN0IGU9bmV3IHdpbmRvdy5DdXN0b21FdmVudChcIm5leHRcIix7ZGV0YWlsOntncm91cDpBfX0pO3UuZGlzcGF0Y2hFdmVudChlKX0sUD1lPT57aWYobGUoKSl0aHJvdyBuZXcgRXJyb3IoXCJVcHMsIEknbSBvcGVuLlwiKTtpZighZSl0aHJvdyBuZXcgRXJyb3IoXCJVcHMsIG5vIGdyb3VwIHNwZWNpZmllZC5cIik7aWYoZSYmIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh3LGUpKXRocm93IG5ldyBFcnJvcihgVXBzLCBJIGRvbid0IGhhdmUgYSBncm91cCBjYWxsZWQgXCIke2V9XCIuYCk7QT1lfSwkPWU9PntpZih2b2lkIDA9PT13W0FdLnNsaWRlckVsZW1lbnRzW2VdKXJldHVybjtjb25zdCB0PXdbQV0uc2xpZGVyRWxlbWVudHNbZV0ucXVlcnlTZWxlY3RvcihcIltkYXRhLXR5cGVdXCIpLGk9WSh0KTt3W0FdLnNsaWRlckVsZW1lbnRzW2VdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2JpaV9fc2xpZGUtLWlzLWFjdGl2ZVwiKSx3W0FdLnNsaWRlckVsZW1lbnRzW2VdLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpLGkub25MZWF2ZSh0KX0sTz1lPT57aWYodm9pZCAwPT09d1tBXS5zbGlkZXJFbGVtZW50c1tlXSlyZXR1cm47Y29uc3QgdD13W0FdLnNsaWRlckVsZW1lbnRzW2VdLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10eXBlXVwiKTtZKHQpLm9uQ2xlYW51cCh0KSxMLnN0YXJ0WD0wLEwuc3RhcnRZPTAsTC54PTAsTC55PTAsTC5kaXN0YW5jZT0wLHg9MCxGKCkmJmllKCksRS5lbGVtZW50PW51bGx9LGs9KCk9Pnt5PS13W0FdLmN1cnJlbnRJbmRleCp1Lm9mZnNldFdpZHRoLHdbQV0uc2xpZGVyLnN0eWxlLnRyYW5zZm9ybT1gdHJhbnNsYXRlKCR7eX1weCwgMClgfSxSPSgpPT57aygpfSxVPWU9PntlLnByZXZlbnREZWZhdWx0KCksQT1JKGUuY3VycmVudFRhcmdldCksVCh3W0FdLmdhbGxlcnkuaW5kZXhPZihlLmN1cnJlbnRUYXJnZXQpKX0sSD1lPT57ZS50YXJnZXQ9PT1iP00oKTplLnRhcmdldD09PXA/TigpOihlLnRhcmdldD09PWh8fGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRvYmlpX19zbGlkZVwiKSYmbC5kb2NDbG9zZSkmJlgoKSxlLnN0b3BQcm9wYWdhdGlvbigpfSxEPWU9Pntjb25zdCB0PUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHUucXVlcnlTZWxlY3RvckFsbChgLnRvYmlpX19idG46bm90KFtkaXNhYmxlZF0pLCAudG9iaWlfX3NsaWRlLS1pcy1hY3RpdmUgJHtvLmpvaW4oXCIsIC50b2JpaV9fc2xpZGUtLWlzLWFjdGl2ZSBcIil9YCkpLmZpbHRlcihlPT4hIShlLm9mZnNldFdpZHRofHxlLm9mZnNldEhlaWdodHx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkpLGk9dC5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpOzk9PT1lLmtleUNvZGV8fFwiVGFiXCI9PT1lLmNvZGU/ZS5zaGlmdEtleSYmMD09PWk/KHRbdC5sZW5ndGgtMV0uZm9jdXMoKSxlLnByZXZlbnREZWZhdWx0KCkpOmUuc2hpZnRLZXl8fGkhPT10Lmxlbmd0aC0xJiYtMSE9PWl8fCh0WzBdLmZvY3VzKCksZS5wcmV2ZW50RGVmYXVsdCgpKToyNz09PWUua2V5Q29kZXx8XCJFc2NhcGVcIj09PWUuY29kZT8oZS5wcmV2ZW50RGVmYXVsdCgpLFgoKSk6Mzc9PT1lLmtleUNvZGV8fFwiQXJyb3dMZWZ0XCI9PT1lLmNvZGU/KGUucHJldmVudERlZmF1bHQoKSxNKCkpOjM5IT09ZS5rZXlDb2RlJiZcIkFycm93UmlnaHRcIiE9PWUuY29kZXx8KGUucHJldmVudERlZmF1bHQoKSxOKCkpfSxCPSgpPT57dj1bXSxrKCksd1tBXS5zbGlkZXIuY2xhc3NMaXN0LnJlbW92ZShcInRvYmlpX19zbGlkZXItLWlzLVwiKyhGKCk/XCJtb3ZpbmdcIjpcImRyYWdnaW5nXCIpKX0sVj1lPT57aWYoIWNlKGUudGFyZ2V0KSYmKGUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpLEwuc3RhcnRYPUwueD1lLmNsaWVudFgsTC5zdGFydFk9TC55PWUuY2xpZW50WSxMLmRpc3RhbmNlPTAsdi5wdXNoKGUpLDI9PT12Lmxlbmd0aCkpe2NvbnN0e3g6ZSx5OnR9PXRlKHZbMF0uY2xpZW50WCx2WzBdLmNsaWVudFksdlsxXS5jbGllbnRYLHZbMV0uY2xpZW50WSk7TC5zdGFydFg9TC54PWUsTC5zdGFydFk9TC55PXQsTC5kaXN0YW5jZT1lZSh2WzBdLmNsaWVudFgtdlsxXS5jbGllbnRYLHZbMF0uY2xpZW50WS12WzFdLmNsaWVudFkpL0Uuc2NhbGV9fSxqPWU9PntpZighdi5sZW5ndGgpcmV0dXJuO3dbQV0uc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJ0b2JpaV9fc2xpZGVyLS1pcy1cIisoRigpP1wibW92aW5nXCI6XCJkcmFnZ2luZ1wiKSk7Y29uc3QgdD12LmZpbmRJbmRleCh0PT50LnBvaW50ZXJJZD09PWUucG9pbnRlcklkKTtpZih2W3RdPWUsMj09PXYubGVuZ3RoKXtjb25zdHt4OmUseTp0fT10ZSh2WzBdLmNsaWVudFgsdlswXS5jbGllbnRZLHZbMV0uY2xpZW50WCx2WzFdLmNsaWVudFkpLGk9ZWUodlswXS5jbGllbnRYLXZbMV0uY2xpZW50WCx2WzBdLmNsaWVudFktdlsxXS5jbGllbnRZKS9MLmRpc3RhbmNlO3JldHVybiBaKEsoaSwxLDQpLGUsdCxlLUwueCx0LUwueSksTC54PWUsdm9pZChMLnk9dCl9aWYoRigpJiZRKGUuY2xpZW50WC1MLngsZS5jbGllbnRZLUwueSksTC54PWUuY2xpZW50WCxMLnk9ZS5jbGllbnRZLCFGKCkpe2NvbnN0IGU9TC5zdGFydFgtTC54LHQ9TC5zdGFydFktTC55O2lmKGVlKGUsdCk8MTApcmV0dXJuO01hdGguYWJzKGUpPk1hdGguYWJzKHQpJiZ3W0FdLmVsZW1lbnRzTGVuZ3RoPjE/d1tBXS5zbGlkZXIuc3R5bGUudHJhbnNmb3JtPWB0cmFuc2xhdGUoJHt5LU1hdGgucm91bmQoZSl9cHgsIDApYDpsLnN3aXBlQ2xvc2UmJih3W0FdLnNsaWRlci5zdHlsZS50cmFuc2Zvcm09YHRyYW5zbGF0ZSgke3l9cHgsIC0ke01hdGgucm91bmQodCl9cHgpYCl9fSxXPWU9PntpZighdi5sZW5ndGgpcmV0dXJuO3dbQV0uc2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2JpaV9fc2xpZGVyLS1pcy1cIisoRigpP1wibW92aW5nXCI6XCJkcmFnZ2luZ1wiKSk7Y29uc3QgdD12LmZpbmRJbmRleCh0PT50LnBvaW50ZXJJZD09PWUucG9pbnRlcklkKTt2LnNwbGljZSh0LDEpO2NvbnN0IGk9ZS5jbGllbnRYLHI9ZS5jbGllbnRZLG49TC5zdGFydFgtaSxhPUwuc3RhcnRZLXIscz1NYXRoLmFicyhuKSxvPU1hdGguYWJzKGEpO2lmKHN8fG8pRigpfHwobjwwJiZzPmwudGhyZXNob2xkJiZ3W0FdLmN1cnJlbnRJbmRleD4wP00oKTpuPjAmJnM+bC50aHJlc2hvbGQmJndbQV0uY3VycmVudEluZGV4IT09d1tBXS5lbGVtZW50c0xlbmd0aC0xP04oKTphPjAmJm8+bC50aHJlc2hvbGQmJmwuc3dpcGVDbG9zZT9YKCk6aygpKTtlbHNle2NvbnN0IHQ9KG5ldyBEYXRlKS5nZXRUaW1lKCksbj10LXg7bjw1MDAmJm4+MTAwPyhlLnByZXZlbnREZWZhdWx0KCkseD0wLEYoKT9pZSgpOlooMixpLHIsMCwwKSk6KHg9dCxkZSgpJiZ3aW5kb3cuc2V0VGltZW91dCgoKT0+e2NvbnN0e2xlZnQ6dCx0b3A6bixib3R0b206YSxyaWdodDpzLHdpZHRoOm99PWUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3I8bnx8cj5hfHwheHx8KGk+dCYmaTx0K28vMj9NKCk6aTxzJiZpPnMtby8yJiZOKCkpfSw1MDApKX19LEc9ZT0+e2NvbnN0IHQ9TWF0aC5zaWduKGUuZGVsdGFZKT4wPy0xOjE7KEYoKXx8dCkmJihlLnByZXZlbnREZWZhdWx0KCksWihLKEUuc2NhbGUrdC8oMTAvRS5zY2FsZSksMSw0KSxlLmNsaWVudFgsZS5jbGllbnRZLDAsMCkpfSxKPShlLHQpPT57Y29uc3R7ZWxlbWVudDppLHNjYWxlOnIsb3JpZ2luWDpuLG9yaWdpblk6YX09RSxzPVwieFwiPT09ZSxvPXM/bjphLGw9cz9cIm9mZnNldFdpZHRoXCI6XCJvZmZzZXRIZWlnaHRcIixkPWkucGFyZW50Tm9kZVtsXSxjPWlbbF0sdT1pLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGI9KG8tYy8yKSooci0xKSxwPU1hdGgubWF4KDAsTWF0aC5yb3VuZChzP3Uud2lkdGg6dS5oZWlnaHQpLWQpLGg9TWF0aC5yb3VuZChwLzIpO3JldHVybiBLKHQsMC1oK2IsaCtiKX0sSz0oZSx0LGkpPT5NYXRoLm1heChNYXRoLm1pbihlLGkpLHQpLEY9KCk9PjEhPT1FLnNjYWxlLFE9KGUsdCk9PnswIT09ZSYmKEUudHJhbnNsYXRlWD1KKFwieFwiLEUudHJhbnNsYXRlWCtlKSksMCE9PXQmJihFLnRyYW5zbGF0ZVk9SihcInlcIixFLnRyYW5zbGF0ZVkrdCkpO2NvbnN0e2VsZW1lbnQ6aSxvcmlnaW5YOnIsb3JpZ2luWTpuLHRyYW5zbGF0ZVg6YSx0cmFuc2xhdGVZOnMsc2NhbGU6b309RTtpLnN0eWxlLnRyYW5zZm9ybU9yaWdpbj1gJHtyfXB4ICR7bn1weGAsaS5zdHlsZS50cmFuc2Zvcm09YHRyYW5zbGF0ZSgke2F9cHgsICR7c31weCkgc2NhbGUoJHtvfSlgfSxaPShlLHQsaSxyLG4pPT57RS5lbGVtZW50fHwoRS5lbGVtZW50PXUucXVlcnlTZWxlY3RvcihcIi50b2JpaV9fc2xpZGUtLWlzLWFjdGl2ZSBpbWdcIikpO2NvbnN0e2xlZnQ6YSx0b3A6c309RS5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG89KGktcykvRS5zY2FsZTtFLm9yaWdpblg9KHQtYSkvRS5zY2FsZSxFLm9yaWdpblk9byxFLnNjYWxlPWUsUShyLG4pfSxlZT0oZSx0KT0+TWF0aC5oeXBvdChlLHQpLHRlPShlLHQsaSxyKT0+KHt4OihlK2kpLzIseToodCtyKS8yfSksaWU9KCk9PntFLnNjYWxlPTEsRS5vcmlnaW5YPTAsRS5vcmlnaW5ZPTAsRS50cmFuc2xhdGVYPTAsRS50cmFuc2xhdGVZPTAsUSgwLDApfSxyZT0oKT0+e2wua2V5Ym9hcmQmJndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLEQpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsUiksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLFgpLHVlKFwiY2xpY2tcIixIKSxsLmRyYWdnYWJsZSYmKHVlKFwicG9pbnRlcmRvd25cIixWKSx1ZShcInBvaW50ZXJtb3ZlXCIsaiksdWUoXCJwb2ludGVydXBcIixXKSx1ZShcInBvaW50ZXJjYW5jZWxcIixCKSx1ZShcInBvaW50ZXJvdXRcIixCKSx1ZShcInBvaW50ZXJsZWF2ZVwiLEIpLHVlKFwiY29udGV4dG1lbnVcIixCKSksdWUoXCJ3aGVlbFwiLEcpfSxuZT0oKT0+e2wua2V5Ym9hcmQmJndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLEQpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsUiksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLFgpLGJlKFwiY2xpY2tcIixIKSxsLmRyYWdnYWJsZSYmKGJlKFwicG9pbnRlcmRvd25cIixWKSxiZShcInBvaW50ZXJtb3ZlXCIsaiksYmUoXCJwb2ludGVydXBcIixXKSxiZShcInBvaW50ZXJjYW5jZWxcIixCKSxiZShcInBvaW50ZXJvdXRcIixCKSxiZShcInBvaW50ZXJsZWF2ZVwiLEIpLGJlKFwiY29udGV4dG1lbnVcIixCKSksYmUoXCJ3aGVlbFwiLEcpfSxhZT0oKT0+e2wuZHJhZ2dhYmxlJiYhd1tBXS5zbGlkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9iaWlfX3NsaWRlci0taXMtZHJhZ2dhYmxlXCIpJiZ3W0FdLnNsaWRlci5jbGFzc0xpc3QuYWRkKFwidG9iaWlfX3NsaWRlci0taXMtZHJhZ2dhYmxlXCIpLCFsLm5hdnx8MT09PXdbQV0uZWxlbWVudHNMZW5ndGh8fFwiYXV0b1wiPT09bC5uYXYmJmRlKCk/KGIuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIiksYi5kaXNhYmxlZD0hMCxwLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpLHAuZGlzYWJsZWQ9ITApOihiLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKSxiLmRpc2FibGVkPSExLHAuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpLHAuZGlzYWJsZWQ9ITEpLGcuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixsLmNvdW50ZXImJjEhPT13W0FdLmVsZW1lbnRzTGVuZ3RoP1wiZmFsc2VcIjpcInRydWVcIil9LHNlPShlPW51bGwpPT57aygpLGcudGV4dENvbnRlbnQ9YCR7d1tBXS5jdXJyZW50SW5kZXgrMX0vJHt3W0FdLmVsZW1lbnRzTGVuZ3RofWAsKGU9PntpZigoITA9PT1sLm5hdnx8XCJhdXRvXCI9PT1sLm5hdikmJiFkZSgpJiZ3W0FdLmVsZW1lbnRzTGVuZ3RoPjE/KGIuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIiksYi5kaXNhYmxlZD0hMCxwLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpLHAuZGlzYWJsZWQ9ITAsMT09PXdbQV0uZWxlbWVudHNMZW5ndGg/bC5jbG9zZSYmaC5mb2N1cygpOjA9PT13W0FdLmN1cnJlbnRJbmRleD8ocC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIikscC5kaXNhYmxlZD0hMSxwLmZvY3VzKCkpOndbQV0uY3VycmVudEluZGV4PT09d1tBXS5lbGVtZW50c0xlbmd0aC0xPyhiLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKSxiLmRpc2FibGVkPSExLGIuZm9jdXMoKSk6KGIuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpLGIuZGlzYWJsZWQ9ITEscC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIikscC5kaXNhYmxlZD0hMSxcImxlZnRcIj09PWU/Yi5mb2N1cygpOnAuZm9jdXMoKSkpOmwuY2xvc2UmJmguZm9jdXMoKSx3W0FdLmVsZW1lbnRzTGVuZ3RoPjEmJjAhPT13W0FdLmN1cnJlbnRJbmRleCl7Y29uc3QgZT11LnF1ZXJ5U2VsZWN0b3IoJy50b2JpaV9fc2xpZGUtLWlzLWFjdGl2ZSBmaWd1cmVbdGFiaW5kZXg9XCItMVwiXScpO2UmJnNldFRpbWVvdXQoKCk9PntlLmZvY3VzKCl9LDEwMCl9fSkoZSl9LG9lPSgpPT57bGUoKSYmWCgpLE9iamVjdC5lbnRyaWVzKHcpLmZvckVhY2goZT0+e2VbMV0uZ2FsbGVyeS5mb3JFYWNoKGU9PntDKGUpfSl9KSx3PXt9LEE9bnVsbDtmb3IoY29uc3QgZSBpbiBzKXNbZV0ub25SZXNldCgpfSxsZT0oKT0+XCJmYWxzZVwiPT09dS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSxkZT0oKT0+XCJvbnRvdWNoc3RhcnRcImluIHdpbmRvdyxjZT1lPT4tMSE9PVtcIlRFWFRBUkVBXCIsXCJPUFRJT05cIixcIklOUFVUXCIsXCJTRUxFQ1RcIl0uaW5kZXhPZihlLm5vZGVOYW1lKXx8ZT09PWJ8fGU9PT1wfHxlPT09aCx1ZT0oZSx0KT0+e3UuYWRkRXZlbnRMaXN0ZW5lcihlLHQpfSxiZT0oZSx0KT0+e3UucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLHQpfTtyZXR1cm4oZT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYudG9iaWlcIikpcmV0dXJuIHZvaWQgY29uc29sZS5sb2coXCJNdWx0aXBsZSBsaWdodGJveCBpbnN0YW5jZXMgbm90IHN1cHBvcnRlZC5cIik7bD0oZT0+KHtzZWxlY3RvcjpcIi5saWdodGJveFwiLGNhcHRpb25zOiEwLGNhcHRpb25zU2VsZWN0b3I6XCJpbWdcIixjYXB0aW9uQXR0cmlidXRlOlwiYWx0XCIsY2FwdGlvblRleHQ6bnVsbCxjYXB0aW9uSFRNTDohMSxuYXY6XCJhdXRvXCIsbmF2VGV4dDpbJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiLz48cG9seWxpbmUgcG9pbnRzPVwiMTUgNiA5IDEyIDE1IDE4XCIgLz48L3N2Zz4nLCc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj48cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIi8+PHBvbHlsaW5lIHBvaW50cz1cIjkgNiAxNSAxMiA5IDE4XCIgLz48L3N2Zz4nXSxuYXZMYWJlbDpbXCJQcmV2aW91cyBpbWFnZVwiLFwiTmV4dCBpbWFnZVwiXSxjbG9zZTohMCxjbG9zZVRleHQ6JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiLz48bGluZSB4MT1cIjE4XCIgeTE9XCI2XCIgeDI9XCI2XCIgeTI9XCIxOFwiIC8+PGxpbmUgeDE9XCI2XCIgeTE9XCI2XCIgeDI9XCIxOFwiIHkyPVwiMThcIiAvPjwvc3ZnPicsY2xvc2VMYWJlbDpcIkNsb3NlIGxpZ2h0Ym94XCIsbG9hZGluZ0luZGljYXRvckxhYmVsOlwiSW1hZ2UgbG9hZGluZ1wiLGNvdW50ZXI6ITAsZG93bmxvYWQ6ITEsZG93bmxvYWRUZXh0OlwiXCIsZG93bmxvYWRMYWJlbDpcIkRvd25sb2FkIGltYWdlXCIsa2V5Ym9hcmQ6ITAsem9vbTohMCx6b29tVGV4dDonPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCI+PHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIvPjxwb2x5bGluZSBwb2ludHM9XCIxNiA0IDIwIDQgMjAgOFwiIC8+PGxpbmUgeDE9XCIxNFwiIHkxPVwiMTBcIiB4Mj1cIjIwXCIgeTI9XCI0XCIgLz48cG9seWxpbmUgcG9pbnRzPVwiOCAyMCA0IDIwIDQgMTZcIiAvPjxsaW5lIHgxPVwiNFwiIHkxPVwiMjBcIiB4Mj1cIjEwXCIgeTI9XCIxNFwiIC8+PHBvbHlsaW5lIHBvaW50cz1cIjE2IDIwIDIwIDIwIDIwIDE2XCIgLz48bGluZSB4MT1cIjE0XCIgeTE9XCIxNFwiIHgyPVwiMjBcIiB5Mj1cIjIwXCIgLz48cG9seWxpbmUgcG9pbnRzPVwiOCA0IDQgNCA0IDhcIiAvPjxsaW5lIHgxPVwiNFwiIHkxPVwiNFwiIHgyPVwiMTBcIiB5Mj1cIjEwXCIgLz48L3N2Zz4nLGRvY0Nsb3NlOiEwLHN3aXBlQ2xvc2U6ITAsaGlkZVNjcm9sbGJhcjohMCxkcmFnZ2FibGU6ITAsdGhyZXNob2xkOjEwMCxydGw6ITEsbG9vcDohMSxhdXRvcGxheVZpZGVvOiExLG1vZGFsOiExLHRoZW1lOlwidG9iaWktLXRoZW1lLWRlZmF1bHRcIiwuLi5lfSkpKGUpLHV8fCh1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJkaWFsb2dcIiksdS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSx1LnNldEF0dHJpYnV0ZShcImFyaWEtbW9kYWxcIixcInRydWVcIiksdS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsXCJMaWdodGJveFwiKSx1LmNsYXNzTGlzdC5hZGQoXCJ0b2JpaVwiKSx1LmNsYXNzTGlzdC5hZGQobC50aGVtZSksYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpLGIuY2xhc3NOYW1lPVwidG9iaWlfX2J0biB0b2JpaV9fYnRuLS1wcmV2aW91c1wiLGIuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLGIuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLGwubmF2TGFiZWxbMF0pLGIuaW5uZXJIVE1MPWwubmF2VGV4dFswXSx1LmFwcGVuZENoaWxkKGIpLHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSxwLmNsYXNzTmFtZT1cInRvYmlpX19idG4gdG9iaWlfX2J0bi0tbmV4dFwiLHAuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLHAuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLGwubmF2TGFiZWxbMV0pLHAuaW5uZXJIVE1MPWwubmF2VGV4dFsxXSx1LmFwcGVuZENoaWxkKHApLGg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSxoLmNsYXNzTmFtZT1cInRvYmlpX19idG4gdG9iaWlfX2J0bi0tY2xvc2VcIixoLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxoLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixsLmNsb3NlTGFiZWwpLGguaW5uZXJIVE1MPWwuY2xvc2VUZXh0LHUuYXBwZW5kQ2hpbGQoaCksZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGcuY2xhc3NOYW1lPVwidG9iaWlfX2NvdW50ZXJcIix1LmFwcGVuZENoaWxkKGcpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodSkpO2NvbnN0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChsLnNlbGVjdG9yKTtpZighdCl0aHJvdyBuZXcgRXJyb3IoYFVwcywgSSBjYW4ndCBmaW5kIHRoZSBzZWxlY3RvciAke2wuc2VsZWN0b3J9IG9uIHRoaXMgd2Vic2l0ZS5gKTtjb25zdCBpPVtdO3QuZm9yRWFjaChlPT57Y29uc3QgdD1lLmhhc0F0dHJpYnV0ZShcImRhdGEtZ3JvdXBcIik/ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyb3VwXCIpOlwiZGVmYXVsdFwiO2xldCByPWUuaHJlZjtlLmhhc0F0dHJpYnV0ZShcImRhdGEtdGFyZ2V0XCIpJiYocj1lLmdldEF0dHJpYnV0ZShcImRhdGEtdGFyZ2V0XCIpKSxyKz1cIl9fXCIrdCx2b2lkIDAhPT1pW3JdP2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZT0+e1AodCksVCgpLGUucHJldmVudERlZmF1bHQoKX0pOihpW3JdPTEsXyhlKSl9KX0pKGEpLG4ub3Blbj1ULG4ucHJldmlvdXM9TSxuLm5leHQ9TixuLmNsb3NlPVgsbi5hZGQ9XyxuLnJlbW92ZT1DLG4ucmVzZXQ9b2Usbi5kZXN0cm95PSgpPT57b2UoKSx1LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodSl9LG4uaXNPcGVuPWxlLG4uc2xpZGVzSW5kZXg9KCk9PndbQV0uY3VycmVudEluZGV4LG4uc2VsZWN0PWU9Pntjb25zdCB0PXdbQV0uY3VycmVudEluZGV4O2lmKCFsZSgpKXRocm93IG5ldyBFcnJvcihcIlVwcywgSSdtIGNsb3NlZC5cIik7aWYobGUoKSl7aWYoIWUmJjAhPT1lKXRocm93IG5ldyBFcnJvcihcIlVwcywgbm8gc2xpZGUgc3BlY2lmaWVkLlwiKTtpZihlPT09d1tBXS5jdXJyZW50SW5kZXgpdGhyb3cgbmV3IEVycm9yKGBVcHMsIHNsaWRlICR7ZX0gaXMgYWxyZWFkeSBzZWxlY3RlZC5gKTtpZigtMT09PWV8fGU+PXdbQV0uZWxlbWVudHNMZW5ndGgpdGhyb3cgbmV3IEVycm9yKGBVcHMsIEkgY2FuJ3QgZmluZCBzbGlkZSAke2V9LmApfXdbQV0uY3VycmVudEluZGV4PWUsJCh0KSx6KGUpLGU8dCYmKHNlKFwibGVmdFwiKSxPKHQpLHEoZS0xKSksZT50JiYoc2UoXCJyaWdodFwiKSxPKHQpLHEoZSsxKSl9LG4uc2xpZGVzQ291bnQ9KCk9PndbQV0uZWxlbWVudHNMZW5ndGgsbi5zZWxlY3RHcm91cD1QLG4uY3VycmVudEdyb3VwPSgpPT5BLG4ub249dWUsbi5vZmY9YmUsbn1leHBvcnR7biBhcyBkZWZhdWx0fTtcbiIsIi8vIENTUyBhbmQgU0FTUyBmaWxlc1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5pbXBvcnQgeyBkZWZhdWx0IGFzIFRvYmkgfSBmcm9tICdAbWlkemVyL3RvYmlpJ1xuY29uc3QgdG9iaSA9IG5ldyBUb2JpKClcblxuLy8gUmVtb3ZlIHRoZSBmb2xsb3dpbmcgbGluZXMgdG8gcmVtb3ZlIHRoZSBkYXJrbW9kZSBqc1xuaW1wb3J0IERhcmttb2RlIGZyb20gJ2Rhcmttb2RlLWpzJ1xuZnVuY3Rpb24gYWRkRGFya21vZGVXaWRnZXQoKSB7XG4gIG5ldyBEYXJrbW9kZSgpLnNob3dXaWRnZXQoKVxufVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhZGREYXJrbW9kZVdpZGdldClcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZGFya21vZGUtanNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGFya21vZGUtanNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGFya21vZGUtanNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vc3JjL2Rhcmttb2RlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2Rhcmttb2RlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLklTX0JST1dTRVIgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuSVNfQlJPV1NFUiA9IElTX0JST1dTRVI7XG5cbnZhciBEYXJrbW9kZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERhcmttb2RlKG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGFya21vZGUpO1xuXG4gICAgaWYgKCFJU19CUk9XU0VSKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgYm90dG9tOiAnMzJweCcsXG4gICAgICByaWdodDogJzMycHgnLFxuICAgICAgbGVmdDogJ3Vuc2V0JyxcbiAgICAgIHRpbWU6ICcwLjNzJyxcbiAgICAgIG1peENvbG9yOiAnI2ZmZicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIGJ1dHRvbkNvbG9yRGFyazogJyMxMDBmMmMnLFxuICAgICAgYnV0dG9uQ29sb3JMaWdodDogJyNmZmYnLFxuICAgICAgbGFiZWw6ICcnLFxuICAgICAgc2F2ZUluQ29va2llczogdHJ1ZSxcbiAgICAgIGF1dG9NYXRjaE9zVGhlbWU6IHRydWVcbiAgICB9O1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgdmFyIGNzcyA9IFwiXFxuICAgICAgLmRhcmttb2RlLWxheWVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZDogXCIuY29uY2F0KG9wdGlvbnMubWl4Q29sb3IsIFwiO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIFwiKS5jb25jYXQob3B0aW9ucy50aW1lLCBcIiBlYXNlO1xcbiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XFxuICAgICAgfVxcblxcbiAgICAgIC5kYXJrbW9kZS1sYXllci0tYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiAyLjlyZW07XFxuICAgICAgICBoZWlnaHQ6IDIuOXJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIHJpZ2h0OiBcIikuY29uY2F0KG9wdGlvbnMucmlnaHQsIFwiO1xcbiAgICAgICAgYm90dG9tOiBcIikuY29uY2F0KG9wdGlvbnMuYm90dG9tLCBcIjtcXG4gICAgICAgIGxlZnQ6IFwiKS5jb25jYXQob3B0aW9ucy5sZWZ0LCBcIjtcXG4gICAgICB9XFxuXFxuICAgICAgLmRhcmttb2RlLWxheWVyLS1zaW1wbGUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSAhaW1wb3J0YW50O1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgfVxcblxcbiAgICAgIC5kYXJrbW9kZS1sYXllci0tbm8tdHJhbnNpdGlvbiB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGFya21vZGUtdG9nZ2xlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IFwiKS5jb25jYXQob3B0aW9ucy5idXR0b25Db2xvckRhcmssIFwiO1xcbiAgICAgICAgd2lkdGg6IDNyZW07XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBib3JkZXI6bm9uZTtcXG4gICAgICAgIHJpZ2h0OiBcIikuY29uY2F0KG9wdGlvbnMucmlnaHQsIFwiO1xcbiAgICAgICAgYm90dG9tOiBcIikuY29uY2F0KG9wdGlvbnMuYm90dG9tLCBcIjtcXG4gICAgICAgIGxlZnQ6IFwiKS5jb25jYXQob3B0aW9ucy5sZWZ0LCBcIjtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGFya21vZGUtdG9nZ2xlLS13aGl0ZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBcIikuY29uY2F0KG9wdGlvbnMuYnV0dG9uQ29sb3JMaWdodCwgXCI7XFxuICAgICAgfVxcblxcbiAgICAgIC5kYXJrbW9kZS10b2dnbGUtLWluYWN0aXZlIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgIC5kYXJrbW9kZS1iYWNrZ3JvdW5kIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IFwiKS5jb25jYXQob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IsIFwiO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICB6LWluZGV4OiAtMTA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgfVxcblxcbiAgICAgIGltZywgLmRhcmttb2RlLWlnbm9yZSB7XFxuICAgICAgICBpc29sYXRpb246IGlzb2xhdGU7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgfVxcblxcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XFxuICAgICAgICAuZGFya21vZGUtdG9nZ2xlIHtkaXNwbGF5OiBub25lICFpbXBvcnRhbnR9XFxuICAgICAgfVxcblxcbiAgICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKSwgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSB7XFxuICAgICAgICAuZGFya21vZGUtdG9nZ2xlIHtkaXNwbGF5OiBub25lICFpbXBvcnRhbnR9XFxuICAgICAgfVxcbiAgICBcIik7XG4gICAgdmFyIGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHZhciBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IG9wdGlvbnMubGFiZWw7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLXRvZ2dsZS0taW5hY3RpdmUnKTtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllcicpO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtYmFja2dyb3VuZCcpO1xuICAgIHZhciBkYXJrbW9kZUFjdGl2YXRlZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya21vZGUnKSA9PT0gJ3RydWUnO1xuICAgIHZhciBwcmVmZXJlZFRoZW1lT3MgPSBvcHRpb25zLmF1dG9NYXRjaE9zVGhlbWUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xuICAgIHZhciBkYXJrbW9kZU5ldmVyQWN0aXZhdGVkQnlBY3Rpb24gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rhcmttb2RlJykgPT09IG51bGw7XG5cbiAgICBpZiAoZGFya21vZGVBY3RpdmF0ZWQgPT09IHRydWUgJiYgb3B0aW9ucy5zYXZlSW5Db29raWVzIHx8IGRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiAmJiBwcmVmZXJlZFRoZW1lT3MpIHtcbiAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1leHBhbmRlZCcsICdkYXJrbW9kZS1sYXllci0tc2ltcGxlJywgJ2Rhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uJyk7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtdG9nZ2xlLS13aGl0ZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS0tYWN0aXZhdGVkJyk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoYnV0dG9uLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGxheWVyLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGJhY2tncm91bmQsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgdGhpcy5hZGRTdHlsZShjc3MpO1xuICAgIHRoaXMuYnV0dG9uID0gYnV0dG9uO1xuICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcbiAgICB0aGlzLnNhdmVJbkNvb2tpZXMgPSBvcHRpb25zLnNhdmVJbkNvb2tpZXM7XG4gICAgdGhpcy50aW1lID0gb3B0aW9ucy50aW1lO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERhcmttb2RlLCBbe1xuICAgIGtleTogXCJhZGRTdHlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRTdHlsZShjc3MpIHtcbiAgICAgIHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgJ2RhdGE6dGV4dC9jc3M7Y2hhcnNldD1VVEYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KGNzcykpO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNob3dXaWRnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd1dpZGdldCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBidXR0b24gPSB0aGlzLmJ1dHRvbjtcbiAgICAgIHZhciBsYXllciA9IHRoaXMubGF5ZXI7XG4gICAgICB2YXIgdGltZSA9IHBhcnNlRmxvYXQodGhpcy50aW1lKSAqIDEwMDA7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtdG9nZ2xlJyk7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUtdG9nZ2xlLS1pbmFjdGl2ZScpO1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJBY3RpdmF0ZSBkYXJrIG1vZGVcIik7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIsIFwiZmFsc2VcIik7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtbGF5ZXItLWJ1dHRvbicpO1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNEYXJrbW9kZSA9IF90aGlzLmlzQWN0aXZhdGVkKCk7XG5cbiAgICAgICAgaWYgKCFpc0Rhcmttb2RlKSB7XG4gICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkJyk7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllci0tc2ltcGxlJyk7XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgIH0sIHRpbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLWxheWVyLS1zaW1wbGUnKTtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUtbGF5ZXItLW5vLXRyYW5zaXRpb24nKTtcbiAgICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLWxheWVyLS1leHBhbmRlZCcpO1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrbW9kZS10b2dnbGUtLXdoaXRlJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUtLWFjdGl2YXRlZCcpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rhcmttb2RlJywgIWlzRGFya21vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRvZ2dsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICBpZiAoIUlTX0JST1dTRVIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyO1xuICAgICAgdmFyIGlzRGFya21vZGUgPSB0aGlzLmlzQWN0aXZhdGVkKCk7XG4gICAgICB2YXIgYnV0dG9uID0gdGhpcy5idXR0b247XG4gICAgICBsYXllci5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrbW9kZS1sYXllci0tc2ltcGxlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya21vZGUnLCAhaXNEYXJrbW9kZSk7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkRlLWFjdGl2YXRlIGRhcmsgbW9kZVwiKTtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0FjdGl2YXRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0FjdGl2YXRlZCgpIHtcbiAgICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrbW9kZS0tYWN0aXZhdGVkJyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERhcmttb2RlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBEYXJrbW9kZTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9kYXJrbW9kZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZGFya21vZGUgKi8gXCIuL3NyYy9kYXJrbW9kZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF9kZWZhdWx0ID0gX2Rhcmttb2RlLmRlZmF1bHQ7XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuaWYgKF9kYXJrbW9kZS5JU19CUk9XU0VSKSB7XG4gIChmdW5jdGlvbiAod2luZG93KSB7XG4gICAgd2luZG93LkRhcmttb2RlID0gX2Rhcmttb2RlLmRlZmF1bHQ7XG4gIH0pKHdpbmRvdyk7XG59XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OWtZWEpyYlc5a1pTMXFjeTkzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0ozWldKd1lXTnJPaTh2WkdGeWEyMXZaR1V0YW5NdmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZaR0Z5YTIxdlpHVXRhbk12TGk5emNtTXZaR0Z5YTIxdlpHVXVhbk1pTENKM1pXSndZV05yT2k4dlpHRnlhMjF2WkdVdGFuTXZMaTl6Y21NdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sc2lTVk5mUWxKUFYxTkZVaUlzSW5kcGJtUnZkeUlzSWtSaGNtdHRiMlJsSWl3aWIzQjBhVzl1Y3lJc0ltUmxabUYxYkhSUGNIUnBiMjV6SWl3aVltOTBkRzl0SWl3aWNtbG5hSFFpTENKc1pXWjBJaXdpZEdsdFpTSXNJbTFwZUVOdmJHOXlJaXdpWW1GamEyZHliM1Z1WkVOdmJHOXlJaXdpWW5WMGRHOXVRMjlzYjNKRVlYSnJJaXdpWW5WMGRHOXVRMjlzYjNKTWFXZG9kQ0lzSW14aFltVnNJaXdpYzJGMlpVbHVRMjl2YTJsbGN5SXNJbUYxZEc5TllYUmphRTl6VkdobGJXVWlMQ0pQWW1wbFkzUWlMQ0poYzNOcFoyNGlMQ0pqYzNNaUxDSnNZWGxsY2lJc0ltUnZZM1Z0Wlc1MElpd2lZM0psWVhSbFJXeGxiV1Z1ZENJc0ltSjFkSFJ2YmlJc0ltSmhZMnRuY205MWJtUWlMQ0pwYm01bGNraFVUVXdpTENKamJHRnpjMHhwYzNRaUxDSmhaR1FpTENKa1lYSnJiVzlrWlVGamRHbDJZWFJsWkNJc0lteHZZMkZzVTNSdmNtRm5aU0lzSW1kbGRFbDBaVzBpTENKd2NtVm1aWEpsWkZSb1pXMWxUM01pTENKdFlYUmphRTFsWkdsaElpd2liV0YwWTJobGN5SXNJbVJoY210dGIyUmxUbVYyWlhKQlkzUnBkbUYwWldSQ2VVRmpkR2x2YmlJc0ltSnZaSGtpTENKcGJuTmxjblJDWldadmNtVWlMQ0ptYVhKemRFTm9hV3hrSWl3aVlXUmtVM1I1YkdVaUxDSnNhVzVyUld4bGJXVnVkQ0lzSW5ObGRFRjBkSEpwWW5WMFpTSXNJbVZ1WTI5a1pWVlNTVU52YlhCdmJtVnVkQ0lzSW1obFlXUWlMQ0poY0hCbGJtUkRhR2xzWkNJc0luQmhjbk5sUm14dllYUWlMQ0p5WlcxdmRtVWlMQ0poWkdSRmRtVnVkRXhwYzNSbGJtVnlJaXdpYVhORVlYSnJiVzlrWlNJc0ltbHpRV04wYVhaaGRHVmtJaXdpYzJWMFZHbHRaVzkxZENJc0luSmxiVzkyWlVGMGRISnBZblYwWlNJc0luUnZaMmRzWlNJc0luTmxkRWwwWlcwaUxDSmpiMjUwWVdsdWN5SmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEd0RVFVRXdReXhuUTBGQlowTTdRVUZETVVVN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blJVRkJkMFFzYTBKQlFXdENPMEZCUXpGRk8wRkJRMEVzZVVSQlFXbEVMR05CUVdNN1FVRkRMMFE3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xFUVVGNVF5eHBRMEZCYVVNN1FVRkRNVVVzZDBoQlFXZElMRzFDUVVGdFFpeEZRVUZGTzBGQlEzSkpPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVU5CUVRKQ0xEQkNRVUV3UWl4RlFVRkZPMEZCUTNaRUxIbERRVUZwUXl4bFFVRmxPMEZCUTJoRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRGhFUVVGelJDd3JSRUZCSzBRN08wRkJSWEpJTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEYkVaUExFbEJRVTFCTEZWQlFWVXNSMEZCUnl4UFFVRlBReXhOUVVGUUxFdEJRV3RDTEZkQlFYSkRPenM3U1VGRlkwTXNVVHM3TzBGQlEyNUNMRzlDUVVGWlF5eFBRVUZhTEVWQlFYRkNPMEZCUVVFN08wRkJRMjVDTEZGQlFVa3NRMEZCUTBnc1ZVRkJUQ3hGUVVGcFFqdEJRVU5tTzBGQlEwUTdPMEZCUlVRc1VVRkJUVWtzWTBGQll5eEhRVUZITzBGQlEzSkNReXhaUVVGTkxFVkJRVVVzVFVGRVlUdEJRVVZ5UWtNc1YwRkJTeXhGUVVGRkxFMUJSbU03UVVGSGNrSkRMRlZCUVVrc1JVRkJSU3hQUVVobE8wRkJTWEpDUXl4VlFVRkpMRVZCUVVVc1RVRktaVHRCUVV0eVFrTXNZMEZCVVN4RlFVRkZMRTFCVEZjN1FVRk5ja0pETEhGQ1FVRmxMRVZCUVVVc1RVRk9TVHRCUVU5eVFrTXNjVUpCUVdVc1JVRkJSU3hUUVZCSk8wRkJVWEpDUXl4elFrRkJaMElzUlVGQlJTeE5RVkpITzBGQlUzSkNReXhYUVVGTExFVkJRVVVzUlVGVVl6dEJRVlZ5UWtNc2JVSkJRV0VzUlVGQlJTeEpRVlpOTzBGQlYzSkNReXh6UWtGQlowSXNSVUZCUlR0QlFWaEhMRXRCUVhaQ08wRkJZMEZhTEZkQlFVOHNSMEZCUjJFc1RVRkJUU3hEUVVGRFF5eE5RVUZRTEVOQlFXTXNSVUZCWkN4RlFVRnJRbUlzWTBGQmJFSXNSVUZCYTBORUxFOUJRV3hETEVOQlFWWTdRVUZGUVN4UlFVRk5aU3hIUVVGSExIRklRVWxUWml4UFFVRlBMRU5CUVVOTkxGRkJTbXBDTEhkRFFVdGhUaXhQUVVGUExFTkJRVU5MTEVsQlRISkNMRzFOUVdGSlRDeFBRVUZQTEVOQlFVTkhMRXRCWWxvc1owTkJZMHRJTEU5QlFVOHNRMEZCUTBVc1RVRmtZaXc0UWtGbFIwWXNUMEZCVHl4RFFVRkRTU3hKUVdaWUxIRmhRVzlEVTBvc1QwRkJUeXhEUVVGRFVTeGxRWEJEYWtJc2VVcEJNRU5KVWl4UFFVRlBMRU5CUVVOSExFdEJNVU5hTEdkRFFUSkRTMGdzVDBGQlR5eERRVUZEUlN4TlFUTkRZaXc0UWtFMFEwZEdMRTlCUVU4c1EwRkJRMGtzU1VFMVExZ3NjMDlCY1VSVFNpeFBRVUZQTEVOQlFVTlRMR2RDUVhKRWFrSXNiMHBCTmtSVFZDeFBRVUZQTEVOQlFVTlBMR1ZCTjBScVFpdzRhVUpCUVZRN1FVRnhSa0VzVVVGQlRWTXNTMEZCU3l4SFFVRkhReXhSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVJc1MwRkJka0lzUTBGQlpEdEJRVU5CTEZGQlFVMURMRTFCUVUwc1IwRkJSMFlzVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ0xGRkJRWFpDTEVOQlFXWTdRVUZEUVN4UlFVRk5SU3hWUVVGVkxFZEJRVWRJTEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFpeExRVUYyUWl4RFFVRnVRanRCUVVWQlF5eFZRVUZOTEVOQlFVTkZMRk5CUVZBc1IwRkJiVUp5UWl4UFFVRlBMRU5CUVVOVkxFdEJRVE5DTzBGQlEwRlRMRlZCUVUwc1EwRkJRMGNzVTBGQlVDeERRVUZwUWtNc1IwRkJha0lzUTBGQmNVSXNNa0pCUVhKQ08wRkJRMEZRTEZOQlFVc3NRMEZCUTAwc1UwRkJUaXhEUVVGblFrTXNSMEZCYUVJc1EwRkJiMElzWjBKQlFYQkNPMEZCUTBGSUxHTkJRVlVzUTBGQlEwVXNVMEZCV0N4RFFVRnhRa01zUjBGQmNrSXNRMEZCZVVJc2NVSkJRWHBDTzBGQlJVRXNVVUZCVFVNc2FVSkJRV2xDTEVkQlEzSkNNVUlzVFVGQlRTeERRVUZETWtJc1dVRkJVQ3hEUVVGdlFrTXNUMEZCY0VJc1EwRkJORUlzVlVGQk5VSXNUVUZCTkVNc1RVRkVPVU03UVVGRlFTeFJRVUZOUXl4bFFVRmxMRWRCUTI1Q00wSXNUMEZCVHl4RFFVRkRXU3huUWtGQlVpeEpRVU5CWkN4TlFVRk5MRU5CUVVNNFFpeFZRVUZRTEVOQlFXdENMRGhDUVVGc1FpeEZRVUZyUkVNc1QwRkdjRVE3UVVGSFFTeFJRVUZOUXl3NFFrRkJPRUlzUjBGRGJFTm9ReXhOUVVGTkxFTkJRVU15UWl4WlFVRlFMRU5CUVc5Q1F5eFBRVUZ3UWl4RFFVRTBRaXhWUVVFMVFpeE5RVUUwUXl4SlFVUTVRenM3UVVGSFFTeFJRVU5IUml4cFFrRkJhVUlzUzBGQlN5eEpRVUYwUWl4SlFVRTRRbmhDTEU5QlFVOHNRMEZCUTFjc1lVRkJka01zU1VGRFEyMUNMRGhDUVVFNFFpeEpRVUZKU0N4bFFVWnlReXhGUVVkRk8wRkJRMEZZTEZkQlFVc3NRMEZCUTAwc1UwRkJUaXhEUVVGblFrTXNSMEZCYUVJc1EwRkRSU3d3UWtGRVJpeEZRVVZGTEhkQ1FVWkdMRVZCUjBVc0swSkJTRVk3UVVGTFFVb3NXVUZCVFN4RFFVRkRSeXhUUVVGUUxFTkJRV2xDUXl4SFFVRnFRaXhEUVVGeFFpeDNRa0ZCY2tJN1FVRkRRVTRzWTBGQlVTeERRVUZEWXl4SlFVRlVMRU5CUVdOVUxGTkJRV1FzUTBGQmQwSkRMRWRCUVhoQ0xFTkJRVFJDTEhGQ1FVRTFRanRCUVVORU96dEJRVVZFVGl4WlFVRlJMRU5CUVVOakxFbEJRVlFzUTBGQlkwTXNXVUZCWkN4RFFVRXlRbUlzVFVGQk0wSXNSVUZCYlVOR0xGRkJRVkVzUTBGQlEyTXNTVUZCVkN4RFFVRmpSU3hWUVVGcVJEdEJRVU5CYUVJc1dVRkJVU3hEUVVGRFl5eEpRVUZVTEVOQlFXTkRMRmxCUVdRc1EwRkJNa0pvUWl4TFFVRXpRaXhGUVVGclEwTXNVVUZCVVN4RFFVRkRZeXhKUVVGVUxFTkJRV05GTEZWQlFXaEVPMEZCUTBGb1FpeFpRVUZSTEVOQlFVTmpMRWxCUVZRc1EwRkJZME1zV1VGQlpDeERRVUV5UWxvc1ZVRkJNMElzUlVGQmRVTklMRkZCUVZFc1EwRkJRMk1zU1VGQlZDeERRVUZqUlN4VlFVRnlSRHRCUVVWQkxGTkJRVXRETEZGQlFVd3NRMEZCWTI1Q0xFZEJRV1E3UVVGRlFTeFRRVUZMU1N4TlFVRk1MRWRCUVdOQkxFMUJRV1E3UVVGRFFTeFRRVUZMU0N4TFFVRk1MRWRCUVdGQkxFdEJRV0k3UVVGRFFTeFRRVUZMVEN4aFFVRk1MRWRCUVhGQ1dDeFBRVUZQTEVOQlFVTlhMR0ZCUVRkQ08wRkJRMEVzVTBGQlMwNHNTVUZCVEN4SFFVRlpUQ3hQUVVGUExFTkJRVU5MTEVsQlFYQkNPMEZCUTBRN096czdOa0pCUlZGVkxFY3NSVUZCU3p0QlFVTmFMRlZCUVUxdlFpeFhRVUZYTEVkQlFVZHNRaXhSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVJc1RVRkJka0lzUTBGQmNFSTdRVUZGUVdsQ0xHbENRVUZYTEVOQlFVTkRMRmxCUVZvc1EwRkJlVUlzUzBGQmVrSXNSVUZCWjBNc1dVRkJhRU03UVVGRFFVUXNhVUpCUVZjc1EwRkJRME1zV1VGQldpeERRVUY1UWl4TlFVRjZRaXhGUVVGcFF5eFZRVUZxUXp0QlFVTkJSQ3hwUWtGQlZ5eERRVUZEUXl4WlFVRmFMRU5CUTBVc1RVRkVSaXhGUVVWRkxHbERRVUZwUTBNc2EwSkJRV3RDTEVOQlFVTjBRaXhIUVVGRUxFTkJSbkpFTzBGQlNVRkZMR05CUVZFc1EwRkJRM0ZDTEVsQlFWUXNRMEZCWTBNc1YwRkJaQ3hEUVVFd1Frb3NWMEZCTVVJN1FVRkRSRHM3TzJsRFFVVlpPMEZCUVVFN08wRkJRMWdzVlVGQlNTeERRVUZEZEVNc1ZVRkJUQ3hGUVVGcFFqdEJRVU5tTzBGQlEwUTdPMEZCUTBRc1ZVRkJUWE5DTEUxQlFVMHNSMEZCUnl4TFFVRkxRU3hOUVVGd1FqdEJRVU5CTEZWQlFVMUlMRXRCUVVzc1IwRkJSeXhMUVVGTFFTeExRVUZ1UWp0QlFVTkJMRlZCUVUxWUxFbEJRVWtzUjBGQlIyMURMRlZCUVZVc1EwRkJReXhMUVVGTGJrTXNTVUZCVGl4RFFVRldMRWRCUVhkQ0xFbEJRWEpETzBGQlJVRmpMRmxCUVUwc1EwRkJRMGNzVTBGQlVDeERRVUZwUWtNc1IwRkJha0lzUTBGQmNVSXNhVUpCUVhKQ08wRkJRMEZLTEZsQlFVMHNRMEZCUTBjc1UwRkJVQ3hEUVVGcFFtMUNMRTFCUVdwQ0xFTkJRWGRDTERKQ1FVRjRRanRCUVVOQmRFSXNXVUZCVFN4RFFVRkRhVUlzV1VGQlVDeERRVUZ2UWl4WlFVRndRaXhGUVVGclF5eHZRa0ZCYkVNN1FVRkRRV3BDTEZsQlFVMHNRMEZCUTJsQ0xGbEJRVkFzUTBGQmIwSXNZMEZCY0VJc1JVRkJiME1zVDBGQmNFTTdRVUZEUVdwQ0xGbEJRVTBzUTBGQlEybENMRmxCUVZBc1EwRkJiMElzVFVGQmNFSXNSVUZCTkVJc1ZVRkJOVUk3UVVGRFFYQkNMRmRCUVVzc1EwRkJRMDBzVTBGQlRpeERRVUZuUWtNc1IwRkJhRUlzUTBGQmIwSXNkMEpCUVhCQ08wRkJSVUZLTEZsQlFVMHNRMEZCUTNWQ0xHZENRVUZRTEVOQlFYZENMRTlCUVhoQ0xFVkJRV2xETEZsQlFVMDdRVUZEY2tNc1dVRkJUVU1zVlVGQlZTeEhRVUZITEV0QlFVa3NRMEZCUTBNc1YwRkJUQ3hGUVVGdVFqczdRVUZGUVN4WlFVRkpMRU5CUVVORUxGVkJRVXdzUlVGQmFVSTdRVUZEWmpOQ0xHVkJRVXNzUTBGQlEwMHNVMEZCVGl4RFFVRm5Ra01zUjBGQmFFSXNRMEZCYjBJc01FSkJRWEJDTzBGQlEwRktMR2RDUVVGTkxFTkJRVU5wUWl4WlFVRlFMRU5CUVc5Q0xGVkJRWEJDTEVWQlFXZERMRWxCUVdoRE8wRkJRMEZUTEc5Q1FVRlZMRU5CUVVNc1dVRkJUVHRCUVVObU4wSXNhVUpCUVVzc1EwRkJRMDBzVTBGQlRpeERRVUZuUWtNc1IwRkJhRUlzUTBGQmIwSXNLMEpCUVhCQ08wRkJRMEZRTEdsQ1FVRkxMRU5CUVVOTkxGTkJRVTRzUTBGQlowSkRMRWRCUVdoQ0xFTkJRVzlDTEhkQ1FVRndRanRCUVVOQlNpeHJRa0ZCVFN4RFFVRkRNa0lzWlVGQlVDeERRVUYxUWl4VlFVRjJRanRCUVVORUxGZEJTbE1zUlVGSlVIcERMRWxCU2s4c1EwRkJWanRCUVV0RUxGTkJVa1FzVFVGUlR6dEJRVU5NVnl4bFFVRkxMRU5CUVVOTkxGTkJRVTRzUTBGQlowSnRRaXhOUVVGb1FpeERRVUYxUWl4M1FrRkJka0k3UVVGRFFYUkNMR2RDUVVGTkxFTkJRVU5wUWl4WlFVRlFMRU5CUVc5Q0xGVkJRWEJDTEVWQlFXZERMRWxCUVdoRE8wRkJRMEZUTEc5Q1FVRlZMRU5CUVVNc1dVRkJUVHRCUVVObU4wSXNhVUpCUVVzc1EwRkJRMDBzVTBGQlRpeERRVUZuUW0xQ0xFMUJRV2hDTEVOQlFYVkNMQ3RDUVVGMlFqdEJRVU5CZWtJc2FVSkJRVXNzUTBGQlEwMHNVMEZCVGl4RFFVRm5RbTFDTEUxQlFXaENMRU5CUVhWQ0xEQkNRVUYyUWp0QlFVTkJkRUlzYTBKQlFVMHNRMEZCUXpKQ0xHVkJRVkFzUTBGQmRVSXNWVUZCZGtJN1FVRkRSQ3hYUVVwVExFVkJTVkFzUTBGS1R5eERRVUZXTzBGQlMwUTdPMEZCUlVRelFpeGpRVUZOTEVOQlFVTkhMRk5CUVZBc1EwRkJhVUo1UWl4TlFVRnFRaXhEUVVGM1FpeDNRa0ZCZUVJN1FVRkRRVGxDTEdkQ1FVRlJMRU5CUVVOakxFbEJRVlFzUTBGQlkxUXNVMEZCWkN4RFFVRjNRbmxDTEUxQlFYaENMRU5CUVN0Q0xIRkNRVUV2UWp0QlFVTkJha1FzWTBGQlRTeERRVUZETWtJc1dVRkJVQ3hEUVVGdlFuVkNMRTlCUVhCQ0xFTkJRVFJDTEZWQlFUVkNMRVZCUVhkRExFTkJRVU5NTEZWQlFYcERPMEZCUTBRc1QwRjRRa1E3UVVGNVFrUTdPenMyUWtGRlVUdEJRVU5RTEZWQlFVa3NRMEZCUXpsRExGVkJRVXdzUlVGQmFVSTdRVUZEWmp0QlFVTkVPenRCUVVORUxGVkJRVTF0UWl4TFFVRkxMRWRCUVVjc1MwRkJTMEVzUzBGQmJrSTdRVUZEUVN4VlFVRk5Na0lzVlVGQlZTeEhRVUZITEV0QlFVdERMRmRCUVV3c1JVRkJia0k3UVVGRFFTeFZRVUZOZWtJc1RVRkJUU3hIUVVGSExFdEJRVXRCTEUxQlFYQkNPMEZCUlVGSUxGZEJRVXNzUTBGQlEwMHNVMEZCVGl4RFFVRm5RbmxDTEUxQlFXaENMRU5CUVhWQ0xIZENRVUYyUWp0QlFVTkJPVUlzWTBGQlVTeERRVUZEWXl4SlFVRlVMRU5CUVdOVUxGTkJRV1FzUTBGQmQwSjVRaXhOUVVGNFFpeERRVUVyUWl4eFFrRkJMMEk3UVVGRFFXcEVMRmxCUVUwc1EwRkJRekpDTEZsQlFWQXNRMEZCYjBKMVFpeFBRVUZ3UWl4RFFVRTBRaXhWUVVFMVFpeEZRVUYzUXl4RFFVRkRUQ3hWUVVGNlF6dEJRVU5CZUVJc1dVRkJUU3hEUVVGRGFVSXNXVUZCVUN4RFFVRnZRaXhaUVVGd1FpeEZRVUZyUXl4MVFrRkJiRU03UVVGRFFXcENMRmxCUVUwc1EwRkJRMmxDTEZsQlFWQXNRMEZCYjBJc1kwRkJjRUlzUlVGQmIwTXNUVUZCY0VNN1FVRkZSRHM3TzJ0RFFVVmhPMEZCUTFvc1ZVRkJTU3hEUVVGRGRrTXNWVUZCVEN4RlFVRnBRanRCUVVObUxHVkJRVThzU1VGQlVEdEJRVU5FT3p0QlFVTkVMR0ZCUVU5dlFpeFJRVUZSTEVOQlFVTmpMRWxCUVZRc1EwRkJZMVFzVTBGQlpDeERRVUYzUWpKQ0xGRkJRWGhDTEVOQlFXbERMSEZDUVVGcVF5eERRVUZRTzBGQlEwUTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVTnNUMGc3T3pzN08wRkJSMEU3T3pzN1FVRkRRU3d3UWtGQlowSTdRVUZEWkN4SFFVRkRMRlZCUVZOdVJDeE5RVUZVTEVWQlFXbENPMEZCUTJoQ1FTeFZRVUZOTEVOQlFVTkRMRkZCUVZBN1FVRkRSQ3hIUVVaRUxFVkJSVWRFTEUxQlJrZzdRVUZIUkR0QlFVTkVJaXdpWm1sc1pTSTZJbVJoY210dGIyUmxMV3B6TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnWkdWbWFXNWxMbUZ0WkNsY2JseDBYSFJrWldacGJtVW9YQ0prWVhKcmJXOWtaUzFxYzF3aUxDQmJYU3dnWm1GamRHOXllU2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEdWNGNHOXlkSE5iWENKa1lYSnJiVzlrWlMxcWMxd2lYU0E5SUdaaFkzUnZjbmtvS1R0Y2JseDBaV3h6WlZ4dVhIUmNkSEp2YjNSYlhDSmtZWEpyYlc5a1pTMXFjMXdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hSNWNHVnZaaUJ6Wld4bUlDRTlQU0FuZFc1a1pXWnBibVZrSnlBL0lITmxiR1lnT2lCMGFHbHpMQ0JtZFc1amRHbHZiaWdwSUh0Y2JuSmxkSFZ5YmlBaUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaUE5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1wSUh0Y2JpQmNkRngwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeXdnZXlCMllXeDFaVG9nSjAxdlpIVnNaU2NnZlNrN1hHNGdYSFJjZEgxY2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JREU2SUhaaGJIVmxJR2x6SUdFZ2JXOWtkV3hsSUdsa0xDQnlaWEYxYVhKbElHbDBYRzRnWEhRdkx5QnRiMlJsSUNZZ01qb2diV1Z5WjJVZ1lXeHNJSEJ5YjNCbGNuUnBaWE1nYjJZZ2RtRnNkV1VnYVc1MGJ5QjBhR1VnYm5OY2JpQmNkQzh2SUcxdlpHVWdKaUEwT2lCeVpYUjFjbTRnZG1Gc2RXVWdkMmhsYmlCaGJISmxZV1I1SUc1eklHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JRGg4TVRvZ1ltVm9ZWFpsSUd4cGEyVWdjbVZ4ZFdseVpWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1MElEMGdablZ1WTNScGIyNG9kbUZzZFdVc0lHMXZaR1VwSUh0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBNEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkR2xtS0NodGIyUmxJQ1lnTkNrZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIyWVd4MVpTQW1KaUIyWVd4MVpTNWZYMlZ6VFc5a2RXeGxLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpaHVjeWs3WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNodWN5d2dKMlJsWm1GMWJIUW5MQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUhaaGJIVmxPaUIyWVd4MVpTQjlLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRElnSmlZZ2RIbHdaVzltSUhaaGJIVmxJQ0U5SUNkemRISnBibWNuS1NCbWIzSW9kbUZ5SUd0bGVTQnBiaUIyWVd4MVpTa2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0c1ekxDQnJaWGtzSUdaMWJtTjBhVzl1S0d0bGVTa2dleUJ5WlhSMWNtNGdkbUZzZFdWYmEyVjVYVHNnZlM1aWFXNWtLRzUxYkd3c0lHdGxlU2twTzF4dUlGeDBYSFJ5WlhSMWNtNGdibk03WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdYQ0l1TDNOeVl5OXBibVJsZUM1cWMxd2lLVHRjYmlJc0ltVjRjRzl5ZENCamIyNXpkQ0JKVTE5Q1VrOVhVMFZTSUQwZ2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ0ozVnVaR1ZtYVc1bFpDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFUmhjbXR0YjJSbElIdGNiaUFnWTI5dWMzUnlkV04wYjNJb2IzQjBhVzl1Y3lrZ2UxeHVJQ0FnSUdsbUlDZ2hTVk5mUWxKUFYxTkZVaWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnZibk4wSUdSbFptRjFiSFJQY0hScGIyNXpJRDBnZTF4dUlDQWdJQ0FnWW05MGRHOXRPaUFuTXpKd2VDY3NYRzRnSUNBZ0lDQnlhV2RvZERvZ0p6TXljSGduTEZ4dUlDQWdJQ0FnYkdWbWREb2dKM1Z1YzJWMEp5eGNiaUFnSUNBZ0lIUnBiV1U2SUNjd0xqTnpKeXhjYmlBZ0lDQWdJRzFwZUVOdmJHOXlPaUFuSTJabVppY3NYRzRnSUNBZ0lDQmlZV05yWjNKdmRXNWtRMjlzYjNJNklDY2pabVptSnl4Y2JpQWdJQ0FnSUdKMWRIUnZia052Ykc5eVJHRnlhem9nSnlNeE1EQm1NbU1uTEZ4dUlDQWdJQ0FnWW5WMGRHOXVRMjlzYjNKTWFXZG9kRG9nSnlObVptWW5MRnh1SUNBZ0lDQWdiR0ZpWld3NklDY25MRnh1SUNBZ0lDQWdjMkYyWlVsdVEyOXZhMmxsY3pvZ2RISjFaU3hjYmlBZ0lDQWdJR0YxZEc5TllYUmphRTl6VkdobGJXVTZJSFJ5ZFdWY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnYjNCMGFXOXVjeUE5SUU5aWFtVmpkQzVoYzNOcFoyNG9lMzBzSUdSbFptRjFiSFJQY0hScGIyNXpMQ0J2Y0hScGIyNXpLVHRjYmx4dUlDQWdJR052Ym5OMElHTnpjeUE5SUdCY2JpQWdJQ0FnSUM1a1lYSnJiVzlrWlMxc1lYbGxjaUI3WEc0Z0lDQWdJQ0FnSUhCdmMybDBhVzl1T2lCbWFYaGxaRHRjYmlBZ0lDQWdJQ0FnY0c5cGJuUmxjaTFsZG1WdWRITTZJRzV2Ym1VN1hHNGdJQ0FnSUNBZ0lHSmhZMnRuY205MWJtUTZJQ1I3YjNCMGFXOXVjeTV0YVhoRGIyeHZjbjA3WEc0Z0lDQWdJQ0FnSUhSeVlXNXphWFJwYjI0NklHRnNiQ0FrZTI5d2RHbHZibk11ZEdsdFpYMGdaV0Z6WlR0Y2JpQWdJQ0FnSUNBZ2JXbDRMV0pzWlc1a0xXMXZaR1U2SUdScFptWmxjbVZ1WTJVN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDNWtZWEpyYlc5a1pTMXNZWGxsY2kwdFluVjBkRzl1SUh0Y2JpQWdJQ0FnSUNBZ2QybGtkR2c2SURJdU9YSmxiVHRjYmlBZ0lDQWdJQ0FnYUdWcFoyaDBPaUF5TGpseVpXMDdYRzRnSUNBZ0lDQWdJR0p2Y21SbGNpMXlZV1JwZFhNNklEVXdKVHRjYmlBZ0lDQWdJQ0FnY21sbmFIUTZJQ1I3YjNCMGFXOXVjeTV5YVdkb2RIMDdYRzRnSUNBZ0lDQWdJR0p2ZEhSdmJUb2dKSHR2Y0hScGIyNXpMbUp2ZEhSdmJYMDdYRzRnSUNBZ0lDQWdJR3hsWm5RNklDUjdiM0IwYVc5dWN5NXNaV1owZlR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0xtUmhjbXR0YjJSbExXeGhlV1Z5TFMxemFXMXdiR1VnZTF4dUlDQWdJQ0FnSUNCM2FXUjBhRG9nTVRBd0pUdGNiaUFnSUNBZ0lDQWdhR1ZwWjJoME9pQXhNREFsTzF4dUlDQWdJQ0FnSUNCMGIzQTZJREE3WEc0Z0lDQWdJQ0FnSUd4bFpuUTZJREE3WEc0Z0lDQWdJQ0FnSUhSeVlXNXpabTl5YlRvZ2MyTmhiR1VvTVNrZ0lXbHRjRzl5ZEdGdWREdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMbVJoY210dGIyUmxMV3hoZVdWeUxTMWxlSEJoYm1SbFpDQjdYRzRnSUNBZ0lDQWdJSFJ5WVc1elptOXliVG9nYzJOaGJHVW9NVEF3S1R0Y2JpQWdJQ0FnSUNBZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTUR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0xtUmhjbXR0YjJSbExXeGhlV1Z5TFMxdWJ5MTBjbUZ1YzJsMGFXOXVJSHRjYmlBZ0lDQWdJQ0FnZEhKaGJuTnBkR2x2YmpvZ2JtOXVaVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnTG1SaGNtdHRiMlJsTFhSdloyZHNaU0I3WEc0Z0lDQWdJQ0FnSUdKaFkydG5jbTkxYm1RNklDUjdiM0IwYVc5dWN5NWlkWFIwYjI1RGIyeHZja1JoY210OU8xeHVJQ0FnSUNBZ0lDQjNhV1IwYURvZ00zSmxiVHRjYmlBZ0lDQWdJQ0FnYUdWcFoyaDBPaUF6Y21WdE8xeHVJQ0FnSUNBZ0lDQndiM05wZEdsdmJqb2dabWw0WldRN1hHNGdJQ0FnSUNBZ0lHSnZjbVJsY2kxeVlXUnBkWE02SURVd0pUdGNiaUFnSUNBZ0lDQWdZbTl5WkdWeU9tNXZibVU3WEc0Z0lDQWdJQ0FnSUhKcFoyaDBPaUFrZTI5d2RHbHZibk11Y21sbmFIUjlPMXh1SUNBZ0lDQWdJQ0JpYjNSMGIyMDZJQ1I3YjNCMGFXOXVjeTVpYjNSMGIyMTlPMXh1SUNBZ0lDQWdJQ0JzWldaME9pQWtlMjl3ZEdsdmJuTXViR1ZtZEgwN1hHNGdJQ0FnSUNBZ0lHTjFjbk52Y2pvZ2NHOXBiblJsY2p0Y2JpQWdJQ0FnSUNBZ2RISmhibk5wZEdsdmJqb2dZV3hzSURBdU5YTWdaV0Z6WlR0Y2JpQWdJQ0FnSUNBZ1pHbHpjR3hoZVRvZ1pteGxlRHRjYmlBZ0lDQWdJQ0FnYW5WemRHbG1lUzFqYjI1MFpXNTBPaUJqWlc1MFpYSTdYRzRnSUNBZ0lDQWdJR0ZzYVdkdUxXbDBaVzF6T2lCalpXNTBaWEk3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM1a1lYSnJiVzlrWlMxMGIyZG5iR1V0TFhkb2FYUmxJSHRjYmlBZ0lDQWdJQ0FnWW1GamEyZHliM1Z1WkRvZ0pIdHZjSFJwYjI1ekxtSjFkSFJ2YmtOdmJHOXlUR2xuYUhSOU8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQXVaR0Z5YTIxdlpHVXRkRzluWjJ4bExTMXBibUZqZEdsMlpTQjdYRzRnSUNBZ0lDQWdJR1JwYzNCc1lYazZJRzV2Ym1VN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDNWtZWEpyYlc5a1pTMWlZV05yWjNKdmRXNWtJSHRjYmlBZ0lDQWdJQ0FnWW1GamEyZHliM1Z1WkRvZ0pIdHZjSFJwYjI1ekxtSmhZMnRuY205MWJtUkRiMnh2Y24wN1hHNGdJQ0FnSUNBZ0lIQnZjMmwwYVc5dU9pQm1hWGhsWkR0Y2JpQWdJQ0FnSUNBZ2NHOXBiblJsY2kxbGRtVnVkSE02SUc1dmJtVTdYRzRnSUNBZ0lDQWdJSG90YVc1a1pYZzZJQzB4TUR0Y2JpQWdJQ0FnSUNBZ2QybGtkR2c2SURFd01DVTdYRzRnSUNBZ0lDQWdJR2hsYVdkb2REb2dNVEF3SlR0Y2JpQWdJQ0FnSUNBZ2RHOXdPaUF3TzF4dUlDQWdJQ0FnSUNCc1pXWjBPaUF3TzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCcGJXY3NJQzVrWVhKcmJXOWtaUzFwWjI1dmNtVWdlMXh1SUNBZ0lDQWdJQ0JwYzI5c1lYUnBiMjQ2SUdsemIyeGhkR1U3WEc0Z0lDQWdJQ0FnSUdScGMzQnNZWGs2SUdsdWJHbHVaUzFpYkc5amF6dGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdRRzFsWkdsaElITmpjbVZsYmlCaGJtUWdLQzF0Y3kxb2FXZG9MV052Ym5SeVlYTjBPaUJoWTNScGRtVXBMQ0FvTFcxekxXaHBaMmd0WTI5dWRISmhjM1E2SUc1dmJtVXBJSHRjYmlBZ0lDQWdJQ0FnTG1SaGNtdHRiMlJsTFhSdloyZHNaU0I3WkdsemNHeGhlVG9nYm05dVpTQWhhVzF3YjNKMFlXNTBmVnh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JBYzNWd2NHOXlkSE1nS0MxdGN5MXBiV1V0WVd4cFoyNDZZWFYwYnlrc0lDZ3RiWE10WVdOalpXeGxjbUYwYjNJNmRISjFaU2tnZTF4dUlDQWdJQ0FnSUNBdVpHRnlhMjF2WkdVdGRHOW5aMnhsSUh0a2FYTndiR0Y1T2lCdWIyNWxJQ0ZwYlhCdmNuUmhiblI5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdZRHRjYmx4dUlDQWdJR052Ym5OMElHeGhlV1Z5SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWkdsMkp5azdYRzRnSUNBZ1kyOXVjM1FnWW5WMGRHOXVJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25ZblYwZEc5dUp5azdYRzRnSUNBZ1kyOXVjM1FnWW1GamEyZHliM1Z1WkNBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJScGRpY3BPMXh1WEc0Z0lDQWdZblYwZEc5dUxtbHVibVZ5U0ZSTlRDQTlJRzl3ZEdsdmJuTXViR0ZpWld3N1hHNGdJQ0FnWW5WMGRHOXVMbU5zWVhOelRHbHpkQzVoWkdRb0oyUmhjbXR0YjJSbExYUnZaMmRzWlMwdGFXNWhZM1JwZG1VbktUdGNiaUFnSUNCc1lYbGxjaTVqYkdGemMweHBjM1F1WVdSa0tDZGtZWEpyYlc5a1pTMXNZWGxsY2ljcE8xeHVJQ0FnSUdKaFkydG5jbTkxYm1RdVkyeGhjM05NYVhOMExtRmtaQ2duWkdGeWEyMXZaR1V0WW1GamEyZHliM1Z1WkNjcE8xeHVYRzRnSUNBZ1kyOXVjM1FnWkdGeWEyMXZaR1ZCWTNScGRtRjBaV1FnUFZ4dUlDQWdJQ0FnZDJsdVpHOTNMbXh2WTJGc1UzUnZjbUZuWlM1blpYUkpkR1Z0S0Nka1lYSnJiVzlrWlNjcElEMDlQU0FuZEhKMVpTYzdYRzRnSUNBZ1kyOXVjM1FnY0hKbFptVnlaV1JVYUdWdFpVOXpJRDFjYmlBZ0lDQWdJRzl3ZEdsdmJuTXVZWFYwYjAxaGRHTm9UM05VYUdWdFpTQW1KbHh1SUNBZ0lDQWdkMmx1Wkc5M0xtMWhkR05vVFdWa2FXRW9KeWh3Y21WbVpYSnpMV052Ykc5eUxYTmphR1Z0WlRvZ1pHRnlheWtuS1M1dFlYUmphR1Z6TzF4dUlDQWdJR052Ym5OMElHUmhjbXR0YjJSbFRtVjJaWEpCWTNScGRtRjBaV1JDZVVGamRHbHZiaUE5WEc0Z0lDQWdJQ0IzYVc1a2IzY3ViRzlqWVd4VGRHOXlZV2RsTG1kbGRFbDBaVzBvSjJSaGNtdHRiMlJsSnlrZ1BUMDlJRzUxYkd3N1hHNWNiaUFnSUNCcFppQW9YRzRnSUNBZ0lDQW9aR0Z5YTIxdlpHVkJZM1JwZG1GMFpXUWdQVDA5SUhSeWRXVWdKaVlnYjNCMGFXOXVjeTV6WVhabFNXNURiMjlyYVdWektTQjhmRnh1SUNBZ0lDQWdLR1JoY210dGIyUmxUbVYyWlhKQlkzUnBkbUYwWldSQ2VVRmpkR2x2YmlBbUppQndjbVZtWlhKbFpGUm9aVzFsVDNNcFhHNGdJQ0FnS1NCN1hHNGdJQ0FnSUNCc1lYbGxjaTVqYkdGemMweHBjM1F1WVdSa0tGeHVJQ0FnSUNBZ0lDQW5aR0Z5YTIxdlpHVXRiR0Y1WlhJdExXVjRjR0Z1WkdWa0p5eGNiaUFnSUNBZ0lDQWdKMlJoY210dGIyUmxMV3hoZVdWeUxTMXphVzF3YkdVbkxGeHVJQ0FnSUNBZ0lDQW5aR0Z5YTIxdlpHVXRiR0Y1WlhJdExXNXZMWFJ5WVc1emFYUnBiMjRuWEc0Z0lDQWdJQ0FwTzF4dUlDQWdJQ0FnWW5WMGRHOXVMbU5zWVhOelRHbHpkQzVoWkdRb0oyUmhjbXR0YjJSbExYUnZaMmRzWlMwdGQyaHBkR1VuS1R0Y2JpQWdJQ0FnSUdSdlkzVnRaVzUwTG1KdlpIa3VZMnhoYzNOTWFYTjBMbUZrWkNnblpHRnlhMjF2WkdVdExXRmpkR2wyWVhSbFpDY3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHUnZZM1Z0Wlc1MExtSnZaSGt1YVc1elpYSjBRbVZtYjNKbEtHSjFkSFJ2Yml3Z1pHOWpkVzFsYm5RdVltOWtlUzVtYVhKemRFTm9hV3hrS1R0Y2JpQWdJQ0JrYjJOMWJXVnVkQzVpYjJSNUxtbHVjMlZ5ZEVKbFptOXlaU2hzWVhsbGNpd2daRzlqZFcxbGJuUXVZbTlrZVM1bWFYSnpkRU5vYVd4a0tUdGNiaUFnSUNCa2IyTjFiV1Z1ZEM1aWIyUjVMbWx1YzJWeWRFSmxabTl5WlNoaVlXTnJaM0p2ZFc1a0xDQmtiMk4xYldWdWRDNWliMlI1TG1acGNuTjBRMmhwYkdRcE8xeHVYRzRnSUNBZ2RHaHBjeTVoWkdSVGRIbHNaU2hqYzNNcE8xeHVYRzRnSUNBZ2RHaHBjeTVpZFhSMGIyNGdQU0JpZFhSMGIyNDdYRzRnSUNBZ2RHaHBjeTVzWVhsbGNpQTlJR3hoZVdWeU8xeHVJQ0FnSUhSb2FYTXVjMkYyWlVsdVEyOXZhMmxsY3lBOUlHOXdkR2x2Ym5NdWMyRjJaVWx1UTI5dmEybGxjenRjYmlBZ0lDQjBhR2x6TG5ScGJXVWdQU0J2Y0hScGIyNXpMblJwYldVN1hHNGdJSDFjYmx4dUlDQmhaR1JUZEhsc1pTaGpjM01wSUh0Y2JpQWdJQ0JqYjI1emRDQnNhVzVyUld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMnhwYm1zbktUdGNibHh1SUNBZ0lHeHBibXRGYkdWdFpXNTBMbk5sZEVGMGRISnBZblYwWlNnbmNtVnNKeXdnSjNOMGVXeGxjMmhsWlhRbktUdGNiaUFnSUNCc2FXNXJSV3hsYldWdWRDNXpaWFJCZEhSeWFXSjFkR1VvSjNSNWNHVW5MQ0FuZEdWNGRDOWpjM01uS1R0Y2JpQWdJQ0JzYVc1clJXeGxiV1Z1ZEM1elpYUkJkSFJ5YVdKMWRHVW9YRzRnSUNBZ0lDQW5hSEpsWmljc1hHNGdJQ0FnSUNBblpHRjBZVHAwWlhoMEwyTnpjenRqYUdGeWMyVjBQVlZVUmkwNExDY2dLeUJsYm1OdlpHVlZVa2xEYjIxd2IyNWxiblFvWTNOektWeHVJQ0FnSUNrN1hHNGdJQ0FnWkc5amRXMWxiblF1YUdWaFpDNWhjSEJsYm1SRGFHbHNaQ2hzYVc1clJXeGxiV1Z1ZENrN1hHNGdJSDFjYmx4dUlDQnphRzkzVjJsa1oyVjBLQ2tnZTF4dUlDQWdJR2xtSUNnaFNWTmZRbEpQVjFORlVpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JpQWdJQ0JqYjI1emRDQmlkWFIwYjI0Z1BTQjBhR2x6TG1KMWRIUnZianRjYmlBZ0lDQmpiMjV6ZENCc1lYbGxjaUE5SUhSb2FYTXViR0Y1WlhJN1hHNGdJQ0FnWTI5dWMzUWdkR2x0WlNBOUlIQmhjbk5sUm14dllYUW9kR2hwY3k1MGFXMWxLU0FxSURFd01EQTdYRzVjYmlBZ0lDQmlkWFIwYjI0dVkyeGhjM05NYVhOMExtRmtaQ2duWkdGeWEyMXZaR1V0ZEc5bloyeGxKeWs3WEc0Z0lDQWdZblYwZEc5dUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyUmhjbXR0YjJSbExYUnZaMmRzWlMwdGFXNWhZM1JwZG1VbktUdGNiaUFnSUNCaWRYUjBiMjR1YzJWMFFYUjBjbWxpZFhSbEtGd2lZWEpwWVMxc1lXSmxiRndpTENCY0lrRmpkR2wyWVhSbElHUmhjbXNnYlc5a1pWd2lLVHRjYmlBZ0lDQmlkWFIwYjI0dWMyVjBRWFIwY21saWRYUmxLRndpWVhKcFlTMWphR1ZqYTJWa1hDSXNJRndpWm1Gc2MyVmNJaWs3WEc0Z0lDQWdZblYwZEc5dUxuTmxkRUYwZEhKcFluVjBaU2hjSW5KdmJHVmNJaXdnWENKamFHVmphMkp2ZUZ3aUtUdGNiaUFnSUNCc1lYbGxjaTVqYkdGemMweHBjM1F1WVdSa0tDZGtZWEpyYlc5a1pTMXNZWGxsY2kwdFluVjBkRzl1SnlrN1hHNWNiaUFnSUNCaWRYUjBiMjR1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvS1NBOVBpQjdYRzRnSUNBZ0lDQmpiMjV6ZENCcGMwUmhjbXR0YjJSbElEMGdkR2hwY3k1cGMwRmpkR2wyWVhSbFpDZ3BPMXh1WEc0Z0lDQWdJQ0JwWmlBb0lXbHpSR0Z5YTIxdlpHVXBJSHRjYmlBZ0lDQWdJQ0FnYkdGNVpYSXVZMnhoYzNOTWFYTjBMbUZrWkNnblpHRnlhMjF2WkdVdGJHRjVaWEl0TFdWNGNHRnVaR1ZrSnlrN1hHNGdJQ0FnSUNBZ0lHSjFkSFJ2Ymk1elpYUkJkSFJ5YVdKMWRHVW9KMlJwYzJGaWJHVmtKeXdnZEhKMVpTazdYRzRnSUNBZ0lDQWdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUd4aGVXVnlMbU5zWVhOelRHbHpkQzVoWkdRb0oyUmhjbXR0YjJSbExXeGhlV1Z5TFMxdWJ5MTBjbUZ1YzJsMGFXOXVKeWs3WEc0Z0lDQWdJQ0FnSUNBZ2JHRjVaWEl1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25aR0Z5YTIxdlpHVXRiR0Y1WlhJdExYTnBiWEJzWlNjcE8xeHVJQ0FnSUNBZ0lDQWdJR0oxZEhSdmJpNXlaVzF2ZG1WQmRIUnlhV0oxZEdVb0oyUnBjMkZpYkdWa0p5azdYRzRnSUNBZ0lDQWdJSDBzSUhScGJXVXBPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdiR0Y1WlhJdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnblpHRnlhMjF2WkdVdGJHRjVaWEl0TFhOcGJYQnNaU2NwTzF4dUlDQWdJQ0FnSUNCaWRYUjBiMjR1YzJWMFFYUjBjbWxpZFhSbEtDZGthWE5oWW14bFpDY3NJSFJ5ZFdVcE8xeHVJQ0FnSUNBZ0lDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0JzWVhsbGNpNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGtZWEpyYlc5a1pTMXNZWGxsY2kwdGJtOHRkSEpoYm5OcGRHbHZiaWNwTzF4dUlDQWdJQ0FnSUNBZ0lHeGhlV1Z5TG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjJSaGNtdHRiMlJsTFd4aGVXVnlMUzFsZUhCaGJtUmxaQ2NwTzF4dUlDQWdJQ0FnSUNBZ0lHSjFkSFJ2Ymk1eVpXMXZkbVZCZEhSeWFXSjFkR1VvSjJScGMyRmliR1ZrSnlrN1hHNGdJQ0FnSUNBZ0lIMHNJREVwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCaWRYUjBiMjR1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duWkdGeWEyMXZaR1V0ZEc5bloyeGxMUzEzYUdsMFpTY3BPMXh1SUNBZ0lDQWdaRzlqZFcxbGJuUXVZbTlrZVM1amJHRnpjMHhwYzNRdWRHOW5aMnhsS0Nka1lYSnJiVzlrWlMwdFlXTjBhWFpoZEdWa0p5azdYRzRnSUNBZ0lDQjNhVzVrYjNjdWJHOWpZV3hUZEc5eVlXZGxMbk5sZEVsMFpXMG9KMlJoY210dGIyUmxKeXdnSVdselJHRnlhMjF2WkdVcE8xeHVJQ0FnSUgwcE8xeHVJQ0I5WEc1Y2JpQWdkRzluWjJ4bEtDa2dlMXh1SUNBZ0lHbG1JQ2doU1ZOZlFsSlBWMU5GVWlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmlBZ0lDQmpiMjV6ZENCc1lYbGxjaUE5SUhSb2FYTXViR0Y1WlhJN1hHNGdJQ0FnWTI5dWMzUWdhWE5FWVhKcmJXOWtaU0E5SUhSb2FYTXVhWE5CWTNScGRtRjBaV1FvS1R0Y2JpQWdJQ0JqYjI1emRDQmlkWFIwYjI0Z1BTQjBhR2x6TG1KMWRIUnZianRjYmx4dUlDQWdJR3hoZVdWeUxtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oyUmhjbXR0YjJSbExXeGhlV1Z5TFMxemFXMXdiR1VuS1R0Y2JpQWdJQ0JrYjJOMWJXVnVkQzVpYjJSNUxtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oyUmhjbXR0YjJSbExTMWhZM1JwZG1GMFpXUW5LVHRjYmlBZ0lDQjNhVzVrYjNjdWJHOWpZV3hUZEc5eVlXZGxMbk5sZEVsMFpXMG9KMlJoY210dGIyUmxKeXdnSVdselJHRnlhMjF2WkdVcE8xeHVJQ0FnSUdKMWRIUnZiaTV6WlhSQmRIUnlhV0oxZEdVb1hDSmhjbWxoTFd4aFltVnNYQ0lzSUZ3aVJHVXRZV04wYVhaaGRHVWdaR0Z5YXlCdGIyUmxYQ0lwTzF4dUlDQWdJR0oxZEhSdmJpNXpaWFJCZEhSeWFXSjFkR1VvWENKaGNtbGhMV05vWldOclpXUmNJaXdnWENKMGNuVmxYQ0lwTzF4dVhHNGdJSDFjYmx4dUlDQnBjMEZqZEdsMllYUmxaQ2dwSUh0Y2JpQWdJQ0JwWmlBb0lVbFRYMEpTVDFkVFJWSXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnVkV3hzTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1pHOWpkVzFsYm5RdVltOWtlUzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJSaGNtdHRiMlJsTFMxaFkzUnBkbUYwWldRbktUdGNiaUFnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJRVJoY210dGIyUmxMQ0I3SUVsVFgwSlNUMWRUUlZJZ2ZTQm1jbTl0SUNjdUwyUmhjbXR0YjJSbEp6dGNjbHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdSR0Z5YTIxdlpHVTdYSEpjYmx4eVhHNHZLaUJsYzJ4cGJuUXRaR2x6WVdKc1pTQXFMMXh5WEc1cFppQW9TVk5mUWxKUFYxTkZVaWtnZTF4eVhHNGdJQ2htZFc1amRHbHZiaWgzYVc1a2IzY3BJSHRjY2x4dUlDQWdJSGRwYm1SdmR5NUVZWEpyYlc5a1pTQTlJRVJoY210dGIyUmxPMXh5WEc0Z0lIMHBLSGRwYm1SdmR5azdYSEpjYm4xY2NseHVMeW9nWlhOc2FXNTBMV1Z1WVdKc1pTQXFMMXh5WEc0aVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cbi8qXG4gIGVzbGludC1kaXNhYmxlXG4gIG5vLWNvbnNvbGUsXG4gIGZ1bmMtbmFtZXNcbiovXG5cbi8qKiBAdHlwZWRlZiB7YW55fSBUT0RPICovXG5cbnZhciBub3JtYWxpemVVcmwgPSByZXF1aXJlKFwiLi9ub3JtYWxpemUtdXJsXCIpO1xudmFyIHNyY0J5TW9kdWxlSWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xudmFyIG5vRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCI7XG52YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuXG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZVxuICogQHJldHVybnMgeyhmdW5jdGlvbigpOiB2b2lkKXwqfVxuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgdGltZSkge1xuICB2YXIgdGltZW91dCA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIGZ1bmN0aW9uQ2FsbCA9IGZ1bmN0aW9uIGZ1bmN0aW9uQ2FsbCgpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbkNhbGwsIHRpbWUpO1xuICB9O1xufVxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBtb2R1bGVJZFxuICogQHJldHVybnMge1RPRE99XG4gKi9cbmZ1bmN0aW9uIGdldEN1cnJlbnRTY3JpcHRVcmwobW9kdWxlSWQpIHtcbiAgdmFyIHNyYyA9IHNyY0J5TW9kdWxlSWRbbW9kdWxlSWRdO1xuICBpZiAoIXNyYykge1xuICAgIGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KSB7XG4gICAgICBzcmMgPSAoIC8qKiBAdHlwZSB7SFRNTFNjcmlwdEVsZW1lbnR9ICovZG9jdW1lbnQuY3VycmVudFNjcmlwdCkuc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuICAgICAgdmFyIGxhc3RTY3JpcHRUYWcgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV07XG4gICAgICBpZiAobGFzdFNjcmlwdFRhZykge1xuICAgICAgICBzcmMgPSBsYXN0U2NyaXB0VGFnLnNyYztcbiAgICAgIH1cbiAgICB9XG4gICAgc3JjQnlNb2R1bGVJZFttb2R1bGVJZF0gPSBzcmM7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVNYXBcbiAgICogQHJldHVybnMge251bGwgfCBzdHJpbmdbXX1cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiAoZmlsZU1hcCkge1xuICAgIGlmICghc3JjKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHNwbGl0UmVzdWx0ID0gc3JjLnNwbGl0KC8oW15cXFxcL10rKVxcLmpzJC8pO1xuICAgIHZhciBmaWxlbmFtZSA9IHNwbGl0UmVzdWx0ICYmIHNwbGl0UmVzdWx0WzFdO1xuICAgIGlmICghZmlsZW5hbWUpIHtcbiAgICAgIHJldHVybiBbc3JjLnJlcGxhY2UoXCIuanNcIiwgXCIuY3NzXCIpXTtcbiAgICB9XG4gICAgaWYgKCFmaWxlTWFwKSB7XG4gICAgICByZXR1cm4gW3NyYy5yZXBsYWNlKFwiLmpzXCIsIFwiLmNzc1wiKV07XG4gICAgfVxuICAgIHJldHVybiBmaWxlTWFwLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24gKG1hcFJ1bGUpIHtcbiAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KGZpbGVuYW1lLCBcIlxcXFwuanMkXCIpLCBcImdcIik7XG4gICAgICByZXR1cm4gbm9ybWFsaXplVXJsKHNyYy5yZXBsYWNlKHJlZywgXCJcIi5jb25jYXQobWFwUnVsZS5yZXBsYWNlKC97ZmlsZU5hbWV9L2csIGZpbGVuYW1lKSwgXCIuY3NzXCIpKSk7XG4gICAgfSk7XG4gIH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBlbFxuICogQHBhcmFtIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUNzcyhlbCwgdXJsKSB7XG4gIGlmICghdXJsKSB7XG4gICAgaWYgKCFlbC5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgdXJsID0gZWwuaHJlZi5zcGxpdChcIj9cIilbMF07XG4gIH1cbiAgaWYgKCFpc1VybFJlcXVlc3QoIC8qKiBAdHlwZSB7c3RyaW5nfSAqL3VybCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGVsLmlzTG9hZGVkID09PSBmYWxzZSkge1xuICAgIC8vIFdlIHNlZW0gdG8gYmUgYWJvdXQgdG8gcmVwbGFjZSBhIGNzcyBsaW5rIHRoYXQgaGFzbid0IGxvYWRlZCB5ZXQuXG4gICAgLy8gV2UncmUgcHJvYmFibHkgY2hhbmdpbmcgdGhlIHNhbWUgZmlsZSBtb3JlIHRoYW4gb25jZS5cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCF1cmwgfHwgISh1cmwuaW5kZXhPZihcIi5jc3NcIikgPiAtMSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgZWwudmlzaXRlZCA9IHRydWU7XG4gIHZhciBuZXdFbCA9IGVsLmNsb25lTm9kZSgpO1xuICBuZXdFbC5pc0xvYWRlZCA9IGZhbHNlO1xuICBuZXdFbC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ld0VsLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5ld0VsLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgfSk7XG4gIG5ld0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ld0VsLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5ld0VsLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgfSk7XG4gIG5ld0VsLmhyZWYgPSBcIlwiLmNvbmNhdCh1cmwsIFwiP1wiKS5jb25jYXQoRGF0ZS5ub3coKSk7XG4gIGlmIChlbC5uZXh0U2libGluZykge1xuICAgIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsLCBlbC5uZXh0U2libGluZyk7XG4gIH0gZWxzZSB7XG4gICAgZWwucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHJlZlxuICogQHBhcmFtIHtUT0RPfSBzcmNcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5mdW5jdGlvbiBnZXRSZWxvYWRVcmwoaHJlZiwgc3JjKSB7XG4gIHZhciByZXQ7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGhyZWYgPSBub3JtYWxpemVVcmwoaHJlZik7XG4gIHNyYy5zb21lKFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICBmdW5jdGlvbiAodXJsKSB7XG4gICAgaWYgKGhyZWYuaW5kZXhPZihzcmMpID4gLTEpIHtcbiAgICAgIHJldCA9IHVybDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3JjXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHJlbG9hZFN0eWxlKHNyYykge1xuICBpZiAoIXNyYykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1wiKTtcbiAgdmFyIGxvYWRlZCA9IGZhbHNlO1xuICBmb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmICghZWwuaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdXJsID0gZ2V0UmVsb2FkVXJsKGVsLmhyZWYsIHNyYyk7XG4gICAgaWYgKCFpc1VybFJlcXVlc3QodXJsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZWwudmlzaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodXJsKSB7XG4gICAgICB1cGRhdGVDc3MoZWwsIHVybCk7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBsb2FkZWQ7XG59XG5mdW5jdGlvbiByZWxvYWRBbGwoKSB7XG4gIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO1xuICBmb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbC52aXNpdGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHVwZGF0ZUNzcyhlbCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1VybFJlcXVlc3QodXJsKSB7XG4gIC8vIEFuIFVSTCBpcyBub3QgYW4gcmVxdWVzdCBpZlxuXG4gIC8vIEl0IGlzIG5vdCBodHRwIG9yIGh0dHBzXG4gIGlmICghL15bYS16QS1aXVthLXpBLVpcXGQrXFwtLl0qOi8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VE9ET30gbW9kdWxlSWRcbiAqIEBwYXJhbSB7VE9ET30gb3B0aW9uc1xuICogQHJldHVybnMge1RPRE99XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBvcHRpb25zKSB7XG4gIGlmIChub0RvY3VtZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJubyB3aW5kb3cuZG9jdW1lbnQgZm91bmQsIHdpbGwgbm90IEhNUiBDU1NcIik7XG4gICAgcmV0dXJuIG5vb3A7XG4gIH1cbiAgdmFyIGdldFNjcmlwdFNyYyA9IGdldEN1cnJlbnRTY3JpcHRVcmwobW9kdWxlSWQpO1xuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIHNyYyA9IGdldFNjcmlwdFNyYyhvcHRpb25zLmZpbGVuYW1lKTtcbiAgICB2YXIgcmVsb2FkZWQgPSByZWxvYWRTdHlsZShzcmMpO1xuICAgIGlmIChvcHRpb25zLmxvY2Fscykge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBEZXRlY3RlZCBsb2NhbCBjc3MgbW9kdWxlcy4gUmVsb2FkIGFsbCBjc3NcIik7XG4gICAgICByZWxvYWRBbGwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJlbG9hZGVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIGNzcyByZWxvYWQgJXNcIiwgc3JjLmpvaW4oXCIgXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBSZWxvYWQgYWxsIGNzc1wiKTtcbiAgICAgIHJlbG9hZEFsbCgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVib3VuY2UodXBkYXRlLCA1MCk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IHBhdGhDb21wb25lbnRzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVVcmwocGF0aENvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHBhdGhDb21wb25lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGl0ZW0pIHtcbiAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgIGNhc2UgXCIuLlwiOlxuICAgICAgICBhY2N1bXVsYXRvci5wb3AoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiLlwiOlxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFjY3VtdWxhdG9yLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfSwgLyoqIEB0eXBlIHtzdHJpbmdbXX0gKi9bXSkuam9pbihcIi9cIik7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsU3RyaW5nKSB7XG4gIHVybFN0cmluZyA9IHVybFN0cmluZy50cmltKCk7XG4gIGlmICgvXmRhdGE6L2kudGVzdCh1cmxTdHJpbmcpKSB7XG4gICAgcmV0dXJuIHVybFN0cmluZztcbiAgfVxuICB2YXIgcHJvdG9jb2wgPSB1cmxTdHJpbmcuaW5kZXhPZihcIi8vXCIpICE9PSAtMSA/IHVybFN0cmluZy5zcGxpdChcIi8vXCIpWzBdICsgXCIvL1wiIDogXCJcIjtcbiAgdmFyIGNvbXBvbmVudHMgPSB1cmxTdHJpbmcucmVwbGFjZShuZXcgUmVnRXhwKHByb3RvY29sLCBcImlcIiksIFwiXCIpLnNwbGl0KFwiL1wiKTtcbiAgdmFyIGhvc3QgPSBjb21wb25lbnRzWzBdLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFwuJC8sIFwiXCIpO1xuICBjb21wb25lbnRzWzBdID0gXCJcIjtcbiAgdmFyIHBhdGggPSBub3JtYWxpemVVcmwoY29tcG9uZW50cyk7XG4gIHJldHVybiBwcm90b2NvbCArIGhvc3QgKyBwYXRoO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzM3ODExMTUyNDk5XG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGNhY2hlZE1vZHVsZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBjYWNoZWRNb2R1bGUuZXJyb3I7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHRyeSB7XG5cdFx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRcdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcblx0XHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRtb2R1bGUuZXJyb3IgPSBlO1xuXHRcdHRocm93IGU7XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcImFwcC5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc29uXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdmNTNlODhmMGY2MWMxMTNhOGIxXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcIm1vYmlsZS1hcHAtbGFuZGluZ3BhZ2UtdGVtcGxhdGU6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgY3VycmVudE1vZHVsZURhdGEgPSB7fTtcbnZhciBpbnN0YWxsZWRNb2R1bGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jO1xuXG4vLyBtb2R1bGUgYW5kIHJlcXVpcmUgY3JlYXRpb25cbnZhciBjdXJyZW50Q2hpbGRNb2R1bGU7XG52YXIgY3VycmVudFBhcmVudHMgPSBbXTtcblxuLy8gc3RhdHVzXG52YXIgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzID0gW107XG52YXIgY3VycmVudFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4vLyB3aGlsZSBkb3dubG9hZGluZ1xudmFyIGJsb2NraW5nUHJvbWlzZXMgPSAwO1xudmFyIGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG5cbi8vIFRoZSB1cGRhdGUgaW5mb1xudmFyIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzO1xudmFyIHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJEID0gY3VycmVudE1vZHVsZURhdGE7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHZhciBtb2R1bGUgPSBvcHRpb25zLm1vZHVsZTtcblx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG5cdG1vZHVsZS5ob3QgPSBjcmVhdGVNb2R1bGVIb3RPYmplY3Qob3B0aW9ucy5pZCwgbW9kdWxlKTtcblx0bW9kdWxlLnBhcmVudHMgPSBjdXJyZW50UGFyZW50cztcblx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdG9wdGlvbnMucmVxdWlyZSA9IHJlcXVpcmU7XG59KTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWlyZShyZXF1aXJlLCBtb2R1bGVJZCkge1xuXHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblx0aWYgKCFtZSkgcmV0dXJuIHJlcXVpcmU7XG5cdHZhciBmbiA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcblx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRzID0gaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzO1xuXHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRwYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG5cdFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcblx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG5cdFx0XHRcdFx0cmVxdWVzdCArXG5cdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcblx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0KTtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdFx0fVxuXHRcdHJldHVybiByZXF1aXJlKHJlcXVlc3QpO1xuXHR9O1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZVtuYW1lXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXF1aXJlW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSkpO1xuXHRcdH1cblx0fVxuXHRmbi5lID0gZnVuY3Rpb24gKGNodW5rSWQsIGZldGNoUHJpb3JpdHkpIHtcblx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQsIGZldGNoUHJpb3JpdHkpKTtcblx0fTtcblx0cmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2R1bGVIb3RPYmplY3QobW9kdWxlSWQsIG1lKSB7XG5cdHZhciBfbWFpbiA9IGN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQ7XG5cdHZhciBob3QgPSB7XG5cdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuXHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG5cdFx0X2FjY2VwdGVkRXJyb3JIYW5kbGVyczoge30sXG5cdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcblx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcblx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcblx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcblx0XHRfbWFpbjogX21haW4sXG5cdFx0X3JlcXVpcmVTZWxmOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IG1lLnBhcmVudHMuc2xpY2UoKTtcblx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IF9tYWluID8gdW5kZWZpbmVkIDogbW9kdWxlSWQ7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcblx0XHR9LFxuXG5cdFx0Ly8gTW9kdWxlIEFQSVxuXHRcdGFjdGl2ZTogdHJ1ZSxcblx0XHRhY2NlcHQ6IGZ1bmN0aW9uIChkZXAsIGNhbGxiYWNrLCBlcnJvckhhbmRsZXIpIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwW2ldXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcF0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZWNsaW5lOiBmdW5jdGlvbiAoZGVwKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuXHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuXHRcdH0sXG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG5cdFx0XHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG5cdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuXHRcdFx0XHRcdChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2goXG5cdFx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuXHRcdGNoZWNrOiBob3RDaGVjayxcblx0XHRhcHBseTogaG90QXBwbHksXG5cdFx0c3RhdHVzOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0aWYgKCFsKSByZXR1cm4gY3VycmVudFN0YXR1cztcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHZhciBpZHggPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcblx0XHRcdGlmIChpZHggPj0gMCkgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cblx0XHQvLyBpbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG5cdFx0ZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG5cdH07XG5cdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcblx0cmV0dXJuIGhvdDtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xuXHRjdXJyZW50U3RhdHVzID0gbmV3U3RhdHVzO1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuXHRcdHJlc3VsdHNbaV0gPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcbn1cblxuZnVuY3Rpb24gdW5ibG9jaygpIHtcblx0aWYgKC0tYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRcdFx0dmFyIGxpc3QgPSBibG9ja2luZ1Byb21pc2VzV2FpdGluZztcblx0XHRcdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0bGlzdFtpXSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhY2tCbG9ja2luZ1Byb21pc2UocHJvbWlzZSkge1xuXHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cdFx0LyogZmFsbHRocm91Z2ggKi9cblx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0YmxvY2tpbmdQcm9taXNlcysrO1xuXHRcdFx0cHJvbWlzZS50aGVuKHVuYmxvY2ssIHVuYmxvY2spO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKSB7XG5cdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSByZXR1cm4gZm4oKTtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcucHVzaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXNvbHZlKGZuKCkpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRyZXR1cm4gc2V0U3RhdHVzKFwiY2hlY2tcIilcblx0XHQudGhlbihfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdFx0aWYgKCF1cGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhhcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpLnRoZW4oXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicHJlcGFyZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIHVwZGF0ZWRNb2R1bGVzID0gW107XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cblx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0a2V5XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckNba2V5XShcblx0XHRcdFx0XHRcdFx0dXBkYXRlLmMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUubSxcblx0XHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGVkTW9kdWxlc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdFx0XHR9LCBbXSlcblx0XHRcdFx0KS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKGFwcGx5T25VcGRhdGUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkoYXBwbHlPblVwZGF0ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzIChzdGF0ZTogXCIgK1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0dXMgK1xuXHRcdFx0XHRcdFwiKVwiXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0YXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuXHR2YXIgcmVzdWx0cyA9IGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLm1hcChmdW5jdGlvbiAoaGFuZGxlcikge1xuXHRcdHJldHVybiBoYW5kbGVyKG9wdGlvbnMpO1xuXHR9KTtcblx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSB1bmRlZmluZWQ7XG5cblx0dmFyIGVycm9ycyA9IHJlc3VsdHNcblx0XHQubWFwKGZ1bmN0aW9uIChyKSB7XG5cdFx0XHRyZXR1cm4gci5lcnJvcjtcblx0XHR9KVxuXHRcdC5maWx0ZXIoQm9vbGVhbik7XG5cblx0aWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImFib3J0XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3JzWzBdO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG5cdHZhciBkaXNwb3NlUHJvbWlzZSA9IHNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG5cblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmRpc3Bvc2UpIHJlc3VsdC5kaXNwb3NlKCk7XG5cdH0pO1xuXG5cdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2Vcblx0dmFyIGFwcGx5UHJvbWlzZSA9IHNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG5cdHZhciBlcnJvcjtcblx0dmFyIHJlcG9ydEVycm9yID0gZnVuY3Rpb24gKGVycikge1xuXHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuXHR9O1xuXG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmFwcGx5KSB7XG5cdFx0XHR2YXIgbW9kdWxlcyA9IHJlc3VsdC5hcHBseShyZXBvcnRFcnJvcik7XG5cdFx0XHRpZiAobW9kdWxlcykge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChtb2R1bGVzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKFtkaXNwb3NlUHJvbWlzZSwgYXBwbHlQcm9taXNlXSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcblx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJmYWlsXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiaWRsZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcblx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdGlmICghY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMpIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL1wiOyIsImlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbnZhciBjcmVhdGVTdHlsZXNoZWV0ID0gKGNodW5rSWQsIGZ1bGxocmVmLCBvbGRUYWcsIHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHR2YXIgbGlua1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGxpbmtUYWcucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdGxpbmtUYWcudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRsaW5rVGFnLm5vbmNlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uYztcblx0fVxuXHR2YXIgb25MaW5rQ29tcGxldGUgPSAoZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MuXG5cdFx0bGlua1RhZy5vbmVycm9yID0gbGlua1RhZy5vbmxvYWQgPSBudWxsO1xuXHRcdGlmIChldmVudC50eXBlID09PSAnbG9hZCcpIHtcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIGV2ZW50LnR5cGU7XG5cdFx0XHR2YXIgcmVhbEhyZWYgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmhyZWYgfHwgZnVsbGhyZWY7XG5cdFx0XHR2YXIgZXJyID0gbmV3IEVycm9yKFwiTG9hZGluZyBDU1MgY2h1bmsgXCIgKyBjaHVua0lkICsgXCIgZmFpbGVkLlxcbihcIiArIGVycm9yVHlwZSArIFwiOiBcIiArIHJlYWxIcmVmICsgXCIpXCIpO1xuXHRcdFx0ZXJyLm5hbWUgPSBcIkNodW5rTG9hZEVycm9yXCI7XG5cdFx0XHRlcnIuY29kZSA9IFwiQ1NTX0NIVU5LX0xPQURfRkFJTEVEXCI7XG5cdFx0XHRlcnIudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdGVyci5yZXF1ZXN0ID0gcmVhbEhyZWY7XG5cdFx0XHRpZiAobGlua1RhZy5wYXJlbnROb2RlKSBsaW5rVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlua1RhZylcblx0XHRcdHJlamVjdChlcnIpO1xuXHRcdH1cblx0fVxuXHRsaW5rVGFnLm9uZXJyb3IgPSBsaW5rVGFnLm9ubG9hZCA9IG9uTGlua0NvbXBsZXRlO1xuXHRsaW5rVGFnLmhyZWYgPSBmdWxsaHJlZjtcblxuXG5cdGlmIChvbGRUYWcpIHtcblx0XHRvbGRUYWcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGlua1RhZywgb2xkVGFnLm5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuXHR9XG5cdHJldHVybiBsaW5rVGFnO1xufTtcbnZhciBmaW5kU3R5bGVzaGVldCA9IChocmVmLCBmdWxsaHJlZikgPT4ge1xuXHR2YXIgZXhpc3RpbmdMaW5rVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nTGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGFnID0gZXhpc3RpbmdMaW5rVGFnc1tpXTtcblx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpIHx8IHRhZy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuXHRcdGlmKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gdGFnO1xuXHR9XG5cdHZhciBleGlzdGluZ1N0eWxlVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0YWcgPSBleGlzdGluZ1N0eWxlVGFnc1tpXTtcblx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpO1xuXHRcdGlmKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikgcmV0dXJuIHRhZztcblx0fVxufTtcbnZhciBsb2FkU3R5bGVzaGVldCA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0dmFyIGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGKGNodW5rSWQpO1xuXHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG5cdFx0aWYoZmluZFN0eWxlc2hlZXQoaHJlZiwgZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdGNyZWF0ZVN0eWxlc2hlZXQoY2h1bmtJZCwgZnVsbGhyZWYsIG51bGwsIHJlc29sdmUsIHJlamVjdCk7XG5cdH0pO1xufVxuLy8gbm8gY2h1bmsgbG9hZGluZ1xuXG52YXIgb2xkVGFncyA9IFtdO1xudmFyIG5ld1RhZ3MgPSBbXTtcbnZhciBhcHBseUhhbmRsZXIgPSAob3B0aW9ucykgPT4ge1xuXHRyZXR1cm4geyBkaXNwb3NlOiAoKSA9PiB7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG9sZFRhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBvbGRUYWcgPSBvbGRUYWdzW2ldO1xuXHRcdFx0aWYob2xkVGFnLnBhcmVudE5vZGUpIG9sZFRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9sZFRhZyk7XG5cdFx0fVxuXHRcdG9sZFRhZ3MubGVuZ3RoID0gMDtcblx0fSwgYXBwbHk6ICgpID0+IHtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbmV3VGFncy5sZW5ndGg7IGkrKykgbmV3VGFnc1tpXS5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0XHRuZXdUYWdzLmxlbmd0aCA9IDA7XG5cdH0gfTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5taW5pQ3NzID0gKGNodW5rSWRzLCByZW1vdmVkQ2h1bmtzLCByZW1vdmVkTW9kdWxlcywgcHJvbWlzZXMsIGFwcGx5SGFuZGxlcnMsIHVwZGF0ZWRNb2R1bGVzTGlzdCkgPT4ge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y2h1bmtJZHMuZm9yRWFjaCgoY2h1bmtJZCkgPT4ge1xuXHRcdHZhciBocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRihjaHVua0lkKTtcblx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuXHRcdHZhciBvbGRUYWcgPSBmaW5kU3R5bGVzaGVldChocmVmLCBmdWxsaHJlZik7XG5cdFx0aWYoIW9sZFRhZykgcmV0dXJuO1xuXHRcdHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dmFyIHRhZyA9IGNyZWF0ZVN0eWxlc2hlZXQoY2h1bmtJZCwgZnVsbGhyZWYsIG9sZFRhZywgKCkgPT4ge1xuXHRcdFx0XHR0YWcuYXMgPSBcInN0eWxlXCI7XG5cdFx0XHRcdHRhZy5yZWwgPSBcInByZWxvYWRcIjtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdG9sZFRhZ3MucHVzaChvbGRUYWcpO1xuXHRcdFx0bmV3VGFncy5wdXNoKHRhZyk7XG5cdFx0fSkpO1xuXHR9KTtcbn1cblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkIiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgfHwge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxudmFyIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3Q7XG52YXIgd2FpdGluZ1VwZGF0ZVJlc29sdmVzID0ge307XG5mdW5jdGlvbiBsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSB7XG5cdGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QgPSB1cGRhdGVkTW9kdWxlc0xpc3Q7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gcmVzb2x2ZTtcblx0XHQvLyBzdGFydCB1cGRhdGUgY2h1bmsgbG9hZGluZ1xuXHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpO1xuXHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHRcdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkXG5cdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBob3QgdXBkYXRlIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkKTtcblx0fSk7XG59XG5cbnNlbGZbXCJ3ZWJwYWNrSG90VXBkYXRlbW9iaWxlX2FwcF9sYW5kaW5ncGFnZV90ZW1wbGF0ZVwiXSA9IChjaHVua0lkLCBtb3JlTW9kdWxlcywgcnVudGltZSkgPT4ge1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0aWYoY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCkgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgY3VycmVudFVwZGF0ZVJ1bnRpbWUucHVzaChydW50aW1lKTtcblx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKCk7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHR9XG59O1xuXG52YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbnZhciBjdXJyZW50VXBkYXRlO1xudmFyIGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuZnVuY3Rpb24gYXBwbHlIYW5kbGVyKG9wdGlvbnMpIHtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtcjtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcblx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKHVwZGF0ZU1vZHVsZUlkKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG5cdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cblx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhaW46IFtpZF0sXG5cdFx0XHRcdGlkOiBpZFxuXHRcdFx0fTtcblx0XHR9KTtcblx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuXHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFtb2R1bGUgfHxcblx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuXHRcdFx0KVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG5cdFx0XHRcdHZhciBwYXJlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbcGFyZW50SWRdO1xuXHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG5cdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcblx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcblx0XHRcdFx0cXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRpZDogcGFyZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcblx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcblx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuXHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYltpXTtcblx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcblx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuXHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG5cdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyBtb2R1bGUuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcblx0XHQpO1xuXHR9O1xuXG5cdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdFx0dmFyIG5ld01vZHVsZUZhY3RvcnkgPSBjdXJyZW50VXBkYXRlW21vZHVsZUlkXTtcblx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cblx0XHRcdHZhciByZXN1bHQgPSBuZXdNb2R1bGVGYWN0b3J5XG5cdFx0XHRcdD8gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKVxuXHRcdFx0XHQ6IHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdGlmIChcblx0XHRcdG1vZHVsZSAmJlxuXHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCB8fCBtb2R1bGUuaG90Ll9tYWluKSAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IG1vZHVsZS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuXHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgYWNjZXB0Q2FsbGJhY2sgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVyID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVycy5wdXNoKGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2tdLmNhbGwobnVsbCwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGVycm9ySGFuZGxlcnNba10gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyc1trXShlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMSkge1xuXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjEsXG5cdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjEpO1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLmpzb25wID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLmpzb25wID0gZnVuY3Rpb24gKFxuXHRjaHVua0lkcyxcblx0cmVtb3ZlZENodW5rcyxcblx0cmVtb3ZlZE1vZHVsZXMsXG5cdHByb21pc2VzLFxuXHRhcHBseUhhbmRsZXJzLFxuXHR1cGRhdGVkTW9kdWxlc0xpc3Rcbikge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuXHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG5cdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG5cdFx0b2JqW2tleV0gPSBmYWxzZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHQpIHtcblx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGVDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdCFjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdXG5cdFx0XHQpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkpO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0gPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZmV0Y2ggPT09IFwidW5kZWZpbmVkXCIpIHRocm93IG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydDogbmVlZCBmZXRjaCBBUElcIik7XG5cdHJldHVybiBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYoKSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuOyAvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG5cdFx0aWYoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXBkYXRlIG1hbmlmZXN0IFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gbW9kdWxlIGNhY2hlIGFyZSB1c2VkIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vX3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiVG9iaSIsInRvYmkiLCJEYXJrbW9kZSIsImFkZERhcmttb2RlV2lkZ2V0Iiwic2hvd1dpZGdldCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9