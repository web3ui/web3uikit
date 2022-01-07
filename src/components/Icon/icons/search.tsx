import React from 'react';

const searchIcon = (
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
        <title>search icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 4.875C7.61726 4.875 4.875 7.61726 4.875 11C4.875 14.3827 7.61726 17.125 11 17.125C14.3827 17.125 17.125 14.3827 17.125 11C17.125 7.61726 14.3827 4.875 11 4.875ZM3.125 11C3.125 6.65076 6.65076 3.125 11 3.125C15.3492 3.125 18.875 6.65076 18.875 11C18.875 15.3492 15.3492 18.875 11 18.875C6.65076 18.875 3.125 15.3492 3.125 11Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.3813 15.3813C15.723 15.0396 16.277 15.0396 16.6187 15.3813L20.6187 19.3813C20.9604 19.723 20.9604 20.277 20.6187 20.6187C20.277 20.9604 19.723 20.9604 19.3813 20.6187L15.3813 16.6187C15.0396 16.277 15.0396 15.723 15.3813 15.3813Z"
            fill={fill}
        />
    </svg>
);
export default searchIcon;
