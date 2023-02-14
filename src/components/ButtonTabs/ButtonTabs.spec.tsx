import React from 'react'
import { render } from '@testing-library/react'
import { ButtonTabs } from './ButtonTabs'

describe(':: MyComponent', () => {
    it('Render component ButtonTabs', () => {
        const { getByTestId } = render(
            <ButtonTabs
                label='teste'
                action={() => jest.fn()}
            />)
        expect(getByTestId('test-button-tabs')).toBeTruthy()
    })
})
