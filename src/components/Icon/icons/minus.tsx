import React from 'react';

const minusIcon = (fill: string, size: number, style?: React.CSSProperties) => (
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
        <title>minus icon</title>
        <path d="M11 11H13V13H11V11Z" fill={fill} />
        <path d="M18 11V13L6 13L6 11L18 11Z" fill={fill} />
    </svg>
);
export default minusIcon;
