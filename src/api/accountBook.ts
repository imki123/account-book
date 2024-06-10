import Axios from 'axios'
import { axiosInstance } from './axiosInstance'

export const getUser = () => {
  return axiosInstance.get('/user/')
}

export const postLogin = (user: { username: string; email: string }) => {
  return axiosInstance.post('/user/login', user)
}

export const postCheckSession = () => {
  return axiosInstance.post('/user/checkSession')
}

export const postLogout = () => {
  return axiosInstance.post('/user/logout')
}
