export interface SettlementsProps {
  settlements: Array<SettlementProps>
}

export interface SettlementProps {
  total_discounts: number
  funding: string
  total_ammount: number
  net_value: number
  transactions_quantity: number
  currency: string
}
