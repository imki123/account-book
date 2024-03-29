import Axios from 'axios'

const { protocol, hostname } = window.location
export const api_url =
  import.meta.env.VITE_ENV === 'local'
    ? `${protocol}//${hostname}:${import.meta.env.VITE_API_PORT}`
    : import.meta.env.VITE_API_URL

const axiosInstance = Axios.create({
  baseURL: api_url + '/accountBook/user',
  withCredentials: true,
})

export const postUserCheckEmail = (user: {
  username: string
  email: string
}) => {
  return axiosInstance.post('/checkEmail', user)
}

export const postUserCheckToken = () => {
  return axiosInstance.post('/checkToken')
}

export const postUserLogout = () => {
  return axiosInstance.post('/logout')
}

export const getUser = () => {
  return axiosInstance.get('/')
}
