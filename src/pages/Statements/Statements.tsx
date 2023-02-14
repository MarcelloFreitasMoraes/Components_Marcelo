import React, { useState, useContext, useEffect } from 'react'
import {
  Container,
  BorderBox,
  Text,
  DropdownBox,
  DownloadButton,
  SearchInput,
  SellerDropdown,
  MonthDropdown,
} from './styles'
import { Title } from '../../components/Title'
import { I18nContext } from '@albatross/react-i18n'
import {
  DropdownItemAction,
  DropdownOptions,
} from '@albatross/react-ui-dropdown'
import { Icon, Input } from '@albatross/ui'
import { months } from '../../utils/months'
import { ButtonDropdown } from '../../components/ButtonDropdown'
import { PdfFeedbackModal } from '../../components/PdfFeedbackModal'
import { SellerProps, StatementsProps } from './interfaces'
import { saveAs } from 'file-saver'
import { HeaderDTO } from '../../services/interfaces'
import { useStatements } from '../../hooks'
import {
  endOfMonth,
  format,
  isSameMonth,
  startOfMonth,
  subMonths,
  differenceInCalendarMonths,
  eachMonthOfInterval,
  getYear,
} from 'date-fns'

const getSelectYearAndMonth = (date: any) => {
  const splitDate = date.label.split('/')
  const selectedMonth = splitDate[0]
  const selectedYear = splitDate[1]
  return { selectedMonth, selectedYear }
}

export const Statements: React.FC<StatementsProps> = ({
  userDetails,
  tenant,
  country,
  featureToggle,
}) => {
  const [seller, setSeller] = useState<SellerProps>()
  const [sellers, setSellers] = useState<Array<SellerProps>>([])
  const [date, setDate] = useState<any>('')
  const [startDate, setStartDate] = useState<any>('')
  const [endDate, setEndDate] = useState<any>('')
  const [sellersFilter, setFilterSellers] =
    useState<Array<SellerProps>>(sellers)
  const [openModal, setOpenModal] = useState(false)
  const [downloadStatus, setDownloadStatus] = useState('')
  const { translate } = useContext(I18nContext)
  const {
    getStatementsReportPdf,
    getStatementsReportPdfResult,
    getStatementsReportPdfMonthAndYear,
  } = useStatements()

  const {
    operations: {
      FT_AR_STATEMENTS_CURRENT_MONTH_FILTER,
      FT_AR_STATEMENTS_MONTH_YEAR_FILTER,
    },
  } = featureToggle

  useEffect(() => {
    if (userDetails?.sellers) {
      setSellers(userDetails.sellers)
      setFilterSellers(userDetails.sellers)
    }
  }, [userDetails?.sellers])

  useEffect(() => {
    const { data, error, isLoading, status } = getStatementsReportPdfResult
    if (data && data.size > 0 && !error && !isLoading) {
      const { selectedMonth, selectedYear } = getSelectYearAndMonth(date)
      setDownloadStatus('success')
      saveAs(
        data,
        `${seller?.trade_name}_statement_${selectedMonth}/${selectedYear}.pdf`
      )
    }
    if (status === 204 && !error && !isLoading) {
      setDownloadStatus('noContent')
    }
    if (error && !isLoading) {
      setDownloadStatus('error')
    }
  }, [getStatementsReportPdfResult])

  const handleDownloadReport = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedMonth = date.value.getMonth() + 1
    const selectedYear = date.value.getFullYear()

    setOpenModal(true)
    setDownloadStatus('loading')

    if (FT_AR_STATEMENTS_MONTH_YEAR_FILTER === 'true') {
      getStatementsReportPdfMonthAndYear(
        { tenant, country } as HeaderDTO,
        selectedYear,
        selectedMonth,
        seller as SellerProps
      )
    } else {
      getStatementsReportPdf(
        { tenant, country } as HeaderDTO,
        format(startDate, 'yyyy-MM-dd'),
        format(endDate, 'yyyy-MM-dd'),
        seller as SellerProps
      )
    }
    e.currentTarget.blur()
  }

  const filterSeller = (e: Event) => {
    const filter = (e.target as HTMLInputElement).value
    setFilterSellers(
      sellers.filter((item: any) =>
        item.trade_name.toLowerCase().includes(filter.toLowerCase())
      )
    )
  }

  const getLastThreeMonthsOptions = () => {
    let last12Months: any[] = []
    const currenteDate = subMonths(new Date(), 1)
    const monthQty = differenceInCalendarMonths(
      currenteDate,
      new Date('9-02-2022')
    )
    const previousDate = subMonths(currenteDate, monthQty > 12 ? 13 : monthQty)
    const result = eachMonthOfInterval({
      start: previousDate,
      end: currenteDate,
    })
    result?.map((el) => {
      last12Months = [
        {
          label: `${translate(format(new Date(el), 'LLLL'))}/${getYear(el)}`,
          value: new Date(el),
        },
      ].concat(last12Months)
      return last12Months
    })
    return last12Months
  }

  return (
    <Container data-testid="statements">
      <Title fontSize="32">{translate('Monthly summary')}</Title>
      <BorderBox>
        <Text>{translate('Monthly statements definition')}</Text>
        <DropdownBox>
          <SellerDropdown>
            <ButtonDropdown
              label={translate('Select store')}
              value={seller?.trade_name}
              leftContent={<Icon size="small" name="store" />}
              closeOnClickInside={true}
            >
              <SearchInput className="search-input">
                <Input
                  onChange={filterSeller}
                  placeholder={translate('Filter')}
                  trailingIcon={'filter'}
                  searchInput
                  data-testid="seller-search-input"
                ></Input>
              </SearchInput>
              <DropdownOptions>
                {sellersFilter.map((item, index) => (
                  <DropdownItemAction
                    key={`seller-${index}`}
                    onClick={() => {
                      setSeller(item)
                    }}
                    rightContent={<Icon size="small" name="check" />}
                  >
                    {item.trade_name}
                  </DropdownItemAction>
                ))}
              </DropdownOptions>
            </ButtonDropdown>
          </SellerDropdown>
          <MonthDropdown>
            <ButtonDropdown
              label={translate('Select month')}
              value={date.label}
              leftContent={<Icon size="small" name="calendar" />}
              closeOnClickInside={true}
            >
              <DropdownOptions>
                {getLastThreeMonthsOptions().map((date, key) => (
                  <DropdownItemAction
                    key={key}
                    onClick={() => {
                      setDate(date)
                      setStartDate(startOfMonth(date.value))
                      setEndDate(
                        isSameMonth(new Date(), endOfMonth(date.value))
                          ? new Date()
                          : endOfMonth(date.value)
                      )
                    }}
                    rightContent={<Icon size="small" name="check" />}
                  >
                    {date.label}
                  </DropdownItemAction>
                ))}
              </DropdownOptions>
            </ButtonDropdown>
          </MonthDropdown>
        </DropdownBox>
        <DownloadButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleDownloadReport(e)
          }
          leftIcon={'download'}
          disabled={!seller || !date}
          data-testid={'statement-downlod-button'}
        >
          {translate('Download file')}
        </DownloadButton>
      </BorderBox>
      <PdfFeedbackModal
        open={openModal}
        setOpen={setOpenModal}
        status={downloadStatus}
      />
    </Container>
  )
}
