import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUser, postUserCheckToken } from '../api/account'

/**
 * replace = true 이고 로그인 안되어있으면 로그인 페이지로 이동
 * isLogin, replaceLoginPage(), goToHomePage() 리턴
 */
export default function useLogin(replace?: boolean) {
  const navigate = useNavigate()
  const replaceLoginPage = useCallback(
    () => navigate('/login', { replace: true }),
    [navigate],
  )
  const replaceToHomePage = useCallback(
    () => navigate('/', { replace: true }),
    [navigate],
  )
  const [isLogin, setIsLogin] = useState(false)
  const [username, setUsername] = useState<string>()

  useEffect(() => {
    postUserCheckToken()
      .then((res) => {
        if (res.data) setIsLogin(true)
        else setIsLogin(false)
      })
      .catch((e) => {
        setIsLogin(false)
      })
  }, [replaceLoginPage])

  useEffect(() => {
    if (isLogin) {
      getUser().then((res) => {
        setUsername(res.data.username)
      })
    }
  }, [isLogin])

  return { isLogin, username, replaceLoginPage, replaceToHomePage }
}
