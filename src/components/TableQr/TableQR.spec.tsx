import React from 'react'
import { render } from '@testing-library/react'
import { TableQr } from './TableQr'

describe(':: TableQr', () => {
  it('Should render TableQr', () => {
    const { getByTestId } = render(<TableQr></TableQr>)
    expect(getByTestId('table-qr-id')).toBeTruthy()
  })
})
