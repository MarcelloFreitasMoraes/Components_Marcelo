import React from 'react'
import { render, screen } from '@testing-library/react'
import { ArrowBottonRed } from './ArrowBottonRed'

describe(':: ArrowBottonRed', () => {
  it('Render component ArrowBottonRed with width and height', () => {
    render(<ArrowBottonRed width={24} height={24} />)
    expect(screen.getByTestId('arrow-botton-Red-id')).toBeInTheDocument()
  })
  it('Render component Successfully', () => {
    render(<ArrowBottonRed />)
    expect(screen.getByTestId('arrow-botton-Red-id')).toBeInTheDocument()
  })
})
