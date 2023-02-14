import React from 'react'
import { render } from '@testing-library/react'
import { SettlementLoading } from './SettlementLoading'

describe(':: SettlementLoading', () => {
  it('should render component with child', () => {
    const { getByTestId } = render(<SettlementLoading />)
    expect(getByTestId('LoadingSkeleton')).toBeTruthy()
  })
})
