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
        aria-hidden="true"
        data-testid="test-icon"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm4.84-13.346.947.948c.165.165.165.494 0 .7l-3.563 3.522-3.563 3.522a.474.474 0 0 1-.7 0l-3.748-3.79c-.165-.165-.165-.494 0-.7l.947-.906a.474.474 0 0 1 .7 0l2.472 2.471 5.808-5.767c.206-.205.535-.205.7 0Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgCheckmark;
