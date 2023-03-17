import styled from 'styled-components'

const white = ({ theme }: any) => theme?.colors?.white || '#FFFFFF'

export const ModalQr = styled.div`
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
`

export const Container = styled.div`
  background-color: ${white};
  width: 372px;
  border-radius: 8px;
  padding: 24px;
`
