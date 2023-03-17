import { SetStateAction } from 'react'
import { SellerProps } from '../../pages/ListQrCode/interfaces'

export interface FilterSellerTbProps {
  seller?: boolean
  mockEstablishment?: string
  name?: string
  action?: () => void
  userDetails: { sellers: Array<SellerProps> }
}
export interface FilterProps<T = any> {
  data?: T
  userDetails: { sellers: Array<SellerProps> }
  setStatus: React.Dispatch<SetStateAction<T>>
  setStartDateIso?: T
  setEndDateIso?: T
  actionFilter: () => void
  setEstablishmentFilter: React.Dispatch<SetStateAction<T>>
  setCoudChange: (e: T) => void
  coudChange: T
  status?: T
  isClosed?: T
  establishmentFilter: T
  openDropDownFilter: T
  update: boolean
  setUpdate: React.Dispatch<SetStateAction<boolean>>
}
