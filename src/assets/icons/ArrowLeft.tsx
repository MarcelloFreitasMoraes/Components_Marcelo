import React from 'react'

interface ArrowLeftProps {
  width?: number
  height?: number
}

export const ArrowLeft = ({ width, height }: ArrowLeftProps) => {
  return (
    <svg
      data-testid="arrow-left-id"
      width={width ? width : 6}
      height={height ? height : 10}
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 1L1 5L5 9"
        stroke="#EC0000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
