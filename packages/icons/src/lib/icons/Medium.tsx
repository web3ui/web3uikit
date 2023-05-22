// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgMedium = ({
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
        <path d="M13.414 12c0 3.311-2.773 6-6.207 6C3.772 18 1 15.311 1 12s2.772-6 6.207-6c3.434 0 6.207 2.689 6.207 6Zm6.8 0c0 3.113-1.393 5.642-3.104 5.642-1.71 0-3.103-2.53-3.103-5.642 0-3.113 1.393-5.642 3.103-5.642 1.71 0 3.104 2.516 3.104 5.642ZM23 12c0 2.795-.483 5.06-1.09 5.06-.607 0-1.09-2.265-1.09-5.06 0-2.795.483-5.06 1.09-5.06.607 0 1.09 2.265 1.09 5.06Z" />
    </svg>
);

export default SvgMedium;
