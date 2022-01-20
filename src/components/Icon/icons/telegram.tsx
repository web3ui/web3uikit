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
        <path
            d="m2770,3379c-2048,-815 -1836,-728 -1856,-765c-24,-45 -11,-100 31,-129c17,-11 188,-69 380,-129c193,-60 355,-114 361,-120c6,-6 75,-213 153,-461c124,-393 146,-453 172,-478c32,-29 70,-34 105,-14c12,7 117,101 233,209l212,197l302,-222c529,-387 514,-377 557,-377c43,0 82,26 98,67c18,46 562,2398 562,2429c0,116 -97,214 -210,213c-35,0 -270,-90 -1100,-420zm1020,157c-14,-12 -380,-339 -815,-726c-434,-386 -800,-712 -812,-724c-19,-18 -28,-59 -63,-261c-23,-132 -44,-248 -48,-258c-8,-19 -208,682 -201,702c4,9 1947,1290 1959,1291c2,0 -7,-11 -20,-24z"
            fill={fill}
        />

    </svg>
);
export default telegramIcon;
