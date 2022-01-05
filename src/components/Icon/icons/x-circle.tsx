import React from 'react';

const xCircleIcon = (fill: string, size: number | string) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>x circle icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.3636 12C19.3636 7.93318 16.0668 4.63636 12 4.63636C7.93318 4.63636 4.63636 7.93318 4.63636 12C4.63636 16.0668 7.93318 19.3636 12 19.3636C16.0668 19.3636 19.3636 16.0668 19.3636 12ZM12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
            fill={fill}
        />
        <path
            d="M14.695 8.19964C15.0145 7.88012 15.5326 7.88012 15.8521 8.19964C16.1716 8.51916 16.1716 9.0372 15.8521 9.35672L12.5794 12.6295C12.2598 12.949 11.7418 12.949 11.4223 12.6295L8.14955 9.35672C7.83003 9.0372 7.83003 8.51916 8.14955 8.19964C8.46907 7.88012 8.98712 7.88012 9.30664 8.19964L12.0008 10.8938L14.695 8.19964Z"
            fill={fill}
        />
        <path
            d="M9.30664 15.7989C8.98712 16.1184 8.46907 16.1184 8.14955 15.7989C7.83003 15.4794 7.83003 14.9613 8.14955 14.6418L11.4223 11.3691C11.7418 11.0496 12.2598 11.0496 12.5794 11.3691L15.8521 14.6418C16.1716 14.9613 16.1716 15.4794 15.8521 15.7989C15.5326 16.1184 15.0145 16.1184 14.695 15.7989L12.0008 13.1047L9.30664 15.7989Z"
            fill={fill}
        />
    </svg>
);
export default xCircleIcon;
