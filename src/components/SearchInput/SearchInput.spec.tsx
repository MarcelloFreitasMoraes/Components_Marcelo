import React from 'react'
import { render } from '@testing-library/react'
import SearchInput from './SearchInput'

describe(':: SearchInput', () => {
  it('should render component with child', () => {
    const { getByTestId } = render(<SearchInput />)
    expect(getByTestId('SearchInput')).toBeTruthy()
  })
})
