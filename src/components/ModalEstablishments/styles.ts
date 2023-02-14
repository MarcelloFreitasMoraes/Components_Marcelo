import styled from 'styled-components'
import { Icon, utils } from '@albatross/ui'

interface ModalContentProps {
  width?: string
  height?: string
  fullScreen?: boolean
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    height: 115vh;
  }
  @media only screen and (max-width: 1000px) {
    height: auto;
  }
`

export const ModalContent = styled.div<ModalContentProps>`
  background-color: #fff;
  width: 600px;
  padding: 16px;
  border-radius: 8px;

  @media only screen and (max-width: 1280px) {
    width: 50%;
    height: auto;
  }
`

export const ArrowBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0px;
`

export const CloseBtn = styled.button`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  cursor: pointer;
  align-items: center;
  background-color: transparent;
  border: 0px;
`

export const CloseIcon = styled(Icon)`
  font-size: 1.2em;
  font-weight: bold;
  color: #ec0000;
`

export const ModalHeaderContent = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  align-content: center;
`

export const ModalBodyContent = styled.div``

export const TitleContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding-right: 35px;
`

export const ModalTitleContainer = styled.div`
  display: flex;
`

export const ModalTitle = styled.h2`
  color: #444444;
  font-size: 24px;
  width: -webkit-fill-available;
  width: -moz-fill-available;
  margin: 12px 0;
  font-family: 'Santander Headline';

  p {
    color: #444444;
    size: 14px;
  }

  @media only screen and (max-width: 1280px) {
    margin: 0;
  }
`

export const SellerList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 17px;
  overflow-y: scroll;
  max-height: 260px;

  @media only screen and (max-device-height: 740px) {
    max-height: 370px !important;
  }

  @media only screen and (max-device-width: 768px) {
    max-height: 470px;
  }
`

export const SellerListItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid #f0f0f0;
  align-items: center;
  padding: 13px 0;
  cursor: pointer;
`

export const SellerListItemInfos = styled.div`
  display: flex;
  flex-direction: column;

  .UpperContent {
    display: flex;
    flex-direction: row;
    align-items: center;

    b {
      margin-right: 10px;
    }

    p {
      font-size: 16px;
      margin: 0;
      font-family: 'Santander Micro Text';
    }
  }

  .LowerContent {
    p {
      font-size: 14px;
      margin: 0;
    }
  }
`

export const SellerSelector = styled.input`
  display: block;
  width: 24px;
  height: 24px;
  border: 1px solid #767676;
  border-radius: 50%;
  margin: 0 10px;
  appearance: none;
  cursor: pointer;

  &:checked {
    background-color: white;
    border: 2px solid #ec0000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
  }

  &:checked:after {
    content: '';
    position: relative;
    top: 4px;
    color: #ec0000;
    background: #ec0000;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    display: inline-block;
  }
`
export const LoadingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  height: 200px;

  div {
    color: red;
  }

  p {
    font-size: 20px;
    margin: 0;
  }
`
export const NoDataText = styled.h1`
  text-align: center;
`
