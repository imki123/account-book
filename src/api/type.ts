import Axios from 'axios'
import { api_url } from './account'

const axiosInstance = Axios.create({
  baseURL: api_url + '/accountBook/type',
  withCredentials: true,
})

export interface TypeInterface {
  type: string
  background?: string
}
export interface getTypeResponse {
  typeId: number
  types: TypeInterface[]
}

export const getType = async () => {
  let res = await axiosInstance.get<getTypeResponse>('/')
  return res.data
}

export const patchType = async (typeArray: TypeInterface[]) => {
  let res = await axiosInstance.patch<TypeInterface[]>('/', typeArray)
  return res.data
}
