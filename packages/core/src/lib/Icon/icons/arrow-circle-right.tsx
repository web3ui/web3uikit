import React from 'react';

const arrowCircleRightIcon = (
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
        <title>Arrow circle right</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4.63636C7.93318 4.63636 4.63636 7.93318 4.63636 12C4.63636 16.0668 7.93318 19.3636 12 19.3636C16.0668 19.3636 19.3636 16.0668 19.3636 12C19.3636 7.93318 16.0668 4.63636 12 4.63636ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM11.4215 9.30581C11.1019 8.98629 11.1019 8.46825 11.4215 8.14873C11.741 7.82921 12.259 7.82921 12.5785 8.14873L15.8513 11.4215C16.1708 11.741 16.1708 12.259 15.8513 12.5785L12.5785 15.8513C12.259 16.1708 11.741 16.1708 11.4215 15.8513C11.1019 15.5317 11.1019 15.0137 11.4215 14.6942L13.2975 12.8182H8.72727C8.2754 12.8182 7.90909 12.4519 7.90909 12C7.90909 11.5481 8.2754 11.1818 8.72727 11.1818H13.2975L11.4215 9.30581Z"
            fill={fill}
        />
    </svg>
);
export default arrowCircleRightIcon;
