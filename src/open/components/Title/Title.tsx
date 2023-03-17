import React from 'react'
import { TitleProps } from './interface'
import * as S from './styles'

export const Title = ({ children, fontSize }: TitleProps) => {
  return (
    <S.Container data-testid="Title">
      <S.TitleContainer fontSize={fontSize}>{children}</S.TitleContainer>
      <S.RedTextUnderLine />
    </S.Container>
  )
}
