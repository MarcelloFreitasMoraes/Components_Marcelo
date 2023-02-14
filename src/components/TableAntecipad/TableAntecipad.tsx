import React from 'react'
import { t } from '@albatross/react-i18n'
import { SettlementsProps } from './interfaces'
import * as S from './styles'

export const TableAntecipad: React.FC<SettlementsProps> = ({ settlements }) => {
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

  return (
    <S.TableDailys data-testid="table-daily">
      <thead>
        <tr>
          <S.ThStart>
            {t('Amount of')} <br />
            <S.ItemColor>{t('transactions')}</S.ItemColor>
          </S.ThStart>
          <S.ThCenter>{t('Total Gross')}</S.ThCenter>
          <S.ThCenter>{t('Total discounts')}</S.ThCenter>
          <S.ThEnd>{t('Net Total')}</S.ThEnd>
        </tr>
      </thead>
      <tbody>
        {settlements &&
          settlements.map((item, index) => {
            return (
              <tr key={`settlement-${index}`}>
                <S.TdCenter style={{ padding: '20px' }}>
                  <S.Item>{item.transactions_quantity}</S.Item>
                </S.TdCenter>
                <S.TdCenter>
                  <S.ItemColor>${divider(item.total_ammount)}</S.ItemColor>{' '}
                  <br /> <S.CountryOne>{item.currency}</S.CountryOne>{' '}
                </S.TdCenter>
                <S.TdCenter>
                  <S.ItemColor>${divider(item.total_discounts)}</S.ItemColor>
                  <br /> <S.CountryOne>{item.currency}</S.CountryOne>
                </S.TdCenter>
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
