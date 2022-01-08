import React from 'react';

const arrowCircleLeftIcon = (
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
        <title>Arrow circle left</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4.63636C7.93318 4.63636 4.63636 7.93318 4.63636 12C4.63636 16.0668 7.93318 19.3636 12 19.3636C16.0668 19.3636 19.3636 16.0668 19.3636 12C19.3636 7.93318 16.0668 4.63636 12 4.63636ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12.5785 8.14873C12.8981 8.46825 12.8981 8.98629 12.5785 9.30581L10.7025 11.1818H15.2727C15.7246 11.1818 16.0909 11.5481 16.0909 12C16.0909 12.4519 15.7246 12.8182 15.2727 12.8182H10.7025L12.5785 14.6942C12.8981 15.0137 12.8981 15.5317 12.5785 15.8513C12.259 16.1708 11.741 16.1708 11.4215 15.8513L8.14873 12.5785C7.82921 12.259 7.82921 11.741 8.14873 11.4215L11.4215 8.14873C11.741 7.82921 12.259 7.82921 12.5785 8.14873Z"
            fill={fill}
        />
    </svg>
);
export default arrowCircleLeftIcon;
