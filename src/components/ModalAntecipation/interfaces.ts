import { ReactChild } from 'react'

export interface ModalProps {
  children?: ReactChild
  action?: () => void
  showModal?: boolean
}
