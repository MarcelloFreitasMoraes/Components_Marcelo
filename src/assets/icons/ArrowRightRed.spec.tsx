import React from 'react'
import { render, screen } from '@testing-library/react'
import { ArrowRightRed } from './ArrowRightRed'

describe(':: ArrowRightRed', () => {
  it('Render component ArrowRightRed with width and height', () => {
    render(<ArrowRightRed width={24} height={24} />)
    expect(screen.getByTestId('arrow-right-red-id')).toBeInTheDocument()
  })
  it('Render component Successfully', () => {
    render(<ArrowRightRed />)
    expect(screen.getByTestId('arrow-right-red-id')).toBeInTheDocument()
  })
})
