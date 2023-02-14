import React from 'react'
import { ModalNotSearchProps } from './interfaces'
import * as S from './styles'

export const ModalNotSearch = ({ children, action }: ModalNotSearchProps) => {
    return (
        <S.ModalQr onClick={action}>
            <S.Container>
                {children}
            </S.Container>
        </S.ModalQr>
    )
}
