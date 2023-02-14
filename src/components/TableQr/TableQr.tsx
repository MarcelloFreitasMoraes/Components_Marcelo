import React from 'react'
import { t } from '@albatross/react-i18n'
import { format as formatTz, utcToZonedTime } from 'date-fns-tz'
import * as S from './styles'

export const TableQr = ({ data, userDetails }: any) => {
  const dateFormat = (date: any) => {
    const zonedDate = utcToZonedTime(new Date(date), 'Europe/London')
    return formatTz(zonedDate, 'dd/MM/yyyy', {
      timeZone: 'Europe/London',
    })
  }

  const hourFormat = (hour: any) => {
    const zonedHour = utcToZonedTime(new Date(hour), 'Europe/London')
    return formatTz(zonedHour, 'hh:mm:ss aaa', {
      timeZone: 'Europe/London',
    })
  }

  const texto = (authorize: string) => {
    if (authorize === 'authorized') {
      return t('pending accreditation')
    } else return t(authorize)
  }
  const bgColors = (status: string) => {
    switch (status) {
      case 'settled':
        return 'rgba(99, 186, 104, 0.2)'
      case 'authorized':
        return 'rgba(27, 179, 188, 0.2)'
      case 'rejected':
        return 'rgba(236, 0, 0, 0.2)'
      case 'reverted':
        return 'rgba(236, 0, 0, 0.2)'
    }
  }

  const bdColors = (status: string) => {
    switch (status) {
      case 'settled':
        return ({ theme }: any) => theme?.colors?.success || '#63BA68'
      case 'authorized':
        return ({ theme }: any) =>
          theme?.color?.main?.secondary?.['03'] || '#1BB3BC'
      case 'rejected':
        return ({ theme }: any) =>
          theme?.color?.main?.primary?.['01'] || '#EC0000'
      case 'reverted':
        return ({ theme }: any) =>
          theme?.color?.main?.primary?.['01'] || '#EC0000'
    }
  }

  return (
    <S.Table data-testid="table-qr-id">
      <thead>
        <tr>
          <S.ThStart>{t('Operation date')} </S.ThStart>
          <S.ThStart>{t('Establishment')}</S.ThStart>
          <S.ThStart>{t('Cod. aut.')}</S.ThStart>
          <S.ThCenter>{t('Status')}</S.ThCenter>
          <S.ThEnd>{t('Total Gross')}</S.ThEnd>
        </tr>
      </thead>
      <tbody>
        {data?.map((item: any) => {
          const stable =
            userDetails?.sellers &&
            userDetails?.sellers.filter((seller: any) => {
              return seller.seller_code === item.seller.seller_code
            })
          return (
            <>
              <tr>
                <S.TdStart>
                  <S.Bold>{dateFormat(item?.datetime_transaction)}</S.Bold>
                  <br />
                  {hourFormat(item?.datetime_transaction)}
                </S.TdStart>
                <S.TdStart>
                  <S.Bold>{item?.seller?.seller_name ? item?.seller?.seller_name : stable && stable[0]?.trade_name}</S.Bold>
                  <br />
                  {item?.seller?.seller_code}
                </S.TdStart>
                <S.TdStartCod>{item?.authorization_code ? item?.authorization_code : ''}</S.TdStartCod>
                <S.TdCenter>
                  <S.Bold>
                    <S.Status
                      background={() => bgColors(item?.status)}
                      border={() => bdColors(item?.status)}
                      width={item?.status === 'authorized' ? true : false}
                    >
                      {texto(item?.status)}
                    </S.Status>
                  </S.Bold>
                </S.TdCenter>
                <S.TdEnd>
                  <S.Bold>
                    ${' '}
                    {item?.amount?.toLocaleString('pt-br', {
                      minimumFractionDigits: 2,
                    })}
                  </S.Bold>
                  <br />
                  <S.Country>{item?.currency_code ?? 'ARS'}</S.Country>
                </S.TdEnd>
              </tr>
            </>
          )
        })}
      </tbody>
    </S.Table>
  )
}
