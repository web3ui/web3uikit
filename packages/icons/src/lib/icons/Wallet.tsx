// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgWallet = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 25 25"
        fill="none"
        stroke="currentColor"
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
        <g clipPath="url(#wallet_svg__a)">
            <path
                d="M21.593 9.102V7.207a2.42 2.42 0 0 0-2.42-2.42H5.203a2.42 2.42 0 0 0-2.42 2.42v11.58a2.42 2.42 0 0 0 2.42 2.42h13.97a2.42 2.42 0 0 0 2.42-2.42v-1.895"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21.903 10.047h-6.33a1.27 1.27 0 0 0-1.27 1.27v3.35c0 .702.568 1.27 1.27 1.27h6.33a1.27 1.27 0 0 0 1.27-1.27v-3.35a1.27 1.27 0 0 0-1.27-1.27Z"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M17.963 12.998a.83.83 0 1 0-1.66 0 .83.83 0 0 0 1.66 0Z" />
        </g>
        <defs>
            <clipPath id="wallet_svg__a">
                <path
                    fill="#fff"
                    transform="translate(1.683 3.688)"
                    d="M0 0h22.58v18.62H0z"
                />
            </clipPath>
        </defs>
    </svg>
);

export default SvgWallet;
