// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgPieChart = ({
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
            d="M8.916 2.43A1 1 0 0 1 8.4 3.747 9 9 0 1 0 20.289 15.5a1 1 0 0 1 1.842.778A11 11 0 1 1 7.6 1.913a1 1 0 0 1 1.316.517Z"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.293 1.293A1 1 0 0 1 12 1a11 11 0 0 1 11 11 1 1 0 0 1-1 1H12a1 1 0 0 1-1-1V2a1 1 0 0 1 .293-.707ZM13 3.056V11h7.944A9 9 0 0 0 13 3.056Z"
        />
    </svg>
);

export default SvgPieChart;
