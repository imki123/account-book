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
import { MOBILE_PADDING } from '../App'

export interface SheetDataInterface {
  sheetId: number
  name: string
  order: number
  table?: string[][]
  types?: string[]
}

// 첫 데이터가 펫치됐을때 한번만 setInputWidth() 실행하기 위함

export default function SheetPage() {
  const params = useParams()
  const navigate = useNavigate()
  const [sheetData, setSheetData] = useState<SheetDataInterface>()
  const [loading, setLoading] = useState(false)
  const [addedRow, setAddedRow] = useState<number>()
  const [removedRow, setRemovedRow] = useState<number>()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null) // 자동저장 스로틀
  const changeRef = useRef(false) // 최초 변경사항 감지

  const getSheetAndSet = useCallback(() => {
    if (params.sheetId) {
      setLoading(true)
      getSheet(Number(params.sheetId)).then((res) => {
        setLoading(false)
        if (res) setSheetData(res)
      })
    }
  }, [params.sheetId])

  const handleChangeTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      changeRef.current = true
      // sheetData 업데이트
      if (sheetData) {
        const newSheetData = produce((draft) => {
          if (draft) {
            // size 변경
            changeInputWidth(e.target)

            draft.name = e.target.value
            return draft
          }
        }, sheetData)
        setSheetData(newSheetData)
      }
    },
    [sheetData],
  )

  useEffect(() => {
    getSheetAndSet()
  }, [getSheetAndSet])

  // addRow 액션
  useEffect(() => {
    if (addedRow !== undefined) {
      const tr = document.querySelector(`#row_${addedRow + 1}`)
      if (tr) {
        tr.classList.add('blink')
        setAddedRow(undefined)
        setTimeout(() => {
          tr.classList.remove('blink')
        }, animationDuration)
      }
    }
  }, [addedRow])

  // removeRow 액션
  useEffect(() => {
    if (sheetData && removedRow !== undefined) {
      const tr = document.querySelector(`#row_${removedRow}`)
      if (tr) {
        tr.classList.add('blinkRed')
        setTimeout(() => {
          tr.classList.remove('blinkRed')
          const nextState = produce(sheetData, (draft) => {
            draft?.table?.splice(removedRow - 1, 1)
          })
          setSheetData(nextState)
          setRemovedRow(undefined)
        }, animationDuration)
      }
    }
  }, [removedRow, sheetData])

  const addRow = useCallback(
    (row: number) => {
      changeRef.current = true
      const nextState = produce(sheetData, (draft) => {
        draft?.table?.splice(row, 0, ['', '', '', ''])
      })
      setSheetData(nextState)
      setAddedRow(row)
    },
    [sheetData],
  )

  const removeRow = useCallback((row: number) => {
    changeRef.current = true
    setRemovedRow(row)
  }, [])

  const saveSheet = useCallback(() => {
    if (params.sheetId && sheetData) {
      // setLoading(true)
      patchSheet(Number(params.sheetId), sheetData).then((res) => {
        // setLoading(false)
        addSnackBar('자동 저장')
      })
    }
  }, [params.sheetId, sheetData])

  // 데이터 변경되면 2초 스로틀 방식으로 데이터 자동 저장
  useEffect(() => {
    if (changeRef.current === true) {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null
        saveSheet()
      }, 2000)
    }
  }, [saveSheet, sheetData])

  return (
    <StyledSheetPage>
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
          changeRef.current = false
          addSnackBar('새로고침 완료')
        }}
      />
      <LoadingDim loading={loading} />
    </StyledSheetPage>
  )
}
const StyledSheetPage = styled.div`
  ${MOBILE_PADDING}
`
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
