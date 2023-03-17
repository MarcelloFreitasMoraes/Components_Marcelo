import React from 'react'
import { LoadingSkeleton } from '../Skeleton'

export const TableLoading = () => {
  return (
    <>
      <LoadingSkeleton
        isActive
        isLoading
        skeleton={[
          ['100'],
          ['100'],
          ['100'],
          ['100'],
          ['100'],
          ['100'],
          ['100'],
          ['100'],
        ]}
        hasTitle={false}
        size={52}
        data-testid="TableLoading"
      ></LoadingSkeleton>
    </>
  )
}
