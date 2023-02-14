import styled from 'styled-components'

interface Props {
  spin?: any
  up?: any
  calendar?: any
}

export const ButtomParentContainer = styled.div`
  position: relative;
`

export const ButtomContainer = styled.div`
  margin-right: 12px;
  width: 318px;
  height: 48px;
  border-bottom: 1px solid #257fa4;
  border-top: 1px solid #deedf2;
  border-left: 1px solid #deedf2;
  border-right: 1px solid #deedf2;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: 10px;
  justify-content: space-between;
  :focus-visible {
    outline-color: rgba(37, 127, 164, 1);
    z-index: 1;
  }
`
export const Label = styled.p<Props>`
  ${({ up }) => {
    return up
      ? {
          paddingTop: '5px',
          marginBottom: 0,
          paddingBottom: '2px',
          fontSize: '12px',
        }
      : {
          fontSize: '16px',
        }
  }};
  transition: transform 200ms ease-in-out;
  padding-left: 16px;
  font-family: 'Santander Micro Text';
  font-style: normal;
  font-weight: 400;
  color: #767676;
`
export const Value = styled.p`
  padding-left: 16px;
  margin-top: 0;
  font-size: 16px;
  height: 24px;
  overflow: hidden;
`
export const boxOptions = styled.div<Props>`
  position: relative;
`
export const DropOptions = styled.div<Props>`
  position: ${({ calendar }) => (calendar ? 'absolute' : 'relative')};
  display: ${({ calendar }) => (calendar ? 'flex' : '')};
  width: ${({ calendar }) => (calendar ? '318px' : '')};
  background-color: #fff;
`

export const Options = styled.div<Props>`
  width: 318px;
  padding: 0 4px 0 4px;
  position: ${({ calendar }) => (calendar ? '' : 'absolute')};
  background-color: #fff;
`

export const IconLeft = styled.div`
  padding-left: 16px;
`
export const IconRight = styled.div<Props>`
  ${({ spin }) => {
    return spin
      ? {
          transform: 'rotate(180deg)',
        }
      : {
          transform: 'rotate(0deg)',
        }
  }};
  transition: transform 200ms ease-in-out;
`

export const BoxContent = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`
export const Calendar = styled.div<Props>`
  width: 265px;
`
