"use strict";(self.webpackChunkaccount_book=self.webpackChunkaccount_book||[]).push([[432],{5033:function(n,t,e){e.d(t,{WH:function(){return c},eI:function(){return l},v4:function(){return s},w1:function(){return d},zf:function(){return u}});var r=e(8214),i=e(5861),o=e(4569),a=e.n(o)().create({baseURL:"https://blog-imki123-backend.herokuapp.com/accountBook/sheet/",withCredentials:!0}),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.post("");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t,e){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.patch("".concat(t),e);case 2:return i=n.sent,n.abrupt("return",i.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.patch("".concat(t.fromId,"/").concat(t.toId),t);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},6095:function(n,t,e){e.d(t,{Z:function(){return f}});var r,i,o,a=e(168),c=e(208),u=e(6871),s=e(260),d=e(1833),l=e(184);function f(n){var t=n.title,e=n.backButton,r=n.backFunction,i=(0,u.s0)();return(0,l.jsxs)(h,{children:[e&&(0,l.jsx)(p,{fontSize:"inherit",onClick:function(){return r?r():i(-1)}}),t&&"undefined"!==t&&(0,l.jsx)(x,{children:t})]})}var h=c.Z.div(r||(r=(0,a.Z)(["\n  position: fixed;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  height: 38.5px;\n  max-width: 500px;\n\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 20px;\n  padding: 10px 20px 10px;\n  border-bottom: 1px solid ",";\n  background: white;\n  @media (min-width: 500px) {\n    border: 1px solid ",";\n    border-top: 0;\n  }\n"])),d.w.greenLine,d.w.greenLine),p=(0,c.Z)(s.Z)(i||(i=(0,a.Z)(["\n  &::active {\n    background: #eee;\n  }\n"]))),x=c.Z.span(o||(o=(0,a.Z)(["\n  font-weight: 700;\n"])))},4787:function(n,t,e){e.d(t,{Z:function(){return u}});var r,i=e(168),o=e(208),a=e(4289),c=e(184);function u(n){return n.loading?(0,c.jsx)(s,{children:(0,c.jsx)(a.Z,{})}):null}var s=o.Z.div(r||(r=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background: rgba(0, 0, 0, 0.3);\n\n  @keyframes rotation {\n    "," {\n      transform: rotate(0deg);\n    }\n    "," {\n      transform: rotate(180deg);\n    }\n    "," {\n      transform: rotate(180deg);\n    }\n    "," {\n      transform: rotate(180deg);\n    }\n    "," {\n      transform: rotate(360deg);\n    }\n    "," {\n      transform: rotate(360deg);\n    }\n    "," {\n      transform: rotate(360deg);\n    }\n  }\n  svg {\n    width: 30px;\n    height: 30px;\n    color: white;\n    animation: 1.5s linear rotation infinite;\n  }\n"])),"".concat(0,"%"),"".concat(100/6*1,"%"),"".concat(100/6*2,"%"),"".concat(50,"%"),"".concat(100/6*4,"%"),"".concat(100/6*5,"%"),"".concat(100,"%"))},5879:function(n,t,e){e.d(t,{Z:function(){return s}});var r,i=e(168),o=e(885),a=e(208),c=e(2791),u=e(184);function s(n){var t=n.message,e=n.duration,r=void 0===e?3e3:e,i=(0,c.useState)(!1),a=(0,o.Z)(i,2),s=a[0],l=a[1],f=(0,c.useRef)();(0,c.useEffect)((function(){s&&setTimeout((function(){f.current&&f.current.classList.remove("open"),l(!1)}),r)}),[s,r]);return{SnackBar:(0,c.useCallback)((function(){return(0,u.jsx)(d,{ref:f,children:t})}),[t]),openSnackBar:function(){var n=(new Date).getTime()%1e5;f.current&&(f.current.style.zIndex=n),s||(f.current&&f.current.classList.add("open"),l(!0))}}}var d=a.Z.div(r||(r=(0,i.Z)(["\n  position: fixed;\n  bottom: -40px;\n  left: 50%;\n  transform: translate(-50%);\n  opacity: 0;\n  background: #777;\n  color: white;\n  padding: 5px 10px;\n  border-radius: 8px;\n  transition: bottom ","ms, opacity ","ms;\n  &.open {\n    bottom: 20px;\n    opacity: 1;\n  }\n"])),500,500)},3432:function(n,t,e){e.r(t),e.d(t,{default:function(){return A}});var r,i=e(168),o=e(885),a=e(208),c=e(2791),u=e(6871),s=e(6095),d=e(2546),l=e(5033),f=e(3950),h=e(184);function p(n){var t=n.onClick,e=n.refreshing;return(0,h.jsx)(m,{onClick:t,disabled:e,children:(0,h.jsx)(f.Z,{})})}var x,g,b,v,m=a.Z.button(r||(r=(0,i.Z)(["\n  position: fixed;\n  @media (min-width: 500px) {\n    position: absolute;\n  }\n  bottom: 20px;\n  left: 20px;\n\n  padding: 5px;\n  width: 40px;\n  height: 40px;\n\n  overflow: hidden;\n  background: white;\n  border: 2px solid #eee;\n  border-radius: 100%;\n\n  ","\n  @keyframes rotation {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  svg {\n    color: #aaa;\n    width: 100%;\n    height: 100%;\n  }\n"])),(function(n){return n.disabled&&"animation: 500ms rotation infinite linear;"})),k=e(3329),w=e(5879),Z=e(1833),j=e(8141),y=e(1098),S=300,C=function(n){return String(n).replace(/,/g,"")},I=function(n){return BigInt(C(n)).toLocaleString()},L=function(n){try{return"number"!==typeof n&&(BigInt(C(n)),!0)}catch(t){return!1}},B=function(n){if(n){var t=document.querySelector(".fakeInput");if(t){t.value=n.value,t.style.fontSize=getComputedStyle(n).fontSize,t.style.fontWeight=getComputedStyle(n).fontWeight;var e=t.scrollWidth+10;n.style.width=e+"px",t.value=""}}};function R(n){var t,e=n.sheetData,r=n.setSheetData,i=n.addRow,o=n.removeRow,a=BigInt(0);return(0,h.jsx)(D,{children:(0,h.jsx)("table",{children:(0,h.jsxs)("tbody",{children:[(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{}),(0,h.jsx)("th",{children:"\ubc88\ud638"}),(0,h.jsx)("th",{children:"\uc720\ud615"}),(0,h.jsx)("th",{children:"\ud56d\ubaa9"}),(0,h.jsx)("th",{children:"\uac00\uaca9"}),(0,h.jsx)("th",{children:"\ud569\uacc4"}),(0,h.jsx)("th",{onClick:function(){return i(0)},children:(0,h.jsx)(_,{fontSize:"small"})})]}),c.Children.toArray(null===e||void 0===e||null===(t=e.table)||void 0===t?void 0:t.map((function(n,t){return(0,h.jsxs)("tr",{id:"row_".concat(t+1),children:[(0,h.jsx)("td",{onClick:function(){o(t+1)},children:(0,h.jsx)(q,{fontSize:"small"})}),(0,h.jsx)("td",{children:t+1}),c.Children.toArray(n.map((function(n,i){return 2===i&&(a+=function(n){var t=C(n);return L(t)?BigInt(t):BigInt(0)}(n)),(0,h.jsx)("td",{children:(0,h.jsx)(P,{numCheck:2===i,value:2===i&&L(n)&&""!==n?I(n):n.toString(),height:"28px",onChange:function(n){return function(n,t,i){if(n.target){B(n.target);var o=(0,d.ZP)((function(e){if(e&&e.table&&e.table[t])return e.table[t][i]=n.target.value,e}),e);r(o)}}(n,t,i)}})})}))),(0,h.jsx)("td",{children:I(a)}),(0,h.jsx)("td",{onClick:function(){return i(t+1)},children:(0,h.jsx)(_,{fontSize:"small"})})]})})))]})})})}var z,E,D=a.Z.div(x||(x=(0,i.Z)(["\n  min-width: 100%;\n  max-width: 200%;\n  overflow: auto;\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    border: 1px solid ",";\n  }\n  th {\n    background: ",";\n  }\n  th,\n  td {\n    border: 1px solid ",";\n    white-space: pre;\n    text-align: left;\n    padding: 2px;\n    min-width: 10px;\n  }\n  .blink {\n    @keyframes blink {\n      0% {\n        background: ",";\n      }\n      100% {\n        background: white;\n      }\n    }\n    animation: blink ","ms;\n  }\n  .blinkRed {\n    @keyframes blinkRed {\n      0% {\n        background: red;\n      }\n      100% {\n        background: white;\n      }\n    }\n    animation: blinkRed ","ms;\n  }\n  th:nth-of-type(3),\n  th:nth-of-type(4),\n  th:nth-of-type(5),\n  th:nth-of-type(6) {\n    min-width: 60px;\n  }\n  td:nth-of-type(5) input,\n  td:nth-of-type(6) {\n    text-align: right;\n  }\n  td:nth-of-type(3),\n  td:nth-of-type(4),\n  td:nth-of-type(5) {\n    padding: 0;\n  }\n"])),Z.w.greenLine,Z.w.greenLine,Z.w.greenLine,Z.w.greenLine,S,S),_=(0,a.Z)(j.Z)(g||(g=(0,i.Z)(["\n  color: #7c7;\n"]))),q=(0,a.Z)(y.Z)(b||(b=(0,i.Z)(["\n  color: red;\n"]))),P=a.Z.input(v||(v=(0,i.Z)(["\n  width: 100%;\n  min-width: 100%;\n  height: ",";\n  border: 0;\n  outline: none;\n  background: none;\n  font: inherit;\n  &:focus,\n  &:hover,\n  &:active {\n    background: ",";\n  }\n  ","\n"])),(function(n){var t=n.height;return t?"".concat(t):"100%"}),Z.w.greenLine,(function(n){var t=n.numCheck,e=n.value;return t&&!L(e)?"background: #fcc;":""})),T=e(4787),W=!0;function A(){var n=(0,u.UO)(),t=(0,u.s0)(),e=(0,c.useState)(),r=(0,o.Z)(e,2),i=r[0],a=r[1],f=(0,c.useState)(!1),x=(0,o.Z)(f,2),g=x[0],b=x[1],v=(0,c.useState)(),m=(0,o.Z)(v,2),Z=m[0],j=m[1],y=(0,c.useState)(),C=(0,o.Z)(y,2),I=C[0],L=C[1],z=(0,w.Z)({message:"\uc800\uc7a5 \uc644\ub8cc",duration:1500}),E=z.SnackBar,D=z.openSnackBar,_=(0,w.Z)({message:"\uc0c8\ub85c\uace0\uce68 \uc644\ub8cc",duration:1500}),q=_.SnackBar,P=_.openSnackBar,A=(0,c.useCallback)((function(){n.sheetId&&(b(!0),(0,l.zf)(Number(n.sheetId)).then((function(n){b(!1),n&&a(n)})))}),[n.sheetId]),U=(0,c.useCallback)((function(n){if(i){var t=(0,d.ZP)((function(t){if(t)return B(n.target),t.name=n.target.value,t}),i);a(t)}}),[i]),H=(0,c.useCallback)((function(){var n=document.querySelectorAll("input:not(.fakeInput)");n&&(n.forEach((function(n){B(n)})),W=!1)}),[]);(0,c.useEffect)((function(){A()}),[A]),(0,c.useEffect)((function(){W&&i&&H()}),[H,i]),(0,c.useEffect)((function(){if(void 0!==Z){var n=document.querySelector("#row_".concat(Z+1));n&&(n.classList.add("blink"),j(void 0),setTimeout((function(){n.classList.remove("blink")}),S))}}),[Z]),(0,c.useEffect)((function(){if(i&&void 0!==I){var n=document.querySelector("#row_".concat(I));n&&(n.classList.add("blinkRed"),setTimeout((function(){n.classList.remove("blinkRed");var t=(0,d.ZP)(i,(function(n){var t;null===n||void 0===n||null===(t=n.table)||void 0===t||t.splice(I-1,1)}));a(t),L(void 0)}),S))}}),[I,i]);var O=(0,c.useCallback)((function(n){var t=(0,d.ZP)(i,(function(t){var e;null===t||void 0===t||null===(e=t.table)||void 0===e||e.splice(n,0,["","",""])}));a(t),j(n)}),[i]),X=(0,c.useCallback)((function(n){L(n)}),[]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.Z,{title:null!==i&&void 0!==i&&i.name?(0,h.jsx)(F,{value:null===i||void 0===i?void 0:i.name,onChange:U}):null,backButton:!0,backFunction:function(){return t("/")}}),(0,h.jsx)(R,{sheetData:i,setSheetData:a,addRow:O,removeRow:X}),(0,h.jsx)(p,{refreshing:g,onClick:function(){A(),P(),W=!0}}),(0,h.jsx)(N,{disabled:g,onClick:function(){n.sheetId&&i&&(b(!0),(0,l.w1)(Number(n.sheetId),i).then((function(n){b(!1),D()})))},children:(0,h.jsx)(k.Z,{})}),(0,h.jsx)(q,{}),(0,h.jsx)(E,{}),(0,h.jsx)(T.Z,{loading:g})]})}var F=a.Z.input(z||(z=(0,i.Z)(["\n  width: 100%;\n  min-width: 100%;\n  height: 24px;\n  border: 0;\n  outline: none;\n  background: none;\n  font: inherit;\n  &:focus,\n  &:hover,\n  &:active {\n    border-bottom: 1px solid ",";\n  }\n"])),Z.w.greenLine),N=a.Z.button(E||(E=(0,i.Z)(["\n  position: fixed;\n  @media (min-width: 500px) {\n    position: absolute;\n  }\n  z-index: 1;\n  top: 2px;\n  right: 20px;\n\n  padding: 5px;\n  width: 40px;\n  height: 40px;\n\n  overflow: hidden;\n  background: blue;\n  border: 2px solid #eee;\n  border-radius: 100%;\n  opacity: 0.7;\n  svg {\n    color: white;\n    width: 100%;\n    height: 100%;\n  }\n  ","\n"])),(function(n){return n.disabled&&"background: #555;"}))}}]);
//# sourceMappingURL=432.e78d6297.chunk.js.map