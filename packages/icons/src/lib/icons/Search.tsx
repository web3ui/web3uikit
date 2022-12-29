// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgSearch = ({
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
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 4.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25zM3.125 11a7.875 7.875 0 1 1 15.75 0 7.875 7.875 0 0 1-15.75 0z"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.381 15.381a.875.875 0 0 1 1.238 0l4 4a.875.875 0 1 1-1.238 1.238l-4-4a.875.875 0 0 1 0-1.238z"
        />
    </svg>
);

export default SvgSearch;
