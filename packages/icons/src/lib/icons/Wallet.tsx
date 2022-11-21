// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgWallet = ({
    title,
    titleId,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        data-testid="test-icon"
        aria-hidden="true"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <g clipPath="url(#wallet_svg__a)" stroke="#CACFD3">
            <path
                d="M20.832 8.312V6.417a2.42 2.42 0 0 0-2.42-2.42H4.442a2.42 2.42 0 0 0-2.42 2.42v11.58a2.42 2.42 0 0 0 2.42 2.42h13.97a2.42 2.42 0 0 0 2.42-2.42v-1.895"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21.142 9.257h-6.33a1.27 1.27 0 0 0-1.27 1.27v3.35c0 .702.569 1.27 1.27 1.27h6.33a1.27 1.27 0 0 0 1.27-1.27v-3.35a1.27 1.27 0 0 0-1.27-1.27Z"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.372 11.877a.33.33 0 1 1 0 .66.33.33 0 0 1 0-.66Z"
                fill="#000"
            />
        </g>
        <defs>
            <clipPath id="wallet_svg__a">
                <path
                    fill="#fff"
                    transform="translate(.922 2.897)"
                    d="M0 0h22.58v18.62H0z"
                />
            </clipPath>
        </defs>
    </svg>
);
export default SvgWallet;
