import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { getKakaoSdk } from './util/kakaoSdk'
import './index.css'

// 카카오 sdk 불러오기
getKakaoSdk()

console.info('ENV:', import.meta.env.VITE_ENV)

if (window.location.pathname === '/') {
  window.location.href = '/account-book'
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
