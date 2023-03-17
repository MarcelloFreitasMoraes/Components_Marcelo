import React from 'react'
import { render } from '@testing-library/react'
import { TableLoading } from './TableLoading'

describe(':: TableLoading', () => {
  it('should render component with child', () => {
    const { getByTestId } = render(<TableLoading />)
    expect(getByTestId('LoadingSkeleton')).toBeTruthy()
  })
})
