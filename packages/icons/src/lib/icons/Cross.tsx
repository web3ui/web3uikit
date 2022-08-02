// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgCross = ({
    title,
    titleId,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        data-testid="test-icon"
        aria-hidden="true"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path d="M16 6.586 17.414 8 8 17.414 6.586 16 16 6.586z" />
        <path d="M17.414 16 16 17.414 6.586 8 8 6.586 17.414 16z" />
    </svg>
);

export default SvgCross;
