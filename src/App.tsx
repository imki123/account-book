import styled from '@emotion/styled'
import React, { Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import useLogin from './hook/useLogin'

/**
 * 라우트 페이지.
 * 모바일 뷰에 맞게끔 너비 제한.
 * 로그인 안되어있으면 로그인 페이지로 이동시킴.
 */

const HomePage = React.lazy(() => import('./page/HomePage'))
const LoginPage = React.lazy(() => import('./page/LoginPage'))
const SheetPage = React.lazy(() => import('./page/SheetPage'))

function App() {
  const location = useLocation()
  // 로그인여부 체크해서 로그인 페이지로 보내기
  const { isLogin, replaceLoginPage } = useLogin()

  useEffect(() => {
    if (location.pathname !== '/login' && !isLogin) {
      replaceLoginPage()
    }
  }, [isLogin, location, replaceLoginPage])

  return (
    <Suspense fallback={<FallBackDiv>Loading...</FallBackDiv>}>
      <MobileWrapper>
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='sheet/:sheetId' element={<SheetPage />} />
        </Routes>
      </MobileWrapper>
    </Suspense>
  )
}

export default App

const MobileWrapper = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  max-width: 500px;
  margin: auto;
  border: 1px solid #eee;
  padding: 10px 20px;
`
const FallBackDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`
