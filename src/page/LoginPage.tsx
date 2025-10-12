import React, { useRef, useState } from 'react'
import Button from '../component/Button/Button'
import kakao_login_medium_narrow from '../asset/kakao_login_medium_narrow.png'
import styled from '@emotion/styled'
import {
  getKakaoUser,
  kakaoAppLogin,
  removeTokenAndLogoutKakao,
  unlinkKakao,
} from '../util/kakaoSdk'
import { useNavigate } from 'react-router-dom'
import Header from '../component/Header/Header'
import { postLogin } from '../api/accountBook'
import LoadingDim from '../component/LoadingDim/LoadingDim'
import { MOBILE_PADDING } from '../App'
import { AxiosError } from 'axios'
import { ACCOUNT_BOOK_ACCESS_TOKEN } from '../constant/constant'
import { queryClient } from '../api/reactQuery/queryClient'
import { axiosInstance } from '../api/axiosInstance'

export default function LoginPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const timeout = useRef<NodeJS.Timeout>()

  return (
    <StyledLoginPage>
      <>
        <Header title='고영이 가계부' />
        <TitleMessage>
          <Message>카카오 로그인이 필요해요</Message>
        </TitleMessage>
        <Button
          buttonType='kakao'
          onClick={() => {
            kakaoAppLogin(loginKakaoAndCheckEmail, () => {
              window.alert(
                '카카오 로그인에 실패했습니다.😔 관리자에게 문의해주세요.',
              )
            })
          }}
        >
          <img src={kakao_login_medium_narrow} alt='kakaoLogin' />
        </Button>
        <LoadingDim loading={loading} />
      </>
    </StyledLoginPage>
  )

  async function loginKakaoAndCheckEmail() {
    setLoading(true)
    timeout.current = setTimeout(() => {
      setLoading(false)
    }, 5 * 1000)

    try {
      const kakaoUser = await getKakaoUser()
      // 이메일 정보가 없으면 카카오 연결 끊기
      if (!kakaoUser?.kakao_account?.email) {
        setLoading(false)
        await unlinkKakao()
        window.alert(
          '로그인을 위해 이메일 정보가 필요합니다.😔 이메일 제공 동의를 승인해주세요.',
        )
      } else {
        const user = {
          username: kakaoUser?.kakao_account?.profile?.nickname,
          email: kakaoUser?.kakao_account?.email,
        }

        try {
          const loginResponse = await postLogin(user)

          if (loginResponse.data.token) {
            localStorage.setItem(
              ACCOUNT_BOOK_ACCESS_TOKEN,
              loginResponse.data.token,
            )

            setTimeout(() => {
              // 잠시 후 홈으로 이동
              navigate('/')
            }, 500)
          } else {
            await removeTokenAndLogoutKakao()
            window.alert('앱 로그인에 실패했습니다.😔 관리자에게 문의해주세요.')
          }
        } catch (error) {
          window.alert(JSON.stringify(error))
          await removeTokenAndLogoutKakao()
          if (error instanceof AxiosError && error?.response?.status === 403) {
            window.alert(
              '승인되지 않은 사용자입니다.⛔️ 관리자에게 문의해주세요.',
            )
          } else {
            window.alert('앱 로그인에 실패했습니다.😔 관리자에게 문의해주세요.')
          }
        }
      }
    } catch (error) {
      window.alert('카카오 로그인에 실패했습니다.😔')
    } finally {
      setLoading(false)
      clearTimeout(timeout.current)
    }
  }
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
