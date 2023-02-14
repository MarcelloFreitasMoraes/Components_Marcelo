import React from 'react'
import { render, screen } from '@testing-library/react'
import { Calendar } from './calendary'

describe(':: Calendar', () => {
  it('Render component Calendar with width and height', () => {
    render(<Calendar width={97} height={97} />)
    expect(screen.getByTestId('calendary-id')).toBeInTheDocument()
  })
  it('Render component Successfully', () => {
    render(<Calendar />)
    expect(screen.getByTestId('calendary-id')).toBeInTheDocument()
  })
})
