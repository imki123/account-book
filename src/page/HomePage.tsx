import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import { Link, useNavigate } from 'react-router-dom'
// import { data } from '../dummy/sheetData'
import Header from '../component/Header/Header'
import { deleteSheet, getSheets, patchOrder, postSheets } from '../api/sheet'
import { SheetDataInterface } from './SheetPage'
import { postUserCheckToken } from '../api/account'
import { getCookieFe, setCookieFe } from '../util/cookie'
import AddIcon from '@mui/icons-material/Add'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import { Colors } from '../util/Colors'
import LoadingDim from '../component/LoadingDim/LoadingDim'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { addSnackBar } from '../util/util'
import Button from '../component/Button/Button'
import { logoutUser } from '../util/kakaoSdk'

export default function HomePage() {
  const navigate = useNavigate()
  const [sheetLists, setSheetLists] = useState<SheetDataInterface[]>()
  const [loading, setLoading] = useState(false)
  const cookieFe = useMemo(() => getCookieFe(), [])

  // sheets 불러오기
  const getSheetsAndSet = useCallback(() => {
    setLoading(true)
    getSheets().then((res) => {
      setSheetLists(res)
      setLoading(false)
    })
  }, [])

  // sheet 생성
  const handleAddButton = useCallback(() => {
    setLoading(true)
    postSheets().then(() => {
      getSheetsAndSet()
      setLoading(false)
      addSnackBar('추가 완료')
    })
  }, [getSheetsAndSet])

  useEffect(() => {
    getSheetsAndSet()
  }, [getSheetsAndSet])

  useEffect(() => {
    if (cookieFe) {
      postUserCheckToken()
        .then((res) => setCookieFe(res.data))
        .catch(() => {
          logoutUser()
        })
    }
  }, [cookieFe, navigate])

  const orderUp = useCallback(
    async (i: number) => {
      if (sheetLists) {
        if (i !== 0) {
          setLoading(true)
          await patchOrder({
            fromId: sheetLists[i].sheetId,
            toId: sheetLists[i - 1].sheetId,
          })
          await getSheetsAndSet()
          setLoading(false)
          addSnackBar('변경 완료')
        }
      }
    },
    [getSheetsAndSet, sheetLists],
  )
  const orderDown = useCallback(
    async (i: number) => {
      if (sheetLists) {
        if (i !== sheetLists.length - 1) {
          setLoading(true)
          await patchOrder({
            fromId: sheetLists[i].sheetId,
            toId: sheetLists[i + 1].sheetId,
          })
          await getSheetsAndSet()
          setLoading(false)
          addSnackBar('변경 완료')
        }
      }
    },
    [getSheetsAndSet, sheetLists],
  )

  const handleDeleteSheet = async (sheetId: number, sheetName: string) => {
    if (window.confirm(`${sheetName}을(를) 삭제하시겠습니까?`)) {
      await deleteSheet(sheetId)
      await getSheetsAndSet()
      addSnackBar('삭제 완료')
    }
  }

  return (
    <StyledHomePage>
      <Header title='고영이 가계부' />
      <ListWrapper>
        {React.Children.toArray(
          sheetLists?.map((list, i) => (
            <ListDiv>
              <NameDiv>
                <ArrowCircleUpIcon onClick={() => orderUp(i)} />
                <ArrowCircleDownIcon onClick={() => orderDown(i)} />
                <Link to={`sheet/${list.sheetId}`}>{list.name}</Link>
              </NameDiv>
              <RemoveDiv>
                <RemoveCircleOutlineIcon
                  onClick={() => {
                    handleDeleteSheet(list.sheetId, list.name)
                  }}
                />
              </RemoveDiv>
            </ListDiv>
          )),
        )}
      </ListWrapper>
      <AddButton onClick={handleAddButton}>
        <AddIcon />
      </AddButton>
      <LogoutButton
        onClick={() => {
          logoutUser()
          setLoading(true)
        }}
      >
        로그아웃
      </LogoutButton>
      <LoadingDim loading={loading} />
    </StyledHomePage>
  )
}

const StyledHomePage = styled.div`
  height: 100%;
  padding-bottom: 50px;
`
const ListWrapper = styled.div`
  width: 100%;
  text-align: left;
  margin: 0;
`
const ListDiv = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  svg {
    color: ${Colors.green100};
  }
`
const NameDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
const RemoveDiv = styled.div`
  svg {
    color: red;
  }
`
const AddButton = styled.button`
  position: fixed;
  @media (min-width: 500px) {
    position: absolute;
  }
  z-index: 1;
  bottom: 20px;
  right: 20px;

  padding: 2px;
  width: 40px;
  height: 40px;

  overflow: hidden;
  background: ${Colors.green100};
  border: 2px solid ${Colors.green100};
  border-radius: 100%;
  opacity: 0.8;
  svg {
    color: white;
    width: 100%;
    height: 100%;
  }
`
const LogoutButton = styled(Button)`
  position: fixed;
  @media (min-width: 500px) {
    position: absolute;
  }
  z-index: 1;
  bottom: 20px;
  left: 20px;
  height: 32px;

  background: ${Colors.green100};
  font: inherit;
`
