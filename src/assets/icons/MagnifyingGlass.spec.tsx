import React from 'react'
import { render, screen } from '@testing-library/react'
import { MagnifyingGlass } from './MagnifyingGlass'

describe(':: MagnifyingGlass', () => {
  it('Render component MagnifyingGlass with width and height', () => {
    render(<MagnifyingGlass width={24} height={24} />)
    expect(screen.getByTestId('magnifying-glass-id')).toBeInTheDocument()
  })
  it('Render component Successfully', () => {
    render(<MagnifyingGlass />)
    expect(screen.getByTestId('magnifying-glass-id')).toBeInTheDocument()
  })
})
