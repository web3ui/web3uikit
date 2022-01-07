import React from 'react';

const chevronRightIcon = (
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
        <title>chevron right icon</title>
        <path
            d="M14.8819 12.2652C15.0394 12.1092 15.0394 11.8908 14.8819 11.7348L10.252 7.117C10.126 6.961 9.87402 6.961 9.71654 7.117L9.11811 7.74103C8.96063 7.86583 8.96063 8.11544 9.11811 8.27145L12.8346 11.9844L9.11811 15.7285C8.96063 15.8846 8.96063 16.103 9.11811 16.259L9.71654 16.883C9.87402 17.039 10.126 17.039 10.252 16.883L14.8819 12.2652Z"
            fill={fill}
        />
    </svg>
);
export default chevronRightIcon;
