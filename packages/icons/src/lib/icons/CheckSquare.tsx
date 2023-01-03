// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgCheckSquare = ({
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
            d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 1 1 2 0v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h11a1 1 0 1 1 0 2H5Zm16.293-.707a1 1 0 1 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L12 12.586l9.293-9.293Z"
        />
    </svg>
);

export default SvgCheckSquare;
