import React from 'react'
import { LinkProps } from './interfaces'
import * as S from './styles'

export const Link = ({ action, icon, iconLeft, text }: LinkProps) => {
  return (
    <S.Container data-testid="Link">
      <S.AlignText onClick={action} iconLeft={iconLeft}>
        <S.LinkAction>{text}</S.LinkAction>
        <S.Icon>{icon && icon}</S.Icon>
      </S.AlignText>
    </S.Container>
  )
}
