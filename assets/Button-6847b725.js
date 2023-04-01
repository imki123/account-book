import{s as M,a as g,n as h}from"./index-213b1002.js";var $={},P={get exports(){return $},set exports(e){$=e}},r={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=typeof Symbol=="function"&&Symbol.for,S=t?Symbol.for("react.element"):60103,b=t?Symbol.for("react.portal"):60106,c=t?Symbol.for("react.fragment"):60107,s=t?Symbol.for("react.strict_mode"):60108,u=t?Symbol.for("react.profiler"):60114,i=t?Symbol.for("react.provider"):60109,p=t?Symbol.for("react.context"):60110,x=t?Symbol.for("react.async_mode"):60111,a=t?Symbol.for("react.concurrent_mode"):60111,l=t?Symbol.for("react.forward_ref"):60112,y=t?Symbol.for("react.suspense"):60113,T=t?Symbol.for("react.suspense_list"):60120,m=t?Symbol.for("react.memo"):60115,d=t?Symbol.for("react.lazy"):60116,A=t?Symbol.for("react.block"):60121,E=t?Symbol.for("react.fundamental"):60117,F=t?Symbol.for("react.responder"):60118,I=t?Symbol.for("react.scope"):60119;function o(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case S:switch(e=e.type,e){case x:case a:case c:case u:case s:case y:return e;default:switch(e=e&&e.$$typeof,e){case p:case l:case d:case m:case i:return e;default:return n}}case b:return n}}}function v(e){return o(e)===a}r.AsyncMode=x;r.ConcurrentMode=a;r.ContextConsumer=p;r.ContextProvider=i;r.Element=S;r.ForwardRef=l;r.Fragment=c;r.Lazy=d;r.Memo=m;r.Portal=b;r.Profiler=u;r.StrictMode=s;r.Suspense=y;r.isAsyncMode=function(e){return v(e)||o(e)===x};r.isConcurrentMode=v;r.isContextConsumer=function(e){return o(e)===p};r.isContextProvider=function(e){return o(e)===i};r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===S};r.isForwardRef=function(e){return o(e)===l};r.isFragment=function(e){return o(e)===c};r.isLazy=function(e){return o(e)===d};r.isMemo=function(e){return o(e)===m};r.isPortal=function(e){return o(e)===b};r.isProfiler=function(e){return o(e)===u};r.isStrictMode=function(e){return o(e)===s};r.isSuspense=function(e){return o(e)===y};r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===c||e===a||e===u||e===s||e===y||e===T||typeof e=="object"&&e!==null&&(e.$$typeof===d||e.$$typeof===m||e.$$typeof===i||e.$$typeof===p||e.$$typeof===l||e.$$typeof===E||e.$$typeof===F||e.$$typeof===I||e.$$typeof===A)};r.typeOf=o;(function(e){e.exports=r})(P);var C=$,_={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},z={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},w={};w[C.ForwardRef]=_;w[C.Memo]=z;function R(){for(var e=arguments.length,n=new Array(e),f=0;f<e;f++)n[f]=arguments[f];return M(n)}function O({onClick:e,children:n,...f}){return g(j,{onClick:e,...f,children:g(k,{children:n})})}const j=h.button`
  border: 0px;
  background: #33f;
  color: #fff;
  height: 44px;
  font-size: 16px;
  border-radius: 8px;
  padding: 4px 8px;
  overflow: hidden;

  ${({buttonType:e})=>{if(e==="gray")return"background: #333";if(e==="kakao")return"background: #fee500; color: rgba(0,0,0,0.85); padding: 0; height: 45px;"}}

  ${({height:e})=>e&&`height: ${e}px;`}
  ${({fontSize:e})=>e&&`font-size: ${e}px;`}

  ${({styles:e})=>e&&R`
      ${e}
    `}
`,k=h.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 100%;
  font: inherit;
`;export{O as B};
