import React from 'react'
import { render } from '@testing-library/react'
import CheckBox from './Checkbox'

describe(':: MyComponent', () => {
    it('Render component CheckBox', () => {
        const { getByTestId } = render(
            <CheckBox
                id='01'
                label='MiEstablishment01'
                action={() => jest.fn()}
                checked={true}
            />)
        expect(getByTestId('test-checkbox')).toBeTruthy()
    })
})
