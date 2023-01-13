// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgWithdraw = ({
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
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 4a1 1 0 0 0-1 1v4a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v4a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1H5Zm7 4a1 1 0 0 1 1 1v9.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L11 18.586V9a1 1 0 0 1 1-1Z"
            fill="#000"
        />
    </svg>
);

export default SvgWithdraw;
