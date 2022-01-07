import React from 'react';

const chevronLeftIcon = (
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
        <title>chevron left icon</title>
        <path
            d="M9.11811 11.7348C8.96063 11.8908 8.96063 12.1092 9.11811 12.2652L13.748 16.883C13.874 17.039 14.126 17.039 14.2835 16.883L14.8819 16.259C15.0394 16.1342 15.0394 15.8846 14.8819 15.7285L11.1654 12.0156L14.8819 8.27145C15.0394 8.11544 15.0394 7.89704 14.8819 7.74103L14.2835 7.117C14.126 6.961 13.874 6.961 13.748 7.117L9.11811 11.7348Z"
            fill={fill}
        />
    </svg>
);
export default chevronLeftIcon;
