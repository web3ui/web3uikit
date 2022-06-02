import React from 'react';

const chartIcon = (fill: string, size: number, style?: React.CSSProperties) => (
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
        <title>chart icon</title>
        <path d="M4 4H5.68421V20H4V4Z" fill={fill} />
        <path d="M20 11.2V8.8L6.52632 8.8V11.2L20 11.2Z" fill={fill} />
        <path
            d="M13.2632 7.2V4.8L6.52632 4.8L6.52632 7.2L13.2632 7.2Z"
            fill={fill}
        />
        <path
            d="M17.4737 12.8V15.2H6.52632L6.52632 12.8L17.4737 12.8Z"
            fill={fill}
        />
        <path
            d="M14.9474 19.2L14.9474 16.8L6.52632 16.8V19.2H14.9474Z"
            fill={fill}
        />
    </svg>
);
export default chartIcon;
