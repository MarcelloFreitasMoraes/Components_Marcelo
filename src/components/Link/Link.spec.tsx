import React from 'react'
import { render } from '@testing-library/react'
import { Link } from './Link'

describe(':: MyComponent', () => {
    it('Render component with child', () => {
        const { getByTestId } = render(<Link text='teste' />)
        expect(getByTestId('Link')).toBeTruthy()
    })
})
