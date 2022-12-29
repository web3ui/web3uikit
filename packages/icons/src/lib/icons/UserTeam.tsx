// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgUserTeam = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 21"
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
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.464 13.98A5 5 0 0 1 5 12.514h8a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.536ZM9 2.515a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM19.032 13.395a1 1 0 0 1 1.218-.719A5 5 0 0 1 24 17.514v2a1 1 0 1 1-2 0v-1.999a3 3 0 0 0-2.25-2.902 1 1 0 0 1-.718-1.218ZM15.031 1.397a1 1 0 0 1 1.217-.721 5 5 0 0 1 0 9.687 1 1 0 1 1-.496-1.937 3 3 0 0 0 0-5.813 1 1 0 0 1-.72-1.216Z"
        />
    </svg>
);

export default SvgUserTeam;
