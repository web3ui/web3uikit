// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgUsdt = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 49 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        data-testid="test-icon"
        aria-hidden="true"
        style={
            isResponsive
                ? style
                : {
                      flex: 'none',
                      ...style,
                  }
        }
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <g clipPath="url(#usdt_svg__a)" fillRule="evenodd" clipRule="evenodd">
            <path
                d="M9.69 3.206.936 21.698a.36.36 0 0 0 .077.418L24.65 44.899a.36.36 0 0 0 .5 0l23.636-22.782a.358.358 0 0 0 .077-.418L40.112 3.208A.354.354 0 0 0 39.789 3H10.015a.352.352 0 0 0-.326.206Z"
                fill="#50AF95"
            />
            <path
                d="M27.938 23.597c-.17.013-1.047.065-3.003.065-1.555 0-2.66-.046-3.047-.065-6.012-.266-10.499-1.319-10.499-2.579 0-1.26 4.488-2.311 10.499-2.582v4.113c.393.028 1.519.095 3.074.095 1.867 0 2.802-.078 2.97-.094v-4.11c5.999.268 10.476 1.32 10.476 2.578 0 1.258-4.476 2.31-10.476 2.578l.006.001Zm0-5.583v-3.68h8.371V8.723H13.516v5.611h8.37v3.678c-6.803.315-11.92 1.67-11.92 3.295 0 1.624 5.117 2.978 11.92 3.294v11.792h6.05V24.597c6.788-.314 11.896-1.669 11.896-3.292 0-1.622-5.104-2.977-11.896-3.293l.002.002Z"
                fill="#fff"
            />
        </g>
        <defs>
            <clipPath id="usdt_svg__a">
                <path
                    fill="#fff"
                    transform="translate(.9 3)"
                    d="M0 0h48v42H0z"
                />
            </clipPath>
        </defs>
    </svg>
);

export default SvgUsdt;
