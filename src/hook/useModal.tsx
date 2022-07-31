import styled from '@emotion/styled'
import React, { ReactNode, useState } from 'react'
import Button, { ButtonTypes } from '../component/Button/Button'

interface ModalInterface {
  title?: string
  message?: string
  dimClose?: boolean // 딤 클릭시 모달 닫기. 버튼개수 1개 이하면 기본 true
  buttons?: {
    buttonType?: ButtonTypes
    children?: ReactNode
    onClick?: () => void
    closeButton?: boolean
  }[]
}

export function useModal({
  title,
  message,
  buttons,
  dimClose,
}: ModalInterface) {
  const [open, setOpen] = useState(false)
  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)
  const dimCloseCheck = dimClose || (buttons && buttons?.length < 2)

  const Modal = () =>
    open ? (
      <ModalDim onClick={() => dimCloseCheck && closeModal()}>
        <ModalWrapper>
          {title && <Title>{title}</Title>}
          {message && <Message>{message}</Message>}
          {buttons && (
            <ButtonDiv>
              {React.Children.toArray(
                buttons?.map(
                  ({ buttonType, children, onClick, closeButton }) => (
                    <Button
                      buttonType={buttonType}
                      height={38}
                      onClick={() => {
                        onClick && onClick()
                        if (closeButton) closeModal()
                      }}
                    >
                      {children}
                    </Button>
                  ),
                ),
              )}
            </ButtonDiv>
          )}
        </ModalWrapper>
      </ModalDim>
    ) : null

  return { Modal, openModal, closeModal }
}
const ModalDim = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`
const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 75%;
  max-width: 350px;
  min-width: 250px;
  max-height: 75%;
  overflow: auto;
  border: 1px solid gray;
  box-shadow: 2px 2px 4px #555;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  font-size: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.div`
  font-weight: bold;
`
const Message = styled.div`
  margin-top: 4px;
  font-size: 12px;
`
const ButtonDiv = styled.div`
  display: flex;
  align-content: center;
  justify-items: center;
  margin-top: 20px;
  font-size: 14px;
`
