/*! For license information please see 395.f47ba193.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkaccount_book=self.webpackChunkaccount_book||[]).push([[395],{618:function(e,n,t){t.d(n,{a:function(){return c},z:function(){return i}});var r=t(4569),o=t.n(r)().create({baseURL:"https://blog-imki123-backend.herokuapp.com/accountBook/user/",withCredentials:!0}),c=function(e){return o.post("/checkEmail",e)},i=function(){return o.post("/checkToken")}},6095:function(e,n,t){t.d(n,{Z:function(){return p}});var r,o,c,i=t(168),a=t(208),u=t(6871),l=t(260),f=t(1833),s=t(184);function p(e){var n=e.title,t=e.backButton,r=e.backFunction,o=(0,u.s0)();return(0,s.jsxs)(d,{children:[t&&(0,s.jsx)(y,{fontSize:"inherit",onClick:function(){return r?r():o(-1)}}),n&&"undefined"!==n&&(0,s.jsx)(b,{children:n})]})}var d=a.Z.div(r||(r=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  height: 38.5px;\n  max-width: 500px;\n\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 20px;\n  padding: 10px 20px 10px;\n  border-bottom: 1px solid ",";\n  background: white;\n  @media (min-width: 500px) {\n    border: 1px solid ",";\n    border-top: 0;\n  }\n"])),f.w.greenLine,f.w.greenLine),y=(0,a.Z)(l.Z)(o||(o=(0,i.Z)(["\n  cursor: pointer;\n  &::active {\n    background: #eee;\n  }\n"]))),b=a.Z.span(c||(c=(0,i.Z)(["\n  font-weight: 700;\n"])))},4395:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var r=t(168),o=t(2791),c=t.t(o,2),i=t(4942);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l=t(3366);t(76),t(2110);var f=t(1346);c.useInsertionEffect?c.useInsertionEffect:o.useLayoutEffect;function s(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,f.O)(n)}var p,d,y,b=t(208),m=t(184),g=["onClick","children"];function v(e){var n=e.onClick,t=e.children,r=function(e,n){if(null==e)return{};var t,r,o=(0,l.Z)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,g);return(0,m.jsx)(C,u(u({onClick:n},r),{},{children:(0,m.jsx)(O,{children:t})}))}var x,h,A,C=b.Z.button(p||(p=(0,r.Z)(["\n  border: 0px;\n  cursor: pointer;\n  background: #33f;\n  color: #fff;\n  height: 44px;\n  font-size: 16px;\n  border-radius: 8px;\n  padding: 4px 8px;\n  overflow: hidden;\n\n  ","\n\n  ","\n  ","\n\n  ","\n"])),(function(e){var n=e.buttonType;return"gray"===n?"background: #333":"kakao"===n?"background: #fee500; color: rgba(0,0,0,0.85); padding: 0; height: 45px;":void 0}),(function(e){var n=e.height;return n&&"height: ".concat(n,"px;")}),(function(e){var n=e.fontSize;return n&&"font-size: ".concat(n,"px;")}),(function(e){var n=e.styles;return n&&s(d||(d=(0,r.Z)(["\n      ","\n    "])),n)})),O=b.Z.span(y||(y=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  height: 100%;\n  font: inherit;\n"]))),k=t(1163),w=t(6871),S=t(6095),j=t(618),P=t(7923);function T(){var e=(0,w.s0)(),n=(0,o.useMemo)((function(){return(0,P.WX)()}),[]);(0,o.useEffect)((function(){console.log("cookieFe:",n),n&&e("/")}),[n,e]);var t=function(){(0,k.ZD)().then((function(n){var t;if(null!==n&&void 0!==n&&null!==(t=n.kakao_account)&&void 0!==t&&t.email){var r,o,c,i={username:null===n||void 0===n||null===(r=n.kakao_account)||void 0===r||null===(o=r.profile)||void 0===o?void 0:o.nickname,email:null===n||void 0===n||null===(c=n.kakao_account)||void 0===c?void 0:c.email};(0,j.a)(i).then((function(n){(0,P.Uq)(n.data),e("/")})).catch((function(e){var n;(0,P.mb)(),403===(null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.status)?window.alert("\uc2b9\uc778\ub418\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790\uc785\ub2c8\ub2e4.\u26d4\ufe0f \uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud574\uc8fc\uc138\uc694."):window.alert("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\ud83d\ude14 \uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud574\uc8fc\uc138\uc694.")}))}else window.alert("\uc774\uba54\uc77c \uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ub85c\uadf8\uc778\uc744 \uc704\ud574 \uc774\uba54\uc77c \uc815\ubcf4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.")})).catch((function(e){window.alert("\uce74\uce74\uc624 \ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc5b4\uc694.\ud83d\ude14 \uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud574\uc8fc\uc138\uc694.")}))};return(0,m.jsx)(Z,{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(S.Z,{title:"\uace0\uc601\uc774 \uac00\uacc4\ubd80"}),(0,m.jsx)(B,{children:(0,m.jsx)(N,{children:"\uce74\uce74\uc624 \ub85c\uadf8\uc778\uc774 \ud544\uc694\ud574\uc694"})}),(0,m.jsx)(v,{buttonType:"kakao",onClick:function(){return(0,k.lk)(t)},children:(0,m.jsx)("img",{src:"data:image/png;base64,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",alt:"kakaoLogin"})})]})})}var Z=b.Z.div(x||(x=(0,r.Z)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n  padding-bottom: 100px;\n"]))),B=b.Z.div(h||(h=(0,r.Z)(["\n  text-align: center;\n"]))),N=b.Z.div(A||(A=(0,r.Z)(["\n  margin-top: 20px;\n"])))},2110:function(e,n,t){var r=t(7441),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function u(e){return r.isMemo(e)?i:a[e.$$typeof]||o}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=i;var l=Object.defineProperty,f=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(n,t,r){if("string"!==typeof t){if(y){var o=d(t);o&&o!==y&&e(n,o,r)}var i=f(t);s&&(i=i.concat(s(t)));for(var a=u(n),b=u(t),m=0;m<i.length;++m){var g=i[m];if(!c[g]&&(!r||!r[g])&&(!b||!b[g])&&(!a||!a[g])){var v=p(t,g);try{l(n,g,v)}catch(x){}}}}return n}},1372:function(e,n){var t="function"===typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,o=t?Symbol.for("react.portal"):60106,c=t?Symbol.for("react.fragment"):60107,i=t?Symbol.for("react.strict_mode"):60108,a=t?Symbol.for("react.profiler"):60114,u=t?Symbol.for("react.provider"):60109,l=t?Symbol.for("react.context"):60110,f=t?Symbol.for("react.async_mode"):60111,s=t?Symbol.for("react.concurrent_mode"):60111,p=t?Symbol.for("react.forward_ref"):60112,d=t?Symbol.for("react.suspense"):60113,y=t?Symbol.for("react.suspense_list"):60120,b=t?Symbol.for("react.memo"):60115,m=t?Symbol.for("react.lazy"):60116,g=t?Symbol.for("react.block"):60121,v=t?Symbol.for("react.fundamental"):60117,x=t?Symbol.for("react.responder"):60118,h=t?Symbol.for("react.scope"):60119;function A(e){if("object"===typeof e&&null!==e){var n=e.$$typeof;switch(n){case r:switch(e=e.type){case f:case s:case c:case a:case i:case d:return e;default:switch(e=e&&e.$$typeof){case l:case p:case m:case b:case u:return e;default:return n}}case o:return n}}}function C(e){return A(e)===s}n.AsyncMode=f,n.ConcurrentMode=s,n.ContextConsumer=l,n.ContextProvider=u,n.Element=r,n.ForwardRef=p,n.Fragment=c,n.Lazy=m,n.Memo=b,n.Portal=o,n.Profiler=a,n.StrictMode=i,n.Suspense=d,n.isAsyncMode=function(e){return C(e)||A(e)===f},n.isConcurrentMode=C,n.isContextConsumer=function(e){return A(e)===l},n.isContextProvider=function(e){return A(e)===u},n.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},n.isForwardRef=function(e){return A(e)===p},n.isFragment=function(e){return A(e)===c},n.isLazy=function(e){return A(e)===m},n.isMemo=function(e){return A(e)===b},n.isPortal=function(e){return A(e)===o},n.isProfiler=function(e){return A(e)===a},n.isStrictMode=function(e){return A(e)===i},n.isSuspense=function(e){return A(e)===d},n.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===c||e===s||e===a||e===i||e===d||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===b||e.$$typeof===u||e.$$typeof===l||e.$$typeof===p||e.$$typeof===v||e.$$typeof===x||e.$$typeof===h||e.$$typeof===g)},n.typeOf=A},7441:function(e,n,t){e.exports=t(1372)}}]);
//# sourceMappingURL=395.f47ba193.chunk.js.map