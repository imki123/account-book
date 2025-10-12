import { AxiosError } from 'axios'
import { userApi } from '../api/userApi'
import { ACCOUNT_BOOK_ACCESS_TOKEN } from '../constant/constant'

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID

export function initGoogle(login, afterLogin) {
  // NOTE: login, afterLogin 콜백을 받아서 구글 로그인 및 로그인 후 콜백 처리. _app.tsx에서 호출
  if (!GOOGLE_CLIENT_ID) {
    console.error('VITE_GOOGLE_CLIENT_ID 환경변수가 설정되지 않았습니다.')
    return
  }

  if (!window.google?.accounts?.id) {
    console.error('Google SDK가 로드되지 않았습니다.')
    return
  }

  try {
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      // 로그인 콜백
      callback: async (response) => {
        try {
          const result = await login?.(response.credential, afterLogin)
          // 로그인 성공 시 afterLogin 호출
          if (result) {
            afterLogin?.()
          }
        } catch (error) {
          console.error('로그인 처리 중 오류:', error)
        }
      },
    })

    window.isInitGoogle = true
  } catch (error) {
    console.error('Google SDK 초기화 실패:', error)
  }
}

export function renderGoogleButton(divId) {
  // 구글로그인 버튼, 원버튼 렌더링하기
  function startRender() {
    const google = window.google
    const element = document.getElementById(divId)

    if (!element) {
      console.error('요소를 찾을 수 없습니다:', divId)
      return
    }

    if (!google?.accounts?.id) {
      console.error('Google SDK가 로드되지 않았습니다.')
      return
    }

    try {
      google.accounts.id.renderButton(
        element,
        { theme: 'outline', size: 'large' }, // customization attributes
      )

      google.accounts.id.prompt() // also display the One Tap dialog
    } catch (error) {
      console.error('Google 버튼 렌더링 실패:', error)
    }
  }

  if (window.isInitGoogle) {
    // init 완료후에 렌더하기
    startRender()
  } else {
    let timeoutId

    let intervalId = setInterval(() => {
      // 구글 초기화 완료될때까지 인터벌 돌려서 렌더하기
      if (window.isInitGoogle) {
        clearInterval(intervalId)
        clearTimeout(timeoutId)
        startRender()
      }
    }, 300)

    timeoutId = setTimeout(() => {
      // 10초 후에는 항상 인터벌 종료
      clearInterval(intervalId)
    }, 1000 * 10)
  }
}

// 구글 로그아웃
export const logoutGoogle = () => {
  return new Promise((resolve, reject) => {
    try {
      if (window.google?.accounts?.id) {
        window.google.accounts.id.disableAutoSelect()
      }
      resolve('구글 로그아웃 성공')
    } catch (error) {
      reject(new Error('구글 로그아웃 실패'))
    }
  })
}

// 구글 토큰과 로그아웃 처리
export const removeGoogleTokenAndLogout = async () => {
  try {
    localStorage.removeItem(ACCOUNT_BOOK_ACCESS_TOKEN)
    await userApi.postLogout()
  } catch (e) {
    window.alert('BE 로그아웃 실패')
    throw e
  }
  try {
    await logoutGoogle()
  } catch (e) {
    console.log('구글 로그아웃 실패')
    throw e
  }
}
