import React from 'react'
import { ButtonFilterProps } from './interfaces'
import * as S from './styles'

export const ButtonFilter = ({
  action,
  icon,
  text,
  counterFilter,
  background,
}: ButtonFilterProps) => {

  return (
    <S.Container data-testid="test-button-filter">
      <S.ButtonText>
        <S.ButtonAction data-testid="btn-action-id" onClick={action}>
          <S.Icon>{icon && icon}</S.Icon>
          {text}
          <S.Counter background={background}>
            <S.CounterSpa>{counterFilter}</S.CounterSpa>
          </S.Counter>
        </S.ButtonAction>
      </S.ButtonText>
    </S.Container>
  )
}
