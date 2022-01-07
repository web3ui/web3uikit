import React from 'react';

const gridIcon = (fill: string, size: number, style?: React.CSSProperties) => (
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
        <title>grid icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 3.79747C3 3.35704 3.35704 3 3.79747 3H10.1772C10.6176 3 10.9747 3.35704 10.9747 3.79747V10.1772C10.9747 10.6176 10.6176 10.9747 10.1772 10.9747H3.79747C3.35704 10.9747 3 10.6176 3 10.1772V3.79747ZM4.59494 4.59494V9.37975H9.37975V4.59494H4.59494Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0253 3.79747C13.0253 3.35704 13.3824 3 13.8228 3H20.2025C20.643 3 21 3.35704 21 3.79747V10.1772C21 10.6176 20.643 10.9747 20.2025 10.9747H13.8228C13.3824 10.9747 13.0253 10.6176 13.0253 10.1772V3.79747ZM14.6203 4.59494V9.37975H19.4051V4.59494H14.6203Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0253 13.8228C13.0253 13.3824 13.3824 13.0253 13.8228 13.0253H20.2025C20.643 13.0253 21 13.3824 21 13.8228V20.2025C21 20.643 20.643 21 20.2025 21H13.8228C13.3824 21 13.0253 20.643 13.0253 20.2025V13.8228ZM14.6203 14.6203V19.4051H19.4051V14.6203H14.6203Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 13.8228C3 13.3824 3.35704 13.0253 3.79747 13.0253H10.1772C10.6176 13.0253 10.9747 13.3824 10.9747 13.8228V20.2025C10.9747 20.643 10.6176 21 10.1772 21H3.79747C3.35704 21 3 20.643 3 20.2025V13.8228ZM4.59494 14.6203V19.4051H9.37975V14.6203H4.59494Z"
            fill={fill}
        />
    </svg>
);
export default gridIcon;
