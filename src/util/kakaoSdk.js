/* eslint-disable no-console */
import { postUserLogout } from '../api/account'
let Kakao = window.Kakao

const KAKAO_JS_KEY = process.env.REACT_APP_KAKAO_JS_KEY
const SDK_URL = 'https://developers.kakao.com/sdk/js/kakao.js'

// 카카오 SDK 로드하기
export function getKakaoSdk() {
  const script = document.createElement('script')
  script.src = SDK_URL
  script.onload = initKakaoSdk
  script.onError = () => {
    console.error('Kakao SDK 로드 실패')
  }
  document.body.append(script)
}

// SDK 로드 기다렸다가 callback 실행하기. 10초 이내에 로드 안되면 에러 표시
function waitSdk(callback) {
  let to
  const itv = setInterval(() => {
    if (window.Kakao) {
      Kakao = window.Kakao
      callback()
      clearInterval(itv)
      clearTimeout(to)
    }
  }, 500)
  to = setTimeout(() => {
    console.error('Kakao SDK 로드 실패')
    clearInterval(itv)
    clearTimeout(to)
  }, 10 * 1000)
}

// SDK 로드 후 카카오 초기화 세팅하기
export function initKakaoSdk() {
  waitSdk(() => {
    Kakao.init(KAKAO_JS_KEY)
    if (Kakao.isInitialized()) console.log('Kakao SDK 초기화 성공')
    if (!Kakao.isInitialized()) console.error('Kakao SDK 초기화 실패')
  })
}

// 카카오 로그인 후 앱 로그인
export function kakaoAppLogin(callback, errorCallback) {
  waitSdk(() => {
    Kakao.Auth.login({
      success(res) {
        // console.log('로그인 api 호출', res)
        callback && callback()
      },
      fail(error) {
        console.error('kakao login fail', error)
        errorCallback && errorCallback()
      },
    })
  })
}

// 카카오 유저정보 가져오기
export const getKakaoUser = () => {
  return new Promise((resolve, reject) => {
    waitSdk(() => {
      Kakao.API.request({
        url: '/v2/user/me',
        success(response) {
          resolve(response)
        },
        fail(error) {
          console.error(error)
          reject(error)
        },
      })
    })
  })
}

// 카카오 로그아웃
export const logoutKakao = () => {
  return new Promise((resolve, reject) => {
    waitSdk(() => {
      try {
        if (!Kakao.Auth.getAccessToken()) {
          console.log('Not logged in.')
          return
        }
        Kakao.Auth.logout(function () {
          resolve('logout success')
        })
      } catch (e) {
        reject('logout error')
      }
    })
  })
}

// 카카오 연결 끊기
export const unlinkKakao = () => {
  return new Promise((resolve, reject) => {
    waitSdk(() => {
      if (!Kakao.Auth.getAccessToken()) {
        console.log('Not logged in.')
        return reject('Not logged in.')
      }
      Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response) {
          resolve(response)
        },
        fail: function (error) {
          reject(error)
        },
      })
    })
  })
}

// BE쿠키제거, 카카오 언링크
export const logoutUser = async () => {
  try {
    await postUserLogout()
  } catch (e) {
    window.alert('BE 로그아웃 실패')
  }
  try {
    await unlinkKakao()
  } catch (e) {
    console.log('카카오 unlink 실패')
  }
}
