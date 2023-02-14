import React from 'react'

interface ArrowBottonRedProps {
  width?: number
  height?: number
}

export const ArrowBottonRed = ({ width, height }: ArrowBottonRedProps) => {
  return (
    <svg
      data-testid="arrow-botton-Red-id"
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 10L12 14L16 10"
        stroke="#EC0000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
