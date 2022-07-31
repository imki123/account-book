import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

export default function Header({
  title,
  backButton,
}: {
  title?: string
  backButton?: boolean
}) {
  console.log(title)
  const navigate = useNavigate()
  return (
    <HeaderWrapper>
      {backButton && (
        <BackIcon fontSize='inherit' onClick={() => navigate(-1)} />
      )}
      {title && title !== 'undefined' && <TitleSpan>{title}</TitleSpan>}
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 38.5px;
  max-width: 500px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 10px 20px 10px;
  border-bottom: 1px solid #cec;
  background: white;
  @media (min-width: 500px) {
    border: 1px solid #cec;
    border-top: 0;
  }
`

const BackIcon = styled(ArrowBackIosNewIcon)`
  cursor: pointer;
  &::active {
    background: #eee;
  }
`

const TitleSpan = styled.span`
  font-weight: 700;
`
