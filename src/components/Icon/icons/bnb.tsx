/* eslint-disable linebreak-style */
import React from 'react';

const bnbIcon = (fill: string, size: number, style?: React.CSSProperties) => (
    <svg
        id="Layer2"
        data-name="Layer2"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={style}
    >
        <title>bnb icon</title>
        <g id="Layer1" data-name="Layer1">
            <path
                id="Path_1"
                data-name="Path1"
                d="M7.339,10.085,12,5.424l4.663,4.663,2.712-2.712L12,0,4.627,7.373l2.712,2.712M0,12,2.712,9.288,5.424,12,2.712,14.712Zm7.339,1.915L12,18.576l4.663-4.663,2.713,2.711h0L12,24,4.627,16.627l0,0,2.716-2.708M18.576,12l2.712-2.712L24,12l-2.712,2.712Z"
                fill={fill || '#F3BA2F'}
            />
            <path
                id="Path_2"
                data-name="Path2"
                d="M968.7,965.943h0l-2.753-2.753-2.034,2.034h0l-.234.234-.482.482,0,0,0,0,2.75,2.751,2.753-2.753v0h0"
                transform="translate(-953.944 -953.944)"
                fill={fill || '#F3BA2F'}
            />
        </g>
    </svg>
);
export default bnbIcon;
