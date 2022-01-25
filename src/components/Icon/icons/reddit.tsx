import React from 'react';

const redditIcon = (
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
        <title>reddit icon</title>
        <g id="svg_1" fill={fill} transform="translate(0.000000,25.000000) scale(0.100000,-0.100000)">
   <path id="svg_2" d="m63,230c-37,-22 -63,-67 -63,-107c0,-60 64,-123 125,-123c62,0 125,63 125,125c0,63 -63,125 -127,125c-15,0 -42,-9 -60,-20zm127,-40c0,-5 -7,-10 -15,-10c-8,0 -15,5 -15,10c0,6 7,10 15,10c8,0 15,-4 15,-10zm12,-56c4,-3 2,-17 -3,-33c-23,-66 -125,-65 -148,1c-11,30 -3,38 54,50c18,4 79,-8 97,-18z"/>
   <path id="svg_3" d="m85,110c3,-5 10,-10 16,-10c5,0 9,5 9,10c0,6 -7,10 -16,10c-8,0 -12,-4 -9,-10z"/>
   <path id="svg_4" d="m140,110c0,-5 4,-10 9,-10c6,0 13,5 16,10c3,6 -1,10 -9,10c-9,0 -16,-4 -16,-10z"/>
  </g>
    </svg>
);
export default redditIcon;
