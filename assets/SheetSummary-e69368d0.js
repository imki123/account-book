import{S as se,s as L,t as ne,v as D,w as z,x as ie,y as ue,z as ae,B as N,D as ce,E as w,r as g,G as oe,H as le,i as he,l as de,m as fe,a as c,j as E,R as O,n as R,C as T,q as _,F as V}from"./index-2a6b3420.js";import{c as $,p as pe,i as M,l as F,d as ye,b as k,s as me}from"./util-3a891df5.js";import{g as J,p as ve}from"./type-72ca4024.js";import{O as ge}from"./open-color-d21ec5f6.js";class Re extends se{constructor(t,r){super(),this.client=t,this.options=r,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(r)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),H(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return W(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return W(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,r){const s=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),L(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const n=this.hasListeners();n&&K(this.currentQuery,i,this.options,s)&&this.executeFetch(),this.updateResult(r),n&&(this.currentQuery!==i||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const u=this.computeRefetchInterval();n&&(this.currentQuery!==i||this.options.enabled!==s.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)}getOptimisticResult(t){const r=this.client.getQueryCache().build(this.client,t),s=this.createResult(r,t);return Se(this,s,t)&&(this.currentResult=s,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),s}getCurrentResult(){return this.currentResult}trackResult(t){const r={};return Object.keys(t).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),t[s])})}),r}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...r}={}){return this.fetch({...r,meta:{refetchPage:t}})}fetchOptimistic(t){const r=this.client.defaultQueryOptions(t),s=this.client.getQueryCache().build(this.client,r);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,r))}fetch(t){var r;return this.executeFetch({...t,cancelRefetch:(r=t.cancelRefetch)!=null?r:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let r=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(r=r.catch(ne)),r}updateStaleTimeout(){if(this.clearStaleTimeout(),D||this.currentResult.isStale||!z(this.options.staleTime))return;const r=ie(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},r)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(D||this.options.enabled===!1||!z(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||ue.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,r){const s=this.currentQuery,i=this.options,n=this.currentResult,u=this.currentResultState,a=this.currentResultOptions,h=t!==s,m=h?t.state:this.currentQueryInitialState,p=h?this.currentResult:this.previousQueryResult,{state:d}=t;let{dataUpdatedAt:x,error:C,errorUpdatedAt:I,fetchStatus:y,status:o}=d,l=!1,v=!1,f;if(r._optimisticResults){const S=this.hasListeners(),P=!S&&H(t,r),re=S&&K(t,s,r,i);(P||re)&&(y=ae(t.options.networkMode)?"fetching":"paused",x||(o="loading")),r._optimisticResults==="isRestoring"&&(y="idle")}if(r.keepPreviousData&&!d.dataUpdatedAt&&p!=null&&p.isSuccess&&o!=="error")f=p.data,x=p.dataUpdatedAt,o=p.status,l=!0;else if(r.select&&typeof d.data<"u")if(n&&d.data===(u==null?void 0:u.data)&&r.select===this.selectFn)f=this.selectResult;else try{this.selectFn=r.select,f=r.select(d.data),f=N(n==null?void 0:n.data,f,r),this.selectResult=f,this.selectError=null}catch(S){this.selectError=S}else f=d.data;if(typeof r.placeholderData<"u"&&typeof f>"u"&&o==="loading"){let S;if(n!=null&&n.isPlaceholderData&&r.placeholderData===(a==null?void 0:a.placeholderData))S=n.data;else if(S=typeof r.placeholderData=="function"?r.placeholderData():r.placeholderData,r.select&&typeof S<"u")try{S=r.select(S),this.selectError=null}catch(P){this.selectError=P}typeof S<"u"&&(o="success",f=N(n==null?void 0:n.data,S,r),v=!0)}this.selectError&&(C=this.selectError,f=this.selectResult,I=Date.now(),o="error");const b=y==="fetching",A=o==="loading",U=o==="error";return{status:o,fetchStatus:y,isLoading:A,isSuccess:o==="success",isError:U,isInitialLoading:A&&b,data:f,dataUpdatedAt:x,error:C,errorUpdatedAt:I,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>m.dataUpdateCount||d.errorUpdateCount>m.errorUpdateCount,isFetching:b,isRefetching:b&&!A,isLoadingError:U&&d.dataUpdatedAt===0,isPaused:y==="paused",isPlaceholderData:v,isPreviousData:l,isRefetchError:U&&d.dataUpdatedAt!==0,isStale:j(t,r),refetch:this.refetch,remove:this.remove}}updateResult(t){const r=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,L(s,r))return;this.currentResult=s;const i={cache:!0},n=()=>{if(!r)return!0;const{notifyOnChangeProps:u}=this.options,a=typeof u=="function"?u():u;if(a==="all"||!a&&!this.trackedProps.size)return!0;const h=new Set(a??this.trackedProps);return this.options.useErrorBoundary&&h.add("error"),Object.keys(this.currentResult).some(m=>{const p=m;return this.currentResult[p]!==r[p]&&h.has(p)})};(t==null?void 0:t.listeners)!==!1&&n()&&(i.listeners=!0),this.notify({...i,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const r=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(r==null||r.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const r={};t.type==="success"?r.onSuccess=!t.manual:t.type==="error"&&!ce(t.error)&&(r.onError=!0),this.updateResult(r),this.hasListeners()&&this.updateTimers()}notify(t){w.batch(()=>{if(t.onSuccess){var r,s,i,n;(r=(s=this.options).onSuccess)==null||r.call(s,this.currentResult.data),(i=(n=this.options).onSettled)==null||i.call(n,this.currentResult.data,null)}else if(t.onError){var u,a,h,m;(u=(a=this.options).onError)==null||u.call(a,this.currentResult.error),(h=(m=this.options).onSettled)==null||h.call(m,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function be(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function H(e,t){return be(e,t)||e.state.dataUpdatedAt>0&&W(e,t,t.refetchOnMount)}function W(e,t,r){if(t.enabled!==!1){const s=typeof r=="function"?r(e):r;return s==="always"||s!==!1&&j(e,t)}return!1}function K(e,t,r,s){return r.enabled!==!1&&(e!==t||s.enabled===!1)&&(!r.suspense||e.state.status!=="error")&&j(e,r)}function j(e,t){return e.isStaleByTime(t.staleTime)}function Se(e,t,r){return r.keepPreviousData?!1:r.placeholderData!==void 0?t.isPlaceholderData:!L(e.getCurrentResult(),t)}var X={exports:{}},Y={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q=g;function xe(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ce=typeof Object.is=="function"?Object.is:xe,Ee=Q.useState,Qe=Q.useEffect,Ie=Q.useLayoutEffect,we=Q.useDebugValue;function Te(e,t){var r=t(),s=Ee({inst:{value:r,getSnapshot:t}}),i=s[0].inst,n=s[1];return Ie(function(){i.value=r,i.getSnapshot=t,B(i)&&n({inst:i})},[e,r,t]),Qe(function(){return B(i)&&n({inst:i}),e(function(){B(i)&&n({inst:i})})},[e]),we(r),r}function B(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ce(e,r)}catch{return!0}}function ke(e,t){return t()}var Oe=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ke:Te;Y.useSyncExternalStore=Q.useSyncExternalStore!==void 0?Q.useSyncExternalStore:Oe;X.exports=Y;var Fe=X.exports;const Ae=Fe.useSyncExternalStore,Z=g.createContext(!1),Ue=()=>g.useContext(Z);Z.Provider;function Pe(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const $e=g.createContext(Pe()),Be=()=>g.useContext($e);function Le(e,t){return typeof e=="function"?e(...t):!!e}const Me=(e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},We=e=>{g.useEffect(()=>{e.clearReset()},[e])},je=({result:e,errorResetBoundary:t,useErrorBoundary:r,query:s})=>e.isError&&!t.isReset()&&!e.isFetching&&Le(r,[e.error,s]),qe=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},De=(e,t)=>e.isLoading&&e.isFetching&&!t,ze=(e,t,r)=>(e==null?void 0:e.suspense)&&De(t,r),Ne=(e,t,r)=>t.fetchOptimistic(e).then(({data:s})=>{e.onSuccess==null||e.onSuccess(s),e.onSettled==null||e.onSettled(s,null)}).catch(s=>{r.clearReset(),e.onError==null||e.onError(s),e.onSettled==null||e.onSettled(void 0,s)});function _e(e,t){const r=oe({context:e.context}),s=Ue(),i=Be(),n=r.defaultQueryOptions(e);n._optimisticResults=s?"isRestoring":"optimistic",n.onError&&(n.onError=w.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=w.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=w.batchCalls(n.onSettled)),qe(n),Me(n,i),We(i);const[u]=g.useState(()=>new t(r,n)),a=u.getOptimisticResult(n);if(Ae(g.useCallback(h=>{const m=s?()=>{}:u.subscribe(w.batchCalls(h));return u.updateResult(),m},[u,s]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),g.useEffect(()=>{u.setOptions(n,{listeners:!1})},[n,u]),ze(n,a,s))throw Ne(n,u,i);if(je({result:a,errorResetBoundary:i,useErrorBoundary:n.useErrorBoundary,query:u.getCurrentQuery()}))throw a.error;return n.notifyOnChangeProps?a:u.trackResult(a)}function Ve(e,t,r){const s=le(e,t,r);return _e(s,Re)}var q={},He=de;Object.defineProperty(q,"__esModule",{value:!0});var ee=q.default=void 0,Ke=He(he()),Ge=fe;ee=q.default=(0,Ke.default)((0,Ge.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"AddCircleOutline");function pt({sheetData:e,setSheetData:t,addRow:r,removeRow:s,changeRef:i,readOnly:n=!1}){var I;let u=BigInt(0);const[a,h]=g.useState([]),[m,p]=g.useState(!0);g.useEffect(()=>{J().then(y=>{h(y.types)})},[]);const d=g.useCallback(()=>{if(m){const y=document.querySelectorAll("input.autoWidth");y&&y.forEach(l=>{$(l)});const o=document.querySelectorAll("select.autoWidth");o&&o.forEach(l=>{$(l,!0)}),p(!1)}},[m]);g.useEffect(()=>{m&&e&&(a==null?void 0:a.length)>0&&d()},[m,d,e,a]);const x=(y,o,l,v=!1)=>{if(i&&(i.current=!0),y.target){$(y.target,v);const f=ve(b=>{if(b&&b.table&&b.table[o])return b.table[o][l]=y.target.value,b},e);t(f)}},C=y=>{let o="";return a.forEach(({type:l,background:v})=>{y&&l&&y.includes(l)&&(v!=null&&v.startsWith("#")?o=v:o=`#${v}`)}),o};return c(Je,{children:c("table",{children:E("tbody",{children:[E("tr",{children:[n?c("th",{}):c("th",{onClick:()=>r&&r(0),children:c(G,{fontSize:"small"})}),c("th",{children:"번호"}),c("th",{children:"유형"}),c("th",{children:"날짜"}),c("th",{children:"제목"}),c("th",{children:"가격"}),c("th",{children:"합계"}),c("th",{})]}),O.Children.toArray((I=e==null?void 0:e.table)==null?void 0:I.map((y,o)=>E("tr",{id:`row_${o+1}`,children:[n?c("td",{}):c("td",{onClick:()=>{r&&r(o+1)},children:c(G,{fontSize:"small"})}),c("td",{children:o+1}),O.Children.toArray(y.map((l,v)=>v===0?c("td",{children:n?c(et,{value:l,background:C(l),height:"20px",children:l}):c(Ze,{className:"autoWidth",value:l,background:C(l),onChange:f=>x(f,o,v,!0),height:"27px",children:O.Children.toArray(a.map(({type:f},b)=>c("option",{value:f,children:b===0?"":`${b}.${f}`})))})}):(v===3&&(u+=pe(l)),c("td",{children:n?v===3&&M(l)&&l!==""?F(l):l.toString():c(Ye,{className:"autoWidth",numCheck:v===3,value:v===3&&M(l)&&l!==""?F(l):l.toString(),height:"28px",onChange:f=>x(f,o,v)})})))),c("td",{children:F(u)}),n?c("td",{}):c("td",{onClick:()=>s&&s(o+1),children:c(Xe,{fontSize:"small"})})]})))]})})})}const Je=R.div`
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
    animation: blink ${_}ms;
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
    animation: blinkRed ${_}ms;
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
`,G=R(ee)`
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
`;var te=(e=>(e.getSheet="getSheet",e.getType="getType",e))(te||{});const tt=e=>Ve([te.getType],J,e);function yt({sheetData:e,setSheetData:t}){const r=g.useRef(0),s=g.useRef(0),{data:i}=tt(),n=g.useMemo(()=>{var u;if(i){const a=i==null?void 0:i.types.map(({type:h})=>({type:h,amount:0}));return r.current=0,s.current=0,(u=e==null?void 0:e.table)==null||u.forEach((h,m)=>{var p,d,x;s.current+=k(h[3]),((p=h[0])!=null&&p.includes("월급")||(d=h[0])!=null&&d.includes("수입"))&&(r.current+=k(h[3])),((x=h[0])==null?void 0:x.trim())!==""&&a.forEach(C=>{C.type.includes(h[0])&&(C.amount+=k(h[3]))})}),a}return[]},[e==null?void 0:e.table,i]);return c(rt,{children:n.length>0?E(V,{children:[c(st,{children:"요약"}),c(nt,{children:O.Children.toArray(n.map((u,a)=>{var h,m,p;return c(V,{children:((h=n[a])==null?void 0:h.amount)!==0&&E(it,{children:[c(ut,{children:a!==0&&`${a}.${u.type}`}),E(at,{children:[`${F((m=n[a])==null?void 0:m.amount)} 원`,c(ct,{children:`${Math.abs(me(k((p=n[a])==null?void 0:p.amount)*100/(r.current!==0?r.current:s.current),2))}%`})]})]})})}))})]}):null})}const rt=R.div`
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
`;export{pt as S,yt as a,te as q,Ve as u};
