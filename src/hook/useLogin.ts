import Cookies from 'js-cookie'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * replace = true 이고 로그인 안되어있으면 로그인 페이지로 이동
 * isLogin, replaceLoginPage() 리턴
 */
export default function useLogin(replace?: boolean) {
  const navigate = useNavigate()
  const kakaoUser = Cookies.get('kakaoUser')
  const replaceLoginPage = useCallback(() => navigate('/login'), [navigate])

  return { isLogin: !!kakaoUser, kakaoUser: kakaoUser, replaceLoginPage }
}
