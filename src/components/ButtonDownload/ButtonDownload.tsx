import React from "react"
import { ButtonFilterProps } from "./interfaces"
import * as S from './styles'

export const ButtonDownload = ({ action, icon, text, disabled }: ButtonFilterProps) => {

    return (
        <div data-testid='test-button-download' >
            <S.ButtonText>
                <S.ButtonAction
                    onClick={action} disabled={disabled} >
                    <S.Icon>{icon && icon}</S.Icon>
                    {text}
                </S.ButtonAction>
            </S.ButtonText>
        </div>
    )
}