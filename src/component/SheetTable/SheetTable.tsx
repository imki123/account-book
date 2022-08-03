import React, { ChangeEvent } from 'react'
import { Colors } from '../../util/Colors'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import produce from 'immer'
import { SheetDataInterface } from '../../page/SheetPage'
import styled from '@emotion/styled'
import { animationDuration } from '../../constant/constant'
import {
  changeInputWidth,
  isBigInt,
  localeBigInt,
  parseToBigInt,
} from '../../util/util'

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
  let sum = BigInt(0)

  // 이벤트와 인덱스를 받아서 sheetData에 저장
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    i: number,
    j: number,
  ) => {
    if (e.target) {
      // input size 변경
      changeInputWidth(e.target)

      // sheetData 업데이트
      const newSheetData = produce((draft) => {
        if (draft && draft.table && draft.table[i]) {
          draft.table[i][j] = e.target.value
          return draft
        }
      }, sheetData)
      setSheetData(newSheetData)
    }
  }

  return (
    <TableWrapper>
      <table>
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
                      sum += parseToBigInt(col)
                    }
                    return (
                      <td>
                        <CommonInput
                          numCheck={j === 2}
                          value={
                            j === 2 && isBigInt(col) && col !== ''
                              ? localeBigInt(col)
                              : col.toString()
                          }
                          height='28px'
                          onChange={(e) => handleInputChange(e, i, j)}
                        />
                      </td>
                    )
                  }),
                )}
                <td>{localeBigInt(sum)}</td>
                <td onClick={() => addRow(i + 1)}>
                  <AddIcon fontSize='small' />
                </td>
              </tr>
            )),
          )}
        </tbody>
      </table>
    </TableWrapper>
  )
}

const TableWrapper = styled.div`
  min-width: 100%;
  max-width: 200%;
  overflow: auto;

  table {
    border-collapse: collapse;
    border: 1px solid ${Colors.greenLine};
  }
  th {
    background: ${Colors.greenLine};
  }
  th,
  td {
    border: 1px solid ${Colors.greenLine};
    white-space: pre;
    text-align: left;
    padding: 2px;
    min-width: 10px;
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
  th:nth-of-type(3),
  th:nth-of-type(4),
  th:nth-of-type(5),
  th:nth-of-type(6) {
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
export const CommonInput = styled.input<{
  height?: string
  value?: string | number | BigInt
  numCheck?: boolean
}>`
  width: 100%;
  min-width: 100%;
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
    return numCheck && !isBigInt(value) ? 'background: #fcc;' : ''
  }}
`
