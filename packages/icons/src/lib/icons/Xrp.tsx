// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgXrp = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 19.8"
        width="1em"
        height="1em"
        role="img"
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
        <g data-name="Layer 2" opacity={0.7}>
            <g data-name="Layer 1" fill="#23292F">
                <path
                    data-name="Path1"
                    d="M20.484 0h3.469l-7.219 7.153a6.742 6.742 0 0 1-9.469 0L.044 0h3.472l5.488 5.434a4.268 4.268 0 0 0 6 0z"
                />
                <path
                    data-name="Path2"
                    d="M3.471 19.8H0l7.266-7.2a6.742 6.742 0 0 1 9.469 0l7.266 7.2h-3.47L15 14.322a4.268 4.268 0 0 0-6 0z"
                />
            </g>
        </g>
    </svg>
);

export default SvgXrp;
