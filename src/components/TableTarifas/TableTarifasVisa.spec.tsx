import React from 'react'
import { render } from '@testing-library/react'
import { TableTarifasVisa } from './TableTarifasVisa'

describe(':: MyComponent', () => {
  it('Should render TableTarifasVisa', () => {
    const { getByTestId } = render(
      <TableTarifasVisa
        settlements={[
          {
            taxes: [],
            discounts_value: 1,
            funding: 'credit',
            gross_value: 1,
            net_value: 1,
            transactions_qty: 1,
            settlement_id: 'string',
            currency: 'string',
          },
        ]}
      ></TableTarifasVisa>
    )
    expect(getByTestId('table-tarifas-visa')).toBeTruthy()
  })
})
