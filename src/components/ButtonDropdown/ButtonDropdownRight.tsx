import React, { FC } from 'react'
import { ButtonDropdownRightProps } from './interfaces'
import { ButtonDropdownRightStyle } from './styles'

export const ButtonDropdownRight: FC<ButtonDropdownRightProps> = React.memo(
  ({ children, isOpen = false }) => (
    <ButtonDropdownRightStyle isOpen={isOpen}>
      {children}
    </ButtonDropdownRightStyle>
  )
)
