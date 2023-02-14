/* eslint-disable complexity */
import React from 'react'
import {
  Container,
  ModalContent,
  ModalBodyContent,
  ModalHeaderContent,
  TitleContainer,
} from './styles'
import { ModalProps } from './interfaces'
import { t } from '@albatross/react-i18n'

export const Modal = ({
  width,
  height,
  fullScreen = false,
  modalTitle,
  children,
  open,
  modalHeader,
}: ModalProps) => {
  if (open) {
    return (
      <Container data-testid="modal-testid">
        <ModalContent width={width} fullScreen={fullScreen} height={height}>
          {(modalTitle || modalHeader) && (
            <ModalHeaderContent>
              {modalTitle && <TitleContainer>{modalTitle}</TitleContainer>}
              {modalHeader}
            </ModalHeaderContent>
          )}
          <ModalBodyContent>{children}</ModalBodyContent>
        </ModalContent>
      </Container>
    )
  } else {
    return <></>
  }
}
