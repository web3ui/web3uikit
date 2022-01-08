import React from 'react';

const arrowCircleDownIcon = (
    fill: string,
    size: number,
    style?: React.CSSProperties,
) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <title>Arrow circle down icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.3636 12C19.3636 7.93318 16.0668 4.63636 12 4.63636C7.93318 4.63636 4.63636 7.93318 4.63636 12C4.63636 16.0668 7.93318 19.3636 12 19.3636C16.0668 19.3636 19.3636 16.0668 19.3636 12ZM12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM14.6942 11.4215C15.0137 11.1019 15.5317 11.1019 15.8513 11.4215C16.1708 11.741 16.1708 12.259 15.8513 12.5785L12.5785 15.8513C12.259 16.1708 11.741 16.1708 11.4215 15.8513L8.14873 12.5785C7.82921 12.259 7.82921 11.741 8.14873 11.4215C8.46825 11.1019 8.98629 11.1019 9.30581 11.4215L11.1818 13.2975V8.72727C11.1818 8.2754 11.5481 7.90909 12 7.90909C12.4519 7.90909 12.8182 8.2754 12.8182 8.72727V13.2975L14.6942 11.4215Z"
            fill={fill}
        />
    </svg>
);
export default arrowCircleDownIcon;
