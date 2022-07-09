import React from 'react';

const minusCircleIcon = (
    fill: string,
    size: number,
    style?: React.CSSProperties,
) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill={fill}
        height={size}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        style={style}
        viewBox="0 0 32 32"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 0C7.16924 0 0 7.16924 0 16C0 24.8308 7.16924 32 16 32C24.8308 32 32 24.8308 32 16C32 7.16924 24.8308 0 16 0ZM22.4 14.4002H9.60027C8.71686 14.4002 8.00007 15.117 8.00007 16.0001C8.00007 16.8833 8.71686 17.6001 9.60027 17.6001H22.4C23.2834 17.6001 24.0002 16.8833 24.0002 16.0001C24.0002 15.117 23.2834 14.4002 22.4 14.4002Z"
        />
    </svg>
);
export default minusCircleIcon;
