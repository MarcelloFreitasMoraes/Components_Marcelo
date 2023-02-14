import React from 'react'
import { render, screen } from '@testing-library/react'
import { ArrowLeft } from './ArrowLeft'

describe(':: ArrowLeft', () => {
  it('Render component ArrowLeft with width and height', () => {
    render(<ArrowLeft width={6} height={10} />)
    expect(screen.getByTestId('arrow-left-id')).toBeInTheDocument()
  })
  it('Render component Successfully', () => {
    render(<ArrowLeft />)
    expect(screen.getByTestId('arrow-left-id')).toBeInTheDocument()
  })
})
