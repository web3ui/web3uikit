// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgSend = ({
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
        <path d="M22.83 12.85c.06-.07.11-.14.15-.22.01-.03.03-.06.04-.09.04-.11.07-.22.07-.35 0-.12-.03-.24-.07-.35-.01-.03-.03-.06-.04-.09a.855.855 0 0 0-.15-.22c-.02-.02-.03-.04-.05-.06a.806.806 0 0 0-.26-.18L3.43 2.1c-.37-.18-.81-.11-1.11.16-.3.28-.4.72-.25 1.1l3.4 8.83-3.4 8.84a1.01 1.01 0 0 0 .26 1.1c.3.28.74.34 1.11.17l19.09-9.19c.1-.05.18-.11.25-.18.02-.02.03-.04.05-.06v-.02ZM4.84 5l12.87 6.2H7.22L4.84 5Zm2.38 8.2h10.49L4.84 19.4l2.38-6.2Z" />
    </svg>
);

export default SvgSend;
