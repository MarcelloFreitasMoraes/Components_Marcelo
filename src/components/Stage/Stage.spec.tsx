import React from 'react'
import { render } from '@testing-library/react'
import { Stage } from './Stage'

describe(':: Stage', () => {
  it('should render component with child', () => {
    const { getByTestId } = render(<Stage label="teste" value={0} />)
    expect(getByTestId('Stage')).toBeTruthy()
  })
})
