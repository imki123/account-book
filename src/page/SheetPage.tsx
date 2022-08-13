import styled from '@emotion/styled'
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../component/Header/Header'
import produce from 'immer'

import { getSheet, patchSheet } from '../api/sheet'
import RefreshButton from '../component/Button/RefreshButton'
import SaveIcon from '@mui/icons-material/Save'
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

export default function SheetPage() {
  const params = useParams()
  const navigate = useNavigate()
  const [sheetData, setSheetData] = useState<SheetDataInterface>()
  const [loading, setLoading] = useState(false)
  const [addedRow, setAddedRow] = useState<number>()
  const [removedRow, setRemovedRow] = useState<number>()
  const [beforeSetWidth, setBeforeSetWidth] = useState(true)

  const getSheetAndSet = useCallback(() => {
    if (params.sheetId) {
      setLoading(true)
      getSheet(Number(params.sheetId)).then((res) => {
        setLoading(false)
        if (res) setSheetData(res)
      })
    }
  }, [params.sheetId])

  const handleChangeHeader = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
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
  // 처음 한번만 전체 input width 설정하기
  const changeInputWidthAll = useCallback(() => {
    const inputs = document.querySelectorAll<HTMLInputElement>(
      'input:not(.fakeInput)',
    )
    if (inputs) {
      inputs.forEach((input) => {
        changeInputWidth(input)
      })
      setBeforeSetWidth(false)
    }
    const selects = document.querySelectorAll<HTMLSelectElement>(
      'select:not(.fakeSelect)',
    )
    if (selects) {
      selects.forEach((select) => {
        changeInputWidth(select, true)
      })
      setBeforeSetWidth(false)
    }
  }, [])

  useEffect(() => {
    getSheetAndSet()
  }, [getSheetAndSet])

  // sheetData 바뀌고 beforeSetWidth가 true이면 input width 바꿔주기
  useEffect(() => {
    if (beforeSetWidth && sheetData) {
      changeInputWidthAll()
    }
  }, [beforeSetWidth, changeInputWidthAll, sheetData])

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
      const nextState = produce(sheetData, (draft) => {
        draft?.table?.splice(row, 0, ['', '', '', ''])
      })
      setSheetData(nextState)
      setAddedRow(row)
    },
    [sheetData],
  )

  const removeRow = useCallback((row: number) => {
    setRemovedRow(row)
  }, [])

  return (
    <>
      <Header
        title={
          <HeaderInput value={sheetData?.name} onChange={handleChangeHeader} />
        }
        backButton
        backFunction={() => navigate('/')}
      />
      <SheetTable
        sheetData={sheetData}
        setSheetData={setSheetData}
        addRow={addRow}
        removeRow={removeRow}
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
      <SaveButton
        disabled={loading}
        onClick={() => {
          if (params.sheetId && sheetData) {
            setLoading(true)
            patchSheet(Number(params.sheetId), sheetData).then((res) => {
              setLoading(false)
              addSnackBar('저장 완료')
            })
          }
        }}
      >
        <SaveIcon />
      </SaveButton>
      <LoadingDim loading={loading} />
    </>
  )
}

const HeaderInput = styled.input`
  width: 100%;
  min-width: 50px;
  height: 24px;
  border: 0;
  outline: none;
  background: none;
  font: inherit;
  &:focus,
  &:hover,
  &:active {
    border-bottom: 1px solid ${Colors.greenLine};
  }
`
const SaveButton = styled.button<{ disabled: boolean }>`
  position: fixed;
  z-index: 1;
  top: 2px;
  right: 20px;
  @media (min-width: 500px) {
    right: calc(50% - 230px);
  }

  padding: 5px;
  width: 40px;
  height: 40px;

  overflow: hidden;
  background: blue;
  border: 2px solid #eee;
  border-radius: 100%;
  opacity: 0.7;
  svg {
    color: white;
    width: 100%;
    height: 100%;
  }
  ${({ disabled }) => disabled && `background: #555;`}
`
