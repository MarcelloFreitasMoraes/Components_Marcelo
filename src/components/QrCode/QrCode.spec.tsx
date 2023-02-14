import React from 'react'
import { render } from '@testing-library/react'
import { QrCode } from './QrCode'

describe(':: MyComponent', () => {
    it('Should render the component', () => {
        const { getByTestId } = render(<QrCode code='teste'></QrCode>)
        expect(getByTestId('QrCode')).toBeTruthy()
    })

})
