// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgWallet = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 25 24"
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
            d="M5.203 4.89a1.32 1.32 0 0 0-1.32 1.32v11.58c0 .729.59 1.32 1.32 1.32h13.97a1.32 1.32 0 0 0 1.32-1.32v-1.895a1.1 1.1 0 0 1 2.2 0v1.895a3.52 3.52 0 0 1-3.52 3.52H5.203a3.52 3.52 0 0 1-3.52-3.52V6.21a3.52 3.52 0 0 1 3.52-3.52h13.97a3.52 3.52 0 0 1 3.52 3.52v1.895a1.1 1.1 0 0 1-2.2 0V6.21a1.32 1.32 0 0 0-1.32-1.32H5.203Z"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.573 10.15a.17.17 0 0 0-.17.17v3.35c0 .094.076.17.17.17h6.33a.17.17 0 0 0 .17-.17v-3.35a.17.17 0 0 0-.17-.17h-6.33Zm-2.37.17a2.37 2.37 0 0 1 2.37-2.37h6.33a2.37 2.37 0 0 1 2.37 2.37v3.35a2.37 2.37 0 0 1-2.37 2.37h-6.33a2.37 2.37 0 0 1-2.37-2.37v-3.35Z"
        />
        <path d="M17.963 12a.83.83 0 1 0-1.66 0 .83.83 0 0 0 1.66 0Z" />
    </svg>
);

export default SvgWallet;
