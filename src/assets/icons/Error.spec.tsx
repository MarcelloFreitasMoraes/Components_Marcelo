import React from 'react'
import { render, screen } from '@testing-library/react'
import { Error } from './Error'

describe(':: Error', () => {
  it('Render component Error with width and height', () => {
    render(<Error width={6} height={10} />)
    expect(screen.getByTestId('error-id')).toBeInTheDocument()
  })
  it('Render component Successfully', () => {
    render(<Error />)
    expect(screen.getByTestId('error-id')).toBeInTheDocument()
  })
})
