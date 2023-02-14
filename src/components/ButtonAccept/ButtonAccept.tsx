import React from "react"
import { ButtonFilterProps } from "./interfaces"
import * as S from './styles'

export const ButtonAccept = ({ action, text }: ButtonFilterProps) => {

    return (
        <div data-testid='test-button-accept' >
            <S.ButtonText>
                <S.ButtonAction
                    onClick={action}>
                    {text}
                </S.ButtonAction>
            </S.ButtonText>
        </div>
    )
}