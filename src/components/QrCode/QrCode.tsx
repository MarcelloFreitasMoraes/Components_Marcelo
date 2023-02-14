import React, { useEffect, useRef } from 'react'
import { QrCodeProps } from './interfaces'
import QRCode from 'qrcode'
import * as S from './styles'

export const QrCode = ({ code }: QrCodeProps) => {
  const canvasRef: any = useRef()

  useEffect(() => {
    QRCode.toCanvas(canvasRef.current, code, (error) => {
      alert(error)
    })
  }, [code])

  return (
    <S.Container>
      <S.QrCodeImg
        ref={canvasRef}
        id="canvas"
        data-testid="QrCode"
      ></S.QrCodeImg>
    </S.Container>
  )
}
