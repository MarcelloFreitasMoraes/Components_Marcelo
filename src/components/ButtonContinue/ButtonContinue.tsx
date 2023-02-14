import React from 'react'
import { ButtonContinueProps } from './interface'
import * as S from './styles'

export const ButtonContinue = ({
  action,
  text,
  disabled,
}: ButtonContinueProps) => {
  return (
    <S.ButtonContainer data-testid="test-button-continue">
      <S.ButtonText>
        <S.ButtonAction onClick={action} disabled={disabled}>
          {text}
        </S.ButtonAction>
      </S.ButtonText>
    </S.ButtonContainer>
  )
}
