import{a as r,s as t,f as i}from"./index-b887f616.js";function s({onClick:n,children:e,...o}){return r(a,{onClick:n,...o,children:r(d,{children:e})})}const a=t.button`
  border: 0px;
  background: #33f;
  color: #fff;
  height: 44px;
  font-size: 16px;
  border-radius: 8px;
  padding: 4px 8px;
  overflow: hidden;

  ${({buttonType:n})=>{if(n==="gray")return"background: #333";if(n==="kakao")return"background: #fee500; color: rgba(0,0,0,0.85); padding: 0; height: 45px;"}}

  ${({height:n})=>n&&`height: ${n}px;`}
  ${({fontSize:n})=>n&&`font-size: ${n}px;`}

  ${({styles:n})=>n&&i`
      ${n}
    `}
`,d=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 100%;
  font: inherit;
`;export{s as B};
