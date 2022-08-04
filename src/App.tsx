import styled from '@emotion/styled'
import React, { Suspense, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { getUser } from './api/account'
import useLogin from './hook/useLogin'
import { Colors } from './util/Colors'

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
  const [username, setUsername] = useState<string>()
  // 로그인여부 체크해서 로그인 페이지로 보내기
  const { isLogin, replaceLoginPage } = useLogin()

  useEffect(() => {
    if (location.pathname !== '/login' && !isLogin) {
      replaceLoginPage()
    }
  }, [isLogin, location, replaceLoginPage])

  useEffect(() => {
    if (isLogin) {
      getUser().then((res) => setUsername(res.data.username))
    }
  }, [isLogin])

  return (
    <Suspense fallback={<FallBackDiv>Loading...</FallBackDiv>}>
      <MobileWrapper>
        {username && <UsernameDiv>{username}</UsernameDiv>}
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='sheet/:sheetId' element={<SheetPage />} />
        </Routes>
      </MobileWrapper>
      <FakeInput className='fakeInput' />
    </Suspense>
  )
}

export default App

const FallBackDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
const UsernameDiv = styled.div`
  position: fixed;
  z-index: 1;
  top: 10px;
  right: 10px;
  @media (min-width: 500px) {
    right: calc(50% - 240px);
  }
  font-size: 12px;
`
const MobileWrapper = styled.div`
  position: relative;
  background: #fff;
  width: 100%;
  height: 100%;
  max-width: 500px;
  margin: auto;
  padding: calc(27.5px + 20px) 20px 10px;
  overflow: auto;
  font-size: 14px;
  @media (min-width: 500px) {
    border: 1px solid ${Colors.greenLine};
  }
`
const FakeInput = styled.input`
  position: fixed;
  border: 0;
  outline: none;
  opacity: 0;
  height: 0;
  width: 0;
  font-size: inherit;
`
