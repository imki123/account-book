import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postUserCheckToken } from '../api/account'

/**
 * replace = true 이고 로그인 안되어있으면 로그인 페이지로 이동
 * isLogin, replaceLoginPage() 리턴
 */
export default function useLogin(replace?: boolean) {
  const navigate = useNavigate()
  const replaceLoginPage = useCallback(() => navigate('/login'), [navigate])
  const goToHomePage = useCallback(() => navigate('/'), [navigate])
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    postUserCheckToken()
      .then(() => {
        setIsLogin(true)
      })
      .catch((e) => {
        setIsLogin(false)
        replaceLoginPage()
      })
  }, [replaceLoginPage])

  return { isLogin, replaceLoginPage, goToHomePage }
}
