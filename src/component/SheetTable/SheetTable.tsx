import React, { ChangeEvent } from 'react'
import { Colors } from '../../util/Colors'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import produce from 'immer'
import { SheetDataInterface } from '../../page/SheetPage'
import styled from '@emotion/styled'
import { animationDuration } from '../../constant/constant'

interface SheetTableInterface {
  sheetData?: SheetDataInterface
  setSheetData: React.Dispatch<
    React.SetStateAction<SheetDataInterface | undefined>
  >
  addRow: (row: number) => void
  removeRow: (row: number) => void
}

export default function SheetTable({
  sheetData,
  setSheetData,
  addRow,
  removeRow,
}: SheetTableInterface) {
  let sum = 0

  // 이벤트와 인덱스를 받아서 sheetData에 저장
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    i: number,
    j: number,
  ) => {
    if (e.target) {
      const newSheetData = produce((draft) => {
        if (draft && draft.table && draft.table[i]) {
          draft.table[i][j] = e.target.value
          return draft
        }
      }, sheetData)
      setSheetData(newSheetData)
    }
  }

  const parseToNumber = (num: string | number) => {
    const removeComma = String(num).replace(/,/g, '')
    if (Number.isNaN(Number(removeComma))) {
      return 0
    } else {
      return Number(removeComma)
    }
  }

  return (
    <TableWrapper>
      <tbody>
        <tr>
          <th></th>
          <th>번호</th>
          <th>유형</th>
          <th>항목</th>
          <th>가격</th>
          <th>합계</th>
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
                  // 합계에 가격 더하기
                  if (j === 2) {
                    sum += parseToNumber(col)
                  }
                  return (
                    <td>
                      <CommonInput
                        numCheck={j === 2}
                        value={col}
                        height='28px'
                        onChange={(e) => handleInputChange(e, i, j)}
                      />
                    </td>
                  )
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
  )
}

const TableWrapper = styled.table`
  border-collapse: collapse;
  border: 1px solid ${Colors.greenLine};
  min-width: 100%;
  max-width: 200%;

  th {
    background: ${Colors.greenLine};
  }
  th,
  td {
    border: 1px solid ${Colors.greenLine};
    white-space: pre;
    text-align: left;
    padding: 2px;
  }
  .blink {
    @keyframes blink {
      0% {
        background: ${Colors.greenLine};
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
  td:nth-of-type(3),
  td:nth-of-type(4),
  td:nth-of-type(5),
  td:nth-of-type(6) {
    min-width: 60px;
  }
  td:nth-of-type(5) input,
  td:nth-of-type(6) {
    text-align: right;
  }
  td:nth-of-type(3),
  td:nth-of-type(4),
  td:nth-of-type(5) {
    padding: 0;
  }
`
const AddIcon = styled(AddCircleOutlineIcon)`
  color: #7c7;
`
const RemoveIcon = styled(RemoveCircleOutlineIcon)`
  color: red;
`
const CommonInput = styled.input<{ height?: string; numCheck?: boolean }>`
  width: 100%;
  height: ${({ height }) => (height ? `${height}` : '100%')};
  border: 0;
  outline: none;
  background: none;
  font: inherit;
  &:focus,
  &:hover,
  &:active {
    background: ${Colors.greenLine};
  }
  ${({ numCheck, value }) => {
    const removeComma = String(value).replace(/,/g, '')
    if (numCheck && Number.isNaN(Number(removeComma))) {
      return 'background: #fcc;'
    } else return ''
  }}
`
