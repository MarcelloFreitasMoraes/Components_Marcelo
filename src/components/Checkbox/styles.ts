import styled from 'styled-components'

const mediumGray = ({ theme }: any) =>
  theme?.color?.main?.primary?.['06'] || '#767676'
const darkGrey = ({ theme }: any) => theme?.colors?.greys?.dark || '#444444'
const santander = ({ theme }: any) =>
  theme?.color?.main?.primary?.['01'] || '#EC0000'

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  height: 25px;
  cursor: pointer;

  .checkmark:after {
    left: 7px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: 2px solid ${santander};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 1px solid ${mediumGray};
    border-radius: 5px;
    background-color: transparent;

    :after {
      content: '';
      position: absolute;
      display: none;
    }
  }
`

export const TextLabel = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 236px;
  color: ${darkGrey};
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
`
export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  font-family: 'Santander Micro Text';
  color: ${darkGrey};

  :checked ~ .checkmark {
    border: 2px solid ${santander};
    background-color: transparent;
    transition: all 300ms ease;
  }

  :checked ~ .checkmark:after {
    display: block;
  }
`
