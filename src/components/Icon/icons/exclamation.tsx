import React from 'react';

const exclamationIcon = (
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
        <title>exclamation icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.9942 14.1048C12.8289 14.1048 13.5184 14.7944 13.5184 15.629C13.5184 16.5 12.8289 17.1532 11.9942 17.1532C11.1232 17.1532 10.47 16.5 10.47 15.629C10.47 14.7944 11.1232 14.1048 11.9942 14.1048ZM10.7966 12.9073L10.5426 7.97177C10.5426 7.71774 10.724 7.5 10.9781 7.5H12.974C13.2281 7.5 13.4095 7.71774 13.4095 7.97177L13.1555 12.9073C13.1555 13.125 12.9377 13.3065 12.72 13.3065H11.2321C11.0143 13.3065 10.7966 13.125 10.7966 12.9073Z"
            fill={fill}
        />
    </svg>
);
export default exclamationIcon;
