import styled, { css } from 'styled-components'
import { Button, utils } from '@albatross/ui'

export const Container = styled.div`
  width: 100%;
`

export const BorderBox = styled.div`
  margin-top: 40px;
  padding: 24px;
  border: 1px solid #ececec;
  border-radius: 8px;
  max-width: 1084px;
  display: flex;
  flex-direction: column;
`

export const Text = styled.p`
  font-family: 'Santander Micro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`

export const DropdownBox = styled.div`
  display: flex;
  margin: 24px 0;
  border-radius: 24px;

  @media (max-width: ${utils.getProps('theme.breakpoints.tablet')}px) {
    flex-direction: column;
  }
`

export const SellerDropdown = styled.div`
  margin-right: 12px;
  width: 346px;

  .dropdown-options {
    button {
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      .icon {
        color: #fff !important;
      }
      :hover {
        background: #de3131;
        color: #ffffff !important;
      }
    }
  }

  @media (max-width: ${utils.getProps('theme.breakpoints.tablet')}px) {
    width: 100%;
    margin-bottom: 15px;
  }
`

export const MonthDropdown = styled.div`
  margin-right: 12px;
  .dropdown-options {
    button {
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      .icon {
        color: #fff !important;
      }
      :hover {
        background: #de3131;
        color: #ffffff !important;
      }
    }
  }

  @media (max-width: ${utils.getProps('theme.breakpoints.tablet')}px) {
    width: 100%;
  }
`

export const SearchInput = styled.div`
  margin: 12px;

  label {
    width: 100%;
    height: 40px;
    margin-bottom: 0px;
    border-radius: 4px;
  }

  label .float-container {
    padding: 10px 5px;
  }
`
export const DownloadButton = styled(Button)`
  background-color: #ec0000;
  width: 205px;
  height: 32px;
  padding: 4px 19px;
  border: 1px solid #cccccc;
  border-radius: 30px;

  .btn-content span {
    font-family: 'Santander Micro Text';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin: 0 1.25em;
  }

  :disabled {
    background: #f6f6f6;
    border: 1px solid #cccccc;
    color: #cccccc;
  }

  .btn-content .left {
    ${(props) =>
      props.disabled &&
      css`
        color: #cccccc;
      `}
  }
`
