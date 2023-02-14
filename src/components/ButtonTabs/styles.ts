import styled from 'styled-components'

interface Props {
  active?: any
}

export const ButtonAction = styled.button<Props>`
  color: ${({ active }) => (active ? '#444444' : '#767676')};
  font-weight: ${({ active }) => (active ? '700' : '400')};
  background-color: #fff;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: ${({ active }) =>
    active ? '2px solid #EC0000' : '1px solid #CEDEE7'};
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  white-space: nowrap;
  padding: 5px;
  width: 200px;
`
