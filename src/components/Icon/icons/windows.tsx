import React from 'react';

const windowsIcon = (
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
        <title>windows icon</title>
        <path
            d="M4 4V11.6786H11.6786V4H4ZM12.3214 4V11.6786H20V4H12.3214ZM4 12.3214V20H11.6786V12.3214H4ZM12.3214 12.3214V20H20V12.3214H12.3214Z"
            fill={fill}
        />
    </svg>
);
export default windowsIcon;
