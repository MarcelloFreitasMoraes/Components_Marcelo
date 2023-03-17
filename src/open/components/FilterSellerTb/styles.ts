import { utils } from '@albatross/ui'
import styled from 'styled-components'
import { Text } from '@albatross/react-ui-typography'

interface Props<T = any> {
  open?: T
  spin?: T
  color?: T
  border?: T
}

const darkGrey = ({ theme }: any) => theme?.colors?.greys?.dark || '#444444'
const white = ({ theme }: any) => theme?.colors?.white || '#FFFFFF'
const santander = ({ theme }: any) =>
  theme?.color?.main?.primary?.['01'] || '#EC0000'
const lightSky = ({ theme }: any) =>
  theme?.color?.main?.primary?.['09'] || '#DEEDF2'
const lighterGrey = ({ theme }: any) =>
  theme?.color?.main?.primary?.['08'] || '#F0F0F0'
const ashGray = ({ theme }: any) => theme?.colors?.greys?.ash || '#4F4F4F'
const lightGrey = ({ theme }: any) =>
  theme?.color?.main?.primary?.['07'] || '#CCCCCC'
const mediumGray = ({ theme }: any) =>
  theme?.color?.main?.primary?.['06'] || '#767676'

export const Container = styled.div`
  background: ${white};
  width: 320px;
  position: absolute;
  top: 26%;
`
export const Icon = styled.div`
  cursor: pointer;
`
export const CalendarBox = styled.div`
  border-left: 1px solid ${lightSky};
  border-right: 1px solid ${lightSky};
  border-bottom: 1px solid ${lightSky};
  > div {
    margin: 0 auto;
    height: 310px !important;
  }
`
export const DropdownBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${white};
  width: 320px;
  height: 284px;
  box-shadow: rgb(0 0 0 / 5%);
  border-radius: 4px;
  position: absolute;
  left: 15px;
  border-left: 1px solid ${lightSky};
  border-right: 1px solid ${lightSky};
  border-bottom: 1px solid ${lightSky};
`
export const ButtonEstab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`
export const TextActionBold = styled.p<Props>`
  ${({ color }) => {
    return color
      ? {
          color: '#222222',
        }
      : {
          color: '#8F8F8F',
        }
  }};

  margin: 0;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Santander Micro Text';
  text-transform: capitalize;
`

export const Bullet = styled.span`
  color: ${santander};
  margin-left: 5px;
`

export const Box = styled.div`
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${lighterGrey};
    color: ${darkGrey};
  }
`
export const Search = styled.div`
  margin-right: 4px;
  margin-top: 10px;
`
export const SearchCodAut = styled.div`
  margin-top: 10px;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const CheBox = styled.div``

export const CheBoxSelect = styled.div`
  margin-top: 25px;
`
export const BoxBorder = styled.span`
  border-bottom: 1px solid ${lightSky};
  width: 100%;
`
export const CheBoxSelectCod = styled.div`
  margin-top: 25px;
`
export const Clesel = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CleselP = styled.p<Props>`
  ${({ color }) => {
    return color
      ? {
          color: 'rgba(37, 127, 164, 1)',
        }
      : {
          color: '#EC0000',
        }
  }};

  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  font-family: 'Santander Micro Text';
  margin-right: 30px;
`
export const SearchContainer = styled.div`
  position: relative;
  top: -45px;
`

export const Border = styled.div`
  border-top: 1px solid ${lighterGrey};
`
export const BorderBotton = styled.div<Props>`
  border-bottom: ${({ border }) =>
    border ? '1px solid #DEEDF2' : '1px solid #F0F0F0'};
`

export const BottonStatus = styled.div`
  margin-bottom: 15px;
`
export const SearchContainerAut = styled.div``

export const FilterContent = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 25px 12px 7px;
  margin-bottom: 10px;
`
export const Clean = styled.button`
  background-color: ${white};
  border: none;
  cursor: pointer;

  :disabled {
    background: ${white};
    color: ${lightGrey};
    border: none;
    cursor: auto;
  }
`

export const ButtonDropFilter = styled.button`
  background-color: ${santander};
  border-radius: 30px;
  color: ${white};
  border: 1px solid ${santander};
  padding: 4px 24px 4px 24px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  width: 102px;
  height: 32px;

  :disabled {
    background: #f6f6f6;
    color: ${lightGrey};
    border: 1px solid ${lightGrey};
    cursor: auto;
  }
`
export const IconStyled = styled.span`
  font-size: 1rem;
  position: absolute;
  margin-right: 20px;
  right: 0;
  color: ${ashGray};
`

export const DropdownBoxEstab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${white};
  width: 320px;
  height: 285px;
  box-shadow: rgb(0 0 0 / 5%);
  border-radius: 4px;
  position: absolute;
  left: 15px;
  border-left: 1px solid ${lightSky};
  border-right: 1px solid ${lightSky};
  border-bottom: 1px solid ${lightSky};
  max-height: 285px;
  overflow-x: auto;
`
export const DropdownBoxStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${white};
  width: 320px;
  height: 220x;
  box-shadow: rgb(0 0 0 / 5%);
  border-radius: 4px;
  position: absolute;
  left: 15px;
  border-left: 1px solid ${lightSky};
  border-right: 1px solid ${lightSky};
  border-bottom: 1px solid ${lightSky};
`
export const DropdownBoxAut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${white};
  width: 320px;
  height: 295px;
  box-shadow: rgb(0 0 0 / 5%);
  border-radius: 4px;
  position: absolute;
  left: 15px;
  top: -45px;
  border-left: 1px solid ${lightSky};
  border-right: 1px solid ${lightSky};
  border-bottom: 1px solid ${lightSky};
  max-height: 295px;
  overflow-x: auto;
`
export const MonthDropdown = styled.div`
  margin-left: 21.5rem;
  width: 320px;
  z-index: 1;
  background: ${white};
  position: absolute;
  font-family: 'Santander Micro Text';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${darkGrey};
  position: absolute;
  z-index: 99999;
  top: -12px;

  button:first-child {
    display: none;
  }
  .btn-content span {
    font-size: 12px !important;
  }
  button {
    color: ${santander};
    margin-left: -25px !important;
    :hover {
      background-color: ${white} !important;
    }
  }

  @media (max-width: ${utils.getProps('theme.breakpoints.tablet')}px) {
    width: 100%;
  }
`
export const DateName = styled.p`
  padding-left: 16px;
  font-family: 'Santander Micro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin: 5px 0;
  padding: 8px 12px;
  cursor: pointer;
  overflow: hidden;
`
export const BoxContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${white};
  margin-right: 20px;
  width: 280px;
`

export const IconLeft = styled.div`
  padding-left: 16px;
  cursor: pointer;
`
export const TextTypography = styled(Text)`
  padding-left: 16px;
  font-family: 'Santander Micro Text';
  font-weight: 700;
  color: ${santander};
  font-size: 16px;
`
export const ContainerSelectDate = styled.div`
  display: flex;
  align-items: center;
  width: 320px;

  :hover {
    background-color: ${lighterGrey};
    color: ${darkGrey};
  }
`
export const ContainerDate = styled.div`
  margin-right: 50px;
`
export const DateSelector = styled.input`
  display: block;
  width: 24px;
  height: 24px;
  border: 1px solid ${mediumGray};
  border-radius: 50%;
  margin: 0 10px;
  appearance: none;
  cursor: pointer;

  &:checked {
    background-color: ${white};
    border: 2px solid ${santander};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  }

  &:checked:after {
    content: '';
    position: relative;
    top: 4px;
    color: ${santander};
    background: ${santander};
    border-radius: 50%;
    width: 12px;
    height: 12px;
    display: inline-block;
  }
`
