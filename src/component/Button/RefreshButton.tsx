import styled from '@emotion/styled'
import RefreshIcon from '@mui/icons-material/Refresh'

export default function RefreshButton({ onClick }: { onClick: () => void }) {
  return (
    <RefreshButtonWrapper onClick={onClick}>
      <RefreshIcon />
    </RefreshButtonWrapper>
  )
}

const RefreshButtonWrapper = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;

  padding: 5px;
  border-radius: 100%;
  width: 40px;
  height: 40px;

  background: white;
  border: 2px solid #eee;
  svg {
    color: #aaa;
    width: 100%;
    height: 100%;
  }
`
