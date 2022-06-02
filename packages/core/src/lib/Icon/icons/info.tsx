import React from 'react';

const infoIcon = (fill: string, size: number, style?: React.CSSProperties) => (
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
        <title>info icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM12.0058 9.89516C11.1711 9.89516 10.4816 9.20565 10.4816 8.37097C10.4816 7.5 11.1711 6.84677 12.0058 6.84677C12.8768 6.84677 13.53 7.5 13.53 8.37097C13.53 9.20565 12.8768 9.89516 12.0058 9.89516ZM13.2034 11.0927V16.0282C13.2034 16.2823 13.0219 16.5 12.7679 16.5H11.28C11.026 16.5 10.8445 16.2823 10.8445 16.0282V11.0927C10.8445 10.875 11.0623 10.6935 11.28 10.6935H12.7679C12.9857 10.6935 13.2034 10.875 13.2034 11.0927Z"
            fill={fill}
        />
    </svg>
);
export default infoIcon;
