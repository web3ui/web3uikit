import React from 'react';

const chevronRightX2Icon = (
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
        <title>chevron right X2 icon</title>
        <path
            d="M17.8819 11.7348C18.0394 11.8908 18.0394 12.1092 17.8819 12.2652L13.252 16.883C13.126 17.039 12.874 17.039 12.7165 16.883L12.1181 16.259C11.9606 16.1342 11.9606 15.8846 12.1181 15.7285L15.8346 12.0156L12.1181 8.27145C11.9606 8.11544 11.9606 7.89704 12.1181 7.74103L12.7165 7.117C12.874 6.961 13.126 6.961 13.252 7.117L17.8819 11.7348Z"
            fill={fill}
        />
        <path
            d="M11.8819 11.7348C12.0394 11.8908 12.0394 12.1092 11.8819 12.2652L7.25197 16.883C7.12598 17.039 6.87402 17.039 6.71654 16.883L6.11811 16.259C5.96063 16.1342 5.96063 15.8846 6.11811 15.7285L9.83465 12.0156L6.11811 8.27145C5.96063 8.11544 5.96063 7.89704 6.11811 7.74103L6.71654 7.117C6.87402 6.961 7.12598 6.961 7.25197 7.117L11.8819 11.7348Z"
            fill={fill}
        />
    </svg>
);
export default chevronRightX2Icon;
