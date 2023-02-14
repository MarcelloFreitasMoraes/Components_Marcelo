import React from 'react'
import { ModalProps } from './interfaces'
import * as S from './styles'

export const ModalDaily = ({ children, action }: ModalProps) => {
    return (
        <S.ModalQr onClick={action}>
            <S.Container>
                {children}
            </S.Container>
        </S.ModalQr>
    )
}
