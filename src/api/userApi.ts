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

export const userApi = {
  getUser: () => {
    return axiosInstance.get('/user/')
  },
  postLogin: (user: { username: string; email: string }) => {
    return axiosInstance.post<LoginResponse>('/user/login', user)
  },
  postCheckToken: () => {
    return axiosInstance.post<LoginResponse>('/user/checkToken')
  },
  postLogout: () => {
    return axiosInstance.post('/user/logout')
  },
}
