import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { data } from '../dummy/sheetData'

export default function HomePage() {
  const lists = data
  return (
    <StyledHomePage>
      <Title>고영이 가계부</Title>
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
