import React from 'react'
import { render } from '@testing-library/react'
import { BoxQr } from './BoxQr'

describe(':: MyComponent', () => {
    it('Render component with child', () => {
        const { getByTestId } = render(<BoxQr>Teste</BoxQr>)
        expect(getByTestId('BoxQr')).toBeTruthy()
    })

    it('render component with nothing', () => {
        const { getByTestId } = render(<BoxQr>Teste</BoxQr>)
        expect(getByTestId('BoxQr')).toBeTruthy()
    })
})
