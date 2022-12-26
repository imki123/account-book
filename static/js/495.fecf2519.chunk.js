"use strict";(self.webpackChunkaccount_book=self.webpackChunkaccount_book||[]).push([[495],{9884:function(n,t,e){var r;e.d(t,{a:function(){return r}}),function(n){n.getSheet="getSheet",n.getType="getType"}(r||(r={}))},5033:function(n,t,e){e.d(t,{WH:function(){return d},eI:function(){return f},s0:function(){return p},v4:function(){return l},w1:function(){return h},zf:function(){return s}});var r=e(8214),i=e(5861),o=e(4569),a=e.n(o),u=e(618),c=a().create({baseURL:u.YZ+"/accountBook/sheet",withCredentials:!0}),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.post("/");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t,e){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.patch("/".concat(t),e);case 2:return i=n.sent,n.abrupt("return",i.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.patch("/".concat(t.fromId,"/").concat(t.toId),t);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.delete("/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4825:function(n,t,e){e.d(t,{Z:function(){return b}});var r,i,o,a,u,c,d,s=e(168),l=e(208),h=e(2791),f=e(7408),p=e(9884),v=e(1366),x=e(3421),g=e(184);function b(n){var t,e=n.sheetData,r=(n.setSheetData,(0,h.useRef)(0)),i=(0,h.useRef)(0),o=(0,f.useQuery)([p.a.getType],v.o,t).data,a=(0,h.useMemo)((function(){if(o){var n,t=null===o||void 0===o?void 0:o.types.map((function(n){return{type:n.type,amount:0}}));return r.current=0,i.current=0,null===e||void 0===e||null===(n=e.table)||void 0===n||n.forEach((function(n,e){var o,a,u;i.current+=(0,x.ZQ)(n[3]),(null!==(o=n[0])&&void 0!==o&&o.includes("\uc6d4\uae09")||null!==(a=n[0])&&void 0!==a&&a.includes("\uc218\uc785"))&&(r.current+=(0,x.ZQ)(n[3])),""!==(null===(u=n[0])||void 0===u?void 0:u.trim())&&t.forEach((function(t){t.type.includes(n[0])&&(t.amount+=(0,x.ZQ)(n[3]))}))})),t}return[]}),[null===e||void 0===e?void 0:e.table,o]);return(0,g.jsx)(Z,{children:a.length>0?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m,{children:"\uc694\uc57d"}),(0,g.jsx)(k,{children:h.Children.toArray(a.map((function(n,t){var e,o,u;return(0,g.jsx)(g.Fragment,{children:0!==(null===(e=a[t])||void 0===e?void 0:e.amount)&&(0,g.jsxs)(w,{children:[(0,g.jsx)(j,{children:0!==t&&"".concat(t,".").concat(n.type)}),(0,g.jsxs)(y,{children:["".concat((0,x.Gn)(null===(o=a[t])||void 0===o?void 0:o.amount)," \uc6d0"),(0,g.jsx)(C,{children:"".concat(Math.abs((0,x._r)(100*(0,x.ZQ)(null===(u=a[t])||void 0===u?void 0:u.amount)/(0!==r.current?r.current:i.current),2)),"%")})]})]})})})))})]}):null})}var Z=l.Z.div(r||(r=(0,s.Z)(["\n  padding: 20px 0;\n"]))),m=l.Z.div(i||(i=(0,s.Z)(["\n  font-weight: bold;\n"]))),k=l.Z.div(o||(o=(0,s.Z)(["\n  padding-top: 10px;\n  & > div:nth-of-type(2n) {\n    background: #cec;\n  }\n"]))),w=l.Z.div(a||(a=(0,s.Z)(["\n  padding: 2px 4px;\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),j=l.Z.div(u||(u=(0,s.Z)(["\n  display: flex;\n  flex-shrink: 0;\n  justify-content: space-between;\n  width: 80px;\n  padding-right: 10px;\n  border-right: 1px solid #222;\n"]))),y=l.Z.div(c||(c=(0,s.Z)(["\n  display: flex;\n  padding-left: 10px;\n  text-align: right;\n  overflow-wrap: anywhere;\n"]))),C=l.Z.div(d||(d=(0,s.Z)(["\n  width: 60px;\n  margin-left: 4px;\n  border-left: 1px solid #222;\n"])))},5101:function(n,t,e){e.d(t,{Z:function(){return w}});var r,i,o,a,u,c,d=e(168),s=e(885),l=e(2791),h=e(1833),f=e(8141),p=e(1098),v=e(2546),x=e(208),g=e(8197),b=e(3421),Z=e(1366),m=e(9495),k=e(184);function w(n){var t,e=n.sheetData,r=n.setSheetData,i=n.addRow,o=n.removeRow,a=n.changeRef,u=n.readOnly,c=void 0!==u&&u,d=BigInt(0),h=(0,l.useState)([]),f=(0,s.Z)(h,2),p=f[0],x=f[1],g=(0,l.useState)(!0),m=(0,s.Z)(g,2),w=m[0],L=m[1];(0,l.useEffect)((function(){(0,Z.o)().then((function(n){x(n.types)}))}),[]);var I=(0,l.useCallback)((function(){if(w){var n=document.querySelectorAll("input.autoWidth");n&&n.forEach((function(n){(0,b.Jq)(n)}));var t=document.querySelectorAll("select.autoWidth");t&&t.forEach((function(n){(0,b.Jq)(n,!0)})),L(!1)}}),[w]);(0,l.useEffect)((function(){w&&e&&(null===p||void 0===p?void 0:p.length)>0&&I()}),[w,I,e,p]);var z=function(n,t,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(a&&(a.current=!0),n.target){(0,b.Jq)(n.target,o);var u=(0,v.ZP)((function(e){if(e&&e.table&&e.table[t])return e.table[t][i]=n.target.value,e}),e);r(u)}},q=function(n){var t="";return p.forEach((function(e){var r=e.type,i=e.background;n&&r&&n.includes(r)&&(t=null!==i&&void 0!==i&&i.startsWith("#")?i:"#".concat(i))})),t};return(0,k.jsx)(j,{children:(0,k.jsx)("table",{children:(0,k.jsxs)("tbody",{children:[(0,k.jsxs)("tr",{children:[c?(0,k.jsx)("th",{}):(0,k.jsx)("th",{onClick:function(){return i&&i(0)},children:(0,k.jsx)(y,{fontSize:"small"})}),(0,k.jsx)("th",{children:"\ubc88\ud638"}),(0,k.jsx)("th",{children:"\uc720\ud615"}),(0,k.jsx)("th",{children:"\ub0a0\uc9dc"}),(0,k.jsx)("th",{children:"\uc81c\ubaa9"}),(0,k.jsx)("th",{children:"\uac00\uaca9"}),(0,k.jsx)("th",{children:"\ud569\uacc4"}),(0,k.jsx)("th",{})]}),l.Children.toArray(null===e||void 0===e||null===(t=e.table)||void 0===t?void 0:t.map((function(n,t){return(0,k.jsxs)("tr",{id:"row_".concat(t+1),children:[c?(0,k.jsx)("td",{}):(0,k.jsx)("td",{onClick:function(){i&&i(t+1)},children:(0,k.jsx)(y,{fontSize:"small"})}),(0,k.jsx)("td",{children:t+1}),l.Children.toArray(n.map((function(n,e){return 0===e?(0,k.jsx)("td",{children:c?(0,k.jsx)(E,{value:n,background:q(n),height:"20px",children:n}):(0,k.jsx)(R,{className:"autoWidth",value:n,background:q(n),onChange:function(n){return z(n,t,e,!0)},height:"27px",children:l.Children.toArray(p.map((function(n,t){var e=n.type;return(0,k.jsx)("option",{value:e,children:0===t?"":"".concat(t,".").concat(e)})})))})}):(3===e&&(d+=(0,b.jp)(n)),(0,k.jsx)("td",{children:c?3===e&&(0,b.C4)(n)&&""!==n?(0,b.Gn)(n):n.toString():(0,k.jsx)(S,{className:"autoWidth",numCheck:3===e,value:3===e&&(0,b.C4)(n)&&""!==n?(0,b.Gn)(n):n.toString(),height:"28px",onChange:function(n){return z(n,t,e)}})}))}))),(0,k.jsx)("td",{children:(0,b.Gn)(d)}),c?(0,k.jsx)("td",{}):(0,k.jsx)("td",{onClick:function(){return o&&o(t+1)},children:(0,k.jsx)(C,{fontSize:"small"})})]})})))]})})})}var j=x.Z.div(r||(r=(0,d.Z)(["\n  min-width: 100%;\n  max-width: 200%;\n  overflow: auto;\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    border: 1px solid ",";\n  }\n  th {\n    background: ",";\n  }\n  th,\n  td {\n    border: 1px solid ",";\n    white-space: pre;\n    text-align: left;\n    padding: 2px;\n    min-width: 10px;\n  }\n  .blink {\n    @keyframes blink {\n      0% {\n        background: ",";\n      }\n      100% {\n        background: white;\n      }\n    }\n    animation: blink ","ms;\n  }\n  .blinkRed {\n    @keyframes blinkRed {\n      0% {\n        background: red;\n      }\n      100% {\n        background: white;\n      }\n    }\n    animation: blinkRed ","ms;\n  }\n  th:nth-of-type(5),\n  th:nth-of-type(6),\n  th:nth-of-type(7) {\n    min-width: 60px;\n  }\n  td:nth-of-type(6),\n  td:nth-of-type(7),\n  td:nth-of-type(6) input,\n  td:nth-of-type(7) input {\n    text-align: right;\n  }\n  td:nth-of-type(3),\n  td:nth-of-type(4),\n  td:nth-of-type(5),\n  td:nth-of-type(6) {\n    padding: 0;\n  }\n  td:nth-of-type(4) input {\n    max-width: 30px;\n  }\n"])),h.w.greenLine,h.w.greenLine,h.w.greenLine,h.w.greenLine,g.w,g.w),y=(0,x.Z)(f.Z)(i||(i=(0,d.Z)(["\n  color: #7c7;\n"]))),C=(0,x.Z)(p.Z)(o||(o=(0,d.Z)(["\n  color: red;\n"]))),S=x.Z.input(a||(a=(0,d.Z)(["\n  width: 100%;\n  min-width: 100%;\n  height: ",";\n  padding: 0 2px;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background: none;\n  font: inherit;\n  &:focus,\n  &:hover,\n  &:active {\n    background: ",";\n  }\n  ","\n"])),(function(n){var t=n.height;return t?"".concat(t):"100%"}),m.ek[0],(function(n){var t=n.numCheck,e=n.value;return t&&!(0,b.C4)(e)?"background: #fcc;":""})),R=x.Z.select(u||(u=(0,d.Z)(["\n  width: 100%;\n  min-width: 100%;\n  height: ",";\n  padding: 0 2px;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background: transparent;\n  color: #222;\n  font: inherit;\n  background: ",";\n"])),(function(n){var t=n.height;return t?"".concat(t):"100%"}),(function(n){return n.background})),E=x.Z.div(c||(c=(0,d.Z)(["\n  height: ",";\n  background: ",";\n"])),(function(n){var t=n.height;return t?"".concat(t):"100%"}),(function(n){return n.background}))},8197:function(n,t,e){e.d(t,{w:function(){return r}});var r=300},5495:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,i=e(168),o=e(885),a=e(208),u=e(2791),c=e(6871),d=e(6095),s=e(2546),l=e(5033),h=e(3950),f=e(184);function p(n){var t=n.onClick,e=n.refreshing;return(0,f.jsx)(x,{onClick:t,disabled:e,children:(0,f.jsx)(h.Z,{})})}var v,x=a.Z.button(r||(r=(0,i.Z)(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  @media (min-width: 1000px) {\n    right: calc(50% - (1000px / 2) + 20px);\n  }\n\n  padding: 5px;\n  width: 40px;\n  height: 40px;\n\n  overflow: hidden;\n  background: white;\n  border: 2px solid #eee;\n  border-radius: 100%;\n\n  ","\n  @keyframes rotation {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  svg {\n    color: #aaa;\n    width: 100%;\n    height: 100%;\n  }\n"])),(function(n){return n.disabled&&"animation: 500ms rotation infinite linear;"})),g=e(5101),b=e(8197),Z=e(1833),m=e(3421),k=e(4787),w=e(4825);function j(){var n=(0,c.UO)(),t=(0,c.s0)(),e=(0,u.useState)(),r=(0,o.Z)(e,2),i=r[0],a=r[1],h=(0,u.useState)(!1),v=(0,o.Z)(h,2),x=v[0],Z=v[1],j=(0,u.useState)(),C=(0,o.Z)(j,2),S=C[0],R=C[1],E=(0,u.useState)(),L=(0,o.Z)(E,2),I=L[0],z=L[1],q=(0,u.useRef)(null),D=(0,u.useRef)(!1),A=(0,u.useCallback)((function(){n.sheetId&&(Z(!0),(0,l.zf)(Number(n.sheetId)).then((function(n){Z(!1),n&&a(n)})))}),[n.sheetId]),T=(0,u.useCallback)((function(n){if(D.current=!0,i){var t=(0,s.ZP)((function(t){if(t)return(0,m.Jq)(n.target),t.name=n.target.value,t}),i);a(t)}}),[i]);(0,u.useEffect)((function(){A()}),[A]),(0,u.useEffect)((function(){if(void 0!==S){var n=document.querySelector("#row_".concat(S+1));n&&(n.classList.add("blink"),R(void 0),setTimeout((function(){n.classList.remove("blink")}),b.w))}}),[S]),(0,u.useEffect)((function(){if(i&&void 0!==I){var n=document.querySelector("#row_".concat(I));n&&(n.classList.add("blinkRed"),setTimeout((function(){n.classList.remove("blinkRed");var t=(0,s.ZP)(i,(function(n){var t;null===n||void 0===n||null===(t=n.table)||void 0===t||t.splice(I-1,1)}));a(t),z(void 0)}),b.w))}}),[I,i]);var O=(0,u.useCallback)((function(n){D.current=!0;var t=(0,s.ZP)(i,(function(t){var e;null===t||void 0===t||null===(e=t.table)||void 0===e||e.splice(n,0,["","","",""])}));a(t),R(n)}),[i]),Q=(0,u.useCallback)((function(n){D.current=!0,z(n)}),[]),W=(0,u.useCallback)((function(){n.sheetId&&i&&(0,l.w1)(Number(n.sheetId),i).then((function(n){(0,m.Oi)("\uc790\ub3d9 \uc800\uc7a5")}))}),[n.sheetId,i]);return(0,u.useEffect)((function(){!0===D.current&&(null!==q.current&&clearTimeout(q.current),q.current=setTimeout((function(){q.current=null,W()}),2e3))}),[W,i]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.Z,{title:void 0!==(null===i||void 0===i?void 0:i.name)?(0,f.jsx)(y,{value:null===i||void 0===i?void 0:i.name,onChange:T}):null,backButton:!0,backFunction:function(){return t("/",{replace:!0})}}),(0,f.jsx)(g.Z,{sheetData:i,setSheetData:a,addRow:O,removeRow:Q,changeRef:D}),(0,f.jsx)(w.Z,{sheetData:i,setSheetData:a}),(0,f.jsx)(p,{refreshing:x,onClick:function(){A(),D.current=!1,(0,m.Oi)("\uc0c8\ub85c\uace0\uce68 \uc644\ub8cc")}}),(0,f.jsx)(k.Z,{loading:x})]})}var y=a.Z.input(v||(v=(0,i.Z)(["\n  width: 100%;\n  min-width: 50px;\n  height: 24px;\n  border: 0;\n  padding: 0 2px;\n  outline: none;\n  background: none;\n  font: inherit;\n  &:focus,\n  &:hover,\n  &:active {\n    border-bottom: 1px solid ",";\n  }\n"])),Z.w.greenLine)},8141:function(n,t,e){var r=e(4836);t.Z=void 0;var i=r(e(5649)),o=e(184),a=(0,i.default)((0,o.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");t.Z=a},3950:function(n,t,e){var r=e(4836);t.Z=void 0;var i=r(e(5649)),o=e(184),a=(0,i.default)((0,o.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");t.Z=a},9495:function(n){n.exports=JSON.parse('{"Q6":{"4":"#ff8787"},"ek":["#ebfbee"]}')}}]);
//# sourceMappingURL=495.fecf2519.chunk.js.map