import React from 'react'
import * as S from './styles'
import { t } from '@albatross/react-i18n'

export const BoxQr = ({ children, action }: any) => {
  return (
    <S.Container data-testid="BoxQr">
      {children ? (
        children
      ) : (
        <S.TextNull data-testid="text-id">
          {t('You still dont have any. Try again,')}
          <S.Link data-testid="link-id" onClick={action}>{t('by clicking here')}</S.Link>
          {t('to update.')}
        </S.TextNull>
      )}
    </S.Container>
  )
}
