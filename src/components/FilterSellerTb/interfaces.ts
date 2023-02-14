import { SellerProps } from '../../pages/ListQrCode/interfaces'

export interface FilterSellerTbProps {
  seller?: boolean
  mockEstablishment?: string
  name?: string
  action?: () => void
  userDetails: { sellers: Array<SellerProps> }
}
export interface FilterProps<T = any> {
  isOpen?: boolean
  isClose?: () => void
  userDetails: { sellers: Array<SellerProps> }
  setStatus?: T
  setStartDateIso?: T
  setEndDateIso?: T
  actionFilter: () => void
  setEstablishmentFilter: (prev: T) => void
  setCoudChange: (e: T) => void
  coudChange: T
  status?: (prev: boolean) => void
}
