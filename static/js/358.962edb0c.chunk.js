"use strict";(self.webpackChunkaccount_book=self.webpackChunkaccount_book||[]).push([[358],{9884:function(n,t,e){var r;e.d(t,{a:function(){return r}}),function(n){n.getSheet="getSheet",n.getType="getType"}(r||(r={}))},5033:function(n,t,e){e.d(t,{WH:function(){return d},eI:function(){return h},s0:function(){return p},v4:function(){return l},w1:function(){return f},zf:function(){return s}});var r=e(8214),i=e(5861),o=e(4569),u=e.n(o),a=e(618),c=u().create({baseURL:a.YZ+"/accountBook/sheet",withCredentials:!0}),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.post("/");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t,e){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.patch("/".concat(t),e);case 2:return i=n.sent,n.abrupt("return",i.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),h=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.patch("/".concat(t.fromId,"/").concat(t.toId),t);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.delete("/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},1366:function(n,t,e){e.d(t,{U:function(){return s},o:function(){return d}});var r=e(8214),i=e(5861),o=e(4569),u=e.n(o),a=e(618),c=u().create({baseURL:a.YZ+"/accountBook/type",withCredentials:!0}),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.patch("/",{types:t});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},6095:function(n,t,e){e.d(t,{Z:function(){return f}});var r,i,o,u=e(168),a=e(4193),c=e(6871),d=e(260),s=e(1833),l=e(184);function f(n){var t=n.title,e=n.backButton,r=n.backFunction,i=(0,c.s0)();return(0,l.jsxs)(h,{children:[e&&(0,l.jsx)(p,{fontSize:"inherit",onClick:function(){return r?r():i(-1)}}),t&&"undefined"!==t&&(0,l.jsx)(v,{children:t})]})}var h=a.Z.div(r||(r=(0,u.Z)(["\n  position: fixed;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  height: 38.5px;\n  max-width: 1000px;\n\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 20px;\n  padding: 10px 20px 10px;\n  border-bottom: 1px solid ",";\n  background: white;\n  @media (min-width: 1000px) {\n    border: 1px solid ",";\n    border-top: 0;\n  }\n"])),s.w.greenLine,s.w.greenLine),p=(0,a.Z)(d.Z)(i||(i=(0,u.Z)(["\n  &::active {\n    background: #eee;\n  }\n"]))),v=a.Z.span(o||(o=(0,u.Z)(["\n  font-weight: 700;\n"])))},4825:function(n,t,e){e.d(t,{Z:function(){return b}});var r,i,o,u,a,c,d,s=e(168),l=e(4193),f=e(2791),h=e(7408),p=e(9884),v=e(1366),x=e(3421),g=e(184);function b(n){var t,e=n.sheetData,r=(n.setSheetData,(0,f.useRef)(0)),i=(0,f.useRef)(0),o=(0,h.useQuery)([p.a.getType],v.o,t).data,u=(0,f.useMemo)((function(){if(o){var n,t=null===o||void 0===o?void 0:o.types.map((function(n){return{type:n.type,amount:0}}));return r.current=0,i.current=0,null===e||void 0===e||null===(n=e.table)||void 0===n||n.forEach((function(n,e){var o,u,a;i.current+=(0,x.ZQ)(n[3]),(null!==(o=n[0])&&void 0!==o&&o.includes("\uc6d4\uae09")||null!==(u=n[0])&&void 0!==u&&u.includes("\uc218\uc785"))&&(r.current+=(0,x.ZQ)(n[3])),""!==(null===(a=n[0])||void 0===a?void 0:a.trim())&&t.forEach((function(t){t.type.includes(n[0])&&(t.amount+=(0,x.ZQ)(n[3]))}))})),t}return[]}),[null===e||void 0===e?void 0:e.table,o]);return(0,g.jsx)(m,{children:u.length>0?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Z,{children:"\uc694\uc57d"}),(0,g.jsx)(y,{children:f.Children.toArray(u.map((function(n,t){var e,o,a;return(0,g.jsx)(g.Fragment,{children:0!==(null===(e=u[t])||void 0===e?void 0:e.amount)&&(0,g.jsxs)(w,{children:[(0,g.jsx)(k,{children:0!==t&&"".concat(t,".").concat(n.type)}),(0,g.jsxs)(j,{children:["".concat((0,x.Gn)(null===(o=u[t])||void 0===o?void 0:o.amount)," \uc6d0"),(0,g.jsx)(C,{children:"".concat(Math.abs((0,x._r)(100*(0,x.ZQ)(null===(a=u[t])||void 0===a?void 0:a.amount)/(0!==r.current?r.current:i.current),2)),"%")})]})]})})})))})]}):null})}var m=l.Z.div(r||(r=(0,s.Z)(["\n  padding: 20px 0;\n"]))),Z=l.Z.div(i||(i=(0,s.Z)(["\n  font-weight: bold;\n"]))),y=l.Z.div(o||(o=(0,s.Z)(["\n  padding-top: 10px;\n  & > div:nth-of-type(2n-1) {\n    background: #cec;\n  }\n"]))),w=l.Z.div(u||(u=(0,s.Z)(["\n  padding: 2px 4px;\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),k=l.Z.div(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-shrink: 0;\n  justify-content: space-between;\n  width: 80px;\n  padding-right: 10px;\n  border-right: 1px solid #222;\n"]))),j=l.Z.div(c||(c=(0,s.Z)(["\n  display: flex;\n  padding-left: 10px;\n  text-align: right;\n  overflow-wrap: anywhere;\n"]))),C=l.Z.div(d||(d=(0,s.Z)(["\n  width: 60px;\n  margin-left: 4px;\n  border-left: 1px solid #222;\n"])))},5101:function(n,t,e){e.d(t,{Z:function(){return w}});var r,i,o,u,a,c,d=e(168),s=e(885),l=e(2791),f=e(1833),h=e(8141),p=e(1098),v=e(2546),x=e(4193),g=e(8197),b=e(3421),m=e(1366),Z=e(9495),y=e(184);function w(n){var t,e=n.sheetData,r=n.setSheetData,i=n.addRow,o=n.removeRow,u=n.changeRef,a=n.readOnly,c=void 0!==a&&a,d=BigInt(0),f=(0,l.useState)([]),h=(0,s.Z)(f,2),p=h[0],x=h[1],g=(0,l.useState)(!0),Z=(0,s.Z)(g,2),w=Z[0],L=Z[1];(0,l.useEffect)((function(){(0,m.o)().then((function(n){x(n.types)}))}),[]);var R=(0,l.useCallback)((function(){if(w){var n=document.querySelectorAll("input.autoWidth");n&&n.forEach((function(n){(0,b.Jq)(n)}));var t=document.querySelectorAll("select.autoWidth");t&&t.forEach((function(n){(0,b.Jq)(n,!0)})),L(!1)}}),[w]);(0,l.useEffect)((function(){w&&e&&(null===p||void 0===p?void 0:p.length)>0&&R()}),[w,R,e,p]);var q=function(n,t,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(u&&(u.current=!0),n.target){(0,b.Jq)(n.target,o);var a=(0,v.ZP)((function(e){if(e&&e.table&&e.table[t])return e.table[t][i]=n.target.value,e}),e);r(a)}},I=function(n){var t="";return p.forEach((function(e){var r=e.type,i=e.background;n&&r&&n.includes(r)&&(t=null!==i&&void 0!==i&&i.startsWith("#")?i:"#".concat(i))})),t};return(0,y.jsx)(k,{children:(0,y.jsx)("table",{children:(0,y.jsxs)("tbody",{children:[(0,y.jsxs)("tr",{children:[c?(0,y.jsx)("th",{}):(0,y.jsx)("th",{onClick:function(){return i&&i(0)},children:(0,y.jsx)(j,{fontSize:"small"})}),(0,y.jsx)("th",{children:"\ubc88\ud638"}),(0,y.jsx)("th",{children:"\uc720\ud615"}),(0,y.jsx)("th",{children:"\ub0a0\uc9dc"}),(0,y.jsx)("th",{children:"\uc81c\ubaa9"}),(0,y.jsx)("th",{children:"\uac00\uaca9"}),(0,y.jsx)("th",{children:"\ud569\uacc4"}),(0,y.jsx)("th",{})]}),l.Children.toArray(null===e||void 0===e||null===(t=e.table)||void 0===t?void 0:t.map((function(n,t){return(0,y.jsxs)("tr",{id:"row_".concat(t+1),children:[c?(0,y.jsx)("td",{}):(0,y.jsx)("td",{onClick:function(){i&&i(t+1)},children:(0,y.jsx)(j,{fontSize:"small"})}),(0,y.jsx)("td",{children:t+1}),l.Children.toArray(n.map((function(n,e){return 0===e?(0,y.jsx)("td",{children:c?(0,y.jsx)(T,{value:n,background:I(n),height:"20px",children:n}):(0,y.jsx)(z,{className:"autoWidth",value:n,background:I(n),onChange:function(n){return q(n,t,e,!0)},height:"27px",children:l.Children.toArray(p.map((function(n,t){var e=n.type;return(0,y.jsx)("option",{value:e,children:0===t?"":"".concat(t,".").concat(e)})})))})}):(3===e&&(d+=(0,b.jp)(n)),(0,y.jsx)("td",{children:c?3===e&&(0,b.C4)(n)&&""!==n?(0,b.Gn)(n):n.toString():(0,y.jsx)(S,{className:"autoWidth",numCheck:3===e,value:3===e&&(0,b.C4)(n)&&""!==n?(0,b.Gn)(n):n.toString(),height:"28px",onChange:function(n){return q(n,t,e)}})}))}))),(0,y.jsx)("td",{children:(0,b.Gn)(d)}),c?(0,y.jsx)("td",{}):(0,y.jsx)("td",{onClick:function(){return o&&o(t+1)},children:(0,y.jsx)(C,{fontSize:"small"})})]})})))]})})})}var k=x.Z.div(r||(r=(0,d.Z)(["\n  min-width: 100%;\n  max-width: 200%;\n  overflow: auto;\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    border: 1px solid ",";\n  }\n  th {\n    background: ",";\n  }\n  th,\n  td {\n    border: 1px solid ",";\n    white-space: pre;\n    text-align: left;\n    padding: 2px;\n    min-width: 10px;\n  }\n  .blink {\n    @keyframes blink {\n      0% {\n        background: ",";\n      }\n      100% {\n        background: white;\n      }\n    }\n    animation: blink ","ms;\n  }\n  .blinkRed {\n    @keyframes blinkRed {\n      0% {\n        background: red;\n      }\n      100% {\n        background: white;\n      }\n    }\n    animation: blinkRed ","ms;\n  }\n  th:nth-of-type(5),\n  th:nth-of-type(6),\n  th:nth-of-type(7) {\n    min-width: 60px;\n  }\n  td:nth-of-type(6),\n  td:nth-of-type(7),\n  td:nth-of-type(6) input,\n  td:nth-of-type(7) input {\n    text-align: right;\n  }\n  td:nth-of-type(3),\n  td:nth-of-type(4),\n  td:nth-of-type(5),\n  td:nth-of-type(6) {\n    padding: 0;\n  }\n  td:nth-of-type(4) input {\n    max-width: 30px;\n  }\n"])),f.w.greenLine,f.w.greenLine,f.w.greenLine,f.w.greenLine,g.w,g.w),j=(0,x.Z)(h.Z)(i||(i=(0,d.Z)(["\n  color: #7c7;\n"]))),C=(0,x.Z)(p.Z)(o||(o=(0,d.Z)(["\n  color: red;\n"]))),S=x.Z.input(u||(u=(0,d.Z)(["\n  width: 100%;\n  min-width: 100%;\n  height: ",";\n  padding: 0 2px;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background: none;\n  font: inherit;\n  &:focus,\n  &:hover,\n  &:active {\n    background: ",";\n  }\n  ","\n"])),(function(n){var t=n.height;return t?"".concat(t):"100%"}),Z.ek[0],(function(n){var t=n.numCheck,e=n.value;return t&&!(0,b.C4)(e)?"background: #fcc;":""})),z=x.Z.select(a||(a=(0,d.Z)(["\n  width: 100%;\n  min-width: 100%;\n  height: ",";\n  padding: 0 2px;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background: transparent;\n  color: #222;\n  font: inherit;\n  background: ",";\n"])),(function(n){var t=n.height;return t?"".concat(t):"100%"}),(function(n){return n.background})),T=x.Z.div(c||(c=(0,d.Z)(["\n  height: ",";\n  background: ",";\n"])),(function(n){var t=n.height;return t?"".concat(t):"100%"}),(function(n){return n.background}))},8197:function(n,t,e){e.d(t,{w:function(){return r}});var r=300},3421:function(n,t,e){e.d(t,{C4:function(){return c},Gn:function(){return a},Jq:function(){return d},Oi:function(){return s},ZQ:function(){return r},_r:function(){return i},jp:function(){return u}});var r=function(n){var t=o(n);return Number.isNaN(Number(t))?0:Number(t)},i=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=r(n);return Math.round(e*Math.pow(10,t))/Math.pow(10,t)},o=function(n){return n?String(n).replace(/,/g,""):""},u=function(n){var t=o(n);return c(t)?BigInt(t):BigInt(0)},a=function(n){return BigInt(o(n)).toLocaleString()},c=function(n){try{return"number"!==typeof n&&(BigInt(o(n)),!0)}catch(t){return!1}},d=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n){var e=document.querySelector(".fakeInput");if(t&&(e=document.querySelector(".fakeSelect")),e){var r=e.querySelector("option");r&&(r.innerHTML=n.value),e.value=n.value,e.style.fontSize=getComputedStyle(n).fontSize,e.style.fontWeight=getComputedStyle(n).fontWeight;var i=e.scrollWidth+(t?15:10);n.style.width=i+"px",e.value="",r&&(r.innerHTML="")}}},s=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,r=document.createElement("div"),i="\n    position: fixed;\n    z-index: 999;\n    bottom: -40px;\n    left: 50%;\n    transform: translate(-50%);\n    opacity: 0;\n    background: #777;\n    color: white;\n    padding: 5px 10px;\n    border-radius: 8px;\n    font-size: 14px;\n    transition: bottom ".concat(e,"ms, opacity ").concat(e,"ms;\n  ");r.style.cssText=i,r.innerText=n,document.body.appendChild(r),setTimeout((function(){r.style.cssText=i+"\n    bottom: 20px;\n    opacity: 0.9;\n    "}),100),setTimeout((function(){r.style.cssText=i}),t),setTimeout((function(){r&&r.remove()}),t+e)}},8141:function(n,t,e){var r=e(4836);t.Z=void 0;var i=r(e(5649)),o=e(184),u=(0,i.default)((0,o.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");t.Z=u},9495:function(n){n.exports=JSON.parse('{"Q6":{"4":"#ff8787"},"ek":["#ebfbee"]}')}}]);
//# sourceMappingURL=358.962edb0c.chunk.js.map