import React from 'react'
import { render } from '@testing-library/react'
import { ButtonContinue } from './ButtonContinue'

describe(':: MyComponent', () => {
  it('Render component ButtonContinue', () => {
    const { getByTestId } = render(
      <ButtonContinue text="teste" action={() => jest.fn()} />
    )
    expect(getByTestId('test-button-continue')).toBeTruthy()
  })
})
