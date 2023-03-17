import styled from 'styled-components'
import { Icon } from '@albatross/react-ui-interface'

const mediumGray = ({ theme }: any) =>
  theme?.color?.main?.primary?.['06'] || '#767676'
const lightGrey = ({ theme }: any) =>
  theme?.color?.main?.primary?.['07'] || '#CCCCCC'
const darkerGray = ({ theme }: any) =>
  theme?.color?.main?.primary?.['05'] || '#222222'
const darkGrey = ({ theme }: any) => theme?.colors?.greys?.dark || '#444444'
const white = ({ theme }: any) => theme?.colors?.white || '#FFFFFF'
const santander = ({ theme }: any) =>
  theme?.color?.main?.primary?.['01'] || '#EC0000'
const accessibleSky = ({ theme }: any) =>
  theme?.color?.main?.accessible?.['06'] || '#257FA4'
const lightSky = ({ theme }: any) =>
  theme?.color?.main?.primary?.['09'] || '#DEEDF2'
const lighterGrey = ({ theme }: any) =>
  theme?.color?.main?.primary?.['08'] || '#F0F0F0'
const ashGray = ({ theme }: any) => theme?.colors?.greys?.ash || '#4F4F4F'
const natural05 = ({ theme }: any) =>
  theme?.color?.main?.neutral?.['05'] || '#F6F6F6'

interface Props<T = any> {
  spin?: T
  action?: () => void
  color?: T
}

export const Container = styled.div`
  width: 100%;
  padding: 0 50px;
  background: ${white};
`

export const BoxStage = styled.div`
  margin: 20px 0 16px 0;
`
export const Closer = styled.div`
  width: 100%;
`

export const BoxTitleButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const ButtonQr = styled.button`
  background: ${santander};
  border-radius: 30px;
  color: ${white};
  border: none;
  padding: 8px 24px;
  font-weight: 500;
  font-size: 16px;
  font-family: 'Santander Micro Text';
  cursor: pointer;

  :disabled {
    background: ${white};
    color: ${lightGrey};
    border: 1px solid ${lightGrey};
    cursor: auto;
  }
`

export const ButtonOutlineQr = styled.button`
  background: ${white};
  border-radius: 30px;
  color: ${santander};
  border: 1px solid ${santander};
  padding: 8px 24px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`

export const BoxButtonQr = styled.div`
  color: ${santander};
`

export const AttButton = styled.div`
  display: flex;
  align-items: center;
`
export const BoxHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;  
`

export const BoxCodes = styled.div`
  padding: 20px 0;
`

export const Subtitle = styled.h2`
  color: ${darkGrey};
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
  font-family: 'Santander Headline';
`

export const BoxModal = styled.div`
  height: 230px;
  position: relative;
`

export const BoxLoadError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 230px;
  justify-content: center;
`

export const TitleModal = styled.h2`
  color: ${darkGrey};
  font-size: 20px;
  font-weight: 700;
  font-family: 'Santander Headline';
`

export const TitleLoad = styled.h2`
  color: ${darkGrey};
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 8px;
  font-family: 'Santander Headline';
`

export const TitleError = styled.h2`
  color: ${darkerGray};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
  text-align: center;
  font-family: 'Santander Micro Text';
`

export const SubTitleModal = styled.p`
  margin: 12px 0 24px 0;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Santander Micro Text';
`

export const SubTitleLoad = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: ${mediumGray};
  margin-top: 0;
  font-family: 'Santander Micro Text';
`

export const BoxDropdown = styled.div`
  margin: 24px 0 42px 0;
`
export const ArrowR = styled.div<Props>`
  ${({ spin }) => {
    return spin
      ? {
          transform: 'rotate(180deg)',
        }
      : {
          transform: 'rotate(0deg)',
        }
  }};
  transition: transform 400ms ease-in-out;
  margin: 14px 0 0 275px;
  position: absolute;
  cursor: pointer;
  z-index: 999;
`

export const BoxBoard = styled.div`
  border-top: 1px solid ${accessibleSky};
  background: white;
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

  margin-left: 12px;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Santander Micro Text';
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 260px;
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
export const SearchContainer = styled.div`
  border-top: 1px solid ${lightSky};
  position: absolute;
  background: ${white};
  width: 100%;
`
export const DropdownBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`

export const EstabItems = styled.div`
  &:hover {
    background-color: ${santander};
    color: ${white};
  }
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
`

export const BoxButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: 'Santander Micro Text';
  margin-top: 35px;
`

export const DropContainer = styled.div`
  border-top: 1px solid ${lightSky};
  position: absolute;
  background: white;
  width: 320px;
`
export const FilterItems = styled.div`
  &:hover {
    background-color: ${lighterGrey};
    color: ${darkGrey};
  }
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
`
export const FilterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
`
export const Clean = styled.p``

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
    background: ${natural05};
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