import { ArrowLeft } from './ArrowLeft'
import React from 'react'

interface ArrowLeftRedProps {
  width?: number
  height?: number
}

export const ArrowLeftRed = ({ width, height }: ArrowLeftRedProps) => {
  return (
    <svg
      data-testid="arrow-left-red-id"
      width={width ? width : 20}
      height={height ? height : 20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0043 4.99589C10.2698 4.99437 10.5249 5.09872 10.7133 5.28591L16.7046 11.2859C16.8937 11.4737 17 11.7293 17 11.9959C17 12.2625 16.8937 12.5181 16.7046 12.7059L10.7133 18.7059C10.3218 19.098 9.68692 19.098 9.29537 18.7059C8.90382 18.3138 8.90382 17.678 9.29537 17.2859L14.5877 11.9959L9.29537 6.70591C9.10633 6.51814 9 6.26255 9 5.99591C9 5.72927 9.10633 5.47368 9.29537 5.28591C9.48382 5.09872 9.73893 4.99437 10.0043 4.99589Z"
        fill="#EC0000"
      />
    </svg>
  )
}
