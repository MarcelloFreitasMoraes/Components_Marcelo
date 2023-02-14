import styled, { css } from 'styled-components'
import { utils, Icon } from '@albatross/ui'

interface Props {
  colorType?: any
}

export const Container = styled.div`
  width: 100%;
`
export const TextTile = styled.div`
  font-family: 'Santander Headline';
  color: #444444;
  font-weight: 700;
`

export const BorderBox = styled.div`
  margin-top: 40px;
  padding: 24px;
  border: 1px solid #cedee7;
  border-radius: 8px;
  max-width: 1084px;
  display: flex;
  flex-direction: column;
`
export const LoadingCont = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`

export const Text = styled.p`
  font-family: 'Santander Micro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #444444;
`

export const DropdownBox = styled.div`
  display: flex;
  margin: 24px 0;
  border-radius: 24px;
  width: 661px;

  @media (max-width: ${utils.getProps('theme.breakpoints.tablet')}px) {
    flex-direction: column;
  }
`

export const MonthDropdown = styled.div`
  margin-right: 12px;
  width: 265px;
  z-index: 1;
  box-shadow: 0px 5px 5px rgb(0 0 0 / 12%);
  background: #ffffff;
  position: absolute;
  font-family: 'Santander Micro Text';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #444444;

  @media (max-width: ${utils.getProps('theme.breakpoints.tablet')}px) {
    width: 100%;
  }
`
export const BoxDate = styled.div`
  display: grid;
  justify-content: center;
  padding: 24px 10px 0px 10px;
  position: relative;

  div :before {
    color: #de3131;
  }
  div .current-moth-date {
    color: #de3131;
  }
`

export const Liquid = styled.div``
export const ReportTabs = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 320px;
`
export const DownloadButton = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const TextLiqui = styled.p`
  font-family: 'Santander Micro Text';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  margin: 10px 0 5px;
`
export const ColorLiqui = styled.span`
  font-family: 'Santander Micro Text';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #de3131;
`
export const TextLimit = styled.p`
  font-family: 'Santander Micro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: end;
  color: #444444;
`
export const ColorSpanVd = styled.span<Props>`
  color: ${({ colorType }) => (colorType ? '#137E84' : '#EC0000')};
  font-weight: 700;
`

export const BoxTotal = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Table = styled.div`
  margin-top: 16px;
`
export const Rates = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`
export const TextRates = styled.p`
  font-family: 'Santander Micro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  color: #444444;
`

export const TableModal = styled.div`
  margin: 16px 0 24px 0;
`

export const Link = styled.p`
  font-family: 'Santander Micro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  color: #444444;
  margin-top: 14px;
  margin-left: 5px;
  display: inline-flex;
  align-items: center;
`

export const ColorSpanRd = styled.span`
  color: #ec0000;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Santander Micro Text';
`
export const IconI = styled.div`
  margin-top: 10px;
  margin-left: 5px;
  cursor: pointer;
`
export const BoxLoadError = styled.div`
  display: flex;
  flex-direction: column;
`
export const BoxError = styled.div`
  display: flex;
  justify-content: center;
`
export const BoxNotSearch = styled.div`
  display: flex;
  margin-top: 0;
`
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`
export const CardDate = styled.div`
  p {
    padding-left: 50px;
  }
`

export const TitleLoad = styled.h2`
  color: #444444;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 8px;
`
export const SubTitleLoad = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #767676;
`
export const SubNotSearch = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #767676;
  line-height: 5px;
`
export const textNot = styled.p`
  width: 500px;
  line-height: 5px;
`
export const BoxMdl = styled.div``
export const InfoGlossary = styled.div`
  display: flex;
  margin-left: 340px;
  margin-top: -75px;
`
export const TitleError = styled.h2`
  color: #444444;
  font-size: 16px;
  font-weight: 900;
  text-align: center;
`

export const SubError = styled.p`
  color: #444444;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`
export const EstablishmentName = styled.p`
  padding-left: 16px;
  font-family: 'Santander Micro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin: 5px 0;
  padding: 8px 12px;
  cursor: pointer;
  overflow: hidden;

  :hover {
    background: #de3131;
    border-radius: 5px;
    color: white;
  }
`

export const ModalTitleContainer = styled.div`
  display: flex;
`

export const ModalTitle = styled.h2`
  color: #444444;
  size: 20px;
  width: -webkit-fill-available;
  width: -moz-fill-available;
  margin: 12px 0;

  p {
    color: #444444;
    size: 14px;
  }

  @media only screen and (max-width: 1280px) {
    margin: 0;
  }
`

export const MontosContainer = styled.div``

export const TarifasContainer = styled.div``

export const H3Title = styled.h3`
  color: #444444;
  size: 16px;
  margin: 24px 0 16px;
`

export const CloseBtn = styled.button`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  cursor: pointer;
  align-items: center;
  background-color: transparent;
  border: 0px;
  width: -webkit-fill-available;
  width: -moz-fill-available;
`

export const CloseIcon = styled(Icon)`
  font-size: 1.2em;
  font-weight: bold;
  color: #ec0000;
`

export const TabsContainer = styled.div`
  overflow-x: scroll;
  min-height: 36px;
  margin-top: 16px;
  ::-webkit-scrollbar {
    height: 4px;
  }
`
export const AntecipationNumberText = styled.div`
  margin: 0;
  display: flex;
  align-items: center;

  p {
    font-weight: bold;
    margin: 0;
  }

  span {
    font-weight: normal;
    margin: 0 5px;
  }
`
export const Teste = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Teste2 = styled.div`
  width: 318px;
  border-bottom: 1px solid #deedf2;
  border-left: 1px solid #deedf2;
  border-right: 1px solid #deedf2;
`
export const BoxLoadSuceffully = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const MensgSuceffully = styled.div`
  line-height: 0px;
`
export const TitleSuceffully = styled.h2`
  color: #444444;
  font-size: 16px;
  font-weight: 900;
  text-align: center;
`
export const SubSuceffully = styled.p`
  color: #444444;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  line-height: 5px;
`
export const BoxButtonSuceffully = styled.div`
  display: flex;
  justify-content: center;
`
export const LoadingContModal = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
