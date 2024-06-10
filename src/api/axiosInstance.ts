import axios from 'axios'

const { protocol, hostname } = window.location

export const api_url =
  import.meta.env.VITE_ENV === 'local'
    ? `${protocol}//${hostname}:${import.meta.env.VITE_API_PORT}`
    : import.meta.env.VITE_API_URL

export const axiosInstance = axios.create({
  baseURL: api_url + '/accountBook',
  withCredentials: true,
})
