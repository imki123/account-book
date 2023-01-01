import styled from '@emotion/styled'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { Suspense, useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { getUser, postUserCheckToken } from './api/account'
import LoadingDim from './component/LoadingDim/LoadingDim'
import { Colors } from './util/Colors'

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: true,
    },
  },
})

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  // 로그인여부 체크해서 로그인 페이지로 보내기
  const [username, setUsername] = useState<string>()
  const [loading, setLoading] = useState<boolean>()

  useEffect(() => {
    if (navigate && location.pathname) {
      // console.log('App. pathname:', location.pathname)
      setLoading(true)
      postUserCheckToken()
        .then((res) => {
          if (res.data) {
            // console.log('checkToken. 로그인 되어있음')
            getUser().then((res) => {
              // console.log('getUser. 유저정보 가져옴. pathname 이동')
              setUsername(res.data.username)
              if (location.pathname === '/login')
                navigate('/', { replace: true })
              else navigate(location.pathname, { replace: true })
            })
          } else {
            console.error('checkToken. 토큰 없음')
            navigate('/login', { replace: true })
          }
        })
        .catch((e) => {
          // console.log('checkToken. 에러 발생. 로그인 실패')
          window.alert('checkToken. 에러 발생. 로그인 실패')
          navigate('/login', { replace: true })
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [location.pathname, navigate])

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingDim loading={true} />}>
        <MobileWrapper>
          {username && <UsernameDiv>{username}</UsernameDiv>}
          <Routes>
            <Route path='' element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='sheet/:sheetId' element={<SheetPage />} />
            <Route path='types' element={<TypesPage />} />
            <Route path='join' element={<JoinPage />} />
            <Route path='*' element={<HomePage />} />
          </Routes>
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
