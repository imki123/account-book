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
  const [animating, setAnimating] = useState(false)
  const snackBarRef = useRef<any>()

  useEffect(() => {
    if (animating) {
      setTimeout(() => {
        if (snackBarRef.current) snackBarRef.current.classList.remove('open')
        setAnimating(false)
      }, duration)
    }
  }, [animating, duration])

  const SnackBar = useCallback(
    () => <Message ref={snackBarRef}>{message}</Message>,
    [message],
  )

  const openSnackBar = () => {
    const time = new Date().getTime() % 100000 // 정수초과로 자리수 낮추기
    if (snackBarRef.current) snackBarRef.current.style.zIndex = time
    if (!animating) {
      if (snackBarRef.current) snackBarRef.current.classList.add('open')
      setAnimating(true)
    }
  }

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
