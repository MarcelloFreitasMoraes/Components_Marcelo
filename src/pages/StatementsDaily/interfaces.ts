export interface StatementsDiaryProps {
  userDetails: { sellers: Array<SellerProps> }
  tenant: string
  country: string
  featureToggle: {
    operations: {
      FT_AR_STATEMENTS_DIARY: string
      FT_AR_ANTICIPATIONS: string
    }
  }
  config: any
}

export interface SellerProps {
  seller_id?: string
  trade_name: string
}

export interface StatementsDailyRequestDTO {
  seller_id: string
  start_settlement_date?: string
  end_settlement_date?: string
}
export interface AnticipationsDTO {
  settlement_initial_date: string
  settlement_final_date: string
  seller_id: string
}

export interface SellersDTO {
  merchant_id: string
}
