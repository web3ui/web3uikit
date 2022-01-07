import React from 'react';

const mailIcon = (fill: string, size: number, style?: React.CSSProperties) => (
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
        <title>mail icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.64373 5.57746C4.07661 5.57746 3.60925 6.0356 3.60925 6.59155V17.4085C3.60925 17.9644 4.07661 18.4225 4.64373 18.4225H19.3563C19.9234 18.4225 20.3907 17.9644 20.3907 17.4085V6.59155C20.3907 6.0356 19.9234 5.57746 19.3563 5.57746H4.64373ZM2.00007 6.59155C2.00007 5.1644 3.18788 4 4.64373 4H19.3563C20.8121 4 21.9999 5.1644 21.9999 6.59155V17.4085C21.9999 18.8356 20.8121 20 19.3563 20H4.64373C3.18788 20 2.00007 18.8356 2.00007 17.4085V6.59155Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.14551 6.13924C2.40034 5.78238 2.90203 5.69559 3.26606 5.94539L12 11.9386L20.7339 5.94539C21.098 5.69559 21.5997 5.78238 21.8545 6.13924C22.1093 6.4961 22.0208 6.9879 21.6567 7.2377L12.4614 13.5476C12.1844 13.7377 11.8156 13.7377 11.5386 13.5476L2.34326 7.2377C1.97922 6.9879 1.89069 6.4961 2.14551 6.13924Z"
            fill={fill}
        />
    </svg>
);
export default mailIcon;
