// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgBeanOutline = ({
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
            d="M9.95 8.838c-.85.73-2.232 1.504-3.21 1.769-3.253 1.017-5.039 3.184-4.699 5.66C2.466 19.365 5.698 21 8.675 21h.064c5.762-.066 11.567-4.622 12.928-10.172.638-2.123.34-4.577-.723-6.081C20.136 3.597 18.924 3 17.414 3c-2.088 0-3.444 1.523-5.022 3.296l-.038.043-.176.199c-.687.777-1.385 1.566-2.227 2.3Zm3.9-1.171-.183.206c-.675.765-1.457 1.65-2.403 2.473l-.005.005-.006.005c-1.025.879-2.642 1.805-3.947 2.17-2.746.868-3.435 2.368-3.283 3.47.117.857.616 1.571 1.463 2.118.873.564 2.039.886 3.19.886h.05c4.863-.062 9.86-4.003 10.998-8.648l.012-.05.015-.05c.5-1.66.198-3.448-.44-4.35l-.004-.005c-.4-.569-.973-.897-1.893-.897-.501 0-.953.165-1.51.59-.617.469-1.22 1.14-2.055 2.077Z"
            fill="#000"
        />
    </svg>
);

export default SvgBeanOutline;
