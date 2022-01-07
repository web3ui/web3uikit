import React from 'react';

const calendarIcon = (
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
        <title>calendar icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.4 6.27273C5.95817 6.27273 5.6 6.63904 5.6 7.09091V18.5455C5.6 18.9973 5.95817 19.3636 6.4 19.3636H17.6C18.0418 19.3636 18.4 18.9973 18.4 18.5455V7.09091C18.4 6.63904 18.0418 6.27273 17.6 6.27273H6.4ZM4 7.09091C4 5.7353 5.07452 4.63636 6.4 4.63636H17.6C18.9255 4.63636 20 5.7353 20 7.09091V18.5455C20 19.9011 18.9255 21 17.6 21H6.4C5.07452 21 4 19.9011 4 18.5455V7.09091Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.2 3C15.6418 3 16 3.36631 16 3.81818V7.09091C16 7.54278 15.6418 7.90909 15.2 7.90909C14.7582 7.90909 14.4 7.54278 14.4 7.09091V3.81818C14.4 3.36631 14.7582 3 15.2 3Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.8 3C9.24183 3 9.6 3.36631 9.6 3.81818V7.09091C9.6 7.54278 9.24183 7.90909 8.8 7.90909C8.35817 7.90909 8 7.54278 8 7.09091V3.81818C8 3.36631 8.35817 3 8.8 3Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 10.3636C4 9.91177 4.35817 9.54545 4.8 9.54545H19.2C19.6418 9.54545 20 9.91177 20 10.3636C20 10.8155 19.6418 11.1818 19.2 11.1818H4.8C4.35817 11.1818 4 10.8155 4 10.3636Z"
            fill={fill}
        />
    </svg>
);
export default calendarIcon;
