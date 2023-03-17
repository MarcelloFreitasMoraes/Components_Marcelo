import React from 'react'
import { render } from '@testing-library/react'
import { ButtomDropdown } from './ButtomDropdown'


describe(':: MyComponent', () => {
    it('Should render TableDaily', () => {
        const { getByTestId } = render(
            <ButtomDropdown
                action={jest.fn()}
                open={false}
            >
                teste
            </ButtomDropdown>
        )
        expect(getByTestId('buttom-daily')).toBeTruthy()
    })

})
















