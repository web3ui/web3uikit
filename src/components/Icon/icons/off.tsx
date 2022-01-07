import React from 'react';

const offIcon = (fill: string, size: number, style?: React.CSSProperties) => (
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
        <title>off icon</title>
        <path
            d="M11.6154 12H12.3846C12.6923 12 13 11.5833 13 11.1667V10.5417V5.54167V5.02083V3.45833V2.9375V2.83333C12.9231 2.41667 12.6923 2 12.3846 2H11.6154C11.2308 2 11 2.41667 11 2.83333V2.9375V3.45833V5.02083V5.54167V10.4375V11.0625C11 11.5833 11.2308 12 11.6154 12Z"
            fill={fill}
        />
        <path
            d="M9 3.51212C5.50442 4.74762 3 8.08134 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 8.08134 18.4956 4.74762 15 3.51212V5.67363C17.3649 6.79709 19 9.2076 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 9.2076 6.63505 6.79709 9 5.67363V3.51212Z"
            fill={fill}
        />
    </svg>
);
export default offIcon;
