import{u as v,r as s,j as p,a as t,R as C,L as y,b as I,l as S,n,M as $,C as d}from"./index-213b1002.js";import{H as B}from"./Header-8ee5aa2d.js";import{g as L,p as D,a as f,d as j,O as A}from"./open-color-8f1899fc.js";import{d as _,a as z,b as H}from"./ArrowCircleDown-2cb58e20.js";import{a as l,d as O}from"./util-e2d0cb49.js";import{B as h}from"./Button-6847b725.js";function X(){const c=v(),[o,g]=s.useState(),[u,a]=s.useState(!1),i=s.useCallback(()=>{a(!0),L().then(e=>{g(e),a(!1)})},[]),m=s.useCallback(()=>{a(!0),D().then(()=>{i(),a(!1),l("추가 완료")})},[i]);s.useEffect(()=>{i()},[i]);const x=s.useCallback(async e=>{o&&e!==0&&(a(!0),await f({fromId:o[e].sheetId,toId:o[e-1].sheetId}),await i(),a(!1),l("변경 완료"))},[i,o]),b=s.useCallback(async e=>{o&&e!==o.length-1&&(a(!0),await f({fromId:o[e].sheetId,toId:o[e+1].sheetId}),await i(),a(!1),l("변경 완료"))},[i,o]),w=async(e,r)=>{window.confirm(`${r}을(를) 삭제하시겠습니까?`)&&(await j(e),await i(),l("삭제 완료"))},k=async()=>{a(!0),await S(),a(!1),c("/login")};return p(E,{children:[t(B,{title:"고영이 가계부"}),t(N,{children:C.Children.toArray(o==null?void 0:o.map((e,r)=>p(P,{children:[p(R,{children:[t(_,{onClick:()=>x(r)}),t(z,{onClick:()=>b(r)}),t(y,{to:`sheet/${e.sheetId}`,children:e.name})]}),t(M,{children:t(O,{onClick:()=>{w(e.sheetId,e.name)}})})]})))}),t(U,{onClick:m,children:t(H,{})}),t(G,{onClick:k,children:"로그아웃"}),t(J,{onClick:()=>c("/types"),children:"유형변경"}),t(T,{onClick:()=>c("/join"),children:"요약보기"}),t(I,{loading:u})]})}const E=n.div`
  ${$};
  height: calc(100% - 60px);
  overflow: auto;
`,N=n.div`
  text-align: left;
  margin: 0;
`,P=n.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  svg {
    color: ${d.green100};
  }
`,R=n.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,M=n.div`
  svg {
    color: red;
  }
`,U=n.button`
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
  background: ${d.green100};
  border: 2px solid ${d.green100};
  border-radius: 100%;
  opacity: 0.8;
  svg {
    color: white;
    width: 100%;
    height: 100%;
  }
`,G=n(h)`
  position: fixed;
  @media (min-width: 1000px) {
    position: absolute;
  }
  z-index: 1;
  bottom: 20px;
  left: 20px;
  height: 32px;

  background: ${A.red[4]};
  font: inherit;
`,J=n(h)`
  position: fixed;
  @media (min-width: 1000px) {
    position: absolute;
  }
  z-index: 1;
  bottom: 20px;
  left: 100px;
  height: 32px;

  background: ${d.green100};
  font: inherit;
`,T=n(h)`
  position: fixed;
  @media (min-width: 1000px) {
    position: absolute;
  }
  z-index: 1;
  bottom: 20px;
  left: 180px;
  height: 32px;

  background: ${d.green100};
  font: inherit;
`;export{X as default};
