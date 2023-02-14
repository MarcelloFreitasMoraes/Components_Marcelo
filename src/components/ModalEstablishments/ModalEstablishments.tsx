/* eslint-disable @typescript-eslint/no-extra-semi */
/* eslint-disable complexity */
import React, { useContext, useEffect, useRef, useState } from 'react'
import * as S from './styles'
import {
  ModalEstablishmentsProps,
  SelectedSellerProps,
  SellerProps,
} from './interface'
import { I18nContext } from '@albatross/react-i18n'
import SearchInput from '../SearchInput/SearchInput'
import { SearchIcon } from '../../assets/icons/SearchIcon'
import { ClearIcon } from '../../assets/icons/ClearIcon'
import { ButtonContinue } from '../ButtonContinue'
import { useSellers } from '../../hooks/SellersHook'
import { Icon } from '@albatross/ui'
import { useHistory } from 'react-router'

export const ModalEstablishments = ({
  width,
  height,
  fullScreen = false,
  open,
  setOpen,
  userDetails,
  setSelectedEstablishment,
}: ModalEstablishmentsProps) => {
  const timeOut = useRef()
  const { translate } = useContext(I18nContext)
  const [searchString, setSearchString] = useState('')
  const [isSearchAvailable, setIsSearchAvailable] = useState(true)
  const [loading, setLoading] = useState(false)
  const [modalSearchInfos, setModalSearchInfos] = useState('')
  const [selectedSeller, setSelectedSeller] = useState<SelectedSellerProps>()
  const [sellersList, setSellersList] = useState<Array<SellerProps>>([])
  const [hideClearIcon, setHideClearIcon] = useState(false)
  const { getSellersList, getSellersListResult } = useSellers()
  const history = useHistory()

  const fetchSellers = (tradeName: any) => {
    setLoading(true)

    if (userDetails?.sellers) {
      setLoading(false)
      const filteredList = userDetails?.sellers?.filter(
        (seller: { trade_name: string }) =>
          seller.trade_name.toUpperCase().includes(tradeName.toUpperCase())
      )
      if (filteredList.length > 0) {
        setSellersList(filteredList)
        setIsSearchAvailable(true)
      } else {
        setIsSearchAvailable(false)
      }
    }
  }

  const checkSearchInput = (value: any) => {
    setSearchString(value)
    setHideClearIcon(true)
    setModalSearchInfos('loading')
    clearTimeout(timeOut.current)
    if (value.length > 2 || value.length === 0) {
      setLoading(true)
      // @typescript-eslint/no-extra-semi
      ;(timeOut.current as unknown as number) = window.setTimeout(() => {
        fetchSellers(value)
        clearTimeout(timeOut.current)
        setLoading(false)
        setModalSearchInfos('')
      }, 3000)
    }
  }

  const clickIconSearch = (value: any) => {
    setLoading(true)
    if (value.length > 2 || value.length === 0) {
      fetchSellers(value)
      setLoading(false)
    }
  }

  const handleButton = () => {
    setSelectedEstablishment(selectedSeller)
    setOpen(false)
  }

  useEffect(() => {
    fetchSellers(searchString)
  }, [])

  useEffect(() => {
    //TODO: Remover comentários
    fetchSellers('')
  }, [userDetails?.sellers])

  if (open) {
    return (
      <S.Container data-testid="modal-testid">
        <S.ModalContent width={width} fullScreen={fullScreen} height={height}>
          <S.ModalTitleContainer>
            <S.ModalTitle>{translate('Select establishment')}</S.ModalTitle>
            <S.CloseBtn
              data-testid="btn-close-modal"
              type="button"
              onClick={() => history.goBack()}
            >
              <S.CloseIcon name="closed" />
            </S.CloseBtn>
          </S.ModalTitleContainer>
          <S.ModalBodyContent>
            <SearchInput
              value={searchString}
              onChange={(value: { target: { value: any } }) =>
                checkSearchInput(value.target.value)
              }
              placeholder={
                translate('Search for an establishment') as unknown as string
              }
              customAfterIcon={
                <div onClick={() => clickIconSearch(searchString)}>
                  <SearchIcon />
                </div>
              }
              icon={
                searchString &&
                hideClearIcon && (
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => checkSearchInput('')}
                  >
                    <ClearIcon />
                  </div>
                )
              }
            />
            {!loading ? (
              isSearchAvailable ? (
                <S.SellerList>
                  {sellersList?.map((item, index) => (
                    <S.SellerListItem
                      key={index}
                      onClick={() => (
                        setSelectedSeller(item), setHideClearIcon(false)
                      )}
                    >
                      <S.SellerSelector
                        type="checkbox"
                        checked={selectedSeller?.seller_id === item?.seller_id}
                      />

                      <S.SellerListItemInfos>
                        <div className="UpperContent">
                          <p>{item?.trade_name}</p>
                        </div>
                      </S.SellerListItemInfos>
                    </S.SellerListItem>
                  ))}
                </S.SellerList>
              ) : (
                <S.NoDataText>{translate('No data found')}</S.NoDataText>
              )
            ) : (
              <S.LoadingContent>
                <Icon name="loading" size={'big'} spinning color="primary" />

                <p>{translate('loading...')}</p>
              </S.LoadingContent>
            )}
            <ButtonContinue
              text={translate('Continue')}
              disabled={!selectedSeller}
              action={handleButton}
            />
          </S.ModalBodyContent>
        </S.ModalContent>
      </S.Container>
    )
  } else {
    return <></>
  }
}
