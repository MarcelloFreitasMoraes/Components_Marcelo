import React from 'react'
import * as S from './styles'
import { t } from '@albatross/react-i18n'
import { Glossary } from '../../assets/icons/Glossary'
import { BoxQRProps } from './interfaces'

export const BoxQr = ({ children, action }: BoxQRProps) => {
  return (
    <S.Container data-testid="BoxQr">
      {children ? (
        children
      ) : (
        <>
          <div>
            <Glossary />
          </div>
          <S.TextNull as="h1">{t("We found no transactions to display here.")}</S.TextNull>
          <S.TextTypography as="p" data-testid="text-id">
            {t("It looks like you haven't received QR code transactions yet.")}
            <S.TextTypography>{t("Try again,")} <S.Link data-testid="link-id" onClick={action}>
              <S.ColorLink>{t('by clicking here')}{' '}</S.ColorLink></S.Link>{t('to update.')}</S.TextTypography>
          </S.TextTypography>
        </>
      )}
    </S.Container>
  )
}
