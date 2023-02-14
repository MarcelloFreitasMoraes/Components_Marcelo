import React from 'react'
import { render, screen } from '@testing-library/react'
import { Download } from './Download'

describe(':: Download', () => {
  it('Render component Close with width and height', () => {
    render(<Download width={18} height={18} />)
    expect(screen.getByTestId('download-id')).toBeInTheDocument()
  })
  it('Render component Successfully', () => {
    render(<Download />)
    expect(screen.getByTestId('download-id')).toBeInTheDocument()
  })
})
