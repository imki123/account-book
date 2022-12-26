import Axios from 'axios'
import { SheetDataInterface } from '../page/SheetPage'
import { api_url } from './account'

const axiosInstance = Axios.create({
  baseURL: api_url + '/accountBook/sheet',
  withCredentials: true,
})

export const getSheets = async () => {
  let res = await axiosInstance.get<SheetDataInterface[]>('/')
  return res.data
}

export const getSheet = async (sheetId: number) => {
  let res = await axiosInstance.get<SheetDataInterface>(`/${sheetId}`)
  return res.data
}

export const postSheets = async () => {
  let res = await axiosInstance.post<SheetDataInterface[]>('/')
  return res.data
}

export const patchSheet = async (
  sheetId: number,
  sheetData: SheetDataInterface,
) => {
  let res = await axiosInstance.patch<SheetDataInterface>(
    `/${sheetId}`,
    sheetData,
  )
  return res.data
}

// sheet 순서 변경
export const patchOrder = async (orderData: sheetOrderInterface) => {
  let res = await axiosInstance.patch(
    `/${orderData.fromId}/${orderData.toId}`,
    orderData,
  )
  return res.data
}

export const deleteSheet = async (sheetId: number) => {
  let res = await axiosInstance.delete(`/${sheetId}`)
  return res.data
}

export interface sheetOrderInterface {
  fromId: number
  toId: number
}
