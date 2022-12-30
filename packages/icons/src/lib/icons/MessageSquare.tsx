// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgMessageSquare = ({
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
            d="M6.75 6a.75.75 0 0 0-.75.75v10.19l1.72-1.72a.75.75 0 0 1 .53-.22h9a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75H6.75Zm-1.591-.841A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25H8.56l-2.78 2.78a.75.75 0 0 1-1.28-.53v-12c0-.597.237-1.169.659-1.591Z"
        />
    </svg>
);

export default SvgMessageSquare;
