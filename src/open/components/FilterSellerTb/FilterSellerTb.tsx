import React, { useState, useEffect, useContext, useRef } from 'react'
import * as S from './styles'
import Checkbox from '../Checkbox/Checkbox'
import { t } from '@albatross/react-i18n'
import { DatePicker } from '@albatross/ui'
import { ArrowRightRed } from '../../assets/icons/ArrowRightRed'
import { I18nContext } from '@albatross/react-i18n'
import { FilterProps } from './interfaces'
import SearchInput from '../SearchInput/SearchInput'
import { PopoverComponent } from '../Popover'
import {
  format,
  subDays,
  startOfYesterday,
  startOfMonth,
  subMonths,
  endOfMonth,
  startOfDay,
  subHours,
} from 'date-fns'
import { ButtomDropdown } from '../ButtomDropdown'
import { Volver } from '../../assets/icons/Volver'
import { SearchLup } from '../../assets/icons/searchLup'

const mockStatus = [
  { value: 'settled', id: 0 },
  { value: 'authorized', id: 1 },
  { value: 'rejected', id: 2 },
]
export const FilterSellerTb = ({
  data,
  userDetails,
  setStatus,
  setStartDateIso,
  setEndDateIso,
  actionFilter,
  setEstablishmentFilter,
  setCoudChange,
  coudChange,
  status,
  establishmentFilter,
  isClosed,
  openDropDownFilter,
  update,
  setUpdate
}: FilterProps) => {
  const [openEstablishment, setOpenEstablishment] = useState(false)
  const [startDate, setStartDate] = useState<any>()
  const [endDate, setEndDate] = useState<any>()
  const [openDate, setOpenDate] = useState(false)
  const [openStatus, setOpenStatus] = useState(false)
  const [codAut, setCodAut] = useState<boolean | string>(false)
  const [isValue, setIsValue] = useState<string>()
  const [showCalendar, setShowCalendar] = useState<any>(false)
  const [valueDate, setValueDate] = useState<any>()
  const [checkEstab, setCheckEstab] = useState(false)
  const [checkStatus, setCheckStatus] = useState(false)
  const [checkCodAut, setCheckCodAut] = useState(false)

  const { translate } = useContext(I18nContext)

  const myRef = useRef(null)

  const checkSearchInput = (value: string) => {
    setIsValue(value)
    if (value.length > 2 || value.length === 0) {
      const filteredList = estabInitial.filter(
        (seller: { trade_name: string }) =>
          seller?.trade_name.toUpperCase().includes(value.toUpperCase())
      )
      if (filteredList.length > 0) {
        setIsCheck(filteredList?.sort(comparedSellers))
      } else {
        setIsCheck([])
      }
    }
  }

  const checkSearchCodAut = (value: any) => {
    if (value.length > 2 || value.length === 0) {
      const filteredList = initialAut.filter(
        (item: { authorization_code: string }) =>
          item?.authorization_code.toUpperCase().includes(value.toUpperCase())
      )
      if (filteredList.length > 0) {
        setIsCheckAut(filteredList?.sort(comparedAut))
      } else {
        setIsCheckAut([])
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

  const mapAut =
    data &&
    data?.map((item: any) => {
      return { ...item, checked: false }
    })

  useEffect(() => {
    setIsCheck(userDetails && mapSellers?.sort(comparedSellers))
    setEstabInitial(userDetails && mapSellers?.sort(comparedSellers))
  }, [userDetails])

  function comparedSellers(a: any, b: any) {
    if (a.seller_id < b.seller_id) return -1
    if (a.seller_id > b.seller_id) return 1
    return 0
  }

  useEffect(() => {
    setIsCheckAut(data && mapAut?.sort(comparedAut))
    setInitialAut(data && mapAut?.sort(comparedAut))
  }, [data])

  function comparedAut(a: any, b: any) {
    if (a.authorization_code < b.authorization_code) return -1
    if (a.authorization_code > b.authorization_code) return 1
    return 0
  }

  const [isCheck, setIsCheck] = useState(mapSellers)
  const [estabInitial, setEstabInitial] = useState(mapSellers)
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

    const listNotCheckeds = estabInitial.filter((item) => {
      return !newSellers.find((item2) => {
        return item.seller_id === item2.seller_id
      })
    })

    const stayList = [...listNotCheckeds, ...newSellers]

    setIsCheck(newSellers.sort(comparedSellers))
    setEstabInitial(stayList.sort(comparedSellers))
    const establishmentSearch = newSellers
      .sort(comparedSellers)
      .filter((item: { checked: boolean }) => item.checked === true)
    const mapeEtablishmentSearch = establishmentSearch.map(
      (item: { seller_id: string }) => {
        return item.seller_id
      }
    )
    if (mapeEtablishmentSearch.length !== 0) {
      setEstablishmentFilter(mapeEtablishmentSearch)
    } else setEstablishmentFilter(undefined)
  }

  const [isCheckStatus, setIsCheckStatus] = useState(mapStatus)
  const showCheckStatus = (id: number) => {
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
    const statusSearch = newStatus
      .sort(compared)
      .filter((item) => item.checked === true)
    const mapStatusSearch = statusSearch.map((item) => {
      return item.value
    })
    if (mapStatusSearch.length !== 0) {
      setStatus(mapStatusSearch)
    } else setStatus(undefined)
  }

  function compared(a: { id: number }, b: { id: number }) {
    if (a.id < b.id) return -1
    if (a.id > b.id) return 1
    return 0
  }

  const [isCheckAut, setIsCheckAut] = useState(mapAut)
  const [initialAut, setInitialAut] = useState(mapAut)
  const showCheckAut = (id: string) => {
    const notSelected = isCheckAut.filter(
      (item: { authorization_code: string }) => {
        return item.authorization_code !== id
      }
    )
    const selected = isCheckAut.filter((item: any) => {
      return item.authorization_code === id
    })
    const newAut = [
      ...notSelected,
      { ...selected[0], checked: !selected[0]?.checked },
    ]

    const listNotCheckedsAut = initialAut?.filter(
      (item: { authorization_code: any }) => {
        return !newAut.find((item2) => {
          return item.authorization_code === item2.authorization_code
        })
      }
    )

    const stayListAut = [...listNotCheckedsAut, ...newAut]

    setIsCheckAut(newAut.sort(comparedAut))
    setInitialAut(stayListAut.sort(comparedAut))
    const autSearch = newAut
      ?.sort(comparedAut)
      ?.filter((item) => item.checked === true)
    const mapSAutSearch = autSearch?.map((item) => {
      return item.authorization_code
    })

    if (mapSAutSearch?.length !== 0) {
      setCoudChange(mapSAutSearch)
    } else setCoudChange(undefined)
  }
  useEffect(() => {
    const a = isCheckAut?.filter((item: { checked: boolean }) => {
      return item.checked === true
    })
    if (isCheckAut?.length === a?.length && isCheckAut?.length !== 0) {
      setCheckCodAut(true)
    } else setCheckCodAut(false)

    const b = isCheck?.filter((item) => {
      return item.checked === true
    })

    if (isCheck?.length === b?.length && isCheck?.length !== 0) {
      setCheckEstab(true)
    } else setCheckEstab(false)

    const c = isCheckStatus?.filter((item) => {
      return item.checked === true
    })
    if (isCheckStatus?.length === c?.length) {
      setCheckStatus(true)
    } else setCheckStatus(false)
  }, [isCheckAut, isCheck, isCheckStatus])

  const all = (check: boolean | ((prevState: boolean) => boolean)) => {
    setCheckEstab(check)
    const cleanConst = isCheck.map((item) => {
      return { ...item, checked: false }
    })

    const allConst = isCheck.map((item) => {
      return { ...item, checked: true }
    })

    const mapeEtablishmentSearch = allConst.map(
      (item: { seller_id: string }) => {
        return item.seller_id
      }
    )
    if (check) {
      setIsCheck(allConst)
      setEstabInitial(allConst)
      setEstablishmentFilter(mapeEtablishmentSearch)
    } else {
      setIsCheck(cleanConst)
      setEstabInitial(cleanConst)
      setEstablishmentFilter(undefined)
    }
  }

  const allStatus = (
    check: boolean | ((prevState: boolean) => boolean) | any
  ) => {
    setCheckStatus(check)
    const cleanConstStatus = isCheckStatus.map((item) => {
      return { ...item, checked: false }
    })
    const allConstStatus = isCheckStatus.map((item) => {
      return { ...item, checked: true }
    })
    const mapStatusSearch = allConstStatus.map((item) => {
      return item.value
    })

    if (check) {
      setIsCheckStatus(allConstStatus)
      setStatus(mapStatusSearch)
    } else {
      setIsCheckStatus(cleanConstStatus)
      setStatus(undefined)
    }
  }

  const allAut = (check: boolean | ((prevState: boolean) => boolean)) => {
    setCheckCodAut(check)
    const cleanConstAut = isCheckAut?.map((item: any) => {
      return { ...item, checked: false }
    })
    const allConstAut = isCheckAut?.map((item: any) => {
      return { ...item, checked: true }
    })

    const mapAutSearch = allConstAut?.map(
      (item: { authorization_code: any }) => {
        return item?.authorization_code
      }
    )

    if (check) {
      setIsCheckAut(allConstAut)
      setInitialAut(allConstAut)
      setCoudChange(mapAutSearch)
    } else {
      setIsCheckAut(cleanConstAut)
      setInitialAut(cleanConstAut)
      setCoudChange(undefined)
    }
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
    actionFilter()
    setOpenDate(false)
    setOpenEstablishment(false)
    setOpenStatus(false)
    setCodAut(false)
    setShowCalendar(false)
    isClosed()
  }

  const option = [
    'Yesterday',
    'Last 7 days',
    'Last 15 days',
    'This month',
    'Last month',
  ]

  useEffect(() => {
    const endMonth = endOfMonth(subMonths(new Date(), 1))

    switch (valueDate) {
      case 'Yesterday':
        return (
          setStartDateIso(startOfYesterday()), setEndDateIso(startOfYesterday())
        )
      case 'Last 7 days':
        return (
          setStartDateIso(subDays(new Date(), 7)),
          setEndDateIso(startOfDay(new Date()))
        )
      case 'Last 15 days':
        return (
          setStartDateIso(subDays(new Date(), 15)),
          setEndDateIso(startOfDay(new Date()))
        )
      case 'This month':
        return (
          setStartDateIso(startOfMonth(new Date())),
          setEndDateIso(startOfDay(new Date()))
        )
      case 'Last month':
        return (
          setStartDateIso(startOfMonth(subMonths(new Date(), 1))),
          setEndDateIso(subHours(endMonth, 3))
        )
    }
  }, [valueDate])

  const CleanAll = () => {
    setCheckEstab(false)
    setCheckStatus(false)
    setCheckCodAut(false)
    setStatus(null)
    setEstablishmentFilter(null)
    setStartDateIso(null)
    setEndDateIso(null)
    setCoudChange('')
    setValueDate(null)
    setOpenDate(false)
    setOpenEstablishment(false)
    setOpenStatus(false)
    setCodAut(false)
    setShowCalendar(false)
    setStartDate(undefined)
    setEndDate(undefined)
    const cleanConst = isCheck.map((item) => {
      return { ...item, checked: false }
    })
    setIsCheck(cleanConst)
    setEstabInitial(cleanConst)

    const cleanConstStatus = isCheckStatus.map((item) => {
      return { ...item, checked: false }
    })
    setIsCheckStatus(cleanConstStatus)

    const cleanConstAut = isCheckAut.map((item: any) => {
      return { ...item, checked: false }
    })
    setIsCheckAut(cleanConstAut)
    setInitialAut(cleanConstAut)
  }

  return (
    <>
      {openDropDownFilter && (
        <S.Container data-testid="optionsFilter-id" ref={myRef}>
          <S.FilterContent>
            <S.Clean
              onClick={() => {
                setUpdate(!update)
                CleanAll()
              }}
              disabled={
                (!valueDate || valueDate === 'I chose a period') &&
                !establishmentFilter &&
                !status &&
                (startDate === undefined ||
                  (endDate === undefined && startDate === null) ||
                  endDate === null) &&
                (coudChange === '' || coudChange === undefined)
              }
            >
              {t('Clean')}
            </S.Clean>
            <S.ButtonDropFilter
              data-testid="btn-fil-id"
              onClick={() => {
                apllyFilter()
              }}
              disabled={
                (!valueDate || valueDate === 'I chose a period') &&
                !establishmentFilter &&
                !status &&
                (startDate === undefined ||
                  (endDate === undefined && startDate === null) ||
                  endDate === null) &&
                (coudChange === '' || coudChange === undefined)
              }
            >
              {t('Apply')}
            </S.ButtonDropFilter>
          </S.FilterContent>
          <S.Box
            data-testid="container-date-id"
            onClick={() => {
              setOpenDate(!openDate)
              setOpenEstablishment(false)
              setOpenStatus(false)
              setCodAut(false)
            }}
          >
            <S.TextActionBold color={openDate} data-testid="text-filter-id">
              {t('Períod')}
              {valueDate && <S.Bullet>(1)</S.Bullet>}
              <S.IconStyled>
                <ArrowRightRed />
              </S.IconStyled>
            </S.TextActionBold>
          </S.Box>
          <S.SearchContainer>
            <PopoverComponent
              open={openDate}
              outsideClick={setOpenDate}
              parentRef={myRef}
              withSpacing={false}
              positionRelative={true}
              clean={() => CleanAll()}
            >
              <>
                {openDate && (
                  <S.DropdownBox>
                    {option.map((item, index) => {
                      return (
                        <S.ContainerSelectDate
                          onClick={() => setValueDate(item)}
                        >
                          <S.DateSelector
                            type="radio"
                            checked={valueDate === item}
                            name="data"
                            onChange={(e) => setValueDate(e.target.value)}
                            value={item}
                          />
                          <S.DateName key={`date-${index}`}>
                            {t(item)}
                          </S.DateName>
                        </S.ContainerSelectDate>
                      )
                    })}
                    <S.ContainerSelectDate
                      onClick={() => {
                        setShowCalendar(true)
                        setValueDate('I chose a period')
                      }}
                    >
                      <S.DateSelector
                        type="radio"
                        name="data"
                        checked={valueDate === 'I chose a period'}
                        onChange={(e) => setValueDate(e.target.value)}
                        value={'I chose a period'}
                      />
                      <S.DateName>{t('I chose a period')}</S.DateName>
                    </S.ContainerSelectDate>
                  </S.DropdownBox>
                )}
              </>
            </PopoverComponent>
            <ButtomDropdown
              open={true}
              calendar={
                <>
                  <PopoverComponent
                    open={showCalendar}
                    outsideClick={setShowCalendar}
                    parentRef={myRef}
                    withSpacing={false}
                    clean={() => CleanAll()}
                  >
                    <S.MonthDropdown>
                      <S.BoxContent
                        onClick={() => {
                          setShowCalendar(false)
                          setOpenDate(true)
                        }}
                      >
                        <S.IconLeft>
                          <Volver />
                        </S.IconLeft>
                        <S.TextTypography>
                          {t('Go back to select the period')}
                        </S.TextTypography>
                      </S.BoxContent>
                      <S.BorderBotton border={false} />
                      <S.CalendarBox>
                        <DatePicker
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
                          showActionButtons={false}
                        />
                      </S.CalendarBox>
                    </S.MonthDropdown>
                  </PopoverComponent>
                </>
              }
            ></ButtomDropdown>
          </S.SearchContainer>

          <S.BorderBotton border={false} />
          <S.Box
            data-testid="container-estab-id"
            onClick={() => {
              setOpenEstablishment(!openEstablishment)
              setOpenDate(false)
              setOpenStatus(false)
              setCodAut(false)
              setShowCalendar(false)
            }}
          >
            <S.ButtonEstab>
              <S.TextActionBold
                data-testid="text-filter-id"
                color={openEstablishment}
              >
                {t('Establishment')}
                {establishmentFilter?.length > 0 && (
                  <S.Bullet>({establishmentFilter?.length})</S.Bullet>
                )}
              </S.TextActionBold>
              <S.IconStyled>
                <ArrowRightRed />
              </S.IconStyled>
            </S.ButtonEstab>
          </S.Box>
          <S.Border />
          {openEstablishment && (
            <S.SearchContainer>
              <PopoverComponent
                open={openEstablishment}
                outsideClick={setOpenEstablishment}
                parentRef={myRef}
                withSpacing={false}
                positionRelative={true}
                clean={() => CleanAll()}
              >
                <S.DropdownBoxEstab>
                  <S.Search>
                    <SearchInput
                      data-testid="input-filter-id"
                      placeholder={
                        translate('Search by name...') as unknown as string
                      }
                      onChange={(e: { target: { value: string } }) =>
                        checkSearchInput(e.target.value)
                      }
                      value={isValue}
                      iconLeft={<SearchLup />}
                    />
                  </S.Search>
                  <S.CheBoxSelect>
                    <Checkbox
                      data-testid="checkbox-id"
                      label={translate('Select all')}
                      checked={checkEstab}
                      onchange={(e: {
                        target: {
                          checked: boolean | ((prevState: boolean) => boolean)
                        }
                      }) => all(e.target.checked)}
                    />
                  </S.CheBoxSelect>
                  <S.BoxBorder />
                  <S.BottonStatus />
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
                              onchange={() => showCheck(seller?.seller_id)}
                            />
                          )
                        }
                      )}
                  </S.CheBox>
                </S.DropdownBoxEstab>
              </PopoverComponent>
            </S.SearchContainer>
          )}
          <S.Box
            data-testid="container-status-id"
            onClick={() => {
              setOpenStatus(!openStatus)
              setOpenDate(false)
              setOpenEstablishment(false)
              setCodAut(false)
              setShowCalendar(false)
            }}
          >
            <S.ButtonEstab data-testid="container-status-two-id">
              <S.TextActionBold data-testid="text-filter-id" color={openStatus}>
                {t('Status')}
                {status?.length > 0 && <S.Bullet>({status?.length})</S.Bullet>}
              </S.TextActionBold>
              <S.IconStyled>
                <ArrowRightRed />
              </S.IconStyled>
            </S.ButtonEstab>
          </S.Box>
          <S.Border />
          {openStatus && (
            <S.SearchContainer>
              <PopoverComponent
                open={openStatus}
                outsideClick={setOpenStatus}
                parentRef={myRef}
                withSpacing={false}
                positionRelative={true}
                clean={() => CleanAll()}
              >
                <S.DropdownBoxStatus>
                  <S.CheBoxSelect>
                    <Checkbox
                      data-testid="checkbox-id"
                      checked={checkStatus}
                      label={translate('Select all')}
                      onchange={(e: { target: { checked: any } }) =>
                        allStatus(e.target.checked)
                      }
                    />
                  </S.CheBoxSelect>
                  <S.BoxBorder />
                  <S.BottonStatus />
                  <S.CheBox>
                    {isCheckStatus.map((status: any, index: any) => {
                      return (
                        <Checkbox
                          data-testid="checkbox-status-id"
                          key={index}
                          checked={status.checked}
                          label={translate(status.value) as unknown as string}
                          id={status.id}
                          onchange={() => showCheckStatus(status.id)}
                        />
                      )
                    })}
                  </S.CheBox>
                </S.DropdownBoxStatus>
              </PopoverComponent>
            </S.SearchContainer>
          )}
          <S.Box
            data-testid="container-cod-id"
            onClick={() => {
              setCodAut(!codAut)
              setOpenDate(false)
              setOpenEstablishment(false)
              setOpenStatus(false)
              setShowCalendar(false)
            }}
          >
            <S.ButtonEstab>
              <S.TextActionBold data-testid="text-filter-id" color={codAut}>
                {t('Cod. Aut.')}
                {coudChange?.length > 0 && (
                  <S.Bullet>({coudChange?.length})</S.Bullet>
                )}
              </S.TextActionBold>
              <S.IconStyled>
                <ArrowRightRed />
              </S.IconStyled>
            </S.ButtonEstab>
          </S.Box>
          <S.BorderBotton border={true} />
          {codAut && (
            <S.SearchContainerAut>
              <PopoverComponent
                open={codAut}
                outsideClick={setCodAut}
                parentRef={myRef}
                withSpacing={false}
                positionRelative={true}
                clean={() => CleanAll()}
              >
                <S.DropdownBoxAut>
                  <S.SearchCodAut>
                    <SearchInput
                      data-testid="input-codAut-id"
                      placeholder={
                        translate('Search by code...') as unknown as string
                      }
                      maxLength={36}
                      onChange={(e: { target: { value: any } }) =>
                        checkSearchCodAut(e.target.value)
                      }
                      iconLeft={<SearchLup />}
                    />
                  </S.SearchCodAut>
                  <S.CheBoxSelect>
                    <Checkbox
                      data-testid="checkbox-id"
                      checked={checkCodAut}
                      label={translate('Select all')}
                      onchange={(e: { target: { checked: any } }) =>
                        allAut(e.target.checked)
                      }
                    />
                  </S.CheBoxSelect>
                  <S.BoxBorder />
                  <S.CheBoxSelectCod>
                    {isCheckAut &&
                      isCheckAut.map(
                        (
                          authorization: {
                            checked: any
                            authorization_code: string
                            id: string
                          },
                          index: React.Key | null | undefined
                        ) => {
                          return (
                            <Checkbox
                              data-testid="checkbox-id"
                              key={index}
                              checked={authorization?.checked}
                              label={authorization?.authorization_code}
                              id={authorization?.authorization_code}
                              onchange={() =>
                                showCheckAut(authorization?.authorization_code)
                              }
                            />
                          )
                        }
                      )}
                  </S.CheBoxSelectCod>
                </S.DropdownBoxAut>
              </PopoverComponent>
            </S.SearchContainerAut>
          )}
        </S.Container>
      )}
    </>
  )
}
