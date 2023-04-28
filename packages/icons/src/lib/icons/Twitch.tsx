// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgTwitch = ({
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
            d="M2 2a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 1-.293.707l-4 4A1 1 0 0 1 17 19h-4.586l-3.707 3.707A1 1 0 0 1 7 22v-3H3a1 1 0 0 1-1-1V2Zm2 1v14h4a1 1 0 0 1 1 1v1.586l2.293-2.293A1 1 0 0 1 12 17h4.586L20 13.586V3H4Zm7 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Zm5 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Z"
        />
    </svg>
);

export default SvgTwitch;
