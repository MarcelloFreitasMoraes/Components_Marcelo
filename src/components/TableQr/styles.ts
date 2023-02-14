import styled from 'styled-components'

interface Props {
  background?: any
  border?: any
  width?: any
}

const darkGrey = ({ theme }: any) => theme?.colors?.greys?.dark || '#444444'
const turquoise = ({ theme }: any) =>
  theme?.color?.main?.secondary?.['03'] || '#1BB3BC'
const white = ({ theme }: any) => theme?.colors?.white || '#FFFFFF'

export const Table = styled.table`
  width: 100%;
  font-size: 16px;
  background: RGB(241, 247, 250);
  border-collapse: collapse;
  text-align: center;
  font-family: 'Santander Micro Text';

  thead {
    background-color: rgba(204, 204, 204, 0.2);
    height: 48px;
    font-family: 'Santander Micro Text';
  }

  tr:nth-child(even) {
    background-color: ${white};
  }
  td {
    border-bottom: 1px solid RGB(241, 247, 250);
    border-top: 1px solid RGB(241, 247, 250);
    font-family: 'Santander Micro Text';
  }
  tr {
    height: 64px;
    font-family: 'Santander Micro Text';
  }
  th {
    border-bottom: 1px solid rgba(204, 204, 204, 0.2);
    font-family: 'Santander Micro Text';
  }
`

export const Country = styled.span`
  font-family: 'Santander Micro Text';
  color: ${turquoise};
  font-size: 14px;
  font-weight: 400;
`

export const Status = styled.span<Props>`
  border: 1px solid
    ${({ theme, border }) => (border ? border : white({ theme }))};
  border-radius: 600px;
  background: ${({ theme, background }) =>
    background ? background : white({ theme })};
  padding: 4px 16px 4px 16px;
  font-family: 'Santander Micro Text';
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? '200px' : '140px')}; ;
`

export const TdStart = styled.td`
  text-align: start;
  padding-left: 10px;
  font-family: 'Santander Micro Text';
`
export const TdStartCod = styled.td`
  text-align: start;
  padding-left: 10px;
  font-family: 'Santander Micro Text';
  width: 330px;
`

export const TdCenter = styled.td`
  text-align: center;
  font-family: 'Santander Micro Text';
  width: 53px;
  padding-left: 115px;
`

export const TdEnd = styled.td`
  text-align: end;
  padding-right: 10px;
  font-family: 'Santander Micro Text';
`

export const ThStart = styled.th`
  text-align: start;
  padding-left: 10px;
`

export const ThCenter = styled.th`
  text-align: center;
  padding-left: 36px;
`

export const ThEnd = styled.th`
  text-align: end;
  padding-right: 10px;
`
export const Bold = styled.span`
  font-weight: 700;
  font-size: 14px;
  font-family: 'Santander Micro Text';
  color: ${darkGrey};
`
