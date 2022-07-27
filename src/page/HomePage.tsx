import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { data } from '../dummy/sheetData'
import Header from '../component/Header/Header'

export default function HomePage() {
  const lists = data
  return (
    <StyledHomePage>
      <Header title='고영이 가계부' />
      <ListWrapper>
        {React.Children.toArray(
          lists.map((list) => (
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
  padding: 40px 20px;
`
const Title = styled.div`
  font-size: 30px;
`
const ListWrapper = styled.ul`
  width: 100%;
  text-align: left;
  margin-top: 30px;
`
