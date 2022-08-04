import Axios from 'axios'

const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL + 'accountBook/user/',
  withCredentials: true,
})

export const postUserCheckEmail = (user: {
  username: string
  email: string
}) => {
  return axiosInstance.post('checkEmail', user)
}

export const postUserCheckToken = () => {
  return axiosInstance.post('checkToken')
}

export const postUserLogout = () => {
  return axiosInstance.post('logout')
}

export const getUser = () => {
  return axiosInstance.get('')
}
