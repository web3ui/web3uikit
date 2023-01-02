// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgTarget = ({
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
            d="M3.055 11H6a1 1 0 1 1 0 2H3.055A9.004 9.004 0 0 0 11 20.945V18a1 1 0 1 1 2 0v2.945A9.004 9.004 0 0 0 20.945 13H18a1 1 0 1 1 0-2h2.945A9.004 9.004 0 0 0 13 3.055V6a1 1 0 1 1-2 0V3.055A9.004 9.004 0 0 0 3.055 11ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z"
        />
    </svg>
);

export default SvgTarget;
