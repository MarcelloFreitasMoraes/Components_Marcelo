import React, { FC } from 'react'
import { ButtonDropdownLabelProps } from './interfaces'
import { ButtonDropdownLabelStyle } from './styles'

export const ButtonDropdownLabel: FC<ButtonDropdownLabelProps> = React.memo(
  ({ children, hasValue }) =>
    children ? (
      <ButtonDropdownLabelStyle>
        {children}
        {hasValue && ':'}
      </ButtonDropdownLabelStyle>
    ) : null
)
