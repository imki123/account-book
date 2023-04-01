import{S as se,h as z,m as ne,o as N,q as _,t as ie,v as ue,w as ae,x as D,y as ce,z as w,r as v,A as oe,B as le,d as he,i as de,e as fe,a,j as E,R as O,n as R,C as T,F as V}from"./index-213b1002.js";import{c as B,p as pe,i as M,l as F,d as ye,b as k,s as me}from"./util-e2d0cb49.js";import{g as X,p as ve}from"./type-1eb63a16.js";import{O as ge}from"./open-color-8f1899fc.js";class Re extends se{constructor(t,r){super(),this.client=t,this.options=r,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(r)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),K(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return L(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return L(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,r){const s=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),z(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const n=this.hasListeners();n&&H(this.currentQuery,i,this.options,s)&&this.executeFetch(),this.updateResult(r),n&&(this.currentQuery!==i||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const u=this.computeRefetchInterval();n&&(this.currentQuery!==i||this.options.enabled!==s.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)}getOptimisticResult(t){const r=this.client.getQueryCache().build(this.client,t);return this.createResult(r,t)}getCurrentResult(){return this.currentResult}trackResult(t){const r={};return Object.keys(t).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),t[s])})}),r}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...r}={}){return this.fetch({...r,meta:{refetchPage:t}})}fetchOptimistic(t){const r=this.client.defaultQueryOptions(t),s=this.client.getQueryCache().build(this.client,r);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,r))}fetch(t){var r;return this.executeFetch({...t,cancelRefetch:(r=t.cancelRefetch)!=null?r:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let r=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(r=r.catch(ne)),r}updateStaleTimeout(){if(this.clearStaleTimeout(),N||this.currentResult.isStale||!_(this.options.staleTime))return;const r=ie(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},r)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(N||this.options.enabled===!1||!_(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||ue.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,r){const s=this.currentQuery,i=this.options,n=this.currentResult,u=this.currentResultState,c=this.currentResultOptions,h=t!==s,y=h?t.state:this.currentQueryInitialState,g=h?this.currentResult:this.previousQueryResult,{state:d}=t;let{dataUpdatedAt:x,error:C,errorUpdatedAt:Q,fetchStatus:p,status:o}=d,l=!1,m=!1,f;if(r._optimisticResults){const S=this.hasListeners(),$=!S&&K(t,r),re=S&&H(t,s,r,i);($||re)&&(p=ae(t.options.networkMode)?"fetching":"paused",x||(o="loading")),r._optimisticResults==="isRestoring"&&(p="idle")}if(r.keepPreviousData&&!d.dataUpdatedAt&&g!=null&&g.isSuccess&&o!=="error")f=g.data,x=g.dataUpdatedAt,o=g.status,l=!0;else if(r.select&&typeof d.data<"u")if(n&&d.data===(u==null?void 0:u.data)&&r.select===this.selectFn)f=this.selectResult;else try{this.selectFn=r.select,f=r.select(d.data),f=D(n==null?void 0:n.data,f,r),this.selectResult=f,this.selectError=null}catch(S){this.selectError=S}else f=d.data;if(typeof r.placeholderData<"u"&&typeof f>"u"&&o==="loading"){let S;if(n!=null&&n.isPlaceholderData&&r.placeholderData===(c==null?void 0:c.placeholderData))S=n.data;else if(S=typeof r.placeholderData=="function"?r.placeholderData():r.placeholderData,r.select&&typeof S<"u")try{S=r.select(S),this.selectError=null}catch($){this.selectError=$}typeof S<"u"&&(o="success",f=D(n==null?void 0:n.data,S,r),m=!0)}this.selectError&&(C=this.selectError,f=this.selectResult,Q=Date.now(),o="error");const b=p==="fetching",A=o==="loading",U=o==="error";return{status:o,fetchStatus:p,isLoading:A,isSuccess:o==="success",isError:U,isInitialLoading:A&&b,data:f,dataUpdatedAt:x,error:C,errorUpdatedAt:Q,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>y.dataUpdateCount||d.errorUpdateCount>y.errorUpdateCount,isFetching:b,isRefetching:b&&!A,isLoadingError:U&&d.dataUpdatedAt===0,isPaused:p==="paused",isPlaceholderData:m,isPreviousData:l,isRefetchError:U&&d.dataUpdatedAt!==0,isStale:j(t,r),refetch:this.refetch,remove:this.remove}}updateResult(t){const r=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,z(s,r))return;this.currentResult=s;const i={cache:!0},n=()=>{if(!r)return!0;const{notifyOnChangeProps:u}=this.options;if(u==="all"||!u&&!this.trackedProps.size)return!0;const c=new Set(u??this.trackedProps);return this.options.useErrorBoundary&&c.add("error"),Object.keys(this.currentResult).some(h=>{const y=h;return this.currentResult[y]!==r[y]&&c.has(y)})};(t==null?void 0:t.listeners)!==!1&&n()&&(i.listeners=!0),this.notify({...i,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const r=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(r==null||r.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const r={};t.type==="success"?r.onSuccess=!t.manual:t.type==="error"&&!ce(t.error)&&(r.onError=!0),this.updateResult(r),this.hasListeners()&&this.updateTimers()}notify(t){w.batch(()=>{if(t.onSuccess){var r,s,i,n;(r=(s=this.options).onSuccess)==null||r.call(s,this.currentResult.data),(i=(n=this.options).onSettled)==null||i.call(n,this.currentResult.data,null)}else if(t.onError){var u,c,h,y;(u=(c=this.options).onError)==null||u.call(c,this.currentResult.error),(h=(y=this.options).onSettled)==null||h.call(y,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(g=>{g(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function be(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function K(e,t){return be(e,t)||e.state.dataUpdatedAt>0&&L(e,t,t.refetchOnMount)}function L(e,t,r){if(t.enabled!==!1){const s=typeof r=="function"?r(e):r;return s==="always"||s!==!1&&j(e,t)}return!1}function H(e,t,r,s){return r.enabled!==!1&&(e!==t||s.enabled===!1)&&(!r.suspense||e.state.status!=="error")&&j(e,r)}function j(e,t){return e.isStaleByTime(t.staleTime)}var W={},Se={get exports(){return W},set exports(e){W=e}},Y={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=v;function xe(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ce=typeof Object.is=="function"?Object.is:xe,Ee=I.useState,Ie=I.useEffect,Qe=I.useLayoutEffect,we=I.useDebugValue;function Te(e,t){var r=t(),s=Ee({inst:{value:r,getSnapshot:t}}),i=s[0].inst,n=s[1];return Qe(function(){i.value=r,i.getSnapshot=t,P(i)&&n({inst:i})},[e,r,t]),Ie(function(){return P(i)&&n({inst:i}),e(function(){P(i)&&n({inst:i})})},[e]),we(r),r}function P(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ce(e,r)}catch{return!0}}function ke(e,t){return t()}var Oe=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ke:Te;Y.useSyncExternalStore=I.useSyncExternalStore!==void 0?I.useSyncExternalStore:Oe;(function(e){e.exports=Y})(Se);const Fe=W.useSyncExternalStore,Z=v.createContext(!1),Ae=()=>v.useContext(Z);Z.Provider;function Ue(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const $e=v.createContext(Ue()),Be=()=>v.useContext($e);function Pe(e,t){return typeof e=="function"?e(...t):!!e}const Me=(e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},Le=e=>{v.useEffect(()=>{e.clearReset()},[e])},We=({result:e,errorResetBoundary:t,useErrorBoundary:r,query:s})=>e.isError&&!t.isReset()&&!e.isFetching&&Pe(r,[e.error,s]),je=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},qe=(e,t)=>e.isLoading&&e.isFetching&&!t,ze=(e,t,r)=>(e==null?void 0:e.suspense)&&qe(t,r),Ne=(e,t,r)=>t.fetchOptimistic(e).then(({data:s})=>{e.onSuccess==null||e.onSuccess(s),e.onSettled==null||e.onSettled(s,null)}).catch(s=>{r.clearReset(),e.onError==null||e.onError(s),e.onSettled==null||e.onSettled(void 0,s)});function _e(e,t){const r=oe({context:e.context}),s=Ae(),i=Be(),n=r.defaultQueryOptions(e);n._optimisticResults=s?"isRestoring":"optimistic",n.onError&&(n.onError=w.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=w.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=w.batchCalls(n.onSettled)),je(n),Me(n,i),Le(i);const[u]=v.useState(()=>new t(r,n)),c=u.getOptimisticResult(n);if(Fe(v.useCallback(h=>s?()=>{}:u.subscribe(w.batchCalls(h)),[u,s]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),v.useEffect(()=>{u.setOptions(n,{listeners:!1})},[n,u]),ze(n,c,s))throw Ne(n,u,i);if(We({result:c,errorResetBoundary:i,useErrorBoundary:n.useErrorBoundary,query:u.getCurrentQuery()}))throw c.error;return n.notifyOnChangeProps?c:u.trackResult(c)}function De(e,t,r){const s=le(e,t,r);return _e(s,Re)}var q={},Ve=de;Object.defineProperty(q,"__esModule",{value:!0});var ee=q.default=void 0,Ke=Ve(he()),He=fe,Ge=(0,Ke.default)((0,He.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");ee=q.default=Ge;const G=300;function pt({sheetData:e,setSheetData:t,addRow:r,removeRow:s,changeRef:i,readOnly:n=!1}){var Q;let u=BigInt(0);const[c,h]=v.useState([]),[y,g]=v.useState(!0);v.useEffect(()=>{X().then(p=>{h(p.types)})},[]);const d=v.useCallback(()=>{if(y){const p=document.querySelectorAll("input.autoWidth");p&&p.forEach(l=>{B(l)});const o=document.querySelectorAll("select.autoWidth");o&&o.forEach(l=>{B(l,!0)}),g(!1)}},[y]);v.useEffect(()=>{y&&e&&(c==null?void 0:c.length)>0&&d()},[y,d,e,c]);const x=(p,o,l,m=!1)=>{if(i&&(i.current=!0),p.target){B(p.target,m);const f=ve(b=>{if(b&&b.table&&b.table[o])return b.table[o][l]=p.target.value,b},e);t(f)}},C=p=>{let o="";return c.forEach(({type:l,background:m})=>{p&&l&&p.includes(l)&&(m!=null&&m.startsWith("#")?o=m:o=`#${m}`)}),o};return a(Je,{children:a("table",{children:E("tbody",{children:[E("tr",{children:[n?a("th",{}):a("th",{onClick:()=>r&&r(0),children:a(J,{fontSize:"small"})}),a("th",{children:"번호"}),a("th",{children:"유형"}),a("th",{children:"날짜"}),a("th",{children:"제목"}),a("th",{children:"가격"}),a("th",{children:"합계"}),a("th",{})]}),O.Children.toArray((Q=e==null?void 0:e.table)==null?void 0:Q.map((p,o)=>E("tr",{id:`row_${o+1}`,children:[n?a("td",{}):a("td",{onClick:()=>{r&&r(o+1)},children:a(J,{fontSize:"small"})}),a("td",{children:o+1}),O.Children.toArray(p.map((l,m)=>m===0?a("td",{children:n?a(et,{value:l,background:C(l),height:"20px",children:l}):a(Ze,{className:"autoWidth",value:l,background:C(l),onChange:f=>x(f,o,m,!0),height:"27px",children:O.Children.toArray(c.map(({type:f},b)=>a("option",{value:f,children:b===0?"":`${b}.${f}`})))})}):(m===3&&(u+=pe(l)),a("td",{children:n?m===3&&M(l)&&l!==""?F(l):l.toString():a(Ye,{className:"autoWidth",numCheck:m===3,value:m===3&&M(l)&&l!==""?F(l):l.toString(),height:"28px",onChange:f=>x(f,o,m)})})))),a("td",{children:F(u)}),n?a("td",{}):a("td",{onClick:()=>s&&s(o+1),children:a(Xe,{fontSize:"small"})})]})))]})})})}const Je=R.div`
  min-width: 100%;
  max-width: 200%;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid ${T.greenLine};
  }
  th {
    background: ${T.greenLine};
  }
  th,
  td {
    border: 1px solid ${T.greenLine};
    white-space: pre;
    text-align: left;
    padding: 2px;
    min-width: 10px;
  }
  .blink {
    @keyframes blink {
      0% {
        background: ${T.greenLine};
      }
      100% {
        background: white;
      }
    }
    animation: blink ${G}ms;
  }
  .blinkRed {
    @keyframes blinkRed {
      0% {
        background: red;
      }
      100% {
        background: white;
      }
    }
    animation: blinkRed ${G}ms;
  }
  th:nth-of-type(5),
  th:nth-of-type(6),
  th:nth-of-type(7) {
    min-width: 60px;
  }
  td:nth-of-type(6),
  td:nth-of-type(7),
  td:nth-of-type(6) input,
  td:nth-of-type(7) input {
    text-align: right;
  }
  td:nth-of-type(3),
  td:nth-of-type(4),
  td:nth-of-type(5),
  td:nth-of-type(6) {
    padding: 0;
  }
  td:nth-of-type(4) input {
    max-width: 30px;
  }
`,J=R(ee)`
  color: #7c7;
`,Xe=R(ye)`
  color: red;
`,Ye=R.input`
  width: 100%;
  min-width: 100%;
  height: ${({height:e})=>e?`${e}`:"100%"};
  padding: 0 2px;
  border: 0;
  border-radius: 0;
  outline: none;
  background: none;
  font: inherit;
  &:focus,
  &:hover,
  &:active {
    background: ${ge.green[0]};
  }
  ${({numCheck:e,value:t})=>e&&!M(t)?"background: #fcc;":""}
`,Ze=R.select`
  width: 100%;
  min-width: 100%;
  height: ${({height:e})=>e?`${e}`:"100%"};
  padding: 0 2px;
  border: 0;
  border-radius: 0;
  outline: none;
  background: transparent;
  color: #222;
  font: inherit;
  background: ${({background:e})=>e};
`,et=R.div`
  height: ${({height:e})=>e?`${e}`:"100%"};
  background: ${({background:e})=>e};
`;var te=(e=>(e.getSheet="getSheet",e.getType="getType",e))(te||{});const tt=e=>De([te.getType],X,e);function yt({sheetData:e,setSheetData:t}){const r=v.useRef(0),s=v.useRef(0),{data:i}=tt(),n=v.useMemo(()=>{var u;if(i){const c=i==null?void 0:i.types.map(({type:h})=>({type:h,amount:0}));return r.current=0,s.current=0,(u=e==null?void 0:e.table)==null||u.forEach((h,y)=>{var g,d,x;s.current+=k(h[3]),((g=h[0])!=null&&g.includes("월급")||(d=h[0])!=null&&d.includes("수입"))&&(r.current+=k(h[3])),((x=h[0])==null?void 0:x.trim())!==""&&c.forEach(C=>{C.type.includes(h[0])&&(C.amount+=k(h[3]))})}),c}return[]},[e==null?void 0:e.table,i]);return a(rt,{children:n.length>0?E(V,{children:[a(st,{children:"요약"}),a(nt,{children:O.Children.toArray(n.map((u,c)=>{var h,y,g;return a(V,{children:((h=n[c])==null?void 0:h.amount)!==0&&E(it,{children:[a(ut,{children:c!==0&&`${c}.${u.type}`}),E(at,{children:[`${F((y=n[c])==null?void 0:y.amount)} 원`,a(ct,{children:`${Math.abs(me(k((g=n[c])==null?void 0:g.amount)*100/(r.current!==0?r.current:s.current),2))}%`})]})]})})}))})]}):null})}const rt=R.div`
  padding: 20px 0;
`,st=R.div`
  font-weight: bold;
`,nt=R.div`
  padding-top: 10px;
  & > div:nth-of-type(2n-1) {
    background: #cec;
  }
`,it=R.div`
  padding: 2px 4px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ut=R.div`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  width: 80px;
  padding-right: 10px;
  border-right: 1px solid #222;
`,at=R.div`
  display: flex;
  padding-left: 10px;
  text-align: right;
  overflow-wrap: anywhere;
`,ct=R.div`
  width: 60px;
  margin-left: 4px;
  border-left: 1px solid #222;
`;export{pt as S,G as a,yt as b,te as q,De as u};
