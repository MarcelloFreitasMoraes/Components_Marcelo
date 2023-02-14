import React from 'react'
import { render, screen } from '@testing-library/react'
import { ArrowTopRed } from './ArrowTopRed'

describe(':: ArrowTopRed', () => {
  it('Render component ArrowTopRed with width and height', () => {
    render(<ArrowTopRed width={24} height={24} />)
    expect(screen.getByTestId('arrow-top-red-id')).toBeInTheDocument()
  })
  it('Render component Successfully', () => {
    render(<ArrowTopRed />)
    expect(screen.getByTestId('arrow-top-red-id')).toBeInTheDocument()
  })
})
