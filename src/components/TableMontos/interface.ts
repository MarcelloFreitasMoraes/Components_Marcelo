export interface SettlementsProps {
  settlements: Array<SettlementProps>
}

export interface SettlementProps {
  total_ammount: number
  total_interest: number
  total_tax_amount: number
  total_base_amount: number
  anticipation_settlement_date: string
}
