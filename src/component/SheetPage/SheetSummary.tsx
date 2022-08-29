import styled from '@emotion/styled'
import React, { useMemo, useRef } from 'react'
import { useGetTypeQuery } from '../../api/reactQuery.ts/useGetTypeQuery'
import { SheetDataInterface } from '../../page/SheetPage'
import { localeBigInt, parseToNumber, setFixed } from '../../util/util'

export default function SheetSummary({
  sheetData,
  setSheetData,
}: {
  sheetData?: SheetDataInterface
  setSheetData: React.Dispatch<
    React.SetStateAction<SheetDataInterface | undefined>
  >
}) {
  const income = useRef(0)
  const sum = useRef(0)
  const { data: types } = useGetTypeQuery()
  const summary = useMemo(() => {
    if (types) {
      const summaryObj = types?.types.map((item) => {
        return {
          type: item,
          amount: 0,
        }
      })
      income.current = 0
      sum.current = 0
      sheetData?.table?.forEach((row, i) => {
        // 월급, 수입 저장
        sum.current += parseToNumber(row[3])
        if (row[0]?.includes('월급') || row[0]?.includes('수입')) {
          income.current += parseToNumber(row[3])
        }
        //row[0]가 공백이 아니면 obj에 값 합산해서 저장
        if (row[0]?.trim() !== '') {
          summaryObj.forEach((item) => {
            if (item.type.includes(row[0])) {
              item.amount += parseToNumber(row[3])
            }
          })
        }
      })
      return summaryObj
    }
    return []
  }, [sheetData?.table, types])

  return (
    <SheetSummaryWrapper>
      {summary.length > 0 ? (
        <>
          <SummaryTitle>요약</SummaryTitle>
          <SummaryDiv>
            {React.Children.toArray(
              summary.map((item, i) => (
                <>
                  {summary[i]?.amount !== 0 && (
                    <SummaryRow>
                      <TypeName>{i !== 0 && `${i}.${item.type}`}</TypeName>
                      <Sum>
                        {`${localeBigInt(summary[i]?.amount)} 원`}
                        <Percent>{`${Math.abs(
                          setFixed(
                            (parseToNumber(summary[i]?.amount) * 100) /
                              (income.current !== 0
                                ? income.current
                                : sum.current),
                            2,
                          ),
                        )}%`}</Percent>
                      </Sum>
                    </SummaryRow>
                  )}
                </>
              )),
            )}
          </SummaryDiv>
        </>
      ) : null}
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
  & > div:nth-of-type(2n) {
    background: #cec;
  }
`
const SummaryRow = styled.div`
  padding: 2px 4px;
  width: 300px;
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
  display: flex;
  padding-left: 10px;
  text-align: right;
  overflow-wrap: anywhere;
`
const Percent = styled.div`
  width: 60px;
  margin-left: 4px;
  border-left: 1px solid #222;
`
