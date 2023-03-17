import styled, { css } from 'styled-components'
import sanitizeCssSizeUnit from '../../utils/sanitizeCssSizeUnit'

interface Props<T = any> {
  open?: T
  openedCalendar?: T
  widthValue?: T
  mobileWidth?: T
  withSpacing?: T
  positionRelative?: T
  calendar?: T
  calendarPosition?: T
}

export const PopoverStyled = styled.div<Props>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  ${({ openedCalendar }) => {
    if (openedCalendar) {
      return css`
        width: 515px;
      `
    } else {
      return css`
        width: max-content;
      `
    }
  }};
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.07),
    0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  ${({ widthValue }) =>
    widthValue &&
    widthValue !== 'unset' &&
    `width: ${sanitizeCssSizeUnit(widthValue)};`};
  ${({ mobileWidth }) =>
    mobileWidth &&
    mobileWidth !== 'unset' &&
    `@media (max-width: 768px) {width: ${sanitizeCssSizeUnit(mobileWidth)};}`};
  padding: ${({ withSpacing }) => (withSpacing ? ' 17px' : '0px')};
  flex-direction: column;
  position: absolute;
  z-index: 8000;

  ${({ positionRelative }) =>
    positionRelative &&
    css`
      right: inherit;
      transform: translateX(5%);
    `};

  ${({ calendar }) =>
    calendar
      ? css`
          top: 0px;
          ${({ calendarPosition }: any) =>
            calendarPosition === 'left' ? 'right: 0' : 'left: 0'};
        `
      : css`
          top: 0px;
          right: 5%;
        `};

  ${({ id }) =>
    id === 'action-tools' &&
    css`
      margin-top: 22px;
      right: 1px;
      margin-right: 4px;
    `};

  &::-webkit-scrollbar {
    height: 4px;
    padding: 5px 0;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #8d99ae;
  }

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    width: 276px;
    transform: inherit;
    > div {
      flex-direction: column;
    }
  }
`

export const Wrapper = styled.div<Props>`
  display: flex;
  ${({ positionRelative }) =>
    positionRelative &&
    css`
      position: relative;
    `};
`
