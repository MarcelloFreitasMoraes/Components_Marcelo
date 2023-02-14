import React from 'react'
import { render } from '@testing-library/react'
import { StatementsDaily } from './StatementDaily'

window.HTMLElement.prototype.scrollIntoView = jest.fn()

describe(':: MyComponent', () => {
  it('Should render TableDaily', () => {
    const { getByTestId } = render(
      <StatementsDaily
        featureToggle={{
          operations: { FT_AR_ANTICIPATIONS: 'true', FT_AR_STATEMENTS_DIARY: 'true' },
        }} userDetails={{
          sellers: []
        }} tenant={''} country={''}      ></StatementsDaily>
    )
    expect(getByTestId('statements-diary')).toBeTruthy()
  })
})