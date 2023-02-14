import styled, { css } from 'styled-components'

interface TitleContainerProps {
  fontSize?: string
}

const titleStyles = css<TitleContainerProps>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: bold;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: 32px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const TitleContainer = styled.div<TitleContainerProps>`
  color: ${({ theme }) => theme?.color?.main?.primary?.['05'] || '#222222'};

  & * {
    ${titleStyles}
  }

  ${titleStyles}
`

export const RedTextUnderLine = styled.div`
  height: 4px;
  width: 40px;
  margin-top: 8px;
  background-color: ${({ theme }) =>
    theme?.color?.main?.primary?.['01'] || '#EC0000'};
`
