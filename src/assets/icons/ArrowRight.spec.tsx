import React from 'react'
import { render, screen } from '@testing-library/react'
import { ArrowRight } from './ArrowRight'

describe(':: ArrowRight', () => {
  it('Render component ArrowRight with width and height', () => {
    render(<ArrowRight width={6} height={10} />)
    expect(screen.getByTestId('arrow-right-id')).toBeInTheDocument()
  })
  it('Render component Successfully', () => {
    render(<ArrowRight />)
    expect(screen.getByTestId('arrow-right-id')).toBeInTheDocument()
  })
})
