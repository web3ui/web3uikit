import React from 'react';

const telegramIcon = (
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
        <title>telegram icon</title>
        <g id="svg_1" fill={fill} transform="translate(0.000000,25.000000) scale(0.100000,-0.100000)">
   <path id="svg_2" d="m130,163c-19,-8 -46,-20 -60,-25c-24,-9 -24,-10 -6,-23c16,-12 23,-11 55,12l36,27l-34,-36c-18,-20 -30,-41 -26,-48c5,-8 10,-8 21,1c11,9 18,8 34,-6c20,-18 20,-18 44,88c7,32 -8,35 -64,10z"/>
  </g>

    </svg>
);
export default telegramIcon;
