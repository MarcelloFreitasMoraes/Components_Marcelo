import React, { FC } from 'react'
import { ButtonDropdownLeftStyle } from './styles'

export const ButtonDropdownLeft: FC = React.memo(({ children }) =>
  children ? (
    <ButtonDropdownLeftStyle data-testid={'button-dropdown-left'}>
      {children}
    </ButtonDropdownLeftStyle>
  ) : null
)
