import React from 'react'
import { render } from '@testing-library/react'
import { ButtomDropdownDaily } from './ButtomDropdownDaily'


describe(':: MyComponent', () => {
    it('Should render TableDaily', () => {
        const { getByTestId } = render(
            <ButtomDropdownDaily
                label='Data'
                value='20/10/2022'
                action={jest.fn()}
                open={false}
            >
                teste
            </ButtomDropdownDaily>
        )
        expect(getByTestId('buttom-daily')).toBeTruthy()
    })

})
