import React, { useEffect, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import { Link, useNavigate } from 'react-router-dom'
// import { data } from '../dummy/sheetData'
import Header from '../component/Header/Header'
import { getSheets } from '../api/sheet'
import { SheetDataInterface } from './SheetPage'
import { postUserCheckToken } from '../api/account'
import { getCookieFe, removeCookieFe, setCookieFe } from '../util/cookie'

export default function HomePage() {
  const navigate = useNavigate()
  const [lists, setLists] = useState<SheetDataInterface[]>()
  const cookieFe = useMemo(() => getCookieFe(), [])

  useEffect(() => {
    getSheets().then((res) => setLists(res))
  }, [])

  useEffect(() => {
    if (cookieFe) {
      postUserCheckToken()
        .then((res) => setCookieFe(res.data))
        .catch(() => {
          removeCookieFe()
          navigate('/login')
        })
    }
  }, [cookieFe, navigate])

  return (
    <StyledHomePage>
      <Header title='고영이 가계부' />
      <ListWrapper>
        {React.Children.toArray(
          lists?.map((list) => (
            <li>
              <Link to={`sheet/${list.sheetId}`}>{list.name}</Link>
            </li>
          )),
        )}
      </ListWrapper>
    </StyledHomePage>
  )
}

const StyledHomePage = styled.div`
  height: 100%;
`
const ListWrapper = styled.ul`
  width: 100%;
  text-align: left;
  padding-inline-start: 20px;
  margin: 0;
`
