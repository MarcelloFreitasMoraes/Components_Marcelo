import React, { useState, useEffect, useRef } from 'react'
import * as S from './styles'
import { Title } from '../../components/Title'
import { DatePicker } from '@albatross/ui'
import { t } from '@albatross/react-i18n'
import { ButtonFilter } from '../../components/ButtonFilter'
import { Filter } from '../../assets/icons/Filter'
import { Calendar } from '../../assets/icons/calendary'
import { Error } from '../../assets/icons/Error'
import { TableDaily } from '../../components/TableDaily'
import { TableAntecipad } from '../../components/TableAntecipad'
import { Icon } from '@albatross/ui'
import {
  format,
  subDays,
  startOfYesterday,
  startOfMonth,
  subMonths,
  endOfMonth,
  isSameDay,
  startOfDay,
  subHours,
  getMonth,
  getYear,
} from 'date-fns'
import { ModalDaily } from '../../components/ModalDaily'
import { Glossary } from '../../assets/icons/Glossary'
import { ButtomDropdownDaily } from '../../components/ButtomDropdownDaily'
import { SellerProps, StatementsDiaryProps } from './interfaces'
import { HeaderDTO } from '../../services/interfaces'
import { useStatements } from '../../hooks'
import { ModalAntecipation } from '../../components/ModalAntecipation'
import { TableMonto } from '../../components/TableMontos'
import {
  TableTarifaMastercard,
  TableTarifasVisa,
} from '../../components/TableTarifas'
import { ButtonTabs } from '../../components/ButtonTabs'
import { Attention } from '../../assets/icons/Attention'
import { Stage } from '../../components/Stage'
import { TaxesProps } from '../../components/TableTarifas/interface'
import { ModalEstablishments } from '../../components/ModalEstablishments'
import { ButtonDownload } from '../../components/ButtonDownload'
import { Download } from '../../assets/icons/Download'
import { PdfFeedbackModal } from '../../components/PdfFeedbackModal'
import saveAs from 'file-saver'
import { ModalNotSearch } from '../../components/ModalNotSearch'
import { SettlementLoading } from '../../components/SettlementLoading'
import { format as formatTz, utcToZonedTime } from 'date-fns-tz'
import { useSellers } from '../../hooks/SellersHook'

export const StatementsDaily: React.FC<StatementsDiaryProps> = ({
  userDetails,
  tenant,
  country,
  featureToggle,
  config,
}) => {
  const [startDate, setStartDate] = useState<any>()
  const [endDate, setEndDate] = useState<any>()
  const [startShowDate, setStartShowDate] = useState<any>()
  const [endShowDate, setEndShowDate] = useState<any>()
  const [valueDate, setValueDate] = useState<any>()
  const [showCalendar, setShowCalendar] = useState<any>(false)
  const [establishment, setEstablishment] = useState<any>()
  const [establishments, setEstablishments] = useState<Array<any>>([])
  const [establishmentFilter, setEstablishmentFilter] = useState<any>()
  const [tableLiquid, setTableLiquid] = useState(false)
  const [early, setEarly] = useState(false)
  const [all, setAll] = useState(false)
  const [totals, setTotals] = useState<any>()
  const [settlements, setSettlements] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [resultError, setResultError] = useState(false)
  const [notSearch, setNotSearch] = useState(false)
  const [openEstablishment, setOpenEstablishment] = useState(false)
  const [openDate, setOpenDate] = useState(false)
  const [antecipationModalOpen, setAntecipationModalOpen] = useState(false)
  const [mastercardTab, setMastercardTab] = useState(false)
  const [visaTab, setVisaTab] = useState(false)
  const [mastercardTabHidden, setMastercardTabHidden] = useState(true)
  const [visaTabHidden, setVisaTabHidden] = useState(true)
  const [antecipation, setAntecipation] = useState<any>([])
  const [openModalEstablishments, setOpenModalEstablishments] = useState(true)
  const [selectedEstablishment, setSelectedEstablishment] =
    useState<SellerProps>()
  const [disableFilterButton, setDisableFilterButton] = useState(false)
  const [openPDFModal, setOpenPDFModal] = useState(false)
  const [downloadStatus, setDownloadStatus] = useState('')
  const [dateArray, setDateArray] = useState<any>([])
  const [dateStartArray, setDateStartArray] = useState('')
  const [dateEndArray, setDateEndArray] = useState('')
  const [dateIndex, setDateIndex] = useState(1)
  const [dateMaxIndex, setDateMaxIndex] = useState(1)
  const [openDateModal, setOpenDateModal] = useState(false)
  const [startDateModal, setStartDateModal] = useState<any>()
  const [startDateModalPeriod, setStartDateModalPeriod] = useState<any>()
  const [endDateModalPeriod, setEndDateModalPeriod] = useState<any>()
  const [loadingModal, setLoadingModal] = useState(false)
  const [modalAnticiaption, setModalAnticipation] = useState<any>([])
  const [startDateTextLiquid, setStartDateTextLiquid] = useState<any>()
  const [endDateTextLiquid, setEndDateTextLiquid] = useState<any>()
  const [valueDateLiquid, setValueDateLiquid] = useState<any>()
  const [requestModalAnticipation, setRequestModalAnticipation] =
    useState(false)

  const ref = useRef(null)
  const scrollRef = useRef(null)
  const refModal = useRef(null)
  const {
    getStatementsDailyReportJSON,
    getStatementsDailyReportJSONResult,
    getAnticipations,
    getAnticipationsResult,
    getStatementsReportPdf,
    getStatementsReportPdfResult,
  } = useStatements()

  const {
    operations: { FT_AR_ANTICIPATIONS },
  } = featureToggle

  const date = new Date()
  const actualMonth = date.getMonth()
  const actualYear = date.getFullYear()

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

  useEffect(() => {
    if (userDetails?.sellers) {
      setEstablishments(userDetails.sellers)
      setEstablishmentFilter(userDetails.sellers)
    }
  }, [userDetails?.sellers])

  const handleClickOutside = (event: any) => {
    // @ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      setOpenEstablishment(false)
      setOpenDate(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  const handleClickOutsideModal = (event: any) => {
    // @ts-ignore
    if (refModal.current && !refModal.current.contains(event.target)) {
      setOpenDateModal(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideModal, true)
    return () => {
      document.removeEventListener('click', handleClickOutsideModal, true)
    }
  }, [])

  const setDate = (init: any, final: any) => {
    setStartDate(init)
    setEndDate(final)
    setStartShowDate(init)
    setEndShowDate(final)
  }

  // @ts-ignore
  const executeScroll = () => scrollRef.current?.scrollIntoView()

  useEffect(executeScroll, [tableLiquid])

  useEffect(() => {
    const { data, error, isLoading, status } =
      getStatementsDailyReportJSONResult

    if (data && !error && !isLoading) {
      setLoading(false)
      setTotals(data?.totals)
      setSettlements(data?.settlements)
      setTableLiquid(true)
      setAll(true)
      setDisableFilterButton(false)
    }
    if (status === 204 && !error && !isLoading) {
      setLoading(false)
      setNotSearch(true)
      setTableLiquid(false)
      setAll(false)
      setDisableFilterButton(false)
    }
    if (status !== 204 && !error && !isLoading) {
      setNotSearch(false)
    }
    if (error && !isLoading) {
      setLoading(false)
      setResultError(true)
      setTableLiquid(false)
      setAll(false)
    }
  }, [getStatementsDailyReportJSONResult])

  const getStatments = () => {
    setLoading(true)
    setAll(true)

    if (selectedEstablishment) {
      setEstablishment(selectedEstablishment)

      getStatementsDailyReportJSON(
        { tenant, country } as HeaderDTO,
        establishment
          ? establishment.seller_id
          : selectedEstablishment.seller_id,
        subDays(new Date(), 1).toISOString(),
        new Date().toISOString(),
        config
      )

      if (FT_AR_ANTICIPATIONS === 'true') {
        getAnticipations(
          { tenant, country } as HeaderDTO,
          establishment
            ? establishment.seller_id
            : selectedEstablishment.seller_id,
          subDays(new Date(), 1).toISOString(),
          new Date().toISOString(),
          config
        )
      }
    } else {
      getStatementsDailyReportJSON(
        { tenant, country } as HeaderDTO,
        //establishment as SellerProps,
        establishment && establishment.seller_id,
        startDate,
        endDate,
        config
      )

      if (FT_AR_ANTICIPATIONS === 'true') {
        getAnticipations(
          { tenant, country } as HeaderDTO,
          establishment && establishment.seller_id,
          startDate,
          endDate,
          config
        )
      }
    }

    setEstablishmentFilter(establishment)
    setDisableFilterButton(true)
    selectedEstablishment
      ? setStartDateTextLiquid(subDays(new Date(), 1))
      : setStartDateTextLiquid(startDate)
    selectedEstablishment
      ? setEndDateTextLiquid(new Date())
      : setEndDateTextLiquid(endDate)
    setValueDateLiquid(valueDate)
    setRequestModalAnticipation(false)
    setStartDateModal(startDate)
    selectedEstablishment
      ? setStartDateModalPeriod(subDays(new Date(), 1))
      : setStartDateModalPeriod(startDate)
    selectedEstablishment
      ? setEndDateModalPeriod(new Date())
      : setEndDateModalPeriod(endDate)
  }

  useEffect(() => {
    if (valueDate !== 'I chose a period') {
      setOpenDate(false),
        setStartShowDate(undefined),
        setEndShowDate(undefined),
        setShowCalendar(false)
    } else if (startShowDate && endShowDate) {
      setOpenDate(false)
      setShowCalendar(false)
    } else {
      setOpenDate(true)
    }
  }, [valueDate, startShowDate, endShowDate])

  const earlySubmit = () => {
    setEarly(true)
    setAll(false)
    setRequestModalAnticipation(true)
    getAnticipations(
      { tenant, country } as HeaderDTO,
      establishmentFilter
        ? establishmentFilter.seller_id
        : selectedEstablishment && selectedEstablishment.seller_id,
      startDateTextLiquid,
      startDateTextLiquid,
      config
    )
  }
  const allSubmit = () => {
    setAll(true)
    setEarly(false)
  }

  useEffect(() => {
    const { data } = getAnticipationsResult
    if (antecipationModalOpen || requestModalAnticipation) {
      setModalAnticipation(data?.data)
      if (data?.data === undefined) {
        setMastercardTabHidden(true)
        setVisaTabHidden(true)
        setVisaTab(false)
        setMastercardTab(false)
      }
    } else {
      setAntecipation(data?.data)
    }
  }, [getAnticipationsResult])

  useEffect(() => {
    modalAnticiaption?.map((el: any) => {
      el?.taxes.map((tax: TaxesProps) => {
        if (tax.mastercard) {
          setMastercardTab(true)
          setMastercardTabHidden(false)
          setVisaTab(false)
        }

        if (tax.visa) {
          setVisaTabHidden(false)
          if (!tax.mastercard) {
            setVisaTab(true)
          }
        }
      })
    })
  }, [modalAnticiaption])

  const openModal = () => {
    modalAnticiaption?.map((el: any) => {
      el?.taxes.map((tax: TaxesProps) => {
        if (tax.mastercard) {
          setMastercardTab(true)
          setMastercardTabHidden(false)
          setVisaTab(false)
        }

        if (tax.visa) {
          setVisaTabHidden(false)
          if (!tax.mastercard) {
            setVisaTab(true)
          }
        }
      })
    })
    setAntecipationModalOpen(true)
  }

  const closeAntecipationModal = () => {
    setVisaTabHidden(true)
    setMastercardTabHidden(true)
    setVisaTab(false)
    setMastercardTab(false)
    setAntecipationModalOpen(false)
  }
  // @ts-ignore
  const datePeriod = () => {
    if (selectedEstablishment) {
      return `${format(subDays(new Date(), 1), 'dd/MM/yyyy')} - ${format(
        new Date(),
        'dd/MM/yyyy'
      )}`
    } else {
      if (valueDate !== 'I chose a period' && valueDate !== undefined) {
        return t(valueDate)
      } else if (startShowDate && endShowDate) {
        return `${format(startShowDate, 'dd/MM/yyyy')} - ${format(
          endShowDate,
          'dd/MM/yyyy'
        )}`
      }
    }
  }
  const option = [
    'Yesterday',
    'Last 7 days',
    'Last 15 days',
    'This month',
    'Last month',
  ]

  useEffect(() => {
    if (selectedEstablishment) {
      setEstablishment(selectedEstablishment)
      setStartDate(subDays(new Date(), 1))
      setEndDate(new Date())
      getStatments()
    }
  }, [setEstablishment, selectedEstablishment])

  useEffect(() => {
    const { data, error, isLoading, status, headers } =
      getStatementsReportPdfResult

    const header = new Headers(headers)

    if (data && data.size > 0 && !error && !isLoading) {
      if (dateArray) {
        dateIndex === dateMaxIndex
          ? setDownloadStatus('success')
          : setDownloadStatus('loading')
      }
      saveAs(
        data,
        `${
          selectedEstablishment
            ? selectedEstablishment?.trade_name
            : establishmentFilter?.trade_name
        }_statement_${
          JSON.parse(header.get('query-params') as string).start_date
        }/${JSON.parse(header.get('query-params') as string).end_date}.pdf`
      )
    }
    if (status === 204 && !error && !isLoading) {
      if (dateArray) {
        dateIndex === dateMaxIndex
          ? setDownloadStatus('noContent')
          : setDownloadStatus('loading')
      }
    }
    if (error && !isLoading) {
      if (dateArray) {
        dateIndex === dateMaxIndex
          ? setDownloadStatus('error')
          : setDownloadStatus('loading')
      }
    }
  }, [getStatementsReportPdfResult])

  const getDateRange = (startDate: Date, endDate: Date) => {
    const aDay = 24 * 60 * 60 * 1000
    const pad = (num: any) => ('0' + num).slice(-2)

    const formatDate = (d: any) =>
      d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate())

    const getRange = (dates: any) => {
      const ranges = []
      for (
        let i = dates.start.getTime(), end = dates.end.getTime();
        i <= end;

      ) {
        const first = new Date(i),
          last = new Date(first.getFullYear(), first.getMonth() + 1, 0)
        ranges.push({
          start: formatDate(first),
          end: formatDate(last),
        })
        i = last.getTime() + aDay
      }
      return ranges
    }

    const range = {
      start: startDate,
      end: endDate,
    }
    const rangeArray = getRange(range)
    const formatedDatesArray = rangeArray.map((el, index) => {
      if (index === rangeArray.length - 1) {
        return (el = {
          start: el.start,
          end: format(range.end, 'yyyy-MM-dd'),
        })
      }
      return el
    })
    return formatedDatesArray
  }

  const handleDownloadReport = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { isLoading } = getStatementsReportPdfResult
    const datesArray = getDateRange(
      selectedEstablishment ? startDate : startDateTextLiquid,
      selectedEstablishment ? endDate : endDateTextLiquid
    )

    setDateArray(datesArray)
    setOpenPDFModal(true)
    setDownloadStatus('loading')
    setDateIndex(1)

    datesArray.forEach((date, index) => {
      setDateStartArray(date.start)
      setDateEndArray(date.end)
      setDateMaxIndex(datesArray.length)

      if (!isLoading) {
        setTimeout(() => {
          getStatementsReportPdf(
            { tenant, country } as HeaderDTO,
            date.start,
            date.end,
            selectedEstablishment ? selectedEstablishment : establishmentFilter
          )
          setDateIndex(index + 1)
        }, 1500 * (index + 1))
      }
    })
    e.currentTarget.blur()
  }

  useEffect(() => {
    const endMonth = endOfMonth(subMonths(new Date(), 1))

    switch (valueDate) {
      case 'Yesterday':
        return setStartDate(startOfYesterday()), setEndDate(startOfYesterday())
      case 'Last 7 days':
        return (
          setStartDate(subDays(new Date(), 7)),
          setEndDate(startOfDay(new Date()))
        )
      case 'Last 15 days':
        return (
          setStartDate(subDays(new Date(), 15)),
          setEndDate(startOfDay(new Date()))
        )
      case 'This month':
        return (
          setStartDate(startOfMonth(new Date())),
          setEndDate(startOfDay(new Date()))
        )
      case 'Last month':
        return (
          setStartDate(startOfMonth(subMonths(new Date(), 1))),
          setEndDate(subHours(endMonth, 3))
        )
    }
  }, [valueDate])

  const modalDateChange = (init: Date) => {
    setLoadingModal(true)
    if (init) {
      setStartDateModal(init)
    }

    selectedEstablishment
      ? getAnticipations(
          { tenant, country } as HeaderDTO,
          establishment
            ? establishment.seller_id
            : selectedEstablishment.seller_id,
          init.toISOString(),
          init.toISOString(),
          config
        )
      : getAnticipations(
          { tenant, country } as HeaderDTO,
          establishmentFilter.seller_id,
          init.toISOString(),
          init.toISOString(),
          config
        )
  }

  useEffect(() => {
    if (startDateModal) {
      return setOpenDateModal(false)
    }
  }, [startDateModal])

  useEffect(() => {
    const { isLoading } = getAnticipationsResult
    if (!isLoading) {
      setLoadingModal(false)
    }
  }, [getAnticipationsResult])

  const handleEstablishmentsClick = (item: any) => {
    setSelectedEstablishment(undefined)
    setEstablishment(item)
    setOpenEstablishment(false)
    setStartDate(undefined)
    setEndDate(undefined)
    setValueDate(undefined)
  }

  const zonedDate = utcToZonedTime(new Date(), 'America/Argentina/Buenos_Aires')
  return (
    <>
      <S.Container data-testid="statements-diary">
        <ModalEstablishments
          open={openModalEstablishments}
          setOpen={setOpenModalEstablishments}
          userDetails={userDetails}
          selectedEstablishment={selectedEstablishment}
          setSelectedEstablishment={setSelectedEstablishment}
        />
        {openModalEstablishments ? (
          <SettlementLoading />
        ) : (
          <>
            <Title fontSize="32">
              <S.TextTile>{t('Settlement Summary')}</S.TextTile>
            </Title>
            <S.BorderBox>
              <S.Text>
                {t(
                  'The purpose of the settlement summary is to report the amounts deposited in your account. Filter by establishment and choose a specific day or period to check the gross and net amounts and discounts on the screen, or download a PDF to access more details.'
                )}
              </S.Text>
              <S.DropdownBox ref={ref} onClick={handleClickOutside}>
                <ButtomDropdownDaily
                  label={t('Select establishment')}
                  value={
                    selectedEstablishment
                      ? selectedEstablishment.trade_name
                      : establishment?.trade_name
                  }
                  action={() => {
                    setOpenEstablishment(!openEstablishment)
                    setOpenDate(false)
                  }}
                  open={openEstablishment}
                  up={openEstablishment || establishment ? true : false}
                >
                  {establishments.map((item, index) => {
                    return (
                      <S.EstablishmentName
                        key={`establishment-${index}`}
                        onClick={() => handleEstablishmentsClick(item)}
                      >
                        {item.trade_name}
                      </S.EstablishmentName>
                    )
                  })}
                </ButtomDropdownDaily>

                <ButtomDropdownDaily
                  label={t('Select Period')}
                  value={datePeriod()}
                  action={() => {
                    setOpenDate(!openDate)
                    setOpenEstablishment(false)
                  }}
                  open={openDate}
                  icon={<Calendar />}
                  up={
                    openDate ||
                    startDate ||
                    valueDate ||
                    selectedEstablishment ||
                    valueDate !== undefined
                      ? true
                      : false
                  }
                  calendar={
                    <>
                      {showCalendar && (
                        <S.MonthDropdown>
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
                          />
                        </S.MonthDropdown>
                      )}
                    </>
                  }
                >
                  {option.map((item, index) => {
                    return (
                      <S.EstablishmentName
                        key={`date-${index}`}
                        onClick={() => (
                          setSelectedEstablishment(undefined),
                          setValueDate(item)
                        )}
                      >
                        {t(item)}
                      </S.EstablishmentName>
                    )
                  })}
                  <S.EstablishmentName
                    onClick={() => {
                      setShowCalendar(true),
                        setValueDate('I chose a period'),
                        setSelectedEstablishment(undefined)
                    }}
                  >
                    {t('I chose a period')}
                  </S.EstablishmentName>
                </ButtomDropdownDaily>
              </S.DropdownBox>
              <ButtonFilter
                text={t('Filter')}
                icon={
                  <Filter
                    color={startDate && establishment ? 'white' : '#CCCCCC'}
                  />
                }
                disabled={
                  (startDate && endDate && establishment) ||
                  selectedEstablishment ||
                  disableFilterButton
                    ? false
                    : true
                }
                action={() => {
                  getStatments()
                  setEarly(false)
                }}
              />
            </S.BorderBox>
          </>
        )}

        {loading && (
          <S.LoadingCont>
            <Icon name="loading" size={'big'} spinning color="primary" />
          </S.LoadingCont>
        )}

        {tableLiquid && (
          <>
            <S.Liquid ref={scrollRef}>
              <S.TextLiqui>
                {t('Settlements of ')}
                <S.ColorLiqui>{establishmentFilter?.trade_name} </S.ColorLiqui>
                {t('the')}
                <S.ColorLiqui>
                  {' '}
                  {startDateTextLiquid &&
                    format(startDateTextLiquid, 'dd/MM/yyyy')}
                </S.ColorLiqui>

                {valueDateLiquid !== 'Yesterday' && (
                  <>
                    {' '}
                    a{' '}
                    <S.ColorLiqui>
                      {endDateTextLiquid &&
                        format(endDateTextLiquid, 'dd/MM/yyyy')}
                    </S.ColorLiqui>
                  </>
                )}
              </S.TextLiqui>
            </S.Liquid>

            <div>
              <S.DownloadButton>
                <ButtonDownload
                  text={t('Download PDF')}
                  icon={<Download />}
                  action={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleDownloadReport(e)
                  }
                />
              </S.DownloadButton>

              <S.ReportTabs>
                <ButtonTabs
                  label={t('All settlements')}
                  action={allSubmit}
                  active={all}
                />
                {FT_AR_ANTICIPATIONS && antecipation && (
                  <ButtonTabs
                    label={t('Early settlements')}
                    action={earlySubmit}
                    active={early}
                  />
                )}
              </S.ReportTabs>
            </div>
            {all && (
              <>
                <S.BoxTotal>
                  <Stage
                    label={t('Total Gross')}
                    value={divider(totals?.gross_value)}
                  />
                  <Stage
                    label={t('Discounts')}
                    value={divider(totals?.discounts)}
                  />
                  <Stage
                    label={t('Net Total')}
                    value={divider(totals?.net_value)}
                  />
                </S.BoxTotal>
                <S.Table>
                  <TableDaily settlements={settlements} />
                </S.Table>
              </>
            )}
            {early && (
              <>
                <S.TextLimit>
                  {t('Limit available for advance on ')}
                  {formatTz(zonedDate, 'dd/MM/yyyy', {
                    timeZone: 'America/Argentina/Buenos_Aires',
                  })}
                  {t(' at ')}
                  {formatTz(zonedDate, 'HH:mm', {
                    timeZone: 'America/Argentina/Buenos_Aires',
                  })}
                  {`: `}
                  <S.ColorSpanVd
                    colorType={
                      antecipation && antecipation[0].available_limit > '000'
                    }
                  >
                    ${antecipation && divider(antecipation[0].available_limit)}
                  </S.ColorSpanVd>
                  {t(' of ')}
                  <S.ColorSpanVd
                    colorType={
                      antecipation && antecipation[0].available_limit > '000'
                    }
                  >
                    ${antecipation && divider(antecipation[0].limit)}
                  </S.ColorSpanVd>
                </S.TextLimit>

                <S.BoxTotal>
                  <Stage
                    label={t('Total Gross')}
                    value={
                      antecipation && divider(antecipation[0].total_ammount)
                    }
                  />
                  <Stage
                    label={t('Discounts')}
                    value={
                      antecipation && divider(antecipation[0].total_discounts)
                    }
                  />
                  <Stage
                    label={t('Net Total')}
                    value={antecipation && divider(antecipation[0].net_value)}
                  />
                </S.BoxTotal>
                <S.Table>
                  <TableAntecipad settlements={antecipation} />
                </S.Table>
                <S.Rates>
                  <S.TextRates>
                    {t('Your rates may vary according to each settlement. ')}{' '}
                  </S.TextRates>
                  <S.Link onClick={openModal}>
                    <S.ColorSpanRd>
                      {' '}
                      {t('I understand the values ​​and rates. ')}{' '}
                    </S.ColorSpanRd>

                    <S.IconI>
                      <Attention />
                    </S.IconI>
                  </S.Link>
                </S.Rates>
              </>
            )}
          </>
        )}
      </S.Container>

      {notSearch && (
        <ModalNotSearch>
          <>
            <S.BoxMdl>
              <S.TitleLoad>{t('Oops!')}</S.TitleLoad>
              <S.BoxNotSearch>
                <S.SubNotSearch>
                  <S.textNot>
                    {' '}
                    {t(
                      'We do not have information for the pre-established period.'
                    )}
                  </S.textNot>
                  <S.textNot>{t('How about trying a new filter?')}</S.textNot>
                </S.SubNotSearch>
                <S.InfoGlossary>
                  <Glossary />
                </S.InfoGlossary>
              </S.BoxNotSearch>
            </S.BoxMdl>
          </>
        </ModalNotSearch>
      )}

      {resultError && (
        <ModalDaily>
          <>
            <S.BoxLoadError>
              <S.BoxError>
                <Error width={100} height={100} />
              </S.BoxError>
              <S.TitleError>{t('We fell them...')}</S.TitleError>
              <S.SubError>
                {t(
                  'At the moment we cannot process your request. By please try again.'
                )}
              </S.SubError>
            </S.BoxLoadError>
            <S.ButtonBox>
              <ButtonFilter
                text={t('Accept')}
                action={() => setResultError(false)}
              />
            </S.ButtonBox>
          </>
        </ModalDaily>
      )}

      <ModalAntecipation showModal={antecipationModalOpen}>
        {!loadingModal ? (
          <>
            <S.ModalTitleContainer>
              <S.ModalTitle>{t('Antecipation information')}</S.ModalTitle>
              <S.CloseBtn
                data-testid="btn-close-modal"
                type="button"
                onClick={closeAntecipationModal}
              >
                <S.CloseIcon name="closed" />
              </S.CloseBtn>
            </S.ModalTitleContainer>
            {!isSameDay(new Date(startDate), new Date(endDate)) && (
              <S.DropdownBox ref={refModal} onClick={handleClickOutsideModal}>
                <ButtomDropdownDaily
                  label={t('Day')}
                  value={
                    startDateModal
                      ? startDateModal && format(startDateModal, 'dd/MM/yyyy')
                      : startDate && format(startDate, 'dd/MM/yyyy')
                  }
                  action={() => {
                    setOpenDateModal(!openDateModal)
                  }}
                  open={openDateModal}
                  icon={<Calendar />}
                  up={
                    openDateModal || startDateModal || startDate ? true : false
                  }
                >
                  <S.BoxDate>
                    <DatePicker
                      startDate={
                        selectedEstablishment ? startDate : startDateModal
                      }
                      endDate={
                        selectedEstablishment ? startDate : startDateModal
                      }
                      onDatesChange={modalDateChange}
                      pickerLevel="day"
                      showContainerDropShadow={false}
                      showActionButtons={false}
                      // @ts-ignore
                      minDate={
                        !selectedEstablishment
                          ? valueDate === 'Last 7 days' ||
                            valueDate === 'Last 15 days'
                            ? subDays(new Date(startDateModalPeriod), 1)
                            : new Date(startDateModalPeriod)
                          : subDays(new Date(), 2)
                      }
                      maxDate={
                        selectedEstablishment
                          ? new Date()
                          : new Date(endDateModalPeriod)
                      }
                      startingMonth={
                        new Date(
                          getYear(
                            selectedEstablishment
                              ? startDate
                              : startDateModalPeriod
                          ),
                          getMonth(
                            selectedEstablishment
                              ? startDate
                              : startDateModalPeriod
                          )
                        )
                      }
                    />
                  </S.BoxDate>
                </ButtomDropdownDaily>
              </S.DropdownBox>
            )}

            <S.MontosContainer>
              <S.H3Title>{t('Amounts')}</S.H3Title>
              <p>
                {t(
                  'Understand the amounts you have received and what were the anticipation costs for this settlement.'
                )}
              </p>
              <S.Table>
                <TableMonto settlements={modalAnticiaption} />
              </S.Table>
            </S.MontosContainer>
            <S.TarifasContainer>
              <S.H3Title>{t('Rates')}</S.H3Title>
              <p>
                {t(
                  'See below the rates applied to each type of operation that took place in this settlement.'
                )}
              </p>
              <S.ReportTabs>
                <ButtonTabs
                  label={t('Mastercard')}
                  action={() => (setMastercardTab(true), setVisaTab(false))}
                  active={mastercardTab}
                  hidden={mastercardTabHidden}
                />

                <ButtonTabs
                  label={t('Visa')}
                  action={() => (setVisaTab(true), setMastercardTab(false))}
                  active={visaTab}
                  hidden={visaTabHidden}
                />
              </S.ReportTabs>
              <S.Table>
                {mastercardTab && (
                  <TableTarifaMastercard settlements={modalAnticiaption} />
                )}
                {visaTab && (
                  <TableTarifasVisa settlements={modalAnticiaption} />
                )}
              </S.Table>
            </S.TarifasContainer>
          </>
        ) : (
          <S.LoadingContModal>
            <Icon name="loading" size={'big'} spinning color="primary" />
          </S.LoadingContModal>
        )}
      </ModalAntecipation>

      <PdfFeedbackModal
        open={openPDFModal}
        setOpen={setOpenPDFModal}
        status={downloadStatus}
        index={dateIndex}
        maxIndex={dateMaxIndex}
      />
    </>
  )
}
