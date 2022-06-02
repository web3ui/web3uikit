import React from 'react';

const expandIcon = (
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
        <title>expand icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.7552 5.24481C21.0816 5.57121 21.0816 6.10043 20.7552 6.42684L6.42684 20.7552C6.10043 21.0816 5.57121 21.0816 5.24481 20.7552C4.9184 20.4288 4.9184 19.8996 5.24481 19.5732L19.5732 5.24481C19.8996 4.9184 20.4288 4.9184 20.7552 5.24481ZM20.7552 13.8418C21.0816 14.1682 21.0816 14.6974 20.7552 15.0239L15.0239 20.7552C14.6974 21.0816 14.1682 21.0816 13.8418 20.7552C13.5154 20.4288 13.5154 19.8996 13.8418 19.5732L19.5732 13.8418C19.8996 13.5154 20.4288 13.5154 20.7552 13.8418Z"
            fill={fill}
        />
    </svg>
);
export default expandIcon;
