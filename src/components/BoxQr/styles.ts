import styled from 'styled-components'

const lightSky = ({ theme }: any) =>
  theme?.color?.main?.primary?.['09'] || '#DEEDF2'
const darkGrey = ({ theme }: any) => theme?.colors?.greys?.dark || '#444444'
const white = ({ theme }: any) => theme?.colors?.white || '#FFFFFF'
const santander = ({ theme }: any) =>
  theme?.color?.main?.primary?.['01'] || '#EC0000'

export const Container = styled.div`
  padding: 24px;
  background: ${white};
  border: 1px solid ${lightSky};
  border-radius: 8px;
`

export const TextNull = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 70px 0;
  color: ${darkGrey};
  font-size: 18px;
`

export const Link = styled.a`
  font-weight: 700;
  cursor: pointer;
  margin: 0 5px;
  color: ${santander};
`
