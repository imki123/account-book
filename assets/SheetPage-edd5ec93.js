import{f as $,i as j,g as q,j as o,s as g,h as T,u as B,r as a,k as w,a as D,b as P,M as A,C as M}from"./index-b799896a.js";import{H as N}from"./Header-ae959c5a.js";import{p}from"./typeApi-21f956fb.js";import{s as C}from"./open-color-35c0203e.js";import{S as H,a as O}from"./SheetSummary-63eb79a8.js";import{c as W,a as I}from"./util-cb2f9063.js";var v={},z=j;Object.defineProperty(v,"__esModule",{value:!0});var L=v.default=void 0,F=z($()),G=q;L=v.default=(0,F.default)((0,G.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"}),"Refresh");function V({onClick:r,refreshing:h}){return o(J,{onClick:r,disabled:h,children:o(L,{})})}const J=g.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  @media (min-width: 1000px) {
    right: calc(50% - (1000px / 2) + 20px);
  }

  padding: 5px;
  width: 40px;
  height: 40px;

  overflow: hidden;
  background: white;
  border: 2px solid #eee;
  border-radius: 100%;

  ${({disabled:r})=>r&&"animation: 500ms rotation infinite linear;"}
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  svg {
    color: #aaa;
    width: 100%;
    height: 100%;
  }
`;function ae(){const r=T(),h=B(),[e,n]=a.useState(),[b,S]=a.useState(!1),[f,x]=a.useState(),[d,R]=a.useState(),l=a.useRef(null),i=a.useRef(!1),m=a.useCallback(()=>{r.sheetId&&(S(!0),C.getSheet(Number(r.sheetId)).then(t=>{S(!1),t.data&&n(t.data)}))},[r.sheetId]),_=a.useCallback(t=>{if(i.current=!0,e){const u=p(s=>{if(s)return W(t.target),s.name=t.target.value,s},e);n(u)}},[e]);a.useEffect(()=>{m()},[m]),a.useEffect(()=>{if(f!==void 0){const t=document.querySelector(`#row_${f+1}`);t&&(t.classList.add("blink"),x(void 0),setTimeout(()=>{t.classList.remove("blink")},w))}},[f]),a.useEffect(()=>{if(e&&d!==void 0){const t=document.querySelector(`#row_${d}`);t&&(t.classList.add("blinkRed"),setTimeout(()=>{t.classList.remove("blinkRed");const u=p(e,s=>{var c;(c=s==null?void 0:s.table)==null||c.splice(d-1,1)});n(u),R(void 0)},w))}},[d,e]);const y=a.useCallback(t=>{i.current=!0;const u=p(e,s=>{var c;(c=s==null?void 0:s.table)==null||c.splice(t,0,["","","",""])});n(u),x(t)},[e]),E=a.useCallback(t=>{i.current=!0,R(t)},[]),k=a.useCallback(()=>{r.sheetId&&e&&C.patchSheet(Number(r.sheetId),e).then(t=>{I("자동 저장")})},[r.sheetId,e]);return a.useEffect(()=>{i.current===!0&&(l.current!==null&&clearTimeout(l.current),l.current=setTimeout(()=>{l.current=null,k()},2e3))},[k,e]),D(K,{children:[o(N,{title:(e==null?void 0:e.name)!==void 0?o(Q,{value:e==null?void 0:e.name,onChange:_}):null,backButton:!0,backFunction:()=>h("/",{replace:!0})}),o(H,{sheetData:e,setSheetData:n,addRow:y,removeRow:E,changeRef:i}),o(O,{sheetData:e,setSheetData:n}),o(V,{refreshing:b,onClick:()=>{m(),i.current=!1,I("새로고침 완료")}}),o(P,{loading:b})]})}const K=g.div`
  ${A}
`,Q=g.input`
  width: 100%;
  min-width: 50px;
  height: 24px;
  border: 0;
  padding: 0 2px;
  outline: none;
  background: none;
  font: inherit;
  &:focus,
  &:hover,
  &:active {
    border-bottom: 1px solid ${M.greenLine};
  }
`;export{ae as default};
