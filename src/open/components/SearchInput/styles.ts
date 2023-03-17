import styled from 'styled-components'
import { Icon, utils } from '@albatross/ui'

// const white = ({ theme }: any) => theme?.colors?.white || '#FFFFFF'
// const accessibleSky = ({ theme }: any) =>
//   theme?.color?.main?.accessible?.['06'] || '#257FA4'
// const saltGray = ({ theme }: any) => theme?.colors?.greys?.salt || '#E3E3E3'
const lightSky = ({ theme }: any) =>
  theme?.color?.main?.primary?.['09'] || '#DEEDF2'
const lighterSky = ({ theme }: any) =>
  theme?.color?.main?.secundary?.['06'] || '#F5F9FB'

export const InputStyled = styled.div`
  background: ${lighterSky};
  border-radius: 4px;
  border-top: none;
  border-bottom: 1px solid ${lightSky};
  border-right: 1px solid ${lightSky};
  border-left: 1px solid ${lightSky};
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Santander Micro Text';
  width: 270px;

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  svg {
    margin: 0 5px;
  }
`

export const InputNative = styled.input`
  color: ${utils.getProps('theme.colors.body')};
  font-size: 14px;
  width: 288px;
  background: ${lighterSky};
  border: none;
  outline: none;
`

export const IconStyled = styled(Icon)`
  font-size: 16px;
  margin-right: 12px;
  color: ${utils.getProps('theme.colors.greys.ash')};
  cursor: 'pointer';
`
export const IconLeft = styled.div``
