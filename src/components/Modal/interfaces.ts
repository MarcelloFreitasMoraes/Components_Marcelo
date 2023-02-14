import { ReactChild } from 'react'

export interface ModalProps {
  width?: string
  height?: string
  fullScreen?: boolean
  modalTitle?: string
  showMargins?: boolean
  children?: ReactChild
  open: boolean
  modalHeader?: string
}
