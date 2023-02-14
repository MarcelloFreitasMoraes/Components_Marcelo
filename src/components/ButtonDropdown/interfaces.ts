import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactElement,
  ReactNodeArray,
} from 'react'

export enum DropdownAlignment {
  Left = 'left',
  Right = 'right',
}

export interface ButtonDropdownProps
  extends Omit<
    Omit<Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>, 'value'>,
    'type'
  > {
  children?: ReactElement | ReactNodeArray
  closeOnClickInside?: boolean
  label?: ReactElement | string
  leftContent?: ReactElement | string
  onCollapse?: () => void
  onExpand?: () => void
  align?: DropdownAlignment
  value?: ReactElement | string
}

export interface ButtonDropdownLabelProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactElement | string
  hasValue: boolean
}

export interface ButtonDropdownRightProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactElement | string
  isOpen?: boolean
}

export interface ButtonDropdownContentProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactElement | ReactNodeArray
  isOpen: boolean
  align: DropdownAlignment
}
