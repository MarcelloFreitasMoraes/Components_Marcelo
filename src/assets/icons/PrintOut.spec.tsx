import React from 'react'
import { render, screen } from '@testing-library/react'
import { PrintOut } from './PrintOut'

describe(':: PrintOut', () => {
  it('Render component PrintOut with width and height', () => {
    render(<PrintOut width={17} height={17} />)
    expect(screen.getByTestId('print-out-id')).toBeInTheDocument()
  })
  it('Render component Successfully', () => {
    render(<PrintOut />)
    expect(screen.getByTestId('print-out-id')).toBeInTheDocument()
  })
})
