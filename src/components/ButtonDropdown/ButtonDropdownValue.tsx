import React, { FC } from 'react'
import { ButtonDropdownValueStyle } from './styles'

export const ButtonDropdownValue: FC = React.memo(({ children }) =>
  children ? (
    <ButtonDropdownValueStyle data-testid={'button-dropdown-value'}>
      {children}
    </ButtonDropdownValueStyle>
  ) : null
)
