import React from 'react'
import { render } from '@testing-library/react'
import { Stage } from './Stage'

describe(':: MyComponent', () => {
    it('Should render the component', () => {
        const { getByTestId } = render(<Stage origin='Teste' />)
        expect(getByTestId('Stage')).toBeTruthy()
    })
})
