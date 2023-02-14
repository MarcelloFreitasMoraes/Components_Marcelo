import React from 'react'
import { ModalProps } from './interfaces'
import * as S from './styles'

export const ModalAntecipation = ({
  children,
  action,
  showModal,
}: ModalProps) => {
  return (
    <S.ModalAnt onClick={action} showModal={showModal}>
      <S.Container>{children}</S.Container>
    </S.ModalAnt>
  )
}
