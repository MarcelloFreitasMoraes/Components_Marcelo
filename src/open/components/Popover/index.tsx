import React, { useEffect } from 'react'
import { PopoverStyled, Wrapper } from './styles'
import { PopoverProps } from './interface'

export const PopoverComponent = ({
  children,
  open,
  withSpacing,
  parentWidth,
  positionRelative,
  calendarPosition,
  width,
  mobileWidth,
  outsideClick,
  parentRef,
  updateOutsideClick,
  clean,
  ...others
}: PopoverProps) => {

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleClickOutside, false)
      window.addEventListener('resize', handleClose)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, false)
      window.removeEventListener('resize', handleClose)
    }
  }, [updateOutsideClick, open])

  const handleClose = () => {
    if (typeof outsideClick === 'function') {
      outsideClick(false)

    }
  }

  const handleClickOutside = (event: { target: any }) => {
    if (parentRef.current && !parentRef.current.contains(event.target)) {
      handleClose()
      clean()
    }
  }

  const getCoordinates = () => {
    if (parentRef.current) {
      const { innerWidth } = window
      const {
        offsetLeft,
        offsetTop,
        clientHeight,
        clientWidth
      } = parentRef.current

      const offsetRight = innerWidth - (offsetLeft + clientWidth) - 15
      const isOverScreen = offsetLeft > innerWidth / 2

      return {
        left: !isOverScreen ? offsetLeft : undefined,
        right: isOverScreen ? offsetRight : undefined,
        top: offsetTop + clientHeight + 5
      }
    }
  }

  let popoverWidth = width
  if (parentWidth) {
    popoverWidth = parentRef.current ? parentRef.current.clientWidth : undefined
  }

  return (
    <Wrapper positionRelative={positionRelative}>
      <PopoverStyled
        {...others}
        open={open}
        withSpacing={withSpacing}
        {...getCoordinates()}
        widthValue={popoverWidth}
        mobileWidth={mobileWidth}
        calendarPosition={calendarPosition}
      >
        {children}
      </PopoverStyled>
    </Wrapper>

  )
}