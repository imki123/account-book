import Axios from 'axios'
import { SheetDataInterface } from '../page/SheetPage'

const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL + 'accountBook/sheet/',
  withCredentials: true,
})

export const getSheets = async () => {
  let res = await axiosInstance.get<SheetDataInterface[]>('')
  return res.data
}

export const getSheet = async (sheetId: number) => {
  let res = await axiosInstance.get<SheetDataInterface>(`${sheetId}`)
  return res.data
}

export const patchSheet = async (
  sheetId: number,
  sheetData: SheetDataInterface,
) => {
  let res = await axiosInstance.patch<SheetDataInterface>(
    `${sheetId}`,
    sheetData,
  )
  return res.data
}
