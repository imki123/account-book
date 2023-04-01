import{d as S,i as _,e as k,r as l,j as d,a as s,R as T,b as D,n as a,M as j,C as h}from"./index-213b1002.js";import{g as z,p,a as B}from"./type-1eb63a16.js";import{H as I}from"./Header-8ee5aa2d.js";import{d as R,a as L,b as q}from"./ArrowCircleDown-2cb58e20.js";import{a as x,d as E}from"./util-e2d0cb49.js";var u={},H=_;Object.defineProperty(u,"__esModule",{value:!0});var m=u.default=void 0,M=H(S()),P=k,A=(0,M.default)((0,P.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");m=u.default=A;function Z(){const[t,r]=l.useState(),[g,c]=l.useState(!1);l.useEffect(()=>{z().then(n=>{r(n.types)})},[]);const y=()=>{const n=p(o=>(o==null||o.push({type:"",background:""}),o),t);r(n)},b=n=>{const o=p(e=>(e==null||e.splice(n,1),e),t);r(o)},f=(n,o)=>{const e=p(i=>(i&&i[o]!==void 0&&(i[o].type=n.target.value),i),t);r(e)},w=(n,o)=>{const e=p(i=>(i&&i[o]!==void 0&&(i[o].background=n.target.value),i),t);r(e)},C=l.useCallback(n=>{if(t&&n>0){const o=p(t,e=>{const i=e[n-1];return e[n-1]=e[n],e[n]=i,e});r(o)}},[t]),$=l.useCallback(n=>{if(t&&n<t.length-1){const o=p(t,e=>{const i=e[n+1];return e[n+1]=e[n],e[n]=i,e});r(o)}},[t]);return d(O,{children:[s(I,{title:"유형변경",backButton:!0}),d(V,{children:[s("span",{children:"유형이름"}),s("span",{children:"배경색"})]}),T.Children.toArray(t==null?void 0:t.map(({type:n,background:o},e)=>d(N,{children:[`${e}.`,s(v,{value:n,onChange:i=>f(i,e)})," ",s(v,{value:o,onChange:i=>w(i,e)})," ",s(G,{background:o}),s(R,{onClick:()=>C(e)}),s(L,{onClick:()=>$(e)}),s(W,{fontSize:"small",onClick:()=>b(e)})]}))),s(F,{disabled:g,onClick:()=>{t&&(c(!0),B(t).then(n=>{c(!1),x("저장 완료")}).catch(()=>{c(!1),x("저장 실패")}))},children:s(m,{})}),s(U,{onClick:y,children:s(q,{})}),s(D,{loading:g})]})}const O=a.div`
  ${j};
`,V=a.div`
  padding-left: 20px;
  span {
    display: inline-block;
    text-align: center;
    width: 100px;
  }
`,G=a.span`
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-left: 4px;
  margin-right: 5px;
  background: ${({background:t})=>t!=null&&t.startsWith("#")?t:"#"+t};
`,N=a.div`
  padding: 4px;
  display: flex;
  align-items: center;
  svg:not(:last-of-type) {
    color: ${h.green100};
  }
`,v=a.input`
  width: 100px;
  margin-left: 4px;
`,U=a.button`
  position: fixed;
  @media (min-width: 1000px) {
    position: absolute;
  }
  z-index: 1;
  bottom: 20px;
  right: 20px;

  padding: 2px;
  width: 40px;
  height: 40px;

  overflow: hidden;
  background: ${h.green100};
  border: 2px solid ${h.green100};
  border-radius: 100%;
  opacity: 0.8;
  svg {
    color: white;
    width: 100%;
    height: 100%;
  }
`,W=a(E)`
  margin-left: 15px;
  color: red;
`,F=a.button`
  position: fixed;
  z-index: 1;
  bottom: 80px;
  right: 20px;
  @media (min-width: 1000px) {
    right: calc(50% - (1000px / 2) + 20px);
  }

  padding: 5px;
  width: 40px;
  height: 40px;

  overflow: hidden;
  background: blue;
  border: 2px solid #eee;
  border-radius: 100%;
  opacity: 0.7;
  svg {
    color: white;
    width: 100%;
    height: 100%;
  }
  ${({disabled:t})=>t&&"background: #555;"}
`;export{Z as default};
