import{f as S,i as _,g as T,r as c,a as d,j as s,R as D,b as j,s as a,M as B,C as h}from"./index-b799896a.js";import{t as x,p}from"./typeApi-21f956fb.js";import{H as I}from"./Header-ae959c5a.js";import{d as R,a as z,b as L}from"./ArrowCircleDown-46d850f1.js";import{a as m,d as q}from"./util-cb2f9063.js";var u={},A=_;Object.defineProperty(u,"__esModule",{value:!0});var y=u.default=void 0,E=A(S()),H=T;y=u.default=(0,E.default)((0,H.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save");function X(){const[t,r]=c.useState(),[g,l]=c.useState(!1);c.useEffect(()=>{x.getType().then(n=>{r(n.data.types)})},[]);const b=()=>{const n=p(o=>(o==null||o.push({type:"",background:""}),o),t);r(n)},f=n=>{const o=p(e=>(e==null||e.splice(n,1),e),t);r(o)},w=(n,o)=>{const e=p(i=>(i&&i[o]!==void 0&&(i[o].type=n.target.value),i),t);r(e)},C=(n,o)=>{const e=p(i=>(i&&i[o]!==void 0&&(i[o].background=n.target.value),i),t);r(e)},$=c.useCallback(n=>{if(t&&n>0){const o=p(t,e=>{const i=e[n-1];return e[n-1]=e[n],e[n]=i,e});r(o)}},[t]),k=c.useCallback(n=>{if(t&&n<t.length-1){const o=p(t,e=>{const i=e[n+1];return e[n+1]=e[n],e[n]=i,e});r(o)}},[t]);return d(M,{children:[s(I,{title:"유형변경",backButton:!0}),d(P,{children:[s("span",{children:"유형이름"}),s("span",{children:"배경색"})]}),D.Children.toArray(t==null?void 0:t.map(({type:n,background:o},e)=>d(V,{children:[`${e}.`,s(v,{value:n,onChange:i=>w(i,e)})," ",s(v,{value:o,onChange:i=>C(i,e)})," ",s(O,{background:o}),s(R,{onClick:()=>$(e)}),s(z,{onClick:()=>k(e)}),s(N,{fontSize:"small",onClick:()=>f(e)})]}))),s(U,{disabled:g,onClick:()=>{t&&(l(!0),x.patchType(t).then(n=>{l(!1),m("저장 완료")}).catch(()=>{l(!1),m("저장 실패")}))},children:s(y,{})}),s(G,{onClick:b,children:s(L,{})}),s(j,{loading:g})]})}const M=a.div`
  ${B};
`,P=a.div`
  padding-left: 20px;
  span {
    display: inline-block;
    text-align: center;
    width: 100px;
  }
`,O=a.span`
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-left: 4px;
  margin-right: 5px;
  background: ${({background:t})=>t!=null&&t.startsWith("#")?t:"#"+t};
`,V=a.div`
  padding: 4px;
  display: flex;
  align-items: center;
  svg:not(:last-of-type) {
    color: ${h.green100};
  }
`,v=a.input`
  width: 100px;
  margin-left: 4px;
`,G=a.button`
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
`,N=a(q)`
  margin-left: 15px;
  color: red;
`,U=a.button`
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
`;export{X as default};
