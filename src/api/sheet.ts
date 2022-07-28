import Axios from 'axios'
import { SheetDataInterface } from '../page/SheetPage'

const axiosInstance = Axios.create({
  baseURL: 'http://localhost:4000/accountBook/',
})
export const getSheets = async () => {
  try {
    const result = await axiosInstance.get('sheet/')
    console.log(result)
    return result
  } catch (e) {
    console.error(e)
  }
}

export const getSheet = async (sheetId: number) => {
  try {
    const result = await axiosInstance.get<SheetDataInterface>(
      `sheet/${sheetId}`,
    )
    console.log(result)
    return result
  } catch (e) {
    console.error(e)
  }
}
