import React from 'react'
import { render } from '@testing-library/react'
import { Title } from './Title'

describe(':: MyComponent', () => {
  it('Render component with child', () => {
    const { getByTestId } = render(<Title children="teste" fontSize="12" />)
    expect(getByTestId('Title')).toBeTruthy()
  })
})
