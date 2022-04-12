/* eslint-disable linebreak-style */
import React from 'react';

const filIcon = (fill: string, size: number, style?: React.CSSProperties) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={style}
    >
        <title>fil icon</title>
        <g id="filecoin-fil-logo" transform="translate(0 0.001)">
            <path
                id="Path_1742"
                data-name="Path 1742"
                d="M12,24a12,12,0,1,1,12-11.88A12.048,12.048,0,0,1,12,24"
                transform="translate(0 0)"
                fill={fill || '#0090FF'}
                fillRule="evenodd"
            />
            <path
                id="Path_1743"
                data-name="Path 1743"
                d="M17.321,13.068l-.361,1.917,3.43.479-.241.9-3.37-.479c-.241.779-.361,1.618-.662,2.337-.3.839-.6,1.678-.963,2.456a3.246,3.246,0,0,1-2.467,1.917,2.42,2.42,0,0,1-1.926-.359A.8.8,0,0,1,10.4,21.7a.857.857,0,0,1,.3-.659,1.089,1.089,0,0,1,.6.06,2.661,2.661,0,0,1,.481.659.861.861,0,0,0,1.324.18,3.616,3.616,0,0,0,1.023-1.8c.361-1.438.722-2.816,1.023-4.254v-.24l-3.19-.479.12-.9,3.31.479.421-1.857-3.43-.539.12-.959,3.551.479c.12-.359.181-.659.3-.959A8.87,8.87,0,0,1,17.682,7.8,3.176,3.176,0,0,1,20.51,6.3a1.871,1.871,0,0,1,1.444.6.509.509,0,0,1,.181.3,1,1,0,0,1-.181.719.58.58,0,0,1-.782-.12c-.181-.18-.3-.359-.481-.539a.823.823,0,0,0-1.324-.12,3.837,3.837,0,0,0-.782,1.138c-.421,1.258-.722,2.576-1.143,3.894l3.31.479-.241.9-3.19-.479"
                transform="translate(-4.178 -2.506)"
                fill="#fff"
                fillRule="evenodd"
            />
        </g>
    </svg>
);
export default filIcon;
