import styled from '@emotion/styled'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../component/Header/Header'
// import { data } from '../dummy/sheetData'
import produce from 'immer'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { getSheet, patchSheet } from '../api/sheet'
import RefreshButton from '../component/Button/RefreshButton'
import SaveIcon from '@mui/icons-material/Save'
import useSnackBar from '../hook/useSnackBar'

export interface SheetDataInterface {
  sheetId: number
  name: string
  table?: (string | number)[][]
}

const animationDuration = 300

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
  let sum = 0

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
      <TableWrapper>
        <tbody>
          <tr>
            <th></th>
            <th>NO</th>
            <th>Type</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Total</th>
            <th onClick={() => addRow(0)}>
              <AddIcon fontSize='small' />
            </th>
          </tr>
          {React.Children.toArray(
            sheetData?.table?.map((row, i) => (
              <tr id={`row_${i + 1}`}>
                <td
                  onClick={() => {
                    removeRow(i + 1)
                  }}
                >
                  <RemoveIcon fontSize='small' />
                </td>
                <td>{i + 1}</td>
                {React.Children.toArray(
                  row.map((col, j) => {
                    if (j === 2) {
                      sum += Number(col)
                    }
                    return <td>{col}</td>
                  }),
                )}
                <td>{Number(sum)}</td>
                <td onClick={() => addRow(i + 1)}>
                  <AddIcon fontSize='small' />
                </td>
              </tr>
            )),
          )}
        </tbody>
      </TableWrapper>
    </>
  )
}

const TableWrapper = styled.table`
  border-collapse: collapse;
  border: 1px solid #cec;
  min-width: 100%;
  max-width: 200%;

  th {
    background: #cec;
  }
  th,
  td {
    border: 1px solid #cec;
    white-space: pre;
    text-align: left;
    padding: 4px 2px;
  }
  .blink {
    @keyframes blink {
      0% {
        background: #cec;
      }
      100% {
        background: white;
      }
    }
    animation: blink ${animationDuration}ms;
  }
  .blinkRed {
    @keyframes blinkRed {
      0% {
        background: red;
      }
      100% {
        background: white;
      }
    }
    animation: blinkRed ${animationDuration}ms;
  }
  th:nth-of-type(1),
  th:nth-of-type(2),
  th:nth-of-type(7) {
    width: 10px;
  }
  td:nth-of-type(5),
  td:nth-of-type(6) {
    text-align: right;
  }
`
const AddIcon = styled(AddCircleOutlineIcon)`
  color: #7c7;
`
const RemoveIcon = styled(RemoveCircleOutlineIcon)`
  color: red;
`
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
  ${({ disabled }) => disabled && `background: gray;`}
`
