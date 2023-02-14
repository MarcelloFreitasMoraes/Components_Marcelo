import React from 'react'
import { render, screen } from '@testing-library/react'
import { Attention } from './Attention'

describe(':: Attention', () => {
  it('Render component Attention with width and height', () => {
    render(<Attention width={97} height={97} />)
    expect(screen.getByTestId('attencion-id')).toBeInTheDocument()
  })
  it('Render component Successfully', () => {
    render(<Attention />)
    expect(screen.getByTestId('attencion-id')).toBeInTheDocument()
  })
})
