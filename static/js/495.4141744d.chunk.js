"use strict";(self.webpackChunkaccount_book=self.webpackChunkaccount_book||[]).push([[495],{5033:function(n,t,e){e.d(t,{WH:function(){return o},eI:function(){return l},s0:function(){return f},v4:function(){return d},w1:function(){return s},zf:function(){return c}});var r=e(8214),i=e(5861),a=e(4569),u=e.n(a)().create({baseURL:"https://blog-imki123-backend.herokuapp.com/accountBook/sheet/",withCredentials:!0}),o=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.post("");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t,e){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.patch("".concat(t),e);case 2:return i=n.sent,n.abrupt("return",i.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.patch("".concat(t.fromId,"/").concat(t.toId),t);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.delete("".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9707:function(n,t,e){e.d(t,{Z:function(){return x}});var r,i,a,u,o,c,d,s=e(168),l=e(208),f=e(2791),h=e(3421),p=e(184),v=function(n){return BigInt((0,h.ge)(n))};function x(n){var t=n.sheetData,e=(n.setSheetData,(0,f.useRef)((0,h.ZQ)(0))),r=(0,f.useMemo)((function(){var n;if(null===t||void 0===t||!t.table)return{summary:{},summaryKeys:[]};var r={};e.current=(0,h.ZQ)(0),null===t||void 0===t||null===(n=t.table)||void 0===n||n.forEach((function(n,t){if((n[0].includes("\uc6d4\uae09")||n[0].includes("\uc218\uc785"))&&(e.current+=(0,h.ZQ)(n[3])),""!==n[0].trim()){void 0===r[n[0]]&&(r[n[0]]={sum:"0",order:""});try{var i=v(r[n[0]].sum||"0"),a=v(n[3]||"0");r[n[0]].sum=String(i+a)}catch(u){}}}));var i=Object.keys(r).sort((function(n,t){var e=Number(n.slice(0,n.indexOf("."))),r=Number(t.slice(0,t.indexOf(".")));return isNaN(e)||isNaN(r)?n>t?1:-1:e>r?1:-1}));return i.forEach((function(n,t){return r[n].order=t})),{summary:r,summaryKeys:i}}),[null===t||void 0===t?void 0:t.table]),i=r.summary,a=r.summaryKeys;return(0,p.jsx)(b,{children:a.length>0?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m,{children:"\uc694\uc57d"}),(0,p.jsx)(g,{children:f.Children.toArray(a.map((function(n,t){var r,a;return(0,p.jsxs)(Z,{style:t%2===0?{background:"#cec"}:{},children:[(0,p.jsx)(k,{children:n}),(0,p.jsxs)(w,{children:["".concat((0,h.Gn)(null===(r=i[n])||void 0===r?void 0:r.sum)," \uc6d0"),(0,p.jsx)(j,{children:"".concat(Math.abs((0,h._r)((0,h.ZQ)(null===(a=i[n])||void 0===a?void 0:a.sum)*(0,h.ZQ)("100")/e.current,2)),"%")})]})]})})))})]}):null})}var b=l.Z.div(r||(r=(0,s.Z)(["\n  padding: 20px 0;\n"]))),m=l.Z.div(i||(i=(0,s.Z)(["\n  font-weight: bold;\n"]))),g=l.Z.div(a||(a=(0,s.Z)(["\n  padding-top: 10px;\n"]))),Z=l.Z.div(u||(u=(0,s.Z)(["\n  padding: 2px 4px;\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),k=l.Z.div(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-shrink: 0;\n  justify-content: space-between;\n  width: 80px;\n  padding-right: 10px;\n  border-right: 1px solid #222;\n"]))),w=l.Z.div(c||(c=(0,s.Z)(["\n  display: flex;\n  padding-left: 10px;\n  text-align: right;\n  overflow-wrap: anywhere;\n"]))),j=l.Z.div(d||(d=(0,s.Z)(["\n  width: 60px;\n  margin-left: 4px;\n  border-left: 1px solid #222;\n"])))},2012:function(n,t,e){e.d(t,{Z:function(){return k}});var r,i,a,u,o,c=e(168),d=e(885),s=e(2791),l=e(1833),f=e(8141),h=e(1098),p=e(2546),v=e(208),x=e(8197),b=e(3421),m=e(1366),g=JSON.parse('{"Q6":[0,0,"#ffc9c9"],"iQ":[0,0,"#fcc2d7"],"pl":[0,0,"#eebefa"],"ht":[0,0,"#d0bfff",0,"#9775fa"],"QN":[0,0,"#bac8ff",0,"#748ffc"],"iN":[0,0,"#a5d8ff",0,"#4dabf7"],"ek":["#ebfbee"],"LR":[0,0,"#d8f5a2"],"er":[0,0,"#ffec99"]}'),Z=e(184);function k(n){var t,e=n.sheetData,r=n.setSheetData,i=n.addRow,a=n.removeRow,u=n.changeRef,o=n.readOnly,c=void 0!==o&&o,l=BigInt(0),f=(0,s.useMemo)((function(){return["","1.\uc0dd\ud65c\ube44","2.\ubc30\ub2ec\uc678\uc2dd","3.\uae30\ud0c0","4.\uad00\ub9ac\ube44","5.\uc800\uae08","6.\ubcf4\ud5d8\ub8cc","7.\uc5ec\ud589","8.\uacbd\uc870\uc0ac","9.\ubcd1\uc6d0","10.\ube44\uc0c1\uae08","11.\uc218\uc785"]}),[]),h=(0,s.useState)(f),v=(0,d.Z)(h,2),x=v[0],g=v[1];(0,s.useEffect)((function(){(0,m.o)().then((function(n){g(n.types||f)}))}),[f]);var k=function(n,t,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(u&&(u.current=!0),n.target){(0,b.Jq)(n.target,a);var o=(0,p.ZP)((function(e){if(e&&e.table&&e.table[t])return e.table[t][i]=n.target.value,e}),e);r(o)}};return(0,Z.jsx)(w,{children:(0,Z.jsx)("table",{children:(0,Z.jsxs)("tbody",{children:[(0,Z.jsxs)("tr",{children:[c?(0,Z.jsx)("th",{}):(0,Z.jsx)("th",{onClick:function(){return i&&i(0)},children:(0,Z.jsx)(j,{fontSize:"small"})}),(0,Z.jsx)("th",{children:"\ubc88\ud638"}),(0,Z.jsx)("th",{children:"\uc720\ud615"}),(0,Z.jsx)("th",{children:"\ub0a0\uc9dc"}),(0,Z.jsx)("th",{children:"\uc81c\ubaa9"}),(0,Z.jsx)("th",{children:"\uac00\uaca9"}),(0,Z.jsx)("th",{children:"\ud569\uacc4"}),(0,Z.jsx)("th",{})]}),s.Children.toArray(null===e||void 0===e||null===(t=e.table)||void 0===t?void 0:t.map((function(n,t){return(0,Z.jsxs)("tr",{id:"row_".concat(t+1),children:[c?(0,Z.jsx)("td",{}):(0,Z.jsx)("td",{onClick:function(){i&&i(t+1)},children:(0,Z.jsx)(j,{fontSize:"small"})}),(0,Z.jsx)("td",{children:t+1}),s.Children.toArray(n.map((function(n,e){return 0===e?(0,Z.jsx)("td",{children:c?n:(0,Z.jsx)(S,{value:n,onChange:function(n){return k(n,t,e,!0)},height:"27px",children:s.Children.toArray(x.map((function(n){return(0,Z.jsx)("option",{children:n})})))})}):(3===e&&(l+=(0,b.jp)(n)),(0,Z.jsx)("td",{children:c?n.toString():(0,Z.jsx)(C,{numCheck:3===e,value:3===e&&(0,b.C4)(n)&&""!==n?(0,b.Gn)(n):n.toString(),height:"28px",onChange:function(n){return k(n,t,e)}})}))}))),(0,Z.jsx)("td",{children:(0,b.Gn)(l)}),c?(0,Z.jsx)("td",{}):(0,Z.jsx)("td",{onClick:function(){return a&&a(t+1)},children:(0,Z.jsx)(y,{fontSize:"small"})})]})})))]})})})}var w=v.Z.div(r||(r=(0,c.Z)(["\n  min-width: 100%;\n  max-width: 200%;\n  overflow: auto;\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    border: 1px solid ",";\n  }\n  th {\n    background: ",";\n  }\n  th,\n  td {\n    border: 1px solid ",";\n    white-space: pre;\n    text-align: left;\n    padding: 2px;\n    min-width: 10px;\n  }\n  .blink {\n    @keyframes blink {\n      0% {\n        background: ",";\n      }\n      100% {\n        background: white;\n      }\n    }\n    animation: blink ","ms;\n  }\n  .blinkRed {\n    @keyframes blinkRed {\n      0% {\n        background: red;\n      }\n      100% {\n        background: white;\n      }\n    }\n    animation: blinkRed ","ms;\n  }\n  th:nth-of-type(5),\n  th:nth-of-type(6),\n  th:nth-of-type(7) {\n    min-width: 60px;\n  }\n  td:nth-of-type(6),\n  td:nth-of-type(7),\n  td:nth-of-type(6) input,\n  td:nth-of-type(7) input {\n    text-align: right;\n  }\n  td:nth-of-type(3),\n  td:nth-of-type(4),\n  td:nth-of-type(5),\n  td:nth-of-type(6) {\n    padding: 0;\n  }\n"])),l.w.greenLine,l.w.greenLine,l.w.greenLine,l.w.greenLine,x.w,x.w),j=(0,v.Z)(f.Z)(i||(i=(0,c.Z)(["\n  color: #7c7;\n"]))),y=(0,v.Z)(h.Z)(a||(a=(0,c.Z)(["\n  color: red;\n"]))),C=v.Z.input(u||(u=(0,c.Z)(["\n  width: 100%;\n  min-width: 100%;\n  height: ",";\n  padding: 0 2px;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background: none;\n  font: inherit;\n  &:focus,\n  &:hover,\n  &:active {\n    background: ",";\n  }\n  ","\n"])),(function(n){var t=n.height;return t?"".concat(t):"100%"}),g.ek[0],(function(n){var t=n.numCheck,e=n.value;return t&&!(0,b.C4)(e)?"background: #fcc;":""})),S=v.Z.select(o||(o=(0,c.Z)(["\n  width: 100%;\n  min-width: 100%;\n  height: ",";\n  padding: 0 2px;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background: transparent;\n  color: #222;\n  font: inherit;\n  background: ",";\n"])),(function(n){var t=n.height;return t?"".concat(t):"100%"}),(function(n){var t=n.value;return t.includes("\uc0dd\ud65c\ube44")?g.iQ[2]:t.includes("\ubc30\ub2ec\uc678\uc2dd")?g.Q6[2]:t.includes("\uae30\ud0c0")?g.er[2]:t.includes("\uad00\ub9ac\ube44")?g.LR[2]:t.includes("\uc800\uae08")?g.iN[4]:t.includes("\ubcf4\ud5d8\ub8cc")?g.iN[2]:t.includes("\uc5ec\ud589")?g.QN[2]:t.includes("\uacbd\uc870\uc0ac")?g.QN[4]:t.includes("\ubcd1\uc6d0")?g.ht[2]:t.includes("\ube44\uc0c1\uae08")?g.ht[4]:t.includes("\uc218\uc785")?g.pl[2]:void 0}))},8197:function(n,t,e){e.d(t,{w:function(){return r}});var r=300},5495:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,i=e(168),a=e(885),u=e(208),o=e(2791),c=e(6871),d=e(6095),s=e(2546),l=e(5033),f=e(3950),h=e(184);function p(n){var t=n.onClick,e=n.refreshing;return(0,h.jsx)(x,{onClick:t,disabled:e,children:(0,h.jsx)(f.Z,{})})}var v,x=u.Z.button(r||(r=(0,i.Z)(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  @media (min-width: 500px) {\n    right: calc(50% - 230px);\n  }\n\n  padding: 5px;\n  width: 40px;\n  height: 40px;\n\n  overflow: hidden;\n  background: white;\n  border: 2px solid #eee;\n  border-radius: 100%;\n\n  ","\n  @keyframes rotation {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  svg {\n    color: #aaa;\n    width: 100%;\n    height: 100%;\n  }\n"])),(function(n){return n.disabled&&"animation: 500ms rotation infinite linear;"})),b=e(2012),m=e(8197),g=e(1833),Z=e(3421),k=e(4787),w=e(9707);function j(){var n=(0,c.UO)(),t=(0,c.s0)(),e=(0,o.useState)(),r=(0,a.Z)(e,2),i=r[0],u=r[1],f=(0,o.useState)(!1),v=(0,a.Z)(f,2),x=v[0],g=v[1],j=(0,o.useState)(),C=(0,a.Z)(j,2),S=C[0],R=C[1],N=(0,o.useState)(),L=(0,a.Z)(N,2),I=L[0],Q=L[1],E=(0,o.useState)(!0),z=(0,a.Z)(E,2),O=z[0],q=z[1],D=(0,o.useRef)(null),A=(0,o.useRef)(!1),_=(0,o.useCallback)((function(){n.sheetId&&(g(!0),(0,l.zf)(Number(n.sheetId)).then((function(n){g(!1),n&&u(n)})))}),[n.sheetId]),J=(0,o.useCallback)((function(n){if(A.current=!0,i){var t=(0,s.ZP)((function(t){if(t)return(0,Z.Jq)(n.target),t.name=n.target.value,t}),i);u(t)}}),[i]),M=(0,o.useCallback)((function(){var n=document.querySelectorAll("input:not(.fakeInput)");n&&(n.forEach((function(n){(0,Z.Jq)(n)})),q(!1));var t=document.querySelectorAll("select:not(.fakeSelect)");t&&(t.forEach((function(n){(0,Z.Jq)(n,!0)})),q(!1))}),[]);(0,o.useEffect)((function(){_()}),[_]),(0,o.useEffect)((function(){O&&i&&M()}),[O,M,i]),(0,o.useEffect)((function(){if(void 0!==S){var n=document.querySelector("#row_".concat(S+1));n&&(n.classList.add("blink"),R(void 0),setTimeout((function(){n.classList.remove("blink")}),m.w))}}),[S]),(0,o.useEffect)((function(){if(i&&void 0!==I){var n=document.querySelector("#row_".concat(I));n&&(n.classList.add("blinkRed"),setTimeout((function(){n.classList.remove("blinkRed");var t=(0,s.ZP)(i,(function(n){var t;null===n||void 0===n||null===(t=n.table)||void 0===t||t.splice(I-1,1)}));u(t),Q(void 0)}),m.w))}}),[I,i]);var B=(0,o.useCallback)((function(n){A.current=!0;var t=(0,s.ZP)(i,(function(t){var e;null===t||void 0===t||null===(e=t.table)||void 0===e||e.splice(n,0,["","","",""])}));u(t),R(n)}),[i]),P=(0,o.useCallback)((function(n){A.current=!0,Q(n)}),[]),T=(0,o.useCallback)((function(){n.sheetId&&i&&(0,l.w1)(Number(n.sheetId),i).then((function(n){(0,Z.Oi)("\uc790\ub3d9 \uc800\uc7a5")}))}),[n.sheetId,i]);return(0,o.useEffect)((function(){!0===A.current&&(null!==D.current&&clearTimeout(D.current),D.current=setTimeout((function(){D.current=null,T()}),2e3))}),[T,i]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.Z,{title:void 0!==(null===i||void 0===i?void 0:i.name)?(0,h.jsx)(y,{value:null===i||void 0===i?void 0:i.name,onChange:J}):null,backButton:!0,backFunction:function(){return t("/",{replace:!0})}}),(0,h.jsx)(b.Z,{sheetData:i,setSheetData:u,addRow:B,removeRow:P,changeRef:A}),(0,h.jsx)(w.Z,{sheetData:i,setSheetData:u}),(0,h.jsx)(p,{refreshing:x,onClick:function(){_(),q(!0),(0,Z.Oi)("\uc0c8\ub85c\uace0\uce68 \uc644\ub8cc")}}),(0,h.jsx)(k.Z,{loading:x})]})}var y=u.Z.input(v||(v=(0,i.Z)(["\n  width: 100%;\n  min-width: 50px;\n  height: 24px;\n  border: 0;\n  padding: 0 2px;\n  outline: none;\n  background: none;\n  font: inherit;\n  &:focus,\n  &:hover,\n  &:active {\n    border-bottom: 1px solid ",";\n  }\n"])),g.w.greenLine)},8141:function(n,t,e){var r=e(4836);t.Z=void 0;var i=r(e(5649)),a=e(184),u=(0,i.default)((0,a.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");t.Z=u},3950:function(n,t,e){var r=e(4836);t.Z=void 0;var i=r(e(5649)),a=e(184),u=(0,i.default)((0,a.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");t.Z=u}}]);
//# sourceMappingURL=495.4141744d.chunk.js.map