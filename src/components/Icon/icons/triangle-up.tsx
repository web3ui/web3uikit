import React from 'react';

const triangleUpIcon = (
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
        <title>triangle up icon</title>
        <path
            d="M11.6464 9.35355L6.85355 14.1464C6.53857 14.4614 6.76165 15 7.20711 15H16.7929C17.2383 15 17.4614 14.4614 17.1464 14.1464L12.3536 9.35355C12.1583 9.15829 11.8417 9.15829 11.6464 9.35355Z"
            fill={fill}
        />
    </svg>
);
export default triangleUpIcon;
