import styled from 'styled-components'

const mediumGray = ({ theme }: any) =>
  theme?.color?.main?.primary?.['06'] || '#767676'
const darkerGray = ({ theme }: any) =>
  theme?.color?.main?.primary?.['05'] || '#222222'

export const Container = styled.div`
  display: flex;
`

export const AlignText = styled.div`
  display: flex;
  align-items: center;
`

export const LinkOrigin = styled.a`
  color: ${mediumGray};
  font-size: 12px;
  margin-right: 5px;
  font-family: 'Santander Micro Text';
  font-weight: 400;
`

export const CurrentRoute = styled.p`
  color: ${darkerGray};
  font-size: 12px;
  margin-left: 5px;
  font-family: 'Santander Micro Text';
  font-weight: 400;
`
