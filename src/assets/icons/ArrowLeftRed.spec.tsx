import React from 'react'
import { render, screen } from '@testing-library/react'
import { ArrowLeftRed } from './ArrowLeftRed'

describe(':: ArrowLeftRed', () => {
  it('Render component ArrowLeftRed with width and height', () => {
    render(<ArrowLeftRed width={20} height={20} />)
    expect(screen.getByTestId('arrow-left-red-id')).toBeInTheDocument()
  })
  it('Render component Successfully', () => {
    render(<ArrowLeftRed />)
    expect(screen.getByTestId('arrow-left-red-id')).toBeInTheDocument()
  })
})
