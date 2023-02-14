import React from 'react'
import { render } from '@testing-library/react'
import { ButtonAccept } from './ButtonAccept'

describe(':: MyComponent', () => {
    it('Render component ButtonAccept', () => {
        const { getByTestId } = render(
            <ButtonAccept
                text='teste'
                action={() => jest.fn()}
                icon='icon'
            />)
        expect(getByTestId('test-button-accept')).toBeTruthy()
    })
})
