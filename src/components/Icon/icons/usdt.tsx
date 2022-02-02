/* eslint-disable linebreak-style */
import React from 'react';

const usdtIcon = (fill: string, size: number, style?: React.CSSProperties) => (
    <svg
        id="tether-usdt-logo"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size / 1.14997}
        viewBox="0 0 24 20.87"
        style={style}
    >
        <title>usdt icon</title>
        <path
            id="Path_1"
            data-name="Path1"
            d="M4.4.1.023,9.291A.178.178,0,0,0,.062,9.5L11.881,20.82a.18.18,0,0,0,.25,0L23.949,9.5a.178.178,0,0,0,.038-.208L19.611.1A.177.177,0,0,0,19.45,0H4.562A.177.177,0,0,0,4.4.1Z"
            transform="translate(-0.005 0)"
            fill={fill || '#50AF95'}
            fillRule="evenodd"
        />
        <path
            id="Path_2"
            data-name="Path2"
            d="M73.083,47.642h0c-.085.006-.522.033-1.5.033-.777,0-1.328-.023-1.522-.033h0c-3-.133-5.242-.657-5.242-1.285s2.24-1.152,5.242-1.286v2.049c.2.014.758.047,1.535.047.932,0,1.4-.039,1.483-.047V45.072c3,.134,5.23.658,5.23,1.285s-2.235,1.151-5.23,1.284h0Zm0-2.782V43.026h4.18v-2.8H65.882v2.8h4.179v1.833c-3.4.157-5.951.832-5.951,1.642s2.555,1.484,5.951,1.642v5.876h3.021V48.14c3.389-.157,5.939-.831,5.939-1.64s-2.548-1.483-5.939-1.641h0Zm0,0Z"
            transform="translate(-59.566 -37.379)"
            fill="#fff"
            fillRule="evenodd"
        />
    </svg>
);
export default usdtIcon;
