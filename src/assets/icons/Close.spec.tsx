import React from 'react'
import { render, screen } from '@testing-library/react'
import { Close } from './Close'

describe(':: Close', () => {
  it('Render component Close with width and height', () => {
    render(<Close width={24} height={24} />)
    expect(screen.getByTestId('close-id')).toBeInTheDocument()
  })
  it('Render component Successfully', () => {
    render(<Close />)
    expect(screen.getByTestId('close-id')).toBeInTheDocument()
  })
})
