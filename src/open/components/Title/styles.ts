import styled, { css } from 'styled-components'

interface FontSizeProps {
  fontSize: any
}

const darkGrey = ({ theme }: any) => theme?.colors?.greys?.dark || '#444444'
const santander = ({ theme }: any) =>
  theme?.color?.main?.primary?.['01'] || '#EC0000'

const titleStyles = css`
  font-weight: bold;
  font-size: ${({ fontSize }: any) => `${fontSize}px`};
  line-height: 32px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
`

export const TitleContainer = styled.div<FontSizeProps>`
  color: ${darkGrey};
  font-weight: 700;
  font-family: 'Santander Headline';

  & * {
    ${titleStyles}
  }

  ${titleStyles}
`

export const RedTextUnderLine = styled.div`
  height: 4px;
  width: 40px;
  margin-top: 8px;
  background-color: ${santander};
`
