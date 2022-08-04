import React, { useEffect, useMemo } from 'react'
import Button from '../component/Button/Button'
import kakao_login_medium_narrow from '../asset/kakao_login_medium_narrow.png'
import styled from '@emotion/styled'
import { getKakaoUser, kakaoAppLogin, unlinkKakao } from '../util/kakaoSdk'
import { useNavigate } from 'react-router-dom'
import Header from '../component/Header/Header'
import { postUserCheckEmail } from '../api/account'
import { getCookieFe, removeCookieFe, setCookieFe } from '../util/cookie'

export default function HomePage() {
  const navigate = useNavigate()
  const cookieFe = useMemo(() => getCookieFe(), [])

  useEffect(() => {
    if (cookieFe) {
      navigate('/')
    }
  }, [cookieFe, navigate])

  const loginCallback = () => {
    getKakaoUser()
      .then((res) => {
        // 카카오 계정 처리
        if (!res?.kakao_account?.email) {
          window.alert(
            '로그인을 위해 이메일 정보가 필요합니다.😔 이메일 제공 동의를 승인해주세요.',
          )
          unlinkKakao() // 카카오 언링크
        } else {
          const user = {
            username: res?.kakao_account?.profile?.nickname,
            email: res?.kakao_account?.email,
          }
          postUserCheckEmail(user)
            .then((res) => {
              setCookieFe(res.data)
              navigate('/')
            })
            .catch((err) => {
              removeCookieFe()
              unlinkKakao() // 카카오 언링크
              if (err?.response?.status === 403) {
                window.alert(
                  '승인되지 않은 사용자입니다.⛔️ 관리자에게 문의해주세요.',
                )
              } else {
                window.alert('오류가 발생했습니다.😔 관리자에게 문의해주세요.')
              }
            })
        }
      })
      .catch((err) => {
        window.alert('카카오 로그인에 실패했어요.😔 관리자에게 문의해주세요.')
      })
  }

  return (
    <StyledHomePage>
      <>
        <Header title='고영이 가계부' />
        <TitleMessage>
          <Message>카카오 로그인이 필요해요</Message>
        </TitleMessage>
        <Button buttonType='kakao' onClick={() => kakaoAppLogin(loginCallback)}>
          <img src={kakao_login_medium_narrow} alt='kakaoLogin' />
        </Button>
      </>
    </StyledHomePage>
  )
}

const StyledHomePage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding-bottom: 100px;
`
const TitleMessage = styled.div`
  text-align: center;
`
const Message = styled.div`
  margin-top: 20px;
`
