import React from 'react';

const xIcon = (fill: string, size: number, style?: React.CSSProperties) => (
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
        <title>x icon</title>
        <path
            d="M16.0001 6.58575L17.4143 7.99997L8.00015 17.4138L6.58594 15.9996L16.0001 6.58575Z"
            fill={fill}
        />
        <path
            d="M17.4142 15.9999L16 17.4141L6.58592 8.00006L8.00013 6.58585L17.4142 15.9999Z"
            fill={fill}
        />
    </svg>
);
export default xIcon;
