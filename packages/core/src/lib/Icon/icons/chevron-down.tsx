import React from 'react';

const chevronDownIcon = (
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
        <title>chevron down icon</title>
        <path
            d="M11.7348 15.8819C11.8908 16.0394 12.1092 16.0394 12.2652 15.8819L16.883 11.252C17.039 11.126 17.039 10.874 16.883 10.7165L16.259 10.1181C16.1342 9.96063 15.8846 9.96063 15.7285 10.1181L12.0156 13.8346L8.27145 10.1181C8.11544 9.96063 7.89704 9.96063 7.74103 10.1181L7.117 10.7165C6.961 10.874 6.961 11.126 7.117 11.252L11.7348 15.8819Z"
            fill={fill}
        />
    </svg>
);
export default chevronDownIcon;
