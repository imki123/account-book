import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
// import { data } from '../dummy/sheetData'
import Header from '../component/Header/Header'
import { getSheets } from '../api/sheet'
import { SheetDataInterface } from './SheetPage'

export default function HomePage() {
  const [lists, setLists] = useState<SheetDataInterface[]>()
  useEffect(() => {
    getSheets().then((res) => setLists(res))
  }, [])

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
