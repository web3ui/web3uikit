import React from 'react';

const cloudIcon = (fill: string, size: number, style?: React.CSSProperties) => (
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
        <title>cloud icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.24673 10.1605L6.45645 10.296C4.87436 10.5674 3.66667 12.0123 3.66667 13.75C3.66667 15.683 5.15905 17.25 7 17.25H17.8333C19.214 17.25 20.3333 16.0747 20.3333 14.625C20.3333 13.313 19.415 12.223 18.2167 12.0304L17.1201 11.8542L16.8517 10.724C16.3093 8.44025 14.3405 6.75 12 6.75C10.1312 6.75 8.49953 7.82571 7.6398 9.42794L7.24673 10.1605ZM18.4688 10.3006C17.7457 7.25579 15.1237 5 12 5C9.50539 5 7.3308 6.43867 6.18774 8.56893C3.81262 8.97634 2 11.1409 2 13.75C2 16.6495 4.23858 19 7 19H17.8333C20.1345 19 22 17.0412 22 14.625C22 12.4356 20.4684 10.6219 18.4688 10.3006Z"
            fill={fill}
        />
    </svg>
);
export default cloudIcon;
