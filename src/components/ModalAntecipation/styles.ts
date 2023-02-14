import styled from 'styled-components'

interface ModalContentProps {
  showModal?: boolean
}

export const ModalAnt = styled.div<ModalContentProps>`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ showModal }) => (showModal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    height: 115vh;
  }
  @media only screen and (max-width: 1000px) {
    height: auto;
  }
`

export const Container = styled.div`
  background-color: #fff;
  width: 600px;
  padding: 16px;

  @media only screen and (max-width: 1280px) {
    width: 50%;
    height: auto;
  }
`
