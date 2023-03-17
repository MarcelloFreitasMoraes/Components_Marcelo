import { ReactChild, SetStateAction } from 'react'

export interface PopoverProps<T = any> {
  children?: ReactChild
  open?: boolean | T
  withSpacing?: boolean
  parentWidth?: boolean
  positionRelative?: boolean
  width?: T
  mobileWidth?: T
  outsideClick?: React.Dispatch<SetStateAction<T>>
  updateOutsideClick?: T
  calendar?: T
  calendarPosition?: T
  parentRef?: T
  clean?: T
}
