// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgChart = ({
    title,
    titleId,
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
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path d="M4 4h1.684v16H4V4zm16 7.2V8.8H6.526v2.4H20zm-6.737-4V4.8H6.526v2.4h6.737zm4.211 5.6v2.4H6.526v-2.4h10.948zm-2.527 6.4v-2.4h-8.42v2.4h8.42z" />
    </svg>
);
export default SvgChart;
