import styled from '@emotion/styled'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = React.lazy(() => import('./page/HomePage'))
const LoginPage = React.lazy(() => import('./page/LoginPage'))

function App() {
  return (
    <MobileWrapper>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </MobileWrapper>
  )
}

export default App

const MobileWrapper = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  max-width: 500px;
  margin: auto;
  border: 1px solid #eee;
`
