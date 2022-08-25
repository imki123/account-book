import styled from '@emotion/styled'
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../component/Header/Header'
import produce from 'immer'

import { getSheet, patchSheet } from '../api/sheet'
import RefreshButton from '../component/Button/RefreshButton'
import SheetTable from '../component/SheetPage/SheetTable'
import { animationDuration } from '../constant/constant'
import { Colors } from '../util/Colors'
import { addSnackBar, changeInputWidth } from '../util/util'
import LoadingDim from '../component/LoadingDim/LoadingDim'
import SheetSummary from '../component/SheetPage/SheetSummary'

export interface SheetDataInterface {
  sheetId: number
  name: string
  order: number
  table?: string[][]
  types?: string[]
}

// 첫 데이터가 펫치됐을때 한번만 setInputWidth() 실행하기 위함

export default function JoinPage() {
  const params = useParams()
  const navigate = useNavigate()
  const [sheetData, setSheetData] = useState<SheetDataInterface>()
  const [beforeSetWidth, setBeforeSetWidth] = useState(true)

  useEffect(() => {
    getSheetAndSet()
  }, [getSheetAndSet])

  // sheetData 바뀌고 beforeSetWidth가 true이면 input width 바꿔주기
  useEffect(() => {
    if (beforeSetWidth && sheetData) {
      changeInputWidthAll()
    }
  }, [beforeSetWidth, changeInputWidthAll, sheetData])

  const saveSheet = useCallback(() => {
    if (params.sheetId && sheetData) {
      // setLoading(true)
      patchSheet(Number(params.sheetId), sheetData).then((res) => {
        // setLoading(false)
        addSnackBar('자동 저장')
      })
    }
  }, [params.sheetId, sheetData])

  return (
    <>
      <Header
        title={
          sheetData?.name !== undefined ? (
            <HeaderInput value={sheetData?.name} onChange={handleChangeTitle} />
          ) : null
        }
        backButton
        backFunction={() => navigate('/', { replace: true })}
      />
      <SheetTable
        sheetData={sheetData}
        setSheetData={setSheetData}
        addRow={addRow}
        removeRow={removeRow}
        changeRef={changeRef}
      />
      <SheetSummary sheetData={sheetData} setSheetData={setSheetData} />
      <RefreshButton
        refreshing={loading}
        onClick={() => {
          getSheetAndSet()
          setBeforeSetWidth(true)
          addSnackBar('새로고침 완료')
        }}
      />
      <LoadingDim loading={loading} />
    </>
  )
}

const HeaderInput = styled.input`
  width: 100%;
  min-width: 50px;
  height: 24px;
  border: 0;
  padding: 0 2px;
  outline: none;
  background: none;
  font: inherit;
  &:focus,
  &:hover,
  &:active {
    border-bottom: 1px solid ${Colors.greenLine};
  }
`
