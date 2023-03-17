import React from 'react'
import { render } from '@testing-library/react'
import { Modal } from './Modal'

describe(':: MyComponent', () => {
    it('Render component with child', () => {
        const { getByTestId } = render(<Modal>Teste</Modal>)
    })

    it('render component with nothing', () => {
        const { getByTestId } = render(<Modal></Modal>)
    })
})