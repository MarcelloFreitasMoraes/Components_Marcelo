import React from 'react'

interface PrintOut {
  width?: number
  height?: number
}

export const PrintOut = ({ width, height }: PrintOut) => {
  return (
    <svg
      data-testid="print-out-id"
      width={width ? width : 17}
      height={height ? height : 13}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.9949 1.84648C13.9323 1.00147 13.2251 0.333008 12.3644 0.333008H5.63265L5.5109 0.337497C4.6667 0.399975 3.99935 1.10677 3.99935 1.96631V3.66634L3.79568 3.67064C2.05525 3.75917 0.666016 5.20308 0.666016 6.96509V10.3664L0.670502 10.4881C0.732947 11.3323 1.43939 11.9997 2.29932 11.9997H2.74935L2.82429 11.993C3.01877 11.9577 3.16602 11.7877 3.16602 11.583C3.16602 11.3527 2.97966 11.1663 2.74935 11.1663H2.29932L2.20616 11.1609C1.8088 11.1147 1.49935 10.7759 1.49935 10.3664V6.96509L1.50354 6.82044C1.57867 5.52804 2.65387 4.49967 3.96517 4.49967H14.036L14.1805 4.50386C15.4717 4.57894 16.4993 5.65333 16.4993 6.96305V10.3647L16.4939 10.4581C16.4475 10.8562 16.1081 11.1663 15.6978 11.1663H15.2493L15.1744 11.173C14.9799 11.2083 14.8327 11.3783 14.8327 11.583C14.8327 11.8133 15.019 11.9997 15.2493 11.9997H15.6978L15.8196 11.9952C16.6646 11.9327 17.3327 11.2255 17.3327 10.3647V6.96305L17.3284 6.79368C17.2399 5.05443 15.7972 3.66634 14.036 3.66634H13.9993V1.96834L13.9949 1.84648ZM14.416 8.66634C14.6463 8.66634 14.8327 8.8527 14.8327 9.08301C14.8327 9.28772 14.6854 9.45772 14.491 9.49297L14.416 9.49967H13.9993V12.033C13.9993 12.893 13.332 13.5994 12.4878 13.6619L12.366 13.6663H5.63428C4.77357 13.6663 4.06635 12.9982 4.00384 12.1533L3.99935 12.0314V9.49967H3.58268C3.35238 9.49967 3.16602 9.31331 3.16602 9.08301C3.16602 8.87829 3.31326 8.7083 3.50774 8.67305L3.58268 8.66634H14.416ZM13.166 9.49967H4.83268V12.0314C4.83268 12.4417 5.14283 12.7812 5.54094 12.8276L5.63428 12.833H12.366C12.7756 12.833 13.1143 12.5236 13.1606 12.1262L13.166 12.033V9.49967ZM14.416 6.16634C14.6463 6.16634 14.8327 6.3527 14.8327 6.58301C14.8327 6.78772 14.6854 6.95772 14.491 6.99297L14.416 6.99967H12.7493C12.519 6.99967 12.3327 6.81331 12.3327 6.58301C12.3327 6.37829 12.4799 6.2083 12.6744 6.17305L12.7493 6.16634H14.416ZM5.63265 1.16634H12.3644L12.4578 1.17175C12.8559 1.21815 13.166 1.55763 13.166 1.96834V3.66634H4.83268V1.96631L4.83807 1.87315C4.88437 1.47579 5.22307 1.16634 5.63265 1.16634Z"
        fill="#EC0000"
      />
    </svg>
  )
}
