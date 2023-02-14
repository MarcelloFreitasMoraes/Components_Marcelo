import styled from 'styled-components'

export const ButtonText = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 15px;
`

export const ButtonAction = styled.button`
  display: flex;
  align-items: center;
  color: #444444;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  padding: 4px, 13px, 4px, 13px;
  border-radius: 8px;
  border: 1px solid #cedee7;
  background: #f5f9fb;
  width: 168px;
  height: 32px;

  :disabled {
    background: #f6f6f6;
    color: #cccccc;
    border: 1px solid #cccccc;
    cursor: default;
  }
`
export const Icon = styled.div`
  margin-right: 10px;
`
