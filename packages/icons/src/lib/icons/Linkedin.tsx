// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgLinkedin = ({
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
        <path d="M4.465 6.885a2.39 2.39 0 1 0 0-4.78 2.39 2.39 0 0 0 0 4.78ZM6.475 8.665h-4.08v13.19h4.08V8.665ZM17.775 21.895c1.38-.01 2.77-.03 4.15-.04-.01-2.74-.03-5.49-.04-8.23 0-.31-.03-.75-.12-1.27-.1-.61-.18-1.12-.46-1.69-.1-.2-.48-.93-1.31-1.54-1-.73-2.03-.81-2.54-.85-1.01-.07-1.75.17-1.92.23-.78.26-1.3.67-1.61.92-.2.16-.49.4-.79.73v-1.5h-4.08v13.19h4.08v-7.46c0-.19.03-.46.13-.77.27-.77.85-1.18 1.04-1.31.18-.12.51-.34 1-.42.22-.04.82-.13 1.42.23.46.27.67.66.77.85.26.48.27.93.27 1.15v7.77l.01.01Z" />
    </svg>
);

export default SvgLinkedin;
