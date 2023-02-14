import React from 'react'
import { t } from '@albatross/react-i18n'
import { SettlementsProps } from './interface'
import * as S from './styles'
import { format as formatTz, utcToZonedTime } from 'date-fns-tz'

export const TableMonto: React.FC<SettlementsProps> = ({ settlements }) => {
  let showThCenter
  const divider = (number: number) => {
    if (number?.toString()?.length > 2) {
      const change = number / 100
      return change?.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
      })
    } else {
      const change = number / 100
      return change?.toString()?.replace('.', ',')
    }
  }

  const getDate = (date: string) => {
    const timeZone = 'America/Argentina/Buenos_Aires'
    const zonedTime = utcToZonedTime(date, timeZone)
    return formatTz(zonedTime, 'dd/MM/yyyy', { timeZone })
  }

  settlements?.map((el) => {
    return (showThCenter = el.total_tax_amount != undefined ? true : false)
  })

  return (
    <S.TableMontos data-testid="table-montos">
      <thead>
        <tr>
          <S.ThStart>{t('Anticipated amount')} </S.ThStart>
          <S.ThCenter>{t('Cost of anticipation')}</S.ThCenter>
          {showThCenter ? (
            <S.ThCenter>{t('IVA of anticipationn')}</S.ThCenter>
          ) : (
            ''
          )}

          <S.ThEnd>{t('Settlement date')}</S.ThEnd>
        </tr>
      </thead>
      <tbody>
        {settlements ? (
          settlements &&
          settlements.map((item, index) => {
            return (
              <tr key={`antecipation-${index}`}>
                <S.TdStart>
                  <S.Item>${divider(item.total_ammount)}</S.Item>
                </S.TdStart>

                {item.total_base_amount != undefined ? (
                  <S.TdCenter>
                    <S.Item>${divider(item.total_base_amount)} </S.Item>
                  </S.TdCenter>
                ) : (
                  <S.TdCenter>
                    <S.Item>${divider(item.total_interest)} </S.Item>
                  </S.TdCenter>
                )}

                {item.total_tax_amount != undefined ? (
                  <S.TdCenter>
                    <S.Item>${divider(item.total_tax_amount)} </S.Item>
                  </S.TdCenter>
                ) : (
                  ''
                )}

                <S.TdEnd>
                  <S.Item>{getDate(item.anticipation_settlement_date)}</S.Item>{' '}
                  <br />
                </S.TdEnd>
              </tr>
            )
          })
        ) : (
          <S.NoDataText>{t('No data found')}</S.NoDataText>
        )}
      </tbody>
    </S.TableMontos>
  )
}
