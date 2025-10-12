import{s as i,c as $,j as o,u as v,r as d,a as h,R as y,L as C,b as I,d as S,M as B,C as r}from"./index-8bd5c1ed.js";import{H as L}from"./Header-d1593294.js";import{g as D,p as j,a as g,d as A,O as z}from"./open-color-94df40a0.js";import{d as O,a as _,b as H}from"./ArrowCircleDown-b1cc6265.js";import{a as c,d as N}from"./util-4a8afabf.js";function f({onClick:t,children:n,...p}){return o(E,{onClick:t,...p,children:o(P,{children:n})})}const E=i.button`
  border: 0px;
  background: #33f;
  color: #fff;
  height: 44px;
  font-size: 16px;
  border-radius: 8px;
  padding: 4px 8px;
  overflow: hidden;

  ${({buttonType:t})=>{if(t==="gray")return"background: #333";if(t==="google")return"background: #4285f4; color: #fff; padding: 0; height: 45px;"}}

  ${({height:t})=>t&&`height: ${t}px;`}
  ${({fontSize:t})=>t&&`font-size: ${t}px;`}

  ${({styles:t})=>t&&$`
      ${t}
    `}
`,P=i.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 100%;
  font: inherit;
`;function Z(){const t=v(),[n,p]=d.useState(),[u,a]=d.useState(!1),s=d.useCallback(()=>{a(!0),D().then(e=>{p(e),a(!1)})},[]),x=d.useCallback(()=>{a(!0),j().then(()=>{s(),a(!1),c("추가 완료")})},[s]);d.useEffect(()=>{s()},[s]);const m=d.useCallback(async e=>{n&&e!==0&&(a(!0),await g({fromId:n[e].sheetId,toId:n[e-1].sheetId}),await s(),a(!1),c("변경 완료"))},[s,n]),b=d.useCallback(async e=>{n&&e!==n.length-1&&(a(!0),await g({fromId:n[e].sheetId,toId:n[e+1].sheetId}),await s(),a(!1),c("변경 완료"))},[s,n]),w=async(e,l)=>{window.confirm(`${l}을(를) 삭제하시겠습니까?`)&&(await A(e),await s(),c("삭제 완료"))},k=async()=>{try{a(!0),await S(),t("/login")}catch(e){console.error(e),window.alert("로그아웃 실패"+JSON.stringify(e))}finally{a(!1)}};return h(R,{children:[o(L,{title:"고영이 가계부"}),o(G,{children:y.Children.toArray(n==null?void 0:n.map((e,l)=>h(J,{children:[h(M,{children:[o(O,{onClick:()=>m(l)}),o(_,{onClick:()=>b(l)}),o(C,{to:`sheet/${e.sheetId}`,children:e.name})]}),o(T,{children:o(N,{onClick:()=>{w(e.sheetId,e.name)}})})]})))}),o(U,{onClick:x,children:o(H,{})}),o(W,{onClick:k,children:"로그아웃"}),o(q,{onClick:()=>t("/types"),children:"유형변경"}),o(F,{onClick:()=>t("/join"),children:"요약보기"}),o(I,{loading:u})]})}const R=i.div`
  ${B};
  height: calc(100% - 60px);
  overflow: auto;
`,G=i.div`
  text-align: left;
  margin: 0;
`,J=i.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  svg {
    color: ${r.green100};
  }
`,M=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,T=i.div`
  svg {
    color: red;
  }
`,U=i.button`
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
  background: ${r.green100};
  border: 2px solid ${r.green100};
  border-radius: 100%;
  opacity: 0.8;
  svg {
    color: white;
    width: 100%;
    height: 100%;
  }
`,W=i(f)`
  position: fixed;
  @media (min-width: 1000px) {
    position: absolute;
  }
  z-index: 1;
  bottom: 20px;
  left: 20px;
  height: 32px;

  background: ${z.red[4]};
  font: inherit;
`,q=i(f)`
  position: fixed;
  @media (min-width: 1000px) {
    position: absolute;
  }
  z-index: 1;
  bottom: 20px;
  left: 100px;
  height: 32px;

  background: ${r.green100};
  font: inherit;
`,F=i(f)`
  position: fixed;
  @media (min-width: 1000px) {
    position: absolute;
  }
  z-index: 1;
  bottom: 20px;
  left: 180px;
  height: 32px;

  background: ${r.green100};
  font: inherit;
`;export{Z as default};
