import Axios from 'axios'
import { axiosInstance } from './axiosInstance'

export interface TypeInterface {
  type: string
  background?: string
}
export interface getTypeResponse {
  typeId: number
  types: TypeInterface[]
}

export const getType = async () => {
  let res = await axiosInstance.get<getTypeResponse>('/type/')
  return res.data
}

export const patchType = async (types: TypeInterface[]) => {
  let res = await axiosInstance.patch<TypeInterface[]>('/type/', { types })
  return res.data
}
