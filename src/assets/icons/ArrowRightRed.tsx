import React from 'react'

interface ArrowRightProps {
  width?: number
  height?: number
}

export const ArrowRightRed = ({ width, height }: ArrowRightProps) => {
  return (
    <svg
      data-testid="arrow-right-red-id"
      width={width ? width : 20}
      height={height ? height : 20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9957 19.0041C13.7302 19.0056 13.4751 18.9013 13.2867 18.7141L7.29537 12.7141C7.10633 12.5263 7 12.2707 7 12.0041C7 11.7375 7.10633 11.4819 7.29537 11.2941L13.2867 5.29409C13.6782 4.90197 14.3131 4.90197 14.7046 5.29409C15.0962 5.68621 15.0962 6.32197 14.7046 6.71409L9.4123 12.0041L14.7046 17.2941C14.8937 17.4819 15 17.7375 15 18.0041C15 18.2707 14.8937 18.5263 14.7046 18.7141C14.5162 18.9013 14.2611 19.0056 13.9957 19.0041Z"
        fill="#EC0000"
      />
    </svg>
  )
}
