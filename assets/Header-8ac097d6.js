import{h as p,i as l,l as u,u as c,j as x,a as i,s as r,C as o}from"./index-b887f616.js";var a={},f=l;Object.defineProperty(a,"__esModule",{value:!0});var n=a.default=void 0,g=f(p()),v=u;n=a.default=(0,g.default)((0,v.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew");function b({title:e,backButton:s,backFunction:t}){const d=c();return x(h,{children:[s&&i(m,{fontSize:"inherit",onClick:()=>t?t():d(-1)}),e&&e!=="undefined"&&i(w,{children:e})]})}const h=r.div`
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
  border-bottom: 1px solid ${o.greenLine};
  background: white;
  @media (min-width: 1000px) {
    border: 1px solid ${o.greenLine};
    border-top: 0;
  }
`,m=r(n)`
  &::active {
    background: #eee;
  }
`,w=r.span`
  font-weight: 700;
`;export{b as H};
