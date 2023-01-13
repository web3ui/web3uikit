// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgKey = ({
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
            d="M20.719 2.385a.875.875 0 0 1-.007 1.237l-1.177 1.165 2.08 2.059a.875.875 0 0 1 0 1.244l-3.16 3.127a.875.875 0 0 1-1.231 0L15.13 9.146l-2.512 2.485a5.745 5.745 0 0 1-.56 7.551 5.844 5.844 0 0 1-1.905 1.257 5.888 5.888 0 0 1-4.483-.015 5.845 5.845 0 0 1-1.895-1.269l-.007-.007a5.762 5.762 0 0 1-1.643-4.075 5.764 5.764 0 0 1 1.714-4.047 5.878 5.878 0 0 1 7.523-.614l8.12-8.034a.875.875 0 0 1 1.237.007Zm-9.881 9.858a4.12 4.12 0 0 0-2.906-1.16A4.118 4.118 0 0 0 5.07 12.27a4.014 4.014 0 0 0-1.195 2.818 4.012 4.012 0 0 0 1.142 2.835 4.138 4.138 0 0 0 5.81.016c.38-.378.682-.825.887-1.317a3.995 3.995 0 0 0-.876-4.379Zm5.536-4.328 1.465 1.45 1.917-1.897-1.465-1.45-1.917 1.897Z"
        />
    </svg>
);

export default SvgKey;
