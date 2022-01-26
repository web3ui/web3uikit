/* eslint-disable linebreak-style */
import React from 'react';

const xrpIcon = (fill: string, size: number, style?: React.CSSProperties) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size / 1.230769230769231}
        viewBox="0 0 24 19.8"
    >
        <g id="Layer_2" data-name="Layer 2" opacity="0.7" style={style}>
            <title>xrp icon</title>
            <g id="Layer_1" data-name="Layer 1">
                <path
                    id="Path_1"
                    data-name="Path1"
                    d="M21.38,0h3.469L17.63,7.153a6.742,6.742,0,0,1-9.469,0L.94,0H4.412L9.9,5.434a4.268,4.268,0,0,0,6,0Z"
                    transform="translate(-0.896)"
                    fill={fill || '#23292F'}
                />
                <path
                    id="Path_2"
                    data-name="Path2"
                    d="M3.471,238.327H0l7.266-7.2a6.742,6.742,0,0,1,9.469,0l7.266,7.2H20.531L15,232.849a4.268,4.268,0,0,0-6,0Z"
                    transform="translate(0 -218.527)"
                    fill={fill || '#23292F'}
                />
            </g>
        </g>
    </svg>
);
export default xrpIcon;
