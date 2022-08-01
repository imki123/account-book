import styled from '@emotion/styled'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../component/Header/Header'
import produce from 'immer'

import { getSheet, patchSheet } from '../api/sheet'
import RefreshButton from '../component/Button/RefreshButton'
import SaveIcon from '@mui/icons-material/Save'
import useSnackBar from '../hook/useSnackBar'
import SheetTable from '../component/SheetTable/SheetTable'
import { animationDuration } from '../constant/constant'

export interface SheetDataInterface {
  sheetId: number
  name: string
  table?: (string | number)[][]
}

export default function SheetPage() {
  const params = useParams()
  const [sheetData, setSheetData] = useState<SheetDataInterface>()
  const [refreshing, setRefreshing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [addedRow, setAddedRow] = useState<number>()
  const [removedRow, setRemovedRow] = useState<number>()
  const { SnackBar: SnackBarSave, openSnackBar: openSnackBarSave } =
    useSnackBar({
      message: '저장 완료',
      duration: 1500,
    })
  const { SnackBar: SnackBarRefresh, openSnackBar: openSnackBarRefresh } =
    useSnackBar({
      message: '새로고침 완료',
      duration: 1500,
    })

  const getSheetAndSave = useCallback(() => {
    if (params.sheetId) {
      setRefreshing(true)
      getSheet(Number(params.sheetId)).then((res) => {
        setRefreshing(false)
        if (res) setSheetData(res)
      })
    }
  }, [params.sheetId])

  useEffect(() => {
    getSheetAndSave()
  }, [getSheetAndSave])

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
        draft?.table?.splice(row, 0, ['', '', ''])
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
      <RefreshButton
        refreshing={refreshing}
        onClick={() => {
          getSheetAndSave()
          openSnackBarRefresh()
        }}
      />
      <SaveButton
        disabled={saving}
        onClick={() => {
          if (params.sheetId && sheetData) {
            setSaving(true)
            patchSheet(Number(params.sheetId), sheetData).then((res) => {
              setSaving(false)
              openSnackBarSave()
            })
          }
        }}
      >
        <SaveIcon />
      </SaveButton>
      <SnackBarRefresh />
      <SnackBarSave />
      <Header title={`${sheetData?.name}`} backButton />
      <SheetTable
        sheetData={sheetData}
        setSheetData={setSheetData}
        addRow={addRow}
        removeRow={removeRow}
      />
    </>
  )
}

const SaveButton = styled.button<{ disabled: boolean }>`
  position: absolute;
  z-index: 1;
  top: 2px;
  right: 20px;

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
