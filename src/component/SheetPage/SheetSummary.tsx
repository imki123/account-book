import styled from '@emotion/styled'
import React, { useMemo } from 'react'
import { SheetDataInterface } from '../../page/SheetPage'
import { localeBigInt, removeComma } from '../../util/util'

const stringToBig = (str: string) => BigInt(removeComma(str))

export default function SheetSummary({
  sheetData,
  setSheetData,
}: {
  sheetData?: SheetDataInterface
  setSheetData: React.Dispatch<
    React.SetStateAction<SheetDataInterface | undefined>
  >
}) {
  const { summary, summaryKeys } = useMemo(() => {
    if (!sheetData?.table) return { summary: {}, summaryKeys: [] }
    const obj = {}
    sheetData?.table?.forEach((row, i) => {
      //row[0]가 공백이 아니면 obj에 값 합산해서 저장
      if (row[0].trim() !== '') {
        if (obj[row[0]] === undefined) {
          obj[row[0]] = { sum: '0', order: '' }
        }
        try {
          const before = stringToBig(obj[row[0]].sum || '0')
          const after = stringToBig(row[3] || '0')
          obj[row[0]].sum = String(before + after)
        } catch (e) {}
      }
    })
    const keys = Object.keys(obj).sort()
    keys.forEach((item, i) => (obj[item].order = i))
    return { summary: obj, summaryKeys: keys }
  }, [sheetData?.table])

  return (
    <SheetSummaryWrapper>
      <SummaryTitle>요약</SummaryTitle>
      <SummaryDiv>
        {React.Children.toArray(
          summaryKeys.map((item, i) => (
            <SummaryRow style={i % 2 === 0 ? { background: '#cec' } : {}}>
              <TypeName>{item}</TypeName>
              <Sum>{localeBigInt(summary[item]?.sum)} 원</Sum>
            </SummaryRow>
          )),
        )}
      </SummaryDiv>
    </SheetSummaryWrapper>
  )
}

const SheetSummaryWrapper = styled.div`
  padding: 20px 0;
`
const SummaryTitle = styled.div`
  font-weight: bold;
`
const SummaryDiv = styled.div`
  padding-top: 10px;
`
const SummaryRow = styled.div`
  padding: 2px 4px;
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TypeName = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  width: 80px;
  padding-right: 10px;
  border-right: 1px solid #222;
`
const Sum = styled.div`
  display: inline-block;
  padding-left: 10px;
  text-align: right;
  overflow-wrap: anywhere;
`
