import React, { FC } from 'react'
import { ButtonDropdownContentProps } from './interfaces'
import { ButtonDropdownContentStyle } from './styles'

export const ButtonDropdownContent: FC<ButtonDropdownContentProps> = React.memo(
  ({ children, isOpen, align }) => {
    return children ? (
      <ButtonDropdownContentStyle
        isOpen={isOpen}
        align={align}
        className="button-dropdown-content"
        data-testid="button-dropdown-content"
      >
        {children}
      </ButtonDropdownContentStyle>
    ) : null
  }
)
