import React from 'react';

const checkmarkIcon = (
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
        <title>checkmark icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM16.8398 7.65446L17.7872 8.60183C17.952 8.76659 17.952 9.09611 17.7872 9.30206L14.2243 12.8238L10.6613 16.3455C10.4554 16.5515 10.1671 16.5515 9.9611 16.3455L6.21282 12.5561C6.04806 12.3913 6.04806 12.0618 6.21282 11.8558L7.16019 10.9497C7.36614 10.7437 7.65447 10.7437 7.86042 10.9497L10.3318 13.4211L16.1396 7.65446C16.3455 7.44851 16.6751 7.44851 16.8398 7.65446Z"
            fill={fill}
        />
    </svg>
);
export default checkmarkIcon;
