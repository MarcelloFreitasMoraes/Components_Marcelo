import React, { FC, useRef } from 'react'
import * as S from './styles'
import QRCode from 'qrcode.react'
import ReactToPrint from 'react-to-print'
import { Link } from '../../components/Link'
import { Buttons } from './styles'
import FileSaver from 'file-saver'
import { t } from '@albatross/react-i18n'
import { Download } from '../../assets/icons/Download'
import { ArrowLeft } from '../../assets/icons/ArrowLeft'
import { PrintOut } from '../../assets/icons/PrintOut'

export const QrCodeId: FC = React.memo(() => {
  const sellerName = localStorage.getItem('seller-trade-name')
  const idQrCode = localStorage.getItem('qr_code_emv')

  const ComponentToPrint = (props: any) => {
    const { componentToPrint } = props

    return (
      <S.QrCodeContainer ref={(el: any) => (componentToPrint.current = el)}>
        {idQrCode && <QRCode id="qrCodeId" size={368} value={idQrCode} />}
      </S.QrCodeContainer>
    )
  }

  const downloadImage = () => {
    const canvas: any = document.getElementById('qrCodeId')
    canvas?.toBlob(function (blob: any) {
      FileSaver(blob, 'qr-code.png')
    })
  }
  const componentToPrint = useRef(null)

  return (
    <>
      <S.ContainerBut data-testid="qr-code-id">
        <S.DLink>
          <Link
            text={t('Back to Transactions with QR Code')}
            icon={<ArrowLeft />}
            iconLeft
            action={() => (window.location.href = `charges/qrcode/list`)}
          />
        </S.DLink>
        <S.BoxQrCode>
          <S.BoxQrAlign>
            <S.SellerName data-testid="seller-id">{sellerName}</S.SellerName>
            <ComponentToPrint data-testid="to-print-id" componentToPrint={componentToPrint} />
            <Buttons>
              <ReactToPrint
                data-testid="print-id"
                trigger={() => (
                  <S.Container>
                    <S.AlignText>
                      <S.LinkAction>
                        <S.TextPrint data-testid="text-toPrint-id">{t('To print')} </S.TextPrint>
                        <PrintOut />
                      </S.LinkAction>
                    </S.AlignText>
                  </S.Container>
                )}
                content={() => componentToPrint.current}
              />
              <Link
                data-testid='link-id'
                text="Download"
                icon={<Download />}
                action={() => {
                  downloadImage()
                }}
              />
            </Buttons>
          </S.BoxQrAlign>
        </S.BoxQrCode>
      </S.ContainerBut>
    </>
  )
})
