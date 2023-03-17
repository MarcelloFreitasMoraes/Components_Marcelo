import styled from 'styled-components'

const darkGrey = ({ theme }: any) => theme?.colors?.greys?.dark || '#444444'
const white = ({ theme }: any) => theme?.colors?.white || '#FFFFFF'
const santander = ({ theme }: any) =>
  theme?.color?.main?.primary?.['01'] || '#EC0000'

export const ContainerBut = styled.div`
  width: 100%;
  padding: 0 110px;
  background: ${white};
`

export const DLink = styled.div`
  margin: 30px 30px 30px 0;
`

export const SellerName = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  color: ${darkGrey};
  margin-left: -19px;
  font-family: 'Santander Headline';
`

export const BoxQrCode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const BoxQrAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Buttons = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 170px;
`

export const Container = styled.div``

export const AlignText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-left: 20px;
`

export const LinkAction = styled.a`
  color: ${santander};
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
`
export const TextPrint = styled.span`
  margin: 0 8px;
  font-family: 'Santander Micro Text';
  font-weight: 700;
  font-size: 14px;
`

export const QrCodeContainer = styled.div`
  margin: 0 auto;
  align-items: flex-end;
  width: 360px;
  height: 368px;
`
