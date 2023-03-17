import React from 'react'
import { InputStyled, InputNative, IconStyled, IconLeft } from './styles'
import { SearchInputProps } from './interface'

const SearchInput = (props: SearchInputProps) => {
  let delayInput: NodeJS.Timeout | undefined

  const handleChange = (e: any) => {
    const element = e.target

    if (props.onInputChange) {
      props.onInputChange(e)
    }

    if (props.onChange) {
      if (props.delayChange) {
        clearTimeout(delayInput)
        delayInput = setTimeout(() => {
          props.onChange(e, element)
        }, props.delayChange * 1000)
      } else {
        props.onChange(e, element)
      }
    }
  }

  return (
    <InputStyled data-testid="SearchInput">
      {props.iconLeft && (
        <div onClick={() => props.rightIconAction()}>
          <IconLeft>{props.iconLeft}</IconLeft>
        </div>
      )}
      <InputNative
        id="text"
        value={props.value}
        {...props}
        onChange={props.onChange}
        maxLength={props.maxLength ? props.maxLength : undefined}
      />
      {props.icon && (
        <div onClick={() => props.rightIconAction()}>
          <IconStyled name={props.icon} />
        </div>
      )}
      {props.customAfterIcon}
      {props.icon}
    </InputStyled>
  )
}

export default SearchInput
