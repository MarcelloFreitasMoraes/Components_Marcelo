export interface StatementsProps {
  userDetails: { sellers: Array<SellerProps> }
  tenant: string
  country: string
  featureToggle: {
    operations: {
      FT_AR_STATEMENTS_CURRENT_MONTH_FILTER: string
      FT_AR_STATEMENTS_MONTH_YEAR_FILTER: string
    }
  }
}

export interface SellerProps {
  seller_id: string
  trade_name: string
  seller_code?: string
  email?: string
}

export interface StatementsRequestDTO {
  seller_id: string
  start_date?: string
  end_date?: string
  year?: string
  month?: string
  period?: number | undefined
}
