import React from 'react';

const phoneIcon = (fill: string, size: number, style?: React.CSSProperties) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill={fill}
        height={size}
        style={style}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>Phone Icon</title>
        <path
            d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"
            fill="none"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
        <path
            d="M12 18H12.01"
            fill="none"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);
export default phoneIcon;
