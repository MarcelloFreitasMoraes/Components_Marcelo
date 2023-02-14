import styled from 'styled-components'
import { Icon, utils } from '@albatross/ui'

interface ModalContentProps {
  width?: string
  height?: string
  fullScreen?: boolean
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`

export const ModalContent = styled.div<ModalContentProps>`
  display: flex;
  flex-direction: column;
  @media only screen and (max-device-width: 767px) {
    margin: ;
  }
  width: ${({ fullScreen, width }) => (fullScreen ? '100%' : width)};
  height: ${({ fullScreen, height }) => (fullScreen ? '100vh' : height)};
  background-color: ${utils.getProps('theme.colors.white')};
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.07),
    0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: ${({ fullScreen }) => (fullScreen ? '0px' : '10px')};
  overflow-y: auto;
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
  font-size: 1em;
`

export const ModalHeaderContent = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  align-content: center;
`

export const ModalBodyContent = styled.div`
  overflow-y: auto;
`

export const TitleContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding-right: 35px;
`
