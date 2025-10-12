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

export const typeApi = {
  getType: () => {
    return axiosInstance.get<getTypeResponse>('/type/')
  },
  patchType: (types: TypeInterface[]) => {
    return axiosInstance.patch<TypeInterface[]>('/type/', { types })
  },
}
