import styled from '@emotion/styled'
import { useCallback, useEffect, useRef, useState } from 'react'

const animationTime = 500

export default function useSnackBar({
  message,
  duration = 3000,
}: {
  message: string
  duration?: number
}) {
  const [animating, setAnimating] = useState<boolean>()
  const snackBarRef = useRef<any>()

  useEffect(() => {
    if (animating) {
      setTimeout(() => {
        snackBarRef.current.classList.remove('open')
        setAnimating(false)
      }, duration)
    }
  }, [animating, duration])

  const SnackBar = useCallback(
    () => <Message ref={snackBarRef}>{message}</Message>,
    [message],
  )

  const openSnackBar = useCallback(() => {
    if (!animating) {
      snackBarRef.current.classList.add('open')
      setAnimating(true)
    }
  }, [animating])

  return { SnackBar, openSnackBar }
}

const Message = styled.div`
  position: fixed;
  bottom: -40px;
  left: 50%;
  transform: translate(-50%);
  opacity: 0;
  background: #777;
  color: white;
  padding: 5px 10px;
  border-radius: 8px;
  transition: bottom ${animationTime}ms, opacity ${animationTime}ms;
  &.open {
    bottom: 20px;
    opacity: 1;
  }
`
