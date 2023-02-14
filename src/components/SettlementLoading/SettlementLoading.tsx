import React from 'react'
import { LoadingSkeleton } from '../Skeleton'

export const SettlementLoading = () => {
  return (
    <>
      <LoadingSkeleton
        isActive
        isLoading
        skeleton={[
          ['30'],
          ['30'],
          ['100'],
          ['100'],
          ['100'],
          ['100'],
          ['100'],
          ['100'],
        ]}
        hasTitle={false}
        size={52}
        data-testid="SettlementLoading"
      ></LoadingSkeleton>
    </>
  )
}
