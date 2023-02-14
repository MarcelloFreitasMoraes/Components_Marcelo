import React from 'react'

interface ArrowTopRedProps {
  width?: number
  height?: number
}

export const ArrowTopRed = ({ width, height }: ArrowTopRedProps) => {
  return (
    <svg
      data-testid="arrow-top-red-id"
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 14L12 10L8 14"
        stroke="#EC0000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
