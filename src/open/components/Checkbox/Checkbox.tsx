import React from 'react'
import * as S from './styles'

interface Props<T = any> {
  label: string
  checked?: T
  id?: T
  onchange: T
  value?: string
}

const Checkbox = (props: Props) => {
  return (
    <S.Label data-testid="test-checkbox">
      <S.TextLabel>{props.label}</S.TextLabel>
      <S.Input
        data-testid="input-id"
        type="checkbox"
        checked={props.checked}
        onChange={props.onchange}
      />
      <span className="checkmark"></span>
    </S.Label>
  )
}
export default Checkbox
