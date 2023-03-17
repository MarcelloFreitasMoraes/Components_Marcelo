export interface ButtonFilterProps<T = any> {
  action?: () => void
  icon?: JSX.Element
  text?: T
  counterFilter?: T
  background?: T
}
