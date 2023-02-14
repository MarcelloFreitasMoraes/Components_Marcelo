import React from 'react'
import { render } from '@testing-library/react'
import { TableMonto } from './TableMontos'

describe(':: MyComponent', () => {
  it('Should render TableMonto', () => {
    const { getByTestId } = render(
      <TableMonto
        settlements={[
          {
            total_ammount: 1,
            total_interest: 1,
            total_base_amount: 1,
            total_tax_amount: 1,
            anticipation_settlement_date: '2022-10-07T00:00:00.000+00:00',
          },
        ]}
      ></TableMonto>
    )
    expect(getByTestId('table-montos')).toBeTruthy()
  })
})
