// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgPhone = ({
    title,
    titleId,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-5 16h.01"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        />
    </svg>
);

export default SvgPhone;
