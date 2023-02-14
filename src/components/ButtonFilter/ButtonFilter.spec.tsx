import React from 'react'
import { render } from '@testing-library/react'
import { ButtonFilter } from './ButtonFilter'

describe(':: MyComponent', () => {
    it('Render component ButtonFilter', () => {
        const { getByTestId } = render(
            <ButtonFilter
                text='teste'
                action={() => jest.fn()}
                icon='icon'
            />)
        expect(getByTestId('test-button-filter')).toBeTruthy()
    })
})
