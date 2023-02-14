import React from 'react'
import { ButtontabsProps } from './interfaces'
import * as S from './styles'

export const ButtonTabs = ({
  action,
  label,
  active,
  hidden,
}: ButtontabsProps) => {
  return (
    <div data-testid="test-button-tabs">
      <S.ButtonAction onClick={action} active={active} hidden={hidden}>
        {label}
      </S.ButtonAction>
    </div>
  )
}
