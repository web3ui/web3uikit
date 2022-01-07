import React from 'react';

const plugIcon = (fill: string, size: number, style?: React.CSSProperties) => (
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
        <title>plug icon</title>
        <path
            d="M5.086 19.6986C0.971332 15.4551 0.971332 8.54493 5.086 4.30145L5.3783 4H18.6217L18.914 4.30145C23.0287 8.54493 23.0287 15.4551 18.914 19.6986L18.6217 20H5.3783L5.086 19.6986ZM6.23271 6.08696C3.28724 9.42609 3.28724 14.5739 6.23271 17.913H17.7673C20.7128 14.5739 20.7128 9.42609 17.7673 6.08696H6.23271Z"
            fill={fill}
        />
        <path d="M9 8H7V13H9V8Z" fill={fill} />
        <path d="M14 14H10V16H14V14Z" fill={fill} />
        <path d="M17 8H15V13H17V8Z" fill={fill} />
    </svg>
);
export default plugIcon;
