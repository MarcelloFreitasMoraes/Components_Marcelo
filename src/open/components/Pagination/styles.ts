import styled from 'styled-components'

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

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${white};
`
export const Section = styled.div`
  margin-right: 40px;
`

export const Select = styled.select`
  width: 80px;
  height: 30px;
  padding: 5px 10px;
  border-bottom: 1px solid ${accessibleSky};
  border-top: 1px solid ${lightSky};
  border-left: 1px solid ${lightSky};
  border-right: 1px solid ${lightSky};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const Label = styled.label`
  margin-left: 10px;
  color: ${darkGrey};
  font-weight: 900;
  font-family: 'Santander Micro Text';
`
export const TestPag = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-top: 4px;
    cursor: pointer;
  }
`

export const List = styled.li`
  display: flex;
  list-style: none;
  justify-content: center;
`

export const Button = styled.button`
  padding: 0 3px;
  margin-top: 5px;
  font-family: 'Santander Micro Text';
  color: ${darkGrey};
  font-size: 16px;
  font-weight: 700;
  border: none;
  background-color: ${white};
  cursor: pointer;

  :disabled {
    color: ${mediumGray};
    cursor: auto;
  }
`

export const Prev = styled.button`
  padding: 0 25px 0 5px;
  margin-top: 5px;
  color: ${santander};
  font-family: 'Santander Micro Text';
  font-size: 16px;
  font-weight: 700;
  background-color: ${white};
  border: none;
  cursor: pointer;
`
export const Next = styled.button`
  padding: 0 5px 0 25px;
  margin-top: 5px;
  color: ${santander};
  font-size: 16px;
  font-weight: 700;
  background-color: ${white};
  border: none;
  cursor: pointer;
`
