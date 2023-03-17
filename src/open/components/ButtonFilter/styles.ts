import styled from 'styled-components'

interface Props {
  background?: any
}

const darkGrey = ({ theme }: any) => theme?.colors?.greys?.dark || '#444444'
const white = ({ theme }: any) => theme?.colors?.white || '#FFFFFF'
const santander = ({ theme }: any) =>
  theme?.color?.main?.primary?.['01'] || '#EC0000'
const lighterSky = ({ theme }: any) =>
  theme?.color?.main?.secondary?.['06'] || '#F5F9Fb'

export const Container = styled.div`
`

export const ButtonText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-family: 'Santander Micro Text';
  font-size: 16px;
  color: ${darkGrey};
  font-weight: 400;
`

export const ButtonAction = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  padding: 5px 13px 5px 13px;
  border-radius: 8px;
  border: 1px solid #cedee7;
  background: ${lighterSky};
  width: 125px;
  height: 32px;
`
export const Counter = styled.div<Props>`
  text-align: center;
  background-color: ${({ theme, background }) =>
    background ? santander({ theme }) : ''};
  color: ${white};
  font-size: 14px;
  width: 21px;
  height: 22px;
  border-radius: 50%;
  margin-left: 10px;
`
export const CounterSpa = styled.div`
  margin-top: 2px;
`
export const Icon = styled.div`
  margin-right: 10px;
`
