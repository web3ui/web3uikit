// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgLogIn = ({
    title,
    titleId,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        data-testid="test-icon"
        aria-hidden="true"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <g
            clipPath="url(#log-in_svg__a)"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#000"
        >
            <path d="M14 3a1 1 0 0 1 1-1h4a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-4a1 1 0 1 1 0-2h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4a1 1 0 0 1-1-1Z" />
            <path d="M9.293 6.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 12 9.293 7.707a1 1 0 0 1 0-1.414Z" />
            <path d="M2 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" />
        </g>
        <defs>
            <clipPath id="log-in_svg__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default SvgLogIn;
