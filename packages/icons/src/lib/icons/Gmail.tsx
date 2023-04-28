// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgGmail = ({
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
        fill="none"
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
        <path
            d="M3.795 19.137h3.023v-7.34L2.5 8.556v9.285c0 .717.58 1.295 1.295 1.295Z"
            fill="#4285F4"
        />
        <path
            d="M17.182 19.137h3.022c.717 0 1.296-.58 1.296-1.295V8.558l-4.318 3.238"
            fill="#34A853"
        />
        <path
            d="M17.182 6.183v5.613L21.5 8.558V6.83c0-1.602-1.829-2.515-3.11-1.554"
            fill="#FBBC04"
        />
        <path
            d="M6.818 11.796V6.183L12 10.069l5.182-3.886v5.613L12 15.683"
            fill="#EA4335"
        />
        <path
            d="M2.5 6.83v1.728l4.318 3.238V6.183L5.61 5.276C4.327 4.315 2.5 5.228 2.5 6.83Z"
            fill="#C5221F"
        />
    </svg>
);

export default SvgGmail;
