import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../component/Header/Header'
import { data } from '../dummy/sheetData'

interface sheetDataInterface {
  sheetId: number
  name: string
}

export default function SheetPage() {
  const params = useParams()
  const [sheetData, setSheetData] = useState<sheetDataInterface | null>(null)
  useEffect(() => {
    setSheetData(data.filter((i) => i.sheetId === Number(params?.sheetId))[0])
  }, [params])

  return (
    <>
      <Header title={`시트페이지 ${sheetData?.sheetId}`} />
      <div></div>
    </>
  )
}
