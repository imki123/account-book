import{d as u,i as a,e as c}from"./index-213b1002.js";var i={},l=a;Object.defineProperty(i,"__esModule",{value:!0});var d=i.default=void 0,f=l(u()),p=c,m=(0,f.default)((0,p.jsx)("path",{d:"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"RemoveCircleOutline");d=i.default=m;const v=e=>{const t=s(e);return Number.isNaN(Number(t))?0:Number(t)},b=(e,t=0)=>{const r=v(e);return Math.round(r*10**t)/10**t},s=e=>e?String(e).replace(/,/g,""):"",S=e=>{const t=s(e);return y(t)?BigInt(t):BigInt(0)},g=e=>BigInt(s(e)).toLocaleString(),y=e=>{try{return typeof e=="number"?!1:(BigInt(s(e)),!0)}catch{return!1}},h=(e,t=!1)=>{if(e){let r=document.querySelector(".fakeInput");if(t&&(r=document.querySelector(".fakeSelect")),r){const o=r.querySelector("option");o&&(o.innerHTML=e.value),r.value=e.value,r.style.fontSize=getComputedStyle(e).fontSize,r.style.fontWeight=getComputedStyle(e).fontWeight;const n=r.scrollWidth+(t?15:10);e.style.width=n+"px",r.value="",o&&(o.innerHTML="")}}},I=(e,t=2e3,r=500)=>{const o=document.createElement("div"),n=`
    position: fixed;
    z-index: 999;
    bottom: -40px;
    left: 50%;
    transform: translate(-50%);
    opacity: 0;
    background: #777;
    color: white;
    padding: 5px 10px;
    border-radius: 8px;
    font-size: 14px;
    transition: bottom ${r}ms, opacity ${r}ms;
  `;o.style.cssText=n,o.innerText=e,document.body.appendChild(o),setTimeout(()=>{o.style.cssText=n+`
    bottom: 20px;
    opacity: 0.9;
    `},100),setTimeout(()=>{o.style.cssText=n},t),setTimeout(()=>{o&&o.remove()},t+r)};export{I as a,v as b,h as c,d,y as i,g as l,S as p,b as s};
