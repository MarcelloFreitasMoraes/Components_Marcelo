import React from 'react'
import { render } from '@testing-library/react'
import { TableDaily } from './TableDaily'


describe(':: MyComponent', () => {
    it('Should render TableDaily', () => {
        const { getByTestId } = render(<TableDaily settlements={[]} ></TableDaily>)
        expect(getByTestId('table-daily')).toBeTruthy()
    })

})
