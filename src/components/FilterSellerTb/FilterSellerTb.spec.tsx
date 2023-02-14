import React from 'react'
import { render } from '@testing-library/react'
import { FilterSellerTb } from './FilterSellerTb'

describe(':: MyComponent', () => {
    it('Render component FilterSellerTb', () => {
        render(<FilterSellerTb userDetails={{
            sellers: []
        }} actionFilter={function (): void {
            throw new Error('Function not implemented.')
        }} setEstablishmentFilter={function (): void {
            throw new Error('Function not implemented.')
        }} setCoudChange={function (): void {
            throw new Error('Function not implemented.')
        }} coudChange={undefined} />)
    })
})
