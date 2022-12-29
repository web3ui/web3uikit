// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgBalancer = ({
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
        <g clipPath="url(#balancer_svg__a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.7 0c13.253 0 24 10.747 24 24s-10.747 24-24 24S.7 37.253.7 24s10.747-24 24-24Z"
                fill="#1E1E1E"
            />
            <path
                d="M25.06 34.032c-7.675 0-13.896-2.217-13.896-5.188 0-1.55 1.694-2.948 4.406-3.932 2.117 1.359 5.67 2.055 9.697 2.055 3.93 0 7.406-.85 9.542-2.15 2.558.974 4.147 2.332 4.147 3.83 0 2.976-6.22 5.385-13.896 5.385Z"
                fill="#fff"
            />
            <path
                d="M25.142 26.299c-5.818 0-10.537-1.824-10.537-4.075 0-1.248 1.455-2.367 3.735-3.11 1.627.849 4.066 1.391 6.802 1.391 2.736 0 5.174-.542 6.801-1.392 2.285.75 3.735 1.863 3.735 3.11.004 2.252-4.714 4.076-10.536 4.076Z"
                fill="#fff"
            />
            <path
                d="M25.104 19.83c-4.498 0-8.146-1.508-8.146-3.36 0-1.853 3.648-3.36 8.146-3.36 4.497 0 8.145 1.507 8.145 3.36 0 1.852-3.648 3.36-8.145 3.36Z"
                fill="#fff"
            />
        </g>
        <defs>
            <clipPath id="balancer_svg__a">
                <path fill="#fff" transform="translate(.7)" d="M0 0h48v48H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default SvgBalancer;
