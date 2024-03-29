import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../component/Header/Header'

import SheetTable from '../component/SheetPage/SheetTable'
import SheetSummary from '../component/SheetPage/SheetSummary'
import produce, { enableMapSet } from 'immer'
import { useGetSheetsQuery } from '../api/reactQuery.ts/useGetSheetQuery'
import styled from '@emotion/styled'
import { MOBILE_PADDING } from '../App'

export interface SheetDataInterface {
  sheetId: number
  name: string
  order: number
  table?: string[][]
  types?: string[]
}

// 첫 데이터가 펫치됐을때 한번만 setInputWidth() 실행하기 위함
enableMapSet()

export default function JoinPage() {
  const navigate = useNavigate()
  const { data: sheets } = useGetSheetsQuery({ staleTime: 10 * 1000 })
  const [checked, setChecked] = useState<Set<number>>(new Set())
  const [sheetData, setSheetData] = useState<SheetDataInterface>()

  const changeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const result = produce((draft) => {
      if (e.target.checked) draft?.add(Number(e.target.value))
      else draft?.delete(Number(e.target.value))
      return draft
    }, checked)
    setChecked(result)
  }

  useEffect(() => {
    if (sheets) {
      const joinedSheets: SheetDataInterface[] = []
      const arr = Array.from(checked).sort()
      arr.forEach((item) => {
        joinedSheets.push(sheets?.filter((sheet) => sheet.sheetId === item)[0])
      })

      let joinedTable: string[][] = []
      joinedSheets.forEach((item) => {
        if (item.table) {
          joinedTable = joinedTable
            .concat(item.table)
            .concat([['', '', '----- 구분선 -----', '']])
        }
      })
      setSheetData({ table: joinedTable, sheetId: 1, name: 'joined', order: 1 })
    }
  }, [checked, sheets])

  return (
    <StyledJoinPage>
      <Header
        title={'요약보기'}
        backButton
        backFunction={() => navigate('/', { replace: true })}
      />
      {React.Children.toArray(
        sheets &&
          sheets?.map((item) => (
            <div>
              <CheckLabel>
                <input
                  type='checkbox'
                  name='sheet'
                  value={item.sheetId}
                  onChange={changeCheckbox}
                />
                <span>{item.name}</span>
              </CheckLabel>
            </div>
          )),
      )}
      <SheetSummary sheetData={sheetData} setSheetData={setSheetData} />
      <SheetTable
        sheetData={sheetData}
        setSheetData={setSheetData}
        readOnly={true}
      />
    </StyledJoinPage>
  )
}
const StyledJoinPage = styled.div`
  ${MOBILE_PADDING}
`
const CheckLabel = styled.label`
  display: flex;
  align-items: center;
`
