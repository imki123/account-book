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
  const navigate = useNavigate()
  return (
    <SpaceDiv>
      <HeaderWrapper>
        {backButton && (
          <BackIcon fontSize='inherit' onClick={() => navigate(-1)} />
        )}
        <TitleSpan>{title}</TitleSpan>
      </HeaderWrapper>
    </SpaceDiv>
  )
}
const SpaceDiv = styled.div`
  height: calc(27.5px + 20px);
  position: relative;
`
const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 10px 20px 0;
  margin-bottom: 20px;
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
