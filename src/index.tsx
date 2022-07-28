import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { getKakaoSdk } from './util/kakaoSdk'
// import reportWebVitals from './reportWebVitals';

// 카카오 sdk 불러오기
getKakaoSdk()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
