import styled from 'styled-components'

interface Props<T = any> {
  calendar?: T
}

const white = ({ theme }: any) => theme?.colors?.white || '#FFFFFF'

export const ParentContainer = styled.div<Props>`
  position: relative;
  top: ${({ calendar }) => (calendar ? '12px' : '0')};
  left: ${({ calendar }) => (calendar ? '27px' : '0')};
`

export const boxOptions = styled.div<Props>`
  position: relative;
`

export const DropOptions = styled.div<Props>`
  position: ${({ calendar }) => (calendar ? 'absolute' : 'relative')};
  display: ${({ calendar }) => (calendar ? 'flex' : '')};
  width: ${({ calendar }) => (calendar ? '318px' : '')};
  background-color: ${white};
`

export const Options = styled.div<Props>`
  width: 318px;
  padding: 0 4px 0 4px;
  position: ${({ calendar }) => (calendar ? '' : 'absolute')};
  background-color: ${white};
`

export const Calendar = styled.div<Props>`
  width: 318px;
  position: absolute;
`
