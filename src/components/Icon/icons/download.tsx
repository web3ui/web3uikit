import React from 'react';

const downloadIcon = (
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
        <title>download icon</title>
        <path
            d="M19.5 13H16.5938L18.0625 11.5625C19 10.625 18.3125 9 17 9H15V5.5C15 4.6875 14.3125 4 13.5 4H10.5C9.65625 4 9 4.6875 9 5.5V9H7C5.65625 9 4.96875 10.625 5.9375 11.5625L7.375 13H4.5C3.65625 13 3 13.6875 3 14.5V18.5C3 19.3438 3.65625 20 4.5 20H19.5C20.3125 20 21 19.3438 21 18.5V14.5C21 13.6875 20.3125 13 19.5 13ZM7 10.5H10.5V5.5H13.5V10.5H17L12 15.5L7 10.5ZM19.5 18.5H4.5V14.5H8.875L10.9375 16.5625C11.5 17.1562 12.4688 17.1562 13.0312 16.5625L15.0938 14.5H19.5V18.5ZM16.75 16.5C16.75 16.9375 17.0625 17.25 17.5 17.25C17.9062 17.25 18.25 16.9375 18.25 16.5C18.25 16.0938 17.9062 15.75 17.5 15.75C17.0625 15.75 16.75 16.0938 16.75 16.5Z"
            fill={fill}
        />
    </svg>
);
export default downloadIcon;
