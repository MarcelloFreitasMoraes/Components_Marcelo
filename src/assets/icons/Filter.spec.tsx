import React from 'react'
import { render, screen } from '@testing-library/react'
import { Filter } from './Filter'

describe(':: Filter', () => {
  it('Render component Filter with width and height', () => {
    render(<Filter width={17} height={17} />)
    expect(screen.getByTestId('filter-id')).toBeInTheDocument()
  })
  it('Render component Successfully', () => {
    render(<Filter />)
    expect(screen.getByTestId('filter-id')).toBeInTheDocument()
  })
})
