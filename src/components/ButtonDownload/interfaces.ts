export interface ButtonFilterProps {
  action?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onClose?: () => void
  icon?: any
  text: any
  disabled?: boolean
}
