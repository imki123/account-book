import{d as p,i as l,e as u,u as c,j as f,a as i,n as r,C as n}from"./index-213b1002.js";var a={},x=l;Object.defineProperty(a,"__esModule",{value:!0});var o=a.default=void 0,v=x(p()),g=u,h=(0,v.default)((0,g.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew");o=a.default=h;function b({title:e,backButton:s,backFunction:t}){const d=c();return f(w,{children:[s&&i(m,{fontSize:"inherit",onClick:()=>t?t():d(-1)}),e&&e!=="undefined"&&i(j,{children:e})]})}const w=r.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 38.5px;
  max-width: 1000px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 10px 20px 10px;
  border-bottom: 1px solid ${n.greenLine};
  background: white;
  @media (min-width: 1000px) {
    border: 1px solid ${n.greenLine};
    border-top: 0;
  }
`,m=r(o)`
  &::active {
    background: #eee;
  }
`,j=r.span`
  font-weight: 700;
`;export{b as H};
