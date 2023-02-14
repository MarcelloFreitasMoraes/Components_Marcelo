import React from 'react'
import { render } from '@testing-library/react'
import { ModalAntecipation } from './ModalAntecipation'

describe(':: MyComponent', () => {
  it('Render component with child', () => {
    const { getByTestId } = render(<ModalAntecipation>Teste</ModalAntecipation>)
  })

  it('render component with nothing', () => {
    const { getByTestId } = render(<ModalAntecipation></ModalAntecipation>)
  })
})
