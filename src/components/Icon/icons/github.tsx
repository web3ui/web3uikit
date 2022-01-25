import React from 'react';

const githubIcon = (
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
        <title>github icon</title>
        <g id="svg_1" fill={fill} transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)">
   <path id="svg_2" d="m34,166c-42,-42 -45,-82 -8,-125c26,-31 44,-40 44,-21c0,6 -6,10 -14,10c-8,0 -17,7 -20,16c-5,14 -4,15 8,5c8,-7 21,-9 27,-5c9,5 5,10 -10,16c-19,7 -22,14 -19,50l3,42l55,-1l55,-1l3,-40c2,-32 -1,-43 -17,-51c-13,-7 -17,-17 -14,-31c7,-27 17,-25 47,11c37,43 34,83 -8,125c-46,46 -86,46 -132,0z"/>
  </g>

    </svg>
);
export default githubIcon;
