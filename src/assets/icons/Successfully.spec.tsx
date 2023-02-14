import React from 'react'
import { render, screen } from '@testing-library/react'
import { Successfully } from './Successfully'

describe(':: Successfully', () => {
    it('Render component Successfully with width and height', () => {

        render(
            <Successfully width={97} height={97} />
        )
        expect(screen.getByTestId('successfully-id')).toBeInTheDocument()
    })
    it('Render component Successfully', () => {

        render(
            <Successfully />
        )
        expect(screen.getByTestId('successfully-id')).toBeInTheDocument()
    })
})
