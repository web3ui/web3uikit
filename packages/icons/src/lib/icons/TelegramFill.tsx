// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgTelegramFill = ({
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
        <path d="M2.29 11.47c5.28-2.19 10.57-4.33 15.89-6.42l3.45-1.35c.27-.07.62-.12.88.07.33.24.34.76.34.95 0 1.49-2.11 14.26-2.3 15.41-.02.12-.1.47-.41.74-.4.35-.98.3-1.22.27-1.21-.13-2.27-1.08-3.41-1.86-2.47-1.68-3.93-1.61-4.36-3.01a2.62 2.62 0 0 1-.07-1.15c.39-.45.8-.9 1.22-1.35 1.67-1.8 3.35-3.39 5-4.8.12-.27.28-.68.14-.81-.18-.17-.74.17-1.01.34-1.59.99-6.9 4.67-8.25 5.61-.31.16-.83.38-1.49.41-.87.04-1.1-.29-2.97-.95-1.16-.41-1.61-.47-1.76-.88-.16-.43.12-.92.34-1.22h-.01Z" />
    </svg>
);

export default SvgTelegramFill;
