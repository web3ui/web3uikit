import React from 'react';

const chevronUpIcon = (
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
        <title>chevron up icon</title>
        <path
            d="M12.2652 9.11811C12.1092 8.96063 11.8908 8.96063 11.7348 9.11811L7.117 13.748C6.961 13.874 6.961 14.126 7.117 14.2835L7.74103 14.8819C7.86583 15.0394 8.11544 15.0394 8.27145 14.8819L11.9844 11.1654L15.7285 14.8819C15.8846 15.0394 16.103 15.0394 16.259 14.8819L16.883 14.2835C17.039 14.126 17.039 13.874 16.883 13.748L12.2652 9.11811Z"
            fill={fill}
        />
    </svg>
);
export default chevronUpIcon;
