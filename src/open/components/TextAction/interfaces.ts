export interface TextActionProps<T = any> {
  action?: () => void
  icon?: JSX.Element
  text?: string
  counterFilter?: T
  background?: T
}
