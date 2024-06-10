import{u as v,r as s,j as p,a as t,R as y,L as C,b as S,c as I,n,M as $,C as d}from"./index-2a6b3420.js";import{H as L}from"./Header-aca7bf29.js";import{g as B,p as D,a as f,d as A,O as j}from"./open-color-d21ec5f6.js";import{d as O,a as _,b as z}from"./ArrowCircleDown-1a28fd53.js";import{a as l,d as H}from"./util-3a891df5.js";import{B as h}from"./Button-74001b13.js";function X(){const c=v(),[o,g]=s.useState(),[u,a]=s.useState(!1),i=s.useCallback(()=>{a(!0),B().then(e=>{g(e),a(!1)})},[]),m=s.useCallback(()=>{a(!0),D().then(()=>{i(),a(!1),l("추가 완료")})},[i]);s.useEffect(()=>{i()},[i]);const x=s.useCallback(async e=>{o&&e!==0&&(a(!0),await f({fromId:o[e].sheetId,toId:o[e-1].sheetId}),await i(),a(!1),l("변경 완료"))},[i,o]),b=s.useCallback(async e=>{o&&e!==o.length-1&&(a(!0),await f({fromId:o[e].sheetId,toId:o[e+1].sheetId}),await i(),a(!1),l("변경 완료"))},[i,o]),w=async(e,r)=>{window.confirm(`${r}을(를) 삭제하시겠습니까?`)&&(await A(e),await i(),l("삭제 완료"))},k=async()=>{try{a(!0),await I(),c("/login")}catch(e){console.error(e),window.alert("로그아웃 실패"+JSON.stringify(e))}finally{a(!1)}};return p(N,{children:[t(L,{title:"고영이 가계부"}),t(E,{children:y.Children.toArray(o==null?void 0:o.map((e,r)=>p(P,{children:[p(R,{children:[t(O,{onClick:()=>x(r)}),t(_,{onClick:()=>b(r)}),t(C,{to:`sheet/${e.sheetId}`,children:e.name})]}),t(J,{children:t(H,{onClick:()=>{w(e.sheetId,e.name)}})})]})))}),t(M,{onClick:m,children:t(z,{})}),t(G,{onClick:k,children:"로그아웃"}),t(K,{onClick:()=>c("/types"),children:"유형변경"}),t(T,{onClick:()=>c("/join"),children:"요약보기"}),t(S,{loading:u})]})}const N=n.div`
  ${$};
  height: calc(100% - 60px);
  overflow: auto;
`,E=n.div`
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
`,J=n.div`
  svg {
    color: red;
  }
`,M=n.button`
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

  background: ${j.red[4]};
  font: inherit;
`,K=n(h)`
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
