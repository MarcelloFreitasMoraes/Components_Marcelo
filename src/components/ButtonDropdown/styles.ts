import styled, { css, StyledProps } from 'styled-components'
import { DropdownAlignment } from './interfaces'

interface ButtonDropdownProps extends StyledProps<unknown> {
  isOpen?: boolean
  align?: DropdownAlignment
}

const iddleColor = ({ theme }: ButtonDropdownProps) =>
  theme?.colors?.greys?.salt || '#E3E3E3'
const hoveredColor = ({ theme }: ButtonDropdownProps) =>
  theme?.colors?.greys?.coin || '#939393'
const activatedColor = ({ theme }: ButtonDropdownProps) =>
  theme?.colors?.primary || '#DE3131'

const openedTrigger = ({ isOpen }: ButtonDropdownProps) =>
  isOpen &&
  css`
    background-color: ${activatedColor};

    &,
    &:hover {
      border-color: ${activatedColor};
    }

    &,
    & * {
      color: white !important;
    }
  `
const openedRightIndicator = ({ isOpen }: ButtonDropdownProps) =>
  isOpen &&
  css`
    transform: rotate(-180deg);
  `

export const ButtonDropdownStyle = styled.div`
  position: relative;
  box-sizing: border-box;

  & * {
    box-sizing: border-box;
  }
`

export const TriggerStyle = styled.button<ButtonDropdownProps>`
  position: relative;
  padding: 0 1em;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1em;
  background-color: white;
  border: 1px solid ${iddleColor};
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: all ease 300ms;

  &:hover {
    border-color: ${hoveredColor};
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
    &:hover {
      border-color: ${iddleColor};
    }
  }

  ${openedTrigger}
`

const openedStyle = ({ isOpen }: ButtonDropdownProps) =>
  isOpen &&
  css`
    opacity: 1;
    pointer-events: 'initial';
    transform: translateX(0);
    visibility: 'visible';
  `

const positionStyle = ({ align }: ButtonDropdownProps) =>
  align === 'right'
    ? css`
        right: 0;
      `
    : css`
        left: 0;
      `

export const ButtonDropdownContentStyle = styled.div<ButtonDropdownProps>`
  background-color: white;
  position: absolute;
  top: 44px;
  max-width: 346px;
  width: 100%;
  opacity: 0;
  overflow-x: visible;
  pointer-events: 'none';
  transition: 375ms opacity ease, 375ms visibility ease;
  transform: translateX(-9999px);
  visibility: 'hidden';
  z-index: 2;

  ${positionStyle}
  ${openedStyle}
`

export const ButtonDropdownLabelStyle = styled.div`
  color: ${hoveredColor};
  white-space: nowrap;
`

export const ButtonDropdownValueStyle = styled.div`
  font-weight: bold;
  margin-left: 0.3em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ButtonDropdownLeftStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 0.714em;
  &,
  & * {
    color: ${({ theme }) => theme?.colors?.greys?.ash || '#4F4F4F'};
  }
`

export const ButtonDropdownRightStyle = styled.div<ButtonDropdownProps>`
  display: flex;
  flex-direction: row;
  padding-left: 0.714em;
  margin-left: auto;

  > .icon {
    transition: all ease 300ms;
    color: ${hoveredColor} ${openedRightIndicator};
  }
`
