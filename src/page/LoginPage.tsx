import React, { useEffect, useMemo, useState } from 'react'
import Button from '../component/Button/Button'
import kakao_login_medium_narrow from '../asset/kakao_login_medium_narrow.png'
import styled from '@emotion/styled'
import { getKakaoUser, kakaoAppLogin } from '../util/kakaoSdk'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import Header from '../component/Header/Header'
import { css } from '@emotion/react'

export default function HomePage() {
  const navigate = useNavigate()
  const [loginUser, setLoginUser] = useState<any>(null)
  const kakaoUser = useMemo(() => Cookies.get('kakaoUser'), [])

  useEffect(() => {
    if (kakaoUser) {
      console.log('kakaoUser:', kakaoUser)
      // navigate('/')
    }
    if (loginUser) {
      console.log('loginUser:', loginUser)
      navigate('/')
    }
  }, [kakaoUser, loginUser, navigate])

  const loginCallback = () => {
    getKakaoUser()
      .then((res) => {
        setLoginUser(JSON.stringify(res))
        Cookies.set('kakaoUser', JSON.stringify(res), {
          expires: 7, // days
        })
      })
      .catch((err) => {
        console.error(err)
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
        <div>
          {kakaoUser &&
            React.Children.toArray(
              JSON.stringify(kakaoUser)
                //.replace(/[{|}]/g, '')
                .split(',')
                .map((i) => <div>{i}</div>),
            )}
        </div>
        {kakaoUser && (
          <div>
            <Button
              onClick={() => navigate('/')}
              styles={css`
                width: 120px;
              `}
            >
              홈으로
            </Button>
          </div>
        )}
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
