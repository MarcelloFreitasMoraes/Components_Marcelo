import React from 'react'
import * as S from './styles'
import { ButtonDropdownProps } from './interfaces'
import { ArrowBottonRed } from '../../assets/icons/ArrowBottonRed'

export const ButtomDropdownDaily: React.FC<ButtonDropdownProps> = ({
  calendar,
  label,
  value,
  children,
  action,
  open,
  icon,
  up,
}) => {
  return (
    <S.ButtomParentContainer data-testid="buttom-daily">
      <S.ButtomContainer onClick={action}>
        <S.BoxContent>
          {icon && <S.IconLeft>{icon}</S.IconLeft>}
          <div>
            <S.Label up={up}>{label}</S.Label>
            {(value || open) && <S.Value>{value}</S.Value>}
          </div>
        </S.BoxContent>
        <S.IconRight spin={open}>
          <ArrowBottonRed />
        </S.IconRight>
      </S.ButtomContainer>
      {open && (
        <S.boxOptions>
          <S.DropOptions calendar={calendar}>
            <S.Options calendar={calendar}>{children}</S.Options>
            {calendar && <S.Calendar>{calendar}</S.Calendar>}
          </S.DropOptions>
        </S.boxOptions>
      )}
    </S.ButtomParentContainer>
  )
}
