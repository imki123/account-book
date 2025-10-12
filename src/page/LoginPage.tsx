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
      <TitleMessage>
        <Message>구글 로그인이 필요해요</Message>
      </TitleMessage>
      <div id='googleLoginDiv'></div>
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
`
const Message = styled.div`
  margin-top: 20px;
`
