import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface ButtonInterface {
  buttonType?: 'gray' | 'blue' | 'kakao'
  height?: 44 | 38 | 32
  fontSize?: 16 | 14 | 12 | 10
  styles?: SerializedStyles
  children?: ReactNode
  onClick?: () => void
}

export default function Button({
  onClick,
  children,
  ...props
}: ButtonInterface) {
  return (
    <StyledButton onClick={onClick} {...props}>
      <ButtonChildren>{children}</ButtonChildren>
    </StyledButton>
  )
}

const StyledButton = styled.button<ButtonInterface>`
  border: 0px;
  cursor: pointer;
  background: #33f;
  color: #fff;
  height: 44px;
  font-size: 16px;
  border-radius: 8px;
  padding: 4px 8px;
  overflow: hidden;

  ${({ buttonType }) => {
    if (buttonType === 'gray') return `background: #333`
    if (buttonType === 'kakao')
      return `background: #fee500; color: rgba(0,0,0,0.85); padding: 0; height: 45px;`
  }}

  ${({ height }) => height && `height: ${height}px;`}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}

  ${({ styles }) =>
    styles &&
    css`
      ${styles}
    `}
`

const ButtonChildren = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 100%;
  font: inherit;
`
