import React from 'react'
import { render, screen } from '@testing-library/react'
import { Update } from './Update'

describe(':: Update', () => {
  it('Render component Update with width and height', () => {
    render(<Update width={20} height={19} />)
    expect(screen.getByTestId('update-id')).toBeInTheDocument()
  })
  it('Render component Successfully', () => {
    render(<Update />)
    expect(screen.getByTestId('update-id')).toBeInTheDocument()
  })
})
