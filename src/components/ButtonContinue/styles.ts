import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ButtonText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  display: block;
`

export const ButtonAction = styled.button`
  display: flex;
  align-items: center;
  color: #fafafa;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  padding: 5px 13px 5px 29px;
  border-radius: 40px;
  border: 1px solid rgba(206, 222, 231, 1);
  background: red;
  width: 123px;
  height: 40px;
  font-family: 'Santander Micro Text';

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
