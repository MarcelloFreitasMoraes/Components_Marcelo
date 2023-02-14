import React from 'react'
import { render } from '@testing-library/react'
import { ModalNotSearch } from './ModalNotSearch'

describe(':: MyComponent', () => {
    it('Render component with child', () => {
        const { getByTestId } = render(<ModalNotSearch>Teste</ModalNotSearch>)
    })

    it('render component with nothing', () => {
        const { getByTestId } = render(<ModalNotSearch></ModalNotSearch>)
    })
})