import styled from 'styled-components'
import { Icon, utils } from '@albatross/ui'

export const InputStyled = styled.div`
  background: #ffffff;
  border-radius: 4px 4px 0 0;
  border: 1px solid #e3e3e3;
  border-bottom-color: #257fa4;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Santander Micro Text';
  &:hover {
    border-bottom-width: 2px;
  }
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  svg {
    margin: 0 5px;
  }
`

export const InputNative = styled.input`
  color: ${utils.getProps('theme.colors.body')};
  font-size: 14px;
  width: 100%;
  background: '#FFFFFF';
  border: none;
  outline: none;
`

export const IconStyled = styled(Icon)`
  font-size: 16px;
  margin-right: 12px;
  color: ${utils.getProps('theme.colors.greys.ash')};
  cursor: 'pointer';
`
