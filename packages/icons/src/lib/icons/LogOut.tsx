// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgLogOut = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        role="img"
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
        <path d="M7 3.875A1.125 1.125 0 0 0 5.875 5v14A1.125 1.125 0 0 0 7 20.125h4a.875.875 0 0 1 0 1.75H7A2.875 2.875 0 0 1 4.125 19V5A2.875 2.875 0 0 1 7 2.125h4a.875.875 0 0 1 0 1.75H7zm9.381 3.506a.875.875 0 0 1 1.238 0l4 4a.875.875 0 0 1 0 1.238l-4 4a.875.875 0 1 1-1.238-1.238L19.763 12 16.38 8.619a.875.875 0 0 1 0-1.238z" />
        <path d="M11.125 12c0-.483.392-.875.875-.875h9a.875.875 0 0 1 0 1.75h-9a.875.875 0 0 1-.875-.875z" />
    </svg>
);

export default SvgLogOut;
