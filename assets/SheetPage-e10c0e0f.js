import{d as E,i as $,e as j,a as s,n as g,f as q,u as T,r as a,j as B,b as D,M as P,C as M}from"./index-213b1002.js";import{H as N}from"./Header-8ee5aa2d.js";import{p}from"./type-1eb63a16.js";import{b as A,c as H}from"./open-color-8f1899fc.js";import{a as w,S as O,b as W}from"./SheetSummary-cb24285b.js";import{c as z,a as C}from"./util-e2d0cb49.js";var b={},F=$;Object.defineProperty(b,"__esModule",{value:!0});var I=b.default=void 0,G=F(E()),V=j,J=(0,G.default)((0,V.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");I=b.default=J;function K({onClick:o,refreshing:h}){return s(Q,{onClick:o,disabled:h,children:s(I,{})})}const Q=g.button`
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

  ${({disabled:o})=>o&&"animation: 500ms rotation infinite linear;"}
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
`;function oe(){const o=q(),h=T(),[e,n]=a.useState(),[v,S]=a.useState(!1),[f,x]=a.useState(),[d,R]=a.useState(),l=a.useRef(null),i=a.useRef(!1),m=a.useCallback(()=>{o.sheetId&&(S(!0),A(Number(o.sheetId)).then(t=>{S(!1),t&&n(t)}))},[o.sheetId]),_=a.useCallback(t=>{if(i.current=!0,e){const u=p(r=>{if(r)return z(t.target),r.name=t.target.value,r},e);n(u)}},[e]);a.useEffect(()=>{m()},[m]),a.useEffect(()=>{if(f!==void 0){const t=document.querySelector(`#row_${f+1}`);t&&(t.classList.add("blink"),x(void 0),setTimeout(()=>{t.classList.remove("blink")},w))}},[f]),a.useEffect(()=>{if(e&&d!==void 0){const t=document.querySelector(`#row_${d}`);t&&(t.classList.add("blinkRed"),setTimeout(()=>{t.classList.remove("blinkRed");const u=p(e,r=>{var c;(c=r==null?void 0:r.table)==null||c.splice(d-1,1)});n(u),R(void 0)},w))}},[d,e]);const L=a.useCallback(t=>{i.current=!0;const u=p(e,r=>{var c;(c=r==null?void 0:r.table)==null||c.splice(t,0,["","","",""])});n(u),x(t)},[e]),y=a.useCallback(t=>{i.current=!0,R(t)},[]),k=a.useCallback(()=>{o.sheetId&&e&&H(Number(o.sheetId),e).then(t=>{C("자동 저장")})},[o.sheetId,e]);return a.useEffect(()=>{i.current===!0&&(l.current!==null&&clearTimeout(l.current),l.current=setTimeout(()=>{l.current=null,k()},2e3))},[k,e]),B(U,{children:[s(N,{title:(e==null?void 0:e.name)!==void 0?s(X,{value:e==null?void 0:e.name,onChange:_}):null,backButton:!0,backFunction:()=>h("/",{replace:!0})}),s(O,{sheetData:e,setSheetData:n,addRow:L,removeRow:y,changeRef:i}),s(W,{sheetData:e,setSheetData:n}),s(K,{refreshing:v,onClick:()=>{m(),i.current=!1,C("새로고침 완료")}}),s(D,{loading:v})]})}const U=g.div`
  ${P}
`,X=g.input`
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
