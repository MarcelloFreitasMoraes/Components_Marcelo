import React from 'react'
import { render, act, fireEvent } from '@testing-library/react'
import { ButtonDropdown } from './ButtonDropdown'
import { DropdownAlignment } from './interfaces'
import { wait } from '../../utils/mock'

const validChildren = <div>valid-children</div>

describe(':: ButtonDropdown', () => {
  it('Should render the component', () => {
    const { getByTestId } = render(<ButtonDropdown />)

    expect(getByTestId('button-dropdown-wrapper')).toBeTruthy()
  })
  it('Should render the component with some different props', () => {
    const { getByTestId } = render(
      <ButtonDropdown
        closeOnClickInside={false}
        align={DropdownAlignment.Right}
      />
    )
    expect(getByTestId('button-dropdown-wrapper')).toBeTruthy()
  })
  it('Should render the value', () => {
    const { getByTestId } = render(<ButtonDropdown value="valid-value" />)

    const value = getByTestId('button-dropdown-value')
    expect(value).toBeTruthy()
    expect(value.textContent).toBe('valid-value')
  })
  it('Should render left content', () => {
    const { getByTestId } = render(
      <ButtonDropdown leftContent="valid-left-content" />
    )

    const leftContent = getByTestId('button-dropdown-left')
    expect(leftContent).toBeTruthy()
    expect(leftContent.textContent).toBe('valid-left-content')
  })
  it('Should render options', () => {
    const { getByTestId } = render(
      <ButtonDropdown>{validChildren}</ButtonDropdown>
    )

    const options = getByTestId('button-dropdown-content')
    expect(options).toBeTruthy()
  })
  it('Should execute callbacks methods when clicking outside', async () => {
    const onExpand = jest.fn()
    const onCollapse = jest.fn()

    const { getByTestId } = render(
      <ButtonDropdown
        label="valid-label"
        leftContent="valid-left-content"
        value="valid-value"
        closeOnClickInside={false}
        onCollapse={onCollapse}
        onExpand={onExpand}
      >
        {validChildren}
      </ButtonDropdown>
    )

    const trigger = getByTestId('button-dropdown-trigger')

    await act(async () => {
      fireEvent.click(trigger)
      await wait(1)
    })

    await act(async () => {
      fireEvent.click(document)
      await wait(1)
    })

    expect(onExpand).toHaveBeenCalled()
    expect(onCollapse).toHaveBeenCalled()
  })
})
