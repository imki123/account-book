import styled from '@emotion/styled'
import { QueryClientProvider } from '@tanstack/react-query'
import React, { Suspense, useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { getUser, postCheckToken } from './api/accountBook'
import LoadingDim from './component/LoadingDim/LoadingDim'
import { Colors } from './util/Colors'
import { queryClient } from './api/reactQuery/queryClient'
import { ACCOUNT_BOOK_ACCESS_TOKEN } from './constant/constant'
import { axiosInstance } from './api/axiosInstance'
import { initGoogle } from './util/googleLogin'
import { postLogin } from './api/accountBook'

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

  // 구글 로그인 후 콜백 처리
  function afterLogin() {
    checkTokenAndNavigate()
  }

  // 구글 로그인 함수
  async function loginGoogle(credential: string) {
    try {
      // JWT 토큰을 디코딩하여 사용자 정보 추출
      const payload = JSON.parse(atob(credential.split('.')[1]))

      const user = {
        username: payload.name,
        email: payload.email,
      }

      const loginResponse = await postLogin(user)

      if (loginResponse.data.token) {
        localStorage.setItem(
          ACCOUNT_BOOK_ACCESS_TOKEN,
          loginResponse.data.token,
        )
        return true
      } else {
        throw new Error('토큰을 받을 수 없습니다')
      }
    } catch (error) {
      console.error('구글 로그인 실패:', error)
      throw error
    }
  }

  // 구글 SDK 초기화
  useEffect(() => {
    // 구글 SDK 스크립트 로드
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.onload = () => {
      // SDK 로드 후 약간의 지연을 두고 초기화
      setTimeout(() => {
        initGoogle(loginGoogle, afterLogin)
      }, 100)
    }
    script.onerror = () => {
      console.error('Google SDK 로드 실패')
    }
    document.body.appendChild(script)
  }, [])

  async function checkTokenAndNavigate() {
    if (navigate && location.pathname) {
      setLoading(true)
      try {
        const currentToken = localStorage.getItem(ACCOUNT_BOOK_ACCESS_TOKEN)

        if (!currentToken) {
          if (location.pathname === '/login') {
            return
          }
          navigate('/login', { replace: true })
          return
        }

        const checkedToken = await postCheckToken()

        if (checkedToken.data && checkedToken.data.token !== currentToken) {
          localStorage.setItem(
            ACCOUNT_BOOK_ACCESS_TOKEN,
            checkedToken.data.token,
          )
        }

        setHasToken(!!checkedToken.data.token)
        if (checkedToken.data) {
          const user = await getUser()
          setUsername(user.data.username)

          // 로그인 페이지에서 로그인 성공 시 홈으로 이동
          if (location.pathname === '/login') {
            navigate('/', { replace: true })
          } else {
            navigate(location.pathname, { replace: true })
          }
        } else {
          if (location.pathname === '/login') {
            return
          }
          navigate('/login', { replace: true })
        }
      } catch (e) {
        window.alert('checkToken. 에러 발생. 로그인 실패' + JSON.stringify(e))
        navigate('/login', { replace: true })
      } finally {
        setLoading(false)
      }
    }
  }

  if (pathnameRef.current !== location.pathname) {
    pathnameRef.current = location.pathname
    checkTokenAndNavigate()
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
