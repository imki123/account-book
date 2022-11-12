/* eslint-disable no-console */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { getKakaoSdk } from './util/kakaoSdk'
// import reportWebVitals from './reportWebVitals';

// 카카오 sdk 불러오기
getKakaoSdk()

console.info('ENV:', process.env.REACT_APP_ENV)

if (window.location.pathname === '/') {
  window.location.href = '/account-book'
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
)
