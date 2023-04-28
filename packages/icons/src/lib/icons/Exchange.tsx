// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgExchange = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="currentColor"
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
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L19.586 5l-3.293-3.293a1 1 0 0 1 0-1.414Z"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 6a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0V9a5 5 0 0 1 5-5h14a1 1 0 1 1 0 2H7ZM7.707 14.293a1 1 0 0 1 0 1.414L4.414 19l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 12a1 1 0 0 1 1 1v2a5 5 0 0 1-5 5H3a1 1 0 1 1 0-2h14a3 3 0 0 0 3-3v-2a1 1 0 0 1 1-1Z"
        />
    </svg>
);

export default SvgExchange;
