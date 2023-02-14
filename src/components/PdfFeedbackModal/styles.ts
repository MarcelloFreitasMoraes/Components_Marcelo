import styled from 'styled-components'

const ironGray = ({ theme }: any) => theme?.colors?.greys?.iron || '#282828'
const darkGrey = ({ theme }: any) => theme?.colors?.greys?.dark || '#444444'
const white = ({ theme }: any) => theme?.colors?.white || '#FFFFFF'
const red = ({ theme }: any) => theme?.colors?.primary || '#DE3131'

export const LoadingContainer = styled.div`
  padding: 37px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 20px;
`

export const Image = styled.img`
  width: 90px;
`

export const Title = styled.div`
  color: ${darkGrey};
  font-family: 'Santander Headline';
  font-size: 24px;
  line-height: 32px;
  text-align: center;
`

export const Paragraph = styled.div`
  color: ${darkGrey};
  font-family: 'Santander Micro Text';
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 24px;
  gap: 10px;
  font-family: 'Santander Micro Text';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  width: 107px;
  height: 32px;

  color: ${white};
  background: #ec0000;
  border-radius: 30px;
  cursor: pointer;
`
