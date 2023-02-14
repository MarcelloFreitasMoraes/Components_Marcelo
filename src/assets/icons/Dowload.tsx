import React from "react"

interface Download {
    width?: number
    height?: number
}

export const Download = ({ width, height }: Download) => {
    return (
        <svg width={width ? width : 18} height={height ? height : 18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_25821_504" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                <path d="M16.9136 11.5003C17.1439 11.5003 17.3302 11.6863 17.3302 11.9162V14.0291C17.3302 15.8512 15.8451 17.3337 14.0197 17.3337H3.97656C2.1512 17.3337 0.666016 15.8512 0.666016 14.0291V11.9162C0.666016 11.6863 0.852376 11.5003 1.08268 11.5003C1.31299 11.5003 1.49935 11.6863 1.49935 11.9162V14.0291C1.49935 15.3922 2.611 16.5018 3.97656 16.5018H14.0197C15.3853 16.5018 16.4969 15.3922 16.4969 14.0291V11.9162C16.4969 11.6863 16.6833 11.5003 16.9136 11.5003ZM8.99935 0.666992C9.24569 0.666992 9.44503 0.860757 9.44503 1.10021V11.6884L11.9886 9.21602C12.1627 9.04679 12.4447 9.04679 12.6188 9.21602C12.7929 9.38524 12.7929 9.65939 12.6188 9.82862L9.315 13.04C9.27377 13.0802 9.22437 13.1121 9.16953 13.1342C9.06061 13.1779 8.93809 13.1779 8.82917 13.1342C8.77433 13.1121 8.72493 13.0802 8.68369 13.04L5.37992 9.82862C5.29287 9.744 5.24935 9.63316 5.24935 9.52232C5.24935 9.41147 5.29287 9.30063 5.37992 9.21601C5.55402 9.04679 5.83605 9.04679 6.01014 9.21601L8.55367 11.6884V1.10021C8.55367 0.860757 8.75301 0.666992 8.99935 0.666992Z" fill="white" />
            </mask>
            <g mask="url(#mask0_25821_504)">
                <path d="M16.9136 11.5003C17.1439 11.5003 17.3302 11.6863 17.3302 11.9162V14.0291C17.3302 15.8512 15.8451 17.3337 14.0197 17.3337H3.97656C2.1512 17.3337 0.666016 15.8512 0.666016 14.0291V11.9162C0.666016 11.6863 0.852376 11.5003 1.08268 11.5003C1.31299 11.5003 1.49935 11.6863 1.49935 11.9162V14.0291C1.49935 15.3922 2.611 16.5018 3.97656 16.5018H14.0197C15.3853 16.5018 16.4969 15.3922 16.4969 14.0291V11.9162C16.4969 11.6863 16.6833 11.5003 16.9136 11.5003ZM8.99935 0.666992C9.24569 0.666992 9.44503 0.860757 9.44503 1.10021V11.6884L11.9886 9.21602C12.1627 9.04679 12.4447 9.04679 12.6188 9.21602C12.7929 9.38524 12.7929 9.65939 12.6188 9.82862L9.315 13.04C9.27377 13.0802 9.22437 13.1121 9.16953 13.1342C9.06061 13.1779 8.93809 13.1779 8.82917 13.1342C8.77433 13.1121 8.72493 13.0802 8.68369 13.04L5.37992 9.82862C5.29287 9.744 5.24935 9.63316 5.24935 9.52232C5.24935 9.41147 5.29287 9.30063 5.37992 9.21601C5.55402 9.04679 5.83605 9.04679 6.01014 9.21601L8.55367 11.6884V1.10021C8.55367 0.860757 8.75301 0.666992 8.99935 0.666992Z" fill="#EC0000" />
                <path d="M19 -1H-1V19H19V-1Z" fill="#EC0000" />
            </g>
        </svg>
    )
}