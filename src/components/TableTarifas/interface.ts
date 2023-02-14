export interface SettlementsProps {
  settlements: Array<SettlementProps>
}

export interface SettlementProps {
  taxes: []
  discounts_value: number
  funding: string
  gross_value: number
  net_value: number
  transactions_qty: number
  settlement_id: string
  currency: string
}

export interface TaxesProps {
  mastercard: CardsProps[]
  visa: CardsProps[]
}

export interface CardsProps {
  name: string
  value: number
  funding: string
  transaction_type: string
  transaction_channel_type: string
  percentage_tax: string
}
