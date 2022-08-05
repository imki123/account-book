import styled from '@emotion/styled'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'

export default function LoadingDim({ loading }: { loading: boolean }) {
  return loading ? (
    <Dim>
      <HourglassEmptyIcon />
    </Dim>
  ) : null
}

const Dim = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.3);

  @keyframes rotation {
    ${`${(100 / 6) * 0}%`} {
      transform: rotate(0deg);
    }
    ${`${(100 / 6) * 1}%`} {
      transform: rotate(180deg);
    }
    ${`${(100 / 6) * 2}%`} {
      transform: rotate(180deg);
    }
    ${`${(100 / 6) * 3}%`} {
      transform: rotate(180deg);
    }
    ${`${(100 / 6) * 4}%`} {
      transform: rotate(360deg);
    }
    ${`${(100 / 6) * 5}%`} {
      transform: rotate(360deg);
    }
    ${`${(100 / 6) * 6}%`} {
      transform: rotate(360deg);
    }
  }
  svg {
    width: 30px;
    height: 30px;
    color: white;
    animation: 1.5s linear rotation infinite;
  }
`
