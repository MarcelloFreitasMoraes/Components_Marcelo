import React from 'react'
import { render, screen } from '@testing-library/react'
import { ClearIcon } from './ClearIcon'

describe(':: ClearIcon', () => {
  it('Render component ClearIcon with width and height', () => {
    render(<ClearIcon width={97} height={97} />)
    expect(screen.getByTestId('ClearIcon-id')).toBeInTheDocument()
  })
  it('Render component Successfully', () => {
    render(<ClearIcon />)
    expect(screen.getByTestId('ClearIcon-id')).toBeInTheDocument()
  })
})
