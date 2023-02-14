export interface SettlementsProps {
  settlements: Array<SettlementProps>
}

export interface SettlementProps {
  discounts_value: number
  funding: string
  gross_value: number
  net_value: number
  transactions_qty: number
  settlement_id: string
  currency: string
}
