import React from 'react'
import { render } from '@testing-library/react'
import { ButtonDownload } from './ButtonDownload'

describe(':: MyComponent', () => {
    it('Render component ButtonDownload', () => {
        const { getByTestId } = render(
            <ButtonDownload
                text='teste'
                action={() => jest.fn()}
                icon='icon'
            />)
        expect(getByTestId('test-button-download')).toBeTruthy()
    })
})
