import styled, { css, keyframes } from 'styled-components'

interface Props {
  isLoading?: any
  fullBlock?: any
  position?: any
  wrapperPadding?: any
  firstRow?: any
  hasTitle?: any
  size?: any
  totalItems?: any
  width?: any
  background?: any
}

export const backgroundColor = (background: any) => {
  return background || 'white'
}

export const loadingBackground = (isLoading: boolean, background: any) => {
  const matchBackground = backgroundColor(background)
  const greySalt = '#E3E3E3'
  return isLoading
    ? `linear-gradient(-90deg, ${matchBackground} 0%, ${greySalt} 50%, ${matchBackground} 100%)`
    : greySalt
}

export const renderAsTitle = (firstRow: any, hasTitle: any, totalItems: any) =>
  firstRow && hasTitle && totalItems === 1

const pulse = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
`

const effectBackground = (isLoading: boolean, background: any) => css`
  padding: 0;

  background: ${loadingBackground(isLoading, background)};
  background-size: 400% 400%;
  border-radius: 8px;

  animation-name: ${pulse};
  animation-duration: 1.2s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`

const LoadingSkeletonStyled = styled.div<Props>`
  position: ${({ position }) => position};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  > .wrapper {
    position: relative;
    padding: ${({ wrapperPadding }) => wrapperPadding};
    width: 100%;
    height: 100%;

    background-color: ${({ background }) => backgroundColor(background)};
    /* border-radius: 30px; */

    &:last-child {
      margin-bottom: 0;
    }

    ${({ fullBlock, isLoading, background }) =>
      fullBlock && effectBackground(isLoading, background)}
  }
`

const GridRow = styled.div<Props>`
  margin-bottom: 2.857em;
  display: grid;
  grid-template-columns: repeat(${({ totalItems }) => totalItems}, 1fr);

  ${({ firstRow, hasTitle, totalItems, size }) =>
    renderAsTitle(firstRow, hasTitle, totalItems) &&
    css`
      grid-template-columns: 1fr;

      > div {
        height: ${size * 2}px;
      }
    `}
`

const Item = styled.div<Props>`
  width: ${({ width }) => width + '%'};
  height: ${({ size }) => size}px;

  ${({ isLoading, background }) => effectBackground(isLoading, background)}
`

export default LoadingSkeletonStyled

export { GridRow, Item }
