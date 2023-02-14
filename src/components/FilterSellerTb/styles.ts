import styled from 'styled-components'

interface Props<T = any> {
  open?: T
  spin?: T
  color?: T
}

const mediumGray = ({ theme }: any) =>
  theme?.color?.main?.primary?.['06'] || '#767676'
const darkGrey = ({ theme }: any) => theme?.colors?.greys?.dark || '#444444'
const white = ({ theme }: any) => theme?.colors?.white || '#FFFFFF'
const santander = ({ theme }: any) =>
  theme?.color?.main?.primary?.['01'] || '#EC0000'
const lightSky = ({ theme }: any) =>
  theme?.color?.main?.primary?.['09'] || '#DEEDF2'
const accessibleSky = ({ theme }: any) =>
  theme?.color?.main?.accessible?.['06'] || '#257FA4'
const darkerGray = ({ theme }: any) =>
  theme?.color?.main?.primary?.['05'] || '#222222'

export const Container = styled.div<Props>`
  ${({ open }) => {
    return open
      ? {
          transform: 'translateX(0px)',
        }
      : {
          transform: 'translateX(-318px)',
        }
  }}

  background: #fafbfc;
  width: 300px;
  max-height: 1200px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 0 32px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  transition: transform 400ms ease-in-out;
  box-shadow: 0px 20px 30px rgb(0 0 0 / 7%), 0px 0px 10px rgb(0 0 0 / 5%);
`

export const FilterTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Glass = styled.div`
  z-index: 999;
  margin-top: 88px;
  margin-left: 195px;
  cursor: pointer;
  position: absolute;
  cursor: pointer;
`

export const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  color: ${darkGrey};
  font-family: 'Santander Headline';
`

export const Icon = styled.div`
  cursor: pointer;
`

export const Arrow = styled.div<Props>`
  ${({ spin }) => {
    return spin
      ? {
          transform: 'rotate(180deg)',
        }
      : {
          transform: 'rotate(0deg)',
        }
  }};
  margin: 0px 7px;
  transition: transform 400ms ease-in-out;
`
export const DropdownBox = styled.div`
  display: flex;
  margin: 24px 0 24px -13px;
  width: 265px;
  height: 330px;
  box-shadow: rgb(0 0 0 / 5%);
  border-radius: 4px;

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
`
export const ButtonEstab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin: 10px 0 10px 0;
`
export const TextEstab = styled.p<Props>`
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

export const Border = styled.div`
  border-bottom: 1px solid ${accessibleSky};
`
export const Box = styled.div`
  border-top: 1px solid ${accessibleSky};
  margin-top: 25px;
`
export const BoxBoard = styled.div`
  border-top: 1px solid ${accessibleSky};
`

export const Input = styled.input`
  border: 1px solid ${accessibleSky};
  border-radius: 600px;
  padding: 12px 16px 12px 16px;
  background: #fafbfc;
  font-family: 'Santander Micro Text';
  color: ${mediumGray};
  font-weight: 400;
  :focus-visible {
    outline-color: ${accessibleSky};
  }
`
export const Search = styled.div`
  margin-top: 15px;
`
export const SearchCodAut = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const TextFail = styled.p`
  font-family: 'Santander Micro Text';
  line-height: 1px;
  font-size: 12px;
  color: ${santander};
  font-weight: 400;
`
export const TextFailTwo = styled.p`
  font-family: 'Santander Micro Text';
  font-size: 12px;
  color: ${santander};
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 2px;
`

export const CheBox = styled.div`
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
`

export const ButtonFil = styled.button`
  background: ${santander};
  border-radius: 30px;
  color: white;
  border: none;
  padding: 8px 32px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  margin: 30px 0;
  display: flex;
  justify-content: center;
`

export const ButtonApply = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const SearchContainer = styled.div`
  border-top: 1px solid ${lightSky};
`
export const SearchContainerAut = styled.div`
  border-top: 1px solid ${lightSky};
`
