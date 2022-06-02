import React from 'react';

const triangleDownIcon = (
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
        <title>triangleDown icon</title>
        <path
            d="M11.6464 16.6464L6.85355 11.8536C6.53857 11.5386 6.76165 11 7.20711 11H16.7929C17.2383 11 17.4614 11.5386 17.1464 11.8536L12.3536 16.6464C12.1583 16.8417 11.8417 16.8417 11.6464 16.6464Z"
            fill={fill}
        />
    </svg>
);
export default triangleDownIcon;
