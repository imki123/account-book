"use strict";(self.webpackChunkaccount_book=self.webpackChunkaccount_book||[]).push([[367],{367:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var l,a,c,o=t(168),u=t(885),A=t(2791),i=t(9326),r=t(208),s=t(1163),d=t(6871),C=t(6095),v=t(618),x=t(4787),k=t(184);function b(){var n=(0,d.s0)(),e=(0,A.useState)(!1),t=(0,u.Z)(e,2),l=t[0],a=t[1],c=(0,A.useState)(!1),o=(0,u.Z)(c,2),r=o[0],b=o[1];(0,A.useEffect)((function(){r&&n&&n("/")}),[r,n]);var h=function(){(0,s.ZD)().then((function(e){var t;if(null!==e&&void 0!==e&&null!==(t=e.kakao_account)&&void 0!==t&&t.email){var l,c,o,u={username:null===e||void 0===e||null===(l=e.kakao_account)||void 0===l||null===(c=l.profile)||void 0===c?void 0:c.nickname,email:null===e||void 0===e||null===(o=e.kakao_account)||void 0===o?void 0:o.email};(0,v.a0)(u).then((function(n){a(!1),b(!0)})).catch((function(e){var t;a(!1),403===(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status)?window.alert("\uc2b9\uc778\ub418\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790\uc785\ub2c8\ub2e4.\u26d4\ufe0f \uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud574\uc8fc\uc138\uc694."):window.alert("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\ud83d\ude14 \uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud574\uc8fc\uc138\uc694."),(0,s.TX)().then((function(){return n("/login")}))}))}else a(!1),(0,s.Go)(),window.alert("\ub85c\uadf8\uc778\uc744 \uc704\ud574 \uc774\uba54\uc77c \uc815\ubcf4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.\ud83d\ude14 \uc774\uba54\uc77c \uc81c\uacf5 \ub3d9\uc758\ub97c \uc2b9\uc778\ud574\uc8fc\uc138\uc694.")})).catch((function(n){window.alert("\uce74\uce74\uc624 \ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc5b4\uc694.\ud83d\ude14 \uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud574\uc8fc\uc138\uc694.")}))};return(0,k.jsx)(g,{children:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(C.Z,{title:"\uace0\uc601\uc774 \uac00\uacc4\ubd80"}),(0,k.jsx)(T,{children:(0,k.jsx)(f,{children:"\uce74\uce74\uc624 \ub85c\uadf8\uc778\uc774 \ud544\uc694\ud574\uc694"})}),(0,k.jsx)(i.Z,{buttonType:"kakao",onClick:function(){a(!0),(0,s.lk)(h)},children:(0,k.jsx)("img",{src:"data:image/png;base64,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",alt:"kakaoLogin"})}),(0,k.jsx)(x.Z,{loading:l})]})})}var g=r.Z.div(l||(l=(0,o.Z)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n  padding-bottom: 100px;\n"]))),T=r.Z.div(a||(a=(0,o.Z)(["\n  text-align: center;\n"]))),f=r.Z.div(c||(c=(0,o.Z)(["\n  margin-top: 20px;\n"])))}}]);
//# sourceMappingURL=367.04a13e80.chunk.js.map