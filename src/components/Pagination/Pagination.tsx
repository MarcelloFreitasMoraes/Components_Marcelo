import React, { useEffect, useState } from 'react'
import { ArrowLeftRed } from '../../assets/icons/ArrowLeftRed'
import { ArrowRightRed } from '../../assets/icons/ArrowRightRed'
import * as S from './styles'
import { t } from '@albatross/react-i18n'
import { PagnationProps } from './interfaces'

export const Pagination = ({ data, setPage, setLimit }: PagnationProps) => {
  const [first, setFirst] = useState<any>()

  const currentPage = data?.page

  const MAX_ITEMS = 5
  const MAX_LEFT = (MAX_ITEMS - 1) / 2

  const totalPage = Math.ceil(data?.pages)
  const valueLimit = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

  useEffect(() => {
    if (currentPage === totalPage) {
      if (totalPage === 4) {
        setFirst(currentPage - 3)
      } else if (totalPage === 3) {
        setFirst(currentPage - 2)
      } else if (totalPage === 2) {
        setFirst(currentPage - 1)
      } else if (totalPage === 1) {
        setFirst(Math.max(currentPage - MAX_LEFT, 1))
      } else {
        setFirst(currentPage - 4)
      }
    } else if (currentPage === totalPage - 1) {
      if (totalPage - 1 === 3) {
        setFirst(currentPage - 2)
      } else if (totalPage - 1 === 2) {
        setFirst(currentPage - 1)
      } else if (totalPage - 1 === 1) {
        setFirst(Math.max(currentPage - MAX_LEFT, 1))
      } else {
        setFirst(currentPage - 3)
      }
    } else {
      setFirst(Math.max(currentPage - MAX_LEFT, 1))
    }
  }, [currentPage])

  return (
    <S.Container data-testid="pagination-id">
      <S.Section>
        <S.Select onChange={(e) => setLimit(e.target.value)}>
          {valueLimit.map((item) => {
            return <option value={item}>{item}</option>
          })}
        </S.Select>
        <S.Label data-testid="text-id">{t('items diplayed')}</S.Label>
      </S.Section>
      <S.TestPag>
        {currentPage > 1 && (
          <S.List onClick={() => setPage(currentPage - 1)}>
            <ArrowRightRed />
            <S.Prev data-testid="prev-id">{t('PREV')}</S.Prev>
          </S.List>
        )}
        {Array.from({ length: Math.min(MAX_ITEMS, totalPage) })
          .map((_, index) => index + first)
          .map((page) => {
            return (
              <S.List>
                <S.Button
                  data-testid="btn-id"
                  onClick={() => setPage(page)}
                  disabled={page === currentPage}
                >
                  <b>{page}</b>
                </S.Button>
              </S.List>
            )
          })}
        {currentPage < data?.pages && (
          <S.List onClick={() => setPage(currentPage + 1)}>
            <S.Next data-testid="next-id">{t('NEXT')}</S.Next>
            <ArrowLeftRed />
          </S.List>
        )}
      </S.TestPag>
    </S.Container>
  )
}
