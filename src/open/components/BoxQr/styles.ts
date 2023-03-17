import styled from 'styled-components'
import { Text, Title } from '@albatross/react-ui-typography'

const lightSky = ({ theme }: any) =>
  theme?.color?.main?.primary?.['09'] || '#DEEDF2'
const darkGrey = ({ theme }: any) => theme?.colors?.greys?.dark || '#444444'
const white = ({ theme }: any) => theme?.colors?.white || '#FFFFFF'
const santander = ({ theme }: any) =>
  theme?.color?.main?.primary?.['01'] || '#EC0000'
const accessibleSky = ({ theme }: any) =>
  theme?.color?.main?.accessible?.['06'] || '#257FA4'

export const Container = styled.div`
  padding: 24px;
  background: ${white};
  border: 1px solid ${lightSky};
  border-radius: 8px;
`
export const TextNull = styled(Title)`
  font-size: 24px;
  color: ${accessibleSky};
  font-weight: 400;
`
export const TextTypography = styled(Text)`
  font-size: 16px;
  font-family: 'Santander Headline';
  color: ${darkGrey};
  font-weight: 400;
`

export const Link = styled.a`
  font-family: 'Santander Micro Text';
  cursor: pointer;
  font-size: 16px;
  color: ${darkGrey};
  font-weight: 400;
`
export const ColorLink = styled.span`
  font-family: 'Santander Micro Text';
  color: ${santander};
  font-weight: 400;
`
