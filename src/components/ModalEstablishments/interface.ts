import { ReactChild } from 'react'

export interface ModalEstablishmentsProps {
  width?: string
  height?: string
  fullScreen?: boolean
  modalTitle?: string
  showMargins?: boolean
  open: boolean
  setOpen: (status: boolean) => void
  modalHeader?: string
  userDetails: any
  selectedEstablishment: any
  setSelectedEstablishment: any
}

export interface SellerProps {
  seller_id?: string
  trade_name: string
  seller_code?: string
  email?: string
}
export interface SelectedSellerProps {
  seller_id?: string
  trade_name?: string
  seller_code?: string
  email?: string
}
