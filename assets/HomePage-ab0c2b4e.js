import{u as v,r as s,j as p,a as t,R as y,L as C,b as S,l as I,n,M as $,C as d}from"./index-9f422efe.js";import{H as B}from"./Header-2ab0800b.js";import{g as L,p as D,a as f,d as j,O as A}from"./open-color-31ae9ce5.js";import{d as O,a as _,b as z}from"./ArrowCircleDown-44ada8ae.js";import{a as l,d as H}from"./util-7b388dc6.js";import{B as h}from"./Button-b3cb2b9e.js";function X(){const c=v(),[o,g]=s.useState(),[u,i]=s.useState(!1),a=s.useCallback(()=>{i(!0),L().then(e=>{g(e),i(!1)})},[]),m=s.useCallback(()=>{i(!0),D().then(()=>{a(),i(!1),l("추가 완료")})},[a]);s.useEffect(()=>{a()},[a]);const x=s.useCallback(async e=>{o&&e!==0&&(i(!0),await f({fromId:o[e].sheetId,toId:o[e-1].sheetId}),await a(),i(!1),l("변경 완료"))},[a,o]),b=s.useCallback(async e=>{o&&e!==o.length-1&&(i(!0),await f({fromId:o[e].sheetId,toId:o[e+1].sheetId}),await a(),i(!1),l("변경 완료"))},[a,o]),w=async(e,r)=>{window.confirm(`${r}을(를) 삭제하시겠습니까?`)&&(await j(e),await a(),l("삭제 완료"))},k=async()=>{try{i(!0),await I(),c("/login")}catch(e){console.error(e),window.alert("로그아웃 실패"+JSON.stringify(e))}finally{i(!1)}};return p(N,{children:[t(B,{title:"고영이 가계부"}),t(E,{children:y.Children.toArray(o==null?void 0:o.map((e,r)=>p(P,{children:[p(R,{children:[t(O,{onClick:()=>x(r)}),t(_,{onClick:()=>b(r)}),t(C,{to:`sheet/${e.sheetId}`,children:e.name})]}),t(J,{children:t(H,{onClick:()=>{w(e.sheetId,e.name)}})})]})))}),t(M,{onClick:m,children:t(z,{})}),t(U,{onClick:k,children:"로그아웃"}),t(G,{onClick:()=>c("/types"),children:"유형변경"}),t(T,{onClick:()=>c("/join"),children:"요약보기"}),t(S,{loading:u})]})}const N=n.div`
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
`,U=n(h)`
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
`,G=n(h)`
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
