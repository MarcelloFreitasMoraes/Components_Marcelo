import React from "react"
import { ButtonFilterProps } from "./interfaces"
import * as S from './styles'

export const ButtonFilter = ({ action, icon, text, disabled }: ButtonFilterProps) => {

    return (
        <div data-testid='test-button-filter' >
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