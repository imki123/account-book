"use strict";(self.webpackChunkaccount_book=self.webpackChunkaccount_book||[]).push([[886],{5033:function(n,t,e){e.d(t,{WH:function(){return c},eI:function(){return l},s0:function(){return h},v4:function(){return d},w1:function(){return s},zf:function(){return o}});var r=e(8214),i=e(5861),a=e(4569),u=e.n(a)().create({baseURL:"https://blog-imki123-backend.herokuapp.com/accountBook/sheet/",withCredentials:!0}),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.post("");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t,e){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.patch("".concat(t),e);case 2:return i=n.sent,n.abrupt("return",i.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.patch("".concat(t.fromId,"/").concat(t.toId),t);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.delete("".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9707:function(n,t,e){e.d(t,{Z:function(){return v}});var r,i,a,u,c,o,d=e(168),s=e(208),l=e(2791),h=e(3421),f=e(184),p=function(n){return BigInt((0,h.ge)(n))};function v(n){var t=n.sheetData,e=(n.setSheetData,(0,l.useMemo)((function(){var n;if(null===t||void 0===t||!t.table)return{summary:{},summaryKeys:[]};var e={};null===t||void 0===t||null===(n=t.table)||void 0===n||n.forEach((function(n,t){if(""!==n[0].trim()){void 0===e[n[0]]&&(e[n[0]]={sum:"0",order:""});try{var r=p(e[n[0]].sum||"0"),i=p(n[3]||"0");e[n[0]].sum=String(r+i)}catch(a){}}}));var r=Object.keys(e).sort((function(n,t){var e=Number(n.slice(0,n.indexOf("."))),r=Number(t.slice(0,t.indexOf(".")));return isNaN(e)||isNaN(r)?n>t?1:-1:e>r?1:-1}));return r.forEach((function(n,t){return e[n].order=t})),{summary:e,summaryKeys:r}}),[null===t||void 0===t?void 0:t.table])),r=e.summary,i=e.summaryKeys;return(0,f.jsx)(x,{children:i.length>0?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(b,{children:"\uc694\uc57d"}),(0,f.jsx)(m,{children:l.Children.toArray(i.map((function(n,t){var e;return(0,f.jsxs)(g,{style:t%2===0?{background:"#cec"}:{},children:[(0,f.jsx)(Z,{children:n}),(0,f.jsxs)(j,{children:[(0,h.Gn)(null===(e=r[n])||void 0===e?void 0:e.sum)," \uc6d0"]})]})})))})]}):null})}var x=s.Z.div(r||(r=(0,d.Z)(["\n  padding: 20px 0;\n"]))),b=s.Z.div(i||(i=(0,d.Z)(["\n  font-weight: bold;\n"]))),m=s.Z.div(a||(a=(0,d.Z)(["\n  padding-top: 10px;\n"]))),g=s.Z.div(u||(u=(0,d.Z)(["\n  padding: 2px 4px;\n  width: 250px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Z=s.Z.div(c||(c=(0,d.Z)(["\n  display: flex;\n  flex-shrink: 0;\n  justify-content: space-between;\n  width: 80px;\n  padding-right: 10px;\n  border-right: 1px solid #222;\n"]))),j=s.Z.div(o||(o=(0,d.Z)(["\n  display: inline-block;\n  padding-left: 10px;\n  text-align: right;\n  overflow-wrap: anywhere;\n"])))},2012:function(n,t,e){e.d(t,{Z:function(){return j}});var r,i,a,u,c,o=e(168),d=e(885),s=e(2791),l=e(1833),h=e(8141),f=e(1098),p=e(2546),v=e(208),x=e(8197),b=e(3421),m=e(1366),g=JSON.parse('{"Q6":[0,0,"#ffc9c9"],"iQ":[0,0,"#fcc2d7"],"pl":[0,0,"#eebefa"],"ht":[0,0,"#d0bfff",0,"#9775fa"],"QN":[0,0,"#bac8ff",0,"#748ffc"],"iN":[0,0,"#a5d8ff",0,"#4dabf7"],"ek":["#ebfbee"],"LR":[0,0,"#d8f5a2"],"er":[0,0,"#ffec99"]}'),Z=e(184);function j(n){var t,e=n.sheetData,r=n.setSheetData,i=n.addRow,a=n.removeRow,u=n.changeRef,c=n.readOnly,o=void 0!==c&&c,l=BigInt(0),h=(0,s.useMemo)((function(){return["","1.\uc0dd\ud65c\ube44","2.\ubc30\ub2ec\uc678\uc2dd","3.\uae30\ud0c0","4.\uad00\ub9ac\ube44","5.\uc800\uae08","6.\ubcf4\ud5d8\ub8cc","7.\uc5ec\ud589","8.\uacbd\uc870\uc0ac","9.\ubcd1\uc6d0","10.\ube44\uc0c1\uae08","11.\uc218\uc785"]}),[]),f=(0,s.useState)(h),v=(0,d.Z)(f,2),x=v[0],g=v[1];(0,s.useEffect)((function(){(0,m.o)().then((function(n){g(n.types||h)}))}),[h]);var j=function(n,t,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(u&&(u.current=!0),n.target){(0,b.Jq)(n.target,a);var c=(0,p.ZP)((function(e){if(e&&e.table&&e.table[t])return e.table[t][i]=n.target.value,e}),e);r(c)}};return(0,Z.jsx)(k,{children:(0,Z.jsx)("table",{children:(0,Z.jsxs)("tbody",{children:[(0,Z.jsxs)("tr",{children:[o?(0,Z.jsx)("th",{}):(0,Z.jsx)("th",{onClick:function(){return i&&i(0)},children:(0,Z.jsx)(y,{fontSize:"small"})}),(0,Z.jsx)("th",{children:"\ubc88\ud638"}),(0,Z.jsx)("th",{children:"\uc720\ud615"}),(0,Z.jsx)("th",{children:"\ub0a0\uc9dc"}),(0,Z.jsx)("th",{children:"\uc81c\ubaa9"}),(0,Z.jsx)("th",{children:"\uac00\uaca9"}),(0,Z.jsx)("th",{children:"\ud569\uacc4"}),(0,Z.jsx)("th",{})]}),s.Children.toArray(null===e||void 0===e||null===(t=e.table)||void 0===t?void 0:t.map((function(n,t){return(0,Z.jsxs)("tr",{id:"row_".concat(t+1),children:[o?(0,Z.jsx)("td",{}):(0,Z.jsx)("td",{onClick:function(){i&&i(t+1)},children:(0,Z.jsx)(y,{fontSize:"small"})}),(0,Z.jsx)("td",{children:t+1}),s.Children.toArray(n.map((function(n,e){return 0===e?(0,Z.jsx)("td",{children:o?n:(0,Z.jsx)(S,{value:n,onChange:function(n){return j(n,t,e,!0)},height:"27px",children:s.Children.toArray(x.map((function(n){return(0,Z.jsx)("option",{children:n})})))})}):(3===e&&(l+=(0,b.jp)(n)),(0,Z.jsx)("td",{children:o?n.toString():(0,Z.jsx)(C,{numCheck:3===e,value:3===e&&(0,b.C4)(n)&&""!==n?(0,b.Gn)(n):n.toString(),height:"28px",onChange:function(n){return j(n,t,e)}})}))}))),(0,Z.jsx)("td",{children:(0,b.Gn)(l)}),o?(0,Z.jsx)("td",{}):(0,Z.jsx)("td",{onClick:function(){return a&&a(t+1)},children:(0,Z.jsx)(w,{fontSize:"small"})})]})})))]})})})}var k=v.Z.div(r||(r=(0,o.Z)(["\n  min-width: 100%;\n  max-width: 200%;\n  overflow: auto;\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    border: 1px solid ",";\n  }\n  th {\n    background: ",";\n  }\n  th,\n  td {\n    border: 1px solid ",";\n    white-space: pre;\n    text-align: left;\n    padding: 2px;\n    min-width: 10px;\n  }\n  .blink {\n    @keyframes blink {\n      0% {\n        background: ",";\n      }\n      100% {\n        background: white;\n      }\n    }\n    animation: blink ","ms;\n  }\n  .blinkRed {\n    @keyframes blinkRed {\n      0% {\n        background: red;\n      }\n      100% {\n        background: white;\n      }\n    }\n    animation: blinkRed ","ms;\n  }\n  th:nth-of-type(5),\n  th:nth-of-type(6),\n  th:nth-of-type(7) {\n    min-width: 60px;\n  }\n  td:nth-of-type(6),\n  td:nth-of-type(7),\n  td:nth-of-type(6) input,\n  td:nth-of-type(7) input {\n    text-align: right;\n  }\n  td:nth-of-type(3),\n  td:nth-of-type(4),\n  td:nth-of-type(5),\n  td:nth-of-type(6) {\n    padding: 0;\n  }\n"])),l.w.greenLine,l.w.greenLine,l.w.greenLine,l.w.greenLine,x.w,x.w),y=(0,v.Z)(h.Z)(i||(i=(0,o.Z)(["\n  color: #7c7;\n"]))),w=(0,v.Z)(f.Z)(a||(a=(0,o.Z)(["\n  color: red;\n"]))),C=v.Z.input(u||(u=(0,o.Z)(["\n  width: 100%;\n  min-width: 100%;\n  height: ",";\n  padding: 0 2px;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background: none;\n  font: inherit;\n  &:focus,\n  &:hover,\n  &:active {\n    background: ",";\n  }\n  ","\n"])),(function(n){var t=n.height;return t?"".concat(t):"100%"}),g.ek[0],(function(n){var t=n.numCheck,e=n.value;return t&&!(0,b.C4)(e)?"background: #fcc;":""})),S=v.Z.select(c||(c=(0,o.Z)(["\n  width: 100%;\n  min-width: 100%;\n  height: ",";\n  padding: 0 2px;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background: transparent;\n  color: #222;\n  font: inherit;\n  background: ",";\n"])),(function(n){var t=n.height;return t?"".concat(t):"100%"}),(function(n){var t=n.value;return t.includes("\uc0dd\ud65c\ube44")?g.iQ[2]:t.includes("\ubc30\ub2ec\uc678\uc2dd")?g.Q6[2]:t.includes("\uae30\ud0c0")?g.er[2]:t.includes("\uad00\ub9ac\ube44")?g.LR[2]:t.includes("\uc800\uae08")?g.iN[4]:t.includes("\ubcf4\ud5d8\ub8cc")?g.iN[2]:t.includes("\uc5ec\ud589")?g.QN[2]:t.includes("\uacbd\uc870\uc0ac")?g.QN[4]:t.includes("\ubcd1\uc6d0")?g.ht[2]:t.includes("\ube44\uc0c1\uae08")?g.ht[4]:t.includes("\uc218\uc785")?g.pl[2]:void 0}))},8197:function(n,t,e){e.d(t,{w:function(){return r}});var r=300},4886:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(885),i=e(2791),a=e(6871),u=e(6095),c=e(2012),o=e(9707),d=e(2546),s=e(7408),l=e(5033),h=e(184);function f(){var n,t=(0,a.s0)(),e=(n={staleTime:1e4},(0,s.useQuery)(["getSheets"],l.WH,n)).data,f=(0,i.useState)(new Set),p=(0,r.Z)(f,2),v=p[0],x=p[1],b=(0,i.useState)(),m=(0,r.Z)(b,2),g=m[0],Z=m[1],j=function(n){var t=(0,d.ZP)((function(t){return n.target.checked?null===t||void 0===t||t.add(Number(n.target.value)):null===t||void 0===t||t.delete(Number(n.target.value)),t}),v);x(t)};return(0,i.useEffect)((function(){if(e){var n=[];Array.from(v).sort().forEach((function(t){n.push(null===e||void 0===e?void 0:e.filter((function(n){return n.order===t}))[0])}));var t=[];n.forEach((function(n){n.table&&(t=t.concat(n.table).concat([["","","----- \uad6c\ubd84\uc120 -----",""]]))})),Z({table:t,sheetId:1,name:"joined",order:1})}}),[v,e]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u.Z,{title:"\uc694\uc57d\ubcf4\uae30",backButton:!0,backFunction:function(){return t("/",{replace:!0})}}),i.Children.toArray(e&&(null===e||void 0===e?void 0:e.map((function(n){return(0,h.jsx)("div",{children:(0,h.jsxs)("label",{children:[(0,h.jsx)("input",{type:"checkbox",name:"sheet",value:n.order,onChange:j}),(0,h.jsx)("span",{children:n.name})]})})})))),(0,h.jsx)(o.Z,{sheetData:g,setSheetData:Z}),(0,h.jsx)(c.Z,{sheetData:g,setSheetData:Z,readOnly:!0})]})}(0,d.MD)()},8141:function(n,t,e){var r=e(4836);t.Z=void 0;var i=r(e(5649)),a=e(184),u=(0,i.default)((0,a.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");t.Z=u}}]);
//# sourceMappingURL=886.9de672cf.chunk.js.map