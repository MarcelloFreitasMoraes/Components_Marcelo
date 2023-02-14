import React from "react"

interface SuccessfullyProps {
    width?: number
    height?: number
}

export const Successfully = ({ width, height }: SuccessfullyProps) => {
    return (
        <svg data-testid='successfully-id' width={width ? width : 97} height={height ? height : 97} viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M48.5 8C70.556 8 88.5 25.944 88.5 48C88.5 70.056 70.556 88 48.5 88C26.444 88 8.5 70.056 8.5 48C8.5 25.944 26.444 8 48.5 8ZM48.5 12C28.648 12 12.5 28.148 12.5 48C12.5 67.852 28.648 84 48.5 84C68.352 84 84.5 67.852 84.5 48C84.5 28.148 68.352 12 48.5 12ZM64.5056 28.9204C65.1016 27.9844 66.3376 27.7284 67.2696 28.3124C68.1976 28.9084 68.4736 30.1444 67.8776 31.0764L47.2656 63.3604C46.9336 63.8764 46.3856 64.2124 45.7776 64.2684C45.7096 64.2764 45.6456 64.2804 45.5776 64.2804C45.0376 64.2804 44.5176 64.0644 44.1376 63.6684L29.0576 48.0044C28.2936 47.2084 28.3176 45.9404 29.1136 45.1764C29.9056 44.4164 31.1736 44.4364 31.9416 45.2284L45.2576 59.0644L64.5056 28.9204Z" fill="#63BA68" />
        </svg>

    )
}