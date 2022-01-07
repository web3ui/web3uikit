import React from 'react';

const maximizeIcon = (
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
        <title>maximize icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.8 3.9C13.8 3.40294 14.2029 3 14.7 3H20.1C20.5971 3 21 3.40294 21 3.9V9.3C21 9.79706 20.5971 10.2 20.1 10.2C19.6029 10.2 19.2 9.79706 19.2 9.3V4.8H14.7C14.2029 4.8 13.8 4.39706 13.8 3.9Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.9 13.8C4.39706 13.8 4.8 14.2029 4.8 14.7V19.2H9.3C9.79706 19.2 10.2 19.6029 10.2 20.1C10.2 20.5971 9.79706 21 9.3 21H3.9C3.40294 21 3 20.5971 3 20.1V14.7C3 14.2029 3.40294 13.8 3.9 13.8Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.7364 3.2636C21.0879 3.61508 21.0879 4.18492 20.7364 4.5364L14.4364 10.8364C14.0849 11.1879 13.5151 11.1879 13.1636 10.8364C12.8121 10.4849 12.8121 9.91508 13.1636 9.5636L19.4636 3.2636C19.8151 2.91213 20.3849 2.91213 20.7364 3.2636Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8364 13.1636C11.1879 13.5151 11.1879 14.0849 10.8364 14.4364L4.5364 20.7364C4.18492 21.0879 3.61508 21.0879 3.2636 20.7364C2.91213 20.3849 2.91213 19.8151 3.2636 19.4636L9.5636 13.1636C9.91508 12.8121 10.4849 12.8121 10.8364 13.1636Z"
            fill={fill}
        />
    </svg>
);
export default maximizeIcon;
