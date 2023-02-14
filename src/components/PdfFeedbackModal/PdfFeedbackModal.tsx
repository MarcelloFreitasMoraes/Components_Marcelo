import React, { useContext, useCallback } from 'react'
import { t } from '@albatross/react-i18n'
import { Icon } from '@albatross/ui'
import { PdfFeedbackModalProps } from './interfaces'
import { Modal } from '../Modal'
import successIcon from '../../assets/images/success-glyph.png'
import noContentIcon from '../../assets/images/no-content-glyph.png'
import errorIcon from '../../assets/images/gn_ilust_erro.png'
import {
  LoadingContainer,
  Container,
  Image,
  Title,
  Paragraph,
  Button,
} from './styles'

const getModalHeightByStatus = (stataus: string) => {
  switch (stataus) {
    case 'loading':
      return '252px'
    case 'success':
      return '344px'
    case 'noContent':
      return '360px'
    default:
      return '360px'
  }
}

export const PdfFeedbackModal = ({
  open,
  setOpen,
  status,
  index,
  maxIndex,
}: PdfFeedbackModalProps) => {
  const handleCloseModal = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return (
    <Modal open={open} width={'348px'} height={getModalHeightByStatus(status)}>
      <>
        {status === 'loading' && (
          <Container>
            <LoadingContainer>
              <Icon name="loading" size={'big'} spinning color="primary" />
            </LoadingContainer>
            <Title data-testid="modal-status-title">
              {t('Loading files ')}
              {index}
              {t(' of ')}
              {maxIndex}
              ...
            </Title>
          </Container>
        )}
        {status === 'success' && (
          <Container>
            <Image src={successIcon} />
            <Title data-testid="modal-status-title">
              {t('Successfully completed')}
            </Title>
            <Paragraph data-testid="modal-status-content">
              {t(
                'Your download is complete. Feel free to request new reports when necessary.'
              )}
            </Paragraph>
            <Button onClick={handleCloseModal}>{t('Ok')}</Button>
          </Container>
        )}
        {status === 'noContent' && (
          <Container>
            <Image src={noContentIcon} />
            <Title data-testid="modal-status-title">{t('Important')}</Title>
            <Paragraph data-testid="modal-status-content">
              {t(
                "We don't have information for the selected period. It's necessary to wait for the information to be processed"
              )}
            </Paragraph>
            <Button onClick={handleCloseModal}>{t('Ok')}</Button>
          </Container>
        )}
        {status === 'error' && (
          <Container>
            <Image src={errorIcon} />
            <Title data-testid="modal-status-title">{t('We are sorry')}</Title>
            <Paragraph data-testid="modal-status-content">
              {t(
                'We couldn not process your request. Resend your request or try again later'
              )}
            </Paragraph>
            <Button onClick={handleCloseModal}>{t('Ok')}</Button>
          </Container>
        )}
      </>
    </Modal>
  )
}
