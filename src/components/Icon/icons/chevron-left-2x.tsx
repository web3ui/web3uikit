import React from 'react';

const chevronLeftX2Icon = (
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
        <title>chevron left X2 icon</title>
        <path
            d="M6.11811 11.7348C5.96063 11.8908 5.96063 12.1092 6.11811 12.2652L10.748 16.883C10.874 17.039 11.126 17.039 11.2835 16.883L11.8819 16.259C12.0394 16.1342 12.0394 15.8846 11.8819 15.7285L8.16535 12.0156L11.8819 8.27145C12.0394 8.11544 12.0394 7.89704 11.8819 7.74103L11.2835 7.117C11.126 6.961 10.874 6.961 10.748 7.117L6.11811 11.7348Z"
            fill={fill}
        />
        <path
            d="M12.1181 11.7348C11.9606 11.8908 11.9606 12.1092 12.1181 12.2652L16.748 16.883C16.874 17.039 17.126 17.039 17.2835 16.883L17.8819 16.259C18.0394 16.1342 18.0394 15.8846 17.8819 15.7285L14.1654 12.0156L17.8819 8.27145C18.0394 8.11544 18.0394 7.89704 17.8819 7.74103L17.2835 7.117C17.126 6.961 16.874 6.961 16.748 7.117L12.1181 11.7348Z"
            fill={fill}
        />
    </svg>
);
export default chevronLeftX2Icon;
