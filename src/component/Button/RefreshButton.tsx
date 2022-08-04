import styled from '@emotion/styled'
import RefreshIcon from '@mui/icons-material/Refresh'

export default function RefreshButton({
  onClick,
  refreshing,
}: {
  onClick: () => void
  refreshing: boolean
}) {
  return (
    <RefreshButtonWrapper onClick={onClick} disabled={refreshing}>
      <RefreshIcon />
    </RefreshButtonWrapper>
  )
}

const RefreshButtonWrapper = styled.button<{ disabled: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  @media (min-width: 500px) {
    right: calc(50% - 230px);
  }

  padding: 5px;
  width: 40px;
  height: 40px;

  overflow: hidden;
  background: white;
  border: 2px solid #eee;
  border-radius: 100%;

  ${({ disabled }) => disabled && `animation: 500ms rotation infinite linear;`}
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  svg {
    color: #aaa;
    width: 100%;
    height: 100%;
  }
`
