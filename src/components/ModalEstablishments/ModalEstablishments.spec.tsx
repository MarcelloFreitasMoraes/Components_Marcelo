/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { render } from '@testing-library/react'
import { ModalEstablishments } from './ModalEstablishments'

describe(':: MyComponent', () => {
  it('render component with nothing', () => {
    const { getByTestId } = render(
      <ModalEstablishments
        open
        selectedEstablishment={{}}
        setOpen={() => {}}
        setSelectedEstablishment={() => {}}
        userDetails={{}}
      ></ModalEstablishments>
    )
  })
})
