import React from 'react'
import { render } from '@testing-library/react'
import { Pagination } from './Pagination'

describe(':: Pagination', () => {
  it('Should render Pagination', () => {
    const { getByTestId } = render(<Pagination></Pagination>)
    expect(getByTestId('pagination-id')).toBeTruthy()
  })
})
