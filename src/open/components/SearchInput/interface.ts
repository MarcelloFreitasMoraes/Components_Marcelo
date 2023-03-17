import { FormEvent } from 'react'

export interface SearchInputProps<T = any> {
  iconLeft?: JSX.Element
  value?: string
  onChange?: T
  onInputChange?: (event: FormEvent) => void
  icon?: React.ReactNode
  placeholder?: T
  mask?: string
  delayChange?: number
  limitChar?: number
  maxLength?: number
  rightIconAction?: T
  customAfterIcon?: React.ReactNode
}
