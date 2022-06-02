import React from 'react';

const pulseIcon = (fill: string, size: number, style?: React.CSSProperties) => (
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
        <title>pulse icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.24138 3C9.5877 3 9.89517 3.21965 10.0047 3.54529L14.7586 17.6807L16.7539 11.7478C16.8635 11.4222 17.1709 11.2025 17.5172 11.2025H21.1954C21.6398 11.2025 22 11.5596 22 12C22 12.4404 21.6398 12.7975 21.1954 12.7975H18.0972L15.5219 20.4547C15.4124 20.7804 15.1049 21 14.7586 21C14.4123 21 14.1048 20.7804 13.9953 20.4547L9.24138 6.31928L7.24607 12.2522C7.13655 12.5778 6.82908 12.7975 6.48276 12.7975H2.8046C2.36023 12.7975 2 12.4404 2 12C2 11.5596 2.36023 11.2025 2.8046 11.2025H5.90284L8.47807 3.54529C8.58759 3.21965 8.89506 3 9.24138 3Z"
            fill={fill}
        />
    </svg>
);
export default pulseIcon;
