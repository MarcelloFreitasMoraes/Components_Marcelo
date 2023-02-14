import React from 'react'
import { TitleProps } from './interfaces'
import * as S from './styles'

export const Title = ({ children, fontSize }: TitleProps) => {
  return (
    <S.Container data-testid="Title">
      <S.TitleContainer fontSize={fontSize}>{children}</S.TitleContainer>
      <S.RedTextUnderLine />
    </S.Container>
  )
}
