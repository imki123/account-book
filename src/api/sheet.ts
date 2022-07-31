import Axios from 'axios'
import { SheetDataInterface } from '../page/SheetPage'

const axiosInstance = Axios.create({
  baseURL: 'http://localhost:4000/accountBook/',
})
export const getSheets = async () => {
  let res = await axiosInstance.get<SheetDataInterface[]>('sheet/')
  return res.data
}

export const getSheet = async (sheetId: number) => {
  let res = await axiosInstance.get<SheetDataInterface>(`sheet/${sheetId}`)
  return res.data
}

export const patchSheet = async (
  sheetId: number,
  sheetData: SheetDataInterface,
) => {
  let res = await axiosInstance.patch<SheetDataInterface>(
    `sheet/${sheetId}`,
    sheetData,
  )
  return res.data
}
