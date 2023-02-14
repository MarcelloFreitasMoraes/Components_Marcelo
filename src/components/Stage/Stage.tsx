import React from 'react'
import { StageProps } from './interfaces'
import * as S from './styles'

export const Stage = ({ label, value }: StageProps) => {
  return (
    <S.TotalGross data-testid="Stage">
      <S.TitleStatus>{label}</S.TitleStatus>
      <S.Value>${value}</S.Value>
    </S.TotalGross>
  )
}
