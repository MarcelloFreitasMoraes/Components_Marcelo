import React from 'react'
import { t } from '@albatross/react-i18n'
import { CardsProps, SettlementsProps, TaxesProps } from './interface'
import * as S from './styles'
import { TransactionTypeEnum } from '../../utils/TransactionTypeEnum'

export const TableTarifasVisa: React.FC<SettlementsProps> = ({
  settlements,
}) => {
  return (
    <S.TableTarifas data-testid="table-tarifas-visa">
      <thead>
        <tr>
          <S.ThStart>{t('Operation type')} </S.ThStart>
          <S.ThCenter>{t('Transaction Type')}</S.ThCenter>
          <S.ThCenter>{t('Channel')}</S.ThCenter>
          <S.ThEnd>{t('Rate')}</S.ThEnd>
        </tr>
      </thead>
      <tbody>
        {settlements ? (
          settlements &&
          settlements.map((settlement) => {
            return settlement.taxes?.map((item: TaxesProps) => {
              return item.visa?.map((el: CardsProps, index: number) => {
                const funding =
                  el.funding?.charAt(0).toUpperCase() + el.funding?.slice(1)
                const transactionType =
                  el.transaction_type?.charAt(0).toUpperCase() +
                  el.transaction_type?.slice(1)
                const transactionChannel =
                  el.transaction_channel_type?.toUpperCase()
                const percentageTax = el.percentage_tax

                return (
                  <tr key={`antecipation-taxes-visa-${index}`}>
                    <S.TdStart>
                      <S.Item>{t(funding)}</S.Item>
                    </S.TdStart>
                    <S.TdCenter>
                      <S.Item>{TransactionTypeEnum(transactionType)}</S.Item>
                    </S.TdCenter>
                    <S.TdCenter>
                      <S.Item>{transactionChannel}</S.Item>
                    </S.TdCenter>
                    <S.TdEnd>
                      <S.Item>{`${percentageTax}%`}</S.Item>
                    </S.TdEnd>
                  </tr>
                )
              })
            })
          })
        ) : (
          <S.NoDataText>{t('No data found')}</S.NoDataText>
        )}
      </tbody>
    </S.TableTarifas>
  )
}