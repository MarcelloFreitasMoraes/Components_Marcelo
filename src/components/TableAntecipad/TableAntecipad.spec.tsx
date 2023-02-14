import React from 'react'
import { render } from '@testing-library/react'
import { TableAntecipad } from './TableAntecipad'


describe(':: MyComponent', () => {
    it('Should render TableAntecipad', () => {
        const { getByTestId } = render(<TableAntecipad settlements={[]} ></TableAntecipad>)
        expect(getByTestId('table-daily')).toBeTruthy()
    })

})
