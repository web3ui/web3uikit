import React from 'react';

const trendingUp = (
    fill: string,
    size: number,
    style?: React.CSSProperties,
) => (
    <svg
        data-testid="test-icon"
        fill="none"
        height={size}
        style={style}
        viewBox="0 0 24 14"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>trending up icon</title>

        <path
            clip-rule="evenodd"
            d="M23.7071 0.292893C24.0976 0.683417 24.0976 1.31658 23.7071 1.70711L14.2071 11.2071C13.8166 11.5976 13.1834 11.5976 12.7929 11.2071L8.5 6.91421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L7.79289 4.79289C8.18342 4.40237 8.81658 4.40237 9.20711 4.79289L13.5 9.08579L22.2929 0.292893C22.6834 -0.0976311 23.3166 -0.0976311 23.7071 0.292893Z"
            fill-rule="evenodd"
            fill={fill}
        />
        <path
            clip-rule="evenodd"
            d="M16 1C16 0.447715 16.4477 2.98023e-08 17 2.98023e-08H23C23.5523 2.98023e-08 24 0.447715 24 1V7C24 7.55228 23.5523 8 23 8C22.4477 8 22 7.55228 22 7V2H17C16.4477 2 16 1.55228 16 1Z"
            fill-rule="evenodd"
            fill={fill}
        />
    </svg>
);
export default trendingUp;
