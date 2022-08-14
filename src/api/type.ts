import Axios from 'axios'

const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL + 'accountBook/type/',
  withCredentials: true,
})

export const getType = async () => {
  let res = await axiosInstance.get<string[]>('')
  return res.data
}

export const patchType = async (typeArray: string[]) => {
  let res = await axiosInstance.patch<string[]>('', typeArray)
  return res.data
}
