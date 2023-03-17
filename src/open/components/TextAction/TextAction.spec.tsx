import React from 'react'
import { render } from '@testing-library/react'
import { TextAction } from './TextAction'

describe(':: MyComponent', () => {
    it('Render component ButtonFilter', () => {
        const { getByTestId } = render(
            <TextAction
                text='teste'
                action={() => jest.fn()}
                icon='icon'
            />)
        expect(getByTestId('text-action-id')).toBeTruthy()
    })
})
