import React, { useEffect, useRef, useState } from 'react'
import * as S from './styles'
import axios from 'axios'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import { t } from '@albatross/react-i18n'
import { Stage } from '../../components/Stage'
import { BoxQr } from '../../components/BoxQr'
import { Modal } from '../../components/Modal'
import { Title } from '../../components/Title'
import { Link } from '../../components/Link'
import { TableQr } from '../../components/TableQr'
import { ButtonFilter } from '../../components/ButtonFilter'
import { FilterSellerTb } from '../../components/FilterSellerTb'
import { Pagination } from '../../components/Pagination/Pagination'
import { Update } from '../../assets/icons/Update'
import { Filter } from '../../assets/icons/Filter'
import { ArrowBottonRed } from '../../assets/icons/ArrowBottonRed'
import { Error } from '../../assets/icons/Error'
import { TableLoading } from '../../components/TableLoading'
import { useAdjustmentInfo } from '../../hooks/TransferHook'
import { ListQrCodeProps } from './interfaces'

export const ListQrCode = React.memo(
  ({
    userDetails,
    tenant,
    country,
    merchantId,
    FT_AR_TRANSF_30_TABLE,
    FT_AR_TRANSF_30_FILTER
  }: ListQrCodeProps) => {
    const [isActive, setIsActive] = useState(false)
    const establishment = t('Establishment')
    const [sellerName, setSellerName] = useState<any>(establishment)
    const [responseTable, setResponseTable] = useState<any>()
    const [limit, setLimit] = useState<string>('10')
    const [sellerTitle, setSellerTitle] = useState<any>()
    const [establishmentFilter, setEstablishmentFilter] = useState<Array<any>>()
    const [status, setStatus] = useState<any>()
    const [page, setPage] = useState<number>(1)
    const [startDate, setStartDate] = useState<string>()
    const [endDate, setEndDate] = useState<string>()
    const [codAut, setCodAut] = useState<string | undefined>('')
    const [counterFilter, setCounterFilter] = useState<number>(0)
    const [resultError, setResultError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState<any>()
    const [update, setUpdate] = useState<any>(false)
    const [filter, setFilter] = useState(false)
    const [openDropDown, setOpenDropDown] = useState(false)
    const [load, setLoad] = useState(false)

    const ref = useRef(null)
    const [listTransfer, transferList] = useAdjustmentInfo()

    const getToken = ({ oidcUser }: any) => {
      if (!oidcUser) return []
      const token = oidcUser.access_token
      const type = oidcUser.token_type
      const subject = oidcUser.profile.sub
      return [token, type, subject]
    }
    const [token, type] = getToken(useReactOidc())
    const authorization = `${type} ${token}`
   

    window.onload = function pageLoad() {
      if (load) {
        window.location.reload()
        setLoad(false)
      }
    }

    useEffect(() => {
      setSellerTitle(sellerName)
    }, [sellerName])

    const QrCodeService = () => {
      setIsActive(false)
      setLoading(true)
      return axios
        .post(
          '/api/instant-payments/qr-code-emv',
          {
            currency_code: selected?.commercial_information?.currency
              ? selected?.commercial_information?.currency
              : 'ARS',
            datetime_transaction: new Date(),
            qr_code_emv_type: 'static',
          },
          {
            headers: {
              ['x-seller-code']: selected?.seller_code,
              tenant: tenant,
              country: country,
              Authorization: authorization,
              ['Content-Type']: 'application/json',
            }
          }
        )
        .then((response) => {
          window.location.href = `charges/qrcode/${response.data.qr_code_id}`
          localStorage.setItem('qr_code_emv', response.data.qr_code_emv)
          localStorage.setItem('seller-trade-name', sellerName)
        })

        .catch(() => {
          setResultError(true)
          setLoading(false)
        })
    }

    const requestData = () => {
      const config = {
        country,
        tenant,
        ['merchant-id']: merchantId,
        Authorization: authorization
      }
      transferList(
        {
          page: page,
          limit: parseInt(limit),
          status: status,
          transaction_initial_date: startDate === null ? undefined : startDate,
          transaction_final_date: endDate === null ? undefined : endDate,
          seller_id: establishmentFilter,
          authorization_code: codAut === '' ? undefined : codAut
        },
        config
      )
    }
    useEffect(() => {
      requestData()

      let filterDate
      let filterStatus
      let filterEstablishment
      let filterCod

      if (startDate || endDate) {
        filterDate = 1
      } else {
        filterDate = 0
      }
      if (status) {
        filterStatus = 1
      } else {
        filterStatus = 0
      }
      if (establishmentFilter) {
        filterEstablishment = 1
      } else {
        filterEstablishment = 0
      }
      if (codAut !== '') {
        filterCod = 1
      } else {
        filterCod = 0
      }

      setCounterFilter(
        filterDate + filterStatus + filterEstablishment + filterCod
      )
    }, [page, limit, update])

    useEffect(() => {
      setPage(1)
    }, [limit])

    useEffect(() => {
      setResponseTable(listTransfer.data)
    }, [listTransfer])

    const handleClickOutside = (event: { target: any }) => {
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        setFilter(false)
      }
    }

    useEffect(() => {
      document.addEventListener('click', handleClickOutside, true)
      return () => {
        document.removeEventListener('click', handleClickOutside, true)
      }
    }, [])

    return (
      <>
        <S.Container data-testid="MyComponent">          <S.BoxStage>
            <Stage origin={t('Digital Payments')} currentRoute={t('QR Code')} />
          </S.BoxStage>
          <S.BoxTitleButton>
            <Title fontSize="32">{t('QR Code')}</Title>
            <S.BoxButtonQr>
              <S.ButtonQr
                data-testid="btn-access-qr-id"
                onClick={() => setIsActive(true)}
              >
                {t('Access a QR code')}
              </S.ButtonQr>
            </S.BoxButtonQr>
          </S.BoxTitleButton>
          <S.BoxCodes>
            <S.AttButton>
              <S.Subtitle data-testid="text-with-qr-id">
                {t('Transactions with QR Code')}
              </S.Subtitle>
              <Link
                action={() => {
                  setUpdate(!update)
                }}
                text={t('Update')}
                icon={<Update />}
              />
            </S.AttButton>
            <S.Tested ref={ref} onClick={handleClickOutside}>
              {FT_AR_TRANSF_30_TABLE === 'true' && (
                <>
                  {FT_AR_TRANSF_30_FILTER === 'true' && (
                    <>
                      <ButtonFilter
                        text={t('Filter')}
                        icon={<Filter />}
                        action={() => setFilter(!filter)}
                        counterFilter={counterFilter}
                        background={counterFilter}
                      />
                      <FilterSellerTb
                        isOpen={filter}
                        isClose={() => setFilter(false)}
                        setStatus={setStatus}
                        status={status}
                        setStartDateIso={setStartDate}
                        setEndDateIso={setEndDate}
                        actionFilter={() => {
                          setUpdate(!update),
                            setFilter(false),
                            setResponseTable(undefined)
                        }}
                        setEstablishmentFilter={setEstablishmentFilter}
                        userDetails={userDetails}
                        setCoudChange={setCodAut}
                        coudChange={codAut}
                      />
                    </>
                  )}

                  {!responseTable ? (
                    <TableLoading />
                  ) : (
                    <>
                      {responseTable.docs.length > 0 ? (
                        <>
                          <TableQr
                            data={responseTable && responseTable.docs}
                            userDetails={userDetails}
                          />
                          <Pagination
                            data={responseTable && responseTable}
                            setPage={setPage}
                            setLimit={setLimit}
                          />
                        </>
                      ) : (
                        <BoxQr action={() => setUpdate(!update)} />
                      )}
                    </>
                  )}
                </>
              )}
            </S.Tested>
          </S.BoxCodes>
        </S.Container>
        {isActive && (
          <Modal>
            <S.BoxModal>
              <S.TitleModal data-testid="text-modal-id">
                {t('Access a QR code')}
              </S.TitleModal>
              <S.SubTitleModal data-testid="text-sub-modal-id">
                {t('Which establishment do you want to see the code for?')}
              </S.SubTitleModal>
              <S.BoxBoard>
                <S.ButtonEstab
                  data-testid="btn-establishment-id"
                  onClick={() => {
                    setOpenDropDown(!openDropDown)
                  }}
                >
                  <S.TextEstab color={openDropDown}>{sellerTitle}</S.TextEstab>
                  <S.Arrow spin={openDropDown}>
                    <ArrowBottonRed />
                  </S.Arrow>
                </S.ButtonEstab>
              </S.BoxBoard>
              {openDropDown && (
                <S.SearchContainer>
                  <S.DropdownBox>
                    {userDetails?.sellers?.map((item: any, index: number) => {
                      return (
                        <S.EstabItems
                          data-testid="dropdown-item-action"
                          className="estabItems"
                          key={`seller-${index}`}
                          onClick={() => {
                            setSellerName(` ${item.trade_name}`)
                            setOpenDropDown(!openDropDown)
                            setSelected(item)
                          }}
                        >
                          {`${item.trade_name}`}
                        </S.EstabItems>
                      )
                    })}
                  </S.DropdownBox>
                </S.SearchContainer>
              )}
              <S.BoxButton>
                <S.ButtonOutlineQr
                  data-testid="btn-cancel-id"
                  onClick={() => {
                    setIsActive(false), setSellerName(establishment)
                  }}
                >
                  {t('Cancel')}
                </S.ButtonOutlineQr>
                <S.ButtonQr
                  data-testid="btn-qr-id"
                  onClick={() => QrCodeService()}
                  disabled={typeof sellerTitle === typeof establishment}
                >
                  {t('Access a Code')}
                </S.ButtonQr>
              </S.BoxButton>
            </S.BoxModal>
          </Modal>
        )}
        {loading && (
          <Modal>
            <S.BoxLoadError>
              <S.TitleLoad data-testid="loading-id">
                {t('Generating visualization...')}
              </S.TitleLoad>
              <S.SubTitleLoad data-testid="loading-text-id">
                {t('Wait a moment please')}
              </S.SubTitleLoad>
            </S.BoxLoadError>
          </Modal>
        )}
        {resultError && (
          <Modal action={() => setResultError(false)}>
            <S.BoxLoadError>
              <Error width={68} height={68} />
              <S.TitleError data-testid="title-error-id">
                {t('There was an error displaying the code. Please try again.')}
              </S.TitleError>
            </S.BoxLoadError>
          </Modal>
        )}
      </>
    )
  }
)
