import Axios from 'axios'
import { SheetDataInterface } from '../page/SheetPage'
import { axiosInstance } from './axiosInstance'

export const sheetApi = {
  getSheets: () => {
    return axiosInstance.get<SheetDataInterface[]>('/sheet/')
  },
  getSheet: (sheetId: number) => {
    return axiosInstance.get<SheetDataInterface>(`/sheet/${sheetId}`)
  },
  postSheets: () => {
    return axiosInstance.post<SheetDataInterface[]>('/sheet/')
  },
  patchSheet: (sheetId: number, sheetData: SheetDataInterface) => {
    return axiosInstance.patch<SheetDataInterface>(
      `/sheet/${sheetId}`,
      sheetData,
    )
  },
  patchOrder: (orderData: sheetOrderInterface) => {
    return axiosInstance.patch(
      `/sheet/${orderData.fromId}/${orderData.toId}`,
      orderData,
    )
  },
  deleteSheet: (sheetId: number) => {
    return axiosInstance.delete(`/sheet/${sheetId}`)
  },
}

export interface sheetOrderInterface {
  fromId: number
  toId: number
}
