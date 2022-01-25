import React from 'react';

const twitterIcon = (
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
        <title>twitter icon</title>
        <g transform="translate(0.000000,25.000000) scale(0.100000,-0.100000)" fill={fill} id="svg_1">
   <path d="m127,201c-14,-38 -32,-39 -81,-6c-32,22 -37,23 -43,9c-3,-9 -1,-25 5,-35c9,-13 8,-19 -1,-22c-8,-3 -7,-10 5,-24c10,-11 18,-25 18,-31c0,-6 8,-16 18,-21c15,-9 15,-12 2,-21c-8,-5 -24,-10 -35,-10c-17,0 -17,-2 -5,-10c8,-5 38,-10 66,-10c70,0 112,30 137,95c11,28 23,57 27,66c13,25 -3,38 -53,45c-46,7 -48,6 -60,-25z" id="svg_2"/>
  </g>

    </svg>
);
export default twitterIcon;
