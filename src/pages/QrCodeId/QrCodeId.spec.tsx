import React from 'react'
import { render } from '@testing-library/react'
import { QrCodeId } from './QrCodeId'

describe(':: QrCodeId', () => {
  it('Should render the QrCodeId', () => {
    const { getByTestId } = render(<QrCodeId>valid-text</QrCodeId>)
    expect(getByTestId('qr-code-id')).toBeTruthy()
  })
})
