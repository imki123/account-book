import Axios from 'axios'
import { SheetDataInterface } from '../page/SheetPage'
import { axiosInstance } from './axiosInstance'

export const getSheets = async () => {
  let res = await axiosInstance.get<SheetDataInterface[]>('/sheet/')
  return res.data
}

export const getSheet = async (sheetId: number) => {
  let res = await axiosInstance.get<SheetDataInterface>(`/sheet/${sheetId}`)
  return res.data
}

export const postSheets = async () => {
  let res = await axiosInstance.post<SheetDataInterface[]>('/sheet/')
  return res.data
}

export const patchSheet = async (
  sheetId: number,
  sheetData: SheetDataInterface,
) => {
  let res = await axiosInstance.patch<SheetDataInterface>(
    `/sheet/${sheetId}`,
    sheetData,
  )
  return res.data
}

// sheet 순서 변경
export const patchOrder = async (orderData: sheetOrderInterface) => {
  let res = await axiosInstance.patch(
    `/sheet/${orderData.fromId}/${orderData.toId}`,
    orderData,
  )
  return res.data
}

export const deleteSheet = async (sheetId: number) => {
  let res = await axiosInstance.delete(`/sheet/${sheetId}`)
  return res.data
}

export interface sheetOrderInterface {
  fromId: number
  toId: number
}
