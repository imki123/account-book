import Axios, { AxiosResponse } from 'axios'
import { axiosInstance } from './axiosInstance'

interface LoginResponse {
  email: string
  name?: string | undefined
  picture?: string | undefined
  createdAt?: string
  updatedAt?: string
  token: string
}

export const getUser = () => {
  return axiosInstance.get('/user/')
}

export const postLogin = (user: { username: string; email: string }) => {
  return axiosInstance.post<LoginResponse>('/user/login', user)
}

export const postCheckToken = () => {
  return axiosInstance.post<LoginResponse>('/user/checkToken')
}

export const postLogout = () => {
  return axiosInstance.post('/user/logout')
}
