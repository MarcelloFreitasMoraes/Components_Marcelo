import React from 'react'

interface MagnifyingGlassProps {
  width?: number
  height?: number
}

export const MagnifyingGlass = ({ width, height }: MagnifyingGlassProps) => {
  return (
    <svg
      data-testid="magnifying-glass-id"
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.216 2C13.2011 2 16.432 5.23086 16.432 9.216C16.432 10.4147 16.1397 11.5452 15.6224 12.54L21.3621 18.2802C22.2133 19.1315 22.2133 20.5111 21.3618 21.3626C20.5105 22.2126 19.1312 22.2126 18.281 21.3624L12.539 15.623C11.5444 16.1399 10.4143 16.432 9.216 16.432C5.23086 16.432 2 13.2011 2 9.216C2 5.23086 5.23086 2 9.216 2ZM13.4166 15.0839L18.9881 20.6552C19.4478 21.115 20.1945 21.115 20.6549 20.6552C21.1157 20.1945 21.1157 19.4481 20.6549 18.9874L15.0839 13.4166C14.623 14.0593 14.0593 14.623 13.4166 15.0839ZM9.216 3C5.78314 3 3 5.78314 3 9.216C3 12.6489 5.78314 15.432 9.216 15.432C12.6489 15.432 15.432 12.6489 15.432 9.216C15.432 5.78314 12.6489 3 9.216 3Z"
        fill="#EC0000"
      />
    </svg>
  )
}
