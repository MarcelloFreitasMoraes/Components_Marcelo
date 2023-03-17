import React from 'react'
import { ModalProps } from './interfaces'
import * as S from './styles'

export const Modal = ({ children, action }: ModalProps) => {
  return (
    <S.ModalQr
      data-testid="modal-id"
      onClick={action}>
      <S.Container>{children}</S.Container>
    </S.ModalQr>
  )
}
