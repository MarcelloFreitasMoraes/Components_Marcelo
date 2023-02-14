import React from 'react'
import { render } from '@testing-library/react'
import { ModalDaily } from './ModalDaily'

describe(':: MyComponent', () => {
    it('Render component with child', () => {
        const { getByTestId } = render(<ModalDaily>Teste</ModalDaily>)
    })

    it('render component with nothing', () => {
        const { getByTestId } = render(<ModalDaily></ModalDaily>)
    })
})