import { TranslationContext } from '@albatross/react-i18n/lib/I18n/interfaces'
import { IconProps } from '@albatross/ui'
import { ReactChild } from 'react'

export interface SearchInputProps {
  value?: string
  onChange?: any
  onInputChange?: (e: any) => void
  icon?: React.ReactNode
  placeholder?: any
  mask?: string
  delayChange?: number
  limitChar?: number
  maxLength?: number
  rightIconAction?: any
  customAfterIcon?: React.ReactNode
}
