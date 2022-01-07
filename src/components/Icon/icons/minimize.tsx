import React from 'react';

const minimizeIcon = (
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
        <title>minimize icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 13.875C4 13.3918 4.39175 13 4.875 13H10.125C10.6082 13 11 13.3918 11 13.875V19.125C11 19.6082 10.6082 20 10.125 20C9.64175 20 9.25 19.6082 9.25 19.125V14.75H4.875C4.39175 14.75 4 14.3582 4 13.875Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.875 4C14.3582 4 14.75 4.39175 14.75 4.875V9.25H19.125C19.6082 9.25 20 9.64175 20 10.125C20 10.6082 19.6082 11 19.125 11H13.875C13.3918 11 13 10.6082 13 10.125V4.875C13 4.39175 13.3918 4 13.875 4Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.7397 3.26035C21.0868 3.60748 21.0868 4.1703 20.7397 4.51743L14.5174 10.7397C14.1703 11.0868 13.6075 11.0868 13.2603 10.7397C12.9132 10.3925 12.9132 9.8297 13.2603 9.48257L19.4826 3.26035C19.8297 2.91322 20.3925 2.91322 20.7397 3.26035Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.7397 13.2603C11.0868 13.6075 11.0868 14.1703 10.7397 14.5174L4.51743 20.7397C4.1703 21.0868 3.60748 21.0868 3.26035 20.7397C2.91322 20.3925 2.91322 19.8297 3.26035 19.4826L9.48257 13.2603C9.8297 12.9132 10.3925 12.9132 10.7397 13.2603Z"
            fill={fill}
        />
    </svg>
);
export default minimizeIcon;
