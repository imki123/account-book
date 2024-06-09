import React, { useRef, useState } from 'react'
import Button from '../component/Button/Button'
import kakao_login_medium_narrow from '../asset/kakao_login_medium_narrow.png'
import styled from '@emotion/styled'
import {
  getKakaoUser,
  kakaoAppLogin,
  logoutUser,
  unlinkKakao,
} from '../util/kakaoSdk'
import { useNavigate } from 'react-router-dom'
import Header from '../component/Header/Header'
import { postUserCheckEmail } from '../api/account'
import LoadingDim from '../component/LoadingDim/LoadingDim'
import { MOBILE_PADDING } from '../App'

export default function LoginPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const timeout = useRef<NodeJS.Timeout>()

  const loginCallback = () => {
    getKakaoUser()
      .then(async (res) => {
        // 이메일 정보가 없으면 카카오 연결 끊기
        if (!res?.kakao_account?.email) {
          setLoading(false)
          await unlinkKakao()
          window.alert(
            '로그인을 위해 이메일 정보가 필요합니다.😔 이메일 제공 동의를 승인해주세요.',
          )
        } else {
          const user = {
            username: res?.kakao_account?.profile?.nickname,
            email: res?.kakao_account?.email,
          }
          postUserCheckEmail(user)
            .then((res) => {
              // 로그인 성공. BE 쿠키 등록
              // window.alert('로그인 성공!🎉, BE 쿠키 등록됨')
              setTimeout(() => {
                navigate('/') // 홈으로 이동
              }, 500)
            })
            .catch(async (err) => {
              window.alert(JSON.stringify(err))
              await logoutUser()
              if (err?.response?.status === 403) {
                window.alert(
                  '승인되지 않은 사용자입니다.⛔️ 관리자에게 문의해주세요.',
                )
              } else {
                window.alert(
                  '앱 로그인에 실패했습니다.😔 관리자에게 문의해주세요.',
                )
              }
            })
        }
      })
      .catch((err) => {
        window.alert('카카오 로그인에 실패했습니다.😔 관리자에게 문의해주세요.')
      })
      .finally(() => {
        setLoading(false)
        clearTimeout(timeout.current)
      })
  }

  const handleLogin = () => {
    setLoading(true)
    timeout.current = setTimeout(() => {
      setLoading(false)
    }, 5 * 1000)
    kakaoAppLogin(loginCallback, () => {})
  }

  return (
    <StyledLoginPage>
      <>
        <Header title='고영이 가계부' />
        <TitleMessage>
          <Message>카카오 로그인이 필요해요</Message>
        </TitleMessage>
        <Button buttonType='kakao' onClick={handleLogin}>
          <img src={kakao_login_medium_narrow} alt='kakaoLogin' />
        </Button>
        <Warn>
          일부 브라우저에서 쿠키가 저장 되지 않는 문제가 있습니다.
          <br /> 로그인이 안될 경우, 팝업차단을 해제해주시고,
          <br />
          <strong>크롬, 사파리</strong> 등의 다른 브라우저를 사용해주세요! 🙏
        </Warn>
        <LoadingDim loading={loading} />
      </>
    </StyledLoginPage>
  )
}

const StyledLoginPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  ${MOBILE_PADDING}
  padding-bottom: 100px;
`
const TitleMessage = styled.div`
  text-align: center;
`
const Message = styled.div`
  margin-top: 20px;
`
const Warn = styled.div`
  font-size: 12px;
  margin-top: 12px;
  text-align: center;
  i {
    color: red;
  }
  strong {
    color: blue;
  }
`
