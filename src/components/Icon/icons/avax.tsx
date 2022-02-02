/* eslint-disable linebreak-style */
import React from 'react';

const avaxIcon = (fill: string, size: number, style?: React.CSSProperties) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={style}
    >
        <title>avax icon</title>
        <g id="avalanche-avax-logo" transform="translate(-0.5 54.497)">
            <rect
                id="Rectangle_2"
                data-name="Rectangle 2"
                height="24"
                transform="translate(24.5 -54.497)"
                fill="#fff"
            />
            <path
                id="Path_141"
                data-name="Path 141"
                d="M24.5,13a12,12,0,1,1-12-12A12,12,0,0,1,24.5,13ZM9.1,17.775H6.771a1.87,1.87,0,0,1-.878-.094.592.592,0,0,1-.268-.463c-.009-.174.112-.386.354-.811l5.75-10.136c.245-.43.368-.646.525-.725a.593.593,0,0,1,.537,0c.156.08.28.295.525.725L14.5,8.335l.006.011a3.871,3.871,0,0,1,.457.942,1.751,1.751,0,0,1,0,.82,3.885,3.885,0,0,1-.46.952L11.479,16.4l-.008.014a3.83,3.83,0,0,1-.588.879,1.758,1.758,0,0,1-.716.416A4.214,4.214,0,0,1,9.1,17.775Zm5.881,0h3.337a1.856,1.856,0,0,0,.887-.1.59.59,0,0,0,.268-.466c.008-.168-.11-.372-.341-.772l-.024-.042-1.672-2.859-.019-.032c-.235-.4-.353-.6-.506-.675a.587.587,0,0,0-.534,0c-.153.08-.277.289-.522.71L14.191,16.4l-.006.01c-.244.421-.366.631-.357.8a.6.6,0,0,0,.268.466A1.886,1.886,0,0,0,14.981,17.775Z"
                transform="translate(0 -55.497)"
                fill={fill || '#E84142'}
                fillRule="evenodd"
            />
        </g>
    </svg>
);
export default avaxIcon;
