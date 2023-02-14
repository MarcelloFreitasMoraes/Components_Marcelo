import React from 'react'

interface ArrowRightProps {
  width?: number
  height?: number
}

export const ArrowRight = ({ width, height }: ArrowRightProps) => {
  return (
    <svg
      data-testid="arrow-right-id"
      width={width ? width : 6}
      height={height ? height : 10}
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L5 5L1 9" stroke="#222222" />
    </svg>
  )
}
