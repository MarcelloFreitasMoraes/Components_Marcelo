import React from 'react'
import { render } from '@testing-library/react'
import { TableTarifaMastercard } from './TableTarifasMastercard'

describe(':: MyComponent', () => {
  it('Should render TableTarifaMastercard', () => {
    const { getByTestId } = render(
      <TableTarifaMastercard
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
      ></TableTarifaMastercard>
    )
    expect(getByTestId('table-tarifas-mastercard')).toBeTruthy()
  })
})
