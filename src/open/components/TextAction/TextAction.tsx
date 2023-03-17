import React from 'react'
import { TextActionProps } from './interfaces'
import * as S from './styles'

export const TextAction = ({
  action,
  icon,
  text,
  counterFilter,
  background,
}: TextActionProps) => {
  return (
    <S.Container data-testid="text-action-id">
      <S.TypographyText>
        <S.TypographyAction data-testid="btn-action-id" onClick={action}>
          <S.Icon>{icon && icon}</S.Icon>
          {text}
          <S.Counter background={background}>
            <S.CounterSpa>{counterFilter !== 0 && counterFilter}</S.CounterSpa>
          </S.Counter>
        </S.TypographyAction>
      </S.TypographyText>
    </S.Container>
  )
}
