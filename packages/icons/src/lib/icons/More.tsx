// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgMore = ({
    title,
    titleId,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            d="M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM17 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgMore;
