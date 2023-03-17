import React from 'react'
import { activeLoading, LoadingSkeleton } from './Skeleton'
import { backgroundColor, loadingBackground } from './styles'
import { getThemeVariable } from '@albatross/ui/lib/utils'
import { render } from '@testing-library/react'

const greySalt = getThemeVariable('colors.greys.salt')

describe('Testing <LoadingSkeleton />', () => {
  test('Should render <LoadingSkeleton />', () => {
    const { getByTestId } = render(
      <LoadingSkeleton
        isActive={true}
        skeleton={[[''], [''], [''], [''], [''], [''], [''], ['']]}
        isLoading={false}
      />
    )
    expect(getByTestId('LoadingSkeleton')).toBeTruthy()
  })

  test('Test backgroundColor function', () => {
    expect(backgroundColor(false)).toEqual('white')
  })

  test('Test backgroundColor function', () => {
    expect(backgroundColor('red')).toEqual('red')
  })

  test('Test loadingBackground function just loading', () => {
    expect(loadingBackground(true, false)).toEqual(
      `linear-gradient(-90deg, white 0%, ${greySalt} 50%, white 100%)`
    )
  })

  test('Test loadingBackground function loading with background', () => {
    expect(loadingBackground(true, 'red')).toEqual(
      `linear-gradient(-90deg, red 0%, ${greySalt} 50%, red 100%)`
    )
  })

  test('Test loadingBackground function without loading and background', () => {
    expect(loadingBackground(false, false)).toEqual(greySalt)
  })

  test('Test activeLoading function', () => {
    expect(activeLoading(true, true)).toBeTruthy()
    expect(activeLoading(false, true)).toBeTruthy()
    expect(activeLoading(true, false)).toBeTruthy()
    expect(activeLoading(false, false)).toBeFalsy()
  })
})
