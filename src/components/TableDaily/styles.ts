import styled from 'styled-components'

interface Props {
  background?: any
  border?: any
}

export const TableDailys = styled.table`
  font-family: 'Santander Micro Text';
  width: 100%;
  font-size: 16px;
  background: rgba(222, 237, 242, 0.2);
  border-collapse: collapse;
  text-align: center;
  border: 1px solid #deedf2;
  margin-top: 25px;

  thead {
    background: rgba(204, 204, 204, 0.2);
    height: 48px;
  }

  tr:nth-child(even) {
    background-color: #ffffff;
  }
  td {
    border-bottom: 1px solid #deedf2;
    border-top: 1px solid #deedf2;
  }
  tr {
    height: 64px;
  }
  th {
    border-top: 1px solid rgba(204, 204, 204, 0.1);
    border-bottom: 1px solid rgba(204, 204, 204, 0.1);
    font-weight: 700;
    font-size: 16px;
  }
`
export const ThStart = styled.th`
  text-align: start;
  padding-left: 10px;
  font-family: 'Santander Micro Text';
`

export const ThCenter = styled.th`
  text-align: start;
  color: #444444;
  font-weight: 700;
  font-family: 'Santander Micro Text';
`
export const ThCenterDiscounts = styled.th`
  text-align: center;
  color: #444444;
  font-weight: 700;
  font-family: 'Santander Micro Text';
`

export const ThEnd = styled.th`
  text-align: end;
  padding-right: 10px;
  color: #444444;
  font-weight: 700;
  font-family: 'Santander Micro Text';
`

export const Country = styled.span`
  color: #1bb3bc;
`
export const CountryOne = styled.span`
  color: #1bb3bc;
`
export const TdStart = styled.td`
  text-align: start;
  padding-left: 10px;
  color: #767676;
  font-weight: 400;
`
export const Item = styled.span`
  color: #767676;
  font-weight: 400;
`
export const ItemColor = styled.span`
  color: #444444;
  font-weight: 700;
  font-family: 'Santander Micro Text';
  font-size: 16px;
`

export const TdCenter = styled.td`
  text-align: start;
`

export const TdCenterDiscounts = styled.td`
  text-align: start;
  padding-left: 65px;
`

export const TdEnd = styled.td`
  text-align: end;
  padding-right: 10px;
`
export const TitleError = styled.h2`
  color: #444444;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
  text-align: center;
`
