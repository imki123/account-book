import styled from '@emotion/styled'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../component/Header/Header'
// import { data } from '../dummy/sheetData'
import produce from 'immer'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { getSheet, patchSheet } from '../api/sheet'
import Button from '../component/Button/Button'
import { useModal } from '../hook/useModal'
import RefreshButton from '../component/Button/RefreshButton'

export interface SheetDataInterface {
  sheetId: number
  name: string
  table?: (string | number)[][]
}

const animationDuration = 300

export default function SheetPage() {
  const params = useParams()
  const [sheetData, setSheetData] = useState<SheetDataInterface>()
  const [addedRow, setAddedRow] = useState<number>()
  const [removedRow, setRemovedRow] = useState<number>()
  const { Modal, openModal } = useModal({
    title: '저장 성공',
    buttons: [{ children: '확인', closeButton: true }],
  })
  let sum = 0

  const getSheetAndSave = useCallback(() => {
    if (params.sheetId) {
      getSheet(Number(params.sheetId)).then((res) => {
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

  const addRow = (row: number) => {
    const nextState = produce(sheetData, (draft) => {
      draft?.table?.splice(row, 0, ['', '', ''])
    })
    setSheetData(nextState)
    setAddedRow(row)
  }

  const removeRow = (row: number) => {
    if (window.confirm(`${row}번 행을 삭제하시겠습니까?`)) setRemovedRow(row)
  }

  return (
    <>
      <RefreshButton onClick={getSheetAndSave} />
      <Modal />
      <Header title={`${sheetData?.name}`} backButton />
      <SaveButton
        onClick={() => {
          if (params.sheetId && sheetData) {
            patchSheet(Number(params.sheetId), sheetData).then((res) =>
              openModal(),
            )
          }
        }}
      >
        저장
      </SaveButton>
      <TableWrapper>
        <tbody>
          <tr>
            <th onClick={() => addRow(0)}>
              <AddIcon fontSize='small' />
            </th>
            <th></th>
            <th>NO</th>
            <th>Type</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
          {React.Children.toArray(
            sheetData?.table?.map((row, i) => (
              <tr id={`row_${i + 1}`}>
                <td onClick={() => addRow(i + 1)}>
                  <AddIcon fontSize='small' />
                </td>
                <td onClick={() => removeRow(i + 1)}>
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
  th:nth-of-type(3) {
    width: 10px;
  }
  td:nth-of-type(6),
  td:nth-of-type(7) {
    text-align: right;
  }
`
const AddIcon = styled(AddCircleOutlineIcon)`
  color: #7c7;
`
const RemoveIcon = styled(RemoveCircleOutlineIcon)`
  color: red;
`
const SaveButton = styled(Button)`
  position: fixed;
  top: 2px;
  right: 8px;
  opacity: 0.7;
  border-radius: 100%;
  font-size: 12px;
  width: 40px;
  height: 40px;
`