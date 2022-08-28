import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
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
import { getType } from '../../api/type'
import OpenColor from 'open-color'

interface SheetTableInterface {
  sheetData?: SheetDataInterface
  setSheetData: React.Dispatch<
    React.SetStateAction<SheetDataInterface | undefined>
  >
  addRow?: (row: number) => void
  removeRow?: (row: number) => void
  changeRef?: React.MutableRefObject<boolean>
  readOnly?: boolean
}

export default function SheetTable({
  sheetData,
  setSheetData,
  addRow,
  removeRow,
  changeRef,
  readOnly = false,
}: SheetTableInterface) {
  let sum = BigInt(0)
  const defaultTypes = useMemo(
    () => [
      '',
      '1.생활비',
      '2.배달외식',
      '3.기타',
      '4.관리비',
      '5.저금',
      '6.보험료',
      '7.여행',
      '8.경조사',
      '9.병원',
      '10.비상금',
      '11.수입',
    ],
    [],
  )
  const [types, setTypes] = useState(defaultTypes)

  useEffect(() => {
    getType().then((res) => {
      setTypes(res.types || defaultTypes)
    })
  }, [defaultTypes])

  // 이벤트와 인덱스를 받아서 sheetData에 저장
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    i: number,
    j: number,
    select = false,
  ) => {
    if (changeRef) changeRef.current = true
    if (e.target) {
      // input size 변경
      changeInputWidth(e.target, select)

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
            {readOnly ? (
              <th></th>
            ) : (
              <th onClick={() => addRow && addRow(0)}>
                <AddIcon fontSize='small' />
              </th>
            )}
            <th>번호</th>
            <th>유형</th>
            <th>날짜</th>
            <th>제목</th>
            <th>가격</th>
            <th>합계</th>
            <th></th>
          </tr>
          {React.Children.toArray(
            sheetData?.table?.map((row, i) => (
              <tr id={`row_${i + 1}`}>
                {readOnly ? (
                  <td></td>
                ) : (
                  <td
                    onClick={() => {
                      addRow && addRow(i + 1)
                    }}
                  >
                    <AddIcon fontSize='small' />
                  </td>
                )}
                <td>{i + 1}</td>
                {React.Children.toArray(
                  row.map((col, j) => {
                    // 합계에 가격 더하기
                    if (j === 0) {
                      return (
                        <td>
                          {readOnly ? (
                            <Background value={col} height='20px'>
                              {col}
                            </Background>
                          ) : (
                            <CommonSelect
                              value={col}
                              onChange={(e) => handleInputChange(e, i, j, true)}
                              height='27px'
                            >
                              {React.Children.toArray(
                                types.map((type, k) => (
                                  <option value={type}>
                                    {k === 0 ? '' : `${k}.${type}`}
                                  </option>
                                )),
                              )}
                            </CommonSelect>
                          )}
                        </td>
                      )
                    }
                    if (j === 3) {
                      sum += parseToBigInt(col)
                    }
                    return (
                      <td>
                        {readOnly ? (
                          j === 3 && isBigInt(col) && col !== '' ? (
                            localeBigInt(col)
                          ) : (
                            col.toString()
                          )
                        ) : (
                          <CommonInput
                            numCheck={j === 3}
                            value={
                              j === 3 && isBigInt(col) && col !== ''
                                ? localeBigInt(col)
                                : col.toString()
                            }
                            height='28px'
                            onChange={(e) => handleInputChange(e, i, j)}
                          />
                        )}
                      </td>
                    )
                  }),
                )}
                <td>{localeBigInt(sum)}</td>
                {readOnly ? (
                  <td></td>
                ) : (
                  <td onClick={() => removeRow && removeRow(i + 1)}>
                    <RemoveIcon fontSize='small' />
                  </td>
                )}
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
    width: 100%;
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
  th:nth-of-type(5),
  th:nth-of-type(6),
  th:nth-of-type(7) {
    min-width: 60px;
  }
  td:nth-of-type(6),
  td:nth-of-type(7),
  td:nth-of-type(6) input,
  td:nth-of-type(7) input {
    text-align: right;
  }
  td:nth-of-type(3),
  td:nth-of-type(4),
  td:nth-of-type(5),
  td:nth-of-type(6) {
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
  padding: 0 2px;
  border: 0;
  border-radius: 0;
  outline: none;
  background: none;
  font: inherit;
  &:focus,
  &:hover,
  &:active {
    background: ${OpenColor.green[0]};
  }
  ${({ numCheck, value }) => {
    return numCheck && !isBigInt(value) ? 'background: #fcc;' : ''
  }}
`
const background = (value: string) => {
  if (value?.includes('생활비')) {
    return OpenColor.pink[2]
  } else if (value?.includes('배달외식')) {
    return OpenColor.red[2]
  } else if (value?.includes('기타')) {
    return OpenColor.yellow[2]
  } else if (value?.includes('관리비')) {
    return OpenColor.lime[2]
  } else if (value?.includes('저금')) {
    return OpenColor.blue[4]
  } else if (value?.includes('보험료')) {
    return OpenColor.blue[2]
  } else if (value?.includes('여행')) {
    return OpenColor.indigo[2]
  } else if (value?.includes('경조사')) {
    return OpenColor.indigo[4]
  } else if (value?.includes('병원')) {
    return OpenColor.violet[2]
  } else if (value?.includes('비상금')) {
    return OpenColor.violet[4]
  } else if (value?.includes('수입')) {
    return OpenColor.grape[2]
  } else if (value?.includes('용돈')) {
    return OpenColor.lime[4]
  } else if (value?.includes('카드')) {
    return OpenColor.yellow[4]
  } else if (value?.includes('월급')) {
    return OpenColor.grape[4]
  }
}

const CommonSelect = styled.select<{
  height?: string
  value: string
}>`
  width: 100%;
  min-width: 100%;
  height: ${({ height }) => (height ? `${height}` : '100%')};
  padding: 0 2px;
  border: 0;
  border-radius: 0;
  outline: none;
  background: transparent;
  color: #222;
  font: inherit;
  background: ${({ value }) => background(value)};
`

const Background = styled.div<{
  height?: string
  value: string
}>`
  height: ${({ height }) => (height ? `${height}` : '100%')};
  background: ${({ value }) => background(value)};
`
