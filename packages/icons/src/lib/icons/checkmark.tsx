// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgCheckmark = ({
    title,
    titleId,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 18 18"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        data-testid="test-icon"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18Zm4.84-13.346.947.948c.165.165.165.494 0 .7l-3.563 3.522-3.563 3.521a.474.474 0 0 1-.7 0L3.213 9.556c-.165-.165-.165-.494 0-.7l.947-.906a.474.474 0 0 1 .7 0l2.472 2.471 5.808-5.767c.205-.205.535-.205.7 0Z"
        />
    </svg>
);

export default SvgCheckmark;
