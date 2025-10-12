import axios from 'axios'
import { ACCOUNT_BOOK_ACCESS_TOKEN } from '../constant/constant'

const { protocol, hostname } = window.location

export const api_url =
  import.meta.env.VITE_ENV === 'local'
    ? `${protocol}//${hostname}:${import.meta.env.VITE_API_PORT}`
    : import.meta.env.VITE_API_URL

export const axiosInstance = axios.create({
  baseURL: api_url + '/accountBook',
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCOUNT_BOOK_ACCESS_TOKEN)

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)
