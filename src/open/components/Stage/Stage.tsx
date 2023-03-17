import React from 'react'
import { ArrowRight } from '../../assets/icons/ArrowRight'
import { StageProps } from './interfaces'
import * as S from './styles'

export const Stage = ({ origin, currentRoute, action }: StageProps) => {
  return (
    <S.Container>
      <S.AlignText data-testid="Stage">
        <S.LinkOrigin onClick={action}>{origin}</S.LinkOrigin>
        <ArrowRight />
        <S.CurrentRoute data-test-id="current-id">{currentRoute}</S.CurrentRoute>
      </S.AlignText>
    </S.Container>
  )
}
