import{s as i,c as $,j as o,u as v,r,a as f,R as y,L as C,b as I,d as S,M as B,C as l}from"./index-79cc4019.js";import{H as L}from"./Header-5e45af67.js";import{s as d,O as D}from"./open-color-f6ac77d1.js";import{d as A,a as j,b as O}from"./ArrowCircleDown-e9c68dbb.js";import{a as p,d as z}from"./util-7bed6688.js";function g({onClick:t,children:n,...h}){return o(_,{onClick:t,...h,children:o(H,{children:n})})}const _=i.button`
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
`,H=i.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 100%;
  font: inherit;
`;function V(){const t=v(),[n,h]=r.useState(),[u,a]=r.useState(!1),s=r.useCallback(()=>{a(!0),d.getSheets().then(e=>{h(e.data),a(!1)})},[]),x=r.useCallback(()=>{a(!0),d.postSheets().then(()=>{s(),a(!1),p("추가 완료")})},[s]);r.useEffect(()=>{s()},[s]);const m=r.useCallback(async e=>{n&&e!==0&&(a(!0),await d.patchOrder({fromId:n[e].sheetId,toId:n[e-1].sheetId}),await s(),a(!1),p("변경 완료"))},[s,n]),b=r.useCallback(async e=>{n&&e!==n.length-1&&(a(!0),await d.patchOrder({fromId:n[e].sheetId,toId:n[e+1].sheetId}),await s(),a(!1),p("변경 완료"))},[s,n]),w=async(e,c)=>{window.confirm(`${c}을(를) 삭제하시겠습니까?`)&&(await d.deleteSheet(e),await s(),p("삭제 완료"))},k=async()=>{try{a(!0),await S(),t("/login")}catch(e){console.error(e),window.alert("로그아웃 실패"+JSON.stringify(e))}finally{a(!1)}};return f(N,{children:[o(L,{title:"고영이 가계부"}),o(E,{children:y.Children.toArray(n==null?void 0:n.map((e,c)=>f(P,{children:[f(R,{children:[o(A,{onClick:()=>m(c)}),o(j,{onClick:()=>b(c)}),o(C,{to:`sheet/${e.sheetId}`,children:e.name})]}),o(G,{children:o(z,{onClick:()=>{w(e.sheetId,e.name)}})})]})))}),o(J,{onClick:x,children:o(O,{})}),o(M,{onClick:k,children:"로그아웃"}),o(T,{onClick:()=>t("/types"),children:"유형변경"}),o(U,{onClick:()=>t("/join"),children:"요약보기"}),o(I,{loading:u})]})}const N=i.div`
  ${B};
  height: calc(100% - 60px);
  overflow: auto;
`,E=i.div`
  text-align: left;
  margin: 0;
`,P=i.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  svg {
    color: ${l.green100};
  }
`,R=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,G=i.div`
  svg {
    color: red;
  }
`,J=i.button`
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
  background: ${l.green100};
  border: 2px solid ${l.green100};
  border-radius: 100%;
  opacity: 0.8;
  svg {
    color: white;
    width: 100%;
    height: 100%;
  }
`,M=i(g)`
  position: fixed;
  @media (min-width: 1000px) {
    position: absolute;
  }
  z-index: 1;
  bottom: 20px;
  left: 20px;
  height: 32px;

  background: ${D.red[4]};
  font: inherit;
`,T=i(g)`
  position: fixed;
  @media (min-width: 1000px) {
    position: absolute;
  }
  z-index: 1;
  bottom: 20px;
  left: 100px;
  height: 32px;

  background: ${l.green100};
  font: inherit;
`,U=i(g)`
  position: fixed;
  @media (min-width: 1000px) {
    position: absolute;
  }
  z-index: 1;
  bottom: 20px;
  left: 180px;
  height: 32px;

  background: ${l.green100};
  font: inherit;
`;export{V as default};
