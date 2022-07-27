import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

export default function Header({ title }: { title?: string }) {
  const navigate = useNavigate()
  return (
    <HeaderWrapper>
      <BackSpan onClick={() => navigate(-1)}>
        <ArrowBackIosNewIcon />
      </BackSpan>
      <TitleSpan>{title}</TitleSpan>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`

const BackSpan = styled.span`
  cursor: pointer;
  &::active {
    background: #eee;
  }
`

const TitleSpan = styled.span`
  font-weight: 700;
`
