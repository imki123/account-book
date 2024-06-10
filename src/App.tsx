import styled from '@emotion/styled'
import { QueryClientProvider } from '@tanstack/react-query'
import React, { Suspense, useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { getUser, postCheckSession } from './api/accountBook'
import LoadingDim from './component/LoadingDim/LoadingDim'
import { Colors } from './util/Colors'
import { queryClient } from './api/reactQuery/queryClient'
import { ACCOUNT_BOOK_ACCESS_TOKEN } from './constant/constant'
import { axiosInstance } from './api/axiosInstance'

/**
 * 라우트 페이지.
 * 모바일 뷰에 맞게끔 너비 제한.
 * 로그인 안되어있으면 로그인 페이지로 이동시킴.
 */

const HomePage = React.lazy(() => import('./page/HomePage'))
const LoginPage = React.lazy(() => import('./page/LoginPage'))
const SheetPage = React.lazy(() => import('./page/SheetPage'))
const JoinPage = React.lazy(() => import('./page/JoinPage'))
const TypesPage = React.lazy(() => import('./page/TypesPage'))

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>()
  const [loading, setLoading] = useState<boolean>()
  const [hasToken, setHasToken] = useState<boolean>(false)

  const pathnameRef = React.useRef('')

  // 로그인여부 체크해서 로그인 페이지로 보내기
  async function chechSessionAndNavigate() {
    if (navigate && location.pathname) {
      // console.log('App. pathname:', location.pathname)
      setLoading(true)
      try {
        // 로컬스토리지의 세션 가져오기
        axiosInstance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${localStorage.getItem(ACCOUNT_BOOK_ACCESS_TOKEN)}`

        // 세션이 변경됐으면 업데이트 하기
        const checkedSession = await postCheckSession()
        if (
          checkedSession.data &&
          checkedSession.data !==
            localStorage.getItem(ACCOUNT_BOOK_ACCESS_TOKEN)
        ) {
          localStorage.setItem(ACCOUNT_BOOK_ACCESS_TOKEN, checkedSession.data)
          axiosInstance.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${localStorage.getItem(ACCOUNT_BOOK_ACCESS_TOKEN)}`
        }

        setHasToken(checkedSession.data)
        if (checkedSession.data) {
          // console.log('checkSession. 로그인 되어있음')
          const user = await getUser()
          setUsername(user.data.username)
          navigate(location.pathname, { replace: true })
        } else {
          if (location.pathname === '/login') {
            return
          }
          console.error('checkSession fail')
          navigate('/login', { replace: true })
        }
      } catch (e) {
        window.alert('checkSession. 에러 발생. 로그인 실패' + JSON.stringify(e))
        navigate('/login', { replace: true })
      } finally {
        setLoading(false)
      }
    }
  }

  if (pathnameRef.current !== location.pathname) {
    pathnameRef.current = location.pathname
    chechSessionAndNavigate()
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingDim loading={true} />}>
        <MobileWrapper>
          {username && <UsernameDiv>{username}</UsernameDiv>}
          {!hasToken ? (
            <LoginPage />
          ) : (
            <Routes>
              <Route path='' element={<HomePage />} />
              <Route path='login' element={<LoginPage />} />
              <Route path='sheet/:sheetId' element={<SheetPage />} />
              <Route path='types' element={<TypesPage />} />
              <Route path='join' element={<JoinPage />} />
              <Route path='*' element={<HomePage />} />
            </Routes>
          )}
        </MobileWrapper>
        <FakeInput className='fakeInput' />
        <FakeSelect className='fakeSelect'>
          <option></option>
        </FakeSelect>
        <LoadingDim loading={loading} />
      </Suspense>
    </QueryClientProvider>
  )
}

export default App

export const MOBILE_PADDING = 'padding: calc(27.5px + 20px) 20px 10px;'

const UsernameDiv = styled.div`
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 10px;
  font-size: 12px;
`
const MobileWrapper = styled.div`
  position: relative;
  background: #fff;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  margin: auto;
  overflow: auto;
  font-size: 14px;
  @media (min-width: 1000px) {
    border: 1px solid ${Colors.greenLine};
  }
`
const FakeInput = styled.input`
  position: fixed;
  border: 0;
  padding: 0 2px;
  outline: none;
  opacity: 0;
  height: 0;
  width: 0;
  font: inherit;
`
const FakeSelect = styled.select`
  position: fixed;
  border: 0;
  padding: 0 2px;
  outline: none;
  opacity: 0;
  height: 0;
  font: inherit;
`
