import React from 'react'
import { t } from '@albatross/react-i18n'
import { SettlementsProps } from './interfaces'
import * as S from './styles'

export const TableDaily: React.FC<SettlementsProps> = ({ settlements }) => {
  const divider = (number: number) => {
    if (number.toString().length > 2) {
      const change = number / 100
      return change.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
      })
    } else {
      const change = number / 100
      return change.toString().replace('.', ',')
    }
  }

  const FirstLetterUpperCase = (string: string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1)
  }

  return (
    <S.TableDailys data-testid="table-daily">
      <thead>
        <tr>
          <S.ThStart>{t('Type of operation')} </S.ThStart>
          <S.ThCenter>
            {t('Amount of')} <br />
            <S.ItemColor>{t('transactions')}</S.ItemColor>
          </S.ThCenter>
          <S.ThCenter>{t('Total Gross')}</S.ThCenter>
          <S.ThCenterDiscounts>{t('Total discounts')}</S.ThCenterDiscounts>
          <S.ThEnd>{t('Net Total')}</S.ThEnd>
        </tr>
      </thead>
      <tbody>
        {settlements?.map((item, index) => {
          return (
            <tr key={`settlement-${index}`}>
              <S.TdStart>
                <S.Item>{t(FirstLetterUpperCase(item?.funding))}</S.Item>
              </S.TdStart>
              <S.TdCenter>
                <S.Item>{item.transactions_qty}</S.Item>
              </S.TdCenter>
              <S.TdCenter>
                <S.ItemColor>${divider(item.gross_value)}</S.ItemColor> <br />{' '}
                <S.CountryOne>{item.currency}</S.CountryOne>{' '}
              </S.TdCenter>
              <S.TdCenterDiscounts>
                <S.ItemColor>${divider(item.discounts_value)} </S.ItemColor>
                <br /> <S.CountryOne>{item.currency}</S.CountryOne>
              </S.TdCenterDiscounts>
              <S.TdEnd>
                <S.ItemColor>${divider(item.net_value)}</S.ItemColor> <br />{' '}
                <S.Country>{item.currency}</S.Country>
              </S.TdEnd>
            </tr>
          )
        })}
      </tbody>
    </S.TableDailys>
  )
}
