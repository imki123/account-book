import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { renderGoogleButton } from '../util/googleLogin'
import Header from '../component/Header/Header'

export default function LoginPage() {
  useEffect(() => {
    renderGoogleButton('googleLoginDiv')
  }, [])

  return (
    <StyledLoginPage>
      <Header title='고영이 가계부' />

      <div id='googleLoginDiv'></div>

      <TitleMessage>
        <div>구글 로그인이 필요해요</div>

        <div>허가된 이메일만 로그인이 가능합니다. 관리자에게 문의해주세요.</div>

        <div>관리자: popping2606@gmail.com</div>
      </TitleMessage>
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
  padding: 16px;
  padding-bottom: 100px;
`
const TitleMessage = styled.div`
  text-align: center;
  margin-top: 20px;
`
