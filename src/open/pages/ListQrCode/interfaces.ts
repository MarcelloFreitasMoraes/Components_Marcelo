import { ReactChild, HTMLAttributes } from 'react'

export interface ListQrCodeProps {
  userDetails: { sellers: Array<SellerProps> }
  tenant: string
  country: string
  merchantId?: string
  FT_AR_TRANSF_30_TABLE?: string
  FT_AR_TRANSF_30_FILTER?: string
  configSF?: any
}
export interface SellerProps {
  seller_id?: string
  trade_name: string
}
export interface MyComponentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild
  text?: string
  update?: (status: boolean) => void
}
export interface ConfigType {
  country?: string
  tenant?: string
  ['merchant-id']?: string
  Authorization?: string
}
export interface PayLoadType {
  page: string
  limit: string
  status: string
  transaction_initial_date: string
  transaction_final_date: string
  seller_id: string
  authorization_code: string
}
