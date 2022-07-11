import React, { useState } from 'react'
import Button from '../component/Button/Button'
import kakao_login_medium_narrow from '../asset/kakao_login_medium_narrow.png'
import styled from '@emotion/styled'
import { getKakaoUser, kakaoAppLogin } from '../util/kakaoSdk'

export default function HomePage() {
  const [user, setUser] = useState<any>(null)

  const loginCallback = () => {
    getKakaoUser().then((res) => {
      console.log('유저정보', res)
      setUser(res)
    })
  }

  return (
    <StyledHomePage>
      <Title>고영이 가계부</Title>
      <Button buttonType='kakao' onClick={() => kakaoAppLogin(loginCallback)}>
        <img src={kakao_login_medium_narrow} alt='kakaoLogin' />
      </Button>
      <div>
        {user &&
          React.Children.toArray(
            JSON.stringify(user)
              //.replace(/[{|}]/g, '')
              .split(',')
              .map((i) => <div>{i}</div>),
          )}
      </div>
    </StyledHomePage>
  )
}

const StyledHomePage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding-bottom: 100px;
`
const Title = styled.div`
  font-size: 30px;
`
