import React from 'react'
import * as S from './styles'

interface Props {
  label: string
  checked?: any
  id?: any
  action: any
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
        onClick={() => props.action(props.id, props.label)}
      />
      <span className="checkmark"></span>
    </S.Label>
  )
}
export default Checkbox
