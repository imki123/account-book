"use strict";(self.webpackChunkaccount_book=self.webpackChunkaccount_book||[]).push([[682],{5033:function(n,e,t){t.d(e,{WH:function(){return o},eI:function(){return l},s0:function(){return f},v4:function(){return s},w1:function(){return d},zf:function(){return c}});var r=t(8214),i=t(5861),a=t(4569),u=t.n(a)().create({baseURL:"https://blog-imki123-backend.herokuapp.com/accountBook/sheet/",withCredentials:!0}),o=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.post("");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.patch("".concat(e),t);case 2:return i=n.sent,n.abrupt("return",i.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.patch("".concat(e.fromId,"/").concat(e.toId),e);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.delete("".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},7682:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r,i=t(168),a=t(885),u=t(208),o=t(2791),c=t(6871),s=t(6095),d=t(2546),l=t(5033),f=t(3950),h=t(184);function p(n){var e=n.onClick,t=n.refreshing;return(0,h.jsx)(k,{onClick:e,disabled:t,children:(0,h.jsx)(f.Z,{})})}var v,x,b,m,g,k=u.Z.button(r||(r=(0,i.Z)(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  @media (min-width: 500px) {\n    right: calc(50% - 230px);\n  }\n\n  padding: 5px;\n  width: 40px;\n  height: 40px;\n\n  overflow: hidden;\n  background: white;\n  border: 2px solid #eee;\n  border-radius: 100%;\n\n  ","\n  @keyframes rotation {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  svg {\n    color: #aaa;\n    width: 100%;\n    height: 100%;\n  }\n"])),(function(n){return n.disabled&&"animation: 500ms rotation infinite linear;"})),Z=t(1833),w=t(8141),j=t(1098),y=300,C=t(3421),S=t(1366),R=JSON.parse('{"Q6":[0,0,"#ffc9c9"],"iQ":[0,0,"#fcc2d7"],"pl":[0,0,"#eebefa"],"ht":[0,0,"#d0bfff",0,"#9775fa"],"QN":[0,0,"#bac8ff",0,"#748ffc"],"iN":[0,0,"#a5d8ff",0,"#4dabf7"],"LR":[0,0,"#d8f5a2"],"er":[0,0,"#ffec99"]}');function N(n){var e,t=n.sheetData,r=n.setSheetData,i=n.addRow,u=n.removeRow,c=n.changeRef,s=BigInt(0),l=(0,o.useMemo)((function(){return["","1.\uc0dd\ud65c\ube44","2.\ubc30\ub2ec\uc678\uc2dd","3.\uae30\ud0c0","4.\uad00\ub9ac\ube44","5.\uc800\uae08","6.\ubcf4\ud5d8\ub8cc","7.\uc5ec\ud589","8.\uacbd\uc870\uc0ac","9.\ubcd1\uc6d0","10.\ube44\uc0c1\uae08","11.\uc218\uc785"]}),[]),f=(0,o.useState)(l),p=(0,a.Z)(f,2),v=p[0],x=p[1];(0,o.useEffect)((function(){(0,S.o)().then((function(n){x(n.types||l)}))}),[l]);var b=function(n,e,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(c.current=!0,n.target){(0,C.Jq)(n.target,a);var u=(0,d.ZP)((function(t){if(t&&t.table&&t.table[e])return t.table[e][i]=n.target.value,t}),t);r(u)}};return(0,h.jsx)(O,{children:(0,h.jsx)("table",{children:(0,h.jsxs)("tbody",{children:[(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{}),(0,h.jsx)("th",{children:"\ubc88\ud638"}),(0,h.jsx)("th",{children:"\uc720\ud615"}),(0,h.jsx)("th",{children:"\ub0a0\uc9dc"}),(0,h.jsx)("th",{children:"\uc81c\ubaa9"}),(0,h.jsx)("th",{children:"\uac00\uaca9"}),(0,h.jsx)("th",{children:"\ud569\uacc4"}),(0,h.jsx)("th",{onClick:function(){return i(0)},children:(0,h.jsx)(A,{fontSize:"small"})})]}),o.Children.toArray(null===t||void 0===t||null===(e=t.table)||void 0===e?void 0:e.map((function(n,e){return(0,h.jsxs)("tr",{id:"row_".concat(e+1),children:[(0,h.jsx)("td",{onClick:function(){u(e+1)},children:(0,h.jsx)(Q,{fontSize:"small"})}),(0,h.jsx)("td",{children:e+1}),o.Children.toArray(n.map((function(n,t){return 0===t?(0,h.jsx)("td",{children:(0,h.jsx)(_,{value:n,onChange:function(n){return b(n,e,t,!0)},height:"27px",children:o.Children.toArray(v.map((function(n){return(0,h.jsx)("option",{children:n})})))})}):(3===t&&(s+=(0,C.jp)(n)),(0,h.jsx)("td",{children:(0,h.jsx)(J,{numCheck:3===t,value:3===t&&(0,C.C4)(n)&&""!==n?(0,C.Gn)(n):n.toString(),height:"28px",onChange:function(n){return b(n,e,t)}})}))}))),(0,h.jsx)("td",{children:(0,C.Gn)(s)}),(0,h.jsx)("td",{onClick:function(){return i(e+1)},children:(0,h.jsx)(A,{fontSize:"small"})})]})})))]})})})}var L,I,E,z,q,D,O=u.Z.div(v||(v=(0,i.Z)(["\n  min-width: 100%;\n  max-width: 200%;\n  overflow: auto;\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    border: 1px solid ",";\n  }\n  th {\n    background: ",";\n  }\n  th,\n  td {\n    border: 1px solid ",";\n    white-space: pre;\n    text-align: left;\n    padding: 2px;\n    min-width: 10px;\n  }\n  .blink {\n    @keyframes blink {\n      0% {\n        background: ",";\n      }\n      100% {\n        background: white;\n      }\n    }\n    animation: blink ","ms;\n  }\n  .blinkRed {\n    @keyframes blinkRed {\n      0% {\n        background: red;\n      }\n      100% {\n        background: white;\n      }\n    }\n    animation: blinkRed ","ms;\n  }\n  th:nth-of-type(5),\n  th:nth-of-type(6),\n  th:nth-of-type(7) {\n    min-width: 60px;\n  }\n  td:nth-of-type(6) input,\n  td:nth-of-type(7) {\n    text-align: right;\n  }\n  td:nth-of-type(3),\n  td:nth-of-type(4),\n  td:nth-of-type(5),\n  td:nth-of-type(6) {\n    padding: 0;\n  }\n"])),Z.w.greenLine,Z.w.greenLine,Z.w.greenLine,Z.w.greenLine,y,y),A=(0,u.Z)(w.Z)(x||(x=(0,i.Z)(["\n  color: #7c7;\n"]))),Q=(0,u.Z)(j.Z)(b||(b=(0,i.Z)(["\n  color: red;\n"]))),J=u.Z.input(m||(m=(0,i.Z)(["\n  width: 100%;\n  min-width: 100%;\n  height: ",";\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background: none;\n  font: inherit;\n  &:focus,\n  &:hover,\n  &:active {\n    background: ",";\n  }\n  ","\n"])),(function(n){var e=n.height;return e?"".concat(e):"100%"}),Z.w.greenLine,(function(n){var e=n.numCheck,t=n.value;return e&&!(0,C.C4)(t)?"background: #fcc;":""})),_=u.Z.select(g||(g=(0,i.Z)(["\n  width: 100%;\n  min-width: 100%;\n  height: ",";\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background: transparent;\n  color: #222;\n  font: inherit;\n  background: ",";\n"])),(function(n){var e=n.height;return e?"".concat(e):"100%"}),(function(n){var e=n.value;return e.includes("\uc0dd\ud65c\ube44")?R.iQ[2]:e.includes("\ubc30\ub2ec\uc678\uc2dd")?R.Q6[2]:e.includes("\uae30\ud0c0")?R.er[2]:e.includes("\uad00\ub9ac\ube44")?R.LR[2]:e.includes("\uc800\uae08")?R.iN[4]:e.includes("\ubcf4\ud5d8\ub8cc")?R.iN[2]:e.includes("\uc5ec\ud589")?R.QN[2]:e.includes("\uacbd\uc870\uc0ac")?R.QN[4]:e.includes("\ubcd1\uc6d0")?R.ht[2]:e.includes("\ube44\uc0c1\uae08")?R.ht[4]:e.includes("\uc218\uc785")?R.pl[2]:void 0})),B=t(4787),M=function(n){return BigInt((0,C.ge)(n))};function P(n){var e=n.sheetData,t=(n.setSheetData,(0,o.useMemo)((function(){var n;if(null===e||void 0===e||!e.table)return{summary:{},summaryKeys:[]};var t={};null===e||void 0===e||null===(n=e.table)||void 0===n||n.forEach((function(n,e){if(""!==n[0].trim()){void 0===t[n[0]]&&(t[n[0]]={sum:"0",order:""});try{var r=M(t[n[0]].sum||"0"),i=M(n[3]||"0");t[n[0]].sum=String(r+i)}catch(a){}}}));var r=Object.keys(t).sort((function(n,e){var t=Number(n.slice(0,n.indexOf("."))),r=Number(e.slice(0,e.indexOf(".")));return isNaN(t)||isNaN(r)?n>e?1:-1:t>r?1:-1}));return r.forEach((function(n,e){return t[n].order=e})),{summary:t,summaryKeys:r}}),[null===e||void 0===e?void 0:e.table])),r=t.summary,i=t.summaryKeys;return(0,h.jsx)(F,{children:i.length>0?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(G,{children:"\uc694\uc57d"}),(0,h.jsx)(K,{children:o.Children.toArray(i.map((function(n,e){var t;return(0,h.jsxs)(H,{style:e%2===0?{background:"#cec"}:{},children:[(0,h.jsx)(U,{children:n}),(0,h.jsxs)(V,{children:[(0,C.Gn)(null===(t=r[n])||void 0===t?void 0:t.sum)," \uc6d0"]})]})})))})]}):null})}var T,F=u.Z.div(L||(L=(0,i.Z)(["\n  padding: 20px 0;\n"]))),G=u.Z.div(I||(I=(0,i.Z)(["\n  font-weight: bold;\n"]))),K=u.Z.div(E||(E=(0,i.Z)(["\n  padding-top: 10px;\n"]))),H=u.Z.div(z||(z=(0,i.Z)(["\n  padding: 2px 4px;\n  width: 250px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),U=u.Z.div(q||(q=(0,i.Z)(["\n  display: flex;\n  flex-shrink: 0;\n  justify-content: space-between;\n  width: 80px;\n  padding-right: 10px;\n  border-right: 1px solid #222;\n"]))),V=u.Z.div(D||(D=(0,i.Z)(["\n  display: inline-block;\n  padding-left: 10px;\n  text-align: right;\n  overflow-wrap: anywhere;\n"])));function W(){var n=(0,c.UO)(),e=(0,c.s0)(),t=(0,o.useState)(),r=(0,a.Z)(t,2),i=r[0],u=r[1],f=(0,o.useState)(!1),v=(0,a.Z)(f,2),x=v[0],b=v[1],m=(0,o.useState)(),g=(0,a.Z)(m,2),k=g[0],Z=g[1],w=(0,o.useState)(),j=(0,a.Z)(w,2),S=j[0],R=j[1],L=(0,o.useState)(!0),I=(0,a.Z)(L,2),E=I[0],z=I[1],q=(0,o.useRef)(null),D=(0,o.useRef)(!1),O=(0,o.useCallback)((function(){n.sheetId&&(b(!0),(0,l.zf)(Number(n.sheetId)).then((function(n){b(!1),n&&u(n)})))}),[n.sheetId]),A=(0,o.useCallback)((function(n){if(D.current=!0,i){var e=(0,d.ZP)((function(e){if(e)return(0,C.Jq)(n.target),e.name=n.target.value,e}),i);u(e)}}),[i]),Q=(0,o.useCallback)((function(){var n=document.querySelectorAll("input:not(.fakeInput)");n&&(n.forEach((function(n){(0,C.Jq)(n)})),z(!1));var e=document.querySelectorAll("select:not(.fakeSelect)");e&&(e.forEach((function(n){(0,C.Jq)(n,!0)})),z(!1))}),[]);(0,o.useEffect)((function(){O()}),[O]),(0,o.useEffect)((function(){E&&i&&Q()}),[E,Q,i]),(0,o.useEffect)((function(){if(void 0!==k){var n=document.querySelector("#row_".concat(k+1));n&&(n.classList.add("blink"),Z(void 0),setTimeout((function(){n.classList.remove("blink")}),y))}}),[k]),(0,o.useEffect)((function(){if(i&&void 0!==S){var n=document.querySelector("#row_".concat(S));n&&(n.classList.add("blinkRed"),setTimeout((function(){n.classList.remove("blinkRed");var e=(0,d.ZP)(i,(function(n){var e;null===n||void 0===n||null===(e=n.table)||void 0===e||e.splice(S-1,1)}));u(e),R(void 0)}),y))}}),[S,i]);var J=(0,o.useCallback)((function(n){D.current=!0;var e=(0,d.ZP)(i,(function(e){var t;null===e||void 0===e||null===(t=e.table)||void 0===t||t.splice(n,0,["","","",""])}));u(e),Z(n)}),[i]),_=(0,o.useCallback)((function(n){D.current=!0,R(n)}),[]),M=(0,o.useCallback)((function(){n.sheetId&&i&&(0,l.w1)(Number(n.sheetId),i).then((function(n){(0,C.Oi)("\uc790\ub3d9 \uc800\uc7a5")}))}),[n.sheetId,i]);return(0,o.useEffect)((function(){!0===D.current&&(null!==q.current&&clearTimeout(q.current),q.current=setTimeout((function(){q.current=null,M()}),2e3))}),[M,i]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.Z,{title:void 0!==(null===i||void 0===i?void 0:i.name)?(0,h.jsx)(X,{value:null===i||void 0===i?void 0:i.name,onChange:A}):null,backButton:!0,backFunction:function(){return e("/",{replace:!0})}}),(0,h.jsx)(N,{sheetData:i,setSheetData:u,addRow:J,removeRow:_,changeRef:D}),(0,h.jsx)(P,{sheetData:i,setSheetData:u}),(0,h.jsx)(p,{refreshing:x,onClick:function(){O(),z(!0),(0,C.Oi)("\uc0c8\ub85c\uace0\uce68 \uc644\ub8cc")}}),(0,h.jsx)(B.Z,{loading:x})]})}var X=u.Z.input(T||(T=(0,i.Z)(["\n  width: 100%;\n  min-width: 50px;\n  height: 24px;\n  border: 0;\n  outline: none;\n  background: none;\n  font: inherit;\n  &:focus,\n  &:hover,\n  &:active {\n    border-bottom: 1px solid ",";\n  }\n"])),Z.w.greenLine)},8141:function(n,e,t){var r=t(4836);e.Z=void 0;var i=r(t(5649)),a=t(184),u=(0,i.default)((0,a.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");e.Z=u},3950:function(n,e,t){var r=t(4836);e.Z=void 0;var i=r(t(5649)),a=t(184),u=(0,i.default)((0,a.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");e.Z=u}}]);
//# sourceMappingURL=682.8f3764ba.chunk.js.map