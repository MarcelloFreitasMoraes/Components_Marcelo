import React from 'react'
import * as S from './styles'
import { ButtonDropdownProps } from './interfaces'

export const ButtomDropdown: React.FC<ButtonDropdownProps> = ({
  calendar,
  children,
  open,
  action
}) => {
  return (
    <S.ParentContainer
      data-testid="buttom-daily"
      onClick={action}
      calendar={calendar}
    >    
      {open && (
        <S.boxOptions>
          <S.DropOptions calendar={calendar}>
            <S.Options calendar={calendar}>{children}</S.Options>
            {calendar && <S.Calendar>{calendar}</S.Calendar>}
          </S.DropOptions>
        </S.boxOptions>
      )}
    </S.ParentContainer>
  )
}
