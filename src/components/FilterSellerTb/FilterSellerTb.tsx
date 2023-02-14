import React, { useState, useEffect, useContext } from 'react'
import * as S from './styles'
import Checkbox from '../Checkbox/Checkbox'
import { t } from '@albatross/react-i18n'
import { DatePicker } from '@albatross/ui'
import { subDays, format } from 'date-fns'
import { ArrowBottonRed } from '../../assets/icons/ArrowBottonRed'
import { Close } from '../../assets/icons/Close'
import { MagnifyingGlass } from '../../assets/icons/MagnifyingGlass'
import { Filter } from '../../assets/icons/Filter'
import { I18nContext } from '@albatross/react-i18n'
import { FilterProps } from './interfaces'
import SearchInput from '../SearchInput/SearchInput'

const mockStatus = [
  { value: 'settled', id: 0 },
  { value: 'authorized', id: 1 },
  { value: 'rejected', id: 2 },
]
export const FilterSellerTb = ({
  isOpen,
  isClose,
  userDetails,
  setStatus,
  setStartDateIso,
  setEndDateIso,
  actionFilter,
  setEstablishmentFilter,
  setCoudChange,
  coudChange,
}: FilterProps) => {
  const [openEstablishment, setOpenEstablishment] = useState(false)
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [openDate, setOpenDate] = useState(false)
  const [openStatus, setOpenStatus] = useState(false)
  const [codAut, setCodAut] = useState(false)
  const [isValue, setIsValue] = useState<string>()

  const { translate } = useContext(I18nContext)

  const checkSearchInput = (value: string) => {
    setIsValue(value)
    if (value.length > 2 || value.length === 0) {
      const filteredList = userDetails?.sellers?.filter(
        (seller: { trade_name: string }) =>
          seller.trade_name.toUpperCase().includes(value.toUpperCase())
      )
      if (filteredList.length > 0) {
        setIsCheck(filteredList?.sort(comparedSellers))
      } else {
        setIsCheck([])
      }
    }
  }

  const mapSellers =
    userDetails?.sellers &&
    userDetails?.sellers?.map((item: any) => {
      return { ...item, checked: false }
    })
  const mapStatus = mockStatus.map((item: any) => {
    return { ...item, checked: false }
  })

  useEffect(() => {
    setIsCheck(userDetails && mapSellers?.sort(comparedSellers))
  }, [userDetails])

  function comparedSellers(a: any, b: any) {
    if (a.seller_id < b.seller_id) return -1
    if (a.seller_id > b.seller_id) return 1
    return 0
  }
  const [isCheck, setIsCheck] = useState(mapSellers)
  const showCheck = (id: any) => {
    const notSelected = isCheck.filter((item: any) => {
      return item.seller_id !== id
    })
    const selected = isCheck.filter((item: any) => {
      return item.seller_id === id
    })
    const newSellers = [
      ...notSelected,
      { ...selected[0], checked: !selected[0]?.checked },
    ]
    setIsCheck(newSellers.sort(comparedSellers))
  }
  const [isCheckStatus, setIsCheckStatus] = useState(mapStatus)
  const showCheckStatus = (id: number, value: string) => {
    setStatus(value)

    const notSelected = isCheckStatus.filter((item: any) => {
      return item.id !== id
    })
    const selected = isCheckStatus.filter((item: any) => {
      return item.id === id
    })
    const newStatus = [
      ...notSelected,
      { ...selected[0], checked: !selected[0]?.checked },
    ]
    setIsCheckStatus(newStatus.sort(compared))
  }
  function compared(a: { id: number }, b: { id: number }) {
    if (a.id < b.id) return -1
    if (a.id > b.id) return 1
    return 0
  }

  const all = () => {
    const allConst = isCheck.map((item) => {
      return { ...item, checked: true }
    })
    setIsCheck(allConst)
  }
  const clean = () => {
    const cleanConst = isCheck.map((item) => {
      return { ...item, checked: false }
    })
    setIsCheck(cleanConst)
  }
  const allStatus = () => {
    const allConstStatus = isCheckStatus.map((item) => {
      return { ...item, checked: true }
    })

    setIsCheckStatus(allConstStatus)
  }

  const cleanStatus = () => {
    const cleanConstStatus = isCheckStatus.map((item) => {
      return { ...item, checked: false }
    })
    setIsCheckStatus(cleanConstStatus)
  }

  const date = new Date()
  const actualMonth = date.getMonth()
  const actualYear = date.getFullYear()

  const setDate = (init: any, final: any) => {
    setStartDate(init)
    setEndDate(final)

    if (init) {
      setStartDateIso(format(init, 'yyyy-MM-dd'))
    } else setStartDateIso(init)

    if (final) {
      setEndDateIso(format(final, 'yyyy-MM-dd'))
    } else setEndDateIso(final)
  }

  const apllyFilter = () => {
    const statusSearch = isCheckStatus.filter((item) => item.checked === true)
    const mapStatusSearch = statusSearch.map((item) => {
      return item.value
    })
    if (mapStatusSearch.length !== 0) {
      setStatus(mapStatusSearch)
    } else setStatus(undefined)

    const establishmentSearch = isCheck.filter(
      (item: { checked: boolean }) => item.checked === true
    )
    const mapeEtablishmentSearch = establishmentSearch.map(
      (item: { seller_id: string }) => {
        return item.seller_id
      }
    )
    if (mapeEtablishmentSearch.length !== 0) {
      setEstablishmentFilter(mapeEtablishmentSearch)
    } else setEstablishmentFilter(undefined)

    actionFilter()
  }

  const mask = (value: string) => {
    return value.replace(/\s+/g, '')
  }

  return (
    <>
      <S.Container open={isOpen}>
        <S.FilterTitle>
          <S.Title>{t('Filters')}</S.Title>
          <S.Icon onClick={isClose}>{<Close />}</S.Icon>
        </S.FilterTitle>
        <S.Box>
          <S.ButtonEstab
            data-testid="btn-etab-id"
            onClick={() => {
              setOpenDate(!openDate)
              setOpenEstablishment(false)
              setOpenStatus(false)
              setCodAut(false)
            }}
          >
            <S.TextEstab color={openDate}>{t('Operation date')}</S.TextEstab>
            <S.Arrow spin={openDate}>
              <ArrowBottonRed />
            </S.Arrow>
          </S.ButtonEstab>
        </S.Box>
        {openDate && (
          <S.SearchContainer>
            <S.DropdownBox>
              <DatePicker
                data-testid="date-id"
                startDate={startDate}
                endDate={endDate}
                onDatesChange={setDate}
                pickerLevel="day"
                showContainerDropShadow={false}
                showActionButtons={false}
                // @ts-ignore
                minDate={subDays(new Date(), 90)}
                maxDate={new Date()}
                startingMonth={new Date(actualYear, actualMonth)}
                // @ts-ignore
                showActionButtons={true}
              />
            </S.DropdownBox>
          </S.SearchContainer>
        )}
        <S.BoxBoard>
          <S.ButtonEstab
            data-testid="btn-id"
            onClick={() => {
              setOpenEstablishment(!openEstablishment)
              setOpenDate(false)
              setOpenStatus(false)
              setCodAut(false)
            }}
          >
            <S.TextEstab color={openEstablishment}>
              {t('Establishment')}
            </S.TextEstab>
            <S.Arrow spin={openEstablishment}>
              <ArrowBottonRed />
            </S.Arrow>
          </S.ButtonEstab>
        </S.BoxBoard>
        {openEstablishment && (
          <S.SearchContainer>
            <S.Search>
              <SearchInput
                data-testid="input-filter-id"
                placeholder={
                  translate('Search by name...') as unknown as string
                }
                onChange={(e: { target: { value: string } }) => checkSearchInput(e.target.value)}
                value={isValue}
                icon={<Filter />} />
            </S.Search>
            <S.CheBox>
              {isCheck &&
                isCheck.map(
                  (
                    seller: {
                      checked: any
                      trade_name: string
                      seller_id: string
                    },
                    index: React.Key | null | undefined
                  ) => {
                    return (
                      <Checkbox
                        data-testid="checkbox-id"
                        key={index}
                        checked={seller.checked}
                        label={seller.trade_name}
                        id={seller.seller_id}
                        action={showCheck}
                      />
                    )
                  }
                )}
              <S.Clesel>
                <S.CleselP
                  data-testid="link-clean-id"
                  onClick={() => {
                    clean()
                  }}
                >
                  {t('Clean')}
                </S.CleselP>
                <S.CleselP
                  data-testid="link-close-id"
                  color={true}
                  onClick={() => {
                    all()
                  }}
                >
                  {t('Select all')}
                </S.CleselP>
              </S.Clesel>
            </S.CheBox>
          </S.SearchContainer>
        )}
        <S.BoxBoard>
          <S.ButtonEstab
            data-testid="btn-estable-id"
            onClick={() => {
              setOpenStatus(!openStatus)
              setOpenDate(false)
              setOpenEstablishment(false)
              setCodAut(false)
            }}
          >
            <S.TextEstab color={openStatus}>{t('Status')}</S.TextEstab>
            <S.Arrow spin={openStatus}>
              <ArrowBottonRed />
            </S.Arrow>
          </S.ButtonEstab>
        </S.BoxBoard>
        {openStatus && (
          <S.SearchContainer>
            <S.CheBox>
              {isCheckStatus.map((status, index) => {
                return (
                  <Checkbox
                    data-testid="checkbox-status-id"
                    key={index}
                    checked={status.checked}
                    label={translate(status.value) as unknown as string}
                    id={status.id}
                    action={showCheckStatus}
                  />
                )
              })}

              <S.Clesel>
                <S.CleselP
                  data-testid="status-clean-id"
                  onClick={() => {
                    cleanStatus()
                  }}
                >
                  {t('Clean')}
                </S.CleselP>
                <S.CleselP
                  data-testid="status-all-id"
                  color={true}
                  onClick={() => {
                    allStatus()
                  }}
                >
                  {t('Select all')}
                </S.CleselP>
              </S.Clesel>
            </S.CheBox>
          </S.SearchContainer>
        )}
        <S.BoxBoard>
          <S.ButtonEstab
            data-testid="btn-estab-id"
            onClick={() => {
              setCodAut(!codAut)
              setOpenDate(false)
              setOpenEstablishment(false)
              setOpenStatus(false)
            }}
          >
            <S.TextEstab color={codAut}>{t('Cod. Aut.')}</S.TextEstab>
            <S.Arrow spin={codAut}>
              <ArrowBottonRed />
            </S.Arrow>
          </S.ButtonEstab>
        </S.BoxBoard>
        {codAut && (
          <S.SearchContainerAut>
            <S.SearchCodAut>
              <SearchInput
                data-testid="input-codAut-id"
                placeholder={
                  translate('Search by code...') as unknown as string
                }
                maxLength={37}
                value={mask(coudChange)}
                onChange={(e: { target: { value: any } }) => setCoudChange(e.target.value)}
                icon={<MagnifyingGlass />} />
            </S.SearchCodAut>
          </S.SearchContainerAut>
        )}
        <S.Border />
        <S.ButtonApply>
          <S.ButtonFil
            data-testid="btn-fil-id"
            onClick={() => {
              apllyFilter()
              setOpenDate(false)
              setOpenEstablishment(false)
              setOpenStatus(false)
              setCodAut(false)
            }}
          >
            {t('Apply Filters')}
          </S.ButtonFil>
        </S.ButtonApply>
      </S.Container>
    </>
  )
}
