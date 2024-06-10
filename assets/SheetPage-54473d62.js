import{i as y,l as E,m as $,a as s,n as g,o as j,u as T,r as a,q as w,j as B,b as D,M as P,C as M}from"./index-2a6b3420.js";import{H as N}from"./Header-aca7bf29.js";import{p}from"./type-72ca4024.js";import{b as A,c as H}from"./open-color-d21ec5f6.js";import{S as O,a as W}from"./SheetSummary-e69368d0.js";import{c as z,a as C}from"./util-3a891df5.js";var b={},F=E;Object.defineProperty(b,"__esModule",{value:!0});var I=b.default=void 0,G=F(y()),V=$;I=b.default=(0,G.default)((0,V.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"}),"Refresh");function J({onClick:r,refreshing:h}){return s(K,{onClick:r,disabled:h,children:s(I,{})})}const K=g.button`
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
`;function oe(){const r=j(),h=T(),[e,n]=a.useState(),[v,S]=a.useState(!1),[m,x]=a.useState(),[d,R]=a.useState(),l=a.useRef(null),i=a.useRef(!1),f=a.useCallback(()=>{r.sheetId&&(S(!0),A(Number(r.sheetId)).then(t=>{S(!1),t&&n(t)}))},[r.sheetId]),L=a.useCallback(t=>{if(i.current=!0,e){const u=p(o=>{if(o)return z(t.target),o.name=t.target.value,o},e);n(u)}},[e]);a.useEffect(()=>{f()},[f]),a.useEffect(()=>{if(m!==void 0){const t=document.querySelector(`#row_${m+1}`);t&&(t.classList.add("blink"),x(void 0),setTimeout(()=>{t.classList.remove("blink")},w))}},[m]),a.useEffect(()=>{if(e&&d!==void 0){const t=document.querySelector(`#row_${d}`);t&&(t.classList.add("blinkRed"),setTimeout(()=>{t.classList.remove("blinkRed");const u=p(e,o=>{var c;(c=o==null?void 0:o.table)==null||c.splice(d-1,1)});n(u),R(void 0)},w))}},[d,e]);const _=a.useCallback(t=>{i.current=!0;const u=p(e,o=>{var c;(c=o==null?void 0:o.table)==null||c.splice(t,0,["","","",""])});n(u),x(t)},[e]),q=a.useCallback(t=>{i.current=!0,R(t)},[]),k=a.useCallback(()=>{r.sheetId&&e&&H(Number(r.sheetId),e).then(t=>{C("자동 저장")})},[r.sheetId,e]);return a.useEffect(()=>{i.current===!0&&(l.current!==null&&clearTimeout(l.current),l.current=setTimeout(()=>{l.current=null,k()},2e3))},[k,e]),B(Q,{children:[s(N,{title:(e==null?void 0:e.name)!==void 0?s(U,{value:e==null?void 0:e.name,onChange:L}):null,backButton:!0,backFunction:()=>h("/",{replace:!0})}),s(O,{sheetData:e,setSheetData:n,addRow:_,removeRow:q,changeRef:i}),s(W,{sheetData:e,setSheetData:n}),s(J,{refreshing:v,onClick:()=>{f(),i.current=!1,C("새로고침 완료")}}),s(D,{loading:v})]})}const Q=g.div`
  ${P}
`,U=g.input`
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
`;export{oe as default};
